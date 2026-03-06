(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2279],
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
            let o = r(54486),
                a = r(61910),
                n = r(91165);
            function s(t) {
                return { default: t && 'default' in t ? t.default : t };
            }
            r(98944);
            let i = { loader: () => Promise.resolve(s(() => null)), loading: null, ssr: !0 },
                l = function (t) {
                    let e = { ...i, ...t },
                        r = (0, a.lazy)(() => e.loader().then(s)),
                        l = e.loading;
                    function u(t) {
                        let s = l ? (0, o.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            i = !e.ssr || !!e.loading,
                            u = i ? a.Suspense : a.Fragment,
                            d = e.ssr
                                ? (0, o.jsxs)(o.Fragment, { children: [null, (0, o.jsx)(r, { ...t })] })
                                : (0, o.jsx)(n.BailoutToCSR, { reason: 'next/dynamic', children: (0, o.jsx)(r, { ...t }) });
                        return (0, o.jsx)(u, { ...(i ? { fallback: s } : {}), children: d });
                    }
                    return (u.displayName = 'LoadableComponent'), u;
                };
        },
        35173: (t, e, r) => {
            'use strict';
            r.d(e, { EntitiesNotFoundPage: () => l });
            var o = r(54486),
                a = r(28303),
                n = r(61910),
                s = r(42421),
                i = r(83252);
            let l = (0, a.PA)(() => {
                let { landingBlockEntities: t } = (0, i.Pjs)();
                return (
                    (0, n.useEffect)(
                        () => () => {
                            t.reset();
                        },
                        [t],
                    ),
                    (0, o.jsx)(s.M, {})
                );
            });
        },
        36446: (t, e, r) => {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                });
            let o = r(45221)._(r(31622));
            function a(t, e) {
                var r;
                let a = {};
                'function' == typeof t && (a.loader = t);
                let n = { ...a, ...e };
                return (0, o.default)({ ...n, modules: null == (r = n.loadableGenerated) ? void 0 : r.modules });
            }
            ('function' == typeof e.default || ('object' == typeof e.default && null !== e.default)) &&
                void 0 === e.default.__esModule &&
                (Object.defineProperty(e.default, '__esModule', { value: !0 }), Object.assign(e.default, e), (t.exports = e.default));
        },
        42421: (t, e, r) => {
            'use strict';
            r.d(e, { M: () => o.NotFound });
            var o = r(65034);
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
        56288: (t, e, r) => {
            Promise.resolve().then(r.bind(r, 35173)), Promise.resolve().then(r.bind(r, 65351));
        },
        57249: (t, e, r) => {
            'use strict';
            t.exports = r.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        65034: (t, e, r) => {
            'use strict';
            r.d(e, { NotFound: () => p });
            var o = r(54486),
                a = r(50420),
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
                    (0, o.jsxs)('div', {
                        className: (0, a.$)(_().root, { [_().root_desktop]: !b }, e),
                        children: [
                            (0, o.jsx)(c.Lh, { withBackwardFallback: '/', className: _().navigation, withForwardControl: !1 }),
                            (0, o.jsxs)('div', {
                                className: _().content,
                                children: [
                                    (0, o.jsx)(l.Icon, { className: (0, a.$)(_().icon, p), variant: f, size: N }),
                                    (0, o.jsx)(u.Heading, {
                                        className: (0, a.$)(_().title, _().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: r || (0, o.jsx)(s.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, o.jsx)(u.Caption, {
                                        className: (0, a.$)(_().text, _().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: n || (0, o.jsx)(s.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, o.jsx)(i.$, {
                                        onClick: x,
                                        className: _().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, o.jsx)(u.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, o.jsx)(s.A, { id: 'navigation.page-main' }),
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
            var o = r(54486),
                a = r(28303),
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
                c = (0, a.PA)((t) => {
                    let { blockType: e, blockId: r } = t,
                        { landingBlockEntities: a } = (0, l.Pjs)();
                    (0, s.useEffect)(
                        () => () => {
                            a.reset();
                        },
                        [a, e, r],
                    ),
                        (0, l.Jzs)(a.loadingState === l.GuX.RESOLVE);
                    let u = d[e];
                    return (
                        (a.isNotFound || !u) && (0, n.notFound)(),
                        (0, o.jsx)(l.nVz, {
                            pageId: l._Q$.ENTITIES,
                            children: (0, o.jsx)(l.FoH, {
                                blockId: ''.concat(l.hf$.DISCOVERY_BLOCK, '-').concat(r),
                                blockIdForFrom: ''.concat(l.hf$.DISCOVERY_BLOCK, '-').concat(r),
                                blockPosX: 1,
                                blockPosY: 1,
                                blockType: u,
                                objectsCount: a.items.length,
                                children: (0, o.jsx)(i.bX, { blockType: u, blockId: r }),
                            }),
                        })
                    );
                });
        },
        83645: (t, e, r) => {
            'use strict';
            r.d(e, { default: () => a.a });
            var o = r(36446),
                a = r.n(o);
        },
        91165: (t, e, r) => {
            'use strict';
            function o(t) {
                let { reason: e, children: r } = t;
                return r;
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }),
                r(39201);
        },
        97151: (t, e, r) => {
            'use strict';
            r.d(e, { XU: () => c });
            var o,
                a,
                n = r(41500),
                s = r(61910),
                i = r(43426);
            !(function (t) {
                (t.formatDate = 'FormattedDate'),
                    (t.formatTime = 'FormattedTime'),
                    (t.formatNumber = 'FormattedNumber'),
                    (t.formatList = 'FormattedList'),
                    (t.formatDisplayName = 'FormattedDisplayName');
            })(o || (o = {})),
                (function (t) {
                    (t.formatDate = 'FormattedDateParts'),
                        (t.formatTime = 'FormattedTimeParts'),
                        (t.formatNumber = 'FormattedNumberParts'),
                        (t.formatList = 'FormattedListParts');
                })(a || (a = {}));
            var l = function (t) {
                var e = (0, i.A)(),
                    r = t.value,
                    o = t.children,
                    a = (0, n.__rest)(t, ['value', 'children']);
                return o(e.formatNumberToParts(r, a));
            };
            function u(t) {
                var e = function (e) {
                    var r = (0, i.A)(),
                        o = e.value,
                        a = e.children,
                        s = (0, n.__rest)(e, ['value', 'children']),
                        l = 'string' == typeof o ? new Date(o || 0) : o;
                    return a('formatDate' === t ? r.formatDateToParts(l, s) : r.formatTimeToParts(l, s));
                };
                return (e.displayName = a[t]), e;
            }
            function d(t) {
                var e = function (e) {
                    var r = (0, i.A)(),
                        o = e.value,
                        a = e.children,
                        l = (0, n.__rest)(e, ['value', 'children']),
                        u = r[t](o, l);
                    if ('function' == typeof a) return a(u);
                    var d = r.textComponent || s.Fragment;
                    return s.createElement(d, null, u);
                };
                return (e.displayName = o[t]), e;
            }
            (l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts');
            var c = d('formatDate');
            d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), u('formatDate'), u('formatTime');
        },
        98944: (t, e, r) => {
            'use strict';
            function o(t) {
                let { moduleIds: e } = t;
                return null;
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return o;
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
            () => t((t.s = 56288)),
        ),
            (_N_E = t.O());
    },
]);
