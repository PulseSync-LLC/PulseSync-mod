(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5385],
    {
        2350: (e) => {
            e.exports = {
                root: 'CarouselBlock_root__aeOla',
                controls: 'CarouselBlock_controls__vsHCR',
                shimmerTitle: 'CarouselBlock_shimmerTitle__ZXIRx',
                item: 'CarouselBlock_item__DatZ2',
                important: 'CarouselBlock_important__AARmP',
            };
        },
        35962: (e, t, o) => {
            'use strict';
            o.d(t, { k: () => i });
            var s = o(88800),
                l = o(37770);
            let i = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, o) => (0, s.jsx)(l.V, { ...e }, o));
            };
        },
        47934: (e, t, o) => {
            'use strict';
            o.d(t, { O: () => k });
            var s = o(88800),
                l = o(65724),
                i = o(53548),
                n = o(35412),
                a = o(92716),
                c = o(79070),
                r = o(53323),
                d = o(19994),
                m = o(34500),
                u = o(77948),
                _ = o(18486),
                h = o(31764),
                C = o(35962),
                N = o(2350),
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
        54378: (e, t, o) => {
            'use strict';
            o.d(t, { M: () => d });
            var s = o(88800),
                l = o(65724),
                i = o(88969),
                n = o(52300),
                a = o(29504),
                c = o(78212),
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
        78212: (e) => {
            e.exports = {
                emptyContent: 'CollectionNonMusicEmpty_emptyContent__Km4Xo',
                emptyContentIcon: 'CollectionNonMusicEmpty_emptyContentIcon__ZHVte',
                emptyContentTitle: 'CollectionNonMusicEmpty_emptyContentTitle__PJIFd',
            };
        },
        82449: (e, t, o) => {
            (Promise.resolve().then(o.bind(o, 57328)), Promise.resolve().then(o.bind(o, 82594)));
        },
        82594: (e, t, o) => {
            'use strict';
            o.d(t, { CollectionNonMusicPage: () => L });
            var s = o(88800),
                l = o(65724),
                i = o(84961),
                n = o(53548),
                a = o(2058),
                c = o(88969),
                r = o(17392),
                d = o(79070),
                m = o(66719),
                u = o(29504),
                _ = o(32596),
                h = o(10079),
                C = o(69630),
                N = o(12816),
                p = o(59844),
                j = o(46422),
                k = o(44230),
                x = o(37670),
                f = o(4370),
                v = o(72288),
                g = o(47934),
                b = o(86790),
                y = o(60266),
                P = o(93317),
                A = o(37770),
                M = o(51059),
                w = o(54378),
                B = o(87782),
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
                7435, 8752, 5108, 8380, 127, 1931, 1191, 3637, 7617, 4596, 3375, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 2837, 4732, 1195,
                1598, 6281, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 4613, 3724, 818, 7053, 9425, 9989, 763, 2670, 7358,
            ],
            () => e((e.s = 82449)),
        ),
            (_N_E = e.O()));
    },
]);
