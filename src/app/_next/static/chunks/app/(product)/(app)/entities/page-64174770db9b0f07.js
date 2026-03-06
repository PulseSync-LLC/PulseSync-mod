(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6360],
    {
        31622: (t, e, r) => {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                });
            let a = r(54486),
                o = r(61910),
                n = r(91165);
            function s(t) {
                return { default: t && 'default' in t ? t.default : t };
            }
            r(98944);
            let i = { loader: () => Promise.resolve(s(() => null)), loading: null, ssr: !0 },
                l = function (t) {
                    let e = { ...i, ...t },
                        r = (0, o.lazy)(() => e.loader().then(s)),
                        l = e.loading;
                    function u(t) {
                        let s = l ? (0, a.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            i = !e.ssr || !!e.loading,
                            u = i ? o.Suspense : o.Fragment,
                            d = e.ssr
                                ? (0, a.jsxs)(a.Fragment, { children: [null, (0, a.jsx)(r, { ...t })] })
                                : (0, a.jsx)(n.BailoutToCSR, { reason: 'next/dynamic', children: (0, a.jsx)(r, { ...t }) });
                        return (0, a.jsx)(u, { ...(i ? { fallback: s } : {}), children: d });
                    }
                    return (u.displayName = 'LoadableComponent'), u;
                };
        },
        35173: (t, e, r) => {
            'use strict';
            r.d(e, { EntitiesNotFoundPage: () => l });
            var a = r(54486),
                o = r(28303),
                n = r(61910),
                s = r(42421),
                i = r(83252);
            let l = (0, o.PA)(() => {
                let { landingBlockEntities: t } = (0, i.Pjs)();
                return (
                    (0, n.useEffect)(
                        () => () => {
                            t.reset();
                        },
                        [t],
                    ),
                    (0, a.jsx)(s.M, {})
                );
            });
        },
        35561: (t, e, r) => {
            Promise.resolve().then(r.bind(r, 81721));
        },
        36446: (t, e, r) => {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'default', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                });
            let a = r(45221)._(r(31622));
            function o(t, e) {
                var r;
                let o = {};
                'function' == typeof t && (o.loader = t);
                let n = { ...o, ...e };
                return (0, a.default)({ ...n, modules: null == (r = n.loadableGenerated) ? void 0 : r.modules });
            }
            ('function' == typeof e.default || ('object' == typeof e.default && null !== e.default)) &&
                void 0 === e.default.__esModule &&
                (Object.defineProperty(e.default, '__esModule', { value: !0 }), Object.assign(e.default, e), (t.exports = e.default));
        },
        42421: (t, e, r) => {
            'use strict';
            r.d(e, { M: () => a.NotFound });
            var a = r(65034);
        },
        46215: (t) => {
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
        57249: (t, e, r) => {
            'use strict';
            t.exports = r.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        65034: (t, e, r) => {
            'use strict';
            r.d(e, { NotFound: () => p });
            var a = r(54486),
                o = r(50420),
                n = r(28303),
                s = r(47713),
                i = r(77881),
                l = r(5956),
                u = r(97800),
                d = r(83252),
                c = r(80585),
                m = r(61910),
                f = r(46215),
                _ = r.n(f);
            let p = (0, n.PA)((t) => {
                let { className: e, title: r, description: n, iconVariant: f = 'musicLogo', iconClassName: p, iconSize: N } = t,
                    { contentRef: b } = (0, d.gKY)(),
                    v = (0, d.ZpR)(d.Zyd.main.href);
                (0, d.LZB)();
                let { handleNavigateToMain: x } = (0, d.D5F)(v);
                return (
                    (0, d.NBO)(!0),
                    !(function () {
                        let { location: t } = (0, d.Pjs)();
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
                        className: (0, o.$)(_().root, { [_().root_desktop]: !b }, e),
                        children: [
                            (0, a.jsx)(c.Lh, { withBackwardFallback: '/', className: _().navigation, withForwardControl: !1 }),
                            (0, a.jsxs)('div', {
                                className: _().content,
                                children: [
                                    (0, a.jsx)(l.Icon, { className: (0, o.$)(_().icon, p), variant: f, size: N }),
                                    (0, a.jsx)(u.Heading, {
                                        className: (0, o.$)(_().title, _().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: r || (0, a.jsx)(s.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, a.jsx)(u.Caption, {
                                        className: (0, o.$)(_().text, _().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: n || (0, a.jsx)(s.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, a.jsx)(i.$, {
                                        onClick: x,
                                        className: _().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(u.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, a.jsx)(s.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        65351: (t, e, r) => {
            'use strict';
            r.d(e, { EntitiesPage: () => c });
            var a = r(54486),
                o = r(28303),
                n = r(97396),
                s = r(61910),
                i = r(6664),
                l = r(83252),
                u = r(35620);
            let d = {
                    'new-releases': u.t.NEW_RELEASES,
                    'editorial-new-releases': u.t.EDITORIAL_NEW_RELEASES,
                    'personal-artists': u.t.PERSONAL_ARTISTS,
                    'new-stars-artists': u.t.NEW_STARS_ARTISTS,
                    'editorial-artists': u.t.EDITORIAL_ARTISTS,
                    'new-playlists': u.t.NEW_PLAYLISTS,
                    'editorial-compilation': u.t.EDITORIAL_COMPILATION,
                    'non-music-editorial-compilation': u.t.EDITORIAL_COMPILATION,
                    'chart-albums': u.t.CHART_ALBUMS,
                    'mixes-grid': u.t.MIXES_GRID,
                    'mixes-music': u.t.MIXES_MUSIC,
                },
                c = (0, o.PA)((t) => {
                    let { blockType: e, blockId: r } = t,
                        { landingBlockEntities: o } = (0, l.Pjs)();
                    (0, s.useEffect)(
                        () => () => {
                            o.reset();
                        },
                        [o, e, r],
                    ),
                        (0, l.Jzs)(o.loadingState === l.GuX.RESOLVE);
                    let u = d[e];
                    return (
                        (o.isNotFound || !u) && (0, n.notFound)(),
                        (0, a.jsx)(l.nVz, {
                            pageId: l._Q$.ENTITIES,
                            children: (0, a.jsx)(l.FoH, {
                                blockId: ''.concat(l.hf$.DISCOVERY_BLOCK, '-').concat(r),
                                blockIdForFrom: ''.concat(l.hf$.DISCOVERY_BLOCK, '-').concat(r),
                                blockPosX: 1,
                                blockPosY: 1,
                                blockType: u,
                                objectsCount: o.items.length,
                                children: (0, a.jsx)(i.bX, { blockType: u, blockId: r }),
                            }),
                        })
                    );
                });
        },
        81721: (t, e, r) => {
            'use strict';
            r.r(e), r.d(e, { default: () => s });
            var a = r(54486),
                o = r(97396);
            r(35173);
            var n = r(65351);
            let s = () => {
                let t = (0, o.useSearchParams)(),
                    e = t.get('blockType'),
                    r = t.get('blockId');
                return (e && r) || (0, o.notFound)(), (0, a.jsx)(n.EntitiesPage, { blockType: e, blockId: r });
            };
        },
        83645: (t, e, r) => {
            'use strict';
            r.d(e, { default: () => o.a });
            var a = r(36446),
                o = r.n(a);
        },
        91165: (t, e, r) => {
            'use strict';
            function a(t) {
                let { reason: e, children: r } = t;
                return r;
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }),
                r(39201);
        },
        97151: (t, e, r) => {
            'use strict';
            r.d(e, { XU: () => c });
            var a,
                o,
                n = r(41500),
                s = r(61910),
                i = r(43426);
            !(function (t) {
                (t.formatDate = 'FormattedDate'),
                    (t.formatTime = 'FormattedTime'),
                    (t.formatNumber = 'FormattedNumber'),
                    (t.formatList = 'FormattedList'),
                    (t.formatDisplayName = 'FormattedDisplayName');
            })(a || (a = {})),
                (function (t) {
                    (t.formatDate = 'FormattedDateParts'),
                        (t.formatTime = 'FormattedTimeParts'),
                        (t.formatNumber = 'FormattedNumberParts'),
                        (t.formatList = 'FormattedListParts');
                })(o || (o = {}));
            var l = function (t) {
                var e = (0, i.A)(),
                    r = t.value,
                    a = t.children,
                    o = (0, n.__rest)(t, ['value', 'children']);
                return a(e.formatNumberToParts(r, o));
            };
            function u(t) {
                var e = function (e) {
                    var r = (0, i.A)(),
                        a = e.value,
                        o = e.children,
                        s = (0, n.__rest)(e, ['value', 'children']),
                        l = 'string' == typeof a ? new Date(a || 0) : a;
                    return o('formatDate' === t ? r.formatDateToParts(l, s) : r.formatTimeToParts(l, s));
                };
                return (e.displayName = o[t]), e;
            }
            function d(t) {
                var e = function (e) {
                    var r = (0, i.A)(),
                        a = e.value,
                        o = e.children,
                        l = (0, n.__rest)(e, ['value', 'children']),
                        u = r[t](a, l);
                    if ('function' == typeof o) return o(u);
                    var d = r.textComponent || s.Fragment;
                    return s.createElement(d, null, u);
                };
                return (e.displayName = a[t]), e;
            }
            (l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts');
            var c = d('formatDate');
            d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), u('formatDate'), u('formatTime');
        },
        98944: (t, e, r) => {
            'use strict';
            function a(t) {
                let { moduleIds: e } = t;
                return null;
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }),
                r(54486),
                r(92803),
                r(14367),
                r(32038);
        },
    },
    (t) => {
        t.O(
            0,
            [
                6041, 9834, 5355, 1023, 1776, 2398, 8748, 6552, 4915, 2186, 1311, 7764, 6706, 7724, 5201, 5148, 3005, 3916, 4885, 3252, 585, 6433, 3286, 156, 6231, 4826,
                1365, 3211, 7858, 5570, 6664, 5843, 3290, 7358,
            ],
            () => t((t.s = 35561)),
        ),
            (_N_E = t.O());
    },
]);
