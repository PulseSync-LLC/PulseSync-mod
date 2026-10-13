(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2464],
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
        5365: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => c });
            var i,
                a = r(74631),
                o = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (a && (a += ' '), (a += i));
                                            else for (r in t) t[r] && (a && (a += ' '), (a += r));
                                        return a;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => a }));
                        let a = i;
                    },
                    2876: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var a = null;
                            if ((void 0 !== i && (a = '' + i), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var o in ((i = {}), t)) 'key' !== o && (i[o] = t[o]);
                            else i = t;
                            return { $$typeof: r, type: e, key: a, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    4014: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0));
                        let a = r(4377),
                            o = r(5881),
                            n = r(810),
                            s = i(r(2876)),
                            l = (e) => {
                                let { className: t, itemClassName: r, children: i, forwardRef: l, role: c, ...d } = e;
                                return (0, a.jsx)('ol', {
                                    ref: l,
                                    className: (0, o.clsx)(s.default.root, t),
                                    ...d,
                                    role: null != c ? c : 'list',
                                    children: n.Children.map(i, (e) => (0, a.jsx)('li', { className: (0, o.clsx)(s.default.item, r), children: e })),
                                });
                            };
                        t.Carousel = (0, n.forwardRef)((e, t) => (0, a.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(a, 2));
                    },
                },
                n = {};
            function s(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (o[e].call(r.exports, r, r.exports, s), r.exports);
            }
            ((s.d = (e, t) => {
                for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.l = void 0));
                var e = s(4014);
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
        6973: (e) => {
            e.exports = { title: 'CollectionShelfShimmer_title__X3d9J' };
        },
        9911: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => d });
            var i,
                a = r(6274),
                o = r(74631),
                n = {
                    352: (e) => {
                        e.exports = a;
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(o, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return (n[e](r, r.exports, l), r.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = l(810),
                    t = l(352);
                c.l = (r) => {
                    let [i, a] = (0, e.useState)(!0),
                        [o, n] = (0, e.useState)(!0),
                        s = () => {
                            let e = null == r ? void 0 : r.current;
                            e && (a(0 === e.scrollLeft), n(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        s();
                    }, [r, s]),
                        (0, e.useEffect)(() => {
                            let e = null == r ? void 0 : r.current;
                            return (
                                null == e || e.addEventListener('scroll', s),
                                window.addEventListener('resize', s),
                                () => {
                                    (null == e || e.removeEventListener('scroll', s), window.removeEventListener('resize', s));
                                }
                            );
                        }, [r, s]));
                    let l = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    r && r.current && (r.current.scrollLeft += r.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [r],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        r && r.current && (r.current.scrollLeft -= r.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [r],
                        ),
                        swipeForward: l,
                        shouldBackwardButtonBeDisabled: i,
                        shouldForwardButtonBeDisabled: o,
                        shouldHideControls: i && o,
                    };
                };
            })(),
                c.X);
            var d = c.l;
        },
        16978: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => m });
            var i = r(25839),
                a = r(84059),
                o = r(8487),
                n = r(61493),
                s = r(71035),
                l = r(4071),
                c = r(4254),
                d = r(57024),
                _ = r(36484),
                u = r(62562);
            let m = (e) => {
                let { size: t = 'm', variant: r = 'default', color: m = 'primary', withRipple: p = !0, buttonText: h, isBlock: C, key: v, className: x } = e,
                    f = (0, a.useRouter)(),
                    E = (0, u.N)().get(_.QG),
                    N = (0, s.c)(() => {
                        E.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), f.push(E.authorizationUrl));
                    });
                return (0, i.jsx)(
                    l.$,
                    {
                        onClick: N,
                        className: x,
                        isBlock: C,
                        color: m,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(o.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
            };
        },
        18412: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => f });
            var i = r(25839),
                a = r(82298),
                o = r(74631),
                n = r(36619),
                s = r(61493),
                l = r(66738),
                c = r(23818),
                d = r(86869),
                _ = r(23976),
                u = r(4254),
                m = r(61777),
                p = r(29481),
                h = r(97522),
                C = r(73208),
                v = r.n(C);
            let x = (e) => {
                    let {
                            className: t,
                            coverUrl: r,
                            labeledForId: C,
                            subTitle: x,
                            title: f,
                            description: E,
                            viewAllActionLink: N,
                            controls: T,
                            titleSize: b = 'm',
                            coverBackgroundColor: y,
                            coverRadius: A = 's',
                            titleClassName: k,
                            titleLineClamp: g,
                            fallbackIconVariant: S,
                            available: L = !0,
                            onViewAllAction: O,
                            titleChildren: j,
                            children: I,
                            headingRef: D,
                            coverContainerClassName: R,
                            headingVariant: w = 'h3',
                            withDescriptionWidthLimit: B = !0,
                            isShimmerVisible: P,
                            isShimmerActive: M,
                            withCover: H,
                            withDescription: W,
                            forwardRef: U,
                            shimmerCoverClassName: z,
                            shouldSendAnalyticsOnLoaded: F,
                            ...$
                        } = e,
                        Y = (0, m.f)(),
                        K = (0, o.useRef)(null),
                        X = r || H,
                        V = E || W,
                        Z = (0, o.useCallback)(() => {
                            K.current && 'focus' in K.current && K.current.focus();
                        }, []),
                        G = (0, p.N)(),
                        Q = (0, o.useCallback)(() => {
                            O ? O() : G({ to: n.AppScreen.Link });
                        }, [G, O]);
                    (0, o.useEffect)(() => {
                        F && Y();
                    }, [F, Y]);
                    let q = (0, o.useMemo)(
                            () =>
                                f && N && L
                                    ? (0, i.jsxs)(h.N, {
                                          className: v().title,
                                          containerClassName: v().linkContainer,
                                          textClassName: v().linkText,
                                          icon: (0, i.jsx)(l.I, { className: v().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: N,
                                          onClick: Q,
                                          'data-test-id': s.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, i.jsx)(u.DZ, {
                                                  id: C,
                                                  className: (0, a.$)(v().heading, k),
                                                  variant: w,
                                                  size: b,
                                                  weight: 'bold',
                                                  lineClamp: g,
                                                  ref: D,
                                                  children: f,
                                              }),
                                              j,
                                          ],
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: v().title,
                                          children: [
                                              (0, i.jsx)(u.DZ, {
                                                  id: C,
                                                  className: (0, a.$)(v().heading, k, { [v().heading_notAvailable]: !L }),
                                                  variant: w,
                                                  size: b,
                                                  weight: 'bold',
                                                  lineClamp: g,
                                                  ref: D,
                                                  'data-test-id': s.S7.BLOCK_HEADER_TITLE,
                                                  children: f,
                                              }),
                                              j,
                                          ],
                                      }),
                            [L, Q, D, w, C, f, k, g, b, N, j],
                        ),
                        J = (0, o.useMemo)(() => (W && P ? (0, i.jsx)(_.W, { isActive: M, className: v().shimmerDescription }) : E), [W, P, E, M]),
                        ee = (0, o.useMemo)(
                            () =>
                                H && P
                                    ? (0, i.jsx)(_.W, { isActive: M, className: (0, a.$)(v().shimmerCover, z), radius: 's' })
                                    : (0, i.jsx)(c._V, {
                                          src: r,
                                          fallbackIconVariant: S,
                                          style: { backgroundColor: y },
                                          className: v().cover,
                                          ref: K,
                                          onClick: Z,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': s.S7.BLOCK_HEADER_COVER,
                                      }),
                            [y, r, S, Z, M, P, z, H],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(v().root, t),
                        ref: U,
                        ...$,
                        'data-test-id': s.S7.BLOCK_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: v().start,
                                children: [
                                    X && (0, i.jsx)(d.t, { radius: A, className: (0, a.$)(v().coverContainer, R), children: ee }),
                                    (0, i.jsxs)('div', {
                                        className: v().textContainer,
                                        children: [
                                            x,
                                            q,
                                            V &&
                                                (0, i.jsx)(u.HL, {
                                                    id: ''.concat(C, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: B ? 2 : void 0,
                                                    className: (0, a.$)(v().description, { [v().description_widthLimit]: B }),
                                                    'data-test-id': s.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            T || I,
                        ],
                    });
                },
                f = (0, o.forwardRef)((e, t) => (0, i.jsx)(x, { forwardRef: t, ...e }));
        },
        20749: (e) => {
            e.exports = {
                header: 'CollectionShelfLiked_header__u9MqV',
                shelfColumn: 'CollectionShelfLiked_shelfColumn__4KX_5',
                important: 'CollectionShelfLiked_important__0K3qk',
            };
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
        28045: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => z });
            var i = r(25839),
                a = r(82298),
                o = r(88204),
                n = r(74631),
                s = r(36619),
                l = r(61493),
                c = r(22939),
                d = r(71035),
                _ = r(49656),
                u = r(11823),
                m = r(4254),
                p = r(99835),
                h = r(73614),
                C = r(4331),
                v = r(79367),
                x = r(29481),
                f = r(47009),
                E = r(52512),
                N = r(30290),
                T = r(61561),
                b = r(85686),
                y = r(85743),
                A = r(50209),
                k = r(27954),
                g = r(79856),
                S = r.n(g),
                L = r(77698),
                O = r(18284),
                j = r(97522),
                I = r(6349),
                D = r(66738),
                R = r(71705),
                w = r(34159),
                B = r(64720),
                P = r(71996),
                M = r(6304),
                H = r(70418),
                W = r.n(H);
            let U = (0, o.PA)((e) => {
                    var t;
                    let { className: r, album: o, likeIconSize: l = 'xxs' } = e,
                        { user: c, trailer: _ } = (0, k.g)(),
                        u = (0, v.P)(),
                        { sendLikeSearchFeedback: m } = (0, y.z)(),
                        p = (0, R.K)(o),
                        [h, C] = (0, n.useState)(!1),
                        x = (0, d.c)(async () => {
                            (h || o.isLiked || (C(!0), null == m || m()), await p());
                        }),
                        f = (0, w.F)(),
                        E = (0, d.c)((e) => {
                            if ((e.stopPropagation(), u())) return void e.preventDefault();
                            (_.openAlbumTrailer(o.id), f(s.DomainObjectType.Album, String(o.id)));
                        });
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(W().root, W().controls, r, { [W().controls_disabled]: !o.isAvailable }),
                        children: [
                            o.isAvailable &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(M.WithOffline, {
                                            fallback: (0, i.jsx)(B.c, {
                                                size: 'xs',
                                                iconSize: l,
                                                className: (0, a.$)(W().item, W().likeIcon),
                                                isLiked: o.isLiked,
                                                onClick: x,
                                                disabled: !c.isAuthorized,
                                            }),
                                        }),
                                        (null == (t = o.trailer) ? void 0 : t.isAvailable) &&
                                            (0, i.jsx)(M.WithOffline, {
                                                fallback: (0, i.jsx)(P.k, {
                                                    className: (0, a.$)(W().item, W().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: E,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, i.jsx)('div', {
                                className: (0, a.$)(W().item, W().item_buttonArrow),
                                children: (0, i.jsx)(D.I, { className: S().buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                z = (0, o.PA)((e) => {
                    let { className: t, album: r, pageId: o, coverClassName: g, playButtonIconSize: D, likeIconSize: R, shouldShowReleaseYear: w, description: B } = e,
                        P = (0, h.r)(r.type),
                        { ref: M, intersectionPropertyId: H } = (0, E.n)(),
                        { from: W } = (0, N.f)({ pageId: o }),
                        [z, F] = (0, n.useState)(!1),
                        $ = (0, f.b)(),
                        Y = (0, b.Z)(r.url),
                        K = (0, v.P)(),
                        { sendNavigateSearchFeedback: X, sendPlaySearchFeedback: V } = (0, y.z)(),
                        Z = (0, x.N)(),
                        {
                            paywall: { modal: G },
                        } = (0, k.g)(),
                        Q = (0, T.N)(),
                        {
                            isPlaying: q,
                            isCurrent: J,
                            togglePlay: ee,
                        } = (0, A.D)({ playContextParams: { contextData: { type: c.K.Album, meta: { id: r.id }, from: W }, loadContextMeta: !0 } }),
                        et = (0, p.c)({ album: r, callback: Y }),
                        er = (0, p.c)({ album: r, callback: ee }),
                        ei = (0, d.c)((e) => {
                            (null == X || X(), Z({ to: s.AppScreen.AlbumScreen }), et(e));
                        }),
                        ea = (0, d.c)(() => {
                            if (!K()) {
                                if (Q) return void G.open();
                                (z || q || (F(!0), null == V || V()), er(), $(!q));
                            }
                        }),
                        eo = (0, d.c)((e) => {
                            ((0, u.P)(e, S().ripple), ei(e));
                        }),
                        en = (0, d.c)((e) => {
                            (e.stopPropagation(), ei(e));
                        }),
                        es = (0, n.useCallback)(
                            (e) =>
                                (0, i.jsx)(I.q, {
                                    isAvailable: r.isAvailable,
                                    isDisliked: !1,
                                    coverUri: r.coverUri,
                                    title: r.title,
                                    className: (0, a.$)(S().playButtonCell, g),
                                    alt: ''.concat(P, ' ').concat(r.title),
                                    radius: 'xs',
                                    ...e,
                                }),
                            [r.coverUri, r.isAvailable, r.title, g, P],
                        ),
                        el = null == es ? void 0 : es({ onPlayButtonClick: ea, isPlaying: q, isCurrent: J, playButtonIconSize: D }),
                        ec = (0, n.useMemo)(
                            () =>
                                r.url && r.isAvailable
                                    ? (0, i.jsx)(j.N, { className: (0, a.$)(S().text, S().titleLink), href: r.url, onClick: en, children: r.title })
                                    : (0, i.jsx)(m.HL, { className: (0, a.$)(S().text, S().titleText), size: 'm', variant: 'div', type: 'text', children: r.title }),
                            [r.isAvailable, r.title, r.url, en],
                        ),
                        ed = (0, n.useCallback)(
                            (e, t) => {
                                var a;
                                return (null == (a = r.artists) ? void 0 : a.length)
                                    ? (0, i.jsx)(C.i, { linkClassName: e, captionClassName: t, artists: r.artists, lineClamp: 1, withLink: r.isAvailable })
                                    : null;
                            },
                            [r.artists, r.isAvailable],
                        ),
                        e_ = (0, _.L)(() => [r.artistNames, r.title, r.version].filter(Boolean).join(' '));
                    return (0, i.jsxs)(O.C, {
                        ref: M,
                        'data-intersection-property-id': H,
                        className: (0, a.$)(S().root, { [S().root_disabled]: !r.isAvailable }, t),
                        'aria-label': e_,
                        onClick: eo,
                        'data-test-id': l.Kq.album.HORIZONTAL_ALBUM_CARD,
                        children: [
                            el,
                            (0, i.jsx)(L.r, {
                                isDisabled: !r.isAvailable,
                                version: r.version,
                                title: ec,
                                artistsComponent: ed,
                                getDescriptionTexts: r.getDescriptionTexts,
                                explicitMarkVariant: r.explicitDisclaimer,
                                likesCount: r.isNonMusic ? r.actualLikesCount : void 0,
                                isLiked: r.isNonMusic ? r.isLiked : void 0,
                                releaseYear: r.isNonMusic && w ? r.year : void 0,
                                description: B,
                            }),
                            (0, i.jsx)(U, { className: S().controlsBar, album: r, likeIconSize: R }),
                        ],
                    });
                });
        },
        28777: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => f, D: () => v });
            var i = r(25839),
                a = r(82298),
                o = r(26508),
                n = r(74631),
                s = r(89288),
                l = r(36619),
                c = r(61493),
                d = r(5365),
                _ = r(26742),
                u = r(95314),
                m = r(18412),
                p = r(80986),
                h = r(21978),
                C = r.n(h),
                v = (function (e) {
                    return ((e.ONE = 'one'), (e.TWO = 'two'), e);
                })({});
            let x = (e) => {
                    let {
                            className: t,
                            forwardRef: r,
                            isShimmerVisible: h,
                            isColumnsShimmerVisible: v,
                            isHeaderWithoutControls: x,
                            maxColumnsCount: f,
                            carouselItemClassName: E,
                            carouselClassName: N,
                            children: T,
                            itemsCountPerColumn: b,
                            shimmer: y,
                            viewAllActionLink: A,
                            blockHeaderClassName: k,
                            additionalControl: g,
                            blockHeaderDescription: S,
                            blockHeaderTitle: L,
                            blockHeaderCoverUrl: O,
                            withBlockHeaderDescription: j,
                            withBlockHeaderCover: I,
                            blockHeaderHeadingVariant: D,
                            isShimmerActive: R,
                            shouldResetCarouselScroll: w,
                            beforeCarousel: B,
                            ...P
                        } = e,
                        { objectsCount: M } = (0, _.N)(),
                        [H, W] = (0, n.useState)(),
                        U = (0, n.useId)(),
                        z = (0, n.useRef)(null),
                        F = 'two' === f,
                        $ = 'string' == typeof A ? String(A) : void 0,
                        Y = null != v ? v : h,
                        K = (0, n.useCallback)(
                            (e) => {
                                let t = (0, o.A)(e, b).slice(0, F ? 2 : 1);
                                return (
                                    1 === t.length ? W('one') : W('two'),
                                    t.map((e, t) => (0, i.jsx)('div', { className: C().column, 'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_COLUMN, children: e }, t))
                                );
                            },
                            [b, F],
                        ),
                        X = (0, n.useMemo)(() => {
                            if (Y) return K(Array.from({ length: 2 * b }, (e, t) => (0, n.cloneElement)(y, { key: t })));
                            return K(T);
                        }, [T, K, Y, b, y]),
                        V = (0, n.useMemo)(
                            () =>
                                x
                                    ? null
                                    : (0, i.jsxs)('div', {
                                          className: C().controlsContainer,
                                          children: [g, (0, i.jsx)(p.X, { carouselRef: z, className: C().controls, backwardControlClassName: C().backwardControl })],
                                      }),
                            [g, x],
                        );
                    return (
                        (0, n.useEffect)(() => {
                            z.current && w && z.current.scrollTo(0, 0);
                        }, [w]),
                        (0, i.jsxs)('section', {
                            ref: r,
                            className: (0, a.$)(C().root, t),
                            ...(0, s.OZ)(P),
                            children: [
                                (0, i.jsx)(u.B, {
                                    objectType: l.DomainObjectType.Shortcut,
                                    objectId: $,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: null != M ? M : 0,
                                    children: (0, i.jsx)(m.T, {
                                        coverUrl: O,
                                        title: L,
                                        description: S,
                                        className: k,
                                        labeledForId: U,
                                        viewAllActionLink: A,
                                        controls: V,
                                        isShimmerVisible: h,
                                        isShimmerActive: R,
                                        withDescription: j,
                                        withCover: I,
                                        headingVariant: D,
                                    }),
                                }),
                                B,
                                (0, i.jsx)(d.F, {
                                    itemClassName: (0, a.$)(C().item, C()['item_columns_'.concat(Y && F ? 'two' : H)], E),
                                    className: N,
                                    ref: z,
                                    'aria-labelledby': U,
                                    'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_CAROUSEL,
                                    children: X,
                                }),
                            ],
                        })
                    );
                },
                f = (0, n.forwardRef)((e, t) => (0, i.jsx)(x, { forwardRef: t, ...e }));
        },
        30871: (e, t, r) => {
            'use strict';
            r.d(t, { WithAuth: () => h });
            var i = r(25839),
                a = r(88204),
                o = r(84059),
                n = r(82298),
                s = r(8487),
                l = r(4254),
                c = r(16978),
                d = r(148),
                _ = r.n(d);
            let u = (0, a.PA)(() =>
                (0, i.jsxs)('div', {
                    className: _().root,
                    children: [
                        (0, i.jsx)(l.DZ, {
                            className: (0, n.$)(_().title, _().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(s.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(l.HL, {
                            className: (0, n.$)(_().text, _().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(s.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: _().button }),
                    ],
                }),
            );
            var m = r(53712),
                p = r(27954);
            let h = (0, a.PA)((e) => {
                let { children: t, withRedirectToMainPage: r } = e,
                    { user: a } = (0, p.g)();
                return a.isAuthorized ? t : (r && (0, o.redirect)(m.Z.main.href), (0, i.jsx)(u, {}));
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
        51271: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => a });
            var i = r(22939);
            let a = (e, t, r) => {
                let a = { type: i.K.Various, meta: { id: e.id }, from: r || '' };
                return (
                    void 0 !== e.albumId && (a = { type: i.K.Album, meta: { id: e.albumId }, from: r || '' }),
                    { contextData: a, queueParams: { entityId: e.id, index: t }, loadContextMeta: !0 }
                );
            };
        },
        57024: (e, t, r) => {
            'use strict';
            r.d(t, { C8: () => o, UC: () => n, dM: () => s, uV: () => l });
            var i = r(93690),
                a = r(58848);
            let o = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                s = (e) => {
                    if (!(e instanceof i.m5) || !(0, a.N)(e.cause)) return 'unexpected';
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
        58848: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        61777: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => x });
            var i = r(74631),
                a = r(67379),
                o = r(17850),
                n = r(59450),
                s = r(49656),
                l = r(84e3),
                c = r(58069),
                d = r(20258),
                _ = r(26742),
                u = r(25195),
                m = r(37314),
                p = r(97952),
                h = r(10764),
                C = r(72594);
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
                    let e = (0, i.useRef)(!1),
                        t = (0, n.st)(),
                        r = (0, l.U)(),
                        { hash: x } = (0, n.gf)(),
                        { pageId: f } = (0, p.$)(),
                        { tabId: E, tabPos: N, isTabSelectedByDefault: T } = (0, C.R)(),
                        { offsetBlockPosY: b } = (0, u.u)(),
                        { blockId: y, blockType: A, blockPosX: k, blockPosY: g, mainObjectType: S, mainObjectId: L, objectsCount: O } = (0, _.N)(),
                        { filterKey: j, filterValue: I, filterPos: D } = (0, m.G)(),
                        { skeleton: R } = (0, h.b)(),
                        w = (0, s.L)(() => (void 0 !== b && void 0 !== g ? b + g : g));
                    return (0, i.useCallback)(() => {
                        if (!t || !f || !d.xK.includes(f) || !v.includes(f) || e.current) return;
                        let i = { hash: x, pageId: c.F[f], entityType: A, entityId: y, entityPosX: k, entityPosY: w, objectsCount: O };
                        (void 0 !== j && ((i.filterKey = j), (i.filterValue = I), (i.filterPos = D)),
                            d.qG.includes(f) && ((i.tabId = E), (i.tabPos = N), (i.isTabSelectedByDefault = T)),
                            R && (i.skeletonId = R),
                            L && S && ((i.mainObjectType = S), (i.mainObjectId = L)));
                        let n = (0, a.F)({ params: i, logger: r, context: 'useSendEventOnBlockLoaded' });
                        n && ((0, o.uY)(t.evgenInstance, n), (e.current = !0));
                    }, [t, f, x, A, y, k, w, j, I, D, O, R, L, S, r, E, N, T]);
                };
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
        70418: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ControlsBar_root__hZQ_Z',
                item: 'ControlsBar_item__Y7iTC',
                item_buttonArrow: 'ControlsBar_item_buttonArrow__y_Ku0',
                controls: 'ControlsBar_controls__yRO8t',
                trailerIcon: 'ControlsBar_trailerIcon__areYT',
                controls_disabled: 'ControlsBar_controls_disabled___S7Rg',
                likeIcon: 'ControlsBar_likeIcon__eJvkI',
            };
        },
        72968: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'EntityMeta_root__Zn4Th',
                root_disabled: 'EntityMeta_root_disabled__u3DaR',
                albumLink: 'EntityMeta_albumLink__vxRG7',
                artistCaption: 'EntityMeta_artistCaption__3JqiO',
                artistLink: 'EntityMeta_artistLink__rMKgI',
                description: 'EntityMeta_description__cSa2I',
                explicitMark: 'EntityMeta_explicitMark__wOyns',
                likesCount: 'EntityMeta_likesCount__cw2GN',
                subtitle: 'EntityMeta_subtitle__yE1NK',
                title: 'EntityMeta_title__6_ChR',
                titleContainer: 'EntityMeta_titleContainer__WMe1r',
                version: 'EntityMeta_version__7Z948',
                root_disliked: 'EntityMeta_root_disliked__PhzHW',
                title_withVersion: 'EntityMeta_title_withVersion__rbXWv',
                text: 'EntityMeta_text___lB4k',
                icon: 'EntityMeta_icon__tTxs3',
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
        76481: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => a });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: a = {}, ...o } = t,
                        n = e || 'Internal error';
                    (super(n, o), (this.message = n), (this.code = r), (this.data = a), (this.stack = Error(n).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class a extends i {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...r } = {}) {
                    (super(e, { code: t, ...r }), Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        77698: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => m });
            var i = r(25839),
                a = r(82298),
                o = r(39004),
                n = r(61493),
                s = r(49656),
                l = r(66738),
                c = r(4254),
                d = r(62926),
                _ = r(72968),
                u = r.n(_);
            let m = (e) => {
                let {
                        isDisliked: t,
                        isDisabled: r,
                        description: _,
                        getDescriptionTexts: m,
                        explicitMarkVariant: p,
                        className: h,
                        version: C,
                        title: v,
                        artistsComponent: x,
                        likesCount: f,
                        isLiked: E,
                        releaseYear: N,
                        titleLineClamp: T = 1,
                    } = e,
                    { formatMessage: b, formatNumber: y } = (0, o.A)(),
                    A = (0, s.L)(() => {
                        let e = null == x ? void 0 : x((0, a.$)(u().text, u().artistLink), (0, a.$)(u().text, u().artistCaption));
                        if (!e && !f) return;
                        let t = (0, i.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, i.jsxs)('div', {
                            className: u().subtitle,
                            'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof f &&
                                    f > 0 &&
                                    (0, i.jsxs)('div', {
                                        className: u().likesCount,
                                        'aria-label': b({ id: 'entity-names.likes-counter' }, { counter: f }),
                                        'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, i.jsx)(l.I, {
                                                className: u().icon,
                                                variant: E ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, i.jsx)(c.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: y(f),
                                            }),
                                        ],
                                    }),
                                !!f && e && t,
                                e,
                                !!N && e && t,
                                (0, i.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', children: N }),
                            ],
                        });
                    });
                return (0, i.jsxs)('div', {
                    className: (0, a.$)(u().root, { [u().root_disabled]: r, [u().root_disliked]: t }, h),
                    'data-test-id': n.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, i.jsxs)('div', {
                            className: u().titleContainer,
                            children: [
                                (0, i.jsxs)(c.HL, {
                                    className: (0, a.$)(u().text, u().title, { [u().title_withVersion]: C }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: T,
                                    type: 'text',
                                    'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        v,
                                        C &&
                                            (0, i.jsx)(c.HL, {
                                                className: (0, a.$)(u().text, u().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(C),
                                            }),
                                    ],
                                }),
                                p && (0, i.jsx)(d.N, { className: u().explicitMark, getDescriptionTexts: m, variant: p }),
                            ],
                        }),
                        _ &&
                            (0, i.jsx)(c.HL, {
                                className: (0, a.$)(u().text, u().description),
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_DESCRIPTION,
                                children: _,
                            }),
                        A,
                    ],
                });
            };
        },
        77920: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        78299: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => b });
            var i = r(25839),
                a = r(82298),
                o = r(88204),
                n = r(74631),
                s = r(39004),
                l = r(8487);
            r(93588);
            var c = r(4071),
                d = r(66738),
                _ = r(4254),
                u = r(67379),
                m = r(36619),
                p = r(76945),
                h = r(59450),
                C = r(84e3),
                v = r(97952),
                x = r(89192),
                f = r(53712),
                E = r(15270),
                N = r(68854),
                T = r.n(N);
            let b = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { formatMessage: o } = (0, s.A)(),
                    N = o({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: r } = (0, h.gf)(),
                        { pageId: i } = (0, v.$)(),
                        a = (0, C.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !r || !i) return;
                        let o = (0, u.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: r,
                                pageId: i,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        o && (0, p.z5)(t.evgenInstance, o);
                    }, [t, e, r, i, a]);
                })(N);
                let { sendRefreshEvent: b } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: r } = (0, v.$)(),
                            i = (0, C.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let a = (0, u.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: r,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, p.bv)(e.evgenInstance, a);
                            }, [e, t, r, i]),
                        };
                    })(),
                    y = (0, n.useCallback)(() => {
                        (b(), (window.location.href = f.Z.main.href));
                    }, [b]),
                    { contentRef: A } = (0, x.g)();
                return (0, i.jsxs)('div', {
                    className: (0, a.$)(T().root, t),
                    children: [
                        r &&
                            (0, i.jsx)(E.L, { withBackwardFallback: '/', className: (0, a.$)(T().navigation, { [T().navigation_desktop]: !A }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, a.$)(T().content, { [T().content_shrink]: !r }),
                            children: [
                                (0, i.jsx)(d.I, { className: T().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(_.DZ, { className: (0, a.$)(T().title, T().important), variant: 'h3', size: 'xs', children: N }),
                                (0, i.jsxs)(_.HL, {
                                    className: (0, a.$)(T().text, T().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(c.$, {
                                    onClick: y,
                                    className: T().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(_.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        79856: (e) => {
            e.exports = {
                buttonArrow: 'EntityCard_buttonArrow__ussa7',
                titleLink: 'EntityCard_titleLink__3ucPa',
                titleText: 'EntityCard_titleText___EU9t',
                root: 'EntityCard_root__HNsWx',
                root_disabled: 'EntityCard_root_disabled__qdBaH',
                ripple: 'EntityCard_ripple__iMHNo',
                playButtonCell: 'EntityCard_playButtonCell__AYoR5',
                controlsBarCell: 'EntityCard_controlsBarCell__GpbEX',
                text: 'EntityCard_text__hChwj',
            };
        },
        80986: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => u });
            var i = r(25839),
                a = r(82298),
                o = r(74631),
                n = r(61493),
                s = r(9911),
                l = r(4071),
                c = r(66738),
                d = r(37922),
                _ = r.n(d);
            let u = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: r,
                        forwardControlClassName: d,
                        className: u,
                        withSecondaryColor: m,
                        buttonSize: p = 'xxxs',
                        buttonVariant: h = 'outline',
                    } = e,
                    { swipeBackward: C, swipeForward: v, shouldBackwardButtonBeDisabled: x, shouldForwardButtonBeDisabled: f, shouldHideControls: E } = (0, s.Y)(t),
                    N = (0, o.useCallback)(
                        (e) => {
                            (C(), e.stopPropagation());
                        },
                        [C],
                    ),
                    T = (0, o.useCallback)(
                        (e) => {
                            (v(), e.stopPropagation());
                        },
                        [v],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, a.$)(_().root, u),
                    'data-test-id': n.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, i.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(_().control, r, { [_().control_hidden]: E, [_().control_withSecondaryColor]: m }),
                            onClick: N,
                            size: p,
                            radius: 'round',
                            variant: h,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: x,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, i.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(_().control, d, { [_().control_hidden]: E, [_().control_withSecondaryColor]: m }),
                            onClick: T,
                            size: p,
                            radius: 'round',
                            variant: h,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: f,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        87138: (e, t, r) => {
            'use strict';
            r.d(t, { XU: () => u, YK: () => _ });
            var i,
                a,
                o = r(23198),
                n = r(74631),
                s = r(39004);
            (!(function (e) {
                ((e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName'));
            })(i || (i = {})),
                (function (e) {
                    ((e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts'));
                })(a || (a = {})));
            var l = function (e) {
                var t = (0, s.A)(),
                    r = e.value,
                    i = e.children,
                    a = (0, o.__rest)(e, ['value', 'children']);
                return i(t.formatNumberToParts(r, a));
            };
            function c(e) {
                var t = function (t) {
                    var r = (0, s.A)(),
                        i = t.value,
                        a = t.children,
                        n = (0, o.__rest)(t, ['value', 'children']),
                        l = 'string' == typeof i ? new Date(i || 0) : i;
                    return a('formatDate' === e ? r.formatDateToParts(l, n) : r.formatTimeToParts(l, n));
                };
                return ((t.displayName = a[e]), t);
            }
            function d(e) {
                var t = function (t) {
                    var r = (0, s.A)(),
                        i = t.value,
                        a = t.children,
                        l = (0, o.__rest)(t, ['value', 'children']),
                        c = r[e](i, l);
                    if ('function' == typeof a) return a(c);
                    var d = r.textComponent || n.Fragment;
                    return n.createElement(d, null, c);
                };
                return ((t.displayName = i[e]), t);
            }
            function _(e) {
                return e;
            }
            ((l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts'));
            var u = d('formatDate');
            (d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), c('formatDate'), c('formatTime'));
        },
        91626: (e, t, r) => {
            'use strict';
            (r.d(t, { G: () => a }), r(77920));
            var i = r(76481);
            class a extends i.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        93690: (e, t, r) => {
            'use strict';
            r.d(t, { GX: () => o.G, X1: () => i.X, m5: () => a.m });
            var i = r(77920),
                a = r(76481),
                o = r(91626);
            r(95919);
        },
        95314: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => n });
            var i = r(25839),
                a = r(74631),
                o = r(66192);
            let n = (e) => {
                let { objectId: t, objectPosX: r, objectPosY: n, objectPos: s, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: _, children: u } = e,
                    m = (0, a.useMemo)(
                        () => ({ objectId: t, objectPosX: r, objectPosY: n, objectPos: s, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: _ }),
                        [t, r, n, s, l, c, d, _],
                    );
                return (0, i.jsx)(o.l.Provider, { value: m, children: u });
            };
        },
        95919: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
        },
        98485: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => _ });
            var i = r(25839),
                a = r(88204),
                o = r(23976),
                n = r(3718),
                s = r(97805),
                l = r(6973),
                c = r.n(l);
            let d = () => Array.from({ length: 5 }, (e) => (0, i.jsx)(s.D, { variant: n.X.PLAYLIST, className: c().track, isActive: !0 }, e)),
                _ = (0, a.PA)((e) => {
                    let { className: t, withHeader: r } = e;
                    return (0, i.jsxs)('div', {
                        className: t,
                        children: [r && (0, i.jsx)(o.W, { radius: 'l', width: 100, height: 24, className: c().title, isActive: !0 }), (0, i.jsx)(d, {})],
                    });
                });
        },
        99057: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => E });
            var i = r(25839),
                a = r(82298),
                o = r(88204),
                n = r(74631),
                s = r(61493),
                l = r(49656),
                c = r(28045),
                d = r(51549),
                _ = r(53712),
                u = r(27954),
                m = r(3718),
                p = r(28777),
                h = r(97805),
                C = r(51271),
                v = r(98485),
                x = r(20749),
                f = r.n(x);
            let E = (0, o.PA)((e) => {
                var t;
                let { className: r, itemsCount: o, headerClassName: x, carouselClassName: E } = e,
                    {
                        collection: {
                            shelf: { liked: N },
                        },
                    } = (0, u.g)(),
                    T = (0, l.L)(() => {
                        var e;
                        return null == (e = N.entities)
                            ? void 0
                            : e.map((e, t) => {
                                  if (e.album) return (0, i.jsx)(c.M, { album: e.album }, e.album.getKey(t));
                                  let r = (0, C.q)(e.track, t, N.typeForFrom);
                                  return (0, i.jsx)(d.K, { track: e.track, playContextParams: r, withPodcastName: !0 }, e.track.getKey(t));
                              });
                    });
                return (N.isNeededToLoad && (0, n.use)(N.getData()), !N.isLoading && (null == (t = N.entities) ? void 0 : t.length))
                    ? (0, i.jsx)(p.$, {
                          shimmer: (0, i.jsx)(h.D, { variant: m.X.PLAYLIST, isActive: !0 }),
                          isShimmerActive: !0,
                          isShimmerVisible: N.isLoading,
                          className: r,
                          carouselItemClassName: (0, a.$)(f().shelfColumn, f().important),
                          blockHeaderClassName: (0, a.$)(f().header, x),
                          carouselClassName: E,
                          blockHeaderTitle: N.title,
                          itemsCountPerColumn: null != o ? o : 0,
                          maxColumnsCount: p.D.ONE,
                          viewAllActionLink: _.Z.collectionShelfLiked.href,
                          'data-test-id': s.Xk.collection.COLLECTION_SHELF_PAGE_SHELF_LIKED_BLOCK,
                          children: T,
                      })
                    : (0, i.jsx)(v.E, { className: r, withHeader: !0 });
            });
        },
    },
]);
