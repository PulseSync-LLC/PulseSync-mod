(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4964],
    {
        4086: (e, t, s) => {
            'use strict';
            s.d(t, {
                $$: () => ec,
                $5: () => eg,
                $8: () => A,
                $I: () => f,
                $Y: () => e$,
                A4: () => g,
                CN: () => er,
                CR: () => m,
                DP: () => O,
                DT: () => eP,
                DV: () => ef,
                E: () => R,
                EN: () => i,
                Ez: () => ep,
                GV: () => b,
                Hm: () => l,
                JM: () => en,
                K1: () => H,
                LC: () => eI,
                Lb: () => y,
                Lk: () => el,
                N1: () => eh,
                NN: () => j,
                O9: () => w,
                OP: () => p,
                Oo: () => k,
                P0: () => N,
                P1: () => ea,
                PL: () => eL,
                QG: () => U,
                RD: () => eK,
                RG: () => ew,
                S1: () => a,
                SD: () => V,
                SX: () => eR,
                TD: () => ey,
                TK: () => n,
                Tq: () => eC,
                U2: () => P,
                UB: () => ek,
                Ut: () => q,
                V3: () => E,
                V4: () => S,
                VR: () => eU,
                W5: () => eb,
                WA: () => Y,
                X4: () => $,
                X8: () => x,
                Xc: () => et,
                Zf: () => r,
                Zi: () => eO,
                Zl: () => ei,
                _1: () => h,
                aE: () => J,
                by: () => eT,
                c9: () => ee,
                cZ: () => es,
                dA: () => eD,
                dh: () => e_,
                en: () => Q,
                eu: () => W,
                ff: () => eE,
                gd: () => ed,
                gu: () => c,
                jQ: () => Z,
                ki: () => z,
                mD: () => o,
                mr: () => d,
                nM: () => X,
                ni: () => eM,
                ok: () => K,
                oo: () => L,
                qN: () => B,
                qT: () => em,
                qt: () => _,
                re: () => eo,
                ro: () => F,
                s_: () => eN,
                sv: () => eu,
                tz: () => I,
                u2: () => ev,
                uM: () => eS,
                vH: () => D,
                vg: () => eA,
                wH: () => M,
                wK: () => v,
                xF: () => T,
                y$: () => u,
                yq: () => G,
                zj: () => C,
            });
            let i = 'AfterTrackResource',
                r = 'Logger',
                a = 'TechMetricsLogger',
                o = 'OtelSdk',
                n = 'ModelActionsLogger',
                l = 'HttpClient',
                c = 'HttpBeaconClient',
                u = 'Slam',
                d = 'UgcUploadHttpClient',
                p = 'BaseResourceHttpClient',
                g = 'ResourceHttpClient',
                m = 'ResourceBeaconClient',
                f = 'AccountResource',
                h = 'UsersResource',
                E = 'LandingResource',
                v = 'LandingBlocksResource',
                y = 'Landing3Resource',
                I = 'AlbumResource',
                R = 'SlidesResource',
                _ = 'MusicExternalApiPrefixUrl',
                b = 'MusicResourceFactory',
                S = 'PublicConfig',
                T = 'ServerConfig',
                N = 'TokenConfig',
                L = 'Storage',
                O = 'CookieStorage',
                P = 'LocalStorage',
                A = 'LibraryResource',
                C = 'LumenResource',
                k = 'TracksResource',
                D = 'SessionStorage',
                $ = 'TopResource',
                w = 'ArtistsResource',
                U = 'Authorization',
                M = 'RedAlertResource',
                K = 'RotorResource',
                x = 'WaveResource',
                G = 'SearchResource',
                j = 'SearchPlaylistResource',
                B = 'PlaylistResource',
                F = 'PlaylistsResource',
                X = 'PinResource',
                q = 'MetatagsResource',
                H = 'TagResource',
                W = 'FeedResource',
                V = 'Wizard3Resource',
                Y = 'CONTAINER_USER_ID_TOKEN',
                J = 'PinsResource',
                z = 'MusicHistoryResource',
                Q = 'ChartResource',
                Z = 'ClipsResource',
                ee = 'DynamicPagesResource',
                et = 'CONTAINER_I18N_STORAGE',
                es = 'LyricViewsResource',
                ei = 'NonMusicResource',
                er = 'DonationResource',
                ea = 'LoaderResource',
                eo = 'PrefixlessResource',
                en = 'StreamsResource',
                el = 'FiltersResource',
                ec = 'UgcResource',
                eu = 'CollectionResource',
                ed = 'AdsResource',
                ep = 'PersonalResource',
                eg = 'AvailabilityResource',
                em = 'GetFileInfoResource',
                ef = 'ResourcesFileInfoResource',
                eh = 'DisclaimersResource',
                eE = 'DisclaimerDictionary',
                ev = 'FamilyResource',
                ey = 'ChildrenLandingResource',
                eI = 'TelemetryResource',
                eR = 'Env',
                e_ = 'PromoResource',
                eb = 'RumResource',
                eS = 'AcqOffers',
                eT = 'Ynison',
                eN = 'YnisonNewConnector',
                eL = 'LabelsResource',
                eO = 'RequestExecutionContext',
                eP = 'ConcertsResource',
                eA = 'YaMetrikaController',
                eC = 'RumTransport',
                ek = 'YaMetrikaTransport',
                eD = 'WordsResource',
                e$ = 'WheelResource',
                ew = 'MocksInitializer',
                eU = 'NetworkMonitorFactory',
                eM = 'SkeletonSdk',
                eK = 'TagSandbox';
        },
        7364: (e, t, s) => {
            'use strict';
            s.d(t, { w: () => o });
            var i = s(5120),
                r = s(63565),
                a = s(15656);
            let o = i.gK
                .model('Sort', { sortBy: i.gK.maybe(i.gK.enumeration(Object.values(r.g))), sortOrder: i.gK.maybe(i.gK.enumeration(Object.values(a.x))) })
                .actions((e) => ({
                    setSortBy(t) {
                        e.sortBy = t;
                    },
                    setSortOrder(t) {
                        e.sortOrder = t;
                    },
                }));
        },
        13607: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { _: () => i }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(i || (i = {})));
        },
        15656: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { x: () => i }),
                (function (e) {
                    ((e.ASC = 'asc'), (e.DESC = 'desc'));
                })(i || (i = {})));
        },
        17017: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
        },
        19840: (e, t, s) => {
            'use strict';
            (s.d(t, { G: () => r }), s(46606));
            var i = s(91136);
            class r extends i.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        23341: (e, t, s) => {
            'use strict';
            s.d(t, { j: () => r });
            var i = s(5120);
            let r = i.gK.model('Pager', { page: i.gK.number, perPage: i.gK.number, total: i.gK.number, lastPage: i.gK.maybe(i.gK.boolean) });
        },
        27506: (e, t, s) => {
            'use strict';
            s.d(t, { F: () => i });
            var i = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), e);
            })({});
        },
        27954: (e, t, s) => {
            'use strict';
            s.d(t, { p: () => o });
            var i = s(5120),
                r = s(70850),
                a = s(89625);
            let o = (e) => {
                let t = ((e) => ({ ...(0, r.f)(e), artists: e.artists.map(a.G) }))(e);
                return (0, i.wg)(t);
            };
        },
        30123: (e, t, s) => {
            'use strict';
            s.d(t, { k7: () => i, nl: () => r });
            let i = 1e3,
                r = 'https://';
        },
        30282: (e, t, s) => {
            'use strict';
            s.d(t, { sK: () => y, NN: () => r, $3: () => i, CP: () => u, tE: () => d, Ef: () => p, $5: () => m, IU: () => I, tk: () => f.t, u0: () => v });
            let i = !1,
                r = !0;
            var a = s(9519),
                o = s(39499);
            class n extends o.t {
                constructor(e = 'Internal error', { code: t = 'E_CONFIG', ...s } = {}) {
                    (super(e, { code: t, ...s }), (0, a._)(this, 'name', 'ConfigException'), Object.setPrototypeOf(this, n.prototype));
                }
            }
            class l extends n {
                constructor(e) {
                    (super('The configuration file for environment "'.concat(e, '" does not exist.'), { code: 'E_CONFIG_FILE_NOT_FOUND' }),
                        (0, a._)(this, 'name', 'NotFoundConfigException'),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
            let c = (function (e) {
                    let { manifest: t, getConfig: s } = e,
                        i = new Map();
                    return (e) => {
                        let r = i.get(e);
                        if (r) return r;
                        if (!Object.hasOwn(t, e)) return Promise.reject(new l(e));
                        let a = t[e]().then(s);
                        return (i.set(e, a), a);
                    };
                })({
                    manifest: {
                        development: () => Promise.all([s.e(3075), s.e(6904), s.e(1223), s.e(7689), s.e(347), s.e(7906)]).then(s.bind(s, 27906)),
                        qa: () => Promise.all([s.e(3075), s.e(6904), s.e(1223), s.e(7689), s.e(347), s.e(2978)]).then(s.bind(s, 82978)),
                        stress: () => Promise.all([s.e(3075), s.e(6904), s.e(1223), s.e(7689), s.e(347), s.e(3552)]).then(s.bind(s, 13552)),
                        production: () => Promise.all([s.e(3075), s.e(6904), s.e(1223), s.e(7689), s.e(347), s.e(3760)]).then(s.bind(s, 33760)),
                    },
                    getConfig: (e) => {
                        let { config: t } = e;
                        return t;
                    },
                }),
                u = (e, t) => ''.concat(e, '/').concat(t || '1.0.0'),
                d = (e, t) => (t ? e.afisha.clientId[t] : e.afisha.clientId.web);
            function p(e, t) {
                return t ? e.player.secretKey[t] : '';
            }
            var g = s(49124);
            let m = () => {
                let e = 'window.location.pathname',
                    t = g.env.APP_VERSION || '',
                    s = 'production';
                return {
                    rumSettings: {
                        rumId: 'ru.music.frontend.desktop',
                        project: 'music.frontend.desktop',
                        service: 'frontend-desktop',
                        platform: 'desktop',
                        page: e,
                        heroElement: 'body',
                        version: t,
                        environment: s,
                    },
                    errorBooster: {
                        project: 'music.frontend.desktop',
                        platform: 'desktop',
                        page: e,
                        version: t,
                        environment: s,
                        unhandledRejection: !0,
                        uncaughtException: !0,
                        resourceFails: !0,
                    },
                };
            };
            var f = s(71242),
                h = s(10285),
                E = s(42668);
            let v = (e, t, s) => {
                let { allowCustomPrefixUrl: i, prefixUrl: r } = e.resources.musicExternalApi,
                    a = i && 'string' == typeof s && s.length > 0 ? s : r;
                return (0, h.r)(a, t, E.B);
            };
            var y = (function (e) {
                return ((e.WEB = 'YandexMusicWebNext'), (e.DESKTOP = 'YandexMusicDesktopApp'), e);
            })({});
            let I = async (e) => ({ env: e, publicConfig: await c(e) });
        },
        31510: (e, t, s) => {
            'use strict';
            s.d(t, { e: () => i });
            let i = (e) => ({ uri: e.uri, color: e.color });
        },
        34961: (e, t, s) => {
            'use strict';
            s.d(t, { W: () => h, s: () => E });
            var i = s(88800),
                r = s(84961),
                a = s(58390),
                o = s(53548),
                n = s(35412),
                l = s(39499),
                c = s(89108),
                u = s(70003),
                d = s(72288),
                p = s(16818);
            (0, r.eO)(!1);
            let g = (0, o.createContext)(null),
                m = (e) => {
                    let { children: t, store: s, storeKey: r } = e,
                        a = (0, o.useMemo)(() => ({ store: s, storeKey: r }), [s, r]);
                    return (0, i.jsx)(g.Provider, { value: a, children: t });
                },
                f = (e) => {
                    let { nonce: t, patchKey: s, patchesRef: r } = e;
                    return (
                        (0, a.useServerInsertedHTML)(() => {
                            let e = r.current;
                            return ((r.current = []), 0 === e.length)
                                ? null
                                : (0, i.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, n.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(s, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                h = (e) => {
                    let { createStore: t, patchKey: s } = e,
                        r = () => {
                            var e, t;
                            let i = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[s]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[s], i);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: a, nonce: o } = e,
                                n = (0, p.Y)(),
                                l = (0, d.g)(),
                                { store: g, patchesRef: h } = (0, u.m)({
                                    createStore: () => t({ ...n, rootStore: l }),
                                    getPendingPatchBatches: r,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(f, { nonce: o, patchKey: s, patchesRef: h }), (0, i.jsx)(m, { store: g, storeKey: s, children: a })],
                            });
                        },
                    };
                };
            function E(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    s = (0, o.useContext)(g);
                if (!s || s.storeKey !== e) {
                    var i;
                    if (!t) return null;
                    throw new l.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (i = null == s ? void 0 : s.storeKey) ? i : 'null', expectedStoreKey: e },
                    });
                }
                return s.store;
            }
        },
        35994: (e, t, s) => {
            'use strict';
            s.d(t, { R: () => r });
            var i = s(67174);
            let r = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
        },
        38514: (e, t, s) => {
            'use strict';
            s.d(t, { L: () => r });
            var i = s(67174);
            let r = (e) => (0, i.u)('/album/:albumId', { params: { albumId: e } });
        },
        41928: (e, t, s) => {
            'use strict';
            s.d(t, { B: () => a, N: () => o });
            var i = s(53548),
                r = s(39499);
            let a = (0, i.createContext)(null);
            function o() {
                let e = (0, i.useContext)(a);
                if (null === e) throw new r.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
        },
        42078: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { _: () => i }),
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
                })(i || (i = {})));
        },
        43297: (e, t, s) => {
            'use strict';
            function i() {
                throw Error('Cycle detected');
            }
            function r() {
                if (l > 1) l--;
                else {
                    for (var e, t = !1; void 0 !== n;) {
                        var s = n;
                        for (n = void 0, c++; void 0 !== s;) {
                            var i = s.o;
                            if (((s.o = void 0), (s.f &= -3), !(8 & s.f) && m(s)))
                                try {
                                    s.c();
                                } catch (s) {
                                    t || ((e = s), (t = !0));
                                }
                            s = i;
                        }
                    }
                    if (((c = 0), l--, t)) throw e;
                }
            }
            function a(e) {
                if (l > 0) return e();
                l++;
                try {
                    return e();
                } finally {
                    r();
                }
            }
            s.d(t, { EW: () => v, vA: () => a, vP: () => g });
            var o = void 0,
                n = void 0,
                l = 0,
                c = 0,
                u = 0;
            function d(e) {
                if (void 0 !== o) {
                    var t = e.n;
                    if (void 0 === t || t.t !== o)
                        return (
                            (t = { i: 0, S: e, p: o.s, n: void 0, t: o, e: void 0, x: void 0, r: t }),
                            void 0 !== o.s && (o.s.n = t),
                            (o.s = t),
                            (e.n = t),
                            32 & o.f && e.S(t),
                            t
                        );
                    if (-1 === t.i)
                        return ((t.i = 0), void 0 !== t.n && ((t.n.p = t.p), void 0 !== t.p && (t.p.n = t.n), (t.p = o.s), (t.n = void 0), (o.s.n = t), (o.s = t)), t);
                }
            }
            function p(e) {
                ((this.v = e), (this.i = 0), (this.n = void 0), (this.t = void 0));
            }
            function g(e) {
                return new p(e);
            }
            function m(e) {
                for (var t = e.s; void 0 !== t; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
                return !1;
            }
            function f(e) {
                for (var t = e.s; void 0 !== t; t = t.n) {
                    var s = t.S.n;
                    if ((void 0 !== s && (t.r = s), (t.S.n = t), (t.i = -1), void 0 === t.n)) {
                        e.s = t;
                        break;
                    }
                }
            }
            function h(e) {
                for (var t = e.s, s = void 0; void 0 !== t;) {
                    var i = t.p;
                    (-1 === t.i ? (t.S.U(t), void 0 !== i && (i.n = t.n), void 0 !== t.n && (t.n.p = i)) : (s = t),
                        (t.S.n = t.r),
                        void 0 !== t.r && (t.r = void 0),
                        (t = i));
                }
                e.s = s;
            }
            function E(e) {
                (p.call(this, void 0), (this.x = e), (this.s = void 0), (this.g = u - 1), (this.f = 4));
            }
            function v(e) {
                return new E(e);
            }
            function y(e) {
                var t = e.u;
                if (((e.u = void 0), 'function' == typeof t)) {
                    l++;
                    var s = o;
                    o = void 0;
                    try {
                        t();
                    } catch (t) {
                        throw ((e.f &= -2), (e.f |= 8), I(e), t);
                    } finally {
                        ((o = s), r());
                    }
                }
            }
            function I(e) {
                for (var t = e.s; void 0 !== t; t = t.n) t.S.U(t);
                ((e.x = void 0), (e.s = void 0), y(e));
            }
            function R(e) {
                if (o !== this) throw Error('Out-of-order effect');
                (h(this), (o = e), (this.f &= -2), 8 & this.f && I(this), r());
            }
            function _(e) {
                ((this.x = e), (this.u = void 0), (this.s = void 0), (this.o = void 0), (this.f = 32));
            }
            ((p.prototype.h = function () {
                return !0;
            }),
                (p.prototype.S = function (e) {
                    this.t !== e && void 0 === e.e && ((e.x = this.t), void 0 !== this.t && (this.t.e = e), (this.t = e));
                }),
                (p.prototype.U = function (e) {
                    if (void 0 !== this.t) {
                        var t = e.e,
                            s = e.x;
                        (void 0 !== t && ((t.x = s), (e.e = void 0)), void 0 !== s && ((s.e = t), (e.x = void 0)), e === this.t && (this.t = s));
                    }
                }),
                (p.prototype.subscribe = function (e) {
                    var t = this,
                        s = function () {
                            var s = t.value,
                                i = 32 & this.f;
                            this.f &= -33;
                            try {
                                e(s);
                            } finally {
                                this.f |= i;
                            }
                        },
                        i = new _(s);
                    try {
                        i.c();
                    } catch (e) {
                        throw (i.d(), e);
                    }
                    return i.d.bind(i);
                }),
                (p.prototype.valueOf = function () {
                    return this.value;
                }),
                (p.prototype.toString = function () {
                    return this.value + '';
                }),
                (p.prototype.toJSON = function () {
                    return this.value;
                }),
                (p.prototype.peek = function () {
                    return this.v;
                }),
                Object.defineProperty(p.prototype, 'value', {
                    get: function () {
                        var e = d(this);
                        return (void 0 !== e && (e.i = this.i), this.v);
                    },
                    set: function (e) {
                        if (
                            (o instanceof E &&
                                (function () {
                                    throw Error('Computed cannot have side-effects');
                                })(),
                            e !== this.v)
                        ) {
                            (c > 100 && i(), (this.v = e), this.i++, u++, l++);
                            try {
                                for (var t = this.t; void 0 !== t; t = t.x) t.t.N();
                            } finally {
                                r();
                            }
                        }
                    },
                }),
                ((E.prototype = new p()).h = function () {
                    if (((this.f &= -3), 1 & this.f)) return !1;
                    if (32 == (36 & this.f) || ((this.f &= -5), this.g === u)) return !0;
                    if (((this.g = u), (this.f |= 1), this.i > 0 && !m(this))) return ((this.f &= -2), !0);
                    var e = o;
                    try {
                        (f(this), (o = this));
                        var t = this.x();
                        (16 & this.f || this.v !== t || 0 === this.i) && ((this.v = t), (this.f &= -17), this.i++);
                    } catch (e) {
                        ((this.v = e), (this.f |= 16), this.i++);
                    }
                    return ((o = e), h(this), (this.f &= -2), !0);
                }),
                (E.prototype.S = function (e) {
                    if (void 0 === this.t) {
                        this.f |= 36;
                        for (var t = this.s; void 0 !== t; t = t.n) t.S.S(t);
                    }
                    p.prototype.S.call(this, e);
                }),
                (E.prototype.U = function (e) {
                    if (void 0 !== this.t && (p.prototype.U.call(this, e), void 0 === this.t)) {
                        this.f &= -33;
                        for (var t = this.s; void 0 !== t; t = t.n) t.S.U(t);
                    }
                }),
                (E.prototype.N = function () {
                    if (!(2 & this.f)) {
                        this.f |= 6;
                        for (var e = this.t; void 0 !== e; e = e.x) e.t.N();
                    }
                }),
                (E.prototype.peek = function () {
                    if ((this.h() || i(), 16 & this.f)) throw this.v;
                    return this.v;
                }),
                Object.defineProperty(E.prototype, 'value', {
                    get: function () {
                        1 & this.f && i();
                        var e = d(this);
                        if ((this.h(), void 0 !== e && (e.i = this.i), 16 & this.f)) throw this.v;
                        return this.v;
                    },
                }),
                (_.prototype.c = function () {
                    var e = this.S();
                    try {
                        if (8 & this.f || void 0 === this.x) return;
                        var t = this.x();
                        'function' == typeof t && (this.u = t);
                    } finally {
                        e();
                    }
                }),
                (_.prototype.S = function () {
                    (1 & this.f && i(), (this.f |= 1), (this.f &= -9), y(this), f(this), l++);
                    var e = o;
                    return ((o = this), R.bind(this, e));
                }),
                (_.prototype.N = function () {
                    2 & this.f || ((this.f |= 2), (this.o = n), (n = this));
                }),
                (_.prototype.d = function () {
                    ((this.f |= 8), 1 & this.f || I(this));
                }));
        },
        46606: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        50348: (e, t, s) => {
            'use strict';
            s.d(t, { b: () => i, j: () => r });
            let i = {
                    exactPaths: [
                        '/',
                        '/404',
                        '/album/[albumId]',
                        '/album/[albumId]/track/[trackId]',
                        '/artist/[artistId]',
                        '/artist/[artistId]/albums',
                        '/artist/[artistId]/compilations',
                        '/artist/[artistId]/concerts',
                        '/artist/[artistId]/discography',
                        '/artist/[artistId]/familiar',
                        '/artist/[artistId]/similar',
                        '/artist/[artistId]/tracks',
                        '/artist/[artistId]/videos',
                        '/chart',
                        '/chart/podcasts',
                        '/chart/podcasts/category/[categoryId]',
                        '/collection',
                        '/collection/albums',
                        '/collection/artists',
                        '/collection/clips',
                        '/collection/dislikes',
                        '/collection/kids',
                        '/collection/kids/albums',
                        '/collection/kids/playlists',
                        '/collection/kids/tracks',
                        '/collection/multivibes',
                        '/collection/non-music',
                        '/collection/non-music/liked',
                        '/collection/playlists',
                        '/collection/playlists/created',
                        '/collection/playlists/liked',
                        '/collection/shelf',
                        '/collection/shelf/liked',
                        '/collection/shelf/new-episodes',
                        '/collection/shelf/recently-played',
                        '/concert/[concertId]',
                        '/concerts',
                        '/concerts/details/[type]/[id]',
                        '/entities/[blockType]/[blockId]',
                        '/genre/[metatagId]',
                        '/genre/[metatagId]/albums',
                        '/genre/[metatagId]/artists',
                        '/genre/[metatagId]/playlists',
                        '/kids',
                        '/kids/category/[categoryId]',
                        '/kids/editorial/album/[id]',
                        '/kids/editorial/playlist/[id]',
                        '/label/[labelId]',
                        '/label/[labelId]/albums',
                        '/label/[labelId]/artists',
                        '/landing-promo-preview',
                        '/landing/[skeleton]',
                        '/login-status',
                        '/mixes',
                        '/mixes/[navigationId]',
                        '/multivibe',
                        '/multivibe/[roomId]',
                        '/music-history',
                        '/muzmarket',
                        '/mymusic/favorite_tracks',
                        '/myvibe/[shareId]',
                        '/non-music',
                        '/non-music/category/[id]',
                        '/non-music/category/[id]/albums',
                        '/non-music/editorial/album/[id]',
                        '/non-music/editorial/playlist/[categoryId]',
                        '/oauth',
                        '/pay',
                        '/playlist/[playlistId]',
                        '/playlists/[playlistUuid]',
                        '/plus',
                        '/post/[promoId]',
                        '/promolanding/album/[albumId]',
                        '/search',
                        '/search/history',
                        '/seo/album/[albumId]/track/[trackId]',
                        '/seo/track/[trackId]',
                        '/settings',
                        '/slides/artist/[artistId]',
                        '/slides/kids',
                        '/slides/podcast/[podcastId]',
                        '/slides/special/[campaignId]',
                        '/slides/user',
                        '/tag/[tagId]',
                        '/track/[trackId]',
                        '/users',
                        '/users/[userId]/playlists/[kind]',
                        '/video',
                        '/webview',
                    ],
                    regexPatterns: [
                        '^/$',
                        '^/404$',
                        '^/album/([^/]+)$',
                        '^/album/([^/]+)/track/([^/]+)$',
                        '^/artist/([^/]+)$',
                        '^/artist/([^/]+)/albums$',
                        '^/artist/([^/]+)/compilations$',
                        '^/artist/([^/]+)/concerts$',
                        '^/artist/([^/]+)/discography$',
                        '^/artist/([^/]+)/familiar$',
                        '^/artist/([^/]+)/similar$',
                        '^/artist/([^/]+)/tracks$',
                        '^/artist/([^/]+)/videos$',
                        '^/chart$',
                        '^/chart/podcasts$',
                        '^/chart/podcasts/category/([^/]+)$',
                        '^/collection$',
                        '^/collection/albums$',
                        '^/collection/artists$',
                        '^/collection/clips$',
                        '^/collection/dislikes$',
                        '^/collection/kids$',
                        '^/collection/kids/albums$',
                        '^/collection/kids/playlists$',
                        '^/collection/kids/tracks$',
                        '^/collection/multivibes$',
                        '^/collection/non-music$',
                        '^/collection/non-music/liked$',
                        '^/collection/playlists$',
                        '^/collection/playlists/created$',
                        '^/collection/playlists/liked$',
                        '^/collection/shelf$',
                        '^/collection/shelf/liked$',
                        '^/collection/shelf/new-episodes$',
                        '^/collection/shelf/recently-played$',
                        '^/concert/([^/]+)$',
                        '^/concerts$',
                        '^/concerts/details/([^/]+)/([^/]+)$',
                        '^/entities/([^/]+)/([^/]+)$',
                        '^/genre/([^/]+)$',
                        '^/genre/([^/]+)/albums$',
                        '^/genre/([^/]+)/artists$',
                        '^/genre/([^/]+)/playlists$',
                        '^/kids$',
                        '^/kids/category/([^/]+)$',
                        '^/kids/editorial/album/([^/]+)$',
                        '^/kids/editorial/playlist/([^/]+)$',
                        '^/label/([^/]+)$',
                        '^/label/([^/]+)/albums$',
                        '^/label/([^/]+)/artists$',
                        '^/landing-promo-preview$',
                        '^/landing/([^/]+)$',
                        '^/login-status$',
                        '^/mixes$',
                        '^/mixes/([^/]+)$',
                        '^/multivibe$',
                        '^/multivibe/([^/]+)$',
                        '^/music-history$',
                        '^/muzmarket$',
                        '^/mymusic/favorite_tracks$',
                        '^/myvibe/([^/]+)$',
                        '^/non-music$',
                        '^/non-music/category/([^/]+)$',
                        '^/non-music/category/([^/]+)/albums$',
                        '^/non-music/editorial/album/([^/]+)$',
                        '^/non-music/editorial/playlist/([^/]+)$',
                        '^/oauth$',
                        '^/pay$',
                        '^/playlist/([^/]+)$',
                        '^/playlists/([^/]+)$',
                        '^/plus$',
                        '^/post/([^/]+)$',
                        '^/promolanding/album/([^/]+)$',
                        '^/search$',
                        '^/search/history$',
                        '^/seo/album/([^/]+)/track/([^/]+)$',
                        '^/seo/track/([^/]+)$',
                        '^/settings$',
                        '^/slides/artist/([^/]+)$',
                        '^/slides/kids$',
                        '^/slides/podcast/([^/]+)$',
                        '^/slides/special/([^/]+)$',
                        '^/slides/user$',
                        '^/tag/([^/]+)$',
                        '^/track/([^/]+)$',
                        '^/users$',
                        '^/users/([^/]+)/playlists/([^/]+)$',
                        '^/video$',
                        '^/webview$',
                    ],
                },
                r = {
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
                    '/muzmarket': '',
                    '/mymusic/favorite_tracks': '',
                    '/myvibe/:shareId': '',
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
                    '/seo/album/:albumId/track/:trackId': '',
                    '/seo/track/:trackId': '',
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
                    '/webview': '',
                };
        },
        52440: (e, t, s) => {
            'use strict';
            s.d(t, { I: () => c });
            var i = s(5120),
                r = s(27506),
                a = s(74773),
                o = s(66911),
                n = s(67311),
                l = s(23341);
            function c(e, t) {
                let { useAppendMode: s = !1 } = null != t ? t : {};
                return i.gK
                    .compose(
                        i.gK.model('PageLoader', {
                            items: i.gK.maybeNull(i.gK.array(i.gK.maybeNull(e))),
                            requestsCount: i.gK.optional(i.gK.number, 0),
                            initialRequestLoadingState: i.gK.optional(i.gK.enumeration(Object.values(a.G)), a.G.IDLE),
                            lastRejectedPagesList: i.gK.optional(i.gK.array(i.gK.number), []),
                            pager: i.gK.maybeNull(l.j),
                            pageStates: i.gK.maybeNull(i.gK.array(i.gK.enumeration(Object.values(a.G)))),
                        }),
                        n.p,
                    )
                    .views((e) => {
                        let t = {
                            isPageNeedToLoad: (t) => {
                                var s;
                                return null == (s = e.pageStates) || !s[t] || e.pageStates[t] === a.G.IDLE;
                            },
                            get isSomePageResolved() {
                                var i;
                                return !!((null == (i = e.pageStates) ? void 0 : i.length) && e.pageStates.some((e) => e === a.G.RESOLVE));
                            },
                            get isEmpty() {
                                var r;
                                return t.isSomePageResolved && !(null == (r = e.items) ? void 0 : r.length);
                            },
                            get isNeedToMakeInitialRequest() {
                                return e.initialRequestLoadingState === a.G.IDLE;
                            },
                            get isInitialRequestRejected() {
                                return e.initialRequestLoadingState === a.G.REJECT;
                            },
                            get hasMorePages() {
                                var o;
                                return !!s && !(null == (o = e.pager) ? void 0 : o.lastPage);
                            },
                            get rejectedPagesCount() {
                                var n;
                                if (t.isInitialRequestRejected || !(null == (n = e.pageStates) ? void 0 : n.length)) return 0;
                                return e.pageStates.filter((e) => e === a.G.REJECT).length;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setPageState: (i, r) => {
                                let o;
                                if (([a.G.IDLE, a.G.PENDING].includes(e.initialRequestLoadingState) && (e.initialRequestLoadingState = r), s)) o = i + 1;
                                else {
                                    var n, l, c, u;
                                    o = Math.ceil(
                                        (null != (c = null == (n = e.pager) ? void 0 : n.total) ? c : 0) /
                                            (null != (u = null == (l = e.pager) ? void 0 : l.perPage) ? u : 1),
                                    );
                                }
                                let d = Math.max(i + 1, o);
                                (t.ensurePageStatesInitialized(d), e.pageStates && (e.pageStates[i] = r), r === a.G.REJECT && t.addLastRejectedPageToList(i));
                            },
                            setItems: (n, l) => {
                                var c;
                                let { page: u, pager: d, responseStatus: p } = l;
                                if (((e.requestsCount = (null != (c = e.requestsCount) ? c : 0) + 1), p === r.F.ERROR || !n || !d))
                                    return void t.setPageState(u, a.G.REJECT);
                                (e.pager
                                    ? s && ((e.pager.lastPage = d.lastPage), (e.pager.perPage = d.perPage))
                                    : (e.pager = { page: d.page, perPage: d.perPage, total: d.total, lastPage: d.lastPage }),
                                    t.setPageState(u, a.G.RESOLVE),
                                    (e.pager.page = u),
                                    s
                                        ? (e.items || (e.items = (0, i.wg)([])), e.items && e.items.push(...n))
                                        : (e.items || (e.items = (0, i.wg)(Array.from({ length: e.pager.total }, () => null))),
                                          e.items && (0, o.I)({ items: e.items, mappedRawItems: n, page: u, pageSize: e.pager.perPage })));
                            },
                            resetRejectedPagesState() {
                                var t, s, i;
                                for (let r = 0; r < (null != (s = null == (t = e.pageStates) ? void 0 : t.length) ? s : 0); r++)
                                    (null == (i = e.pageStates) ? void 0 : i[r]) === a.G.REJECT && (e.pageStates[r] = a.G.IDLE);
                            },
                            addLastRejectedPageToList(t) {
                                var s, i, r;
                                for (e.lastRejectedPagesList.push(t); (null != (i = null == (s = e.lastRejectedPagesList) ? void 0 : s.length) ? i : 0) > 5;)
                                    null == (r = e.lastRejectedPagesList) || r.shift();
                            },
                            ensurePageStatesInitialized(t) {
                                if (t <= 0) return;
                                if (!e.pageStates) {
                                    let s = Array.from({ length: t }, () => a.G.IDLE);
                                    e.pageStates = (0, i.wg)(s);
                                    return;
                                }
                                let s = e.pageStates.length;
                                if (t > s) {
                                    let i = Array.from({ length: t - s }, () => a.G.IDLE);
                                    e.pageStates.push(...i);
                                }
                            },
                            reset() {
                                ((e.initialRequestLoadingState = a.G.IDLE),
                                    (e.requestsCount = 0),
                                    (e.lastRejectedPagesList = (0, i.wg)([])),
                                    e.destroyItems([e.items, e.pager, e.pageStates]));
                            },
                        };
                        return t;
                    });
            }
        },
        53892: (e, t, s) => {
            'use strict';
            s.d(t, { n: () => i });
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
        54667: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { S: () => i }),
                (function (e) {
                    ((e.TRACK = 'track'),
                        (e.MUSIC = 'music'),
                        (e.NOISE = 'noise'),
                        (e.PODCAST = 'podcast-episode'),
                        (e.COMMENT = 'comment'),
                        (e.ARTICLE = 'article'),
                        (e.ASMR = 'asmr'),
                        (e.RADIO = 'radio'),
                        (e.SHOW = 'show'),
                        (e.LECTURE = 'lecture'),
                        (e.FAIRY_TALE = 'fairy-tale'),
                        (e.AUDIOBOOK = 'audiobook'),
                        (e.POETRY = 'poetry'));
                })(i || (i = {})));
        },
        61691: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { _: () => i }),
                (function (e) {
                    ((e.UNKNOWN = 'unknown'),
                        (e.ALBUM = 'album'),
                        (e.SINGLE = 'single'),
                        (e.COMPILATION = 'compilation'),
                        (e.PODCAST = 'podcast'),
                        (e.FAIRY_TALE = 'fairy-tale'),
                        (e.AUDIOBOOK = 'audiobook'),
                        (e.VIDEO_SINGLE = 'video-single'),
                        (e.VIDEO_ALBUM = 'video-album'),
                        (e.RADIO = 'radio'),
                        (e.ASMR = 'asmr'),
                        (e.NOISE = 'noise'));
                })(i || (i = {})));
        },
        63565: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { g: () => i }),
                (function (e) {
                    ((e.RATING = 'rating'), (e.YEAR = 'year'));
                })(i || (i = {})));
        },
        65523: (e, t, s) => {
            'use strict';
            s.d(t, { U: () => n });
            var i = s(4086),
                r = s(41928),
                a = s(44084);
            let o = new WeakMap(),
                n = () =>
                    ((e) => {
                        if (e instanceof a.r) return e;
                        let t = o.get(e);
                        if (t) return t;
                        let s = {
                            log: (t, s) => e.info(t, s),
                            trace: (t, s) => e.trace(t, s),
                            debug: (t, s) => e.debug(t, s),
                            info: (t, s) => e.info(t, s),
                            warn: (t, s) => e.warn(t, s),
                            error: (t, s) => e.error(t, s),
                            fatal: (t, s) => e.fatal(t, s),
                            child: (t) => e.child(t),
                        };
                        return (o.set(e, s), s);
                    })((0, r.N)().get(i.Zf));
        },
        66911: (e, t, s) => {
            'use strict';
            function i(e) {
                let { items: t, mappedRawItems: s, page: i, pageSize: r } = e,
                    a = i * r,
                    o = 0;
                for (let e = a; e < a + r; e++) (s[o] && (t[e] = s[o]), o++);
            }
            s.d(t, { I: () => i });
        },
        67174: (e, t, s) => {
            'use strict';
            (s.d(t, { u: () => c }), s(30282));
            var i = s(35412),
                r = s(50348),
                a = s(30123);
            let o = (e) => {
                    var t;
                    if (!e) return e;
                    let s = (null != (t = e.split('?')[0]) ? t : '').split('/').filter(Boolean);
                    for (let e of Object.keys(r.j)) {
                        let t = e.split('/').filter(Boolean);
                        if (s.length !== t.length) continue;
                        let i = !0;
                        for (let e = 0; e < t.length; e++) {
                            let r = t[e],
                                a = s[e];
                            if (r && !r.startsWith(':') && r !== a) {
                                i = !1;
                                break;
                            }
                        }
                        if (i) return e;
                    }
                    return e;
                },
                n = (e) => {
                    let t = [],
                        s = e.split('/').filter(Boolean),
                        i = [];
                    for (let e of s) e.startsWith(':') ? t.push(e.substring(1)) : i.push(e);
                    let r = '/'.concat(i.join('/'));
                    if (0 === t.length) return e;
                    let a = t.map((e) => ''.concat(e, '=:').concat(e)).join('&');
                    return ''.concat(r, '?').concat(a);
                },
                l = (e) =>
                    e
                        .split('/')
                        .filter(Boolean)
                        .filter((e) => e.startsWith(':'))
                        .map((e) => e.substring(1)),
                c = function (e) {
                    for (var t, s = arguments.length, c = Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++) c[u - 1] = arguments[u];
                    let [d] = c,
                        p = e.includes(':'),
                        g = e.includes('?'),
                        m = 'string' == typeof e ? e : String(e);
                    if (
                        (m.includes(a.nl) && (d = { ...d, options: { ...(null == d ? void 0 : d.options), isExternalLink: !0 } }),
                        g &&
                            ((e) => {
                                let [t, s] = e.split('?'),
                                    i = new URLSearchParams(s);
                                return Object.keys(r.j).some((e) => {
                                    let s = l(e);
                                    return 0 !== s.length && n(e).split('?')[0] === t && s.every((e) => i.has(e));
                                });
                            })(m))
                    )
                        return (0, i.no)(m, d);
                    if (g && !p) {
                        let e = o(m),
                            s = l(e);
                        if (s.length > 0) {
                            let r = ((e, t) => {
                                    var s;
                                    let i = (null != (s = e.split('?')[0]) ? s : '').split('/').filter(Boolean);
                                    return t
                                        .split('/')
                                        .filter(Boolean)
                                        .reduce((e, t, s) => {
                                            let r = i[s];
                                            return (t.startsWith(':') && r && (e[t.substring(1)] = r), e);
                                        }, {});
                                })(m, e),
                                a = {
                                    ...((e, t) => {
                                        let s = e.split('?')[1];
                                        if (!s) return {};
                                        let i = new Set(t),
                                            r = {};
                                        return (
                                            new URLSearchParams(s).forEach((e, t) => {
                                                i.has(t) || (r[t] = e);
                                            }),
                                            r
                                        );
                                    })(m, s),
                                    ...(null != (t = null == d ? void 0 : d.query) ? t : {}),
                                },
                                o = n(e);
                            return (0, i.no)(o, { ...d, params: r, query: a });
                        }
                    }
                    if (p || g) {
                        let e = n(m);
                        return (0, i.no)(e, d);
                    }
                    let f = o(m),
                        h = (function (e, t) {
                            let [s, i] = e.split('?'),
                                r = null == s ? void 0 : s.split('/').filter(Boolean),
                                a = {},
                                o = t.split('/').filter(Boolean);
                            if ((null == r ? void 0 : r.length) !== o.length || (o[0] && !e.startsWith('/'.concat(o[0])))) return a;
                            for (let e = 0; e < o.length; e++) {
                                let t = o[e],
                                    s = r && r[e];
                                (null == t ? void 0 : t.startsWith(':')) && s && (a[t.substring(1)] = s);
                            }
                            return (
                                i &&
                                    i.split('&').map((e) => {
                                        let [t, s] = e.split('=');
                                        t && void 0 !== s && (a[t] = s);
                                    }),
                                a
                            );
                        })(m, f),
                        E = n(f);
                    return (0, i.no)(E, { ...d, params: h });
                };
        },
        67311: (e, t, s) => {
            'use strict';
            s.d(t, { p: () => r });
            var i = s(5120);
            let r = i.gK.model('ModelDestroyManager').actions(() => ({
                destroyItems(e) {
                    (e.forEach((e) => {
                        e && (0, i.Yo)(e);
                    }),
                        queueMicrotask(() => {
                            e.forEach((e) => {
                                e && (0, i.zr)(e);
                            });
                        }));
                },
            }));
        },
        71242: (e, t, s) => {
            'use strict';
            s.d(t, { t: () => i });
            let i = {
                statusCodes: {
                    408: { retryPolicy: 'constant-backoff', attempts: [2e3] },
                    429: { retryPolicy: 'constant-backoff', attempts: [2e3] },
                    500: { retryPolicy: 'constant-backoff', attempts: [1e3] },
                    502: { retryPolicy: 'constant-backoff', attempts: [1e3] },
                    503: { retryPolicy: 'constant-backoff', attempts: [1e3] },
                    504: { retryPolicy: 'constant-backoff', attempts: [2e3] },
                    NON_HTTP_ERROR: { retryPolicy: 'constant-backoff', attempts: [1e3] },
                    TIMEOUT: { retryPolicy: 'constant-backoff', attempts: [500] },
                },
                totalRequestsLimit: 2,
            };
        },
        72288: (e, t, s) => {
            'use strict';
            s.d(t, { P: () => a, g: () => o });
            var i = s(53548),
                r = s(39499);
            let a = (0, i.createContext)(null);
            function o() {
                let e = (0, i.useContext)(a);
                if (null === e) throw new r.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        74773: (e, t, s) => {
            'use strict';
            s.d(t, { G: () => i });
            var i = (function (e) {
                return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e);
            })({});
        },
        77451: (e, t, s) => {
            'use strict';
            s.d(t, { Jt: () => a, TF: () => n, hZ: () => o });
            var i = function () {
                return (i =
                    Object.assign ||
                    function (e) {
                        for (var t, s = 1, i = arguments.length; s < i; s++)
                            for (var r in (t = arguments[s])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e;
                    }).apply(this, arguments);
            };
            function r(e, t) {
                if (!t) return '';
                var s = '; ' + e;
                return !0 === t ? s : s + '=' + t;
            }
            function a(e) {
                return (function (e) {
                    for (var t = {}, s = e ? e.split('; ') : [], i = 0; i < s.length; i++) {
                        var r = s[i].split('='),
                            a = r.slice(1).join('=');
                        '"' === a[0] && (a = a.slice(1, -1));
                        try {
                            t[decodeURIComponent(r[0])] = a.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function o(e, t, s) {
                var a;
                document.cookie =
                    ((a = i({ path: '/' }, s)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                r('Expires', e.expires ? e.expires.toUTCString() : '') +
                                r('Domain', e.domain) +
                                r('Path', e.path) +
                                r('Secure', e.secure) +
                                r('SameSite', e.sameSite)
                            );
                        })(a));
            }
            function n(e, t) {
                o(e, '', i(i({}, t), { expires: -1 }));
            }
        },
        79390: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { f: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        80924: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 95549));
        },
        85587: (e, t, s) => {
            'use strict';
            s.d(t, { Z: () => i, n: () => r });
            var i = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                r = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        87550: (e, t, s) => {
            'use strict';
            s.d(t, { J: () => n });
            var i = s(5120),
                r = s(17128),
                a = s(90544),
                o = s(62390);
            let n = r.G.props({ artists: i.gK.maybe(i.gK.array(a.P)), chart: i.gK.maybe(o.I) }).views((e) => ({
                get artistNames() {
                    var t;
                    return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                },
                get artistName() {
                    var s, i, r, a;
                    if (null == (i = e.artists) || null == (s = i[0]) ? void 0 : s.various) return;
                    return null == (a = e.artists) || null == (r = a[0]) ? void 0 : r.name;
                },
                get artistIds() {
                    var o;
                    return null == (o = e.artists) ? void 0 : o.map((e) => e.id);
                },
                get artistId() {
                    var n, l;
                    return null == (l = e.artists) || null == (n = l[0]) ? void 0 : n.id;
                },
            }));
        },
        89916: (e, t, s) => {
            'use strict';
            s.d(t, { GX: () => a.G, X1: () => i.X, m5: () => r.m });
            var i = s(46606),
                r = s(91136),
                a = s(19840);
            s(17017);
        },
        91136: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => r });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: r = {}, ...a } = t,
                        o = e || 'Internal error';
                    (super(o, a), (this.message = o), (this.code = s), (this.data = r), (this.stack = Error(o).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class r extends i {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...s } = {}) {
                    (super(e, { code: t, ...s }), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        95549: (e, t, s) => {
            'use strict';
            s.d(t, { LabelPageStoreProvider: () => S });
            var i,
                r = s(34961),
                a = s(53892),
                o = s(5120),
                n = s(89916);
            !(function (e) {
                ((e.MUSICAL = 'musical'), (e.PUBLISHER = 'publisher'));
            })(i || (i = {}));
            var l = s(27954),
                c = s(87550),
                u = s(98138),
                d = s(90544),
                p = s(74773),
                g = s(67174),
                m = s(59497),
                f = s(67311),
                h = s(7364),
                E = s(27506),
                v = s(52440);
            let y = o.gK
                    .model('LabelAlbumsPage', { pagesLoader: (0, v.I)(c.J), errorStatusCode: o.gK.maybeNull(o.gK.number), sort: h.w })
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.pager && !e.pagesLoader.isInitialRequestRejected;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get totalCount() {
                            var t, s;
                            return null != (s = null == (t = e.pagesLoader.pager) ? void 0 : t.total) ? s : 0;
                        },
                        get items() {
                            var i;
                            return null != (i = e.pagesLoader.items) ? i : [];
                        },
                        get isNotFound() {
                            return e.pagesLoader.isInitialRequestRejected && e.errorStatusCode === n.X1.NOT_FOUND;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, o.L3)(function* (t) {
                            let { labelId: s, page: i = 0, pageSize: r = 20, preloadedAlbums: a, sortBy: c } = t,
                                { labelsResource: u, modelActionsLogger: d } = (0, o._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, p.G.PENDING);
                                    let t = a;
                                    t || (t = yield u.getAlbums({ labelId: s, page: i, pageSize: r, sortBy: c }));
                                    let o = t.albums.map(l.p);
                                    e.pagesLoader.setItems(o, { page: i, pager: t.pager });
                                } catch (t) {
                                    (d.error(t),
                                        t instanceof n.GX && t.statusCode === n.X1.NOT_FOUND && (e.errorStatusCode = n.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: E.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            (e.pagesLoader.reset(), (e.errorStatusCode = null));
                        },
                    })),
                I = o.gK
                    .model('LabelArtistsPage', { pagesLoader: (0, v.I)(d.P), errorStatusCode: o.gK.maybeNull(o.gK.number) })
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.pager && !e.pagesLoader.isInitialRequestRejected;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get totalCount() {
                            var t, s;
                            return null != (s = null == (t = e.pagesLoader.pager) ? void 0 : t.total) ? s : 0;
                        },
                        get items() {
                            var i;
                            return null != (i = e.pagesLoader.items) ? i : [];
                        },
                        get isNotFound() {
                            return e.pagesLoader.isInitialRequestRejected && e.errorStatusCode === n.X1.NOT_FOUND;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, o.L3)(function* (t) {
                            let { labelId: s, page: i = 0, pageSize: r = 20, preloadedArtists: a } = t,
                                { labelsResource: l, modelActionsLogger: c } = (0, o._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, p.G.PENDING);
                                    let t = a;
                                    t || (t = yield l.getArtists({ labelId: s, page: i, pageSize: r }));
                                    let o = t.artists.map(u.d);
                                    e.pagesLoader.setItems(o, { page: i, pager: t.pager });
                                } catch (t) {
                                    (c.error(t),
                                        t instanceof n.GX && t.statusCode === n.X1.NOT_FOUND && (e.errorStatusCode = n.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: E.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            (e.pagesLoader.reset(), (e.errorStatusCode = null));
                        },
                    })),
                R = o.gK
                    .compose(
                        o.gK.model('LabelPage', {
                            id: o.gK.maybeNull(o.gK.string),
                            name: o.gK.maybeNull(o.gK.string),
                            type: o.gK.maybeNull(o.gK.string),
                            albums: o.gK.maybeNull(o.gK.array(c.J)),
                            albumsSubpage: y,
                            artistsSubpage: I,
                            artists: o.gK.maybeNull(o.gK.array(d.P)),
                            errorStatusCode: o.gK.maybeNull(o.gK.number),
                        }),
                        f.p,
                        m.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === p.G.PENDING;
                            },
                            get hasAlbums() {
                                return !!(t.isLoading || (e.albums && e.albums.length > 0));
                            },
                            get hasArtists() {
                                if (t.isPublisher) return !1;
                                return !!(t.isLoading || (e.artists && e.artists.length > 0));
                            },
                            get isNotFound() {
                                let s = e.isResolved && !e.name && !t.hasAlbums && !t.hasArtists,
                                    i = e.errorStatusCode && [n.X1.NOT_FOUND, n.X1.BAD_REQUEST].includes(e.errorStatusCode);
                                return (e.isRejected && i) || s;
                            },
                            get albumsUrl() {
                                if (!e.id) return '';
                                let { href: t } = (0, g.u)('/label/:labelId/albums', { params: { labelId: e.id } });
                                return t;
                            },
                            get artistsUrl() {
                                if (!e.id) return '';
                                let { href: t } = (0, g.u)('/label/:labelId/artists', { params: { labelId: e.id } });
                                return t;
                            },
                            get isPublisher() {
                                return e.type === i.PUBLISHER;
                            },
                            get isMusical() {
                                return e.type === i.MUSICAL;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getAlbums: (0, o.L3)(function* (t) {
                                let { labelsResource: s, modelActionsLogger: i } = (0, o._$)(e);
                                try {
                                    let i = yield s.getAlbums(t);
                                    e.albums = (0, o.wg)(i.albums.map(l.p));
                                } catch (t) {
                                    (i.error(t), t instanceof n.GX && [n.X1.BAD_REQUEST, n.X1.NOT_FOUND].includes(t.statusCode) && (e.errorStatusCode = n.X1.NOT_FOUND));
                                }
                            }),
                            getArtists: (0, o.L3)(function* (t) {
                                let { labelsResource: s, modelActionsLogger: i } = (0, o._$)(e);
                                try {
                                    let i = yield s.getArtists(t);
                                    e.artists = (0, o.wg)(i.artists.map(u.d));
                                } catch (t) {
                                    (i.error(t), t instanceof n.GX && [n.X1.BAD_REQUEST, n.X1.NOT_FOUND].includes(t.statusCode) && (e.errorStatusCode = n.X1.NOT_FOUND));
                                }
                            }),
                            getData: (0, o.L3)(function* (s) {
                                let { labelId: i, preloadedLabel: r, withLabelEntities: a = !0 } = s,
                                    { labelsResource: l, modelActionsLogger: c } = (0, o._$)(e);
                                if (e.loadingState !== p.G.PENDING)
                                    try {
                                        e.loadingState = p.G.PENDING;
                                        let s = r;
                                        (s || (s = yield l.getData({ labelId: i })),
                                            (e.id = String(s.id)),
                                            (e.name = s.name),
                                            (e.type = s.type),
                                            a && (yield t.getAlbums({ labelId: i, pageSize: 8 }), yield t.getArtists({ labelId: i, pageSize: 8 })),
                                            (e.loadingState = p.G.RESOLVE));
                                    } catch (t) {
                                        (c.error(t),
                                            t instanceof n.GX && [n.X1.BAD_REQUEST, n.X1.NOT_FOUND].includes(t.statusCode) && (e.errorStatusCode = t.statusCode),
                                            e.loadingState !== p.G.IDLE && (e.loadingState = p.G.REJECT));
                                    }
                            }),
                            reset() {
                                ((e.loadingState = p.G.IDLE),
                                    (e.id = null),
                                    (e.name = null),
                                    (e.type = null),
                                    (e.errorStatusCode = null),
                                    e.destroyItems([e.albums, e.artists]));
                            },
                        };
                        return t;
                    }),
                _ = { loadingState: p.G.IDLE, albumsSubpage: { pagesLoader: {}, sort: {} }, artistsSubpage: { pagesLoader: {} } },
                { pageStoreProvider: b } = (0, r.W)({ createStore: (e) => R.create(_, e), patchKey: a.n.LABEL }),
                S = b;
        },
        98138: (e, t, s) => {
            'use strict';
            s.d(t, { d: () => a });
            var i = s(5120),
                r = s(89625);
            let a = (e) => {
                let t = (0, r.G)(e);
                return (0, i.wg)(t);
            };
        },
    },
    (e) => {
        (e.O(0, [6706, 1311, 8832, 6904, 5977, 2837, 5277, 763, 2670, 7358], () => e((e.s = 80924))), (_N_E = e.O()));
    },
]);
