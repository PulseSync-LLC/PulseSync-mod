(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8074],
    {
        5818: (e) => {
            e.exports = {
                coverBlock: 'ArtistCard_coverBlock__YCSus',
                like: 'ArtistCard_like__jmlKc',
                root: 'ArtistCard_root__F4RfA',
                root_selected: 'ArtistCard_root_selected__9Djbq',
                cover: 'ArtistCard_cover__RSTvK',
                image: 'ArtistCard_image__Uab5w',
                name: 'ArtistCard_name__IF9yZ',
                icon: 'ArtistCard_icon__PjbJI',
            };
        },
        10530: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 18509));
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
        17071: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => r });
            var r = (function (e) {
                return (
                    (e.MAIN = 'MAIN'),
                    (e.TRAILER = 'TRAILER'),
                    (e.VIDEO_PLAYER = 'VIDEO_PLAYER'),
                    (e.IMAGE_SLIDER = 'IMAGE_SLIDER'),
                    (e.PROMO_LANDING = 'PROMO_LANDING'),
                    e
                );
            })({});
        },
        18509: (e, t, a) => {
            'use strict';
            a.d(t, { KidsPage: () => z });
            var r = a(88800),
                l = a(65724),
                i = a(84961),
                o = a(53548),
                s = a(2058),
                n = a(88969),
                d = a(87999),
                _ = a(76903),
                c = a(17392),
                u = a(46312),
                m = a(29993),
                h = a(66719),
                g = a(29504),
                A = a(53779),
                E = a(25772),
                C = a(32596),
                S = a(20129),
                R = a(69630),
                f = a(98427),
                v = a(44230),
                w = a(37670),
                L = a(72288),
                x = a(86790),
                I = a(60266),
                M = a(93317),
                N = a(43969),
                p = a.n(N);
            let z = (0, i.PA)(() => {
                let { kids: e, user: t } = (0, L.g)(),
                    { formatMessage: a } = (0, s.A)(),
                    { contentScrollRef: i, setContentScrollRef: N } = (0, v.g)();
                ((0, o.useEffect)(() => () => e.landing.reset(), [e.landing]), (0, w.J)(e.landing.isResolved));
                let z = (0, A._)(e.landing),
                    O = (0, m.c)(() => {
                        if (e.landing.isLoaded) return e.landing.getSkeleton({ id: u.p.KIDS, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 });
                    });
                return (
                    e.landing.isNeededToLoad && (0, o.use)(e.landing.getSkeleton({ id: u.p.KIDS, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 })),
                    (0, r.jsxs)(_.a, {
                        pageId: d.AppScreen.Kids,
                        pageIdForFrom: f.b.KIDS,
                        children: [
                            (0, r.jsxs)(R.h, {
                                scrollElement: i,
                                outerTitle: a({ id: 'kids.for-kids' }),
                                children: [
                                    (0, r.jsx)(M.Y, {
                                        variant: M.V.TEXT,
                                        showControls: !1,
                                        children: (0, r.jsx)('div', {
                                            className: p().header,
                                            children: (0, r.jsx)(g.DZ, { variant: 'h1', weight: 'bold', size: 'xl', children: (0, r.jsx)(n.A, { id: 'kids.for-kids' }) }),
                                        }),
                                    }),
                                    (0, r.jsxs)(h.N, {
                                        className: p().root,
                                        containerClassName: p().content,
                                        ref: N,
                                        'data-test-id': c.Xk.kids.KIDS_PAGE,
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: (0, l.$)(p().landing, { [p().landing_onlyWizard]: z }),
                                                children: (0, r.jsx)(E.E, {
                                                    landing: e.landing,
                                                    errorComponent: (0, r.jsx)(C.SomethingWentWrong, { className: p().error, withBackwardControl: !1 }),
                                                }),
                                            }),
                                            (0, r.jsx)(I.A, { children: (0, r.jsx)(x.w, { className: p().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)(S.p, { onFinishSuccess: O }),
                        ],
                    })
                );
            });
        },
        20129: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => K });
            var r = a(88800),
                l = a(65724),
                i = a(84961),
                o = a(53548),
                s = a(2058),
                n = a(88969),
                d = a(17392),
                _ = a(50408),
                c = a(96817),
                u = a(11372),
                m = a(98225),
                h = a(29504),
                g = a(32353),
                A = a(29595),
                E = a(74965),
                C = a(51318),
                S = a(17071),
                R = a(38860),
                f = a(72288),
                v = a(27506),
                w = a(74773),
                L = a(66943),
                x = a(94058),
                I = a(37770),
                M = a(87366),
                N = a(76099),
                p = a(79418),
                z = a(62414),
                O = a(29832),
                D = a(52300),
                T = a(7555),
                b = a(81877),
                j = a(60978),
                W = a(5818),
                k = a.n(W);
            let P = (0, i.PA)((e) => {
                let { className: t, artist: a } = e,
                    i = (0, z.D)(),
                    {
                        wizard: { toggleArtistLike: s, isArtistLiked: n },
                    } = (0, f.g)(),
                    { id: _, name: u, coverUri: m } = a,
                    g = (0, o.useCallback)(() => {
                        s(_);
                    }, [s, _]),
                    A = n(_),
                    E = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(T.t, {
                                className: k().cover,
                                radius: 'round',
                                'data-test-id': d.e8.wizard.ARTIST_CARD,
                                children: (0, r.jsxs)(c.$, {
                                    radius: 'round',
                                    className: k().coverBlock,
                                    variant: 'default',
                                    onClick: g,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': A,
                                    'aria-label': u,
                                    'data-test-id': d.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, r.jsx)(b.B, { className: k().image, src: m || j.A.src, fit: 'cover', alt: u, withAvatarReplace: !!m, 'aria-hidden': !0 }),
                                        (0, r.jsx)('div', {
                                            className: (0, l.$)(k().like),
                                            children: (0, r.jsx)(D.I, { variant: 'likedVariant', size: 's', className: k().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [A, m, u, g],
                    );
                return (0, r.jsx)(O.MN, {
                    ref: i,
                    className: (0, l.$)(k().root, { [k().root_selected]: A }, t),
                    textPosition: 'center',
                    title: (0, r.jsx)(h.HL, {
                        'aria-hidden': !0,
                        className: k().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': d.e8.wizard.ARTIST_CARD_NAME,
                        children: u,
                    }),
                    view: E,
                    'data-test-id': d.Kq.artist.ARTIST_ITEM,
                });
            });
            var G = a(63442),
                F = a.n(G);
            let y = { [g.u.Desktop]: { start: 40, end: 40 }, [g.u.Mobile]: { start: 40, end: 40 } },
                K = (0, i.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: a } = (0, s.A)(),
                        {
                            wizard: i,
                            settings: { isMobile: g, isWindowsApplication: z, isLinuxApplication: O },
                            user: D,
                        } = (0, f.g)(),
                        { notify: T } = (0, E.l)(),
                        b = (0, R.z)(),
                        [j, W] = (0, _.d)(),
                        k = (0, o.useRef)(!1),
                        G = (0, m.zb)(0),
                        K = (0, o.useMemo)(
                            () => (e) => {
                                var t;
                                if (!G.onTabChange || e === G.value) return;
                                G.onTabChange(e);
                                let a = null == (t = i.genres[e]) ? void 0 : t.id;
                                (i.setFilter(a), null == j || j.scrollTo({ top: 0 }));
                            },
                            [i, G, j],
                        ),
                        V = (0, o.useMemo)(() => {
                            switch (i.remainingLikesToFinish) {
                                case 0:
                                    return a({ id: 'wizard.button-done' });
                                case 1:
                                    return a({ id: 'wizard.button-one-more' });
                                default:
                                    return 0 === i.selectedArtistsQuantity ? a({ id: 'wizard.button-tune' }) : a({ id: 'wizard.button-little-more' });
                            }
                        }, [i.remainingLikesToFinish, i.selectedArtistsQuantity, a]),
                        H = (0, o.useMemo)(
                            () =>
                                (0, r.jsx)(N.wI, {
                                    className: F().tabCarousel,
                                    ...G,
                                    onTabChange: K,
                                    isShimmerVisible: i.loadingState === w.G.PENDING,
                                    shimmer: (0, r.jsx)(N.zr, { isActive: !0, className: F().tabCarousel, count: g ? 2 : 3 }),
                                    children: i.genres.map((e, t) =>
                                        (0, r.jsx)(
                                            M.o,
                                            {
                                                className: (0, l.$)(F().filter, { [F().filter_selected]: t === G.value }),
                                                titleClassName: F().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [i.genres, G, K, i.loadingState, g],
                        ),
                        B = (0, o.useCallback)(() => {
                            i.loadArtists(60);
                        }, [i]);
                    (0, o.useEffect)(() => {
                        i.filter && B();
                    }, [i.filter, B]);
                    let U = (0, o.useCallback)(async () => {
                        (await i.loadGenres(), B());
                    }, [i, B]);
                    ((0, o.useEffect)(() => {
                        i.modal.isOpened && U();
                    }, [i, i.modal.isOpened, U]),
                        (0, o.useEffect)(() => {
                            i.loadingState === w.G.REJECT &&
                                (i.modal.close(), T((0, r.jsx)(L.h, { error: a({ id: 'error-messages.error-load-wizard' }) }), { containerId: A.u.ERROR }));
                        }, [i, i.loadGenres, i.loadingState, a, T]));
                    let Z = (0, o.useMemo)(
                            () =>
                                (0, r.jsx)(h.DZ, {
                                    className: F().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': d.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, r.jsx)(n.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        $ = (0, o.useCallback)(async () => {
                            if (!k.current) {
                                k.current = !0;
                                try {
                                    ((await i.finish()) === v.F.OK && (await D.getSettings(), await (null == t ? void 0 : t())), i.modal.close());
                                } finally {
                                    k.current = !1;
                                }
                            }
                        }, [t, D, i]);
                    return (
                        (0, o.useEffect)(
                            () => (
                                null == b ||
                                    b.addShortcutsListener(S.M.MAIN, C.l.CLOSE, () => {
                                        i.modal.isOpened && $();
                                    }),
                                () => {
                                    null == b || b.removeShortcutsListener(S.M.MAIN, C.l.CLOSE);
                                }
                            ),
                            [$, i.modal.isOpened, b],
                        ),
                        (0, r.jsxs)(u.a, {
                            className: (0, l.$)(F().root, { [F().root_withCustomControls]: z || O }),
                            headerClassName: F().modalHeader,
                            contentClassName: F().modalContent,
                            open: i.modal.isOpened,
                            onOpenChange: i.modal.onOpenChange,
                            onClose: $,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: a({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: d.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': d.e8.wizard.WIZARD_MODAL,
                            header: g && Z,
                            escapeKey: !1,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: F().wrapper,
                                    children: [
                                        !g && Z,
                                        (0, r.jsx)(h.HL, {
                                            className: F().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, r.jsx)(n.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, r.jsx)(c.$, {
                                            className: F().button,
                                            size: g ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: $,
                                            disabled: !i.canFinish,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, r.jsx)(h.HL, { variant: 'div', size: 'm', weight: 'medium', children: V }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)('div', {
                                    className: F().mainContainer,
                                    children: [
                                        (0, r.jsx)(x.F, { className: F().carousel, carouselElement: H, scrollPadding: y }),
                                        (0, r.jsx)(p.$, {
                                            withFooter: !1,
                                            className: (0, l.$)(F().scrollContainer, F().important),
                                            itemContentCallback: (e) => {
                                                let t = i.artistsByGenre[e];
                                                if (!t) {
                                                    let e = a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.artist' }) });
                                                    return (0, r.jsx)(I.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, r.jsx)(P, { artist: t }, t.id);
                                            },
                                            data: i.artistsByGenre,
                                            endReached: B,
                                            listClassName: F().content,
                                            itemClassName: F().item,
                                            pageSize: 60,
                                            handleRef: W,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        43969: (e) => {
            e.exports = {
                root: 'KidsPage_root__yycsJ',
                content: 'KidsPage_content__08pPR',
                header: 'KidsPage_header__2Gk2l',
                landing: 'KidsPage_landing__3QZZj',
                landing_onlyWizard: 'KidsPage_landing_onlyWizard__xKyDo',
                footer: 'KidsPage_footer__p7SVD',
                error: 'KidsPage_error__qa7Qo',
            };
        },
        51318: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => r });
            var r = (function (e) {
                return (
                    (e.TOGGLE_PLAY = 'TOGGLE_PLAY'),
                    (e.TOGGLE_MUTE = 'TOGGLE_MUTE'),
                    (e.INCREASE_VOLUME = 'INCREASE_VOLUME'),
                    (e.DECREASE_VOLUME = 'DECREASE_VOLUME'),
                    (e.LIKE = 'LIKE'),
                    (e.DISLIKE = 'DISLIKE'),
                    (e.MOVE_FORWARD = 'MOVE_FORWARD'),
                    (e.MOVE_BACKWARD = 'MOVE_BACKWARD'),
                    (e.SLIDE_FORWARD = 'SLIDE_FORWARD'),
                    (e.SLIDE_BACKWARD = 'SLIDE_BACKWARD'),
                    (e.TOGGLE_REPEAT = 'TOGGLE_REPEAT'),
                    (e.TOGGLE_SHUFFLE = 'TOGGLE_SHUFFLE'),
                    (e.TOGGLE_FULLSCREEN_PLAYER = 'TOGGLE_FULLSCREEN_PLAYER'),
                    (e.CLOSE = 'CLOSE'),
                    e
                );
            })({});
        },
        53779: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => l });
            var r = a(82212);
            let l = (e) => {
                var t, a, l, i;
                return (
                    !!Array.isArray(e.tabs.data) &&
                    1 === e.tabs.data.length &&
                    (null == (a = e.tabs.data[0]) || null == (t = a.blocks) ? void 0 : t.length) === 1 &&
                    (null == (i = e.tabs.data[0]) || null == (l = i.blocks[0]) ? void 0 : l.type) === r.t.WIZARD
                );
            };
        },
        63442: (e) => {
            e.exports = {
                content: 'WizardModal_content__mLcxg',
                modalHeader: 'WizardModal_modalHeader__BbNjx',
                root: 'WizardModal_root__mrF2y',
                root_withCustomControls: 'WizardModal_root_withCustomControls__t7Kjv',
                modalContent: 'WizardModal_modalContent__OifZs',
                wrapper: 'WizardModal_wrapper__2_8ft',
                title: 'WizardModal_title__fPGJr',
                text: 'WizardModal_text__ntEON',
                button: 'WizardModal_button__e8bCS',
                mainContainer: 'WizardModal_mainContainer__fbjpt',
                carousel: 'WizardModal_carousel__uVcYS',
                scrollContainer: 'WizardModal_scrollContainer__tDrP6',
                important: 'WizardModal_important__7uymQ',
                tabCarousel: 'WizardModal_tabCarousel__AclIV',
                tabTitle: 'WizardModal_tabTitle__7ZAaF',
                filter: 'WizardModal_filter__o2wpn',
                filter_selected: 'WizardModal_filter_selected__qdlMf',
                item: 'WizardModal_item__wUHVg',
            };
        },
        79418: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => A });
            var r = a(88800),
                l = a(65724),
                i = a(61013),
                o = a(53548);
            let s = (e) => {
                    let { style: t, forwardRef: a, context: l, ...i } = e,
                        o = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        s = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': o, style: { ...t }, ref: a, ...i });
                },
                n = (0, o.forwardRef)((e, t) => (0, r.jsx)(s, { forwardRef: t, ...e }));
            var d = a(16434),
                _ = a.n(d);
            let c = (e) => {
                    let { style: t, forwardRef: a, withFooter: i, withHeader: o, withForceScroll: s, ...n } = e;
                    return (0, r.jsx)('div', {
                        className: (0, l.$)(_().scroller, { [_().scroller_withFooter]: i, [_().scroller_withHeader]: o, [_().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: a,
                        ...n,
                        tabIndex: -1,
                    });
                },
                u = (0, o.forwardRef)((e, t) => (0, r.jsx)(c, { forwardRef: t, ...e }));
            var m = a(55482),
                h = a(75151);
            let g = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: a,
                            onRangeHandler: l,
                            debounceDurationInMs: i = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: d,
                            virtuosoRef: _,
                            ...c
                        } = e,
                        [u, g] = (0, o.useState)(null),
                        A = (0, o.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == l || l(e), n.length > 0 && g(e), t && a)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < r; e++) a(e);
                                    }
                                }, i),
                            [i, l, t, a, n],
                        );
                    (0, o.useEffect)(() => {
                        n.length > 0 && u && A(u);
                    }, n);
                    let E = (0, o.useMemo)(() => {
                        if (d)
                            return (0, m.A)((e) => {
                                d(e);
                            }, i);
                    }, [d, i]);
                    return (0, r.jsx)(h.sN, { ref: _, rangeChanged: A, totalCount: s, endReached: E, ...c });
                },
                A = (e) => {
                    let {
                            className: t,
                            customComponents: a,
                            onGetDataByPage: s,
                            onGetDataByRange: d,
                            itemClassName: c,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: A = 700,
                            pageSize: E = 20,
                            totalCount: C,
                            totalRequests: S,
                            debounceDurationInMs: R,
                            initialItemCount: f,
                            minInitialItemCount: v = 20,
                            handleRef: w,
                            alwaysShowScrollbar: L = !1,
                            testId: x,
                            isMobileLayout: I = !1,
                            shouldTriggerRangeChangedOn: M,
                            ...N
                        } = e,
                        [p, z] = (0, o.useState)(!1),
                        O = (0, o.useMemo)(
                            () =>
                                (0, i.A)((e) => {
                                    z(e);
                                }, 100),
                            [],
                        ),
                        D = (0, o.useMemo)(() => {
                            var e, t;
                            return I
                                ? {
                                      Scroller: u,
                                      List: null != (e = null == a ? void 0 : a.List) ? e : n,
                                      Item: null == a ? void 0 : a.Item,
                                      ScrollSeekPlaceholder: null == a ? void 0 : a.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: u,
                                      List: null != (t = null == a ? void 0 : a.List) ? t : n,
                                      Item: null == a ? void 0 : a.Item,
                                      Header: null == a ? void 0 : a.Header,
                                      Footer: null == a ? void 0 : a.Footer,
                                      ScrollSeekPlaceholder: null == a ? void 0 : a.ScrollSeekPlaceholder,
                                  };
                        }, [a, S, I]),
                        T = f ? Math.min(f, v) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, l.$)(_().root, { [_().root_scrolling]: p || L, [_().root_notScrolling]: !p && !L }, t),
                        'data-test-id': x,
                        children: [
                            I && (null == a ? void 0 : a.Header) && a.Header(),
                            (0, r.jsx)(g, {
                                overscan: A,
                                components: D,
                                listClassName: h,
                                itemClassName: c,
                                isScrolling: O,
                                itemContent: m,
                                scrollerRef: w,
                                totalCount: C,
                                pageSize: E,
                                onPageHandler: s,
                                onRangeHandler: d,
                                debounceDurationInMs: R,
                                initialItemCount: T,
                                shouldTriggerRangeChangedOn: M,
                                ...N,
                            }),
                            I && (null == a ? void 0 : a.Footer) && a.Footer(),
                        ],
                    });
                };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                4700, 7908, 1147, 4555, 2691, 5038, 7065, 3248, 1191, 7072, 505, 7750, 527, 4863, 9232, 3377, 9610, 2218, 1825, 893, 6252, 727, 8655, 5696, 6706, 4771,
                1311, 5201, 3075, 8832, 6904, 4495, 2058, 3578, 8628, 4827, 8283, 1800, 5151, 7746, 1223, 1848, 9907, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934,
                2470, 7670, 4441, 9337, 2088, 79, 818, 7053, 4322, 7934, 1372, 812, 6820, 9473, 1401, 2816, 4394, 5772, 763, 2670, 7358,
            ],
            () => e((e.s = 10530)),
        ),
            (_N_E = e.O()));
    },
]);
