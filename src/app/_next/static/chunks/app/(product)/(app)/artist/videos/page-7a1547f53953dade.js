(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [621],
    {
        3392: (e, t, r) => {
            'use strict';
            r.d(t, { ZI: () => p, m_: () => c });
            var i,
                l = r(89761),
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
                            let { enableAriaDescribedby: t = !1, text: r, children: d, referenceRef: u, ...c } = e,
                                [p, _] = Array.isArray(d) ? d : [d],
                                m = (0, s.useTooltip)(c),
                                f = (0, l.useId)(),
                                v = (0, l.useId)(),
                                x = (0, l.useId)(),
                                h = (0, a.useMergeRefs)([m.refs.setReference, u]);
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, l.cloneElement)(p, {
                                        ref: h,
                                        ...(t ? { 'aria-describedby': f } : {}),
                                        ...m.getReferenceProps(),
                                        ...(0, o.getDataAttrFromProps)(c),
                                        key: v,
                                    }),
                                    m.context.open
                                        ? (0, l.cloneElement)(null != _ ? _ : (0, i.jsx)(n.TooltipContent, {}), {
                                              ref: m.refs.setFloating,
                                              style: { ...m.floatingStyles, visibility: m.referenceHidden ? 'hidden' : 'visible' },
                                              text: r,
                                              arrow: m.arrow,
                                              ...(t ? { id: f } : {}),
                                              ...m.getFloatingProps(),
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
                            let { className: t, children: r, arrow: i, rootNode: u, forwardRef: c, text: p, ..._ } = e;
                            return (0, l.jsx)(n.FloatingPortal, {
                                root: u,
                                children: (0, l.jsxs)('div', {
                                    className: (0, a.clsx)(d.default.root, t),
                                    ref: c,
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
                                    isFocusEnabled: u = !0,
                                    offsetOptions: c,
                                    flipOptions: p = {},
                                    shiftOptions: _ = {},
                                    hoverSettings: m = o,
                                    enabled: f = !0,
                                    arrowProps: v,
                                } = e,
                                [x, h] = (0, l.useState)(t),
                                y = (0, l.useRef)(null),
                                g = null != n ? n : x,
                                C = null != s ? s : h,
                                b = (0, a.useFloating)({
                                    placement: r,
                                    open: g,
                                    onOpenChange: C,
                                    whileElementsMounted: a.autoUpdate,
                                    middleware: [
                                        (0, a.offset)(c),
                                        (0, a.flip)({ crossAxis: r.includes('-'), ...p }),
                                        (0, a.shift)(_),
                                        (0, a.arrow)({ element: y }),
                                        (0, a.hide)(),
                                    ],
                                }),
                                A = b.context,
                                S = (0, a.useHover)(A, { move: !1, enabled: d && f, ...m }),
                                I = (0, a.useFocus)(A, { enabled: u && f }),
                                T = (0, a.useDismiss)(A),
                                j = (0, a.useRole)(A, { role: 'tooltip' }),
                                E = (0, a.useInteractions)([S, I, T, j]),
                                N = (0, l.useMemo)(() => {
                                    if (v) return (0, i.jsx)(a.FloatingArrow, { ref: y, context: b.context, ...v });
                                }, [v, b.context]);
                            return (0, l.useMemo)(() => {
                                var e;
                                return { open: g, setOpen: C, arrow: N, referenceHidden: null == (e = b.middlewareData.hide) ? void 0 : e.referenceHidden, ...E, ...b };
                            }, [g, C, N, E, b]);
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
                            let { forwardRef: t, variant: r, type: i = 'text', size: o = 's', className: d, children: u, weight: c = 'medium', ...p } = e;
                            return (0, l.jsx)(n.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, a.clsx)(s.default.root, s.default['root_'.concat(i, '_').concat(o)], s.default['root_weight_'.concat(c)], d),
                                ...p,
                                children: u,
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
                            let { forwardRef: t, style: r, className: i, children: o, variant: s, lineClamp: d, ...u } = e,
                                c = d && 'string' == typeof o ? o : void 0;
                            return (0, l.jsx)(s, {
                                style: { ...r, WebkitLineClamp: d },
                                ref: t,
                                title: c,
                                className: (0, a.clsx)(
                                    n.default.root,
                                    { [n.default.root_clamp]: d && d > 0, [n.default.root_clamp_oneline]: d && 1 === d, [n.default.root_clamp_multiline]: d && d > 1 },
                                    i,
                                ),
                                ...u,
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
            var u = {};
            (() => {
                (Object.defineProperty(u, 'X$', { value: !0 }), (u._v = u.u = void 0));
                var e = d(853);
                Object.defineProperty(u, 'u', {
                    enumerable: !0,
                    get: function () {
                        return e.Tooltip;
                    },
                });
                var t = d(3343);
                Object.defineProperty(u, '_v', {
                    enumerable: !0,
                    get: function () {
                        return t.TooltipContent;
                    },
                });
            })();
            var c = u.u,
                p = u._v;
            u.X$;
        },
        3669: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => h });
            var i = r(74631),
                l = r(67379),
                a = r(17850),
                o = r(59450),
                n = r(49656),
                s = r(84e3),
                d = r(58069),
                u = r(20258),
                c = r(26742),
                p = r(25195),
                _ = r(37314),
                m = r(25488),
                f = r(97952),
                v = r(10764),
                x = r(72594);
            let h = () => {
                let e = (0, s.U)(),
                    t = (0, o.st)(),
                    { hash: r } = (0, o.gf)(),
                    { pageId: h, displayReasonId: y } = (0, f.$)(),
                    { tabId: g, tabPos: C, isTabSelectedByDefault: b } = (0, x.R)(),
                    { offsetBlockPosY: A } = (0, p.u)(),
                    { blockType: S, blockId: I, blockPosX: T, blockPosY: j, mainObjectId: E, mainObjectType: N, displayReasonId: R } = (0, c.N)(),
                    { filterKey: L, filterValue: P, filterPos: O } = (0, _.G)(),
                    { objectType: k, objectsCount: M, objectId: w, objectPosX: D, objectPosY: U } = (0, m.J)(),
                    { skeleton: W } = (0, v.b)(),
                    B = null != R ? R : y,
                    V = (0, n.L)(() => (void 0 !== A && void 0 !== j ? A + j : j));
                return (0, i.useCallback)(
                    (i, o) => {
                        if (!t || !h || !u.xK.includes(h) || !u.fD.includes(h)) return;
                        let n = d.F[h];
                        if (!n) return;
                        let s = {
                            hash: r,
                            pageId: n,
                            entityType: S,
                            entityId: I,
                            entityPosX: T,
                            entityPosY: V,
                            objectsCount: M,
                            viewUuid: o,
                            objectType: k,
                            objectId: w,
                            objectPosX: D,
                            objectPosY: U,
                        };
                        (void 0 !== L && ((s.filterKey = L), (s.filterValue = P), (s.filterPos = O)),
                            u.qG.includes(h) && ((s.tabId = g), (s.tabPos = C), (s.isTabSelectedByDefault = b)),
                            W && (s.skeletonId = W),
                            'string' == typeof E && 'string' == typeof N && ((s.mainObjectType = N), (s.mainObjectId = E)),
                            B && (s.displayReasonId = B));
                        let c = (0, l.F)({ params: s, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        c && (i ? (0, a.Pf)(t.evgenInstance, c) : (0, a.nv)(t.evgenInstance, c));
                    },
                    [t, B, I, T, V, S, L, O, P, r, b, e, E, N, w, D, U, k, M, h, W, g, C],
                );
            };
        },
        4331: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => K });
            var i = r(25839),
                l = r(82298),
                a = r(88204),
                o = r(74631),
                n = r(49656),
                s = r(3392),
                d = r(19410),
                u = r(71035),
                c = r(27954),
                p = r(39528);
            let _ = (e, t) => {
                let { withLink: r, separator: i } = t,
                    l = r && !e.various ? (0, p.R)(e.id) : null;
                return { artist: e, name: e.name, separator: i, link: l };
            };
            var m = r(94484),
                f = r.n(m),
                v = r(61493),
                x = r(4254),
                h = r(97522),
                y = r(39004),
                g = r(36619),
                C = r(29481),
                b = r(85686),
                A = r(85743),
                S = r(40207);
            let I = (0, a.PA)((e) => {
                    let { item: t, linkClassName: r, captionClassName: l, captionSize: a = 'm', allArtistsTitle: o, withCustomTooltip: n, hoverSettings: d } = e,
                        {
                            name: p,
                            link: _,
                            title: m,
                            ariaLabel: f,
                            tooltipText: I,
                            isTooltipEnabled: T,
                            handleNavigate: j,
                        } = ((e) => {
                            var t, r;
                            let { item: i, allArtistsTitle: l, withCustomTooltip: a } = e,
                                { formatMessage: o } = (0, y.A)(),
                                {
                                    track: n,
                                    settings: { isMobile: s },
                                } = (0, c.g)(),
                                d = (0, b.Z)(null != (r = null == (t = i.link) ? void 0 : t.href) ? r : i.artist.url),
                                { sendNavigateSearchFeedback: p } = (0, A.z)(),
                                _ = (0, C.N)(),
                                m = (0, u.c)((e) => {
                                    (s && n.isOpened && n.close(), d(e));
                                }),
                                f = ((e) => {
                                    let { artist: t, callback: r } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: l, fullscreenVideoPlayer: a } = (0, c.g)(),
                                        { modal: o } = i;
                                    return (0, S.l)({
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
                                })({ artist: i.artist, callback: m }),
                                v = (0, u.c)((e) => {
                                    (_({ to: g.AppScreen.ArtistScreen }), null == p || p(), f(e));
                                }),
                                x = l || i.name;
                            return {
                                name: i.name,
                                link: i.link,
                                title: a ? void 0 : x,
                                ariaLabel: i.link ? o({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                tooltipText: x,
                                isTooltipEnabled: !l && a,
                                handleNavigate: v,
                            };
                        })({ item: t, allArtistsTitle: o, withCustomTooltip: n });
                    return _
                        ? (0, i.jsx)(h.N, {
                              ..._,
                              'aria-label': f,
                              className: r,
                              onClick: j,
                              title: m,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(s.m_, {
                                  enabled: T,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: I,
                                  hoverSettings: d,
                                  children: (0, i.jsx)(x.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: l, children: p }),
                              }),
                          })
                        : (0, i.jsx)(s.m_, {
                              enabled: T,
                              offsetOptions: 4,
                              placement: 'top',
                              text: I,
                              hoverSettings: d,
                              children: (0, i.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: l,
                                  title: m,
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
                            (0, i.jsx)(I, {
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
                                            (0, i.jsx)(I, {
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
            var j = r(8487),
                E = r(9079);
            let N = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: a } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(E.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(f().spoiler, r),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(j.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var R = r(28631),
                L = r(89761),
                P = r(61912),
                O = r(36286),
                k = r.n(O);
            let M = (0, a.PA)((e) => {
                    let { label: t, artists: r, forwardRef: l } = e;
                    return (0, i.jsxs)(s.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, L.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: l, children: t }),
                            (0, i.jsx)(s.ZI, { className: k().tooltipContent, children: r.map((e) => (0, i.jsx)(P.V, { artist: e, className: k().artistItem }, e.id)) }),
                        ],
                    });
                }),
                w = (0, o.forwardRef)((e, t) => (0, i.jsx)(M, { forwardRef: t, ...e }));
            var D = r(10820),
                U = r(93510),
                W = r.n(U);
            let B = (0, a.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: a } = (0, y.A)();
                    return (0, i.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, l.$)(W().root, W().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, i.jsx)(P.V, { artist: e }, e.id)),
                    });
                }),
                V = (0, a.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: l } = e,
                        [a, s] = (0, o.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, c.g)(),
                        p = (0, u.c)(() => {
                            let e = l.current;
                            e && s(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, n.L)(() =>
                            (0, R.A)(() => {
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
                        return (a || d) && (!d || 1 !== t.length) ? (d ? (0, i.jsx)(B, { artists: t, label: r }) : (0, i.jsx)(w, { artists: t, label: r })) : r;
                }),
                K = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: r,
                            spoilerClassName: a,
                            linkClassName: p,
                            captionClassName: m,
                            captionSize: v,
                            variant: x = 'breakAll',
                            spoilerComponent: h,
                            ...y
                        } = e,
                        g = ((e) => {
                            var t, r, i;
                            let { separator: l, visibleArtistsCount: a, withLink: n, withComposer: s, artistIdWithoutLink: d, withContextMenu: p } = e,
                                m = null != (t = e.artists) ? t : [],
                                f = null == (r = e.withAllArtistsTitle) || r,
                                v = null == (i = e.withCustomTooltip) || i,
                                x = (0, o.useRef)(null),
                                [h, y] = (0, o.useState)(!1),
                                {
                                    settings: { isMobile: g },
                                } = (0, c.g)(),
                                C = ((!g || 1 === m.length) && p) || !p,
                                b = ((e, t) => {
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
                                        { visibleArtists: d, hiddenArtistsCount: u } = ((e, t) => {
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
                                        hiddenArtistsCount: u,
                                    };
                                })(m, { separator: l, visibleArtistsCount: h ? void 0 : a, withComposer: s, withLink: !!C && n, artistIdWithoutLink: d }),
                                A = f ? b.allArtistsTitle : '',
                                S = (0, u.c)((e) => {
                                    (y(!0), e.preventDefault());
                                });
                            return {
                                artists: m,
                                groups: b.groups,
                                hiddenArtistsCount: b.hiddenArtistsCount,
                                allArtistsTitle: A,
                                withCustomTooltip: v,
                                withContextMenu: p,
                                labelRef: x,
                                handleOnSpoilerClick: S,
                                isTooltipEnabled: !!A && v && !p && !g,
                                title: !A || v || p ? void 0 : A,
                            };
                        })(y),
                        C = (0, n.L)(() =>
                            g.hiddenArtistsCount <= 0
                                ? null
                                : (0, o.isValidElement)(h)
                                  ? h
                                  : (0, i.jsx)(N, { spoilerClassName: a, spoilerArtistsCount: g.hiddenArtistsCount, handleOnSpoilerClick: g.handleOnSpoilerClick }),
                        ),
                        b = (0, i.jsx)(s.m_, {
                            referenceRef: g.labelRef,
                            enabled: g.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: g.allArtistsTitle,
                            hoverSettings: d.V,
                            children: (0, i.jsxs)('div', {
                                style: r ? { WebkitLineClamp: r } : void 0,
                                className: (0, l.$)(f().root, f()['root_variant_'.concat(x)], { [f().root_clamp]: r && r > 0, [f().ellipsis]: !r }, t),
                                title: g.title,
                                children: [
                                    g.groups.map((e) =>
                                        (0, i.jsx)(
                                            T,
                                            {
                                                group: e,
                                                linkClassName: p,
                                                captionClassName: m,
                                                captionSize: v,
                                                allArtistsTitle: g.allArtistsTitle,
                                                withCustomTooltip: g.withCustomTooltip,
                                                hoverSettings: d.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    C,
                                ],
                            }),
                        });
                    return g.withContextMenu ? (0, i.jsx)(V, { labelRef: g.labelRef, artists: g.artists, label: b }) : b;
                });
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
                    u = (0, l.useMemo)(() => ({ pageId: t, pageEntityId: r, displayReasonId: o, pageStyle: n, pagePlacement: s }), [t, r, o, n, s]);
                return (0, i.jsx)(a.r.Provider, { value: u, children: d });
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
                u = r(61493),
                c = r(22939),
                p = r(71035),
                _ = r(51246),
                m = r(23818),
                f = r(86869),
                v = r(4254),
                x = r(4331),
                h = r(65189),
                y = r(63905),
                g = r(28003),
                C = r(67560),
                b = r(40110),
                A = r(20258),
                S = r(52512),
                I = r(30290),
                T = r(91907),
                j = r(68215),
                E = r(18639),
                N = r(77179),
                R = r(50209),
                L = r(27954),
                P = r(62926),
                O = r(97522),
                k = r(49438),
                M = r(87605),
                w = r(68891),
                D = r.n(w);
            let U = (0, o.PA)((e) => {
                var t;
                let {
                        titleClassName: r,
                        artistLinkClassName: o,
                        clip: w,
                        withVideo: U = !0,
                        artistIdWithoutLink: W,
                        viewUuid: B,
                        shouldOpenModalOnCardClick: V = !0,
                    } = e,
                    { fullscreenVideoPlayer: K } = (0, L.g)(),
                    { formatMessage: F } = (0, s.A)(),
                    H = (0, C.C)(),
                    { from: z } = (0, I.f)({ pageId: A._Q.VIDEO_PLAYER, contextId: K.state.contextId, contextType: c.K.Various, blockId: b.U.CLIPS }),
                    Q = (0, j.P)(null != (t = w.duration) ? t : 0),
                    Y = (0, y.M)(B),
                    G = (0, h._)(B),
                    { ref: J, intersectionPropertyId: Z } = (0, S.n)({ callback: Y }),
                    X = (0, n.useRef)(null),
                    q = U && w.previewUrl,
                    $ = (0, p.c)(() => {
                        X.current && ((X.current.currentTime = 0), X.current.play());
                    }),
                    ee = (0, n.useMemo)(() => (0, a.A)($, 500), [$]),
                    et = (0, p.c)(() => {
                        var e;
                        null == (e = X.current) || e.pause();
                    }),
                    er = (0, n.useMemo)(() => K.ids.indexOf(w.clipId), [K, w.clipId]),
                    { isPlaying: ei, togglePlay: el } = (0, R.D)({
                        playContextParams: {
                            contextData: { type: c.K.Various, meta: { id: E.H.VARIOUS_CLIP_CONTEXT }, from: z },
                            queueParams: { index: er },
                            entitiesData: K.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(w.clipId),
                        sonataState: K.state,
                        playbackId: N.V.CLIP,
                    }),
                    ea = V ? w.url : (0, g.J)(K.ids, er),
                    eo = (0, p.c)(() => {
                        V ? (H([w.clipId]), G()) : ei || el();
                    }),
                    en = (0, M.X)({ clip: w, callback: eo }),
                    es = F({ id: 'entity-names.clip-name' }, { clipName: w.title }),
                    ed = (0, n.useMemo)(
                        () =>
                            w.isAvailable
                                ? (0, i.jsxs)(f.t, {
                                      radius: 'm',
                                      className: (0, l.$)(D().view, D().cover),
                                      onMouseEnter: ee,
                                      onMouseLeave: et,
                                      onClick: en,
                                      children: [
                                          q &&
                                              (0, i.jsx)('video', {
                                                  className: D().media,
                                                  ref: X,
                                                  poster: w.thumbnail && (0, d.oZ)(w.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, i.jsx)('source', { src: w.previewUrl, type: 'video/mp4' }),
                                              }),
                                          w.thumbnail &&
                                              (0, i.jsx)(m._V, {
                                                  className: D().image,
                                                  'aria-hidden': !0,
                                                  src: w.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: d.oZ,
                                              }),
                                          void 0 !== w.duration &&
                                              (0, i.jsx)(v.HL, {
                                                  role: 'text',
                                                  'aria-label': Q,
                                                  variant: 'span',
                                                  className: D().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: (0, T.E)(w.duration, w.duration) }),
                                              }),
                                          (0, i.jsx)(k.D, { variant: 'filled', className: D().playButton, onClick: en, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, i.jsx)(f.t, {
                                      radius: 'm',
                                      className: D().unavailableCover,
                                      children: (0, i.jsx)(m.Ab, { className: D().image, iconVariant: 'unavailable', 'data-test-id': u.S7.ENTITY_COVER_FALLBACK_IMAGE }),
                                  }),
                        [Q, w.isAvailable, w.thumbnail, w.previewUrl, w.duration, ee, et, en, q],
                    ),
                    eu = (0, n.useMemo)(
                        () =>
                            w.hasArtists
                                ? (0, i.jsx)(
                                      x.i,
                                      { linkClassName: (0, l.$)(D().artistLink, o), artists: w.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: W },
                                      w.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [W, w, o],
                    );
                return (0, i.jsx)(_.MN, {
                    ref: J,
                    className: D().root,
                    explicitMarkComponent:
                        w.explicitDisclaimer &&
                        (0, i.jsx)(P.N, { getDescriptionTexts: w.getDescriptionTexts, variant: w.explicitDisclaimer, size: 'xxs' }, w.getKey('ExplicitMarkIcon')),
                    'aria-label': es,
                    srTitle: (0, i.jsx)(O.N, { className: D().srTitleLink, href: ea, onClick: en, children: es }),
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
                                (0, i.jsx)(O.N, {
                                    className: D().titleLink,
                                    href: ea,
                                    tabIndex: -1,
                                    'aria-label': es,
                                    onClick: en,
                                    'data-test-id': u.Kq.clip.CLIP_META_TITLE,
                                    children: w.title,
                                }),
                                w.version && (0, i.jsx)(v.HL, { className: D().version, variant: 'span', children: ' '.concat(w.version) }),
                            ],
                        },
                        w.getKey('Title'),
                    ),
                    'data-intersection-property-id': Z,
                    view: ed,
                    description: eu,
                    'data-test-id': u.Kq.clip.CLIP_CARD,
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
        30290: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => p });
            var i = r(74631);
            r(93588);
            var l = r(26742),
                a = r(97952),
                o = r(84059),
                n = r(40110),
                s = r(22939),
                d = r(20258),
                u = r(98074);
            let c = [n.U.TRAILER],
                p = (e) => {
                    let t = ((e) => {
                            let t = null == e ? void 0 : e.pageId,
                                r = null == e ? void 0 : e.blockId,
                                o = null == e ? void 0 : e.pageEntityId,
                                { pageId: n, pageEntityId: s } = (0, a.$)(),
                                { blockId: d } = (0, l.N)();
                            return (0, i.useMemo)(() => ({ pageId: null != t ? t : n, blockId: null != r ? r : d, pageEntityId: null != o ? o : s }), [r, d, t, o, n, s]);
                        })(e),
                        r = ((e) => {
                            let { pageId: t, blockId: r } = e;
                            return (0, i.useMemo)(() => {
                                let e = ['desktop'];
                                return (t && e.push(t.toLowerCase()), r && e.push(r.toLowerCase()), e.push('default'), e.join('-'));
                            }, [r, t]);
                        })(t),
                        n = ((e) => {
                            let { pageId: t, blockId: r, pageEntityId: l, contextType: a, contextId: n, utmForPageIds: p } = e,
                                _ = (0, o.useSearchParams)();
                            return (0, i.useMemo)(
                                () =>
                                    ((e) => {
                                        let { searchParams: t, pageId: r, pageEntityId: i, utmForPageIds: l, contextId: a, contextType: o, blockId: n } = e,
                                            p = t && Object.fromEntries(t),
                                            _ = ((e) => {
                                                switch (e) {
                                                    case d._Q.ALBUM:
                                                    case d._Q.PROMOLANDING_ALBUM:
                                                    case d._Q.AUDIOBOOK:
                                                    case d._Q.PODCAST:
                                                        return s.K.Album;
                                                    case d._Q.ARTIST:
                                                    case d._Q.ARTIST_TRACKS:
                                                    case d._Q.ARTIST_ALBUMS:
                                                    case d._Q.ARTIST_DISCOGRAPHY:
                                                        return s.K.Artist;
                                                    case d._Q.PLAYLIST:
                                                        return s.K.Playlist;
                                                    default:
                                                        return null;
                                                }
                                            })(r);
                                        return !_ || !p || !i || c.includes(n)
                                            ? null
                                            : (Array.isArray(l) ? l.map((e) => String(e)).includes(String(i)) : !!a && _ === o && String(a) === String(i)) && p
                                              ? (0, u.Z)(p)
                                              : null;
                                    })({ searchParams: _, pageId: t, pageEntityId: l, utmForPageIds: p, contextId: n, contextType: a, blockId: r }),
                                [_, t, l, n, a, r, p],
                            );
                        })({
                            ...t,
                            contextType: null == e ? void 0 : e.contextType,
                            contextId: null == e ? void 0 : e.contextId,
                            utmForPageIds: null == e ? void 0 : e.utmForPageIds,
                        });
                    return (0, i.useMemo)(() => ({ from: r, utmLink: n || void 0 }), [r, n]);
                };
        },
        30296: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => l, e: () => a });
            var i = r(74631);
            let l = (0, i.createContext)(null);
            function a() {
                return (0, i.useContext)(l);
            }
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
            (r.r(t), r.d(t, { default: () => G }));
            var i = r(25839),
                l = r(84059),
                a = r(82298),
                o = r(88204),
                n = r(74631),
                s = r(39004),
                d = r(61493),
                u = r(71035),
                c = r(4254),
                p = r(78299),
                _ = r(31447),
                m = r(15049),
                f = r(56859),
                v = r(1407),
                x = r(1797),
                h = r(18483),
                y = r(20258),
                g = r(10322),
                C = r(21784),
                b = r(89192),
                A = r(30716),
                S = r(27954),
                I = r(60678),
                T = r(56412),
                j = r(99401),
                E = r(26076),
                N = r(10603),
                R = r(6968),
                L = r(17951),
                P = r(61732),
                O = r(12234),
                k = r(64595),
                M = r(26208),
                w = r(89221),
                D = r(27935),
                U = r(41016),
                W = r(80461),
                B = r(95445);
            async function V(e, t) {
                var r, i, l;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let a = await (0, w.W)(t.locale),
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
                        customImage: (0, M.v)({ tld: t.tld }),
                        siteName: a({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, U.H)({ cardType: W.W.SUMMARY_LARGE_IMAGE, title: o, description: n }),
                    facebook: (0, k.k)(),
                    appLinks: (0, O.X)({
                        additional: { ...t, url: null != (i = t.url) ? i : '', fullUrl: null != (l = t.fullUrl) ? l : '', host: t.host },
                        appName: a({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, B.S)('/artist/:artistId/clips', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var K = r(28604),
                F = r(19386),
                H = r(90203),
                z = r.n(H);
            let Q = (0, o.PA)((e) => {
                var t, r;
                let { artistId: o, preloadedArtist: O, preloadedClips: k } = e,
                    {
                        artist: M,
                        disclaimerModalState: w,
                        settings: { isMobile: D },
                    } = (0, S.g)(),
                    { formatMessage: U } = (0, s.A)(),
                    { contentScrollRef: W, setContentScrollRef: B } = (0, b.g)(),
                    H = (0, C.W)(),
                    Q = (0, h.d)();
                (0, x.S)({ artist: null == (t = M.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                let Y = (0, u.c)((e) => {
                    M.clipsSubpage.getData({ artistId: o, page: e, pageSize: _.EV });
                });
                ((0, I.X)(M.clipsSubpage.pagesLoader, Y),
                    (0, F.G)(o),
                    (0, K._)(M, o),
                    (0, n.useEffect)(
                        () => () => {
                            M.clipsSubpage.reset();
                        },
                        [M, M.clipsSubpage],
                    ),
                    (0, A.J)(M.clipsSubpage.isResolved),
                    ((e) => {
                        var t;
                        (0, n.useEffect)(() => {
                            (null == e ? void 0 : e.meta) &&
                                !e.infoLoadingState.isLoading &&
                                e.meta.artist &&
                                V({ artist: (0, L.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                    (0, P.j)(e);
                                });
                        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                    })(M));
                let G = M.clipsSubpage.isShimmerVisible ? 20 : M.clipsSubpage.items.length,
                    J = (0, n.useMemo)(() => ({ Footer: () => (0, i.jsx)(E.A, { children: (0, i.jsx)(j.w, { className: z().footer }) }) }), []),
                    Z = (0, n.useMemo)(() => U({ id: 'page.artist-clips-header' }, { artistName: M.commonSubPage.artistName }), [M.commonSubPage.artistName, U]),
                    X = [];
                return (M.clipsSubpage.isNeededToLoad && X.push(M.clipsSubpage.getData({ artistId: o, page: 0, pageSize: _.EV, preloadedClips: k })),
                M.infoLoadingState.isNeededToLoad && X.push(M.getInfo({ artistId: o, preloadedArtist: O })),
                X.length && (0, n.use)(Promise.allSettled(X)),
                (M.clipsSubpage.isNotFound || !Q) && (0, l.notFound)(),
                null == (r = M.meta) ? void 0 : r.artist.isLegalRejected)
                    ? (0, i.jsx)(T.M, { modalState: w })
                    : M.clipsSubpage.isRejected
                      ? (0, i.jsx)(p.SomethingWentWrong, {})
                      : (0, i.jsx)(g.n, {
                            pageId: y._Q.ARTIST_CLIPS,
                            pageEntityId: o,
                            children: (0, i.jsx)(v.h, {
                                scrollElement: W,
                                outerTitle: Z,
                                children: (0, i.jsxs)('div', {
                                    className: z().root,
                                    'data-test-id': d.Xk.artist.ARTIST_CLIPS_PAGE,
                                    children: [
                                        (0, i.jsx)(N.Y, {
                                            variant: N.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: H.canBack,
                                            children: (0, i.jsx)(c.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: Z }),
                                        }),
                                        (0, i.jsx)(R.$, {
                                            className: (0, a.$)(z().scrollContainer, z().important),
                                            listClassName: z().content,
                                            itemClassName: z().item,
                                            customComponents: J,
                                            itemContentCallback: (e) => {
                                                let t = M.clipsSubpage.items[e];
                                                return t ? (0, i.jsx)(m.F, { clip: t }, t.clipId) : (0, i.jsx)(f.k, { isActive: !0 });
                                            },
                                            totalCount: G,
                                            onGetDataByPage: Y,
                                            pageSize: _.EV,
                                            totalRequests: M.clipsSubpage.requestsCount,
                                            handleRef: B,
                                            context: { listAriaLabel: U({ id: 'entity-names.artist-clips-list' }) },
                                            isMobileLayout: D,
                                            useWindowScroll: D,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
            var Y = r(61288);
            let G = () => {
                let e = (0, l.useSearchParams)().get('artistId');
                return ((e && (0, Y.L)(e)) || (0, l.notFound)(), (0, i.jsx)(Q, { artistId: e }));
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
        40110: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => i });
            var i = (function (e) {
                return (
                    (e.TRACK = 'track'),
                    (e.TRACK_LIST = 'track_list'),
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.RUP = 'rup'),
                    (e.MAIN = 'main'),
                    (e.RADIO = 'radio'),
                    (e.DISCOGRAPHY = 'discography'),
                    (e.CAROUSEL = 'carousel'),
                    (e.ALBUMS = 'albums'),
                    (e.COMPILATIONS = 'compilations'),
                    (e.PLAYLISTS = 'playlists'),
                    (e.ARTISTS = 'artists'),
                    (e.CLIPS = 'clips'),
                    (e.BLOCK = 'block'),
                    (e.DISCOVERY = 'discovery'),
                    (e.SIMILAR = 'similar'),
                    (e.SEARCH = 'search'),
                    (e.HISTORY = 'history'),
                    (e.DEFAULT = 'default'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.FILTERED = 'filtered'),
                    (e.SUGGESTED = 'suggested'),
                    (e.TRAILER = 'trailer'),
                    (e.DONATY = 'donaty'),
                    (e.BEST_RESULTS = 'best_results'),
                    (e.OPEN_BEST_RESULTS = 'open_best_results'),
                    (e.WHEEL = 'wheel'),
                    (e.Q2V = 'q2v'),
                    e
                );
            })({});
        },
        40207: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => c });
            var i = r(74631),
                l = r(59342),
                a = r(71035),
                o = r(36484),
                n = r(62562),
                s = r(27954),
                d = r(12929),
                u = r(95067);
            let c = (e) => {
                let {
                        entity: t,
                        entityType: r,
                        getStorageKey: c,
                        callback: p,
                        onAfterHandled: _,
                        onBeforeHandle: m,
                        onReject: f,
                        modalBehavior: v,
                        preventDefaultWhenSafe: x,
                    } = e,
                    {
                        disclaimerModalState: h,
                        modals: { disclaimerModal: y },
                    } = (0, s.g)(),
                    g = (0, i.useRef)(String((0, l.A)())),
                    C = (0, i.useRef)(!1),
                    b = (0, i.useRef)(!1),
                    A = (0, i.useRef)(0),
                    S = (0, i.useRef)(!0),
                    I = (0, n.N)().get(o.U2),
                    T = (0, a.c)((e) => {
                        (x && (null == e || e.preventDefault()), p && p(e), _ && _());
                    });
                return (
                    (0, i.useEffect)(() => {
                        h.isUnsafeDisclaimerConfirmed && h.id === g.current && !C.current && (T(), (C.current = !0));
                    }, [h.id, h.isUnsafeDisclaimerConfirmed, T]),
                    (0, i.useEffect)(() => {
                        h.isNeededToLoad && (null == t ? void 0 : t.isLegalRejected) && t.resolvedModalData && h.setModalData(t.resolvedModalData);
                    }, [h, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.resolvedModalData]),
                    (0, i.useEffect)(
                        () => () => {
                            S.current = !1;
                        },
                        [],
                    ),
                    (0, a.c)(async (e) => {
                        if (!b.current) {
                            b.current = !0;
                            try {
                                if ((null == m || m(e), t)) {
                                    var i, l, a;
                                    let o = t.getDisclaimerEntityRef(r),
                                        n = null != (i = null == c ? void 0 : c(t, o)) ? i : ''.concat(o.entityType, '_').concat(o.entityId),
                                        s = t.isLegalRejected || t.isUnsafeLegal;
                                    if (t.isUnsafeLegal) {
                                        let t = I.get(u.c.ExEx);
                                        if (null == t ? void 0 : t.includes(n)) return void T(e);
                                    }
                                    if (s) {
                                        (null == e || e.preventDefault(),
                                            t.isUnsafeLegal && h.setType(d.Z.UNSAFE),
                                            h.setDisclaimerRejectHandler(null != f ? f : null),
                                            h.setId(g.current),
                                            h.setEntityKey(n),
                                            h.setCurrentEntityRef(o.entityType, o.entityId),
                                            h.setShouldHistoryBack(!!(null == v ? void 0 : v.shouldHistoryBack)),
                                            h.setShouldCloseModalOnOutsidePress(null == (l = null == v ? void 0 : v.closeOnOutside) || l),
                                            h.setShouldCloseModalOnEscape(null == (a = null == v ? void 0 : v.closeOnEscape) || a),
                                            (A.current += 1));
                                        let r = A.current,
                                            i = await t.getModalDisclaimerData();
                                        if (A.current !== r || !1 === S.current) return;
                                        (h.setModalData(null != i ? i : null), (C.current = !1), y.open());
                                        return;
                                    }
                                    (x && (null == e || e.preventDefault()), T(e));
                                    return;
                                }
                                (x && (null == e || e.preventDefault()), T(e));
                            } finally {
                                b.current = !1;
                            }
                        }
                    })
                );
            };
        },
        47009: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => h });
            var i = r(74631),
                l = r(67379),
                a = r(17850),
                o = r(59450),
                n = r(49656),
                s = r(84e3),
                d = r(58069),
                u = r(20258),
                c = r(26742),
                p = r(25195),
                _ = r(25488),
                m = r(97952),
                f = r(10764),
                v = r(72594);
            let x = [
                    u._Q.HOME,
                    u._Q.LANDING,
                    u._Q.NON_MUSIC,
                    u._Q.OWN_COLLECTION,
                    u._Q.SEARCH,
                    u._Q.CONCERTS,
                    u._Q.ALBUM,
                    u._Q.PLAYLIST,
                    u._Q.SLIDES_SCREEN,
                    u._Q.PROMOLANDING_ALBUM,
                    u._Q.WAVE_LANDING_SCREEN,
                    u._Q.COLLECTION_VIBE_ROOMS,
                    u._Q.MULTIVIBE_SENDING_INVITATION_SCREEN,
                    u._Q.MULTIVIBE_ACTION_SCREEN,
                    u._Q.MULTIVIBE_UNIFIED_SCREEN,
                ],
                h = () => {
                    let e = (0, o.st)(),
                        t = (0, s.U)(),
                        { hash: r } = (0, o.gf)(),
                        { pageId: h } = (0, m.$)(),
                        { tabId: y, tabPos: g, isTabSelectedByDefault: C } = (0, v.R)(),
                        { offsetBlockPosY: b } = (0, p.u)(),
                        { blockId: A, blockType: S, blockPosX: I, blockPosY: T, mainObjectId: j, mainObjectType: E } = (0, c.N)(),
                        { objectId: N, objectPosX: R, objectPosY: L, objectType: P, objectsCount: O } = (0, _.J)(),
                        { skeleton: k } = (0, f.b)(),
                        M = (0, n.L)(() => (void 0 !== b && void 0 !== T ? b + T : T));
                    return (0, i.useCallback)(
                        (i, o) => {
                            if (!e || !h || !u.xK.includes(h) || !i || !x.includes(h)) return;
                            let n = d.F[h];
                            if (!n) return;
                            let s = {
                                hash: r,
                                pageId: n,
                                entityType: S,
                                entityId: A,
                                entityPosX: I,
                                entityPosY: M,
                                objectId: null != o ? o : N,
                                objectType: P,
                                objectPosX: R,
                                objectPosY: L,
                                objectsCount: O,
                            };
                            (u.qG.includes(h) && ((s.tabId = y), (s.tabPos = g), (s.isTabSelectedByDefault = C)),
                                k && (s.skeletonId = k),
                                j && E && ((s.mainObjectType = E), (s.mainObjectId = j)));
                            let c = (0, l.F)({ params: s, logger: t, context: 'useSendEventOnBlockStarted' });
                            c && (0, a.er)(e.evgenInstance, c);
                        },
                        [e, h, r, S, A, I, M, N, P, R, L, O, k, j, E, t, y, g, C],
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
                u = r(66738),
                c = r(47009);
            let p = (0, l.PA)((e) => {
                    let {
                            iconSize: t,
                            className: r,
                            size: l,
                            variant: a = 'default',
                            isPlaying: p = !1,
                            onClick: _,
                            iconClassName: m,
                            disabled: f,
                            color: v,
                            buttonVariant: x = 'text',
                            children: h,
                            radius: y = 'round',
                            withHover: g,
                            withRipple: C = !1,
                            ariaDescribedBy: b,
                            forwardRef: A,
                            tabIndex: S,
                            ariaHidden: I,
                            shouldSendAnalyticsOnPlayClick: T,
                        } = e,
                        j = (0, c.b)(),
                        { formatMessage: E } = (0, o.A)(),
                        N = ''.concat(p ? 'pause' : 'play').concat('filled' === a ? '_filled' : ''),
                        R = p ? n.S7.PAUSE_BUTTON : n.S7.PLAY_BUTTON,
                        L = E(p ? { id: 'player-actions.pause' } : { id: 'player-actions.play' }),
                        P = (0, s.c)((e) => {
                            (e.stopPropagation(), e.preventDefault(), null == _ || _(e), T && j(!p));
                        });
                    return (0, i.jsx)(d.$, {
                        className: r,
                        variant: x,
                        color: v,
                        radius: y,
                        size: l,
                        flexIcon: !0,
                        withRipple: C,
                        'aria-label': L,
                        onClick: P,
                        icon: (0, i.jsx)(u.I, { variant: N, size: t, className: m }),
                        disabled: f,
                        withHover: g,
                        'aria-describedby': b,
                        ref: A,
                        tabIndex: S,
                        'aria-hidden': I,
                        'data-test-id': R,
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
                    { sonataState: u } = (0, a.g)(),
                    c = s || u,
                    p = !1,
                    _ = !1,
                    { contextData: m } = t,
                    {
                        type: f,
                        meta: { id: v },
                    } = m,
                    x = c.contextId === String(v) && f === c.contextType;
                if (r) {
                    var h;
                    p = r === (null == (h = c.entityMeta) ? void 0 : h.idWithContext);
                } else p = x;
                return (
                    (_ = p && c.status === l.MT.PLAYING),
                    {
                        isPlaying: _,
                        isCurrent: p,
                        togglePlay: (0, i.c)(() => {
                            var e;
                            let i = null == (e = c.entityMeta) ? void 0 : e.idWithContext;
                            if (void 0 !== r && r === i) {
                                null == d || d.togglePause(n);
                                return;
                            }
                            null == d || d.playContext(t, n);
                        }),
                        restartPlay: (0, i.c)(() => {
                            null == d || d.setProgress(0, n);
                        }),
                    }
                );
            };
        },
        51246: (e, t, r) => {
            'use strict';
            r.d(t, { MN: () => u, hg: () => d });
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
                                    trailerControl: u,
                                    isVisible: c,
                                    radius: p = 'default',
                                    bottomContainerClassName: _,
                                    labelText: m,
                                } = e,
                                f = u || r,
                                v = s || i;
                            return (0, l.jsxs)('div', {
                                className: (0, a.clsx)(
                                    n.default.root,
                                    n.default.controls,
                                    { [n.default.controls_visible]: c },
                                    n.default['controls_radius_'.concat(p)],
                                    t,
                                ),
                                children: [
                                    (0, l.jsx)('div', { className: n.default.top, children: d }),
                                    (0, l.jsxs)('div', {
                                        className: (0, a.clsx)(n.default.bottom, _),
                                        children: [
                                            f && (0, l.jsxs)('div', { className: n.default.bottom_left, children: [u, r] }),
                                            v && (0, l.jsxs)('div', { className: n.default.bottom_right, children: [s, i] }),
                                        ],
                                    }),
                                    !!m && (0, l.jsx)(o.Label, { className: n.default.label, children: m }),
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
                            u = (e) => {
                                let {
                                    forwardRef: t,
                                    view: r,
                                    className: i,
                                    textPosition: a = 'left',
                                    contentLinesCount: u = 2,
                                    title: c,
                                    description: p,
                                    explicitMarkComponent: _,
                                    chart: m,
                                    children: f,
                                    srTitle: v,
                                    wrapperClassName: x,
                                    ...h
                                } = e;
                                return (0, l.jsxs)('div', {
                                    className: (0, o.clsx)(d.default.root, i),
                                    ref: t,
                                    ...h,
                                    children: [
                                        (0, l.jsx)(s.SROnly, { children: null != v ? v : c }),
                                        (0, l.jsx)('div', { className: d.default.viewContainer, children: r }),
                                        (0, l.jsxs)('div', {
                                            className: (0, o.clsx)(d.default.wrapper, x),
                                            children: [
                                                m,
                                                (0, l.jsxs)('div', {
                                                    className: (0, o.clsx)(
                                                        d.default.content,
                                                        d.default['content_'.concat(a)],
                                                        d.default['content_linesCount_'.concat(u)],
                                                    ),
                                                    children: [
                                                        c &&
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
                                                                        children: c,
                                                                    }),
                                                                    _,
                                                                ],
                                                            }),
                                                        p,
                                                        f,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, a.forwardRef)((e, t) => (0, l.jsx)(u, { forwardRef: t, ...e }));
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
                            let { forwardRef: t, variant: r, type: i = 'text', size: o = 's', className: d, children: u, weight: c = 'medium', ...p } = e;
                            return (0, l.jsx)(n.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, a.clsx)(s.default.root, s.default['root_'.concat(i, '_').concat(o)], s.default['root_weight_'.concat(c)], d),
                                ...p,
                                children: u,
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
                            let { forwardRef: t, variant: r, weight: i = 'bold', size: o = 's', className: d, children: u, ...c } = e;
                            return (0, l.jsx)(n.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, a.clsx)(s.default.root, s.default['root_size_'.concat(o)], s.default['root_weight_'.concat(i)], d),
                                ...c,
                                children: u,
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
                            let { forwardRef: t, style: r, className: i, children: o, variant: s, lineClamp: d, ...u } = e,
                                c = d && 'string' == typeof o ? o : void 0;
                            return (0, l.jsx)(s, {
                                style: { ...r, WebkitLineClamp: d },
                                ref: t,
                                title: c,
                                className: (0, a.clsx)(
                                    n.default.root,
                                    { [n.default.root_clamp]: d && d > 0, [n.default.root_clamp_oneline]: d && 1 === d, [n.default.root_clamp_multiline]: d && d > 1 },
                                    i,
                                ),
                                ...u,
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
                u = s.m7;
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
                    u = (0, i.useCallback)(
                        (i, l) => {
                            (e ? e(i, r ? l : void 0) : n(i, l), t && d.unobserveElement(s));
                        },
                        [e, d, s, n, t, r],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            d.observeElement({ elementRef: o, elementId: s, callback: u }),
                            () => {
                                d.unobserveElement(s);
                            }
                        ),
                        [e, d, u, s, n],
                    ),
                    { ref: o, intersectionPropertyId: s }
                );
            };
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
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
            r.d(t, { k: () => u });
            var i = r(25839),
                l = r(61493),
                a = r(3392),
                o = r(4254),
                n = r(74672),
                s = r.n(n);
            let d = { padding: 8 },
                u = (e) => {
                    let { description: t, enabled: r, title: n, placement: u = 'top', children: c } = e;
                    return (0, i.jsxs)(a.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: u,
                        children: [
                            c,
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
            r.d(t, { V: () => y });
            var i = r(25839),
                l = r(82298),
                a = r(88204),
                o = r(74631),
                n = r(36619),
                s = r(61493),
                d = r(71035),
                u = r(23818),
                c = r(10820),
                p = r(86869),
                _ = r(4254),
                m = r(29481),
                f = r(85686),
                v = r(27954),
                x = r(53454),
                h = r.n(x);
            let y = (0, a.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: a } = (0, v.g)(),
                    x = (0, f.Z)(t.url),
                    g = (0, m.N)(),
                    C = (0, o.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(y, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    b = (0, d.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), g({ to: n.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(c.Dr, {
                            className: (0, l.$)(h().root, r),
                            onClick: b,
                            'data-test-id': s.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(p.t, {
                                    radius: 'round',
                                    className: h().cover,
                                    children: (0, i.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: h().image }),
                                }),
                                (0, i.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        C,
                    ],
                });
            });
        },
        62926: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => v });
            var i = r(25839),
                l = r(82298),
                a = r(88204),
                o = r(74631),
                n = r(39004),
                s = r(74245),
                d = r(61493),
                u = r(49656),
                c = r(66738),
                p = r(27954),
                _ = r(60924),
                m = r(92870),
                f = r.n(m);
            let v = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: a, containerClassName: m, variant: v, size: x = 'xxxs', ...h } = e,
                    { formatMessage: y } = (0, n.A)(),
                    {
                        settings: { isMobile: g },
                    } = (0, p.g)(),
                    [C, b] = (0, o.useState)(null),
                    A = (0, u.L)(() => {
                        switch (v) {
                            case s.JU.E:
                                return 'explicit';
                            case s.JU.AGE_12:
                            case s.JU.AGE_16:
                            case s.JU.AGE_18:
                                return 'adult';
                            case s.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    S = (0, o.useMemo)(() => y({ id: 'extra-explicit.explicit-mark' }), [y]);
                (0, o.useEffect)(() => {
                    r && r().then(b);
                }, [r, a]);
                let I = (null == C ? void 0 : C.join('\n')) || '',
                    T = !!(null == C ? void 0 : C.length) && !g,
                    j = I.length > 0 ? I : S;
                return (0, i.jsx)(_.k, {
                    description: I,
                    placement: 'bottom-start',
                    enabled: T,
                    children: (0, i.jsx)('span', {
                        className: m,
                        children:
                            v === s.JU.SUBSTITUTED
                                ? (0, i.jsxs)('svg', {
                                      className: (0, l.$)(f().explicitMark, t),
                                      viewBox: '0 0 16 16',
                                      role: 'img',
                                      'aria-label': j,
                                      style: { width: 'var(--ym-icon-size-'.concat(x, ')'), height: 'var(--ym-icon-size-'.concat(x, ')') },
                                      ...h,
                                      'data-test-id': d.S7.EXPLICIT_MARK_ICON,
                                      children: [
                                          (0, i.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                          (0, i.jsx)('text', {
                                              x: '8',
                                              y: '9',
                                              fill: 'currentColor',
                                              fontSize: '7',
                                              fontWeight: '700',
                                              textAnchor: 'middle',
                                              dominantBaseline: 'middle',
                                              children: 'S',
                                          }),
                                      ],
                                  })
                                : (0, i.jsx)(c.I, {
                                      className: (0, l.$)(f().explicitMark, t),
                                      'aria-label': j,
                                      variant: A,
                                      size: x,
                                      ...h,
                                      'data-test-id': d.S7.EXPLICIT_MARK_ICON,
                                  }),
                    }),
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
            r.d(t, { M: () => m });
            var i = r(67379),
                l = r(17850),
                a = r(59450),
                o = r(71035),
                n = r(20258),
                s = r(26742),
                d = r(25488),
                u = r(97952),
                c = r(10764),
                p = r(72594),
                _ = r(84e3);
            let m = (e) => {
                let t = (0, a.st)(),
                    { hash: r } = (0, a.gf)(),
                    { pageId: m } = (0, u.$)(),
                    { tabId: f, tabPos: v, isTabSelectedByDefault: x } = (0, p.R)(),
                    { blockType: h, blockId: y, blockPosX: g, blockPosY: C, mainObjectType: b, mainObjectId: A } = (0, s.N)(),
                    { objectsCount: S, objectType: I, objectId: T, objectPosX: j, objectPosY: E } = (0, d.J)(),
                    N = (0, _.U)(),
                    { skeleton: R } = (0, c.b)();
                return (0, o.c)((a) => {
                    if (!t || !m || !n.xK.includes(m)) return;
                    let o = {
                        hash: r,
                        pageId: m,
                        entityType: h,
                        entityId: y,
                        entityPosX: g,
                        entityPosY: C,
                        objectsCount: S,
                        viewUuid: e,
                        objectType: I,
                        objectId: T,
                        objectPosX: j,
                        objectPosY: E,
                    };
                    (n.qG.includes(m) && ((o.tabId = f), (o.tabPos = v), (o.isTabSelectedByDefault = x)),
                        R && (o.skeletonId = R),
                        b && (o.mainObjectType = b),
                        A && (o.mainObjectId = A));
                    let s = (0, i.F)({ params: o, logger: N, context: 'useSendEventOnClipShowedOrHidden' });
                    if (s) {
                        if (a) return void (0, l.Pf)(t.evgenInstance, s);
                        (0, l.nv)(t.evgenInstance, s);
                    }
                });
            };
        },
        65189: (e, t, r) => {
            'use strict';
            r.d(t, { _: () => v });
            var i = r(67379),
                l = r(36619),
                a = r(17850),
                o = r(59450),
                n = r(71035),
                s = r(79670),
                d = r(20258),
                u = r(26742),
                c = r(25488),
                p = r(97952),
                _ = r(10764),
                m = r(72594),
                f = r(84e3);
            let v = (e) => {
                let t = (0, o.st)(),
                    { hash: r } = (0, o.gf)(),
                    { pageId: v } = (0, p.$)(),
                    { tabId: x, tabPos: h, isTabSelectedByDefault: y } = (0, m.R)(),
                    { skeleton: g } = (0, _.b)(),
                    { blockType: C, blockId: b, blockPosX: A, blockPosY: S, mainObjectType: I, mainObjectId: T } = (0, u.N)(),
                    { objectsCount: j, objectType: E, objectId: N, objectPosX: R, objectPosY: L } = (0, c.J)(),
                    P = (0, f.U)();
                return (0, n.c)(() => {
                    if (!t || !v || !d.xK.includes(v)) return;
                    let o = {
                        hash: r,
                        pageId: v,
                        entityType: C,
                        entityId: b,
                        entityPosX: A,
                        entityPosY: S,
                        objectId: N,
                        objectType: E,
                        objectPosX: R,
                        objectPosY: L,
                        objectsCount: j,
                        from: s.W[v],
                        to: l.AppScreen.VideoScreen,
                    };
                    (d.qG.includes(v) && ((o.tabId = x), (o.tabPos = h), (o.isTabSelectedByDefault = y)),
                        g && (o.skeletonId = g),
                        I && (o.mainObjectType = I),
                        T && (o.mainObjectId = T));
                    let n = (0, i.F)({ params: o, logger: P, context: 'useSendEventOnClipNavigated' });
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
                l = r(38977);
            let a = (e) => {
                let { seconds: t, hours: r, minutes: a } = (0, l.e)(e),
                    { formatMessage: o } = (0, i.A)();
                return o({ id: 'time.hours-minutes-seconds' }, { hours: r, minutes: a, seconds: t });
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
        81362: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 38392));
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
        98074: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => l });
            let i = [
                    { queryKey: 'utm_campaign', resultKey: 'utmCampaign' },
                    { queryKey: 'utm_medium', resultKey: 'utmMedium' },
                    { queryKey: 'utm_source', resultKey: 'utmSource' },
                    { queryKey: 'utm_term', resultKey: 'utmTerm' },
                    { queryKey: 'yclid', resultKey: 'yclid' },
                ],
                l = (e) =>
                    i.reduce((t, r) => {
                        let { queryKey: i, resultKey: l } = r;
                        return ('string' == typeof e[i] && (t[l] = e[i]), t);
                    }, {});
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 1676, 6287, 6749, 1632, 1107, 1256, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3257, 4245, 3580, 3269, 4163, 3246, 3482,
                6680, 6504, 5329, 8836, 820, 4434, 4588, 4475, 5056, 7358,
            ],
            () => e((e.s = 81362)),
        ),
            (_N_E = e.O()));
    },
]);
