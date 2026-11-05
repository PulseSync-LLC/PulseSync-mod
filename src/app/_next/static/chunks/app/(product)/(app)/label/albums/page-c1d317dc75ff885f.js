(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3008],
    {
        568: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => Q }));
            var s = r(88800),
                l = r(53548),
                a = r(58390),
                o = r(65724),
                i = r(84961),
                n = r(2058),
                d = r(87999),
                c = r(76903),
                u = r(17392),
                m = r(29993),
                _ = r(29504),
                h = r(32596),
                b = r(10079),
                v = r(69630),
                g = r(63565),
                f = r(34303),
                p = r(44440),
                y = r(14912),
                A = r(31661),
                I = r(88969),
                N = r(96817),
                C = r(2288),
                E = r(52300),
                O = r(72288),
                x = r(29645),
                L = r.n(x);
            let S = { [g.g.RATING]: (0, s.jsx)(I.A, { id: 'sort.sort-by-rating' }), [g.g.YEAR]: (0, s.jsx)(I.A, { id: 'sort.sort-by-year' }) },
                w = (0, i.PA)((e) => {
                    var t;
                    let { sortModel: r, onSort: a } = e,
                        {
                            settings: { isMobile: o },
                        } = (0, O.g)(),
                        i = (0, m.c)((e) => {
                            (0, A.W)(e.id) && r.sortBy !== e.id && (r.setSortBy(e.id), a());
                        }),
                        n = (0, l.useMemo)(
                            () =>
                                o
                                    ? (0, s.jsx)(N.$, { radius: 'xxxl', className: L().button, icon: (0, s.jsx)(E.I, { variant: 'filter', size: 'xs' }) })
                                    : (0, s.jsxs)(N.$, {
                                          radius: 'xxxl',
                                          className: L().button,
                                          'data-test-id': u.Kq.sort.SORT_DROPDOWN_BUTTON,
                                          children: [
                                              (0, s.jsx)(_.HL, {
                                                  variant: 'span',
                                                  size: 'm',
                                                  weight: 'medium',
                                                  'data-test-id': u.Kq.sort.SORT_DROPDOWN_BUTTON_CAPTION,
                                                  children: r.sortBy ? S[r.sortBy] : (0, s.jsx)(I.A, { id: 'sort.select-filter' }),
                                              }),
                                              (0, s.jsx)(E.I, { size: 'xxs', variant: 'arrowDown', 'data-test-id': u.Kq.sort.SORT_DROPDOWN_BUTTON_ICON }),
                                          ],
                                      }),
                            [o, r.sortBy],
                        );
                    return (0, s.jsx)(C.ms, {
                        placement: o ? 'bottom' : 'top',
                        isMobile: o,
                        strategy: 'fixed',
                        className: L().root,
                        onSelect: i,
                        reference: n,
                        offsetOptions: { mainAxis: 10, crossAxis: -50 },
                        defaultValue: null != (t = r.sortBy) ? t : g.g.YEAR,
                        containerClassName: L().container,
                        header: o ? (0, s.jsx)('div', { className: L().header }) : void 0,
                        'data-test-id': u.Kq.sort.SORT_DROPDOWN,
                        children: Object.values(g.g).map((e) => (0, s.jsx)(C.c$, { id: e, label: S[e], 'data-test-id': u.Kq.sort.SORT_DROPDOWN_ITEM }, e)),
                    });
                });
            var T = r(98427),
                R = r(46422),
                j = r(44230),
                B = r(37670),
                P = r(34961),
                D = r(53892),
                M = r(54320),
                k = r(86790),
                V = r(60266),
                F = r(93317),
                G = r(37770),
                X = r(79418),
                U = r(64709),
                W = r(29044),
                K = r.n(W);
            let Y = (0, i.PA)((e) => {
                let { labelId: t, preloadedLabel: r, preloadedAlbums: i, sortBy: I } = e,
                    { id: N, type: C, name: E, albumsSubpage: x, reset: L, isNeededToLoad: S, getData: W, isPublisher: Y } = (0, P.s)(D.n.LABEL),
                    {
                        settings: { isMobile: $ },
                    } = (0, O.g)(),
                    { formatMessage: z } = (0, n.A)(),
                    { contentScrollRef: H, setContentScrollRef: q } = (0, j.g)(),
                    Q = (0, R.W)(),
                    J = Y ? z({ id: 'page.label-podcast-header' }, { labelName: E }) : z({ id: 'page.label-albums-header' }, { labelName: E }),
                    Z = (0, m.c)((e) => {
                        var r;
                        x.getData({ labelId: Number(t), page: e, pageSize: 20, sortBy: null != (r = x.sort.sortBy) ? r : I });
                    }),
                    ee = (0, m.c)(() => {
                        (x.reset(), Z(0));
                    });
                (((e) => {
                    let { sortModel: t } = e,
                        r = (0, y.X)();
                    ((0, l.useLayoutEffect)(() => {
                        let e = new URL(window.location.href).searchParams.get(f.K.SORT);
                        e && (0, A.W)(e) ? t.setSortBy(e) : t.setSortBy(g.g.YEAR);
                    }, [t]),
                        (0, l.useEffect)(() => {
                            if (t.sortBy) {
                                let e = (0, p.b)(f.K.SORT, t.sortBy);
                                e && r(e);
                            }
                        }, [r, t.sortBy]));
                })({ sortModel: x.sort }),
                    (0, M.X)(x.pagesLoader, Z),
                    (0, l.useEffect)(
                        () => () => {
                            (L(), x.reset());
                        },
                        [L, x],
                    ),
                    x.isNotFound && (0, a.notFound)(),
                    (0, U.Q)({ id: Number(N), name: null != E ? E : '', type: null != C ? C : '' }, U.T.ALBUMS),
                    (0, B.J)(x.isResolved));
                let et = (0, l.useMemo)(() => ({ Footer: () => (0, s.jsx)(V.A, { children: (0, s.jsx)(k.w, { className: K().footer }) }) }), []),
                    er = z({ id: 'entity-names.label-albums-list' }),
                    es = [];
                if (x.isNeededToLoad) {
                    var el;
                    let e = x.sort.sortBy === I || void 0 === x.sort.sortBy;
                    es.push(x.getData({ labelId: Number(t), page: 0, pageSize: 20, preloadedAlbums: e ? i : void 0, sortBy: null != (el = x.sort.sortBy) ? el : I }));
                }
                if (
                    (S && es.push(W({ labelId: Number(t), preloadedLabel: r, withLabelEntities: !1 })),
                    es.length && (0, l.use)(Promise.allSettled(es)),
                    x.isRejected && !x.isNotFound)
                )
                    return (0, s.jsx)(h.SomethingWentWrong, {});
                let ea = x.isShimmerVisible ? 20 : x.totalCount;
                return (0, s.jsx)(c.a, {
                    pageId: d.AppScreen.LabelAlbums,
                    pageIdForFrom: T.b.LABEL_ALBUMS,
                    children: (0, s.jsx)(v.h, {
                        scrollElement: H,
                        outerTitle: J,
                        children: (0, s.jsxs)('div', {
                            className: K().root,
                            'data-test-id': u.Xk.label.LABEL_ALBUMS_PAGE,
                            children: [
                                (0, s.jsxs)(F.Y, {
                                    variant: F.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: Q.canBack,
                                    children: [
                                        (0, s.jsx)(_.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: J }),
                                        (0, s.jsx)(w, { sortModel: x.sort, onSort: ee }),
                                    ],
                                }),
                                (0, s.jsx)(X.$, {
                                    className: (0, o.$)(K().scrollContainer, K().important),
                                    listClassName: K().content,
                                    itemClassName: K().item,
                                    customComponents: et,
                                    itemContentCallback: (e) => {
                                        let t = x.items[e],
                                            r = z({ id: 'loading-messages.entity-is-loading' }, { entityName: z({ id: 'entity-names.album' }) });
                                        return t
                                            ? (0, s.jsx)(b.a, { album: t, contentLinesCount: 4, withAddition: !t.isNonMusic, withLikesCount: t.isNonMusic }, t.id)
                                            : (0, s.jsx)(G.V, { 'aria-label': r, linesCount: 4 });
                                    },
                                    totalCount: ea,
                                    initialItemCount: ea,
                                    onGetDataByPage: Z,
                                    pageSize: 20,
                                    totalRequests: x.requestsCount,
                                    handleRef: q,
                                    context: { listAriaLabel: er },
                                    isMobileLayout: $,
                                    useWindowScroll: $,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var $ = r(19994),
                z = r(1698);
            let H = () => {
                let e = (0, R.W)(),
                    { formatMessage: t } = (0, n.A)(),
                    r = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.album' }) });
                return (0, s.jsx)(v.h, {
                    scrollElement: null,
                    children: (0, s.jsxs)('div', {
                        className: K().root,
                        children: [
                            (0, s.jsxs)(F.Y, {
                                variant: F.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: [
                                    (0, s.jsx)($.W, { className: K().shimmerTitle, radius: 'l' }),
                                    (0, s.jsx)($.W, { className: K().shimmerSortDropdown, radius: 'xxxl' }),
                                ],
                            }),
                            (0, s.jsx)('div', {
                                className: (0, o.$)(K().scrollContainer, K().important, K().shimmerScrollContainer),
                                children: (0, s.jsx)('div', {
                                    className: K().content,
                                    children: (0, s.jsx)(z.e, { isActive: !0, itemClassName: K().item, 'aria-label': r, linesCount: 4, count: 20 }),
                                }),
                            }),
                        ],
                    }),
                });
            };
            var q = r(21438);
            let Q = () => {
                let e = (0, a.useSearchParams)().get('labelId');
                return ((e && (0, q.L)(e)) || (0, a.notFound)(), (0, s.jsx)(l.Suspense, { fallback: (0, s.jsx)(H, {}), children: (0, s.jsx)(Y, { labelId: e }) }));
            };
        },
        1698: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => a });
            var s = r(88800),
                l = r(37770);
            let a = (e) => {
                let {
                    isActive: t,
                    itemClassName: r,
                    round: a,
                    centered: o,
                    withInfo: i,
                    count: n = 10,
                    shimmerClassName: d,
                    linesCount: c,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, s.jsx)(
                        l.V,
                        { isActive: t, linesCount: c, className: r, round: a, centered: o, withInfo: i, withSubcover: m, 'aria-label': u, shimmerClassName: d },
                        e,
                    ),
                );
            };
        },
        4044: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        9492: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => h });
            var s = r(88800),
                l = r(65724),
                a = r(53548),
                o = r(2058),
                i = r(88969),
                n = r(96817),
                d = r(52300),
                c = r(29504),
                u = r(59304),
                m = r(4044),
                _ = r.n(m);
            let h = (e) => {
                let { reloadBlocks: t, closeToast: r } = e,
                    m = (0, a.useRef)(null),
                    { formatMessage: h } = (0, o.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let b = (0, a.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, s.jsx)(c.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(i.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(n.$, {
                                    ref: m,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': h({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(d.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [h, t],
                );
                return (0, s.jsx)(u.$, { className: (0, l.$)(_().root, _().important), message: b, closeToast: r });
            };
        },
        14912: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => l });
            var s = r(53548);
            let l = () =>
                (0, s.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        14965: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => s });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: l = {}, ...a } = t,
                        o = e || 'Internal error';
                    (super(o, a), (this.message = o), (this.code = r), (this.data = l), (this.stack = Error(o).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
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
        29044: (e) => {
            e.exports = {
                root: 'LabelAlbumsPage_root__xyWi4',
                scrollContainer: 'LabelAlbumsPage_scrollContainer__zRUlM',
                important: 'LabelAlbumsPage_important__s18oL',
                shimmerScrollContainer: 'LabelAlbumsPage_shimmerScrollContainer__v_um_',
                footer: 'LabelAlbumsPage_footer__dcXFk',
                item: 'LabelAlbumsPage_item__Qjz9F',
                content: 'LabelAlbumsPage_content__jOWKZ',
                shimmerTitle: 'LabelAlbumsPage_shimmerTitle__jbYXl',
                shimmerSortDropdown: 'LabelAlbumsPage_shimmerSortDropdown__LKtgF',
            };
        },
        29645: (e) => {
            e.exports = {
                root: 'SortDropdown_root__d1JmQ',
                button: 'SortDropdown_button__SjTI7',
                header: 'SortDropdown_header__kj8yV',
                container: 'SortDropdown_container__dyVF_',
            };
        },
        31661: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => l });
            var s = r(63565);
            let l = (e) => !!e && (e === s.g.RATING || e === s.g.YEAR);
        },
        34303: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => s });
            var s = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.URL = 'url'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
        44440: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => s });
            let s = (e, t) => {
                let r = new URL(window.location.href),
                    s = r.searchParams;
                return (s.set(e, t), (r.search = s.toString()), r.toString());
            };
        },
        54320: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => c });
            var s = r(88800),
                l = r(53548),
                a = r(29993),
                o = r(9492),
                i = r(29595),
                n = r(74965),
                d = r(74773);
            let c = (e, t) => {
                let { notify: r, dismiss: c } = (0, n.l)(),
                    u = (0, l.useRef)(void 0),
                    m = (0, a.c)(() => {
                        var r;
                        (c({ notificationId: u.current }), (u.current = 0));
                        let s = [...(null != (r = e.lastRejectedPagesList) ? r : [])].reverse().filter((t) => {
                            var r;
                            return (null == (r = e.pageStates) ? void 0 : r[t]) === d.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, l.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = r((0, s.jsx)(o.L, { reloadBlocks: m }), { containerId: i.u.ERROR, autoClose: !1 }));
                }, [c, m, r, e.rejectedPagesCount]);
            };
        },
        62837: (e, t, r) => {
            'use strict';
            r.d(t, { AS: () => m, Yw: () => s, JU: () => l, DQ: () => b, Ve: () => v });
            var s,
                l,
                a = r(43297),
                o = (function () {
                    function e(e) {
                        ((this.observableValue = (0, a.vP)(e)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var r = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var s = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (l) {
                                    if (l !== r.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && s) {
                                            s = !1;
                                            return;
                                        }
                                        (r.prevValueByListener.set(e, l), e(l));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, a.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var r = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var s = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (l) {
                                if (l !== r.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && s) {
                                        s = !1;
                                        return;
                                    }
                                    (r.prevValueByListener.set(e, l), e(l));
                                }
                            })
                        );
                    }));
            })();
            var i = r(14965);
            class n extends i.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, n.prototype));
                }
            }
            class d extends i.t {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    (super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, d.prototype));
                }
            }
            !(function (e) {
                ((e.MODAL = 'modal'),
                    (e.FOREIGN_AGENT = 'foreignAgent'),
                    (e.INFORMATIONAL = 'informational'),
                    (e.AGE_18 = 'age18'),
                    (e.EXPLICIT = 'explicit'),
                    (e.DESCRIPTION_TEXT = 'descriptionText'),
                    (e.AGE_12_ICON = 'age12Icon'),
                    (e.AGE_16_ICON = 'age16Icon'),
                    (e.AGE_18_ICON = 'age18Icon'),
                    (e.EXPLICIT_ICON = 'explicitIcon'),
                    (e.EXCLAMATION_ICON = 'exclamationIcon'));
            })(s || (s = {}));
            let c = (e) => {
                    let t = [];
                    for (let r of e) {
                        let [e, s] = r.split(':');
                        e && s && t.push({ type: e, id: s });
                    }
                    return t;
                },
                u = (e, t) => c(e).filter((e) => e.type === t);
            class m {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    ((this.dataSource = e.dataSource),
                        (this.itemsObservable = new o(null)),
                        (this.isLoadingObservable = new o(!1)),
                        (this.errorObservable = new o(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable));
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    ((this.isLoadingObservable.value = !0), (this.errorObservable.value = null));
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new n(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    ((this.loadingPromise = e), await e);
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new d(e, !0);
                }
                async resolveByType(e, t) {
                    let r = u(e, t);
                    return (await Promise.all(r.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = c(e),
                        r = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        s = {};
                    for (let e of r)
                        if (e) {
                            let t = s[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (s[e.disclaimerType] = t));
                        }
                    return s;
                }
                destroy() {
                    ((this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null));
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (e) {
                ((e.E = 'e'), (e.AGE_12 = '12+'), (e.AGE_16 = '16+'), (e.AGE_18 = '18+'), (e.EXCLAMATION = '!'));
            })(l || (l = {}));
            let _ = new Map([
                    [s.EXPLICIT_ICON, l.E],
                    [s.AGE_18_ICON, l.AGE_18],
                    [s.AGE_16_ICON, l.AGE_16],
                    [s.AGE_12_ICON, l.AGE_12],
                    [s.EXCLAMATION_ICON, l.EXCLAMATION],
                ]),
                h = [s.EXPLICIT_ICON, s.AGE_18_ICON, s.AGE_16_ICON, s.AGE_12_ICON, s.EXCLAMATION_ICON],
                b = (e) => {
                    let t = ((e, t) => {
                        for (let r of t) {
                            let t = u(e, r)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, h);
                    if (null === t) return null;
                    let r = _.get(t.type);
                    return void 0 !== r ? r : null;
                },
                v = (e, t) => u(e, t).length > 0;
        },
        63565: (e, t, r) => {
            'use strict';
            var s;
            (r.d(t, { g: () => s }),
                (function (e) {
                    ((e.RATING = 'rating'), (e.YEAR = 'year'));
                })(s || (s = {})));
        },
        79418: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => v });
            var s = r(88800),
                l = r(65724),
                a = r(61013),
                o = r(53548);
            let i = (e) => {
                    let { style: t, forwardRef: r, context: l, ...a } = e,
                        o = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        i = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: i, 'aria-label': o, style: { ...t }, ref: r, ...a });
                },
                n = (0, o.forwardRef)((e, t) => (0, s.jsx)(i, { forwardRef: t, ...e }));
            var d = r(16434),
                c = r.n(d);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: a, withHeader: o, withForceScroll: i, ...n } = e;
                    return (0, s.jsx)('div', {
                        className: (0, l.$)(c().scroller, { [c().scroller_withFooter]: a, [c().scroller_withHeader]: o, [c().scroller_withForceScroll]: i }),
                        style: { ...t },
                        ref: r,
                        ...n,
                        tabIndex: -1,
                    });
                },
                m = (0, o.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var _ = r(55482),
                h = r(75151);
            let b = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: l,
                            debounceDurationInMs: a = 100,
                            totalCount: i = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: d,
                            virtuosoRef: c,
                            ...u
                        } = e,
                        [m, b] = (0, o.useState)(null),
                        v = (0, o.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == l || l(e), n.length > 0 && b(e), t && r)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < s; e++) r(e);
                                    }
                                }, a),
                            [a, l, t, r, n],
                        );
                    (0, o.useEffect)(() => {
                        n.length > 0 && m && v(m);
                    }, n);
                    let g = (0, o.useMemo)(() => {
                        if (d)
                            return (0, _.A)((e) => {
                                d(e);
                            }, a);
                    }, [d, a]);
                    return (0, s.jsx)(h.sN, { ref: c, rangeChanged: v, totalCount: i, endReached: g, ...u });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: i,
                            onGetDataByRange: d,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: h,
                            overscan: v = 700,
                            pageSize: g = 20,
                            totalCount: f,
                            totalRequests: p,
                            debounceDurationInMs: y,
                            initialItemCount: A,
                            minInitialItemCount: I = 20,
                            handleRef: N,
                            alwaysShowScrollbar: C = !1,
                            testId: E,
                            isMobileLayout: O = !1,
                            shouldTriggerRangeChangedOn: x,
                            ...L
                        } = e,
                        [S, w] = (0, o.useState)(!1),
                        T = (0, o.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    w(e);
                                }, 100),
                            [],
                        ),
                        R = (0, o.useMemo)(() => {
                            var e, t;
                            return O
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : n,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : n,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, p, O]),
                        j = A ? Math.min(A, I) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(c().root, { [c().root_scrolling]: S || C, [c().root_notScrolling]: !S && !C }, t),
                        'data-test-id': E,
                        children: [
                            O && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, s.jsx)(b, {
                                overscan: v,
                                components: R,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: T,
                                itemContent: _,
                                scrollerRef: N,
                                totalCount: f,
                                pageSize: g,
                                onPageHandler: i,
                                onRangeHandler: d,
                                debounceDurationInMs: y,
                                initialItemCount: j,
                                shouldTriggerRangeChangedOn: x,
                                ...L,
                            }),
                            O && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        83210: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 568));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7437, 4814, 9079, 1833, 3469, 8194, 1191, 8655, 949, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 9202, 4732, 9087,
                3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 2288, 3360, 763, 2670, 7358,
            ],
            () => e((e.s = 83210)),
        ),
            (_N_E = e.O()));
    },
]);
