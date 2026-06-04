(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2279],
    {
        12119: (t, e, r) => {
            'use strict';
            r.d(e, { NotFound: () => p });
            var o = r(32290),
                a = r(63618),
                n = r(96103),
                s = r(39407),
                i = r(63423),
                l = r(82586),
                u = r(71926),
                d = r(49574),
                c = r(44574),
                m = r(55178),
                f = r(55365),
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
        31570: (t, e, r) => {
            Promise.resolve().then(r.bind(r, 73068)), Promise.resolve().then(r.bind(r, 50334));
        },
        46456: (t, e, r) => {
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
                r(32290),
                r(51767),
                r(40199),
                r(15406);
        },
        50334: (t, e, r) => {
            'use strict';
            r.d(e, { EntitiesPage: () => c });
            var o = r(32290),
                a = r(96103),
                n = r(21916),
                s = r(55178),
                i = r(43557),
                l = r(49574),
                u = r(96194);
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
        55365: (t) => {
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
        63397: (t, e, r) => {
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
                r(82105);
        },
        64910: (t, e, r) => {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                });
            let o = r(32290),
                a = r(55178),
                n = r(63397);
            function s(t) {
                return { default: t && 'default' in t ? t.default : t };
            }
            r(46456);
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
        65493: (t, e, r) => {
            'use strict';
            r.d(e, { default: () => a.a });
            var o = r(95574),
                a = r.n(o);
        },
        73068: (t, e, r) => {
            'use strict';
            r.d(e, { EntitiesNotFoundPage: () => l });
            var o = r(32290),
                a = r(96103),
                n = r(55178),
                s = r(80719),
                i = r(49574);
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
        80719: (t, e, r) => {
            'use strict';
            r.d(e, { M: () => o.NotFound });
            var o = r(12119);
        },
        81354: (t, e, r) => {
            'use strict';
            r.d(e, { XU: () => c });
            var o,
                a,
                n = r(30782),
                s = r(55178),
                i = r(60900);
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
        95574: (t, e, r) => {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                });
            let o = r(33399)._(r(64910));
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
    },
    (t) => {
        t.O(
            0,
            [
                1670, 3445, 9221, 9745, 4567, 4826, 7236, 6328, 5969, 4394, 1311, 7764, 6706, 1588, 5201, 3267, 9769, 4250, 7307, 9574, 4574, 5428, 6049, 4089, 6486,
                3317, 864, 3843, 112, 6043, 3557, 4220, 9562, 7358,
            ],
            () => t((t.s = 31570)),
        ),
            (_N_E = t.O());
    },
]);
