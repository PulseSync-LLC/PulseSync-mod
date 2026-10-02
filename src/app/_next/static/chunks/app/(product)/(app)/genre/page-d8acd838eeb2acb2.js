(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6902],
    {
        1134: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var r = i(25839),
                a = i(33660),
                s = i(74631),
                l = i(39004),
                o = i(91149),
                n = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(27892);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, n.l)(),
                    { formatMessage: m } = (0, l.A)(),
                    [_, v] = (0, s.useState)(!1);
                return (0, s.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let s = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                    v(!0);
                    let l = await e.togglePin();
                    (v(!1),
                        l
                            ? i((0, r.jsx)(u.l, { playlist: s }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, _, e, i, m]);
            };
        },
        1797: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var r = i(40207);
            let a = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        2831: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => V }));
            var r = i(25839),
                a = i(84059),
                s = i(74631),
                l = i(82298),
                o = i(88204),
                n = i(39004),
                c = i(13833),
                d = i(4254),
                u = i(78299),
                m = i(77635),
                _ = i(84058),
                v = i(1407),
                p = i(91797),
                C = i(42853),
                h = i(20258),
                A = i(57138),
                k = i(10322),
                f = i(21784),
                x = i(89192),
                S = i(30716),
                L = i(80499),
                T = i(82706),
                y = i(66284),
                b = i(10603),
                g = i(61732),
                I = i(12234),
                j = i(89221),
                R = i(41242),
                N = i(27935),
                O = i(41016),
                P = i(80461),
                E = i(95445),
                B = i(71121);
            async function U(e, t) {
                let { locale: i, fullUrl: r, url: a, tld: s, host: l } = t,
                    o = await (0, j.W)(i),
                    n = e.title.fullTitle,
                    c = o({ id: 'metadata.genre-title' }, { genreTitle: n }),
                    d = 'artists' in e ? e.artists : void 0,
                    u = (0, B.f)({ genreTitle: n, artists: d, messageFormatter: o }),
                    m = ''.concat(l).concat('', '/meta/og-image.png');
                return {
                    title: c,
                    description: u,
                    openGraph: (0, N.i)({
                        ogTitle: (0, R.N)(n),
                        ogDescription: u,
                        fullUrl: null != r ? r : '',
                        locale: i,
                        siteName: o({ id: 'metadata.yandex-music' }),
                        ogImage: m,
                    }),
                    twitter: (0, O.H)({ cardType: P.W.APP, title: c, url: null != a ? a : '', appName: o({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, I.X)({
                        additional: { tld: s, url: null != a ? a : '', fullUrl: null != r ? r : '', host: l },
                        appName: o({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, E.S)('/genre/:metatagId', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var w = i(88720),
                D = i(75568),
                M = i(45329),
                H = i(87219),
                z = i.n(H);
            let F = (0, o.PA)((e) => {
                let { metatagId: t, preloadedMeta: i } = e,
                    o = (0, L.s)(T.n.GENRE),
                    { formatMessage: I } = (0, n.A)(),
                    { contentScrollRef: j, setContentScrollRef: R } = (0, x.g)(),
                    N = (0, f.W)();
                return (o.isNotFound && (0, a.notFound)(),
                (0, s.useEffect)(
                    () => () => {
                        o.reset();
                    },
                    [o],
                ),
                (0, S.J)(o.isResolved),
                ((e) => {
                    (0, s.useEffect)(() => {
                        e &&
                            U(
                                ((e) => ({
                                    id: '',
                                    title: { title: '', fullTitle: e.fullTitle || '' },
                                    liked: !1,
                                    tracks: [],
                                    artists: e.artists.map(D.N),
                                    composers: [],
                                    albums: e.albums.map(w.f),
                                    playlists: e.playlists.map(M.J),
                                }))(e),
                                { fullUrl: null, locale: null, url: null, tld: '', host: '' },
                            ).then((e) => {
                                (0, g.j)(e);
                            });
                    }, [e]);
                })(o),
                t && o.isNeededToLoad && (0, s.use)(o.getData({ id: t, preloadedMeta: i })),
                o.isRejected && !o.isNotFound)
                    ? (0, r.jsx)(u.SomethingWentWrong, {})
                    : (0, r.jsx)(k.n, {
                          pageId: h._Q.GENRE,
                          children: (0, r.jsxs)(v.h, {
                              scrollElement: j,
                              outerTitle: o.fullTitle,
                              children: [
                                  (0, r.jsx)(b.Y, {
                                      variant: b.V.TEXT,
                                      withForwardControl: !1,
                                      withBackwardControl: N.canBack,
                                      children: (0, r.jsx)(d.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: o.fullTitle }),
                                  }),
                                  (0, r.jsx)(c.N, {
                                      className: z().root,
                                      containerClassName: z().content,
                                      ref: R,
                                      children: (0, r.jsxs)('div', {
                                          className: z().carouselBlocks,
                                          children: [
                                              o.hasPlaylists &&
                                                  (0, r.jsx)(A.F, {
                                                      blockId: C.h.PLAYLISTS_CAROUSEL,
                                                      blockType: C.h.PLAYLISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 1,
                                                      blockIdForFrom: C.h.PLAYLISTS_CAROUSEL,
                                                      objectsCount: o.albums.length,
                                                      children: (0, r.jsx)(p.E, {
                                                          isShimmerVisible: o.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, l.$)(z().carouselBlockHeader, z().carouselBlock),
                                                          containerClassName: z().carouselBlock,
                                                          playlists: o.playlists,
                                                          title: I({ id: 'entity-names.popular-playlists' }),
                                                          viewAllActionLink: '/genre/'.concat(o.id, '/playlists'),
                                                      }),
                                                  }),
                                              o.hasAlbums &&
                                                  (0, r.jsx)(A.F, {
                                                      blockId: C.h.ALBUMS_CAROUSEL,
                                                      blockType: C.h.ALBUMS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 2,
                                                      blockIdForFrom: C.h.ALBUMS_CAROUSEL,
                                                      objectsCount: o.albums.length,
                                                      children: (0, r.jsx)(m.p, {
                                                          isShimmerVisible: o.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, l.$)(z().carouselBlockHeader, z().carouselBlock),
                                                          containerClassName: z().carouselBlock,
                                                          albums: o.albums,
                                                          title: I({ id: 'entity-names.new-albums' }),
                                                          viewAllActionLink: '/genre/'.concat(o.id, '/albums'),
                                                      }),
                                                  }),
                                              o.hasArtists &&
                                                  (0, r.jsx)(A.F, {
                                                      blockId: C.h.ARTISTS_CAROUSEL,
                                                      blockType: C.h.ARTISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 3,
                                                      blockIdForFrom: C.h.ARTISTS_CAROUSEL,
                                                      objectsCount: o.albums.length,
                                                      children: (0, r.jsx)(y.O, {
                                                          isShimmerVisible: o.isLoading,
                                                          isShimmerActive: !0,
                                                          isShimmerCentered: !0,
                                                          isShimmerRounded: !0,
                                                          headerClassName: (0, l.$)(z().carouselBlockHeader, z().carouselBlock),
                                                          containerClassName: z().carouselBlock,
                                                          title: I({ id: 'entity-names.popular-artists' }),
                                                          viewAllActionLink: '/genre/'.concat(o.id, '/artists'),
                                                          children: o.artists.map((e) => (0, r.jsx)(_.a, { artist: e, contentLinesCount: 3 }, e.id)),
                                                      }),
                                                  }),
                                          ],
                                      }),
                                  }),
                              ],
                          }),
                      });
            });
            var K = i(23976);
            let Y = () => {
                    let { formatMessage: e } = (0, n.A)(),
                        { contentScrollRef: t, setContentScrollRef: i } = (0, x.g)(),
                        a = (0, f.W)();
                    return (0, r.jsxs)(v.h, {
                        scrollElement: t,
                        children: [
                            (0, r.jsx)(b.Y, {
                                variant: b.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: a.canBack,
                                children: (0, r.jsx)(K.W, { className: z().shimmerTitle, radius: 'l' }),
                            }),
                            (0, r.jsx)(c.N, {
                                className: z().root,
                                containerClassName: z().content,
                                ref: i,
                                children: (0, r.jsxs)('div', {
                                    className: z().carouselBlocks,
                                    children: [
                                        (0, r.jsx)(p.E, {
                                            isShimmerVisible: !0,
                                            isShimmerActive: !0,
                                            headerClassName: (0, l.$)(z().carouselBlockHeader, z().carouselBlock),
                                            containerClassName: z().carouselBlock,
                                            title: e({ id: 'entity-names.popular-playlists' }),
                                        }),
                                        (0, r.jsx)(m.p, {
                                            isShimmerVisible: !0,
                                            isShimmerActive: !0,
                                            headerClassName: (0, l.$)(z().carouselBlockHeader, z().carouselBlock),
                                            containerClassName: z().carouselBlock,
                                            title: e({ id: 'entity-names.new-albums' }),
                                        }),
                                        (0, r.jsx)(y.O, {
                                            isShimmerVisible: !0,
                                            isShimmerActive: !0,
                                            isShimmerCentered: !0,
                                            isShimmerRounded: !0,
                                            headerClassName: (0, l.$)(z().carouselBlockHeader, z().carouselBlock),
                                            containerClassName: z().carouselBlock,
                                            title: e({ id: 'entity-names.popular-artists' }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                },
                V = () => {
                    let e = (0, a.useSearchParams)().get('metatagId');
                    return (e || (0, a.notFound)(), (0, r.jsx)(s.Suspense, { fallback: (0, r.jsx)(Y, {}), children: (0, r.jsx)(F, { metatagId: e }) }));
                };
        },
        5365: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => c });
            var r,
                a = i(74631),
                s = {
                    5881: (e, t, i) => {
                        function r() {
                            for (var e, t, i = 0, r = ''; i < arguments.length;)
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
                        (i.r(t), i.d(t, { clsx: () => r, default: () => a }));
                        let a = r;
                    },
                    2876: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => r }));
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
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    4014: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0));
                        let a = i(4377),
                            s = i(5881),
                            l = i(810),
                            o = r(i(2876)),
                            n = (e) => {
                                let { className: t, itemClassName: i, children: r, forwardRef: n, role: c, ...d } = e;
                                return (0, a.jsx)('ol', {
                                    ref: n,
                                    className: (0, s.clsx)(o.default.root, t),
                                    ...d,
                                    role: null != c ? c : 'list',
                                    children: l.Children.map(r, (e) => (0, a.jsx)('li', { className: (0, s.clsx)(o.default.item, i), children: e })),
                                });
                            };
                        t.Carousel = (0, l.forwardRef)((e, t) => (0, a.jsx)(n, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                l = {};
            function o(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var i = (l[e] = { exports: {} });
                return (s[e].call(i.exports, i, i.exports, o), i.exports);
            }
            ((o.d = (e, t) => {
                for (var i in t) o.o(t, i) && !o.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var n = {};
            (() => {
                (Object.defineProperty(n, 'X', { value: !0 }), (n.l = void 0));
                var e = o(4014);
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
        7361: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var r = i(25839),
                a = i(33660),
                s = i(74631),
                l = i(39004),
                o = i(31860),
                n = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                m = i(63149);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, v] = (0, s.useState)(!1),
                    { formatMessage: p } = (0, l.A)();
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (_) return;
                    let s = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    v(!0);
                    let l = await e.toggleLike();
                    (v(!1),
                        l === o.f.OK
                            ? i((0, r.jsx)(m.T, { artist: s }), { containerId: n.u.INFO })
                            : i((0, r.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e, t.isAuthorized, _, p, i]);
            };
        },
        9911: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => d });
            var r,
                a = i(6274),
                s = i(74631),
                l = {
                    352: (e) => {
                        e.exports = a;
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(s, 2));
                    },
                },
                o = {};
            function n(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return (l[e](i, i.exports, n), i.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = n(810),
                    t = n(352);
                c.l = (i) => {
                    let [r, a] = (0, e.useState)(!0),
                        [s, l] = (0, e.useState)(!0),
                        o = () => {
                            let e = null == i ? void 0 : i.current;
                            e && (a(0 === e.scrollLeft), l(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        o();
                    }, [i, o]),
                        (0, e.useEffect)(() => {
                            let e = null == i ? void 0 : i.current;
                            return (
                                null == e || e.addEventListener('scroll', o),
                                window.addEventListener('resize', o),
                                () => {
                                    (null == e || e.removeEventListener('scroll', o), window.removeEventListener('resize', o));
                                }
                            );
                        }, [i, o]));
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
                c.X);
            var d = c.l;
        },
        13936: (e) => {
            e.exports = {
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
                root: 'ArtistCard_root__x67BK',
                srTitleLink: 'ArtistCard_srTitleLink__jzfOW',
                coverBlock: 'ArtistCard_coverBlock__dBL4x',
                image: 'ArtistCard_image__pONJx',
                titleLink: 'ArtistCard_titleLink__G8Puz',
                playButton: 'ArtistCard_playButton__XZoTr',
                likeButton: 'ArtistCard_likeButton__LU9TL',
                menuButton: 'ArtistCard_menuButton__EynXG',
                pinButton: 'ArtistCard_pinButton__G_VOi',
                trailerButton: 'ArtistCard_trailerButton__a2NHm',
                control: 'ArtistCard_control___qv5j',
            };
        },
        15787: (e) => {
            e.exports = {
                root: 'PlaylistCard_root__i3pR4',
                srTitleLink: 'PlaylistCard_srTitleLink__Gg2Dy',
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
        18412: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => k });
            var r = i(25839),
                a = i(82298),
                s = i(74631),
                l = i(36619),
                o = i(61493),
                n = i(66738),
                c = i(23818),
                d = i(86869),
                u = i(23976),
                m = i(4254),
                _ = i(61777),
                v = i(29481),
                p = i(97522),
                C = i(73208),
                h = i.n(C);
            let A = (e) => {
                    let {
                            className: t,
                            coverUrl: i,
                            labeledForId: C,
                            subTitle: A,
                            title: k,
                            description: f,
                            viewAllActionLink: x,
                            controls: S,
                            titleSize: L = 'm',
                            coverBackgroundColor: T,
                            coverRadius: y = 's',
                            titleClassName: b,
                            titleLineClamp: g,
                            fallbackIconVariant: I,
                            available: j = !0,
                            onViewAllAction: R,
                            titleChildren: N,
                            children: O,
                            headingRef: P,
                            coverContainerClassName: E,
                            headingVariant: B = 'h3',
                            withDescriptionWidthLimit: U = !0,
                            isShimmerVisible: w,
                            isShimmerActive: D,
                            withCover: M,
                            withDescription: H,
                            forwardRef: z,
                            shimmerCoverClassName: F,
                            shouldSendAnalyticsOnLoaded: K,
                            ...Y
                        } = e,
                        V = (0, _.f)(),
                        W = (0, s.useRef)(null),
                        $ = i || M,
                        X = f || H,
                        G = (0, s.useCallback)(() => {
                            W.current && 'focus' in W.current && W.current.focus();
                        }, []),
                        q = (0, v.N)(),
                        Q = (0, s.useCallback)(() => {
                            R ? R() : q({ to: l.AppScreen.Link });
                        }, [q, R]);
                    (0, s.useEffect)(() => {
                        K && V();
                    }, [K, V]);
                    let Z = (0, s.useMemo)(
                            () =>
                                k && x && j
                                    ? (0, r.jsxs)(p.N, {
                                          className: h().title,
                                          containerClassName: h().linkContainer,
                                          textClassName: h().linkText,
                                          icon: (0, r.jsx)(n.I, { className: h().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: x,
                                          onClick: Q,
                                          'data-test-id': o.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, r.jsx)(m.DZ, {
                                                  id: C,
                                                  className: (0, a.$)(h().heading, b),
                                                  variant: B,
                                                  size: L,
                                                  weight: 'bold',
                                                  lineClamp: g,
                                                  ref: P,
                                                  children: k,
                                              }),
                                              N,
                                          ],
                                      })
                                    : (0, r.jsxs)('div', {
                                          className: h().title,
                                          children: [
                                              (0, r.jsx)(m.DZ, {
                                                  id: C,
                                                  className: (0, a.$)(h().heading, b, { [h().heading_notAvailable]: !j }),
                                                  variant: B,
                                                  size: L,
                                                  weight: 'bold',
                                                  lineClamp: g,
                                                  ref: P,
                                                  'data-test-id': o.S7.BLOCK_HEADER_TITLE,
                                                  children: k,
                                              }),
                                              N,
                                          ],
                                      }),
                            [j, Q, P, B, C, k, b, g, L, x, N],
                        ),
                        J = (0, s.useMemo)(() => (H && w ? (0, r.jsx)(u.W, { isActive: D, className: h().shimmerDescription }) : f), [H, w, f, D]),
                        ee = (0, s.useMemo)(
                            () =>
                                M && w
                                    ? (0, r.jsx)(u.W, { isActive: D, className: (0, a.$)(h().shimmerCover, F), radius: 's' })
                                    : (0, r.jsx)(c._V, {
                                          src: i,
                                          fallbackIconVariant: I,
                                          style: { backgroundColor: T },
                                          className: h().cover,
                                          ref: W,
                                          onClick: G,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': o.S7.BLOCK_HEADER_COVER,
                                      }),
                            [T, i, I, G, D, w, F, M],
                        );
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(h().root, t),
                        ref: z,
                        ...Y,
                        'data-test-id': o.S7.BLOCK_HEADER,
                        children: [
                            (0, r.jsxs)('div', {
                                className: h().start,
                                children: [
                                    $ && (0, r.jsx)(d.t, { radius: y, className: (0, a.$)(h().coverContainer, E), children: ee }),
                                    (0, r.jsxs)('div', {
                                        className: h().textContainer,
                                        children: [
                                            A,
                                            Z,
                                            X &&
                                                (0, r.jsx)(m.HL, {
                                                    id: ''.concat(C, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: U ? 2 : void 0,
                                                    className: (0, a.$)(h().description, { [h().description_widthLimit]: U }),
                                                    'data-test-id': o.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            S || O,
                        ],
                    });
                },
                k = (0, s.forwardRef)((e, t) => (0, r.jsx)(A, { forwardRef: t, ...e }));
        },
        21971: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Q });
            var r = i(25839),
                a = i(88204),
                s = i(39004),
                l = i(36619),
                o = i(61493),
                n = i(22939),
                c = i(71035),
                d = i(66738),
                u = i(10820),
                m = i(33660),
                _ = i(74631),
                v = i(31860),
                p = i(91149),
                C = i(92942),
                h = i(27954),
                A = i(57549),
                k = i(86869),
                f = i(69084),
                x = i(4254),
                S = i(51790),
                L = i(6323),
                T = i(24596),
                y = i.n(T);
            let b = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: l } = e,
                    { formatMessage: o } = (0, s.A)(),
                    n = o(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(S.$, {
                    closeToast: l,
                    message: (0, r.jsxs)('div', {
                        className: y().message,
                        children: [
                            (0, r.jsx)(f.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': n }) }),
                            (0, r.jsx)(k.t, {
                                className: y().cover,
                                radius: 'round',
                                children: (0, r.jsx)(L.B, { className: y().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(x.HL, { className: y().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: n }),
                        ],
                    }),
                });
            };
            var g = i(7361),
                I = i(90613),
                j = i(3210),
                R = i(11609),
                N = i(79367),
                O = i(40110),
                P = i(20258),
                E = i(34159),
                B = i(30290),
                U = i(29872),
                w = i(56120),
                D = i(87201),
                M = i(83014),
                H = i(44806),
                z = i(55491),
                F = i(44851),
                K = i(14240),
                Y = i(56615),
                V = i(16386),
                W = i(67303),
                $ = i(74682),
                X = i(59043),
                G = i(2144),
                q = i(6304);
            let Q = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: k, onOpenChange: f, open: x, ...S } = e,
                    { shouldShowBuySubscriptionModal: L, showBuySubscriptionModal: T } = (0, U.q)(),
                    {
                        settings: { isMobile: y },
                        modals: { artistAboutModal: Q },
                        trailer: Z,
                        user: J,
                        experiments: ee,
                    } = (0, h.g)(),
                    et = (0, I.A)(k),
                    ei = (0, g.K)(k),
                    er = ((e) => {
                        let { user: t } = (0, h.g)(),
                            { notify: i } = (0, C.l)(),
                            [a, l] = (0, _.useState)(!1),
                            { formatMessage: o } = (0, s.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(A.h, { error: o({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: p.u.ERROR });
                            if (a) return;
                            let s = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            l(!0);
                            let n = await e.toggleDislike();
                            (l(!1),
                                n === v.f.OK
                                    ? i((0, r.jsx)(b, { coverUri: s.coverUri, title: s.name, isDisliked: s.isDisliked }), { containerId: p.u.INFO })
                                    : i((0, r.jsx)(A.h, { error: o({ id: 'error-messages.error-during-action' }) }), { containerId: p.u.ERROR }));
                        });
                    })(k),
                    ea = (0, E.F)(),
                    es = ''.concat(O.U.ARTIST, '-').concat(null == k ? void 0 : k.id),
                    { formatMessage: el } = (0, s.A)(),
                    { utmLink: eo } = (0, B.f)({ blockId: O.U.ARTIST, contextType: n.K.Artist, contextId: null == k ? void 0 : k.id }),
                    { shareLink: en, pathname: ec } = (0, K.b)('/artist/:artistId', { params: { artistId: null != (i = null == k ? void 0 : k.id) ? i : '' } }),
                    ed = (0, j.A)({ entityVariant: M.D.ARTIST, urlParams: { id: null == k ? void 0 : k.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, D.B)({
                        seeds: null != (a = null == k ? void 0 : k.seeds) ? a : [],
                        pageIdForFrom: P._Q.RADIO,
                        blockIdForFrom: es,
                        parentContextId: null == k ? void 0 : k.id,
                    }),
                    e_ = (0, N.P)(),
                    ev = el((null == k ? void 0 : k.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ep = (0, c.c)(() => {
                        if (L && J.isAuthorized) return void T();
                        eu || em();
                    }),
                    eC = (0, c.c)(() => {
                        if (!e_()) {
                            if (L) return void T();
                            (null == k ? void 0 : k.id) && (Z.setUtmLink(eo), Z.openArtistTrailer(k.id), ea(l.DomainObjectType.Artist, k.id));
                        }
                    }),
                    eh = (0, c.c)(() => {
                        Q.open(null == k ? void 0 : k.id);
                    });
                (0, w.N)(x);
                let eA = { variant: z.Y.ARTIST, id: null == k ? void 0 : k.id, title: null == k ? void 0 : k.name, path: ec },
                    ek = ee.checkExperiment(H.z.WebEditorsFeatures, 'on'),
                    ef = null == k || null == (t = k.trailer) ? void 0 : t.isAvailable,
                    ex = ee.checkExperiment(H.z.WebNextArtistInfo, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: y,
                    offsetOptions: 10,
                    open: x,
                    onOpenChange: f,
                    ariaLabel: el({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: o.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...S,
                    children: [
                        ek && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(R.d, { entityVariant: M.D.ARTIST, adminUrl: ed }) }),
                        !y && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(W.L, { onClick: et, isPinned: null == k ? void 0 : k.isPinned }) }),
                        (0, r.jsx)(q.WithOffline, {
                            fallback: (0, r.jsx)(V.T, {
                                onClick: ei,
                                isLiked: null == k ? void 0 : k.isLiked,
                                disabled: !J.isAuthorized || !(null == k ? void 0 : k.isAvailable),
                            }),
                        }),
                        ef && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(X.N, { onClick: eC }) }),
                        (0, r.jsx)(q.WithOffline, {
                            fallback: (0, r.jsx)(G.C, { onClick: ep, disabled: !(null == k ? void 0 : k.isAvailable), variant: F.I.ARTIST, onOpenMenuChange: f }),
                        }),
                        (0, r.jsx)($.H, { disabled: !k, shareLink: en, entityMeta: eA }),
                        ex &&
                            (0, r.jsx)(q.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: eh,
                                    icon: (0, r.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': o.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ev,
                                }),
                            }),
                        (0, r.jsx)(q.WithOffline, {
                            fallback: (0, r.jsx)(Y.D, { onClick: er, isDisliked: null == k ? void 0 : k.isDisliked, disabled: !(null == k ? void 0 : k.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        22413: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => s, TF: () => o, hZ: () => l });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, r = arguments.length; i < r; i++)
                            for (var a in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e;
                    }).apply(this, arguments);
            };
            function a(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function s(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], r = 0; r < i.length; r++) {
                        var a = i[r].split('='),
                            s = a.slice(1).join('=');
                        '"' === s[0] && (s = s.slice(1, -1));
                        try {
                            t[decodeURIComponent(a[0])] = s.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function l(e, t, i) {
                var s;
                document.cookie =
                    ((s = r({ path: '/' }, i)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                a('Expires', e.expires ? e.expires.toUTCString() : '') +
                                a('Domain', e.domain) +
                                a('Path', e.path) +
                                a('Secure', e.secure) +
                                a('SameSite', e.sameSite)
                            );
                        })(s));
            }
            function o(e, t) {
                l(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        24596: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        27892: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var r = i(25839),
                a = i(35015),
                s = i(10546);
            let l = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(s.k, {
                    closeToast: i,
                    entityVariant: a.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        37922: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        41459: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => s });
            var r = i(74631),
                a = i(39004);
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
        41707: (e, t, i) => {
            'use strict';
            var pulseSyncPlaylistDownloadIcons = i(66738);
            i.d(t, { B: () => J });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                l = i(74631),
                o = i(39004),
                n = i(36619),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                m = i(49656),
                _ = i(51246),
                v = i(66738),
                p = i(86869),
                C = i(4254),
                h = i(4331),
                A = i(62948),
                k = i(1134),
                f = i(79367),
                x = i(29481),
                S = i(47009),
                L = i(34159),
                T = i(52512),
                y = i(30290),
                b = i(61561),
                g = i(85686),
                I = i(85743),
                j = i(50209),
                R = i(27954),
                N = i(74760),
                O = i(6323),
                P = i(64720),
                E = i(97522),
                B = i(41580),
                U = i(49438),
                w = i(71996),
                D = i(78437),
                M = i(41459),
                H = i(10820),
                z = i(3210),
                F = i(11609),
                K = i(29872),
                Y = i(56120),
                V = i(83014),
                W = i(44806),
                $ = i(16386),
                X = i(67303),
                G = i(59043);
            let q = (0, s.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: a, open: s, ...l } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: m } = (0, K.q)(),
                    {
                        experiments: _,
                        settings: { isMobile: v },
                        trailer: p,
                        user: C,
                    } = (0, R.g)(),
                    h = (0, A.K)(i),
                    x = (0, k.A)(i),
                    S = (0, L.F)(),
                    { formatMessage: T } = (0, o.A)(),
                    y = (0, f.P)(),
                    b = _.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    g = (0, z.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, Y.N)(s);
                let I = (0, u.c)(() => {
                    if (d) return void m();
                    y() || (p.openPlaylistTrailer(i.id), S(n.DomainObjectType.Playlist, i.id));
                });
                return (0, r.jsxs)(H.W1, {
                    title: i.title,
                    onOpenChange: a,
                    open: s,
                    offsetOptions: 10,
                    isMobile: v,
                    ariaLabel: T({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...l,
                    children: [
                        b && (0, r.jsx)(F.d, { entityVariant: V.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : g }),
                        !v && (0, r.jsx)(X.L, { onClick: x, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)($.T, { onClick: h, isLiked: i.isLiked, disabled: !C.isAuthorized }),
                        (i.tracksCount ?? 1) > 0 &&
                            (0, r.jsx)(H.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, r.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)(G.N, { onClick: I, disabled: !i.isAvailable }),
                    ],
                });
            });
            var Q = i(15787),
                Z = i.n(Q);
            let J = (0, s.PA)((e) => {
                let { className: t, playlist: i, children: s, contentLinesCount: H, customDescription: z, onCoverMouseDown: F } = e,
                    { ref: K, intersectionPropertyId: Y } = (0, T.n)(),
                    {
                        trailer: V,
                        user: W,
                        paywall: { modal: $ },
                    } = (0, R.g)(),
                    { from: X, utmLink: G } = (0, y.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: Q } = (0, o.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, I.z)(),
                    [ei, er] = (0, l.useState)(!1),
                    [ea, es] = (0, l.useState)(!1),
                    [el, eo] = (0, l.useState)(!1),
                    en = (0, M.r)(i),
                    ec = (0, A.K)(i),
                    ed = (0, k.A)(i),
                    eu = (0, x.N)(),
                    em = (0, S.b)(),
                    e_ = (0, g.Z)(i.url),
                    ev = (0, L.F)(),
                    ep = (0, f.P)(),
                    eC = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        (V.setUtmLink(G), V.openPlaylistTrailer(i.id), ev(n.DomainObjectType.Playlist, i.id));
                    }),
                    [eh, eA] = (0, l.useState)(!1),
                    { isPlaying: ek, togglePlay: ef } = (0, j.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: X, utmLink: G }, loadContextMeta: !0 },
                    }),
                    ex = (0, u.c)(() => {
                        (eu({ to: n.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eS = (0, u.c)((e) => {
                        (ex(), e_(e));
                    }),
                    eL = (0, b.N)(),
                    eT = (0, u.c)(() => {
                        if (!ep()) {
                            if (eL) return void $.open();
                            (ei || ek || (er(!0), null == et || et()), ef(), em(!ek));
                        }
                    }),
                    ey = (0, u.c)(() => {
                        (ea || i.isLiked || (es(!0), null == J || J()), ec());
                    }),
                    eb = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eg = (0, u.c)((e) => {
                        (eo(e), eA(e));
                    }),
                    eI = (0, l.useMemo)(() => {
                        var e;
                        return z
                            ? (0, r.jsx)(C.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: z }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    h.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [z, i]),
                    ej = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                P.c,
                                {
                                    className: (0, a.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: ey,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !W.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eR = (0, l.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                D.n,
                                {
                                    children: (0, r.jsx)(
                                        w.k,
                                        { className: (0, a.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eC },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eC, i]),
                    eN = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(
                                B.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, a.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eO = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(p.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eS,
                                    onMouseDown: F,
                                    children: [
                                        (0, r.jsx)(O.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: en,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(_.hg, {
                                            isVisible: el || eh,
                                            className: Z().controls,
                                            playControl: (0, r.jsx)(
                                                U.D,
                                                {
                                                    className: (0, a.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eT,
                                                    isPlaying: ek,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: ej,
                                            menuControl: (0, r.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eg,
                                                    open: el,
                                                    onClick: eb,
                                                    className: (0, a.$)(Z().menuButton, Z().control),
                                                    icon: (0, r.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eN,
                                            trailerControl: eR,
                                        }),
                                    ],
                                }),
                            }),
                        [eS, F, i, en, el, eh, eT, ek, ej, eg, eb, eN, eR],
                    ),
                    eP = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(_.MN, {
                    ref: K,
                    'aria-label': en,
                    className: (0, a.$)(Z().root, t),
                    title: (0, r.jsx)(C.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(E.N, { className: Z().titleLink, href: i.url, tabIndex: -1, onClick: ex, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(E.N, { className: Z().srTitleLink, href: i.url, onClick: ex, children: i.title }),
                    'data-intersection-property-id': Y,
                    contentLinesCount: H,
                    view: eO,
                    description: eI,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eP &&
                            (0, r.jsx)(N.x, {
                                ariaLabel: Q({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        s,
                    ],
                });
            });
        },
        42190: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var r = i(25839),
                a = i(35015),
                s = i(3163);
            let l = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(s.O, {
                    entityVariant: a.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        42853: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => a });
            var r = i(40110),
                a = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(r.U.RUP, '_').concat(r.U.MAIN, '-').concat(r.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(r.U.DISCOGRAPHY, '_').concat(r.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(r.U.ALBUMS, '_').concat(r.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(r.U.COMPILATIONS, '_').concat(r.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(r.U.PLAYLISTS, '_').concat(r.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(r.U.ARTISTS, '_').concat(r.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(r.U.CLIPS, '_').concat(r.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(r.U.DISCOVERY, '_').concat(r.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(r.U.PLAYLISTS, '_').concat(r.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(r.U.SEARCH, '_').concat(r.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(r.U.PLAYLISTS, '_').concat(r.U.SIMILAR, '_').concat(r.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(r.U.SEARCH, '_').concat(r.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(r.U.SEARCH, '_').concat(r.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        43464: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => a });
            let r = new Set(Object.values(i(85705).M)),
                a = (e) => 'string' == typeof e && r.has(e);
        },
        45329: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => a });
            var r = i(47127);
            let a = (e) => {
                var t;
                return e
                    ? {
                          playlistUuid: e.uuid,
                          available: e.isAvailable,
                          uid: e.uid,
                          kind: e.kind,
                          title: e.title || '',
                          revision: e.revision || 0,
                          snapshot: 0,
                          trackCount: e.tracksCount || 0,
                          visibility: e.visibility || 'public',
                          collective: !1,
                          created: '',
                          modified: '',
                          isBanner: !1,
                          isPremiere: !1,
                          durationMs: 0,
                          cover: { uri: e.coverUri || '', type: r.Q.PIC, prefix: '', custom: !1 },
                          ogImage: e.coverUri || '',
                          tags: [],
                          likesCount: e.likesCount || 0,
                          generatedPlaylistType: e.generatedPlaylistType || '',
                          trailer: { available: !!(null == (t = e.trailer) ? void 0 : t.isAvailable) },
                      }
                    : {
                          playlistUuid: '',
                          available: !0,
                          uid: 0,
                          kind: 0,
                          title: '',
                          revision: 0,
                          snapshot: 0,
                          trackCount: 0,
                          visibility: 'public',
                          collective: !1,
                          created: '',
                          modified: '',
                          isBanner: !1,
                          isPremiere: !1,
                          durationMs: 0,
                          cover: { uri: '', type: r.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          tags: [],
                          likesCount: 0,
                          generatedPlaylistType: '',
                          trailer: { available: !0 },
                      };
            };
        },
        52697: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 2831));
        },
        56615: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var r = i(25839),
                a = i(88204),
                s = i(8487),
                l = i(61493),
                o = i(66738),
                n = i(10820),
                c = i(27954);
            let d = (0, a.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: a, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, r.jsx)(n.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, r.jsx)(o.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: a || !u.isAuthorized,
                    'data-test-id': l.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, r.jsx)(s.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        57138: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => l });
            var r = i(25839),
                a = i(74631),
                s = i(14482);
            let l = (e) => {
                let {
                        blockId: t,
                        blockType: i,
                        blockIdForFrom: l,
                        blockPosX: o,
                        blockPosY: n,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: m,
                        displayReasonId: _,
                    } = e,
                    v = (0, a.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: i,
                            blockIdForFrom: l,
                            blockPosX: o,
                            blockPosY: n,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: _,
                        }),
                        [t, i, l, o, n, c, d, u, _],
                    );
                return (0, r.jsx)(s.p.Provider, { value: v, children: m });
            };
        },
        61399: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            var r = i(43464);
            let a = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, r.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        61777: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => A });
            var r = i(74631),
                a = i(67379),
                s = i(17850),
                l = i(59450),
                o = i(49656),
                n = i(84e3),
                c = i(58069),
                d = i(20258),
                u = i(26742),
                m = i(25195),
                _ = i(37314),
                v = i(97952),
                p = i(10764),
                C = i(72594);
            let h = [
                    d._Q.HOME,
                    d._Q.LANDING,
                    d._Q.NON_MUSIC,
                    d._Q.OWN_COLLECTION,
                    d._Q.SEARCH,
                    d._Q.ARTIST,
                    d._Q.CONCERTS,
                    d._Q.CONCERT,
                    d._Q.ALBUM,
                    d._Q.PLAYLIST,
                    d._Q.SLIDES_SCREEN,
                    d._Q.PROMOLANDING_ALBUM,
                    d._Q.WAVE_LANDING_SCREEN,
                ],
                A = () => {
                    let e = (0, r.useRef)(!1),
                        t = (0, l.st)(),
                        i = (0, n.U)(),
                        { hash: A } = (0, l.gf)(),
                        { pageId: k } = (0, v.$)(),
                        { tabId: f, tabPos: x, isTabSelectedByDefault: S } = (0, C.R)(),
                        { offsetBlockPosY: L } = (0, m.u)(),
                        { blockId: T, blockType: y, blockPosX: b, blockPosY: g, mainObjectType: I, mainObjectId: j, objectsCount: R } = (0, u.N)(),
                        { filterKey: N, filterValue: O, filterPos: P } = (0, _.G)(),
                        { skeleton: E } = (0, p.b)(),
                        B = (0, o.L)(() => (void 0 !== L && void 0 !== g ? L + g : g));
                    return (0, r.useCallback)(() => {
                        if (!t || !k || !d.xK.includes(k) || !h.includes(k) || e.current) return;
                        let r = { hash: A, pageId: c.F[k], entityType: y, entityId: T, entityPosX: b, entityPosY: B, objectsCount: R };
                        (void 0 !== N && ((r.filterKey = N), (r.filterValue = O), (r.filterPos = P)),
                            d.qG.includes(k) && ((r.tabId = f), (r.tabPos = x), (r.isTabSelectedByDefault = S)),
                            E && (r.skeletonId = E),
                            j && I && ((r.mainObjectType = I), (r.mainObjectId = j)));
                        let l = (0, a.F)({ params: r, logger: i, context: 'useSendEventOnBlockLoaded' });
                        l && ((0, s.uY)(t.evgenInstance, l), (e.current = !0));
                    }, [t, k, A, y, T, b, B, N, O, P, R, E, j, I, i, f, x, S]);
                };
        },
        62948: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var r = i(25839),
                a = i(33660),
                s = i(74631),
                l = i(39004),
                o = i(31860),
                n = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                m = i(42190);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, v] = (0, s.useState)(!1),
                    { formatMessage: p } = (0, l.A)();
                return (0, s.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (_) return;
                    let s = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                    v(!0);
                    let l = await e.toggleLike();
                    (v(!1),
                        l === o.f.OK
                            ? i((0, r.jsx)(m.T, { playlist: s }), { containerId: n.u.INFO })
                            : i((0, r.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [t.isAuthorized, _, e, p, i]);
            };
        },
        63149: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => o });
            var r = i(25839),
                a = i(53712),
                s = i(35015),
                l = i(3163);
            let o = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(l.O, {
                    closeToast: i,
                    entityVariant: s.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: a.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        66284: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => k });
            var r = i(25839),
                a = i(82298),
                s = i(74631),
                l = i(89288),
                o = i(36619),
                n = i(49656),
                c = i(5365),
                d = i(23976),
                u = i(26742),
                m = i(95314),
                _ = i(18412),
                v = i(80986),
                p = i(95388),
                C = i(99024),
                h = i.n(C);
            let A = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: i,
                            isShimmerVisible: C,
                            isShimmerActive: A,
                            isShimmerWithSubcover: k,
                            isShimmerCentered: f,
                            isShimmerRounded: x,
                            title: S,
                            description: L,
                            coverUrl: T,
                            viewAllActionLink: y,
                            titleChildren: b,
                            headerChildren: g,
                            children: I,
                            className: j,
                            containerClassName: R,
                            headerClassName: N,
                            itemClassName: O,
                            showHeaderShimmer: P = !1,
                            showShimmerInfo: E = !0,
                            showControls: B = !0,
                            headingRef: U,
                            headingVariant: w,
                            customShimmer: D,
                            ...M
                        } = e,
                        H = (0, s.useId)(),
                        z = (0, s.useRef)(null),
                        { objectsCount: F } = (0, u.N)(),
                        K = (0, s.useMemo)(
                            () =>
                                P && C
                                    ? (0, r.jsx)('div', { className: N, children: (0, r.jsx)(d.W, { isActive: A, className: h().shimmerTitle, radius: 'l' }) })
                                    : S || L || b || g
                                      ? (0, r.jsx)(m.B, {
                                            objectType: o.DomainObjectType.Shortcut,
                                            objectId: String(y),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != F ? F : 0,
                                            children: (0, r.jsx)(_.T, {
                                                className: N,
                                                labeledForId: H,
                                                title: S,
                                                description: L,
                                                coverUrl: T,
                                                viewAllActionLink: y,
                                                controls: B && (0, r.jsx)(v.X, { className: h().controls, carouselRef: z }),
                                                headingRef: U,
                                                headingVariant: w,
                                                withDescription: !!L,
                                                titleChildren: b,
                                                children: g,
                                            }),
                                        })
                                      : void 0,
                            [T, L, N, U, w, H, A, C, F, B, P, S, b, g, y],
                        ),
                        Y = (0, n.L)(() => D || (0, p.k)({ className: i, isActive: A, withInfo: E, withSubcover: k, centered: f, round: x }));
                    return (0, r.jsxs)('section', {
                        ref: t,
                        className: (0, a.$)(h().root, j),
                        ...(0, l.OZ)(M),
                        children: [
                            K,
                            (0, r.jsx)(c.F, {
                                className: R,
                                ref: z,
                                itemClassName: (0, a.$)(h().item, h().important, O),
                                'aria-labelledby': ''.concat(H, ' ').concat(H, '-description'),
                                children: C ? Y : I,
                            }),
                        ],
                    });
                },
                k = (0, s.forwardRef)((e, t) => (0, r.jsx)(A, { forwardRef: t, ...e }));
        },
        73208: (e) => {
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
        75568: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            var r = i(47127),
                a = i(61399);
            let s = (e) => {
                var t, i, s, l, o;
                return e
                    ? {
                          id: e.id,
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, a.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: r.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, a.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (i = e.counts) ? void 0 : i.albums) || 0,
                              alsoAlbums: (null == (s = e.counts) ? void 0 : s.compilations) || 0,
                              tracks: (null == (l = e.counts) ? void 0 : l.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (o = e.trailer) ? void 0 : o.isAvailable) },
                          hasPromotions: !1,
                          genres: [],
                          links: [],
                          ticketsAvailable: !1,
                          ratings: { week: 0, month: 0, day: 0 },
                          composer: e.isComposer || !1,
                          various: e.various || !1,
                      }
                    : {
                          id: '',
                          name: '',
                          various: !1,
                          composer: !1,
                          decomposed: [],
                          ogImage: '',
                          hasPromotions: !1,
                          genres: [],
                          ticketsAvailable: !1,
                          links: [],
                          ratings: { week: 0, month: 0, day: 0 },
                          counts: { directAlbums: 0, alsoAlbums: 0, tracks: 0, alsoTracks: 0 },
                          available: !1,
                          disclaimers: [],
                      };
            };
        },
        77635: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => u });
            var r = i(25839),
                a = i(74631),
                s = i(36619),
                l = i(61777),
                o = i(95314),
                n = i(66284),
                c = i(76939);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            albums: _,
                            className: v,
                            containerClassName: p,
                            headerClassName: C,
                            viewAllActionLink: h,
                            headingRef: A,
                            headingVariant: k,
                            shouldSendAnalyticsOnLoaded: f,
                            ...x
                        } = e,
                        S = (0, l.f)();
                    return (
                        (0, a.useEffect)(() => {
                            f && S();
                        }, [S, f]),
                        (0, r.jsx)(n.O, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: v,
                            headerClassName: C,
                            containerClassName: p,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: h,
                            headingRef: A,
                            headingVariant: k,
                            ...x,
                            children:
                                null == _
                                    ? void 0
                                    : _.map((e, t) =>
                                          (0, r.jsx)(
                                              o.B,
                                              {
                                                  objectType: s.DomainObjectType.Album,
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
        80477: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var r = i(25839),
                a = i(35015),
                s = i(10546);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(s.k, {
                    closeToast: i,
                    entityVariant: a.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        80986: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => m });
            var r = i(25839),
                a = i(82298),
                s = i(74631),
                l = i(61493),
                o = i(9911),
                n = i(4071),
                c = i(66738),
                d = i(37922),
                u = i.n(d);
            let m = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: i,
                        forwardControlClassName: d,
                        className: m,
                        withSecondaryColor: _,
                        buttonSize: v = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: C, swipeForward: h, shouldBackwardButtonBeDisabled: A, shouldForwardButtonBeDisabled: k, shouldHideControls: f } = (0, o.Y)(t),
                    x = (0, s.useCallback)(
                        (e) => {
                            (C(), e.stopPropagation());
                        },
                        [C],
                    ),
                    S = (0, s.useCallback)(
                        (e) => {
                            (h(), e.stopPropagation());
                        },
                        [h],
                    );
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(u().root, m),
                    'data-test-id': l.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, r.jsx)(n.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(u().control, i, { [u().control_hidden]: f, [u().control_withSecondaryColor]: _ }),
                            onClick: x,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: A,
                            'data-test-id': l.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, r.jsx)(n.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(u().control, d, { [u().control_hidden]: f, [u().control_withSecondaryColor]: _ }),
                            onClick: S,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: k,
                            'data-test-id': l.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        84058: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => z });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                l = i(74631),
                o = i(39004),
                n = i(36619),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                m = i(49656),
                _ = i(51246),
                v = i(66738),
                p = i(86869),
                C = i(4254),
                h = i(1797),
                A = i(7361),
                k = i(90613),
                f = i(79367),
                x = i(29481),
                S = i(47009),
                L = i(34159),
                T = i(52512),
                y = i(30290),
                b = i(61561),
                g = i(85686),
                I = i(85743),
                j = i(50209),
                R = i(27954),
                N = i(6323),
                O = i(64720),
                P = i(97522),
                E = i(41580),
                B = i(49438),
                U = i(71996),
                w = i(78437),
                D = i(21971),
                M = i(13936),
                H = i.n(M);
            let z = (0, s.PA)((e) => {
                let { artist: t, className: i, children: s, contentLinesCount: M, topTitleElement: z, bottomTitleElement: F } = e,
                    { ref: K, intersectionPropertyId: Y } = (0, T.n)(),
                    {
                        trailer: V,
                        user: W,
                        paywall: { modal: $ },
                    } = (0, R.g)(),
                    { from: X, utmLink: G } = (0, y.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: q } = (0, o.A)(),
                    [Q, Z] = (0, l.useState)(!1),
                    [J, ee] = (0, l.useState)(!1),
                    [et, ei] = (0, l.useState)(!1),
                    { sendLikeSearchFeedback: er, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: es } = (0, I.z)(),
                    el = (0, x.N)(),
                    eo = (0, S.b)(),
                    en = (0, A.K)(t),
                    ec = (0, k.A)(t),
                    { id: ed, name: eu, coverUri: em, isLiked: e_ } = t,
                    ev = (0, g.Z)(t.url),
                    [ep, eC] = (0, l.useState)(!1),
                    eh = (0, L.F)(),
                    eA = (0, f.P)(),
                    ek = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eA())) return void e.preventDefault();
                        (V.openArtistTrailer(t.id), eh(n.DomainObjectType.Artist, t.id));
                    }),
                    ef = (0, l.useMemo)(() => {
                        let e = q({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = e_ ? q({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, e_, q]),
                    { isPlaying: ex, togglePlay: eS } = (0, j.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: X, utmLink: G }, loadContextMeta: !0 },
                    }),
                    eL = (0, h.S)({ artist: t, callback: ev }),
                    eT = (0, h.S)({ artist: t, callback: eS }),
                    ey = (0, u.c)((e) => {
                        (null == ea || ea(), el({ to: n.AppScreen.ArtistScreen }), eL(e));
                    }),
                    eb = (0, b.N)(),
                    eg = (0, u.c)(() => {
                        if (!eA()) {
                            if (eb) return void $.open();
                            (Q || ex || (Z(!0), null == es || es()), eT(), eo(!ex));
                        }
                    }),
                    eI = (0, u.c)(() => {
                        (J || e_ || (ee(!0), null == er || er()), en());
                    }),
                    ej = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eR = (0, u.c)((e) => {
                        (ei(e), eC(e));
                    }),
                    eN = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: eR,
                                    open: et,
                                    onClick: ej,
                                    className: (0, a.$)(H().menuButton, H().control),
                                    size: 's',
                                    icon: (0, r.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, ej, eR, et],
                    ),
                    eO = (0, l.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                w.n,
                                {
                                    children: (0, r.jsx)(U.k, {
                                        className: (0, a.$)(H().trailerButton, H().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ek,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ek]),
                    eP = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(
                                E.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, a.$)(H().pinButton, H().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eE = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                _.hg,
                                {
                                    isVisible: et || ep,
                                    className: H().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        B.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(H().playButton, H().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eg,
                                            isPlaying: ex,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        O.c,
                                        {
                                            className: (0, a.$)(H().likeButton, H().control),
                                            isLiked: e_,
                                            onClick: eI,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !W.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eN,
                                    pinControl: eP,
                                    trailerControl: eO,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eB = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(p.t, {
                                className: H().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: H().coverBlock,
                                    onClick: ey,
                                    children: [
                                        (0, r.jsx)(N.B, {
                                            className: H().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ef,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eE,
                                    ],
                                }),
                            }),
                        [ey, em, ef, t.isAvailable, eE],
                    );
                return (0, r.jsx)(_.MN, {
                    ref: K,
                    className: (0, a.$)(H().root, i),
                    textPosition: 'center',
                    'aria-label': ef,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            z,
                            (0, r.jsx)(C.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, r.jsx)(P.N, {
                                    className: H().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': ef,
                                    onClick: ey,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            F,
                        ],
                    }),
                    srTitle: (0, r.jsx)(P.N, { className: H().srTitleLink, href: t.url, onClick: ey, children: ef }),
                    'data-intersection-property-id': Y,
                    contentLinesCount: M,
                    view: eB,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: s,
                });
            });
        },
        85705: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { M: () => r }),
                (function (e) {
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon'));
                })(r || (r = {})));
        },
        87219: (e) => {
            e.exports = {
                root: 'GenrePage_root___kL_v',
                content: 'GenrePage_content__NRwAJ',
                shimmerTitle: 'GenrePage_shimmerTitle__hrgjK',
                carouselBlocks: 'GenrePage_carouselBlocks__kR63B',
                carouselBlock: 'GenrePage_carouselBlock__QCkpK',
                carouselBlockHeader: 'GenrePage_carouselBlockHeader__u12sn',
            };
        },
        88720: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            var r = i(75568);
            let a = (e) => {
                var t;
                if (!e)
                    return {
                        id: 0,
                        title: '',
                        availableForOptions: [],
                        availableForPremiumUsers: !0,
                        artists: [],
                        volumes: [],
                        ogImage: '',
                        availablePartially: !1,
                        trackCount: 0,
                        recent: !1,
                        veryImportant: !1,
                        labels: [],
                        metaType: '',
                        availableForMobile: !0,
                    };
                let i = (null == (t = e.artists) ? void 0 : t.map((e) => (0, r.N)(e))) || [];
                return {
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    coverUri: e.coverUri,
                    year: e.year,
                    version: e.version,
                    availableForOptions: e.availableForOptions || [],
                    availableForPremiumUsers: e.availableForPremiumUsers || !0,
                    artists: i,
                    volumes: [],
                    ogImage: e.coverUri || '',
                    availablePartially: !1,
                    trackCount: e.trackCount || 0,
                    recent: !1,
                    veryImportant: !1,
                    labels: [],
                    metaType: '',
                    availableForMobile: !0,
                };
            };
        },
        90613: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var r = i(25839),
                a = i(33660),
                s = i(74631),
                l = i(39004),
                o = i(91149),
                n = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(80477);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, n.l)(),
                    { formatMessage: m } = (0, l.A)(),
                    [_, v] = (0, s.useState)(!1);
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let s = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                    v(!0);
                    let l = await e.togglePin();
                    (v(!1),
                        l
                            ? i((0, r.jsx)(u.l, { artist: s }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, _, m, i]);
            };
        },
        91797: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => u });
            var r = i(25839),
                a = i(74631),
                s = i(36619),
                l = i(61777),
                o = i(95314),
                n = i(66284),
                c = i(41707);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            playlists: _,
                            containerClassName: v,
                            className: p,
                            headerClassName: C,
                            viewAllActionLink: h,
                            headingVariant: A,
                            shouldSendAnalyticsOnLoaded: k,
                            ...f
                        } = e,
                        x = (0, l.f)();
                    return (
                        (0, a.useEffect)(() => {
                            k && !i && x();
                        }, [i, x, k]),
                        (0, r.jsx)(n.O, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: p,
                            headerClassName: C,
                            containerClassName: v,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: h,
                            headingVariant: A,
                            ...f,
                            children:
                                null == _
                                    ? void 0
                                    : _.map((e, t) =>
                                          (0, r.jsx)(
                                              o.B,
                                              {
                                                  objectType: s.DomainObjectType.Playlist,
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
        95314: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => l });
            var r = i(25839),
                a = i(74631),
                s = i(66192);
            let l = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: l, objectPos: o, objectType: n, objectsCount: c, mainObjectId: d, mainObjectType: u, children: m } = e,
                    _ = (0, a.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: l, objectPos: o, objectType: n, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, i, l, o, n, c, d, u],
                    );
                return (0, r.jsx)(s.l.Provider, { value: _, children: m });
            };
        },
        95388: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => s });
            var r = i(25839),
                a = i(19412);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, i) => (0, r.jsx)(a.V, { ...e }, i));
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
                3349, 1676, 7349, 7339, 6749, 6287, 2121, 3472, 2616, 6706, 1311, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 4245, 3580, 3269, 4163,
                3246, 4517, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 5898, 8706, 4475, 5056, 7358,
            ],
            () => e((e.s = 52697)),
        ),
            (_N_E = e.O()));
    },
]);
