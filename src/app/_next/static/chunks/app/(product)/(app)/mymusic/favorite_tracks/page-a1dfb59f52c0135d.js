(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8062],
    {
        4370: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => l });
            var r = n(67174);
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
        7628: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => p });
            var r = n(88800),
                l = n(88969),
                o = n(58390),
                s = n(17392),
                i = n(29993),
                a = n(96817),
                c = n(29504),
                u = n(99890),
                d = n(4086),
                g = n(41928);
            let p = (e) => {
                let { size: t = 'm', variant: n = 'default', color: p = 'primary', withRipple: m = !0, buttonText: v, isBlock: h, key: f, className: y } = e,
                    _ = (0, o.useRouter)(),
                    E = (0, g.N)().get(d.QG),
                    N = (0, i.c)(() => {
                        E.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), _.push(E.authorizationUrl));
                    });
                return (0, r.jsx)(
                    a.$,
                    {
                        onClick: N,
                        className: y,
                        isBlock: h,
                        color: p,
                        variant: n,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': s.S7.UNAUTHORIZED_BUTTON,
                        children: v || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    f,
                );
            };
        },
        15947: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => i });
            var r = n(35412),
                l = n(28166),
                o = n(97261);
            let s = [r.cy.HTTP, r.cy.HTTPS, r.cy.MAILTO, r.cy.TEL, l.Lz],
                i = (e, t, n) => {
                    let i;
                    try {
                        i = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let a = (0, r.Rj)(e, { allowedProtocols: new Set([...s, i.protocol]), baseUrl: i.href });
                    return a.isAllowed
                        ? a.url.protocol === l.Lz
                            ? { type: o.I.DEEPLINK, href: e }
                            : '_blank' !== n && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(a.url, i)
                              ? { type: o.I.INTERNAL, href: e }
                              : { type: o.I.EXTERNAL, href: e }
                        : null;
                };
        },
        16818: (e, t, n) => {
            'use strict';
            n.d(t, { Y: () => a });
            var r = n(53647),
                l = n(4086),
                o = n(41928),
                s = n(65523),
                i = n(57448);
            let a = () => {
                let e = (0, o.N)(),
                    t = e.get(l.oo),
                    n = e.get(l.QG),
                    a = e.get(l.uM),
                    c = e.get(l.ff),
                    u = e.get(l.V4),
                    d = e.get(l.P0),
                    g = (0, i.f)(),
                    p = (0, s.U)(),
                    m = (0, o.N)().get(l.TK),
                    v = e.get(l.ni),
                    h = e.get(l.RD),
                    f = new r.si(),
                    y = new r.fW();
                return {
                    ...g,
                    acqOffers: a,
                    disclaimerDictionary: c,
                    logger: p,
                    modelActionsLogger: m,
                    localStorage: f,
                    sessionStorage: y,
                    containerStorage: t,
                    authorization: n,
                    config: u,
                    clientSafeConfig: d,
                    landingSdk: v,
                    tagSandbox: h,
                };
            };
        },
        26827: (e) => {
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
        28166: (e, t, n) => {
            'use strict';
            n.d(t, { Lz: () => r, ov: () => l });
            let r = ''.concat('yandexmusic', ':'),
                l = ''.concat(r, '//');
        },
        28340: (e, t, n) => {
            'use strict';
            n.d(t, { FavoriteTracksPageStoreProvider: () => v });
            var r = n(34961),
                l = n(53892),
                o = n(5120),
                s = n(89916),
                i = n(99007),
                a = n(50633),
                c = n(74773),
                u = n(67174),
                d = n(59497);
            let g = o.gK
                    .compose(o.gK.model('FavoriteTracksPage', { playlistUuid: o.gK.maybeNull(o.gK.string), errorStatusCode: o.gK.maybeNull(o.gK.number) }), d.X)
                    .views((e) => ({
                        get playlistUrl() {
                            if (!e.playlistUuid) return '';
                            let { href: t } = (0, u.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                            return t;
                        },
                    }))
                    .actions((e) => ({
                        getPlaylistUrl: (0, o.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: n } = (0, o._$)(e),
                                { user: r } = (0, a.M)(e),
                                l = r.account.data.uid;
                            if (l && e.loadingState !== c.G.PENDING)
                                try {
                                    var u;
                                    e.loadingState = c.G.PENDING;
                                    let [n] = yield t.getPlaylistsByKinds({ userId: l, kinds: [i.j.LIKE], withTracks: !1, withLikesCount: !1 });
                                    ((e.playlistUuid = null != (u = null == n ? void 0 : n.playlistUuid) ? u : null),
                                        e.loadingState !== c.G.IDLE && (e.loadingState = c.G.RESOLVE));
                                } catch (t) {
                                    (n.error(t),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== c.G.IDLE && (e.loadingState = c.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = c.G.IDLE), (e.playlistUuid = null));
                        },
                    })),
                p = { loadingState: c.G.IDLE },
                { pageStoreProvider: m } = (0, r.W)({ createStore: (e) => g.create(p, e), patchKey: l.n.FAVORITE_TRACKS }),
                v = m;
        },
        30603: (e, t, n) => {
            (Promise.resolve().then(n.bind(n, 57328)),
                Promise.resolve().then(n.bind(n, 28340)),
                Promise.resolve().then(n.bind(n, 32032)),
                Promise.resolve().then(n.bind(n, 87396)));
        },
        32032: (e, t, n) => {
            'use strict';
            n.d(t, { FavoriteTracksPage: () => d });
            var r = n(88800),
                l = n(84961),
                o = n(53548),
                s = n(78940),
                i = n(34961),
                a = n(53892),
                c = n(78805);
            let u = (0, l.PA)(() => (0, r.jsx)(c.NotFound, {})),
                d = (0, l.PA)(() => {
                    let e = (0, i.s)(a.n.FAVORITE_TRACKS),
                        t = (0, s.Z)(e.playlistUrl);
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
        34961: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => h, s: () => f });
            var r = n(88800),
                l = n(84961),
                o = n(58390),
                s = n(53548),
                i = n(35412),
                a = n(39499),
                c = n(89108),
                u = n(70003),
                d = n(72288),
                g = n(16818);
            (0, l.eO)(!1);
            let p = (0, s.createContext)(null),
                m = (e) => {
                    let { children: t, store: n, storeKey: l } = e,
                        o = (0, s.useMemo)(() => ({ store: n, storeKey: l }), [n, l]);
                    return (0, r.jsx)(p.Provider, { value: o, children: t });
                },
                v = (e) => {
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
                                                  .concat((0, i.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(n, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                h = (e) => {
                    let { createStore: t, patchKey: n } = e,
                        l = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[n]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[n], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: o, nonce: s } = e,
                                i = (0, g.Y)(),
                                a = (0, d.g)(),
                                { store: p, patchesRef: h } = (0, u.m)({
                                    createStore: () => t({ ...i, rootStore: a }),
                                    getPendingPatchBatches: l,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(v, { nonce: s, patchKey: n, patchesRef: h }), (0, r.jsx)(m, { store: p, storeKey: n, children: o })],
                            });
                        },
                    };
                };
            function f(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = (0, s.useContext)(p);
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
        38860: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => o });
            var r = n(53548),
                l = n(41168);
            let o = () => (0, r.useContext)(l.P);
        },
        41168: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => r });
            let r = (0, n(53548).createContext)(null);
        },
        42674: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        44230: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => l, g: () => o });
            var r = n(53548);
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
        46422: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => l, W: () => o });
            var r = n(53548);
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
        46777: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => s });
            var r = n(55482),
                l = n(53548),
                o = n(46422);
            let s = (e) => {
                let t = (0, o.W)(),
                    n = (0, l.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    s = (0, l.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: n, moveForward: s };
            };
        },
        50320: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        50633: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => l });
            var r = n(5120);
            let l = (e) => {
                let t = (0, r.Zn)(e);
                if (((e) => 'object' == typeof e && null !== e && 'isRootModel' in e && !0 === e.isRootModel)(t)) return t;
                let { rootStore: n } = (0, r._$)(e);
                return n || t;
            };
        },
        53647: (e, t, n) => {
            'use strict';
            n.d(t, { V8: () => o, si: () => i, fW: () => g, MJ: () => d, jU: () => m, Bx: () => p });
            var r = n(77451);
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
                        let s = (0, r.Jt)(e);
                        if (t) {
                            var n, o;
                            return null != (o = null == (n = l(s)) ? void 0 : n.value) ? o : null;
                        }
                        return null != s ? s : null;
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
            function s(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class i {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = s('localStorage');
                    if (!n) return null;
                    try {
                        var r;
                        let o = n.getItem(e) || void 0;
                        if (!t) return o;
                        let s = l(o);
                        if (!s) return null;
                        let i = null != (r = null == s ? void 0 : s.value) ? r : null;
                        if ((null == s ? void 0 : s.expires) && Date.now() > new Date(s.expires).getTime()) return (this.remove(e), null);
                        return i;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    if ('number' == typeof (null == n ? void 0 : n.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * n.expires), (n.expires = e));
                    }
                    let r = s('localStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t, ...n }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var a = n(9519),
                c = n(39499);
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
                    let t = s('sessionStorage');
                    if (!t) return null;
                    try {
                        var n, r, o;
                        let s = null != (r = t.getItem(e)) ? r : void 0;
                        return null != (o = null == (n = l(s)) ? void 0 : n.value) ? o : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let n = s('sessionStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('sessionStorage');
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
        53892: (e, t, n) => {
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
        56248: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => v });
            var r = n(88800),
                l = n(65724),
                o = n(84961),
                s = n(53548),
                i = n(2058),
                a = n(17392),
                c = n(29993),
                u = n(96817),
                d = n(52300),
                g = n(46777),
                p = n(50320),
                m = n.n(p);
            let v = (0, o.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: o = !0,
                        className: p,
                        withBackwardFallback: v,
                        buttonSize: h = 'xxs',
                        onBackwardClick: f,
                    } = e,
                    { formatMessage: y } = (0, i.A)(),
                    { canBack: _, canForward: E, moveBack: N, moveForward: S } = (0, g.J)(v),
                    x = (0, s.useRef)(null),
                    T = (0, c.c)((e) => {
                        if ((e.stopPropagation(), f)) return void f();
                        N();
                    }),
                    P = (0, c.c)((e) => {
                        (e.stopPropagation(), S());
                    });
                return (
                    (0, s.useEffect)(() => {
                        o && x.current && _ && x.current.focus();
                    }, [_]),
                    (0, r.jsxs)('div', {
                        className: (0, l.$)(m().root, p),
                        'data-test-id': a.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, r.jsx)(u.$, {
                                    ref: x,
                                    'aria-label': y({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !_,
                                    size: h,
                                    icon: (0, r.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: T,
                                    'data-test-id': a.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, r.jsx)(u.$, {
                                    'aria-label': y({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !E,
                                    size: h,
                                    icon: (0, r.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: P,
                                    'data-test-id': a.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        57328: (e, t, n) => {
            'use strict';
            n.d(t, { WithAuth: () => v });
            var r = n(88800),
                l = n(84961),
                o = n(58390),
                s = n(65724),
                i = n(88969),
                a = n(29504),
                c = n(7628),
                u = n(42674),
                d = n.n(u);
            let g = (0, l.PA)(() =>
                (0, r.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, r.jsx)(a.DZ, {
                            className: (0, s.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(i.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(a.HL, {
                            className: (0, s.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, r.jsx)(i.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, r.jsx)(c.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var p = n(4370),
                m = n(72288);
            let v = (0, l.PA)((e) => {
                let { children: t, withRedirectToMainPage: n } = e,
                    { user: l } = (0, m.g)();
                return l.isAuthorized ? t : (n && (0, o.redirect)(p.Z.main.href), (0, r.jsx)(g, {}));
            });
        },
        57448: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => o });
            var r = n(4086),
                l = n(41928);
            let o = () => {
                let e = (0, l.N)(),
                    t = e.get(r.$I),
                    n = e.get(r.EN),
                    o = e.get(r.N1),
                    s = e.get(r._1),
                    i = e.get(r.V3),
                    a = e.get(r.Lb),
                    c = e.get(r.wK),
                    u = e.get(r.tz),
                    d = e.get(r.$8),
                    g = e.get(r.Oo),
                    p = e.get(r.X4),
                    m = e.get(r.O9),
                    v = e.get(r.E),
                    h = e.get(r.wH),
                    f = e.get(r.ok),
                    y = e.get(r.X8),
                    _ = e.get(r.yq),
                    E = e.get(r.NN),
                    N = e.get(r.qN),
                    S = e.get(r.ro),
                    x = e.get(r.nM),
                    T = e.get(r.Ut),
                    P = e.get(r.K1),
                    A = e.get(r.eu),
                    w = e.get(r.SD),
                    b = e.get(r.aE),
                    R = e.get(r.ki),
                    L = e.get(r.c9),
                    I = e.get(r.en),
                    k = e.get(r.jQ),
                    O = e.get(r.cZ),
                    j = e.get(r.Zl),
                    C = e.get(r.CN),
                    F = e.get(r.P1),
                    D = e.get(r.zj),
                    G = e.get(r.re),
                    U = e.get(r.JM),
                    M = e.get(r.Lk),
                    K = e.get(r.$$),
                    z = e.get(r.sv),
                    H = e.get(r.gd),
                    B = e.get(r.Ez),
                    V = e.get(r.u2),
                    Z = e.get(r.TD),
                    X = e.get(r.dh),
                    $ = e.get(r.LC),
                    W = e.get(r.PL),
                    J = e.get(r.DT);
                return {
                    accountResource: t,
                    afterTrackResource: n,
                    disclaimersResource: o,
                    usersResource: s,
                    landingResource: i,
                    landing3Resource: a,
                    landingBlocksResource: c,
                    albumResource: u,
                    libraryResource: d,
                    tracksResource: g,
                    topResource: p,
                    artistsResource: m,
                    slidesResource: v,
                    redAlertResource: h,
                    rotorResource: f,
                    waveResource: y,
                    searchResource: _,
                    searchPlaylistResource: E,
                    playlistResource: N,
                    playlistsResource: S,
                    pinResource: x,
                    metatagsResource: T,
                    tagResource: P,
                    feedResource: A,
                    wizard3Resource: w,
                    pinsResource: b,
                    musicHistoryResource: R,
                    dynamicPagesResource: L,
                    chartResource: I,
                    clipsResource: k,
                    lyricViewsResource: O,
                    nonMusicResource: j,
                    donationResource: C,
                    loaderResource: F,
                    lumenResource: D,
                    prefixlessResource: G,
                    streamsResource: U,
                    filtersResource: M,
                    ugcResource: K,
                    collectionResource: z,
                    adsResource: H,
                    personalResource: B,
                    familyResource: V,
                    childrenLandingResource: Z,
                    promoResource: X,
                    telemetryResource: $,
                    labelsResource: W,
                    concertsResource: J,
                    wordsResource: e.get(r.dA),
                    wheelResource: e.get(r.$Y),
                };
            };
        },
        59497: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => o });
            var r = n(5120),
                l = n(74773);
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
        60932: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        67990: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => r });
            let r = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        70003: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => o });
            var r = n(5120),
                l = n(53548);
            let o = (e) => {
                let { createStore: t, getPendingPatchBatches: n, patchesUpdatedEventName: o } = e,
                    s = (0, l.useRef)([]),
                    [i] = (0, l.useState)(() => {
                        let e = t();
                        for (let t of n()) (0, r.X6)(e, t);
                        return e;
                    });
                return (
                    (0, l.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of n()) (0, r.X6)(i, e);
                        };
                        return (e(), window.addEventListener(o, e), () => window.removeEventListener(o, e));
                    }, [n, o, i]),
                    { store: i, patchesRef: s }
                );
            };
        },
        74773: (e, t, n) => {
            'use strict';
            n.d(t, { G: () => r });
            var r = (function (e) {
                return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e);
            })({});
        },
        78793: (e, t, n) => {
            'use strict';
            function r(e) {
                let { params: t, logger: n, context: r } = e,
                    l = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
                return l.length > 0 ? (n.error('Evgen parameters are not met', { parameters: l.join(', '), incomingParams: t, context: r }), null) : t;
            }
            n.d(t, { F: () => r });
        },
        78805: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { NotFound: () => w }));
            var r = n(88800),
                l = n(65724),
                o = n(84961),
                s = n(88969);
            n(30282);
            var i = n(17392),
                a = n(96817),
                c = n(52300),
                u = n(66719),
                d = n(29504),
                g = n(53548),
                p = n(78793),
                m = n(92716),
                v = n(99984),
                h = n(90780),
                f = n(65523),
                y = n(54020),
                _ = n(44230),
                E = n(4370),
                N = n(78940),
                S = n(95210),
                x = n(56248),
                T = n(72288),
                P = n(26827),
                A = n.n(P);
            let w = (0, o.PA)((e) => {
                let { className: t, title: n, description: o, iconVariant: P = 'musicLogo', iconClassName: w, iconSize: b } = e,
                    { contentRef: R, setContentScrollRef: L } = (0, _.g)(),
                    I = (0, N.Z)(E.Z.main.href);
                !(function () {
                    let e = (0, h.st)(),
                        { hash: t } = (0, h.gf)(),
                        n = (0, f.U)(),
                        r = (0, g.useRef)(void 0);
                    (0, g.useEffect)(() => {
                        if (!e || !t) return;
                        r.current = (0, y.A)();
                        let l = (0, p.F)({
                            params: {
                                hash: t,
                                pageId: m.AppScreen.PageNotFoundScreen,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                                viewUuid: r.current,
                            },
                            logger: n,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            l && (0, v.w5)(e.evgenInstance, l),
                            () => {
                                let l = (0, p.F)({
                                    params: {
                                        hash: t,
                                        pageId: m.AppScreen.PageNotFoundScreen,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                        viewUuid: r.current,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                l && (0, v.XB)(e.evgenInstance, l);
                            }
                        );
                    }, [e, t, n]);
                })();
                let { handleNavigateToMain: k } = (function (e) {
                    let t = (0, h.st)(),
                        { hash: n } = (0, h.gf)(),
                        r = (0, f.U)();
                    return {
                        handleNavigateToMain: (0, g.useCallback)(() => {
                            if (!t || !n) return;
                            let l = (0, p.F)({
                                params: {
                                    hash: n,
                                    pageId: m.AppScreen.PageNotFoundScreen,
                                    pageStyle: m.PageStyles.Fullscreen,
                                    pagePlacement: m.PagePlacements.Fullscreen,
                                    mainObjectType: m.DomainObjectType.NonApplicable,
                                    mainObjectId: m.DomainObjectType.NonApplicable,
                                    from: m.AppScreen.PageNotFoundScreen,
                                    to: m.AppScreen.MainScreen,
                                    entityType: m.EntityTypes.Error,
                                    entityId: m.EntityTypes.Error,
                                },
                                logger: r,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            (l && (0, v.Mu)(t.evgenInstance, l), e());
                        }, [t, n, r, e]),
                    };
                })(I);
                return (
                    (0, S.N)(!0),
                    !(function () {
                        let { location: e } = (0, T.g)();
                        (0, g.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, r.jsxs)(u.N, {
                        className: (0, l.$)(A().root, { [A().root_desktop]: !R }, t),
                        containerClassName: A().container,
                        ref: L,
                        'data-test-id': i.e8.notFound.NOT_FOUND,
                        children: [
                            (0, r.jsx)(x.L, { withBackwardFallback: '/', className: A().navigation, withForwardControl: !1 }),
                            (0, r.jsxs)('div', {
                                className: A().content,
                                children: [
                                    (0, r.jsx)(c.I, { className: (0, l.$)(A().icon, w), variant: P, size: b }),
                                    (0, r.jsx)(d.DZ, {
                                        className: (0, l.$)(A().title, A().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        'data-test-id': i.e8.notFound.NOT_FOUND_TITLE,
                                        children: n || (0, r.jsx)(s.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, r.jsx)(d.HL, {
                                        className: (0, l.$)(A().text, A().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: o || (0, r.jsx)(s.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, r.jsx)(a.$, {
                                        onClick: k,
                                        className: A().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(d.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, r.jsx)(s.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        78940: (e, t, n) => {
            'use strict';
            (n.d(t, { Z: () => a }), n(30282));
            var r = n(58390),
                l = n(29993),
                o = n(67174),
                s = n(15947),
                i = n(97261);
            let a = (e) => {
                let t = (0, r.useRouter)(),
                    { href: n, target: a } = (0, o.u)(e);
                return (0, l.c)((e) => {
                    let r = (0, s.U)(n, window.location.href, a);
                    if (!r) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (r.type === i.I.EXTERNAL || r.type === i.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: n } = (0, o.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, n);
                              })(r.href)
                            : t.push(r.href));
                });
            };
        },
        87396: (e, t, n) => {
            'use strict';
            n.d(t, { MainSuspenseLoader: () => i });
            var r = n(88800),
                l = n(52300),
                o = n(60932),
                s = n.n(o);
            let i = (e) => {
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
                        className: s().icon,
                    }),
                });
            };
        },
        89108: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => l, s: () => r });
            let r = 'yMusicStatePatchesUpdated',
                l = 'yMusicPageStatePatchesUpdated';
        },
        90780: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => h, st: () => o, gf: () => i });
            var r = n(53548);
            let l = (0, r.createContext)(null);
            function o() {
                return (0, r.useContext)(l);
            }
            let s = (0, r.createContext)({ hash: void 0 });
            function i() {
                return (0, r.useContext)(s);
            }
            var a = n(88800),
                c = n(54020);
            let u = (e) => {
                let { children: t } = e,
                    n = (0, r.useMemo)(() => ({ hash: (0, c.A)() }), []);
                return (0, a.jsx)(s.Provider, { value: n, children: t });
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
            var p = n(9519);
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
            let v = null,
                h = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: o, logger: s, metrika: i } = e,
                        c = (0, r.useMemo)(() => {
                            if (v) return v;
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
                            })((e) => i.count(e, o), s, t);
                            return (v = new m(
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
                        }, [s, i]);
                    return (0, a.jsx)(l.Provider, { value: c, children: (0, a.jsx)(u, { children: n }) });
                };
        },
        95210: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => o });
            var r = n(53548),
                l = n(38860);
            let o = (e) => {
                let t = (0, r.useRef)(!1),
                    n = (0, l.z)();
                (0, r.useEffect)(() => {
                    (e && (null == n || n.disable(), (t.current = !0)), !e && t.current && (null == n || n.enable(), (t.current = !1)));
                }, [e, n]);
            };
        },
        97261: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => r });
            var r = (function (e) {
                return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
            })({});
        },
        99007: (e, t, n) => {
            'use strict';
            n.d(t, { j: () => r });
            var r = (function (e) {
                return ((e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e);
            })({});
        },
        99890: (e, t, n) => {
            'use strict';
            n.d(t, { C8: () => o, UC: () => s, dM: () => i, uV: () => a });
            var r = n(89916),
                l = n(67990);
            let o = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                s = (e) => (e.uid ? 'authorized' : 'no-uid'),
                i = (e) => {
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
    },
    (e) => {
        (e.O(0, [7435, 8752, 6706, 4771, 1311, 8832, 6904, 5977, 2058, 2881, 8628, 2677, 4732, 1195, 1598, 6281, 763, 2670, 7358], () => e((e.s = 30603))),
            (_N_E = e.O()));
    },
]);
