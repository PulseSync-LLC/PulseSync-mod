(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7722],
    {
        400: (e) => {
            e.exports = {
                root: 'Footer_root__ugyur',
                root_withOffsetForDeeplink: 'Footer_root_withOffsetForDeeplink__qcs6U',
                important: 'Footer_important__mCXZp',
                links: 'Footer_links__3kOY7',
                list: 'Footer_list__0sCXQ',
                copyrights: 'Footer_copyrights__IsnbJ',
                link: 'Footer_link__av50q',
                copyrightLink: 'Footer_copyrightLink__6NOkg',
                yandexMusicLink: 'Footer_yandexMusicLink__k7ILf',
                explicitText: 'Footer_explicitText__Px3wr',
                text: 'Footer_text__lMPwl',
                empty: 'Footer_empty__RR_zf',
            };
        },
        1797: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => r });
            var i = a(40207);
            let r = (e) => {
                let { artist: t, callback: a, shouldHistoryBack: r } = e;
                return (0, i.l)({ entity: t, callback: a, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        3718: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => i });
            var i = (function (e) {
                return ((e.PLAYLIST = 'playlist'), (e.ALBUM = 'album'), e);
            })({});
        },
        5365: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => c });
            var i,
                r = a(74631),
                n = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (r && (r += ' '), (r += i));
                                            else for (a in t) t[a] && (r && (r += ' '), (r += a));
                                        return r;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => r }));
                        let r = i;
                    },
                    2876: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var r = null;
                            if ((void 0 !== i && (r = '' + i), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var n in ((i = {}), t)) 'key' !== n && (i[n] = t[n]);
                            else i = t;
                            return { $$typeof: a, type: e, key: r, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    4014: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0));
                        let r = a(4377),
                            n = a(5881),
                            s = a(810),
                            l = i(a(2876)),
                            o = (e) => {
                                let { className: t, itemClassName: a, children: i, forwardRef: o, role: c, ...d } = e;
                                return (0, r.jsx)('ol', {
                                    ref: o,
                                    className: (0, n.clsx)(l.default.root, t),
                                    ...d,
                                    role: null != c ? c : 'list',
                                    children: s.Children.map(i, (e) => (0, r.jsx)('li', { className: (0, n.clsx)(l.default.item, a), children: e })),
                                });
                            };
                        t.Carousel = (0, s.forwardRef)((e, t) => (0, r.jsx)(o, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(r, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (n[e].call(a.exports, a, a.exports, l), a.exports);
            }
            ((l.d = (e, t) => {
                for (var a in t) l.o(t, a) && !l.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, 'X', { value: !0 }), (o.l = void 0));
                var e = l(4014);
                Object.defineProperty(o, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var c = o.l;
            o.X;
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
        9911: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => d });
            var i,
                r = a(6274),
                n = a(74631),
                s = {
                    352: (e) => {
                        e.exports = r;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(n, 2));
                    },
                },
                l = {};
            function o(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var a = (l[e] = { exports: {} });
                return (s[e](a, a.exports, o), a.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = o(810),
                    t = o(352);
                c.l = (a) => {
                    let [i, r] = (0, e.useState)(!0),
                        [n, s] = (0, e.useState)(!0),
                        l = () => {
                            let e = null == a ? void 0 : a.current;
                            e && (r(0 === e.scrollLeft), s(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        l();
                    }, [a, l]),
                        (0, e.useEffect)(() => {
                            let e = null == a ? void 0 : a.current;
                            return (
                                null == e || e.addEventListener('scroll', l),
                                window.addEventListener('resize', l),
                                () => {
                                    (null == e || e.removeEventListener('scroll', l), window.removeEventListener('resize', l));
                                }
                            );
                        }, [a, l]));
                    let o = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    a && a.current && (a.current.scrollLeft += a.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [a],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        a && a.current && (a.current.scrollLeft -= a.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [a],
                        ),
                        swipeForward: o,
                        shouldBackwardButtonBeDisabled: i,
                        shouldForwardButtonBeDisabled: n,
                        shouldHideControls: i && n,
                    };
                };
            })(),
                c.X);
            var d = c.l;
        },
        10959: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => r });
            var i = a(44806);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: a, getExplicitContent: r, userRegion: n } = e;
                return 'ru' === n && t(i.z.WebNextFooterDisclaimer, 'on') ? a() : r();
            };
        },
        12234: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => r });
            var i = a(71872);
            function r(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(i.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        12526: (e, t, a) => {
            var i = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function r(e) {
                if (!a.o(i, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = i[e],
                    r = t[0];
                return a.e(t[1]).then(() => a.t(r, 19));
            }
            ((r.keys = () => Object.keys(i)), (r.id = 12526), (e.exports = r));
        },
        14514: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => i });
            let i = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        17951: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => r });
            var i = a(61399);
            let r = (e) => {
                var t, a;
                return e
                    ? {
                          id: Number(e.id),
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, i.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (a = e.isAvailable) || a, disclaimers: (0, i.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        18412: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => f });
            var i = a(25839),
                r = a(82298),
                n = a(74631),
                s = a(36619),
                l = a(61493),
                o = a(66738),
                c = a(23818),
                d = a(86869),
                u = a(23976),
                m = a(4254),
                _ = a(61777),
                h = a(29481),
                p = a(97522),
                g = a(73208),
                x = a.n(g);
            let v = (e) => {
                    let {
                            className: t,
                            coverUrl: a,
                            labeledForId: g,
                            subTitle: v,
                            title: f,
                            description: C,
                            viewAllActionLink: k,
                            controls: A,
                            titleSize: b = 'm',
                            coverBackgroundColor: y,
                            coverRadius: N = 's',
                            titleClassName: L,
                            titleLineClamp: T,
                            fallbackIconVariant: E,
                            available: j = !0,
                            onViewAllAction: S,
                            titleChildren: I,
                            children: O,
                            headingRef: R,
                            coverContainerClassName: w,
                            headingVariant: P = 'h3',
                            withDescriptionWidthLimit: D = !0,
                            isShimmerVisible: M,
                            isShimmerActive: B,
                            withCover: H,
                            withDescription: F,
                            forwardRef: U,
                            shimmerCoverClassName: W,
                            shouldSendAnalyticsOnLoaded: z,
                            ...$
                        } = e,
                        K = (0, _.f)(),
                        Y = (0, n.useRef)(null),
                        X = a || H,
                        G = C || F,
                        V = (0, n.useCallback)(() => {
                            Y.current && 'focus' in Y.current && Y.current.focus();
                        }, []),
                        Z = (0, h.N)(),
                        q = (0, n.useCallback)(() => {
                            S ? S() : Z({ to: s.AppScreen.Link });
                        }, [Z, S]);
                    (0, n.useEffect)(() => {
                        z && K();
                    }, [z, K]);
                    let Q = (0, n.useMemo)(
                            () =>
                                f && k && j
                                    ? (0, i.jsxs)(p.N, {
                                          className: x().title,
                                          containerClassName: x().linkContainer,
                                          textClassName: x().linkText,
                                          icon: (0, i.jsx)(o.I, { className: x().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: k,
                                          onClick: q,
                                          'data-test-id': l.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, i.jsx)(m.DZ, {
                                                  id: g,
                                                  className: (0, r.$)(x().heading, L),
                                                  variant: P,
                                                  size: b,
                                                  weight: 'bold',
                                                  lineClamp: T,
                                                  ref: R,
                                                  children: f,
                                              }),
                                              I,
                                          ],
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: x().title,
                                          children: [
                                              (0, i.jsx)(m.DZ, {
                                                  id: g,
                                                  className: (0, r.$)(x().heading, L, { [x().heading_notAvailable]: !j }),
                                                  variant: P,
                                                  size: b,
                                                  weight: 'bold',
                                                  lineClamp: T,
                                                  ref: R,
                                                  'data-test-id': l.S7.BLOCK_HEADER_TITLE,
                                                  children: f,
                                              }),
                                              I,
                                          ],
                                      }),
                            [j, q, R, P, g, f, L, T, b, k, I],
                        ),
                        J = (0, n.useMemo)(() => (F && M ? (0, i.jsx)(u.W, { isActive: B, className: x().shimmerDescription }) : C), [F, M, C, B]),
                        ee = (0, n.useMemo)(
                            () =>
                                H && M
                                    ? (0, i.jsx)(u.W, { isActive: B, className: (0, r.$)(x().shimmerCover, W), radius: 's' })
                                    : (0, i.jsx)(c._V, {
                                          src: a,
                                          fallbackIconVariant: E,
                                          style: { backgroundColor: y },
                                          className: x().cover,
                                          ref: Y,
                                          onClick: V,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': l.S7.BLOCK_HEADER_COVER,
                                      }),
                            [y, a, E, V, B, M, W, H],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(x().root, t),
                        ref: U,
                        ...$,
                        'data-test-id': l.S7.BLOCK_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: x().start,
                                children: [
                                    X && (0, i.jsx)(d.t, { radius: N, className: (0, r.$)(x().coverContainer, w), children: ee }),
                                    (0, i.jsxs)('div', {
                                        className: x().textContainer,
                                        children: [
                                            v,
                                            Q,
                                            G &&
                                                (0, i.jsx)(m.HL, {
                                                    id: ''.concat(g, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: D ? 2 : void 0,
                                                    className: (0, r.$)(x().description, { [x().description_widthLimit]: D }),
                                                    'data-test-id': l.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            A || O,
                        ],
                    });
                },
                f = (0, n.forwardRef)((e, t) => (0, i.jsx)(v, { forwardRef: t, ...e }));
        },
        19e3: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => s });
            var i = a(25839),
                r = a(74631),
                n = a(10407);
            let s = (e) => {
                let { sourceContextData: t, children: a } = e,
                    s = (0, r.useMemo)(() => ({ sourceContextData: t }), [t]);
                return (0, i.jsx)(n.l.Provider, { value: s, children: a });
            };
        },
        19386: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => s });
            var i = a(74631),
                r = a(43354),
                n = a(25895);
            let s = (e) => {
                var t;
                let { setDeeplink: a } = null != (t = (0, r.P)()) ? t : {};
                (0, i.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, n.u)('/artist/:artistId', { params: { artistId: e } });
                        null == a || a(t);
                    }
                    return () => {
                        null == a || a(null);
                    };
                }, [e, a]);
            };
        },
        21460: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { default: () => eP }));
            var i = a(25839),
                r = a(84059),
                n = a(88204),
                s = a(74631),
                l = a(61493),
                o = a(5867),
                c = a(78299),
                d = a(1407),
                u = a(1797),
                m = a(40110),
                _ = a(20258),
                h = a(57138),
                p = a(10322),
                g = a(89192),
                x = a(30716),
                v = a(27954),
                f = a(61342),
                C = a(6969),
                k = a(56412),
                A = a(17951),
                b = a(61732),
                y = a(12234),
                N = a(64595),
                L = a(26208),
                T = a(89221),
                E = a(27935),
                j = a(41016),
                S = a(80461),
                I = a(95445);
            async function O(e, t) {
                var a, i, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, T.W)(t.locale),
                    s = n({ id: 'metadata.artist-familiar-you-title' }, { artistName: e.artist.name }),
                    l = n({ id: 'metadata.artist-familiar-you-description' }, { artistName: e.artist.name });
                return {
                    title: s,
                    description: l,
                    openGraph: (0, E.i)({
                        ogTitle: s,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, L.v)({ tld: t.tld }),
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, j.H)({ cardType: S.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, N.k)(),
                    appLinks: (0, y.X)({
                        additional: { ...t, url: null != (i = t.url) ? i : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, I.S)('/artist/:artistId/familiar', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var R = (function (e) {
                    return ((e[(e.COLLECTION = 0)] = 'COLLECTION'), (e[(e.VIBE = 1)] = 'VIBE'), e);
                })({}),
                w = a(28604),
                P = a(19386),
                D = a(69695),
                M = a.n(D),
                B = a(82298),
                H = a(39004),
                F = a(57954),
                U = a(22939),
                W = a(42324),
                z = a(13833),
                $ = a(23976),
                K = a(76939),
                Y = a(82967),
                X = a(30290),
                G = a(19e3),
                V = a(3718),
                Z = a(18412),
                q = a(66284),
                Q = a(99401),
                J = a(26076),
                ee = a(89288),
                et = a(97805),
                ea = a(44222),
                ei = a.n(ea);
            let er = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
                    return Array.from({ length: a }, (a, r) => (0, i.jsx)(et.D, { variant: t, className: ei().shimmer, isActive: e }, r));
                },
                en = (e) => {
                    let { isShimmerVisible: t, isShimmerActive: a, variant: r, shimmersCount: n, className: s, children: l, ...o } = e;
                    return (0, i.jsx)('div', { className: (0, B.$)(ei().root, s), ...(0, ee.OZ)(o), children: t ? er(a, r, n) : l });
                };
            var es = a(70825);
            let el = (e) => {
                let { artistId: t, entityContextType: a } = e;
                return (0, s.useMemo)(() => (t ? (0, es.t)({ contextType: U.K.Artist, contextId: t, entityContextType: a }) : null), [t, a]);
            };
            var eo = a(8487),
                ec = a(4254),
                ed = a(21784),
                eu = a(27625),
                em = a(15270),
                e_ = a(79396),
                eh = a(9931),
                ep = a(71035),
                eg = a(30787),
                ex = a(83918);
            let ev = (e) => {
                let t = (0, ex.X)(),
                    a = (0, r.useSearchParams)();
                return (0, ep.c)((i) => {
                    var r;
                    let n = new URLSearchParams(a);
                    switch ((null == (r = e.onTabChange) || r.call(e, i), i)) {
                        case R.COLLECTION:
                            (n.set(C.K.TAB, f.J.COLLECTION), t((0, eg.C)(window.location.pathname, n)));
                            break;
                        case R.VIBE:
                            (n.set(C.K.TAB, f.J.VIBE), t((0, eg.C)(window.location.pathname, n)));
                    }
                });
            };
            var ef = a(29279),
                eC = a.n(ef);
            let ek = () =>
                    (0, i.jsxs)('div', {
                        className: eC().tabsShimmer,
                        children: [(0, i.jsx)($.W, { className: eC().tabShimmer }), (0, i.jsx)($.W, { className: eC().tabShimmer })],
                    }),
                eA = (0, n.PA)((e) => {
                    let { tabsState: t, tabElementId: a } = e,
                        { artist: r } = (0, v.g)(),
                        { formatMessage: n } = (0, H.A)(),
                        o = (0, ed.W)(),
                        { isScrolling: c } = (0, s.useContext)(eu.B),
                        d = ev(t);
                    return (0, i.jsxs)('header', {
                        className: eC().root,
                        'aria-hidden': c,
                        'data-test-id': l.Xk.artist.ARTIST_FAMILIAR_PAGE_STATIC_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: eC().container,
                                children: [
                                    o.canBack && (0, i.jsx)(em.L, { withForwardControl: !1, withBackwardControl: o.canBack, shouldFocusOnMount: !c }),
                                    (0, i.jsx)(ec.DZ, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        className: eC().title,
                                        'data-test-id': l.Xk.artist.ARTIST_FAMILIAR_PAGE_STATIC_HEADER_TITLE,
                                        children: (0, i.jsx)(eo.A, { id: 'page.familiar-you' }),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(eh.wI, {
                                isShimmerVisible: r.familiarSubpage.isLoading,
                                shimmer: (0, i.jsx)(ek, {}),
                                className: eC().tabs,
                                elementId: a,
                                ...t,
                                onTabChange: d,
                                children: [
                                    (0, i.jsx)(e_.o, {
                                        className: eC().tab,
                                        value: R.COLLECTION,
                                        title: n({ id: 'page.familiar-collection' }),
                                        'aria-hidden': c,
                                        tabIndex: c ? -1 : 0,
                                    }),
                                    (0, i.jsx)(e_.o, {
                                        className: eC().tab,
                                        value: R.VIBE,
                                        title: n({ id: 'page.familiar-vibe' }),
                                        'aria-hidden': c,
                                        tabIndex: c ? -1 : 0,
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var eb = a(32033),
                ey = a.n(eb);
            let eN = (0, n.PA)((e) => {
                    var t;
                    let { forwardRef: a, tabsState: r, tabElementId: n, artistId: c } = e,
                        { artist: d } = (0, v.g)(),
                        { formatMessage: u } = (0, H.A)(),
                        { from: m } = (0, X.f)(),
                        _ = el({ artistId: c, entityContextType: F.h.ARTIST_MY_COLLECTION }),
                        h = (0, s.useCallback)(
                            (e, t) => ({
                                contextData: {
                                    type: U.K.Various,
                                    meta: { id: String(c) },
                                    from: m,
                                    overrideAutoflowSeeds: ['artist:'.concat(c)],
                                    overrideContextType: W.b.Artist,
                                },
                                queueParams: { index: t },
                                loadContextMeta: !1,
                                entitiesData: d.familiarSubpage.collectionEntitiesData,
                            }),
                            [d.familiarSubpage.collectionEntitiesData, c, m],
                        ),
                        p = (0, s.useMemo)(() => {
                            var e;
                            return (0, i.jsx)(en, {
                                isShimmerVisible: d.familiarSubpage.isLoading,
                                isShimmerActive: !0,
                                variant: V.X.PLAYLIST,
                                shimmersCount: 10,
                                className: (0, B.$)(ey().block, ey().tracksBlock),
                                children:
                                    null == (e = d.familiarSubpage.collectionTracks)
                                        ? void 0
                                        : e.map((e, t) => (0, i.jsx)(Y.K, { track: e, playContextParams: h(e, t) }, e.id)),
                            });
                        }, [d.familiarSubpage.collectionTracks, d.familiarSubpage.isLoading, h]),
                        g = (0, s.useMemo)(() => {
                            if (d.familiarSubpage.shouldShowTitleBlocks)
                                return d.familiarSubpage.isLoading
                                    ? (0, i.jsx)('div', {
                                          className: (0, B.$)(ey().block, ey().blockHeader),
                                          children: (0, i.jsx)($.W, { isActive: d.familiarSubpage.isLoading, className: ey().shimmerTitle, radius: 'l' }),
                                      })
                                    : (0, i.jsx)(Z.T, { className: (0, B.$)(ey().block, ey().blockHeader), title: u({ id: 'entity-names.tracks' }) });
                        }, [d.familiarSubpage.isLoading, d.familiarSubpage.shouldShowTitleBlocks, u]),
                        x = (0, s.useMemo)(() => {
                            if (d.familiarSubpage.shouldShowTitleBlocks) return u({ id: 'entity-names.albums' });
                        }, [d.familiarSubpage.shouldShowTitleBlocks, u]);
                    return (0, i.jsx)(G._, {
                        sourceContextData: _,
                        children: (0, i.jsxs)(z.N, {
                            className: ey().root,
                            containerClassName: (0, B.$)(ey().scrollContainer, ey().important),
                            ref: a,
                            'data-test-id': l.Xk.familiarYou.FAMILIAR_YOU_SCROLLABLE_CONTENT_COLLECTION,
                            children: [
                                (0, i.jsx)(eA, { tabsState: r, tabElementId: n }),
                                (0, i.jsxs)(o.Kp, {
                                    value: r.value,
                                    name: R.COLLECTION,
                                    elementId: n,
                                    className: ey().content,
                                    children: [
                                        (0, i.jsxs)('section', { 'data-test-id': l.Xk.familiarYou.FAMILIAR_YOU_SECTION_TRACK, children: [g, p] }),
                                        (0, i.jsx)(q.O, {
                                            isShimmerVisible: d.familiarSubpage.isLoading,
                                            isShimmerActive: !0,
                                            headerClassName: ey().blockHeader,
                                            containerClassName: ey().block,
                                            title: x,
                                            showHeaderShimmer: d.familiarSubpage.shouldShowTitleBlocks,
                                            'data-test-id': l.Xk.familiarYou.FAMILIAR_YOU_SECTION_ALBUM,
                                            children:
                                                null == (t = d.familiarSubpage.collectionAlbums)
                                                    ? void 0
                                                    : t.map((e) => (0, i.jsx)(K.a, { album: e, contentLinesCount: 3 }, e.id)),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(J.A, { children: (0, i.jsx)(Q.w, { className: ey().footer }) }),
                            ],
                        }),
                    });
                }),
                eL = (0, n.PA)((e) => {
                    let { forwardRef: t, tabsState: a, tabElementId: r, artistId: n } = e,
                        { artist: c } = (0, v.g)(),
                        { from: d } = (0, X.f)(),
                        u = el({ artistId: n, entityContextType: F.h.ARTIST_FAMILIAR_FROM_WAVE }),
                        m = (0, s.useCallback)(
                            (e, t) => ({
                                contextData: {
                                    type: U.K.Various,
                                    meta: { id: String(n) },
                                    from: d,
                                    overrideAutoflowSeeds: ['artist:'.concat(n)],
                                    overrideContextType: W.b.Artist,
                                },
                                queueParams: { index: t },
                                loadContextMeta: !1,
                                entitiesData: c.familiarSubpage.vibeEntitiesData,
                            }),
                            [c.familiarSubpage.vibeEntitiesData, n, d],
                        ),
                        _ = (0, s.useMemo)(() => {
                            var e;
                            return (0, i.jsx)(en, {
                                isShimmerVisible: c.familiarSubpage.isLoading,
                                isShimmerActive: !0,
                                variant: V.X.PLAYLIST,
                                shimmersCount: 10,
                                className: (0, B.$)(ey().block, ey().tracksBlock),
                                children:
                                    null == (e = c.familiarSubpage.vibeTracks)
                                        ? void 0
                                        : e.map((e, t) => (0, i.jsx)(Y.K, { track: e, playContextParams: m(e, t) }, e.id)),
                            });
                        }, [c.familiarSubpage.isLoading, c.familiarSubpage.vibeTracks, m]);
                    return (0, i.jsx)(G._, {
                        sourceContextData: u,
                        children: (0, i.jsxs)(z.N, {
                            className: ey().root,
                            containerClassName: (0, B.$)(ey().scrollContainer, ey().important),
                            ref: t,
                            'data-test-id': l.Xk.familiarYou.FAMILIAR_YOU_SCROLLABLE_CONTENT_VIBE,
                            children: [
                                (0, i.jsx)(eA, { tabsState: a, tabElementId: r }),
                                (0, i.jsx)(o.Kp, { value: a.value, name: R.VIBE, elementId: r, className: ey().content, children: _ }),
                                (0, i.jsx)(J.A, { children: (0, i.jsx)(Q.w, { className: ey().footer }) }),
                            ],
                        }),
                    });
                });
            var eT = a(66738),
                eE = a(31249),
                ej = a.n(eE);
            let eS = (e) => {
                let { tabsState: t, tabElementId: a } = e,
                    r = (0, s.useMemo)(() => {
                        switch (t.value) {
                            case R.COLLECTION:
                                return (0, i.jsx)(eo.A, { id: 'error-messages.empty-artist-familiar-collection-title' });
                            case R.VIBE:
                                return (0, i.jsx)(eo.A, { id: 'error-messages.empty-artist-familiar-vibe-title' });
                        }
                    }, [t.value]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(eA, { tabsState: t, tabElementId: a }),
                        (0, i.jsxs)('div', {
                            className: ej().root,
                            children: [
                                (0, i.jsx)(eT.I, { className: ej().icon, variant: 'attention', size: 'xxxl' }),
                                (0, i.jsx)(ec.DZ, { className: ej().title, variant: 'h3', size: 'xs', children: r }),
                            ],
                        }),
                    ],
                });
            };
            var eI = a(10603);
            let eO = (0, n.PA)((e) => {
                    let { tabsState: t, tabElementId: a } = e,
                        { artist: r } = (0, v.g)(),
                        { formatMessage: n } = (0, H.A)(),
                        { isScrolling: o } = (0, s.useContext)(eu.B),
                        c = (0, ed.W)(),
                        d = ev(t);
                    return (0, i.jsx)(eI.Y, {
                        variant: eI.V.COMPOSITE,
                        staticClassName: (0, B.$)(eC().staticHeader, eC().important),
                        'aria-hidden': !o,
                        stickyClassName: (0, B.$)(eC().stickyHeader, eC().important),
                        stickyChild: (0, i.jsxs)('div', {
                            className: eC().container,
                            'data-test-id': l.Xk.artist.ARTIST_FAMILIAR_PAGE_STICKY_HEADER,
                            children: [
                                c.canBack && (0, i.jsx)(em.L, { withForwardControl: !1, withBackwardControl: c.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, i.jsxs)(eh.wI, {
                                    isShimmerVisible: r.familiarSubpage.isLoading,
                                    shimmer: (0, i.jsx)(ek, {}),
                                    className: eC().tabs,
                                    elementId: a,
                                    onTabChange: d,
                                    ...t,
                                    children: [
                                        (0, i.jsx)(e_.o, {
                                            className: eC().tab,
                                            value: R.COLLECTION,
                                            title: n({ id: 'page.familiar-collection' }),
                                            'aria-hidden': !o,
                                            tabIndex: o ? 0 : -1,
                                        }),
                                        (0, i.jsx)(e_.o, {
                                            className: eC().tab,
                                            value: R.VIBE,
                                            title: n({ id: 'page.familiar-vibe' }),
                                            'aria-hidden': !o,
                                            tabIndex: o ? 0 : -1,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                }),
                eR = (0, n.PA)((e) => {
                    var t, a, n;
                    let { artistId: y, preloadedArtist: N, preloadedFamiliar: L } = e,
                        T = (0, r.useSearchParams)(),
                        { artist: E, disclaimerModalState: j } = (0, v.g)(),
                        { contentScrollRef: S, setContentScrollRef: I } = (0, g.g)(),
                        D = (0, s.useId)(),
                        B = (0, s.useMemo)(() => {
                            switch (T.get(C.K.TAB)) {
                                case f.J.COLLECTION:
                                    break;
                                case f.J.VIBE:
                                    return R.VIBE;
                            }
                            return R.COLLECTION;
                        }, [T]),
                        H = (0, o.zb)(B),
                        F = (0, u.S)({ artist: null == (t = E.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                    ((0, P.G)(y),
                        (0, s.useEffect)(() => {
                            var e;
                            (null == (e = E.meta) ? void 0 : e.artist.isUnsafeLegal) && F();
                        }, [null == (a = E.meta) ? void 0 : a.artist.isUnsafeLegal, F]),
                        (0, w._)(E, y),
                        (0, s.useEffect)(
                            () => () => {
                                E.familiarSubpage.reset();
                            },
                            [E],
                        ),
                        (0, x.J)(E.familiarSubpage.isResolved),
                        E.familiarSubpage.isNotFound && (0, r.notFound)());
                    let U = (0, s.useMemo)(() => {
                            switch (H.value) {
                                case R.COLLECTION:
                                    if (E.familiarSubpage.isResolved && !E.familiarSubpage.hasCollectionEntities)
                                        return (0, i.jsx)(eS, { tabsState: H, tabElementId: D });
                                    return (0, i.jsx)(eN, { tabsState: H, forwardRef: I, tabElementId: D, artistId: y });
                                case R.VIBE:
                                    if (E.familiarSubpage.isResolved && !E.familiarSubpage.hasVibeTracks) return (0, i.jsx)(eS, { tabsState: H, tabElementId: D });
                                    return (0, i.jsx)(eL, { tabsState: H, forwardRef: I, tabElementId: D, artistId: y });
                            }
                        }, [E.familiarSubpage.hasCollectionEntities, E.familiarSubpage.hasVibeTracks, E.familiarSubpage.isResolved, y, I, D, H]),
                        W = [];
                    return (E.familiarSubpage.isNeededToLoad && W.push(E.familiarSubpage.getData({ preloadedFamiliar: L, artistId: y })),
                    E.infoLoadingState.isNeededToLoad && W.push(E.getInfo({ artistId: y, preloadedArtist: N })),
                    ((e) => {
                        var t;
                        (0, s.useEffect)(() => {
                            (null == e ? void 0 : e.meta) &&
                                !e.infoLoadingState.isLoading &&
                                e.meta.artist &&
                                O({ artist: (0, A.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                    (0, b.j)(e);
                                });
                        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                    })(E),
                    W.length && (0, s.use)(Promise.allSettled(W)),
                    E.familiarSubpage.isRejected && !E.familiarSubpage.isNotFound)
                        ? (0, i.jsx)(c.SomethingWentWrong, {})
                        : (null == (n = E.meta) ? void 0 : n.artist.isLegalRejected)
                          ? (0, i.jsx)(k.M, { modalState: j })
                          : (0, i.jsx)(p.n, {
                                pageId: _._Q.FAMILIAR_YOU,
                                pageEntityId: y,
                                children: (0, i.jsx)(d.h, {
                                    scrollElement: S,
                                    headerThreshold: 148,
                                    children: (0, i.jsxs)('div', {
                                        className: M().root,
                                        'data-test-id': l.Xk.artist.ARTIST_FAMILIAR_PAGE,
                                        children: [(0, i.jsx)(eO, { tabElementId: D, tabsState: H }), (0, i.jsx)(h.F, { blockIdForFrom: m.U.DEFAULT, children: U })],
                                    }),
                                }),
                            });
                });
            var ew = a(61288);
            let eP = () => {
                let e = (0, r.useSearchParams)().get('artistId');
                return ((e && (0, ew.L)(e)) || (0, r.notFound)(), (0, i.jsx)(eR, { artistId: e }));
            };
        },
        26076: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => s });
            var i = a(25839);
            a(93588);
            var r = a(400),
                n = a.n(r);
            let s = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: n().empty });
            };
        },
        26115: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => n });
            var i = a(40207),
                r = a(12929);
            let n = (e) => {
                let { track: t, callback: a, disclaimerRejectHandler: n } = e;
                return (0, i.l)({ entity: t, entityType: r.n.TRACK, callback: a, onReject: n, preventDefaultWhenSafe: !1 });
            };
        },
        26208: (e, t, a) => {
            'use strict';
            function i(e) {
                let { tld: t, url: a } = e;
                return a || 'https://music.yandex.'.concat(t, '/pages/main/i/og/home.png?webp=false');
            }
            a.d(t, { v: () => i });
        },
        27935: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => n });
            var i = a(89288),
                r = a(28869);
            function n(e) {
                let { ogTitle: t, ogDescription: a, fullUrl: n, locale: s, ogImage: l, siteName: o, ogType: c, customImage: d } = e,
                    u = l ? { url: (0, i.lU)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: a,
                    url: n,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (s || r.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: u || d,
                };
            }
        },
        28257: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        28604: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => r });
            var i = a(74631);
            let r = (e, t) => {
                (0, i.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        28869: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => u });
            var i = a(58025),
                r = a(78773),
                n = a(14514),
                s = a(56107);
            let l = (e) => s.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = a(86166);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var d = a(55040);
            class u {
                static getDefaultLocale() {
                    return new Intl.Locale(r.Xn);
                }
                getLocale() {
                    let e;
                    try {
                        e = new Intl.Locale(this.serverDetectedLocale).region;
                    } catch (t) {
                        e = u.getDefaultLocale().region;
                    }
                    return new Intl.Locale(this.language, { region: e });
                }
                getDefaultLanguage() {
                    return c((0, n.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, n.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, a, i;
                    let r = (0, n.k)(this.config, e);
                    r !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (a = this.storage) || a.set(r), null == (i = this.changeLanguageHandler) || i.onChangeLanguage(r));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => c((0, n.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, n.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, d.M)(e);
                    } catch (t) {
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: a, changeLanguageHandler: o, logger: c }) {
                    let d;
                    if (
                        ((0, i._)(this, 'language', void 0),
                        (0, i._)(this, 'storage', void 0),
                        (0, i._)(this, 'dictionary', void 0),
                        (0, i._)(this, 'config', void 0),
                        (0, i._)(this, 'logger', void 0),
                        (0, i._)(this, 'changeLanguageHandler', void 0),
                        (0, i._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = a),
                        (this.logger = c),
                        (this.changeLanguageHandler = o),
                        (this.serverDetectedLocale = e),
                        (this.config = r.pE[r.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var u;
                            let e;
                            d = ((e = this.config), new s.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (u = this.storage) ? void 0 : u.get()) || void 0,
                                acceptLangs: l(navigator.languages.join()),
                            });
                        }
                    } else [d] = l(e) || [];
                    this.language = (0, n.k)(this.config, d);
                }
            }
        },
        29279: (e) => {
            e.exports = {
                root: 'ArtistFamiliarPageHeader_root__0Wxyx',
                container: 'ArtistFamiliarPageHeader_container__HFQzt',
                title: 'ArtistFamiliarPageHeader_title__YpVQg',
                tabs: 'ArtistFamiliarPageHeader_tabs__CrnJC',
                tab: 'ArtistFamiliarPageHeader_tab__RK4OK',
                tabsShimmer: 'ArtistFamiliarPageHeader_tabsShimmer__cbLvV',
                tabShimmer: 'ArtistFamiliarPageHeader_tabShimmer__iLiqI',
                staticHeader: 'ArtistFamiliarPageHeader_staticHeader__LrzR8',
                important: 'ArtistFamiliarPageHeader_important__buc81',
                stickyHeader: 'ArtistFamiliarPageHeader_stickyHeader__u7JdF',
            };
        },
        30787: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            let i = (e, t) => {
                let [a, i] = e.split('?'),
                    r = new URLSearchParams(i || '');
                for (let [e, a] of new URLSearchParams(t).entries()) r.set(e, a);
                let n = r.toString();
                return ''.concat(a).concat(n ? '?'.concat(n) : '');
            };
        },
        31249: (e) => {
            e.exports = { root: 'ArtistFamiliarPageEmpty_root__s5xX9', icon: 'ArtistFamiliarPageEmpty_icon__b7kR5', title: 'ArtistFamiliarPageEmpty_title__wvBGS' };
        },
        31515: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 21460));
        },
        32033: (e) => {
            e.exports = {
                root: 'ArtistFamiliarPageContent_root__0Mc9t',
                scrollContainer: 'ArtistFamiliarPageContent_scrollContainer__TD6Kj',
                important: 'ArtistFamiliarPageContent_important__o2KTP',
                content: 'ArtistFamiliarPageContent_content__QquDA',
                block: 'ArtistFamiliarPageContent_block__Cr2H_',
                blockHeader: 'ArtistFamiliarPageContent_blockHeader__Z_uvq',
                tracksBlock: 'ArtistFamiliarPageContent_tracksBlock__SCCLT',
                footer: 'ArtistFamiliarPageContent_footer__nveR8',
                item: 'ArtistFamiliarPageContent_item__fyC2q',
                shimmerTitle: 'ArtistFamiliarPageContent_shimmerTitle__WU3vH',
            };
        },
        34826: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'CommonControlsBar_root__N8b0F',
                root_withSecondaryColor: 'CommonControlsBar_root_withSecondaryColor__4Y1P_',
                item: 'CommonControlsBar_item__qGErG',
                contextMenu: 'CommonControlsBar_contextMenu__EAq_c',
                contextMenu_visible: 'CommonControlsBar_contextMenu_visible__M0ry0',
                contextMenuWrapper: 'CommonControlsBar_contextMenuWrapper__XjkaL',
                lightning: 'CommonControlsBar_lightning__o7wrY',
                ugcIcon: 'CommonControlsBar_ugcIcon__OV0Cl',
                lightning_withOffset: 'CommonControlsBar_lightning_withOffset__LGvUS',
                duration: 'CommonControlsBar_duration__un38A',
                duration_hidden: 'CommonControlsBar_duration_hidden__noQ4S',
                alwaysVisibleDuration: 'CommonControlsBar_alwaysVisibleDuration__3V6gl',
                controls: 'CommonControlsBar_controls__QrogT',
                trailerIcon: 'CommonControlsBar_trailerIcon__ZHSBo',
                removeButton: 'CommonControlsBar_removeButton__35xHY',
                controls_disabled: 'CommonControlsBar_controls_disabled__0RmLo',
                explicitMark: 'CommonControlsBar_explicitMark__3I_Op',
                controls_dislikedControls: 'CommonControlsBar_controls_dislikedControls__mMjKC',
                likeIcon: 'CommonControlsBar_likeIcon__YqgZY',
                controls_dislikedColors: 'CommonControlsBar_controls_dislikedColors__h5lev',
                downloadIcon: 'CommonControlsBar_downloadIcon__2mM6m',
                popover: 'CommonControlsBar_popover__6bmNd',
            };
        },
        37922: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        39099: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => A });
            var i = a(25839),
                r = a(82298),
                n = a(88204),
                s = a(74631),
                l = a(71035),
                o = a(11823),
                c = a(79367),
                d = a(47009),
                u = a(52512),
                m = a(29872),
                _ = a(61561),
                h = a(85743),
                p = a(16886),
                g = a(27954),
                x = a(18284),
                v = a(39004),
                f = a(26115),
                C = a(51027),
                k = a.n(C);
            let A = (0, n.PA)((e) => {
                var t;
                let {
                        className: a,
                        track: n,
                        meta: C,
                        beforeBlock: A,
                        controls: b,
                        playButtonCellRender: y,
                        withLightning: N,
                        isPlaying: L,
                        isCurrent: T,
                        togglePlay: E,
                        restartPlay: j,
                        onPlayClick: S,
                        playButtonIconSize: I,
                        skipFreemiumCloseListeningPaywall: O = !1,
                        ...R
                    } = e,
                    { shouldShowBuySubscriptionModal: w, showBuySubscriptionModal: P } = (0, m.q)(),
                    {
                        track: D,
                        fullscreenPlayer: M,
                        settings: { isMobile: B },
                        album: H,
                        albumCPA: { isPlusCPAPlayerBarEnabled: F },
                        paywall: { modal: U },
                    } = (0, g.g)(),
                    { ref: W, intersectionPropertyId: z } = (0, u.n)(),
                    $ = (0, d.b)(),
                    K = (0, c.P)(),
                    Y = ((e) => {
                        let { track: t, withLightning: a } = e,
                            { formatMessage: i } = (0, v.A)();
                        return t.isAvailable
                            ? [t.artistsNames, t.title, t.version, a && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                            : ''
                                  .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                  .concat(t.artistsNames, ' ')
                                  .concat(t.title);
                    })({ withLightning: N, track: n }),
                    X = ((e) => {
                        let { sonataState: t } = (0, g.g)(),
                            a = t.status === p.MT.LOADING_MEDIA_SOURCE || t.status === p.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let i = t.entityMeta.entityId;
                            return a && i === e;
                        }
                        return a;
                    })(n.entityId),
                    G = F(H.id, null == (t = H.meta) ? void 0 : t.isNonMusic),
                    V = n.isAvailable && w && !G,
                    Z = (0, _.N)(),
                    q = n.isAvailable && Z && !G && !O,
                    Q = (0, f.w)({ track: n, callback: E }),
                    J = (0, l.c)(() => {
                        D.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    ee = (0, f.w)({ track: n, callback: J }),
                    { sendPlaySearchFeedback: et } = (0, h.z)(),
                    [ea, ei] = (0, s.useState)(!1),
                    er = (0, l.c)(() => {
                        if (!K()) {
                            if (V) return void P();
                            if (q) return void U.open();
                            (ea || L || (ei(!0), null == et || et()), Q(), $(!L), null == S || S(!L));
                        }
                    }),
                    en = (0, l.c)(() => {
                        if (L) return void j();
                        er();
                    }),
                    es = (0, l.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            (w && n.isAvailableOnlyForPlus && P(), Z && n.isAvailableOnlyForPlus && U.open());
                            return;
                        }
                        if (V) return void P();
                        let t = !B && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !M.modal.isOpened));
                        return q && !t
                            ? void U.open()
                            : ((0, o.P)(e, k().ripple), B)
                              ? void er()
                              : 2 === e.detail
                                ? void en()
                                : void (1 === e.detail && n.hasTrackLink && !M.modal.isOpened && (ee(), q && U.open()));
                    }),
                    el = null == y ? void 0 : y({ onPlayButtonClick: er, isPlaying: L, isCurrent: T, isLoading: X, playButtonIconSize: I });
                return (0, i.jsxs)(x.C, {
                    ref: W,
                    'aria-label': Y,
                    'data-intersection-property-id': z,
                    onClick: es,
                    className: (0, r.$)(k().root, { [k().root_disabled]: !n.isAvailable, [k().root_current]: T && B }, a),
                    ...R,
                    children: [A, el, C, b],
                });
            });
        },
        41016: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => s });
            var i = a(71872),
                r = a(80461);
            let n = '@yandexmusic';
            function s(e) {
                return e.cardType === r.W.SUMMARY_LARGE_IMAGE
                    ? { card: r.W.SUMMARY_LARGE_IMAGE, site: n, title: e.title, description: e.description }
                    : {
                          card: r.W.APP,
                          site: n,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(i.Lz, '/').concat(e.url) } },
                      };
            }
        },
        41544: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => L });
            var i = a(25839),
                r = a(82298),
                n = a(88204),
                s = a(84059),
                l = a(74631),
                o = a(39004),
                c = a(8487),
                d = a(61493),
                u = a(49656),
                m = a(3392),
                _ = a(4254),
                h = a(4331),
                p = a(85743),
                g = a(27954),
                x = a(19410),
                v = a(12929),
                f = a(62926),
                C = a(97522),
                k = a(40846),
                A = a(91171),
                b = a(87221),
                y = a(12752),
                N = a.n(y);
            let L = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: a,
                        track: n,
                        albumArtists: y,
                        withExplicitMark: L,
                        withSecondaryColor: T,
                        captionSize: E = 'm',
                        explicitSize: j = 'xxxs',
                        withAllArtistsTitle: S,
                        textClassName: I,
                        artistsClassName: O,
                        ignoreDislikedStyles: R,
                        withCustomTooltip: w = !0,
                        hasLineClamp: P = !0,
                        withSavingQueryParams: D,
                        beforeTitle: M,
                        withArtistLink: B,
                        withTrackLink: H,
                        afterTitle: F,
                        withContextMenuArtists: U,
                    } = e,
                    { formatMessage: W } = (0, o.A)(),
                    { sendNavigateSearchFeedback: z } = (0, p.z)(),
                    {
                        settings: { isMobile: $ },
                        slam: K,
                    } = (0, g.g)(),
                    Y = (0, A.$)({ withCustomTooltip: w }),
                    X = (0, s.useSearchParams)(),
                    G = (0, k.B)(n, {
                        isMobile: $,
                        isOfflineModeEnabled: K.isOfflineModeEnabled,
                        albumArtists: y,
                        withTrackLink: H,
                        withArtistLink: B,
                        withExplicitMark: L,
                        query: D ? Object.fromEntries(X) : void 0,
                    }),
                    V = (0, l.useMemo)(() => {
                        var e;
                        let t = W({ id: 'entity-names.track-name' }, { trackName: n.title });
                        return ''.concat(t, ' ').concat(null != (e = n.version) ? e : '');
                    }, [W, n.title, n.version]),
                    Z = (0, b.O)({ track: n, onNavigate: z, withSavingQueryParams: D, entityType: v.n.TRACK }),
                    q = (0, l.useCallback)(
                        (e) => {
                            var t;
                            let a = ''.concat(G.title, ' ').concat(null != (t = G.version) ? t : '');
                            return (0, i.jsx)(m.m_, {
                                enabled: Y && !$,
                                offsetOptions: 4,
                                placement: 'top',
                                text: a,
                                hoverSettings: x.V,
                                children: (0, i.jsx)(_.HL, {
                                    className: (0, r.$)(N().text, N().title),
                                    type: 'entity',
                                    size: E,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: G.title,
                                }),
                            });
                        },
                        [$, Y, E, G.title, G.version],
                    ),
                    Q = (0, u.L)(() => {
                        var e;
                        let t = ''.concat(G.title, ' ').concat(null != (e = G.version) ? e : '');
                        return G.shouldShowRemovedTitle
                            ? (0, i.jsx)(m.m_, {
                                  enabled: Y && !$,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: W({ id: 'track-title.error-not-found' }),
                                  hoverSettings: x.V,
                                  children: (0, i.jsx)(_.HL, {
                                      className: (0, r.$)(N().text, N().title),
                                      type: 'entity',
                                      size: E,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Y ? void 0 : W({ id: 'track-title.error-not-found' }),
                                      children: (0, i.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : G.link
                              ? (0, i.jsx)(C.N, {
                                    onClick: Z,
                                    className: N().albumLink,
                                    href: G.link.href,
                                    'aria-label': V,
                                    title: Y ? void 0 : t,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: q(),
                                })
                              : q({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }),
                    J = (0, l.useMemo)(() => +!!P, [P]);
                return (0, i.jsx)('div', {
                    className: (0, r.$)(N().root, { [N().root_disabled]: !n.isAvailable, [N().root_disliked]: n.isDisliked && !R, [N().root_withSecondaryColor]: T }, t),
                    children: (0, i.jsxs)('div', {
                        className: N().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(N().titleContainer, { [N().titleContainer_withVersion]: n.version }, a),
                                children: [
                                    (0, i.jsxs)(_.HL, {
                                        className: (0, r.$)(N().text, I),
                                        type: 'entity',
                                        size: E,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            M,
                                            Q,
                                            G.version &&
                                                (0, i.jsxs)(_.HL, {
                                                    className: (0, r.$)(N().text, N().version),
                                                    type: 'entity',
                                                    size: E,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Y ? void 0 : G.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', G.version],
                                                }),
                                        ],
                                    }),
                                    G.explicitMark &&
                                        (0, i.jsx)(f.N, {
                                            containerClassName: N().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: j,
                                            variant: G.explicitMark,
                                            className: N().explicitMark,
                                            trackId: n.id,
                                        }),
                                    F,
                                ],
                            }),
                            G.artists.length > 0 &&
                                (0, i.jsx)(h.i, {
                                    className: (0, r.$)(N().text, { [N().artists]: P }, O, I),
                                    withAllArtistsTitle: S,
                                    linkClassName: (0, r.$)(N().text, N().link),
                                    captionClassName: (0, r.$)(N().text, N().artistCaption),
                                    artists: G.artists,
                                    withLink: G.withArtistLink,
                                    lineClamp: J,
                                    captionSize: E,
                                    withContextMenu: U,
                                }),
                        ],
                    }),
                });
            });
        },
        42324: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { b: () => i }),
                (function (e) {
                    ((e.Album = 'album'), (e.Artist = 'artist'), (e.Playlist = 'playlist'), (e.Radio = 'fm_radio'), (e.Other = 'other'), (e.Search = 'search'));
                })(i || (i = {})));
        },
        43354: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => r, P: () => n });
            var i = a(74631);
            let r = (0, i.createContext)(null),
                n = () => (0, i.useContext)(r);
        },
        43464: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => r });
            let i = new Set(Object.values(a(85705).M)),
                r = (e) => 'string' == typeof e && i.has(e);
        },
        44222: (e) => {
            e.exports = { shimmer: 'TracksList_shimmer__jD4N4' };
        },
        46646: (e, t, a) => {
            var i = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function r(e) {
                if (!a.o(i, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = i[e],
                    r = t[0];
                return a.e(t[1]).then(() => a.t(r, 19));
            }
            ((r.keys = () => Object.keys(i)), (r.id = 46646), (e.exports = r));
        },
        47399: (e) => {
            e.exports = {
                root: 'AlbumTrackShimmer_root__fBjbK',
                infoContainer: 'AlbumTrackShimmer_infoContainer__4fdAk',
                coverContainer: 'AlbumTrackShimmer_coverContainer__frW12',
                textContainer: 'AlbumTrackShimmer_textContainer__5wNPM',
                title: 'AlbumTrackShimmer_title__HC_Pa',
                cover: 'AlbumTrackShimmer_cover__36UkV',
                action: 'AlbumTrackShimmer_action__oI5t5',
            };
        },
        51027: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        55040: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => c, X: () => o });
            var i = a(36432),
                r = a(78773);
            let n = async (e) => e.then((e) => e.default),
                s = r.pE[r.cy],
                l = s.langs.reduce((e, t) => (e.set(t, async () => n(a(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = s.langs.reduce((e, t) => (e.set(t, async () => n(a(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        a = t.get(e),
                        r = t.get('ru');
                    if (a) return a();
                    if (r) return r();
                    throw new i.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        56412: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => b });
            var i = a(25839),
                r = a(82298),
                n = a(88204),
                s = a(74631),
                l = a(8487),
                o = a(61493),
                c = a(71035),
                d = a(4071),
                u = a(4254),
                m = a(36484),
                _ = a(62562),
                h = a(21784),
                p = a(53712),
                g = a(85686),
                x = a(12929),
                v = a(95067),
                f = a(97522),
                C = a(71472),
                k = a.n(C);
            let A = {
                    [x.n.ALBUM]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [x.n.PODCAST]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [x.n.ARTIST]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [x.n.TRACK]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [x.n.AUDIOBOOK]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [x.n.CLIP]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                b = (0, n.PA)((e) => {
                    var t;
                    let { modalState: a, data: n, onClose: C, className: b } = e,
                        y = null != n ? n : null == a ? void 0 : a.modalData,
                        N = (0, h.W)(),
                        L = (0, g.Z)(p.Z.main.href),
                        T = (0, _.N)().get(m.U2),
                        E = (0, c.c)(() => {
                            if (C) return C();
                            (N.canBack && N.back(), L());
                        }),
                        j = (null == y || null == (t = y.details) ? void 0 : t.url) && y.details.text,
                        S = (0, c.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = T.get(v.c.ExEx),
                                i = new Date(),
                                r = i.setMinutes(i.getMinutes() + 15),
                                n =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            (t ? T.set(v.c.ExEx, [...t, n], { expires: new Date(r) }) : T.set(v.c.ExEx, [n], { expires: new Date(r) }),
                                null == C || C(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler());
                        }),
                        I = (0, c.c)(() => {
                            ((null == a ? void 0 : a.shouldHistoryBack) ? (null == C || C(), N.canBack && N.back(), L()) : null == C || C(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let O = (0, s.useMemo)(() => {
                            if (y) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, r.$)(k().title, k().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: y.title,
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: k().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: y.description,
                                        }),
                                        j &&
                                            (0, i.jsx)(f.N, {
                                                href: null == (e = y.details) ? void 0 : e.url,
                                                className: k().link,
                                                children: (0, i.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = y.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [y, j]),
                        R = (0, s.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === x.Z.UNSAFE
                                    ? (0, i.jsxs)('div', {
                                          className: k().buttons,
                                          children: [
                                              (0, i.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: I,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: k().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, i.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, i.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: S,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: k().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && A[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)('div', {
                                          className: k().buttons,
                                          children: (0, i.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: E,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: k().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [S, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, E, I],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, r.$)(k().root, b),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: k().container, children: [O, R] }),
                    });
                });
        },
        57138: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => s });
            var i = a(25839),
                r = a(74631),
                n = a(14482);
            let s = (e) => {
                let {
                        blockId: t,
                        blockType: a,
                        blockIdForFrom: s,
                        blockPosX: l,
                        blockPosY: o,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: m,
                        displayReasonId: _,
                    } = e,
                    h = (0, r.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: a,
                            blockIdForFrom: s,
                            blockPosX: l,
                            blockPosY: o,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: _,
                        }),
                        [t, a, s, l, o, c, d, u, _],
                    );
                return (0, i.jsx)(n.p.Provider, { value: h, children: m });
            };
        },
        61288: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => r });
            let i = /^(0|[1-9]\d*)$/;
            function r(e) {
                return void 0 !== e && !(e.length > 40) && i.test(e);
            }
        },
        61342: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => i });
            var i = (function (e) {
                return ((e.COLLECTION = 'collection'), (e.VIBE = 'vibe'), e);
            })({});
        },
        61399: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => r });
            var i = a(43464);
            let r = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, i.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        61732: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => r });
            let i = (e, t) => {
                    let a = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (a) return a;
                    let i = window.document.createElement('meta');
                    return (i.setAttribute(e, t), i);
                },
                r = (e) => {
                    let { title: t, description: a, openGraph: r } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof a)) {
                        let e = i('name', 'description');
                        (e.setAttribute('content', a), window.document.head.appendChild(e));
                    }
                    let n = '';
                    if (r) {
                        let e = 'string' == typeof r.title ? r.title : '',
                            t = 'string' == typeof r.description ? r.description : '',
                            a = Array.isArray(r.images) ? r.images[0] : null;
                        n = a && 'object' == typeof a && 'url' in a ? String(a.url) : '';
                        let s = i('property', 'og:title'),
                            l = i('property', 'og:description'),
                            o = i('property', 'og:image');
                        (s.setAttribute('content', e),
                            l.setAttribute('content', t),
                            o.setAttribute('content', n),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(l),
                            window.document.head.appendChild(o));
                    }
                };
        },
        61777: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => v });
            var i = a(74631),
                r = a(67379),
                n = a(17850),
                s = a(59450),
                l = a(49656),
                o = a(84e3),
                c = a(58069),
                d = a(20258),
                u = a(26742),
                m = a(25195),
                _ = a(37314),
                h = a(97952),
                p = a(10764),
                g = a(72594);
            let x = [
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
                v = () => {
                    let e = (0, i.useRef)(!1),
                        t = (0, s.st)(),
                        a = (0, o.U)(),
                        { hash: v } = (0, s.gf)(),
                        { pageId: f } = (0, h.$)(),
                        { tabId: C, tabPos: k, isTabSelectedByDefault: A } = (0, g.R)(),
                        { offsetBlockPosY: b } = (0, m.u)(),
                        { blockId: y, blockType: N, blockPosX: L, blockPosY: T, mainObjectType: E, mainObjectId: j, objectsCount: S } = (0, u.N)(),
                        { filterKey: I, filterValue: O, filterPos: R } = (0, _.G)(),
                        { skeleton: w } = (0, p.b)(),
                        P = (0, l.L)(() => (void 0 !== b && void 0 !== T ? b + T : T));
                    return (0, i.useCallback)(() => {
                        if (!t || !f || !d.xK.includes(f) || !x.includes(f) || e.current) return;
                        let i = { hash: v, pageId: c.F[f], entityType: N, entityId: y, entityPosX: L, entityPosY: P, objectsCount: S };
                        (void 0 !== I && ((i.filterKey = I), (i.filterValue = O), (i.filterPos = R)),
                            d.qG.includes(f) && ((i.tabId = C), (i.tabPos = k), (i.isTabSelectedByDefault = A)),
                            w && (i.skeletonId = w),
                            j && E && ((i.mainObjectType = E), (i.mainObjectId = j)));
                        let s = (0, r.F)({ params: i, logger: a, context: 'useSendEventOnBlockLoaded' });
                        s && ((0, n.uY)(t.evgenInstance, s), (e.current = !0));
                    }, [t, f, v, N, y, L, P, I, O, R, S, w, j, E, a, C, k, A]);
                };
        },
        62661: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => o });
            var i = a(25839),
                r = a(82298),
                n = a(66738),
                s = a(28257),
                l = a.n(s);
            let o = (e) => {
                let { isDragging: t, className: a } = e;
                return (0, i.jsx)(n.I, { variant: 'dragDots', size: 'xxs', className: (0, r.$)(l().root, { [l().root_active]: t }, a), 'aria-hidden': !0 });
            };
        },
        64595: (e, t, a) => {
            'use strict';
            function i() {
                return { appId: '117328825040925' };
            }
            a.d(t, { k: () => i });
        },
        64813: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        66284: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => f });
            var i = a(25839),
                r = a(82298),
                n = a(74631),
                s = a(89288),
                l = a(36619),
                o = a(49656),
                c = a(5365),
                d = a(23976),
                u = a(26742),
                m = a(95314),
                _ = a(18412),
                h = a(80986),
                p = a(95388),
                g = a(99024),
                x = a.n(g);
            let v = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: a,
                            isShimmerVisible: g,
                            isShimmerActive: v,
                            isShimmerWithSubcover: f,
                            isShimmerCentered: C,
                            isShimmerRounded: k,
                            title: A,
                            description: b,
                            coverUrl: y,
                            viewAllActionLink: N,
                            titleChildren: L,
                            headerChildren: T,
                            children: E,
                            className: j,
                            containerClassName: S,
                            headerClassName: I,
                            itemClassName: O,
                            showHeaderShimmer: R = !1,
                            showShimmerInfo: w = !0,
                            showControls: P = !0,
                            headingRef: D,
                            headingVariant: M,
                            customShimmer: B,
                            ...H
                        } = e,
                        F = (0, n.useId)(),
                        U = (0, n.useRef)(null),
                        { objectsCount: W } = (0, u.N)(),
                        z = (0, n.useMemo)(
                            () =>
                                R && g
                                    ? (0, i.jsx)('div', { className: I, children: (0, i.jsx)(d.W, { isActive: v, className: x().shimmerTitle, radius: 'l' }) })
                                    : A || b || L || T
                                      ? (0, i.jsx)(m.B, {
                                            objectType: l.DomainObjectType.Shortcut,
                                            objectId: String(N),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != W ? W : 0,
                                            children: (0, i.jsx)(_.T, {
                                                className: I,
                                                labeledForId: F,
                                                title: A,
                                                description: b,
                                                coverUrl: y,
                                                viewAllActionLink: N,
                                                controls: P && (0, i.jsx)(h.X, { className: x().controls, carouselRef: U }),
                                                headingRef: D,
                                                headingVariant: M,
                                                withDescription: !!b,
                                                titleChildren: L,
                                                children: T,
                                            }),
                                        })
                                      : void 0,
                            [y, b, I, D, M, F, v, g, W, P, R, A, L, T, N],
                        ),
                        $ = (0, o.L)(() => B || (0, p.k)({ className: a, isActive: v, withInfo: w, withSubcover: f, centered: C, round: k }));
                    return (0, i.jsxs)('section', {
                        ref: t,
                        className: (0, r.$)(x().root, j),
                        ...(0, s.OZ)(H),
                        children: [
                            z,
                            (0, i.jsx)(c.F, {
                                className: S,
                                ref: U,
                                itemClassName: (0, r.$)(x().item, x().important, O),
                                'aria-labelledby': ''.concat(F, ' ').concat(F, '-description'),
                                children: g ? $ : E,
                            }),
                        ],
                    });
                },
                f = (0, n.forwardRef)((e, t) => (0, i.jsx)(v, { forwardRef: t, ...e }));
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
        69695: (e) => {
            e.exports = { root: 'ArtistFamiliarPage_root__9Zjo0' };
        },
        71472: (e) => {
            e.exports = {
                root: 'Disclaimer_root__ciLA2',
                container: 'Disclaimer_container__cB_wK',
                title: 'Disclaimer_title__I5hOj',
                text: 'Disclaimer_text__2Yo3R',
                link: 'Disclaimer_link__4UMOz',
                buttons: 'Disclaimer_buttons__mpL9o',
                button: 'Disclaimer_button__qIuMB',
                shimmer: 'Disclaimer_shimmer__Bg0HE',
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
        74756: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => P });
            var i = a(25839),
                r = a(82298),
                n = a(88204),
                s = a(74631),
                l = a(39004),
                o = a(8487),
                c = a(36619),
                d = a(61493),
                u = a(71035),
                m = a(66738),
                _ = a(3392),
                h = a(4254),
                p = a(17545),
                g = a(4071);
            let x = (e) => {
                let { className: t, variant: a = 'text', onClick: r, iconClassName: n, iconSize: o, size: c = 's', ariaLabel: u } = e,
                    { formatMessage: _ } = (0, l.A)(),
                    h = null != u ? u : _({ id: 'play-queue.delete-from-queue' }),
                    p = (0, s.useCallback)(
                        (e) => {
                            (null == r || r(), e.stopPropagation());
                        },
                        [r],
                    );
                return (0, i.jsx)(g.$, {
                    className: t,
                    withRipple: !1,
                    variant: a,
                    size: c,
                    radius: 'round',
                    'aria-label': h,
                    onClick: p,
                    icon: (0, i.jsx)(m.I, { size: o, className: n, variant: 'bucket' }),
                    'data-test-id': d.OA.track.REMOVE_BUTTON,
                });
            };
            var v = a(79367),
                f = a(34159),
                C = a(68215),
                k = a(85743),
                A = a(27954),
                b = a(64720),
                y = a(71996),
                N = a(6304),
                L = a(38097),
                T = a(91907),
                E = a(3407),
                j = a(34826),
                S = a.n(j),
                I = a(82684),
                O = a(85957),
                R = a.n(O);
            let w = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: a } = (0, l.A)();
                    return t.isDownloaded
                        ? (0, i.jsx)(m.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': a({ id: 'offline.track-downloaded' }),
                              'data-test-id': d.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, i.jsx)(I.A, { value: t.downloadingProgress, size: 16, className: R().downloadingProgress, progressBarClassName: R().progress })
                          : null;
                }),
                P = (0, n.PA)((e) => {
                    var t, a;
                    let {
                            className: n,
                            track: g,
                            withLightning: j,
                            ignoreDislikedStyles: I,
                            onLikeClick: O,
                            utmLink: R,
                            withSecondaryColor: P,
                            handleRemove: D,
                            withTrailer: M = !0,
                            likeIconSize: B = 'xxs',
                            removeButtonAriaLabel: H,
                            hideControls: F,
                        } = e,
                        { user: U, trailer: W } = (0, A.g)(),
                        { formatMessage: z } = (0, l.A)(),
                        { sendLikeSearchFeedback: $ } = (0, k.z)(),
                        [K, Y] = (0, s.useState)(!1),
                        [X, G] = (0, s.useState)(!1),
                        V = (0, v.P)(),
                        Z = (0, p.K)(g),
                        q = ((e) =>
                            'number' != typeof e
                                ? null
                                : ((e) => {
                                      let t = Math.round((e || 0) / L.k7);
                                      return (0, T.E)(t);
                                  })(e))(g.durationMs),
                        Q = (0, C.P)(Math.round((null != (a = g.durationMs) ? a : 0) / 1e3)),
                        J = (0, f.F)(),
                        ee = U.hasPlus,
                        et = !g.isRemoved && g.isAvailable && !F,
                        ea = (0, u.c)(async () => {
                            (K || g.isLiked || (Y(!0), null == $ || $()), await Z(), null == O || O(g.isLiked));
                        }),
                        ei = (0, u.c)((e) => {
                            e.stopPropagation();
                        }),
                        er = (0, u.c)((e) => {
                            if ((e.stopPropagation(), V())) return void e.preventDefault();
                            (W.openTrackTrailer(g.id), J(c.DomainObjectType.Track, g.id));
                        }),
                        en = (0, s.useMemo)(() => {
                            if (et)
                                return (0, i.jsx)('div', {
                                    onClick: ei,
                                    children: (0, i.jsx)(E._, {
                                        track: g,
                                        open: X,
                                        onOpenChange: G,
                                        placement: 'bottom',
                                        icon: (0, i.jsx)(m.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: R,
                                        className: (0, r.$)(S().contextMenu, { [S().contextMenu_visible]: X }),
                                        handleRemove: D,
                                        withTrailer: M,
                                        'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, D, X, et, M, g, R]);
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(S().root, S().controls, n, {
                            [S().controls_dislikedControls]: g.isDisliked,
                            [S().controls_dislikedColors]: g.isDisliked && !I,
                            [S().controls_disabled]: !g.isAvailable,
                            [S().root_withSecondaryColor]: P,
                        }),
                        children: [
                            j &&
                                (0, i.jsx)(m.I, {
                                    'aria-label': z({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: S().lightning,
                                    variant: 'lightning',
                                }),
                            g.isUGC &&
                                (0, i.jsxs)(_.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, i.jsx)(m.I, {
                                            'aria-label': z({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: S().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': d.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, i.jsx)(_.ZI, { children: (0, i.jsx)(o.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            ee && (0, i.jsx)('div', { className: (0, r.$)(S().item, S().downloadIcon), children: (0, i.jsx)(w, { track: g }) }),
                            D && !F && (0, i.jsx)(x, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(S().item, S().removeButton), onClick: D, ariaLabel: H }),
                            et &&
                                (0, i.jsx)(N.WithOffline, {
                                    fallback: (0, i.jsx)(b.c, {
                                        size: 'xs',
                                        iconSize: B,
                                        className: (0, r.$)(S().item, S().likeIcon),
                                        isLiked: g.isLiked,
                                        onClick: ea,
                                        disabled: !U.isAuthorized,
                                    }),
                                }),
                            (null == (t = g.trailer) ? void 0 : t.isAvailable) &&
                                g.isAvailable &&
                                (0, i.jsx)(N.WithOffline, {
                                    fallback: (0, i.jsx)(y.k, {
                                        className: (0, r.$)(S().item, S().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: er,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(S().item, S().contextMenuWrapper),
                                children: [
                                    null !== q &&
                                        (0, i.jsx)(h.HL, {
                                            variant: 'span',
                                            className: (0, r.$)(S().duration, { [S().duration_hidden]: X && et }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': Q,
                                            role: 'text',
                                            'data-test-id': d.Kq.track.TRACK_DURATION,
                                            children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: q }),
                                        }),
                                    en,
                                ],
                            }),
                        ],
                    });
                });
        },
        78299: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => b });
            var i = a(25839),
                r = a(82298),
                n = a(88204),
                s = a(74631),
                l = a(39004),
                o = a(8487);
            a(93588);
            var c = a(4071),
                d = a(66738),
                u = a(4254),
                m = a(67379),
                _ = a(36619),
                h = a(76945),
                p = a(59450),
                g = a(84e3),
                x = a(97952),
                v = a(89192),
                f = a(53712),
                C = a(15270),
                k = a(68854),
                A = a.n(k);
            let b = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: a = !0 } = e,
                    { formatMessage: n } = (0, l.A)(),
                    k = n({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: a } = (0, p.gf)(),
                        { pageId: i } = (0, x.$)(),
                        r = (0, g.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !a || !i) return;
                        let n = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: a,
                                pageId: i,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        n && (0, h.z5)(t.evgenInstance, n);
                    }, [t, e, a, i, r]);
                })(k);
                let { sendRefreshEvent: b } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: a } = (0, x.$)(),
                            i = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !a) return;
                                let r = (0, m.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: a,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, h.bv)(e.evgenInstance, r);
                            }, [e, t, a, i]),
                        };
                    })(),
                    y = (0, s.useCallback)(() => {
                        (b(), (window.location.href = f.Z.main.href));
                    }, [b]),
                    { contentRef: N } = (0, v.g)();
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(A().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(C.L, { withBackwardFallback: '/', className: (0, r.$)(A().navigation, { [A().navigation_desktop]: !N }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(A().content, { [A().content_shrink]: !a }),
                            children: [
                                (0, i.jsx)(d.I, { className: A().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(u.DZ, { className: (0, r.$)(A().title, A().important), variant: 'h3', size: 'xs', children: k }),
                                (0, i.jsxs)(u.HL, {
                                    className: (0, r.$)(A().text, A().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(c.$, {
                                    onClick: y,
                                    className: A().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        78773: (e, t, a) => {
            'use strict';
            a.d(t, { Xn: () => n, cy: () => r, pE: () => i });
            let i = {
                    yandex: {
                        regions: ['RU', 'BY', 'KZ', 'UZ'],
                        regionLangs: {
                            RU: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            BY: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            KZ: { langs: ['kk', 'en', 'ru', 'uz'], defaultLang: 'kk' },
                            UZ: { langs: ['uz', 'en', 'ru', 'kk'], defaultLang: 'uz' },
                        },
                        langs: ['ru', 'en', 'uz', 'kk'],
                        defaultLang: 'ru',
                    },
                    yango: {
                        regions: ['AE', 'BH', 'EG', 'IQ', 'JO', 'KW', 'OM', 'QA', 'SA'],
                        regionLangs: {
                            AE: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            BH: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            EG: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            IQ: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            JO: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            KW: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            OM: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            QA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            SA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                        },
                        langs: ['en', 'ar'],
                        defaultLang: 'en',
                    },
                },
                r = 'yandex',
                n = 'ru-RU';
        },
        80461: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => i });
            var i = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        80986: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => m });
            var i = a(25839),
                r = a(82298),
                n = a(74631),
                s = a(61493),
                l = a(9911),
                o = a(4071),
                c = a(66738),
                d = a(37922),
                u = a.n(d);
            let m = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: a,
                        forwardControlClassName: d,
                        className: m,
                        withSecondaryColor: _,
                        buttonSize: h = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: g, swipeForward: x, shouldBackwardButtonBeDisabled: v, shouldForwardButtonBeDisabled: f, shouldHideControls: C } = (0, l.Y)(t),
                    k = (0, n.useCallback)(
                        (e) => {
                            (g(), e.stopPropagation());
                        },
                        [g],
                    ),
                    A = (0, n.useCallback)(
                        (e) => {
                            (x(), e.stopPropagation());
                        },
                        [x],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(u().root, m),
                    'data-test-id': s.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, a, { [u().control_hidden]: C, [u().control_withSecondaryColor]: _ }),
                            onClick: k,
                            size: h,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: v,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, d, { [u().control_hidden]: C, [u().control_withSecondaryColor]: _ }),
                            onClick: A,
                            size: h,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: f,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        82967: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => v });
            var i = a(25839),
                r = a(82298),
                n = a(88204),
                s = a(74631),
                l = a(61493),
                o = a(54880),
                c = a(50209),
                d = a(27954),
                u = a(6349),
                m = a(62661),
                _ = a(74756),
                h = a(41544),
                p = a(39099),
                g = a(7929),
                x = a.n(g);
            let v = (0, n.PA)((e) => {
                var t;
                let {
                        track: a,
                        playContextParams: n,
                        className: g,
                        withDNDBlock: v,
                        isDragging: f,
                        draggingClassName: C,
                        ignoreDislikedStyles: k,
                        withSecondaryColor: A,
                        handleRemove: b,
                        withDislike: y,
                        withTrailer: N = !0,
                        beforeTitle: L,
                        removeButtonAriaLabel: T,
                        hideControls: E,
                    } = e,
                    j = (0, c.D)({ playContextParams: n, entityId: a.entityId }),
                    {
                        settings: { isMobile: S },
                    } = (0, d.g)(),
                    I = (0, o.X)(a.trackSource, { isMobile: S }),
                    O = (0, s.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: x().playButtonCell,
                                ignoreDislikedStyles: k,
                                radius: 'xs',
                                ...e,
                            }),
                        [k, a.coverUri, a.isAvailable, a.isDisliked, a.title],
                    );
                return (0, i.jsx)(p.C, {
                    className: (0, r.$)(g, { [x().trackWithDots]: v, [x().important]: v }),
                    track: a,
                    beforeBlock: v ? (0, i.jsx)(m.O, { className: (0, r.$)(x().dots, C), isDragging: f }) : void 0,
                    meta: (0, i.jsx)(h.j, { withArtistLink: I, beforeTitle: L, track: a, ignoreDislikedStyles: k, withSecondaryColor: A }),
                    playButtonCellRender: O,
                    controls: (0, i.jsx)(_.Q, {
                        track: a,
                        className: x().controlsBarCell,
                        ignoreDislikedStyles: k,
                        utmLink: null == (t = n.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: A,
                        handleRemove: b,
                        withDislike: y,
                        withTrailer: N,
                        removeButtonAriaLabel: T,
                        hideControls: E,
                    }),
                    ...j,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        83918: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => r });
            var i = a(74631);
            let r = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        85705: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { M: () => i }),
                (function (e) {
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        ((e.EXCLAMATION_ICON = 'exclamationIcon'), (e.SUBSTITUTED_ICON = 'substitutedIcon')));
                })(i || (i = {})));
        },
        85957: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        86166: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { $: () => i }),
                (function (e) {
                    ((e.RU = 'ru'),
                        (e.EN = 'en'),
                        (e.UK = 'uk'),
                        (e.BE = 'be'),
                        (e.KK = 'kk'),
                        (e.HY = 'hy'),
                        (e.AZ = 'az'),
                        (e.KA = 'ka'),
                        (e.HE = 'he'),
                        (e.UZ = 'uz'),
                        (e.TG = 'tg'),
                        (e.TR = 'tr'),
                        (e.JA = 'ja'),
                        (e.ZH = 'zh'),
                        (e.KO = 'ko'),
                        (e.TH = 'th'),
                        (e.ID = 'id'),
                        (e.DE = 'de'),
                        (e.EL = 'el'),
                        (e.RO = 'ro'),
                        (e.MO = 'mo'),
                        (e.AR = 'ar'));
                })(i || (i = {})));
        },
        89221: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => d });
            var i = a(13580),
                r = a(74631),
                n = a(78773),
                s = a(28869),
                l = a(14514),
                o = a(55040);
            let c = (0, r.cache)(async (e) => (0, o.M)(e, o.X)),
                d = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        a = (0, l.k)(n.pE[n.cy], t),
                        r = await c(a);
                    return (e, t) => {
                        let n = null == r ? void 0 : r[e.id],
                            s = '';
                        return ((Array.isArray(n) || 'string' == typeof n) && (s = new i.S(n, a).format(t)), Array.isArray(s) ? s.join('') : s);
                    };
                };
        },
        89514: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        95314: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => s });
            var i = a(25839),
                r = a(74631),
                n = a(66192);
            let s = (e) => {
                let { objectId: t, objectPosX: a, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u, children: m } = e,
                    _ = (0, r.useMemo)(
                        () => ({ objectId: t, objectPosX: a, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, a, s, l, o, c, d, u],
                    );
                return (0, i.jsx)(n.l.Provider, { value: _, children: m });
            };
        },
        95388: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => n });
            var i = a(25839),
                r = a(19412);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, a) => (0, i.jsx)(r.V, { ...e }, a));
            };
        },
        95445: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => n });
            var i = a(25895);
            let r = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                n = function (e, t) {
                    for (var a = arguments.length, n = Array(a > 2 ? a - 2 : 0), s = 2; s < a; s++) n[s - 2] = arguments[s];
                    let [l] = n,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != l ? l : {}), options: e }),
                        d = {},
                        { href: u } = (0, i.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(r)) {
                        let { href: a } = (0, i.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        d[e] = a;
                    }
                    return { canonical: u, languages: d };
                };
        },
        97805: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => p });
            var i = a(25839),
                r = a(3718),
                n = a(82298),
                s = a(74631),
                l = a(39004),
                o = a(23976),
                c = a(47399),
                d = a.n(c);
            let u = (e) => {
                let { isActive: t, className: a } = e,
                    { formatMessage: r } = (0, l.A)(),
                    c = (0, s.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                return (0, i.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(d().root, a),
                    children: [
                        (0, i.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, i.jsx)('div', { className: d().coverContainer, children: (0, i.jsx)(o.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, i.jsx)('div', { className: d().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, i.jsx)(o.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var m = a(64813),
                _ = a.n(m);
            let h = (e) => {
                    let { isActive: t, className: a } = e,
                        { formatMessage: r } = (0, l.A)(),
                        c = (0, s.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                    return (0, i.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, n.$)(_().root, a),
                        children: [
                            (0, i.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, i.jsx)(o.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, i.jsx)('div', { className: _().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, i.jsx)(o.W, { isActive: t, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                p = (e) => {
                    let { isActive: t, variant: a, className: n } = e;
                    switch (a) {
                        case r.X.PLAYLIST:
                            return (0, i.jsx)(h, { isActive: t, className: n });
                        case r.X.ALBUM:
                            return (0, i.jsx)(u, { isActive: t, className: n });
                    }
                };
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
        99401: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => N });
            var i = a(25839),
                r = a(82298),
                n = a(88204),
                s = a(39004),
                l = a(93588),
                o = a(43354),
                c = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let d = (e, t, a) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(a);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(a);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(a);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(a);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(a);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: a, tld: i, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, i, a) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, i, a) },
                    };
                };
            var m = a(10959),
                _ = a(89514);
            let h = (e) => e(new Date(), (0, _.m)());
            var p = a(96433),
                g = a(27954),
                x = a(400),
                v = a.n(x),
                f = a(61493),
                C = a(4254),
                k = a(97522);
            let A = (e) => {
                    let { className: t, data: a } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(v().copyrights, t),
                        'data-test-id': f.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    a.year,
                                    ' \xa0',
                                    (0, i.jsx)(k.N, {
                                        target: '_blank',
                                        href: a.yandexMusic.url,
                                        className: (0, r.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': f.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: a.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(k.N, {
                                target: '_blank',
                                href: a.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': f.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: a.yandexProjects.title,
                            }),
                        ],
                    });
                },
                b = (e) => {
                    let { disclaimer: t, links: a } = e;
                    return (0, i.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: v().list,
                                'data-test-id': f.S7.FOOTER_LINKS_LIST,
                                children: a.map((e) => {
                                    let { id: t, title: a, url: r } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, i.jsx)(k.N, { target: '_blank', href: r, className: v().link, 'data-test-id': f.S7.FOOTER_LINK, children: a }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': f.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                y = (e) => {
                    let { className: t, data: a } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, r.$)(v().root, v().important, t),
                        'data-test-id': f.S7.FOOTER,
                        children: [(0, i.jsx)(b, { links: a.links, disclaimer: a.disclaimer }), (0, i.jsx)(A, { data: a.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: a } = (0, g.g)(),
                    { formatDate: r, formatMessage: n } = (0, s.A)(),
                    { language: l } = (0, p.h)(),
                    o = u({ formatMessage: n, language: l, tld: a.tld, year: h(r) });
                return (0, i.jsx)(A, { className: t, data: o });
            });
            let N = (0, n.PA)((e) => {
                var t;
                let { className: a } = e,
                    { experiments: n, location: _, user: x } = (0, g.g)(),
                    { formatDate: f, formatMessage: C } = (0, s.A)(),
                    { isEnabled: k } = null != (t = (0, o.P)()) ? t : {},
                    { language: A } = (0, p.h)(),
                    b = ((e) => {
                        let { checkExperiment: t, formatMessage: a, isWebApplication: i, language: r, tld: n, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: a, tld: i, language: r, userRegion: n } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, i, r) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, i, r) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, i, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, i, r) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, i, r) },
                                    _ = [s, o, u];
                                return (a && 'ru' === n && _.push(l), _.push(m), _);
                            })({ formatMessage: a, isWebApplication: i, language: r, tld: n, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => a({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => a({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: a, language: r, tld: n, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: C,
                        isWebApplication: l.$3,
                        tld: _.tld,
                        language: A,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: h(f),
                    });
                return (0, i.jsx)(y, { className: (0, r.$)({ [v().root_withOffsetForDeeplink]: k }, a), data: b });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 1676, 1107, 2324, 7339, 6749, 6287, 2121, 3472, 7349, 1865, 8451, 1583, 2668, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 2582,
                3269, 4163, 3246, 4517, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 5898, 2533, 4932, 4475, 5056, 7358,
            ],
            () => e((e.s = 31515)),
        ),
            (_N_E = e.O()));
    },
]);
