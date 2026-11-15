(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9940],
    {
        3515: (e) => {
            e.exports = { root: 'LocationDialogSearchField_root__eYUkc', searchInput: 'LocationDialogSearchField_searchInput__7O9xi' };
        },
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
        10799: (e) => {
            e.exports = {
                root: 'LocationSelector_root__ZHQJl',
                root_disabled: 'LocationSelector_root_disabled__pvwot',
                icon: 'LocationSelector_icon__4o_En',
                text: 'LocationSelector_text__ZgYJ0',
                shimmer: 'LocationSelector_shimmer__NKWIA',
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
        17071: (e, t, o) => {
            'use strict';
            o.d(t, { M: () => r });
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
        20129: (e, t, o) => {
            'use strict';
            o.d(t, { p: () => G });
            var r = o(88800),
                a = o(65724),
                n = o(84961),
                l = o(53548),
                i = o(2058),
                s = o(88969),
                c = o(17392),
                d = o(50408),
                u = o(96817),
                _ = o(11372),
                m = o(98225),
                h = o(29504),
                C = o(32353),
                p = o(29595),
                x = o(74965),
                b = o(51318),
                S = o(17071),
                T = o(38860),
                g = o(72288),
                j = o(27506),
                v = o(74773),
                L = o(66943),
                f = o(94058),
                E = o(37770),
                A = o(87366),
                I = o(76099),
                O = o(79418),
                N = o(62414),
                y = o(29832),
                R = o(52300),
                w = o(7555),
                D = o(81877),
                k = o(60978),
                M = o(5818),
                P = o.n(M);
            let z = (0, n.PA)((e) => {
                let { className: t, artist: o } = e,
                    n = (0, N.D)(),
                    {
                        wizard: { toggleArtistLike: i, isArtistLiked: s },
                    } = (0, g.g)(),
                    { id: d, name: _, coverUri: m } = o,
                    C = (0, l.useCallback)(() => {
                        i(d);
                    }, [i, d]),
                    p = s(d),
                    x = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(w.t, {
                                className: P().cover,
                                radius: 'round',
                                'data-test-id': c.e8.wizard.ARTIST_CARD,
                                children: (0, r.jsxs)(u.$, {
                                    radius: 'round',
                                    className: P().coverBlock,
                                    variant: 'default',
                                    onClick: C,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': p,
                                    'aria-label': _,
                                    'data-test-id': c.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, r.jsx)(D.B, { className: P().image, src: m || k.A.src, fit: 'cover', alt: _, withAvatarReplace: !!m, 'aria-hidden': !0 }),
                                        (0, r.jsx)('div', {
                                            className: (0, a.$)(P().like),
                                            children: (0, r.jsx)(R.I, { variant: 'likedVariant', size: 's', className: P().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [p, m, _, C],
                    );
                return (0, r.jsx)(y.MN, {
                    ref: n,
                    className: (0, a.$)(P().root, { [P().root_selected]: p }, t),
                    textPosition: 'center',
                    title: (0, r.jsx)(h.HL, {
                        'aria-hidden': !0,
                        className: P().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.e8.wizard.ARTIST_CARD_NAME,
                        children: _,
                    }),
                    view: x,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                });
            });
            var F = o(63442),
                W = o.n(F);
            let B = { [C.u.Desktop]: { start: 40, end: 40 }, [C.u.Mobile]: { start: 40, end: 40 } },
                G = (0, n.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: o } = (0, i.A)(),
                        {
                            wizard: n,
                            settings: { isMobile: C, isWindowsApplication: N, isLinuxApplication: y },
                            user: R,
                        } = (0, g.g)(),
                        { notify: w } = (0, x.l)(),
                        D = (0, T.z)(),
                        [k, M] = (0, d.d)(),
                        P = (0, l.useRef)(!1),
                        F = (0, m.zb)(0),
                        G = (0, l.useMemo)(
                            () => (e) => {
                                var t;
                                if (!F.onTabChange || e === F.value) return;
                                F.onTabChange(e);
                                let o = null == (t = n.genres[e]) ? void 0 : t.id;
                                (n.setFilter(o), null == k || k.scrollTo({ top: 0 }));
                            },
                            [n, F, k],
                        ),
                        H = (0, l.useMemo)(() => {
                            switch (n.remainingLikesToFinish) {
                                case 0:
                                    return o({ id: 'wizard.button-done' });
                                case 1:
                                    return o({ id: 'wizard.button-one-more' });
                                default:
                                    return 0 === n.selectedArtistsQuantity ? o({ id: 'wizard.button-tune' }) : o({ id: 'wizard.button-little-more' });
                            }
                        }, [n.remainingLikesToFinish, n.selectedArtistsQuantity, o]),
                        V = (0, l.useMemo)(
                            () =>
                                (0, r.jsx)(I.wI, {
                                    className: W().tabCarousel,
                                    ...F,
                                    onTabChange: G,
                                    isShimmerVisible: n.loadingState === v.G.PENDING,
                                    shimmer: (0, r.jsx)(I.zr, { isActive: !0, className: W().tabCarousel, count: C ? 2 : 3 }),
                                    children: n.genres.map((e, t) =>
                                        (0, r.jsx)(
                                            A.o,
                                            {
                                                className: (0, a.$)(W().filter, { [W().filter_selected]: t === F.value }),
                                                titleClassName: W().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [n.genres, F, G, n.loadingState, C],
                        ),
                        U = (0, l.useCallback)(() => {
                            n.loadArtists(60);
                        }, [n]);
                    (0, l.useEffect)(() => {
                        n.filter && U();
                    }, [n.filter, U]);
                    let Y = (0, l.useCallback)(async () => {
                        (await n.loadGenres(), U());
                    }, [n, U]);
                    ((0, l.useEffect)(() => {
                        n.modal.isOpened && Y();
                    }, [n, n.modal.isOpened, Y]),
                        (0, l.useEffect)(() => {
                            n.loadingState === v.G.REJECT &&
                                (n.modal.close(), w((0, r.jsx)(L.h, { error: o({ id: 'error-messages.error-load-wizard' }) }), { containerId: p.u.ERROR }));
                        }, [n, n.loadGenres, n.loadingState, o, w]));
                    let X = (0, l.useMemo)(
                            () =>
                                (0, r.jsx)(h.DZ, {
                                    className: W().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': c.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, r.jsx)(s.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        K = (0, l.useCallback)(async () => {
                            if (!P.current) {
                                P.current = !0;
                                try {
                                    ((await n.finish()) === j.F.OK && (await R.getSettings(), await (null == t ? void 0 : t())), n.modal.close());
                                } finally {
                                    P.current = !1;
                                }
                            }
                        }, [t, R, n]);
                    return (
                        (0, l.useEffect)(
                            () => (
                                null == D ||
                                    D.addShortcutsListener(S.M.MAIN, b.l.CLOSE, () => {
                                        n.modal.isOpened && K();
                                    }),
                                () => {
                                    null == D || D.removeShortcutsListener(S.M.MAIN, b.l.CLOSE);
                                }
                            ),
                            [K, n.modal.isOpened, D],
                        ),
                        (0, r.jsxs)(_.a, {
                            className: (0, a.$)(W().root, { [W().root_withCustomControls]: N || y }),
                            headerClassName: W().modalHeader,
                            contentClassName: W().modalContent,
                            open: n.modal.isOpened,
                            onOpenChange: n.modal.onOpenChange,
                            onClose: K,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: o({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: c.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': c.e8.wizard.WIZARD_MODAL,
                            header: C && X,
                            escapeKey: !1,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: W().wrapper,
                                    children: [
                                        !C && X,
                                        (0, r.jsx)(h.HL, {
                                            className: W().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, r.jsx)(s.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, r.jsx)(u.$, {
                                            className: W().button,
                                            size: C ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: K,
                                            disabled: !n.canFinish,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, r.jsx)(h.HL, { variant: 'div', size: 'm', weight: 'medium', children: H }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)('div', {
                                    className: W().mainContainer,
                                    children: [
                                        (0, r.jsx)(f.F, { className: W().carousel, carouselElement: V, scrollPadding: B }),
                                        (0, r.jsx)(O.$, {
                                            withFooter: !1,
                                            className: (0, a.$)(W().scrollContainer, W().important),
                                            itemContentCallback: (e) => {
                                                let t = n.artistsByGenre[e];
                                                if (!t) {
                                                    let e = o({ id: 'loading-messages.entity-is-loading' }, { entityName: o({ id: 'entity-names.artist' }) });
                                                    return (0, r.jsx)(E.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, r.jsx)(z, { artist: t }, t.id);
                                            },
                                            data: n.artistsByGenre,
                                            endReached: U,
                                            listClassName: W().content,
                                            itemClassName: W().item,
                                            pageSize: 60,
                                            handleRef: M,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        21927: (e) => {
            e.exports = {
                root: 'LocationDialogContent_root__BH0fV',
                emptyState: 'LocationDialogContent_emptyState__HKHWl',
                emptyStateTitle: 'LocationDialogContent_emptyStateTitle__OP1_t',
                emptyStateSubtitle: 'LocationDialogContent_emptyStateSubtitle__SRjAW',
            };
        },
        26570: (e) => {
            e.exports = {
                root: 'TopConcertsCarousel_root__opMbb',
                controls: 'TopConcertsCarousel_controls__c92PW',
                header: 'TopConcertsCarousel_header__3h3Zn',
                carousel: 'TopConcertsCarousel_carousel__uMke6',
                item: 'TopConcertsCarousel_item__fz8lR',
                important: 'TopConcertsCarousel_important__ZcT6Z',
            };
        },
        36139: (e) => {
            e.exports = {
                root: 'ConcertsPage_root__olabl',
                container: 'ConcertsPage_container__qS7xA',
                pageHeader: 'ConcertsPage_pageHeader__KyDH4',
                pageTitle: 'ConcertsPage_pageTitle__VViQV',
                locationSelector: 'ConcertsPage_locationSelector__izo2S',
                footer: 'ConcertsPage_footer__GYRwF',
            };
        },
        41617: (e, t, o) => {
            'use strict';
            o.d(t, { E: () => r });
            let r = (0, o(53548).createContext)({ offsetBlockPosY: void 0 });
        },
        47969: (e, t, o) => {
            'use strict';
            o.d(t, { L: () => c });
            var r = o(35802),
                a = o(79070),
                n = o(61013),
                l = o(53548);
            let i = (e) => {
                let { minColumnWidth: t, maxColumnWidth: o, containerWidth: r, totalCount: a, columnGap: n, minColumnCount: l, maxColumnCount: i } = e,
                    s = Math.max(1, Math.floor((r + n) / (t + n))),
                    c = Math.max(l, Math.floor((r + n) / ((o + t) * 0.5 + n)));
                for (let e = l; e <= s; e++) {
                    let a = (r - (e - 1) * n) / e;
                    if (a >= t && a <= o) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(a / (c = i ? Math.min(c, i) : c)), columnCount: c };
            };
            var s = o(10270);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: o,
                        rowGap: c,
                        columnGap: d,
                        minColumnWidth: u,
                        maxColumnWidth: _,
                        minColumnCount: m,
                        maxColumnCount: h,
                        containerRef: C,
                    } = e,
                    { rowCount: p, columnCount: x } = ((e) => {
                        let { containerRef: t, minColumnCount: o, maxColumnWidth: r, minColumnWidth: a, totalCount: s, columnGap: c, maxColumnCount: d } = e,
                            [u, _] = (0, l.useState)({ rowCount: 0, columnCount: 0 }),
                            m = (0, l.useRef)(null),
                            h = (0, l.useMemo)(
                                () =>
                                    (0, n.A)(
                                        (e) => {
                                            _(
                                                i({
                                                    minColumnWidth: a,
                                                    maxColumnWidth: r,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: s,
                                                    columnGap: c,
                                                    minColumnCount: o,
                                                    maxColumnCount: d,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, d, r, o, a, s],
                            );
                        return (
                            (0, l.useLayoutEffect)(
                                () => (
                                    m.current && m.current.disconnect(),
                                    (m.current = new ResizeObserver((e) => {
                                        e.forEach(h);
                                    })),
                                    t &&
                                        (_(
                                            i({
                                                minColumnWidth: a,
                                                maxColumnWidth: r,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: s,
                                                columnGap: c,
                                                minColumnCount: o,
                                                maxColumnCount: d,
                                            }),
                                        ),
                                        m.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = m.current) || e.disconnect();
                                    }
                                ),
                                [c, t, h, d, r, o, a, s],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: m, maxColumnWidth: _, minColumnWidth: u, maxColumnCount: h, containerRef: C }),
                    { virtualizer: b, resizeObserver: S } = (0, s.r)({ count: p, getEstimateSize: o, gap: c, containerRef: C }),
                    T = (0, r.A)(
                        Array.from({ length: t }, (e, t) => t),
                        x,
                    ),
                    g = (0, a.L)(() => {
                        var e, t;
                        if (!b.range) return null;
                        let o = null == (e = T[b.range.startIndex]) ? void 0 : e.at(0),
                            r = null == (t = T[b.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== o && void 0 !== r ? { startIndex: o, endIndex: r } : null;
                    });
                return { virtualizer: b, rowResizeObserver: S, indices: T, columnCount: x, visibleRange: g };
            };
        },
        51318: (e, t, o) => {
            'use strict';
            o.d(t, { l: () => r });
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
        51516: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        52499: (e, t, o) => {
            'use strict';
            (o.r(t), o.d(t, { default: () => eV }));
            var r = o(88800),
                a = o(53548),
                n = o.t(a, 2),
                l = o(84961),
                i = o(2058),
                s = o(88969),
                c = o(58390),
                d = o(87999),
                u = o(54721),
                _ = o(89009),
                m = o(37523),
                h = o(7833),
                C = o(76903),
                p = o(17392),
                x = o(46312),
                b = o(29993),
                S = o(50408),
                T = o(66719),
                g = o(29504),
                j = o(49784),
                v = o(47969),
                L = o(53360),
                f = o(38371),
                E = o(36930),
                A = o(72288),
                I = o(18486),
                O = o(55778),
                N = o.n(O);
            let y = (0, l.PA)(() => {
                let e = (0, a.useId)(),
                    { concerts: t } = (0, A.g)(),
                    { formatMessage: o } = (0, i.A)(),
                    [n, l] = (0, S.d)();
                (0, j.W)({ enabled: t.isResolved });
                let s = (0, b.c)(() => {
                        var e;
                        return !t.isShimmerVisible && (null == (e = t.feedConcerts) ? void 0 : e.length) ? t.feedConcerts.length : 50;
                    }),
                    {
                        virtualizer: c,
                        rowResizeObserver: u,
                        columnCount: _,
                        indices: m,
                    } = (0, v.L)({
                        count: s(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: n,
                    }),
                    C = { '--feed-concerts-height': ''.concat(c.getTotalSize(), 'px'), '--feed-concerts-column-count': _ },
                    x = (0, a.useCallback)(
                        (e) => {
                            var o;
                            let a = null == (o = t.feedConcerts) ? void 0 : o[e];
                            return !a || t.isShimmerVisible
                                ? (0, r.jsx)(E.L, { isActive: t.isShimmerActive })
                                : (0, r.jsx)(h.B, {
                                      objectType: d.DomainObjectType.Concert,
                                      objectId: a.id,
                                      objectPosX: (e % _) + 1,
                                      objectPosY: Math.floor(e / _) + 1,
                                      children: (0, r.jsx)(f.Q, { concert: a }),
                                  });
                        },
                        [_, t.feedConcerts, t.isShimmerActive, t.isShimmerVisible],
                    );
                return (0, r.jsxs)('div', {
                    className: N().root,
                    'data-test-id': p.e8.concerts.CONCERTS_FEED,
                    children: [
                        (0, r.jsx)(I.T, { className: N().header, labeledForId: e, title: o({ id: 'concerts.all-concerts' }), headingVariant: 'h2' }),
                        (0, r.jsx)('div', {
                            'aria-labelledby': e,
                            ref: l,
                            style: C,
                            className: N().container,
                            children: c
                                .getVirtualItems()
                                .map((e) =>
                                    (0, r.jsx)(
                                        L.U,
                                        {
                                            className: N().row,
                                            columnClassName: N().column,
                                            virtualItem: e,
                                            resizeObserver: u,
                                            indices: m,
                                            renderItemByIndex: x,
                                            scrollMargin: c.options.scrollMargin,
                                        },
                                        e.key,
                                    ),
                                ),
                        }),
                    ],
                });
            });
            var R = o(97956),
                w = o(72367),
                D = o.n(w),
                k = o(65724),
                M = o(53323),
                P = o(31764),
                z = o(26570),
                F = o.n(z);
            let W = (e) => {
                    let { children: t } = e,
                        o = (0, a.useId)(),
                        n = (0, a.useRef)(null),
                        { formatMessage: l } = (0, i.A)();
                    return (0, r.jsxs)('div', {
                        className: F().root,
                        'data-test-id': p.e8.concerts.CONCERTS_TOP,
                        children: [
                            (0, r.jsx)(I.T, {
                                className: F().header,
                                labeledForId: o,
                                title: l({ id: 'concerts.top-for-you' }),
                                controls: (0, r.jsx)(P.X, { className: F().controls, carouselRef: n }),
                                headingVariant: 'h2',
                            }),
                            (0, r.jsx)(M.F, { className: F().carousel, ref: n, itemClassName: (0, k.$)(F().item, F().important), 'aria-labelledby': o, children: t }),
                        ],
                    });
                },
                B = (e) => Array.from({ length: 10 }, (t, o) => (0, r.jsx)(E.L, { isActive: e, withPriceButton: !0 }, o)),
                G = (0, l.PA)(() => {
                    let { concerts: e, experiments: t } = (0, A.g)();
                    (0, j.W)({ enabled: e.isResolved });
                    let o = t.checkExperiment(R.z.WebNextConcertsIdentityEventType, 'on'),
                        n = (0, a.useMemo)(() => {
                            var t;
                            return (null == (t = e.topConcerts) ? void 0 : t.length) && !e.isShimmerVisible
                                ? e.topConcerts.map((e, t) =>
                                      (0, r.jsx)(
                                          h.B,
                                          {
                                              objectType: d.DomainObjectType.Concert,
                                              objectId: e.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              children: (0, r.jsx)('div', {
                                                  className: D().concertCard,
                                                  children: (0, r.jsx)(f.Q, { withMask: o, withPriceButton: !0, withInlineMeta: !0, concert: e }),
                                              }),
                                          },
                                          e.getKey(t),
                                      ),
                                  )
                                : B(e.isShimmerActive);
                        }, [e.isShimmerActive, e.isShimmerVisible, e.topConcerts, o]);
                    return (e.isNeededToLoad && (0, a.use)(e.getData()), (0, r.jsx)(W, { children: n }));
                }),
                H = () => (0, r.jsx)(a.Suspense, { fallback: (0, r.jsx)(W, { children: B(!0) }), children: (0, r.jsx)(G, {}) });
            var V = o(25772),
                U = o(32596),
                Y = o(20129),
                X = o(69630),
                K = o(98427),
                Z = o(41617);
            let $ = (e) => {
                let { children: t, offsetBlockPosY: o } = e,
                    n = (0, a.useMemo)(() => ({ offsetBlockPosY: o }), [o]);
                return (0, r.jsx)(Z.E.Provider, { value: n, children: t });
            };
            var q = o(44230),
                J = o(37670),
                Q = o(4370),
                ee = o(86790),
                et = o(60266),
                eo = o(93317),
                er = o(29595),
                ea = o(74965),
                en = o(66943),
                el = o(80643),
                ei = o(96817),
                es = o(52300),
                ec = o(19994),
                ed = o(79070),
                eu = o(11372),
                e_ = o(96329),
                em = o.n(e_),
                eh = {
                    810: (e) => {
                        e.exports = n;
                    },
                },
                eC = {},
                ep = {};
            ((() => {
                (Object.defineProperty(ep, '__esModule', { value: !0 }), (ep.useKeyboardNavigation = void 0));
                let e = (function e(t) {
                    var o = eC[t];
                    if (void 0 !== o) return o.exports;
                    var r = (eC[t] = { exports: {} });
                    return (eh[t](r, r.exports, e), r.exports);
                })(810);
                function t(e, t) {
                    return e.current ? Array.from(t ? e.current.querySelectorAll(t) : e.current.children) : [];
                }
                ep.useKeyboardNavigation = function (o) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { navigationItemsSelector: a, activeAttributeName: n = 'aria-selected' } = r,
                        l = (0, e.useCallback)(
                            (e) => {
                                let r = t(o, a);
                                if (!r.length) return;
                                let n = e.target,
                                    l = r.indexOf(n);
                                if (-1 === l) return;
                                let [i] = r,
                                    s = r.at(-1),
                                    c = null;
                                switch (e.key) {
                                    case 'ArrowLeft':
                                    case 'ArrowUp':
                                        c = r[l - 1] || s;
                                        break;
                                    case 'ArrowRight':
                                    case 'ArrowDown':
                                        c = r[l + 1] || i;
                                        break;
                                    case 'Home':
                                        c = i;
                                        break;
                                    case 'End':
                                        c = s;
                                }
                                null !== c && (c.focus(), e.preventDefault());
                            },
                            [a, o],
                        );
                    ((0, e.useEffect)(() => {
                        let e = o.current;
                        return (null == e || e.addEventListener('keydown', l), () => (null == e ? void 0 : e.removeEventListener('keydown', l)));
                    }, [o, l]),
                        (0, e.useEffect)(() => {
                            t(o, a).forEach((e) => {
                                e.hasAttribute(n) && ('true' === e.getAttribute(n) ? (e.tabIndex = 0) : (e.tabIndex = -1));
                            });
                        }));
                };
            })(),
                ep.__esModule);
            var ex = ep.useKeyboardNavigation,
                eb = o(70621),
                eS = o(62414),
                eT = o(49176),
                eg = o(94037),
                ej = o.n(eg);
            let ev = (e) => {
                let { isSelected: t, onSelect: o, children: a, locationId: n, testId: l } = e,
                    i = (0, eb.D)(),
                    s = (0, eS.D)(),
                    c = (0, b.c)(() => {
                        (i({ actionType: d.ActionType.SearchItemSelected, userInteractionType: d.UserInteractionType.Tap }), o(n));
                    }),
                    u = (0, b.c)((e) => {
                        (e.key === eT.v.ENTER || e.key === eT.v.SPACE) &&
                            (e.preventDefault(), i({ actionType: d.ActionType.SearchItemSelected, userInteractionType: d.UserInteractionType.Tap }), o(n));
                    });
                return (0, r.jsxs)('li', {
                    ref: s,
                    className: ej().item,
                    role: 'option',
                    'aria-selected': t,
                    tabIndex: 0,
                    onClick: c,
                    onKeyDown: u,
                    'data-test-id': null != l ? l : p.Xk.concerts.CONCERTS_LOCATION_DIALOG_LIST_ITEM,
                    children: [
                        (0, r.jsx)(g.HL, { className: ej().itemText, variant: 'span', size: 'l', weight: 'medium', children: a }),
                        t && (0, r.jsx)(es.I, { className: ej().checkIcon, variant: 'check', size: 'xs', 'aria-hidden': 'true' }),
                    ],
                });
            };
            var eL = o(92115),
                ef = o.n(eL);
            let eE = (0, l.PA)((e) => {
                let { showAutoDetect: t, isAutoDetect: o, filteredLocations: n, selectedLocationId: l, onSelectLocation: c, onSelectAutoDetect: u } = e,
                    { formatMessage: _ } = (0, i.A)(),
                    C = (0, a.useRef)(null);
                ex(C, { navigationItemsSelector: '[role="option"]' });
                let x = n.length,
                    b = (0, ed.L)(() => {
                        let e = n.find((e) => e.id === l),
                            t = n.filter((e) => e.id !== l),
                            o = [];
                        return (e && o.push(e), o.push(...t), o);
                    });
                return (0, r.jsx)(m.F, {
                    blockType: d.EntityTypes.LocationList,
                    blockId: d.EntityTypes.LocationList,
                    blockPosX: 1,
                    blockPosY: 2,
                    objectsCount: x,
                    children: (0, r.jsxs)('ul', {
                        ref: C,
                        className: ef().root,
                        role: 'listbox',
                        'aria-label': _({ id: 'concerts.cities-list' }),
                        'data-test-id': p.Xk.concerts.CONCERTS_LOCATION_DIALOG_LIST,
                        children: [
                            t &&
                                (0, r.jsx)(h.B, {
                                    objectType: d.DomainObjectType.LocationAutoDetect,
                                    objectId: d.DomainObjectType.LocationAutoDetect,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    children: (0, r.jsx)(ev, {
                                        isSelected: o,
                                        onSelect: u,
                                        testId: p.Xk.concerts.CONCERTS_LOCATION_DIALOG_NEARBY_ITEM,
                                        children: (0, r.jsx)(s.A, { id: 'concerts.concerts-nearby' }),
                                    }),
                                }),
                            b.map((e, o) =>
                                (0, r.jsx)(
                                    h.B,
                                    {
                                        objectType: d.DomainObjectType.Location,
                                        objectId: String(e.id),
                                        objectPosX: 1,
                                        objectPosY: t ? o + 2 : o + 1,
                                        children: (0, r.jsx)(ev, { isSelected: e.id === l, onSelect: c, locationId: e.id, children: e.name }),
                                    },
                                    e.id,
                                ),
                            ),
                        ],
                    }),
                });
            });
            var eA = o(21927),
                eI = o.n(eA);
            let eO = (0, l.PA)((e) => {
                let { onClose: t } = e,
                    { concerts: o } = (0, A.g)(),
                    { locationSelection: a } = o,
                    { filteredLocations: n, searchText: l, selectedLocationId: i, isAutoDetect: c } = a,
                    d = !l.trim(),
                    _ = d || n.length > 0,
                    m = (0, b.c)((e) => {
                        void 0 !== e && (a.setSelectedLocation(e), t());
                    }),
                    h = (0, b.c)(() => {
                        (a.setSelectedLocation(null), t());
                    });
                (0, u.u)();
                let C = (0, ed.L)(() =>
                        (0, r.jsx)(eE, { showAutoDetect: d, isAutoDetect: c, filteredLocations: n, selectedLocationId: i, onSelectLocation: m, onSelectAutoDetect: h }),
                    ),
                    x = (0, ed.L)(() =>
                        (0, r.jsxs)('div', {
                            className: eI().emptyState,
                            'data-test-id': p.Xk.concerts.CONCERTS_LOCATION_DIALOG_EMPTY_STATE,
                            children: [
                                (0, r.jsx)(g.DZ, {
                                    className: eI().emptyStateTitle,
                                    variant: 'h3',
                                    weight: 'bold',
                                    size: 's',
                                    children: (0, r.jsx)(s.A, { id: 'concerts.nothing-found' }),
                                }),
                                (0, r.jsx)(g.HL, {
                                    className: eI().emptyStateSubtitle,
                                    variant: 'span',
                                    size: 'm',
                                    children: (0, r.jsx)(s.A, { id: 'concerts.try-different-query' }),
                                }),
                            ],
                        }),
                    );
                return (0, r.jsx)('div', { className: eI().root, children: _ ? C : x });
            });
            var eN = o(23237),
                ey = o(3515),
                eR = o.n(ey);
            let ew = (e) => {
                    let { searchText: t, onChange: o, onReset: a } = e,
                        { formatMessage: n } = (0, i.A)(),
                        l = (0, eS.D)();
                    return (0, r.jsx)('div', {
                        ref: l,
                        className: eR().root,
                        children: (0, r.jsx)(eN.D, {
                            className: eR().searchInput,
                            placeholder: n({ id: 'concerts.find-city' }),
                            initialValue: t,
                            correctedValue: null,
                            onChange: o,
                            onResetClick: a,
                            resetButtonAriaLabel: n({ id: 'interface-actions.reset-search-input' }),
                            withResetButton: !1,
                            autoFocus: !0,
                            innerInputProps: { 'data-test-id': p.Xk.concerts.CONCERTS_LOCATION_DIALOG_SEARCH_INPUT },
                        }),
                    });
                },
                eD = (0, l.PA)((e) => {
                    let { isOpen: t, onClose: o } = e,
                        { formatMessage: n } = (0, i.A)(),
                        {
                            concerts: l,
                            settings: { isMobile: s },
                        } = (0, A.g)(),
                        { locationSelection: c } = l,
                        { searchText: u } = c,
                        _ = (0, b.c)((e) => {
                            c.setSearchText(e);
                        }),
                        C = (0, b.c)(() => {
                            c.resetSearchText();
                        }),
                        x = (0, b.c)((e) => {
                            e || o();
                        });
                    (0, a.useEffect)(() => {
                        t || c.resetSearchText();
                    }, [t, c]);
                    let S = (0, ed.L)(() =>
                            (0, r.jsx)(m.F, {
                                blockType: d.EntityTypes.Search,
                                blockId: d.EntityTypes.Search,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: 1,
                                children: (0, r.jsx)(h.B, {
                                    objectType: d.DomainObjectType.SearchField,
                                    objectId: d.DomainObjectType.SearchField,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    children: (0, r.jsx)(ew, { searchText: u, onChange: _, onReset: C }),
                                }),
                            }),
                        ),
                        T = (0, ed.L)(() => {
                            if (!s)
                                return (0, r.jsx)(ei.$, {
                                    radius: 'round',
                                    color: 'secondary',
                                    size: 'xxs',
                                    icon: (0, r.jsx)(es.I, { variant: 'close', size: 'xxs' }),
                                    onClick: o,
                                    'aria-label': n({ id: 'interface-actions.close' }),
                                    className: em().desktopCloseButton,
                                    'data-test-id': p.Xk.concerts.CONCERTS_LOCATION_DIALOG_CLOSE_BUTTON,
                                });
                        });
                    return (0, r.jsx)(eu.a, {
                        open: t,
                        onClose: o,
                        onOpenChange: x,
                        placement: s ? 'default' : 'center',
                        size: s ? 'fullscreen' : 'fitContent',
                        className: em().root,
                        labelClose: n({ id: 'interface-actions.close' }),
                        closeButtonProps: { className: em().closeButton, 'data-test-id': p.Xk.concerts.CONCERTS_LOCATION_DIALOG_CLOSE_BUTTON },
                        headerClassName: em().header,
                        header: S,
                        customCloseButton: T,
                        isMobile: s,
                        enableSwipe: s,
                        overlayColor: s ? 'transparent' : 'full',
                        'data-test-id': p.Xk.concerts.CONCERTS_LOCATION_DIALOG_MODAL,
                        children: t && (0, r.jsx)(eO, { onClose: o }),
                    });
                });
            var ek = o(10799),
                eM = o.n(ek);
            let eP = (0, l.PA)((e) => {
                var t;
                let { className: o } = e,
                    { concerts: n } = (0, A.g)(),
                    { locationSelection: l } = n,
                    i = (0, el.S)(),
                    [c, u] = (0, a.useState)(0),
                    _ = (0, b.c)(() => {
                        (i({ to: d.AppScreen.ConcertLocationSelector }), u((e) => e + 1), l.modal.open());
                    });
                if (l.shouldShowShimmer) return (0, r.jsx)(ec.W, { className: (0, k.$)(eM().root, eM().shimmer, o), isActive: !0, radius: 'xxxl' });
                let m = l.hasLocations,
                    h = null != (t = l.selectedLocationName) ? t : (0, r.jsx)(s.A, { id: 'concerts.nearby' });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(ei.$, {
                            className: (0, k.$)(eM().root, o, { [eM().root_disabled]: !m }),
                            variant: 'text',
                            size: 's',
                            icon: (0, r.jsx)(es.I, { variant: 'arrowDown', size: 'xxxs' }),
                            iconPosition: 'right',
                            iconClassName: eM().icon,
                            withRipple: !1,
                            'aria-live': 'polite',
                            'aria-haspopup': 'dialog',
                            'aria-expanded': l.modal.isOpened,
                            disabled: !m,
                            onClick: _,
                            'data-test-id': p.Xk.concerts.CONCERTS_LOCATION_SELECTOR_BUTTON,
                            children: (0, r.jsx)(g.HL, {
                                className: eM().text,
                                variant: 'span',
                                type: 'controls',
                                size: 'l',
                                weight: 'medium',
                                lineClamp: 1,
                                children: h,
                            }),
                        }),
                        m &&
                            (0, r.jsx)(
                                C.a,
                                {
                                    pageId: d.AppScreen.ConcertLocationSelector,
                                    pageIdForFrom: K.b.CONCERT_LOCATION_SELECTOR,
                                    mainObjectId: K.b.CONCERT_LOCATION_SELECTOR,
                                    mainObjectType: d.DomainObjectType.Location,
                                    pageStyle: d.PageStyles.Fullscreen,
                                    pagePlacement: d.PagePlacements.Fullscreen,
                                    children: (0, r.jsx)(eD, { isOpen: l.modal.isOpened, onClose: l.modal.close }),
                                },
                                c,
                            ),
                    ],
                });
            });
            var ez = o(36139),
                eF = o.n(ez);
            let eW = (0, l.PA)(() => {
                    var e, t, o, n, l, C, j, v, L;
                    let { formatMessage: f } = (0, i.A)(),
                        { setContentScrollRef: E, contentScrollRef: I } = (0, q.g)(),
                        { concerts: O, experiments: N, user: w } = (0, A.g)(),
                        [D, k] = (0, S.d)();
                    (0, u.u)();
                    let M = null != (C = null == (e = O.landing.meta) ? void 0 : e.selectedTabIndex) ? C : 0,
                        P = null != (j = null == (o = O.landing.tabs.data) || null == (t = o[M]) ? void 0 : t.blocks.length) ? j : 0;
                    (N.checkExperiment(R.z.WebNextConcertsTab, 'on') || (0, c.notFound)(),
                        w.hasPlus || (0, c.redirect)(Q.Z.main.href),
                        (0, a.useEffect)(
                            () => () => {
                                O.resetPageData();
                            },
                            [O],
                        ),
                        O.isLocationSelectionExperimentEnabled && O.locationSelection.isNeededToLoad && (0, a.use)(O.locationSelection.getLocations()),
                        (0, J.J)(O.landing.isResolved),
                        (() => {
                            let e = (0, a.useRef)(1),
                                { concerts: t } = (0, A.g)(),
                                { notify: o } = (0, ea.l)(),
                                { formatMessage: n } = (0, i.A)();
                            (0, a.useEffect)(() => {
                                e && (t.isRejected && o((0, r.jsx)(en.h, { error: n({ id: 'concerts.feed-error' }) }), { containerId: er.u.ERROR }), e.current--);
                            }, [t.isRejected, n, o]);
                        })());
                    let z = (0, b.c)(() => {
                        if (O.landing.isLoaded) return O.landing.getSkeleton({ id: x.p.CONCERTS, showWizard: w.settings.showWizard }, { preloadBlocksCount: 2 });
                    });
                    return (O.landing.isNeededToLoad &&
                        (0, a.use)(O.landing.getSkeleton({ id: x.p.CONCERTS, showWizard: w.settings.showWizard }, { preloadBlocksCount: 2 })),
                    O.landing.isRejected)
                        ? (0, r.jsx)(U.SomethingWentWrong, {})
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)(X.h, {
                                      scrollElement: I,
                                      outerTitle: f({ id: 'entity-names.concerts' }),
                                      headerElement: D,
                                      children: [
                                          (0, r.jsx)(eo.Y, { variant: eo.V.TEXT, showControls: !1 }),
                                          (0, r.jsxs)(T.N, {
                                              ref: E,
                                              className: eF().root,
                                              containerClassName: eF().container,
                                              'data-test-id': p.Xk.concerts.CONCERTS_PAGE,
                                              children: [
                                                  (0, r.jsxs)('div', {
                                                      className: eF().pageHeader,
                                                      ref: k,
                                                      children: [
                                                          (0, r.jsx)(g.DZ, {
                                                              variant: 'h1',
                                                              weight: 'bold',
                                                              size: 'xl',
                                                              className: eF().pageTitle,
                                                              'data-test-id': p.Xk.concerts.CONCERTS_PAGE_TITLE,
                                                              children: (0, r.jsx)(s.A, { id: 'entity-names.concerts' }),
                                                          }),
                                                          O.isLocationSelectionExperimentEnabled &&
                                                              (0, r.jsx)(_.h, {
                                                                  tabId: '',
                                                                  tabPos: 0,
                                                                  isTabSelectedByDefault: !1,
                                                                  children: (0, r.jsx)(m.F, {
                                                                      blockId: d.EntityTypes.ConcertTabHeader,
                                                                      blockType: d.EntityTypes.ConcertTabHeader,
                                                                      blockPosX: 1,
                                                                      blockPosY: 1,
                                                                      objectsCount: 1,
                                                                      children: (0, r.jsx)(h.B, {
                                                                          objectType: d.DomainObjectType.Location,
                                                                          objectId: d.DomainObjectType.Location,
                                                                          objectPosX: 1,
                                                                          objectPosY: 1,
                                                                          children: (0, r.jsx)(eP, { className: eF().locationSelector }),
                                                                      }),
                                                                  }),
                                                              }),
                                                      ],
                                                  }),
                                                  (0, r.jsx)(_.h, {
                                                      tabId: '',
                                                      tabPos: 0,
                                                      isTabSelectedByDefault: !1,
                                                      children: (0, r.jsx)(m.F, {
                                                          blockId: d.EntityTypes.ConcertTabHeader,
                                                          blockType: d.EntityTypes.ConcertTabHeader,
                                                          blockPosX: 1,
                                                          blockPosY: 1,
                                                          objectsCount: null != (v = null == (n = O.topConcerts) ? void 0 : n.length) ? v : 0,
                                                          children: (0, r.jsx)(H, {}),
                                                      }),
                                                  }),
                                                  (0, r.jsx)($, {
                                                      offsetBlockPosY: 1,
                                                      children: (0, r.jsx)(V.E, {
                                                          landing: O.landing,
                                                          errorComponent: (0, r.jsx)(U.SomethingWentWrong, { withBackwardControl: !1 }),
                                                      }),
                                                  }),
                                                  (0, r.jsx)(_.h, {
                                                      tabId: '',
                                                      tabPos: 0,
                                                      isTabSelectedByDefault: !1,
                                                      children: (0, r.jsx)(m.F, {
                                                          blockId: d.EntityTypes.ConcertTabFeed,
                                                          blockType: d.EntityTypes.ConcertTabFeed,
                                                          blockPosX: 1,
                                                          blockPosY: P + 2,
                                                          objectsCount: null != (L = null == (l = O.feedConcerts) ? void 0 : l.length) ? L : 0,
                                                          children: (0, r.jsx)(y, {}),
                                                      }),
                                                  }),
                                                  (0, r.jsx)(et.A, { children: (0, r.jsx)(ee.w, { className: eF().footer }) }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(Y.p, { onFinishSuccess: z }),
                              ],
                          });
                }),
                eB = () => (0, r.jsx)(C.a, { pageId: d.AppScreen.ConcertsLandingScreen, pageIdForFrom: K.b.CONCERTS, children: (0, r.jsx)(eW, {}) });
            var eG = o(87396);
            let eH = () => (0, r.jsx)(eG.MainSuspenseLoader, { style: { position: 'absolute', background: 'var(--ym-background-color-primary-enabled-content)' } }),
                eV = () => (0, r.jsx)(a.Suspense, { fallback: (0, r.jsx)(eH, {}), children: (0, r.jsx)(eB, {}) });
        },
        53360: (e, t, o) => {
            'use strict';
            o.d(t, { U: () => c });
            var r = o(88800),
                a = o(65724),
                n = o(84961),
                l = o(53548),
                i = o(51516),
                s = o.n(i);
            let c = (0, n.PA)((e) => {
                let { indices: t, virtualItem: o, renderItemByIndex: n, columnClassName: i, className: c, resizeObserver: d, scrollMargin: u } = e,
                    _ = (0, l.useRef)(null),
                    m = t[o.index],
                    h = { '--virtual-grid-row-vertical-offset': ''.concat(o.start - u, 'px') };
                return (
                    (0, l.useEffect)(() => {
                        let e = _.current;
                        if (e)
                            return (
                                null == d || d.observe(e),
                                () => {
                                    null == d || d.unobserve(e);
                                }
                            );
                    }, [d]),
                    (0, r.jsx)('div', {
                        'data-index': o.index,
                        ref: _,
                        style: h,
                        className: (0, a.$)(s().root, c),
                        children: null == m ? void 0 : m.map((e) => (0, r.jsx)('div', { className: i, children: n(e) }, ''.concat(o.key, '_').concat(e))),
                    })
                );
            });
        },
        55778: (e) => {
            e.exports = {
                root: 'FeedConcerts_root__W7OGN',
                header: 'FeedConcerts_header__Ht1xd',
                container: 'FeedConcerts_container__CONvW',
                column: 'FeedConcerts_column__FpMgx',
                row: 'FeedConcerts_row__HEdtn',
            };
        },
        60932: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
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
        72367: (e) => {
            e.exports = { concertCard: 'TopConcerts_concertCard__h86wP' };
        },
        77253: (e, t, o) => {
            Promise.resolve().then(o.bind(o, 52499));
        },
        79418: (e, t, o) => {
            'use strict';
            o.d(t, { $: () => p });
            var r = o(88800),
                a = o(65724),
                n = o(61013),
                l = o(53548);
            let i = (e) => {
                    let { style: t, forwardRef: o, context: a, ...n } = e,
                        l = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        i = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: i, 'aria-label': l, style: { ...t }, ref: o, ...n });
                },
                s = (0, l.forwardRef)((e, t) => (0, r.jsx)(i, { forwardRef: t, ...e }));
            var c = o(16434),
                d = o.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: o, withFooter: n, withHeader: l, withForceScroll: i, ...s } = e;
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: n, [d().scroller_withHeader]: l, [d().scroller_withForceScroll]: i }),
                        style: { ...t },
                        ref: o,
                        ...s,
                        tabIndex: -1,
                    });
                },
                _ = (0, l.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var m = o(55482),
                h = o(75151);
            let C = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: o,
                            onRangeHandler: a,
                            debounceDurationInMs: n = 100,
                            totalCount: i = 0,
                            shouldTriggerRangeChangedOn: s = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, C] = (0, l.useState)(null),
                        p = (0, l.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == a || a(e), s.length > 0 && C(e), t && o)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < r; e++) o(e);
                                    }
                                }, n),
                            [n, a, t, o, s],
                        );
                    (0, l.useEffect)(() => {
                        s.length > 0 && _ && p(_);
                    }, s);
                    let x = (0, l.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, n);
                    }, [c, n]);
                    return (0, r.jsx)(h.sN, { ref: d, rangeChanged: p, totalCount: i, endReached: x, ...u });
                },
                p = (e) => {
                    let {
                            className: t,
                            customComponents: o,
                            onGetDataByPage: i,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: p = 700,
                            pageSize: x = 20,
                            totalCount: b,
                            totalRequests: S,
                            debounceDurationInMs: T,
                            initialItemCount: g,
                            minInitialItemCount: j = 20,
                            handleRef: v,
                            alwaysShowScrollbar: L = !1,
                            testId: f,
                            isMobileLayout: E = !1,
                            shouldTriggerRangeChangedOn: A,
                            ...I
                        } = e,
                        [O, N] = (0, l.useState)(!1),
                        y = (0, l.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    N(e);
                                }, 100),
                            [],
                        ),
                        R = (0, l.useMemo)(() => {
                            var e, t;
                            return E
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == o ? void 0 : o.List) ? e : s,
                                      Item: null == o ? void 0 : o.Item,
                                      ScrollSeekPlaceholder: null == o ? void 0 : o.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == o ? void 0 : o.List) ? t : s,
                                      Item: null == o ? void 0 : o.Item,
                                      Header: null == o ? void 0 : o.Header,
                                      Footer: null == o ? void 0 : o.Footer,
                                      ScrollSeekPlaceholder: null == o ? void 0 : o.ScrollSeekPlaceholder,
                                  };
                        }, [o, S, E]),
                        w = g ? Math.min(g, j) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: O || L, [d().root_notScrolling]: !O && !L }, t),
                        'data-test-id': f,
                        children: [
                            E && (null == o ? void 0 : o.Header) && o.Header(),
                            (0, r.jsx)(C, {
                                overscan: p,
                                components: R,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: y,
                                itemContent: m,
                                scrollerRef: v,
                                totalCount: b,
                                pageSize: x,
                                onPageHandler: i,
                                onRangeHandler: c,
                                debounceDurationInMs: T,
                                initialItemCount: w,
                                shouldTriggerRangeChangedOn: A,
                                ...I,
                            }),
                            E && (null == o ? void 0 : o.Footer) && o.Footer(),
                        ],
                    });
                };
        },
        87396: (e, t, o) => {
            'use strict';
            o.d(t, { MainSuspenseLoader: () => i });
            var r = o(88800),
                a = o(52300),
                n = o(60932),
                l = o.n(n);
            let i = (e) => {
                let { style: t } = e,
                    o = {
                        display: 'flex',
                        position: 'fixed',
                        insetBlockStart: 0,
                        insetInlineEnd: 0,
                        insetBlockEnd: 0,
                        insetInlineStart: 0,
                        zIndex: 'var(--ym-z-index-loader)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        background: 'var(--ym-background-color-primary-enabled-basic)',
                        ...t,
                    };
                return (0, r.jsx)('div', {
                    style: o,
                    children: (0, r.jsx)(a.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: l().icon,
                    }),
                });
            };
        },
        92115: (e) => {
            e.exports = { root: 'LocationDialogList_root__BjLJb' };
        },
        94037: (e) => {
            e.exports = {
                item: 'LocationDialogListItem_item__a0z5H',
                itemText: 'LocationDialogListItem_itemText__t5XG5',
                checkIcon: 'LocationDialogListItem_checkIcon__AfJMx',
            };
        },
        96329: (e) => {
            e.exports = {
                root: 'LocationDialog_root__mAfDO',
                closeButton: 'LocationDialog_closeButton__gecsT',
                desktopCloseButton: 'LocationDialog_desktopCloseButton__jzdnV',
                header: 'LocationDialog_header__Se7S8',
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                4700, 2691, 1147, 7908, 4555, 5038, 7065, 3248, 1191, 7072, 505, 7750, 527, 4863, 9232, 3377, 9610, 2218, 1825, 893, 6252, 727, 8655, 1879, 6706, 4771,
                1311, 5201, 3075, 8832, 6904, 4495, 2058, 3578, 8628, 4827, 8283, 1800, 5151, 7746, 1223, 1848, 9907, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934,
                2470, 7670, 4441, 9337, 2088, 79, 818, 7053, 4322, 7934, 1372, 812, 6820, 9473, 1401, 2816, 4394, 5772, 763, 2670, 7358,
            ],
            () => e((e.s = 77253)),
        ),
            (_N_E = e.O()));
    },
]);
