(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9556],
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
        20129: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => V });
            var r = a(88800),
                l = a(65724),
                i = a(84961),
                o = a(53548),
                s = a(2058),
                n = a(88969),
                d = a(17392),
                c = a(50408),
                _ = a(96817),
                u = a(11372),
                m = a(98225),
                h = a(29504),
                C = a(32353),
                g = a(29595),
                A = a(74965),
                E = a(51318),
                N = a(17071),
                S = a(38860),
                M = a(72288),
                v = a(27506),
                R = a(74773),
                w = a(66943),
                f = a(94058),
                L = a(37770),
                I = a(87366),
                x = a(76099),
                p = a(79418),
                O = a(62414),
                b = a(29832),
                z = a(52300),
                T = a(7555),
                j = a(81877),
                D = a(60978),
                W = a(5818),
                k = a.n(W);
            let P = (0, i.PA)((e) => {
                let { className: t, artist: a } = e,
                    i = (0, O.D)(),
                    {
                        wizard: { toggleArtistLike: s, isArtistLiked: n },
                    } = (0, M.g)(),
                    { id: c, name: u, coverUri: m } = a,
                    C = (0, o.useCallback)(() => {
                        s(c);
                    }, [s, c]),
                    g = n(c),
                    A = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(T.t, {
                                className: k().cover,
                                radius: 'round',
                                'data-test-id': d.e8.wizard.ARTIST_CARD,
                                children: (0, r.jsxs)(_.$, {
                                    radius: 'round',
                                    className: k().coverBlock,
                                    variant: 'default',
                                    onClick: C,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': g,
                                    'aria-label': u,
                                    'data-test-id': d.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, r.jsx)(j.B, { className: k().image, src: m || D.A.src, fit: 'cover', alt: u, withAvatarReplace: !!m, 'aria-hidden': !0 }),
                                        (0, r.jsx)('div', {
                                            className: (0, l.$)(k().like),
                                            children: (0, r.jsx)(z.I, { variant: 'likedVariant', size: 's', className: k().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [g, m, u, C],
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
                        'data-test-id': d.e8.wizard.ARTIST_CARD_NAME,
                        children: u,
                    }),
                    view: A,
                    'data-test-id': d.Kq.artist.ARTIST_ITEM,
                });
            });
            var G = a(63442),
                F = a.n(G);
            let y = { [C.u.Desktop]: { start: 40, end: 40 }, [C.u.Mobile]: { start: 40, end: 40 } },
                V = (0, i.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: a } = (0, s.A)(),
                        {
                            wizard: i,
                            settings: { isMobile: C, isWindowsApplication: O, isLinuxApplication: b },
                            user: z,
                        } = (0, M.g)(),
                        { notify: T } = (0, A.l)(),
                        j = (0, S.z)(),
                        [D, W] = (0, c.d)(),
                        k = (0, m.zb)(0),
                        G = (0, o.useMemo)(
                            () => (e) => {
                                var t;
                                if (!k.onTabChange || e === k.value) return;
                                k.onTabChange(e);
                                let a = null == (t = i.genres[e]) ? void 0 : t.id;
                                (i.setFilter(a), null == D || D.scrollTo({ top: 0 }));
                            },
                            [i, k, D],
                        ),
                        V = (0, o.useMemo)(() => {
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
                        H = (0, o.useMemo)(
                            () =>
                                (0, r.jsx)(x.wI, {
                                    className: F().tabCarousel,
                                    ...k,
                                    onTabChange: G,
                                    isShimmerVisible: i.loadingState === R.G.PENDING,
                                    shimmer: (0, r.jsx)(x.zr, { isActive: !0, className: F().tabCarousel, shimmerClassName: F().tabShimmer, count: C ? 2 : 3 }),
                                    children: i.genres.map((e, t) =>
                                        (0, r.jsx)(
                                            I.o,
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
                            [i.genres, k, G, i.loadingState, C],
                        ),
                        U = (0, o.useCallback)(() => {
                            i.loadArtists(60);
                        }, [i]);
                    (0, o.useEffect)(() => {
                        i.filter && U();
                    }, [i.filter, U]);
                    let B = (0, o.useCallback)(async () => {
                        (await i.loadGenres(), U());
                    }, [i, U]);
                    ((0, o.useEffect)(() => {
                        i.modal.isOpened && B();
                    }, [i, i.modal.isOpened, B]),
                        (0, o.useEffect)(() => {
                            i.loadingState === R.G.REJECT &&
                                (i.modal.close(), T((0, r.jsx)(w.h, { error: a({ id: 'error-messages.error-load-wizard' }) }), { containerId: g.u.ERROR }));
                        }, [i, i.loadGenres, i.loadingState, a, T]));
                    let K = (0, o.useMemo)(
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
                        Z = (0, o.useCallback)(async () => {
                            (i.canFinish ? (await i.finish()) === v.F.OK && (await z.getSettings(), await (null == t ? void 0 : t())) : i.loadArtists(), i.modal.close());
                        }, [t, z, i]);
                    return (
                        (0, o.useEffect)(
                            () => (
                                null == j ||
                                    j.addShortcutsListener(N.M.MAIN, E.l.CLOSE, () => {
                                        i.modal.isOpened && Z();
                                    }),
                                () => {
                                    null == j || j.removeShortcutsListener(N.M.MAIN, E.l.CLOSE);
                                }
                            ),
                            [Z, i.modal.isOpened, j],
                        ),
                        (0, r.jsxs)(u.a, {
                            className: (0, l.$)(F().root, { [F().root_withCustomControls]: O || b }),
                            headerClassName: F().modalHeader,
                            contentClassName: F().modalContent,
                            open: i.modal.isOpened,
                            onOpenChange: i.modal.onOpenChange,
                            onClose: Z,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: a({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: d.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': d.e8.wizard.WIZARD_MODAL,
                            header: C && K,
                            escapeKey: !1,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: F().wrapper,
                                    children: [
                                        !C && K,
                                        (0, r.jsx)(h.HL, {
                                            className: F().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, r.jsx)(n.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, r.jsx)(_.$, {
                                            className: F().button,
                                            size: C ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: Z,
                                            disabled: !i.canFinish,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, r.jsx)(h.HL, { variant: 'div', size: 'm', weight: 'medium', children: V }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)('div', {
                                    className: F().mainContainer,
                                    children: [
                                        (0, r.jsx)(f.F, { className: F().carousel, carouselElement: H, scrollPadding: y }),
                                        (0, r.jsx)(p.$, {
                                            withFooter: !1,
                                            className: (0, l.$)(F().scrollContainer, F().important),
                                            itemContentCallback: (e) => {
                                                let t = i.artistsByGenre[e];
                                                if (!t) {
                                                    let e = a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.artist' }) });
                                                    return (0, r.jsx)(L.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, r.jsx)(P, { artist: t }, t.id);
                                            },
                                            data: i.artistsByGenre,
                                            endReached: U,
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
        45441: (e, t, a) => {
            'use strict';
            a.d(t, { NonMusicPage: () => b });
            var r = a(88800),
                l = a(65724),
                i = a(84961),
                o = a(53548),
                s = a(2058),
                n = a(88969),
                d = a(87999),
                c = a(76903),
                _ = a(17392),
                u = a(46312),
                m = a(29993),
                h = a(50408),
                C = a(66719),
                g = a(29504),
                A = a(53779),
                E = a(25772),
                N = a(32596),
                S = a(20129),
                M = a(69630),
                v = a(98427),
                R = a(44230),
                w = a(37670),
                f = a(72288),
                L = a(86790),
                I = a(60266),
                x = a(93317),
                p = a(79895),
                O = a.n(p);
            let b = (0, i.PA)(() => {
                let { nonMusic: e, user: t } = (0, f.g)(),
                    { formatMessage: a } = (0, s.A)(),
                    { contentScrollRef: i, setContentScrollRef: p } = (0, R.g)(),
                    [b, z] = (0, h.d)();
                ((0, o.useEffect)(() => () => e.landing.reset(), [e.landing]), (0, w.J)(e.landing.isResolved));
                let T = (0, A._)(e.landing),
                    j = (0, m.c)(() => {
                        if (e.landing.isLoaded) return e.landing.getSkeleton({ id: u.p.NON_MUSIC, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 });
                    });
                return (
                    e.landing.isNeededToLoad && (0, o.use)(e.landing.getSkeleton({ id: u.p.NON_MUSIC, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 })),
                    (0, r.jsxs)(c.a, {
                        pageId: d.AppScreen.NonmusicLandingScreen,
                        pageIdForFrom: v.b.NON_MUSIC,
                        children: [
                            (0, r.jsxs)(M.h, {
                                scrollElement: i,
                                outerTitle: a({ id: 'entity-names.podcasts-and-books' }),
                                headerElement: b,
                                shouldHideHeader: e.landing.hasUpperBlocks,
                                children: [
                                    (0, r.jsx)(x.Y, {
                                        variant: x.V.TEXT,
                                        showControls: !1,
                                        disableStickyVariant: !0,
                                        children: (0, r.jsx)('div', {
                                            className: O().header,
                                            children: (0, r.jsx)(g.DZ, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                children: (0, r.jsx)(n.A, { id: 'entity-names.podcasts-and-books' }),
                                            }),
                                        }),
                                    }),
                                    (0, r.jsxs)(C.N, {
                                        className: O().root,
                                        containerClassName: O().content,
                                        ref: p,
                                        'data-test-id': _.Xk.nonMusic.NON_MUSIC_PAGE,
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: (0, l.$)(O().landing, { [O().landing_onlyWizard]: T }),
                                                children: (0, r.jsx)(E.E, {
                                                    landing: e.landing,
                                                    headerConcealerComponent: (0, r.jsx)('div', { ref: z }),
                                                    errorComponent: (0, r.jsx)(N.SomethingWentWrong, { className: O().error, withBackwardControl: !1 }),
                                                }),
                                            }),
                                            (0, r.jsx)(I.A, { children: (0, r.jsx)(L.w, { className: O().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)(S.p, { onFinishSuccess: j }),
                        ],
                    })
                );
            });
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
                n = (0, o.forwardRef)((e, t) => (0, r.jsx)(s, { forwardRef: t, ...e }));
            var d = a(16434),
                c = a.n(d);
            let _ = (e) => {
                    let { style: t, forwardRef: a, withFooter: i, withHeader: o, withForceScroll: s, ...n } = e;
                    return (0, r.jsx)('div', {
                        className: (0, l.$)(c().scroller, { [c().scroller_withFooter]: i, [c().scroller_withHeader]: o, [c().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: a,
                        ...n,
                        tabIndex: -1,
                    });
                },
                u = (0, o.forwardRef)((e, t) => (0, r.jsx)(_, { forwardRef: t, ...e }));
            var m = a(55482),
                h = a(75151);
            let C = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: a,
                            onRangeHandler: l,
                            debounceDurationInMs: i = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: d,
                            virtuosoRef: c,
                            ..._
                        } = e,
                        [u, C] = (0, o.useState)(null),
                        g = (0, o.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == l || l(e), n.length > 0 && C(e), t && a)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < r; e++) a(e);
                                    }
                                }, i),
                            [i, l, t, a, n],
                        );
                    (0, o.useEffect)(() => {
                        n.length > 0 && u && g(u);
                    }, n);
                    let A = (0, o.useMemo)(() => {
                        if (d)
                            return (0, m.A)((e) => {
                                d(e);
                            }, i);
                    }, [d, i]);
                    return (0, r.jsx)(h.sN, { ref: c, rangeChanged: g, totalCount: s, endReached: A, ..._ });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: a,
                            onGetDataByPage: s,
                            onGetDataByRange: d,
                            itemClassName: _,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: g = 700,
                            pageSize: A = 20,
                            totalCount: E,
                            totalRequests: N,
                            debounceDurationInMs: S,
                            initialItemCount: M,
                            minInitialItemCount: v = 20,
                            handleRef: R,
                            alwaysShowScrollbar: w = !1,
                            testId: f,
                            isMobileLayout: L = !1,
                            shouldTriggerRangeChangedOn: I,
                            ...x
                        } = e,
                        [p, O] = (0, o.useState)(!1),
                        b = (0, o.useMemo)(
                            () =>
                                (0, i.A)((e) => {
                                    O(e);
                                }, 100),
                            [],
                        ),
                        z = (0, o.useMemo)(() => {
                            var e, t;
                            return L
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
                        }, [a, N, L]),
                        T = M ? Math.min(M, v) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, l.$)(c().root, { [c().root_scrolling]: p || w, [c().root_notScrolling]: !p && !w }, t),
                        'data-test-id': f,
                        children: [
                            L && (null == a ? void 0 : a.Header) && a.Header(),
                            (0, r.jsx)(C, {
                                overscan: g,
                                components: z,
                                listClassName: h,
                                itemClassName: _,
                                isScrolling: b,
                                itemContent: m,
                                scrollerRef: R,
                                totalCount: E,
                                pageSize: A,
                                onPageHandler: s,
                                onRangeHandler: d,
                                debounceDurationInMs: S,
                                initialItemCount: T,
                                shouldTriggerRangeChangedOn: I,
                                ...x,
                            }),
                            L && (null == a ? void 0 : a.Footer) && a.Footer(),
                        ],
                    });
                };
        },
        79895: (e) => {
            e.exports = {
                root: 'NonMusicPage_root__IPKkH',
                content: 'NonMusicPage_content__7_TYy',
                header: 'NonMusicPage_header__dijgk',
                landing: 'NonMusicPage_landing__kGKTh',
                landing_onlyWizard: 'NonMusicPage_landing_onlyWizard__P9nN3',
                footer: 'NonMusicPage_footer__juz5v',
                error: 'NonMusicPage_error__oW0V3',
            };
        },
        92970: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 45441));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7437, 4201, 4814, 3469, 918, 1833, 9079, 1191, 1041, 8194, 917, 4863, 4604, 9232, 3377, 2951, 1445, 1138, 893, 6252, 9192, 727, 8655, 6966, 6706, 4771,
                1311, 5201, 3075, 8832, 6904, 4495, 2058, 3578, 8628, 4827, 8283, 1800, 5151, 7746, 1223, 1848, 9907, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934,
                2470, 7670, 4441, 9337, 2088, 79, 818, 7053, 4322, 7934, 1372, 812, 6820, 9473, 1986, 7555, 9719, 763, 2670, 7358,
            ],
            () => e((e.s = 92970)),
        ),
            (_N_E = e.O()));
    },
]);
