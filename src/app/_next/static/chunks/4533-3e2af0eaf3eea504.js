(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4533],
    {
        117: (e) => {
            e.exports = { root: 'SlideLogo_root__7H7nw' };
        },
        148: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        2855: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { y: () => i }),
                (function (e) {
                    ((e.LINEUP = 'LINEUP'), (e.LINEUP_WITH_FESTIVAL = 'LINEUP_WITH_FESTIVAL'), (e.LINEUP_WITH_FESTIVAL_IMAGE = 'LINEUP_WITH_FESTIVAL_IMAGE'));
                })(i || (i = {})));
        },
        3382: (e) => {
            e.exports = { root: 'Slide_root__x5JEM', root_isActive: 'Slide_root_isActive__CKUSv' };
        },
        3669: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => C });
            var i = a(74631),
                l = a(67379),
                s = a(17850),
                r = a(59450),
                n = a(49656),
                o = a(84e3),
                c = a(58069),
                d = a(20258),
                u = a(26742),
                _ = a(25195),
                m = a(37314),
                v = a(25488),
                x = a(97952),
                p = a(10764),
                h = a(72594);
            let C = () => {
                let e = (0, o.U)(),
                    t = (0, r.st)(),
                    { hash: a } = (0, r.gf)(),
                    { pageId: C, displayReasonId: g } = (0, x.$)(),
                    { tabId: I, tabPos: S, isTabSelectedByDefault: T } = (0, h.R)(),
                    { offsetBlockPosY: f } = (0, _.u)(),
                    { blockType: A, blockId: E, blockPosX: L, blockPosY: N, mainObjectId: b, mainObjectType: y, displayReasonId: j } = (0, u.N)(),
                    { filterKey: R, filterValue: k, filterPos: O } = (0, m.G)(),
                    { objectType: w, objectsCount: P, objectId: B, objectPosX: D, objectPosY: M } = (0, v.J)(),
                    { skeleton: U } = (0, p.b)(),
                    z = null != j ? j : g,
                    F = (0, n.L)(() => (void 0 !== f && void 0 !== N ? f + N : N));
                return (0, i.useCallback)(
                    (i, r) => {
                        if (!t || !C || !d.xK.includes(C) || !d.fD.includes(C)) return;
                        let n = c.F[C];
                        if (!n) return;
                        let o = {
                            hash: a,
                            pageId: n,
                            entityType: A,
                            entityId: E,
                            entityPosX: L,
                            entityPosY: F,
                            objectsCount: P,
                            viewUuid: r,
                            objectType: w,
                            objectId: B,
                            objectPosX: D,
                            objectPosY: M,
                        };
                        (void 0 !== R && ((o.filterKey = R), (o.filterValue = k), (o.filterPos = O)),
                            d.qG.includes(C) && ((o.tabId = I), (o.tabPos = S), (o.isTabSelectedByDefault = T)),
                            U && (o.skeletonId = U),
                            'string' == typeof b && 'string' == typeof y && ((o.mainObjectType = y), (o.mainObjectId = b)),
                            z && (o.displayReasonId = z));
                        let u = (0, l.F)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (i ? (0, s.Pf)(t.evgenInstance, u) : (0, s.nv)(t.evgenInstance, u));
                    },
                    [t, z, E, L, F, A, R, O, k, a, T, e, b, y, B, D, M, w, P, C, U, I, S],
                );
            };
        },
        4663: (e) => {
            e.exports = { root: 'LineupArtistsWrapper_root__RAY_j' };
        },
        5834: (e) => {
            e.exports = {
                root: 'CollageContent_root__NLzGo',
                slide: 'CollageContent_slide__5PvMl',
                topBlock: 'CollageContent_topBlock__7ckc_',
                topBlockBackground: 'CollageContent_topBlockBackground__y6HYf',
                topBlockImageWrapper: 'CollageContent_topBlockImageWrapper__Yc87n',
                topBlockImage: 'CollageContent_topBlockImage__tePia',
                subtitle: 'CollageContent_subtitle__M4cCR',
                title: 'CollageContent_title__35r5H',
                bottomBlock: 'CollageContent_bottomBlock__lSJaw',
                bottomBlock_item: 'CollageContent_bottomBlock_item__kSW3C',
            };
        },
        6323: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => o });
            var i = a(25839),
                l = a(74631),
                s = a(61493),
                r = a(23818);
            let n = (e) => {
                    let { isAvailable: t = !0, className: a, fallbackIconSize: l, forwardRef: n, ...o } = e;
                    return t
                        ? (0, i.jsx)(r._V, { ref: n, className: a, fallbackIconSize: l, ...o, 'data-test-id': s.S7.ENTITY_COVER_IMAGE })
                        : (0, i.jsx)(r.Ab, { className: a, iconSize: l, iconVariant: 'unavailable', 'data-test-id': s.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                o = (0, l.forwardRef)((e, t) => (0, i.jsx)(n, { forwardRef: t, ...e }));
        },
        8438: (e) => {
            e.exports = {
                root: 'ActionButton_root__YMLj2',
                cover: 'ActionButton_cover__04uzU',
                image: 'ActionButton_image__Lrf7N',
                text: 'ActionButton_text__wPgyi',
                icon: 'ActionButton_icon__fKoaq',
            };
        },
        10322: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => r });
            var i = a(25839),
                l = a(74631),
                s = a(82064);
            let r = (e) => {
                let { pageId: t, pageEntityId: a, displayReasonId: r, pageStyle: n, pagePlacement: o, children: c } = e,
                    d = (0, l.useMemo)(() => ({ pageId: t, pageEntityId: a, displayReasonId: r, pageStyle: n, pagePlacement: o }), [t, a, r, n, o]);
                return (0, i.jsx)(s.r.Provider, { value: d, children: c });
            };
        },
        11547: (e) => {
            e.exports = {
                root: 'Background_root__s7ccu',
                media_withPersonalColor: 'Background_media_withPersonalColor__KuaB0',
                firstFrame: 'Background_firstFrame__c5Gw0',
                lastFrame: 'Background_lastFrame__sfpL7',
                media: 'Background_media__8DaeZ',
                shareBackground: 'Background_shareBackground__vmgH2',
                hidden: 'Background_hidden__7fdP5',
                backgroundFadeIn: 'Background_backgroundFadeIn__6yd3z',
                'background-fade-in': 'Background_background-fade-in__AJNN6',
            };
        },
        11977: (e) => {
            e.exports = {
                root: 'ChartItem_root__nAl8B',
                animation: 'ChartItem_animation__P8XVq',
                cover: 'ChartItem_cover__jybex',
                order: 'ChartItem_order__rTmAw',
                image: 'ChartItem_image__enYFm',
                meta: 'ChartItem_meta__apT_y',
                text: 'ChartItem_text__qRsWe',
                textVariant: 'ChartItem_textVariant__0NuuM',
                subTitle: 'ChartItem_subTitle__J2Znt',
                stat: 'ChartItem_stat__ofy5i',
                statValueContainer: 'ChartItem_statValueContainer__pn9Ck',
                statValue: 'ChartItem_statValue__fu5js',
            };
        },
        13232: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => i });
            let i = (0, a(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        14156: (e) => {
            e.exports = {
                root: 'SingleEntityContent_root__N2vvp',
                description: 'SingleEntityContent_description__3pg2A',
                smallRoundCover: 'SingleEntityContent_smallRoundCover__jicWf',
                smallRoundCover_withShadow: 'SingleEntityContent_smallRoundCover_withShadow__cjRgd',
                cover: 'SingleEntityContent_cover__zeDqH',
                cover_withShadow: 'SingleEntityContent_cover_withShadow__tMIE1',
                cover_withSmallRoundCoverOnCover: 'SingleEntityContent_cover_withSmallRoundCoverOnCover__8kG3v',
                cover_small: 'SingleEntityContent_cover_small___jnS4',
                meta: 'SingleEntityContent_meta__XxJqA',
                meta_withCover: 'SingleEntityContent_meta_withCover__Bp0Tx',
                image: 'SingleEntityContent_image__P6nK2',
                trailer: 'SingleEntityContent_trailer__uYOk0',
                subtitle: 'SingleEntityContent_subtitle__KuJyA',
            };
        },
        14693: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => o });
            var i,
                l = a(74631),
                s = {
                    810: (e) => {
                        e.exports = i || (i = a.t(l, 2));
                    },
                },
                r = {},
                n = {};
            ((() => {
                (Object.defineProperty(n, '__esModule', { value: !0 }), (n.useToggle = void 0));
                let e = (function e(t) {
                    var a = r[t];
                    if (void 0 !== a) return a.exports;
                    var i = (r[t] = { exports: {} });
                    return (s[t](i, i.exports, e), i.exports);
                })(810);
                n.useToggle = (t) => {
                    let [a, i] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        i(t);
                    }, [t]);
                    let l = (0, e.useCallback)(() => {
                            i((e) => !e);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            i(!0);
                        }, []),
                        r = (0, e.useCallback)(() => {
                            i(!1);
                        }, []);
                    return { state: a, toggle: l, setState: i, toggleTrue: s, toggleFalse: r };
                };
            })(),
                n.__esModule);
            var o = n.useToggle;
        },
        16637: (e) => {
            e.exports = { root: 'LineupContentItem_root__h3Olw', background: 'LineupContentItem_background__w1inW', content: 'LineupContentItem_content__fvXBe' };
        },
        16978: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => m });
            var i = a(25839),
                l = a(84059),
                s = a(8487),
                r = a(61493),
                n = a(71035),
                o = a(4071),
                c = a(4254),
                d = a(57024),
                u = a(36484),
                _ = a(62562);
            let m = (e) => {
                let { size: t = 'm', variant: a = 'default', color: m = 'primary', withRipple: v = !0, buttonText: x, isBlock: p, key: h, className: C } = e,
                    g = (0, l.useRouter)(),
                    I = (0, _.N)().get(u.QG),
                    S = (0, n.c)(() => {
                        I.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), g.push(I.authorizationUrl));
                    });
                return (0, i.jsx)(
                    o.$,
                    {
                        onClick: S,
                        className: C,
                        isBlock: p,
                        color: m,
                        variant: a,
                        size: t,
                        radius: 'xxxl',
                        withRipple: v,
                        'data-test-id': r.S7.UNAUTHORIZED_BUTTON,
                        children: x || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(s.A, { id: 'authorization.enter-button' }) }),
                    },
                    h,
                );
            };
        },
        20583: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => r });
            var i = a(10508),
                l = a(74631),
                s = a(21784);
            let r = (e) => {
                let t = (0, s.W)(),
                    a = (0, l.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    r = (0, l.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: a, moveForward: r };
            };
        },
        20790: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => s });
            var i = a(74631),
                l = a(73810);
            let s = () => (0, i.useContext)(l.P);
        },
        21213: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => l });
            var i = a(36095);
            let l = (e, t, a) => {
                let l = null != t ? t : i.wT,
                    s = null != a ? a : i.by,
                    r = (0, i.de)((0, i.aq)(e), l, s),
                    n = Math.round(255 * r[0]),
                    o = Math.round(255 * r[1]),
                    c = Math.round(255 * r[2]);
                return 'rgb('.concat(n, ', ').concat(o, ', ').concat(c, ')');
            };
        },
        22120: (e) => {
            e.exports = { root: 'ChartFavoriteContent_root__ksE_w', description: 'ChartFavoriteContent_description__CCBKM' };
        },
        23775: (e) => {
            e.exports = { root: 'BaseNotificationError_root__FfGUZ', message: 'BaseNotificationError_message___W_xy' };
        },
        27075: (e) => {
            e.exports = {
                header: 'LineupFestivalItem_header__VpBfn',
                headerLogo: 'LineupFestivalItem_headerLogo__tVwIZ',
                metaLabel: 'LineupFestivalItem_metaLabel__hc66P',
                festivalImage: 'LineupFestivalItem_festivalImage__JGaxU',
                artist: 'LineupFestivalItem_artist__ZTsFm',
                artists: 'LineupFestivalItem_artists__YKO8W',
                artistList: 'LineupFestivalItem_artistList__FpJ5r',
            };
        },
        27954: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => s, g: () => r });
            var i = a(74631),
                l = a(36432);
            let s = (0, i.createContext)(null);
            function r() {
                let e = (0, i.useContext)(s);
                if (null === e) throw new l.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        28340: (e) => {
            e.exports = { root: 'TextExtendedContent_root__vzsuG', text: 'TextExtendedContent_text__ksTX_', header: 'TextExtendedContent_header__yn1Ej' };
        },
        30290: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => _ });
            var i = a(74631);
            a(93588);
            var l = a(26742),
                s = a(97952),
                r = a(84059),
                n = a(40110),
                o = a(22939),
                c = a(20258),
                d = a(98074);
            let u = [n.U.TRAILER],
                _ = (e) => {
                    let t = ((e) => {
                            let t = null == e ? void 0 : e.pageId,
                                a = null == e ? void 0 : e.blockId,
                                r = null == e ? void 0 : e.pageEntityId,
                                { pageId: n, pageEntityId: o } = (0, s.$)(),
                                { blockId: c } = (0, l.N)();
                            return (0, i.useMemo)(() => ({ pageId: null != t ? t : n, blockId: null != a ? a : c, pageEntityId: null != r ? r : o }), [a, c, t, r, n, o]);
                        })(e),
                        a = ((e) => {
                            let { pageId: t, blockId: a } = e;
                            return (0, i.useMemo)(() => {
                                let e = ['desktop'];
                                return (t && e.push(t.toLowerCase()), a && e.push(a.toLowerCase()), e.push('default'), e.join('-'));
                            }, [a, t]);
                        })(t),
                        n = ((e) => {
                            let { pageId: t, blockId: a, pageEntityId: l, contextType: s, contextId: n, utmForPageIds: _ } = e,
                                m = (0, r.useSearchParams)();
                            return (0, i.useMemo)(
                                () =>
                                    ((e) => {
                                        let { searchParams: t, pageId: a, pageEntityId: i, utmForPageIds: l, contextId: s, contextType: r, blockId: n } = e,
                                            _ = t && Object.fromEntries(t),
                                            m = ((e) => {
                                                switch (e) {
                                                    case c._Q.ALBUM:
                                                    case c._Q.PROMOLANDING_ALBUM:
                                                    case c._Q.AUDIOBOOK:
                                                    case c._Q.PODCAST:
                                                        return o.K.Album;
                                                    case c._Q.ARTIST:
                                                    case c._Q.ARTIST_TRACKS:
                                                    case c._Q.ARTIST_ALBUMS:
                                                    case c._Q.ARTIST_DISCOGRAPHY:
                                                        return o.K.Artist;
                                                    case c._Q.PLAYLIST:
                                                        return o.K.Playlist;
                                                    default:
                                                        return null;
                                                }
                                            })(a);
                                        return !m || !_ || !i || u.includes(n)
                                            ? null
                                            : (Array.isArray(l) ? l.map((e) => String(e)).includes(String(i)) : !!s && m === r && String(s) === String(i)) && _
                                              ? (0, d.Z)(_)
                                              : null;
                                    })({ searchParams: m, pageId: t, pageEntityId: l, utmForPageIds: _, contextId: n, contextType: s, blockId: a }),
                                [m, t, l, n, s, a, _],
                            );
                        })({
                            ...t,
                            contextType: null == e ? void 0 : e.contextType,
                            contextId: null == e ? void 0 : e.contextId,
                            utmForPageIds: null == e ? void 0 : e.utmForPageIds,
                        });
                    return (0, i.useMemo)(() => ({ from: a, utmLink: n || void 0 }), [a, n]);
                };
        },
        30296: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => l, e: () => s });
            var i = a(74631);
            let l = (0, i.createContext)(null);
            function s() {
                return (0, i.useContext)(l);
            }
        },
        30871: (e, t, a) => {
            'use strict';
            a.d(t, { WithAuth: () => x });
            var i = a(25839),
                l = a(88204),
                s = a(84059),
                r = a(82298),
                n = a(8487),
                o = a(4254),
                c = a(16978),
                d = a(148),
                u = a.n(d);
            let _ = (0, l.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(o.DZ, {
                            className: (0, r.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(n.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(o.HL, {
                            className: (0, r.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(n.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = a(53712),
                v = a(27954);
            let x = (0, l.PA)((e) => {
                let { children: t, withRedirectToMainPage: a } = e,
                    { user: l } = (0, v.g)();
                return l.isAuthorized ? t : (a && (0, s.redirect)(m.Z.main.href), (0, i.jsx)(_, {}));
            });
        },
        31860: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { f: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        32964: (e) => {
            e.exports = { root: 'MaskedImageWithBackground_root__jLo5w', background: 'MaskedImageWithBackground_background__9PdlN' };
        },
        33045: (e) => {
            e.exports = {
                root: 'SlideCard_root__RSnvj',
                background: 'SlideCard_background__dftlE',
                logoContainer: 'SlideCard_logoContainer__1XaMN',
                logo: 'SlideCard_logo__ocv3o',
                buttonsContainer: 'SlideCard_buttonsContainer__ynOyN',
                wideContent: 'SlideCard_wideContent__TSSJ9',
                playAnimation: 'SlideCard_playAnimation__rFZZ3',
                fade: 'SlideCard_fade__2HpC6',
                content: 'SlideCard_content__7Y6aU',
                content_align_top: 'SlideCard_content_align_top__fDfyz',
                content_align_center: 'SlideCard_content_align_center__QFnxv',
                content_align_bottom: 'SlideCard_content_align_bottom__nsslT',
                button: 'SlideCard_button__EYX_G',
            };
        },
        33202: (e) => {
            e.exports = { root: 'CommonButton_root__thXs_' };
        },
        33804: (e) => {
            e.exports = {
                root: 'ThenNowComparison_root__sAUJF',
                row: 'ThenNowComparison_row__1osE7',
                textPrimary: 'ThenNowComparison_textPrimary__mXrAG',
                textSecondary: 'ThenNowComparison_textSecondary__O5HTV',
                cover: 'ThenNowComparison_cover___UkLn',
                itemLabel: 'ThenNowComparison_itemLabel__L_vTN',
                itemMeta: 'ThenNowComparison_itemMeta__TqbEJ',
                header: 'ThenNowComparison_header__tWhL1',
            };
        },
        36159: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => i });
            var i = (function (e) {
                return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e);
            })({});
        },
        40110: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => i });
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
        41392: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { x: () => i }),
                (function (e) {
                    ((e.TEXT = 'TEXT'),
                        (e.TEXT_FACT = 'TEXT_FACT'),
                        (e.STATS = 'STATS'),
                        (e.CHART = 'CHART'),
                        (e.CHART_FAVORITES = 'CHART_FAVORITES'),
                        (e.SINGLE_ENTITY = 'SINGLE_ENTITY'),
                        (e.ARTISTS = 'ARTISTS'),
                        (e.CHART_ARTIST = 'CHART_ARTIST'),
                        (e.TEXT_EXTENDED = 'TEXT_EXTENDED'),
                        (e.THEN_NOW_COMPARISON = 'THEN_NOW_COMPARISON'),
                        (e.PAY_CARD = 'PAY_CARD'),
                        (e.CAROUSEL = 'CAROUSEL'),
                        (e.COLLAGE = 'COLLAGE'),
                        (e.LINEUP = 'LINEUP'),
                        (e.LUMEN = 'LUMEN'));
                })(i || (i = {})));
        },
        41866: (e) => {
            e.exports = { root: 'Carousel_root__2FSoC', swiper: 'Carousel_swiper__ivHi0', slide: 'Carousel_slide__wgnHc', wrapper: 'Carousel_wrapper__ruBr5' };
        },
        42324: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { b: () => i }),
                (function (e) {
                    ((e.Album = 'album'), (e.Artist = 'artist'), (e.Playlist = 'playlist'), (e.Radio = 'fm_radio'), (e.Other = 'other'), (e.Search = 'search'));
                })(i || (i = {})));
        },
        42966: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => C });
            var i = a(74631),
                l = a(67379),
                s = a(36619),
                r = a(17850),
                n = a(59450),
                o = a(49656),
                c = a(84e3),
                d = a(58069),
                u = a(20258),
                _ = a(26742),
                m = a(25195),
                v = a(25488),
                x = a(97952),
                p = a(10764),
                h = a(72594);
            let C = () => {
                let e = (0, n.st)(),
                    t = (0, c.U)(),
                    { hash: a } = (0, n.gf)(),
                    { pageId: C, pageStyle: g, pagePlacement: I } = (0, x.$)(),
                    { tabId: S, tabPos: T, isTabSelectedByDefault: f } = (0, h.R)(),
                    { offsetBlockPosY: A } = (0, m.u)(),
                    { blockId: E, blockType: L, blockPosX: N, blockPosY: b, mainObjectId: y, mainObjectType: j } = (0, _.N)(),
                    { objectId: R, objectPosX: k, objectPosY: O, objectType: w, objectsCount: P } = (0, v.J)(),
                    { skeleton: B } = (0, p.b)(),
                    D = (0, o.L)(() => (void 0 !== A && void 0 !== b ? A + b : b));
                return (0, i.useCallback)(
                    (i) => {
                        let { objectId: n, objectType: o, actionType: c, userInteractionType: _, objectPosX: m, objectPosY: v, objectCount: x } = i;
                        if (!e || !C || !u.xK.includes(C) || !u.fD.includes(C)) return;
                        let p = d.F[C];
                        if (!p) return;
                        let h = {
                            hash: a,
                            pageId: p,
                            pageStyle: g || s.PageStyles.Fullscreen,
                            pagePlacement: I || s.PagePlacements.Fullscreen,
                            entityType: L,
                            entityId: E,
                            entityPosX: N,
                            entityPosY: D,
                            objectId: null != n ? n : R,
                            objectType: null != o ? o : w,
                            objectPosX: null != m ? m : k,
                            objectPosY: null != v ? v : O,
                            objectsCount: null != x ? x : P,
                            actionType: c,
                            userInteractionType: null != _ ? _ : s.UserInteractionType.Tap,
                        };
                        (u.qG.includes(C) && ((h.tabId = S), (h.tabPos = T), (h.isTabSelectedByDefault = f)),
                            B && (h.skeletonId = B),
                            y && j && ((h.mainObjectType = j), (h.mainObjectId = y)));
                        let A = (0, l.F)({ params: h, logger: t, context: 'useSendEventOnBlockActionPerformed' });
                        A && (0, r.h_)(e.evgenInstance, A);
                    },
                    [R, w, k, O, P, e, C, a, g, I, L, E, N, D, B, y, j, t, S, T, f],
                );
            };
        },
        47009: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => C });
            var i = a(74631),
                l = a(67379),
                s = a(17850),
                r = a(59450),
                n = a(49656),
                o = a(84e3),
                c = a(58069),
                d = a(20258),
                u = a(26742),
                _ = a(25195),
                m = a(25488),
                v = a(97952),
                x = a(10764),
                p = a(72594);
            let h = [
                    d._Q.HOME,
                    d._Q.LANDING,
                    d._Q.NON_MUSIC,
                    d._Q.OWN_COLLECTION,
                    d._Q.SEARCH,
                    d._Q.CONCERTS,
                    d._Q.ALBUM,
                    d._Q.PLAYLIST,
                    d._Q.SLIDES_SCREEN,
                    d._Q.PROMOLANDING_ALBUM,
                    d._Q.WAVE_LANDING_SCREEN,
                    d._Q.COLLECTION_VIBE_ROOMS,
                    d._Q.MULTIVIBE_SENDING_INVITATION_SCREEN,
                    d._Q.MULTIVIBE_ACTION_SCREEN,
                    d._Q.MULTIVIBE_UNIFIED_SCREEN,
                ],
                C = () => {
                    let e = (0, r.st)(),
                        t = (0, o.U)(),
                        { hash: a } = (0, r.gf)(),
                        { pageId: C } = (0, v.$)(),
                        { tabId: g, tabPos: I, isTabSelectedByDefault: S } = (0, p.R)(),
                        { offsetBlockPosY: T } = (0, _.u)(),
                        { blockId: f, blockType: A, blockPosX: E, blockPosY: L, mainObjectId: N, mainObjectType: b } = (0, u.N)(),
                        { objectId: y, objectPosX: j, objectPosY: R, objectType: k, objectsCount: O } = (0, m.J)(),
                        { skeleton: w } = (0, x.b)(),
                        P = (0, n.L)(() => (void 0 !== T && void 0 !== L ? T + L : L));
                    return (0, i.useCallback)(
                        (i, r) => {
                            if (!e || !C || !d.xK.includes(C) || !i || !h.includes(C)) return;
                            let n = c.F[C];
                            if (!n) return;
                            let o = {
                                hash: a,
                                pageId: n,
                                entityType: A,
                                entityId: f,
                                entityPosX: E,
                                entityPosY: P,
                                objectId: null != r ? r : y,
                                objectType: k,
                                objectPosX: j,
                                objectPosY: R,
                                objectsCount: O,
                            };
                            (d.qG.includes(C) && ((o.tabId = g), (o.tabPos = I), (o.isTabSelectedByDefault = S)),
                                w && (o.skeletonId = w),
                                N && b && ((o.mainObjectType = b), (o.mainObjectId = N)));
                            let u = (0, l.F)({ params: o, logger: t, context: 'useSendEventOnBlockStarted' });
                            u && (0, s.er)(e.evgenInstance, u);
                        },
                        [e, C, a, A, f, E, P, y, k, j, R, O, w, N, b, t, g, I, S],
                    );
                };
        },
        49337: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => i });
            var i = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        51402: (e) => {
            e.exports = { root: 'StatsContent_root__yJVzS', text: 'StatsContent_text__l2xi_' };
        },
        52512: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => r });
            var i = a(74631),
                l = a(3669),
                s = a(13232);
            let r = function () {
                let { callback: e, singleEvent: t, withViewUuid: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = (0, i.useRef)(null),
                    n = (0, l.D)(),
                    o = (0, i.useId)(),
                    c = (0, i.useContext)(s.B),
                    d = (0, i.useCallback)(
                        (i, l) => {
                            (e ? e(i, a ? l : void 0) : n(i, l), t && c.unobserveElement(o));
                        },
                        [e, c, o, n, t, a],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            c.observeElement({ elementRef: r, elementId: o, callback: d }),
                            () => {
                                c.unobserveElement(o);
                            }
                        ),
                        [e, c, d, o, n],
                    ),
                    { ref: r, intersectionPropertyId: o }
                );
            };
        },
        53712: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => l });
            var i = a(25895);
            let l = {
                main: (0, i.u)('/'),
                chart: (0, i.u)('/chart'),
                chartPodcasts: (0, i.u)('/chart/podcasts'),
                collection: (0, i.u)('/collection'),
                collectionAlbums: (0, i.u)('/collection/albums'),
                collectionArtists: (0, i.u)('/collection/artists'),
                collectionClips: (0, i.u)('/collection/clips'),
                collectionDislikes: (0, i.u)('/collection/dislikes'),
                collectionKids: (0, i.u)('/collection/kids'),
                collectionKidsAlbums: (0, i.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, i.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, i.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, i.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, i.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, i.u)('/collection/multivibes'),
                collectionPlaylists: (0, i.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, i.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, i.u)('/collection/playlists/liked'),
                collectionShelf: (0, i.u)('/collection/shelf'),
                collectionShelfLiked: (0, i.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, i.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, i.u)('/collection/shelf/recently-played'),
                concerts: (0, i.u)('/concerts'),
                kids: (0, i.u)('/kids'),
                mixes: (0, i.u)('/mixes'),
                musicHistory: (0, i.u)('/music-history'),
                muzmarket: (0, i.u)('/muzmarket'),
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                multivibe: (0, i.u)('/multivibe'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        55168: (e) => {
            e.exports = {
                root: 'TextFactContent_root__vmKoy',
                text: 'TextFactContent_text__e_xOX',
                cover: 'TextFactContent_cover__xYsLC',
                image: 'TextFactContent_image__FnWmg',
            };
        },
        55949: (e, t, a) => {
            'use strict';
            a.d(t, { mf: () => o });
            var i,
                l = a(74631),
                s = {
                    810: (e) => {
                        e.exports = i || (i = a.t(l, 2));
                    },
                },
                r = {},
                n = {};
            ((() => {
                (Object.defineProperty(n, '__esModule', { value: !0 }), (n.useDynamicText = n.findOptimalFontSize = void 0));
                let e = (function e(t) {
                        var a = r[t];
                        if (void 0 !== a) return a.exports;
                        var i = (r[t] = { exports: {} });
                        return (s[t](i, i.exports, e), i.exports);
                    })(810),
                    t = (e) => {
                        ((e.style.wordBreak = 'keep-all'),
                            (e.style.overflowWrap = 'normal'),
                            (e.style.maxHeight = 'none'),
                            (e.style.height = 'auto'),
                            (e.style.overflow = 'visible'),
                            Array.from(e.children).forEach((e) => {
                                e instanceof HTMLElement && t(e);
                            }));
                    },
                    a = (e, t, a, i, l, s) => {
                        (e.style.setProperty('--dynamic-font-size', ''.concat(i, 'px')), e.style.setProperty('--dynamic-line-height', String(l)));
                        let r = 'number' == typeof s ? e.scrollHeight <= Math.min(s * i * l, a) + 1 : e.scrollHeight <= a + 1,
                            n = e.scrollWidth <= t + 1;
                        return r && n;
                    },
                    i = (e) => {
                        let { container: i, containerWidth: l, containerHeight: s, minFontSize: r, maxFontSize: n, lineHeight: o, maxLines: c, styleVariants: d } = e,
                            u = ((e, a, i) => {
                                let l = e.cloneNode(!0);
                                return (
                                    (l.style.cssText =
                                        '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                            a,
                                            'px !important;\n    ',
                                        )),
                                    t(l),
                                    l.style.setProperty('--dynamic-line-height', String(i)),
                                    document.body.appendChild(l),
                                    l
                                );
                            })(i, l, o);
                        try {
                            if (null == d ? void 0 : d.length) {
                                var _;
                                let e = [...d].sort((e, t) => t.fontSize - e.fontSize),
                                    t = null != (_ = e[e.length - 1]) ? _ : { fontSize: r, lineHeight: o };
                                for (let t of e) if (a(u, l, s, t.fontSize, t.lineHeight, c)) return { ...t, fits: !0 };
                                return { ...t, fits: !1 };
                            }
                            let e = r,
                                t = n,
                                i = null;
                            for (; e <= t;) {
                                let r = Math.floor((e + t) / 2);
                                a(u, l, s, r, o, c) ? ((i = r), (e = r + 1)) : (t = r - 1);
                            }
                            if (null === i) return { fontSize: r, lineHeight: o, fits: !1 };
                            return { fontSize: Math.max(r, i - 1), lineHeight: o, fits: !0 };
                        } finally {
                            u.remove();
                        }
                    };
                ((n.findOptimalFontSize = (e) => i(e).fontSize),
                    (n.useDynamicText = (t, a, l) => {
                        let { minFontSize: s, maxFontSize: r, lineHeight: n, maxLines: o, fallbackMaxLines: c, styleVariants: d } = a;
                        (0, e.useLayoutEffect)(() => {
                            if (null === t) return;
                            t.style.setProperty('--dynamic-line-height', String(n));
                            let e = () => {
                                    let e = t.clientWidth,
                                        a = t.clientHeight,
                                        u = t.childNodes.length > 0;
                                    if (0 === e || 0 === a || !u) return;
                                    let {
                                        maxLines: _,
                                        fontSize: m,
                                        lineHeight: v,
                                    } = ((e) => {
                                        let { fallbackMaxLines: t, maxLines: a } = e,
                                            l = i({ ...e, maxLines: a });
                                        if (void 0 === t || l.fits) return { maxLines: a, fontSize: l.fontSize, lineHeight: l.lineHeight };
                                        let s = i({ ...e, maxLines: t });
                                        return { maxLines: t, fontSize: s.fontSize, lineHeight: s.lineHeight };
                                    })({
                                        container: t,
                                        containerWidth: e,
                                        containerHeight: a,
                                        minFontSize: s,
                                        maxFontSize: r,
                                        lineHeight: n,
                                        maxLines: o,
                                        fallbackMaxLines: c,
                                        styleVariants: d,
                                    });
                                    (null == l || l(_),
                                        t.style.setProperty('--dynamic-font-size', ''.concat(m, 'px')),
                                        t.style.setProperty('--dynamic-line-height', String(v)));
                                },
                                a = new ResizeObserver(e),
                                u = new MutationObserver(e);
                            return (
                                a.observe(t),
                                u.observe(t, { childList: !0, characterData: !0, subtree: !0 }),
                                document.fonts.ready.then(e),
                                e(),
                                () => {
                                    (a.disconnect(), u.disconnect());
                                }
                            );
                        }, [t, l, c, n, r, o, s, d]);
                    }));
            })(),
                n.__esModule,
                n.findOptimalFontSize);
            var o = n.useDynamicText;
        },
        56120: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => s });
            var i = a(74631),
                l = a(20790);
            let s = (e) => {
                let t = (0, i.useRef)(!1),
                    a = (0, l.z)();
                (0, i.useEffect)(() => {
                    (e && (null == a || a.disable(), (t.current = !0)), !e && t.current && (null == a || a.enable(), (t.current = !1)));
                }, [e, a]);
            };
        },
        56711: (e) => {
            e.exports = {
                root: 'LineupItem_root__B3yvr',
                header: 'LineupItem_header__gyDnL',
                eventTag: 'LineupItem_eventTag__V_p_g',
                metaLabel: 'LineupItem_metaLabel__yXFDs',
                artists: 'LineupItem_artists__lOur3',
                highlighted: 'LineupItem_highlighted__4jOig',
                highlightedItem: 'LineupItem_highlightedItem__2Rd6o',
                restItem: 'LineupItem_restItem__bhuIs',
                logo: 'LineupItem_logo__TSyce',
            };
        },
        56740: (e) => {
            e.exports = {
                root: 'PayCard_root__wjBVD',
                title: 'PayCard_title__t7qpS',
                description: 'PayCard_description__hh2_O',
                text: 'PayCard_text__w251H',
                artwork: 'PayCard_artwork__9oAUA',
            };
        },
        57024: (e, t, a) => {
            'use strict';
            a.d(t, { C8: () => s, UC: () => r, dM: () => n, uV: () => o });
            var i = a(93690),
                l = a(58848);
            let s = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                r = (e) => (e.uid ? 'authorized' : 'no-uid'),
                n = (e) => {
                    if (!(e instanceof i.m5) || !(0, l.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, l.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                o = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        57138: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => r });
            var i = a(25839),
                l = a(74631),
                s = a(14482);
            let r = (e) => {
                let {
                        blockId: t,
                        blockType: a,
                        blockIdForFrom: r,
                        blockPosX: n,
                        blockPosY: o,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: _,
                        displayReasonId: m,
                    } = e,
                    v = (0, l.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: a,
                            blockIdForFrom: r,
                            blockPosX: n,
                            blockPosY: o,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: m,
                        }),
                        [t, a, r, n, o, c, d, u, m],
                    );
                return (0, i.jsx)(s.p.Provider, { value: v, children: _ });
            };
        },
        57378: (e) => {
            e.exports = {
                root: 'ChartArtistContent_root__OPxPJ',
                cover: 'ChartArtistContent_cover__flhXs',
                image: 'ChartArtistContent_image__D2isT',
                title: 'ChartArtistContent_title__a_d_4',
            };
        },
        57549: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => d });
            var i = a(25839),
                l = a(82298),
                s = a(69084),
                r = a(4254),
                n = a(51790),
                o = a(23775),
                c = a.n(o);
            let d = (e) => {
                let { error: t, closeToast: a, className: o } = e;
                return (0, i.jsx)(n.$, {
                    className: (0, l.$)(c().root, o),
                    message: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(s.q, { children: (0, i.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, i.jsx)(r.HL, { className: c().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: a,
                });
            };
        },
        58483: (e) => {
            e.exports = {
                buttonsContainer: 'SlideButtons_buttonsContainer__82Z3p',
                contractButton: 'SlideButtons_contractButton__46CMy',
                editButton: 'SlideButtons_editButton__r2XNo',
                iconButton: 'SlideButtons_iconButton__oC0it',
                arrowLeftButton: 'SlideButtons_arrowLeftButton__LL3LY',
                arrowRightButton: 'SlideButtons_arrowRightButton__405wl',
                mainButtonContainer: 'SlideButtons_mainButtonContainer__4htPC',
            };
        },
        58848: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        61193: (e) => {
            e.exports = {
                header: 'LineupFestivalImageItem_header__tQ4ho',
                metaLabel: 'LineupFestivalImageItem_metaLabel__Rvm_1',
                logo: 'LineupFestivalImageItem_logo__NQaIS',
                festivalImage: 'LineupFestivalImageItem_festivalImage__N73jB',
                festivalTitle: 'LineupFestivalImageItem_festivalTitle__CT_Un',
                artists: 'LineupFestivalImageItem_artists__0Rh7A',
                text: 'LineupFestivalImageItem_text__6_ilm',
            };
        },
        61777: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => C });
            var i = a(74631),
                l = a(67379),
                s = a(17850),
                r = a(59450),
                n = a(49656),
                o = a(84e3),
                c = a(58069),
                d = a(20258),
                u = a(26742),
                _ = a(25195),
                m = a(37314),
                v = a(97952),
                x = a(10764),
                p = a(72594);
            let h = [
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
                C = () => {
                    let e = (0, i.useRef)(!1),
                        t = (0, r.st)(),
                        a = (0, o.U)(),
                        { hash: C } = (0, r.gf)(),
                        { pageId: g } = (0, v.$)(),
                        { tabId: I, tabPos: S, isTabSelectedByDefault: T } = (0, p.R)(),
                        { offsetBlockPosY: f } = (0, _.u)(),
                        { blockId: A, blockType: E, blockPosX: L, blockPosY: N, mainObjectType: b, mainObjectId: y, objectsCount: j } = (0, u.N)(),
                        { filterKey: R, filterValue: k, filterPos: O } = (0, m.G)(),
                        { skeleton: w } = (0, x.b)(),
                        P = (0, n.L)(() => (void 0 !== f && void 0 !== N ? f + N : N));
                    return (0, i.useCallback)(() => {
                        if (!t || !g || !d.xK.includes(g) || !h.includes(g) || e.current) return;
                        let i = { hash: C, pageId: c.F[g], entityType: E, entityId: A, entityPosX: L, entityPosY: P, objectsCount: j };
                        (void 0 !== R && ((i.filterKey = R), (i.filterValue = k), (i.filterPos = O)),
                            d.qG.includes(g) && ((i.tabId = I), (i.tabPos = S), (i.isTabSelectedByDefault = T)),
                            w && (i.skeletonId = w),
                            y && b && ((i.mainObjectType = b), (i.mainObjectId = y)));
                        let r = (0, l.F)({ params: i, logger: a, context: 'useSendEventOnBlockLoaded' });
                        r && ((0, s.uY)(t.evgenInstance, r), (e.current = !0));
                    }, [t, g, C, E, A, L, P, R, k, O, j, w, y, b, a, I, S, T]);
                };
        },
        64838: (e) => {
            e.exports = { root: 'SlideCaption_root__JumhY' };
        },
        67556: (e) => {
            e.exports = {
                root: 'CarouselContent_root__fLntt',
                slide: 'CarouselContent_slide__MdGZO',
                slideActive: 'CarouselContent_slideActive__fECY6',
                disabled: 'CarouselContent_disabled__fuxnG',
                description: 'CarouselContent_description__IYsQ8',
                cover: 'CarouselContent_cover__Oc6UR',
                meta: 'CarouselContent_meta__0S_Xt',
                image: 'CarouselContent_image__EKRdr',
                title: 'CarouselContent_title__LHzEy',
                subtitle: 'CarouselContent_subtitle__vZKi2',
            };
        },
        68934: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => o });
            var i,
                l = a(74631),
                s = {
                    810: (e) => {
                        e.exports = i || (i = a.t(l, 2));
                    },
                },
                r = {},
                n = {};
            ((() => {
                (Object.defineProperty(n, '__esModule', { value: !0 }), (n.useForceUpdateRef = void 0));
                let e = (function e(t) {
                    var a = r[t];
                    if (void 0 !== a) return a.exports;
                    var i = (r[t] = { exports: {} });
                    return (s[t](i, i.exports, e), i.exports);
                })(810);
                n.useForceUpdateRef = () => {
                    let [t, a] = (0, e.useState)(null);
                    return [
                        t,
                        (0, e.useCallback)((e) => {
                            a((t) => (t !== e ? e : t));
                        }, []),
                    ];
                };
            })(),
                n.__esModule);
            var o = n.useForceUpdateRef;
        },
        69084: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => c });
            var i,
                l = a(74631),
                s = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (l && (l += ' '), (l += i));
                                            else for (a in t) t[a] && (l && (l += ' '), (l += a));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    7319: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var s in ((i = {}), t)) 'key' !== s && (i[s] = t[s]);
                            else i = t;
                            return { $$typeof: a, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    5531: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let l = a(4377),
                            s = a(5881),
                            r = a(810),
                            n = i(a(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: a, children: i, ...o } = e,
                                c = (0, s.clsx)(n.default.root, { [n.default.focusable]: a }, t);
                            return (0, r.isValidElement)(i)
                                ? (0, r.cloneElement)(i, { ...o, className: (0, s.clsx)(c, i.props.className) })
                                : (0, l.jsx)('span', { className: c, ...o, children: i });
                        };
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(l, 2));
                    },
                },
                r = {};
            function n(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var a = (r[e] = { exports: {} });
                return (s[e].call(a.exports, a, a.exports, n), a.exports);
            }
            ((n.d = (e, t) => {
                for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (n.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.SROnly = void 0));
                var e = n(5531);
                Object.defineProperty(o, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = o.SROnly;
            o.__esModule;
        },
        73017: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => i });
            var i = (function (e) {
                return ((e.USER = 'user'), (e.ARTIST = 'artist'), (e.PODCAST = 'podcast'), (e.SPECIAL = 'special'), (e.KIDS = 'kids'), e);
            })({});
        },
        73810: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => i });
            let i = (0, a(74631).createContext)(null);
        },
        74684: (e) => {
            e.exports = {
                root: 'StatItem_root__L7Uw0',
                root_withOpacity: 'StatItem_root_withOpacity__pOgaf',
                valueContainer: 'StatItem_valueContainer__HlYQZ',
                value: 'StatItem_value__IkJBB',
                unit: 'StatItem_unit__cO46p',
                footer: 'StatItem_footer__QZ7q6',
            };
        },
        77179: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => i });
            var i = (function (e) {
                return ((e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e);
            })({});
        },
        77995: (e, t, a) => {
            'use strict';
            a.d(t, { SlidesPage: () => aR });
            var i,
                l,
                s,
                r,
                n,
                o,
                c,
                d,
                u,
                _ = a(25839),
                m = a(82298),
                v = a(88204),
                x = a(84059),
                p = a(74631),
                h = a(39004),
                C = a(8487),
                g = a(89288),
                I = a(36619),
                S = a(61493),
                T = a(41392),
                f = a(71035),
                A = a(4071),
                E = a(66738),
                L = a(69084),
                N = a(4254),
                b = a(16886),
                y = a(84795),
                j = a(14444),
                R = a(14693),
                k = a(61777),
                O = a(57138),
                w = a(95314),
                P = a(27954),
                B = a(99715),
                D = a.n(B);
            let M = (e) => {
                let { isFirstSlide: t, isLastSlide: a, style: i } = e,
                    l = (0, j.Mn)(),
                    { formatMessage: s } = (0, h.A)(),
                    r = (0, p.useCallback)(() => {
                        l.slidePrev();
                    }, [l]),
                    n = (0, p.useCallback)(() => {
                        l.slideNext();
                    }, [l]);
                return (0, _.jsxs)('div', {
                    className: D().root,
                    style: i,
                    children: [
                        (0, _.jsx)(A.$, {
                            variant: 'outline',
                            iconClassName: D().top,
                            size: 'm',
                            radius: 'round',
                            onClick: r,
                            disabled: t,
                            icon: (0, _.jsx)(E.I, { variant: 'arrowDown', size: 'xxs' }, 'prevIcon'),
                            withRipple: !1,
                            'aria-label': s({ id: 'slider.prev-slide' }),
                            className: D().control,
                            'data-test-id': S.e8.slider.SLIDES_SLIDER_PREV_BUTTON,
                        }),
                        (0, _.jsx)(A.$, {
                            variant: 'outline',
                            size: 'm',
                            radius: 'round',
                            onClick: n,
                            disabled: a,
                            icon: (0, _.jsx)(E.I, { variant: 'arrowDown', size: 'xxs' }, 'nextIcon'),
                            withRipple: !1,
                            'aria-label': s({ id: 'slider.next-slide' }),
                            className: D().control,
                            'data-test-id': S.e8.slider.SLIDES_SLIDER_NEXT_BUTTON,
                        }),
                    ],
                });
            };
            var U = a(22939),
                z = a(42324),
                F = a(86869);
            !(function (e) {
                ((e.TOP = 'TOP'), (e.CENTER = 'CENTER'), (e.BOTTOM = 'BOTTOM'));
            })(i || (i = {}));
            var H = a(42966),
                V = a(23818),
                G = a(21213),
                K = a(85825),
                $ = a(80126),
                X = a(77179),
                Z = a(30296),
                Y = a(11547),
                q = a.n(Y);
            let Q = (0, v.PA)((e) => {
                    let {
                            className: t,
                            children: a,
                            background: {
                                animationDelay: i,
                                withPersonalColor: l,
                                videoUrl: s,
                                firstFrameVideoUrl: r,
                                lastFrameVideoUrl: n,
                                bgImageUrl: o,
                                withSound: c,
                                videoLoopEnabled: d,
                            },
                            isActive: u,
                            isContentVisible: v,
                            setContentVisible: x,
                            setContentInvisible: h,
                            shareBackground: C,
                            'data-test-id': I,
                        } = e,
                        {
                            user: S,
                            slides: { isMuted: T },
                        } = (0, P.g)(),
                        { isVisible: f } = (0, K.d)(),
                        A = (0, p.useRef)(null),
                        [E, L] = (0, p.useState)(o),
                        [N, y] = (0, p.useState)(null),
                        j = (0, p.useRef)(null),
                        R = (0, Z.e)();
                    (0, p.useEffect)(() => {
                        if (s || !o || (0, $.y)()) {
                            (L(o), y(null), (j.current = null));
                            return;
                        }
                        if (o === E) {
                            j.current && j.current !== E && (y(null), (j.current = null));
                            return;
                        }
                        (y(o), (j.current = o));
                    }, [o, E, s]);
                    let k = (0, p.useCallback)(() => {
                            let e = j.current;
                            e && e === N && (L(e), y(null), (j.current = null));
                        }, [N]),
                        O = (null == R ? void 0 : R.getState(X.V.TRAILER).playerState.status.value) === b.MT.PLAYING && c,
                        w = (0, p.useCallback)(() => setTimeout(x, 1e3 * i), [i, x]);
                    ((0, p.useEffect)(() => {
                        !u && v && h();
                    }, [u, v, h]),
                        (0, p.useEffect)(() => {
                            var e, t, a;
                            u && !f
                                ? ((null == (e = A.current) ? void 0 : e.readyState) !== 4 && w(),
                                  null == (t = A.current) ||
                                      t
                                          .play()
                                          .then(() => {
                                              (w(), O && (null == R || R.pause(X.V.TRAILER)));
                                          })
                                          .catch(w))
                                : A.current && ((A.current.currentTime = 0), null == (a = A.current) || a.pause());
                        }, [w, u, f, x, O, R]));
                    let B = (0, p.useMemo)(() => {
                            if (l && S.collectionHue) return { '--user-background-color': (0, G.e)(S.collectionHue, 1, 0.5) };
                        }, [l, S.collectionHue]),
                        D = s && r && !l,
                        M = !s && E,
                        U = !!n || void 0;
                    return (0, _.jsxs)('div', {
                        className: (0, m.$)(q().root, t),
                        style: B,
                        'data-test-id': I,
                        children: [
                            M && (0, _.jsx)(V._V, { src: (0, g.lU)(E, 800, !0), className: q().firstFrame, 'data-screenshot-hidden': U }, E),
                            !s &&
                                N &&
                                (0, _.jsx)(
                                    V._V,
                                    {
                                        src: (0, g.lU)(N, 800, !0),
                                        className: (0, m.$)(q().firstFrame, q().backgroundFadeIn),
                                        onAnimationEnd: k,
                                        'data-screenshot-hidden': U,
                                    },
                                    N,
                                ),
                            D && (0, _.jsx)(V._V, { src: (0, g.lU)(r, 800, !0), className: q().firstFrame }),
                            s &&
                                (0, _.jsx)('video', {
                                    className: (0, m.$)(q().media, { [q().media_withPersonalColor]: l }),
                                    'data-screenshot-hidden': !0,
                                    ref: A,
                                    src: s,
                                    poster: (0, g.lU)(o, 800, !0),
                                    playsInline: !0,
                                    muted: !c || T,
                                    loop: d,
                                }),
                            s && n && (0, _.jsx)(V._V, { 'data-screenshot-visible': !0, src: (0, g.lU)(n, 800, !0), className: (0, m.$)(q().lastFrame, q().hidden) }),
                            C && (0, _.jsx)(V._V, { 'data-screenshot-visible': !0, src: (0, g.lU)(C, 800, !0), className: q().shareBackground }),
                            !!a && a,
                        ],
                    });
                }),
                W = (0, p.memo)(Q);
            var J = a(13624),
                ee = a(86788),
                et = a(49656);
            !(function (e) {
                ((e.TRACK = 'TRACK'), (e.ARTIST = 'ARTIST'), (e.ALBUM = 'ALBUM'), (e.CLIP = 'CLIP'), (e.PLAYLIST = 'PLAYLIST'));
            })(l || (l = {}));
            let ea = new Set(Object.values(l)),
                ei = (e) => 'string' == typeof e && ea.has(e),
                el = (e, t, a) => {
                    if (!ei(t)) return !1;
                    switch (t) {
                        case l.TRACK:
                            return e.isTrackLiked(a);
                        case l.ARTIST:
                            return e.isArtistLiked(a);
                        case l.ALBUM:
                            return e.isAlbumLiked(a);
                        case l.CLIP:
                            return e.isClipLiked(a);
                        case l.PLAYLIST:
                            return e.isPlaylistLiked(a);
                    }
                };
            var es = a(29481),
                er = a(6323),
                en = a(97522),
                eo = a(8438),
                ec = a.n(eo);
            let ed = (e) => {
                var t;
                let { data: a, className: i, 'data-test-id': l } = e,
                    s = (0, es.N)(),
                    r = (0, f.c)(() => {
                        var e;
                        s({ deepLink: null != (e = a.url) ? e : '', to: I.AppScreen.Link });
                    });
                return (0, _.jsxs)(en.N, {
                    href: null != (t = a.url) ? t : void 0,
                    onClick: r,
                    className: (0, m.$)(ec().root, i),
                    'data-test-id': l,
                    children: [
                        (0, _.jsx)(F.t, {
                            radius: 'xs',
                            className: ec().cover,
                            children: a.imageUrl && (0, _.jsx)(er.B, { src: a.imageUrl, withAvatarReplace: !0, fit: 'contain', className: ec().image, size: 100 }),
                        }),
                        (0, _.jsx)(N.HL, { variant: 'span', type: 'controls', size: 'l', weight: 'medium', className: ec().text, lineClamp: 1, children: a.title }),
                        (0, _.jsx)(E.I, { variant: 'arrowRight', size: 'xs', className: ec().icon }),
                    ],
                });
            };
            var eu = a(33202),
                e_ = a.n(eu),
                em = a(31860),
                ev = a(91149),
                ex = a(92942),
                ep = a(57549),
                eh = a(82852),
                eC = a.n(eh);
            let eg = (0, v.PA)((e) => {
                let { data: t, className: a, 'data-test-id': i } = e,
                    s = ((e) => {
                        let { library: t } = (0, P.g)();
                        return el(t, e.entityType, e.entityId);
                    })(t),
                    r = s ? t.liked : t.unliked,
                    n = ((e) => {
                        let { data: t, isLiked: a } = e,
                            { library: i, user: s } = (0, P.g)(),
                            { notify: r } = (0, ex.l)(),
                            { formatMessage: n } = (0, h.A)(),
                            o = (0, H.m)(),
                            [c, d] = (0, p.useState)(!1);
                        return (0, f.c)(async () => {
                            let e;
                            if (!(a ? t.liked : t.unliked).enabled) return;
                            if (!s.isAuthorized)
                                return void r((0, _.jsx)(ep.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: ev.u.ERROR });
                            if (c || !ei(t.entityType)) return;
                            d(!0);
                            let u = s.account.data.uid,
                                m = { entityId: t.entityId, userId: u };
                            switch (t.entityType) {
                                case l.TRACK:
                                    e = await i.toggleTrackLike(m);
                                    break;
                                case l.ARTIST:
                                    e = await i.toggleArtistLike(m);
                                    break;
                                case l.ALBUM:
                                    e = await i.toggleAlbumLike(m);
                                    break;
                                case l.CLIP:
                                    e = await i.toggleClipLike(m);
                                    break;
                                case l.PLAYLIST: {
                                    let [a, l] = t.entityId.split(':');
                                    e = await i.togglePlaylistLike({ userId: u, entityId: t.entityId, ownerId: Number(a), kindId: Number(l) });
                                }
                            }
                            (d(!1),
                                e === em.f.OK
                                    ? o({
                                          actionType: a ? I.ActionType.Unlike : I.ActionType.Like,
                                          objectId: t.entityId,
                                          objectType: ((e) => {
                                              switch (e) {
                                                  case l.TRACK:
                                                      return I.DomainObjectType.Track;
                                                  case l.ARTIST:
                                                      return I.DomainObjectType.Artist;
                                                  case l.ALBUM:
                                                      return I.DomainObjectType.Album;
                                                  case l.CLIP:
                                                      return I.DomainObjectType.Video;
                                                  case l.PLAYLIST:
                                                      return I.DomainObjectType.Playlist;
                                              }
                                          })(t.entityType),
                                      })
                                    : e === em.f.ERROR && r((0, _.jsx)(ep.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: ev.u.ERROR }));
                        });
                    })({ data: t, isLiked: s }),
                    o = (0, et.L)(() => ({ '--text-color': r.textColor, '--button-color': r.buttonColor }));
                return (0, _.jsx)(A.$, {
                    style: o,
                    className: (0, m.$)(e_().root, eC().root, a),
                    size: 'default',
                    radius: 'xxxl',
                    color: 'primary',
                    withHover: !1,
                    withRipple: !1,
                    disabled: !r.enabled,
                    onClick: n,
                    'data-test-id': i,
                    children: (0, _.jsx)(N.HL, { variant: 'span', type: 'controls', size: 'l', weight: 'medium', lineClamp: 1, children: r.title }),
                });
            });
            var eI = a(85686);
            let eS = (e) => {
                var t;
                let { data: a, className: i, handleClick: l, 'data-test-id': s } = e,
                    r = (0, eI.Z)(null != (t = a.url) ? t : ''),
                    n = (0, es.N)(),
                    o = (0, p.useMemo)(() => ({ '--text-color': a.textColor, '--button-color': a.buttonColor }), [a.buttonColor, a.textColor]),
                    c = (0, f.c)(() => {
                        var e;
                        if (l) return l();
                        (n({ deepLink: null != (e = a.url) ? e : '', to: I.AppScreen.Link }), r());
                    });
                return (0, _.jsx)(A.$, {
                    role: 'link',
                    style: o,
                    className: (0, m.$)(e_().root, i),
                    size: 'default',
                    radius: 'xxxl',
                    color: 'primary',
                    withHover: !1,
                    withRipple: !1,
                    onClick: c,
                    'data-test-id': s,
                    children: (0, _.jsx)(N.HL, { variant: 'span', type: 'controls', size: 'l', weight: 'medium', lineClamp: 1, children: a.title }),
                });
            };
            var eT = a(58483),
                ef = a.n(eT);
            let eA = J.default.default(
                    () =>
                        Promise.all([a.e(4699), a.e(9761), a.e(820), a.e(4180)])
                            .then(a.bind(a, 34180))
                            .then((e) => e.ShareButton),
                    { ssr: !1 },
                ),
                eE = (e) => {
                    let { button: t, buttonClassName: a, cardRef: i } = e,
                        l = (0, m.$)(a, ef().contractButton);
                    switch (t.type) {
                        case ee.m.ACTION:
                            if (t.data.url) return (0, _.jsx)(ed, { data: t.data, className: l, 'data-test-id': S.OA.slides.SLIDE_ACTION_BUTTON });
                            return null;
                        case ee.m.SIMPLE:
                            if (t.data.url) return (0, _.jsx)(eS, { data: t.data, className: l, 'data-test-id': S.OA.slides.SLIDE_SIMPLE_BUTTON });
                            return null;
                        case ee.m.SHARE:
                            return (0, _.jsx)(eA, { data: t.data, wrapperClassName: l, cardRef: i, 'data-test-id': S.OA.slides.SLIDE_SHARE_BUTTON });
                        case ee.m.LIKE:
                            return (0, _.jsx)(eg, { data: t.data, className: l, 'data-test-id': S.OA.slides.SLIDE_LIKE_BUTTON });
                        default:
                            return null;
                    }
                },
                eL = (0, v.PA)((e) => {
                    var t, a;
                    let { slide: i, className: l, cardRef: s, hasLeft: r = !0, hasRight: n = !0, onSaveChoice: o, onEditChoice: c, onSlidePrev: d, onSlideNext: u } = e,
                        { button: v } = i,
                        {
                            library: x,
                            slides: { savedChoice: C },
                        } = (0, P.g)(),
                        g = null != (a = null == C ? void 0 : C.isSaved) && a,
                        { formatMessage: I } = (0, h.A)(),
                        f = (0, p.useMemo)(() => {
                            if ((null == v ? void 0 : v.type) === ee.m.SHARE || (null == v ? void 0 : v.type) === ee.m.SIMPLE)
                                return { textColor: v.data.textColor, buttonColor: v.data.buttonColor };
                            if ((null == v ? void 0 : v.type) === ee.m.LIKE) {
                                let e = el(x, v.data.entityType, v.data.entityId) ? v.data.liked : v.data.unliked;
                                return { textColor: e.textColor, buttonColor: e.buttonColor };
                            }
                            return { textColor: null, buttonColor: null };
                        }, [v, x]),
                        L = (0, p.useMemo)(() => ({ '--text-color': f.textColor, '--button-color': f.buttonColor }), [f]),
                        N = (0, et.L)(() => v && (0, _.jsx)(eE, { button: v, buttonClassName: l, cardRef: s })),
                        b = (0, et.L)(() =>
                            i.savedChoiceKey && (r || n)
                                ? (0, _.jsx)(eS, { data: { title: I({ id: 'rewind.save-choice' }), url: null, ...f }, handleClick: o, className: l })
                                : N,
                        ),
                        y = null == (t = i.content) ? void 0 : t.type;
                    return y !== T.x.CAROUSEL && y !== T.x.COLLAGE && y !== T.x.LINEUP
                        ? N
                        : g
                          ? (0, _.jsxs)('div', {
                                className: ef().buttonsContainer,
                                children: [
                                    v && (0, _.jsx)(eE, { button: v, buttonClassName: l, cardRef: s }),
                                    (0, _.jsx)(A.$, {
                                        color: 'primary',
                                        className: (0, m.$)(ef().iconButton, e_().root, ef().editButton),
                                        icon: (0, _.jsx)(E.I, { variant: 'pencil', size: 'xxs' }),
                                        radius: 'round',
                                        role: 'link',
                                        size: 'default',
                                        withHover: !0,
                                        withRipple: !0,
                                        style: L,
                                        onClick: c,
                                    }),
                                ],
                            })
                          : (0, _.jsxs)('div', {
                                className: ef().buttonsContainer,
                                children: [
                                    r &&
                                        (0, _.jsx)(A.$, {
                                            color: 'primary',
                                            className: (0, m.$)(ef().iconButton, e_().root, ef().arrowLeftButton),
                                            icon: (0, _.jsx)(E.I, { variant: 'arrowLeft', size: 'xxs' }),
                                            radius: 'round',
                                            role: 'link',
                                            size: 'default',
                                            withHover: !0,
                                            withRipple: !0,
                                            style: L,
                                            onClick: d,
                                            'data-test-id': S.OA.slides.SLIDE_CAROUSEL_PREV_BUTTON,
                                        }),
                                    (0, _.jsx)('div', { className: ef().mainButtonContainer, children: b }),
                                    n &&
                                        (0, _.jsx)(A.$, {
                                            color: 'primary',
                                            className: (0, m.$)(ef().iconButton, e_().root, ef().arrowRightButton),
                                            icon: (0, _.jsx)(E.I, { variant: 'arrowRight', size: 'xxs' }),
                                            radius: 'round',
                                            role: 'link',
                                            size: 'default',
                                            withHover: !0,
                                            withRipple: !0,
                                            style: L,
                                            onClick: u,
                                            'data-test-id': S.OA.slides.SLIDE_CAROUSEL_NEXT_BUTTON,
                                        }),
                                ],
                            });
                });
            var eN = a(42059);
            let eb = { 6: 84, 7: 84, 8: 68, 9: 68, 10: 56, 11: 56, 12: 48, 13: 48 };
            var ey = a(64838),
                ej = a.n(ey);
            let eR = (e) => {
                let { caption: t, className: a, lineClamp: i = 2, 'data-test-id': l } = e;
                return (0, _.jsx)(N.HL, {
                    variant: 'span',
                    type: 'text',
                    size: 'l',
                    weight: 'medium',
                    className: (0, m.$)(ej().root, a),
                    lineClamp: i,
                    'data-test-id': l,
                    children: t,
                });
            };
            var ek = a(74684),
                eO = a.n(ek);
            let ew = (e) => {
                let {
                        data: t,
                        className: a,
                        valueClassName: i,
                        valueContainerClassName: l,
                        withAutoResize: s,
                        descriptionLineClamp: r,
                        withOpacity: n,
                        lineClamp: o = 3,
                    } = e,
                    c = (0, p.useRef)(null),
                    { formatNumber: d } = (0, h.A)(),
                    u = (0, p.useCallback)((e) => (e >= 1e4 ? d(e) : String(e)), [d]);
                (0, p.useEffect)(() => {
                    if (c.current) {
                        if (null === t.value) return;
                        let e = new eN.T(c.current, Number(t.value), { startVal: 1, formattingFn: u });
                        e.error || e.start();
                    }
                }, [t.value, u]);
                let v = (0, p.useMemo)(() => {
                        if (s && t.value)
                            return {
                                fontSize: ((e) => {
                                    let t = String(e).length;
                                    return t > 13
                                        ? 'clamp('.concat(18, 'px, ').concat(11, 'cqi, ').concat(54, 'px)')
                                        : t <= 5
                                          ? 'clamp('.concat(18, 'px, ').concat(26, 'cqi, ').concat(100, 'px)')
                                          : 'clamp('
                                                .concat(18, 'px, ')
                                                .concat(26 - t, 'cqi, ')
                                                .concat(eb[t], 'px)');
                                })(t.value),
                            };
                    }, [t.value, s]),
                    x = (0, p.useMemo)(() => {
                        if (null !== t.value) return u(t.value);
                    }, [t.value, u]);
                return (0, _.jsxs)(_.Fragment, {
                    children: [
                        (0, _.jsxs)(L.q, { children: [t.value, ' ', t.valueSuffix, ' ', t.valueDescription] }),
                        (0, _.jsxs)('div', {
                            className: (0, m.$)(eO().root, { [eO().root_withOpacity]: n }, a),
                            'aria-hidden': !0,
                            'data-test-id': S.OA.slides.STAT_ITEM,
                            children: [
                                (0, _.jsxs)('div', {
                                    className: (0, m.$)(eO().valueContainer, l),
                                    children: [
                                        (0, _.jsx)(N.DZ, {
                                            variant: 'div',
                                            size: 'xxxxl',
                                            tabIndex: -1,
                                            ref: c,
                                            'aria-hidden': !0,
                                            className: (0, m.$)(eO().value, i),
                                            style: v,
                                            'data-test-id': S.OA.slides.STAT_VALUE,
                                            'data-screenshot-value': x,
                                        }),
                                        t.valueSuffix &&
                                            (0, _.jsx)(N.DZ, {
                                                variant: 'div',
                                                size: 'xxxxl',
                                                className: eO().value,
                                                style: v,
                                                'data-test-id': S.OA.slides.STAT_VALUE_SUFFIX,
                                                children: t.valueSuffix,
                                            }),
                                    ],
                                }),
                                (0, _.jsx)(N.DZ, {
                                    variant: 'div',
                                    size: 'xl',
                                    weight: 'black',
                                    className: eO().unit,
                                    lineClamp: r,
                                    'data-test-id': S.OA.slides.STAT_VALUE_DESCRIPTION,
                                    children: t.valueDescription,
                                }),
                                t.footer && (0, _.jsx)(eR, { caption: t.footer, className: eO().footer, lineClamp: o, 'data-test-id': S.OA.slides.STAT_FOOTER }),
                            ],
                        }),
                    ],
                });
            };
            var eP = a(79644),
                eB = a.n(eP);
            let eD = (e) => {
                let { data: t } = e,
                    a = (0, p.useMemo)(
                        () => ({ value: t.value, valueDescription: t.valueDescription, valueSuffix: t.valueSuffix, footer: t.footer, align: t.align }),
                        [t.footer, t.value, t.valueDescription, t.valueSuffix, t.align],
                    ),
                    i = (0, p.useMemo)(() => ({ '--covers-offset-translate': ''.concat((t.covers.length - 1) * 7.5, 'px') }), [t.covers]),
                    l = (0, p.useCallback)((e) => ({ '--cover-offset-translate': '-'.concat(15 * e, 'px') }), []);
                return (0, _.jsxs)('div', {
                    className: eB().root,
                    children: [
                        (0, _.jsx)(ew, { data: a, withAutoResize: !0 }),
                        (0, _.jsx)('div', {
                            className: eB().covers,
                            style: i,
                            children: t.covers.map((e, t) => {
                                var a;
                                return (0, _.jsx)(
                                    F.t,
                                    {
                                        radius: 'round',
                                        className: eB().cover,
                                        style: l(t),
                                        children: (0, _.jsx)(er.B, {
                                            src: null != (a = e.uri) ? a : void 0,
                                            withAvatarReplace: !0,
                                            fit: 'contain',
                                            size: 100,
                                            className: eB().image,
                                        }),
                                    },
                                    e.uri,
                                );
                            }),
                        }),
                    ],
                });
            };
            var eM = a(89492),
                eU = a.n(eM);
            let ez = (e) => {
                    let {
                            forwardRef: t,
                            createUrlReplacer: a = g.lU,
                            className: i,
                            maskSrc: l,
                            style: s = {},
                            withAspectRatio: r = !1,
                            withAvatarReplace: n,
                            withMaskReplace: o = n,
                            ...c
                        } = e,
                        d = l ? 'url('.concat(o ? a(l, 'orig', r) : l, ')') : 'none';
                    return (0, _.jsx)(V._V, {
                        className: (0, m.$)(eU().root, i),
                        createUrlReplacer: a,
                        ref: t,
                        style: { ...s, maskImage: d },
                        withAspectRatio: r,
                        withAvatarReplace: n,
                        ...c,
                    });
                },
                eF = (0, p.forwardRef)((e, t) => (0, _.jsx)(ez, { forwardRef: t, ...e }));
            var eH = a(32964),
                eV = a.n(eH);
            let eG = (e) => {
                    let { backgroundSrc: t, className: a, forwardRef: i, maskSrc: l, size: s, src: r, withAvatarReplace: n, ...o } = e;
                    return (0, _.jsxs)('div', {
                        className: eV().root,
                        children: [
                            t && (0, _.jsx)(V._V, { className: eV().background, src: t, size: s, withAvatarReplace: n, ...o }),
                            (0, _.jsx)(eF, { className: a, maskSrc: l, ref: i, size: s, src: r, withAvatarReplace: n, ...o }),
                        ],
                    });
                },
                eK = (0, p.forwardRef)((e, t) => (0, _.jsx)(eG, { forwardRef: t, ...e }));
            var e$ = a(86586);
            a(13319);
            var eX = a(41866),
                eZ = a.n(eX);
            let eY = (0, v.PA)((e) => {
                let {
                        isDisabled: t,
                        initialIndex: a = 0,
                        slidesPerView: i = e$.bF,
                        disabledClassName: l,
                        slideActiveClassName: s,
                        slideClassName: r,
                        onSlideChange: n,
                        onCarouselReady: o,
                        className: c,
                        spaceBetween: d,
                        children: u,
                    } = e,
                    v = (0, p.useRef)(null);
                (0, p.useEffect)(() => {
                    var e, a;
                    t ? null == (e = v.current) || e.disable() : null == (a = v.current) || a.enable();
                }, [t]);
                let x = (0, p.useCallback)(
                        (e) => {
                            let { activeIndex: a } = e;
                            t || null == n || n(a);
                        },
                        [t, n],
                    ),
                    h = (0, p.useCallback)(
                        (e) => {
                            ((v.current = e), null == o || o({ slideNext: () => e.slideNext(), slidePrev: () => e.slidePrev() }));
                        },
                        [o],
                    );
                return (0, _.jsx)(j.RC, {
                    a11y: { enabled: !0 },
                    centeredSlides: !0,
                    className: (0, m.$)(eZ().root, eZ().swiper, c, { [null != l ? l : '']: t }),
                    initialSlide: a,
                    keyboard: !0,
                    modules: [y.Jq, y.s3, y.Vx, y.dK],
                    pagination: { dynamicBullets: !0, dynamicMainBullets: 3 },
                    slidesPerView: i,
                    spaceBetween: null != d ? d : e$.ur,
                    wrapperClass: eZ().wrapper,
                    onActiveIndexChange: x,
                    onSwiper: h,
                    children: u.map((e, t) => {
                        var i, l;
                        return (0, _.jsx)(
                            j.qr,
                            {
                                className: (0, m.$)(eZ().slide, r, {
                                    [null != s ? s : '']: t === (null != (l = null == (i = v.current) ? void 0 : i.activeIndex) ? l : a),
                                }),
                                children: e,
                            },
                            t,
                        );
                    }),
                });
            });
            var eq = a(87426),
                eQ = a.n(eq);
            let eW = (e) => {
                let { className: t, heading: a, lineClamp: i = 2, 'data-test-id': l } = e;
                return (0, _.jsx)(N.DZ, { variant: 'h3', size: 'xxl', weight: 'bold', className: (0, m.$)(eQ().root, t), lineClamp: i, 'data-test-id': l, children: a });
            };
            var eJ = a(67556),
                e0 = a.n(eJ);
            let e1 = (0, v.PA)((e) => {
                let { data: t, carouselIndex: a, onSlideChange: i, onCarouselReady: l } = e,
                    {
                        slides: { savedChoice: s },
                    } = (0, P.g)(),
                    { isSaved: r } = null != s ? s : { index: 0, isSaved: !1 },
                    [n, o] = (0, p.useState)(() => {
                        if (void 0 !== a) return t.items[a];
                    }),
                    c = (0, p.useCallback)(
                        (e) => {
                            let a = t.items[e];
                            a && (o(a), null == i || i(e, t.items.length));
                        },
                        [t.items, i],
                    );
                return t.items.length
                    ? (0, _.jsxs)('div', {
                          className: e0().root,
                          children: [
                              n && n.data.description && (0, _.jsx)(eR, { caption: n.data.description, className: e0().description, lineClamp: 3 }),
                              (0, _.jsx)(eY, {
                                  isDisabled: r,
                                  initialIndex: a,
                                  slideClassName: e0().slide,
                                  slideActiveClassName: e0().slideActive,
                                  disabledClassName: e0().disabled,
                                  onCarouselReady: l,
                                  onSlideChange: c,
                                  children: t.items.map((e, t) => {
                                      var a, i;
                                      return (0, _.jsx)(
                                          F.t,
                                          {
                                              className: e0().cover,
                                              children:
                                                  e.data.cover.uri &&
                                                  (0, _.jsx)(eK, {
                                                      backgroundSrc: null != (a = e.data.coverBackground) ? a : '',
                                                      className: e0().image,
                                                      fit: 'contain',
                                                      maskSrc: null != (i = e.data.coverMask) ? i : '',
                                                      size: e$.e0,
                                                      src: e.data.cover.uri,
                                                      withAvatarReplace: !0,
                                                      withSrcSet: !1,
                                                  }),
                                          },
                                          t,
                                      );
                                  }),
                              }),
                              (0, _.jsxs)('div', {
                                  className: e0().meta,
                                  children: [
                                      (null == n ? void 0 : n.data.subtitle) && (0, _.jsx)(eR, { caption: n.data.subtitle, className: e0().subtitle }),
                                      (null == n ? void 0 : n.data.title) && (0, _.jsx)(eW, { className: e0().title, heading: n.data.title, lineClamp: 3 }),
                                  ],
                              }),
                          ],
                      })
                    : null;
            });
            !(function (e) {
                ((e.SQUARE = 'SQUARE'), (e.CIRCLE = 'CIRCLE'));
            })(s || (s = {}));
            var e2 = a(80161),
                e8 = a.n(e2),
                e3 = a(28410);
            !(function (e) {
                ((e.NUMBER = 'NUMBER'), (e.TEXT = 'TEXT'));
            })(r || (r = {}));
            var e4 = a(11977),
                e5 = a.n(e4);
            let e6 = (0, v.PA)((e) => {
                    var t;
                    let { data: a, index: i, variant: l, isOrderVisible: n, hasOnlyArtistItems: o } = e,
                        { formatNumber: c } = (0, h.A)(),
                        d = (0, p.useMemo)(
                            () => ({ '--slide-final-translate-offset': l === T.x.CHART && o ? ''.concat(-8 * i, 'px') : 0, animationDelay: ''.concat(0.5 * i, 's') }),
                            [i, o, l],
                        ),
                        u = (0, p.useMemo)(() => {
                            let e = Number(a.subtitle);
                            return a.subtitle && !isNaN(e) ? c(e) : a.subtitle;
                        }, [a.subtitle, c]),
                        v = (0, p.useMemo)(
                            () =>
                                a.titleType === r.NUMBER && 'number' == typeof a.value
                                    ? (0, _.jsx)(ew, {
                                          data: (0, e3.wg)({ value: a.value }),
                                          className: e5().stat,
                                          valueClassName: e5().statValue,
                                          valueContainerClassName: e5().statValueContainer,
                                      })
                                    : a.title
                                      ? l === T.x.CHART_ARTIST
                                          ? (0, _.jsx)(N.DZ, { variant: 'div', size: 's', weight: 'black', lineClamp: 2, className: e5().textVariant, children: a.title })
                                          : (0, _.jsx)(N.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                lineClamp: 2,
                                                className: e5().textVariant,
                                                children: a.title,
                                            })
                                      : void 0,
                            [a.title, a.titleType, a.value, l],
                        ),
                        x = (0, p.useMemo)(() => {
                            if (u)
                                return (l === T.x.CHART && o) || l === T.x.CHART_FAVORITES
                                    ? (0, _.jsx)(N.DZ, {
                                          variant: 'div',
                                          size: 's',
                                          weight: 'black',
                                          lineClamp: 2,
                                          className: (0, m.$)(e5().textVariant, e5().subTitle),
                                          children: u,
                                      })
                                    : (0, _.jsx)(N.HL, {
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'medium',
                                          lineClamp: 2,
                                          className: (0, m.$)(e5().text, { [e5().textVariant]: l === T.x.CHART_ARTIST }),
                                          children: u,
                                      });
                        }, [u, o, l]);
                    return (0, _.jsxs)('li', {
                        className: e5().root,
                        style: d,
                        tabIndex: 0,
                        children: [
                            n && (0, _.jsx)(N.DZ, { variant: 'div', size: 'l', weight: 'black', className: e5().order, children: i + 1 }),
                            (0, _.jsx)(F.t, {
                                radius: a.coverType === s.CIRCLE ? 'round' : 'xs',
                                className: e5().cover,
                                children:
                                    (null == (t = a.cover) ? void 0 : t.uri) &&
                                    (0, _.jsx)(er.B, { src: a.cover.uri, withAvatarReplace: !0, fit: 'contain', className: e5().image, size: 100 }),
                            }),
                            (0, _.jsxs)('div', { className: e5().meta, children: [v, x] }),
                        ],
                    });
                }),
                e7 = (e) => {
                    let { items: t, isOrderVisible: a, variant: i } = e,
                        l = (0, p.useMemo)(() => t.every((e) => e.coverType === s.CIRCLE), [t]),
                        r = (0, p.useMemo)(() => {
                            switch (i) {
                                case T.x.CHART_ARTIST:
                                    return 'l';
                                case T.x.CHART_FAVORITES:
                                    return 'xxl';
                                case T.x.CHART:
                                    if (l) return;
                                    return 'm';
                                default:
                                    return null;
                            }
                        }, [l, i]);
                    return (0, _.jsx)('ol', {
                        className: (0, m.$)(e8().root, e8()['root_spacer_'.concat(r)]),
                        tabIndex: -1,
                        children: t.map((e, t) =>
                            (0, _.jsx)(e6, { data: e, index: t, variant: i, hasOnlyArtistItems: l, isOrderVisible: a }, ''.concat(e.title, '-').concat(e.subtitle)),
                        ),
                    });
                };
            var e9 = a(57378),
                te = a.n(e9);
            let tt = (e) => {
                var t;
                let { data: a } = e;
                return (0, _.jsxs)('div', {
                    className: te().root,
                    children: [
                        (null == (t = a.cover) ? void 0 : t.uri) &&
                            (0, _.jsx)(F.t, {
                                radius: 'round',
                                className: te().cover,
                                children: (0, _.jsx)(er.B, { src: a.cover.uri, withAvatarReplace: !0, fit: 'contain', className: te().image, size: 200 }),
                            }),
                        a.title && (0, _.jsx)(N.DZ, { variant: 'div', size: 'xl', weight: 'bold', className: te().title, lineClamp: 2, children: a.title }),
                        (0, _.jsx)(e7, { items: a.items, isOrderVisible: !1, variant: T.x.CHART_ARTIST }),
                    ],
                });
            };
            var ta = a(86272),
                ti = a.n(ta);
            let tl = (e) => {
                var t;
                let { data: a } = e;
                return (0, _.jsxs)('div', {
                    className: ti().root,
                    children: [
                        a.description && (0, _.jsx)(eR, { caption: null != (t = a.description) ? t : '', className: ti().text, lineClamp: 3 }),
                        (0, _.jsx)(e7, { items: a.items, variant: T.x.CHART, isOrderVisible: a.isOrderVisible }),
                    ],
                });
            };
            var ts = a(22120),
                tr = a.n(ts);
            let tn = (e) => {
                let { data: t } = e,
                    a = 'number' == typeof t.value,
                    i = (0, p.useMemo)(
                        () => ({ value: t.value, valueDescription: t.valueDescription, valueSuffix: t.valueSuffix, footer: t.footer, align: t.align }),
                        [t.footer, t.value, t.valueDescription, t.valueSuffix, t.align],
                    );
                return (0, _.jsxs)('div', {
                    className: tr().root,
                    children: [
                        a && (0, _.jsx)(ew, { data: i, withAutoResize: !0 }),
                        t.description &&
                            (0, _.jsx)(N.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'medium',
                                className: tr().description,
                                lineClamp: 3,
                                children: t.description,
                            }),
                        (0, _.jsx)(e7, { items: t.items, isOrderVisible: t.isOrderVisible, variant: T.x.CHART_FAVORITES }),
                    ],
                });
            };
            (!(function (e) {
                ((e.CHOSEN = 'CHOSEN'), (e.TEXT = 'TEXT'));
            })(n || (n = {})),
                (function (e) {
                    ((e.CHOSEN_IMAGE = 'CHOSEN_IMAGE'), (e.IMAGE = 'IMAGE'));
                })(o || (o = {})),
                (function (e) {
                    ((e.TEXT = 'TEXT'), (e.COLLAGE = 'COLLAGE'));
                })(c || (c = {})));
            var to = a(5834),
                tc = a.n(to);
            let td = (0, v.PA)((e) => {
                let { data: t, carouselIndex: a = 0, onBackgroundChange: i, onCarouselReady: l, onSlideChange: s } = e,
                    {
                        slides: { savedChoices: r },
                    } = (0, P.g)();
                (0, p.useEffect)(() => {
                    var e, l, s;
                    return null == i ? void 0 : i(null != (s = null == (l = t.items[a]) || null == (e = l.contentBackground) ? void 0 : e.uri) ? s : '');
                }, [t.items, a, i]);
                let c = (0, f.c)((e) => {
                    var a, l, r;
                    (null == i || i(null != (r = null == (l = t.items[e]) || null == (a = l.contentBackground) ? void 0 : a.uri) ? r : ''),
                        null == s || s(e, t.items.length));
                });
                return t.items.length
                    ? (0, _.jsx)('div', {
                          className: tc().root,
                          children: (0, _.jsx)(eY, {
                              initialIndex: a,
                              slidesPerView: 1,
                              onCarouselReady: l,
                              onSlideChange: c,
                              children: t.items.map((e, t) => {
                                  let a,
                                      { topBlock: i, bottomBlock: l } = e,
                                      {
                                          background: { uri: s },
                                          items: c,
                                      } = i.data,
                                      d = c.reduce((e, t) => {
                                          let a, i, l;
                                          if (t.type === o.IMAGE) a = t.data.uri;
                                          else if (t.type === o.CHOSEN_IMAGE) {
                                              var s;
                                              let e = r.get(null != (s = t.data.key) ? s : '');
                                              ((a = null == e ? void 0 : e.data.uri),
                                                  (i = null == e ? void 0 : e.data.coverMask),
                                                  (l = null == e ? void 0 : e.data.coverBackground));
                                          }
                                          if (!a) return e;
                                          let { x: n, y: c, z: d, width: u, height: _ } = t.data.rectangle;
                                          return (
                                              e.push({
                                                  uri: a,
                                                  coverMask: i,
                                                  coverBackground: l,
                                                  rectangle: {
                                                      left: ''.concat(n, '%'),
                                                      top: ''.concat(1.25 * c, '%'),
                                                      zIndex: d,
                                                      width: ''.concat(u, '%'),
                                                      height: ''.concat(1.25 * _, '%'),
                                                  },
                                              }),
                                              e
                                          );
                                      }, []),
                                      u =
                                          ((a = l.data.items),
                                          a.map((e) => {
                                              let t;
                                              if (e.type === n.TEXT) t = e.data.subtitle;
                                              else if (e.type === n.CHOSEN) {
                                                  var a;
                                                  let i = r.get(null != (a = e.data.key) ? a : '');
                                                  t = null == i ? void 0 : i.data.text;
                                              }
                                              return { title: e.data.title, subtitle: t };
                                          }));
                                  return (0, _.jsxs)(
                                      'div',
                                      {
                                          className: tc().slide,
                                          children: [
                                              (0, _.jsxs)('div', {
                                                  className: tc().topBlock,
                                                  children: [
                                                      s && (0, _.jsx)(V._V, { className: tc().topBlockBackground, src: s, withAvatarReplace: !0 }),
                                                      d.map((e, t) => {
                                                          let { uri: a, coverMask: i, coverBackground: l, rectangle: s } = e;
                                                          return (0, _.jsx)(
                                                              'div',
                                                              {
                                                                  className: tc().topBlockImageWrapper,
                                                                  style: s,
                                                                  children: (0, _.jsx)(eK, {
                                                                      backgroundSrc: l,
                                                                      className: tc().topBlockImage,
                                                                      fit: 'contain',
                                                                      maskSrc: i,
                                                                      size: e$.e0,
                                                                      src: a,
                                                                      withAvatarReplace: !0,
                                                                      withSrcSet: !1,
                                                                  }),
                                                              },
                                                              t,
                                                          );
                                                      }),
                                                  ],
                                              }),
                                              (0, _.jsx)('div', {
                                                  className: tc().bottomBlock,
                                                  children: u.map((e, t) => {
                                                      let { title: a, subtitle: i } = e;
                                                      return (0, _.jsxs)(
                                                          'div',
                                                          {
                                                              className: tc().bottomBlock_item,
                                                              children: [
                                                                  a && (0, _.jsx)(eR, { caption: a, className: tc().title, lineClamp: 1 }),
                                                                  i && (0, _.jsx)(eW, { heading: i, className: tc().subtitle, lineClamp: 1 === t ? 1 : 2 }),
                                                              ],
                                                          },
                                                          a,
                                                      );
                                                  }),
                                              }),
                                          ],
                                      },
                                      t,
                                  );
                              }),
                          }),
                      })
                    : null;
            });
            var tu = a(83280),
                t_ = a.n(tu),
                tm = a(2855),
                tv = a(16637),
                tx = a.n(tv),
                tp = a(55949),
                th = a(68934),
                tC = a(4663),
                tg = a.n(tC);
            let tI = { maxFontSize: 20, minFontSize: 12, lineHeight: 1 },
                tS = (e) => {
                    let { children: t, className: a, textOptions: i } = e,
                        l = { ...tI, ...i },
                        [s, r] = (0, th.d)();
                    return ((0, tp.mf)(s, l), (0, _.jsx)('div', { className: (0, m.$)(tg().root, a), ref: r, children: t }));
                };
            var tT = a(61193),
                tf = a.n(tT);
            let tA = (e) => {
                let { data: t } = e,
                    { contentImage: a, contentLogo: i, metaLabel: l, festivalTextColor: s, festivalTitle: r, artists: n } = t,
                    o = null == a ? void 0 : a.uri,
                    c = null == i ? void 0 : i.uri,
                    d = s ? { '--festival-title-color': s } : void 0;
                return (0, _.jsxs)(_.Fragment, {
                    children: [
                        l &&
                            (0, _.jsx)('div', {
                                className: tf().header,
                                children: (0, _.jsx)(N.DZ, {
                                    className: tf().metaLabel,
                                    variant: 'span',
                                    type: 'text',
                                    size: 'xxs',
                                    weight: 'bold',
                                    'data-test-id': S.OA.slides.LINEUP_META_LABEL,
                                    children: l,
                                }),
                            }),
                        o &&
                            (0, _.jsx)(V._V, {
                                className: tf().festivalImage,
                                src: o,
                                fit: 'contain',
                                size: 'orig',
                                withAvatarReplace: !0,
                                withSrcSet: !1,
                                withFallback: !1,
                                withLoadingIndicator: !1,
                                'data-test-id': S.OA.slides.LINEUP_CONTENT_IMAGE,
                            }),
                        (0, _.jsxs)(tS, {
                            className: tf().text,
                            children: [
                                r &&
                                    (0, _.jsx)(N.DZ, {
                                        className: tf().festivalTitle,
                                        style: d,
                                        variant: 'span',
                                        type: 'text',
                                        size: 'xl',
                                        weight: 'bold',
                                        lineClamp: 2,
                                        'data-test-id': S.OA.slides.LINEUP_FESTIVAL_TITLE,
                                        children: r,
                                    }),
                                n.length > 0 &&
                                    (0, _.jsx)(N.DZ, {
                                        className: tf().artists,
                                        style: d,
                                        variant: 'span',
                                        type: 'text',
                                        size: 'xl',
                                        weight: 'bold',
                                        lineClamp: 6,
                                        'data-test-id': S.OA.slides.LINEUP_ARTISTS,
                                        children: n.join(e$.$$),
                                    }),
                            ],
                        }),
                        c &&
                            (0, _.jsx)(V._V, {
                                className: tf().logo,
                                src: c,
                                fit: 'contain',
                                size: 'orig',
                                withAvatarReplace: !0,
                                withSrcSet: !1,
                                withFallback: !1,
                                withLoadingIndicator: !1,
                                'aria-hidden': !0,
                                'data-test-id': S.OA.slides.LINEUP_CONTENT_LOGO,
                            }),
                    ],
                });
            };
            var tE = a(27075),
                tL = a.n(tE);
            let tN = (e) => {
                let { data: t } = e,
                    { contentLogo: a, contentImage: i, metaLabel: l, artists: s } = t,
                    r = null == a ? void 0 : a.uri,
                    n = null == i ? void 0 : i.uri,
                    o = (0, et.L)(() =>
                        r || l
                            ? (0, _.jsxs)('div', {
                                  className: tL().header,
                                  children: [
                                      r &&
                                          (0, _.jsx)(V._V, {
                                              className: tL().headerLogo,
                                              src: r,
                                              fit: 'contain',
                                              size: 'orig',
                                              withAvatarReplace: !0,
                                              withSrcSet: !1,
                                              withFallback: !1,
                                              withLoadingIndicator: !1,
                                              'aria-hidden': !0,
                                              'data-test-id': S.OA.slides.LINEUP_CONTENT_LOGO,
                                          }),
                                      l &&
                                          (0, _.jsx)(N.DZ, {
                                              className: tL().metaLabel,
                                              variant: 'span',
                                              type: 'text',
                                              size: 'xxs',
                                              weight: 'bold',
                                              'data-test-id': S.OA.slides.LINEUP_META_LABEL,
                                              children: l,
                                          }),
                                  ],
                              })
                            : null,
                    ),
                    c = (0, et.L)(() =>
                        s.length
                            ? (0, _.jsx)(tS, {
                                  className: tL().artists,
                                  children: (0, _.jsx)('div', {
                                      className: tL().artistList,
                                      children: s.map((e) =>
                                          (0, _.jsx)(
                                              N.DZ,
                                              {
                                                  className: tL().artist,
                                                  variant: 'span',
                                                  type: 'text',
                                                  size: 'xs',
                                                  weight: 'bold',
                                                  lineClamp: 2,
                                                  'data-test-id': S.OA.slides.LINEUP_ARTIST,
                                                  children: e,
                                              },
                                              e,
                                          ),
                                      ),
                                  }),
                              })
                            : null,
                    );
                return (0, _.jsxs)(_.Fragment, {
                    children: [
                        o,
                        n &&
                            (0, _.jsx)(V._V, {
                                className: tL().festivalImage,
                                src: n,
                                fit: 'contain',
                                size: 'orig',
                                withAvatarReplace: !0,
                                withSrcSet: !1,
                                withFallback: !1,
                                withLoadingIndicator: !1,
                                'data-test-id': S.OA.slides.LINEUP_CONTENT_IMAGE,
                            }),
                        c,
                    ],
                });
            };
            var tb = a(56711),
                ty = a.n(tb);
            let tj = (0, v.PA)((e) => {
                    let { data: t } = e,
                        { eventTagLabel: a, metaLabel: i, contentLogo: l, artists: s } = t,
                        r = (0, p.useRef)(null),
                        n = (0, p.useRef)(null),
                        o = (0, p.useRef)(s),
                        [c, d] = (0, p.useState)(!1),
                        u = ((e, t) => (e < 4 ? 1 : 4 === e || t ? 2 : 3))(s.length, c),
                        m = s.slice(0, u),
                        v = s.slice(u);
                    ((0, p.useLayoutEffect)(() => {
                        o.current !== s && ((o.current = s), d(!1));
                    }, [s]),
                        (0, p.useLayoutEffect)(() => {
                            let e = n.current;
                            3 === u && e && d(e.scrollHeight > e.clientHeight + 1);
                        }, [s, u]),
                        (0, p.useEffect)(() => {
                            let e = r.current;
                            if (!e) return;
                            let t = new ResizeObserver(() => {
                                let e = n.current;
                                d(!!((null == e ? void 0 : e.children.length) === 3 && e.scrollHeight > e.clientHeight + 1));
                            });
                            return (t.observe(e), () => t.disconnect());
                        }, []));
                    let x = (0, et.L)(() =>
                        a || i
                            ? (0, _.jsxs)('div', {
                                  className: ty().header,
                                  children: [
                                      a &&
                                          (0, _.jsx)(N.DZ, {
                                              className: ty().eventTag,
                                              lineClamp: 2,
                                              variant: 'span',
                                              type: 'text',
                                              size: 'xxs',
                                              weight: 'bold',
                                              'data-test-id': S.OA.slides.LINEUP_EVENT_TAG,
                                              children: a,
                                          }),
                                      i &&
                                          (0, _.jsx)(N.DZ, {
                                              className: ty().metaLabel,
                                              variant: 'span',
                                              type: 'text',
                                              size: 'xxs',
                                              weight: 'bold',
                                              'data-test-id': S.OA.slides.LINEUP_META_LABEL,
                                              children: i,
                                          }),
                                  ],
                              })
                            : null,
                    );
                    return (0, _.jsxs)('div', {
                        className: ty().root,
                        ref: r,
                        children: [
                            x,
                            (0, _.jsxs)(tS, {
                                className: ty().artists,
                                children: [
                                    (0, _.jsx)('div', {
                                        className: ty().highlighted,
                                        ref: n,
                                        children: m.map((e) =>
                                            (0, _.jsx)(
                                                N.DZ,
                                                {
                                                    className: ty().highlightedItem,
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'xl',
                                                    weight: 'bold',
                                                    lineClamp: 3,
                                                    'data-test-id': S.OA.slides.LINEUP_HIGHLIGHTED_ARTIST,
                                                    children: e,
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                    v.length > 0 &&
                                        (0, _.jsx)(N.DZ, {
                                            className: ty().restItem,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'xxs',
                                            weight: 'bold',
                                            lineClamp: 4,
                                            'data-test-id': S.OA.slides.LINEUP_REST_ARTISTS,
                                            children: v.join(e$.$$),
                                        }),
                                ],
                            }),
                            (null == l ? void 0 : l.uri) &&
                                (0, _.jsx)(V._V, {
                                    className: ty().logo,
                                    src: l.uri,
                                    fit: 'contain',
                                    size: 'orig',
                                    withAvatarReplace: !0,
                                    withSrcSet: !1,
                                    withFallback: !1,
                                    withLoadingIndicator: !1,
                                    'aria-hidden': !0,
                                    'data-test-id': S.OA.slides.LINEUP_CONTENT_LOGO,
                                }),
                        ],
                    });
                }),
                tR = (e) => {
                    var t;
                    let { type: a, data: i, isActive: l } = e,
                        s = null == (t = i.contentBackground) ? void 0 : t.uri,
                        r = ((e) => {
                            let { artistTextColor: t, metaLabelTextColor: a, eventTagLabelTextColor: i } = e;
                            if (t || a || i)
                                return {
                                    ...(t && { '--lineup-content-text-color': t }),
                                    ...(a && { '--lineup-content-meta-label-text-color': a }),
                                    ...(i && { '--lineup-content-event-tag-label-text-color': i }),
                                };
                        })(i),
                        n = ((e) => {
                            switch (e) {
                                case tm.y.LINEUP:
                                    return S.OA.slides.LINEUP_SIMPLE_ITEM;
                                case tm.y.LINEUP_WITH_FESTIVAL:
                                    return S.OA.slides.LINEUP_FESTIVAL_ITEM;
                                case tm.y.LINEUP_WITH_FESTIVAL_IMAGE:
                                    return S.OA.slides.LINEUP_FESTIVAL_IMAGE_ITEM;
                                default:
                                    return;
                            }
                        })(a),
                        o = (0, et.L)(() => {
                            switch (a) {
                                case tm.y.LINEUP:
                                    return (0, _.jsx)(tj, { data: i });
                                case tm.y.LINEUP_WITH_FESTIVAL:
                                    return (0, _.jsx)(tN, { data: i });
                                case tm.y.LINEUP_WITH_FESTIVAL_IMAGE:
                                    return (0, _.jsx)(tA, { data: i });
                                default:
                                    return null;
                            }
                        });
                    return (0, _.jsxs)('div', {
                        className: tx().root,
                        style: r,
                        'data-screenshot-hidden': !l || void 0,
                        'data-test-id': n,
                        children: [
                            s &&
                                (0, _.jsx)(V._V, {
                                    className: tx().background,
                                    src: s,
                                    fit: 'cover',
                                    size: 'orig',
                                    withAvatarReplace: !0,
                                    withSrcSet: !1,
                                    withFallback: !1,
                                    withLoadingIndicator: !1,
                                    'aria-hidden': !0,
                                    'data-test-id': S.OA.slides.LINEUP_BACKGROUND_IMAGE,
                                }),
                            (0, _.jsx)('div', { className: tx().content, children: o }),
                        ],
                    });
                },
                tk = (0, v.PA)((e) => {
                    let { data: t, carouselIndex: a = 0, onSlideChange: i, onCarouselReady: l, onBackgroundChange: s, onShareBackgroundChange: r } = e,
                        [n, o] = (0, p.useState)(a);
                    ((0, p.useEffect)(() => {
                        var e, i;
                        return null == s ? void 0 : s(null == (i = t.items[a]) || null == (e = i.data.slideBackground) ? void 0 : e.uri);
                    }, [a, t.items, s]),
                        (0, p.useEffect)(() => {
                            var e, i, l;
                            return null == r ? void 0 : r(null != (l = null == (i = t.items[a]) || null == (e = i.data.shareBackground) ? void 0 : e.uri) ? l : '');
                        }, [a, t.items, r]));
                    let c = (0, p.useMemo)(() => {
                            if (void 0 !== n) return t.items[n];
                        }, [n, t.items]),
                        d = (0, p.useCallback)(
                            (e) => {
                                var a, l, n;
                                let c = t.items[e];
                                c &&
                                    (o(e),
                                    null == i || i(e, t.items.length),
                                    null == s || s(null == (a = c.data.slideBackground) ? void 0 : a.uri),
                                    null == r || r(null != (n = null == (l = c.data.shareBackground) ? void 0 : l.uri) ? n : ''));
                            },
                            [t.items, s, r, i],
                        );
                    return t.items.length
                        ? (0, _.jsxs)('div', {
                              className: t_().root,
                              'data-test-id': S.OA.slides.LINEUP_CONTENT,
                              children: [
                                  (0, _.jsx)(eY, {
                                      className: t_().carousel,
                                      initialIndex: a,
                                      slideClassName: t_().slide,
                                      slideActiveClassName: t_().slideActive,
                                      slidesPerView: 'auto',
                                      onCarouselReady: l,
                                      onSlideChange: d,
                                      spaceBetween: 14,
                                      children: t.items.map((e, t) => (0, _.jsx)(tR, { data: e.data, type: e.type, isActive: t === n }, t)),
                                  }),
                                  (0, _.jsx)('div', {
                                      className: t_().meta,
                                      'data-screenshot-hidden': !0,
                                      children:
                                          (null == c ? void 0 : c.data.contentDescription) &&
                                          (0, _.jsx)(eR, {
                                              caption: c.data.contentDescription,
                                              className: t_().description,
                                              lineClamp: 3,
                                              'data-test-id': S.OA.slides.LINEUP_DESCRIPTION,
                                          }),
                                  }),
                              ],
                          })
                        : null;
                });
            var tO = a(49337),
                tw = a(96618),
                tP = a(85885),
                tB = a.n(tP);
            let tD = (0, v.PA)((e) => {
                var t, a, i, l, s, r, n, o;
                let { data: c } = e,
                    { lumen: d } = (0, P.g)(),
                    { theme: u } = (0, tw.W)(),
                    m = null != u ? u : tO.S.Dark,
                    v = d.getFallbackImage(),
                    x = d.isTriedToLoadData && !d.isAwakened,
                    p = null != (n = null == (t = c.unawakenedLumenImage) ? void 0 : t.uri) ? n : null,
                    h = null != (o = null == (a = d.themes) ? void 0 : a[m].uri) ? o : v[m],
                    C = x ? p : h,
                    g = null == (l = c.query) || null == (i = l.image) ? void 0 : i.uri,
                    I = null == (s = c.query) ? void 0 : s.textColor,
                    T = null == (r = c.query) ? void 0 : r.text,
                    f = I ? { '--query-text-color': I } : void 0,
                    A = (0, et.L)(() =>
                        d.isTriedToLoadData && C
                            ? (0, _.jsx)(F.t, {
                                  className: tB().lumenAvatar,
                                  children: (0, _.jsx)(V._V, {
                                      src: C,
                                      fit: 'contain',
                                      withAvatarReplace: !0,
                                      withFallback: !1,
                                      withLoadingIndicator: !1,
                                      size: 'orig',
                                      className: tB().lumenAvatarImage,
                                      'aria-hidden': !0,
                                      'data-test-id': S.OA.slides.LUMEN_AVATAR,
                                  }),
                              })
                            : null,
                    ),
                    E = (0, et.L)(() =>
                        g && T
                            ? (0, _.jsxs)('div', {
                                  className: tB().queryWrapper,
                                  style: f,
                                  'data-test-id': S.OA.slides.LUMEN_QUERY,
                                  children: [
                                      g &&
                                          (0, _.jsx)(er.B, { src: g, withAvatarReplace: !0, withAspectRatio: !0, fit: 'contain', size: 300, className: tB().queryImage }),
                                      T &&
                                          (0, _.jsx)(N.HL, {
                                              variant: 'span',
                                              type: 'text',
                                              size: 'm',
                                              weight: 'medium',
                                              className: tB().queryText,
                                              lineClamp: 2,
                                              'data-test-id': S.OA.slides.LUMEN_QUERY_TEXT,
                                              children: T,
                                          }),
                                  ],
                              })
                            : null,
                    );
                return (0, _.jsxs)('div', {
                    className: tB().root,
                    'data-test-id': S.OA.slides.LUMEN_CONTENT,
                    children: [
                        (0, _.jsx)('div', { className: tB().lumenAvatarArea, children: A }),
                        E,
                        c.title && (0, _.jsx)(eW, { heading: c.title, className: tB().title, lineClamp: 4, 'data-test-id': S.OA.slides.LUMEN_TITLE }),
                        c.subtitle && (0, _.jsx)(eR, { caption: c.subtitle, className: tB().subtitle, lineClamp: 4, 'data-test-id': S.OA.slides.LUMEN_SUBTITLE }),
                    ],
                });
            });
            var tM = a(56740),
                tU = a.n(tM);
            let tz = (e) => {
                let { data: t } = e;
                return (0, _.jsxs)('div', {
                    className: tU().root,
                    children: [
                        (0, _.jsx)(N.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'medium',
                            className: (0, m.$)(tU().description, tU().text),
                            lineClamp: 3,
                            children: t.description,
                        }),
                        t.artwork && (0, _.jsx)(V._V, { src: t.artwork, size: 300, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0, className: tU().artwork }),
                        (0, _.jsx)(N.DZ, { variant: 'h2', size: 'xl', weight: 'black', className: (0, m.$)(tU().title, tU().text), lineClamp: 2, children: t.title }),
                    ],
                });
            };
            !(function (e) {
                ((e.REWIND = 'REWIND'), (e.TRACK = 'TRACK'));
            })(d || (d = {}));
            let tF = { src: '/_next/static/media/trailer_animated.aa3fd227.gif' };
            var tH = a(14156),
                tV = a.n(tH);
            let tG = (0, v.PA)((e) => {
                var t, a;
                let { data: l, withPersonalColor: s } = e,
                    { user: r } = (0, P.g)(),
                    n = l.entityType === d.REWIND,
                    o = null == (t = l.smallRoundCover) ? void 0 : t.uri,
                    c = o && !n,
                    u = n || (o && !c),
                    v = l.align === i.BOTTOM,
                    x = u || c,
                    h = (0, p.useMemo)(() => {
                        if (!s || !r.collectionHue) {
                            var e;
                            return {
                                '--cover-background-color': l.cover.color,
                                '--small-round-cover-background-color': null == (e = l.smallRoundCover) ? void 0 : e.color,
                            };
                        }
                        return {
                            '--cover-background-color': (0, G.e)(r.collectionHue, 0.8, 0.6),
                            '--small-round-cover-background-color': (0, G.e)(r.collectionHue, 1, 0.35),
                        };
                    }, [l.cover.color, null == (a = l.smallRoundCover) ? void 0 : a.color, r.collectionHue, s]),
                    C = (0, et.L)(() =>
                        (0, _.jsx)(F.t, {
                            radius: 'round',
                            className: tV().smallRoundCover,
                            children: (0, _.jsx)(V._V, {
                                src: tF.src,
                                withFallback: !1,
                                withLoadingIndicator: !1,
                                fit: 'contain',
                                className: tV().trailer,
                                'aria-hidden': !0,
                            }),
                        }),
                    ),
                    g = (0, et.L)(() => {
                        if (o)
                            return (0, _.jsx)(F.t, {
                                radius: 'round',
                                className: (0, m.$)(tV().smallRoundCover, tV().smallRoundCover_withShadow),
                                children: (0, _.jsx)(er.B, { src: o, withAvatarReplace: !0, fit: 'contain', size: 100, className: tV().image }),
                            });
                    }),
                    I = (0, et.L)(() => (u ? (n ? C : g) : null));
                return (0, _.jsxs)('div', {
                    className: tV().root,
                    style: h,
                    children: [
                        !v && l.description && (0, _.jsx)(eR, { caption: l.description, className: tV().description, lineClamp: 3 }),
                        (0, _.jsxs)(F.t, {
                            className: (0, m.$)(tV().cover, { [tV().cover_small]: v, [tV().cover_withSmallRoundCoverOnCover]: c }),
                            children: [
                                l.cover.uri &&
                                    (0, _.jsx)(eK, {
                                        backgroundSrc: l.coverBackground,
                                        className: tV().image,
                                        fit: 'contain',
                                        maskSrc: l.coverMask,
                                        size: e$.e0,
                                        src: l.cover.uri,
                                        withAvatarReplace: !0,
                                        withSrcSet: !1,
                                    }),
                                c && g,
                            ],
                        }),
                        (0, _.jsxs)('div', {
                            className: (0, m.$)(tV().meta, { [tV().meta_withCover]: x }),
                            children: [
                                I,
                                l.subtitle && (0, _.jsx)(eR, { caption: l.subtitle, className: tV().subtitle, lineClamp: 3 }),
                                l.title && (0, _.jsx)(eW, { heading: l.title, lineClamp: 3 }),
                                v && l.description && (0, _.jsx)(eR, { caption: l.description, className: tV().description, lineClamp: 3 }),
                            ],
                        }),
                    ],
                });
            });
            var tK = a(51402),
                t$ = a.n(tK);
            let tX = (e) => {
                var t, a;
                let { data: i } = e;
                return (0, _.jsxs)('div', {
                    className: t$().root,
                    children: [
                        (0, _.jsx)(eR, { caption: null != (t = i.header) ? t : '', className: t$().text, lineClamp: 3 }),
                        i.stats.map((e) =>
                            (0, _.jsx)(ew, { data: e, descriptionLineClamp: 2, withAutoResize: !0, withOpacity: !0 }, ''.concat(e.value, '-').concat(e.valueDescription)),
                        ),
                        (0, _.jsx)(eR, { caption: null != (a = i.footer) ? a : '', className: t$().text, lineClamp: 3 }),
                    ],
                });
            };
            !(function (e) {
                ((e.SMALL = 'SMALL'), (e.BIG = 'BIG'));
            })(u || (u = {}));
            var tZ = a(96668),
                tY = a.n(tZ);
            let tq = (e) => {
                var t;
                let { data: a, disclaimer: i } = e,
                    l = a.titleSize === u.BIG ? 'xxl' : 'xl',
                    s = (0, et.L)(() => {
                        if (null == i ? void 0 : i.textColor) return { '--disclaimer-text-color': i.textColor };
                    });
                return (0, _.jsxs)('div', {
                    className: tY().root,
                    style: s,
                    'data-test-id': S.OA.slides.TEXT_CONTENT,
                    children: [
                        (0, _.jsx)(N.DZ, {
                            variant: 'h2',
                            size: l,
                            weight: 'black',
                            className: tY().text,
                            lineClamp: 4,
                            'data-test-id': S.OA.slides.TEXT_TITLE,
                            children: a.title,
                        }),
                        (0, _.jsx)(eR, { caption: null != (t = a.subtitle) ? t : '', className: tY().text, lineClamp: 4, 'data-test-id': S.OA.slides.TEXT_SUBTITLE }),
                        (null == i ? void 0 : i.text) &&
                            (0, _.jsx)('span', {
                                className: tY().disclaimer,
                                dangerouslySetInnerHTML: { __html: (0, g.ky)(i.text) },
                                'data-test-id': S.OA.slides.TEXT_DISCLAIMER,
                            }),
                    ],
                });
            };
            var tQ = a(28340),
                tW = a.n(tQ);
            let tJ = (e) => {
                let {
                    data: { title: t, subtitle: a, description: i },
                } = e;
                return (0, _.jsxs)('div', {
                    className: tW().root,
                    children: [
                        (0, _.jsx)(N.DZ, {
                            variant: 'h2',
                            size: 'xxxl',
                            weight: 'black',
                            className: (0, m.$)(tW().text, tW().header),
                            dangerouslySetInnerHTML: { __html: (0, g.ky)(t || '') },
                        }),
                        (0, _.jsx)(N.DZ, { variant: 'h3', size: 'xl', weight: 'black', className: tW().text, dangerouslySetInnerHTML: { __html: (0, g.ky)(a || '') } }),
                        i &&
                            (0, _.jsx)(N.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'medium',
                                className: tW().text,
                                dangerouslySetInnerHTML: { __html: (0, g.ky)(i) },
                            }),
                    ],
                });
            };
            var t0 = a(55168),
                t1 = a.n(t0);
            let t2 = (e) => {
                let { data: t } = e,
                    a = t.coverType === s.CIRCLE ? 'round' : 'xs';
                return (0, _.jsxs)('div', {
                    className: t1().root,
                    'data-test-id': S.OA.slides.TEXT_FACT_CONTENT,
                    children: [
                        t.smallCover &&
                            (0, _.jsx)(F.t, {
                                radius: a,
                                className: t1().cover,
                                'data-test-id': S.OA.slides.TEXT_FACT_COVER,
                                children: (0, _.jsx)(er.B, { src: t.smallCover, withAvatarReplace: !0, fit: 'contain', size: 100, className: t1().image }),
                            }),
                        t.coverTitle &&
                            (0, _.jsx)(N.DZ, {
                                variant: 'span',
                                weight: 'bold',
                                size: 'l',
                                className: t1().text,
                                lineClamp: 4,
                                'data-test-id': S.OA.slides.TEXT_FACT_COVER_TITLE,
                                children: t.coverTitle,
                            }),
                        (0, _.jsx)(ew, { data: t, withAutoResize: !0, lineClamp: 4 }),
                    ],
                });
            };
            var t8 = a(33804),
                t3 = a.n(t8);
            let t4 = (e) => {
                    let { label: t, description: a, artistsName: i, trackTitle: l, coverUri: s } = e,
                        r = [i, l].filter(Boolean).join(' • ');
                    return (0, _.jsxs)('div', {
                        children: [
                            (0, _.jsx)(N.DZ, { className: (0, m.$)(t3().textSecondary, t3().itemLabel), variant: 'h3', size: 's', weight: 'black', children: t }),
                            (0, _.jsx)(V._V, {
                                className: t3().cover,
                                src: s,
                                fit: 'cover',
                                withLoadingIndicator: !1,
                                withFallback: !0,
                                withAvatarReplace: !0,
                                withAspectRatio: !0,
                                'aria-hidden': !0,
                            }),
                            (0, _.jsx)(N.HL, {
                                className: (0, m.$)(t3().textPrimary, t3().itemMeta),
                                variant: 'div',
                                type: 'text',
                                size: 'l',
                                weight: 'medium',
                                lineClamp: 2,
                                children: r,
                            }),
                            (0, _.jsx)(N.DZ, { className: (0, m.$)(t3().textSecondary, t3().header), variant: 'h3', size: 'xl', weight: 'black', children: a }),
                        ],
                    });
                },
                t5 = (0, v.PA)((e) => {
                    var t, a, i, l, s, r, n, o, c, d, u, v;
                    let { data: x } = e,
                        { title: p, subtitle: h, firstItem: C, secondItem: g } = x;
                    return (0, _.jsxs)('div', {
                        className: t3().root,
                        children: [
                            (0, _.jsxs)('div', {
                                className: t3().row,
                                children: [
                                    (0, _.jsx)(N.DZ, { className: (0, m.$)(t3().textPrimary, t3().header), variant: 'h2', size: 'xxxl', weight: 'black', children: p }),
                                    (0, _.jsx)(N.DZ, { className: t3().textPrimary, variant: 'h3', size: 's', weight: 'black', children: h }),
                                ],
                            }),
                            C &&
                                (0, _.jsx)('div', {
                                    className: t3().row,
                                    children: (0, _.jsx)(t4, {
                                        label: C.label,
                                        description: C.description,
                                        artistsName: null != (n = null == (t = C.track) ? void 0 : t.artistsName) ? n : null,
                                        trackTitle: null != (o = null == (a = C.track) ? void 0 : a.title) ? o : null,
                                        coverUri: null != (c = null == (i = C.track) ? void 0 : i.coverUri) ? c : void 0,
                                    }),
                                }),
                            g &&
                                (0, _.jsx)('div', {
                                    className: t3().row,
                                    children: (0, _.jsx)(t4, {
                                        label: g.label,
                                        description: g.description,
                                        artistsName: null != (d = null == (l = g.track) ? void 0 : l.artistsName) ? d : null,
                                        trackTitle: null != (u = null == (s = g.track) ? void 0 : s.title) ? u : null,
                                        coverUri: null != (v = null == (r = g.track) ? void 0 : r.coverUri) ? v : void 0,
                                    }),
                                }),
                        ],
                    });
                }),
                t6 = (e) => {
                    let { content: t, withPersonalColor: a, ...i } = e;
                    if (null == t ? void 0 : t.data)
                        switch (t.type) {
                            case T.x.TEXT:
                                return (0, _.jsx)(tq, { data: t.data, disclaimer: t.disclaimer });
                            case T.x.STATS:
                                return (0, _.jsx)(tX, { data: t.data });
                            case T.x.CHART:
                                return (0, _.jsx)(tl, { data: t.data });
                            case T.x.CHART_FAVORITES:
                                return (0, _.jsx)(tn, { data: t.data });
                            case T.x.SINGLE_ENTITY:
                                return (0, _.jsx)(tG, { data: t.data, withPersonalColor: a });
                            case T.x.TEXT_FACT:
                                return (0, _.jsx)(t2, { data: t.data });
                            case T.x.CHART_ARTIST:
                                return (0, _.jsx)(tt, { data: t.data });
                            case T.x.ARTISTS:
                                return (0, _.jsx)(eD, { data: t.data });
                            case T.x.TEXT_EXTENDED:
                                return (0, _.jsx)(tJ, { data: t.data });
                            case T.x.THEN_NOW_COMPARISON:
                                return (0, _.jsx)(t5, { data: t.data });
                            case T.x.PAY_CARD:
                                return (0, _.jsx)(tz, { data: t.data });
                            case T.x.CAROUSEL:
                                return (0, _.jsx)(e1, { data: t.data, ...i });
                            case T.x.COLLAGE:
                                return (0, _.jsx)(td, { data: t.data, onBackgroundChange: i.onBackgroundChange, ...i });
                            case T.x.LINEUP:
                                return (0, _.jsx)(tk, { data: t.data, ...i });
                            case T.x.LUMEN:
                                return (0, _.jsx)(tD, { data: t.data });
                        }
                    return null;
                };
            var t7 = a(117),
                t9 = a.n(t7);
            let ae = (e) => {
                let { src: t, className: a, 'data-test-id': i } = e;
                return (0, _.jsx)(V._V, {
                    className: (0, m.$)(t9().root, a),
                    fit: 'contain',
                    src: t,
                    size: 'orig',
                    withAvatarReplace: !0,
                    alt: '',
                    'aria-hidden': !0,
                    withLoadingIndicator: !1,
                    'data-test-id': i,
                });
            };
            var at = a(33045),
                aa = a.n(at);
            let ai = !0,
                al = (0, v.PA)((e) => {
                    var t, a;
                    let { slide: l, isActive: s } = e,
                        {
                            slides: { savedChoice: r, saveChoice: n, isMuted: o },
                        } = (0, P.g)(),
                        c = (0, H.m)(),
                        { carouselIndex: d = 0, setCarouselIndex: u } = l,
                        v = (0, p.useRef)(null),
                        [x, h] = (0, p.useState)(void 0),
                        [C, g] = (0, p.useState)(0),
                        [A, E] = (0, p.useState)(l.background),
                        [L, N] = (0, p.useState)(''),
                        { state: b, toggleTrue: y, toggleFalse: j } = (0, R.e)(!1),
                        k = (0, p.useMemo)(() => {
                            let e = l.content;
                            if ((null == e ? void 0 : e.data) && 'align' in e.data) {
                                var t;
                                switch (null == (t = e.data) ? void 0 : t.align) {
                                    case i.TOP:
                                        return 'top';
                                    case i.CENTER:
                                        break;
                                    case i.BOTTOM:
                                        return 'bottom';
                                }
                            }
                            return 'center';
                        }, [l]);
                    ((0, p.useEffect)(() => {
                        var e, t, a, i, s, r;
                        ((null == (e = l.content) ? void 0 : e.type) === T.x.CAROUSEL ||
                            (null == (t = l.content) ? void 0 : t.type) === T.x.COLLAGE ||
                            (null == (a = l.content) ? void 0 : a.type) === T.x.LINEUP) &&
                            g(null != (r = null == (s = l.content.data) || null == (i = s.items) ? void 0 : i.length) ? r : 0);
                    }, [l.content]),
                        (0, p.useEffect)(() => {
                            (o || (ai = !0), o && ai && (c({ actionType: I.ActionType.MuteTrailer }), (ai = !1)));
                        }, [o, c]));
                    let O = (0, f.c)((e) => h(e)),
                        w = (0, f.c)(() => (null == x ? void 0 : x.slidePrev())),
                        B = (0, f.c)(() => (null == x ? void 0 : x.slideNext())),
                        D = (0, f.c)(() => {
                            r && l.savedChoiceKey && n(l.savedChoiceKey, { ...r, isSaved: !1 });
                        }),
                        M = (0, f.c)(() => {
                            var e, t, a, i, s;
                            if (!l.savedChoiceKey || (null == (e = l.content) ? void 0 : e.type) !== T.x.CAROUSEL) return;
                            let r = null == (i = l.content.data) || null == (a = i.items) || null == (t = a[d]) ? void 0 : t.data;
                            if (!r) return;
                            c({ actionType: I.ActionType.SelectSlideItem, objectPosX: d + 1 });
                            let { coverMask: o, coverBackground: u, title: _, cover: m } = r;
                            n(l.savedChoiceKey, { data: { coverMask: o, coverBackground: u, text: _, uri: null != (s = m.uri) ? s : void 0 }, index: d, isSaved: !0 });
                        }),
                        U = (0, f.c)((e, t) => {
                            (u(e), g(t));
                        }),
                        z = (0, f.c)((e) => {
                            E({ ...l.background, ...(e && { bgImageUrl: e }) });
                        }),
                        F = (0, f.c)((e) => N(e));
                    return (0, _.jsx)('div', {
                        className: (0, m.$)(aa().root, {
                            [aa().wideContent]: (null == (t = l.content) ? void 0 : t.type) === T.x.COLLAGE || (null == (a = l.content) ? void 0 : a.type) === T.x.LINEUP,
                        }),
                        ref: v,
                        'data-test-id': S.OA.slides.SLIDE_CARD,
                        children: (0, _.jsxs)(W, {
                            isActive: s,
                            isContentVisible: b,
                            setContentVisible: y,
                            setContentInvisible: j,
                            background: A,
                            shareBackground: L,
                            className: aa().background,
                            'data-test-id': S.OA.slides.SLIDE_BACKGROUND,
                            children: [
                                (l.logo || l.promoLogo) &&
                                    (0, _.jsxs)('div', {
                                        className: aa().logoContainer,
                                        children: [
                                            l.logo && (0, _.jsx)(ae, { src: l.logo, className: aa().logo, 'data-test-id': S.OA.slides.SLIDE_LOGO }),
                                            l.promoLogo && (0, _.jsx)(ae, { src: l.promoLogo, 'data-test-id': S.OA.slides.SLIDE_PROMO_LOGO }),
                                        ],
                                    }),
                                l.content &&
                                    b &&
                                    (0, _.jsx)('div', {
                                        className: (0, m.$)(aa().content, aa()['content_align_'.concat(k)], { [aa().playAnimation]: b }),
                                        children: (0, _.jsx)(t6, {
                                            carouselIndex: d,
                                            content: l.content,
                                            withPersonalColor: l.background.withPersonalColor,
                                            onCarouselReady: O,
                                            onSlideChange: U,
                                            onBackgroundChange: z,
                                            onShareBackgroundChange: F,
                                        }),
                                    }),
                                (0, _.jsx)('div', {
                                    'data-screenshot-hidden': !0,
                                    className: aa().buttonsContainer,
                                    children: (0, _.jsx)(eL, {
                                        cardRef: v,
                                        className: aa().button,
                                        slide: l,
                                        onEditChoice: D,
                                        onSaveChoice: M,
                                        onSlidePrev: w,
                                        onSlideNext: B,
                                        hasLeft: d > 0,
                                        hasRight: d < C - 1,
                                    }),
                                }),
                            ],
                        }),
                    });
                });
            var as = a(40110),
                ar = a(20258),
                an = a(47009),
                ao = a(52512),
                ac = a(30290),
                ad = a(3382),
                au = a.n(ad);
            let a_ = (e) => {
                var t;
                let { slide: a, isVisible: i } = e,
                    { ref: l, intersectionPropertyId: s } = (0, ao.n)(),
                    r = (0, Z.e)(),
                    { from: n } = (0, ac.f)({ pageId: ar._Q.TRAILER_OF_THE_YEAR, blockId: as.U.DEFAULT }),
                    o = (0, an.b)(),
                    { isActive: c } = (0, j.JO)(),
                    d = null == r ? void 0 : r.getState(X.V.TRAILER).queueState.entityList.value,
                    u = (0, p.useMemo)(
                        () =>
                            a.entitiesData &&
                            d &&
                            a.entitiesData.every((e, t) => {
                                var a;
                                return e.meta.id === (null == (a = d[t]) ? void 0 : a.entity.data.meta.id);
                            }),
                        [a.entitiesData, d],
                    ),
                    v = i && a.hasTrailer && (!u || (null == r ? void 0 : r.getState(X.V.TRAILER).playerState.status.value) !== b.MT.PLAYING),
                    x = v && (null == r || null == (t = r.getState(X.V.TRAILER).currentContext.value) ? void 0 : t.data.meta.id) === a.id;
                return (
                    (0, p.useEffect)(() => {
                        if (x)
                            return void r.restartContext({ playAfterRestart: !0, queueParams: { index: 0 }, entitiesData: a.entitiesData }, X.V.TRAILER).then(() => {
                                o(!0);
                            });
                        v &&
                            (null == r ||
                                r
                                    .playContext(
                                        {
                                            contextData: { type: U.K.Various, overrideContextType: z.b.Other, trailer: !0, meta: { id: a.id }, from: n },
                                            queueParams: { index: 0 },
                                            entitiesData: a.entitiesData,
                                            loadContextMeta: !1,
                                        },
                                        X.V.TRAILER,
                                    )
                                    .then(() => {
                                        o(!0);
                                    }));
                    }, [n, o, v, x, a.entitiesData, a.id, r]),
                    (0, _.jsx)(F.t, {
                        className: (0, m.$)(au().root, { [au().root_isActive]: c }),
                        radius: 'l',
                        tabIndex: 0,
                        'data-intersection-property-id': s,
                        ref: l,
                        children: (0, _.jsx)(al, { slide: a, isActive: c }),
                    })
                );
            };
            var am = a(94366),
                av = a.n(am);
            let ax = (0, v.PA)((e) => {
                let { items: t } = e,
                    {
                        settings: { isMobile: a },
                        slides: i,
                    } = (0, P.g)(),
                    { formatMessage: l } = (0, h.A)(),
                    { state: s, toggleTrue: r } = (0, R.e)(!1),
                    n = (0, j.Mn)(),
                    o = (0, k.f)(),
                    c = (0, p.useRef)(!1),
                    [d, u] = (0, p.useState)(!0),
                    [v, x] = (0, p.useState)(!1);
                ((0, p.useEffect)(
                    () => (
                        r(),
                        () => {
                            (null == n || n.slideTo(0), i.setActiveSlide(0));
                        }
                    ),
                    [r, n, i],
                ),
                    (0, p.useEffect)(() => {
                        i.isLoaded && !c.current && (o(), (c.current = !0));
                    }, [i.isLoaded, o]));
                let C = (0, p.useCallback)(
                    (e) => {
                        (u(e.isBeginning), x(e.isEnd), i.setActiveSlide(e.activeIndex));
                    },
                    [i],
                );
                return (0, _.jsx)('div', {
                    className: (0, m.$)(av().root, { [av().root_visible]: s }),
                    'data-test-id': S.e8.slider.SLIDES_SLIDER,
                    children: (0, _.jsxs)(j.RC, {
                        direction: 'vertical',
                        centeredSlides: !a,
                        slidesPerView: 'auto',
                        spaceBetween: 16,
                        className: av().container,
                        keyboard: { enabled: !0 },
                        modules: [y.s3, y.Jq, y.FJ],
                        onActiveIndexChange: C,
                        a11y: { enabled: !0, containerMessage: l({ id: 'page.results-of-the-year' }) },
                        mousewheel: { thresholdDelta: 30, thresholdTime: 500 },
                        children: [
                            t.map((e, a) => {
                                var l, s, r;
                                return (0, _.jsx)(
                                    j.qr,
                                    {
                                        children: (0, _.jsx)(O.F, {
                                            blockPosX: 1,
                                            blockPosY: a + 1,
                                            blockType: null == (l = e.content) ? void 0 : l.type,
                                            blockId: e.id,
                                            mainObjectId: i.mainObjectId,
                                            mainObjectType: I.DomainObjectType.Slide,
                                            children: (0, _.jsx)(w.B, {
                                                objectType: I.DomainObjectType.SlideContent,
                                                objectId: ((e, t) => {
                                                    var a, i, l, s, r, n, o, c, d, u, _, m, v, x, p, h;
                                                    if (!e) return '';
                                                    switch (e.type) {
                                                        case T.x.CHART:
                                                        case T.x.CHART_FAVORITES:
                                                            return null != (i = null == (a = e.data) ? void 0 : a.description) ? i : '';
                                                        case T.x.CAROUSEL:
                                                            return null != (r = null == (s = e.data) || null == (l = s.items[t]) ? void 0 : l.data.title) ? r : '';
                                                        case T.x.COLLAGE:
                                                            return null !=
                                                                (c = null == (o = e.data.items[t]) || null == (n = o.bottomBlock.data.items[0]) ? void 0 : n.data.title)
                                                                ? c
                                                                : '';
                                                        case T.x.LINEUP:
                                                            return null != (u = null == (d = e.data.items[t]) ? void 0 : d.data.contentDescription) ? u : '';
                                                        case T.x.STATS:
                                                            return null != (m = null == (_ = e.data) ? void 0 : _.header) ? m : '';
                                                        case T.x.LUMEN:
                                                            return null != (x = null == (v = e.data.query) ? void 0 : v.text) ? x : '';
                                                        case T.x.CHART_ARTIST:
                                                        case T.x.TEXT_EXTENDED:
                                                        case T.x.PAY_CARD:
                                                        case T.x.SINGLE_ENTITY:
                                                        case T.x.TEXT:
                                                        case T.x.THEN_NOW_COMPARISON:
                                                            return null != (h = null == (p = e.data) ? void 0 : p.title) ? h : '';
                                                        default:
                                                            return '';
                                                    }
                                                })(e.content, null != (s = e.carouselIndex) ? s : 0),
                                                objectPosX: (null != (r = e.carouselIndex) ? r : 0) + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, _.jsx)(a_, { isVisible: i.activeSlide === a, slide: e }),
                                            }),
                                        }),
                                    },
                                    e.id,
                                );
                            }),
                            (0, _.jsx)(M, { isFirstSlide: d, isLastSlide: v }),
                        ],
                    }),
                });
            });
            var ap = a(73017),
                ah = a(67379),
                aC = a(76945),
                ag = a(59450),
                aI = a(84e3),
                aS = a(95858),
                aT = a(10322),
                af = a(20583),
                aA = a(53712),
                aE = a(56120),
                aL = a(44806),
                aN = a(36159),
                ab = a(87670),
                ay = a.n(ab);
            function aj(e, t) {
                return (e === aN.G.RESOLVE || e === aN.G.REJECT) && 0 === t.length;
            }
            let aR = (0, v.PA)((e) => {
                var t;
                let { slidesConsumer: a, artistId: i, podcastId: l, campaignId: s } = e,
                    { formatMessage: r } = (0, h.A)(),
                    { slides: n, experiments: o, sonataState: c, settings: d, lumen: u } = (0, P.g)(),
                    v = (0, Z.e)(),
                    y = o.checkExperiment(aL.z.WebNextSlidesPage, 'on'),
                    j = !(null == (t = d.browserInfo) ? void 0 : t.isMobile) || !d.browserInfo.isTouch,
                    R = null == v ? void 0 : v.getState(X.V.TRAILER),
                    k = (0, p.useRef)(1),
                    w = (0, f.c)((e) => {
                        null == v || v.setExponentVolume(e, X.V.TRAILER);
                    }),
                    B = (0, f.c)(() => {
                        null == v || v.pause(X.V.TRAILER);
                    });
                (0, p.useEffect)(() => {
                    (w(1), n.setIsMuted(!1));
                }, [w, n, v]);
                let { canBack: D, moveBack: M } = (0, af.J)(aA.Z.main.href),
                    U = (0, eI.Z)(aA.Z.main.href);
                ((0, p.useEffect)(
                    () => () => {
                        (n.resetUser(), n.resetArtist(), n.resetPodcast(), n.resetSpecial(), n.resetKids(), B());
                    },
                    [B, n],
                ),
                    y || (0, x.notFound)());
                let z = ((e) => {
                    let t = (0, ag.st)(),
                        a = (0, aI.U)(),
                        { hash: i } = (0, ag.gf)();
                    return (0, f.c)((l) => {
                        if (!t) return;
                        let s = { hash: i, pageId: I.AppScreen.SlidesScreen, mainObjectType: I.DomainObjectType.Slide, mainObjectId: e },
                            r = (0, ah.F)({ params: s, logger: a, context: 'useSendEventOnSlidesOpenedOrClosed' });
                        r && (l ? (0, aC.w5)(t.evgenInstance, r) : (0, aC.XB)(t.evgenInstance, r));
                    });
                })(n.mainObjectId);
                (0, p.useEffect)(
                    () => (
                        z(!0),
                        () => {
                            z(!1);
                        }
                    ),
                    [z],
                );
                let F = (0, p.useMemo)(() => {
                        switch (a) {
                            case ap.z.USER:
                                return n.userItems;
                            case ap.z.ARTIST:
                                return n.artistItems;
                            case ap.z.PODCAST:
                                return n.podcastItems;
                            case ap.z.SPECIAL:
                                return n.specialItems;
                            case ap.z.KIDS:
                                return n.kidsItems;
                        }
                    }, [n.artistItems, n.kidsItems, n.podcastItems, n.specialItems, n.userItems, a]),
                    H = F.some((e) => e.background.withSound || e.hasTrailer),
                    V = F.some((e) => {
                        var t;
                        return (null == (t = e.content) ? void 0 : t.type) === T.x.LUMEN;
                    });
                ((0, p.useEffect)(() => {
                    u.isEnabled && u.isNeededToLoad && V && u.getData();
                }, [u, u.isEnabled, u.isNeededToLoad, V]),
                    (0, p.useEffect)(() => {
                        H && c.status === b.MT.PLAYING && (null == v || v.togglePause());
                    }, [H, v, c.status]),
                    (0, p.useEffect)(() => {
                        if (y)
                            switch (a) {
                                case ap.z.USER:
                                    aj(n.userSlidesLoadingState, F) && (0, x.notFound)();
                                    break;
                                case ap.z.ARTIST:
                                    aj(n.artistSlidesLoadingState, F) && (0, x.notFound)();
                                    break;
                                case ap.z.PODCAST:
                                    aj(n.podcastSlidesLoadingState, F) && (0, x.notFound)();
                                    break;
                                case ap.z.SPECIAL:
                                    aj(n.specialSlidesLoadingState, F) && (0, x.notFound)();
                                    break;
                                case ap.z.KIDS:
                                    aj(n.kidsSlidesLoadingState, F) && (0, x.notFound)();
                            }
                        else (0, x.notFound)();
                    }, [
                        o,
                        y,
                        F,
                        F.length,
                        n.artistSlidesLoadingState,
                        n.podcastSlidesLoadingState,
                        n.userSlidesLoadingState,
                        n.specialSlidesLoadingState,
                        a,
                        n.kidsSlidesLoadingState,
                    ]),
                    (0, aE.N)(!0));
                let G = (0, p.useMemo)(() => {
                        var e;
                        let t,
                            a = null == (e = F[n.activeSlide]) ? void 0 : e.slideColor;
                        if (a) {
                            let { r: e, g: i, b: l } = (0, g.E2)(a);
                            t = 'rgba('.concat(e, ', ').concat(i, ', ').concat(l, ', 0.5)');
                        }
                        return { '--card-color-enabled_variant': a, '--card-color-enabled': t, '--logo-color': a };
                    }, [F, F.length, n.activeSlide]),
                    K = (0, p.useCallback)(() => {
                        let e = null == R ? void 0 : R.playerState.exponentVolume.value;
                        void 0 !== e && (n.toggleMute(), 0 !== e ? ((k.current = e), w(0)) : w(k.current));
                    }, [w, n, null == R ? void 0 : R.playerState.exponentVolume.value]),
                    $ = (0, f.c)(() => {
                        D ? M() : U();
                    }),
                    Y = n.isMuted ? 'volumeOff' : 'volume',
                    q = r(n.isMuted ? { id: 'player-actions.volume-off' } : { id: 'player-actions.volume-on' });
                switch (a) {
                    case ap.z.USER:
                        n.userSlidesLoadingState === aN.G.IDLE && (0, p.use)(n.getUserSlides());
                        break;
                    case ap.z.ARTIST:
                        i && n.artistSlidesLoadingState === aN.G.IDLE && (0, p.use)(n.getArtistSlides({ artistId: i }));
                        break;
                    case ap.z.PODCAST:
                        l && n.podcastSlidesLoadingState === aN.G.IDLE && (0, p.use)(n.getPodcastSlides({ podcastId: Number(l) }));
                        break;
                    case ap.z.SPECIAL:
                        s && n.specialSlidesLoadingState === aN.G.IDLE && (0, p.use)(n.getSpecialSlides({ campaignId: s }));
                        break;
                    case ap.z.KIDS:
                        n.kidsSlidesLoadingState === aN.G.IDLE && (0, p.use)(n.getKidsSlides());
                }
                return (0, _.jsx)(aS.j, {
                    children: (0, _.jsx)(aT.n, {
                        pageId: ar._Q.SLIDES_SCREEN,
                        children: (0, _.jsxs)('div', {
                            className: ay().root,
                            style: G,
                            'data-test-id': S.Xk.slides.SLIDES_PAGE,
                            children: [
                                (0, _.jsx)(L.q, { children: (0, _.jsx)(N.DZ, { variant: 'h1', children: (0, _.jsx)(C.A, { id: 'page.results-of-the-year' }) }) }),
                                (0, _.jsxs)('header', {
                                    className: ay().header,
                                    'data-test-id': S.Xk.slides.SLIDES_HEADER,
                                    children: [
                                        (null == F ? void 0 : F.length) > 0 &&
                                            (0, _.jsxs)('div', {
                                                className: ay().slidesResult,
                                                'data-test-id': S.Xk.slides.SLIDES_COUNTER,
                                                children: [
                                                    (0, _.jsx)(N.HL, {
                                                        variant: 'span',
                                                        className: ay().counterActiveItem,
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        'data-test-id': S.Xk.slides.SLIDES_COUNTER_CURRENT,
                                                        children: Number(n.activeSlide) + 1,
                                                    }),
                                                    (0, _.jsx)(N.HL, {
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        className: ay().counterItem,
                                                        children: '/',
                                                    }),
                                                    (0, _.jsx)(N.HL, {
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        className: ay().counterItem,
                                                        'data-test-id': S.Xk.slides.SLIDES_COUNTER_TOTAL,
                                                        children: null == F ? void 0 : F.length,
                                                    }),
                                                ],
                                            }),
                                        j &&
                                            H &&
                                            (0, _.jsx)(A.$, {
                                                'aria-label': q,
                                                variant: 'text',
                                                radius: 'round',
                                                size: 'xxxs',
                                                icon: (0, _.jsx)(E.I, { size: 'xs', className: ay().icon, variant: Y }),
                                                onClick: K,
                                                className: (0, m.$)(ay().button, ay().volumeButton),
                                                withRipple: !1,
                                                'data-test-id': S.Xk.slides.SLIDES_VOLUME_BUTTON,
                                            }),
                                        (0, _.jsx)(A.$, {
                                            'aria-label': r({ id: 'navigation.go-back' }),
                                            radius: 'round',
                                            size: 'xs',
                                            icon: (0, _.jsx)(E.I, { size: 'xs', variant: 'close' }, 'handleBackIcon'),
                                            onClick: $,
                                            className: (0, m.$)(ay().button, ay().desktopBackButton),
                                            role: 'link',
                                            'data-test-id': S.Xk.slides.SLIDES_CLOSE_BUTTON,
                                        }),
                                        (0, _.jsx)(A.$, {
                                            variant: 'text',
                                            'aria-label': r({ id: 'navigation.go-back' }),
                                            radius: 'round',
                                            size: 'xs',
                                            icon: (0, _.jsx)(E.I, { size: 'xs', variant: 'arrowLeft' }, 'handleBackIcon'),
                                            onClick: $,
                                            className: (0, m.$)(ay().button, ay().mobileBackButton),
                                            role: 'link',
                                            'data-test-id': S.Xk.slides.SLIDES_BACK_BUTTON,
                                        }),
                                    ],
                                }),
                                (0, _.jsx)(O.F, {
                                    mainObjectType: I.DomainObjectType.Slide,
                                    mainObjectId: n.mainObjectId,
                                    blockType: I.DomainObjectType.Slide,
                                    blockId: n.mainObjectId,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    objectsCount: F.length,
                                    children: (0, _.jsx)(ax, { items: F }),
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        79644: (e) => {
            e.exports = {
                root: 'ArtistsContent_root__Jpd8M',
                covers: 'ArtistsContent_covers__OeO2T',
                cover: 'ArtistsContent_cover__rzlO2',
                image: 'ArtistsContent_image__okuHk',
            };
        },
        80126: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => i });
            let i = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        },
        80161: (e) => {
            e.exports = {
                root: 'ChartBlock_root__GQF6w',
                root_spacer_m: 'ChartBlock_root_spacer_m__yVzU8',
                root_spacer_l: 'ChartBlock_root_spacer_l__wBImk',
                root_spacer_xxl: 'ChartBlock_root_spacer_xxl__cSNqe',
            };
        },
        82852: (e) => {
            e.exports = { root: 'LikeButton_root__ZGF7T' };
        },
        83280: (e) => {
            e.exports = {
                root: 'LineupContent_root__1ryY_',
                carousel: 'LineupContent_carousel__0n_iU',
                slide: 'LineupContent_slide__WMsD2',
                slideActive: 'LineupContent_slideActive__GGmyR',
                meta: 'LineupContent_meta__ad63g',
                description: 'LineupContent_description__Gyg86',
            };
        },
        84e3: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => s });
            var i = a(36484),
                l = a(62562);
            let s = () => (0, l.N)().get(i.Zf);
        },
        85825: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => s, n: () => l });
            var i = a(74631);
            let l = (0, i.createContext)({ isVisible: !1 }),
                s = () => (0, i.useContext)(l);
        },
        85885: (e) => {
            e.exports = {
                root: 'LumenContent_root__cf3c7',
                lumenAvatarArea: 'LumenContent_lumenAvatarArea__gaLj1',
                lumenAvatar: 'LumenContent_lumenAvatar__US1qg',
                lumenAvatarImage: 'LumenContent_lumenAvatarImage__Pb4tm',
                queryWrapper: 'LumenContent_queryWrapper__wuKtz',
                queryImage: 'LumenContent_queryImage___Ou_l',
                queryText: 'LumenContent_queryText__LIC0Z',
                subtitle: 'LumenContent_subtitle__olkf8',
                title: 'LumenContent_title__0ogc5',
            };
        },
        86272: (e) => {
            e.exports = { root: 'ChartContent_root__MFONP', text: 'ChartContent_text__cB18f' };
        },
        86586: (e, t, a) => {
            'use strict';
            a.d(t, {
                $$: () => v,
                EK: () => c,
                GF: () => r,
                Tu: () => n,
                VI: () => o,
                bF: () => d,
                bg: () => _,
                e0: () => m,
                fZ: () => s,
                g2: () => i,
                ur: () => u,
                wO: () => l,
            });
            let i = 'avatars.mds.yandex.net/get-music-misc/28592/img.68eebe12749d24738fe2018e/%%',
                l = 'avatars.mds.yandex.net/get-music-misc/28592/img.68eebdb294053d016bcd7bf0/%%',
                s = 0.5,
                r = 1.5,
                n = 1,
                o = 1920,
                c = 20,
                d = 1.7,
                u = 16,
                _ = '.swiper-pagination,[data-screenshot-hidden]',
                m = 600,
                v = '  •  ';
        },
        86788: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { m: () => i }),
                (function (e) {
                    ((e.WAVE = 'WAVE'), (e.ACTION = 'ACTION'), (e.SHARE = 'SHARE'), (e.SIMPLE = 'SIMPLE'), (e.LIKE = 'LIKE'));
                })(i || (i = {})));
        },
        87426: (e) => {
            e.exports = { root: 'SlideHeading_root__naZ6V' };
        },
        87670: (e) => {
            e.exports = {
                root: 'SlidesPage_root__URM_B',
                header: 'SlidesPage_header__pnBx9',
                slidesResult: 'SlidesPage_slidesResult__neqIE',
                counterActiveItem: 'SlidesPage_counterActiveItem__Y_K9I',
                counterItem: 'SlidesPage_counterItem__3CqZW',
                button: 'SlidesPage_button__s9V8y',
                volumeButton: 'SlidesPage_volumeButton__HfFCM',
                desktopBackButton: 'SlidesPage_desktopBackButton__ae1Uj',
                mobileBackButton: 'SlidesPage_mobileBackButton__MwOgB',
            };
        },
        89492: (e) => {
            e.exports = { root: 'MaskedImage_root__Dquqg' };
        },
        94366: (e) => {
            e.exports = { root: 'Slider_root__T7EOX', root_visible: 'Slider_root_visible__b3Kqx', fade: 'Slider_fade__V7FGV', container: 'Slider_container__tZ0VH' };
        },
        95314: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => r });
            var i = a(25839),
                l = a(74631),
                s = a(66192);
            let r = (e) => {
                let { objectId: t, objectPosX: a, objectPosY: r, objectPos: n, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u, children: _ } = e,
                    m = (0, l.useMemo)(
                        () => ({ objectId: t, objectPosX: a, objectPosY: r, objectPos: n, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, a, r, n, o, c, d, u],
                    );
                return (0, i.jsx)(s.l.Provider, { value: m, children: _ });
            };
        },
        95858: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => o });
            var i = a(25839),
                l = a(74631),
                s = a(59342),
                r = a(91886),
                n = a(13232);
            let o = (e) => {
                let { children: t } = e,
                    a = (0, l.useRef)({}),
                    o = (0, l.useRef)(
                        (0, r.Gv)(
                            (e) => {
                                let t = (0, r.L5)(e.target),
                                    i = a.current[t];
                                if (i) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, s.A)());
                                            (i.callback(!0, e), (i.showed = !0), (i.viewUuid = e));
                                        }, 1e3);
                                        i.timerId = e;
                                    }
                                    (!e.isIntersecting && i.showed && (i.callback(!1, i.viewUuid), (i.showed = !1), (i.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(i.timerId));
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    c = (0, l.useCallback)((e) => {
                        var t;
                        !a.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = o.current) || t.observe(e.elementRef.current), (a.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    d = (0, l.useCallback)((e) => {
                        let t = a.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete a.current[e]);
                    }, []);
                (0, l.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = o.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, l.useMemo)(() => ({ observeElement: c, unobserveElement: d }), [c, d]);
                return (0, i.jsx)(n.B.Provider, { value: u, children: t });
            };
        },
        96618: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => l, W: () => s });
            var i = a(74631);
            let l = (0, i.createContext)({ theme: null, setTheme: () => {} }),
                s = () => (0, i.useContext)(l);
        },
        96668: (e) => {
            e.exports = {
                root: 'TextContent_root__A4Qmc',
                subtitle: 'TextContent_subtitle__Xe_FH',
                text: 'TextContent_text__xsfVD',
                disclaimer: 'TextContent_disclaimer__LIrZ_',
            };
        },
        98074: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => l });
            let i = [
                    { queryKey: 'utm_campaign', resultKey: 'utmCampaign' },
                    { queryKey: 'utm_medium', resultKey: 'utmMedium' },
                    { queryKey: 'utm_source', resultKey: 'utmSource' },
                    { queryKey: 'utm_term', resultKey: 'utmTerm' },
                    { queryKey: 'yclid', resultKey: 'yclid' },
                ],
                l = (e) =>
                    i.reduce((t, a) => {
                        let { queryKey: i, resultKey: l } = a;
                        return ('string' == typeof e[i] && (t[l] = e[i]), t);
                    }, {});
        },
        99715: (e) => {
            e.exports = { root: 'SliderControls_root__v_ofj', control: 'SliderControls_control__E3joM', top: 'SliderControls_top__HN5gZ' };
        },
    },
]);
