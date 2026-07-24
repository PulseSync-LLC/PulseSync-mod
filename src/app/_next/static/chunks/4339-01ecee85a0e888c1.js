(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4339],
    {
        2825: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => A });
            var r = i(32290),
                a = i(63618),
                o = i(96103),
                n = i(55178),
                l = i(21732),
                s = i(6752),
                c = i(88446),
                _ = i(94631),
                d = i(20472),
                u = i(57594),
                m = i(98350),
                h = i(49518),
                x = i(34223),
                p = i(40015),
                C = i(41549),
                v = i(81885),
                f = i.n(v);
            let A = (0, o.PA)((t) => {
                var e;
                let { className: i, itemsCount: o, headerClassName: v, carouselClassName: A } = t,
                    {
                        collection: {
                            shelf: { liked: N },
                        },
                    } = (0, u.g)(),
                    k = (0, s.L)(() => {
                        var t;
                        return null == (t = N.entities)
                            ? void 0
                            : t.map((t, e) => {
                                  if (t.album) return (0, r.jsx)(c.M, { album: t.album }, t.album.getKey(e));
                                  let i = (0, p.q)(t.track, e, N.typeForFrom);
                                  return (0, r.jsx)(_.K, { track: t.track, playContextParams: i, withPodcastName: !0 }, t.track.getKey(e));
                              });
                    });
                return (N.isNeededToLoad && (0, n.use)(N.getData()), !N.isLoading && (null == (e = N.entities) ? void 0 : e.length))
                    ? (0, r.jsx)(h.$, {
                          shimmer: (0, r.jsx)(x.D, { variant: m.X.PLAYLIST, isActive: !0 }),
                          isShimmerActive: !0,
                          isShimmerVisible: N.isLoading,
                          className: i,
                          carouselItemClassName: (0, a.$)(f().shelfColumn, f().important),
                          blockHeaderClassName: (0, a.$)(f().header, v),
                          carouselClassName: A,
                          blockHeaderTitle: N.title,
                          itemsCountPerColumn: null != o ? o : 0,
                          maxColumnsCount: h.D.ONE,
                          viewAllActionLink: d.Z.collectionShelfLiked.href,
                          'data-test-id': l.Xk.collection.COLLECTION_SHELF_PAGE_SHELF_LIKED_BLOCK,
                          children: k,
                      })
                    : (0, r.jsx)(C.E, { className: i, withHeader: !0 });
            });
        },
        3377: (t, e, i) => {
            'use strict';
            i.d(e, { WithAuth: () => x });
            var r = i(32290),
                a = i(96103),
                o = i(21916),
                n = i(63618),
                l = i(39407),
                s = i(71926),
                c = i(94218),
                _ = i(55556),
                d = i.n(_);
            let u = (0, a.PA)(() =>
                (0, r.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, r.jsx)(s.DZ, {
                            className: (0, n.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(s.HL, {
                            className: (0, n.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, r.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, r.jsx)(c.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var m = i(20472),
                h = i(57594);
            let x = (0, a.PA)((t) => {
                let { children: e, withRedirectToMainPage: i } = t,
                    { user: a } = (0, h.g)();
                return a.isAuthorized ? e : (i && (0, o.redirect)(m.Z.main.href), (0, r.jsx)(u, {}));
            });
        },
        5154: (t, e, i) => {
            'use strict';
            i.d(e, { v2: () => c, $f: () => a(), VN: () => n(), SE: () => s() });
            var r = i(50880),
                a = i.n(r),
                o = i(59449),
                n = i.n(o),
                l = i(28488),
                s = i.n(l);
            let c = {
                src: '/_next/static/media/artist.c49b2bfa.png',
                height: 327,
                width: 327,
                blurDataURL:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEU7SUNzfno6TEYVIB4tOTVMaXExOjY1PTpEUEw+T0k2RUA0Qz40Qz1UXVpAS0dncG1IUk6VnZuIkI3hJMzHAAAADHRSTlMu/e4u/gCv7fix563DJ+jkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nAXBhxHAIAwEsMe4ci6Q/YeNBEG4BwSg9VYSEL3e8A1QzjfcB5ZZlXmg7FXOim23+9qGQM0U8gNH4wIMxKVMaQAAAABJRU5ErkJggg==',
                blurWidth: 8,
                blurHeight: 8,
            };
        },
        19620: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => f });
            var r = i(32290),
                a = i(63618),
                o = i(55178),
                n = i(16172),
                l = i(21732),
                s = i(82586),
                c = i(50162),
                _ = i(86269),
                d = i(79856),
                u = i(71926),
                m = i(95481),
                h = i(47745),
                x = i(61258),
                p = i(69e3),
                C = i.n(p);
            let v = (t) => {
                    let {
                            className: e,
                            coverUrl: i,
                            labeledForId: p,
                            subTitle: v,
                            title: f,
                            description: A,
                            viewAllActionLink: N,
                            controls: k,
                            titleSize: b = 'm',
                            coverBackgroundColor: g,
                            coverRadius: E = 's',
                            titleClassName: y,
                            titleLineClamp: T,
                            fallbackIconVariant: L,
                            available: S = !0,
                            onViewAllAction: j,
                            titleChildren: w,
                            children: I,
                            headingRef: M,
                            coverContainerClassName: P,
                            headingVariant: B = 'h3',
                            withDescriptionWidthLimit: O = !0,
                            isShimmerVisible: R,
                            isShimmerActive: D,
                            withCover: W,
                            withDescription: H,
                            forwardRef: z,
                            shimmerCoverClassName: $,
                            shouldSendAnalyticsOnLoaded: U,
                            ...F
                        } = t,
                        Y = (0, m.f)(),
                        K = (0, o.useRef)(null),
                        Q = i || W,
                        V = A || H,
                        X = (0, o.useCallback)(() => {
                            K.current && 'focus' in K.current && K.current.focus();
                        }, []),
                        G = (0, h.N)(),
                        Z = (0, o.useCallback)(() => {
                            j ? j() : G({ to: n.QT.Link });
                        }, [G, j]);
                    (0, o.useEffect)(() => {
                        U && Y();
                    }, [U, Y]);
                    let q = (0, o.useMemo)(
                            () =>
                                f && N && S
                                    ? (0, r.jsxs)(x.N, {
                                          className: C().title,
                                          containerClassName: C().linkContainer,
                                          textClassName: C().linkText,
                                          icon: (0, r.jsx)(s.I, { className: C().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: N,
                                          onClick: Z,
                                          'data-test-id': l.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, r.jsx)(u.DZ, {
                                                  id: p,
                                                  className: (0, a.$)(C().heading, y),
                                                  variant: B,
                                                  size: b,
                                                  weight: 'bold',
                                                  lineClamp: T,
                                                  ref: M,
                                                  children: f,
                                              }),
                                              w,
                                          ],
                                      })
                                    : (0, r.jsxs)('div', {
                                          className: C().title,
                                          children: [
                                              (0, r.jsx)(u.DZ, {
                                                  id: p,
                                                  className: (0, a.$)(C().heading, y, { [C().heading_notAvailable]: !S }),
                                                  variant: B,
                                                  size: b,
                                                  weight: 'bold',
                                                  lineClamp: T,
                                                  ref: M,
                                                  'data-test-id': l.S7.BLOCK_HEADER_TITLE,
                                                  children: f,
                                              }),
                                              w,
                                          ],
                                      }),
                            [S, Z, M, B, p, f, y, T, b, N, w],
                        ),
                        J = (0, o.useMemo)(() => (H && R ? (0, r.jsx)(d.W, { isActive: D, className: C().shimmerDescription }) : A), [H, R, A, D]),
                        tt = (0, o.useMemo)(
                            () =>
                                W && R
                                    ? (0, r.jsx)(d.W, { isActive: D, className: (0, a.$)(C().shimmerCover, $), radius: 's' })
                                    : (0, r.jsx)(c._V, {
                                          src: i,
                                          fallbackIconVariant: L,
                                          style: { backgroundColor: g },
                                          className: C().cover,
                                          ref: K,
                                          onClick: X,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': l.S7.BLOCK_HEADER_COVER,
                                      }),
                            [g, i, L, X, D, R, $, W],
                        );
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(C().root, e),
                        ref: z,
                        ...F,
                        'data-test-id': l.S7.BLOCK_HEADER,
                        children: [
                            (0, r.jsxs)('div', {
                                className: C().start,
                                children: [
                                    Q && (0, r.jsx)(_.t, { radius: E, className: (0, a.$)(C().coverContainer, P), children: tt }),
                                    (0, r.jsxs)('div', {
                                        className: C().textContainer,
                                        children: [
                                            v,
                                            q,
                                            V &&
                                                (0, r.jsx)(u.HL, {
                                                    id: ''.concat(p, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: O ? 2 : void 0,
                                                    className: (0, a.$)(C().description, { [C().description_widthLimit]: O }),
                                                    'data-test-id': l.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            k || I,
                        ],
                    });
                },
                f = (0, o.forwardRef)((t, e) => (0, r.jsx)(v, { forwardRef: e, ...t }));
        },
        20930: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ControlsBar_root__hZQ_Z',
                item: 'ControlsBar_item__Y7iTC',
                item_buttonArrow: 'ControlsBar_item_buttonArrow__y_Ku0',
                controls: 'ControlsBar_controls__yRO8t',
                trailerIcon: 'ControlsBar_trailerIcon__areYT',
                controls_disabled: 'ControlsBar_controls_disabled___S7Rg',
                likeIcon: 'ControlsBar_likeIcon__eJvkI',
            };
        },
        23338: (t) => {
            t.exports = {
                root: 'CarouselWithColumnsBlock_root__v_qoo',
                controls: 'CarouselWithColumnsBlock_controls__yCSFo',
                item: 'CarouselWithColumnsBlock_item__RBGs4',
                item_columns_one: 'CarouselWithColumnsBlock_item_columns_one__GuhDB',
                item_columns_two: 'CarouselWithColumnsBlock_item_columns_two__46rgZ',
                column: 'CarouselWithColumnsBlock_column__oMRES',
                backwardControl: 'CarouselWithColumnsBlock_backwardControl__b_uKR',
                controlsContainer: 'CarouselWithColumnsBlock_controlsContainer__4_1Ao',
            };
        },
        26042: (t, e, i) => {
            'use strict';
            i.d(e, { B: () => n });
            var r = i(32290),
                a = i(55178),
                o = i(10936);
            let n = (t) => {
                let { objectId: e, objectPosX: i, objectPosY: n, objectPos: l, objectType: s, objectsCount: c, mainObjectId: _, mainObjectType: d, children: u } = t,
                    m = (0, a.useMemo)(
                        () => ({ objectId: e, objectPosX: i, objectPosY: n, objectPos: l, objectType: s, objectsCount: c, mainObjectId: _, mainObjectType: d }),
                        [e, i, n, l, s, c, _, d],
                    );
                return (0, r.jsx)(o.l.Provider, { value: m, children: u });
            };
        },
        28488: (t) => {
            t.exports = {
                root: 'PlusModal_root__RA4rI',
                root_error: 'PlusModal_root_error__BYJfM',
                root_mobile: 'PlusModal_root_mobile__pEOEu',
                header: 'PlusModal_header__Xj_1a',
                content: 'PlusModal_content__QHgFY',
                contentWrapper: 'PlusModal_contentWrapper__dYFpI',
                growContainer: 'PlusModal_growContainer__eDnbY',
                growContainer_withoutPaddings: 'PlusModal_growContainer_withoutPaddings__H4fPH',
                buttons: 'PlusModal_buttons___Gy1Y',
                text: 'PlusModal_text__ioQgs',
                title: 'PlusModal_title__znUSU',
                description: 'PlusModal_description__PjqMm',
                link: 'PlusModal_link__va_hh',
                linkContainer: 'PlusModal_linkContainer__5NaN1',
                linkArrow: 'PlusModal_linkArrow__xDKKi',
            };
        },
        30310: (t) => {
            t.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        31640: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'EntityMeta_root__Zn4Th',
                root_disabled: 'EntityMeta_root_disabled__u3DaR',
                albumLink: 'EntityMeta_albumLink__vxRG7',
                artistCaption: 'EntityMeta_artistCaption__3JqiO',
                artistLink: 'EntityMeta_artistLink__rMKgI',
                description: 'EntityMeta_description__cSa2I',
                explicitMark: 'EntityMeta_explicitMark__wOyns',
                likesCount: 'EntityMeta_likesCount__cw2GN',
                subtitle: 'EntityMeta_subtitle__yE1NK',
                title: 'EntityMeta_title__6_ChR',
                titleContainer: 'EntityMeta_titleContainer__WMe1r',
                version: 'EntityMeta_version__7Z948',
                root_disliked: 'EntityMeta_root_disliked__PhzHW',
                title_withVersion: 'EntityMeta_title_withVersion__rbXWv',
                text: 'EntityMeta_text___lB4k',
                icon: 'EntityMeta_icon__tTxs3',
            };
        },
        40015: (t, e, i) => {
            'use strict';
            i.d(e, { q: () => a });
            var r = i(71483);
            let a = (t, e, i) => {
                let a = { type: r.K.Various, meta: { id: t.id }, from: i || '' };
                return (
                    void 0 !== t.albumId && (a = { type: r.K.Album, meta: { id: t.albumId }, from: i || '' }),
                    { contextData: a, queueParams: { entityId: t.id, index: e }, loadContextMeta: !0 }
                );
            };
        },
        41549: (t, e, i) => {
            'use strict';
            i.d(e, { E: () => d });
            var r = i(32290),
                a = i(96103),
                o = i(79856),
                n = i(98350),
                l = i(34223),
                s = i(85197),
                c = i.n(s);
            let _ = () => Array.from({ length: 5 }, (t) => (0, r.jsx)(l.D, { variant: n.X.PLAYLIST, className: c().track, isActive: !0 }, t)),
                d = (0, a.PA)((t) => {
                    let { className: e, withHeader: i } = t;
                    return (0, r.jsxs)('div', {
                        className: e,
                        children: [i && (0, r.jsx)(o.W, { radius: 'l', width: 100, height: 24, className: c().title, isActive: !0 }), (0, r.jsx)(_, {})],
                    });
                });
        },
        45807: (t, e, i) => {
            'use strict';
            i.d(e, { Y: () => _ });
            var r,
                a = i(72812),
                o = i(55178),
                n = {
                    352: (t) => {
                        t.exports = a;
                    },
                    810: (t) => {
                        t.exports = r || (r = i.t(o, 2));
                    },
                },
                l = {};
            function s(t) {
                var e = l[t];
                if (void 0 !== e) return e.exports;
                var i = (l[t] = { exports: {} });
                return n[t](i, i.exports, s), i.exports;
            }
            var c = {};
            (() => {
                Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0);
                let t = s(810),
                    e = s(352);
                c.l = (i) => {
                    let [r, a] = (0, t.useState)(!0),
                        [o, n] = (0, t.useState)(!0),
                        l = () => {
                            let t = null == i ? void 0 : i.current;
                            t && (a(0 === t.scrollLeft), n(t.scrollWidth - t.scrollLeft <= t.offsetWidth + 10));
                        };
                    (0, t.useEffect)(() => {
                        l();
                    }, [i, l]),
                        (0, t.useEffect)(() => {
                            let t = null == i ? void 0 : i.current;
                            return (
                                null == t || t.addEventListener('scroll', l),
                                window.addEventListener('resize', l),
                                () => {
                                    null == t || t.removeEventListener('scroll', l), window.removeEventListener('resize', l);
                                }
                            );
                        }, [i, l]);
                    let s = (0, t.useMemo)(
                        () =>
                            (0, e.throttle)(
                                () => {
                                    i && i.current && (i.current.scrollLeft += i.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [i],
                    );
                    return {
                        swipeBackward: (0, t.useMemo)(
                            () =>
                                (0, e.throttle)(
                                    () => {
                                        i && i.current && (i.current.scrollLeft -= i.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [i],
                        ),
                        swipeForward: s,
                        shouldBackwardButtonBeDisabled: r,
                        shouldForwardButtonBeDisabled: o,
                        shouldHideControls: r && o,
                    };
                };
            })(),
                c.X;
            var _ = c.l;
        },
        49518: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => f, D: () => C });
            var r = i(32290),
                a = i(63618),
                o = i(66988),
                n = i(55178),
                l = i(16172),
                s = i(80451),
                c = i(21732),
                _ = i(75245),
                d = i(84782),
                u = i(26042),
                m = i(19620),
                h = i(49522),
                x = i(23338),
                p = i.n(x),
                C = (function (t) {
                    return (t.ONE = 'one'), (t.TWO = 'two'), t;
                })({});
            let v = (t) => {
                    let {
                            className: e,
                            forwardRef: i,
                            isShimmerVisible: x,
                            isColumnsShimmerVisible: C,
                            isHeaderWithoutControls: v,
                            maxColumnsCount: f,
                            carouselItemClassName: A,
                            carouselClassName: N,
                            children: k,
                            itemsCountPerColumn: b,
                            shimmer: g,
                            viewAllActionLink: E,
                            blockHeaderClassName: y,
                            additionalControl: T,
                            blockHeaderDescription: L,
                            blockHeaderTitle: S,
                            blockHeaderCoverUrl: j,
                            withBlockHeaderDescription: w,
                            withBlockHeaderCover: I,
                            blockHeaderHeadingVariant: M,
                            isShimmerActive: P,
                            shouldResetCarouselScroll: B,
                            beforeCarousel: O,
                            ...R
                        } = t,
                        { objectsCount: D } = (0, d.N)(),
                        [W, H] = (0, n.useState)(),
                        z = (0, n.useId)(),
                        $ = (0, n.useRef)(null),
                        U = 'two' === f,
                        F = 'string' == typeof E ? String(E) : void 0,
                        Y = null != C ? C : x,
                        K = (0, n.useCallback)(
                            (t) => {
                                let e = (0, o.A)(t, b).slice(0, U ? 2 : 1);
                                return (
                                    1 === e.length ? H('one') : H('two'),
                                    e.map((t, e) => (0, r.jsx)('div', { className: p().column, 'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_COLUMN, children: t }, e))
                                );
                            },
                            [b, U],
                        ),
                        Q = (0, n.useMemo)(() => {
                            if (Y) return K(Array.from({ length: 2 * b }, (t, e) => (0, n.cloneElement)(g, { key: e })));
                            return K(k);
                        }, [k, K, Y, b, g]),
                        V = (0, n.useMemo)(
                            () =>
                                v
                                    ? null
                                    : (0, r.jsxs)('div', {
                                          className: p().controlsContainer,
                                          children: [T, (0, r.jsx)(h.X, { carouselRef: $, className: p().controls, backwardControlClassName: p().backwardControl })],
                                      }),
                            [T, v],
                        );
                    return (
                        (0, n.useEffect)(() => {
                            $.current && B && $.current.scrollTo(0, 0);
                        }, [B]),
                        (0, r.jsxs)('section', {
                            ref: i,
                            className: (0, a.$)(p().root, e),
                            ...(0, s.getDataAttrFromProps)(R),
                            children: [
                                (0, r.jsx)(u.B, {
                                    objectType: l.ky.Shortcut,
                                    objectId: F,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: null != D ? D : 0,
                                    children: (0, r.jsx)(m.T, {
                                        coverUrl: j,
                                        title: S,
                                        description: L,
                                        className: y,
                                        labeledForId: z,
                                        viewAllActionLink: E,
                                        controls: V,
                                        isShimmerVisible: x,
                                        isShimmerActive: P,
                                        withDescription: w,
                                        withCover: I,
                                        headingVariant: M,
                                    }),
                                }),
                                O,
                                (0, r.jsx)(_.F, {
                                    itemClassName: (0, a.$)(p().item, p()['item_columns_'.concat(Y && U ? 'two' : W)], A),
                                    className: N,
                                    ref: $,
                                    'aria-labelledby': z,
                                    'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_CAROUSEL,
                                    children: Q,
                                }),
                            ],
                        })
                    );
                },
                f = (0, n.forwardRef)((t, e) => (0, r.jsx)(v, { forwardRef: e, ...t }));
        },
        49522: (t, e, i) => {
            'use strict';
            i.d(e, { X: () => u });
            var r = i(32290),
                a = i(63618),
                o = i(55178),
                n = i(21732),
                l = i(45807),
                s = i(63423),
                c = i(82586),
                _ = i(60178),
                d = i.n(_);
            let u = (t) => {
                let {
                        carouselRef: e,
                        backwardControlClassName: i,
                        forwardControlClassName: _,
                        className: u,
                        withSecondaryColor: m,
                        buttonSize: h = 'xxxs',
                        buttonVariant: x = 'outline',
                    } = t,
                    { swipeBackward: p, swipeForward: C, shouldBackwardButtonBeDisabled: v, shouldForwardButtonBeDisabled: f, shouldHideControls: A } = (0, l.Y)(e),
                    N = (0, o.useCallback)(
                        (t) => {
                            p(), t.stopPropagation();
                        },
                        [p],
                    ),
                    k = (0, o.useCallback)(
                        (t) => {
                            C(), t.stopPropagation();
                        },
                        [C],
                    );
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(d().root, u),
                    'data-test-id': n.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, r.jsx)(s.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(d().control, i, { [d().control_hidden]: A, [d().control_withSecondaryColor]: m }),
                            onClick: N,
                            size: h,
                            radius: 'round',
                            variant: x,
                            withRipple: !1,
                            icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: v,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, r.jsx)(s.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(d().control, _, { [d().control_hidden]: A, [d().control_withSecondaryColor]: m }),
                            onClick: k,
                            size: h,
                            radius: 'round',
                            variant: x,
                            withRipple: !1,
                            icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: f,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        50880: (t) => {
            t.exports = {
                buttonArrow: 'EntityCard_buttonArrow__ussa7',
                titleLink: 'EntityCard_titleLink__3ucPa',
                titleText: 'EntityCard_titleText___EU9t',
                root: 'EntityCard_root__HNsWx',
                root_disabled: 'EntityCard_root_disabled__qdBaH',
                ripple: 'EntityCard_ripple__iMHNo',
                playButtonCell: 'EntityCard_playButtonCell__AYoR5',
                controlsBarCell: 'EntityCard_controlsBarCell__GpbEX',
                text: 'EntityCard_text__hChwj',
            };
        },
        55556: (t) => {
            t.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        59449: (t) => {
            t.exports = {
                root: 'PaywallFAQAnswer_root__IGMDE',
                list: 'PaywallFAQAnswer_list__rPZmm',
                listItem: 'PaywallFAQAnswer_listItem__5UQmO',
                link: 'PaywallFAQAnswer_link__WM9Xr',
            };
        },
        60178: (t) => {
            t.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        64170: (t, e, i) => {
            'use strict';
            i.d(e, { SomethingWentWrong: () => N });
            var r = i(32290),
                a = i(63618),
                o = i(96103),
                n = i(55178),
                l = i(60900),
                s = i(39407),
                c = i(63423),
                _ = i(82586),
                d = i(71926),
                u = i(16172),
                m = i(52068),
                h = i(62376),
                x = i(37240),
                p = i(83920),
                C = i(20472),
                v = i(12894),
                f = i(30310),
                A = i.n(f);
            let N = (0, o.PA)((t) => {
                let { className: e, withBackwardControl: i = !0 } = t,
                    { formatMessage: o } = (0, l.A)(),
                    f = o({ id: 'error-messages.something-went-wrong' });
                !(function (t) {
                    let e = (0, m.st)(),
                        { hash: i } = (0, m.gf)(),
                        { pageId: r } = (0, x.$)(),
                        a = (0, h.U)();
                    (0, n.useEffect)(() => {
                        if (!e || !i || !r) return;
                        let o = (0, u.Fx)({
                            params: {
                                entityType: u.LA.Error,
                                entityId: u.LA.SomethingWrong,
                                errorMessage: t,
                                hash: i,
                                pageId: r,
                                pageStyle: u.QL.Fullscreen,
                                pagePlacement: u.c4.Fullscreen,
                                mainObjectType: u.ky.NonApplicable,
                                mainObjectId: u.ky.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        o && (0, u.z5)(e.evgenInstance, o);
                    }, [e, t, i, r, a]);
                })(f);
                let { sendRefreshEvent: N } = (function () {
                        let t = (0, m.st)(),
                            { hash: e } = (0, m.gf)(),
                            { pageId: i } = (0, x.$)(),
                            r = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!t || !e || !i) return;
                                let a = (0, u.Fx)({
                                    params: {
                                        actionType: u.X2.Refresh,
                                        userInteractionType: u.gi.Tap,
                                        entityType: u.LA.Error,
                                        entityId: u.LA.SomethingWrong,
                                        hash: e,
                                        pageId: i,
                                        pageStyle: u.QL.Fullscreen,
                                        pagePlacement: u.c4.Fullscreen,
                                        mainObjectType: u.ky.NonApplicable,
                                        mainObjectId: u.ky.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, u.bv)(t.evgenInstance, a);
                            }, [t, e, i, r]),
                        };
                    })(),
                    k = (0, n.useCallback)(() => {
                        N(), (window.location.href = C.Z.main.href);
                    }, [N]),
                    { contentRef: b } = (0, p.g)();
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(A().root, e),
                    children: [
                        i &&
                            (0, r.jsx)(v.L, { withBackwardFallback: '/', className: (0, a.$)(A().navigation, { [A().navigation_desktop]: !b }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, a.$)(A().content, { [A().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(_.I, { className: A().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(d.DZ, { className: (0, a.$)(A().title, A().important), variant: 'h3', size: 'xs', children: f }),
                                (0, r.jsxs)(d.HL, {
                                    className: (0, a.$)(A().text, A().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(s.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: k,
                                    className: A().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(d.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, r.jsx)(s.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        69e3: (t) => {
            t.exports = {
                root: 'BlockHeader_root__j3mbg',
                titleIcon: 'BlockHeader_titleIcon__GQFEK',
                start: 'BlockHeader_start__ZrGP5',
                coverContainer: 'BlockHeader_coverContainer__lATZT',
                cover: 'BlockHeader_cover__koOXq',
                textContainer: 'BlockHeader_textContainer___2wn9',
                title: 'BlockHeader_title__5xlx6',
                description: 'BlockHeader_description__hAk9D',
                description_widthLimit: 'BlockHeader_description_widthLimit__CXxK1',
                linkContainer: 'BlockHeader_linkContainer__EuW_L',
                linkText: 'BlockHeader_linkText__Or6VB',
                heading: 'BlockHeader_heading__4iqvS',
                heading_notAvailable: 'BlockHeader_heading_notAvailable__r_dm1',
                shimmerCover: 'BlockHeader_shimmerCover__m2PJl',
                textShimmerContainer: 'BlockHeader_textShimmerContainer__hT_Zo',
                shimmerTitle: 'BlockHeader_shimmerTitle__kAkgm',
                shimmerDescription: 'BlockHeader_shimmerDescription__Bya4z',
            };
        },
        75245: (t, e, i) => {
            'use strict';
            i.d(e, { F: () => c });
            var r,
                a = i(55178),
                o = {
                    5881: (t, e, i) => {
                        function r() {
                            for (var t, e, i = 0, r = ''; i < arguments.length; )
                                (t = arguments[i++]) &&
                                    (e = (function t(e) {
                                        var i,
                                            r,
                                            a = '';
                                        if ('string' == typeof e || 'number' == typeof e) a += e;
                                        else if ('object' == typeof e)
                                            if (Array.isArray(e)) for (i = 0; i < e.length; i++) e[i] && (r = t(e[i])) && (a && (a += ' '), (a += r));
                                            else for (i in e) e[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(t)) &&
                                    (r && (r += ' '), (r += e));
                            return r;
                        }
                        i.r(e), i.d(e, { clsx: () => r, default: () => a });
                        let a = r;
                    },
                    9058: (t, e, i) => {
                        i.r(e), i.d(e, { default: () => r });
                        let r = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (t, e) => {
                        var i = Symbol.for('react.transitional.element');
                        function r(t, e, r) {
                            var a = null;
                            if ((void 0 !== r && (a = '' + r), void 0 !== e.key && (a = '' + e.key), 'key' in e))
                                for (var o in ((r = {}), e)) 'key' !== o && (r[o] = e[o]);
                            else r = e;
                            return { $$typeof: i, type: t, key: a, ref: void 0 !== (e = r.ref) ? e : null, props: r };
                        }
                        (e.Fragment = Symbol.for('react.fragment')), (e.jsx = r), (e.jsxs = r);
                    },
                    4377: (t, e, i) => {
                        t.exports = i(9097);
                    },
                    5056: function (t, e, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (t) {
                                return t && t.__esModule ? t : { default: t };
                            };
                        Object.defineProperty(e, '__esModule', { value: !0 }), (e.Carousel = void 0);
                        let a = i(4377),
                            o = i(5881),
                            n = i(810),
                            l = r(i(9058)),
                            s = (t) => {
                                let { className: e, itemClassName: i, children: r, forwardRef: s, role: c, ..._ } = t;
                                return (0, a.jsx)('ol', {
                                    ref: s,
                                    className: (0, o.clsx)(l.default.root, e),
                                    ..._,
                                    role: null != c ? c : 'list',
                                    children: n.Children.map(r, (t) => (0, a.jsx)('li', { className: (0, o.clsx)(l.default.item, i), children: t })),
                                });
                            };
                        e.Carousel = (0, n.forwardRef)((t, e) => (0, a.jsx)(s, { forwardRef: e, ...t }));
                    },
                    810: (t) => {
                        t.exports = r || (r = i.t(a, 2));
                    },
                },
                n = {};
            function l(t) {
                var e = n[t];
                if (void 0 !== e) return e.exports;
                var i = (n[t] = { exports: {} });
                return o[t].call(i.exports, i, i.exports, l), i.exports;
            }
            (l.d = (t, e) => {
                for (var i in e) l.o(e, i) && !l.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
            }),
                (l.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
                (l.r = (t) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(t, '__esModule', { value: !0 });
                });
            var s = {};
            (() => {
                Object.defineProperty(s, 'X', { value: !0 }), (s.l = void 0);
                var t = l(5056);
                Object.defineProperty(s, 'l', {
                    enumerable: !0,
                    get: function () {
                        return t.Carousel;
                    },
                });
            })();
            var c = s.l;
            s.X;
        },
        78570: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => m });
            var r = i(32290),
                a = i(63618),
                o = i(60900),
                n = i(21732),
                l = i(6752),
                s = i(82586),
                c = i(71926),
                _ = i(13798),
                d = i(31640),
                u = i.n(d);
            let m = (t) => {
                let {
                        isDisliked: e,
                        isDisabled: i,
                        description: d,
                        getDescriptionTexts: m,
                        explicitMarkVariant: h,
                        className: x,
                        version: p,
                        title: C,
                        artistsComponent: v,
                        likesCount: f,
                        isLiked: A,
                        releaseYear: N,
                        titleLineClamp: k = 1,
                    } = t,
                    { formatMessage: b, formatNumber: g } = (0, o.A)(),
                    E = (0, l.L)(() => {
                        let t = null == v ? void 0 : v((0, a.$)(u().text, u().artistLink), (0, a.$)(u().text, u().artistCaption));
                        if (!t && !f) return;
                        let e = (0, r.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, r.jsxs)('div', {
                            className: u().subtitle,
                            'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof f &&
                                    f > 0 &&
                                    (0, r.jsxs)('div', {
                                        className: u().likesCount,
                                        'aria-label': b({ id: 'entity-names.likes-counter' }, { counter: f }),
                                        'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, r.jsx)(s.I, {
                                                className: u().icon,
                                                variant: A ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, r.jsx)(c.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: g(f),
                                            }),
                                        ],
                                    }),
                                !!f && t && e,
                                t,
                                !!N && t && e,
                                (0, r.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', children: N }),
                            ],
                        });
                    });
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(u().root, { [u().root_disabled]: i, [u().root_disliked]: e }, x),
                    'data-test-id': n.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, r.jsxs)('div', {
                            className: u().titleContainer,
                            children: [
                                (0, r.jsxs)(c.HL, {
                                    className: (0, a.$)(u().text, u().title, { [u().title_withVersion]: p }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: k,
                                    type: 'text',
                                    'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        C,
                                        p &&
                                            (0, r.jsx)(c.HL, {
                                                className: (0, a.$)(u().text, u().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(p),
                                            }),
                                    ],
                                }),
                                h && (0, r.jsx)(_.N, { className: u().explicitMark, getDescriptionTexts: m, variant: h }),
                            ],
                        }),
                        d &&
                            (0, r.jsx)(c.HL, {
                                className: (0, a.$)(u().text, u().description),
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_DESCRIPTION,
                                children: d,
                            }),
                        E,
                    ],
                });
            };
        },
        81354: (t, e, i) => {
            'use strict';
            i.d(e, { XU: () => d });
            var r,
                a,
                o = i(30782),
                n = i(55178),
                l = i(60900);
            !(function (t) {
                (t.formatDate = 'FormattedDate'),
                    (t.formatTime = 'FormattedTime'),
                    (t.formatNumber = 'FormattedNumber'),
                    (t.formatList = 'FormattedList'),
                    (t.formatDisplayName = 'FormattedDisplayName');
            })(r || (r = {})),
                (function (t) {
                    (t.formatDate = 'FormattedDateParts'),
                        (t.formatTime = 'FormattedTimeParts'),
                        (t.formatNumber = 'FormattedNumberParts'),
                        (t.formatList = 'FormattedListParts');
                })(a || (a = {}));
            var s = function (t) {
                var e = (0, l.A)(),
                    i = t.value,
                    r = t.children,
                    a = (0, o.__rest)(t, ['value', 'children']);
                return r(e.formatNumberToParts(i, a));
            };
            function c(t) {
                var e = function (e) {
                    var i = (0, l.A)(),
                        r = e.value,
                        a = e.children,
                        n = (0, o.__rest)(e, ['value', 'children']),
                        s = 'string' == typeof r ? new Date(r || 0) : r;
                    return a('formatDate' === t ? i.formatDateToParts(s, n) : i.formatTimeToParts(s, n));
                };
                return (e.displayName = a[t]), e;
            }
            function _(t) {
                var e = function (e) {
                    var i = (0, l.A)(),
                        r = e.value,
                        a = e.children,
                        s = (0, o.__rest)(e, ['value', 'children']),
                        c = i[t](r, s);
                    if ('function' == typeof a) return a(c);
                    var _ = i.textComponent || n.Fragment;
                    return n.createElement(_, null, c);
                };
                return (e.displayName = r[t]), e;
            }
            (s.displayName = 'FormattedNumberParts'), (s.displayName = 'FormattedNumberParts');
            var d = _('formatDate');
            _('formatTime'), _('formatNumber'), _('formatList'), _('formatDisplayName'), c('formatDate'), c('formatTime');
        },
        81885: (t) => {
            t.exports = {
                header: 'CollectionShelfLiked_header__u9MqV',
                shelfColumn: 'CollectionShelfLiked_shelfColumn__4KX_5',
                important: 'CollectionShelfLiked_important__0K3qk',
            };
        },
        85197: (t) => {
            t.exports = { title: 'CollectionShelfShimmer_title__X3d9J' };
        },
        88446: (t, e, i) => {
            'use strict';
            i.d(e, { M: () => z });
            var r = i(32290),
                a = i(63618),
                o = i(96103),
                n = i(55178),
                l = i(16172),
                s = i(21732),
                c = i(71483),
                _ = i(91027),
                d = i(6752),
                u = i(58359),
                m = i(71926),
                h = i(34883),
                x = i(7462),
                p = i(41677),
                C = i(71735),
                v = i(47745),
                f = i(2969),
                A = i(23352),
                N = i(72396),
                k = i(5537),
                b = i(84062),
                g = i(28999),
                E = i(90169),
                y = i(57594),
                T = i(5154),
                L = i(78570),
                S = i(1444),
                j = i(61258),
                w = i(40229),
                I = i(82586),
                M = i(63363),
                P = i(54391),
                B = i(92744),
                O = i(29268),
                R = i(4008),
                D = i(20930),
                W = i.n(D);
            let H = (0, o.PA)((t) => {
                    var e;
                    let { className: i, album: o, likeIconSize: s = 'xxs' } = t,
                        { user: c, trailer: d } = (0, y.g)(),
                        u = (0, C.P)(),
                        { sendLikeSearchFeedback: m } = (0, g.z)(),
                        h = (0, M.K)(o),
                        [x, p] = (0, n.useState)(!1),
                        v = (0, _.c)(async () => {
                            x || o.isLiked || (p(!0), null == m || m()), await h();
                        }),
                        f = (0, P.F)(),
                        A = (0, _.c)((t) => {
                            if ((t.stopPropagation(), u())) return void t.preventDefault();
                            d.openAlbumTrailer(o.id), f(l.ky.Album, String(o.id));
                        });
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(W().root, W().controls, i, { [W().controls_disabled]: !o.isAvailable }),
                        children: [
                            o.isAvailable &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(R.WithOffline, {
                                            fallback: (0, r.jsx)(B.c, {
                                                size: 'xs',
                                                iconSize: s,
                                                className: (0, a.$)(W().item, W().likeIcon),
                                                isLiked: o.isLiked,
                                                onClick: v,
                                                disabled: !c.isAuthorized,
                                            }),
                                        }),
                                        (null == (e = o.trailer) ? void 0 : e.isAvailable) &&
                                            (0, r.jsx)(R.WithOffline, {
                                                fallback: (0, r.jsx)(O.k, {
                                                    className: (0, a.$)(W().item, W().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: A,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, r.jsx)('div', {
                                className: (0, a.$)(W().item, W().item_buttonArrow),
                                children: (0, r.jsx)(I.I, { className: T.$f.buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                z = (0, o.PA)((t) => {
                    let { className: e, album: i, pageId: o, coverClassName: I, playButtonIconSize: M, likeIconSize: P, shouldShowReleaseYear: B, description: O } = t,
                        R = (0, x.r)(i.type),
                        { ref: D, intersectionPropertyId: W } = (0, A.n)(),
                        { from: z } = (0, N.f)({ pageId: o }),
                        [$, U] = (0, n.useState)(!1),
                        F = (0, f.b)(),
                        Y = (0, b.Z)(i.url),
                        K = (0, C.P)(),
                        { sendNavigateSearchFeedback: Q, sendPlaySearchFeedback: V } = (0, g.z)(),
                        X = (0, v.N)(),
                        {
                            paywall: { modal: G },
                        } = (0, y.g)(),
                        Z = (0, k.N)(),
                        {
                            isPlaying: q,
                            isCurrent: J,
                            togglePlay: tt,
                        } = (0, E.D)({ playContextParams: { contextData: { type: c.K.Album, meta: { id: i.id }, from: z }, loadContextMeta: !0 } }),
                        te = (0, h.c)({ album: i, callback: Y }),
                        ti = (0, h.c)({ album: i, callback: tt }),
                        tr = (0, _.c)((t) => {
                            null == Q || Q(), X({ to: l.QT.AlbumScreen }), te(t);
                        }),
                        ta = (0, _.c)(() => {
                            if (!K()) {
                                if (Z) return void G.open();
                                $ || q || (U(!0), null == V || V()), ti(), F(!q);
                            }
                        }),
                        to = (0, _.c)((t) => {
                            (0, u.P)(t, T.$f.ripple), tr(t);
                        }),
                        tn = (0, _.c)((t) => {
                            t.stopPropagation(), tr(t);
                        }),
                        tl = (0, n.useCallback)(
                            (t) =>
                                (0, r.jsx)(w.q, {
                                    isAvailable: i.isAvailable,
                                    isDisliked: !1,
                                    coverUri: i.coverUri,
                                    title: i.title,
                                    className: (0, a.$)(T.$f.playButtonCell, I),
                                    alt: ''.concat(R, ' ').concat(i.title),
                                    radius: 'xs',
                                    ...t,
                                }),
                            [i.coverUri, i.isAvailable, i.title, I, R],
                        ),
                        ts = null == tl ? void 0 : tl({ onPlayButtonClick: ta, isPlaying: q, isCurrent: J, playButtonIconSize: M }),
                        tc = (0, n.useMemo)(
                            () =>
                                i.url && i.isAvailable
                                    ? (0, r.jsx)(j.N, { className: (0, a.$)(T.$f.text, T.$f.titleLink), href: i.url, onClick: tn, children: i.title })
                                    : (0, r.jsx)(m.HL, { className: (0, a.$)(T.$f.text, T.$f.titleText), size: 'm', variant: 'div', type: 'text', children: i.title }),
                            [i.isAvailable, i.title, i.url, tn],
                        ),
                        t_ = (0, n.useCallback)(
                            (t, e) => {
                                var a;
                                return (null == (a = i.artists) ? void 0 : a.length)
                                    ? (0, r.jsx)(p.i, { linkClassName: t, captionClassName: e, artists: i.artists, lineClamp: 1, withLink: i.isAvailable })
                                    : null;
                            },
                            [i.artists, i.isAvailable],
                        ),
                        td = (0, d.L)(() => [i.artistNames, i.title, i.version].filter(Boolean).join(' '));
                    return (0, r.jsxs)(S.C, {
                        ref: D,
                        'data-intersection-property-id': W,
                        className: (0, a.$)(T.$f.root, { [T.$f.root_disabled]: !i.isAvailable }, e),
                        'aria-label': td,
                        onClick: to,
                        'data-test-id': s.Kq.album.HORIZONTAL_ALBUM_CARD,
                        children: [
                            ts,
                            (0, r.jsx)(L.r, {
                                isDisabled: !i.isAvailable,
                                version: i.version,
                                title: tc,
                                artistsComponent: t_,
                                getDescriptionTexts: i.getDescriptionTexts,
                                explicitMarkVariant: i.explicitDisclaimer,
                                likesCount: i.isNonMusic ? i.actualLikesCount : void 0,
                                isLiked: i.isNonMusic ? i.isLiked : void 0,
                                releaseYear: i.isNonMusic && B ? i.year : void 0,
                                description: O,
                            }),
                            (0, r.jsx)(H, { className: T.$f.controlsBar, album: i, likeIconSize: P }),
                        ],
                    });
                });
        },
        94218: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => u });
            var r = i(32290),
                a = i(21916),
                o = i(39407),
                n = i(21732),
                l = i(91027),
                s = i(63423),
                c = i(71926),
                _ = i(70204),
                d = i(34186);
            let u = (t) => {
                let { size: e = 'm', variant: i = 'default', withRipple: u = !0, buttonText: m, isBlock: h, key: x, className: p } = t,
                    C = (0, a.useRouter)(),
                    v = (0, d.N)().get(_.QG),
                    f = (0, l.c)(() => {
                        v.authorizationUrl && C.push(v.authorizationUrl);
                    });
                return (0, r.jsx)(
                    s.$,
                    {
                        onClick: f,
                        className: p,
                        isBlock: h,
                        color: 'primary',
                        variant: i,
                        size: e,
                        radius: 'xxxl',
                        withRipple: u,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: m || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(o.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
                );
            };
        },
        95481: (t, e, i) => {
            'use strict';
            i.d(e, { f: () => C });
            var r = i(55178),
                a = i(16172),
                o = i(52068),
                n = i(6752),
                l = i(62376),
                s = i(1677),
                c = i(48922),
                _ = i(84782),
                d = i(30915),
                u = i(18746),
                m = i(37240),
                h = i(51012),
                x = i(47498);
            let p = [
                    c._Q.HOME,
                    c._Q.LANDING,
                    c._Q.NON_MUSIC,
                    c._Q.OWN_COLLECTION,
                    c._Q.SEARCH,
                    c._Q.ARTIST,
                    c._Q.CONCERTS,
                    c._Q.CONCERT,
                    c._Q.ALBUM,
                    c._Q.PLAYLIST,
                    c._Q.SLIDES_SCREEN,
                    c._Q.PROMOLANDING_ALBUM,
                    c._Q.WAVE_LANDING_SCREEN,
                ],
                C = () => {
                    let t = (0, r.useRef)(!1),
                        e = (0, o.st)(),
                        i = (0, l.U)(),
                        { hash: C } = (0, o.gf)(),
                        { pageId: v } = (0, m.$)(),
                        { tabId: f, tabPos: A, isTabSelectedByDefault: N } = (0, x.R)(),
                        { offsetBlockPosY: k } = (0, d.u)(),
                        { blockId: b, blockType: g, blockPosX: E, blockPosY: y, mainObjectType: T, mainObjectId: L, objectsCount: S } = (0, _.N)(),
                        { filterKey: j, filterValue: w, filterPos: I } = (0, u.G)(),
                        { skeleton: M } = (0, h.b)(),
                        P = (0, n.L)(() => (void 0 !== k && void 0 !== y ? k + y : y));
                    return (0, r.useCallback)(() => {
                        if (!e || !v || !c.xK.includes(v) || !p.includes(v) || t.current) return;
                        let r = { hash: C, pageId: s.F[v], entityType: g, entityId: b, entityPosX: E, entityPosY: P, objectsCount: S };
                        void 0 !== j && ((r.filterKey = j), (r.filterValue = w), (r.filterPos = I)),
                            c.qG.includes(v) && ((r.tabId = f), (r.tabPos = A), (r.isTabSelectedByDefault = N)),
                            M && (r.skeletonId = M),
                            L && T && ((r.mainObjectType = T), (r.mainObjectId = L));
                        let o = (0, a.Fx)({ params: r, logger: i, context: 'useSendEventOnBlockLoaded' });
                        o && ((0, a.uY)(e.evgenInstance, o), (t.current = !0));
                    }, [e, v, C, g, b, E, P, j, w, I, S, M, L, T, i, f, A, N]);
                };
        },
    },
]);
