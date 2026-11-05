(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7062],
    {
        1698: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            var s = i(88800),
                l = i(37770);
            let r = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: r,
                    centered: a,
                    withInfo: n,
                    count: o = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: p,
                } = e;
                return Array.from(Array(o).keys()).map((e) =>
                    (0, s.jsx)(
                        l.V,
                        { isActive: t, linesCount: d, className: i, round: r, centered: a, withInfo: n, withSubcover: p, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
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
        6322: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => a });
            var s = i(88800),
                l = i(15077),
                r = i(33719);
            let a = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, s.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: l.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        9492: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => h });
            var s = i(88800),
                l = i(65724),
                r = i(53548),
                a = i(2058),
                n = i(88969),
                o = i(96817),
                c = i(52300),
                d = i(29504),
                u = i(59304),
                p = i(4044),
                m = i.n(p);
            let h = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    p = (0, r.useRef)(null),
                    { formatMessage: h } = (0, a.A)();
                (0, r.useEffect)(() => {
                    var e;
                    null == (e = p.current) || e.focus();
                }, []);
                let _ = (0, r.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(n.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(o.$, {
                                    ref: p,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': h({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [h, t],
                );
                return (0, s.jsx)(u.$, { className: (0, l.$)(m().root, m().important), message: _, closeToast: i });
            };
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
        13946: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => H });
            var s = i(88800),
                l = i(65724),
                r = i(84961),
                a = i(53548),
                n = i(79070),
                o = i(17610),
                c = i(24548),
                d = i(29993),
                u = i(72288),
                p = i(35994);
            let m = (e, t) => {
                let { withLink: i, separator: s } = t,
                    l = i && !e.various ? (0, p.R)(e.id) : null;
                return { artist: e, name: e.name, separator: s, link: l };
            };
            var h = i(21010),
                _ = i.n(h),
                g = i(17392),
                v = i(29504),
                x = i(91292),
                C = i(2058),
                y = i(87999),
                f = i(80643),
                k = i(78940),
                A = i(55693),
                N = i(58217);
            let L = (0, r.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: l, captionSize: r = 'm', allArtistsTitle: a, withCustomTooltip: n, hoverSettings: c } = e,
                        {
                            name: p,
                            link: m,
                            title: h,
                            ariaLabel: _,
                            tooltipText: L,
                            isTooltipEnabled: T,
                            handleNavigate: S,
                        } = ((e) => {
                            var t, i;
                            let { item: s, allArtistsTitle: l, withCustomTooltip: r } = e,
                                { formatMessage: a } = (0, C.A)(),
                                n = ((e, t) => {
                                    let { item: i, allArtistsTitle: s, withCustomTooltip: l } = e,
                                        r = s || i.name;
                                    return {
                                        ...i,
                                        title: l ? void 0 : r,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: r,
                                        isTooltipEnabled: !s && l,
                                    };
                                })({ item: s, allArtistsTitle: l, withCustomTooltip: r }, a),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                p = (0, k.Z)(null != (i = null == (t = n.link) ? void 0 : t.href) ? i : n.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, A.z)(),
                                h = (0, f.S)(),
                                _ = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), p(e));
                                }),
                                g = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: l, fullscreenVideoPlayer: r } = (0, u.g)(),
                                        { modal: a } = s;
                                    return (0, N.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), a.isOpened && (s.reset(), a.close()), l.modal.isOpened && l.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            r.modal.isOpened && (r.modal.close(), r.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: n.artist, callback: _ }),
                                v = (0, d.c)((e) => {
                                    (h({ to: y.AppScreen.ArtistScreen }), null == m || m(), g(e));
                                });
                            return { ...n, handleNavigate: v };
                        })({ item: t, allArtistsTitle: a, withCustomTooltip: n });
                    return m
                        ? (0, s.jsx)(x.N, {
                              ...m,
                              'aria-label': _,
                              className: i,
                              onClick: S,
                              title: h,
                              'data-test-id': g.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: T,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: L,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(v.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: l, children: p }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: T,
                              offsetOptions: 4,
                              placement: 'top',
                              text: L,
                              hoverSettings: c,
                              children: (0, s.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: l,
                                  title: h,
                                  'data-test-id': g.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: p,
                              }),
                          });
                }),
                T = (e) => {
                    let { group: t, linkClassName: i, captionClassName: l, captionSize: r, allArtistsTitle: n, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(L, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: l,
                                captionSize: r,
                                allArtistsTitle: n,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, s.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, s.jsx)(L, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: l,
                                                captionSize: r,
                                                allArtistsTitle: n,
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
            var S = i(88969),
                j = i(65453);
            let R = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: r } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(j.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(_().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': g.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(S.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var P = i(61013),
                E = i(87819),
                b = i(40634),
                I = i(48468),
                O = i.n(I);
            let w = (0, r.PA)((e) => {
                    let { label: t, artists: i, forwardRef: l } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, E.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: l, children: t }),
                            (0, s.jsx)(o.ZI, { className: O().tooltipContent, children: i.map((e) => (0, s.jsx)(b.V, { artist: e, className: O().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, a.forwardRef)((e, t) => (0, s.jsx)(w, { forwardRef: t, ...e }));
            var F = i(19934),
                M = i(70396),
                B = i.n(M);
            let z = (0, r.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: r } = (0, C.A)();
                    return (0, s.jsx)(F.W1, {
                        isMobile: !0,
                        className: (0, l.$)(B().root, B().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(b.V, { artist: e }, e.id)),
                    });
                }),
                U = (0, r.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: l } = e,
                        [r, o] = (0, a.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        p = (0, d.c)(() => {
                            let e = l.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, n.L)(() =>
                            (0, P.A)(() => {
                                p();
                            }, 100),
                        );
                    if (
                        ((0, a.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                p(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, p],
                        ),
                        (0, a.useEffect)(() => {
                            p();
                        }, [t, p]),
                        0 !== t.length)
                    )
                        return (r || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(z, { artists: t, label: i }) : (0, s.jsx)(D, { artists: t, label: i })) : i;
                }),
                H = (0, r.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: r,
                            linkClassName: p,
                            captionClassName: h,
                            captionSize: g,
                            variant: v = 'breakAll',
                            spoilerComponent: x,
                            ...C
                        } = e,
                        y = ((e) => {
                            var t, i, s;
                            let { separator: l, visibleArtistsCount: r, withLink: n, withComposer: o, artistIdWithoutLink: c, withContextMenu: p } = e,
                                h = null != (t = e.artists) ? t : [],
                                _ = null == (i = e.withAllArtistsTitle) || i,
                                g = null == (s = e.withCustomTooltip) || s,
                                v = (0, a.useRef)(null),
                                [x, C] = (0, a.useState)(!1),
                                {
                                    settings: { isMobile: y },
                                } = (0, u.g)(),
                                f = ((!y || 1 === h.length) && p) || !p,
                                k = ((e, t) => {
                                    var i, s, l;
                                    let r = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        a = null == (s = null == t ? void 0 : t.withLink) || s,
                                        n = null != (l = null == t ? void 0 : t.separator) ? l : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(n),
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
                                                let { withLink: s, separator: l, isFirst: r } = t;
                                                return {
                                                    primary: m(e, { withLink: s, separator: r ? void 0 : l }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = l ? e.separator : '';
                                                        return m(e, { withLink: s, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: a && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: n, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(h, { separator: l, visibleArtistsCount: x ? void 0 : r, withComposer: o, withLink: !!f && n, artistIdWithoutLink: c }),
                                A = _ ? k.allArtistsTitle : '',
                                N = (0, d.c)((e) => {
                                    (C(!0), e.preventDefault());
                                });
                            return {
                                artists: h,
                                groups: k.groups,
                                hiddenArtistsCount: k.hiddenArtistsCount,
                                allArtistsTitle: A,
                                withCustomTooltip: g,
                                withContextMenu: p,
                                labelRef: v,
                                handleOnSpoilerClick: N,
                                isTooltipEnabled: !!A && g && !p && !y,
                                title: !A || g || p ? void 0 : A,
                            };
                        })(C),
                        f = (0, n.L)(() =>
                            y.hiddenArtistsCount <= 0
                                ? null
                                : (0, a.isValidElement)(x)
                                  ? x
                                  : (0, s.jsx)(R, { spoilerClassName: r, spoilerArtistsCount: y.hiddenArtistsCount, handleOnSpoilerClick: y.handleOnSpoilerClick }),
                        ),
                        k = (0, s.jsx)(o.m_, {
                            referenceRef: y.labelRef,
                            enabled: y.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: y.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, l.$)(_().root, _()['root_variant_'.concat(v)], { [_().root_clamp]: i && i > 0, [_().ellipsis]: !i }, t),
                                title: y.title,
                                children: [
                                    y.groups.map((e) =>
                                        (0, s.jsx)(
                                            T,
                                            {
                                                group: e,
                                                linkClassName: p,
                                                captionClassName: h,
                                                captionSize: g,
                                                allArtistsTitle: y.allArtistsTitle,
                                                withCustomTooltip: y.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    f,
                                ],
                            }),
                        });
                    return y.withContextMenu ? (0, s.jsx)(U, { labelRef: y.labelRef, artists: y.artists, label: k }) : k;
                });
        },
        14567: (e, t) => {
            (e.exports = function (e, t, s, l) {
                return JSON.stringify(e, i(t, l), s);
            }).getSerialize = i;
            function i(e, t) {
                var i = [],
                    s = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return i[0] === t ? '[Circular ~]' : '[Circular ~.' + s.slice(0, i.indexOf(t)).join('.') + ']';
                        }),
                    function (l, r) {
                        if (i.length > 0) {
                            var a = i.indexOf(this);
                            (~a ? i.splice(a + 1) : i.push(this), ~a ? s.splice(a, 1 / 0, l) : s.push(l), ~i.indexOf(r) && (r = t.call(this, l, r)));
                        } else i.push(r);
                        return null == e ? r : e.call(this, l, r);
                    }
                );
            }
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
        17657: (e) => {
            e.exports = {
                root: 'PlaylistCard_root__i3pR4',
                srTitleLink: 'PlaylistCard_srTitleLink__Gg2Dy',
                controls: 'PlaylistCard_controls__Ej8Rz',
                cover: 'PlaylistCard_cover__tpK5L',
                coverBlock: 'PlaylistCard_coverBlock__1slsN',
                image: 'PlaylistCard_image__Li6oy',
                titleLink: 'PlaylistCard_titleLink__H8qEc',
                artists: 'PlaylistCard_artists__HtVIF',
                artistLink: 'PlaylistCard_artistLink__jx3KB',
                playButton: 'PlaylistCard_playButton__eaduk',
                likeButton: 'PlaylistCard_likeButton__RYXJz',
                menuButton: 'PlaylistCard_menuButton__jFcWr',
                pinButton: 'PlaylistCard_pinButton__jhWnL',
                trailerButton: 'PlaylistCard_trailerButton__Qjg_U',
                control: 'PlaylistCard_control__73YUq',
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
        23877: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { Q: () => l, c: () => s }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(s || (s = {})));
            let l = { [s.ERROR]: 'error', [s.WARNING]: 'warn', [s.INFO]: 'info', [s.DEBUG]: 'debug', [s.TRACE]: 'trace' };
        },
        24460: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => p });
            var s = i(88800),
                l = i(96706),
                r = i(53548),
                a = i(2058),
                n = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(6322);
            let p = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: p } = (0, a.A)(),
                    [m, h] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (m) return;
                    let r = { ...(0, l.HO)(e), url: e.url, isPinned: !e.isPinned };
                    h(!0);
                    let a = await e.togglePin();
                    (h(!1),
                        a
                            ? i((0, s.jsx)(u.l, { playlist: r }), { containerId: n.u.INFO })
                            : i((0, s.jsx)(d.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [t.isAuthorized, m, e, i, p]);
            };
        },
        24548: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        25354: (e, t, i) => {
            'use strict';
            i.d(t, { El: () => n, I7: () => o, K$: () => a, cM: () => d, fZ: () => l, tA: () => r, vX: () => s, xi: () => c });
            let s = 16,
                l = 16,
                r = 315,
                a = 170,
                n = 270,
                o = 7,
                c = 30,
                d = 30;
        },
        29242: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => K }));
            var s = i(88800),
                l = i(53548),
                r = i(58390),
                a = i(65724),
                n = i(84961),
                o = i(2058),
                c = i(87999),
                d = i(76903),
                u = i(17392),
                p = i(29504),
                m = i(32596),
                h = i(69630),
                _ = i(41911),
                g = i(98427),
                v = i(46422),
                x = i(44230),
                C = i(37670),
                y = i(34961),
                f = i(53892),
                k = i(72288),
                A = i(54320),
                N = i(86790),
                L = i(60266),
                T = i(93317),
                S = i(37770),
                j = i(79418),
                R = i(25354),
                P = i(30144),
                E = i(324),
                b = i(46511),
                I = i(13012),
                O = i(57297),
                w = i(2218),
                D = i(77863),
                F = i(45383),
                M = i(40883);
            async function B(e, t) {
                let { locale: i, fullUrl: s, url: l, tld: r, host: a } = t,
                    n = await (0, b.W)(i),
                    o = e.title.fullTitle,
                    c = n({ id: 'metadata.genre-title' }, { genreTitle: o }),
                    d = (0, M.f)({ genreTitle: o, messageFormatter: n }),
                    u = new URL(''.concat('', '/meta/og-image.png'), 'https://'.concat(a)).href;
                return {
                    title: c,
                    description: d,
                    openGraph: (0, O.i)({
                        ogTitle: (0, I.N)(o),
                        ogDescription: d,
                        fullUrl: null != s ? s : '',
                        locale: i,
                        siteName: n({ id: 'metadata.yandex-music' }),
                        ogImage: u,
                    }),
                    twitter: (0, w.H)({ cardType: D.W.APP, title: c, url: null != l ? l : '', appName: n({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, E.X)({
                        additional: { tld: r, url: null != l ? l : '', fullUrl: null != s ? s : '', host: a },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, F.S)('/genre/:metatagId/playlists', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var z = i(68495),
                U = i(82565),
                H = i.n(U);
            let Y = (0, n.PA)((e) => {
                let { metatagId: t, preloadedMeta: i } = e,
                    { playlistsSubpage: n } = (0, y.s)(f.n.GENRE),
                    {
                        settings: { isMobile: E },
                    } = (0, k.g)(),
                    { formatMessage: b } = (0, o.A)(),
                    { contentScrollRef: I, setContentScrollRef: O } = (0, x.g)(),
                    w = (0, v.W)(),
                    D = (0, l.useCallback)(
                        (e) => {
                            t && n.getData({ metatagId: t, page: e, pageSize: R.cM });
                        },
                        [n, t],
                    );
                ((0, A.X)(n.pagesLoader, D),
                    (0, l.useEffect)(
                        () => () => {
                            n.reset();
                        },
                        [n],
                    ),
                    n.isNotFound && (0, r.notFound)(),
                    (0, C.J)(n.isResolved),
                    ((e) => {
                        let { fullscreenVideoPlayer: t } = (0, k.g)(),
                            i = null == e ? void 0 : e.fullTitle,
                            s = null == e ? void 0 : e.isResolved,
                            r = null == e ? void 0 : e.pagesLoader.isInitialRequestRejected,
                            a = (0, l.useCallback)(
                                (t) =>
                                    r
                                        ? {}
                                        : e && s && i
                                          ? B(
                                                ((e) => {
                                                    var t, i, s;
                                                    return {
                                                        id: '',
                                                        title: { title: '', fullTitle: e.fullTitle || '' },
                                                        playlists: e.items.map(z.J),
                                                        pager: {
                                                            page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                                            perPage: (null == (i = e.pagesLoader.pager) ? void 0 : i.perPage) || 0,
                                                            total: (null == (s = e.pagesLoader.pager) ? void 0 : s.total) || 0,
                                                        },
                                                    };
                                                })(e),
                                                t,
                                            )
                                          : void 0,
                                [e, i, s, r],
                            );
                        (0, P.C)(t.modal.isOpened ? null : a);
                    })(n));
                let F = (0, l.useMemo)(() => ({ Footer: () => (0, s.jsx)(L.A, { children: (0, s.jsx)(N.w, { className: H().footer }) }) }), []);
                if ((t && n.isNeededToLoad && (0, l.use)(n.getData({ preloadedMeta: i, metatagId: t, page: 0, pageSize: R.cM })), n.isSomethingWrong))
                    return (0, s.jsx)(m.SomethingWentWrong, {});
                let M = n.isShimmerVisible ? 20 : n.totalCount;
                return (0, s.jsx)(d.a, {
                    pageId: c.AppScreen.GenrePlaylists,
                    pageIdForFrom: g.b.GENRE_PLAYLISTS,
                    children: (0, s.jsx)(h.h, {
                        scrollElement: I,
                        outerTitle: n.fullTitle,
                        children: (0, s.jsxs)('div', {
                            className: H().root,
                            'data-test-id': u.Xk.genre.GENRE_PLAYLISTS_PAGE,
                            children: [
                                (0, s.jsx)(T.Y, {
                                    variant: T.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: w.canBack,
                                    children: (0, s.jsx)(p.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: n.fullTitle }),
                                }),
                                (0, s.jsx)(j.$, {
                                    className: (0, a.$)(H().scrollContainer, H().important),
                                    customComponents: F,
                                    itemContentCallback: (e) => {
                                        let t = n.items[e],
                                            i = b({ id: 'loading-messages.entity-is-loading' }, { entityName: b({ id: 'entity-names.playlist' }) });
                                        return t ? (0, s.jsx)(_.B, { playlist: t, contentLinesCount: 3 }, t.key) : (0, s.jsx)(S.V, { 'aria-label': i });
                                    },
                                    totalCount: M,
                                    initialItemCount: M,
                                    onGetDataByPage: D,
                                    pageSize: R.cM,
                                    totalRequests: n.requestsCount,
                                    listClassName: H().content,
                                    itemClassName: H().item,
                                    handleRef: O,
                                    context: { listAriaLabel: b({ id: 'mixes.playlists-list' }, { genreName: n.fullTitle || '' }) },
                                    isMobileLayout: E,
                                    useWindowScroll: E,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var G = i(19994),
                V = i(1698);
            let W = () => {
                    let e = (0, v.W)(),
                        { formatMessage: t } = (0, o.A)(),
                        i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.playlist' }) });
                    return (0, s.jsx)(h.h, {
                        scrollElement: null,
                        children: (0, s.jsxs)('div', {
                            className: H().root,
                            children: [
                                (0, s.jsx)(T.Y, {
                                    variant: T.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, s.jsx)(G.W, { className: H().shimmerTitle, radius: 'l' }),
                                }),
                                (0, s.jsx)('div', {
                                    className: (0, a.$)(H().scrollContainer, H().important, H().shimmerScrollContainer),
                                    children: (0, s.jsx)('div', {
                                        className: H().content,
                                        children: (0, s.jsx)(V.e, { isActive: !0, itemClassName: H().item, 'aria-label': i, count: 20 }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                K = () => {
                    let e = (0, r.useSearchParams)().get('metatagId');
                    return (e || (0, r.notFound)(), (0, s.jsx)(l.Suspense, { fallback: (0, s.jsx)(W, {}), children: (0, s.jsx)(Y, { metatagId: e }) }));
                };
        },
        30832: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var s = i(88800),
                l = i(15077),
                r = i(42729);
            let a = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, s.jsx)(r.O, {
                    entityVariant: l.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        35994: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => l });
            var s = i(67174);
            let l = (e) => (0, s.u)('/artist/:artistId', { params: { artistId: e } });
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => C });
            var s = i(88800),
                l = i(65724),
                r = i(84961),
                a = i(53548),
                n = i(87999),
                o = i(80643),
                c = i(17392),
                d = i(29993),
                u = i(90688),
                p = i(19934),
                m = i(7555),
                h = i(29504),
                _ = i(78940),
                g = i(72288),
                v = i(80932),
                x = i.n(v);
            let C = (0, r.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: r } = (0, g.g)(),
                    v = (0, _.Z)(t.url),
                    y = (0, o.S)(),
                    f = (0, a.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(C, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    k = (0, d.c)((e) => {
                        (r.modal.isOpened && r.modal.close(), y({ to: n.AppScreen.ArtistScreen }), v(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(p.Dr, {
                            className: (0, l.$)(x().root, i),
                            onClick: k,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(m.t, {
                                    radius: 'round',
                                    className: x().cover,
                                    children: (0, s.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: x().image }),
                                }),
                                (0, s.jsx)(h.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        f,
                    ],
                });
            });
        },
        41911: (e, t, i) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = i(52300);
// for PulseSync: END import the download icon for playlist menu actions
            i.d(t, { B: () => Z });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(88800),
                pulseSyncMenuItems = i(19934),
                pulseSyncMenuIcons = i(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var s = i(88800),
                l = i(65724),
                r = i(84961),
                a = i(53548),
                n = i(2058),
                o = i(87999),
                c = i(62414),
                d = i(80643),
                u = i(33979),
                p = i(17392),
                m = i(18593),
                h = i(29993),
                _ = i(79070),
                g = i(29832),
                v = i(52300),
                x = i(7555),
                C = i(29504),
                y = i(13946),
                f = i(85902),
                k = i(24460),
                A = i(5407),
                N = i(57934),
                L = i(84384),
                T = i(4795),
                S = i(78940),
                j = i(55693),
                R = i(39079),
                P = i(72288),
                E = i(86298),
                b = i(81877),
                I = i(49738),
                O = i(91292),
                w = i(56862),
                D = i(16704),
                F = i(56446),
                M = i(36207),
                B = i(47513),
                z = i(19934),
                U = i(48749),
                H = i(22505),
                Y = i(9618),
                G = i(95210),
                V = i(46936),
                W = i(97956),
                K = i(93091),
                $ = i(27817),
                X = i(15425);
            let q = (0, r.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: l, open: r, ...a } = e,
                    { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: d } = (0, Y.q)(),
                    {
                        experiments: u,
                        settings: { isMobile: m },
                        trailer: _,
                        user: g,
                    } = (0, P.g)(),
                    v = (0, f.K)(i),
                    x = (0, k.A)(i),
                    C = (0, N.F)(),
                    { formatMessage: y } = (0, n.A)(),
                    L = (0, A.P)(),
                    T = u.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    S = (0, U.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, G.N)(r);
                let j = (0, h.c)(() => {
                    if (c) return void d();
                    L() || (_.openPlaylistTrailer(i.id), C(o.DomainObjectType.Playlist, i.id));
                });
                // for PulseSync WebHost: BEGIN playlist context and native addon menu item rendering
                let pulseSyncInjectPlaylistMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                        eventDetail: {
                            id: String(i.kind ?? i.id),
                            uuid: String(i.uuid ?? ''),
                            url: String(i.url ?? ''),
                            ...(i.title
                                ? {
                                      title: String(i.title),
                                  }
                                : {}),
                        },
                        renderItem: ({ key, payload, activate }) => {
                            const label = String(payload?.label ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim();
                            if (!label || !icon) return null;
                            return (0, pulseSyncMenuJsx.jsx)(
                                pulseSyncMenuItems.Dr,
                                {
                                    icon: (0, pulseSyncMenuJsx.jsx)(pulseSyncMenuIcons.I, {
                                        variant: icon,
                                        size: 'xxs',
                                    }),
                                    onClick: () => {
                                        (activate(), l?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END playlist context and native addon menu item rendering
                return (0, s.jsxs)(z.W1, {
                    title: i.title,
                    onOpenChange: l,
                    open: r,
                    offsetOptions: 10,
                    isMobile: m,
                    ariaLabel: y({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: p.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...a,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        T && (0, s.jsx)(H.d, { entityVariant: V.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : S }),
                        !m && (0, s.jsx)($.L, { onClick: x, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, s.jsx)(K.T, { onClick: v, isLiked: i.isLiked, disabled: !g.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, s.jsx)(z.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, s.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, s.jsx)(X.N, { onClick: j, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var J = i(17657),
                Q = i.n(J);
            let Z = (0, r.PA)((e) => {
                let { className: t, playlist: i, children: r, contentLinesCount: z, customDescription: U, onCoverMouseDown: H } = e,
                    Y = (0, c.D)(),
                    {
                        trailer: G,
                        user: V,
                        paywall: { modal: W },
                    } = (0, P.g)(),
                    { from: K, utmLink: $ } = (0, L.f)({ contextId: i.uuid, contextType: m.K.Playlist }),
                    { formatMessage: X } = (0, n.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: Z, sendPlaySearchFeedback: ee } = (0, j.z)(),
                    [et, ei] = (0, a.useState)(!1),
                    [es, el] = (0, a.useState)(!1),
                    [er, ea] = (0, a.useState)(!1),
                    en = (0, B.r)(i),
                    eo = (0, f.K)(i),
                    ec = (0, k.A)(i),
                    ed = (0, d.S)(),
                    eu = (0, u.g)(),
                    ep = (0, S.Z)(i.url),
                    em = (0, N.F)(),
                    eh = (0, A.P)(),
                    e_ = (0, h.c)((e) => {
                        if ((e.stopPropagation(), eh())) return void e.preventDefault();
                        (G.setUtmLink($), G.openPlaylistTrailer(i.id), em(o.DomainObjectType.Playlist, i.id));
                    }),
                    [eg, ev] = (0, a.useState)(!1),
                    { isPlaying: ex, togglePlay: eC } = (0, R.D)({
                        playContextParams: { contextData: { type: m.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: K, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    ey = (0, h.c)(() => {
                        (ed({ to: o.AppScreen.PlaylistScreen }), null == Z || Z());
                    }),
                    ef = (0, h.c)((e) => {
                        (ey(), ep(e));
                    }),
                    ek = (0, T.N)(),
                    eA = (0, h.c)(() => {
                        if (!eh()) {
                            if (ek) return void W.open();
                            (et || ex || (ei(!0), null == ee || ee()), eC(), ex || eu());
                        }
                    }),
                    eN = (0, h.c)(() => {
                        (es || i.isLiked || (el(!0), null == J || J()), eo());
                    }),
                    eL = (0, h.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eT = (0, h.c)((e) => {
                        (ea(e), ev(e));
                    }),
                    eS = (0, a.useMemo)(() => {
                        var e;
                        return U
                            ? (0, s.jsx)(C.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: U }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, s.jsx)(
                                    y.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [U, i]),
                    ej = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, s.jsx)(
                                I.c,
                                {
                                    className: (0, l.$)(Q().likeButton, Q().control),
                                    isLiked: i.isLiked,
                                    onClick: eN,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !V.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eR = (0, a.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                M.n,
                                {
                                    children: (0, s.jsx)(
                                        F.k,
                                        { className: (0, l.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: e_ },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [e_, i]),
                    eP = (0, a.useMemo)(
                        () =>
                            (0, s.jsx)(
                                w.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, l.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    eE = (0, a.useMemo)(
                        () =>
                            (0, s.jsx)(x.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': p.Kq.playlist.PLAYLIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: ef,
                                    onMouseDown: H,
                                    children: [
                                        (0, s.jsx)(b.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: en,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(g.hg, {
                                            isVisible: er || eg,
                                            className: Q().controls,
                                            playControl: (0, s.jsx)(
                                                D.D,
                                                {
                                                    className: (0, l.$)(Q().playButton, Q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eA,
                                                    isPlaying: ex,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: ej,
                                            menuControl: (0, s.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eT,
                                                    open: er,
                                                    onClick: eL,
                                                    className: (0, l.$)(Q().menuButton, Q().control),
                                                    icon: (0, s.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': p.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eP,
                                            trailerControl: eR,
                                        }),
                                    ],
                                }),
                            }),
                        [ef, H, i, en, er, eg, eA, ex, ej, eT, eL, eP, eR],
                    ),
                    eb = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, s.jsxs)(g.MN, {
                    ref: Y,
                    'aria-label': en,
                    className: (0, l.$)(Q().root, t),
                    title: (0, s.jsx)(C.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': p.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, s.jsx)(O.N, { className: Q().titleLink, href: i.url, tabIndex: -1, onClick: ey, children: i.title }),
                    }),
                    srTitle: (0, s.jsx)(O.N, { className: Q().srTitleLink, href: i.url, onClick: ey, children: i.title }),
                    contentLinesCount: z,
                    view: eE,
                    description: eS,
                    'data-test-id': p.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eb &&
                            (0, s.jsx)(E.x, {
                                ariaLabel: X({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: eo,
                            }),
                        r,
                    ],
                });
            });
        },
        43408: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 29242));
        },
        44084: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => r });
            var s = i(23877),
                l = i(74021);
            class r extends l.q {
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
                    let l = s.Q[e];
                    console[l](...this.formatMessage(e, t, i));
                }
                sendToErrorBooster(e, t, i) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: i ? this.obfuscateData({ ...this.additionalData, ...i }) : {} } });
                }
            }
        },
        47513: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => r });
            var s = i(53548),
                l = i(2058);
            let r = (e) => {
                let { formatMessage: t } = (0, l.A)();
                return (0, s.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let s = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(s, ' ').concat(i);
                }, [t, e]);
            };
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        54320: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var s = i(88800),
                l = i(53548),
                r = i(29993),
                a = i(9492),
                n = i(29595),
                o = i(74965),
                c = i(74773);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, l.useRef)(void 0),
                    p = (0, r.c)(() => {
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
                (0, l.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(a.L, { reloadBlocks: p }), { containerId: n.u.ERROR, autoClose: !1 }));
                }, [d, p, i, e.rejectedPagesCount]);
            };
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => a });
            var s = i(88800);
            i(30282);
            var l = i(11006),
                r = i.n(l);
            let a = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: r().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => l });
            var s = i(97956);
            let l = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: l, userRegion: r } = e;
                return 'ru' === r && t(s.z.WebNextFooterDisclaimer, 'on') ? i() : l();
            };
        },
        68495: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => l });
            var s = i(27169);
            let l = (e) => {
                var t;
                return e
                    ? {
                          playlistUuid: e.uuid,
                          available: e.isAvailable,
                          uid: e.uid,
                          kind: e.kind,
                          title: e.title || '',
                          revision: e.revision || 0,
                          snapshot: 0,
                          trackCount: e.tracksCount || 0,
                          visibility: e.visibility || 'public',
                          collective: !1,
                          created: '',
                          modified: '',
                          isBanner: !1,
                          isPremiere: !1,
                          durationMs: 0,
                          cover: { uri: e.coverUri || '', type: s.Q.PIC, prefix: '', custom: !1 },
                          ogImage: e.coverUri || '',
                          tags: [],
                          likesCount: e.likesCount || 0,
                          generatedPlaylistType: e.generatedPlaylistType || '',
                          trailer: { available: !!(null == (t = e.trailer) ? void 0 : t.isAvailable) },
                      }
                    : {
                          playlistUuid: '',
                          available: !0,
                          uid: 0,
                          kind: 0,
                          title: '',
                          revision: 0,
                          snapshot: 0,
                          trackCount: 0,
                          visibility: 'public',
                          collective: !1,
                          created: '',
                          modified: '',
                          isBanner: !1,
                          isPremiere: !1,
                          durationMs: 0,
                          cover: { uri: '', type: s.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          tags: [],
                          likesCount: 0,
                          generatedPlaylistType: '',
                          trailer: { available: !0 },
                      };
            };
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        70621: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => o });
            var s = i(53548),
                l = i(63582),
                r = i(245),
                a = i(22681),
                n = i(56374);
            let o = (0, l.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, r.N)(),
                    t = (0, a.w)(),
                    i = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, n.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        74021: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => o });
            var s = i(14567),
                l = i(243),
                r = i(62151),
                a = i(33396);
            let n = () => 'SECRET';
            class o {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: i }) {
                    ((this.maxLogLevel = t), (this.secureFields = i), (this.additionalData = e));
                }
                formatMessage(e, t, i = {}, l) {
                    let r,
                        n = String(t instanceof Error && t.stack ? t.stack : t),
                        o = (0, a.A)({ ...this.additionalData, ...i });
                    return (Object.keys(o).length && (r = this.obfuscateData(o)), l) ? `${n} ${s(r)}` : [n, r];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, l.A)(e, t) && (0, r.A)(e, t, n());
                    return e;
                }
            }
        },
        76903: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                l = i(53548),
                r = i(53534),
                a = i(63582),
                n = i(245);
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
            let u = (0, a.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, n.N)(),
                        a = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [o, u] = (0, l.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: a, scope: a ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        o.client !== i ||
                        o.input.pageId !== t.pageId ||
                        o.input.skeletonId !== t.skeletonId ||
                        o.input.mainObjectType !== t.mainObjectType ||
                        o.input.mainObjectId !== t.mainObjectId
                    ) {
                        let l = new c(i.createScreenSession().screenViewUuid, i),
                            n = { client: i, input: t, isReady: a, scope: a ? i.createScreenScope(t, l) : null, session: l };
                        return (u(n), (0, s.jsx)(r.k, { value: n, children: e }));
                    }
                    if (
                        o.isReady !== a ||
                        o.input.displayReasonId !== t.displayReasonId ||
                        o.input.pageIdForFrom !== t.pageIdForFrom ||
                        o.input.pagePlacement !== t.pagePlacement ||
                        o.input.pageStyle !== t.pageStyle
                    ) {
                        let l = { ...o, input: t, isReady: a, scope: a ? i.createScreenScope(t, o.session) : null };
                        return (u(l), (0, s.jsx)(r.k, { value: l, children: e }));
                    }
                    return (0, s.jsx)(r.k, { value: o, children: e });
                },
            );
        },
        77451: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => r, TF: () => n, hZ: () => a });
            var s = function () {
                return (s =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, s = arguments.length; i < s; i++)
                            for (var l in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
                        return e;
                    }).apply(this, arguments);
            };
            function l(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function r(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], s = 0; s < i.length; s++) {
                        var l = i[s].split('='),
                            r = l.slice(1).join('=');
                        '"' === r[0] && (r = r.slice(1, -1));
                        try {
                            t[decodeURIComponent(l[0])] = r.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function a(e, t, i) {
                var r;
                document.cookie =
                    ((r = s({ path: '/' }, i)),
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
                                l('Expires', e.expires ? e.expires.toUTCString() : '') +
                                l('Domain', e.domain) +
                                l('Path', e.path) +
                                l('Secure', e.secure) +
                                l('SameSite', e.sameSite)
                            );
                        })(r));
            }
            function n(e, t) {
                a(e, '', s(s({}, t), { expires: -1 }));
            }
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g });
            var s = i(88800),
                l = i(65724),
                r = i(61013),
                a = i(53548);
            let n = (e) => {
                    let { style: t, forwardRef: i, context: l, ...r } = e,
                        a = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        n = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': a, style: { ...t }, ref: i, ...r });
                },
                o = (0, a.forwardRef)((e, t) => (0, s.jsx)(n, { forwardRef: t, ...e }));
            var c = i(16434),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: r, withHeader: a, withForceScroll: n, ...o } = e;
                    return (0, s.jsx)('div', {
                        className: (0, l.$)(d().scroller, { [d().scroller_withFooter]: r, [d().scroller_withHeader]: a, [d().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                p = (0, a.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var m = i(55482),
                h = i(75151);
            let _ = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: l,
                            debounceDurationInMs: r = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [p, _] = (0, a.useState)(null),
                        g = (0, a.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == l || l(e), o.length > 0 && _(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < s; e++) i(e);
                                    }
                                }, r),
                            [r, l, t, i, o],
                        );
                    (0, a.useEffect)(() => {
                        o.length > 0 && p && g(p);
                    }, o);
                    let v = (0, a.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, r);
                    }, [c, r]);
                    return (0, s.jsx)(h.sN, { ref: d, rangeChanged: g, totalCount: n, endReached: v, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: n,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: g = 700,
                            pageSize: v = 20,
                            totalCount: x,
                            totalRequests: C,
                            debounceDurationInMs: y,
                            initialItemCount: f,
                            minInitialItemCount: k = 20,
                            handleRef: A,
                            alwaysShowScrollbar: N = !1,
                            testId: L,
                            isMobileLayout: T = !1,
                            shouldTriggerRangeChangedOn: S,
                            ...j
                        } = e,
                        [R, P] = (0, a.useState)(!1),
                        E = (0, a.useMemo)(
                            () =>
                                (0, r.A)((e) => {
                                    P(e);
                                }, 100),
                            [],
                        ),
                        b = (0, a.useMemo)(() => {
                            var e, t;
                            return T
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
                        }, [i, C, T]),
                        I = f ? Math.min(f, k) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(d().root, { [d().root_scrolling]: R || N, [d().root_notScrolling]: !R && !N }, t),
                        'data-test-id': L,
                        children: [
                            T && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(_, {
                                overscan: g,
                                components: b,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: E,
                                itemContent: m,
                                scrollerRef: A,
                                totalCount: x,
                                pageSize: v,
                                onPageHandler: n,
                                onRangeHandler: c,
                                debounceDurationInMs: y,
                                initialItemCount: I,
                                shouldTriggerRangeChangedOn: S,
                                ...j,
                            }),
                            T && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        82565: (e) => {
            e.exports = {
                root: 'GenrePlaylistsPage_root__WZwkl',
                scrollContainer: 'GenrePlaylistsPage_scrollContainer__N3BZw',
                important: 'GenrePlaylistsPage_important__986BX',
                shimmerScrollContainer: 'GenrePlaylistsPage_shimmerScrollContainer__3kUkA',
                footer: 'GenrePlaylistsPage_footer__aMDul',
                item: 'GenrePlaylistsPage_item__tUsqJ',
                content: 'GenrePlaylistsPage_content__2rKJY',
                shimmerTitle: 'GenrePlaylistsPage_shimmerTitle__s4_Kt',
            };
        },
        84218: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        85902: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var s = i(88800),
                l = i(96706),
                r = i(53548),
                a = i(2058),
                n = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                p = i(30832);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, h] = (0, r.useState)(!1),
                    { formatMessage: _ } = (0, a.A)();
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(u.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let r = { ...(0, l.HO)(e), url: e.url, isLiked: !e.isLiked };
                    h(!0);
                    let a = await e.toggleLike();
                    (h(!1),
                        a === n.f.OK
                            ? i((0, s.jsx)(p.T, { playlist: r }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(u.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, m, e, _, i]);
            };
        },
        86298: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => p });
            var s = i(88800),
                l = i(65724),
                r = i(2058),
                a = i(17392),
                n = i(96817),
                o = i(52300),
                c = i(29504),
                d = i(84218),
                u = i.n(d);
            let p = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: p, ariaLabel: m } = e,
                    { formatNumber: h } = (0, r.A)();
                return (0, s.jsx)(n.$, {
                    className: (0, l.$)(u().root, t),
                    onClick: p,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, s.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': a.S7.CARD_LIKES,
                    children: (0, s.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: h(d) }),
                });
            };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => L });
            var s = i(88800),
                l = i(65724),
                r = i(84961),
                a = i(2058),
                n = i(30282),
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
                    let { formatMessage: t, language: i, tld: s, year: l } = e;
                    return {
                        year: l,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var p = i(62293),
                m = i(99839);
            let h = (e) => e(new Date(), (0, m.m)());
            var _ = i(51611),
                g = i(72288),
                v = i(11006),
                x = i.n(v),
                C = i(17392),
                y = i(29504),
                f = i(91292);
            let k = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(x().copyrights, t),
                        'data-test-id': C.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(f.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, l.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': C.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(y.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(f.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': C.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: x().list,
                                'data-test-id': C.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: l } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, s.jsx)(f.N, { target: '_blank', href: l, className: x().link, 'data-test-id': C.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': C.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, l.$)(x().root, x().important, t),
                        'data-test-id': C.S7.FOOTER,
                        children: [(0, s.jsx)(A, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(k, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: l, formatMessage: r } = (0, a.A)(),
                    { language: n } = (0, _.h)(),
                    o = u({ formatMessage: r, language: n, tld: i.tld, year: h(l) });
                return (0, s.jsx)(k, { className: t, data: o });
            });
            let L = (0, r.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: r, location: m, user: v } = (0, g.g)(),
                    { formatDate: C, formatMessage: y } = (0, a.A)(),
                    { isEnabled: f } = null != (t = (0, o.P)()) ? t : {},
                    { language: k } = (0, _.h)(),
                    A = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: l, tld: r, userRegion: a, year: n } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: l, userRegion: r } = e,
                                    a = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, l) },
                                    n = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, l) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, l) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, l) },
                                    p = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, s, l) },
                                    m = [a, o, u];
                                return (i && 'ru' === r && m.push(n), m.push(p), m);
                            })({ formatMessage: i, isWebApplication: s, language: l, tld: r, userRegion: a }),
                            disclaimer: (0, p.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: a,
                            }),
                            copyrights: u({ formatMessage: i, language: l, tld: r, year: n }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: y,
                        isWebApplication: n.$3,
                        tld: m.tld,
                        language: k,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: h(C),
                    });
                return (0, s.jsx)(N, { className: (0, l.$)({ [x().root_withOffsetForDeeplink]: f }, i), data: A });
            });
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => l, P: () => r });
            var s = i(53548);
            let l = (0, s.createContext)(null),
                r = () => (0, s.useContext)(l);
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
                7437, 4814, 9079, 3469, 8194, 1191, 8655, 3724, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 9202, 4732, 9087,
                3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 2088, 9269, 763, 2670, 7358,
            ],
            () => e((e.s = 43408)),
        ),
            (_N_E = e.O()));
    },
]);
