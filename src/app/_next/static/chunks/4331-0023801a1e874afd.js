(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4331],
    {
        3291: (e) => {
            e.exports = {
                description: 'HorizontalPlaylistCard_description__KYHZF',
                likesCount: 'HorizontalPlaylistCard_likesCount__rgUhr',
                tracksCount: 'HorizontalPlaylistCard_tracksCount__ZdjzM',
                icon: 'HorizontalPlaylistCard_icon__LHymu',
            };
        },
        7103: (e, i, t) => {
            'use strict';
            t.d(i, { r: () => s });
            var r = t(44020),
                n = t(47480);
            let s = (e) => {
                let { formatMessage: i } = (0, n.A)();
                return (0, r.useMemo)(() => {
                    let t = '';
                    e.isLiked && !e.actualLikesCount
                        ? (t = i({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (t =
                              e.actualLikesCount > 0
                                  ? i({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : i({ id: 'entity-names.likes-counter-empty' }));
                    let r = i({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(r, ' ').concat(t);
                }, [i, e]);
            };
        },
        9066: (e, i, t) => {
            'use strict';
            t.d(i, { HorizontalPlaylistCard: () => j });
            var r = t(62936),
                n = t(79950),
                s = t(19718),
                o = t(44020),
                l = t(47480),
                a = t(26731),
                d = t(23480),
                m = t(8669),
                v = t(81959),
                h = t(59935),
                c = t(49923),
                P = t(85742),
                u = t(20418),
                b = t(42561),
                p = t(85906),
                _ = t(7103),
                y = t(25358),
                f = t(71318),
                g = t.n(f);
            let x = (0, s.PA)((e) => {
                var i;
                let { className: t, playlist: s, likeIconSize: l = 'xxs' } = e,
                    { user: a, trailer: m } = (0, b.Pjs)(),
                    v = (0, b.PT7)(),
                    { sendLikeSearchFeedback: c } = (0, b.zEv)(),
                    u = (0, y.KX)(s),
                    [_, f] = (0, o.useState)(!1),
                    x = (0, h.c)(async () => {
                        _ || s.isLiked || (f(!0), null == c || c()), await u();
                    }),
                    k = (0, b.Ftl)(),
                    C = (0, h.c)((e) => {
                        if ((e.stopPropagation(), v())) return void e.preventDefault();
                        m.openPlaylistTrailer(s.id), k(d.ky.Playlist, s.id);
                    });
                return (0, r.jsxs)('div', {
                    className: (0, n.$)(g().root, g().controls, t, { [g().controls_disabled]: !s.isAvailable }),
                    children: [
                        s.isAvailable &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(p.aQ, {
                                        fallback: (0, r.jsx)(p.cy, {
                                            size: 'xs',
                                            iconSize: l,
                                            className: (0, n.$)(g().item, g().likeIcon),
                                            isLiked: s.isLiked,
                                            onClick: x,
                                            disabled: !a.isAuthorized,
                                        }),
                                    }),
                                    (null == (i = s.trailer) ? void 0 : i.isAvailable) &&
                                        (0, r.jsx)(p.aQ, {
                                            fallback: (0, r.jsx)(p.kJ, {
                                                className: (0, n.$)(g().item, g().trailerIcon),
                                                iconSize: 'xs',
                                                variant: 'text',
                                                onClick: C,
                                                withRipple: !1,
                                            }),
                                        }),
                                ],
                            }),
                        (0, r.jsx)('div', {
                            className: (0, n.$)(g().item, g().item_buttonArrow),
                            children: (0, r.jsx)(P.Icon, { className: p.$f.buttonArrow, variant: 'arrowRight', size: 'xs' }),
                        }),
                    ],
                });
            });
            var k = t(3291),
                C = t.n(k);
            let j = (0, s.PA)((e) => {
                let { className: i, playlist: t, pageId: s, coverClassName: y, playButtonIconSize: f, likeIconSize: g } = e,
                    { ref: k, intersectionPropertyId: j } = (0, b.nMI)(),
                    { from: N } = (0, b.fyy)({ pageId: s }),
                    [L, A] = (0, o.useState)(!1),
                    w = (0, b.brA)(),
                    F = (0, _.r)(t),
                    K = t.title || '',
                    { formatMessage: T, formatNumber: B } = (0, l.A)(),
                    z = (0, b.PT7)(),
                    { sendNavigateSearchFeedback: S, sendPlaySearchFeedback: E } = (0, b.zEv)(),
                    I = (0, b.NKK)(),
                    {
                        paywall: { modal: M },
                    } = (0, b.Pjs)(),
                    O = (0, b.NPu)(),
                    {
                        isPlaying: W,
                        isCurrent: $,
                        togglePlay: R,
                    } = (0, b.Dx4)({ playContextParams: { contextData: { type: v.K.Playlist, meta: { id: t.id, uuid: t.uuid }, from: N }, loadContextMeta: !0 } }),
                    D = (0, b.ZpR)(t.url),
                    Y = (0, h.c)((e) => {
                        null == S || S(), I({ to: d.QT.PlaylistScreen }), e.preventDefault(), D(e);
                    }),
                    Z = (0, h.c)(() => {
                        if (!z()) {
                            if (O) return void M.open();
                            L || W || (A(!0), null == E || E()), R(), w(!W);
                        }
                    }),
                    U = (0, h.c)((e) => {
                        (0, c.P)(e, p.$f.ripple), Y(e);
                    }),
                    H = (0, h.c)((e) => {
                        e.stopPropagation(), Y(e);
                    }),
                    q = (0, o.useCallback)(
                        (e) =>
                            (0, r.jsx)(p.q1, {
                                isAvailable: t.isAvailable,
                                isDisliked: !1,
                                coverUri: t.coverUri,
                                title: K,
                                className: (0, n.$)(p.$f.playButtonCell, y),
                                alt: T({ id: 'entity-names.playlist-name' }, { playlistName: K }),
                                radius: 'xs',
                                ...e,
                            }),
                        [t, K, y, T],
                    ),
                    X = null == q ? void 0 : q({ onPlayButtonClick: Z, isPlaying: W, isCurrent: $, playButtonIconSize: f }),
                    G = (0, o.useMemo)(
                        () =>
                            t.url && t.isAvailable
                                ? (0, r.jsx)(p.N_, { className: (0, n.$)(p.$f.text, p.$f.titleLink), href: t.url, onClick: H, children: K })
                                : (0, r.jsx)(u.Caption, { className: (0, n.$)(p.$f.text, p.$f.titleText), size: 'm', variant: 'div', type: 'text', children: K }),
                        [H, t.isAvailable, t.url, K],
                    ),
                    Q = (0, o.useMemo)(() => {
                        if (void 0 === t.actualLikesCount || void 0 === t.tracksCount) return;
                        let e = (0, r.jsx)(u.Caption, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                            i = t.isLiked ? 'likedVariant' : 'likeVariant',
                            n = ''.concat(F, ' ').concat(T({ id: 'entity-names.tracks-count' }, { value: t.tracksCount }));
                        return (0, r.jsxs)('div', {
                            className: C().description,
                            'aria-label': n,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: C().likesCount,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, r.jsx)(P.Icon, { className: C().icon, variant: i, size: 'xxs' }),
                                        (0, r.jsx)(u.Caption, { variant: 'span', size: 'm', weight: 'medium', children: B(t.actualLikesCount) }),
                                    ],
                                }),
                                (0, r.jsxs)('div', {
                                    className: C().tracksCount,
                                    'aria-hidden': !0,
                                    children: [
                                        e,
                                        (0, r.jsx)(u.Caption, {
                                            variant: 'span',
                                            size: 'm',
                                            weight: 'medium',
                                            children: (0, r.jsx)(a.A, { id: 'entity-names.tracks-count', values: { value: B(t.tracksCount) } }),
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }, [T, B, F, t.actualLikesCount, t.isLiked, t.tracksCount]);
                return (0, r.jsxs)(p.Cj, {
                    ref: k,
                    'data-intersection-property-id': j,
                    className: (0, n.$)(p.$f.root, { [p.$f.root_disabled]: !t.isAvailable }, i),
                    'aria-label': t.title || T({ id: 'entity-names.playlist' }),
                    onClick: U,
                    ...(0, m.Am)(m.Kq.playlist.HORIZONTAL_PLAYLIST_CARD),
                    children: [X, (0, r.jsx)(p.ro, { isDisabled: !t.isAvailable, title: G, description: Q }), (0, r.jsx)(x, { playlist: t, likeIconSize: g })],
                });
            });
        },
        10076: (e, i, t) => {
            'use strict';
            Object.defineProperty(i, '__esModule', { value: !0 }),
                Object.defineProperty(i, 'default', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                });
            let r = t(36283)._(t(23772));
            function n(e, i) {
                var t;
                let n = {};
                'function' == typeof e && (n.loader = e);
                let s = { ...n, ...i };
                return (0, r.default)({ ...s, modules: null == (t = s.loadableGenerated) ? void 0 : t.modules });
            }
            ('function' == typeof i.default || ('object' == typeof i.default && null !== i.default)) &&
                void 0 === i.default.__esModule &&
                (Object.defineProperty(i.default, '__esModule', { value: !0 }), Object.assign(i.default, i), (e.exports = i.default));
        },
        20433: (e, i, t) => {
            'use strict';
            t.d(i, { PlaylistsCarousel: () => m });
            var r = t(62936),
                n = t(44020),
                s = t(23480),
                o = t(42561),
                l = t(85906),
                a = t(88587);
            let d = (e) => {
                    let {
                            forwardRef: i,
                            isShimmerVisible: t,
                            isShimmerActive: d,
                            title: m,
                            description: v,
                            playlists: h,
                            containerClassName: c,
                            className: P,
                            headerClassName: u,
                            viewAllActionLink: b,
                            headingVariant: p,
                            shouldSendAnalyticsOnLoaded: _,
                            ...y
                        } = e,
                        f = (0, o.fBs)();
                    return (
                        (0, n.useEffect)(() => {
                            _ && !t && f();
                        }, [t, f, _]),
                        (0, r.jsx)(l.OY, {
                            isShimmerVisible: t,
                            isShimmerActive: d,
                            className: P,
                            headerClassName: u,
                            containerClassName: c,
                            ref: i,
                            title: m,
                            description: v,
                            viewAllActionLink: b,
                            headingVariant: p,
                            ...y,
                            children:
                                null == h
                                    ? void 0
                                    : h.map((e, i) =>
                                          (0, r.jsx)(
                                              o.Bki,
                                              {
                                                  objectType: s.ky.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: i + 1,
                                                  objectPosY: 1,
                                                  objectsCount: h.length,
                                                  children: (0, r.jsx)(a.PlaylistCard, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      ),
                        })
                    );
                },
                m = (0, n.forwardRef)((e, i) => (0, r.jsx)(d, { forwardRef: i, ...e }));
        },
        23772: (e, i, t) => {
            'use strict';
            Object.defineProperty(i, '__esModule', { value: !0 }),
                Object.defineProperty(i, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                });
            let r = t(62936),
                n = t(44020),
                s = t(24571);
            function o(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            t(46950);
            let l = { loader: () => Promise.resolve(o(() => null)), loading: null, ssr: !0 },
                a = function (e) {
                    let i = { ...l, ...e },
                        t = (0, n.lazy)(() => i.loader().then(o)),
                        a = i.loading;
                    function d(e) {
                        let o = a ? (0, r.jsx)(a, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            l = !i.ssr || !!i.loading,
                            d = l ? n.Suspense : n.Fragment,
                            m = i.ssr
                                ? (0, r.jsxs)(r.Fragment, { children: [null, (0, r.jsx)(t, { ...e })] })
                                : (0, r.jsx)(s.BailoutToCSR, { reason: 'next/dynamic', children: (0, r.jsx)(t, { ...e }) });
                        return (0, r.jsx)(d, { ...(l ? { fallback: o } : {}), children: m });
                    }
                    return (d.displayName = 'LoadableComponent'), d;
                };
        },
        24571: (e, i, t) => {
            'use strict';
            function r(e) {
                let { reason: i, children: t } = e;
                return t;
            }
            Object.defineProperty(i, '__esModule', { value: !0 }),
                Object.defineProperty(i, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }),
                t(71279);
        },
        36118: (e, i, t) => {
            'use strict';
            t.d(i, { SomethingWentWrong: () => b });
            var r = t(62936),
                n = t(79950),
                s = t(19718),
                o = t(44020),
                l = t(47480),
                a = t(26731),
                d = t(5099),
                m = t(85742),
                v = t(20418),
                h = t(42561),
                c = t(85906),
                P = t(52166),
                u = t.n(P);
            let b = (0, s.PA)((e) => {
                let { className: i, withBackwardControl: t = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    P = s({ id: 'error-messages.something-went-wrong' });
                (0, h.CgZ)(P);
                let { sendRefreshEvent: b } = (0, h.cYT)(),
                    p = (0, o.useCallback)(() => {
                        b(), (window.location.href = h.Zyd.main.href);
                    }, [b]),
                    { contentRef: _ } = (0, h.gKY)();
                return (0, r.jsxs)('div', {
                    className: (0, n.$)(u().root, i),
                    children: [
                        t &&
                            (0, r.jsx)(c.Lh, {
                                withBackwardFallback: '/',
                                className: (0, n.$)(u().navigation, { [u().navigation_desktop]: !_ }),
                                withForwardControl: !1,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, n.$)(u().content, { [u().content_shrink]: !t }),
                            children: [
                                (0, r.jsx)(m.Icon, { className: u().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(v.Heading, { className: (0, n.$)(u().title, u().important), variant: 'h3', size: 'xs', children: P }),
                                (0, r.jsxs)(v.Caption, {
                                    className: (0, n.$)(u().text, u().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(d.$, {
                                    onClick: p,
                                    className: u().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(v.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, r.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        36179: (e, i, t) => {
            'use strict';
            t.d(i, { XU: () => v });
            var r,
                n,
                s = t(62986),
                o = t(44020),
                l = t(47480);
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
                })(n || (n = {}));
            var a = function (e) {
                var i = (0, l.A)(),
                    t = e.value,
                    r = e.children,
                    n = (0, s.__rest)(e, ['value', 'children']);
                return r(i.formatNumberToParts(t, n));
            };
            function d(e) {
                var i = function (i) {
                    var t = (0, l.A)(),
                        r = i.value,
                        n = i.children,
                        o = (0, s.__rest)(i, ['value', 'children']),
                        a = 'string' == typeof r ? new Date(r || 0) : r;
                    return n('formatDate' === e ? t.formatDateToParts(a, o) : t.formatTimeToParts(a, o));
                };
                return (i.displayName = n[e]), i;
            }
            function m(e) {
                var i = function (i) {
                    var t = (0, l.A)(),
                        r = i.value,
                        n = i.children,
                        a = (0, s.__rest)(i, ['value', 'children']),
                        d = t[e](r, a);
                    if ('function' == typeof n) return n(d);
                    var m = t.textComponent || o.Fragment;
                    return o.createElement(m, null, d);
                };
                return (i.displayName = r[e]), i;
            }
            (a.displayName = 'FormattedNumberParts'), (a.displayName = 'FormattedNumberParts');
            var v = m('formatDate');
            m('formatTime'), m('formatNumber'), m('formatList'), m('formatDisplayName'), d('formatDate'), d('formatTime');
        },
        40507: (e) => {
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
        43528: (e, i, t) => {
            'use strict';
            t.d(i, { a: () => n });
            var r = t(43696);
            let n = () => {
                let e = null,
                    i = new r.cJ(!1),
                    t = [];
                return {
                    isLoaded: i,
                    init: (r) => {
                        var n, s;
                        if (void 0 !== (null == (n = window.Ya) ? void 0 : n.Metrika2) && !i.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...r })),
                                    (i.value = !0),
                                    (s = e),
                                    t.forEach((e) => {
                                        e(s);
                                    }),
                                    (t.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && r.logger.error(e);
                            }
                    },
                    count: function (i) {
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [r]: i })
                            : t.push((e) => {
                                  e.params({ [r]: i });
                              });
                    },
                    hit: (i) => {
                        e
                            ? e.hit(i)
                            : t.push((e) => {
                                  e.hit(i);
                              });
                    },
                    reachGoal: (i, r) => {
                        if (!e) return void t.push((e) => e.reachGoal(i, r));
                        e.reachGoal(i, r);
                    },
                };
            };
        },
        46950: (e, i, t) => {
            'use strict';
            function r(e) {
                let { moduleIds: i } = e;
                return null;
            }
            Object.defineProperty(i, '__esModule', { value: !0 }),
                Object.defineProperty(i, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }),
                t(62936),
                t(2933),
                t(34397),
                t(5300);
        },
        49351: (e, i, t) => {
            'use strict';
            t.d(i, { default: () => n.a });
            var r = t(10076),
                n = t.n(r);
        },
        52072: (e, i, t) => {
            Promise.resolve().then(t.bind(t, 13030)),
                Promise.resolve().then(t.bind(t, 50576)),
                Promise.resolve().then(t.bind(t, 59260)),
                Promise.resolve().then(t.bind(t, 56721)),
                Promise.resolve().then(t.bind(t, 30388)),
                Promise.resolve().then(t.bind(t, 85023)),
                Promise.resolve().then(t.bind(t, 20418)),
                Promise.resolve().then(t.bind(t, 54802)),
                Promise.resolve().then(t.bind(t, 70036)),
                Promise.resolve().then(t.bind(t, 62967)),
                Promise.resolve().then(t.bind(t, 91738)),
                Promise.resolve().then(t.bind(t, 25467)),
                Promise.resolve().then(t.bind(t, 87740)),
                Promise.resolve().then(t.bind(t, 89457)),
                Promise.resolve().then(t.bind(t, 70892)),
                Promise.resolve().then(t.bind(t, 90031)),
                Promise.resolve().then(t.bind(t, 90339)),
                Promise.resolve().then(t.bind(t, 57297)),
                Promise.resolve().then(t.bind(t, 14848)),
                Promise.resolve().then(t.bind(t, 82447)),
                Promise.resolve().then(t.bind(t, 61387)),
                Promise.resolve().then(t.bind(t, 31011)),
                Promise.resolve().then(t.bind(t, 1624)),
                Promise.resolve().then(t.bind(t, 41338)),
                Promise.resolve().then(t.bind(t, 18460)),
                Promise.resolve().then(t.bind(t, 79078)),
                Promise.resolve().then(t.bind(t, 89774)),
                Promise.resolve().then(t.bind(t, 462)),
                Promise.resolve().then(t.bind(t, 71851)),
                Promise.resolve().then(t.bind(t, 2545)),
                Promise.resolve().then(t.bind(t, 51945)),
                Promise.resolve().then(t.bind(t, 14144)),
                Promise.resolve().then(t.bind(t, 34753)),
                Promise.resolve().then(t.bind(t, 34211)),
                Promise.resolve().then(t.bind(t, 63065)),
                Promise.resolve().then(t.bind(t, 31441)),
                Promise.resolve().then(t.bind(t, 37577)),
                Promise.resolve().then(t.bind(t, 9451)),
                Promise.resolve().then(t.bind(t, 64987)),
                Promise.resolve().then(t.bind(t, 77188)),
                Promise.resolve().then(t.bind(t, 50509)),
                Promise.resolve().then(t.bind(t, 16945)),
                Promise.resolve().then(t.bind(t, 11503)),
                Promise.resolve().then(t.bind(t, 60131)),
                Promise.resolve().then(t.bind(t, 3873)),
                Promise.resolve().then(t.bind(t, 41936)),
                Promise.resolve().then(t.bind(t, 32322)),
                Promise.resolve().then(t.bind(t, 69410)),
                Promise.resolve().then(t.bind(t, 80210)),
                Promise.resolve().then(t.bind(t, 91638)),
                Promise.resolve().then(t.bind(t, 86482)),
                Promise.resolve().then(t.bind(t, 70505)),
                Promise.resolve().then(t.bind(t, 67226)),
                Promise.resolve().then(t.bind(t, 85253)),
                Promise.resolve().then(t.bind(t, 21895)),
                Promise.resolve().then(t.bind(t, 67939)),
                Promise.resolve().then(t.bind(t, 78533)),
                Promise.resolve().then(t.bind(t, 50823)),
                Promise.resolve().then(t.bind(t, 56159)),
                Promise.resolve().then(t.bind(t, 33801)),
                Promise.resolve().then(t.t.bind(t, 80799, 23)),
                Promise.resolve().then(t.bind(t, 79438)),
                Promise.resolve().then(t.bind(t, 28751)),
                Promise.resolve().then(t.bind(t, 91441)),
                Promise.resolve().then(t.bind(t, 75481)),
                Promise.resolve().then(t.bind(t, 69546)),
                Promise.resolve().then(t.bind(t, 95565)),
                Promise.resolve().then(t.bind(t, 9066)),
                Promise.resolve().then(t.bind(t, 88587)),
                Promise.resolve().then(t.bind(t, 20433)),
                Promise.resolve().then(t.bind(t, 47286)),
                Promise.resolve().then(t.bind(t, 70977)),
                Promise.resolve().then(t.bind(t, 27917)),
                Promise.resolve().then(t.bind(t, 58480)),
                Promise.resolve().then(t.bind(t, 60415)),
                Promise.resolve().then(t.bind(t, 63019)),
                Promise.resolve().then(t.bind(t, 22228)),
                Promise.resolve().then(t.bind(t, 37284)),
                Promise.resolve().then(t.bind(t, 7124)),
                Promise.resolve().then(t.bind(t, 93883)),
                Promise.resolve().then(t.bind(t, 60472)),
                Promise.resolve().then(t.bind(t, 91092)),
                Promise.resolve().then(t.bind(t, 36550)),
                Promise.resolve().then(t.bind(t, 12435)),
                Promise.resolve().then(t.bind(t, 1170)),
                Promise.resolve().then(t.bind(t, 98636)),
                Promise.resolve().then(t.bind(t, 96780)),
                Promise.resolve().then(t.bind(t, 47665)),
                Promise.resolve().then(t.bind(t, 34722)),
                Promise.resolve().then(t.bind(t, 23339)),
                Promise.resolve().then(t.bind(t, 76411)),
                Promise.resolve().then(t.bind(t, 55475)),
                Promise.resolve().then(t.bind(t, 23740)),
                Promise.resolve().then(t.bind(t, 2947)),
                Promise.resolve().then(t.bind(t, 92647)),
                Promise.resolve().then(t.bind(t, 16795)),
                Promise.resolve().then(t.bind(t, 70900)),
                Promise.resolve().then(t.bind(t, 11182)),
                Promise.resolve().then(t.bind(t, 95368)),
                Promise.resolve().then(t.bind(t, 12331)),
                Promise.resolve().then(t.bind(t, 52589)),
                Promise.resolve().then(t.bind(t, 83132)),
                Promise.resolve().then(t.bind(t, 7670)),
                Promise.resolve().then(t.bind(t, 395)),
                Promise.resolve().then(t.bind(t, 83543)),
                Promise.resolve().then(t.bind(t, 99303)),
                Promise.resolve().then(t.bind(t, 45648)),
                Promise.resolve().then(t.bind(t, 35042)),
                Promise.resolve().then(t.bind(t, 94311)),
                Promise.resolve().then(t.bind(t, 46650)),
                Promise.resolve().then(t.bind(t, 33405)),
                Promise.resolve().then(t.bind(t, 32101)),
                Promise.resolve().then(t.bind(t, 63329)),
                Promise.resolve().then(t.bind(t, 941)),
                Promise.resolve().then(t.bind(t, 58991)),
                Promise.resolve().then(t.bind(t, 42297)),
                Promise.resolve().then(t.bind(t, 7551)),
                Promise.resolve().then(t.bind(t, 75695)),
                Promise.resolve().then(t.bind(t, 42323)),
                Promise.resolve().then(t.bind(t, 91135)),
                Promise.resolve().then(t.bind(t, 14878)),
                Promise.resolve().then(t.bind(t, 26467)),
                Promise.resolve().then(t.bind(t, 41970)),
                Promise.resolve().then(t.bind(t, 16847)),
                Promise.resolve().then(t.bind(t, 78780)),
                Promise.resolve().then(t.bind(t, 16782)),
                Promise.resolve().then(t.bind(t, 77966)),
                Promise.resolve().then(t.bind(t, 31148)),
                Promise.resolve().then(t.bind(t, 76532)),
                Promise.resolve().then(t.bind(t, 38076)),
                Promise.resolve().then(t.bind(t, 94158)),
                Promise.resolve().then(t.bind(t, 14124)),
                Promise.resolve().then(t.bind(t, 86100)),
                Promise.resolve().then(t.bind(t, 59736)),
                Promise.resolve().then(t.bind(t, 20532)),
                Promise.resolve().then(t.bind(t, 80222)),
                Promise.resolve().then(t.bind(t, 93148)),
                Promise.resolve().then(t.bind(t, 43898)),
                Promise.resolve().then(t.bind(t, 23164)),
                Promise.resolve().then(t.bind(t, 71637)),
                Promise.resolve().then(t.bind(t, 87894)),
                Promise.resolve().then(t.bind(t, 72964)),
                Promise.resolve().then(t.bind(t, 2760)),
                Promise.resolve().then(t.bind(t, 31927)),
                Promise.resolve().then(t.bind(t, 97248)),
                Promise.resolve().then(t.bind(t, 57612)),
                Promise.resolve().then(t.bind(t, 5670)),
                Promise.resolve().then(t.bind(t, 70915)),
                Promise.resolve().then(t.bind(t, 8148)),
                Promise.resolve().then(t.bind(t, 32634)),
                Promise.resolve().then(t.bind(t, 508)),
                Promise.resolve().then(t.bind(t, 36363)),
                Promise.resolve().then(t.bind(t, 15958)),
                Promise.resolve().then(t.bind(t, 78685)),
                Promise.resolve().then(t.bind(t, 34476)),
                Promise.resolve().then(t.bind(t, 60917)),
                Promise.resolve().then(t.bind(t, 62520)),
                Promise.resolve().then(t.bind(t, 21389)),
                Promise.resolve().then(t.bind(t, 85546)),
                Promise.resolve().then(t.bind(t, 80185)),
                Promise.resolve().then(t.bind(t, 38285)),
                Promise.resolve().then(t.bind(t, 792)),
                Promise.resolve().then(t.bind(t, 34291)),
                Promise.resolve().then(t.bind(t, 31299)),
                Promise.resolve().then(t.bind(t, 56209)),
                Promise.resolve().then(t.bind(t, 44162)),
                Promise.resolve().then(t.bind(t, 93427)),
                Promise.resolve().then(t.bind(t, 57861)),
                Promise.resolve().then(t.bind(t, 30615)),
                Promise.resolve().then(t.bind(t, 34990)),
                Promise.resolve().then(t.bind(t, 16395)),
                Promise.resolve().then(t.bind(t, 75020)),
                Promise.resolve().then(t.bind(t, 32746)),
                Promise.resolve().then(t.bind(t, 2552)),
                Promise.resolve().then(t.bind(t, 7323)),
                Promise.resolve().then(t.bind(t, 68270)),
                Promise.resolve().then(t.bind(t, 99525)),
                Promise.resolve().then(t.bind(t, 44276)),
                Promise.resolve().then(t.bind(t, 49452)),
                Promise.resolve().then(t.bind(t, 68834)),
                Promise.resolve().then(t.bind(t, 67484)),
                Promise.resolve().then(t.bind(t, 6987)),
                Promise.resolve().then(t.bind(t, 748)),
                Promise.resolve().then(t.bind(t, 94756)),
                Promise.resolve().then(t.bind(t, 5798)),
                Promise.resolve().then(t.bind(t, 44817)),
                Promise.resolve().then(t.bind(t, 6181)),
                Promise.resolve().then(t.bind(t, 40846)),
                Promise.resolve().then(t.bind(t, 43762)),
                Promise.resolve().then(t.bind(t, 12364)),
                Promise.resolve().then(t.bind(t, 13660)),
                Promise.resolve().then(t.bind(t, 31543)),
                Promise.resolve().then(t.bind(t, 38224)),
                Promise.resolve().then(t.bind(t, 63210)),
                Promise.resolve().then(t.bind(t, 44697)),
                Promise.resolve().then(t.bind(t, 64802)),
                Promise.resolve().then(t.bind(t, 1443)),
                Promise.resolve().then(t.bind(t, 95297)),
                Promise.resolve().then(t.bind(t, 4552)),
                Promise.resolve().then(t.bind(t, 92648)),
                Promise.resolve().then(t.bind(t, 73572)),
                Promise.resolve().then(t.bind(t, 29992)),
                Promise.resolve().then(t.bind(t, 66230)),
                Promise.resolve().then(t.bind(t, 18611)),
                Promise.resolve().then(t.bind(t, 36082)),
                Promise.resolve().then(t.bind(t, 42398)),
                Promise.resolve().then(t.bind(t, 21155)),
                Promise.resolve().then(t.bind(t, 44161)),
                Promise.resolve().then(t.bind(t, 38317)),
                Promise.resolve().then(t.bind(t, 22883)),
                Promise.resolve().then(t.bind(t, 59790)),
                Promise.resolve().then(t.bind(t, 47933)),
                Promise.resolve().then(t.bind(t, 88586)),
                Promise.resolve().then(t.bind(t, 34414)),
                Promise.resolve().then(t.bind(t, 41855)),
                Promise.resolve().then(t.bind(t, 10668)),
                Promise.resolve().then(t.bind(t, 51969)),
                Promise.resolve().then(t.bind(t, 93319)),
                Promise.resolve().then(t.bind(t, 6644)),
                Promise.resolve().then(t.bind(t, 73416)),
                Promise.resolve().then(t.bind(t, 6043)),
                Promise.resolve().then(t.bind(t, 98216)),
                Promise.resolve().then(t.bind(t, 68808)),
                Promise.resolve().then(t.bind(t, 94584)),
                Promise.resolve().then(t.bind(t, 77272)),
                Promise.resolve().then(t.bind(t, 20908)),
                Promise.resolve().then(t.bind(t, 26216)),
                Promise.resolve().then(t.bind(t, 62440)),
                Promise.resolve().then(t.bind(t, 99270)),
                Promise.resolve().then(t.bind(t, 55046)),
                Promise.resolve().then(t.bind(t, 32856)),
                Promise.resolve().then(t.bind(t, 2726)),
                Promise.resolve().then(t.bind(t, 75690)),
                Promise.resolve().then(t.bind(t, 39695)),
                Promise.resolve().then(t.bind(t, 84929)),
                Promise.resolve().then(t.bind(t, 24301)),
                Promise.resolve().then(t.bind(t, 21485)),
                Promise.resolve().then(t.bind(t, 25992)),
                Promise.resolve().then(t.bind(t, 51692)),
                Promise.resolve().then(t.bind(t, 79374)),
                Promise.resolve().then(t.bind(t, 13514)),
                Promise.resolve().then(t.bind(t, 99974)),
                Promise.resolve().then(t.bind(t, 42260)),
                Promise.resolve().then(t.bind(t, 72866)),
                Promise.resolve().then(t.bind(t, 81338)),
                Promise.resolve().then(t.bind(t, 82630)),
                Promise.resolve().then(t.bind(t, 49058)),
                Promise.resolve().then(t.bind(t, 39857)),
                Promise.resolve().then(t.bind(t, 48167)),
                Promise.resolve().then(t.bind(t, 40461)),
                Promise.resolve().then(t.bind(t, 59884)),
                Promise.resolve().then(t.bind(t, 73144)),
                Promise.resolve().then(t.bind(t, 66458)),
                Promise.resolve().then(t.bind(t, 77286)),
                Promise.resolve().then(t.bind(t, 53431)),
                Promise.resolve().then(t.bind(t, 22605)),
                Promise.resolve().then(t.bind(t, 94714)),
                Promise.resolve().then(t.bind(t, 90479)),
                Promise.resolve().then(t.bind(t, 64697)),
                Promise.resolve().then(t.bind(t, 5356)),
                Promise.resolve().then(t.bind(t, 6374)),
                Promise.resolve().then(t.bind(t, 39260)),
                Promise.resolve().then(t.bind(t, 68816)),
                Promise.resolve().then(t.bind(t, 20372)),
                Promise.resolve().then(t.bind(t, 85208)),
                Promise.resolve().then(t.bind(t, 95296)),
                Promise.resolve().then(t.bind(t, 78029)),
                Promise.resolve().then(t.bind(t, 6063)),
                Promise.resolve().then(t.bind(t, 14876)),
                Promise.resolve().then(t.bind(t, 86216)),
                Promise.resolve().then(t.bind(t, 18744)),
                Promise.resolve().then(t.bind(t, 32438)),
                Promise.resolve().then(t.bind(t, 18792)),
                Promise.resolve().then(t.bind(t, 84520)),
                Promise.resolve().then(t.bind(t, 85816)),
                Promise.resolve().then(t.bind(t, 71193)),
                Promise.resolve().then(t.bind(t, 37934)),
                Promise.resolve().then(t.bind(t, 92852)),
                Promise.resolve().then(t.bind(t, 34740)),
                Promise.resolve().then(t.bind(t, 83373)),
                Promise.resolve().then(t.bind(t, 9322)),
                Promise.resolve().then(t.bind(t, 40676)),
                Promise.resolve().then(t.bind(t, 64077)),
                Promise.resolve().then(t.bind(t, 6155)),
                Promise.resolve().then(t.bind(t, 91455));
        },
        52166: (e) => {
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
        54802: (e, i, t) => {
            'use strict';
            let r;
            t.d(i, { useMetrika: () => o });
            var n = t(44020),
                s = t(43528);
            let o = () => {
                let e = (r || (r = (0, s.a)()), r),
                    i = (0, n.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, n.useMemo)(() => ({ ...e, isLoaded: i }), [i]);
            };
        },
        57249: (e, i, t) => {
            'use strict';
            e.exports = t.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        65438: (e, i, t) => {
            'use strict';
            t.d(i, { w: () => r.SomethingWentWrong });
            var r = t(36118);
        },
        71318: (e) => {
            e.exports = {
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
        78980: (e, i, t) => {
            'use strict';
            var r;
            t.d(i, { U: () => r }),
                (function (e) {
                    (e.UNKNOWN = 'unknown'), (e.MALE = 'male'), (e.FEMALE = 'female');
                })(r || (r = {}));
        },
        79670: (e, i, t) => {
            'use strict';
            t.d(i, {
                pA: () => g.EmptyPlaylistBlock,
                vf: () => x.HorizontalPlaylistCard,
                B6: () => k.PlaylistCard,
                BL: () => y,
                IP: () => f,
                EC: () => C.PlaylistsCarousel,
                bk: () => s,
                ZC: () => d,
                Ew: () => v,
                pd: () => c,
            });
            var r = t(51606),
                n = t(42561);
            let s = (e) => {
                var i, t;
                let { playlist: s, generatedPlaylistType: o, likesCount: l, trailer: a, tracksCount: d } = e;
                return (0, r.wg)({
                    isAvailable: null == (t = s.available) || t,
                    uuid: s.playlistUuid,
                    title: s.title,
                    uid: s.uid,
                    kind: s.kind,
                    coverUri: null == (i = s.cover) ? void 0 : i.uri,
                    generatedPlaylistType: o,
                    likesCount: l,
                    tracksCount: d,
                    trailer: (0, n.mxW)(a),
                });
            };
            var o = t(69526),
                l = t(44020);
            (0, l.cache)(async (e, i) => {
                var t;
                let r;
                try {
                    let { container: t, backendHostTld: s, locale: o, host: l, fullUrl: a, isRSC: d, requestUrl: m } = await (0, n.IhE)();
                    if (d) return { playlist: void 0, backendHostTld: s, locale: o, host: l, fullUrl: a, requestUrl: m };
                    let v = t.get(n._19);
                    r = {
                        playlist: await v.getPlaylistWithTracksIds({ userId: e, playlistKind: i, resumeStream: !1 }),
                        backendHostTld: s,
                        locale: o,
                        host: l,
                        fullUrl: a,
                        requestUrl: m,
                    };
                } catch (e) {
                    return (0, n.tfF)(e, () => ({ playlist: void 0, ...(0, n.Bj3)() }));
                }
                return (null == (t = r.playlist) ? void 0 : t.error) === 'not-found' && (0, o.notFound)(), r;
            }),
                (0, l.cache)(async (e) => {
                    var i;
                    let t;
                    (0, n.sU0)(e) || (0, o.notFound)();
                    try {
                        let { container: i, backendHostTld: r, locale: s, host: o, fullUrl: l, isRSC: a, requestUrl: d } = await (0, n.IhE)();
                        if (a) return { playlist: void 0, backendHostTld: r, locale: s, host: o, fullUrl: l, requestUrl: d };
                        let m = i.get(n.qNr);
                        t = {
                            playlist: await m.getPlaylist({ playlistUuid: e, resumeStream: !1, richTracks: !1 }),
                            backendHostTld: r,
                            locale: s,
                            host: o,
                            fullUrl: l,
                            requestUrl: d,
                        };
                    } catch (e) {
                        return (0, n.tfF)(e, () => ({ playlist: void 0, ...(0, n.Bj3)() }));
                    }
                    return (null == (i = t.playlist) ? void 0 : i.error) === 'not-found' && (0, o.notFound)(), t;
                });
            var a = t(25358);
            let d = (e) =>
                (0, r.wg)({
                    ...(0, a.jX)(e),
                    owner: e.owner ? ((e) => ({ uid: e.uid, login: e.login, name: e.name, sex: e.sex, verified: e.verified }))(e.owner) : void 0,
                    description: e.description,
                    tags: e.tags,
                    modified: e.modified,
                    madeFor: e.madeFor ? ((e) => (0, r.wg)({ caseForms: e.caseForms ? (0, n.NH4)(e.caseForms) : null }))(e.madeFor) : null,
                });
            var m = t(81628);
            let v = (e) => {
                var i, t;
                return (0, r.wg)({ ...(0, a.jX)(e), artists: null != (t = null == e || null == (i = e.artists) ? void 0 : i.map(m.dM)) ? t : [] });
            };
            var h = t(43026);
            let c = (e) => {
                var i, t;
                return (0, r.wg)({ ...(0, a.jX)(e), tracks: null != (t = null == e || null == (i = e.tracks) ? void 0 : i.map(h.Rw)) ? t : [] });
            };
            var P = t(54690);
            let u = r.gK.model('PlaylistOwner', { caseForms: r.gK.maybeNull(P.lg) });
            var b = t(78980);
            let p = r.gK.model('PlaylistOwner', {
                    uid: r.gK.number,
                    login: r.gK.string,
                    name: r.gK.string,
                    sex: r.gK.enumeration(Object.values(b.U)),
                    verified: r.gK.boolean,
                }),
                _ = r.gK.model('PlaylistTag', { id: r.gK.string, value: r.gK.string }),
                y = a.$o
                    .props({
                        owner: r.gK.maybe(p),
                        modified: r.gK.string,
                        description: r.gK.maybe(r.gK.string),
                        tags: r.gK.maybeNull(r.gK.array(_)),
                        madeFor: r.gK.maybeNull(u),
                    })
                    .views((e) => ({
                        get seeds() {
                            var i;
                            return ['playlist:'.concat(null == (i = e.owner) ? void 0 : i.login, '_').concat(e.kind)];
                        },
                        get tagsString() {
                            let { experiments: i } = (0, r.Zn)(e);
                            if (!i.checkExperiment(n.zal.WebEditorsFeatures, 'on') || !Array.isArray(e.tags) || !e.tags.length) return null;
                            return e.tags.map((e) => e.value).join(', ');
                        },
                    }))
                    .actions((e) => ({
                        changeDescription: (0, r.L3)(function* (i) {
                            if (!(0, r._n)(e)) return n.FlZ.ERROR;
                            if (e.description === i) return n.FlZ.OK;
                            if (i.length > a.iz) return n.FlZ.ERROR;
                            let { usersResource: t, modelActionsLogger: s } = (0, r._$)(e);
                            if (e.canUserChange) {
                                let r = e.description;
                                e.description = i;
                                try {
                                    let r = yield t.changePlaylistDescription({ description: i, userId: e.uid, playlistKind: e.kind });
                                    return (e.description = r.description), n.FlZ.OK;
                                } catch (i) {
                                    (e.description = r), s.error(i);
                                }
                            }
                            return n.FlZ.ERROR;
                        }),
                        changePlaylistCover: (0, r.L3)(function* (i) {
                            if (!(0, r._n)(e)) return n.FlZ.ERROR;
                            let { usersResource: t, modelActionsLogger: s } = (0, r._$)(e);
                            try {
                                let r = yield t.uploadPlaylistCover({ userId: e.uid, formData: i, playlistKind: e.kind });
                                return (e.coverUri = r.cover.uri), n.FlZ.OK;
                            } catch (e) {
                                s.error(e);
                            }
                            return n.FlZ.ERROR;
                        }),
                    }))
                    .named('PlaylistMeta'),
                f = a.Zq.props({ artists: r.gK.maybe(r.gK.array(m.PK)) });
            var g = t(95565),
                x = t(9066),
                k = t(88587),
                C = t(20433);
        },
        88587: (e, i, t) => {
            'use strict';
            t.d(i, { PlaylistCard: () => L });
            var r = t(62936),
                n = t(79950),
                s = t(19718),
                o = t(44020),
                l = t(47480),
                a = t(23480),
                d = t(8669),
                m = t(81959),
                v = t(59935),
                h = t(60188),
                c = t(16258),
                P = t(85742),
                u = t(56721),
                b = t(20418),
                p = t(81628),
                _ = t(25358),
                y = t(42561),
                f = t(85906),
                g = t(7103),
                x = t(64304),
                k = t(35250);
            let downloadPlaylistToFile = ({ playlist: e }) => {
                let i = Array.isArray(e?.trackIds) ? e.trackIds : [],
                    t = (0, v.c)(() => {
                        var i;
                        e?.title && e?.trackIds?.length && (null == (i = window.desktopEvents) || i.send(y.EE.DOWNLOAD_TRACKS, e.trackIds, 'playlist', e.title));
                    });
                return i.length
                    ? (0, r.jsx)(x.Dr, {
                          onClick: t,
                          icon: (0, r.jsx)(P.Icon, { variant: 'download', size: 'xxs' }),
                          children: 'Скачать в файл',
                      })
                    : null;
            };
            let C = (0, s.PA)((e) => {
                var i;
                let { playlist: t, onOpenChange: n, open: s, ...o } = e,
                    { shouldShowBuySubscriptionModal: m, showBuySubscriptionModal: h } = (0, y.qBP)(),
                    {
                        experiments: c,
                        settings: { isMobile: P },
                        trailer: u,
                        user: b,
                    } = (0, y.Pjs)(),
                    p = (0, _.KX)(t),
                    g = (0, _.A7)(t),
                    C = (0, y.Ftl)(),
                    { formatMessage: j } = (0, l.A)(),
                    N = (0, y.PT7)(),
                    L = c.checkExperiment(y.zal.WebEditorsFeatures, 'on'),
                    A = (0, k.A_)({ entityVariant: y.DwC.PLAYLIST, urlParams: { id: t.uid, kind: t.kind } });
                (0, y.NBO)(s);
                let w = (0, v.c)(() => {
                    if (m) return void h();
                    N() || (u.openPlaylistTrailer(t.id), C(a.ky.Playlist, t.id));
                });
                return (0, r.jsxs)(x.W1, {
                    title: t.title,
                    onOpenChange: n,
                    open: s,
                    offsetOptions: 10,
                    isMobile: P,
                    ariaLabel: j({ id: 'interface-actions.context-menu' }),
                    containerProps: (0, d.Am)(d.Kq.playlist.PLAYLIST_CONTEXT_MENU),
                    ...o,
                    children: [
                        L && (0, r.jsx)(k.dx, { entityVariant: y.DwC.PLAYLIST, adminUrl: t.isFavouritePlaylist ? void 0 : A }),
                        !P && (0, r.jsx)(f.L1, { onClick: g, isPinned: t.isPinned }),
                        !t.isFavouritePlaylist && (0, r.jsx)(f.TW, { onClick: p, isLiked: t.isLiked, disabled: !b.isAuthorized }),
                        (0, r.jsx)(downloadPlaylistToFile, { playlist: t }),
                        (null == (i = t.trailer) ? void 0 : i.isAvailable) && (0, r.jsx)(f.No, { onClick: w, disabled: !t.isAvailable }),
                    ],
                });
            });
            var j = t(40507),
                N = t.n(j);
            let L = (0, s.PA)((e) => {
                let { className: i, playlist: t, children: s, contentLinesCount: x, customDescription: k } = e,
                    { ref: j, intersectionPropertyId: L } = (0, y.nMI)(),
                    {
                        trailer: A,
                        user: w,
                        paywall: { modal: F },
                    } = (0, y.Pjs)(),
                    { from: K, utmLink: T } = (0, y.fyy)({ contextId: t.uuid, contextType: m.K.Playlist }),
                    { formatMessage: B } = (0, l.A)(),
                    { sendLikeSearchFeedback: z, sendNavigateSearchFeedback: S, sendPlaySearchFeedback: E } = (0, y.zEv)(),
                    [I, M] = (0, o.useState)(!1),
                    [O, W] = (0, o.useState)(!1),
                    [$, R] = (0, o.useState)(!1),
                    D = (0, g.r)(t),
                    Y = (0, _.KX)(t),
                    Z = (0, _.A7)(t),
                    U = (0, y.NKK)(),
                    H = (0, y.brA)(),
                    q = (0, y.ZpR)(t.url),
                    X = (0, y.Ftl)(),
                    G = (0, y.PT7)(),
                    Q = (0, v.c)((e) => {
                        if ((e.stopPropagation(), G())) return void e.preventDefault();
                        A.setUtmLink(T), A.openPlaylistTrailer(t.id), X(a.ky.Playlist, t.id);
                    }),
                    [V, J] = (0, o.useState)(!1),
                    { isPlaying: ee, togglePlay: ei } = (0, y.Dx4)({
                        playContextParams: { contextData: { type: m.K.Playlist, meta: { id: t.id, uuid: t.uuid }, from: K, utmLink: T }, loadContextMeta: !0 },
                    }),
                    et = (0, v.c)(() => {
                        U({ to: a.QT.PlaylistScreen }), null == S || S();
                    }),
                    er = (0, v.c)((e) => {
                        et(), q(e);
                    }),
                    en = (0, y.NPu)(),
                    es = (0, v.c)(() => {
                        if (!G()) {
                            if (en) return void F.open();
                            I || ee || (M(!0), null == E || E()), ei(), H(!ee);
                        }
                    }),
                    eo = (0, v.c)(() => {
                        O || t.isLiked || (W(!0), null == z || z()), Y();
                    }),
                    el = (0, v.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    ea = (0, v.c)((e) => {
                        R(e), J(e);
                    }),
                    ed = (0, o.useMemo)(() => {
                        var e;
                        return k
                            ? (0, r.jsx)(b.Caption, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: k }, t.getKey('description'))
                            : (null == (e = t.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    p.iQ,
                                    { className: N().artists, artists: t.artists, lineClamp: 1, linkClassName: N().artistLink, captionSize: 's' },
                                    t.getKey('description'),
                                )
                              : void 0;
                    }, [k, t]),
                    em = (0, h.L)(() => {
                        if (!t.isFavouritePlaylist)
                            return (0, r.jsx)(
                                f.cy,
                                {
                                    className: (0, n.$)(N().likeButton, N().control),
                                    isLiked: t.isLiked,
                                    onClick: eo,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !w.isAuthorized,
                                },
                                t.getKey('LikeButton'),
                            );
                    }),
                    ev = (0, o.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                f.nE,
                                {
                                    children: (0, r.jsx)(
                                        f.kJ,
                                        { className: (0, n.$)(N().trailerButton, N().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: Q },
                                        t.getKey('TrailerButton'),
                                    ),
                                },
                                t.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [Q, t]),
                    eh = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(
                                f.O0,
                                { onClick: Z, isPinned: t.isPinned, className: (0, n.$)(N().pinButton, N().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [Z, t],
                    ),
                    ec = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(u.Paper, {
                                className: N().cover,
                                radius: 's',
                                withShadow: !0,
                                ...(0, d.Am)(d.Kq.playlist.PLAYLIST_CARD),
                                children: (0, r.jsxs)('div', {
                                    className: N().coverBlock,
                                    onClick: er,
                                    children: [
                                        (0, r.jsx)(f.BW, {
                                            className: N().image,
                                            src: t.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: D,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(c.hg, {
                                            isVisible: $ || V,
                                            className: N().controls,
                                            playControl: (0, r.jsx)(
                                                f.DM,
                                                {
                                                    className: (0, n.$)(N().playButton, N().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: es,
                                                    isPlaying: ee,
                                                    disabled: !t.isAvailable,
                                                },
                                                t.getKey('PlayButton'),
                                            ),
                                            likeControl: em,
                                            menuControl: (0, r.jsx)(
                                                C,
                                                {
                                                    playlist: t,
                                                    onOpenChange: ea,
                                                    open: $,
                                                    onClick: el,
                                                    className: (0, n.$)(N().menuButton, N().control),
                                                    icon: (0, r.jsx)(P.Icon, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    ...(0, d.Am)(d.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON),
                                                },
                                                t.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eh,
                                            trailerControl: ev,
                                        }),
                                    ],
                                }),
                            }),
                        [er, t, D, $, V, es, ee, em, ea, el, eh, ev],
                    ),
                    eP = !!t.actualLikesCount && !t.isLikesCountHidden;
                return (0, r.jsxs)(c.MN, {
                    ref: j,
                    'aria-label': D,
                    className: (0, n.$)(N().root, i),
                    title: (0, r.jsx)(b.Caption, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        ...(0, d.Am)(d.Kq.playlist.PLAYLIST_TITLE),
                        children: (0, r.jsx)(f.N_, { className: N().titleLink, href: t.url, onClick: et, children: t.title }),
                    }),
                    srTitle: (0, r.jsx)(f.N_, { href: t.url, onClick: et, children: t.title }),
                    'data-intersection-property-id': L,
                    contentLinesCount: x,
                    view: ec,
                    description: ed,
                    ...(0, d.Am)(d.Kq.playlist.PLAYLIST_ITEM),
                    children: [
                        eP &&
                            (0, r.jsx)(f.xW, {
                                ariaLabel: B({ id: 'entity-names.likes-counter' }, { counter: t.actualLikesCount }),
                                likesCount: t.actualLikesCount,
                                isLiked: t.isLiked,
                                handleLikeClick: Y,
                            }),
                        s,
                    ],
                });
            });
        },
        88933: (e) => {
            e.exports = {
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
        91455: (e, i, t) => {
            'use strict';
            t.d(i, { NotFound: () => u });
            var r = t(62936),
                n = t(79950),
                s = t(19718),
                o = t(26731),
                l = t(5099),
                a = t(85742),
                d = t(20418),
                m = t(42561),
                v = t(85906),
                h = t(44020),
                c = t(88933),
                P = t.n(c);
            let u = (0, s.PA)((e) => {
                let { className: i, title: t, description: s, iconVariant: c = 'musicLogo', iconClassName: u, iconSize: b } = e,
                    { contentRef: p } = (0, m.gKY)(),
                    _ = (0, m.ZpR)(m.Zyd.main.href);
                (0, m.LZB)();
                let { handleNavigateToMain: y } = (0, m.D5F)(_);
                return (
                    (0, m.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, m.Pjs)();
                        (0, h.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, r.jsxs)('div', {
                        className: (0, n.$)(P().root, { [P().root_desktop]: !p }, i),
                        children: [
                            (0, r.jsx)(v.Lh, { withBackwardFallback: '/', className: P().navigation, withForwardControl: !1 }),
                            (0, r.jsxs)('div', {
                                className: P().content,
                                children: [
                                    (0, r.jsx)(a.Icon, { className: (0, n.$)(P().icon, u), variant: c, size: b }),
                                    (0, r.jsx)(d.Heading, {
                                        className: (0, n.$)(P().title, P().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: t || (0, r.jsx)(o.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, r.jsx)(d.Caption, {
                                        className: (0, n.$)(P().text, P().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: s || (0, r.jsx)(o.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, r.jsx)(l.$, {
                                        onClick: y,
                                        className: P().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(d.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, r.jsx)(o.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        92339: (e) => {
            e.exports = {
                root: 'EmptyPlaylistBlock_root__wpA0j',
                iconBackground: 'EmptyPlaylistBlock_iconBackground__pnUlz',
                title: 'EmptyPlaylistBlock_title__pQQLf',
                subtitle: 'EmptyPlaylistBlock_subtitle__P4Q7x',
            };
        },
        95565: (e, i, t) => {
            'use strict';
            t.d(i, { EmptyPlaylistBlock: () => h });
            var r = t(62936),
                n = t(79950),
                s = t(44020),
                o = t(26731),
                l = t(8669),
                a = t(85742),
                d = t(20418),
                m = t(92339),
                v = t.n(m);
            let h = (e) => {
                let { className: i, isEmptySearch: t } = e,
                    m = (0, s.useMemo)(
                        () => (t ? (0, r.jsx)(o.A, { id: 'search-results.not-found-title' }) : (0, r.jsx)(o.A, { id: 'error-messages.empty-collection-playlist-title' })),
                        [t],
                    ),
                    h = (0, s.useMemo)(
                        () =>
                            t
                                ? (0, r.jsx)(o.A, { id: 'search-results.not-found-description' })
                                : (0, r.jsx)(o.A, { id: 'error-messages.empty-collection-playlist-description' }),
                        [t],
                    );
                return (0, r.jsxs)('div', {
                    className: (0, n.$)(v().root, i),
                    ...(0, l.Am)(l.Kq.playlist.PLAYLIST_EMPTY_BLOCK),
                    children: [
                        (0, r.jsx)('div', {
                            className: v().iconBackground,
                            children: (0, r.jsx)(a.Icon, { variant: 'search', size: 'l', className: v().icon, ...(0, l.Am)(l.Kq.playlist.PLAYLIST_EMPTY_BLOCK_ICON) }),
                        }),
                        (0, r.jsx)(d.Heading, { variant: 'h3', size: 'xs', className: v().title, ...(0, l.Am)(l.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TITLE), children: m }),
                        (0, r.jsx)(d.Caption, {
                            variant: 'span',
                            size: 'l',
                            className: v().subtitle,
                            ...(0, l.Am)(l.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TEXT),
                            children: h,
                        }),
                    ],
                });
            };
        },
    },
]);
