(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5385],
    {
        15216: (e) => {
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
        30564: (e, t, o) => {
            'use strict';
            o.d(t, { k: () => i });
            var s = o(32290),
                l = o(89020);
            let i = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, o) => (0, s.jsx)(l.V, { ...e }, o));
            };
        },
        32756: (e, t, o) => {
            'use strict';
            o.d(t, { M: () => d });
            var s = o(32290),
                l = o(63618),
                i = o(39407),
                n = o(82586),
                a = o(71926),
                c = o(44642),
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
        33696: (e) => {
            e.exports = {
                root: 'CarouselBlock_root__aeOla',
                controls: 'CarouselBlock_controls__vsHCR',
                shimmerTitle: 'CarouselBlock_shimmerTitle__ZXIRx',
                item: 'CarouselBlock_item__DatZ2',
                important: 'CarouselBlock_important__AARmP',
            };
        },
        44642: (e) => {
            e.exports = {
                emptyContent: 'CollectionNonMusicEmpty_emptyContent__Km4Xo',
                emptyContentIcon: 'CollectionNonMusicEmpty_emptyContentIcon__ZHVte',
                emptyContentTitle: 'CollectionNonMusicEmpty_emptyContentTitle__PJIFd',
            };
        },
        78736: (e, t, o) => {
            'use strict';
            o.d(t, { CollectionNonMusicPage: () => L });
            var s = o(32290),
                l = o(63618),
                i = o(96103),
                n = o(55178),
                a = o(60900),
                c = o(39407),
                r = o(21732),
                d = o(6752),
                m = o(46049),
                u = o(71926),
                _ = o(64170),
                h = o(24170),
                C = o(7999),
                N = o(48922),
                p = o(22714),
                k = o(83808),
                j = o(83920),
                x = o(3796),
                f = o(20472),
                g = o(57594),
                v = o(98148),
                b = o(58054),
                y = o(32468),
                P = o(74694),
                A = o(89020),
                M = o(2825),
                w = o(32756),
                B = o(15216),
                I = o.n(B);
            let L = (0, i.PA)(() => {
                var e;
                let {
                        user: t,
                        collection: { nonMusicLiked: o, shelf: i },
                        library: B,
                    } = (0, g.g)(),
                    { formatMessage: L } = (0, a.A)(),
                    { contentScrollRef: R, setContentScrollRef: T } = (0, j.g)(),
                    E = (0, k.W)();
                if (((0, x.J)(o.isResolved), o.isRejected && !i.hasLiked)) return (0, s.jsx)(_.SomethingWentWrong, {});
                (0, n.useEffect)(
                    () => () => {
                        o.reset(), i.reset();
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
                    S = (0, n.useMemo)(() => {
                        var e;
                        return !o.isEmptyItems || o.isRejected || i.hasLiked
                            ? o.isRejected || (!(null == (e = o.items) ? void 0 : e.length) && o.requestsCount)
                                ? null
                                : (0, s.jsx)(v.O, {
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
                                                    S,
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
        87047: (e, t, o) => {
            Promise.resolve().then(o.bind(o, 3377)), Promise.resolve().then(o.bind(o, 78736));
        },
        98148: (e, t, o) => {
            'use strict';
            o.d(t, { O: () => j });
            var s = o(32290),
                l = o(63618),
                i = o(55178),
                n = o(16172),
                a = o(80451),
                c = o(6752),
                r = o(75245),
                d = o(79856),
                m = o(84782),
                u = o(26042),
                _ = o(19620),
                h = o(49522),
                C = o(30564),
                N = o(33696),
                p = o.n(N);
            let k = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: o,
                            isShimmerVisible: N,
                            isShimmerActive: k,
                            isShimmerWithSubcover: j,
                            isShimmerCentered: x,
                            isShimmerRounded: f,
                            title: g,
                            description: v,
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
                            headingVariant: S,
                            customShimmer: O,
                            ...H
                        } = e,
                        F = (0, i.useId)(),
                        X = (0, i.useRef)(null),
                        { objectsCount: Z } = (0, m.N)(),
                        V = (0, i.useMemo)(
                            () =>
                                R && N
                                    ? (0, s.jsx)('div', { className: I, children: (0, s.jsx)(d.W, { isActive: k, className: p().shimmerTitle, radius: 'l' }) })
                                    : g || v || P || A
                                      ? (0, s.jsx)(u.B, {
                                            objectType: n.ky.Shortcut,
                                            objectId: String(y),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != Z ? Z : 0,
                                            children: (0, s.jsx)(_.T, {
                                                className: I,
                                                labeledForId: F,
                                                title: g,
                                                description: v,
                                                coverUrl: b,
                                                viewAllActionLink: y,
                                                controls: E && (0, s.jsx)(h.X, { className: p().controls, carouselRef: X }),
                                                headingRef: D,
                                                headingVariant: S,
                                                withDescription: !!v,
                                                titleChildren: P,
                                                children: A,
                                            }),
                                        })
                                      : void 0,
                            [b, v, I, D, S, F, k, N, Z, E, R, g, P, A, y],
                        ),
                        z = (0, c.L)(() => O || (0, C.k)({ className: o, isActive: k, withInfo: T, withSubcover: j, centered: x, round: f }));
                    return (0, s.jsxs)('section', {
                        ref: t,
                        className: (0, l.$)(p().root, w),
                        ...(0, a.getDataAttrFromProps)(H),
                        children: [
                            V,
                            (0, s.jsx)(r.F, {
                                className: B,
                                ref: X,
                                itemClassName: (0, l.$)(p().item, p().important, L),
                                'aria-labelledby': ''.concat(F, ' ').concat(F, '-description'),
                                children: N ? z : M,
                            }),
                        ],
                    });
                },
                j = (0, i.forwardRef)((e, t) => (0, s.jsx)(k, { forwardRef: t, ...e }));
        },
    },
    (e) => {
        e.O(
            0,
            [
                5718, 7034, 7231, 7972, 6347, 3183, 9763, 7258, 6639, 3931, 8868, 963, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 6252, 6477, 7275, 2586,
                8347, 4522, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 2563, 6341, 3759, 4339, 4220, 9562, 7358,
            ],
            () => e((e.s = 87047)),
        ),
            (_N_E = e.O());
    },
]);
