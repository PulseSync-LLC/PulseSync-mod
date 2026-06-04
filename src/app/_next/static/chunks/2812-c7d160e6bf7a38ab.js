(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2812],
    {
        2468: (e) => {
            e.exports = {
                root: 'TopConcertsCarousel_root__opMbb',
                controls: 'TopConcertsCarousel_controls__c92PW',
                header: 'TopConcertsCarousel_header__3h3Zn',
                carousel: 'TopConcertsCarousel_carousel__uMke6',
                item: 'TopConcertsCarousel_item__fz8lR',
                important: 'TopConcertsCarousel_important__ZcT6Z',
            };
        },
        7555: (e) => {
            e.exports = {
                item: 'LocationDialogListItem_item__a0z5H',
                itemText: 'LocationDialogListItem_itemText__t5XG5',
                checkIcon: 'LocationDialogListItem_checkIcon__AfJMx',
            };
        },
        20343: (e) => {
            e.exports = {
                root: 'LocationDialog_root__mAfDO',
                closeButton: 'LocationDialog_closeButton__gecsT',
                desktopCloseButton: 'LocationDialog_desktopCloseButton__jzdnV',
                header: 'LocationDialog_header__Se7S8',
            };
        },
        30457: (e) => {
            e.exports = { concertCard: 'TopConcerts_concertCard__h86wP' };
        },
        38897: (e) => {
            e.exports = { root: 'LocationDialogSearchField_root__eYUkc', searchInput: 'LocationDialogSearchField_searchInput__7O9xi' };
        },
        43881: (e) => {
            e.exports = { root: 'LocationDialogList_root__BjLJb' };
        },
        44073: (e) => {
            e.exports = {
                root: 'ConcertsPage_root__olabl',
                container: 'ConcertsPage_container__qS7xA',
                pageHeader: 'ConcertsPage_pageHeader__KyDH4',
                pageTitle: 'ConcertsPage_pageTitle__VViQV',
                locationSelector: 'ConcertsPage_locationSelector__izo2S',
                footer: 'ConcertsPage_footer__GYRwF',
            };
        },
        60212: (e) => {
            e.exports = {
                root: 'FeedConcerts_root__W7OGN',
                header: 'FeedConcerts_header__Ht1xd',
                container: 'FeedConcerts_container__CONvW',
                column: 'FeedConcerts_column__FpMgx',
                row: 'FeedConcerts_row__HEdtn',
            };
        },
        62812: (e, t, o) => {
            'use strict';
            o.d(t, { km: () => p, h4: () => eS, cw: () => u, k_: () => eT });
            var n = o(49574),
                r = o(60754),
                c = o(43557),
                i = o(73298),
                s = o(95428);
            let a = (e, t, o) => (-1 === o ? e.slice(t) : e.slice(t, t + o)),
                l = r.gK
                    .compose(
                        r.gK.model({
                            selectedLocationId: r.gK.maybeNull(r.gK.number),
                            locations: r.gK.maybeNull(r.gK.array(i.Ot)),
                            isInitialized: r.gK.optional(r.gK.boolean, !1),
                            modal: s.qt,
                            searchText: r.gK.optional(r.gK.string, ''),
                        }),
                        s.XT,
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
                            let { containerStorage: t } = (0, r._$)(e),
                                o = t.get(n.cYZ.ConcertLocation);
                            'number' == typeof o && (e.selectedLocationId = o), (e.isInitialized = !0);
                        },
                        getLocations: (0, r.L3)(function* () {
                            let { concertsResource: t, modelActionsLogger: o } = (0, r._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = n.GuX.PENDING;
                                    let o = yield t.getLocations({});
                                    (e.locations = (0, r.wg)(o.locations.map(i.En))), (e.loadingState = n.GuX.RESOLVE);
                                } catch (t) {
                                    o.error(t), (e.loadingState = n.GuX.REJECT);
                                }
                        }),
                        setSelectedLocation(t) {
                            let { containerStorage: o } = (0, r._$)(e);
                            (e.selectedLocationId = t),
                                null === t ? o.remove(n.cYZ.ConcertLocation) : o.set(n.cYZ.ConcertLocation, t, { expires: 365 }),
                                (0, r.Zn)(e).concerts.reloadData();
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
                d = r.gK
                    .compose(
                        r.gK.model('ConcertsPageConfig', {
                            topOffset: r.gK.optional(r.gK.number, 0),
                            topLimit: r.gK.optional(r.gK.number, 3),
                            feedOffset: r.gK.optional(r.gK.number, 3),
                            feedLimit: r.gK.optional(r.gK.number, -1),
                        }),
                        s.XT,
                    )
                    .actions((e) => ({
                        getData: (0, r.L3)(function* () {
                            let { concertsResource: t, modelActionsLogger: o } = (0, r._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = n.GuX.PENDING;
                                    let {
                                        config: { feed: o, top: r },
                                    } = yield t.getTabConfig({});
                                    (e.feedLimit = o.limit),
                                        (e.feedOffset = o.offset),
                                        (e.topLimit = r.limit),
                                        (e.topOffset = r.offset),
                                        (e.loadingState = n.GuX.RESOLVE);
                                } catch (t) {
                                    o.error(t), (e.loadingState = n.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = n.GuX.IDLE), (e.feedLimit = -1), (e.feedOffset = 3), (e.topLimit = 3), (e.topOffset = 0);
                        },
                    })),
                u = r.gK
                    .compose(
                        r.gK.model('ConcertsPage', {
                            config: d,
                            landing: c.Ju,
                            locationSelection: l,
                            topConcerts: r.gK.maybeNull(r.gK.array(i.aR)),
                            feedConcerts: r.gK.maybeNull(r.gK.array(i.aR)),
                        }),
                        s.XT,
                        s.pl,
                    )
                    .views((e) => {
                        let t = () => {
                            var t;
                            let { containerStorage: o } = (0, r._$)(e),
                                c = o.get(n.cYZ.ConcertLocation);
                            return null != (t = e.locationSelection.selectedLocationId) ? t : 'number' == typeof c ? c : null;
                        };
                        return {
                            get isShimmerVisible() {
                                return e.isNeededToLoad || e.isLoading || e.isRejected;
                            },
                            get isShimmerActive() {
                                return e.isLoading;
                            },
                            get isLocationSelectionExperimentEnabled() {
                                let { experiments: t } = (0, r.Zn)(e);
                                return t.checkExperiment(n.zal.WebNextConcertsLocation, 'on');
                            },
                            get concertsLocationForRequest() {
                                let { experiments: o } = (0, r.Zn)(e),
                                    c = o.checkExperiment(n.zal.WebNextConcertsLocationAll, 'on'),
                                    i = t();
                                if (c && null !== i) return [i];
                                return;
                            },
                            get concertsLocationForFeedRequest() {
                                let { experiments: o } = (0, r.Zn)(e),
                                    c = o.checkExperiment(n.zal.WebNextConcertsLocation, 'on'),
                                    i = t();
                                if (c && null !== i) return [i];
                                return;
                            },
                        };
                    })
                    .actions((e) => {
                        let t = (0, r.L3)(function* () {
                                let { concertsResource: t } = (0, r._$)(e),
                                    o = {},
                                    n = e.concertsLocationForFeedRequest;
                                (null == n ? void 0 : n.length) && (o.locations = n);
                                let { items: c } = yield t.getFeed(o),
                                    { feedConcerts: s, topConcerts: l } = ((e, t) => {
                                        let { topLimit: o, topOffset: n, feedLimit: r, feedOffset: c } = e;
                                        return { topConcerts: a(t, n, o), feedConcerts: a(t, c, r) };
                                    })(
                                        e.config,
                                        c.map((e) => (0, i.HN)(e)),
                                    );
                                (e.feedConcerts = (0, r.wg)(s)), (e.topConcerts = (0, r.wg)(l));
                            }),
                            o = {
                                resetPageData() {
                                    e.config.reset(), e.landing.reset(), (e.loadingState = n.GuX.IDLE), e.destroyItems([e.topConcerts, e.feedConcerts]);
                                },
                                getData: (0, r.L3)(function* () {
                                    let { modelActionsLogger: o } = (0, r._$)(e);
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
                                reloadData: (0, r.L3)(function* () {
                                    let { modelActionsLogger: o } = (0, r._$)(e);
                                    try {
                                        (e.loadingState = n.GuX.PENDING), yield t(), (e.loadingState = n.GuX.RESOLVE);
                                    } catch (t) {
                                        o.error(t), (e.loadingState = n.GuX.REJECT);
                                    }
                                }),
                                reset() {
                                    o.resetPageData(), e.locationSelection.reset();
                                },
                            };
                        return o;
                    });
            var m = o(32290),
                g = o(96103),
                h = o(55178),
                C = o.t(h, 2),
                _ = o(80719);
            let p = (0, g.PA)(() => {
                let { concerts: e } = (0, n.Pjs)();
                return (
                    (0, h.useEffect)(
                        () => () => {
                            e.resetPageData();
                        },
                        [e],
                    ),
                    (0, m.jsx)(_.M, {})
                );
            });
            var x = o(21916),
                L = o(60900),
                b = o(39407),
                f = o(27576),
                j = o(16172),
                S = o(59824),
                T = o(73474),
                I = o(54862),
                N = o(46049),
                E = o(71926),
                A = o(91027),
                y = o(20194),
                k = o(44574),
                v = o(60212),
                O = o.n(v);
            let P = (0, g.PA)(() => {
                let e = (0, h.useId)(),
                    { concerts: t } = (0, n.Pjs)(),
                    { formatMessage: o } = (0, L.A)(),
                    [r, c] = (0, I.d)(),
                    s = (0, n.fBs)(),
                    a = (0, h.useRef)(!1),
                    l = (0, A.c)(() => {
                        var e;
                        return !t.isShimmerVisible && (null == (e = t.feedConcerts) ? void 0 : e.length) ? t.feedConcerts.length : 50;
                    }),
                    {
                        virtualizer: d,
                        rowResizeObserver: u,
                        columnCount: g,
                        indices: C,
                    } = (0, y.LW)({
                        count: l(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: r,
                    }),
                    _ = { '--feed-concerts-height': ''.concat(d.getTotalSize(), 'px'), '--feed-concerts-column-count': g },
                    p = (0, h.useCallback)(
                        (e) => {
                            var o, r, c;
                            let s = null == (o = t.feedConcerts) ? void 0 : o[e];
                            return !s || t.isShimmerVisible
                                ? (0, m.jsx)(i.LY, { isActive: t.isShimmerActive })
                                : (0, m.jsx)(n.Bki, {
                                      objectType: j.ky.Concert,
                                      objectId: s.id,
                                      objectPosX: (e % g) + 1,
                                      objectPosY: Math.floor(e / g) + 1,
                                      objectsCount: null != (c = null == (r = t.feedConcerts) ? void 0 : r.length) ? c : 0,
                                      children: (0, m.jsx)(i.Qb, { concert: s }),
                                  });
                        },
                        [g, t.feedConcerts, t.isShimmerActive, t.isShimmerVisible],
                    );
                return (
                    (0, h.useEffect)(() => {
                        t.isResolved && !a.current && (s(), (a.current = !0));
                    }, [t.isResolved, s]),
                    (0, m.jsxs)('div', {
                        className: O().root,
                        ...(0, S.Am)(S.e8.concerts.CONCERTS_FEED),
                        children: [
                            (0, m.jsx)(k.Tw, { className: O().header, labeledForId: e, title: o({ id: 'concerts.all-concerts' }), headingVariant: 'h2' }),
                            (0, m.jsx)('div', {
                                'aria-labelledby': e,
                                ref: c,
                                style: _,
                                className: O().container,
                                children: d
                                    .getVirtualItems()
                                    .map((e) =>
                                        (0, m.jsx)(
                                            y.Ux,
                                            {
                                                className: O().row,
                                                columnClassName: O().column,
                                                virtualItem: e,
                                                resizeObserver: u,
                                                indices: C,
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
            var R = o(30457),
                D = o.n(R),
                w = o(63618),
                X = o(75245),
                F = o(2468),
                K = o.n(F);
            let z = (e) => {
                    let { children: t } = e,
                        o = (0, h.useId)(),
                        n = (0, h.useRef)(null),
                        { formatMessage: r } = (0, L.A)();
                    return (0, m.jsxs)('div', {
                        className: K().root,
                        ...(0, S.Am)(S.e8.concerts.CONCERTS_TOP),
                        children: [
                            (0, m.jsx)(k.Tw, {
                                className: K().header,
                                labeledForId: o,
                                title: r({ id: 'concerts.top-for-you' }),
                                controls: (0, m.jsx)(k.X9, { className: K().controls, carouselRef: n }),
                                headingVariant: 'h2',
                            }),
                            (0, m.jsx)(X.Carousel, {
                                className: K().carousel,
                                ref: n,
                                itemClassName: (0, w.$)(K().item, K().important),
                                'aria-labelledby': o,
                                children: t,
                            }),
                        ],
                    });
                },
                B = (e) => Array.from({ length: 10 }, (t, o) => (0, m.jsx)(i.LY, { isActive: e, withPriceButton: !0 }, o)),
                G = (0, g.PA)(() => {
                    let { concerts: e, experiments: t } = (0, n.Pjs)(),
                        o = (0, n.fBs)(),
                        r = (0, h.useRef)(!1),
                        c = t.checkExperiment(n.zal.WebNextConcertsIdentityEventType, 'on'),
                        s = (0, h.useMemo)(() => {
                            var t;
                            return (null == (t = e.topConcerts) ? void 0 : t.length) && !e.isShimmerVisible
                                ? e.topConcerts.map((t, o) => {
                                      var r, s;
                                      return (0, m.jsx)(
                                          n.Bki,
                                          {
                                              objectType: j.ky.Concert,
                                              objectId: t.id,
                                              objectPosX: o + 1,
                                              objectPosY: 1,
                                              objectsCount: null != (s = null == (r = e.topConcerts) ? void 0 : r.length) ? s : 0,
                                              children: (0, m.jsx)('div', {
                                                  className: D().concertCard,
                                                  children: (0, m.jsx)(i.Qb, { withMask: c, withPriceButton: !0, withInlineMeta: !0, concert: t }),
                                              }),
                                          },
                                          t.getKey(o),
                                      );
                                  })
                                : B(e.isShimmerActive);
                        }, [e.isShimmerActive, e.isShimmerVisible, e.topConcerts, c]);
                    return (
                        (0, h.useEffect)(() => {
                            e.isResolved && !r.current && (o(), (r.current = !0));
                        }, [e.isResolved, o]),
                        e.isNeededToLoad && (0, h.use)(e.getData()),
                        (0, m.jsx)(z, { children: s })
                    );
                }),
                H = () => (0, m.jsx)(h.Suspense, { fallback: (0, m.jsx)(z, { children: B(!0) }), children: (0, m.jsx)(G, {}) });
            var Y = o(32381),
                V = o(75645),
                M = o(52068),
                W = o(63423),
                $ = o(82586),
                Z = o(79856),
                Q = o(6752),
                J = o(84638),
                U = o(20343),
                q = o.n(U),
                ee = {
                    810: (e) => {
                        e.exports = C;
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
                        { navigationItemsSelector: r, activeAttributeName: c = 'aria-selected' } = n,
                        i = (0, e.useCallback)(
                            (e) => {
                                let n = t(o, r);
                                if (!n.length) return;
                                let c = e.target,
                                    i = n.indexOf(c);
                                if (-1 === i) return;
                                let [s] = n,
                                    a = n.at(-1),
                                    l = null;
                                switch (e.key) {
                                    case 'ArrowLeft':
                                    case 'ArrowUp':
                                        l = n[i - 1] || a;
                                        break;
                                    case 'ArrowRight':
                                    case 'ArrowDown':
                                        l = n[i + 1] || s;
                                        break;
                                    case 'Home':
                                        l = s;
                                        break;
                                    case 'End':
                                        l = a;
                                }
                                null !== l && (l.focus(), e.preventDefault());
                            },
                            [r, o],
                        );
                    (0, e.useEffect)(() => {
                        let e = o.current;
                        return null == e || e.addEventListener('keydown', i), () => (null == e ? void 0 : e.removeEventListener('keydown', i));
                    }, [o, i]),
                        (0, e.useEffect)(() => {
                            t(o, r).forEach((e) => {
                                e.hasAttribute(c) && ('true' === e.getAttribute(c) ? (e.tabIndex = 0) : (e.tabIndex = -1));
                            });
                        });
                };
            })(),
                eo.__esModule;
            var en = eo.useKeyboardNavigation,
                er = o(7555),
                ec = o.n(er);
            let ei = (e) => {
                let { isSelected: t, onSelect: o, children: r, locationId: c, testId: i } = e,
                    s = (0, n.mFl)(),
                    { ref: a, intersectionPropertyId: l } = (0, n.nMI)(),
                    d = (0, A.c)(() => {
                        s({ actionType: j.X2.SearchItemSelected }), o(c);
                    }),
                    u = (0, A.c)((e) => {
                        (e.key === n.vLr.ENTER || e.key === n.vLr.SPACE) && (e.preventDefault(), s({ actionType: j.X2.SearchItemSelected }), o(c));
                    });
                return (0, m.jsxs)('li', {
                    ref: a,
                    'data-intersection-property-id': l,
                    className: ec().item,
                    role: 'option',
                    'aria-selected': t,
                    tabIndex: 0,
                    onClick: d,
                    onKeyDown: u,
                    ...(0, S.Am)(null != i ? i : S.Xk.concerts.CONCERTS_LOCATION_DIALOG_LIST_ITEM),
                    children: [
                        (0, m.jsx)(E.Caption, { className: ec().itemText, variant: 'span', size: 'l', weight: 'medium', children: r }),
                        t && (0, m.jsx)($.Icon, { className: ec().checkIcon, variant: 'check', size: 'xs', 'aria-hidden': 'true' }),
                    ],
                });
            };
            var es = o(43881),
                ea = o.n(es);
            let el = (0, g.PA)((e) => {
                let { showAutoDetect: t, isAutoDetect: o, filteredLocations: r, selectedLocationId: c, onSelectLocation: i, onSelectAutoDetect: s } = e,
                    { formatMessage: a } = (0, L.A)(),
                    l = (0, h.useRef)(null);
                en(l, { navigationItemsSelector: '[role="option"]' });
                let d = r.length,
                    u = (0, Q.L)(() => {
                        let e = r.find((e) => e.id === c),
                            t = r.filter((e) => e.id !== c),
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
                                    children: (0, m.jsx)(ei, {
                                        isSelected: o,
                                        onSelect: s,
                                        testId: S.Xk.concerts.CONCERTS_LOCATION_DIALOG_NEARBY_ITEM,
                                        children: (0, m.jsx)(b.A, { id: 'concerts.concerts-nearby' }),
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
                                        children: (0, m.jsx)(ei, { isSelected: e.id === c, onSelect: i, locationId: e.id, children: e.name }),
                                    },
                                    e.id,
                                ),
                            ),
                        ],
                    }),
                });
            });
            var ed = o(67061),
                eu = o.n(ed);
            let em = (0, g.PA)((e) => {
                let { onClose: t } = e,
                    { concerts: o } = (0, n.Pjs)(),
                    { locationSelection: r } = o,
                    { filteredLocations: c, searchText: i, selectedLocationId: s, isAutoDetect: a } = r,
                    l = !i.trim(),
                    d = l || c.length > 0,
                    u = (0, A.c)((e) => {
                        void 0 !== e && (r.setSelectedLocation(e), t());
                    }),
                    g = (0, A.c)(() => {
                        r.setSelectedLocation(null), t();
                    }),
                    C = (0, n.l$t)({ mainObjectType: j.ky.Location });
                (0, h.useEffect)(
                    () => (
                        C(!0),
                        () => {
                            C(!1);
                        }
                    ),
                    [C],
                );
                let _ = (0, Q.L)(() =>
                        (0, m.jsx)(el, { showAutoDetect: l, isAutoDetect: a, filteredLocations: c, selectedLocationId: s, onSelectLocation: u, onSelectAutoDetect: g }),
                    ),
                    p = (0, Q.L)(() =>
                        (0, m.jsxs)('div', {
                            className: eu().emptyState,
                            ...(0, S.Am)(S.Xk.concerts.CONCERTS_LOCATION_DIALOG_EMPTY_STATE),
                            children: [
                                (0, m.jsx)(E.Heading, {
                                    className: eu().emptyStateTitle,
                                    variant: 'h3',
                                    weight: 'bold',
                                    size: 's',
                                    children: (0, m.jsx)(b.A, { id: 'concerts.nothing-found' }),
                                }),
                                (0, m.jsx)(E.Caption, {
                                    className: eu().emptyStateSubtitle,
                                    variant: 'span',
                                    size: 'm',
                                    children: (0, m.jsx)(b.A, { id: 'concerts.try-different-query' }),
                                }),
                            ],
                        }),
                    );
                return (0, m.jsx)('div', { className: eu().root, children: d ? _ : p });
            });
            var eg = o(5771),
                eh = o(38897),
                eC = o.n(eh);
            let e_ = (e) => {
                    let { searchText: t, onChange: o, onReset: r } = e,
                        { formatMessage: c } = (0, L.A)(),
                        { ref: i, intersectionPropertyId: s } = (0, n.nMI)();
                    return (0, m.jsx)('div', {
                        ref: i,
                        'data-intersection-property-id': s,
                        className: eC().root,
                        children: (0, m.jsx)(eg.D, {
                            className: eC().searchInput,
                            placeholder: c({ id: 'concerts.find-city' }),
                            initialValue: t,
                            correctedValue: null,
                            onChange: o,
                            onResetClick: r,
                            resetButtonAriaLabel: c({ id: 'interface-actions.reset-search-input' }),
                            withResetButton: !1,
                            autoFocus: !0,
                            innerInputProps: (0, S.Am)(S.Xk.concerts.CONCERTS_LOCATION_DIALOG_SEARCH_INPUT),
                        }),
                    });
                },
                ep = (0, g.PA)((e) => {
                    let { isOpen: t, onClose: o } = e,
                        { formatMessage: r } = (0, L.A)(),
                        {
                            concerts: c,
                            settings: { isMobile: i },
                        } = (0, n.Pjs)(),
                        { locationSelection: s } = c,
                        { searchText: a } = s,
                        l = (0, A.c)((e) => {
                            s.setSearchText(e);
                        }),
                        d = (0, A.c)(() => {
                            s.resetSearchText();
                        }),
                        u = (0, A.c)((e) => {
                            e || o();
                        });
                    (0, h.useEffect)(() => {
                        t || s.resetSearchText();
                    }, [t, s]);
                    let g = (0, Q.L)(() =>
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
                        C = (0, Q.L)(() => {
                            if (!i)
                                return (0, m.jsx)(W.$, {
                                    radius: 'round',
                                    color: 'secondary',
                                    size: 'xxs',
                                    icon: (0, m.jsx)($.Icon, { variant: 'close', size: 'xxs' }),
                                    onClick: o,
                                    'aria-label': r({ id: 'interface-actions.close' }),
                                    className: q().desktopCloseButton,
                                    ...(0, S.Am)(S.Xk.concerts.CONCERTS_LOCATION_DIALOG_CLOSE_BUTTON),
                                });
                        });
                    return (0, m.jsx)(J.a, {
                        open: t,
                        onClose: o,
                        onOpenChange: u,
                        placement: i ? 'default' : 'center',
                        size: i ? 'fullscreen' : 'fitContent',
                        className: q().root,
                        labelClose: r({ id: 'interface-actions.close' }),
                        closeButtonProps: { className: q().closeButton, ...(0, S.Am)(S.Xk.concerts.CONCERTS_LOCATION_DIALOG_CLOSE_BUTTON) },
                        headerClassName: q().header,
                        header: g,
                        customCloseButton: C,
                        isMobile: i,
                        enableSwipe: i,
                        overlayColor: i ? 'transparent' : 'full',
                        ...(0, S.Am)(S.Xk.concerts.CONCERTS_LOCATION_DIALOG_MODAL),
                        children: t && (0, m.jsx)(em, { onClose: o }),
                    });
                });
            var ex = o(99117),
                eL = o.n(ex);
            let eb = (0, g.PA)((e) => {
                var t;
                let { className: o } = e,
                    { concerts: r } = (0, n.Pjs)(),
                    { locationSelection: c } = r,
                    i = (0, n.NKK)(),
                    s = (0, A.c)(() => {
                        i({ to: j.QT.ConcertLocationSelector }), c.modal.open();
                    });
                if (c.shouldShowShimmer) return (0, m.jsx)(Z.Shimmer, { className: (0, w.$)(eL().root, eL().shimmer, o), isActive: !0, radius: 'xxxl' });
                let a = c.hasLocations,
                    l = null != (t = c.selectedLocationName) ? t : (0, m.jsx)(b.A, { id: 'concerts.nearby' });
                return (0, m.jsxs)(m.Fragment, {
                    children: [
                        (0, m.jsx)(W.$, {
                            className: (0, w.$)(eL().root, o, { [eL().root_disabled]: !a }),
                            variant: 'text',
                            size: 's',
                            icon: (0, m.jsx)($.Icon, { variant: 'arrowDown', size: 'xxxs' }),
                            iconPosition: 'right',
                            iconClassName: eL().icon,
                            withRipple: !1,
                            'aria-live': 'polite',
                            'aria-haspopup': 'dialog',
                            'aria-expanded': c.modal.isOpened,
                            disabled: !a,
                            onClick: s,
                            ...(0, S.Am)(S.Xk.concerts.CONCERTS_LOCATION_SELECTOR_BUTTON),
                            children: (0, m.jsx)(E.Caption, {
                                className: eL().text,
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
                                children: (0, m.jsx)(ep, { isOpen: c.modal.isOpened, onClose: c.modal.close }),
                            }),
                    ],
                });
            });
            var ef = o(44073),
                ej = o.n(ef);
            let eS = (0, g.PA)(() => {
                    var e, t, o, r, i, s, a, l, d;
                    let { formatMessage: u } = (0, L.A)(),
                        { setContentScrollRef: g, contentScrollRef: C } = (0, n.gKY)(),
                        { concerts: _, experiments: p, user: y } = (0, n.Pjs)(),
                        [v, O] = (0, I.d)(),
                        R = (() => {
                            let e = (0, M.st)(),
                                t = (0, n.UlF)(),
                                { hash: o } = (0, M.gf)();
                            return (0, A.c)((n, r) => {
                                if (!e) return;
                                let c = { hash: o, pageId: j.QT.ConcertsLandingScreen, pageStyle: j.QL.Fullscreen, pagePlacement: j.c4.Fullscreen, viewUuid: r },
                                    i = (0, j.Fx)({ params: c, logger: t, context: 'useSendEventOnConcertsOpenedOrClosed' });
                                i && (n ? (0, j.Fn)(e.evgenInstance, i) : (0, j.PO)(e.evgenInstance, i));
                            });
                        })(),
                        D = (0, h.useRef)(String((0, f.A)())),
                        w = null != (s = null == (e = _.landing.meta) ? void 0 : e.selectedTabIndex) ? s : 0,
                        X = null != (a = null == (o = _.landing.tabs.data) || null == (t = o[w]) ? void 0 : t.blocks.length) ? a : 0;
                    return ((!p.checkExperiment(n.zal.WebNextConcertsTab, 'on') || p.checkExperiment(n.zal.disableAllConcerts, 'on')) && (0, x.notFound)(),
                    y.hasPlus || (0, x.redirect)(n.Zyd.main.href),
                    (0, h.useEffect)(
                        () => () => {
                            _.resetPageData();
                        },
                        [_],
                    ),
                    _.isLocationSelectionExperimentEnabled && _.locationSelection.isNeededToLoad && (0, h.use)(_.locationSelection.getLocations()),
                    (0, h.useEffect)(() => {
                        let e = D.current;
                        return (
                            R(!0, e),
                            () => {
                                R(!1, e);
                            }
                        );
                    }, [R]),
                    (0, n.Jzs)(_.landing.isResolved),
                    (() => {
                        let e = (0, h.useRef)(1),
                            { concerts: t } = (0, n.Pjs)(),
                            { notify: o } = (0, n.lkh)(),
                            { formatMessage: r } = (0, L.A)();
                        (0, h.useEffect)(() => {
                            e && (t.isRejected && o((0, m.jsx)(k.hT, { error: r({ id: 'concerts.feed-error' }) }), { containerId: n.uQT.ERROR }), e.current--);
                        }, [t.isRejected, r, o]);
                    })(),
                    _.landing.isNeededToLoad && (0, h.use)(_.landing.getSkeleton({ id: T.p.CONCERTS, showWizard: y.settings.showWizard }, { preloadBlocksCount: 2 })),
                    _.landing.isRejected)
                        ? (0, m.jsx)(Y.w, {})
                        : (0, m.jsx)(n.jPc, {
                              children: (0, m.jsx)(n.nVz, {
                                  pageId: n._Q$.CONCERTS,
                                  children: (0, m.jsxs)(V.hO, {
                                      scrollElement: C,
                                      outerTitle: u({ id: 'entity-names.concerts' }),
                                      headerElement: v,
                                      children: [
                                          (0, m.jsx)(k.Y9, { variant: k.Vw.TEXT, showControls: !1 }),
                                          (0, m.jsxs)(N.N, {
                                              ref: g,
                                              className: ej().root,
                                              containerClassName: ej().container,
                                              ...(0, S.Am)(S.Xk.concerts.CONCERTS_PAGE),
                                              children: [
                                                  (0, m.jsxs)('div', {
                                                      className: ej().pageHeader,
                                                      ref: O,
                                                      children: [
                                                          (0, m.jsx)(E.Heading, {
                                                              variant: 'h1',
                                                              weight: 'bold',
                                                              size: 'xl',
                                                              className: ej().pageTitle,
                                                              children: (0, m.jsx)(b.A, { id: 'entity-names.concerts' }),
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
                                                                          children: (0, m.jsx)(eb, { className: ej().locationSelector }),
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
                                                          objectsCount: null != (l = null == (r = _.topConcerts) ? void 0 : r.length) ? l : 0,
                                                          children: (0, m.jsx)(H, {}),
                                                      }),
                                                  }),
                                                  (0, m.jsx)(n.MZP, {
                                                      offsetBlockPosY: 1,
                                                      children: (0, m.jsx)(c.EA, { landing: _.landing, errorComponent: (0, m.jsx)(Y.w, { withBackwardControl: !1 }) }),
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
                                                          objectsCount: null != (d = null == (i = _.feedConcerts) ? void 0 : i.length) ? d : 0,
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
        67061: (e) => {
            e.exports = {
                root: 'LocationDialogContent_root__BH0fV',
                emptyState: 'LocationDialogContent_emptyState__HKHWl',
                emptyStateTitle: 'LocationDialogContent_emptyStateTitle__OP1_t',
                emptyStateSubtitle: 'LocationDialogContent_emptyStateSubtitle__SRjAW',
            };
        },
        99117: (e) => {
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
