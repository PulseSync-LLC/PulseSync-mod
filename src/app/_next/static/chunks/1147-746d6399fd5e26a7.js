(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1147],
    {
        1621: (e) => {
            e.exports = {
                root: 'LocationDialogContent_root__BH0fV',
                emptyState: 'LocationDialogContent_emptyState__HKHWl',
                emptyStateTitle: 'LocationDialogContent_emptyStateTitle__OP1_t',
                emptyStateSubtitle: 'LocationDialogContent_emptyStateSubtitle__SRjAW',
            };
        },
        1955: (e) => {
            e.exports = {
                item: 'LocationDialogListItem_item__a0z5H',
                itemText: 'LocationDialogListItem_itemText__t5XG5',
                checkIcon: 'LocationDialogListItem_checkIcon__AfJMx',
            };
        },
        3385: (e) => {
            e.exports = { concertCard: 'TopConcerts_concertCard__h86wP' };
        },
        23569: (e) => {
            e.exports = { root: 'LocationDialogSearchField_root__eYUkc', searchInput: 'LocationDialogSearchField_searchInput__7O9xi' };
        },
        26217: (e) => {
            e.exports = {
                root: 'ConcertsPage_root__olabl',
                container: 'ConcertsPage_container__qS7xA',
                pageHeader: 'ConcertsPage_pageHeader__KyDH4',
                pageTitle: 'ConcertsPage_pageTitle__VViQV',
                locationSelector: 'ConcertsPage_locationSelector__izo2S',
                footer: 'ConcertsPage_footer__GYRwF',
            };
        },
        33572: (e) => {
            e.exports = {
                root: 'TopConcertsCarousel_root__opMbb',
                controls: 'TopConcertsCarousel_controls__c92PW',
                header: 'TopConcertsCarousel_header__3h3Zn',
                carousel: 'TopConcertsCarousel_carousel__uMke6',
                item: 'TopConcertsCarousel_item__fz8lR',
                important: 'TopConcertsCarousel_important__ZcT6Z',
            };
        },
        67529: (e) => {
            e.exports = { root: 'LocationDialogList_root__BjLJb' };
        },
        75511: (e) => {
            e.exports = {
                root: 'LocationDialog_root__mAfDO',
                closeButton: 'LocationDialog_closeButton__gecsT',
                desktopCloseButton: 'LocationDialog_desktopCloseButton__jzdnV',
                header: 'LocationDialog_header__Se7S8',
            };
        },
        83284: (e) => {
            e.exports = {
                root: 'FeedConcerts_root__W7OGN',
                header: 'FeedConcerts_header__Ht1xd',
                container: 'FeedConcerts_container__CONvW',
                column: 'FeedConcerts_column__FpMgx',
                row: 'FeedConcerts_row__HEdtn',
            };
        },
        91147: (e, t, o) => {
            'use strict';
            o.d(t, { km: () => p, h4: () => eS, cw: () => u, k_: () => eT });
            var n = o(42561),
                i = o(51606),
                s = o(22991),
                c = o(16616),
                r = o(54690);
            let a = (e, t, o) => (-1 === o ? e.slice(t) : e.slice(t, t + o)),
                l = i.gK
                    .compose(
                        i.gK.model({
                            selectedLocationId: i.gK.maybeNull(i.gK.number),
                            locations: i.gK.maybeNull(i.gK.array(c.Ot)),
                            isInitialized: i.gK.optional(i.gK.boolean, !1),
                            modal: r.qt,
                            searchText: i.gK.optional(i.gK.string, ''),
                        }),
                        r.XT,
                    )
                    .named('ConcertLocation')
                    .views((e) => ({
                        get isAutoDetect() {
                            return null === e.selectedLocationId;
                        },
                        get selectedLocationName() {
                            var t;
                            if (null === e.selectedLocationId || !e.locations) return null;
                            let o = e.locations.find((t) => t.id === e.selectedLocationId);
                            return null != (t = null == o ? void 0 : o.name) ? t : null;
                        },
                        get hasLocations() {
                            return null !== e.locations && e.locations.length > 0;
                        },
                        get shouldShowShimmer() {
                            return !e.isInitialized || (null !== e.selectedLocationId && e.isLoading && !e.isRejected);
                        },
                        get filteredLocations() {
                            if (!e.locations) return [];
                            let t = e.searchText.trim();
                            if (!t) return e.locations;
                            let o = t.toLowerCase();
                            return e.locations
                                .map((e) => {
                                    let t = e.name.toLowerCase(),
                                        n = null;
                                    return (
                                        t.startsWith(o) ? (n = 0) : t.split(/[\s-]+/).some((e) => e.startsWith(o)) ? (n = 1) : t.includes(o) && (n = 2),
                                        null === n ? null : { location: e, rank: n }
                                    );
                                })
                                .filter((e) => null !== e)
                                .sort((e, t) => (e.rank !== t.rank ? e.rank - t.rank : e.location.name.localeCompare(t.location.name)))
                                .map((e) => e.location);
                        },
                    }))
                    .actions((e) => ({
                        init() {
                            let { containerStorage: t } = (0, i._$)(e),
                                o = t.get(n.cYZ.ConcertLocation);
                            'number' == typeof o && (e.selectedLocationId = o), (e.isInitialized = !0);
                        },
                        getLocations: (0, i.L3)(function* () {
                            let { concertsResource: t, modelActionsLogger: o } = (0, i._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = n.GuX.PENDING;
                                    let o = yield t.getLocations({});
                                    (e.locations = (0, i.wg)(o.locations.map(c.En))), (e.loadingState = n.GuX.RESOLVE);
                                } catch (t) {
                                    o.error(t), (e.loadingState = n.GuX.REJECT);
                                }
                        }),
                        setSelectedLocation(t) {
                            let { containerStorage: o } = (0, i._$)(e);
                            (e.selectedLocationId = t),
                                null === t ? o.remove(n.cYZ.ConcertLocation) : o.set(n.cYZ.ConcertLocation, t, { expires: 365 }),
                                (0, i.Zn)(e).concerts.reloadData();
                        },
                        setSearchText(t) {
                            e.searchText = t;
                        },
                        resetSearchText() {
                            e.searchText = '';
                        },
                        reset() {
                            (e.selectedLocationId = null),
                                (e.locations = null),
                                (e.loadingState = n.GuX.IDLE),
                                (e.isInitialized = !1),
                                (e.searchText = ''),
                                e.modal.close();
                        },
                    })),
                d = i.gK
                    .compose(
                        i.gK.model('ConcertsPageConfig', {
                            topOffset: i.gK.optional(i.gK.number, 0),
                            topLimit: i.gK.optional(i.gK.number, 3),
                            feedOffset: i.gK.optional(i.gK.number, 3),
                            feedLimit: i.gK.optional(i.gK.number, -1),
                        }),
                        r.XT,
                    )
                    .actions((e) => ({
                        getData: (0, i.L3)(function* () {
                            let { concertsResource: t, modelActionsLogger: o } = (0, i._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = n.GuX.PENDING;
                                    let {
                                        config: { feed: o, top: i },
                                    } = yield t.getTabConfig({});
                                    (e.feedLimit = o.limit),
                                        (e.feedOffset = o.offset),
                                        (e.topLimit = i.limit),
                                        (e.topOffset = i.offset),
                                        (e.loadingState = n.GuX.RESOLVE);
                                } catch (t) {
                                    o.error(t), (e.loadingState = n.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = n.GuX.IDLE), (e.feedLimit = -1), (e.feedOffset = 3), (e.topLimit = 3), (e.topOffset = 0);
                        },
                    })),
                u = i.gK
                    .compose(
                        i.gK.model('ConcertsPage', {
                            config: d,
                            landing: s.Ju,
                            locationSelection: l,
                            topConcerts: i.gK.maybeNull(i.gK.array(c.aR)),
                            feedConcerts: i.gK.maybeNull(i.gK.array(c.aR)),
                        }),
                        r.XT,
                        r.pl,
                    )
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading || e.isRejected;
                        },
                        get isShimmerActive() {
                            return e.isLoading;
                        },
                        get isLocationSelectionExperimentEnabled() {
                            let { experiments: t } = (0, i.Zn)(e);
                            return t.checkExperiment(n.zal.WebNextConcertsLocation, 'on');
                        },
                    }))
                    .actions((e) => {
                        let t = (0, i.L3)(function* () {
                            let { concertsResource: t } = (0, i._$)(e),
                                o = {};
                            e.isLocationSelectionExperimentEnabled &&
                                null !== e.locationSelection.selectedLocationId &&
                                (o.locations = [e.locationSelection.selectedLocationId]);
                            let { items: n } = yield t.getFeed(o),
                                { feedConcerts: s, topConcerts: r } = ((e, t) => {
                                    let { topLimit: o, topOffset: n, feedLimit: i, feedOffset: s } = e;
                                    return { topConcerts: a(t, n, o), feedConcerts: a(t, s, i) };
                                })(
                                    e.config,
                                    n.map((e) => (0, c.HN)(e)),
                                );
                            (e.feedConcerts = (0, i.wg)(s)), (e.topConcerts = (0, i.wg)(r));
                        });
                        return {
                            getData: (0, i.L3)(function* () {
                                let { modelActionsLogger: o } = (0, i._$)(e);
                                if (!e.config.isLoading && !e.isLoading)
                                    try {
                                        (e.loadingState = n.GuX.PENDING),
                                            e.isLocationSelectionExperimentEnabled && e.locationSelection.init(),
                                            yield e.config.getData(),
                                            yield t(),
                                            (e.loadingState = n.GuX.RESOLVE);
                                    } catch (t) {
                                        o.error(t), (e.loadingState = n.GuX.REJECT);
                                    }
                            }),
                            reloadData: (0, i.L3)(function* () {
                                let { modelActionsLogger: o } = (0, i._$)(e);
                                try {
                                    (e.loadingState = n.GuX.PENDING), yield t(), (e.loadingState = n.GuX.RESOLVE);
                                } catch (t) {
                                    o.error(t), (e.loadingState = n.GuX.REJECT);
                                }
                            }),
                            reset() {
                                e.config.reset(),
                                    e.landing.reset(),
                                    e.locationSelection.reset(),
                                    (e.loadingState = n.GuX.IDLE),
                                    e.destroyItems([e.topConcerts, e.feedConcerts]);
                            },
                        };
                    });
            var m = o(62936),
                h = o(19718),
                C = o(44020),
                g = o.t(C, 2),
                _ = o(9939);
            let p = (0, h.PA)(() => {
                let { concerts: e } = (0, n.Pjs)();
                return (
                    (0, C.useEffect)(
                        () => () => {
                            e.reset();
                        },
                        [e],
                    ),
                    (0, m.jsx)(_.M, {})
                );
            });
            var x = o(69526),
                b = o(47480),
                L = o(26731),
                f = o(33782),
                j = o(23480),
                S = o(8669),
                T = o(44262),
                I = o(56874),
                E = o(14501),
                N = o(20418),
                A = o(59935),
                y = o(99041),
                k = o(85906),
                v = o(83284),
                O = o.n(v);
            let P = (0, h.PA)(() => {
                let e = (0, C.useId)(),
                    { concerts: t } = (0, n.Pjs)(),
                    { formatMessage: o } = (0, b.A)(),
                    [i, s] = (0, I.d)(),
                    r = (0, n.fBs)(),
                    a = (0, C.useRef)(!1),
                    l = (0, A.c)(() => {
                        var e;
                        return !t.isShimmerVisible && (null == (e = t.feedConcerts) ? void 0 : e.length) ? t.feedConcerts.length : 50;
                    }),
                    {
                        virtualizer: d,
                        rowResizeObserver: u,
                        columnCount: h,
                        indices: g,
                    } = (0, y.LW)({
                        count: l(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: i,
                    }),
                    _ = { '--feed-concerts-height': ''.concat(d.getTotalSize(), 'px'), '--feed-concerts-column-count': h },
                    p = (0, C.useCallback)(
                        (e) => {
                            var o, i, s;
                            let r = null == (o = t.feedConcerts) ? void 0 : o[e];
                            return !r || t.isShimmerVisible
                                ? (0, m.jsx)(c.LY, { isActive: t.isShimmerActive })
                                : (0, m.jsx)(n.Bki, {
                                      objectType: j.ky.Concert,
                                      objectId: r.id,
                                      objectPosX: (e % h) + 1,
                                      objectPosY: Math.floor(e / h) + 1,
                                      objectsCount: null != (s = null == (i = t.feedConcerts) ? void 0 : i.length) ? s : 0,
                                      children: (0, m.jsx)(c.Qb, { concert: r }),
                                  });
                        },
                        [h, t.feedConcerts, t.isShimmerActive, t.isShimmerVisible],
                    );
                return (
                    (0, C.useEffect)(() => {
                        t.isResolved && !a.current && (r(), (a.current = !0));
                    }, [t.isResolved, r]),
                    (0, m.jsxs)('div', {
                        className: O().root,
                        ...(0, S.Am)(S.e8.concerts.CONCERTS_FEED),
                        children: [
                            (0, m.jsx)(k.Tw, { className: O().header, labeledForId: e, title: o({ id: 'concerts.all-concerts' }), headingVariant: 'h2' }),
                            (0, m.jsx)('div', {
                                'aria-labelledby': e,
                                ref: s,
                                style: _,
                                className: O().container,
                                children: d.getVirtualItems().map((e) =>
                                    (0, m.jsx)(
                                        y.Ux,
                                        {
                                            className: O().row,
                                            columnClassName: O().column,
                                            virtualItem: e,
                                            resizeObserver: u,
                                            indices: g,
                                            renderItemByIndex: p,
                                            scrollMargin: d.options.scrollMargin,
                                        },
                                        e.key,
                                    ),
                                ),
                            }),
                        ],
                    })
                );
            });
            var R = o(3385),
                w = o.n(R),
                D = o(79950),
                X = o(21153),
                K = o(33572),
                B = o.n(K);
            let F = (e) => {
                    let { children: t } = e,
                        o = (0, C.useId)(),
                        n = (0, C.useRef)(null),
                        { formatMessage: i } = (0, b.A)();
                    return (0, m.jsxs)('div', {
                        className: B().root,
                        ...(0, S.Am)(S.e8.concerts.CONCERTS_TOP),
                        children: [
                            (0, m.jsx)(k.Tw, {
                                className: B().header,
                                labeledForId: o,
                                title: i({ id: 'concerts.top-for-you' }),
                                controls: (0, m.jsx)(k.X9, { className: B().controls, carouselRef: n }),
                                headingVariant: 'h2',
                            }),
                            (0, m.jsx)(X.Carousel, {
                                className: B().carousel,
                                ref: n,
                                itemClassName: (0, D.$)(B().item, B().important),
                                'aria-labelledby': o,
                                children: t,
                            }),
                        ],
                    });
                },
                G = (e) => Array.from({ length: 10 }, (t, o) => (0, m.jsx)(c.LY, { isActive: e, withPriceButton: !0 }, o)),
                z = (0, h.PA)(() => {
                    let { concerts: e, experiments: t } = (0, n.Pjs)(),
                        o = (0, n.fBs)(),
                        i = (0, C.useRef)(!1),
                        s = t.checkExperiment(n.zal.WebNextConcertsIdentityEventType, 'on'),
                        r = (0, C.useMemo)(() => {
                            var t;
                            return (null == (t = e.topConcerts) ? void 0 : t.length) && !e.isShimmerVisible
                                ? e.topConcerts.map((t, o) => {
                                      var i, r;
                                      return (0, m.jsx)(
                                          n.Bki,
                                          {
                                              objectType: j.ky.Concert,
                                              objectId: t.id,
                                              objectPosX: o + 1,
                                              objectPosY: 1,
                                              objectsCount: null != (r = null == (i = e.topConcerts) ? void 0 : i.length) ? r : 0,
                                              children: (0, m.jsx)('div', {
                                                  className: w().concertCard,
                                                  children: (0, m.jsx)(c.Qb, { withMask: s, withPriceButton: !0, withInlineMeta: !0, concert: t }),
                                              }),
                                          },
                                          t.getKey(o),
                                      );
                                  })
                                : G(e.isShimmerActive);
                        }, [e.isShimmerActive, e.isShimmerVisible, e.topConcerts, s]);
                    return (
                        (0, C.useEffect)(() => {
                            e.isResolved && !i.current && (o(), (i.current = !0));
                        }, [e.isResolved, o]),
                        e.isNeededToLoad && (0, C.use)(e.getData()),
                        (0, m.jsx)(F, { children: r })
                    );
                }),
                H = () => (0, m.jsx)(C.Suspense, { fallback: (0, m.jsx)(F, { children: G(!0) }), children: (0, m.jsx)(z, {}) });
            var Y = o(65438),
                V = o(92229),
                M = o(11584),
                W = o(5099),
                $ = o(85742),
                Q = o(30388),
                Z = o(60188),
                J = o(4714),
                U = o(75511),
                q = o.n(U),
                ee = {
                    810: (e) => {
                        e.exports = g;
                    },
                },
                et = {},
                eo = {};
            (() => {
                Object.defineProperty(eo, '__esModule', { value: !0 }), (eo.useKeyboardNavigation = void 0);
                let e = (function e(t) {
                    var o = et[t];
                    if (void 0 !== o) return o.exports;
                    var n = (et[t] = { exports: {} });
                    return ee[t](n, n.exports, e), n.exports;
                })(810);
                function t(e, t) {
                    return e.current ? Array.from(t ? e.current.querySelectorAll(t) : e.current.children) : [];
                }
                eo.useKeyboardNavigation = function (o) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { navigationItemsSelector: i, activeAttributeName: s = 'aria-selected' } = n,
                        c = (0, e.useCallback)(
                            (e) => {
                                let n = t(o, i);
                                if (!n.length) return;
                                let s = e.target,
                                    c = n.indexOf(s);
                                if (-1 === c) return;
                                let [r] = n,
                                    a = n.at(-1),
                                    l = null;
                                switch (e.key) {
                                    case 'ArrowLeft':
                                    case 'ArrowUp':
                                        l = n[c - 1] || a;
                                        break;
                                    case 'ArrowRight':
                                    case 'ArrowDown':
                                        l = n[c + 1] || r;
                                        break;
                                    case 'Home':
                                        l = r;
                                        break;
                                    case 'End':
                                        l = a;
                                }
                                null !== l && (l.focus(), e.preventDefault());
                            },
                            [i, o],
                        );
                    (0, e.useEffect)(() => {
                        let e = o.current;
                        return null == e || e.addEventListener('keydown', c), () => (null == e ? void 0 : e.removeEventListener('keydown', c));
                    }, [o, c]),
                        (0, e.useEffect)(() => {
                            t(o, i).forEach((e) => {
                                e.hasAttribute(s) && ('true' === e.getAttribute(s) ? (e.tabIndex = 0) : (e.tabIndex = -1));
                            });
                        });
                };
            })(),
                eo.__esModule;
            var en = eo.useKeyboardNavigation,
                ei = o(1955),
                es = o.n(ei);
            let ec = (e) => {
                let { isSelected: t, onSelect: o, children: i, locationId: s, testId: c } = e,
                    r = (0, n.mFl)(),
                    { ref: a, intersectionPropertyId: l } = (0, n.nMI)(),
                    d = (0, A.c)(() => {
                        r({ actionType: j.X2.SearchItemSelected }), o(s);
                    }),
                    u = (0, A.c)((e) => {
                        (e.key === n.vLr.ENTER || e.key === n.vLr.SPACE) && (e.preventDefault(), r({ actionType: j.X2.SearchItemSelected }), o(s));
                    });
                return (0, m.jsxs)('li', {
                    ref: a,
                    'data-intersection-property-id': l,
                    className: es().item,
                    role: 'option',
                    'aria-selected': t,
                    tabIndex: 0,
                    onClick: d,
                    onKeyDown: u,
                    ...(0, S.Am)(null != c ? c : S.Xk.concerts.CONCERTS_LOCATION_DIALOG_LIST_ITEM),
                    children: [
                        (0, m.jsx)(N.Caption, { className: es().itemText, variant: 'span', size: 'l', weight: 'medium', children: i }),
                        t && (0, m.jsx)($.Icon, { className: es().checkIcon, variant: 'check', size: 'xs', 'aria-hidden': 'true' }),
                    ],
                });
            };
            var er = o(67529),
                ea = o.n(er);
            let el = (0, h.PA)((e) => {
                let { showAutoDetect: t, isAutoDetect: o, filteredLocations: i, selectedLocationId: s, onSelectLocation: c, onSelectAutoDetect: r } = e,
                    { formatMessage: a } = (0, b.A)(),
                    l = (0, C.useRef)(null);
                en(l, { navigationItemsSelector: '[role="option"]' });
                let d = i.length,
                    u = (0, Z.L)(() => {
                        let e = i.find((e) => e.id === s),
                            t = i.filter((e) => e.id !== s),
                            o = [];
                        return e && o.push(e), o.push(...t), o;
                    });
                return (0, m.jsx)(n.FoH, {
                    blockType: j.LA.LocationList,
                    blockId: j.LA.LocationList,
                    blockPosX: 1,
                    blockPosY: 2,
                    objectsCount: d,
                    children: (0, m.jsxs)('ul', {
                        ref: l,
                        className: ea().root,
                        role: 'listbox',
                        'aria-label': a({ id: 'concerts.cities-list' }),
                        ...(0, S.Am)(S.Xk.concerts.CONCERTS_LOCATION_DIALOG_LIST),
                        children: [
                            t &&
                                (0, m.jsx)(n.Bki, {
                                    objectType: j.ky.LocationAutoDetect,
                                    objectId: j.ky.LocationAutoDetect,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    objectsCount: d,
                                    children: (0, m.jsx)(ec, {
                                        isSelected: o,
                                        onSelect: r,
                                        testId: S.Xk.concerts.CONCERTS_LOCATION_DIALOG_NEARBY_ITEM,
                                        children: (0, m.jsx)(L.A, { id: 'concerts.concerts-nearby' }),
                                    }),
                                }),
                            u.map((e, o) =>
                                (0, m.jsx)(
                                    n.Bki,
                                    {
                                        objectType: j.ky.Location,
                                        objectId: String(e.id),
                                        objectPosX: 1,
                                        objectPosY: t ? o + 2 : o + 1,
                                        objectsCount: d,
                                        children: (0, m.jsx)(ec, { isSelected: e.id === s, onSelect: c, locationId: e.id, children: e.name }),
                                    },
                                    e.id,
                                ),
                            ),
                        ],
                    }),
                });
            });
            var ed = o(1621),
                eu = o.n(ed);
            let em = (0, h.PA)((e) => {
                let { onClose: t } = e,
                    { concerts: o } = (0, n.Pjs)(),
                    { locationSelection: i } = o,
                    { filteredLocations: s, searchText: c, selectedLocationId: r, isAutoDetect: a } = i,
                    l = !c.trim(),
                    d = l || s.length > 0,
                    u = (0, A.c)((e) => {
                        void 0 !== e && (i.setSelectedLocation(e), t());
                    }),
                    h = (0, A.c)(() => {
                        i.setSelectedLocation(null), t();
                    }),
                    g = (0, n.l$t)({ mainObjectType: j.ky.Location });
                (0, C.useEffect)(
                    () => (
                        g(!0),
                        () => {
                            g(!1);
                        }
                    ),
                    [g],
                );
                let _ = (0, Z.L)(() =>
                        (0, m.jsx)(el, { showAutoDetect: l, isAutoDetect: a, filteredLocations: s, selectedLocationId: r, onSelectLocation: u, onSelectAutoDetect: h }),
                    ),
                    p = (0, Z.L)(() =>
                        (0, m.jsxs)('div', {
                            className: eu().emptyState,
                            ...(0, S.Am)(S.Xk.concerts.CONCERTS_LOCATION_DIALOG_EMPTY_STATE),
                            children: [
                                (0, m.jsx)(N.Heading, {
                                    className: eu().emptyStateTitle,
                                    variant: 'h3',
                                    weight: 'bold',
                                    size: 's',
                                    children: (0, m.jsx)(L.A, { id: 'concerts.nothing-found' }),
                                }),
                                (0, m.jsx)(N.Caption, {
                                    className: eu().emptyStateSubtitle,
                                    variant: 'span',
                                    size: 'm',
                                    children: (0, m.jsx)(L.A, { id: 'concerts.try-different-query' }),
                                }),
                            ],
                        }),
                    );
                return (0, m.jsx)('div', { className: eu().root, children: d ? _ : p });
            });
            var eh = o(62695),
                eC = o(23569),
                eg = o.n(eC);
            let e_ = (e) => {
                    let { searchText: t, onChange: o, onReset: i } = e,
                        { formatMessage: s } = (0, b.A)(),
                        { ref: c, intersectionPropertyId: r } = (0, n.nMI)();
                    return (0, m.jsx)('div', {
                        ref: c,
                        'data-intersection-property-id': r,
                        className: eg().root,
                        children: (0, m.jsx)(eh.D, {
                            className: eg().searchInput,
                            placeholder: s({ id: 'concerts.find-city' }),
                            initialValue: t,
                            correctedValue: null,
                            onChange: o,
                            onResetClick: i,
                            resetButtonAriaLabel: s({ id: 'interface-actions.reset-search-input' }),
                            withResetButton: !1,
                            autoFocus: !0,
                            innerInputProps: (0, S.Am)(S.Xk.concerts.CONCERTS_LOCATION_DIALOG_SEARCH_INPUT),
                        }),
                    });
                },
                ep = (0, h.PA)((e) => {
                    let { isOpen: t, onClose: o } = e,
                        { formatMessage: i } = (0, b.A)(),
                        {
                            concerts: s,
                            settings: { isMobile: c },
                        } = (0, n.Pjs)(),
                        { locationSelection: r } = s,
                        { searchText: a } = r,
                        l = (0, A.c)((e) => {
                            r.setSearchText(e);
                        }),
                        d = (0, A.c)(() => {
                            r.resetSearchText();
                        }),
                        u = (0, A.c)((e) => {
                            e || o();
                        });
                    (0, C.useEffect)(() => {
                        t || r.resetSearchText();
                    }, [t, r]);
                    let h = (0, Z.L)(() =>
                            (0, m.jsx)(n.FoH, {
                                blockType: j.LA.Search,
                                blockId: j.LA.Search,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: 1,
                                children: (0, m.jsx)(n.Bki, {
                                    objectType: j.ky.SearchField,
                                    objectId: j.ky.SearchField,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    objectsCount: 1,
                                    children: (0, m.jsx)(e_, { searchText: a, onChange: l, onReset: d }),
                                }),
                            }),
                        ),
                        g = (0, Z.L)(() => {
                            if (!c)
                                return (0, m.jsx)(W.$, {
                                    radius: 'round',
                                    color: 'secondary',
                                    size: 'xxs',
                                    icon: (0, m.jsx)($.Icon, { variant: 'close', size: 'xxs' }),
                                    onClick: o,
                                    'aria-label': i({ id: 'interface-actions.close' }),
                                    className: q().desktopCloseButton,
                                    ...(0, S.Am)(S.Xk.concerts.CONCERTS_LOCATION_DIALOG_CLOSE_BUTTON),
                                });
                        });
                    return (0, m.jsx)(J.a, {
                        open: t,
                        onClose: o,
                        onOpenChange: u,
                        placement: c ? 'default' : 'center',
                        size: c ? 'fullscreen' : 'fitContent',
                        className: q().root,
                        labelClose: i({ id: 'interface-actions.close' }),
                        closeButtonProps: { className: q().closeButton, ...(0, S.Am)(S.Xk.concerts.CONCERTS_LOCATION_DIALOG_CLOSE_BUTTON) },
                        headerClassName: q().header,
                        header: h,
                        customCloseButton: g,
                        isMobile: c,
                        enableSwipe: c,
                        overlayColor: c ? 'transparent' : 'full',
                        ...(0, S.Am)(S.Xk.concerts.CONCERTS_LOCATION_DIALOG_MODAL),
                        children: t && (0, m.jsx)(em, { onClose: o }),
                    });
                });
            var ex = o(93997),
                eb = o.n(ex);
            let eL = (0, h.PA)((e) => {
                var t;
                let { className: o } = e,
                    { concerts: i } = (0, n.Pjs)(),
                    { locationSelection: s } = i,
                    c = (0, n.NKK)(),
                    r = (0, A.c)(() => {
                        c({ to: j.QT.ConcertLocationSelector }), s.modal.open();
                    });
                if (s.shouldShowShimmer) return (0, m.jsx)(Q.Shimmer, { className: (0, D.$)(eb().root, eb().shimmer, o), isActive: !0, radius: 'xxxl' });
                let a = s.hasLocations,
                    l = null != (t = s.selectedLocationName) ? t : (0, m.jsx)(L.A, { id: 'concerts.nearby' });
                return (0, m.jsxs)(m.Fragment, {
                    children: [
                        (0, m.jsx)(W.$, {
                            className: (0, D.$)(eb().root, o, { [eb().root_disabled]: !a }),
                            variant: 'text',
                            size: 's',
                            icon: (0, m.jsx)($.Icon, { variant: 'arrowDown', size: 'xxxs' }),
                            iconPosition: 'right',
                            iconClassName: eb().icon,
                            withRipple: !1,
                            'aria-live': 'polite',
                            'aria-haspopup': 'dialog',
                            'aria-expanded': s.modal.isOpened,
                            disabled: !a,
                            onClick: r,
                            ...(0, S.Am)(S.Xk.concerts.CONCERTS_LOCATION_SELECTOR_BUTTON),
                            children: (0, m.jsx)(N.Caption, {
                                className: eb().text,
                                variant: 'span',
                                type: 'controls',
                                size: 'l',
                                weight: 'medium',
                                lineClamp: 1,
                                children: l,
                            }),
                        }),
                        a &&
                            (0, m.jsx)(n.nVz, {
                                pageId: n._Q$.CONCERT_LOCATION_SELECTOR,
                                pageEntityId: n._Q$.CONCERT_LOCATION_SELECTOR,
                                pageStyle: j.QL.Fullscreen,
                                pagePlacement: j.c4.Fullscreen,
                                children: (0, m.jsx)(ep, { isOpen: s.modal.isOpened, onClose: s.modal.close }),
                            }),
                    ],
                });
            });
            var ef = o(26217),
                ej = o.n(ef);
            let eS = (0, h.PA)(() => {
                    var e, t, o, i, c, r, a, l, d;
                    let { formatMessage: u } = (0, b.A)(),
                        { setContentScrollRef: h, contentScrollRef: g } = (0, n.gKY)(),
                        { concerts: _, experiments: p, user: y } = (0, n.Pjs)(),
                        [v, O] = (0, I.d)(),
                        R = (() => {
                            let e = (0, M.st)(),
                                t = (0, n.UlF)(),
                                { hash: o } = (0, M.gf)();
                            return (0, A.c)((n, i) => {
                                if (!e) return;
                                let s = { hash: o, pageId: j.QT.ConcertsLandingScreen, pageStyle: j.QL.Fullscreen, pagePlacement: j.c4.Fullscreen, viewUuid: i },
                                    c = (0, j.Fx)({ params: s, logger: t, context: 'useSendEventOnConcertsOpenedOrClosed' });
                                c && (n ? (0, j.Fn)(e.evgenInstance, c) : (0, j.PO)(e.evgenInstance, c));
                            });
                        })(),
                        w = (0, C.useRef)(String((0, f.A)())),
                        D = null != (r = null == (e = _.landing.meta) ? void 0 : e.selectedTabIndex) ? r : 0,
                        X = null != (a = null == (o = _.landing.tabs.data) || null == (t = o[D]) ? void 0 : t.blocks.length) ? a : 0;
                    return ((!p.checkExperiment(n.zal.WebNextConcertsTab, 'on') || p.checkExperiment(n.zal.disableAllConcerts, 'on')) && (0, x.notFound)(),
                    y.hasPlus || (0, x.redirect)(n.Zyd.main.href),
                    (0, C.useEffect)(
                        () => () => {
                            _.reset();
                        },
                        [_],
                    ),
                    _.isLocationSelectionExperimentEnabled && _.locationSelection.isNeededToLoad && (0, C.use)(_.locationSelection.getLocations()),
                    (0, C.useEffect)(() => {
                        let e = w.current;
                        return (
                            R(!0, e),
                            () => {
                                R(!1, e);
                            }
                        );
                    }, [R]),
                    (0, n.Jzs)(_.landing.isResolved),
                    (() => {
                        let e = (0, C.useRef)(1),
                            { concerts: t } = (0, n.Pjs)(),
                            { notify: o } = (0, n.lkh)(),
                            { formatMessage: i } = (0, b.A)();
                        (0, C.useEffect)(() => {
                            e && (t.isRejected && o((0, m.jsx)(k.hT, { error: i({ id: 'concerts.feed-error' }) }), { containerId: n.uQT.ERROR }), e.current--);
                        }, [t.isRejected, i, o]);
                    })(),
                    _.landing.isNeededToLoad && (0, C.use)(_.landing.getSkeleton({ id: T.p.CONCERTS, showWizard: y.settings.showWizard }, { preloadBlocksCount: 2 })),
                    _.landing.isRejected)
                        ? (0, m.jsx)(Y.w, {})
                        : (0, m.jsx)(n.jPc, {
                              children: (0, m.jsx)(n.nVz, {
                                  pageId: n._Q$.CONCERTS,
                                  children: (0, m.jsxs)(V.hO, {
                                      scrollElement: g,
                                      outerTitle: u({ id: 'entity-names.concerts' }),
                                      headerElement: v,
                                      children: [
                                          (0, m.jsx)(k.Y9, { variant: k.Vw.TEXT, showControls: !1 }),
                                          (0, m.jsxs)(E.N, {
                                              ref: h,
                                              className: ej().root,
                                              containerClassName: ej().container,
                                              ...(0, S.Am)(S.Xk.concerts.CONCERTS_PAGE),
                                              children: [
                                                  (0, m.jsxs)('div', {
                                                      className: ej().pageHeader,
                                                      ref: O,
                                                      children: [
                                                          (0, m.jsx)(N.Heading, {
                                                              variant: 'h1',
                                                              weight: 'bold',
                                                              size: 'xl',
                                                              className: ej().pageTitle,
                                                              children: (0, m.jsx)(L.A, { id: 'entity-names.concerts' }),
                                                          }),
                                                          _.isLocationSelectionExperimentEnabled &&
                                                              (0, m.jsx)(n.hjC, {
                                                                  tabId: '',
                                                                  tabPos: 0,
                                                                  isTabSelectedByDefault: !1,
                                                                  children: (0, m.jsx)(n.FoH, {
                                                                      blockId: j.LA.ConcertTabHeader,
                                                                      blockType: j.LA.ConcertTabHeader,
                                                                      blockPosX: 1,
                                                                      blockPosY: 1,
                                                                      objectsCount: 1,
                                                                      children: (0, m.jsx)(n.Bki, {
                                                                          objectType: j.ky.Location,
                                                                          objectId: j.ky.Location,
                                                                          objectPosX: 1,
                                                                          objectPosY: 1,
                                                                          objectsCount: 1,
                                                                          children: (0, m.jsx)(eL, { className: ej().locationSelector }),
                                                                      }),
                                                                  }),
                                                              }),
                                                      ],
                                                  }),
                                                  (0, m.jsx)(n.hjC, {
                                                      tabId: '',
                                                      tabPos: 0,
                                                      isTabSelectedByDefault: !1,
                                                      children: (0, m.jsx)(n.FoH, {
                                                          blockId: j.LA.ConcertTabHeader,
                                                          blockType: j.LA.ConcertTabHeader,
                                                          blockPosX: 1,
                                                          blockPosY: 1,
                                                          objectsCount: null != (l = null == (i = _.topConcerts) ? void 0 : i.length) ? l : 0,
                                                          children: (0, m.jsx)(H, {}),
                                                      }),
                                                  }),
                                                  (0, m.jsx)(n.MZP, {
                                                      offsetBlockPosY: 1,
                                                      children: (0, m.jsx)(s.EA, { landing: _.landing, errorComponent: (0, m.jsx)(Y.w, { withBackwardControl: !1 }) }),
                                                  }),
                                                  (0, m.jsx)(n.hjC, {
                                                      tabId: '',
                                                      tabPos: 0,
                                                      isTabSelectedByDefault: !1,
                                                      children: (0, m.jsx)(n.FoH, {
                                                          blockId: j.LA.ConcertTabFeed,
                                                          blockType: j.LA.ConcertTabFeed,
                                                          blockPosX: 1,
                                                          blockPosY: X + 2,
                                                          objectsCount: null != (d = null == (c = _.feedConcerts) ? void 0 : c.length) ? d : 0,
                                                          children: (0, m.jsx)(P, {}),
                                                      }),
                                                  }),
                                                  (0, m.jsx)(k.A, { children: (0, m.jsx)(k.wi, { className: ej().footer }) }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                          });
                }),
                eT = () => (0, m.jsx)(k.JR, { style: { position: 'absolute', background: 'var(--ym-background-color-primary-enabled-content)' } });
        },
        93997: (e) => {
            e.exports = {
                root: 'LocationSelector_root__ZHQJl',
                root_disabled: 'LocationSelector_root_disabled__pvwot',
                icon: 'LocationSelector_icon__4o_En',
                text: 'LocationSelector_text__ZgYJ0',
                shimmer: 'LocationSelector_shimmer__NKWIA',
            };
        },
    },
]);
