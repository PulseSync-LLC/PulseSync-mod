'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6477],
    {
        36477: (t, e, s) => {
            s.d(e, { u: () => c });
            var i = s(80451);
            let l = {
                '/': '',
                '/404': '',
                '/album/:albumId': '',
                '/album/:albumId/track/:trackId': '',
                '/artist/:artistId': '',
                '/artist/:artistId/albums': '',
                '/artist/:artistId/compilations': '',
                '/artist/:artistId/concerts': '',
                '/artist/:artistId/discography': '',
                '/artist/:artistId/familiar': '',
                '/artist/:artistId/similar': '',
                '/artist/:artistId/tracks': '',
                '/artist/:artistId/videos': '',
                '/chart': '',
                '/chart/podcasts': '',
                '/chart/podcasts/category/:categoryId': '',
                '/collection': '',
                '/collection/albums': '',
                '/collection/artists': '',
                '/collection/clips': '',
                '/collection/dislikes': '',
                '/collection/kids': '',
                '/collection/kids/albums': '',
                '/collection/kids/playlists': '',
                '/collection/kids/tracks': '',
                '/collection/multivibes': '',
                '/collection/non-music': '',
                '/collection/non-music/liked': '',
                '/collection/playlists': '',
                '/collection/playlists/created': '',
                '/collection/playlists/liked': '',
                '/collection/shelf': '',
                '/collection/shelf/liked': '',
                '/collection/shelf/new-episodes': '',
                '/collection/shelf/recently-played': '',
                '/concert/:concertId': '',
                '/concerts': '',
                '/concerts/details/:type/:id': '',
                '/entities/:blockType/:blockId': '',
                '/genre/:metatagId': '',
                '/genre/:metatagId/albums': '',
                '/genre/:metatagId/artists': '',
                '/genre/:metatagId/playlists': '',
                '/kids': '',
                '/kids/category/:categoryId': '',
                '/kids/editorial/album/:id': '',
                '/kids/editorial/playlist/:id': '',
                '/label/:labelId': '',
                '/label/:labelId/albums': '',
                '/label/:labelId/artists': '',
                '/landing-promo-preview': '',
                '/landing/:skeleton': '',
                '/login-status': '',
                '/mixes': '',
                '/mixes/:navigationId': '',
                '/multivibe': '',
                '/multivibe/:roomId': '',
                '/music-history': '',
                '/mymusic/favorite_tracks': '',
                '/non-music': '',
                '/non-music/category/:id': '',
                '/non-music/category/:id/albums': '',
                '/non-music/editorial/album/:id': '',
                '/non-music/editorial/playlist/:categoryId': '',
                '/oauth': '',
                '/pay': '',
                '/playlist/:playlistId': '',
                '/playlists/:playlistUuid': '',
                '/plus': '',
                '/post/:promoId': '',
                '/promolanding/album/:albumId': '',
                '/search': '',
                '/search/history': '',
                '/settings': '',
                '/slides/artist/:artistId': '',
                '/slides/kids': '',
                '/slides/podcast/:podcastId': '',
                '/slides/special/:campaignId': '',
                '/slides/user': '',
                '/tag/:tagId': '',
                '/track/:trackId': '',
                '/users': '',
                '/users/:userId/playlists/:kind': '',
                '/video': '',
            };
            var r = s(53161);
            let n = (t) => {
                    var e;
                    if (!t) return t;
                    let s = (null != (e = t.split('?')[0]) ? e : '').split('/').filter(Boolean);
                    for (let t of Object.keys(l)) {
                        let e = t.split('/').filter(Boolean);
                        if (s.length !== e.length) continue;
                        let i = !0;
                        for (let t = 0; t < e.length; t++) {
                            let l = e[t],
                                r = s[t];
                            if (l && !l.startsWith(':') && l !== r) {
                                i = !1;
                                break;
                            }
                        }
                        if (i) return t;
                    }
                    return t;
                },
                o = (t) => {
                    let e = [],
                        s = t.split('/').filter(Boolean),
                        i = [];
                    for (let t of s) t.startsWith(':') ? e.push(t.substring(1)) : i.push(t);
                    let l = '/'.concat(i.join('/'));
                    if (0 === e.length) return t;
                    let r = e.map((t) => ''.concat(t, '=:').concat(t)).join('&');
                    return ''.concat(l, '?').concat(r);
                },
                a = (t) =>
                    t
                        .split('/')
                        .filter(Boolean)
                        .filter((t) => t.startsWith(':'))
                        .map((t) => t.substring(1)),
                c = function (t) {
                    for (var e, s = arguments.length, c = Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++) c[u - 1] = arguments[u];
                    let [d] = c,
                        h = t.includes(':'),
                        g = t.includes('?'),
                        p = 'string' == typeof t ? t : String(t);
                    if (
                        (p.includes(r.nl) && (d = { ...d, options: { ...(null == d ? void 0 : d.options), isExternalLink: !0 } }),
                        g &&
                            ((t) => {
                                let [e, s] = t.split('?'),
                                    i = new URLSearchParams(s);
                                return Object.keys(l).some((t) => {
                                    let s = a(t);
                                    return 0 !== s.length && o(t).split('?')[0] === e && s.every((t) => i.has(t));
                                });
                            })(p))
                    )
                        return (0, i.getLinkAttributesBase)(p, d);
                    if (g && !h) {
                        let t = n(p),
                            s = a(t);
                        if (s.length > 0) {
                            let l = ((t, e) => {
                                    var s;
                                    let i = (null != (s = t.split('?')[0]) ? s : '').split('/').filter(Boolean);
                                    return e
                                        .split('/')
                                        .filter(Boolean)
                                        .reduce((t, e, s) => {
                                            let l = i[s];
                                            return e.startsWith(':') && l && (t[e.substring(1)] = l), t;
                                        }, {});
                                })(p, t),
                                r = {
                                    ...((t, e) => {
                                        let s = t.split('?')[1];
                                        if (!s) return {};
                                        let i = new Set(e),
                                            l = {};
                                        return (
                                            new URLSearchParams(s).forEach((t, e) => {
                                                i.has(e) || (l[e] = t);
                                            }),
                                            l
                                        );
                                    })(p, s),
                                    ...(null != (e = null == d ? void 0 : d.query) ? e : {}),
                                },
                                n = o(t);
                            return (0, i.getLinkAttributesBase)(n, { ...d, params: l, query: r });
                        }
                    }
                    if (h || g) {
                        let t = o(p);
                        return (0, i.getLinkAttributesBase)(t, d);
                    }
                    let b = n(p),
                        m = (function (t, e) {
                            let [s, i] = t.split('?'),
                                l = null == s ? void 0 : s.split('/').filter(Boolean),
                                r = {},
                                n = e.split('/').filter(Boolean);
                            if ((null == l ? void 0 : l.length) !== n.length || (n[0] && !t.startsWith('/'.concat(n[0])))) return r;
                            for (let t = 0; t < n.length; t++) {
                                let e = n[t],
                                    s = l && l[t];
                                (null == e ? void 0 : e.startsWith(':')) && s && (r[e.substring(1)] = s);
                            }
                            return (
                                i &&
                                    i.split('&').map((t) => {
                                        let [e, s] = t.split('=');
                                        e && void 0 !== s && (r[e] = s);
                                    }),
                                r
                            );
                        })(p, b),
                        f = o(b);
                    return (0, i.getLinkAttributesBase)(f, { ...d, params: m });
                };
        },
        53161: (t, e, s) => {
            s.d(e, { k7: () => i, nl: () => l });
            let i = 1e3,
                l = 'https://';
        },
        80451: (t, e, s) => {
            s.r(e),
                s.d(e, {
                    AVATAR_DEFAULT_SIZE: () => h,
                    BurstDebounce: () => E,
                    createAvatarUrl: () => p,
                    createAvatarVideoUrl: () => k,
                    createBurstDebounceDebugLogger: () => x,
                    createObjectFromError: () =>
                        function t(e) {
                            let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new WeakSet();
                            try {
                                if ('object' == typeof e && null !== e) {
                                    if (s.has(e)) return { '[Circular]': !0 };
                                    s.add(e);
                                    let i = y.reduce((i, l) => {
                                        let r = e[l];
                                        return (
                                            void 0 === r || (('cause' === l || 'error' === l) && 'object' == typeof r && null !== r ? (i[l] = t(r, s)) : (i[l] = r)), i
                                        );
                                    }, {});
                                    return (i.ownProperties = Object.getOwnPropertyNames(e).reduce((t, s) => (y.includes(s) || (t[s] = e[s]), t), {})), i;
                                }
                                return { error: e };
                            } catch (s) {
                                let t = { name: '', message: '' };
                                return s instanceof Error && ((t.name = s.name), (t.message = s.message)), { error: e, serializationError: t };
                            }
                        },
                    createVsid: () => v,
                    getDataAttrFromProps: () => L,
                    getLinkAttributesBase: () => I,
                    getTldHost: () => n,
                    hexToHsl: () => j,
                    hexToRgb: () => D,
                    httpsReplacer: () => d,
                    mergeTestIds: () => S,
                    parseJSONSafely: () => B,
                    sanitizeDOM: () => u,
                    stringifyJSONSafely: () => a,
                    toBoolean: () => r,
                });
            var i = s(31534);
            let l = ['1', 'true', 'on', 'yes'];
            function r(t) {
                return !!(!0 === t || 1 === t || ((0, i.A)(t) && l.includes(t.trim().toLowerCase())));
            }
            let n = (t, e, s) => t.replace(s, e);
            var o = s(78944);
            function a(t) {
                let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return o(t, { isJSON: e });
            }
            var c = s(15107);
            function u(t) {
                let e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { whiteList: { a: ['href', 'target', 'rel'], br: [], strong: [], em: [], sup: [], sub: [], p: [], span: ['class'], div: ['class'] } };
                return c(t, e);
            }
            let d = (t) => 'https://'.concat(t.replace(/^(https*:\/\/)/, '')),
                h = 100,
                g = [30, 50, 80, 100, 200, 300, 400, 600, 800, 1e3],
                p = (t, e, s) => {
                    let i;
                    if ('orig' === e) i = 'orig';
                    else {
                        let t = e ? ((t) => [...g].sort((e, s) => Math.abs(t - e) - Math.abs(t - s))[0] || h)(e) : h;
                        i = s ? 'm'.concat(t, 'x').concat(t) : ''.concat(t, 'x').concat(t);
                    }
                    return d(t.replace('%%', i));
                },
                b = [
                    { width: 400, height: 300 },
                    { width: 1280, height: 720 },
                    { width: 1920, height: 1080 },
                ],
                m = b[0],
                f = (t) => ''.concat(t.width, 'x').concat(t.height),
                k = (t, e) => {
                    let s;
                    return (
                        (s = 'orig' === e ? 'orig' : e ? ((t) => f([...b].sort((e, s) => Math.abs(t - e.height) - Math.abs(t - s.height))[0] || m))(e) : f(m)),
                        d(t.replace('%%', s))
                    );
                };
            function v(t, e) {
                let s = '';
                for (; s.length < 44; ) s += (Math.random() + 1).toString(36).substring(3);
                s = s.slice(0, 44);
                let i = t.toString().slice(0, 10);
                return ''.concat(s, 'x').concat(e, 'x0001x').concat(i);
            }
            let y = ['name', 'message', 'stack', 'cause', 'colno', 'lineno', 'filename', 'error', 'data', 'code', 'type', 'detail'],
                I = (t, e) => {
                    let s,
                        { params: i = {}, query: l = {}, options: r = {} } = null != e ? e : {},
                        { isExternalLink: n, host: o, linkType: a, lang: c } = r;
                    if (
                        ((s = Object.entries(i).reduce((t, e) => {
                            let [s, i] = e;
                            return t.replace(':'.concat(s), encodeURIComponent(String(i)));
                        }, t)),
                        Object.keys(l).length && !a)
                    ) {
                        let [t, ...e] = s.split('#'),
                            i = e.length > 0 ? '#'.concat(e.join('#')) : '',
                            r = ((t, e) => {
                                let s = {};
                                for (let [e, i] of Object.entries(t)) s[e] = String(i);
                                let i = new URLSearchParams(s).toString();
                                return i ? (e ? '&'.concat(i) : '?'.concat(i)) : '';
                            })(l, null == t ? void 0 : t.includes('?'));
                        s = ''.concat(t).concat(r).concat(i);
                    }
                    let u = !o;
                    u || (o.endsWith('/') && (s = s.startsWith('/') ? s.substring(1) : s), (s = ''.concat(o).concat(s)));
                    let d = null != n ? n : !u,
                        h = {
                            href: s,
                            target: ((t, e) => {
                                if (!t) return e ? '_blank' : '_self';
                            })(a, d),
                            rel: ((t, e) => t || (e ? 'noreferrer noopener' : ''))(a, d),
                        };
                    return 'alternate' === a && c && (h.hrefLang = c), h;
                };
            function B(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : console;
                if (!t) return null;
                try {
                    return JSON.parse(t);
                } catch (t) {
                    return (t instanceof Error || 'string' == typeof t) && e.error(t), null;
                }
            }
            function S(t, e) {
                return [
                    ...(t || []),
                    ...(e || '')
                        .split(';')
                        .map((t) => {
                            let e = t.trim();
                            if (!e) return;
                            let s = e.split(/[,:]/)[0];
                            if (!s) return;
                            let i = Number(s);
                            return Number.isNaN(i) ? void 0 : i;
                        })
                        .filter((t) => void 0 !== t),
                ];
            }
            let A = /^data-[a-zA-Z0-9-_]+$/,
                L = (t) =>
                    Object.entries(t).reduce((t, e) => {
                        let [s, i] = e;
                        return A.test(s) && 'string' == typeof i && (t[s] = i), t;
                    }, {});
            var w = s(91945),
                T = s(62060);
            let M = '[BurstDebounce]',
                _ = { event: 'color: #0891B2; font-weight: 700', state: 'color: #7C3AED; font-weight: 600', lifecycle: 'color: #D97706; font-weight: 700' };
            function x() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return {
                    logGroup: function (e, s, i) {
                        var l, r;
                        if (!t) return;
                        let n = _[null != (l = null == i ? void 0 : i.type) ? l : 'state'];
                        null != (r = null == i ? void 0 : i.collapsed) && r
                            ? console.groupCollapsed('%c'.concat(M, ' ').concat(e), n)
                            : console.group('%c'.concat(M, ' ').concat(e), n),
                            s && (Object.values(s).some((t) => null !== t && 'object' == typeof t) ? console.log('%c'.concat(M), 'color: #6B7280', s) : console.table(s)),
                            console.groupEnd();
                    },
                };
            }
            class E {
                invoke() {
                    let t = Date.now();
                    if ((this.refreshBurstIdle(t), this.registerAndCheckBurst(t), this.isBurstMode)) {
                        (this.isPendingState = !0), this.logEvent('invoke -> schedule debounced callback'), this.debouncedCallback();
                        return;
                    }
                    this.logEvent('invoke -> execute callback immediately'), this.callback();
                }
                cancel() {
                    (this.isPendingState = !1), this.debouncedCallback.cancel(), this.logLifecycle('cancel pending callback');
                }
                get isPending() {
                    return this.isPendingState;
                }
                dispose() {
                    (this.isPendingState = !1),
                        this.debouncedCallback.cancel(),
                        (this.recentTimestamps = []),
                        (this.isBurstMode = !1),
                        (this.lastInvokeAt = 0),
                        this.logLifecycle('dispose instance state');
                }
                refreshBurstIdle(t) {
                    this.isBurstMode &&
                        t - this.lastInvokeAt > this.config.burstExitIdleMs &&
                        ((this.isBurstMode = !1), (this.recentTimestamps = []), this.logState('burst mode reset by idle timeout'));
                }
                logEvent(t) {
                    this.debugLogger.logGroup('event: '.concat(t), this.getDebugSnapshot(), { type: 'event' });
                }
                logState(t) {
                    this.debugLogger.logGroup('state: '.concat(t), this.getDebugSnapshot(), { type: 'state' });
                }
                logLifecycle(t, e) {
                    this.debugLogger.logGroup('lifecycle: '.concat(t), null != e ? e : this.getDebugSnapshot(), { type: 'lifecycle' });
                }
                getDebugSnapshot() {
                    let t = Date.now();
                    return {
                        isBurstMode: this.isBurstMode,
                        pending: this.isPendingState,
                        recentTimestampsLength: this.recentTimestamps.length,
                        msSinceLastInvoke: 0 === this.lastInvokeAt ? null : t - this.lastInvokeAt,
                    };
                }
                registerAndCheckBurst(t) {
                    let e = this.config.burstThreshold;
                    for (this.recentTimestamps.push(t); this.recentTimestamps.length > e; ) this.recentTimestamps.shift();
                    if (this.recentTimestamps.length === e) {
                        let e = this.recentTimestamps[0];
                        void 0 !== e && t - e <= this.config.burstWindowMs && (this.isBurstMode = !0);
                    }
                    this.lastInvokeAt = t;
                }
                constructor({ callback: t, config: e, enableDebugLogging: s = !1 }) {
                    if (
                        ((0, w._)(this, 'callback', void 0),
                        (0, w._)(this, 'config', void 0),
                        (0, w._)(this, 'recentTimestamps', []),
                        (0, w._)(this, 'isBurstMode', !1),
                        (0, w._)(this, 'lastInvokeAt', 0),
                        (0, w._)(this, 'debouncedCallback', void 0),
                        (0, w._)(this, 'isPendingState', !1),
                        (0, w._)(this, 'debugLogger', void 0),
                        !Number.isInteger(e.burstThreshold) || e.burstThreshold < 1)
                    )
                        throw RangeError('BurstDebounce config.burstThreshold must be a positive integer, got '.concat(e.burstThreshold));
                    (this.callback = t),
                        (this.config = e),
                        (this.debugLogger = x(s)),
                        this.logLifecycle('created', { ...this.config }),
                        (this.debouncedCallback = (0, T.A)(() => {
                            (this.isPendingState = !1), this.logEvent('debounced callback execute'), this.callback();
                        }, e.delay));
                }
            }
            let D = (t) => ({ r: parseInt(t.slice(1, 3), 16), g: parseInt(t.slice(3, 5), 16), b: parseInt(t.slice(5, 7), 16) }),
                j = (t) => {
                    let { r: e, g: s, b: i } = D(t),
                        l = Math.min((e /= 255), (s /= 255), (i /= 255)),
                        r = Math.max(e, s, i),
                        n = r - l,
                        o = 0,
                        a = 0,
                        c = (l + r) / 2;
                    return (
                        (o = Math.round(60 * (o = 0 === n ? 0 : r === e ? ((s - i) / n) % 6 : r === s ? (i - e) / n + 2 : (e - s) / n + 4))) < 0 && (o += 360),
                        0 !== n && (a = n / (1 - Math.abs(2 * c - 1))),
                        { h: o, s: Number((100 * a).toFixed(1)), l: Number((100 * c).toFixed(1)) }
                    );
                };
        },
    },
]);
