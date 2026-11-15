(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1271, 2837],
    {
        1698: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            var s = i(88800),
                l = i(37770);
            let r = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: r,
                    centered: o,
                    withInfo: a,
                    count: n = 10,
                    shimmerClassName: c,
                    linesCount: u,
                    'aria-label': d,
                    withSubcover: h,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, s.jsx)(
                        l.V,
                        { isActive: t, linesCount: u, className: i, round: r, centered: o, withInfo: a, withSubcover: h, 'aria-label': d, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => l });
            var s = i(67174);
            let l = {
                main: (0, s.u)('/'),
                chart: (0, s.u)('/chart'),
                chartPodcasts: (0, s.u)('/chart/podcasts'),
                collection: (0, s.u)('/collection'),
                collectionAlbums: (0, s.u)('/collection/albums'),
                collectionArtists: (0, s.u)('/collection/artists'),
                collectionClips: (0, s.u)('/collection/clips'),
                collectionDislikes: (0, s.u)('/collection/dislikes'),
                collectionKids: (0, s.u)('/collection/kids'),
                collectionKidsAlbums: (0, s.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, s.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, s.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, s.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, s.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, s.u)('/collection/multivibes'),
                collectionPlaylists: (0, s.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, s.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, s.u)('/collection/playlists/liked'),
                collectionShelf: (0, s.u)('/collection/shelf'),
                collectionShelfLiked: (0, s.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, s.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, s.u)('/collection/shelf/recently-played'),
                concerts: (0, s.u)('/concerts'),
                kids: (0, s.u)('/kids'),
                mixes: (0, s.u)('/mixes'),
                musicHistory: (0, s.u)('/music-history'),
                muzmarket: (0, s.u)('/muzmarket'),
                mymusic: (0, s.u)('/mymusic'),
                mymusicDownloadsTracks: (0, s.u)('/mymusic/downloads/tracks'),
                multivibe: (0, s.u)('/multivibe'),
                nonMusic: (0, s.u)('/non-music'),
                pay: (0, s.u)('/pay'),
                userSlides: (0, s.u)('/slides/user'),
                search: (0, s.u)('/search'),
                searchHistory: (0, s.u)('/search/history'),
                settings: (0, s.u)('/settings'),
                video: (0, s.u)('/video'),
            };
        },
        14965: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => s });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: l = {}, ...r } = t,
                        o = e || 'Internal error';
                    (super(o, r), (this.message = o), (this.code = i), (this.data = l), (this.stack = Error(o).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        62837: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => h, Yw: () => s, JU: () => l, DQ: () => v, Ve: () => y });
            var s,
                l,
                r = i(43297),
                o = (function () {
                    function e(e) {
                        ((this.observableValue = (0, r.vP)(e)), (this.prevValueByListener = new Map()));
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
                            var i = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var s = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (l) {
                                    if (l !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && s) {
                                            s = !1;
                                            return;
                                        }
                                        (i.prevValueByListener.set(e, l), e(l));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, r.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var i = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var s = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (l) {
                                if (l !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && s) {
                                        s = !1;
                                        return;
                                    }
                                    (i.prevValueByListener.set(e, l), e(l));
                                }
                            })
                        );
                    }));
            })();
            var a = i(14965);
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
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.MODAL = 'modal'),
                    (t.FOREIGN_AGENT = 'foreignAgent'),
                    (t.INFORMATIONAL = 'informational'),
                    (t.AGE_18 = 'age18'),
                    (t.EXPLICIT = 'explicit'),
                    (t.DESCRIPTION_TEXT = 'descriptionText'),
                    (t.AGE_12_ICON = 'age12Icon'),
                    (t.AGE_16_ICON = 'age16Icon'),
                    (t.AGE_18_ICON = 'age18Icon'),
                    (t.EXPLICIT_ICON = 'explicitIcon'),
                    ((t.EXCLAMATION_ICON = 'exclamationIcon'), (t.SUBSTITUTED_ICON = 'substitutedIcon')));
                // for PulseSync: END substituted-track enum extension
            })(s || (s = {}));
            let u = (e) => {
                    let t = [];
                    for (let i of e) {
                        let [e, s] = i.split(':');
                        e && s && t.push({ type: e, id: s });
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
                    let i = d(e, t);
                    return (await Promise.all(i.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = u(e),
                        i = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        s = {};
                    for (let e of i)
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
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.E = 'e'), (t.AGE_12 = '12+'), (t.AGE_16 = '16+'), (t.AGE_18 = '18+'), ((t.EXCLAMATION = '!'), (t.SUBSTITUTED = 'substituted')));
                // for PulseSync: END substituted-track enum extension
            })(l || (l = {}));
            let m = new Map([
                    [s.EXPLICIT_ICON, l.E],
                    [s.AGE_18_ICON, l.AGE_18],
                    [s.AGE_16_ICON, l.AGE_16],
                    [s.AGE_12_ICON, l.AGE_12],
                    [s.EXCLAMATION_ICON, l.EXCLAMATION],
                    // for PulseSync: BEGIN map the substituted-track icon to its label
                    [s.SUBSTITUTED_ICON, l.SUBSTITUTED],
                    // for PulseSync: END map the substituted-track icon to its label
                ]),
                b = [s.EXPLICIT_ICON, s.AGE_18_ICON, s.AGE_16_ICON, s.AGE_12_ICON, s.SUBSTITUTED_ICON, s.EXCLAMATION_ICON],
                v = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = d(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, b);
                    if (null === t) return null;
                    let i = m.get(t.type);
                    return void 0 !== i ? i : null;
                },
                y = (e, t) => d(e, t).length > 0;
        },
        70236: (e, t, i) => {
            'use strict';
            i.d(t, { ChartPodcastsPage: () => x });
            var s = i(88800),
                l = i(65724),
                r = i(84961),
                o = i(53548),
                a = i(2058),
                n = i(58390),
                c = i(87999),
                u = i(76903),
                d = i(17392),
                h = i(19994),
                m = i(29504),
                b = i(32596),
                v = i(10079),
                y = i(69630),
                p = i(98427),
                C = i(46422),
                g = i(44230),
                _ = i(37670),
                f = i(34961),
                A = i(53892),
                O = i(72288),
                I = i(86790),
                P = i(60266),
                N = i(93317),
                E = i(37770),
                w = i(79418),
                T = i(76541),
                L = i(70638),
                k = i.n(L);
            let x = (0, r.PA)((e) => {
                let { categoryId: t } = e,
                    { podcastsSubPage: i } = (0, f.s)(A.n.CHART),
                    {
                        settings: { isMobile: r },
                    } = (0, O.g)(),
                    { contentScrollRef: L, setContentScrollRef: x } = (0, g.g)(),
                    { formatMessage: S } = (0, a.A)(),
                    j = (0, C.W)(),
                    V = (0, o.useMemo)(() => ({ Footer: () => (0, s.jsx)(P.A, { children: (0, s.jsx)(I.w, { className: k().footer }) }) }), []),
                    B = (0, o.useMemo)(
                        () =>
                            i.title
                                ? (0, s.jsx)(m.DZ, { id: 'collection-artists-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: i.title })
                                : (0, s.jsx)(h.W, { className: k().shimmerTitle, radius: 'l' }),
                        [i.title],
                    );
                if (
                    ((0, _.J)(i.isResolved),
                    i.isNotFound && (0, n.notFound)(),
                    (0, o.useEffect)(
                        () => () => {
                            i.reset();
                        },
                        [i],
                    ),
                    i.isNeededToLoad && (0, o.use)(i.getData(t)),
                    i.isSomethingWrong)
                )
                    return (0, s.jsx)(b.SomethingWentWrong, {});
                let D = i.isShimmerVisible ? T.w : i.itemsCount;
                return (0, s.jsx)(u.a, {
                    pageId: t ? c.AppScreen.ChartPodcastsCategory : c.AppScreen.ChartPodcasts,
                    pageIdForFrom: t ? p.b.CHART_PODCASTS_CATEGORY : p.b.CHART_PODCASTS,
                    children: (0, s.jsx)(y.h, {
                        scrollElement: L,
                        outerTitle: i.title,
                        children: (0, s.jsxs)('div', {
                            className: k().root,
                            'data-test-id': d.Xk.chart.CHART_PODCASTS,
                            children: [
                                (0, s.jsx)(N.Y, { variant: N.V.TEXT, withForwardControl: !1, withBackwardControl: j.canBack, children: B }),
                                (0, s.jsx)(w.$, {
                                    className: (0, l.$)(k().scrollContainer, k().important),
                                    listClassName: k().content,
                                    customComponents: V,
                                    itemContentCallback: (e) => {
                                        let t = i.items[e],
                                            l = S({ id: 'loading-messages.entity-is-loading' }, { entityName: S({ id: 'entity-names.album' }) });
                                        return !t || i.isShimmerVisible
                                            ? (0, s.jsx)(E.V, { 'aria-label': l })
                                            : (0, s.jsx)(v.a, { album: t, contentLinesCount: 3, withLikesCount: !0, withChart: !0, withAddition: !1 });
                                    },
                                    handleRef: x,
                                    initialItemCount: D,
                                    totalCount: D,
                                    isMobileLayout: r,
                                    useWindowScroll: r,
                                    context: { listAriaLabel: S({ id: 'entity-names.chart-podcasts-list' }) },
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        70621: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => n });
            var s = i(53548),
                l = i(63582),
                r = i(245),
                o = i(22681),
                a = i(56374);
            let n = (0, l.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, r.N)(),
                    t = (0, o.w)(),
                    i = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, a.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
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
        90822: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 70236)), Promise.resolve().then(i.bind(i, 92677)));
        },
        92677: (e, t, i) => {
            'use strict';
            i.d(t, { ChartPodcastsPageSuspenseLoader: () => b });
            var s = i(88800),
                l = i(65724),
                r = i(2058),
                o = i(19994),
                a = i(69630),
                n = i(46422),
                c = i(93317),
                u = i(1698),
                d = i(76541),
                h = i(70638),
                m = i.n(h);
            let b = () => {
                let e = (0, n.W)(),
                    { formatMessage: t } = (0, r.A)(),
                    i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.album' }) });
                return (0, s.jsx)(a.h, {
                    scrollElement: null,
                    children: (0, s.jsxs)('div', {
                        className: m().root,
                        children: [
                            (0, s.jsx)(c.Y, {
                                variant: c.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: (0, s.jsx)(o.W, { className: m().shimmerTitle, radius: 'l' }),
                            }),
                            (0, s.jsx)('div', {
                                className: (0, l.$)(m().scrollContainer, m().important, m().shimmerScrollContainer),
                                children: (0, s.jsx)('div', {
                                    className: m().content,
                                    children: (0, s.jsx)(u.e, { isActive: !0, itemClassName: m().item, 'aria-label': i, count: d.w }),
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
            () => e((e.s = 90822)),
        ),
            (_N_E = e.O()));
    },
]);
