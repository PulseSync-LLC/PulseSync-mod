(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4905],
    {
        3291: (t) => {
            t.exports = {
                description: 'HorizontalPlaylistCard_description__KYHZF',
                likesCount: 'HorizontalPlaylistCard_likesCount__rgUhr',
                tracksCount: 'HorizontalPlaylistCard_tracksCount__ZdjzM',
                icon: 'HorizontalPlaylistCard_icon__LHymu',
            };
        },
        5144: (t, e, i) => {
            'use strict';
            i.d(e, { oN: () => d.TagPage, vV: () => o });
            var a = i(51606),
                l = i(14525),
                s = i(25358),
                n = i(42561),
                r = i(54690);
            let o = a.gK
                .model('TagPage', {
                    title: a.gK.maybe(a.gK.string),
                    errorStatusCode: a.gK.maybeNull(a.gK.number),
                    tagLoadingState: a.gK.enumeration(Object.values(n.GuX)),
                    playlistsData: a.gK.array(a.gK.model({ uid: a.gK.number, kind: a.gK.number })),
                    pagesLoader: (0, r.Ij)(s.$o),
                })
                .views((t) => {
                    let e = {
                        get isNeededToLoad() {
                            return t.tagLoadingState === n.GuX.IDLE;
                        },
                        get isResolved() {
                            return t.tagLoadingState === n.GuX.RESOLVE;
                        },
                        get isNotFound() {
                            let e = t.pagesLoader.isEmpty;
                            return (t.tagLoadingState === n.GuX.REJECT && (t.errorStatusCode === l.X1.NOT_FOUND || t.errorStatusCode === l.X1.BAD_REQUEST)) || e;
                        },
                        get isSomethingWrong() {
                            return t.tagLoadingState === n.GuX.REJECT && !e.isNotFound;
                        },
                        get playlists() {
                            var i;
                            return null != (i = t.pagesLoader.items) ? i : [];
                        },
                    };
                    return e;
                })
                .actions((t) => {
                    let e = {
                        getPlaylists: (0, a.L3)(function* (e) {
                            let { page: i = 0, pageSize: r = 20 } = e,
                                { playlistsResource: o, modelActionsLogger: d } = (0, a._$)(t);
                            if (t.tagLoadingState === n.GuX.RESOLVE && t.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    t.pagesLoader.setPageState(i, n.GuX.PENDING);
                                    let e = i * r,
                                        a = t.playlistsData.slice(e, e + r),
                                        l = yield o.getPlaylists({ playlistIds: a.map((t) => ''.concat(t.uid, ':').concat(t.kind)), resumeStream: !1 }),
                                        d = { page: i, perPage: r, total: t.playlistsData.length },
                                        u = l.playlists.map(s.jX);
                                    t.pagesLoader.setItems(u, { page: i, pager: d });
                                } catch (e) {
                                    d.error(e),
                                        t.pagesLoader.setItems(null, { responseStatus: n.FlZ.ERROR, page: i }),
                                        e instanceof l.GX &&
                                            (e.statusCode === l.X1.NOT_FOUND || e.statusCode === l.X1.BAD_REQUEST) &&
                                            (t.errorStatusCode = l.X1.NOT_FOUND);
                                }
                        }),
                        reset() {
                            t.pagesLoader.reset(), (t.tagLoadingState = n.GuX.IDLE), (t.title = void 0), (t.playlistsData = (0, a.wg)([])), (t.errorStatusCode = null);
                        },
                        getTag: (0, a.L3)(function* (i) {
                            let { id: s, page: r = 0, pageSize: o = 20 } = i,
                                { tagResource: d, modelActionsLogger: u } = (0, a._$)(t);
                            if (t.tagLoadingState !== n.GuX.PENDING)
                                try {
                                    var c;
                                    t.tagLoadingState = n.GuX.PENDING;
                                    let i = yield d.getPlaylistIds({ id: s });
                                    (t.title = null == (c = i.tag) ? void 0 : c.name),
                                        (t.playlistsData = (0, a.wg)(i.ids.map((t) => ({ uid: t.uid, kind: t.kind })))),
                                        t.tagLoadingState !== n.GuX.IDLE && (t.tagLoadingState = n.GuX.RESOLVE),
                                        yield e.getPlaylists({ page: r, pageSize: o });
                                } catch (e) {
                                    u.error(e),
                                        e instanceof l.GX &&
                                            (e.statusCode === l.X1.NOT_FOUND || e.statusCode === l.X1.BAD_REQUEST) &&
                                            (t.errorStatusCode = l.X1.NOT_FOUND),
                                        t.tagLoadingState !== n.GuX.IDLE && (t.tagLoadingState = n.GuX.REJECT);
                                }
                        }),
                    };
                    return e;
                });
            i(11378);
            var d = i(54278);
        },
        7103: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => s });
            var a = i(44020),
                l = i(47480);
            let s = (t) => {
                let { formatMessage: e } = (0, l.A)();
                return (0, a.useMemo)(() => {
                    let i = '';
                    t.isLiked && !t.actualLikesCount
                        ? (i = e({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof t.actualLikesCount &&
                          (i =
                              t.actualLikesCount > 0
                                  ? e({ id: 'entity-names.likes-counter' }, { counter: t.actualLikesCount })
                                  : e({ id: 'entity-names.likes-counter-empty' }));
                    let a = e({ id: 'entity-names.playlist-name' }, { playlistName: t.title });
                    return ''.concat(a, ' ').concat(i);
                }, [e, t]);
            };
        },
        9066: (t, e, i) => {
            'use strict';
            i.d(e, { HorizontalPlaylistCard: () => j });
            var a = i(62936),
                l = i(79950),
                s = i(19718),
                n = i(44020),
                r = i(47480),
                o = i(26731),
                d = i(23480),
                u = i(8669),
                c = i(81959),
                m = i(59935),
                g = i(49923),
                p = i(85742),
                _ = i(20418),
                y = i(42561),
                v = i(85906),
                x = i(7103),
                C = i(25358),
                k = i(71318),
                h = i.n(k);
            let P = (0, s.PA)((t) => {
                var e;
                let { className: i, playlist: s, likeIconSize: r = 'xxs' } = t,
                    { user: o, trailer: u } = (0, y.Pjs)(),
                    c = (0, y.PT7)(),
                    { sendLikeSearchFeedback: g } = (0, y.zEv)(),
                    _ = (0, C.KX)(s),
                    [x, k] = (0, n.useState)(!1),
                    P = (0, m.c)(async () => {
                        x || s.isLiked || (k(!0), null == g || g()), await _();
                    }),
                    f = (0, y.Ftl)(),
                    L = (0, m.c)((t) => {
                        if ((t.stopPropagation(), c())) return void t.preventDefault();
                        u.openPlaylistTrailer(s.id), f(d.ky.Playlist, s.id);
                    });
                return (0, a.jsxs)('div', {
                    className: (0, l.$)(h().root, h().controls, i, { [h().controls_disabled]: !s.isAvailable }),
                    children: [
                        s.isAvailable &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(v.aQ, {
                                        fallback: (0, a.jsx)(v.cy, {
                                            size: 'xs',
                                            iconSize: r,
                                            className: (0, l.$)(h().item, h().likeIcon),
                                            isLiked: s.isLiked,
                                            onClick: P,
                                            disabled: !o.isAuthorized,
                                        }),
                                    }),
                                    (null == (e = s.trailer) ? void 0 : e.isAvailable) &&
                                        (0, a.jsx)(v.aQ, {
                                            fallback: (0, a.jsx)(v.kJ, {
                                                className: (0, l.$)(h().item, h().trailerIcon),
                                                iconSize: 'xs',
                                                variant: 'text',
                                                onClick: L,
                                                withRipple: !1,
                                            }),
                                        }),
                                ],
                            }),
                        (0, a.jsx)('div', {
                            className: (0, l.$)(h().item, h().item_buttonArrow),
                            children: (0, a.jsx)(p.Icon, { className: v.$f.buttonArrow, variant: 'arrowRight', size: 'xs' }),
                        }),
                    ],
                });
            });
            var f = i(3291),
                L = i.n(f);
            let j = (0, s.PA)((t) => {
                let { className: e, playlist: i, pageId: s, coverClassName: C, playButtonIconSize: k, likeIconSize: h } = t,
                    { ref: f, intersectionPropertyId: j } = (0, y.nMI)(),
                    { from: N } = (0, y.fyy)({ pageId: s }),
                    [b, E] = (0, n.useState)(!1),
                    A = (0, y.brA)(),
                    S = (0, x.r)(i),
                    T = i.title || '',
                    { formatMessage: w, formatNumber: K } = (0, r.A)(),
                    F = (0, y.PT7)(),
                    { sendNavigateSearchFeedback: B, sendPlaySearchFeedback: z } = (0, y.zEv)(),
                    I = (0, y.NKK)(),
                    {
                        paywall: { modal: R },
                    } = (0, y.Pjs)(),
                    O = (0, y.NPu)(),
                    {
                        isPlaying: M,
                        isCurrent: W,
                        togglePlay: $,
                    } = (0, y.Dx4)({ playContextParams: { contextData: { type: c.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: N }, loadContextMeta: !0 } }),
                    D = (0, y.ZpR)(i.url),
                    X = (0, m.c)((t) => {
                        null == B || B(), I({ to: d.QT.PlaylistScreen }), t.preventDefault(), D(t);
                    }),
                    Y = (0, m.c)(() => {
                        if (!F()) {
                            if (O) return void R.open();
                            b || M || (E(!0), null == z || z()), $(), A(!M);
                        }
                    }),
                    U = (0, m.c)((t) => {
                        (0, g.P)(t, v.$f.ripple), X(t);
                    }),
                    G = (0, m.c)((t) => {
                        t.stopPropagation(), X(t);
                    }),
                    Z = (0, n.useCallback)(
                        (t) =>
                            (0, a.jsx)(v.q1, {
                                isAvailable: i.isAvailable,
                                isDisliked: !1,
                                coverUri: i.coverUri,
                                title: T,
                                className: (0, l.$)(v.$f.playButtonCell, C),
                                alt: w({ id: 'entity-names.playlist-name' }, { playlistName: T }),
                                radius: 'xs',
                                ...t,
                            }),
                        [i, T, C, w],
                    ),
                    H = null == Z ? void 0 : Z({ onPlayButtonClick: Y, isPlaying: M, isCurrent: W, playButtonIconSize: k }),
                    q = (0, n.useMemo)(
                        () =>
                            i.url && i.isAvailable
                                ? (0, a.jsx)(v.N_, { className: (0, l.$)(v.$f.text, v.$f.titleLink), href: i.url, onClick: G, children: T })
                                : (0, a.jsx)(_.Caption, { className: (0, l.$)(v.$f.text, v.$f.titleText), size: 'm', variant: 'div', type: 'text', children: T }),
                        [G, i.isAvailable, i.url, T],
                    ),
                    V = (0, n.useMemo)(() => {
                        if (void 0 === i.actualLikesCount || void 0 === i.tracksCount) return;
                        let t = (0, a.jsx)(_.Caption, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                            e = i.isLiked ? 'likedVariant' : 'likeVariant',
                            l = ''.concat(S, ' ').concat(w({ id: 'entity-names.tracks-count' }, { value: i.tracksCount }));
                        return (0, a.jsxs)('div', {
                            className: L().description,
                            'aria-label': l,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: L().likesCount,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, a.jsx)(p.Icon, { className: L().icon, variant: e, size: 'xxs' }),
                                        (0, a.jsx)(_.Caption, { variant: 'span', size: 'm', weight: 'medium', children: K(i.actualLikesCount) }),
                                    ],
                                }),
                                (0, a.jsxs)('div', {
                                    className: L().tracksCount,
                                    'aria-hidden': !0,
                                    children: [
                                        t,
                                        (0, a.jsx)(_.Caption, {
                                            variant: 'span',
                                            size: 'm',
                                            weight: 'medium',
                                            children: (0, a.jsx)(o.A, { id: 'entity-names.tracks-count', values: { value: K(i.tracksCount) } }),
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }, [w, K, S, i.actualLikesCount, i.isLiked, i.tracksCount]);
                return (0, a.jsxs)(v.Cj, {
                    ref: f,
                    'data-intersection-property-id': j,
                    className: (0, l.$)(v.$f.root, { [v.$f.root_disabled]: !i.isAvailable }, e),
                    'aria-label': i.title || w({ id: 'entity-names.playlist' }),
                    onClick: U,
                    ...(0, u.Am)(u.Kq.playlist.HORIZONTAL_PLAYLIST_CARD),
                    children: [H, (0, a.jsx)(v.ro, { isDisabled: !i.isAvailable, title: q, description: V }), (0, a.jsx)(P, { playlist: i, likeIconSize: h })],
                });
            });
        },
        9939: (t, e, i) => {
            'use strict';
            i.d(e, { M: () => a.NotFound });
            var a = i(91455);
        },
        11378: (t, e, i) => {
            'use strict';
            i.d(e, { TagNotFoundPage: () => n });
            var a = i(62936),
                l = i(19718),
                s = i(9939);
            let n = (0, l.PA)(() => (0, a.jsx)(s.M, {}));
        },
        20433: (t, e, i) => {
            'use strict';
            i.d(e, { PlaylistsCarousel: () => u });
            var a = i(62936),
                l = i(44020),
                s = i(23480),
                n = i(42561),
                r = i(85906),
                o = i(88587);
            let d = (t) => {
                    let {
                            forwardRef: e,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: u,
                            description: c,
                            playlists: m,
                            containerClassName: g,
                            className: p,
                            headerClassName: _,
                            viewAllActionLink: y,
                            headingVariant: v,
                            shouldSendAnalyticsOnLoaded: x,
                            ...C
                        } = t,
                        k = (0, n.fBs)();
                    return (
                        (0, l.useEffect)(() => {
                            x && !i && k();
                        }, [i, k, x]),
                        (0, a.jsx)(r.OY, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: p,
                            headerClassName: _,
                            containerClassName: g,
                            ref: e,
                            title: u,
                            description: c,
                            viewAllActionLink: y,
                            headingVariant: v,
                            ...C,
                            children:
                                null == m
                                    ? void 0
                                    : m.map((t, e) =>
                                          (0, a.jsx)(
                                              n.Bki,
                                              {
                                                  objectType: s.ky.Playlist,
                                                  objectId: t.id,
                                                  objectPosX: e + 1,
                                                  objectPosY: 1,
                                                  objectsCount: m.length,
                                                  children: (0, a.jsx)(o.PlaylistCard, { playlist: t, contentLinesCount: 3 }),
                                              },
                                              t.key,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, l.forwardRef)((t, e) => (0, a.jsx)(d, { forwardRef: e, ...t }));
        },
        30636: (t, e, i) => {
            'use strict';
            i.r(e), i.d(e, { default: () => n });
            var a = i(62936),
                l = i(69526),
                s = i(5144);
            let n = () => {
                let t = (0, l.useSearchParams)().get('tagId');
                return t || (0, l.notFound)(), (0, a.jsx)(s.oN, { tagId: t });
            };
        },
        36118: (t, e, i) => {
            'use strict';
            i.d(e, { SomethingWentWrong: () => y });
            var a = i(62936),
                l = i(79950),
                s = i(19718),
                n = i(44020),
                r = i(47480),
                o = i(26731),
                d = i(5099),
                u = i(85742),
                c = i(20418),
                m = i(42561),
                g = i(85906),
                p = i(52166),
                _ = i.n(p);
            let y = (0, s.PA)((t) => {
                let { className: e, withBackwardControl: i = !0 } = t,
                    { formatMessage: s } = (0, r.A)(),
                    p = s({ id: 'error-messages.something-went-wrong' });
                (0, m.CgZ)(p);
                let { sendRefreshEvent: y } = (0, m.cYT)(),
                    v = (0, n.useCallback)(() => {
                        y(), (window.location.href = m.Zyd.main.href);
                    }, [y]),
                    { contentRef: x } = (0, m.gKY)();
                return (0, a.jsxs)('div', {
                    className: (0, l.$)(_().root, e),
                    children: [
                        i &&
                            (0, a.jsx)(g.Lh, {
                                withBackwardFallback: '/',
                                className: (0, l.$)(_().navigation, { [_().navigation_desktop]: !x }),
                                withForwardControl: !1,
                            }),
                        (0, a.jsxs)('div', {
                            className: (0, l.$)(_().content, { [_().content_shrink]: !i }),
                            children: [
                                (0, a.jsx)(u.Icon, { className: _().icon, variant: 'attention', size: 'xxl' }),
                                (0, a.jsx)(c.Heading, { className: (0, l.$)(_().title, _().important), variant: 'h3', size: 'xs', children: p }),
                                (0, a.jsxs)(c.Caption, {
                                    className: (0, l.$)(_().text, _().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, a.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, a.jsx)(d.$, {
                                    onClick: v,
                                    className: _().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, a.jsxs)(c.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, a.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        37063: (t, e, i) => {
            Promise.resolve().then(i.bind(i, 30636));
        },
        37440: (t, e, i) => {
            'use strict';
            i.d(e, { L: () => u });
            var a,
                l = i(49327),
                s = i(44020),
                n = {
                    6699: (t, e, i) => {
                        Object.defineProperty(e, '__esModule', { value: !0 }), (e.useDebouncedToggle = void 0);
                        let a = i(352),
                            l = i(810);
                        e.useDebouncedToggle = (t) => {
                            let { delay: e, initialState: i, throttleTimeout: s } = t,
                                n = (0, l.useRef)(null),
                                [r, o] = (0, l.useState)(!!i),
                                d = (0, l.useMemo)(
                                    () =>
                                        (0, a.throttle)(() => {
                                            o(!i),
                                                n.current && window.clearTimeout(n.current),
                                                (n.current = window.setTimeout(() => {
                                                    o(!!i);
                                                }, e));
                                        }, s),
                                    [e, i, s],
                                ),
                                u = (0, l.useCallback)(() => {
                                    o(!!i), n.current && window.clearTimeout(n.current);
                                }, [i]);
                            return (
                                (0, l.useEffect)(
                                    () => () => {
                                        n.current && window.clearTimeout(n.current);
                                    },
                                    [],
                                ),
                                { state: r, handleDebouncedToggle: d, reset: u }
                            );
                        };
                    },
                    361: (t, e) => {
                        Object.defineProperty(e, '__esModule', { value: !0 }),
                            (e.getElementFromRefOrElement = void 0),
                            (e.getElementFromRefOrElement = (t) => {
                                if (void 0 !== t) {
                                    if (null === t || t instanceof HTMLElement) return t;
                                    if (null === t.current || t.current instanceof HTMLElement) return t.current;
                                }
                            });
                    },
                    352: (t) => {
                        t.exports = l;
                    },
                    810: (t) => {
                        t.exports = a || (a = i.t(s, 2));
                    },
                },
                r = {};
            function o(t) {
                var e = r[t];
                if (void 0 !== e) return e.exports;
                var i = (r[t] = { exports: {} });
                return n[t](i, i.exports, o), i.exports;
            }
            var d = {};
            (() => {
                Object.defineProperty(d, '__esModule', { value: !0 }), (d.useScroll = void 0);
                let t = o(810),
                    e = o(361),
                    i = o(6699);
                d.useScroll = (a) => {
                    let { onScroll: l, listenIsScrolling: s, elementRef: n } = a,
                        { state: r, handleDebouncedToggle: o } = (0, i.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                        d = (0, t.useCallback)(() => {
                            s && o(), null == l || l();
                        }, [s, o, l]);
                    return (
                        (0, t.useEffect)(() => {
                            let t = (0, e.getElementFromRefOrElement)(n);
                            if (null === t) return;
                            let i = null != t ? t : window,
                                a = { capture: !0, passive: !0 };
                            return i.addEventListener('scroll', d, a), () => i.removeEventListener('scroll', d, a);
                        }, [n, d]),
                        r
                    );
                };
            })(),
                d.__esModule;
            var u = d.useScroll;
        },
        40507: (t) => {
            t.exports = {
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
        52166: (t) => {
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
        54278: (t, e, i) => {
            'use strict';
            i.d(e, { TagPage: () => v });
            var a = i(62936),
                l = i(79950),
                s = i(19718),
                n = i(69526),
                r = i(44020),
                o = i(47480),
                d = i(20418),
                u = i(65438),
                c = i(92229),
                m = i(79670),
                g = i(42561),
                p = i(85906),
                _ = i(67804),
                y = i.n(_);
            let v = (0, s.PA)((t) => {
                var e, i, s;
                let { tagId: _ } = t,
                    {
                        tag: v,
                        settings: { isMobile: x },
                    } = (0, g.Pjs)(),
                    { formatMessage: C } = (0, o.A)(),
                    { contentScrollRef: k, setContentScrollRef: h } = (0, g.gKY)(),
                    P = (0, g.W6M)();
                _ || (0, n.notFound)();
                let f = (0, r.useCallback)(
                    (t) => {
                        v.getPlaylists({ page: t, pageSize: 20 });
                    },
                    [v],
                );
                v.isNotFound && (0, n.notFound)(),
                    (0, r.useEffect)(
                        () => () => {
                            v.reset();
                        },
                        [v],
                    );
                let L = (0, r.useMemo)(() => ({ Footer: () => (0, a.jsx)(p.A, { children: (0, a.jsx)(p.wi, { className: y().footer }) }) }), []);
                return ((0, g.Jzs)(v.isResolved),
                (0, g.XcE)(v.pagesLoader, f),
                v.isNeededToLoad && (0, r.use)(v.getTag({ id: _, page: 0, pageSize: 20 })),
                v.isSomethingWrong)
                    ? (0, a.jsx)(u.w, {})
                    : (0, a.jsx)(g.nVz, {
                          pageId: g._Q$.TAG,
                          children: (0, a.jsx)(c.hO, {
                              scrollElement: k,
                              outerTitle: v.title,
                              children: (0, a.jsxs)('div', {
                                  className: y().root,
                                  children: [
                                      (0, a.jsx)(p.Y9, {
                                          variant: p.Vw.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: P.canBack,
                                          children: (0, a.jsx)(d.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: v.title }),
                                      }),
                                      (0, a.jsx)(p.$$, {
                                          className: (0, l.$)(y().scrollContainer, y().important),
                                          customComponents: L,
                                          itemContentCallback: (t) => {
                                              let e = v.playlists[t],
                                                  i = C({ id: 'loading-messages.entity-is-loading' }, { entityName: C({ id: 'entity-names.playlist' }) });
                                              return e ? (0, a.jsx)(m.B6, { playlist: e, contentLinesCount: 3 }, e.key) : (0, a.jsx)(p.Vt, { 'aria-label': i });
                                          },
                                          totalCount: null != (i = null == v || null == (e = v.pagesLoader.pager) ? void 0 : e.total) ? i : 0,
                                          onGetDataByPage: f,
                                          pageSize: 20,
                                          totalRequests: null != (s = null == v ? void 0 : v.pagesLoader.requestsCount) ? s : 0,
                                          listClassName: y().content,
                                          itemClassName: y().item,
                                          handleRef: h,
                                          context: { listAriaLabel: C({ id: 'mixes.albums-list' }, { genreName: v.title || '' }) },
                                          isMobileLayout: x,
                                          useWindowScroll: x,
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
        },
        65438: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => a.SomethingWentWrong });
            var a = i(36118);
        },
        67804: (t) => {
            t.exports = {
                root: 'TagPage_root__EWN9A',
                scrollContainer: 'TagPage_scrollContainer__lvG_1',
                important: 'TagPage_important__Jq37E',
                content: 'TagPage_content__rUC_l',
                footer: 'TagPage_footer__W0mZr',
                item: 'TagPage_item__X_lW7',
            };
        },
        71318: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ControlsBar_root__mf9o_',
                item: 'ControlsBar_item__4YJMp',
                item_buttonArrow: 'ControlsBar_item_buttonArrow__9hTqa',
                controls: 'ControlsBar_controls__DcFpX',
                likeIcon: 'ControlsBar_likeIcon__g8y02',
                trailerIcon: 'ControlsBar_trailerIcon__iH6eY',
                controls_disabled: 'ControlsBar_controls_disabled___hlf6',
            };
        },
        78980: (t, e, i) => {
            'use strict';
            var a;
            i.d(e, { U: () => a }),
                (function (t) {
                    (t.UNKNOWN = 'unknown'), (t.MALE = 'male'), (t.FEMALE = 'female');
                })(a || (a = {}));
        },
        79670: (t, e, i) => {
            'use strict';
            i.d(e, {
                pA: () => h.EmptyPlaylistBlock,
                vf: () => P.HorizontalPlaylistCard,
                B6: () => f.PlaylistCard,
                BL: () => C,
                IP: () => k,
                EC: () => L.PlaylistsCarousel,
                bk: () => s,
                ZC: () => d,
                Ew: () => c,
                pd: () => g,
            });
            var a = i(51606),
                l = i(42561);
            let s = (t) => {
                var e, i;
                let { playlist: s, generatedPlaylistType: n, likesCount: r, trailer: o, tracksCount: d } = t;
                return (0, a.wg)({
                    isAvailable: null == (i = s.available) || i,
                    uuid: s.playlistUuid,
                    title: s.title,
                    uid: s.uid,
                    kind: s.kind,
                    coverUri: null == (e = s.cover) ? void 0 : e.uri,
                    generatedPlaylistType: n,
                    likesCount: r,
                    tracksCount: d,
                    trailer: (0, l.mxW)(o),
                });
            };
            var n = i(69526),
                r = i(44020);
            (0, r.cache)(async (t, e) => {
                var i;
                let a;
                try {
                    let { container: i, backendHostTld: s, locale: n, host: r, fullUrl: o, isRSC: d, requestUrl: u } = await (0, l.IhE)();
                    if (d) return { playlist: void 0, backendHostTld: s, locale: n, host: r, fullUrl: o, requestUrl: u };
                    let c = i.get(l._19);
                    a = {
                        playlist: await c.getPlaylistWithTracksIds({ userId: t, playlistKind: e, resumeStream: !1 }),
                        backendHostTld: s,
                        locale: n,
                        host: r,
                        fullUrl: o,
                        requestUrl: u,
                    };
                } catch (t) {
                    return (0, l.tfF)(t, () => ({ playlist: void 0, ...(0, l.Bj3)() }));
                }
                return (null == (i = a.playlist) ? void 0 : i.error) === 'not-found' && (0, n.notFound)(), a;
            }),
                (0, r.cache)(async (t) => {
                    var e;
                    let i;
                    (0, l.sU0)(t) || (0, n.notFound)();
                    try {
                        let { container: e, backendHostTld: a, locale: s, host: n, fullUrl: r, isRSC: o, requestUrl: d } = await (0, l.IhE)();
                        if (o) return { playlist: void 0, backendHostTld: a, locale: s, host: n, fullUrl: r, requestUrl: d };
                        let u = e.get(l.qNr);
                        i = {
                            playlist: await u.getPlaylist({ playlistUuid: t, resumeStream: !1, richTracks: !1 }),
                            backendHostTld: a,
                            locale: s,
                            host: n,
                            fullUrl: r,
                            requestUrl: d,
                        };
                    } catch (t) {
                        return (0, l.tfF)(t, () => ({ playlist: void 0, ...(0, l.Bj3)() }));
                    }
                    return (null == (e = i.playlist) ? void 0 : e.error) === 'not-found' && (0, n.notFound)(), i;
                });
            var o = i(25358);
            let d = (t) =>
                (0, a.wg)({
                    ...(0, o.jX)(t),
                    owner: t.owner ? ((t) => ({ uid: t.uid, login: t.login, name: t.name, sex: t.sex, verified: t.verified }))(t.owner) : void 0,
                    description: t.description,
                    tags: t.tags,
                    modified: t.modified,
                    madeFor: t.madeFor ? ((t) => (0, a.wg)({ caseForms: t.caseForms ? (0, l.NH4)(t.caseForms) : null }))(t.madeFor) : null,
                });
            var u = i(81628);
            let c = (t) => {
                var e, i;
                return (0, a.wg)({ ...(0, o.jX)(t), artists: null != (i = null == t || null == (e = t.artists) ? void 0 : e.map(u.dM)) ? i : [] });
            };
            var m = i(43026);
            let g = (t) => {
                var e, i;
                return (0, a.wg)({ ...(0, o.jX)(t), tracks: null != (i = null == t || null == (e = t.tracks) ? void 0 : e.map(m.Rw)) ? i : [] });
            };
            var p = i(54690);
            let _ = a.gK.model('PlaylistOwner', { caseForms: a.gK.maybeNull(p.lg) });
            var y = i(78980);
            let v = a.gK.model('PlaylistOwner', {
                    uid: a.gK.number,
                    login: a.gK.string,
                    name: a.gK.string,
                    sex: a.gK.enumeration(Object.values(y.U)),
                    verified: a.gK.boolean,
                }),
                x = a.gK.model('PlaylistTag', { id: a.gK.string, value: a.gK.string }),
                C = o.$o
                    .props({
                        owner: a.gK.maybe(v),
                        modified: a.gK.string,
                        description: a.gK.maybe(a.gK.string),
                        tags: a.gK.maybeNull(a.gK.array(x)),
                        madeFor: a.gK.maybeNull(_),
                    })
                    .views((t) => ({
                        get seeds() {
                            var e;
                            return ['playlist:'.concat(null == (e = t.owner) ? void 0 : e.login, '_').concat(t.kind)];
                        },
                        get tagsString() {
                            let { experiments: e } = (0, a.Zn)(t);
                            if (!e.checkExperiment(l.zal.WebEditorsFeatures, 'on') || !Array.isArray(t.tags) || !t.tags.length) return null;
                            return t.tags.map((t) => t.value).join(', ');
                        },
                    }))
                    .actions((t) => ({
                        changeDescription: (0, a.L3)(function* (e) {
                            if (!(0, a._n)(t)) return l.FlZ.ERROR;
                            if (t.description === e) return l.FlZ.OK;
                            if (e.length > o.iz) return l.FlZ.ERROR;
                            let { usersResource: i, modelActionsLogger: s } = (0, a._$)(t);
                            if (t.canUserChange) {
                                let a = t.description;
                                t.description = e;
                                try {
                                    let a = yield i.changePlaylistDescription({ description: e, userId: t.uid, playlistKind: t.kind });
                                    return (t.description = a.description), l.FlZ.OK;
                                } catch (e) {
                                    (t.description = a), s.error(e);
                                }
                            }
                            return l.FlZ.ERROR;
                        }),
                        changePlaylistCover: (0, a.L3)(function* (e) {
                            if (!(0, a._n)(t)) return l.FlZ.ERROR;
                            let { usersResource: i, modelActionsLogger: s } = (0, a._$)(t);
                            try {
                                let a = yield i.uploadPlaylistCover({ userId: t.uid, formData: e, playlistKind: t.kind });
                                return (t.coverUri = a.cover.uri), l.FlZ.OK;
                            } catch (t) {
                                s.error(t);
                            }
                            return l.FlZ.ERROR;
                        }),
                    }))
                    .named('PlaylistMeta'),
                k = o.Zq.props({ artists: a.gK.maybe(a.gK.array(u.PK)) });
            var h = i(95565),
                P = i(9066),
                f = i(88587),
                L = i(20433);
        },
        88587: (t, e, i) => {
            'use strict';
            i.d(e, { PlaylistCard: () => b });
            var a = i(62936),
                l = i(79950),
                s = i(19718),
                n = i(44020),
                r = i(47480),
                o = i(23480),
                d = i(8669),
                u = i(81959),
                c = i(59935),
                m = i(60188),
                g = i(16258),
                p = i(85742),
                _ = i(56721),
                y = i(20418),
                v = i(81628),
                x = i(25358),
                C = i(42561),
                k = i(85906),
                h = i(7103),
                P = i(64304),
                f = i(35250);
            let L = (0, s.PA)((t) => {
                var e;
                let { playlist: i, onOpenChange: l, open: s, ...n } = t,
                    { shouldShowBuySubscriptionModal: u, showBuySubscriptionModal: m } = (0, C.qBP)(),
                    {
                        experiments: g,
                        settings: { isMobile: p },
                        trailer: _,
                        user: y,
                    } = (0, C.Pjs)(),
                    v = (0, x.KX)(i),
                    h = (0, x.A7)(i),
                    L = (0, C.Ftl)(),
                    { formatMessage: j } = (0, r.A)(),
                    N = (0, C.PT7)(),
                    b = g.checkExperiment(C.zal.WebEditorsFeatures, 'on'),
                    E = (0, f.A_)({ entityVariant: C.DwC.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, C.NBO)(s);
                let A = (0, c.c)(() => {
                    if (u) return void m();
                    N() || (_.openPlaylistTrailer(i.id), L(o.ky.Playlist, i.id));
                });
                return (0, a.jsxs)(P.W1, {
                    title: i.title,
                    onOpenChange: l,
                    open: s,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: j({ id: 'interface-actions.context-menu' }),
                    containerProps: (0, d.Am)(d.Kq.playlist.PLAYLIST_CONTEXT_MENU),
                    ...n,
                    children: [
                        b && (0, a.jsx)(f.dx, { entityVariant: C.DwC.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : E }),
                        !p && (0, a.jsx)(k.L1, { onClick: h, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, a.jsx)(k.TW, { onClick: v, isLiked: i.isLiked, disabled: !y.isAuthorized }),
                        (null == (e = i.trailer) ? void 0 : e.isAvailable) && (0, a.jsx)(k.No, { onClick: A, disabled: !i.isAvailable }),
                    ],
                });
            });
            var j = i(40507),
                N = i.n(j);
            let b = (0, s.PA)((t) => {
                let { className: e, playlist: i, children: s, contentLinesCount: P, customDescription: f } = t,
                    { ref: j, intersectionPropertyId: b } = (0, C.nMI)(),
                    {
                        trailer: E,
                        user: A,
                        paywall: { modal: S },
                    } = (0, C.Pjs)(),
                    { from: T, utmLink: w } = (0, C.fyy)({ contextId: i.uuid, contextType: u.K.Playlist }),
                    { formatMessage: K } = (0, r.A)(),
                    { sendLikeSearchFeedback: F, sendNavigateSearchFeedback: B, sendPlaySearchFeedback: z } = (0, C.zEv)(),
                    [I, R] = (0, n.useState)(!1),
                    [O, M] = (0, n.useState)(!1),
                    [W, $] = (0, n.useState)(!1),
                    D = (0, h.r)(i),
                    X = (0, x.KX)(i),
                    Y = (0, x.A7)(i),
                    U = (0, C.NKK)(),
                    G = (0, C.brA)(),
                    Z = (0, C.ZpR)(i.url),
                    H = (0, C.Ftl)(),
                    q = (0, C.PT7)(),
                    V = (0, c.c)((t) => {
                        if ((t.stopPropagation(), q())) return void t.preventDefault();
                        E.setUtmLink(w), E.openPlaylistTrailer(i.id), H(o.ky.Playlist, i.id);
                    }),
                    [Q, J] = (0, n.useState)(!1),
                    { isPlaying: tt, togglePlay: te } = (0, C.Dx4)({
                        playContextParams: { contextData: { type: u.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: T, utmLink: w }, loadContextMeta: !0 },
                    }),
                    ti = (0, c.c)(() => {
                        U({ to: o.QT.PlaylistScreen }), null == B || B();
                    }),
                    ta = (0, c.c)((t) => {
                        ti(), Z(t);
                    }),
                    tl = (0, C.NPu)(),
                    ts = (0, c.c)(() => {
                        if (!q()) {
                            if (tl) return void S.open();
                            I || tt || (R(!0), null == z || z()), te(), G(!tt);
                        }
                    }),
                    tn = (0, c.c)(() => {
                        O || i.isLiked || (M(!0), null == F || F()), X();
                    }),
                    tr = (0, c.c)((t) => {
                        t.preventDefault(), t.stopPropagation();
                    }),
                    to = (0, c.c)((t) => {
                        $(t), J(t);
                    }),
                    td = (0, n.useMemo)(() => {
                        var t;
                        return f
                            ? (0, a.jsx)(y.Caption, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: f }, i.getKey('description'))
                            : (null == (t = i.artists) ? void 0 : t.length)
                              ? (0, a.jsx)(
                                    v.iQ,
                                    { className: N().artists, artists: i.artists, lineClamp: 1, linkClassName: N().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [f, i]),
                    tu = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, a.jsx)(
                                k.cy,
                                {
                                    className: (0, l.$)(N().likeButton, N().control),
                                    isLiked: i.isLiked,
                                    onClick: tn,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !A.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    tc = (0, n.useMemo)(() => {
                        var t;
                        if (null == i || null == (t = i.trailer) ? void 0 : t.isAvailable)
                            return (0, a.jsx)(
                                k.nE,
                                {
                                    children: (0, a.jsx)(
                                        k.kJ,
                                        { className: (0, l.$)(N().trailerButton, N().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: V },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [V, i]),
                    tm = (0, n.useMemo)(
                        () =>
                            (0, a.jsx)(
                                k.O0,
                                { onClick: Y, isPinned: i.isPinned, className: (0, l.$)(N().pinButton, N().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [Y, i],
                    ),
                    tg = (0, n.useMemo)(
                        () =>
                            (0, a.jsx)(_.Paper, {
                                className: N().cover,
                                radius: 's',
                                withShadow: !0,
                                ...(0, d.Am)(d.Kq.playlist.PLAYLIST_CARD),
                                children: (0, a.jsxs)('div', {
                                    className: N().coverBlock,
                                    onClick: ta,
                                    children: [
                                        (0, a.jsx)(k.BW, {
                                            className: N().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: D,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, a.jsx)(g.hg, {
                                            isVisible: W || Q,
                                            className: N().controls,
                                            playControl: (0, a.jsx)(
                                                k.DM,
                                                {
                                                    className: (0, l.$)(N().playButton, N().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: ts,
                                                    isPlaying: tt,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: tu,
                                            menuControl: (0, a.jsx)(
                                                L,
                                                {
                                                    playlist: i,
                                                    onOpenChange: to,
                                                    open: W,
                                                    onClick: tr,
                                                    className: (0, l.$)(N().menuButton, N().control),
                                                    icon: (0, a.jsx)(p.Icon, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    ...(0, d.Am)(d.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON),
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: tm,
                                            trailerControl: tc,
                                        }),
                                    ],
                                }),
                            }),
                        [ta, i, D, W, Q, ts, tt, tu, to, tr, tm, tc],
                    ),
                    tp = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, a.jsxs)(g.MN, {
                    ref: j,
                    'aria-label': D,
                    className: (0, l.$)(N().root, e),
                    title: (0, a.jsx)(y.Caption, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        ...(0, d.Am)(d.Kq.playlist.PLAYLIST_TITLE),
                        children: (0, a.jsx)(k.N_, { className: N().titleLink, href: i.url, onClick: ti, children: i.title }),
                    }),
                    srTitle: (0, a.jsx)(k.N_, { href: i.url, onClick: ti, children: i.title }),
                    'data-intersection-property-id': b,
                    contentLinesCount: P,
                    view: tg,
                    description: td,
                    ...(0, d.Am)(d.Kq.playlist.PLAYLIST_ITEM),
                    children: [
                        tp &&
                            (0, a.jsx)(k.xW, {
                                ariaLabel: K({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: X,
                            }),
                        s,
                    ],
                });
            });
        },
        88933: (t) => {
            t.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        91455: (t, e, i) => {
            'use strict';
            i.d(e, { NotFound: () => _ });
            var a = i(62936),
                l = i(79950),
                s = i(19718),
                n = i(26731),
                r = i(5099),
                o = i(85742),
                d = i(20418),
                u = i(42561),
                c = i(85906),
                m = i(44020),
                g = i(88933),
                p = i.n(g);
            let _ = (0, s.PA)((t) => {
                let { className: e, title: i, description: s, iconVariant: g = 'musicLogo', iconClassName: _, iconSize: y } = t,
                    { contentRef: v } = (0, u.gKY)(),
                    x = (0, u.ZpR)(u.Zyd.main.href);
                (0, u.LZB)();
                let { handleNavigateToMain: C } = (0, u.D5F)(x);
                return (
                    (0, u.NBO)(!0),
                    !(function () {
                        let { location: t } = (0, u.Pjs)();
                        (0, m.useEffect)(
                            () => (
                                t.setNotFound(!0),
                                () => {
                                    t.setNotFound(!1);
                                }
                            ),
                            [t],
                        );
                    })(),
                    (0, a.jsxs)('div', {
                        className: (0, l.$)(p().root, { [p().root_desktop]: !v }, e),
                        children: [
                            (0, a.jsx)(c.Lh, { withBackwardFallback: '/', className: p().navigation, withForwardControl: !1 }),
                            (0, a.jsxs)('div', {
                                className: p().content,
                                children: [
                                    (0, a.jsx)(o.Icon, { className: (0, l.$)(p().icon, _), variant: g, size: y }),
                                    (0, a.jsx)(d.Heading, {
                                        className: (0, l.$)(p().title, p().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: i || (0, a.jsx)(n.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, a.jsx)(d.Caption, {
                                        className: (0, l.$)(p().text, p().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: s || (0, a.jsx)(n.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, a.jsx)(r.$, {
                                        onClick: C,
                                        className: p().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(d.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, a.jsx)(n.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        92229: (t, e, i) => {
            'use strict';
            i.d(e, { hO: () => m, jr: () => g, jp: () => p, QZ: () => l }), i(21485);
            var a = i(44020);
            let l = (t, e, i) => {
                let l = null != i && i;
                return {
                    topColorStyle: (0, a.useMemo)(() => {
                        if (void 0 === e) return;
                        let i = l ? 93 : 17,
                            a = e - i;
                        return { '--average-color-background': t, transform: 'translateY('.concat(e >= i ? 0 : a, 'px)'), opacity: 1 };
                    }, [e, l, t]),
                    headerStyle: (0, a.useMemo)(() => ({ '--average-color-background': t }), [t]),
                };
            };
            var s = i(62936),
                n = i(30643),
                r = i(19718),
                o = i(37440),
                d = i(42561),
                u = i(85906);
            let c = (t) => {
                    let { element: e, scrollTop: i, isMobile: a } = t,
                        l = 0.6 * e.clientHeight;
                    return i + (a ? 60 : 76) >= e.offsetTop + l;
                },
                m = (0, r.PA)((t) => {
                    let { children: e, scrollElement: i, outerTitle: l = '', headerElement: r, headerThreshold: m, shouldHideHeader: g } = t,
                        [p, _] = (0, a.useState)(l),
                        [y, v] = (0, a.useState)(null),
                        [x, C] = (0, a.useState)(null),
                        [k, h] = (0, a.useState)(null),
                        [P, f] = (0, a.useState)(!1),
                        [L, j] = (0, a.useState)(!1),
                        [N, b] = (0, a.useState)(!1),
                        [E, A] = (0, a.useState)(!1),
                        {
                            settings: { isMobile: S },
                        } = (0, d.Pjs)();
                    (0, a.useLayoutEffect)(() => {
                        _(l);
                    }, [l]);
                    let T = (0, a.useCallback)(() => {
                        let t = null != m ? m : 10,
                            e = r ? Number(r.offsetTop) - t : t;
                        e < 0 && (e = 0);
                        let a = (t) => {
                            b(t > e),
                                g && A(t > 30),
                                (null == y ? void 0 : y.current) && f(c({ element: null == y ? void 0 : y.current, scrollTop: t, isMobile: S })),
                                (null == x ? void 0 : x.current) && j(c({ element: null == x ? void 0 : x.current, scrollTop: t, isMobile: S }));
                        };
                        S ? a(window.scrollY) : i && a(i.scrollTop);
                    }, [m, r, S, g, y, x, i]);
                    (0, a.useEffect)(() => {
                        S ? 0 === window.scrollY && b(!1) : (i && 0 !== i.scrollTop) || b(!1);
                    }, [i, null == i ? void 0 : i.scrollTop, S]);
                    let w = (0, a.useMemo)(() => (S ? { onScroll: (0, n.A)(T, 200) } : { onScroll: (0, n.A)(T, 200), elementRef: i }), [T, i, S]);
                    (0, o.L)(w);
                    let K = (0, a.useMemo)(
                        () => ({
                            title: p,
                            setTitle: _,
                            titleElement: y,
                            scrollElement: S ? null : i,
                            setTitleElement: v,
                            childElement: x,
                            setChildElement: C,
                            child: k,
                            setChild: h,
                            isScrolledChild: L,
                            isScrolledTitle: P,
                            isScrolling: N,
                            isHeaderHidden: E,
                        }),
                        [p, P, y, i, N, S, k, x, L, E],
                    );
                    return (0, s.jsx)(u.B9.Provider, { value: K, children: e });
                }),
                g = (t) => {
                    let { children: e, child: i, className: l } = t,
                        { setChildElement: n, setChild: r } = (0, a.useContext)(u.B9),
                        o = (0, a.useRef)(null);
                    return (
                        (0, a.useEffect)(() => {
                            (null == o ? void 0 : o.current) && n(o), i && r(i);
                        }, [o, i, n, r]),
                        (0, a.useEffect)(
                            () => () => {
                                r(null);
                            },
                            [r],
                        ),
                        (0, s.jsx)('div', { ref: o, className: l, children: e })
                    );
                },
                p = (t) => {
                    let { children: e, title: i, className: l } = t,
                        { setTitleElement: n, setTitle: r } = (0, a.useContext)(u.B9),
                        o = (0, a.useRef)(null);
                    return (
                        (0, a.useEffect)(() => {
                            (null == o ? void 0 : o.current) && n(o), i && r(i);
                        }, [o, i, n, r]),
                        (0, a.useEffect)(
                            () => () => {
                                r('');
                            },
                            [r],
                        ),
                        (0, s.jsx)('div', { ref: o, className: l, children: e })
                    );
                };
        },
        92339: (t) => {
            t.exports = {
                root: 'EmptyPlaylistBlock_root__wpA0j',
                iconBackground: 'EmptyPlaylistBlock_iconBackground__pnUlz',
                title: 'EmptyPlaylistBlock_title__pQQLf',
                subtitle: 'EmptyPlaylistBlock_subtitle__P4Q7x',
            };
        },
        95565: (t, e, i) => {
            'use strict';
            i.d(e, { EmptyPlaylistBlock: () => m });
            var a = i(62936),
                l = i(79950),
                s = i(44020),
                n = i(26731),
                r = i(8669),
                o = i(85742),
                d = i(20418),
                u = i(92339),
                c = i.n(u);
            let m = (t) => {
                let { className: e, isEmptySearch: i } = t,
                    u = (0, s.useMemo)(
                        () => (i ? (0, a.jsx)(n.A, { id: 'search-results.not-found-title' }) : (0, a.jsx)(n.A, { id: 'error-messages.empty-collection-playlist-title' })),
                        [i],
                    ),
                    m = (0, s.useMemo)(
                        () =>
                            i
                                ? (0, a.jsx)(n.A, { id: 'search-results.not-found-description' })
                                : (0, a.jsx)(n.A, { id: 'error-messages.empty-collection-playlist-description' }),
                        [i],
                    );
                return (0, a.jsxs)('div', {
                    className: (0, l.$)(c().root, e),
                    ...(0, r.Am)(r.Kq.playlist.PLAYLIST_EMPTY_BLOCK),
                    children: [
                        (0, a.jsx)('div', {
                            className: c().iconBackground,
                            children: (0, a.jsx)(o.Icon, { variant: 'search', size: 'l', className: c().icon, ...(0, r.Am)(r.Kq.playlist.PLAYLIST_EMPTY_BLOCK_ICON) }),
                        }),
                        (0, a.jsx)(d.Heading, { variant: 'h3', size: 'xs', className: c().title, ...(0, r.Am)(r.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TITLE), children: u }),
                        (0, a.jsx)(d.Caption, {
                            variant: 'span',
                            size: 'l',
                            className: c().subtitle,
                            ...(0, r.Am)(r.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TEXT),
                            children: m,
                        }),
                    ],
                });
            };
        },
    },
    (t) => {
        t.O(0, [85, 260, 3196, 403, 2537, 1970, 2670, 4297, 1311, 7764, 6706, 2899, 5419, 2561, 5906, 4690, 9154, 1009, 4670, 7358], () => t((t.s = 37063))),
            (_N_E = t.O());
    },
]);
