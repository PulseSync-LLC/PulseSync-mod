(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1887],
    {
        912: (e) => {
            e.exports = {
                collapseButton: 'NavbarDesktop_collapseButton__XQh9d',
                root: 'NavbarDesktop_root__scYzp',
                logoWrapper: 'NavbarDesktop_logoWrapper__89ce6',
                navigation: 'NavbarDesktop_navigation__dLUGW',
                navigation_new: 'NavbarDesktop_navigation_new__0j8W5',
                navigation_gapFill: 'NavbarDesktop_navigation_gapFill__SsWxA',
                navigationGroup: 'NavbarDesktop_navigationGroup__eexLF',
                logoLink: 'NavbarDesktop_logoLink__KR0Dk',
                logo: 'NavbarDesktop_logo__Z4jGx',
                collapseButtonTooltip_hidden: 'NavbarDesktop_collapseButtonTooltip_hidden__tFoZZ',
                subTitle: 'NavbarDesktop_subTitle__Fqvr4',
                subTitle_withCursorPointer: 'NavbarDesktop_subTitle_withCursorPointer__VYJOh',
                title: 'NavbarDesktop_title__OrnHN',
                title_animate: 'NavbarDesktop_title_animate__XLxaQ',
                animation_show: 'NavbarDesktop_animation_show__pRFj9',
                title_collapsed: 'NavbarDesktop_title_collapsed__IH9Bc',
                animation_hide: 'NavbarDesktop_animation_hide__8VxPs',
                pinsList: 'NavbarDesktop_pinsList___jXIM',
                scrollableContainer: 'NavbarDesktop_scrollableContainer__HLc9D',
                scrollableContent: 'NavbarDesktop_scrollableContent__OyU4P',
                disabledNavigationItem: 'NavbarDesktop_disabledNavigationItem__Qp_hs',
                bestRecommendationsModal: 'NavbarDesktop_bestRecommendationsModal__l7GD2',
                bestRecommendationsModalHeader: 'NavbarDesktop_bestRecommendationsModalHeader__VSi5Y',
                bestRecommendationsModalContent: 'NavbarDesktop_bestRecommendationsModalContent__WhwfK',
                bestRecommendationsModalLogo: 'NavbarDesktop_bestRecommendationsModalLogo__QnXgm',
                bestRecommendationsModalText: 'NavbarDesktop_bestRecommendationsModalText__05Z3M',
            };
        },
        1147: (e) => {
            e.exports = {
                root: 'PinsList_root__LN_2Z',
                root_withScroll: 'PinsList_root_withScroll__g8x3V',
                root_hasPins: 'PinsList_root_hasPins__3LXlo',
                content: 'PinsList_content__9RG7s',
                pin_enter: 'PinsList_pin_enter__2p2_6',
                pin_enter_active: 'PinsList_pin_enter_active__eNGlc',
                'enter-fade': 'PinsList_enter-fade__G_QY8',
                'enter-move': 'PinsList_enter-move__DSAXH',
                pin_exit: 'PinsList_pin_exit__y_gcM',
                pin_exit_active: 'PinsList_pin_exit_active__rF5Je',
                'exit-fade': 'PinsList_exit-fade__M6fYX',
                'exit-move': 'PinsList_exit-move__Jtgi0',
            };
        },
        3299: (e, t, a) => {
            'use strict';
            a.d(t, { Fp: () => tX, _1: () => O, Yp: () => I });
            var i,
                n,
                l,
                r,
                s,
                o,
                d,
                c,
                u,
                m,
                p = a(8055),
                _ = a(55178),
                g = a.t(_, 2),
                v = a(42543),
                b = a(49574);
            let h = (e) => window.innerWidth < (e ? 1920 : 1024),
                I = () => {
                    let { sideBannerRef: e } = (0, b.gKY)(),
                        {
                            advertBanners: {
                                banners: { sideAdvertBanner: t },
                            },
                        } = (0, b.Pjs)(),
                        a = (0, v.y)(),
                        i = e ? !!(t.isVisible && e.clientWidth) : a,
                        [n, l] = (0, _.useState)(h(i)),
                        r = (0, _.useMemo)(
                            () =>
                                (0, p.A)(
                                    () => {
                                        l(h(i));
                                    },
                                    100,
                                    { trailing: !1 },
                                ),
                            [l, i],
                        );
                    return (
                        (0, _.useEffect)(
                            () => (
                                window.addEventListener('resize', r),
                                r(),
                                () => {
                                    window.removeEventListener('resize', r);
                                }
                            ),
                            [r],
                        ),
                        n
                    );
                };
            var x = a(60754),
                N = a(90404),
                A = a(9152),
                S = a(33797),
                y = a(55550),
                C = a(57318);
            let T = x.gK.model('PinAlbumItemModel', { type: x.gK.literal(N._.ALBUM_ITEM), data: A.GI }),
                f = x.gK.model('PinArtistItemModel', { type: x.gK.literal(N._.ARTIST_ITEM), data: S.PK }),
                E = x.gK.model('PinPlaylistItemModel', { type: x.gK.literal(N._.PLAYLIST_ITEM), data: y.$o }),
                L = x.gK.model('PinVibeItemModel', { type: x.gK.literal(N._.WAVE_ITEM), data: C.Gh }),
                P = x.gK.union(T, f, E, L),
                j = (e) => 'object' == typeof e && e && 'type' in e;
            var R = a(16486),
                k = a(50510);
            let M = (e) => {
                    switch (e.type) {
                        case N._.WAVE_ITEM:
                            return (0, x.wg)({ type: N._.WAVE_ITEM, data: (0, C.er)(e.data) });
                        case N._.PLAYLIST_ITEM:
                            return (0, x.wg)({ type: N._.PLAYLIST_ITEM, data: (0, k.bk)({ playlist: e.data }) });
                        case N._.ARTIST_ITEM:
                            return (0, x.wg)({ type: N._.ARTIST_ITEM, data: (0, S.as)({ artist: e.data }) });
                        case N._.ALBUM_ITEM:
                            return (0, x.wg)({ type: N._.ALBUM_ITEM, data: (0, R.sK)({ album: e.data }) });
                    }
                },
                O = x.gK
                    .model('Pins', { loadingState: x.gK.enumeration(Object.values(b.GuX)), items: x.gK.maybeNull(x.gK.array(P)), index: x.gK.map(x.gK.boolean) })
                    .views((e) => ({
                        isPinned: (t) => !!e.index.get(t),
                        get(t) {
                            var a;
                            return null == (a = e.items) ? void 0 : a.find((e) => e.data.pinId === t);
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            deletePin(t) {
                                var a;
                                (e.items = (0, x.wg)(null == (a = e.items) ? void 0 : a.filter((e) => e.data.pinId !== t))), e.index.delete(t);
                            },
                            addPin(t) {
                                var a, i, n, l;
                                if ((null == (a = e.items) ? void 0 : a.length) === 30) {
                                    let t = null == (l = e.items) ? void 0 : l.pop();
                                    void 0 !== t && e.index.delete(t.data.pinId);
                                }
                                null == (i = e.items) || i.unshift(M(t));
                                let r = null == (n = e.items) ? void 0 : n.at(0);
                                r && e.index.set(r.data.pinId, !0);
                            },
                            getData: (0, x.L3)(function* () {
                                let { pinsResource: t, modelActionsLogger: a } = (0, x._$)(e);
                                if (e.loadingState !== b.GuX.PENDING)
                                    try {
                                        var i;
                                        e.loadingState = b.GuX.PENDING;
                                        let a = yield t.getPins();
                                        (e.items = (0, x.wg)(a.pins.map(M))),
                                            null == (i = e.items) ||
                                                i.forEach((t) => {
                                                    e.index.set(t.data.pinId, !0);
                                                }),
                                            (e.loadingState = b.GuX.RESOLVE);
                                    } catch (t) {
                                        (e.loadingState = b.GuX.REJECT), a.error(t);
                                    }
                            }),
                            toggleAlbumPin: (0, x.L3)(function* (a, i) {
                                let { pinResource: n, modelActionsLogger: l } = (0, x._$)(e);
                                if (e.loadingState !== b.GuX.PENDING)
                                    try {
                                        let l;
                                        if (e.isPinned(i)) return (l = yield n.unpinAlbum(a)), t.deletePin(i), l;
                                        return (l = yield n.pinAlbum(a)), j(l) && t.addPin(l), l;
                                    } catch (e) {
                                        l.error(e);
                                        return;
                                    }
                            }),
                            toggleArtistPin: (0, x.L3)(function* (a, i) {
                                let { pinResource: n, modelActionsLogger: l } = (0, x._$)(e);
                                if (e.loadingState !== b.GuX.PENDING)
                                    try {
                                        let l;
                                        if (e.isPinned(i)) return (l = yield n.unpinArtist(a)), t.deletePin(i), l;
                                        return (l = yield n.pinArtist(a)), j(l) && t.addPin(l), l;
                                    } catch (e) {
                                        l.error(e);
                                        return;
                                    }
                            }),
                            togglePlaylistPin: (0, x.L3)(function* (a, i) {
                                let { pinResource: n, modelActionsLogger: l } = (0, x._$)(e);
                                if (e.loadingState !== b.GuX.PENDING)
                                    try {
                                        let l;
                                        if (e.isPinned(i)) return (l = yield n.unpinPlaylist(a)), t.deletePin(i), l;
                                        return (l = yield n.pinPlaylist(a)), j(l) && t.addPin(l), l;
                                    } catch (e) {
                                        l.error(e);
                                        return;
                                    }
                            }),
                            toggleVibePin: (0, x.L3)(function* (a, i) {
                                let { pinResource: n, modelActionsLogger: l } = (0, x._$)(e);
                                if (e.loadingState !== b.GuX.PENDING)
                                    try {
                                        let l;
                                        if (e.isPinned(i)) return (l = yield n.unpinWave(a)), t.deletePin(i), l;
                                        return (l = yield n.pinWave(a)), j(l) && t.addPin(l), l;
                                    } catch (e) {
                                        l.error(e);
                                        return;
                                    }
                            }),
                        };
                        return t;
                    });
            var w = a(32290),
                B = a(63618),
                D = a(96103),
                K = a(59824),
                U = a(91027),
                V = a(16172),
                F = a(52068),
                G = a(83439),
                z = a.n(G),
                X = a(60900),
                W = a(39407),
                Y = a(54862),
                $ = a(63423),
                H = a(82586),
                q = a(7276),
                Z = a(84638),
                Q = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length; )
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (n && (n += ' '), (n += i));
                                            else for (a in t) t[a] && (n && (n += ' '), (n += a));
                                        return n;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        a.r(t), a.d(t, { clsx: () => i, default: () => n });
                        let n = i;
                    },
                    3980: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = {
                            root: 'NGdj0oZ2Bt8qdZhP2Tzt',
                            root_collapsed: 'rece5errcONnjJeX0YW8',
                            root_direction_vertical: 'QilmoKKJwk6f0BdkYgrA',
                            root_direction_horizontal: 'AO4rWY4RLVh48fwQw5Qs',
                        };
                    },
                    674: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = { root: 'yuyI2hMAT7qyL1N14MAQ', root_direction_vertical: 'xfFtKQpgAYvC2jI1tBtS', root_direction_horizontal: 'OGlYJO0lZgpSOhfU2Iru' };
                    },
                    7391: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = {
                            root: 'Bp1d3U6W8Nrbqi3MRQS_',
                            root_direction_vertical: 'hYfgO_Y8c4rrQsZJWTDZ',
                            ripple: 'UiZ4QyGEVzfvZ3QfQqqA',
                            root_direction_horizontal: 'X_Lr5kqrhzMO6kX8v92s',
                            root_collapsed: 'Q3gGGaIXiJ_oQTiVZBfl',
                            root_variant_main: 'H4trq_Zx2d9qOnQgxmxr',
                            root_animate: 'Kr9rXeXGlqHee2euqH0u',
                            animation_width: 'k8zKIZRDy6LmoaIcEpo8',
                            item: 'A4bDkbQHkwWNGqxO9qhW',
                            item_selected: 'mAd9pgMkWVX5ktCgYINQ',
                            item_direction_vertical: 'Xx9Tg5ugzg1pkf8Zh421',
                            item_direction_horizontal: 'fQVXazc9HwT3NQ8dywCh',
                            iconContainer: 'zpkgiiHgDpbBThy6gavq',
                            textContainer: 'ZrkG6gNYcr4h3hfkhyT1',
                            textContainer_selected: 'xENlRAFvRskKnt8LUObC',
                            textContainer_direction_horizontal: 'xE5fIMRnjd8oSm5BOhpI',
                        };
                    },
                    3162: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = {
                            root: 'HcfYy4VfnRHqgXzIdL7w',
                            root_direction_vertical: 'kRmUIkcHKD5AgtpPo8wT',
                            ripple: 'aHtf5XL4YejhYEJNUkYi',
                            root_direction_horizontal: 'ZxlCWb78gIBQ8izioAXa',
                            root_collapsed: 'e1KYSvMXXv0FD4s_yCuw',
                            item: 'ZfF8mQ3Iftpwu0aZgDtG',
                            item_selected: 'Eg3pt5lTL33sOlxorSbN',
                            item_direction_vertical: 'yWJHrpNsBvchs9Jjyokk',
                            item_direction_horizontal: 'bJ7YpssStK5UnpbuTtf2',
                            item_collapsed_vertical: 'uw57VJ37U4rAAHDs0zJR',
                            iconContainer: '_YzsXZGNK8KeaUFC4Ja1',
                            textContainer: 'nxMXCBiVfgH4oxds3f2y',
                            textContainer_selected: 'jhnLSZpmG69Hlxi8n6IO',
                            textContainer_direction_horizontal: 'FH36Kh9OP4VHc2Yv3bIc',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var n = null;
                            if ((void 0 !== i && (n = '' + i), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var l in ((i = {}), t)) 'key' !== l && (i[l] = t[l]);
                            else i = t;
                            return { $$typeof: a, type: e, key: n, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i);
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    8796: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, a) {
                                let i = null != a ? a : e.currentTarget,
                                    n = document.createElement('span'),
                                    l = Math.max(i.clientWidth, i.clientHeight),
                                    r = l / 2,
                                    s = i.getBoundingClientRect(),
                                    o = 0 === e.clientX ? Math.round(s.width / 2) : e.clientX - s.left,
                                    d = 0 === e.clientY ? Math.round(s.height / 2) : e.clientY - s.top;
                                (n.style.width = ''.concat(l, 'px')),
                                    (n.style.height = ''.concat(l, 'px')),
                                    (n.style.left = 0 === e.clientX ? '0px' : ''.concat(o - r, 'px')),
                                    (n.style.top = ''.concat(d - r, 'px')),
                                    n.classList.add(t);
                                let c = i.getElementsByClassName(t)[0];
                                c && c.remove(), i.insertBefore(n, i.firstChild);
                            });
                    },
                    361: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            });
                    },
                    8216: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.getElementFromRefOrElement = t.createRipple = void 0);
                        var i = a(8796);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return i.createRipple;
                            },
                        });
                        var n = a(361);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return n.getElementFromRefOrElement;
                            },
                        });
                    },
                    19: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Navigation = void 0);
                        let n = a(4377),
                            l = a(5881),
                            r = a(7786),
                            s = i(a(3980));
                        t.Navigation = function (e) {
                            let { className: t, children: a, collapsed: i = !1, direction: o = 'vertical', ...d } = e;
                            return (0, n.jsx)(r.NavigationProvider, {
                                collapsed: i,
                                direction: o,
                                children: (0, n.jsx)('nav', {
                                    className: (0, l.clsx)(s.default.root, s.default['root_direction_'.concat(o)], { [s.default.root_collapsed]: i }, t),
                                    'aria-label': d['aria-label'],
                                    ...d,
                                    children: a,
                                }),
                            });
                        };
                    },
                    7786: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationProvider = t.NavigationContext = void 0);
                        let i = a(4377),
                            n = a(810);
                        (t.NavigationContext = (0, n.createContext)({ collapsed: !1, direction: 'vertical' })),
                            (t.NavigationProvider = (e) => {
                                let { collapsed: a, direction: l, children: r } = e,
                                    s = (0, n.useMemo)(() => ({ collapsed: a, direction: l }), [a, l]);
                                return (0, i.jsx)(t.NavigationContext.Provider, { value: s, children: r });
                            });
                    },
                    8106: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationGroup = void 0);
                        let n = a(4377),
                            l = a(810),
                            r = a(5881),
                            s = a(7786),
                            o = i(a(674));
                        t.NavigationGroup = function (e) {
                            let { className: t, children: a, ...i } = e,
                                d = (0, l.createRef)(),
                                { direction: c } = (0, l.useContext)(s.NavigationContext);
                            return (0, n.jsx)('ol', { ref: d, className: (0, r.clsx)(o.default.root, o.default['root_direction_'.concat(c)], t), ...i, children: a });
                        };
                    },
                    3506: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationItem = t.NavigationItemComponent = void 0);
                        let n = a(4377),
                            l = a(810),
                            r = a(5881),
                            s = a(7786),
                            o = a(8216),
                            d = i(a(7391)),
                            c = i(a(3162));
                        function u(e) {
                            let {
                                    className: t = '',
                                    forwardRef: a,
                                    children: i,
                                    selected: u = !1,
                                    shownAnimation: m,
                                    withRipple: p = !1,
                                    variant: _ = 'default',
                                    isNewVisualVersion: g,
                                    ...v
                                } = e,
                                { collapsed: b, direction: h } = (0, l.useContext)(s.NavigationContext),
                                I = g ? c.default : d.default,
                                x = (0, l.useCallback)(
                                    (e) => {
                                        p && (0, o.createRipple)(e, I.ripple);
                                    },
                                    [I.ripple, p],
                                ),
                                [N, A] = l.Children.toArray(i.props.children),
                                S = (0, l.useMemo)(
                                    () =>
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)('div', { className: I.iconContainer, children: N }),
                                                (0, n.jsx)('div', {
                                                    className: (0, r.clsx)(I.textContainer, I['textContainer_direction_'.concat(h)], { [I.textContainer_selected]: u }),
                                                    children: A,
                                                }),
                                            ],
                                        }),
                                    [I, N, h, u, A],
                                ),
                                y = (0, l.cloneElement)(i, {
                                    className: (0, r.clsx)(
                                        I.item,
                                        I['item_direction_'.concat(h)],
                                        { [I.item_selected]: u, [I['item_collapsed_'.concat(h)]]: b },
                                        i.props.className,
                                    ),
                                    children: S,
                                });
                            return (0, n.jsx)('li', {
                                ref: a,
                                className: (0, r.clsx)(
                                    I.root,
                                    I['root_direction_'.concat(h)],
                                    I['root_variant_'.concat(_)],
                                    { [I.root_animate]: m, [I.root_collapsed]: b },
                                    t,
                                ),
                                'aria-current': !!u && 'page',
                                onClick: x,
                                ...v,
                                children: y,
                            });
                        }
                        (t.NavigationItemComponent = u), (t.NavigationItem = (0, l.forwardRef)((e, t) => (0, n.jsx)(u, { forwardRef: t, ...e })));
                    },
                    810: (e) => {
                        e.exports = g;
                    },
                },
                J = {};
            function ee(e) {
                var t = J[e];
                if (void 0 !== t) return t.exports;
                var a = (J[e] = { exports: {} });
                return Q[e].call(a.exports, a, a.exports, ee), a.exports;
            }
            (ee.d = (e, t) => {
                for (var a in t) ee.o(t, a) && !ee.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (ee.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (ee.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var et = {};
            (() => {
                Object.defineProperty(et, 'X$', { value: !0 }), (et.Dx = et.KB = et.W_ = void 0);
                var e = ee(19);
                Object.defineProperty(et, 'W_', {
                    enumerable: !0,
                    get: function () {
                        return e.Navigation;
                    },
                });
                var t = ee(8106);
                Object.defineProperty(et, 'KB', {
                    enumerable: !0,
                    get: function () {
                        return t.NavigationGroup;
                    },
                });
                var a = ee(3506);
                Object.defineProperty(et, 'Dx', {
                    enumerable: !0,
                    get: function () {
                        return a.NavigationItem;
                    },
                });
            })();
            var ea = et.W_,
                ei = et.KB,
                en = et.Dx;
            et.X$;
            var el = a(70280),
                er = a(71926),
                es = a(4393),
                eo = a(44574);
            let ed = () => {
                    let e = (0, F.st)(),
                        { hash: t } = (0, F.gf)(),
                        a = (0, b.UlF)(),
                        { location: i } = (0, b.Pjs)();
                    return (0, _.useCallback)(
                        (n, l) => {
                            if (!e || !t) return;
                            let r = (0, V.Fx)({
                                params: ((e) => {
                                    let { isNotFound: t, entityType: a, to: i, hash: n } = e;
                                    return t
                                        ? {
                                              entityType: V.LA.Error,
                                              entityId: V.LA.Error,
                                              hash: n,
                                              pageId: V.QT.PageNotFoundScreen,
                                              pageStyle: V.QL.Fullscreen,
                                              pagePlacement: V.c4.Fullscreen,
                                              mainObjectType: V.ky.NonApplicable,
                                              mainObjectId: V.ky.NonApplicable,
                                              from: V.QT.PageNotFoundScreen,
                                              to: i,
                                          }
                                        : {
                                              entityType: a,
                                              entityId: a,
                                              hash: n,
                                              pageId: V.QT.Sidebar,
                                              pageStyle: V.QL.Bar,
                                              pagePlacement: V.c4.Left,
                                              from: V.QT.Sidebar,
                                              to: i,
                                          };
                                })({ isNotFound: i.isNotFound, entityType: n, to: l, hash: t }),
                                logger: a,
                                context: 'useSendEventOnNavbarNavigated',
                            });
                            r && (0, V.ID)(e.evgenInstance, r);
                        },
                        [e, t, a, i.isNotFound],
                    );
                },
                ec = {
                    [b.RnV.SEARCH]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_SEARCH,
                    [b.RnV.HOME]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_HOME,
                    [b.RnV.FOR_YOU_AND_TRENDS]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_FOR_YOU_AND_TRENDS,
                    [b.RnV.CONCERTS]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_CONCERTS,
                    [b.RnV.NON_MUSIC]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_NON_MUSIC,
                    [b.RnV.KIDS]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_KIDS,
                    [b.RnV.COLLECTION]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_COLLECTION,
                    [b.RnV.PLUS]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_PLUS,
                },
                eu = (e) => {
                    let { padding: t, placement: a } = e;
                    return { shiftOptions: { padding: t }, offsetOptions: t, flipOptions: { fallbackAxisSideDirection: 'start', padding: t }, placement: a };
                },
                em = eu({ placement: 'right', padding: 8 });
            var ep = a(89053),
                e_ = a.n(ep);
            let eg = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                ev = (0, D.PA)((e) => {
                    let { config: t, children: a } = e,
                        { formatMessage: i } = (0, X.A)(),
                        {
                            settings: { isMobile: n },
                        } = (0, b.Pjs)(),
                        { compositePlayerBarRef: l } = (0, b.gKY)(),
                        { setIsOnboardingOpened: r } = (0, b.wD7)(),
                        [s, o] = (0, Y.d)(),
                        d = (0, b.zzi)({ id: t.id, ref: s }),
                        [c, u] = (0, _.useState)(d && t.isEnabled),
                        m = (0, U.c)((e) => {
                            null == e || e.stopPropagation(), u(!1), r(!1);
                        }),
                        p = (0, U.c)((e) => {
                            e || m();
                        });
                    return (0, w.jsxs)(el.m_, {
                        placement: n ? 'top' : 'right',
                        arrowProps: eg,
                        offsetOptions: n ? 15 : -10,
                        isHoverEnabled: !1,
                        open: c,
                        onOpenChange: p,
                        enableAriaDescribedby: !0,
                        referenceRef: o,
                        children: [
                            a,
                            (0, w.jsxs)(el.ZI, {
                                className: e_().tooltip,
                                rootNode: n ? l : void 0,
                                children: [
                                    (0, w.jsx)($.$, {
                                        icon: (0, w.jsx)(H.Icon, { variant: 'close', size: 'xxs' }),
                                        onClick: m,
                                        variant: 'text',
                                        withRipple: !1,
                                        className: e_().button,
                                        'aria-label': i({ id: 'interface-actions.close' }),
                                    }),
                                    (0, w.jsx)(er.Caption, { className: e_().text, variant: 'span', children: t.text }),
                                ],
                            }),
                        ],
                    });
                }),
                eb = (e) => {
                    let { config: t, children: a } = e;
                    return t ? (0, w.jsx)(ev, { config: t, children: a }) : a;
                };
            var eh = a(29172),
                eI = a(9612),
                ex = a(50162),
                eN = a(86269);
            let eA = () => {
                let e = (0, F.st)(),
                    { hash: t } = (0, F.gf)(),
                    a = (0, b.UlF)(),
                    {
                        settings: { isMobile: i },
                    } = (0, b.Pjs)();
                return (0, _.useCallback)(
                    (n, l) => {
                        if (!e) return;
                        let r = (0, V.Fx)({
                            params: { hash: t, pageId: V.QT.Sidebar, sidebarSize: n || i ? V.JQ.Small : V.JQ.Medium, from: V.QT.Sidebar, to: l },
                            logger: a,
                            context: 'useSendEventOnSidebarNavigated',
                        });
                        r && (0, V.qi)(e.evgenInstance, r);
                    },
                    [e, t, i, a],
                );
            };
            var eS = a(58359),
                ey = a(97153),
                eC = a.n(ey);
            let eT = (e) => {
                    let { children: t, entityUrl: a, ...i } = e;
                    return a ? (0, w.jsx)(eo.N_, { href: a, className: eC().link, ...i, children: t }) : t;
                },
                ef = (e) => {
                    let {
                            className: t,
                            cover: a,
                            title: i,
                            subtitle: n,
                            contextMenu: l,
                            isCollapsed: r,
                            withCollapseAnimation: s,
                            entityUrl: o,
                            onDoubleClick: d,
                            onClick: c,
                            forwardRef: u,
                            ariaLabel: m,
                        } = e,
                        p = (0, b.EE7)(),
                        g = (0, _.useCallback)(
                            (e) => {
                                2 === e.detail
                                    ? null == d || d()
                                    : (e.target instanceof HTMLElement && 'IMG' !== e.target.tagName && (0, eS.P)(e, eC().ripple), null == c || c(e));
                            },
                            [c, d],
                        ),
                        v = o && p([o]) ? void 0 : o;
                    return (0, w.jsxs)(eo.Cj, {
                        ref: u,
                        className: (0, B.$)(eC().root, { [eC().root_withoutLink]: !v }, t),
                        role: 'listitem',
                        'aria-label': m,
                        ...(0, K.Am)(K.e8.navbar.PIN_ITEM),
                        children: [
                            (0, w.jsxs)(eT, {
                                entityUrl: v,
                                onClick: g,
                                children: [
                                    (0, w.jsx)('div', { className: eC().cover, ...(0, K.Am)(K.e8.navbar.PIN_COVER), children: a }),
                                    (0, w.jsx)('div', {
                                        className: eC().meta,
                                        children: (0, w.jsxs)('div', {
                                            className: (0, B.$)(eC().info, {
                                                [eC().info_collapsed]: r,
                                                [eC().info_animated]: s,
                                                [eC().info_withContextMenu]: (0, _.isValidElement)(l),
                                            }),
                                            children: [
                                                (0, w.jsx)(er.Caption, {
                                                    'aria-hidden': !0,
                                                    className: eC().title,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    lineClamp: 1,
                                                    ...(0, K.Am)(K.e8.navbar.PIN_TITLE),
                                                    children: i,
                                                }),
                                                (0, w.jsx)(er.Caption, {
                                                    'aria-hidden': !0,
                                                    className: eC().subtitle,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    lineClamp: 1,
                                                    ...(0, K.Am)(K.e8.navbar.PIN_SUBTITLE),
                                                    children: n,
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, _.isValidElement)(l) &&
                                (0, w.jsx)('div', {
                                    className: (0, B.$)(eC().contextMenu, { [eC().contextMenu_hidden]: r }),
                                    ...(0, K.Am)(K.e8.navbar.PIN_CONTEXT_MENU_BUTTON),
                                    children: l,
                                }),
                        ],
                    });
                },
                eE = (0, _.forwardRef)((e, t) => (0, w.jsx)(ef, { forwardRef: t, ...e })),
                eL = (0, _.createContext)(null);
            var eP = a(13166),
                ej = a.n(eP),
                eR = a(19740);
            let ek = () => {
                    let e = (0, F.st)(),
                        { hash: t } = (0, F.gf)(),
                        a = (0, b.UlF)(),
                        {
                            settings: { isMobile: i },
                        } = (0, b.Pjs)();
                    return (0, _.useCallback)(
                        (n) => {
                            let { actionType: l, isCollapsed: r, mainObjectType: s, mainObjectId: o } = n;
                            if (!e) return;
                            let d = { hash: t, actionType: l, user_interaction_type: V.gi.Tap, pageId: V.QT.Sidebar, sidebarSize: r || i ? V.JQ.Small : V.JQ.Medium };
                            s && (d.mainObjectType = s), o && (d.mainObjectId = o);
                            let c = (0, V.Fx)({ params: d, logger: a, context: 'useSendEventOnSidebarActionPerformed' });
                            c && (0, V.dL)(e.evgenInstance, c);
                        },
                        [e, t, i, a],
                    );
                },
                eM = (e) => {
                    let { onPinClick: t, isPinned: a } = e,
                        { formatMessage: i } = (0, X.A)(),
                        { isCollapsed: n } = (0, _.useContext)(eL) || {},
                        [l, r] = (0, _.useState)(!1),
                        s = ek(),
                        o = (0, _.useCallback)((e) => {
                            e.preventDefault(), e.stopPropagation();
                        }, []),
                        d = (0, _.useCallback)(() => {
                            t(), s({ actionType: V.X2.Unpin, isCollapsed: null != n && n });
                        }, [n, t, s]);
                    return (
                        (0, b.NBO)(l),
                        (0, w.jsx)(eR.W1, {
                            className: (0, B.$)(ej().contextMenu, { [ej().contextMenu_visible]: l }),
                            onClick: o,
                            icon: (0, w.jsx)(H.Icon, { size: 'xxs', variant: 'more' }),
                            tabIndex: n ? -1 : 0,
                            'aria-hidden': n,
                            variant: 'text',
                            offsetOptions: 3,
                            open: l,
                            onOpenChange: r,
                            ariaLabel: i({ id: 'interface-actions.context-menu' }),
                            containerProps: (0, K.Am)(K.e8.navbar.PIN_CONTEXT_MENU),
                            children: (0, w.jsx)(eo.L1, { onClick: d, isPinned: a }),
                        })
                    );
                },
                eO = (0, D.PA)((e) => {
                    var t;
                    let { className: a, album: i, forwardRef: n, tooltipOptions: l } = e,
                        { formatMessage: r } = (0, X.A)(),
                        { isCollapsed: s, withCollapseAnimation: o } = null != (t = (0, _.useContext)(eL)) ? t : {},
                        d = (0, A.A7)(i),
                        c = (0, A.r_)(i.type, A.cr.PIN),
                        u = eA(),
                        m = (0, A.Rl)(i.type),
                        p = (0, b.ZpR)(i.url),
                        g = (0, A.$1)({ albumId: i.id, albumUrl: i.url, callback: p }),
                        v = (0, A.cp)({ album: i, callback: g }),
                        h = (0, U.c)((e) => {
                            u(null != s && s, m), v(e);
                        }),
                        I = (0, _.useMemo)(
                            () =>
                                (0, w.jsx)(eN.Paper, {
                                    className: ej().cover,
                                    radius: 'xs',
                                    children: (0, w.jsxs)(el.m_, {
                                        ...l,
                                        enabled: s,
                                        children: [
                                            (0, w.jsx)(ex.Image, {
                                                className: ej().image,
                                                'aria-hidden': !0,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, w.jsx)(el.ZI, {
                                                className: ej().tooltip,
                                                children: (0, w.jsx)(er.Caption, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.title,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [i.coverUri, i.title, s, l],
                        );
                    return (0, w.jsx)(eE, {
                        ref: n,
                        ariaLabel: r({ id: 'entity-names.album-name' }, { albumName: i.title }),
                        className: (0, B.$)(ej().root, a),
                        title: i.title,
                        entityUrl: i.url,
                        subtitle: c,
                        cover: I,
                        isCollapsed: !!s,
                        withCollapseAnimation: !!o,
                        contextMenu: (0, w.jsx)(eM, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: h,
                    });
                }),
                ew = (0, _.forwardRef)((e, t) => (0, w.jsx)(eO, { forwardRef: t, ...e })),
                eB = (0, D.PA)((e) => {
                    var t;
                    let { className: a, artist: i, forwardRef: n, tooltipOptions: l } = e,
                        { formatMessage: r } = (0, X.A)(),
                        { isCollapsed: s, withCollapseAnimation: o } = null != (t = (0, _.useContext)(eL)) ? t : {},
                        d = (0, S.A7)(i),
                        c = eA(),
                        u = (0, b.ZpR)(i.url),
                        m = (0, S.SA)({ artist: i, callback: u }),
                        p = (0, U.c)((e) => {
                            c(null != s && s, V.QT.ArtistScreen), m(e);
                        }),
                        g = (0, _.useMemo)(
                            () =>
                                (0, w.jsx)(eN.Paper, {
                                    className: ej().cover,
                                    radius: 'round',
                                    children: (0, w.jsxs)(el.m_, {
                                        ...l,
                                        enabled: s,
                                        children: [
                                            (0, w.jsx)(ex.Image, {
                                                className: ej().image,
                                                'aria-hidden': !0,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, w.jsx)(el.ZI, {
                                                className: ej().tooltip,
                                                children: (0, w.jsx)(er.Caption, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.name,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [i.coverUri, i.name, s, l],
                        );
                    return (0, w.jsx)(eE, {
                        ref: n,
                        ariaLabel: r({ id: 'entity-names.artist-name' }, { artistName: i.name }),
                        className: (0, B.$)(ej().root, a),
                        title: i.name,
                        entityUrl: i.url,
                        subtitle: (0, w.jsx)(W.A, { id: 'entity-names.artist' }),
                        cover: g,
                        isCollapsed: !!s,
                        withCollapseAnimation: !!o,
                        contextMenu: (0, w.jsx)(eM, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: p,
                    });
                }),
                eD = (0, _.forwardRef)((e, t) => (0, w.jsx)(eB, { forwardRef: t, ...e })),
                eK = (e) => {
                    var t;
                    let { className: a, playlist: i, forwardRef: n, tooltipOptions: l } = e,
                        { formatMessage: r } = (0, X.A)(),
                        { isCollapsed: s, withCollapseAnimation: o } = null != (t = (0, _.useContext)(eL)) ? t : {},
                        d = (0, y.A7)(i),
                        c = eA(),
                        u = (0, U.c)(() => {
                            c(null != s && s, V.QT.PlaylistScreen);
                        }),
                        m = (0, _.useMemo)(
                            () =>
                                (0, w.jsx)(eN.Paper, {
                                    className: ej().cover,
                                    radius: 'xs',
                                    children: (0, w.jsxs)(el.m_, {
                                        ...l,
                                        enabled: s,
                                        children: [
                                            (0, w.jsx)(ex.Image, {
                                                'aria-hidden': !0,
                                                className: ej().image,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, w.jsx)(el.ZI, {
                                                className: ej().tooltip,
                                                children: (0, w.jsx)(er.Caption, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.title,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [s, i.coverUri, i.title, l],
                        );
                    return (0, w.jsx)(eE, {
                        ref: n,
                        ariaLabel: r({ id: 'entity-names.playlist-name' }, { playlistName: i.title }),
                        className: (0, B.$)(ej().root, a),
                        title: i.title,
                        entityUrl: i.url,
                        subtitle: (0, w.jsx)(W.A, { id: 'entity-names.playlist' }),
                        cover: m,
                        isCollapsed: !!s,
                        withCollapseAnimation: !!o,
                        contextMenu: (0, w.jsx)(eM, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: u,
                    });
                },
                eU = (0, _.forwardRef)((e, t) => (0, w.jsx)(eK, { forwardRef: t, ...e }));
            var eV = a(6752),
                eF = a(44989);
            let eG = (0, D.PA)((e) => {
                    var t;
                    let { className: a, vibe: i, forwardRef: n, tooltipOptions: l } = e,
                        r = (0, _.useId)(),
                        { formatMessage: s } = (0, X.A)(),
                        { isCollapsed: o, withCollapseAnimation: d } = null != (t = (0, _.useContext)(eL)) ? t : {},
                        [c, u] = (0, _.useState)(!1),
                        m = (0, C.A7)(i),
                        { withPlusPopoverWeb: p } = (0, b.XCI)(),
                        { state: g, setState: v } = (0, eF.e)(!1),
                        h = (() => {
                            let e = (0, F.st)(),
                                { hash: t } = (0, F.gf)(),
                                a = (0, b.UlF)(),
                                {
                                    settings: { isMobile: i },
                                } = (0, b.Pjs)();
                            return (0, _.useCallback)(
                                (n) => {
                                    let { isCollapsed: l, mainObjectId: r } = n;
                                    if (!e) return;
                                    let s = (0, V.Fx)({
                                        params: {
                                            hash: t,
                                            pageId: V.QT.Sidebar,
                                            sidebarSize: l || i ? V.JQ.Small : V.JQ.Medium,
                                            mainObjectType: V.ky.Wave,
                                            mainObjectId: r,
                                        },
                                        logger: a,
                                        context: 'useSendEventOnSidebarStarted',
                                    });
                                    s && (0, V.cV)(e.evgenInstance, s);
                                },
                                [e, t, i, a],
                            );
                        })(),
                        I = ek(),
                        x = (0, b.brA)(),
                        N = (0, b.PT7)(),
                        { isPlaying: A, togglePlay: S, isCurrent: y } = (0, b.B0S)({ seeds: i.seeds, pageIdForFrom: b._Q$.SIDEBAR, blockIdForFrom: b.UfI.RADIO }),
                        T = (0, U.c)(async () => {
                            var e, t;
                            return p
                                ? void v(!0)
                                : (A
                                      ? I({
                                            actionType: V.X2.Pause,
                                            isCollapsed: null != o && o,
                                            mainObjectType: V.ky.Wave,
                                            mainObjectId: null != (e = i.seeds[0]) ? e : '',
                                        })
                                      : h({ isCollapsed: null != o && o, mainObjectId: null != (t = i.seeds[0]) ? t : '' }),
                                  S());
                        }),
                        f = (0, U.c)(() => {
                            N() ||
                                (u(!0),
                                T().finally(() => {
                                    u(!1);
                                }),
                                x(!A));
                        }),
                        E = (0, _.useMemo)(
                            () =>
                                (0, w.jsx)(er.Caption, {
                                    id: r,
                                    variant: 'span',
                                    'aria-label': s({ id: 'entity-names.vibe-name' }, { vibeName: i.title }),
                                    type: 'controls',
                                    size: 's',
                                    lineClamp: 1,
                                    children: i.title,
                                }),
                            [s, r, i.title],
                        ),
                        L = (0, eV.L)(() => {
                            var e;
                            return i.shouldShowAgent && i.agent
                                ? (0, w.jsx)(C.nr, { agent: i.agent, isCurrent: y, isPlaying: A, onPlayButtonClick: f })
                                : (0, w.jsx)(eo.q1, {
                                      isCurrent: y,
                                      isPlaying: A,
                                      isAvailable: !0,
                                      isPlayButtonLoading: c,
                                      onPlayButtonClick: f,
                                      title: i.title,
                                      entityCoverStyle: { backgroundColor: null == (e = i.colors) ? void 0 : e.average },
                                      ariaDescribedBy: r,
                                      coverUri: i.backgroundImageUrl,
                                      radius: 'round',
                                      withLoadingIndicator: !1,
                                  });
                        }),
                        P = (0, eV.L)(() =>
                            (0, w.jsxs)(el.m_, {
                                ...l,
                                enabled: o,
                                children: [
                                    L,
                                    (0, w.jsx)(el.ZI, {
                                        className: ej().tooltip,
                                        children: (0, w.jsx)(er.Caption, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: i.title }),
                                    }),
                                ],
                            }),
                        ),
                        j = (0, _.useCallback)(
                            () =>
                                (0, w.jsx)(eE, {
                                    ref: n,
                                    onDoubleClick: T,
                                    className: (0, B.$)(ej().root, a),
                                    isCollapsed: !!o,
                                    contextMenu: (0, w.jsx)(eM, { onPinClick: m, isPinned: i.isPinned }),
                                    withCollapseAnimation: !!d,
                                    title: E,
                                    subtitle: i.getDescription(s({ id: 'entity-names.my-vibe' })),
                                    cover: P,
                                }),
                            [n, T, a, o, m, i, d, E, s, P],
                        );
                    return (0, w.jsx)(eo.SU, {
                        isEnabled: p,
                        isOpened: g,
                        onOpenChange: v,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: i.stationType,
                        renderChildren: j,
                    });
                }),
                ez = (0, _.forwardRef)((e, t) => (0, w.jsx)(eG, { forwardRef: t, ...e }));
            var eX = a(1147),
                eW = a.n(eX);
            let eY = eu({ placement: 'right', padding: 20 }),
                e$ = { enter: eW().pin_enter, enterActive: eW().pin_enter_active, exit: eW().pin_exit, exitActive: eW().pin_exit_active },
                eH = (0, D.PA)((e) => {
                    var t, a;
                    let { className: i, withCollapseAnimation: n, isCollapsed: l, style: r } = e,
                        { formatMessage: s } = (0, X.A)(),
                        { pinsCollection: o } = (0, b.Pjs)(),
                        d = null == (t = o.items) ? void 0 : t.map(() => (0, _.createRef)()),
                        c = (0, _.useMemo)(() => ({ withCollapseAnimation: n, isCollapsed: l }), [l, n]),
                        u = o.items && o.items.length > 0,
                        m = o.items && o.items.length >= 3;
                    return (0, w.jsx)(eL.Provider, {
                        value: c,
                        children: (0, w.jsx)('div', {
                            className: (0, B.$)(eW().root, { [eW().root_withScroll]: m, [eW().root_hasPins]: u }, i),
                            style: r,
                            ...(0, K.Am)(K.e8.navbar.PIN_LIST),
                            children: (0, w.jsx)('div', {
                                role: 'list',
                                'aria-label': s({ id: 'navigation.pins-list' }),
                                className: eW().content,
                                children: (0, w.jsx)(eh.A, {
                                    component: null,
                                    children:
                                        null == (a = o.items)
                                            ? void 0
                                            : a.map((e, t) => {
                                                  switch (e.type) {
                                                      case N._.ALBUM_ITEM:
                                                          return (0, w.jsx)(
                                                              eI.A,
                                                              {
                                                                  classNames: e$,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, w.jsx)(ew, {
                                                                      className: eW().pin,
                                                                      tooltipOptions: eY,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      album: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case N._.ARTIST_ITEM:
                                                          return (0, w.jsx)(
                                                              eI.A,
                                                              {
                                                                  classNames: e$,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, w.jsx)(eD, {
                                                                      className: eW().pin,
                                                                      tooltipOptions: eY,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      artist: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case N._.PLAYLIST_ITEM:
                                                          return (0, w.jsx)(
                                                              eI.A,
                                                              {
                                                                  classNames: e$,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, w.jsx)(eU, {
                                                                      className: eW().pin,
                                                                      tooltipOptions: eY,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      playlist: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case N._.WAVE_ITEM:
                                                          return (0, w.jsx)(
                                                              eI.A,
                                                              {
                                                                  classNames: e$,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, w.jsx)(ez, {
                                                                      className: eW().pin,
                                                                      tooltipOptions: eY,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      vibe: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                  }
                                              }),
                                }),
                            }),
                        }),
                    });
                }),
                eq = { src: '/_next/static/media/ticket_dark.4e1b9044.png' },
                eZ = { src: '/_next/static/media/ticket_dark_selected.2b929060.png' },
                eQ = { src: '/_next/static/media/ticket_light.6b4bb4f7.png' },
                eJ = { src: '/_next/static/media/ticket_light_selected.648fa420.png' };
            var e0 = a(81501),
                e1 = a.n(e0);
            let e2 = (e) => {
                    let { isSelected: t, forwardRef: a } = e,
                        { theme: i } = (0, b.DPo)(),
                        n = (0, eV.L)(() => {
                            switch (i) {
                                case b.Sxu.Dark:
                                    if (t) return eZ.src;
                                    return eq.src;
                                case b.Sxu.Light:
                                    if (t) return eJ.src;
                                    return eQ.src;
                            }
                        });
                    return (0, w.jsx)(ex.Image, { ref: a, className: e1().root, fit: 'contain', withLoadingIndicator: !1, src: n });
                },
                e4 = (0, _.forwardRef)((e, t) => (0, w.jsx)(e2, { forwardRef: t, ...e }));
            var e5 = a(912),
                e3 = a.n(e5),
                e8 = (function (e) {
                    return (e.WINDOWS = 'WINDOWS'), (e.MACOS = 'MACOS'), (e.UNKNOWN = 'UNKNOWN'), e;
                })({}),
                e6 = a(54773),
                e7 = a.n(e6);
            let e9 = { exit: e7().bar_exit, exitActive: e7().bar_exit_active, enter: e7().bar_enter, enterActive: e7().bar_enter_active },
                te = { exit: e7().button_exit, exitActive: e7().button_exit_active, enter: e7().button_enter, enterActive: e7().button_enter_active },
                tt = (e) => {
                    let { className: t, children: a, button: i, isCollapsed: n, barClassName: l } = e,
                        r = (0, _.useRef)(null),
                        s = (0, _.useRef)(null);
                    return (0, w.jsxs)('div', {
                        className: (0, B.$)(e7().root, t),
                        children: [
                            (0, w.jsx)(eI.A, {
                                nodeRef: s,
                                in: n,
                                timeout: 150,
                                classNames: te,
                                unmountOnExit: !0,
                                children: (0, w.jsx)('div', { className: (0, B.$)(e7().button), ref: s, children: i }),
                            }),
                            (0, w.jsx)(eI.A, {
                                nodeRef: r,
                                in: !n,
                                timeout: 150,
                                classNames: e9,
                                unmountOnExit: !0,
                                children: (0, w.jsx)('div', { className: (0, B.$)(e7().bar, l), ref: r, children: a }),
                            }),
                        ],
                    });
                },
                ta = (e) => {
                    switch (e) {
                        case e8.MACOS:
                            return 'macos';
                        case e8.WINDOWS:
                            return 'windows';
                        default:
                            return 'musicLogo';
                    }
                },
                ti = (e) => {
                    let { formatMessage: t } = (0, X.A)();
                    switch (e) {
                        case e8.MACOS:
                            return t({ id: 'sidebar.download-macos' });
                        case e8.WINDOWS:
                            return t({ id: 'sidebar.download-windows' });
                        default:
                            return t({ id: 'sidebar.download-app' });
                    }
                };
            var tn = a(43334),
                tl = a.n(tn);
            let tr = (e) => {
                    let { variant: t, forwardRef: a, onDownloadClick: i, onCloseClick: n } = e,
                        { formatMessage: l } = (0, X.A)(),
                        r = ti(t),
                        s = (0, _.useMemo)(() => {
                            let e = { span: (e) => (0, w.jsx)('span', { className: tl().textBright, children: e }) };
                            switch (t) {
                                case e8.MACOS:
                                    return l({ id: 'sidebar.download-macos-formatted' }, e);
                                case e8.WINDOWS:
                                    return l({ id: 'sidebar.download-windows-formatted' }, e);
                                default:
                                    return l({ id: 'sidebar.download-app-formatted' }, e);
                            }
                        }, [l, t]);
                    return (0, w.jsx)('section', {
                        ref: a,
                        'aria-label': r,
                        children: (0, w.jsxs)(eN.Paper, {
                            radius: 'm',
                            className: tl().root,
                            children: [
                                (0, w.jsx)($.$, {
                                    color: 'secondary',
                                    radius: 'round',
                                    variant: 'text',
                                    size: 'xxxs',
                                    className: tl().closeButton,
                                    icon: (0, w.jsx)(H.Icon, { variant: 'close', size: 'xxs', className: tl().closeButtonIcon }),
                                    withRipple: !1,
                                    onClick: n,
                                    'aria-label': l({ id: 'interface-actions.close' }),
                                }),
                                (0, w.jsx)(er.Caption, { variant: 'div', className: tl().text, size: 'm', children: s }),
                                (0, w.jsx)($.$, {
                                    color: 'secondary',
                                    radius: 'xxxl',
                                    size: 'xs',
                                    variant: 'default',
                                    role: 'link',
                                    withRipple: !0,
                                    flexIcon: !0,
                                    'aria-label': r,
                                    onClick: i,
                                    icon: (0, w.jsx)(H.Icon, { variant: ta(t), size: 'xxs', className: tl().downloadButtonIcon }),
                                    ...(0, K.Am)(K.e8.navbar.DOWNLOAD_APP_BUTTON_ENLARGED),
                                    children: (0, w.jsx)(er.Caption, {
                                        variant: 'span',
                                        className: tl().downloadButtonText,
                                        size: 'm',
                                        children: (0, w.jsx)(W.A, { id: 'offline.download' }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                ts = (0, _.forwardRef)((e, t) => (0, w.jsx)(tr, { forwardRef: t, ...e }));
            var to = a(69200),
                td = a.n(to);
            let tc = (e) => {
                    let { variant: t, onDownloadClick: a } = e,
                        i = ti(t),
                        n = (0, _.useMemo)(() => ta(t), [t]);
                    return (0, w.jsxs)(eN.Paper, {
                        radius: 'm',
                        className: td().root,
                        children: [
                            (0, w.jsx)(H.Icon, { variant: n, className: td().icon }),
                            (0, w.jsxs)(el.m_, {
                                placement: 'left',
                                offsetOptions: 4,
                                children: [
                                    (0, w.jsx)($.$, {
                                        className: td().button,
                                        color: 'secondary',
                                        radius: 'round',
                                        size: 'xs',
                                        variant: 'default',
                                        role: 'link',
                                        withRipple: !0,
                                        flexIcon: !0,
                                        onClick: a,
                                        icon: (0, w.jsx)(H.Icon, { variant: 'download', size: 'xxs', className: td().buttonIcon }),
                                        'aria-label': i,
                                        ...(0, K.Am)(K.e8.navbar.DOWNLOAD_APP_BUTTON_MINIMIZED),
                                    }),
                                    (0, w.jsx)(el.ZI, {
                                        children: (0, w.jsx)(er.Caption, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: i }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                tu = (0, D.PA)((e) => {
                    var t;
                    let { isCollapsed: a } = e,
                        { settings: i } = (0, b.Pjs)(),
                        n = (0, b.NFA)(),
                        l = n.get(b.ooW),
                        r = n.get(b.twC),
                        [s, o] = (0, _.useState)(!1),
                        d = (() => {
                            let e = (0, F.st)(),
                                { hash: t } = (0, F.gf)(),
                                a = (0, b.UlF)();
                            return (0, _.useCallback)(() => {
                                if (!e || !t) return;
                                let i = (0, V.Fx)({
                                    params: {
                                        entityType: V.LA.Error,
                                        entityId: V.LA.Error,
                                        hash: t,
                                        pageId: V.QT.PageNotFoundScreen,
                                        pageStyle: V.QL.Fullscreen,
                                        pagePlacement: V.c4.Fullscreen,
                                        mainObjectType: V.ky.NonApplicable,
                                        mainObjectId: V.ky.NonApplicable,
                                        from: V.QT.PageNotFoundScreen,
                                        to: V.QT.AppDownloadScreen,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnDownloadScreenNavigated',
                                });
                                i && (0, V.ID)(e.evgenInstance, i);
                            }, [e, t, a]);
                        })(),
                        c = (0, _.useMemo)(() => {
                            var e;
                            switch (null == (e = i.browserInfo) ? void 0 : e.OSFamily) {
                                case 'MacOS':
                                    return e8.MACOS;
                                case 'Windows':
                                    return e8.WINDOWS;
                                default:
                                    return e8.UNKNOWN;
                            }
                        }, [null == (t = i.browserInfo) ? void 0 : t.OSFamily]),
                        u = (0, b._lF)(r.downloadDesktop.url),
                        m = (0, _.useCallback)(() => {
                            d(), window.open(u, '_blank', 'noreferrer noopener');
                        }, [d, u]),
                        p = (0, _.useCallback)(() => {
                            l.set(b.cYZ.NavbarDownloadBarIsHidden, !0, { expires: 30 }), o(!0);
                        }, [l]);
                    return s
                        ? null
                        : (0, w.jsx)(tt, {
                              isCollapsed: a,
                              button: (0, w.jsx)(tc, { variant: c, onDownloadClick: m }),
                              children: (0, w.jsx)(ts, { variant: c, onDownloadClick: m, onCloseClick: p }),
                          });
                });
            var tm = a(9355);
            function tp() {
                return (tp = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let t_ = function (e) {
                return _.createElement(
                    'svg',
                    tp({ viewBox: '0 0 58 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    _.createElement(
                        'g',
                        { clipPath: 'url(#clip0_2521_25547)' },
                        _.createElement(
                            'g',
                            { clipPath: 'url(#clip1_2521_25547)' },
                            i || (i = _.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' })),
                            n ||
                                (n = _.createElement('path', {
                                    d: 'M40.4184 5.14279C41.6821 4.20644 43.1756 3.6404 44.7322 3.49976V6.07553C43.726 6.20598 42.765 6.59121 41.943 7.20031C40.9138 7.96298 40.1569 9.03624 39.7839 10.2618C39.411 11.4873 39.4419 12.8003 39.8719 14.007C40.3019 15.2137 41.1084 16.2502 42.1723 16.9637C43.2362 17.6773 44.5013 18.03 45.7809 17.9698C47.0605 17.9097 48.2869 17.4399 49.2792 16.6298C50.2716 15.8197 50.9773 14.712 51.2922 13.4703C51.5119 12.6042 51.5334 11.7049 51.3613 10.8378L53.5243 9.09892L53.5229 9.0849C54.1067 10.691 54.1959 12.4383 53.7744 14.1C53.3245 15.8738 52.3163 17.4561 50.8987 18.6135C49.4811 19.7708 47.7291 20.4419 45.9011 20.5278C44.0731 20.6137 42.2658 20.1099 40.7459 19.0906C39.2261 18.0713 38.074 16.5905 37.4597 14.8666C36.8453 13.1428 36.8013 11.2671 37.334 9.51633C37.8668 7.76555 38.948 6.23231 40.4184 5.14279Z',
                                    fill: '#FCCA00',
                                })),
                            l ||
                                (l = _.createElement('path', {
                                    d: 'M51.8934 6.34507L51.9025 6.36777L50.457 8.66347C49.9314 7.88453 49.227 7.23618 48.4027 6.77726V12.0016C48.4027 13.6044 47.1033 14.9038 45.5004 14.9038C43.8975 14.9038 42.5981 13.6044 42.5981 12.0016C42.5981 10.3987 43.8975 9.09931 45.5004 9.09931C46.1011 9.09931 46.6592 9.28181 47.1223 9.59441V3.61938C49.0065 3.98181 50.6703 4.96381 51.8934 6.34507Z',
                                    fill: '#FC3F1D',
                                })),
                            _.createElement(
                                'mask',
                                { id: 'mask0_2521_25547', style: { maskType: 'alpha' }, maskUnits: 'userSpaceOnUse', x: 33, y: 0, width: 25, height: 24 },
                                r || (r = _.createElement('circle', { cx: 45.5005, cy: 12, r: 12, fill: 'white' })),
                            ),
                            s || (s = _.createElement('g', { mask: 'url(#mask0_2521_25547)' })),
                            o ||
                                (o = _.createElement(
                                    'g',
                                    { clipPath: 'url(#clip2_2521_25547)' },
                                    _.createElement('rect', { width: 24, height: 24, transform: 'translate(33.5005)', fill: 'black' }),
                                    _.createElement('path', {
                                        d: 'M57.5002 3.59937L45.121 10.2255L51.5722 3.59937L47.9962 3.59937L43.6042 9.6956V3.59937L40.7002 3.59937V20.3994H43.6042V14.313L47.9962 20.3994H51.5722L45.2885 13.9815L57.5002 20.3994V17.2794L46.3623 12.811L57.5002 13.5594V10.4394L46.4328 11.1589L57.5002 6.71936V3.59937Z',
                                        fill: 'url(#paint0_radial_2521_25547)',
                                    }),
                                )),
                        ),
                    ),
                    d ||
                        (d = _.createElement(
                            'g',
                            { clipPath: 'url(#clip3_2521_25547)' },
                            _.createElement('rect', { x: 17.0005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            _.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M41.0005 12C41.0005 18.6274 35.6279 24 29.0005 24C22.3731 24 17.0005 18.6274 17.0005 12C17.0005 5.37258 22.3731 0 29.0005 0C30.2956 0 31.5427 0.205154 32.7112 0.584736L29.9763 9H21.9892L21.0132 12H29.0013L26.6613 19.2H29.9613L32.3013 12L41.0005 12ZM40.6224 9H33.2763L35.5662 1.95391C38.0324 3.56896 39.8677 6.06758 40.6224 9Z',
                                fill: 'url(#paint1_linear_2521_25547)',
                            }),
                        )),
                    c ||
                        (c = _.createElement('path', {
                            d: 'M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z',
                            fill: 'black',
                        })),
                    u ||
                        (u = _.createElement('path', {
                            d: 'M18.2943 10.6431C18.2943 10.6431 21.283 14.8271 21.2703 14.8639C21.2143 15.024 21.154 15.1821 21.0895 15.338C21.0747 15.3735 17.35 12.1585 17.35 12.1585C17.35 12.1585 18.3728 19.0145 18.3525 19.0314C18.2041 19.1531 18.0528 19.2706 17.8972 19.383C17.8757 19.3986 15.6594 12.6669 15.6594 12.6669C15.6594 12.6669 12.5603 21.1641 12.5342 21.1646C12.4861 21.1654 12.4376 21.1658 12.3896 21.1658C12.2277 21.1658 12.0671 21.1616 11.9069 21.1536C11.8828 21.1523 13.7581 12.101 13.7581 12.101C13.7581 12.101 4.94181 17.5004 4.92916 17.4839C4.80269 17.3199 4.68169 17.1517 4.56617 16.9789C4.55395 16.9607 12.2686 10.4711 12.2686 10.4711C12.269 10.4716 3.15343 9.90658 3.15723 9.88756C3.19601 9.69233 3.2407 9.49879 3.29129 9.30821C3.29593 9.29003 12.0532 8.60038 12.0532 8.60038C12.0532 8.60038 5.65977 5.13649 5.67495 5.12085C5.80606 4.98689 5.94139 4.85674 6.08052 4.73039C6.09738 4.71517 13.1383 7.06726 13.1383 7.06726C13.1383 7.06726 10.9718 2.40366 11.011 2.39774C11.1691 2.3745 11.328 2.35506 11.4886 2.33985C11.5224 2.33689 15.1704 6.63623 15.1704 6.63623C15.1704 6.63623 16.3365 3.16388 16.3711 3.18036C16.5363 3.25811 16.6991 3.34009 16.8588 3.42672C16.8888 3.44278 16.9891 7.20502 16.9891 7.20502C16.9891 7.20502 19.8066 5.92333 19.8133 5.93178C19.9116 6.05814 20.0068 6.18702 20.0987 6.31887C20.1046 6.32732 18.0401 8.74829 18.0401 8.74829C18.0401 8.74829 21.6506 10.0397 21.6565 10.0735C21.6835 10.2261 21.7071 10.3794 21.7265 10.5341C21.7303 10.5658 18.2943 10.6431 18.2943 10.6431Z',
                            fill: '#FED42B',
                        })),
                    m ||
                        (m = _.createElement(
                            'defs',
                            null,
                            _.createElement(
                                'radialGradient',
                                {
                                    id: 'paint0_radial_2521_25547',
                                    cx: 0,
                                    cy: 0,
                                    r: 1,
                                    gradientUnits: 'userSpaceOnUse',
                                    gradientTransform: 'translate(40.7002 3.59937) rotate(45) scale(23.7588)',
                                },
                                _.createElement('stop', { offset: 0.5, stopColor: '#FF5500' }),
                                _.createElement('stop', { offset: 1, stopColor: '#BBFF00' }),
                            ),
                            _.createElement(
                                'linearGradient',
                                { id: 'paint1_linear_2521_25547', x1: 17.0005, y1: 10.4, x2: 41.0005, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                _.createElement('stop', { stopColor: '#FF5C4D' }),
                                _.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                _.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            _.createElement(
                                'clipPath',
                                { id: 'clip0_2521_25547' },
                                _.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                            _.createElement(
                                'clipPath',
                                { id: 'clip1_2521_25547' },
                                _.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                            _.createElement(
                                'clipPath',
                                { id: 'clip2_2521_25547' },
                                _.createElement('rect', { width: 24, height: 24, fill: 'white', transform: 'translate(33.5005)' }),
                            ),
                            _.createElement(
                                'clipPath',
                                { id: 'clip3_2521_25547' },
                                _.createElement('rect', { x: 17.0005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                        )),
                );
            };
            var tg = a(7939),
                tv = a.n(tg);
            let tb = (e) => {
                    let { className: t, forwardRef: a, shouldFetchOffers: i } = e,
                        {
                            paywall: { modal: n },
                        } = (0, b.Pjs)(),
                        { formatMessage: l } = (0, X.A)();
                    return (0, w.jsxs)('section', {
                        className: (0, B.$)(tv().root, t),
                        ref: a,
                        'aria-label': l({ id: 'plusbar.subscription-activation' }),
                        ...(0, K.Am)(K.e8.plusBar.PLUS_BAR),
                        children: [
                            (0, w.jsx)(t_, { className: tv().logos, 'aria-hidden': 'true' }),
                            (0, w.jsx)(er.Caption, {
                                className: tv().title,
                                variant: 'div',
                                size: 'm',
                                weight: 'medium',
                                ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_TITLE),
                                children: (0, w.jsx)(W.A, { id: 'plusbar.title', values: { br: '\n', nbsp: '\xa0' } }),
                            }),
                            (0, w.jsx)(er.Caption, {
                                className: tv().addition,
                                variant: 'div',
                                size: 'xs',
                                weight: 'normal',
                                ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_ADDITION),
                                children: (0, w.jsx)(W.A, { id: 'plusbar.text', values: { br: '\n', nbsp: '\xa0' } }),
                            }),
                            (0, w.jsxs)('div', {
                                className: tv().buttons,
                                children: [
                                    (0, w.jsx)(tm.FB, { shouldFetchOffers: i, ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_OFFER_BUTTON) }),
                                    (0, w.jsx)($.$, {
                                        className: tv().button,
                                        isBlock: !0,
                                        radius: 'xxxl',
                                        size: 'm',
                                        variant: 'text',
                                        color: 'primary',
                                        withRipple: !1,
                                        onClick: n.open,
                                        ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_PAYWALL_BUTTON),
                                        children: (0, w.jsx)(W.A, { id: 'interface-actions.more-details' }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                th = (0, _.forwardRef)((e, t) =>
                    (0, w.jsx)(b.rtM, { page: b.l7W.SIDEBAR, places: [b.RBW.SIDEBAR_BANNER], children: (0, w.jsx)(tb, { forwardRef: t, ...e }) }),
                );
            var tI = a(19349),
                tx = a.n(tI);
            let tN = (0, D.PA)((e) => {
                let { isCollapsed: t, shouldFetchOffers: a } = e,
                    { formatMessage: i } = (0, X.A)(),
                    {
                        paywall: { modal: n },
                    } = (0, b.Pjs)();
                return (0, w.jsx)(tt, {
                    className: tx().root,
                    isCollapsed: t,
                    button: (0, w.jsxs)(el.m_, {
                        ...em,
                        enabled: t,
                        children: [
                            (0, w.jsx)($.$, {
                                variant: 'text',
                                withRipple: !1,
                                size: 'xxs',
                                icon: (0, w.jsx)(H.Icon, { className: tx().icon, variant: 'plusOutlined' }),
                                className: (0, B.$)(tx().button, tx().important),
                                'aria-label': i({ id: 'plusbar.subscription-activation' }),
                                onClick: n.open,
                                ...(0, K.Am)(K.e8.navbar.PAYWALL_BUTTON_MINIMIZED),
                            }),
                            (0, w.jsx)(el.ZI, {
                                children: (0, w.jsx)(er.Caption, {
                                    variant: 'span',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    children: (0, w.jsx)(W.A, { id: 'plusbar.subscription-activation' }),
                                }),
                            }),
                        ],
                    }),
                    children: (0, w.jsx)(th, { shouldFetchOffers: a }),
                });
            });
            tN.displayName = 'NavbarDesktopAnimatedPlusBar';
            var tA = a(48454),
                tS = a(65215),
                ty = a.n(tS);
            let tC = (e) => {
                let { className: t, optionOffer: a } = e,
                    { formatMessage: i } = (0, X.A)(),
                    { subscriptionName: n, offerText: l, mainText: r, openPaymentWidgetModal: s } = a;
                return (0, w.jsxs)('section', {
                    className: (0, B.$)(ty().root, t),
                    'aria-label': i({ id: 'plusbar.subscription-activation' }),
                    ...(0, K.Am)(K.e8.plusBar.PLUS_BAR),
                    children: [
                        (0, w.jsx)(ex.Image, {
                            src: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.693eab4a84d7e41b1102de79/orig',
                            alt: 'Option Icon',
                            className: ty().optionIcon,
                        }),
                        (0, w.jsx)(er.Caption, {
                            className: ty().title,
                            variant: 'div',
                            size: 'm',
                            weight: 'medium',
                            ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_TITLE),
                            children: n,
                        }),
                        (0, w.jsx)(er.Caption, {
                            className: ty().addition,
                            variant: 'div',
                            size: 'xs',
                            weight: 'normal',
                            ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_ADDITION),
                            children: l,
                        }),
                        (0, w.jsx)('div', {
                            className: ty().buttons,
                            children: (0, w.jsx)($.$, {
                                className: ty().button,
                                isBlock: !0,
                                radius: 'xxxl',
                                size: 'm',
                                variant: 'default',
                                color: 'secondary',
                                withRipple: !1,
                                onClick: s,
                                ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_PAYMENT_WIDGET_BUTTON),
                                children: r,
                            }),
                        }),
                    ],
                });
            };
            var tT = a(70583),
                tf = a.n(tT);
            let tE = (0, D.PA)((e) => {
                let { optionOffer: t, isCollapsed: a, setForceUpdateElement: i } = e,
                    [n, l] = (0, _.useState)(!1),
                    r = (0, U.c)(() => {
                        l(!0);
                    }),
                    s = (0, U.c)(() => {
                        l(!1);
                    });
                return (0, w.jsx)(tt, {
                    className: tf().root,
                    isCollapsed: a,
                    button: (0, w.jsxs)(tA.AM, {
                        open: n,
                        onOpenChange: l,
                        placement: 'top',
                        offsetOptions: { mainAxis: -50, crossAxis: 0 },
                        children: [
                            (0, w.jsx)($.$, {
                                type: 'button',
                                onMouseEnter: r,
                                onMouseLeave: s,
                                className: tf().button,
                                ref: i,
                                'data-intersection-property-id': 'PLUSBAR_OPTIONS_BUTTON_INTERSECTION_PROPERTY_ID',
                                children: (0, w.jsx)(ex.Image, {
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.693eab4a84d7e41b1102de79/orig',
                                    alt: 'Option Icon',
                                    className: tf().optionIcon,
                                }),
                            }),
                            (0, w.jsx)(tA.hl, {
                                className: tf().popoverContent,
                                onMouseEnter: r,
                                onMouseLeave: s,
                                children: (0, w.jsx)(tC, { className: tf().popoverContent, optionOffer: t }),
                            }),
                        ],
                    }),
                    children: (0, w.jsx)(tC, { optionOffer: t }),
                });
            });
            tE.displayName = 'NavbarDesktopAnimatedPlusOptionsBar';
            var tL = a(79856),
                tP = a(89543),
                tj = a.n(tP);
            let tR = (e) => {
                let { isCollapsed: t, isActive: a } = e;
                return (0, w.jsx)(tt, {
                    className: tj().root,
                    isCollapsed: t,
                    button: (0, w.jsx)(tL.Shimmer, { className: tj().buttonShimmer, isActive: a, radius: 'round' }),
                    children: (0, w.jsx)(tL.Shimmer, { className: tj().barShimmer, isActive: a, radius: 'xxxl' }),
                });
            };
            tR.displayName = 'NavbarDesktopAnimatedShimmerBar';
            var tk = a(22127),
                tM = a(14135),
                tO = a.n(tM);
            let tw = () => {
                let {
                        experiments: e,
                        paywall: { modal: t },
                    } = (0, b.Pjs)(),
                    { formatMessage: a } = (0, X.A)(),
                    i = e.checkExperiment(b.zal.WebNextUnauthorizedSubscriptionButton, 'on'),
                    n = i ? a({ id: 'plusbar.title' }, { br: '\n', nbsp: '\xa0' }) : a({ id: 'authorization.enter-title' }),
                    l = i ? a({ id: 'plusbar.text' }, { br: '\n', nbsp: '\xa0' }) : a({ id: 'authorization.enter-subtitle' }),
                    r = (0, _.useMemo)(
                        () =>
                            i
                                ? (0, w.jsxs)('div', {
                                      className: tO().buttons,
                                      children: [
                                          (0, w.jsx)(tm.FB, {}),
                                          (0, w.jsx)($.$, {
                                              className: tO().button,
                                              isBlock: !0,
                                              radius: 'xxxl',
                                              size: 'm',
                                              variant: 'default',
                                              color: 'secondary',
                                              withRipple: !1,
                                              onClick: t.open,
                                              children: (0, w.jsx)(W.A, { id: 'interface-actions.more-details' }),
                                          }),
                                          (0, w.jsx)(eo.Hi, {
                                              size: 's',
                                              variant: 'text',
                                              withRipple: !1,
                                              buttonText: (0, w.jsx)(W.A, { id: 'authorization.has-subscription' }),
                                              isBlock: !0,
                                          }),
                                      ],
                                  })
                                : (0, w.jsx)(eo.Hi, { size: 's', isBlock: !0 }),
                        [t.open, i],
                    );
                return (0, w.jsxs)('div', {
                    className: tO().root,
                    ...(0, K.Am)(K.e8.unauthBar.UNAUTH_BAR),
                    children: [
                        (0, w.jsx)(_.Suspense, { children: (0, w.jsx)(tk.YS, { className: tO().userProfile, userIdClassName: tO().userId, variant: 'desktop' }) }),
                        (0, w.jsx)(er.Caption, {
                            className: tO().title,
                            size: 'm',
                            variant: 'div',
                            weight: 'bold',
                            ...(0, K.Am)(K.e8.unauthBar.UNAUTH_BAR_TITLE),
                            children: n,
                        }),
                        (0, w.jsx)(er.Caption, {
                            className: tO().subtitle,
                            size: 'xs',
                            variant: 'div',
                            weight: 'medium',
                            ...(0, K.Am)(K.e8.unauthBar.UNAUTH_BAR_ADDITION),
                            children: l,
                        }),
                        r,
                    ],
                });
            };
            var tB = a(91819),
                tD = a.n(tB);
            let tK = (0, D.PA)((e) => {
                    let { isCollapsed: t, withUserProfileAnimation: a } = e,
                        { user: i, experiments: n } = (0, b.Pjs)();
                    if (!i.isAuthorized) {
                        let e = n.checkExperiment(b.zal.WebNextUnauthorizedSubscriptionButton, 'on'),
                            a = !t && e,
                            i = e || t;
                        return (0, w.jsx)(tt, {
                            barClassName: tD().unauthorizedBar,
                            isCollapsed: i,
                            button: (0, w.jsxs)(el.m_, {
                                ...em,
                                enabled: t,
                                children: [
                                    (0, w.jsxs)('div', {
                                        className: tD().userProfileContainer,
                                        children: [
                                            (0, w.jsx)(tk.YS, { className: tD().userProfile }),
                                            a &&
                                                (0, w.jsx)(er.Caption, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    children: (0, w.jsx)(W.A, { id: 'authorization.enter-button' }),
                                                }),
                                        ],
                                    }),
                                    (0, w.jsx)(el.ZI, {
                                        children: (0, w.jsx)(er.Caption, {
                                            variant: 'span',
                                            type: 'text',
                                            size: 's',
                                            weight: 'medium',
                                            children: (0, w.jsx)(W.A, { id: 'authorization.enter-tooltip' }),
                                        }),
                                    }),
                                ],
                            }),
                            children: (0, w.jsx)(tw, {}),
                        });
                    }
                    return (0, w.jsx)('div', {
                        className: tD().userProfileContainer,
                        children: (0, w.jsx)(tk.YS, {
                            className: tD().userProfile,
                            userIdClassName: tD().userId,
                            metaClassName: (0, B.$)(tD().userMeta, { [tD().userMeta_withAnimation]: a, [tD().userMeta_collapsed]: t }),
                            withMeta: !0,
                        }),
                    });
                }),
                tU = (0, D.PA)((e) => {
                    var t, a, i, n, l;
                    let { className: r, forwardRef: s, isCollapsed: o, shownAnimation: d, handleClick: c } = e,
                        u = I(),
                        m = (0, b.EE7)(),
                        { formatMessage: p } = (0, X.A)(),
                        g = (0, b.jjz)(),
                        {
                            user: v,
                            experiments: h,
                            settings: x,
                            modals: { bestRecommedationModal: N },
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: A },
                            },
                        } = (0, b.Pjs)(),
                        [S, y] = (0, Y.d)(),
                        C = h.checkExperiment(b.zal.WebNextPlusOptionsSidebar, 'on') && v.hasPlus,
                        T = (0, b.DpZ)({
                            storeName: 'music',
                            communicationId: 'mu-promo-kids-7d-web',
                            isEnabled: C,
                            offerElement: { element: S, intersectionPropertyId: 'PLUSBAR_OPTIONS_BUTTON_INTERSECTION_PROPERTY_ID' },
                        }),
                        f = (0, b.Yej)(),
                        E = (0, b.NFA)().get(b.ooW),
                        L = ed(),
                        P = ((e) => {
                            let t = (0, b.NFA)().get(b.ooW),
                                a = I(),
                                [i, n] = (0, _.useState)(!1);
                            return (
                                (0, _.useEffect)(() => {
                                    !0 !== t.get(b.cYZ.NavbarCollapsed) && (((e || a) && !1 !== t.get(b.cYZ.NavbarCollapsed)) || n(!0));
                                }, [e, a, t]),
                                i
                            );
                        })(o),
                        j = ((e, t, a) => (e.checkExperiment(b.zal.WebNextUnauthorizedSubscriptionButton, 'on') ? !a : t && !a))(h, v.isAuthorized, v.hasPlus),
                        R = C && T.isShimmerVisible,
                        k = C && !T.isShimmerVisible && T.subscriptionName,
                        M = (0, es.Qj)(),
                        O = A.isVisible && A.type === b.h8o.BRANDING && M.isEnabled ? (null == (t = M.data) ? void 0 : t.style) : void 0,
                        D = h.checkExperiment(b.zal.WebNextPromoVeryBestRecommendations, 'on'),
                        V = h.checkExperiment(b.zal.WebNextNavbarExplicit, 'on'),
                        F = !o && V,
                        G = (null == (a = x.browserInfo) || a.isTouch, E.get(b.cYZ.NavbarDownloadBarIsHidden)),
                        z = h.checkExperiment(b.zal.WebNextNewWaveTab, 'on') || h.checkExperiment(b.zal.WebNextNewWaveTab, 'on1'),
                        Q =
                            !(null == (i = x.browserInfo) ? void 0 : i.isTouch) &&
                            v.isAuthorized &&
                            !v.hasPlus &&
                            (null == (l = h.getExperiment(b.zal.WebNextDesktopWebFreemium)) || null == (n = l.value) ? void 0 : n.closeCollection) === 'on',
                        [J, ee] = (0, _.useState)(!1),
                        [et, eu] = (0, _.useState)(null),
                        ep = (0, _.useMemo)(() => f.some((e) => e.id === b.RnV.COLLECTION && e.isEnabled), [f]),
                        e_ = Q && ep;
                    (0, _.useEffect)(() => {
                        Q || ee(!1);
                    }, [Q]);
                    let eg = (0, U.c)(() => (0, w.jsx)('span', { 'aria-hidden': !0 })),
                        ev = (0, _.useMemo)(() => (o ? p({ id: 'sidebar.uncollapse' }) : p({ id: 'sidebar.collapse' })), [o, p]),
                        eh = (0, _.useCallback)(
                            (e, t) =>
                                e.id === b.RnV.CONCERTS && h.checkExperiment(b.zal.WebNextConcertsTicketIcon, 'on')
                                    ? (0, w.jsx)(e4, { isSelected: t })
                                    : z
                                      ? (0, w.jsx)(H.Icon, { variant: t ? e.iconNewVersionSelected : e.iconNewVersion, size: 'xs' })
                                      : (0, w.jsx)(H.Icon, { variant: t ? e.iconSelected : e.icon, size: 'm' }),
                            [h, z],
                        ),
                        eI = (0, U.c)(() => {
                            F && N.open();
                        }),
                        ex = (0, _.useMemo)(
                            () => ({
                                [b.RnV.SEARCH]: p({ id: 'navigation.search' }),
                                [b.RnV.HOME]: z ? p({ id: 'navigation.page-my-vibe' }) : p({ id: 'navigation.page-main' }),
                                [b.RnV.FOR_YOU_AND_TRENDS]: p({ id: 'navigation.page-for-you-and-trends' }),
                                [b.RnV.COLLECTION]: p({ id: 'navigation.page-collection' }),
                                [b.RnV.NON_MUSIC]: p({ id: 'entity-names.podcasts-and-books' }),
                                [b.RnV.KIDS]: p({ id: 'kids.for-kids' }),
                                [b.RnV.CONCERTS]: p({ id: 'entity-names.concerts' }),
                                [b.RnV.PLUS]: p({ id: 'navigation.page-plus' }),
                            }),
                            [p, z],
                        ),
                        eN = (0, U.c)((e, t) => () => {
                            L(e, t);
                        }),
                        eA = (0, _.useMemo)(
                            () =>
                                (0, w.jsx)(
                                    ei,
                                    {
                                        className: (0, B.$)({ [e3().navigationGroup]: z }),
                                        children: f.map((e) => {
                                            let t = m(e.availablePaths),
                                                a = e.id === b.RnV.COLLECTION && !!Q && e.isEnabled,
                                                i = eN(e.analyticsParams.entityType, e.analyticsParams.to),
                                                n = !a && e.isEnabled && !t;
                                            return (0, w.jsx)(
                                                eb,
                                                {
                                                    config: e.onboardingConfig,
                                                    children: (0, w.jsx)(en, {
                                                        'data-intersection-property-id': b.NZ,
                                                        selected: t,
                                                        shownAnimation: d,
                                                        variant: 'main',
                                                        isNewVisualVersion: z,
                                                        withRipple: z && e.isEnabled && !t,
                                                        children: (0, w.jsxs)(eo.N_, {
                                                            ref: a ? eu : void 0,
                                                            href: n ? e.path : void 0,
                                                            role: 'link',
                                                            'aria-disabled': !e.isEnabled,
                                                            tabIndex: e.isEnabled ? 0 : -1,
                                                            className: (0, B.$)({ [e3().disabledNavigationItem]: !e.isEnabled }),
                                                            onClick: a
                                                                ? (e) => {
                                                                      e.preventDefault(), i(), ee((e) => !e);
                                                                  }
                                                                : i,
                                                            ...(0, K.Am)(ec[e.id]),
                                                            children: [
                                                                (0, w.jsxs)(el.m_, {
                                                                    ...em,
                                                                    enabled: o,
                                                                    children: [
                                                                        eh(e, t),
                                                                        (0, w.jsx)(el.ZI, {
                                                                            children: (0, w.jsx)(er.Caption, {
                                                                                variant: 'span',
                                                                                type: 'text',
                                                                                size: 's',
                                                                                weight: 'medium',
                                                                                children: ex[e.id],
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, w.jsx)(er.Caption, {
                                                                    variant: 'span',
                                                                    type: 'controls',
                                                                    size: 'm',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    className: (0, B.$)({ [e3().title_animate]: d, [e3().title_collapsed]: o }),
                                                                    children: ex[e.id],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.id,
                                            );
                                        }),
                                    },
                                    'main',
                                ),
                            [m, o, h, h.loadingState, d, ex, f, eN, eh, Q, ee],
                        ),
                        eS = (0, _.useMemo)(
                            () =>
                                u
                                    ? null
                                    : (0, _.createElement)(el.m_, {
                                          ...em,
                                          key: 'collapseTooltip',
                                          enabled: o,
                                          isFocusEnabled: !1,
                                          children: [
                                              (0, w.jsx)($.$, {
                                                  className: e3().collapseButton,
                                                  'aria-label': ev,
                                                  radius: 'round',
                                                  color: 'secondary',
                                                  size: 'xs',
                                                  icon: (0, w.jsx)(H.Icon, { variant: o ? 'arrowRight' : 'arrowLeft', size: 'xxs' }),
                                                  onClick: c,
                                              }),
                                              (0, w.jsx)(el.ZI, { className: (0, B.$)({ [e3().collapseButtonTooltip_hidden]: !o }), children: ev }),
                                          ],
                                      }),
                            [o, ev, c, u],
                        );
                    return (0, w.jsxs)('div', {
                        className: (0, B.$)(e3().root, r),
                        style: O,
                        ref: s,
                        children: [
                            (0, w.jsxs)('div', {
                                className: e3().logoWrapper,
                                children: [
                                    (0, w.jsx)(eo.N_, {
                                        href: '/',
                                        className: e3().logoLink,
                                        'aria-label': p({ id: 'navigation.page-main' }),
                                        children: (0, w.jsx)(q.gu, { className: e3().logo, collapsed: o, shownAnimation: d, lang: g }),
                                    }),
                                    eS,
                                ],
                            }),
                            D &&
                                (0, w.jsx)(er.Caption, {
                                    variant: 'div',
                                    type: 'text',
                                    size: 'xs',
                                    weight: 'medium',
                                    className: (0, B.$)(e3().subTitle, { [e3().title_animate]: d, [e3().title_collapsed]: o, [e3().subTitle_withCursorPointer]: F }),
                                    onClick: eI,
                                    children: (0, w.jsx)(W.A, { id: 'navigation.best-recommendations' }),
                                }),
                            (0, w.jsx)('div', {
                                className: e3().scrollableContainer,
                                children: (0, w.jsxs)('div', {
                                    className: e3().scrollableContent,
                                    children: [
                                        (0, w.jsx)(ea, {
                                            className: (0, B.$)(e3().navigation, { [e3().navigation_new]: z, [e3().navigation_gapFill]: !1 }),
                                            collapsed: o,
                                            'aria-label': p({ id: 'navigation.main-menu' }),
                                            children: eA,
                                        }),
                                        (0, w.jsx)(eo.aQ, {
                                            fallback: (0, w.jsx)(eH, { style: O, isCollapsed: o, withCollapseAnimation: !!d, className: e3().pinsList }),
                                        }),
                                        j && (0, w.jsx)(tN, { shouldFetchOffers: P, isCollapsed: o }),
                                        !G && !1,
                                        R && (0, w.jsx)(tR, { isCollapsed: o, isActive: T.isShimmerActive }),
                                        k && (0, w.jsx)(tE, { optionOffer: T, isCollapsed: o, setForceUpdateElement: y }),
                                    ],
                                }),
                            }),
                            (0, w.jsx)(tK, { withUserProfileAnimation: d, isCollapsed: o }),
                            e_ &&
                                null !== et &&
                                (0, w.jsx)(eo.SU, {
                                    isOpened: J,
                                    onOpenChange: ee,
                                    placement: 'right',
                                    positionElement: et,
                                    textVariant: 'collectionFreemium',
                                    renderChildren: eg,
                                }),
                            V &&
                                (0, w.jsxs)(Z.a, {
                                    className: e3().bestRecommendationsModal,
                                    headerClassName: e3().bestRecommendationsModalHeader,
                                    contentClassName: e3().bestRecommendationsModalContent,
                                    open: N.isOpened,
                                    onOpenChange: N.onOpenChange,
                                    onClose: N.close,
                                    size: 'fitContent',
                                    placement: 'center',
                                    overlayColor: 'full',
                                    labelClose: p({ id: 'interface-actions.close' }),
                                    children: [
                                        (0, w.jsx)(H.Icon, { variant: 'musicLogo', className: e3().bestRecommendationsModalLogo }),
                                        (0, w.jsx)(er.Caption, {
                                            className: e3().bestRecommendationsModalText,
                                            variant: 'div',
                                            size: 'm',
                                            weight: 'normal',
                                            dangerouslySetInnerHTML: { __html: p({ id: 'about-app.explicit-content' }) },
                                        }),
                                    ],
                                }),
                        ],
                    });
                }),
                tV = (0, _.forwardRef)((e, t) =>
                    (0, w.jsx)(b.rtM, { page: b.l7W.SIDEBAR, places: [b.RBW.SIDEBAR_BANNER], children: (0, w.jsx)(tU, { forwardRef: t, ...e }) }),
                );
            var tF = a(8950),
                tG = a.n(tF);
            let tz = (0, D.PA)((e) => {
                    let { className: t } = e,
                        { experiments: a } = (0, b.Pjs)(),
                        i = (0, b.EE7)(),
                        { formatMessage: n } = (0, X.A)(),
                        l = (0, b.Yej)(),
                        r = n({ id: 'navigation.main-menu' }),
                        s = ed(),
                        o = a.checkExperiment(b.zal.WebNextNewWaveTab, 'on') || a.checkExperiment(b.zal.WebNextNewWaveTab, 'on1'),
                        d = (0, _.useMemo)(
                            () => ({
                                [b.RnV.SEARCH]: n({ id: 'navigation.search' }),
                                [b.RnV.HOME]: o ? n({ id: 'navigation.page-my-vibe' }) : n({ id: 'navigation.page-main' }),
                                [b.RnV.FOR_YOU_AND_TRENDS]: n({ id: 'navigation.page-for-you-and-trends' }),
                                [b.RnV.COLLECTION]: n({ id: 'navigation.page-collection' }),
                                [b.RnV.NON_MUSIC]: n({ id: 'entity-names.podcasts-and-books' }),
                                [b.RnV.KIDS]: n({ id: 'kids.for-kids' }),
                                [b.RnV.CONCERTS]: n({ id: 'entity-names.concerts' }),
                            }),
                            [n, o],
                        ),
                        c = (0, _.useCallback)(
                            (e, t) =>
                                e.id === b.RnV.CONCERTS && a.checkExperiment(b.zal.WebNextConcertsTicketIcon, 'on')
                                    ? (0, w.jsx)(e4, { isSelected: t || o })
                                    : o
                                      ? (0, w.jsx)(H.Icon, { variant: t ? e.iconNewVersionSelected : e.iconNewVersion, size: 'xs' })
                                      : (0, w.jsx)(H.Icon, { variant: t ? e.iconSelected : e.icon, size: 'm' }),
                            [a, o],
                        ),
                        u = (0, U.c)((e, t) => () => {
                            s(e, t);
                        });
                    return (0, w.jsx)('div', {
                        className: (0, B.$)(tG().root, t),
                        children: (0, w.jsx)(ea, {
                            collapsed: !0,
                            direction: 'horizontal',
                            'aria-label': r,
                            children: (0, w.jsx)(ei, {
                                children: (0, w.jsxs)(w.Fragment, {
                                    children: [
                                        l.map((e) => {
                                            let t = i(e.availablePaths);
                                            return (0, w.jsx)(
                                                eb,
                                                {
                                                    config: e.onboardingConfig,
                                                    children: (0, w.jsx)(en, {
                                                        'data-intersection-property-id': b.NZ,
                                                        selected: t,
                                                        isNewVisualVersion: o,
                                                        children: (0, w.jsxs)(eo.N_, {
                                                            href: e.isEnabled && !t ? e.path : void 0,
                                                            role: 'link',
                                                            'aria-disabled': !e.isEnabled,
                                                            tabIndex: e.isEnabled ? 0 : -1,
                                                            className: (0, B.$)({ [tG().disabledNavigationItem]: !e.isEnabled }),
                                                            onClick: u(e.analyticsParams.entityType, e.analyticsParams.to),
                                                            ...(0, K.Am)(ec[e.id]),
                                                            children: [
                                                                c(e, t),
                                                                (0, w.jsx)(er.Caption, {
                                                                    variant: 'span',
                                                                    type: 'controls',
                                                                    size: 'm',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    children: d[e.id],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.id,
                                            );
                                        }),
                                        !o && (0, w.jsx)(en, { children: (0, w.jsx)(tk.YS, { className: tG().user, variant: 'mobile' }) }),
                                    ],
                                }),
                            }),
                        }),
                    });
                }),
                tX = (0, D.PA)((e) => {
                    var t;
                    let { className: a, externalIsCollapsed: i, externalSetIsCollapsed: n } = e,
                        l = (0, b.NFA)().get(b.ooW),
                        r = I(),
                        {
                            settings: { isMobile: s },
                        } = (0, b.Pjs)(),
                        [o, d] = (0, _.useState)(null != (t = l.get(b.cYZ.NavbarCollapsed)) ? t : r),
                        [c, u] = (0, _.useState)(!1),
                        m = (() => {
                            let e = (0, F.st)(),
                                { hash: t } = (0, F.gf)(),
                                a = (0, b.UlF)(),
                                {
                                    settings: { isMobile: i },
                                } = (0, b.Pjs)();
                            return (0, _.useCallback)(
                                (n) => {
                                    if (!e) return;
                                    let l = (0, V.Fx)({
                                        params: {
                                            hash: t,
                                            pageId: V.QT.Sidebar,
                                            sidebarSize: n || i ? V.JQ.Small : V.JQ.Medium,
                                            sidebarPosition: i ? V.Vw.Bottom : V.Vw.Left,
                                        },
                                        logger: a,
                                        context: 'useSendEventOnSidebarOpened',
                                    });
                                    l && (0, V.U0)(e.evgenInstance, l);
                                },
                                [e, t, i, a],
                            );
                        })(),
                        p = null != i ? i : o,
                        g = null != n ? n : d,
                        v = (0, _.useMemo)(() => (s ? tz : tV), [s]),
                        h = (0, U.c)((e) => {
                            e.stopPropagation(), e.preventDefault();
                            let t = !p;
                            l.set(b.cYZ.NavbarCollapsed, t, { expires: 180 }), g(t), u(!0);
                        });
                    return (
                        (0, _.useEffect)(() => {
                            m(p || r);
                        }, [r, p, m]),
                        (0, w.jsx)('aside', {
                            className: (0, B.$)(z().root, { [z().root_collapsed]: p || r }, a),
                            ...(0, K.Am)(K.e8.navbar.NAVBAR),
                            children: (0, w.jsx)(v, { handleClick: h, isCollapsed: p || r, shownAnimation: c }),
                        })
                    );
                });
        },
        3466: (e) => {
            e.exports = {
                root: 'DownloadMobileApp_root__RU7VS',
                closeButton: 'DownloadMobileApp_closeButton__t38Rw',
                text: 'DownloadMobileApp_text__bCbs3',
                subtitle: 'DownloadMobileApp_subtitle__vPtiS',
                buttons: 'DownloadMobileApp_buttons__mL4w1',
                listenInAppLink: 'DownloadMobileApp_listenInAppLink__flOyk',
                button: 'DownloadMobileApp_button__r0E7Z',
                stayButton: 'DownloadMobileApp_stayButton__k3Ot8',
            };
        },
        3646: (e) => {
            e.exports = {
                headingContainer: 'BuySubscriptionBenefitsContent_headingContainer__euBSr',
                heading: 'BuySubscriptionBenefitsContent_heading__xx64Z',
                offerHeading: 'BuySubscriptionBenefitsContent_offerHeading__58HWj',
                entityCover: 'BuySubscriptionBenefitsContent_entityCover__0zowc',
                entityTitle: 'BuySubscriptionBenefitsContent_entityTitle__gA8J2',
                benefits: 'BuySubscriptionBenefitsContent_benefits__HK41W',
                benefitItem: 'BuySubscriptionBenefitsContent_benefitItem__sYkCL',
                benefitIcon: 'BuySubscriptionBenefitsContent_benefitIcon__VczZK',
                benefitImage: 'BuySubscriptionBenefitsContent_benefitImage__LVU2a',
                benefitText: 'BuySubscriptionBenefitsContent_benefitText__stotu',
                benefitDivider: 'BuySubscriptionBenefitsContent_benefitDivider__uELk3',
                button: 'BuySubscriptionBenefitsContent_button__vNi8i',
                loginContainer: 'BuySubscriptionBenefitsContent_loginContainer__ov5gH',
                bonusText: 'BuySubscriptionBenefitsContent_bonusText__nzIej',
                giftIcon: 'BuySubscriptionBenefitsContent_giftIcon__1bL51',
                oneClickDisclaimerText: 'BuySubscriptionBenefitsContent_oneClickDisclaimerText__k5W_A',
            };
        },
        5874: (e) => {
            e.exports = {
                root: 'TrailerError_root__GwuKR',
                textContainer: 'TrailerError_textContainer__lF7RZ',
                title: 'TrailerError_title__Q52Pa',
                description: 'TrailerError_description__60UJ6',
            };
        },
        6488: (e) => {
            e.exports = {
                root: 'TrackModalSimilarTracks_root__EAOmg',
                title: 'TrackModalSimilarTracks_title__0WPaJ',
                item: 'TrackModalSimilarTracks_item__BGQWd',
                important: 'TrackModalSimilarTracks_important__mGqEv',
                tracksContainer: 'TrackModalSimilarTracks_tracksContainer__E55ep',
            };
        },
        7939: (e) => {
            e.exports = {
                root: 'NavbarDesktopPlusBar_root__QgKqJ',
                logos: 'NavbarDesktopPlusBar_logos__kKKEl',
                addition: 'NavbarDesktopPlusBar_addition__vluXf',
                title: 'NavbarDesktopPlusBar_title__mMdem',
                buttons: 'NavbarDesktopPlusBar_buttons__40_1A',
            };
        },
        8606: (e) => {
            e.exports = {
                root: 'TrackModalAlbumShimmer_root__iGoUU',
                title: 'TrackModalAlbumShimmer_title__2jt8z',
                coverBlock: 'TrackModalAlbumShimmer_coverBlock__PQFDQ',
                cover: 'TrackModalAlbumShimmer_cover__AI0zt',
                linkBlock: 'TrackModalAlbumShimmer_linkBlock__yBLL4',
                link: 'TrackModalAlbumShimmer_link__7_gHs',
                description: 'TrackModalAlbumShimmer_description__63Pnt',
            };
        },
        8950: (e) => {
            e.exports = { root: 'NavbarMobile_root__NhKBQ', user: 'NavbarMobile_user__vTEb2', disabledNavigationItem: 'NavbarMobile_disabledNavigationItem__PA3EE' };
        },
        9355: (e, t, a) => {
            'use strict';
            a.d(t, { BZ: () => D, FB: () => F });
            var i = (function (e) {
                    return (e.ARTIST = 'artist'), (e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.LABEL = 'label'), (e.TRACK = 'track'), e;
                })({}),
                n = a(32290),
                l = a(63618),
                r = a(96103),
                s = a(60900),
                o = a(39407),
                d = a(91027),
                c = a(54862),
                u = a(63423),
                m = a(50162),
                p = a(79856),
                _ = a(71926),
                g = a(49574);
            let v = { src: '/_next/static/media/logos.fdba38dc.png' };
            var b = a(75797),
                h = a.n(b);
            let I = 'BUY_SUBSCRIPTION_BANNER_BUTTON_INTERSECTION_PROPERTY_ID';
            (0, r.PA)((e) => {
                let { className: t } = e,
                    {
                        user: a,
                        paywall: { modal: i },
                    } = (0, g.Pjs)(),
                    [r, b] = (0, c.d)(),
                    { formatMessage: x } = (0, s.A)(),
                    {
                        mainText: N,
                        isShimmerVisible: A,
                        isShimmerActive: S,
                        openPaymentWidgetModal: y,
                        saveOfferAndAuthorize: C,
                    } = (0, g.DpZ)({ storeName: 'music', offerElement: { element: r, intersectionPropertyId: I }, place: g.RBW.BANNER_BUTTON }),
                    T = (0, d.c)(() => {
                        if (!a.isAuthorized) return void C();
                        y();
                    });
                return (0, n.jsxs)('section', {
                    className: (0, l.$)(h().root, t),
                    'aria-label': x({ id: 'plusbar.subscription-activation' }),
                    'data-intersection-property-id': 'BUY_SUBSCRIPTION_BANNER_INTERSECTION_PROPERTY_ID',
                    children: [
                        (0, n.jsx)(m.Image, { fit: 'contain', src: v.src, className: h().logos }),
                        (0, n.jsx)(_.Heading, {
                            variant: 'div',
                            size: 'm',
                            weight: 'bold',
                            className: h().title,
                            children: (0, n.jsx)(o.A, { id: 'buy-subscription.get-more-discoveries', values: { nbsp: '\xa0' } }),
                        }),
                        A && (0, n.jsx)(p.Shimmer, { className: h().plusButtonShimmer, isActive: S, radius: 'xxxl' }),
                        !A &&
                            (0, n.jsx)(u.$, {
                                className: h().plusButton,
                                isBlock: !0,
                                radius: 'xxxl',
                                size: 'm',
                                color: 'plus',
                                onClick: T,
                                ref: b,
                                'data-intersection-property-id': I,
                                children: (0, n.jsx)(_.Caption, { variant: 'div', size: 's', lineClamp: 2, children: N }),
                            }),
                        (0, n.jsx)(u.$, {
                            className: h().button,
                            isBlock: !0,
                            radius: 'xxxl',
                            size: 'm',
                            variant: 'text',
                            color: 'primary',
                            withRipple: !1,
                            onClick: i.open,
                            children: (0, n.jsx)(o.A, { id: 'interface-actions.more-details' }),
                        }),
                    ],
                });
            });
            var x = a(59824),
                N = a(6752),
                A = a(84638),
                S = a(21916),
                y = a(44574),
                C = a(12528),
                T = a.n(C);
            let f = 'buy-subscription-modal',
                E = (0, r.PA)((e) => {
                    let { modal: t } = e,
                        a = (0, S.useRouter)(),
                        i = (0, g.NFA)().get(g.QGx),
                        { user: l } = (0, g.Pjs)(),
                        [r, s] = (0, c.d)(),
                        {
                            openPaymentWidgetModal: m,
                            isShimmerActive: p,
                            isShimmerVisible: v,
                            mainText: b,
                            mainTextA11y: h,
                            additionText: I,
                            saveOfferAndAuthorize: N,
                        } = (0, g.DpZ)({ storeName: 'music', offerElement: { element: r, intersectionPropertyId: f } }),
                        A = (0, d.c)(() => {
                            if ((t.close(), !l.isAuthorized)) return void N();
                            m();
                        }),
                        C = (0, d.c)(() => {
                            t.close(), i.authorizationUrl && a.push(i.authorizationUrl);
                        });
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(_.Caption, {
                                className: T().heading,
                                variant: 'div',
                                weight: 'bold',
                                ...(0, x.Am)(x.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_TITLE),
                                children: (0, n.jsx)(o.A, { id: 'buy-subscription.listen-without-restrictions', values: { nbsp: ' ' } }),
                            }),
                            (0, n.jsxs)('div', {
                                className: T().buttons,
                                children: [
                                    (0, n.jsx)(y.b4, {
                                        ref: s,
                                        'data-intersection-property-id': f,
                                        mainText: b,
                                        ariaLabel: h,
                                        additionText: I,
                                        isShimmerActive: p,
                                        isShimmerVisible: v,
                                        onClick: A,
                                        className: T().button,
                                        mainTextClassName: T().buttonMainText,
                                        additionTextClassName: T().buttonAdditionText,
                                        ...(0, x.Am)(x.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_SUBSCRIPTION_BUTTON),
                                    }),
                                    (0, n.jsx)(u.$, {
                                        onClick: C,
                                        className: T().button,
                                        isBlock: !0,
                                        color: 'secondary',
                                        variant: 'default',
                                        size: 'l',
                                        radius: 'xxxl',
                                        ...(0, x.Am)(x.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ALREADY_IN_PLUS_BUTTON),
                                        children: (0, n.jsx)(_.Caption, {
                                            className: T().buttonMainText,
                                            variant: 'span',
                                            weight: 'bold',
                                            children: (0, n.jsx)(o.A, { id: 'buy-subscription.already-in-plus', values: { nbsp: '\xa0' } }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var L = a(54578),
                P = a(82586),
                j = a(86269),
                R = a(3646),
                k = a.n(R);
            let M = 'buy-subscription-benefits-modal',
                O = (0, r.PA)((e) => {
                    let { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: l, withRoundCover: r } = e,
                        { user: s } = (0, g.Pjs)(),
                        [u, p] = (0, c.d)(),
                        {
                            openPaymentWidgetModal: v,
                            isShimmerActive: b,
                            isShimmerVisible: h,
                            mainText: I,
                            mainTextA11y: N,
                            additionText: A,
                            oneClickAvailable: S,
                            oneClickDisclaimerText: C,
                            oneClickDisclaimerTextA11y: T,
                            buttonText: f,
                        } = (0, g.DpZ)({ storeName: 'music', offerElement: { element: u, intersectionPropertyId: M } }),
                        E = (0, d.c)(() => {
                            t.close(), v();
                        });
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(j.Paper, {
                                radius: r ? 'round' : 'm',
                                className: k().entityCover,
                                children: (0, n.jsx)(y.BW, {
                                    fit: 'cover',
                                    src: i || 'https://avatars.mds.yandex.net/get-music-misc/30221/img.69b3f718179e1659eceb7a5c/orig',
                                    size: 110,
                                    withAvatarReplace: !0,
                                    isAvailable: !i || l,
                                    ...(0, x.Am)(x.Kq.buySubscriptionModal.ENTITY_COVER),
                                }),
                            }),
                            !!a &&
                                (0, n.jsx)(_.Caption, {
                                    variant: 'span',
                                    className: k().entityTitle,
                                    lineClamp: 2,
                                    ...(0, x.Am)(x.Kq.buySubscriptionModal.ENTITY_TITLE),
                                    children: a,
                                }),
                            (0, n.jsxs)('div', {
                                className: k().headingContainer,
                                children: [
                                    (0, n.jsx)(_.Caption, {
                                        className: k().heading,
                                        variant: 'div',
                                        weight: 'bold',
                                        size: 's',
                                        ...(0, x.Am)(x.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_TITLE),
                                        children: (0, n.jsx)(o.A, { id: 'buy-subscription.listen-without-restrictions', values: { nbsp: ' ' } }),
                                    }),
                                    !!f &&
                                        s.isAuthorized &&
                                        (0, n.jsx)(_.Caption, {
                                            className: k().offerHeading,
                                            variant: 'div',
                                            weight: 'bold',
                                            size: 's',
                                            ...(0, x.Am)(x.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_TITLE),
                                            children: (0, n.jsx)(o.A, {
                                                id: 'buy-subscription.offer-for-you',
                                                values: { offerText: null == f ? void 0 : f.toLowerCase() },
                                            }),
                                        }),
                                ],
                            }),
                            (0, n.jsxs)('div', {
                                className: k().benefits,
                                ...(0, x.Am)(x.Kq.buySubscriptionModal.BENEFITS),
                                children: [
                                    (0, n.jsxs)('div', {
                                        className: k().benefitItem,
                                        children: [
                                            (0, n.jsx)('div', {
                                                className: k().benefitIcon,
                                                children: (0, n.jsx)(m.Image, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.69a6b052d268e8685d597e08/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.69a6b0e4563d4e7d5eadc110/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: k().benefitImage,
                                                }),
                                            }),
                                            (0, n.jsx)(_.Caption, {
                                                variant: 'span',
                                                className: k().benefitText,
                                                children: (0, n.jsx)(o.A, { id: 'buy-subscription.plus-benefit-recommendations' }),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: k().benefitItem,
                                        children: [
                                            (0, n.jsx)('div', {
                                                className: k().benefitIcon,
                                                children: (0, n.jsx)(m.Image, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14722da017d15a4f2ec/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.69a6b14722da017d15a4f2eb/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: k().benefitImage,
                                                }),
                                            }),
                                            (0, n.jsx)(_.Caption, {
                                                variant: 'span',
                                                className: k().benefitText,
                                                children: (0, n.jsx)(o.A, { id: 'buy-subscription.plus-benefit-non-music', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(L.c, { className: k().benefitDivider }),
                                    (0, n.jsx)(L.c, { className: k().benefitDivider }),
                                    (0, n.jsxs)('div', {
                                        className: k().benefitItem,
                                        children: [
                                            (0, n.jsx)('div', {
                                                className: k().benefitIcon,
                                                children: (0, n.jsx)(m.Image, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14822da017d15a4f2ee/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14722da017d15a4f2ed/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: k().benefitImage,
                                                }),
                                            }),
                                            (0, n.jsx)(_.Caption, {
                                                variant: 'span',
                                                className: k().benefitText,
                                                children: (0, n.jsx)(o.A, { id: 'buy-subscription.plus-benefit-offline', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: k().benefitItem,
                                        children: [
                                            (0, n.jsx)('div', {
                                                className: k().benefitIcon,
                                                children: (0, n.jsx)(m.Image, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b1510974f922f316a6df/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.69a6b1510974f922f316a6de/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: k().benefitImage,
                                                }),
                                            }),
                                            (0, n.jsx)(_.Caption, {
                                                variant: 'span',
                                                className: k().benefitText,
                                                children: (0, n.jsx)(o.A, { id: 'buy-subscription.plus-benefit-other-services', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !s.isAuthorized &&
                                (0, n.jsxs)('div', {
                                    className: k().loginContainer,
                                    children: [
                                        (0, n.jsx)(y.Hi, {
                                            size: 'l',
                                            variant: 'default',
                                            buttonText: (0, n.jsx)(_.Caption, {
                                                variant: 'span',
                                                size: 'l',
                                                children: (0, n.jsx)(o.A, { id: 'authorization.enter-and-listen-button' }),
                                            }),
                                            className: k().button,
                                            ...(0, x.Am)(x.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ALREADY_IN_PLUS_BUTTON),
                                        }),
                                        (0, n.jsxs)(_.Caption, {
                                            variant: 'div',
                                            size: 'm',
                                            weight: 'medium',
                                            className: k().bonusText,
                                            children: [
                                                (0, n.jsx)(P.Icon, { variant: 'gift', size: 'xxs', className: k().giftIcon }),
                                                (0, n.jsx)(o.A, { id: 'payment.learn-personal-bonus' }),
                                            ],
                                        }),
                                    ],
                                }),
                            s.isAuthorized &&
                                !s.hasPlus &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(y.b4, {
                                            ref: p,
                                            'data-intersection-property-id': M,
                                            mainText: I,
                                            ariaLabel: N,
                                            additionText: A,
                                            isShimmerActive: b,
                                            isShimmerVisible: h,
                                            onClick: E,
                                            className: k().button,
                                            mainTextClassName: k().buttonMainText,
                                            additionTextClassName: k().buttonAdditionText,
                                            color: 'primary',
                                            ...(0, x.Am)(x.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_SUBSCRIPTION_BUTTON),
                                        }),
                                        S &&
                                            (0, n.jsx)(_.Caption, {
                                                variant: 'div',
                                                size: 's',
                                                weight: 'normal',
                                                'aria-label': T,
                                                className: k().oneClickDisclaimerText,
                                                ...(0, x.Am)(x.Kq.buySubscriptionModal.ONE_CLICK_DISCLAIMER_TEXT),
                                                children: C,
                                            }),
                                    ],
                                }),
                        ],
                    });
                });
            var w = a(34287),
                B = a.n(w);
            let D = (0, r.PA)((e) => {
                let { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: l, isLegalRejected: r, withRoundCover: s } = e,
                    { experiments: o } = (0, g.Pjs)(),
                    d = (0, N.L)(() =>
                        o.checkExperiment(g.zal.WebNextPlusModalFlow, 'on') && !r
                            ? (0, n.jsx)(O, { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: l, withRoundCover: s })
                            : (0, n.jsx)(E, { modal: t }),
                    );
                return (0, n.jsx)(A.a, {
                    className: B().root,
                    headerClassName: B().header,
                    contentClassName: B().content,
                    size: 'fitContent',
                    placement: 'default',
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    lockScroll: !0,
                    closeButtonProps: (0, x.Am)(x.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_CLOSE_BUTTON),
                    ...(0, x.Am)(x.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET),
                    children: d,
                });
            });
            D.displayName = 'BuySubscriptionModal';
            var K = a(55475),
                U = a.n(K);
            let V = 'PLUSBAR_BUTTON_INTERSECTION_PROPERTY_ID',
                F = (0, r.PA)((e) => {
                    let { shouldFetchOffers: t, ...a } = e,
                        { user: i, experiments: l } = (0, g.Pjs)(),
                        [r, o] = (0, c.d)(),
                        { formatMessage: m } = (0, s.A)(),
                        {
                            mainText: v,
                            isShimmerVisible: b,
                            isShimmerActive: h,
                            openPaymentWidgetModal: I,
                            saveOfferAndAuthorize: x,
                        } = (0, g.DpZ)({ storeName: 'music', isEnabled: t, offerElement: { element: r, intersectionPropertyId: V } }),
                        A = (0, N.L)(() => (!v && l.checkExperiment(g.zal.WebNextUnauthorizedSubscriptionButton, 'on') ? m({ id: 'authorization.start-button' }) : v)),
                        S = (0, d.c)(() => {
                            if (!i.isAuthorized) return void x();
                            I();
                        });
                    return b
                        ? (0, n.jsx)(p.Shimmer, { className: U().plusButtonShimmer, isActive: h, radius: 'xxxl' })
                        : (0, n.jsx)(u.$, {
                              className: U().root,
                              isBlock: !0,
                              radius: 'xxxl',
                              size: 'm',
                              color: 'plus',
                              onClick: S,
                              ref: o,
                              'data-intersection-property-id': V,
                              ...a,
                              children: (0, n.jsx)(_.Caption, { variant: 'div', size: 's', lineClamp: 2, children: A }),
                          });
                });
            F.displayName = 'PlusNavbarButton';
            var G = a(55178),
                z = a(25433),
                X = a.n(z);
            let W = 'buy-subscription-button',
                Y = (0, r.PA)((e) => {
                    let { className: t } = e,
                        a = (0, G.useRef)(null),
                        { showBuySubscriptionModal: i } = (0, g.qBP)(),
                        {
                            mainText: r,
                            mainTextA11y: s,
                            isShimmerVisible: d,
                            isShimmerActive: c,
                        } = (0, g.DpZ)({ storeName: 'music', isEnabled: !1, offerElement: { element: a.current, intersectionPropertyId: W } }),
                        m = (0, N.L)(() =>
                            d
                                ? (0, n.jsx)(y.nN, { className: X().titleShimmerContainer, isActive: c, textClassName: X().titleShimmer })
                                : (0, n.jsx)(_.Caption, {
                                      className: X().title,
                                      variant: 'span',
                                      size: 'm',
                                      weight: 'bold',
                                      'aria-label': s,
                                      ...(0, x.Am)(x.Kq.buySubscriptionButton.BUY_SUBSCRIPTION_BUTTON_TITLE),
                                      children: r,
                                  }),
                        );
                    return (0, n.jsxs)('div', {
                        ref: a,
                        className: (0, l.$)(X().root, t),
                        'data-intersection-property-id': W,
                        ...(0, x.Am)(x.Kq.buySubscriptionButton.BUY_SUBSCRIPTION_BUTTON),
                        children: [
                            (0, n.jsxs)('div', {
                                className: X().info,
                                children: [
                                    (0, n.jsxs)('div', {
                                        className: X().titleContainer,
                                        children: [(0, n.jsx)(P.Icon, { className: X().icon, 'aria-hidden': !0, variant: 'plusColor' }), m],
                                    }),
                                    (0, n.jsx)(_.Caption, {
                                        className: X().subtitle,
                                        variant: 'span',
                                        size: 'xs',
                                        weight: 'normal',
                                        ...(0, x.Am)(x.Kq.buySubscriptionButton.BUY_SUBSCRIPTION_BUTTON_SUBTITLE),
                                        children: (0, n.jsx)(o.A, { id: 'buy-subscription.music-and-films-and-other' }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(u.$, {
                                color: 'plus',
                                variant: 'default',
                                size: 'm',
                                radius: 'xxxl',
                                onClick: i,
                                ...(0, x.Am)(x.Kq.buySubscriptionButton.BUY_SUBSCRIPTION_BUTTON_ACTIVATE),
                                children: (0, n.jsx)(_.Caption, {
                                    className: X().buttonText,
                                    variant: 'span',
                                    size: 'm',
                                    weight: 'normal',
                                    children: (0, n.jsx)(o.A, { id: 'buy-subscription.activate' }),
                                }),
                            }),
                        ],
                    });
                });
            var $ = a(84176),
                H = a.n($);
            let q = (0, r.PA)((e) => {
                    var t, a, i, r, s;
                    let { shouldShowBuySubscriptionModal: o, shouldEnableCPAFeatures: d } = e,
                        {
                            album: c,
                            modals: { buySubscriptionModal: u },
                        } = (0, g.Pjs)();
                    return (0, n.jsxs)(g.rtM, {
                        page: g.l7W.ALBUM_PAGE,
                        places: [g.RBW.TOP_BUTTON],
                        shouldFetchOffers: o,
                        children: [
                            (0, n.jsx)(Y, { className: (0, l.$)({ [H().buttonWithPlayerBar]: d }) }),
                            (0, n.jsx)(D, {
                                modal: u,
                                entityTitle: null == (t = c.meta) ? void 0 : t.title,
                                entityCoverUri: null == (a = c.meta) ? void 0 : a.coverUri,
                                isLegalRejected: null == (i = c.meta) ? void 0 : i.isLegalRejected,
                                isEntityAvailable: (null == (r = c.meta) ? void 0 : r.isAvailable) !== !1 || (null == (s = c.meta) ? void 0 : s.isAudiobook),
                            }),
                        ],
                    });
                }),
                Z = (0, r.PA)((e) => {
                    var t, a, i, r;
                    let { shouldShowBuySubscriptionModal: s, shouldEnableCPAFeatures: o } = e,
                        {
                            artist: d,
                            modals: { buySubscriptionModal: c },
                        } = (0, g.Pjs)();
                    return (0, n.jsxs)(g.rtM, {
                        page: g.l7W.ARTIST_PAGE,
                        places: [g.RBW.TOP_BUTTON],
                        shouldFetchOffers: s,
                        children: [
                            (0, n.jsx)(Y, { className: (0, l.$)({ [H().buttonWithPlayerBar]: o }) }),
                            (0, n.jsx)(D, {
                                modal: c,
                                entityTitle: null == (t = d.meta) ? void 0 : t.artist.name,
                                entityCoverUri: null == (a = d.meta) ? void 0 : a.artist.coverUri,
                                isEntityAvailable: (null == (i = d.meta) ? void 0 : i.artist.isAvailable) !== !1,
                                isLegalRejected: null == (r = d.meta) ? void 0 : r.artist.isLegalRejected,
                                withRoundCover: !0,
                            }),
                        ],
                    });
                }),
                Q = (0, r.PA)((e) => {
                    let { shouldShowBuySubscriptionModal: t, shouldEnableCPAFeatures: a } = e,
                        {
                            label: i,
                            modals: { buySubscriptionModal: r },
                        } = (0, g.Pjs)();
                    return (0, n.jsxs)(g.rtM, {
                        page: g.l7W.LABEL_PAGE,
                        places: [g.RBW.TOP_BUTTON],
                        shouldFetchOffers: t,
                        children: [(0, n.jsx)(Y, { className: (0, l.$)({ [H().buttonWithPlayerBar]: a }) }), (0, n.jsx)(D, { modal: r, entityTitle: i.name || '' })],
                    });
                }),
                J = (0, r.PA)((e) => {
                    var t, a, i;
                    let { shouldShowBuySubscriptionModal: r, shouldEnableCPAFeatures: s } = e,
                        {
                            playlist: o,
                            modals: { buySubscriptionModal: d },
                        } = (0, g.Pjs)();
                    return (0, n.jsxs)(g.rtM, {
                        page: g.l7W.PLAYLIST_PAGE,
                        places: [g.RBW.TOP_BUTTON],
                        shouldFetchOffers: r,
                        children: [
                            (0, n.jsx)(Y, { className: (0, l.$)({ [H().buttonWithPlayerBar]: s }) }),
                            (0, n.jsx)(D, {
                                modal: d,
                                entityTitle: null == (t = o.meta) ? void 0 : t.title,
                                entityCoverUri: null == (a = o.meta) ? void 0 : a.coverUri,
                                isEntityAvailable: (null == (i = o.meta) ? void 0 : i.isAvailable) !== !1,
                            }),
                        ],
                    });
                }),
                ee = (0, r.PA)((e) => {
                    var t, a, i;
                    let { shouldShowBuySubscriptionModal: r, shouldEnableCPAFeatures: s } = e,
                        {
                            track: o,
                            modals: { buySubscriptionModal: d },
                        } = (0, g.Pjs)();
                    return (0, n.jsxs)(g.rtM, {
                        page: g.l7W.TRACK_PAGE,
                        places: [g.RBW.TOP_BUTTON],
                        shouldFetchOffers: r,
                        children: [
                            (0, n.jsx)(Y, { className: (0, l.$)({ [H().buttonWithPlayerBar]: s }) }),
                            (0, n.jsx)(D, {
                                modal: d,
                                entityTitle: null == (t = o.meta) ? void 0 : t.title,
                                entityCoverUri: null == (a = o.meta) ? void 0 : a.coverUri,
                                isLegalRejected: null == (i = o.meta) ? void 0 : i.isLegalRejected,
                            }),
                        ],
                    });
                });
            (0, r.PA)((e) => {
                var t;
                let { children: a, page: r } = e,
                    {
                        paymentWidgetModal: s,
                        modals: { buySubscriptionModal: o },
                        album: d,
                        albumCPA: { isPlusCPAPlayerBarEnabled: c },
                        settings: { isMobile: u, browserInfo: m },
                    } = (0, g.Pjs)(),
                    { shouldShowBuySubscriptionModal: p, showBuySubscriptionModal: _, hideBuySubscriptionModal: v } = (0, g.qBP)(),
                    b = c(d.id, null == (t = d.meta) ? void 0 : t.isNonMusic),
                    h = null == m ? void 0 : m.isTouch,
                    I = u || (h && !b);
                if (
                    ((0, G.useEffect)(() => {
                        if (p && !b) {
                            if (s.modal.isOpened) return void v();
                            _();
                        }
                    }, [v, s.modal.isOpened, p, _, b]),
                    !p || !I)
                )
                    return a;
                let x = (0, G.useMemo)(() => {
                    switch (r) {
                        case i.ARTIST:
                            return (0, n.jsx)(Z, { shouldShowBuySubscriptionModal: p, shouldEnableCPAFeatures: b });
                        case i.ALBUM:
                            return (0, n.jsx)(q, { shouldShowBuySubscriptionModal: p, shouldEnableCPAFeatures: b });
                        case i.PLAYLIST:
                            return (0, n.jsx)(J, { shouldShowBuySubscriptionModal: p, shouldEnableCPAFeatures: b });
                        case i.LABEL:
                            return (0, n.jsx)(Q, { shouldShowBuySubscriptionModal: p, shouldEnableCPAFeatures: b });
                        case i.TRACK:
                            return (0, n.jsx)(ee, { shouldShowBuySubscriptionModal: p, shouldEnableCPAFeatures: b });
                        default:
                            return (0, n.jsxs)(g.rtM, {
                                page: g.l7W.MOBILE_POPUP,
                                places: [g.RBW.TOP_BUTTON],
                                shouldFetchOffers: p,
                                children: [(0, n.jsx)(Y, { className: (0, l.$)({ [H().buttonWithPlayerBar]: b }) }), (0, n.jsx)(D, { modal: o })],
                            });
                    }
                }, [r, p, b, o]);
                return (0, n.jsxs)(n.Fragment, { children: [a, x] });
            });
        },
        12528: (e) => {
            e.exports = {
                heading: 'BuySubscriptionBaseContent_heading__lQExw',
                buttons: 'BuySubscriptionBaseContent_buttons__1MZhL',
                button: 'BuySubscriptionBaseContent_button___DQII',
                buttonMainText: 'BuySubscriptionBaseContent_buttonMainText__kKEWL',
                buttonAdditionText: 'BuySubscriptionBaseContent_buttonAdditionText__lV_51',
            };
        },
        12944: (e) => {
            e.exports = { root: 'TrackModalAlbum_root__ux7J4', title: 'TrackModalAlbum_title__CtM2_' };
        },
        13166: (e) => {
            e.exports = {
                contextMenu: 'PinItem_contextMenu__VwiFp',
                contextMenu_visible: 'PinItem_contextMenu_visible__Zgwkh',
                root: 'PinItem_root__WSoCn',
                image: 'PinItem_image__Ow56U',
                cover: 'PinItem_cover__9TcjE',
                tooltip: 'PinItem_tooltip__BGwBw',
            };
        },
        14135: (e) => {
            e.exports = {
                root: 'NavbarDesktopUnauthorizedBar_root__uQZ9L',
                title: 'NavbarDesktopUnauthorizedBar_title__vf0W7',
                subtitle: 'NavbarDesktopUnauthorizedBar_subtitle__anNNQ',
                userProfile: 'NavbarDesktopUnauthorizedBar_userProfile__hAABb',
                userId: 'NavbarDesktopUnauthorizedBar_userId__m0jC6',
                buttons: 'NavbarDesktopUnauthorizedBar_buttons__94Y3N',
            };
        },
        16192: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => eu, v: () => x });
            var i = a(92708),
                n = a(60754),
                l = a(87953),
                r = a(86882),
                s = a(72676),
                o = a(49574),
                d = a(95428),
                c = a(33797),
                u = a(93510),
                m = a(80864);
            let p = (e, t) => {
                let a = (0, m.vU)(e, t);
                if (null == t ? void 0 : t.albumId) {
                    var i, l;
                    let e = a.albums.find((e) => String(e.id) === String(t.albumId));
                    return {
                        ...a,
                        isBest: null == e || null == (i = e.bestAlbumTracks) ? void 0 : i.includes(Number(a.id)),
                        positionInAlbum: null == e || null == (l = e.trackPosition) ? void 0 : l.index,
                    };
                }
                return (0, n.wg)({ ...a });
            };
            var _ = (function (e) {
                return (e.ALBUM = 'album'), (e.ARTIST = 'artist'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), e;
            })({});
            let g = n.gK
                .model('TrailerMeta', {
                    id: n.gK.string,
                    url: n.gK.string,
                    title: n.gK.maybe(n.gK.string),
                    uuid: n.gK.maybe(n.gK.string),
                    coverUri: n.gK.maybe(n.gK.string),
                    averageColor: n.gK.maybe(n.gK.string),
                    albumArtists: n.gK.maybe(n.gK.array(c.PK)),
                    albumType: n.gK.maybe(n.gK.string),
                })
                .views((e) => ({
                    getSharingProps(t) {
                        switch (t) {
                            case _.ALBUM:
                                return { pattern: '/album/:albumId', params: { albumId: e.id } };
                            case _.ARTIST:
                                return { pattern: '/artist/:artistId', params: { artistId: e.id } };
                            case _.PLAYLIST:
                                return { pattern: '/playlists/:playlistUuid', params: { playlistUuid: e.uuid } };
                            case _.TRACK:
                                return { pattern: '/track/:trackId', params: { trackId: e.id } };
                            default:
                                return { pattern: o.Zyd.main.href, params: {} };
                        }
                    },
                }));
            var v = a(71483),
                b = a(1131);
            let h = n.gK
                    .model('TrailerState', {
                        contextType: n.gK.maybeNull(n.gK.enumeration(Object.values(v.K))),
                        contextId: n.gK.maybeNull(n.gK.string),
                        entityMeta: n.gK.maybeNull(b.x5),
                        status: n.gK.enumeration(Object.values(s.MT)),
                    })
                    .actions((e) => ({
                        setContextId: (t) => {
                            e.contextId = String(t);
                        },
                        setContextType: (t) => {
                            e.contextType = t;
                        },
                        setEntityMeta: (t) => {
                            t && t.data.meta && (e.entityMeta = (0, b.pE)(t));
                        },
                        setStatus: (t) => {
                            e.status = t;
                        },
                    })),
                I = m.vj.props({ isBest: n.gK.maybe(n.gK.boolean), positionInAlbum: n.gK.maybe(n.gK.number) }).named('TrailerTrack'),
                x = n.gK
                    .compose(
                        n.gK.model('Trailer', {
                            id: n.gK.maybeNull(n.gK.string),
                            errorStatusCode: n.gK.maybeNull(n.gK.number),
                            modal: d.qt,
                            variant: n.gK.maybeNull(n.gK.enumeration(Object.values(_))),
                            tracks: n.gK.maybeNull(n.gK.array(I)),
                            meta: n.gK.maybeNull(g),
                            state: h,
                            withAnimation: n.gK.boolean,
                            shouldAutoStartPlaying: n.gK.boolean,
                            shouldSendEventOnTracksShowed: n.gK.boolean,
                            sonataStatusBeforeTrailerStart: n.gK.enumeration(Object.values(s.MT)),
                            isManuallyPaused: n.gK.boolean,
                            utmLinkModel: n.gK.maybe(o._eP),
                            title: n.gK.maybeNull(n.gK.string),
                            shareable: n.gK.maybeNull(n.gK.boolean),
                            personalColor: n.gK.maybeNull(n.gK.number),
                        }),
                        d.XT,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === o.GuX.PENDING;
                        },
                        get isNotFound() {
                            var t;
                            let a = e.loadingState === o.GuX.RESOLVE && (null == (t = e.tracks) ? void 0 : t.length) === 0,
                                i = e.errorStatusCode === l.X1.NOT_FOUND;
                            return a || i;
                        },
                        get objectId() {
                            return ''.concat(e.variant, ':').concat(e.id);
                        },
                        get utmLink() {
                            return e.utmLinkModel && (0, i.HO)(e.utmLinkModel);
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            setUtmLink(t) {
                                t && (e.utmLinkModel = (0, n.wg)(t));
                            },
                            resetUtmLink() {
                                e.utmLinkModel = void 0;
                            },
                            setAnimationState(t) {
                                e.withAnimation = t;
                            },
                            setShouldAutoStartPlaying(t) {
                                e.shouldAutoStartPlaying = t;
                            },
                            setShouldSendEventOnTracksShowed(t) {
                                e.shouldSendEventOnTracksShowed = t;
                            },
                            setIsManuallyPaused(t) {
                                e.isManuallyPaused = t;
                            },
                            isTrailerActive: (t, a) => !!e.modal.isOpened && e.variant === t && e.id === a,
                            openArtistTrailer(a) {
                                let { sonataState: i } = (0, n.Zn)(e);
                                t.isTrailerActive(_.ARTIST, a) ||
                                    (t.reset(), (e.variant = _.ARTIST), (e.id = a), (e.sonataStatusBeforeTrailerStart = i.status), e.modal.open(), t.getArtistTrailer(a));
                            },
                            openAlbumTrailer(a) {
                                let { sonataState: i } = (0, n.Zn)(e);
                                t.isTrailerActive(_.ALBUM, String(a)) ||
                                    (t.reset(),
                                    (e.variant = _.ALBUM),
                                    (e.id = String(a)),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getAlbumTrailer(a));
                            },
                            openPlaylistTrailer(a) {
                                let { sonataState: i } = (0, n.Zn)(e);
                                t.isTrailerActive(_.PLAYLIST, a) ||
                                    (t.reset(),
                                    (e.variant = _.PLAYLIST),
                                    (e.id = a),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getPlaylistTrailer(a));
                            },
                            openTrackTrailer(a) {
                                let { sonataState: i } = (0, n.Zn)(e);
                                t.isTrailerActive(_.TRACK, a) ||
                                    (t.reset(), (e.variant = _.TRACK), (e.id = a), (e.sonataStatusBeforeTrailerStart = i.status), e.modal.open(), t.getTrackTrailer(a));
                            },
                            getArtistTrailer: (0, n.L3)(function* (a) {
                                let { artistsResource: i } = (0, n._$)(e);
                                if (e.loadingState !== o.GuX.PENDING)
                                    try {
                                        e.loadingState = o.GuX.PENDING;
                                        let { artist: t, trailer: l } = yield i.getTrailer({ artistId: a });
                                        l.tracks && (e.tracks = (0, n.wg)(l.tracks.map((e) => p(e, { isSmartPreview: !0 })))),
                                            l.title && (e.title = l.title),
                                            t &&
                                                (e.meta = ((e) => {
                                                    var t, a;
                                                    let { href: i } = (0, o.uvd)('/artist/:artistId', { params: { artistId: e.id } });
                                                    return (0, n.wg)({
                                                        id: String(e.id),
                                                        url: i,
                                                        title: e.name,
                                                        coverUri: null == (t = e.cover) ? void 0 : t.uri,
                                                        averageColor: null == (a = e.cover) ? void 0 : a.color,
                                                    });
                                                })(t)),
                                            (e.loadingState = o.GuX.RESOLVE);
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            getAlbumTrailer: (0, n.L3)(function* (a) {
                                let { albumResource: i } = (0, n._$)(e);
                                if (e.loadingState !== o.GuX.PENDING)
                                    try {
                                        e.loadingState = o.GuX.PENDING;
                                        let { album: t, artists: l, trailer: r } = yield i.getTrailer({ albumId: a });
                                        r.tracks && (e.tracks = (0, n.wg)(r.tracks.map((e) => p(e, { isSmartPreview: !0, albumId: t.id })))),
                                            r.title && (e.title = r.title),
                                            t &&
                                                (e.meta = ((e, t) => {
                                                    var a, i;
                                                    let l = null == t ? void 0 : t.map((e) => (0, c.as)({ artist: e })),
                                                        { href: r } = (0, o.uvd)('/album/:albumId', { params: { albumId: e.id } });
                                                    return (0, n.wg)({
                                                        id: String(e.id),
                                                        url: r,
                                                        title: e.title,
                                                        coverUri: null == (a = e.cover) ? void 0 : a.uri,
                                                        averageColor: null == (i = e.cover) ? void 0 : i.color,
                                                        albumArtists: l,
                                                        albumType: e.albumType,
                                                    });
                                                })(t, l)),
                                            (e.loadingState = o.GuX.RESOLVE);
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            getPlaylistTrailer: (0, n.L3)(function* (a) {
                                let { usersResource: i } = (0, n._$)(e);
                                if (e.loadingState !== o.GuX.PENDING)
                                    try {
                                        e.loadingState = o.GuX.PENDING;
                                        let { uid: t, kind: l } = (0, r.I)(a);
                                        if (!t || !l) {
                                            e.loadingState = o.GuX.REJECT;
                                            return;
                                        }
                                        let {
                                            playlist: s,
                                            trailer: d,
                                            shareable: c,
                                            personalColor: u,
                                        } = yield i.getPlaylistTrailer({ userId: t, playlistKind: Number(l) });
                                        d.tracks && (e.tracks = (0, n.wg)(d.tracks.map((e) => p(e, { isSmartPreview: !0 })))),
                                            d.title && (e.title = d.title),
                                            c && (e.shareable = c),
                                            u && (e.personalColor = u),
                                            s &&
                                                (e.meta = ((e) => {
                                                    var t, a;
                                                    let { href: i } = (0, o.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                                                    return (0, n.wg)({
                                                        id: ''.concat(e.uid, ':').concat(e.kind),
                                                        url: i,
                                                        uuid: e.playlistUuid,
                                                        title: e.title,
                                                        coverUri: null == (t = e.cover) ? void 0 : t.uri,
                                                        averageColor: null == (a = e.cover) ? void 0 : a.color,
                                                    });
                                                })(s)),
                                            (e.loadingState = o.GuX.RESOLVE);
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            getTrackTrailer: (0, n.L3)(function* (a) {
                                let { tracksResource: i } = (0, n._$)(e);
                                if (e.loadingState !== o.GuX.PENDING)
                                    try {
                                        e.loadingState = o.GuX.PENDING;
                                        let { track: t, title: d } = yield i.getTrailer({ trackId: a });
                                        if ((d && (e.title = d), t)) {
                                            var l, r, s;
                                            (e.tracks = (0, n.wg)([p(t, { isSmartPreview: !0 })])),
                                                (e.meta = (0, n.wg)({
                                                    id: String(t.id),
                                                    url: (0, u.$O)(t.id, null == (r = t.albums) || null == (l = r[0]) ? void 0 : l.id),
                                                    title: t.title,
                                                    coverUri: t.coverUri,
                                                    averageColor: null == (s = t.derivedColors) ? void 0 : s.average,
                                                }));
                                        }
                                        e.loadingState = o.GuX.RESOLVE;
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            handleError(t) {
                                let { modelActionsLogger: a } = (0, n._$)(e);
                                a.error(t),
                                    t instanceof l.GX && (t.statusCode === l.X1.NOT_FOUND || t.statusCode === l.X1.BAD_REQUEST) && (e.errorStatusCode = l.X1.NOT_FOUND),
                                    e.loadingState !== o.GuX.IDLE && (e.loadingState = o.GuX.REJECT);
                            },
                            reset() {
                                (e.loadingState = o.GuX.IDLE),
                                    (e.errorStatusCode = null),
                                    (e.variant = null),
                                    (e.id = null),
                                    (e.tracks = null),
                                    (e.meta = null),
                                    (e.withAnimation = !0),
                                    (e.shouldAutoStartPlaying = !0),
                                    (e.shouldSendEventOnTracksShowed = !0),
                                    (e.sonataStatusBeforeTrailerStart = s.MT.IDLE),
                                    (e.isManuallyPaused = !0),
                                    (e.title = null),
                                    (e.shareable = null),
                                    (e.personalColor = null);
                            },
                        };
                        return t;
                    });
            var N = a(32290),
                A = a(96103),
                S = a(55178),
                y = a(60900),
                C = a(59824),
                T = a(63423),
                f = a(82586),
                E = a(84638),
                L = a(16172),
                P = a(52068);
            let j = () => {
                let e = (0, P.st)(),
                    t = (0, o.UlF)(),
                    { hash: a } = (0, P.gf)(),
                    { pageId: i } = (0, o.$au)();
                return (0, S.useCallback)(
                    (n) => {
                        if (!e || !i) return;
                        let l = { hash: a, pageId: o.Wft[i], mainObjectType: L.ky.Trailer, mainObjectId: n },
                            r = (0, L.Fx)({ params: l, logger: t, context: 'useSendEventOnTrailerClosed' });
                        r && (0, L.XB)(e.evgenInstance, r);
                    },
                    [e, a, t, i],
                );
            };
            var R = a(63618),
                k = a(27576),
                M = a(44574);
            let O = () => {
                    let e = (0, P.st)(),
                        t = (0, o.UlF)(),
                        { hash: a } = (0, P.gf)(),
                        { pageId: i } = (0, o.$au)();
                    return (0, S.useCallback)(
                        (n, l) => {
                            if (!e || !i) return;
                            let r = { hash: a, pageId: o.Wft[i], mainObjectType: L.ky.Trailer, mainObjectId: n };
                            l && ((r.actionType = L.X2.Pause), (r.userInteractionType = L.gi.Tap));
                            let s = (0, L.Fx)({ params: r, logger: t, context: 'useSendEventOnTrailerStarted' });
                            s &&
                                (l && ((e) => 'object' == typeof e && null !== e && 'actionType' in e && 'mainObjectId' in e)(s)
                                    ? (0, L.bv)(e.evgenInstance, s)
                                    : (0, L.e7)(e.evgenInstance, s));
                        },
                        [e, a, t, i],
                    );
                },
                w = (e) => {
                    let { variant: t, blockId: a, meta: i } = e,
                        n = ((e) => {
                            switch (e) {
                                case _.ALBUM:
                                    return o._Q$.ALBUM;
                                case _.ARTIST:
                                    return o._Q$.ARTIST;
                                case _.PLAYLIST:
                                    return o._Q$.PLAYLIST;
                                case _.TRACK:
                                    return o._Q$.TRACK;
                            }
                        })(t),
                        l = ((e) => {
                            switch (e) {
                                case _.ALBUM:
                                    return v.K.Album;
                                case _.ARTIST:
                                    return v.K.Artist;
                                case _.PLAYLIST:
                                    return v.K.Playlist;
                                case _.TRACK:
                                default:
                                    return v.K.Various;
                            }
                        })(t),
                        r = (null == i ? void 0 : i.uuid) || (null == i ? void 0 : i.id);
                    return (0, o.fyy)({ pageId: n, blockId: a, contextId: r, contextType: l, pageEntityId: r });
                },
                B = (e) => {
                    let { variant: t, id: a, from: i, uuid: n, utmLink: l } = e;
                    switch (t) {
                        case _.ALBUM:
                            return { type: v.K.Album, trailer: !0, meta: { id: Number(a) }, from: i, utmLink: l };
                        case _.ARTIST:
                            return { type: v.K.Artist, trailer: !0, meta: { id: String(a) }, from: i, utmLink: l };
                        case _.PLAYLIST:
                            return { type: v.K.Playlist, trailer: !0, meta: { id: String(a), uuid: n }, from: i, utmLink: l };
                        case _.TRACK:
                            return { type: v.K.Various, trailer: !0, meta: { id: String(a) }, from: i, utmLink: l };
                    }
                };
            var D = a(39407),
                K = a(71926),
                U = a(5874),
                V = a.n(U);
            let F = (0, A.PA)(() => {
                    let { trailer: e } = (0, o.Pjs)(),
                        { variant: t, id: a } = e,
                        i = (0, S.useCallback)(() => {
                            if (t && a)
                                switch (t) {
                                    case _.ALBUM:
                                        e.getAlbumTrailer(Number(a));
                                        break;
                                    case _.ARTIST:
                                        e.getArtistTrailer(a);
                                        break;
                                    case _.PLAYLIST:
                                        e.getPlaylistTrailer(a);
                                        break;
                                    case _.TRACK:
                                        e.getTrackTrailer(a);
                                }
                        }, [a, e, t]);
                    return (0, N.jsxs)('div', {
                        className: V().root,
                        children: [
                            (0, N.jsxs)('div', {
                                className: V().textContainer,
                                children: [
                                    (0, N.jsx)(K.Heading, {
                                        variant: 'h2',
                                        className: V().title,
                                        size: 'xs',
                                        weight: 'bold',
                                        children: (0, N.jsx)(D.A, { id: 'error-messages.something-went-wrong' }),
                                    }),
                                    (0, N.jsx)(K.Caption, {
                                        className: V().description,
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: (0, N.jsx)(D.A, { id: 'trailer.something-went-wrong-description' }),
                                    }),
                                ],
                            }),
                            (0, N.jsx)(T.$, {
                                onClick: i,
                                color: 'secondary',
                                size: 'default',
                                radius: 'xxxl',
                                children: (0, N.jsx)(K.Caption, { type: 'controls', variant: 'span', size: 'm', children: (0, N.jsx)(D.A, { id: 'page-error.reload' }) }),
                            }),
                        ],
                    });
                }),
                G = () =>
                    (0, N.jsx)('div', {
                        className: V().root,
                        children: (0, N.jsxs)('div', {
                            className: V().textContainer,
                            children: [
                                (0, N.jsx)(K.Heading, {
                                    variant: 'h2',
                                    className: V().title,
                                    size: 'xs',
                                    weight: 'bold',
                                    children: (0, N.jsx)(D.A, { id: 'trailer.not-found-title' }),
                                }),
                                (0, N.jsx)(K.Caption, {
                                    className: V().description,
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: (0, N.jsx)(D.A, { id: 'trailer.not-found-description' }),
                                }),
                            ],
                        }),
                    });
            var z = a(79856);
            let X = () => {
                    let e = (0, P.st)(),
                        t = (0, o.UlF)(),
                        { hash: a } = (0, P.gf)(),
                        { pageId: i } = (0, o.$au)();
                    return (0, S.useCallback)(
                        (n, l) => {
                            if (!e || !i) return;
                            let r = { hash: a, pageId: o.Wft[i], mainObjectType: L.ky.Trailer, mainObjectId: n, from: L.QT.TrailerScreen, to: o.Wft[l] },
                                s = (0, L.Fx)({ params: r, logger: t, context: 'useSendEventOnTrailerNavigated' });
                            s && (0, L.Mu)(e.evgenInstance, s);
                        },
                        [e, a, t, i],
                    );
                },
                W = { [_.ALBUM]: L.ky.Album, [_.ARTIST]: L.ky.Artist, [_.PLAYLIST]: L.ky.Playlist, [_.TRACK]: L.ky.Track },
                Y = { [_.ALBUM]: o._Q$.ALBUM, [_.ARTIST]: o._Q$.ARTIST, [_.PLAYLIST]: o._Q$.PLAYLIST };
            var $ = a(49630),
                H = a.n($);
            let q = (0, A.PA)((e) => {
                var t, a;
                let { variant: i, isShimmerVisible: n, isShimmerActive: l, className: r } = e,
                    {
                        trailer: { state: d, meta: c, modal: u, objectId: m, resetUtmLink: p, tracks: g },
                        albumCPA: { isPlusCPAPlayerBarEnabled: b },
                        paywall: { modal: h },
                    } = (0, o.Pjs)(),
                    I = (0, o.NPu)(),
                    x = (0, o.eGp)(),
                    { from: A } = w({ variant: i, blockId: o.UfI.TRAILER }),
                    y = X(),
                    E = j(),
                    k = (() => {
                        let e = (0, P.st)(),
                            t = (0, o.UlF)(),
                            { hash: a } = (0, P.gf)(),
                            { pageId: i } = (0, o.$au)();
                        return (0, S.useCallback)(
                            (n, l) => {
                                if (!e || !i) return;
                                let r = { hash: a, pageId: o.Wft[i], mainObjectType: n, mainObjectId: l },
                                    s = (0, L.Fx)({ params: r, logger: t, context: 'useSendEventOnTrailerEntityStarted' });
                                s && (0, L.e7)(e.evgenInstance, s);
                            },
                            [e, a, t, i],
                        );
                    })(),
                    M = (0, o.ZpR)(null != (a = null == c ? void 0 : c.url) ? a : ''),
                    O = (0, S.useCallback)(() => {
                        M();
                        let e = Y[i];
                        e && y(m, e);
                    }, [M, m, y, i]),
                    B = ((e) => {
                        let {
                            trailer: { meta: t },
                            artist: a,
                            album: i,
                            playlist: n,
                        } = (0, o.Pjs)();
                        switch (e) {
                            case _.ALBUM:
                                return i.id === Number(null == t ? void 0 : t.id);
                            case _.ARTIST:
                                return a.id === (null == t ? void 0 : t.id);
                            case _.PLAYLIST:
                                return n.uuid === (null == t ? void 0 : t.uuid);
                            case _.TRACK:
                                return !1;
                        }
                    })(i),
                    K = !B && i !== _.TRACK,
                    U = b(
                        (function (e, t, a) {
                            if (e === _.ALBUM && (null == t ? void 0 : t.id)) return Number(t.id);
                            if (e === _.TRACK) {
                                var i;
                                return null == a || null == (i = a[0]) ? void 0 : i.albumId;
                            }
                        })(i, c, g),
                    ),
                    V = (0, S.useCallback)(() => {
                        var e, t, a, n;
                        if (I && !U) return void h.open();
                        let l =
                            null == x || null == (a = x.playbackController.activePlayback.value) || null == (t = a.state) || null == (e = t.currentContext.value)
                                ? void 0
                                : e.utmLink;
                        null == x || x.stop(o.V_r.TRAILER), p(), u.close(), E(m), K && O();
                        let r = d.status !== s.MT.PLAYING || i === _.ALBUM ? { index: 0 } : { entityId: null == (n = d.entityMeta) ? void 0 : n.id },
                            g = ((e) => {
                                let { variant: t, id: a, from: i, uuid: n, utmLink: l } = e;
                                switch (t) {
                                    case _.ALBUM:
                                        return { type: v.K.Album, meta: { id: Number(a) }, from: i, utmLink: l };
                                    case _.ARTIST:
                                        return { type: v.K.Artist, meta: { id: String(a) }, from: i, utmLink: l };
                                    case _.PLAYLIST:
                                        return { type: v.K.Playlist, meta: { id: String(a), uuid: n }, from: i, utmLink: l };
                                    case _.TRACK:
                                        return { type: v.K.Various, meta: { id: String(a) }, from: i, utmLink: l };
                                }
                            })({ variant: i, id: null == c ? void 0 : c.id, uuid: null == c ? void 0 : c.uuid, from: A, utmLink: l });
                        null == x ||
                            x.playContext({ contextData: g, queueParams: r }).then(() => {
                                (null == c ? void 0 : c.id) && k(W[i], c.id);
                            });
                    }, [
                        x,
                        p,
                        u,
                        E,
                        m,
                        K,
                        d.status,
                        null == (t = d.entityMeta) ? void 0 : t.id,
                        i,
                        null == c ? void 0 : c.id,
                        null == c ? void 0 : c.uuid,
                        A,
                        O,
                        k,
                        I,
                        U,
                        h,
                    ]),
                    F = (0, S.useMemo)(
                        () =>
                            (0, N.jsxs)('div', {
                                className: (0, R.$)(H().root, r),
                                children: [
                                    (0, N.jsx)(T.$, {
                                        radius: 'xxxl',
                                        size: 'default',
                                        color: 'secondary',
                                        icon: (0, N.jsx)(f.Icon, { variant: 'play', size: 'xxxs' }),
                                        className: H().button,
                                        onClick: V,
                                        ...(0, C.Am)(C.e8.trailer.TRAILER_LISTEN_FULL_VERSION_BUTTON),
                                        children: (0, N.jsx)(D.A, { id: 'trailer.listen-full-version' }),
                                    }),
                                    K &&
                                        (0, N.jsx)(T.$, {
                                            radius: 'xxxl',
                                            size: 'default',
                                            color: 'secondary',
                                            onClick: O,
                                            className: H().button,
                                            ...(0, C.Am)(C.e8.trailer.TRAILER_NAVIGATE_TO_ENTITY_BUTTON),
                                            children: (0, N.jsx)(D.A, { id: 'trailer.navigate' }),
                                        }),
                                ],
                            }),
                        [r, V, O, K],
                    );
                return n
                    ? ((e) => {
                          let { isActive: t, className: a, isCurrentEntityPage: i } = e;
                          return (0, N.jsxs)('div', {
                              className: (0, R.$)(H().root, a),
                              children: [
                                  (0, N.jsx)(z.Shimmer, { isActive: t, radius: 'xxxl', className: H().playButtonShimmer }),
                                  i && (0, N.jsx)(z.Shimmer, { isActive: t, radius: 'xxxl', className: H().linkButtonShimmer }),
                              ],
                          });
                      })({ isActive: l, isCurrentEntityPage: B, className: r })
                    : F;
            });
            var Z = a(91027),
                Q = a(50162),
                J = a(86269),
                ee = a(16754),
                et = a.n(ee);
            let ea = (0, A.PA)((e) => {
                var t;
                let { variant: a, isShimmerVisible: i, isShimmerActive: n, className: l } = e,
                    {
                        trailer: { meta: r, objectId: s, utmLink: d, personalColor: c, shareable: u, title: m, state: p },
                        playlist: { shouldShowTrailerOnboarding: g, isRewind2024Playlist: v },
                    } = (0, o.Pjs)(),
                    { from: b } = w({ variant: a, blockId: o.UfI.TRAILER, meta: r }),
                    h = X(),
                    I = O(),
                    x = (0, o.brA)(),
                    A = a === _.ARTIST ? 'round' : 's',
                    { notify: y } = (0, o.lkh)(),
                    E = (0, o.PT7)(),
                    L = (0, N.jsx)(D.A, { id: 'onboarding.rewind-trailer', values: { br: (0, N.jsx)('br', {}) } }),
                    { togglePlay: P, isPlaying: j } = (0, o.Dx4)({
                        playContextParams: {
                            contextData: B({ variant: a, id: null == r ? void 0 : r.id, uuid: null == r ? void 0 : r.uuid, from: b, utmLink: d }),
                            loadContextMeta: !0,
                        },
                        sonataState: p,
                        playbackId: o.V_r.TRAILER,
                    }),
                    k = (0, Z.c)(() => {
                        E() || (I(s, j), P(), x(!j));
                    }),
                    U = (0, S.useCallback)(() => {
                        let e = Y[a];
                        e && h(s, e);
                    }, [s, h, a]),
                    V = (0, o.R4Z)(c || 0),
                    F = (0, o.mBl)(c || 0),
                    G = (0, S.useMemo)(() => {
                        let e, t;
                        return (
                            'number' == typeof c ? ((e = V), (t = F)) : (e = { '--trailer-color': null == r ? void 0 : r.averageColor }),
                            (0, N.jsxs)('div', {
                                className: et().coverContainer,
                                ...(0, C.Am)(C.e8.trailer.TRAILER_COVER),
                                children: [
                                    (0, N.jsx)(J.Paper, {
                                        radius: A,
                                        className: et().cover,
                                        style: t,
                                        withShadow: !0,
                                        children: (0, N.jsx)(Q.Image, {
                                            'aria-hidden': !0,
                                            src: null == r ? void 0 : r.coverUri,
                                            size: 100,
                                            fit: 'cover',
                                            withAvatarReplace: !0,
                                        }),
                                    }),
                                    (0, N.jsx)('div', {
                                        className: et().iconContainer,
                                        style: e,
                                        children: (0, N.jsx)(f.Icon, { variant: 'trailer', size: 'xs', className: et().icon }),
                                    }),
                                ],
                            })
                        );
                    }, [A, null == r ? void 0 : r.coverUri, F, null == r ? void 0 : r.averageColor, c, V]),
                    W = (0, S.useMemo)(() => {
                        let e = null == r ? void 0 : r.url;
                        return e
                            ? (0, N.jsx)(M.N_, {
                                  href: e,
                                  className: et().link,
                                  onClick: U,
                                  ...(0, C.Am)(C.e8.trailer.TRAILER_ENTITY_TITLE),
                                  children: (0, N.jsx)(K.Caption, {
                                      variant: 'span',
                                      type: 'controls',
                                      lineClamp: 1,
                                      className: et().text,
                                      children: null == r ? void 0 : r.title,
                                  }),
                              })
                            : (0, N.jsx)(K.Caption, {
                                  variant: 'span',
                                  type: 'controls',
                                  lineClamp: 1,
                                  className: et().text,
                                  ...(0, C.Am)(C.e8.trailer.TRAILER_ENTITY_TITLE),
                                  children: null == r ? void 0 : r.title,
                              });
                    }, [U, r]),
                    $ = (0, S.useMemo)(
                        () =>
                            (0, N.jsxs)('div', {
                                className: et().textContainer,
                                children: [
                                    (0, N.jsx)(K.Heading, {
                                        variant: 'h1',
                                        className: (0, R.$)(et().text, et().title),
                                        lineClamp: 1,
                                        ...(0, C.Am)(C.e8.trailer.TRAILER_MODAL_TITLE),
                                        children: m,
                                    }),
                                    W,
                                ],
                            }),
                        [W, m],
                    ),
                    { pattern: H, params: q } = null != (t = null == r ? void 0 : r.getSharingProps(a)) ? t : { pattern: o.Zyd.main.href, params: {} },
                    { shareLink: ee } = (0, o.bNS)(H, { params: q, query: { [o.K3F.OPEN_TRAILER]: 'true' } }),
                    ea = (0, S.useCallback)(async () => {
                        await window.navigator.clipboard.writeText(ee),
                            y(
                                (0, N.jsx)(M.Do, {
                                    entityTitle: null == r ? void 0 : r.title,
                                    entityVariant: ((e) => {
                                        switch (e) {
                                            case _.ALBUM:
                                                return o.Yxq.ALBUM;
                                            case _.ARTIST:
                                                return o.Yxq.ARTIST;
                                            case _.PLAYLIST:
                                                return o.Yxq.PLAYLIST;
                                            case _.TRACK:
                                                return o.Yxq.TRACK;
                                        }
                                    })(a),
                                }),
                                { containerId: o.uQT.INFO },
                            );
                    }, [ee, y, null == r ? void 0 : r.title, a]);
                return (0, N.jsxs)('div', {
                    className: (0, R.$)(et().root, l),
                    ...(0, C.Am)(C.e8.trailer.TRAILER_HEADER),
                    children: [
                        i ? (0, N.jsx)('div', { className: et().coverContainer, children: (0, N.jsx)(z.Shimmer, { isActive: n, radius: A, className: et().cover }) }) : G,
                        i
                            ? ((e) =>
                                  (0, N.jsxs)('div', {
                                      className: et().textContainer,
                                      children: [
                                          (0, N.jsx)('div', {
                                              className: et().shimmerContainer,
                                              children: (0, N.jsx)(z.Shimmer, { isActive: e, radius: 'xl', className: et().titleShimmer }),
                                          }),
                                          (0, N.jsx)('div', {
                                              className: et().shimmerContainer,
                                              children: (0, N.jsx)(z.Shimmer, { isActive: e, radius: 'xl', className: et().descriptionShimmer }),
                                          }),
                                      ],
                                  }))(n)
                            : $,
                        !i &&
                            u &&
                            (0, N.jsx)(T.$, {
                                className: et().share,
                                icon: (0, N.jsx)(f.Icon, { variant: 'share', size: 'xxs' }),
                                onClick: ea,
                                variant: 'text',
                                withRipple: !1,
                                withHover: !1,
                            }),
                        !i &&
                            (0, N.jsx)(M.cv, {
                                customMessage: v ? L : void 0,
                                shouldForceOpenTooltip: !!g,
                                children: (0, N.jsx)(M.DM, {
                                    className: et().playButton,
                                    iconSize: 'm',
                                    variant: 'filled',
                                    isPlaying: j,
                                    iconClassName: et().playButtonIcon,
                                    onClick: k,
                                }),
                            }),
                    ],
                });
            });
            var ei = a(95736),
                en = a.n(ei);
            let el = (0, A.PA)((e) => {
                let { variant: t, track: a, playContextParams: i, viewUuid: n } = e,
                    {
                        trailer: { meta: l, objectId: r, shouldSendEventOnTracksShowed: d, setShouldSendEventOnTracksShowed: c },
                    } = (0, o.Pjs)(),
                    u = t === _.ALBUM ? m.g2 : m.nP,
                    { isActive: p, progress: g } = ((e, t) => {
                        var a;
                        let i = (0, o.eGp)(),
                            {
                                trailer: { state: n },
                            } = (0, o.Pjs)(),
                            [l, r] = (0, S.useState)(0),
                            d = (null == (a = n.entityMeta) ? void 0 : a.id) === e;
                        return (
                            (0, S.useEffect)(() => {
                                let e =
                                    null == i
                                        ? void 0
                                        : i.getState(o.V_r.TRAILER).playerState.progress.onChange(() => {
                                              let e,
                                                  a = i.getState(o.V_r.TRAILER).playerState,
                                                  n = a.progress.value;
                                              (e = t ? t / 1e3 : n.duration), d || r(0), a.status.value === s.MT.PLAYING && d && r((n.position / e) * 100);
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [t, d, i]),
                            { isActive: d, progress: l }
                        );
                    })(a.id, a.durationMs),
                    v = ((e, t) => {
                        let a = (0, o.UlF)(),
                            i = (0, P.st)(),
                            { hash: n } = (0, P.gf)(),
                            { pageId: l } = (0, o.$au)(),
                            { blockType: r, blockId: s, blockPosX: d, blockPosY: c } = (0, o.N8n)(),
                            { objectType: u, objectsCount: m, objectId: p, objectPosX: _, objectPosY: g } = (0, o.Jfv)();
                        return (0, S.useCallback)(() => {
                            if (!i || !l) return;
                            let v = o.Wft[l];
                            if (!v) return;
                            let b = {
                                    hash: n,
                                    pageId: v,
                                    mainObjectType: L.ky.Trailer,
                                    mainObjectId: e,
                                    entityType: r,
                                    entityId: s,
                                    entityPosX: d,
                                    entityPosY: c,
                                    objectsCount: m,
                                    viewUuid: t,
                                    objectType: u,
                                    objectId: p,
                                    objectPosX: _,
                                    objectPosY: g,
                                },
                                h = (0, L.Fx)({ params: b, logger: a, context: 'useSendEventOnSmartPreviewShowed' });
                            h && (0, L.Pf)(i.evgenInstance, h);
                        }, [i, s, d, c, r, n, a, e, p, _, g, u, m, l, t]);
                    })(r, n),
                    b = ((e) => {
                        let t = (0, o.UlF)(),
                            a = (0, P.st)(),
                            { hash: i } = (0, P.gf)(),
                            { pageId: n } = (0, o.$au)(),
                            { blockType: l, blockId: r, blockPosX: s, blockPosY: d } = (0, o.N8n)(),
                            { objectType: c, objectsCount: u, objectId: m, objectPosX: p, objectPosY: _ } = (0, o.Jfv)();
                        return (0, S.useCallback)(
                            (g) => {
                                if (!a || !n) return;
                                let v = o.Wft[n];
                                if (!v) return;
                                let b = {
                                    hash: i,
                                    pageId: v,
                                    mainObjectType: L.ky.Trailer,
                                    mainObjectId: e,
                                    entityType: l,
                                    entityId: r,
                                    entityPosX: s,
                                    entityPosY: d,
                                    objectsCount: u,
                                    objectType: c,
                                    objectId: m,
                                    objectPosX: p,
                                    objectPosY: _,
                                };
                                g || ((b.actionType = L.X2.Pause), (b.userInteractionType = L.gi.Tap));
                                let h = (0, L.Fx)({ params: b, logger: t, context: 'useSendEventOnSmartPreviewStarted' });
                                h &&
                                    (!g && ((e) => 'object' == typeof e && null !== e && 'actionType' in e && 'mainObjectId' in e)(h)
                                        ? (0, L.h_)(a.evgenInstance, h)
                                        : (0, L.er)(a.evgenInstance, h));
                            },
                            [a, r, s, d, l, i, t, e, m, p, _, c, u, n],
                        );
                    })(r),
                    h = ((e) => {
                        let t = (0, o.UlF)(),
                            a = (0, P.st)(),
                            { hash: i } = (0, P.gf)(),
                            { pageId: n } = (0, o.$au)(),
                            { blockType: l, blockId: r, blockPosX: s, blockPosY: d } = (0, o.N8n)(),
                            { objectType: c, objectsCount: u, objectId: m, objectPosX: p, objectPosY: _ } = (0, o.Jfv)();
                        return (0, S.useCallback)(
                            (g) => {
                                if (!a || !n) return;
                                let v = o.Wft[n];
                                if (!v) return;
                                let b = {
                                    hash: i,
                                    pageId: v,
                                    mainObjectType: L.ky.Trailer,
                                    mainObjectId: e,
                                    entityType: l,
                                    entityId: r,
                                    entityPosX: s,
                                    entityPosY: d,
                                    objectsCount: u,
                                    objectType: c,
                                    objectId: m,
                                    objectPosX: p,
                                    objectPosY: _,
                                    userInteractionType: L.gi.Tap,
                                };
                                g ? (b.actionType = L.X2.Like) : (b.actionType = L.X2.Unlike);
                                let h = (0, L.Fx)({ params: b, logger: t, context: 'useSendEventOnSmartPreviewLike' });
                                h && (0, L.h_)(a.evgenInstance, h);
                            },
                            [a, r, s, d, l, i, t, e, m, p, _, c, u, n],
                        );
                    })(r),
                    I = ((e) => {
                        let t = (0, o.UlF)(),
                            a = (0, P.st)(),
                            { hash: i } = (0, P.gf)(),
                            { pageId: n } = (0, o.$au)(),
                            { blockType: l, blockId: r, blockPosX: s, blockPosY: d } = (0, o.N8n)(),
                            { objectType: c, objectsCount: u, objectId: m, objectPosX: p, objectPosY: _ } = (0, o.Jfv)();
                        return (0, S.useCallback)(
                            (g) => {
                                if (!a || !n) return;
                                let v = o.Wft[n];
                                if (!v) return;
                                let b = {
                                    hash: i,
                                    pageId: v,
                                    mainObjectType: L.ky.Trailer,
                                    mainObjectId: e,
                                    entityType: l,
                                    entityId: r,
                                    entityPosX: s,
                                    entityPosY: d,
                                    objectsCount: u,
                                    objectType: c,
                                    objectId: m,
                                    objectPosX: p,
                                    objectPosY: _,
                                    userInteractionType: L.gi.Tap,
                                };
                                g ? (b.actionType = L.X2.Dislike) : (b.actionType = L.X2.Undislike);
                                let h = (0, L.Fx)({ params: b, logger: t, context: 'useSendEventOnSmartPreviewDislike' });
                                h && (0, L.h_)(a.evgenInstance, h);
                            },
                            [a, r, s, d, l, i, t, e, m, p, _, c, u, n],
                        );
                    })(r);
                (0, S.useEffect)(() => {
                    d && (v(), c(!1));
                }, [v, c, d]);
                let x = (0, S.useMemo)(() => ({ '--track-progress': ''.concat(g || 0, '%') }), [g]);
                return (0, N.jsx)('div', {
                    className: (0, R.$)(en().root, { [en().root_active]: p }),
                    style: x,
                    children: (0, N.jsx)(u, {
                        position: a.positionInAlbum,
                        withLightning: !!(null == a ? void 0 : a.isBest),
                        track: a,
                        playContextParams: i,
                        albumArtists: null == l ? void 0 : l.albumArtists,
                        onPlayClick: b,
                        onLikeClick: h,
                        onDislikeClick: I,
                    }),
                });
            });
            var er = a(38306),
                es = a.n(er);
            let eo = (0, A.PA)((e) => {
                let { variant: t } = e,
                    {
                        trailer: a,
                        playlist: { setShouldShowTrailerOnboarding: i },
                    } = (0, o.Pjs)(),
                    {
                        isLoading: n,
                        isRejected: l,
                        tracks: r,
                        meta: s,
                        state: d,
                        shouldAutoStartPlaying: c,
                        setShouldAutoStartPlaying: u,
                        isNotFound: m,
                        modal: p,
                        utmLink: g,
                    } = a,
                    v = (0, o.eGp)(),
                    { from: b } = w({ variant: t, blockId: o.UfI.TRAILER, meta: s }),
                    h = (() => {
                        let e = (0, P.st)(),
                            t = (0, o.UlF)(),
                            { hash: a } = (0, P.gf)(),
                            { pageId: i } = (0, o.$au)();
                        return (0, S.useCallback)(
                            (n) => {
                                if (!e || !i) return;
                                let l = { hash: a, pageId: o.Wft[i], mainObjectType: L.ky.Trailer, mainObjectId: n },
                                    r = (0, L.Fx)({ params: l, logger: t, context: 'useSendEventOnTrailerOpened' });
                                r && (0, L.w5)(e.evgenInstance, r);
                            },
                            [e, a, t, i],
                        );
                    })(),
                    I = O(),
                    [x, A] = (0, S.useState)(!1),
                    y = (0, S.useRef)((0, k.A)()),
                    C = n || l,
                    { isPlaying: T } = (0, o.Dx4)({
                        playContextParams: {
                            contextData: B({ variant: t, id: null == s ? void 0 : s.id, uuid: null == s ? void 0 : s.uuid, from: b, utmLink: g }),
                            loadContextMeta: !0,
                        },
                        sonataState: a.state,
                        playbackId: o.V_r.TRAILER,
                    });
                (0, S.useEffect)(() => {
                    p.isOpened &&
                        (null == s ? void 0 : s.id) &&
                        c &&
                        (h(a.objectId),
                        null == v ||
                            v
                                .playContext(
                                    {
                                        contextData: B({ variant: t, id: null == s ? void 0 : s.id, uuid: null == s ? void 0 : s.uuid, from: b, utmLink: g }),
                                        queueParams: { index: 0 },
                                        loadContextMeta: !0,
                                    },
                                    o.V_r.TRAILER,
                                )
                                .then(() => {
                                    A(!0);
                                }),
                        u(!1));
                }, [b, null == s ? void 0 : s.id, null == s ? void 0 : s.uuid, p.isOpened, h, I, u, c, v, d.status, a.objectId, t, g, T]),
                    (0, S.useEffect)(() => {
                        x && (T ? (I(a.objectId), A(!1)) : i(!0));
                    }, [x, T, I, a.objectId, i]);
                let f = (0, S.useCallback)(
                        (e) => ({
                            contextData: B({ variant: t, id: null == s ? void 0 : s.id, uuid: null == s ? void 0 : s.uuid, from: b, utmLink: g }),
                            queueParams: { index: e },
                            loadContextMeta: !0,
                        }),
                        [b, null == s ? void 0 : s.id, null == s ? void 0 : s.uuid, t, g],
                    ),
                    E = (0, S.useMemo)(
                        () =>
                            C
                                ? ((e, t) => {
                                      let a = t === _.ALBUM ? o.Xjt.ALBUM : o.Xjt.PLAYLIST;
                                      return Array.from({ length: t === _.TRACK ? 1 : 5 }, (t, i) =>
                                          (0, N.jsx)(
                                              'div',
                                              {
                                                  className: es().trackContainer,
                                                  children: (0, N.jsx)(M.DS, {
                                                      isActive: e,
                                                      className: (0, R.$)(es().trackShimmer, { [es().albumShimmer]: a === o.Xjt.ALBUM }),
                                                      variant: a,
                                                  }),
                                              },
                                              i,
                                          ),
                                      );
                                  })(n, t)
                                : null == r
                                  ? void 0
                                  : r.map((e, a) =>
                                        (0, N.jsx)(
                                            o.FoH,
                                            {
                                                blockType: L.ky.SmartPreview,
                                                blockId: e.id,
                                                blockPosX: 1,
                                                blockPosY: 1,
                                                children: (0, N.jsx)(o.Bki, {
                                                    objectType: L.ky.SmartPreview,
                                                    objectId: e.id,
                                                    objectPosX: 1,
                                                    objectPosY: a + 1,
                                                    objectsCount: r.length,
                                                    children: (0, N.jsx)(el, { variant: t, track: e, playContextParams: f(a), viewUuid: y.current }),
                                                }),
                                            },
                                            e.id,
                                        ),
                                    ),
                        [f, n, C, r, t],
                    );
                return l
                    ? m
                        ? (0, N.jsx)(G, {})
                        : (0, N.jsx)(F, {})
                    : (0, N.jsxs)('div', {
                          className: es().root,
                          children: [
                              (0, N.jsx)(ea, { isShimmerVisible: C, isShimmerActive: n, variant: t, className: es().header }),
                              E,
                              (0, N.jsx)(q, { isShimmerVisible: C, isShimmerActive: n, variant: t, className: es().footer }),
                          ],
                      });
            });
            var ed = a(82856),
                ec = a.n(ed);
            let eu = (0, A.PA)(() => {
                let {
                        settings: { isMobile: e },
                        trailer: t,
                        sonataState: a,
                        fullscreenPlayer: i,
                    } = (0, o.Pjs)(),
                    n = (0, o.eGp)(),
                    { contentRef: l } = (0, o.gKY)(),
                    { formatMessage: r } = (0, y.A)(),
                    d = j();
                (() => {
                    let { trailer: e } = (0, o.Pjs)(),
                        t = (0, o.eGp)(),
                        a = (0, o.zwV)(),
                        i = (0, u.KX)(e.state.entityMeta),
                        n = (0, u.mW)(e.state.entityMeta);
                    (0, S.useEffect)(() => {
                        e.modal.isOpened
                            ? (null == a || a.disable(o.Mo.MAIN),
                              null == a || a.enable(o.Mo.MAIN, o.lbr.TOGGLE_MUTE),
                              null == a || a.enable(o.Mo.MAIN, o.lbr.INCREASE_VOLUME),
                              null == a || a.enable(o.Mo.MAIN, o.lbr.DECREASE_VOLUME),
                              null == a || a.enable(o.Mo.MAIN, o.lbr.TOGGLE_FULLSCREEN_PLAYER),
                              null == a || a.enable(o.Mo.TRAILER))
                            : (null == a || a.disable(o.Mo.TRAILER), null == a || a.enable(o.Mo.MAIN));
                    }, [a, e.modal.isOpened]),
                        (0, S.useEffect)(
                            () => (
                                null == a ||
                                    a.addShortcutsListener(o.Mo.TRAILER, o.lbr.TOGGLE_PLAY, () => {
                                        null == t || t.togglePause(o.V_r.TRAILER);
                                    }),
                                null == a || a.addShortcutsListener(o.Mo.TRAILER, o.lbr.LIKE, i),
                                null == a || a.addShortcutsListener(o.Mo.TRAILER, o.lbr.DISLIKE, n),
                                null == a ||
                                    a.addShortcutsListener(o.Mo.TRAILER, o.lbr.MOVE_FORWARD, async () => {
                                        var e;
                                        (null == t || null == (e = t.getState(o.V_r.TRAILER).currentContext.value) ? void 0 : e.availableActions.moveForward.value) &&
                                            (await (null == t ? void 0 : t.moveForward(o.V_r.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(o.Mo.TRAILER, o.lbr.MOVE_BACKWARD, async () => {
                                        var e;
                                        (null == t || null == (e = t.getState(o.V_r.TRAILER).currentContext.value) ? void 0 : e.availableActions.moveBackward.value) &&
                                            (await (null == t ? void 0 : t.moveBackward(o.V_r.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(o.Mo.TRAILER, o.lbr.SLIDE_FORWARD, async () => {
                                        (null == t ? void 0 : t.getState(o.V_r.TRAILER).playerState.progress.value.duration) &&
                                            (await (null == t ? void 0 : t.slideForward(1, o.V_r.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(o.Mo.TRAILER, o.lbr.SLIDE_BACKWARD, async () => {
                                        (null == t ? void 0 : t.getState(o.V_r.TRAILER).playerState.progress.value.duration) &&
                                            (await (null == t ? void 0 : t.slideBackward(1, o.V_r.TRAILER)));
                                    }),
                                () => {
                                    null == a || a.removeShortcutsListener(o.Mo.TRAILER, o.lbr.TOGGLE_PLAY),
                                        null == a || a.removeShortcutsListener(o.Mo.TRAILER, o.lbr.LIKE),
                                        null == a || a.removeShortcutsListener(o.Mo.TRAILER, o.lbr.DISLIKE),
                                        null == a || a.removeShortcutsListener(o.Mo.TRAILER, o.lbr.MOVE_FORWARD),
                                        null == a || a.removeShortcutsListener(o.Mo.TRAILER, o.lbr.MOVE_BACKWARD),
                                        null == a || a.removeShortcutsListener(o.Mo.TRAILER, o.lbr.SLIDE_FORWARD),
                                        null == a || a.removeShortcutsListener(o.Mo.TRAILER, o.lbr.SLIDE_BACKWARD);
                                }
                            ),
                            [n, i, a, t],
                        );
                })(),
                    (0, S.useEffect)(() => {
                        let e =
                                null == n
                                    ? void 0
                                    : n.getState(o.V_r.TRAILER).queueState.currentEntity.onChange((e) => {
                                          var a;
                                          let i = null == e ? void 0 : e.context.data.type,
                                              n = null == e ? void 0 : e.context.data.meta.id;
                                          t.state.setEntityMeta(null != (a = null == e ? void 0 : e.entity) ? a : null),
                                              i && t.state.setContextType(i),
                                              n && t.state.setContextId(n);
                                      }),
                            a =
                                null == n
                                    ? void 0
                                    : n.getState(o.V_r.TRAILER).playerState.status.onChange((e) => {
                                          e && t.state.setStatus(e);
                                      });
                        return () => {
                            null == e || e(), null == a || a();
                        };
                    }, [n, t.state]);
                let c = (0, S.useCallback)(() => {
                        null == n ||
                            n.stop(o.V_r.TRAILER).finally(() => {
                                t.sonataStatusBeforeTrailerStart !== s.MT.PLAYING || t.isManuallyPaused || null == n || n.resume(),
                                    t.setAnimationState(!0),
                                    t.resetUtmLink(),
                                    t.modal.close(),
                                    d(t.objectId);
                            });
                    }, [d, n, t]),
                    m = (0, S.useCallback)(
                        (e) => {
                            t.modal.onOpenChange(e), e || c();
                        },
                        [c, t.modal],
                    );
                return (
                    (0, S.useEffect)(() => {
                        t.modal.isOpened && t.isResolved && a.status === s.MT.PLAYING && c();
                    }, [c, a.status, t, t.modal.isOpened]),
                    (0, S.useEffect)(() => {
                        t.modal.isOpened && t.isResolved && t.setAnimationState(!1);
                    }, [t]),
                    (0, S.useEffect)(() => {
                        i.modal.isOpened && t.modal.isOpened && c();
                    }, [i.modal.isOpened, c, t.modal.isOpened]),
                    (0, N.jsxs)(E.a, {
                        size: 'fitContent',
                        placement: e ? 'default' : 'right',
                        open: t.modal.isOpened,
                        onOpenChange: m,
                        onClose: c,
                        className: ec().root,
                        contentClassName: ec().modalContent,
                        portalNode: e ? null : l,
                        showHeader: !1,
                        withOverlay: e,
                        closeOnOutsidePress: e,
                        containerProps: (0, C.Am)(C.e8.trailer.TRAILER_MODAL),
                        withAnimation: t.withAnimation,
                        isMobile: e,
                        lockScroll: e,
                        overlayColor: 'full',
                        enableSwipe: !0,
                        children: [
                            !e &&
                                (0, N.jsx)('div', {
                                    className: ec().header,
                                    children: (0, N.jsx)(T.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, N.jsx)(f.Icon, { variant: 'close', size: 'xxs' }),
                                        onClick: c,
                                        'aria-label': r({ id: 'trailer.close' }),
                                        ...(0, C.Am)(C.e8.trailer.TRAILER_CLOSE_BUTTON),
                                    }),
                                }),
                            t.variant && (0, N.jsx)(eo, { variant: t.variant }),
                        ],
                    })
                );
            });
        },
        16754: (e) => {
            e.exports = {
                root: 'TrailerHeader_root__n8XkZ',
                coverContainer: 'TrailerHeader_coverContainer__4R_jG',
                cover: 'TrailerHeader_cover__G6BRb',
                iconContainer: 'TrailerHeader_iconContainer__QXR64',
                icon: 'TrailerHeader_icon__5T0JT',
                textContainer: 'TrailerHeader_textContainer__LR03v',
                text: 'TrailerHeader_text__BWMLw',
                link: 'TrailerHeader_link__kObd5',
                title: 'TrailerHeader_title__GuIe0',
                playButton: 'TrailerHeader_playButton__MGmhZ',
                playButtonIcon: 'TrailerHeader_playButtonIcon__JFbl_',
                shimmerContainer: 'TrailerHeader_shimmerContainer__cOsas',
                titleShimmer: 'TrailerHeader_titleShimmer__KKn7b',
                descriptionShimmer: 'TrailerHeader_descriptionShimmer__WOlY5',
                share: 'TrailerHeader_share__5lxh7',
            };
        },
        17866: (e, t, a) => {
            'use strict';
            a.d(t, { Bx: () => A, t5: () => c, S3: () => s });
            var i = a(60754),
                n = a(28315),
                l = a(78651);
            let r = (e) => {
                    let { bgUrl: t, bgColor: a, title: n, text: r, titleColor: s, textColor: o, imageUrl: d, buttons: c } = e;
                    return (0, i.wg)({
                        bgUrl: t || null,
                        bgColor: a || null,
                        title: n || null,
                        text: r || null,
                        titleColor: s || null,
                        textColor: o || null,
                        imageUrl: d || null,
                        buttons: c.filter((e) => e.text).map(l.cZ),
                    });
                },
                s = (e) => {
                    let t = 'data' in e ? r(e.data) : r(e.div),
                        a = 'feedbackToken' in e ? e.feedbackToken : null,
                        l = 'anchorId' in e ? e.anchorId : n.v.ON_START_BAR_BELOW;
                    return (0, i.wg)({ anchorId: l, screenId: e.screenId, content: t, feedbackToken: a });
                },
                o = i.gK.model('BarBelowContent', {
                    bgUrl: i.gK.maybeNull(i.gK.string),
                    bgColor: i.gK.maybeNull(i.gK.string),
                    imageUrl: i.gK.maybeNull(i.gK.string),
                    title: i.gK.maybeNull(i.gK.string),
                    titleColor: i.gK.maybeNull(i.gK.string),
                    text: i.gK.maybeNull(i.gK.string),
                    textColor: i.gK.maybeNull(i.gK.string),
                    buttons: i.gK.array(l.__),
                }),
                d = i.gK.model('BarBelow', {
                    anchorId: i.gK.enumeration(Object.values(n.v)),
                    screenId: i.gK.string,
                    content: o,
                    feedbackToken: i.gK.maybeNull(i.gK.string),
                }),
                c = i.gK
                    .model('BarBelowMain', {
                        anchorId: i.gK.maybe(i.gK.string),
                        isVisible: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenShown: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenHidden: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenStarted: i.gK.maybe(i.gK.boolean),
                        list: i.gK.array(d),
                    })
                    .views((e) => ({
                        get barBelowItem() {
                            return e.list.find((t) => t.anchorId === e.anchorId);
                        },
                        get showWithAnimation() {
                            return !e.hasAnimationAlreadyBeenShown && e.isVisible;
                        },
                        get hideWithAnimation() {
                            return e.hasAnimationAlreadyBeenShown && !e.hasAnimationAlreadyBeenHidden && !e.isVisible;
                        },
                    }))
                    .actions((e) => ({
                        setAnchorId(t) {
                            e.anchorId = t;
                        },
                        show() {
                            e.isVisible = !0;
                        },
                        hide() {
                            e.isVisible = !1;
                        },
                        setAnimationAlreadyBeenShown() {
                            e.hasAnimationAlreadyBeenShown = !0;
                        },
                        setAnimationAlreadyBeenHidden() {
                            e.hasAnimationAlreadyBeenHidden = !0;
                        },
                        setAnimationAlreadyBeenStarted() {
                            e.hasAnimationAlreadyBeenStarted = !0;
                        },
                    }));
            var u = a(32290),
                m = a(63618),
                p = a(96103),
                _ = a(55178),
                g = a(60900),
                v = a(59824),
                b = a(50162),
                h = a(71926),
                I = a(49574),
                x = a(83278),
                N = a.n(x);
            let A = (0, p.PA)((e) => {
                var t, a, i, n;
                let { className: r, barBelow: s } = e,
                    { formatMessage: o } = (0, g.A)(),
                    d = (0, _.useMemo)(() => {
                        let e = { title: {}, text: {}, bg: {} };
                        if (!s.barBelowItem) return e;
                        let { titleColor: t, textColor: a, bgColor: i, bgUrl: n } = s.barBelowItem.content;
                        return (
                            t && (e.title.color = t),
                            a && (e.text.color = a),
                            i && (e.bg.backgroundColor = i),
                            n && (e.bg.backgroundImage = 'url("'.concat(s.barBelowItem.content.bgUrl, '")')),
                            e
                        );
                    }, [s]),
                    c = (0, _.useMemo)(() => {
                        var e;
                        return null == (e = s.barBelowItem)
                            ? void 0
                            : e.content.buttons.map((e) => {
                                  var t, a;
                                  return (0, u.jsx)(
                                      l.tL,
                                      {
                                          anchorId: null == (t = s.barBelowItem) ? void 0 : t.anchorId,
                                          screenId: null == (a = s.barBelowItem) ? void 0 : a.screenId,
                                          button: e,
                                          buttonSize: 'l',
                                          hide: s.hide,
                                          feedbackToken: s.barBelowItem ? s.barBelowItem.feedbackToken : null,
                                      },
                                      e.text,
                                  );
                              });
                    }, [s]),
                    p = (0, _.useCallback)(
                        (e) => {
                            e.animationName.includes('show') ? s.setAnimationAlreadyBeenShown() : e.animationName.includes('hide') && s.setAnimationAlreadyBeenHidden();
                        },
                        [s],
                    ),
                    x = (0, _.useCallback)(
                        (e) => {
                            e.animationName.includes('show') && s.setAnimationAlreadyBeenStarted();
                        },
                        [s],
                    );
                return (0, u.jsx)(I.rtM, {
                    page: I.l7W.MUSIC_DEEPLINK_SCREEN,
                    places: [I.RBW.TOP_BUTTON],
                    children: (0, u.jsxs)('section', {
                        className: (0, m.$)(
                            N().root,
                            { [N().root_hidden]: !s.isVisible && !s.hideWithAnimation, [N().root_show]: s.showWithAnimation, [N().root_hide]: s.hideWithAnimation },
                            r,
                        ),
                        style: d.bg,
                        onAnimationStart: x,
                        onAnimationEnd: p,
                        'aria-label': o({ id: 'bar-below.section-name' }),
                        ...(0, v.Am)(v.Kq.barBelow.BAR_BELOW),
                        children: [
                            (null == (t = s.barBelowItem) ? void 0 : t.content.imageUrl) &&
                                (0, u.jsx)(b.Image, {
                                    className: N().image,
                                    'aria-hidden': !0,
                                    src: null == (a = s.barBelowItem) ? void 0 : a.content.imageUrl,
                                    fit: 'contain',
                                    withAvatarReplace: !0,
                                    withAspectRatio: !0,
                                    ...(0, v.Am)(v.Kq.barBelow.BAR_BELOW_IMAGE),
                                }),
                            (0, u.jsxs)('div', {
                                className: N().content,
                                children: [
                                    (null == (i = s.barBelowItem) ? void 0 : i.content.title) &&
                                        (0, u.jsx)(h.Heading, {
                                            className: N().title,
                                            variant: 'h3',
                                            style: d.title,
                                            lineClamp: 2,
                                            ...(0, v.Am)(v.Kq.barBelow.BAR_BELOW_TITLE_TEXT),
                                            children: s.barBelowItem.content.title,
                                        }),
                                    (null == (n = s.barBelowItem) ? void 0 : n.content.text) &&
                                        (0, u.jsx)(h.Heading, {
                                            className: N().text,
                                            variant: 'h4',
                                            size: 'xs',
                                            style: d.text,
                                            lineClamp: 2,
                                            ...(0, v.Am)(v.Kq.barBelow.BAR_BELOW_SECONDARY_TEXT),
                                            children: s.barBelowItem.content.text,
                                        }),
                                ],
                            }),
                            (0, u.jsx)('div', { className: N().buttons, children: c }),
                        ],
                    }),
                });
            });
        },
        18106: (e) => {
            e.exports = { root: 'ShareIframeModal_root__t_NbK', content: 'ShareIframeModal_content__jcq_o' };
        },
        19349: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedPlusBar_root___wH9W',
                button: 'NavbarDesktopAnimatedPlusBar_button__IX7L4',
                important: 'NavbarDesktopAnimatedPlusBar_important__7R916',
                icon: 'NavbarDesktopAnimatedPlusBar_icon__9lTgJ',
            };
        },
        19681: (e) => {
            e.exports = {
                root: 'ShareIframeEditor_root__LALvp',
                controls: 'ShareIframeEditor_controls__k8vT_',
                iframeCodeInputContainer: 'ShareIframeEditor_iframeCodeInputContainer__b4Klq',
                settings: 'ShareIframeEditor_settings__UWt51',
                copyButton: 'ShareIframeEditor_copyButton___jOz_',
                sizeInputContainer: 'ShareIframeEditor_sizeInputContainer__s6PMW',
                iframeCodeInput: 'ShareIframeEditor_iframeCodeInput__M9w6E',
                iframeContainer: 'ShareIframeEditor_iframeContainer__pgdr5',
                iframe: 'ShareIframeEditor_iframe__ky5_o',
            };
        },
        23791: (e) => {
            e.exports = {
                root: 'FamilyInviteInviter_root__2XR_p',
                icon: 'FamilyInviteInviter_icon__e5pZe',
                important: 'FamilyInviteInviter_important__wl_l1',
                iconShimmer: 'FamilyInviteInviter_iconShimmer__Dbxw_',
                root_mobile: 'FamilyInviteInviter_root_mobile__LRDAo',
                name: 'FamilyInviteInviter_name__0E0QC',
                nameShimmer: 'FamilyInviteInviter_nameShimmer__Zzoa1',
            };
        },
        25433: (e) => {
            e.exports = {
                root: 'BuySubscriptionButton_root__BdquR',
                root_hidden: 'BuySubscriptionButton_root_hidden__oMe3p',
                info: 'BuySubscriptionButton_info__qBinu',
                subtitle: 'BuySubscriptionButton_subtitle__Ni4VS',
                title: 'BuySubscriptionButton_title__RG_OU',
                buttonText: 'BuySubscriptionButton_buttonText__cmJMC',
                titleContainer: 'BuySubscriptionButton_titleContainer__h7Lmt',
                titleShimmer: 'BuySubscriptionButton_titleShimmer___hnah',
                titleShimmerContainer: 'BuySubscriptionButton_titleShimmerContainer__Wv82r',
                icon: 'BuySubscriptionButton_icon__0oNi_',
            };
        },
        26143: (e) => {
            e.exports = {
                root: 'TrackModalTitleShimmer_root__woixY',
                entityName: 'TrackModalTitleShimmer_entityName__9NMYB',
                title: 'TrackModalTitleShimmer_title__PXJfS',
                artists: 'TrackModalTitleShimmer_artists__mz6q9',
                important: 'TrackModalTitleShimmer_important__uBJ8_',
                artist: 'TrackModalTitleShimmer_artist__fre6F',
                controls: 'TrackModalTitleShimmer_controls__0kNh8',
                playButton: 'TrackModalTitleShimmer_playButton__PYklv',
                button: 'TrackModalTitleShimmer_button__j5_GI',
            };
        },
        27923: (e) => {
            e.exports = { image: 'FamilyInviteStepSuccess_image__kDBnc', image_mobile: 'FamilyInviteStepSuccess_image_mobile__PyiXK' };
        },
        27940: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                artistCaption: 'ClipMeta_artistCaption__8RrCD',
                link: 'ClipMeta_link__6QadT',
                root: 'ClipMeta_root__pqZ6s',
                root_withSecondaryColor: 'ClipMeta_root_withSecondaryColor__va_JM',
                explicitMark: 'ClipMeta_explicitMark__TmCzw',
                metaContainer: 'ClipMeta_metaContainer__023Bj',
                titleContainer: 'ClipMeta_titleContainer__dtIm1',
                title: 'ClipMeta_title__L6Nwk',
            };
        },
        28230: (e) => {
            e.exports = {
                root: 'TrackModalLyrics_root__JABJp',
                title: 'TrackModalLyrics_title__zjWl_',
                button: 'TrackModalLyrics_button__YqxIm',
                lyrics: 'TrackModalLyrics_lyrics__naoEF',
            };
        },
        28315: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { v: () => i }),
                (function (e) {
                    (e.ON_START_BAR_BELOW = 'music-web-on-start-bar-bellow'), (e.ON_START_FULLSCREEN = 'music-web-on-start-fullscreen');
                })(i || (i = {}));
        },
        34287: (e) => {
            e.exports = { root: 'BuySubscriptionModal_root__5LvlX', content: 'BuySubscriptionModal_content__v06Ju', header: 'BuySubscriptionModal_header__ho5hr' };
        },
        35433: (e) => {
            e.exports = {
                root: 'TrackModal_root__QrFg6',
                header: 'TrackModal_header__hjfRd',
                closeButton: 'TrackModal_closeButton__VLm_R',
                modalContent: 'TrackModal_modalContent__AzQPF',
                content: 'TrackModal_content__9qH7W',
                container: 'TrackModal_container__JaG86',
            };
        },
        38306: (e) => {
            e.exports = {
                root: 'Trailer_root__c8eG3',
                header: 'Trailer_header__FBFMi',
                trackShimmer: 'Trailer_trackShimmer__qmCN3',
                albumShimmer: 'Trailer_albumShimmer__8RxuC',
                footer: 'Trailer_footer__POMTS',
            };
        },
        42543: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => h, y: () => n });
            var i = a(49574);
            let n = () => {
                let { isFreemium: e } = (0, i.XCI)(),
                    {
                        user: t,
                        advertBanners: {
                            banners: { sideAdvertBanner: a },
                        },
                    } = (0, i.Pjs)();
                return !!a.isVisible && (!t.isAuthorized || e);
            };
            var l = a(32290),
                r = a(63618),
                s = a(96103),
                o = a(55178),
                d = a(60900),
                c = a(39407),
                u = a(63423),
                m = a(71926),
                p = a(44574);
            let _ = { p1: 'bwvvu', p2: 'foom', puid1: '', puid2: '' };
            var g = a(92854),
                v = a.n(g);
            let b = (0, s.PA)((e) => {
                    let { className: t, forwardRef: a, isWavePage: n } = e,
                        {
                            advertBanners: {
                                banners: { sideAdvertBanner: s },
                            },
                            experiments: o,
                            paywall: { modal: g },
                        } = (0, i.Pjs)(),
                        { formatMessage: b } = (0, d.A)(),
                        h = s.type !== i.h8o.EMPTY && o.checkExperiment(i.zal.WebNextCloseAdsSideBanner, 'on');
                    return (0, l.jsxs)('section', {
                        className: (0, r.$)(v().root, t, { [v().root_vibePage]: n, [v().root_hidden]: !s.isVisible }),
                        'aria-label': b({ id: 'advert.banner' }),
                        role: 'banner',
                        ref: a,
                        children: [
                            (0, l.jsx)('div', {
                                className: v().contentWrapper,
                                children: (0, l.jsx)(p.NX, {
                                    className: v().content,
                                    ownerId: i.PVv,
                                    containerId: 'adfox_173831489302952769',
                                    params: _,
                                    onLoad: s.setType,
                                    onError: s.toggleHasErrorTrue,
                                    onNoAds: s.toggleNoAdsTrue,
                                }),
                            }),
                            h &&
                                (0, l.jsx)(u.$, {
                                    className: v().disableAdsButton,
                                    onClick: g.open,
                                    size: 'default',
                                    radius: 'xxxl',
                                    children: (0, l.jsx)(m.Caption, {
                                        className: v().adsCloseText,
                                        variant: 'span',
                                        size: 'm',
                                        children: (0, l.jsx)(c.A, { id: 'ads.disable-ads' }),
                                    }),
                                }),
                        ],
                    });
                }),
                h = (0, o.forwardRef)((e, t) => (0, l.jsx)(b, { forwardRef: t, ...e }));
        },
        43224: (e, t, a) => {
            'use strict';
            a.d(t, { mt: () => x, bo: () => r, cF: () => l });
            var i = a(60754),
                n = a(95428),
                l = (function (e) {
                    return (e.IDLE = 'idle'), (e.SUCCESS = 'success'), (e.ERROR = 'error'), e;
                })({});
            let r = i.gK
                .model({
                    modal: n.qt,
                    target: i.gK.string,
                    isSilent: i.gK.boolean,
                    tariffOfferName: i.gK.string,
                    offersBatchId: i.gK.string,
                    offersPositionIds: i.gK.string,
                    serviceSessionId: i.gK.string,
                    status: i.gK.enumeration(Object.values(l)),
                })
                .views((e) => ({
                    get isSuccess() {
                        return e.status === l.SUCCESS;
                    },
                    get isError() {
                        return e.status === l.ERROR;
                    },
                }))
                .actions((e) => ({
                    setTarget(t) {
                        e.target = t;
                    },
                    setIsSilent(t) {
                        e.isSilent = t;
                    },
                    setTariffOfferName(t) {
                        e.tariffOfferName = t;
                    },
                    setOffersBatchId(t) {
                        e.offersBatchId = t;
                    },
                    setOffersPositionIds(t) {
                        e.offersPositionIds = t;
                    },
                    setServiceSessionId(t) {
                        e.serviceSessionId = t;
                    },
                    setStatus(t) {
                        e.status = t;
                    },
                    reset() {
                        (e.target = ''), (e.tariffOfferName = ''), (e.offersBatchId = ''), (e.offersPositionIds = ''), (e.serviceSessionId = ''), (e.status = l.IDLE);
                    },
                    onModalOpenChange(t) {
                        e.modal.onOpenChange(t), e.status === l.SUCCESS && window.location.reload();
                    },
                }));
            var s = a(32290),
                o = a(63618),
                d = a(96103),
                c = a(55178),
                u = a(59824),
                m = a(44989),
                p = a(84638),
                _ = a(49574),
                g = a(91027);
            let v = null,
                b = (0, d.PA)((e) => {
                    let {
                            className: t,
                            target: a,
                            silent: i,
                            serviceSessionId: n,
                            tariffOfferName: l,
                            offersBatchId: r,
                            offersPositionIds: o,
                            onLoad: d,
                            onSuccess: u,
                            onError: m,
                            onClose: p,
                        } = e,
                        b = (0, c.useRef)(null),
                        { theme: h } = (0, _.DPo)(),
                        { pwTools: I } = (0, _.q4i)(),
                        x = (0, _.bBU)(),
                        N = (0, g.c)((e) => {
                            'purchase_data' === e.type && (null == u || u());
                        }),
                        A = (0, g.c)(() => {
                            null == m || m();
                        }),
                        S = (0, g.c)(() => {
                            null == p || p();
                        }),
                        y = (0, g.c)((e) => {
                            'loaded' === e.data.status && (null == d || d());
                        }),
                        C = (0, c.useCallback)(async () => {
                            if (!I || !b.current) return;
                            let { lang: e, mode: t, platform: s, widgetServiceName: d, authMethod: c } = I.options;
                            if (!v)
                                try {
                                    v = await I.loadManager();
                                } catch (e) {
                                    S();
                                    return;
                                }
                            v.send({
                                type: 'init',
                                options: {
                                    lang: e,
                                    mode: t,
                                    platform: s,
                                    widgetServiceName: d,
                                    authMethod: c,
                                    silent: i,
                                    usePlusHost: !0,
                                    theme: h,
                                    onSuccess: N,
                                    onError: A,
                                    onReport: y,
                                    onClose: S,
                                },
                            });
                            let u = {
                                    target: a,
                                    eventSessionId: n,
                                    tariffOfferName: l,
                                    offersBatchId: r,
                                    offersPositionIds: o,
                                    targetNode: b.current,
                                    isTarifficator: !0,
                                },
                                m = await x();
                            null !== m && (u.clid = m), v.send({ type: 'open', options: u });
                        }, [h, I, a, i, l, n, r, o, N, A, y, S, x]);
                    return (
                        (0, c.useEffect)(
                            () => (
                                C(),
                                () => {
                                    null == v || v.send({ type: 'close' });
                                }
                            ),
                            [C],
                        ),
                        (0, s.jsx)('div', { className: t, ref: b })
                    );
                });
            var h = a(91738),
                I = a.n(h);
            let x = (0, d.PA)(() => {
                let { paymentWidgetModal: e, advert: t } = (0, _.Pjs)(),
                    a = (0, _.NFA)().get(_.vgk),
                    { state: i, toggleTrue: n } = (0, m.e)(!1),
                    r = (0, _.vUB)();
                (0, c.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                );
                let d = (0, c.useCallback)(() => {
                        e.setStatus(l.SUCCESS), r.track({ label: 'WCvtCKnr84oYEPnRuvUo' }), a.reachGoal('PAYMENT_COMPLETED');
                    }, [e, r, a]),
                    g = (0, c.useCallback)(() => {
                        e.modal.close(), e.isSuccess && window.location.reload(), e.reset();
                    }, [e]),
                    v = (0, c.useCallback)(() => {
                        e.setStatus(l.ERROR);
                    }, [e]);
                return (0, s.jsx)(p.a, {
                    open: e.modal.isOpened,
                    size: 'fitContent',
                    placement: 'center',
                    showHeader: !1,
                    withAnimation: !1,
                    className: (0, o.$)(I().root, { [I().root_loaded]: i, [I().root_level_up]: t.isAdvertShown }),
                    ...(0, u.Am)(u.OA.paymentWidget.PAYMENT_WIDGET),
                    contentClassName: I().content,
                    overlayColor: 'full',
                    onOpenChange: e.onModalOpenChange,
                    children: (0, s.jsx)(b, {
                        className: I().widget,
                        target: e.target,
                        silent: e.isSilent,
                        serviceSessionId: e.serviceSessionId,
                        tariffOfferName: e.tariffOfferName,
                        offersBatchId: e.offersBatchId,
                        offersPositionIds: e.offersPositionIds,
                        onLoad: n,
                        onSuccess: d,
                        onError: v,
                        onClose: g,
                    }),
                });
            });
        },
        43334: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedDownloadBarEnlarged_root__5lnM0',
                closeButton: 'NavbarDesktopAnimatedDownloadBarEnlarged_closeButton__MSz9j',
                text: 'NavbarDesktopAnimatedDownloadBarEnlarged_text__fT36E',
                downloadButtonText: 'NavbarDesktopAnimatedDownloadBarEnlarged_downloadButtonText__3GqKa',
                textBright: 'NavbarDesktopAnimatedDownloadBarEnlarged_textBright__JA1nf',
                closeButtonIcon: 'NavbarDesktopAnimatedDownloadBarEnlarged_closeButtonIcon___xaoS',
                downloadButtonIcon: 'NavbarDesktopAnimatedDownloadBarEnlarged_downloadButtonIcon__oE_rc',
            };
        },
        44855: (e) => {
            e.exports = { image: 'FamilyInviteErrorView_image__OyVA_', image_small: 'FamilyInviteErrorView_image_small__uczsu' };
        },
        45294: (e, t, a) => {
            'use strict';
            a.d(t, { hq: () => er, qQ: () => d });
            var i = a(49574);
            async function n(e, t, a) {
                var n, l, r, s, o, d, c;
                if (!e || !t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let u = await (0, i.WGy)(a.locale),
                    m = (0, i.NsT)(null != (n = e.title) ? n : '');
                return a.isNotFound
                    ? { robots: { index: !1 } }
                    : {
                          title:
                              null != (l = a.disclaimerTitle)
                                  ? l
                                  : (function (e) {
                                        var t;
                                        let { trackMeta: a, messageFormatter: n } = e,
                                            l = (0, i.j4K)(null != (t = a.artists) ? t : []);
                                        return n({ id: 'metadata.track-title' }, { trackTitle: a.title, artistsNames: l });
                                    })({ trackMeta: e, messageFormatter: u }),
                          description: (function (e) {
                              var t, a;
                              let { trackMeta: n, albumMeta: l, messageFormatter: r } = e,
                                  s = (0, i.j4K)(null != (a = n.artists) ? a : []),
                                  o = Math.round((n.durationMs || 0) / i.k7R);
                              return r(
                                  { id: 'metadata.track-description' },
                                  {
                                      type: (null == (t = n.type) ? void 0 : t.replace('-', '_')) || null,
                                      artistsNames: s || null,
                                      trackTitle: n.title,
                                      albumTitle: (null == l ? void 0 : l.title) || null,
                                      duration: (0, i.E4p)(o),
                                      year: (null == l ? void 0 : l.year) || null,
                                  },
                              );
                          })({ trackMeta: e, albumMeta: t, messageFormatter: u }),
                          openGraph: (0, i.i$E)({
                              ogTitle: m,
                              ogDescription: (function (e) {
                                  var t, a;
                                  let { trackMeta: n, albumMeta: l, messageFormatter: r } = e,
                                      s = (0, i.YFq)((0, i.j4K)(null != (a = n.artists) ? a : []), 96, !1);
                                  return r(
                                      { id: 'metadata.track-og-description' },
                                      {
                                          type: (null == (t = n.type) ? void 0 : t.replace('-', '_')) || null,
                                          artistsNames: s || null,
                                          year: (null == l ? void 0 : l.year) || null,
                                      },
                                  );
                              })({ trackMeta: e, albumMeta: t, messageFormatter: u }),
                              fullUrl: null != (r = a.fullUrl) ? r : '',
                              locale: a.locale,
                              ogImage: null != (s = e.ogImage) ? s : '',
                              siteName: u({ id: 'metadata.yandex-music' }),
                          }),
                          twitter: (0, i.HRN)({ cardType: i.WfF.APP, title: m, url: a.url, appName: u({ id: 'metadata.yandex-music' }) }),
                          appLinks: (0, i.X5i)({
                              additional: { ...a, url: null != (o = a.url) ? o : '', fullUrl: null != (d = a.fullUrl) ? d : '', host: a.host },
                              appName: u({ id: 'metadata.yandex-music' }),
                          }),
                          other: { 'music:musician': (0, i.xdV)(null != (c = null == e ? void 0 : e.artists) ? c : [], a.host) },
                          alternates: (0, i.SEs)('/album/:albumId/track/:trackId', a.tld, { params: { albumId: t.id, trackId: e.id } }),
                      };
            }
            var l = a(60754),
                r = a(9970),
                s = a(80864),
                o = a(95428);
            let d = l.gK
                .compose(
                    l.gK.model({
                        meta: l.gK.maybeNull(s.vj),
                        similarTracks: l.gK.maybeNull(l.gK.array(s.vj)),
                        prevEntityId: l.gK.maybeNull(l.gK.union(l.gK.string, l.gK.number)),
                        trackId: l.gK.maybeNull(l.gK.union(l.gK.string, l.gK.number)),
                        albumId: l.gK.maybeNull(l.gK.number),
                        isTrackPage: l.gK.optional(l.gK.boolean, !1),
                        withAnimation: l.gK.boolean,
                        shouldSendEventOnPlusButtonShowed: l.gK.boolean,
                    }),
                    o.qt,
                    o.XT,
                )
                .views((e) => ({
                    get shouldReloadMeta() {
                        var t;
                        let a = e.trackId && e.albumId && (0, r.V)(e.trackId, e.albumId);
                        return a === (null == (t = e.meta) ? void 0 : t.entityId) || a === e.prevEntityId;
                    },
                    get isShimmerVisible() {
                        return e.isLoading || e.isRejected;
                    },
                    get seeds() {
                        var a;
                        return ['track:'.concat(null == (a = e.meta) ? void 0 : a.id)];
                    },
                }))
                .actions((e) => {
                    let t = {
                        setShouldSendEventOnPlusButtonShowed(t) {
                            e.shouldSendEventOnPlusButtonShowed = t;
                        },
                        setTrackInfo(t) {
                            var a;
                            (0, l._n)(e) &&
                                ((e.meta = (0, s.vU)(t.track)),
                                (e.similarTracks = (0, l.wg)(null == (a = t.similarTracks) ? void 0 : a.map((e) => (0, s.vU)(e)))),
                                (e.loadingState = i.GuX.RESOLVE));
                        },
                        setIsTrackPage(t) {
                            e.isTrackPage = !!t;
                        },
                        setAnimationState(t) {
                            e.withAnimation = t;
                        },
                        getData: (0, l.L3)(function* () {
                            let { tracksResource: a, modelActionsLogger: n } = (0, l._$)(e);
                            if (!e.trackId || e.loadingState === i.GuX.PENDING || e.shouldReloadMeta) return null;
                            try {
                                var r;
                                (e.loadingState = i.GuX.PENDING), (e.meta = null);
                                let n = yield a.getFullInfoTrack({ trackId: e.trackId, albumId: e.albumId });
                                if (!n) return (e.loadingState = i.GuX.REJECT), null;
                                (e.meta = (0, s.vU)(n.track)),
                                    (e.similarTracks = (0, l.wg)(n.similarTracks.map((e) => (0, s.vU)(e)))),
                                    (e.prevEntityId = n.track.id),
                                    t.setShouldSendEventOnPlusButtonShowed(!0),
                                    (null == (r = e.meta) ? void 0 : r.resolveAllDisclaimers) && (yield e.meta.resolveAllDisclaimers()),
                                    (e.loadingState = i.GuX.RESOLVE);
                            } catch (t) {
                                n.error(t), (e.loadingState = i.GuX.REJECT);
                            }
                            return null;
                        }),
                        open(t) {
                            let { trackId: a, albumId: i } = t;
                            a && i && ((e.trackId = a), (e.albumId = i), (e.isOpened = !0));
                        },
                        reset() {
                            (e.loadingState = i.GuX.IDLE), (e.shouldSendEventOnPlusButtonShowed = !0);
                        },
                    };
                    return t;
                })
                .named('TrackPage');
            var c = a(32290),
                u = a(96103),
                m = a(55178),
                p = a(84638),
                _ = a(16486),
                g = a(35433),
                v = a.n(g),
                b = a(60900),
                h = a(59824),
                I = a(91027),
                x = a(63423),
                N = a(82586),
                A = a(44574),
                S = a(71926),
                y = a(12944),
                C = a.n(y),
                T = a(79856),
                f = a(8606),
                E = a.n(f);
            let L = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, c.jsxs)('div', {
                        className: E().root,
                        children: [
                            (0, c.jsx)(T.Shimmer, { className: E().title, isActive: t }),
                            (0, c.jsxs)('div', {
                                className: E().coverBlock,
                                children: [
                                    (0, c.jsx)(T.Shimmer, { className: E().cover, isActive: t }),
                                    (0, c.jsxs)('div', {
                                        className: E().linkBlock,
                                        children: [
                                            (0, c.jsx)(T.Shimmer, { className: E().link, isActive: t }),
                                            (0, c.jsx)(T.Shimmer, { className: E().description, isActive: t }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                P = (0, u.PA)((e) => {
                    var t;
                    let { onModalClose: a } = e,
                        { formatMessage: n } = (0, b.A)(),
                        {
                            settings: { isMobile: l },
                            track: r,
                            fullscreenPlayer: s,
                        } = (0, i.Pjs)(),
                        o = (0, I.c)(() => {
                            s.modal.isOpened && s.modal.close(), l && a();
                        }),
                        d = null == (t = r.meta) ? void 0 : t.mainAlbum,
                        u = (0, m.useMemo)(() => {
                            if (!d) return;
                            let e = d.trackCount;
                            return d.isAudiobook || d.isFairyTale
                                ? n({ id: 'entity-names.number-of-chapters' }, { counter: e })
                                : d.isPodcast
                                  ? n({ id: 'entity-names.number-of-episodes' }, { counter: e })
                                  : n({ id: 'entity-names.number-of-tracks' }, { counter: e });
                        }, [d, n]);
                    return r.isShimmerVisible
                        ? (0, c.jsx)(L, { isShimmerActive: r.isLoading })
                        : d
                          ? (0, c.jsxs)('div', {
                                className: C().root,
                                ...(0, h.Am)(h.Xk.track.TRACK_PAGE_ALBUM),
                                children: [
                                    (0, c.jsx)(S.Heading, {
                                        variant: 'h2',
                                        size: 'm',
                                        lineClamp: 1,
                                        className: C().title,
                                        ...(0, h.Am)(h.Xk.track.TRACK_PAGE_ALBUM_TITLE),
                                        children: n({ id: 'track-modal.album-heading' }, { type: (0, i.yDn)(d.type) }),
                                    }),
                                    (0, c.jsx)(A.Tw, {
                                        title: null == d ? void 0 : d.title,
                                        coverUrl: null == d ? void 0 : d.coverUri,
                                        description: u,
                                        viewAllActionLink: null == d ? void 0 : d.url,
                                        onViewAllAction: o,
                                        titleLineClamp: 1,
                                        available: d.isAvailable,
                                        titleSize: 'xs',
                                        withDescription: !!u,
                                    }),
                                ],
                            })
                          : null;
                });
            var j = a(44989),
                R = a(8092),
                k = a(28230),
                M = a.n(k),
                O = a(63618),
                w = a(53985),
                B = a.n(w);
            let D = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, c.jsxs)('div', {
                        className: B().root,
                        children: [
                            (0, c.jsx)(T.Shimmer, { className: B().title, isActive: t }),
                            (0, c.jsx)(A.q$, { className: (0, O.$)(B().lyrics, B().important), count: 4, isActive: t }),
                            (0, c.jsx)(T.Shimmer, { className: B().button, isActive: t }),
                        ],
                    });
                },
                K = (0, u.PA)((e) => {
                    var t, a, n, l;
                    let { track: r } = e,
                        { formatMessage: o } = (0, b.A)(),
                        { notify: d } = (0, i.lkh)(),
                        { track: u, trackLyrics: p } = (0, i.Pjs)(),
                        { state: _, setState: g } = (0, j.e)(!1),
                        v = p.currentTrackId !== (null == (t = u.meta) ? void 0 : t.id),
                        x = u.isResolved && (null == (a = u.meta) ? void 0 : a.isLyricsAvailable);
                    (0, m.useEffect)(() => {
                        var e;
                        (null == (e = u.meta) ? void 0 : e.id) && x && v && p.getLyrics(u.meta.id);
                    }, [v, x, p, null == (n = u.meta) ? void 0 : n.id]),
                        p.shouldShowErrorNotification &&
                            (d((0, c.jsx)(A.hT, { error: o({ id: 'error-messages.error-during-action' }) }), { containerId: i.uQT.ERROR }), p.resetShouldShowError());
                    let N = (0, I.c)((e) => {
                        g(e), e && r && p.sendViews({ trackId: r.id, albumId: r.albumId });
                    });
                    return p.isShimmerVisible || !p.lyrics || u.isShimmerVisible
                        ? (0, c.jsx)(D, { isShimmerActive: p.isLoading || u.isLoading })
                        : (0, c.jsxs)('div', {
                              className: M().root,
                              ...(0, h.Am)(h.Xk.track.TRACK_PAGE_LYRICS),
                              children: [
                                  (0, c.jsx)(S.Heading, {
                                      variant: 'h2',
                                      size: 'm',
                                      lineClamp: 1,
                                      className: M().title,
                                      ...(0, h.Am)(h.e8.content.TRACK_LYRICS_TITLE),
                                      children: o({ id: 'entity-names.text' }),
                                  }),
                                  (0, c.jsx)(R.K, {
                                      moreText: o({ id: 'track-modal.read-more' }),
                                      buttonClassName: M().button,
                                      open: _,
                                      onOpenChange: N,
                                      lineClamp: 4,
                                      withFade: !0,
                                      children: (0, c.jsx)(S.Caption, {
                                          variant: 'div',
                                          className: M().lyrics,
                                          size: 'l',
                                          weight: 'medium',
                                          ...(0, h.Am)(h.e8.content.TRACK_LYRICS_TEXT),
                                          children: (0, c.jsx)(s.xe, {
                                              lyrics: p.lyrics,
                                              authors: p.writersNames,
                                              source: null == (l = p.major) ? void 0 : l.prettyName,
                                              isShimmerVisible: p.isShimmerVisible,
                                              isShimmerActive: p.isLoading,
                                          }),
                                      }),
                                  }),
                              ],
                          });
                });
            var U = a(71483),
                V = a(6488),
                F = a.n(V);
            let G = (0, u.PA)((e) => {
                let { tracks: t, contextId: a, isShimmerVisible: n, isShimmerActive: l, autoflowSeeds: r, shouldResetCarouselScroll: o } = e,
                    { formatMessage: d } = (0, b.A)(),
                    { from: u } = (0, i.fyy)({ contextId: a, contextType: U.K.Various }),
                    m = (0, I.c)((e, a) => ({
                        contextData: { type: U.K.Various, meta: { id: e.entityId }, from: u, overrideAutoflowSeeds: r },
                        queueParams: { index: a },
                        loadContextMeta: !1,
                        entitiesData: t.map(s.$b),
                    }));
                return (0, c.jsx)(A.$2, {
                    className: F().root,
                    shimmer: (0, c.jsx)(A.DS, { variant: i.Xjt.PLAYLIST, isActive: l }),
                    maxColumnsCount: A.DI.TWO,
                    itemsCountPerColumn: 4,
                    blockHeaderTitle: d({ id: 'track-modal.similar-tracks' }),
                    blockHeaderHeadingVariant: 'h2',
                    isShimmerVisible: n,
                    isShimmerActive: l,
                    carouselItemClassName: (0, O.$)(F().item, F().important),
                    blockHeaderClassName: F().title,
                    carouselClassName: F().tracksContainer,
                    shouldResetCarouselScroll: o,
                    ...(0, h.Am)(h.Xk.track.TRACK_PAGE_SIMILAR_TRACKS),
                    children: t.map((e, t) => (0, c.jsx)(s.Kt, { track: e, playContextParams: m(e, t), withDislike: !1, withTrailer: !1 }, e.id)),
                });
            });
            var z = a(30039),
                X = a(33797),
                W = a(39407),
                Y = a(93510),
                $ = a(16172),
                H = a(52068),
                q = a(70042),
                Z = a.n(q);
            let Q = (0, u.PA)((e) => {
                var t, a, n;
                let { track: l } = e,
                    { shouldShowBuySubscriptionModal: r, showBuySubscriptionModal: o } = (0, i.qBP)(),
                    { from: d, utmLink: u } = (0, i.fyy)({ contextId: l.id, contextType: U.K.Various }),
                    {
                        user: p,
                        settings: { isMobile: _ },
                        track: { shouldSendEventOnPlusButtonShowed: g, setShouldSendEventOnPlusButtonShowed: v, isOpened: b },
                        albumCPA: { isPlusCPAPlayerBarEnabled: x },
                        paywall: { modal: S },
                    } = (0, i.Pjs)(),
                    y = (0, i.brA)(),
                    C = ((e) => {
                        let t = (0, H.st)(),
                            a = (0, i.UlF)(),
                            { hash: n } = (0, H.gf)();
                        return (0, I.c)(() => {
                            if (!t) return;
                            let l = {
                                    hash: n,
                                    pageId: i.Wft[i._Q$.TRACK_SCREEN],
                                    mainObjectType: $.ky.Track,
                                    mainObjectId: e.objectId,
                                    entityId: 'buy_subscription_button',
                                    pageStyle: $.QL.Sheet,
                                    pagePlacement: $.c4.Right,
                                    from: i.Wft[i._Q$.TRACK_SCREEN],
                                    to: i.Wft[i._Q$.PAYWALL],
                                    tabId: '',
                                    tabPos: 0,
                                },
                                r = (0, $.Fx)({ params: l, logger: a, context: 'useSendEventOnTrackModalPlusButtonNavigated' });
                            r && (0, $.QS)(t.evgenInstance, r);
                        });
                    })({ objectId: l.id }),
                    T = ((e) => {
                        let t = (0, H.st)(),
                            a = (0, i.UlF)(),
                            { hash: n } = (0, H.gf)();
                        return (0, I.c)(() => {
                            if (!t) return;
                            let l = {
                                    hash: n,
                                    pageId: i.Wft[i._Q$.TRACK_SCREEN],
                                    mainObjectType: $.ky.Track,
                                    mainObjectId: e.objectId,
                                    entityId: 'buy_subscription_button',
                                    pageStyle: $.QL.Sheet,
                                    pagePlacement: $.c4.Right,
                                    tabId: '',
                                    tabPos: 0,
                                },
                                r = (0, $.Fx)({ params: l, logger: a, context: 'useSendEventOnTrackModalPlusButtonShowed' });
                            r && (0, $.Pf)(t.evgenInstance, r);
                        });
                    })({ objectId: l.id }),
                    f = (0, i.PT7)(),
                    E = !p.hasPlus && l.isTrackMusic && ((l.isAvailable && !l.hasModalAccess) || (null == (t = l.mainAlbum) ? void 0 : t.isAvailableOnlyForPlus)),
                    L = (0, i.NPu)(),
                    P = x(null == (a = l.mainAlbum) ? void 0 : a.id, null == (n = l.mainAlbum) ? void 0 : n.isNonMusic),
                    j = l.isAvailable && L && !P,
                    { iconSize: R, controlSize: k } = (0, z.q)(_),
                    [M, w] = (0, m.useState)(!1),
                    { isPlaying: B, togglePlay: D } = (0, i.Dx4)({
                        playContextParams: { contextData: { type: U.K.Various, meta: { id: l.entityId }, from: d, utmLink: u }, loadContextMeta: !0 },
                        entityId: l.entityId,
                    }),
                    K = (0, s.wf)({ track: l, callback: D }),
                    V = (0, I.c)(() => {
                        if (!f()) {
                            if (r && !P) return void o();
                            if (j) return void S.open();
                            K(), y(!B);
                        }
                    }),
                    F = (0, Y.KX)(l),
                    G = (0, I.c)((e) => {
                        e.stopPropagation();
                    });
                (0, m.useEffect)(() => {
                    g && E && b && (T(), v(!1));
                }, [T, E, g, v, b]);
                let X = (0, m.useMemo)(() => {
                        if (E) return (0, c.jsx)(A.hS, { text: (0, c.jsx)(W.A, { id: 'payment.high-quality-offer-button-title' }), analyticsNavigatedCallback: C });
                    }, [E, C]),
                    q = E ? 'secondary' : 'primary';
                return (0, c.jsxs)('div', {
                    className: Z().root,
                    children: [
                        X,
                        (0, c.jsxs)('div', {
                            className: Z().controlsContainer,
                            children: [
                                (0, c.jsx)(A.DM, {
                                    className: (0, O.$)({ [Z().disabledButtonByDisclaimer]: !l.isAvailable && l.hasModalAccess }),
                                    withRipple: l.isAvailable,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: k,
                                    color: q,
                                    iconSize: R,
                                    isPlaying: B,
                                    onClick: V,
                                    disabled: !l.isAvailable && !l.hasModalAccess,
                                    children: !_ && (0, c.jsx)(W.A, { id: 'player-actions.listen' }),
                                }),
                                (0, c.jsx)(A.cy, {
                                    isLiked: l.isLiked,
                                    onClick: F,
                                    variant: 'default',
                                    size: k,
                                    iconSize: R,
                                    withRipple: !_,
                                    disabled: !l.isAvailable || !p.isAuthorized,
                                }),
                                l.isAvailable &&
                                    (0, c.jsx)(s._Y, {
                                        track: l,
                                        open: M,
                                        onOpenChange: w,
                                        size: k,
                                        icon: (0, c.jsx)(N.Icon, { variant: 'more', size: R }),
                                        className: (0, O.$)(Z().menuButton, { [Z().menuButton_active]: M }),
                                        wrapperClassName: Z().menuWrapper,
                                        onClick: G,
                                        withTrailer: !1,
                                        ...(0, h.Am)(h.e8.pageHeader.TRACK_HEADER_CONTEXT_MENU_BUTTON),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var J = a(93372),
                ee = a.n(J),
                et = a(26143),
                ea = a.n(et);
            let ei = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, c.jsxs)('div', {
                        className: ea().root,
                        children: [
                            (0, c.jsx)(T.Shimmer, { className: ea().entityName, isActive: t }),
                            (0, c.jsx)(T.Shimmer, { className: ea().title, isActive: t }),
                            (0, c.jsx)(A.q$, {
                                className: (0, O.$)(ea().artists, ea().important),
                                shimmerClassName: ea().artist,
                                count: 3,
                                minWidth: 10,
                                maxWidth: 30,
                                isActive: t,
                            }),
                            (0, c.jsxs)('div', {
                                className: ea().controls,
                                children: [
                                    (0, c.jsx)(T.Shimmer, { className: ea().playButton, isActive: t }),
                                    (0, c.jsx)(T.Shimmer, { className: ea().button, isActive: t }),
                                    (0, c.jsx)(T.Shimmer, { className: ea().button, isActive: t }),
                                    (0, c.jsx)(T.Shimmer, { className: ea().button, isActive: t }),
                                ],
                            }),
                        ],
                    });
                },
                en = (0, u.PA)((e) => {
                    let { track: t, isShimmerVisible: a, isShimmerActive: n, isTrackPage: l } = e,
                        { formatMessage: r } = (0, b.A)(),
                        {
                            settings: { isMobile: s },
                        } = (0, i.Pjs)(),
                        o = null == t ? void 0 : t.explicitDisclaimer,
                        d = (0, m.useMemo)(() => {
                            if (o)
                                return (0, c.jsx)(A.Nq, {
                                    className: (0, O.$)(ee().explicitMark, ee().important),
                                    getDescriptionTexts: t.getDescriptionTexts,
                                    size: 'xxs',
                                    variant: o,
                                });
                        }, [o, null == t ? void 0 : t.getDescriptionTexts]);
                    return a
                        ? (0, c.jsx)(ei, { isShimmerActive: n })
                        : t
                          ? (0, c.jsx)(z.kE, {
                                entityName: r({ id: 'entity-names.track-type' }, { type: (0, i.yDn)(t.type) }),
                                entityNameIcon: d,
                                controls: (0, c.jsx)(Q, { track: t }),
                                meta: (0, c.jsx)(X.iQ, {
                                    className: (0, O.$)(ee().text, ee().important),
                                    linkClassName: ee().link,
                                    captionClassName: ee().artistCaption,
                                    artists: t.artists,
                                    variant: 'breakWord',
                                    separator: s ? '' : void 0,
                                }),
                                title: t.title,
                                version: t.version,
                                headingVariant: l ? 'h1' : 'div',
                                titleClassName: (0, O.$)(ee().title, ee().important),
                                metaClassName: (0, O.$)(ee().meta, ee().important),
                                contentClassName: (0, O.$)(ee().content, ee().important),
                                withHeadingClamp: !1,
                                entityNameClassName: ee().entityName,
                            })
                          : null;
                }),
                el = (0, u.PA)(() => {
                    var e, t, a, n, l, r, o, d;
                    let { formatMessage: u } = (0, b.A)(),
                        { notify: p } = (0, i.lkh)(),
                        {
                            user: _,
                            track: g,
                            albumCPA: { isPlusCPAPlayerBarEnabled: S },
                        } = (0, i.Pjs)(),
                        y = S(
                            null == (t = g.meta) || null == (e = t.mainAlbum) ? void 0 : e.id,
                            null == (n = g.meta) || null == (a = n.mainAlbum) ? void 0 : a.isNonMusic,
                        ),
                        C = g.similarTracks && g.similarTracks.length > 0 && (null == (l = g.meta) ? void 0 : l.isTrackMusic) && !y,
                        T = (0, I.c)(() => {
                            g.setAnimationState(!0), g.close(), g.reset();
                        }),
                        f = (0, s.wf)({ track: g.meta, disclaimerRejectHandler: T });
                    return (
                        (0, m.useEffect)(() => {
                            var e;
                            g.isOpened && (null == (e = g.meta) ? void 0 : e.isLegalRejected) && g.close();
                        }, [g, g.isOpened, null == (r = g.meta) ? void 0 : r.isLegalRejected]),
                        (0, m.useEffect)(() => {
                            f();
                        }, [f]),
                        g.isRejected && p((0, c.jsx)(A.hT, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: i.uQT.ERROR }),
                        (0, c.jsxs)('div', {
                            ...(0, h.Am)(h.Xk.track.TRACK_PAGE),
                            children: [
                                (0, c.jsxs)('header', {
                                    className: v().header,
                                    children: [
                                        (0, c.jsx)(x.$, {
                                            radius: 'round',
                                            color: 'secondary',
                                            size: 'xxs',
                                            icon: (0, c.jsx)(N.Icon, { variant: 'close', size: 'xxs' }),
                                            className: v().closeButton,
                                            onClick: T,
                                            'aria-label': u({ id: 'interface-actions.close' }),
                                            ...(0, h.Am)(h.Xk.track.TRACK_PAGE_CLOSE_BUTTON),
                                        }),
                                        (0, c.jsx)(en, { track: g.meta, isShimmerVisible: g.isShimmerVisible, isShimmerActive: g.isLoading, isTrackPage: g.isTrackPage }),
                                    ],
                                }),
                                (0, c.jsxs)('div', {
                                    className: v().content,
                                    ...(0, h.Am)(h.Xk.track.TRACK_PAGE_CONTENT),
                                    children: [
                                        (0, c.jsx)(P, { onModalClose: T }),
                                        (null == (o = g.meta) ? void 0 : o.isLyricsAvailable) && (0, c.jsx)(K, { track: g.meta }, g.meta.id),
                                        C &&
                                            g.similarTracks &&
                                            (0, c.jsx)(G, {
                                                tracks: g.similarTracks,
                                                contextId: null == (d = g.meta) ? void 0 : d.entityId,
                                                isShimmerVisible: g.isShimmerVisible,
                                                isShimmerActive: g.isLoading,
                                                autoflowSeeds: g.seeds,
                                                shouldResetCarouselScroll: g.shouldReloadMeta,
                                            }),
                                    ],
                                }),
                                g.meta && (0, c.jsx)(s.v4, { user: _, track: g.meta }),
                            ],
                        })
                    );
                }),
                er = (0, u.PA)(() => {
                    let { contentRef: e } = (0, i.gKY)(),
                        {
                            album: t,
                            track: a,
                            settings: { isMobile: l },
                        } = (0, i.Pjs)();
                    a.trackId && a.albumId && a.isOpened && a.getData(),
                        (0, m.useEffect)(
                            () => () => {
                                a.reset();
                            },
                            [a],
                        ),
                        (0, m.useEffect)(() => {
                            a.isOpened && a.setAnimationState(!1);
                        }, [a]),
                        ((e, t) => {
                            (0, m.useEffect)(() => {
                                if (!e || !t || t.isLegalRejected) return;
                                let a = (0, _.fO)(e);
                                n((0, s.zc)(t), a, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                    (0, i.jxB)(e);
                                });
                            }, [e, null == e ? void 0 : e.title, t, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.title]);
                        })(t.meta, a.meta);
                    let r = (0, m.useCallback)(
                        (e) => {
                            var t;
                            null == (t = a.onOpenChange) || t.call(a, e);
                        },
                        [a],
                    );
                    return (0, c.jsx)(p.a, {
                        size: 'fitContent',
                        placement: l ? 'default' : 'right',
                        open: a.isOpened,
                        onOpenChange: r,
                        className: v().root,
                        contentClassName: v().modalContent,
                        portalNode: l ? null : e,
                        showHeader: !1,
                        withOverlay: l,
                        closeOnOutsidePress: !1,
                        withAnimation: a.withAnimation,
                        isMobile: l,
                        lockScroll: l,
                        children: (0, c.jsx)(el, {}),
                    });
                });
            (0, u.PA)((e) => {
                let { albumId: t, trackId: a, preloadedTrack: n, preloadedSimilarTracks: l } = e,
                    { track: r } = (0, i.Pjs)(),
                    s = (0, i.J75)(n);
                return n && r.setTrackInfo({ track: n, similarTracks: l }), r.setIsTrackPage(!0), s || r.open({ trackId: a, albumId: Number(t) }), null;
            });
        },
        49630: (e) => {
            e.exports = {
                root: 'TrailerFooter_root__LKXby',
                playButtonShimmer: 'TrailerFooter_playButtonShimmer__5QwPi',
                linkButtonShimmer: 'TrailerFooter_linkButtonShimmer__ZV1s1',
            };
        },
        51516: (e, t, a) => {
            'use strict';
            a.d(t, { VT: () => $, um: () => S, ac: () => i.a, Ij: () => n.useFreemiumCollectionPaywall });
            var i = a(38769);
            a(62738);
            var n = a(12913),
                l = a(60754),
                r = a(43557),
                s = a(16486),
                o = a(86519),
                d = a(49574),
                c = a(95428);
            let u = l.gK.compose(l.gK.model('UpcomingAlbums', { items: l.gK.maybeNull(l.gK.array(s.VH)) }), c.pl, c.XT).actions((e) => ({
                    reset() {
                        (e.loadingState = d.GuX.IDLE), e.destroyItems([e.items]);
                    },
                })),
                m = l.gK
                    .compose(l.gK.model('CollectionAlbumsPage', { sort: l.gK.maybeNull(o.wY), pagesLoader: (0, c.Ij)(s.JC), upcomingAlbums: u }), c.pl)
                    .views((e) => {
                        let t = {
                            get isAlbumsLoading() {
                                return !e.pagesLoader.isSomePageResolved;
                            },
                            get isLoading() {
                                return t.isAlbumsLoading || e.upcomingAlbums.isNeededToLoad || e.upcomingAlbums.isLoading;
                            },
                            get isUpcomingAlbumsLoading() {
                                return e.upcomingAlbums.isNeededToLoad || e.upcomingAlbums.isLoading;
                            },
                            get isUpcomingAlbumsEmpty() {
                                return !t.isUpcomingAlbumsLoading && (!e.upcomingAlbums.items || 0 === e.upcomingAlbums.items.length);
                            },
                            get isAlbumsEmpty() {
                                return e.pagesLoader.isEmpty;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get items() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: n = 20, sortBy: r, sortOrder: c, metaType: u } = t,
                                { usersResource: m, modelActionsLogger: p } = (0, l._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i)) {
                                (e.sort = null), (0, o.WG)(r) && (0, o.hl)(c) && (e.sort = (0, l.wg)({ sortBy: r, sortOrder: c }));
                                try {
                                    var _, g;
                                    e.pagesLoader.setPageState(i, d.GuX.PENDING);
                                    let t = yield m.getLikedAlbums({ userId: a, page: i, pageSize: n, sortBy: r, sortOrder: c, metaType: u }),
                                        l =
                                            null !=
                                            (g =
                                                null == (_ = t.albums)
                                                    ? void 0
                                                    : _.map((e) => {
                                                          let { album: t } = e;
                                                          return (0, s.pp)(t);
                                                      }))
                                                ? g
                                                : [];
                                    e.pagesLoader.setItems(l, { page: i, pager: { page: i, perPage: n, total: t.pager.total } });
                                } catch (t) {
                                    p.error(t), e.pagesLoader.setItems(null, { responseStatus: d.FlZ.ERROR, page: i });
                                }
                            }
                        }),
                        getPresaves: (0, l.L3)(function* (t) {
                            let { userId: a } = t,
                                { usersResource: i, modelActionsLogger: n } = (0, l._$)(e);
                            if (!e.upcomingAlbums.isLoading)
                                try {
                                    var r;
                                    e.upcomingAlbums.loadingState = d.GuX.PENDING;
                                    let t = yield i.getPresaves({ userId: a, includeReleased: !1, includeUpcoming: !0 });
                                    (e.upcomingAlbums.items = (0, l.wg)(null == (r = t.upcomingAlbums) ? void 0 : r.map(s.lO))),
                                        e.upcomingAlbumsLoadingState !== d.GuX.IDLE && (e.upcomingAlbums.loadingState = d.GuX.RESOLVE);
                                } catch (t) {
                                    n.error(t), e.upcomingAlbums.isNeededToLoad || (e.upcomingAlbums.loadingState = d.GuX.REJECT);
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), e.upcomingAlbums.reset(), e.destroyItems([e.sort]);
                        },
                    }));
            var p = a(58634),
                _ = a(33797);
            let g = l.gK.compose(l.gK.model('TopArtists', { items: l.gK.array(p.GV) }), c.pl, c.XT).actions((e) => ({
                    reset() {
                        (e.loadingState = d.GuX.IDLE), e.destroyItems([e.items]);
                    },
                })),
                v = l.gK
                    .compose(l.gK.model('CollectionArtistsPage', { sort: l.gK.maybeNull(o.wY), pagesLoader: (0, c.Ij)(_.PK), topArtists: g }), c.pl)
                    .views((e) => ({
                        get isLoadingTopArtists() {
                            return e.topArtists.isNeededToLoad || e.topArtists.isLoading;
                        },
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get items() {
                            var t;
                            return null != (t = e.pagesLoader.items) ? t : [];
                        },
                    }))
                    .actions((e) => ({
                        getDataTopArtists: (0, l.L3)(function* () {
                            let { personalResource: t, modelActionsLogger: a } = (0, l._$)(e);
                            try {
                                var i, n;
                                e.topArtists.loadingState = d.GuX.PENDING;
                                let a = yield t.getTopArtists();
                                (e.topArtists.items = (0, l.wg)(null != (n = null == (i = a.artists) ? void 0 : i.map((e) => (0, p.MX)(e))) ? n : [])),
                                    (e.topArtists.loadingState = d.GuX.RESOLVE);
                            } catch (t) {
                                a.error(t), (e.topArtists.loadingState = d.GuX.REJECT);
                            }
                        }),
                        getData: (0, l.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: n = 20, sortBy: r, sortOrder: s } = t,
                                { usersResource: c, modelActionsLogger: u } = (0, l._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i)) {
                                (e.sort = null), (0, o.WG)(r) && (0, o.hl)(s) && (e.sort = (0, l.wg)({ sortBy: r, sortOrder: s }));
                                try {
                                    var m, p;
                                    e.pagesLoader.setPageState(i, d.GuX.PENDING);
                                    let t = yield c.getLikedArtists({ userId: a, page: i, pageSize: n, sortBy: r, sortOrder: s }),
                                        l = null != (p = null == (m = t.artists) ? void 0 : m.map(_.dM)) ? p : [];
                                    e.pagesLoader.setItems(l, { page: i, pager: { page: i, perPage: n, total: t.pager.total } });
                                } catch (t) {
                                    u.error(t), e.pagesLoader.setItems(null, { responseStatus: d.FlZ.ERROR, page: i });
                                }
                            }
                        }),
                        reset() {
                            e.topArtists.reset(), e.pagesLoader.reset(), (e.sort = null);
                        },
                    }));
            var b = a(11135);
            let h = l.gK
                    .compose(l.gK.model('CollectionClipsPageWillLike', { clips: l.gK.maybeNull(l.gK.array(b.kv)) }), c.XT, c.pl)
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isLoading || e.isRejected;
                        },
                        get isEmpty() {
                            var t;
                            return e.isResolved && (!e.clips || (null == (t = e.clips) ? void 0 : t.length) === 0);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, l._$)(e);
                            try {
                                e.loadingState = d.GuX.PENDING;
                                let a = yield t.getClipsWillLike({ page: 0, pageSize: 50 });
                                a.clips && (e.clips = (0, l.wg)(a.clips.map(b.i$))), e.loadingState !== d.GuX.IDLE && (e.loadingState = d.GuX.RESOLVE);
                            } catch (t) {
                                a.error(t), e.loadingState !== d.GuX.IDLE && (e.loadingState = d.GuX.REJECT);
                            }
                        }),
                        reset() {
                            (e.loadingState = d.GuX.IDLE), e.destroyItems([e.clips]);
                        },
                    })),
                I = l.gK
                    .compose(
                        l.gK.model('CollectionClipsPage', {
                            items: l.gK.array(l.gK.maybeNull(b.kv)),
                            pager: l.gK.maybeNull(c.jd),
                            alreadyRequestedPages: l.gK.map(l.gK.number),
                            pendingPages: l.gK.map(l.gK.number),
                            clipsWillLike: h,
                        }),
                        c.XT,
                        c.pl,
                    )
                    .views((e) => ({
                        get isEmpty() {
                            return e.isResolved && (!e.pager || 0 === e.pager.total);
                        },
                        get isLoaded() {
                            return e.isResolved || e.isRejected;
                        },
                    }))
                    .actions((e) => ({
                        setInitialShimmer() {
                            e.items = (0, l.wg)(Array.from({ length: 20 }, () => null));
                        },
                        getData: (0, l.L3)(function* (t) {
                            var a;
                            let { userId: i, page: n = 0, pageSize: r = 20 } = t,
                                { usersResource: s, modelActionsLogger: o } = (0, l._$)(e);
                            if (
                                !(
                                    (e.pager && e.items.length >= (null == (a = e.pager) ? void 0 : a.total)) ||
                                    (e.loadingState === d.GuX.PENDING && e.pendingPages.has(n.toString()))
                                ) &&
                                !e.alreadyRequestedPages.has(n.toString())
                            ) {
                                'number' == typeof n && e.alreadyRequestedPages.set(n.toString(), n);
                                try {
                                    (e.loadingState = d.GuX.PENDING), e.pendingPages.set(n.toString(), n);
                                    let t = yield s.getLikedClips({ userId: i, page: n, pageSize: r }),
                                        a = { page: n, perPage: r, total: t.pager.total };
                                    if (t.clips) {
                                        let i = t.clips.map(b.i$);
                                        (0, d.Iyy)({ items: e.items, mappedRawItems: i, page: n, pageSize: r }), (e.items = (0, l.wg)(e.items.slice(0, a.total)));
                                    }
                                    (e.pager = a), (e.loadingState = d.GuX.RESOLVE);
                                } catch (t) {
                                    o.error(t), (e.loadingState = d.GuX.REJECT);
                                } finally {
                                    e.pendingPages.delete(n.toString());
                                }
                            }
                        }),
                        reset() {
                            (e.loadingState = d.GuX.IDLE),
                                (e.pager = null),
                                e.alreadyRequestedPages.clear(),
                                e.pendingPages.clear(),
                                e.destroyItems([e.items]),
                                e.clipsWillLike.reset();
                        },
                    })),
                x = l.gK
                    .compose(
                        l.gK.model('CollectionNonMusicPage', {
                            items: l.gK.array(l.gK.maybeNull(s.JC)),
                            pager: l.gK.maybeNull(c.jd),
                            alreadyRequestedPages: l.gK.map(l.gK.number),
                            pendingPages: l.gK.map(l.gK.number),
                            requestsCount: l.gK.maybeNull(l.gK.number),
                        }),
                        c.XT,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || (e.loadingState === d.GuX.PENDING && 0 === e.items.length);
                        },
                        get isEmptyItems() {
                            var t;
                            return !!(!(null == (t = e.items) ? void 0 : t.length) && e.requestsCount);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: n = 20, metaType: r } = t,
                                { usersResource: o, modelActionsLogger: c } = (0, l._$)(e);
                            if (!(e.loadingState === d.GuX.PENDING && e.pendingPages.has(''.concat(i))) && !e.alreadyRequestedPages.has(''.concat(i))) {
                                'number' == typeof i && e.alreadyRequestedPages.set(''.concat(i), i);
                                try {
                                    var u, m, p;
                                    (e.loadingState = d.GuX.PENDING), e.pendingPages.set(''.concat(i), i);
                                    let t = yield o.getLikedAlbums({ userId: a, page: i, pageSize: n, metaType: r }),
                                        c = { page: i, perPage: n, total: t.pager.total };
                                    0 === e.items.length && (e.items = (0, l.wg)(Array.from({ length: c.total }, () => null)));
                                    let _ =
                                        null !=
                                        (m =
                                            null == (u = t.albums)
                                                ? void 0
                                                : u.map((e) => {
                                                      let { album: t } = e;
                                                      return (0, s.pp)(t);
                                                  }))
                                            ? m
                                            : [];
                                    (0, d.Iyy)({ items: e.items, mappedRawItems: _, page: i, pageSize: n }),
                                        (e.pager = c),
                                        (e.requestsCount = (null != (p = e.requestsCount) ? p : 0) + 1),
                                        e.loadingState !== d.GuX.IDLE && (e.loadingState = d.GuX.RESOLVE);
                                } catch (t) {
                                    c.error(t), (e.loadingState = d.GuX.REJECT);
                                } finally {
                                    e.pendingPages.delete(''.concat(i));
                                }
                            }
                        }),
                        reset() {
                            (e.loadingState = d.GuX.IDLE),
                                (e.items = (0, l.wg)([])),
                                e.pendingPages.clear(),
                                (e.pager = null),
                                e.alreadyRequestedPages.clear(),
                                (e.requestsCount = 0);
                        },
                    }));
            var N = a(50510),
                A = a(55550);
            let S = l.gK
                    .model('CollectionPlaylistsCreatedPage', { sort: l.gK.maybeNull(o.wY), pagesLoader: (0, c.Ij)(A.Zq), kinds: l.gK.array(l.gK.number) })
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get items() {
                            var t;
                            return null != (t = e.pagesLoader.items) ? t : [];
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getKinds: (0, l.L3)(function* (t) {
                                let a = [],
                                    { usersResource: i } = (0, l._$)(e);
                                (a = yield i.getPlaylistsKinds({ userId: t, addPlaylistWithLikes: !0 })), (e.kinds = (0, l.wg)(a));
                            }),
                            getData: (0, l.L3)(function* (a) {
                                let { userId: i, page: n = 0, pageSize: r = 20, withLikesCount: s } = a,
                                    { usersResource: o, modelActionsLogger: c } = (0, l._$)(e);
                                if (e.pagesLoader.isPageNeedToLoad(n))
                                    try {
                                        e.pagesLoader.setPageState(n, d.GuX.PENDING), 0 === e.kinds.length && (yield t.getKinds(i));
                                        let a = n * r,
                                            l = e.kinds.slice(a, a + r),
                                            c = (yield o.getPlaylistsByKinds({ userId: i, kinds: l, withLikesCount: s, withTracks: !0 })).map(N.pd);
                                        e.pagesLoader.setItems(c, { page: n, pager: { page: n, perPage: r, total: e.kinds.length } });
                                    } catch (t) {
                                        c.error(t), e.pagesLoader.setItems(null, { responseStatus: d.FlZ.ERROR, page: n });
                                    }
                            }),
                            reset() {
                                (e.sort = null), e.pagesLoader.reset(), (e.kinds = (0, l.wg)([]));
                            },
                        };
                        return t;
                    }),
                y = l.gK
                    .model('CollectionPlaylistsLikedPage', { sort: l.gK.maybeNull(o.wY), pagesLoader: (0, c.Ij)(A.$o) })
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get items() {
                            var t;
                            return null != (t = e.pagesLoader.items) ? t : [];
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: n = 20, sortBy: r, sortOrder: s, playlistMetaType: c, withTracks: u } = t;
                            if (!e.pagesLoader.isPageNeedToLoad(i)) return;
                            let { usersResource: m, modelActionsLogger: p } = (0, l._$)(e);
                            (e.sort = null), (0, o.WG)(r) && (0, o.hl)(s) && (e.sort = (0, l.wg)({ sortBy: r, sortOrder: s }));
                            try {
                                e.pagesLoader.setPageState(i, d.GuX.PENDING);
                                let { likedPlaylists: t, pager: l } = yield m.getLikedPlaylists({
                                        userId: a,
                                        page: i,
                                        pageSize: n,
                                        sortBy: r,
                                        sortOrder: s,
                                        playlistMetaType: c,
                                        withTracks: u,
                                    }),
                                    o = t.map((e) => {
                                        let { playlist: t } = e;
                                        return (0, A.jX)(t);
                                    });
                                e.pagesLoader.setItems(o, { page: i, pager: l });
                            } catch (t) {
                                p.error(t), e.pagesLoader.setItems(null, { responseStatus: d.FlZ.ERROR, page: i });
                            }
                        }),
                        reset() {
                            (e.sort = null), e.pagesLoader.reset();
                        },
                    })),
                C = l.gK
                    .model('CollectionPlaylists', {
                        playlistsLiked: y,
                        playlistsCreated: S,
                        activeTabIndex: l.gK.number,
                        tabs: l.gK.array(l.gK.number),
                        tabIndexElement: l.gK.maybe(l.gK.string),
                    })
                    .views((e) => ({
                        get isLikedTabActive() {
                            return e.activeTabIndex === i.a.LIKED;
                        },
                        get isCreatedTabActive() {
                            return e.activeTabIndex === i.a.CREATED;
                        },
                        get activePlaylistsModel() {
                            switch (e.activeTabIndex) {
                                case i.a.CREATED:
                                    return e.playlistsCreated;
                                case i.a.LIKED:
                                    return e.playlistsLiked;
                                default:
                                    return e.playlistsCreated;
                            }
                        },
                        get isEmptyLikedTab() {
                            return 0 === e.playlistsLiked.items.length;
                        },
                    }))
                    .actions((e) => ({
                        setActiveTabIndex(t) {
                            e.activeTabIndex = t;
                        },
                        setTabIndexElement(t) {
                            e.tabIndexElement = t;
                        },
                        reset() {
                            e.playlistsLiked.reset(), e.playlistsCreated.reset(), (e.activeTabIndex = i.a.CREATED);
                        },
                    }));
            var T = a(80864);
            let f = (e) => (0, l.wg)({ type: e.type, track: (0, T.vU)(e.track), album: e.album && (0, s.pp)(e.album) }),
                E = (e) => (0, l.wg)({ type: e.type, album: e.album && (0, s.pp)(e.album), playlist: e.playlist && (0, N.ZC)(e.playlist), track: (0, T.vU)(e.track) }),
                L = l.gK.model('ShelfLikedItem', { type: l.gK.string, track: T.vj, album: l.gK.maybe(s.JC) });
            l.gK.model('ShelfNewEpisodesItem', { type: l.gK.string, playlist: l.gK.maybe(N.BL), track: T.vj });
            let P = l.gK.model('ShelfRecentlyPlayedItem', { type: l.gK.string, album: l.gK.maybe(s.JC), playlist: l.gK.maybe(N.IP), track: T.vj }),
                j = l.gK
                    .compose(
                        l.gK.model('CollectionShelfLiked', {
                            title: l.gK.maybeNull(l.gK.string),
                            typeForFrom: l.gK.maybeNull(l.gK.string),
                            entities: l.gK.maybeNull(l.gK.array(L)),
                            pager: l.gK.maybeNull(c.jd),
                        }),
                        c.XT,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === d.GuX.PENDING;
                        },
                        get isEmpty() {
                            var t;
                            return e.isResolved && (null == (t = e.entities) ? void 0 : t.length) === 0;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, l._$)(e);
                            if (e.loadingState !== d.GuX.PENDING)
                                try {
                                    var i, n;
                                    e.loadingState = d.GuX.PENDING;
                                    let a = yield t.getShelfLiked();
                                    (e.title = a.title),
                                        (e.typeForFrom = null != (i = a.typeForFrom) ? i : null),
                                        (e.pager = null != (n = a.pager) ? n : null),
                                        (e.entities = (0, l.wg)(a.entities ? a.entities.map(f) : [])),
                                        (e.loadingState = d.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.loadingState = d.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.entities = null), (e.title = null), (e.typeForFrom = null), (e.pager = null), (e.loadingState = d.GuX.IDLE);
                        },
                    })),
                R = l.gK
                    .compose(
                        l.gK.model('CollectionShelfNewEpisodes', {
                            title: l.gK.maybeNull(l.gK.string),
                            typeForFrom: l.gK.maybeNull(l.gK.string),
                            playlist: l.gK.maybeNull(N.BL),
                            tracks: l.gK.maybeNull(l.gK.array(T.vj)),
                        }),
                        c.XT,
                    )
                    .views((e) => ({
                        get withPlaylist() {
                            return !!(e.playlist && e.playlist.kind && e.playlist.isAvailable && e.playlist.uuid);
                        },
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === d.GuX.PENDING;
                        },
                        get isEmpty() {
                            return e.isResolved && (!e.tracks || 0 === e.tracks.length);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, l._$)(e);
                            if (e.loadingState !== d.GuX.PENDING)
                                try {
                                    var i;
                                    e.loadingState = d.GuX.PENDING;
                                    let a = yield t.getNewEpisodes();
                                    e.title = a.title;
                                    let n = a.blocks[0];
                                    (null == n ? void 0 : n.typeForFrom) && (e.typeForFrom = n.typeForFrom),
                                        (null == n || null == (i = n.entities[0]) ? void 0 : i.playlist) && (e.playlist = (0, N.ZC)(n.entities[0].playlist)),
                                        (null == n ? void 0 : n.entities) && (e.tracks = (0, l.wg)(n.entities.filter((e) => e.track).map((e) => (0, T.vU)(e.track)))),
                                        (e.loadingState = d.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.loadingState = d.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.title = null), (e.playlist = null), (e.typeForFrom = null), (e.tracks = null), (e.loadingState = d.GuX.IDLE);
                        },
                    })),
                k = l.gK
                    .compose(
                        l.gK.model('CollectionShelfRecentlyPlayed', {
                            title: l.gK.maybeNull(l.gK.string),
                            typeForFrom: l.gK.maybeNull(l.gK.string),
                            entities: l.gK.maybeNull(l.gK.array(P)),
                            pager: l.gK.maybeNull(c.jd),
                        }),
                        c.XT,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === d.GuX.PENDING;
                        },
                        get isEmpty() {
                            return !!(e.isResolved && e.entities && 0 === e.entities.length);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, l._$)(e);
                            if (e.loadingState !== d.GuX.PENDING)
                                try {
                                    var i, n;
                                    e.loadingState = d.GuX.PENDING;
                                    let a = yield t.getShelfRecentlyPlayed();
                                    (e.title = a.title),
                                        (e.typeForFrom = null != (i = a.typeForFrom) ? i : null),
                                        (e.pager = null != (n = a.pager) ? n : null),
                                        (e.entities = (0, l.wg)(a.entities.map(E))),
                                        (e.loadingState = d.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.loadingState = d.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.entities = null), (e.title = null), (e.typeForFrom = null), (e.pager = null), (e.loadingState = d.GuX.IDLE);
                        },
                    })),
                M = l.gK
                    .model('CollectionShelfPage', { recentlyPlayed: k, newEpisodes: R, liked: j })
                    .views((e) => ({
                        get isLoading() {
                            return e.recentlyPlayed.isLoading && e.liked.isLoading;
                        },
                        get isRejected() {
                            return e.recentlyPlayed.isRejected && e.liked.isRejected;
                        },
                        get isResolved() {
                            return e.recentlyPlayed.isResolved && e.liked.isResolved;
                        },
                        get isIdle() {
                            return e.recentlyPlayed.loadingState === d.GuX.IDLE && e.liked.loadingState === d.GuX.IDLE;
                        },
                        get hasRecentlyPlayed() {
                            var t;
                            return e.recentlyPlayed.isLoading || ((null == (t = e.recentlyPlayed.entities) ? void 0 : t.length) || 0) > 0;
                        },
                        get hasLiked() {
                            var a;
                            return e.liked.isLoading || ((null == (a = e.liked.entities) ? void 0 : a.length) || 0) > 0;
                        },
                    }))
                    .actions((e) => ({
                        reset() {
                            e.recentlyPlayed.reset(), e.liked.reset();
                        },
                    })),
                O = l.gK
                    .compose(l.gK.model('CollectionDislikesPageArtists', { items: l.gK.maybeNull(l.gK.array(_.PK)) }), c.XT)
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === d.GuX.PENDING;
                            },
                            get isEmpty() {
                                var a;
                                return !t.isLoading && (null == (a = e.items) ? void 0 : a.length) === 0;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, l.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, l._$)(e);
                            if (!(0, l._n)(e)) return null;
                            let { user: i } = (0, l.Zn)(e);
                            if (e.loadingState === d.GuX.PENDING) return null;
                            if (((e.loadingState = d.GuX.PENDING), i.account.data.uid))
                                try {
                                    let a = yield t.getDislikedArtists({ userId: i.account.data.uid });
                                    return (e.items = (0, l.wg)((a || []).map(_.dM))), e.loadingState !== d.GuX.IDLE && (e.loadingState = d.GuX.RESOLVE), a;
                                } catch (t) {
                                    a.error(t), e.loadingState !== d.GuX.IDLE && (e.loadingState = d.GuX.REJECT);
                                }
                            return (e.loadingState = d.GuX.REJECT), null;
                        }),
                        reset() {
                            (e.loadingState = d.GuX.IDLE), (e.items = null);
                        },
                    }));
            var w = a(9970),
                B = a(1131);
            let D = l.gK.model('CollectionDislikesPageTracksItem', { id: l.gK.string, loadingState: l.gK.enumeration(Object.values(d.GuX)), data: l.gK.maybeNull(T.vj) }),
                K = l.gK
                    .compose(l.gK.model('CollectionDislikesPageTracks', { items: l.gK.maybeNull(l.gK.array(D)) }), c.XT)
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === d.GuX.PENDING;
                            },
                            get isEmpty() {
                                var a;
                                return !t.isLoading && (null == (a = e.items) ? void 0 : a.length) === 0;
                            },
                            get sonataEntitiesData() {
                                var i, n;
                                return null != (n = null == (i = e.items) ? void 0 : i.map((e) => (0, B.li)(e.id))) ? n : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, l.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, l._$)(e),
                                { user: i } = (0, l.Zn)(e);
                            if (i.account.data.uid && e.loadingState !== d.GuX.PENDING) {
                                e.loadingState = d.GuX.PENDING;
                                try {
                                    let {
                                            library: { tracks: a },
                                        } = yield t.getDislikedTracks({ userId: i.account.data.uid }),
                                        n = a.map((e) => {
                                            let { id: t, albumId: a } = e;
                                            return { id: String((0, w.V)(t, a)), loadingState: d.GuX.IDLE };
                                        });
                                    (e.items = (0, l.wg)(n)), (e.loadingState = d.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), e.loadingState !== d.GuX.IDLE && (e.loadingState = d.GuX.REJECT);
                                }
                            }
                        }),
                        getTracksByRange: (0, l.L3)(function* (t, a) {
                            var i;
                            let { tracksResource: n, modelActionsLogger: r } = (0, l._$)(e);
                            if (!(null == (i = e.items) ? void 0 : i.length)) return null;
                            (t = Math.max(0, t)), (a = Math.min(a, e.items.length));
                            let s = ((e, t, a) => {
                                let i = [];
                                for (let r = t; r <= a; r++) {
                                    var n, l;
                                    ((null == (n = e[r]) ? void 0 : n.loadingState) === d.GuX.IDLE || (null == (l = e[r]) ? void 0 : l.loadingState) === d.GuX.REJECT) &&
                                        i.push(r);
                                }
                                return i;
                            })(e.items, t, a);
                            try {
                                let t,
                                    a =
                                        ((t = e.items),
                                        s.map((e) => {
                                            let a = t[e];
                                            return String(null == a ? void 0 : a.id);
                                        }));
                                if (!a.length) return null;
                                s.forEach((t) => {
                                    var a;
                                    let i = null == (a = e.items) ? void 0 : a[t];
                                    i && (i.loadingState = d.GuX.PENDING);
                                });
                                let i = yield n.getTracksMeta({ trackIds: a, withProgress: !0 });
                                s.forEach((t, a) => {
                                    var n;
                                    let l = null == i ? void 0 : i[a];
                                    (null == (n = e.items) ? void 0 : n[t]) && l && (e.items[t] = { id: String(l.id), data: (0, T.vU)(l), loadingState: d.GuX.RESOLVE });
                                });
                            } catch (t) {
                                r.error(t),
                                    s.forEach((t) => {
                                        var a;
                                        let i = null == (a = e.items) ? void 0 : a[t];
                                        i && (i.loadingState = d.GuX.REJECT);
                                    });
                            }
                            return null;
                        }),
                        reset() {
                            (e.loadingState = d.GuX.IDLE), (e.items = null);
                        },
                    })),
                U = l.gK
                    .model('CollectionDislikesPage', { artists: O, tracks: K })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.tracks.isNeededToLoad && e.artists.isNeededToLoad;
                        },
                        get isLoading() {
                            return e.tracks.isLoading && e.artists.isLoading;
                        },
                        get isResolved() {
                            return e.tracks.isResolved && e.artists.isResolved;
                        },
                    }))
                    .actions((e) => ({
                        reset() {
                            e.artists.reset(), e.tracks.reset();
                        },
                    }));
            var V = a(30294);
            let F = l.gK
                    .model('CollectionKidsAlbumsPage', { pagesLoader: (0, c.Ij)(s.JC) })
                    .views((e) => {
                        let t = {
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isRejected() {
                                return e.pagesLoader.isInitialRequestRejected;
                            },
                            get isEmpty() {
                                return e.pagesLoader.isEmpty;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get requestsCount() {
                                return e.pagesLoader.requestsCount;
                            },
                            get items() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                            get shouldShowContent() {
                                return t.isShimmerVisible || t.items.length > 0;
                            },
                            get loadedItems() {
                                var i, n;
                                return null != (n = null == (i = e.pagesLoader.items) ? void 0 : i.filter((e) => null !== e)) ? n : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { pageSize: a = V.c, page: i = 0 } = t,
                                { landingBlocksResource: n, modelActionsLogger: s } = (0, l._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, d.GuX.PENDING);
                                    let t = yield n.getCollectionKidsAlbumsLiked({ page: i, pageSize: a }),
                                        l = t.items.map((e) => (0, r.vj)(e.data).data);
                                    e.pagesLoader.setItems(l, { page: i, pager: t.pager });
                                } catch (t) {
                                    s.error(t), e.pagesLoader.setItems(null, { responseStatus: d.FlZ.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                G = l.gK
                    .model('CollectionKidsPlaylistsPage', { pagesLoader: (0, c.Ij)(N.IP) })
                    .views((e) => {
                        let t = {
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isRejected() {
                                return e.pagesLoader.isInitialRequestRejected;
                            },
                            get isEmpty() {
                                return e.pagesLoader.isEmpty;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get requestsCount() {
                                return e.pagesLoader.requestsCount;
                            },
                            get items() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                            get shouldShowContent() {
                                return t.isShimmerVisible || t.items.length > 0;
                            },
                            get loadedItems() {
                                var i, n;
                                return null != (n = null == (i = e.pagesLoader.items) ? void 0 : i.filter((e) => null !== e)) ? n : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { pageSize: a = V.c, page: i = 0 } = t,
                                { landingBlocksResource: n, modelActionsLogger: s } = (0, l._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, d.GuX.PENDING);
                                    let t = yield n.getCollectionKidsPlaylistsLiked({ page: i, pageSize: a }),
                                        l = t.items.map((e) => (0, r.dF)(e.data).data);
                                    e.pagesLoader.setItems(l, { page: i, pager: t.pager });
                                } catch (t) {
                                    s.error(t), e.pagesLoader.setItems(null, { responseStatus: d.FlZ.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                z = l.gK
                    .model('CollectionKidsTracksPage', { pagesLoader: (0, c.Ij)(T.vj) })
                    .views((e) => {
                        let t = {
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isRejected() {
                                return e.pagesLoader.isInitialRequestRejected;
                            },
                            get isEmpty() {
                                return e.pagesLoader.isEmpty;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get requestsCount() {
                                return e.pagesLoader.requestsCount;
                            },
                            get items() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                            get shouldShowContent() {
                                return t.isShimmerVisible || t.items.length > 0;
                            },
                            get loadedItems() {
                                var i, n;
                                return null != (n = null == (i = e.pagesLoader.items) ? void 0 : i.filter((e) => null !== e)) ? n : [];
                            },
                            get sonataEntitiesData() {
                                return t.loadedItems.map(T.$b);
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { pageSize: a = V.c, page: i = 0 } = t,
                                { landingBlocksResource: n, modelActionsLogger: s } = (0, l._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, d.GuX.PENDING);
                                    let t = yield n.getCollectionKidsTracksLiked({ page: i, pageSize: a }),
                                        l = t.items.map(r.vI).map((e) => e.data);
                                    e.pagesLoader.setItems(l, { page: i, pager: t.pager });
                                } catch (t) {
                                    s.error(t), e.pagesLoader.setItems(null, { responseStatus: d.FlZ.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                X = l.gK
                    .model('CollectionKidsPage', { albums: F, playlists: G, tracks: z })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.albums.isNeededToLoad && e.playlists.isNeededToLoad && e.tracks.isNeededToLoad;
                        },
                        get isRejected() {
                            return e.albums.isRejected && e.playlists.isRejected && e.tracks.isRejected;
                        },
                        get isResolved() {
                            return e.albums.isResolved && e.playlists.isResolved && e.tracks.isResolved;
                        },
                        get shouldShowContent() {
                            return e.albums.shouldShowContent || e.playlists.shouldShowContent || e.tracks.shouldShowContent;
                        },
                    }))
                    .actions((e) => ({
                        reset() {
                            e.albums.reset(), e.playlists.reset(), e.tracks.reset();
                        },
                    })),
                W = l.gK
                    .compose(l.gK.model('CollectionShelfLikedPage', { pagesLoader: (0, c.Ij)(L), typeForFrom: l.gK.maybeNull(l.gK.string) }), c.pl)
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get items() {
                            return e.pagesLoader.items || [];
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { pageSize: a = V.c, page: i = 0 } = t,
                                { nonMusicResource: n, modelActionsLogger: r } = (0, l._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    var s, o;
                                    e.pagesLoader.setPageState(i, d.GuX.PENDING);
                                    let t = yield n.getShelfLiked({ page: i, pageSize: a }),
                                        l = (null == (s = t.entities) ? void 0 : s.map(f)) || [];
                                    e.pagesLoader.setItems(l, { page: i, pager: t.pager }), (e.typeForFrom = null != (o = t.typeForFrom) ? o : null);
                                } catch (t) {
                                    r.error(t), e.pagesLoader.setItems(null, { responseStatus: d.FlZ.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                Y = l.gK
                    .model('CollectionShelfRecentlyPlayedPage', { pagesLoader: (0, c.Ij)(P), typeForFrom: l.gK.maybeNull(l.gK.string) })
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get items() {
                            return e.pagesLoader.items || [];
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { pageSize: a = V.c, page: i = 0 } = t,
                                { nonMusicResource: n, modelActionsLogger: r } = (0, l._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    var s, o;
                                    e.pagesLoader.setPageState(i, d.GuX.PENDING);
                                    let t = yield n.getShelfRecentlyPlayed({ page: i, pageSize: a }),
                                        l = (null == (s = t.entities) ? void 0 : s.map(E)) || [];
                                    e.pagesLoader.setItems(l, { page: i, pager: t.pager }), (e.typeForFrom = null != (o = t.typeForFrom) ? o : null);
                                } catch (t) {
                                    r.error(t), e.pagesLoader.setItems(null, { responseStatus: d.FlZ.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), (e.typeForFrom = null);
                        },
                    })),
                $ = l.gK.model('CollectionPage', {
                    landing: r.Ju,
                    albums: m,
                    playlists: C,
                    artists: v,
                    shelf: M,
                    shelfRecentlyPlayed: Y,
                    shelfLiked: W,
                    nonMusicLiked: x,
                    dislikes: U,
                    kids: X,
                    clips: I,
                });
            a(14083),
                a(14619),
                a(30604),
                a(92717),
                a(62302),
                a(16890),
                a(94056),
                a(25990),
                a(15260),
                a(78736),
                a(15686),
                a(34598),
                a(69114),
                a(14824),
                a(76344),
                a(57382),
                a(40942),
                a(57139),
                a(73624);
        },
        53985: (e) => {
            e.exports = {
                root: 'TrackModalLyricsShimmer_root__t88sX',
                title: 'TrackModalLyricsShimmer_title__lIyk4',
                lyrics: 'TrackModalLyricsShimmer_lyrics__BSM_Q',
                important: 'TrackModalLyricsShimmer_important__U1BbD',
                button: 'TrackModalLyricsShimmer_button__uAG_w',
            };
        },
        54773: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedBar_root__tTyvO',
                bar: 'NavbarDesktopAnimatedBar_bar__Wge_o',
                bar_enter: 'NavbarDesktopAnimatedBar_bar_enter__pUWOV',
                bar_enter_active: 'NavbarDesktopAnimatedBar_bar_enter_active__cYAzl',
                animation_show: 'NavbarDesktopAnimatedBar_animation_show__oAMq1',
                animation_scale: 'NavbarDesktopAnimatedBar_animation_scale__iOhup',
                bar_exit: 'NavbarDesktopAnimatedBar_bar_exit__Wq1AL',
                bar_exit_active: 'NavbarDesktopAnimatedBar_bar_exit_active__EZFDU',
                animation_hide: 'NavbarDesktopAnimatedBar_animation_hide__Eiu1e',
                animation_unscale: 'NavbarDesktopAnimatedBar_animation_unscale__gyZb6',
                button: 'NavbarDesktopAnimatedBar_button__T7n21',
                button_enter: 'NavbarDesktopAnimatedBar_button_enter__6v5a5',
                button_enter_active: 'NavbarDesktopAnimatedBar_button_enter_active__jZmtw',
                button_exit: 'NavbarDesktopAnimatedBar_button_exit__j8qXO',
                button_exit_active: 'NavbarDesktopAnimatedBar_button_exit_active__D5JJp',
            };
        },
        55475: (e) => {
            e.exports = { root: 'PlusNavbarButton_root__kdY04', plusButtonShimmer: 'PlusNavbarButton_plusButtonShimmer__6t1go' };
        },
        57503: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => W, D: () => S });
            var i = a(60754),
                n = a(82736),
                l = a(95428),
                r = a(29222),
                s = a(49574);
            let o = { width: '614', height: '556' },
                d = { width: '100%', height: '240' },
                c = (e) => ({ width: e ? d.width : o.width, height: e ? d.height : o.height }),
                u = { width: '614', height: '244' },
                m = { width: '100%', height: '240' },
                p = '{lang}',
                _ = RegExp('(px|%)$'),
                g = (e) => e.replace('px', ''),
                v = (e) => (_.test(e) ? e : ''.concat(e).concat('px')),
                b = (e) => {
                    let { width: t, height: a, iframeUri: i, listenMessage: n } = e,
                        l = g(t),
                        r = g(a),
                        s = v(t),
                        o = v(a);
                    return '<iframe frameborder="0" allow="clipboard-write" style="border:none;width:'
                        .concat(s, ';height:')
                        .concat(o, ';" width="')
                        .concat(l, '" height="')
                        .concat(r, '" src="')
                        .concat(i, '">')
                        .concat(n, '</iframe>');
                },
                h = i.gK.model({ width: i.gK.string, height: i.gK.string }),
                I = h
                    .props({
                        id: i.gK.number,
                        type: i.gK.literal(s.Yxq.ALBUM),
                        title: i.gK.string,
                        path: i.gK.string,
                        artistName: i.gK.maybeNull(i.gK.string),
                        artistId: i.gK.maybeNull(i.gK.string),
                        listenMessage: i.gK.maybeNull(i.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                let { location: t } = (0, i.Zn)(e);
                                return (0, s.yK3)({ tld: t.tld, id: e.id });
                            },
                            get entityUri() {
                                let { location: t } = (0, i.Zn)(e),
                                    { config: a } = (0, i._$)(e);
                                return ''.concat((0, n.getTldHost)(a.iframe.entityBaseUrl, t.tld, s.BEZ)).concat(e.path);
                            },
                            get artistUri() {
                                if (null === e.artistId) return null;
                                let { location: t } = (0, i.Zn)(e),
                                    { config: a } = (0, i._$)(e);
                                return ''.concat((0, n.getTldHost)(a.iframe.entityBaseUrl, t.tld, s.BEZ), '/artist/').concat(e.artistId);
                            },
                            get iframeCode() {
                                var a;
                                return b({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (a = e.listenMessage) ? a : '' });
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setWidth(t) {
                            e.width = t;
                        },
                        setHeight(t) {
                            e.height = t;
                        },
                        setListenMessage(t) {
                            var a, i, n, l;
                            e.listenMessage = t(
                                ((a = e.entityUri),
                                (i = e.title),
                                (n = e.artistUri),
                                null === (l = e.artistName)
                                    ? '<a href="'.concat(a, '">').concat(i, '</a>')
                                    : null === n
                                      ? '<a href="'.concat(a, '">').concat(i, '</a> — ').concat(l)
                                      : '<a href="'.concat(a, '">').concat(i, '</a> — <a href="').concat(n, '">').concat(l, '</a>')),
                            );
                        },
                    })),
                x = h
                    .props({
                        id: i.gK.string,
                        type: i.gK.literal(s.Yxq.PLAYLIST),
                        title: i.gK.maybeNull(i.gK.string),
                        path: i.gK.string,
                        ownerLogin: i.gK.maybeNull(i.gK.string),
                        ownerName: i.gK.maybeNull(i.gK.string),
                        listenMessage: i.gK.maybeNull(i.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                var a;
                                let { location: t } = (0, i.Zn)(e);
                                return (0, s.J6z)({ tld: t.tld, ownerLogin: null != (a = e.ownerLogin) ? a : '', id: e.id });
                            },
                            get entityUri() {
                                let { location: t } = (0, i.Zn)(e),
                                    { config: a } = (0, i._$)(e);
                                return ''.concat((0, n.getTldHost)(a.iframe.entityBaseUrl, t.tld, s.BEZ)).concat(e.path);
                            },
                            get iframeCode() {
                                var l;
                                return b({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (l = e.listenMessage) ? l : '' });
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setWidth(t) {
                            e.width = t;
                        },
                        setHeight(t) {
                            e.height = t;
                        },
                        setListenMessage(t) {
                            let a, n, l, r;
                            if (null === e.title || null === e.ownerName || null === e.ownerLogin) {
                                e.listenMessage = t('');
                                return;
                            }
                            let { location: o } = (0, i.Zn)(e);
                            e.listenMessage = t(
                                ((a = e.entityUri),
                                (n = e.title),
                                (l = e.ownerName),
                                (r = (0, s.QoD)(o.tld, e.ownerLogin)),
                                '<a href="'.concat(a, '">').concat(n, '</a> — <a href="').concat(r, '">').concat(l, '</a>')),
                            );
                        },
                    })),
                N = h
                    .props({
                        id: i.gK.string,
                        albumId: i.gK.maybeNull(i.gK.number),
                        type: i.gK.literal(s.Yxq.TRACK),
                        title: i.gK.string,
                        path: i.gK.string,
                        artistName: i.gK.maybeNull(i.gK.string),
                        artistId: i.gK.maybeNull(i.gK.string),
                        listenMessage: i.gK.maybeNull(i.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                var a;
                                let { location: t } = (0, i.Zn)(e);
                                return (0, s.iq5)({ tld: t.tld, id: e.id, albumId: null != (a = e.albumId) ? a : void 0 });
                            },
                            get entityUri() {
                                let { location: t } = (0, i.Zn)(e),
                                    { config: a } = (0, i._$)(e);
                                return ''.concat((0, n.getTldHost)(a.iframe.entityBaseUrl, t.tld, s.BEZ)).concat(e.path);
                            },
                            get artistUri() {
                                if (null === e.artistId) return null;
                                let { location: t } = (0, i.Zn)(e),
                                    { config: a } = (0, i._$)(e);
                                return ''.concat((0, n.getTldHost)(a.iframe.entityBaseUrl, t.tld, s.BEZ), '/artist/').concat(e.artistId);
                            },
                            get iframeCode() {
                                var l;
                                return b({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (l = e.listenMessage) ? l : '' });
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setWidth(t) {
                            e.width = t;
                        },
                        setHeight(t) {
                            e.height = t;
                        },
                        setListenMessage(t) {
                            var a, i, n, l;
                            e.listenMessage = t(
                                ((a = e.entityUri),
                                (i = e.title),
                                (n = e.artistUri),
                                null === (l = e.artistName)
                                    ? '<a href="'.concat(a, '">').concat(i, '</a>')
                                    : null === n
                                      ? '<a href="'.concat(a, '">').concat(i, '</a> — ').concat(l)
                                      : '<a href="'.concat(a, '">').concat(i, '</a> — <a href="').concat(n, '">').concat(l, '</a>')),
                            );
                        },
                    })),
                A = i.gK.union(N, I, x),
                S = i.gK.model({ entity: i.gK.maybeNull(A), modal: l.qt }).actions((e) => ({
                    openModal(t) {
                        let { settings: a } = (0, i.Zn)(e);
                        (e.entity = ((e, t) => {
                            if (e.variant === s.Yxq.TRACK)
                                return ((e) => {
                                    let t,
                                        { variant: a, id: n, title: l, path: r, trackArtistName: s, trackArtistId: o, trackAlbumId: d, isMobile: c } = e;
                                    return (0, i.wg)({
                                        id: n,
                                        type: a,
                                        albumId: d,
                                        title: l,
                                        path: r,
                                        artistName: null != s ? s : null,
                                        artistId: null != o ? o : null,
                                        ...{ width: (t = c) ? m.width : u.width, height: t ? m.height : u.height },
                                    });
                                })({ ...e, isMobile: t });
                            if (e.variant === s.Yxq.ALBUM) {
                                let a = e.id;
                                if (void 0 === a) throw new r.t('Missing album ID');
                                return ((e) => {
                                    let { variant: t, id: a, title: n, path: l, albumArtistName: r, albumArtistId: s, isMobile: o } = e;
                                    return (0, i.wg)({ id: a, type: t, title: n, path: l, artistName: null != r ? r : null, artistId: null != s ? s : null, ...c(o) });
                                })({ ...e, id: a, isMobile: t });
                            }
                            if (e.variant === s.Yxq.PLAYLIST)
                                return ((e) => {
                                    let { variant: t, id: a, title: n, path: l, playlistOwnerName: r, playlistOwnerLogin: s, isMobile: o } = e;
                                    return (0, i.wg)({
                                        id: String(a),
                                        type: t,
                                        title: null != n ? n : null,
                                        path: null != l ? l : null,
                                        ownerName: r,
                                        ownerLogin: s,
                                        ...c(o),
                                    });
                                })({ ...e, isMobile: t });
                            throw new r.t('Unknown variant');
                        })({ ...t, title: (0, n.sanitizeDOM)(t.title || '', { whiteList: {} }) }, a.isMobile)),
                            e.modal.open();
                    },
                    closeModal() {
                        e.modal.close(), (e.entity = null);
                    },
                }));
            var y = a(32290),
                C = a(96103),
                T = a(60900),
                f = a(59824),
                E = a(84638),
                L = a(55178),
                P = a(39407),
                j = a(91027),
                R = a(63423),
                k = a(82586),
                M = a(30627),
                O = a(71926);
            let w = (e, t) => (_.test(e) ? e : 0 === e.trim().length ? ''.concat(t, 'px') : ''.concat(Math.max(Number(e), t), 'px'));
            var B = a(44574),
                D = a(86085),
                K = a.n(D);
            let U = (e) => {
                let { closeToast: t } = e;
                return (0, y.jsx)(B.$W, {
                    closeToast: t,
                    cover: (0, y.jsx)(k.Icon, { className: K().icon, size: 'xs', variant: 'chain' }),
                    message: (0, y.jsx)(O.Caption, {
                        className: K().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, y.jsx)(P.A, { id: 'notifications-info.html-code-copied' }),
                    }),
                    coverRadius: 's',
                });
            };
            var V = a(19681),
                F = a.n(V);
            let G = (0, C.PA)((e) => {
                let { entity: t } = e,
                    { formatMessage: a } = (0, T.A)(),
                    { language: i } = (0, s.h6b)(),
                    { notify: n } = (0, s.lkh)();
                (0, L.useEffect)(() => {
                    t.setListenMessage((e) => a({ id: 'share.iframe-listen' }, { html: e }));
                }, [t, a]);
                let l = (0, j.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        t.setWidth(a);
                    }),
                    r = (0, j.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        !_.test(a) && (0 === a.length || Number.isNaN(Number(a)) || 220 > Number(a)) && t.setWidth(String(220));
                    }),
                    o = (0, j.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        t.setHeight(a);
                    }),
                    d = (0, j.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        !_.test(a) && (0 === a.length || Number.isNaN(Number(a)) || 88 > Number(a)) && t.setHeight(String(88));
                    }),
                    c = { width: w(t.width, 220), height: w(t.height, 88) },
                    u = t.iframeUri.replace(p, i),
                    m = t.iframeCode.replace(p, i),
                    g = (0, j.c)(async () => {
                        await window.navigator.clipboard.writeText(m), n((0, y.jsx)(U, {}), { containerId: s.uQT.INFO });
                    });
                return (0, y.jsxs)('div', {
                    className: F().root,
                    ...(0, f.Am)(f.Kq.shareIframe.SHARE_IFRAME_EDITOR),
                    children: [
                        (0, y.jsxs)('form', {
                            className: F().controls,
                            children: [
                                (0, y.jsxs)('div', {
                                    className: F().settings,
                                    children: [
                                        (0, y.jsx)(M.p, {
                                            containerClassName: F().sizeInputContainer,
                                            size: 'xxxs',
                                            value: t.width,
                                            variant: 'secondary',
                                            pattern: '^\\d+(px|%)?$',
                                            min: 220,
                                            required: !0,
                                            onChange: l,
                                            onBlur: r,
                                            'aria-label': a({ id: 'share.iframe-editor-width' }),
                                            ...(0, f.Am)(f.Kq.shareIframe.SHARE_IFRAME_EDITOR_WIDTH_INPUT),
                                        }),
                                        (0, y.jsx)(k.Icon, { size: 'xs', variant: 'close' }),
                                        (0, y.jsx)(M.p, {
                                            containerClassName: F().sizeInputContainer,
                                            size: 'xxxs',
                                            value: t.height,
                                            pattern: '^\\d+(px|%)?$',
                                            variant: 'secondary',
                                            min: 88,
                                            required: !0,
                                            onChange: o,
                                            onBlur: d,
                                            'aria-label': a({ id: 'share.iframe-editor-height' }),
                                            ...(0, f.Am)(f.Kq.shareIframe.SHARE_IFRAME_EDITOR_HEIGHT_INPUT),
                                        }),
                                    ],
                                }),
                                (0, y.jsx)(M.p, {
                                    inputClassName: F().iframeCodeInput,
                                    containerClassName: F().iframeCodeInputContainer,
                                    type: 'text',
                                    size: 'xxxs',
                                    variant: 'secondary',
                                    value: m,
                                    required: !0,
                                    readOnly: !0,
                                    'aria-label': a({ id: 'share.iframe-editor-code' }),
                                    ...(0, f.Am)(f.Kq.shareIframe.SHARE_IFRAME_EDITOR_CODE_INPUT),
                                }),
                                (0, y.jsx)(R.$, {
                                    color: 'primary',
                                    className: F().copyButton,
                                    size: 'l',
                                    radius: 'xxxl',
                                    onClick: g,
                                    ...(0, f.Am)(f.Kq.shareIframe.SHARE_IFRAME_EDITOR_COPY_BUTTON),
                                    children: (0, y.jsx)(O.Caption, {
                                        type: 'text',
                                        variant: 'div',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        children: (0, y.jsx)(P.A, { id: 'share.iframe-copy' }),
                                    }),
                                }),
                            ],
                        }),
                        (0, y.jsx)('div', {
                            className: F().iframeContainer,
                            style: c,
                            ...(0, f.Am)(f.Kq.shareIframe.SHARE_IFRAME_EDITOR_PREVIEW),
                            children: (0, y.jsx)('iframe', { className: F().iframe, src: u, title: a({ id: 'share.iframe-editor-preview' }) }),
                        }),
                    ],
                });
            });
            var z = a(18106),
                X = a.n(z);
            let W = (0, C.PA)(() => {
                let {
                        shareIframe: e,
                        settings: { isMobile: t },
                    } = (0, s.Pjs)(),
                    { formatMessage: a } = (0, T.A)();
                return e.entity
                    ? (0, y.jsx)(E.a, {
                          className: X().root,
                          contentClassName: X().content,
                          open: e.modal.isOpened,
                          onOpenChange: e.modal.onOpenChange,
                          placement: t ? 'default' : 'center',
                          size: 'fitContent',
                          title: a({ id: 'share.iframe-modal-title' }),
                          labelClose: a({ id: 'interface-actions.close' }),
                          onClose: e.closeModal,
                          overlayColor: 'full',
                          containerProps: (0, f.Am)(f.Kq.shareIframe.SHARE_IFRAME_MODAL),
                          closeButtonProps: (0, f.Am)(f.Kq.shareIframe.SHARE_IFRAME_MODAL_CLOSE_BUTTON),
                          children: (0, y.jsx)(G, { entity: e.entity }),
                      })
                    : null;
            });
        },
        59976: (e) => {
            e.exports = { root: 'DownloadMobileAppModal_root__nD7fo', content: 'DownloadMobileAppModal_content__4ZW2F' };
        },
        60711: (e, t, a) => {
            'use strict';
            a.d(t, { qi: () => d, ak: () => i });
            let i = (e) => {
                let { palette: t, isPlaying: a } = e;
                return (a ? t.primaryStops : t.primaryDarkIdleStops).reduce((e, t, a) => ((e['--vibe-gradient-stop-'.concat(a)] = t), e), {});
            };
            var n = a(60754),
                l = a(43557),
                r = a(49574);
            let s = n.gK.model('SpecialHeaderThemeOptions', { backgroundColor: n.gK.maybe(n.gK.string), textColor: n.gK.maybe(n.gK.string) }),
                o = n.gK.model('SpecialHeader', { title: n.gK.string, url: n.gK.string, lightTheme: s, darkTheme: s }),
                d = n.gK
                    .model('MainPage', { landing: l.Ju, specialHeaderLoadingState: n.gK.enumeration(Object.values(r.GuX)), specialHeader: n.gK.maybe(o) })
                    .actions((e) => ({
                        getSpecialHeader: (0, n.L3)(function* () {
                            let { landingResource: t, modelActionsLogger: a } = (0, n._$)(e);
                            if (e.specialHeaderLoadingState !== r.GuX.PENDING)
                                try {
                                    e.specialHeaderLoadingState = r.GuX.PENDING;
                                    let a = yield t.getSpecialHeader();
                                    (e.specialHeader = (0, n.wg)(
                                        ((e) => {
                                            var t, a, i, n, l, r;
                                            if ((null == (t = e.button) ? void 0 : t.title) && (null == (a = e.button.action) ? void 0 : a.weblink))
                                                return {
                                                    title: e.button.title,
                                                    url: e.button.action.weblink,
                                                    lightTheme: {
                                                        backgroundColor: null == (i = e.lightTheme) ? void 0 : i.buttonColor,
                                                        textColor: null == (n = e.lightTheme) ? void 0 : n.buttonTitleColor,
                                                    },
                                                    darkTheme: {
                                                        backgroundColor: null == (l = e.darkTheme) ? void 0 : l.buttonColor,
                                                        textColor: null == (r = e.darkTheme) ? void 0 : r.buttonTitleColor,
                                                    },
                                                };
                                        })(a),
                                    )),
                                        (e.specialHeaderLoadingState = r.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.specialHeaderLoadingState = r.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.specialHeaderLoadingState = r.GuX.IDLE), (e.specialHeader = void 0);
                        },
                    }));
            a(2994);
        },
        64581: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => y, J: () => r });
            var i = a(92708),
                n = a(60754),
                l = a(95428);
            let r = n.gK
                .model('ImageSliderModal', {
                    modal: l.qt,
                    images: n.gK.maybeNull(n.gK.array(n.gK.string)),
                    initialSlideIndex: n.gK.optional(n.gK.number, 0),
                    loadedImages: n.gK.maybeNull(n.gK.array(n.gK.string)),
                    sizeImage: n.gK.optional(n.gK.number, 1e3),
                    withAspectRatio: n.gK.optional(n.gK.boolean, !0),
                })
                .views((e) => ({ isImageLoaded: (t) => !!t && !!e.loadedImages && e.loadedImages.includes(t) }))
                .actions((e) => ({
                    openImages(t) {
                        let { images: a, initialSlideIndex: l, sizeImage: r, withAspectRatio: s } = t;
                        (e.images = (0, n.wg)((0, i.HO)(a))),
                            (e.sizeImage = null != r ? r : 1e3),
                            (e.withAspectRatio = null == s || s),
                            l && (e.initialSlideIndex = l),
                            e.modal.open();
                    },
                    setImageIsLoaded(t) {
                        var a, i;
                        e.loadedImages || (e.loadedImages = (0, n.wg)([])),
                            !t || (null == (a = e.loadedImages) ? void 0 : a.includes(t)) || null == (i = e.loadedImages) || i.push(t);
                    },
                    close() {
                        (e.images = null), (e.initialSlideIndex = 0), (e.loadedImages = null), e.modal.close();
                    },
                }));
            var s = a(32290),
                o = a(63618),
                d = a(96103),
                c = a(55178),
                u = a(60900),
                m = a(6005),
                p = a(15875),
                _ = a(59824),
                g = a(91027),
                v = a(63423),
                b = a(82586),
                h = a(50162),
                I = a(84638),
                x = a(99902),
                N = a(49574),
                A = a(66666),
                S = a.n(A);
            let y = (0, d.PA)(() => {
                var e, t, a, i;
                let {
                        settings: { isMobile: n },
                        modals: { imageSliderModal: l },
                    } = (0, N.Pjs)(),
                    { formatMessage: r } = (0, u.A)(),
                    { contentRef: d } = (0, N.gKY)(),
                    A = (0, N.zwV)(),
                    y = (0, c.useRef)(null),
                    [C, T] = (0, c.useState)(!0),
                    [f, E] = (0, c.useState)(!1),
                    [L, P] = (0, c.useState)(0),
                    j = (null != (i = null == (e = l.images) ? void 0 : e.length) ? i : 0) > 1,
                    R = (0, g.c)(() => {
                        var e;
                        null == (e = y.current) || e.swiper.slideNext();
                    }),
                    k = (0, g.c)(() => {
                        var e;
                        null == (e = y.current) || e.swiper.slidePrev();
                    }),
                    M = (0, g.c)((e) => {
                        T(e.isBeginning), E(e.isEnd), P(e.activeIndex);
                    });
                return (
                    (0, c.useEffect)(() => {
                        setTimeout(() => {
                            var e, t, a;
                            (null == (e = y.current) ? void 0 : e.swiper) &&
                                (T(0 === y.current.swiper.activeIndex),
                                E(y.current.swiper.activeIndex === (null != (a = null == (t = l.images) ? void 0 : t.length) ? a : 0) - 1),
                                P(y.current.swiper.activeIndex));
                        });
                    }, [null == (t = l.images) ? void 0 : t.length, n]),
                    (0, c.useEffect)(() => {
                        l.modal.isOpened
                            ? (null == A || A.disable(N.Mo.MAIN, N.lbr.CLOSE),
                              null == A || A.disable(N.Mo.MAIN, N.lbr.SLIDE_BACKWARD),
                              null == A || A.disable(N.Mo.MAIN, N.lbr.SLIDE_FORWARD),
                              null == A || A.enable(N.Mo.IMAGE_SLIDER, N.lbr.CLOSE))
                            : (null == A || A.disable(N.Mo.IMAGE_SLIDER, N.lbr.CLOSE),
                              null == A || A.enable(N.Mo.MAIN, N.lbr.CLOSE),
                              null == A || A.enable(N.Mo.MAIN, N.lbr.SLIDE_BACKWARD),
                              null == A || A.enable(N.Mo.MAIN, N.lbr.SLIDE_FORWARD));
                    }, [A, l.modal.isOpened]),
                    (0, c.useEffect)(
                        () => (
                            null == A ||
                                A.addShortcutsListener(N.Mo.IMAGE_SLIDER, N.lbr.CLOSE, () => {
                                    l.modal.isOpened && l.close();
                                }),
                            () => {
                                null == A || A.removeShortcutsListener(N.Mo.IMAGE_SLIDER, N.lbr.CLOSE),
                                    null == A || A.disable(N.Mo.IMAGE_SLIDER, N.lbr.CLOSE),
                                    null == A || A.enable(N.Mo.MAIN, N.lbr.CLOSE),
                                    null == A || A.enable(N.Mo.MAIN, N.lbr.SLIDE_BACKWARD),
                                    null == A || A.enable(N.Mo.MAIN, N.lbr.SLIDE_FORWARD),
                                    l.close();
                            }
                        ),
                        [A, l],
                    ),
                    (0, s.jsxs)(I.a, {
                        className: (0, o.$)(S().root, { [S().root_mobile]: n }),
                        contentClassName: S().modalContent,
                        open: l.modal.isOpened,
                        size: n ? 'fullscreen' : 'fitContent',
                        placement: 'center',
                        showHeader: !1,
                        isMobile: n,
                        onClose: l.close,
                        escapeKey: !1,
                        onOpenChange: l.modal.onOpenChange,
                        portalNode: n ? null : d,
                        withAnimation: !l.modal.isOpened,
                        ...(0, _.Am)(_.e8.imageSlider.IMAGE_SLIDER_MODAL),
                        children: [
                            (0, s.jsx)('div', {
                                className: S().leftArrowWrapper,
                                children:
                                    j &&
                                    (0, s.jsx)(v.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, s.jsx)(b.Icon, { variant: 'arrowLeft', size: 'xxs' }),
                                        onClick: k,
                                        disabled: C,
                                        'aria-label': r({ id: 'slider.prev-image' }),
                                        ...(0, _.Am)(_.e8.imageSlider.IMAGE_SLIDER_MODAL_PREV_SLIDE_BUTTON),
                                    }),
                            }),
                            (0, s.jsx)('div', {
                                className: S().rightArrowWrapper,
                                children:
                                    j &&
                                    (0, s.jsx)(v.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, s.jsx)(b.Icon, { variant: 'arrowRight', size: 'xxs' }),
                                        onClick: R,
                                        disabled: f,
                                        'aria-label': r({ id: 'slider.next-image' }),
                                        ...(0, _.Am)(_.e8.imageSlider.IMAGE_SLIDER_MODAL_NEXT_SLIDE_BUTTON),
                                    }),
                            }),
                            (0, s.jsx)(v.$, {
                                radius: 'round',
                                color: 'secondary',
                                size: 'xxs',
                                icon: (0, s.jsx)(b.Icon, { variant: 'close', size: 'xxs' }),
                                className: S().closeButton,
                                onClick: l.close,
                                'aria-label': r({ id: 'slider.close-image-modal' }),
                                ...(0, _.Am)(_.e8.imageSlider.IMAGE_SLIDER_MODAL_CLOSE_BUTTON),
                            }),
                            (0, s.jsx)('div', {
                                className: S().content,
                                children: (0, s.jsx)(p.RC, {
                                    initialSlide: l.initialSlideIndex,
                                    className: S().slider,
                                    wrapperClass: S().wrapper,
                                    ref: y,
                                    onActiveIndexChange: M,
                                    a11y: { enabled: !0, containerMessage: r({ id: 'slider.image-slider-modal' }) },
                                    pagination: { dynamicBullets: !0, dynamicMainBullets: 4 },
                                    modules: [m.dK, m.s3],
                                    keyboard: !0,
                                    children:
                                        null == (a = l.images)
                                            ? void 0
                                            : a.map((e, t) => {
                                                  var a, i;
                                                  let n = ((e, t) => e >= t - 5 && e <= t + 5)(t, L) ? e : void 0;
                                                  return (0, s.jsxs)(
                                                      p.qr,
                                                      {
                                                          className: S().slide,
                                                          ...(0, _.Am)(_.e8.imageSlider.IMAGE_SLIDER_MODAL_SLIDE),
                                                          children: [
                                                              (0, s.jsx)(h.Image, {
                                                                  fit: 'contain',
                                                                  className: (0, o.$)(S().image, { [S().image_loading]: !l.isImageLoaded(n) }),
                                                                  src: n,
                                                                  size: l.sizeImage,
                                                                  tabIndex: t === L ? 0 : -1,
                                                                  'aria-roledescription': r({ id: 'slider.slide' }),
                                                                  'aria-label': r(
                                                                      { id: 'slider.image-counter' },
                                                                      { index: t + 1, count: null != (i = null == (a = l.images) ? void 0 : a.length) ? i : 0 },
                                                                  ),
                                                                  onLoadBySrc: l.setImageIsLoaded,
                                                                  withLoadingIndicator: !1,
                                                                  withSrcSet: !1,
                                                                  withAvatarReplace: !0,
                                                                  withAspectRatio: l.withAspectRatio,
                                                              }),
                                                              t === L &&
                                                                  (0, s.jsx)('div', {
                                                                      className: (0, o.$)(S().loadingIndicator, { [S().loadingIndicator_showed]: !l.isImageLoaded(n) }),
                                                                      children: (0, s.jsx)(x.y, { size: 'm' }),
                                                                  }),
                                                          ],
                                                      },
                                                      t,
                                                  );
                                              }),
                                }),
                            }),
                        ],
                    })
                );
            });
        },
        65215: (e) => {
            e.exports = {
                root: 'NavbarDesktopPlusOptionsBar_root__2WZsH',
                addition: 'NavbarDesktopPlusOptionsBar_addition__DJOlV',
                title: 'NavbarDesktopPlusOptionsBar_title__wGODi',
                buttons: 'NavbarDesktopPlusOptionsBar_buttons__lzCHr',
                optionIcon: 'NavbarDesktopPlusOptionsBar_optionIcon__O1ccD',
            };
        },
        65969: (e, t, a) => {
            'use strict';
            a.d(t, { ov: () => E, k8: () => m, fZ: () => o });
            var i = a(60754),
                n = a(28315),
                l = a(82736),
                r = a(78651);
            let s = (e) => {
                    let {
                        isModal: t,
                        withShadow: a,
                        closeActionId: n,
                        bgUrl: s,
                        bgUrlLarge: o,
                        bgColor: d,
                        logoUrl: c,
                        title: u,
                        text: m,
                        titleColor: p,
                        textColor: _,
                        buttons: g,
                        disclaimer: v,
                        disclaimerColor: b,
                    } = e;
                    return (0, i.wg)({
                        isModal: (0, l.toBoolean)(t),
                        withShadow: (0, l.toBoolean)(a),
                        closeActionId: n || null,
                        bgUrl: s || null,
                        bgUrlLarge: o || null,
                        bgColor: d || null,
                        logoUrl: c || null,
                        title: u || null,
                        text: m || null,
                        titleColor: p || null,
                        textColor: _ || null,
                        buttons: g.filter((e) => e.text).map(r.cZ),
                        disclaimer: v || null,
                        disclaimerColor: b || null,
                    });
                },
                o = (e) => {
                    let t = 'data' in e ? s(e.data) : s(e.div),
                        a = 'feedbackToken' in e ? e.feedbackToken : null,
                        l = 'anchorId' in e ? e.anchorId : n.v.ON_START_FULLSCREEN;
                    return (0, i.wg)({ anchorId: l, screenId: e.screenId, content: t, feedbackToken: a });
                };
            var d = a(95428);
            let c = i.gK.model('CommunicationModalContentModel', {
                    isModal: i.gK.boolean,
                    withShadow: i.gK.boolean,
                    closeActionId: i.gK.maybeNull(i.gK.string),
                    bgUrl: i.gK.maybeNull(i.gK.string),
                    bgUrlLarge: i.gK.maybeNull(i.gK.string),
                    bgColor: i.gK.maybeNull(i.gK.string),
                    logoUrl: i.gK.maybeNull(i.gK.string),
                    title: i.gK.maybeNull(i.gK.string),
                    titleColor: i.gK.maybeNull(i.gK.string),
                    text: i.gK.maybeNull(i.gK.string),
                    textColor: i.gK.maybeNull(i.gK.string),
                    buttons: i.gK.array(r.__),
                    disclaimer: i.gK.maybeNull(i.gK.string),
                    disclaimerColor: i.gK.maybeNull(i.gK.string),
                }),
                u = i.gK.model('CommunicationModal', {
                    anchorId: i.gK.enumeration(Object.values(n.v)),
                    screenId: i.gK.string,
                    content: c,
                    feedbackToken: i.gK.maybeNull(i.gK.string),
                }),
                m = d.qt
                    .props({ anchorId: i.gK.maybe(i.gK.enumeration(Object.values(n.v))), list: i.gK.array(u) })
                    .views((e) => ({
                        get modalItem() {
                            return e.list.find((t) => t.anchorId === e.anchorId);
                        },
                    }))
                    .actions((e) => ({
                        setAnchorId(t) {
                            e.anchorId = t;
                        },
                    }));
            var p = a(32290),
                _ = a(63618),
                g = a(96103),
                v = a(55178),
                b = a(60900),
                h = a(59824),
                I = a(63423),
                x = a(82586),
                N = a(50162),
                A = a(84638),
                S = a(71926),
                y = a(49574),
                C = a(44574),
                T = a(70009),
                f = a.n(T);
            let E = (0, g.PA)((e) => {
                var t, a, i, n, l, s;
                let { modal: o } = e,
                    { formatMessage: d } = (0, b.A)(),
                    { communication: c } = (0, y.Pjs)(),
                    u = null == (t = o.modalItem) ? void 0 : t.content.isModal,
                    m = (0, v.useMemo)(() => {
                        var e;
                        return null == (e = o.modalItem)
                            ? void 0
                            : e.content.buttons.map((e) => {
                                  var t;
                                  return (0, p.jsx)(
                                      r.tL,
                                      {
                                          screenId: null == (t = o.modalItem) ? void 0 : t.screenId,
                                          anchorId: o.anchorId,
                                          button: e,
                                          buttonSize: 'default',
                                          buttonClassName: f().button,
                                          textClassName: f().buttonText,
                                          hide: o.close,
                                          feedbackToken: o.modalItem ? o.modalItem.feedbackToken : null,
                                      },
                                      e.text,
                                  );
                              });
                    }, [o]),
                    g = (0, v.useMemo)(() => {
                        let e = { bg: {}, title: {}, text: {}, disclaimer: {} };
                        if (!o.modalItem) return e;
                        let { bgUrl: t, bgUrlLarge: a, bgColor: i, titleColor: n, textColor: l, disclaimerColor: r } = o.modalItem.content;
                        return (
                            t && (e.bg['--bg-url'] = 'url("'.concat(t, '")')),
                            a && (e.bg['--bg-url-large'] = 'url("'.concat(a, '")')),
                            i && (e.bg.backgroundColor = i),
                            n && (e.title.color = n),
                            l && (e.text.color = l),
                            r && (e.disclaimer.color = r),
                            e
                        );
                    }, [o]),
                    T = (0, v.useCallback)(() => {
                        o.modalItem &&
                            o.modalItem.content.closeActionId &&
                            c.action(o.modalItem.anchorId, o.modalItem.screenId, o.modalItem.content.closeActionId, o.modalItem.feedbackToken),
                            o.close();
                    }, [o, c]),
                    E = (0, v.useMemo)(() => {
                        var e;
                        if (null == (e = o.modalItem) ? void 0 : e.content.logoUrl)
                            return (0, p.jsx)(N.Image, {
                                className: f().image,
                                withAvatarReplace: !0,
                                withFallback: !1,
                                src: o.modalItem.content.logoUrl,
                                withAspectRatio: !0,
                                size: 400,
                                fit: 'cover',
                            });
                    }, [o]),
                    L = (0, v.useMemo)(() => {
                        var e;
                        return (
                            (null == (e = o.modalItem) ? void 0 : e.content.disclaimer) &&
                            (0, y.rVI)(o.modalItem.content.disclaimer, C.N_, { className: f().disclaimerLink, style: g.disclaimer, target: '_blank' })
                        );
                    }, [o, g]);
                return (0, p.jsxs)(A.a, {
                    style: g.bg,
                    className: (0, _.$)(f().root, u ? f().root_modal : f().root_fullscreen),
                    headerClassName: f().modalHeader,
                    contentClassName: f().modalContent,
                    header:
                        E &&
                        (0, p.jsx)('div', {
                            className: (0, _.$)(f().imageWrapper, f().imageWrapper_header),
                            ...(0, h.Am)(h.Kq.communicationModal.COMMUNICATION_MODAL_HEADER_LOGO),
                            children: E,
                        }),
                    open: o.isOpened,
                    onOpenChange: o.onOpenChange,
                    onClose: T,
                    closeOnOutsidePress: !1,
                    size: u ? 'fitContent' : 'fullscreen',
                    placement: 'center',
                    labelClose: d({ id: 'interface-actions.close' }),
                    customCloseButton: (0, p.jsx)(
                        I.$,
                        {
                            radius: 'round',
                            size: 'xxs',
                            icon: (0, p.jsx)(x.Icon, { className: f().closeButtonIcon, variant: 'close', size: 'xxs' }),
                            onClick: T,
                            'aria-label': d({ id: 'interface-actions.close' }),
                            className: f().closeButton,
                            withHover: !1,
                            ...(0, h.Am)(h.Kq.communicationModal.COMMUNICATION_MODAL_CLOSE_CROSS_BUTTON),
                        },
                        ''.concat(null == (a = o.modalItem) ? void 0 : a.anchorId, '-').concat(null == (i = o.modalItem) ? void 0 : i.content.closeActionId),
                    ),
                    ...(0, h.Am)(h.Kq.communicationModal.COMMUNICATION_MODAL),
                    children: [
                        (0, p.jsxs)('div', {
                            className: f().container,
                            children: [
                                (0, p.jsxs)('div', {
                                    className: f().wrapper,
                                    children: [
                                        E &&
                                            (0, p.jsx)('div', {
                                                className: (0, _.$)(f().imageWrapper, f().imageWrapper_content),
                                                ...(0, h.Am)(h.Kq.communicationModal.COMMUNICATION_MODAL_CONTENT_LOGO),
                                                children: E,
                                            }),
                                        (null == (n = o.modalItem) ? void 0 : n.content.title) &&
                                            (0, p.jsx)(S.Heading, {
                                                className: f().title,
                                                style: g.title,
                                                size: 'xl',
                                                weight: 'black',
                                                variant: 'h1',
                                                lineClamp: 3,
                                                ...(0, h.Am)(h.Kq.communicationModal.COMMUNICATION_MODAL_TITLE_TEXT),
                                                children: o.modalItem.content.title,
                                            }),
                                        (null == (l = o.modalItem) ? void 0 : l.content.text) &&
                                            (0, p.jsx)(S.Heading, {
                                                className: f().text,
                                                style: g.text,
                                                size: 'xs',
                                                variant: 'h2',
                                                lineClamp: 4,
                                                ...(0, h.Am)(h.Kq.communicationModal.COMMUNICATION_MODAL_CONTENT_TEXT),
                                                children: o.modalItem.content.text,
                                            }),
                                        (0, p.jsx)(y.rtM, {
                                            page: y.l7W.MUSIC_DEEPLINK_SCREEN,
                                            places: [y.RBW.TOP_BUTTON],
                                            children: (0, p.jsx)('div', { className: f().buttons, children: m }),
                                        }),
                                    ],
                                }),
                                (0, p.jsx)('div', {
                                    className: f().disclaimerWrapper,
                                    children: (0, p.jsx)(S.Caption, {
                                        className: f().disclaimer,
                                        style: g.disclaimer,
                                        type: 'text',
                                        variant: 'div',
                                        size: 'xs',
                                        weight: 'medium',
                                        ...(0, h.Am)(h.Kq.communicationModal.COMMUNICATION_MODAL_DISCLAIMER),
                                        children: L,
                                    }),
                                }),
                            ],
                        }),
                        !u && (null == (s = o.modalItem) ? void 0 : s.content.withShadow) && (0, p.jsx)('div', { className: f().gradientOverlay }),
                    ],
                });
            });
        },
        66666: (e) => {
            e.exports = {
                root: 'ImageSliderModal_root__AZO_D',
                root_mobile: 'ImageSliderModal_root_mobile__lBg8o',
                modalContent: 'ImageSliderModal_modalContent__R7c_w',
                closeButton: 'ImageSliderModal_closeButton__mabus',
                content: 'ImageSliderModal_content__Gjm6N',
                image: 'ImageSliderModal_image__ZUYEL',
                image_loading: 'ImageSliderModal_image_loading__1Fyyn',
                leftArrowWrapper: 'ImageSliderModal_leftArrowWrapper__2d5RO',
                rightArrowWrapper: 'ImageSliderModal_rightArrowWrapper__vSPiO',
                slider: 'ImageSliderModal_slider__gDVWR',
                'swiper-pagination-disabled': 'ImageSliderModal_swiper-pagination-disabled__l_U2N',
                'swiper-pagination-clickable': 'ImageSliderModal_swiper-pagination-clickable__URGM_',
                'swiper-rtl': 'ImageSliderModal_swiper-rtl__6n6TQ',
                'swiper-horizontal': 'ImageSliderModal_swiper-horizontal__qVsPY',
                'swiper-vertical': 'ImageSliderModal_swiper-vertical__fVuXc',
                wrapper: 'ImageSliderModal_wrapper__s31SU',
                slide: 'ImageSliderModal_slide__4VnYF',
                loadingIndicator: 'ImageSliderModal_loadingIndicator__3yfbk',
                loadingIndicator_showed: 'ImageSliderModal_loadingIndicator_showed__Ec0yW',
            };
        },
        69200: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedDownloadBarMinimized_root__nEPqZ',
                icon: 'NavbarDesktopAnimatedDownloadBarMinimized_icon__Y2hec',
                button: 'NavbarDesktopAnimatedDownloadBarMinimized_button__hesBw',
            };
        },
        70009: (e) => {
            e.exports = {
                modalHeader: 'CommunicationModal_modalHeader__TnzU6',
                modalContent: 'CommunicationModal_modalContent__d8REH',
                container: 'CommunicationModal_container__BIgb7',
                wrapper: 'CommunicationModal_wrapper__SRy17',
                imageWrapper: 'CommunicationModal_imageWrapper__LOr5C',
                imageWrapper_content: 'CommunicationModal_imageWrapper_content__PfjQl',
                imageWrapper_header: 'CommunicationModal_imageWrapper_header__8wsRZ',
                image: 'CommunicationModal_image__qzXK8',
                title: 'CommunicationModal_title__yvFAn',
                text: 'CommunicationModal_text__gGaLU',
                buttons: 'CommunicationModal_buttons__MDmp2',
                disclaimerWrapper: 'CommunicationModal_disclaimerWrapper__pMRYf',
                disclaimer: 'CommunicationModal_disclaimer__NJJSA',
                disclaimerLink: 'CommunicationModal_disclaimerLink__8yuBO',
                root: 'CommunicationModal_root__1dOYE',
                root_modal: 'CommunicationModal_root_modal__u_igG',
                button: 'CommunicationModal_button__qysqU',
                root_fullscreen: 'CommunicationModal_root_fullscreen__41Y5Y',
                gradientOverlay: 'CommunicationModal_gradientOverlay__MOg5g',
                buttonText: 'CommunicationModal_buttonText__2XS8u',
                closeButton: 'CommunicationModal_closeButton__EP7ay',
                closeButtonIcon: 'CommunicationModal_closeButtonIcon__ujXug',
            };
        },
        70042: (e) => {
            e.exports = {
                root: 'TrackModalControls_root__alpd3',
                controlsContainer: 'TrackModalControls_controlsContainer__UeQb4',
                menuWrapper: 'TrackModalControls_menuWrapper__tDLID',
                menuButton: 'TrackModalControls_menuButton__V6L4c',
                disabledButtonByDisclaimer: 'TrackModalControls_disabledButtonByDisclaimer__qfCvg',
            };
        },
        70524: (e, t, a) => {
            'use strict';
            a.d(t, { x8: () => W, J4: () => p, _n: () => i, hj: () => s });
            var i = (function (e) {
                    return (e.INFO = 'INFO'), (e.SUCCESS = 'SUCCESS'), e;
                })({}),
                n = a(55178),
                l = a(49574);
            let r = { INVITE_ID: 'invite_id', UTM_MEDIUM: 'utm_medium' },
                s = () => {
                    let { user: e } = (0, l.Pjs)(),
                        t = (0, l.XJ9)(),
                        { inviteIdSearchParam: a, hasNecessarySearchParams: i } = (0, n.useMemo)(() => {
                            let e = (0, l.qne)(r.INVITE_ID),
                                t = !!(e && 'copy_link' === (0, l.qne)(r.UTM_MEDIUM));
                            return { inviteIdSearchParam: e, hasNecessarySearchParams: t };
                        }, []),
                        s = (0, n.useCallback)(() => {
                            let e = (0, l.jrm)();
                            if (null === e) return;
                            e.delete(r.INVITE_ID), e.delete(r.UTM_MEDIUM);
                            let a = new URL(window.location.href);
                            (a.search = e.toString()), t(a.toString());
                        }, [t]);
                    return { inviteId: a, shouldShowFamilyInvite: !!(!e.hasPlus && i), clear: s };
                };
            var o = a(60754),
                d = a(87953),
                c = a(95428),
                u = (function (e) {
                    return (
                        (e.SUBSCRIPTION_IS_NOT_AVAILABLE = 'SUBSCRIPTION_IS_NOT_AVAILABLE'),
                        (e.INVITATION_IS_INVALID = 'INVITATION_IS_INVALID'),
                        (e.UNKNOWN = 'UNKNOWN'),
                        e
                    );
                })({});
            let m = o.gK.model('FamilyInviteInfoModel', { name: o.gK.string, avatarUrl: o.gK.string }),
                p = o.gK
                    .model('FamilyInviteModel', {
                        info: o.gK.model({ loadingState: o.gK.enumeration(Object.values(l.GuX)), data: o.gK.maybeNull(m) }),
                        acceptanceLoadingState: o.gK.enumeration(Object.values(l.GuX)),
                        isSuccess: o.gK.maybe(o.gK.boolean),
                        modal: c.qt,
                        step: o.gK.enumeration('Step', Object.values(i)),
                        inviteId: o.gK.maybeNull(o.gK.string),
                        error: o.gK.maybeNull(o.gK.enumeration(Object.values(u))),
                    })
                    .views((e) => ({
                        get hasError() {
                            return !!e.error;
                        },
                        get isInfoShimmerVisible() {
                            return e.info.loadingState === l.GuX.IDLE || e.info.loadingState === l.GuX.PENDING;
                        },
                        get isInfoShimmerActive() {
                            return e.info.loadingState === l.GuX.PENDING;
                        },
                        get isAcceptanceActive() {
                            return e.acceptanceLoadingState === l.GuX.PENDING;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            start(a) {
                                t.setInviteId(a), e.modal.open(), t.getInviteInfo();
                            },
                            retry: (0, o.L3)(function* () {
                                t.setError(null), t.toggleStepInfo(), e.info.loadingState !== l.GuX.RESOLVE && (yield t.getInviteInfo());
                            }),
                            getInviteInfo: (0, o.L3)(function* () {
                                let { familyResource: a, modelActionsLogger: i } = (0, o._$)(e);
                                if (e.inviteId && e.info.loadingState !== l.GuX.PENDING)
                                    try {
                                        e.info.loadingState = l.GuX.PENDING;
                                        let i = { inviteId: e.inviteId },
                                            n = yield a.getInviteInfo(i);
                                        if (!n.hasPlus) {
                                            t.setError(u.SUBSCRIPTION_IS_NOT_AVAILABLE), (e.info.loadingState = l.GuX.RESOLVE);
                                            return;
                                        }
                                        (e.info.data = ((e) => {
                                            let { name: t, avatarUrl: a } = e;
                                            return (0, o.wg)({ name: t, avatarUrl: a });
                                        })(n)),
                                            (e.info.loadingState = l.GuX.RESOLVE);
                                    } catch (a) {
                                        if (((e.info.loadingState = l.GuX.REJECT), i.error(a), a instanceof d.GX && a.statusCode === d.X1.BAD_REQUEST))
                                            return void t.setError(u.INVITATION_IS_INVALID);
                                        t.setError(u.UNKNOWN);
                                    }
                            }),
                            acceptInvite: (0, o.L3)(function* () {
                                let { familyResource: a, modelActionsLogger: i } = (0, o._$)(e);
                                if (e.inviteId && e.acceptanceLoadingState !== l.GuX.PENDING)
                                    try {
                                        e.acceptanceLoadingState = l.GuX.PENDING;
                                        let i = { inviteId: e.inviteId };
                                        yield a.acceptInvite(i), (e.acceptanceLoadingState = l.GuX.RESOLVE), t.toggleStateSuccessTrue();
                                    } catch (a) {
                                        if (((e.acceptanceLoadingState = l.GuX.REJECT), i.error(a), a instanceof d.GX && a.statusCode === d.X1.BAD_REQUEST))
                                            return void t.setError(u.INVITATION_IS_INVALID);
                                        t.setError(u.UNKNOWN);
                                    }
                            }),
                            toggleStepInfo() {
                                e.step = i.INFO;
                            },
                            toggleStepSuccess() {
                                e.step = i.SUCCESS;
                            },
                            setError(t) {
                                e.error = t;
                            },
                            setInviteId(t) {
                                e.inviteId = t;
                            },
                            toggleStateSuccessTrue() {
                                t.toggleStepSuccess(), (e.isSuccess = !0);
                            },
                            reset() {
                                (e.acceptanceLoadingState = l.GuX.IDLE),
                                    (e.error = null),
                                    (e.info.loadingState = l.GuX.IDLE),
                                    (e.info.data = null),
                                    (e.inviteId = null),
                                    (e.step = i.INFO),
                                    (e.isSuccess = !1);
                            },
                        };
                        return t;
                    });
            var _ = a(32290),
                g = a(96103),
                v = a(59824),
                b = a(44574);
            let h = () => {
                let {
                    familyInvite: { modal: e, isSuccess: t, reset: a },
                } = (0, l.Pjs)();
                return (0, n.useCallback)(() => {
                    if ((e.close(), t)) return void window.location.reload();
                    a();
                }, [e, t, a]);
            };
            var I = a(63618),
                x = a(50162),
                N = a(44855),
                A = a.n(N),
                S = a(60900),
                y = a(39407),
                C = a(71926);
            let T = (0, g.PA)(() => {
                    let { formatMessage: e } = (0, S.A)(),
                        {
                            settings: { isMobile: t },
                        } = (0, l.Pjs)(),
                        a = h();
                    return (0, _.jsxs)(_.Fragment, {
                        children: [
                            (0, _.jsxs)('div', {
                                className: b.SE.text,
                                children: [
                                    (0, _.jsx)(C.Heading, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: b.SE.title,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE),
                                        children: (0, _.jsx)(y.A, { id: 'family.invitation-error-title' }),
                                    }),
                                    (0, _.jsx)(C.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        className: b.SE.description,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION),
                                        children: (0, _.jsx)(y.A, { id: 'family.invitation-error-description' }),
                                    }),
                                ],
                            }),
                            (0, _.jsx)('div', {
                                className: b.SE.buttons,
                                children: (0, _.jsx)(b.mv, {
                                    color: 'primary',
                                    isMobile: t,
                                    text: e({ id: 'interface-actions.confirm' }),
                                    onClick: a,
                                    ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_INVITATION_ERROR_BUTTON_CONFIRM),
                                }),
                            }),
                        ],
                    });
                }),
                f = (0, g.PA)(() => {
                    let { formatMessage: e } = (0, S.A)(),
                        {
                            settings: { isMobile: t },
                            paywall: { modal: a },
                        } = (0, l.Pjs)(),
                        i = h(),
                        r = (0, n.useCallback)(() => {
                            i(), a.open();
                        }, [i, a]);
                    return (0, _.jsxs)(_.Fragment, {
                        children: [
                            (0, _.jsxs)('div', {
                                className: b.SE.text,
                                children: [
                                    (0, _.jsx)(C.Heading, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: b.SE.title,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE),
                                        children: (0, _.jsx)(y.A, { id: 'family.subscription-error-title' }),
                                    }),
                                    (0, _.jsx)(C.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        className: b.SE.description,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION),
                                        children: (0, _.jsx)(y.A, { id: 'family.subscription-error-description' }),
                                    }),
                                ],
                            }),
                            (0, _.jsxs)('div', {
                                className: b.SE.buttons,
                                children: [
                                    (0, _.jsx)(b.mv, {
                                        color: 'primary',
                                        isMobile: t,
                                        text: e({ id: 'family.about1' }),
                                        onClick: r,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_SUBSCRIPTION_ERROR_BUTTON_ABOUT),
                                    }),
                                    (0, _.jsx)(b.mv, {
                                        color: 'secondary',
                                        isMobile: t,
                                        text: (0, _.jsx)(y.A, { id: 'family.later' }),
                                        onClick: i,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_SUBSCRIPTION_ERROR_BUTTON_LATER),
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                E = (0, g.PA)(() => {
                    let { formatMessage: e } = (0, S.A)(),
                        {
                            familyInvite: { retry: t },
                        } = (0, l.Pjs)();
                    return (0, _.jsxs)(_.Fragment, {
                        children: [
                            (0, _.jsxs)('div', {
                                className: b.SE.text,
                                children: [
                                    (0, _.jsx)(C.Heading, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: b.SE.title,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE),
                                        children: (0, _.jsx)(y.A, { id: 'family.unknown-error-title' }),
                                    }),
                                    (0, _.jsx)(C.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        className: b.SE.description,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION),
                                        children: (0, _.jsx)(y.A, { id: 'family.unknown-error-description' }),
                                    }),
                                ],
                            }),
                            (0, _.jsx)('div', {
                                className: b.SE.buttons,
                                children: (0, _.jsx)(b.mv, {
                                    color: 'primary',
                                    text: e({ id: 'family.retry' }),
                                    onClick: t,
                                    ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_UNKNOWN_ERROR_BUTTON_RETRY),
                                }),
                            }),
                        ],
                    });
                }),
                L = { [u.INVITATION_IS_INVALID]: (0, _.jsx)(T, {}), [u.SUBSCRIPTION_IS_NOT_AVAILABLE]: (0, _.jsx)(f, {}), [u.UNKNOWN]: (0, _.jsx)(E, {}) },
                P = (0, g.PA)(() => {
                    let {
                            familyInvite: { error: e },
                            settings: { isMobile: t },
                        } = (0, l.Pjs)(),
                        a = t || e === u.SUBSCRIPTION_IS_NOT_AVAILABLE;
                    return (0, _.jsxs)(_.Fragment, {
                        children: [
                            (0, _.jsx)('div', {
                                className: (0, I.$)(b.SE.growContainer, b.SE.growContainer_withoutPaddings),
                                children: (0, _.jsx)(x.Image, {
                                    className: (0, I.$)(A().image, { [A().image_small]: a }),
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.6724b88e3c0f01402213116b/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.6724b88c3c0f01402213116a/orig 2x',
                                    fit: 'contain',
                                    'aria-hidden': !0,
                                }),
                            }),
                            L[null != e ? e : u.UNKNOWN],
                        ],
                    });
                });
            var j = a(21916),
                R = a(82586),
                k = a(22127),
                M = a(23791),
                O = a.n(M);
            let w = (e) => {
                let { avatarSrc: t, name: a, isMobile: i } = e;
                return (0, _.jsxs)('div', {
                    className: (0, I.$)(O().root, { [O().root_mobile]: i }),
                    children: [
                        (0, _.jsx)(k.ny, {
                            className: (0, I.$)(O().icon, O().important),
                            avatarSrc: t,
                            hasPlus: !0,
                            ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_INVITER_AVATAR),
                        }),
                        (0, _.jsx)(C.Caption, {
                            className: O().name,
                            variant: 'div',
                            size: 'm',
                            ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_INVITER_NAME),
                            children: a,
                        }),
                    ],
                });
            };
            var B = a(79856);
            let D = (e) => {
                let { isActive: t, isMobile: a } = e;
                return (0, _.jsxs)('div', {
                    className: (0, I.$)(O().root, { [O().root_mobile]: a }),
                    children: [
                        (0, _.jsx)(B.Shimmer, { className: O().iconShimmer, isActive: t, radius: 'round' }),
                        (0, _.jsx)(B.Shimmer, { className: O().nameShimmer, isActive: t, radius: 'xs' }),
                    ],
                });
            };
            var K = a(85067),
                U = a.n(K);
            let V = (0, g.PA)(() => {
                let {
                        user: e,
                        location: t,
                        settings: { isMobile: a },
                        familyInvite: {
                            isInfoShimmerVisible: i,
                            isInfoShimmerActive: r,
                            isAcceptanceActive: s,
                            info: { data: o },
                            acceptInvite: d,
                        },
                    } = (0, l.Pjs)(),
                    { name: c = '', avatarUrl: u = '' } = o || {},
                    m = (0, l.NFA)(),
                    p = (0, j.useRouter)(),
                    g = m.get(l.QGx),
                    x = h(),
                    N = (0, n.useCallback)(() => {
                        if (!e.isAuthorized) {
                            g.authorizationUrl && p.push(g.authorizationUrl);
                            return;
                        }
                        d();
                    }, [g.authorizationUrl, p, e.isAuthorized, d]),
                    A = (0, n.useMemo)(() => (i ? (0, _.jsx)(D, { isActive: r, isMobile: a }) : (0, _.jsx)(w, { avatarSrc: u, name: c, isMobile: a })), [i, r, a, u, c]),
                    S = (0, n.useMemo)(
                        () =>
                            i
                                ? (0, _.jsx)(b.bb, { isActive: r, isMobile: a })
                                : (0, _.jsx)(b.mv, {
                                      color: 'plus',
                                      isMobile: a,
                                      text: (0, _.jsx)(y.A, { id: 'family.accept' }),
                                      onClick: N,
                                      showSpinner: s,
                                      ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_BUTTON_ACCEPT),
                                  }),
                        [i, r, s, a, N],
                    );
                return (0, _.jsxs)(_.Fragment, {
                    children: [
                        (0, _.jsx)('div', { className: (0, I.$)(b.SE.growContainer, U().growContainer, U().important), children: A }),
                        (0, _.jsxs)('div', {
                            className: b.SE.text,
                            children: [
                                (0, _.jsx)(C.Heading, {
                                    variant: 'h1',
                                    size: 'xl',
                                    className: b.SE.title,
                                    ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_TITLE),
                                    children: (0, _.jsx)(y.A, { id: 'family.info-title', values: { br: '\n' } }),
                                }),
                                (0, _.jsx)(C.Caption, {
                                    variant: 'span',
                                    size: 'm',
                                    className: b.SE.description,
                                    ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_DESCRIPTION),
                                    children: (0, _.jsx)(y.A, { id: 'family.info-description', values: { br: '\n' } }),
                                }),
                                (0, _.jsx)(b.N_, {
                                    target: '_blank',
                                    href: 'https://yandex.'.concat(t.tld, '/legal/yandex_plus_conditions/'),
                                    icon: (0, _.jsx)(R.Icon, { variant: 'arrowRight', size: 'xxxs', className: b.SE.linkArrow }),
                                    iconPosition: 'right',
                                    className: b.SE.link,
                                    containerClassName: b.SE.linkContainer,
                                    ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_TERMS),
                                    children: (0, _.jsx)(C.Caption, { type: 'controls', variant: 'span', size: 'm', children: (0, _.jsx)(y.A, { id: 'family.terms' }) }),
                                }),
                            ],
                        }),
                        (0, _.jsxs)('div', {
                            className: b.SE.buttons,
                            children: [
                                S,
                                (0, _.jsx)(b.mv, {
                                    color: 'secondary',
                                    isMobile: a,
                                    text: (0, _.jsx)(y.A, { id: 'family.reject' }),
                                    onClick: x,
                                    ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_BUTTON_REJECT),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var F = a(27923),
                G = a.n(F);
            let z = (0, g.PA)(() => {
                    let {
                            location: e,
                            settings: { isMobile: t },
                        } = (0, l.Pjs)(),
                        a = h();
                    return (0, _.jsxs)(_.Fragment, {
                        children: [
                            (0, _.jsx)('div', {
                                className: b.SE.growContainer,
                                children: (0, _.jsx)(x.Image, {
                                    className: (0, I.$)(G().image, { [G().image_mobile]: t }),
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.6724a5445724776f278ec59d/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.6724a5445724776f278ec59d/orig 2x',
                                    fit: 'contain',
                                    'aria-hidden': !0,
                                }),
                            }),
                            (0, _.jsxs)('div', {
                                className: b.SE.text,
                                children: [
                                    (0, _.jsx)(C.Heading, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: b.SE.title,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_TITLE),
                                        children: (0, _.jsx)(y.A, { id: 'family.success-title' }),
                                    }),
                                    (0, _.jsx)(C.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        className: b.SE.description,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_DESCRIPTION),
                                        children: (0, _.jsx)(y.A, { id: 'family.success-description', values: { br: '\n' } }),
                                    }),
                                    (0, _.jsx)(b.N_, {
                                        target: '_blank',
                                        href: 'https://plus.yandex.'.concat(e.tld, '/'),
                                        icon: (0, _.jsx)(R.Icon, { variant: 'arrowRight', size: 'xxxs', className: b.SE.linkArrow }),
                                        iconPosition: 'right',
                                        className: b.SE.link,
                                        containerClassName: b.SE.linkContainer,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_ABOUT),
                                        children: (0, _.jsx)(C.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, _.jsx)(y.A, { id: 'family.about' }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, _.jsx)('div', {
                                className: b.SE.buttons,
                                children: (0, _.jsx)(b.mv, {
                                    color: 'plus',
                                    isMobile: t,
                                    text: (0, _.jsx)(y.A, { id: 'family.go-to-music' }),
                                    onClick: a,
                                    ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_BUTTON_FINISH),
                                }),
                            }),
                        ],
                    });
                }),
                X = { [i.INFO]: (0, _.jsx)(V, {}), [i.SUCCESS]: (0, _.jsx)(z, {}) },
                W = (0, g.PA)(() => {
                    let {
                            familyInvite: { modal: e, step: t, hasError: a },
                        } = (0, l.Pjs)(),
                        i = h(),
                        r = (0, n.useCallback)(
                            (t) => {
                                t || i(), e.onOpenChange(t);
                            },
                            [i, e],
                        ),
                        s = (0, n.useMemo)(() => (a ? (0, _.jsx)(P, {}) : X[t]), [a, t]);
                    return (0, _.jsx)(b.cu, {
                        open: e.isOpened,
                        hasError: a,
                        onOpenChange: r,
                        onClose: i,
                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL),
                        children: s,
                    });
                });
        },
        70583: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedPlusOptionsBar_root__dOEU7',
                button: 'NavbarDesktopAnimatedPlusOptionsBar_button__NRXbJ',
                important: 'NavbarDesktopAnimatedPlusOptionsBar_important__mltBe',
                icon: 'NavbarDesktopAnimatedPlusOptionsBar_icon__EKWgb',
                optionIcon: 'NavbarDesktopAnimatedPlusOptionsBar_optionIcon__gPbRm',
                popoverContent: 'NavbarDesktopAnimatedPlusOptionsBar_popoverContent__wSXo7',
            };
        },
        71904: (e) => {
            e.exports = {
                root_primary: 'CommunicationButton_root_primary__rrmax',
                root_plus: 'CommunicationButton_root_plus__d48MV',
                root_secondary: 'CommunicationButton_root_secondary__YQujH',
                text: 'CommunicationButton_text__kObnq',
            };
        },
        74696: (e) => {
            e.exports = {
                root: 'VideoPlayerBarDesktop_root__OxypO',
                info: 'VideoPlayerBarDesktop_info__ulYvU',
                infoCard: 'VideoPlayerBarDesktop_infoCard__mE___',
                coverContainer: 'VideoPlayerBarDesktop_coverContainer__xV_VP',
                cover: 'VideoPlayerBarDesktop_cover__Nf4WW',
                description: 'VideoPlayerBarDesktop_description__sAiwG',
                artists: 'VideoPlayerBarDesktop_artists__PNY62',
                artistLink: 'VideoPlayerBarDesktop_artistLink__FgFZ8',
                infoButtons: 'VideoPlayerBarDesktop_infoButtons__9xWZ3',
                sonata: 'VideoPlayerBarDesktop_sonata__VrtGS',
                meta: 'VideoPlayerBarDesktop_meta__KlPBv',
                slider: 'VideoPlayerBarDesktop_slider__xULTh',
                important: 'VideoPlayerBarDesktop_important__HR9Xf',
            };
        },
        75797: (e) => {
            e.exports = {
                root: 'BuySubscriptionBanner_root__y2M_5',
                logos: 'BuySubscriptionBanner_logos__LHOzM',
                title: 'BuySubscriptionBanner_title___sWo0',
                plusButton: 'BuySubscriptionBanner_plusButton__UwULz',
                plusButtonShimmer: 'BuySubscriptionBanner_plusButtonShimmer__nS7im',
            };
        },
        77837: (e) => {
            e.exports = {
                root: 'VideoPlayerBarContainerDesktop_root__Aw4GO',
                root_visible: 'VideoPlayerBarContainerDesktop_root_visible__F_7vs',
                root_withHoveredCarousel: 'VideoPlayerBarContainerDesktop_root_withHoveredCarousel__2gzlW',
                carouselWrapper: 'VideoPlayerBarContainerDesktop_carouselWrapper__HN1rc',
                carousel: 'VideoPlayerBarContainerDesktop_carousel__15RwT',
                carouselBlock: 'VideoPlayerBarContainerDesktop_carouselBlock__8prtL',
                carouselControls: 'VideoPlayerBarContainerDesktop_carouselControls__OwWar',
                clipCardTitle: 'VideoPlayerBarContainerDesktop_clipCardTitle__4wJ1A',
                important: 'VideoPlayerBarContainerDesktop_important__PBP47',
                clipCardArtist: 'VideoPlayerBarContainerDesktop_clipCardArtist__XegP0',
            };
        },
        78651: (e, t, a) => {
            'use strict';
            a.d(t, { tL: () => A, __: () => o, cZ: () => r });
            var i,
                n,
                l = a(60754);
            let r = (e) => {
                let { text: t, textColor: a, color: i, action: n } = e;
                return (0, l.wg)({
                    text: t || null,
                    textColor: a || null,
                    color: i || null,
                    action:
                        n &&
                        ((e) => {
                            let { id: t, type: a, value: i, communicationId: n } = e;
                            return (0, l.wg)({ id: t || null, type: a || null, value: i || null, communicationId: n || null });
                        })(n),
                });
            };
            !(function (e) {
                (e.CLOSE = 'close'), (e.LINK = 'link'), (e.PAYWALL = 'paywall');
            })(i || (i = {}));
            let s = l.gK.model('CommunicationButtonAction', {
                id: l.gK.maybeNull(l.gK.string),
                type: l.gK.maybeNull(l.gK.enumeration(Object.values(i))),
                value: l.gK.maybeNull(l.gK.string),
                communicationId: l.gK.maybeNull(l.gK.string),
            });
            !(function (e) {
                (e.PRIMARY = 'primary'), (e.SECONDARY = 'secondary'), (e.PLUS = 'plus');
            })(n || (n = {}));
            let o = l.gK.model('CommunicationButton', {
                text: l.gK.maybeNull(l.gK.string),
                color: l.gK.maybeNull(l.gK.enumeration(Object.values(n))),
                action: l.gK.maybeNull(s),
                textColor: l.gK.maybeNull(l.gK.string),
            });
            var d = a(32290),
                c = a(63618),
                u = a(96103),
                m = a(55178),
                p = a(59824),
                _ = a(91027),
                g = a(54862),
                v = a(6752),
                b = a(63423),
                h = a(71926),
                I = a(49574),
                x = a(71904),
                N = a.n(x);
            let A = (0, u.PA)((e) => {
                var t, a, n, l;
                let { anchorId: r, screenId: s, button: o, buttonSize: u, buttonClassName: x, textClassName: A, feedbackToken: S, hide: y } = e,
                    { communication: C } = (0, I.Pjs)(),
                    [T] = (0, g.d)(),
                    { openPaymentWidgetModal: f } = (0, I.DpZ)({
                        storeName: 'music',
                        communicationId: null != (l = null == (t = o.action) ? void 0 : t.communicationId) ? l : '',
                        offerElement: { element: T, intersectionPropertyId: 'barbellow' },
                        isEnabled: !!(null == (a = o.action) ? void 0 : a.communicationId),
                    }),
                    E = ((null == (n = o.action) ? void 0 : n.type) === i.LINK && o.action.value) || '',
                    L = (0, I.ZpR)(E),
                    P = (0, _.c)((e) => {
                        if (o.action)
                            switch ((r && s && o.action.id && C.action(r, s, o.action.id, S), o.action.type)) {
                                case i.PAYWALL:
                                    f(), null == y || y();
                                    return;
                                case i.LINK:
                                    o.action.value && (L(e), null == y || y());
                                    return;
                                case i.CLOSE:
                                    null == y || y();
                                    return;
                            }
                    }),
                    j = (0, m.useMemo)(() => {
                        if (o.textColor) return { color: o.textColor };
                    }, [o.textColor]),
                    R = (0, v.L)(() => {
                        var e;
                        switch (null == (e = o.action) ? void 0 : e.type) {
                            case i.LINK:
                                return p.OA.communicationButton.COMMUNICATION_BUTTON_LINK;
                            case i.CLOSE:
                                return p.OA.communicationButton.COMMUNICATION_BUTTON_CLOSE;
                            default:
                                return p.OA.communicationButton.COMMUNICATION_BUTTON_PAYWALL;
                        }
                    });
                return (0, d.jsx)(b.$, {
                    className: (0, c.$)(N().root, N()['root_'.concat(o.color)], x),
                    role: E ? 'link' : 'button',
                    color: o.color ? o.color : void 0,
                    radius: 'xxxl',
                    onClick: P,
                    size: u,
                    ...(0, p.Am)(R),
                    children: (0, d.jsx)(h.Caption, { className: (0, c.$)(N().text, A), variant: 'div', type: 'text', size: 'm', style: j, children: o.text }),
                });
            });
        },
        81501: (e) => {
            e.exports = { root: 'TicketImage_root__vTgWd' };
        },
        82856: (e) => {
            e.exports = { root: 'TrailerModal_root__T4ZJ8', modalContent: 'TrailerModal_modalContent__ZSNFe', header: 'TrailerModal_header__0h1zj' };
        },
        83218: (e) => {
            e.exports = {
                root: 'FullscreenVideoPlayerDesktop_root__a69Pd',
                important: 'FullscreenVideoPlayerDesktop_important__NvXzL',
                header: 'FullscreenVideoPlayerDesktop_header__oiftJ',
                modalContent: 'FullscreenVideoPlayerDesktop_modalContent__YeGCV',
                closeButton: 'FullscreenVideoPlayerDesktop_closeButton__OqSFs',
                logoLink: 'FullscreenVideoPlayerDesktop_logoLink__o92zi',
                logo_ru: 'FullscreenVideoPlayerDesktop_logo_ru__uRbpz',
                logo_en: 'FullscreenVideoPlayerDesktop_logo_en__mBcdF',
            };
        },
        83278: (e) => {
            e.exports = {
                root: 'BarBelow_root__KFexT',
                root_hidden: 'BarBelow_root_hidden__eTKvU',
                root_show: 'BarBelow_root_show__yIQBX',
                show: 'BarBelow_show__5GQBP',
                root_hide: 'BarBelow_root_hide__d1a_5',
                hide: 'BarBelow_hide__a0dwD',
                image: 'BarBelow_image__GfExj',
                content: 'BarBelow_content__GWWbR',
                title: 'BarBelow_title__hBNPY',
                text: 'BarBelow_text__tU_Rm',
                buttons: 'BarBelow_buttons__XGwDQ',
            };
        },
        83439: (e) => {
            e.exports = { root: 'Navbar_root__chF4R', root_collapsed: 'Navbar_root_collapsed__pozJX' };
        },
        84176: (e) => {
            e.exports = { buttonWithPlayerBar: 'WithBuySubscriptionModal_buttonWithPlayerBar__p7or7' };
        },
        85067: (e) => {
            e.exports = { growContainer: 'FamilyInviteStepInfo_growContainer__y0xmo', important: 'FamilyInviteStepInfo_important__YvkpI' };
        },
        86085: (e) => {
            e.exports = { icon: 'NotificationHtmlCodeCopied_icon__qJMbi', message: 'NotificationHtmlCodeCopied_message__ivRvX' };
        },
        86519: (e, t, a) => {
            'use strict';
            a.d(t, { mi: () => c.SortDropdown, wY: () => d, WG: () => i.W, hl: () => l, y8: () => r.useSort });
            var i = a(26740),
                n = a(8246);
            let l = (e) => !!e && (e === n.x.ASC || e === n.x.DESC);
            var r = a(62066),
                s = a(60754),
                o = a(37215);
            let d = s.gK
                .model('Sort', { sortBy: s.gK.maybe(s.gK.enumeration(Object.values(o.g))), sortOrder: s.gK.maybe(s.gK.enumeration(Object.values(n.x))) })
                .actions((e) => ({
                    setSortBy(t) {
                        e.sortBy = t;
                    },
                    setSortOrder(t) {
                        e.sortOrder = t;
                    },
                }));
            var c = a(69555);
        },
        86882: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => i });
            let i = (e) => {
                let [t, a] = e.split(':');
                return { uid: String(t), kind: Number(a) };
            };
        },
        88040: (e) => {
            e.exports = {
                container: 'VideoPlayerContainer_container__pZe41',
                loadingIndicator: 'VideoPlayerContainer_loadingIndicator__qDxPV',
                root: 'VideoPlayerContainer_root__GHDoi',
                loadingIndicator_showed: 'VideoPlayerContainer_loadingIndicator_showed__KQCNf',
            };
        },
        89053: (e) => {
            e.exports = { tooltip: 'NavigationOnboarding_tooltip___xZni', text: 'NavigationOnboarding_text__YW93F', button: 'NavigationOnboarding_button__Vc_Ka' };
        },
        89543: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedShimmerBar_root__o3xBB',
                barShimmer: 'NavbarDesktopAnimatedShimmerBar_barShimmer__ejAhM',
                buttonShimmer: 'NavbarDesktopAnimatedShimmerBar_buttonShimmer___3Vz2',
            };
        },
        90879: (e, t, a) => {
            'use strict';
            a.d(t, { A2: () => ee, bg: () => v });
            var i = a(49574);
            async function n(e) {
                var t, a, n, l, r, s, o;
                let d,
                    c,
                    { clipMeta: u, additional: m } = e,
                    p = await (0, i.WGy)(m.locale);
                return (
                    u
                        ? ((d = p(
                              { id: 'metadata.clips-title' },
                              { clipTitle: u.title, clipArtists: null == (a = u.artists) || null == (t = a.map((e) => e.name)) ? void 0 : t.join(', ') },
                          )),
                          (c = p(
                              { id: 'metadata.clips-description' },
                              { clipTitle: u.title, clipArtists: null == (l = u.artists) || null == (n = l.map((e) => e.name)) ? void 0 : n.join(', ') },
                          )))
                        : ((d = p({ id: 'metadata.clips-title-default' })), (c = p({ id: 'metadata.clips-description-default' }))),
                    {
                        title: d,
                        description: c,
                        openGraph: (0, i.i$E)({
                            ogTitle: d,
                            ogDescription: c,
                            ogType: 'website',
                            fullUrl: null != (r = m.fullUrl) ? r : '',
                            locale: m.locale,
                            customImage: (0, i.vWM)({ tld: m.tld }),
                            siteName: p({ id: 'metadata.yandex-music' }),
                        }),
                        twitter: (0, i.HRN)({ cardType: i.WfF.SUMMARY_LARGE_IMAGE, title: d, description: c }),
                        facebook: (0, i.kRl)(),
                        appLinks: (0, i.X5i)({
                            additional: { ...m, url: null != (s = m.url) ? s : '', fullUrl: null != (o = m.fullUrl) ? o : '', host: m.host },
                            appName: p({ id: 'metadata.yandex-music' }),
                        }),
                    }
                );
            }
            var l = a(55178),
                r = a(11135),
                s = a(60754),
                o = a(87953),
                d = a(3623),
                c = a(72676),
                u = a(72480),
                m = a(95428),
                p = a(71483),
                _ = a(1131);
            let g = s.gK
                    .model('VideoPlayerState', {
                        contextType: s.gK.maybeNull(s.gK.enumeration(Object.values(p.K))),
                        contextId: s.gK.maybeNull(s.gK.string),
                        entityMeta: s.gK.maybeNull(_.Op),
                        status: s.gK.enumeration(Object.values(c.MT)),
                        canMoveForward: s.gK.boolean,
                        canMoveBackward: s.gK.boolean,
                    })
                    .actions((e) => ({
                        setContextId: (t) => {
                            e.contextId = String(t);
                        },
                        setContextType: (t) => {
                            e.contextType = t;
                        },
                        setEntityMeta: (t) => {
                            (null == t ? void 0 : t.data.meta) && (e.entityMeta = (0, _.EX)(t));
                        },
                        setStatus: (t) => {
                            e.status = t;
                        },
                        setCanMoveForward: (t) => {
                            e.canMoveForward = t;
                        },
                        setCanMoveBackward: (t) => {
                            e.canMoveBackward = t;
                        },
                    })),
                v = s.gK
                    .compose(
                        s.gK.model('FullscreenVideoPlayer', {
                            modal: m.qt,
                            ids: s.gK.array(s.gK.number),
                            activeIndex: s.gK.maybeNull(s.gK.number),
                            clips: s.gK.array(r.kv),
                            errorStatusCode: s.gK.maybeNull(s.gK.number),
                            state: g,
                            sonataStatusBeforeClipStart: s.gK.enumeration(Object.values(c.MT)),
                            isOpenedFromMain: s.gK.maybeNull(s.gK.boolean),
                            withAnimation: s.gK.boolean,
                        }),
                        m.XT,
                        m.pl,
                    )
                    .views((e) => {
                        let t = {
                            get clipActiveIndex() {
                                return e.activeIndex || 0;
                            },
                            get clipActive() {
                                return e.clips[t.clipActiveIndex];
                            },
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === i.GuX.PENDING;
                            },
                            get isNotFound() {
                                let t = e.isResolved && 0 === e.clips.length;
                                return e.errorStatusCode === o.X1.NOT_FOUND || t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                            get entitiesData() {
                                return e.ids.map((e) => ({ type: d.R.Clip, meta: { id: e }, loadEntityMeta: !0 }));
                            },
                            get isPlayingSonataStatusBeforeClipStart() {
                                return e.sonataStatusBeforeClipStart === c.MT.PLAYING;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setIds(t) {
                            e.ids = (0, s.wg)(t);
                        },
                        setClipIndex() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            e.activeIndex = t;
                        },
                        setOpenedFromMain() {
                            (e.isOpenedFromMain = !0), (e.withAnimation = !1);
                        },
                        setAnimationState(t) {
                            e.withAnimation = t;
                        },
                        setSonataStatusBeforeClipStart() {
                            let { sonataState: t } = (0, s.Zn)(e);
                            e.sonataStatusBeforeClipStart = t.status;
                        },
                        getClips: (0, s.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, s._$)(e);
                            if (e.loadingState !== i.GuX.PENDING)
                                try {
                                    e.loadingState = i.GuX.PENDING;
                                    let a = yield t.getClip({ clipIds: e.ids });
                                    (e.ids = (0, s.wg)(a.map((e) => e.clipId))),
                                        (e.clips = (0, s.wg)(a.map(r.i$))),
                                        (e.activeIndex = (0, u.z4)(e.ids, e.activeIndex)),
                                        e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), t instanceof o.GX && (e.errorStatusCode = t.statusCode), e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = i.GuX.IDLE),
                                (e.activeIndex = null),
                                (e.errorStatusCode = null),
                                (e.isOpenedFromMain = null),
                                (e.withAnimation = !0),
                                (e.sonataStatusBeforeClipStart = c.MT.IDLE),
                                e.destroyItems([e.ids, e.clips]);
                        },
                    }));
            var b = a(32290),
                h = a(96103),
                I = a(63618),
                x = a(60900),
                N = a(59824),
                A = a(91027),
                S = a(63423),
                y = a(82586),
                C = a(84638),
                T = a(29680),
                f = a(44574),
                E = a(62060),
                L = a(44989),
                P = a(11715),
                j = a(95897),
                R = a(70280),
                k = a(71926),
                M = a(80864),
                O = a(33797),
                w = a(27940),
                B = a.n(w);
            let D = (0, h.PA)((e) => {
                let {
                        className: t,
                        clip: a,
                        withExplicitMark: n = !0,
                        withSecondaryColor: r,
                        captionSize: s = 'm',
                        explicitSize: o = 'xxxs',
                        withAllArtistsTitle: d,
                        withCustomTooltip: c = !0,
                        hasLineClamp: u = !0,
                        withArtistLink: m = !0,
                    } = e,
                    p = (0, M.$N)({ withCustomTooltip: c }),
                    _ = (0, l.useCallback)(
                        (e) => {
                            let t = String(a.title);
                            return (0, b.jsx)(R.m_, {
                                enabled: p,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: i.VP$,
                                children: (0, b.jsx)(k.Caption, {
                                    className: (0, I.$)(B().text, B().title),
                                    type: 'entity',
                                    size: s,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: a.title,
                                }),
                            });
                        },
                        [p, s, a.title],
                    ),
                    g = (0, l.useMemo)(() => _((0, N.Am)(N.Kq.clip.CLIP_META_TITLE)), [_]),
                    v = (0, M.su)(a.artists);
                return (0, b.jsx)('div', {
                    className: (0, I.$)(B().root, { [B().root_withSecondaryColor]: r }, t),
                    children: (0, b.jsxs)('div', {
                        className: B().metaContainer,
                        children: [
                            (0, b.jsxs)('div', {
                                className: B().titleContainer,
                                children: [
                                    (0, b.jsx)(k.Caption, { type: 'entity', size: s, weight: 'medium', variant: 'div', lineClamp: 1, children: g }),
                                    a.explicitDisclaimer &&
                                        n &&
                                        (0, b.jsx)(f.Nq, {
                                            getDescriptionTexts: a.getDescriptionTexts,
                                            size: o,
                                            variant: a.explicitDisclaimer,
                                            className: B().explicitMark,
                                            trackId: String(a.clipId),
                                        }),
                                ],
                            }),
                            v.length > 0 &&
                                (0, b.jsx)(O.iQ, {
                                    linkClassName: B().link,
                                    captionClassName: B().artistCaption,
                                    artists: v,
                                    withLink: m,
                                    lineClamp: +!!u,
                                    captionSize: s,
                                    withAllArtistsTitle: d,
                                    withCustomTooltip: p,
                                }),
                        ],
                    }),
                });
            });
            var K = a(74696),
                U = a.n(K);
            let V = (0, h.PA)((e) => {
                    let { entityMeta: t, onLikeClick: a, onContextMenuOpenChange: n, isContextMenuOpened: s } = e,
                        { user: o, sonataState: d, fullscreenVideoPlayer: c } = (0, i.Pjs)(),
                        { isPassToProduct: u } = (0, i.XCI)(),
                        m = (0, _.d0)(),
                        p = (0, A.c)(async (e) => {
                            await m(d, e);
                        }),
                        g = (0, l.useMemo)(
                            () =>
                                t
                                    ? (0, b.jsx)('div', { className: U().description, children: (0, b.jsx)(D, { captionSize: 'l', clip: t, withSecondaryColor: !0 }) })
                                    : null,
                            [t],
                        );
                    return (0, b.jsxs)('section', {
                        className: U().root,
                        children: [
                            (0, b.jsxs)('div', {
                                className: U().info,
                                children: [
                                    (0, b.jsx)('div', { className: U().infoCard, children: g }),
                                    (0, b.jsxs)('div', {
                                        className: U().infoButtons,
                                        children: [
                                            c.clipActive &&
                                                (0, b.jsx)(r.zb, {
                                                    placement: 'top-start',
                                                    icon: (0, b.jsx)(y.Icon, { variant: 'more', size: 'm' }),
                                                    size: 'l',
                                                    clip: c.clipActive,
                                                    onOpenChange: n,
                                                    open: s,
                                                    ...(0, N.Am)(N.Kq.clip.CLIP_CONTEXT_MENU_BUTTON),
                                                }),
                                            t &&
                                                (0, b.jsx)(f.cy, {
                                                    className: U().likeButton,
                                                    isLiked: t.isLiked,
                                                    iconSize: 'xs',
                                                    onClick: a,
                                                    disabled: !o.isAuthorized,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, b.jsxs)('div', {
                                className: U().sonata,
                                children: [
                                    (0, b.jsx)(_.qF, {}),
                                    (0, b.jsx)(P.v, {
                                        sliderClassName: (0, I.$)(U().slider, U().important),
                                        disabled: !t,
                                        isMobile: !1,
                                        isFullscreen: !1,
                                        canMoveForward: c.state.canMoveForward,
                                        customDuration: (null == o ? void 0 : o.isAuthorized) && !u ? void 0 : 29,
                                        sonataPlaybackId: i.V_r.CLIP,
                                    }),
                                ],
                            }),
                            (0, b.jsx)('div', {
                                className: U().meta,
                                children: (0, b.jsx)(j.r, { sonataVolume: d.volume, onVolumeClick: p, horizontalSliderClassName: (0, I.$)(U().slider, U().important) }),
                            }),
                        ],
                    });
                }),
                F = (0, h.PA)((e) => {
                    let { className: t, isSettingsMenuOpened: a, onSettingsMenuOpenChange: n, isContextMenuOpened: l, onContextMenuOpenChange: r } = e,
                        { fullscreenVideoPlayer: s } = (0, i.Pjs)(),
                        o = (0, u.KX)(s.state.entityMeta),
                        {
                            settings: { isMobile: d },
                        } = (0, i.Pjs)();
                    return d
                        ? null
                        : (0, b.jsx)(V, {
                              className: t,
                              onLikeClick: o,
                              entityMeta: s.state.entityMeta,
                              isSettingsMenuOpened: a,
                              onSettingsMenuOpenChange: n,
                              isContextMenuOpened: l,
                              onContextMenuOpenChange: r,
                          });
                });
            var G = a(77837),
                z = a.n(G);
            let X = (0, h.PA)(() => {
                    let { fullscreenVideoPlayer: e } = (0, i.Pjs)(),
                        { state: t, toggleTrue: a, toggleFalse: n } = (0, L.e)(!1),
                        { state: s, toggleTrue: o, toggleFalse: d } = (0, L.e)(!1),
                        { state: u, toggleTrue: m, toggleFalse: p } = (0, L.e)(!1),
                        _ = (0, l.useRef)(null),
                        [g, v] = (0, l.useState)(!1),
                        [h, x] = (0, l.useState)(!1),
                        N = h || g,
                        S = (0, l.useMemo)(
                            () =>
                                (0, E.A)(() => {
                                    n(), d();
                                }, 1500),
                            [d, n],
                        ),
                        y = (0, l.useMemo)(
                            () =>
                                (0, E.A)(() => {
                                    d();
                                }, 1500),
                            [d],
                        ),
                        C = (0, A.c)(() => {
                            y.cancel(), o(), m();
                        }),
                        T = (0, A.c)(() => {
                            y(), p();
                        }),
                        P = (0, A.c)(() => {
                            g || h || S();
                        }),
                        j = (0, A.c)((e) => {
                            e.stopPropagation(), S.cancel(), y.cancel(), a(), o(), S();
                        }),
                        R = (0, A.c)((e) => {
                            e.stopPropagation(), S.cancel(), y.cancel(), a(), S();
                        }),
                        k = (0, A.c)(() => {
                            t ? S.cancel() : a(), S();
                        });
                    (0, l.useEffect)(
                        () => (
                            window.addEventListener('mousemove', k),
                            () => {
                                window.removeEventListener('mousemove', k);
                            }
                        ),
                        [k],
                    ),
                        (0, l.useEffect)(() => {
                            t || d();
                        }, [d, t]);
                    let M = e.state.status !== c.MT.PLAYING,
                        O = (0, l.useMemo)(
                            () =>
                                (0, b.jsx)(r.tD, {
                                    className: z().carousel,
                                    containerClassName: z().carouselBlock,
                                    clipCardTitleClassName: (0, I.$)(z().clipCardTitle, z().important),
                                    clipCardArtistLinkClassName: (0, I.$)(z().clipCardArtist, z().important),
                                    isShimmerVisible: e.isLoading,
                                    isShimmerActive: !0,
                                    clips: e.clips,
                                    shouldOpenModalOnCardClick: !1,
                                    itemCounter: 5,
                                    ref: _,
                                }),
                            [e.clips, e.isLoading, _],
                        );
                    return (
                        (0, l.useEffect)(() => {
                            (s || u) && (a(), o());
                        }, [u, s, o, a]),
                        (0, b.jsxs)('div', {
                            className: (0, I.$)(z().root, { [z().root_visible]: t || M || u || N, [z().root_withHoveredCarousel]: s }),
                            onMouseEnter: a,
                            onMouseLeave: P,
                            onFocus: R,
                            children: [
                                (0, b.jsx)(F, { isSettingsMenuOpened: g, onSettingsMenuOpenChange: v, isContextMenuOpened: h, onContextMenuOpenChange: x }),
                                (0, b.jsx)(i.FoH, {
                                    blockId: i.hf$.CLIPS_CAROUSEL,
                                    blockType: i.hf$.CLIPS_CAROUSEL,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    objectsCount: e.clips.length,
                                    children: (0, b.jsx)('div', {
                                        className: z().carouselContainer,
                                        onMouseEnter: C,
                                        onMouseLeave: T,
                                        onFocus: j,
                                        children: (0, b.jsx)(f.FY, {
                                            className: z().carouselWrapper,
                                            carouselElement: O,
                                            ref: _,
                                            isCarouselBetweenArrows: !0,
                                            controlsWrapperClassName: z().carouselControls,
                                            buttonSize: 'xs',
                                            buttonVariant: 'default',
                                            withSecondaryColor: !0,
                                        }),
                                    }),
                                }),
                            ],
                        })
                    );
                }),
                W = (0, h.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, i.Pjs)();
                    return e ? null : (0, b.jsx)(X, {});
                });
            var Y = a(99902),
                $ = a(88040),
                H = a.n($);
            let q = (0, h.PA)((e) => {
                let { closeModal: t } = e,
                    a = (0, l.useRef)(null),
                    n = (0, i.eGp)(),
                    {
                        sonataState: { isVHCoreRegistered: s },
                        fullscreenVideoPlayer: o,
                        advert: d,
                    } = (0, i.Pjs)(),
                    { from: m } = (0, i.fyy)({ pageId: i._Q$.VIDEO_PLAYER, contextId: o.state.contextId, contextType: p.K.Various }),
                    _ = (0, i.XJ9)(),
                    { state: g, toggleFalse: v } = (0, L.e)(!0),
                    { togglePlay: h } = (0, i.Dx4)({
                        playContextParams: { contextData: { type: p.K.Various, meta: { id: i.H7u.VARIOUS_CLIP_CONTEXT }, from: m }, loadContextMeta: !0 },
                        sonataState: o.state,
                        playbackId: i.V_r.CLIP,
                    }),
                    x = (0, r.XP)({ clip: o.clips[o.clipActiveIndex], callback: h, disclaimerRejectHandler: t });
                return (
                    (0, l.useEffect)(() => {
                        let e, t, l;
                        if (a.current && n && s) {
                            let r, s;
                            o.setSonataStatusBeforeClipStart(),
                                n.setVideoCoreContainer({ container: a.current, playbackId: i.V_r.CLIP }),
                                n
                                    .setContext(
                                        {
                                            contextData: { type: p.K.Various, meta: { id: i.H7u.VARIOUS_CLIP_CONTEXT }, from: m },
                                            entitiesData: o.entitiesData,
                                            queueParams: { index: o.clipActiveIndex },
                                            loadContextMeta: !1,
                                        },
                                        i.V_r.CLIP,
                                    )
                                    .then(() => {
                                        d.isAdvertShown || x();
                                    });
                            let c = n.getState(i.V_r.CLIP);
                            (e = c.queueState.currentEntity.onChange((e) => {
                                var t;
                                let a = null == e ? void 0 : e.context.data.type,
                                    i = null == e ? void 0 : e.context.data.meta.id,
                                    n = null == e ? void 0 : e.entity.data.meta.id;
                                if (n) {
                                    let e = (0, u.z4)(o.ids, o.ids.indexOf(Number(n)));
                                    o.setClipIndex(e), _((0, u.JL)(o.ids, e));
                                }
                                o.state.setEntityMeta(null != (t = null == e ? void 0 : e.entity) ? t : null),
                                    a && o.state.setContextType(a),
                                    i && o.state.setContextId(i);
                            })),
                                (t = c.playerState.status.onChange((e) => {
                                    e && o.state.setStatus(e);
                                })),
                                (l = c.currentContext.onChange((e) => {
                                    null == r || r(),
                                        null == s || s(),
                                        (r =
                                            null == e
                                                ? void 0
                                                : e.availableActions.moveBackward.onChange((e) => {
                                                      o.state.setCanMoveBackward(!!e);
                                                  })),
                                        (s =
                                            null == e
                                                ? void 0
                                                : e.availableActions.moveForward.onChange((e) => {
                                                      o.state.setCanMoveForward(!!e);
                                                  }));
                                }));
                        }
                        return () => {
                            null == n || n.destroyVideoCore(i.V_r.CLIP),
                                o.isPlayingSonataStatusBeforeClipStart && (null == n || n.resume()),
                                null == e || e(),
                                null == t || t(),
                                null == l || l();
                        };
                    }, [n, s, o, m, _, h, x, d.isAdvertShown]),
                    (0, l.useEffect)(() => {
                        o.state.status === c.MT.PLAYING && v();
                    }, [o.state.status, v]),
                    (0, b.jsxs)('div', {
                        className: H().root,
                        children: [
                            (0, b.jsx)('div', { onClick: h, ref: a, className: H().container }),
                            (0, b.jsx)('div', {
                                className: (0, I.$)(H().loadingIndicator, { [H().loadingIndicator_showed]: g }),
                                children: (0, b.jsx)(Y.y, { size: 'm' }),
                            }),
                        ],
                    })
                );
            });
            var Z = a(83218),
                Q = a.n(Z);
            let J = (0, h.PA)(() => {
                    let { formatMessage: e } = (0, x.A)(),
                        {
                            advertBanners: {
                                banners: { topAdvertBanner: t },
                            },
                            fullscreenVideoPlayer: a,
                            modals: { disclaimerModal: s },
                        } = (0, i.Pjs)(),
                        { defaultLayoutRef: o } = (0, i.gKY)(),
                        d = (0, i.v8p)(),
                        c = (0, i.pqZ)(),
                        { notify: m } = (0, i.lkh)(),
                        p = (0, i.eGp)(),
                        _ = (0, i.jjz)(),
                        g = (0, u.QV)(),
                        v = (0, u.Hx)(),
                        [h] = a.ids,
                        E = (0, A.c)(() => {
                            let e = (0, i.qne)(i.K3F.IDS),
                                t = (0, i.qne)(i.K3F.ACTIVE_INDEX),
                                { clipIds: n, activeClipIndex: l } = (0, r.V1)(e, t);
                            n.length
                                ? (a.setIds(n),
                                  a.setClipIndex(l),
                                  a.setAnimationState(!1),
                                  null == p || p.setEntityByIndex(a.clipActiveIndex, i.V_r.CLIP),
                                  a.modal.open())
                                : (a.modal.close(), a.reset());
                        }),
                        L = (0, A.c)(() => {
                            if (a.modal.isOpened && !s.isOpened) {
                                if ((a.setAnimationState(!0), h && v(String(h)), a.isOpenedFromMain)) {
                                    c(i.Zyd.main.href),
                                        (0, i.Zgt)({ fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                            (0, i.jxB)(e);
                                        }),
                                        a.modal.close(),
                                        a.reset();
                                    return;
                                }
                                d();
                            }
                        });
                    ((e) => {
                        let { fullscreenVideoPlayer: t, advert: a } = (0, i.Pjs)(),
                            n = (0, i.eGp)(),
                            r = (0, i.zwV)(),
                            s = (0, u.KX)(t.state.entityMeta);
                        (0, l.useEffect)(() => {
                            if (a.isAdvertShown) {
                                null == r || r.disable(i.Mo.VIDEO_PLAYER);
                                return;
                            }
                            t.modal.isOpened
                                ? (null == r || r.disable(i.Mo.MAIN),
                                  null == r || r.enable(i.Mo.MAIN, i.lbr.TOGGLE_MUTE),
                                  null == r || r.enable(i.Mo.MAIN, i.lbr.INCREASE_VOLUME),
                                  null == r || r.enable(i.Mo.MAIN, i.lbr.DECREASE_VOLUME),
                                  null == r || r.enable(i.Mo.VIDEO_PLAYER))
                                : (null == r || r.disable(i.Mo.VIDEO_PLAYER), null == r || r.enable(i.Mo.MAIN));
                        }, [r, t.modal.isOpened, a.isAdvertShown]);
                        let o = null == n ? void 0 : n.getState(i.V_r.CLIP);
                        (0, l.useEffect)(
                            () => (
                                null == r || r.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.CLOSE, e),
                                null == r ||
                                    r.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.TOGGLE_PLAY, () => {
                                        null == n || n.togglePause(i.V_r.CLIP);
                                    }),
                                null == r || r.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.LIKE, s),
                                null == r ||
                                    r.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.MOVE_FORWARD, async () => {
                                        var e;
                                        (null == o || null == (e = o.currentContext.value) ? void 0 : e.availableActions.moveForward.value) &&
                                            (await (null == n ? void 0 : n.moveForward(i.V_r.CLIP)));
                                    }),
                                null == r ||
                                    r.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.MOVE_BACKWARD, async () => {
                                        var e;
                                        (null == o || null == (e = o.currentContext.value) ? void 0 : e.availableActions.moveBackward.value) &&
                                            (await (null == n ? void 0 : n.moveBackward(i.V_r.CLIP)));
                                    }),
                                null == r ||
                                    r.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.SLIDE_FORWARD, async () => {
                                        (null == o ? void 0 : o.playerState.progress.value.duration) && (await (null == n ? void 0 : n.slideForward(1, i.V_r.CLIP)));
                                    }),
                                null == r ||
                                    r.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.SLIDE_BACKWARD, async () => {
                                        (null == o ? void 0 : o.playerState.progress.value.duration) && (await (null == n ? void 0 : n.slideBackward(1, i.V_r.CLIP)));
                                    }),
                                () => {
                                    null == r || r.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.CLOSE),
                                        null == r || r.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.TOGGLE_PLAY),
                                        null == r || r.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.LIKE),
                                        null == r || r.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.MOVE_FORWARD),
                                        null == r || r.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.MOVE_BACKWARD),
                                        null == r || r.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.SLIDE_FORWARD),
                                        null == r || r.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.SLIDE_BACKWARD);
                                }
                            ),
                            [r, t.ids, e, s, n, o, a.isAdvertShown],
                        );
                    })(L),
                        0 === a.ids.length && L(),
                        (0, l.useEffect)(
                            () => () => {
                                a.reset(), t.setIsShowBanner(!0);
                            },
                            [a, t, t.setIsShowBanner],
                        ),
                        (0, l.useEffect)(() => {
                            a.modal.isOpened ? t.setIsShowBanner(!1) : t.setIsShowBanner(!0);
                        }, [a.modal.isOpened, t, t.setIsShowBanner]);
                    let P = (0, A.c)(() => {
                        a.setAnimationState(!0), h && v(String(h)), c(i.Zyd.main.href), a.modal.close(), a.reset();
                    });
                    return (
                        (0, l.useEffect)(() => {
                            if (a.isNotFound || a.isSomethingWrong) {
                                L();
                                let t = a.modal.isOpened ? i.uQT.FULLSCREEN_ERROR : i.uQT.ERROR;
                                m((0, b.jsx)(f.hT, { error: e({ id: 'error-messages.something-went-wrong' }) }), { containerId: t });
                            }
                        }, [a.isNotFound, a.isSomethingWrong, a.modal.isOpened, L, e, m]),
                        (0, l.useEffect)(() => {
                            a.modal.isOpened && h && g(String(h));
                        }, [a.modal.isOpened, g, h]),
                        (0, l.useEffect)(
                            () => (
                                window.addEventListener('popstate', E),
                                () => {
                                    window.removeEventListener('popstate', E);
                                }
                            ),
                            [E],
                        ),
                        ((e) => {
                            (0, l.useEffect)(() => {
                                (null == e ? void 0 : e.clips) &&
                                    0 !== e.clips.length &&
                                    !e.isLoading &&
                                    n({ clipMeta: (0, r.wS)(e.clips[0]), additional: { fullUrl: null, locale: null, url: null, tld: '', host: '' } }).then((e) => {
                                        (0, i.jxB)(e);
                                    });
                            }, [null == e ? void 0 : e.clips, null == e ? void 0 : e.isLoading]);
                        })(a),
                        (0, l.useEffect)(() => {
                            a.isNeededToLoad && a.modal.isOpened && h && a.getClips();
                        }, [a, a.isNeededToLoad, a.modal.isOpened, h]),
                        (0, b.jsxs)(C.a, {
                            className: (0, I.$)(Q().root, Q().important),
                            open: a.modal.isOpened,
                            onOpenChange: a.modal.onOpenChange,
                            onClose: L,
                            portalNode: o,
                            size: 'fullscreen',
                            placement: 'center',
                            showHeader: !1,
                            contentClassName: Q().modalContent,
                            closeOnOutsidePress: !1,
                            escapeKey: !1,
                            transitionDuration: 300 * !!a.withAnimation,
                            ...(0, N.Am)(N.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_MODAL),
                            children: [
                                (0, b.jsxs)('header', {
                                    className: Q().header,
                                    children: [
                                        (0, b.jsx)(S.$, {
                                            className: Q().closeButton,
                                            radius: 'round',
                                            color: 'secondary',
                                            size: 'm',
                                            icon: (0, b.jsx)(y.Icon, { variant: 'arrowDown', size: 'xs' }),
                                            onClick: L,
                                            'aria-label': e({ id: 'interface-actions.close' }),
                                            ...(0, N.Am)(N.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_CLOSE_BUTTON),
                                        }),
                                        (0, b.jsx)(f.N_, {
                                            className: Q().logoLink,
                                            href: '/',
                                            onClick: P,
                                            'aria-label': e({ id: 'navigation.page-main' }),
                                            ...(0, N.Am)(N.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_LABEL_BUTTON),
                                            children: (0, b.jsx)(y.Icon, { variant: 'musicLogoCenter'.concat(_), className: Q()['logo_'.concat(_.toLocaleLowerCase())] }),
                                        }),
                                    ],
                                }),
                                (0, b.jsx)(q, { closeModal: L }),
                                (0, b.jsx)(W, {}),
                                (0, b.jsx)(T.Notification, {
                                    className: Q().notification,
                                    enableMultiContainer: !0,
                                    containerId: i.uQT.FULLSCREEN_INFO,
                                    position: 'bottom-center',
                                }),
                                (0, b.jsx)(T.Notification, {
                                    className: Q().notification,
                                    enableMultiContainer: !0,
                                    containerId: i.uQT.FULLSCREEN_ERROR,
                                    position: 'bottom-center',
                                }),
                            ],
                        })
                    );
                }),
                ee = (0, h.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, i.Pjs)();
                    return e ? null : (0, b.jsx)(J, {});
                });
        },
        91738: (e) => {
            e.exports = {
                root: 'PaymentWidgetModal_root__I6Hrp',
                root_loaded: 'PaymentWidgetModal_root_loaded__Rzltj',
                root_level_up: 'PaymentWidgetModal_root_level_up__pj52G',
                content: 'PaymentWidgetModal_content__ifRry',
                widget: 'PaymentWidgetModal_widget__cu_gr',
            };
        },
        91819: (e) => {
            e.exports = {
                userProfileContainer: 'NavbarDesktopUserWidget_userProfileContainer__ha3Tm',
                userProfile: 'NavbarDesktopUserWidget_userProfile__vqeMC',
                userId: 'NavbarDesktopUserWidget_userId__ihL7U',
                userMeta_withAnimation: 'NavbarDesktopUserWidget_userMeta_withAnimation__rrz0Y',
                animation_show: 'NavbarDesktopUserWidget_animation_show__fadL3',
                userMeta_collapsed: 'NavbarDesktopUserWidget_userMeta_collapsed__cSARy',
                animation_hide: 'NavbarDesktopUserWidget_animation_hide__tO81o',
                unauthorizedBar: 'NavbarDesktopUserWidget_unauthorizedBar__HE5Yu',
            };
        },
        92854: (e) => {
            e.exports = {
                root: 'SideAdvertBanner_root__hT1jJ',
                root_vibePage: 'SideAdvertBanner_root_vibePage__PLY_P',
                root_hidden: 'SideAdvertBanner_root_hidden__Yg__R',
                contentWrapper: 'SideAdvertBanner_contentWrapper__5255E',
                content: 'SideAdvertBanner_content__nDGWG',
                disableAdsButton: 'SideAdvertBanner_disableAdsButton__is8g1',
            };
        },
        93372: (e) => {
            e.exports = {
                title: 'TrackModalTitle_title__3zfNn',
                important: 'TrackModalTitle_important__qNVlq',
                content: 'TrackModalTitle_content__mtQKw',
                explicitMark: 'TrackModalTitle_explicitMark__aRT_I',
                text: 'TrackModalTitle_text__3iWX4',
                artistCaption: 'TrackModalTitle_artistCaption__Sj1CR',
                link: 'TrackModalTitle_link__kzVsl',
                meta: 'TrackModalTitle_meta__xlEgt',
                entityName: 'TrackModalTitle_entityName__BRnTV',
            };
        },
        94136: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => A, A: () => r });
            var i = a(60754),
                n = a(49574),
                l = a(95428);
            let r = i.gK
                .model({ modal: l.qt })
                .views((e) => ({
                    shouldShow() {
                        var t;
                        let { user: a, settings: l } = (0, i.Zn)(e),
                            { sessionStorage: r } = (0, i._$)(e);
                        if (!a.hasPlus || !(null == (t = l.browserInfo) ? void 0 : t.isMobile)) return !1;
                        let s = r.get(n.cYZ.DownloadMobileApp);
                        return null == s || !s.shown;
                    },
                }))
                .actions((e) => ({
                    openModal() {
                        var t;
                        let { localStorage: a, sessionStorage: l } = (0, i._$)(e);
                        if (!(null == (t = a.get(n.cYZ.DownloadMobileApp)) ? void 0 : t.shown)) {
                            e.modal.open(), a.set(n.cYZ.DownloadMobileApp, { shown: !0 }), l.set(n.cYZ.DownloadMobileApp, { shown: !0 });
                            return;
                        }
                        setTimeout(() => {
                            e.modal.open();
                        }, 5e3),
                            l.set(n.cYZ.DownloadMobileApp, { shown: !0 });
                    },
                }));
            var s = a(32290),
                o = a(96103),
                d = a(84638),
                c = a(63618),
                u = a(60900),
                m = a(39407),
                p = a(63423),
                _ = a(82586),
                g = a(63887),
                v = a(71926),
                b = a(3466),
                h = a.n(b);
            let I = (0, o.PA)(() => {
                let { downloadMobileApp: e, user: t, settings: a } = (0, n.Pjs)(),
                    { formatMessage: i } = (0, u.A)(),
                    l = (0, n.qQp)({ browserInfo: a.browserInfo, login: t.account.data.login });
                return (0, s.jsxs)('div', {
                    className: (0, c.$)(h().root, (0, n.JH_)(n.Sxu.Dark)),
                    children: [
                        (0, s.jsx)(p.$, {
                            className: h().closeButton,
                            radius: 'round',
                            size: 'xxs',
                            icon: (0, s.jsx)(_.Icon, { variant: 'close', size: 'xxs' }),
                            'aria-label': i({ id: 'interface-actions.close' }),
                            onClick: e.modal.close,
                        }),
                        (0, s.jsxs)('div', {
                            className: h().text,
                            children: [
                                (0, s.jsx)(v.Heading, {
                                    variant: 'h1',
                                    size: 'xl',
                                    weight: 'bold',
                                    children: (0, s.jsx)(m.A, { id: 'download-mobile-app.title', values: { nbsp: '\xa0' } }),
                                }),
                                (0, s.jsx)(v.Caption, {
                                    className: h().subtitle,
                                    variant: 'p',
                                    size: 'l',
                                    weight: 'bold',
                                    children: (0, s.jsx)(m.A, { id: 'download-mobile-app.subtitle', values: { nbsp: '\xa0' } }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)('div', {
                            className: h().buttons,
                            children: [
                                (0, s.jsx)(g.N, {
                                    className: h().listenInAppLink,
                                    href: l(),
                                    children: (0, s.jsx)(p.$, {
                                        className: h().button,
                                        color: 'primary',
                                        size: 'm',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(v.Caption, {
                                            variant: 'span',
                                            size: 'm',
                                            weight: 'medium',
                                            children: (0, s.jsx)(m.A, { id: 'download-mobile-app.listen-in-app' }),
                                        }),
                                    }),
                                }),
                                (0, s.jsx)(p.$, {
                                    className: (0, c.$)(h().button, h().stayButton),
                                    variant: 'text',
                                    size: 'm',
                                    color: 'secondary',
                                    radius: 'xxxl',
                                    onClick: e.modal.close,
                                    children: (0, s.jsx)(v.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        weight: 'medium',
                                        children: (0, s.jsx)(m.A, { id: 'download-mobile-app.stay' }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var x = a(59976),
                N = a.n(x);
            let A = (0, o.PA)(() => {
                let { downloadMobileApp: e } = (0, n.Pjs)();
                return (0, s.jsx)(d.a, {
                    className: N().root,
                    contentClassName: N().content,
                    open: e.modal.isOpened,
                    size: 'fullscreen',
                    placement: 'center',
                    showHeader: !1,
                    closeOnOutsidePress: !1,
                    overlayColor: 'full',
                    onOpenChange: e.modal.onOpenChange,
                    onClose: e.modal.close,
                    children: (0, s.jsx)(I, {}),
                });
            });
        },
        95736: (e) => {
            e.exports = { root: 'TrailerTrack_root__0UIP4', root_active: 'TrailerTrack_root_active__F_8Iw' };
        },
        97153: (e) => {
            e.exports = {
                root: 'Pin_root__UyplT',
                ripple: 'Pin_ripple__Vzpzs',
                link: 'Pin_link__nz6I7',
                root_withoutLink: 'Pin_root_withoutLink__fr1XH',
                info: 'Pin_info__x_7Zx',
                info_withContextMenu: 'Pin_info_withContextMenu__7HX5A',
                info_collapsed: 'Pin_info_collapsed__bF9ac',
                info_animated: 'Pin_info_animated__AQQZk',
                show: 'Pin_show__xSkOa',
                hide: 'Pin_hide__RCc9X',
                meta: 'Pin_meta__MzX_7',
                contextMenu: 'Pin_contextMenu__WGmhp',
                contextMenu_hidden: 'Pin_contextMenu_hidden__xksGY',
                title: 'Pin_title__Jw5WW',
                subtitle: 'Pin_subtitle__rb8Gq',
                cover: 'Pin_cover__7ofYY',
                cover_withAnimation: 'Pin_cover_withAnimation__2Z2n6',
                show_and_scale: 'Pin_show_and_scale__VdNfj',
            };
        },
    },
]);
