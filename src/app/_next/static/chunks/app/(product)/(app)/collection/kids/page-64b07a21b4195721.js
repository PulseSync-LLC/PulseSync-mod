(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6413],
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
        1134: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var r = i(25839),
                a = i(33660),
                s = i(74631),
                o = i(39004),
                n = i(91149),
                l = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(27892);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, l.l)(),
                    { formatMessage: m } = (0, o.A)(),
                    [_, h] = (0, s.useState)(!1);
                return (0, s.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (_) return;
                    let s = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                    h(!0);
                    let o = await e.togglePin();
                    (h(!1),
                        o
                            ? i((0, r.jsx)(u.l, { playlist: s }), { containerId: n.u.INFO })
                            : i((0, r.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [t.isAuthorized, _, e, i, m]);
            };
        },
        5365: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => c });
            var r,
                a = i(74631),
                s = {
                    5881: (e, t, i) => {
                        function r() {
                            for (var e, t, i = 0, r = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            r,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (r = e(t[i])) && (a && (a += ' '), (a += r));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (i.r(t), i.d(t, { clsx: () => r, default: () => a }));
                        let a = r;
                    },
                    2876: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => r }));
                        let r = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var a = null;
                            if ((void 0 !== r && (a = '' + r), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var s in ((r = {}), t)) 'key' !== s && (r[s] = t[s]);
                            else r = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    4014: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0));
                        let a = i(4377),
                            s = i(5881),
                            o = i(810),
                            n = r(i(2876)),
                            l = (e) => {
                                let { className: t, itemClassName: i, children: r, forwardRef: l, role: c, ...d } = e;
                                return (0, a.jsx)('ol', {
                                    ref: l,
                                    className: (0, s.clsx)(n.default.root, t),
                                    ...d,
                                    role: null != c ? c : 'list',
                                    children: o.Children.map(r, (e) => (0, a.jsx)('li', { className: (0, s.clsx)(n.default.item, i), children: e })),
                                });
                            };
                        t.Carousel = (0, o.forwardRef)((e, t) => (0, a.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                o = {};
            function n(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return (s[e].call(i.exports, i, i.exports, n), i.exports);
            }
            ((n.d = (e, t) => {
                for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (n.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.l = void 0));
                var e = n(4014);
                Object.defineProperty(l, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var c = l.l;
            l.X;
        },
        7929: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        9911: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => d });
            var r,
                a = i(6274),
                s = i(74631),
                o = {
                    352: (e) => {
                        e.exports = a;
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(s, 2));
                    },
                },
                n = {};
            function l(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var i = (n[e] = { exports: {} });
                return (o[e](i, i.exports, l), i.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = l(810),
                    t = l(352);
                c.l = (i) => {
                    let [r, a] = (0, e.useState)(!0),
                        [s, o] = (0, e.useState)(!0),
                        n = () => {
                            let e = null == i ? void 0 : i.current;
                            e && (a(0 === e.scrollLeft), o(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        n();
                    }, [i, n]),
                        (0, e.useEffect)(() => {
                            let e = null == i ? void 0 : i.current;
                            return (
                                null == e || e.addEventListener('scroll', n),
                                window.addEventListener('resize', n),
                                () => {
                                    (null == e || e.removeEventListener('scroll', n), window.removeEventListener('resize', n));
                                }
                            );
                        }, [i, n]));
                    let l = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    i && i.current && (i.current.scrollLeft += i.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [i],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        i && i.current && (i.current.scrollLeft -= i.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [i],
                        ),
                        swipeForward: l,
                        shouldBackwardButtonBeDisabled: r,
                        shouldForwardButtonBeDisabled: s,
                        shouldHideControls: r && s,
                    };
                };
            })(),
                c.X);
            var d = c.l;
        },
        15787: (e) => {
            e.exports = {
                root: 'PlaylistCard_root__i3pR4',
                srTitleLink: 'PlaylistCard_srTitleLink__Gg2Dy',
                controls: 'PlaylistCard_controls__Ej8Rz',
                cover: 'PlaylistCard_cover__tpK5L',
                coverBlock: 'PlaylistCard_coverBlock__1slsN',
                image: 'PlaylistCard_image__Li6oy',
                titleLink: 'PlaylistCard_titleLink__H8qEc',
                artists: 'PlaylistCard_artists__HtVIF',
                artistLink: 'PlaylistCard_artistLink__jx3KB',
                playButton: 'PlaylistCard_playButton__eaduk',
                likeButton: 'PlaylistCard_likeButton__RYXJz',
                menuButton: 'PlaylistCard_menuButton__jFcWr',
                pinButton: 'PlaylistCard_pinButton__jhWnL',
                trailerButton: 'PlaylistCard_trailerButton__Qjg_U',
                control: 'PlaylistCard_control__73YUq',
            };
        },
        16978: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => _ });
            var r = i(25839),
                a = i(84059),
                s = i(8487),
                o = i(61493),
                n = i(71035),
                l = i(4071),
                c = i(4254),
                d = i(57024),
                u = i(36484),
                m = i(62562);
            let _ = (e) => {
                let { size: t = 'm', variant: i = 'default', color: _ = 'primary', withRipple: h = !0, buttonText: p, isBlock: C, key: v, className: x } = e,
                    f = (0, a.useRouter)(),
                    k = (0, m.N)().get(u.QG),
                    y = (0, n.c)(() => {
                        k.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), f.push(k.authorizationUrl));
                    });
                return (0, r.jsx)(
                    l.$,
                    {
                        onClick: y,
                        className: x,
                        isBlock: C,
                        color: _,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: h,
                        'data-test-id': o.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(s.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
            };
        },
        18412: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => f });
            var r = i(25839),
                a = i(82298),
                s = i(74631),
                o = i(36619),
                n = i(61493),
                l = i(66738),
                c = i(23818),
                d = i(86869),
                u = i(23976),
                m = i(4254),
                _ = i(61777),
                h = i(29481),
                p = i(97522),
                C = i(73208),
                v = i.n(C);
            let x = (e) => {
                    let {
                            className: t,
                            coverUrl: i,
                            labeledForId: C,
                            subTitle: x,
                            title: f,
                            description: k,
                            viewAllActionLink: y,
                            controls: N,
                            titleSize: g = 'm',
                            coverBackgroundColor: j,
                            coverRadius: T = 's',
                            titleClassName: b,
                            titleLineClamp: L,
                            fallbackIconVariant: A,
                            available: S = !0,
                            onViewAllAction: E,
                            titleChildren: P,
                            children: O,
                            headingRef: B,
                            coverContainerClassName: I,
                            headingVariant: w = 'h3',
                            withDescriptionWidthLimit: R = !0,
                            isShimmerVisible: D,
                            isShimmerActive: z,
                            withCover: K,
                            withDescription: U,
                            forwardRef: W,
                            shimmerCoverClassName: H,
                            shouldSendAnalyticsOnLoaded: M,
                            ...F
                        } = e,
                        $ = (0, _.f)(),
                        V = (0, s.useRef)(null),
                        X = i || K,
                        Y = k || U,
                        Q = (0, s.useCallback)(() => {
                            V.current && 'focus' in V.current && V.current.focus();
                        }, []),
                        Z = (0, h.N)(),
                        q = (0, s.useCallback)(() => {
                            E ? E() : Z({ to: o.AppScreen.Link });
                        }, [Z, E]);
                    (0, s.useEffect)(() => {
                        M && $();
                    }, [M, $]);
                    let G = (0, s.useMemo)(
                            () =>
                                f && y && S
                                    ? (0, r.jsxs)(p.N, {
                                          className: v().title,
                                          containerClassName: v().linkContainer,
                                          textClassName: v().linkText,
                                          icon: (0, r.jsx)(l.I, { className: v().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: y,
                                          onClick: q,
                                          'data-test-id': n.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, r.jsx)(m.DZ, {
                                                  id: C,
                                                  className: (0, a.$)(v().heading, b),
                                                  variant: w,
                                                  size: g,
                                                  weight: 'bold',
                                                  lineClamp: L,
                                                  ref: B,
                                                  children: f,
                                              }),
                                              P,
                                          ],
                                      })
                                    : (0, r.jsxs)('div', {
                                          className: v().title,
                                          children: [
                                              (0, r.jsx)(m.DZ, {
                                                  id: C,
                                                  className: (0, a.$)(v().heading, b, { [v().heading_notAvailable]: !S }),
                                                  variant: w,
                                                  size: g,
                                                  weight: 'bold',
                                                  lineClamp: L,
                                                  ref: B,
                                                  'data-test-id': n.S7.BLOCK_HEADER_TITLE,
                                                  children: f,
                                              }),
                                              P,
                                          ],
                                      }),
                            [S, q, B, w, C, f, b, L, g, y, P],
                        ),
                        J = (0, s.useMemo)(() => (U && D ? (0, r.jsx)(u.W, { isActive: z, className: v().shimmerDescription }) : k), [U, D, k, z]),
                        ee = (0, s.useMemo)(
                            () =>
                                K && D
                                    ? (0, r.jsx)(u.W, { isActive: z, className: (0, a.$)(v().shimmerCover, H), radius: 's' })
                                    : (0, r.jsx)(c._V, {
                                          src: i,
                                          fallbackIconVariant: A,
                                          style: { backgroundColor: j },
                                          className: v().cover,
                                          ref: V,
                                          onClick: Q,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': n.S7.BLOCK_HEADER_COVER,
                                      }),
                            [j, i, A, Q, z, D, H, K],
                        );
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(v().root, t),
                        ref: W,
                        ...F,
                        'data-test-id': n.S7.BLOCK_HEADER,
                        children: [
                            (0, r.jsxs)('div', {
                                className: v().start,
                                children: [
                                    X && (0, r.jsx)(d.t, { radius: T, className: (0, a.$)(v().coverContainer, I), children: ee }),
                                    (0, r.jsxs)('div', {
                                        className: v().textContainer,
                                        children: [
                                            x,
                                            G,
                                            Y &&
                                                (0, r.jsx)(m.HL, {
                                                    id: ''.concat(C, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: R ? 2 : void 0,
                                                    className: (0, a.$)(v().description, { [v().description_widthLimit]: R }),
                                                    'data-test-id': n.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            N || O,
                        ],
                    });
                },
                f = (0, s.forwardRef)((e, t) => (0, r.jsx)(x, { forwardRef: t, ...e }));
        },
        21978: (e) => {
            e.exports = {
                root: 'CarouselWithColumnsBlock_root__v_qoo',
                controls: 'CarouselWithColumnsBlock_controls__yCSFo',
                item: 'CarouselWithColumnsBlock_item__RBGs4',
                item_columns_one: 'CarouselWithColumnsBlock_item_columns_one__GuhDB',
                item_columns_two: 'CarouselWithColumnsBlock_item_columns_two__46rgZ',
                column: 'CarouselWithColumnsBlock_column__oMRES',
                backwardControl: 'CarouselWithColumnsBlock_backwardControl__b_uKR',
                controlsContainer: 'CarouselWithColumnsBlock_controlsContainer__4_1Ao',
            };
        },
        27892: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => o });
            var r = i(25839),
                a = i(35015),
                s = i(10546);
            let o = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(s.k, {
                    closeToast: i,
                    entityVariant: a.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        28777: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => f, D: () => v });
            var r = i(25839),
                a = i(82298),
                s = i(26508),
                o = i(74631),
                n = i(89288),
                l = i(36619),
                c = i(61493),
                d = i(5365),
                u = i(26742),
                m = i(95314),
                _ = i(18412),
                h = i(80986),
                p = i(21978),
                C = i.n(p),
                v = (function (e) {
                    return ((e.ONE = 'one'), (e.TWO = 'two'), e);
                })({});
            let x = (e) => {
                    let {
                            className: t,
                            forwardRef: i,
                            isShimmerVisible: p,
                            isColumnsShimmerVisible: v,
                            isHeaderWithoutControls: x,
                            maxColumnsCount: f,
                            carouselItemClassName: k,
                            carouselClassName: y,
                            children: N,
                            itemsCountPerColumn: g,
                            shimmer: j,
                            viewAllActionLink: T,
                            blockHeaderClassName: b,
                            additionalControl: L,
                            blockHeaderDescription: A,
                            blockHeaderTitle: S,
                            blockHeaderCoverUrl: E,
                            withBlockHeaderDescription: P,
                            withBlockHeaderCover: O,
                            blockHeaderHeadingVariant: B,
                            isShimmerActive: I,
                            shouldResetCarouselScroll: w,
                            beforeCarousel: R,
                            ...D
                        } = e,
                        { objectsCount: z } = (0, u.N)(),
                        [K, U] = (0, o.useState)(),
                        W = (0, o.useId)(),
                        H = (0, o.useRef)(null),
                        M = 'two' === f,
                        F = 'string' == typeof T ? String(T) : void 0,
                        $ = null != v ? v : p,
                        V = (0, o.useCallback)(
                            (e) => {
                                let t = (0, s.A)(e, g).slice(0, M ? 2 : 1);
                                return (
                                    1 === t.length ? U('one') : U('two'),
                                    t.map((e, t) => (0, r.jsx)('div', { className: C().column, 'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_COLUMN, children: e }, t))
                                );
                            },
                            [g, M],
                        ),
                        X = (0, o.useMemo)(() => {
                            if ($) return V(Array.from({ length: 2 * g }, (e, t) => (0, o.cloneElement)(j, { key: t })));
                            return V(N);
                        }, [N, V, $, g, j]),
                        Y = (0, o.useMemo)(
                            () =>
                                x
                                    ? null
                                    : (0, r.jsxs)('div', {
                                          className: C().controlsContainer,
                                          children: [L, (0, r.jsx)(h.X, { carouselRef: H, className: C().controls, backwardControlClassName: C().backwardControl })],
                                      }),
                            [L, x],
                        );
                    return (
                        (0, o.useEffect)(() => {
                            H.current && w && H.current.scrollTo(0, 0);
                        }, [w]),
                        (0, r.jsxs)('section', {
                            ref: i,
                            className: (0, a.$)(C().root, t),
                            ...(0, n.OZ)(D),
                            children: [
                                (0, r.jsx)(m.B, {
                                    objectType: l.DomainObjectType.Shortcut,
                                    objectId: F,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: null != z ? z : 0,
                                    children: (0, r.jsx)(_.T, {
                                        coverUrl: E,
                                        title: S,
                                        description: A,
                                        className: b,
                                        labeledForId: W,
                                        viewAllActionLink: T,
                                        controls: Y,
                                        isShimmerVisible: p,
                                        isShimmerActive: I,
                                        withDescription: P,
                                        withCover: O,
                                        headingVariant: B,
                                    }),
                                }),
                                R,
                                (0, r.jsx)(d.F, {
                                    itemClassName: (0, a.$)(C().item, C()['item_columns_'.concat($ && M ? 'two' : K)], k),
                                    className: y,
                                    ref: H,
                                    'aria-labelledby': W,
                                    'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_CAROUSEL,
                                    children: X,
                                }),
                            ],
                        })
                    );
                },
                f = (0, o.forwardRef)((e, t) => (0, r.jsx)(x, { forwardRef: t, ...e }));
        },
        30871: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => p });
            var r = i(25839),
                a = i(88204),
                s = i(84059),
                o = i(82298),
                n = i(8487),
                l = i(4254),
                c = i(16978),
                d = i(148),
                u = i.n(d);
            let m = (0, a.PA)(() =>
                (0, r.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, r.jsx)(l.DZ, {
                            className: (0, o.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(n.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(l.HL, {
                            className: (0, o.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, r.jsx)(n.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, r.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var _ = i(53712),
                h = i(27954);
            let p = (0, a.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: a } = (0, h.g)();
                return a.isAuthorized ? t : (i && (0, s.redirect)(_.Z.main.href), (0, r.jsx)(m, {}));
            });
        },
        37922: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        41459: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => s });
            var r = i(74631),
                a = i(39004);
            let s = (e) => {
                let { formatMessage: t } = (0, a.A)();
                return (0, r.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let r = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(r, ' ').concat(i);
                }, [t, e]);
            };
        },
        41544: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => b });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                o = i(84059),
                n = i(74631),
                l = i(39004),
                c = i(8487),
                d = i(61493),
                u = i(49656),
                m = i(3392),
                _ = i(4254),
                h = i(4331),
                p = i(85743),
                C = i(27954),
                v = i(19410),
                x = i(12929),
                f = i(62926),
                k = i(97522),
                y = i(40846),
                N = i(91171),
                g = i(87221),
                j = i(12752),
                T = i.n(j);
            let b = (0, s.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: s,
                        albumArtists: j,
                        withExplicitMark: b,
                        withSecondaryColor: L,
                        captionSize: A = 'm',
                        explicitSize: S = 'xxxs',
                        withAllArtistsTitle: E,
                        textClassName: P,
                        artistsClassName: O,
                        ignoreDislikedStyles: B,
                        withCustomTooltip: I = !0,
                        hasLineClamp: w = !0,
                        withSavingQueryParams: R,
                        beforeTitle: D,
                        withArtistLink: z,
                        withTrackLink: K,
                        afterTitle: U,
                        withContextMenuArtists: W,
                    } = e,
                    { formatMessage: H } = (0, l.A)(),
                    { sendNavigateSearchFeedback: M } = (0, p.z)(),
                    {
                        settings: { isMobile: F },
                        slam: $,
                    } = (0, C.g)(),
                    V = (0, N.$)({ withCustomTooltip: I }),
                    X = (0, o.useSearchParams)(),
                    Y = (0, y.B)(s, {
                        isMobile: F,
                        isOfflineModeEnabled: $.isOfflineModeEnabled,
                        albumArtists: j,
                        withTrackLink: K,
                        withArtistLink: z,
                        withExplicitMark: b,
                        query: R ? Object.fromEntries(X) : void 0,
                    }),
                    Q = (0, n.useMemo)(() => {
                        var e;
                        let t = H({ id: 'entity-names.track-name' }, { trackName: s.title });
                        return ''.concat(t, ' ').concat(null != (e = s.version) ? e : '');
                    }, [H, s.title, s.version]),
                    Z = (0, g.O)({ track: s, onNavigate: M, withSavingQueryParams: R, entityType: x.n.TRACK }),
                    q = (0, n.useCallback)(
                        (e) => {
                            var t;
                            let i = ''.concat(Y.title, ' ').concat(null != (t = Y.version) ? t : '');
                            return (0, r.jsx)(m.m_, {
                                enabled: V && !F,
                                offsetOptions: 4,
                                placement: 'top',
                                text: i,
                                hoverSettings: v.V,
                                children: (0, r.jsx)(_.HL, {
                                    className: (0, a.$)(T().text, T().title),
                                    type: 'entity',
                                    size: A,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: Y.title,
                                }),
                            });
                        },
                        [F, V, A, Y.title, Y.version],
                    ),
                    G = (0, u.L)(() => {
                        var e;
                        let t = ''.concat(Y.title, ' ').concat(null != (e = Y.version) ? e : '');
                        return Y.shouldShowRemovedTitle
                            ? (0, r.jsx)(m.m_, {
                                  enabled: V && !F,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: H({ id: 'track-title.error-not-found' }),
                                  hoverSettings: v.V,
                                  children: (0, r.jsx)(_.HL, {
                                      className: (0, a.$)(T().text, T().title),
                                      type: 'entity',
                                      size: A,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: V ? void 0 : H({ id: 'track-title.error-not-found' }),
                                      children: (0, r.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : Y.link
                              ? (0, r.jsx)(k.N, {
                                    onClick: Z,
                                    className: T().albumLink,
                                    href: Y.link.href,
                                    'aria-label': Q,
                                    title: V ? void 0 : t,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: q(),
                                })
                              : q({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }),
                    J = (0, n.useMemo)(() => +!!w, [w]);
                return (0, r.jsx)('div', {
                    className: (0, a.$)(T().root, { [T().root_disabled]: !s.isAvailable, [T().root_disliked]: s.isDisliked && !B, [T().root_withSecondaryColor]: L }, t),
                    children: (0, r.jsxs)('div', {
                        className: T().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(T().titleContainer, { [T().titleContainer_withVersion]: s.version }, i),
                                children: [
                                    (0, r.jsxs)(_.HL, {
                                        className: (0, a.$)(T().text, P),
                                        type: 'entity',
                                        size: A,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            D,
                                            G,
                                            Y.version &&
                                                (0, r.jsxs)(_.HL, {
                                                    className: (0, a.$)(T().text, T().version),
                                                    type: 'entity',
                                                    size: A,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: V ? void 0 : Y.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', Y.version],
                                                }),
                                        ],
                                    }),
                                    Y.explicitMark &&
                                        (0, r.jsx)(f.N, {
                                            containerClassName: T().explicitMarkContainer,
                                            getDescriptionTexts: s.getDescriptionTexts,
                                            size: S,
                                            variant: Y.explicitMark,
                                            className: T().explicitMark,
                                            trackId: s.id,
                                        }),
                                    U,
                                ],
                            }),
                            Y.artists.length > 0 &&
                                (0, r.jsx)(h.i, {
                                    className: (0, a.$)(T().text, { [T().artists]: w }, O, P),
                                    withAllArtistsTitle: E,
                                    linkClassName: (0, a.$)(T().text, T().link),
                                    captionClassName: (0, a.$)(T().text, T().artistCaption),
                                    artists: Y.artists,
                                    withLink: Y.withArtistLink,
                                    lineClamp: J,
                                    captionSize: A,
                                    withContextMenu: W,
                                }),
                        ],
                    }),
                });
            });
        },
        41707: (e, t, i) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = i(66738);
// for PulseSync: END import the download icon for playlist menu actions
            i.d(t, { B: () => J });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(25839),
                pulseSyncMenuItems = i(10820),
                pulseSyncMenuIcons = i(66738);
            // for PulseSync WebHost: END imports for native addon context menu items
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                o = i(74631),
                n = i(39004),
                l = i(36619),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                m = i(49656),
                _ = i(51246),
                h = i(66738),
                p = i(86869),
                C = i(4254),
                v = i(4331),
                x = i(62948),
                f = i(1134),
                k = i(79367),
                y = i(29481),
                N = i(47009),
                g = i(34159),
                j = i(52512),
                T = i(30290),
                b = i(61561),
                L = i(85686),
                A = i(85743),
                S = i(50209),
                E = i(27954),
                P = i(74760),
                O = i(6323),
                B = i(64720),
                I = i(97522),
                w = i(41580),
                R = i(49438),
                D = i(71996),
                z = i(78437),
                K = i(41459),
                U = i(10820),
                W = i(3210),
                H = i(11609),
                M = i(29872),
                F = i(56120),
                $ = i(83014),
                V = i(44806),
                X = i(16386),
                Y = i(67303),
                Q = i(59043);
            let Z = (0, s.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: a, open: s, ...o } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: m } = (0, M.q)(),
                    {
                        experiments: _,
                        settings: { isMobile: h },
                        trailer: p,
                        user: C,
                    } = (0, E.g)(),
                    v = (0, x.K)(i),
                    y = (0, f.A)(i),
                    N = (0, g.F)(),
                    { formatMessage: j } = (0, n.A)(),
                    T = (0, k.P)(),
                    b = _.checkExperiment(V.z.WebEditorsFeatures, 'on'),
                    L = (0, W.A)({ entityVariant: $.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, F.N)(s);
                let A = (0, u.c)(() => {
                    if (d) return void m();
                    T() || (p.openPlaylistTrailer(i.id), N(l.DomainObjectType.Playlist, i.id));
                });
                // for PulseSync WebHost: BEGIN playlist context and native addon menu item rendering
                let pulseSyncInjectPlaylistMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                        eventDetail: {
                            id: String(i.kind ?? i.id),
                            uuid: String(i.uuid ?? ''),
                            url: String(i.url ?? ''),
                            ...(i.title
                                ? {
                                      title: String(i.title),
                                  }
                                : {}),
                        },
                        renderItem: ({ key, payload, activate }) => {
                            const label = String(payload?.label ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim();
                            if (!label || !icon) return null;
                            return (0, pulseSyncMenuJsx.jsx)(
                                pulseSyncMenuItems.Dr,
                                {
                                    icon: (0, pulseSyncMenuJsx.jsx)(pulseSyncMenuIcons.I, {
                                        variant: icon,
                                        size: 'xxs',
                                    }),
                                    onClick: () => {
                                        (activate(), a?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END playlist context and native addon menu item rendering
                return (0, r.jsxs)(U.W1, {
                    title: i.title,
                    onOpenChange: a,
                    open: s,
                    offsetOptions: 10,
                    isMobile: h,
                    ariaLabel: j({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...o,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        b && (0, r.jsx)(H.d, { entityVariant: $.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : L }),
                        !h && (0, r.jsx)(Y.L, { onClick: y, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(X.T, { onClick: v, isLiked: i.isLiked, disabled: !C.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, r.jsx)(U.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, r.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)(Q.N, { onClick: A, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var q = i(15787),
                G = i.n(q);
            let J = (0, s.PA)((e) => {
                let { className: t, playlist: i, children: s, contentLinesCount: U, customDescription: W, onCoverMouseDown: H } = e,
                    { ref: M, intersectionPropertyId: F } = (0, j.n)(),
                    {
                        trailer: $,
                        user: V,
                        paywall: { modal: X },
                    } = (0, E.g)(),
                    { from: Y, utmLink: Q } = (0, T.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: q } = (0, n.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, A.z)(),
                    [ei, er] = (0, o.useState)(!1),
                    [ea, es] = (0, o.useState)(!1),
                    [eo, en] = (0, o.useState)(!1),
                    el = (0, K.r)(i),
                    ec = (0, x.K)(i),
                    ed = (0, f.A)(i),
                    eu = (0, y.N)(),
                    em = (0, N.b)(),
                    e_ = (0, L.Z)(i.url),
                    eh = (0, g.F)(),
                    ep = (0, k.P)(),
                    eC = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        ($.setUtmLink(Q), $.openPlaylistTrailer(i.id), eh(l.DomainObjectType.Playlist, i.id));
                    }),
                    [ev, ex] = (0, o.useState)(!1),
                    { isPlaying: ef, togglePlay: ek } = (0, S.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: Y, utmLink: Q }, loadContextMeta: !0 },
                    }),
                    ey = (0, u.c)(() => {
                        (eu({ to: l.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eN = (0, u.c)((e) => {
                        (ey(), e_(e));
                    }),
                    eg = (0, b.N)(),
                    ej = (0, u.c)(() => {
                        if (!ep()) {
                            if (eg) return void X.open();
                            (ei || ef || (er(!0), null == et || et()), ek(), em(!ef));
                        }
                    }),
                    eT = (0, u.c)(() => {
                        (ea || i.isLiked || (es(!0), null == J || J()), ec());
                    }),
                    eb = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eL = (0, u.c)((e) => {
                        (en(e), ex(e));
                    }),
                    eA = (0, o.useMemo)(() => {
                        var e;
                        return W
                            ? (0, r.jsx)(C.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: W }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    v.i,
                                    { className: G().artists, artists: i.artists, lineClamp: 1, linkClassName: G().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [W, i]),
                    eS = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                B.c,
                                {
                                    className: (0, a.$)(G().likeButton, G().control),
                                    isLiked: i.isLiked,
                                    onClick: eT,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !V.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eE = (0, o.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                z.n,
                                {
                                    children: (0, r.jsx)(
                                        D.k,
                                        { className: (0, a.$)(G().trailerButton, G().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eC },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eC, i]),
                    eP = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(
                                w.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, a.$)(G().pinButton, G().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eO = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(p.t, {
                                className: G().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: G().coverBlock,
                                    onClick: eN,
                                    onMouseDown: H,
                                    children: [
                                        (0, r.jsx)(O.B, {
                                            className: G().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: el,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(_.hg, {
                                            isVisible: eo || ev,
                                            className: G().controls,
                                            playControl: (0, r.jsx)(
                                                R.D,
                                                {
                                                    className: (0, a.$)(G().playButton, G().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: ej,
                                                    isPlaying: ef,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eS,
                                            menuControl: (0, r.jsx)(
                                                Z,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eL,
                                                    open: eo,
                                                    onClick: eb,
                                                    className: (0, a.$)(G().menuButton, G().control),
                                                    icon: (0, r.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eP,
                                            trailerControl: eE,
                                        }),
                                    ],
                                }),
                            }),
                        [eN, H, i, el, eo, ev, ej, ef, eS, eL, eb, eP, eE],
                    ),
                    eB = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(_.MN, {
                    ref: M,
                    'aria-label': el,
                    className: (0, a.$)(G().root, t),
                    title: (0, r.jsx)(C.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(I.N, { className: G().titleLink, href: i.url, tabIndex: -1, onClick: ey, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(I.N, { className: G().srTitleLink, href: i.url, onClick: ey, children: i.title }),
                    'data-intersection-property-id': F,
                    contentLinesCount: U,
                    view: eO,
                    description: eA,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eB &&
                            (0, r.jsx)(P.x, {
                                ariaLabel: q({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        s,
                    ],
                });
            });
        },
        42190: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => o });
            var r = i(25839),
                a = i(35015),
                s = i(3163);
            let o = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(s.O, {
                    entityVariant: a.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        49538: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsPage: () => z });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                o = i(74631),
                n = i(39004),
                l = i(8487),
                c = i(61493),
                d = i(22939),
                u = i(75501),
                m = i(49656),
                _ = i(66738),
                h = i(13833),
                p = i(4254),
                C = i(78299),
                v = i(77635),
                x = i(1407),
                f = i(91797),
                k = i(51549),
                y = i(82967),
                N = i(20258),
                g = i(10322),
                j = i(30290),
                T = i(21784),
                b = i(89192),
                L = i(30716),
                A = i(53712),
                S = i(27954),
                E = i(3718),
                P = i(28777),
                O = i(99401),
                B = i(26076),
                I = i(10603),
                w = i(97805),
                R = i(50166),
                D = i.n(R);
            let z = (0, s.PA)(() => {
                let {
                        collection: { kids: e },
                    } = (0, S.g)(),
                    { contentScrollRef: t, setContentScrollRef: i } = (0, b.g)(),
                    s = (0, T.W)(),
                    { from: R } = (0, j.f)({ pageId: N._Q.COLLECTION_KIDS }),
                    { formatMessage: z } = (0, n.A)();
                ((0, o.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                    (0, L.J)(e.isResolved));
                let K = (0, m.L)(() =>
                    e.tracks.loadedItems.slice(0, 5).map((t, i) => {
                        let a = {
                            contextData: { type: d.K.Various, meta: { id: t.entityId }, from: R },
                            queueParams: { index: i },
                            loadContextMeta: !1,
                            entitiesData: e.tracks.sonataEntitiesData,
                        };
                        return t.type === u.S.MUSIC
                            ? (0, r.jsx)(y.K, { track: t, playContextParams: a }, i)
                            : (0, r.jsx)(k.K, { track: t, playContextParams: a, withPodcastName: t.isTrackPodcast }, i);
                    }),
                );
                if (e.isNeededToLoad) {
                    let t = [e.albums.getData({ pageSize: 8 }), e.playlists.getData({ pageSize: 8 }), e.tracks.getData({ pageSize: 5 })];
                    (0, o.use)(Promise.allSettled(t));
                }
                return e.isRejected
                    ? (0, r.jsx)(C.SomethingWentWrong, {})
                    : (0, r.jsx)(g.n, {
                          pageId: N._Q.COLLECTION_KIDS,
                          children: (0, r.jsxs)(x.h, {
                              scrollElement: t,
                              outerTitle: z({ id: 'kids.for-kids' }),
                              children: [
                                  (0, r.jsx)(I.Y, {
                                      variant: I.V.TEXT,
                                      withForwardControl: !1,
                                      withBackwardControl: s.canBack,
                                      children: (0, r.jsx)(p.DZ, { variant: 'h2', weight: 'bold', size: 'xl', children: (0, r.jsx)(l.A, { id: 'kids.for-kids' }) }),
                                  }),
                                  (0, r.jsxs)(h.N, {
                                      className: D().root,
                                      containerClassName: D().content,
                                      ref: i,
                                      'data-test-id': c.Xk.collection.COLLECTION_KIDS_PAGE,
                                      children: [
                                          !e.shouldShowContent &&
                                              (0, r.jsxs)('div', {
                                                  className: D().emptyBlock,
                                                  children: [
                                                      (0, r.jsx)(_.I, { className: D().emptyBlockIcon, variant: 'album' }),
                                                      (0, r.jsx)(p.DZ, {
                                                          className: D().emptyBlockTitle,
                                                          variant: 'h3',
                                                          size: 'xs',
                                                          children: (0, r.jsx)(l.A, { id: 'kids.empty-collection-text' }),
                                                      }),
                                                  ],
                                              }),
                                          e.tracks.shouldShowContent &&
                                              (0, r.jsx)(P.$, {
                                                  blockHeaderClassName: (0, a.$)(D().carouselBlockHeader, D().carouselBlock),
                                                  carouselItemClassName: (0, a.$)(D().tracksCarouselItem, D().important),
                                                  blockHeaderTitle: z({ id: 'kids.favourite-tracks-and-episodes' }),
                                                  shimmer: (0, r.jsx)(w.D, { variant: E.X.PLAYLIST, isActive: !0 }),
                                                  maxColumnsCount: P.D.ONE,
                                                  isShimmerVisible: e.tracks.isShimmerVisible,
                                                  isShimmerActive: !0,
                                                  itemsCountPerColumn: 5,
                                                  viewAllActionLink: A.Z.collectionKidsTracks.href,
                                                  children: K,
                                              }),
                                          e.albums.shouldShowContent &&
                                              (0, r.jsx)(v.p, {
                                                  headerClassName: (0, a.$)(D().carouselBlock, D().carouselBlockHeader),
                                                  containerClassName: D().carouselBlock,
                                                  title: z({ id: 'kids.albums-and-podcasts' }),
                                                  albums: e.albums.loadedItems,
                                                  headingVariant: 'h2',
                                                  isShimmerVisible: e.albums.isShimmerVisible,
                                                  isShimmerActive: !0,
                                                  viewAllActionLink: A.Z.collectionKidsAlbums.href,
                                              }),
                                          e.playlists.shouldShowContent &&
                                              (0, r.jsx)(f.E, {
                                                  headerClassName: (0, a.$)(D().carouselBlock, D().carouselBlockHeader),
                                                  containerClassName: D().carouselBlock,
                                                  title: z({ id: 'entity-names.artist-playlist' }),
                                                  playlists: e.playlists.loadedItems,
                                                  headingVariant: 'h2',
                                                  isShimmerVisible: e.playlists.isShimmerVisible,
                                                  isShimmerActive: !0,
                                                  viewAllActionLink: A.Z.collectionKidsPlaylists.href,
                                              }),
                                          (0, r.jsx)(B.A, { children: (0, r.jsx)(O.w, { className: D().footer }) }),
                                      ],
                                  }),
                              ],
                          }),
                      });
            });
        },
        50166: (e) => {
            e.exports = {
                root: 'CollectionKidsPage_root__nfE01',
                content: 'CollectionKidsPage_content__hVB40',
                carouselBlocks: 'CollectionKidsPage_carouselBlocks__q7f0T',
                tracksCarouselItem: 'CollectionKidsPage_tracksCarouselItem__8WvD0',
                important: 'CollectionKidsPage_important__GkZJX',
                carouselBlock: 'CollectionKidsPage_carouselBlock___6XRJ',
                carouselBlockHeader: 'CollectionKidsPage_carouselBlockHeader__fqs_v',
                emptyBlock: 'CollectionKidsPage_emptyBlock__dc50I',
                emptyBlockIcon: 'CollectionKidsPage_emptyBlockIcon__eVAMs',
                emptyBlockTitle: 'CollectionKidsPage_emptyBlockTitle__TYUpU',
                footer: 'CollectionKidsPage_footer__wEREs',
            };
        },
        57024: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => s, UC: () => o, dM: () => n, uV: () => l });
            var r = i(93690),
                a = i(58848);
            let s = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                o = (e) => (e.uid ? 'authorized' : 'no-uid'),
                n = (e) => {
                    if (!(e instanceof r.m5) || !(0, a.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, a.N)(e.cause)) return;
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
        58848: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => r });
            let r = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        61777: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => x });
            var r = i(74631),
                a = i(67379),
                s = i(17850),
                o = i(59450),
                n = i(49656),
                l = i(84e3),
                c = i(58069),
                d = i(20258),
                u = i(26742),
                m = i(25195),
                _ = i(37314),
                h = i(97952),
                p = i(10764),
                C = i(72594);
            let v = [
                    d._Q.HOME,
                    d._Q.LANDING,
                    d._Q.NON_MUSIC,
                    d._Q.OWN_COLLECTION,
                    d._Q.SEARCH,
                    d._Q.ARTIST,
                    d._Q.CONCERTS,
                    d._Q.CONCERT,
                    d._Q.ALBUM,
                    d._Q.PLAYLIST,
                    d._Q.SLIDES_SCREEN,
                    d._Q.PROMOLANDING_ALBUM,
                    d._Q.WAVE_LANDING_SCREEN,
                ],
                x = () => {
                    let e = (0, r.useRef)(!1),
                        t = (0, o.st)(),
                        i = (0, l.U)(),
                        { hash: x } = (0, o.gf)(),
                        { pageId: f } = (0, h.$)(),
                        { tabId: k, tabPos: y, isTabSelectedByDefault: N } = (0, C.R)(),
                        { offsetBlockPosY: g } = (0, m.u)(),
                        { blockId: j, blockType: T, blockPosX: b, blockPosY: L, mainObjectType: A, mainObjectId: S, objectsCount: E } = (0, u.N)(),
                        { filterKey: P, filterValue: O, filterPos: B } = (0, _.G)(),
                        { skeleton: I } = (0, p.b)(),
                        w = (0, n.L)(() => (void 0 !== g && void 0 !== L ? g + L : L));
                    return (0, r.useCallback)(() => {
                        if (!t || !f || !d.xK.includes(f) || !v.includes(f) || e.current) return;
                        let r = { hash: x, pageId: c.F[f], entityType: T, entityId: j, entityPosX: b, entityPosY: w, objectsCount: E };
                        (void 0 !== P && ((r.filterKey = P), (r.filterValue = O), (r.filterPos = B)),
                            d.qG.includes(f) && ((r.tabId = k), (r.tabPos = y), (r.isTabSelectedByDefault = N)),
                            I && (r.skeletonId = I),
                            S && A && ((r.mainObjectType = A), (r.mainObjectId = S)));
                        let o = (0, a.F)({ params: r, logger: i, context: 'useSendEventOnBlockLoaded' });
                        o && ((0, s.uY)(t.evgenInstance, o), (e.current = !0));
                    }, [t, f, x, T, j, b, w, P, O, B, E, I, S, A, i, k, y, N]);
                };
        },
        62948: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var r = i(25839),
                a = i(33660),
                s = i(74631),
                o = i(39004),
                n = i(31860),
                l = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                m = i(42190);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, h] = (0, s.useState)(!1),
                    { formatMessage: p } = (0, o.A)();
                return (0, s.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let s = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                    h(!0);
                    let o = await e.toggleLike();
                    (h(!1),
                        o === n.f.OK
                            ? i((0, r.jsx)(m.T, { playlist: s }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [t.isAuthorized, _, e, p, i]);
            };
        },
        66284: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => f });
            var r = i(25839),
                a = i(82298),
                s = i(74631),
                o = i(89288),
                n = i(36619),
                l = i(49656),
                c = i(5365),
                d = i(23976),
                u = i(26742),
                m = i(95314),
                _ = i(18412),
                h = i(80986),
                p = i(95388),
                C = i(99024),
                v = i.n(C);
            let x = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: i,
                            isShimmerVisible: C,
                            isShimmerActive: x,
                            isShimmerWithSubcover: f,
                            isShimmerCentered: k,
                            isShimmerRounded: y,
                            title: N,
                            description: g,
                            coverUrl: j,
                            viewAllActionLink: T,
                            titleChildren: b,
                            headerChildren: L,
                            children: A,
                            className: S,
                            containerClassName: E,
                            headerClassName: P,
                            itemClassName: O,
                            showHeaderShimmer: B = !1,
                            showShimmerInfo: I = !0,
                            showControls: w = !0,
                            headingRef: R,
                            headingVariant: D,
                            customShimmer: z,
                            ...K
                        } = e,
                        U = (0, s.useId)(),
                        W = (0, s.useRef)(null),
                        { objectsCount: H } = (0, u.N)(),
                        M = (0, s.useMemo)(
                            () =>
                                B && C
                                    ? (0, r.jsx)('div', { className: P, children: (0, r.jsx)(d.W, { isActive: x, className: v().shimmerTitle, radius: 'l' }) })
                                    : N || g || b || L
                                      ? (0, r.jsx)(m.B, {
                                            objectType: n.DomainObjectType.Shortcut,
                                            objectId: String(T),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != H ? H : 0,
                                            children: (0, r.jsx)(_.T, {
                                                className: P,
                                                labeledForId: U,
                                                title: N,
                                                description: g,
                                                coverUrl: j,
                                                viewAllActionLink: T,
                                                controls: w && (0, r.jsx)(h.X, { className: v().controls, carouselRef: W }),
                                                headingRef: R,
                                                headingVariant: D,
                                                withDescription: !!g,
                                                titleChildren: b,
                                                children: L,
                                            }),
                                        })
                                      : void 0,
                            [j, g, P, R, D, U, x, C, H, w, B, N, b, L, T],
                        ),
                        F = (0, l.L)(() => z || (0, p.k)({ className: i, isActive: x, withInfo: I, withSubcover: f, centered: k, round: y }));
                    return (0, r.jsxs)('section', {
                        ref: t,
                        className: (0, a.$)(v().root, S),
                        ...(0, o.OZ)(K),
                        children: [
                            M,
                            (0, r.jsx)(c.F, {
                                className: E,
                                ref: W,
                                itemClassName: (0, a.$)(v().item, v().important, O),
                                'aria-labelledby': ''.concat(U, ' ').concat(U, '-description'),
                                children: C ? F : A,
                            }),
                        ],
                    });
                },
                f = (0, s.forwardRef)((e, t) => (0, r.jsx)(x, { forwardRef: t, ...e }));
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
        73208: (e) => {
            e.exports = {
                root: 'BlockHeader_root__j3mbg',
                titleIcon: 'BlockHeader_titleIcon__GQFEK',
                start: 'BlockHeader_start__ZrGP5',
                coverContainer: 'BlockHeader_coverContainer__lATZT',
                cover: 'BlockHeader_cover__koOXq',
                textContainer: 'BlockHeader_textContainer___2wn9',
                title: 'BlockHeader_title__5xlx6',
                description: 'BlockHeader_description__hAk9D',
                description_widthLimit: 'BlockHeader_description_widthLimit__CXxK1',
                linkContainer: 'BlockHeader_linkContainer__EuW_L',
                linkText: 'BlockHeader_linkText__Or6VB',
                heading: 'BlockHeader_heading__4iqvS',
                heading_notAvailable: 'BlockHeader_heading_notAvailable__r_dm1',
                shimmerCover: 'BlockHeader_shimmerCover__m2PJl',
                textShimmerContainer: 'BlockHeader_textShimmerContainer__hT_Zo',
                shimmerTitle: 'BlockHeader_shimmerTitle__kAkgm',
                shimmerDescription: 'BlockHeader_shimmerDescription__Bya4z',
            };
        },
        76481: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            class r extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: a = {}, ...s } = t,
                        o = e || 'Internal error';
                    (super(o, s), (this.message = o), (this.code = i), (this.data = a), (this.stack = Error(o).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
            class a extends r {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        77635: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => u });
            var r = i(25839),
                a = i(74631),
                s = i(36619),
                o = i(61777),
                n = i(95314),
                l = i(66284),
                c = i(76939);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            albums: _,
                            className: h,
                            containerClassName: p,
                            headerClassName: C,
                            viewAllActionLink: v,
                            headingRef: x,
                            headingVariant: f,
                            shouldSendAnalyticsOnLoaded: k,
                            ...y
                        } = e,
                        N = (0, o.f)();
                    return (
                        (0, a.useEffect)(() => {
                            k && N();
                        }, [N, k]),
                        (0, r.jsx)(l.O, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: h,
                            headerClassName: C,
                            containerClassName: p,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: v,
                            headingRef: x,
                            headingVariant: f,
                            ...y,
                            children:
                                null == _
                                    ? void 0
                                    : _.map((e, t) =>
                                          (0, r.jsx)(
                                              n.B,
                                              {
                                                  objectType: s.DomainObjectType.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: _.length,
                                                  children: (0, r.jsx)(c.a, {
                                                      album: e,
                                                      contentLinesCount: 3,
                                                      withAddition: !e.isNonMusic,
                                                      withLikesCount: e.isNonMusic,
                                                  }),
                                              },
                                              e.id,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        77920: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { X: () => r }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(r || (r = {})));
        },
        78299: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => g });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                o = i(74631),
                n = i(39004),
                l = i(8487);
            i(93588);
            var c = i(4071),
                d = i(66738),
                u = i(4254),
                m = i(67379),
                _ = i(36619),
                h = i(76945),
                p = i(59450),
                C = i(84e3),
                v = i(97952),
                x = i(89192),
                f = i(53712),
                k = i(15270),
                y = i(68854),
                N = i.n(y);
            let g = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: s } = (0, n.A)(),
                    y = s({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: i } = (0, p.gf)(),
                        { pageId: r } = (0, v.$)(),
                        a = (0, C.U)();
                    (0, o.useEffect)(() => {
                        if (!t || !i || !r) return;
                        let s = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: r,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, h.z5)(t.evgenInstance, s);
                    }, [t, e, i, r, a]);
                })(y);
                let { sendRefreshEvent: g } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: i } = (0, v.$)(),
                            r = (0, C.U)();
                        return {
                            sendRefreshEvent: (0, o.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let a = (0, m.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, h.bv)(e.evgenInstance, a);
                            }, [e, t, i, r]),
                        };
                    })(),
                    j = (0, o.useCallback)(() => {
                        (g(), (window.location.href = f.Z.main.href));
                    }, [g]),
                    { contentRef: T } = (0, x.g)();
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(N().root, t),
                    children: [
                        i &&
                            (0, r.jsx)(k.L, { withBackwardFallback: '/', className: (0, a.$)(N().navigation, { [N().navigation_desktop]: !T }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, a.$)(N().content, { [N().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(d.I, { className: N().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.DZ, { className: (0, a.$)(N().title, N().important), variant: 'h3', size: 'xs', children: y }),
                                (0, r.jsxs)(u.HL, {
                                    className: (0, a.$)(N().text, N().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: j,
                                    className: N().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, r.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        80986: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => m });
            var r = i(25839),
                a = i(82298),
                s = i(74631),
                o = i(61493),
                n = i(9911),
                l = i(4071),
                c = i(66738),
                d = i(37922),
                u = i.n(d);
            let m = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: i,
                        forwardControlClassName: d,
                        className: m,
                        withSecondaryColor: _,
                        buttonSize: h = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: C, swipeForward: v, shouldBackwardButtonBeDisabled: x, shouldForwardButtonBeDisabled: f, shouldHideControls: k } = (0, n.Y)(t),
                    y = (0, s.useCallback)(
                        (e) => {
                            (C(), e.stopPropagation());
                        },
                        [C],
                    ),
                    N = (0, s.useCallback)(
                        (e) => {
                            (v(), e.stopPropagation());
                        },
                        [v],
                    );
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(u().root, m),
                    'data-test-id': o.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, r.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(u().control, i, { [u().control_hidden]: k, [u().control_withSecondaryColor]: _ }),
                            onClick: y,
                            size: h,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: x,
                            'data-test-id': o.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, r.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(u().control, d, { [u().control_hidden]: k, [u().control_withSecondaryColor]: _ }),
                            onClick: N,
                            size: h,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: f,
                            'data-test-id': o.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        82967: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => x });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                o = i(74631),
                n = i(61493),
                l = i(54880),
                c = i(50209),
                d = i(27954),
                u = i(6349),
                m = i(62661),
                _ = i(74756),
                h = i(41544),
                p = i(39099),
                C = i(7929),
                v = i.n(C);
            let x = (0, s.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: s,
                        className: C,
                        withDNDBlock: x,
                        isDragging: f,
                        draggingClassName: k,
                        ignoreDislikedStyles: y,
                        withSecondaryColor: N,
                        handleRemove: g,
                        withDislike: j,
                        withTrailer: T = !0,
                        beforeTitle: b,
                        removeButtonAriaLabel: L,
                        hideControls: A,
                    } = e,
                    S = (0, c.D)({ playContextParams: s, entityId: i.entityId }),
                    {
                        settings: { isMobile: E },
                    } = (0, d.g)(),
                    P = (0, l.X)(i.trackSource, { isMobile: E }),
                    O = (0, o.useCallback)(
                        (e) =>
                            (0, r.jsx)(u.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: y,
                                radius: 'xs',
                                ...e,
                            }),
                        [y, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, r.jsx)(p.C, {
                    className: (0, a.$)(C, { [v().trackWithDots]: x, [v().important]: x }),
                    track: i,
                    beforeBlock: x ? (0, r.jsx)(m.O, { className: (0, a.$)(v().dots, k), isDragging: f }) : void 0,
                    meta: (0, r.jsx)(h.j, { withArtistLink: P, beforeTitle: b, track: i, ignoreDislikedStyles: y, withSecondaryColor: N }),
                    playButtonCellRender: O,
                    controls: (0, r.jsx)(_.Q, {
                        track: i,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: y,
                        utmLink: null == (t = s.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: N,
                        handleRemove: g,
                        withDislike: j,
                        withTrailer: T,
                        removeButtonAriaLabel: L,
                        hideControls: A,
                    }),
                    ...S,
                    'data-test-id': n.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        87138: (e, t, i) => {
            'use strict';
            i.d(t, { XU: () => m, YK: () => u });
            var r,
                a,
                s = i(23198),
                o = i(74631),
                n = i(39004);
            (!(function (e) {
                ((e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName'));
            })(r || (r = {})),
                (function (e) {
                    ((e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts'));
                })(a || (a = {})));
            var l = function (e) {
                var t = (0, n.A)(),
                    i = e.value,
                    r = e.children,
                    a = (0, s.__rest)(e, ['value', 'children']);
                return r(t.formatNumberToParts(i, a));
            };
            function c(e) {
                var t = function (t) {
                    var i = (0, n.A)(),
                        r = t.value,
                        a = t.children,
                        o = (0, s.__rest)(t, ['value', 'children']),
                        l = 'string' == typeof r ? new Date(r || 0) : r;
                    return a('formatDate' === e ? i.formatDateToParts(l, o) : i.formatTimeToParts(l, o));
                };
                return ((t.displayName = a[e]), t);
            }
            function d(e) {
                var t = function (t) {
                    var i = (0, n.A)(),
                        r = t.value,
                        a = t.children,
                        l = (0, s.__rest)(t, ['value', 'children']),
                        c = i[e](r, l);
                    if ('function' == typeof a) return a(c);
                    var d = i.textComponent || o.Fragment;
                    return o.createElement(d, null, c);
                };
                return ((t.displayName = r[e]), t);
            }
            function u(e) {
                return e;
            }
            ((l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts'));
            var m = d('formatDate');
            (d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), c('formatDate'), c('formatTime'));
        },
        90591: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 30871)), Promise.resolve().then(i.bind(i, 49538)));
        },
        91626: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => a }), i(77920));
            var r = i(76481);
            class a extends r.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        91797: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => u });
            var r = i(25839),
                a = i(74631),
                s = i(36619),
                o = i(61777),
                n = i(95314),
                l = i(66284),
                c = i(41707);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            playlists: _,
                            containerClassName: h,
                            className: p,
                            headerClassName: C,
                            viewAllActionLink: v,
                            headingVariant: x,
                            shouldSendAnalyticsOnLoaded: f,
                            ...k
                        } = e,
                        y = (0, o.f)();
                    return (
                        (0, a.useEffect)(() => {
                            f && !i && y();
                        }, [i, y, f]),
                        (0, r.jsx)(l.O, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: p,
                            headerClassName: C,
                            containerClassName: h,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: v,
                            headingVariant: x,
                            ...k,
                            children:
                                null == _
                                    ? void 0
                                    : _.map((e, t) =>
                                          (0, r.jsx)(
                                              n.B,
                                              {
                                                  objectType: s.DomainObjectType.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: _.length,
                                                  children: (0, r.jsx)(c.B, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        93690: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => s.G, X1: () => r.X, m5: () => a.m });
            var r = i(77920),
                a = i(76481),
                s = i(91626);
            i(95919);
        },
        95314: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => o });
            var r = i(25839),
                a = i(74631),
                s = i(66192);
            let o = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: o, objectPos: n, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: u, children: m } = e,
                    _ = (0, a.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: o, objectPos: n, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, i, o, n, l, c, d, u],
                    );
                return (0, r.jsx)(s.l.Provider, { value: _, children: m });
            };
        },
        95388: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => s });
            var r = i(25839),
                a = i(19412);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, i) => (0, r.jsx)(a.V, { ...e }, i));
            };
        },
        95919: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { Z: () => r }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(r || (r = {})));
        },
        99024: (e) => {
            e.exports = {
                root: 'CarouselBlock_root__aeOla',
                controls: 'CarouselBlock_controls__vsHCR',
                shimmerTitle: 'CarouselBlock_shimmerTitle__ZXIRx',
                item: 'CarouselBlock_item__DatZ2',
                important: 'CarouselBlock_important__AARmP',
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1676, 3349, 7349, 7339, 6749, 6287, 2121, 3472, 1107, 9593, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 4245, 3269, 4163, 3246,
                4517, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 5898, 2533, 8222, 4475, 5056, 7358,
            ],
            () => e((e.s = 90591)),
        ),
            (_N_E = e.O()));
    },
]);
