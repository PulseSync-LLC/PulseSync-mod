(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8209],
    {
        3796: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => s });
            var i = r(21916),
                n = r(55178);
            let s = (e) => {
                let t = (0, i.usePathname)(),
                    [r, s] = (0, n.useState)(!1);
                (0, n.useEffect)(() => {
                    window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t);
                }),
                    (0, n.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), s(!0));
                    }, [e, r, t]);
            };
        },
        5245: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => s });
            var i = r(60754),
                n = r(55178);
            let s = (e) => {
                let { createStore: t, getPendingPatchBatches: r, patchesUpdatedEventName: s } = e,
                    a = (0, n.useRef)([]),
                    [o] = (0, n.useState)(() => {
                        let e = t();
                        for (let t of r()) (0, i.X6)(e, t);
                        return e;
                    });
                return (
                    (0, n.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of r()) (0, i.X6)(o, e);
                        };
                        return e(), window.addEventListener(s, e), () => window.removeEventListener(s, e);
                    }, [r, s, o]),
                    { store: o, patchesRef: a }
                );
            };
        },
        9634: (e, t, r) => {
            'use strict';
            r.d(t, { MainSuspenseLoader: () => o });
            var i = r(32290),
                n = r(82586),
                s = r(82542),
                a = r.n(s);
            let o = (e) => {
                let { style: t } = e,
                    r = {
                        display: 'flex',
                        position: 'fixed',
                        insetBlockStart: 0,
                        insetInlineEnd: 0,
                        insetBlockEnd: 0,
                        insetInlineStart: 0,
                        zIndex: 'var(--ym-z-index-loader)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        background: 'var(--ym-background-color-primary-enabled-basic)',
                        ...t,
                    };
                return (0, i.jsx)('div', {
                    style: r,
                    children: (0, i.jsx)(n.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: a().icon,
                    }),
                });
            };
        },
        10733: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => s });
            var i = r(91945),
                n = r(50891);
            class s extends n.m {
                constructor(e, t) {
                    super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, i._)(this, 'name', 'HttpErrorException'),
                        (0, i._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, s.prototype);
                }
            }
        },
        11323: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => l });
            var i = r(32290),
                n = r(55178),
                s = r(21732),
                a = r(50162);
            let o = (e) => {
                    let { isAvailable: t = !0, className: r, fallbackIconSize: n, forwardRef: o, ...l } = e;
                    return t
                        ? (0, i.jsx)(a._V, { ref: o, className: r, fallbackIconSize: n, ...l, 'data-test-id': s.S7.ENTITY_COVER_IMAGE })
                        : (0, i.jsx)(a.Ab, { className: r, iconSize: n, iconVariant: 'unavailable', 'data-test-id': s.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                l = (0, n.forwardRef)((e, t) => (0, i.jsx)(o, { forwardRef: t, ...e }));
        },
        18518: (e) => {
            e.exports = {
                backdrop: 'BrandedPlaylistHeader_backdrop__hLImj',
                title: 'BrandedPlaylistHeader_title__gPU9U',
                title_show: 'BrandedPlaylistHeader_title_show__e4u0h',
                show: 'BrandedPlaylistHeader_show__42bNL',
                title_withOffset: 'BrandedPlaylistHeader_title_withOffset__QppO0',
                root: 'BrandedPlaylistHeader_root__jXK4F',
                root_withChildren: 'BrandedPlaylistHeader_root_withChildren__6BMwV',
                root_sticky: 'BrandedPlaylistHeader_root_sticky__E_n81',
                root_blurWithTitle: 'BrandedPlaylistHeader_root_blurWithTitle__lmykd',
                child: 'BrandedPlaylistHeader_child__35wjg',
                child_show: 'BrandedPlaylistHeader_child_show__Uvbef',
                container: 'BrandedPlaylistHeader_container__s66Ay',
                container_withMultipleChildren: 'BrandedPlaylistHeader_container_withMultipleChildren__76B6E',
                header: 'BrandedPlaylistHeader_header__jdTQJ',
                actions: 'BrandedPlaylistHeader_actions__we7tI',
                leftBlock: 'BrandedPlaylistHeader_leftBlock__iSsfy',
            };
        },
        29222: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => s });
            var i = (function () {
                    var e = function (t, r) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            })(t, r);
                    };
                    return function (t, r) {
                        if ('function' != typeof r && null !== r) throw TypeError('Class extends value ' + String(r) + ' is not a constructor or null');
                        function i() {
                            this.constructor = t;
                        }
                        e(t, r), (t.prototype = null === r ? Object.create(r) : ((i.prototype = r.prototype), new i()));
                    };
                })(),
                n = function (e, t) {
                    var r = {};
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                    if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                        for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++)
                            0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                    return r;
                },
                s = (function (e) {
                    function t(r, i) {
                        void 0 === i && (i = {});
                        var s = this,
                            a = i.code,
                            o = i.data,
                            l = n(i, ['code', 'data']),
                            c = r || 'Internal error';
                        return (
                            Object.defineProperty((s = e.call(this, c, l) || this), 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'BaseException' }),
                            Object.defineProperty(s, 'message', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(s, 'code', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(s, 'data', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(s, 'stack', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            (s.message = c),
                            (s.code = void 0 === a ? 'E_INTERNAL' : a),
                            (s.data = void 0 === o ? {} : o),
                            (s.stack = Error(c).stack),
                            Object.setPrototypeOf(s, t.prototype),
                            s
                        );
                    }
                    return i(t, e), t;
                })(Error);
        },
        31726: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => o });
            var i = r(54280),
                n = r(70204),
                s = r(34186),
                a = r(62376);
            let o = () => {
                let e = (0, s.N)(),
                    t = e.get(n.oo),
                    r = e.get(n.uM),
                    o = e.get(n.ff),
                    l = e.get(n.tw),
                    c = e.get(n.P0),
                    d = (() => {
                        let e = (0, s.N)(),
                            t = e.get(n.$I),
                            r = e.get(n.EN),
                            i = e.get(n.N1),
                            a = e.get(n._1),
                            o = e.get(n.V3),
                            l = e.get(n.Lb),
                            c = e.get(n.wK),
                            d = e.get(n.tz),
                            u = e.get(n.$8),
                            _ = e.get(n.Oo),
                            h = e.get(n.X4),
                            p = e.get(n.O9),
                            m = e.get(n.E),
                            g = e.get(n.wH),
                            E = e.get(n.ok),
                            v = e.get(n.X8),
                            f = e.get(n.yq),
                            y = e.get(n.NN),
                            T = e.get(n.qN),
                            N = e.get(n.ro),
                            S = e.get(n.nM),
                            R = e.get(n.Ut),
                            P = e.get(n.K1),
                            O = e.get(n.eu),
                            x = e.get(n.aE),
                            C = e.get(n.ki),
                            w = e.get(n.c9),
                            b = e.get(n.en),
                            I = e.get(n.jQ),
                            A = e.get(n.cZ),
                            L = e.get(n.Zl),
                            H = e.get(n.CN),
                            D = e.get(n.P1),
                            j = e.get(n.zj),
                            k = e.get(n.re),
                            B = e.get(n.JM),
                            U = e.get(n.Lk),
                            M = e.get(n.$$),
                            G = e.get(n.sv),
                            F = e.get(n.gd),
                            K = e.get(n.Ez),
                            V = e.get(n.u2),
                            Y = e.get(n.TD),
                            X = e.get(n.dh),
                            $ = e.get(n.LC),
                            z = e.get(n.PL),
                            J = e.get(n.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: r,
                            disclaimersResource: i,
                            usersResource: a,
                            landingResource: o,
                            landing3Resource: l,
                            landingBlocksResource: c,
                            albumResource: d,
                            libraryResource: u,
                            tracksResource: _,
                            topResource: h,
                            artistsResource: p,
                            slidesResource: m,
                            redAlertResource: g,
                            rotorResource: E,
                            waveResource: v,
                            searchResource: f,
                            searchPlaylistResource: y,
                            playlistResource: T,
                            playlistsResource: N,
                            pinResource: S,
                            metatagsResource: R,
                            tagResource: P,
                            feedResource: O,
                            pinsResource: x,
                            musicHistoryResource: C,
                            dynamicPagesResource: w,
                            chartResource: b,
                            clipsResource: I,
                            lyricViewsResource: A,
                            nonMusicResource: L,
                            donationResource: H,
                            loaderResource: D,
                            lumenResource: j,
                            prefixlessResource: k,
                            streamsResource: B,
                            filtersResource: U,
                            ugcResource: M,
                            collectionResource: G,
                            adsResource: F,
                            personalResource: K,
                            familyResource: V,
                            childrenLandingResource: Y,
                            promoResource: X,
                            telemetryResource: $,
                            labelsResource: z,
                            concertsResource: J,
                            wordsResource: e.get(n.dA),
                            wheelResource: e.get(n.$Y),
                        };
                    })(),
                    u = (0, a.U)(),
                    _ = (0, s.N)().get(n.TK),
                    h = e.get(n.ni),
                    p = new i.si(),
                    m = new i.fW();
                return {
                    ...d,
                    acqOffers: r,
                    disclaimerDictionary: o,
                    logger: u,
                    modelActionsLogger: _,
                    localStorage: p,
                    sessionStorage: m,
                    containerStorage: t,
                    config: l,
                    clientSafeConfig: c,
                    landingSdk: h,
                };
            };
        },
        33898: (e, t, r) => {
            'use strict';
            var i;
            r.d(t, { Z: () => i }),
                (function (e) {
                    (e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED');
                })(i || (i = {}));
        },
        34186: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => s, N: () => a });
            var i = r(29222),
                n = r(55178);
            let s = (0, n.createContext)(null);
            function a() {
                let e = (0, n.useContext)(s);
                if (null === e) throw new i.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
        },
        41582: (e, t, r) => {
            'use strict';
            r.r(t), r.d(t, { default: () => x });
            var i = r(32290),
                n = r(21916),
                s = r(55178),
                a = r(49259),
                o = r(45066),
                l = r(60754),
                c = r(87953),
                d = r(49399),
                u = r(36477),
                _ = r(73715);
            let h = l.gK
                    .compose(
                        l.gK.model('PlaylistPersonalPage', {
                            errorStatusCode: l.gK.maybeNull(l.gK.number),
                            playlistUuid: l.gK.maybe(l.gK.string),
                            isReady: l.gK.optional(l.gK.boolean, !1),
                            dummyCoverUrl: l.gK.maybe(l.gK.string),
                            dummyDescription: l.gK.maybe(l.gK.string),
                            title: l.gK.maybe(l.gK.string),
                        }),
                        _.X,
                    )
                    .views((e) => ({
                        getUrl(t) {
                            if (!e.playlistUuid) return '';
                            let { href: r } = (0, u.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid }, query: t });
                            return r;
                        },
                        get url() {
                            if (!e.playlistUuid) return '';
                            let { href: t } = (0, u.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                            return t;
                        },
                        get isNotFound() {
                            let t = e.errorStatusCode === c.X1.NOT_FOUND || e.errorStatusCode === c.X1.BAD_REQUEST;
                            return e.loadingState === d.G.REJECT && t;
                        },
                    }))
                    .actions((e) => ({
                        getPlaylistPersonalDetails: (0, l.L3)(function* (t) {
                            if (!(0, l._n)(e)) return;
                            let { playlistsResource: r, modelActionsLogger: i } = (0, l._$)(e);
                            if (e.loadingState !== d.G.PENDING)
                                try {
                                    var n, s;
                                    e.loadingState = d.G.PENDING;
                                    let i = yield r.getPlaylistPersonal({ playlistId: t });
                                    if ((null == (n = i.error) ? void 0 : n.name) === 'no-such-playlist') {
                                        (e.errorStatusCode = c.X1.NOT_FOUND), (e.loadingState = d.G.REJECT);
                                        return;
                                    }
                                    (e.isReady = i.ready),
                                        (e.playlistUuid = i.data.playlistUuid),
                                        (e.dummyCoverUrl = null == (s = i.data.dummyCover) ? void 0 : s.uri),
                                        (e.dummyDescription = i.data.dummyDescription),
                                        (e.title = i.data.title),
                                        e.loadingState !== d.G.IDLE && (e.loadingState = d.G.RESOLVE);
                                } catch (t) {
                                    i.error(t),
                                        t instanceof c.GX &&
                                            (t.statusCode === c.X1.NOT_FOUND || t.statusCode === c.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = c.X1.NOT_FOUND),
                                        e.loadingState !== d.G.IDLE && (e.loadingState = d.G.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = d.G.IDLE),
                                (e.errorStatusCode = null),
                                (e.isReady = !1),
                                (e.playlistUuid = void 0),
                                (e.dummyCoverUrl = void 0),
                                (e.dummyDescription = void 0),
                                (e.title = void 0);
                        },
                    })),
                p = { loadingState: d.G.IDLE },
                { pageStoreProvider: m } = (0, a.W)({ createStore: (e) => h.create(p, e), patchKey: o.n.PLAYLIST_PERSONAL });
            var g = r(96103),
                E = r(3796),
                v = r(63618),
                f = r(71926),
                y = r(11323),
                T = r(74694),
                N = r(56589),
                S = r.n(N);
            let R = (0, g.PA)(() => {
                    let { dummyCoverUrl: e, dummyDescription: t, title: r } = (0, a.s)(o.n.PLAYLIST_PERSONAL);
                    return (0, i.jsxs)('div', {
                        className: S().root,
                        children: [
                            (0, i.jsx)(T.Y, {}),
                            (0, i.jsx)(y.B, { src: e, size: 200, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0, className: S().cover }),
                            r && (0, i.jsx)(f.DZ, { className: (0, v.$)(S().title, S().important), variant: 'h1', size: 'xs', children: r }),
                            t &&
                                (0, i.jsx)(f.HL, {
                                    className: (0, v.$)(S().text, S().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: t,
                                }),
                        ],
                    });
                }),
                P = (0, g.PA)((e) => {
                    let { params: t, searchParams: r } = e,
                        l = (0, a.s)(o.n.PLAYLIST_PERSONAL),
                        c = l.getUrl(r);
                    if (
                        ((0, s.useEffect)(() => {
                            l.isNeededToLoad && l.getPlaylistPersonalDetails(t.playlistId);
                        }, [l.isNeededToLoad, t.playlistId, l]),
                        (0, s.useEffect)(
                            () => () => {
                                l.reset();
                            },
                            [l],
                        ),
                        (0, E.J)(l.isResolved),
                        (l.isNotFound || l.isRejected) && (0, n.notFound)(),
                        l.isResolved && !l.isReady)
                    )
                        return l.dummyDescription || (0, n.notFound)(), (0, i.jsx)(R, {});
                    l.isResolved && l.isReady && (0, n.redirect)(c);
                });
            var O = r(9634);
            let x = () => {
                let e = (0, n.useSearchParams)().get('playlistId');
                return (
                    e || (0, n.notFound)(),
                    (0, i.jsx)(m, {
                        children: (0, i.jsx)(s.Suspense, { fallback: (0, i.jsx)(O.MainSuspenseLoader, {}), children: (0, i.jsx)(P, { params: { playlistId: e } }) }),
                    })
                );
            };
        },
        42406: (e, t, r) => {
            'use strict';
            r.d(t, { BL: () => d, Gv: () => l, L5: () => c });
            var i,
                n = r(55178),
                s = {
                    5663: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0);
                        let i = r(810),
                            { innerWidth: n = 0, innerHeight: s = 0 } = window;
                        function a(e) {
                            let { top: t, right: r, bottom: i, left: a } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= s) || (i >= 0 && i <= s)) && ((a >= 0 && a <= n) || (r >= 0 && r <= n));
                        }
                        function o(e) {
                            var t, r;
                            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, i)) ? r : e.attributes[0];
                        }
                        function l(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        (t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = a),
                            (t.getElementNameByDataAttribute = o),
                            (t.createIntersectionObserver = l),
                            (t.useIntersectionObserver = function (e, r, n) {
                                let [{ freezeOnceVisible: s, preflightCheck: c, ...d }, u = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, n],
                                    [_, h] = (0, i.useState)({}),
                                    p = (0, i.useRef)(new Set()),
                                    m = (0, i.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : l((e) => {
                                                      let t = o(e.target);
                                                      if (t && m) {
                                                          if (p.current.has(t)) return;
                                                          h((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              s && e.isIntersecting && (p.current.add(t), m.unobserve(e.target));
                                                      }
                                                  }, d),
                                        [u],
                                    );
                                return (
                                    (0, i.useLayoutEffect)(
                                        () => (
                                            m &&
                                                !u &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = a(e.current))) {
                                                            let t = o(e.current);
                                                            h((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || m.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                m && m.disconnect();
                                            }
                                        ),
                                        [u, m, e.length],
                                    ),
                                    _
                                );
                            });
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(n, 2));
                    },
                },
                a = {},
                o = (function e(t) {
                    var r = a[t];
                    if (void 0 !== r) return r.exports;
                    var i = (a[t] = { exports: {} });
                    return s[t](i, i.exports, e), i.exports;
                })(5663);
            o.__esModule;
            var l = o.createIntersectionObserver;
            o.defaultOptions;
            var c = o.getElementNameByDataAttribute;
            o.isInViewportNow;
            var d = o.useIntersectionObserver;
        },
        45066: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => i });
            let i = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        47584: (e) => {
            e.exports = {
                staticItem: 'TextHeader_staticItem__OMNew',
                staticItem_hide: 'TextHeader_staticItem_hide__JtdeC',
                backdrop: 'TextHeader_backdrop__39FkE',
                stickyItem: 'TextHeader_stickyItem__WF2hh',
                container: 'TextHeader_container__I0pVO',
                stickyItem_scrolling: 'TextHeader_stickyItem_scrolling__YPBOL',
            };
        },
        48870: (e) => {
            e.exports = {
                title: 'InnerHeader_title__5aVLP',
                title_show: 'InnerHeader_title_show__RvHsQ',
                show: 'InnerHeader_show__ji3KF',
                backdrop: 'InnerHeader_backdrop__iRxvk',
                root: 'InnerHeader_root__u0zu1',
                root_withChildren: 'InnerHeader_root_withChildren__rLTCN',
                root_sticky: 'InnerHeader_root_sticky__baN8o',
                child: 'InnerHeader_child__DGTfK',
                child_show: 'InnerHeader_child_show__7MFTV',
                actions: 'InnerHeader_actions__x6ruG',
                plusButton: 'InnerHeader_plusButton__eH4NP',
                plusButton_show: 'InnerHeader_plusButton_show__jwPtB',
            };
        },
        49259: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => g, s: () => E });
            var i = r(32290),
                n = r(29222),
                s = r(96103),
                a = r(21916),
                o = r(55178),
                l = r(80451),
                c = r(96218),
                d = r(5245),
                u = r(57594),
                _ = r(31726);
            (0, s.eO)(!1);
            let h = (0, o.createContext)(null),
                p = (e) => {
                    let { children: t, store: r, storeKey: n } = e,
                        s = (0, o.useMemo)(() => ({ store: r, storeKey: n }), [r, n]);
                    return (0, i.jsx)(h.Provider, { value: s, children: t });
                },
                m = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: n } = e;
                    return (
                        (0, a.useServerInsertedHTML)(() => {
                            let e = n.current;
                            return ((n.current = []), 0 === e.length)
                                ? null
                                : (0, i.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, l.stringifyJSONSafely)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(r, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                g = (e) => {
                    let { createStore: t, patchKey: r } = e,
                        n = () => {
                            var e, t;
                            let i = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], i;
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: s, nonce: a } = e,
                                o = (0, _.Y)(),
                                l = (0, u.g)(),
                                { store: h, patchesRef: g } = (0, d.m)({
                                    createStore: () => t({ ...o, rootStore: l }),
                                    getPendingPatchBatches: n,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(m, { nonce: a, patchKey: r, patchesRef: g }), (0, i.jsx)(p, { store: h, storeKey: r, children: s })],
                            });
                        },
                    };
                };
            function E(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, o.useContext)(h);
                if (!r || r.storeKey !== e) {
                    var i;
                    if (!t) return null;
                    throw new n.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (i = null == r ? void 0 : r.storeKey) ? i : 'null', expectedStoreKey: e },
                    });
                }
                return r.store;
            }
        },
        50396: (e) => {
            e.exports = {
                root: 'StickyHeader_root__s_rPg',
                backdrop: 'StickyHeader_backdrop__fCnOw',
                container: 'StickyHeader_container__8mTBx',
                container_scrolling: 'StickyHeader_container_scrolling__nV9EK',
                plusButton: 'StickyHeader_plusButton__80nx5',
                plusButton_show: 'StickyHeader_plusButton_show__lN22Y',
                children: 'StickyHeader_children__5Jlr1',
            };
        },
        50891: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => s });
            var i = r(91945),
                n = r(29222);
            class s extends n.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...r } = {}) {
                    super(e, { code: t, ...r }), (0, i._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, s.prototype);
                }
            }
        },
        50961: (e, t, r) => {
            'use strict';
            var i;
            r.d(t, { X: () => i }),
                (function (e) {
                    (e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT');
                })(i || (i = {}));
        },
        54280: (e, t, r) => {
            'use strict';
            r.d(t, { V8: () => s, si: () => o, fW: () => _, MJ: () => u, jU: () => p, Bx: () => h });
            var i = r(78061);
            function n(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return console.error(e), null;
                }
            }
            class s {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let a = (0, i.Jt)(e);
                        if (t) {
                            var r, s;
                            return null != (s = null == (r = n(a)) ? void 0 : r.value) ? s : null;
                        }
                        return null != a ? a : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    let n = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let s = n ? JSON.stringify({ value: t }) : t;
                        (0, i.hZ)(e, s, r);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, i.TF)(e);
                    } catch (e) {}
                }
            }
            function a(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class o {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = a('localStorage');
                    if (!r) return null;
                    try {
                        var i;
                        let s = r.getItem(e) || void 0;
                        if (!t) return s;
                        let a = n(s);
                        if (!a) return null;
                        let o = null != (i = null == a ? void 0 : a.value) ? i : null;
                        if ((null == a ? void 0 : a.expires) && Date.now() > new Date(a.expires).getTime()) return this.remove(e), null;
                        return o;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    if ('number' == typeof (null == r ? void 0 : r.expires)) {
                        let e = new Date();
                        e.setMilliseconds(e.getMilliseconds() + 864e5 * r.expires), (r.expires = e);
                    }
                    let i = a('localStorage');
                    if (i)
                        try {
                            i.setItem(e, JSON.stringify({ value: t, ...r }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = a('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var l = r(91945),
                c = r(29222);
            class d extends c.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...i } = {}) {
                    super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...i }),
                        (0, l._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, d.prototype);
                }
            }
            class u {
                get(e) {
                    throw new d(this.platform, this.type);
                }
                set(e, t, r) {
                    throw new d(this.platform, this.type);
                }
                has(e) {
                    throw new d(this.platform, this.type);
                }
                remove(e) {
                    throw new d(this.platform, this.type);
                }
                constructor(e, t) {
                    (0, l._)(this, 'platform', ''), (0, l._)(this, 'type', ''), (this.platform = e), (this.type = t);
                }
            }
            class _ {
                get(e) {
                    let t = a('sessionStorage');
                    if (!t) return null;
                    try {
                        var r, i, s;
                        let a = null != (i = t.getItem(e)) ? i : void 0;
                        return null != (s = null == (r = n(a)) ? void 0 : r.value) ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let r = a('sessionStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = a('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let r = 'object' != typeof t ? t : t.name,
                            i = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            n = e.get(r);
                        null != n && e.set(r, n, i);
                    });
            }
            function p(e) {
                let { name: t, group: r, value: i } = e;
                return i && 0 !== Object.keys(i).length
                    ? i.title
                        ? { [t]: { group: r, value: { ...i, title: r } } }
                        : { [t]: { group: r, value: { title: r, value: i } } }
                    : { [t]: { group: r, value: { title: r } } };
            }
        },
        56589: (e) => {
            e.exports = {
                root: 'PlaylistPersonalDummyPage_root__tGxHG',
                cover: 'PlaylistPersonalDummyPage_cover__XcCD1',
                title: 'PlaylistPersonalDummyPage_title__ZSf9O',
                important: 'PlaylistPersonalDummyPage_important__uEHGe',
                text: 'PlaylistPersonalDummyPage_text__ci30d',
            };
        },
        57594: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => s, g: () => a });
            var i = r(29222),
                n = r(55178);
            let s = (0, n.createContext)(null);
            function a() {
                let e = (0, n.useContext)(s);
                if (null === e) throw new i.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        62376: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => s });
            var i = r(70204),
                n = r(34186);
            let s = () => (0, n.N)().get(i.Zf);
        },
        68557: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 41582));
        },
        70204: (e, t, r) => {
            'use strict';
            r.d(t, {
                $$: () => ei,
                $5: () => eo,
                $8: () => P,
                $I: () => h,
                $Y: () => eO,
                A4: () => u,
                CN: () => q,
                CR: () => _,
                DP: () => S,
                DT: () => eT,
                E: () => f,
                EN: () => i,
                Ez: () => ea,
                Hm: () => a,
                JM: () => et,
                K1: () => G,
                LC: () => eh,
                Lb: () => E,
                Lk: () => er,
                N1: () => ec,
                NN: () => j,
                O9: () => b,
                OP: () => d,
                Oo: () => x,
                P0: () => T,
                P1: () => Z,
                PL: () => ef,
                QG: () => I,
                RG: () => ex,
                SX: () => ep,
                TD: () => e_,
                TK: () => s,
                Tq: () => eS,
                U2: () => R,
                UB: () => eR,
                Ut: () => M,
                V3: () => m,
                VR: () => eC,
                W5: () => eg,
                WA: () => K,
                X4: () => w,
                X8: () => H,
                Xc: () => J,
                Zf: () => n,
                Zi: () => ey,
                Zl: () => Q,
                _1: () => p,
                aE: () => V,
                by: () => ev,
                c9: () => z,
                cZ: () => W,
                dA: () => eP,
                dh: () => em,
                en: () => X,
                eu: () => F,
                ff: () => ed,
                gd: () => es,
                gu: () => o,
                jQ: () => $,
                ki: () => Y,
                mr: () => c,
                nM: () => U,
                ni: () => ew,
                ok: () => L,
                oo: () => N,
                qN: () => k,
                qT: () => el,
                re: () => ee,
                ro: () => B,
                sv: () => en,
                tw: () => y,
                tz: () => v,
                u2: () => eu,
                uM: () => eE,
                vH: () => C,
                vg: () => eN,
                wH: () => A,
                wK: () => g,
                y$: () => l,
                yq: () => D,
                zj: () => O,
            });
            let i = 'AfterTrackResource',
                n = 'Logger',
                s = 'ModelActionsLogger',
                a = 'HttpClient',
                o = 'HttpBeaconClient',
                l = 'Slam',
                c = 'UgcUploadHttpClient',
                d = 'BaseResourceHttpClient',
                u = 'ResourceHttpClient',
                _ = 'ResourceBeaconClient',
                h = 'AccountResource',
                p = 'UsersResource',
                m = 'LandingResource',
                g = 'LandingBlocksResource',
                E = 'Landing3Resource',
                v = 'AlbumResource',
                f = 'SlidesResource',
                y = 'Config',
                T = 'TokenConfig',
                N = 'Storage',
                S = 'CookieStorage',
                R = 'LocalStorage',
                P = 'LibraryResource',
                O = 'LumenResource',
                x = 'TracksResource',
                C = 'SessionStorage',
                w = 'TopResource',
                b = 'ArtistsResource',
                I = 'Authorization',
                A = 'RedAlertResource',
                L = 'RotorResource',
                H = 'WaveResource',
                D = 'SearchResource',
                j = 'SearchPlaylistResource',
                k = 'PlaylistResource',
                B = 'PlaylistsResource',
                U = 'PinResource',
                M = 'MetatagsResource',
                G = 'TagResource',
                F = 'FeedResource',
                K = 'CONTAINER_USER_ID_TOKEN',
                V = 'PinsResource',
                Y = 'MusicHistoryResource',
                X = 'ChartResource',
                $ = 'ClipsResource',
                z = 'DynamicPagesResource',
                J = 'CONTAINER_I18N_STORAGE',
                W = 'LyricViewsResource',
                Q = 'NonMusicResource',
                q = 'DonationResource',
                Z = 'LoaderResource',
                ee = 'PrefixlessResource',
                et = 'StreamsResource',
                er = 'FiltersResource',
                ei = 'UgcResource',
                en = 'CollectionResource',
                es = 'AdsResource',
                ea = 'PersonalResource',
                eo = 'AvailabilityResource',
                el = 'GetFileInfoResource',
                ec = 'DisclaimersResource',
                ed = 'DisclaimerDictionary',
                eu = 'FamilyResource',
                e_ = 'ChildrenLandingResource',
                eh = 'TelemetryResource',
                ep = 'Env',
                em = 'PromoResource',
                eg = 'RumResource',
                eE = 'AcqOffers',
                ev = 'Ynison',
                ef = 'LabelsResource',
                ey = 'RequestExecutionContext',
                eT = 'ConcertsResource',
                eN = 'YaMetrikaController',
                eS = 'RumTransport',
                eR = 'YaMetrikaTransport',
                eP = 'WordsResource',
                eO = 'WheelResource',
                ex = 'MocksInitializer',
                eC = 'NetworkMonitorFactory',
                ew = 'SkeletonSdk';
        },
        73715: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => s });
            var i = r(60754),
                n = r(49399);
            let s = i.gK.model('LoadingState', { loadingState: i.gK.enumeration(Object.values(n.G)) }).views((e) => ({
                get isNeededToLoad() {
                    return e.loadingState === n.G.IDLE;
                },
                get isLoading() {
                    return e.loadingState === n.G.PENDING;
                },
                get isResolved() {
                    return e.loadingState === n.G.RESOLVE;
                },
                get isRejected() {
                    return e.loadingState === n.G.REJECT;
                },
            }));
        },
        74694: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => Y, V: () => V });
            var i = r(32290),
                n = r(96103),
                s = r(71768),
                a = r(27246),
                o = r(24116),
                l = r(63618),
                c = r(55178),
                d = r(21732),
                u = r(91027),
                _ = r(54862),
                h = r(71926),
                p = r(98740),
                m = r(57594),
                g = r(15509),
                E = r(12894),
                v = r(81471),
                f = r.n(v),
                y = r(85377),
                T = r(18518),
                N = r.n(T);
            let S = 'header-block-controls',
                R = (0, n.PA)((e) => {
                    let { showControls: t = !0, ...r } = e,
                        { isScrolledTitle: n, isScrolledChild: s, isScrolling: a, title: o, titleElement: v, child: T, childElement: R } = (0, c.useContext)(y.B),
                        {
                            settings: { isMobile: P, browserInfo: O },
                            user: { hasPlus: x, isAuthorized: C },
                        } = (0, m.g)(),
                        [w, b] = (0, _.d)(),
                        I = !x && !(null == O ? void 0 : O.isTouch),
                        {
                            openPaymentWidgetModal: A,
                            saveOfferAndAuthorize: L,
                            isShimmerActive: H,
                            isShimmerVisible: D,
                            mainText: j,
                            mainTextA11y: k,
                        } = (0, p.D)({ storeName: 'music', isEnabled: !x, offerElement: { element: w, intersectionPropertyId: S, isVisible: n, requireTransition: !0 } }),
                        B = (0, u.c)(() => {
                            var e;
                            null == v || null == (e = v.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        U = (0, u.c)(() => {
                            var e;
                            null == R || null == (e = R.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        M = (0, u.c)(() => {
                            if (!C) return void L();
                            A();
                        });
                    return (0, i.jsx)('header', {
                        className: (0, l.$)(N().root, { [N().root_sticky]: a, [N().root_withChildren]: s, [N().root_blurWithTitle]: !n }),
                        'data-test-id': d.S7.BRANDED_PLAYLIST_HEADER,
                        ...r,
                        children: (0, i.jsx)('div', {
                            className: N().header,
                            children: (0, i.jsxs)('div', {
                                className: (0, l.$)(N().container, { [N().container_withMultipleChildren]: (0, c.isValidElement)(T) }),
                                children: [
                                    (0, i.jsx)('div', { className: N().backdrop }),
                                    (0, i.jsxs)('div', {
                                        className: N().leftBlock,
                                        children: [
                                            t && (0, i.jsx)(E.L, { withForwardControl: !P, className: N().actions }),
                                            n &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)(h.HL, {
                                                            variant: 'div',
                                                            type: 'text',
                                                            className: (0, l.$)(N().title, { [N().title_show]: n, [N().title_withOffset]: t }),
                                                            lineClamp: 1,
                                                            onClick: B,
                                                            title: a && o ? o : '',
                                                            'aria-hidden': !0,
                                                            children: o,
                                                        }),
                                                        I &&
                                                            (0, i.jsx)(g.b, {
                                                                mainText: j,
                                                                ariaLabel: k,
                                                                mainTextFontSize: 'm',
                                                                ref: b,
                                                                onClick: M,
                                                                isShimmerActive: H,
                                                                isShimmerVisible: D,
                                                                className: f().plusButton,
                                                                'data-intersection-property-id': S,
                                                                'data-test-id': d.S7.HEADER_PLUS_BUTTON,
                                                            }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                    (0, c.isValidElement)(T) &&
                                        (0, i.jsx)('div', { onClick: U, className: (0, l.$)(N().child, { [N().child_show]: s }), 'aria-hidden': !0, children: T }),
                                ],
                            }),
                        }),
                    });
                });
            var P = r(50396),
                O = r.n(P);
            let x = 'header-block-controls',
                C = (e) => {
                    let { className: t, children: r, onClick: n, 'aria-hidden': s, 'data-testid': a } = e,
                        { isScrolling: o } = (0, c.useContext)(y.B),
                        {
                            user: { hasPlus: h, isAuthorized: E },
                            settings: { browserInfo: v },
                        } = (0, m.g)(),
                        T = !h && !(null == v ? void 0 : v.isTouch),
                        [N, S] = (0, _.d)(),
                        {
                            openPaymentWidgetModal: R,
                            saveOfferAndAuthorize: P,
                            isShimmerActive: C,
                            isShimmerVisible: w,
                            mainText: b,
                            mainTextA11y: I,
                        } = (0, p.D)({ storeName: 'music', isEnabled: !h, offerElement: { element: N, intersectionPropertyId: x, isVisible: o, requireTransition: !0 } }),
                        A = (0, u.c)(() => {
                            if (!E) return void P();
                            R();
                        });
                    return (0, i.jsx)('div', {
                        className: O().root,
                        children: (0, i.jsxs)('div', {
                            className: (0, l.$)(O().container, { [O().container_scrolling]: o }, t),
                            onClick: n,
                            'aria-hidden': s,
                            'data-testid': a,
                            'data-test-id': d.S7.STICKY_HEADER,
                            children: [
                                (0, i.jsx)('div', { className: O().backdrop }),
                                (0, i.jsx)('div', { className: O().children, children: r }),
                                T &&
                                    (0, i.jsx)(g.b, {
                                        mainText: b,
                                        ariaLabel: I,
                                        mainTextFontSize: 'm',
                                        ref: S,
                                        onClick: A,
                                        isShimmerActive: C,
                                        isShimmerVisible: w,
                                        className: (0, l.$)(f().plusButton, O().plusButton, { [O().plusButton_show]: o }),
                                        'data-intersection-property-id': x,
                                        'data-test-id': d.S7.HEADER_PLUS_BUTTON,
                                    }),
                            ],
                        }),
                    });
                };
            var w = r(98610),
                b = r.n(w);
            let I = (0, n.PA)((e) => {
                let {
                        className: t,
                        children: r,
                        stickyChild: n,
                        isScrolledToTop: s = !0,
                        staticClassName: a,
                        stickyClassName: o,
                        compositeHeaderRef: u,
                        'aria-hidden': _,
                    } = e,
                    { isScrolling: h, scrollElement: p } = (0, c.useContext)(y.B),
                    m = (0, c.useRef)(null),
                    g = (0, c.useCallback)(() => {
                        if (p && s) p.scrollTo({ top: 0, behavior: 'smooth' });
                        else {
                            var e;
                            null == m || null == (e = m.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }
                    }, [m, p, s]);
                return (0, i.jsxs)('header', {
                    className: (0, l.$)(b().root, t),
                    'aria-hidden': _,
                    ref: u,
                    'data-test-id': d.S7.COMPOSITE_HEADER_CONTAINER,
                    children: [
                        (0, i.jsx)('div', { className: (0, l.$)(b().static, { [b().static_hidden]: h }, a), ref: m, 'data-test-id': d.S7.COMPOSITE_HEADER, children: r }),
                        (0, i.jsx)(C, { className: o, onClick: g, 'aria-hidden': !0, 'data-test-id': d.S7.COMPOSITE_STICKY_HEADER, children: n }),
                    ],
                });
            });
            var A = r(48870),
                L = r.n(A);
            let H = 'header-block-controls',
                D = (0, n.PA)((e) => {
                    let { headerRef: t, ...r } = e,
                        { isScrolledTitle: n, isScrolledChild: s, isScrolling: a, title: o, titleElement: v, child: T, childElement: N } = (0, c.useContext)(y.B),
                        {
                            settings: { isMobile: S, browserInfo: R },
                            user: { hasPlus: P, isAuthorized: O },
                        } = (0, m.g)(),
                        [x, C] = (0, _.d)(),
                        w = !P && !(null == R ? void 0 : R.isTouch),
                        {
                            openPaymentWidgetModal: b,
                            saveOfferAndAuthorize: I,
                            isShimmerActive: A,
                            isShimmerVisible: D,
                            mainText: j,
                            mainTextA11y: k,
                        } = (0, p.D)({ storeName: 'music', isEnabled: !P, offerElement: { element: x, intersectionPropertyId: H, isVisible: n, requireTransition: !0 } }),
                        B = (0, u.c)(() => {
                            var e;
                            null == v || null == (e = v.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        U = (0, u.c)(() => {
                            var e;
                            null == N || null == (e = N.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        M = (0, u.c)(() => {
                            if (!O) return void I();
                            b();
                        });
                    return (0, i.jsx)('header', {
                        className: (0, l.$)(f().inner, L().root, { [L().root_sticky]: a, [L().root_withChildren]: s }),
                        ref: t,
                        'data-test-id': d.S7.INNER_HEADER,
                        ...r,
                        children: (0, i.jsx)('div', {
                            className: f().header,
                            children: (0, i.jsxs)('div', {
                                className: f().container,
                                children: [
                                    (0, i.jsx)('div', { className: L().backdrop }),
                                    (0, i.jsxs)('div', {
                                        className: f().leftBlock,
                                        children: [
                                            (0, i.jsx)(E.L, { withForwardControl: !S, className: L().actions }),
                                            (0, i.jsx)(h.HL, {
                                                variant: 'div',
                                                type: 'text',
                                                className: (0, l.$)(f().title, L().title, { [L().title_show]: n }),
                                                lineClamp: 1,
                                                onClick: B,
                                                title: a && o ? o : '',
                                                'aria-hidden': !0,
                                                children: o,
                                            }),
                                            w &&
                                                (0, i.jsx)(g.b, {
                                                    mainText: j,
                                                    ariaLabel: k,
                                                    mainTextFontSize: 'm',
                                                    ref: C,
                                                    onClick: M,
                                                    isShimmerActive: A,
                                                    isShimmerVisible: D,
                                                    className: (0, l.$)(f().plusButton, L().plusButton, { [L().plusButton_show]: n }),
                                                    'data-intersection-property-id': H,
                                                    'data-test-id': d.S7.HEADER_PLUS_BUTTON,
                                                }),
                                        ],
                                    }),
                                    (0, i.jsx)('div', { onClick: U, className: (0, l.$)(L().child, { [L().child_show]: s }), 'aria-hidden': !0, children: T }),
                                ],
                            }),
                        }),
                    });
                });
            var j = r(86838),
                k = r.n(j);
            let B = 'header-block-controls',
                U = (e) => {
                    let { style: t } = e,
                        { isScrolling: r, title: n, titleElement: s, isScrolledTitle: a } = (0, c.useContext)(y.B),
                        {
                            user: { hasPlus: o, isAuthorized: E },
                            settings: { browserInfo: v },
                        } = (0, m.g)(),
                        T = !o && !(null == v ? void 0 : v.isTouch),
                        [N, S] = (0, _.d)(),
                        {
                            openPaymentWidgetModal: R,
                            saveOfferAndAuthorize: P,
                            isShimmerActive: O,
                            isShimmerVisible: x,
                            mainText: C,
                            mainTextA11y: w,
                        } = (0, p.D)({ storeName: 'music', isEnabled: !o, offerElement: { element: N, intersectionPropertyId: B, isVisible: a, requireTransition: !0 } }),
                        b = (0, u.c)(() => {
                            var e;
                            null == s || null == (e = s.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        I = (0, u.c)(() => {
                            if (!E) return void P();
                            R();
                        });
                    return (0, i.jsx)('header', {
                        className: (0, l.$)(f().inner, k().root, { [k().root_visible]: a }),
                        style: t,
                        'data-test-id': d.S7.PROMO_LANDING_HEADER,
                        children: (0, i.jsx)('div', {
                            className: f().header,
                            children: (0, i.jsxs)('div', {
                                className: (0, l.$)(f().container, k().container),
                                children: [
                                    (0, i.jsx)('div', { className: k().backdrop }),
                                    (0, i.jsxs)('div', {
                                        className: f().leftBlock,
                                        children: [
                                            (0, i.jsx)(h.HL, {
                                                variant: 'div',
                                                type: 'text',
                                                className: (0, l.$)(f().title, k().title),
                                                lineClamp: 1,
                                                onClick: b,
                                                title: r && n ? n : '',
                                                'aria-hidden': !0,
                                                children: n,
                                            }),
                                            T &&
                                                (0, i.jsx)(g.b, {
                                                    mainText: C,
                                                    ariaLabel: w,
                                                    mainTextFontSize: 'm',
                                                    ref: S,
                                                    onClick: I,
                                                    isShimmerActive: O,
                                                    isShimmerVisible: x,
                                                    className: f().plusButton,
                                                    'data-intersection-property-id': B,
                                                    'data-test-id': d.S7.HEADER_PLUS_BUTTON,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    });
                };
            var M = r(47584),
                G = r.n(M);
            let F = 'header-block-controls',
                K = (0, n.PA)((e) => {
                    let { className: t, children: r, showControls: n = !0, withForwardControl: s = !0, withBackwardControl: a = !0, disableStickyVariant: o = !1 } = e,
                        { isScrolling: v, title: T, scrollElement: N, isHeaderHidden: S } = (0, c.useContext)(y.B),
                        R = (0, c.useRef)(null),
                        [P, O] = (0, _.d)(),
                        {
                            user: { hasPlus: x, isAuthorized: C },
                            settings: { browserInfo: w },
                        } = (0, m.g)(),
                        b = !x && !(null == w ? void 0 : w.isTouch),
                        {
                            openPaymentWidgetModal: I,
                            saveOfferAndAuthorize: A,
                            isShimmerActive: L,
                            isShimmerVisible: H,
                            mainText: D,
                            mainTextA11y: j,
                        } = (0, p.D)({ storeName: 'music', isEnabled: !x, offerElement: { element: P, intersectionPropertyId: F, isVisible: v, requireTransition: !0 } }),
                        k = (0, u.c)(() => {
                            if (N) N.scrollTo({ top: 0, behavior: 'smooth' });
                            else {
                                var e;
                                null == R || null == (e = R.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                            }
                        }),
                        B = (0, c.useMemo)(() => (0, i.jsx)(h.DZ, { variant: 'h2', weight: 'bold', size: 's', lineClamp: 1, children: T }), [T]),
                        U = n && (s || a),
                        M = (0, u.c)(() => {
                            if (!C) return void A();
                            I();
                        });
                    return (0, i.jsxs)('header', {
                        className: (0, l.$)(G().root, t),
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, l.$)(G().staticItem, { [G().staticItem_hide]: v || S }),
                                ref: R,
                                'data-test-id': d.S7.TEXT_HEADER,
                                children: [U && (0, i.jsx)(E.L, { withForwardControl: s, withBackwardControl: a }), r],
                            }),
                            !o &&
                                (0, i.jsxs)('div', {
                                    className: (0, l.$)(G().stickyItem, { [G().stickyItem_scrolling]: v }),
                                    onClick: k,
                                    'aria-hidden': !0,
                                    'data-test-id': d.S7.TEXT_STICKY_HEADER,
                                    children: [
                                        (0, i.jsx)('div', { className: G().backdrop }),
                                        (0, i.jsxs)('div', {
                                            className: G().container,
                                            children: [U && (0, i.jsx)(E.L, { withForwardControl: s, withBackwardControl: a, shouldFocusOnMount: !1 }), B],
                                        }),
                                        b &&
                                            (0, i.jsx)(g.b, {
                                                mainText: D,
                                                ariaLabel: j,
                                                mainTextFontSize: 'm',
                                                ref: O,
                                                onClick: M,
                                                isShimmerActive: L,
                                                isShimmerVisible: H,
                                                className: f().plusButton,
                                                'data-intersection-property-id': F,
                                                'data-test-id': d.S7.HEADER_PLUS_BUTTON,
                                            }),
                                    ],
                                }),
                        ],
                    });
                });
            var V = (function (e) {
                return (
                    (e.INNER = 'INNER'),
                    (e.TEXT = 'TEXT'),
                    (e.COMPOSITE = 'COMPOSITE'),
                    (e.PROMO_LANDING = 'PROMO_LANDING'),
                    (e.BRANDED_PLAYLIST = 'BRANDED_PLAYLIST'),
                    (e.STICKY = 'STICKY'),
                    e
                );
            })({});
            let Y = (0, n.PA)((e) => {
                let {
                    variant: t = 'INNER',
                    style: r,
                    children: n,
                    showControls: l,
                    withBackwardControl: c,
                    withForwardControl: d,
                    className: u = '',
                    stickyChild: _,
                    staticClassName: h,
                    stickyClassName: p,
                    innerHeaderRef: m,
                    compositeHeaderRef: g,
                    disableStickyVariant: E,
                    ...v
                } = e;
                switch (t) {
                    case 'INNER':
                        return (0, i.jsx)(s.r, { page: a.l.HEADER, places: [o.R.BUTTON], children: (0, i.jsx)(D, { headerRef: m, style: r }) });
                    case 'TEXT':
                        return (0, i.jsx)(s.r, {
                            page: a.l.HEADER,
                            places: [o.R.BUTTON],
                            children: (0, i.jsx)(K, { showControls: l, withBackwardControl: c, withForwardControl: d, disableStickyVariant: E, children: n }),
                        });
                    case 'COMPOSITE':
                        return (0, i.jsx)(s.r, {
                            page: a.l.HEADER,
                            places: [o.R.BUTTON],
                            children: (0, i.jsx)(I, { className: u, stickyChild: _, staticClassName: h, stickyClassName: p, compositeHeaderRef: g, ...v, children: n }),
                        });
                    case 'PROMO_LANDING':
                        return (0, i.jsx)(s.r, { page: a.l.HEADER, places: [o.R.BUTTON], children: (0, i.jsx)(U, { style: r }) });
                    case 'BRANDED_PLAYLIST':
                        return (0, i.jsx)(s.r, { page: a.l.HEADER, places: [o.R.BUTTON], children: (0, i.jsx)(R, { showControls: l, children: n }) });
                    case 'STICKY':
                        return (0, i.jsx)('header', {
                            className: u,
                            children: (0, i.jsx)(s.r, { page: a.l.HEADER, places: [o.R.BUTTON], children: (0, i.jsx)(C, { className: p, ...v, children: _ }) }),
                        });
                }
            });
        },
        78061: (e, t, r) => {
            'use strict';
            r.d(t, { Jt: () => s, TF: () => o, hZ: () => a });
            var i = function () {
                return (i =
                    Object.assign ||
                    function (e) {
                        for (var t, r = 1, i = arguments.length; r < i; r++)
                            for (var n in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e;
                    }).apply(this, arguments);
            };
            function n(e, t) {
                if (!t) return '';
                var r = '; ' + e;
                return !0 === t ? r : r + '=' + t;
            }
            function s(e) {
                return (function (e) {
                    for (var t = {}, r = e ? e.split('; ') : [], i = 0; i < r.length; i++) {
                        var n = r[i].split('='),
                            s = n.slice(1).join('=');
                        '"' === s[0] && (s = s.slice(1, -1));
                        try {
                            t[decodeURIComponent(n[0])] = s.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function a(e, t, r) {
                var s;
                document.cookie =
                    ((s = i({ path: '/' }, r)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t);
                            }
                            return (
                                n('Expires', e.expires ? e.expires.toUTCString() : '') +
                                n('Domain', e.domain) +
                                n('Path', e.path) +
                                n('Secure', e.secure) +
                                n('SameSite', e.sameSite)
                            );
                        })(s));
            }
            function o(e, t) {
                a(e, '', i(i({}, t), { expires: -1 }));
            }
        },
        81471: (e) => {
            e.exports = {
                inner: 'CommonHeader_inner__DFpbr',
                header: 'CommonHeader_header__41HAE',
                container: 'CommonHeader_container__Jgf0s',
                leftBlock: 'CommonHeader_leftBlock__dJUBK',
                title: 'CommonHeader_title__RSbBG',
                plusButton: 'CommonHeader_plusButton__oe8Gh',
            };
        },
        82542: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        85377: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => i });
            let i = (0, r(55178).createContext)({
                title: null,
                setTitle: () => {},
                titleElement: null,
                scrollElement: null,
                setTitleElement: () => {},
                child: null,
                setChild: () => {},
                childElement: null,
                setChildElement: () => {},
                isScrolledChild: !1,
                isScrolledTitle: !1,
                isScrolling: !1,
                isHeaderHidden: !1,
            });
        },
        86838: (e) => {
            e.exports = {
                inner: 'PromoLandingHeader_inner__hKls8',
                header: 'PromoLandingHeader_header__gKwtu',
                container: 'PromoLandingHeader_container__JD5rw',
                leftBlock: 'PromoLandingHeader_leftBlock__jEcOR',
                title: 'PromoLandingHeader_title__LqClE',
                plusButton: 'PromoLandingHeader_plusButton__27yUf',
                backdrop: 'PromoLandingHeader_backdrop__AYF3a',
                root: 'PromoLandingHeader_root__zLOun',
                root_visible: 'PromoLandingHeader_root_visible__yB3YQ',
            };
        },
        87953: (e, t, r) => {
            'use strict';
            r.d(t, { GX: () => s.G, X1: () => i.X, m5: () => n.m });
            var i = r(50961),
                n = r(50891),
                s = r(10733);
            r(33898);
        },
        96218: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => n, s: () => i });
            let i = 'yMusicStatePatchesUpdated',
                n = 'yMusicPageStatePatchesUpdated';
        },
        98610: (e) => {
            e.exports = { static: 'CompositeHeader_static__pZdrc', static_hidden: 'CompositeHeader_static_hidden__jHPYh' };
        },
    },
    (e) => {
        e.O(0, [7034, 4450, 6639, 6706, 1311, 8892, 2536, 66, 5835, 2812, 2732, 1410, 6477, 2586, 8347, 7702, 4668, 4220, 9562, 7358], () => e((e.s = 68557))),
            (_N_E = e.O());
    },
]);
