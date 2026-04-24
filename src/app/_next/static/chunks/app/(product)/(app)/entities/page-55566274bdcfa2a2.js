(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6360],
    {
        8159: (t, e, r) => {
            'use strict';
            r.d(e, { EntitiesPage: () => c });
            var a = r(62936),
                o = r(19718),
                n = r(69526),
                s = r(44020),
                i = r(22991),
                l = r(42561),
                u = r(63854);
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
        8712: (t, e, r) => {
            Promise.resolve().then(r.bind(r, 33014));
        },
        9939: (t, e, r) => {
            'use strict';
            r.d(e, { M: () => a.NotFound });
            var a = r(91455);
        },
        10076: (t, e, r) => {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'default', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                });
            let a = r(36283)._(r(23772));
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
        23772: (t, e, r) => {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                });
            let a = r(62936),
                o = r(44020),
                n = r(24571);
            function s(t) {
                return { default: t && 'default' in t ? t.default : t };
            }
            r(46950);
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
        24571: (t, e, r) => {
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
                r(71279);
        },
        33014: (t, e, r) => {
            'use strict';
            r.r(e), r.d(e, { default: () => s });
            var a = r(62936),
                o = r(69526);
            r(34891);
            var n = r(8159);
            let s = () => {
                let t = (0, o.useSearchParams)(),
                    e = t.get('blockType'),
                    r = t.get('blockId');
                return (e && r) || (0, o.notFound)(), (0, a.jsx)(n.EntitiesPage, { blockType: e, blockId: r });
            };
        },
        34891: (t, e, r) => {
            'use strict';
            r.d(e, { EntitiesNotFoundPage: () => l });
            var a = r(62936),
                o = r(19718),
                n = r(44020),
                s = r(9939),
                i = r(42561);
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
        36179: (t, e, r) => {
            'use strict';
            r.d(e, { XU: () => c });
            var a,
                o,
                n = r(62986),
                s = r(44020),
                i = r(47480);
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
        46950: (t, e, r) => {
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
                r(62936),
                r(2933),
                r(34397),
                r(5300);
        },
        49351: (t, e, r) => {
            'use strict';
            r.d(e, { default: () => o.a });
            var a = r(10076),
                o = r.n(a);
        },
        57249: (t, e, r) => {
            'use strict';
            t.exports = r.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
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
        91455: (t, e, r) => {
            'use strict';
            r.d(e, { NotFound: () => p });
            var a = r(62936),
                o = r(79950),
                n = r(19718),
                s = r(26731),
                i = r(5099),
                l = r(85742),
                u = r(20418),
                d = r(42561),
                c = r(85906),
                m = r(44020),
                f = r(88933),
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
    },
    (t) => {
        t.O(
            0,
            [
                85, 260, 3196, 403, 1970, 2537, 3789, 612, 5721, 2670, 1311, 7764, 6706, 6011, 5201, 2899, 5419, 2530, 5064, 2561, 5906, 4690, 4501, 9154, 914, 3197,
                6161, 3912, 3189, 2632, 2991, 1009, 4670, 7358,
            ],
            () => t((t.s = 8712)),
        ),
            (_N_E = t.O());
    },
]);
