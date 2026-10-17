(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5160],
    {
        1797: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var r = i(40207);
            let a = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        2096: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => R });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(74631),
                o = i(39004),
                l = i(44031),
                d = i(61493),
                c = i(71035),
                u = i(66738),
                m = i(3392),
                _ = i(4254),
                p = i(17545),
                h = i(4071);
            let v = (e) => {
                let { className: t, variant: i = 'text', onClick: a, iconClassName: s, iconSize: l, size: c = 's', ariaLabel: m } = e,
                    { formatMessage: _ } = (0, o.A)(),
                    p = null != m ? m : _({ id: 'play-queue.delete-from-queue' }),
                    v = (0, n.useCallback)(
                        (e) => {
                            (null == a || a(), e.stopPropagation());
                        },
                        [a],
                    );
                return (0, r.jsx)(h.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: c,
                    radius: 'round',
                    'aria-label': p,
                    onClick: v,
                    icon: (0, r.jsx)(u.I, { size: l, className: s, variant: 'bucket' }),
                    'data-test-id': d.OA.track.REMOVE_BUTTON,
                });
            };
            var f = i(79367),
                b = i(34159),
                x = i(85743),
                y = i(27954),
                g = i(64720),
                T = i(71996),
                C = i(6304),
                A = i(65165),
                S = i(38097),
                j = i(91907),
                k = i(3407),
                E = i(34826),
                I = i.n(E),
                P = i(82684),
                N = i(85957),
                O = i.n(N);
            let L = (0, s.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, o.A)();
                    return t.isDownloaded
                        ? (0, r.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': d.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, r.jsx)(P.A, { value: t.downloadingProgress, size: 16, className: O().downloadingProgress, progressBarClassName: O().progress })
                          : null;
                }),
                R = (0, s.PA)((e) => {
                    var t;
                    let {
                            className: i,
                            track: s,
                            withLightning: h,
                            ignoreDislikedStyles: E,
                            onLikeClick: P,
                            utmLink: N,
                            withSecondaryColor: O,
                            handleRemove: R,
                            withTrailer: M = !0,
                            likeIconSize: w = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: B,
                        } = e,
                        { user: z, trailer: H } = (0, y.g)(),
                        { formatMessage: Y } = (0, o.A)(),
                        { sendLikeSearchFeedback: V } = (0, x.z)(),
                        [U, F] = (0, n.useState)(!1),
                        [K, W] = (0, n.useState)(!1),
                        $ = (0, f.P)(),
                        G = (0, p.K)(s),
                        {
                            duration: q,
                            lightning: X,
                            ugc: Z,
                        } = ((e, t, i) => {
                            var r;
                            let { withLightning: a, isUGC: s } = t,
                                n = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / S.k7);
                                              return (0, j.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== n ? { text: n, ariaLabel: (0, A.j)(Math.round((null != (r = e.durationMs) ? r : 0) / 1e3), i) } : null,
                                lightning: a ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: s ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(s, { withLightning: h, isUGC: s.isUGC }, Y),
                        J = (0, b.F)(),
                        Q = z.hasPlus,
                        ee = !s.isRemoved && s.isAvailable && !B,
                        et = (0, c.c)(async () => {
                            (U || s.isLiked || (F(!0), null == V || V()), await G(), null == P || P(s.isLiked));
                        }),
                        ei = (0, c.c)((e) => {
                            e.stopPropagation();
                        }),
                        er = (0, c.c)((e) => {
                            if ((e.stopPropagation(), $())) return void e.preventDefault();
                            (H.openTrackTrailer(s.id), J(l.DomainObjectType.Track, s.id));
                        }),
                        ea = (0, n.useMemo)(() => {
                            if (ee)
                                return (0, r.jsx)('div', {
                                    onClick: ei,
                                    children: (0, r.jsx)(k._, {
                                        track: s,
                                        open: K,
                                        onOpenChange: W,
                                        placement: 'bottom',
                                        icon: (0, r.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: N,
                                        className: (0, a.$)(I().contextMenu, { [I().contextMenu_visible]: K }),
                                        handleRemove: R,
                                        withTrailer: M,
                                        'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, R, K, ee, M, s, N]);
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(I().root, I().controls, i, {
                            [I().controls_dislikedControls]: s.isDisliked,
                            [I().controls_dislikedColors]: s.isDisliked && !E,
                            [I().controls_disabled]: !s.isAvailable,
                            [I().root_withSecondaryColor]: O,
                        }),
                        children: [
                            X && (0, r.jsx)(u.I, { 'aria-label': X.label, size: 'xxs', className: I().lightning, variant: 'lightning' }),
                            Z &&
                                (0, r.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, r.jsx)(u.I, {
                                            'aria-label': Z.label,
                                            size: 'xxs',
                                            className: I().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': d.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, r.jsx)(m.ZI, { children: Z.label }),
                                    ],
                                }),
                            Q && (0, r.jsx)('div', { className: (0, a.$)(I().item, I().downloadIcon), children: (0, r.jsx)(L, { track: s }) }),
                            R && !B && (0, r.jsx)(v, { size: 'xs', iconSize: 'xxs', className: (0, a.$)(I().item, I().removeButton), onClick: R, ariaLabel: D }),
                            ee &&
                                (0, r.jsx)(C.WithOffline, {
                                    fallback: (0, r.jsx)(g.c, {
                                        size: 'xs',
                                        iconSize: w,
                                        className: (0, a.$)(I().item, I().likeIcon),
                                        isLiked: s.isLiked,
                                        onClick: et,
                                        disabled: !z.isAuthorized,
                                    }),
                                }),
                            (null == (t = s.trailer) ? void 0 : t.isAvailable) &&
                                s.isAvailable &&
                                (0, r.jsx)(C.WithOffline, {
                                    fallback: (0, r.jsx)(T.k, {
                                        className: (0, a.$)(I().item, I().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: er,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(I().item, I().contextMenuWrapper),
                                children: [
                                    null !== q &&
                                        (0, r.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, a.$)(I().duration, { [I().duration_hidden]: K && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': q.ariaLabel,
                                            role: 'text',
                                            'data-test-id': d.Kq.track.TRACK_DURATION,
                                            children: (0, r.jsx)('span', { 'aria-hidden': 'true', children: q.text }),
                                        }),
                                    ea,
                                ],
                            }),
                        ],
                    });
                });
        },
        2493: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            var r = i(39004),
                a = i(38977);
            let s = (e, t) => {
                let { formatMessage: i } = (0, r.A)(),
                    { hours: s, minutes: n, seconds: o } = (0, a.e)(e),
                    { hours: l, minutes: d, seconds: c } = (0, a.e)(t);
                return i(
                    { id: 'non-music.non-music-progress' },
                    { progress: Math.round((e / t) * 100), beginHours: s, beginMinutes: n, beginSeconds: o, endHours: l, endMinutes: d, endSeconds: c },
                );
            };
        },
        3669: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => b });
            var r = i(74631),
                a = i(67379),
                s = i(20934),
                n = i(59450),
                o = i(49656),
                l = i(84e3),
                d = i(58069),
                c = i(20258),
                u = i(26742),
                m = i(25195),
                _ = i(37314),
                p = i(25488),
                h = i(97952),
                v = i(10764),
                f = i(72594);
            let b = () => {
                let e = (0, l.U)(),
                    t = (0, n.st)(),
                    { hash: i } = (0, n.gf)(),
                    { pageId: b, displayReasonId: x } = (0, h.$)(),
                    { tabId: y, tabPos: g, isTabSelectedByDefault: T } = (0, f.R)(),
                    { offsetBlockPosY: C } = (0, m.u)(),
                    { blockType: A, blockId: S, blockPosX: j, blockPosY: k, mainObjectId: E, mainObjectType: I, displayReasonId: P } = (0, u.N)(),
                    { filterKey: N, filterValue: O, filterPos: L } = (0, _.G)(),
                    { objectType: R, objectsCount: M, objectId: w, objectPosX: D, objectPosY: B } = (0, p.J)(),
                    { skeleton: z } = (0, v.b)(),
                    H = null != P ? P : x,
                    Y = (0, o.L)(() => (void 0 !== C && void 0 !== k ? C + k : k));
                return (0, r.useCallback)(
                    (r, n) => {
                        if (!t || !b || !c.xK.includes(b) || !c.fD.includes(b)) return;
                        let o = d.F[b];
                        if (!o) return;
                        let l = {
                            hash: i,
                            pageId: o,
                            entityType: A,
                            entityId: S,
                            entityPosX: j,
                            entityPosY: Y,
                            objectsCount: M,
                            viewUuid: n,
                            objectType: R,
                            objectId: w,
                            objectPosX: D,
                            objectPosY: B,
                        };
                        (void 0 !== N && ((l.filterKey = N), (l.filterValue = O), (l.filterPos = L)),
                            c.qG.includes(b) && ((l.tabId = y), (l.tabPos = g), (l.isTabSelectedByDefault = T)),
                            z && (l.skeletonId = z),
                            'string' == typeof E && 'string' == typeof I && ((l.mainObjectType = I), (l.mainObjectId = E)),
                            H && (l.displayReasonId = H));
                        let u = (0, a.F)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (r ? (0, s.Pf)(t.evgenInstance, u) : (0, s.nv)(t.evgenInstance, u));
                    },
                    [t, H, S, j, Y, A, N, L, O, i, T, e, E, I, w, D, B, R, M, b, z, y, g],
                );
            };
        },
        4111: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        7361: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var r = i(25839),
                a = i(33660),
                s = i(74631),
                n = i(39004),
                o = i(31860),
                l = i(91149),
                d = i(92942),
                c = i(27954),
                u = i(57549),
                m = i(63149);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, d.l)(),
                    [_, p] = (0, s.useState)(!1),
                    { formatMessage: h } = (0, n.A)();
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let s = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    p(!0);
                    let n = await e.toggleLike();
                    (p(!1),
                        n === o.f.OK
                            ? i((0, r.jsx)(m.T, { artist: s }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, _, h, i]);
            };
        },
        9684: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 85680));
        },
        10557: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => j });
            var r = i(25839),
                a = i(10648),
                s = i(57249),
                n = i(82298),
                o = i(88204),
                l = i(13624),
                d = i(74631),
                c = i(61493),
                u = i(50314),
                m = i(71035),
                _ = i(49656),
                p = i(14693),
                h = i(23818),
                v = i(23976),
                f = i(96618),
                b = i(89288);
            let x = (e, t, i) => {
                let r = (r) => {
                    let a = (r + e / 30) % 12,
                        s = t * Math.min(i, 1 - i);
                    return i - s * Math.max(-1, Math.min(a - 3, 9 - a, 1));
                };
                return [r(0), r(8), r(4)];
            };
            var y = i(49337);
            let g = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                return Math.min(i, Math.max(t, e)) / 100;
            };
            var T = i(15283),
                C = i.n(T),
                A = i(49124);
            let S = l.default.default(
                () =>
                    Promise.resolve()
                        .then(i.bind(i, 10648))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = A.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/undefined/music/vundefined' : window.location.origin;
                (0, a.setWasmUrl)(new URL(s, e).href);
            }
            let j = (0, o.PA)((e) => {
                let { agent: t, isPlaying: i } = e,
                    [a, s] = (0, d.useState)(null),
                    { state: o, toggleTrue: l } = (0, p.e)(!1),
                    { state: T, toggleTrue: A, toggleFalse: j } = (0, p.e)(!1),
                    { theme: k } = (0, f.W)(),
                    E = (0, d.useRef)(null),
                    I = t.entityType === u.h.ARTIST,
                    P = t.entityType === u.h.ALBUM || t.entityType === u.h.TRACK || t.entityType === u.h.PLAYLIST,
                    N = t.cover.color,
                    O = t.cover.uri,
                    L = (0, m.c)(async () => {
                        if (o && N && k) {
                            j();
                            let {
                                    color: e,
                                    glow1: i,
                                    glow2: r,
                                } = ((e) => {
                                    let { averageColor: t, theme: i, custom: r } = e,
                                        { h: a, s, l: n } = (0, b.g8)(t);
                                    if (r) {
                                        if (i === y.S.Dark) {
                                            let e = g(s + 5, 50, 100);
                                            return { color: x(a, e, g(n - 40, 12, 25)), glow1: x(a, e, g(n - 5, 45, 60)), glow2: x(a, e, g(n + 35, 80, 90)) };
                                        }
                                        let e = g(s - 2, 50, 100);
                                        return { color: x(a, e, g(n + 43, 80, 95)), glow1: x(a, e, g(n + 5, 45, 75)), glow2: x(a, e, g(n, 35, 55)) };
                                    }
                                    return { color: x(a, (s > 25 ? Math.min(s + 25, 60) : s) / 100, (n > 20 ? Math.min(n + 15, 60) : n) / 100) };
                                })({ averageColor: N, theme: k, custom: !t.entityType }),
                                s = JSON.stringify({
                                    rules: [
                                        { id: 'color', type: 'Color', value: e },
                                        { id: 'glow_1', type: 'Color', value: i },
                                        { id: 'glow_2', type: 'Color', value: r },
                                    ],
                                });
                            (await (null == a ? void 0 : a.setThemeData(s)), A());
                        }
                    }),
                    R = (0, m.c)(() => {
                        (l(), L());
                    });
                ((0, d.useEffect)(() => {
                    i ? null == a || a.play() : null == a || a.pause();
                }, [a, i]),
                    (0, d.useEffect)(() => {
                        L();
                    }, [N, L, k, o]),
                    (0, d.useEffect)(() => {
                        if (a)
                            return (
                                a.setUseFrameInterpolation(!1),
                                a.setRenderConfig({ devicePixelRatio: 0.1 }),
                                a.addEventListener('load', R),
                                () => {
                                    a.removeEventListener('load', R);
                                }
                            );
                    }, [a, R]));
                let M = !o || !T,
                    w = (0, _.L)(() => {
                        if (!E.current) return;
                        let e = I ? 0.029 : 0.036;
                        return { '--blur-size': ''.concat(E.current.clientWidth * e, 'px') };
                    });
                return (0, r.jsxs)('div', {
                    ref: E,
                    className: (0, n.$)(C().root, { [C().root_loading]: M }),
                    style: w,
                    'data-test-id': M ? c.OA.vibe.VIBE_AGENT_LOADING_CARD : void 0,
                    children: [
                        (0, r.jsxs)('div', {
                            className: (0, n.$)(C().cover, { [C().cover_round]: I, [C().cover_square]: P, [C().cover_loading]: M }),
                            children: [
                                t.entityType &&
                                    O &&
                                    (0, r.jsx)(h._V, { src: O, size: 200, fit: 'cover', withAvatarReplace: !0, className: C().image, withLoadingIndicator: !1 }),
                                (0, r.jsx)(S, { src: t.animationUri, loop: !0, dotLottieRefCallback: s, className: C().animation }),
                            ],
                        }),
                        (0, r.jsx)(v.W, { className: (0, n.$)(C().shimmer, { [C().shimmer_loading]: M }), isActive: !0, radius: I ? 'round' : 'm' }),
                    ],
                });
            });
        },
        11708: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => s });
            var r = i(74631),
                a = i(39004);
            let s = () => {
                let { formatMessage: e } = (0, a.A)();
                return (0, r.useCallback)(
                    function (t) {
                        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            r = Math.floor(t / 60),
                            a = function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    r = e({ id: 'time.minutes-left' }, { minutes: t });
                                return i ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(r) : r;
                            };
                        if (t < 1) return e({ id: 'time.finished' });
                        if (t < 60)
                            return (function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    r = e({ id: 'time.seconds-left' }, { seconds: t });
                                return i ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(r) : r;
                            })(Math.floor(t), i);
                        if (r < 60) return a(r, i);
                        let s = Math.floor(r / 60),
                            n = r % 60,
                            o = (function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return i ? e({ id: 'time.hours-left' }, { hours: t }) : e({ id: 'time.hours' }, { hours: t });
                            })(s, i);
                        return n > 0 ? ''.concat(o, ' ').concat(a(n)) : o;
                    },
                    [e],
                );
            };
        },
        13232: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => r });
            let r = (0, i(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        13624: (e, t, i) => {
            'use strict';
            i.d(t, { default: () => a.a });
            var r = i(68545),
                a = i.n(r);
        },
        14693: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var r,
                a = i(74631),
                s = {
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                n = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useToggle = void 0));
                let e = (function e(t) {
                    var i = n[t];
                    if (void 0 !== i) return i.exports;
                    var r = (n[t] = { exports: {} });
                    return (s[t](r, r.exports, e), r.exports);
                })(810);
                o.useToggle = (t) => {
                    let [i, r] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        r(t);
                    }, [t]);
                    let a = (0, e.useCallback)(() => {
                            r((e) => !e);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            r(!0);
                        }, []),
                        n = (0, e.useCallback)(() => {
                            r(!1);
                        }, []);
                    return { state: i, toggle: a, setState: r, toggleTrue: s, toggleFalse: n };
                };
            })(),
                o.__esModule);
            var l = o.useToggle;
        },
        15283: (e) => {
            e.exports = {
                root: 'VibeCardView_root__bt_Xt',
                root_loading: 'VibeCardView_root_loading__J8fOe',
                cover: 'VibeCardView_cover__fBDH_',
                cover_round: 'VibeCardView_cover_round__LPs63',
                cover_square: 'VibeCardView_cover_square__C45qF',
                cover_loading: 'VibeCardView_cover_loading__kpdrp',
                shimmer: 'VibeCardView_shimmer__Rp6yh',
                shimmer_loading: 'VibeCardView_shimmer_loading__74dZm',
                animation: 'VibeCardView_animation__x3VEI',
                image: 'VibeCardView_image__5fXOh',
            };
        },
        19410: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
        },
        21468: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var r = i(74631),
                a = i(56480);
            function s() {
                return (0, r.useContext)(a.H);
            }
        },
        22106: (e) => {
            e.exports = {
                root: 'ListeningProgress_root__Rvlcn',
                text_withoutTimeLeft: 'ListeningProgress_text_withoutTimeLeft__eAmOF',
                checkIcon: 'ListeningProgress_checkIcon___yh49',
            };
        },
        23976: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => o });
            var r = {
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
                    7998: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => r }));
                        let r = {
                            root: 'JD1RZC0EtdwegdYvGm6W',
                            root_active: 'K4G7ASZk9TWzXzAWMZKF',
                            'gradient-horizontal': 'GTZfWL5aq48rDurR2xQI',
                            root_radius_xs: 'PyJ4CgcZYC2CpTwW_q0e',
                            root_radius_s: 'Ig8cmdGxncIa4g0mjlzw',
                            root_radius_m: 'lJbeO5iovzBwUTpu7hFA',
                            root_radius_l: 'Gc3Wyk8uCohdTadkf7NR',
                            root_radius_xl: 'iKi9AOB1TOi3ZWzmbCkq',
                            root_radius_xxl: 'nYTL841hItMUZhvJq_ob',
                            root_radius_xxxl: 'LXGqiB6_V45plhG242mA',
                            root_radius_round: 'psTzstoF82tSOz1JHMB3',
                        };
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
                    7141: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Shimmer = void 0));
                        let a = i(4377),
                            s = i(5881),
                            n = r(i(7998));
                        t.Shimmer = function (e) {
                            let { isActive: t, className: i, radius: r = 'm', width: o, height: l, children: d, ...c } = e,
                                u = {};
                            return (
                                void 0 !== o && (u.width = 'string' == typeof o ? o : ''.concat(o, 'px')),
                                void 0 !== l && (u.height = 'string' == typeof l ? l : ''.concat(l, 'px')),
                                (0, a.jsx)('div', {
                                    className: (0, s.clsx)(n.default.root, n.default['root_radius_'.concat(r)], { [n.default.root_active]: t }, i),
                                    'aria-live': t ? 'polite' : 'off',
                                    'aria-busy': t,
                                    ...c,
                                    style: u,
                                    children: d,
                                })
                            );
                        };
                    },
                },
                a = {};
            function s(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var i = (a[e] = { exports: {} });
                return (r[e].call(i.exports, i, i.exports, s), i.exports);
            }
            ((s.d = (e, t) => {
                for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var n = {};
            (() => {
                (Object.defineProperty(n, 'X', { value: !0 }), (n.q = void 0));
                var e = s(7141);
                Object.defineProperty(n, 'q', {
                    enumerable: !0,
                    get: function () {
                        return e.Shimmer;
                    },
                });
            })();
            var o = n.q;
            n.X;
        },
        24574: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => y });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(74631),
                o = i(8487),
                l = i(61493),
                d = i(28068),
                c = i(66738),
                u = i(4254),
                m = i(16886),
                _ = i(50209),
                p = i(30296),
                h = i(27954),
                v = i(2493),
                f = i(11708),
                b = i(22106),
                x = i.n(b);
            let y = (0, s.PA)((e) => {
                var t, i, s, b, y, g, T, C, A;
                let { className: S, id: j, albumId: k, streamProgress: E, durationMs: I, playContextParams: P, withTimeLeftText: N = !0, isFinishedLabelHidden: O } = e,
                    L = (0, p.e)(),
                    { sonataState: R, album: M } = (0, h.g)(),
                    w = Math.floor(I / 1e3),
                    [D, B] = (0, n.useState)(!1),
                    z = (0, f.$)(),
                    { isPlaying: H, isCurrent: Y } = (0, _.D)({ playContextParams: P, entityId: k ? ''.concat(j, ':').concat(k) : j });
                ((0, n.useEffect)(() => {
                    if (!Y) return void B(!1);
                    let e =
                        null == L
                            ? void 0
                            : L.state.playerState.status.onChange(() => {
                                  (null == L ? void 0 : L.state.playerState.status.value) === m.MT.BUFFERING && B(!0);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [L, E, Y, H]),
                    (0, n.useEffect)(() => {
                        var e;
                        (null == M || null == (e = M.meta) ? void 0 : e.listeningFinished)
                            ? (E.updateEndPositionSec(0), E.updateEverFinished(!0))
                            : (null == M ? void 0 : M.allTracksUnfinished) && E.updateEverFinished(!1);
                    }, [E, null == M ? void 0 : M.allTracksUnfinished, null == M || null == (t = M.meta) ? void 0 : t.listeningFinished]),
                    (0, n.useEffect)(() => {
                        var e, t;
                        (Y &&
                            (null == R || null == (e = R.entityMeta) ? void 0 : e.streamProgress) &&
                            E &&
                            R.entityMeta.streamProgress.hasEverFinished !== E.hasEverFinished &&
                            E.updateEverFinished(!!R.entityMeta.streamProgress.hasEverFinished),
                            w - ((null == E ? void 0 : E.endPositionSec) || 0) < 1 &&
                                ((null == R || null == (t = R.entityMeta) ? void 0 : t.streamProgress) &&
                                    Y &&
                                    (R.entityMeta.streamProgress.updateEverFinished(!0), R.entityMeta.streamProgress.updateEndPositionSec(0)),
                                null == E || E.updateEverFinished(!0)));
                    }, [
                        Y,
                        null == R || null == (i = R.entityMeta) ? void 0 : i.streamProgress,
                        null == R || null == (b = R.entityMeta) || null == (s = b.streamProgress) ? void 0 : s.hasEverFinished,
                        E,
                        E.hasEverFinished,
                        E.endPositionSec,
                        w,
                    ]),
                    (0, n.useEffect)(() => {
                        if (!Y) return;
                        let e =
                            null == L
                                ? void 0
                                : L.state.playerState.progress.onChange(() => {
                                      var e;
                                      let t = L.state.playerState.progress.value,
                                          i = null == R || null == (e = R.entityMeta) ? void 0 : e.streamProgress;
                                      (0 !== t.position && D && E.updateEndPositionSec(t.position),
                                          Y &&
                                              parseInt(''.concat(null == i ? void 0 : i.endPositionSec), 10) !== parseInt(''.concat(t.position), 10) &&
                                              (null == i || i.updateEndPositionSec(t.position)));
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [L, E, Y, H, D, j, null == R ? void 0 : R.entityMeta]));
                let V = (Y && (null == R || null == (g = R.entityMeta) || null == (y = g.streamProgress) ? void 0 : y.endPositionSec)) || E.endPositionSec,
                    U = (0, v.m)(null != V ? V : 0, w),
                    F = (0, n.useMemo)(() => {
                        var e, t, i;
                        if (
                            ((Y && (null == R || null == (t = R.entityMeta) || null == (e = t.streamProgress) ? void 0 : e.hasEverFinished)) ||
                                (null == E ? void 0 : E.hasEverFinished) ||
                                (null == M || null == (i = M.meta) ? void 0 : i.listeningFinished)) &&
                            !O
                        )
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(u.HL, {
                                        lineClamp: 1,
                                        variant: 'div',
                                        className: (0, a.$)(x().text, { [x().text_withoutTimeLeft]: !N }),
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_TEXT,
                                        children: (0, r.jsx)(o.A, { id: 'time.finished' }),
                                    }),
                                    (0, r.jsx)(c.I, {
                                        size: 'xxs',
                                        variant: 'check',
                                        className: x().checkIcon,
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_ICON,
                                    }),
                                ],
                            });
                        if (!V || 0 === V) return;
                        let s = w - V,
                            n = z(s);
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(u.HL, {
                                    lineClamp: 1,
                                    variant: 'div',
                                    className: (0, a.$)(x().text, { [x().text_withoutTimeLeft]: !N }),
                                    'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_TEXT,
                                    children: n,
                                }),
                                s > 1 || O
                                    ? (0, r.jsx)(d.q, {
                                          'aria-valuetext': U,
                                          'aria-busy': Y && H,
                                          value: V,
                                          max: w,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_PROGRESS,
                                      })
                                    : (0, r.jsx)(c.I, {
                                          size: 'xxs',
                                          variant: 'check',
                                          className: x().checkIcon,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_ICON,
                                      }),
                            ],
                        });
                    }, [
                        w,
                        null == E ? void 0 : E.hasEverFinished,
                        N,
                        z,
                        Y,
                        H,
                        null == R || null == (C = R.entityMeta) || null == (T = C.streamProgress) ? void 0 : T.hasEverFinished,
                        null == M || null == (A = M.meta) ? void 0 : A.listeningFinished,
                        O,
                        V,
                        U,
                    ]);
                return (0, r.jsx)('div', { className: (0, a.$)(x().root, S), 'data-test-id': l.OA.track.LISTENING_PROGRESS, children: F });
            });
        },
        26115: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => s });
            var r = i(40207),
                a = i(12929);
            let s = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: s } = e;
                return (0, r.l)({ entity: t, entityType: a.n.TRACK, callback: i, onReject: s, preventDefaultWhenSafe: !1 });
            };
        },
        29282: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => s });
            var r = i(36484),
                a = i(62562);
            let s = () => (0, a.N)().get(r.SX);
        },
        30408: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => a });
            var r = i(27954);
            let a = (e, t, i) => {
                let {
                    settings: { isMobile: a },
                } = (0, r.g)();
                return !!(a && e && (((null == t ? void 0 : t.endPositionSec) && t.endPositionSec > 0) || (null == t ? void 0 : t.hasEverFinished) || (i && i > 0)));
            };
        },
        32652: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => h });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(74631),
                o = i(39004),
                l = i(61493),
                d = i(66738),
                c = i(74245),
                u = i(27954),
                m = i(60924),
                _ = i(92870),
                p = i.n(_);
            let h = (0, s.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: s, containerClassName: _, variant: h, size: v = 'xxxs', ...f } = e,
                    { formatMessage: b } = (0, o.A)(),
                    {
                        settings: { isMobile: x },
                    } = (0, u.g)(),
                    [y, g] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    i && i().then(g);
                }, [i, s]);
                let {
                    iconVariant: T,
                    descriptionText: C,
                    isTooltipEnabled: A,
                    ariaLabel: S,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: r, isMobile: a } = e,
                        s = (null == r ? void 0 : r.join('\n')) || '';
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
                        })(i),
                        descriptionText: s,
                        isTooltipEnabled: !!(null == r ? void 0 : r.length) && !a,
                        ariaLabel: s.length > 0 ? s : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: h, descriptionTexts: y, isMobile: x }, b);
                return (0, r.jsx)(m.k, {
                    description: C,
                    placement: 'bottom-start',
                    enabled: A,
                    children: (0, r.jsx)('span', {
                        className: _,
                        children: (0, r.jsx)(d.I, {
                            className: (0, a.$)(p().explicitMark, t),
                            'aria-label': S,
                            variant: T,
                            size: v,
                            ...f,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
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
        36286: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        38726: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var r = i(25839),
                a = i(88204),
                s = i(61493),
                n = i(66738),
                o = i(10820),
                l = i(77174),
                d = i(27954);
            let c = (0, a.PA)((e) => {
                let { isLiked: t, onClick: i, className: a, iconClassName: c, albumType: u, disabled: m } = e,
                    { user: _ } = (0, d.g)(),
                    p = t ? 'liked' : 'like',
                    h = (0, l.$)(t, u);
                return (0, r.jsx)(o.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, r.jsx)(n.I, { className: c, variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !_.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        39528: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => a });
            var r = i(25895);
            let a = (e) => (0, r.u)('/artist/:artistId', { params: { artistId: e } });
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
        42190: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var r = i(25839),
                a = i(35015),
                s = i(3163);
            let n = (e) => {
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
        43910: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                dateWithName: 'PodcastMeta_dateWithName__cKy0o',
                podcastMetaContainer: 'PodcastMeta_podcastMetaContainer__pFASj',
                podcastTitleContainer: 'PodcastMeta_podcastTitleContainer__p9Zja',
                podcastName: 'PodcastMeta_podcastName__iQeNK',
                progress: 'PodcastMeta_progress__5DqlO',
                progress_disabled: 'PodcastMeta_progress_disabled__KX04q',
                progress_withPreviousInfo: 'PodcastMeta_progress_withPreviousInfo__eOrCi',
                soonDate: 'PodcastMeta_soonDate__zGuG9',
                dateDisabled: 'PodcastMeta_dateDisabled__DxjtJ',
                dateDisliked: 'PodcastMeta_dateDisliked__95MlL',
            };
        },
        44408: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        46450: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var i in t) Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
                })(t, {
                    bindSnapshot: function () {
                        return n;
                    },
                    createAsyncLocalStorage: function () {
                        return s;
                    },
                    createSnapshot: function () {
                        return o;
                    },
                }));
            let i = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class r {
                disable() {
                    throw i;
                }
                getStore() {}
                run() {
                    throw i;
                }
                exit() {
                    throw i;
                }
                enterWith() {
                    throw i;
                }
                static bind(e) {
                    return e;
                }
            }
            let a = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function s() {
                return a ? new a() : new r();
            }
            function n(e) {
                return a ? a.bind(e) : r.bind(e);
            }
            function o() {
                return a
                    ? a.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        49337: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var r = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        49971: (e, t, i) => {
            'use strict';
            function r(e) {
                let { moduleIds: t } = e;
                return null;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }),
                i(25839),
                i(71910),
                i(65780),
                i(4865));
        },
        50314: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { h: () => r }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(r || (r = {})));
        },
        51253: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => L });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(84059),
                o = i(74631),
                l = i(39004),
                d = i(61493),
                c = i(71035),
                u = i(49656),
                m = i(3392),
                _ = i(4254),
                p = i(24574),
                h = i(40207),
                v = i(85686),
                f = i(27954),
                b = i(19410),
                x = i(12929),
                y = i(32652),
                g = i(97522),
                T = i(79276),
                C = i(74245),
                A = i(81024),
                S = i(85251),
                j = i(61755),
                k = i(87221),
                E = i(30408),
                I = i(12752),
                P = i.n(I),
                N = i(43910),
                O = i.n(N);
            let L = (0, s.PA)((e) => {
                var t, i, s, I, N, L, R;
                let {
                        track: M,
                        className: w,
                        withPodcastName: D,
                        withDate: B,
                        withSecondaryColor: z = !1,
                        withListeningProgress: H = !1,
                        captionSize: Y = 'm',
                        explicitSize: V = 'xs',
                        withExplicitMark: U,
                        titleContainerClassName: F,
                        textClassName: K,
                        playContextParams: W,
                        withTimeLeftText: $ = !0,
                        ignoreDislikedStyles: G,
                        withCustomTooltip: q = !0,
                        withSavingQueryParams: X,
                        beforeTitle: Z,
                        afterTitle: J,
                        titleLineClamp: Q = 1,
                        podcastMetaClassName: ee,
                        progressClassName: et,
                        withAlbumTitleLink: ei,
                    } = e,
                    {
                        fullscreenPlayer: er,
                        sonataState: ea,
                        slam: es,
                        settings: { isMobile: en },
                    } = (0, f.g)(),
                    { formatMessage: eo, formatDate: el } = (0, l.A)(),
                    ed = (0, j.$)({ withCustomTooltip: q }),
                    ec = (0, n.useSearchParams)(),
                    eu = (0, v.Z)(null != (L = null == (t = M.mainAlbum) ? void 0 : t.url) ? L : ''),
                    em = !!(H && W && M.shouldRememberPosition && M.streamProgress && M.durationMs),
                    e_ =
                        M.id === (null == (i = ea.entityMeta) ? void 0 : i.id) &&
                        (null == (I = ea.entityMeta) || null == (s = I.streamProgress) ? void 0 : s.endPositionSec),
                    ep = (0, E.d)(em, M.streamProgress, e_),
                    eh = ((e, t) => {
                        let {
                                isMobile: i,
                                isOfflineModeEnabled: r,
                                mainAlbum: a,
                                shouldHidePodcastInfo: s,
                                withPodcastName: n,
                                withDate: o,
                                withExplicitMark: l,
                                withAlbumTitleLink: d,
                                query: c,
                            } = t,
                            u = (0, S.q)(e, { isMobile: i, isOfflineModeEnabled: r, query: c }),
                            m = (null == l || l) && e.disclaimers ? (0, C.DQ)(e.disclaimers) : null,
                            _ = null != n && n && !s ? a : null,
                            p = _ && (null == d || d) ? (0, A.L)(_.id) : null,
                            h = (null == o || o) && !s ? e.pubDate : void 0,
                            v = e.pubDate ? new Date(e.pubDate) : new Date(),
                            f = (0, T.L)(v),
                            b = !!(h && [T.r.TODAY, T.r.YESTERDAY].includes(f));
                        return { ...u, explicitMark: m, album: _, albumLink: p, pubDate: h, dateType: f, isSoonDate: b };
                    })(M, {
                        isMobile: en,
                        isOfflineModeEnabled: es.isOfflineModeEnabled,
                        mainAlbum: M.mainAlbum,
                        shouldHidePodcastInfo: ep,
                        withPodcastName: D,
                        withDate: B,
                        withExplicitMark: U,
                        withAlbumTitleLink: ei,
                        query: X ? Object.fromEntries(ec) : void 0,
                    }),
                    ev = ((e, t, i, r, a) => {
                        var s, n;
                        let { canEnableCustomTooltip: o, isMobile: l } = a,
                            d = t.shouldShowRemovedTitle ? i({ id: 'track-title.podcast-not-found' }) : t.title,
                            c = i({ id: 'entity-names.podcast-name' }, { podcastName: e.title }),
                            u = ''.concat(c, ' ').concat(null != (n = e.version) ? n : ''),
                            m = t.album ? i({ id: 'entity-names.podcast-name' }, { podcastName: t.album.title }) : void 0,
                            _ = null;
                        if (t.pubDate)
                            switch (t.dateType) {
                                case T.r.TODAY:
                                    _ = i({ id: 'interface-actions.date-today' });
                                    break;
                                case T.r.YESTERDAY:
                                    _ = i({ id: 'interface-actions.date-yesterday' });
                                    break;
                                case T.r.DATE_WITH_YEAR:
                                    _ = r(t.pubDate, { month: 'long', day: 'numeric', year: 'numeric' });
                                    break;
                                default:
                                    _ = r(t.pubDate, { month: 'long', day: 'numeric' });
                            }
                        return {
                            displayTitle: d,
                            ariaLabel: u,
                            titleAttribute: o || t.shouldShowRemovedTitle ? void 0 : d,
                            versionTitleAttribute: o ? void 0 : t.version,
                            isTooltipEnabled: o && !l,
                            albumAriaLabel: m,
                            albumTitleAttribute: o || null == (s = t.album) ? void 0 : s.title,
                            dateText: _,
                            withSecondaryInfo: !!(t.album || t.pubDate),
                        };
                    })(M, eh, eo, el, { canEnableCustomTooltip: ed, isMobile: en }),
                    ef = (0, h.l)({ entity: null != (R = M.mainAlbum) ? R : null, entityType: x.n.PODCAST, callback: eu }),
                    eb = (0, c.c)((e) => {
                        (er.modal.isOpened && er.modal.close(), ef(e));
                    }),
                    ex = (0, k.O)({ track: M, withSavingQueryParams: X, entityType: x.n.PODCAST }),
                    ey = (0, o.useCallback)(
                        (e) =>
                            (0, r.jsx)(m.m_, {
                                enabled: ev.isTooltipEnabled,
                                offsetOptions: 4,
                                placement: 'top',
                                text: ev.displayTitle,
                                hoverSettings: b.V,
                                children: (0, r.jsx)(_.HL, {
                                    className: P().title,
                                    type: 'entity',
                                    size: Y,
                                    variant: 'span',
                                    title: ev.titleAttribute,
                                    ...e,
                                    children: ev.displayTitle,
                                }),
                            }),
                        [ev.isTooltipEnabled, ev.titleAttribute, Y, ev.displayTitle],
                    ),
                    eg = null == (N = eh.link) ? void 0 : N.href,
                    eT = (0, o.useMemo)(
                        () =>
                            eh.shouldShowRemovedTitle
                                ? (0, r.jsx)(m.m_, {
                                      enabled: ev.isTooltipEnabled,
                                      offsetOptions: 4,
                                      placement: 'top',
                                      text: ev.displayTitle,
                                      hoverSettings: b.V,
                                      children: (0, r.jsx)('span', { children: ev.displayTitle }),
                                  })
                                : void 0 !== eg
                                  ? (0, r.jsx)(g.N, {
                                        onClick: ex,
                                        className: P().albumLink,
                                        href: eg,
                                        'aria-label': ev.ariaLabel,
                                        title: ev.titleAttribute,
                                        'data-test-id': d.Kq.track.TRACK_TITLE,
                                        children: ey(),
                                    })
                                  : ey({ 'data-test-id': d.Kq.track.TRACK_TITLE }),
                        [ev.isTooltipEnabled, eh.shouldShowRemovedTitle, eg, ev.displayTitle, ey, ev.titleAttribute, ex, ev.ariaLabel],
                    ),
                    eC = (0, u.L)(() => {
                        let e = eh.album;
                        if (!e) return;
                        let t = (0, r.jsx)(m.m_, {
                            enabled: ev.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: e.title,
                            hoverSettings: b.V,
                            children: (0, r.jsx)(_.HL, { variant: 'span', type: 'entity', size: Y, className: P().albumTitle, children: e.title }),
                        });
                        return eh.albumLink
                            ? (0, r.jsx)(g.N, {
                                  'aria-label': ev.albumAriaLabel,
                                  className: P().link,
                                  href: eh.albumLink.href,
                                  title: ev.albumTitleAttribute,
                                  onClick: eb,
                                  'data-test-id': d.Kq.track.TRACK_PARENT_PODCAST_TITLE,
                                  children: t,
                              })
                            : (0, r.jsx)('span', { 'data-test-id': d.Kq.track.TRACK_PARENT_PODCAST_TITLE, children: t });
                    });
                return (0, r.jsx)('div', {
                    className: (0, a.$)(P().root, { [P().root_disabled]: !M.isAvailable, [P().root_disliked]: M.isDisliked && !G, [P().root_withSecondaryColor]: z }, w),
                    children: (0, r.jsxs)('div', {
                        className: (0, a.$)(P().metaContainer, O().podcastMetaContainer, ee),
                        children: [
                            em &&
                                W &&
                                M.streamProgress &&
                                (0, r.jsx)(p.B, {
                                    className: (0, a.$)(O().progress, et, {
                                        [O().progress_withPreviousInfo]: eh.album || eh.pubDate,
                                        [O().progress_disabled]: !M.isAvailable || M.isDisliked,
                                    }),
                                    id: M.id,
                                    albumId: M.albumId,
                                    streamProgress: M.streamProgress,
                                    durationMs: M.durationMs || 0,
                                    playContextParams: W,
                                    withTimeLeftText: $,
                                }),
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(P().titleContainer, F, O().podcastTitleContainer),
                                children: [
                                    (0, r.jsxs)(_.HL, {
                                        className: (0, a.$)(P().text, K),
                                        type: 'entity',
                                        size: Y,
                                        variant: 'div',
                                        lineClamp: Q,
                                        children: [
                                            Z,
                                            eT,
                                            eh.version &&
                                                (0, r.jsxs)(_.HL, {
                                                    className: (0, a.$)(P().text, P().version),
                                                    type: 'entity',
                                                    size: Y,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: ev.versionTitleAttribute,
                                                    children: ['\xa0', eh.version],
                                                }),
                                        ],
                                    }),
                                    eh.explicitMark &&
                                        (0, r.jsx)(y.N, {
                                            containerClassName: P().explicitMarkContainer,
                                            getDescriptionTexts: M.getDescriptionTexts,
                                            variant: eh.explicitMark,
                                            className: P().explicitMark,
                                            size: V,
                                            trackId: M.id,
                                        }),
                                    J,
                                ],
                            }),
                            ev.withSecondaryInfo &&
                                (0, r.jsxs)(_.HL, {
                                    type: 'entity',
                                    size: Y,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, a.$)(P().text, O().podcastName, K),
                                    children: [
                                        eC,
                                        null !== ev.dateText &&
                                            (0, r.jsx)(_.HL, {
                                                variant: 'span',
                                                type: 'entity',
                                                size: Y,
                                                className: (0, a.$)({
                                                    [O().dateWithName]: !!eh.album,
                                                    [O().soonDate]: eh.isSoonDate,
                                                    [O().dateDisabled]: !M.isAvailable,
                                                    [O().dateDisliked]: M.isDisliked && !G,
                                                }),
                                                children: ev.dateText,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                });
            });
        },
        52512: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(74631),
                a = i(3669),
                s = i(13232);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: i } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, r.useRef)(null),
                    o = (0, a.D)(),
                    l = (0, r.useId)(),
                    d = (0, r.useContext)(s.B),
                    c = (0, r.useCallback)(
                        (r, a) => {
                            (e ? e(r, i ? a : void 0) : o(r, a), t && d.unobserveElement(l));
                        },
                        [e, d, l, o, t, i],
                    );
                return (
                    (0, r.useEffect)(
                        () => (
                            d.observeElement({ elementRef: n, elementId: l, callback: c }),
                            () => {
                                d.unobserveElement(l);
                            }
                        ),
                        [e, d, c, l, o],
                    ),
                    { ref: n, intersectionPropertyId: l }
                );
            };
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        56348: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => V });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(74631),
                o = i(49656),
                l = i(3392),
                d = i(19410),
                c = i(71035),
                u = i(27954),
                m = i(39528);
            let _ = (e, t) => {
                let { withLink: i, separator: r } = t,
                    a = i && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: r, link: a };
            };
            var p = i(94484),
                h = i.n(p),
                v = i(61493),
                f = i(4254),
                b = i(97522),
                x = i(39004),
                y = i(44031),
                g = i(29481),
                T = i(85686),
                C = i(85743),
                A = i(40207);
            let S = (0, s.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: a, captionSize: s = 'm', allArtistsTitle: n, withCustomTooltip: o, hoverSettings: d } = e,
                        {
                            name: m,
                            link: _,
                            title: p,
                            ariaLabel: h,
                            tooltipText: S,
                            isTooltipEnabled: j,
                            handleNavigate: k,
                        } = ((e) => {
                            var t, i;
                            let { item: r, allArtistsTitle: a, withCustomTooltip: s } = e,
                                { formatMessage: n } = (0, x.A)(),
                                o = ((e, t) => {
                                    let { item: i, allArtistsTitle: r, withCustomTooltip: a } = e,
                                        s = r || i.name;
                                    return {
                                        ...i,
                                        title: a ? void 0 : s,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: s,
                                        isTooltipEnabled: !r && a,
                                    };
                                })({ item: r, allArtistsTitle: a, withCustomTooltip: s }, n),
                                {
                                    track: l,
                                    settings: { isMobile: d },
                                } = (0, u.g)(),
                                m = (0, T.Z)(null != (i = null == (t = o.link) ? void 0 : t.href) ? i : o.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, C.z)(),
                                p = (0, g.N)(),
                                h = (0, c.c)((e) => {
                                    (d && l.isOpened && l.close(), m(e));
                                }),
                                v = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: r, fullscreenPlayer: a, fullscreenVideoPlayer: s } = (0, u.g)(),
                                        { modal: n } = r;
                                    return (0, A.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (r.reset(), n.close()), a.modal.isOpened && a.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            s.modal.isOpened && (s.modal.close(), s.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: o.artist, callback: h }),
                                f = (0, c.c)((e) => {
                                    (p({ to: y.AppScreen.ArtistScreen }), null == _ || _(), v(e));
                                });
                            return { ...o, handleNavigate: f };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: o });
                    return _
                        ? (0, r.jsx)(b.N, {
                              ..._,
                              'aria-label': h,
                              className: i,
                              onClick: k,
                              title: p,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(l.m_, {
                                  enabled: j,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: S,
                                  hoverSettings: d,
                                  children: (0, r.jsx)(f.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: a, children: m }),
                              }),
                          })
                        : (0, r.jsx)(l.m_, {
                              enabled: j,
                              offsetOptions: 4,
                              placement: 'top',
                              text: S,
                              hoverSettings: d,
                              children: (0, r.jsx)(f.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: s,
                                  weight: 'medium',
                                  className: a,
                                  title: p,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                j = (e) => {
                    let { group: t, linkClassName: i, captionClassName: a, captionSize: s, allArtistsTitle: o, withCustomTooltip: l, hoverSettings: d } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, r.jsx)(S, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: a,
                                captionSize: s,
                                allArtistsTitle: o,
                                withCustomTooltip: l,
                                hoverSettings: d,
                            }),
                            t.decomposed.map((e) =>
                                (0, r.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, r.jsx)(S, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: a,
                                                captionSize: s,
                                                allArtistsTitle: o,
                                                withCustomTooltip: l,
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
            var k = i(8487),
                E = i(9079);
            let I = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: s } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(E.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(h().spoiler, i),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(k.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var P = i(28631),
                N = i(33049),
                O = i(61912),
                L = i(36286),
                R = i.n(L);
            let M = (0, s.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, r.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, N.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: a, children: t }),
                            (0, r.jsx)(l.ZI, { className: R().tooltipContent, children: i.map((e) => (0, r.jsx)(O.V, { artist: e, className: R().artistItem }, e.id)) }),
                        ],
                    });
                }),
                w = (0, n.forwardRef)((e, t) => (0, r.jsx)(M, { forwardRef: t, ...e }));
            var D = i(10820),
                B = i(93510),
                z = i.n(B);
            let H = (0, s.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: s } = (0, x.A)();
                    return (0, r.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, a.$)(z().root, z().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(O.V, { artist: e }, e.id)),
                    });
                }),
                Y = (0, s.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [s, l] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, u.g)(),
                        m = (0, c.c)(() => {
                            let e = a.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, o.L)(() =>
                            (0, P.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', _),
                                m(),
                                () => {
                                    window.removeEventListener('resize', _);
                                }
                            ),
                            [_, m],
                        ),
                        (0, n.useEffect)(() => {
                            m();
                        }, [t, m]),
                        0 !== t.length)
                    )
                        return (s || d) && (!d || 1 !== t.length) ? (d ? (0, r.jsx)(H, { artists: t, label: i }) : (0, r.jsx)(w, { artists: t, label: i })) : i;
                }),
                V = (0, s.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: s,
                            linkClassName: m,
                            captionClassName: p,
                            captionSize: v,
                            variant: f = 'breakAll',
                            spoilerComponent: b,
                            ...x
                        } = e,
                        y = ((e) => {
                            var t, i, r;
                            let { separator: a, visibleArtistsCount: s, withLink: o, withComposer: l, artistIdWithoutLink: d, withContextMenu: m } = e,
                                p = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                v = null == (r = e.withCustomTooltip) || r,
                                f = (0, n.useRef)(null),
                                [b, x] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: y },
                                } = (0, u.g)(),
                                g = ((!y || 1 === p.length) && m) || !m,
                                T = ((e, t) => {
                                    var i, r, a;
                                    let s = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        n = null == (r = null == t ? void 0 : t.withLink) || r,
                                        o = null != (a = null == t ? void 0 : t.separator) ? a : ', ',
                                        l = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(o),
                                        { visibleArtists: d, hiddenArtistsCount: c } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: r } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => r || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: s, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: d.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: r, separator: a, isFirst: s } = t;
                                                return {
                                                    primary: _(e, { withLink: r, separator: s ? void 0 : a }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = a ? e.separator : '';
                                                        return _(e, { withLink: r, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: o, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: l,
                                        hiddenArtistsCount: c,
                                    };
                                })(p, { separator: a, visibleArtistsCount: b ? void 0 : s, withComposer: l, withLink: !!g && o, artistIdWithoutLink: d }),
                                C = h ? T.allArtistsTitle : '',
                                A = (0, c.c)((e) => {
                                    (x(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: T.groups,
                                hiddenArtistsCount: T.hiddenArtistsCount,
                                allArtistsTitle: C,
                                withCustomTooltip: v,
                                withContextMenu: m,
                                labelRef: f,
                                handleOnSpoilerClick: A,
                                isTooltipEnabled: !!C && v && !m && !y,
                                title: !C || v || m ? void 0 : C,
                            };
                        })(x),
                        g = (0, o.L)(() =>
                            y.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(b)
                                  ? b
                                  : (0, r.jsx)(I, { spoilerClassName: s, spoilerArtistsCount: y.hiddenArtistsCount, handleOnSpoilerClick: y.handleOnSpoilerClick }),
                        ),
                        T = (0, r.jsx)(l.m_, {
                            referenceRef: y.labelRef,
                            enabled: y.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: y.allArtistsTitle,
                            hoverSettings: d.V,
                            children: (0, r.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, a.$)(h().root, h()['root_variant_'.concat(f)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: y.title,
                                children: [
                                    y.groups.map((e) =>
                                        (0, r.jsx)(
                                            j,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: p,
                                                captionSize: v,
                                                allArtistsTitle: y.allArtistsTitle,
                                                withCustomTooltip: y.withCustomTooltip,
                                                hoverSettings: d.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    g,
                                ],
                            }),
                        });
                    return y.withContextMenu ? (0, r.jsx)(Y, { labelRef: y.labelRef, artists: y.artists, label: T }) : T;
                });
        },
        56480: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r });
            let r = (0, i(74631).createContext)({ pageAlbumId: void 0 });
        },
        57249: (e, t, i) => {
            'use strict';
            e.exports = i.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        58954: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => h });
            var r = i(25839),
                a = i(44031),
                s = i(68103),
                n = i(91879),
                o = i(28045),
                l = i(51011),
                d = i(18608),
                c = i(68224),
                u = i(32911),
                m = i(98031),
                _ = i(95314),
                p = i(32953);
            let h = (e) => {
                let { item: t, index: i, pageId: h, sendSearchFeedback: v, blockPosition: f = 0, objectPosX: b, objectPosY: x, objectsCount: y } = e;
                switch (t.type) {
                    case s.n.PODCAST_EPISODE:
                        return (0, r.jsx)(
                            _.B,
                            {
                                objectType: a.DomainObjectType.PodcastEpisode,
                                objectId: t.data.id,
                                objectPosX: b,
                                objectPosY: x,
                                objectsCount: y,
                                children: (0, r.jsx)(c.c, { pageId: h, track: t.data }),
                            },
                            t.data.id,
                        );
                    case s.n.UGC_TRACK:
                        return (0, r.jsx)(c.c, { pageId: h, track: t.data });
                    case s.n.TRACK:
                        return (0, r.jsx)(
                            _.B,
                            {
                                objectType: a.DomainObjectType.Track,
                                objectId: t.data.id,
                                objectPosX: b,
                                objectPosY: x,
                                objectsCount: y,
                                children: (0, r.jsx)(p.N.Provider, {
                                    value: { sendSearchFeedback: v, id: t.data.entityId, type: n.o.TRACK, blockPosition: f, position: i },
                                    children: (0, r.jsx)(c.c, { pageId: h, track: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case s.n.ARTIST:
                        return (0, r.jsx)(
                            _.B,
                            {
                                objectType: a.DomainObjectType.Artist,
                                objectId: t.data.id,
                                objectPosX: b,
                                objectPosY: x,
                                objectsCount: y,
                                children: (0, r.jsx)(p.N.Provider, {
                                    value: { sendSearchFeedback: v, id: t.data.id, type: n.o.ARTIST, blockPosition: f, position: i },
                                    children: (0, r.jsx)(l.c, { pageId: h, artist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case s.n.PLAYLIST:
                        return (0, r.jsx)(
                            _.B,
                            {
                                objectType: a.DomainObjectType.Playlist,
                                objectId: t.data.id,
                                objectPosX: b,
                                objectPosY: x,
                                objectsCount: y,
                                children: (0, r.jsx)(p.N.Provider, {
                                    value: { sendSearchFeedback: v, id: t.data.id, type: n.o.PLAYLIST, blockPosition: f, position: i },
                                    children: (0, r.jsx)(d.v, { pageId: h, playlist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case s.n.PODCAST:
                        return (0, r.jsx)(
                            _.B,
                            {
                                objectType: a.DomainObjectType.Podcast,
                                objectId: String(t.data.id),
                                objectPosX: b,
                                objectPosY: x,
                                objectsCount: y,
                                children: (0, r.jsx)(
                                    p.N.Provider,
                                    {
                                        value: { sendSearchFeedback: v, id: t.data.id, type: n.o.PODCAST, blockPosition: f, position: i },
                                        children: (0, r.jsx)(o.M, { pageId: h, album: t.data }),
                                    },
                                    t.data.id,
                                ),
                            },
                            t.data.id,
                        );
                    case s.n.ALBUM:
                        return (0, r.jsx)(
                            _.B,
                            {
                                objectType: a.DomainObjectType.Album,
                                objectId: String(t.data.id),
                                objectPosX: b,
                                objectPosY: x,
                                objectsCount: y,
                                children: (0, r.jsx)(
                                    p.N.Provider,
                                    {
                                        value: { sendSearchFeedback: v, id: t.data.id, type: n.o.ALBUM, blockPosition: f, position: i },
                                        children: (0, r.jsx)(o.M, { pageId: h, album: t.data }),
                                    },
                                    t.data.id,
                                ),
                            },
                            t.data.id,
                        );
                    case s.n.WAVE: {
                        let e = t.data;
                        return (0, r.jsx)(
                            _.B,
                            {
                                objectType: a.DomainObjectType.Wave,
                                objectId: e.stationId,
                                objectPosX: b,
                                objectPosY: x,
                                objectsCount: y,
                                children: (0, r.jsx)(p.N.Provider, {
                                    value: { sendSearchFeedback: v, id: e.seedsId, type: n.o.WAVE, blockPosition: f, position: i },
                                    children: (0, r.jsx)(m.H, { vibe: e, cover: e.cover, description: e.description, agentVariant: u.h.SMALL }),
                                }),
                            },
                            e.stationId,
                        );
                    }
                    default:
                        return null;
                }
            };
        },
        59981: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { T: () => r }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(r || (r = {})));
        },
        60924: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => c });
            var r = i(25839),
                a = i(61493),
                s = i(3392),
                n = i(4254),
                o = i(74672),
                l = i.n(o);
            let d = { padding: 8 },
                c = (e) => {
                    let { description: t, enabled: i, title: o, placement: c = 'top', children: u } = e;
                    return (0, r.jsxs)(s.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: c,
                        children: [
                            u,
                            (0, r.jsx)(s.ZI, {
                                className: l().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, r.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61561: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            var r = i(27954),
                a = i(44806);
            let s = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: s },
                    experiments: n,
                } = (0, r.g)();
                return (
                    !(null == s ? void 0 : s.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = n.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61912: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => x });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(74631),
                o = i(44031),
                l = i(61493),
                d = i(71035),
                c = i(23818),
                u = i(10820),
                m = i(86869),
                _ = i(4254),
                p = i(29481),
                h = i(85686),
                v = i(27954),
                f = i(53454),
                b = i.n(f);
            let x = (0, s.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: s } = (0, v.g)(),
                    f = (0, h.Z)(t.url),
                    y = (0, p.N)(),
                    g = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(x, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    T = (0, d.c)((e) => {
                        (s.modal.isOpened && s.modal.close(), y({ to: o.AppScreen.ArtistScreen }), f(e));
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.Dr, {
                            className: (0, a.$)(b().root, i),
                            onClick: T,
                            'data-test-id': l.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(m.t, {
                                    radius: 'round',
                                    className: b().cover,
                                    children: (0, r.jsx)(c._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: b().image }),
                                }),
                                (0, r.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        g,
                    ],
                });
            });
        },
        62948: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var r = i(25839),
                a = i(33660),
                s = i(74631),
                n = i(39004),
                o = i(31860),
                l = i(91149),
                d = i(92942),
                c = i(27954),
                u = i(57549),
                m = i(42190);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, d.l)(),
                    [_, p] = (0, s.useState)(!1),
                    { formatMessage: h } = (0, n.A)();
                return (0, s.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let s = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                    p(!0);
                    let n = await e.toggleLike();
                    (p(!1),
                        n === o.f.OK
                            ? i((0, r.jsx)(m.T, { playlist: s }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [t.isAuthorized, _, e, h, i]);
            };
        },
        63149: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => o });
            var r = i(25839),
                a = i(53712),
                s = i(35015),
                n = i(3163);
            let o = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(n.O, {
                    closeToast: i,
                    entityVariant: s.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: a.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        65780: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return r.workAsyncStorageInstance;
                    },
                }));
            let r = i(90720);
        },
        68103: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { n: () => r }),
                (function (e) {
                    ((e.ALL = 'all'),
                        (e.TRACK = 'track'),
                        (e.ALBUM = 'album'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.WAVE = 'wave'),
                        (e.GENRE = 'genre'),
                        (e.USER = 'user'),
                        (e.UGC_TRACK = 'ugc_track'),
                        (e.PODCAST = 'podcast'),
                        (e.PODCAST_EPISODE = 'podcast_episode'),
                        (e.VIDEO = 'video'),
                        (e.LYRICS = 'lyrics'),
                        (e.CLIP = 'clip'),
                        (e.BOOK = 'book'),
                        (e.CONCERT = 'concert'));
                })(r || (r = {})));
        },
        68545: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }));
            let r = i(20567)._(i(89729));
            function a(e, t) {
                var i;
                let a = {};
                'function' == typeof e && (a.loader = e);
                let s = { ...a, ...t };
                return (0, r.default)({ ...s, modules: null == (i = s.loadableGenerated) ? void 0 : i.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        71705: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var r = i(25839),
                a = i(39004),
                s = i(71035),
                n = i(21468),
                o = i(91149),
                l = i(92942),
                d = i(27954),
                c = i(57549),
                u = i(33660),
                m = i(74631),
                _ = i(31860),
                p = i(93297);
            let h = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, d.g)(),
                    { formatMessage: v } = (0, a.A)(),
                    { notify: f } = (0, l.l)(),
                    b = (() => {
                        let { notify: e } = (0, l.l)(),
                            [t, i] = (0, m.useState)(!1),
                            { formatMessage: n } = (0, a.A)();
                        return (0, s.c)(async (a) => {
                            let { album: s, withLink: l = !0, withNotification: d = !0 } = a;
                            if (t) return;
                            let m = { ...(0, u.HO)(s), url: s.url, isLiked: !s.isLiked };
                            i(!0);
                            let h = await s.toggleLike();
                            (i(!1),
                                d &&
                                    (h === _.f.OK
                                        ? e((0, r.jsx)(p.T, { withLink: l, album: m }), { containerId: o.u.INFO })
                                        : e((0, r.jsx)(c.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR })));
                        });
                    })(),
                    { pageAlbumId: x } = (0, n.T)();
                return (0, s.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: x, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? b({ album: e })
                              : void f((0, r.jsx)(c.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                });
            };
        },
        71996: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(25839),
                a = i(74631),
                s = i(39004),
                n = i(61493),
                o = i(4071),
                l = i(66738),
                d = i(49984);
            let c = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: c,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: p,
                            className: h,
                            forwardRef: v,
                            style: f,
                            children: b,
                        } = e,
                        { formatMessage: x } = (0, s.A)(),
                        y = x({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(o.$, {
                        className: h,
                        color: 'secondary',
                        radius: c,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': y,
                        onClick: _,
                        ref: v,
                        icon: (0, r.jsx)(l.I, { variant: 'trailer', size: u, className: p }),
                        disabled: m,
                        'data-intersection-property-id': d.N,
                        style: f,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: b,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(c, { forwardRef: t, ...e }));
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
        73182: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => s });
            var r = i(56829),
                a = i(35015);
            let s = (e) => {
                switch (e) {
                    case r._.PODCAST:
                        return a.c.PODCAST;
                    case r._.AUDIOBOOK:
                        return a.c.AUDIOBOOK;
                    case r._.FAIRY_TALE:
                        return a.c.FAIRY_TALE;
                    default:
                        return a.c.ALBUM;
                }
            };
        },
        73614: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => n, r: () => o });
            var r = i(74631),
                a = i(39004),
                s = i(56829),
                n = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let o = (e, t) => {
                let { formatMessage: i } = (0, a.A)();
                return (0, r.useMemo)(() => {
                    switch (e) {
                        case s._.SINGLE:
                            return i({ id: 'entity-names.single' });
                        case s._.PODCAST:
                            return i({ id: 'entity-names.podcast' });
                        case s._.AUDIOBOOK:
                            if ('pin' === t) return i({ id: 'entity-names.book' });
                            return i({ id: 'entity-names.audio' });
                        case s._.FAIRY_TALE:
                            return i({ id: 'entity-names.fairy-tale' });
                        default:
                            return i({ id: 'entity-names.album' });
                    }
                }, [e, i, t]);
            };
        },
        74672: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        77174: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => s });
            var r = i(39004),
                a = i(56829);
            let s = (e, t) => {
                let { formatMessage: i } = (0, r.A)();
                if (e)
                    switch (t) {
                        case a._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case a._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case a._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case a._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        77435: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => h });
            var r = i(25839),
                a = i(84059),
                s = i(74631),
                n = i(39004),
                o = i(8487),
                l = i(71035),
                d = i(91149),
                c = i(92942),
                u = i(53712),
                m = i(27954),
                _ = i(51790),
                p = i(57549);
            let h = (e) => {
                let { user: t, search: i } = (0, m.g)(),
                    { formatMessage: h } = (0, n.A)(),
                    { notify: v } = (0, c.l)(),
                    f = (0, a.useRouter)();
                return (
                    (0, s.useEffect)(() => {
                        i.isEmptyHistory && f.push(u.Z.search.href);
                    }, [i.isEmptyHistory, f]),
                    (0, l.c)(() => {
                        try {
                            (t.account.data.uid && i.clearHistory({ userId: t.account.data.uid }),
                                v((0, r.jsx)(_.$, { message: (0, r.jsx)(o.A, { id: 'search.cleared-history' }) }), { containerId: d.u.INFO }),
                                e && e(),
                                f.push(u.Z.search.href));
                        } catch (e) {
                            v((0, r.jsx)(p.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: d.u.ERROR });
                        }
                    })
                );
            };
        },
        77698: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => _ });
            var r = i(25839),
                a = i(82298),
                s = i(39004),
                n = i(61493),
                o = i(49656),
                l = i(66738),
                d = i(4254),
                c = i(32652),
                u = i(72968),
                m = i.n(u);
            let _ = (e) => {
                let {
                        isDisliked: t,
                        isDisabled: i,
                        description: u,
                        getDescriptionTexts: _,
                        explicitMarkVariant: p,
                        className: h,
                        version: v,
                        title: f,
                        artistsComponent: b,
                        likesCount: x,
                        isLiked: y,
                        releaseYear: g,
                        titleLineClamp: T = 1,
                    } = e,
                    { formatMessage: C, formatNumber: A } = (0, s.A)(),
                    S = (0, o.L)(() => {
                        let e = null == b ? void 0 : b((0, a.$)(m().text, m().artistLink), (0, a.$)(m().text, m().artistCaption));
                        if (!e && !x) return;
                        let t = (0, r.jsx)(d.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, r.jsxs)('div', {
                            className: m().subtitle,
                            'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof x &&
                                    x > 0 &&
                                    (0, r.jsxs)('div', {
                                        className: m().likesCount,
                                        'aria-label': C({ id: 'entity-names.likes-counter' }, { counter: x }),
                                        'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, r.jsx)(l.I, {
                                                className: m().icon,
                                                variant: y ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, r.jsx)(d.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: A(x),
                                            }),
                                        ],
                                    }),
                                !!x && e && t,
                                e,
                                !!g && e && t,
                                (0, r.jsx)(d.HL, { variant: 'span', size: 'm', weight: 'medium', children: g }),
                            ],
                        });
                    });
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(m().root, { [m().root_disabled]: i, [m().root_disliked]: t }, h),
                    'data-test-id': n.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, r.jsxs)('div', {
                            className: m().titleContainer,
                            children: [
                                (0, r.jsxs)(d.HL, {
                                    className: (0, a.$)(m().text, m().title, { [m().title_withVersion]: v }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: T,
                                    type: 'text',
                                    'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        f,
                                        v &&
                                            (0, r.jsx)(d.HL, {
                                                className: (0, a.$)(m().text, m().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(v),
                                            }),
                                    ],
                                }),
                                p && (0, r.jsx)(c.N, { className: m().explicitMark, getDescriptionTexts: _, variant: p }),
                            ],
                        }),
                        u &&
                            (0, r.jsx)(d.HL, {
                                className: (0, a.$)(m().text, m().description),
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_DESCRIPTION,
                                children: u,
                            }),
                        S,
                    ],
                });
            };
        },
        77737: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => S });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(84059),
                o = i(74631),
                l = i(39004),
                d = i(61493),
                c = i(49656),
                u = i(3392),
                m = i(4254),
                _ = i(56348),
                p = i(85743),
                h = i(27954),
                v = i(19410),
                f = i(12929),
                b = i(32652),
                x = i(97522),
                y = i(40846),
                g = i(61755),
                T = i(87221),
                C = i(12752),
                A = i.n(C);
            let S = (0, s.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: s,
                        albumArtists: C,
                        withExplicitMark: S,
                        withSecondaryColor: j,
                        captionSize: k = 'm',
                        explicitSize: E = 'xxxs',
                        withAllArtistsTitle: I,
                        textClassName: P,
                        artistsClassName: N,
                        ignoreDislikedStyles: O,
                        withCustomTooltip: L = !0,
                        hasLineClamp: R = !0,
                        withSavingQueryParams: M,
                        beforeTitle: w,
                        withArtistLink: D,
                        variant: B,
                        withTrackLink: z,
                        afterTitle: H,
                        withContextMenuArtists: Y,
                    } = e,
                    { formatMessage: V } = (0, l.A)(),
                    { sendNavigateSearchFeedback: U } = (0, p.z)(),
                    {
                        settings: { isMobile: F },
                        slam: K,
                    } = (0, h.g)(),
                    W = (0, g.$)({ withCustomTooltip: L }),
                    $ = (0, n.useSearchParams)(),
                    G = (0, y.B)(s, {
                        isMobile: F,
                        isOfflineModeEnabled: K.isOfflineModeEnabled,
                        albumArtists: C,
                        withTrackLink: z,
                        withArtistLink: D,
                        variant: B,
                        withExplicitMark: S,
                        query: M ? Object.fromEntries($) : void 0,
                    }),
                    {
                        displayTitle: q,
                        ariaLabel: X,
                        tooltipText: Z,
                        titleAttribute: J,
                        versionTitleAttribute: Q,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, r) => {
                        var a, s;
                        let { canEnableCustomTooltip: n, isMobile: o } = i,
                            l = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, r),
                            d = t.shouldShowRemovedTitle ? l : ''.concat(l, ' ').concat(null != (a = t.version) ? a : ''),
                            c = r({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: l,
                            ariaLabel: ''.concat(c, ' ').concat(null != (s = e.version) ? s : ''),
                            tooltipText: d,
                            isTooltipEnabled: n && !o,
                            titleAttribute: !n && (t.shouldShowRemovedTitle || t.link) ? d : void 0,
                            versionTitleAttribute: n ? void 0 : t.version,
                        };
                    })(s, G, { canEnableCustomTooltip: W, isMobile: F }, V),
                    et = (0, T.O)({ track: s, onNavigate: U, withSavingQueryParams: M, entityType: f.n.TRACK }),
                    ei = (0, o.useCallback)(
                        (e) =>
                            (0, r.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Z,
                                hoverSettings: v.V,
                                children: (0, r.jsx)(m.HL, {
                                    className: (0, a.$)(A().text, A().title),
                                    type: 'entity',
                                    size: k,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: q,
                                }),
                            }),
                        [k, q, Z, ee],
                    ),
                    er = (0, c.L)(() =>
                        G.shouldShowRemovedTitle
                            ? (0, r.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Z,
                                  hoverSettings: v.V,
                                  children: (0, r.jsx)(m.HL, {
                                      className: (0, a.$)(A().text, A().title),
                                      type: 'entity',
                                      size: k,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: J,
                                      children: q,
                                  }),
                              })
                            : G.link
                              ? (0, r.jsx)(x.N, {
                                    onClick: et,
                                    className: A().albumLink,
                                    href: G.link.href,
                                    'aria-label': X,
                                    title: J,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': d.Kq.track.TRACK_TITLE }),
                    ),
                    ea = (0, o.useMemo)(() => +!!R, [R]);
                return (0, r.jsx)('div', {
                    className: (0, a.$)(A().root, { [A().root_disabled]: !s.isAvailable, [A().root_disliked]: s.isDisliked && !O, [A().root_withSecondaryColor]: j }, t),
                    children: (0, r.jsxs)('div', {
                        className: A().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(A().titleContainer, { [A().titleContainer_withVersion]: s.version }, i),
                                children: [
                                    (0, r.jsxs)(m.HL, {
                                        className: (0, a.$)(A().text, P),
                                        type: 'entity',
                                        size: k,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            w,
                                            er,
                                            G.version &&
                                                (0, r.jsxs)(m.HL, {
                                                    className: (0, a.$)(A().text, A().version),
                                                    type: 'entity',
                                                    size: k,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Q,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', G.version],
                                                }),
                                        ],
                                    }),
                                    G.explicitMark &&
                                        (0, r.jsx)(b.N, {
                                            containerClassName: A().explicitMarkContainer,
                                            getDescriptionTexts: s.getDescriptionTexts,
                                            size: E,
                                            variant: G.explicitMark,
                                            className: A().explicitMark,
                                            trackId: s.id,
                                        }),
                                    H,
                                ],
                            }),
                            G.artists.length > 0 &&
                                (0, r.jsx)(_.i, {
                                    className: (0, a.$)(A().text, { [A().artists]: R }, N, P),
                                    withAllArtistsTitle: I,
                                    linkClassName: (0, a.$)(A().text, A().link),
                                    captionClassName: (0, a.$)(A().text, A().artistCaption),
                                    artists: G.artists,
                                    withLink: G.withArtistLink,
                                    lineClamp: ea,
                                    captionSize: k,
                                    withContextMenu: Y,
                                }),
                        ],
                    }),
                });
            });
        },
        79276: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => a, L: () => s });
            let r = (e, t) => e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
            var a = (function (e) {
                return ((e.TODAY = 'today'), (e.YESTERDAY = 'yesterday'), (e.DATE = 'date'), (e.DATE_WITH_YEAR = 'date-with-year'), e);
            })({});
            let s = (e) => {
                let t = new Date();
                if (r(t, e)) return 'today';
                let i = new Date();
                return (i.setDate(i.getDate() - 1), r(i, e)) ? 'yesterday' : t.getFullYear() !== e.getFullYear() ? 'date-with-year' : 'date';
            };
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
        81024: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => a });
            var r = i(25895);
            let a = (e) => (0, r.u)('/album/:albumId', { params: { albumId: e } });
        },
        85680: (e, t, i) => {
            'use strict';
            i.d(t, { SearchHistoryPage: () => C });
            var r = i(25839),
                a = i(10508),
                s = i(88204),
                n = i(84059),
                o = i(74631),
                l = i(39004),
                d = i(8487),
                c = i(61493),
                u = i(4071),
                m = i(66738),
                _ = i(13833),
                p = i(4254),
                h = i(58954),
                v = i(77435),
                f = i(20258),
                b = i(21784),
                x = i(89192),
                y = i(27954),
                g = i(99256),
                T = i.n(g);
            let C = (0, s.PA)(() => {
                let {
                        search: e,
                        user: t,
                        settings: { isMobile: i },
                    } = (0, y.g)(),
                    { setContentScrollRef: s } = (0, x.g)(),
                    { formatMessage: g } = (0, l.A)(),
                    C = (0, b.W)(),
                    A = (0, o.useRef)(!1),
                    S = (0, o.useRef)(null),
                    j = (0, v.t)(() => {
                        A.current = !0;
                    }),
                    k = e.historyPage.items.length;
                (t.isAuthorized && (0, n.notFound)(),
                    (0, o.useEffect)(() => {
                        S.current && C.canBack && S.current.focus();
                    }, [C.canBack]),
                    (0, o.useEffect)(
                        () => () => {
                            (null == A ? void 0 : A.current) ? (e.resetHistoryItems(), (A.current = !1)) : e.resetHistoryStateRequest();
                        },
                        [e],
                    ));
                let E = (0, o.useMemo)(
                        () =>
                            (0, a.A)(() => {
                                null == C || C.back();
                            }, 200),
                        [C],
                    ),
                    I = (0, o.useMemo)(
                        () =>
                            k
                                ? (0, r.jsx)('div', {
                                      className: T().items,
                                      children: e.historyPage.items.map((e, t) => (0, h.G)({ item: e, index: t, pageId: f._Q.SEARCH })).filter((e) => !!e),
                                  })
                                : (0, r.jsx)(p.HL, {
                                      className: T().emptyHistory,
                                      variant: 'div',
                                      size: 'm',
                                      type: 'text',
                                      children: (0, r.jsx)(d.A, { id: 'search.history-empty' }),
                                  }),
                        [e.historyPage.items, k],
                    );
                return (
                    e.isHistoryReady && t.account.data.uid && (0, o.use)(e.getHistory({ userId: t.account.data.uid })),
                    (0, r.jsx)('div', {
                        className: T().root,
                        'data-test-id': c.Xk.search.SEARCH_HISTORY_PAGE,
                        children: (0, r.jsxs)(_.N, {
                            className: T().scrollContent,
                            containerClassName: T().scrollContainer,
                            ref: s,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: T().header,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: T().title,
                                            children: [
                                                C.canBack &&
                                                    (0, r.jsx)(u.$, {
                                                        ref: S,
                                                        'aria-label': g({ id: 'navigation.go-back' }),
                                                        radius: 'round',
                                                        disabled: !C.canBack,
                                                        size: 's',
                                                        icon: (0, r.jsx)(m.I, { size: 'xxs', variant: 'arrowLeft' }),
                                                        onClick: E,
                                                    }),
                                                (0, r.jsx)(p.DZ, { variant: 'h2', size: i ? 'm' : 'xl', children: (0, r.jsx)(d.A, { id: 'search.history' }) }),
                                            ],
                                        }),
                                        (0, r.jsx)(u.$, {
                                            'aria-label': g({ id: 'search.clear-history' }),
                                            radius: 'xxxl',
                                            variant: 'outline',
                                            disabled: !k,
                                            size: i ? 's' : 'default',
                                            onClick: j,
                                            children: (0, r.jsx)(p.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                type: 'text',
                                                children: (0, r.jsx)(d.A, { id: 'search.clear-history' }),
                                            }),
                                        }),
                                    ],
                                }),
                                !e.isHistoryLoading && I,
                            ],
                        }),
                    })
                );
            });
        },
        85957: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        86209: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => c });
            var r = i(25839),
                a = i(82298),
                s = i(50314),
                n = i(49656),
                o = i(6349),
                l = i(4111),
                d = i.n(l);
            let c = (e) => {
                let {
                        agent: t,
                        isPlaying: i,
                        isCurrent: l,
                        onPlayButtonClick: c,
                        shouldShowControl: u = !0,
                        playButtonIconSize: m,
                        alt: _,
                        className: p,
                        coverClassName: h,
                        entityCoverClassName: v,
                        controlClassName: f,
                        fallbackIconSize: b,
                    } = e,
                    x = (0, n.L)(() => {
                        if (t.entityType) return t.entityType === s.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, r.jsx)(o.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, a.$)(d().root, d()['root_radius_'.concat(x)], { [d().root_withShadow]: !!t.entityType }, p),
                    radius: x,
                    onPlayButtonClick: c,
                    isPlaying: i,
                    isCurrent: l,
                    alt: _,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: m,
                    fallbackIconSize: b,
                    coverClassName: h,
                    entityCoverClassName: v,
                    controlClassName: f,
                });
            };
        },
        89192: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => a, g: () => s });
            var r = i(74631);
            let a = (0, r.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                s = () => (0, r.useContext)(a);
        },
        89729: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                }));
            let r = i(25839),
                a = i(74631),
                s = i(95102);
            function n(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            i(49971);
            let o = { loader: () => Promise.resolve(n(() => null)), loading: null, ssr: !0 },
                l = function (e) {
                    let t = { ...o, ...e },
                        i = (0, a.lazy)(() => t.loader().then(n)),
                        l = t.loading;
                    function d(e) {
                        let n = l ? (0, r.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            o = !t.ssr || !!t.loading,
                            d = o ? a.Suspense : a.Fragment,
                            c = t.ssr
                                ? (0, r.jsxs)(r.Fragment, { children: [null, (0, r.jsx)(i, { ...e })] })
                                : (0, r.jsx)(s.BailoutToCSR, { reason: 'next/dynamic', children: (0, r.jsx)(i, { ...e }) });
                        return (0, r.jsx)(d, { ...(o ? { fallback: n } : {}), children: c });
                    }
                    return ((d.displayName = 'LoadableComponent'), d);
                };
        },
        90720: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }));
            let r = (0, i(46450).createAsyncLocalStorage)();
        },
        90780: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => d });
            var r = i(25839),
                a = i(74631),
                s = i(61493),
                n = i(4254),
                o = i(44408),
                l = i.n(o);
            let d = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [o, d] = (0, a.useState)(null);
                if (
                    ((0, a.useEffect)(() => {
                        t && t().then(d);
                    }, [t]),
                    o)
                )
                    return o.map((e, t) =>
                        (0, r.jsx)(
                            n.HL,
                            {
                                className: l().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': s.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(i, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        92870: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        93297: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => o });
            var r = i(25839),
                a = i(88204),
                s = i(3163),
                n = i(73182);
            let o = (0, a.PA)((e) => {
                let { album: t, closeToast: i, withLink: a } = e,
                    o = (0, n.b)(t.type);
                return (0, r.jsx)(s.O, {
                    closeToast: i,
                    entityVariant: o,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: a,
                });
            });
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
        95067: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => a });
            var r = i(61943),
                a = (function (e) {
                    return (
                        (e.Theme = 'theme'),
                        (e.AllowAnalyticsLogs = 'AllowAnalyticsLogs'),
                        (e.NavbarCollapsed = 'navbarCollapsed'),
                        (e.SessionHistoryState = 'sessionHistoryState'),
                        (e.SessionId = 'Session_id'),
                        (e.YmPlayerRepeatMode = 'ymPlayerRepeatMode'),
                        (e.YmPlayerVolume = 'ymPlayerVolume'),
                        (e.YmPlayerPrevVolume = 'ymPlayerPrevVolume'),
                        (e.YmPlayerShuffle = 'ymPlayerShuffle'),
                        (e.YmPlayerQuality = 'ymPlayerQuality'),
                        (e.YmUid = 'ymUid'),
                        (e.YandexLogin = 'yandex_login'),
                        (e.YandexUid = 'yandexuid'),
                        (e.Oauth = 'oauth'),
                        (e.OauthState = 'oauthState'),
                        (e.ArtistDonationButtonOnbordingShowed = 'ArtistDonationButtonOnbordingShowed'),
                        (e.TrailerButtonOnbordingShowed = 'TrailerButtonOnbordingShowed'),
                        (e.ConcertsTabOnboardingShowed = 'ConcertsTabOnboardingShowed'),
                        (e[(e.SavedUserLanguage = r.s)] = 'SavedUserLanguage'),
                        (e.ExEx = 'ExEx'),
                        (e.EqualizerConfig = 'EqualizerConfig'),
                        (e.EnableMetricsPluginDebugMode = 'EnableMetricsPluginDebugMode'),
                        (e.EnableYnisonMetricsDebugMode = 'EnableYnisonMetricsDebugMode'),
                        (e.OverwrittenExperiments = 'overwrittenExperiments'),
                        (e.Offer = 'offer'),
                        (e.OfflineMode = 'offlineMode'),
                        (e.NavbarDownloadBarIsHidden = 'navbarDownloadBarIsHidden'),
                        (e.OfflineDegradation = 'offlineDegradation'),
                        (e.DesktopPaywall = 'desktopPaywall'),
                        (e.LiteVersionMode = 'liteVersionMode'),
                        (e.DownloadMobileApp = 'downloadMobileApp'),
                        (e.HideDeeplinkAndOnelink = 'hideDeeplinkAndOnelink'),
                        (e.YnisonDeviceId = 'ynisonDeviceId'),
                        (e.CrossFadeMode = 'crossFadeMode'),
                        (e.CustomPlayerThumbConfig = 'CustomPlayerThumbConfig'),
                        (e.BuySubscriptionParams = 'buySubscriptionParams'),
                        (e.EnableCrossfadeDebugMode = 'EnableCrossfadeDebugMode'),
                        (e.EnableBurstDebounceDebugMode = 'EnableBurstDebounceDebugMode'),
                        (e.ConcertLocation = 'concertLocation'),
                        e
                    );
                })({});
        },
        95102: (e, t, i) => {
            'use strict';
            function r(e) {
                let { reason: t, children: i } = e;
                return i;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }),
                i(29834));
        },
        95314: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => n });
            var r = i(25839),
                a = i(74631),
                s = i(66192);
            let n = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: n, objectPos: o, objectType: l, objectsCount: d, mainObjectId: c, mainObjectType: u, children: m } = e,
                    _ = (0, a.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: n, objectPos: o, objectType: l, objectsCount: d, mainObjectId: c, mainObjectType: u }),
                        [t, i, n, o, l, d, c, u],
                    );
                return (0, r.jsx)(s.l.Provider, { value: _, children: m });
            };
        },
        96618: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => a, W: () => s });
            var r = i(74631);
            let a = (0, r.createContext)({ theme: null, setTheme: () => {} }),
                s = () => (0, r.useContext)(a);
        },
        99256: (e) => {
            e.exports = {
                root: 'SearchHistoryPage_root__Wbvyf',
                title: 'SearchHistoryPage_title__gnJuo',
                header: 'SearchHistoryPage_header__YdTG5',
                scrollContainer: 'SearchHistoryPage_scrollContainer__ScAez',
                scrollContent: 'SearchHistoryPage_scrollContent__5AXWC',
                content: 'SearchHistoryPage_content__iPgVO',
                desktopItem: 'SearchHistoryPage_desktopItem__Xv9C_',
                items: 'SearchHistoryPage_items___okS8',
                emptyHistory: 'SearchHistoryPage_emptyHistory__gzfUu',
            };
        },
        99835: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => a });
            var r = i(40207);
            let a = (e) => {
                let { album: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7055, 3349, 6287, 2121, 740, 5128, 7339, 3472, 7931, 6706, 4771, 5201, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1251, 6215, 2038, 4163, 3246, 7848,
                3482, 6680, 2247, 7856, 820, 8649, 862, 1808, 5853, 4475, 5056, 7358,
            ],
            () => e((e.s = 9684)),
        ),
            (_N_E = e.O()));
    },
]);
