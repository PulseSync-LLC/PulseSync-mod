(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9754],
    {
        148: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        2241: (e) => {
            e.exports = { surface: 'VibeRoomMemberAvatar_surface__L4WU2', overlay: 'VibeRoomMemberAvatar_overlay__9adN4', image: 'VibeRoomMemberAvatar_image__g4AsX' };
        },
        3940: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => f });
            var o = i(25839),
                r = i(82298),
                a = i(88204),
                n = i(39004),
                s = i(8487),
                l = i(36619),
                c = i(61493),
                u = i(71035),
                d = i(4071),
                _ = i(66738),
                m = i(4254),
                b = i(29481),
                v = i(27954),
                p = i(87490),
                g = i(96876),
                y = i.n(g);
            let f = (0, a.PA)((e) => {
                let { withMobileLayout: t } = e,
                    {
                        settings: { isMobile: i },
                        multivibe: a,
                    } = (0, v.g)(),
                    { formatMessage: g } = (0, n.A)(),
                    f = (0, b.N)(),
                    h = t && i,
                    x = (0, u.c)(() => {
                        (f({ to: l.AppScreen.MultivibeSendingInvitationScreen, objectType: l.DomainObjectType.Shortcut }), a.promoModal.open());
                    });
                return (0, o.jsxs)('div', {
                    className: (0, r.$)(y().root, { [y().root_mobile]: h }),
                    'data-test-id': c.Kq.multivibe.MULTIVIBE_SHOW_PROMO_MODAL_CARD,
                    children: [
                        (0, o.jsxs)(d.$, {
                            className: (0, r.$)(y().button, { [y().button_mobile]: h }),
                            'aria-label': g({ id: 'interface-actions.create' }),
                            onClick: x,
                            variant: 'text',
                            isBlock: !0,
                            withRipple: !1,
                            withHover: !1,
                            'data-test-id': c.Kq.multivibe.MULTIVIBE_SHOW_PROMO_MODAL_BUTTON,
                            children: [
                                (0, o.jsx)(p.b, { align: 'back', surfaceClassName: y().surface }),
                                (0, o.jsx)(p.b, {
                                    align: 'front',
                                    surfaceClassName: y().surface,
                                    children: (0, o.jsx)(_.I, { variant: 'add', size: h ? 'xxxs' : 'l', className: y().icon }),
                                }),
                            ],
                        }),
                        (0, o.jsx)('div', {
                            className: y().titleWrapper,
                            children: (0, o.jsx)(m.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                className: (0, r.$)(y().title, { [y().title_mobile]: h }),
                                children: (0, o.jsx)(s.A, { id: 'interface-actions.create' }),
                            }),
                        }),
                    ],
                });
            });
        },
        4111: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        4550: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => s });
            var o = {
                    5881: (e, t, i) => {
                        function o() {
                            for (var e, t, i = 0, o = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            o,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (o = e(t[i])) && (r && (r += ' '), (r += o));
                                            else for (i in t) t[i] && (r && (r += ' '), (r += i));
                                        return r;
                                    })(e)) &&
                                    (o && (o += ' '), (o += t));
                            return o;
                        }
                        (i.r(t), i.d(t, { clsx: () => o, default: () => r }));
                        let r = o;
                    },
                    2059: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => o }));
                        let o = {
                            root: 'i0E_2NX4cuGTUSRVsza3',
                            rotate: 'SMKp_W9v6gety5k24_TU',
                            root_size_xxxs: 'OSqyMcSTAjYqzIL992Yw',
                            root_size_xxs: 'wc4asYHkCHxWpvH_vfHV',
                            root_size_xs: '_EehQphkMVEVJTlcOqgz',
                            root_size_s: 'R_2xF0Onip_K0GrDRV97',
                            root_size_m: 'tQV7pWeuTErBtRna7Fxx',
                            root_size_l: 'OJsrGLXpsIsmbj65C9AC',
                            root_size_xl: 'Vo4fBR82NKcVtfQCh508',
                            root_size_xxl: 'F45u5jR26w00BDX1OFHX',
                            gradient: 'xNNiKSvH1JTxlAkvyDlr',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function o(e, t, o) {
                            var r = null;
                            if ((void 0 !== o && (r = '' + o), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var a in ((o = {}), t)) 'key' !== a && (o[a] = t[a]);
                            else o = t;
                            return { $$typeof: i, type: e, key: r, ref: void 0 !== (t = o.ref) ? t : null, props: o };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = o), (t.jsxs = o));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7279: function (e, t, i) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Spinner = void 0));
                        let r = i(4377),
                            a = i(5881),
                            n = o(i(2059));
                        t.Spinner = (e) => {
                            let { className: t, thicknessSizeRatio: i = 0.1, paddingSizeRatio: o = 0.08, size: s, ...l } = e,
                                c = 100 * i,
                                u = 50 - c / 2 - 100 * o,
                                d = ((3 * Math.PI) / 2) * u;
                            return (0, r.jsxs)('svg', {
                                viewBox: '0 0 '.concat(100, ' ').concat(100),
                                className: (0, a.clsx)(n.default.root, n.default['root_size_'.concat(s)], t),
                                'aria-hidden': !0,
                                ...l,
                                children: [
                                    (0, r.jsx)('defs', {
                                        children: (0, r.jsx)('mask', {
                                            id: 'mask',
                                            maskContentUnits: 'userSpaceOnUse',
                                            children: (0, r.jsx)('circle', {
                                                cx: 50,
                                                cy: 50,
                                                r: u,
                                                stroke: 'white',
                                                strokeLinecap: 'round',
                                                strokeWidth: c,
                                                strokeDasharray: d,
                                                fill: 'none',
                                            }),
                                        }),
                                    }),
                                    (0, r.jsx)('foreignObject', {
                                        x: '0',
                                        y: '0',
                                        width: 100,
                                        height: 100,
                                        mask: 'url(#mask)',
                                        children: (0, r.jsx)('div', { className: n.default.gradient }),
                                    }),
                                ],
                            });
                        };
                    },
                },
                r = {};
            function a(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var i = (r[e] = { exports: {} });
                return (o[e].call(i.exports, i, i.exports, a), i.exports);
            }
            ((a.d = (e, t) => {
                for (var i in t) a.o(t, i) && !a.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (a.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var n = {};
            (() => {
                (Object.defineProperty(n, 'X', { value: !0 }), (n.$ = void 0));
                var e = a(7279);
                Object.defineProperty(n, '$', {
                    enumerable: !0,
                    get: function () {
                        return e.Spinner;
                    },
                });
            })();
            var s = n.$;
            n.X;
        },
        6323: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => l });
            var o = i(25839),
                r = i(74631),
                a = i(61493),
                n = i(23818);
            let s = (e) => {
                    let { isAvailable: t = !0, className: i, fallbackIconSize: r, forwardRef: s, ...l } = e;
                    return t
                        ? (0, o.jsx)(n._V, { ref: s, className: i, fallbackIconSize: r, ...l, 'data-test-id': a.S7.ENTITY_COVER_IMAGE })
                        : (0, o.jsx)(n.Ab, { className: i, iconSize: r, iconVariant: 'unavailable', 'data-test-id': a.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                l = (0, r.forwardRef)((e, t) => (0, o.jsx)(s, { forwardRef: t, ...e }));
        },
        6349: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => y });
            var o = i(25839),
                r = i(82298),
                a = i(88204),
                n = i(74631),
                s = i(39004),
                l = i(61493),
                c = i(86869),
                u = i(4550),
                d = i(27954),
                _ = i(6323),
                m = i(49438),
                b = i(74987),
                v = i(37819),
                p = i.n(v);
            let g = (0, a.PA)((e) => {
                    let {
                            className: t,
                            isAvailable: i,
                            isDisliked: a,
                            coverUri: n,
                            title: v,
                            onPlayButtonClick: g,
                            isPlaying: y,
                            isCurrent: f,
                            radius: h,
                            isPlayButtonLoading: x,
                            isLoading: C,
                            shouldShowControl: T = !0,
                            ariaDescribedBy: I,
                            ignoreDislikedStyles: A,
                            entityCoverStyle: E,
                            forwardRef: S,
                            playButtonIconSize: N = 'xs',
                            alt: R,
                            withLoadingIndicator: O,
                            coverClassName: j,
                            entityCoverClassName: P,
                            controlClassName: M,
                            fallbackIconSize: w = 'xs',
                        } = e,
                        { formatMessage: k } = (0, s.A)(),
                        {
                            settings: { isMobile: L },
                        } = (0, d.g)();
                    return (0, o.jsx)('div', {
                        className: (0, r.$)(p().root, t, { [p().root_disabled]: !i, [p().root_current]: f, [p().root_disliked]: a && !A, [p().root_playing]: y }),
                        'data-test-id': l.S7.PLAY_BUTTON_WITH_COVER,
                        children: (0, o.jsxs)(c.t, {
                            className: (0, r.$)(p().cover, j),
                            radius: h,
                            children: [
                                (0, o.jsx)(_.B, {
                                    className: (0, r.$)(p().coverImage, P),
                                    src: n,
                                    size: 100,
                                    alt: null != R ? R : k({ id: 'entity-names.track-name' }, { trackName: v }),
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    isAvailable: i,
                                    fallbackIconSize: w,
                                    style: E,
                                    withLoadingIndicator: O,
                                }),
                                T &&
                                    (0, o.jsxs)('div', {
                                        className: (0, r.$)(p().control, M),
                                        children: [
                                            !C && (0, o.jsx)(b.P, { stopAnimation: !y, className: p().playingAnimation }),
                                            C && L && (0, o.jsx)(u.y, { size: 'xs', className: p().spinner }),
                                            !L &&
                                                (0, o.jsx)(m.D, {
                                                    ref: S,
                                                    variant: 'filled',
                                                    className: (0, r.$)(p().playButton, { [p().playButton_loading]: x }),
                                                    iconClassName: p().playButtonIcon,
                                                    isPlaying: y,
                                                    onClick: g,
                                                    iconSize: N,
                                                    ariaDescribedBy: I,
                                                    disabled: !i,
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    });
                }),
                y = (0, n.forwardRef)((e, t) => (0, o.jsx)(g, { forwardRef: t, ...e }));
        },
        10126: (e) => {
            e.exports = { root: 'VirtualGrid_root__nSEzJ', column: 'VirtualGrid_column__P8hJp', row: 'VirtualGrid_row__PL5V_' };
        },
        12913: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var o,
                r = i(74631),
                a = {
                    1676: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0));
                        let o = i(810);
                        t.useToggle = (e) => {
                            let [t, i] = (0, o.useState)(e);
                            (0, o.useEffect)(() => {
                                i(e);
                            }, [e]);
                            let r = (0, o.useCallback)(() => {
                                    i((e) => !e);
                                }, []),
                                a = (0, o.useCallback)(() => {
                                    i(!0);
                                }, []),
                                n = (0, o.useCallback)(() => {
                                    i(!1);
                                }, []);
                            return { state: t, toggle: r, setState: i, toggleTrue: a, toggleFalse: n };
                        };
                    },
                    810: (e) => {
                        e.exports = o || (o = i.t(r, 2));
                    },
                },
                n = {};
            function s(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var i = (n[e] = { exports: {} });
                return (a[e](i, i.exports, s), i.exports);
            }
            var l = {};
            ((() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.l = void 0));
                let e = s(810),
                    t = s(1676);
                l.l = (i) => {
                    let { isEnabled: o = !0, onClick: r, shouldStartFromUnscale: a } = i,
                        { state: n, toggleFalse: s, toggleTrue: l } = (0, t.useToggle)(!1),
                        { state: c, toggleFalse: u, toggleTrue: d } = (0, t.useToggle)(!1),
                        _ = (0, e.useCallback)(
                            (e) => {
                                (null == r || r(e), o && (a ? d() : l()), e.stopPropagation(), e.preventDefault());
                            },
                            [o, r, a, l, d],
                        );
                    return {
                        handleAnimationEnd: (0, e.useCallback)(() => {
                            (s(), u());
                        }, [s, u]),
                        handleClick: _,
                        scaleAnimation: n,
                        unscaleAnimation: c,
                    };
                };
            })(),
                l.X);
            var c = l.l;
        },
        14693: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var o,
                r = i(74631),
                a = {
                    810: (e) => {
                        e.exports = o || (o = i.t(r, 2));
                    },
                },
                n = {},
                s = {};
            ((() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.useToggle = void 0));
                let e = (function e(t) {
                    var i = n[t];
                    if (void 0 !== i) return i.exports;
                    var o = (n[t] = { exports: {} });
                    return (a[t](o, o.exports, e), o.exports);
                })(810);
                s.useToggle = (t) => {
                    let [i, o] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        o(t);
                    }, [t]);
                    let r = (0, e.useCallback)(() => {
                            o((e) => !e);
                        }, []),
                        a = (0, e.useCallback)(() => {
                            o(!0);
                        }, []),
                        n = (0, e.useCallback)(() => {
                            o(!1);
                        }, []);
                    return { state: i, toggle: r, setState: o, toggleTrue: a, toggleFalse: n };
                };
            })(),
                s.__esModule);
            var l = s.useToggle;
        },
        15993: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => s });
            var o = i(84059),
                r = i(74631),
                a = i(53712),
                n = i(27954);
            let s = () => {
                let e = (0, o.useRouter)(),
                    { user: t, paywall: i, multivibe: s } = (0, n.g)(),
                    [l, c] = (0, r.useState)(!1),
                    u = !s.isEnabled,
                    d = t.hasPlus,
                    _ = i.modal.isOpened,
                    m = !d && l && !_,
                    b = l && _;
                return (
                    (0, r.useEffect)(() => {
                        if (u || m) return void e.replace(a.Z.main.href);
                        l || d || _ || (i.openModal(), c(!0));
                    }, [d, u, _, l, i, e, m]),
                    { hasPlus: d, isPaywallBlocking: b }
                );
            };
        },
        17226: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => o });
            var o = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        19966: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => r });
            var o = i(79497);
            let r = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, o.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        20006: (e) => {
            e.exports = {
                root: 'VibeRoomMemberAvatarSlot_root__0id8R',
                root_back: 'VibeRoomMemberAvatarSlot_root_back__whzaT',
                root_front: 'VibeRoomMemberAvatarSlot_root_front__ZAlv_',
                surface: 'VibeRoomMemberAvatarSlot_surface__Ylq3t',
                circle: 'VibeRoomMemberAvatarSlot_circle__N0n0t',
                circle_back: 'VibeRoomMemberAvatarSlot_circle_back__XNqs4',
                circle_disabled: 'VibeRoomMemberAvatarSlot_circle_disabled__KTcAv',
            };
        },
        20790: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => a });
            var o = i(74631),
                r = i(73810);
            let a = () => (0, o.useContext)(r.P);
        },
        23775: (e) => {
            e.exports = { root: 'BaseNotificationError_root__FfGUZ', message: 'BaseNotificationError_message___W_xy' };
        },
        24591: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => o });
            let o = (e) => String([...e].sort());
        },
        30290: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => _ });
            var o = i(74631);
            i(93588);
            var r = i(26742),
                a = i(97952),
                n = i(84059),
                s = i(40110),
                l = i(22939),
                c = i(20258),
                u = i(98074);
            let d = [s.U.TRAILER],
                _ = (e) => {
                    let t = ((e) => {
                            let t = null == e ? void 0 : e.pageId,
                                i = null == e ? void 0 : e.blockId,
                                n = null == e ? void 0 : e.pageEntityId,
                                { pageId: s, pageEntityId: l } = (0, a.$)(),
                                { blockId: c } = (0, r.N)();
                            return (0, o.useMemo)(() => ({ pageId: null != t ? t : s, blockId: null != i ? i : c, pageEntityId: null != n ? n : l }), [i, c, t, n, s, l]);
                        })(e),
                        i = ((e) => {
                            let { pageId: t, blockId: i } = e;
                            return (0, o.useMemo)(() => {
                                let e = ['desktop'];
                                return (t && e.push(t.toLowerCase()), i && e.push(i.toLowerCase()), e.push('default'), e.join('-'));
                            }, [i, t]);
                        })(t),
                        s = ((e) => {
                            let { pageId: t, blockId: i, pageEntityId: r, contextType: a, contextId: s, utmForPageIds: _ } = e,
                                m = (0, n.useSearchParams)();
                            return (0, o.useMemo)(
                                () =>
                                    ((e) => {
                                        let { searchParams: t, pageId: i, pageEntityId: o, utmForPageIds: r, contextId: a, contextType: n, blockId: s } = e,
                                            _ = t && Object.fromEntries(t),
                                            m = ((e) => {
                                                switch (e) {
                                                    case c._Q.ALBUM:
                                                    case c._Q.PROMOLANDING_ALBUM:
                                                    case c._Q.AUDIOBOOK:
                                                    case c._Q.PODCAST:
                                                        return l.K.Album;
                                                    case c._Q.ARTIST:
                                                    case c._Q.ARTIST_TRACKS:
                                                    case c._Q.ARTIST_ALBUMS:
                                                    case c._Q.ARTIST_DISCOGRAPHY:
                                                        return l.K.Artist;
                                                    case c._Q.PLAYLIST:
                                                        return l.K.Playlist;
                                                    default:
                                                        return null;
                                                }
                                            })(i);
                                        return !m || !_ || !o || d.includes(s)
                                            ? null
                                            : (Array.isArray(r) ? r.map((e) => String(e)).includes(String(o)) : !!a && m === n && String(a) === String(o)) && _
                                              ? (0, u.Z)(_)
                                              : null;
                                    })({ searchParams: m, pageId: t, pageEntityId: r, utmForPageIds: _, contextId: s, contextType: a, blockId: i }),
                                [m, t, r, s, a, i, _],
                            );
                        })({
                            ...t,
                            contextType: null == e ? void 0 : e.contextType,
                            contextId: null == e ? void 0 : e.contextId,
                            utmForPageIds: null == e ? void 0 : e.utmForPageIds,
                        });
                    return (0, o.useMemo)(() => ({ from: i, utmLink: s || void 0 }), [i, s]);
                };
        },
        30296: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => r, e: () => a });
            var o = i(74631);
            let r = (0, o.createContext)(null);
            function a() {
                return (0, o.useContext)(r);
            }
        },
        30871: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => v });
            var o = i(25839),
                r = i(88204),
                a = i(84059),
                n = i(82298),
                s = i(8487),
                l = i(4254),
                c = i(16978),
                u = i(148),
                d = i.n(u);
            let _ = (0, r.PA)(() =>
                (0, o.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, o.jsx)(l.DZ, {
                            className: (0, n.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, o.jsx)(s.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, o.jsx)(l.HL, {
                            className: (0, n.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, o.jsx)(s.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, o.jsx)(c.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var m = i(53712),
                b = i(27954);
            let v = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: r } = (0, b.g)();
                return r.isAuthorized ? t : (i && (0, a.redirect)(m.Z.main.href), (0, o.jsx)(_, {}));
            });
        },
        31488: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => o });
            var o = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), e);
            })({});
        },
        32190: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var o = i(25839),
                r = i(82298),
                a = i(88204),
                n = i(74631),
                s = i(32942),
                l = i.n(s);
            let c = (0, a.PA)((e) => {
                let { indices: t, virtualItem: i, renderItemByIndex: a, columnClassName: s, className: c, resizeObserver: u, scrollMargin: d } = e,
                    _ = (0, n.useRef)(null),
                    m = t[i.index],
                    b = { '--virtual-grid-row-vertical-offset': ''.concat(i.start - d, 'px') };
                return (
                    (0, n.useEffect)(() => {
                        let e = _.current;
                        if (e)
                            return (
                                null == u || u.observe(e),
                                () => {
                                    null == u || u.unobserve(e);
                                }
                            );
                    }, [u]),
                    (0, o.jsx)('div', {
                        'data-index': i.index,
                        ref: _,
                        style: b,
                        className: (0, r.$)(l().root, c),
                        children: null == m ? void 0 : m.map((e) => (0, o.jsx)('div', { className: s, children: a(e) }, ''.concat(i.key, '_').concat(e))),
                    })
                );
            });
        },
        32942: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        32953: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => o });
            let o = (0, i(74631).createContext)(null);
        },
        35015: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => o });
            var o = (function (e) {
                return (
                    (e.ARTIST = 'artist'),
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.TRACK = 'track'),
                    (e.VIBE = 'vibe'),
                    (e.PODCAST = 'podcast'),
                    (e.PODCAST_EPISODE = 'podcast-episode'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.AUDIOBOOK_EPISODE = 'audiobook-episode'),
                    (e.FAIRY_TALE = 'fairy-tale'),
                    (e.CLIP = 'clip'),
                    e
                );
            })({});
        },
        35656: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionVibeRoomsPage: () => F });
            var o = i(25839),
                r = i(88204),
                a = i(74631),
                n = i(8487),
                s = i(36619),
                l = i(61493),
                c = i(4254),
                u = i(78299),
                d = i(1407),
                _ = i(15993),
                m = i(70154),
                b = i(20258),
                v = i(95858),
                p = i(10322),
                g = i(21784),
                y = i(89192),
                f = i(30716),
                h = i(27954),
                x = i(10603),
                C = i(39004),
                T = i(71035),
                I = i(49656),
                A = i(23818),
                E = i(13833),
                S = i(50176),
                N = i(59877),
                R = i(58222),
                O = i(3940),
                j = i(96382),
                P = i(83243),
                M = i(57138),
                w = i(95314),
                k = i(25895),
                L = i(97522),
                V = i(51868),
                D = i(59650);
            let B = (0, r.PA)((e) => {
                let { room: t } = e,
                    {
                        collection: { vibeRooms: i },
                    } = (0, h.g)(),
                    r = (0, T.c)(() => {
                        i.deleteRoomFromItems(t.id);
                    });
                return (0, o.jsx)(D.E, { room: t, contentLinesCount: 3, withMobileLayout: !0, onRoomSuccessExit: r });
            });
            var U = i(81176),
                W = i.n(U);
            let z = (0, r.PA)((e) => {
                    let { setContentScrollRef: t } = e,
                        {
                            collection: { vibeRooms: i },
                            settings: { isMobile: r },
                            multivibe: u,
                        } = (0, h.g)(),
                        { formatMessage: d } = (0, C.A)(),
                        _ = d({ id: 'loading-messages.entity-is-loading' }, { entityName: d({ id: 'page.vibe-rooms' }) }),
                        m = (0, T.c)(() => 315),
                        b = u.isOnboardingEnabled,
                        { href: v } = (0, k.u)('/slides/special/:campaignId', { params: { campaignId: 'wave_for_two' } }),
                        p = (0, P.l)({ mainObjectType: s.DomainObjectType.NonApplicable });
                    (0, a.useEffect)(
                        () => (
                            p(!0),
                            () => {
                                p(!1);
                            }
                        ),
                        [p],
                    );
                    let g = (0, T.c)(() => void 0),
                        y = (0, T.c)(() => (i.isResolved ? i.items.length + 1 : 4)),
                        f = i.items.length,
                        x = (0, T.c)((e) => {
                            var t, r;
                            if (!i.isResolved) return (0, o.jsx)(V.P, { isActive: !0, 'aria-label': _, withMobileLayout: !0 });
                            if (0 === e)
                                return (0, o.jsx)(M.F, {
                                    blockId: '',
                                    blockType: '',
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    children: (0, o.jsx)(w.B, {
                                        objectType: s.DomainObjectType.Shortcut,
                                        objectId: '',
                                        objectPosX: 0,
                                        objectPosY: 1,
                                        objectsCount: f,
                                        children: (0, o.jsx)(O.f, { withMobileLayout: !0 }),
                                    }),
                                });
                            let a = e - 1,
                                n = i.items[a];
                            return n
                                ? (0, o.jsx)(M.F, {
                                      blockId: '',
                                      blockType: '',
                                      blockPosX: 1,
                                      blockPosY: 1,
                                      children: (0, o.jsx)(w.B, {
                                          objectType: s.DomainObjectType.Wave,
                                          objectId: null != (r = null == (t = n.wave) ? void 0 : t.seedsId) ? r : '',
                                          objectPosX: e,
                                          objectPosY: 1,
                                          objectsCount: f,
                                          children: (0, o.jsx)(B, { room: n }, n.id),
                                      }),
                                  })
                                : (0, o.jsx)(V.P, { isActive: !0, 'aria-label': _, withMobileLayout: !0 });
                        }),
                        D = (0, I.L)(() =>
                            (0, o.jsxs)('div', {
                                className: W().emptyContent,
                                'data-test-id': l.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE_EMPTY,
                                children: [
                                    (0, o.jsx)(R.t, { className: W().multivibeImage }),
                                    (0, o.jsx)(c.HL, {
                                        className: W().emptyContentTitle,
                                        variant: 'div',
                                        size: 'l',
                                        weight: 'bold',
                                        'data-test-id': l.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE_EMPTY_TITLE,
                                        children: (0, o.jsx)(n.A, { id: 'error-messages.empty-collection-vibe-rooms-title' }),
                                    }),
                                    (0, o.jsx)(S.M, { title: d({ id: 'interface-actions.copy-link' }) }),
                                ],
                            }),
                        ),
                        U = (0, I.L)(() =>
                            (0, o.jsx)('div', {
                                className: W().shimmerGrid,
                                children: Array.from({ length: 4 }, (e, t) => (0, o.jsx)(V.P, { isActive: !0, 'aria-label': _, withMobileLayout: !0 }, t)),
                            }),
                        ),
                        z = (0, I.L)(() =>
                            i.isLoading
                                ? U
                                : (0, o.jsx)(j.Q, {
                                      minColumnCount: r ? 1 : 2,
                                      maxColumnCount: r ? 1 : 7,
                                      count: y(),
                                      rowGap: 16,
                                      columnGap: 16,
                                      getEstimateRowSize: m,
                                      minColumnWidth: 170,
                                      maxColumnWidth: 270,
                                      onChangeRange: g,
                                      renderItemByIndex: x,
                                  }),
                        ),
                        F = (0, I.L)(() => (i.isResolved && i.isEmptyItems ? D : (0, o.jsx)('div', { className: W().gridContent, children: z }))),
                        K = (0, I.L)(() =>
                            b
                                ? (0, o.jsxs)(L.N, {
                                      className: W().footer,
                                      href: v,
                                      'aria-label': d({ id: 'page.vibe-rooms-onboarding' }),
                                      children: [
                                          (0, o.jsx)(A._V, {
                                              className: W().onboardingImage,
                                              src: 'avatars.mds.yandex.net/get-music-misc/70683/img.6aba493c4bcf993cdbe7a314/%%',
                                              size: 28,
                                              alt: '',
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              withAvatarReplace: !0,
                                              withAspectRatio: !0,
                                              withFallback: !1,
                                          }),
                                          (0, o.jsx)(N.j, { className: W().multivibeCoBrand }),
                                      ],
                                  })
                                : (0, o.jsx)('div', { className: W().footer, children: (0, o.jsx)(N.j, { className: W().multivibeCoBrand }) }),
                        );
                    return (0, o.jsxs)(E.N, {
                        ref: t,
                        className: W().root,
                        containerClassName: W().container,
                        'data-test-id': l.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE_CONTENT,
                        children: [F, K],
                    });
                }),
                F = (0, r.PA)(() => {
                    let {
                            collection: { vibeRooms: e },
                            multivibe: t,
                        } = (0, h.g)(),
                        { contentScrollRef: i, setContentScrollRef: r } = (0, y.g)(),
                        C = (0, g.W)(),
                        { hasPlus: T, isPaywallBlocking: I } = (0, _.S)();
                    return ((0, a.useEffect)(() => {
                        if (T)
                            return (
                                e.isNeededToLoad && e.getData(),
                                () => {
                                    e.reset();
                                }
                            );
                    }, [T, e]),
                    (0, f.J)(e.isResolved),
                    I)
                        ? null
                        : e.isRejected
                          ? (0, o.jsx)(u.SomethingWentWrong, {})
                          : (0, o.jsx)(p.n, {
                                pageId: b._Q.COLLECTION_VIBE_ROOMS,
                                pageStyle: s.PageStyles.Fullscreen,
                                pagePlacement: s.PagePlacements.Fullscreen,
                                pageEntityId: '',
                                children: (0, o.jsx)(v.j, {
                                    children: (0, o.jsx)(d.h, {
                                        scrollElement: i,
                                        children: (0, o.jsxs)('div', {
                                            className: W().root,
                                            'data-test-id': l.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE,
                                            children: [
                                                (0, o.jsxs)(x.Y, {
                                                    variant: x.V.TEXT,
                                                    withForwardControl: !1,
                                                    withBackwardControl: C.canBack,
                                                    children: [
                                                        (0, o.jsx)(c.DZ, {
                                                            variant: 'h2',
                                                            weight: 'bold',
                                                            size: 'xl',
                                                            lineClamp: 1,
                                                            children: (0, o.jsx)(n.A, { id: 'page.vibe-rooms' }),
                                                        }),
                                                        t.isNDAEnabled && (0, o.jsx)(m.b, {}),
                                                    ],
                                                }),
                                                (0, o.jsx)(z, { setContentScrollRef: r }),
                                            ],
                                        }),
                                    }),
                                }),
                            });
                });
        },
        37052: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => a });
            var o = i(67541),
                r = i(24591);
            let a = (e, t) => (0, o.A)((0, r.f)(e), (0, r.f)(t));
        },
        37819: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'PlayButtonWithCover_root__s6Orw',
                coverImage: 'PlayButtonWithCover_coverImage__DhS1R',
                cover: 'PlayButtonWithCover_cover__5__Ms',
                playingAnimation: 'PlayButtonWithCover_playingAnimation__HWuOW',
                control: 'PlayButtonWithCover_control__iZy3t',
                playButton: 'PlayButtonWithCover_playButton__rV9pQ',
                playButton_loading: 'PlayButtonWithCover_playButton_loading__bqydK',
                'applying-setting': 'PlayButtonWithCover_applying-setting__ZvViA',
                root_current: 'PlayButtonWithCover_root_current__2QYEm',
                root_playing: 'PlayButtonWithCover_root_playing__tAgph',
                root_disabled: 'PlayButtonWithCover_root_disabled__EHoIx',
                root_disliked: 'PlayButtonWithCover_root_disliked__FoWzV',
                spinner: 'PlayButtonWithCover_spinner__ryn04',
                playButtonIcon: 'PlayButtonWithCover_playButtonIcon__DRjkN',
            };
        },
        40110: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => o });
            var o = (function (e) {
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
        40489: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => c });
            var o = i(26508),
                r = i(49656),
                a = i(28631),
                n = i(74631);
            let s = (e) => {
                let { minColumnWidth: t, maxColumnWidth: i, containerWidth: o, totalCount: r, columnGap: a, minColumnCount: n, maxColumnCount: s } = e,
                    l = Math.max(1, Math.floor((o + a) / (t + a))),
                    c = Math.max(n, Math.floor((o + a) / ((i + t) * 0.5 + a)));
                for (let e = n; e <= l; e++) {
                    let r = (o - (e - 1) * a) / e;
                    if (r >= t && r <= i) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(r / (c = s ? Math.min(c, s) : c)), columnCount: c };
            };
            var l = i(52312);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: i,
                        rowGap: c,
                        columnGap: u,
                        minColumnWidth: d,
                        maxColumnWidth: _,
                        minColumnCount: m,
                        maxColumnCount: b,
                        containerRef: v,
                    } = e,
                    { rowCount: p, columnCount: g } = ((e) => {
                        let { containerRef: t, minColumnCount: i, maxColumnWidth: o, minColumnWidth: r, totalCount: l, columnGap: c, maxColumnCount: u } = e,
                            [d, _] = (0, n.useState)({ rowCount: 0, columnCount: 0 }),
                            m = (0, n.useRef)(null),
                            b = (0, n.useMemo)(
                                () =>
                                    (0, a.A)(
                                        (e) => {
                                            _(
                                                s({
                                                    minColumnWidth: r,
                                                    maxColumnWidth: o,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: l,
                                                    columnGap: c,
                                                    minColumnCount: i,
                                                    maxColumnCount: u,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, u, o, i, r, l],
                            );
                        return (
                            (0, n.useLayoutEffect)(
                                () => (
                                    m.current && m.current.disconnect(),
                                    (m.current = new ResizeObserver((e) => {
                                        e.forEach(b);
                                    })),
                                    t &&
                                        (_(
                                            s({
                                                minColumnWidth: r,
                                                maxColumnWidth: o,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: l,
                                                columnGap: c,
                                                minColumnCount: i,
                                                maxColumnCount: u,
                                            }),
                                        ),
                                        m.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = m.current) || e.disconnect();
                                    }
                                ),
                                [c, t, b, u, o, i, r, l],
                            ),
                            d
                        );
                    })({ totalCount: t, columnGap: null != u ? u : 0, minColumnCount: m, maxColumnWidth: _, minColumnWidth: d, maxColumnCount: b, containerRef: v }),
                    { virtualizer: y, resizeObserver: f } = (0, l.r)({ count: p, getEstimateSize: i, gap: c, containerRef: v }),
                    h = (0, o.A)(
                        Array.from({ length: t }, (e, t) => t),
                        g,
                    ),
                    x = (0, r.L)(() => {
                        var e, t;
                        if (!y.range) return null;
                        let i = null == (e = h[y.range.startIndex]) ? void 0 : e.at(0),
                            o = null == (t = h[y.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== i && void 0 !== o ? { startIndex: i, endIndex: o } : null;
                    });
                return { virtualizer: y, rowResizeObserver: f, indices: h, columnCount: g, visibleRange: x };
            };
        },
        41359: (e) => {
            e.exports = {
                root: 'VibeRoomCard_root__5_iia',
                root_mobile: 'VibeRoomCard_root_mobile__v2PVq',
                cardWrapper: 'VibeRoomCard_cardWrapper__SjvtK',
                cardWrapper_mobile: 'VibeRoomCard_cardWrapper_mobile__Zq5mQ',
                roomInfo: 'VibeRoomCard_roomInfo__OH814',
                roomInfo_mobile: 'VibeRoomCard_roomInfo_mobile__q49k2',
                unavailableStatus: 'VibeRoomCard_unavailableStatus___TRYU',
                unavailableStatusDot: 'VibeRoomCard_unavailableStatusDot__HhbgW',
                roomName: 'VibeRoomCard_roomName__vMTor',
                roomName_disabled: 'VibeRoomCard_roomName_disabled__ADQ3G',
                roomName_mobile: 'VibeRoomCard_roomName_mobile__AcCl_',
                textField: 'VibeRoomCard_textField__SZ7Nw',
                avatarsWrapper: 'VibeRoomCard_avatarsWrapper__y7_Rm',
                avatarsWrapper_mobile: 'VibeRoomCard_avatarsWrapper_mobile__jGyAN',
                avatarsWrapper_visible: 'VibeRoomCard_avatarsWrapper_visible__RCg1b',
                avatarsWrapper_disabled: 'VibeRoomCard_avatarsWrapper_disabled__P_0ea',
                playingAnimation: 'VibeRoomCard_playingAnimation__biX8D',
                cardControls: 'VibeRoomCard_cardControls__ffMym',
                control: 'VibeRoomCard_control__QKRAh',
                playControl: 'VibeRoomCard_playControl__DnQ9O',
                menuControl: 'VibeRoomCard_menuControl__KwpDi',
                pinControl: 'VibeRoomCard_pinControl__C3epe',
                menuControl_mobile: 'VibeRoomCard_menuControl_mobile__VsaOD',
                pinControl_mobile: 'VibeRoomCard_pinControl_mobile__5gVK6',
            };
        },
        42966: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => y });
            var o = i(74631),
                r = i(67379),
                a = i(36619),
                n = i(17850),
                s = i(59450),
                l = i(49656),
                c = i(84e3),
                u = i(58069),
                d = i(20258),
                _ = i(26742),
                m = i(25195),
                b = i(25488),
                v = i(97952),
                p = i(10764),
                g = i(72594);
            let y = () => {
                let e = (0, s.st)(),
                    t = (0, c.U)(),
                    { hash: i } = (0, s.gf)(),
                    { pageId: y, pageStyle: f, pagePlacement: h } = (0, v.$)(),
                    { tabId: x, tabPos: C, isTabSelectedByDefault: T } = (0, g.R)(),
                    { offsetBlockPosY: I } = (0, m.u)(),
                    { blockId: A, blockType: E, blockPosX: S, blockPosY: N, mainObjectId: R, mainObjectType: O } = (0, _.N)(),
                    { objectId: j, objectPosX: P, objectPosY: M, objectType: w, objectsCount: k } = (0, b.J)(),
                    { skeleton: L } = (0, p.b)(),
                    V = (0, l.L)(() => (void 0 !== I && void 0 !== N ? I + N : N));
                return (0, o.useCallback)(
                    (o) => {
                        let { objectId: s, objectType: l, actionType: c, userInteractionType: _, objectPosX: m, objectPosY: b, objectCount: v } = o;
                        if (!e || !y || !d.xK.includes(y) || !d.fD.includes(y)) return;
                        let p = u.F[y];
                        if (!p) return;
                        let g = {
                            hash: i,
                            pageId: p,
                            pageStyle: f || a.PageStyles.Fullscreen,
                            pagePlacement: h || a.PagePlacements.Fullscreen,
                            entityType: E,
                            entityId: A,
                            entityPosX: S,
                            entityPosY: V,
                            objectId: null != s ? s : j,
                            objectType: null != l ? l : w,
                            objectPosX: null != m ? m : P,
                            objectPosY: null != b ? b : M,
                            objectsCount: null != v ? v : k,
                            actionType: c,
                            userInteractionType: null != _ ? _ : a.UserInteractionType.Tap,
                        };
                        (d.qG.includes(y) && ((g.tabId = x), (g.tabPos = C), (g.isTabSelectedByDefault = T)),
                            L && (g.skeletonId = L),
                            R && O && ((g.mainObjectType = O), (g.mainObjectId = R)));
                        let I = (0, r.F)({ params: g, logger: t, context: 'useSendEventOnBlockActionPerformed' });
                        I && (0, n.h_)(e.evgenInstance, I);
                    },
                    [j, w, P, M, k, e, y, i, f, h, E, A, S, V, L, R, O, t, x, C, T],
                );
            };
        },
        47009: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => y });
            var o = i(74631),
                r = i(67379),
                a = i(17850),
                n = i(59450),
                s = i(49656),
                l = i(84e3),
                c = i(58069),
                u = i(20258),
                d = i(26742),
                _ = i(25195),
                m = i(25488),
                b = i(97952),
                v = i(10764),
                p = i(72594);
            let g = [
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
                y = () => {
                    let e = (0, n.st)(),
                        t = (0, l.U)(),
                        { hash: i } = (0, n.gf)(),
                        { pageId: y } = (0, b.$)(),
                        { tabId: f, tabPos: h, isTabSelectedByDefault: x } = (0, p.R)(),
                        { offsetBlockPosY: C } = (0, _.u)(),
                        { blockId: T, blockType: I, blockPosX: A, blockPosY: E, mainObjectId: S, mainObjectType: N } = (0, d.N)(),
                        { objectId: R, objectPosX: O, objectPosY: j, objectType: P, objectsCount: M } = (0, m.J)(),
                        { skeleton: w } = (0, v.b)(),
                        k = (0, s.L)(() => (void 0 !== C && void 0 !== E ? C + E : E));
                    return (0, o.useCallback)(
                        (o, n) => {
                            if (!e || !y || !u.xK.includes(y) || !o || !g.includes(y)) return;
                            let s = c.F[y];
                            if (!s) return;
                            let l = {
                                hash: i,
                                pageId: s,
                                entityType: I,
                                entityId: T,
                                entityPosX: A,
                                entityPosY: k,
                                objectId: null != n ? n : R,
                                objectType: P,
                                objectPosX: O,
                                objectPosY: j,
                                objectsCount: M,
                            };
                            (u.qG.includes(y) && ((l.tabId = f), (l.tabPos = h), (l.isTabSelectedByDefault = x)),
                                w && (l.skeletonId = w),
                                S && N && ((l.mainObjectType = N), (l.mainObjectId = S)));
                            let d = (0, r.F)({ params: l, logger: t, context: 'useSendEventOnBlockStarted' });
                            d && (0, a.er)(e.evgenInstance, d);
                        },
                        [e, y, i, I, T, A, k, R, P, O, j, M, w, S, N, t, f, h, x],
                    );
                };
        },
        47538: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => r });
            var o = i(22939);
            function r(e) {
                return (null == e ? void 0 : e.data.type) === o.K.Vibe;
            }
        },
        49438: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => m });
            var o = i(25839),
                r = i(88204),
                a = i(74631),
                n = i(39004),
                s = i(61493),
                l = i(71035),
                c = i(4071),
                u = i(66738),
                d = i(47009);
            let _ = (0, r.PA)((e) => {
                    let {
                            iconSize: t,
                            className: i,
                            size: r,
                            variant: a = 'default',
                            isPlaying: _ = !1,
                            onClick: m,
                            iconClassName: b,
                            disabled: v,
                            color: p,
                            buttonVariant: g = 'text',
                            children: y,
                            radius: f = 'round',
                            withHover: h,
                            withRipple: x = !1,
                            ariaDescribedBy: C,
                            forwardRef: T,
                            tabIndex: I,
                            ariaHidden: A,
                            shouldSendAnalyticsOnPlayClick: E,
                        } = e,
                        S = (0, d.b)(),
                        { formatMessage: N } = (0, n.A)(),
                        R = ''.concat(_ ? 'pause' : 'play').concat('filled' === a ? '_filled' : ''),
                        O = _ ? s.S7.PAUSE_BUTTON : s.S7.PLAY_BUTTON,
                        j = N(_ ? { id: 'player-actions.pause' } : { id: 'player-actions.play' }),
                        P = (0, l.c)((e) => {
                            (e.stopPropagation(), e.preventDefault(), null == m || m(e), E && S(!_));
                        });
                    return (0, o.jsx)(c.$, {
                        className: i,
                        variant: g,
                        color: p,
                        radius: f,
                        size: r,
                        flexIcon: !0,
                        withRipple: x,
                        'aria-label': j,
                        onClick: P,
                        icon: (0, o.jsx)(u.I, { variant: R, size: t, className: b }),
                        disabled: v,
                        withHover: h,
                        'aria-describedby': C,
                        ref: T,
                        tabIndex: I,
                        'aria-hidden': A,
                        'data-test-id': O,
                        children: y,
                    });
                }),
                m = (0, a.forwardRef)((e, t) => (0, o.jsx)(_, { forwardRef: t, ...e }));
        },
        50314: (e, t, i) => {
            'use strict';
            var o;
            (i.d(t, { h: () => o }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(o || (o = {})));
        },
        50390: (e) => {
            e.exports = { notification: 'NotificationAd_notification__DNmdu' };
        },
        51124: (e) => {
            e.exports = {
                root: 'VibeRoomCardShimmer_root__lG3e3',
                root_mobile: 'VibeRoomCardShimmer_root_mobile__A462e',
                coverContainer: 'VibeRoomCardShimmer_coverContainer__dBb9G',
                coverContainer_mobile: 'VibeRoomCardShimmer_coverContainer_mobile__fcRcH',
                avatarShimmer: 'VibeRoomCardShimmer_avatarShimmer__ZHbcX',
                infoContainer: 'VibeRoomCardShimmer_infoContainer__WxMcd',
                infoContainer_mobile: 'VibeRoomCardShimmer_infoContainer_mobile__DJYX6',
                title: 'VibeRoomCardShimmer_title__X_5k3',
                title_mobile: 'VibeRoomCardShimmer_title_mobile___I56b',
            };
        },
        51514: (e, t, i) => {
            'use strict';
            i.d(t, { M1: () => o, UM: () => r, q7: () => n, yx: () => a });
            let o = 'user:onyourwave',
                r = ['activity'],
                a = 'diversity:reshuffle',
                n = 'multivibe';
        },
        51868: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => u });
            var o = i(25839),
                r = i(82298),
                a = i(23976),
                n = i(27954),
                s = i(87490),
                l = i(51124),
                c = i.n(l);
            let u = (e) => {
                let { isActive: t, className: i, 'aria-label': l, withMobileLayout: u = !1 } = e,
                    {
                        settings: { isMobile: d },
                    } = (0, n.g)(),
                    _ = u && d;
                return (0, o.jsxs)('div', {
                    'aria-label': l,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, r.$)(c().root, { [c().root_mobile]: _ }, i),
                    children: [
                        (0, o.jsxs)('div', {
                            className: (0, r.$)(c().coverContainer, { [c().coverContainer_mobile]: _ }),
                            children: [
                                (0, o.jsx)(s.b, { align: 'back', children: (0, o.jsx)(a.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
                                (0, o.jsx)(s.b, { align: 'front', children: (0, o.jsx)(a.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
                            ],
                        }),
                        (0, o.jsx)('div', {
                            className: (0, r.$)(c().infoContainer, { [c().infoContainer_mobile]: _ }),
                            children: (0, o.jsx)(a.W, { isActive: t, className: (0, r.$)(c().title, { [c().title_mobile]: _ }), radius: 's' }),
                        }),
                    ],
                });
            };
        },
        52312: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => c });
            var o = i(84361),
                r = i(74631),
                a = i(71035),
                n = i(89192),
                s = i(27954);
            let l = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: i, gap: c, containerRef: u, overscan: d = 2 } = e,
                        {
                            settings: { isMobile: _ },
                        } = (0, s.g)(),
                        { contentScrollRef: m } = (0, n.g)(),
                        b = (0, r.useRef)(new Map()),
                        v = (0, r.useRef)(void 0),
                        p = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = b.current.get(String(e));
                                return null != t ? t : i(e);
                            },
                            overscan: d,
                            initialRect: l,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, i) => {
                                if (!t) return 0;
                                let o = t.getBoundingClientRect().top;
                                return e && 1 ? o + window.scrollY : !e && i ? o + i.scrollTop : 0;
                            })(_, u, m),
                        },
                        g = (0, o.XW)(p),
                        y = (0, o.Te)({ ...p, getScrollElement: () => m, initialOffset: null == m ? void 0 : m.scrollTop }),
                        f = _ ? g : y,
                        h = (0, a.c)(() => {
                            f.measure();
                        });
                    return (
                        (0, r.useEffect)(() => {
                            v.current ||
                                (v.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let i = e.target.getAttribute('data-index');
                                        if (e.target && i) {
                                            let o = e.contentRect.height;
                                            o && o !== b.current.get(i) && (b.current.set(i, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && h());
                                }));
                        }, [h]),
                        { virtualizer: f, resizeObserver: v.current }
                    );
                };
        },
        53712: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => r });
            var o = i(25895);
            let r = {
                main: (0, o.u)('/'),
                chart: (0, o.u)('/chart'),
                chartPodcasts: (0, o.u)('/chart/podcasts'),
                collection: (0, o.u)('/collection'),
                collectionAlbums: (0, o.u)('/collection/albums'),
                collectionArtists: (0, o.u)('/collection/artists'),
                collectionClips: (0, o.u)('/collection/clips'),
                collectionDislikes: (0, o.u)('/collection/dislikes'),
                collectionKids: (0, o.u)('/collection/kids'),
                collectionKidsAlbums: (0, o.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, o.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, o.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, o.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, o.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, o.u)('/collection/multivibes'),
                collectionPlaylists: (0, o.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, o.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, o.u)('/collection/playlists/liked'),
                collectionShelf: (0, o.u)('/collection/shelf'),
                collectionShelfLiked: (0, o.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, o.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, o.u)('/collection/shelf/recently-played'),
                concerts: (0, o.u)('/concerts'),
                kids: (0, o.u)('/kids'),
                mixes: (0, o.u)('/mixes'),
                musicHistory: (0, o.u)('/music-history'),
                muzmarket: (0, o.u)('/muzmarket'),
                mymusic: (0, o.u)('/mymusic'),
                mymusicDownloadsTracks: (0, o.u)('/mymusic/downloads/tracks'),
                multivibe: (0, o.u)('/multivibe'),
                nonMusic: (0, o.u)('/non-music'),
                pay: (0, o.u)('/pay'),
                userSlides: (0, o.u)('/slides/user'),
                search: (0, o.u)('/search'),
                searchHistory: (0, o.u)('/search/history'),
                settings: (0, o.u)('/settings'),
                video: (0, o.u)('/video'),
            };
        },
        56120: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => a });
            var o = i(74631),
                r = i(20790);
            let a = (e) => {
                let t = (0, o.useRef)(!1),
                    i = (0, r.z)();
                (0, o.useEffect)(() => {
                    (e && (null == i || i.disable(), (t.current = !0)), !e && t.current && (null == i || i.enable(), (t.current = !1)));
                }, [e, i]);
            };
        },
        57024: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => a, UC: () => n, dM: () => s, uV: () => l });
            var o = i(93690),
                r = i(58848);
            let a = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                s = (e) => {
                    if (!(e instanceof o.m5) || !(0, r.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, r.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                l = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        57549: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => u });
            var o = i(25839),
                r = i(82298),
                a = i(69084),
                n = i(4254),
                s = i(51790),
                l = i(23775),
                c = i.n(l);
            let u = (e) => {
                let { error: t, closeToast: i, className: l } = e;
                return (0, o.jsx)(s.$, {
                    className: (0, r.$)(c().root, l),
                    message: (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(a.q, { children: (0, o.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, o.jsx)(n.HL, { className: c().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: i,
                });
            };
        },
        58848: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => o });
            let o = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        59650: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => J });
            var o = i(25839),
                r = i(82298),
                a = i(88204),
                n = i(74631),
                s = i(39004),
                l = i(8487),
                c = i(36619),
                u = i(61493),
                d = i(71035),
                _ = i(49656),
                m = i(14693),
                b = i(51246),
                v = i(4254),
                p = i(79367),
                g = i(20258),
                y = i(42966),
                f = i(29481),
                h = i(47009),
                x = i(52512),
                C = i(10322),
                T = i(97952),
                I = i(85743),
                A = i(87201),
                E = i(27954),
                S = i(17226),
                N = i(41580),
                R = i(49438),
                O = i(74987),
                j = i(72720),
                P = i(91149),
                M = i(92942),
                w = i(31488),
                k = i(57549),
                L = i(75159),
                V = i(66738),
                D = i(10820),
                B = i(4550),
                U = i(83243),
                W = i(56120),
                z = i(67303),
                F = i(73723),
                K = i.n(F);
            let $ = (0, a.PA)((e) => {
                var t;
                let { room: i, onOpenChange: a, onRenameClick: _, isRenamePending: m, onRoomSuccessExit: b, open: v, className: p, ...g } = e,
                    {
                        settings: { isMobile: f },
                    } = (0, E.g)(),
                    { formatMessage: h } = (0, s.A)(),
                    x = (0, L.A)(null == i ? void 0 : i.wave),
                    { exitVibeRoom: C, isPending: T } = ((e) => {
                        let { room: t, onRoomSuccessExit: i } = e,
                            [r, a] = (0, n.useState)(!1),
                            { notify: l } = (0, M.l)(),
                            c = (0, n.useRef)(!1),
                            { formatMessage: u } = (0, s.A)();
                        return {
                            exitVibeRoom: (0, d.c)(async () => {
                                c.current ||
                                    (a(!0),
                                    (c.current = !0),
                                    (await t.exitRoom({ roomId: t.id })) === w.F.ERROR
                                        ? l((0, o.jsx)(k.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: P.u.ERROR })
                                        : i(),
                                    a(!1),
                                    (c.current = !1));
                            }),
                            isPending: r,
                        };
                    })({ room: i, onRoomSuccessExit: b }),
                    I = (0, y.m)(),
                    A = (0, U.l)({ mainObjectType: c.DomainObjectType.NonApplicable }),
                    S = (0, d.c)(async () => {
                        (I({ actionType: c.ActionType.Remove, userInteractionType: c.UserInteractionType.Tap, objectType: c.DomainObjectType.Wave }), await C());
                    }),
                    N = (0, d.c)(async () => {
                        (I({ actionType: c.ActionType.Pin, userInteractionType: c.UserInteractionType.Tap, objectType: c.DomainObjectType.Wave }), await x());
                    });
                ((0, W.N)(v),
                    (0, n.useEffect)(() => {
                        if (v)
                            return (
                                A(!0),
                                () => {
                                    A(!1);
                                }
                            );
                    }, [v, A]));
                let R = !(null == i ? void 0 : i.isDisabled) && !f,
                    O = !(null == i ? void 0 : i.isDisabled) && !f;
                return (0, o.jsxs)(D.W1, {
                    ...g,
                    isMobile: f,
                    offsetOptions: 10,
                    open: v,
                    onOpenChange: a,
                    ariaLabel: h({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: u.OA.vibe.VIBE_ROOM_CONTEXT_MENU,
                    size: 's',
                    icon: (0, o.jsx)(V.I, { size: 'xxs', variant: 'more' }),
                    color: 'secondary',
                    variant: 'default',
                    className: p,
                    menuClassName: (0, r.$)(K().root, { [K().root_mobile]: f }),
                    children: [
                        R && (0, o.jsx)(z.L, { onClick: N, isPinned: null == (t = i.wave) ? void 0 : t.isPinned }),
                        O &&
                            (0, o.jsx)(D.Dr, {
                                icon: (0, o.jsx)(V.I, { variant: 'edit', size: 'xxs' }),
                                onClick: _,
                                disabled: m,
                                spinner: m ? (0, o.jsx)(B.y, { size: 'xs' }) : void 0,
                                'data-test-id': u.OA.vibe.VIBE_ROOM_CONTEXT_MENU_RENAME_BUTTON,
                                children: (0, o.jsx)(l.A, { id: 'interface-actions.rename' }),
                            }),
                        (0, o.jsx)(D.Dr, {
                            icon: (0, o.jsx)(V.I, { variant: 'bucket', size: 'xxs' }),
                            onClick: S,
                            disabled: T,
                            spinner: T ? (0, o.jsx)(B.y, { size: 'xs' }) : void 0,
                            'data-test-id': u.OA.vibe.VIBE_ROOM_CONTEXT_MENU_EXIT_BUTTON,
                            children: (0, o.jsx)(l.A, { id: 'interface-actions.delete-multivibe' }),
                        }),
                    ],
                });
            });
            var G = i(6323),
                H = i(87490),
                Y = i(2241),
                X = i.n(Y);
            let Q = (e) => {
                let { align: t, controls: i, src: r, isDisabled: a = !1, isMobileLayout: n = !1 } = e;
                return (0, o.jsx)(H.b, {
                    align: t,
                    isDisabled: a,
                    overlay: i,
                    surfaceClassName: X().surface,
                    overlayClassName: X().overlay,
                    children: (0, o.jsx)(G.B, {
                        size: 200,
                        fit: 'cover',
                        className: X().image,
                        src: r,
                        withSrcSet: !1,
                        alt: '',
                        withAvatarReplace: !0,
                        fallbackIconSize: n ? 'xxxs' : 'l',
                    }),
                });
            };
            var q = i(41359),
                Z = i.n(q);
            let J = (0, a.PA)((e) => {
                var t, i, a, V;
                let { room: D, contentLinesCount: B = 3, className: U, withMobileLayout: W = !1, onRoomSuccessExit: z } = e,
                    { pageId: F } = (0, T.$)(),
                    { ref: K, intersectionPropertyId: G } = (0, x.n)(),
                    {
                        settings: { isMobile: H },
                        multivibe: Y,
                        user: X,
                        freeAccess: q,
                    } = (0, E.g)(),
                    J = (0, p.P)(),
                    { sendPlaySearchFeedback: ee } = (0, I.z)(),
                    [et, ei] = (0, n.useState)(!1),
                    eo = (0, L.A)(D.wave),
                    er = (0, h.b)(),
                    ea = (0, y.m)(),
                    en = (0, f.N)(),
                    { state: es, setState: el } = (0, m.e)(!1),
                    { state: ec, setState: eu } = (0, m.e)(!1),
                    { state: ed, toggleTrue: e_, toggleFalse: em } = (0, m.e)(!1),
                    { formatMessage: eb } = (0, s.A)(),
                    { editVibeRoom: ev, isPending: ep } = ((e) => {
                        let [t, i] = (0, n.useState)(!1),
                            { notify: r } = (0, M.l)(),
                            a = (0, n.useRef)(!1),
                            { formatMessage: l } = (0, s.A)();
                        return {
                            editVibeRoom: (0, d.c)(async (t) => {
                                a.current ||
                                    (i(!0),
                                    (a.current = !0),
                                    (await e.editRoom({ roomId: e.id, name: t })) === w.F.ERROR &&
                                        r((0, o.jsx)(k.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: P.u.ERROR }),
                                    i(!1),
                                    (a.current = !1));
                            }),
                            isPending: t,
                        };
                    })(D),
                    eg = W && H,
                    ey = (ed || es || ec) && !H,
                    {
                        isPlaying: ef,
                        isPaused: eh,
                        togglePlay: ex,
                    } = (0, A.B)({ seeds: null != (V = null == (t = D.wave) ? void 0 : t.seeds) ? V : [], pageIdForFrom: F, blockIdForFrom: c.EntityTypes.Multiwave }),
                    eC = eg && !D.isDisabled && (ef || eh),
                    eT = (0, d.c)(() => {
                        !(D.isDisabled || J()) &&
                            (q.isVibeStartRestricted ||
                                (et || ef || (ei(!0), null == ee || ee()),
                                ex(),
                                er(!ef),
                                ea({
                                    actionType: ef ? c.ActionType.Pause : c.ActionType.Play,
                                    userInteractionType: c.UserInteractionType.Tap,
                                    objectType: c.DomainObjectType.Wave,
                                })));
                    }),
                    eI = (0, d.c)(async () => {
                        (ea({ actionType: c.ActionType.Pin, userInteractionType: c.UserInteractionType.Tap, objectType: c.DomainObjectType.Wave }), await eo());
                    }),
                    eA = (0, d.c)(() => {
                        if (D.isDisabled) {
                            (Y.setDisabledRoomId(D.id),
                                Y.disabledRoomInfoModal.open(),
                                en({ to: c.AppScreen.MultivibeUnifiedScreen, objectType: c.DomainObjectType.Link }));
                            return;
                        }
                        H && eT();
                    }),
                    eE = (0, d.c)((e) => {
                        (e && en({ to: c.AppScreen.MultivibeActionScreen, objectType: c.DomainObjectType.Link }), el(e), eu(e));
                    }),
                    eS = (0, d.c)((e) => {
                        e.target === e.currentTarget && (e.code === S.v.SPACE || e.code === S.v.ENTER) && (e.preventDefault(), eA());
                    }),
                    [eN, eR] = (0, n.useState)(!1),
                    eO = (0, n.useCallback)(
                        (e) => {
                            (eR(!1), ev(e), ea({ actionType: c.ActionType.Rename, userInteractionType: c.UserInteractionType.Tap, objectType: c.DomainObjectType.Wave }));
                        },
                        [ev, ea, eR],
                    ),
                    ej = (0, n.useCallback)(() => {
                        (eR(!0), en({ to: c.AppScreen.MultivibeRenameScreen, objectType: c.DomainObjectType.Link }));
                    }, [en, eR]),
                    eP = (0, _.L)(() =>
                        (0, o.jsx)(C.n, {
                            pageId: g._Q.MULTIVIBE_ACTION_SCREEN,
                            pageStyle: c.PageStyles.Sheet,
                            pagePlacement: c.PagePlacements.Bottom,
                            pageEntityId: '',
                            children: (0, o.jsx)(
                                $,
                                {
                                    room: D,
                                    onOpenChange: eE,
                                    open: es,
                                    isRenamePending: ep,
                                    onRenameClick: ej,
                                    returnFocus: !eN,
                                    className: (0, r.$)(Z().menuControl, Z().control, { [Z().menuControl_mobile]: eg }),
                                    onRoomSuccessExit: z,
                                    'data-test-id': u.OA.vibe.VIBE_ROOM_CONTEXT_MENU_BUTTON,
                                },
                                D.getKey('VibeRoomContextMenu'),
                            ),
                        }),
                    ),
                    eM = (0, _.L)(() => {
                        if (!D.isDisabled)
                            return (0, o.jsx)(
                                R.D,
                                {
                                    isPlaying: ef,
                                    onClick: eT,
                                    className: (0, r.$)(Z().playControl, Z().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                },
                                D.getKey('PlayButton'),
                            );
                    }),
                    ew = (0, _.L)(() => {
                        var e;
                        if (!D.isDisabled)
                            return (0, o.jsx)(
                                N.O,
                                {
                                    isPinned: null == (e = D.wave) ? void 0 : e.isPinned,
                                    onClick: eI,
                                    className: (0, r.$)(Z().pinControl, Z().control, { [Z().pinControl_mobile]: eg }),
                                    withRipple: !1,
                                },
                                D.getKey('PinButton'),
                            );
                    }),
                    ek = D.isDisabled ? eb({ id: 'multivibe.room-status-disabled' }) : eb({ id: 'multivibe.room-status-enabled' }),
                    eL = eb({ id: 'entity-names.vibe-room-name' }, { name: D.name, status: ek }),
                    eV = D.owner.cover.uri,
                    eD = null == (i = D.members[0]) ? void 0 : i.cover.uri,
                    eB = (null == (a = D.owner) ? void 0 : a.uid) && D.owner.uid === X.puid,
                    eU = eB ? eV : eD,
                    eW = eB ? eD : eV,
                    ez = (0, _.L)(() =>
                        (0, o.jsxs)('div', {
                            className: (0, r.$)(Z().avatarsWrapper, {
                                [Z().avatarsWrapper_mobile]: eg,
                                [Z().avatarsWrapper_disabled]: D.isDisabled,
                                [Z().avatarsWrapper_visible]: ey,
                            }),
                            children: [
                                (0, o.jsx)(Q, {
                                    align: 'back',
                                    isDisabled: D.isDisabled,
                                    isMobileLayout: eg,
                                    src: eU,
                                    controls: (0, o.jsx)(b.hg, { isVisible: ey, className: Z().cardControls, radius: 'round', pinControl: ew }),
                                }),
                                (0, o.jsx)(Q, {
                                    align: 'front',
                                    isDisabled: D.isDisabled,
                                    isMobileLayout: eg,
                                    src: eW,
                                    controls: (0, o.jsx)(b.hg, { isVisible: ey, className: Z().cardControls, radius: 'round', playControl: eM, menuControl: eP }),
                                }),
                                eC && (0, o.jsx)(O.P, { stopAnimation: eh, className: Z().playingAnimation }),
                            ],
                        }),
                    ),
                    eF = (0, _.L)(() =>
                        D.isDisabled
                            ? (0, o.jsxs)('span', {
                                  className: Z().unavailableStatus,
                                  'data-test-id': u.OA.vibe.VIBE_ROOM_UNAVAILABLE_STATUS,
                                  children: [
                                      (0, o.jsx)('span', { className: Z().unavailableStatusDot }),
                                      (0, o.jsx)(v.HL, {
                                          variant: 'div',
                                          type: 'entity',
                                          size: 'xs',
                                          weight: 'medium',
                                          lineClamp: 1,
                                          children: (0, o.jsx)(l.A, { id: 'multivibe.room-unavailable' }),
                                      }),
                                  ],
                              })
                            : null,
                    ),
                    eK = (0, _.L)(() =>
                        eN
                            ? (0, o.jsx)('div', {
                                  className: Z().textFieldContainer,
                                  children: (0, o.jsx)(j.A, {
                                      text: D.name,
                                      className: Z().textField,
                                      onChangeFinish: eO,
                                      maxTextLength: 200,
                                      minTextLength: 1,
                                      placeholder: eb({ id: 'vibe-actions.enter-title' }),
                                      shouldFinishOnKeyPress: !0,
                                      'data-test-id': u.OA.vibe.VIBE_ROOM_RENAME_INPUT,
                                  }),
                              })
                            : (0, o.jsx)(v.HL, {
                                  variant: 'div',
                                  type: 'entity',
                                  size: 'm',
                                  weight: 'medium',
                                  lineClamp: D.isDisabled ? 1 : 2,
                                  className: (0, r.$)(Z().roomName, { [Z().roomName_disabled]: D.isDisabled, [Z().roomName_mobile]: eg }),
                                  'data-test-id': u.OA.vibe.VIBE_ROOM_NAME,
                                  children: D.name,
                              }),
                    );
                return (0, o.jsxs)(b.MN, {
                    ref: K,
                    className: (0, r.$)(Z().root, { [Z().root_mobile]: eg }, U),
                    contentLinesCount: eg ? 2 : B,
                    textPosition: eg ? 'left' : 'center',
                    'data-intersection-property-id': G,
                    wrapperClassName: (0, r.$)(Z().cardWrapper, { [Z().cardWrapper_mobile]: eg }),
                    view: ez,
                    'aria-label': eL,
                    tabIndex: 0,
                    onClick: eA,
                    onKeyDown: eS,
                    onFocus: e_,
                    onMouseEnter: e_,
                    onMouseLeave: em,
                    onBlur: em,
                    'data-test-id': u.OA.vibe.VIBE_ROOM_CARD,
                    children: [(0, o.jsxs)('div', { className: (0, r.$)(Z().roomInfo, { [Z().roomInfo_mobile]: eg }), 'aria-hidden': !0, children: [eK, eF] }), eg && eP],
                });
            });
        },
        64257: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 30871)), Promise.resolve().then(i.bind(i, 90290)), Promise.resolve().then(i.bind(i, 35656)));
        },
        68466: (e) => {
            e.exports = { root: 'MultivibeNDA_root__Xmby8', text: 'MultivibeNDA_text__szNv7' };
        },
        68854: (e) => {
            e.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        69084: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => c });
            var o,
                r = i(74631),
                a = {
                    5881: (e, t, i) => {
                        function o() {
                            for (var e, t, i = 0, o = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            o,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (o = e(t[i])) && (r && (r += ' '), (r += o));
                                            else for (i in t) t[i] && (r && (r += ' '), (r += i));
                                        return r;
                                    })(e)) &&
                                    (o && (o += ' '), (o += t));
                            return o;
                        }
                        (i.r(t), i.d(t, { clsx: () => o, default: () => r }));
                        let r = o;
                    },
                    7319: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => o }));
                        let o = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function o(e, t, o) {
                            var r = null;
                            if ((void 0 !== o && (r = '' + o), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var a in ((o = {}), t)) 'key' !== a && (o[a] = t[a]);
                            else o = t;
                            return { $$typeof: i, type: e, key: r, ref: void 0 !== (t = o.ref) ? t : null, props: o };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = o), (t.jsxs = o));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    5531: function (e, t, i) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let r = i(4377),
                            a = i(5881),
                            n = i(810),
                            s = o(i(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: i, children: o, ...l } = e,
                                c = (0, a.clsx)(s.default.root, { [s.default.focusable]: i }, t);
                            return (0, n.isValidElement)(o)
                                ? (0, n.cloneElement)(o, { ...l, className: (0, a.clsx)(c, o.props.className) })
                                : (0, r.jsx)('span', { className: c, ...l, children: o });
                        };
                    },
                    810: (e) => {
                        e.exports = o || (o = i.t(r, 2));
                    },
                },
                n = {};
            function s(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var i = (n[e] = { exports: {} });
                return (a[e].call(i.exports, i, i.exports, s), i.exports);
            }
            ((s.d = (e, t) => {
                for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.SROnly = void 0));
                var e = s(5531);
                Object.defineProperty(l, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = l.SROnly;
            l.__esModule;
        },
        70154: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => c });
            var o = i(25839),
                r = i(82298),
                a = i(8487),
                n = i(4254),
                s = i(68466),
                l = i.n(s);
            let c = (e) => {
                let { className: t } = e;
                return (0, o.jsx)('span', {
                    className: (0, r.$)(l().root, t),
                    children: (0, o.jsx)(n.HL, { variant: 'span', size: 'm', weight: 'bold', className: l().text, children: (0, o.jsx)(a.A, { id: 'multivibe.nda' }) }),
                });
            };
        },
        73544: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => o });
            let o = (e) => ({ uri: e.uri, color: e.color });
        },
        73723: (e) => {
            e.exports = { root_mobile: 'VibeRoomContextMenu_root_mobile__mH0PT' };
        },
        73810: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => o });
            let o = (0, i(74631).createContext)(null);
        },
        74987: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => l });
            var o = i(25839),
                r = i(82298),
                a = i(61493),
                n = i(97825),
                s = i.n(n);
            let l = (e) => {
                let { className: t, stopAnimation: i } = e;
                return (0, o.jsx)('div', { className: (0, r.$)(s().root, { [s().root_stopAnimation]: i }, t), 'data-test-id': a.S7.PLAYING_ANIMATION });
            };
        },
        75159: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => E });
            var o = i(25839),
                r = i(33660),
                a = i(74631),
                n = i(39004),
                s = i(98436),
                l = i(91149),
                c = i(92942),
                u = i(27954),
                d = i(57549),
                _ = i(82298),
                m = i(88204),
                b = i(61493),
                v = i(49656),
                p = i(23818),
                g = i(44806),
                y = i(51514),
                f = i(35015),
                h = i(10546),
                x = i(86209),
                C = i(97779),
                T = i.n(C);
            let I = (0, m.PA)((e) => {
                let { vibe: t, closeToast: i } = e,
                    { experiments: r } = (0, u.g)(),
                    a = r.checkExperiment(g.z.WebNextWaveAgentExperiment, 'on'),
                    n = t.type === y.q7,
                    s = (0, v.L)(() => {
                        var e;
                        return a && t.agent
                            ? (0, o.jsx)(x.n, {
                                  agent: t.agent,
                                  shouldShowControl: !1,
                                  className: (0, _.$)(T().view, { [T().multivibeContainer]: n }),
                                  coverClassName: (0, _.$)({ [T().multivibeCover]: n }),
                                  entityCoverClassName: (0, _.$)({ [T().multivibeAvatar]: n }),
                                  controlClassName: (0, _.$)({ [T().multivibeControl]: n }),
                              })
                            : (0, o.jsx)(p._V, {
                                  className: T().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  'data-test-id': b.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                              });
                    }),
                    l = a && t.agent ? void 0 : 'round';
                return (0, o.jsx)(h.k, {
                    closeToast: i,
                    entityVariant: f.c.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: s,
                    radius: l,
                    className: T().root,
                });
            });
            var A = i(19966);
            let E = (e) => {
                let { user: t, pinsCollection: i } = (0, u.g)(),
                    { notify: _ } = (0, c.l)(),
                    { formatMessage: m } = (0, n.A)(),
                    [b, v] = (0, a.useState)(!1);
                return (0, a.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void _((0, o.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (b) return;
                    let a = { ...(0, r.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        n = i.get(e.pinId);
                    v(!0);
                    let c = await e.togglePin();
                    (v(!1),
                        n &&
                            n.type === s._.WAVE_ITEM &&
                            n.data.backgroundImageUrl &&
                            ((a.backgroundImageUrl = n.data.backgroundImageUrl), (a.colors = n.data.colors), (a.agent = n.data.agent)),
                        c &&
                            'object' == typeof c &&
                            'data' in c &&
                            (c.data.backgroundImageUrl && (a.backgroundImageUrl = c.data.backgroundImageUrl),
                            c.data.colors && (a.colors = { average: c.data.colors.average, waveText: c.data.colors.waveText }),
                            c.data.agent && (a.agent = (0, A.K)(c.data.agent))),
                        c
                            ? _((0, o.jsx)(I, { vibe: a }), { containerId: l.u.INFO })
                            : _((0, o.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [m, _, b, i, t.isAuthorized, e]);
            };
        },
        76481: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            class o extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: r = {}, ...a } = t,
                        n = e || 'Internal error';
                    (super(n, a), (this.message = n), (this.code = i), (this.data = r), (this.stack = Error(n).stack), Object.setPrototypeOf(this, o.prototype));
                }
            }
            class r extends o {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        77920: (e, t, i) => {
            'use strict';
            var o;
            (i.d(t, { X: () => o }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(o || (o = {})));
        },
        78299: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => T });
            var o = i(25839),
                r = i(82298),
                a = i(88204),
                n = i(74631),
                s = i(39004),
                l = i(8487);
            i(93588);
            var c = i(4071),
                u = i(66738),
                d = i(4254),
                _ = i(67379),
                m = i(36619),
                b = i(76945),
                v = i(59450),
                p = i(84e3),
                g = i(97952),
                y = i(89192),
                f = i(53712),
                h = i(15270),
                x = i(68854),
                C = i.n(x);
            let T = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: a } = (0, s.A)(),
                    x = a({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, v.st)(),
                        { hash: i } = (0, v.gf)(),
                        { pageId: o } = (0, g.$)(),
                        r = (0, p.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !i || !o) return;
                        let a = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: o,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, b.z5)(t.evgenInstance, a);
                    }, [t, e, i, o, r]);
                })(x);
                let { sendRefreshEvent: T } = (function () {
                        let e = (0, v.st)(),
                            { hash: t } = (0, v.gf)(),
                            { pageId: i } = (0, g.$)(),
                            o = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let r = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: o,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, b.bv)(e.evgenInstance, r);
                            }, [e, t, i, o]),
                        };
                    })(),
                    I = (0, n.useCallback)(() => {
                        (T(), (window.location.href = f.Z.main.href));
                    }, [T]),
                    { contentRef: A } = (0, y.g)();
                return (0, o.jsxs)('div', {
                    className: (0, r.$)(C().root, t),
                    children: [
                        i &&
                            (0, o.jsx)(h.L, { withBackwardFallback: '/', className: (0, r.$)(C().navigation, { [C().navigation_desktop]: !A }), withForwardControl: !1 }),
                        (0, o.jsxs)('div', {
                            className: (0, r.$)(C().content, { [C().content_shrink]: !i }),
                            children: [
                                (0, o.jsx)(u.I, { className: C().icon, variant: 'attention', size: 'xxl' }),
                                (0, o.jsx)(d.DZ, { className: (0, r.$)(C().title, C().important), variant: 'h3', size: 'xs', children: x }),
                                (0, o.jsxs)(d.HL, {
                                    className: (0, r.$)(C().text, C().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, o.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, o.jsx)(c.$, {
                                    onClick: I,
                                    className: C().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, o.jsxs)(d.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, o.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        79367: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => b });
            var o = i(25839),
                r = i(71035),
                a = i(8487),
                n = i(4254),
                s = i(51790),
                l = i(50390),
                c = i.n(l);
            let u = () =>
                (0, o.jsx)(s.$, {
                    message: (0, o.jsx)(n.HL, { variant: 'div', size: 'm', className: c().notification, children: (0, o.jsx)(a.A, { id: 'ads.continue-ad' }) }),
                    coverRadius: 's',
                });
            var d = i(91149),
                _ = i(92942),
                m = i(27954);
            let b = () => {
                let { notify: e } = (0, _.l)(),
                    { advert: t } = (0, m.g)();
                return (0, r.c)(() => (t.isAdvertShown && e((0, o.jsx)(u, {}), { containerId: d.u.INFO }), !!t.isAdvertShown));
            };
        },
        79497: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => a });
            var o = i(28410),
                r = i(73544);
            let a = (e) => {
                let t = (0, r.e)(e);
                return (0, o.wg)(t);
            };
        },
        81176: (e) => {
            e.exports = {
                root: 'CollectionVibeRoomsPage_root__rXIRS',
                container: 'CollectionVibeRoomsPage_container__EjxoE',
                shimmerGrid: 'CollectionVibeRoomsPage_shimmerGrid__vgYVO',
                gridContent: 'CollectionVibeRoomsPage_gridContent__Og3pw',
                emptyContent: 'CollectionVibeRoomsPage_emptyContent___1jjx',
                footer: 'CollectionVibeRoomsPage_footer__LaC0Q',
                multivibeCoBrand: 'CollectionVibeRoomsPage_multivibeCoBrand__qm6aU',
                onboardingImage: 'CollectionVibeRoomsPage_onboardingImage__lde_N',
                multivibeImage: 'CollectionVibeRoomsPage_multivibeImage__NFs_8',
                emptyContentTitle: 'CollectionVibeRoomsPage_emptyContentTitle__Hv_Vp',
            };
        },
        83065: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => n });
            var o = i(90887),
                r = i(52830),
                a = i(27954);
            let n = (e) => {
                let { location: t } = (0, a.g)();
                return (0, o.r)(e, t.tld, r.B);
            };
        },
        85743: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => n });
            var o = i(74631),
                r = i(91879),
                a = i(32953);
            let n = () => {
                let { sendSearchFeedback: e, id: t, type: i, blockPosition: n, position: s } = (0, o.useContext)(a.N) || {};
                if (void 0 === t || void 0 === i || void 0 === n || void 0 === s) return {};
                let l = null == e ? void 0 : e.bind(null, { feedbackType: r.n.LIKE, id: t, type: i, blockPosition: n, position: s });
                return {
                    sendLikeSearchFeedback: l,
                    sendNavigateSearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: r.n.NAVIGATE, id: t, type: i, blockPosition: n, position: s }),
                    sendPlaySearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: r.n.PLAY, id: t, type: i, blockPosition: n, position: s }),
                };
            };
        },
        86209: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => u });
            var o = i(25839),
                r = i(82298),
                a = i(50314),
                n = i(49656),
                s = i(6349),
                l = i(4111),
                c = i.n(l);
            let u = (e) => {
                let {
                        agent: t,
                        isPlaying: i,
                        isCurrent: l,
                        onPlayButtonClick: u,
                        shouldShowControl: d = !0,
                        playButtonIconSize: _,
                        alt: m,
                        className: b,
                        coverClassName: v,
                        entityCoverClassName: p,
                        controlClassName: g,
                        fallbackIconSize: y,
                    } = e,
                    f = (0, n.L)(() => {
                        if (t.entityType) return t.entityType === a.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, o.jsx)(s.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, r.$)(c().root, c()['root_radius_'.concat(f)], { [c().root_withShadow]: !!t.entityType }, b),
                    radius: f,
                    onPlayButtonClick: u,
                    isPlaying: i,
                    isCurrent: l,
                    alt: m,
                    withLoadingIndicator: !1,
                    shouldShowControl: d,
                    playButtonIconSize: _,
                    fallbackIconSize: y,
                    coverClassName: v,
                    entityCoverClassName: p,
                    controlClassName: g,
                });
            };
        },
        87201: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => h });
            var o = i(25839),
                r = i(74631),
                a = i(39004),
                n = i(47538),
                s = i(22939),
                l = i(24591),
                c = i(71035),
                u = i(16886),
                d = i(57549),
                _ = i(30290),
                m = i(91149),
                b = i(92942),
                v = i(27954),
                p = i(51514);
            let g = 'radio';
            var y = i(37052),
                f = i(30296);
            let h = (e) => {
                var t, i;
                let { seeds: h = [p.M1], pageIdForFrom: x, blockIdForFrom: C, onPlayInterrupted: T, parentContextId: I } = e,
                    { from: A } = (0, _.f)(
                        ((e, t) =>
                            !t || (null == e ? void 0 : e.includes(g)) || t.includes(g)
                                ? { pageId: e, blockId: t }
                                : { pageId: e, blockId: ''.concat(t, '-').concat(g) })(x, C),
                    ),
                    { formatMessage: E } = (0, a.A)(),
                    S = (0, f.e)(),
                    { notify: N } = (0, b.l)(),
                    { sonataState: R, vibe: O, fullscreenPlayer: j, user: P, freeAccess: M } = (0, v.g)(),
                    [w, k] = (0, r.useState)(null),
                    L = (0, c.c)(() => (j.modal.isOpened ? m.u.FULLSCREEN_ERROR : m.u.ERROR));
                ((0, r.useEffect)(() => {
                    let e =
                        null == S
                            ? void 0
                            : S.state.currentContext.onChange(() => {
                                  (0, n.i)(S.state.currentContext.value) ? k(S.state.currentContext.value) : k(null);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [S]),
                    (0, r.useEffect)(() => {
                        let e =
                            null == w
                                ? void 0
                                : w.observableActiveSession.onChange(() => {
                                      var e, t;
                                      (null == w || null == (e = w.observableActiveSession.value) ? void 0 : e.wave) &&
                                          O.setVibe(null == w || null == (t = w.observableActiveSession.value) ? void 0 : t.wave);
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [w, O]));
                let V = (0, c.c)(async (e) => {
                        try {
                            await (null == S
                                ? void 0
                                : S.playContext({
                                      contextData: {
                                          type: s.K.Vibe,
                                          meta: { id: (0, l.f)(e) },
                                          seeds: e,
                                          from: A,
                                          includeTracksInResponse: !0,
                                          interactive: !0,
                                          parentContextId: I,
                                      },
                                      loadContextMeta: !0,
                                  }));
                        } catch (e) {
                            N((0, o.jsx)(d.h, { error: E({ id: 'vibe-errors.start-vibe' }) }), { containerId: L() });
                        }
                    }),
                    D = (0, c.c)(async (e) => {
                        if (S && w)
                            try {
                                await w.setSettings({ seeds: e, queueState: S.state.queueState, interactive: !0, from: A });
                            } catch (e) {
                                N((0, o.jsx)(d.h, { error: E({ id: 'vibe-errors.apply-vibe-setting' }) }), { containerId: L() });
                            }
                    }),
                    B = (0, c.c)(async (e) => {
                        if (S)
                            try {
                                await S.restartContext({ playAfterRestart: e });
                            } catch (e) {
                                N((0, o.jsx)(d.h, { error: E({ id: 'error-messages.something-went-wrong' }) }), { containerId: L() });
                            }
                    }),
                    U = !!w,
                    W = U && (0, y._)(null != (i = null == (t = O.meta) ? void 0 : t.seeds) ? i : [], h),
                    z = W && R.status === u.MT.PLAYING,
                    F = W && R.status === u.MT.PAUSED;
                (0, r.useEffect)(() => {
                    z && O.setIsApplying(!1);
                }, [z, O]);
                let K = (0, c.c)(async () => {
                        if (!z && (M.isFreeWebUser || !P.isAuthorized)) {
                            null == T || T();
                            return;
                        }
                        (O.setIsApplying(!0), await V(h), O.setIsApplying(!1));
                    }),
                    $ = (0, c.c)(async (e, t) => {
                        var i;
                        O.setIsApplying(!0);
                        let o = [];
                        if (O.meta && Array.isArray(null == (i = O.meta) ? void 0 : i.seeds))
                            if (O.meta.seeds.includes(e)) o = O.meta.seeds.filter((t) => t !== e);
                            else if (t) o = [e, ...O.meta.seeds.filter((e) => e.includes('setting'))];
                            else {
                                let t = e.split(':')[0];
                                o = t
                                    ? ['settingDiversity', 'settingMoodEnergy', 'settingLanguage'].includes(t)
                                        ? [...O.meta.seeds.filter((e) => !e.startsWith(''.concat(t, ':'))), e]
                                        : [...O.meta.seeds, e]
                                    : [...O.meta.seeds];
                            }
                        else o = [e];
                        (w ? (await D(o), await B(!0)) : await V(o), O.setIsApplying(!1));
                    });
                return {
                    isVibeContext: U,
                    isPlaying: z,
                    isPaused: F,
                    isCurrent: W,
                    togglePlay: K,
                    resetContext: (0, c.c)(async function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [p.M1];
                        (O.setIsApplying(!0), w ? (await D(e), await B(!0)) : await V(e), O.setIsApplying(!1));
                    }),
                    applySetting: $,
                    playSeeds: (0, c.c)(async (e) => {
                        let t = Array.isArray(e) && e.length > 0 ? e : h;
                        if (M.isFreeWebUser || !P.isAuthorized) {
                            null == T || T();
                            return;
                        }
                        (O.setIsApplying(!0), w ? (await D(t), await B(!0)) : await V(t), O.setIsApplying(!1));
                    }),
                };
            };
        },
        87490: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => s });
            var o = i(25839),
                r = i(82298),
                a = i(20006),
                n = i.n(a);
            let s = (e) => {
                let { align: t, children: i, overlay: a, isDisabled: s = !1, className: l, surfaceClassName: c, overlayClassName: u } = e,
                    d = 'back' === t;
                return (0, o.jsxs)('span', {
                    className: (0, r.$)(n().root, d ? n().root_back : n().root_front, l),
                    children: [
                        (0, o.jsxs)('span', {
                            className: (0, r.$)(n().circle, { [n().circle_back]: d, [n().circle_disabled]: s }),
                            children: [(0, o.jsx)('span', { className: (0, r.$)(n().surface, c), children: i }), u && (0, o.jsx)('span', { className: u })],
                        }),
                        a,
                    ],
                });
            };
        },
        90290: (e, t, i) => {
            'use strict';
            i.d(t, { WithWebNextWaveForTwo: () => s });
            var o = i(88204),
                r = i(84059),
                a = i(53712),
                n = i(27954);
            let s = (0, o.PA)((e) => {
                let { children: t } = e,
                    { multivibe: i } = (0, n.g)();
                return (i.isEnabled || (0, r.redirect)(a.Z.main.href), t);
            });
        },
        91626: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => r }), i(77920));
            var o = i(76481);
            class r extends o.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        91879: (e, t, i) => {
            'use strict';
            var o, r;
            (i.d(t, { n: () => r, o: () => o }),
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
                })(o || (o = {})),
                (function (e) {
                    ((e.PLAY = 'play'), (e.FRIDGE = 'fridge'), (e.NAVIGATE = 'navigate'), (e.LIKE = 'like'));
                })(r || (r = {})));
        },
        93690: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => a.G, X1: () => o.X, m5: () => r.m });
            var o = i(77920),
                r = i(76481),
                a = i(91626);
            i(95919);
        },
        95858: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => l });
            var o = i(25839),
                r = i(74631),
                a = i(59342),
                n = i(91886),
                s = i(13232);
            let l = (e) => {
                let { children: t } = e,
                    i = (0, r.useRef)({}),
                    l = (0, r.useRef)(
                        (0, n.Gv)(
                            (e) => {
                                let t = (0, n.L5)(e.target),
                                    o = i.current[t];
                                if (o) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, a.A)());
                                            (o.callback(!0, e), (o.showed = !0), (o.viewUuid = e));
                                        }, 1e3);
                                        o.timerId = e;
                                    }
                                    (!e.isIntersecting && o.showed && (o.callback(!1, o.viewUuid), (o.showed = !1), (o.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(o.timerId));
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    c = (0, r.useCallback)((e) => {
                        var t;
                        !i.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = l.current) || t.observe(e.elementRef.current), (i.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    u = (0, r.useCallback)((e) => {
                        let t = i.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete i.current[e]);
                    }, []);
                (0, r.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = l.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let d = (0, r.useMemo)(() => ({ observeElement: c, unobserveElement: u }), [c, u]);
                return (0, o.jsx)(s.B.Provider, { value: d, children: t });
            };
        },
        95919: (e, t, i) => {
            'use strict';
            var o;
            (i.d(t, { Z: () => o }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(o || (o = {})));
        },
        96382: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => d });
            var o = i(25839),
                r = i(88204),
                a = i(74631),
                n = i(68934),
                s = i(40489),
                l = i(32190),
                c = i(10126),
                u = i.n(c);
            let d = (0, r.PA)((e) => {
                let {
                        count: t,
                        rowGap: i,
                        columnGap: r,
                        getEstimateRowSize: c,
                        minColumnCount: d = 2,
                        minColumnWidth: _,
                        maxColumnWidth: m,
                        maxColumnCount: b,
                        renderItemByIndex: v,
                        onChangeRange: p,
                    } = e,
                    [g, y] = (0, n.d)(),
                    {
                        virtualizer: f,
                        rowResizeObserver: h,
                        columnCount: x,
                        indices: C,
                    } = (0, s.L)({
                        count: t,
                        rowGap: i,
                        columnGap: r,
                        getEstimateRowSize: c,
                        minColumnCount: d,
                        minColumnWidth: _,
                        maxColumnWidth: m,
                        maxColumnCount: b,
                        containerRef: g,
                    });
                (0, a.useEffect)(() => {
                    !f.isScrolling && f.range && (null == p || p(f.range, x));
                }, [p, f.isScrolling, f.range, x]);
                let T = { '--virtual-grid-height': ''.concat(f.getTotalSize(), 'px'), '--virtual-grid-column-count': x };
                return (0, o.jsx)('div', {
                    ref: y,
                    style: T,
                    className: u().root,
                    children: f.getVirtualItems().map((e) =>
                        (0, o.jsx)(
                            l.U,
                            {
                                className: u().row,
                                columnClassName: u().column,
                                virtualItem: e,
                                resizeObserver: h,
                                indices: C,
                                renderItemByIndex: v,
                                scrollMargin: f.options.scrollMargin,
                            },
                            e.key,
                        ),
                    ),
                });
            });
        },
        96876: (e) => {
            e.exports = {
                root: 'MultivibeShowPromoModalButton_root__IVPw7',
                root_mobile: 'MultivibeShowPromoModalButton_root_mobile__WRav6',
                button: 'MultivibeShowPromoModalButton_button__FIPMr',
                button_mobile: 'MultivibeShowPromoModalButton_button_mobile__27mpZ',
                surface: 'MultivibeShowPromoModalButton_surface__moFgc',
                icon: 'MultivibeShowPromoModalButton_icon__Sq7Vg',
                title: 'MultivibeShowPromoModalButton_title__0ZG_f',
                titleWrapper: 'MultivibeShowPromoModalButton_titleWrapper__GNMdJ',
                title_mobile: 'MultivibeShowPromoModalButton_title_mobile__qZ_tH',
                content_linesCount_1: 'MultivibeShowPromoModalButton_content_linesCount_1__YfsBl',
                content_linesCount_2: 'MultivibeShowPromoModalButton_content_linesCount_2__AC_t8',
                content_linesCount_3: 'MultivibeShowPromoModalButton_content_linesCount_3___wDV_',
                content_linesCount_4: 'MultivibeShowPromoModalButton_content_linesCount_4__BuNw_',
            };
        },
        97779: (e) => {
            e.exports = {
                root: 'NotificationPin_root__DBEub',
                view: 'NotificationPin_view__daGc_',
                image: 'NotificationPin_image__o5F7B',
                multivibeContainer: 'NotificationPin_multivibeContainer__ZbXhn',
                multivibeCover: 'NotificationPin_multivibeCover__n_5EZ',
                multivibeAvatar: 'NotificationPin_multivibeAvatar__4P5gm',
                multivibeControl: 'NotificationPin_multivibeControl__iOOyQ',
            };
        },
        97825: (e) => {
            e.exports = {
                root: 'PlayingAnimation_root__YrWz7',
                'bubble-out': 'PlayingAnimation_bubble-out__k2fBS',
                root_stopAnimation: 'PlayingAnimation_root_stopAnimation__qOw_g',
            };
        },
        98074: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => r });
            let o = [
                    { queryKey: 'utm_campaign', resultKey: 'utmCampaign' },
                    { queryKey: 'utm_medium', resultKey: 'utmMedium' },
                    { queryKey: 'utm_source', resultKey: 'utmSource' },
                    { queryKey: 'utm_term', resultKey: 'utmTerm' },
                    { queryKey: 'yclid', resultKey: 'yclid' },
                ],
                r = (e) =>
                    o.reduce((t, i) => {
                        let { queryKey: o, resultKey: r } = i;
                        return ('string' == typeof e[o] && (t[r] = e[o]), t);
                    }, {});
        },
        98436: (e, t, i) => {
            'use strict';
            var o;
            (i.d(t, { _: () => o }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(o || (o = {})));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1676, 3349, 6287, 6749, 7339, 8899, 6706, 1311, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 4361, 3269, 4163, 3246, 4517, 3482, 6680,
                6504, 5329, 8836, 820, 4434, 6361, 286, 3224, 4475, 5056, 7358,
            ],
            () => e((e.s = 64257)),
        ),
            (_N_E = e.O()));
    },
]);
