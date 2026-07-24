(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9394],
    {
        3377: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => h });
            var r = i(32290),
                a = i(96103),
                s = i(21916),
                n = i(63618),
                l = i(39407),
                o = i(71926),
                c = i(94218),
                d = i(55556),
                u = i.n(d);
            let m = (0, a.PA)(() =>
                (0, r.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, r.jsx)(o.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(o.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, r.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, r.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var _ = i(20472),
                p = i(57594);
            let h = (0, a.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: a } = (0, p.g)();
                return a.isAuthorized ? t : (i && (0, s.redirect)(_.Z.main.href), (0, r.jsx)(m, {}));
            });
        },
        3796: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => s });
            var r = i(21916),
                a = i(55178);
            let s = (e) => {
                let t = (0, r.usePathname)(),
                    [i, s] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t);
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), s(!0));
                    }, [e, i, t]);
            };
        },
        4820: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var r = i(32290),
                a = i(55178),
                s = i(21732),
                n = i(71926),
                l = i(91624),
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
                            ''.concat(i, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        5070: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 3377)), Promise.resolve().then(i.bind(i, 25990));
        },
        11262: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var r = i(32290),
                a = i(55178),
                s = i(91027),
                n = i(71730),
                l = i(45477),
                o = i(75582),
                c = i(49399);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, a.useRef)(void 0),
                    m = (0, s.c)(() => {
                        var i;
                        d({ notificationId: u.current }), (u.current = 0);
                        let r = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            });
                    });
                (0, a.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, r.jsx)(n.L, { reloadBlocks: m }), { containerId: l.u.ERROR, autoClose: !1 }));
                }, [d, m, i, e.rejectedPagesCount]);
            };
        },
        12989: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => v });
            var r = i(55178),
                a = i(16172),
                s = i(52068),
                n = i(6752),
                l = i(62376),
                o = i(1677),
                c = i(48922),
                d = i(84782),
                u = i(30915),
                m = i(18746),
                _ = i(2792),
                p = i(37240),
                h = i(51012),
                x = i(47498);
            let v = () => {
                let e = (0, l.U)(),
                    t = (0, s.st)(),
                    { hash: i } = (0, s.gf)(),
                    { pageId: v, displayReasonId: g } = (0, p.$)(),
                    { tabId: f, tabPos: k, isTabSelectedByDefault: b } = (0, x.R)(),
                    { offsetBlockPosY: j } = (0, u.u)(),
                    { blockType: C, blockId: A, blockPosX: N, blockPosY: S, mainObjectId: T, mainObjectType: y, displayReasonId: I } = (0, d.N)(),
                    { filterKey: w, filterValue: L, filterPos: R } = (0, m.G)(),
                    { objectType: E, objectsCount: P, objectId: D, objectPosX: O, objectPosY: z } = (0, _.J)(),
                    { skeleton: W } = (0, h.b)(),
                    K = null != I ? I : g,
                    F = (0, n.L)(() => (void 0 !== j && void 0 !== S ? j + S : S));
                return (0, r.useCallback)(
                    (r, s) => {
                        if (!t || !v || !c.xK.includes(v) || !c.fD.includes(v)) return;
                        let n = o.F[v];
                        if (!n) return;
                        let l = {
                            hash: i,
                            pageId: n,
                            entityType: C,
                            entityId: A,
                            entityPosX: N,
                            entityPosY: F,
                            objectsCount: P,
                            viewUuid: s,
                            objectType: E,
                            objectId: D,
                            objectPosX: O,
                            objectPosY: z,
                        };
                        void 0 !== w && ((l.filterKey = w), (l.filterValue = L), (l.filterPos = R)),
                            c.qG.includes(v) && ((l.tabId = f), (l.tabPos = k), (l.isTabSelectedByDefault = b)),
                            W && (l.skeletonId = W),
                            'string' == typeof T && 'string' == typeof y && ((l.mainObjectType = y), (l.mainObjectId = T)),
                            K && (l.displayReasonId = K);
                        let d = (0, a.Fx)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        d && (r ? (0, a.Pf)(t.evgenInstance, d) : (0, a.nv)(t.evgenInstance, d));
                    },
                    [t, K, A, N, F, C, w, R, L, i, b, e, T, y, D, O, z, E, P, v, W, f, k],
                );
            };
        },
        13798: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => x });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(55178),
                l = i(60900),
                o = i(26252),
                c = i(21732),
                d = i(6752),
                u = i(82586),
                m = i(57594),
                _ = i(60244),
                p = i(90006),
                h = i.n(p);
            let x = (0, s.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: s, containerClassName: p, variant: x, size: v = 'xxxs', ...g } = e,
                    { formatMessage: f } = (0, l.A)(),
                    {
                        settings: { isMobile: k },
                    } = (0, m.g)(),
                    [b, j] = (0, n.useState)(null),
                    C = (0, d.L)(() => {
                        switch (x) {
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
                    A = (0, n.useMemo)(() => f({ id: 'extra-explicit.explicit-mark' }), [f]);
                (0, n.useEffect)(() => {
                    i && i().then(j);
                }, [i, s]);
                let N = (null == b ? void 0 : b.join('\n')) || '',
                    S = !!(null == b ? void 0 : b.length) && !k,
                    T = N.length > 0 ? N : A;
                return (0, r.jsx)(_.k, {
                    description: N,
                    placement: 'bottom-start',
                    enabled: S,
                    children: (0, r.jsx)('span', {
                        className: p,
                        children: (0, r.jsx)(u.I, {
                            className: (0, a.$)(h().explicitMark, t),
                            'aria-label': T,
                            variant: C,
                            size: v,
                            ...g,
                            'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        22714: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(32290),
                a = i(55178),
                s = i(1176);
            let n = (e) => {
                let { pageId: t, pageEntityId: i, displayReasonId: n, pageStyle: l, pagePlacement: o, children: c } = e,
                    d = (0, a.useMemo)(() => ({ pageId: t, pageEntityId: i, displayReasonId: n, pageStyle: l, pagePlacement: o }), [t, i, n, l, o]);
                return (0, r.jsx)(s.r.Provider, { value: d, children: c });
            };
        },
        23352: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(55178),
                a = i(12989),
                s = i(80536);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: i } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, r.useRef)(null),
                    l = (0, a.D)(),
                    o = (0, r.useId)(),
                    c = (0, r.useContext)(s.B),
                    d = (0, r.useCallback)(
                        (r, a) => {
                            e ? e(r, i ? a : void 0) : l(r, a), t && c.unobserveElement(o);
                        },
                        [e, c, o, l, t, i],
                    );
                return (
                    (0, r.useEffect)(
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
        25990: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsTracksPage: () => O });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(55178),
                l = i(60900),
                o = i(39407),
                c = i(21732),
                d = i(71483),
                u = i(96333),
                m = i(71926),
                _ = i(64170),
                p = i(7999),
                h = i(94631),
                x = i(69951),
                v = i(48922),
                g = i(22714),
                f = i(72396),
                k = i(83808),
                b = i(83920),
                j = i(3796),
                C = i(31286),
                A = i(57594),
                N = i(98350),
                S = i(11262),
                T = i(58054),
                y = i(32468),
                I = i(74694),
                w = i(34223),
                L = i(45257),
                R = i(30294),
                E = i(61500),
                P = i(60586),
                D = i.n(P);
            let O = (0, s.PA)(() => {
                let {
                        collection: {
                            kids: { tracks: e },
                        },
                        settings: { isMobile: t },
                    } = (0, A.g)(),
                    { contentScrollRef: i, setContentScrollRef: s } = (0, b.g)(),
                    P = (0, k.W)(),
                    { from: O } = (0, f.f)({ pageId: v._Q.COLLECTION_KIDS_TRACKS }),
                    { formatMessage: z } = (0, l.A)(),
                    W = (0, C.w)();
                (0, n.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                    (0, j.J)(e.isResolved);
                let K = (0, n.useCallback)(
                    (t) => {
                        e.getData({ page: t, pageSize: R.c });
                    },
                    [e],
                );
                (0, S.X)(e.pagesLoader, K);
                let F = (0, n.useMemo)(() => ({ Footer: () => (0, r.jsx)(y.A, { children: (0, r.jsx)(T.w, { className: D().footer }) }) }), []),
                    M = e.isShimmerVisible ? 20 : e.items.length;
                return (e.isNeededToLoad && (0, n.use)(e.getData({ pageSize: R.c })), e.isRejected)
                    ? (0, r.jsx)(_.SomethingWentWrong, {})
                    : e.isEmpty
                      ? (0, r.jsx)(E.i, { title: z({ id: 'kids.favourite-tracks-and-episodes' }) })
                      : (0, r.jsx)(g.n, {
                            pageId: v._Q.COLLECTION_KIDS_TRACKS,
                            children: (0, r.jsx)(p.h, {
                                scrollElement: i,
                                outerTitle: z({ id: 'kids.favourite-tracks-and-episodes' }),
                                children: (0, r.jsxs)('div', {
                                    className: D().root,
                                    'data-test-id': c.Xk.collection.COLLECTION_KIDS_TRACKS_PAGE,
                                    children: [
                                        (0, r.jsx)(I.Y, {
                                            variant: I.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: P.canBack,
                                            children: (0, r.jsx)(m.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: t ? 'm' : 'xl',
                                                lineClamp: 2,
                                                children: (0, r.jsx)(o.A, { id: 'kids.favourite-tracks-and-episodes' }),
                                            }),
                                        }),
                                        (0, r.jsx)(L.$, {
                                            className: (0, a.$)(D().scrollContainer, D().important),
                                            listClassName: D().content,
                                            customComponents: F,
                                            itemContentCallback: (t) => {
                                                let i = e.items[t];
                                                if (!i) return (0, r.jsx)(w.D, { isActive: !0, className: D().shimmerItem, variant: N.X.PLAYLIST });
                                                let a = W(i.entityId, {
                                                    contextData: { type: d.K.Various, meta: { id: i.entityId }, from: O },
                                                    queueParams: { index: t },
                                                    loadContextMeta: !1,
                                                    entitiesData: e.sonataEntitiesData,
                                                });
                                                return i.type === u.S.MUSIC
                                                    ? (0, r.jsx)(x.K, { track: i, playContextParams: a }, t)
                                                    : (0, r.jsx)(h.K, { track: i, playContextParams: a, withPodcastName: i.isTrackPodcast }, t);
                                            },
                                            initialItemCount: M,
                                            totalCount: M,
                                            onGetDataByPage: K,
                                            pageSize: R.c,
                                            totalRequests: e.requestsCount,
                                            handleRef: s,
                                            context: { listAriaLabel: z({ id: 'entity-names.tracks' }) },
                                            isMobileLayout: t,
                                            useWindowScroll: t,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(32290),
                a = i(55178),
                s = i(60900),
                n = i(21732),
                l = i(63423),
                o = i(82586),
                c = i(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: p,
                            className: h,
                            forwardRef: x,
                            style: v,
                            children: g,
                        } = e,
                        { formatMessage: f } = (0, s.A)(),
                        k = f({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': k,
                        onClick: _,
                        ref: x,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        30294: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => r });
            let r = 20;
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
        30542: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => s });
            var r = i(60900),
                a = i(64605);
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
        31286: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => s });
            var r = i(55178),
                a = i(91027);
            let s = () => {
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
        33960: (e) => {
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
        41566: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => d });
            var r = i(32290),
                a = i(96103),
                s = i(21732),
                n = i(82586),
                l = i(19740),
                o = i(30542),
                c = i(57594);
            let d = (0, a.PA)((e) => {
                let { isLiked: t, onClick: i, className: a, albumType: d, disabled: u } = e,
                    { user: m } = (0, c.g)(),
                    _ = t ? 'liked' : 'like',
                    p = (0, o.$)(t, d);
                return (0, r.jsx)(l.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, r.jsx)(n.I, { variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: u || !m.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: p,
                });
            });
        },
        41677: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => F });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(55178),
                l = i(70280),
                o = i(57594),
                c = i(53514),
                d = i(40484),
                u = i.n(d),
                m = i(60900),
                _ = i(16172),
                p = i(21732),
                h = i(91027),
                x = i(71926),
                v = i(47745),
                g = i(84062),
                f = i(28999),
                k = i(61258),
                b = i(19383);
            let j = (0, s.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: a,
                            captionClassName: s,
                            captionSize: n = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: j } = (0, m.A)(),
                        {
                            track: C,
                            settings: { isMobile: A },
                        } = (0, o.g)(),
                        N = (0, g.Z)(t.url),
                        { sendNavigateSearchFeedback: S } = (0, f.z)(),
                        T = (0, v.N)(),
                        y = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: r, fullscreenPlayer: a, fullscreenVideoPlayer: s } = (0, o.g)(),
                                { modal: n } = r;
                            return (0, b.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), n.isOpened && (r.reset(), n.close()), a.modal.isOpened && a.modal.close();
                                },
                                onAfterHandled: () => {
                                    s.modal.isOpened && (s.modal.close(), s.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, h.c)((e) => {
                                A && C.isOpened && C.close(), N(e);
                            }),
                        }),
                        I = (0, h.c)((e) => {
                            T({ to: _.QT.ArtistScreen }), null == S || S(), y(e);
                        });
                    return i && !t.various
                        ? (0, r.jsx)(k.N, {
                              'aria-label': j({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: a,
                              href: t.url,
                              onClick: I,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(l.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, r.jsx)(x.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: s, children: t.name }),
                              }),
                          })
                        : (0, r.jsx)(l.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, r.jsx)(x.HL, {
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
                C = (e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: a,
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
                                              (0, r.jsx)(
                                                  j,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: a,
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
                        }, [t.decomposed, u, i, a, s, l, o, c, d]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(j, {
                                artist: t,
                                withLink: i,
                                linkClassName: a,
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
            var A = i(39407),
                N = i(63887);
            let S = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: s } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(N.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(u().spoiler, i),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': p.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(A.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var T = i(8055),
                y = i(6752),
                I = i(78035),
                w = i(78176),
                L = i(83598),
                R = i.n(L);
            let E = (0, s.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, r.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, I.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: a, children: t }),
                            (0, r.jsx)(l.ZI, { className: R().tooltipContent, children: i.map((e) => (0, r.jsx)(w.V, { artist: e, className: R().artistItem }, e.id)) }),
                        ],
                    });
                }),
                P = (0, n.forwardRef)((e, t) => (0, r.jsx)(E, { forwardRef: t, ...e }));
            var D = i(19740),
                O = i(52598),
                z = i.n(O);
            let W = (0, s.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: s } = (0, m.A)();
                    return (0, r.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, a.$)(z().root, z().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(w.V, { artist: e }, e.id)),
                    });
                }),
                K = (0, s.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [s, l] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, o.g)(),
                        d = (0, h.c)(() => {
                            let e = a.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, y.L)(() =>
                            (0, T.A)(() => {
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
                        return (s || c) && (!c || 1 !== t.length) ? (c ? (0, r.jsx)(W, { artists: t, label: i }) : (0, r.jsx)(P, { artists: t, label: i })) : i;
                }),
                F = (0, s.PA)((e) => {
                    let {
                            className: t,
                            artists: i = [],
                            separator: s = ', ',
                            lineClamp: d,
                            visibleArtistsCount: m,
                            withLink: _ = !0,
                            spoilerClassName: p,
                            linkClassName: h,
                            captionClassName: x,
                            captionSize: v,
                            variant: g = 'breakAll',
                            withAllArtistsTitle: f = !0,
                            withComposer: k = !0,
                            spoilerComponent: b,
                            withCustomTooltip: j = !0,
                            artistIdWithoutLink: A,
                            withContextMenu: N,
                        } = e,
                        T = (0, n.useRef)(null),
                        [y, I] = (0, n.useState)(!1),
                        w = f
                            ? i
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let i = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...i]) : [t.name, ...i];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(s)
                            : '',
                        {
                            settings: { isMobile: L },
                        } = (0, o.g)(),
                        R = 1 === i.length,
                        E = (0, n.useCallback)((e) => {
                            I(!0), e.preventDefault();
                        }, []),
                        P = (0, n.useMemo)(() => {
                            let e = i;
                            return (
                                m && !y && (e = i.slice(0, m)),
                                e.reduce((e, t) => {
                                    if (!k && t.isComposer) return e.length ? e : [];
                                    let i = (0, r.jsx)(
                                        C,
                                        {
                                            artist: t,
                                            linkClassName: h,
                                            captionClassName: x,
                                            withLink: _ && t.id !== A && (((!L || R) && N) || !N),
                                            captionSize: v,
                                            allArtistsTitle: w,
                                            withCustomTooltip: j,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!s,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([s, i]) : [i];
                                }, [])
                            );
                        }, [i, m, y, k, L, R, N, h, x, _, A, v, w, j, s]),
                        D = (0, n.useMemo)(() => {
                            if (!y && m && m < i.length) {
                                let e = i.length - m;
                                return (0, n.isValidElement)(b) ? b : (0, r.jsx)(S, { spoilerClassName: p, spoilerArtistsCount: e, handleOnSpoilerClick: E });
                            }
                        }, [i.length, E, y, p, b, m]),
                        O = (0, n.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        z = (0, r.jsx)(l.m_, {
                            referenceRef: T,
                            enabled: !!(f && w) && j && !N && !L,
                            offsetOptions: 4,
                            placement: 'top',
                            text: w,
                            hoverSettings: c.V,
                            children: (0, r.jsxs)('div', {
                                style: O,
                                className: (0, a.$)(u().root, u()['root_variant_'.concat(g)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: f && w && !j && !N ? w : void 0,
                                children: [P, D],
                            }),
                        });
                    return N ? (0, r.jsx)(K, { labelRef: T, artists: i, label: z }) : z;
                });
        },
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => x });
            var r = i(32290),
                a = i(63618),
                s = i(8055),
                n = i(55178);
            let l = (e) => {
                    let { style: t, forwardRef: i, context: a, ...s } = e,
                        n = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        l = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': n, style: { ...t }, ref: i, ...s });
                },
                o = (0, n.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e }));
            var c = i(39684),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: s, withHeader: n, withForceScroll: l, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, n.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var _ = i(62060),
                p = i(31417);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: a,
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
                                    if ((null == a || a(e), o.length > 0 && m(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < r; e++) i(e);
                                    }
                                }, s),
                            [s, a, t, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && u && h(u);
                    }, o);
                    let x = (0, n.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, r.jsx)(p.sN, { rangeChanged: h, totalCount: l, endReached: x, ...d });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: p,
                            overscan: x = 700,
                            pageSize: v = 20,
                            totalCount: g,
                            totalRequests: f,
                            debounceDurationInMs: k,
                            initialItemCount: b,
                            minInitialItemCount: j = 20,
                            handleRef: C,
                            alwaysShowScrollbar: A = !1,
                            testId: N,
                            isMobileLayout: S = !1,
                            shouldTriggerRangeChangedOn: T,
                            ...y
                        } = e,
                        [I, w] = (0, n.useState)(!1),
                        L = (0, n.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    w(e);
                                }, 100),
                            [],
                        ),
                        R = (0, n.useMemo)(() => {
                            var e, t;
                            return S
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
                        }, [i, f, S]),
                        E = b ? Math.min(b, j) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: I || A, [d().root_notScrolling]: !I && !A }, t),
                        'data-test-id': N,
                        children: [
                            S && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(h, {
                                overscan: x,
                                components: R,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: L,
                                itemContent: _,
                                scrollerRef: C,
                                totalCount: g,
                                pageSize: v,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: k,
                                initialItemCount: E,
                                shouldTriggerRangeChangedOn: T,
                                ...y,
                            }),
                            S && (null == i ? void 0 : i.Footer) && i.Footer(),
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
        53514: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
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
        56008: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r });
            let r = (0, i(55178).createContext)({ pageAlbumId: void 0 });
        },
        60244: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var r = i(32290),
                a = i(21732),
                s = i(70280),
                n = i(71926),
                l = i(48736),
                o = i.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: l, placement: d = 'top', children: u } = e;
                    return (0, r.jsxs)(s.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, r.jsx)(s.ZI, {
                                className: o().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, r.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        60586: (e) => {
            e.exports = {
                root: 'CollectionKidsTracksPage_root__8nP0n',
                scrollContainer: 'CollectionKidsTracksPage_scrollContainer__1d9Pm',
                important: 'CollectionKidsTracksPage_important__oX_Ny',
                footer: 'CollectionKidsTracksPage_footer__dujIV',
                content: 'CollectionKidsTracksPage_content__Vf43s',
            };
        },
        61500: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => b });
            var r = i(32290),
                a = i(96103),
                s = i(39407),
                n = i(63423),
                l = i(82586),
                o = i(46049),
                c = i(71926),
                d = i(7999),
                u = i(83808),
                m = i(83920),
                _ = i(20472),
                p = i(84062),
                h = i(57594),
                x = i(58054),
                v = i(32468),
                g = i(74694),
                f = i(33960),
                k = i.n(f);
            let b = (0, a.PA)((e) => {
                let { title: t } = e,
                    {
                        settings: { isMobile: i },
                    } = (0, h.g)(),
                    { contentScrollRef: a, setContentScrollRef: f } = (0, m.g)(),
                    b = (0, u.W)(),
                    j = (0, p.Z)(_.Z.collectionKids.href);
                return (0, r.jsxs)(d.h, {
                    scrollElement: a,
                    outerTitle: t,
                    children: [
                        (0, r.jsx)(g.Y, {
                            variant: g.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: b.canBack,
                            children: (0, r.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: i ? 'm' : 'xl', lineClamp: 2, children: t }),
                        }),
                        (0, r.jsxs)(o.N, {
                            ref: f,
                            containerClassName: k().scrollableContainer,
                            className: k().root,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: k().content,
                                    children: [
                                        (0, r.jsx)('div', { className: k().icon, children: (0, r.jsx)(l.I, { variant: 'like', size: 'l' }) }),
                                        (0, r.jsx)(c.DZ, {
                                            className: k().title,
                                            variant: 'h3',
                                            size: 'xs',
                                            children: (0, r.jsx)(s.A, { id: 'error-messages.empty-collection-kids-sub-page-title' }),
                                        }),
                                        (0, r.jsx)(n.$, {
                                            onClick: j,
                                            className: k().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 's',
                                            radius: 'xxxl',
                                            children: (0, r.jsx)(c.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, r.jsx)(s.A, { id: 'error-messages.empty-collection-kids-sub-page-link' }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(v.A, { children: (0, r.jsx)(x.w, { className: k().footer }) }),
                            ],
                        }),
                    ],
                });
            });
        },
        63363: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => g });
            var r = i(32290),
                a = i(60900),
                s = i(91027),
                n = i(67732),
                l = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(92708),
                m = i(55178),
                _ = i(63380),
                p = i(96103),
                h = i(97755),
                x = i(79238);
            let v = (0, p.PA)((e) => {
                    let { album: t, closeToast: i, withLink: a } = e,
                        s = (0, x.b)(t);
                    return (0, r.jsx)(h.O, {
                        closeToast: i,
                        entityVariant: s,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        withLink: a,
                    });
                }),
                g = (e) => {
                    let {
                            user: t,
                            paywall: i,
                            albumCPA: { isPlusCPAEnabled: p },
                        } = (0, c.g)(),
                        { formatMessage: h } = (0, a.A)(),
                        { notify: x } = (0, o.l)(),
                        g = (() => {
                            let { notify: e } = (0, o.l)(),
                                [t, i] = (0, m.useState)(!1),
                                { formatMessage: n } = (0, a.A)();
                            return (0, s.c)(async (a) => {
                                let { album: s, withLink: o = !0, withNotification: c = !0 } = a;
                                if (t) return;
                                let m = { ...(0, u.HO)(s), url: s.url, isLiked: !s.isLiked };
                                i(!0);
                                let p = await s.toggleLike();
                                i(!1),
                                    c &&
                                        (p === _.f.OK
                                            ? e((0, r.jsx)(v, { withLink: o, album: m }), { containerId: l.u.INFO })
                                            : e((0, r.jsx)(d.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                            });
                        })(),
                        { pageAlbumId: f } = (0, n.T)();
                    return (0, s.c)(async () => {
                        if (e)
                            return p({ pageAlbumId: f, albumId: e.id, isNonMusic: e.isNonMusic })
                                ? void i.openModal()
                                : t.isAuthorized
                                  ? g({ album: e })
                                  : void x((0, r.jsx)(d.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    });
                };
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => b });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(55178),
                l = i(60900),
                o = i(39407),
                c = i(63423),
                d = i(82586),
                u = i(71926),
                m = i(16172),
                _ = i(52068),
                p = i(62376),
                h = i(37240),
                x = i(83920),
                v = i(20472),
                g = i(12894),
                f = i(30310),
                k = i.n(f);
            let b = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    f = s({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, _.st)(),
                        { hash: i } = (0, _.gf)(),
                        { pageId: r } = (0, h.$)(),
                        a = (0, p.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !i || !r) return;
                        let s = (0, m.Fx)({
                            params: {
                                entityType: m.LA.Error,
                                entityId: m.LA.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: r,
                                pageStyle: m.QL.Fullscreen,
                                pagePlacement: m.c4.Fullscreen,
                                mainObjectType: m.ky.NonApplicable,
                                mainObjectId: m.ky.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, m.z5)(t.evgenInstance, s);
                    }, [t, e, i, r, a]);
                })(f);
                let { sendRefreshEvent: b } = (function () {
                        let e = (0, _.st)(),
                            { hash: t } = (0, _.gf)(),
                            { pageId: i } = (0, h.$)(),
                            r = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let a = (0, m.Fx)({
                                    params: {
                                        actionType: m.X2.Refresh,
                                        userInteractionType: m.gi.Tap,
                                        entityType: m.LA.Error,
                                        entityId: m.LA.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: m.QL.Fullscreen,
                                        pagePlacement: m.c4.Fullscreen,
                                        mainObjectType: m.ky.NonApplicable,
                                        mainObjectId: m.ky.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, m.bv)(e.evgenInstance, a);
                            }, [e, t, i, r]),
                        };
                    })(),
                    j = (0, n.useCallback)(() => {
                        b(), (window.location.href = v.Z.main.href);
                    }, [b]),
                    { contentRef: C } = (0, x.g)();
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(k().root, t),
                    children: [
                        i &&
                            (0, r.jsx)(g.L, { withBackwardFallback: '/', className: (0, a.$)(k().navigation, { [k().navigation_desktop]: !C }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, a.$)(k().content, { [k().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(d.I, { className: k().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.DZ, { className: (0, a.$)(k().title, k().important), variant: 'h3', size: 'xs', children: f }),
                                (0, r.jsxs)(u.HL, {
                                    className: (0, a.$)(k().text, k().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: j,
                                    className: k().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(u.HL, {
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
        67732: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var r = i(55178),
                a = i(56008);
            function s() {
                return (0, r.useContext)(a.H);
            }
        },
        68912: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => N });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(21916),
                l = i(55178),
                o = i(60900),
                c = i(39407),
                d = i(21732),
                u = i(70280),
                m = i(71926),
                _ = i(41677),
                p = i(28999),
                h = i(57594),
                x = i(53514),
                v = i(85017),
                g = i(13798),
                f = i(61258),
                k = i(25649),
                b = i(24760),
                j = i(84141),
                C = i(5856),
                A = i.n(C);
            let N = (0, s.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: s,
                        albumArtists: C,
                        withExplicitMark: N = !0,
                        withSecondaryColor: S,
                        captionSize: T = 'm',
                        explicitSize: y = 'xxxs',
                        withAllArtistsTitle: I,
                        textClassName: w,
                        artistsClassName: L,
                        ignoreDislikedStyles: R,
                        withCustomTooltip: E = !0,
                        hasLineClamp: P = !0,
                        withSavingQueryParams: D,
                        beforeTitle: O,
                        withArtistLink: z = !0,
                        withTrackLink: W = !0,
                        afterTitle: K,
                        withContextMenuArtists: F,
                    } = e,
                    { formatMessage: M } = (0, o.A)(),
                    { sendNavigateSearchFeedback: B } = (0, p.z)(),
                    {
                        settings: { isMobile: U },
                    } = (0, h.g)(),
                    $ = (0, b.$)({ withCustomTooltip: E }),
                    H = (0, n.useSearchParams)(),
                    V = s.getUrl(D ? Object.fromEntries(H) : void 0),
                    Y = (0, l.useMemo)(() => {
                        var e;
                        let t = M({ id: 'entity-names.track-name' }, { trackName: s.title });
                        return ''.concat(t, ' ').concat(null != (e = s.version) ? e : '');
                    }, [M, s.title, s.version]),
                    Z = (0, j.O)({ track: s, onNavigate: B, withSavingQueryParams: D, entityType: v.n.TRACK }),
                    X = (0, l.useCallback)(
                        (e) => {
                            let t = ''.concat(s.title, ' ').concat(!s.isRemoved && s.version ? s.version : '');
                            return (0, r.jsx)(u.m_, {
                                enabled: $ && !U,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: x.V,
                                children: (0, r.jsx)(m.HL, {
                                    className: (0, a.$)(A().text, A().title),
                                    type: 'entity',
                                    size: T,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: s.title,
                                }),
                            });
                        },
                        [U, $, T, s.isRemoved, s.title, s.version],
                    ),
                    G = (0, l.useMemo)(() => {
                        let e = ''.concat(s.title, ' ').concat(!s.isRemoved && s.version ? s.version : '');
                        return s.isRemoved
                            ? (0, r.jsx)(u.m_, {
                                  enabled: $ && !U,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: M({ id: 'track-title.error-not-found' }),
                                  hoverSettings: x.V,
                                  children: (0, r.jsx)(m.HL, {
                                      className: (0, a.$)(A().text, A().title),
                                      type: 'entity',
                                      size: T,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: $ ? void 0 : M({ id: 'track-title.error-not-found' }),
                                      children: (0, r.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : s.hasTrackLink && W
                              ? (0, r.jsx)(f.N, {
                                    onClick: Z,
                                    className: A().albumLink,
                                    href: V,
                                    'aria-label': Y,
                                    title: $ ? void 0 : e,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: X(),
                                })
                              : X({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }, [U, s.title, s.isRemoved, s.version, s.hasTrackLink, X, $, M, T, Y, Z, V, W]),
                    Q = (0, k.s)(s.artists, C),
                    q = (0, l.useMemo)(() => +!!P, [P]);
                return (0, r.jsx)('div', {
                    className: (0, a.$)(A().root, { [A().root_disabled]: !s.isAvailable, [A().root_disliked]: s.isDisliked && !R, [A().root_withSecondaryColor]: S }, t),
                    children: (0, r.jsxs)('div', {
                        className: A().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(A().titleContainer, { [A().titleContainer_withVersion]: s.version }, i),
                                children: [
                                    (0, r.jsxs)(m.HL, {
                                        className: (0, a.$)(A().text, w),
                                        type: 'entity',
                                        size: T,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            O,
                                            G,
                                            !s.isRemoved &&
                                                s.version &&
                                                (0, r.jsxs)(m.HL, {
                                                    className: (0, a.$)(A().text, A().version),
                                                    type: 'entity',
                                                    size: T,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: $ ? void 0 : s.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', s.version],
                                                }),
                                        ],
                                    }),
                                    s.explicitDisclaimer &&
                                        N &&
                                        (0, r.jsx)(g.N, {
                                            containerClassName: A().explicitMarkContainer,
                                            getDescriptionTexts: s.getDescriptionTexts,
                                            size: y,
                                            variant: s.explicitDisclaimer,
                                            className: A().explicitMark,
                                            trackId: s.id,
                                        }),
                                    K,
                                ],
                            }),
                            Q.length > 0 &&
                                (0, r.jsx)(_.i, {
                                    className: (0, a.$)(A().text, { [A().artists]: P }, L, w),
                                    withAllArtistsTitle: I,
                                    linkClassName: (0, a.$)(A().text, A().link),
                                    captionClassName: (0, a.$)(A().text, A().artistCaption),
                                    artists: Q,
                                    withLink: s.isNonUserGenerated && z,
                                    lineClamp: q,
                                    captionSize: T,
                                    withContextMenu: F,
                                }),
                        ],
                    }),
                });
            });
        },
        69951: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => v });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(55178),
                l = i(21732),
                o = i(90169),
                c = i(57594),
                d = i(40229),
                u = i(43565),
                m = i(8677),
                _ = i(68912),
                p = i(92102),
                h = i(85673),
                x = i.n(h);
            let v = (0, s.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: s,
                        className: h,
                        withDNDBlock: v,
                        isDragging: g,
                        draggingClassName: f,
                        ignoreDislikedStyles: k,
                        withSecondaryColor: b,
                        handleRemove: j,
                        withDislike: C,
                        withTrailer: A = !0,
                        beforeTitle: N,
                        removeButtonAriaLabel: S,
                        hideControls: T,
                    } = e,
                    y = (0, o.D)({ playContextParams: s, entityId: i.entityId }),
                    {
                        settings: { isMobile: I },
                    } = (0, c.g)(),
                    w = (0, n.useCallback)(
                        (e) =>
                            (0, r.jsx)(d.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: x().playButtonCell,
                                ignoreDislikedStyles: k,
                                radius: 'xs',
                                ...e,
                            }),
                        [k, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, r.jsx)(p.C, {
                    className: (0, a.$)(h, { [x().trackWithDots]: v, [x().important]: v }),
                    track: i,
                    beforeBlock: v ? (0, r.jsx)(u.O, { className: (0, a.$)(x().dots, f), isDragging: g }) : void 0,
                    meta: (0, r.jsx)(_.j, { withArtistLink: !I, beforeTitle: N, track: i, ignoreDislikedStyles: k, withSecondaryColor: b }),
                    playButtonCellRender: w,
                    controls: (0, r.jsx)(m.Q, {
                        track: i,
                        className: x().controlsBarCell,
                        ignoreDislikedStyles: k,
                        utmLink: null == (t = s.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: b,
                        handleRemove: j,
                        withDislike: C,
                        withTrailer: A,
                        removeButtonAriaLabel: S,
                        hideControls: T,
                    }),
                    ...y,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
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
        71730: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => p });
            var r = i(32290),
                a = i(63618),
                s = i(55178),
                n = i(60900),
                l = i(39407),
                o = i(63423),
                c = i(82586),
                d = i(71926),
                u = i(58534),
                m = i(70718),
                _ = i.n(m);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    m = (0, s.useRef)(null),
                    { formatMessage: p } = (0, n.A)();
                (0, s.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let h = (0, s.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, r.jsx)(d.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(l.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(o.$, {
                                    ref: m,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(c.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, r.jsx)(u.$, { className: (0, a.$)(_().root, _().important), message: h, closeToast: i });
            };
        },
        78176: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => f });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(55178),
                l = i(16172),
                o = i(21732),
                c = i(91027),
                d = i(50162),
                u = i(19740),
                m = i(86269),
                _ = i(71926),
                p = i(47745),
                h = i(84062),
                x = i(57594),
                v = i(16510),
                g = i.n(v);
            let f = (0, s.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: s } = (0, x.g)(),
                    v = (0, h.Z)(t.url),
                    k = (0, p.N)(),
                    b = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(f, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    j = (0, c.c)((e) => {
                        s.modal.isOpened && s.modal.close(), k({ to: l.QT.ArtistScreen }), v(e);
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.Dr, {
                            className: (0, a.$)(g().root, i),
                            onClick: j,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(m.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, r.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, r.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        b,
                    ],
                });
            });
        },
        79238: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => s });
            var r = i(64605),
                a = i(97647);
            let s = (e) => {
                switch (e.type) {
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
        80536: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => r });
            let r = (0, i(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        81354: (e, t, i) => {
            'use strict';
            i.d(t, { XU: () => u });
            var r,
                a,
                s = i(30782),
                n = i(55178),
                l = i(60900);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(r || (r = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(a || (a = {}));
            var o = function (e) {
                var t = (0, l.A)(),
                    i = e.value,
                    r = e.children,
                    a = (0, s.__rest)(e, ['value', 'children']);
                return r(t.formatNumberToParts(i, a));
            };
            function c(e) {
                var t = function (t) {
                    var i = (0, l.A)(),
                        r = t.value,
                        a = t.children,
                        n = (0, s.__rest)(t, ['value', 'children']),
                        o = 'string' == typeof r ? new Date(r || 0) : r;
                    return a('formatDate' === e ? i.formatDateToParts(o, n) : i.formatTimeToParts(o, n));
                };
                return (t.displayName = a[e]), t;
            }
            function d(e) {
                var t = function (t) {
                    var i = (0, l.A)(),
                        r = t.value,
                        a = t.children,
                        o = (0, s.__rest)(t, ['value', 'children']),
                        c = i[e](r, o);
                    if ('function' == typeof a) return a(c);
                    var d = i.textComponent || n.Fragment;
                    return n.createElement(d, null, c);
                };
                return (t.displayName = r[e]), t;
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
        85673: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        91624: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        92013: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { T: () => r }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(r || (r = {}));
        },
        94218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var r = i(32290),
                a = i(21916),
                s = i(39407),
                n = i(21732),
                l = i(91027),
                o = i(63423),
                c = i(71926),
                d = i(70204),
                u = i(34186);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', withRipple: m = !0, buttonText: _, isBlock: p, key: h, className: x } = e,
                    v = (0, a.useRouter)(),
                    g = (0, u.N)().get(d.QG),
                    f = (0, l.c)(() => {
                        g.authorizationUrl && v.push(g.authorizationUrl);
                    });
                return (0, r.jsx)(
                    o.$,
                    {
                        onClick: f,
                        className: x,
                        isBlock: p,
                        color: 'primary',
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: _ || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(s.A, { id: 'authorization.enter-button' }) }),
                    },
                    h,
                );
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                5718, 7034, 3183, 7972, 8868, 7231, 6347, 9763, 6639, 7258, 3907, 8722, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6252, 6477, 7275,
                2586, 8347, 4522, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 6341, 3759, 4220, 9562, 7358,
            ],
            () => e((e.s = 5070)),
        ),
            (_N_E = e.O());
    },
]);
