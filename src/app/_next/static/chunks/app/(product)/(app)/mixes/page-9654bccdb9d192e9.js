(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2307],
    {
        1698: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => s });
            var n = r(88800),
                i = r(37770);
            let s = (e) => {
                let {
                    isActive: t,
                    itemClassName: r,
                    round: s,
                    centered: a,
                    withInfo: o,
                    count: l = 10,
                    shimmerClassName: c,
                    linesCount: u,
                    'aria-label': d,
                    withSubcover: _,
                } = e;
                return Array.from(Array(l).keys()).map((e) =>
                    (0, n.jsx)(
                        i.V,
                        { isActive: t, linesCount: u, className: r, round: s, centered: a, withInfo: o, withSubcover: _, 'aria-label': d, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        4370: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => i });
            var n = r(67174);
            let i = {
                main: (0, n.u)('/'),
                chart: (0, n.u)('/chart'),
                chartPodcasts: (0, n.u)('/chart/podcasts'),
                collection: (0, n.u)('/collection'),
                collectionAlbums: (0, n.u)('/collection/albums'),
                collectionArtists: (0, n.u)('/collection/artists'),
                collectionClips: (0, n.u)('/collection/clips'),
                collectionDislikes: (0, n.u)('/collection/dislikes'),
                collectionKids: (0, n.u)('/collection/kids'),
                collectionKidsAlbums: (0, n.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, n.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, n.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, n.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, n.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, n.u)('/collection/multivibes'),
                collectionPlaylists: (0, n.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, n.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, n.u)('/collection/playlists/liked'),
                collectionShelf: (0, n.u)('/collection/shelf'),
                collectionShelfLiked: (0, n.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, n.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, n.u)('/collection/shelf/recently-played'),
                concerts: (0, n.u)('/concerts'),
                kids: (0, n.u)('/kids'),
                mixes: (0, n.u)('/mixes'),
                musicHistory: (0, n.u)('/music-history'),
                muzmarket: (0, n.u)('/muzmarket'),
                mymusic: (0, n.u)('/mymusic'),
                mymusicDownloadsTracks: (0, n.u)('/mymusic/downloads/tracks'),
                multivibe: (0, n.u)('/multivibe'),
                nonMusic: (0, n.u)('/non-music'),
                pay: (0, n.u)('/pay'),
                userSlides: (0, n.u)('/slides/user'),
                search: (0, n.u)('/search'),
                searchHistory: (0, n.u)('/search/history'),
                settings: (0, n.u)('/settings'),
                video: (0, n.u)('/video'),
            };
        },
        7420: (e) => {
            e.exports = {
                root: 'MixesPage_root__mp_Eq',
                items: 'MixesPage_items__dKLen',
                scrollableContent: 'MixesPage_scrollableContent__6xhZh',
                scrollableContainer: 'MixesPage_scrollableContainer__S0b76',
                container: 'MixesPage_container__1b_3H',
                shimmerContainer: 'MixesPage_shimmerContainer__su53n',
                footer: 'MixesPage_footer__jCcAN',
            };
        },
        7555: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => c });
            var n,
                i = r(53548),
                s = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (i && (i += ' '), (i += n));
                                            else for (r in t) t[r] && (i && (i += ' '), (i += r));
                                        return i;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => i }));
                        let i = n;
                    },
                    2095: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root: 'qaIScXjx1qyXuaIHXQIo',
                            root_radius_xs: 'wdE2qVRIlWUesuBfzCis',
                            root_radius_s: '_7gw1qGE6BeUAdSMbhRx',
                            root_radius_m: 'emVxQKB1wJc9FwuIBG8o',
                            root_radius_l: 'NFJAa_h_EAjwQVY7bU5J',
                            root_radius_xl: 'SRpgu5IgfEGM_VHllm_6',
                            root_radius_round: 'QIWoHHDozGGG5w2JYImt',
                            root_withShadow: 'gtfPudKIIbfkwmuOBzwI',
                            root_variant_default: 'ZcpulvHgF_wsgzB8Hye9',
                            root_variant_outline: 'kPFFrHHxF3SOjiETAE6Q',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var i = null;
                            if ((void 0 !== n && (i = '' + n), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var s in ((n = {}), t)) 'key' !== s && (n[s] = t[s]);
                            else n = t;
                            return { $$typeof: r, type: e, key: i, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    6009: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Paper = void 0));
                        let i = r(4377),
                            s = r(5881),
                            a = r(810),
                            o = n(r(2095)),
                            l = (e) => {
                                let { forwardRef: t, radius: r, variant: n = 'default', children: a, className: l, withShadow: c, style: u, ...d } = e;
                                return (0, i.jsx)('div', {
                                    className: (0, s.clsx)(
                                        o.default.root,
                                        o.default['root_radius_'.concat(r)],
                                        o.default['root_variant_'.concat(n)],
                                        { [o.default.root_withShadow]: c },
                                        l,
                                    ),
                                    style: u,
                                    ref: t,
                                    ...d,
                                    children: a,
                                });
                            };
                        t.Paper = (0, a.forwardRef)((e, t) => (0, i.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(i, 2));
                    },
                },
                a = {};
            function o(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var r = (a[e] = { exports: {} });
                return (s[e].call(r.exports, r, r.exports, o), r.exports);
            }
            ((o.d = (e, t) => {
                for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'U', { value: !0 }), (l.X = void 0));
                var e = o(6009);
                Object.defineProperty(l, 'X', {
                    enumerable: !0,
                    get: function () {
                        return e.Paper;
                    },
                });
            })();
            var c = l.X;
            l.U;
        },
        8840: (e, t, r) => {
            'use strict';
            r.d(t, { BL: () => u, Gv: () => l, L5: () => c });
            var n,
                i = r(53548),
                s = {
                    597: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let n = r(810),
                            { innerWidth: i = 0, innerHeight: s = 0 } = window;
                        function a(e) {
                            let { top: t, right: r, bottom: n, left: a } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= s) || (n >= 0 && n <= s)) && ((a >= 0 && a <= i) || (r >= 0 && r <= i));
                        }
                        function o(e) {
                            var t, r;
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, n)) ? r : e.attributes[0];
                        }
                        function l(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = a),
                            (t.getElementNameByDataAttribute = o),
                            (t.createIntersectionObserver = l),
                            (t.useIntersectionObserver = function (e, r, i) {
                                let [{ freezeOnceVisible: s, preflightCheck: c, ...u }, d = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, i],
                                    [_, m] = (0, n.useState)({}),
                                    g = (0, n.useRef)(new Set()),
                                    h = (0, n.useMemo)(
                                        () =>
                                            d
                                                ? null
                                                : l((e) => {
                                                      let t = o(e.target);
                                                      if (t && h) {
                                                          if (g.current.has(t)) return;
                                                          (m((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              s && e.isIntersecting && (g.current.add(t), h.unobserve(e.target)));
                                                      }
                                                  }, u),
                                        [d],
                                    );
                                return (
                                    (0, n.useLayoutEffect)(
                                        () => (
                                            h &&
                                                !d &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = a(e.current))) {
                                                            let t = o(e.current);
                                                            m((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || h.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                h && h.disconnect();
                                            }
                                        ),
                                        [d, h, e.length],
                                    ),
                                    _
                                );
                            }));
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(i, 2));
                    },
                },
                a = {},
                o = (function e(t) {
                    var r = a[t];
                    if (void 0 !== r) return r.exports;
                    var n = (a[t] = { exports: {} });
                    return (s[t](n, n.exports, e), n.exports);
                })(597);
            o.__esModule;
            var l = o.createIntersectionObserver;
            o.defaultOptions;
            var c = o.getElementNameByDataAttribute;
            o.isInViewportNow;
            var u = o.useIntersectionObserver;
        },
        9184: (e) => {
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
        9590: (e) => {
            e.exports = {
                root: 'EntityCardShimmer_root__Sh7ah',
                subcover: 'EntityCardShimmer_subcover__ESt3R',
                cover: 'EntityCardShimmer_cover__BXtjT',
                cover_round: 'EntityCardShimmer_cover_round__Ci3zW',
                cover_withSubcover: 'EntityCardShimmer_cover_withSubcover__v9l5y',
                infoContainer: 'EntityCardShimmer_infoContainer__22kYk',
                infoContainer_centered: 'EntityCardShimmer_infoContainer_centered__cxlPO',
                title: 'EntityCardShimmer_title__GQ2jX',
                title_withSubcover: 'EntityCardShimmer_title_withSubcover__lBHBC',
                content_linesCount_1: 'EntityCardShimmer_content_linesCount_1__JHlue',
                content_linesCount_2: 'EntityCardShimmer_content_linesCount_2__CMvO5',
                content_linesCount_3: 'EntityCardShimmer_content_linesCount_3__mPzav',
                content_linesCount_4: 'EntityCardShimmer_content_linesCount_4__8KtHO',
            };
        },
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
        13950: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => $ }));
            var n = r(88800),
                i = r(53548),
                s = r(58390),
                a = r(34961),
                o = r(53892),
                l = r(5120),
                c = r(89916);
            let u = (e) => ({ tag: e.tag, title: e.title, subGenres: (0, l.wg)((e.leaves || []).map((e) => ({ tag: e.tag, title: e.title }))) }),
                d = l.gK.model('GenreListItemSubGenreModel', { tag: l.gK.string, title: l.gK.string }),
                _ = l.gK.model('GenreListItemModel', { tag: l.gK.string, title: l.gK.string, subGenres: l.gK.array(d) });
            var m = r(74773),
                g = r(59497);
            let h = l.gK
                    .compose(
                        l.gK.model('GenresPageModel', { title: l.gK.maybeNull(l.gK.string), items: l.gK.array(_), errorStatusCode: l.gK.maybeNull(l.gK.number) }),
                        g.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === m.G.PENDING;
                        },
                        get isNotFound() {
                            let t = e.isResolved && 0 === e.items.length;
                            return e.errorStatusCode === c.X1.NOT_FOUND || t;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { landing3Resource: r, modelActionsLogger: n } = (0, l._$)(e);
                            if (e.loadingState !== m.G.PENDING)
                                try {
                                    e.loadingState = m.G.PENDING;
                                    let n = (yield r.getMetatags({})).trees.find((e) => e.navigationId === t);
                                    if (!n) {
                                        e.errorStatusCode = c.X1.NOT_FOUND;
                                        return;
                                    }
                                    ((e.title = n.title), (e.items = (0, l.wg)(n.leaves.map(u))), e.loadingState !== m.G.IDLE && (e.loadingState = m.G.RESOLVE));
                                } catch (t) {
                                    (n.error(t),
                                        t instanceof c.GX &&
                                            (t.statusCode === c.X1.NOT_FOUND || t.statusCode === c.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = c.X1.NOT_FOUND),
                                        e.loadingState !== m.G.IDLE && (e.loadingState = m.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = m.G.IDLE), (e.title = null), (e.items = (0, l.wg)([])), (e.errorStatusCode = null));
                        },
                    })),
                p = { title: null, loadingState: m.G.IDLE, items: [] },
                { pageStoreProvider: v } = (0, a.W)({ createStore: (e) => h.create(p, e), patchKey: o.n.GENRES });
            var f = r(84961),
                x = r(66719),
                y = r(29504),
                E = r(32596),
                S = r(69630),
                N = r(91292),
                b = r(25005),
                w = r.n(b);
            let j = (0, f.PA)((e) => {
                let { tag: t, title: r, subGenres: i } = e;
                return (0, n.jsxs)('div', {
                    className: w().root,
                    children: [
                        (0, n.jsx)(N.N, {
                            className: w().link,
                            href: '/genre/'.concat(t),
                            children: (0, n.jsx)(y.DZ, { variant: 'h2', size: 'm', lineClamp: 1, className: w().linkTitle, children: r }),
                        }),
                        i.length > 0 &&
                            (0, n.jsx)('div', {
                                className: w().list,
                                children: i.map((e) =>
                                    (0, n.jsx)(
                                        'div',
                                        {
                                            className: w().item,
                                            children: (0, n.jsx)(N.N, {
                                                className: w().link,
                                                href: '/genre/'.concat(e.tag),
                                                children: (0, n.jsx)(y.HL, { variant: 'span', size: 'l', lineClamp: 1, className: w().linkTitle, children: e.title }),
                                            }),
                                        },
                                        e.tag,
                                    ),
                                ),
                            }),
                    ],
                });
            });
            var C = r(46422),
                T = r(44230),
                A = r(37670),
                P = r(93317),
                O = r(65938),
                k = r.n(O);
            let I = (0, f.PA)((e) => {
                let { navigationId: t } = e,
                    r = (0, a.s)(o.n.GENRES),
                    { contentScrollRef: l, setContentScrollRef: c } = (0, T.g)(),
                    u = (0, C.W)();
                return (r.isNotFound && (0, s.notFound)(), (0, A.J)(r.isResolved), t && r.isNeededToLoad && (0, i.use)(r.getData(t)), r.isRejected)
                    ? (0, n.jsx)(E.SomethingWentWrong, {})
                    : (0, n.jsxs)(S.h, {
                          scrollElement: l,
                          outerTitle: r.title,
                          children: [
                              (0, n.jsx)(P.Y, {
                                  variant: P.V.TEXT,
                                  withForwardControl: !1,
                                  withBackwardControl: u.canBack,
                                  children: (0, n.jsx)(y.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: r.title }),
                              }),
                              (0, n.jsx)(x.N, {
                                  className: k().root,
                                  containerClassName: k().content,
                                  ref: c,
                                  children: (0, n.jsx)('div', {
                                      className: k().list,
                                      children: r.items.map((e) => (0, n.jsx)(j, { tag: e.tag, title: e.title, subGenres: e.subGenres }, e.tag)),
                                  }),
                              }),
                          ],
                      });
            });
            var R = r(19994);
            let L = () => {
                    let e = (0, C.W)(),
                        t = Array.from({ length: 18 }, (e, t) => {
                            let r = void 0 === e ? t : ''.concat(t, '-').concat(String(e));
                            return (0, n.jsx)(R.W, { className: k().genreShimmer, radius: 'l' }, r);
                        });
                    return (0, n.jsxs)(S.h, {
                        scrollElement: null,
                        children: [
                            (0, n.jsx)(P.Y, {
                                variant: P.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: (0, n.jsx)(R.W, { className: k().shimmerTitle, radius: 'l' }),
                            }),
                            (0, n.jsx)(x.N, { className: k().root, containerClassName: k().content, children: (0, n.jsx)('div', { className: k().list, children: t }) }),
                        ],
                    });
                },
                M = r(65208).Y,
                D = { loadingState: m.G.IDLE, items: [] },
                { pageStoreProvider: G } = (0, a.W)({ createStore: (e) => M.create(D, e), patchKey: o.n.MIXES });
            var H = r(48704),
                K = r(7420),
                X = r.n(K),
                F = r(2058),
                W = r(88969),
                U = r(86790),
                Y = r(60266);
            let V = (e) => {
                    let { children: t } = e,
                        { contentScrollRef: r, setContentScrollRef: i } = (0, T.g)(),
                        s = (0, C.W)(),
                        { formatMessage: a } = (0, F.A)();
                    return (0, n.jsx)(S.h, {
                        scrollElement: r,
                        outerTitle: a({ id: 'entity-names.mixes' }),
                        children: (0, n.jsxs)('div', {
                            className: X().root,
                            children: [
                                (0, n.jsx)(P.Y, {
                                    variant: P.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: s.canBack,
                                    children: (0, n.jsx)(y.DZ, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, n.jsx)(W.A, { id: 'entity-names.mixes' }),
                                    }),
                                }),
                                (0, n.jsx)(x.N, {
                                    ref: i,
                                    className: X().scrollableContent,
                                    containerClassName: X().scrollableContainer,
                                    children: (0, n.jsxs)('div', {
                                        className: X().container,
                                        children: [t, (0, n.jsx)(Y.A, { children: (0, n.jsx)(U.w, { className: X().footer }) })],
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                z = (0, f.PA)(() => {
                    let e = (0, a.s)(o.n.MIXES);
                    return (e.isNotFound && (0, s.notFound)(), (0, A.J)(e.isResolved), e.isNeededToLoad && (0, i.use)(e.getMixes(!0)), e.isRejected)
                        ? (0, n.jsx)(E.SomethingWentWrong, {})
                        : (0, n.jsx)(V, {
                              children: (0, n.jsx)(H.n, { isShimmerVisible: e.isLoading, isShimmerActive: !0, mixes: e.items, shimmerCount: 10, className: X().items }),
                          });
                }),
                B = () => (0, n.jsx)(V, { children: (0, n.jsx)(H.n, { isShimmerVisible: !0, isShimmerActive: !0, mixes: [], shimmerCount: 10, className: X().items }) }),
                $ = () => {
                    let e = (0, s.useSearchParams)().get('navigationId');
                    return e
                        ? (0, n.jsx)(v, { children: (0, n.jsx)(i.Suspense, { fallback: (0, n.jsx)(L, {}), children: (0, n.jsx)(I, { navigationId: e }) }) })
                        : (0, n.jsx)(G, { children: (0, n.jsx)(i.Suspense, { fallback: (0, n.jsx)(B, {}), children: (0, n.jsx)(z, {}) }) });
                };
        },
        14518: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => s });
            var n = r(53548),
                i = r(90334);
            function s() {
                return (0, n.useContext)(i.r);
            }
        },
        15947: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => o });
            var n = r(35412),
                i = r(28166),
                s = r(97261);
            let a = [n.cy.HTTP, n.cy.HTTPS, n.cy.MAILTO, n.cy.TEL, i.Lz],
                o = (e, t, r) => {
                    let o;
                    try {
                        o = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let l = (0, n.Rj)(e, { allowedProtocols: new Set([...a, o.protocol]), baseUrl: o.href });
                    return l.isAllowed
                        ? l.url.protocol === i.Lz
                            ? { type: s.I.DEEPLINK, href: e }
                            : '_blank' !== r && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(l.url, o)
                              ? { type: s.I.INTERNAL, href: e }
                              : { type: s.I.EXTERNAL, href: e }
                        : null;
                };
        },
        16818: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => l });
            var n = r(53647),
                i = r(4086),
                s = r(41928),
                a = r(65523),
                o = r(57448);
            let l = () => {
                let e = (0, s.N)(),
                    t = e.get(i.oo),
                    r = e.get(i.QG),
                    l = e.get(i.uM),
                    c = e.get(i.ff),
                    u = e.get(i.V4),
                    d = e.get(i.P0),
                    _ = (0, o.f)(),
                    m = (0, a.U)(),
                    g = (0, s.N)().get(i.TK),
                    h = e.get(i.ni),
                    p = e.get(i.RD),
                    v = new n.si(),
                    f = new n.fW();
                return {
                    ..._,
                    acqOffers: l,
                    disclaimerDictionary: c,
                    logger: m,
                    modelActionsLogger: g,
                    localStorage: v,
                    sessionStorage: f,
                    containerStorage: t,
                    authorization: r,
                    config: u,
                    clientSafeConfig: d,
                    landingSdk: h,
                    tagSandbox: p,
                };
            };
        },
        18344: (e, t, r) => {
            'use strict';
            var n;
            (r.d(t, { R: () => n }),
                (function (e) {
                    ((e.RADIAL = 'RADIAL'), (e.STACK = 'STACK'));
                })(n || (n = {})));
        },
        21127: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => s });
            var n = r(5120),
                i = r(18344);
            let s = n.gK.model('MixItem', {
                id: n.gK.string,
                title: n.gK.string,
                weblink: n.gK.string,
                covers: n.gK.maybe(n.gK.array(n.gK.string)),
                imagesLayoutType: n.gK.enumeration(Object.values(i.R)),
            });
        },
        25005: (e) => {
            e.exports = { root: 'Genre_root__80dlk', link: 'Genre_link__Wewaq', linkTitle: 'Genre_linkTitle__ORAsw', list: 'Genre_list__C2Pxf' };
        },
        28166: (e, t, r) => {
            'use strict';
            r.d(t, { Lz: () => n, ov: () => i });
            let n = ''.concat('yandexmusic', ':'),
                i = ''.concat(n, '//');
        },
        32596: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => O });
            var n = r(88800),
                i = r(65724),
                s = r(84961),
                a = r(53548),
                o = r(2058),
                l = r(88969);
            r(30282);
            var c = r(96817),
                u = r(52300),
                d = r(29504),
                _ = r(78793),
                m = r(92716),
                g = r(99984),
                h = r(90780),
                p = r(65523),
                v = r(14518),
                f = r(44230),
                x = r(4370),
                y = r(72288),
                E = r(97956),
                S = r(56248),
                N = r(90688),
                b = r(78940);
            let w = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var j = r(96856),
                C = r.n(j);
            let T = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: s } = e,
                    { slam: a } = (0, y.g)(),
                    { contentRef: o } = (0, f.g)(),
                    u = (0, b.Z)(x.Z.mymusicDownloadsTracks.href);
                return (0, n.jsxs)('div', {
                    className: (0, i.$)(C().root, t),
                    children: [
                        r &&
                            (0, n.jsx)(S.L, {
                                withBackwardFallback: '/',
                                className: (0, i.$)(C().navigation, { [C().navigation_desktop]: !o }),
                                withForwardControl: !1,
                                onBackwardClick: s,
                            }),
                        (0, n.jsxs)('div', {
                            className: (0, i.$)(C().content, { [C().content_shrink]: !r }),
                            children: [
                                (0, n.jsx)(N._V, { className: C().image, src: w.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, n.jsxs)('div', {
                                    className: C().message,
                                    children: [
                                        (0, n.jsx)(d.DZ, {
                                            className: C().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, n.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, n.jsx)(d.HL, {
                                            className: C().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                a.hasDownloadedTracks &&
                                    (0, n.jsx)(c.$, {
                                        className: C().button,
                                        onClick: u,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, n.jsx)(d.HL, {
                                            className: C().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, n.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var A = r(9184),
                P = r.n(A);
            let O = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: s } = e,
                    { formatMessage: N } = (0, o.A)(),
                    b = (0, a.useContext)(y.P),
                    w = null == b ? void 0 : b.experiments.checkExperiment(E.z.WebNextUnstableMusicScreen, 'on'),
                    j = N(w ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: r } = (0, h.gf)(),
                        { pageId: n } = (0, v.$)(),
                        i = (0, p.U)();
                    (0, a.useEffect)(() => {
                        if (!t || !r || !n) return;
                        let s = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: r,
                                pageId: n,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: i,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, g.z5)(t.evgenInstance, s);
                    }, [t, e, r, n, i]);
                })(j);
                let { sendRefreshEvent: C } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: r } = (0, v.$)(),
                            n = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, a.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let i = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: r,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                i && (0, g.bv)(e.evgenInstance, i);
                            }, [e, t, r, n]),
                        };
                    })(),
                    A = (0, a.useCallback)(() => {
                        (C(), (window.location.href = x.Z.main.href));
                    }, [C]),
                    { contentRef: O } = (0, f.g)();
                return w
                    ? (0, n.jsx)(T, { className: t, withBackwardControl: r, onBack: s })
                    : (0, n.jsxs)('div', {
                          className: (0, i.$)(P().root, t),
                          children: [
                              r &&
                                  (0, n.jsx)(S.L, {
                                      withBackwardFallback: '/',
                                      className: (0, i.$)(P().navigation, { [P().navigation_desktop]: !O }),
                                      withForwardControl: !1,
                                      onBackwardClick: s,
                                  }),
                              (0, n.jsxs)('div', {
                                  className: (0, i.$)(P().content, { [P().content_shrink]: !r }),
                                  children: [
                                      (0, n.jsx)(u.I, { className: P().icon, variant: 'attention', size: 'xxl' }),
                                      (0, n.jsx)(d.DZ, { className: (0, i.$)(P().title, P().important), variant: 'h3', size: 'xs', children: j }),
                                      (0, n.jsxs)(d.HL, {
                                          className: (0, i.$)(P().text, P().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, n.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, n.jsx)(c.$, {
                                          onClick: A,
                                          className: P().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, n.jsxs)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, n.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        34961: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => p, s: () => v });
            var n = r(88800),
                i = r(84961),
                s = r(58390),
                a = r(53548),
                o = r(35412),
                l = r(39499),
                c = r(89108),
                u = r(70003),
                d = r(72288),
                _ = r(16818);
            (0, i.eO)(!1);
            let m = (0, a.createContext)(null),
                g = (e) => {
                    let { children: t, store: r, storeKey: i } = e,
                        s = (0, a.useMemo)(() => ({ store: r, storeKey: i }), [r, i]);
                    return (0, n.jsx)(m.Provider, { value: s, children: t });
                },
                h = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: i } = e;
                    return (
                        (0, s.useServerInsertedHTML)(() => {
                            let e = i.current;
                            return ((i.current = []), 0 === e.length)
                                ? null
                                : (0, n.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, o.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(r, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                p = (e) => {
                    let { createStore: t, patchKey: r } = e,
                        i = () => {
                            var e, t;
                            let n = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], n);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: s, nonce: a } = e,
                                o = (0, _.Y)(),
                                l = (0, d.g)(),
                                { store: m, patchesRef: p } = (0, u.m)({
                                    createStore: () => t({ ...o, rootStore: l }),
                                    getPendingPatchBatches: i,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(h, { nonce: a, patchKey: r, patchesRef: p }), (0, n.jsx)(g, { store: m, storeKey: r, children: s })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, a.useContext)(m);
                if (!r || r.storeKey !== e) {
                    var n;
                    if (!t) return null;
                    throw new l.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (n = null == r ? void 0 : r.storeKey) ? n : 'null', expectedStoreKey: e },
                    });
                }
                return r.store;
            }
        },
        37670: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => s });
            var n = r(53548);
            r(30282);
            var i = r(58390);
            let s = (e) => {
                let t = (0, i.usePathname)(),
                    [r, s] = (0, n.useState)(!1);
                ((0, n.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, n.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), s(!0));
                    }, [e, r, t]));
            };
        },
        37770: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => c });
            var n = r(88800),
                i = r(65724),
                s = r(17392),
                a = r(19994),
                o = r(9590),
                l = r.n(o);
            let c = (e) => {
                let {
                    isActive: t,
                    className: r,
                    shimmerClassName: o,
                    round: c,
                    'aria-label': u,
                    centered: d,
                    withInfo: _ = !0,
                    linesCount: m = 3,
                    withSubcover: g,
                    radius: h = 'l',
                } = e;
                return (0, n.jsxs)('div', {
                    'aria-label': u,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, i.$)(l().root, r),
                    'data-test-id': s.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        g && (0, n.jsx)(a.W, { isActive: t, className: l().subcover, radius: 'l' }),
                        (0, n.jsx)(a.W, { isActive: t, className: (0, i.$)(l().cover, o, { [l().cover_round]: c, [l().cover_withSubcover]: g }), radius: h }),
                        _ &&
                            (0, n.jsx)('div', {
                                className: (0, i.$)(l().infoContainer, l()['content_linesCount_'.concat(m)], { [l().infoContainer_centered]: d }),
                                children: (0, n.jsx)(a.W, { isActive: t, className: (0, i.$)(l().title, { [l().title_withSubcover]: g }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        40989: (e) => {
            e.exports = {
                root: 'MixCard_root__9tPLV',
                header: 'MixCard_header__j7Zpo',
                title: 'MixCard_title__nhghp',
                cover: 'MixCard_cover__oSu73',
                covers: 'MixCard_covers__S61hz',
                covers_stack: 'MixCard_covers_stack__VeHDp',
                covers_radial: 'MixCard_covers_radial__orE40',
            };
        },
        46079: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => n });
            let n = (0, r(53548).createContext)({ isPrefetchDisabled: !0, isPrefetchOnHover: !1 });
        },
        48704: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => g });
            var n = r(88800),
                i = r(65724),
                s = r(84961),
                a = r(53548),
                o = r(88969),
                l = r(17392),
                c = r(29504),
                u = r(84273),
                d = r(1698),
                _ = r(70662),
                m = r.n(_);
            let g = (0, s.PA)((e) => {
                let { isShimmerVisible: t, isShimmerActive: r, withTitle: s, mixes: _, shimmerCount: g = 5, className: h } = e,
                    p = (0, a.useMemo)(
                        () =>
                            t
                                ? (0, n.jsx)(d.e, { isActive: r, round: !1, centered: !1, withInfo: !1, count: g })
                                : _.map((e) => (0, n.jsx)(u.N, { title: e.title, weblink: e.weblink, covers: e.covers, imagesLayoutType: e.imagesLayoutType }, e.id)),
                        [r, t, _, g],
                    );
                return (0, n.jsxs)('div', {
                    'data-test-id': l.e8.mixes.MIXES_GRID_CONTAINER,
                    children: [
                        s &&
                            (0, n.jsx)(c.DZ, {
                                className: m().mixesTitle,
                                size: 's',
                                weight: 'bold',
                                variant: 'h3',
                                'data-test-id': l.e8.mixes.MIXES_GRID_HEADER,
                                children: (0, n.jsx)(o.A, { id: 'entity-names.mixes' }),
                            }),
                        (0, n.jsx)('div', { className: (0, i.$)(m().mixesGrid, h), children: p }),
                    ],
                });
            });
        },
        53647: (e, t, r) => {
            'use strict';
            r.d(t, { V8: () => s, si: () => o, fW: () => _, MJ: () => d, jU: () => g, Bx: () => m });
            var n = r(77451);
            function i(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class s {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let a = (0, n.Jt)(e);
                        if (t) {
                            var r, s;
                            return null != (s = null == (r = i(a)) ? void 0 : r.value) ? s : null;
                        }
                        return null != a ? a : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let s = i ? JSON.stringify({ value: t }) : t;
                        (0, n.hZ)(e, s, r);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, n.TF)(e);
                    } catch (e) {}
                }
            }
            function a(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class o {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = a('localStorage');
                    if (!r) return null;
                    try {
                        var n;
                        let s = r.getItem(e) || void 0;
                        if (!t) return s;
                        let a = i(s);
                        if (!a) return null;
                        let o = null != (n = null == a ? void 0 : a.value) ? n : null;
                        if ((null == a ? void 0 : a.expires) && Date.now() > new Date(a.expires).getTime()) return (this.remove(e), null);
                        return o;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    if ('number' == typeof (null == r ? void 0 : r.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * r.expires), (r.expires = e));
                    }
                    let n = a('localStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t, ...r }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = a('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var l = r(9519),
                c = r(39499);
            class u extends c.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...n } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...n }),
                        (0, l._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype));
                }
            }
            class d {
                get(e) {
                    throw new u(this.platform, this.type);
                }
                set(e, t, r) {
                    throw new u(this.platform, this.type);
                }
                has(e) {
                    throw new u(this.platform, this.type);
                }
                remove(e) {
                    throw new u(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, l._)(this, 'platform', ''), (0, l._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class _ {
                get(e) {
                    let t = a('sessionStorage');
                    if (!t) return null;
                    try {
                        var r, n, s;
                        let a = null != (n = t.getItem(e)) ? n : void 0;
                        return null != (s = null == (r = i(a)) ? void 0 : r.value) ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let r = a('sessionStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = a('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let r = 'object' != typeof t ? t : t.name,
                            n = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            i = e.get(r);
                        null != i && e.set(r, i, n);
                    });
            }
            function g(e) {
                let { name: t, group: r, value: n } = e;
                return n && 0 !== Object.keys(n).length
                    ? n.title
                        ? { [t]: { group: r, value: { ...n, title: r } } }
                        : { [t]: { group: r, value: { title: r, value: n } } }
                    : { [t]: { group: r, value: { title: r } } };
            }
        },
        53892: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            let n = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        57448: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => s });
            var n = r(4086),
                i = r(41928);
            let s = () => {
                let e = (0, i.N)(),
                    t = e.get(n.$I),
                    r = e.get(n.EN),
                    s = e.get(n.N1),
                    a = e.get(n._1),
                    o = e.get(n.V3),
                    l = e.get(n.Lb),
                    c = e.get(n.wK),
                    u = e.get(n.tz),
                    d = e.get(n.$8),
                    _ = e.get(n.Oo),
                    m = e.get(n.X4),
                    g = e.get(n.O9),
                    h = e.get(n.E),
                    p = e.get(n.wH),
                    v = e.get(n.ok),
                    f = e.get(n.X8),
                    x = e.get(n.yq),
                    y = e.get(n.NN),
                    E = e.get(n.qN),
                    S = e.get(n.ro),
                    N = e.get(n.nM),
                    b = e.get(n.Ut),
                    w = e.get(n.K1),
                    j = e.get(n.eu),
                    C = e.get(n.SD),
                    T = e.get(n.aE),
                    A = e.get(n.ki),
                    P = e.get(n.c9),
                    O = e.get(n.en),
                    k = e.get(n.jQ),
                    I = e.get(n.cZ),
                    R = e.get(n.Zl),
                    L = e.get(n.CN),
                    M = e.get(n.P1),
                    D = e.get(n.zj),
                    G = e.get(n.re),
                    H = e.get(n.JM),
                    K = e.get(n.Lk),
                    X = e.get(n.$$),
                    F = e.get(n.sv),
                    W = e.get(n.gd),
                    U = e.get(n.Ez),
                    Y = e.get(n.u2),
                    V = e.get(n.TD),
                    z = e.get(n.dh),
                    B = e.get(n.LC),
                    $ = e.get(n.PL),
                    J = e.get(n.DT);
                return {
                    accountResource: t,
                    afterTrackResource: r,
                    disclaimersResource: s,
                    usersResource: a,
                    landingResource: o,
                    landing3Resource: l,
                    landingBlocksResource: c,
                    albumResource: u,
                    libraryResource: d,
                    tracksResource: _,
                    topResource: m,
                    artistsResource: g,
                    slidesResource: h,
                    redAlertResource: p,
                    rotorResource: v,
                    waveResource: f,
                    searchResource: x,
                    searchPlaylistResource: y,
                    playlistResource: E,
                    playlistsResource: S,
                    pinResource: N,
                    metatagsResource: b,
                    tagResource: w,
                    feedResource: j,
                    wizard3Resource: C,
                    pinsResource: T,
                    musicHistoryResource: A,
                    dynamicPagesResource: P,
                    chartResource: O,
                    clipsResource: k,
                    lyricViewsResource: I,
                    nonMusicResource: R,
                    donationResource: L,
                    loaderResource: M,
                    lumenResource: D,
                    prefixlessResource: G,
                    streamsResource: H,
                    filtersResource: K,
                    ugcResource: X,
                    collectionResource: F,
                    adsResource: W,
                    personalResource: U,
                    familyResource: Y,
                    childrenLandingResource: V,
                    promoResource: z,
                    telemetryResource: B,
                    labelsResource: $,
                    concertsResource: J,
                    wordsResource: e.get(n.dA),
                    wheelResource: e.get(n.$Y),
                };
            };
        },
        59497: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => s });
            var n = r(5120),
                i = r(74773);
            let s = n.gK.model('LoadingState', { loadingState: n.gK.enumeration(Object.values(i.G)) }).views((e) => ({
                get isNeededToLoad() {
                    return e.loadingState === i.G.IDLE;
                },
                get isLoading() {
                    return e.loadingState === i.G.PENDING;
                },
                get isResolved() {
                    return e.loadingState === i.G.RESOLVE;
                },
                get isRejected() {
                    return e.loadingState === i.G.REJECT;
                },
            }));
        },
        60266: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => a });
            var n = r(88800);
            r(30282);
            var i = r(11006),
                s = r.n(i);
            let a = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: s().empty });
            };
        },
        62293: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => i });
            var n = r(97956);
            let i = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: i, userRegion: s } = e;
                return 'ru' === s && t(n.z.WebNextFooterDisclaimer, 'on') ? r() : i();
            };
        },
        65208: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => u });
            var n = r(5120),
                i = r(89916),
                s = r(82212),
                a = r(21127),
                o = r(74773),
                l = r(59497),
                c = r(99159);
            let u = n.gK
                .compose(n.gK.model('Mixes', { items: n.gK.array(a.f), errorStatusCode: n.gK.maybeNull(n.gK.number) }), l.X)
                .views((e) => ({
                    get isLoading() {
                        return e.isNeededToLoad || e.loadingState === o.G.PENDING;
                    },
                    get isNotFound() {
                        let t = e.isResolved && 0 === e.items.length;
                        return e.errorStatusCode === i.X1.NOT_FOUND || t;
                    },
                }))
                .actions((e) => ({
                    getMixes: (0, n.L3)(function* (t) {
                        let { landingResource: r, modelActionsLogger: a } = (0, n._$)(e);
                        if (e.loadingState !== o.G.PENDING)
                            try {
                                e.loadingState = o.G.PENDING;
                                let i = yield r.getBlock({ source: { uri: '/landing/block/mixes', fullList: t }, type: s.t.MIXES });
                                ((e.items = { items: (0, n.wg)(i.items.map((e) => (0, c.J)(e.data))) }.items), (e.loadingState = o.G.RESOLVE));
                            } catch (t) {
                                (a.error(t),
                                    t instanceof i.GX && (t.statusCode === i.X1.NOT_FOUND || t.statusCode === i.X1.BAD_REQUEST) && (e.errorStatusCode = i.X1.NOT_FOUND),
                                    e.loadingState !== o.G.IDLE && (e.loadingState = o.G.REJECT));
                            }
                    }),
                }));
        },
        65453: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => c });
            var n,
                i = r(53548),
                s = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (i && (i += ' '), (i += n));
                                            else for (r in t) t[r] && (i && (i += ' '), (i += r));
                                        return i;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => i }));
                        let i = n;
                    },
                    7354: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root: 'buOTZq_TKQOVyjMLrXvB',
                            block: 'BSPmaubc8UL2KHOMLV4A',
                            iconContainer: 'VUb2BxfgkGQhG1RDQGwF',
                            iconOnly: 'WhDaA5aAfZSjxalYb_Ex',
                            flexIcon: 'vIGeuYz4Cf60Cnuq3WKA',
                            icon_position_left: 'GoUQfg7mJlSkcbAZ28Rj',
                            icon_position_right: 'TXa2RKc_Hf0QPdmUDMwI',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var i = null;
                            if ((void 0 !== n && (i = '' + n), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var s in ((n = {}), t)) 'key' !== s && (n[s] = t[s]);
                            else n = t;
                            return { $$typeof: r, type: e, key: i, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    3616: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0));
                        let i = r(4377),
                            s = r(810),
                            a = r(5881),
                            o = n(r(7354)),
                            l = (e) => {
                                let {
                                        component: t = (0, i.jsx)('a', {}),
                                        block: r,
                                        target: n,
                                        rel: l,
                                        href: c,
                                        forwardRef: u,
                                        iconPosition: d = 'left',
                                        flexIcon: _,
                                        icon: m,
                                        className: g,
                                        children: h,
                                        textClassName: p = '',
                                        containerClassName: v,
                                        ...f
                                    } = e,
                                    x = (0, s.useId)(),
                                    y = !s.Children.count(h),
                                    E = 'left' === d,
                                    S = null;
                                if (void 0 !== m) {
                                    var N;
                                    S = (0, s.cloneElement)(m, {
                                        className: (0, a.clsx)(
                                            o.default.icon,
                                            { [o.default['icon_position_'.concat(d)]]: !y && d },
                                            null == (N = m.props) ? void 0 : N.className,
                                        ),
                                        key: x,
                                    });
                                }
                                let b = (0, s.useMemo)(
                                    () =>
                                        m
                                            ? (0, i.jsxs)('div', {
                                                  className: (0, a.clsx)(o.default.iconContainer, v),
                                                  children: [E && S, !y && (0, i.jsx)('span', { className: p, children: h }), !E && S],
                                              })
                                            : h,
                                    [h, v, m, E, y, S, p],
                                );
                                return (0, s.cloneElement)(
                                    t,
                                    {
                                        ref: u,
                                        target: n,
                                        rel: '_blank' === n && void 0 === l ? 'noopener noreferrer' : l,
                                        href: c,
                                        className: (0, a.clsx)(o.default.root, { [o.default.block]: r, [o.default.flexIcon]: m && _, [o.default.iconOnly]: m && y }, g),
                                        ...f,
                                        ...t.props,
                                    },
                                    b,
                                );
                            };
                        t.Link = (0, s.forwardRef)((e, t) => (0, i.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(i, 2));
                    },
                },
                a = {};
            function o(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var r = (a[e] = { exports: {} });
                return (s[e].call(r.exports, r, r.exports, o), r.exports);
            }
            ((o.d = (e, t) => {
                for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.r = void 0));
                var e = o(3616);
                Object.defineProperty(l, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var c = l.r;
            l.X;
        },
        65938: (e) => {
            e.exports = {
                root: 'GenresPage_root__LhP_S',
                shimmerTitle: 'GenresPage_shimmerTitle__4j8uH',
                content: 'GenresPage_content__yhKrQ',
                list: 'GenresPage_list__l2Cuc',
                genreShimmer: 'GenresPage_genreShimmer__1x3bp',
            };
        },
        70003: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => s });
            var n = r(5120),
                i = r(53548);
            let s = (e) => {
                let { createStore: t, getPendingPatchBatches: r, patchesUpdatedEventName: s } = e,
                    a = (0, i.useRef)([]),
                    [o] = (0, i.useState)(() => {
                        let e = t();
                        for (let t of r()) (0, n.X6)(e, t);
                        return e;
                    });
                return (
                    (0, i.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of r()) (0, n.X6)(o, e);
                        };
                        return (e(), window.addEventListener(s, e), () => window.removeEventListener(s, e));
                    }, [r, s, o]),
                    { store: o, patchesRef: a }
                );
            };
        },
        70662: (e) => {
            e.exports = { mixesTitle: 'MixesGrid_mixesTitle__QawnL', mixesGrid: 'MixesGrid_mixesGrid__uZQtt' };
        },
        78793: (e, t, r) => {
            'use strict';
            function n(e) {
                let { params: t, logger: r, context: n } = e,
                    i = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
                return i.length > 0 ? (r.error('Evgen parameters are not met', { parameters: i.join(', '), incomingParams: t, context: n }), null) : t;
            }
            r.d(t, { F: () => n });
        },
        78940: (e, t, r) => {
            'use strict';
            (r.d(t, { Z: () => l }), r(30282));
            var n = r(58390),
                i = r(29993),
                s = r(67174),
                a = r(15947),
                o = r(97261);
            let l = (e) => {
                let t = (0, n.useRouter)(),
                    { href: r, target: l } = (0, s.u)(e);
                return (0, i.c)((e) => {
                    let n = (0, a.U)(r, window.location.href, l);
                    if (!n) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (n.type === o.I.EXTERNAL || n.type === o.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: r } = (0, s.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, r);
                              })(n.href)
                            : t.push(n.href));
                });
            };
        },
        84273: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => g });
            var n = r(88800),
                i = r(65724),
                s = r(84961),
                a = r(17392),
                o = r(18344),
                l = r(90688),
                c = r(7555),
                u = r(29504),
                d = r(91292),
                _ = r(40989),
                m = r.n(_);
            let g = (0, s.PA)((e) => {
                let { className: t, title: r, weblink: s, covers: _ = [], coverSize: g = 100, imagesLayoutType: h, headingVariant: p = 'h3' } = e;
                return (0, n.jsx)(d.N, {
                    href: s,
                    'data-test-id': a.OA.mix.MIX_CARD,
                    children: (0, n.jsxs)(c.t, {
                        className: (0, i.$)(m().root, t),
                        radius: 'l',
                        children: [
                            (0, n.jsx)('div', {
                                className: m().header,
                                children: (0, n.jsx)(u.HL, {
                                    variant: p,
                                    size: 'xs',
                                    weight: 'bold',
                                    className: m().title,
                                    lineClamp: 2,
                                    'data-test-id': a.OA.mix.MIX_CARD_HEADER,
                                    children: r,
                                }),
                            }),
                            (0, n.jsxs)('div', {
                                className: (0, i.$)(m().covers, { [m().covers_radial]: h === o.R.RADIAL, [m().covers_stack]: h === o.R.STACK }),
                                'data-test-id': a.OA.mix.MIX_CARD_COVERS,
                                children: [
                                    (0, n.jsx)(l._V, {
                                        src: _[2],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: m().cover,
                                        size: g,
                                        'data-test-id': a.OA.mix.MIX_CARD_COVER_IMAGE_3,
                                    }),
                                    (0, n.jsx)(l._V, {
                                        src: _[1],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: m().cover,
                                        size: g,
                                        'data-test-id': a.OA.mix.MIX_CARD_COVER_IMAGE_2,
                                    }),
                                    (0, n.jsx)(l._V, {
                                        src: _[0],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: m().cover,
                                        size: g,
                                        'data-test-id': a.OA.mix.MIX_CARD_COVER_IMAGE_1,
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
        },
        86790: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => w });
            var n = r(88800),
                i = r(65724),
                s = r(84961),
                a = r(2058),
                o = r(30282),
                l = r(94144),
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
            let u = (e, t, r) => {
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
                d = (e) => {
                    let { formatMessage: t, language: r, tld: n, year: i } = e;
                    return {
                        year: i,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, n, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, n, r) },
                    };
                };
            var _ = r(62293),
                m = r(99839);
            let g = (e) => e(new Date(), (0, m.m)());
            var h = r(51611),
                p = r(72288),
                v = r(11006),
                f = r.n(v),
                x = r(17392),
                y = r(29504),
                E = r(91292);
            let S = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, i.$)(f().copyrights, t),
                        'data-test-id': x.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: f().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, n.jsx)(E.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, i.$)(f().copyrightLink, f().yandexMusicLink),
                                        'data-test-id': x.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(y.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(E.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: f().copyrightLink,
                                'data-test-id': x.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, n.jsxs)('div', {
                        className: f().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: f().list,
                                'data-test-id': x.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: i } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: f().item,
                                            children: (0, n.jsx)(E.N, { target: '_blank', href: i, className: f().link, 'data-test-id': x.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, n.jsx)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: f().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': x.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                b = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, i.$)(f().root, f().important, t),
                        'data-test-id': x.S7.FOOTER,
                        children: [(0, n.jsx)(N, { links: r.links, disclaimer: r.disclaimer }), (0, n.jsx)(S, { data: r.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, p.g)(),
                    { formatDate: i, formatMessage: s } = (0, a.A)(),
                    { language: o } = (0, h.h)(),
                    l = d({ formatMessage: s, language: o, tld: r.tld, year: g(i) });
                return (0, n.jsx)(S, { className: t, data: l });
            });
            let w = (0, s.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: s, location: m, user: v } = (0, p.g)(),
                    { formatDate: x, formatMessage: y } = (0, a.A)(),
                    { isEnabled: E } = null != (t = (0, l.P)()) ? t : {},
                    { language: S } = (0, h.h)(),
                    N = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: n, language: i, tld: s, userRegion: a, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: n, language: i, userRegion: s } = e,
                                    a = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, n, i) },
                                    o = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, n, i) },
                                    l = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, n, i) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, n, i) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, n, i) },
                                    m = [a, l, d];
                                return (r && 'ru' === s && m.push(o), m.push(_), m);
                            })({ formatMessage: r, isWebApplication: n, language: i, tld: s, userRegion: a }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: a,
                            }),
                            copyrights: d({ formatMessage: r, language: i, tld: s, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: y,
                        isWebApplication: o.$3,
                        tld: m.tld,
                        language: S,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: g(x),
                    });
                return (0, n.jsx)(b, { className: (0, i.$)({ [f().root_withOffsetForDeeplink]: E }, r), data: N });
            });
        },
        87143: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 13950));
        },
        89108: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => i, s: () => n });
            let n = 'yMusicStatePatchesUpdated',
                i = 'yMusicPageStatePatchesUpdated';
        },
        90334: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => n });
            let n = (0, r(53548).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        90780: (e, t, r) => {
            'use strict';
            r.d(t, { vZ: () => p, st: () => s, gf: () => o });
            var n = r(53548);
            let i = (0, n.createContext)(null);
            function s() {
                return (0, n.useContext)(i);
            }
            let a = (0, n.createContext)({ hash: void 0 });
            function o() {
                return (0, n.useContext)(a);
            }
            var l = r(88800),
                c = r(54020);
            let u = (e) => {
                let { children: t } = e,
                    r = (0, n.useMemo)(() => ({ hash: (0, c.A)() }), []);
                return (0, l.jsx)(a.Provider, { value: r, children: t });
            };
            class d {
                makeParams() {
                    return {};
                }
            }
            class _ {
                makeParams() {
                    return {};
                }
            }
            var m = r(9519);
            class g {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, t) {
                    this.evgen.trackEvent(e, t);
                }
                constructor(e, t, r) {
                    ((0, m._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (n, i) => {
                                let s = { ...i, ...t.getGlobalParams(), ...r.getPlatformParams() };
                                e.trackEvent(n, s);
                            },
                        }));
                }
            }
            let h = null,
                p = (e) => {
                    let { allowAnalyticsLogs: t, children: r, evgenUserParam: s, logger: a, metrika: o } = e,
                        c = (0, n.useMemo)(() => {
                            if (h) return h;
                            let e = (function (e, t, r) {
                                let n = (function (e) {
                                    let { callback: t, maxSendingItemsPerRequest: r, requestsSendingDelay: n } = e,
                                        i = [];
                                    return (
                                        !(function e() {
                                            (i.length > 0 && t(i.splice(0, r)), window.setTimeout(e, n));
                                        })(),
                                        {
                                            add(e) {
                                                i.push(e);
                                            },
                                        }
                                    );
                                })({
                                    callback: (t) => {
                                        e(t);
                                    },
                                    requestsSendingDelay: 1e3,
                                    maxSendingItemsPerRequest: 21,
                                });
                                return {
                                    trackEvent(e, i) {
                                        (r && t.log(e, i), n.add({ [e]: i }));
                                    },
                                };
                            })((e) => o.count(e, s), a, t);
                            return (h = new g(
                                e,
                                (function () {
                                    let e = new d();
                                    return { getGlobalParams: () => e };
                                })(),
                                (function () {
                                    let e = new _();
                                    return { getPlatformParams: () => e };
                                })(),
                            ));
                        }, [a, o]);
                    return (0, l.jsx)(i.Provider, { value: c, children: (0, l.jsx)(u, { children: r }) });
                };
        },
        91292: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => m });
            var n = r(88800),
                i = r(53548),
                s = r(12389),
                a = r.n(s),
                o = r(29993),
                l = r(65453),
                c = r(46079),
                u = r(67174);
            let d = (e) => {
                    let [t, r] = (0, i.useState)(!1),
                        s = (0, o.c)(() => {
                            r(!0);
                        });
                    return (0, n.jsx)(a(), { prefetch: t, ...e, onMouseEnter: s });
                },
                _ = (e) => {
                    let { forwardedRef: t, href: r, component: s, ...o } = e,
                        { isPrefetchDisabled: _, isPrefetchOnHover: m } = (0, i.useContext)(c.j),
                        { href: g, target: h, rel: p } = (0, u.u)(null != r ? r : ''),
                        v = (0, i.isValidElement)(s)
                            ? s
                            : (function (e, t, r) {
                                  return e ? (t ? (0, n.jsx)(a(), { prefetch: !1 }) : r ? (0, n.jsx)(d, { href: e }) : (0, n.jsx)(a(), {})) : (0, n.jsx)('a', {});
                              })(r, _, m);
                    return (0, n.jsx)(l.N, { ref: t, component: v, href: r ? g : void 0, target: h, rel: p, ...o });
                },
                m = (0, i.forwardRef)((e, t) => (0, n.jsx)(_, { ...e, forwardedRef: t }));
        },
        94144: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i, P: () => s });
            var n = r(53548);
            let i = (0, n.createContext)(null),
                s = () => (0, n.useContext)(i);
        },
        96856: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
        },
        97261: (e, t, r) => {
            'use strict';
            r.d(t, { I: () => n });
            var n = (function (e) {
                return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
            })({});
        },
        99159: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => i });
            var n = r(5120);
            let i = (e) => {
                var t;
                return {
                    id: e.id,
                    title: e.title,
                    weblink: null != (t = e.action.weblink) ? t : '',
                    covers: (0, n.wg)(e.covers || []),
                    imagesLayoutType: e.style.imagesLayoutType,
                };
            };
        },
        99839: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => n });
            let n = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                8752, 7435, 9467, 3637, 1405, 7617, 6706, 4771, 1311, 8832, 6904, 5977, 2058, 2881, 8628, 8283, 2824, 3857, 4732, 1195, 1598, 6281, 1928, 900, 6387, 763,
                2670, 7358,
            ],
            () => e((e.s = 87143)),
        ),
            (_N_E = e.O()));
    },
]);
