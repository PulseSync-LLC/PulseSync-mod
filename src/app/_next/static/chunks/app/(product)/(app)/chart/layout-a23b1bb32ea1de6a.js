(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7642],
    {
        2537: (t, e, i) => {
            'use strict';
            (i.d(e, { x: () => o }), ((r || (r = {})).SMART_PREVIEW = 'smart_preview'));
            var r,
                s = i(48109);
            let o = (t, e) => {
                var i, o, n, a, l, c, u, d, m, g;
                let { isSmartPreview: p, hasEverFinished: f } = e || {},
                    h = (0, s.Q)(null == t ? void 0 : t.derivedColors),
                    v = p ? (null == t || null == (i = t.smartPreviewParams) ? void 0 : i.durationMs) : null == t ? void 0 : t.durationMs,
                    y = { available: !!(null == t || null == (o = t.specialAudioResources) ? void 0 : o.includes(r.SMART_PREVIEW)) };
                return {
                    id: ((null == t ? void 0 : t.id) || 0).toString(),
                    isAvailable: !!(null == t ? void 0 : t.available),
                    isRemoved: (null == t ? void 0 : t.error) === 'not-found',
                    title: null != (m = null == t ? void 0 : t.title) ? m : '',
                    version: null == t ? void 0 : t.version,
                    durationMs: v,
                    coverUri: null == t ? void 0 : t.coverUri,
                    averageColor: h,
                    trackParameters: null == t ? void 0 : t.trackParameters,
                    trackSource: null == t ? void 0 : t.trackSource,
                    albumId: null == t || null == (a = t.albums) || null == (n = a[0]) ? void 0 : n.id,
                    disclaimers: null == t ? void 0 : t.disclaimers,
                    type: null == t ? void 0 : t.type,
                    pubDate: null == t ? void 0 : t.pubDate,
                    hasLyrics: null == t || null == (l = t.lyricsInfo) ? void 0 : l.hasAvailableTextLyrics,
                    hasSyncLyrics: null == t || null == (c = t.lyricsInfo) ? void 0 : c.hasAvailableSyncLyrics,
                    shouldRememberPosition: null == t ? void 0 : t.rememberPosition,
                    streamProgress: ((t, e) => ({
                        endPositionSec: null == t ? void 0 : t.endPositionSec,
                        hasEverFinished: (null == e ? void 0 : e.hasEverFinished) || (null == t ? void 0 : t.everFinished),
                    }))(null == t ? void 0 : t.streamProgress, { hasEverFinished: f }),
                    shortDescription: null != (g = null == t ? void 0 : t.shortDescription) ? g : '',
                    trailer: y,
                    clipIds: null == t ? void 0 : t.clipIds,
                    major: (null == t ? void 0 : t.major) ? { id: t.major.id, name: t.major.name } : null,
                    genre: null == t || null == (d = t.albums) || null == (u = d[0]) ? void 0 : u.genre,
                    realId: null == t ? void 0 : t.realId,
                    cutoutCover: null == t ? void 0 : t.cutoutCover,
                };
            };
        },
        4086: (t, e, i) => {
            'use strict';
            i.d(e, {
                $$: () => tc,
                $5: () => tg,
                $8: () => N,
                $I: () => f,
                $Y: () => tK,
                A4: () => g,
                CN: () => ts,
                CR: () => p,
                DP: () => A,
                DT: () => tP,
                DV: () => tf,
                E: () => b,
                EN: () => r,
                Ez: () => tm,
                GV: () => T,
                Hm: () => l,
                JM: () => ta,
                K1: () => X,
                LC: () => tI,
                Lb: () => E,
                Lk: () => tl,
                N1: () => th,
                NN: () => F,
                O9: () => w,
                OP: () => m,
                Oo: () => L,
                P0: () => R,
                P1: () => to,
                PL: () => tO,
                QG: () => M,
                RD: () => tU,
                RG: () => tw,
                S1: () => o,
                SD: () => Y,
                SX: () => tb,
                TD: () => tE,
                TK: () => a,
                Tq: () => tC,
                U2: () => P,
                UB: () => tL,
                Ut: () => H,
                V3: () => v,
                V4: () => k,
                VR: () => tM,
                W5: () => tT,
                WA: () => J,
                X4: () => K,
                X8: () => x,
                Xc: () => te,
                Zf: () => s,
                Zi: () => tA,
                Zl: () => tr,
                _1: () => h,
                aE: () => z,
                by: () => tS,
                c9: () => tt,
                cZ: () => ti,
                dA: () => tD,
                dh: () => t_,
                en: () => Q,
                eu: () => V,
                ff: () => tv,
                gd: () => td,
                gu: () => c,
                jQ: () => Z,
                ki: () => q,
                mD: () => n,
                mr: () => d,
                nM: () => W,
                ni: () => t$,
                ok: () => U,
                oo: () => O,
                qN: () => B,
                qT: () => tp,
                qt: () => _,
                re: () => tn,
                ro: () => j,
                s_: () => tR,
                sv: () => tu,
                tz: () => I,
                u2: () => ty,
                uM: () => tk,
                vH: () => D,
                vg: () => tN,
                wH: () => $,
                wK: () => y,
                xF: () => S,
                y$: () => u,
                yq: () => G,
                zj: () => C,
            });
            let r = 'AfterTrackResource',
                s = 'Logger',
                o = 'TechMetricsLogger',
                n = 'OtelSdk',
                a = 'ModelActionsLogger',
                l = 'HttpClient',
                c = 'HttpBeaconClient',
                u = 'Slam',
                d = 'UgcUploadHttpClient',
                m = 'BaseResourceHttpClient',
                g = 'ResourceHttpClient',
                p = 'ResourceBeaconClient',
                f = 'AccountResource',
                h = 'UsersResource',
                v = 'LandingResource',
                y = 'LandingBlocksResource',
                E = 'Landing3Resource',
                I = 'AlbumResource',
                b = 'SlidesResource',
                _ = 'MusicExternalApiPrefixUrl',
                T = 'MusicResourceFactory',
                k = 'PublicConfig',
                S = 'ServerConfig',
                R = 'TokenConfig',
                O = 'Storage',
                A = 'CookieStorage',
                P = 'LocalStorage',
                N = 'LibraryResource',
                C = 'LumenResource',
                L = 'TracksResource',
                D = 'SessionStorage',
                K = 'TopResource',
                w = 'ArtistsResource',
                M = 'Authorization',
                $ = 'RedAlertResource',
                U = 'RotorResource',
                x = 'WaveResource',
                G = 'SearchResource',
                F = 'SearchPlaylistResource',
                B = 'PlaylistResource',
                j = 'PlaylistsResource',
                W = 'PinResource',
                H = 'MetatagsResource',
                X = 'TagResource',
                V = 'FeedResource',
                Y = 'Wizard3Resource',
                J = 'CONTAINER_USER_ID_TOKEN',
                z = 'PinsResource',
                q = 'MusicHistoryResource',
                Q = 'ChartResource',
                Z = 'ClipsResource',
                tt = 'DynamicPagesResource',
                te = 'CONTAINER_I18N_STORAGE',
                ti = 'LyricViewsResource',
                tr = 'NonMusicResource',
                ts = 'DonationResource',
                to = 'LoaderResource',
                tn = 'PrefixlessResource',
                ta = 'StreamsResource',
                tl = 'FiltersResource',
                tc = 'UgcResource',
                tu = 'CollectionResource',
                td = 'AdsResource',
                tm = 'PersonalResource',
                tg = 'AvailabilityResource',
                tp = 'GetFileInfoResource',
                tf = 'ResourcesFileInfoResource',
                th = 'DisclaimersResource',
                tv = 'DisclaimerDictionary',
                ty = 'FamilyResource',
                tE = 'ChildrenLandingResource',
                tI = 'TelemetryResource',
                tb = 'Env',
                t_ = 'PromoResource',
                tT = 'RumResource',
                tk = 'AcqOffers',
                tS = 'Ynison',
                tR = 'YnisonNewConnector',
                tO = 'LabelsResource',
                tA = 'RequestExecutionContext',
                tP = 'ConcertsResource',
                tN = 'YaMetrikaController',
                tC = 'RumTransport',
                tL = 'YaMetrikaTransport',
                tD = 'WordsResource',
                tK = 'WheelResource',
                tw = 'MocksInitializer',
                tM = 'NetworkMonitorFactory',
                t$ = 'SkeletonSdk',
                tU = 'TagSandbox';
        },
        5374: (t, e, i) => {
            'use strict';
            i.d(e, { v: () => o });
            var r = i(5120),
                s = i(94961);
            let o = (t, e) => {
                let i = (0, s.K)(t, e);
                return (0, r.wg)(i);
            };
        },
        5706: (t, e, i) => {
            'use strict';
            i.d(e, { f: () => s });
            var r = i(54667);
            let s = (t) => t === r.S.TRACK || t === r.S.MUSIC;
        },
        13607: (t, e, i) => {
            'use strict';
            var r;
            (i.d(e, { _: () => r }),
                (function (t) {
                    ((t.UP = 'up'), (t.DOWN = 'down'), (t.SAME = 'same'), (t.NEW = 'new'));
                })(r || (r = {})));
        },
        17017: (t, e, i) => {
            'use strict';
            var r;
            (i.d(e, { Z: () => r }),
                (function (t) {
                    ((t.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (t.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (t.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (t.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (t.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(r || (r = {})));
        },
        18143: (t, e, i) => {
            'use strict';
            var r;
            (i.d(e, { T: () => r }),
                (function (t) {
                    ((t.OK = 'ok'), (t.ERROR = 'error'));
                })(r || (r = {})));
        },
        19840: (t, e, i) => {
            'use strict';
            (i.d(e, { G: () => s }), i(46606));
            var r = i(91136);
            class s extends r.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(t, e) {
                    (super(t, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: e.cause }),
                        (this.statusCode = e.statusCode),
                        Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        21190: (t, e, i) => {
            'use strict';
            i.d(e, { v: () => d });
            var r = i(5120),
                s = i(17128),
                o = i(90544),
                n = i(62390),
                a = i(53151),
                l = i(47580),
                c = i(27506),
                u = i(49873);
            let d = a.O.props({ artists: r.gK.array(o.P), albums: r.gK.array(s.G), chart: r.gK.maybe(n.I) })
                .views((t) => ({
                    get artistsNames() {
                        return (0, l.j)(t.artists);
                    },
                    get mainArtist() {
                        return (0, u.m)(t.artists);
                    },
                    get mainAlbum() {
                        var e, i;
                        return null != (i = null == (e = t.albums) ? void 0 : e[0]) ? i : null;
                    },
                    get index() {
                        var r, s, o;
                        return null != (o = null == (s = t.albums[0]) || null == (r = s.trackPosition) ? void 0 : r.index) ? o : null;
                    },
                    get isAvailableOnlyForPlus() {
                        var n;
                        return !!(null == (n = this.mainAlbum) ? void 0 : n.isAvailableOnlyForPlus);
                    },
                }))
                .actions((t) => ({
                    changeTrackInfo: (0, r.L3)(function* (e, i) {
                        let { ugcResource: s, modelActionsLogger: n } = (0, r._$)(t);
                        if (t.artists.map((t) => t.name).join(', ') === i && e === t.title) return c.F.OK;
                        try {
                            var a;
                            (yield s.changeTrack({ trackId: t.id, title: e, artist: i }), (t.title = e));
                            let n = (null == (a = t.artists[0]) ? void 0 : a.id) || '0';
                            if (((t.artists = (0, r.wg)([])), i)) {
                                let e = o.P.create({ id: n, name: i, isAvailable: !0 });
                                t.artists = (0, r.wg)([e]);
                            }
                            return c.F.OK;
                        } catch (t) {
                            return (n.error(t), c.F.ERROR);
                        }
                    }),
                }))
                .named('Track');
        },
        25918: (t, e, i) => {
            'use strict';
            i.d(e, { B: () => o });
            var r = i(5120),
                s = i(18143);
            let o = r.gK.model('StreamProgress', { endPositionSec: r.gK.maybe(r.gK.number), hasEverFinished: r.gK.maybe(r.gK.boolean) }).actions((t) => ({
                updateEndPositionSec: (e) => {
                    t.endPositionSec = e;
                },
                updateEverFinished: (e) => {
                    t.hasEverFinished = e;
                },
                markListened: (0, r.L3)(function* (e) {
                    let { streamsResource: i, modelActionsLogger: o } = (0, r._$)(t);
                    try {
                        return yield i.markFinished(e);
                    } catch (t) {
                        return (o.error(t), s.T.ERROR);
                    }
                }),
                markUnlistened: (0, r.L3)(function* (e) {
                    let { streamsResource: i, modelActionsLogger: o } = (0, r._$)(t);
                    try {
                        return yield i.markUnfinished(e);
                    } catch (t) {
                        return (o.error(t), s.T.ERROR);
                    }
                }),
            }));
        },
        27506: (t, e, i) => {
            'use strict';
            i.d(e, { F: () => r });
            var r = (function (t) {
                return ((t.OK = 'ok'), (t.ERROR = 'error'), t);
            })({});
        },
        27954: (t, e, i) => {
            'use strict';
            i.d(e, { p: () => n });
            var r = i(5120),
                s = i(70850),
                o = i(89625);
            let n = (t) => {
                let e = ((t) => ({ ...(0, s.f)(t), artists: t.artists.map(o.G) }))(t);
                return (0, r.wg)(e);
            };
        },
        30123: (t, e, i) => {
            'use strict';
            i.d(e, { k7: () => r, nl: () => s });
            let r = 1e3,
                s = 'https://';
        },
        30282: (t, e, i) => {
            'use strict';
            i.d(e, { sK: () => E, NN: () => s, $3: () => r, CP: () => u, tE: () => d, Ef: () => m, $5: () => p, IU: () => I, tk: () => f.t, u0: () => y });
            let r = !1,
                s = !0;
            var o = i(9519),
                n = i(39499);
            class a extends n.t {
                constructor(t = 'Internal error', { code: e = 'E_CONFIG', ...i } = {}) {
                    (super(t, { code: e, ...i }), (0, o._)(this, 'name', 'ConfigException'), Object.setPrototypeOf(this, a.prototype));
                }
            }
            class l extends a {
                constructor(t) {
                    (super('The configuration file for environment "'.concat(t, '" does not exist.'), { code: 'E_CONFIG_FILE_NOT_FOUND' }),
                        (0, o._)(this, 'name', 'NotFoundConfigException'),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
            let c = (function (t) {
                    let { manifest: e, getConfig: i } = t,
                        r = new Map();
                    return (t) => {
                        let s = r.get(t);
                        if (s) return s;
                        if (!Object.hasOwn(e, t)) return Promise.reject(new l(t));
                        let o = e[t]().then(i);
                        return (r.set(t, o), o);
                    };
                })({
                    manifest: {
                        development: () => Promise.all([i.e(3075), i.e(6904), i.e(1223), i.e(7689), i.e(347), i.e(7906)]).then(i.bind(i, 27906)),
                        qa: () => Promise.all([i.e(3075), i.e(6904), i.e(1223), i.e(7689), i.e(347), i.e(2978)]).then(i.bind(i, 82978)),
                        stress: () => Promise.all([i.e(3075), i.e(6904), i.e(1223), i.e(7689), i.e(347), i.e(3552)]).then(i.bind(i, 13552)),
                        production: () => Promise.all([i.e(3075), i.e(6904), i.e(1223), i.e(7689), i.e(347), i.e(3760)]).then(i.bind(i, 33760)),
                    },
                    getConfig: (t) => {
                        let { config: e } = t;
                        return e;
                    },
                }),
                u = (t, e) => ''.concat(t, '/').concat(e || '1.0.0'),
                d = (t, e) => (e ? t.afisha.clientId[e] : t.afisha.clientId.web);
            function m(t, e) {
                return e ? t.player.secretKey[e] : '';
            }
            var g = i(49124);
            let p = () => {
                let t = 'window.location.pathname',
                    e = g.env.APP_VERSION || '',
                    i = 'production';
                return {
                    rumSettings: {
                        rumId: 'ru.music.frontend.desktop',
                        project: 'music.frontend.desktop',
                        service: 'frontend-desktop',
                        platform: 'desktop',
                        page: t,
                        heroElement: 'body',
                        version: e,
                        environment: i,
                    },
                    errorBooster: {
                        project: 'music.frontend.desktop',
                        platform: 'desktop',
                        page: t,
                        version: e,
                        environment: i,
                        unhandledRejection: !0,
                        uncaughtException: !0,
                        resourceFails: !0,
                    },
                };
            };
            var f = i(71242),
                h = i(10285),
                v = i(42668);
            let y = (t, e, i) => {
                let { allowCustomPrefixUrl: r, prefixUrl: s } = t.resources.musicExternalApi,
                    o = r && 'string' == typeof i && i.length > 0 ? i : s;
                return (0, h.r)(o, e, v.B);
            };
            var E = (function (t) {
                return ((t.WEB = 'YandexMusicWebNext'), (t.DESKTOP = 'YandexMusicDesktopApp'), t);
            })({});
            let I = async (t) => ({ env: t, publicConfig: await c(t) });
        },
        31510: (t, e, i) => {
            'use strict';
            i.d(e, { e: () => r });
            let r = (t) => ({ uri: t.uri, color: t.color });
        },
        34961: (t, e, i) => {
            'use strict';
            i.d(e, { W: () => h, s: () => v });
            var r = i(88800),
                s = i(84961),
                o = i(58390),
                n = i(53548),
                a = i(35412),
                l = i(39499),
                c = i(89108),
                u = i(70003),
                d = i(72288),
                m = i(16818);
            (0, s.eO)(!1);
            let g = (0, n.createContext)(null),
                p = (t) => {
                    let { children: e, store: i, storeKey: s } = t,
                        o = (0, n.useMemo)(() => ({ store: i, storeKey: s }), [i, s]);
                    return (0, r.jsx)(g.Provider, { value: o, children: e });
                },
                f = (t) => {
                    let { nonce: e, patchKey: i, patchesRef: s } = t;
                    return (
                        (0, o.useServerInsertedHTML)(() => {
                            let t = s.current;
                            return ((s.current = []), 0 === t.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((t, e) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(t, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(t, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(t, "'].push(")
                                                  .concat((0, a.Gr)(e), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(i, t),
                                      },
                                      nonce: null != e ? e : void 0,
                                  });
                        }),
                        null
                    );
                },
                h = (t) => {
                    let { createStore: e, patchKey: i } = t,
                        s = () => {
                            var t, e;
                            let r = null != (e = null == (t = window.__PAGE_STATE_PATCHES__) ? void 0 : t[i]) ? e : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[i], r);
                        };
                    return {
                        pageStoreProvider: (t) => {
                            let { children: o, nonce: n } = t,
                                a = (0, m.Y)(),
                                l = (0, d.g)(),
                                { store: g, patchesRef: h } = (0, u.m)({
                                    createStore: () => e({ ...a, rootStore: l }),
                                    getPendingPatchBatches: s,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(f, { nonce: n, patchKey: i, patchesRef: h }), (0, r.jsx)(p, { store: g, storeKey: i, children: o })],
                            });
                        },
                    };
                };
            function v(t) {
                let { throwOnAbsence: e = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, n.useContext)(g);
                if (!i || i.storeKey !== t) {
                    var r;
                    if (!e) return null;
                    throw new l.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == i ? void 0 : i.storeKey) ? r : 'null', expectedStoreKey: t },
                    });
                }
                return i.store;
            }
        },
        35994: (t, e, i) => {
            'use strict';
            i.d(e, { R: () => s });
            var r = i(67174);
            let s = (t) => (0, r.u)('/artist/:artistId', { params: { artistId: t } });
        },
        38514: (t, e, i) => {
            'use strict';
            i.d(e, { L: () => s });
            var r = i(67174);
            let s = (t) => (0, r.u)('/album/:albumId', { params: { albumId: t } });
        },
        39902: (t, e, i) => {
            Promise.resolve().then(i.bind(i, 90724));
        },
        41928: (t, e, i) => {
            'use strict';
            i.d(e, { B: () => o, N: () => n });
            var r = i(53548),
                s = i(39499);
            let o = (0, r.createContext)(null);
            function n() {
                let t = (0, r.useContext)(o);
                if (null === t) throw new s.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return t;
            }
        },
        42078: (t, e, i) => {
            'use strict';
            var r;
            (i.d(e, { _: () => r }),
                (function (t) {
                    ((t.ALBUM_ITEM = 'album_item'),
                        (t.ARTIST_ITEM = 'artist_item'),
                        (t.PLAYLIST_ITEM = 'playlist_item'),
                        (t.TRACK_ITEM = 'track_item'),
                        (t.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (t.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (t.WAVE_ITEM = 'wave_item'),
                        (t.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (t.MIX = 'mix'),
                        (t.MIX_CARD_ITEM = 'mix_card_item'),
                        (t.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (t.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (t.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (t.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (t.MENU_ITEM = 'menu_item'),
                        (t.DONATION_ITEM = 'donation_item'),
                        (t.CLIP = 'clip'),
                        (t.CLIP_ITEM = 'clip_item'),
                        (t.CONCERT_ITEM = 'concert_item'),
                        (t.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(r || (r = {})));
        },
        43297: (t, e, i) => {
            'use strict';
            function r() {
                throw Error('Cycle detected');
            }
            function s() {
                if (l > 1) l--;
                else {
                    for (var t, e = !1; void 0 !== a;) {
                        var i = a;
                        for (a = void 0, c++; void 0 !== i;) {
                            var r = i.o;
                            if (((i.o = void 0), (i.f &= -3), !(8 & i.f) && p(i)))
                                try {
                                    i.c();
                                } catch (i) {
                                    e || ((t = i), (e = !0));
                                }
                            i = r;
                        }
                    }
                    if (((c = 0), l--, e)) throw t;
                }
            }
            function o(t) {
                if (l > 0) return t();
                l++;
                try {
                    return t();
                } finally {
                    s();
                }
            }
            i.d(e, { EW: () => y, vA: () => o, vP: () => g });
            var n = void 0,
                a = void 0,
                l = 0,
                c = 0,
                u = 0;
            function d(t) {
                if (void 0 !== n) {
                    var e = t.n;
                    if (void 0 === e || e.t !== n)
                        return (
                            (e = { i: 0, S: t, p: n.s, n: void 0, t: n, e: void 0, x: void 0, r: e }),
                            void 0 !== n.s && (n.s.n = e),
                            (n.s = e),
                            (t.n = e),
                            32 & n.f && t.S(e),
                            e
                        );
                    if (-1 === e.i)
                        return ((e.i = 0), void 0 !== e.n && ((e.n.p = e.p), void 0 !== e.p && (e.p.n = e.n), (e.p = n.s), (e.n = void 0), (n.s.n = e), (n.s = e)), e);
                }
            }
            function m(t) {
                ((this.v = t), (this.i = 0), (this.n = void 0), (this.t = void 0));
            }
            function g(t) {
                return new m(t);
            }
            function p(t) {
                for (var e = t.s; void 0 !== e; e = e.n) if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i) return !0;
                return !1;
            }
            function f(t) {
                for (var e = t.s; void 0 !== e; e = e.n) {
                    var i = e.S.n;
                    if ((void 0 !== i && (e.r = i), (e.S.n = e), (e.i = -1), void 0 === e.n)) {
                        t.s = e;
                        break;
                    }
                }
            }
            function h(t) {
                for (var e = t.s, i = void 0; void 0 !== e;) {
                    var r = e.p;
                    (-1 === e.i ? (e.S.U(e), void 0 !== r && (r.n = e.n), void 0 !== e.n && (e.n.p = r)) : (i = e),
                        (e.S.n = e.r),
                        void 0 !== e.r && (e.r = void 0),
                        (e = r));
                }
                t.s = i;
            }
            function v(t) {
                (m.call(this, void 0), (this.x = t), (this.s = void 0), (this.g = u - 1), (this.f = 4));
            }
            function y(t) {
                return new v(t);
            }
            function E(t) {
                var e = t.u;
                if (((t.u = void 0), 'function' == typeof e)) {
                    l++;
                    var i = n;
                    n = void 0;
                    try {
                        e();
                    } catch (e) {
                        throw ((t.f &= -2), (t.f |= 8), I(t), e);
                    } finally {
                        ((n = i), s());
                    }
                }
            }
            function I(t) {
                for (var e = t.s; void 0 !== e; e = e.n) e.S.U(e);
                ((t.x = void 0), (t.s = void 0), E(t));
            }
            function b(t) {
                if (n !== this) throw Error('Out-of-order effect');
                (h(this), (n = t), (this.f &= -2), 8 & this.f && I(this), s());
            }
            function _(t) {
                ((this.x = t), (this.u = void 0), (this.s = void 0), (this.o = void 0), (this.f = 32));
            }
            ((m.prototype.h = function () {
                return !0;
            }),
                (m.prototype.S = function (t) {
                    this.t !== t && void 0 === t.e && ((t.x = this.t), void 0 !== this.t && (this.t.e = t), (this.t = t));
                }),
                (m.prototype.U = function (t) {
                    if (void 0 !== this.t) {
                        var e = t.e,
                            i = t.x;
                        (void 0 !== e && ((e.x = i), (t.e = void 0)), void 0 !== i && ((i.e = e), (t.x = void 0)), t === this.t && (this.t = i));
                    }
                }),
                (m.prototype.subscribe = function (t) {
                    var e = this,
                        i = function () {
                            var i = e.value,
                                r = 32 & this.f;
                            this.f &= -33;
                            try {
                                t(i);
                            } finally {
                                this.f |= r;
                            }
                        },
                        r = new _(i);
                    try {
                        r.c();
                    } catch (t) {
                        throw (r.d(), t);
                    }
                    return r.d.bind(r);
                }),
                (m.prototype.valueOf = function () {
                    return this.value;
                }),
                (m.prototype.toString = function () {
                    return this.value + '';
                }),
                (m.prototype.toJSON = function () {
                    return this.value;
                }),
                (m.prototype.peek = function () {
                    return this.v;
                }),
                Object.defineProperty(m.prototype, 'value', {
                    get: function () {
                        var t = d(this);
                        return (void 0 !== t && (t.i = this.i), this.v);
                    },
                    set: function (t) {
                        if (
                            (n instanceof v &&
                                (function () {
                                    throw Error('Computed cannot have side-effects');
                                })(),
                            t !== this.v)
                        ) {
                            (c > 100 && r(), (this.v = t), this.i++, u++, l++);
                            try {
                                for (var e = this.t; void 0 !== e; e = e.x) e.t.N();
                            } finally {
                                s();
                            }
                        }
                    },
                }),
                ((v.prototype = new m()).h = function () {
                    if (((this.f &= -3), 1 & this.f)) return !1;
                    if (32 == (36 & this.f) || ((this.f &= -5), this.g === u)) return !0;
                    if (((this.g = u), (this.f |= 1), this.i > 0 && !p(this))) return ((this.f &= -2), !0);
                    var t = n;
                    try {
                        (f(this), (n = this));
                        var e = this.x();
                        (16 & this.f || this.v !== e || 0 === this.i) && ((this.v = e), (this.f &= -17), this.i++);
                    } catch (t) {
                        ((this.v = t), (this.f |= 16), this.i++);
                    }
                    return ((n = t), h(this), (this.f &= -2), !0);
                }),
                (v.prototype.S = function (t) {
                    if (void 0 === this.t) {
                        this.f |= 36;
                        for (var e = this.s; void 0 !== e; e = e.n) e.S.S(e);
                    }
                    m.prototype.S.call(this, t);
                }),
                (v.prototype.U = function (t) {
                    if (void 0 !== this.t && (m.prototype.U.call(this, t), void 0 === this.t)) {
                        this.f &= -33;
                        for (var e = this.s; void 0 !== e; e = e.n) e.S.U(e);
                    }
                }),
                (v.prototype.N = function () {
                    if (!(2 & this.f)) {
                        this.f |= 6;
                        for (var t = this.t; void 0 !== t; t = t.x) t.t.N();
                    }
                }),
                (v.prototype.peek = function () {
                    if ((this.h() || r(), 16 & this.f)) throw this.v;
                    return this.v;
                }),
                Object.defineProperty(v.prototype, 'value', {
                    get: function () {
                        1 & this.f && r();
                        var t = d(this);
                        if ((this.h(), void 0 !== t && (t.i = this.i), 16 & this.f)) throw this.v;
                        return this.v;
                    },
                }),
                (_.prototype.c = function () {
                    var t = this.S();
                    try {
                        if (8 & this.f || void 0 === this.x) return;
                        var e = this.x();
                        'function' == typeof e && (this.u = e);
                    } finally {
                        t();
                    }
                }),
                (_.prototype.S = function () {
                    (1 & this.f && r(), (this.f |= 1), (this.f &= -9), E(this), f(this), l++);
                    var t = n;
                    return ((n = this), b.bind(this, t));
                }),
                (_.prototype.N = function () {
                    2 & this.f || ((this.f |= 2), (this.o = a), (a = this));
                }),
                (_.prototype.d = function () {
                    ((this.f |= 8), 1 & this.f || I(this));
                }));
        },
        46606: (t, e, i) => {
            'use strict';
            var r;
            (i.d(e, { X: () => r }),
                (function (t) {
                    ((t[(t.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (t[(t.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (t[(t.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (t[(t.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (t[(t.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (t[(t.TEAPOT = 418)] = 'TEAPOT'));
                })(r || (r = {})));
        },
        47580: (t, e, i) => {
            'use strict';
            i.d(e, { j: () => r });
            let r = (t) => t.map((t) => t.name).join(', ');
        },
        49873: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => r });
            let r = (t) => {
                var e, i;
                return (null == t || null == (e = t[0]) ? void 0 : e.various) ? null : null != (i = null == t ? void 0 : t[0]) ? i : null;
            };
        },
        50348: (t, e, i) => {
            'use strict';
            i.d(e, { b: () => r, j: () => s });
            let r = {
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
                s = {
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
        53151: (t, e, i) => {
            'use strict';
            i.d(e, { O: () => v });
            var r = i(5120),
                s = i(54667),
                o = i(76794),
                n = i(50633),
                a = i(85587),
                l = i(63425),
                c = i(67102),
                u = i(23744),
                d = i(78686),
                m = i(63698),
                g = i(70565),
                p = i(5706),
                f = i(25918);
            let h = [s.S.MUSIC, s.S.TRACK, s.S.NOISE, s.S.ASMR],
                v = r.gK
                    .compose(
                        r.gK.model('BaseTrack', {
                            id: r.gK.string,
                            isAvailable: r.gK.boolean,
                            isRemoved: r.gK.boolean,
                            title: r.gK.string,
                            trackSource: r.gK.maybe(r.gK.enumeration(Object.values(o.J))),
                            version: r.gK.maybe(r.gK.string),
                            durationMs: r.gK.maybe(r.gK.number),
                            coverUri: r.gK.maybe(r.gK.string),
                            averageColor: r.gK.maybe(r.gK.string),
                            trackParameters: r.gK.maybe(r.gK.frozen()),
                            albumId: r.gK.maybe(r.gK.number),
                            type: r.gK.maybe(r.gK.enumeration(Object.values(s.S))),
                            pubDate: r.gK.maybe(r.gK.string),
                            hasLyrics: r.gK.maybe(r.gK.boolean),
                            hasSyncLyrics: r.gK.maybe(r.gK.boolean),
                            trailer: r.gK.maybe(u.a),
                            shouldRememberPosition: r.gK.maybe(r.gK.boolean),
                            streamProgress: r.gK.maybe(f.B),
                            shortDescription: r.gK.maybe(r.gK.string),
                            major: r.gK.maybeNull(r.gK.frozen()),
                            clipIds: r.gK.maybeNull(r.gK.frozen()),
                            genre: r.gK.maybeNull(r.gK.string),
                            realId: r.gK.maybe(r.gK.string),
                            cutoutCover: r.gK.maybe(l.$),
                        }),
                        c.E,
                    )
                    .views((t) => {
                        let e = {
                            get isLiked() {
                                if ((0, r._n)(t)) {
                                    let { library: e } = (0, n.M)(t);
                                    return e.isTrackLiked(t.id);
                                }
                                return !1;
                            },
                            get isDownloaded() {
                                if (!(0, r._n)(t)) return !1;
                                let { slam: e } = (0, n.M)(t);
                                return e.isTrackDownloaded(t.id);
                            },
                            get isDownloading() {
                                if (!(0, r._n)(t)) return !1;
                                let { slam: e } = (0, n.M)(t);
                                return e.isTrackDownloading(t.id);
                            },
                            get downloadingProgress() {
                                if (!(0, r._n)(t)) return 0;
                                let { slam: e } = (0, n.M)(t);
                                return e.getTrackDownloadingProgress(t.id);
                            },
                            get isAvailableForDownload() {
                                if (!(0, r._n)(t)) return !1;
                                return (t.type && h.includes(t.type)) || !!e.isUGC;
                            },
                            getUrl(e) {
                                let { href: i } = (0, m.l)(t.id, t.albumId, e);
                                return i;
                            },
                            get url() {
                                return e.getUrl();
                            },
                            get isDisliked() {
                                if ((0, r._n)(t)) {
                                    let { library: e } = (0, n.M)(t);
                                    return e.isTrackDisliked(t.id);
                                }
                                return !1;
                            },
                            get isTrackPodcast() {
                                if ((0, r._n)(t)) return t.type === s.S.PODCAST;
                                return !1;
                            },
                            get isPlusSubscribed() {
                                if (!(0, r._n)(t)) return !1;
                                let { user: e } = (0, n.M)(t);
                                return e.hasPlus;
                            },
                            get isSyncLyricsAvailableWithOfflineFeature() {
                                if (!(0, r._n)(t)) return !1;
                                let { slam: e } = (0, n.M)(t);
                                return !!t.hasSyncLyrics && !e.isOfflineModeEnabled;
                            },
                            get isSyncLyricsAvailable() {
                                return this.isPlusSubscribed && this.isSyncLyricsAvailableWithOfflineFeature;
                            },
                            get isLyricsAvailable() {
                                if (!(0, r._n)(t)) return !1;
                                let { slam: e, user: i } = (0, n.M)(t);
                                if (!i.hasPlus) return !1;
                                return !!t.hasLyrics && !e.isOfflineModeEnabled;
                            },
                            get isTrackAudiobook() {
                                if ((0, r._n)(t)) return t.type === s.S.AUDIOBOOK;
                                return !1;
                            },
                            get isTrackFairyTale() {
                                if ((0, r._n)(t)) return t.type === s.S.FAIRY_TALE;
                                return !1;
                            },
                            get isTrackNonMusic() {
                                return this.isTrackPodcast || this.isTrackAudiobook || this.isTrackFairyTale;
                            },
                            get isTrackMusic() {
                                if ((0, r._n)(t)) return (0, p.f)(t.type);
                                return !1;
                            },
                            get isUGC() {
                                if ((0, r._n)(t)) {
                                    let { isUGC: e } = (0, g.I)(t.trackSource);
                                    return e;
                                }
                                return;
                            },
                            get isOwn() {
                                if ((0, r._n)(t)) {
                                    let { isOwn: e } = (0, g.I)(t.trackSource);
                                    return e;
                                }
                                return;
                            },
                            get isOwnReplacedToUGC() {
                                if ((0, r._n)(t)) {
                                    let { isOwnReplacedToUGC: e } = (0, g.I)(t.trackSource);
                                    return e;
                                }
                                return;
                            },
                            get seeds() {
                                return ['track:'.concat(t.id)];
                            },
                            get isLegalRejected() {
                                return t.getIsLegalRejected(t.isAvailable);
                            },
                            get isUnsafeLegal() {
                                return t.getIsUnsafeLegal(t.isAvailable);
                            },
                            get entityId() {
                                if (t.albumId) return ''.concat(t.id, ':').concat(t.albumId);
                                return t.id;
                            },
                            get hasAlbumLink() {
                                if (!(0, r._n)(t)) return !1;
                                return !!(t.albumId && this.isOwn && t.isAvailable);
                            },
                            get hasTrackLink() {
                                if (!(0, r._n)(t)) return !1;
                                let {
                                    settings: { isMobile: e },
                                    slam: i,
                                } = (0, n.M)(t);
                                return (0, d.t)(t, { isMobile: e, isOfflineModeEnabled: i.isOfflineModeEnabled });
                            },
                            get isNonUserGenerated() {
                                if (!(0, r._n)(t)) return !1;
                                let { isNonUserGenerated: e } = (0, g.I)(t.trackSource);
                                return e;
                            },
                            get hasModalAccess() {
                                return t.hasModalDisclaimer;
                            },
                            getDisclaimerEntityRef: (i) =>
                                i
                                    ? { entityType: i, entityId: t.id }
                                    : e.isTrackPodcast
                                      ? { entityType: a.n.PODCAST, entityId: t.id }
                                      : e.isTrackAudiobook
                                        ? { entityType: a.n.AUDIOBOOK, entityId: t.id }
                                        : { entityType: a.n.TRACK, entityId: t.id },
                        };
                        return e;
                    })
                    .actions((t) => ({
                        afterCreate() {
                            t.trackType = t.type;
                        },
                        toggleLike: (0, r.L3)(function* () {
                            if (!(0, r._n)(t)) return;
                            let { library: e, user: i } = (0, n.M)(t);
                            if (i.isAuthorized) return yield e.toggleTrackLike({ entityId: t.id, albumId: t.albumId, userId: i.account.data.uid });
                        }),
                        toggleDislike: (0, r.L3)(function* () {
                            if (!(0, r._n)(t)) return;
                            let { library: e, user: i } = (0, n.M)(t);
                            if (i.isAuthorized) return yield e.toggleTrackDislike({ entityId: t.id, albumId: t.albumId, userId: i.account.data.uid });
                        }),
                        setListeningFinishedStatus: (0, r.L3)(function* () {
                            let e = t.streamProgress;
                            if (e)
                                return (null == e ? void 0 : e.hasEverFinished)
                                    ? yield null == e ? void 0 : e.markUnlistened({ trackId: Number(t.id) })
                                    : yield null == e ? void 0 : e.markListened({ trackId: Number(t.id) });
                        }),
                        getKey: (e) => ''.concat(e, '_').concat(t.id),
                    }));
        },
        53892: (t, e, i) => {
            'use strict';
            i.d(e, { n: () => r });
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
        54667: (t, e, i) => {
            'use strict';
            var r;
            (i.d(e, { S: () => r }),
                (function (t) {
                    ((t.TRACK = 'track'),
                        (t.MUSIC = 'music'),
                        (t.NOISE = 'noise'),
                        (t.PODCAST = 'podcast-episode'),
                        (t.COMMENT = 'comment'),
                        (t.ARTICLE = 'article'),
                        (t.ASMR = 'asmr'),
                        (t.RADIO = 'radio'),
                        (t.SHOW = 'show'),
                        (t.LECTURE = 'lecture'),
                        (t.FAIRY_TALE = 'fairy-tale'),
                        (t.AUDIOBOOK = 'audiobook'),
                        (t.POETRY = 'poetry'));
                })(r || (r = {})));
        },
        56146: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => s });
            var r = i(5120);
            let s = (t) => (0, r.wg)({ position: t.position, progress: t.progress });
        },
        58870: (t, e, i) => {
            'use strict';
            i.d(e, { b: () => n });
            var r = i(5120),
                s = i(56146),
                o = i(5374);
            let n = (t, e) => (0, r.wg)({ ...(0, o.v)(t), chart: e && (0, s.w)(e) });
        },
        61691: (t, e, i) => {
            'use strict';
            var r;
            (i.d(e, { _: () => r }),
                (function (t) {
                    ((t.UNKNOWN = 'unknown'),
                        (t.ALBUM = 'album'),
                        (t.SINGLE = 'single'),
                        (t.COMPILATION = 'compilation'),
                        (t.PODCAST = 'podcast'),
                        (t.FAIRY_TALE = 'fairy-tale'),
                        (t.AUDIOBOOK = 'audiobook'),
                        (t.VIDEO_SINGLE = 'video-single'),
                        (t.VIDEO_ALBUM = 'video-album'),
                        (t.RADIO = 'radio'),
                        (t.ASMR = 'asmr'),
                        (t.NOISE = 'noise'));
                })(r || (r = {})));
        },
        63698: (t, e, i) => {
            'use strict';
            i.d(e, { l: () => s });
            var r = i(67174);
            let s = (t, e, i) =>
                (0, r.u)(e ? '/album/:albumId/track/:trackId' : '/track/:trackId', { params: e ? { albumId: e, trackId: t } : { trackId: t }, query: i });
        },
        65523: (t, e, i) => {
            'use strict';
            i.d(e, { U: () => a });
            var r = i(4086),
                s = i(41928),
                o = i(44084);
            let n = new WeakMap(),
                a = () =>
                    ((t) => {
                        if (t instanceof o.r) return t;
                        let e = n.get(t);
                        if (e) return e;
                        let i = {
                            log: (e, i) => t.info(e, i),
                            trace: (e, i) => t.trace(e, i),
                            debug: (e, i) => t.debug(e, i),
                            info: (e, i) => t.info(e, i),
                            warn: (e, i) => t.warn(e, i),
                            error: (e, i) => t.error(e, i),
                            fatal: (e, i) => t.fatal(e, i),
                            child: (e) => t.child(e),
                        };
                        return (n.set(t, i), i);
                    })((0, s.N)().get(r.Zf));
        },
        67174: (t, e, i) => {
            'use strict';
            (i.d(e, { u: () => c }), i(30282));
            var r = i(35412),
                s = i(50348),
                o = i(30123);
            let n = (t) => {
                    var e;
                    if (!t) return t;
                    let i = (null != (e = t.split('?')[0]) ? e : '').split('/').filter(Boolean);
                    for (let t of Object.keys(s.j)) {
                        let e = t.split('/').filter(Boolean);
                        if (i.length !== e.length) continue;
                        let r = !0;
                        for (let t = 0; t < e.length; t++) {
                            let s = e[t],
                                o = i[t];
                            if (s && !s.startsWith(':') && s !== o) {
                                r = !1;
                                break;
                            }
                        }
                        if (r) return t;
                    }
                    return t;
                },
                a = (t) => {
                    let e = [],
                        i = t.split('/').filter(Boolean),
                        r = [];
                    for (let t of i) t.startsWith(':') ? e.push(t.substring(1)) : r.push(t);
                    let s = '/'.concat(r.join('/'));
                    if (0 === e.length) return t;
                    let o = e.map((t) => ''.concat(t, '=:').concat(t)).join('&');
                    return ''.concat(s, '?').concat(o);
                },
                l = (t) =>
                    t
                        .split('/')
                        .filter(Boolean)
                        .filter((t) => t.startsWith(':'))
                        .map((t) => t.substring(1)),
                c = function (t) {
                    for (var e, i = arguments.length, c = Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++) c[u - 1] = arguments[u];
                    let [d] = c,
                        m = t.includes(':'),
                        g = t.includes('?'),
                        p = 'string' == typeof t ? t : String(t);
                    if (
                        (p.includes(o.nl) && (d = { ...d, options: { ...(null == d ? void 0 : d.options), isExternalLink: !0 } }),
                        g &&
                            ((t) => {
                                let [e, i] = t.split('?'),
                                    r = new URLSearchParams(i);
                                return Object.keys(s.j).some((t) => {
                                    let i = l(t);
                                    return 0 !== i.length && a(t).split('?')[0] === e && i.every((t) => r.has(t));
                                });
                            })(p))
                    )
                        return (0, r.no)(p, d);
                    if (g && !m) {
                        let t = n(p),
                            i = l(t);
                        if (i.length > 0) {
                            let s = ((t, e) => {
                                    var i;
                                    let r = (null != (i = t.split('?')[0]) ? i : '').split('/').filter(Boolean);
                                    return e
                                        .split('/')
                                        .filter(Boolean)
                                        .reduce((t, e, i) => {
                                            let s = r[i];
                                            return (e.startsWith(':') && s && (t[e.substring(1)] = s), t);
                                        }, {});
                                })(p, t),
                                o = {
                                    ...((t, e) => {
                                        let i = t.split('?')[1];
                                        if (!i) return {};
                                        let r = new Set(e),
                                            s = {};
                                        return (
                                            new URLSearchParams(i).forEach((t, e) => {
                                                r.has(e) || (s[e] = t);
                                            }),
                                            s
                                        );
                                    })(p, i),
                                    ...(null != (e = null == d ? void 0 : d.query) ? e : {}),
                                },
                                n = a(t);
                            return (0, r.no)(n, { ...d, params: s, query: o });
                        }
                    }
                    if (m || g) {
                        let t = a(p);
                        return (0, r.no)(t, d);
                    }
                    let f = n(p),
                        h = (function (t, e) {
                            let [i, r] = t.split('?'),
                                s = null == i ? void 0 : i.split('/').filter(Boolean),
                                o = {},
                                n = e.split('/').filter(Boolean);
                            if ((null == s ? void 0 : s.length) !== n.length || (n[0] && !t.startsWith('/'.concat(n[0])))) return o;
                            for (let t = 0; t < n.length; t++) {
                                let e = n[t],
                                    i = s && s[t];
                                (null == e ? void 0 : e.startsWith(':')) && i && (o[e.substring(1)] = i);
                            }
                            return (
                                r &&
                                    r.split('&').map((t) => {
                                        let [e, i] = t.split('=');
                                        e && void 0 !== i && (o[e] = i);
                                    }),
                                o
                            );
                        })(p, f),
                        v = a(f);
                    return (0, r.no)(v, { ...d, params: h });
                };
        },
        67311: (t, e, i) => {
            'use strict';
            i.d(e, { p: () => s });
            var r = i(5120);
            let s = r.gK.model('ModelDestroyManager').actions(() => ({
                destroyItems(t) {
                    (t.forEach((t) => {
                        t && (0, r.Yo)(t);
                    }),
                        queueMicrotask(() => {
                            t.forEach((t) => {
                                t && (0, r.zr)(t);
                            });
                        }));
                },
            }));
        },
        70565: (t, e, i) => {
            'use strict';
            i.d(e, { I: () => s });
            var r = i(76794);
            let s = (t) => {
                let e = t === r.J.UGC,
                    i = t === r.J.OWN,
                    s = t === r.J.OWN_REPLACED_TO_UGC;
                return { isUGC: e, isOwn: i, isOwnReplacedToUGC: s, isNonUserGenerated: !e && !s };
            };
        },
        71242: (t, e, i) => {
            'use strict';
            i.d(e, { t: () => r });
            let r = {
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
        72288: (t, e, i) => {
            'use strict';
            i.d(e, { P: () => o, g: () => n });
            var r = i(53548),
                s = i(39499);
            let o = (0, r.createContext)(null);
            function n() {
                let t = (0, r.useContext)(o);
                if (null === t) throw new s.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return t;
            }
        },
        74773: (t, e, i) => {
            'use strict';
            i.d(e, { G: () => r });
            var r = (function (t) {
                return ((t.IDLE = 'IDLE'), (t.PENDING = 'PENDING'), (t.RESOLVE = 'RESOLVE'), (t.REJECT = 'REJECT'), t);
            })({});
        },
        76794: (t, e, i) => {
            'use strict';
            var r;
            (i.d(e, { J: () => r }),
                (function (t) {
                    ((t.OWN = 'OWN'), (t.UGC = 'UGC'), (t.OWN_REPLACED_TO_UGC = 'OWN_REPLACED_TO_UGC'), (t.EXTERNAL = 'EXTERNAL'));
                })(r || (r = {})));
        },
        77451: (t, e, i) => {
            'use strict';
            i.d(e, { Jt: () => o, TF: () => a, hZ: () => n });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (t) {
                        for (var e, i = 1, r = arguments.length; i < r; i++)
                            for (var s in (e = arguments[i])) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                        return t;
                    }).apply(this, arguments);
            };
            function s(t, e) {
                if (!e) return '';
                var i = '; ' + t;
                return !0 === e ? i : i + '=' + e;
            }
            function o(t) {
                return (function (t) {
                    for (var e = {}, i = t ? t.split('; ') : [], r = 0; r < i.length; r++) {
                        var s = i[r].split('='),
                            o = s.slice(1).join('=');
                        '"' === o[0] && (o = o.slice(1, -1));
                        try {
                            e[decodeURIComponent(s[0])] = o.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (t) {}
                    }
                    return e;
                })(document.cookie)[t];
            }
            function n(t, e, i) {
                var o;
                document.cookie =
                    ((o = r({ path: '/' }, i)),
                    encodeURIComponent(t)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (t) {
                            if ('number' == typeof t.expires) {
                                var e = new Date();
                                (e.setMilliseconds(e.getMilliseconds() + 864e5 * t.expires), (t.expires = e));
                            }
                            return (
                                s('Expires', t.expires ? t.expires.toUTCString() : '') +
                                s('Domain', t.domain) +
                                s('Path', t.path) +
                                s('Secure', t.secure) +
                                s('SameSite', t.sameSite)
                            );
                        })(o));
            }
            function a(t, e) {
                n(t, '', r(r({}, e), { expires: -1 }));
            }
        },
        78686: (t, e, i) => {
            'use strict';
            i.d(e, { t: () => s });
            var r = i(70565);
            let s = (t, e) => {
                let { isMobile: i, isOfflineModeEnabled: s } = e,
                    { isNonUserGenerated: o } = (0, r.I)(t.trackSource);
                return t.isAvailable && o && !i && !s;
            };
        },
        79390: (t, e, i) => {
            'use strict';
            var r;
            (i.d(e, { f: () => r }),
                (function (t) {
                    ((t.OK = 'ok'), (t.ERROR = 'error'));
                })(r || (r = {})));
        },
        85587: (t, e, i) => {
            'use strict';
            i.d(e, { Z: () => r, n: () => s });
            var r = (function (t) {
                    return ((t.REJECT = 'REJECT'), (t.UNSAFE = 'UNSAFE'), t);
                })({}),
                s = (function (t) {
                    return ((t.ALBUM = 'album'), (t.PODCAST = 'podcast'), (t.AUDIOBOOK = 'audiobook'), (t.ARTIST = 'artist'), (t.TRACK = 'track'), (t.CLIP = 'clip'), t);
                })({});
        },
        87550: (t, e, i) => {
            'use strict';
            i.d(e, { J: () => a });
            var r = i(5120),
                s = i(17128),
                o = i(90544),
                n = i(62390);
            let a = s.G.props({ artists: r.gK.maybe(r.gK.array(o.P)), chart: r.gK.maybe(n.I) }).views((t) => ({
                get artistNames() {
                    var e;
                    return null == (e = t.artists) ? void 0 : e.map((t) => t.name).join(', ');
                },
                get artistName() {
                    var i, r, s, o;
                    if (null == (r = t.artists) || null == (i = r[0]) ? void 0 : i.various) return;
                    return null == (o = t.artists) || null == (s = o[0]) ? void 0 : s.name;
                },
                get artistIds() {
                    var n;
                    return null == (n = t.artists) ? void 0 : n.map((t) => t.id);
                },
                get artistId() {
                    var a, l;
                    return null == (l = t.artists) || null == (a = l[0]) ? void 0 : a.id;
                },
            }));
        },
        89916: (t, e, i) => {
            'use strict';
            i.d(e, { GX: () => o.G, X1: () => r.X, m5: () => s.m });
            var r = i(46606),
                s = i(91136),
                o = i(19840);
            i(17017);
        },
        90724: (t, e, i) => {
            'use strict';
            i.d(e, { ChartPageStoreProvider: () => b });
            var r = i(34961),
                s = i(53892),
                o = i(5120),
                n = i(74773),
                a = i(89916),
                l = i(56146),
                c = i(27954),
                u = i(87550),
                d = i(59497),
                m = i(67311);
            let g = o.gK
                .compose(
                    o.gK.model('ChartPodcastsPage', { title: o.gK.maybeNull(o.gK.string), items: o.gK.array(u.J), errorStatusCode: o.gK.maybeNull(o.gK.number) }),
                    m.p,
                    d.X,
                )
                .views((t) => {
                    let e = {
                        get isLoading() {
                            return t.isNeededToLoad || t.loadingState === n.G.PENDING;
                        },
                        get isShimmerVisible() {
                            return t.isNeededToLoad || t.loadingState === n.G.PENDING;
                        },
                        get itemsCount() {
                            return t.items.length;
                        },
                        get isNotFound() {
                            var i;
                            let e = t.isResolved && !(null == (i = t.items) ? void 0 : i.length),
                                r = t.errorStatusCode === a.X1.NOT_FOUND || t.errorStatusCode === a.X1.BAD_REQUEST;
                            return (t.loadingState === n.G.REJECT && r) || e;
                        },
                        get isSomethingWrong() {
                            return t.isRejected && !e.isNotFound;
                        },
                    };
                    return e;
                })
                .actions((t) => ({
                    getData: (0, o.L3)(function* (e) {
                        let { chartResource: i, modelActionsLogger: r } = (0, o._$)(t);
                        if (t.loadingState !== n.G.PENDING)
                            try {
                                let r;
                                ((t.loadingState = n.G.PENDING),
                                    (t.title = (r = e ? yield i.getChartPodcastsCategory({ categoryId: e }) : yield i.getChartPodcasts()).title),
                                    r.chartPositions &&
                                        (t.items = (0, o.wg)(
                                            r.chartPositions.map((t) => {
                                                let e, i;
                                                return ((e = t.album), (i = t.chartPosition), (0, o.wg)({ ...(0, c.p)(e), chart: i && (0, l.w)(i) }));
                                            }),
                                        )),
                                    t.loadingState !== n.G.IDLE && (t.loadingState = n.G.RESOLVE));
                            } catch (e) {
                                (r.error(e),
                                    e instanceof a.GX && (e.statusCode === a.X1.NOT_FOUND || e.statusCode === a.X1.BAD_REQUEST) && (t.errorStatusCode = a.X1.NOT_FOUND),
                                    t.loadingState !== n.G.IDLE && (t.loadingState = n.G.REJECT));
                            }
                    }),
                    reset() {
                        ((t.loadingState = n.G.IDLE), (t.title = null), (t.errorStatusCode = null), t.destroyItems([t.items]));
                    },
                }));
            var p = i(58870),
                f = i(21190);
            let h = o.gK.model('ChartPagePlaylistModel', { uuid: o.gK.string, uid: o.gK.number, kind: o.gK.number }),
                v = o.gK
                    .compose(o.gK.model('ChartTracksPage', { title: o.gK.maybeNull(o.gK.string), playlistMeta: o.gK.maybeNull(h), items: o.gK.array(f.v) }), d.X)
                    .views((t) => ({
                        get isLoading() {
                            return t.isNeededToLoad || t.loadingState === n.G.PENDING;
                        },
                    }))
                    .actions((t) => ({
                        getTracks: (0, o.L3)(function* () {
                            let { landing3Resource: e, modelActionsLogger: i } = (0, o._$)(t);
                            if (t.loadingState !== n.G.PENDING)
                                try {
                                    t.loadingState = n.G.PENDING;
                                    let i = yield e.getChart();
                                    ((t.title = i.chart.title),
                                        (t.playlistMeta = (0, o.wg)({ uuid: i.chart.playlistUuid, uid: i.chart.uid, kind: i.chart.kind })),
                                        (t.items = (0, o.wg)(i.chart.tracks.map((t) => (0, p.b)(t.track, t.chart)))),
                                        t.loadingState !== n.G.IDLE && (t.loadingState = n.G.RESOLVE));
                                } catch (e) {
                                    (i.error(e), t.loadingState !== n.G.IDLE && (t.loadingState = n.G.REJECT));
                                }
                        }),
                    })),
                y = o.gK.model('ChartPageModel', { tracksSubPage: v, podcastsSubPage: g }),
                E = { tracksSubPage: { loadingState: n.G.IDLE, items: [] }, podcastsSubPage: { loadingState: n.G.IDLE, items: [] } },
                { pageStoreProvider: I } = (0, r.W)({ createStore: (t) => y.create(E, t), patchKey: s.n.CHART }),
                b = I;
        },
        91136: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => s });
            class r extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(t, e = {}) {
                    let { code: i = 'E_INTERNAL', data: s = {}, ...o } = e,
                        n = t || 'Internal error';
                    (super(n, o), (this.message = n), (this.code = i), (this.data = s), (this.stack = Error(n).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
            class s extends r {
                name = 'HttpException';
                constructor(t = 'Http Client error', { code: e = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(t, { code: e, ...i }), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        94961: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => n });
            var r = i(70850),
                s = i(89625),
                o = i(2537);
            let n = (t, e) => {
                var i, n;
                let a = null == (i = t.artists) ? void 0 : i.map(s.G),
                    l = null == (n = t.albums) ? void 0 : n.map(r.f);
                return { ...(0, o.x)(t, e), artists: a, albums: l };
            };
        },
    },
    (t) => {
        (t.O(0, [6706, 1311, 8832, 6904, 5977, 2837, 5277, 763, 2670, 7358], () => t((t.s = 39902))), (_N_E = t.O()));
    },
]);
