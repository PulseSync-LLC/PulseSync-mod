(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9386],
    {
        1344: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => s });
            let l = [
                    { queryKey: 'utm_campaign', resultKey: 'utmCampaign' },
                    { queryKey: 'utm_medium', resultKey: 'utmMedium' },
                    { queryKey: 'utm_source', resultKey: 'utmSource' },
                    { queryKey: 'utm_term', resultKey: 'utmTerm' },
                    { queryKey: 'yclid', resultKey: 'yclid' },
                ],
                s = (e) =>
                    l.reduce((t, r) => {
                        let { queryKey: l, resultKey: s } = r;
                        return ('string' == typeof e[l] && (t[s] = e[l]), t);
                    }, {});
        },
        4370: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => s });
            var l = r(67174);
            let s = {
                main: (0, l.u)('/'),
                chart: (0, l.u)('/chart'),
                chartPodcasts: (0, l.u)('/chart/podcasts'),
                collection: (0, l.u)('/collection'),
                collectionAlbums: (0, l.u)('/collection/albums'),
                collectionArtists: (0, l.u)('/collection/artists'),
                collectionClips: (0, l.u)('/collection/clips'),
                collectionDislikes: (0, l.u)('/collection/dislikes'),
                collectionKids: (0, l.u)('/collection/kids'),
                collectionKidsAlbums: (0, l.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, l.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, l.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, l.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, l.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, l.u)('/collection/multivibes'),
                collectionPlaylists: (0, l.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, l.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, l.u)('/collection/playlists/liked'),
                collectionShelf: (0, l.u)('/collection/shelf'),
                collectionShelfLiked: (0, l.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, l.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, l.u)('/collection/shelf/recently-played'),
                concerts: (0, l.u)('/concerts'),
                kids: (0, l.u)('/kids'),
                mixes: (0, l.u)('/mixes'),
                musicHistory: (0, l.u)('/music-history'),
                muzmarket: (0, l.u)('/muzmarket'),
                mymusic: (0, l.u)('/mymusic'),
                mymusicDownloadsTracks: (0, l.u)('/mymusic/downloads/tracks'),
                multivibe: (0, l.u)('/multivibe'),
                nonMusic: (0, l.u)('/non-music'),
                pay: (0, l.u)('/pay'),
                userSlides: (0, l.u)('/slides/user'),
                search: (0, l.u)('/search'),
                searchHistory: (0, l.u)('/search/history'),
                settings: (0, l.u)('/settings'),
                video: (0, l.u)('/video'),
            };
        },
        7628: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => T });
            var l = r(88800),
                s = r(88969),
                o = r(58390),
                i = r(17392),
                n = r(29993),
                a = r(96817),
                c = r(29504),
                u = r(99890),
                d = r(4086),
                _ = r(41928);
            let T = (e) => {
                let { size: t = 'm', variant: r = 'default', color: T = 'primary', withRipple: S = !0, buttonText: f, isBlock: A, key: I, className: E } = e,
                    p = (0, o.useRouter)(),
                    m = (0, _.N)().get(d.QG),
                    L = (0, n.c)(() => {
                        m.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), p.push(m.authorizationUrl));
                    });
                return (0, l.jsx)(
                    a.$,
                    {
                        onClick: L,
                        className: E,
                        isBlock: A,
                        color: T,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: S,
                        'data-test-id': i.S7.UNAUTHORIZED_BUTTON,
                        children: f || (0, l.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, l.jsx)(s.A, { id: 'authorization.enter-button' }) }),
                    },
                    I,
                );
            };
        },
        8655: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => l });
            var l = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        9630: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => s, e: () => o });
            var l = r(53548);
            let s = (0, l.createContext)(null);
            function o() {
                return (0, l.useContext)(s);
            }
        },
        15947: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => n });
            var l = r(35412),
                s = r(28166),
                o = r(97261);
            let i = [l.cy.HTTP, l.cy.HTTPS, l.cy.MAILTO, l.cy.TEL, s.Lz],
                n = (e, t, r) => {
                    let n;
                    try {
                        n = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let a = (0, l.Rj)(e, { allowedProtocols: new Set([...i, n.protocol]), baseUrl: n.href });
                    return a.isAllowed
                        ? a.url.protocol === s.Lz
                            ? { type: o.I.DEEPLINK, href: e }
                            : '_blank' !== r && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(a.url, n)
                              ? { type: o.I.INTERNAL, href: e }
                              : { type: o.I.EXTERNAL, href: e }
                        : null;
                };
        },
        20585: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => l });
            var l = (function (e) {
                return ((e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e);
            })({});
        },
        28166: (e, t, r) => {
            'use strict';
            r.d(t, { Lz: () => l, ov: () => s });
            let l = ''.concat('yandexmusic', ':'),
                s = ''.concat(l, '//');
        },
        38860: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => o });
            var l = r(53548),
                s = r(41168);
            let o = () => (0, l.useContext)(s.P);
        },
        41168: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => l });
            let l = (0, r(53548).createContext)(null);
        },
        41731: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => o, n: () => s });
            var l = r(53548);
            let s = (0, l.createContext)({ isVisible: !1 }),
                o = () => (0, l.useContext)(s);
        },
        46079: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => l });
            let l = (0, r(53548).createContext)({ isPrefetchDisabled: !0, isPrefetchOnHover: !1 });
        },
        46777: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => i });
            var l = r(55482),
                s = r(53548),
                o = r(46422);
            let i = (e) => {
                let t = (0, o.W)(),
                    r = (0, s.useMemo)(
                        () =>
                            (0, l.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    i = (0, s.useMemo)(
                        () =>
                            (0, l.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: r, moveForward: i };
            };
        },
        49397: (e) => {
            e.exports = { root: 'BaseNotificationError_root__FfGUZ', message: 'BaseNotificationError_message___W_xy' };
        },
        50355: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => l });
            var l = (function (e) {
                return ((e.USER = 'user'), (e.ARTIST = 'artist'), (e.PODCAST = 'podcast'), (e.SPECIAL = 'special'), (e.KIDS = 'kids'), e);
            })({});
        },
        50408: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => a });
            var l,
                s = r(53548),
                o = {
                    810: (e) => {
                        e.exports = l || (l = r.t(s, 2));
                    },
                },
                i = {},
                n = {};
            ((() => {
                (Object.defineProperty(n, '__esModule', { value: !0 }), (n.useForceUpdateRef = void 0));
                let e = (function e(t) {
                    var r = i[t];
                    if (void 0 !== r) return r.exports;
                    var l = (i[t] = { exports: {} });
                    return (o[t](l, l.exports, e), l.exports);
                })(810);
                n.useForceUpdateRef = () => {
                    let [t, r] = (0, e.useState)(null);
                    return [
                        t,
                        (0, e.useCallback)((e) => {
                            r((t) => (t !== e ? e : t));
                        }, []),
                    ];
                };
            })(),
                n.__esModule);
            var a = n.useForceUpdateRef;
        },
        59758: (e, t, r) => {
            'use strict';
            var l;
            (r.d(t, { b: () => l }),
                (function (e) {
                    ((e.Album = 'album'), (e.Artist = 'artist'), (e.Playlist = 'playlist'), (e.Radio = 'fm_radio'), (e.Other = 'other'), (e.Search = 'search'));
                })(l || (l = {})));
        },
        64150: (e, t, r) => {
            'use strict';
            var l;
            (r.d(t, { x: () => l }),
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
                })(l || (l = {})));
        },
        64284: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => l });
            var l = (function (e) {
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
        65453: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => c });
            var l,
                s = r(53548),
                o = {
                    5881: (e, t, r) => {
                        function l() {
                            for (var e, t, r = 0, l = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            l,
                                            s = '';
                                        if ('string' == typeof t || 'number' == typeof t) s += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (l = e(t[r])) && (s && (s += ' '), (s += l));
                                            else for (r in t) t[r] && (s && (s += ' '), (s += r));
                                        return s;
                                    })(e)) &&
                                    (l && (l += ' '), (l += t));
                            return l;
                        }
                        (r.r(t), r.d(t, { clsx: () => l, default: () => s }));
                        let s = l;
                    },
                    7354: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => l }));
                        let l = {
                            root: 'buOTZq_TKQOVyjMLrXvB',
                            block: 'BSPmaubc8UL2KHOMLV4A',
                            iconContainer: 'VUb2BxfgkGQhG1RDQGwF',
                            iconOnly: 'WhDaA5aAfZSjxalYb_Ex',
                            flexIcon: 'vIGeuYz4Cf60Cnuq3WKA',
                            icon_position_left: 'GoUQfg7mJlSkcbAZ28Rj',
                            icon_position_right: 'TXa2RKc_Hf0QPdmUDMwI',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function l(e, t, l) {
                            var s = null;
                            if ((void 0 !== l && (s = '' + l), void 0 !== t.key && (s = '' + t.key), 'key' in t))
                                for (var o in ((l = {}), t)) 'key' !== o && (l[o] = t[o]);
                            else l = t;
                            return { $$typeof: r, type: e, key: s, ref: void 0 !== (t = l.ref) ? t : null, props: l };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = l), (t.jsxs = l));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    3616: function (e, t, r) {
                        var l =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0));
                        let s = r(4377),
                            o = r(810),
                            i = r(5881),
                            n = l(r(7354)),
                            a = (e) => {
                                let {
                                        component: t = (0, s.jsx)('a', {}),
                                        block: r,
                                        target: l,
                                        rel: a,
                                        href: c,
                                        forwardRef: u,
                                        iconPosition: d = 'left',
                                        flexIcon: _,
                                        icon: T,
                                        className: S,
                                        children: f,
                                        textClassName: A = '',
                                        containerClassName: I,
                                        ...E
                                    } = e,
                                    p = (0, o.useId)(),
                                    m = !o.Children.count(f),
                                    L = 'left' === d,
                                    y = null;
                                if (void 0 !== T) {
                                    var R;
                                    y = (0, o.cloneElement)(T, {
                                        className: (0, i.clsx)(
                                            n.default.icon,
                                            { [n.default['icon_position_'.concat(d)]]: !m && d },
                                            null == (R = T.props) ? void 0 : R.className,
                                        ),
                                        key: p,
                                    });
                                }
                                let O = (0, o.useMemo)(
                                    () =>
                                        T
                                            ? (0, s.jsxs)('div', {
                                                  className: (0, i.clsx)(n.default.iconContainer, I),
                                                  children: [L && y, !m && (0, s.jsx)('span', { className: A, children: f }), !L && y],
                                              })
                                            : f,
                                    [f, I, T, L, m, y, A],
                                );
                                return (0, o.cloneElement)(
                                    t,
                                    {
                                        ref: u,
                                        target: l,
                                        rel: '_blank' === l && void 0 === a ? 'noopener noreferrer' : a,
                                        href: c,
                                        className: (0, i.clsx)(n.default.root, { [n.default.block]: r, [n.default.flexIcon]: T && _, [n.default.iconOnly]: T && m }, S),
                                        ...E,
                                        ...t.props,
                                    },
                                    O,
                                );
                            };
                        t.Link = (0, o.forwardRef)((e, t) => (0, s.jsx)(a, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = l || (l = r.t(s, 2));
                    },
                },
                i = {};
            function n(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return (o[e].call(r.exports, r, r.exports, n), r.exports);
            }
            ((n.d = (e, t) => {
                for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (n.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var a = {};
            (() => {
                (Object.defineProperty(a, 'X', { value: !0 }), (a.r = void 0));
                var e = n(3616);
                Object.defineProperty(a, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var c = a.r;
            a.X;
        },
        66943: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => u });
            var l = r(88800),
                s = r(65724),
                o = r(73170),
                i = r(29504),
                n = r(59304),
                a = r(49397),
                c = r.n(a);
            let u = (e) => {
                let { error: t, closeToast: r, className: a } = e;
                return (0, l.jsx)(n.$, {
                    className: (0, s.$)(c().root, a),
                    message: (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(o.q, { children: (0, l.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, l.jsx)(i.HL, { className: c().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: r,
                });
            };
        },
        69704: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => s, W: () => o });
            var l = r(53548);
            let s = (0, l.createContext)({ theme: null, setTheme: () => {} }),
                o = () => (0, l.useContext)(s);
        },
        73170: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => c });
            var l,
                s = r(53548),
                o = {
                    5881: (e, t, r) => {
                        function l() {
                            for (var e, t, r = 0, l = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            l,
                                            s = '';
                                        if ('string' == typeof t || 'number' == typeof t) s += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (l = e(t[r])) && (s && (s += ' '), (s += l));
                                            else for (r in t) t[r] && (s && (s += ' '), (s += r));
                                        return s;
                                    })(e)) &&
                                    (l && (l += ' '), (l += t));
                            return l;
                        }
                        (r.r(t), r.d(t, { clsx: () => l, default: () => s }));
                        let s = l;
                    },
                    7319: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => l }));
                        let l = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function l(e, t, l) {
                            var s = null;
                            if ((void 0 !== l && (s = '' + l), void 0 !== t.key && (s = '' + t.key), 'key' in t))
                                for (var o in ((l = {}), t)) 'key' !== o && (l[o] = t[o]);
                            else l = t;
                            return { $$typeof: r, type: e, key: s, ref: void 0 !== (t = l.ref) ? t : null, props: l };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = l), (t.jsxs = l));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    5531: function (e, t, r) {
                        var l =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let s = r(4377),
                            o = r(5881),
                            i = r(810),
                            n = l(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: l, ...a } = e,
                                c = (0, o.clsx)(n.default.root, { [n.default.focusable]: r }, t);
                            return (0, i.isValidElement)(l)
                                ? (0, i.cloneElement)(l, { ...a, className: (0, o.clsx)(c, l.props.className) })
                                : (0, s.jsx)('span', { className: c, ...a, children: l });
                        };
                    },
                    810: (e) => {
                        e.exports = l || (l = r.t(s, 2));
                    },
                },
                i = {};
            function n(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return (o[e].call(r.exports, r, r.exports, n), r.exports);
            }
            ((n.d = (e, t) => {
                for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (n.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var a = {};
            (() => {
                (Object.defineProperty(a, '__esModule', { value: !0 }), (a.SROnly = void 0));
                var e = n(5531);
                Object.defineProperty(a, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = a.SROnly;
            a.__esModule;
        },
        75914: (e, t, r) => {
            'use strict';
            var l;
            (r.d(t, { m: () => l }),
                (function (e) {
                    ((e.WAVE = 'WAVE'), (e.ACTION = 'ACTION'), (e.SHARE = 'SHARE'), (e.SIMPLE = 'SIMPLE'), (e.LIKE = 'LIKE'));
                })(l || (l = {})));
        },
        78275: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => a });
            var l,
                s = r(53548),
                o = {
                    810: (e) => {
                        e.exports = l || (l = r.t(s, 2));
                    },
                },
                i = {},
                n = {};
            ((() => {
                (Object.defineProperty(n, '__esModule', { value: !0 }), (n.useToggle = void 0));
                let e = (function e(t) {
                    var r = i[t];
                    if (void 0 !== r) return r.exports;
                    var l = (i[t] = { exports: {} });
                    return (o[t](l, l.exports, e), l.exports);
                })(810);
                n.useToggle = (t) => {
                    let [r, l] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        l(t);
                    }, [t]);
                    let s = (0, e.useCallback)(() => {
                            l((e) => !e);
                        }, []),
                        o = (0, e.useCallback)(() => {
                            l(!0);
                        }, []),
                        i = (0, e.useCallback)(() => {
                            l(!1);
                        }, []);
                    return { state: r, toggle: s, setState: l, toggleTrue: o, toggleFalse: i };
                };
            })(),
                n.__esModule);
            var a = n.useToggle;
        },
        78940: (e, t, r) => {
            'use strict';
            (r.d(t, { Z: () => a }), r(30282));
            var l = r(58390),
                s = r(29993),
                o = r(67174),
                i = r(15947),
                n = r(97261);
            let a = (e) => {
                let t = (0, l.useRouter)(),
                    { href: r, target: a } = (0, o.u)(e);
                return (0, s.c)((e) => {
                    let l = (0, i.U)(r, window.location.href, a);
                    if (!l) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (l.type === n.I.EXTERNAL || l.type === n.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: r } = (0, o.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, r);
                              })(l.href)
                            : t.push(l.href));
                });
            };
        },
        79070: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => s });
            var l = {};
            (Object.defineProperty(l, '__esModule', { value: !0 }), (l.useReturnValue = void 0), (l.useReturnValue = (e) => e()), l.__esModule);
            var s = l.useReturnValue;
        },
        79390: (e, t, r) => {
            'use strict';
            var l;
            (r.d(t, { f: () => l }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(l || (l = {})));
        },
        84384: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => d });
            var l = r(53548);
            r(30282);
            var s = r(64543),
                o = r(58390),
                i = r(64284),
                n = r(18593),
                a = r(98427),
                c = r(1344);
            let u = [i.U.TRAILER],
                d = (e) => {
                    let t = ((e) => {
                            let t = null == e ? void 0 : e.pageId,
                                r = null == e ? void 0 : e.blockId,
                                o = null == e ? void 0 : e.pageEntityId,
                                { screen: i, block: n } = (0, s.j)(),
                                a = null == i ? void 0 : i.pageIdForFrom,
                                c = null == i ? void 0 : i.mainObjectId,
                                u = null == n ? void 0 : n.blockId;
                            return (0, l.useMemo)(() => ({ pageId: null != t ? t : a, blockId: null != r ? r : u, pageEntityId: null != o ? o : c }), [r, u, t, o, a, c]);
                        })(e),
                        r = ((e) => {
                            let { pageId: t, blockId: r } = e;
                            return (0, l.useMemo)(() => {
                                let e = ['desktop'];
                                return (t && e.push(t.toLowerCase()), r && e.push(r.toLowerCase()), e.push('default'), e.join('-'));
                            }, [r, t]);
                        })(t),
                        i = ((e) => {
                            let { pageId: t, blockId: r, pageEntityId: s, contextType: i, contextId: d, utmForPageIds: _ } = e,
                                T = (0, o.useSearchParams)();
                            return (0, l.useMemo)(
                                () =>
                                    ((e) => {
                                        let { searchParams: t, pageId: r, pageEntityId: l, utmForPageIds: s, contextId: o, contextType: i, blockId: d } = e,
                                            _ = t && Object.fromEntries(t),
                                            T = ((e) => {
                                                switch (e) {
                                                    case a.b.ALBUM:
                                                    case a.b.PROMOLANDING_ALBUM:
                                                    case a.b.AUDIOBOOK:
                                                    case a.b.PODCAST:
                                                        return n.K.Album;
                                                    case a.b.ARTIST:
                                                    case a.b.ARTIST_TRACKS:
                                                    case a.b.ARTIST_ALBUMS:
                                                    case a.b.ARTIST_DISCOGRAPHY:
                                                        return n.K.Artist;
                                                    case a.b.PLAYLIST:
                                                        return n.K.Playlist;
                                                    default:
                                                        return null;
                                                }
                                            })(r);
                                        return !T || !_ || !l || u.includes(d)
                                            ? null
                                            : (Array.isArray(s) ? s.map((e) => String(e)).includes(String(l)) : !!o && T === i && String(o) === String(l)) && _
                                              ? (0, c.Z)(_)
                                              : null;
                                    })({ searchParams: T, pageId: t, pageEntityId: s, utmForPageIds: _, contextId: d, contextType: i, blockId: r }),
                                [T, t, s, d, i, r, _],
                            );
                        })({
                            ...t,
                            contextType: null == e ? void 0 : e.contextType,
                            contextId: null == e ? void 0 : e.contextId,
                            utmForPageIds: null == e ? void 0 : e.utmForPageIds,
                        });
                    return (0, l.useMemo)(() => ({ from: r, utmLink: i || void 0 }), [r, i]);
                };
        },
        86165: (e, t, r) => {
            'use strict';
            var l;
            (r.d(t, { y: () => l }),
                (function (e) {
                    ((e.LINEUP = 'LINEUP'), (e.LINEUP_WITH_FESTIVAL = 'LINEUP_WITH_FESTIVAL'), (e.LINEUP_WITH_FESTIVAL_IMAGE = 'LINEUP_WITH_FESTIVAL_IMAGE'));
                })(l || (l = {})));
        },
        89988: (e, t, r) => {
            'use strict';
            r.d(t, {
                $$: () => S,
                EK: () => c,
                GF: () => i,
                Tu: () => n,
                VI: () => a,
                bF: () => u,
                bg: () => _,
                e0: () => T,
                fZ: () => o,
                g2: () => l,
                ur: () => d,
                wO: () => s,
            });
            let l = 'avatars.mds.yandex.net/get-music-misc/28592/img.68eebe12749d24738fe2018e/%%',
                s = 'avatars.mds.yandex.net/get-music-misc/28592/img.68eebdb294053d016bcd7bf0/%%',
                o = 0.5,
                i = 1.5,
                n = 1,
                a = 1920,
                c = 20,
                u = 1.7,
                d = 16,
                _ = '.swiper-pagination,[data-screenshot-hidden]',
                T = 600,
                S = '  •  ';
        },
        91292: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => T });
            var l = r(88800),
                s = r(53548),
                o = r(12389),
                i = r.n(o),
                n = r(29993),
                a = r(65453),
                c = r(46079),
                u = r(67174);
            let d = (e) => {
                    let [t, r] = (0, s.useState)(!1),
                        o = (0, n.c)(() => {
                            r(!0);
                        });
                    return (0, l.jsx)(i(), { prefetch: t, ...e, onMouseEnter: o });
                },
                _ = (e) => {
                    let { forwardedRef: t, href: r, component: o, ...n } = e,
                        { isPrefetchDisabled: _, isPrefetchOnHover: T } = (0, s.useContext)(c.j),
                        { href: S, target: f, rel: A } = (0, u.u)(null != r ? r : ''),
                        I = (0, s.isValidElement)(o)
                            ? o
                            : (function (e, t, r) {
                                  return e ? (t ? (0, l.jsx)(i(), { prefetch: !1 }) : r ? (0, l.jsx)(d, { href: e }) : (0, l.jsx)(i(), {})) : (0, l.jsx)('a', {});
                              })(r, _, T);
                    return (0, l.jsx)(a.N, { ref: t, component: I, href: r ? S : void 0, target: f, rel: A, ...n });
                },
                T = (0, s.forwardRef)((e, t) => (0, l.jsx)(_, { ...e, forwardedRef: t }));
        },
        95210: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => o });
            var l = r(53548),
                s = r(38860);
            let o = (e) => {
                let t = (0, l.useRef)(!1),
                    r = (0, s.z)();
                (0, l.useEffect)(() => {
                    (e && (null == r || r.disable(), (t.current = !0)), !e && t.current && (null == r || r.enable(), (t.current = !1)));
                }, [e, r]);
            };
        },
        97261: (e, t, r) => {
            'use strict';
            r.d(t, { I: () => l });
            var l = (function (e) {
                return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
            })({});
        },
        98427: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => l });
            var l = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.ARTIST_TRACKS = 'artist_tracks'),
                    (e.ARTIST_SIMILAR = 'artist_similar'),
                    (e.ARTIST_ALBUMS = 'artist_albums'),
                    (e.ARTIST_DISCOGRAPHY = 'artist_discography'),
                    (e.ARTIST_COMPILATIONS = 'artist_compilations'),
                    (e.ARTIST_CONCERTS = 'artist_concerts_screen'),
                    (e.ARTIST_CLIPS = 'artist_clips'),
                    (e.CHART = 'chart'),
                    (e.CHART_PODCASTS = 'chart_podcasts'),
                    (e.CHART_PODCASTS_CATEGORY = 'chart_podcasts_category'),
                    (e.HOME = 'home'),
                    (e.SEARCH = 'search'),
                    (e.SIDEBAR = 'sidebar'),
                    (e.OWN_COLLECTION = 'own_collection'),
                    (e.OWN_ALBUMS = 'own_albums'),
                    (e.OWN_DISLIKES = 'own_dislikes'),
                    (e.OWN_PODCASTS = 'own_podcasts'),
                    (e.OWN_ARTISTS = 'own_artists'),
                    (e.OWN_PLAYLISTS = 'own_playlists'),
                    (e.OWN_TRACKS = 'own_tracks'),
                    (e.OWN_CLIPS = 'own_clips'),
                    (e.RADIO = 'radio'),
                    (e.GENRE = 'genre'),
                    (e.GENRE_ALBUMS = 'genre_albums'),
                    (e.GENRE_ARTISTS = 'genre_artists'),
                    (e.GENRE_PLAYLISTS = 'genre_playlists'),
                    (e.TAG = 'tag'),
                    (e.POST = 'post'),
                    (e.HISTORY = 'history'),
                    (e.FAMILIAR_YOU = 'familiar_you'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.NON_MUSIC = 'non_music'),
                    (e.NON_MUSIC_CATEGORY_PLAYLISTS = 'non_music_category_playlists'),
                    (e.NON_MUSIC_ALBUMS = 'non_music_albums'),
                    (e.LANDING = 'landing'),
                    (e.ENTITIES = 'entities'),
                    (e.TRAILER = 'trailer'),
                    (e.TRACK = 'track'),
                    (e.TRACK_SCREEN = 'track_screen'),
                    (e.PLAYER = 'player'),
                    (e.KIDS = 'kids'),
                    (e.KIDS_EDITORIAL_PLAYLISTS = 'kids_editorial_playlists'),
                    (e.KIDS_EDITORIAL_ALBUMS = 'kids_editorial_albums'),
                    (e.DOWNLOADS_TRACKS = 'downloads_tracks'),
                    (e.TRAILER_OF_THE_YEAR = 'trailer_of_the_year'),
                    (e.COLLECTION_KIDS = 'collection_kids'),
                    (e.COLLECTION_KIDS_ALBUMS = 'collection_kids_albums'),
                    (e.COLLECTION_KIDS_PLAYLISTS = 'collection_kids_playlists'),
                    (e.COLLECTION_KIDS_TRACKS = 'collection_kids_tracks'),
                    (e.COLLECTION_VIBE_ROOMS = 'multivibe_screen'),
                    (e.VIDEO_PLAYER = 'video_player'),
                    (e.LABEL = 'label'),
                    (e.LABEL_ALBUMS = 'label_albums'),
                    (e.LABEL_ARTISTS = 'label_artists'),
                    (e.PAYWALL = 'paywall'),
                    (e.CONCERTS = 'concerts'),
                    (e.CONCERT_LOCATION_SELECTOR = 'concert_location_selector'),
                    (e.PROMOLANDING_ALBUM = 'promolanding_album'),
                    (e.CONCERT = 'concert_screen'),
                    (e.PAGE_NOT_FOUND_SCREEN = 'page_not_found_screen'),
                    (e.SLIDES_SCREEN = 'slides_screen'),
                    (e.WAVE_LANDING_SCREEN = 'wave_landing_screen'),
                    (e.FACT_SCREEN = 'fact_screen'),
                    (e.LUMEN_FACT_SCREEN = 'lumen_fact_screen'),
                    (e.LUMEN_AWAKENING_SCREEN = 'lumen_awakening_screen'),
                    (e.MULTIVIBE_SENDING_INVITATION_SCREEN = 'multivibe_sending_invitation_screen'),
                    (e.MULTIVIBE_ACTION_SCREEN = 'multivibe_action_screen'),
                    (e.MULTIVIBE_LIMIT_SCREEN = 'multivibe_limit_screen'),
                    (e.MULTIVIBE_UNIFIED_SCREEN = 'multivibe_unified_screen'),
                    e
                );
            })({});
        },
    },
]);
