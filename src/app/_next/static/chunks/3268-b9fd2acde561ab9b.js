(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3268],
    {
        1134: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var a = i(25839),
                r = i(33660),
                n = i(74631),
                s = i(39004),
                l = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(27892);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, s.A)(),
                    [m, v] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, a.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (m) return;
                    let n = { ...(0, r.HO)(e), url: e.url, isPinned: !e.isPinned };
                    v(!0);
                    let s = await e.togglePin();
                    (v(!1),
                        s
                            ? i((0, a.jsx)(u.l, { playlist: n }), { containerId: l.u.INFO })
                            : i((0, a.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [t.isAuthorized, m, e, i, _]);
            };
        },
        1271: (e) => {
            e.exports = {
                root: 'VibeAgentCard_root__GVtqu',
                cover: 'VibeAgentCard_cover__In0Nz',
                controls: 'VibeAgentCard_controls__yXgoW',
                additionals_hide: 'VibeAgentCard_additionals_hide__GpV7Z',
                control: 'VibeAgentCard_control__toXgO',
                playButton: 'VibeAgentCard_playButton__5YkZS',
                pinButton: 'VibeAgentCard_pinButton___f4vw',
            };
        },
        1797: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var a = i(40207);
            let r = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: r } = e;
                return (0, a.l)({ entity: t, callback: i, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
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
            i.d(t, { K: () => m });
            var a = i(25839),
                r = i(33660),
                n = i(74631),
                s = i(39004),
                l = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                _ = i(63149);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, v] = (0, n.useState)(!1),
                    { formatMessage: p } = (0, s.A)();
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let n = { ...(0, r.HO)(e), isLiked: !e.isLiked };
                    v(!0);
                    let s = await e.toggleLike();
                    (v(!1),
                        s === l.f.OK
                            ? i((0, a.jsx)(_.T, { artist: n }), { containerId: o.u.INFO })
                            : i((0, a.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, m, p, i]);
            };
        },
        8900: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => c });
            var a = i(74631),
                r = i(91886),
                n = i(36484),
                s = i(62562),
                l = i(49984),
                o = i(75167);
            let c = (e) => {
                var t;
                let { id: i, ref: c } = e,
                    { config: d, isOnboardingOpened: u, setIsOnboardingOpened: _ } = (0, o.w)(),
                    m = (0, a.useRef)(!1),
                    v = (0, r.BL)([{ current: c }], !c),
                    { isIntersecting: p } = null != (t = v[l.N]) ? t : {},
                    h = (0, s.N)().get(n.U2);
                for (let { id: e, storageKey: t, enabled: r } of ((0, a.useEffect)(() => {
                    if (m.current && p) {
                        let e = d.find((e) => {
                            let { id: t } = e;
                            return t === i;
                        });
                        e && h.set(e.storageKey, !0, { expires: e.expires });
                    }
                }, [d, i, p, h, v, c]),
                d)) {
                    let a = h.get(t);
                    if (r) {
                        if (null == u ? void 0 : u.current) return !1;
                        if (i === e) {
                            if (a) return !1;
                            return ((m.current = !0), _(!0), !0);
                        }
                        if (!a) break;
                    }
                }
                return !1;
            };
        },
        10557: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => j });
            var a = i(25839),
                r = i(10648),
                n = i(57249),
                s = i(82298),
                l = i(88204),
                o = i(13624),
                c = i(74631),
                d = i(61493),
                u = i(50314),
                _ = i(71035),
                m = i(49656),
                v = i(14693),
                p = i(23818),
                h = i(23976),
                x = i(96618),
                g = i(89288);
            let y = (e, t, i) => {
                let a = (a) => {
                    let r = (a + e / 30) % 12,
                        n = t * Math.min(i, 1 - i);
                    return i - n * Math.max(-1, Math.min(r - 3, 9 - r, 1));
                };
                return [a(0), a(8), a(4)];
            };
            var b = i(49337);
            let C = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                return Math.min(i, Math.max(t, e)) / 100;
            };
            var T = i(15283),
                f = i.n(T),
                k = i(49124);
            let A = o.default.default(
                () =>
                    Promise.resolve()
                        .then(i.bind(i, 10648))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = k.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/undefined/music/vundefined' : window.location.origin;
                (0, r.setWasmUrl)(new URL(n, e).href);
            }
            let j = (0, l.PA)((e) => {
                let { agent: t, isPlaying: i } = e,
                    [r, n] = (0, c.useState)(null),
                    { state: l, toggleTrue: o } = (0, v.e)(!1),
                    { state: T, toggleTrue: k, toggleFalse: j } = (0, v.e)(!1),
                    { theme: I } = (0, x.W)(),
                    N = (0, c.useRef)(null),
                    L = t.entityType === u.h.ARTIST,
                    P = t.entityType === u.h.ALBUM || t.entityType === u.h.TRACK || t.entityType === u.h.PLAYLIST,
                    R = t.cover.color,
                    w = t.cover.uri,
                    O = (0, _.c)(async () => {
                        if (l && R && I) {
                            j();
                            let {
                                    color: e,
                                    glow1: i,
                                    glow2: a,
                                } = ((e) => {
                                    let { averageColor: t, theme: i, custom: a } = e,
                                        { h: r, s: n, l: s } = (0, g.g8)(t);
                                    if (a) {
                                        if (i === b.S.Dark) {
                                            let e = C(n + 5, 50, 100);
                                            return { color: y(r, e, C(s - 40, 12, 25)), glow1: y(r, e, C(s - 5, 45, 60)), glow2: y(r, e, C(s + 35, 80, 90)) };
                                        }
                                        let e = C(n - 2, 50, 100);
                                        return { color: y(r, e, C(s + 43, 80, 95)), glow1: y(r, e, C(s + 5, 45, 75)), glow2: y(r, e, C(s, 35, 55)) };
                                    }
                                    return { color: y(r, (n > 25 ? Math.min(n + 25, 60) : n) / 100, (s > 20 ? Math.min(s + 15, 60) : s) / 100) };
                                })({ averageColor: R, theme: I, custom: !t.entityType }),
                                n = JSON.stringify({
                                    rules: [
                                        { id: 'color', type: 'Color', value: e },
                                        { id: 'glow_1', type: 'Color', value: i },
                                        { id: 'glow_2', type: 'Color', value: a },
                                    ],
                                });
                            (await (null == r ? void 0 : r.setThemeData(n)), k());
                        }
                    }),
                    S = (0, _.c)(() => {
                        (o(), O());
                    });
                ((0, c.useEffect)(() => {
                    i ? null == r || r.play() : null == r || r.pause();
                }, [r, i]),
                    (0, c.useEffect)(() => {
                        O();
                    }, [R, O, I, l]),
                    (0, c.useEffect)(() => {
                        if (r)
                            return (
                                r.setUseFrameInterpolation(!1),
                                r.setRenderConfig({ devicePixelRatio: 0.1 }),
                                r.addEventListener('load', S),
                                () => {
                                    r.removeEventListener('load', S);
                                }
                            );
                    }, [r, S]));
                let E = !l || !T,
                    B = (0, m.L)(() => {
                        if (!N.current) return;
                        let e = L ? 0.029 : 0.036;
                        return { '--blur-size': ''.concat(N.current.clientWidth * e, 'px') };
                    });
                return (0, a.jsxs)('div', {
                    ref: N,
                    className: (0, s.$)(f().root, { [f().root_loading]: E }),
                    style: B,
                    'data-test-id': E ? d.OA.vibe.VIBE_AGENT_LOADING_CARD : void 0,
                    children: [
                        (0, a.jsxs)('div', {
                            className: (0, s.$)(f().cover, { [f().cover_round]: L, [f().cover_square]: P, [f().cover_loading]: E }),
                            children: [
                                t.entityType &&
                                    w &&
                                    (0, a.jsx)(p._V, { src: w, size: 200, fit: 'cover', withAvatarReplace: !0, className: f().image, withLoadingIndicator: !1 }),
                                (0, a.jsx)(A, { src: t.animationUri, loop: !0, dotLottieRefCallback: n, className: f().animation }),
                            ],
                        }),
                        (0, a.jsx)(h.W, { className: (0, s.$)(f().shimmer, { [f().shimmer_loading]: E }), isActive: !0, radius: L ? 'round' : 'm' }),
                    ],
                });
            });
        },
        13936: (e) => {
            e.exports = {
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
                root: 'ArtistCard_root__x67BK',
                srTitleLink: 'ArtistCard_srTitleLink__jzfOW',
                coverBlock: 'ArtistCard_coverBlock__dBL4x',
                image: 'ArtistCard_image__pONJx',
                titleLink: 'ArtistCard_titleLink__G8Puz',
                playButton: 'ArtistCard_playButton__XZoTr',
                likeButton: 'ArtistCard_likeButton__LU9TL',
                menuButton: 'ArtistCard_menuButton__EynXG',
                pinButton: 'ArtistCard_pinButton__G_VOi',
                trailerButton: 'ArtistCard_trailerButton__a2NHm',
                control: 'ArtistCard_control___qv5j',
            };
        },
        14693: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => o });
            var a,
                r = i(74631),
                n = {
                    810: (e) => {
                        e.exports = a || (a = i.t(r, 2));
                    },
                },
                s = {},
                l = {};
            ((() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.useToggle = void 0));
                let e = (function e(t) {
                    var i = s[t];
                    if (void 0 !== i) return i.exports;
                    var a = (s[t] = { exports: {} });
                    return (n[t](a, a.exports, e), a.exports);
                })(810);
                l.useToggle = (t) => {
                    let [i, a] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        a(t);
                    }, [t]);
                    let r = (0, e.useCallback)(() => {
                            a((e) => !e);
                        }, []),
                        n = (0, e.useCallback)(() => {
                            a(!0);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            a(!1);
                        }, []);
                    return { state: i, toggle: r, setState: a, toggleTrue: n, toggleFalse: s };
                };
            })(),
                l.__esModule);
            var o = l.useToggle;
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
        19966: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => r });
            var a = i(79497);
            let r = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, a.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        21971: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Z });
            var a = i(25839),
                r = i(88204),
                n = i(39004),
                s = i(44031),
                l = i(61493),
                o = i(22939),
                c = i(71035),
                d = i(66738),
                u = i(10820),
                _ = i(33660),
                m = i(74631),
                v = i(31860),
                p = i(91149),
                h = i(92942),
                x = i(27954),
                g = i(57549),
                y = i(86869),
                b = i(69084),
                C = i(4254),
                T = i(51790),
                f = i(6323),
                k = i(24596),
                A = i.n(k);
            let j = (e) => {
                let { coverUri: t, title: i, isDisliked: r, closeToast: s } = e,
                    { formatMessage: l } = (0, n.A)(),
                    o = l(r ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, a.jsx)(T.$, {
                    closeToast: s,
                    message: (0, a.jsxs)('div', {
                        className: A().message,
                        children: [
                            (0, a.jsx)(b.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, a.jsx)(y.t, {
                                className: A().cover,
                                radius: 'round',
                                children: (0, a.jsx)(f.B, { className: A().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, a.jsx)(C.HL, { className: A().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var I = i(7361),
                N = i(90613),
                L = i(3210),
                P = i(11609),
                R = i(79367),
                w = i(40110),
                O = i(20258),
                S = i(34159),
                E = i(30290),
                B = i(29872),
                M = i(56120),
                V = i(87201),
                z = i(83014),
                D = i(44806),
                U = i(55491),
                K = i(44851),
                F = i(14240),
                $ = i(56615),
                H = i(16386),
                W = i(67303),
                q = i(74682),
                Y = i(59043),
                X = i(2144),
                G = i(6304);
            let Z = (0, r.PA)((e) => {
                var t, i, r;
                let { artist: y, onOpenChange: b, open: C, ...T } = e,
                    { shouldShowBuySubscriptionModal: f, showBuySubscriptionModal: k } = (0, B.q)(),
                    {
                        settings: { isMobile: A },
                        modals: { artistAboutModal: Z },
                        trailer: Q,
                        user: J,
                        experiments: ee,
                    } = (0, x.g)(),
                    et = (0, N.A)(y),
                    ei = (0, I.K)(y),
                    ea = ((e) => {
                        let { user: t } = (0, x.g)(),
                            { notify: i } = (0, h.l)(),
                            [r, s] = (0, m.useState)(!1),
                            { formatMessage: l } = (0, n.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, a.jsx)(g.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: p.u.ERROR });
                            if (r) return;
                            let n = { ...(0, _.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let o = await e.toggleDislike();
                            (s(!1),
                                o === v.f.OK
                                    ? i((0, a.jsx)(j, { coverUri: n.coverUri, title: n.name, isDisliked: n.isDisliked }), { containerId: p.u.INFO })
                                    : i((0, a.jsx)(g.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: p.u.ERROR }));
                        });
                    })(y),
                    er = (0, S.F)(),
                    en = ''.concat(w.U.ARTIST, '-').concat(null == y ? void 0 : y.id),
                    { formatMessage: es } = (0, n.A)(),
                    { utmLink: el } = (0, E.f)({ blockId: w.U.ARTIST, contextType: o.K.Artist, contextId: null == y ? void 0 : y.id }),
                    { shareLink: eo, pathname: ec } = (0, F.b)('/artist/:artistId', { params: { artistId: null != (i = null == y ? void 0 : y.id) ? i : '' } }),
                    ed = (0, L.A)({ entityVariant: z.D.ARTIST, urlParams: { id: null == y ? void 0 : y.id } }),
                    { isPlaying: eu, togglePlay: e_ } = (0, V.B)({
                        seeds: null != (r = null == y ? void 0 : y.seeds) ? r : [],
                        pageIdForFrom: O._Q.RADIO,
                        blockIdForFrom: en,
                        parentContextId: null == y ? void 0 : y.id,
                    }),
                    em = (0, R.P)(),
                    ev = es((null == y ? void 0 : y.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ep = (0, c.c)(() => {
                        if (f && J.isAuthorized) return void k();
                        eu || e_();
                    }),
                    eh = (0, c.c)(() => {
                        if (!em()) {
                            if (f) return void k();
                            (null == y ? void 0 : y.id) && (Q.setUtmLink(el), Q.openArtistTrailer(y.id), er(s.DomainObjectType.Artist, y.id));
                        }
                    }),
                    ex = (0, c.c)(() => {
                        Z.open(null == y ? void 0 : y.id);
                    });
                (0, M.N)(C);
                let eg = { variant: U.Y.ARTIST, id: null == y ? void 0 : y.id, title: null == y ? void 0 : y.name, path: ec },
                    ey = ee.checkExperiment(D.z.WebEditorsFeatures, 'on'),
                    eb = null == y || null == (t = y.trailer) ? void 0 : t.isAvailable,
                    eC = ee.checkExperiment(D.z.WebNextArtistInfo, 'on'),
                    eT = !ee.checkExperiment(D.z.WebNextProductWithoutRecommendation, 'on');
                return (0, a.jsxs)(u.W1, {
                    isMobile: A,
                    offsetOptions: 10,
                    open: C,
                    onOpenChange: b,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...T,
                    children: [
                        ey && (0, a.jsx)(G.WithOffline, { fallback: (0, a.jsx)(P.d, { entityVariant: z.D.ARTIST, adminUrl: ed }) }),
                        !A && (0, a.jsx)(G.WithOffline, { fallback: (0, a.jsx)(W.L, { onClick: et, isPinned: null == y ? void 0 : y.isPinned }) }),
                        (0, a.jsx)(G.WithOffline, {
                            fallback: (0, a.jsx)(H.T, {
                                onClick: ei,
                                isLiked: null == y ? void 0 : y.isLiked,
                                disabled: !J.isAuthorized || !(null == y ? void 0 : y.isAvailable),
                            }),
                        }),
                        eb && (0, a.jsx)(G.WithOffline, { fallback: (0, a.jsx)(Y.N, { onClick: eh }) }),
                        eT &&
                            (0, a.jsx)(G.WithOffline, {
                                fallback: (0, a.jsx)(X.C, { onClick: ep, disabled: !(null == y ? void 0 : y.isAvailable), variant: K.I.ARTIST, onOpenMenuChange: b }),
                            }),
                        (0, a.jsx)(q.H, { disabled: !y, shareLink: eo, entityMeta: eg }),
                        eC &&
                            (0, a.jsx)(G.WithOffline, {
                                fallback: (0, a.jsx)(u.Dr, {
                                    onClick: ex,
                                    icon: (0, a.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ev,
                                }),
                            }),
                        (0, a.jsx)(G.WithOffline, {
                            fallback: (0, a.jsx)($.D, { onClick: ea, isDisliked: null == y ? void 0 : y.isDisliked, disabled: !(null == y ? void 0 : y.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        24596: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        27089: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => k });
            var a = i(25839),
                r = i(82298),
                n = i(88204),
                s = i(74631),
                l = i(61493),
                o = i(49656),
                c = i(51246),
                d = i(4254),
                u = i(47009),
                _ = i(26742),
                m = i(52512),
                v = i(97952),
                p = i(87201),
                h = i(27954),
                x = i(5668),
                g = i(41580),
                y = i(49438),
                b = i(75159),
                C = i(10557),
                T = i(1271),
                f = i.n(T);
            let k = (0, n.PA)((e) => {
                let { vibe: t, shouldShowPlayButton: i = !0, shouldShowAdditionals: n = !0, additionalsLinesCount: T = 3, className: k } = e,
                    { pageId: A } = (0, v.$)(),
                    { blockIdForFrom: j } = (0, _.N)(),
                    { ref: I, intersectionPropertyId: N } = (0, m.n)(),
                    { freeAccess: L } = (0, h.g)(),
                    [P, R] = (0, s.useState)(!1),
                    w = (0, b.A)(t),
                    { isPlaying: O, togglePlay: S } = (0, p.B)({ seeds: t.seeds, pageIdForFrom: A, blockIdForFrom: j }),
                    E = (0, u.b)(),
                    B = (0, s.useCallback)(() => {
                        L.isVibeStartRestricted || (S(), E(!O));
                    }, [L.isVibeStartRestricted, S, E, O]),
                    M = (0, s.useCallback)(
                        () =>
                            (0, a.jsx)(
                                y.D,
                                {
                                    className: (0, r.$)(f().playButton, f().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: B,
                                    isPlaying: O,
                                },
                                t.getKey('PlayButton'),
                            ),
                        [t, B, O],
                    ),
                    V = (0, o.L)(() =>
                        (0, a.jsx)(
                            x.S,
                            {
                                isEnabled: L.isVibeStartRestricted,
                                isOpened: P,
                                onOpenChange: R,
                                placement: 'top',
                                textVariant: 'vibe',
                                vibeTextVariant: t.stationType,
                                renderChildren: M,
                            },
                            t.getKey('BuyPlusPopover'),
                        ),
                    ),
                    z = (0, o.L)(() =>
                        (0, a.jsx)(g.O, { onClick: w, isPinned: t.isPinned, className: (0, r.$)(f().pinButton, f().control), withRipple: !1 }, t.getKey('PinButton')),
                    ),
                    D = (0, o.L)(() =>
                        (0, a.jsxs)('div', {
                            className: f().cover,
                            onClick: B,
                            children: [
                                t.agent && (0, a.jsx)(C.s, { agent: t.agent, isPlaying: O }),
                                (0, a.jsx)(c.hg, { isVisible: P, className: f().controls, playControl: i ? V : void 0, pinControl: z }),
                            ],
                        }),
                    );
                return (0, a.jsx)(c.MN, {
                    ref: I,
                    className: (0, r.$)(f().root, k),
                    'data-intersection-property-id': N,
                    contentLinesCount: T,
                    view: D,
                    textPosition: 'center',
                    wrapperClassName: (0, r.$)({ [f().additionals_hide]: !n }),
                    title: (0, a.jsx)(d.HL, { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title }, t.getKey('Title')),
                    description: (0, a.jsx)(
                        d.HL,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: t.description },
                        t.getKey('Description'),
                    ),
                    'data-test-id': l.OA.vibe.VIBE_AGENT_CARD,
                });
            });
        },
        27892: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var a = i(25839),
                r = i(35015),
                n = i(10546);
            let s = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, a.jsx)(n.k, {
                    closeToast: i,
                    entityVariant: r.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        28664: (e) => {
            e.exports = { root: 'TrailerOnboarding_root__I3fd0', text: 'TrailerOnboarding_text__HU4RO', close: 'TrailerOnboarding_close__ywMIK' };
        },
        39058: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => s });
            var a = i(25839),
                r = i(74631),
                n = i(53424);
            let s = (e) => {
                let { tabId: t, tabPos: i, children: s, isTabSelectedByDefault: l } = e,
                    o = (0, r.useMemo)(() => ({ tabId: t, tabPos: i, isTabSelectedByDefault: l }), [t, i, l]);
                return (0, a.jsx)(n.F.Provider, { value: o, children: s });
            };
        },
        41459: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => n });
            var a = i(74631),
                r = i(39004);
            let n = (e) => {
                let { formatMessage: t } = (0, r.A)();
                return (0, a.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let a = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(a, ' ').concat(i);
                }, [t, e]);
            };
        },
        41707: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => J });
            var a = i(25839),
                r = i(82298),
                n = i(88204),
                s = i(74631),
                l = i(39004),
                o = i(44031),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                _ = i(49656),
                m = i(51246),
                v = i(66738),
                p = i(86869),
                h = i(4254),
                x = i(56348),
                g = i(62948),
                y = i(1134),
                b = i(79367),
                C = i(29481),
                T = i(47009),
                f = i(34159),
                k = i(52512),
                A = i(30290),
                j = i(61561),
                I = i(85686),
                N = i(85743),
                L = i(50209),
                P = i(27954),
                R = i(74760),
                w = i(6323),
                O = i(64720),
                S = i(97522),
                E = i(41580),
                B = i(49438),
                M = i(71996),
                V = i(78437),
                z = i(41459),
                D = i(10820),
                U = i(3210),
                K = i(11609),
                F = i(29872),
                $ = i(56120),
                H = i(83014),
                W = i(44806),
                q = i(16386),
                Y = i(67303),
                X = i(59043);
            let G = (0, n.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: r, open: n, ...s } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, F.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: v },
                        trailer: p,
                        user: h,
                    } = (0, P.g)(),
                    x = (0, g.K)(i),
                    C = (0, y.A)(i),
                    T = (0, f.F)(),
                    { formatMessage: k } = (0, l.A)(),
                    A = (0, b.P)(),
                    j = m.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    I = (0, U.A)({ entityVariant: H.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, $.N)(n);
                let N = (0, u.c)(() => {
                    if (d) return void _();
                    A() || (p.openPlaylistTrailer(i.id), T(o.DomainObjectType.Playlist, i.id));
                });
                return (0, a.jsxs)(D.W1, {
                    title: i.title,
                    onOpenChange: r,
                    open: n,
                    offsetOptions: 10,
                    isMobile: v,
                    ariaLabel: k({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...s,
                    children: [
                        j && (0, a.jsx)(K.d, { entityVariant: H.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : I }),
                        !v && (0, a.jsx)(Y.L, { onClick: C, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, a.jsx)(q.T, { onClick: x, isLiked: i.isLiked, disabled: !h.isAuthorized }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, a.jsx)(X.N, { onClick: N, disabled: !i.isAvailable }),
                    ],
                });
            });
            var Z = i(15787),
                Q = i.n(Z);
            let J = (0, n.PA)((e) => {
                let { className: t, playlist: i, children: n, contentLinesCount: D, customDescription: U, onCoverMouseDown: K } = e,
                    { ref: F, intersectionPropertyId: $ } = (0, k.n)(),
                    {
                        trailer: H,
                        user: W,
                        paywall: { modal: q },
                    } = (0, P.g)(),
                    { from: Y, utmLink: X } = (0, A.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: Z } = (0, l.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, N.z)(),
                    [ei, ea] = (0, s.useState)(!1),
                    [er, en] = (0, s.useState)(!1),
                    [es, el] = (0, s.useState)(!1),
                    eo = (0, z.r)(i),
                    ec = (0, g.K)(i),
                    ed = (0, y.A)(i),
                    eu = (0, C.N)(),
                    e_ = (0, T.b)(),
                    em = (0, I.Z)(i.url),
                    ev = (0, f.F)(),
                    ep = (0, b.P)(),
                    eh = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        (H.setUtmLink(X), H.openPlaylistTrailer(i.id), ev(o.DomainObjectType.Playlist, i.id));
                    }),
                    [ex, eg] = (0, s.useState)(!1),
                    { isPlaying: ey, togglePlay: eb } = (0, L.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: Y, utmLink: X }, loadContextMeta: !0 },
                    }),
                    eC = (0, u.c)(() => {
                        (eu({ to: o.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eT = (0, u.c)((e) => {
                        (eC(), em(e));
                    }),
                    ef = (0, j.N)(),
                    ek = (0, u.c)(() => {
                        if (!ep()) {
                            if (ef) return void q.open();
                            (ei || ey || (ea(!0), null == et || et()), eb(), e_(!ey));
                        }
                    }),
                    eA = (0, u.c)(() => {
                        (er || i.isLiked || (en(!0), null == J || J()), ec());
                    }),
                    ej = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eI = (0, u.c)((e) => {
                        (el(e), eg(e));
                    }),
                    eN = (0, s.useMemo)(() => {
                        var e;
                        return U
                            ? (0, a.jsx)(h.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: U }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, a.jsx)(
                                    x.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [U, i]),
                    eL = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, a.jsx)(
                                O.c,
                                {
                                    className: (0, r.$)(Q().likeButton, Q().control),
                                    isLiked: i.isLiked,
                                    onClick: eA,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !W.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eP = (0, s.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                V.n,
                                {
                                    children: (0, a.jsx)(
                                        M.k,
                                        { className: (0, r.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eh },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eh, i]),
                    eR = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(
                                E.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, r.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    ew = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(p.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: eT,
                                    onMouseDown: K,
                                    children: [
                                        (0, a.jsx)(w.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, a.jsx)(m.hg, {
                                            isVisible: es || ex,
                                            className: Q().controls,
                                            playControl: (0, a.jsx)(
                                                B.D,
                                                {
                                                    className: (0, r.$)(Q().playButton, Q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: ek,
                                                    isPlaying: ey,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eL,
                                            menuControl: (0, a.jsx)(
                                                G,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eI,
                                                    open: es,
                                                    onClick: ej,
                                                    className: (0, r.$)(Q().menuButton, Q().control),
                                                    icon: (0, a.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eR,
                                            trailerControl: eP,
                                        }),
                                    ],
                                }),
                            }),
                        [eT, K, i, eo, es, ex, ek, ey, eL, eI, ej, eR, eP],
                    ),
                    eO = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, a.jsxs)(m.MN, {
                    ref: F,
                    'aria-label': eo,
                    className: (0, r.$)(Q().root, t),
                    title: (0, a.jsx)(h.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, a.jsx)(S.N, { className: Q().titleLink, href: i.url, tabIndex: -1, onClick: eC, children: i.title }),
                    }),
                    srTitle: (0, a.jsx)(S.N, { className: Q().srTitleLink, href: i.url, onClick: eC, children: i.title }),
                    'data-intersection-property-id': $,
                    contentLinesCount: D,
                    view: ew,
                    description: eN,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eO &&
                            (0, a.jsx)(R.x, {
                                ariaLabel: Z({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        n,
                    ],
                });
            });
        },
        42190: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var a = i(25839),
                r = i(35015),
                n = i(3163);
            let s = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, a.jsx)(n.O, {
                    entityVariant: r.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        49337: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var a = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        49807: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => x });
            var a = i(25839),
                r = i(88204),
                n = i(74631),
                s = i(44031),
                l = i(98436),
                o = i(76939),
                c = i(84058),
                d = i(41707),
                u = i(27089),
                _ = i(61777),
                m = i(95314),
                v = i(89514),
                p = i(66284);
            let h = (0, r.PA)((e) => {
                    var t;
                    let {
                            forwardRef: i,
                            isShimmerVisible: r,
                            isShimmerActive: h,
                            containerClassName: x,
                            headerClassName: g,
                            meta: y,
                            data: b,
                            headingVariant: C,
                            className: T,
                            isLoaded: f,
                            shouldSendAnalyticsOnLoaded: k,
                            hasSentAnalyticsOnLoaded: A,
                            setHasSentAnalyticsOnLoaded: j,
                            ...I
                        } = e,
                        N = (0, _.f)();
                    return (
                        (0, n.useEffect)(() => {
                            k && !A && f && (N(), j(!0));
                        }, [A, f, N, j, k]),
                        (0, a.jsx)(p.O, {
                            className: T,
                            ...I,
                            isShimmerVisible: r,
                            isShimmerActive: h,
                            containerClassName: x,
                            headerClassName: g,
                            title: y.title,
                            description: y.description,
                            viewAllActionLink: y.viewAllActionLink,
                            ref: i,
                            headingVariant: C,
                            children:
                                null == b || null == (t = b.items)
                                    ? void 0
                                    : t.map((e, t) => {
                                          switch (e.type) {
                                              case l._.LIKED_PLAYLIST_ITEM:
                                                  return (0, a.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Playlist,
                                                          objectId: e.data.id,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: b.items.length,
                                                          children: (0, a.jsx)(d.B, { playlist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.key,
                                                  );
                                              case l._.ALBUM_ITEM:
                                                  return (0, a.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Album,
                                                          objectId: String(e.data.id),
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: b.items.length,
                                                          children: (0, a.jsx)(o.a, { album: e.data, contentLinesCount: 3, releaseDateFormatter: v.m }),
                                                      },
                                                      e.data.id,
                                                  );
                                              case l._.ARTIST_ITEM:
                                                  return (0, a.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Artist,
                                                          objectId: String(e.data.id),
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: b.items.length,
                                                          children: (0, a.jsx)(c.a, { artist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.id,
                                                  );
                                              case l._.WAVE_AGENT_ITEM:
                                                  return (0, a.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Wave,
                                                          objectId: e.data.stationId,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: b.items.length,
                                                          children: (0, a.jsx)(u.y, { vibe: e.data }),
                                                      },
                                                      e.data.stationId,
                                                  );
                                              case l._.PLAYLIST_ITEM:
                                                  return (0, a.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Playlist,
                                                          objectId: e.data.id,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: b.items.length,
                                                          children: (0, a.jsx)(d.B, { playlist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.key,
                                                  );
                                              case l._.QUERY_TO_VIBE_ITEM:
                                                  return (0, a.jsx)(n.Fragment, {}, e.data.stationId);
                                          }
                                      }),
                        })
                    );
                }),
                x = (0, n.forwardRef)((e, t) => (0, a.jsx)(h, { forwardRef: t, ...e }));
        },
        50314: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { h: () => a }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(a || (a = {})));
        },
        57138: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => s });
            var a = i(25839),
                r = i(74631),
                n = i(14482);
            let s = (e) => {
                let {
                        blockId: t,
                        blockType: i,
                        blockIdForFrom: s,
                        blockPosX: l,
                        blockPosY: o,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: _,
                        displayReasonId: m,
                    } = e,
                    v = (0, r.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: i,
                            blockIdForFrom: s,
                            blockPosX: l,
                            blockPosY: o,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: m,
                        }),
                        [t, i, s, l, o, c, d, u, m],
                    );
                return (0, a.jsx)(n.p.Provider, { value: v, children: _ });
            };
        },
        62948: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var a = i(25839),
                r = i(33660),
                n = i(74631),
                s = i(39004),
                l = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                _ = i(42190);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, v] = (0, n.useState)(!1),
                    { formatMessage: p } = (0, s.A)();
                return (0, n.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, a.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let n = { ...(0, r.HO)(e), url: e.url, isLiked: !e.isLiked };
                    v(!0);
                    let s = await e.toggleLike();
                    (v(!1),
                        s === l.f.OK
                            ? i((0, a.jsx)(_.T, { playlist: n }), { containerId: o.u.INFO })
                            : i((0, a.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, m, e, p, i]);
            };
        },
        63149: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var a = i(25839),
                r = i(53712),
                n = i(35015),
                s = i(3163);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, a.jsx)(s.O, {
                    closeToast: i,
                    entityVariant: n.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: r.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        66284: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => y });
            var a = i(25839),
                r = i(82298),
                n = i(74631),
                s = i(89288),
                l = i(44031),
                o = i(49656),
                c = i(5365),
                d = i(23976),
                u = i(26742),
                _ = i(95314),
                m = i(18412),
                v = i(80986),
                p = i(95388),
                h = i(99024),
                x = i.n(h);
            let g = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: i,
                            isShimmerVisible: h,
                            isShimmerActive: g,
                            isShimmerWithSubcover: y,
                            isShimmerCentered: b,
                            isShimmerRounded: C,
                            title: T,
                            description: f,
                            coverUrl: k,
                            viewAllActionLink: A,
                            titleChildren: j,
                            headerChildren: I,
                            children: N,
                            className: L,
                            containerClassName: P,
                            headerClassName: R,
                            itemClassName: w,
                            showHeaderShimmer: O = !1,
                            showShimmerInfo: S = !0,
                            showControls: E = !0,
                            headingRef: B,
                            headingVariant: M,
                            customShimmer: V,
                            ...z
                        } = e,
                        D = (0, n.useId)(),
                        U = (0, n.useRef)(null),
                        { objectsCount: K } = (0, u.N)(),
                        F = (0, n.useMemo)(
                            () =>
                                O && h
                                    ? (0, a.jsx)('div', { className: R, children: (0, a.jsx)(d.W, { isActive: g, className: x().shimmerTitle, radius: 'l' }) })
                                    : T || f || j || I
                                      ? (0, a.jsx)(_.B, {
                                            objectType: l.DomainObjectType.Shortcut,
                                            objectId: String(A),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != K ? K : 0,
                                            children: (0, a.jsx)(m.T, {
                                                className: R,
                                                labeledForId: D,
                                                title: T,
                                                description: f,
                                                coverUrl: k,
                                                viewAllActionLink: A,
                                                controls: E && (0, a.jsx)(v.X, { className: x().controls, carouselRef: U }),
                                                headingRef: B,
                                                headingVariant: M,
                                                withDescription: !!f,
                                                titleChildren: j,
                                                children: I,
                                            }),
                                        })
                                      : void 0,
                            [k, f, R, B, M, D, g, h, K, E, O, T, j, I, A],
                        ),
                        $ = (0, o.L)(() => V || (0, p.k)({ className: i, isActive: g, withInfo: S, withSubcover: y, centered: b, round: C }));
                    return (0, a.jsxs)('section', {
                        ref: t,
                        className: (0, r.$)(x().root, L),
                        ...(0, s.OZ)(z),
                        children: [
                            F,
                            (0, a.jsx)(c.F, {
                                className: P,
                                ref: U,
                                itemClassName: (0, r.$)(x().item, x().important, w),
                                'aria-labelledby': ''.concat(D, ' ').concat(D, '-description'),
                                children: h ? $ : N,
                            }),
                        ],
                    });
                },
                y = (0, n.forwardRef)((e, t) => (0, a.jsx)(g, { forwardRef: t, ...e }));
        },
        72720: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => c });
            var a = i(25839),
                r = i(82298),
                n = i(88204),
                s = i(74631),
                l = i(94572),
                o = i.n(l);
            let c = (0, n.PA)((e) => {
                let {
                        className: t,
                        text: i = '',
                        maxTextLength: n,
                        minTextLength: l,
                        variant: c = 'input',
                        shouldFinishOnKeyPress: d = !1,
                        placeholder: u,
                        onChangeFinish: _,
                        withOutline: m = !1,
                        readOnly: v = !1,
                        'aria-label': p,
                        'data-test-id': h,
                    } = e,
                    [x, g] = (0, s.useState)(i),
                    y = (0, s.useRef)(!1),
                    b = (0, s.useRef)(null),
                    C = (0, s.useCallback)((e) => {
                        g(e.target.value);
                    }, []),
                    T = (0, s.useCallback)(
                        (e) => {
                            if (d && ['Enter', 'Escape'].includes(e.key)) {
                                var t;
                                ('Escape' === e.key && (y.current = !0), null == (t = e.currentTarget) || t.blur());
                            }
                        },
                        [d],
                    ),
                    f = (0, s.useCallback)(() => {
                        let e = x.trim();
                        y.current || (l && e.length < l) ? ((y.current = !1), null == _ || _(i)) : null == _ || _(e);
                    }, [x, y, l, _, i]);
                ((0, s.useEffect)(() => {
                    b.current && ((b.current.selectionStart = b.current.value.length), (b.current.selectionEnd = b.current.value.length));
                }, []),
                    (0, s.useLayoutEffect)(() => {
                        let e = b.current;
                        if (e) {
                            e.style.height = '0px';
                            let t = e.scrollHeight;
                            e.style.height = ''.concat(t, 'px');
                        }
                    }, [b, x]));
                let k = (0, s.useMemo)(() => ('textarea' === c ? (e) => (0, a.jsx)('textarea', { ref: b, rows: 6, ...e }) : (e) => (0, a.jsx)('input', { ...e })), [c]);
                return (0, a.jsx)(k, {
                    className: (0, r.$)(o().root, t, { [o().root_textarea]: 'textarea' === c, [o().root_outline]: m }),
                    type: 'text',
                    value: x,
                    readOnly: v,
                    maxLength: n,
                    onBlur: f,
                    onChange: C,
                    onKeyDown: T,
                    placeholder: u,
                    'aria-label': p,
                    autoFocus: !0,
                    'data-test-id': h,
                });
            });
        },
        73544: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => a });
            let a = (e) => ({ uri: e.uri, color: e.color });
        },
        75159: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => j });
            var a = i(25839),
                r = i(33660),
                n = i(74631),
                s = i(39004),
                l = i(98436),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                _ = i(82298),
                m = i(88204),
                v = i(61493),
                p = i(49656),
                h = i(23818),
                x = i(44806),
                g = i(51514),
                y = i(35015),
                b = i(10546),
                C = i(86209),
                T = i(97779),
                f = i.n(T);
            let k = (0, m.PA)((e) => {
                let { vibe: t, closeToast: i } = e,
                    { experiments: r } = (0, d.g)(),
                    n = r.checkExperiment(x.z.WebNextWaveAgentExperiment, 'on'),
                    s = t.type === g.q7,
                    l = (0, p.L)(() => {
                        var e;
                        return n && t.agent
                            ? (0, a.jsx)(C.n, {
                                  agent: t.agent,
                                  shouldShowControl: !1,
                                  className: (0, _.$)(f().view, { [f().multivibeContainer]: s }),
                                  coverClassName: (0, _.$)({ [f().multivibeCover]: s }),
                                  entityCoverClassName: (0, _.$)({ [f().multivibeAvatar]: s }),
                                  controlClassName: (0, _.$)({ [f().multivibeControl]: s }),
                              })
                            : (0, a.jsx)(h._V, {
                                  className: f().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  'data-test-id': v.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                              });
                    }),
                    o = n && t.agent ? void 0 : 'round';
                return (0, a.jsx)(b.k, {
                    closeToast: i,
                    entityVariant: y.c.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: l,
                    radius: o,
                    className: f().root,
                });
            });
            var A = i(19966);
            let j = (e) => {
                let { user: t, pinsCollection: i } = (0, d.g)(),
                    { notify: _ } = (0, c.l)(),
                    { formatMessage: m } = (0, s.A)(),
                    [v, p] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void _((0, a.jsx)(u.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (v) return;
                    let n = { ...(0, r.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        s = (0, r.HO)(i.get(e.pinId));
                    p(!0);
                    let c = await e.togglePin();
                    (p(!1),
                        s &&
                            s.type === l._.WAVE_ITEM &&
                            s.data.backgroundImageUrl &&
                            ((n.backgroundImageUrl = s.data.backgroundImageUrl), (n.colors = s.data.colors), (n.agent = s.data.agent)),
                        c &&
                            'object' == typeof c &&
                            'data' in c &&
                            (c.data.backgroundImageUrl && (n.backgroundImageUrl = c.data.backgroundImageUrl),
                            c.data.colors && (n.colors = { average: c.data.colors.average, waveText: c.data.colors.waveText }),
                            c.data.agent && (n.agent = (0, A.K)(c.data.agent))),
                        c
                            ? _((0, a.jsx)(k, { vibe: n }), { containerId: o.u.INFO })
                            : _((0, a.jsx)(u.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [m, _, v, i, t.isAuthorized, e]);
            };
        },
        75167: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => r, w: () => n });
            var a = i(74631);
            let r = (0, a.createContext)({ config: [], isOnboardingOpened: null, setIsOnboardingOpened: () => {} }),
                n = () => (0, a.useContext)(r);
        },
        77737: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => A });
            var a = i(25839),
                r = i(82298),
                n = i(88204),
                s = i(84059),
                l = i(74631),
                o = i(39004),
                c = i(61493),
                d = i(49656),
                u = i(3392),
                _ = i(4254),
                m = i(56348),
                v = i(85743),
                p = i(27954),
                h = i(19410),
                x = i(12929),
                g = i(32652),
                y = i(97522),
                b = i(40846),
                C = i(61755),
                T = i(87221),
                f = i(12752),
                k = i.n(f);
            let A = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: n,
                        albumArtists: f,
                        withExplicitMark: A,
                        withSecondaryColor: j,
                        captionSize: I = 'm',
                        explicitSize: N = 'xxxs',
                        withAllArtistsTitle: L,
                        textClassName: P,
                        artistsClassName: R,
                        ignoreDislikedStyles: w,
                        withCustomTooltip: O = !0,
                        hasLineClamp: S = !0,
                        withSavingQueryParams: E,
                        beforeTitle: B,
                        withArtistLink: M,
                        variant: V,
                        withTrackLink: z,
                        afterTitle: D,
                        withContextMenuArtists: U,
                    } = e,
                    { formatMessage: K } = (0, o.A)(),
                    { sendNavigateSearchFeedback: F } = (0, v.z)(),
                    {
                        settings: { isMobile: $ },
                        slam: H,
                    } = (0, p.g)(),
                    W = (0, C.$)({ withCustomTooltip: O }),
                    q = (0, s.useSearchParams)(),
                    Y = (0, b.B)(n, {
                        isMobile: $,
                        isOfflineModeEnabled: H.isOfflineModeEnabled,
                        albumArtists: f,
                        withTrackLink: z,
                        withArtistLink: M,
                        variant: V,
                        withExplicitMark: A,
                        query: E ? Object.fromEntries(q) : void 0,
                    }),
                    {
                        displayTitle: X,
                        ariaLabel: G,
                        tooltipText: Z,
                        titleAttribute: Q,
                        versionTitleAttribute: J,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, a) => {
                        var r, n;
                        let { canEnableCustomTooltip: s, isMobile: l } = i,
                            o = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, a),
                            c = t.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (r = t.version) ? r : ''),
                            d = a({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(d, ' ').concat(null != (n = e.version) ? n : ''),
                            tooltipText: c,
                            isTooltipEnabled: s && !l,
                            titleAttribute: !s && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: s ? void 0 : t.version,
                        };
                    })(n, Y, { canEnableCustomTooltip: W, isMobile: $ }, K),
                    et = (0, T.O)({ track: n, onNavigate: F, withSavingQueryParams: E, entityType: x.n.TRACK }),
                    ei = (0, l.useCallback)(
                        (e) =>
                            (0, a.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Z,
                                hoverSettings: h.V,
                                children: (0, a.jsx)(_.HL, {
                                    className: (0, r.$)(k().text, k().title),
                                    type: 'entity',
                                    size: I,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: X,
                                }),
                            }),
                        [I, X, Z, ee],
                    ),
                    ea = (0, d.L)(() =>
                        Y.shouldShowRemovedTitle
                            ? (0, a.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Z,
                                  hoverSettings: h.V,
                                  children: (0, a.jsx)(_.HL, {
                                      className: (0, r.$)(k().text, k().title),
                                      type: 'entity',
                                      size: I,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Q,
                                      children: X,
                                  }),
                              })
                            : Y.link
                              ? (0, a.jsx)(y.N, {
                                    onClick: et,
                                    className: k().albumLink,
                                    href: Y.link.href,
                                    'aria-label': G,
                                    title: Q,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    er = (0, l.useMemo)(() => +!!S, [S]);
                return (0, a.jsx)('div', {
                    className: (0, r.$)(k().root, { [k().root_disabled]: !n.isAvailable, [k().root_disliked]: n.isDisliked && !w, [k().root_withSecondaryColor]: j }, t),
                    children: (0, a.jsxs)('div', {
                        className: k().metaContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(k().titleContainer, { [k().titleContainer_withVersion]: n.version }, i),
                                children: [
                                    (0, a.jsxs)(_.HL, {
                                        className: (0, r.$)(k().text, P),
                                        type: 'entity',
                                        size: I,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            B,
                                            ea,
                                            Y.version &&
                                                (0, a.jsxs)(_.HL, {
                                                    className: (0, r.$)(k().text, k().version),
                                                    type: 'entity',
                                                    size: I,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: J,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', Y.version],
                                                }),
                                        ],
                                    }),
                                    Y.explicitMark &&
                                        (0, a.jsx)(g.N, {
                                            containerClassName: k().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: N,
                                            variant: Y.explicitMark,
                                            className: k().explicitMark,
                                            trackId: n.id,
                                        }),
                                    D,
                                ],
                            }),
                            Y.artists.length > 0 &&
                                (0, a.jsx)(m.i, {
                                    className: (0, r.$)(k().text, { [k().artists]: S }, R, P),
                                    withAllArtistsTitle: L,
                                    linkClassName: (0, r.$)(k().text, k().link),
                                    captionClassName: (0, r.$)(k().text, k().artistCaption),
                                    artists: Y.artists,
                                    withLink: Y.withArtistLink,
                                    lineClamp: er,
                                    captionSize: I,
                                    withContextMenu: U,
                                }),
                        ],
                    }),
                });
            });
        },
        79497: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => n });
            var a = i(28410),
                r = i(73544);
            let n = (e) => {
                let t = (0, r.e)(e);
                return (0, a.wg)(t);
            };
        },
        80477: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var a = i(25839),
                r = i(35015),
                n = i(10546);
            let s = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, a.jsx)(n.k, {
                    closeToast: i,
                    entityVariant: r.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        83243: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => m });
            var a = i(74631),
                r = i(67379),
                n = i(44031),
                s = i(87277),
                l = i(59450),
                o = i(71035),
                c = i(84e3),
                d = i(79670),
                u = i(97952),
                _ = i(72594);
            let m = (e) => {
                let { mainObjectType: t } = e,
                    i = (0, a.useRef)(!1),
                    m = (0, a.useRef)(!1),
                    v = (0, l.st)(),
                    p = (0, c.U)(),
                    { hash: h } = (0, l.gf)(),
                    { pageId: x, pageEntityId: g, pageStyle: y, pagePlacement: b } = (0, u.$)(),
                    { tabId: C, tabPos: T, isTabSelectedByDefault: f } = (0, _.R)();
                return (0, o.c)((e) => {
                    if (!v || !x || 'string' != typeof g) return;
                    let a = {
                        hash: h,
                        pageId: d.W[x],
                        pageStyle: y || n.PageStyles.Fullscreen,
                        pagePlacement: b || n.PagePlacements.Fullscreen,
                        mainObjectType: t,
                        mainObjectId: g,
                    };
                    void 0 !== C && ((a.tabId = C), (a.tabPos = T), (a.isTabSelectedByDefault = f));
                    let l = (0, r.F)({ params: a, logger: p, context: 'useSendEventOnScreenOpenedOrClosed' });
                    l && (e && !i.current && ((0, s.w5)(v.evgenInstance, l), (i.current = !0)), e || m.current || ((0, s.XB)(v.evgenInstance, l), (m.current = !0)));
                });
            };
        },
        84058: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => U });
            var a = i(25839),
                r = i(82298),
                n = i(88204),
                s = i(74631),
                l = i(39004),
                o = i(44031),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                _ = i(49656),
                m = i(51246),
                v = i(66738),
                p = i(86869),
                h = i(4254),
                x = i(1797),
                g = i(7361),
                y = i(90613),
                b = i(79367),
                C = i(29481),
                T = i(47009),
                f = i(34159),
                k = i(52512),
                A = i(30290),
                j = i(61561),
                I = i(85686),
                N = i(85743),
                L = i(50209),
                P = i(27954),
                R = i(6323),
                w = i(64720),
                O = i(97522),
                S = i(41580),
                E = i(49438),
                B = i(71996),
                M = i(78437),
                V = i(21971),
                z = i(13936),
                D = i.n(z);
            let U = (0, n.PA)((e) => {
                let { artist: t, className: i, children: n, contentLinesCount: z, topTitleElement: U, bottomTitleElement: K } = e,
                    { ref: F, intersectionPropertyId: $ } = (0, k.n)(),
                    {
                        trailer: H,
                        user: W,
                        paywall: { modal: q },
                    } = (0, P.g)(),
                    { from: Y, utmLink: X } = (0, A.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: G } = (0, l.A)(),
                    [Z, Q] = (0, s.useState)(!1),
                    [J, ee] = (0, s.useState)(!1),
                    [et, ei] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: ea, sendNavigateSearchFeedback: er, sendPlaySearchFeedback: en } = (0, N.z)(),
                    es = (0, C.N)(),
                    el = (0, T.b)(),
                    eo = (0, g.K)(t),
                    ec = (0, y.A)(t),
                    { id: ed, name: eu, coverUri: e_, isLiked: em } = t,
                    ev = (0, I.Z)(t.url),
                    [ep, eh] = (0, s.useState)(!1),
                    ex = (0, f.F)(),
                    eg = (0, b.P)(),
                    ey = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eg())) return void e.preventDefault();
                        (H.openArtistTrailer(t.id), ex(o.DomainObjectType.Artist, t.id));
                    }),
                    eb = (0, s.useMemo)(() => {
                        let e = G({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = em ? G({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, em, G]),
                    { isPlaying: eC, togglePlay: eT } = (0, L.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: Y, utmLink: X }, loadContextMeta: !0 },
                    }),
                    ef = (0, x.S)({ artist: t, callback: ev }),
                    ek = (0, x.S)({ artist: t, callback: eT }),
                    eA = (0, u.c)((e) => {
                        (null == er || er(), es({ to: o.AppScreen.ArtistScreen }), ef(e));
                    }),
                    ej = (0, j.N)(),
                    eI = (0, u.c)(() => {
                        if (!eg()) {
                            if (ej) return void q.open();
                            (Z || eC || (Q(!0), null == en || en()), ek(), el(!eC));
                        }
                    }),
                    eN = (0, u.c)(() => {
                        (J || em || (ee(!0), null == ea || ea()), eo());
                    }),
                    eL = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eP = (0, u.c)((e) => {
                        (ei(e), eh(e));
                    }),
                    eR = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(
                                V.g,
                                {
                                    artist: t,
                                    onOpenChange: eP,
                                    open: et,
                                    onClick: eL,
                                    className: (0, r.$)(D().menuButton, D().control),
                                    size: 's',
                                    icon: (0, a.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eL, eP, et],
                    ),
                    ew = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                M.n,
                                {
                                    children: (0, a.jsx)(B.k, {
                                        className: (0, r.$)(D().trailerButton, D().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ey,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ey]),
                    eO = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(
                                S.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, r.$)(D().pinButton, D().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eS = (0, _.L)(() => {
                        if (t.isAvailable)
                            return (0, a.jsx)(
                                m.hg,
                                {
                                    isVisible: et || ep,
                                    className: D().controls,
                                    radius: 'round',
                                    playControl: (0, a.jsx)(
                                        E.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, r.$)(D().playButton, D().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eI,
                                            isPlaying: eC,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, a.jsx)(
                                        w.c,
                                        {
                                            className: (0, r.$)(D().likeButton, D().control),
                                            isLiked: em,
                                            onClick: eN,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !W.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eR,
                                    pinControl: eO,
                                    trailerControl: ew,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eE = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(p.t, {
                                className: D().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: D().coverBlock,
                                    onClick: eA,
                                    children: [
                                        (0, a.jsx)(R.B, {
                                            className: D().image,
                                            src: e_,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eb,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eS,
                                    ],
                                }),
                            }),
                        [eA, e_, eb, t.isAvailable, eS],
                    );
                return (0, a.jsx)(m.MN, {
                    ref: F,
                    className: (0, r.$)(D().root, i),
                    textPosition: 'center',
                    'aria-label': eb,
                    title: (0, a.jsxs)(a.Fragment, {
                        children: [
                            U,
                            (0, a.jsx)(h.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, a.jsx)(O.N, {
                                    className: D().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eb,
                                    onClick: eA,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            K,
                        ],
                    }),
                    srTitle: (0, a.jsx)(O.N, { className: D().srTitleLink, href: t.url, onClick: eA, children: eb }),
                    'data-intersection-property-id': $,
                    contentLinesCount: z,
                    view: eE,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: n,
                });
            });
        },
        86209: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => d });
            var a = i(25839),
                r = i(82298),
                n = i(50314),
                s = i(49656),
                l = i(6349),
                o = i(4111),
                c = i.n(o);
            let d = (e) => {
                let {
                        agent: t,
                        isPlaying: i,
                        isCurrent: o,
                        onPlayButtonClick: d,
                        shouldShowControl: u = !0,
                        playButtonIconSize: _,
                        alt: m,
                        className: v,
                        coverClassName: p,
                        entityCoverClassName: h,
                        controlClassName: x,
                        fallbackIconSize: g,
                    } = e,
                    y = (0, s.L)(() => {
                        if (t.entityType) return t.entityType === n.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, a.jsx)(l.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, r.$)(c().root, c()['root_radius_'.concat(y)], { [c().root_withShadow]: !!t.entityType }, v),
                    radius: y,
                    onPlayButtonClick: d,
                    isPlaying: i,
                    isCurrent: o,
                    alt: m,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: _,
                    fallbackIconSize: g,
                    coverClassName: p,
                    entityCoverClassName: h,
                    controlClassName: x,
                });
            };
        },
        90613: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var a = i(25839),
                r = i(33660),
                n = i(74631),
                s = i(39004),
                l = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(80477);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, s.A)(),
                    [m, v] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (m) return;
                    let n = { ...(0, r.HO)(e), isPinned: !e.isPinned };
                    v(!0);
                    let s = await e.togglePin();
                    (v(!1),
                        s
                            ? i((0, a.jsx)(u.l, { artist: n }), { containerId: l.u.INFO })
                            : i((0, a.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, m, _, i]);
            };
        },
        91062: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => a });
            var a = (function (e) {
                return ((e.ARTIST_DONATION_BUTTON = 'artist_donation_button'), (e.TRAILER_BUTTON = 'trailer_button'), (e.CONCERTS_TAB = 'concerts_tab'), e);
            })({});
        },
        94572: (e) => {
            e.exports = { root: 'TextField_root__RO2Hk', root_textarea: 'TextField_root_textarea__N0PF_', root_outline: 'TextField_root_outline__8JfQF' };
        },
        95388: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => n });
            var a = i(25839),
                r = i(19412);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, i) => (0, a.jsx)(r.V, { ...e }, i));
            };
        },
        95858: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => o });
            var a = i(25839),
                r = i(74631),
                n = i(59342),
                s = i(91886),
                l = i(13232);
            let o = (e) => {
                let { children: t } = e,
                    i = (0, r.useRef)({}),
                    o = (0, r.useRef)(
                        (0, s.Gv)(
                            (e) => {
                                let t = (0, s.L5)(e.target),
                                    a = i.current[t];
                                if (a) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, n.A)());
                                            (a.callback(!0, e), (a.showed = !0), (a.viewUuid = e));
                                        }, 1e3);
                                        a.timerId = e;
                                    }
                                    (!e.isIntersecting && a.showed && (a.callback(!1, a.viewUuid), (a.showed = !1), (a.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(a.timerId));
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    c = (0, r.useCallback)((e) => {
                        var t;
                        !i.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = o.current) || t.observe(e.elementRef.current), (i.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    d = (0, r.useCallback)((e) => {
                        let t = i.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete i.current[e]);
                    }, []);
                (0, r.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = o.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, r.useMemo)(() => ({ observeElement: c, unobserveElement: d }), [c, d]);
                return (0, a.jsx)(l.B.Provider, { value: u, children: t });
            };
        },
        95924: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => b });
            var a = i(25839),
                r = i(88204),
                n = i(74631),
                s = i(39004),
                l = i(8487),
                o = i(68934),
                c = i(4071),
                d = i(66738),
                u = i(3392),
                _ = i(4254),
                m = i(89192),
                v = i(91062),
                p = i(8900),
                h = i(75167),
                x = i(28664),
                g = i.n(x);
            let y = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                b = (0, r.PA)((e) => {
                    let { children: t, customMessage: i, shouldForceOpenTooltip: r } = e,
                        { formatMessage: x } = (0, s.A)(),
                        { contentRef: b } = (0, m.g)(),
                        { setIsOnboardingOpened: C } = (0, h.w)(),
                        [T, f] = (0, o.d)(),
                        k = (0, p.z)({ id: v.h.TRAILER_BUTTON, ref: T }) || !!r,
                        [A, j] = (0, n.useState)(k),
                        I = (0, n.useCallback)(
                            (e) => {
                                (null == e || e.stopPropagation(), j(!1), C(!1));
                            },
                            [C],
                        ),
                        N = (0, n.useCallback)(
                            (e) => {
                                e || I();
                            },
                            [I],
                        );
                    return (0, a.jsxs)(u.m_, {
                        placement: 'bottom',
                        arrowProps: y,
                        offsetOptions: 14,
                        isHoverEnabled: !1,
                        open: A,
                        onOpenChange: N,
                        enableAriaDescribedby: !0,
                        referenceRef: f,
                        children: [
                            t,
                            (0, a.jsxs)(u.ZI, {
                                className: g().root,
                                rootNode: b,
                                children: [
                                    (0, a.jsx)(c.$, {
                                        icon: (0, a.jsx)(d.I, { variant: 'close', size: 'xxs' }),
                                        onClick: I,
                                        variant: 'text',
                                        className: g().close,
                                        withRipple: !1,
                                        'aria-label': x({ id: 'interface-actions.close' }),
                                    }),
                                    (0, a.jsx)(_.HL, {
                                        variant: 'span',
                                        className: g().text,
                                        children: i || (0, a.jsx)(l.A, { id: 'onboarding.trailer', values: { br: (0, a.jsx)('br', {}) } }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
        },
        96618: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => r, W: () => n });
            var a = i(74631);
            let r = (0, a.createContext)({ theme: null, setTheme: () => {} }),
                n = () => (0, a.useContext)(r);
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
        98436: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { _: () => a }),
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
                })(a || (a = {})));
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
]);
