(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4449],
    {
        5503: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => i });
            var i = (function (e) {
                return ((e.DISABLED = 'DISABLED'), (e.ENABLED = 'ENABLED'), e);
            })({});
        },
        6648: (e, t, n) => {
            'use strict';
            n.d(t, { q: () => i });
            let i = (e) => Array.from(new Set(e)).sort();
        },
        47749: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => A });
            var i = n(88800),
                r = n(53548),
                s = n(29993),
                a = n(54683),
                o = n(4086),
                l = n(41928),
                u = n(29595),
                c = n(74965),
                d = n(72288),
                m = n(5503),
                v = n(84961),
                f = n(88969),
                p = n(52300),
                E = n(29504),
                g = n(4370),
                h = n(59304),
                x = n(91292),
                k = n(64486),
                L = n.n(k);
            let _ = (0, v.PA)((e) => {
                    let { closeToast: t } = e,
                        { fullscreenPlayer: n } = (0, d.g)(),
                        s = (0, r.useCallback)(() => {
                            n.modal.isOpened && n.modal.close();
                        }, [n]),
                        a = (0, r.useMemo)(
                            () =>
                                (0, i.jsxs)('div', {
                                    className: L().message,
                                    children: [
                                        (0, i.jsx)(E.HL, {
                                            className: L().title,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: (0, i.jsx)(f.A, { id: 'lite-version.notification-title' }),
                                        }),
                                        (0, i.jsx)(x.N, {
                                            className: L().link,
                                            href: g.Z.settings.href,
                                            onClick: s,
                                            children: (0, i.jsx)(E.HL, {
                                                className: L().linkText,
                                                variant: 'div',
                                                type: 'controls',
                                                size: 'm',
                                                children: (0, i.jsx)(f.A, { id: 'lite-version.go-to-settings' }),
                                            }),
                                        }),
                                    ],
                                }),
                            [s],
                        );
                    return (0, i.jsx)(h.$, {
                        cover: (0, i.jsx)(p.I, { className: L().icon, size: 'xs', variant: 'liteVersion' }),
                        message: a,
                        closeToast: t,
                        coverRadius: 's',
                    });
                }),
                N = 'vibeAnimationDegradationLevel',
                y = null,
                A = (e) => {
                    let { isEnabled: t } = e,
                        n = (0, r.useRef)(0),
                        v = (0, l.N)(),
                        { notify: f } = (0, c.l)(),
                        { settings: p } = (0, d.g)(),
                        [E, g] = (0, r.useState)(!1),
                        [h, x] = (0, r.useState)(a.IU.DEFAULT),
                        k = v.get(o.vg),
                        L = (0, r.useMemo)(() => (y || (y = new a.Qq()), y), []),
                        A = (0, s.c)((e) => {
                            var t, r;
                            if ((null == (r = window.Ya) || null == (t = r.Rum) || t.sendTimeMark('my-vibe-animation-fps', e.toFixed(1)), e >= 20)) {
                                n.current = 0;
                                return;
                            }
                            if ((n.current++, !(n.current < 3))) {
                                if (((n.current = 0), h !== a.IU.LITE)) {
                                    (x(a.IU.LITE), k.count('liteAnimation', N));
                                    return;
                                }
                                E ||
                                    (g(!0),
                                    k.count('fallback', N),
                                    p.setLiteVersionMode(m.w.ENABLED, !0),
                                    f((0, i.jsx)(_, {}), { containerId: u.u.INFO, autoClose: !1 }));
                            }
                        });
                    return (
                        (0, r.useEffect)(
                            () => (
                                p.isLiteVersionModeAvailableForToggle || !t || E ? (L.stopMeasuring(), (n.current = 0)) : L.startMeasuring(A),
                                () => {
                                    L.stopMeasuring();
                                }
                            ),
                            [L, A, t, E, p.isLiteVersionModeAvailableForToggle],
                        ),
                        { isFallback: E, vibeAnimationState: h }
                    );
                };
        },
        64486: (e) => {
            e.exports = {
                message: 'NotificationLiteVersion_message__IT6FA',
                icon: 'NotificationLiteVersion_icon__T4E8d',
                title: 'NotificationLiteVersion_title__UPCcu',
                linkText: 'NotificationLiteVersion_linkText__L6r3P',
                link: 'NotificationLiteVersion_link__cQUUY',
            };
        },
        78638: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => r, i: () => s });
            var i = n(53548);
            let r = (0, i.createContext)(null);
            function s() {
                return (0, i.useContext)(r);
            }
        },
        83894: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => f });
            var i,
                r,
                s = n(45628),
                a = n(53548),
                o = n(62791),
                l = n(15028),
                u = { out: 'out-in', in: 'in-out' },
                c = function (e, t, n) {
                    return function () {
                        var i;
                        (e.props[t] && (i = e.props)[t].apply(i, arguments), n());
                    };
                },
                d =
                    (((i = {})[u.out] = function (e) {
                        var t = e.current,
                            n = e.changeState;
                        return a.cloneElement(t, {
                            in: !1,
                            onExited: c(t, 'onExited', function () {
                                n(o.ns, null);
                            }),
                        });
                    }),
                    (i[u.in] = function (e) {
                        var t = e.current,
                            n = e.changeState,
                            i = e.children;
                        return [
                            t,
                            a.cloneElement(i, {
                                in: !0,
                                onEntered: c(i, 'onEntered', function () {
                                    n(o.ns);
                                }),
                            }),
                        ];
                    }),
                    i),
                m =
                    (((r = {})[u.out] = function (e) {
                        var t = e.children,
                            n = e.changeState;
                        return a.cloneElement(t, {
                            in: !0,
                            onEntered: c(t, 'onEntered', function () {
                                n(o._K, a.cloneElement(t, { in: !0 }));
                            }),
                        });
                    }),
                    (r[u.in] = function (e) {
                        var t = e.current,
                            n = e.children,
                            i = e.changeState;
                        return [
                            a.cloneElement(t, {
                                in: !1,
                                onExited: c(t, 'onExited', function () {
                                    i(o._K, a.cloneElement(n, { in: !0 }));
                                }),
                            }),
                            a.cloneElement(n, { in: !0 }),
                        ];
                    }),
                    r),
                v = (function (e) {
                    function t() {
                        for (var t, n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                        return (
                            ((t = e.call.apply(e, [this].concat(i)) || this).state = { status: o._K, current: null }),
                            (t.appeared = !1),
                            (t.changeState = function (e, n) {
                                (void 0 === n && (n = t.state.current), t.setState({ status: e, current: n }));
                            }),
                            t
                        );
                    }
                    (0, s.A)(t, e);
                    var n = t.prototype;
                    return (
                        (n.componentDidMount = function () {
                            this.appeared = !0;
                        }),
                        (t.getDerivedStateFromProps = function (e, t) {
                            var n, i;
                            return null == e.children
                                ? { current: null }
                                : t.status === o.ns && e.mode === u.in
                                  ? { status: o.ns }
                                  : t.current &&
                                      !((n = t.current) === (i = e.children) || (a.isValidElement(n) && a.isValidElement(i) && null != n.key && n.key === i.key)) &&
                                      1
                                    ? { status: o.ze }
                                    : { current: a.cloneElement(e.children, { in: !0 }) };
                        }),
                        (n.render = function () {
                            var e,
                                t = this.props,
                                n = t.children,
                                i = t.mode,
                                r = this.state,
                                s = r.status,
                                u = r.current,
                                c = { children: n, current: u, changeState: this.changeState, status: s };
                            switch (s) {
                                case o.ns:
                                    e = m[i](c);
                                    break;
                                case o.ze:
                                    e = d[i](c);
                                    break;
                                case o._K:
                                    e = u;
                            }
                            return a.createElement(l.A.Provider, { value: { isMounting: !this.appeared } }, e);
                        }),
                        t
                    );
                })(a.Component);
            ((v.propTypes = {}), (v.defaultProps = { mode: u.out }));
            let f = v;
        },
        90860: (e, t, n) => {
            'use strict';
            n.d(t, { e: () => c });
            var i = n(53548),
                r = n(18593),
                s = n(58495),
                a = n(9630),
                o = n(72288),
                l = n(6648),
                u = n(554);
            let c = (e) => {
                var t, n, c;
                let { handleLike: d, shouldCheckVibeContext: m } = e,
                    { sonataState: v, vibe: f } = (0, o.g)(),
                    p = (0, a.e)(),
                    E = (() => {
                        var e, t, n, i, s;
                        let { sonataState: l, library: c, vibe: d } = (0, o.g)(),
                            m = (0, a.e)(),
                            v = l.contextType && l.contextId ? (null == m || null == (e = m.state.currentContext.value) ? void 0 : e.data) : void 0;
                        switch (null == v ? void 0 : v.type) {
                            case r.K.Album:
                                return c.isAlbumLiked(v.meta.id);
                            case r.K.Artist:
                                return c.isArtistLiked(v.meta.id);
                            case r.K.Various:
                                return c.isTrackLiked(null != (t = String(v.meta.id).split(':')[0]) ? t : '');
                            case r.K.Playlist: {
                                let [e, t] = String(v.meta.id).split(':'),
                                    r = null != (n = v.meta.uid) ? n : Number(e),
                                    s = null != (i = v.meta.kind) ? i : Number(t);
                                if (!Number.isFinite(r) || !Number.isFinite(s)) return;
                                return c.isPlaylistLiked((0, u.m)({ uid: r, kind: s }));
                            }
                            case r.K.Vibe:
                                if (!(null == (s = d.meta) ? void 0 : s.isLikeEnabled)) return;
                                return d.meta.isLiked;
                            default:
                                return;
                        }
                    })(),
                    g = null == (t = v.entityMeta) ? void 0 : t.id,
                    h = null == (n = v.entityMeta) ? void 0 : n.isLiked,
                    x = !m || v.isVibeContext,
                    k = v.contextType && v.contextId ? (null == p || null == (c = p.state.currentContext.value) ? void 0 : c.data) : void 0,
                    L = (null == k ? void 0 : k.type) === r.K.Vibe ? f.meta && (0, l.q)(f.meta.seeds).join() : null == k ? void 0 : k.meta.id,
                    _ = k && L ? (0, s.D)(k.type, L) : void 0,
                    N = (null == k ? void 0 : k.type) === r.K.Various && String(k.meta.id).split(':')[0] === g,
                    y = (0, i.useRef)({ trackId: g, isTrackLiked: h, contextKey: _, isContextLiked: E });
                (0, i.useEffect)(() => {
                    let e = y.current;
                    y.current = { trackId: g, isTrackLiked: h, contextKey: _, isContextLiked: E };
                    let t = e.trackId === g && h && !e.isTrackLiked;
                    if (x && t) return void d();
                    if ((x && N) || void 0 === _ || void 0 === e.isContextLiked) return;
                    let n = e.contextKey === _,
                        i = E && !e.isContextLiked;
                    n && i && d();
                }, [d, g, h, _, E, x, N]);
            };
        },
        99814: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => a });
            var i = n(53548),
                r = n(4086),
                s = n(41928);
            let a = () => {
                let e = (0, s.N)().get(r.vg),
                    t = (0, i.useRef)(!0);
                (0, i.useEffect)(() => {
                    if (!t.current) return;
                    let n = document.createElement('canvas');
                    try {
                        let i = n.getContext('webgl2') || n.getContext('webgl');
                        if (!i) return;
                        let r = i.getExtension('WEBGL_debug_renderer_info');
                        if (!r) return;
                        let s = i.getParameter(r.UNMASKED_RENDERER_WEBGL);
                        s && (e.count(s, 'gpuRenderer'), (t.current = !1));
                    } catch (e) {}
                    n.remove();
                }, [e]);
            };
        },
    },
]);
