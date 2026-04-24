(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8434],
    {
        10076: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                });
            let a = r(36283)._(r(23772));
            function n(e, t) {
                var r;
                let n = {};
                'function' == typeof e && (n.loader = e);
                let u = { ...n, ...t };
                return (0, a.default)({ ...u, modules: null == (r = u.loadableGenerated) ? void 0 : r.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        23772: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                });
            let a = r(62936),
                n = r(44020),
                u = r(24571);
            function l(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            r(46950);
            let o = { loader: () => Promise.resolve(l(() => null)), loading: null, ssr: !0 },
                s = function (e) {
                    let t = { ...o, ...e },
                        r = (0, n.lazy)(() => t.loader().then(l)),
                        s = t.loading;
                    function i(e) {
                        let l = s ? (0, a.jsx)(s, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            o = !t.ssr || !!t.loading,
                            i = o ? n.Suspense : n.Fragment,
                            d = t.ssr
                                ? (0, a.jsxs)(a.Fragment, { children: [null, (0, a.jsx)(r, { ...e })] })
                                : (0, a.jsx)(u.BailoutToCSR, { reason: 'next/dynamic', children: (0, a.jsx)(r, { ...e }) });
                        return (0, a.jsx)(i, { ...(o ? { fallback: l } : {}), children: d });
                    }
                    return (i.displayName = 'LoadableComponent'), i;
                };
        },
        24571: (e, t, r) => {
            'use strict';
            function a(e) {
                let { reason: t, children: r } = e;
                return r;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }),
                r(71279);
        },
        36179: (e, t, r) => {
            'use strict';
            r.d(t, { XU: () => f });
            var a,
                n,
                u = r(62986),
                l = r(44020),
                o = r(47480);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(a || (a = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(n || (n = {}));
            var s = function (e) {
                var t = (0, o.A)(),
                    r = e.value,
                    a = e.children,
                    n = (0, u.__rest)(e, ['value', 'children']);
                return a(t.formatNumberToParts(r, n));
            };
            function i(e) {
                var t = function (t) {
                    var r = (0, o.A)(),
                        a = t.value,
                        n = t.children,
                        l = (0, u.__rest)(t, ['value', 'children']),
                        s = 'string' == typeof a ? new Date(a || 0) : a;
                    return n('formatDate' === e ? r.formatDateToParts(s, l) : r.formatTimeToParts(s, l));
                };
                return (t.displayName = n[e]), t;
            }
            function d(e) {
                var t = function (t) {
                    var r = (0, o.A)(),
                        a = t.value,
                        n = t.children,
                        s = (0, u.__rest)(t, ['value', 'children']),
                        i = r[e](a, s);
                    if ('function' == typeof n) return n(i);
                    var d = r.textComponent || l.Fragment;
                    return l.createElement(d, null, i);
                };
                return (t.displayName = a[e]), t;
            }
            (s.displayName = 'FormattedNumberParts'), (s.displayName = 'FormattedNumberParts');
            var f = d('formatDate');
            d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), i('formatDate'), i('formatTime');
        },
        46950: (e, t, r) => {
            'use strict';
            function a(e) {
                let { moduleIds: t } = e;
                return null;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
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
        49351: (e, t, r) => {
            'use strict';
            r.d(t, { default: () => n.a });
            var a = r(10076),
                n = r.n(a);
        },
        50404: (e, t, r) => {
            'use strict';
            r.r(t), r.d(t, { default: () => s });
            var a = r(62936),
                n = r(69526),
                u = r(44020),
                l = r(69370),
                o = r(42561);
            let s = () => {
                let e = (0, n.useSearchParams)().get('albumId');
                return (e && (0, o.LLJ)(e)) || (0, n.notFound)(), (0, a.jsx)(u.Suspense, { children: (0, a.jsx)(l.l$, { albumId: e }) });
            };
        },
        57249: (e, t, r) => {
            'use strict';
            e.exports = r.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        62430: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 50404));
        },
    },
    (e) => {
        e.O(
            0,
            [
                85, 260, 3196, 403, 2537, 3789, 4717, 612, 5721, 2670, 1970, 494, 3302, 3878, 1311, 7764, 6706, 6011, 5201, 2899, 5419, 2530, 5064, 881, 2561, 5906, 4690,
                4501, 9154, 914, 3197, 6161, 3912, 3189, 2632, 2991, 8303, 2290, 4622, 6655, 9370, 1009, 4670, 7358,
            ],
            () => e((e.s = 62430)),
        ),
            (_N_E = e.O());
    },
]);
