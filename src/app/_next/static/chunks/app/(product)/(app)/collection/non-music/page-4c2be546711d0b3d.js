(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5385],
    {
        44428: (e, t, o) => {
            'use strict';
            o.d(t, { M: () => d });
            var s = o(25839),
                l = o(82298),
                i = o(8487),
                n = o(66738),
                a = o(4254),
                c = o(86194),
                r = o.n(c);
            let d = (e) => {
                let { className: t } = e;
                return (0, s.jsxs)('div', {
                    className: (0, l.$)(r().emptyContent, t),
                    children: [
                        (0, s.jsx)(n.I, { className: r().emptyContentIcon, size: 'l', variant: 'album' }),
                        (0, s.jsx)(a.DZ, {
                            className: r().emptyContentTitle,
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(i.A, { id: 'error-messages.empty-collection-podcasts-and-books' }),
                        }),
                    ],
                });
            };
        },
        66284: (e, t, o) => {
            'use strict';
            o.d(t, { O: () => k });
            var s = o(25839),
                l = o(82298),
                i = o(74631),
                n = o(89288),
                a = o(36619),
                c = o(49656),
                r = o(5365),
                d = o(23976),
                m = o(26742),
                u = o(95314),
                _ = o(18412),
                h = o(80986),
                C = o(95388),
                N = o(99024),
                p = o.n(N);
            let j = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: o,
                            isShimmerVisible: N,
                            isShimmerActive: j,
                            isShimmerWithSubcover: k,
                            isShimmerCentered: x,
                            isShimmerRounded: f,
                            title: v,
                            description: g,
                            coverUrl: b,
                            viewAllActionLink: y,
                            titleChildren: P,
                            headerChildren: A,
                            children: M,
                            className: w,
                            containerClassName: B,
                            headerClassName: I,
                            itemClassName: L,
                            showHeaderShimmer: R = !1,
                            showShimmerInfo: T = !0,
                            showControls: E = !0,
                            headingRef: D,
                            headingVariant: O,
                            customShimmer: S,
                            ...H
                        } = e,
                        Z = (0, i.useId)(),
                        X = (0, i.useRef)(null),
                        { objectsCount: F } = (0, m.N)(),
                        V = (0, i.useMemo)(
                            () =>
                                R && N
                                    ? (0, s.jsx)('div', { className: I, children: (0, s.jsx)(d.W, { isActive: j, className: p().shimmerTitle, radius: 'l' }) })
                                    : v || g || P || A
                                      ? (0, s.jsx)(u.B, {
                                            objectType: a.DomainObjectType.Shortcut,
                                            objectId: String(y),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != F ? F : 0,
                                            children: (0, s.jsx)(_.T, {
                                                className: I,
                                                labeledForId: Z,
                                                title: v,
                                                description: g,
                                                coverUrl: b,
                                                viewAllActionLink: y,
                                                controls: E && (0, s.jsx)(h.X, { className: p().controls, carouselRef: X }),
                                                headingRef: D,
                                                headingVariant: O,
                                                withDescription: !!g,
                                                titleChildren: P,
                                                children: A,
                                            }),
                                        })
                                      : void 0,
                            [b, g, I, D, O, Z, j, N, F, E, R, v, P, A, y],
                        ),
                        z = (0, c.L)(() => S || (0, C.k)({ className: o, isActive: j, withInfo: T, withSubcover: k, centered: x, round: f }));
                    return (0, s.jsxs)('section', {
                        ref: t,
                        className: (0, l.$)(p().root, w),
                        ...(0, n.OZ)(H),
                        children: [
                            V,
                            (0, s.jsx)(r.F, {
                                className: B,
                                ref: X,
                                itemClassName: (0, l.$)(p().item, p().important, L),
                                'aria-labelledby': ''.concat(Z, ' ').concat(Z, '-description'),
                                children: N ? z : M,
                            }),
                        ],
                    });
                },
                k = (0, i.forwardRef)((e, t) => (0, s.jsx)(j, { forwardRef: t, ...e }));
        },
        72e3: (e) => {
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
        86194: (e) => {
            e.exports = {
                emptyContent: 'CollectionNonMusicEmpty_emptyContent__Km4Xo',
                emptyContentIcon: 'CollectionNonMusicEmpty_emptyContentIcon__ZHVte',
                emptyContentTitle: 'CollectionNonMusicEmpty_emptyContentTitle__PJIFd',
            };
        },
        87704: (e, t, o) => {
            'use strict';
            o.d(t, { CollectionNonMusicPage: () => L });
            var s = o(25839),
                l = o(82298),
                i = o(88204),
                n = o(74631),
                a = o(39004),
                c = o(8487),
                r = o(61493),
                d = o(49656),
                m = o(13833),
                u = o(4254),
                _ = o(78299),
                h = o(76939),
                C = o(1407),
                N = o(20258),
                p = o(10322),
                j = o(21784),
                k = o(89192),
                x = o(30716),
                f = o(53712),
                v = o(27954),
                g = o(66284),
                b = o(99401),
                y = o(26076),
                P = o(10603),
                A = o(19412),
                M = o(99057),
                w = o(44428),
                B = o(72e3),
                I = o.n(B);
            let L = (0, i.PA)(() => {
                var e;
                let {
                        user: t,
                        collection: { nonMusicLiked: o, shelf: i },
                        library: B,
                    } = (0, v.g)(),
                    { formatMessage: L } = (0, a.A)(),
                    { contentScrollRef: R, setContentScrollRef: T } = (0, k.g)(),
                    E = (0, j.W)();
                if (((0, x.J)(o.isResolved), o.isRejected && !i.hasLiked)) return (0, s.jsx)(_.SomethingWentWrong, {});
                (0, n.useEffect)(
                    () => () => {
                        (o.reset(), i.reset());
                    },
                    [o, i],
                );
                let D = (0, d.L)(() => {
                        var e;
                        return null == (e = o.items)
                            ? void 0
                            : e
                                  .slice(0, 10)
                                  .map((e, t) =>
                                      e
                                          ? (0, s.jsx)(h.a, { album: e, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }, null == e ? void 0 : e.id)
                                          : (0, s.jsx)(A.V, {}, 'shimmer-'.concat(t)),
                                  );
                    }),
                    O = (0, n.useMemo)(() => {
                        var e;
                        return !o.isEmptyItems || o.isRejected || i.hasLiked
                            ? o.isRejected || (!(null == (e = o.items) ? void 0 : e.length) && o.requestsCount)
                                ? null
                                : (0, s.jsx)(g.O, {
                                      headerClassName: I().blockHeader,
                                      containerClassName: I().carousel,
                                      isShimmerVisible: o.isLoading,
                                      isShimmerActive: !0,
                                      title: L({ id: 'page.delayed-non-music' }),
                                      viewAllActionLink: f.Z.collectionNonMusicLiked.href,
                                      children: D,
                                  })
                            : (0, s.jsx)(w.M, {});
                    }, [o.isLoading, L, D, o.isRejected, i.hasLiked, o.isEmptyItems, null == (e = o.items) ? void 0 : e.length, o.requestsCount]);
                if (t.account.data.uid && o.isNeededToLoad) {
                    let e = [o.getData({ userId: t.account.data.uid, metaType: 'podcast', pageSize: 10 }), B.getData()];
                    (0, n.use)(Promise.allSettled(e));
                }
                return (0, s.jsx)(p.n, {
                    pageId: N._Q.OWN_PODCASTS,
                    children: (0, s.jsx)(C.h, {
                        scrollElement: R,
                        outerTitle: L({ id: 'page.podcasts-and-books' }),
                        children: (0, s.jsxs)('div', {
                            className: I().root,
                            'data-test-id': r.Xk.collection.COLLECTION_NON_MUSIC_PAGE,
                            children: [
                                (0, s.jsx)(P.Y, {
                                    variant: P.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: E.canBack,
                                    children: (0, s.jsx)(u.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, s.jsx)(c.A, { id: 'page.podcasts-and-books' }),
                                    }),
                                }),
                                (0, s.jsx)(m.N, {
                                    ref: T,
                                    containerClassName: (0, l.$)(I().scrollableContainer, I().important),
                                    className: I().root,
                                    children: (0, s.jsxs)('div', {
                                        className: I().content,
                                        children: [
                                            (0, s.jsxs)('div', {
                                                className: I().likedBlocks,
                                                children: [
                                                    O,
                                                    i.hasLiked &&
                                                        (0, s.jsx)(M.m, {
                                                            carouselClassName: I().shelfBlockCarousel,
                                                            headerClassName: I().shelfBlockHeader,
                                                            itemsCount: 5,
                                                        }),
                                                ],
                                            }),
                                            (0, s.jsx)(y.A, { children: (0, s.jsx)(b.w, { className: I().footer }) }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        91770: (e, t, o) => {
            (Promise.resolve().then(o.bind(o, 30871)), Promise.resolve().then(o.bind(o, 87704)));
        },
        95388: (e, t, o) => {
            'use strict';
            o.d(t, { k: () => i });
            var s = o(25839),
                l = o(19412);
            let i = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, o) => (0, s.jsx)(l.V, { ...e }, o));
            };
        },
        99024: (e) => {
            e.exports = {
                root: 'CarouselBlock_root__aeOla',
                controls: 'CarouselBlock_controls__vsHCR',
                shimmerTitle: 'CarouselBlock_shimmerTitle__ZXIRx',
                item: 'CarouselBlock_item__DatZ2',
                important: 'CarouselBlock_important__AARmP',
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1676, 3349, 7339, 6749, 6287, 2121, 3472, 7349, 1107, 7615, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 4245, 3269, 4163, 3246,
                4517, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 5898, 2533, 8222, 2464, 4475, 5056, 7358,
            ],
            () => e((e.s = 91770)),
        ),
            (_N_E = e.O()));
    },
]);
