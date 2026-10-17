(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [621],
    {
        3392: (e, t, r) => {
            'use strict';
            r.d(t, { ZI: () => p, m_: () => u });
            var i,
                l = r(33049),
                a = r(95759),
                o = r(74631),
                n = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (l && (l += ' '), (l += i));
                                            else for (r in t) t[r] && (l && (l += ' '), (l += r));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    4295: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'QhR4J536RmNHBB5bZYwF', text: 'Fqg1VWCJUfasVVxqICeO' };
                    },
                    1246: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root_controls_xxs: 'tRaaBpDMg9Qu8v6gKjtn',
                            root_entity_xxs: 'M9zvtlcpLUVn6DKdcHhj',
                            root_text_xxs: 'ln0PYYwDmFnfYxCDJsFU',
                            root_controls_xs: 'n5AeWEsJC3_AYXcbK4Lt',
                            root_entity_xs: '__hrMKGmNbw54T54IUyh',
                            root_text_xs: 'SehSa7OyRpC2nzYTVb2Q',
                            root_controls_s: '_oBLf5gprWsKjCw4Ce58',
                            root_entity_s: 'mxSPe5xpZnie9gpIqacd',
                            root_text_s: 'Ai2iRN9elHpk_u5splD6',
                            root_controls_m: 'tk7ahHRDYXJMMB879KUA',
                            root_entity_m: 'Z_WIr2W8JU4MPQek3hgR',
                            root_text_m: 'g3qWNP6xl__7qxNmtrvd',
                            root_controls_l: 'grvxapJE3vGArOKDWf6n',
                            root_entity_l: 'Esj5A1UeSi4xV4tZ839D',
                            root_text_l: 'V3WU123oO65AxsprotU9',
                            root_weight_normal: 'ZYV27jeWd30QDXu4GhaH',
                            root_weight_medium: '_3_Mxw7Si7j2g4kWjlpR',
                            root_weight_bold: 'Vi7Rd0SZWqD17F0872TB',
                        };
                    },
                    61: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var a in ((i = {}), t)) 'key' !== a && (i[a] = t[a]);
                            else i = t;
                            return { $$typeof: r, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    853: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Tooltip = void 0));
                        let i = r(4377),
                            l = r(810),
                            a = r(1964),
                            o = r(2660),
                            n = r(3343),
                            s = r(1229);
                        t.Tooltip = (e) => {
                            let { enableAriaDescribedby: t = !1, text: r, children: d, referenceRef: c, ...u } = e,
                                [p, _] = Array.isArray(d) ? d : [d],
                                f = (0, s.useTooltip)(u),
                                m = (0, l.useId)(),
                                v = (0, l.useId)(),
                                x = (0, l.useId)(),
                                h = (0, a.useMergeRefs)([f.refs.setReference, c]);
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, l.cloneElement)(p, {
                                        ref: h,
                                        ...(t ? { 'aria-describedby': m } : {}),
                                        ...f.getReferenceProps(),
                                        ...(0, o.getDataAttrFromProps)(u),
                                        key: v,
                                    }),
                                    f.context.open
                                        ? (0, l.cloneElement)(null != _ ? _ : (0, i.jsx)(n.TooltipContent, {}), {
                                              ref: f.refs.setFloating,
                                              style: { ...f.floatingStyles, visibility: f.referenceHidden ? 'hidden' : 'visible' },
                                              text: r,
                                              arrow: f.arrow,
                                              ...(t ? { id: m } : {}),
                                              ...f.getFloatingProps(),
                                              key: x,
                                          })
                                        : null,
                                ],
                            });
                        };
                    },
                    3343: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.TooltipContent = t.TooltipContentComponent = void 0));
                        let l = r(4377),
                            a = r(5881),
                            o = r(810),
                            n = r(1964),
                            s = r(3412),
                            d = i(r(4295));
                        ((t.TooltipContentComponent = (e) => {
                            let { className: t, children: r, arrow: i, rootNode: c, forwardRef: u, text: p, ..._ } = e;
                            return (0, l.jsx)(n.FloatingPortal, {
                                root: c,
                                children: (0, l.jsxs)('div', {
                                    className: (0, a.clsx)(d.default.root, t),
                                    ref: u,
                                    ..._,
                                    children: [
                                        (0, o.isValidElement)(i) && i,
                                        (0, l.jsx)(s.Caption, {
                                            variant: 'div',
                                            type: 'text',
                                            size: 's',
                                            weight: 'medium',
                                            className: d.default.text,
                                            children: null != r ? r : p,
                                        }),
                                    ],
                                }),
                            });
                        }),
                            (t.TooltipContent = (0, o.forwardRef)((e, r) => (0, l.jsx)(t.TooltipContentComponent, { forwardRef: r, ...e }))));
                    },
                    1229: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useTooltip = void 0));
                        let i = r(4377),
                            l = r(810),
                            a = r(1964),
                            o = { delay: { open: 200, close: 0 } };
                        t.useTooltip = function (e) {
                            let {
                                    initialOpen: t = !1,
                                    placement: r = 'top',
                                    open: n,
                                    onOpenChange: s,
                                    isHoverEnabled: d = !0,
                                    isFocusEnabled: c = !0,
                                    offsetOptions: u,
                                    flipOptions: p = {},
                                    shiftOptions: _ = {},
                                    hoverSettings: f = o,
                                    enabled: m = !0,
                                    arrowProps: v,
                                } = e,
                                [x, h] = (0, l.useState)(t),
                                g = (0, l.useRef)(null),
                                b = null != n ? n : x,
                                C = null != s ? s : h,
                                y = (0, a.useFloating)({
                                    placement: r,
                                    open: b,
                                    onOpenChange: C,
                                    whileElementsMounted: a.autoUpdate,
                                    middleware: [
                                        (0, a.offset)(u),
                                        (0, a.flip)({ crossAxis: r.includes('-'), ...p }),
                                        (0, a.shift)(_),
                                        (0, a.arrow)({ element: g }),
                                        (0, a.hide)(),
                                    ],
                                }),
                                A = y.context,
                                j = (0, a.useHover)(A, { move: !1, enabled: d && m, ...f }),
                                S = (0, a.useFocus)(A, { enabled: c && m }),
                                T = (0, a.useDismiss)(A),
                                I = (0, a.useRole)(A, { role: 'tooltip' }),
                                N = (0, a.useInteractions)([j, S, T, I]),
                                P = (0, l.useMemo)(() => {
                                    if (v) return (0, i.jsx)(a.FloatingArrow, { ref: g, context: y.context, ...v });
                                }, [v, y.context]);
                            return (0, l.useMemo)(() => {
                                var e;
                                return { open: b, setOpen: C, arrow: P, referenceHidden: null == (e = y.middlewareData.hide) ? void 0 : e.referenceHidden, ...N, ...y };
                            }, [b, C, P, N, y]);
                        };
                    },
                    3412: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let l = r(4377),
                            a = r(5881),
                            o = r(810),
                            n = r(5987),
                            s = i(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: i = 'text', size: o = 's', className: d, children: c, weight: u = 'medium', ...p } = e;
                            return (0, l.jsx)(n.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, a.clsx)(s.default.root, s.default['root_'.concat(i, '_').concat(o)], s.default['root_weight_'.concat(u)], d),
                                ...p,
                                children: c,
                            });
                        }),
                            (t.Caption = (0, o.forwardRef)((e, r) => (0, l.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let l = r(4377),
                            a = r(5881),
                            o = r(810),
                            n = i(r(61));
                        function s(e) {
                            let { forwardRef: t, style: r, className: i, children: o, variant: s, lineClamp: d, ...c } = e,
                                u = d && 'string' == typeof o ? o : void 0;
                            return (0, l.jsx)(s, {
                                style: { ...r, WebkitLineClamp: d },
                                ref: t,
                                title: u,
                                className: (0, a.clsx)(
                                    n.default.root,
                                    { [n.default.root_clamp]: d && d > 0, [n.default.root_clamp_oneline]: d && 1 === d, [n.default.root_clamp_multiline]: d && d > 1 },
                                    i,
                                ),
                                ...c,
                                children: o,
                            });
                        }
                        ((t.TypographyComponent = s), (t.Typography = (0, o.forwardRef)((e, t) => (0, l.jsx)(s, { forwardRef: t, ...e }))));
                    },
                    1964: (e) => {
                        e.exports = l;
                    },
                    2660: (e) => {
                        e.exports = a;
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(o, 2));
                    },
                },
                s = {};
            function d(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return (n[e].call(r.exports, r, r.exports, d), r.exports);
            }
            ((d.d = (e, t) => {
                for (var r in t) d.o(t, r) && !d.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (d.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (d.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var c = {};
            (() => {
                (Object.defineProperty(c, 'X$', { value: !0 }), (c._v = c.u = void 0));
                var e = d(853);
                Object.defineProperty(c, 'u', {
                    enumerable: !0,
                    get: function () {
                        return e.Tooltip;
                    },
                });
                var t = d(3343);
                Object.defineProperty(c, '_v', {
                    enumerable: !0,
                    get: function () {
                        return t.TooltipContent;
                    },
                });
            })();
            var u = c.u,
                p = c._v;
            c.X$;
        },
        3669: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => h });
            var i = r(74631),
                l = r(67379),
                a = r(20934),
                o = r(59450),
                n = r(49656),
                s = r(84e3),
                d = r(58069),
                c = r(20258),
                u = r(26742),
                p = r(25195),
                _ = r(37314),
                f = r(25488),
                m = r(97952),
                v = r(10764),
                x = r(72594);
            let h = () => {
                let e = (0, s.U)(),
                    t = (0, o.st)(),
                    { hash: r } = (0, o.gf)(),
                    { pageId: h, displayReasonId: g } = (0, m.$)(),
                    { tabId: b, tabPos: C, isTabSelectedByDefault: y } = (0, x.R)(),
                    { offsetBlockPosY: A } = (0, p.u)(),
                    { blockType: j, blockId: S, blockPosX: T, blockPosY: I, mainObjectId: N, mainObjectType: P, displayReasonId: E } = (0, u.N)(),
                    { filterKey: R, filterValue: w, filterPos: k } = (0, _.G)(),
                    { objectType: M, objectsCount: O, objectId: L, objectPosX: D, objectPosY: U } = (0, f.J)(),
                    { skeleton: W } = (0, v.b)(),
                    V = null != E ? E : g,
                    z = (0, n.L)(() => (void 0 !== A && void 0 !== I ? A + I : I));
                return (0, i.useCallback)(
                    (i, o) => {
                        if (!t || !h || !c.xK.includes(h) || !c.fD.includes(h)) return;
                        let n = d.F[h];
                        if (!n) return;
                        let s = {
                            hash: r,
                            pageId: n,
                            entityType: j,
                            entityId: S,
                            entityPosX: T,
                            entityPosY: z,
                            objectsCount: O,
                            viewUuid: o,
                            objectType: M,
                            objectId: L,
                            objectPosX: D,
                            objectPosY: U,
                        };
                        (void 0 !== R && ((s.filterKey = R), (s.filterValue = w), (s.filterPos = k)),
                            c.qG.includes(h) && ((s.tabId = b), (s.tabPos = C), (s.isTabSelectedByDefault = y)),
                            W && (s.skeletonId = W),
                            'string' == typeof N && 'string' == typeof P && ((s.mainObjectType = P), (s.mainObjectId = N)),
                            V && (s.displayReasonId = V));
                        let u = (0, l.F)({ params: s, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (i ? (0, a.Pf)(t.evgenInstance, u) : (0, a.nv)(t.evgenInstance, u));
                    },
                    [t, V, S, T, z, j, R, k, w, r, y, e, N, P, L, D, U, M, O, h, W, b, C],
                );
            };
        },
        6969: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => i });
            var i = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
        10322: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => o });
            var i = r(25839),
                l = r(74631),
                a = r(82064);
            let o = (e) => {
                let { pageId: t, pageEntityId: r, displayReasonId: o, pageStyle: n, pagePlacement: s, children: d } = e,
                    c = (0, l.useMemo)(() => ({ pageId: t, pageEntityId: r, displayReasonId: o, pageStyle: n, pagePlacement: s }), [t, r, o, n, s]);
                return (0, i.jsx)(a.r.Provider, { value: c, children: d });
            };
        },
        12929: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => i, n: () => l });
            var i = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                l = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        13232: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => i });
            let i = (0, r(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        15049: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => U });
            var i = r(25839),
                l = r(82298),
                a = r(10508),
                o = r(88204),
                n = r(74631),
                s = r(39004),
                d = r(89288),
                c = r(61493),
                u = r(22939),
                p = r(71035),
                _ = r(51246),
                f = r(23818),
                m = r(86869),
                v = r(4254),
                x = r(56348),
                h = r(65189),
                g = r(63905),
                b = r(28003),
                C = r(67560),
                y = r(40110),
                A = r(20258),
                j = r(52512),
                S = r(30290),
                T = r(91907),
                I = r(68215),
                N = r(18639),
                P = r(77179),
                E = r(50209),
                R = r(27954),
                w = r(32652),
                k = r(97522),
                M = r(49438),
                O = r(87605),
                L = r(68891),
                D = r.n(L);
            let U = (0, o.PA)((e) => {
                var t;
                let {
                        titleClassName: r,
                        artistLinkClassName: o,
                        clip: L,
                        withVideo: U = !0,
                        artistIdWithoutLink: W,
                        viewUuid: V,
                        shouldOpenModalOnCardClick: z = !0,
                    } = e,
                    { fullscreenVideoPlayer: F } = (0, R.g)(),
                    { formatMessage: H } = (0, s.A)(),
                    B = (0, C.C)(),
                    { from: Y } = (0, S.f)({ pageId: A._Q.VIDEO_PLAYER, contextId: F.state.contextId, contextType: u.K.Various, blockId: y.U.CLIPS }),
                    J = (0, I.P)(null != (t = L.duration) ? t : 0),
                    K = (0, g.M)(V),
                    Z = (0, h._)(V),
                    { ref: G, intersectionPropertyId: X } = (0, j.n)({ callback: K }),
                    Q = (0, n.useRef)(null),
                    q = U && L.previewUrl,
                    $ = (0, p.c)(() => {
                        Q.current && ((Q.current.currentTime = 0), Q.current.play());
                    }),
                    ee = (0, n.useMemo)(() => (0, a.A)($, 500), [$]),
                    et = (0, p.c)(() => {
                        var e;
                        null == (e = Q.current) || e.pause();
                    }),
                    er = (0, n.useMemo)(() => F.ids.indexOf(L.clipId), [F, L.clipId]),
                    { isPlaying: ei, togglePlay: el } = (0, E.D)({
                        playContextParams: {
                            contextData: { type: u.K.Various, meta: { id: N.H.VARIOUS_CLIP_CONTEXT }, from: Y },
                            queueParams: { index: er },
                            entitiesData: F.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(L.clipId),
                        sonataState: F.state,
                        playbackId: P.V.CLIP,
                    }),
                    ea = z ? L.url : (0, b.J)(F.ids, er),
                    eo = (0, p.c)(() => {
                        z ? (B([L.clipId]), Z()) : ei || el();
                    }),
                    en = (0, O.X)({ clip: L, callback: eo }),
                    es = H({ id: 'entity-names.clip-name' }, { clipName: L.title }),
                    ed = (0, n.useMemo)(
                        () =>
                            L.isAvailable
                                ? (0, i.jsxs)(m.t, {
                                      radius: 'm',
                                      className: (0, l.$)(D().view, D().cover),
                                      onMouseEnter: ee,
                                      onMouseLeave: et,
                                      onClick: en,
                                      children: [
                                          q &&
                                              (0, i.jsx)('video', {
                                                  className: D().media,
                                                  ref: Q,
                                                  poster: L.thumbnail && (0, d.oZ)(L.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, i.jsx)('source', { src: L.previewUrl, type: 'video/mp4' }),
                                              }),
                                          L.thumbnail &&
                                              (0, i.jsx)(f._V, {
                                                  className: D().image,
                                                  'aria-hidden': !0,
                                                  src: L.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: d.oZ,
                                              }),
                                          void 0 !== L.duration &&
                                              (0, i.jsx)(v.HL, {
                                                  role: 'text',
                                                  'aria-label': J,
                                                  variant: 'span',
                                                  className: D().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: (0, T.E)(L.duration, L.duration) }),
                                              }),
                                          (0, i.jsx)(M.D, { variant: 'filled', className: D().playButton, onClick: en, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, i.jsx)(m.t, {
                                      radius: 'm',
                                      className: D().unavailableCover,
                                      children: (0, i.jsx)(f.Ab, { className: D().image, iconVariant: 'unavailable', 'data-test-id': c.S7.ENTITY_COVER_FALLBACK_IMAGE }),
                                  }),
                        [J, L.isAvailable, L.thumbnail, L.previewUrl, L.duration, ee, et, en, q],
                    ),
                    ec = (0, n.useMemo)(
                        () =>
                            L.hasArtists
                                ? (0, i.jsx)(
                                      x.i,
                                      { linkClassName: (0, l.$)(D().artistLink, o), artists: L.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: W },
                                      L.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [W, L, o],
                    );
                return (0, i.jsx)(_.MN, {
                    ref: G,
                    className: D().root,
                    explicitMarkComponent:
                        L.explicitDisclaimer &&
                        (0, i.jsx)(w.N, { getDescriptionTexts: L.getDescriptionTexts, variant: L.explicitDisclaimer, size: 'xxs' }, L.getKey('ExplicitMarkIcon')),
                    'aria-label': es,
                    srTitle: (0, i.jsx)(k.N, { className: D().srTitleLink, href: ea, onClick: en, children: es }),
                    title: (0, i.jsxs)(
                        v.HL,
                        {
                            className: (0, l.$)(D().title, r),
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            'aria-hidden': !0,
                            children: [
                                (0, i.jsx)(k.N, {
                                    className: D().titleLink,
                                    href: ea,
                                    tabIndex: -1,
                                    'aria-label': es,
                                    onClick: en,
                                    'data-test-id': c.Kq.clip.CLIP_META_TITLE,
                                    children: L.title,
                                }),
                                L.version && (0, i.jsx)(v.HL, { className: D().version, variant: 'span', children: ' '.concat(L.version) }),
                            ],
                        },
                        L.getKey('Title'),
                    ),
                    'data-intersection-property-id': X,
                    view: ed,
                    description: ec,
                    'data-test-id': c.Kq.clip.CLIP_CARD,
                });
            });
        },
        18483: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => l });
            var i = r(27954);
            let l = () => {
                let {
                    settings: { isMobile: e },
                } = (0, i.g)();
                return !e;
            };
        },
        18639: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            var i = (function (e) {
                return ((e.VARIOUS_CLIP_CONTEXT = 'various-clip-context'), e);
            })({});
        },
        19410: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        28003: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => o });
            var i = r(53712),
                l = r(6969),
                a = r(25895);
            let o = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: r } = (0, a.u)(i.Z.video.href, { query: { [l.K.IDS]: e.join(','), [l.K.ACTIVE_INDEX]: String(t) } });
                return r;
            };
        },
        30716: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => a });
            var i = r(84059),
                l = r(74631);
            r(93588);
            let a = (e) => {
                let t = (0, i.usePathname)(),
                    [r, a] = (0, l.useState)(!1);
                ((0, l.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, l.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, r, t]));
            };
        },
        32652: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => m });
            var i = r(25839),
                l = r(82298),
                a = r(88204),
                o = r(74631),
                n = r(39004),
                s = r(61493),
                d = r(66738),
                c = r(74245),
                u = r(27954),
                p = r(60924),
                _ = r(92870),
                f = r.n(_);
            let m = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: a, containerClassName: _, variant: m, size: v = 'xxxs', ...x } = e,
                    { formatMessage: h } = (0, n.A)(),
                    {
                        settings: { isMobile: g },
                    } = (0, u.g)(),
                    [b, C] = (0, o.useState)(null);
                (0, o.useEffect)(() => {
                    r && r().then(C);
                }, [r, a]);
                let {
                    iconVariant: y,
                    descriptionText: A,
                    isTooltipEnabled: j,
                    ariaLabel: S,
                } = ((e, t) => {
                    let { variant: r, descriptionTexts: i, isMobile: l } = e,
                        a = (null == i ? void 0 : i.join('\n')) || '';
                    return {
                        iconVariant: ((e) => {
                            switch (e) {
                                case c.JU.E:
                                    return 'explicit';
                                case c.JU.AGE_12:
                                case c.JU.AGE_16:
                                case c.JU.AGE_18:
                                    return 'adult';
                                case c.JU.EXCLAMATION:
                            }
                            return 'exclamation';
                        })(r),
                        descriptionText: a,
                        isTooltipEnabled: !!(null == i ? void 0 : i.length) && !l,
                        ariaLabel: a.length > 0 ? a : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: m, descriptionTexts: b, isMobile: g }, h);
                return (0, i.jsx)(p.k, {
                    description: A,
                    placement: 'bottom-start',
                    enabled: j,
                    children: (0, i.jsx)('span', {
                        className: _,
                        children: (0, i.jsx)(d.I, {
                            className: (0, l.$)(f().explicitMark, t),
                            'aria-label': S,
                            variant: y,
                            size: v,
                            ...x,
                            'data-test-id': s.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        32953: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            let i = (0, r(74631).createContext)(null);
        },
        36286: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        36648: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => s });
            var i = r(25839),
                l = r(82298),
                a = r(23976),
                o = r(89728),
                n = r.n(o);
            let s = (e) => {
                let { className: t, textClassName: r, isActive: o } = e;
                return (0, i.jsx)('div', { className: (0, l.$)(n().root, t), children: (0, i.jsx)(a.W, { className: (0, l.$)(n().text, r), isActive: o, radius: 's' }) });
            };
        },
        38392: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => Z }));
            var i = r(25839),
                l = r(84059),
                a = r(82298),
                o = r(88204),
                n = r(74631),
                s = r(39004),
                d = r(61493),
                c = r(71035),
                u = r(4254),
                p = r(64715),
                _ = r(31447),
                f = r(15049),
                m = r(56859),
                v = r(1407),
                x = r(1797),
                h = r(18483),
                g = r(20258),
                b = r(10322),
                C = r(21784),
                y = r(89192),
                A = r(30716),
                j = r(27954),
                S = r(60678),
                T = r(56412),
                I = r(99401),
                N = r(26076),
                P = r(10603),
                E = r(6968),
                R = r(17951),
                w = r(61732),
                k = r(12234),
                M = r(64595),
                O = r(26208),
                L = r(89221),
                D = r(27935),
                U = r(41016),
                W = r(80461),
                V = r(95445);
            async function z(e, t) {
                var r, i, l;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let a = await (0, L.W)(t.locale),
                    o = a({ id: 'metadata.artist-clips-title' }, { artistName: e.artist.name }),
                    n = a({ id: 'metadata.artist-clips-description' }, { artistName: e.artist.name });
                return {
                    title: o,
                    description: n,
                    openGraph: (0, D.i)({
                        ogTitle: o,
                        ogDescription: n,
                        ogType: 'website',
                        fullUrl: null != (r = t.fullUrl) ? r : '',
                        locale: t.locale,
                        customImage: (0, O.v)({ tld: t.tld }),
                        siteName: a({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, U.H)({ cardType: W.W.SUMMARY_LARGE_IMAGE, title: o, description: n }),
                    facebook: (0, M.k)(),
                    appLinks: (0, k.X)({
                        additional: { ...t, url: null != (i = t.url) ? i : '', fullUrl: null != (l = t.fullUrl) ? l : '', host: t.host },
                        appName: a({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, V.S)('/artist/:artistId/clips', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var F = r(28604),
                H = r(19386),
                B = r(90203),
                Y = r.n(B);
            let J = (0, o.PA)((e) => {
                var t, r;
                let { artistId: o, preloadedArtist: k, preloadedClips: M } = e,
                    {
                        artist: O,
                        disclaimerModalState: L,
                        settings: { isMobile: D },
                    } = (0, j.g)(),
                    { formatMessage: U } = (0, s.A)(),
                    { contentScrollRef: W, setContentScrollRef: V } = (0, y.g)(),
                    B = (0, C.W)(),
                    J = (0, h.d)();
                (0, x.S)({ artist: null == (t = O.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                let K = (0, c.c)((e) => {
                    O.clipsSubpage.getData({ artistId: o, page: e, pageSize: _.EV });
                });
                ((0, S.X)(O.clipsSubpage.pagesLoader, K),
                    (0, H.G)(o),
                    (0, F._)(O, o),
                    (0, n.useEffect)(
                        () => () => {
                            O.clipsSubpage.reset();
                        },
                        [O, O.clipsSubpage],
                    ),
                    (0, A.J)(O.clipsSubpage.isResolved),
                    ((e) => {
                        var t;
                        (0, n.useEffect)(() => {
                            (null == e ? void 0 : e.meta) &&
                                !e.infoLoadingState.isLoading &&
                                e.meta.artist &&
                                z({ artist: (0, R.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                    (0, w.j)(e);
                                });
                        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                    })(O));
                let Z = O.clipsSubpage.isShimmerVisible ? 20 : O.clipsSubpage.items.length,
                    G = (0, n.useMemo)(() => ({ Footer: () => (0, i.jsx)(N.A, { children: (0, i.jsx)(I.w, { className: Y().footer }) }) }), []),
                    X = (0, n.useMemo)(() => U({ id: 'page.artist-clips-header' }, { artistName: O.commonSubPage.artistName }), [O.commonSubPage.artistName, U]),
                    Q = [];
                return (O.clipsSubpage.isNeededToLoad && Q.push(O.clipsSubpage.getData({ artistId: o, page: 0, pageSize: _.EV, preloadedClips: M })),
                O.infoLoadingState.isNeededToLoad && Q.push(O.getInfo({ artistId: o, preloadedArtist: k })),
                Q.length && (0, n.use)(Promise.allSettled(Q)),
                (O.clipsSubpage.isNotFound || !J) && (0, l.notFound)(),
                null == (r = O.meta) ? void 0 : r.artist.isLegalRejected)
                    ? (0, i.jsx)(T.M, { modalState: L })
                    : O.clipsSubpage.isRejected
                      ? (0, i.jsx)(p.SomethingWentWrong, {})
                      : (0, i.jsx)(b.n, {
                            pageId: g._Q.ARTIST_CLIPS,
                            pageEntityId: o,
                            children: (0, i.jsx)(v.h, {
                                scrollElement: W,
                                outerTitle: X,
                                children: (0, i.jsxs)('div', {
                                    className: Y().root,
                                    'data-test-id': d.Xk.artist.ARTIST_CLIPS_PAGE,
                                    children: [
                                        (0, i.jsx)(P.Y, {
                                            variant: P.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: B.canBack,
                                            children: (0, i.jsx)(u.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: X }),
                                        }),
                                        (0, i.jsx)(E.$, {
                                            className: (0, a.$)(Y().scrollContainer, Y().important),
                                            listClassName: Y().content,
                                            itemClassName: Y().item,
                                            customComponents: G,
                                            itemContentCallback: (e) => {
                                                let t = O.clipsSubpage.items[e];
                                                return t ? (0, i.jsx)(f.F, { clip: t }, t.clipId) : (0, i.jsx)(m.k, { isActive: !0 });
                                            },
                                            totalCount: Z,
                                            onGetDataByPage: K,
                                            pageSize: _.EV,
                                            totalRequests: O.clipsSubpage.requestsCount,
                                            handleRef: V,
                                            context: { listAriaLabel: U({ id: 'entity-names.artist-clips-list' }) },
                                            isMobileLayout: D,
                                            useWindowScroll: D,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
            var K = r(61288);
            let Z = () => {
                let e = (0, l.useSearchParams)().get('artistId');
                return ((e && (0, K.L)(e)) || (0, l.notFound)(), (0, i.jsx)(J, { artistId: e }));
            };
        },
        38977: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => i });
            let i = (e) => {
                let t = Math.round(e);
                return { hours: Math.floor(t / 3600), minutes: Math.floor((t % 3600) / 60), seconds: t % 60 };
            };
        },
        39528: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => l });
            var i = r(25895);
            let l = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
        },
        40207: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => u });
            var i = r(74631),
                l = r(59342),
                a = r(71035),
                o = r(36484),
                n = r(62562),
                s = r(27954),
                d = r(12929),
                c = r(95067);
            let u = (e) => {
                let {
                        entity: t,
                        entityType: r,
                        getStorageKey: u,
                        callback: p,
                        onAfterHandled: _,
                        onBeforeHandle: f,
                        onReject: m,
                        modalBehavior: v,
                        preventDefaultWhenSafe: x,
                    } = e,
                    {
                        disclaimerModalState: h,
                        modals: { disclaimerModal: g },
                    } = (0, s.g)(),
                    b = (0, i.useRef)(String((0, l.A)())),
                    C = (0, i.useRef)(!1),
                    y = (0, i.useRef)(!1),
                    A = (0, i.useRef)(0),
                    j = (0, i.useRef)(!0),
                    S = (0, n.N)().get(o.U2),
                    T = (0, a.c)((e) => {
                        (x && (null == e || e.preventDefault()), p && p(e), _ && _());
                    });
                return (
                    (0, i.useEffect)(() => {
                        h.isUnsafeDisclaimerConfirmed && h.id === b.current && !C.current && (T(), (C.current = !0));
                    }, [h.id, h.isUnsafeDisclaimerConfirmed, T]),
                    (0, i.useEffect)(() => {
                        h.isNeededToLoad && (null == t ? void 0 : t.isLegalRejected) && t.resolvedModalData && h.setModalData(t.resolvedModalData);
                    }, [h, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.resolvedModalData]),
                    (0, i.useEffect)(
                        () => () => {
                            j.current = !1;
                        },
                        [],
                    ),
                    (0, a.c)(async (e) => {
                        if (!y.current) {
                            y.current = !0;
                            try {
                                if ((null == f || f(e), t)) {
                                    var i, l, a;
                                    let o = t.getDisclaimerEntityRef(r),
                                        n = null != (i = null == u ? void 0 : u(t, o)) ? i : ''.concat(o.entityType, '_').concat(o.entityId),
                                        s = t.isLegalRejected || t.isUnsafeLegal;
                                    if (t.isUnsafeLegal) {
                                        let t = S.get(c.c.ExEx);
                                        if (null == t ? void 0 : t.includes(n)) return void T(e);
                                    }
                                    if (s) {
                                        (null == e || e.preventDefault(),
                                            t.isUnsafeLegal && h.setType(d.Z.UNSAFE),
                                            h.setDisclaimerRejectHandler(null != m ? m : null),
                                            h.setId(b.current),
                                            h.setEntityKey(n),
                                            h.setCurrentEntityRef(o.entityType, o.entityId),
                                            h.setShouldHistoryBack(!!(null == v ? void 0 : v.shouldHistoryBack)),
                                            h.setShouldCloseModalOnOutsidePress(null == (l = null == v ? void 0 : v.closeOnOutside) || l),
                                            h.setShouldCloseModalOnEscape(null == (a = null == v ? void 0 : v.closeOnEscape) || a),
                                            (A.current += 1));
                                        let r = A.current,
                                            i = await t.getModalDisclaimerData();
                                        if (A.current !== r || !1 === j.current) return;
                                        (h.setModalData(null != i ? i : null), (C.current = !1), g.open());
                                        return;
                                    }
                                    (x && (null == e || e.preventDefault()), T(e));
                                    return;
                                }
                                (x && (null == e || e.preventDefault()), T(e));
                            } finally {
                                y.current = !1;
                            }
                        }
                    })
                );
            };
        },
        49438: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => _ });
            var i = r(25839),
                l = r(88204),
                a = r(74631),
                o = r(39004),
                n = r(61493),
                s = r(71035),
                d = r(4071),
                c = r(66738),
                u = r(47009);
            let p = (0, l.PA)((e) => {
                    let {
                            iconSize: t,
                            className: r,
                            size: l,
                            variant: a = 'default',
                            isPlaying: p = !1,
                            onClick: _,
                            iconClassName: f,
                            disabled: m,
                            color: v,
                            buttonVariant: x = 'text',
                            children: h,
                            radius: g = 'round',
                            withHover: b,
                            withRipple: C = !1,
                            ariaDescribedBy: y,
                            forwardRef: A,
                            tabIndex: j,
                            ariaHidden: S,
                            shouldSendAnalyticsOnPlayClick: T,
                        } = e,
                        I = (0, u.b)(),
                        { formatMessage: N } = (0, o.A)(),
                        P = ''.concat(p ? 'pause' : 'play').concat('filled' === a ? '_filled' : ''),
                        E = p ? n.S7.PAUSE_BUTTON : n.S7.PLAY_BUTTON,
                        R = N(p ? { id: 'player-actions.pause' } : { id: 'player-actions.play' }),
                        w = (0, s.c)((e) => {
                            (e.stopPropagation(), e.preventDefault(), null == _ || _(e), T && I(!p));
                        });
                    return (0, i.jsx)(d.$, {
                        className: r,
                        variant: x,
                        color: v,
                        radius: g,
                        size: l,
                        flexIcon: !0,
                        withRipple: C,
                        'aria-label': R,
                        onClick: w,
                        icon: (0, i.jsx)(c.I, { variant: P, size: t, className: f }),
                        disabled: m,
                        withHover: b,
                        'aria-describedby': y,
                        ref: A,
                        tabIndex: j,
                        'aria-hidden': S,
                        'data-test-id': E,
                        children: h,
                    });
                }),
                _ = (0, a.forwardRef)((e, t) => (0, i.jsx)(p, { forwardRef: t, ...e }));
        },
        50209: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => n });
            var i = r(71035),
                l = r(16886),
                a = r(27954),
                o = r(30296);
            let n = (e) => {
                let { playContextParams: t, entityId: r, playbackId: n, sonataState: s } = e,
                    d = (0, o.e)(),
                    { sonataState: c } = (0, a.g)(),
                    u = s || c,
                    p = !1,
                    _ = !1,
                    { contextData: f } = t,
                    {
                        type: m,
                        meta: { id: v },
                    } = f,
                    x = u.contextId === String(v) && m === u.contextType;
                if (r) {
                    var h;
                    p = r === (null == (h = u.entityMeta) ? void 0 : h.idWithContext);
                } else p = x;
                return (
                    (_ = p && u.status === l.MT.PLAYING),
                    {
                        isPlaying: _,
                        isCurrent: p,
                        togglePlay: (0, i.c)(() => {
                            var e;
                            if (!d) return Promise.resolve();
                            let i = null == (e = u.entityMeta) ? void 0 : e.idWithContext;
                            return void 0 !== r && r === i ? d.togglePause(n) : d.playContext(t, n);
                        }),
                        restartPlay: (0, i.c)(() => {
                            null == d || d.setProgress(0, n);
                        }),
                    }
                );
            };
        },
        50622: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 38392));
        },
        51246: (e, t, r) => {
            'use strict';
            r.d(t, { MN: () => c, hg: () => d });
            var i,
                l = r(74631),
                a = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (l && (l += ' '), (l += i));
                                            else for (r in t) t[r] && (l && (l += ' '), (l += r));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    8765: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root: 'KL50tMDvfAdw_9MzcVht',
                            bottom: 'bL0wE1Bui8zpIZbvMVL3',
                            top: 'P6gOmyFtXyetUz0dqhF3',
                            bottom_left: 'RvWjZle1erRBXzJEF9Zj',
                            bottom_right: 'bBh7lvgdfF7bqNqlK78Q',
                            label: 'FgncHYHPDU14dLddn0wF',
                            controls: 'PBhQ1krUFiAybu_BS2YE',
                            controls_radius_default: 'cSCPJSa6Lx6OnpM4ljX9',
                            controls_radius_round: 'kHUOlGxOaBwL4P3jEBXU',
                            controls_visible: 'QZC5vQL9p11QsEkdkTtZ',
                        };
                    },
                    3550: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root: 'laBJlJAaqEVS0i_4Ot3l',
                            titleContainer: 'LmhA6nlLyzxwYIX31gYa',
                            wrapper: 'IO4kvpDGNI2J0CHwcKSf',
                            content: 'l8SktNpJd30JWp1owp_b',
                            content_left: 'Mb33JzAWx9EjbQAeScFt',
                            description: 'kbcBH9meMfY6Du_xQNnI',
                            content_center: 'Dp41JRuLGzwV3MHBYHMC',
                            content_right: 'eOsuNCgUirwAw16iUKLu',
                            title: 'FAmeEGy52GX1k0xZuPDn',
                            content_linesCount_1: 'Cfj1Wkh1bvQMCfk1mZwK',
                            content_linesCount_2: 'lV4OXsCTURC5K1s9Q5mx',
                            content_linesCount_3: 'PVBDIXF2RTUThmbNT9sV',
                            content_linesCount_4: 'ND4XIwkIYtNoU89EOISr',
                        };
                    },
                    4353: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root_controls_xxs: 'tRaaBpDMg9Qu8v6gKjtn',
                            root_entity_xxs: 'M9zvtlcpLUVn6DKdcHhj',
                            root_text_xxs: 'ln0PYYwDmFnfYxCDJsFU',
                            root_controls_xs: 'n5AeWEsJC3_AYXcbK4Lt',
                            root_entity_xs: '__hrMKGmNbw54T54IUyh',
                            root_text_xs: 'SehSa7OyRpC2nzYTVb2Q',
                            root_controls_s: '_oBLf5gprWsKjCw4Ce58',
                            root_entity_s: 'mxSPe5xpZnie9gpIqacd',
                            root_text_s: 'Ai2iRN9elHpk_u5splD6',
                            root_controls_m: 'tk7ahHRDYXJMMB879KUA',
                            root_entity_m: 'Z_WIr2W8JU4MPQek3hgR',
                            root_text_m: 'g3qWNP6xl__7qxNmtrvd',
                            root_controls_l: 'grvxapJE3vGArOKDWf6n',
                            root_entity_l: 'Esj5A1UeSi4xV4tZ839D',
                            root_text_l: 'V3WU123oO65AxsprotU9',
                            root_weight_normal: 'ZYV27jeWd30QDXu4GhaH',
                            root_weight_medium: '_3_Mxw7Si7j2g4kWjlpR',
                            root_weight_bold: 'Vi7Rd0SZWqD17F0872TB',
                        };
                    },
                    2445: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root_size_xs: 'qJJ288377iHlWN_RXeEE',
                            root_size_s: '_sd8Q9d_Ttn0Ufe4ISWS',
                            root_size_m: 'Ctk8dbecq31Qh7isOJPQ',
                            root_size_l: 'M_Djh6ppIkCO3A2k_BTA',
                            root_size_xl: 'dtxlzGQMPAbM2MEndXWX',
                            root_size_xxl: 'IUb9XLplTAoZqne9rNUL',
                            root_size_xxxl: 'ZYZamUwql_rfFR4RpI2B',
                            root_size_xxxxl: 'ZBZyxow5njdq8z5dnRPY',
                            root_size_xxxxxl: 'WdvQQNwdDNCdRSwRkAtT',
                            root_weight_bold: 'nSU6fV9y80WrZEfafvww',
                            root_weight_black: 'KBeGPPK4DinQzAP41Y_N',
                        };
                    },
                    61: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var a in ((i = {}), t)) 'key' !== a && (i[a] = t[a]);
                            else i = t;
                            return { $$typeof: r, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    7742: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let l = r(4377),
                            a = r(5881),
                            o = r(8532),
                            n = i(r(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: r,
                                    likeControl: i,
                                    menuControl: s,
                                    pinControl: d,
                                    trailerControl: c,
                                    isVisible: u,
                                    radius: p = 'default',
                                    bottomContainerClassName: _,
                                    labelText: f,
                                } = e,
                                m = c || r,
                                v = s || i;
                            return (0, l.jsxs)('div', {
                                className: (0, a.clsx)(
                                    n.default.root,
                                    n.default.controls,
                                    { [n.default.controls_visible]: u },
                                    n.default['controls_radius_'.concat(p)],
                                    t,
                                ),
                                children: [
                                    (0, l.jsx)('div', { className: n.default.top, children: d }),
                                    (0, l.jsxs)('div', {
                                        className: (0, a.clsx)(n.default.bottom, _),
                                        children: [
                                            m && (0, l.jsxs)('div', { className: n.default.bottom_left, children: [c, r] }),
                                            v && (0, l.jsxs)('div', { className: n.default.bottom_right, children: [s, i] }),
                                        ],
                                    }),
                                    !!f && (0, l.jsx)(o.Label, { className: n.default.label, children: f }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let l = r(4377),
                            a = r(810),
                            o = r(5881),
                            n = r(8903),
                            s = r(6530),
                            d = i(r(3550)),
                            c = (e) => {
                                let {
                                    forwardRef: t,
                                    view: r,
                                    className: i,
                                    textPosition: a = 'left',
                                    contentLinesCount: c = 2,
                                    title: u,
                                    description: p,
                                    explicitMarkComponent: _,
                                    chart: f,
                                    children: m,
                                    srTitle: v,
                                    wrapperClassName: x,
                                    ...h
                                } = e;
                                return (0, l.jsxs)('div', {
                                    className: (0, o.clsx)(d.default.root, i),
                                    ref: t,
                                    ...h,
                                    children: [
                                        (0, l.jsx)(s.SROnly, { children: null != v ? v : u }),
                                        (0, l.jsx)('div', { className: d.default.viewContainer, children: r }),
                                        (0, l.jsxs)('div', {
                                            className: (0, o.clsx)(d.default.wrapper, x),
                                            children: [
                                                f,
                                                (0, l.jsxs)('div', {
                                                    className: (0, o.clsx)(
                                                        d.default.content,
                                                        d.default['content_'.concat(a)],
                                                        d.default['content_linesCount_'.concat(c)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, l.jsxs)('div', {
                                                                className: d.default.titleContainer,
                                                                children: [
                                                                    (0, l.jsx)(n.Caption, {
                                                                        className: d.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    _,
                                                                ],
                                                            }),
                                                        p,
                                                        m,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, a.forwardRef)((e, t) => (0, l.jsx)(c, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let l = r(4377),
                            a = r(5881),
                            o = r(8903),
                            n = i(r(4353));
                        t.Label = (e) => {
                            let { children: t, className: r, size: i = 's', ...s } = e;
                            return (0, l.jsx)(o.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: i,
                                lineClamp: 1,
                                className: (0, a.clsx)(n.default.root, r),
                                ...s,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var i = r(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return i.Label;
                            },
                        });
                    },
                    5531: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let l = r(4377),
                            a = r(5881),
                            o = r(810),
                            n = i(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: i, ...s } = e,
                                d = (0, a.clsx)(n.default.root, { [n.default.focusable]: r }, t);
                            return (0, o.isValidElement)(i)
                                ? (0, o.cloneElement)(i, { ...s, className: (0, a.clsx)(d, i.props.className) })
                                : (0, l.jsx)('span', { className: d, ...s, children: i });
                        };
                    },
                    6530: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var i = r(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return i.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let l = r(4377),
                            a = r(5881),
                            o = r(810),
                            n = r(5987),
                            s = i(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: i = 'text', size: o = 's', className: d, children: c, weight: u = 'medium', ...p } = e;
                            return (0, l.jsx)(n.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, a.clsx)(s.default.root, s.default['root_'.concat(i, '_').concat(o)], s.default['root_weight_'.concat(u)], d),
                                ...p,
                                children: c,
                            });
                        }),
                            (t.Caption = (0, o.forwardRef)((e, r) => (0, l.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    1641: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let l = r(4377),
                            a = r(5881),
                            o = r(810),
                            n = r(5987),
                            s = i(r(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: r, weight: i = 'bold', size: o = 's', className: d, children: c, ...u } = e;
                            return (0, l.jsx)(n.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, a.clsx)(s.default.root, s.default['root_size_'.concat(o)], s.default['root_weight_'.concat(i)], d),
                                ...u,
                                children: c,
                            });
                        }),
                            (t.Heading = (0, o.forwardRef)((e, r) => (0, l.jsx)(t.HeadingComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let l = r(4377),
                            a = r(5881),
                            o = r(810),
                            n = i(r(61));
                        function s(e) {
                            let { forwardRef: t, style: r, className: i, children: o, variant: s, lineClamp: d, ...c } = e,
                                u = d && 'string' == typeof o ? o : void 0;
                            return (0, l.jsx)(s, {
                                style: { ...r, WebkitLineClamp: d },
                                ref: t,
                                title: u,
                                className: (0, a.clsx)(
                                    n.default.root,
                                    { [n.default.root_clamp]: d && d > 0, [n.default.root_clamp_oneline]: d && 1 === d, [n.default.root_clamp_multiline]: d && d > 1 },
                                    i,
                                ),
                                ...c,
                                children: o,
                            });
                        }
                        ((t.TypographyComponent = s), (t.Typography = (0, o.forwardRef)((e, t) => (0, l.jsx)(s, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var i = r(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return i.Caption;
                            },
                        });
                        var l = r(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return l.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(l, 2));
                    },
                },
                o = {};
            function n(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var r = (o[e] = { exports: {} });
                return (a[e].call(r.exports, r, r.exports, n), r.exports);
            }
            ((n.d = (e, t) => {
                for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (n.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var s = {};
            (() => {
                (Object.defineProperty(s, 'X$', { value: !0 }), (s.kk = s.m7 = void 0));
                var e = n(7093);
                Object.defineProperty(s, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = n(7742);
                Object.defineProperty(s, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var d = s.kk,
                c = s.m7;
            s.X$;
        },
        52512: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => o });
            var i = r(74631),
                l = r(3669),
                a = r(13232);
            let o = function () {
                let { callback: e, singleEvent: t, withViewUuid: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    o = (0, i.useRef)(null),
                    n = (0, l.D)(),
                    s = (0, i.useId)(),
                    d = (0, i.useContext)(a.B),
                    c = (0, i.useCallback)(
                        (i, l) => {
                            (e ? e(i, r ? l : void 0) : n(i, l), t && d.unobserveElement(s));
                        },
                        [e, d, s, n, t, r],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            d.observeElement({ elementRef: o, elementId: s, callback: c }),
                            () => {
                                d.unobserveElement(s);
                            }
                        ),
                        [e, d, c, s, n],
                    ),
                    { ref: o, intersectionPropertyId: s }
                );
            };
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        56348: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => F });
            var i = r(25839),
                l = r(82298),
                a = r(88204),
                o = r(74631),
                n = r(49656),
                s = r(3392),
                d = r(19410),
                c = r(71035),
                u = r(27954),
                p = r(39528);
            let _ = (e, t) => {
                let { withLink: r, separator: i } = t,
                    l = r && !e.various ? (0, p.R)(e.id) : null;
                return { artist: e, name: e.name, separator: i, link: l };
            };
            var f = r(94484),
                m = r.n(f),
                v = r(61493),
                x = r(4254),
                h = r(97522),
                g = r(39004),
                b = r(44031),
                C = r(29481),
                y = r(85686),
                A = r(85743),
                j = r(40207);
            let S = (0, a.PA)((e) => {
                    let { item: t, linkClassName: r, captionClassName: l, captionSize: a = 'm', allArtistsTitle: o, withCustomTooltip: n, hoverSettings: d } = e,
                        {
                            name: p,
                            link: _,
                            title: f,
                            ariaLabel: m,
                            tooltipText: S,
                            isTooltipEnabled: T,
                            handleNavigate: I,
                        } = ((e) => {
                            var t, r;
                            let { item: i, allArtistsTitle: l, withCustomTooltip: a } = e,
                                { formatMessage: o } = (0, g.A)(),
                                n = ((e, t) => {
                                    let { item: r, allArtistsTitle: i, withCustomTooltip: l } = e,
                                        a = i || r.name;
                                    return {
                                        ...r,
                                        title: l ? void 0 : a,
                                        ariaLabel: r.link ? t({ id: 'entity-names.artist-name' }, { artistName: r.name }) : void 0,
                                        tooltipText: a,
                                        isTooltipEnabled: !i && l,
                                    };
                                })({ item: i, allArtistsTitle: l, withCustomTooltip: a }, o),
                                {
                                    track: s,
                                    settings: { isMobile: d },
                                } = (0, u.g)(),
                                p = (0, y.Z)(null != (r = null == (t = n.link) ? void 0 : t.href) ? r : n.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, A.z)(),
                                f = (0, C.N)(),
                                m = (0, c.c)((e) => {
                                    (d && s.isOpened && s.close(), p(e));
                                }),
                                v = ((e) => {
                                    let { artist: t, callback: r } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: l, fullscreenVideoPlayer: a } = (0, u.g)(),
                                        { modal: o } = i;
                                    return (0, j.l)({
                                        entity: t,
                                        callback: r,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), o.isOpened && (i.reset(), o.close()), l.modal.isOpened && l.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: n.artist, callback: m }),
                                x = (0, c.c)((e) => {
                                    (f({ to: b.AppScreen.ArtistScreen }), null == _ || _(), v(e));
                                });
                            return { ...n, handleNavigate: x };
                        })({ item: t, allArtistsTitle: o, withCustomTooltip: n });
                    return _
                        ? (0, i.jsx)(h.N, {
                              ..._,
                              'aria-label': m,
                              className: r,
                              onClick: I,
                              title: f,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(s.m_, {
                                  enabled: T,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: S,
                                  hoverSettings: d,
                                  children: (0, i.jsx)(x.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: l, children: p }),
                              }),
                          })
                        : (0, i.jsx)(s.m_, {
                              enabled: T,
                              offsetOptions: 4,
                              placement: 'top',
                              text: S,
                              hoverSettings: d,
                              children: (0, i.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: l,
                                  title: f,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: p,
                              }),
                          });
                }),
                T = (e) => {
                    let { group: t, linkClassName: r, captionClassName: l, captionSize: a, allArtistsTitle: n, withCustomTooltip: s, hoverSettings: d } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(S, {
                                item: t.primary,
                                linkClassName: r,
                                captionClassName: l,
                                captionSize: a,
                                allArtistsTitle: n,
                                withCustomTooltip: s,
                                hoverSettings: d,
                            }),
                            t.decomposed.map((e) =>
                                (0, i.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, i.jsx)(S, {
                                                item: e,
                                                linkClassName: r,
                                                captionClassName: l,
                                                captionSize: a,
                                                allArtistsTitle: n,
                                                withCustomTooltip: s,
                                                hoverSettings: d,
                                            }),
                                        ],
                                    },
                                    e.artist.id,
                                ),
                            ),
                        ],
                    });
                };
            var I = r(8487),
                N = r(9079);
            let P = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: a } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(N.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(m().spoiler, r),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(I.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var E = r(28631),
                R = r(33049),
                w = r(61912),
                k = r(36286),
                M = r.n(k);
            let O = (0, a.PA)((e) => {
                    let { label: t, artists: r, forwardRef: l } = e;
                    return (0, i.jsxs)(s.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, R.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: l, children: t }),
                            (0, i.jsx)(s.ZI, { className: M().tooltipContent, children: r.map((e) => (0, i.jsx)(w.V, { artist: e, className: M().artistItem }, e.id)) }),
                        ],
                    });
                }),
                L = (0, o.forwardRef)((e, t) => (0, i.jsx)(O, { forwardRef: t, ...e }));
            var D = r(10820),
                U = r(93510),
                W = r.n(U);
            let V = (0, a.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: a } = (0, g.A)();
                    return (0, i.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, l.$)(W().root, W().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, i.jsx)(w.V, { artist: e }, e.id)),
                    });
                }),
                z = (0, a.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: l } = e,
                        [a, s] = (0, o.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, u.g)(),
                        p = (0, c.c)(() => {
                            let e = l.current;
                            e && s(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, n.L)(() =>
                            (0, E.A)(() => {
                                p();
                            }, 100),
                        );
                    if (
                        ((0, o.useEffect)(
                            () => (
                                window.addEventListener('resize', _),
                                p(),
                                () => {
                                    window.removeEventListener('resize', _);
                                }
                            ),
                            [_, p],
                        ),
                        (0, o.useEffect)(() => {
                            p();
                        }, [t, p]),
                        0 !== t.length)
                    )
                        return (a || d) && (!d || 1 !== t.length) ? (d ? (0, i.jsx)(V, { artists: t, label: r }) : (0, i.jsx)(L, { artists: t, label: r })) : r;
                }),
                F = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: r,
                            spoilerClassName: a,
                            linkClassName: p,
                            captionClassName: f,
                            captionSize: v,
                            variant: x = 'breakAll',
                            spoilerComponent: h,
                            ...g
                        } = e,
                        b = ((e) => {
                            var t, r, i;
                            let { separator: l, visibleArtistsCount: a, withLink: n, withComposer: s, artistIdWithoutLink: d, withContextMenu: p } = e,
                                f = null != (t = e.artists) ? t : [],
                                m = null == (r = e.withAllArtistsTitle) || r,
                                v = null == (i = e.withCustomTooltip) || i,
                                x = (0, o.useRef)(null),
                                [h, g] = (0, o.useState)(!1),
                                {
                                    settings: { isMobile: b },
                                } = (0, u.g)(),
                                C = ((!b || 1 === f.length) && p) || !p,
                                y = ((e, t) => {
                                    var r, i, l;
                                    let a = null == (r = null == t ? void 0 : t.withComposer) || r,
                                        o = null == (i = null == t ? void 0 : t.withLink) || i,
                                        n = null != (l = null == t ? void 0 : t.separator) ? l : ', ',
                                        s = e
                                            .flatMap((e) => {
                                                var t;
                                                let r = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...r];
                                            })
                                            .join(n),
                                        { visibleArtists: d, hiddenArtistsCount: c } = ((e, t) => {
                                            let { visibleArtistsCount: r, withComposer: i } = t;
                                            return {
                                                visibleArtists: (r ? e.slice(0, r) : e).filter((e) => i || !e.isComposer),
                                                hiddenArtistsCount: r && r < e.length ? e.length - r : 0,
                                            };
                                        })(e, { withComposer: a, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: d.map((e, r) =>
                                            ((e, t) => {
                                                var r;
                                                let { withLink: i, separator: l, isFirst: a } = t;
                                                return {
                                                    primary: _(e, { withLink: i, separator: a ? void 0 : l }),
                                                    decomposed: (null != (r = e.decomposed) ? r : []).map((e) => {
                                                        let t = l ? e.separator : '';
                                                        return _(e, { withLink: i, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: o && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: n, isFirst: 0 === r }),
                                        ),
                                        allArtistsTitle: s,
                                        hiddenArtistsCount: c,
                                    };
                                })(f, { separator: l, visibleArtistsCount: h ? void 0 : a, withComposer: s, withLink: !!C && n, artistIdWithoutLink: d }),
                                A = m ? y.allArtistsTitle : '',
                                j = (0, c.c)((e) => {
                                    (g(!0), e.preventDefault());
                                });
                            return {
                                artists: f,
                                groups: y.groups,
                                hiddenArtistsCount: y.hiddenArtistsCount,
                                allArtistsTitle: A,
                                withCustomTooltip: v,
                                withContextMenu: p,
                                labelRef: x,
                                handleOnSpoilerClick: j,
                                isTooltipEnabled: !!A && v && !p && !b,
                                title: !A || v || p ? void 0 : A,
                            };
                        })(g),
                        C = (0, n.L)(() =>
                            b.hiddenArtistsCount <= 0
                                ? null
                                : (0, o.isValidElement)(h)
                                  ? h
                                  : (0, i.jsx)(P, { spoilerClassName: a, spoilerArtistsCount: b.hiddenArtistsCount, handleOnSpoilerClick: b.handleOnSpoilerClick }),
                        ),
                        y = (0, i.jsx)(s.m_, {
                            referenceRef: b.labelRef,
                            enabled: b.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: b.allArtistsTitle,
                            hoverSettings: d.V,
                            children: (0, i.jsxs)('div', {
                                style: r ? { WebkitLineClamp: r } : void 0,
                                className: (0, l.$)(m().root, m()['root_variant_'.concat(x)], { [m().root_clamp]: r && r > 0, [m().ellipsis]: !r }, t),
                                title: b.title,
                                children: [
                                    b.groups.map((e) =>
                                        (0, i.jsx)(
                                            T,
                                            {
                                                group: e,
                                                linkClassName: p,
                                                captionClassName: f,
                                                captionSize: v,
                                                allArtistsTitle: b.allArtistsTitle,
                                                withCustomTooltip: b.withCustomTooltip,
                                                hoverSettings: d.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    C,
                                ],
                            }),
                        });
                    return b.withContextMenu ? (0, i.jsx)(z, { labelRef: b.labelRef, artists: b.artists, label: y }) : y;
                });
        },
        56859: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => s });
            var i = r(25839),
                l = r(23976),
                a = r(36648),
                o = r(60205),
                n = r.n(o);
            let s = (e) => {
                let { isActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: n().root,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    children: [
                        (0, i.jsx)(l.W, { isActive: t, className: n().cover, radius: 'l' }),
                        (0, i.jsx)(a.n, { isActive: t, className: n().title }),
                        (0, i.jsx)(a.n, { isActive: t, className: n().text }),
                    ],
                });
            };
        },
        60205: (e) => {
            e.exports = {
                root: 'ClipCardShimmer_root__sIvNr',
                cover: 'ClipCardShimmer_cover__yA4jz',
                title: 'ClipCardShimmer_title__MCApK',
                text: 'ClipCardShimmer_text__ajZGv',
            };
        },
        60924: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => c });
            var i = r(25839),
                l = r(61493),
                a = r(3392),
                o = r(4254),
                n = r(74672),
                s = r.n(n);
            let d = { padding: 8 },
                c = (e) => {
                    let { description: t, enabled: r, title: n, placement: c = 'top', children: u } = e;
                    return (0, i.jsxs)(a.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: c,
                        children: [
                            u,
                            (0, i.jsx)(a.ZI, {
                                className: s().root,
                                'data-test-id': l.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: s().text,
                                    children: [
                                        n && (0, i.jsx)(o.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: n }),
                                        (0, i.jsx)(o.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: s().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61912: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => g });
            var i = r(25839),
                l = r(82298),
                a = r(88204),
                o = r(74631),
                n = r(44031),
                s = r(61493),
                d = r(71035),
                c = r(23818),
                u = r(10820),
                p = r(86869),
                _ = r(4254),
                f = r(29481),
                m = r(85686),
                v = r(27954),
                x = r(53454),
                h = r.n(x);
            let g = (0, a.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: a } = (0, v.g)(),
                    x = (0, m.Z)(t.url),
                    b = (0, f.N)(),
                    C = (0, o.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(g, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    y = (0, d.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), b({ to: n.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, l.$)(h().root, r),
                            onClick: y,
                            'data-test-id': s.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(p.t, {
                                    radius: 'round',
                                    className: h().cover,
                                    children: (0, i.jsx)(c._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: h().image }),
                                }),
                                (0, i.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        C,
                    ],
                });
            });
        },
        63896: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => l });
            var i = r(74631);
            let l = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.pushState(t, '', e);
                    }
                }, []);
        },
        63905: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => f });
            var i = r(67379),
                l = r(20934),
                a = r(59450),
                o = r(71035),
                n = r(20258),
                s = r(26742),
                d = r(25488),
                c = r(97952),
                u = r(10764),
                p = r(72594),
                _ = r(84e3);
            let f = (e) => {
                let t = (0, a.st)(),
                    { hash: r } = (0, a.gf)(),
                    { pageId: f } = (0, c.$)(),
                    { tabId: m, tabPos: v, isTabSelectedByDefault: x } = (0, p.R)(),
                    { blockType: h, blockId: g, blockPosX: b, blockPosY: C, mainObjectType: y, mainObjectId: A } = (0, s.N)(),
                    { objectsCount: j, objectType: S, objectId: T, objectPosX: I, objectPosY: N } = (0, d.J)(),
                    P = (0, _.U)(),
                    { skeleton: E } = (0, u.b)();
                return (0, o.c)((a) => {
                    if (!t || !f || !n.xK.includes(f)) return;
                    let o = {
                        hash: r,
                        pageId: f,
                        entityType: h,
                        entityId: g,
                        entityPosX: b,
                        entityPosY: C,
                        objectsCount: j,
                        viewUuid: e,
                        objectType: S,
                        objectId: T,
                        objectPosX: I,
                        objectPosY: N,
                    };
                    (n.qG.includes(f) && ((o.tabId = m), (o.tabPos = v), (o.isTabSelectedByDefault = x)),
                        E && (o.skeletonId = E),
                        y && (o.mainObjectType = y),
                        A && (o.mainObjectId = A));
                    let s = (0, i.F)({ params: o, logger: P, context: 'useSendEventOnClipShowedOrHidden' });
                    if (s) {
                        if (a) return void (0, l.Pf)(t.evgenInstance, s);
                        (0, l.nv)(t.evgenInstance, s);
                    }
                });
            };
        },
        65165: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => l });
            var i = r(38977);
            let l = (e, t) => {
                let { seconds: r, hours: l, minutes: a } = (0, i.e)(e);
                return t({ id: 'time.hours-minutes-seconds' }, { hours: l, minutes: a, seconds: r });
            };
        },
        65189: (e, t, r) => {
            'use strict';
            r.d(t, { _: () => v });
            var i = r(67379),
                l = r(44031),
                a = r(20934),
                o = r(59450),
                n = r(71035),
                s = r(79670),
                d = r(20258),
                c = r(26742),
                u = r(25488),
                p = r(97952),
                _ = r(10764),
                f = r(72594),
                m = r(84e3);
            let v = (e) => {
                let t = (0, o.st)(),
                    { hash: r } = (0, o.gf)(),
                    { pageId: v } = (0, p.$)(),
                    { tabId: x, tabPos: h, isTabSelectedByDefault: g } = (0, f.R)(),
                    { skeleton: b } = (0, _.b)(),
                    { blockType: C, blockId: y, blockPosX: A, blockPosY: j, mainObjectType: S, mainObjectId: T } = (0, c.N)(),
                    { objectsCount: I, objectType: N, objectId: P, objectPosX: E, objectPosY: R } = (0, u.J)(),
                    w = (0, m.U)();
                return (0, n.c)(() => {
                    if (!t || !v || !d.xK.includes(v)) return;
                    let o = {
                        hash: r,
                        pageId: v,
                        entityType: C,
                        entityId: y,
                        entityPosX: A,
                        entityPosY: j,
                        objectId: P,
                        objectType: N,
                        objectPosX: E,
                        objectPosY: R,
                        objectsCount: I,
                        from: s.W[v],
                        to: l.AppScreen.VideoScreen,
                    };
                    (d.qG.includes(v) && ((o.tabId = x), (o.tabPos = h), (o.isTabSelectedByDefault = g)),
                        b && (o.skeletonId = b),
                        S && (o.mainObjectType = S),
                        T && (o.mainObjectId = T));
                    let n = (0, i.F)({ params: o, logger: w, context: 'useSendEventOnClipNavigated' });
                    n && e && (0, a.QS)(t.evgenInstance, n);
                });
            };
        },
        67560: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => n });
            var i = r(71035),
                l = r(27954),
                a = r(63896),
                o = r(28003);
            let n = () => {
                let { fullscreenVideoPlayer: e } = (0, l.g)(),
                    t = (0, a.p)();
                return (0, i.c)(function (r) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    (e.setIds(r), e.setClipIndex(i), t((0, o.J)(r, i)), e.modal.open());
                });
            };
        },
        68215: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => a });
            var i = r(39004),
                l = r(65165);
            let a = (e) => {
                let { formatMessage: t } = (0, i.A)();
                return (0, l.j)(e, t);
            };
        },
        68891: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                view: 'ClipCard_view__MYSwA',
                playButton: 'ClipCard_playButton__0Wyss',
                duration: 'ClipCard_duration__89ZCx',
                image: 'ClipCard_image__hSUud',
                media: 'ClipCard_media__dU4RM',
                unavailableCover: 'ClipCard_unavailableCover__Zd9jl',
                cover: 'ClipCard_cover__ztEok',
                cover_withoutOffset: 'ClipCard_cover_withoutOffset__aasE2',
                root: 'ClipCard_root__kzWjg',
                srTitleLink: 'ClipCard_srTitleLink__0tQdz',
                title: 'ClipCard_title__I1s7Q',
                artistLink: 'ClipCard_artistLink__t6oPP',
                titleLink: 'ClipCard_titleLink__g3HDM',
                version: 'ClipCard_version__w9PM7',
            };
        },
        74672: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        77179: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            var i = (function (e) {
                return ((e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e);
            })({});
        },
        85743: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => o });
            var i = r(74631),
                l = r(91879),
                a = r(32953);
            let o = () => {
                let { sendSearchFeedback: e, id: t, type: r, blockPosition: o, position: n } = (0, i.useContext)(a.N) || {};
                if (void 0 === t || void 0 === r || void 0 === o || void 0 === n) return {};
                let s = null == e ? void 0 : e.bind(null, { feedbackType: l.n.LIKE, id: t, type: r, blockPosition: o, position: n });
                return {
                    sendLikeSearchFeedback: s,
                    sendNavigateSearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: l.n.NAVIGATE, id: t, type: r, blockPosition: o, position: n }),
                    sendPlaySearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: l.n.PLAY, id: t, type: r, blockPosition: o, position: n }),
                };
            };
        },
        87605: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => l });
            var i = r(40207);
            let l = (e) => {
                let { clip: t, callback: r, disclaimerRejectHandler: l } = e;
                return (0, i.l)({ entity: t, callback: r, onReject: l, modalBehavior: { closeOnOutside: !1, closeOnEscape: !1 }, preventDefaultWhenSafe: !0 });
            };
        },
        89728: (e) => {
            e.exports = { root: 'TextShimmer_root__qqWug', text: 'TextShimmer_text__z8oN9' };
        },
        90203: (e) => {
            e.exports = {
                root: 'ArtistClipsPage_root__3efVS',
                scrollContainer: 'ArtistClipsPage_scrollContainer___2pJZ',
                important: 'ArtistClipsPage_important__UBPcN',
                footer: 'ArtistClipsPage_footer__mhu_A',
                item: 'ArtistClipsPage_item__fonRp',
                content: 'ArtistClipsPage_content__GFs51',
            };
        },
        91879: (e, t, r) => {
            'use strict';
            var i, l;
            (r.d(t, { n: () => l, o: () => i }),
                (function (e) {
                    ((e.ARTIST = 'artist'),
                        (e.ALBUM = 'album'),
                        (e.TRACK = 'track'),
                        (e.PLAYLIST = 'playlist'),
                        (e.USER = 'user'),
                        (e.VIDEO = 'video'),
                        (e.CLIP = 'clip'),
                        (e.PODCAST = 'podcast'),
                        (e.PODCAST_EPISODE = 'podcast_episode'),
                        (e.WAVE = 'wave'),
                        (e.GENRE = 'genre'),
                        (e.SEARCH_PAGE = 'search-page'));
                })(i || (i = {})),
                (function (e) {
                    ((e.PLAY = 'play'), (e.FRIDGE = 'fridge'), (e.NAVIGATE = 'navigate'), (e.LIKE = 'like'));
                })(l || (l = {})));
        },
        91907: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => l });
            let i = (e, t) => (t > 0 ? Math.floor(e / t) : 0),
                l = (e, t) => {
                    let r = i(e, 3600),
                        l = i(e - 3600 * r, 60),
                        a = e - 3600 * r - 60 * l,
                        o = i(t || e, 3600) > 0,
                        n = [l, a];
                    return (o && n.unshift(r), n.map((e) => String(e).padStart(2, '0')).join(':'));
                };
        },
        92870: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        93510: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        94484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 7055, 6287, 740, 1632, 2767, 1256, 6706, 4771, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1251, 1817, 6215, 3257, 3580, 2038, 4163, 3246, 3482,
                6680, 2247, 7856, 8836, 820, 4434, 1344, 4475, 5056, 7358,
            ],
            () => e((e.s = 50622)),
        ),
            (_N_E = e.O()));
    },
]);
