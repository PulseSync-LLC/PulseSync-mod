(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7307, 8074],
    {
        3435: (e, t, s) => {
            'use strict';
            s.d(t, { p: () => K });
            var i = s(32290),
                l = s(63618),
                n = s(96103),
                r = s(55178),
                o = s(60900),
                a = s(39407),
                d = s(21732),
                h = s(54862),
                c = s(63423),
                u = s(84638),
                m = s(15299),
                g = s(71926),
                f = s(54667),
                _ = s(45477),
                p = s(75582),
                v = s(55332),
                E = s(95329),
                b = s(53022),
                S = s(57594),
                C = s(58008),
                w = s(49399),
                x = s(90357),
                M = s(28563),
                A = s(89020),
                z = s(45180),
                I = s(8946),
                O = s(45257),
                R = s(14934),
                T = s(82586),
                y = s(86269),
                L = s(23352),
                D = s(11323);
            let N = { src: '/_next/static/media/artist.c49b2bfa.png' };
            var j = s(22800),
                W = s.n(j);
            let k = (0, n.PA)((e) => {
                let { className: t, artist: s } = e,
                    { ref: n, intersectionPropertyId: o } = (0, L.n)(),
                    {
                        wizard: { likeArtist: a, isArtistLiked: h },
                    } = (0, S.g)(),
                    { id: u, name: m, coverUri: f } = s,
                    _ = (0, r.useCallback)(() => {
                        a(u);
                    }, [a, u]),
                    p = h(u),
                    v = (0, r.useMemo)(
                        () =>
                            (0, i.jsx)(y.t, {
                                className: W().cover,
                                radius: 'round',
                                'data-test-id': d.e8.wizard.ARTIST_CARD,
                                children: (0, i.jsxs)(c.$, {
                                    radius: 'round',
                                    className: W().coverBlock,
                                    variant: 'default',
                                    onClick: _,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': p,
                                    'aria-label': m,
                                    'data-test-id': d.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, i.jsx)(D.B, { className: W().image, src: f || N.src, fit: 'cover', alt: m, withAvatarReplace: !!f, 'aria-hidden': !0 }),
                                        (0, i.jsx)('div', {
                                            className: (0, l.$)(W().like),
                                            children: (0, i.jsx)(T.I, { variant: 'likedVariant', size: 's', className: W().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [p, f, m, _],
                    );
                return (0, i.jsx)(R.MN, {
                    ref: n,
                    className: (0, l.$)(W().root, { [W().root_selected]: p }, t),
                    textPosition: 'center',
                    title: (0, i.jsx)(g.HL, {
                        'aria-hidden': !0,
                        className: W().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': d.e8.wizard.ARTIST_CARD_NAME,
                        children: m,
                    }),
                    'data-intersection-property-id': o,
                    view: v,
                    'data-test-id': d.Kq.artist.ARTIST_ITEM,
                });
            });
            var F = s(6680),
                P = s.n(F);
            let G = { [f.u.Desktop]: { start: 40, end: 40 }, [f.u.Mobile]: { start: 40, end: 40 } },
                K = (0, n.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: s } = (0, o.A)(),
                        {
                            wizard: n,
                            settings: { isMobile: f, isWindowsApplication: R, isLinuxApplication: T },
                            user: y,
                        } = (0, S.g)(),
                        { notify: L } = (0, p.l)(),
                        D = (0, b.z)(),
                        [N, j] = (0, h.d)(),
                        W = (0, m.zb)(0),
                        F = (0, r.useMemo)(
                            () => (e) => {
                                var t;
                                if (!W.onTabChange || e === W.value) return;
                                W.onTabChange(e);
                                let s = null == (t = n.genres[e]) ? void 0 : t.id;
                                n.setFilter(s), null == N || N.scrollTo({ top: 0 });
                            },
                            [n, W, N],
                        ),
                        K = (0, r.useMemo)(() => {
                            switch (n.selectedArtistsCounter) {
                                case 0:
                                    return s({ id: 'wizard.button-tune' });
                                case 1:
                                    return s({ id: 'wizard.button-little-more' });
                                case 2:
                                    return s({ id: 'wizard.button-one-more' });
                                default:
                                    return s({ id: 'wizard.button-done' });
                            }
                        }, [n.selectedArtistsCounter, s]),
                        V = (0, r.useMemo)(
                            () =>
                                (0, i.jsx)(I.wI, {
                                    className: P().tabCarousel,
                                    ...W,
                                    onTabChange: F,
                                    isShimmerVisible: n.loadingState === w.G.PENDING,
                                    shimmer: (0, i.jsx)(I.zr, { isActive: !0, className: P().tabCarousel, shimmerClassName: P().tabShimmer, count: f ? 2 : 3 }),
                                    children: n.genres.map((e, t) =>
                                        (0, i.jsx)(
                                            z.o,
                                            {
                                                className: (0, l.$)(P().filter, { [P().filter_selected]: t === W.value }),
                                                titleClassName: P().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [n.genres, W, F, n.loadingState, f],
                        ),
                        B = (0, r.useCallback)(() => {
                            n.getArtists(60);
                        }, [n]);
                    (0, r.useEffect)(() => {
                        n.filter && B();
                    }, [n.filter, B]);
                    let H = (0, r.useCallback)(async () => {
                        await n.getGenres(), B();
                    }, [n, B]);
                    (0, r.useEffect)(() => {
                        n.modal.isOpened && H();
                    }, [n, n.modal.isOpened, H]),
                        (0, r.useEffect)(() => {
                            n.loadingState === w.G.REJECT &&
                                (n.modal.close(), L((0, i.jsx)(x.h, { error: s({ id: 'error-messages.error-load-wizard' }) }), { containerId: _.u.ERROR }));
                        }, [n, n.getGenres, n.loadingState, s, L]);
                    let U = (0, r.useMemo)(
                            () =>
                                (0, i.jsx)(g.DZ, {
                                    className: P().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': d.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, i.jsx)(a.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        $ = (0, r.useCallback)(async () => {
                            n.selectedArtistsCounter < 3 ? n.getArtists() : (await n.finish()) === C.F.OK && (await y.getSettings(), await (null == t ? void 0 : t())),
                                n.modal.close();
                        }, [t, y, n]);
                    return (
                        (0, r.useEffect)(
                            () => (
                                null == D ||
                                    D.addShortcutsListener(E.M.MAIN, v.l.CLOSE, () => {
                                        n.modal.isOpened && $();
                                    }),
                                () => {
                                    null == D || D.removeShortcutsListener(E.M.MAIN, v.l.CLOSE);
                                }
                            ),
                            [$, n.modal.isOpened, D],
                        ),
                        (0, i.jsxs)(u.a, {
                            className: (0, l.$)(P().root, { [P().root_withCustomControls]: R || T }),
                            headerClassName: P().modalHeader,
                            contentClassName: P().modalContent,
                            open: n.modal.isOpened,
                            onOpenChange: n.modal.onOpenChange,
                            onClose: $,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: s({ id: 'interface-actions.close' }),
                            closeButtonProps: { 'data-test-id': d.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON },
                            'data-test-id': d.e8.wizard.WIZARD_MODAL,
                            header: f && U,
                            escapeKey: !1,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: P().wrapper,
                                    children: [
                                        !f && U,
                                        (0, i.jsx)(g.HL, {
                                            className: P().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, i.jsx)(a.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, i.jsx)(c.$, {
                                            className: P().button,
                                            size: f ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: $,
                                            disabled: n.selectedArtistsCounter < 3,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, i.jsx)(g.HL, { variant: 'div', size: 'm', weight: 'medium', children: K }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)('div', {
                                    className: P().mainContainer,
                                    children: [
                                        (0, i.jsx)(M.F, { className: P().carousel, carouselElement: V, scrollPadding: G }),
                                        (0, i.jsx)(O.$, {
                                            withFooter: !1,
                                            className: (0, l.$)(P().scrollContainer, P().important),
                                            itemContentCallback: (e) => {
                                                let t = n.artistsByGenre[e];
                                                if (!t) {
                                                    let e = s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.artist' }) });
                                                    return (0, i.jsx)(A.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, i.jsx)(k, { artist: t }, t.id);
                                            },
                                            data: n.artistsByGenre,
                                            endReached: B,
                                            listClassName: P().content,
                                            itemClassName: P().item,
                                            pageSize: 60,
                                            handleRef: j,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        6680: (e) => {
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
        19947: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 70063));
        },
        22800: (e) => {
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
        35609: (e, t, s) => {
            'use strict';
            s.d(t, { _: () => l });
            var i = s(96194);
            let l = (e) => {
                var t, s, l, n;
                return (
                    !!Array.isArray(e.tabs.data) &&
                    1 === e.tabs.data.length &&
                    (null == (s = e.tabs.data[0]) || null == (t = s.blocks) ? void 0 : t.length) === 1 &&
                    (null == (n = e.tabs.data[0]) || null == (l = n.blocks[0]) ? void 0 : l.type) === i.t.WIZARD
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
        45257: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => _ });
            var i = s(32290),
                l = s(63618),
                n = s(8055),
                r = s(55178);
            let o = (e) => {
                    let { style: t, forwardRef: s, context: l, ...n } = e,
                        r = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        o = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': r, style: { ...t }, ref: s, ...n });
                },
                a = (0, r.forwardRef)((e, t) => (0, i.jsx)(o, { forwardRef: t, ...e }));
            var d = s(39684),
                h = s.n(d);
            let c = (e) => {
                    let { style: t, forwardRef: s, withFooter: n, withHeader: r, withForceScroll: o, ...a } = e;
                    return (0, i.jsx)('div', {
                        className: (0, l.$)(h().scroller, { [h().scroller_withFooter]: n, [h().scroller_withHeader]: r, [h().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: s,
                        ...a,
                        tabIndex: -1,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, i.jsx)(c, { forwardRef: t, ...e }));
            var m = s(62060),
                g = s(31417);
            let f = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: s,
                            onRangeHandler: l,
                            debounceDurationInMs: n = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: d,
                            ...h
                        } = e,
                        [c, u] = (0, r.useState)(null),
                        f = (0, r.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == l || l(e), a.length > 0 && u(e), t && s)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < i; e++) s(e);
                                    }
                                }, n),
                            [n, l, t, s, a],
                        );
                    (0, r.useEffect)(() => {
                        a.length > 0 && c && f(c);
                    }, a);
                    let _ = (0, r.useMemo)(() => {
                        if (d)
                            return (0, m.A)((e) => {
                                d(e);
                            }, n);
                    }, [d, n]);
                    return (0, i.jsx)(g.sN, { rangeChanged: f, totalCount: o, endReached: _, ...h });
                },
                _ = (e) => {
                    let {
                            className: t,
                            customComponents: s,
                            onGetDataByPage: o,
                            onGetDataByRange: d,
                            itemClassName: c,
                            itemContentCallback: m,
                            listClassName: g,
                            overscan: _ = 700,
                            pageSize: p = 20,
                            totalCount: v,
                            totalRequests: E,
                            debounceDurationInMs: b,
                            initialItemCount: S,
                            minInitialItemCount: C = 20,
                            handleRef: w,
                            alwaysShowScrollbar: x = !1,
                            testId: M,
                            isMobileLayout: A = !1,
                            shouldTriggerRangeChangedOn: z,
                            ...I
                        } = e,
                        [O, R] = (0, r.useState)(!1),
                        T = (0, r.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    R(e);
                                }, 100),
                            [],
                        ),
                        y = (0, r.useMemo)(() => {
                            var e, t;
                            return A
                                ? {
                                      Scroller: u,
                                      List: null != (e = null == s ? void 0 : s.List) ? e : a,
                                      Item: null == s ? void 0 : s.Item,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: u,
                                      List: null != (t = null == s ? void 0 : s.List) ? t : a,
                                      Item: null == s ? void 0 : s.Item,
                                      Header: null == s ? void 0 : s.Header,
                                      Footer: null == s ? void 0 : s.Footer,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  };
                        }, [s, E, A]),
                        L = S ? Math.min(S, C) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(h().root, { [h().root_scrolling]: O || x, [h().root_notScrolling]: !O && !x }, t),
                        'data-test-id': M,
                        children: [
                            A && (null == s ? void 0 : s.Header) && s.Header(),
                            (0, i.jsx)(f, {
                                overscan: _,
                                components: y,
                                listClassName: g,
                                itemClassName: c,
                                isScrolling: T,
                                itemContent: m,
                                scrollerRef: w,
                                totalCount: v,
                                pageSize: p,
                                onPageHandler: o,
                                onRangeHandler: d,
                                debounceDurationInMs: b,
                                initialItemCount: L,
                                shouldTriggerRangeChangedOn: z,
                                ...I,
                            }),
                            A && (null == s ? void 0 : s.Footer) && s.Footer(),
                        ],
                    });
                };
        },
        55332: (e, t, s) => {
            'use strict';
            s.d(t, { l: () => i });
            var i = (function (e) {
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
        70063: (e, t, s) => {
            'use strict';
            s.d(t, { KidsPage: () => O });
            var i = s(32290),
                l = s(63618),
                n = s(96103),
                r = s(55178),
                o = s(60900),
                a = s(39407),
                d = s(21732),
                h = s(73474),
                c = s(91027),
                u = s(46049),
                m = s(71926),
                g = s(35609),
                f = s(40959),
                _ = s(64170),
                p = s(3435),
                v = s(7999),
                E = s(48922),
                b = s(22714),
                S = s(83920),
                C = s(3796),
                w = s(57594),
                x = s(58054),
                M = s(32468),
                A = s(74694),
                z = s(96471),
                I = s.n(z);
            let O = (0, n.PA)(() => {
                let { kids: e, user: t } = (0, w.g)(),
                    { formatMessage: s } = (0, o.A)(),
                    { contentScrollRef: n, setContentScrollRef: z } = (0, S.g)();
                (0, r.useEffect)(() => () => e.landing.reset(), [e.landing]), (0, C.J)(e.landing.isResolved);
                let O = (0, g._)(e.landing),
                    R = (0, c.c)(() => {
                        if (e.landing.isLoaded) return e.landing.getSkeleton({ id: h.p.KIDS, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 });
                    });
                return (
                    e.landing.isNeededToLoad && (0, r.use)(e.landing.getSkeleton({ id: h.p.KIDS, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 })),
                    (0, i.jsxs)(b.n, {
                        pageId: E._Q.KIDS,
                        children: [
                            (0, i.jsxs)(v.h, {
                                scrollElement: n,
                                outerTitle: s({ id: 'kids.for-kids' }),
                                children: [
                                    (0, i.jsx)(A.Y, {
                                        variant: A.V.TEXT,
                                        showControls: !1,
                                        children: (0, i.jsx)('div', {
                                            className: I().header,
                                            children: (0, i.jsx)(m.DZ, { variant: 'h1', weight: 'bold', size: 'xl', children: (0, i.jsx)(a.A, { id: 'kids.for-kids' }) }),
                                        }),
                                    }),
                                    (0, i.jsxs)(u.N, {
                                        className: I().root,
                                        containerClassName: I().content,
                                        ref: z,
                                        'data-test-id': d.Xk.kids.KIDS_PAGE,
                                        children: [
                                            (0, i.jsx)('div', {
                                                className: (0, l.$)(I().landing, { [I().landing_onlyWizard]: O }),
                                                children: (0, i.jsx)(f.E, {
                                                    landing: e.landing,
                                                    errorComponent: (0, i.jsx)(_.SomethingWentWrong, { className: I().error, withBackwardControl: !1 }),
                                                }),
                                            }),
                                            (0, i.jsx)(M.A, { children: (0, i.jsx)(x.w, { className: I().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(p.p, { onFinishSuccess: R }),
                        ],
                    })
                );
            });
        },
        77307: (e, t, s) => {
            'use strict';
            s.d(t, { Te: () => w, XW: () => x });
            var i = s(55178),
                l = s(51767);
            function n(e, t, s) {
                let i,
                    l = s.initialDeps ?? [];
                function n() {
                    var n, r, o, a;
                    let d, h;
                    s.key && (null == (n = s.debug) ? void 0 : n.call(s)) && (d = Date.now());
                    let c = e();
                    if (!(c.length !== l.length || c.some((e, t) => l[t] !== e))) return i;
                    if (
                        ((l = c),
                        s.key && (null == (r = s.debug) ? void 0 : r.call(s)) && (h = Date.now()),
                        (i = t(...c)),
                        s.key && (null == (o = s.debug) ? void 0 : o.call(s)))
                    ) {
                        let e = Math.round((Date.now() - d) * 100) / 100,
                            t = Math.round((Date.now() - h) * 100) / 100,
                            i = t / 16,
                            l = (e, t) => {
                                for (e = String(e); e.length < t; ) e = ' ' + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${l(t, 5)} /${l(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * i, 120))}deg 100% 31%);`,
                            null == s ? void 0 : s.key,
                        );
                    }
                    return null == (a = null == s ? void 0 : s.onChange) || a.call(s, i), i;
                }
                return (
                    (n.updateDeps = (e) => {
                        l = e;
                    }),
                    n
                );
            }
            function r(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let o = (e, t, s) => {
                    let i;
                    return function (...l) {
                        e.clearTimeout(i), (i = e.setTimeout(() => t.apply(this, l), s));
                    };
                },
                a = (e) => e,
                d = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        s = Math.min(e.endIndex + e.overscan, e.count - 1),
                        i = [];
                    for (let e = t; e <= s; e++) i.push(e);
                    return i;
                },
                h = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let l = (e) => {
                        let { width: s, height: i } = e;
                        t({ width: Math.round(s), height: Math.round(i) });
                    };
                    if ((l(s.getBoundingClientRect()), !i.ResizeObserver)) return () => {};
                    let n = new i.ResizeObserver((t) => {
                        let i = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void l({ width: t.inlineSize, height: t.blockSize });
                            }
                            l(s.getBoundingClientRect());
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
                    });
                    return (
                        n.observe(s, { box: 'border-box' }),
                        () => {
                            n.unobserve(s);
                        }
                    );
                },
                c = { passive: !0 },
                u = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = () => {
                        t({ width: s.innerWidth, height: s.innerHeight });
                    };
                    return (
                        i(),
                        s.addEventListener('resize', i, c),
                        () => {
                            s.removeEventListener('resize', i);
                        }
                    );
                },
                m = 'undefined' == typeof window || 'onscrollend' in window,
                g = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let l = 0,
                        n =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : o(
                                      i,
                                      () => {
                                          t(l, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (i) => () => {
                            let { horizontal: r, isRtl: o } = e.options;
                            (l = r ? s.scrollLeft * ((o && -1) || 1) : s.scrollTop), n(), t(l, i);
                        },
                        a = r(!0),
                        d = r(!1);
                    d(), s.addEventListener('scroll', a, c);
                    let h = e.options.useScrollendEvent && m;
                    return (
                        h && s.addEventListener('scrollend', d, c),
                        () => {
                            s.removeEventListener('scroll', a), h && s.removeEventListener('scrollend', d);
                        }
                    );
                },
                f = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let l = 0,
                        n =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : o(
                                      i,
                                      () => {
                                          t(l, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (i) => () => {
                            (l = s[e.options.horizontal ? 'scrollX' : 'scrollY']), n(), t(l, i);
                        },
                        a = r(!0),
                        d = r(!1);
                    d(), s.addEventListener('scroll', a, c);
                    let h = e.options.useScrollendEvent && m;
                    return (
                        h && s.addEventListener('scrollend', d, c),
                        () => {
                            s.removeEventListener('scroll', a), h && s.removeEventListener('scrollend', d);
                        }
                    );
                },
                _ = (e, t, s) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[s.options.horizontal ? 'inlineSize' : 'blockSize']);
                    }
                    return Math.round(e.getBoundingClientRect()[s.options.horizontal ? 'width' : 'height']);
                },
                p = (e, { adjustments: t = 0, behavior: s }, i) => {
                    var l, n;
                    null == (n = null == (l = i.scrollElement) ? void 0 : l.scrollTo) || n.call(l, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                },
                v = (e, { adjustments: t = 0, behavior: s }, i) => {
                    var l, n;
                    null == (n = null == (l = i.scrollElement) ? void 0 : l.scrollTo) || n.call(l, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                };
            class E {
                constructor(e) {
                    (this.unsubs = []),
                        (this.scrollElement = null),
                        (this.targetWindow = null),
                        (this.isScrolling = !1),
                        (this.scrollToIndexTimeoutId = null),
                        (this.measurementsCache = []),
                        (this.itemSizeCache = new Map()),
                        (this.pendingMeasuredCacheIndexes = []),
                        (this.scrollRect = null),
                        (this.scrollOffset = null),
                        (this.scrollDirection = null),
                        (this.scrollAdjustments = 0),
                        (this.elementsCache = new Map()),
                        (this.observer = (() => {
                            let e = null,
                                t = () =>
                                    e ||
                                    (this.targetWindow && this.targetWindow.ResizeObserver
                                        ? (e = new this.targetWindow.ResizeObserver((e) => {
                                              e.forEach((e) => {
                                                  let t = () => {
                                                      this._measureElement(e.target, e);
                                                  };
                                                  this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t) : t();
                                              });
                                          }))
                                        : null);
                            return {
                                disconnect: () => {
                                    var s;
                                    null == (s = t()) || s.disconnect(), (e = null);
                                },
                                observe: (e) => {
                                    var s;
                                    return null == (s = t()) ? void 0 : s.observe(e, { box: 'border-box' });
                                },
                                unobserve: (e) => {
                                    var s;
                                    return null == (s = t()) ? void 0 : s.unobserve(e);
                                },
                            };
                        })()),
                        (this.range = null),
                        (this.setOptions = (e) => {
                            Object.entries(e).forEach(([t, s]) => {
                                void 0 === s && delete e[t];
                            }),
                                (this.options = {
                                    debug: !1,
                                    initialOffset: 0,
                                    overscan: 1,
                                    paddingStart: 0,
                                    paddingEnd: 0,
                                    scrollPaddingStart: 0,
                                    scrollPaddingEnd: 0,
                                    horizontal: !1,
                                    getItemKey: a,
                                    rangeExtractor: d,
                                    onChange: () => {},
                                    measureElement: _,
                                    initialRect: { width: 0, height: 0 },
                                    scrollMargin: 0,
                                    gap: 0,
                                    indexAttribute: 'data-index',
                                    initialMeasurementsCache: [],
                                    lanes: 1,
                                    isScrollingResetDelay: 150,
                                    enabled: !0,
                                    isRtl: !1,
                                    useScrollendEvent: !1,
                                    useAnimationFrameWithResizeObserver: !1,
                                    ...e,
                                });
                        }),
                        (this.notify = (e) => {
                            var t, s;
                            null == (s = (t = this.options).onChange) || s.call(t, this, e);
                        }),
                        (this.maybeNotify = n(
                            () => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]),
                            (e) => {
                                this.notify(e);
                            },
                            {
                                key: !1,
                                debug: () => this.options.debug,
                                initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null],
                            },
                        )),
                        (this.cleanup = () => {
                            this.unsubs.filter(Boolean).forEach((e) => e()),
                                (this.unsubs = []),
                                this.observer.disconnect(),
                                (this.scrollElement = null),
                                (this.targetWindow = null);
                        }),
                        (this._didMount = () => () => {
                            this.cleanup();
                        }),
                        (this._willUpdate = () => {
                            var e;
                            let t = this.options.enabled ? this.options.getScrollElement() : null;
                            if (this.scrollElement !== t) {
                                if ((this.cleanup(), !t)) return void this.maybeNotify();
                                (this.scrollElement = t),
                                    this.scrollElement && 'ownerDocument' in this.scrollElement
                                        ? (this.targetWindow = this.scrollElement.ownerDocument.defaultView)
                                        : (this.targetWindow = (null == (e = this.scrollElement) ? void 0 : e.window) ?? null),
                                    this.elementsCache.forEach((e) => {
                                        this.observer.observe(e);
                                    }),
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 }),
                                    this.unsubs.push(
                                        this.options.observeElementRect(this, (e) => {
                                            (this.scrollRect = e), this.maybeNotify();
                                        }),
                                    ),
                                    this.unsubs.push(
                                        this.options.observeElementOffset(this, (e, t) => {
                                            (this.scrollAdjustments = 0),
                                                (this.scrollDirection = t ? (this.getScrollOffset() < e ? 'forward' : 'backward') : null),
                                                (this.scrollOffset = e),
                                                (this.isScrolling = t),
                                                this.maybeNotify();
                                        }),
                                    );
                            }
                        }),
                        (this.getSize = () =>
                            this.options.enabled
                                ? ((this.scrollRect = this.scrollRect ?? this.options.initialRect), this.scrollRect[this.options.horizontal ? 'width' : 'height'])
                                : ((this.scrollRect = null), 0)),
                        (this.getScrollOffset = () =>
                            this.options.enabled
                                ? ((this.scrollOffset =
                                      this.scrollOffset ?? ('function' == typeof this.options.initialOffset ? this.options.initialOffset() : this.options.initialOffset)),
                                  this.scrollOffset)
                                : ((this.scrollOffset = null), 0)),
                        (this.getFurthestMeasurement = (e, t) => {
                            let s = new Map(),
                                i = new Map();
                            for (let l = t - 1; l >= 0; l--) {
                                let t = e[l];
                                if (s.has(t.lane)) continue;
                                let n = i.get(t.lane);
                                if ((null == n || t.end > n.end ? i.set(t.lane, t) : t.end < n.end && s.set(t.lane, !0), s.size === this.options.lanes)) break;
                            }
                            return i.size === this.options.lanes
                                ? Array.from(i.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = n(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, s, i, l) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: s, getItemKey: i, enabled: l }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = n(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: s, getItemKey: i, enabled: l }, n) => {
                                if (!l) return (this.measurementsCache = []), this.itemSizeCache.clear(), [];
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let r = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let o = this.measurementsCache.slice(0, r);
                                for (let l = r; l < e; l++) {
                                    let e = i(l),
                                        r = 1 === this.options.lanes ? o[l - 1] : this.getFurthestMeasurement(o, l),
                                        a = r ? r.end + this.options.gap : t + s,
                                        d = n.get(e),
                                        h = 'number' == typeof d ? d : this.options.estimateSize(l),
                                        c = a + h,
                                        u = r ? r.lane : l % this.options.lanes;
                                    o[l] = { index: l, start: a, size: h, end: c, key: e, lane: u };
                                }
                                return (this.measurementsCache = o), o;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = n(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, s, i) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: s, lanes: i }) {
                                              let l = e.length - 1,
                                                  n = b(0, l, (t) => e[t].start, s),
                                                  r = n;
                                              if (1 === i) for (; r < l && e[r].end < s + t; ) r++;
                                              else if (i > 1) {
                                                  let o = Array(i).fill(0);
                                                  for (; r < l && o.some((e) => e < s + t); ) {
                                                      let t = e[r];
                                                      (o[t.lane] = t.end), r++;
                                                  }
                                                  let a = Array(i).fill(s + t);
                                                  for (; n > 0 && a.some((e) => e >= s); ) {
                                                      let t = e[n];
                                                      (a[t.lane] = t.start), n--;
                                                  }
                                                  (n = Math.max(0, n - (n % i))), (r = Math.min(l, r + (i - 1 - (r % i))));
                                              }
                                              return { startIndex: n, endIndex: r };
                                          })({ measurements: e, outerSize: t, scrollOffset: s, lanes: i })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = n(
                            () => {
                                let e = null,
                                    t = null,
                                    s = this.calculateRange();
                                return (
                                    s && ((e = s.startIndex), (t = s.endIndex)),
                                    this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                                    [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
                                );
                            },
                            (e, t, s, i, l) => (null === i || null === l ? [] : e({ startIndex: i, endIndex: l, overscan: t, count: s })),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (e) => {
                            let t = this.options.indexAttribute,
                                s = e.getAttribute(t);
                            return s ? parseInt(s, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
                        }),
                        (this._measureElement = (e, t) => {
                            let s = this.indexFromElement(e),
                                i = this.measurementsCache[s];
                            if (!i) return;
                            let l = i.key,
                                n = this.elementsCache.get(l);
                            n !== e && (n && this.observer.unobserve(n), this.observer.observe(e), this.elementsCache.set(l, e)),
                                e.isConnected && this.resizeItem(s, this.options.measureElement(e, t, this));
                        }),
                        (this.resizeItem = (e, t) => {
                            let s = this.measurementsCache[e];
                            if (!s) return;
                            let i = t - (this.itemSizeCache.get(s.key) ?? s.size);
                            0 !== i &&
                                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(s, i, this)
                                    : s.start < this.getScrollOffset() + this.scrollAdjustments) &&
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: (this.scrollAdjustments += i), behavior: void 0 }),
                                this.pendingMeasuredCacheIndexes.push(s.index),
                                (this.itemSizeCache = new Map(this.itemSizeCache.set(s.key, t))),
                                this.notify(!1));
                        }),
                        (this.measureElement = (e) => {
                            if (!e)
                                return void this.elementsCache.forEach((e, t) => {
                                    e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t));
                                });
                            this._measureElement(e, void 0);
                        }),
                        (this.getVirtualItems = n(
                            () => [this.getVirtualIndexes(), this.getMeasurements()],
                            (e, t) => {
                                let s = [];
                                for (let i = 0, l = e.length; i < l; i++) {
                                    let l = t[e[i]];
                                    s.push(l);
                                }
                                return s;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length) return r(t[b(0, t.length - 1, (e) => r(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, s = 0) => {
                            let i = this.getSize(),
                                l = this.getScrollOffset();
                            'auto' === t && (t = e >= l + i ? 'end' : 'start'), 'center' === t ? (e += (s - i) / 2) : 'end' === t && (e -= i);
                            let n = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[n]
                                            : this.scrollElement[n]
                                        : 0) - i,
                                    e,
                                ),
                                0,
                            );
                        }),
                        (this.getOffsetForIndex = (e, t = 'auto') => {
                            e = Math.max(0, Math.min(e, this.options.count - 1));
                            let s = this.measurementsCache[e];
                            if (!s) return;
                            let i = this.getSize(),
                                l = this.getScrollOffset();
                            if ('auto' === t)
                                if (s.end >= l + i - this.options.scrollPaddingEnd) t = 'end';
                                else {
                                    if (!(s.start <= l + this.options.scrollPaddingStart)) return [l, t];
                                    t = 'start';
                                }
                            let n = 'end' === t ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
                            return [this.getOffsetForAlignment(n, t, s.size), t];
                        }),
                        (this.isDynamicMode = () => this.elementsCache.size > 0),
                        (this.cancelScrollToIndex = () => {
                            null !== this.scrollToIndexTimeoutId &&
                                this.targetWindow &&
                                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), (this.scrollToIndexTimeoutId = null));
                        }),
                        (this.scrollToOffset = (e, { align: t = 'start', behavior: s } = {}) => {
                            this.cancelScrollToIndex(),
                                'smooth' === s && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getOffsetForAlignment(e, t), { adjustments: void 0, behavior: s });
                        }),
                        (this.scrollToIndex = (e, { align: t = 'auto', behavior: s } = {}) => {
                            (e = Math.max(0, Math.min(e, this.options.count - 1))),
                                this.cancelScrollToIndex(),
                                'smooth' === s && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.');
                            let i = this.getOffsetForIndex(e, t);
                            if (!i) return;
                            let [l, n] = i;
                            this._scrollToOffset(l, { adjustments: void 0, behavior: s }),
                                'smooth' !== s &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                                        if (((this.scrollToIndexTimeoutId = null), this.elementsCache.has(this.options.getItemKey(e)))) {
                                            let [t] = r(this.getOffsetForIndex(e, n));
                                            1 > Math.abs(t - this.getScrollOffset()) || this.scrollToIndex(e, { align: n, behavior: s });
                                        } else this.scrollToIndex(e, { align: n, behavior: s });
                                    }));
                        }),
                        (this.scrollBy = (e, { behavior: t } = {}) => {
                            this.cancelScrollToIndex(),
                                'smooth' === t && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getScrollOffset() + e, { adjustments: void 0, behavior: t });
                        }),
                        (this.getTotalSize = () => {
                            var e;
                            let t,
                                s = this.getMeasurements();
                            if (0 === s.length) t = this.options.paddingStart;
                            else if (1 === this.options.lanes) t = (null == (e = s[s.length - 1]) ? void 0 : e.end) ?? 0;
                            else {
                                let e = Array(this.options.lanes).fill(null),
                                    i = s.length - 1;
                                for (; i > 0 && e.some((e) => null === e); ) {
                                    let t = s[i];
                                    null === e[t.lane] && (e[t.lane] = t.end), i--;
                                }
                                t = Math.max(...e.filter((e) => null !== e));
                            }
                            return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
                        }),
                        (this._scrollToOffset = (e, { adjustments: t, behavior: s }) => {
                            this.options.scrollToFn(e, { behavior: s, adjustments: t }, this);
                        }),
                        (this.measure = () => {
                            (this.itemSizeCache = new Map()), this.notify(!1);
                        }),
                        this.setOptions(e);
                }
            }
            let b = (e, t, s, i) => {
                    for (; e <= t; ) {
                        let l = ((e + t) / 2) | 0,
                            n = s(l);
                        if (n < i) e = l + 1;
                        else {
                            if (!(n > i)) return l;
                            t = l - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                S = 'undefined' != typeof document ? i.useLayoutEffect : i.useEffect;
            function C(e) {
                let t = i.useReducer(() => ({}), {})[1],
                    s = {
                        ...e,
                        onChange: (s, i) => {
                            var n;
                            i ? (0, l.flushSync)(t) : t(), null == (n = e.onChange) || n.call(e, s, i);
                        },
                    },
                    [n] = i.useState(() => new E(s));
                return n.setOptions(s), S(() => n._didMount(), []), S(() => n._willUpdate()), n;
            }
            function w(e) {
                return C({ observeElementRect: h, observeElementOffset: g, scrollToFn: v, ...e });
            }
            function x(e) {
                return C({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: u,
                    observeElementOffset: f,
                    scrollToFn: p,
                    initialOffset: () => ('undefined' != typeof document ? window.scrollY : 0),
                    ...e,
                });
            }
        },
        95329: (e, t, s) => {
            'use strict';
            s.d(t, { M: () => i });
            var i = (function (e) {
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
        96471: (e) => {
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
    },
    (e) => {
        e.O(
            0,
            [
                7034, 3379, 3647, 8497, 5718, 6347, 7258, 7680, 3183, 7972, 8868, 7231, 9763, 5108, 5583, 5976, 5367, 4413, 1914, 6723, 4761, 992, 3931, 6639, 6706, 1311,
                5201, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1417, 9755, 6477, 7275, 2586, 8347, 4522, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 2563,
                6341, 3759, 4797, 4638, 277, 8160, 1385, 9710, 4220, 9562, 7358,
            ],
            () => e((e.s = 19947)),
        ),
            (_N_E = e.O());
    },
]);
