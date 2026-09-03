(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6413],
    {
        3377: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => p });
            var r = i(32290),
                a = i(96103),
                s = i(21916),
                o = i(63618),
                l = i(39407),
                n = i(71926),
                c = i(94218),
                d = i(55556),
                u = i.n(d);
            let m = (0, a.PA)(() =>
                (0, r.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, r.jsx)(n.DZ, {
                            className: (0, o.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(n.HL, {
                            className: (0, o.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, r.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, r.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var _ = i(20472),
                h = i(57594);
            let p = (0, a.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: a } = (0, h.g)();
                return a.isAuthorized ? t : (i && (0, s.redirect)(_.Z.main.href), (0, r.jsx)(m, {}));
            });
        },
        6726: (e) => {
            e.exports = {
                root: 'CollectionKidsPage_root__nfE01',
                content: 'CollectionKidsPage_content__hVB40',
                carouselBlocks: 'CollectionKidsPage_carouselBlocks__q7f0T',
                tracksCarouselItem: 'CollectionKidsPage_tracksCarouselItem__8WvD0',
                important: 'CollectionKidsPage_important__GkZJX',
                carouselBlock: 'CollectionKidsPage_carouselBlock___6XRJ',
                carouselBlockHeader: 'CollectionKidsPage_carouselBlockHeader__fqs_v',
                emptyBlock: 'CollectionKidsPage_emptyBlock__dc50I',
                emptyBlockIcon: 'CollectionKidsPage_emptyBlockIcon__eVAMs',
                emptyBlockTitle: 'CollectionKidsPage_emptyBlockTitle__TYUpU',
                footer: 'CollectionKidsPage_footer__wEREs',
            };
        },
        11675: (e) => {
            e.exports = {
                root: 'PlaylistCard_root__i3pR4',
                controls: 'PlaylistCard_controls__Ej8Rz',
                cover: 'PlaylistCard_cover__tpK5L',
                coverBlock: 'PlaylistCard_coverBlock__1slsN',
                image: 'PlaylistCard_image__Li6oy',
                titleLink: 'PlaylistCard_titleLink__H8qEc',
                artists: 'PlaylistCard_artists__HtVIF',
                artistLink: 'PlaylistCard_artistLink__jx3KB',
                playButton: 'PlaylistCard_playButton__eaduk',
                likeButton: 'PlaylistCard_likeButton__RYXJz',
                menuButton: 'PlaylistCard_menuButton__jFcWr',
                pinButton: 'PlaylistCard_pinButton__jhWnL',
                trailerButton: 'PlaylistCard_trailerButton__Qjg_U',
                control: 'PlaylistCard_control__73YUq',
            };
        },
        13931: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => s });
            var r = i(55178),
                a = i(60900);
            let s = (e) => {
                let { formatMessage: t } = (0, a.A)();
                return (0, r.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let r = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(r, ' ').concat(i);
                }, [t, e]);
            };
        },
        16890: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsPage: () => K });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                o = i(55178),
                l = i(60900),
                n = i(39407),
                c = i(21732),
                d = i(71483),
                u = i(96333),
                m = i(6752),
                _ = i(82586),
                h = i(46049),
                p = i(71926),
                v = i(64170),
                k = i(77435),
                C = i(7999),
                x = i(64538),
                f = i(94631),
                y = i(69951),
                g = i(48922),
                j = i(22714),
                N = i(72396),
                L = i(83808),
                b = i(83920),
                A = i(3796),
                S = i(20472),
                T = i(57594),
                P = i(98350),
                B = i(49518),
                w = i(58054),
                R = i(32468),
                I = i(74694),
                O = i(34223),
                E = i(6726),
                D = i.n(E);
            let K = (0, s.PA)(() => {
                let {
                        collection: { kids: e },
                    } = (0, T.g)(),
                    { contentScrollRef: t, setContentScrollRef: i } = (0, b.g)(),
                    s = (0, L.W)(),
                    { from: E } = (0, N.f)({ pageId: g._Q.COLLECTION_KIDS }),
                    { formatMessage: K } = (0, l.A)();
                (0, o.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                    (0, A.J)(e.isResolved);
                let z = (0, m.L)(() =>
                    e.tracks.loadedItems.slice(0, 5).map((t, i) => {
                        let a = {
                            contextData: { type: d.K.Various, meta: { id: t.entityId }, from: E },
                            queueParams: { index: i },
                            loadContextMeta: !1,
                            entitiesData: e.tracks.sonataEntitiesData,
                        };
                        return t.type === u.S.MUSIC
                            ? (0, r.jsx)(y.K, { track: t, playContextParams: a }, i)
                            : (0, r.jsx)(f.K, { track: t, playContextParams: a, withPodcastName: t.isTrackPodcast }, i);
                    }),
                );
                if (e.isNeededToLoad) {
                    let t = [e.albums.getData({ pageSize: 8 }), e.playlists.getData({ pageSize: 8 }), e.tracks.getData({ pageSize: 5 })];
                    (0, o.use)(Promise.allSettled(t));
                }
                return e.isRejected
                    ? (0, r.jsx)(v.SomethingWentWrong, {})
                    : (0, r.jsx)(j.n, {
                          pageId: g._Q.COLLECTION_KIDS,
                          children: (0, r.jsxs)(C.h, {
                              scrollElement: t,
                              outerTitle: K({ id: 'kids.for-kids' }),
                              children: [
                                  (0, r.jsx)(I.Y, {
                                      variant: I.V.TEXT,
                                      withForwardControl: !1,
                                      withBackwardControl: s.canBack,
                                      children: (0, r.jsx)(p.DZ, { variant: 'h2', weight: 'bold', size: 'xl', children: (0, r.jsx)(n.A, { id: 'kids.for-kids' }) }),
                                  }),
                                  (0, r.jsxs)(h.N, {
                                      className: D().root,
                                      containerClassName: D().content,
                                      ref: i,
                                      'data-test-id': c.Xk.collection.COLLECTION_KIDS_PAGE,
                                      children: [
                                          !e.shouldShowContent &&
                                              (0, r.jsxs)('div', {
                                                  className: D().emptyBlock,
                                                  children: [
                                                      (0, r.jsx)(_.I, { className: D().emptyBlockIcon, variant: 'album' }),
                                                      (0, r.jsx)(p.DZ, {
                                                          className: D().emptyBlockTitle,
                                                          variant: 'h3',
                                                          size: 'xs',
                                                          children: (0, r.jsx)(n.A, { id: 'kids.empty-collection-text' }),
                                                      }),
                                                  ],
                                              }),
                                          e.tracks.shouldShowContent &&
                                              (0, r.jsx)(B.$, {
                                                  blockHeaderClassName: (0, a.$)(D().carouselBlockHeader, D().carouselBlock),
                                                  carouselItemClassName: (0, a.$)(D().tracksCarouselItem, D().important),
                                                  blockHeaderTitle: K({ id: 'kids.favourite-tracks-and-episodes' }),
                                                  shimmer: (0, r.jsx)(O.D, { variant: P.X.PLAYLIST, isActive: !0 }),
                                                  maxColumnsCount: B.D.ONE,
                                                  isShimmerVisible: e.tracks.isShimmerVisible,
                                                  isShimmerActive: !0,
                                                  itemsCountPerColumn: 5,
                                                  viewAllActionLink: S.Z.collectionKidsTracks.href,
                                                  children: z,
                                              }),
                                          e.albums.shouldShowContent &&
                                              (0, r.jsx)(k.p, {
                                                  headerClassName: (0, a.$)(D().carouselBlock, D().carouselBlockHeader),
                                                  containerClassName: D().carouselBlock,
                                                  title: K({ id: 'kids.albums-and-podcasts' }),
                                                  albums: e.albums.loadedItems,
                                                  headingVariant: 'h2',
                                                  isShimmerVisible: e.albums.isShimmerVisible,
                                                  isShimmerActive: !0,
                                                  viewAllActionLink: S.Z.collectionKidsAlbums.href,
                                              }),
                                          e.playlists.shouldShowContent &&
                                              (0, r.jsx)(x.E, {
                                                  headerClassName: (0, a.$)(D().carouselBlock, D().carouselBlockHeader),
                                                  containerClassName: D().carouselBlock,
                                                  title: K({ id: 'entity-names.artist-playlist' }),
                                                  playlists: e.playlists.loadedItems,
                                                  headingVariant: 'h2',
                                                  isShimmerVisible: e.playlists.isShimmerVisible,
                                                  isShimmerActive: !0,
                                                  viewAllActionLink: S.Z.collectionKidsPlaylists.href,
                                              }),
                                          (0, r.jsx)(R.A, { children: (0, r.jsx)(w.w, { className: D().footer }) }),
                                      ],
                                  }),
                              ],
                          }),
                      });
            });
        },
        19620: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => x });
            var r = i(32290),
                a = i(63618),
                s = i(55178),
                o = i(16172),
                l = i(21732),
                n = i(82586),
                c = i(50162),
                d = i(86269),
                u = i(79856),
                m = i(71926),
                _ = i(95481),
                h = i(47745),
                p = i(61258),
                v = i(69e3),
                k = i.n(v);
            let C = (e) => {
                    let {
                            className: t,
                            coverUrl: i,
                            labeledForId: v,
                            subTitle: C,
                            title: x,
                            description: f,
                            viewAllActionLink: y,
                            controls: g,
                            titleSize: j = 'm',
                            coverBackgroundColor: N,
                            coverRadius: L = 's',
                            titleClassName: b,
                            titleLineClamp: A,
                            fallbackIconVariant: S,
                            available: T = !0,
                            onViewAllAction: P,
                            titleChildren: B,
                            children: w,
                            headingRef: R,
                            coverContainerClassName: I,
                            headingVariant: O = 'h3',
                            withDescriptionWidthLimit: E = !0,
                            isShimmerVisible: D,
                            isShimmerActive: K,
                            withCover: z,
                            withDescription: W,
                            forwardRef: H,
                            shimmerCoverClassName: $,
                            shouldSendAnalyticsOnLoaded: U,
                            ...M
                        } = e,
                        F = (0, _.f)(),
                        V = (0, s.useRef)(null),
                        Y = i || z,
                        X = f || W,
                        Q = (0, s.useCallback)(() => {
                            V.current && 'focus' in V.current && V.current.focus();
                        }, []),
                        Z = (0, h.N)(),
                        q = (0, s.useCallback)(() => {
                            P ? P() : Z({ to: o.QT.Link });
                        }, [Z, P]);
                    (0, s.useEffect)(() => {
                        U && F();
                    }, [U, F]);
                    let G = (0, s.useMemo)(
                            () =>
                                x && y && T
                                    ? (0, r.jsxs)(p.N, {
                                          className: k().title,
                                          containerClassName: k().linkContainer,
                                          textClassName: k().linkText,
                                          icon: (0, r.jsx)(n.I, { className: k().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: y,
                                          onClick: q,
                                          'data-test-id': l.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, r.jsx)(m.DZ, {
                                                  id: v,
                                                  className: (0, a.$)(k().heading, b),
                                                  variant: O,
                                                  size: j,
                                                  weight: 'bold',
                                                  lineClamp: A,
                                                  ref: R,
                                                  children: x,
                                              }),
                                              B,
                                          ],
                                      })
                                    : (0, r.jsxs)('div', {
                                          className: k().title,
                                          children: [
                                              (0, r.jsx)(m.DZ, {
                                                  id: v,
                                                  className: (0, a.$)(k().heading, b, { [k().heading_notAvailable]: !T }),
                                                  variant: O,
                                                  size: j,
                                                  weight: 'bold',
                                                  lineClamp: A,
                                                  ref: R,
                                                  'data-test-id': l.S7.BLOCK_HEADER_TITLE,
                                                  children: x,
                                              }),
                                              B,
                                          ],
                                      }),
                            [T, q, R, O, v, x, b, A, j, y, B],
                        ),
                        J = (0, s.useMemo)(() => (W && D ? (0, r.jsx)(u.W, { isActive: K, className: k().shimmerDescription }) : f), [W, D, f, K]),
                        ee = (0, s.useMemo)(
                            () =>
                                z && D
                                    ? (0, r.jsx)(u.W, { isActive: K, className: (0, a.$)(k().shimmerCover, $), radius: 's' })
                                    : (0, r.jsx)(c._V, {
                                          src: i,
                                          fallbackIconVariant: S,
                                          style: { backgroundColor: N },
                                          className: k().cover,
                                          ref: V,
                                          onClick: Q,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': l.S7.BLOCK_HEADER_COVER,
                                      }),
                            [N, i, S, Q, K, D, $, z],
                        );
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(k().root, t),
                        ref: H,
                        ...M,
                        'data-test-id': l.S7.BLOCK_HEADER,
                        children: [
                            (0, r.jsxs)('div', {
                                className: k().start,
                                children: [
                                    Y && (0, r.jsx)(d.t, { radius: L, className: (0, a.$)(k().coverContainer, I), children: ee }),
                                    (0, r.jsxs)('div', {
                                        className: k().textContainer,
                                        children: [
                                            C,
                                            G,
                                            X &&
                                                (0, r.jsx)(m.HL, {
                                                    id: ''.concat(v, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: E ? 2 : void 0,
                                                    className: (0, a.$)(k().description, { [k().description_widthLimit]: E }),
                                                    'data-test-id': l.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            g || w,
                        ],
                    });
                },
                x = (0, s.forwardRef)((e, t) => (0, r.jsx)(C, { forwardRef: t, ...e }));
        },
        23338: (e) => {
            e.exports = {
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
        26042: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => o });
            var r = i(32290),
                a = i(55178),
                s = i(10936);
            let o = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: o, objectPos: l, objectType: n, objectsCount: c, mainObjectId: d, mainObjectType: u, children: m } = e,
                    _ = (0, a.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: o, objectPos: l, objectType: n, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, i, o, l, n, c, d, u],
                    );
                return (0, r.jsx)(s.l.Provider, { value: _, children: m });
            };
        },
        30310: (e) => {
            e.exports = {
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
        30564: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => s });
            var r = i(32290),
                a = i(89020);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, i) => (0, r.jsx)(a.V, { ...e }, i));
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
        45807: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => d });
            var r,
                a = i(72812),
                s = i(55178),
                o = {
                    352: (e) => {
                        e.exports = a;
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(s, 2));
                    },
                },
                l = {};
            function n(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var i = (l[e] = { exports: {} });
                return o[e](i, i.exports, n), i.exports;
            }
            var c = {};
            (() => {
                Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0);
                let e = n(810),
                    t = n(352);
                c.l = (i) => {
                    let [r, a] = (0, e.useState)(!0),
                        [s, o] = (0, e.useState)(!0),
                        l = () => {
                            let e = null == i ? void 0 : i.current;
                            e && (a(0 === e.scrollLeft), o(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    (0, e.useEffect)(() => {
                        l();
                    }, [i, l]),
                        (0, e.useEffect)(() => {
                            let e = null == i ? void 0 : i.current;
                            return (
                                null == e || e.addEventListener('scroll', l),
                                window.addEventListener('resize', l),
                                () => {
                                    null == e || e.removeEventListener('scroll', l), window.removeEventListener('resize', l);
                                }
                            );
                        }, [i, l]);
                    let n = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    i && i.current && (i.current.scrollLeft += i.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [i],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        i && i.current && (i.current.scrollLeft -= i.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [i],
                        ),
                        swipeForward: n,
                        shouldBackwardButtonBeDisabled: r,
                        shouldForwardButtonBeDisabled: s,
                        shouldHideControls: r && s,
                    };
                };
            })(),
                c.X;
            var d = c.l;
        },
        49518: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => x, D: () => k });
            var r = i(32290),
                a = i(63618),
                s = i(66988),
                o = i(55178),
                l = i(16172),
                n = i(80451),
                c = i(21732),
                d = i(75245),
                u = i(84782),
                m = i(26042),
                _ = i(19620),
                h = i(49522),
                p = i(23338),
                v = i.n(p),
                k = (function (e) {
                    return (e.ONE = 'one'), (e.TWO = 'two'), e;
                })({});
            let C = (e) => {
                    let {
                            className: t,
                            forwardRef: i,
                            isShimmerVisible: p,
                            isColumnsShimmerVisible: k,
                            isHeaderWithoutControls: C,
                            maxColumnsCount: x,
                            carouselItemClassName: f,
                            carouselClassName: y,
                            children: g,
                            itemsCountPerColumn: j,
                            shimmer: N,
                            viewAllActionLink: L,
                            blockHeaderClassName: b,
                            additionalControl: A,
                            blockHeaderDescription: S,
                            blockHeaderTitle: T,
                            blockHeaderCoverUrl: P,
                            withBlockHeaderDescription: B,
                            withBlockHeaderCover: w,
                            blockHeaderHeadingVariant: R,
                            isShimmerActive: I,
                            shouldResetCarouselScroll: O,
                            beforeCarousel: E,
                            ...D
                        } = e,
                        { objectsCount: K } = (0, u.N)(),
                        [z, W] = (0, o.useState)(),
                        H = (0, o.useId)(),
                        $ = (0, o.useRef)(null),
                        U = 'two' === x,
                        M = 'string' == typeof L ? String(L) : void 0,
                        F = null != k ? k : p,
                        V = (0, o.useCallback)(
                            (e) => {
                                let t = (0, s.A)(e, j).slice(0, U ? 2 : 1);
                                return (
                                    1 === t.length ? W('one') : W('two'),
                                    t.map((e, t) => (0, r.jsx)('div', { className: v().column, 'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_COLUMN, children: e }, t))
                                );
                            },
                            [j, U],
                        ),
                        Y = (0, o.useMemo)(() => {
                            if (F) return V(Array.from({ length: 2 * j }, (e, t) => (0, o.cloneElement)(N, { key: t })));
                            return V(g);
                        }, [g, V, F, j, N]),
                        X = (0, o.useMemo)(
                            () =>
                                C
                                    ? null
                                    : (0, r.jsxs)('div', {
                                          className: v().controlsContainer,
                                          children: [A, (0, r.jsx)(h.X, { carouselRef: $, className: v().controls, backwardControlClassName: v().backwardControl })],
                                      }),
                            [A, C],
                        );
                    return (
                        (0, o.useEffect)(() => {
                            $.current && O && $.current.scrollTo(0, 0);
                        }, [O]),
                        (0, r.jsxs)('section', {
                            ref: i,
                            className: (0, a.$)(v().root, t),
                            ...(0, n.getDataAttrFromProps)(D),
                            children: [
                                (0, r.jsx)(m.B, {
                                    objectType: l.ky.Shortcut,
                                    objectId: M,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: null != K ? K : 0,
                                    children: (0, r.jsx)(_.T, {
                                        coverUrl: P,
                                        title: T,
                                        description: S,
                                        className: b,
                                        labeledForId: H,
                                        viewAllActionLink: L,
                                        controls: X,
                                        isShimmerVisible: p,
                                        isShimmerActive: I,
                                        withDescription: B,
                                        withCover: w,
                                        headingVariant: R,
                                    }),
                                }),
                                E,
                                (0, r.jsx)(d.F, {
                                    itemClassName: (0, a.$)(v().item, v()['item_columns_'.concat(F && U ? 'two' : z)], f),
                                    className: y,
                                    ref: $,
                                    'aria-labelledby': H,
                                    'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_CAROUSEL,
                                    children: Y,
                                }),
                            ],
                        })
                    );
                },
                x = (0, o.forwardRef)((e, t) => (0, r.jsx)(C, { forwardRef: t, ...e }));
        },
        49522: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => m });
            var r = i(32290),
                a = i(63618),
                s = i(55178),
                o = i(21732),
                l = i(45807),
                n = i(63423),
                c = i(82586),
                d = i(60178),
                u = i.n(d);
            let m = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: i,
                        forwardControlClassName: d,
                        className: m,
                        withSecondaryColor: _,
                        buttonSize: h = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: v, swipeForward: k, shouldBackwardButtonBeDisabled: C, shouldForwardButtonBeDisabled: x, shouldHideControls: f } = (0, l.Y)(t),
                    y = (0, s.useCallback)(
                        (e) => {
                            v(), e.stopPropagation();
                        },
                        [v],
                    ),
                    g = (0, s.useCallback)(
                        (e) => {
                            k(), e.stopPropagation();
                        },
                        [k],
                    );
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(u().root, m),
                    'data-test-id': o.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, r.jsx)(n.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(u().control, i, { [u().control_hidden]: f, [u().control_withSecondaryColor]: _ }),
                            onClick: y,
                            size: h,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: C,
                            'data-test-id': o.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, r.jsx)(n.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(u().control, d, { [u().control_hidden]: f, [u().control_withSecondaryColor]: _ }),
                            onClick: g,
                            size: h,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: x,
                            'data-test-id': o.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        55556: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        60178: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => y });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                o = i(55178),
                l = i(60900),
                n = i(39407),
                c = i(63423),
                d = i(82586),
                u = i(71926),
                m = i(16172),
                _ = i(52068),
                h = i(62376),
                p = i(37240),
                v = i(83920),
                k = i(20472),
                C = i(12894),
                x = i(30310),
                f = i.n(x);
            let y = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    x = s({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, _.st)(),
                        { hash: i } = (0, _.gf)(),
                        { pageId: r } = (0, p.$)(),
                        a = (0, h.U)();
                    (0, o.useEffect)(() => {
                        if (!t || !i || !r) return;
                        let s = (0, m.Fx)({
                            params: {
                                entityType: m.LA.Error,
                                entityId: m.LA.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: r,
                                pageStyle: m.QL.Fullscreen,
                                pagePlacement: m.c4.Fullscreen,
                                mainObjectType: m.ky.NonApplicable,
                                mainObjectId: m.ky.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, m.z5)(t.evgenInstance, s);
                    }, [t, e, i, r, a]);
                })(x);
                let { sendRefreshEvent: y } = (function () {
                        let e = (0, _.st)(),
                            { hash: t } = (0, _.gf)(),
                            { pageId: i } = (0, p.$)(),
                            r = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, o.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let a = (0, m.Fx)({
                                    params: {
                                        actionType: m.X2.Refresh,
                                        userInteractionType: m.gi.Tap,
                                        entityType: m.LA.Error,
                                        entityId: m.LA.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: m.QL.Fullscreen,
                                        pagePlacement: m.c4.Fullscreen,
                                        mainObjectType: m.ky.NonApplicable,
                                        mainObjectId: m.ky.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, m.bv)(e.evgenInstance, a);
                            }, [e, t, i, r]),
                        };
                    })(),
                    g = (0, o.useCallback)(() => {
                        y(), (window.location.href = k.Z.main.href);
                    }, [y]),
                    { contentRef: j } = (0, v.g)();
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(f().root, t),
                    children: [
                        i &&
                            (0, r.jsx)(C.L, { withBackwardFallback: '/', className: (0, a.$)(f().navigation, { [f().navigation_desktop]: !j }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, a.$)(f().content, { [f().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(d.I, { className: f().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.DZ, { className: (0, a.$)(f().title, f().important), variant: 'h3', size: 'xs', children: x }),
                                (0, r.jsxs)(u.HL, {
                                    className: (0, a.$)(f().text, f().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(n.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: g,
                                    className: f().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, r.jsx)(n.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        64538: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => u });
            var r = i(32290),
                a = i(55178),
                s = i(16172),
                o = i(95481),
                l = i(26042),
                n = i(98148),
                c = i(83460);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            playlists: _,
                            containerClassName: h,
                            className: p,
                            headerClassName: v,
                            viewAllActionLink: k,
                            headingVariant: C,
                            shouldSendAnalyticsOnLoaded: x,
                            ...f
                        } = e,
                        y = (0, o.f)();
                    return (
                        (0, a.useEffect)(() => {
                            x && !i && y();
                        }, [i, y, x]),
                        (0, r.jsx)(n.O, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: p,
                            headerClassName: v,
                            containerClassName: h,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: k,
                            headingVariant: C,
                            ...f,
                            children:
                                null == _
                                    ? void 0
                                    : _.map((e, t) =>
                                          (0, r.jsx)(
                                              l.B,
                                              {
                                                  objectType: s.ky.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: _.length,
                                                  children: (0, r.jsx)(c.B, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        68912: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => L });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                o = i(21916),
                l = i(55178),
                n = i(60900),
                c = i(39407),
                d = i(21732),
                u = i(70280),
                m = i(71926),
                _ = i(41677),
                h = i(28999),
                p = i(57594),
                v = i(53514),
                k = i(85017),
                C = i(13798),
                x = i(61258),
                f = i(25649),
                y = i(24760),
                g = i(84141),
                j = i(5856),
                N = i.n(j);
            let L = (0, s.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: s,
                        albumArtists: j,
                        withExplicitMark: L = !0,
                        withSecondaryColor: b,
                        captionSize: A = 'm',
                        explicitSize: S = 'xxxs',
                        withAllArtistsTitle: T,
                        textClassName: P,
                        artistsClassName: B,
                        ignoreDislikedStyles: w,
                        withCustomTooltip: R = !0,
                        hasLineClamp: I = !0,
                        withSavingQueryParams: O,
                        beforeTitle: E,
                        withArtistLink: D = !0,
                        withTrackLink: K = !0,
                        afterTitle: z,
                        withContextMenuArtists: W,
                    } = e,
                    { formatMessage: H } = (0, n.A)(),
                    { sendNavigateSearchFeedback: $ } = (0, h.z)(),
                    {
                        settings: { isMobile: U },
                    } = (0, p.g)(),
                    M = (0, y.$)({ withCustomTooltip: R }),
                    F = (0, o.useSearchParams)(),
                    V = s.getUrl(O ? Object.fromEntries(F) : void 0),
                    Y = (0, l.useMemo)(() => {
                        var e;
                        let t = H({ id: 'entity-names.track-name' }, { trackName: s.title });
                        return ''.concat(t, ' ').concat(null != (e = s.version) ? e : '');
                    }, [H, s.title, s.version]),
                    X = (0, g.O)({ track: s, onNavigate: $, withSavingQueryParams: O, entityType: k.n.TRACK }),
                    Q = (0, l.useCallback)(
                        (e) => {
                            let t = ''.concat(s.title, ' ').concat(!s.isRemoved && s.version ? s.version : '');
                            return (0, r.jsx)(u.m_, {
                                enabled: M && !U,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: v.V,
                                children: (0, r.jsx)(m.HL, {
                                    className: (0, a.$)(N().text, N().title),
                                    type: 'entity',
                                    size: A,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: s.title,
                                }),
                            });
                        },
                        [U, M, A, s.isRemoved, s.title, s.version],
                    ),
                    Z = (0, l.useMemo)(() => {
                        let e = ''.concat(s.title, ' ').concat(!s.isRemoved && s.version ? s.version : '');
                        return s.isRemoved
                            ? (0, r.jsx)(u.m_, {
                                  enabled: M && !U,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: H({ id: 'track-title.error-not-found' }),
                                  hoverSettings: v.V,
                                  children: (0, r.jsx)(m.HL, {
                                      className: (0, a.$)(N().text, N().title),
                                      type: 'entity',
                                      size: A,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: M ? void 0 : H({ id: 'track-title.error-not-found' }),
                                      children: (0, r.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : s.hasTrackLink && K
                              ? (0, r.jsx)(x.N, {
                                    onClick: X,
                                    className: N().albumLink,
                                    href: V,
                                    'aria-label': Y,
                                    title: M ? void 0 : e,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: Q(),
                                })
                              : Q({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }, [U, s.title, s.isRemoved, s.version, s.hasTrackLink, Q, M, H, A, Y, X, V, K]),
                    q = (0, f.s)(s.artists, j),
                    G = (0, l.useMemo)(() => +!!I, [I]);
                return (0, r.jsx)('div', {
                    className: (0, a.$)(N().root, { [N().root_disabled]: !s.isAvailable, [N().root_disliked]: s.isDisliked && !w, [N().root_withSecondaryColor]: b }, t),
                    children: (0, r.jsxs)('div', {
                        className: N().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(N().titleContainer, { [N().titleContainer_withVersion]: s.version }, i),
                                children: [
                                    (0, r.jsxs)(m.HL, {
                                        className: (0, a.$)(N().text, P),
                                        type: 'entity',
                                        size: A,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            E,
                                            Z,
                                            !s.isRemoved &&
                                                s.version &&
                                                (0, r.jsxs)(m.HL, {
                                                    className: (0, a.$)(N().text, N().version),
                                                    type: 'entity',
                                                    size: A,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: M ? void 0 : s.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', s.version],
                                                }),
                                        ],
                                    }),
                                    s.explicitDisclaimer &&
                                        L &&
                                        (0, r.jsx)(C.N, {
                                            containerClassName: N().explicitMarkContainer,
                                            getDescriptionTexts: s.getDescriptionTexts,
                                            size: S,
                                            variant: s.explicitDisclaimer,
                                            className: N().explicitMark,
                                            trackId: s.id,
                                        }),
                                    z,
                                ],
                            }),
                            q.length > 0 &&
                                (0, r.jsx)(_.i, {
                                    className: (0, a.$)(N().text, { [N().artists]: I }, B, P),
                                    withAllArtistsTitle: T,
                                    linkClassName: (0, a.$)(N().text, N().link),
                                    captionClassName: (0, a.$)(N().text, N().artistCaption),
                                    artists: q,
                                    withLink: s.isNonUserGenerated && D,
                                    lineClamp: G,
                                    captionSize: A,
                                    withContextMenu: W,
                                }),
                        ],
                    }),
                });
            });
        },
        69e3: (e) => {
            e.exports = {
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
        69951: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => k });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                o = i(55178),
                l = i(21732),
                n = i(90169),
                c = i(57594),
                d = i(40229),
                u = i(43565),
                m = i(8677),
                _ = i(68912),
                h = i(92102),
                p = i(85673),
                v = i.n(p);
            let k = (0, s.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: s,
                        className: p,
                        withDNDBlock: k,
                        isDragging: C,
                        draggingClassName: x,
                        ignoreDislikedStyles: f,
                        withSecondaryColor: y,
                        handleRemove: g,
                        withDislike: j,
                        withTrailer: N = !0,
                        beforeTitle: L,
                        removeButtonAriaLabel: b,
                        hideControls: A,
                    } = e,
                    S = (0, n.D)({ playContextParams: s, entityId: i.entityId }),
                    {
                        settings: { isMobile: T },
                    } = (0, c.g)(),
                    P = (0, o.useCallback)(
                        (e) =>
                            (0, r.jsx)(d.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: f,
                                radius: 'xs',
                                ...e,
                            }),
                        [f, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, r.jsx)(h.C, {
                    className: (0, a.$)(p, { [v().trackWithDots]: k, [v().important]: k }),
                    track: i,
                    beforeBlock: k ? (0, r.jsx)(u.O, { className: (0, a.$)(v().dots, x), isDragging: C }) : void 0,
                    meta: (0, r.jsx)(_.j, { withArtistLink: !T, beforeTitle: L, track: i, ignoreDislikedStyles: f, withSecondaryColor: y }),
                    playButtonCellRender: P,
                    controls: (0, r.jsx)(m.Q, {
                        track: i,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: f,
                        utmLink: null == (t = s.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: y,
                        handleRemove: g,
                        withDislike: j,
                        withTrailer: N,
                        removeButtonAriaLabel: b,
                        hideControls: A,
                    }),
                    ...S,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        73141: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var r = i(32290),
                a = i(92708),
                s = i(55178),
                o = i(60900),
                l = i(63380),
                n = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                m = i(97647),
                _ = i(97755);
            let h = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(_.O, {
                        entityVariant: m.c.PLAYLIST,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        closeToast: i,
                        coverUri: t.coverUri,
                    });
                },
                p = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [m, _] = (0, s.useState)(!1),
                        { formatMessage: p } = (0, o.A)();
                    return (0, s.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (m) return;
                        let s = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                        _(!0);
                        let o = await e.toggleLike();
                        _(!1),
                            o === l.f.OK
                                ? i((0, r.jsx)(h, { playlist: s }), { containerId: n.u.INFO })
                                : i((0, r.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR });
                    }, [t.isAuthorized, m, e, p, i]);
                };
        },
        73192: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => h });
            var r = i(32290),
                a = i(92708),
                s = i(55178),
                o = i(60900),
                l = i(45477),
                n = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                m = i(8097);
            let _ = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(m.k, {
                        closeToast: i,
                        entityVariant: u.c.PLAYLIST,
                        entityUrl: t.url,
                        coverUri: t.coverUri,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                },
                h = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, n.l)(),
                        { formatMessage: u } = (0, o.A)(),
                        [m, h] = (0, s.useState)(!1);
                    return (0, s.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                        if (m) return;
                        let s = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                        h(!0);
                        let o = await e.togglePin();
                        h(!1),
                            o
                                ? i((0, r.jsx)(_, { playlist: s }), { containerId: l.u.INFO })
                                : i((0, r.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR });
                    }, [t.isAuthorized, m, e, i, u]);
                };
        },
        75245: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => c });
            var r,
                a = i(55178),
                s = {
                    5881: (e, t, i) => {
                        function r() {
                            for (var e, t, i = 0, r = ''; i < arguments.length; )
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            r,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (r = e(t[i])) && (a && (a += ' '), (a += r));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        i.r(t), i.d(t, { clsx: () => r, default: () => a });
                        let a = r;
                    },
                    9058: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => r });
                        let r = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var a = null;
                            if ((void 0 !== r && (a = '' + r), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var s in ((r = {}), t)) 'key' !== s && (r[s] = t[s]);
                            else r = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r);
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    5056: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0);
                        let a = i(4377),
                            s = i(5881),
                            o = i(810),
                            l = r(i(9058)),
                            n = (e) => {
                                let { className: t, itemClassName: i, children: r, forwardRef: n, role: c, ...d } = e;
                                return (0, a.jsx)('ol', {
                                    ref: n,
                                    className: (0, s.clsx)(l.default.root, t),
                                    ...d,
                                    role: null != c ? c : 'list',
                                    children: o.Children.map(r, (e) => (0, a.jsx)('li', { className: (0, s.clsx)(l.default.item, i), children: e })),
                                });
                            };
                        t.Carousel = (0, o.forwardRef)((e, t) => (0, a.jsx)(n, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                o = {};
            function l(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return s[e].call(i.exports, i, i.exports, l), i.exports;
            }
            (l.d = (e, t) => {
                for (var i in t) l.o(t, i) && !l.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var n = {};
            (() => {
                Object.defineProperty(n, 'X', { value: !0 }), (n.l = void 0);
                var e = l(5056);
                Object.defineProperty(n, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var c = n.l;
            n.X;
        },
        77435: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => u });
            var r = i(32290),
                a = i(55178),
                s = i(16172),
                o = i(95481),
                l = i(26042),
                n = i(98148),
                c = i(24170);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            albums: _,
                            className: h,
                            containerClassName: p,
                            headerClassName: v,
                            viewAllActionLink: k,
                            headingRef: C,
                            headingVariant: x,
                            shouldSendAnalyticsOnLoaded: f,
                            ...y
                        } = e,
                        g = (0, o.f)();
                    return (
                        (0, a.useEffect)(() => {
                            f && g();
                        }, [g, f]),
                        (0, r.jsx)(n.O, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: h,
                            headerClassName: v,
                            containerClassName: p,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: k,
                            headingRef: C,
                            headingVariant: x,
                            ...y,
                            children:
                                null == _
                                    ? void 0
                                    : _.map((e, t) =>
                                          (0, r.jsx)(
                                              l.B,
                                              {
                                                  objectType: s.ky.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: _.length,
                                                  children: (0, r.jsx)(c.a, {
                                                      album: e,
                                                      contentLinesCount: 3,
                                                      withAddition: !e.isNonMusic,
                                                      withLikesCount: e.isNonMusic,
                                                  }),
                                              },
                                              e.id,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        77514: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 3377)), Promise.resolve().then(i.bind(i, 16890));
        },
        81354: (e, t, i) => {
            'use strict';
            i.d(t, { XU: () => u });
            var r,
                a,
                s = i(30782),
                o = i(55178),
                l = i(60900);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(r || (r = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(a || (a = {}));
            var n = function (e) {
                var t = (0, l.A)(),
                    i = e.value,
                    r = e.children,
                    a = (0, s.__rest)(e, ['value', 'children']);
                return r(t.formatNumberToParts(i, a));
            };
            function c(e) {
                var t = function (t) {
                    var i = (0, l.A)(),
                        r = t.value,
                        a = t.children,
                        o = (0, s.__rest)(t, ['value', 'children']),
                        n = 'string' == typeof r ? new Date(r || 0) : r;
                    return a('formatDate' === e ? i.formatDateToParts(n, o) : i.formatTimeToParts(n, o));
                };
                return (t.displayName = a[e]), t;
            }
            function d(e) {
                var t = function (t) {
                    var i = (0, l.A)(),
                        r = t.value,
                        a = t.children,
                        n = (0, s.__rest)(t, ['value', 'children']),
                        c = i[e](r, n);
                    if ('function' == typeof a) return a(c);
                    var d = i.textComponent || o.Fragment;
                    return o.createElement(d, null, c);
                };
                return (t.displayName = r[e]), t;
            }
            (n.displayName = 'FormattedNumberParts'), (n.displayName = 'FormattedNumberParts');
            var u = d('formatDate');
            d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), c('formatDate'), c('formatTime');
        },
        83460: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => J });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                o = i(55178),
                l = i(60900),
                n = i(16172),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                m = i(6752),
                _ = i(14934),
                h = i(82586),
                // for PulseSync WebHost
                pulseSyncPlaylistDownloadIcons = i(82586),
                p = i(86269),
                v = i(71926),
                k = i(41677),
                C = i(73141),
                x = i(73192),
                f = i(71735),
                y = i(47745),
                g = i(2969),
                j = i(54391),
                N = i(23352),
                L = i(72396),
                b = i(5537),
                A = i(84062),
                S = i(28999),
                T = i(90169),
                P = i(57594),
                B = i(61376),
                w = i(11323),
                R = i(92744),
                I = i(61258),
                O = i(10180),
                E = i(90326),
                D = i(29268),
                K = i(34925),
                z = i(13931),
                W = i(19740),
                H = i(9017),
                $ = i(65477),
                U = i(46200),
                M = i(27120),
                F = i(95134),
                V = i(79406),
                Y = i(58237),
                X = i(56367),
                Q = i(83755);
            let Z = (0, s.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: a, open: s, ...o } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: m } = (0, U.q)(),
                    {
                        experiments: _,
                        settings: { isMobile: h },
                        trailer: p,
                        user: v,
                    } = (0, P.g)(),
                    k = (0, C.K)(i),
                    y = (0, x.A)(i),
                    g = (0, j.F)(),
                    { formatMessage: N } = (0, l.A)(),
                    L = (0, f.P)(),
                    b = _.checkExperiment(V.z.WebEditorsFeatures, 'on'),
                    A = (0, H.A)({ entityVariant: F.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, M.N)(s);
                let S = (0, u.c)(() => {
                    if (d) return void m();
                    L() || (p.openPlaylistTrailer(i.id), g(n.ky.Playlist, i.id));
                });
                return (0, r.jsxs)(W.W1, {
                    title: i.title,
                    onOpenChange: a,
                    open: s,
                    offsetOptions: 10,
                    isMobile: h,
                    ariaLabel: N({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU },
                    ...o,
                    // for PulseSync WebHost
                    children: ((items) =>
                        window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                            eventDetail: {
                                id: String(i.kind ?? i.id),
                                uuid: String(i.uuid ?? ''),
                                url: String(i.url ?? ''),
                                ...(i.title ? { title: String(i.title) } : {}),
                            },
                            renderItem: ({ key, payload, activate }) => {
                                const label = String(payload?.label ?? '').trim(),
                                    icon = String(payload?.icon ?? '').trim();
                                if (!label || !icon) return null;
                                return (0, r.jsx)(
                                    W.Dr,
                                    {
                                        icon: (0, r.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: icon, size: 'xxs' }),
                                        onClick: () => {
                                            activate(), a?.(!1);
                                        },
                                        children: label,
                                        'data-pulsesync-addon-menu-item': '',
                                    },
                                    key,
                                );
                            },
                        }) ?? items)([
                        b && (0, r.jsx)($.d, { entityVariant: F.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : A }),
                        !h && (0, r.jsx)(X.L, { onClick: y, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(Y.T, { onClick: k, isLiked: i.isLiked, disabled: !v.isAuthorized }),
                        (i.tracksCount ?? 1) > 0 &&
                            (0, r.jsx)(W.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, r.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)(Q.N, { onClick: S, disabled: !i.isAvailable }),
                    ]),
                });
            });
            var q = i(11675),
                G = i.n(q);
            let J = (0, s.PA)((e) => {
                let { className: t, playlist: i, children: s, contentLinesCount: W, customDescription: H } = e,
                    { ref: $, intersectionPropertyId: U } = (0, N.n)(),
                    {
                        trailer: M,
                        user: F,
                        paywall: { modal: V },
                    } = (0, P.g)(),
                    { from: Y, utmLink: X } = (0, L.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: Q } = (0, l.A)(),
                    { sendLikeSearchFeedback: q, sendNavigateSearchFeedback: J, sendPlaySearchFeedback: ee } = (0, S.z)(),
                    [et, ei] = (0, o.useState)(!1),
                    [er, ea] = (0, o.useState)(!1),
                    [es, eo] = (0, o.useState)(!1),
                    el = (0, z.r)(i),
                    en = (0, C.K)(i),
                    ec = (0, x.A)(i),
                    ed = (0, y.N)(),
                    eu = (0, g.b)(),
                    em = (0, A.Z)(i.url),
                    e_ = (0, j.F)(),
                    eh = (0, f.P)(),
                    ep = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eh())) return void e.preventDefault();
                        M.setUtmLink(X), M.openPlaylistTrailer(i.id), e_(n.ky.Playlist, i.id);
                    }),
                    [ev, ek] = (0, o.useState)(!1),
                    { isPlaying: eC, togglePlay: ex } = (0, T.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: Y, utmLink: X }, loadContextMeta: !0 },
                    }),
                    ef = (0, u.c)(() => {
                        ed({ to: n.QT.PlaylistScreen }), null == J || J();
                    }),
                    ey = (0, u.c)((e) => {
                        ef(), em(e);
                    }),
                    eg = (0, b.N)(),
                    ej = (0, u.c)(() => {
                        if (!eh()) {
                            if (eg) return void V.open();
                            et || eC || (ei(!0), null == ee || ee()), ex(), eu(!eC);
                        }
                    }),
                    eN = (0, u.c)(() => {
                        er || i.isLiked || (ea(!0), null == q || q()), en();
                    }),
                    eL = (0, u.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    eb = (0, u.c)((e) => {
                        eo(e), ek(e);
                    }),
                    eA = (0, o.useMemo)(() => {
                        var e;
                        return H
                            ? (0, r.jsx)(v.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: H }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    k.i,
                                    { className: G().artists, artists: i.artists, lineClamp: 1, linkClassName: G().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [H, i]),
                    eS = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                R.c,
                                {
                                    className: (0, a.$)(G().likeButton, G().control),
                                    isLiked: i.isLiked,
                                    onClick: eN,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !F.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eT = (0, o.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                K.n,
                                {
                                    children: (0, r.jsx)(
                                        D.k,
                                        { className: (0, a.$)(G().trailerButton, G().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ep },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ep, i]),
                    eP = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(
                                O.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, a.$)(G().pinButton, G().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    eB = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(p.t, {
                                className: G().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: G().coverBlock,
                                    onClick: ey,
                                    children: [
                                        (0, r.jsx)(w.B, {
                                            className: G().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: el,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(_.hg, {
                                            isVisible: es || ev,
                                            className: G().controls,
                                            playControl: (0, r.jsx)(
                                                E.D,
                                                {
                                                    className: (0, a.$)(G().playButton, G().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: ej,
                                                    isPlaying: eC,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eS,
                                            menuControl: (0, r.jsx)(
                                                Z,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eb,
                                                    open: es,
                                                    onClick: eL,
                                                    className: (0, a.$)(G().menuButton, G().control),
                                                    icon: (0, r.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eP,
                                            trailerControl: eT,
                                        }),
                                    ],
                                }),
                            }),
                        [ey, i, el, es, ev, ej, eC, eS, eb, eL, eP, eT],
                    ),
                    ew = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(_.MN, {
                    ref: $,
                    'aria-label': el,
                    className: (0, a.$)(G().root, t),
                    title: (0, r.jsx)(v.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(I.N, { className: G().titleLink, href: i.url, onClick: ef, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(I.N, { href: i.url, onClick: ef, children: i.title }),
                    'data-intersection-property-id': U,
                    contentLinesCount: W,
                    view: eB,
                    description: eA,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        ew &&
                            (0, r.jsx)(B.x, {
                                ariaLabel: Q({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: en,
                            }),
                        s,
                    ],
                });
            });
        },
        85673: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        94218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var r = i(32290),
                a = i(21916),
                s = i(39407),
                o = i(21732),
                l = i(91027),
                n = i(63423),
                c = i(71926),
                d = i(70204),
                u = i(34186);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', withRipple: m = !0, buttonText: _, isBlock: h, key: p, className: v } = e,
                    k = (0, a.useRouter)(),
                    C = (0, u.N)().get(d.QG),
                    x = (0, l.c)(() => {
                        C.authorizationUrl && k.push(C.authorizationUrl);
                    });
                return (0, r.jsx)(
                    n.$,
                    {
                        onClick: x,
                        className: v,
                        isBlock: h,
                        color: 'primary',
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': o.S7.UNAUTHORIZED_BUTTON,
                        children: _ || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(s.A, { id: 'authorization.enter-button' }) }),
                    },
                    p,
                );
            };
        },
        95481: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => k });
            var r = i(55178),
                a = i(16172),
                s = i(52068),
                o = i(6752),
                l = i(62376),
                n = i(1677),
                c = i(48922),
                d = i(84782),
                u = i(30915),
                m = i(18746),
                _ = i(37240),
                h = i(51012),
                p = i(47498);
            let v = [
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
                k = () => {
                    let e = (0, r.useRef)(!1),
                        t = (0, s.st)(),
                        i = (0, l.U)(),
                        { hash: k } = (0, s.gf)(),
                        { pageId: C } = (0, _.$)(),
                        { tabId: x, tabPos: f, isTabSelectedByDefault: y } = (0, p.R)(),
                        { offsetBlockPosY: g } = (0, u.u)(),
                        { blockId: j, blockType: N, blockPosX: L, blockPosY: b, mainObjectType: A, mainObjectId: S, objectsCount: T } = (0, d.N)(),
                        { filterKey: P, filterValue: B, filterPos: w } = (0, m.G)(),
                        { skeleton: R } = (0, h.b)(),
                        I = (0, o.L)(() => (void 0 !== g && void 0 !== b ? g + b : b));
                    return (0, r.useCallback)(() => {
                        if (!t || !C || !c.xK.includes(C) || !v.includes(C) || e.current) return;
                        let r = { hash: k, pageId: n.F[C], entityType: N, entityId: j, entityPosX: L, entityPosY: I, objectsCount: T };
                        void 0 !== P && ((r.filterKey = P), (r.filterValue = B), (r.filterPos = w)),
                            c.qG.includes(C) && ((r.tabId = x), (r.tabPos = f), (r.isTabSelectedByDefault = y)),
                            R && (r.skeletonId = R),
                            S && A && ((r.mainObjectType = A), (r.mainObjectId = S));
                        let s = (0, a.Fx)({ params: r, logger: i, context: 'useSendEventOnBlockLoaded' });
                        s && ((0, a.uY)(t.evgenInstance, s), (e.current = !0));
                    }, [t, C, k, N, j, L, I, P, B, w, T, R, S, A, i, x, f, y]);
                };
        },
        98148: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => x });
            var r = i(32290),
                a = i(63618),
                s = i(55178),
                o = i(16172),
                l = i(80451),
                n = i(6752),
                c = i(75245),
                d = i(79856),
                u = i(84782),
                m = i(26042),
                _ = i(19620),
                h = i(49522),
                p = i(30564),
                v = i(33696),
                k = i.n(v);
            let C = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: i,
                            isShimmerVisible: v,
                            isShimmerActive: C,
                            isShimmerWithSubcover: x,
                            isShimmerCentered: f,
                            isShimmerRounded: y,
                            title: g,
                            description: j,
                            coverUrl: N,
                            viewAllActionLink: L,
                            titleChildren: b,
                            headerChildren: A,
                            children: S,
                            className: T,
                            containerClassName: P,
                            headerClassName: B,
                            itemClassName: w,
                            showHeaderShimmer: R = !1,
                            showShimmerInfo: I = !0,
                            showControls: O = !0,
                            headingRef: E,
                            headingVariant: D,
                            customShimmer: K,
                            ...z
                        } = e,
                        W = (0, s.useId)(),
                        H = (0, s.useRef)(null),
                        { objectsCount: $ } = (0, u.N)(),
                        U = (0, s.useMemo)(
                            () =>
                                R && v
                                    ? (0, r.jsx)('div', { className: B, children: (0, r.jsx)(d.W, { isActive: C, className: k().shimmerTitle, radius: 'l' }) })
                                    : g || j || b || A
                                      ? (0, r.jsx)(m.B, {
                                            objectType: o.ky.Shortcut,
                                            objectId: String(L),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != $ ? $ : 0,
                                            children: (0, r.jsx)(_.T, {
                                                className: B,
                                                labeledForId: W,
                                                title: g,
                                                description: j,
                                                coverUrl: N,
                                                viewAllActionLink: L,
                                                controls: O && (0, r.jsx)(h.X, { className: k().controls, carouselRef: H }),
                                                headingRef: E,
                                                headingVariant: D,
                                                withDescription: !!j,
                                                titleChildren: b,
                                                children: A,
                                            }),
                                        })
                                      : void 0,
                            [N, j, B, E, D, W, C, v, $, O, R, g, b, A, L],
                        ),
                        M = (0, n.L)(() => K || (0, p.k)({ className: i, isActive: C, withInfo: I, withSubcover: x, centered: f, round: y }));
                    return (0, r.jsxs)('section', {
                        ref: t,
                        className: (0, a.$)(k().root, T),
                        ...(0, l.getDataAttrFromProps)(z),
                        children: [
                            U,
                            (0, r.jsx)(c.F, {
                                className: P,
                                ref: H,
                                itemClassName: (0, a.$)(k().item, k().important, w),
                                'aria-labelledby': ''.concat(W, ' ').concat(W, '-description'),
                                children: v ? M : S,
                            }),
                        ],
                    });
                },
                x = (0, s.forwardRef)((e, t) => (0, r.jsx)(C, { forwardRef: t, ...e }));
        },
    },
    (e) => {
        e.O(
            0,
            [
                5718, 7034, 7258, 7231, 7972, 6347, 3183, 9763, 8868, 6639, 313, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 6252, 6477, 7275, 2586, 8347,
                4522, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 2563, 6341, 3759, 4220, 9562, 7358,
            ],
            () => e((e.s = 77514)),
        ),
            (_N_E = e.O());
    },
]);
