(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8062],
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
        8254: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        15270: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => h });
            var r = n(25839),
                l = n(82298),
                o = n(88204),
                i = n(74631),
                s = n(39004),
                a = n(61493),
                c = n(71035),
                u = n(4071),
                d = n(66738),
                g = n(20583),
                p = n(65610),
                m = n.n(p);
            let h = (0, o.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: o = !0,
                        className: p,
                        withBackwardFallback: h,
                        buttonSize: v = 'xxs',
                    } = e,
                    { formatMessage: y } = (0, s.A)(),
                    { canBack: f, canForward: _, moveBack: E, moveForward: S } = (0, g.J)(h),
                    N = (0, i.useRef)(null),
                    x = (0, c.c)((e) => {
                        (e.stopPropagation(), E());
                    }),
                    P = (0, c.c)((e) => {
                        (e.stopPropagation(), S());
                    });
                return (
                    (0, i.useEffect)(() => {
                        o && N.current && f && N.current.focus();
                    }, [f]),
                    (0, r.jsxs)('div', {
                        className: (0, l.$)(m().root, p),
                        'data-test-id': a.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, r.jsx)(u.$, {
                                    ref: N,
                                    'aria-label': y({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !f,
                                    size: v,
                                    icon: (0, r.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: x,
                                    'data-test-id': a.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, r.jsx)(u.$, {
                                    'aria-label': y({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !_,
                                    size: v,
                                    icon: (0, r.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: P,
                                    'data-test-id': a.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        16714: (e, t, n) => {
            'use strict';
            n.d(t, { MainSuspenseLoader: () => s });
            var r = n(25839),
                l = n(66738),
                o = n(8254),
                i = n.n(o);
            let s = (e) => {
                let { style: t } = e,
                    n = {
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
                return (0, r.jsx)('div', {
                    style: n,
                    children: (0, r.jsx)(l.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: i().icon,
                    }),
                });
            };
        },
        16978: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => p });
            var r = n(25839),
                l = n(84059),
                o = n(8487),
                i = n(61493),
                s = n(71035),
                a = n(4071),
                c = n(4254),
                u = n(57024),
                d = n(36484),
                g = n(62562);
            let p = (e) => {
                let { size: t = 'm', variant: n = 'default', color: p = 'primary', withRipple: m = !0, buttonText: h, isBlock: v, key: y, className: f } = e,
                    _ = (0, l.useRouter)(),
                    E = (0, g.N)().get(d.QG),
                    S = (0, s.c)(() => {
                        E.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), _.push(E.authorizationUrl));
                    });
                return (0, r.jsx)(
                    a.$,
                    {
                        onClick: S,
                        className: f,
                        isBlock: v,
                        color: p,
                        variant: n,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': i.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(o.A, { id: 'authorization.enter-button' }) }),
                    },
                    y,
                );
            };
        },
        19835: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => o });
            var r = n(28410),
                l = n(36159);
            let o = r.gK.model('LoadingState', { loadingState: r.gK.enumeration(Object.values(l.G)) }).views((e) => ({
                get isNeededToLoad() {
                    return e.loadingState === l.G.IDLE;
                },
                get isLoading() {
                    return e.loadingState === l.G.PENDING;
                },
                get isResolved() {
                    return e.loadingState === l.G.RESOLVE;
                },
                get isRejected() {
                    return e.loadingState === l.G.REJECT;
                },
            }));
        },
        20583: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => i });
            var r = n(10508),
                l = n(74631),
                o = n(21784);
            let i = (e) => {
                let t = (0, o.W)(),
                    n = (0, l.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    i = (0, l.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: n, moveForward: i };
            };
        },
        20790: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => o });
            var r = n(74631),
                l = n(73810);
            let o = () => (0, r.useContext)(l.P);
        },
        21784: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => l, W: () => o });
            var r = n(74631);
            let l = (0, r.createContext)({
                pushState: () => {},
                replaceState: () => {},
                forward: () => {},
                back: () => {},
                canForward: !1,
                canBack: !1,
                state: null,
                length: 0,
            });
            function o() {
                return (0, r.useContext)(l);
            }
        },
        24053: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                container: 'NotFound_container__h1XeE',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        30871: (e, t, n) => {
            'use strict';
            n.d(t, { WithAuth: () => h });
            var r = n(25839),
                l = n(88204),
                o = n(84059),
                i = n(82298),
                s = n(8487),
                a = n(4254),
                c = n(16978),
                u = n(148),
                d = n.n(u);
            let g = (0, l.PA)(() =>
                (0, r.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, r.jsx)(a.DZ, {
                            className: (0, i.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(s.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(a.HL, {
                            className: (0, i.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, r.jsx)(s.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, r.jsx)(c.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var p = n(53712),
                m = n(27954);
            let h = (0, l.PA)((e) => {
                let { children: t, withRedirectToMainPage: n } = e,
                    { user: l } = (0, m.g)();
                return l.isAuthorized ? t : (n && (0, o.redirect)(p.Z.main.href), (0, r.jsx)(g, {}));
            });
        },
        36159: (e, t, n) => {
            'use strict';
            n.d(t, { G: () => r });
            var r = (function (e) {
                return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e);
            })({});
        },
        51705: (e, t, n) => {
            'use strict';
            n.d(t, { FavoriteTracksPageStoreProvider: () => m });
            var r = n(80499),
                l = n(82706),
                o = n(28410),
                i = n(93690),
                s = n(35522),
                a = n(36159),
                c = n(25895),
                u = n(19835);
            let d = o.gK
                    .compose(o.gK.model('FavoriteTracksPage', { playlistUuid: o.gK.maybeNull(o.gK.string), errorStatusCode: o.gK.maybeNull(o.gK.number) }), u.X)
                    .views((e) => ({
                        get playlistUrl() {
                            if (!e.playlistUuid) return '';
                            let { href: t } = (0, c.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                            return t;
                        },
                    }))
                    .actions((e) => ({
                        getPlaylistUrl: (0, o.L3)(function* () {
                            let { landingResource: t, modelActionsLogger: n } = (0, o._$)(e);
                            if (e.loadingState !== a.G.PENDING)
                                try {
                                    ((e.loadingState = a.G.PENDING),
                                        (e.playlistUuid = (yield t.getBlock({
                                            source: { uri: '/landing/block/collection/playlist-with-likes', countWeb: 8 },
                                            type: s.t.COLLECTION_PLAYLIST_WITH_LIKES,
                                        })).playlist.playlistUuid),
                                        e.loadingState !== a.G.IDLE && (e.loadingState = a.G.RESOLVE));
                                } catch (t) {
                                    (n.error(t),
                                        t instanceof i.GX &&
                                            (t.statusCode === i.X1.NOT_FOUND || t.statusCode === i.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = i.X1.NOT_FOUND),
                                        e.loadingState !== a.G.IDLE && (e.loadingState = a.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = a.G.IDLE), (e.playlistUuid = null));
                        },
                    })),
                g = { loadingState: a.G.IDLE },
                { pageStoreProvider: p } = (0, r.W)({ createStore: (e) => d.create(g, e), patchKey: l.n.FAVORITE_TRACKS }),
                m = p;
        },
        53712: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => l });
            var r = n(25895);
            let l = {
                main: (0, r.u)('/'),
                chart: (0, r.u)('/chart'),
                chartPodcasts: (0, r.u)('/chart/podcasts'),
                collection: (0, r.u)('/collection'),
                collectionAlbums: (0, r.u)('/collection/albums'),
                collectionArtists: (0, r.u)('/collection/artists'),
                collectionClips: (0, r.u)('/collection/clips'),
                collectionDislikes: (0, r.u)('/collection/dislikes'),
                collectionKids: (0, r.u)('/collection/kids'),
                collectionKidsAlbums: (0, r.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, r.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, r.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, r.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, r.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, r.u)('/collection/multivibes'),
                collectionPlaylists: (0, r.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, r.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, r.u)('/collection/playlists/liked'),
                collectionShelf: (0, r.u)('/collection/shelf'),
                collectionShelfLiked: (0, r.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, r.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, r.u)('/collection/shelf/recently-played'),
                concerts: (0, r.u)('/concerts'),
                kids: (0, r.u)('/kids'),
                mixes: (0, r.u)('/mixes'),
                musicHistory: (0, r.u)('/music-history'),
                muzmarket: (0, r.u)('/muzmarket'),
                mymusic: (0, r.u)('/mymusic'),
                mymusicDownloadsTracks: (0, r.u)('/mymusic/downloads/tracks'),
                multivibe: (0, r.u)('/multivibe'),
                nonMusic: (0, r.u)('/non-music'),
                pay: (0, r.u)('/pay'),
                userSlides: (0, r.u)('/slides/user'),
                search: (0, r.u)('/search'),
                searchHistory: (0, r.u)('/search/history'),
                settings: (0, r.u)('/settings'),
                video: (0, r.u)('/video'),
            };
        },
        56120: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => o });
            var r = n(74631),
                l = n(20790);
            let o = (e) => {
                let t = (0, r.useRef)(!1),
                    n = (0, l.z)();
                (0, r.useEffect)(() => {
                    (e && (null == n || n.disable(), (t.current = !0)), !e && t.current && (null == n || n.enable(), (t.current = !1)));
                }, [e, n]);
            };
        },
        57024: (e, t, n) => {
            'use strict';
            n.d(t, { C8: () => o, UC: () => i, dM: () => s, uV: () => a });
            var r = n(93690),
                l = n(58848);
            let o = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                i = (e) => (e.uid ? 'authorized' : 'no-uid'),
                s = (e) => {
                    if (!(e instanceof r.m5) || !(0, l.N)(e.cause)) return 'unexpected';
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
                a = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        58848: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => r });
            let r = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        59450: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => v, st: () => o, gf: () => s });
            var r = n(74631);
            let l = (0, r.createContext)(null);
            function o() {
                return (0, r.useContext)(l);
            }
            let i = (0, r.createContext)({ hash: void 0 });
            function s() {
                return (0, r.useContext)(i);
            }
            var a = n(25839),
                c = n(59342);
            let u = (e) => {
                let { children: t } = e,
                    n = (0, r.useMemo)(() => ({ hash: (0, c.A)() }), []);
                return (0, a.jsx)(i.Provider, { value: n, children: t });
            };
            class d {
                makeParams() {
                    return {};
                }
            }
            class g {
                makeParams() {
                    return {};
                }
            }
            var p = n(58025);
            class m {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, t) {
                    this.evgen.trackEvent(e, t);
                }
                constructor(e, t, n) {
                    ((0, p._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (r, l) => {
                                let o = { ...l, ...t.getGlobalParams(), ...n.getPlatformParams() };
                                e.trackEvent(r, o);
                            },
                        }));
                }
            }
            let h = null,
                v = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: o, logger: i, metrika: s } = e,
                        c = (0, r.useMemo)(() => {
                            if (h) return h;
                            let e = (function (e, t, n) {
                                let r = (function (e) {
                                    let { callback: t, maxSendingItemsPerRequest: n, requestsSendingDelay: r } = e,
                                        l = [];
                                    return (
                                        !(function e() {
                                            (l.length > 0 && t(l.splice(0, n)), window.setTimeout(e, r));
                                        })(),
                                        {
                                            add(e) {
                                                l.push(e);
                                            },
                                        }
                                    );
                                })({
                                    callback: (t) => {
                                        e(t);
                                    },
                                    requestsSendingDelay: 1e3,
                                    maxSendingItemsPerRequest: 21,
                                });
                                return {
                                    trackEvent(e, l) {
                                        (n && t.log(e, l), r.add({ [e]: l }));
                                    },
                                };
                            })((e) => s.count(e, o), i, t);
                            return (h = new m(
                                e,
                                (function () {
                                    let e = new d();
                                    return { getGlobalParams: () => e };
                                })(),
                                (function () {
                                    let e = new g();
                                    return { getPlatformParams: () => e };
                                })(),
                            ));
                        }, [i, s]);
                    return (0, a.jsx)(l.Provider, { value: c, children: (0, a.jsx)(u, { children: n }) });
                };
        },
        65610: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        67311: (e, t, n) => {
            'use strict';
            n.d(t, { V8: () => o, si: () => s, fW: () => g, MJ: () => d, jU: () => m, Bx: () => p });
            var r = n(22413);
            function l(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class o {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let i = (0, r.Jt)(e);
                        if (t) {
                            var n, o;
                            return null != (o = null == (n = l(i)) ? void 0 : n.value) ? o : null;
                        }
                        return null != i ? i : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    let l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let o = l ? JSON.stringify({ value: t }) : t;
                        (0, r.hZ)(e, o, n);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, r.TF)(e);
                    } catch (e) {}
                }
            }
            function i(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class s {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = i('localStorage');
                    if (!n) return null;
                    try {
                        var r;
                        let o = n.getItem(e) || void 0;
                        if (!t) return o;
                        let i = l(o);
                        if (!i) return null;
                        let s = null != (r = null == i ? void 0 : i.value) ? r : null;
                        if ((null == i ? void 0 : i.expires) && Date.now() > new Date(i.expires).getTime()) return (this.remove(e), null);
                        return s;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    if ('number' == typeof (null == n ? void 0 : n.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * n.expires), (n.expires = e));
                    }
                    let r = i('localStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t, ...n }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = i('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var a = n(58025),
                c = n(36432);
            class u extends c.t {
                constructor(e, t, { code: n = 'E_STORAGE', ...r } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: n, ...r }),
                        (0, a._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype));
                }
            }
            class d {
                get(e) {
                    throw new u(this.platform, this.type);
                }
                set(e, t, n) {
                    throw new u(this.platform, this.type);
                }
                has(e) {
                    throw new u(this.platform, this.type);
                }
                remove(e) {
                    throw new u(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, a._)(this, 'platform', ''), (0, a._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class g {
                get(e) {
                    let t = i('sessionStorage');
                    if (!t) return null;
                    try {
                        var n, r, o;
                        let i = null != (r = t.getItem(e)) ? r : void 0;
                        return null != (o = null == (n = l(i)) ? void 0 : n.value) ? o : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let n = i('sessionStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = i('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let n = 'object' != typeof t ? t : t.name,
                            r = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            l = e.get(n);
                        null != l && e.set(n, l, r);
                    });
            }
            function m(e) {
                let { name: t, group: n, value: r } = e;
                return r && 0 !== Object.keys(r).length
                    ? r.title
                        ? { [t]: { group: n, value: { ...r, title: n } } }
                        : { [t]: { group: n, value: { title: n, value: r } } }
                    : { [t]: { group: n, value: { title: n } } };
            }
        },
        67379: (e, t, n) => {
            'use strict';
            function r(e) {
                let { params: t, logger: n, context: r } = e,
                    l = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
                return l.length > 0 ? (n.error('Evgen parameters are not met', { parameters: l.join(', '), incomingParams: t, context: r }), null) : t;
            }
            n.d(t, { F: () => r });
        },
        71872: (e, t, n) => {
            'use strict';
            n.d(t, { Lz: () => r, ov: () => l });
            let r = ''.concat('yandexmusic', ':'),
                l = ''.concat(r, '//');
        },
        73810: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => r });
            let r = (0, n(74631).createContext)(null);
        },
        74324: (e, t, n) => {
            'use strict';
            n.d(t, { FavoriteTracksPage: () => d });
            var r = n(25839),
                l = n(88204),
                o = n(74631),
                i = n(85686),
                s = n(80499),
                a = n(82706),
                c = n(96634);
            let u = (0, l.PA)(() => (0, r.jsx)(c.NotFound, {})),
                d = (0, l.PA)(() => {
                    let e = (0, s.s)(a.n.FAVORITE_TRACKS),
                        t = (0, i.Z)(e.playlistUrl);
                    if (
                        ((0, o.useEffect)(
                            () => () => {
                                e.reset();
                            },
                            [e],
                        ),
                        (0, o.useEffect)(() => {
                            e.playlistUrl && t();
                        }, [e.playlistUrl, t]),
                        e.isNeededToLoad && (0, o.use)(e.getPlaylistUrl()),
                        e.isRejected)
                    )
                        return (0, r.jsx)(u, {});
                });
        },
        75828: (e, t, n) => {
            (Promise.resolve().then(n.bind(n, 30871)),
                Promise.resolve().then(n.bind(n, 51705)),
                Promise.resolve().then(n.bind(n, 74324)),
                Promise.resolve().then(n.bind(n, 16714)));
        },
        80499: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => v, s: () => y });
            var r = n(25839),
                l = n(88204),
                o = n(84059),
                i = n(74631),
                s = n(89288),
                a = n(36432),
                c = n(94421),
                u = n(99989),
                d = n(27954),
                g = n(83382);
            (0, l.eO)(!1);
            let p = (0, i.createContext)(null),
                m = (e) => {
                    let { children: t, store: n, storeKey: l } = e,
                        o = (0, i.useMemo)(() => ({ store: n, storeKey: l }), [n, l]);
                    return (0, r.jsx)(p.Provider, { value: o, children: t });
                },
                h = (e) => {
                    let { nonce: t, patchKey: n, patchesRef: l } = e;
                    return (
                        (0, o.useServerInsertedHTML)(() => {
                            let e = l.current;
                            return ((l.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, s.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(n, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                v = (e) => {
                    let { createStore: t, patchKey: n } = e,
                        l = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[n]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[n], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: o, nonce: i } = e,
                                s = (0, g.Y)(),
                                a = (0, d.g)(),
                                { store: p, patchesRef: v } = (0, u.m)({
                                    createStore: () => t({ ...s, rootStore: a }),
                                    getPendingPatchBatches: l,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(h, { nonce: i, patchKey: n, patchesRef: v }), (0, r.jsx)(m, { store: p, storeKey: n, children: o })],
                            });
                        },
                    };
                };
            function y(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = (0, i.useContext)(p);
                if (!n || n.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new a.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == n ? void 0 : n.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return n.store;
            }
        },
        82706: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => r });
            let r = {
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
        83382: (e, t, n) => {
            'use strict';
            n.d(t, { Y: () => s });
            var r = n(67311),
                l = n(36484),
                o = n(62562),
                i = n(84e3);
            let s = () => {
                let e = (0, o.N)(),
                    t = e.get(l.oo),
                    n = e.get(l.uM),
                    s = e.get(l.ff),
                    a = e.get(l.V4),
                    c = e.get(l.P0),
                    u = (() => {
                        let e = (0, o.N)(),
                            t = e.get(l.$I),
                            n = e.get(l.EN),
                            r = e.get(l.N1),
                            i = e.get(l._1),
                            s = e.get(l.V3),
                            a = e.get(l.Lb),
                            c = e.get(l.wK),
                            u = e.get(l.tz),
                            d = e.get(l.$8),
                            g = e.get(l.Oo),
                            p = e.get(l.X4),
                            m = e.get(l.O9),
                            h = e.get(l.E),
                            v = e.get(l.wH),
                            y = e.get(l.ok),
                            f = e.get(l.X8),
                            _ = e.get(l.yq),
                            E = e.get(l.NN),
                            S = e.get(l.qN),
                            N = e.get(l.ro),
                            x = e.get(l.nM),
                            P = e.get(l.Ut),
                            T = e.get(l.K1),
                            A = e.get(l.eu),
                            w = e.get(l.aE),
                            b = e.get(l.ki),
                            L = e.get(l.c9),
                            R = e.get(l.en),
                            k = e.get(l.jQ),
                            I = e.get(l.cZ),
                            O = e.get(l.Zl),
                            j = e.get(l.CN),
                            C = e.get(l.P1),
                            F = e.get(l.zj),
                            D = e.get(l.re),
                            G = e.get(l.JM),
                            U = e.get(l.Lk),
                            z = e.get(l.$$),
                            K = e.get(l.sv),
                            M = e.get(l.gd),
                            H = e.get(l.Ez),
                            B = e.get(l.u2),
                            V = e.get(l.TD),
                            X = e.get(l.dh),
                            Z = e.get(l.LC),
                            $ = e.get(l.PL),
                            W = e.get(l.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: n,
                            disclaimersResource: r,
                            usersResource: i,
                            landingResource: s,
                            landing3Resource: a,
                            landingBlocksResource: c,
                            albumResource: u,
                            libraryResource: d,
                            tracksResource: g,
                            topResource: p,
                            artistsResource: m,
                            slidesResource: h,
                            redAlertResource: v,
                            rotorResource: y,
                            waveResource: f,
                            searchResource: _,
                            searchPlaylistResource: E,
                            playlistResource: S,
                            playlistsResource: N,
                            pinResource: x,
                            metatagsResource: P,
                            tagResource: T,
                            feedResource: A,
                            pinsResource: w,
                            musicHistoryResource: b,
                            dynamicPagesResource: L,
                            chartResource: R,
                            clipsResource: k,
                            lyricViewsResource: I,
                            nonMusicResource: O,
                            donationResource: j,
                            loaderResource: C,
                            lumenResource: F,
                            prefixlessResource: D,
                            streamsResource: G,
                            filtersResource: U,
                            ugcResource: z,
                            collectionResource: K,
                            adsResource: M,
                            personalResource: H,
                            familyResource: B,
                            childrenLandingResource: V,
                            promoResource: X,
                            telemetryResource: Z,
                            labelsResource: $,
                            concertsResource: W,
                            wordsResource: e.get(l.dA),
                            wheelResource: e.get(l.$Y),
                        };
                    })(),
                    d = (0, i.U)(),
                    g = (0, o.N)().get(l.TK),
                    p = e.get(l.ni),
                    m = new r.si(),
                    h = new r.fW();
                return {
                    ...u,
                    acqOffers: n,
                    disclaimerDictionary: s,
                    logger: d,
                    modelActionsLogger: g,
                    localStorage: m,
                    sessionStorage: h,
                    containerStorage: t,
                    config: a,
                    clientSafeConfig: c,
                    landingSdk: p,
                };
            };
        },
        85686: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => u });
            var r = n(84059);
            n(93588);
            var l = n(71035),
                o = n(25895),
                i = n(89288),
                s = n(71872),
                a = (function (e) {
                    return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
                })({});
            let c = [i.cy.HTTP, i.cy.HTTPS, i.cy.MAILTO, i.cy.TEL, s.Lz],
                u = (e) => {
                    let t = (0, r.useRouter)(),
                        { href: n, target: u } = (0, o.u)(e);
                    return (0, l.c)((e) => {
                        let r = ((e, t, n) => {
                            let r;
                            try {
                                r = new URL(t);
                            } catch (e) {
                                return null;
                            }
                            let l = (0, i.Rj)(e, { allowedProtocols: new Set([...c, r.protocol]), baseUrl: r.href });
                            return l.isAllowed
                                ? l.url.protocol === s.Lz
                                    ? { type: a.DEEPLINK, href: e }
                                    : '_blank' !== n && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(l.url, r)
                                      ? { type: a.INTERNAL, href: e }
                                      : { type: a.EXTERNAL, href: e }
                                : null;
                        })(n, window.location.href, u);
                        if (!r) {
                            null == e || e.preventDefault();
                            return;
                        }
                        (null != e && e.metaKey) ||
                            (null != e && e.ctrlKey) ||
                            (null != e && e.shiftKey) ||
                            (r.type === a.EXTERNAL || r.type === a.DEEPLINK
                                ? ((e) => {
                                      let { target: t, rel: n } = (0, o.u)(e, { options: { isExternalLink: !0 } });
                                      window.open(e, t, n);
                                  })(r.href)
                                : t.push(r.href));
                    });
                };
        },
        89192: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => l, g: () => o });
            var r = n(74631);
            let l = (0, r.createContext)({
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
                o = () => (0, r.useContext)(l);
        },
        94421: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => l, s: () => r });
            let r = 'yMusicStatePatchesUpdated',
                l = 'yMusicPageStatePatchesUpdated';
        },
        96634: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { NotFound: () => A }));
            var r = n(25839),
                l = n(82298),
                o = n(88204),
                i = n(8487);
            n(93588);
            var s = n(4071),
                a = n(66738),
                c = n(13833),
                u = n(4254),
                d = n(74631),
                g = n(67379),
                p = n(36619),
                m = n(76945),
                h = n(59450),
                v = n(84e3),
                y = n(59342),
                f = n(89192),
                _ = n(53712),
                E = n(85686),
                S = n(56120),
                N = n(15270),
                x = n(27954),
                P = n(24053),
                T = n.n(P);
            let A = (0, o.PA)((e) => {
                let { className: t, title: n, description: o, iconVariant: P = 'musicLogo', iconClassName: A, iconSize: w } = e,
                    { contentRef: b, setContentScrollRef: L } = (0, f.g)(),
                    R = (0, E.Z)(_.Z.main.href);
                !(function () {
                    let e = (0, h.st)(),
                        { hash: t } = (0, h.gf)(),
                        n = (0, v.U)(),
                        r = (0, d.useRef)(void 0);
                    (0, d.useEffect)(() => {
                        if (!e || !t) return;
                        r.current = (0, y.A)();
                        let l = (0, g.F)({
                            params: {
                                hash: t,
                                pageId: p.AppScreen.PageNotFoundScreen,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                                viewUuid: r.current,
                            },
                            logger: n,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            l && (0, m.w5)(e.evgenInstance, l),
                            () => {
                                let l = (0, g.F)({
                                    params: {
                                        hash: t,
                                        pageId: p.AppScreen.PageNotFoundScreen,
                                        pageStyle: p.PageStyles.Fullscreen,
                                        pagePlacement: p.PagePlacements.Fullscreen,
                                        mainObjectType: p.DomainObjectType.NonApplicable,
                                        mainObjectId: p.DomainObjectType.NonApplicable,
                                        viewUuid: r.current,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                l && (0, m.XB)(e.evgenInstance, l);
                            }
                        );
                    }, [e, t, n]);
                })();
                let { handleNavigateToMain: k } = (function (e) {
                    let t = (0, h.st)(),
                        { hash: n } = (0, h.gf)(),
                        r = (0, v.U)();
                    return {
                        handleNavigateToMain: (0, d.useCallback)(() => {
                            if (!t || !n) return;
                            let l = (0, g.F)({
                                params: {
                                    hash: n,
                                    pageId: p.AppScreen.PageNotFoundScreen,
                                    pageStyle: p.PageStyles.Fullscreen,
                                    pagePlacement: p.PagePlacements.Fullscreen,
                                    mainObjectType: p.DomainObjectType.NonApplicable,
                                    mainObjectId: p.DomainObjectType.NonApplicable,
                                    from: p.AppScreen.PageNotFoundScreen,
                                    to: p.AppScreen.MainScreen,
                                    entityType: p.EntityTypes.Error,
                                    entityId: p.EntityTypes.Error,
                                },
                                logger: r,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            (l && (0, m.Mu)(t.evgenInstance, l), e());
                        }, [t, n, r, e]),
                    };
                })(R);
                return (
                    (0, S.N)(!0),
                    !(function () {
                        let { location: e } = (0, x.g)();
                        (0, d.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, r.jsxs)(c.N, {
                        className: (0, l.$)(T().root, { [T().root_desktop]: !b }, t),
                        containerClassName: T().container,
                        ref: L,
                        children: [
                            (0, r.jsx)(N.L, { withBackwardFallback: '/', className: T().navigation, withForwardControl: !1 }),
                            (0, r.jsxs)('div', {
                                className: T().content,
                                children: [
                                    (0, r.jsx)(a.I, { className: (0, l.$)(T().icon, A), variant: P, size: w }),
                                    (0, r.jsx)(u.DZ, {
                                        className: (0, l.$)(T().title, T().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, r.jsx)(i.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, r.jsx)(u.HL, {
                                        className: (0, l.$)(T().text, T().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: o || (0, r.jsx)(i.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, r.jsx)(s.$, {
                                        onClick: k,
                                        className: T().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(u.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, r.jsx)(i.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        99989: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => o });
            var r = n(28410),
                l = n(74631);
            let o = (e) => {
                let { createStore: t, getPendingPatchBatches: n, patchesUpdatedEventName: o } = e,
                    i = (0, l.useRef)([]),
                    [s] = (0, l.useState)(() => {
                        let e = t();
                        for (let t of n()) (0, r.X6)(e, t);
                        return e;
                    });
                return (
                    (0, l.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of n()) (0, r.X6)(s, e);
                        };
                        return (e(), window.addEventListener(o, e), () => window.removeEventListener(o, e));
                    }, [n, o, s]),
                    { store: s, patchesRef: i }
                );
            };
        },
    },
    (e) => {
        (e.O(0, [1676, 3349, 1107, 6706, 1311, 9212, 260, 4512, 9004, 4985, 7839, 4114, 3269, 4163, 3246, 4517, 4475, 5056, 7358], () => e((e.s = 75828))),
            (_N_E = e.O()));
    },
]);
