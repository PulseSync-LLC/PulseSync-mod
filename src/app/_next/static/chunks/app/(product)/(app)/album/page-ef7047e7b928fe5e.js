(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8434],
    {
        20176: (e, t, r) => {
            'use strict';
            r.r(t), r.d(t, { default: () => s });
            var a = r(32290),
                n = r(21916),
                u = r(55178),
                l = r(11402),
                o = r(49574);
            let s = () => {
                let e = (0, n.useSearchParams)().get('albumId');
                return (e && (0, o.LLJ)(e)) || (0, n.notFound)(), (0, a.jsx)(u.Suspense, { children: (0, a.jsx)(l.l$, { albumId: e }) });
            };
        },
        41134: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 20176));
        },
        46456: (e, t, r) => {
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
                r(32290),
                r(51767),
                r(40199),
                r(15406);
        },
        57249: (e, t, r) => {
            'use strict';
            e.exports = r.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        63397: (e, t, r) => {
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
                r(82105);
        },
        64910: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                });
            let a = r(32290),
                n = r(55178),
                u = r(63397);
            function l(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            r(46456);
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
        65493: (e, t, r) => {
            'use strict';
            r.d(t, { default: () => n.a });
            var a = r(95574),
                n = r.n(a);
        },
        81354: (e, t, r) => {
            'use strict';
            r.d(t, { XU: () => f });
            var a,
                n,
                u = r(30782),
                l = r(55178),
                o = r(60900);
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
        95574: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                });
            let a = r(33399)._(r(64910));
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
    },
    (e) => {
        e.O(
            0,
            [
                1670, 3445, 9221, 9745, 7236, 4567, 4826, 6328, 5969, 4394, 3693, 7550, 4086, 6375, 1311, 7764, 6706, 1588, 5201, 3267, 9769, 4250, 7307, 4154, 9574,
                4574, 5428, 6049, 4089, 6486, 3317, 864, 3843, 112, 6043, 3557, 4973, 4942, 4547, 8451, 1402, 4220, 9562, 7358,
            ],
            () => e((e.s = 41134)),
        ),
            (_N_E = e.O());
    },
]);
