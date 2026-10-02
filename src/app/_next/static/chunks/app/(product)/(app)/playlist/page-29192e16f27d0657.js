(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8209],
    {
        2160: (e) => {
            e.exports = {
                staticItem: 'TextHeader_staticItem__OMNew',
                staticItem_hide: 'TextHeader_staticItem_hide__JtdeC',
                backdrop: 'TextHeader_backdrop__39FkE',
                stickyItem: 'TextHeader_stickyItem__WF2hh',
                container: 'TextHeader_container__I0pVO',
                stickyItem_scrolling: 'TextHeader_stickyItem_scrolling__YPBOL',
            };
        },
        5671: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => C }));
            var i = r(25839),
                a = r(84059),
                n = r(74631),
                s = r(80499),
                l = r(82706),
                o = r(28410),
                d = r(93690),
                c = r(36159),
                u = r(25895),
                _ = r(19835);
            let h = o.gK
                    .compose(
                        o.gK.model('PlaylistPersonalPage', {
                            errorStatusCode: o.gK.maybeNull(o.gK.number),
                            playlistUuid: o.gK.maybe(o.gK.string),
                            isReady: o.gK.optional(o.gK.boolean, !1),
                            dummyCoverUrl: o.gK.maybe(o.gK.string),
                            dummyDescription: o.gK.maybe(o.gK.string),
                            title: o.gK.maybe(o.gK.string),
                        }),
                        _.X,
                    )
                    .views((e) => ({
                        getUrl(t) {
                            if (!e.playlistUuid) return '';
                            let { href: r } = (0, u.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid }, query: t });
                            return r;
                        },
                        get url() {
                            if (!e.playlistUuid) return '';
                            let { href: t } = (0, u.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                            return t;
                        },
                        get isNotFound() {
                            let t = e.errorStatusCode === d.X1.NOT_FOUND || e.errorStatusCode === d.X1.BAD_REQUEST;
                            return e.loadingState === c.G.REJECT && t;
                        },
                    }))
                    .actions((e) => ({
                        getPlaylistPersonalDetails: (0, o.L3)(function* (t) {
                            if (!(0, o._n)(e)) return;
                            let { playlistsResource: r, modelActionsLogger: i } = (0, o._$)(e);
                            if (e.loadingState !== c.G.PENDING)
                                try {
                                    var a, n;
                                    e.loadingState = c.G.PENDING;
                                    let i = yield r.getPlaylistPersonal({ playlistId: t });
                                    if ((null == (a = i.error) ? void 0 : a.name) === 'no-such-playlist') {
                                        ((e.errorStatusCode = d.X1.NOT_FOUND), (e.loadingState = c.G.REJECT));
                                        return;
                                    }
                                    ((e.isReady = i.ready),
                                        (e.playlistUuid = i.data.playlistUuid),
                                        (e.dummyCoverUrl = null == (n = i.data.dummyCover) ? void 0 : n.uri),
                                        (e.dummyDescription = i.data.dummyDescription),
                                        (e.title = i.data.title),
                                        e.loadingState !== c.G.IDLE && (e.loadingState = c.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t),
                                        t instanceof d.GX &&
                                            (t.statusCode === d.X1.NOT_FOUND || t.statusCode === d.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = d.X1.NOT_FOUND),
                                        e.loadingState !== c.G.IDLE && (e.loadingState = c.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = c.G.IDLE),
                                (e.errorStatusCode = null),
                                (e.isReady = !1),
                                (e.playlistUuid = void 0),
                                (e.dummyCoverUrl = void 0),
                                (e.dummyDescription = void 0),
                                (e.title = void 0));
                        },
                    })),
                m = { loadingState: c.G.IDLE },
                { pageStoreProvider: g } = (0, s.W)({ createStore: (e) => h.create(m, e), patchKey: l.n.PLAYLIST_PERSONAL });
            var p = r(88204),
                v = r(30716),
                E = r(82298),
                y = r(4254),
                S = r(6323),
                f = r(10603),
                N = r(5962),
                T = r.n(N);
            let x = (0, p.PA)(() => {
                    let { dummyCoverUrl: e, dummyDescription: t, title: r } = (0, s.s)(l.n.PLAYLIST_PERSONAL);
                    return (0, i.jsxs)('div', {
                        className: T().root,
                        children: [
                            (0, i.jsx)(f.Y, {}),
                            (0, i.jsx)(S.B, { src: e, size: 200, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0, className: T().cover }),
                            r && (0, i.jsx)(y.DZ, { className: (0, E.$)(T().title, T().important), variant: 'h1', size: 'xs', children: r }),
                            t &&
                                (0, i.jsx)(y.HL, {
                                    className: (0, E.$)(T().text, T().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: t,
                                }),
                        ],
                    });
                }),
                w = (0, p.PA)((e) => {
                    let { params: t, searchParams: r } = e,
                        o = (0, s.s)(l.n.PLAYLIST_PERSONAL),
                        d = o.getUrl(r);
                    if (
                        ((0, n.useEffect)(() => {
                            o.isNeededToLoad && o.getPlaylistPersonalDetails(t.playlistId);
                        }, [o.isNeededToLoad, t.playlistId, o]),
                        (0, n.useEffect)(
                            () => () => {
                                o.reset();
                            },
                            [o],
                        ),
                        (0, v.J)(o.isResolved),
                        (o.isNotFound || o.isRejected) && (0, a.notFound)(),
                        o.isResolved && !o.isReady)
                    )
                        return (o.dummyDescription || (0, a.notFound)(), (0, i.jsx)(x, {}));
                    o.isResolved && o.isReady && (0, a.redirect)(d);
                });
            var P = r(16714);
            let C = () => {
                let e = (0, a.useSearchParams)().get('playlistId');
                return (
                    e || (0, a.notFound)(),
                    (0, i.jsx)(g, {
                        children: (0, i.jsx)(n.Suspense, { fallback: (0, i.jsx)(P.MainSuspenseLoader, {}), children: (0, i.jsx)(w, { params: { playlistId: e } }) }),
                    })
                );
            };
        },
        5962: (e) => {
            e.exports = {
                root: 'PlaylistPersonalDummyPage_root__tGxHG',
                cover: 'PlaylistPersonalDummyPage_cover__XcCD1',
                title: 'PlaylistPersonalDummyPage_title__ZSf9O',
                important: 'PlaylistPersonalDummyPage_important__uEHGe',
                text: 'PlaylistPersonalDummyPage_text__ci30d',
            };
        },
        6323: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => o });
            var i = r(25839),
                a = r(74631),
                n = r(61493),
                s = r(23818);
            let l = (e) => {
                    let { isAvailable: t = !0, className: r, fallbackIconSize: a, forwardRef: l, ...o } = e;
                    return t
                        ? (0, i.jsx)(s._V, { ref: l, className: r, fallbackIconSize: a, ...o, 'data-test-id': n.S7.ENTITY_COVER_IMAGE })
                        : (0, i.jsx)(s.Ab, { className: r, iconSize: a, iconVariant: 'unavailable', 'data-test-id': n.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                o = (0, a.forwardRef)((e, t) => (0, i.jsx)(l, { forwardRef: t, ...e }));
        },
        8254: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        10603: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => F, V: () => Y });
            var i = r(25839),
                a = r(88204),
                n = r(38656),
                s = r(68406),
                l = r(5180),
                o = r(82298),
                d = r(74631),
                c = r(61493),
                u = r(71035),
                _ = r(68934),
                h = r(4254),
                m = r(97828),
                g = r(27954),
                p = r(14797),
                v = r(15270),
                E = r(61039),
                y = r.n(E),
                S = r(27625),
                f = r(32582),
                N = r.n(f);
            let T = 'header-block-controls',
                x = (0, a.PA)((e) => {
                    let { showControls: t = !0, ...r } = e,
                        { isScrolledTitle: a, isScrolledChild: n, isScrolling: s, title: l, titleElement: E, child: f, childElement: x } = (0, d.useContext)(S.B),
                        {
                            settings: { isMobile: w, browserInfo: P },
                            user: { hasPlus: C, isAuthorized: I },
                        } = (0, g.g)(),
                        [b, A] = (0, _.d)(),
                        H = !C && !(null == P ? void 0 : P.isTouch),
                        {
                            openPaymentWidgetModal: R,
                            saveOfferAndAuthorize: L,
                            isShimmerActive: O,
                            isShimmerVisible: k,
                            mainText: j,
                            mainTextA11y: B,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !C, offerElement: { element: b, intersectionPropertyId: T, isVisible: a, requireTransition: !0 } }),
                        D = (0, u.c)(() => {
                            var e;
                            null == E || null == (e = E.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        U = (0, u.c)(() => {
                            var e;
                            null == x || null == (e = x.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        G = (0, u.c)(() => {
                            if (!I) return void L();
                            R();
                        });
                    return (0, i.jsx)('header', {
                        className: (0, o.$)(N().root, { [N().root_sticky]: s, [N().root_withChildren]: n, [N().root_blurWithTitle]: !a }),
                        'data-test-id': c.S7.BRANDED_PLAYLIST_HEADER,
                        ...r,
                        children: (0, i.jsx)('div', {
                            className: N().header,
                            children: (0, i.jsxs)('div', {
                                className: (0, o.$)(N().container, { [N().container_withMultipleChildren]: (0, d.isValidElement)(f) }),
                                children: [
                                    (0, i.jsx)('div', { className: N().backdrop }),
                                    (0, i.jsxs)('div', {
                                        className: N().leftBlock,
                                        children: [
                                            t && (0, i.jsx)(v.L, { withForwardControl: !w, className: N().actions }),
                                            a &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)(h.HL, {
                                                            variant: 'div',
                                                            type: 'text',
                                                            className: (0, o.$)(N().title, { [N().title_show]: a, [N().title_withOffset]: t }),
                                                            lineClamp: 1,
                                                            onClick: D,
                                                            title: s && l ? l : '',
                                                            'aria-hidden': !0,
                                                            children: l,
                                                        }),
                                                        H &&
                                                            (0, i.jsx)(p.b, {
                                                                mainText: j,
                                                                ariaLabel: B,
                                                                mainTextFontSize: 'm',
                                                                ref: A,
                                                                onClick: G,
                                                                isShimmerActive: O,
                                                                isShimmerVisible: k,
                                                                className: y().plusButton,
                                                                'data-intersection-property-id': T,
                                                                'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                                            }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                    (0, d.isValidElement)(f) &&
                                        (0, i.jsx)('div', { onClick: U, className: (0, o.$)(N().child, { [N().child_show]: n }), 'aria-hidden': !0, children: f }),
                                ],
                            }),
                        }),
                    });
                });
            var w = r(37772),
                P = r.n(w);
            let C = 'header-block-controls',
                I = (e) => {
                    let { className: t, children: r, onClick: a, 'aria-hidden': n, 'data-test-id': s } = e,
                        { isScrolling: l } = (0, d.useContext)(S.B),
                        {
                            user: { hasPlus: h, isAuthorized: v },
                            settings: { browserInfo: E },
                        } = (0, g.g)(),
                        f = !h && !(null == E ? void 0 : E.isTouch),
                        [N, T] = (0, _.d)(),
                        {
                            openPaymentWidgetModal: x,
                            saveOfferAndAuthorize: w,
                            isShimmerActive: I,
                            isShimmerVisible: b,
                            mainText: A,
                            mainTextA11y: H,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !h, offerElement: { element: N, intersectionPropertyId: C, isVisible: l, requireTransition: !0 } }),
                        R = (0, u.c)(() => {
                            if (!v) return void w();
                            x();
                        });
                    return (0, i.jsx)('div', {
                        className: P().root,
                        children: (0, i.jsxs)('div', {
                            className: (0, o.$)(P().container, { [P().container_scrolling]: l }, t),
                            onClick: a,
                            'aria-hidden': n,
                            'data-test-id': c.S7.STICKY_HEADER,
                            children: [
                                (0, i.jsx)('div', { className: P().backdrop }),
                                (0, i.jsx)('div', { className: P().children, 'data-test-id': s, children: r }),
                                f &&
                                    (0, i.jsx)(p.b, {
                                        mainText: A,
                                        ariaLabel: H,
                                        mainTextFontSize: 'm',
                                        ref: T,
                                        onClick: R,
                                        isShimmerActive: I,
                                        isShimmerVisible: b,
                                        className: (0, o.$)(y().plusButton, P().plusButton, { [P().plusButton_show]: l }),
                                        'data-intersection-property-id': C,
                                        'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                    }),
                            ],
                        }),
                    });
                };
            var b = r(44482),
                A = r.n(b);
            let H = (0, a.PA)((e) => {
                let {
                        className: t,
                        children: r,
                        stickyChild: a,
                        isScrolledToTop: n = !0,
                        staticClassName: s,
                        stickyClassName: l,
                        compositeHeaderRef: u,
                        'aria-hidden': _,
                    } = e,
                    { isScrolling: h, scrollElement: m } = (0, d.useContext)(S.B),
                    g = (0, d.useRef)(null),
                    p = (0, d.useCallback)(() => {
                        if (m && n) m.scrollTo({ top: 0, behavior: 'smooth' });
                        else {
                            var e;
                            null == g || null == (e = g.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }
                    }, [g, m, n]);
                return (0, i.jsxs)('header', {
                    className: (0, o.$)(A().root, t),
                    'aria-hidden': _,
                    ref: u,
                    'data-test-id': c.S7.COMPOSITE_HEADER_CONTAINER,
                    children: [
                        (0, i.jsx)('div', { className: (0, o.$)(A().static, { [A().static_hidden]: h }, s), ref: g, 'data-test-id': c.S7.COMPOSITE_HEADER, children: r }),
                        (0, i.jsx)(I, { className: l, onClick: p, 'aria-hidden': !0, 'data-test-id': c.S7.COMPOSITE_STICKY_HEADER, children: a }),
                    ],
                });
            });
            var R = r(83798),
                L = r.n(R);
            let O = 'header-block-controls',
                k = (0, a.PA)((e) => {
                    let { headerRef: t, ...r } = e,
                        { isScrolledTitle: a, isScrolledChild: n, isScrolling: s, title: l, titleElement: E, child: f, childElement: N } = (0, d.useContext)(S.B),
                        {
                            settings: { isMobile: T, browserInfo: x },
                            user: { hasPlus: w, isAuthorized: P },
                        } = (0, g.g)(),
                        [C, I] = (0, _.d)(),
                        b = !w && !(null == x ? void 0 : x.isTouch),
                        {
                            openPaymentWidgetModal: A,
                            saveOfferAndAuthorize: H,
                            isShimmerActive: R,
                            isShimmerVisible: k,
                            mainText: j,
                            mainTextA11y: B,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !w, offerElement: { element: C, intersectionPropertyId: O, isVisible: a, requireTransition: !0 } }),
                        D = (0, u.c)(() => {
                            var e;
                            null == E || null == (e = E.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        U = (0, u.c)(() => {
                            var e;
                            null == N || null == (e = N.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        G = (0, u.c)(() => {
                            if (!P) return void H();
                            A();
                        });
                    return (0, i.jsx)('header', {
                        className: (0, o.$)(y().inner, L().root, { [L().root_sticky]: s, [L().root_withChildren]: n }),
                        ref: t,
                        'data-test-id': c.S7.INNER_HEADER,
                        ...r,
                        children: (0, i.jsx)('div', {
                            className: y().header,
                            children: (0, i.jsxs)('div', {
                                className: y().container,
                                children: [
                                    (0, i.jsx)('div', { className: L().backdrop }),
                                    (0, i.jsxs)('div', {
                                        className: y().leftBlock,
                                        children: [
                                            (0, i.jsx)(v.L, { withForwardControl: !T, className: L().actions }),
                                            (0, i.jsx)(h.HL, {
                                                variant: 'div',
                                                type: 'text',
                                                className: (0, o.$)(y().title, L().title, { [L().title_show]: a }),
                                                lineClamp: 1,
                                                onClick: D,
                                                title: s && l ? l : '',
                                                'aria-hidden': !0,
                                                children: l,
                                            }),
                                            b &&
                                                (0, i.jsx)(p.b, {
                                                    mainText: j,
                                                    ariaLabel: B,
                                                    mainTextFontSize: 'm',
                                                    ref: I,
                                                    onClick: G,
                                                    isShimmerActive: R,
                                                    isShimmerVisible: k,
                                                    className: (0, o.$)(y().plusButton, L().plusButton, { [L().plusButton_show]: a }),
                                                    'data-intersection-property-id': O,
                                                    'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                                }),
                                        ],
                                    }),
                                    (0, i.jsx)('div', { onClick: U, className: (0, o.$)(L().child, { [L().child_show]: n }), 'aria-hidden': !0, children: f }),
                                ],
                            }),
                        }),
                    });
                });
            var j = r(55142),
                B = r.n(j);
            let D = 'header-block-controls',
                U = (e) => {
                    let { style: t } = e,
                        { isScrolling: r, title: a, titleElement: n, isScrolledTitle: s } = (0, d.useContext)(S.B),
                        {
                            user: { hasPlus: l, isAuthorized: v },
                            settings: { browserInfo: E },
                        } = (0, g.g)(),
                        f = !l && !(null == E ? void 0 : E.isTouch),
                        [N, T] = (0, _.d)(),
                        {
                            openPaymentWidgetModal: x,
                            saveOfferAndAuthorize: w,
                            isShimmerActive: P,
                            isShimmerVisible: C,
                            mainText: I,
                            mainTextA11y: b,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !l, offerElement: { element: N, intersectionPropertyId: D, isVisible: s, requireTransition: !0 } }),
                        A = (0, u.c)(() => {
                            var e;
                            null == n || null == (e = n.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        H = (0, u.c)(() => {
                            if (!v) return void w();
                            x();
                        });
                    return (0, i.jsx)('header', {
                        className: (0, o.$)(y().inner, B().root, { [B().root_visible]: s }),
                        style: t,
                        'data-test-id': c.S7.PROMO_LANDING_HEADER,
                        children: (0, i.jsx)('div', {
                            className: y().header,
                            children: (0, i.jsxs)('div', {
                                className: (0, o.$)(y().container, B().container),
                                children: [
                                    (0, i.jsx)('div', { className: B().backdrop }),
                                    (0, i.jsxs)('div', {
                                        className: y().leftBlock,
                                        children: [
                                            (0, i.jsx)(h.HL, {
                                                variant: 'div',
                                                type: 'text',
                                                className: (0, o.$)(y().title, B().title),
                                                lineClamp: 1,
                                                onClick: A,
                                                title: r && a ? a : '',
                                                'aria-hidden': !0,
                                                children: a,
                                            }),
                                            f &&
                                                (0, i.jsx)(p.b, {
                                                    mainText: I,
                                                    ariaLabel: b,
                                                    mainTextFontSize: 'm',
                                                    ref: T,
                                                    onClick: H,
                                                    isShimmerActive: P,
                                                    isShimmerVisible: C,
                                                    className: y().plusButton,
                                                    'data-intersection-property-id': D,
                                                    'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    });
                };
            var G = r(2160),
                M = r.n(G);
            let K = 'header-block-controls',
                V = (0, a.PA)((e) => {
                    let { className: t, children: r, showControls: a = !0, withForwardControl: n = !0, withBackwardControl: s = !0, disableStickyVariant: l = !1 } = e,
                        { isScrolling: E, title: f, scrollElement: N, isHeaderHidden: T } = (0, d.useContext)(S.B),
                        x = (0, d.useRef)(null),
                        [w, P] = (0, _.d)(),
                        {
                            user: { hasPlus: C, isAuthorized: I },
                            settings: { browserInfo: b },
                        } = (0, g.g)(),
                        A = !C && !(null == b ? void 0 : b.isTouch),
                        {
                            openPaymentWidgetModal: H,
                            saveOfferAndAuthorize: R,
                            isShimmerActive: L,
                            isShimmerVisible: O,
                            mainText: k,
                            mainTextA11y: j,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !C, offerElement: { element: w, intersectionPropertyId: K, isVisible: E, requireTransition: !0 } }),
                        B = (0, u.c)(() => {
                            if (N) N.scrollTo({ top: 0, behavior: 'smooth' });
                            else {
                                var e;
                                null == x || null == (e = x.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                            }
                        }),
                        D = (0, d.useMemo)(() => (0, i.jsx)(h.DZ, { variant: 'h2', weight: 'bold', size: 's', lineClamp: 1, children: f }), [f]),
                        U = a && (n || s),
                        G = (0, u.c)(() => {
                            if (!I) return void R();
                            H();
                        });
                    return (0, i.jsxs)('header', {
                        className: (0, o.$)(M().root, t),
                        'data-test-id': c.S7.TEXT_HEADER_CONTAINER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, o.$)(M().staticItem, { [M().staticItem_hide]: E || T }),
                                ref: x,
                                'data-test-id': c.S7.TEXT_HEADER,
                                children: [U && (0, i.jsx)(v.L, { withForwardControl: n, withBackwardControl: s }), r],
                            }),
                            !l &&
                                (0, i.jsxs)('div', {
                                    className: (0, o.$)(M().stickyItem, { [M().stickyItem_scrolling]: E }),
                                    onClick: B,
                                    'aria-hidden': !0,
                                    'data-test-id': c.S7.TEXT_STICKY_HEADER,
                                    children: [
                                        (0, i.jsx)('div', { className: M().backdrop }),
                                        (0, i.jsxs)('div', {
                                            className: M().container,
                                            children: [U && (0, i.jsx)(v.L, { withForwardControl: n, withBackwardControl: s, shouldFocusOnMount: !1 }), D],
                                        }),
                                        A &&
                                            (0, i.jsx)(p.b, {
                                                mainText: k,
                                                ariaLabel: j,
                                                mainTextFontSize: 'm',
                                                ref: P,
                                                onClick: G,
                                                isShimmerActive: L,
                                                isShimmerVisible: O,
                                                className: y().plusButton,
                                                'data-intersection-property-id': K,
                                                'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                            }),
                                    ],
                                }),
                        ],
                    });
                });
            var Y = (function (e) {
                return (
                    (e.INNER = 'INNER'),
                    (e.TEXT = 'TEXT'),
                    (e.COMPOSITE = 'COMPOSITE'),
                    (e.PROMO_LANDING = 'PROMO_LANDING'),
                    (e.BRANDED_PLAYLIST = 'BRANDED_PLAYLIST'),
                    (e.STICKY = 'STICKY'),
                    e
                );
            })({});
            let F = (0, a.PA)((e) => {
                let {
                    variant: t = 'INNER',
                    style: r,
                    children: a,
                    showControls: o,
                    withBackwardControl: d,
                    withForwardControl: c,
                    className: u = '',
                    stickyChild: _,
                    staticClassName: h,
                    stickyClassName: m,
                    innerHeaderRef: g,
                    compositeHeaderRef: p,
                    disableStickyVariant: v,
                    ...E
                } = e;
                switch (t) {
                    case 'INNER':
                        return (0, i.jsx)(n.r, { page: s.l.HEADER, places: [l.R.BUTTON], children: (0, i.jsx)(k, { headerRef: g, style: r }) });
                    case 'TEXT':
                        return (0, i.jsx)(n.r, {
                            page: s.l.HEADER,
                            places: [l.R.BUTTON],
                            children: (0, i.jsx)(V, { showControls: o, withBackwardControl: d, withForwardControl: c, disableStickyVariant: v, children: a }),
                        });
                    case 'COMPOSITE':
                        return (0, i.jsx)(n.r, {
                            page: s.l.HEADER,
                            places: [l.R.BUTTON],
                            children: (0, i.jsx)(H, { className: u, stickyChild: _, staticClassName: h, stickyClassName: m, compositeHeaderRef: p, ...E, children: a }),
                        });
                    case 'PROMO_LANDING':
                        return (0, i.jsx)(n.r, { page: s.l.HEADER, places: [l.R.BUTTON], children: (0, i.jsx)(U, { style: r }) });
                    case 'BRANDED_PLAYLIST':
                        return (0, i.jsx)(n.r, { page: s.l.HEADER, places: [l.R.BUTTON], children: (0, i.jsx)(x, { showControls: o, children: a }) });
                    case 'STICKY':
                        return (0, i.jsx)('header', {
                            className: u,
                            children: (0, i.jsx)(n.r, { page: s.l.HEADER, places: [l.R.BUTTON], children: (0, i.jsx)(I, { className: m, ...E, children: _ }) }),
                        });
                }
            });
        },
        16714: (e, t, r) => {
            'use strict';
            r.d(t, { MainSuspenseLoader: () => l });
            var i = r(25839),
                a = r(66738),
                n = r(8254),
                s = r.n(n);
            let l = (e) => {
                let { style: t } = e,
                    r = {
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
                return (0, i.jsx)('div', {
                    style: r,
                    children: (0, i.jsx)(a.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: s().icon,
                    }),
                });
            };
        },
        19835: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => n });
            var i = r(28410),
                a = r(36159);
            let n = i.gK.model('LoadingState', { loadingState: i.gK.enumeration(Object.values(a.G)) }).views((e) => ({
                get isNeededToLoad() {
                    return e.loadingState === a.G.IDLE;
                },
                get isLoading() {
                    return e.loadingState === a.G.PENDING;
                },
                get isResolved() {
                    return e.loadingState === a.G.RESOLVE;
                },
                get isRejected() {
                    return e.loadingState === a.G.REJECT;
                },
            }));
        },
        27625: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => i });
            let i = (0, r(74631).createContext)({
                title: null,
                setTitle: () => {},
                titleElement: null,
                scrollElement: null,
                setTitleElement: () => {},
                child: null,
                setChild: () => {},
                childElement: null,
                setChildElement: () => {},
                isScrolledChild: !1,
                isScrolledTitle: !1,
                isScrolling: !1,
                isHeaderHidden: !1,
            });
        },
        27954: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => n, g: () => s });
            var i = r(74631),
                a = r(36432);
            let n = (0, i.createContext)(null);
            function s() {
                let e = (0, i.useContext)(n);
                if (null === e) throw new a.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        30716: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => n });
            var i = r(84059),
                a = r(74631);
            r(93588);
            let n = (e) => {
                let t = (0, i.usePathname)(),
                    [r, n] = (0, a.useState)(!1);
                ((0, a.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), n(!0));
                    }, [e, r, t]));
            };
        },
        32582: (e) => {
            e.exports = {
                backdrop: 'BrandedPlaylistHeader_backdrop__hLImj',
                title: 'BrandedPlaylistHeader_title__gPU9U',
                title_show: 'BrandedPlaylistHeader_title_show__e4u0h',
                show: 'BrandedPlaylistHeader_show__42bNL',
                title_withOffset: 'BrandedPlaylistHeader_title_withOffset__QppO0',
                root: 'BrandedPlaylistHeader_root__jXK4F',
                root_withChildren: 'BrandedPlaylistHeader_root_withChildren__6BMwV',
                root_sticky: 'BrandedPlaylistHeader_root_sticky__E_n81',
                root_blurWithTitle: 'BrandedPlaylistHeader_root_blurWithTitle__lmykd',
                child: 'BrandedPlaylistHeader_child__35wjg',
                child_show: 'BrandedPlaylistHeader_child_show__Uvbef',
                container: 'BrandedPlaylistHeader_container__s66Ay',
                container_withMultipleChildren: 'BrandedPlaylistHeader_container_withMultipleChildren__76B6E',
                header: 'BrandedPlaylistHeader_header__jdTQJ',
                actions: 'BrandedPlaylistHeader_actions__we7tI',
                leftBlock: 'BrandedPlaylistHeader_leftBlock__iSsfy',
            };
        },
        37772: (e) => {
            e.exports = {
                root: 'StickyHeader_root__s_rPg',
                backdrop: 'StickyHeader_backdrop__fCnOw',
                container: 'StickyHeader_container__8mTBx',
                container_scrolling: 'StickyHeader_container_scrolling__nV9EK',
                plusButton: 'StickyHeader_plusButton__80nx5',
                plusButton_show: 'StickyHeader_plusButton_show__lN22Y',
                children: 'StickyHeader_children__5Jlr1',
            };
        },
        44482: (e) => {
            e.exports = { static: 'CompositeHeader_static__pZdrc', static_hidden: 'CompositeHeader_static_hidden__jHPYh' };
        },
        55142: (e) => {
            e.exports = {
                inner: 'PromoLandingHeader_inner__hKls8',
                header: 'PromoLandingHeader_header__gKwtu',
                container: 'PromoLandingHeader_container__JD5rw',
                leftBlock: 'PromoLandingHeader_leftBlock__jEcOR',
                title: 'PromoLandingHeader_title__LqClE',
                plusButton: 'PromoLandingHeader_plusButton__27yUf',
                backdrop: 'PromoLandingHeader_backdrop__AYF3a',
                root: 'PromoLandingHeader_root__zLOun',
                root_visible: 'PromoLandingHeader_root_visible__yB3YQ',
            };
        },
        61039: (e) => {
            e.exports = {
                inner: 'CommonHeader_inner__DFpbr',
                header: 'CommonHeader_header__41HAE',
                container: 'CommonHeader_container__Jgf0s',
                leftBlock: 'CommonHeader_leftBlock__dJUBK',
                title: 'CommonHeader_title__RSbBG',
                plusButton: 'CommonHeader_plusButton__oe8Gh',
            };
        },
        67311: (e, t, r) => {
            'use strict';
            r.d(t, { V8: () => n, si: () => l, fW: () => _, MJ: () => u, jU: () => m, Bx: () => h });
            var i = r(22413);
            function a(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class n {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let s = (0, i.Jt)(e);
                        if (t) {
                            var r, n;
                            return null != (n = null == (r = a(s)) ? void 0 : r.value) ? n : null;
                        }
                        return null != s ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let n = a ? JSON.stringify({ value: t }) : t;
                        (0, i.hZ)(e, n, r);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, i.TF)(e);
                    } catch (e) {}
                }
            }
            function s(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class l {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = s('localStorage');
                    if (!r) return null;
                    try {
                        var i;
                        let n = r.getItem(e) || void 0;
                        if (!t) return n;
                        let s = a(n);
                        if (!s) return null;
                        let l = null != (i = null == s ? void 0 : s.value) ? i : null;
                        if ((null == s ? void 0 : s.expires) && Date.now() > new Date(s.expires).getTime()) return (this.remove(e), null);
                        return l;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    if ('number' == typeof (null == r ? void 0 : r.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * r.expires), (r.expires = e));
                    }
                    let i = s('localStorage');
                    if (i)
                        try {
                            i.setItem(e, JSON.stringify({ value: t, ...r }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var o = r(58025),
                d = r(36432);
            class c extends d.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...i } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...i }),
                        (0, o._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            class u {
                get(e) {
                    throw new c(this.platform, this.type);
                }
                set(e, t, r) {
                    throw new c(this.platform, this.type);
                }
                has(e) {
                    throw new c(this.platform, this.type);
                }
                remove(e) {
                    throw new c(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, o._)(this, 'platform', ''), (0, o._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class _ {
                get(e) {
                    let t = s('sessionStorage');
                    if (!t) return null;
                    try {
                        var r, i, n;
                        let s = null != (i = t.getItem(e)) ? i : void 0;
                        return null != (n = null == (r = a(s)) ? void 0 : r.value) ? n : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let r = s('sessionStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let r = 'object' != typeof t ? t : t.name,
                            i = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            a = e.get(r);
                        null != a && e.set(r, a, i);
                    });
            }
            function m(e) {
                let { name: t, group: r, value: i } = e;
                return i && 0 !== Object.keys(i).length
                    ? i.title
                        ? { [t]: { group: r, value: { ...i, title: r } } }
                        : { [t]: { group: r, value: { title: r, value: i } } }
                    : { [t]: { group: r, value: { title: r } } };
            }
        },
        80499: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => p, s: () => v });
            var i = r(25839),
                a = r(88204),
                n = r(84059),
                s = r(74631),
                l = r(89288),
                o = r(36432),
                d = r(94421),
                c = r(99989),
                u = r(27954),
                _ = r(83382);
            (0, a.eO)(!1);
            let h = (0, s.createContext)(null),
                m = (e) => {
                    let { children: t, store: r, storeKey: a } = e,
                        n = (0, s.useMemo)(() => ({ store: r, storeKey: a }), [r, a]);
                    return (0, i.jsx)(h.Provider, { value: n, children: t });
                },
                g = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: a } = e;
                    return (
                        (0, n.useServerInsertedHTML)(() => {
                            let e = a.current;
                            return ((a.current = []), 0 === e.length)
                                ? null
                                : (0, i.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, l.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(d.O, "'));\n    "))(r, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                p = (e) => {
                    let { createStore: t, patchKey: r } = e,
                        a = () => {
                            var e, t;
                            let i = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], i);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: n, nonce: s } = e,
                                l = (0, _.Y)(),
                                o = (0, u.g)(),
                                { store: h, patchesRef: p } = (0, c.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: a,
                                    patchesUpdatedEventName: d.O,
                                });
                            return (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(g, { nonce: s, patchKey: r, patchesRef: p }), (0, i.jsx)(m, { store: h, storeKey: r, children: n })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, s.useContext)(h);
                if (!r || r.storeKey !== e) {
                    var i;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (i = null == r ? void 0 : r.storeKey) ? i : 'null', expectedStoreKey: e },
                    });
                }
                return r.store;
            }
        },
        82706: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => i });
            let i = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        83382: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => l });
            var i = r(67311),
                a = r(36484),
                n = r(62562),
                s = r(84e3);
            let l = () => {
                let e = (0, n.N)(),
                    t = e.get(a.oo),
                    r = e.get(a.uM),
                    l = e.get(a.ff),
                    o = e.get(a.V4),
                    d = e.get(a.P0),
                    c = (() => {
                        let e = (0, n.N)(),
                            t = e.get(a.$I),
                            r = e.get(a.EN),
                            i = e.get(a.N1),
                            s = e.get(a._1),
                            l = e.get(a.V3),
                            o = e.get(a.Lb),
                            d = e.get(a.wK),
                            c = e.get(a.tz),
                            u = e.get(a.$8),
                            _ = e.get(a.Oo),
                            h = e.get(a.X4),
                            m = e.get(a.O9),
                            g = e.get(a.E),
                            p = e.get(a.wH),
                            v = e.get(a.ok),
                            E = e.get(a.X8),
                            y = e.get(a.yq),
                            S = e.get(a.NN),
                            f = e.get(a.qN),
                            N = e.get(a.ro),
                            T = e.get(a.nM),
                            x = e.get(a.Ut),
                            w = e.get(a.K1),
                            P = e.get(a.eu),
                            C = e.get(a.aE),
                            I = e.get(a.ki),
                            b = e.get(a.c9),
                            A = e.get(a.en),
                            H = e.get(a.jQ),
                            R = e.get(a.cZ),
                            L = e.get(a.Zl),
                            O = e.get(a.CN),
                            k = e.get(a.P1),
                            j = e.get(a.zj),
                            B = e.get(a.re),
                            D = e.get(a.JM),
                            U = e.get(a.Lk),
                            G = e.get(a.$$),
                            M = e.get(a.sv),
                            K = e.get(a.gd),
                            V = e.get(a.Ez),
                            Y = e.get(a.u2),
                            F = e.get(a.TD),
                            $ = e.get(a.dh),
                            X = e.get(a.LC),
                            J = e.get(a.PL),
                            z = e.get(a.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: r,
                            disclaimersResource: i,
                            usersResource: s,
                            landingResource: l,
                            landing3Resource: o,
                            landingBlocksResource: d,
                            albumResource: c,
                            libraryResource: u,
                            tracksResource: _,
                            topResource: h,
                            artistsResource: m,
                            slidesResource: g,
                            redAlertResource: p,
                            rotorResource: v,
                            waveResource: E,
                            searchResource: y,
                            searchPlaylistResource: S,
                            playlistResource: f,
                            playlistsResource: N,
                            pinResource: T,
                            metatagsResource: x,
                            tagResource: w,
                            feedResource: P,
                            pinsResource: C,
                            musicHistoryResource: I,
                            dynamicPagesResource: b,
                            chartResource: A,
                            clipsResource: H,
                            lyricViewsResource: R,
                            nonMusicResource: L,
                            donationResource: O,
                            loaderResource: k,
                            lumenResource: j,
                            prefixlessResource: B,
                            streamsResource: D,
                            filtersResource: U,
                            ugcResource: G,
                            collectionResource: M,
                            adsResource: K,
                            personalResource: V,
                            familyResource: Y,
                            childrenLandingResource: F,
                            promoResource: $,
                            telemetryResource: X,
                            labelsResource: J,
                            concertsResource: z,
                            wordsResource: e.get(a.dA),
                            wheelResource: e.get(a.$Y),
                        };
                    })(),
                    u = (0, s.U)(),
                    _ = (0, n.N)().get(a.TK),
                    h = e.get(a.ni),
                    m = new i.si(),
                    g = new i.fW();
                return {
                    ...c,
                    acqOffers: r,
                    disclaimerDictionary: l,
                    logger: u,
                    modelActionsLogger: _,
                    localStorage: m,
                    sessionStorage: g,
                    containerStorage: t,
                    config: o,
                    clientSafeConfig: d,
                    landingSdk: h,
                };
            };
        },
        83798: (e) => {
            e.exports = {
                title: 'InnerHeader_title__5aVLP',
                title_show: 'InnerHeader_title_show__RvHsQ',
                show: 'InnerHeader_show__ji3KF',
                backdrop: 'InnerHeader_backdrop__iRxvk',
                root: 'InnerHeader_root__u0zu1',
                root_withChildren: 'InnerHeader_root_withChildren__rLTCN',
                root_sticky: 'InnerHeader_root_sticky__baN8o',
                child: 'InnerHeader_child__DGTfK',
                child_show: 'InnerHeader_child_show__7MFTV',
                actions: 'InnerHeader_actions__x6ruG',
                plusButton: 'InnerHeader_plusButton__eH4NP',
                plusButton_show: 'InnerHeader_plusButton_show__jwPtB',
            };
        },
        84e3: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => n });
            var i = r(36484),
                a = r(62562);
            let n = () => (0, a.N)().get(i.Zf);
        },
        91886: (e, t, r) => {
            'use strict';
            r.d(t, { BL: () => c, Gv: () => o, L5: () => d });
            var i,
                a = r(74631),
                n = {
                    597: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let i = r(810),
                            { innerWidth: a = 0, innerHeight: n = 0 } = window;
                        function s(e) {
                            let { top: t, right: r, bottom: i, left: s } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= n) || (i >= 0 && i <= n)) && ((s >= 0 && s <= a) || (r >= 0 && r <= a));
                        }
                        function l(e) {
                            var t, r;
                            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, i)) ? r : e.attributes[0];
                        }
                        function o(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = s),
                            (t.getElementNameByDataAttribute = l),
                            (t.createIntersectionObserver = o),
                            (t.useIntersectionObserver = function (e, r, a) {
                                let [{ freezeOnceVisible: n, preflightCheck: d, ...c }, u = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, a],
                                    [_, h] = (0, i.useState)({}),
                                    m = (0, i.useRef)(new Set()),
                                    g = (0, i.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : o((e) => {
                                                      let t = l(e.target);
                                                      if (t && g) {
                                                          if (m.current.has(t)) return;
                                                          (h((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              n && e.isIntersecting && (m.current.add(t), g.unobserve(e.target)));
                                                      }
                                                  }, c),
                                        [u],
                                    );
                                return (
                                    (0, i.useLayoutEffect)(
                                        () => (
                                            g &&
                                                !u &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (d && (t = s(e.current))) {
                                                            let t = l(e.current);
                                                            h((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || g.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                g && g.disconnect();
                                            }
                                        ),
                                        [u, g, e.length],
                                    ),
                                    _
                                );
                            }));
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(a, 2));
                    },
                },
                s = {},
                l = (function e(t) {
                    var r = s[t];
                    if (void 0 !== r) return r.exports;
                    var i = (s[t] = { exports: {} });
                    return (n[t](i, i.exports, e), i.exports);
                })(597);
            l.__esModule;
            var o = l.createIntersectionObserver;
            l.defaultOptions;
            var d = l.getElementNameByDataAttribute;
            l.isInViewportNow;
            var c = l.useIntersectionObserver;
        },
        91906: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 5671));
        },
        94421: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => a, s: () => i });
            let i = 'yMusicStatePatchesUpdated',
                a = 'yMusicPageStatePatchesUpdated';
        },
        99989: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => n });
            var i = r(28410),
                a = r(74631);
            let n = (e) => {
                let { createStore: t, getPendingPatchBatches: r, patchesUpdatedEventName: n } = e,
                    s = (0, a.useRef)([]),
                    [l] = (0, a.useState)(() => {
                        let e = t();
                        for (let t of r()) (0, i.X6)(e, t);
                        return e;
                    });
                return (
                    (0, a.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of r()) (0, i.X6)(l, e);
                        };
                        return (e(), window.addEventListener(n, e), () => window.removeEventListener(n, e));
                    }, [r, n, l]),
                    { store: l, patchesRef: s }
                );
            };
        },
    },
    (e) => {
        (e.O(0, [3349, 9730, 1107, 6706, 1311, 9212, 260, 9004, 4985, 7839, 1817, 1943, 8577, 3269, 4163, 3246, 3482, 8836, 4475, 5056, 7358], () => e((e.s = 91906))),
            (_N_E = e.O()));
    },
]);
