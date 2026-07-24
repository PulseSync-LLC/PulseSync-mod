(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7207],
    {
        3377: (e, t, r) => {
            'use strict';
            r.d(t, { WithAuth: () => h });
            var a = r(32290),
                i = r(96103),
                s = r(21916),
                n = r(63618),
                l = r(39407),
                o = r(71926),
                c = r(94218),
                d = r(55556),
                u = r.n(d);
            let m = (0, i.PA)(() =>
                (0, a.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, a.jsx)(o.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, a.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, a.jsx)(o.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, a.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, a.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var _ = r(20472),
                p = r(57594);
            let h = (0, i.PA)((e) => {
                let { children: t, withRedirectToMainPage: r } = e,
                    { user: i } = (0, p.g)();
                return i.isAuthorized ? t : (r && (0, s.redirect)(_.Z.main.href), (0, a.jsx)(m, {}));
            });
        },
        3796: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => s });
            var a = r(21916),
                i = r(55178);
            let s = (e) => {
                let t = (0, a.usePathname)(),
                    [r, s] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                    window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t);
                }),
                    (0, i.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), s(!0));
                    }, [e, r, t]);
            };
        },
        4820: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => c });
            var a = r(32290),
                i = r(55178),
                s = r(21732),
                n = r(71926),
                l = r(91624),
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
                        (0, a.jsx)(
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
                            ''.concat(r, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        11262: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => d });
            var a = r(32290),
                i = r(55178),
                s = r(91027),
                n = r(71730),
                l = r(45477),
                o = r(75582),
                c = r(49399);
            let d = (e, t) => {
                let { notify: r, dismiss: d } = (0, o.l)(),
                    u = (0, i.useRef)(void 0),
                    m = (0, s.c)(() => {
                        var r;
                        d({ notificationId: u.current }), (u.current = 0);
                        let a = [...(null != (r = e.lastRejectedPagesList) ? r : [])].reverse().filter((t) => {
                            var r;
                            return (null == (r = e.pageStates) ? void 0 : r[t]) === c.G.REJECT;
                        });
                        e.resetRejectedPagesState(),
                            a.forEach((e) => {
                                t(e);
                            });
                    });
                (0, i.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = r((0, a.jsx)(n.L, { reloadBlocks: m }), { containerId: l.u.ERROR, autoClose: !1 }));
                }, [d, m, r, e.rejectedPagesCount]);
            };
        },
        12989: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => x });
            var a = r(55178),
                i = r(16172),
                s = r(52068),
                n = r(6752),
                l = r(62376),
                o = r(1677),
                c = r(48922),
                d = r(84782),
                u = r(30915),
                m = r(18746),
                _ = r(2792),
                p = r(37240),
                h = r(51012),
                f = r(47498);
            let x = () => {
                let e = (0, l.U)(),
                    t = (0, s.st)(),
                    { hash: r } = (0, s.gf)(),
                    { pageId: x, displayReasonId: v } = (0, p.$)(),
                    { tabId: g, tabPos: b, isTabSelectedByDefault: A } = (0, f.R)(),
                    { offsetBlockPosY: S } = (0, u.u)(),
                    { blockType: N, blockId: j, blockPosX: k, blockPosY: T, mainObjectId: I, mainObjectType: R, displayReasonId: y } = (0, d.N)(),
                    { filterKey: C, filterValue: w, filterPos: E } = (0, m.G)(),
                    { objectType: L, objectsCount: O, objectId: P, objectPosX: z, objectPosY: W } = (0, _.J)(),
                    { skeleton: F } = (0, h.b)(),
                    D = null != y ? y : v,
                    M = (0, n.L)(() => (void 0 !== S && void 0 !== T ? S + T : T));
                return (0, a.useCallback)(
                    (a, s) => {
                        if (!t || !x || !c.xK.includes(x) || !c.fD.includes(x)) return;
                        let n = o.F[x];
                        if (!n) return;
                        let l = {
                            hash: r,
                            pageId: n,
                            entityType: N,
                            entityId: j,
                            entityPosX: k,
                            entityPosY: M,
                            objectsCount: O,
                            viewUuid: s,
                            objectType: L,
                            objectId: P,
                            objectPosX: z,
                            objectPosY: W,
                        };
                        void 0 !== C && ((l.filterKey = C), (l.filterValue = w), (l.filterPos = E)),
                            c.qG.includes(x) && ((l.tabId = g), (l.tabPos = b), (l.isTabSelectedByDefault = A)),
                            F && (l.skeletonId = F),
                            'string' == typeof I && 'string' == typeof R && ((l.mainObjectType = R), (l.mainObjectId = I)),
                            D && (l.displayReasonId = D);
                        let d = (0, i.Fx)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        d && (a ? (0, i.Pf)(t.evgenInstance, d) : (0, i.nv)(t.evgenInstance, d));
                    },
                    [t, D, j, k, M, N, C, E, w, r, A, e, I, R, P, z, W, L, O, x, F, g, b],
                );
            };
        },
        13798: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => f });
            var a = r(32290),
                i = r(63618),
                s = r(96103),
                n = r(55178),
                l = r(60900),
                o = r(26252),
                c = r(21732),
                d = r(6752),
                u = r(82586),
                m = r(57594),
                _ = r(60244),
                p = r(90006),
                h = r.n(p);
            let f = (0, s.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: s, containerClassName: p, variant: f, size: x = 'xxxs', ...v } = e,
                    { formatMessage: g } = (0, l.A)(),
                    {
                        settings: { isMobile: b },
                    } = (0, m.g)(),
                    [A, S] = (0, n.useState)(null),
                    N = (0, d.L)(() => {
                        switch (f) {
                            case o.JU.E:
                                return 'explicit';
                            case o.JU.AGE_12:
                            case o.JU.AGE_16:
                            case o.JU.AGE_18:
                                return 'adult';
                            case o.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    j = (0, n.useMemo)(() => g({ id: 'extra-explicit.explicit-mark' }), [g]);
                (0, n.useEffect)(() => {
                    r && r().then(S);
                }, [r, s]);
                let k = (null == A ? void 0 : A.join('\n')) || '',
                    T = !!(null == A ? void 0 : A.length) && !b,
                    I = k.length > 0 ? k : j;
                return (0, a.jsx)(_.k, {
                    description: k,
                    placement: 'bottom-start',
                    enabled: T,
                    children: (0, a.jsx)('span', {
                        className: p,
                        children: (0, a.jsx)(u.I, {
                            className: (0, i.$)(h().explicitMark, t),
                            'aria-label': I,
                            variant: N,
                            size: x,
                            ...v,
                            'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        23352: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            var a = r(55178),
                i = r(12989),
                s = r(80536);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, a.useRef)(null),
                    l = (0, i.D)(),
                    o = (0, a.useId)(),
                    c = (0, a.useContext)(s.B),
                    d = (0, a.useCallback)(
                        (a, i) => {
                            e ? e(a, r ? i : void 0) : l(a, i), t && c.unobserveElement(o);
                        },
                        [e, c, o, l, t, r],
                    );
                return (
                    (0, a.useEffect)(
                        () => (
                            c.observeElement({ elementRef: n, elementId: o, callback: d }),
                            () => {
                                c.unobserveElement(o);
                            }
                        ),
                        [e, c, d, o, l],
                    ),
                    { ref: n, intersectionPropertyId: o }
                );
            };
        },
        29268: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => u });
            var a = r(32290),
                i = r(55178),
                s = r(60900),
                n = r(21732),
                l = r(63423),
                o = r(82586),
                c = r(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: r,
                            size: i,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: p,
                            className: h,
                            forwardRef: f,
                            style: x,
                            children: v,
                        } = e,
                        { formatMessage: g } = (0, s.A)(),
                        b = g({ id: 'trailer.button-aria-label' });
                    return (0, a.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: i,
                        variant: t,
                        withRipple: r,
                        flexIcon: !0,
                        'aria-label': b,
                        onClick: _,
                        ref: f,
                        icon: (0, a.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, i.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
        },
        30294: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => a });
            let a = 20;
        },
        30310: (e) => {
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
        30542: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => s });
            var a = r(60900),
                i = r(64605);
            let s = (e, t) => {
                let { formatMessage: r } = (0, a.A)();
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
        31286: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => s });
            var a = r(55178),
                i = r(91027);
            let s = () => {
                let e = (0, a.useRef)(new Map());
                return (
                    (0, a.useLayoutEffect)(
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
        39684: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        40498: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => _ });
            var a = r(32290),
                i = r(96103),
                s = r(39407),
                n = r(63423),
                l = r(82586),
                o = r(71926),
                c = r(20472),
                d = r(84062),
                u = r(92606),
                m = r.n(u);
            let _ = (0, i.PA)((e) => {
                let { title: t } = e,
                    r = (0, d.Z)(c.Z.nonMusic.href);
                return (0, a.jsxs)('div', {
                    className: m().root,
                    children: [
                        (0, a.jsx)('div', { className: m().iconBackground, children: (0, a.jsx)(l.I, { variant: 'like', size: 'l' }) }),
                        (0, a.jsx)(o.DZ, { className: m().title, variant: 'h3', size: 'xs', children: t }),
                        (0, a.jsx)(n.$, {
                            onClick: r,
                            className: m().button,
                            role: 'link',
                            color: 'secondary',
                            size: 's',
                            radius: 'xxxl',
                            children: (0, a.jsx)(o.HL, {
                                type: 'controls',
                                variant: 'span',
                                size: 'm',
                                children: (0, a.jsx)(s.A, { id: 'error-messages.empty-shelf-liked-page-link' }),
                            }),
                        }),
                    ],
                });
            });
        },
        41566: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => d });
            var a = r(32290),
                i = r(96103),
                s = r(21732),
                n = r(82586),
                l = r(19740),
                o = r(30542),
                c = r(57594);
            let d = (0, i.PA)((e) => {
                let { isLiked: t, onClick: r, className: i, albumType: d, disabled: u } = e,
                    { user: m } = (0, c.g)(),
                    _ = t ? 'liked' : 'like',
                    p = (0, o.$)(t, d);
                return (0, a.jsx)(l.Dr, {
                    className: i,
                    onClick: r,
                    icon: (0, a.jsx)(n.I, { variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: u || !m.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: p,
                });
            });
        },
        41677: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => M });
            var a = r(32290),
                i = r(63618),
                s = r(96103),
                n = r(55178),
                l = r(70280),
                o = r(57594),
                c = r(53514),
                d = r(40484),
                u = r.n(d),
                m = r(60900),
                _ = r(16172),
                p = r(21732),
                h = r(91027),
                f = r(71926),
                x = r(47745),
                v = r(84062),
                g = r(28999),
                b = r(61258),
                A = r(19383);
            let S = (0, s.PA)((e) => {
                    let {
                            artist: t,
                            withLink: r = !0,
                            linkClassName: i,
                            captionClassName: s,
                            captionSize: n = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: S } = (0, m.A)(),
                        {
                            track: N,
                            settings: { isMobile: j },
                        } = (0, o.g)(),
                        k = (0, v.Z)(t.url),
                        { sendNavigateSearchFeedback: T } = (0, g.z)(),
                        I = (0, x.N)(),
                        R = ((e) => {
                            let { artist: t, callback: r } = e,
                                { currentTrackInfo: a, fullscreenPlayer: i, fullscreenVideoPlayer: s } = (0, o.g)(),
                                { modal: n } = a;
                            return (0, A.l)({
                                entity: t,
                                callback: r,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), n.isOpened && (a.reset(), n.close()), i.modal.isOpened && i.modal.close();
                                },
                                onAfterHandled: () => {
                                    s.modal.isOpened && (s.modal.close(), s.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, h.c)((e) => {
                                j && N.isOpened && N.close(), k(e);
                            }),
                        }),
                        y = (0, h.c)((e) => {
                            I({ to: _.QT.ArtistScreen }), null == T || T(), R(e);
                        });
                    return r && !t.various
                        ? (0, a.jsx)(b.N, {
                              'aria-label': S({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: i,
                              href: t.url,
                              onClick: y,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, a.jsx)(l.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, a.jsx)(f.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: s, children: t.name }),
                              }),
                          })
                        : (0, a.jsx)(l.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, a.jsx)(f.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: s,
                                  title: d ? void 0 : c || t.name,
                                  'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                N = (e) => {
                    let {
                            artist: t,
                            withLink: r = !0,
                            linkClassName: i,
                            captionClassName: s,
                            captionSize: l,
                            allArtistsTitle: o,
                            withCustomTooltip: c,
                            hoverSettings: d,
                            shouldUseSeparator: u = !0,
                        } = e,
                        m = (0, n.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, a.jsx)(
                                                  S,
                                                  {
                                                      artist: t,
                                                      withLink: r,
                                                      linkClassName: i,
                                                      captionClassName: s,
                                                      captionSize: l,
                                                      allArtistsTitle: o,
                                                      withCustomTooltip: c,
                                                      hoverSettings: d,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, u, r, i, s, l, o, c, d]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(S, {
                                artist: t,
                                withLink: r,
                                linkClassName: i,
                                captionClassName: s,
                                captionSize: l,
                                allArtistsTitle: o,
                                withCustomTooltip: c,
                                hoverSettings: d,
                            }),
                            m,
                        ],
                    });
                };
            var j = r(39407),
                k = r(63887);
            let T = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: s } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        ' ',
                        (0, a.jsx)(k.N, {
                            role: 'button',
                            href: '',
                            className: (0, i.$)(u().spoiler, r),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': p.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, a.jsx)(j.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var I = r(8055),
                R = r(6752),
                y = r(78035),
                C = r(78176),
                w = r(83598),
                E = r.n(w);
            let L = (0, s.PA)((e) => {
                    let { label: t, artists: r, forwardRef: i } = e;
                    return (0, a.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, y.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, a.jsx)('div', { ref: i, children: t }),
                            (0, a.jsx)(l.ZI, { className: E().tooltipContent, children: r.map((e) => (0, a.jsx)(C.V, { artist: e, className: E().artistItem }, e.id)) }),
                        ],
                    });
                }),
                O = (0, n.forwardRef)((e, t) => (0, a.jsx)(L, { forwardRef: t, ...e }));
            var P = r(19740),
                z = r(52598),
                W = r.n(z);
            let F = (0, s.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: s } = (0, m.A)();
                    return (0, a.jsx)(P.W1, {
                        isMobile: !0,
                        className: (0, i.$)(W().root, W().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, a.jsx)(C.V, { artist: e }, e.id)),
                    });
                }),
                D = (0, s.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: i } = e,
                        [s, l] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, o.g)(),
                        d = (0, h.c)(() => {
                            let e = i.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, R.L)(() =>
                            (0, I.A)(() => {
                                d();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', u),
                                d(),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            ),
                            [u, d],
                        ),
                        (0, n.useEffect)(() => {
                            d();
                        }, [t, d]),
                        0 !== t.length)
                    )
                        return (s || c) && (!c || 1 !== t.length) ? (c ? (0, a.jsx)(F, { artists: t, label: r }) : (0, a.jsx)(O, { artists: t, label: r })) : r;
                }),
                M = (0, s.PA)((e) => {
                    let {
                            className: t,
                            artists: r = [],
                            separator: s = ', ',
                            lineClamp: d,
                            visibleArtistsCount: m,
                            withLink: _ = !0,
                            spoilerClassName: p,
                            linkClassName: h,
                            captionClassName: f,
                            captionSize: x,
                            variant: v = 'breakAll',
                            withAllArtistsTitle: g = !0,
                            withComposer: b = !0,
                            spoilerComponent: A,
                            withCustomTooltip: S = !0,
                            artistIdWithoutLink: j,
                            withContextMenu: k,
                        } = e,
                        I = (0, n.useRef)(null),
                        [R, y] = (0, n.useState)(!1),
                        C = g
                            ? r
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let r = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...r]) : [t.name, ...r];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(s)
                            : '',
                        {
                            settings: { isMobile: w },
                        } = (0, o.g)(),
                        E = 1 === r.length,
                        L = (0, n.useCallback)((e) => {
                            y(!0), e.preventDefault();
                        }, []),
                        O = (0, n.useMemo)(() => {
                            let e = r;
                            return (
                                m && !R && (e = r.slice(0, m)),
                                e.reduce((e, t) => {
                                    if (!b && t.isComposer) return e.length ? e : [];
                                    let r = (0, a.jsx)(
                                        N,
                                        {
                                            artist: t,
                                            linkClassName: h,
                                            captionClassName: f,
                                            withLink: _ && t.id !== j && (((!w || E) && k) || !k),
                                            captionSize: x,
                                            allArtistsTitle: C,
                                            withCustomTooltip: S,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!s,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([s, r]) : [r];
                                }, [])
                            );
                        }, [r, m, R, b, w, E, k, h, f, _, j, x, C, S, s]),
                        P = (0, n.useMemo)(() => {
                            if (!R && m && m < r.length) {
                                let e = r.length - m;
                                return (0, n.isValidElement)(A) ? A : (0, a.jsx)(T, { spoilerClassName: p, spoilerArtistsCount: e, handleOnSpoilerClick: L });
                            }
                        }, [r.length, L, R, p, A, m]),
                        z = (0, n.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        W = (0, a.jsx)(l.m_, {
                            referenceRef: I,
                            enabled: !!(g && C) && S && !k && !w,
                            offsetOptions: 4,
                            placement: 'top',
                            text: C,
                            hoverSettings: c.V,
                            children: (0, a.jsxs)('div', {
                                style: z,
                                className: (0, i.$)(u().root, u()['root_variant_'.concat(v)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: g && C && !S && !k ? C : void 0,
                                children: [O, P],
                            }),
                        });
                    return k ? (0, a.jsx)(D, { labelRef: I, artists: r, label: W }) : W;
                });
        },
        45257: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => f });
            var a = r(32290),
                i = r(63618),
                s = r(8055),
                n = r(55178);
            let l = (e) => {
                    let { style: t, forwardRef: r, context: i, ...s } = e,
                        n = (null == i ? void 0 : i.listAriaLabel) || void 0,
                        l = (null == i ? void 0 : i.listRole) || 'region';
                    return (0, a.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': n, style: { ...t }, ref: r, ...s });
                },
                o = (0, n.forwardRef)((e, t) => (0, a.jsx)(l, { forwardRef: t, ...e }));
            var c = r(39684),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: s, withHeader: n, withForceScroll: l, ...o } = e;
                    return (0, a.jsx)('div', {
                        className: (0, i.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: r,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, n.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
            var _ = r(62060),
                p = r(31417);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: i,
                            debounceDurationInMs: s = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            ...d
                        } = e,
                        [u, m] = (0, n.useState)(null),
                        h = (0, n.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == i || i(e), o.length > 0 && m(e), t && r)) {
                                        let a = Math.floor(e.endIndex / t) + 1,
                                            i = Math.floor(e.startIndex / t);
                                        for (let e = i; e < a; e++) r(e);
                                    }
                                }, s),
                            [s, i, t, r, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && u && h(u);
                    }, o);
                    let f = (0, n.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, a.jsx)(p.sN, { rangeChanged: h, totalCount: l, endReached: f, ...d });
                },
                f = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: p,
                            overscan: f = 700,
                            pageSize: x = 20,
                            totalCount: v,
                            totalRequests: g,
                            debounceDurationInMs: b,
                            initialItemCount: A,
                            minInitialItemCount: S = 20,
                            handleRef: N,
                            alwaysShowScrollbar: j = !1,
                            testId: k,
                            isMobileLayout: T = !1,
                            shouldTriggerRangeChangedOn: I,
                            ...R
                        } = e,
                        [y, C] = (0, n.useState)(!1),
                        w = (0, n.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    C(e);
                                }, 100),
                            [],
                        ),
                        E = (0, n.useMemo)(() => {
                            var e, t;
                            return T
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : o,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : o,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, g, T]),
                        L = A ? Math.min(A, S) : void 0;
                    return (0, a.jsxs)('div', {
                        className: (0, i.$)(d().root, { [d().root_scrolling]: y || j, [d().root_notScrolling]: !y && !j }, t),
                        'data-test-id': k,
                        children: [
                            T && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, a.jsx)(h, {
                                overscan: f,
                                components: E,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: w,
                                itemContent: _,
                                scrollerRef: N,
                                totalCount: v,
                                pageSize: x,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: b,
                                initialItemCount: L,
                                shouldTriggerRangeChangedOn: I,
                                ...R,
                            }),
                            T && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => a });
            let a = { delay: { open: 1e3, close: 0 } };
        },
        55556: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        56008: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => a });
            let a = (0, r(55178).createContext)({ pageAlbumId: void 0 });
        },
        57594: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => s, g: () => n });
            var a = r(29222),
                i = r(55178);
            let s = (0, i.createContext)(null);
            function n() {
                let e = (0, i.useContext)(s);
                if (null === e) throw new a.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        60244: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => d });
            var a = r(32290),
                i = r(21732),
                s = r(70280),
                n = r(71926),
                l = r(48736),
                o = r.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: r, title: l, placement: d = 'top', children: u } = e;
                    return (0, a.jsxs)(s.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, a.jsx)(s.ZI, {
                                className: o().root,
                                'data-test-id': i.S7.TOOLTIP_WITH_TITLE,
                                children: (0, a.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, a.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, a.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        63363: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => v });
            var a = r(32290),
                i = r(60900),
                s = r(91027),
                n = r(67732),
                l = r(45477),
                o = r(75582),
                c = r(57594),
                d = r(90357),
                u = r(92708),
                m = r(55178),
                _ = r(63380),
                p = r(96103),
                h = r(97755),
                f = r(79238);
            let x = (0, p.PA)((e) => {
                    let { album: t, closeToast: r, withLink: i } = e,
                        s = (0, f.b)(t);
                    return (0, a.jsx)(h.O, {
                        closeToast: r,
                        entityVariant: s,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        withLink: i,
                    });
                }),
                v = (e) => {
                    let {
                            user: t,
                            paywall: r,
                            albumCPA: { isPlusCPAEnabled: p },
                        } = (0, c.g)(),
                        { formatMessage: h } = (0, i.A)(),
                        { notify: f } = (0, o.l)(),
                        v = (() => {
                            let { notify: e } = (0, o.l)(),
                                [t, r] = (0, m.useState)(!1),
                                { formatMessage: n } = (0, i.A)();
                            return (0, s.c)(async (i) => {
                                let { album: s, withLink: o = !0, withNotification: c = !0 } = i;
                                if (t) return;
                                let m = { ...(0, u.HO)(s), url: s.url, isLiked: !s.isLiked };
                                r(!0);
                                let p = await s.toggleLike();
                                r(!1),
                                    c &&
                                        (p === _.f.OK
                                            ? e((0, a.jsx)(x, { withLink: o, album: m }), { containerId: l.u.INFO })
                                            : e((0, a.jsx)(d.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                            });
                        })(),
                        { pageAlbumId: g } = (0, n.T)();
                    return (0, s.c)(async () => {
                        if (e)
                            return p({ pageAlbumId: g, albumId: e.id, isNonMusic: e.isNonMusic })
                                ? void r.openModal()
                                : t.isAuthorized
                                  ? v({ album: e })
                                  : void f((0, a.jsx)(d.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    });
                };
        },
        64170: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => A });
            var a = r(32290),
                i = r(63618),
                s = r(96103),
                n = r(55178),
                l = r(60900),
                o = r(39407),
                c = r(63423),
                d = r(82586),
                u = r(71926),
                m = r(16172),
                _ = r(52068),
                p = r(62376),
                h = r(37240),
                f = r(83920),
                x = r(20472),
                v = r(12894),
                g = r(30310),
                b = r.n(g);
            let A = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    g = s({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, _.st)(),
                        { hash: r } = (0, _.gf)(),
                        { pageId: a } = (0, h.$)(),
                        i = (0, p.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !r || !a) return;
                        let s = (0, m.Fx)({
                            params: {
                                entityType: m.LA.Error,
                                entityId: m.LA.SomethingWrong,
                                errorMessage: e,
                                hash: r,
                                pageId: a,
                                pageStyle: m.QL.Fullscreen,
                                pagePlacement: m.c4.Fullscreen,
                                mainObjectType: m.ky.NonApplicable,
                                mainObjectId: m.ky.NonApplicable,
                            },
                            logger: i,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, m.z5)(t.evgenInstance, s);
                    }, [t, e, r, a, i]);
                })(g);
                let { sendRefreshEvent: A } = (function () {
                        let e = (0, _.st)(),
                            { hash: t } = (0, _.gf)(),
                            { pageId: r } = (0, h.$)(),
                            a = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let i = (0, m.Fx)({
                                    params: {
                                        actionType: m.X2.Refresh,
                                        userInteractionType: m.gi.Tap,
                                        entityType: m.LA.Error,
                                        entityId: m.LA.SomethingWrong,
                                        hash: t,
                                        pageId: r,
                                        pageStyle: m.QL.Fullscreen,
                                        pagePlacement: m.c4.Fullscreen,
                                        mainObjectType: m.ky.NonApplicable,
                                        mainObjectId: m.ky.NonApplicable,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                i && (0, m.bv)(e.evgenInstance, i);
                            }, [e, t, r, a]),
                        };
                    })(),
                    S = (0, n.useCallback)(() => {
                        A(), (window.location.href = x.Z.main.href);
                    }, [A]),
                    { contentRef: N } = (0, f.g)();
                return (0, a.jsxs)('div', {
                    className: (0, i.$)(b().root, t),
                    children: [
                        r &&
                            (0, a.jsx)(v.L, { withBackwardFallback: '/', className: (0, i.$)(b().navigation, { [b().navigation_desktop]: !N }), withForwardControl: !1 }),
                        (0, a.jsxs)('div', {
                            className: (0, i.$)(b().content, { [b().content_shrink]: !r }),
                            children: [
                                (0, a.jsx)(d.I, { className: b().icon, variant: 'attention', size: 'xxl' }),
                                (0, a.jsx)(u.DZ, { className: (0, i.$)(b().title, b().important), variant: 'h3', size: 'xs', children: g }),
                                (0, a.jsxs)(u.HL, {
                                    className: (0, i.$)(b().text, b().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, a.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, a.jsx)(c.$, {
                                    onClick: S,
                                    className: b().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, a.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, a.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        67732: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => s });
            var a = r(55178),
                i = r(56008);
            function s() {
                return (0, a.useContext)(i.H);
            }
        },
        70718: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        71730: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => p });
            var a = r(32290),
                i = r(63618),
                s = r(55178),
                n = r(60900),
                l = r(39407),
                o = r(63423),
                c = r(82586),
                d = r(71926),
                u = r(58534),
                m = r(70718),
                _ = r.n(m);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: r } = e,
                    m = (0, s.useRef)(null),
                    { formatMessage: p } = (0, n.A)();
                (0, s.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let h = (0, s.useMemo)(
                    () =>
                        (0, a.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, a.jsx)(d.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, a.jsx)(l.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, a.jsx)(o.$, {
                                    ref: m,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, a.jsx)(c.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, a.jsx)(u.$, { className: (0, i.$)(_().root, _().important), message: h, closeToast: r });
            };
        },
        78176: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => g });
            var a = r(32290),
                i = r(63618),
                s = r(96103),
                n = r(55178),
                l = r(16172),
                o = r(21732),
                c = r(91027),
                d = r(50162),
                u = r(19740),
                m = r(86269),
                _ = r(71926),
                p = r(47745),
                h = r(84062),
                f = r(57594),
                x = r(16510),
                v = r.n(x);
            let g = (0, s.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: s } = (0, f.g)(),
                    x = (0, h.Z)(t.url),
                    b = (0, p.N)(),
                    A = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, a.jsx)(g, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    S = (0, c.c)((e) => {
                        s.modal.isOpened && s.modal.close(), b({ to: l.QT.ArtistScreen }), x(e);
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(u.Dr, {
                            className: (0, i.$)(v().root, r),
                            onClick: S,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, a.jsx)(m.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, a.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, a.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        79238: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => s });
            var a = r(64605),
                i = r(97647);
            let s = (e) => {
                switch (e.type) {
                    case a._.PODCAST:
                        return i.c.PODCAST;
                    case a._.AUDIOBOOK:
                        return i.c.AUDIOBOOK;
                    case a._.FAIRY_TALE:
                        return i.c.FAIRY_TALE;
                    default:
                        return i.c.ALBUM;
                }
            };
        },
        80536: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => a });
            let a = (0, r(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        81354: (e, t, r) => {
            'use strict';
            r.d(t, { XU: () => u });
            var a,
                i,
                s = r(30782),
                n = r(55178),
                l = r(60900);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(a || (a = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(i || (i = {}));
            var o = function (e) {
                var t = (0, l.A)(),
                    r = e.value,
                    a = e.children,
                    i = (0, s.__rest)(e, ['value', 'children']);
                return a(t.formatNumberToParts(r, i));
            };
            function c(e) {
                var t = function (t) {
                    var r = (0, l.A)(),
                        a = t.value,
                        i = t.children,
                        n = (0, s.__rest)(t, ['value', 'children']),
                        o = 'string' == typeof a ? new Date(a || 0) : a;
                    return i('formatDate' === e ? r.formatDateToParts(o, n) : r.formatTimeToParts(o, n));
                };
                return (t.displayName = i[e]), t;
            }
            function d(e) {
                var t = function (t) {
                    var r = (0, l.A)(),
                        a = t.value,
                        i = t.children,
                        o = (0, s.__rest)(t, ['value', 'children']),
                        c = r[e](a, o);
                    if ('function' == typeof i) return i(c);
                    var d = r.textComponent || n.Fragment;
                    return n.createElement(d, null, c);
                };
                return (t.displayName = a[e]), t;
            }
            (o.displayName = 'FormattedNumberParts'), (o.displayName = 'FormattedNumberParts');
            var u = d('formatDate');
            d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), c('formatDate'), c('formatTime');
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        91624: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        92013: (e, t, r) => {
            'use strict';
            var a;
            r.d(t, { T: () => a }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(a || (a = {}));
        },
        92606: (e) => {
            e.exports = {
                root: 'CollectionShelfPageEmpty_root__KrMco',
                iconBackground: 'CollectionShelfPageEmpty_iconBackground__limUg',
                title: 'CollectionShelfPageEmpty_title__cwF4m',
                button: 'CollectionShelfPageEmpty_button___uzMX',
            };
        },
        94218: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => m });
            var a = r(32290),
                i = r(21916),
                s = r(39407),
                n = r(21732),
                l = r(91027),
                o = r(63423),
                c = r(71926),
                d = r(70204),
                u = r(34186);
            let m = (e) => {
                let { size: t = 'm', variant: r = 'default', withRipple: m = !0, buttonText: _, isBlock: p, key: h, className: f } = e,
                    x = (0, i.useRouter)(),
                    v = (0, u.N)().get(d.QG),
                    g = (0, l.c)(() => {
                        v.authorizationUrl && x.push(v.authorizationUrl);
                    });
                return (0, a.jsx)(
                    o.$,
                    {
                        onClick: g,
                        className: f,
                        isBlock: p,
                        color: 'primary',
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: _ || (0, a.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, a.jsx)(s.A, { id: 'authorization.enter-button' }) }),
                    },
                    h,
                );
            };
        },
    },
]);
