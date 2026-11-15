(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5385],
    {
        34891: (e, s, t) => {
            (Promise.resolve().then(t.bind(t, 57328)), Promise.resolve().then(t.bind(t, 82594)));
        },
        54378: (e, s, t) => {
            'use strict';
            t.d(s, { M: () => r });
            var n = t(88800),
                i = t(65724),
                o = t(88969),
                l = t(52300),
                a = t(29504),
                c = t(78212),
                d = t.n(c);
            let r = (e) => {
                let { className: s } = e;
                return (0, n.jsxs)('div', {
                    className: (0, i.$)(d().emptyContent, s),
                    children: [
                        (0, n.jsx)(l.I, { className: d().emptyContentIcon, size: 'l', variant: 'album' }),
                        (0, n.jsx)(a.DZ, {
                            className: d().emptyContentTitle,
                            variant: 'h3',
                            size: 'xs',
                            children: (0, n.jsx)(o.A, { id: 'error-messages.empty-collection-podcasts-and-books' }),
                        }),
                    ],
                });
            };
        },
        76903: (e, s, t) => {
            'use strict';
            t.d(s, { a: () => u });
            var n = t(88800),
                i = t(53548),
                o = t(53534),
                l = t(63582),
                a = t(245);
            let c = new WeakMap();
            class d {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, s) {
                    this.screenViewUuid = e;
                    let t =
                        c.get(s) ??
                        (() => {
                            let e = [],
                                s = !1,
                                t = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                n = () => {
                                    s ||
                                        ((s = !0),
                                        queueMicrotask(() => {
                                            try {
                                                t();
                                            } finally {
                                                ((s = !1), e.length > 0 && n());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (t(), e());
                                },
                                defer: (s) => {
                                    (e.push(s), n());
                                },
                            };
                        })();
                    (c.set(s, t), (this.queue = t));
                }
                open(e, s) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (s(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, s) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: s, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, s) {
                    this.loadedTabs.has(e) || (s(), this.loadedTabs.add(e));
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
            var r = t(87999);
            let u = (0, l.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...s }) => {
                    let t = (0, a.N)(),
                        l = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === r.DomainObjectType.NonApplicable))))(
                            s,
                        ),
                        [c, u] = (0, i.useState)(() => {
                            let e = new d(t.createScreenSession().screenViewUuid, t);
                            return { client: t, input: s, isReady: l, scope: l ? t.createScreenScope(s, e) : null, session: e };
                        });
                    if (
                        c.client !== t ||
                        c.input.pageId !== s.pageId ||
                        c.input.skeletonId !== s.skeletonId ||
                        c.input.mainObjectType !== s.mainObjectType ||
                        c.input.mainObjectId !== s.mainObjectId
                    ) {
                        let i = new d(t.createScreenSession().screenViewUuid, t),
                            a = { client: t, input: s, isReady: l, scope: l ? t.createScreenScope(s, i) : null, session: i };
                        return (u(a), (0, n.jsx)(o.k, { value: a, children: e }));
                    }
                    if (
                        c.isReady !== l ||
                        c.input.displayReasonId !== s.displayReasonId ||
                        c.input.pageIdForFrom !== s.pageIdForFrom ||
                        c.input.pagePlacement !== s.pagePlacement ||
                        c.input.pageStyle !== s.pageStyle
                    ) {
                        let i = { ...c, input: s, isReady: l, scope: l ? t.createScreenScope(s, c.session) : null };
                        return (u(i), (0, n.jsx)(o.k, { value: i, children: e }));
                    }
                    return (0, n.jsx)(o.k, { value: c, children: e });
                },
            );
        },
        78212: (e) => {
            e.exports = {
                emptyContent: 'CollectionNonMusicEmpty_emptyContent__Km4Xo',
                emptyContentIcon: 'CollectionNonMusicEmpty_emptyContentIcon__ZHVte',
                emptyContentTitle: 'CollectionNonMusicEmpty_emptyContentTitle__PJIFd',
            };
        },
        82594: (e, s, t) => {
            'use strict';
            t.d(s, { CollectionNonMusicPage: () => A });
            var n = t(88800),
                i = t(65724),
                o = t(84961),
                l = t(53548),
                a = t(2058),
                c = t(88969),
                d = t(87999),
                r = t(76903),
                u = t(17392),
                p = t(79070),
                h = t(66719),
                m = t(29504),
                C = t(32596),
                g = t(10079),
                _ = t(69630),
                j = t(98427),
                k = t(46422),
                N = t(44230),
                b = t(37670),
                y = t(4370),
                O = t(72288),
                v = t(47934),
                f = t(86790),
                x = t(60266),
                I = t(93317),
                w = t(37770),
                P = t(51059),
                S = t(54378),
                T = t(87782),
                M = t.n(T);
            let A = (0, o.PA)(() => {
                var e;
                let {
                        user: s,
                        collection: { nonMusicLiked: t, shelf: o },
                        library: T,
                    } = (0, O.g)(),
                    { formatMessage: A } = (0, a.A)(),
                    { contentScrollRef: E, setContentScrollRef: L } = (0, N.g)(),
                    B = (0, k.W)();
                if (((0, b.J)(t.isResolved), t.isRejected && !o.hasLiked)) return (0, n.jsx)(C.SomethingWentWrong, {});
                (0, l.useEffect)(
                    () => () => {
                        (t.reset(), o.reset());
                    },
                    [t, o],
                );
                let q = (0, p.L)(() => {
                        var e;
                        return null == (e = t.items)
                            ? void 0
                            : e
                                  .slice(0, 10)
                                  .map((e, s) =>
                                      e
                                          ? (0, n.jsx)(g.a, { album: e, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }, null == e ? void 0 : e.id)
                                          : (0, n.jsx)(w.V, {}, 'shimmer-'.concat(s)),
                                  );
                    }),
                    D = (0, l.useMemo)(() => {
                        var e;
                        return !t.isEmptyItems || t.isRejected || o.hasLiked
                            ? t.isRejected || (!(null == (e = t.items) ? void 0 : e.length) && t.requestsCount)
                                ? null
                                : (0, n.jsx)(v.O, {
                                      headerClassName: M().blockHeader,
                                      containerClassName: M().carousel,
                                      isShimmerVisible: t.isLoading,
                                      isShimmerActive: !0,
                                      title: A({ id: 'page.delayed-non-music' }),
                                      viewAllActionLink: y.Z.collectionNonMusicLiked.href,
                                      children: q,
                                  })
                            : (0, n.jsx)(S.M, {});
                    }, [t.isLoading, A, q, t.isRejected, o.hasLiked, t.isEmptyItems, null == (e = t.items) ? void 0 : e.length, t.requestsCount]);
                if (s.account.data.uid && t.isNeededToLoad) {
                    let e = [t.getData({ userId: s.account.data.uid, metaType: 'podcast', pageSize: 10 }), T.getData()];
                    (0, l.use)(Promise.allSettled(e));
                }
                return (0, n.jsx)(r.a, {
                    pageId: d.AppScreen.OwnPodcasts,
                    pageIdForFrom: j.b.OWN_PODCASTS,
                    children: (0, n.jsx)(_.h, {
                        scrollElement: E,
                        outerTitle: A({ id: 'page.podcasts-and-books' }),
                        children: (0, n.jsxs)('div', {
                            className: M().root,
                            'data-test-id': u.Xk.collection.COLLECTION_NON_MUSIC_PAGE,
                            children: [
                                (0, n.jsx)(I.Y, {
                                    variant: I.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: B.canBack,
                                    children: (0, n.jsx)(m.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, n.jsx)(c.A, { id: 'page.podcasts-and-books' }),
                                    }),
                                }),
                                (0, n.jsx)(h.N, {
                                    ref: L,
                                    containerClassName: (0, i.$)(M().scrollableContainer, M().important),
                                    className: M().root,
                                    children: (0, n.jsxs)('div', {
                                        className: M().content,
                                        children: [
                                            (0, n.jsxs)('div', {
                                                className: M().likedBlocks,
                                                children: [
                                                    D,
                                                    o.hasLiked &&
                                                        (0, n.jsx)(P.m, {
                                                            carouselClassName: M().shelfBlockCarousel,
                                                            headerClassName: M().shelfBlockHeader,
                                                            itemsCount: 5,
                                                        }),
                                                ],
                                            }),
                                            (0, n.jsx)(x.A, { children: (0, n.jsx)(f.w, { className: M().footer }) }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        87782: (e) => {
            e.exports = {
                root: 'CollectionNonMusicPage_root__U6DRX',
                scrollableContainer: 'CollectionNonMusicPage_scrollableContainer__iIZvl',
                important: 'CollectionNonMusicPage_important__Y9D5x',
                content: 'CollectionNonMusicPage_content__d8E7R',
                likedBlocks: 'CollectionNonMusicPage_likedBlocks__cNqyq',
                carousel: 'CollectionNonMusicPage_carousel__zDCY0',
                blockHeader: 'CollectionNonMusicPage_blockHeader__PoAFY',
                footer: 'CollectionNonMusicPage_footer__9feIA',
                shelfBlockCarousel: 'CollectionNonMusicPage_shelfBlockCarousel__Kd6DB',
                shelfBlockHeader: 'CollectionNonMusicPage_shelfBlockHeader__yfFcf',
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7908, 4700, 3248, 5038, 7065, 1147, 4555, 1191, 7072, 2691, 8655, 505, 3375, 7599, 5255, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283,
                1800, 7746, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 818, 7053, 7934, 2391, 763, 2670, 7358,
            ],
            () => e((e.s = 34891)),
        ),
            (_N_E = e.O()));
    },
]);
