'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3269],
    {
        27912: (e, r, t) => {
            t.d(r, { t: () => s });
            let s = {
                statusCodes: {
                    408: { retryPolicy: 'constant-backoff', attempts: [2e3, 5e3] },
                    429: { retryPolicy: 'constant-backoff', attempts: [2e3, 5e3] },
                    500: { retryPolicy: 'constant-backoff', attempts: [1e3, 3e3] },
                    502: { retryPolicy: 'constant-backoff', attempts: [1e3, 3e3] },
                    503: { retryPolicy: 'constant-backoff', attempts: [1e3, 3e3] },
                    504: { retryPolicy: 'constant-backoff', attempts: [2e3, 5e3] },
                    NON_HTTP_ERROR: { retryPolicy: 'constant-backoff', attempts: [1e3, 1e3] },
                    TIMEOUT: { retryPolicy: 'constant-backoff', attempts: [500] },
                },
                totalRequestsLimit: 3,
            };
        },
        36484: (e, r, t) => {
            t.d(r, {
                $$: () => ei,
                $5: () => ef,
                $8: () => h,
                $I: () => d,
                $Y: () => eL,
                A4: () => x,
                CN: () => er,
                CR: () => u,
                DP: () => j,
                DT: () => ej,
                DV: () => eu,
                E: () => k,
                EN: () => s,
                Ez: () => ec,
                GV: () => y,
                Hm: () => i,
                JM: () => en,
                K1: () => Q,
                LC: () => ev,
                Lb: () => v,
                Lk: () => ea,
                N1: () => ed,
                NN: () => T,
                O9: () => N,
                OP: () => f,
                Oo: () => P,
                P0: () => R,
                P1: () => et,
                PL: () => eR,
                QG: () => D,
                RG: () => eM,
                SX: () => em,
                TD: () => eg,
                TK: () => a,
                Tq: () => eh,
                U2: () => H,
                UB: () => eC,
                Ut: () => z,
                V3: () => p,
                V4: () => w,
                VR: () => eN,
                W5: () => eE,
                WA: () => K,
                X4: () => M,
                X8: () => F,
                Xc: () => X,
                Zf: () => n,
                Zi: () => eO,
                Zl: () => ee,
                _1: () => _,
                aE: () => G,
                by: () => ew,
                c9: () => W,
                cZ: () => J,
                dA: () => eP,
                dh: () => ek,
                en: () => Z,
                eu: () => Y,
                ff: () => e_,
                gd: () => eo,
                gu: () => l,
                jQ: () => $,
                ki: () => q,
                mr: () => c,
                nM: () => I,
                ni: () => eD,
                ok: () => B,
                oo: () => O,
                qN: () => V,
                qT: () => ex,
                qt: () => E,
                re: () => es,
                ro: () => U,
                s_: () => eb,
                sv: () => el,
                tz: () => m,
                u2: () => ep,
                uM: () => ey,
                vH: () => L,
                vg: () => eH,
                wH: () => A,
                wK: () => g,
                xF: () => b,
                y$: () => o,
                yq: () => S,
                zj: () => C,
            });
            let s = 'AfterTrackResource',
                n = 'Logger',
                a = 'ModelActionsLogger',
                i = 'HttpClient',
                l = 'HttpBeaconClient',
                o = 'Slam',
                c = 'UgcUploadHttpClient',
                f = 'BaseResourceHttpClient',
                x = 'ResourceHttpClient',
                u = 'ResourceBeaconClient',
                d = 'AccountResource',
                _ = 'UsersResource',
                p = 'LandingResource',
                g = 'LandingBlocksResource',
                v = 'Landing3Resource',
                m = 'AlbumResource',
                k = 'SlidesResource',
                E = 'MusicExternalApiPrefixUrl',
                y = 'MusicResourceFactory',
                w = 'PublicConfig',
                b = 'ServerConfig',
                R = 'TokenConfig',
                O = 'Storage',
                j = 'CookieStorage',
                H = 'LocalStorage',
                h = 'LibraryResource',
                C = 'LumenResource',
                P = 'TracksResource',
                L = 'SessionStorage',
                M = 'TopResource',
                N = 'ArtistsResource',
                D = 'Authorization',
                A = 'RedAlertResource',
                B = 'RotorResource',
                F = 'WaveResource',
                S = 'SearchResource',
                T = 'SearchPlaylistResource',
                V = 'PlaylistResource',
                U = 'PlaylistsResource',
                I = 'PinResource',
                z = 'MetatagsResource',
                Q = 'TagResource',
                Y = 'FeedResource',
                K = 'CONTAINER_USER_ID_TOKEN',
                G = 'PinsResource',
                q = 'MusicHistoryResource',
                Z = 'ChartResource',
                $ = 'ClipsResource',
                W = 'DynamicPagesResource',
                X = 'CONTAINER_I18N_STORAGE',
                J = 'LyricViewsResource',
                ee = 'NonMusicResource',
                er = 'DonationResource',
                et = 'LoaderResource',
                es = 'PrefixlessResource',
                en = 'StreamsResource',
                ea = 'FiltersResource',
                ei = 'UgcResource',
                el = 'CollectionResource',
                eo = 'AdsResource',
                ec = 'PersonalResource',
                ef = 'AvailabilityResource',
                ex = 'GetFileInfoResource',
                eu = 'ResourcesFileInfoResource',
                ed = 'DisclaimersResource',
                e_ = 'DisclaimerDictionary',
                ep = 'FamilyResource',
                eg = 'ChildrenLandingResource',
                ev = 'TelemetryResource',
                em = 'Env',
                ek = 'PromoResource',
                eE = 'RumResource',
                ey = 'AcqOffers',
                ew = 'Ynison',
                eb = 'YnisonNewConnector',
                eR = 'LabelsResource',
                eO = 'RequestExecutionContext',
                ej = 'ConcertsResource',
                eH = 'YaMetrikaController',
                eh = 'RumTransport',
                eC = 'YaMetrikaTransport',
                eP = 'WordsResource',
                eL = 'WheelResource',
                eM = 'MocksInitializer',
                eN = 'NetworkMonitorFactory',
                eD = 'SkeletonSdk';
        },
        62562: (e, r, t) => {
            t.d(r, { B: () => a, N: () => i });
            var s = t(74631),
                n = t(36432);
            let a = (0, s.createContext)(null);
            function i() {
                let e = (0, s.useContext)(a);
                if (null === e) throw new n.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
        },
        66738: (e, r, t) => {
            t.d(r, { I: () => c });
            // for PulseSync WebHost: BEGIN export native notification icon lookup for addons
            t.d(r, { resolveIcon: () => resolveIcon });
            // for PulseSync WebHost: END export native notification icon lookup for addons
            var s,
                n = t(74631),
                a = {
                    5728: (e, r, t) => {
                        (t.r(r), t.d(r, { default: () => l }));
                        var s,
                            n,
                            a = t(810);
                        function i() {
                            return (i = Object.assign
                                ? Object.assign.bind()
                                : function (e) {
                                      for (var r = 1; r < arguments.length; r++) {
                                          var t = arguments[r];
                                          for (var s in t) ({}).hasOwnProperty.call(t, s) && (e[s] = t[s]);
                                      }
                                      return e;
                                  }).apply(null, arguments);
                        }
                        let l = (0, a.forwardRef)(function (e, r) {
                            return a.createElement(
                                'svg',
                                i({ fill: 'none', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', ref: r }, e),
                                s ||
                                    (s = a.createElement(
                                        'g',
                                        { clipPath: 'url(#plusBadge_svg__a)' },
                                        a.createElement('path', { fill: 'url(#plusBadge_svg__b)', d: 'M0 0h24v24H0z' }),
                                        a.createElement('path', {
                                            fillRule: 'evenodd',
                                            clipRule: 'evenodd',
                                            d: 'm12.636 16.794 1.559-4.797h5.797a7.996 7.996 0 1 1-5.525-7.606l-1.822 5.607H7.324l-.65 1.999h5.322l-1.56 4.797h2.2Zm2.208-6.796 1.526-4.694a8.004 8.004 0 0 1 3.37 4.694h-4.896Z',
                                            fill: '#fff',
                                        }),
                                    )),
                                n ||
                                    (n = a.createElement(
                                        'defs',
                                        null,
                                        a.createElement(
                                            'linearGradient',
                                            { id: 'plusBadge_svg__b', x1: 0, y1: 10.4, x2: 24, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                            a.createElement('stop', { stopColor: '#FF5C4D' }),
                                            a.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                            a.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                                        ),
                                        a.createElement('clipPath', { id: 'plusBadge_svg__a' }, a.createElement('rect', { width: 24, height: 24, rx: 6, fill: '#fff' })),
                                    )),
                            );
                        });
                    },
                    9877: (e, r, t) => {
                        (t.r(r), t.d(r, { default: () => l }));
                        var s,
                            n,
                            a = t(810);
                        function i() {
                            return (i = Object.assign
                                ? Object.assign.bind()
                                : function (e) {
                                      for (var r = 1; r < arguments.length; r++) {
                                          var t = arguments[r];
                                          for (var s in t) ({}).hasOwnProperty.call(t, s) && (e[s] = t[s]);
                                      }
                                      return e;
                                  }).apply(null, arguments);
                        }
                        let l = (0, a.forwardRef)(function (e, r) {
                            return a.createElement(
                                'svg',
                                i({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', ref: r }, e),
                                s ||
                                    (s = a.createElement(
                                        'g',
                                        { clipPath: 'url(#plusColor_svg__a)' },
                                        a.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 }),
                                        a.createElement('path', {
                                            fill: 'url(#plusColor_svg__b)',
                                            fillRule: 'evenodd',
                                            d: 'M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0c1.295 0 2.542.205 3.71.585L12.977 9H4.989l-.976 3H12l-2.34 7.2h3.3L15.3 12H24Zm-.378-3h-7.346l2.29-7.046A12.019 12.019 0 0 1 23.622 9Z',
                                            clipRule: 'evenodd',
                                        }),
                                    )),
                                n ||
                                    (n = a.createElement(
                                        'defs',
                                        null,
                                        a.createElement(
                                            'linearGradient',
                                            { id: 'plusColor_svg__b', x1: 0, x2: 24, y1: 10.4, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                            a.createElement('stop', { stopColor: '#FF5C4D' }),
                                            a.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                            a.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                                        ),
                                        a.createElement('clipPath', { id: 'plusColor_svg__a' }, a.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 })),
                                    )),
                            );
                        });
                    },
                    5881: (e, r, t) => {
                        function s() {
                            for (var e, r, t = 0, s = ''; t < arguments.length;)
                                (e = arguments[t++]) &&
                                    (r = (function e(r) {
                                        var t,
                                            s,
                                            n = '';
                                        if ('string' == typeof r || 'number' == typeof r) n += r;
                                        else if ('object' == typeof r)
                                            if (Array.isArray(r)) for (t = 0; t < r.length; t++) r[t] && (s = e(r[t])) && (n && (n += ' '), (n += s));
                                            else for (t in r) r[t] && (n && (n += ' '), (n += t));
                                        return n;
                                    })(e)) &&
                                    (s && (s += ' '), (s += r));
                            return s;
                        }
                        (t.r(r), t.d(r, { clsx: () => s, default: () => n }));
                        let n = s;
                    },
                    4257: (e, r, t) => {
                        (t.r(r), t.d(r, { default: () => s }));
                        let s = {
                            root_size_xxxs: 'Rkdd2vKC_3xa1eUdRdHP',
                            root_size_xxs: 'l3tE1hAMmBj2aoPPwU08',
                            root_size_xs: 'UwnL5AJBMMAp6NwMDdZk',
                            root_size_s: 'DzJFnuf7XgdkFh28JAsM',
                            root_size_m: 'o_v2ds2BaqtzAsRuCVjw',
                            root_size_l: 'YjRa1ZjM_lXFlrfS7jcu',
                            root_size_xl: 'Seq0GowcqQmiA9LdLP_g',
                            root_size_xxl: 'mfy69_BvBIamD0e22rCQ',
                            root_size_xxxl: 'JY1OniQewgW9iHgfllZS',
                        };
                    },
                    9097: (e, r) => {
                        var t = Symbol.for('react.transitional.element');
                        function s(e, r, s) {
                            var n = null;
                            if ((void 0 !== s && (n = '' + s), void 0 !== r.key && (n = '' + r.key), 'key' in r))
                                for (var a in ((s = {}), r)) 'key' !== a && (s[a] = r[a]);
                            else s = r;
                            return { $$typeof: t, type: e, key: n, ref: void 0 !== (r = s.ref) ? r : null, props: s };
                        }
                        ((r.Fragment = Symbol.for('react.fragment')), (r.jsx = s), (r.jsxs = s));
                    },
                    4377: (e, r, t) => {
                        e.exports = t(9097);
                    },
                    5282: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'addToPlaylist_xxs', xlinkHref: '/icons/sprite.svg#addToPlaylist_xxs' }),
                            ]);
                        });
                    },
                    6150: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'add_l', xlinkHref: '/icons/sprite.svg#add_l' }),
                            ]);
                        });
                    },
                    3735: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'add_xxs', xlinkHref: '/icons/sprite.svg#add_xxs' }),
                            ]);
                        });
                    },
                    7177: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'add_xxxs', xlinkHref: '/icons/sprite.svg#add_xxxs' }),
                            ]);
                        });
                    },
                    6970: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'adult_s', xlinkHref: '/icons/sprite.svg#adult_s' }),
                            ]);
                        });
                    },
                    4121: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'adult_xs', xlinkHref: '/icons/sprite.svg#adult_xs' }),
                            ]);
                        });
                    },
                    4920: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'adult_xxs', xlinkHref: '/icons/sprite.svg#adult_xxs' }),
                            ]);
                        });
                    },
                    8897: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'adult_xxxs', xlinkHref: '/icons/sprite.svg#adult_xxxs' }),
                            ]);
                        });
                    },
                    3848: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'album_l', xlinkHref: '/icons/sprite.svg#album_l' }),
                            ]);
                        });
                    },
                    7397: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'album_s', xlinkHref: '/icons/sprite.svg#album_s' }),
                            ]);
                        });
                    },
                    4348: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'album_xl', xlinkHref: '/icons/sprite.svg#album_xl' }),
                            ]);
                        });
                    },
                    4227: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'album_xs', xlinkHref: '/icons/sprite.svg#album_xs' }),
                            ]);
                        });
                    },
                    3512: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'album_xxs', xlinkHref: '/icons/sprite.svg#album_xxs' }),
                            ]);
                        });
                    },
                    7581: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'arrowDown_xs', xlinkHref: '/icons/sprite.svg#arrowDown_xs' }),
                            ]);
                        });
                    },
                    205: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'arrowDown_xxs', xlinkHref: '/icons/sprite.svg#arrowDown_xxs' }),
                            ]);
                        });
                    },
                    3691: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'arrowDown_xxxs', xlinkHref: '/icons/sprite.svg#arrowDown_xxxs' }),
                            ]);
                        });
                    },
                    8705: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'arrowLeft_xs', xlinkHref: '/icons/sprite.svg#arrowLeft_xs' }),
                            ]);
                        });
                    },
                    9400: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'arrowLeft_xxs', xlinkHref: '/icons/sprite.svg#arrowLeft_xxs' }),
                            ]);
                        });
                    },
                    5993: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'arrowRight_xs', xlinkHref: '/icons/sprite.svg#arrowRight_xs' }),
                            ]);
                        });
                    },
                    7423: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'arrowRight_xxs', xlinkHref: '/icons/sprite.svg#arrowRight_xxs' }),
                            ]);
                        });
                    },
                    2402: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'arrowRight_xxxs', xlinkHref: '/icons/sprite.svg#arrowRight_xxxs' }),
                            ]);
                        });
                    },
                    249: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'artist_xxs', xlinkHref: '/icons/sprite.svg#artist_xxs' }),
                            ]);
                        });
                    },
                    5543: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'attention_xxl', xlinkHref: '/icons/sprite.svg#attention_xxl' }),
                            ]);
                        });
                    },
                    3057: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'attention_xxxl', xlinkHref: '/icons/sprite.svg#attention_xxxl' }),
                            ]);
                        });
                    },
                    3715: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'bandlink', xlinkHref: '/icons/sprite.svg#bandlink' }),
                            ]);
                        });
                    },
                    7457: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'bucket_xxs', xlinkHref: '/icons/sprite.svg#bucket_xxs' }),
                            ]);
                        });
                    },
                    3902: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'cast_xs', xlinkHref: '/icons/sprite.svg#cast_xs' }),
                            ]);
                        });
                    },
                    9608: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'chain_xs', xlinkHref: '/icons/sprite.svg#chain_xs' }),
                            ]);
                        });
                    },
                    2540: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'chain_xxs', xlinkHref: '/icons/sprite.svg#chain_xxs' }),
                            ]);
                        });
                    },
                    5093: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'chartDown_xxs', xlinkHref: '/icons/sprite.svg#chartDown_xxs' }),
                            ]);
                        });
                    },
                    5791: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'chartNew_xxs', xlinkHref: '/icons/sprite.svg#chartNew_xxs' }),
                            ]);
                        });
                    },
                    1027: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'chartSame_xxs', xlinkHref: '/icons/sprite.svg#chartSame_xxs' }),
                            ]);
                        });
                    },
                    6276: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'chartUp_xxs', xlinkHref: '/icons/sprite.svg#chartUp_xxs' }),
                            ]);
                        });
                    },
                    6311: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'check_xs', xlinkHref: '/icons/sprite.svg#check_xs' }),
                            ]);
                        });
                    },
                    272: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'check_xxl', xlinkHref: '/icons/sprite.svg#check_xxl' }),
                            ]);
                        });
                    },
                    154: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'check_xxs', xlinkHref: '/icons/sprite.svg#check_xxs' }),
                            ]);
                        });
                    },
                    1557: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'check_xxxs', xlinkHref: '/icons/sprite.svg#check_xxxs' }),
                            ]);
                        });
                    },
                    8836: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'clip_xl', xlinkHref: '/icons/sprite.svg#clip_xl' }),
                            ]);
                        });
                    },
                    2866: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'clip_xxs', xlinkHref: '/icons/sprite.svg#clip_xxs' }),
                            ]);
                        });
                    },
                    1595: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'close_filled_xs', xlinkHref: '/icons/sprite.svg#close_filled_xs' }),
                            ]);
                        });
                    },
                    6547: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'close_xs', xlinkHref: '/icons/sprite.svg#close_xs' }),
                            ]);
                        });
                    },
                    4777: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'close_xxs', xlinkHref: '/icons/sprite.svg#close_xxs' }),
                            ]);
                        });
                    },
                    9271: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'close_xxxs', xlinkHref: '/icons/sprite.svg#close_xxxs' }),
                            ]);
                        });
                    },
                    2390: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'code_xxs', xlinkHref: '/icons/sprite.svg#code_xxs' }),
                            ]);
                        });
                    },
                    4717: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'collections_m', xlinkHref: '/icons/sprite.svg#collections_m' }),
                            ]);
                        });
                    },
                    5561: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'collections_selected_m', xlinkHref: '/icons/sprite.svg#collections_selected_m' }),
                            ]);
                        });
                    },
                    7656: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'complain_l', xlinkHref: '/icons/sprite.svg#complain_l' }),
                            ]);
                        });
                    },
                    2777: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'complain_m', xlinkHref: '/icons/sprite.svg#complain_m' }),
                            ]);
                        });
                    },
                    2364: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'complain_s', xlinkHref: '/icons/sprite.svg#complain_s' }),
                            ]);
                        });
                    },
                    6823: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'complain_xl', xlinkHref: '/icons/sprite.svg#complain_xl' }),
                            ]);
                        });
                    },
                    4955: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'complain_xs', xlinkHref: '/icons/sprite.svg#complain_xs' }),
                            ]);
                        });
                    },
                    5842: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'complain_xxl', xlinkHref: '/icons/sprite.svg#complain_xxl' }),
                            ]);
                        });
                    },
                    7067: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'complain_xxs', xlinkHref: '/icons/sprite.svg#complain_xxs' }),
                            ]);
                        });
                    },
                    4247: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'complain_xxxl', xlinkHref: '/icons/sprite.svg#complain_xxxl' }),
                            ]);
                        });
                    },
                    4941: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'complain_xxxs', xlinkHref: '/icons/sprite.svg#complain_xxxs' }),
                            ]);
                        });
                    },
                    3790: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'crown_xxs', xlinkHref: '/icons/sprite.svg#crown_xxs' }),
                            ]);
                        });
                    },
                    8202: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'dislike_s', xlinkHref: '/icons/sprite.svg#dislike_s' }),
                            ]);
                        });
                    },
                    2528: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'dislike_xs', xlinkHref: '/icons/sprite.svg#dislike_xs' }),
                            ]);
                        });
                    },
                    2901: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'dislike_xxs', xlinkHref: '/icons/sprite.svg#dislike_xxs' }),
                            ]);
                        });
                    },
                    1552: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'disliked_s', xlinkHref: '/icons/sprite.svg#disliked_s' }),
                            ]);
                        });
                    },
                    8499: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'disliked_xs', xlinkHref: '/icons/sprite.svg#disliked_xs' }),
                            ]);
                        });
                    },
                    6682: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'disliked_xxs', xlinkHref: '/icons/sprite.svg#disliked_xxs' }),
                            ]);
                        });
                    },
                    20: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'donation_xxxs', xlinkHref: '/icons/sprite.svg#donation_xxxs' }),
                            ]);
                        });
                    },
                    1605: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'download_l', xlinkHref: '/icons/sprite.svg#download_l' }),
                            ]);
                        });
                    },
                    9299: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'download_xxs', xlinkHref: '/icons/sprite.svg#download_xxs' }),
                            ]);
                        });
                    },
                    1126: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'downloaded_xxs', xlinkHref: '/icons/sprite.svg#downloaded_xxs' }),
                            ]);
                        });
                    },
                    5294: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'dragDots_xxs', xlinkHref: '/icons/sprite.svg#dragDots_xxs' }),
                            ]);
                        });
                    },
                    9551: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'edit_xxs', xlinkHref: '/icons/sprite.svg#edit_xxs' }),
                            ]);
                        });
                    },
                    6070: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'exclamation_s', xlinkHref: '/icons/sprite.svg#exclamation_s' }),
                            ]);
                        });
                    },
                    837: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'exclamation_xs', xlinkHref: '/icons/sprite.svg#exclamation_xs' }),
                            ]);
                        });
                    },
                    1578: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'exclamation_xxs', xlinkHref: '/icons/sprite.svg#exclamation_xxs' }),
                            ]);
                        });
                    },
                    8871: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'exclamation_xxxs', xlinkHref: '/icons/sprite.svg#exclamation_xxxs' }),
                            ]);
                        });
                    },
                    2098: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'explicit_s', xlinkHref: '/icons/sprite.svg#explicit_s' }),
                            ]);
                        });
                    },
                    4623: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'explicit_xs', xlinkHref: '/icons/sprite.svg#explicit_xs' }),
                            ]);
                        });
                    },
                    1654: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'explicit_xxs', xlinkHref: '/icons/sprite.svg#explicit_xxs' }),
                            ]);
                        });
                    },
                    6639: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'explicit_xxxs', xlinkHref: '/icons/sprite.svg#explicit_xxxs' }),
                            ]);
                        });
                    },
                    7162: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'eye_crossed_xxs', xlinkHref: '/icons/sprite.svg#eye_crossed_xxs' }),
                            ]);
                        });
                    },
                    2756: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'filter_xs', xlinkHref: '/icons/sprite.svg#filter_xs' }),
                            ]);
                        });
                    },
                    9807: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'filter_xxs', xlinkHref: '/icons/sprite.svg#filter_xxs' }),
                            ]);
                        });
                    },
                    8473: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'fullscreen_xs', xlinkHref: '/icons/sprite.svg#fullscreen_xs' }),
                            ]);
                        });
                    },
                    9833: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'gift_xxs', xlinkHref: '/icons/sprite.svg#gift_xxs' }),
                            ]);
                        });
                    },
                    3286: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'googlePlay', xlinkHref: '/icons/sprite.svg#googlePlay' }),
                            ]);
                        });
                    },
                    3003: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'history_m', xlinkHref: '/icons/sprite.svg#history_m' }),
                            ]);
                        });
                    },
                    4561: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'home_m', xlinkHref: '/icons/sprite.svg#home_m' }),
                            ]);
                        });
                    },
                    4355: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'home_selected_m', xlinkHref: '/icons/sprite.svg#home_selected_m' }),
                            ]);
                        });
                    },
                    3331: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'huaweiAppGallery', xlinkHref: '/icons/sprite.svg#huaweiAppGallery' }),
                            ]);
                        });
                    },
                    7662: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'infinity_xs', xlinkHref: '/icons/sprite.svg#infinity_xs' }),
                            ]);
                        });
                    },
                    4959: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'info_xxs', xlinkHref: '/icons/sprite.svg#info_xxs' }),
                            ]);
                        });
                    },
                    9642: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'kids_m', xlinkHref: '/icons/sprite.svg#kids_m' }),
                            ]);
                        });
                    },
                    2244: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'kids_selected_m', xlinkHref: '/icons/sprite.svg#kids_selected_m' }),
                            ]);
                        });
                    },
                    7722: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'kinopoiskEn', xlinkHref: '/icons/sprite.svg#kinopoiskEn' }),
                            ]);
                        });
                    },
                    362: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'kinopoiskRu', xlinkHref: '/icons/sprite.svg#kinopoiskRu' }),
                            ]);
                        });
                    },
                    2086: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'lightning_xxs', xlinkHref: '/icons/sprite.svg#lightning_xxs' }),
                            ]);
                        });
                    },
                    5035: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'likeVariant_xxs', xlinkHref: '/icons/sprite.svg#likeVariant_xxs' }),
                            ]);
                        });
                    },
                    1423: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'like_l', xlinkHref: '/icons/sprite.svg#like_l' }),
                            ]);
                        });
                    },
                    2845: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'like_m', xlinkHref: '/icons/sprite.svg#like_m' }),
                            ]);
                        });
                    },
                    4933: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'like_xs', xlinkHref: '/icons/sprite.svg#like_xs' }),
                            ]);
                        });
                    },
                    835: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'like_xxs', xlinkHref: '/icons/sprite.svg#like_xxs' }),
                            ]);
                        });
                    },
                    6707: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'likedVariant_s', xlinkHref: '/icons/sprite.svg#likedVariant_s' }),
                            ]);
                        });
                    },
                    6036: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'likedVariant_xxs', xlinkHref: '/icons/sprite.svg#likedVariant_xxs' }),
                            ]);
                        });
                    },
                    9503: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'liked_m', xlinkHref: '/icons/sprite.svg#liked_m' }),
                            ]);
                        });
                    },
                    2138: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'liked_xs', xlinkHref: '/icons/sprite.svg#liked_xs' }),
                            ]);
                        });
                    },
                    7526: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'liked_xxs', xlinkHref: '/icons/sprite.svg#liked_xxs' }),
                            ]);
                        });
                    },
                    9130: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'link_rounded_xxs', xlinkHref: '/icons/sprite.svg#link_rounded_xxs' }),
                            ]);
                        });
                    },
                    9825: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'link_xxs', xlinkHref: '/icons/sprite.svg#link_xxs' }),
                            ]);
                        });
                    },
                    8426: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'listen_xxxs', xlinkHref: '/icons/sprite.svg#listen_xxxs' }),
                            ]);
                        });
                    },
                    3791: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'liteVersion_xs', xlinkHref: '/icons/sprite.svg#liteVersion_xs' }),
                            ]);
                        });
                    },
                    7419: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'lock_m', xlinkHref: '/icons/sprite.svg#lock_m' }),
                            ]);
                        });
                    },
                    9376: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'lock_xs', xlinkHref: '/icons/sprite.svg#lock_xs' }),
                            ]);
                        });
                    },
                    2506: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'lock_xxs', xlinkHref: '/icons/sprite.svg#lock_xxs' }),
                            ]);
                        });
                    },
                    3708: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'lyrics_xxs', xlinkHref: '/icons/sprite.svg#lyrics_xxs' }),
                            ]);
                        });
                    },
                    6407: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'macos', xlinkHref: '/icons/sprite.svg#macos' }),
                            ]);
                        });
                    },
                    5200: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'macos_xxs', xlinkHref: '/icons/sprite.svg#macos_xxs' }),
                            ]);
                        });
                    },
                    513: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'menuArrow_xxs', xlinkHref: '/icons/sprite.svg#menuArrow_xxs' }),
                            ]);
                        });
                    },
                    4374: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'moreOutlined_xxs', xlinkHref: '/icons/sprite.svg#moreOutlined_xxs' }),
                            ]);
                        });
                    },
                    6393: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'moreOutlined_xxxs', xlinkHref: '/icons/sprite.svg#moreOutlined_xxxs' }),
                            ]);
                        });
                    },
                    2570: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'more_m', xlinkHref: '/icons/sprite.svg#more_m' }),
                            ]);
                        });
                    },
                    6465: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'more_xs', xlinkHref: '/icons/sprite.svg#more_xs' }),
                            ]);
                        });
                    },
                    6760: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'more_xxs', xlinkHref: '/icons/sprite.svg#more_xxs' }),
                            ]);
                        });
                    },
                    740: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'musicLogo', xlinkHref: '/icons/sprite.svg#musicLogo' }),
                            ]);
                        });
                    },
                    2747: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'musicLogoCenterEn', xlinkHref: '/icons/sprite.svg#musicLogoCenterEn' }),
                            ]);
                        });
                    },
                    3590: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'musicLogoCenterRu', xlinkHref: '/icons/sprite.svg#musicLogoCenterRu' }),
                            ]);
                        });
                    },
                    5656: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'musicLogoLeftEn', xlinkHref: '/icons/sprite.svg#musicLogoLeftEn' }),
                            ]);
                        });
                    },
                    9723: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'musicLogoLeftRu', xlinkHref: '/icons/sprite.svg#musicLogoLeftRu' }),
                            ]);
                        });
                    },
                    3725: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'navigationCollection_selected_xs', xlinkHref: '/icons/sprite.svg#navigationCollection_selected_xs' }),
                            ]);
                        });
                    },
                    3982: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'navigationCollection_xs', xlinkHref: '/icons/sprite.svg#navigationCollection_xs' }),
                            ]);
                        });
                    },
                    2410: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'navigationConcerts_selected_xs', xlinkHref: '/icons/sprite.svg#navigationConcerts_selected_xs' }),
                            ]);
                        });
                    },
                    7516: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'navigationConcerts_xs', xlinkHref: '/icons/sprite.svg#navigationConcerts_xs' }),
                            ]);
                        });
                    },
                    3270: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', {
                                    key: 'navigationForYouAndTrends_selected_xs',
                                    xlinkHref: '/icons/sprite.svg#navigationForYouAndTrends_selected_xs',
                                }),
                            ]);
                        });
                    },
                    1581: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'navigationForYouAndTrends_xs', xlinkHref: '/icons/sprite.svg#navigationForYouAndTrends_xs' }),
                            ]);
                        });
                    },
                    6586: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'navigationKids_selected_xs', xlinkHref: '/icons/sprite.svg#navigationKids_selected_xs' }),
                            ]);
                        });
                    },
                    473: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'navigationKids_xs', xlinkHref: '/icons/sprite.svg#navigationKids_xs' }),
                            ]);
                        });
                    },
                    7145: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'navigationMuzmarket_m', xlinkHref: '/icons/sprite.svg#navigationMuzmarket_m' }),
                            ]);
                        });
                    },
                    553: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'navigationMuzmarket_xs', xlinkHref: '/icons/sprite.svg#navigationMuzmarket_xs' }),
                            ]);
                        });
                    },
                    9697: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'navigationMyVibeNDA_xs', xlinkHref: '/icons/sprite.svg#navigationMyVibeNDA_xs' }),
                            ]);
                        });
                    },
                    49: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'navigationMyVibe_xs', xlinkHref: '/icons/sprite.svg#navigationMyVibe_xs' }),
                            ]);
                        });
                    },
                    4085: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'navigationNonMusic_selected_xs', xlinkHref: '/icons/sprite.svg#navigationNonMusic_selected_xs' }),
                            ]);
                        });
                    },
                    9954: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'navigationNonMusic_xs', xlinkHref: '/icons/sprite.svg#navigationNonMusic_xs' }),
                            ]);
                        });
                    },
                    4281: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'navigationPlus_xs', xlinkHref: '/icons/sprite.svg#navigationPlus_xs' }),
                            ]);
                        });
                    },
                    1568: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'navigationSearch_xs', xlinkHref: '/icons/sprite.svg#navigationSearch_xs' }),
                            ]);
                        });
                    },
                    2554: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'next_xs', xlinkHref: '/icons/sprite.svg#next_xs' }),
                            ]);
                        });
                    },
                    4400: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'next_xxl', xlinkHref: '/icons/sprite.svg#next_xxl' }),
                            ]);
                        });
                    },
                    8803: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'next_xxs', xlinkHref: '/icons/sprite.svg#next_xxs' }),
                            ]);
                        });
                    },
                    2060: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'non_music_m', xlinkHref: '/icons/sprite.svg#non_music_m' }),
                            ]);
                        });
                    },
                    5407: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'non_music_selected_m', xlinkHref: '/icons/sprite.svg#non_music_selected_m' }),
                            ]);
                        });
                    },
                    4526: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'note_l', xlinkHref: '/icons/sprite.svg#note_l' }),
                            ]);
                        });
                    },
                    6187: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'note_m', xlinkHref: '/icons/sprite.svg#note_m' }),
                            ]);
                        });
                    },
                    2020: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'note_s', xlinkHref: '/icons/sprite.svg#note_s' }),
                            ]);
                        });
                    },
                    1235: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'note_xl', xlinkHref: '/icons/sprite.svg#note_xl' }),
                            ]);
                        });
                    },
                    5108: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'note_xs', xlinkHref: '/icons/sprite.svg#note_xs' }),
                            ]);
                        });
                    },
                    9119: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'note_xxs', xlinkHref: '/icons/sprite.svg#note_xxs' }),
                            ]);
                        });
                    },
                    3581: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'note_xxxs', xlinkHref: '/icons/sprite.svg#note_xxxs' }),
                            ]);
                        });
                    },
                    9189: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'offline_xxl', xlinkHref: '/icons/sprite.svg#offline_xxl' }),
                            ]);
                        });
                    },
                    7488: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'pause', xlinkHref: '/icons/sprite.svg#pause' }),
                            ]);
                        });
                    },
                    5879: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'pauseVibe_s', xlinkHref: '/icons/sprite.svg#pauseVibe_s' }),
                            ]);
                        });
                    },
                    3908: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'pause_filled_l', xlinkHref: '/icons/sprite.svg#pause_filled_l' }),
                            ]);
                        });
                    },
                    3728: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'pause_filled_m', xlinkHref: '/icons/sprite.svg#pause_filled_m' }),
                            ]);
                        });
                    },
                    1540: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'pause_filled_xl', xlinkHref: '/icons/sprite.svg#pause_filled_xl' }),
                            ]);
                        });
                    },
                    8972: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'pause_filled_xs', xlinkHref: '/icons/sprite.svg#pause_filled_xs' }),
                            ]);
                        });
                    },
                    9051: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'pause_filled_xxl', xlinkHref: '/icons/sprite.svg#pause_filled_xxl' }),
                            ]);
                        });
                    },
                    8831: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'pause_m', xlinkHref: '/icons/sprite.svg#pause_m' }),
                            ]);
                        });
                    },
                    3874: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'pause_xs', xlinkHref: '/icons/sprite.svg#pause_xs' }),
                            ]);
                        });
                    },
                    8406: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'pause_xxs', xlinkHref: '/icons/sprite.svg#pause_xxs' }),
                            ]);
                        });
                    },
                    7525: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'pencil_xxs', xlinkHref: '/icons/sprite.svg#pencil_xxs' }),
                            ]);
                        });
                    },
                    2629: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'picture_s', xlinkHref: '/icons/sprite.svg#picture_s' }),
                            ]);
                        });
                    },
                    7514: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'picture_xl', xlinkHref: '/icons/sprite.svg#picture_xl' }),
                            ]);
                        });
                    },
                    4338: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'picture_xs', xlinkHref: '/icons/sprite.svg#picture_xs' }),
                            ]);
                        });
                    },
                    3310: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'pin_filled_xs', xlinkHref: '/icons/sprite.svg#pin_filled_xs' }),
                            ]);
                        });
                    },
                    9180: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'pin_filled_xxs', xlinkHref: '/icons/sprite.svg#pin_filled_xxs' }),
                            ]);
                        });
                    },
                    6179: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'pin_xs', xlinkHref: '/icons/sprite.svg#pin_xs' }),
                            ]);
                        });
                    },
                    6286: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'pin_xxs', xlinkHref: '/icons/sprite.svg#pin_xxs' }),
                            ]);
                        });
                    },
                    7288: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'play', xlinkHref: '/icons/sprite.svg#play' }),
                            ]);
                        });
                    },
                    85: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'playLast_xxs', xlinkHref: '/icons/sprite.svg#playLast_xxs' }),
                            ]);
                        });
                    },
                    3686: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'playNext_xxs', xlinkHref: '/icons/sprite.svg#playNext_xxs' }),
                            ]);
                        });
                    },
                    7833: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'playQueue_m', xlinkHref: '/icons/sprite.svg#playQueue_m' }),
                            ]);
                        });
                    },
                    2023: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'playQueue_xs', xlinkHref: '/icons/sprite.svg#playQueue_xs' }),
                            ]);
                        });
                    },
                    6758: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'playQueue_xxs', xlinkHref: '/icons/sprite.svg#playQueue_xxs' }),
                            ]);
                        });
                    },
                    7863: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'playVibe_s', xlinkHref: '/icons/sprite.svg#playVibe_s' }),
                            ]);
                        });
                    },
                    759: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'play_filled_l', xlinkHref: '/icons/sprite.svg#play_filled_l' }),
                            ]);
                        });
                    },
                    5310: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'play_filled_m', xlinkHref: '/icons/sprite.svg#play_filled_m' }),
                            ]);
                        });
                    },
                    221: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'play_filled_xl', xlinkHref: '/icons/sprite.svg#play_filled_xl' }),
                            ]);
                        });
                    },
                    2855: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'play_filled_xs', xlinkHref: '/icons/sprite.svg#play_filled_xs' }),
                            ]);
                        });
                    },
                    2551: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'play_filled_xxl', xlinkHref: '/icons/sprite.svg#play_filled_xxl' }),
                            ]);
                        });
                    },
                    727: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'play_m', xlinkHref: '/icons/sprite.svg#play_m' }),
                            ]);
                        });
                    },
                    1516: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'play_xs', xlinkHref: '/icons/sprite.svg#play_xs' }),
                            ]);
                        });
                    },
                    9095: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'play_xxs', xlinkHref: '/icons/sprite.svg#play_xxs' }),
                            ]);
                        });
                    },
                    9556: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'play_xxxs', xlinkHref: '/icons/sprite.svg#play_xxxs' }),
                            ]);
                        });
                    },
                    206: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'playlist_s', xlinkHref: '/icons/sprite.svg#playlist_s' }),
                            ]);
                        });
                    },
                    9139: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'playlist_xl', xlinkHref: '/icons/sprite.svg#playlist_xl' }),
                            ]);
                        });
                    },
                    8642: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'playlist_xs', xlinkHref: '/icons/sprite.svg#playlist_xs' }),
                            ]);
                        });
                    },
                    6623: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'plus', xlinkHref: '/icons/sprite.svg#plus' }),
                            ]);
                        });
                    },
                    839: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'plusOutlined', xlinkHref: '/icons/sprite.svg#plusOutlined' }),
                            ]);
                        });
                    },
                    3739: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'plusOutlined_m', xlinkHref: '/icons/sprite.svg#plusOutlined_m' }),
                            ]);
                        });
                    },
                    4544: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'podcasts_xxs', xlinkHref: '/icons/sprite.svg#podcasts_xxs' }),
                            ]);
                        });
                    },
                    5079: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'previous_xs', xlinkHref: '/icons/sprite.svg#previous_xs' }),
                            ]);
                        });
                    },
                    2913: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'previous_xxl', xlinkHref: '/icons/sprite.svg#previous_xxl' }),
                            ]);
                        });
                    },
                    8454: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'previous_xxs', xlinkHref: '/icons/sprite.svg#previous_xxs' }),
                            ]);
                        });
                    },
                    139: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'repeat_one_xs', xlinkHref: '/icons/sprite.svg#repeat_one_xs' }),
                            ]);
                        });
                    },
                    2744: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'repeat_one_xxs', xlinkHref: '/icons/sprite.svg#repeat_one_xxs' }),
                            ]);
                        });
                    },
                    7719: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'repeat_xs', xlinkHref: '/icons/sprite.svg#repeat_xs' }),
                            ]);
                        });
                    },
                    9498: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'repeat_xxs', xlinkHref: '/icons/sprite.svg#repeat_xxs' }),
                            ]);
                        });
                    },
                    825: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'reset_xxs', xlinkHref: '/icons/sprite.svg#reset_xxs' }),
                            ]);
                        });
                    },
                    3893: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'reset_xxxs', xlinkHref: '/icons/sprite.svg#reset_xxxs' }),
                            ]);
                        });
                    },
                    8959: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'rewindBackwards_xs', xlinkHref: '/icons/sprite.svg#rewindBackwards_xs' }),
                            ]);
                        });
                    },
                    1686: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'rewindBackwards_xxs', xlinkHref: '/icons/sprite.svg#rewindBackwards_xxs' }),
                            ]);
                        });
                    },
                    852: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'rewindForward_xs', xlinkHref: '/icons/sprite.svg#rewindForward_xs' }),
                            ]);
                        });
                    },
                    9322: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'rewindForward_xxs', xlinkHref: '/icons/sprite.svg#rewindForward_xxs' }),
                            ]);
                        });
                    },
                    1798: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'ruble_m', xlinkHref: '/icons/sprite.svg#ruble_m' }),
                            ]);
                        });
                    },
                    2187: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'ruble_xxs', xlinkHref: '/icons/sprite.svg#ruble_xxs' }),
                            ]);
                        });
                    },
                    1764: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'ruble_xxxs', xlinkHref: '/icons/sprite.svg#ruble_xxxs' }),
                            ]);
                        });
                    },
                    3753: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'search_l', xlinkHref: '/icons/sprite.svg#search_l' }),
                            ]);
                        });
                    },
                    3222: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'search_m', xlinkHref: '/icons/sprite.svg#search_m' }),
                            ]);
                        });
                    },
                    6230: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'search_selected_m', xlinkHref: '/icons/sprite.svg#search_selected_m' }),
                            ]);
                        });
                    },
                    4380: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'search_xs', xlinkHref: '/icons/sprite.svg#search_xs' }),
                            ]);
                        });
                    },
                    8002: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'search_xxl', xlinkHref: '/icons/sprite.svg#search_xxl' }),
                            ]);
                        });
                    },
                    4553: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'settings_xs', xlinkHref: '/icons/sprite.svg#settings_xs' }),
                            ]);
                        });
                    },
                    // for PulseSync: BEGIN settings gear SVG component
                    9901: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'settingsGear_xs', xlinkHref: '/icons/sprite.svg#settingsGear_xs' }),
                            ]);
                        });
                    },
                    // for PulseSync: END settings gear SVG component
                    7241: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'settings_xxs', xlinkHref: '/icons/sprite.svg#settings_xxs' }),
                            ]);
                        });
                    },
                    9620: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'share_m', xlinkHref: '/icons/sprite.svg#share_m' }),
                            ]);
                        });
                    },
                    1655: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'share_xxs', xlinkHref: '/icons/sprite.svg#share_xxs' }),
                            ]);
                        });
                    },
                    7873: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'shuffle_xs', xlinkHref: '/icons/sprite.svg#shuffle_xs' }),
                            ]);
                        });
                    },
                    1506: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'shuffle_xxs', xlinkHref: '/icons/sprite.svg#shuffle_xxs' }),
                            ]);
                        });
                    },
                    6898: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'site_xs', xlinkHref: '/icons/sprite.svg#site_xs' }),
                            ]);
                        });
                    },
                    9879: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'speed_1_25x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1_25x_centered_m' }),
                            ]);
                        });
                    },
                    3278: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'speed_1_25x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1_25x_centered_xs' }),
                            ]);
                        });
                    },
                    2705: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'speed_1_25x_l', xlinkHref: '/icons/sprite.svg#speed_1_25x_l' }),
                            ]);
                        });
                    },
                    4484: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'speed_1_5x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1_5x_centered_m' }),
                            ]);
                        });
                    },
                    1468: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'speed_1_5x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1_5x_centered_xs' }),
                            ]);
                        });
                    },
                    8671: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'speed_1_5x_l', xlinkHref: '/icons/sprite.svg#speed_1_5x_l' }),
                            ]);
                        });
                    },
                    2922: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'speed_1_75x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1_75x_centered_m' }),
                            ]);
                        });
                    },
                    8279: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'speed_1_75x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1_75x_centered_xs' }),
                            ]);
                        });
                    },
                    6413: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'speed_1_75x_l', xlinkHref: '/icons/sprite.svg#speed_1_75x_l' }),
                            ]);
                        });
                    },
                    2434: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'speed_1x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1x_centered_m' }),
                            ]);
                        });
                    },
                    9074: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'speed_1x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1x_centered_xs' }),
                            ]);
                        });
                    },
                    8254: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'speed_1x_l', xlinkHref: '/icons/sprite.svg#speed_1x_l' }),
                            ]);
                        });
                    },
                    9173: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'speed_2x_centered_m', xlinkHref: '/icons/sprite.svg#speed_2x_centered_m' }),
                            ]);
                        });
                    },
                    182: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'speed_2x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_2x_centered_xs' }),
                            ]);
                        });
                    },
                    8297: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'speed_2x_l', xlinkHref: '/icons/sprite.svg#speed_2x_l' }),
                            ]);
                        });
                    },
                    9711: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'syncLyrics_m', xlinkHref: '/icons/sprite.svg#syncLyrics_m' }),
                            ]);
                        });
                    },
                    8056: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'syncLyrics_xs', xlinkHref: '/icons/sprite.svg#syncLyrics_xs' }),
                            ]);
                        });
                    },
                    2764: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'syncLyrics_xxs', xlinkHref: '/icons/sprite.svg#syncLyrics_xxs' }),
                            ]);
                        });
                    },
                    8353: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'thumbDown_xs', xlinkHref: '/icons/sprite.svg#thumbDown_xs' }),
                            ]);
                        });
                    },
                    7193: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'thumbDown_xxs', xlinkHref: '/icons/sprite.svg#thumbDown_xxs' }),
                            ]);
                        });
                    },
                    3293: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'thumbUp_xs', xlinkHref: '/icons/sprite.svg#thumbUp_xs' }),
                            ]);
                        });
                    },
                    9748: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'thumbUp_xxs', xlinkHref: '/icons/sprite.svg#thumbUp_xxs' }),
                            ]);
                        });
                    },
                    6374: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'ticket_m', xlinkHref: '/icons/sprite.svg#ticket_m' }),
                            ]);
                        });
                    },
                    1116: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'ticket_selected_m', xlinkHref: '/icons/sprite.svg#ticket_selected_m' }),
                            ]);
                        });
                    },
                    2378: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'trailer_xs', xlinkHref: '/icons/sprite.svg#trailer_xs' }),
                            ]);
                        });
                    },
                    7377: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'trailer_xxs', xlinkHref: '/icons/sprite.svg#trailer_xxs' }),
                            ]);
                        });
                    },
                    9938: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'unavailable_xl', xlinkHref: '/icons/sprite.svg#unavailable_xl' }),
                            ]);
                        });
                    },
                    9261: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'unavailable_xs', xlinkHref: '/icons/sprite.svg#unavailable_xs' }),
                            ]);
                        });
                    },
                    701: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'unpin_xxs', xlinkHref: '/icons/sprite.svg#unpin_xxs' }),
                            ]);
                        });
                    },
                    1484: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'upload_xxs', xlinkHref: '/icons/sprite.svg#upload_xxs' }),
                            ]);
                        });
                    },
                    8382: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'users_xxxs', xlinkHref: '/icons/sprite.svg#users_xxxs' }),
                            ]);
                        });
                    },
                    582: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'vibe_xxs', xlinkHref: '/icons/sprite.svg#vibe_xxs' }),
                            ]);
                        });
                    },
                    1786: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'volumeOff_xs', xlinkHref: '/icons/sprite.svg#volumeOff_xs' }),
                            ]);
                        });
                    },
                    4527: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'volume_xs', xlinkHref: '/icons/sprite.svg#volume_xs' }),
                            ]);
                        });
                    },
                    4298: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'windows', xlinkHref: '/icons/sprite.svg#windows' }),
                            ]);
                        });
                    },
                    4419: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'windows_xs', xlinkHref: '/icons/sprite.svg#windows_xs' }),
                            ]);
                        });
                    },
                    790: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'yandexBooksEn', xlinkHref: '/icons/sprite.svg#yandexBooksEn' }),
                            ]);
                        });
                    },
                    9342: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'yandexBooksRu', xlinkHref: '/icons/sprite.svg#yandexBooksRu' }),
                            ]);
                        });
                    },
                    4403: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'yandexPayEn', xlinkHref: '/icons/sprite.svg#yandexPayEn' }),
                            ]);
                        });
                    },
                    4960: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'yandexPayRu', xlinkHref: '/icons/sprite.svg#yandexPayRu' }),
                            ]);
                        });
                    },
                    1601: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'yandexPlusEn', xlinkHref: '/icons/sprite.svg#yandexPlusEn' }),
                            ]);
                        });
                    },
                    8163: (e, r, t) => {
                        var s = t(810);
                        e.exports = s.forwardRef(function (e, r) {
                            return s.createElement('svg', Object.assign({}, e, { ref: r }), [
                                s.createElement('use', { key: 'yandexPlusRu', xlinkHref: '/icons/sprite.svg#yandexPlusRu' }),
                            ]);
                        });
                    },
                    1064: function (e, r, t) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(r, '__esModule', { value: !0 }), (r.Icon = r.IconComponent = void 0));
                        let n = t(4377),
                            a = t(810),
                            i = t(5881),
                            l = t(7638),
                            o = s(t(4257));
                        ((r.IconComponent = (e) => {
                            let { 'aria-label': r, className: t, focusable: s = !1, variant: a, size: c, forwardRef: f, ...x } = e,
                                u = c ? ''.concat(a, '_').concat(c) : a,
                                d = l.iconsCollection[u];
                            return d
                                ? (0, n.jsx)(d, {
                                      className: (0, i.clsx)(o.default.root, t, o.default['root_size_'.concat(c)]),
                                      focusable: s,
                                      'aria-label': r,
                                      ...x,
                                      'aria-hidden': !r,
                                      ref: f,
                                  })
                                : null;
                        }),
                            (r.Icon = (0, a.forwardRef)((e, t) => (0, n.jsx)(r.IconComponent, { forwardRef: t, ...e }))));
                    },
                    7638: function (e, r, t) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(r, '__esModule', { value: !0 }), (r.iconsCollection = r.iconsCollectionBySize = void 0));
                        let n = s(t(7177)),
                            a = s(t(8897)),
                            i = s(t(3691)),
                            l = s(t(2402)),
                            o = s(t(1557)),
                            c = s(t(9271)),
                            f = s(t(4941)),
                            x = s(t(20)),
                            u = s(t(8871)),
                            d = s(t(6639)),
                            _ = s(t(8426)),
                            p = s(t(6393)),
                            g = s(t(3581)),
                            v = s(t(9556)),
                            m = s(t(3893)),
                            k = s(t(1764)),
                            E = s(t(8382)),
                            y = s(t(3735)),
                            w = s(t(5282)),
                            b = s(t(4920)),
                            R = s(t(3512)),
                            O = s(t(205)),
                            j = s(t(9400)),
                            H = s(t(7423)),
                            h = s(t(249)),
                            C = s(t(7457)),
                            P = s(t(2540)),
                            L = s(t(5093)),
                            M = s(t(5791)),
                            N = s(t(1027)),
                            D = s(t(6276)),
                            A = s(t(154)),
                            B = s(t(2866)),
                            F = s(t(4777)),
                            S = s(t(2390)),
                            T = s(t(7067)),
                            V = s(t(3790)),
                            U = s(t(2901)),
                            I = s(t(6682)),
                            z = s(t(9299)),
                            Q = s(t(1126)),
                            Y = s(t(5294)),
                            K = s(t(9551)),
                            G = s(t(1578)),
                            q = s(t(1654)),
                            Z = s(t(7162)),
                            $ = s(t(9807)),
                            W = s(t(9833)),
                            X = s(t(4959)),
                            J = s(t(2086)),
                            ee = s(t(835)),
                            er = s(t(5035)),
                            et = s(t(7526)),
                            es = s(t(6036)),
                            en = s(t(9825)),
                            ea = s(t(9130)),
                            ei = s(t(2506)),
                            el = s(t(3708)),
                            eo = s(t(5200)),
                            ec = s(t(513)),
                            ef = s(t(6760)),
                            ex = s(t(4374)),
                            eu = s(t(8803)),
                            ed = s(t(9119)),
                            e_ = s(t(8406)),
                            ep = s(t(7525)),
                            eg = s(t(6286)),
                            ev = s(t(9180)),
                            em = s(t(9095)),
                            ek = s(t(85)),
                            eE = s(t(3686)),
                            ey = s(t(6758)),
                            ew = s(t(4544)),
                            eb = s(t(8454)),
                            eR = s(t(9498)),
                            eO = s(t(2744)),
                            ej = s(t(825)),
                            eH = s(t(1686)),
                            eh = s(t(9322)),
                            eC = s(t(2187)),
                            eP = s(t(7241)),
                            eL = s(t(1655)),
                            eM = s(t(1506)),
                            eN = s(t(2764)),
                            eD = s(t(7193)),
                            eA = s(t(9748)),
                            eB = s(t(7377)),
                            eF = s(t(701)),
                            eS = s(t(1484)),
                            eT = s(t(582)),
                            eV = s(t(4121)),
                            eU = s(t(4227)),
                            eI = s(t(7581)),
                            ez = s(t(8705)),
                            eQ = s(t(5993)),
                            eY = s(t(3902)),
                            eK = s(t(9608)),
                            eG = s(t(6311)),
                            eq = s(t(6547)),
                            eZ = s(t(1595)),
                            e$ = s(t(4955)),
                            eW = s(t(2528)),
                            eX = s(t(8499)),
                            eJ = s(t(837)),
                            e1 = s(t(4623)),
                            e0 = s(t(2756)),
                            e8 = s(t(8473)),
                            e2 = s(t(7662)),
                            e7 = s(t(4933)),
                            e5 = s(t(2138)),
                            e3 = s(t(3791)),
                            e4 = s(t(9376)),
                            e9 = s(t(6465)),
                            e6 = s(t(3982)),
                            re = s(t(3725)),
                            rr = s(t(7516)),
                            rt = s(t(2410)),
                            rs = s(t(1581)),
                            rn = s(t(3270)),
                            ra = s(t(473)),
                            ri = s(t(6586)),
                            rl = s(t(553)),
                            ro = s(t(49)),
                            rc = s(t(9697)),
                            rf = s(t(9954)),
                            rx = s(t(4085)),
                            ru = s(t(4281)),
                            rd = s(t(1568)),
                            r_ = s(t(2554)),
                            rp = s(t(5108)),
                            rg = s(t(3874)),
                            rv = s(t(8972)),
                            rm = s(t(4338)),
                            rk = s(t(6179)),
                            rE = s(t(3310)),
                            ry = s(t(1516)),
                            rw = s(t(2023)),
                            rb = s(t(2855)),
                            rR = s(t(8642)),
                            rO = s(t(5079)),
                            rj = s(t(7719)),
                            rH = s(t(139)),
                            rh = s(t(8959)),
                            rC = s(t(852)),
                            rP = s(t(4380)),
                            rL = s(t(4553)),
                            // for PulseSync: BEGIN import the settings gear SVG component
                            tSettingsGear = s(t(9901)),
                            // for PulseSync: END import the settings gear SVG component
                            rM = s(t(7873)),
                            rN = s(t(6898)),
                            rD = s(t(3278)),
                            rA = s(t(1468)),
                            rB = s(t(8279)),
                            rF = s(t(9074)),
                            rS = s(t(182)),
                            rT = s(t(8056)),
                            rV = s(t(8353)),
                            rU = s(t(3293)),
                            rI = s(t(2378)),
                            rz = s(t(9261)),
                            rQ = s(t(4527)),
                            rY = s(t(1786)),
                            rK = s(t(4419)),
                            rG = s(t(6970)),
                            rq = s(t(7397)),
                            rZ = s(t(2364)),
                            r$ = s(t(8202)),
                            rW = s(t(1552)),
                            rX = s(t(6070)),
                            rJ = s(t(2098)),
                            r1 = s(t(6707)),
                            r0 = s(t(2020)),
                            r8 = s(t(5879)),
                            r2 = s(t(2629)),
                            r7 = s(t(7863)),
                            r5 = s(t(206)),
                            r3 = s(t(4717)),
                            r4 = s(t(5561)),
                            r9 = s(t(2777)),
                            r6 = s(t(3003)),
                            te = s(t(4561)),
                            tr = s(t(4355)),
                            tt = s(t(9642)),
                            ts = s(t(2244)),
                            tn = s(t(2845)),
                            ta = s(t(9503)),
                            ti = s(t(7419)),
                            tl = s(t(2570)),
                            to = s(t(7145)),
                            tc = s(t(2060)),
                            tf = s(t(5407)),
                            tx = s(t(6187)),
                            tu = s(t(8831)),
                            td = s(t(3728)),
                            t_ = s(t(727)),
                            tp = s(t(7833)),
                            tg = s(t(5310)),
                            tv = s(t(3739)),
                            tm = s(t(1798)),
                            tk = s(t(3222)),
                            tE = s(t(6230)),
                            ty = s(t(9620)),
                            tw = s(t(9879)),
                            tb = s(t(4484)),
                            tR = s(t(2922)),
                            tO = s(t(2434)),
                            tj = s(t(9173)),
                            tH = s(t(9711)),
                            th = s(t(6374)),
                            tC = s(t(1116)),
                            tP = s(t(6150)),
                            tL = s(t(3848)),
                            tM = s(t(7656)),
                            tN = s(t(1605)),
                            tD = s(t(1423)),
                            tA = s(t(4526)),
                            tB = s(t(3908)),
                            tF = s(t(759)),
                            tS = s(t(3753)),
                            tT = s(t(2705)),
                            tV = s(t(8671)),
                            tU = s(t(6413)),
                            tI = s(t(8254)),
                            tz = s(t(8297)),
                            tQ = s(t(4348)),
                            tY = s(t(8836)),
                            tK = s(t(6823)),
                            tG = s(t(1235)),
                            tq = s(t(1540)),
                            tZ = s(t(7514)),
                            t$ = s(t(221)),
                            tW = s(t(9139)),
                            tX = s(t(9938)),
                            tJ = s(t(5543)),
                            t1 = s(t(272)),
                            t0 = s(t(5842)),
                            t8 = s(t(4400)),
                            t2 = s(t(9189)),
                            t7 = s(t(9051)),
                            t5 = s(t(2551)),
                            t3 = s(t(2913)),
                            t4 = s(t(8002)),
                            t9 = s(t(3057)),
                            t6 = s(t(4247)),
                            se = s(t(3715)),
                            sr = s(t(3286)),
                            st = s(t(3331)),
                            ss = s(t(7722)),
                            sn = s(t(362)),
                            sa = s(t(6407)),
                            si = s(t(740)),
                            sl = s(t(2747)),
                            so = s(t(3590)),
                            sc = s(t(5656)),
                            sf = s(t(9723)),
                            sx = s(t(7488)),
                            su = s(t(7288)),
                            sd = s(t(6623)),
                            s_ = s(t(5728)),
                            sp = s(t(9877)),
                            sg = s(t(839)),
                            sv = s(t(4298)),
                            sm = s(t(790)),
                            sk = s(t(9342)),
                            sE = s(t(4403)),
                            sy = s(t(4960)),
                            sw = s(t(1601)),
                            sb = s(t(8163));
                        ((r.iconsCollectionBySize = {
                            xxxs: [
                                'add',
                                'adult',
                                'arrowDown',
                                'arrowRight',
                                'check',
                                'close',
                                'complain',
                                'donation',
                                'exclamation',
                                'explicit',
                                'listen',
                                'moreOutlined',
                                'note',
                                'play',
                                'reset',
                                'ruble',
                                'users',
                            ],
                            xxs: [
                                'add',
                                'addToPlaylist',
                                'adult',
                                'album',
                                'arrowDown',
                                'arrowLeft',
                                'arrowRight',
                                'artist',
                                'bucket',
                                'chain',
                                'chartDown',
                                'chartNew',
                                'chartSame',
                                'chartUp',
                                'check',
                                'clip',
                                'close',
                                'code',
                                'complain',
                                'crown',
                                'dislike',
                                'disliked',
                                'download',
                                'downloaded',
                                'dragDots',
                                'edit',
                                'exclamation',
                                'explicit',
                                'eye_crossed',
                                'filter',
                                'gift',
                                'info',
                                'lightning',
                                'like',
                                'likeVariant',
                                'liked',
                                'likedVariant',
                                'link',
                                'link_rounded',
                                'lock',
                                'lyrics',
                                'macos',
                                'menuArrow',
                                'more',
                                'moreOutlined',
                                'next',
                                'note',
                                'pause',
                                'pencil',
                                'pin',
                                'pin_filled',
                                'play',
                                'playLast',
                                'playNext',
                                'playQueue',
                                'podcasts',
                                'previous',
                                'repeat',
                                'repeat_one',
                                'reset',
                                'rewindBackwards',
                                'rewindForward',
                                'ruble',
                                'settings',
                                'share',
                                'shuffle',
                                'syncLyrics',
                                'thumbDown',
                                'thumbUp',
                                'trailer',
                                'unpin',
                                'upload',
                                'vibe',
                            ],
                            xs: [
                                'adult',
                                'album',
                                'arrowDown',
                                'arrowLeft',
                                'arrowRight',
                                'cast',
                                'chain',
                                'check',
                                'close',
                                'close_filled',
                                'complain',
                                'dislike',
                                'disliked',
                                'exclamation',
                                'explicit',
                                'filter',
                                'fullscreen',
                                'infinity',
                                'like',
                                'liked',
                                'liteVersion',
                                'lock',
                                'more',
                                'navigationCollection',
                                'navigationCollection_selected',
                                'navigationConcerts',
                                'navigationConcerts_selected',
                                'navigationForYouAndTrends',
                                'navigationForYouAndTrends_selected',
                                'navigationKids',
                                'navigationKids_selected',
                                'navigationMuzmarket',
                                'navigationMyVibe',
                                'navigationMyVibeNDA',
                                'navigationNonMusic',
                                'navigationNonMusic_selected',
                                'navigationPlus',
                                'navigationSearch',
                                'next',
                                'note',
                                'pause',
                                'pause_filled',
                                'picture',
                                'pin',
                                'pin_filled',
                                'play',
                                'playQueue',
                                'play_filled',
                                'playlist',
                                'previous',
                                'repeat',
                                'repeat_one',
                                'rewindBackwards',
                                'rewindForward',
                                'search',
                                'settings',
                                // for PulseSync: BEGIN register the settings gear icon name
                                'settingsGear',
                                // for PulseSync: END register the settings gear icon name
                                'shuffle',
                                'site',
                                'speed_1_25x_centered',
                                'speed_1_5x_centered',
                                'speed_1_75x_centered',
                                'speed_1x_centered',
                                'speed_2x_centered',
                                'syncLyrics',
                                'thumbDown',
                                'thumbUp',
                                'trailer',
                                'unavailable',
                                'volume',
                                'volumeOff',
                                'windows',
                            ],
                            s: [
                                'adult',
                                'album',
                                'complain',
                                'dislike',
                                'disliked',
                                'exclamation',
                                'explicit',
                                'likedVariant',
                                'note',
                                'pauseVibe',
                                'picture',
                                'playVibe',
                                'playlist',
                            ],
                            m: [
                                'collections',
                                'collections_selected',
                                'complain',
                                'history',
                                'home',
                                'home_selected',
                                'kids',
                                'kids_selected',
                                'like',
                                'liked',
                                'lock',
                                'more',
                                'navigationMuzmarket',
                                'non_music',
                                'non_music_selected',
                                'note',
                                'pause',
                                'pause_filled',
                                'play',
                                'playQueue',
                                'play_filled',
                                'plusOutlined',
                                'ruble',
                                'search',
                                'search_selected',
                                'share',
                                'speed_1_25x_centered',
                                'speed_1_5x_centered',
                                'speed_1_75x_centered',
                                'speed_1x_centered',
                                'speed_2x_centered',
                                'syncLyrics',
                                'ticket',
                                'ticket_selected',
                            ],
                            l: [
                                'add',
                                'album',
                                'complain',
                                'download',
                                'like',
                                'note',
                                'pause_filled',
                                'play_filled',
                                'search',
                                'speed_1_25x',
                                'speed_1_5x',
                                'speed_1_75x',
                                'speed_1x',
                                'speed_2x',
                            ],
                            xl: ['album', 'clip', 'complain', 'note', 'pause_filled', 'picture', 'play_filled', 'playlist', 'unavailable'],
                            xxl: ['attention', 'check', 'complain', 'next', 'offline', 'pause_filled', 'play_filled', 'previous', 'search'],
                            xxxl: ['attention', 'complain'],
                            '': [
                                'bandlink',
                                'googlePlay',
                                'huaweiAppGallery',
                                'kinopoiskEn',
                                'kinopoiskRu',
                                'macos',
                                'musicLogo',
                                'musicLogoCenterEn',
                                'musicLogoCenterRu',
                                'musicLogoLeftEn',
                                'musicLogoLeftRu',
                                'pause',
                                'play',
                                'plus',
                                'plusBadge',
                                'plusColor',
                                'plusOutlined',
                                'windows',
                                'yandexBooksEn',
                                'yandexBooksRu',
                                'yandexPayEn',
                                'yandexPayRu',
                                'yandexPlusEn',
                                'yandexPlusRu',
                            ],
                        }),
                            (r.iconsCollection = {
                                add_xxxs: n.default,
                                adult_xxxs: a.default,
                                arrowDown_xxxs: i.default,
                                arrowRight_xxxs: l.default,
                                check_xxxs: o.default,
                                close_xxxs: c.default,
                                complain_xxxs: f.default,
                                donation_xxxs: x.default,
                                exclamation_xxxs: u.default,
                                explicit_xxxs: d.default,
                                listen_xxxs: _.default,
                                moreOutlined_xxxs: p.default,
                                note_xxxs: g.default,
                                play_xxxs: v.default,
                                reset_xxxs: m.default,
                                ruble_xxxs: k.default,
                                users_xxxs: E.default,
                                add_xxs: y.default,
                                addToPlaylist_xxs: w.default,
                                adult_xxs: b.default,
                                album_xxs: R.default,
                                arrowDown_xxs: O.default,
                                arrowLeft_xxs: j.default,
                                arrowRight_xxs: H.default,
                                artist_xxs: h.default,
                                bucket_xxs: C.default,
                                chain_xxs: P.default,
                                chartDown_xxs: L.default,
                                chartNew_xxs: M.default,
                                chartSame_xxs: N.default,
                                chartUp_xxs: D.default,
                                check_xxs: A.default,
                                clip_xxs: B.default,
                                close_xxs: F.default,
                                code_xxs: S.default,
                                complain_xxs: T.default,
                                crown_xxs: V.default,
                                dislike_xxs: U.default,
                                disliked_xxs: I.default,
                                download_xxs: z.default,
                                downloaded_xxs: Q.default,
                                dragDots_xxs: Y.default,
                                edit_xxs: K.default,
                                exclamation_xxs: G.default,
                                explicit_xxs: q.default,
                                eye_crossed_xxs: Z.default,
                                filter_xxs: $.default,
                                gift_xxs: W.default,
                                info_xxs: X.default,
                                lightning_xxs: J.default,
                                like_xxs: ee.default,
                                likeVariant_xxs: er.default,
                                liked_xxs: et.default,
                                likedVariant_xxs: es.default,
                                link_xxs: en.default,
                                link_rounded_xxs: ea.default,
                                lock_xxs: ei.default,
                                lyrics_xxs: el.default,
                                macos_xxs: eo.default,
                                menuArrow_xxs: ec.default,
                                more_xxs: ef.default,
                                moreOutlined_xxs: ex.default,
                                next_xxs: eu.default,
                                note_xxs: ed.default,
                                pause_xxs: e_.default,
                                pencil_xxs: ep.default,
                                pin_xxs: eg.default,
                                pin_filled_xxs: ev.default,
                                play_xxs: em.default,
                                playLast_xxs: ek.default,
                                playNext_xxs: eE.default,
                                playQueue_xxs: ey.default,
                                podcasts_xxs: ew.default,
                                previous_xxs: eb.default,
                                repeat_xxs: eR.default,
                                repeat_one_xxs: eO.default,
                                reset_xxs: ej.default,
                                rewindBackwards_xxs: eH.default,
                                rewindForward_xxs: eh.default,
                                ruble_xxs: eC.default,
                                settings_xxs: eP.default,
                                share_xxs: eL.default,
                                shuffle_xxs: eM.default,
                                syncLyrics_xxs: eN.default,
                                thumbDown_xxs: eD.default,
                                thumbUp_xxs: eA.default,
                                trailer_xxs: eB.default,
                                unpin_xxs: eF.default,
                                upload_xxs: eS.default,
                                vibe_xxs: eT.default,
                                adult_xs: eV.default,
                                album_xs: eU.default,
                                arrowDown_xs: eI.default,
                                arrowLeft_xs: ez.default,
                                arrowRight_xs: eQ.default,
                                cast_xs: eY.default,
                                chain_xs: eK.default,
                                check_xs: eG.default,
                                close_xs: eq.default,
                                close_filled_xs: eZ.default,
                                complain_xs: e$.default,
                                dislike_xs: eW.default,
                                disliked_xs: eX.default,
                                exclamation_xs: eJ.default,
                                explicit_xs: e1.default,
                                filter_xs: e0.default,
                                fullscreen_xs: e8.default,
                                infinity_xs: e2.default,
                                like_xs: e7.default,
                                liked_xs: e5.default,
                                liteVersion_xs: e3.default,
                                lock_xs: e4.default,
                                more_xs: e9.default,
                                navigationCollection_xs: e6.default,
                                navigationCollection_selected_xs: re.default,
                                navigationConcerts_xs: rr.default,
                                navigationConcerts_selected_xs: rt.default,
                                navigationForYouAndTrends_xs: rs.default,
                                navigationForYouAndTrends_selected_xs: rn.default,
                                navigationKids_xs: ra.default,
                                navigationKids_selected_xs: ri.default,
                                navigationMuzmarket_xs: rl.default,
                                navigationMyVibe_xs: ro.default,
                                navigationMyVibeNDA_xs: rc.default,
                                navigationNonMusic_xs: rf.default,
                                navigationNonMusic_selected_xs: rx.default,
                                navigationPlus_xs: ru.default,
                                navigationSearch_xs: rd.default,
                                next_xs: r_.default,
                                note_xs: rp.default,
                                pause_xs: rg.default,
                                pause_filled_xs: rv.default,
                                picture_xs: rm.default,
                                pin_xs: rk.default,
                                pin_filled_xs: rE.default,
                                play_xs: ry.default,
                                playQueue_xs: rw.default,
                                play_filled_xs: rb.default,
                                playlist_xs: rR.default,
                                previous_xs: rO.default,
                                repeat_xs: rj.default,
                                repeat_one_xs: rH.default,
                                rewindBackwards_xs: rh.default,
                                rewindForward_xs: rC.default,
                                search_xs: rP.default,
                                settings_xs: rL.default,
                                // for PulseSync: BEGIN register the settings gear icon component
                                settingsGear_xs: tSettingsGear.default,
                                // for PulseSync: END register the settings gear icon component
                                shuffle_xs: rM.default,
                                site_xs: rN.default,
                                speed_1_25x_centered_xs: rD.default,
                                speed_1_5x_centered_xs: rA.default,
                                speed_1_75x_centered_xs: rB.default,
                                speed_1x_centered_xs: rF.default,
                                speed_2x_centered_xs: rS.default,
                                syncLyrics_xs: rT.default,
                                thumbDown_xs: rV.default,
                                thumbUp_xs: rU.default,
                                trailer_xs: rI.default,
                                unavailable_xs: rz.default,
                                volume_xs: rQ.default,
                                volumeOff_xs: rY.default,
                                windows_xs: rK.default,
                                adult_s: rG.default,
                                album_s: rq.default,
                                complain_s: rZ.default,
                                dislike_s: r$.default,
                                disliked_s: rW.default,
                                exclamation_s: rX.default,
                                explicit_s: rJ.default,
                                likedVariant_s: r1.default,
                                note_s: r0.default,
                                pauseVibe_s: r8.default,
                                picture_s: r2.default,
                                playVibe_s: r7.default,
                                playlist_s: r5.default,
                                collections_m: r3.default,
                                collections_selected_m: r4.default,
                                complain_m: r9.default,
                                history_m: r6.default,
                                home_m: te.default,
                                home_selected_m: tr.default,
                                kids_m: tt.default,
                                kids_selected_m: ts.default,
                                like_m: tn.default,
                                liked_m: ta.default,
                                lock_m: ti.default,
                                more_m: tl.default,
                                navigationMuzmarket_m: to.default,
                                non_music_m: tc.default,
                                non_music_selected_m: tf.default,
                                note_m: tx.default,
                                pause_m: tu.default,
                                pause_filled_m: td.default,
                                play_m: t_.default,
                                playQueue_m: tp.default,
                                play_filled_m: tg.default,
                                plusOutlined_m: tv.default,
                                ruble_m: tm.default,
                                search_m: tk.default,
                                search_selected_m: tE.default,
                                share_m: ty.default,
                                speed_1_25x_centered_m: tw.default,
                                speed_1_5x_centered_m: tb.default,
                                speed_1_75x_centered_m: tR.default,
                                speed_1x_centered_m: tO.default,
                                speed_2x_centered_m: tj.default,
                                syncLyrics_m: tH.default,
                                ticket_m: th.default,
                                ticket_selected_m: tC.default,
                                add_l: tP.default,
                                album_l: tL.default,
                                complain_l: tM.default,
                                download_l: tN.default,
                                like_l: tD.default,
                                note_l: tA.default,
                                pause_filled_l: tB.default,
                                play_filled_l: tF.default,
                                search_l: tS.default,
                                speed_1_25x_l: tT.default,
                                speed_1_5x_l: tV.default,
                                speed_1_75x_l: tU.default,
                                speed_1x_l: tI.default,
                                speed_2x_l: tz.default,
                                album_xl: tQ.default,
                                clip_xl: tY.default,
                                complain_xl: tK.default,
                                note_xl: tG.default,
                                pause_filled_xl: tq.default,
                                picture_xl: tZ.default,
                                play_filled_xl: t$.default,
                                playlist_xl: tW.default,
                                unavailable_xl: tX.default,
                                attention_xxl: tJ.default,
                                check_xxl: t1.default,
                                complain_xxl: t0.default,
                                next_xxl: t8.default,
                                offline_xxl: t2.default,
                                pause_filled_xxl: t7.default,
                                play_filled_xxl: t5.default,
                                previous_xxl: t3.default,
                                search_xxl: t4.default,
                                attention_xxxl: t9.default,
                                complain_xxxl: t6.default,
                                bandlink: se.default,
                                googlePlay: sr.default,
                                huaweiAppGallery: st.default,
                                kinopoiskEn: ss.default,
                                kinopoiskRu: sn.default,
                                macos: sa.default,
                                musicLogo: si.default,
                                musicLogoCenterEn: sl.default,
                                musicLogoCenterRu: so.default,
                                musicLogoLeftEn: sc.default,
                                musicLogoLeftRu: sf.default,
                                pause: sx.default,
                                play: su.default,
                                plus: sd.default,
                                plusBadge: s_.default,
                                plusColor: sp.default,
                                plusOutlined: sg.default,
                                windows: sv.default,
                                yandexBooksEn: sm.default,
                                yandexBooksRu: sk.default,
                                yandexPayEn: sE.default,
                                yandexPayRu: sy.default,
                                yandexPlusEn: sw.default,
                                yandexPlusRu: sb.default,
                            }));
                    },
                    810: (e) => {
                        e.exports = s || (s = t.t(n, 2));
                    },
                },
                i = {};
            function l(e) {
                var r = i[e];
                if (void 0 !== r) return r.exports;
                var t = (i[e] = { exports: {} });
                return (a[e].call(t.exports, t, t.exports, l), t.exports);
            }
            ((l.d = (e, r) => {
                for (var t in r) l.o(r, t) && !l.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
            }),
                (l.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.Icon = void 0));
                var e = l(1064);
                Object.defineProperty(o, 'Icon', {
                    enumerable: !0,
                    get: function () {
                        return e.Icon;
                    },
                });
            })();
            var c = o.Icon;
            o.__esModule;
            // for PulseSync WebHost: BEGIN resolve addon notification icons from the native icon collection
            function resolveIcon(name) {
                const collection = l(7638).iconsCollection;
                for (const size of ['xs', 'xxs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxs']) {
                    if (Object.hasOwn(collection, `${name}_${size}`))
                        return {
                            variant: name,
                            size,
                        };
                }
                if (!Object.hasOwn(collection, name)) return;
                const sized = /^(.*)_(xxxs|xxs|xs|s|m|l|xl|xxl|xxxl)$/.exec(name);
                return sized
                    ? {
                          variant: sized[1],
                          size: sized[2],
                      }
                    : {
                          variant: name,
                      };
            }
            // for PulseSync WebHost: END resolve addon notification icons from the native icon collection
        },
        93588: (e, r, t) => {
            t.d(r, { sK: () => E, NN: () => n, R8: () => a, $3: () => s, CP: () => x, tE: () => u, Ef: () => d, $5: () => p, IU: () => y, tk: () => g.t, u0: () => k });
            let s = !1,
                n = !0,
                a = !1;
            var i = t(58025),
                l = t(36432);
            class o extends l.t {
                constructor(e = 'Internal error', { code: r = 'E_CONFIG', ...t } = {}) {
                    (super(e, { code: r, ...t }), (0, i._)(this, 'name', 'ConfigException'), Object.setPrototypeOf(this, o.prototype));
                }
            }
            class c extends o {
                constructor(e) {
                    (super('The configuration file for environment "'.concat(e, '" does not exist.'), { code: 'E_CONFIG_FILE_NOT_FOUND' }),
                        (0, i._)(this, 'name', 'NotFoundConfigException'),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            let f = (function (e) {
                    let { manifest: r, getConfig: t } = e,
                        s = new Map();
                    return (e) => {
                        let n = s.get(e);
                        if (n) return n;
                        if (!Object.hasOwn(r, e)) return Promise.reject(new c(e));
                        let a = r[e]().then(t);
                        return (s.set(e, a), a);
                    };
                })({
                    manifest: {
                        development: () => Promise.all([t.e(546), t.e(260), t.e(2917), t.e(4903), t.e(1198), t.e(6214)]).then(t.bind(t, 66214)),
                        qa: () => Promise.all([t.e(546), t.e(260), t.e(2917), t.e(4903), t.e(1198), t.e(7216)]).then(t.bind(t, 7216)),
                        stress: () => Promise.all([t.e(546), t.e(260), t.e(2917), t.e(4903), t.e(1198), t.e(2967)]).then(t.bind(t, 5348)),
                        production: () => Promise.all([t.e(546), t.e(260), t.e(2917), t.e(4903), t.e(1198), t.e(4069)]).then(t.bind(t, 74069)),
                    },
                    getConfig: (e) => {
                        let { config: r } = e;
                        return r;
                    },
                }),
                x = (e, r) => ''.concat(e, '/').concat(r || '1.0.0'),
                u = (e, r) => (r ? e.afisha.clientId[r] : e.afisha.clientId.web);
            function d(e, r) {
                return r ? e.player.secretKey[r] : '';
            }
            var _ = t(49124);
            let p = () => {
                let e = 'window.location.pathname',
                    r = _.env.APP_VERSION || '',
                    t = 'production';
                return {
                    rumSettings: {
                        rumId: 'ru.music.frontend.desktop',
                        project: 'music.frontend.desktop',
                        service: 'frontend-desktop',
                        platform: 'desktop',
                        page: e,
                        heroElement: 'body',
                        version: r,
                        environment: t,
                    },
                    errorBooster: {
                        project: 'music.frontend.desktop',
                        platform: 'desktop',
                        page: e,
                        version: r,
                        environment: t,
                        unhandledRejection: !0,
                        uncaughtException: !0,
                        resourceFails: !0,
                    },
                };
            };
            var g = t(27912),
                v = t(90887),
                m = t(52830);
            let k = (e, r, t) => {
                let { allowCustomPrefixUrl: s, prefixUrl: n } = e.resources.musicExternalApi,
                    a = s && 'string' == typeof t && t.length > 0 ? t : n;
                return (0, v.r)(a, r, m.B);
            };
            var E = (function (e) {
                return ((e.WEB = 'YandexMusicWebNext'), (e.DESKTOP = 'YandexMusicDesktopApp'), e);
            })({});
            let y = async (e) => ({ env: e, publicConfig: await f(e) });
        },
    },
]);
