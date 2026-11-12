(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2837, 8953],
    {
        11006: (e) => {
            e.exports = {
                root: 'Footer_root__ugyur',
                root_withOffsetForDeeplink: 'Footer_root_withOffsetForDeeplink__qcs6U',
                important: 'Footer_important__mCXZp',
                links: 'Footer_links__3kOY7',
                list: 'Footer_list__0sCXQ',
                copyrights: 'Footer_copyrights__IsnbJ',
                link: 'Footer_link__av50q',
                copyrightLink: 'Footer_copyrightLink__6NOkg',
                yandexMusicLink: 'Footer_yandexMusicLink__k7ILf',
                explicitText: 'Footer_explicitText__Px3wr',
                text: 'Footer_text__lMPwl',
                empty: 'Footer_empty__RR_zf',
            };
        },
        14965: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => i });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: s = {}, ...l } = t,
                        n = e || 'Internal error';
                    (super(n, l), (this.message = n), (this.code = r), (this.data = s), (this.stack = Error(n).stack), Object.setPrototypeOf(this, i.prototype));
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
        32353: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => i, u: () => s });
            var i = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                s = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        49161: (e, t, r) => {
            'use strict';
            r.d(t, { g: () => S });
            var i = r(88800),
                s = r(65724),
                l = r(84961),
                n = r(53548),
                o = r(2058),
                a = r(58390),
                c = r(87999),
                d = r(76903),
                u = r(17392),
                h = r(29504),
                p = r(10079),
                m = r(69630),
                _ = r(98427),
                g = r(46422),
                O = r(32353),
                y = r(44230),
                b = r(37670),
                v = r(72288),
                I = r(86790),
                E = r(60266),
                f = r(93317),
                C = r(37770),
                N = r(79418),
                A = r(77741),
                x = r(79023),
                L = r.n(x);
            let S = (0, l.PA)((e) => {
                var t, r;
                let { id: l, variant: x } = e,
                    {
                        nonMusic: { albums: S },
                        settings: R,
                    } = (0, v.g)(),
                    { formatMessage: T } = (0, o.A)(),
                    { contentScrollRef: P, setContentScrollRef: w } = (0, y.g)(),
                    k = (0, g.W)(),
                    M = R.layout === O.u.Mobile;
                ((S.isNotFound || !l) && (0, a.notFound)(),
                    (0, b.J)(S.isResolved),
                    (0, n.useEffect)(
                        () => () => {
                            S.reset();
                        },
                        [S],
                    ));
                let j = (0, n.useCallback)(
                        (e) => {
                            S.getAlbumsByRange(e.startIndex, e.endIndex);
                        },
                        [S],
                    ),
                    D = (0, n.useMemo)(() => ({ Footer: () => (0, i.jsx)(E.A, { children: (0, i.jsx)(I.w, { className: L().footer }) }) }), []),
                    F = S.isLoading ? 20 : null != (r = null == (t = S.albums) ? void 0 : t.length) ? r : 0;
                return (
                    l && S.isNeededToLoad && (x === A.x.EDITORIAL ? (0, n.use)(S.getEditorialAlbums({ id: l })) : (0, n.use)(S.getCategoryAlbums({ id: l }))),
                    (0, i.jsx)(d.a, {
                        pageId: c.AppScreen.NonMusicAlbums,
                        pageIdForFrom: _.b.NON_MUSIC_ALBUMS,
                        children: (0, i.jsx)(m.h, {
                            scrollElement: P,
                            outerTitle: S.title,
                            children: (0, i.jsxs)('div', {
                                className: L().root,
                                'data-test-id': u.Xk.nonMusic.NON_MUSIC_ALBUMS_PAGE,
                                children: [
                                    (0, i.jsx)(f.Y, {
                                        variant: f.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: k.canBack,
                                        children: (0, i.jsx)(h.DZ, {
                                            id: 'collection-artists-header',
                                            variant: 'h2',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            children: S.title,
                                        }),
                                    }),
                                    (0, i.jsx)(N.$, {
                                        className: (0, s.$)(L().scrollContainer, L().important),
                                        customComponents: D,
                                        itemContentCallback: (e) => {
                                            var t, r;
                                            let s = null == (r = S.albums) || null == (t = r[e]) ? void 0 : t.data,
                                                l = T({ id: 'loading-messages.entity-is-loading' }, { entityName: T({ id: 'entity-names.album' }) });
                                            return s
                                                ? (0, i.jsx)(p.a, { withLikesCount: !0, album: s, contentLinesCount: 3 }, s.id)
                                                : (0, i.jsx)(C.V, { 'aria-label': l }, e);
                                        },
                                        totalCount: F,
                                        onGetDataByRange: j,
                                        totalRequests: S.requestsCount,
                                        listClassName: L().content,
                                        itemClassName: L().item,
                                        handleRef: w,
                                        context: { listAriaLabel: T({ id: 'mixes.albums-list' }, { genreName: S.title || '' }) },
                                        isMobileLayout: M,
                                        useWindowScroll: M,
                                    }),
                                ],
                            }),
                        }),
                    })
                );
            });
        },
        60266: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            var i = r(88800);
            r(30282);
            var s = r(11006),
                l = r.n(s);
            let n = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: l().empty });
            };
        },
        62293: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => s });
            var i = r(97956);
            let s = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: s, userRegion: l } = e;
                return 'ru' === l && t(i.z.WebNextFooterDisclaimer, 'on') ? r() : s();
            };
        },
        62837: (e, t, r) => {
            'use strict';
            r.d(t, { AS: () => h, Yw: () => i, JU: () => s, DQ: () => _, Ve: () => g });
            var i,
                s,
                l = r(43297),
                n = (function () {
                    function e(e) {
                        ((this.observableValue = (0, l.vP)(e)), (this.prevValueByListener = new Map()));
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
                            var i = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (s) {
                                    if (s !== r.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && i) {
                                            i = !1;
                                            return;
                                        }
                                        (r.prevValueByListener.set(e, s), e(s));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, l.EW)(e)), (this.prevValueByListener = new Map()));
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
                        var i = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (s) {
                                if (s !== r.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && i) {
                                        i = !1;
                                        return;
                                    }
                                    (r.prevValueByListener.set(e, s), e(s));
                                }
                            })
                        );
                    }));
            })();
            var o = r(14965);
            class a extends o.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
            class c extends o.t {
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
                        Object.setPrototypeOf(this, c.prototype));
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
            })(i || (i = {}));
            let d = (e) => {
                    let t = [];
                    for (let r of e) {
                        let [e, i] = r.split(':');
                        e && i && t.push({ type: e, id: i });
                    }
                    return t;
                },
                u = (e, t) => d(e).filter((e) => e.type === t);
            class h {
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
                        (this.itemsObservable = new n(null)),
                        (this.isLoadingObservable = new n(!1)),
                        (this.errorObservable = new n(null)),
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
                            let t = e instanceof Error ? e : new a(e);
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
                    throw new c(e, !0);
                }
                async resolveByType(e, t) {
                    let r = u(e, t);
                    return (await Promise.all(r.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = d(e),
                        r = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        i = {};
                    for (let e of r)
                        if (e) {
                            let t = i[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (i[e.disclaimerType] = t));
                        }
                    return i;
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
            })(s || (s = {}));
            let p = new Map([
                    [i.EXPLICIT_ICON, s.E],
                    [i.AGE_18_ICON, s.AGE_18],
                    [i.AGE_16_ICON, s.AGE_16],
                    [i.AGE_12_ICON, s.AGE_12],
                    [i.EXCLAMATION_ICON, s.EXCLAMATION],
                ]),
                m = [i.EXPLICIT_ICON, i.AGE_18_ICON, i.AGE_16_ICON, i.AGE_12_ICON, i.EXCLAMATION_ICON],
                _ = (e) => {
                    let t = ((e, t) => {
                        for (let r of t) {
                            let t = u(e, r)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, m);
                    if (null === t) return null;
                    let r = p.get(t.type);
                    return void 0 !== r ? r : null;
                },
                g = (e, t) => u(e, t).length > 0;
        },
        70621: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => a });
            var i = r(53548),
                s = r(63582),
                l = r(245),
                n = r(22681),
                o = r(56374);
            let a = (0, s.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, l.N)(),
                    t = (0, n.w)(),
                    r = (0, i.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, o.c)((e) => {
                    t?.object && r && r.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        76903: (e, t, r) => {
            'use strict';
            r.d(t, { a: () => u });
            var i = r(88800),
                s = r(53548),
                l = r(53534),
                n = r(63582),
                o = r(245);
            let a = new WeakMap();
            class c {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, t) {
                    this.screenViewUuid = e;
                    let r =
                        a.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                r = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                i = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                r();
                                            } finally {
                                                ((t = !1), e.length > 0 && i());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (r(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), i());
                                },
                            };
                        })();
                    (a.set(t, r), (this.queue = r));
                }
                open(e, t) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (t(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, t) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: t, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, t) {
                    this.loadedTabs.has(e) || (t(), this.loadedTabs.add(e));
                }
                scheduleClose() {
                    let e = this.pendingClose;
                    !e ||
                        e.scheduled ||
                        this.consumers.size > 0 ||
                        ((e.scheduled = !0),
                        this.queue.defer(() => {
                            this.pendingClose !== e || this.consumers.size > 0 || ((this.pendingClose = null), e.send(), (this.closed = !0));
                        }));
                }
            }
            var d = r(87999);
            let u = (0, n.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let r = (0, o.N)(),
                        n = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [a, u] = (0, s.useState)(() => {
                            let e = new c(r.createScreenSession().screenViewUuid, r);
                            return { client: r, input: t, isReady: n, scope: n ? r.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        a.client !== r ||
                        a.input.pageId !== t.pageId ||
                        a.input.skeletonId !== t.skeletonId ||
                        a.input.mainObjectType !== t.mainObjectType ||
                        a.input.mainObjectId !== t.mainObjectId
                    ) {
                        let s = new c(r.createScreenSession().screenViewUuid, r),
                            o = { client: r, input: t, isReady: n, scope: n ? r.createScreenScope(t, s) : null, session: s };
                        return (u(o), (0, i.jsx)(l.k, { value: o, children: e }));
                    }
                    if (
                        a.isReady !== n ||
                        a.input.displayReasonId !== t.displayReasonId ||
                        a.input.pageIdForFrom !== t.pageIdForFrom ||
                        a.input.pagePlacement !== t.pagePlacement ||
                        a.input.pageStyle !== t.pageStyle
                    ) {
                        let s = { ...a, input: t, isReady: n, scope: n ? r.createScreenScope(t, a.session) : null };
                        return (u(s), (0, i.jsx)(l.k, { value: s, children: e }));
                    }
                    return (0, i.jsx)(l.k, { value: a, children: e });
                },
            );
        },
        77741: (e, t, r) => {
            'use strict';
            r.d(t, { x: () => i });
            var i = (function (e) {
                return ((e.CATEGORY = 'category'), (e.EDITORIAL = 'editorial'), e);
            })({});
        },
        79023: (e) => {
            e.exports = {
                root: 'NonMusicAlbumsPage_root__jlDXa',
                scrollContainer: 'NonMusicAlbumsPage_scrollContainer__XNRsu',
                important: 'NonMusicAlbumsPage_important__Rk8LT',
                footer: 'NonMusicAlbumsPage_footer__LJCIL',
                item: 'NonMusicAlbumsPage_item__YArCS',
                content: 'NonMusicAlbumsPage_content__phVa7',
            };
        },
        79418: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => g });
            var i = r(88800),
                s = r(65724),
                l = r(61013),
                n = r(53548);
            let o = (e) => {
                    let { style: t, forwardRef: r, context: s, ...l } = e,
                        n = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        o = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': n, style: { ...t }, ref: r, ...l });
                },
                a = (0, n.forwardRef)((e, t) => (0, i.jsx)(o, { forwardRef: t, ...e }));
            var c = r(16434),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: l, withHeader: n, withForceScroll: o, ...a } = e;
                    return (0, i.jsx)('div', {
                        className: (0, s.$)(d().scroller, { [d().scroller_withFooter]: l, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: r,
                        ...a,
                        tabIndex: -1,
                    });
                },
                h = (0, n.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
            var p = r(55482),
                m = r(75151);
            let _ = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: s,
                            debounceDurationInMs: l = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [h, _] = (0, n.useState)(null),
                        g = (0, n.useMemo)(
                            () =>
                                (0, p.A)((e) => {
                                    if ((null == s || s(e), a.length > 0 && _(e), t && r)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < i; e++) r(e);
                                    }
                                }, l),
                            [l, s, t, r, a],
                        );
                    (0, n.useEffect)(() => {
                        a.length > 0 && h && g(h);
                    }, a);
                    let O = (0, n.useMemo)(() => {
                        if (c)
                            return (0, p.A)((e) => {
                                c(e);
                            }, l);
                    }, [c, l]);
                    return (0, i.jsx)(m.sN, { ref: d, rangeChanged: g, totalCount: o, endReached: O, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: o,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: p,
                            listClassName: m,
                            overscan: g = 700,
                            pageSize: O = 20,
                            totalCount: y,
                            totalRequests: b,
                            debounceDurationInMs: v,
                            initialItemCount: I,
                            minInitialItemCount: E = 20,
                            handleRef: f,
                            alwaysShowScrollbar: C = !1,
                            testId: N,
                            isMobileLayout: A = !1,
                            shouldTriggerRangeChangedOn: x,
                            ...L
                        } = e,
                        [S, R] = (0, n.useState)(!1),
                        T = (0, n.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    R(e);
                                }, 100),
                            [],
                        ),
                        P = (0, n.useMemo)(() => {
                            var e, t;
                            return A
                                ? {
                                      Scroller: h,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : a,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: h,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : a,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, b, A]),
                        w = I ? Math.min(I, E) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, s.$)(d().root, { [d().root_scrolling]: S || C, [d().root_notScrolling]: !S && !C }, t),
                        'data-test-id': N,
                        children: [
                            A && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, i.jsx)(_, {
                                overscan: g,
                                components: P,
                                listClassName: m,
                                itemClassName: u,
                                isScrolling: T,
                                itemContent: p,
                                scrollerRef: f,
                                totalCount: y,
                                pageSize: O,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: v,
                                initialItemCount: w,
                                shouldTriggerRangeChangedOn: x,
                                ...L,
                            }),
                            A && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        86790: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => N });
            var i = r(88800),
                s = r(65724),
                l = r(84961),
                n = r(2058),
                o = r(30282),
                a = r(94144),
                c = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let d = (e, t, r) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: r, tld: i, year: s } = e;
                    return {
                        year: s,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, i, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, i, r) },
                    };
                };
            var h = r(62293),
                p = r(99839);
            let m = (e) => e(new Date(), (0, p.m)());
            var _ = r(51611),
                g = r(72288),
                O = r(11006),
                y = r.n(O),
                b = r(17392),
                v = r(29504),
                I = r(91292);
            let E = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, s.$)(y().copyrights, t),
                        'data-test-id': b.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, i.jsx)(I.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, s.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': b.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(v.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(I.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': b.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                f = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, i.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: y().list,
                                'data-test-id': b.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: s } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, i.jsx)(I.N, { target: '_blank', href: s, className: y().link, 'data-test-id': b.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': b.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                C = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, s.$)(y().root, y().important, t),
                        'data-test-id': b.S7.FOOTER,
                        children: [(0, i.jsx)(f, { links: r.links, disclaimer: r.disclaimer }), (0, i.jsx)(E, { data: r.copyrights })],
                    });
                };
            (0, l.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, g.g)(),
                    { formatDate: s, formatMessage: l } = (0, n.A)(),
                    { language: o } = (0, _.h)(),
                    a = u({ formatMessage: l, language: o, tld: r.tld, year: m(s) });
                return (0, i.jsx)(E, { className: t, data: a });
            });
            let N = (0, l.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: l, location: p, user: O } = (0, g.g)(),
                    { formatDate: b, formatMessage: v } = (0, n.A)(),
                    { isEnabled: I } = null != (t = (0, a.P)()) ? t : {},
                    { language: E } = (0, _.h)(),
                    f = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: i, language: s, tld: l, userRegion: n, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: i, language: s, userRegion: l } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, i, s) },
                                    o = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, i, s) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, i, s) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, i, s) },
                                    h = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, i, s) },
                                    p = [n, a, u];
                                return (r && 'ru' === l && p.push(o), p.push(h), p);
                            })({ formatMessage: r, isWebApplication: i, language: s, tld: l, userRegion: n }),
                            disclaimer: (0, h.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: r, language: s, tld: l, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => l.checkExperiment(e, t),
                        formatMessage: v,
                        isWebApplication: o.$3,
                        tld: p.tld,
                        language: E,
                        userRegion: O.account.data.userSessionRegionIso,
                        year: m(b),
                    });
                return (0, i.jsx)(C, { className: (0, s.$)({ [y().root_withOffsetForDeeplink]: I }, r), data: f });
            });
        },
        94144: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => s, P: () => l });
            var i = r(53548);
            let s = (0, i.createContext)(null),
                l = () => (0, i.useContext)(s);
        },
        99839: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
    },
]);
