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
                d = a(88969),
                n = a(87999),
                _ = a(76903),
                c = a(17392),
                u = a(46312),
                m = a(29993),
                h = a(66719),
                A = a(29504),
                g = a(53779),
                C = a(25772),
                E = a(32596),
                S = a(20129),
                R = a(69630),
                v = a(98427),
                f = a(44230),
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
                    { contentScrollRef: i, setContentScrollRef: N } = (0, f.g)();
                ((0, o.useEffect)(() => () => e.landing.reset(), [e.landing]), (0, w.J)(e.landing.isResolved));
                let z = (0, g._)(e.landing),
                    b = (0, m.c)(() => {
                        if (e.landing.isLoaded) return e.landing.getSkeleton({ id: u.p.KIDS, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 });
                    });
                return (
                    e.landing.isNeededToLoad && (0, o.use)(e.landing.getSkeleton({ id: u.p.KIDS, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 })),
                    (0, r.jsxs)(_.a, {
                        pageId: n.AppScreen.Kids,
                        pageIdForFrom: v.b.KIDS,
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
                                            children: (0, r.jsx)(A.DZ, { variant: 'h1', weight: 'bold', size: 'xl', children: (0, r.jsx)(d.A, { id: 'kids.for-kids' }) }),
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
                                                children: (0, r.jsx)(C.E, {
                                                    landing: e.landing,
                                                    errorComponent: (0, r.jsx)(E.SomethingWentWrong, { className: p().error, withBackwardControl: !1 }),
                                                }),
                                            }),
                                            (0, r.jsx)(I.A, { children: (0, r.jsx)(x.w, { className: p().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)(S.p, { onFinishSuccess: b }),
                        ],
                    })
                );
            });
        },
        20129: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => y });
            var r = a(88800),
                l = a(65724),
                i = a(84961),
                o = a(53548),
                s = a(2058),
                d = a(88969),
                n = a(17392),
                _ = a(50408),
                c = a(96817),
                u = a(11372),
                m = a(98225),
                h = a(29504),
                A = a(32353),
                g = a(29595),
                C = a(74965),
                E = a(51318),
                S = a(17071),
                R = a(38860),
                v = a(72288),
                f = a(27506),
                w = a(74773),
                L = a(66943),
                x = a(94058),
                I = a(37770),
                M = a(87366),
                N = a(76099),
                p = a(79418),
                z = a(62414),
                b = a(29832),
                O = a(52300),
                D = a(7555),
                T = a(81877),
                j = a(60978),
                W = a(5818),
                k = a.n(W);
            let P = (0, i.PA)((e) => {
                let { className: t, artist: a } = e,
                    i = (0, z.D)(),
                    {
                        wizard: { toggleArtistLike: s, isArtistLiked: d },
                    } = (0, v.g)(),
                    { id: _, name: u, coverUri: m } = a,
                    A = (0, o.useCallback)(() => {
                        s(_);
                    }, [s, _]),
                    g = d(_),
                    C = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(D.t, {
                                className: k().cover,
                                radius: 'round',
                                'data-test-id': n.e8.wizard.ARTIST_CARD,
                                children: (0, r.jsxs)(c.$, {
                                    radius: 'round',
                                    className: k().coverBlock,
                                    variant: 'default',
                                    onClick: A,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': g,
                                    'aria-label': u,
                                    'data-test-id': n.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, r.jsx)(T.B, { className: k().image, src: m || j.A.src, fit: 'cover', alt: u, withAvatarReplace: !!m, 'aria-hidden': !0 }),
                                        (0, r.jsx)('div', {
                                            className: (0, l.$)(k().like),
                                            children: (0, r.jsx)(O.I, { variant: 'likedVariant', size: 's', className: k().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [g, m, u, A],
                    );
                return (0, r.jsx)(b.MN, {
                    ref: i,
                    className: (0, l.$)(k().root, { [k().root_selected]: g }, t),
                    textPosition: 'center',
                    title: (0, r.jsx)(h.HL, {
                        'aria-hidden': !0,
                        className: k().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': n.e8.wizard.ARTIST_CARD_NAME,
                        children: u,
                    }),
                    view: C,
                    'data-test-id': n.Kq.artist.ARTIST_ITEM,
                });
            });
            var G = a(63442),
                F = a.n(G);
            let K = { [A.u.Desktop]: { start: 40, end: 40 }, [A.u.Mobile]: { start: 40, end: 40 } },
                y = (0, i.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: a } = (0, s.A)(),
                        {
                            wizard: i,
                            settings: { isMobile: A, isWindowsApplication: z, isLinuxApplication: b },
                            user: O,
                        } = (0, v.g)(),
                        { notify: D } = (0, C.l)(),
                        T = (0, R.z)(),
                        [j, W] = (0, _.d)(),
                        k = (0, m.zb)(0),
                        G = (0, o.useMemo)(
                            () => (e) => {
                                var t;
                                if (!k.onTabChange || e === k.value) return;
                                k.onTabChange(e);
                                let a = null == (t = i.genres[e]) ? void 0 : t.id;
                                (i.setFilter(a), null == j || j.scrollTo({ top: 0 }));
                            },
                            [i, k, j],
                        ),
                        y = (0, o.useMemo)(() => {
                            switch (i.selectedArtistsQuantity) {
                                case 0:
                                    return a({ id: 'wizard.button-tune' });
                                case 1:
                                    return a({ id: 'wizard.button-little-more' });
                                case 2:
                                    return a({ id: 'wizard.button-one-more' });
                                default:
                                    return a({ id: 'wizard.button-done' });
                            }
                        }, [i.selectedArtistsQuantity, a]),
                        V = (0, o.useMemo)(
                            () =>
                                (0, r.jsx)(N.wI, {
                                    className: F().tabCarousel,
                                    ...k,
                                    onTabChange: G,
                                    isShimmerVisible: i.loadingState === w.G.PENDING,
                                    shimmer: (0, r.jsx)(N.zr, { isActive: !0, className: F().tabCarousel, shimmerClassName: F().tabShimmer, count: A ? 2 : 3 }),
                                    children: i.genres.map((e, t) =>
                                        (0, r.jsx)(
                                            M.o,
                                            {
                                                className: (0, l.$)(F().filter, { [F().filter_selected]: t === k.value }),
                                                titleClassName: F().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [i.genres, k, G, i.loadingState, A],
                        ),
                        H = (0, o.useCallback)(() => {
                            i.loadArtists(60);
                        }, [i]);
                    (0, o.useEffect)(() => {
                        i.filter && H();
                    }, [i.filter, H]);
                    let B = (0, o.useCallback)(async () => {
                        (await i.loadGenres(), H());
                    }, [i, H]);
                    ((0, o.useEffect)(() => {
                        i.modal.isOpened && B();
                    }, [i, i.modal.isOpened, B]),
                        (0, o.useEffect)(() => {
                            i.loadingState === w.G.REJECT &&
                                (i.modal.close(), D((0, r.jsx)(L.h, { error: a({ id: 'error-messages.error-load-wizard' }) }), { containerId: g.u.ERROR }));
                        }, [i, i.loadGenres, i.loadingState, a, D]));
                    let U = (0, o.useMemo)(
                            () =>
                                (0, r.jsx)(h.DZ, {
                                    className: F().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': n.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, r.jsx)(d.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        Z = (0, o.useCallback)(async () => {
                            (i.canFinish ? (await i.finish()) === f.F.OK && (await O.getSettings(), await (null == t ? void 0 : t())) : i.loadArtists(), i.modal.close());
                        }, [t, O, i]);
                    return (
                        (0, o.useEffect)(
                            () => (
                                null == T ||
                                    T.addShortcutsListener(S.M.MAIN, E.l.CLOSE, () => {
                                        i.modal.isOpened && Z();
                                    }),
                                () => {
                                    null == T || T.removeShortcutsListener(S.M.MAIN, E.l.CLOSE);
                                }
                            ),
                            [Z, i.modal.isOpened, T],
                        ),
                        (0, r.jsxs)(u.a, {
                            className: (0, l.$)(F().root, { [F().root_withCustomControls]: z || b }),
                            headerClassName: F().modalHeader,
                            contentClassName: F().modalContent,
                            open: i.modal.isOpened,
                            onOpenChange: i.modal.onOpenChange,
                            onClose: Z,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: a({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: n.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': n.e8.wizard.WIZARD_MODAL,
                            header: A && U,
                            escapeKey: !1,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: F().wrapper,
                                    children: [
                                        !A && U,
                                        (0, r.jsx)(h.HL, {
                                            className: F().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': n.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, r.jsx)(d.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, r.jsx)(c.$, {
                                            className: F().button,
                                            size: A ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: Z,
                                            disabled: !i.canFinish,
                                            'data-test-id': n.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, r.jsx)(h.HL, { variant: 'div', size: 'm', weight: 'medium', children: y }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)('div', {
                                    className: F().mainContainer,
                                    children: [
                                        (0, r.jsx)(x.F, { className: F().carousel, carouselElement: V, scrollPadding: K }),
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
                                            endReached: H,
                                            listClassName: F().content,
                                            itemClassName: F().item,
                                            pageSize: 60,
                                            handleRef: W,
                                            'data-test-id': n.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
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
                tabShimmer: 'WizardModal_tabShimmer__36Qc7',
                tabTitle: 'WizardModal_tabTitle__7ZAaF',
                filter: 'WizardModal_filter__o2wpn',
                filter_selected: 'WizardModal_filter_selected__qdlMf',
                item: 'WizardModal_item__wUHVg',
            };
        },
        79418: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => g });
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
                d = (0, o.forwardRef)((e, t) => (0, r.jsx)(s, { forwardRef: t, ...e }));
            var n = a(16434),
                _ = a.n(n);
            let c = (e) => {
                    let { style: t, forwardRef: a, withFooter: i, withHeader: o, withForceScroll: s, ...d } = e;
                    return (0, r.jsx)('div', {
                        className: (0, l.$)(_().scroller, { [_().scroller_withFooter]: i, [_().scroller_withHeader]: o, [_().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: a,
                        ...d,
                        tabIndex: -1,
                    });
                },
                u = (0, o.forwardRef)((e, t) => (0, r.jsx)(c, { forwardRef: t, ...e }));
            var m = a(55482),
                h = a(75151);
            let A = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: a,
                            onRangeHandler: l,
                            debounceDurationInMs: i = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: d = [],
                            endReached: n,
                            virtuosoRef: _,
                            ...c
                        } = e,
                        [u, A] = (0, o.useState)(null),
                        g = (0, o.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == l || l(e), d.length > 0 && A(e), t && a)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < r; e++) a(e);
                                    }
                                }, i),
                            [i, l, t, a, d],
                        );
                    (0, o.useEffect)(() => {
                        d.length > 0 && u && g(u);
                    }, d);
                    let C = (0, o.useMemo)(() => {
                        if (n)
                            return (0, m.A)((e) => {
                                n(e);
                            }, i);
                    }, [n, i]);
                    return (0, r.jsx)(h.sN, { ref: _, rangeChanged: g, totalCount: s, endReached: C, ...c });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: a,
                            onGetDataByPage: s,
                            onGetDataByRange: n,
                            itemClassName: c,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: g = 700,
                            pageSize: C = 20,
                            totalCount: E,
                            totalRequests: S,
                            debounceDurationInMs: R,
                            initialItemCount: v,
                            minInitialItemCount: f = 20,
                            handleRef: w,
                            alwaysShowScrollbar: L = !1,
                            testId: x,
                            isMobileLayout: I = !1,
                            shouldTriggerRangeChangedOn: M,
                            ...N
                        } = e,
                        [p, z] = (0, o.useState)(!1),
                        b = (0, o.useMemo)(
                            () =>
                                (0, i.A)((e) => {
                                    z(e);
                                }, 100),
                            [],
                        ),
                        O = (0, o.useMemo)(() => {
                            var e, t;
                            return I
                                ? {
                                      Scroller: u,
                                      List: null != (e = null == a ? void 0 : a.List) ? e : d,
                                      Item: null == a ? void 0 : a.Item,
                                      ScrollSeekPlaceholder: null == a ? void 0 : a.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: u,
                                      List: null != (t = null == a ? void 0 : a.List) ? t : d,
                                      Item: null == a ? void 0 : a.Item,
                                      Header: null == a ? void 0 : a.Header,
                                      Footer: null == a ? void 0 : a.Footer,
                                      ScrollSeekPlaceholder: null == a ? void 0 : a.ScrollSeekPlaceholder,
                                  };
                        }, [a, S, I]),
                        D = v ? Math.min(v, f) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, l.$)(_().root, { [_().root_scrolling]: p || L, [_().root_notScrolling]: !p && !L }, t),
                        'data-test-id': x,
                        children: [
                            I && (null == a ? void 0 : a.Header) && a.Header(),
                            (0, r.jsx)(A, {
                                overscan: g,
                                components: O,
                                listClassName: h,
                                itemClassName: c,
                                isScrolling: b,
                                itemContent: m,
                                scrollerRef: w,
                                totalCount: E,
                                pageSize: C,
                                onPageHandler: s,
                                onRangeHandler: n,
                                debounceDurationInMs: R,
                                initialItemCount: D,
                                shouldTriggerRangeChangedOn: M,
                                ...N,
                            }),
                            I && (null == a ? void 0 : a.Footer) && a.Footer(),
                        ],
                    });
                };
        },
        80141: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 18509));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7437, 4201, 4814, 3469, 918, 1833, 9079, 1191, 1041, 8194, 917, 4863, 4604, 9232, 3377, 2951, 1445, 1138, 893, 6252, 9192, 727, 8655, 5696, 6706, 4771,
                1311, 5201, 3075, 8832, 6904, 4495, 2058, 3578, 8628, 4827, 8283, 1800, 5151, 7746, 1223, 1848, 9907, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934,
                2470, 7670, 4441, 9337, 2088, 79, 818, 7053, 4322, 7934, 1372, 812, 6820, 9473, 1986, 7555, 9719, 763, 2670, 7358,
            ],
            () => e((e.s = 80141)),
        ),
            (_N_E = e.O()));
    },
]);
