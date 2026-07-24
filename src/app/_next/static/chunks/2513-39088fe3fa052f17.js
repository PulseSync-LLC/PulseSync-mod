(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2513],
    {
        1714: (e, t, a) => {
            'use strict';
            a.d(t, { EK: () => c, GF: () => l, Tu: () => s, VI: () => o, bF: () => u, bg: () => m, e0: () => _, fZ: () => n, g2: () => i, ur: () => d, wO: () => r });
            let i = 'avatars.mds.yandex.net/get-music-misc/28592/img.68eebe12749d24738fe2018e/%%',
                r = 'avatars.mds.yandex.net/get-music-misc/28592/img.68eebdb294053d016bcd7bf0/%%',
                n = 0.5,
                l = 1.5,
                s = 1,
                o = 1920,
                c = 20,
                u = 1.7,
                d = 16,
                m = '.swiper-pagination,[data-screenshot-hidden]',
                _ = 600;
        },
        1987: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var a in t) Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
                })(t, {
                    bindSnapshot: function () {
                        return l;
                    },
                    createAsyncLocalStorage: function () {
                        return n;
                    },
                    createSnapshot: function () {
                        return s;
                    },
                });
            let a = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class i {
                disable() {
                    throw a;
                }
                getStore() {}
                run() {
                    throw a;
                }
                exit() {
                    throw a;
                }
                enterWith() {
                    throw a;
                }
                static bind(e) {
                    return e;
                }
            }
            let r = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function n() {
                return r ? new r() : new i();
            }
            function l(e) {
                return r ? r.bind(e) : i.bind(e);
            }
            function s() {
                return r
                    ? r.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        3377: (e, t, a) => {
            'use strict';
            a.d(t, { WithAuth: () => v });
            var i = a(32290),
                r = a(96103),
                n = a(21916),
                l = a(63618),
                s = a(39407),
                o = a(71926),
                c = a(94218),
                u = a(55556),
                d = a.n(u);
            let m = (0, r.PA)(() =>
                (0, i.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, i.jsx)(o.DZ, {
                            className: (0, l.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(s.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(o.HL, {
                            className: (0, l.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(s.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var _ = a(20472),
                p = a(57594);
            let v = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: a } = e,
                    { user: r } = (0, p.g)();
                return r.isAuthorized ? t : (a && (0, n.redirect)(_.Z.main.href), (0, i.jsx)(m, {}));
            });
        },
        8732: (e) => {
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
        9105: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => i });
            var i = (function (e) {
                return (e.USER = 'user'), (e.ARTIST = 'artist'), (e.PODCAST = 'podcast'), (e.SPECIAL = 'special'), (e.KIDS = 'kids'), e;
            })({});
        },
        9268: (e) => {
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
        11323: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => o });
            var i = a(32290),
                r = a(55178),
                n = a(21732),
                l = a(50162);
            let s = (e) => {
                    let { isAvailable: t = !0, className: a, fallbackIconSize: r, forwardRef: s, ...o } = e;
                    return t
                        ? (0, i.jsx)(l._V, { ref: s, className: a, fallbackIconSize: r, ...o, 'data-test-id': n.S7.ENTITY_COVER_IMAGE })
                        : (0, i.jsx)(l.Ab, { className: a, iconSize: r, iconVariant: 'unavailable', 'data-test-id': n.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                o = (0, r.forwardRef)((e, t) => (0, i.jsx)(s, { forwardRef: t, ...e }));
        },
        12350: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => h });
            var i = a(55178),
                r = a(16172),
                n = a(52068),
                l = a(6752),
                s = a(62376),
                o = a(1677),
                c = a(48922),
                u = a(84782),
                d = a(30915),
                m = a(2792),
                _ = a(37240),
                p = a(51012),
                v = a(47498);
            let h = () => {
                let e = (0, n.st)(),
                    t = (0, s.U)(),
                    { hash: a } = (0, n.gf)(),
                    { pageId: h, pageStyle: x, pagePlacement: f } = (0, _.$)(),
                    { tabId: C, tabPos: g, isTabSelectedByDefault: b } = (0, v.R)(),
                    { offsetBlockPosY: S } = (0, d.u)(),
                    { blockId: y, blockType: T, blockPosX: j, blockPosY: N, mainObjectId: A, mainObjectType: k } = (0, u.N)(),
                    { objectId: I, objectPosX: E, objectPosY: w, objectType: R, objectsCount: L } = (0, m.J)(),
                    { skeleton: O } = (0, p.b)(),
                    P = (0, l.L)(() => (void 0 !== S && void 0 !== N ? S + N : N));
                return (0, i.useCallback)(
                    (i) => {
                        let { objectId: n, objectType: l, actionType: s, userInteractionType: u, objectPosX: d, objectPosY: m, objectCount: _ } = i;
                        if (!e || !h || !c.xK.includes(h) || !c.fD.includes(h)) return;
                        let p = o.F[h];
                        if (!p) return;
                        let v = {
                            hash: a,
                            pageId: p,
                            pageStyle: x || r.QL.Fullscreen,
                            pagePlacement: f || r.c4.Fullscreen,
                            entityType: T,
                            entityId: y,
                            entityPosX: j,
                            entityPosY: P,
                            objectId: null != n ? n : I,
                            objectType: null != l ? l : R,
                            objectPosX: null != d ? d : E,
                            objectPosY: null != m ? m : w,
                            objectsCount: null != _ ? _ : L,
                            actionType: s,
                            userInteractionType: null != u ? u : r.gi.Tap,
                        };
                        c.qG.includes(h) && ((v.tabId = C), (v.tabPos = g), (v.isTabSelectedByDefault = b)),
                            O && (v.skeletonId = O),
                            A && k && ((v.mainObjectType = k), (v.mainObjectId = A));
                        let S = (0, r.Fx)({ params: v, logger: t, context: 'useSendEventOnBlockActionPerformed' });
                        S && (0, r.h_)(e.evgenInstance, S);
                    },
                    [I, R, E, w, L, e, h, a, x, f, T, y, j, P, O, A, k, t, C, g, b],
                );
            };
        },
        12668: (e) => {
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
        12989: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => x });
            var i = a(55178),
                r = a(16172),
                n = a(52068),
                l = a(6752),
                s = a(62376),
                o = a(1677),
                c = a(48922),
                u = a(84782),
                d = a(30915),
                m = a(18746),
                _ = a(2792),
                p = a(37240),
                v = a(51012),
                h = a(47498);
            let x = () => {
                let e = (0, s.U)(),
                    t = (0, n.st)(),
                    { hash: a } = (0, n.gf)(),
                    { pageId: x, displayReasonId: f } = (0, p.$)(),
                    { tabId: C, tabPos: g, isTabSelectedByDefault: b } = (0, h.R)(),
                    { offsetBlockPosY: S } = (0, d.u)(),
                    { blockType: y, blockId: T, blockPosX: j, blockPosY: N, mainObjectId: A, mainObjectType: k, displayReasonId: I } = (0, u.N)(),
                    { filterKey: E, filterValue: w, filterPos: R } = (0, m.G)(),
                    { objectType: L, objectsCount: O, objectId: P, objectPosX: B, objectPosY: V } = (0, _.J)(),
                    { skeleton: M } = (0, v.b)(),
                    z = null != I ? I : f,
                    D = (0, l.L)(() => (void 0 !== S && void 0 !== N ? S + N : N));
                return (0, i.useCallback)(
                    (i, n) => {
                        if (!t || !x || !c.xK.includes(x) || !c.fD.includes(x)) return;
                        let l = o.F[x];
                        if (!l) return;
                        let s = {
                            hash: a,
                            pageId: l,
                            entityType: y,
                            entityId: T,
                            entityPosX: j,
                            entityPosY: D,
                            objectsCount: O,
                            viewUuid: n,
                            objectType: L,
                            objectId: P,
                            objectPosX: B,
                            objectPosY: V,
                        };
                        void 0 !== E && ((s.filterKey = E), (s.filterValue = w), (s.filterPos = R)),
                            c.qG.includes(x) && ((s.tabId = C), (s.tabPos = g), (s.isTabSelectedByDefault = b)),
                            M && (s.skeletonId = M),
                            'string' == typeof A && 'string' == typeof k && ((s.mainObjectType = k), (s.mainObjectId = A)),
                            z && (s.displayReasonId = z);
                        let u = (0, r.Fx)({ params: s, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (i ? (0, r.Pf)(t.evgenInstance, u) : (0, r.nv)(t.evgenInstance, u));
                    },
                    [t, z, T, j, D, y, E, R, w, a, b, e, A, k, P, B, V, L, O, x, M, C, g],
                );
            };
        },
        17679: (e) => {
            e.exports = { root: 'BaseNotificationError_root__FfGUZ', message: 'BaseNotificationError_message___W_xy' };
        },
        20472: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => r });
            var i = a(36477);
            let r = {
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
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        20506: (e) => {
            e.exports = { root: 'StatsContent_root__yJVzS', text: 'StatsContent_text__l2xi_' };
        },
        20916: (e) => {
            e.exports = { root: 'LikeButton_root__ZGF7T' };
        },
        21935: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => l });
            var i = a(62060),
                r = a(55178),
                n = a(83808);
            let l = (e) => {
                let t = (0, n.W)(),
                    a = (0, r.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    l = (0, r.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: a, moveForward: l };
            };
        },
        22714: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => l });
            var i = a(32290),
                r = a(55178),
                n = a(1176);
            let l = (e) => {
                let { pageId: t, pageEntityId: a, displayReasonId: l, pageStyle: s, pagePlacement: o, children: c } = e,
                    u = (0, r.useMemo)(() => ({ pageId: t, pageEntityId: a, displayReasonId: l, pageStyle: s, pagePlacement: o }), [t, a, l, s, o]);
                return (0, i.jsx)(n.r.Provider, { value: u, children: c });
            };
        },
        23234: (e) => {
            e.exports = { root: 'CommonButton_root__thXs_' };
        },
        23352: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => l });
            var i = a(55178),
                r = a(12989),
                n = a(80536);
            let l = function () {
                let { callback: e, singleEvent: t, withViewUuid: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    l = (0, i.useRef)(null),
                    s = (0, r.D)(),
                    o = (0, i.useId)(),
                    c = (0, i.useContext)(n.B),
                    u = (0, i.useCallback)(
                        (i, r) => {
                            e ? e(i, a ? r : void 0) : s(i, r), t && c.unobserveElement(o);
                        },
                        [e, c, o, s, t, a],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            c.observeElement({ elementRef: l, elementId: o, callback: u }),
                            () => {
                                c.unobserveElement(o);
                            }
                        ),
                        [e, c, u, o, s],
                    ),
                    { ref: l, intersectionPropertyId: o }
                );
            };
        },
        25988: (e) => {
            e.exports = { root: 'TextExtendedContent_root__vzsuG', text: 'TextExtendedContent_text__ksTX_', header: 'TextExtendedContent_header__yn1Ej' };
        },
        26042: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => l });
            var i = a(32290),
                r = a(55178),
                n = a(10936);
            let l = (e) => {
                let { objectId: t, objectPosX: a, objectPosY: l, objectPos: s, objectType: o, objectsCount: c, mainObjectId: u, mainObjectType: d, children: m } = e,
                    _ = (0, r.useMemo)(
                        () => ({ objectId: t, objectPosX: a, objectPosY: l, objectPos: s, objectType: o, objectsCount: c, mainObjectId: u, mainObjectType: d }),
                        [t, a, l, s, o, c, u, d],
                    );
                return (0, i.jsx)(n.l.Provider, { value: _, children: m });
            };
        },
        27120: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => n });
            var i = a(55178),
                r = a(53022);
            let n = (e) => {
                let t = (0, i.useRef)(!1),
                    a = (0, r.z)();
                (0, i.useEffect)(() => {
                    e && (null == a || a.disable(), (t.current = !0)), !e && t.current && (null == a || a.enable(), (t.current = !1));
                }, [e, a]);
            };
        },
        27525: (e) => {
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
        27986: (e) => {
            e.exports = {
                root: 'ChartArtistContent_root__OPxPJ',
                cover: 'ChartArtistContent_cover__flhXs',
                image: 'ChartArtistContent_image__D2isT',
                title: 'ChartArtistContent_title__a_d_4',
            };
        },
        29098: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => i });
            let i = (0, a(55178).createContext)(null);
        },
        31886: (e) => {
            e.exports = { root: 'Slider_root__T7EOX', root_visible: 'Slider_root_visible__b3Kqx', fade: 'Slider_fade__V7FGV', container: 'Slider_container__tZ0VH' };
        },
        32441: (e) => {
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
        34566: (e) => {
            e.exports = { root: 'Slide_root__x5JEM', root_isActive: 'Slide_root_isActive__CKUSv' };
        },
        36516: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { m: () => i }),
                (function (e) {
                    (e.WAVE = 'WAVE'), (e.ACTION = 'ACTION'), (e.SHARE = 'SHARE'), (e.SIMPLE = 'SIMPLE'), (e.LIKE = 'LIKE');
                })(i || (i = {}));
        },
        40199: (e, t, a) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return i.workAsyncStorageInstance;
                    },
                });
            let i = a(89957);
        },
        44884: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { b: () => i }),
                (function (e) {
                    (e.Album = 'album'), (e.Artist = 'artist'), (e.Playlist = 'playlist'), (e.Radio = 'fm_radio'), (e.Other = 'other'), (e.Search = 'search');
                })(i || (i = {}));
        },
        44944: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { x: () => i }),
                (function (e) {
                    (e.TEXT = 'TEXT'),
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
                        (e.LUMEN = 'LUMEN');
                })(i || (i = {}));
        },
        44989: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => o });
            var i,
                r = a(55178),
                n = {
                    810: (e) => {
                        e.exports = i || (i = a.t(r, 2));
                    },
                },
                l = {},
                s = {};
            (() => {
                Object.defineProperty(s, '__esModule', { value: !0 }), (s.useToggle = void 0);
                let e = (function e(t) {
                    var a = l[t];
                    if (void 0 !== a) return a.exports;
                    var i = (l[t] = { exports: {} });
                    return n[t](i, i.exports, e), i.exports;
                })(810);
                s.useToggle = (t) => {
                    let [a, i] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        i(t);
                    }, [t]);
                    let r = (0, e.useCallback)(() => {
                            i((e) => !e);
                        }, []),
                        n = (0, e.useCallback)(() => {
                            i(!0);
                        }, []),
                        l = (0, e.useCallback)(() => {
                            i(!1);
                        }, []);
                    return { state: a, toggle: r, setState: i, toggleTrue: n, toggleFalse: l };
                };
            })(),
                s.__esModule;
            var o = s.useToggle;
        },
        46096: (e) => {
            e.exports = { root: 'ChartContent_root__MFONP', text: 'ChartContent_text__cB18f' };
        },
        46456: (e, t, a) => {
            'use strict';
            function i(e) {
                let { moduleIds: t } = e;
                return null;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }),
                a(32290),
                a(51767),
                a(40199),
                a(15406);
        },
        49399: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => i });
            var i = (function (e) {
                return (e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e;
            })({});
        },
        49545: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => n, n: () => r });
            var i = a(55178);
            let r = (0, i.createContext)({ isVisible: !1 }),
                n = () => (0, i.useContext)(r);
        },
        50832: (e) => {
            e.exports = {
                root: 'TextFactContent_root__vmKoy',
                text: 'TextFactContent_text__e_xOX',
                cover: 'TextFactContent_cover__xYsLC',
                image: 'TextFactContent_image__FnWmg',
            };
        },
        51500: (e) => {
            e.exports = {
                root: 'StatItem_root__L7Uw0',
                root_withOpacity: 'StatItem_root_withOpacity__pOgaf',
                valueContainer: 'StatItem_valueContainer__HlYQZ',
                value: 'StatItem_value__IkJBB',
                unit: 'StatItem_unit__cO46p',
                footer: 'StatItem_footer__QZ7q6',
            };
        },
        53022: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => n });
            var i = a(55178),
                r = a(29098);
            let n = () => (0, i.useContext)(r.P);
        },
        54662: (e) => {
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
        55509: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => r });
            var i = a(73295);
            let r = (e, t, a) => {
                let r = null != t ? t : i.wT,
                    n = null != a ? a : i.by,
                    l = (0, i.de)((0, i.aq)(e), r, n),
                    s = Math.round(255 * l[0]),
                    o = Math.round(255 * l[1]),
                    c = Math.round(255 * l[2]);
                return 'rgb('.concat(s, ', ').concat(o, ', ').concat(c, ')');
            };
        },
        55556: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        55638: (e) => {
            e.exports = { root: 'SlideCaption_root__JumhY' };
        },
        55681: (e, t, a) => {
            'use strict';
            a.d(t, { SlidesPage: () => aa });
            var i,
                r,
                n,
                l,
                s,
                o,
                c,
                u,
                d,
                m = a(32290),
                _ = a(63618),
                p = a(96103),
                v = a(21916),
                h = a(55178),
                x = a(60900),
                f = a(39407),
                C = a(16172),
                g = a(80451),
                b = a(21732),
                S = a(91027),
                y = a(63423),
                T = a(82586),
                j = a(74196),
                N = a(71926),
                A = a(72676),
                k = a(6005),
                I = a(15875),
                E = a(44989),
                w = a(95481),
                R = a(95226),
                L = a(26042),
                O = a(57594),
                P = a(82707),
                B = a.n(P);
            let V = (e) => {
                let { isFirstSlide: t, isLastSlide: a, style: i } = e,
                    r = (0, I.Mn)(),
                    { formatMessage: n } = (0, x.A)(),
                    l = (0, h.useCallback)(() => {
                        r.slidePrev();
                    }, [r]),
                    s = (0, h.useCallback)(() => {
                        r.slideNext();
                    }, [r]);
                return (0, m.jsxs)('div', {
                    className: B().root,
                    style: i,
                    children: [
                        (0, m.jsx)(y.$, {
                            variant: 'outline',
                            iconClassName: B().top,
                            size: 'm',
                            radius: 'round',
                            onClick: l,
                            disabled: t,
                            icon: (0, m.jsx)(T.I, { variant: 'arrowDown', size: 'xxs' }, 'prevIcon'),
                            withRipple: !1,
                            'aria-label': n({ id: 'slider.prev-slide' }),
                            className: B().control,
                        }),
                        (0, m.jsx)(y.$, {
                            variant: 'outline',
                            size: 'm',
                            radius: 'round',
                            onClick: s,
                            disabled: a,
                            icon: (0, m.jsx)(T.I, { variant: 'arrowDown', size: 'xxs' }, 'nextIcon'),
                            withRipple: !1,
                            'aria-label': n({ id: 'slider.next-slide' }),
                            className: B().control,
                        }),
                    ],
                });
            };
            var M = a(71483),
                z = a(44884),
                D = a(86269);
            !(function (e) {
                (e.TOP = 'TOP'), (e.CENTER = 'CENTER'), (e.BOTTOM = 'BOTTOM');
            })(i || (i = {}));
            var F = a(44944),
                H = a(12350),
                U = a(50162),
                G = a(55509),
                $ = a(49545),
                K = a(56755),
                X = a(44128),
                Y = a(77451),
                Z = a.n(Y);
            let q = (0, p.PA)((e) => {
                    let {
                            className: t,
                            children: a,
                            background: {
                                animationDelay: i,
                                withPersonalColor: r,
                                videoUrl: n,
                                firstFrameVideoUrl: l,
                                lastFrameVideoUrl: s,
                                bgImageUrl: o,
                                withSound: c,
                                videoLoopEnabled: u,
                            },
                            isActive: d,
                            isContentVisible: p,
                            setContentVisible: v,
                            setContentInvisible: x,
                        } = e,
                        {
                            user: f,
                            slides: { isMuted: C },
                        } = (0, O.g)(),
                        { isVisible: b } = (0, $.d)(),
                        S = (0, h.useRef)(null),
                        y = (0, X.e)(),
                        T = (null == y ? void 0 : y.getState(K.V.TRAILER).playerState.status.value) === A.MT.PLAYING && c,
                        j = (0, h.useCallback)(() => setTimeout(v, 1e3 * i), [i, v]);
                    (0, h.useEffect)(() => {
                        !d && p && x();
                    }, [d, p, x]),
                        (0, h.useEffect)(() => {
                            var e, t, a;
                            d && !b
                                ? ((null == (e = S.current) ? void 0 : e.readyState) !== 4 && j(),
                                  null == (t = S.current) ||
                                      t
                                          .play()
                                          .then(() => {
                                              j(), T && (null == y || y.pause(K.V.TRAILER));
                                          })
                                          .catch(j))
                                : S.current && ((S.current.currentTime = 0), null == (a = S.current) || a.pause());
                        }, [j, d, b, v, T, y]);
                    let N = (0, h.useMemo)(() => {
                            if (r && f.collectionHue) return { '--user-background-color': (0, G.e)(f.collectionHue, 1, 0.5) };
                        }, [r, f.collectionHue]),
                        k = n && l && !r,
                        I = !n && o;
                    return (0, m.jsxs)('div', {
                        className: (0, _.$)(Z().root, t),
                        style: N,
                        children: [
                            I && (0, m.jsx)(U._V, { src: (0, g.createAvatarUrl)(o, 800, !0), className: Z().firstFrame }),
                            k && (0, m.jsx)(U._V, { src: (0, g.createAvatarUrl)(l, 800, !0), className: Z().firstFrame }),
                            n &&
                                (0, m.jsxs)(m.Fragment, {
                                    children: [
                                        s &&
                                            (0, m.jsx)(U._V, {
                                                'data-screenshot-visible': !0,
                                                src: (0, g.createAvatarUrl)(s, 800, !0),
                                                className: (0, _.$)(Z().lastFrame, Z().hidden),
                                            }),
                                        (0, m.jsx)('video', {
                                            className: (0, _.$)(Z().media, { [Z().media_withPersonalColor]: r }),
                                            'data-screenshot-hidden': !0,
                                            ref: S,
                                            src: n,
                                            poster: (0, g.createAvatarUrl)(o, 800, !0),
                                            playsInline: !0,
                                            muted: !c || C,
                                            loop: u,
                                        }),
                                    ],
                                }),
                            !!a && a,
                        ],
                    });
                }),
                Q = (0, h.memo)(q);
            var J = a(65493),
                W = a(36516),
                ee = a(6752);
            !(function (e) {
                (e.TRACK = 'TRACK'), (e.ARTIST = 'ARTIST'), (e.ALBUM = 'ALBUM'), (e.CLIP = 'CLIP'), (e.PLAYLIST = 'PLAYLIST');
            })(r || (r = {}));
            let et = new Set(Object.values(r)),
                ea = (e) => 'string' == typeof e && et.has(e),
                ei = (e, t, a) => {
                    if (!ea(t)) return !1;
                    switch (t) {
                        case r.TRACK:
                            return e.isTrackLiked(a);
                        case r.ARTIST:
                            return e.isArtistLiked(a);
                        case r.ALBUM:
                            return e.isAlbumLiked(a);
                        case r.CLIP:
                            return e.isClipLiked(a);
                        case r.PLAYLIST:
                            return e.isPlaylistLiked(a);
                    }
                };
            var er = a(47745),
                en = a(11323),
                el = a(61258),
                es = a(89753),
                eo = a.n(es);
            let ec = (e) => {
                var t;
                let { data: a, className: i } = e,
                    r = (0, er.N)(),
                    n = (0, S.c)(() => {
                        var e;
                        r({ deepLink: null != (e = a.url) ? e : '', to: C.QT.Link });
                    });
                return (0, m.jsxs)(el.N, {
                    href: null != (t = a.url) ? t : void 0,
                    onClick: n,
                    className: (0, _.$)(eo().root, i),
                    children: [
                        (0, m.jsx)(D.t, {
                            radius: 'xs',
                            className: eo().cover,
                            children: a.imageUrl && (0, m.jsx)(en.B, { src: a.imageUrl, withAvatarReplace: !0, fit: 'contain', className: eo().image, size: 100 }),
                        }),
                        (0, m.jsx)(N.HL, { variant: 'span', type: 'controls', size: 'l', weight: 'medium', className: eo().text, lineClamp: 1, children: a.title }),
                        (0, m.jsx)(T.I, { variant: 'arrowRight', size: 'xs', className: eo().icon }),
                    ],
                });
            };
            var eu = a(23234),
                ed = a.n(eu),
                em = a(63380),
                e_ = a(45477),
                ep = a(75582),
                ev = a(90357),
                eh = a(20916),
                ex = a.n(eh);
            let ef = (0, p.PA)((e) => {
                let { data: t, className: a } = e,
                    i = ((e) => {
                        let { library: t } = (0, O.g)();
                        return ei(t, e.entityType, e.entityId);
                    })(t),
                    n = i ? t.liked : t.unliked,
                    l = ((e) => {
                        let { data: t, isLiked: a } = e,
                            { library: i, user: n } = (0, O.g)(),
                            { notify: l } = (0, ep.l)(),
                            { formatMessage: s } = (0, x.A)(),
                            o = (0, H.m)(),
                            [c, u] = (0, h.useState)(!1);
                        return (0, S.c)(async () => {
                            let e;
                            if (!(a ? t.liked : t.unliked).enabled) return;
                            if (!n.isAuthorized)
                                return void l((0, m.jsx)(ev.h, { error: s({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: e_.u.ERROR });
                            if (c || !ea(t.entityType)) return;
                            u(!0);
                            let d = n.account.data.uid,
                                _ = { entityId: t.entityId, userId: d };
                            switch (t.entityType) {
                                case r.TRACK:
                                    e = await i.toggleTrackLike(_);
                                    break;
                                case r.ARTIST:
                                    e = await i.toggleArtistLike(_);
                                    break;
                                case r.ALBUM:
                                    e = await i.toggleAlbumLike(_);
                                    break;
                                case r.CLIP:
                                    e = await i.toggleClipLike(_);
                                    break;
                                case r.PLAYLIST: {
                                    let [a, r] = t.entityId.split(':');
                                    e = await i.togglePlaylistLike({ userId: d, entityId: t.entityId, ownerId: Number(a), kindId: Number(r) });
                                }
                            }
                            u(!1),
                                e === em.f.OK
                                    ? o({
                                          actionType: a ? C.X2.Unlike : C.X2.Like,
                                          objectId: t.entityId,
                                          objectType: ((e) => {
                                              switch (e) {
                                                  case r.TRACK:
                                                      return C.ky.Track;
                                                  case r.ARTIST:
                                                      return C.ky.Artist;
                                                  case r.ALBUM:
                                                      return C.ky.Album;
                                                  case r.CLIP:
                                                      return C.ky.Video;
                                                  case r.PLAYLIST:
                                                      return C.ky.Playlist;
                                              }
                                          })(t.entityType),
                                      })
                                    : e === em.f.ERROR && l((0, m.jsx)(ev.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: e_.u.ERROR });
                        });
                    })({ data: t, isLiked: i }),
                    s = (0, ee.L)(() => ({ '--text-color': n.textColor, '--button-color': n.buttonColor }));
                return (0, m.jsx)(y.$, {
                    style: s,
                    className: (0, _.$)(ed().root, ex().root, a),
                    size: 'default',
                    radius: 'xxxl',
                    color: 'primary',
                    withHover: !1,
                    withRipple: !1,
                    disabled: !n.enabled,
                    onClick: l,
                    children: (0, m.jsx)(N.HL, { variant: 'span', type: 'controls', size: 'l', weight: 'medium', lineClamp: 1, children: n.title }),
                });
            });
            var eC = a(84062);
            let eg = (e) => {
                var t;
                let { data: a, className: i, handleClick: r } = e,
                    n = (0, eC.Z)(null != (t = a.url) ? t : ''),
                    l = (0, er.N)(),
                    s = (0, h.useMemo)(() => ({ '--text-color': a.textColor, '--button-color': a.buttonColor }), [a.buttonColor, a.textColor]),
                    o = (0, S.c)(() => {
                        var e;
                        if (r) return r();
                        l({ deepLink: null != (e = a.url) ? e : '', to: C.QT.Link }), n();
                    });
                return (0, m.jsx)(y.$, {
                    role: 'link',
                    style: s,
                    className: (0, _.$)(ed().root, i),
                    size: 'default',
                    radius: 'xxxl',
                    color: 'primary',
                    withHover: !1,
                    withRipple: !1,
                    onClick: o,
                    children: (0, m.jsx)(N.HL, { variant: 'span', type: 'controls', size: 'l', weight: 'medium', lineClamp: 1, children: a.title }),
                });
            };
            var eb = a(87523),
                eS = a.n(eb);
            let ey = J.default.default(
                    () =>
                        Promise.all([a.e(9307), a.e(8035), a.e(9740), a.e(6572)])
                            .then(a.bind(a, 36572))
                            .then((e) => e.ShareButton),
                    { ssr: !1 },
                ),
                eT = (e) => {
                    let { button: t, buttonClassName: a, cardRef: i } = e,
                        r = (0, _.$)(a, eS().contractButton);
                    switch (t.type) {
                        case W.m.ACTION:
                            if (t.data.url) return (0, m.jsx)(ec, { data: t.data, className: r });
                            return null;
                        case W.m.SIMPLE:
                            if (t.data.url) return (0, m.jsx)(eg, { data: t.data, className: r });
                            return null;
                        case W.m.SHARE:
                            return (0, m.jsx)(ey, { data: t.data, wrapperClassName: r, cardRef: i });
                        case W.m.LIKE:
                            return (0, m.jsx)(ef, { data: t.data, className: r });
                        default:
                            return null;
                    }
                },
                ej = (0, p.PA)((e) => {
                    var t, a;
                    let { slide: i, className: r, cardRef: n, hasLeft: l = !0, hasRight: s = !0, onSaveChoice: o, onEditChoice: c, onSlidePrev: u, onSlideNext: d } = e,
                        { button: p } = i,
                        {
                            library: v,
                            slides: { savedChoice: f },
                        } = (0, O.g)(),
                        C = null != (a = null == f ? void 0 : f.isSaved) && a,
                        { formatMessage: g } = (0, x.A)(),
                        b = (0, h.useMemo)(() => {
                            if ((null == p ? void 0 : p.type) === W.m.SHARE || (null == p ? void 0 : p.type) === W.m.SIMPLE)
                                return { textColor: p.data.textColor, buttonColor: p.data.buttonColor };
                            if ((null == p ? void 0 : p.type) === W.m.LIKE) {
                                let e = ei(v, p.data.entityType, p.data.entityId) ? p.data.liked : p.data.unliked;
                                return { textColor: e.textColor, buttonColor: e.buttonColor };
                            }
                            return { textColor: null, buttonColor: null };
                        }, [p, v]),
                        S = (0, h.useMemo)(() => ({ '--text-color': b.textColor, '--button-color': b.buttonColor }), [b]),
                        j = (0, ee.L)(() => p && (0, m.jsx)(eT, { button: p, buttonClassName: r, cardRef: n })),
                        N = (0, ee.L)(() =>
                            i.savedChoiceKey && (l || s)
                                ? (0, m.jsx)(eg, { data: { title: g({ id: 'rewind.save-choice' }), url: null, ...b }, handleClick: o, className: r })
                                : j,
                        ),
                        A = null == (t = i.content) ? void 0 : t.type;
                    return A !== F.x.CAROUSEL && A !== F.x.COLLAGE
                        ? j
                        : C
                          ? (0, m.jsxs)('div', {
                                className: eS().buttonsContainer,
                                children: [
                                    p && (0, m.jsx)(eT, { button: p, buttonClassName: r, cardRef: n }),
                                    (0, m.jsx)(y.$, {
                                        color: 'primary',
                                        className: (0, _.$)(eS().iconButton, ed().root, eS().editButton),
                                        icon: (0, m.jsx)(T.I, { variant: 'pencil', size: 'xxs' }),
                                        radius: 'round',
                                        role: 'link',
                                        size: 'default',
                                        withHover: !0,
                                        withRipple: !0,
                                        style: S,
                                        onClick: c,
                                    }),
                                ],
                            })
                          : (0, m.jsxs)('div', {
                                className: eS().buttonsContainer,
                                children: [
                                    l &&
                                        (0, m.jsx)(y.$, {
                                            color: 'primary',
                                            className: (0, _.$)(eS().iconButton, ed().root, eS().arrowLeftButton),
                                            icon: (0, m.jsx)(T.I, { variant: 'arrowLeft', size: 'xxs' }),
                                            radius: 'round',
                                            role: 'link',
                                            size: 'default',
                                            withHover: !0,
                                            withRipple: !0,
                                            style: S,
                                            onClick: u,
                                        }),
                                    (0, m.jsx)('div', { className: eS().mainButtonContainer, children: N }),
                                    s &&
                                        (0, m.jsx)(y.$, {
                                            color: 'primary',
                                            className: (0, _.$)(eS().iconButton, ed().root, eS().arrowRightButton),
                                            icon: (0, m.jsx)(T.I, { variant: 'arrowRight', size: 'xxs' }),
                                            radius: 'round',
                                            role: 'link',
                                            size: 'default',
                                            withHover: !0,
                                            withRipple: !0,
                                            style: S,
                                            onClick: d,
                                        }),
                                ],
                            });
                });
            var eN = function () {
                    return (eN =
                        Object.assign ||
                        function (e) {
                            for (var t, a = 1, i = arguments.length; a < i; a++)
                                for (var r in (t = arguments[a])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e;
                        }).apply(this, arguments);
                },
                eA = (function () {
                    function e(e, t, a) {
                        var i = this;
                        (this.endVal = t),
                            (this.options = a),
                            (this.version = '2.8.1'),
                            (this.defaults = {
                                startVal: 0,
                                decimalPlaces: 0,
                                duration: 2,
                                useEasing: !0,
                                useGrouping: !0,
                                useIndianSeparators: !1,
                                smartEasingThreshold: 999,
                                smartEasingAmount: 333,
                                separator: ',',
                                decimal: '.',
                                prefix: '',
                                suffix: '',
                                enableScrollSpy: !1,
                                scrollSpyDelay: 200,
                                scrollSpyOnce: !1,
                            }),
                            (this.finalEndVal = null),
                            (this.useEasing = !0),
                            (this.countDown = !1),
                            (this.error = ''),
                            (this.startVal = 0),
                            (this.paused = !0),
                            (this.once = !1),
                            (this.count = function (e) {
                                i.startTime || (i.startTime = e);
                                var t = e - i.startTime;
                                (i.remaining = i.duration - t),
                                    i.useEasing
                                        ? i.countDown
                                            ? (i.frameVal = i.startVal - i.easingFn(t, 0, i.startVal - i.endVal, i.duration))
                                            : (i.frameVal = i.easingFn(t, i.startVal, i.endVal - i.startVal, i.duration))
                                        : (i.frameVal = i.startVal + (i.endVal - i.startVal) * (t / i.duration));
                                var a = i.countDown ? i.frameVal < i.endVal : i.frameVal > i.endVal;
                                (i.frameVal = a ? i.endVal : i.frameVal),
                                    (i.frameVal = Number(i.frameVal.toFixed(i.options.decimalPlaces))),
                                    i.printValue(i.frameVal),
                                    t < i.duration
                                        ? (i.rAF = requestAnimationFrame(i.count))
                                        : null !== i.finalEndVal
                                          ? i.update(i.finalEndVal)
                                          : i.options.onCompleteCallback && i.options.onCompleteCallback();
                            }),
                            (this.formatNumber = function (e) {
                                var t,
                                    a,
                                    r,
                                    n = (Math.abs(e).toFixed(i.options.decimalPlaces) + '').split('.');
                                if (((t = n[0]), (a = n.length > 1 ? i.options.decimal + n[1] : ''), i.options.useGrouping)) {
                                    r = '';
                                    for (var l = 3, s = 0, o = 0, c = t.length; o < c; ++o)
                                        i.options.useIndianSeparators && 4 === o && ((l = 2), (s = 1)),
                                            0 !== o && s % l == 0 && (r = i.options.separator + r),
                                            s++,
                                            (r = t[c - o - 1] + r);
                                    t = r;
                                }
                                return (
                                    i.options.numerals &&
                                        i.options.numerals.length &&
                                        ((t = t.replace(/[0-9]/g, function (e) {
                                            return i.options.numerals[+e];
                                        })),
                                        (a = a.replace(/[0-9]/g, function (e) {
                                            return i.options.numerals[+e];
                                        }))),
                                    (e < 0 ? '-' : '') + i.options.prefix + t + a + i.options.suffix
                                );
                            }),
                            (this.easeOutExpo = function (e, t, a, i) {
                                return (a * (1 - Math.pow(2, (-10 * e) / i)) * 1024) / 1023 + t;
                            }),
                            (this.options = eN(eN({}, this.defaults), a)),
                            (this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber),
                            (this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo),
                            (this.startVal = this.validateValue(this.options.startVal)),
                            (this.frameVal = this.startVal),
                            (this.endVal = this.validateValue(t)),
                            (this.options.decimalPlaces = Math.max(this.options.decimalPlaces)),
                            this.resetDuration(),
                            (this.options.separator = String(this.options.separator)),
                            (this.useEasing = this.options.useEasing),
                            '' === this.options.separator && (this.options.useGrouping = !1),
                            (this.el = 'string' == typeof e ? document.getElementById(e) : e),
                            this.el ? this.printValue(this.startVal) : (this.error = '[CountUp] target is null or undefined'),
                            'undefined' != typeof window &&
                                this.options.enableScrollSpy &&
                                (this.error
                                    ? console.error(this.error, e)
                                    : ((window.onScrollFns = window.onScrollFns || []),
                                      window.onScrollFns.push(function () {
                                          return i.handleScroll(i);
                                      }),
                                      (window.onscroll = function () {
                                          window.onScrollFns.forEach(function (e) {
                                              return e();
                                          });
                                      }),
                                      this.handleScroll(this)));
                    }
                    return (
                        (e.prototype.handleScroll = function (e) {
                            if (e && window && !e.once) {
                                var t = window.innerHeight + window.scrollY,
                                    a = e.el.getBoundingClientRect(),
                                    i = a.top + window.pageYOffset,
                                    r = a.top + a.height + window.pageYOffset;
                                r < t && r > window.scrollY && e.paused
                                    ? ((e.paused = !1),
                                      setTimeout(function () {
                                          return e.start();
                                      }, e.options.scrollSpyDelay),
                                      e.options.scrollSpyOnce && (e.once = !0))
                                    : (window.scrollY > r || i > t) && !e.paused && e.reset();
                            }
                        }),
                        (e.prototype.determineDirectionAndSmartEasing = function () {
                            var e = this.finalEndVal ? this.finalEndVal : this.endVal;
                            if (((this.countDown = this.startVal > e), Math.abs(e - this.startVal) > this.options.smartEasingThreshold && this.options.useEasing)) {
                                this.finalEndVal = e;
                                var t = this.countDown ? 1 : -1;
                                (this.endVal = e + t * this.options.smartEasingAmount), (this.duration = this.duration / 2);
                            } else (this.endVal = e), (this.finalEndVal = null);
                            null !== this.finalEndVal ? (this.useEasing = !1) : (this.useEasing = this.options.useEasing);
                        }),
                        (e.prototype.start = function (e) {
                            this.error ||
                                (this.options.onStartCallback && this.options.onStartCallback(),
                                e && (this.options.onCompleteCallback = e),
                                this.duration > 0
                                    ? (this.determineDirectionAndSmartEasing(), (this.paused = !1), (this.rAF = requestAnimationFrame(this.count)))
                                    : this.printValue(this.endVal));
                        }),
                        (e.prototype.pauseResume = function () {
                            this.paused
                                ? ((this.startTime = null),
                                  (this.duration = this.remaining),
                                  (this.startVal = this.frameVal),
                                  this.determineDirectionAndSmartEasing(),
                                  (this.rAF = requestAnimationFrame(this.count)))
                                : cancelAnimationFrame(this.rAF),
                                (this.paused = !this.paused);
                        }),
                        (e.prototype.reset = function () {
                            cancelAnimationFrame(this.rAF),
                                (this.paused = !0),
                                this.resetDuration(),
                                (this.startVal = this.validateValue(this.options.startVal)),
                                (this.frameVal = this.startVal),
                                this.printValue(this.startVal);
                        }),
                        (e.prototype.update = function (e) {
                            cancelAnimationFrame(this.rAF),
                                (this.startTime = null),
                                (this.endVal = this.validateValue(e)),
                                this.endVal !== this.frameVal &&
                                    ((this.startVal = this.frameVal),
                                    null == this.finalEndVal && this.resetDuration(),
                                    (this.finalEndVal = null),
                                    this.determineDirectionAndSmartEasing(),
                                    (this.rAF = requestAnimationFrame(this.count)));
                        }),
                        (e.prototype.printValue = function (e) {
                            var t;
                            if (this.el) {
                                var a = this.formattingFn(e);
                                (null == (t = this.options.plugin) ? void 0 : t.render)
                                    ? this.options.plugin.render(this.el, a)
                                    : 'INPUT' === this.el.tagName
                                      ? (this.el.value = a)
                                      : 'text' === this.el.tagName || 'tspan' === this.el.tagName
                                        ? (this.el.textContent = a)
                                        : (this.el.innerHTML = a);
                            }
                        }),
                        (e.prototype.ensureNumber = function (e) {
                            return 'number' == typeof e && !isNaN(e);
                        }),
                        (e.prototype.validateValue = function (e) {
                            var t = Number(e);
                            return this.ensureNumber(t) ? t : ((this.error = '[CountUp] invalid start or end value: '.concat(e)), null);
                        }),
                        (e.prototype.resetDuration = function () {
                            (this.startTime = null), (this.duration = 1e3 * Number(this.options.duration)), (this.remaining = this.duration);
                        }),
                        e
                    );
                })();
            let ek = { 6: 84, 7: 84, 8: 68, 9: 68, 10: 56, 11: 56, 12: 48, 13: 48 };
            var eI = a(55638),
                eE = a.n(eI);
            let ew = (e) => {
                let { caption: t, className: a, lineClamp: i = 2 } = e;
                return (0, m.jsx)(N.HL, { variant: 'span', type: 'text', size: 'l', weight: 'medium', className: (0, _.$)(eE().root, a), lineClamp: i, children: t });
            };
            var eR = a(51500),
                eL = a.n(eR);
            let eO = (e) => {
                let { data: t, className: a, valueClassName: i, valueContainerClassName: r, withAutoResize: n, descriptionLineClamp: l, withOpacity: s } = e,
                    o = (0, h.useRef)(null),
                    { formatNumber: c } = (0, x.A)(),
                    u = (0, h.useCallback)((e) => (e >= 1e4 ? c(e) : String(e)), [c]);
                (0, h.useEffect)(() => {
                    if (o.current) {
                        if (!t.value) return;
                        let e = new eA(o.current, Number(t.value), { startVal: 1, formattingFn: u });
                        e.error || e.start();
                    }
                }, [t.value, u]);
                let d = (0, h.useMemo)(() => {
                    if (n && t.value)
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
                                            .concat(ek[t], 'px)');
                            })(t.value),
                        };
                }, [t.value, n]);
                return (0, m.jsxs)(m.Fragment, {
                    children: [
                        (0, m.jsxs)(j.q, { children: [t.value, ' ', t.valueSuffix, ' ', t.valueDescription] }),
                        (0, m.jsxs)('div', {
                            className: (0, _.$)(eL().root, { [eL().root_withOpacity]: s }, a),
                            'aria-hidden': !0,
                            children: [
                                (0, m.jsxs)('div', {
                                    className: (0, _.$)(eL().valueContainer, r),
                                    children: [
                                        (0, m.jsx)(N.DZ, {
                                            variant: 'div',
                                            size: 'xxxxl',
                                            tabIndex: -1,
                                            ref: o,
                                            'aria-hidden': !0,
                                            className: (0, _.$)(eL().value, i),
                                            style: d,
                                        }),
                                        t.valueSuffix && (0, m.jsx)(N.DZ, { variant: 'div', size: 'xxxxl', className: eL().value, style: d, children: t.valueSuffix }),
                                    ],
                                }),
                                (0, m.jsx)(N.DZ, { variant: 'div', size: 'xl', weight: 'black', className: eL().unit, lineClamp: l, children: t.valueDescription }),
                                t.footer && (0, m.jsx)(ew, { caption: t.footer, className: eL().footer, lineClamp: 3 }),
                            ],
                        }),
                    ],
                });
            };
            var eP = a(75212),
                eB = a.n(eP);
            let eV = (e) => {
                let { data: t } = e,
                    a = (0, h.useMemo)(
                        () => ({ value: t.value, valueDescription: t.valueDescription, valueSuffix: t.valueSuffix, footer: t.footer }),
                        [t.footer, t.value, t.valueDescription, t.valueSuffix],
                    ),
                    i = (0, h.useMemo)(() => ({ '--covers-offset-translate': ''.concat((t.covers.length - 1) * 7.5, 'px') }), [t.covers]),
                    r = (0, h.useCallback)((e) => ({ '--cover-offset-translate': '-'.concat(15 * e, 'px') }), []);
                return (0, m.jsxs)('div', {
                    className: eB().root,
                    children: [
                        (0, m.jsx)(eO, { data: a, withAutoResize: !0 }),
                        (0, m.jsx)('div', {
                            className: eB().covers,
                            style: i,
                            children: t.covers.map((e, t) => {
                                var a;
                                return (0, m.jsx)(
                                    D.t,
                                    {
                                        radius: 'round',
                                        className: eB().cover,
                                        style: r(t),
                                        children: (0, m.jsx)(en.B, {
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
            var eM = a(58660),
                ez = a.n(eM);
            let eD = (e) => {
                    let {
                            forwardRef: t,
                            createUrlReplacer: a = g.createAvatarUrl,
                            className: i,
                            maskSrc: r,
                            style: n = {},
                            withAspectRatio: l = !1,
                            withAvatarReplace: s,
                            withMaskReplace: o = s,
                            ...c
                        } = e,
                        u = r ? 'url('.concat(o ? a(r, 'orig', l) : r, ')') : 'none';
                    return (0, m.jsx)(U._V, {
                        className: (0, _.$)(ez().root, i),
                        createUrlReplacer: a,
                        ref: t,
                        style: { ...n, maskImage: u },
                        withAspectRatio: l,
                        withAvatarReplace: s,
                        ...c,
                    });
                },
                eF = (0, h.forwardRef)((e, t) => (0, m.jsx)(eD, { forwardRef: t, ...e }));
            var eH = a(94964),
                eU = a.n(eH);
            let eG = (e) => {
                    let { backgroundSrc: t, className: a, forwardRef: i, maskSrc: r, size: n, src: l, withAvatarReplace: s, ...o } = e;
                    return (0, m.jsxs)('div', {
                        className: eU().root,
                        children: [
                            t && (0, m.jsx)(U._V, { className: eU().background, src: t, size: n, withAvatarReplace: s, ...o }),
                            (0, m.jsx)(eF, { className: a, maskSrc: r, ref: i, size: n, src: l, withAvatarReplace: s, ...o }),
                        ],
                    });
                },
                e$ = (0, h.forwardRef)((e, t) => (0, m.jsx)(eG, { forwardRef: t, ...e }));
            var eK = a(1714),
                eX = a(66650),
                eY = a.n(eX);
            let eZ = (0, p.PA)((e) => {
                let {
                        isDisabled: t,
                        initialIndex: a = 0,
                        slidesPerView: i = eK.bF,
                        disabledClassName: r,
                        slideActiveClassName: n,
                        slideClassName: l,
                        onSlideChange: s,
                        onCarouselReady: o,
                        children: c,
                    } = e,
                    u = (0, h.useRef)(null);
                (0, h.useEffect)(() => {
                    var e, a;
                    t ? null == (e = u.current) || e.disable() : null == (a = u.current) || a.enable();
                }, [t]);
                let d = (0, h.useCallback)(
                        (e) => {
                            let { activeIndex: a } = e;
                            t || null == s || s(a);
                        },
                        [t, s],
                    ),
                    p = (0, h.useCallback)(
                        (e) => {
                            (u.current = e), null == o || o({ slideNext: () => e.slideNext(), slidePrev: () => e.slidePrev() });
                        },
                        [o],
                    );
                return (0, m.jsx)(I.RC, {
                    a11y: { enabled: !0 },
                    centeredSlides: !0,
                    className: (0, _.$)(eY().root, eY().swiper, { [null != r ? r : '']: t }),
                    initialSlide: a,
                    keyboard: !0,
                    modules: [k.Jq, k.s3, k.Vx, k.dK],
                    pagination: { dynamicBullets: !0, dynamicMainBullets: 3 },
                    slidesPerView: i,
                    spaceBetween: eK.ur,
                    wrapperClass: eY().wrapper,
                    onActiveIndexChange: d,
                    onSwiper: p,
                    children: c.map((e, t) => {
                        var i, r;
                        return (0, m.jsx)(
                            I.qr,
                            {
                                className: (0, _.$)(eY().slide, l, {
                                    [null != n ? n : '']: t === (null != (r = null == (i = u.current) ? void 0 : i.activeIndex) ? r : a),
                                }),
                                children: e,
                            },
                            t,
                        );
                    }),
                });
            });
            var eq = a(85298),
                eQ = a.n(eq);
            let eJ = (e) => {
                let { className: t, heading: a, lineClamp: i = 2 } = e;
                return (0, m.jsx)(N.DZ, { variant: 'h3', size: 'xxl', weight: 'bold', className: (0, _.$)(eQ().root, t), lineClamp: i, children: a });
            };
            var eW = a(9268),
                e0 = a.n(eW);
            let e1 = (0, p.PA)((e) => {
                let { data: t, carouselIndex: a, onSlideChange: i, onCarouselReady: r } = e,
                    {
                        slides: { savedChoice: n },
                    } = (0, O.g)(),
                    { isSaved: l } = null != n ? n : { index: 0, isSaved: !1 },
                    [s, o] = (0, h.useState)(() => {
                        if (void 0 !== a) return t.items[a];
                    }),
                    c = (0, h.useCallback)(
                        (e) => {
                            let a = t.items[e];
                            a && (o(a), null == i || i(e, t.items.length));
                        },
                        [t.items, i],
                    );
                return t.items.length
                    ? (0, m.jsxs)('div', {
                          className: e0().root,
                          children: [
                              s && s.data.description && (0, m.jsx)(ew, { caption: s.data.description, className: e0().description, lineClamp: 3 }),
                              (0, m.jsx)(eZ, {
                                  isDisabled: l,
                                  initialIndex: a,
                                  slideClassName: e0().slide,
                                  slideActiveClassName: e0().slideActive,
                                  disabledClassName: e0().disabled,
                                  onCarouselReady: r,
                                  onSlideChange: c,
                                  children: t.items.map((e, t) => {
                                      var a, i;
                                      return (0, m.jsx)(
                                          D.t,
                                          {
                                              className: e0().cover,
                                              children:
                                                  e.data.cover.uri &&
                                                  (0, m.jsx)(e$, {
                                                      backgroundSrc: null != (a = e.data.coverBackground) ? a : '',
                                                      className: e0().image,
                                                      fit: 'contain',
                                                      maskSrc: null != (i = e.data.coverMask) ? i : '',
                                                      size: eK.e0,
                                                      src: e.data.cover.uri,
                                                      withAvatarReplace: !0,
                                                      withSrcSet: !1,
                                                  }),
                                          },
                                          t,
                                      );
                                  }),
                              }),
                              (0, m.jsxs)('div', {
                                  className: e0().meta,
                                  children: [
                                      (null == s ? void 0 : s.data.subtitle) && (0, m.jsx)(ew, { caption: s.data.subtitle, className: e0().subtitle }),
                                      (null == s ? void 0 : s.data.title) && (0, m.jsx)(eJ, { className: e0().title, heading: s.data.title, lineClamp: 3 }),
                                  ],
                              }),
                          ],
                      })
                    : null;
            });
            !(function (e) {
                (e.SQUARE = 'SQUARE'), (e.CIRCLE = 'CIRCLE');
            })(n || (n = {}));
            var e2 = a(94257),
                e5 = a.n(e2),
                e7 = a(60754);
            !(function (e) {
                (e.NUMBER = 'NUMBER'), (e.TEXT = 'TEXT');
            })(l || (l = {}));
            var e6 = a(32441),
                e8 = a.n(e6);
            let e3 = (0, p.PA)((e) => {
                    var t;
                    let { data: a, index: i, variant: r, isOrderVisible: s, hasOnlyArtistItems: o } = e,
                        { formatNumber: c } = (0, x.A)(),
                        u = (0, h.useMemo)(
                            () => ({ '--slide-final-translate-offset': r === F.x.CHART && o ? ''.concat(-8 * i, 'px') : 0, animationDelay: ''.concat(0.5 * i, 's') }),
                            [i, o, r],
                        ),
                        d = (0, h.useMemo)(() => {
                            let e = Number(a.subtitle);
                            return a.subtitle && !isNaN(e) ? c(e) : a.subtitle;
                        }, [a.subtitle, c]),
                        p = (0, h.useMemo)(
                            () =>
                                a.titleType === l.NUMBER && 'number' == typeof a.value
                                    ? (0, m.jsx)(eO, {
                                          data: (0, e7.wg)({ value: a.value }),
                                          className: e8().stat,
                                          valueClassName: e8().statValue,
                                          valueContainerClassName: e8().statValueContainer,
                                      })
                                    : a.title
                                      ? r === F.x.CHART_ARTIST
                                          ? (0, m.jsx)(N.DZ, { variant: 'div', size: 's', weight: 'black', lineClamp: 2, className: e8().textVariant, children: a.title })
                                          : (0, m.jsx)(N.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                lineClamp: 2,
                                                className: e8().textVariant,
                                                children: a.title,
                                            })
                                      : void 0,
                            [a.title, a.titleType, a.value, r],
                        ),
                        v = (0, h.useMemo)(() => {
                            if (d)
                                return (r === F.x.CHART && o) || r === F.x.CHART_FAVORITES
                                    ? (0, m.jsx)(N.DZ, {
                                          variant: 'div',
                                          size: 's',
                                          weight: 'black',
                                          lineClamp: 2,
                                          className: (0, _.$)(e8().textVariant, e8().subTitle),
                                          children: d,
                                      })
                                    : (0, m.jsx)(N.HL, {
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'medium',
                                          lineClamp: 2,
                                          className: (0, _.$)(e8().text, { [e8().textVariant]: r === F.x.CHART_ARTIST }),
                                          children: d,
                                      });
                        }, [d, o, r]);
                    return (0, m.jsxs)('li', {
                        className: e8().root,
                        style: u,
                        tabIndex: 0,
                        children: [
                            s && (0, m.jsx)(N.DZ, { variant: 'div', size: 'l', weight: 'black', className: e8().order, children: i + 1 }),
                            (0, m.jsx)(D.t, {
                                radius: a.coverType === n.CIRCLE ? 'round' : 'xs',
                                className: e8().cover,
                                children:
                                    (null == (t = a.cover) ? void 0 : t.uri) &&
                                    (0, m.jsx)(en.B, { src: a.cover.uri, withAvatarReplace: !0, fit: 'contain', className: e8().image, size: 100 }),
                            }),
                            (0, m.jsxs)('div', { className: e8().meta, children: [p, v] }),
                        ],
                    });
                }),
                e9 = (e) => {
                    let { items: t, isOrderVisible: a, variant: i } = e,
                        r = (0, h.useMemo)(() => t.every((e) => e.coverType === n.CIRCLE), [t]),
                        l = (0, h.useMemo)(() => {
                            switch (i) {
                                case F.x.CHART_ARTIST:
                                    return 'l';
                                case F.x.CHART_FAVORITES:
                                    return 'xxl';
                                case F.x.CHART:
                                    if (r) return;
                                    return 'm';
                                default:
                                    return null;
                            }
                        }, [r, i]);
                    return (0, m.jsx)('ol', {
                        className: (0, _.$)(e5().root, e5()['root_spacer_'.concat(l)]),
                        tabIndex: -1,
                        children: t.map((e, t) =>
                            (0, m.jsx)(e3, { data: e, index: t, variant: i, hasOnlyArtistItems: r, isOrderVisible: a }, ''.concat(e.title, '-').concat(e.subtitle)),
                        ),
                    });
                };
            var e4 = a(27986),
                te = a.n(e4);
            let tt = (e) => {
                var t;
                let { data: a } = e;
                return (0, m.jsxs)('div', {
                    className: te().root,
                    children: [
                        (null == (t = a.cover) ? void 0 : t.uri) &&
                            (0, m.jsx)(D.t, {
                                radius: 'round',
                                className: te().cover,
                                children: (0, m.jsx)(en.B, { src: a.cover.uri, withAvatarReplace: !0, fit: 'contain', className: te().image, size: 200 }),
                            }),
                        a.title && (0, m.jsx)(N.DZ, { variant: 'div', size: 'xl', weight: 'bold', className: te().title, lineClamp: 2, children: a.title }),
                        (0, m.jsx)(e9, { items: a.items, isOrderVisible: !1, variant: F.x.CHART_ARTIST }),
                    ],
                });
            };
            var ta = a(46096),
                ti = a.n(ta);
            let tr = (e) => {
                var t;
                let { data: a } = e;
                return (0, m.jsxs)('div', {
                    className: ti().root,
                    children: [
                        a.description && (0, m.jsx)(ew, { caption: null != (t = a.description) ? t : '', className: ti().text, lineClamp: 3 }),
                        (0, m.jsx)(e9, { items: a.items, variant: F.x.CHART, isOrderVisible: a.isOrderVisible }),
                    ],
                });
            };
            var tn = a(77368),
                tl = a.n(tn);
            let ts = (e) => {
                let { data: t } = e,
                    a = 'number' == typeof t.value,
                    i = (0, h.useMemo)(
                        () => ({ value: t.value, valueDescription: t.valueDescription, valueSuffix: t.valueSuffix, footer: t.footer }),
                        [t.footer, t.value, t.valueDescription, t.valueSuffix],
                    );
                return (0, m.jsxs)('div', {
                    className: tl().root,
                    children: [
                        a && (0, m.jsx)(eO, { data: i, withAutoResize: !0 }),
                        t.description &&
                            (0, m.jsx)(N.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'medium',
                                className: tl().description,
                                lineClamp: 3,
                                children: t.description,
                            }),
                        (0, m.jsx)(e9, { items: t.items, isOrderVisible: t.isOrderVisible, variant: F.x.CHART_FAVORITES }),
                    ],
                });
            };
            !(function (e) {
                (e.CHOSEN = 'CHOSEN'), (e.TEXT = 'TEXT');
            })(s || (s = {})),
                (function (e) {
                    (e.CHOSEN_IMAGE = 'CHOSEN_IMAGE'), (e.IMAGE = 'IMAGE');
                })(o || (o = {})),
                (function (e) {
                    (e.TEXT = 'TEXT'), (e.COLLAGE = 'COLLAGE');
                })(c || (c = {}));
            var to = a(99226),
                tc = a.n(to);
            let tu = (0, p.PA)((e) => {
                let { data: t, carouselIndex: a = 0, onBackgroundChange: i, onCarouselReady: r, onSlideChange: n } = e,
                    {
                        slides: { savedChoices: l },
                    } = (0, O.g)();
                (0, h.useEffect)(() => {
                    var e, r, n;
                    return null == i ? void 0 : i(null != (n = null == (r = t.items[a]) || null == (e = r.contentBackground) ? void 0 : e.uri) ? n : '');
                }, [t.items, a, i]);
                let c = (0, S.c)((e) => {
                    var a, r, l;
                    null == i || i(null != (l = null == (r = t.items[e]) || null == (a = r.contentBackground) ? void 0 : a.uri) ? l : ''),
                        null == n || n(e, t.items.length);
                });
                return t.items.length
                    ? (0, m.jsx)('div', {
                          className: tc().root,
                          children: (0, m.jsx)(eZ, {
                              initialIndex: a,
                              slidesPerView: 1,
                              onCarouselReady: r,
                              onSlideChange: c,
                              children: t.items.map((e, t) => {
                                  let a,
                                      { topBlock: i, bottomBlock: r } = e,
                                      {
                                          background: { uri: n },
                                          items: c,
                                      } = i.data,
                                      u = c.reduce((e, t) => {
                                          let a, i, r;
                                          if (t.type === o.IMAGE) a = t.data.uri;
                                          else if (t.type === o.CHOSEN_IMAGE) {
                                              var n;
                                              let e = l.get(null != (n = t.data.key) ? n : '');
                                              (a = null == e ? void 0 : e.data.uri),
                                                  (i = null == e ? void 0 : e.data.coverMask),
                                                  (r = null == e ? void 0 : e.data.coverBackground);
                                          }
                                          if (!a) return e;
                                          let { x: s, y: c, z: u, width: d, height: m } = t.data.rectangle;
                                          return (
                                              e.push({
                                                  uri: a,
                                                  coverMask: i,
                                                  coverBackground: r,
                                                  rectangle: {
                                                      left: ''.concat(s, '%'),
                                                      top: ''.concat(1.25 * c, '%'),
                                                      zIndex: u,
                                                      width: ''.concat(d, '%'),
                                                      height: ''.concat(1.25 * m, '%'),
                                                  },
                                              }),
                                              e
                                          );
                                      }, []),
                                      d =
                                          ((a = r.data.items),
                                          a.map((e) => {
                                              let t;
                                              if (e.type === s.TEXT) t = e.data.subtitle;
                                              else if (e.type === s.CHOSEN) {
                                                  var a;
                                                  let i = l.get(null != (a = e.data.key) ? a : '');
                                                  t = null == i ? void 0 : i.data.text;
                                              }
                                              return { title: e.data.title, subtitle: t };
                                          }));
                                  return (0, m.jsxs)(
                                      'div',
                                      {
                                          className: tc().slide,
                                          children: [
                                              (0, m.jsxs)('div', {
                                                  className: tc().topBlock,
                                                  children: [
                                                      n && (0, m.jsx)(U._V, { className: tc().topBlockBackground, src: n, withAvatarReplace: !0 }),
                                                      u.map((e, t) => {
                                                          let { uri: a, coverMask: i, coverBackground: r, rectangle: n } = e;
                                                          return (0, m.jsx)(
                                                              'div',
                                                              {
                                                                  className: tc().topBlockImageWrapper,
                                                                  style: n,
                                                                  children: (0, m.jsx)(e$, {
                                                                      backgroundSrc: r,
                                                                      className: tc().topBlockImage,
                                                                      fit: 'contain',
                                                                      maskSrc: i,
                                                                      size: eK.e0,
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
                                              (0, m.jsx)('div', {
                                                  className: tc().bottomBlock,
                                                  children: d.map((e, t) => {
                                                      let { title: a, subtitle: i } = e;
                                                      return (0, m.jsxs)(
                                                          'div',
                                                          {
                                                              className: tc().bottomBlock_item,
                                                              children: [
                                                                  a && (0, m.jsx)(ew, { caption: a, className: tc().title, lineClamp: 1 }),
                                                                  i && (0, m.jsx)(eJ, { heading: i, className: tc().subtitle, lineClamp: 1 === t ? 1 : 2 }),
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
            var td = a(98772),
                tm = a.n(td);
            let t_ = (e) => {
                let { data: t } = e;
                return (0, m.jsxs)('div', {
                    className: tm().root,
                    children: [
                        (0, m.jsx)(N.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'medium',
                            className: (0, _.$)(tm().description, tm().text),
                            lineClamp: 3,
                            children: t.description,
                        }),
                        t.artwork && (0, m.jsx)(U._V, { src: t.artwork, size: 300, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0, className: tm().artwork }),
                        (0, m.jsx)(N.DZ, { variant: 'h2', size: 'xl', weight: 'black', className: (0, _.$)(tm().title, tm().text), lineClamp: 2, children: t.title }),
                    ],
                });
            };
            !(function (e) {
                (e.REWIND = 'REWIND'), (e.TRACK = 'TRACK');
            })(u || (u = {}));
            let tp = { src: '/_next/static/media/trailer_animated.aa3fd227.gif' };
            var tv = a(8732),
                th = a.n(tv);
            let tx = (0, p.PA)((e) => {
                var t, a;
                let { data: r, withPersonalColor: n } = e,
                    { user: l } = (0, O.g)(),
                    s = r.entityType === u.REWIND,
                    o = r.entityType === u.TRACK,
                    c = null == (t = r.smallRoundCover) ? void 0 : t.uri,
                    d = c && o,
                    p = s || (c && !d),
                    v = r.align === i.BOTTOM,
                    x = p || d,
                    f = (0, h.useMemo)(() => {
                        if (!n || !l.collectionHue) {
                            var e;
                            return {
                                '--cover-background-color': r.cover.color,
                                '--small-round-cover-background-color': null == (e = r.smallRoundCover) ? void 0 : e.color,
                            };
                        }
                        return {
                            '--cover-background-color': (0, G.e)(l.collectionHue, 0.8, 0.6),
                            '--small-round-cover-background-color': (0, G.e)(l.collectionHue, 1, 0.35),
                        };
                    }, [r.cover.color, null == (a = r.smallRoundCover) ? void 0 : a.color, l.collectionHue, n]),
                    C = (0, ee.L)(() =>
                        (0, m.jsx)(D.t, {
                            radius: 'round',
                            className: th().smallRoundCover,
                            children: (0, m.jsx)(U._V, {
                                src: tp.src,
                                withFallback: !1,
                                withLoadingIndicator: !1,
                                fit: 'contain',
                                className: th().trailer,
                                'aria-hidden': !0,
                            }),
                        }),
                    ),
                    g = (0, ee.L)(() => {
                        if (c)
                            return (0, m.jsx)(D.t, {
                                radius: 'round',
                                className: (0, _.$)(th().smallRoundCover, th().smallRoundCover_withShadow),
                                children: (0, m.jsx)(en.B, { src: c, withAvatarReplace: !0, fit: 'contain', size: 100, className: th().image }),
                            });
                    }),
                    b = (0, ee.L)(() => (p ? (s ? C : g) : null));
                return (0, m.jsxs)('div', {
                    className: th().root,
                    style: f,
                    children: [
                        !v && r.description && (0, m.jsx)(ew, { caption: r.description, className: th().description, lineClamp: 3 }),
                        (0, m.jsxs)(D.t, {
                            className: (0, _.$)(th().cover, { [th().cover_small]: v, [th().cover_withSmallRoundCoverOnCover]: d }),
                            children: [
                                r.cover.uri &&
                                    (0, m.jsx)(e$, {
                                        backgroundSrc: r.coverBackground,
                                        className: th().image,
                                        fit: 'contain',
                                        maskSrc: r.coverMask,
                                        size: eK.e0,
                                        src: r.cover.uri,
                                        withAvatarReplace: !0,
                                        withSrcSet: !1,
                                    }),
                                d && g,
                            ],
                        }),
                        (0, m.jsxs)('div', {
                            className: (0, _.$)(th().meta, { [th().meta_withCover]: x }),
                            children: [
                                b,
                                r.subtitle && (0, m.jsx)(ew, { caption: r.subtitle, className: th().subtitle, lineClamp: 3 }),
                                r.title && (0, m.jsx)(eJ, { heading: r.title, lineClamp: 3 }),
                                v && r.description && (0, m.jsx)(ew, { caption: r.description, className: th().description, lineClamp: 3 }),
                            ],
                        }),
                    ],
                });
            });
            var tf = a(20506),
                tC = a.n(tf);
            let tg = (e) => {
                var t, a;
                let { data: i } = e;
                return (0, m.jsxs)('div', {
                    className: tC().root,
                    children: [
                        (0, m.jsx)(ew, { caption: null != (t = i.header) ? t : '', className: tC().text, lineClamp: 3 }),
                        i.stats.map((e) =>
                            (0, m.jsx)(eO, { data: e, descriptionLineClamp: 2, withAutoResize: !0, withOpacity: !0 }, ''.concat(e.value, '-').concat(e.valueDescription)),
                        ),
                        (0, m.jsx)(ew, { caption: null != (a = i.footer) ? a : '', className: tC().text, lineClamp: 3 }),
                    ],
                });
            };
            !(function (e) {
                (e.SMALL = 'SMALL'), (e.BIG = 'BIG');
            })(d || (d = {}));
            var tb = a(57868),
                tS = a.n(tb);
            let ty = (e) => {
                var t;
                let { data: a, disclaimer: i } = e,
                    r = a.titleSize === d.BIG ? 'xxl' : 'xl',
                    n = (0, ee.L)(() => {
                        if (null == i ? void 0 : i.textColor) return { '--disclaimer-text-color': i.textColor };
                    });
                return (0, m.jsxs)('div', {
                    className: tS().root,
                    style: n,
                    children: [
                        (0, m.jsx)(N.DZ, { variant: 'h2', size: r, weight: 'black', className: tS().text, children: a.title }),
                        (0, m.jsx)(ew, { caption: null != (t = a.subtitle) ? t : '', className: tS().text, lineClamp: 3 }),
                        (null == i ? void 0 : i.text) &&
                            (0, m.jsx)('span', { className: tS().disclaimer, dangerouslySetInnerHTML: { __html: (0, g.sanitizeDOM)(i.text) } }),
                    ],
                });
            };
            var tT = a(25988),
                tj = a.n(tT);
            let tN = (e) => {
                let {
                    data: { title: t, subtitle: a, description: i },
                } = e;
                return (0, m.jsxs)('div', {
                    className: tj().root,
                    children: [
                        (0, m.jsx)(N.DZ, {
                            variant: 'h2',
                            size: 'xxxl',
                            weight: 'black',
                            className: (0, _.$)(tj().text, tj().header),
                            dangerouslySetInnerHTML: { __html: (0, g.sanitizeDOM)(t || '') },
                        }),
                        (0, m.jsx)(N.DZ, {
                            variant: 'h3',
                            size: 'xl',
                            weight: 'black',
                            className: tj().text,
                            dangerouslySetInnerHTML: { __html: (0, g.sanitizeDOM)(a || '') },
                        }),
                        i &&
                            (0, m.jsx)(N.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'medium',
                                className: tj().text,
                                dangerouslySetInnerHTML: { __html: (0, g.sanitizeDOM)(i) },
                            }),
                    ],
                });
            };
            var tA = a(50832),
                tk = a.n(tA);
            let tI = (e) => {
                let { data: t } = e,
                    a = t.coverType === n.CIRCLE ? 'round' : 'xs';
                return (0, m.jsxs)('div', {
                    className: tk().root,
                    children: [
                        t.smallCover &&
                            (0, m.jsx)(D.t, {
                                radius: a,
                                className: tk().cover,
                                children: (0, m.jsx)(en.B, { src: t.smallCover, withAvatarReplace: !0, fit: 'contain', size: 100, className: tk().image }),
                            }),
                        t.coverTitle && (0, m.jsx)(N.DZ, { variant: 'span', weight: 'bold', size: 'l', className: tk().text, lineClamp: 3, children: t.coverTitle }),
                        (0, m.jsx)(eO, { data: t, withAutoResize: !0 }),
                    ],
                });
            };
            var tE = a(12668),
                tw = a.n(tE);
            let tR = (e) => {
                    let { label: t, description: a, artistsName: i, trackTitle: r, coverUri: n } = e,
                        l = [i, r].filter(Boolean).join(' • ');
                    return (0, m.jsxs)('div', {
                        children: [
                            (0, m.jsx)(N.DZ, { className: (0, _.$)(tw().textSecondary, tw().itemLabel), variant: 'h3', size: 's', weight: 'black', children: t }),
                            (0, m.jsx)(U._V, {
                                className: tw().cover,
                                src: n,
                                fit: 'cover',
                                withLoadingIndicator: !1,
                                withFallback: !0,
                                withAvatarReplace: !0,
                                withAspectRatio: !0,
                                'aria-hidden': !0,
                            }),
                            (0, m.jsx)(N.HL, {
                                className: (0, _.$)(tw().textPrimary, tw().itemMeta),
                                variant: 'div',
                                type: 'text',
                                size: 'l',
                                weight: 'medium',
                                lineClamp: 2,
                                children: l,
                            }),
                            (0, m.jsx)(N.DZ, { className: (0, _.$)(tw().textSecondary, tw().header), variant: 'h3', size: 'xl', weight: 'black', children: a }),
                        ],
                    });
                },
                tL = (0, p.PA)((e) => {
                    var t, a, i, r, n, l, s, o, c, u, d, p;
                    let { data: v } = e,
                        { title: h, subtitle: x, firstItem: f, secondItem: C } = v;
                    return (0, m.jsxs)('div', {
                        className: tw().root,
                        children: [
                            (0, m.jsxs)('div', {
                                className: tw().row,
                                children: [
                                    (0, m.jsx)(N.DZ, { className: (0, _.$)(tw().textPrimary, tw().header), variant: 'h2', size: 'xxxl', weight: 'black', children: h }),
                                    (0, m.jsx)(N.DZ, { className: tw().textPrimary, variant: 'h3', size: 's', weight: 'black', children: x }),
                                ],
                            }),
                            f &&
                                (0, m.jsx)('div', {
                                    className: tw().row,
                                    children: (0, m.jsx)(tR, {
                                        label: f.label,
                                        description: f.description,
                                        artistsName: null != (s = null == (t = f.track) ? void 0 : t.artistsName) ? s : null,
                                        trackTitle: null != (o = null == (a = f.track) ? void 0 : a.title) ? o : null,
                                        coverUri: null != (c = null == (i = f.track) ? void 0 : i.coverUri) ? c : void 0,
                                    }),
                                }),
                            C &&
                                (0, m.jsx)('div', {
                                    className: tw().row,
                                    children: (0, m.jsx)(tR, {
                                        label: C.label,
                                        description: C.description,
                                        artistsName: null != (u = null == (r = C.track) ? void 0 : r.artistsName) ? u : null,
                                        trackTitle: null != (d = null == (n = C.track) ? void 0 : n.title) ? d : null,
                                        coverUri: null != (p = null == (l = C.track) ? void 0 : l.coverUri) ? p : void 0,
                                    }),
                                }),
                        ],
                    });
                }),
                tO = (e) => {
                    let { content: t, withPersonalColor: a, ...i } = e;
                    if (null == t ? void 0 : t.data)
                        switch (t.type) {
                            case F.x.TEXT:
                                return (0, m.jsx)(ty, { data: t.data, disclaimer: t.disclaimer });
                            case F.x.STATS:
                                return (0, m.jsx)(tg, { data: t.data });
                            case F.x.CHART:
                                return (0, m.jsx)(tr, { data: t.data });
                            case F.x.CHART_FAVORITES:
                                return (0, m.jsx)(ts, { data: t.data });
                            case F.x.SINGLE_ENTITY:
                                return (0, m.jsx)(tx, { data: t.data, withPersonalColor: a });
                            case F.x.TEXT_FACT:
                                return (0, m.jsx)(tI, { data: t.data });
                            case F.x.CHART_ARTIST:
                                return (0, m.jsx)(tt, { data: t.data });
                            case F.x.ARTISTS:
                                return (0, m.jsx)(eV, { data: t.data });
                            case F.x.TEXT_EXTENDED:
                                return (0, m.jsx)(tN, { data: t.data });
                            case F.x.THEN_NOW_COMPARISON:
                                return (0, m.jsx)(tL, { data: t.data });
                            case F.x.PAY_CARD:
                                return (0, m.jsx)(t_, { data: t.data });
                            case F.x.CAROUSEL:
                                return (0, m.jsx)(e1, { data: t.data, ...i });
                            case F.x.COLLAGE:
                                return (0, m.jsx)(tu, { data: t.data, onBackgroundChange: i.onBackgroundChange, ...i });
                        }
                    return null;
                };
            var tP = a(57605),
                tB = a.n(tP);
            let tV = (e) => {
                let { src: t, className: a } = e;
                return (0, m.jsx)(U._V, {
                    className: (0, _.$)(tB().root, a),
                    fit: 'contain',
                    src: t,
                    size: 'orig',
                    withAvatarReplace: !0,
                    alt: '',
                    'aria-hidden': !0,
                    withLoadingIndicator: !1,
                });
            };
            var tM = a(27525),
                tz = a.n(tM);
            let tD = !0,
                tF = (0, p.PA)((e) => {
                    var t;
                    let { slide: a, isActive: r } = e,
                        {
                            slides: { savedChoice: n, saveChoice: l, isMuted: s },
                        } = (0, O.g)(),
                        o = (0, H.m)(),
                        { carouselIndex: c = 0, setCarouselIndex: u } = a,
                        d = (0, h.useRef)(null),
                        [p, v] = (0, h.useState)(void 0),
                        [x, f] = (0, h.useState)(0),
                        [g, b] = (0, h.useState)(a.background),
                        { state: y, toggleTrue: T, toggleFalse: j } = (0, E.e)(!1),
                        N = (0, h.useMemo)(() => {
                            let e = a.content;
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
                        }, [a]);
                    (0, h.useEffect)(() => {
                        var e, t, i, r, n;
                        ((null == (e = a.content) ? void 0 : e.type) === F.x.CAROUSEL || (null == (t = a.content) ? void 0 : t.type) === F.x.COLLAGE) &&
                            f(null != (n = null == (r = a.content.data) || null == (i = r.items) ? void 0 : i.length) ? n : 0);
                    }, [a.content]),
                        (0, h.useEffect)(() => {
                            s || (tD = !0), s && tD && (o({ actionType: C.X2.MuteTrailer }), (tD = !1));
                        }, [s, o]);
                    let A = (0, S.c)((e) => v(e)),
                        k = (0, S.c)(() => (null == p ? void 0 : p.slidePrev())),
                        I = (0, S.c)(() => (null == p ? void 0 : p.slideNext())),
                        w = (0, S.c)(() => {
                            n && a.savedChoiceKey && l(a.savedChoiceKey, { ...n, isSaved: !1 });
                        }),
                        R = (0, S.c)(() => {
                            var e, t, i, r, n;
                            if (!a.savedChoiceKey || (null == (e = a.content) ? void 0 : e.type) !== F.x.CAROUSEL) return;
                            let s = null == (r = a.content.data) || null == (i = r.items) || null == (t = i[c]) ? void 0 : t.data;
                            if (!s) return;
                            o({ actionType: C.X2.SelectSlideItem, objectPosX: c + 1 });
                            let { coverMask: u, coverBackground: d, title: m, cover: _ } = s;
                            l(a.savedChoiceKey, { data: { coverMask: u, coverBackground: d, text: m, uri: null != (n = _.uri) ? n : void 0 }, index: c, isSaved: !0 });
                        }),
                        L = (0, S.c)((e, t) => {
                            u(e), f(t);
                        }),
                        P = (0, S.c)((e) => b({ ...g, bgImageUrl: e }));
                    return (0, m.jsx)('div', {
                        className: (0, _.$)(tz().root, { [tz().wideContent]: (null == (t = a.content) ? void 0 : t.type) === F.x.COLLAGE }),
                        ref: d,
                        children: (0, m.jsxs)(Q, {
                            isActive: r,
                            isContentVisible: y,
                            setContentVisible: T,
                            setContentInvisible: j,
                            background: g,
                            className: tz().background,
                            children: [
                                (a.logo || a.promoLogo) &&
                                    (0, m.jsxs)('div', {
                                        className: tz().logoContainer,
                                        children: [a.logo && (0, m.jsx)(tV, { src: a.logo, className: tz().logo }), a.promoLogo && (0, m.jsx)(tV, { src: a.promoLogo })],
                                    }),
                                a.content &&
                                    y &&
                                    (0, m.jsx)('div', {
                                        className: (0, _.$)(tz().content, tz()['content_align_'.concat(N)], { [tz().playAnimation]: y }),
                                        children: (0, m.jsx)(tO, {
                                            carouselIndex: c,
                                            content: a.content,
                                            withPersonalColor: a.background.withPersonalColor,
                                            onCarouselReady: A,
                                            onSlideChange: L,
                                            onBackgroundChange: P,
                                        }),
                                    }),
                                (0, m.jsx)('div', {
                                    'data-screenshot-hidden': !0,
                                    className: tz().buttonsContainer,
                                    children: (0, m.jsx)(ej, {
                                        cardRef: d,
                                        className: tz().button,
                                        slide: a,
                                        onEditChoice: w,
                                        onSaveChoice: R,
                                        onSlidePrev: k,
                                        onSlideNext: I,
                                        hasLeft: c > 0,
                                        hasRight: c < x - 1,
                                    }),
                                }),
                            ],
                        }),
                    });
                });
            var tH = a(37862),
                tU = a(48922),
                tG = a(2969),
                t$ = a(23352),
                tK = a(72396),
                tX = a(34566),
                tY = a.n(tX);
            let tZ = (e) => {
                var t;
                let { slide: a, isVisible: i } = e,
                    { ref: r, intersectionPropertyId: n } = (0, t$.n)(),
                    l = (0, X.e)(),
                    { from: s } = (0, tK.f)({ pageId: tU._Q.TRAILER_OF_THE_YEAR, blockId: tH.U.DEFAULT }),
                    o = (0, tG.b)(),
                    { isActive: c } = (0, I.JO)(),
                    u = null == l ? void 0 : l.getState(K.V.TRAILER).queueState.entityList.value,
                    d = (0, h.useMemo)(
                        () =>
                            a.entitiesData &&
                            u &&
                            a.entitiesData.every((e, t) => {
                                var a;
                                return e.meta.id === (null == (a = u[t]) ? void 0 : a.entity.data.meta.id);
                            }),
                        [a.entitiesData, u],
                    ),
                    p = i && a.hasTrailer && (!d || (null == l ? void 0 : l.getState(K.V.TRAILER).playerState.status.value) !== A.MT.PLAYING),
                    v = p && (null == l || null == (t = l.getState(K.V.TRAILER).currentContext.value) ? void 0 : t.data.meta.id) === a.id;
                return (
                    (0, h.useEffect)(() => {
                        if (v)
                            return void l.restartContext({ playAfterRestart: !0, queueParams: { index: 0 }, entitiesData: a.entitiesData }, K.V.TRAILER).then(() => {
                                o(!0);
                            });
                        p &&
                            (null == l ||
                                l
                                    .playContext(
                                        {
                                            contextData: { type: M.K.Various, overrideContextType: z.b.Other, trailer: !0, meta: { id: a.id }, from: s },
                                            queueParams: { index: 0 },
                                            entitiesData: a.entitiesData,
                                            loadContextMeta: !1,
                                        },
                                        K.V.TRAILER,
                                    )
                                    .then(() => {
                                        o(!0);
                                    }));
                    }, [s, o, p, v, a.entitiesData, a.id, l]),
                    (0, m.jsx)(D.t, {
                        className: (0, _.$)(tY().root, { [tY().root_isActive]: c }),
                        radius: 'l',
                        tabIndex: 0,
                        'data-intersection-property-id': n,
                        ref: r,
                        children: (0, m.jsx)(tF, { slide: a, isActive: c }),
                    })
                );
            };
            var tq = a(31886),
                tQ = a.n(tq);
            let tJ = (0, p.PA)((e) => {
                let { items: t } = e,
                    {
                        settings: { isMobile: a },
                        slides: i,
                    } = (0, O.g)(),
                    { formatMessage: r } = (0, x.A)(),
                    { state: n, toggleTrue: l } = (0, E.e)(!1),
                    s = (0, I.Mn)(),
                    o = (0, w.f)(),
                    c = (0, h.useRef)(!1),
                    [u, d] = (0, h.useState)(!0),
                    [p, v] = (0, h.useState)(!1);
                (0, h.useEffect)(
                    () => (
                        l(),
                        () => {
                            null == s || s.slideTo(0), i.setActiveSlide(0);
                        }
                    ),
                    [l, s, i],
                ),
                    (0, h.useEffect)(() => {
                        i.isLoaded && !c.current && (o(), (c.current = !0));
                    }, [i.isLoaded, o]);
                let f = (0, h.useCallback)(
                    (e) => {
                        d(e.isBeginning), v(e.isEnd), i.setActiveSlide(e.activeIndex);
                    },
                    [i],
                );
                return (0, m.jsx)('div', {
                    className: (0, _.$)(tQ().root, { [tQ().root_visible]: n }),
                    children: (0, m.jsxs)(I.RC, {
                        direction: 'vertical',
                        centeredSlides: !a,
                        slidesPerView: 'auto',
                        spaceBetween: 16,
                        className: tQ().container,
                        keyboard: { enabled: !0 },
                        modules: [k.s3, k.Jq, k.FJ],
                        onActiveIndexChange: f,
                        a11y: { enabled: !0, containerMessage: r({ id: 'page.results-of-the-year' }) },
                        mousewheel: { thresholdDelta: 30, thresholdTime: 500 },
                        children: [
                            t.map((e, a) => {
                                var r, n;
                                return (0, m.jsx)(
                                    I.qr,
                                    {
                                        children: (0, m.jsx)(R.F, {
                                            blockPosX: 1,
                                            blockPosY: a + 1,
                                            blockType: null == (r = e.content) ? void 0 : r.type,
                                            blockId: e.id,
                                            mainObjectId: i.mainObjectId,
                                            mainObjectType: C.ky.Slide,
                                            children: (0, m.jsx)(L.B, {
                                                objectType: C.ky.SlideContent,
                                                objectId: '',
                                                objectPosX: (null != (n = e.carouselIndex) ? n : 0) + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, m.jsx)(tZ, { isVisible: i.activeSlide === a, slide: e }),
                                            }),
                                        }),
                                    },
                                    e.id,
                                );
                            }),
                            (0, m.jsx)(V, { isFirstSlide: u, isLastSlide: p }),
                        ],
                    }),
                });
            });
            var tW = a(9105),
                t0 = a(52068),
                t1 = a(62376),
                t2 = a(71610),
                t5 = a(22714),
                t7 = a(21935),
                t6 = a(20472),
                t8 = a(27120),
                t3 = a(79406),
                t9 = a(49399),
                t4 = a(54662),
                ae = a.n(t4);
            function at(e, t) {
                return (e === t9.G.RESOLVE || e === t9.G.REJECT) && 0 === t.length;
            }
            let aa = (0, p.PA)((e) => {
                var t;
                let { slidesConsumer: a, artistId: i, podcastId: r, campaignId: n } = e,
                    { formatMessage: l } = (0, x.A)(),
                    { slides: s, experiments: o, sonataState: c, settings: u } = (0, O.g)(),
                    d = (0, X.e)(),
                    p = o.checkExperiment(t3.z.WebNextSlidesPage, 'on'),
                    k = !(null == (t = u.browserInfo) ? void 0 : t.isMobile) || !u.browserInfo.isTouch,
                    I = null == d ? void 0 : d.getState(K.V.TRAILER),
                    E = (0, S.c)((e) => {
                        null == d || d.setExponentVolume(e, K.V.TRAILER);
                    });
                (0, h.useEffect)(() => {
                    E(1), s.setIsMuted(!1);
                }, [E, s, d]);
                let { canBack: w, moveBack: L } = (0, t7.J)(t6.Z.main.href),
                    P = (0, eC.Z)(t6.Z.main.href);
                (0, h.useEffect)(
                    () => () => {
                        s.resetUser(), s.resetArtist(), s.resetPodcast(), s.resetSpecial(), s.resetKids(), null == d || d.pause(K.V.TRAILER);
                    },
                    [s, d],
                ),
                    p || (0, v.notFound)();
                let B = ((e) => {
                    let t = (0, t0.st)(),
                        a = (0, t1.U)(),
                        { hash: i } = (0, t0.gf)();
                    return (0, S.c)((r) => {
                        if (!t) return;
                        let n = { hash: i, pageId: C.QT.SlidesScreen, mainObjectType: C.ky.Slide, mainObjectId: e },
                            l = (0, C.Fx)({ params: n, logger: a, context: 'useSendEventOnSlidesOpenedOrClosed' });
                        l && (r ? (0, C.w5)(t.evgenInstance, l) : (0, C.XB)(t.evgenInstance, l));
                    });
                })(s.mainObjectId);
                (0, h.useEffect)(
                    () => (
                        B(!0),
                        () => {
                            B(!1);
                        }
                    ),
                    [B],
                );
                let V = (0, h.useMemo)(() => {
                        switch (a) {
                            case tW.z.USER:
                                return s.userItems;
                            case tW.z.ARTIST:
                                return s.artistItems;
                            case tW.z.PODCAST:
                                return s.podcastItems;
                            case tW.z.SPECIAL:
                                return s.specialItems;
                            case tW.z.KIDS:
                                return s.kidsItems;
                        }
                    }, [s.artistItems, s.kidsItems, s.podcastItems, s.specialItems, s.userItems, a]),
                    M = V.some((e) => e.background.withSound || e.hasTrailer);
                (0, h.useEffect)(() => {
                    M && c.status === A.MT.PLAYING && (null == d || d.togglePause());
                }, [M, d, c.status]),
                    (0, h.useEffect)(() => {
                        if (p)
                            switch (a) {
                                case tW.z.USER:
                                    at(s.userSlidesLoadingState, V) && (0, v.notFound)();
                                    break;
                                case tW.z.ARTIST:
                                    at(s.artistSlidesLoadingState, V) && (0, v.notFound)();
                                    break;
                                case tW.z.PODCAST:
                                    at(s.podcastSlidesLoadingState, V) && (0, v.notFound)();
                                    break;
                                case tW.z.SPECIAL:
                                    at(s.specialSlidesLoadingState, V) && (0, v.notFound)();
                                    break;
                                case tW.z.KIDS:
                                    at(s.kidsSlidesLoadingState, V) && (0, v.notFound)();
                            }
                        else (0, v.notFound)();
                    }, [
                        o,
                        p,
                        V,
                        V.length,
                        s.artistSlidesLoadingState,
                        s.podcastSlidesLoadingState,
                        s.userSlidesLoadingState,
                        s.specialSlidesLoadingState,
                        a,
                        s.kidsSlidesLoadingState,
                    ]),
                    (0, t8.N)(!0);
                let z = (0, h.useMemo)(() => {
                        var e;
                        let t,
                            a = null == (e = V[s.activeSlide]) ? void 0 : e.slideColor;
                        if (a) {
                            let { r: e, g: i, b: r } = (0, g.hexToRgb)(a);
                            t = 'rgba('.concat(e, ', ').concat(i, ', ').concat(r, ', 0.5)');
                        }
                        return { '--card-color-enabled_variant': a, '--card-color-enabled': t, '--logo-color': a };
                    }, [V, V.length, s.activeSlide]),
                    D = (0, h.useCallback)(() => {
                        s.toggleMute(), (null == I ? void 0 : I.playerState.exponentVolume.value) !== 0 ? E(0) : E(1);
                    }, [E, s, null == I ? void 0 : I.playerState.exponentVolume.value]),
                    F = (0, S.c)(() => {
                        w ? L() : P();
                    }),
                    H = s.isMuted ? 'volumeOff' : 'volume',
                    U = l(s.isMuted ? { id: 'player-actions.volume-off' } : { id: 'player-actions.volume-on' });
                switch (a) {
                    case tW.z.USER:
                        s.userSlidesLoadingState === t9.G.IDLE && (0, h.use)(s.getUserSlides());
                        break;
                    case tW.z.ARTIST:
                        i && s.artistSlidesLoadingState === t9.G.IDLE && (0, h.use)(s.getArtistSlides({ artistId: i }));
                        break;
                    case tW.z.PODCAST:
                        r && s.podcastSlidesLoadingState === t9.G.IDLE && (0, h.use)(s.getPodcastSlides({ podcastId: Number(r) }));
                        break;
                    case tW.z.SPECIAL:
                        n && s.specialSlidesLoadingState === t9.G.IDLE && (0, h.use)(s.getSpecialSlides({ campaignId: n }));
                        break;
                    case tW.z.KIDS:
                        s.kidsSlidesLoadingState === t9.G.IDLE && (0, h.use)(s.getKidsSlides());
                }
                return (0, m.jsx)(t2.j, {
                    children: (0, m.jsx)(t5.n, {
                        pageId: tU._Q.SLIDES_SCREEN,
                        children: (0, m.jsxs)('div', {
                            className: ae().root,
                            style: z,
                            'data-test-id': b.Xk.slides.SLIDES_PAGE,
                            children: [
                                (0, m.jsx)(j.q, { children: (0, m.jsx)(N.DZ, { variant: 'h1', children: (0, m.jsx)(f.A, { id: 'page.results-of-the-year' }) }) }),
                                (0, m.jsxs)('header', {
                                    className: ae().header,
                                    children: [
                                        (null == V ? void 0 : V.length) > 0 &&
                                            (0, m.jsxs)('div', {
                                                className: ae().slidesResult,
                                                children: [
                                                    (0, m.jsx)(N.HL, {
                                                        variant: 'span',
                                                        className: ae().counterActiveItem,
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        children: Number(s.activeSlide) + 1,
                                                    }),
                                                    (0, m.jsx)(N.HL, {
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        className: ae().counterItem,
                                                        children: '/',
                                                    }),
                                                    (0, m.jsx)(N.HL, {
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        className: ae().counterItem,
                                                        children: null == V ? void 0 : V.length,
                                                    }),
                                                ],
                                            }),
                                        k &&
                                            M &&
                                            (0, m.jsx)(y.$, {
                                                'aria-label': U,
                                                variant: 'text',
                                                radius: 'round',
                                                size: 'xxxs',
                                                icon: (0, m.jsx)(T.I, { size: 'xs', className: ae().icon, variant: H }),
                                                onClick: D,
                                                className: (0, _.$)(ae().button, ae().volumeButton),
                                                withRipple: !1,
                                            }),
                                        (0, m.jsx)(y.$, {
                                            'aria-label': l({ id: 'navigation.go-back' }),
                                            radius: 'round',
                                            size: 'xs',
                                            icon: (0, m.jsx)(T.I, { size: 'xs', variant: 'close' }, 'handleBackIcon'),
                                            onClick: F,
                                            className: (0, _.$)(ae().button, ae().desktopBackButton),
                                            role: 'link',
                                        }),
                                        (0, m.jsx)(y.$, {
                                            variant: 'text',
                                            'aria-label': l({ id: 'navigation.go-back' }),
                                            radius: 'round',
                                            size: 'xs',
                                            icon: (0, m.jsx)(T.I, { size: 'xs', variant: 'arrowLeft' }, 'handleBackIcon'),
                                            onClick: F,
                                            className: (0, _.$)(ae().button, ae().mobileBackButton),
                                            role: 'link',
                                        }),
                                    ],
                                }),
                                (0, m.jsx)(R.F, {
                                    mainObjectType: C.ky.Slide,
                                    mainObjectId: s.mainObjectId,
                                    blockType: C.ky.Slide,
                                    blockId: s.mainObjectId,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    objectsCount: V.length,
                                    children: (0, m.jsx)(tJ, { items: V }),
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        56755: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => i });
            var i = (function (e) {
                return (e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e;
            })({});
        },
        57594: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => n, g: () => l });
            var i = a(29222),
                r = a(55178);
            let n = (0, r.createContext)(null);
            function l() {
                let e = (0, r.useContext)(n);
                if (null === e) throw new i.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        57605: (e) => {
            e.exports = { root: 'SlideLogo_root__7H7nw' };
        },
        57868: (e) => {
            e.exports = {
                root: 'TextContent_root__A4Qmc',
                subtitle: 'TextContent_subtitle__Xe_FH',
                text: 'TextContent_text__xsfVD',
                disclaimer: 'TextContent_disclaimer__LIrZ_',
            };
        },
        58660: (e) => {
            e.exports = { root: 'MaskedImage_root__Dquqg' };
        },
        63380: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { f: () => i }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(i || (i = {}));
        },
        63397: (e, t, a) => {
            'use strict';
            function i(e) {
                let { reason: t, children: a } = e;
                return a;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }),
                a(82105);
        },
        64910: (e, t, a) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                });
            let i = a(32290),
                r = a(55178),
                n = a(63397);
            function l(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            a(46456);
            let s = { loader: () => Promise.resolve(l(() => null)), loading: null, ssr: !0 },
                o = function (e) {
                    let t = { ...s, ...e },
                        a = (0, r.lazy)(() => t.loader().then(l)),
                        o = t.loading;
                    function c(e) {
                        let l = o ? (0, i.jsx)(o, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            s = !t.ssr || !!t.loading,
                            c = s ? r.Suspense : r.Fragment,
                            u = t.ssr
                                ? (0, i.jsxs)(i.Fragment, { children: [null, (0, i.jsx)(a, { ...e })] })
                                : (0, i.jsx)(n.BailoutToCSR, { reason: 'next/dynamic', children: (0, i.jsx)(a, { ...e }) });
                        return (0, i.jsx)(c, { ...(s ? { fallback: l } : {}), children: u });
                    }
                    return (c.displayName = 'LoadableComponent'), c;
                };
        },
        65493: (e, t, a) => {
            'use strict';
            a.d(t, { default: () => r.a });
            var i = a(95574),
                r = a.n(i);
        },
        66650: (e) => {
            e.exports = {
                root: 'Carousel_root__2FSoC',
                'swiper-pagination-disabled': 'Carousel_swiper-pagination-disabled__vC0R2',
                'swiper-pagination-clickable': 'Carousel_swiper-pagination-clickable__M6UTw',
                'swiper-rtl': 'Carousel_swiper-rtl__3mF21',
                'swiper-horizontal': 'Carousel_swiper-horizontal__zEpGi',
                'swiper-vertical': 'Carousel_swiper-vertical__1ADsJ',
                swiper: 'Carousel_swiper__ivHi0',
                slide: 'Carousel_slide__wgnHc',
                wrapper: 'Carousel_wrapper__ruBr5',
            };
        },
        71610: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => o });
            var i = a(32290),
                r = a(55178),
                n = a(27576),
                l = a(42406),
                s = a(80536);
            let o = (e) => {
                let { children: t } = e,
                    a = (0, r.useRef)({}),
                    o = (0, r.useRef)(
                        (0, l.Gv)(
                            (e) => {
                                let t = (0, l.L5)(e.target),
                                    i = a.current[t];
                                if (i) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, n.A)());
                                            i.callback(!0, e), (i.showed = !0), (i.viewUuid = e);
                                        }, 1e3);
                                        i.timerId = e;
                                    }
                                    !e.isIntersecting && i.showed && (i.callback(!1, i.viewUuid), (i.showed = !1), (i.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(i.timerId);
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    c = (0, r.useCallback)((e) => {
                        var t;
                        !a.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = o.current) || t.observe(e.elementRef.current), (a.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    u = (0, r.useCallback)((e) => {
                        let t = a.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete a.current[e]);
                    }, []);
                (0, r.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = o.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let d = (0, r.useMemo)(() => ({ observeElement: c, unobserveElement: u }), [c, u]);
                return (0, i.jsx)(s.B.Provider, { value: d, children: t });
            };
        },
        74196: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => c });
            var i,
                r = a(55178),
                n = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length; )
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
                        a.r(t), a.d(t, { clsx: () => i, default: () => r });
                        let r = i;
                    },
                    4517: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
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
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i);
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    2865: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0);
                        let r = a(4377),
                            n = a(5881),
                            l = a(810),
                            s = i(a(4517));
                        t.SROnly = (e) => {
                            let { className: t, focusable: a, children: i, ...o } = e,
                                c = (0, n.clsx)(s.default.root, { [s.default.focusable]: a }, t);
                            return (0, l.isValidElement)(i)
                                ? (0, l.cloneElement)(i, { ...o, className: (0, n.clsx)(c, i.props.className) })
                                : (0, r.jsx)('span', { className: c, ...o, children: i });
                        };
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(r, 2));
                    },
                },
                l = {};
            function s(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var a = (l[e] = { exports: {} });
                return n[e].call(a.exports, a, a.exports, s), a.exports;
            }
            (s.d = (e, t) => {
                for (var a in t) s.o(t, a) && !s.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var o = {};
            (() => {
                Object.defineProperty(o, '__esModule', { value: !0 }), (o.SROnly = void 0);
                var e = s(2865);
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
        75212: (e) => {
            e.exports = {
                root: 'ArtistsContent_root__Jpd8M',
                covers: 'ArtistsContent_covers__OeO2T',
                cover: 'ArtistsContent_cover__rzlO2',
                image: 'ArtistsContent_image__okuHk',
            };
        },
        77368: (e) => {
            e.exports = { root: 'ChartFavoriteContent_root__ksE_w', description: 'ChartFavoriteContent_description__CCBKM' };
        },
        77451: (e) => {
            e.exports = {
                root: 'Background_root__s7ccu',
                media_withPersonalColor: 'Background_media_withPersonalColor__KuaB0',
                firstFrame: 'Background_firstFrame__c5Gw0',
                lastFrame: 'Background_lastFrame__sfpL7',
                media: 'Background_media__8DaeZ',
                hidden: 'Background_hidden__7fdP5',
            };
        },
        80536: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => i });
            let i = (0, a(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        82707: (e) => {
            e.exports = { root: 'SliderControls_root__v_ofj', control: 'SliderControls_control__E3joM', top: 'SliderControls_top__HN5gZ' };
        },
        85298: (e) => {
            e.exports = { root: 'SlideHeading_root__naZ6V' };
        },
        87523: (e) => {
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
        89753: (e) => {
            e.exports = {
                root: 'ActionButton_root__YMLj2',
                cover: 'ActionButton_cover__04uzU',
                image: 'ActionButton_image__Lrf7N',
                text: 'ActionButton_text__wPgyi',
                icon: 'ActionButton_icon__fKoaq',
            };
        },
        89957: (e, t, a) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                });
            let i = (0, a(1987).createAsyncLocalStorage)();
        },
        90357: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => u });
            var i = a(32290),
                r = a(63618),
                n = a(74196),
                l = a(71926),
                s = a(58534),
                o = a(17679),
                c = a.n(o);
            let u = (e) => {
                let { error: t, closeToast: a, className: o } = e;
                return (0, i.jsx)(s.$, {
                    className: (0, r.$)(c().root, o),
                    message: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(n.q, { children: (0, i.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, i.jsx)(l.HL, { className: c().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: a,
                });
            };
        },
        94218: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => m });
            var i = a(32290),
                r = a(21916),
                n = a(39407),
                l = a(21732),
                s = a(91027),
                o = a(63423),
                c = a(71926),
                u = a(70204),
                d = a(34186);
            let m = (e) => {
                let { size: t = 'm', variant: a = 'default', withRipple: m = !0, buttonText: _, isBlock: p, key: v, className: h } = e,
                    x = (0, r.useRouter)(),
                    f = (0, d.N)().get(u.QG),
                    C = (0, s.c)(() => {
                        f.authorizationUrl && x.push(f.authorizationUrl);
                    });
                return (0, i.jsx)(
                    o.$,
                    {
                        onClick: C,
                        className: h,
                        isBlock: p,
                        color: 'primary',
                        variant: a,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': l.S7.UNAUTHORIZED_BUTTON,
                        children: _ || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(n.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
            };
        },
        94257: (e) => {
            e.exports = {
                root: 'ChartBlock_root__GQF6w',
                root_spacer_m: 'ChartBlock_root_spacer_m__yVzU8',
                root_spacer_l: 'ChartBlock_root_spacer_l__wBImk',
                root_spacer_xxl: 'ChartBlock_root_spacer_xxl__cSNqe',
            };
        },
        94964: (e) => {
            e.exports = { root: 'MaskedImageWithBackground_root__jLo5w', background: 'MaskedImageWithBackground_background__9PdlN' };
        },
        95226: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => l });
            var i = a(32290),
                r = a(55178),
                n = a(73818);
            let l = (e) => {
                let {
                        blockId: t,
                        blockType: a,
                        blockIdForFrom: l,
                        blockPosX: s,
                        blockPosY: o,
                        objectsCount: c,
                        mainObjectType: u,
                        mainObjectId: d,
                        children: m,
                        displayReasonId: _,
                    } = e,
                    p = (0, r.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: a,
                            blockIdForFrom: l,
                            blockPosX: s,
                            blockPosY: o,
                            objectsCount: c,
                            mainObjectType: u,
                            mainObjectId: d,
                            displayReasonId: _,
                        }),
                        [t, a, l, s, o, c, u, d, _],
                    );
                return (0, i.jsx)(n.p.Provider, { value: p, children: m });
            };
        },
        95481: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => x });
            var i = a(55178),
                r = a(16172),
                n = a(52068),
                l = a(6752),
                s = a(62376),
                o = a(1677),
                c = a(48922),
                u = a(84782),
                d = a(30915),
                m = a(18746),
                _ = a(37240),
                p = a(51012),
                v = a(47498);
            let h = [
                    c._Q.HOME,
                    c._Q.LANDING,
                    c._Q.NON_MUSIC,
                    c._Q.OWN_COLLECTION,
                    c._Q.SEARCH,
                    c._Q.ARTIST,
                    c._Q.CONCERTS,
                    c._Q.CONCERT,
                    c._Q.ALBUM,
                    c._Q.PLAYLIST,
                    c._Q.SLIDES_SCREEN,
                    c._Q.PROMOLANDING_ALBUM,
                    c._Q.WAVE_LANDING_SCREEN,
                ],
                x = () => {
                    let e = (0, i.useRef)(!1),
                        t = (0, n.st)(),
                        a = (0, s.U)(),
                        { hash: x } = (0, n.gf)(),
                        { pageId: f } = (0, _.$)(),
                        { tabId: C, tabPos: g, isTabSelectedByDefault: b } = (0, v.R)(),
                        { offsetBlockPosY: S } = (0, d.u)(),
                        { blockId: y, blockType: T, blockPosX: j, blockPosY: N, mainObjectType: A, mainObjectId: k, objectsCount: I } = (0, u.N)(),
                        { filterKey: E, filterValue: w, filterPos: R } = (0, m.G)(),
                        { skeleton: L } = (0, p.b)(),
                        O = (0, l.L)(() => (void 0 !== S && void 0 !== N ? S + N : N));
                    return (0, i.useCallback)(() => {
                        if (!t || !f || !c.xK.includes(f) || !h.includes(f) || e.current) return;
                        let i = { hash: x, pageId: o.F[f], entityType: T, entityId: y, entityPosX: j, entityPosY: O, objectsCount: I };
                        void 0 !== E && ((i.filterKey = E), (i.filterValue = w), (i.filterPos = R)),
                            c.qG.includes(f) && ((i.tabId = C), (i.tabPos = g), (i.isTabSelectedByDefault = b)),
                            L && (i.skeletonId = L),
                            k && A && ((i.mainObjectType = A), (i.mainObjectId = k));
                        let n = (0, r.Fx)({ params: i, logger: a, context: 'useSendEventOnBlockLoaded' });
                        n && ((0, r.uY)(t.evgenInstance, n), (e.current = !0));
                    }, [t, f, x, T, y, j, O, E, w, R, I, L, k, A, a, C, g, b]);
                };
        },
        95574: (e, t, a) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                });
            let i = a(33399)._(a(64910));
            function r(e, t) {
                var a;
                let r = {};
                'function' == typeof e && (r.loader = e);
                let n = { ...r, ...t };
                return (0, i.default)({ ...n, modules: null == (a = n.loadableGenerated) ? void 0 : a.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        98772: (e) => {
            e.exports = {
                root: 'PayCard_root__wjBVD',
                title: 'PayCard_title__t7qpS',
                description: 'PayCard_description__hh2_O',
                text: 'PayCard_text__w251H',
                artwork: 'PayCard_artwork__9oAUA',
            };
        },
        99226: (e) => {
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
    },
]);
