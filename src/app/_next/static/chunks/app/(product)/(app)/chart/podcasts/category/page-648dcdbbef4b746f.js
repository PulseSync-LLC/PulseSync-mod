(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2056, 2837],
    {
        1698: (e, t, s) => {
            'use strict';
            s.d(t, { e: () => l });
            var i = s(88800),
                r = s(37770);
            let l = (e) => {
                let {
                    isActive: t,
                    itemClassName: s,
                    round: l,
                    centered: o,
                    withInfo: a,
                    count: n = 10,
                    shimmerClassName: c,
                    linesCount: u,
                    'aria-label': d,
                    withSubcover: h,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, i.jsx)(
                        r.V,
                        { isActive: t, linesCount: u, className: s, round: l, centered: o, withInfo: a, withSubcover: h, 'aria-label': d, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        4370: (e, t, s) => {
            'use strict';
            s.d(t, { Z: () => r });
            var i = s(67174);
            let r = {
                main: (0, i.u)('/'),
                chart: (0, i.u)('/chart'),
                chartPodcasts: (0, i.u)('/chart/podcasts'),
                collection: (0, i.u)('/collection'),
                collectionAlbums: (0, i.u)('/collection/albums'),
                collectionArtists: (0, i.u)('/collection/artists'),
                collectionClips: (0, i.u)('/collection/clips'),
                collectionDislikes: (0, i.u)('/collection/dislikes'),
                collectionKids: (0, i.u)('/collection/kids'),
                collectionKidsAlbums: (0, i.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, i.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, i.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, i.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, i.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, i.u)('/collection/multivibes'),
                collectionPlaylists: (0, i.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, i.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, i.u)('/collection/playlists/liked'),
                collectionShelf: (0, i.u)('/collection/shelf'),
                collectionShelfLiked: (0, i.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, i.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, i.u)('/collection/shelf/recently-played'),
                concerts: (0, i.u)('/concerts'),
                kids: (0, i.u)('/kids'),
                mixes: (0, i.u)('/mixes'),
                musicHistory: (0, i.u)('/music-history'),
                muzmarket: (0, i.u)('/muzmarket'),
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                multivibe: (0, i.u)('/multivibe'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        14965: (e, t, s) => {
            'use strict';
            s.d(t, { t: () => i });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: r = {}, ...l } = t,
                        o = e || 'Internal error';
                    (super(o, l), (this.message = o), (this.code = s), (this.data = r), (this.stack = Error(o).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        36e3: (e, t, s) => {
            'use strict';
            (s.r(t), s.d(t, { default: () => n }));
            var i = s(88800),
                r = s(53548),
                l = s(58390),
                o = s(70236),
                a = s(92677);
            let n = () => {
                let e = (0, l.useSearchParams)().get('categoryId');
                return (
                    e || (0, l.notFound)(),
                    (0, i.jsx)(r.Suspense, { fallback: (0, i.jsx)(a.ChartPodcastsPageSuspenseLoader, {}), children: (0, i.jsx)(o.ChartPodcastsPage, { categoryId: e }) })
                );
            };
        },
        62837: (e, t, s) => {
            'use strict';
            s.d(t, { AS: () => h, Yw: () => i, JU: () => r, DQ: () => v, Ve: () => y });
            var i,
                r,
                l = s(43297),
                o = (function () {
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
                            var s = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var i = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (r) {
                                    if (r !== s.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && i) {
                                            i = !1;
                                            return;
                                        }
                                        (s.prevValueByListener.set(e, r), e(r));
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
                        var s = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var i = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (r) {
                                if (r !== s.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && i) {
                                        i = !1;
                                        return;
                                    }
                                    (s.prevValueByListener.set(e, r), e(r));
                                }
                            })
                        );
                    }));
            })();
            var a = s(14965);
            class n extends a.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, n.prototype));
                }
            }
            class c extends a.t {
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
            let u = (e) => {
                    let t = [];
                    for (let s of e) {
                        let [e, i] = s.split(':');
                        e && i && t.push({ type: e, id: i });
                    }
                    return t;
                },
                d = (e, t) => u(e).filter((e) => e.type === t);
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
                    throw new c(e, !0);
                }
                async resolveByType(e, t) {
                    let s = d(e, t);
                    return (await Promise.all(s.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = u(e),
                        s = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        i = {};
                    for (let e of s)
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
            })(r || (r = {}));
            let m = new Map([
                    [i.EXPLICIT_ICON, r.E],
                    [i.AGE_18_ICON, r.AGE_18],
                    [i.AGE_16_ICON, r.AGE_16],
                    [i.AGE_12_ICON, r.AGE_12],
                    [i.EXCLAMATION_ICON, r.EXCLAMATION],
                ]),
                b = [i.EXPLICIT_ICON, i.AGE_18_ICON, i.AGE_16_ICON, i.AGE_12_ICON, i.EXCLAMATION_ICON],
                v = (e) => {
                    let t = ((e, t) => {
                        for (let s of t) {
                            let t = d(e, s)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, b);
                    if (null === t) return null;
                    let s = m.get(t.type);
                    return void 0 !== s ? s : null;
                },
                y = (e, t) => d(e, t).length > 0;
        },
        70236: (e, t, s) => {
            'use strict';
            s.d(t, { ChartPodcastsPage: () => x });
            var i = s(88800),
                r = s(65724),
                l = s(84961),
                o = s(53548),
                a = s(2058),
                n = s(58390),
                c = s(87999),
                u = s(76903),
                d = s(17392),
                h = s(19994),
                m = s(29504),
                b = s(32596),
                v = s(10079),
                y = s(69630),
                p = s(98427),
                C = s(46422),
                g = s(44230),
                f = s(37670),
                _ = s(34961),
                I = s(53892),
                A = s(72288),
                O = s(86790),
                P = s(60266),
                N = s(93317),
                E = s(37770),
                w = s(79418),
                L = s(76541),
                T = s(70638),
                k = s.n(T);
            let x = (0, l.PA)((e) => {
                let { categoryId: t } = e,
                    { podcastsSubPage: s } = (0, _.s)(I.n.CHART),
                    {
                        settings: { isMobile: l },
                    } = (0, A.g)(),
                    { contentScrollRef: T, setContentScrollRef: x } = (0, g.g)(),
                    { formatMessage: S } = (0, a.A)(),
                    j = (0, C.W)(),
                    V = (0, o.useMemo)(() => ({ Footer: () => (0, i.jsx)(P.A, { children: (0, i.jsx)(O.w, { className: k().footer }) }) }), []),
                    B = (0, o.useMemo)(
                        () =>
                            s.title
                                ? (0, i.jsx)(m.DZ, { id: 'collection-artists-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: s.title })
                                : (0, i.jsx)(h.W, { className: k().shimmerTitle, radius: 'l' }),
                        [s.title],
                    );
                if (
                    ((0, f.J)(s.isResolved),
                    s.isNotFound && (0, n.notFound)(),
                    (0, o.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    s.isNeededToLoad && (0, o.use)(s.getData(t)),
                    s.isSomethingWrong)
                )
                    return (0, i.jsx)(b.SomethingWentWrong, {});
                let D = s.isShimmerVisible ? L.w : s.itemsCount;
                return (0, i.jsx)(u.a, {
                    pageId: t ? c.AppScreen.ChartPodcastsCategory : c.AppScreen.ChartPodcasts,
                    pageIdForFrom: t ? p.b.CHART_PODCASTS_CATEGORY : p.b.CHART_PODCASTS,
                    children: (0, i.jsx)(y.h, {
                        scrollElement: T,
                        outerTitle: s.title,
                        children: (0, i.jsxs)('div', {
                            className: k().root,
                            'data-test-id': d.Xk.chart.CHART_PODCASTS,
                            children: [
                                (0, i.jsx)(N.Y, { variant: N.V.TEXT, withForwardControl: !1, withBackwardControl: j.canBack, children: B }),
                                (0, i.jsx)(w.$, {
                                    className: (0, r.$)(k().scrollContainer, k().important),
                                    listClassName: k().content,
                                    customComponents: V,
                                    itemContentCallback: (e) => {
                                        let t = s.items[e],
                                            r = S({ id: 'loading-messages.entity-is-loading' }, { entityName: S({ id: 'entity-names.album' }) });
                                        return !t || s.isShimmerVisible
                                            ? (0, i.jsx)(E.V, { 'aria-label': r })
                                            : (0, i.jsx)(v.a, { album: t, contentLinesCount: 3, withLikesCount: !0, withChart: !0, withAddition: !1 });
                                    },
                                    handleRef: x,
                                    initialItemCount: D,
                                    totalCount: D,
                                    isMobileLayout: l,
                                    useWindowScroll: l,
                                    context: { listAriaLabel: S({ id: 'entity-names.chart-podcasts-list' }) },
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        70621: (e, t, s) => {
            'use strict';
            s.d(t, { D: () => n });
            var i = s(53548),
                r = s(63582),
                l = s(245),
                o = s(22681),
                a = s(56374);
            let n = (0, r.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, l.N)(),
                    t = (0, o.w)(),
                    s = (0, i.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, a.c)((e) => {
                    t?.object && s && s.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        70638: (e) => {
            e.exports = {
                root: 'ChartPodcastsPage_root__J5lnx',
                scrollContainer: 'ChartPodcastsPage_scrollContainer__WQTf7',
                important: 'ChartPodcastsPage_important__fW45m',
                shimmerScrollContainer: 'ChartPodcastsPage_shimmerScrollContainer__nOO43',
                footer: 'ChartPodcastsPage_footer__7ytrT',
                item: 'ChartPodcastsPage_item__vGRt8',
                content: 'ChartPodcastsPage_content__NcV4M',
                shimmerTitle: 'ChartPodcastsPage_shimmerTitle__Missw',
            };
        },
        80051: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 36e3));
        },
        92677: (e, t, s) => {
            'use strict';
            s.d(t, { ChartPodcastsPageSuspenseLoader: () => b });
            var i = s(88800),
                r = s(65724),
                l = s(2058),
                o = s(19994),
                a = s(69630),
                n = s(46422),
                c = s(93317),
                u = s(1698),
                d = s(76541),
                h = s(70638),
                m = s.n(h);
            let b = () => {
                let e = (0, n.W)(),
                    { formatMessage: t } = (0, l.A)(),
                    s = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.album' }) });
                return (0, i.jsx)(a.h, {
                    scrollElement: null,
                    children: (0, i.jsxs)('div', {
                        className: m().root,
                        children: [
                            (0, i.jsx)(c.Y, {
                                variant: c.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: (0, i.jsx)(o.W, { className: m().shimmerTitle, radius: 'l' }),
                            }),
                            (0, i.jsx)('div', {
                                className: (0, r.$)(m().scrollContainer, m().important, m().shimmerScrollContainer),
                                children: (0, i.jsx)('div', {
                                    className: m().content,
                                    children: (0, i.jsx)(u.e, { isActive: !0, itemClassName: m().item, 'aria-label': s, count: d.w }),
                                }),
                            }),
                        ],
                    }),
                });
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                4700, 7908, 3248, 5038, 7065, 1147, 4555, 1191, 7072, 8655, 2691, 2831, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800,
                5151, 4732, 9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 5866, 763, 2670, 7358,
            ],
            () => e((e.s = 80051)),
        ),
            (_N_E = e.O()));
    },
]);
