(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4927],
    {
        589: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => i });
            let i = 1e3;
        },
        892: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => i });
            let i = (e) => !!(e && 'object' == typeof e && 'source' in e);
        },
        1645: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => i });
            let i = (e) => {
                if (e) return { value: e.value, currency: e.currency };
            };
        },
        2855: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { y: () => i }),
                (function (e) {
                    ((e.LINEUP = 'LINEUP'), (e.LINEUP_WITH_FESTIVAL = 'LINEUP_WITH_FESTIVAL'), (e.LINEUP_WITH_FESTIVAL_IMAGE = 'LINEUP_WITH_FESTIVAL_IMAGE'));
                })(i || (i = {})));
        },
        4562: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return ((e.DISCOGRAPHY = 'discography'), (e.ALBUMS = 'albums'), (e.COMPILATIONS = 'compilations'), e);
            })({});
        },
        8254: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        10378: (e, t, a) => {
            'use strict';
            a.d(t, { IR: () => l, JQ: () => i, bL: () => s, ew: () => r });
            let i = 220,
                l = 88,
                r = 'px',
                s = '{lang}';
        },
        11871: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { L: () => i }),
                (function (e) {
                    ((e.PUBLIC = 'public'), (e.PRIVATE = 'private'));
                })(i || (i = {})));
        },
        12288: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { l: () => i }),
                (function (e) {
                    ((e.PLAYLIST_LIKED_TAB = 'liked_playlist_tab'), (e.PLAYLIST_CREATED_TAB = 'created_playlist_tab'));
                })(i || (i = {})));
        },
        12929: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => i, n: () => l });
            var i = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                l = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        14968: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => i });
            var i = (function (e) {
                return ((e.VIDEO = 'video'), (e.AUDIO = 'audio'), e);
            })({});
        },
        16714: (e, t, a) => {
            'use strict';
            a.d(t, { MainSuspenseLoader: () => n });
            var i = a(25839),
                l = a(66738),
                r = a(8254),
                s = a.n(r);
            let n = (e) => {
                let { style: t } = e,
                    a = {
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
                return (0, i.jsx)('div', {
                    style: a,
                    children: (0, i.jsx)(l.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: s().icon,
                    }),
                });
            };
        },
        16912: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { y: () => i }),
                (function (e) {
                    ((e.DEFAULT = 'DEFAULT'), (e.CONTROL = 'CONTROL'), (e.CONTROL_ACCENT = 'CONTROL_ACCENT'), (e.MULTIVIBE = 'MULTIVIBE'), (e.PROMO = 'PROMO'));
                })(i || (i = {})));
        },
        18660: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { J: () => i }),
                (function (e) {
                    ((e.OWN = 'OWN'), (e.UGC = 'UGC'), (e.OWN_REPLACED_TO_UGC = 'OWN_REPLACED_TO_UGC'), (e.EXTERNAL = 'EXTERNAL'));
                })(i || (i = {})));
        },
        18760: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => i });
            var i = (function (e) {
                return ((e.BRANDED = 'branded'), (e.DEFAULT = 'default'), (e.DUCK = 'duck'), (e.CAR = 'car'), e);
            })({});
        },
        22965: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { r: () => i }),
                (function (e) {
                    ((e.TRACK = 'best_result_track'),
                        (e.ARTIST = 'best_result_artist'),
                        (e.CONCERT = 'best_result_concert'),
                        (e.RECENT_RELEASE = 'best_result_recent_release'),
                        (e.ALBUM = 'best_result_album'),
                        (e.WAVE = 'best_result_wave'),
                        (e.ARTISTS_RELATED = 'best_result_artists_related'),
                        (e.OVERVIEW = 'best_result_overview'),
                        (e.PODCAST = 'best_result_podcast'),
                        (e.PODCAST_EPISODE = 'best_result_podcast_episode'),
                        (e.NON_MUSIC = 'best_result_non_music'),
                        (e.CLIP = 'best_result_clip'),
                        (e.UPCOMING = 'best_result_upcoming'),
                        (e.PLAYLIST = 'best_result_playlist'),
                        (e.BOOK_CHAPTER = 'best_result_book_chapter'));
                })(i || (i = {})));
        },
        23218: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => d });
            var i = a(28410),
                l = a(31488),
                r = a(36159),
                s = a(82745),
                n = a(95897),
                o = a(57483);
            function d(e, t) {
                let { useAppendMode: a = !1 } = null != t ? t : {};
                return i.gK
                    .compose(
                        i.gK.model('PageLoader', {
                            items: i.gK.maybeNull(i.gK.array(i.gK.maybeNull(e))),
                            requestsCount: i.gK.optional(i.gK.number, 0),
                            initialRequestLoadingState: i.gK.optional(i.gK.enumeration(Object.values(r.G)), r.G.IDLE),
                            lastRejectedPagesList: i.gK.optional(i.gK.array(i.gK.number), []),
                            pager: i.gK.maybeNull(o.j),
                            pageStates: i.gK.maybeNull(i.gK.array(i.gK.enumeration(Object.values(r.G)))),
                        }),
                        n.p,
                    )
                    .views((e) => {
                        let t = {
                            isPageNeedToLoad: (t) => {
                                var a;
                                return null == (a = e.pageStates) || !a[t] || e.pageStates[t] === r.G.IDLE;
                            },
                            get isSomePageResolved() {
                                var i;
                                return !!((null == (i = e.pageStates) ? void 0 : i.length) && e.pageStates.some((e) => e === r.G.RESOLVE));
                            },
                            get isEmpty() {
                                var l;
                                return t.isSomePageResolved && !(null == (l = e.items) ? void 0 : l.length);
                            },
                            get isNeedToMakeInitialRequest() {
                                return e.initialRequestLoadingState === r.G.IDLE;
                            },
                            get isInitialRequestRejected() {
                                return e.initialRequestLoadingState === r.G.REJECT;
                            },
                            get hasMorePages() {
                                var s;
                                return !!a && !(null == (s = e.pager) ? void 0 : s.lastPage);
                            },
                            get rejectedPagesCount() {
                                var n;
                                if (t.isInitialRequestRejected || !(null == (n = e.pageStates) ? void 0 : n.length)) return 0;
                                return e.pageStates.filter((e) => e === r.G.REJECT).length;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setPageState: (i, l) => {
                                let s;
                                if (([r.G.IDLE, r.G.PENDING].includes(e.initialRequestLoadingState) && (e.initialRequestLoadingState = l), a)) s = i + 1;
                                else {
                                    var n, o, d, g;
                                    s = Math.ceil(
                                        (null != (d = null == (n = e.pager) ? void 0 : n.total) ? d : 0) /
                                            (null != (g = null == (o = e.pager) ? void 0 : o.perPage) ? g : 1),
                                    );
                                }
                                let u = Math.max(i + 1, s);
                                (t.ensurePageStatesInitialized(u), e.pageStates && (e.pageStates[i] = l), l === r.G.REJECT && t.addLastRejectedPageToList(i));
                            },
                            setItems: (n, o) => {
                                var d;
                                let { page: g, pager: u, responseStatus: c } = o;
                                if (((e.requestsCount = (null != (d = e.requestsCount) ? d : 0) + 1), c === l.F.ERROR || !n || !u))
                                    return void t.setPageState(g, r.G.REJECT);
                                (e.pager
                                    ? a && ((e.pager.lastPage = u.lastPage), (e.pager.perPage = u.perPage))
                                    : (e.pager = { page: u.page, perPage: u.perPage, total: u.total, lastPage: u.lastPage }),
                                    t.setPageState(g, r.G.RESOLVE),
                                    (e.pager.page = g),
                                    a
                                        ? (e.items || (e.items = (0, i.wg)([])), e.items && e.items.push(...n))
                                        : (e.items || (e.items = (0, i.wg)(Array.from({ length: e.pager.total }, () => null))),
                                          e.items && (0, s.I)({ items: e.items, mappedRawItems: n, page: g, pageSize: e.pager.perPage })));
                            },
                            resetRejectedPagesState() {
                                var t, a, i;
                                for (let l = 0; l < (null != (a = null == (t = e.pageStates) ? void 0 : t.length) ? a : 0); l++)
                                    (null == (i = e.pageStates) ? void 0 : i[l]) === r.G.REJECT && (e.pageStates[l] = r.G.IDLE);
                            },
                            addLastRejectedPageToList(t) {
                                var a, i, l;
                                for (e.lastRejectedPagesList.push(t); (null != (i = null == (a = e.lastRejectedPagesList) ? void 0 : a.length) ? i : 0) > 5;)
                                    null == (l = e.lastRejectedPagesList) || l.shift();
                            },
                            ensurePageStatesInitialized(t) {
                                if (t <= 0) return;
                                if (!e.pageStates) {
                                    let a = Array.from({ length: t }, () => r.G.IDLE);
                                    e.pageStates = (0, i.wg)(a);
                                    return;
                                }
                                let a = e.pageStates.length;
                                if (t > a) {
                                    let i = Array.from({ length: t - a }, () => r.G.IDLE);
                                    e.pageStates.push(...i);
                                }
                            },
                            reset() {
                                ((e.initialRequestLoadingState = r.G.IDLE),
                                    (e.requestsCount = 0),
                                    (e.lastRejectedPagesList = (0, i.wg)([])),
                                    e.destroyItems([e.items, e.pager, e.pageStates]));
                            },
                        };
                        return t;
                    });
            }
        },
        23302: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { R: () => i }),
                (function (e) {
                    ((e.RADIAL = 'RADIAL'), (e.STACK = 'STACK'));
                })(i || (i = {})));
        },
        24169: (e, t, a) => {
            'use strict';
            a.d(t, { a: () => i });
            var i = (function (e) {
                return ((e[(e.CREATED = 0)] = 'CREATED'), (e[(e.LIKED = 1)] = 'LIKED'), e);
            })({});
        },
        24591: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            let i = (e) => String([...e].sort());
        },
        27304: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => l });
            var i = a(77895);
            let l = (e, t) => {
                let { isMobile: a, isOfflineModeEnabled: l } = t,
                    { isNonUserGenerated: r } = (0, i.I)(e.trackSource);
                return e.isAvailable && r && !a && !l;
            };
        },
        29504: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => i });
            var i = (function (e) {
                return ((e.ALL = 'all'), e);
            })({});
        },
        29671: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { z: () => i }),
                (function (e) {
                    ((e.NONE = 'none'), (e.DEFAULT = 'default'), (e.CUSTOM = 'custom'));
                })(i || (i = {})));
        },
        29944: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => r });
            var i = a(28410),
                l = a(33957);
            let r = (e) =>
                (0, i.wg)({
                    ...(0, l.j)(e),
                    owner: e.owner ? ((e) => ({ uid: e.uid, login: e.login, name: e.name, sex: e.sex, verified: e.verified }))(e.owner) : void 0,
                    description: e.description,
                    tags: e.tags,
                    modified: e.modified,
                    madeForUser: e.madeForUser
                        ? ((e) =>
                              (0, i.wg)({
                                  caseForms: e.caseForms
                                      ? ((e) =>
                                            (0, i.wg)({
                                                nominative: e.nominative,
                                                genitive: e.genitive,
                                                dative: e.dative,
                                                accusative: e.accusative,
                                                instrumental: e.instrumental,
                                                prepositional: e.prepositional,
                                            }))(e.caseForms)
                                      : null,
                              }))(e.madeForUser)
                        : null,
                });
        },
        30194: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => i });
            var i = (function (e) {
                return ((e.INFO = 'INFO'), (e.SUCCESS = 'SUCCESS'), e);
            })({});
        },
        31488: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => i });
            var i = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), e);
            })({});
        },
        31860: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { f: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        31886: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            var i = (function (e) {
                return (
                    (e.SUBSCRIPTION_IS_NOT_AVAILABLE = 'SUBSCRIPTION_IS_NOT_AVAILABLE'), (e.INVITATION_IS_INVALID = 'INVITATION_IS_INVALID'), (e.UNKNOWN = 'UNKNOWN'), e
                );
            })({});
        },
        32110: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => l });
            var i = a(16886);
            let l = (e) => ({ type: i.z4.Unloaded, meta: { id: e.entityId } });
        },
        33458: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => r });
            var i = a(56829),
                l = a(86584);
            let r = (e) => {
                let { labels: t, type: a } = e;
                return {
                    items: null == t ? void 0 : t.map((e) => ({ ...e, link: (0, l.r)(e.id) })),
                    count: null == t ? void 0 : t.length,
                    hasLabels: !!(null == t ? void 0 : t.length),
                    isPublisher: a === i._.PODCAST,
                    names: null == t ? void 0 : t.map((e) => e.name).join(', '),
                };
            };
        },
        33957: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => s });
            var i = a(28410),
                l = a(23951),
                r = a(10024);
            let s = (e) => {
                var t, a, s, n, o;
                e = e || {};
                let d = (0, r.m)(e.trailer);
                return (0, i.wg)({
                    isAvailable: null == (n = e.available) || n,
                    uid: e.uid,
                    uuid: null != (o = e.playlistUuid) ? o : '',
                    kind: e.kind,
                    title: e.title,
                    coverUri: (null == e || null == (t = e.cover) ? void 0 : t.uri) || (null == e || null == (s = e.cover) || null == (a = s.itemsUri) ? void 0 : a[0]),
                    tracksCount: e.trackCount,
                    likesCount: e.likesCount,
                    averageColor: (0, l.Q)(null == e ? void 0 : e.derivedColors),
                    revision: e.revision,
                    generatedPlaylistType: e.generatedPlaylistType,
                    personalColor: e.personalColor,
                    visibility: e.visibility,
                    trailer: d,
                });
            };
        },
        33986: (e, t, a) => {
            'use strict';
            a.d(t, { StoreProvider: () => cc });
            var i,
                l,
                r,
                s,
                n,
                o,
                d,
                g,
                u,
                c,
                m,
                p,
                y,
                E,
                S,
                b,
                v = a(25839),
                K = a(88204),
                I = a(84059),
                L = a(89288),
                T = a(94421),
                h = a(99989),
                N = a(27954),
                A = a(83382),
                C = a(28410),
                f = a(93588),
                R = a(51751),
                k = a(44806),
                D = a(95897);
            let _ = C.gK.model('Cpa', { clid: C.gK.string, artistId: C.gK.number }),
                P = C.gK
                    .compose(C.gK.model('AlbumCpa', { albumId: C.gK.maybeNull(C.gK.number), cpa: C.gK.maybeNull(_) }), D.p)
                    .views((e) => ({
                        isPlusCPAEnabled(t) {
                            let { pageAlbumId: a, albumId: i, isNonMusic: l } = t,
                                {
                                    experiments: r,
                                    user: { isAuthorized: s },
                                } = (0, R.M)(e);
                            return !1;
                        },
                        isPlusCPAPlayerBarEnabled(t, a) {
                            let {
                                    experiments: i,
                                    user: { hasPlus: l },
                                } = (0, R.M)(e),
                                r = i.checkExperiment(k.z.WebNextPlusCPA, 'on');
                            return ((e) => {
                                let {
                                    isCpaFeatureEnabled: t,
                                    isDesktop: a,
                                    hasPlus: i,
                                    albumId: l,
                                    isNonMusic: r,
                                    cpaAlbumId: s,
                                    hasCpa: n,
                                    isPlusCPAExperimentEnabled: o,
                                } = e;
                                return !!t && !a && !i && !!l && !r && (!!o || (l === s && n));
                            })({
                                isCpaFeatureEnabled: !1,
                                isDesktop: f.NN,
                                hasPlus: l,
                                albumId: t,
                                isNonMusic: a,
                                cpaAlbumId: e.albumId,
                                hasCpa: !!e.cpa,
                                isPlusCPAExperimentEnabled: r,
                            });
                        },
                        isPlusCPABannerEnabled(t) {
                            var a;
                            let { pageAlbumId: i, albumId: l, isNonMusic: r } = t,
                                {
                                    experiments: s,
                                    settings: n,
                                    user: { hasPlus: o },
                                } = (0, R.M)(e);
                            return (null == (a = n.browserInfo) || a.isTouch, !1);
                        },
                        isHidePlusModalEnabled(t, a) {
                            var i;
                            let {
                                settings: l,
                                user: { hasPlus: r },
                            } = (0, R.M)(e);
                            return (null == (i = l.browserInfo) || i.isTouch, !1);
                        },
                    }))
                    .actions((e) => ({
                        getCpa: (0, C.L3)(function* (t) {
                            let { albumId: a, preloadedCpa: i } = t,
                                { experiments: l, user: r } = (0, R.M)(e);
                        }),
                        reset() {
                            ((e.albumId = null), e.destroyItems([e.cpa]));
                        },
                    }));
            var O = a(93690),
                w = a(59981);
            (((i || (i = {})).RECENT_ALBUMS = 'recent-albums'),
                (function (e) {
                    ((e[(e.DAY = 1)] = 'DAY'), (e[(e.WEEK = 7)] = 'WEEK'), (e[(e.MONTH = 30)] = 'MONTH'));
                })(l || (l = {})));
            var G = a(8187),
                M = a(36159);
            let U = (e, t, a) => {
                let i = e.get(t);
                if (i) return void i.push(a);
                e.set(t, [a]);
            };
            var B = a(66881),
                F = a(86358);
            let V = (e) => ({ type: F.r.TEXT, data: null != e ? e : null, loadingState: M.G.RESOLVE });
            var x = a(75501);
            let j = (e) => {
                    var t;
                    let { data: a, ...i } = e;
                    return { type: null != (t = null == a ? void 0 : a.type) ? t : x.S.TRACK, data: null != a ? a : null, ...i };
                },
                W = (e) => ''.concat(e, '-text'),
                X = (e) => String(e),
                $ = (e) => e.filter((e) => e.type !== F.r.TEXT);
            var J = a(16063);
            let Y = (e) => !!(e && 'positionInContext' in e);
            var H = a(88148),
                q = a(19835);
            let z = C.gK
                    .compose(
                        C.gK.model('VolumeItemTrack', {
                            type: C.gK.maybe(C.gK.enumeration(Object.values(x.S))),
                            id: C.gK.union(C.gK.string, C.gK.number),
                            data: C.gK.maybeNull(H.v),
                            position: C.gK.maybe(C.gK.number),
                            positionInContext: C.gK.number,
                            isBest: C.gK.maybe(C.gK.boolean),
                            hasEverFinished: C.gK.maybe(C.gK.boolean),
                        }),
                        q.X,
                    )
                    .actions((e) => ({
                        updateEverFinished: (t) => {
                            e.hasEverFinished = t;
                        },
                    }))
                    .named('VolumeItemTrack'),
                Q = C.gK.compose(C.gK.model('VolumeItemText', { type: C.gK.literal(F.r.TEXT), data: C.gK.maybeNull(C.gK.number) }), q.X),
                Z = C.gK.union(Q, z);
            var ee = a(98436),
                et = a(6585);
            let ea = (e, t, a, i) => ({ type: ee._.ALBUM_ITEM, data: (0, et.s)({ album: e, artists: t, trailer: a, releaseDate: i }) });
            var ei = a(19225);
            let el = (e, t) => ({ type: ee._.ARTIST_ITEM, data: (0, ei.a)({ artist: e, trailer: t }) });
            var er = a(9135);
            let es = (e) => {
                    let { playlist: t, likesCount: a, trailer: i, tracksCount: l } = e;
                    return { type: ee._.LIKED_PLAYLIST_ITEM, data: (0, er.b)({ playlist: t, likesCount: a, trailer: i, tracksCount: l }) };
                },
                en = (e, t) => ({ type: ee._.PLAYLIST_ITEM, data: (0, er.b)({ playlist: e, trailer: t }) });
            var eo = a(93610);
            let ed = (e) => (0, C.wg)({ type: ee._.WAVE_AGENT_ITEM, data: (0, eo.l)(e.data.wave, e.data.agent) }),
                eg = (e) => {
                    var t;
                    let a =
                        null == (t = (e || {}).items)
                            ? void 0
                            : t.map((e) => {
                                  switch (e.type) {
                                      case ee._.LIKED_PLAYLIST_ITEM:
                                          return es({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer });
                                      case ee._.ALBUM_ITEM:
                                          return ea(e.data.album, e.data.artists, e.data.trailer, e.data.releaseDate);
                                      case ee._.ARTIST_ITEM:
                                          return el(e.data.artist, e.data.trailer);
                                      case ee._.WAVE_AGENT_ITEM:
                                          return ed(e);
                                      case ee._.PLAYLIST_ITEM:
                                          return en(e.data.playlist, e.data.trailer);
                                  }
                              });
                    return (0, C.wg)({ items: a });
                };
            var eu = (function (e) {
                    return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), (e.OUTDATED = 'OUTDATED'), e);
                })({}),
                ec = a(35522),
                em = a(62560);
            let ep = (e) => {
                let { showPolicy: t, isNeededToLoad: a, isLoading: i, isLoaded: l, isRejected: r, isNotEmpty: s, isOutdated: n, isNeededToHide: o } = e;
                if (o) return !1;
                switch (t) {
                    case em.E.SHOW_AND_LOAD:
                        if (i || r || a) return !0;
                        return s;
                    case em.E.LOAD_AND_SHOW:
                        return (l && s) || !!n;
                    default:
                        return !0;
                }
            };
            var ey = a(55180);
            let eE = C.gK.model('LandingAlbumItem', { type: C.gK.literal(ee._.ALBUM_ITEM), data: ey.J });
            var eS = a(69088);
            let eb = C.gK.model('LandingArtistItem', { type: C.gK.literal(ee._.ARTIST_ITEM), data: eS.P });
            var ev = a(42546);
            let eK = C.gK.model('LandingLikedPlaylistItem', { type: C.gK.literal(ee._.LIKED_PLAYLIST_ITEM), data: ev.I }),
                eI = C.gK.model('LandingPlaylistItem', { type: C.gK.literal(ee._.PLAYLIST_ITEM), data: ev.I });
            var eL = a(71511);
            let eT = C.gK.model('LandingVibeAgentItem', { type: C.gK.union(C.gK.literal(ee._.WAVE_AGENT_ITEM), C.gK.literal(ee._.QUERY_TO_VIBE_ITEM)), data: eL.G }),
                eh = C.gK
                    .model('LandingBaseBlock', {
                        loadingState: C.gK.enumeration(Object.values(eu)),
                        id: C.gK.string,
                        isNotFound: C.gK.boolean,
                        hasSentAnalyticsOnLoaded: C.gK.boolean,
                        meta: C.gK.maybe(C.gK.frozen()),
                    })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.loadingState === eu.IDLE;
                        },
                        get isLoading() {
                            return e.loadingState === eu.PENDING;
                        },
                        get isLoaded() {
                            return e.loadingState === eu.RESOLVE;
                        },
                        get isRejected() {
                            return e.loadingState === eu.REJECT;
                        },
                        get isOutdated() {
                            return e.loadingState === eu.OUTDATED;
                        },
                        get isShimmerVisible() {
                            return this.isNeededToLoad || this.isLoading || this.isRejected;
                        },
                        get isShimmerActive() {
                            return this.isLoading;
                        },
                    }))
                    .actions((e) => ({
                        setHasSentAnalyticsOnLoaded(t) {
                            e.hasSentAnalyticsOnLoaded = t;
                        },
                        setOutdated() {
                            e.loadingState = eu.OUTDATED;
                        },
                        setIsNeededToLoad() {
                            e.loadingState = eu.IDLE;
                        },
                    })),
                eN = C.gK.model('LandingBlockFetchableMetaSource', { uri: C.gK.string, countWeb: C.gK.maybe(C.gK.number), count: C.gK.maybe(C.gK.number) }),
                eA = C.gK.model('LandingBlockFetchableMeta', {
                    title: C.gK.maybe(C.gK.string),
                    description: C.gK.maybe(C.gK.string),
                    viewAllActionLink: C.gK.maybeNull(C.gK.string),
                    source: C.gK.maybe(eN),
                    showPolicy: C.gK.maybe(C.gK.string),
                    coverStyle: C.gK.maybe(C.gK.string),
                }),
                eC = C.gK.union(eK, eE, eb, eT, eI),
                ef = C.gK.model('EntitiesCarouselData', { items: C.gK.array(eC) }),
                eR = eh
                    .props({
                        type: C.gK.union(
                            C.gK.literal(ec.t.NEW_PLAYLISTS),
                            C.gK.literal(ec.t.EDITORIAL_COMPILATION),
                            C.gK.literal(ec.t.RECOMMENDED_PLAYLISTS),
                            C.gK.literal(ec.t.META_TAG_POPULAR_PLAYLISTS),
                            C.gK.literal(ec.t.META_TAG_NEW_ALBUMS),
                            C.gK.literal(ec.t.META_TAG_PLAYLISTS),
                            C.gK.literal(ec.t.MICRO_GENRE_ALBUMS),
                            C.gK.literal(ec.t.META_TAG_ALBUMS),
                            C.gK.literal(ec.t.ARTIST_PLAYLISTS),
                            C.gK.literal(ec.t.ARTIST_ALBUMS),
                            C.gK.literal(ec.t.ARTIST_COMPILATIONS),
                            C.gK.literal(ec.t.ARTIST_STUDIO_ALBUMS),
                            C.gK.literal(ec.t.ARTIST_SIMILAR_ENTITIES),
                            C.gK.literal(ec.t.COLLECTION_SIMILAR_ENTITIES),
                        ),
                        data: C.gK.maybe(ef),
                        meta: eA,
                    })
                    .named('EntitiesCarousel')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    }));
            var ek = a(91201);
            let eD = (e) => {
                let { url: t, artist: a, goal: i } = e;
                return (0, C.wg)({ url: t, goal: i, artist: (0, ei.a)({ artist: a }) });
            };
            var e_ = a(96895),
                eP = a(86584),
                eO = a(33458),
                ew = a(683);
            let eG = (e) => (0, C.wg)({ id: e.id, type: e.type, title: e.title, albums: e.albums.map(ek.p) }),
                eM = C.gK.model('Donation', { url: C.gK.string, artist: eS.P, goal: C.gK.maybe(C.gK.string) }),
                eU = C.gK.compose(C.gK.model('AlbumDonations', { items: C.gK.maybeNull(C.gK.array(eM)) }), D.p, q.X).actions((e) => ({
                    reset() {
                        ((e.loadingState = M.G.IDLE), e.destroyItems([e.items]));
                    },
                })),
                eB = C.gK.model('LabelItem', { id: C.gK.number, name: C.gK.string }),
                eF = C.gK.compose(C.gK.model('RelatedAlbumsPage', { items: C.gK.array(ey.J) }), D.p, q.X).actions((e) => ({
                    reset() {
                        ((e.loadingState = M.G.IDLE), e.destroyItems([e.items]));
                    },
                })),
                eV = C.gK.model('RelatedContentItem', { id: C.gK.string, type: C.gK.string, title: C.gK.string, albums: C.gK.array(ey.J) }),
                ex = C.gK.compose(C.gK.model('RelatedContent', { items: C.gK.maybeNull(C.gK.array(eV)) }), D.p, q.X).actions((e) => ({
                    reset() {
                        ((e.loadingState = M.G.IDLE), e.destroyItems([e.items]));
                    },
                })),
                ej = C.gK
                    .compose(
                        C.gK.model('AlbumPage', {
                            id: C.gK.maybeNull(C.gK.number),
                            meta: C.gK.maybeNull(ey.J),
                            items: C.gK.array(Z),
                            errorStatusCode: C.gK.maybeNull(C.gK.number),
                            deprecationTargetAlbumId: C.gK.maybeNull(C.gK.number),
                            latestGenreAlbums: C.gK.maybe(eF),
                            otherArtistAlbums: C.gK.maybe(eF),
                            otherAlbumVersions: C.gK.maybe(C.gK.array(ey.J)),
                            labels: C.gK.maybeNull(C.gK.array(eB)),
                            description: C.gK.maybe(C.gK.string),
                            donations: C.gK.maybe(eU),
                            relatedContent: C.gK.maybe(ex),
                            allTracksUnfinished: C.gK.boolean,
                            similarEntities: eR,
                        }),
                        ew.E,
                        D.p,
                        q.X,
                    )
                    .volatile(() => ({ indexItems: new Map() }))
                    .views((e) => {
                        let t = {
                            get isOtherArtistAlbumsAvailable() {
                                var a, i, l, r, s;
                                return !!(
                                    !(null == (a = e.meta) ? void 0 : a.isNonMusic) &&
                                    (null == (l = e.meta) || null == (i = l.artists) ? void 0 : i.length) === 1 &&
                                    !(null == (s = e.meta) || null == (r = s.artists[0]) ? void 0 : r.various)
                                );
                            },
                            get isLatestGenreAlbumsAvailable() {
                                var n, o;
                                return !!(!(null == (n = e.meta) ? void 0 : n.isNonMusic) && (null == (o = e.meta) ? void 0 : o.genre));
                            },
                            get isNotFound() {
                                return e.isRejected && (e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST);
                            },
                            get isSimilarEntitiesEnabled() {
                                let { experiments: t } = (0, R.M)(e);
                                return t.checkExperiment(k.z.WebNextWaveAgentExperiment, 'on');
                            },
                            get isCacheNotFound() {
                                return e.isRejected && e.errorStatusCode === G.FX;
                            },
                            get hasDonations() {
                                var d;
                                return !!((null == (d = e.donations) ? void 0 : d.isResolved) && e.donations && e.donations.items && e.donations.items.length > 0);
                            },
                            get hasSimilarEntities() {
                                var g;
                                return !!(
                                    t.isSimilarEntitiesEnabled &&
                                    e.similarEntities.isLoaded &&
                                    (null == (g = e.similarEntities.data) ? void 0 : g.items) &&
                                    e.similarEntities.data.items.length > 0
                                );
                            },
                            get hasOtherAlbumVersions() {
                                return !!(e.isNeededToLoad || e.loadingState === M.G.PENDING || (e.otherAlbumVersions && e.otherAlbumVersions.length > 0));
                            },
                            get hasLatestGenreAlbums() {
                                var u, c;
                                let a = e.latestGenreAlbums && e.latestGenreAlbums.items && e.latestGenreAlbums.items.length > 0;
                                return !!(
                                    t.isLatestGenreAlbumsAvailable &&
                                    ((null == (u = e.latestGenreAlbums) ? void 0 : u.isNeededToLoad) || (null == (c = e.latestGenreAlbums) ? void 0 : c.isLoading) || a)
                                );
                            },
                            get hasOtherArtistAlbums() {
                                var m, p;
                                let a = e.otherArtistAlbums && e.otherArtistAlbums.items && e.otherArtistAlbums.items.length > 0;
                                return !!(
                                    t.isOtherArtistAlbumsAvailable &&
                                    ((null == (m = e.otherArtistAlbums) ? void 0 : m.isNeededToLoad) || (null == (p = e.otherArtistAlbums) ? void 0 : p.isLoading) || a)
                                );
                            },
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === M.G.PENDING;
                            },
                            get isLatestGenreAlbumsLoading() {
                                var y, E;
                                return !!((null == (y = e.latestGenreAlbums) ? void 0 : y.isNeededToLoad) || (null == (E = e.latestGenreAlbums) ? void 0 : E.isLoading));
                            },
                            get isOtherArtistAlbumsLoading() {
                                var S, b;
                                return !!((null == (S = e.otherArtistAlbums) ? void 0 : S.isNeededToLoad) || (null == (b = e.otherArtistAlbums) ? void 0 : b.isLoading));
                            },
                            get isRelatedContentLoading() {
                                var v, K;
                                return !!((null == (v = e.relatedContent) ? void 0 : v.isNeededToLoad) || (null == (K = e.relatedContent) ? void 0 : K.isLoading));
                            },
                            get contextMeta() {
                                var I, L, T, h, N, A, C, f, D;
                                return {
                                    id: e.meta.id,
                                    title: null == (I = e.meta) ? void 0 : I.title,
                                    coverUri: null == (L = e.meta) ? void 0 : L.coverUri,
                                    type: null == (T = e.meta) ? void 0 : T.type,
                                    year: null == (h = e.meta) ? void 0 : h.year,
                                    version: null == (N = e.meta) ? void 0 : N.version,
                                    genre: null == (A = e.meta) ? void 0 : A.genre,
                                    likesCount: null == (C = e.meta) ? void 0 : C.likesCount,
                                    averageColor: null == (f = e.meta) ? void 0 : f.averageColor,
                                    available: null == (D = e.meta) ? void 0 : D.isAvailable,
                                };
                            },
                            get tracks() {
                                return $(e.items);
                            },
                            get lastEpisodes() {
                                return $(e.items).slice(0, B.Rk);
                            },
                            get lastEpisodesTrackIds() {
                                return t.lastEpisodes.map((e) => e.id);
                            },
                            get hasLabel() {
                                var _;
                                let { hasLabels: t } = (0, eO.p)({ labels: e.labels, type: null == (_ = e.meta) ? void 0 : _.type });
                                return t;
                            },
                            labelUrl(e) {
                                let { href: t } = (0, eP.r)(e);
                                return t;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = () => {
                                !e.indexItems.size &&
                                    e.items.length &&
                                    (e.indexItems = ((e) => {
                                        let t = new Map();
                                        for (let a = 0; a < e.length; a++) {
                                            let i = e[a];
                                            if (i) {
                                                if (Y(i)) {
                                                    U(t, X(i.id), a);
                                                    continue;
                                                }
                                                if (i.type === F.r.TEXT)
                                                    for (let i = a + 1; i < e.length; i++) {
                                                        let l = e[i];
                                                        if (l) {
                                                            if (Y(l)) {
                                                                U(t, W(l.id), a);
                                                                break;
                                                            }
                                                            if (l.type === F.r.TEXT) break;
                                                        }
                                                    }
                                            }
                                        }
                                        return t;
                                    })(e.items));
                            },
                            a = {
                                makeFlatVolumeItems: (t) => {
                                    let a = ((e) => {
                                        let { volumes: t } = e,
                                            a = t.length,
                                            i = [],
                                            l = new Map(),
                                            r = [],
                                            s = [],
                                            n = 0;
                                        for (let e of t)
                                            for (let t of (a > B.VN && e[0] && (i.push(V()), l.set(W(e[0].id), [i.length - 1])), e))
                                                (s.push(t.id),
                                                    i.push(j({ id: t.id, loadingState: M.G.IDLE, positionInContext: n })),
                                                    i.length <= B.vY && r.push(String(t.id)),
                                                    U(l, X(t.id), i.length - 1),
                                                    n++);
                                        return { items: i, indexItems: l, initialTrackIds: r, trackIds: s };
                                    })({ volumes: t.volumes });
                                    return ((e.items = (0, C.wg)(a.items)), (e.indexItems = a.indexItems), a);
                                },
                                updateVolumeItemsState: (a, i) => {
                                    (t(),
                                        ((e) => {
                                            let { items: t, indexItems: a, trackIds: i, loadingState: l } = e;
                                            for (let e of i) {
                                                let i = a.get(String(e));
                                                if (i)
                                                    for (let a of i) {
                                                        let i = t[a];
                                                        Y(i) &&
                                                            ((i.id = e),
                                                            (i.type = x.S.TRACK),
                                                            (i.data = null),
                                                            (i.position = void 0),
                                                            (i.isBest = void 0),
                                                            (i.loadingState = l));
                                                    }
                                            }
                                        })({ items: e.items, indexItems: e.indexItems, trackIds: a, loadingState: i }));
                                },
                                insertDataToVolumeItems: (a) => {
                                    var i;
                                    return (
                                        t(),
                                        ((e) => {
                                            let { items: t, indexItems: a, data: i, bestAlbumTracks: l } = e,
                                                r = t[0],
                                                s = Y(r) ? r.id : null,
                                                n = l ? new Set(l.map(Number)) : void 0,
                                                o = [];
                                            for (let e = 0; e < i.length; e++) {
                                                var d, g, u, c, m, p, y, E;
                                                let l = i[e];
                                                if (!l) continue;
                                                let r = a.get(X(l.id)),
                                                    S = !1;
                                                if (r)
                                                    for (let a of r) {
                                                        let i = t[a],
                                                            r = t[a - 1];
                                                        if (!Y(i)) continue;
                                                        let m =
                                                                s === i.id
                                                                    ? 1
                                                                    : null == (u = l.albums) || null == (g = u[0]) || null == (d = g.trackPosition)
                                                                      ? void 0
                                                                      : d.index,
                                                            p = null == i ? void 0 : i.positionInContext,
                                                            y = Y(r) && (null == r ? void 0 : r.position) ? r.position + 1 : m,
                                                            E = (0, J.K)(l, { hasEverFinished: null == i ? void 0 : i.hasEverFinished });
                                                        if (E.isRemoved) {
                                                            ((i.id = l.id),
                                                                (i.type = x.S.TRACK),
                                                                (i.data = null),
                                                                (i.isBest = void 0),
                                                                (i.hasEverFinished = void 0),
                                                                (i.loadingState = M.G.REJECT),
                                                                (i.positionInContext = p),
                                                                (i.position = Y(r) ? r.position : e));
                                                            continue;
                                                        }
                                                        ((i.id = l.id),
                                                            (i.type = null != (c = E.type) ? c : x.S.TRACK),
                                                            (i.data = E),
                                                            (i.position = (null == r ? void 0 : r.type) === F.r.TEXT ? 1 : y),
                                                            (i.positionInContext = p),
                                                            (i.isBest = null == n ? void 0 : n.has(Number(l.id))),
                                                            (i.loadingState = M.G.RESOLVE),
                                                            S || (o.push(a), (S = !0)));
                                                    }
                                                let b = a.get(W(l.id));
                                                if (b)
                                                    for (let e of b) {
                                                        let a = t[e];
                                                        (null == a ? void 0 : a.type) === F.r.TEXT &&
                                                            (a.data =
                                                                null !=
                                                                (E = null == (y = l.albums) || null == (p = y[0]) || null == (m = p.trackPosition) ? void 0 : m.volume)
                                                                    ? E
                                                                    : null);
                                                    }
                                            }
                                            return o;
                                        })({ items: e.items, indexItems: e.indexItems, data: a, bestAlbumTracks: null == (i = e.meta) ? void 0 : i.bestAlbumTracks })
                                    );
                                },
                                setAlbumUnfinished: () => {
                                    var t;
                                    (a.markUnfinished({ albumId: e.id || 0 }), null == (t = e.meta) || t.updateFinished(!1));
                                },
                                setAllTracksUnfinished: (t) => {
                                    e.allTracksUnfinished = t;
                                },
                                checkAllAlbumTrackFinished: () => {
                                    var t, i;
                                    e.items
                                        .filter((e) => {
                                            let { type: t, data: a } = e;
                                            return a && t !== F.r.TEXT;
                                        })
                                        .every((e) => {
                                            var t;
                                            let { data: a } = e;
                                            return null == a || null == (t = a.streamProgress) ? void 0 : t.hasEverFinished;
                                        }) &&
                                        ((null == (t = e.meta) ? void 0 : t.listeningFinished) ||
                                            (a.markFinished({ albumId: Number(e.id) }), null == (i = e.meta) || i.updateFinished(!0)));
                                },
                                markTracksFinished: (t) => {
                                    let { withoutTracks: a = [] } = t;
                                    e.items.forEach((e) => {
                                        if (e.type === F.r.TEXT) return;
                                        let { data: t } = e;
                                        if (!(t && a.includes(t.id)))
                                            if (t) {
                                                var i;
                                                null == (i = t.streamProgress) || i.updateEverFinished(!0);
                                            } else e.updateEverFinished(!0);
                                    });
                                },
                                markFinished: (0, C.L3)(function* (t) {
                                    let { streamsResource: a, modelActionsLogger: i } = (0, C._$)(e);
                                    try {
                                        return yield a.markAlbumFinished(t);
                                    } catch (e) {
                                        return (i.error(e), w.T.ERROR);
                                    }
                                }),
                                markUnfinished: (0, C.L3)(function* (t) {
                                    let { streamsResource: a, modelActionsLogger: i } = (0, C._$)(e);
                                    try {
                                        return yield a.markAlbumUnfinished(t);
                                    } catch (e) {
                                        return (i.error(e), w.T.ERROR);
                                    }
                                }),
                                setListeningFinishedStatus: (0, C.L3)(function* () {
                                    var t;
                                    return (null == (t = e.meta) ? void 0 : t.listeningFinished)
                                        ? (a.setAllTracksUnfinished(!0), yield a.markUnfinished({ albumId: Number(e.id) }))
                                        : yield a.markFinished({ albumId: Number(e.id) });
                                }),
                                getLatestGenreAlbums: (0, C.L3)(function* (t) {
                                    let { topResource: a, modelActionsLogger: i } = (0, C._$)(e);
                                    if (e.latestGenreAlbums && !e.latestGenreAlbums.isLoading)
                                        try {
                                            e.latestGenreAlbums.loadingState = M.G.PENDING;
                                            let i = yield a.getTopByGenre(t);
                                            ((e.latestGenreAlbums.items = (0, C.wg)(i.albums.map(ek.p))), (e.latestGenreAlbums.loadingState = M.G.RESOLVE));
                                        } catch (t) {
                                            (i.error(t), (e.latestGenreAlbums.loadingState = M.G.REJECT));
                                        }
                                }),
                                getSimilarEntities: (0, C.L3)(function* (t) {
                                    let { albumResource: a, modelActionsLogger: i } = (0, C._$)(e);
                                    if (!e.similarEntities.isLoading)
                                        try {
                                            e.similarEntities.loadingState = eu.PENDING;
                                            let i = yield a.getSimilarEntities(t);
                                            ((e.similarEntities.data = eg(i)), (e.similarEntities.loadingState = eu.RESOLVE));
                                        } catch (t) {
                                            (i.error(t), (e.similarEntities.loadingState = eu.REJECT));
                                        }
                                }),
                                getOtherArtistAlbums: (0, C.L3)(function* (t, a) {
                                    let { artistsResource: i, modelActionsLogger: l } = (0, C._$)(e);
                                    if (e.otherArtistAlbums && !e.otherArtistAlbums.isLoading)
                                        try {
                                            if (!t.artistId) {
                                                e.otherArtistAlbums.loadingState = M.G.REJECT;
                                                return;
                                            }
                                            e.otherArtistAlbums.loadingState = M.G.PENDING;
                                            let l = yield i.getSafeDirectAlbums({ ...t, artistId: t.artistId });
                                            ((e.otherArtistAlbums.items = (0, C.wg)(l.albums.filter((e) => String(e.id) !== String(a)).map(ek.p))),
                                                (e.otherArtistAlbums.loadingState = M.G.RESOLVE));
                                        } catch (t) {
                                            (l.error(t), (e.otherArtistAlbums.loadingState = M.G.REJECT));
                                        }
                                }),
                                getTracks: (0, C.L3)(function* (t) {
                                    let { trackIds: i } = t,
                                        { tracksResource: l, modelActionsLogger: r } = (0, C._$)(e);
                                    try {
                                        var s, n;
                                        if (!(null == (s = e.meta) ? void 0 : s.id)) return;
                                        a.updateVolumeItemsState(i, M.G.PENDING);
                                        let t = yield ((e) => {
                                            let { albumId: t, trackIds: a, getTracksMeta: i } = e;
                                            return i({ trackIds: a.map((e) => ''.concat(e, ':').concat(t)), withProgress: !0 });
                                        })({ albumId: e.meta.id, trackIds: i, getTracksMeta: (e) => l.getTracksMeta(e) });
                                        for (let i of a.insertDataToVolumeItems(t)) {
                                            let t = e.items[i];
                                            Y(t) && (null == (n = t.data) ? void 0 : n.resolveAllDisclaimers) && t.data.resolveAllDisclaimers();
                                        }
                                    } catch (e) {
                                        (r.error(e), a.updateVolumeItemsState(i, M.G.REJECT));
                                    }
                                }),
                                getDonations: (0, C.L3)(function* (t) {
                                    let { albumId: a } = t,
                                        { experiments: i } = (0, R.M)(e),
                                        { donationResource: l, modelActionsLogger: r } = (0, C._$)(e);
                                    if (i.checkExperiment(k.z.WebNextAlbumDonationButton, 'on') && e.donations && !e.donations.isLoading)
                                        try {
                                            e.donations.loadingState = M.G.PENDING;
                                            let { donations: t } = yield l.getAlbumDonations({ albumId: a });
                                            (t &&
                                                (e.donations.items = (0, C.wg)(
                                                    t.map((e) => {
                                                        var t;
                                                        let { data: a } = e;
                                                        return eD({ url: a.tipUrl, goal: null == (t = a.goal) ? void 0 : t.title, artist: a.artist });
                                                    }),
                                                )),
                                                (e.donations.loadingState = M.G.RESOLVE));
                                        } catch (t) {
                                            (r.error(t), (e.donations.loadingState = M.G.REJECT));
                                        }
                                }),
                                getData: (0, C.L3)(function* (t) {
                                    let {
                                            albumId: r,
                                            resumeStream: s,
                                            preloadedAlbum: n,
                                            withLatestGenreAlbumsRequest: o = !0,
                                            withOtherArtistAlbumsRequest: d = !0,
                                            sonataState: g,
                                        } = t,
                                        { albumResource: u, modelActionsLogger: c } = (0, C._$)(e);
                                    if (((e.id = r), e.loadingState !== M.G.PENDING))
                                        try {
                                            var m, p, y, E, S, b;
                                            let t, c;
                                            e.loadingState = M.G.PENDING;
                                            let v = n;
                                            v || (v = yield u.getAlbumWithTracksIds({ albumId: r, resumeStream: s }));
                                            let K =
                                                ((S = v),
                                                'not-found' === S.error
                                                    ? { status: 'not-found' }
                                                    : (null == (b = S.deprecation) ? void 0 : b.targetAlbumId)
                                                      ? { status: 'deprecated', targetAlbumId: S.deprecation.targetAlbumId }
                                                      : { status: 'loaded' });
                                            if ('not-found' === K.status) {
                                                ((e.errorStatusCode = O.X1.NOT_FOUND),
                                                    (e.loadingState = M.G.REJECT),
                                                    e.otherArtistAlbums && (e.otherArtistAlbums.loadingState = M.G.REJECT),
                                                    e.latestGenreAlbums && (e.latestGenreAlbums.loadingState = M.G.REJECT));
                                                return;
                                            }
                                            if ('deprecated' === K.status) {
                                                ((e.deprecationTargetAlbumId = K.targetAlbumId), (e.loadingState = M.G.RESOLVE));
                                                return;
                                            }
                                            ((e.meta = (0, ek.p)(v)),
                                                (e.labels = (0, C.wg)(v.labels)),
                                                (e.contentWarning = (0, C.wg)(v.contentWarning)),
                                                (e.description = (0, C.wg)(v.description)),
                                                v.duplicates &&
                                                    v.duplicates.length > 0 &&
                                                    (e.otherAlbumVersions = (0, C.wg)(null == (y = v.duplicates) ? void 0 : y.map(ek.p))));
                                            let { initialTrackIds: I, trackIds: L } = a.makeFlatVolumeItems(v),
                                                T = L.map((e) => (0, e_.l)(e));
                                            g.setUnloadedEntitiesData(T);
                                            let h = null == (p = e.meta) || null == (m = p.resolveAllDisclaimers) ? void 0 : m.call(p),
                                                N = a.getTracks({ trackIds: I });
                                            (e.isLatestGenreAlbumsAvailable &&
                                                o &&
                                                (t = a.getLatestGenreAlbums({ category: i.RECENT_ALBUMS, period: l.WEEK, pageSize: 8, genre: v.genre })),
                                                e.isOtherArtistAlbumsAvailable &&
                                                    d &&
                                                    (c = a.getOtherArtistAlbums({ artistId: String(null == (E = v.artists[0]) ? void 0 : E.id), limit: 8 }, r)),
                                                yield Promise.allSettled([h, N, t, c]),
                                                e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                                        } catch (t) {
                                            (c.error(t),
                                                t instanceof O.GX && (e.errorStatusCode = t.statusCode),
                                                e.loadingState !== M.G.IDLE &&
                                                    ((e.loadingState = M.G.REJECT),
                                                    e.otherArtistAlbums && (e.otherArtistAlbums.loadingState = M.G.REJECT),
                                                    e.latestGenreAlbums && (e.latestGenreAlbums.loadingState = M.G.REJECT)));
                                        }
                                }),
                                loadLastEpisodes() {
                                    a.getTracks({ trackIds: e.lastEpisodesTrackIds });
                                },
                                getRelatedContent: (0, C.L3)(function* () {
                                    let { albumResource: t, modelActionsLogger: a } = (0, C._$)(e);
                                    if (e.relatedContent && !e.relatedContent.isLoading)
                                        try {
                                            var i, l;
                                            if (!(null == (i = e.meta) ? void 0 : i.id)) return;
                                            e.relatedContent.loadingState = M.G.PENDING;
                                            let a = yield t.getRelatedContent({ albumId: e.meta.id });
                                            ((e.relatedContent.items = (0, C.wg)(null == (l = a.blocks) ? void 0 : l.map(eG))),
                                                (e.relatedContent.loadingState = M.G.RESOLVE));
                                        } catch (t) {
                                            (a.error(t), (e.relatedContent.loadingState = M.G.REJECT));
                                        }
                                }),
                                reset(t) {
                                    var a, i, l, r;
                                    let { albumCPA: s } = (0, R.M)(e);
                                    (s.reset(),
                                        t.resetUnloadedEntitiesData(),
                                        (e.id = null),
                                        (e.errorStatusCode = null),
                                        (e.deprecationTargetAlbumId = null),
                                        e.indexItems.clear(),
                                        (e.loadingState = M.G.IDLE),
                                        (e.description = ''),
                                        (e.allTracksUnfinished = !1),
                                        null == (a = e.latestGenreAlbums) || a.reset(),
                                        null == (i = e.otherArtistAlbums) || i.reset(),
                                        null == (l = e.relatedContent) || l.reset(),
                                        null == (r = e.donations) || r.reset(),
                                        (e.similarEntities.data = void 0),
                                        (e.similarEntities.loadingState = eu.IDLE),
                                        e.destroyItems([e.meta, e.items, e.otherAlbumVersions, e.labels]));
                                },
                            };
                        return a;
                    }),
                eW = [ec.t.COLLECTION_FAVOURITE_PLAYLIST],
                eX = (e) => eW.includes(e);
            var e$ = a(39985);
            let eJ = [ec.t.COLLECTION_DOWNLOADED_TRACKS];
            var eY = a(35005),
                eH = a(24820);
            let eq = (e) =>
                    (0, C.wg)({
                        album: (0, et.s)({ album: e.album, artists: e.artists }),
                        artists: e.artists.map((e) => (0, ei.a)({ artist: e })),
                        cover: e.cover,
                        coverContentMode: e.coverContentMode,
                        clickUrl: e.reporting.clickUrl,
                        yclid: e.playbackParams.yclid,
                        utm: e.playbackParams.utm,
                    }),
                ez = (e) => ({ url: e.url, timeMs: e.timeMs }),
                eQ = (e) => {
                    if (e) return { adImpressions: ez(e.adImpressions), blockImpression: ez(e.blockImpression), blockRender: ez(e.blockRender) };
                },
                eZ = (e) => {
                    let t = eQ(e.reporting),
                        a = e.albumBanners.map((e) => ({ ...eq(e), adImpressions: e.adImpressions }));
                    return (0, C.wg)({ reporting: t, items: a });
                };
            var e0 = a(9106),
                e1 = a(83496);
            let e3 = (e) => {
                    var t, a;
                    let i =
                        null == (a = (e || {}).chart) || null == (t = a.tracks)
                            ? void 0
                            : t.map((e) => {
                                  let { track: t, chart: a } = e;
                                  return { type: ee._.TRACK_ITEM, data: (0, e1.b)(t, a) };
                              });
                    return (0, C.wg)({ items: i, playlist: (0, er.b)({ playlist: null == e ? void 0 : e.chart }) });
                },
                e2 = (e) => {
                    var t, a;
                    let { clip: i, artists: l } = e,
                        { available: r, disclaimers: s } = (0, e0.f)(i);
                    return (0, C.wg)({
                        clipId: i.id,
                        title: i.title,
                        thumbnail: null == (t = i.cover) ? void 0 : t.uri,
                        previewUrl: null == (a = i.cover) ? void 0 : a.videoUrl,
                        duration: i.duration,
                        artists: null == l ? void 0 : l.map((e) => (0, ei.a)({ artist: e })),
                        isAvailable: r,
                        disclaimers: s,
                    });
                },
                e8 = (e) => ({ type: e.type, data: e2({ clip: e.data.clip, artists: e.data.artists }) }),
                e5 = (e) => {
                    var t;
                    let a = null == (t = e.artists) ? void 0 : t.map((e) => (0, ei.a)({ artist: e }));
                    return (0, C.wg)({
                        ...((e) => {
                            let t = !1;
                            e.presaveDate ? (t = !0) : e.presaved && (t = e.presaved);
                            let { disclaimers: a } = (0, e0.f)(e);
                            return (0, C.wg)({ id: e.id, disclaimers: a, isPresave: t, title: e.title, type: e.type, coverUri: e.coverUri, releaseDate: e.releaseDate });
                        })(e),
                        artists: a,
                    });
                },
                e6 = (e) => {
                    switch (e.type) {
                        case ee._.ALBUM_ITEM:
                            return ea(e.data.album, e.data.artists, e.data.trailer);
                        case ee._.PRESAVED_ALBUM_ITEM:
                            return ((e) => {
                                var t;
                                let { album: a, artists: i, releaseDate: l, millisecondsUntilRelease: r, presaveDate: s } = e.data || {};
                                return {
                                    type: ee._.PRESAVED_ALBUM_ITEM,
                                    data: e5({
                                        ...a,
                                        artists: i,
                                        releaseDate: l,
                                        millisecondsUntilRelease: r,
                                        presaveDate: s,
                                        coverUri: null == (t = a.cover) ? void 0 : t.uri,
                                    }),
                                };
                            })(e);
                    }
                };
            var e9 = a(79497);
            let e4 = (e) =>
                    (0, C.wg)({
                        type: ee._.MENU_ITEM,
                        data: { title: e.data.title, viewAllActionLink: e.data.viewAllAction.weblink, cover: e.data.cover ? (0, e9.p)(e.data.cover) : void 0 },
                    }),
                e7 = (e) => {
                    let { album: t, artists: a, likesCount: i, bookmateOptionRequired: l } = e;
                    return { type: ee._.NON_MUSIC_ALBUM_ITEM, data: (0, et.s)({ album: t, likesCount: i, bookmateOptionRequired: l, artists: a }) };
                },
                te = (e) => ({ type: ee._.TRACK_ITEM, data: (0, eH.v)(e.data.track) });
            var tt = a(33957);
            let ta = (e) => {
                var t, a, i;
                let l = e || {};
                return (0, C.wg)({
                    items: null != (i = null == (t = l.tracks) ? void 0 : t.map((e) => (0, eH.v)(e))) ? i : [],
                    playlist: (0, tt.j)(l.playlist),
                    totalItemsCount: null == (a = l.summary) ? void 0 : a.count,
                    canShowEmptyBlock: !0,
                });
            };
            var ti = a(58268);
            let tl = (e) => (0, C.wg)({ uid: e.uid, name: e.name, cover: (0, e9.p)(e.cover), status: e.status }),
                tr = (e) =>
                    (0, C.wg)({
                        id: e.id,
                        name: e.name,
                        owner: tl(e.owner),
                        members: e.members.filter((t) => t.uid !== e.owner.uid).map(tl),
                        wave: e.wave ? (0, eo.l)(e.wave) : void 0,
                        status: e.status,
                    }),
                ts = (e) => 'object' == typeof e && null !== e && 'type' in e && e.type === ec.t.TABS,
                tn = (e) => Object.values(ec.t).includes(e),
                to = C.gK.model('ArtistPopularTracksData', { items: C.gK.array(H.v) }),
                td = eh
                    .props({ type: C.gK.literal(ec.t.ARTIST_POPULAR_TRACKS), data: C.gK.maybe(to), meta: eA })
                    .named('ArtistPopularTracks')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                tg = C.gK.model('ArtistReleaseData', { album: ey.J, releaseDate: C.gK.maybe(C.gK.string) }),
                tu = eh
                    .props({ type: C.gK.literal(ec.t.ARTIST_RELEASE), data: C.gK.maybe(tg), meta: eA })
                    .named('ArtistRelease')
                    .views((e) => ({
                        get isVisible() {
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!e.data,
                            });
                        },
                        get objectsCount() {
                            return +!!e.data;
                        },
                    }));
            var tc = a(56829),
                tm = a(45162);
            let tp = C.gK
                    .compose(
                        C.gK.model('BaseUpcomingAlbum', {
                            id: C.gK.number,
                            isPresave: C.gK.boolean,
                            title: C.gK.maybe(C.gK.string),
                            type: C.gK.maybe(C.gK.enumeration(Object.values(tc._))),
                            coverUri: C.gK.maybe(C.gK.string),
                            releaseDate: C.gK.maybe(C.gK.string),
                        }),
                        ew.E,
                    )
                    .actions((e) => {
                        let t = {
                            presaveAlbum: (0, C.L3)(function* (t) {
                                let { usersResource: a, modelActionsLogger: i } = (0, C._$)(e);
                                try {
                                    e.isPresave = !0;
                                    let i = yield a.presaveAlbum(t);
                                    return (i === tm.J.ERROR && (e.isPresave = !1), i);
                                } catch (t) {
                                    return ((e.isPresave = !1), i.error(t), tm.J.ERROR);
                                }
                            }),
                            removePresaveAlbum: (0, C.L3)(function* (t) {
                                let { usersResource: a, modelActionsLogger: i } = (0, C._$)(e);
                                try {
                                    e.isPresave = !1;
                                    let i = yield a.removePresaveAlbum(t);
                                    return (i === tm.J.ERROR && (e.isPresave = !0), i);
                                } catch (t) {
                                    return ((e.isPresave = !0), i.error(t), tm.J.ERROR);
                                }
                            }),
                            toggleLike: (0, C.L3)(function* () {
                                let a;
                                if (!(0, C._n)(e)) return;
                                let { user: i } = (0, R.M)(e);
                                if (i.account.data.uid)
                                    return (
                                        (a = e.isPresave
                                            ? yield t.removePresaveAlbum({ albumId: e.id, userId: i.account.data.uid })
                                            : yield t.presaveAlbum({ albumId: e.id, userId: i.account.data.uid, likeAfterRelease: !0 })),
                                        !(0, C._n)(e),
                                        a
                                    );
                            }),
                            getKey: (t) => ''.concat(t, '_').concat(e.id),
                        };
                        return t;
                    })
                    .props({ artists: C.gK.maybe(C.gK.array(eS.P)) })
                    .views((e) => ({
                        get artistNames() {
                            var t;
                            return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                        },
                    })),
                ty = C.gK.model('ArtistUpcomingReleaseData', { album: tp }),
                tE = eh
                    .props({ type: C.gK.literal(ec.t.ARTIST_UPCOMING_RELEASE), data: C.gK.maybe(ty), meta: eA })
                    .named('ArtistUpcomingRelease')
                    .views((e) => ({
                        get isVisible() {
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!e.data,
                            });
                        },
                        get objectsCount() {
                            return +!!e.data;
                        },
                    }));
            var tS = a(892);
            let tb = (e) => (0, C.wg)(e),
                tv = (e) => ({
                    loadingState: eu.IDLE,
                    id: e.id,
                    type: e.type,
                    meta: ((e) =>
                        (0, tS.v)(e)
                            ? ((e) => {
                                  var t;
                                  return (0, C.wg)({
                                      title: e.title,
                                      description: e.description,
                                      source: e.source,
                                      viewAllActionLink: null == (t = e.viewAllAction) ? void 0 : t.weblink,
                                      showPolicy: e.showPolicy,
                                      coverStyle: e.coverStyle,
                                  });
                              })(e)
                            : ((e) => !!(e && 'object' == typeof e && 'cover' in e && !('source' in e)))(e)
                              ? ((e) => {
                                    var t;
                                    return (0, C.wg)({ ...e, coverUri: null == (t = e.cover) ? void 0 : t.uri });
                                })(e)
                              : ((e) => !!(e && 'object' == typeof e && ('message' in e || 'title' in e || 'expandable' in e || 'visibleLines' in e)))(e)
                                ? ((e) => {
                                      var t;
                                      return (0, C.wg)({ ...tb(e), showPolicy: e.showPolicy, viewAllActionLink: null == (t = e.viewAllAction) ? void 0 : t.weblink });
                                  })(e)
                                : void 0)(e.data),
                    data: void 0,
                    isNeededToLoad: !0,
                    isLoading: !0,
                    isLoaded: !1,
                    isRejected: !1,
                    isVisible: !0,
                    isNotFound: !1,
                    hasSentAnalyticsOnLoaded: !1,
                    objectsCount: 0,
                    setHasSentAnalyticsOnLoaded: () => {},
                });
            var tK = a(53469);
            let tI = C.gK.model('ArtistPickData', { playlist: tK.$, artists: C.gK.array(eS.P) }),
                tL = eh
                    .props({ type: C.gK.literal(ec.t.ARTIST_PICK), data: C.gK.maybe(tI), meta: eA })
                    .named('ArtistPick')
                    .views((e) => ({
                        get isVisible() {
                            if (e.isRejected || (e.isLoaded && !e.data)) return !1;
                            return !0;
                        },
                        get objectsCount() {
                            return e.data && 1;
                        },
                    }));
            var tT = a(61342),
                th = a(25895);
            let tN = C.gK
                    .model('FamiliarYouData', {
                        vibeTrackCount: C.gK.optional(C.gK.number, 0),
                        collectionTrackCount: C.gK.optional(C.gK.number, 0),
                        collectionAlbumCount: C.gK.optional(C.gK.number, 0),
                    })
                    .views((e) => {
                        let t = {
                            get hasTracks() {
                                return e.collectionTrackCount > 0 || e.vibeTrackCount > 0;
                            },
                            get hasFamiliarInfo() {
                                return t.hasTracks || e.collectionAlbumCount > 0;
                            },
                            get tracksCount() {
                                return e.collectionTrackCount + e.vibeTrackCount;
                            },
                            get hasCollectionEntities() {
                                return e.collectionTrackCount > 0 || e.collectionAlbumCount > 0;
                            },
                            get hasVibeEntities() {
                                return e.vibeTrackCount > 0;
                            },
                            href(e) {
                                if (!e) return '';
                                if (t.hasCollectionEntities) {
                                    let { href: t } = (0, th.u)('/artist/:artistId/familiar', { params: { artistId: e }, query: { tab: tT.J.COLLECTION } });
                                    return t;
                                }
                                if (t.hasVibeEntities) {
                                    let { href: t } = (0, th.u)('/artist/:artistId/familiar', { params: { artistId: e }, query: { tab: tT.J.VIBE } });
                                    return t;
                                }
                                let { href: a } = (0, th.u)('/artist/:artistId/familiar', { params: { artistId: e } });
                                return a;
                            },
                        };
                        return t;
                    }),
                tA = eh
                    .props({ type: C.gK.literal(ec.t.FAMILIAR_YOU), data: C.gK.maybe(tN), meta: eA })
                    .named('FamiliarYou')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            if (e.isRejected || (e.isLoaded && !(null == (t = e.data) ? void 0 : t.hasFamiliarInfo))) return !1;
                            return !0;
                        },
                        get objectsCount() {
                            return e.data && 1;
                        },
                    })),
                tC = (e) => {
                    let t = tv(e);
                    if ((0, e$.Q)(t) && ((e) => !!(e && 'object' == typeof e && 'blocks' in e))(e.data))
                        switch (t.type) {
                            case ec.t.ARTIST_POPULAR_TRACKS_AND_RELEASES:
                                t.data = ((e) => {
                                    var t;
                                    let a =
                                        null == (t = e.blocks)
                                            ? void 0
                                            : t.reduce((e, t) => {
                                                  let a = tv(t);
                                                  return ((td.is(a) || tu.is(a) || tE.is(a)) && e.push(a), e);
                                              }, []);
                                    return (0, C.wg)({ blocks: a });
                                })(e.data);
                                break;
                            case ec.t.FAMILIAR_YOU_AND_ARTIST_PICK:
                                t.data = ((e) => {
                                    var t;
                                    let a =
                                        null == (t = e.blocks)
                                            ? void 0
                                            : t.reduce((e, t) => {
                                                  let a = tv(t);
                                                  return ((tA.is(a) || tL.is(a)) && e.push(a), e);
                                              }, []);
                                    return (0, C.wg)({ blocks: a });
                                })(e.data);
                        }
                    return t;
                },
                tf = (e) => (0, C.wg)({ meta: { id: e.id, title: e.title }, shouldReloadNotification: !1, blocks: e.blocks.filter((e) => tn(e.type)).map(tC) }),
                tR = (e) => {
                    let t = [],
                        a = null;
                    for (let i of e) ts(i) ? (a = i) : t.push(i);
                    return ((e) => {
                        let { tabData: t, upperBlocks: a } = e,
                            i = { loadingState: M.G.IDLE, isLoading: !0 };
                        return (
                            t && ((i.meta = { selectedTabIndex: t.selectedTabIndex, source: t.source }), (i.tabs = { loadingState: M.G.IDLE, data: t.tabs.map(tf) })),
                            a && (i.upperBlocks = a.filter((e) => tn(e.type)).map(tC)),
                            (0, C.wg)(i)
                        );
                    })({ tabData: null == a ? void 0 : a.data, upperBlocks: t });
                },
                tk = (e) => ({ title: e.title, lineColor: e['line-color'] }),
                tD = (e) => {
                    var t;
                    let a = null == (t = (e || {}).concerts) ? void 0 : t.map((e) => (0, eY.h)(e));
                    return (0, C.wg)({ items: a });
                },
                t_ = (e) => ({ uri: e.uri, color: e.color }),
                tP = (e) => {
                    var t;
                    let { data: a } = e;
                    return (0, C.wg)({ type: ee._.DONATION_ITEM, data: eD({ url: a.tipUrl, artist: a.artist, goal: null == (t = a.goal) ? void 0 : t.title }) });
                },
                tO = (e) => {
                    var t;
                    let a = null == (t = (e || {}).donations) ? void 0 : t.map(tP);
                    return (0, C.wg)({ items: a });
                },
                tw = (e) => {
                    var t;
                    let a = null == (t = (e || {}).items) ? void 0 : t.map((e) => (0, ei.a)({ artist: e.data.artist, trailer: e.data.trailer }));
                    return (0, C.wg)({ items: a });
                },
                tG = (e) => {
                    var t;
                    let a = null == (t = (e || {}).items) ? void 0 : t.map((e) => (0, eo.l)(e.wave, e.agent));
                    return (0, C.wg)({ items: a });
                };
            var tM = a(85708);
            let tU = (e) => {
                    var t;
                    let a = null == (t = (e || {}).items) ? void 0 : t.map(tM.e);
                    return (0, C.wg)({ items: a });
                },
                tB = (e) => {
                    var t;
                    let a =
                        null == (t = (e || {}).inStyleTabs)
                            ? void 0
                            : t.map((e, t) => {
                                  var a;
                                  let i =
                                          null == e
                                              ? void 0
                                              : e.items.map((e) => {
                                                    let { album: t, artists: a, trailer: i } = e;
                                                    return (0, et.s)({ album: t, artists: a, trailer: i });
                                                }),
                                      l = ((null == e || null == (a = e.cover) ? void 0 : a.uri) && [null == e ? void 0 : e.cover.uri]) || [];
                                  return { tab: { id: t, title: e.title, covers: (0, C.wg)(l) }, data: (0, C.wg)(i) };
                              });
                    return (0, C.wg)({ items: a });
                },
                tF = (e) => {
                    var t;
                    let a = null == (t = (e || {}).items) ? void 0 : t.map(e4);
                    return (0, C.wg)({ items: a });
                },
                tV = (e) => {
                    let { favorites: t, history: a } = e,
                        i = (0, e9.p)(t.cover),
                        l = t.trackCovers.map(e9.p),
                        r = (0, C.wg)({ title: t.title, cover: i, playlistUuid: t.playlistUuid || void 0, count: t.count, trackCovers: l }),
                        s = a.trackCovers.map(e9.p),
                        n = (0, C.wg)({ title: a.title, trackCovers: s, artists: a.subtitleElements });
                    return (0, C.wg)({ favorites: r, history: n });
                },
                tx = (e) => (0, C.wg)({ id: e.id, title: e.title, weblink: e.action.weblink, covers: e.covers.map(e9.p) }),
                tj = (e) => ({ items: (0, C.wg)(e.items.map((e) => tx(e.data))) });
            var tW = a(50497);
            let tX = (e) =>
                    (0, C.wg)({
                        items: e.items.map((e) =>
                            ((e) => {
                                var t, a;
                                return (0, C.wg)({
                                    title: e.title,
                                    stationId: e.stationId,
                                    imageUrl: e.imageUrl,
                                    style: {
                                        backgroundColor: null == (t = e.style) ? void 0 : t.backgroundColor,
                                        titleColor: null == (a = e.style) ? void 0 : a.titleColor,
                                    },
                                });
                            })(e),
                        ),
                    }),
                t$ = (e) => {
                    var t;
                    let a =
                        null == (t = (e || {}).newReleases)
                            ? void 0
                            : t.map((e) => {
                                  let { album: t, artists: a, releaseDate: i, cover: l, trailer: r } = e;
                                  return {
                                      album: (0, et.s)({ album: t, artists: a, trailer: r }),
                                      releaseDate: i,
                                      coverUri: null == l ? void 0 : l.uri,
                                      coverColor: null == l ? void 0 : l.color,
                                  };
                              });
                    return (0, C.wg)({ items: a });
                },
                tJ = (e) => {
                    let t = e.items.map((e) =>
                        e.type === ee._.NON_MUSIC_ALBUM_ITEM
                            ? e7({ album: e.data.album, artists: e.data.artists, likesCount: e.data.likesCount, bookmateOptionRequired: e.data.bookmateOptionRequired })
                            : es({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer }),
                    );
                    return (0, C.wg)({ items: t });
                },
                tY = (e, t) => {
                    var a;
                    return (0, C.wg)({
                        items: e.tracks.map((e) => (0, eH.v)(e)),
                        playlist: (0, tt.j)(e.playlist),
                        coverUri: null == (a = e.cover) ? void 0 : a.uri,
                        withRewindTrailerButton: 'rewind2024' === t,
                    });
                },
                tH = (e) => ({
                    type: ee._.PERSONAL_PLAYLIST_ITEM,
                    data: {
                        playlist: (0, er.b)({ playlist: e.data.playlist, trailer: e.data.trailer }),
                        playlistType: e.data.playlistType,
                        description: e.data.description,
                    },
                }),
                tq = (e) => {
                    if (!e || !Array.isArray(e.items)) return (0, C.wg)({});
                    let t = e.items.map(tH);
                    return (0, C.wg)({ items: t });
                },
                tz = (e) => (0, C.wg)({ reporting: eQ(e.reporting), items: e.albumBanners.map((e) => eq(e)) }),
                tQ = (e) => (0, C.wg)({ suggestionsRequestId: e.suggestionsRequestId, items: e.items.map((e) => ({ query: e.query })) }),
                tZ = (e) =>
                    (0, C.wg)({
                        buttonColor: null == e ? void 0 : e.buttonColor,
                        textColor: null == e ? void 0 : e.textColor,
                        bgImageUrl: null == e ? void 0 : e.bgImageUrl,
                        imageUrl: null == e ? void 0 : e.imageUrl,
                        buttonTextColor: null == e ? void 0 : e.buttonTextColor,
                    }),
                t0 = (e) => {
                    var t, a;
                    return (0, C.wg)({
                        title: null == e ? void 0 : e.title,
                        subtitle: null == e ? void 0 : e.subtitle,
                        buttonTitle: null == e ? void 0 : e.buttonTitle,
                        imageUrl: null == e ? void 0 : e.imageUrl,
                        align: null == e ? void 0 : e.align,
                        weblink: null == e || null == (t = e.action) ? void 0 : t.weblink,
                        lightTheme: tZ(null == e ? void 0 : e.lightTheme),
                        darkTheme: tZ(null == e ? void 0 : e.darkTheme),
                        advDisclaimer: null != (a = null == e ? void 0 : e.advDisclaimer) ? a : null,
                    });
                },
                t1 = (e) => {
                    var t;
                    return null == (t = (e || {}).tabs) ? void 0 : t.map((e) => (0, C.wg)({ id: e.id, title: e.title, subtitle: e.subtitle, covers: e.covers }));
                },
                t3 = (e) => {
                    var t;
                    let a =
                        null == (t = (e || {}).waves)
                            ? void 0
                            : t.map((e, t) => {
                                  var a;
                                  return {
                                      tab: { id: t, title: null == e ? void 0 : e.title },
                                      data:
                                          (null == e || null == (a = e.items)
                                              ? void 0
                                              : a.map((e) => {
                                                    let { wave: t, agent: a } = e;
                                                    return (0, eo.l)(t, a);
                                                })) || [],
                                  };
                              });
                    return (0, C.wg)({ items: a });
                },
                t2 = (e) => {
                    var t;
                    let a =
                        null == (t = (e || {}).waves)
                            ? void 0
                            : t.map((e, t) => ({ tab: { id: t, title: null == e ? void 0 : e.title }, data: null == e ? void 0 : e.items.map(tM.e) }));
                    return (0, C.wg)({ items: a });
                },
                t8 = (e) => {
                    var t;
                    let a = null == (t = (null == e ? void 0 : e.artists) || []) ? void 0 : t.map((e) => (0, ei.a)({ artist: e }));
                    return (0, C.wg)({ title: e.title, description: e.description, artists: a });
                },
                t5 = new Set([ec.t.CONCERTS_PERSONAL, ec.t.ARTIST_CONCERTS, ec.t.VIEWED_CONCERTS]);
            var t6 = a(26847);
            let t9 = C.gK
                    .model('PromoDataItem', {
                        album: ey.J,
                        artists: C.gK.array(eS.P),
                        cover: t6.$,
                        coverContentMode: C.gK.maybe(C.gK.string),
                        clickUrl: C.gK.string,
                        yclid: C.gK.string,
                        utm: C.gK.frozen(),
                        hasClicked: C.gK.optional(C.gK.boolean, !1),
                    })
                    .views((e) => {
                        let t = {
                            get reportingProperties() {
                                return { ...e.utm, yclid: e.yclid };
                            },
                            get albumUrl() {
                                let { href: a } = (0, th.u)(e.album.url, { query: t.reportingProperties });
                                return a;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setClicked: (0, C.L3)(function* () {
                            if (!(0, C._n)(e) || e.hasClicked) return;
                            let { prefixlessResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            try {
                                ((e.hasClicked = !0), yield t.reportForPromo(e.clickUrl));
                            } catch (e) {
                                a.error(e);
                            }
                        }),
                    })),
                t4 = C.gK.model('PromoDataReportingOptions', { url: C.gK.string, timeMs: C.gK.number }),
                t7 = C.gK.model('PromoDataReporting', { blockRender: t4, blockImpression: t4, adImpressions: t4 }),
                ae = C.gK.model('Promo', { reporting: C.gK.maybe(t7), items: C.gK.array(t9) }).actions((e) => ({
                    report: (0, C.L3)(function* (t) {
                        if (!(0, C._n)(e)) return;
                        let { prefixlessResource: a, modelActionsLogger: i } = (0, C._$)(e);
                        try {
                            yield a.reportForPromo(t);
                        } catch (e) {
                            i.error(e);
                        }
                    }),
                })),
                at = ae.named('AlbumPromoData'),
                aa = eh
                    .props({ type: C.gK.union(C.gK.literal(ec.t.ALBUM_PROMO), C.gK.literal(ec.t.SIMPLE_ALBUM_PROMO)), data: C.gK.maybe(at), meta: eA })
                    .named('AlbumPromo')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!((null == (t = e.data) ? void 0 : t.items) && e.data.items.length > 0),
                                isOutdated: e.isOutdated,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    }));
            var ai = a(69635);
            let al = C.gK.model('ArtistConcertsData', { items: C.gK.array(ai.a) }),
                ar = eh
                    .props({ type: C.gK.union(C.gK.literal(ec.t.ARTIST_CONCERTS)), data: C.gK.maybe(al), meta: eA })
                    .named('ArtistConcerts')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                as = C.gK.model('ArtistPopularTracksAndReleasesData', { blocks: C.gK.array(C.gK.union(td, tu, tE)) }).views((e) => ({
                    get popularTracks() {
                        return e.blocks.find((e) => td.is(e));
                    },
                    get upcomingRelese() {
                        return e.blocks.find((e) => tE.is(e));
                    },
                    get release() {
                        return e.blocks.find((e) => tu.is(e));
                    },
                })),
                an = eh
                    .props({ type: C.gK.literal(ec.t.ARTIST_POPULAR_TRACKS_AND_RELEASES), data: C.gK.maybe(as) })
                    .named('ArtistPopularTracksAndReleases')
                    .views((e) => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            var t, a;
                            return null != (a = null == (t = e.data) ? void 0 : t.blocks.length) ? a : 0;
                        },
                    })),
                ao = t9
                    .props({ adImpressions: t4 })
                    .named('ArtistRecommendationsPromoDataItem')
                    .views((e) => ({
                        get avatarArtists() {
                            return e.artists.slice(0, 3);
                        },
                        get averageColor() {
                            return e.cover.uri ? e.cover.color || e.album.averageColor : void 0;
                        },
                    }))
                    .actions((e) => ({
                        reportImpression: (0, C.L3)(function* () {
                            if (!(0, C._n)(e)) return;
                            let { prefixlessResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            try {
                                yield t.reportForPromo(e.adImpressions.url);
                            } catch (e) {
                                a.error(e);
                            }
                        }),
                    })),
                ad = ae.props({ items: C.gK.array(ao) }).named('ArtistRecommendationsPromoData'),
                ag = eh
                    .props({
                        type: C.gK.union(C.gK.literal(ec.t.ARTIST_RECOMMENDATIONS_PROMO), C.gK.literal(ec.t.SIMPLE_ARTIST_RECOMMENDATIONS_PROMO)),
                        data: C.gK.maybe(ad),
                        meta: eA,
                    })
                    .named('ArtistRecommendationsPromo')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!(null == (t = e.data) ? void 0 : t.items.length),
                                isOutdated: e.isOutdated,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                au = C.gK.model('ChartTracksItem', { type: C.gK.literal(ee._.TRACK_ITEM), data: H.v }),
                ac = C.gK.model('ChartTracksData', { items: C.gK.array(au), playlist: tK.$ }),
                am = eh
                    .props({ type: C.gK.literal(ec.t.CHART_TRACKS), data: C.gK.maybe(ac), meta: eA })
                    .named('ChartTracks')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            let t = null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                            return t < 8 ? t : 8;
                        },
                    }));
            var ap = a(53712),
                ay = a(12929);
            let aE = C.gK
                    .compose(
                        C.gK.model('BaseClip', {
                            clipId: C.gK.number,
                            title: C.gK.maybe(C.gK.string),
                            thumbnail: C.gK.maybe(C.gK.string),
                            previewUrl: C.gK.maybe(C.gK.string),
                            duration: C.gK.maybe(C.gK.number),
                            isAvailable: C.gK.boolean,
                            version: C.gK.maybe(C.gK.string),
                        }),
                        ew.E,
                    )
                    .views((e) => ({
                        get url() {
                            let { href: t } = (0, th.u)(ap.Z.video.href, { query: { ids: String(e.clipId) } });
                            return t;
                        },
                        get isLiked() {
                            if (!(0, C._n)(e)) return !1;
                            let { library: t } = (0, R.M)(e);
                            return t.isClipLiked(e.clipId);
                        },
                        get isLegalRejected() {
                            return e.getIsLegalRejected(e.isAvailable);
                        },
                        get isUnsafeLegal() {
                            return e.getIsUnsafeLegal(e.isAvailable);
                        },
                        getDisclaimerEntityRef: (t) => ({ entityType: null != t ? t : ay.n.CLIP, entityId: e.clipId }),
                    }))
                    .actions((e) => ({
                        getKey: (t) => ''.concat(t, '_').concat(e.clipId),
                        toggleLike() {
                            if (!(0, C._n)(e)) return;
                            let { library: t, user: a } = (0, R.M)(e);
                            if (a.isAuthorized) return t.toggleClipLike({ entityId: e.clipId, userId: a.account.data.uid });
                        },
                    })),
                aS = aE.props({ artists: C.gK.array(eS.P) }).views((e) => ({
                    get hasArtists() {
                        return e.artists.length > 0;
                    },
                })),
                ab = C.gK.model('LandingClipItem', { type: C.gK.union(C.gK.literal(ee._.CLIP), C.gK.literal(ee._.CLIP_ITEM)), data: aS }),
                av = C.gK.model('ClipsData', { items: C.gK.array(ab), canShowEmptyBlock: C.gK.optional(C.gK.boolean, !1) }).views((e) => ({
                    get isEmptyBlock() {
                        return e.canShowEmptyBlock && 0 === e.items.length;
                    },
                })),
                aK = eh
                    .props({
                        type: C.gK.union(C.gK.literal(ec.t.CLIPS), C.gK.literal(ec.t.ARTIST_CLIPS), C.gK.literal(ec.t.COLLECTION_CLIPS)),
                        data: C.gK.maybe(av),
                        meta: eA,
                    })
                    .named('Clips')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            let { settings: i } = (0, R.M)(e);
                            if (null == (t = e.data) ? void 0 : t.canShowEmptyBlock) return !0;
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (a = e.data) ? void 0 : a.items.length) !== 0,
                                isNeededToHide: i.isMobile,
                            });
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                aI = C.gK.model('CollectionAlbumsData', { items: C.gK.array(ey.J), canShowEmptyBlock: C.gK.optional(C.gK.boolean, !1) }).views((e) => ({
                    get isEmptyBlock() {
                        return e.canShowEmptyBlock && 0 === e.items.length;
                    },
                })),
                aL = eh
                    .props({ type: C.gK.literal(ec.t.COLLECTION_ALBUMS), data: C.gK.maybe(aI), meta: eA })
                    .named('CollectionAlbums')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i;
                            if ((null == (t = e.data) ? void 0 : t.canShowEmptyBlock) || e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (i = e.data) || null == (a = i.items) ? void 0 : a.length) !== 0;
                        },
                        get objectsCount() {
                            var l, r;
                            return null != (r = null == (l = e.data) ? void 0 : l.items.length) ? r : 0;
                        },
                    }));
            var aT = a(58958);
            let ah = C.gK.model('LandingUpcomingAlbumItem', { type: C.gK.literal(ee._.PRESAVED_ALBUM_ITEM), data: tp }),
                aN = C.gK.union(eE, ah),
                aA = C.gK
                    .model('CollectionAlbumsPresavesTab', {
                        id: C.gK.string,
                        title: C.gK.string,
                        type: C.gK.enumeration(Object.values(aT.n)),
                        items: C.gK.array(aN),
                        canShowEmptyBlock: C.gK.optional(C.gK.boolean, !1),
                    })
                    .views((e) => ({
                        get isEmptyTab() {
                            return !!(e.canShowEmptyBlock && 0 === e.items.length);
                        },
                    })),
                aC = C.gK.model('CollectionAlbumsPresavesTabs', { tabs: C.gK.array(aA) }).views((e) => ({
                    get isFirstTabEmpty() {
                        var t;
                        return (null == (t = e.tabs[0]) ? void 0 : t.items.length) === 0;
                    },
                    get isSecondTabEmpty() {
                        var a;
                        return (null == (a = e.tabs[1]) ? void 0 : a.items.length) === 0;
                    },
                    get areBothTabsEmpty() {
                        return this.isFirstTabEmpty && this.isSecondTabEmpty;
                    },
                    get activeIndexTab() {
                        if (this.isFirstTabEmpty && !this.isSecondTabEmpty) return 1;
                        return 0;
                    },
                })),
                af = eh
                    .props({ type: C.gK.literal(ec.t.COLLECTION_ALBUMS_PRESAVES), data: C.gK.maybe(aC), meta: eA })
                    .named('CollectionAlbumsPresaves')
                    .views((e) => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            if (e.data) return e.data.tabs.reduce((e, t) => e + t.items.length, 0);
                            return 0;
                        },
                    })),
                aR = C.gK
                    .model('LandingMenuItem', {
                        type: C.gK.literal(ee._.MENU_ITEM),
                        data: C.gK.model({ title: C.gK.string, viewAllActionLink: C.gK.maybe(C.gK.maybeNull(C.gK.string)), cover: C.gK.maybe(t6.$) }),
                    })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.data.title, '_').concat(e.data.viewAllActionLink);
                        },
                    })),
                ak = C.gK.union(aR, eT),
                aD = C.gK.model('CollectionArtistsAndTopWithItemsArtist', { artist: eS.P, items: C.gK.array(ak) }),
                a_ = C.gK.model('CollectionArtistsAndTopWithItemsData', { artists: C.gK.array(aD) }),
                aP = eh
                    .props({ type: C.gK.literal(ec.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS), data: C.gK.maybe(a_), meta: eA })
                    .named('CollectionArtistsAndTopWithItems')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!(null == (t = e.data) ? void 0 : t.artists.length),
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.artists.length) ? i : 0;
                        },
                    })),
                aO = C.gK.model('CollectionArtistData', { items: C.gK.array(eS.P), canShowEmptyBlock: C.gK.optional(C.gK.boolean, !1) }).views((e) => ({
                    get isEmptyBlock() {
                        return e.canShowEmptyBlock && 0 === e.items.length;
                    },
                })),
                aw = eh
                    .props({
                        type: C.gK.union(
                            C.gK.literal(ec.t.COLLECTION_ARTISTS),
                            C.gK.literal(ec.t.COLLECTION_ARTISTS_AND_TOP),
                            C.gK.literal(ec.t.PERSONAL_ARTISTS),
                            C.gK.literal(ec.t.NEW_STARS_ARTISTS),
                            C.gK.literal(ec.t.EDITORIAL_ARTISTS),
                            C.gK.literal(ec.t.META_TAG_POPULAR_ARTISTS),
                            C.gK.literal(ec.t.MICRO_GENRE_TOP_ARTISTS),
                            C.gK.literal(ec.t.MICRO_GENRE_ARTISTS),
                            C.gK.literal(ec.t.META_TAG_ARTISTS),
                            C.gK.literal(ec.t.SIMILAR_ARTISTS),
                        ),
                        data: C.gK.maybe(aO),
                        meta: eA,
                    })
                    .named('CollectionArtist')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (null == (t = e.data) ? void 0 : t.canShowEmptyBlock) return !0;
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (a = e.data) ? void 0 : a.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                aG = C.gK.model('CollectionPlaylistsData', { items: C.gK.array(ev.I) }),
                aM = eh
                    .props({ type: C.gK.literal(ec.t.COLLECTION_PLAYLISTS_CREATED), data: C.gK.maybe(aG), meta: eA })
                    .named('CollectionCreatedPlaylists')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    }));
            var aU = a(52807);
            let aB = C.gK.model('CollectionDownloadedTracksData', { items: C.gK.array(H.v), rawTracks: C.gK.frozen() }).views((e) => ({
                    get entitiesData() {
                        return e.rawTracks.map((e) => ({ type: aU.R.DownloadedMusic, meta: e }));
                    },
                })),
                aF = eh
                    .props({ type: C.gK.literal(ec.t.COLLECTION_DOWNLOADED_TRACKS), data: C.gK.maybe(aB), meta: eA })
                    .named('CollectionDownloadedTracks')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                aV = C.gK.model('LandingNonMusicAlbumItem', { type: C.gK.literal(ee._.NON_MUSIC_ALBUM_ITEM), data: ey.J }),
                ax = C.gK.model('LandingTrackItem', { type: C.gK.literal(ee._.TRACK_ITEM), data: H.v }),
                aj = C.gK.union(eK, aV, ax),
                aW = C.gK.model('CollectionKidsData', { items: C.gK.array(aj) }),
                aX = eh
                    .props({ type: C.gK.literal(ec.t.COLLECTION_KIDS), data: C.gK.maybe(aW), meta: eA })
                    .named('CollectionKids')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                a$ = C.gK.model('CollectionLikedPlaylistsData', { items: C.gK.array(ev.I) }),
                aJ = eh
                    .props({ type: C.gK.literal(ec.t.COLLECTION_PLAYLISTS_LIKED), data: C.gK.maybe(a$), meta: eA })
                    .named('CollectionLikedPlaylists')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    }));
            var aY = a(12288);
            let aH = C.gK
                    .model('CollectionPlaylistsTab', {
                        id: C.gK.string,
                        title: C.gK.string,
                        type: C.gK.enumeration(Object.values(aY.l)),
                        items: C.gK.array(ev.I),
                        canShowEmptyBlock: C.gK.optional(C.gK.boolean, !1),
                    })
                    .views((e) => ({
                        get isEmptyTab() {
                            return !!(e.canShowEmptyBlock && 0 === e.items.length);
                        },
                    })),
                aq = C.gK.model('CollectionPlaylistsTabs', { tabs: C.gK.array(aH) }).views((e) => ({
                    get isFirstTabEmpty() {
                        var t;
                        return (null == (t = e.tabs[0]) ? void 0 : t.items.length) === 0;
                    },
                    get isSecondTabEmpty() {
                        var a;
                        return (null == (a = e.tabs[1]) ? void 0 : a.items.length) === 0;
                    },
                    get areBothTabsEmpty() {
                        return this.isFirstTabEmpty && this.isSecondTabEmpty;
                    },
                    get activeIndexTab() {
                        if (this.isFirstTabEmpty && !this.isSecondTabEmpty) return 1;
                        return 0;
                    },
                })),
                az = eh
                    .props({ type: C.gK.literal(ec.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED), data: C.gK.maybe(aq), meta: eA })
                    .named('CollectionPlaylists')
                    .views((e) => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            if (e.data) return e.data.tabs.reduce((e, t) => e + t.items.length, 0);
                            return 0;
                        },
                    }));
            var aQ = a(69432);
            let aZ = C.gK
                    .model('ArtistTop', { artist: eS.P, listenTimeSeconds: C.gK.number, top: C.gK.maybe(aQ.I) })
                    .views((e) => ({
                        get isAvailableForPlaying() {
                            if (void 0 === e.artist.counts) return !0;
                            return e.artist.counts.tracks > 0;
                        },
                    }))
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.artist.id) })),
                a0 = C.gK.model('CollectionTopArtistsData', { items: C.gK.array(aZ) }),
                a1 = eh
                    .props({ type: C.gK.literal(ec.t.COLLECTION_TOP_ARTISTS), data: C.gK.maybe(a0), meta: eA })
                    .named('CollectionTopArtists')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                a3 = C.gK.model('CollectionVibeAgentDataModel', { vibe: eL.G }),
                a2 = eh
                    .props({ type: C.gK.literal(ec.t.COLLECTION_WAVE_AGENT), data: C.gK.maybe(a3), meta: eA })
                    .named('CollectionVibeAgent')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return null == (t = e.data) ? void 0 : t.vibe;
                        },
                        get objectsCount() {
                            var a;
                            return +(null != (a = e.data) && !!a.vibe);
                        },
                    }));
            !(function (e) {
                ((e.ENABLED = 'ENABLED'), (e.DISABLED = 'DISABLED'), (e.DRAFT = 'DRAFT'));
            })(r || (r = {}));
            var a8 = a(31488);
            !(function (e) {
                ((e.ACTIVE = 'ACTIVE'), (e.INACTIVE_EXIT = 'INACTIVE_EXIT'), (e.INACTIVE_SUBSCRIPTION = 'INACTIVE_SUBSCRIPTION'));
            })(s || (s = {}));
            let a5 = C.gK.model('VibeRoomMember', { uid: C.gK.maybe(C.gK.number), name: C.gK.string, cover: t6.$, status: C.gK.maybe(C.gK.string) }).views((e) => ({
                    get isActive() {
                        return e.status === s.ACTIVE;
                    },
                })),
                a6 = C.gK
                    .model('VibeRoom', {
                        id: C.gK.string,
                        name: C.gK.maybe(C.gK.string),
                        owner: a5,
                        members: C.gK.array(a5),
                        wave: C.gK.maybe(eL.G),
                        status: C.gK.maybe(C.gK.string),
                    })
                    .views((e) => ({
                        get isDisabled() {
                            return e.status === r.DISABLED;
                        },
                        get isDraft() {
                            return e.status === r.DRAFT;
                        },
                        get isEnabled() {
                            return e.status === r.ENABLED;
                        },
                    }))
                    .actions((e) => ({
                        getKey: (t) => ''.concat(t, '_').concat(e.id),
                        editRoom: (0, C.L3)(function* (t) {
                            var a;
                            let { roomId: i, name: l } = t,
                                r = l.trim();
                            if ((null == (a = e.name) ? void 0 : a.trim()) === r) return a8.F.OK;
                            let { waveResource: s, modelActionsLogger: n } = (0, C._$)(e);
                            try {
                                return (yield s.editRoom({ roomId: i, name: r }), (e.name = r), a8.F.OK);
                            } catch (e) {
                                return (n.error(e), a8.F.ERROR);
                            }
                        }),
                        exitRoom: (0, C.L3)(function* (t) {
                            let { roomId: a } = t,
                                { waveResource: i, modelActionsLogger: l } = (0, C._$)(e);
                            try {
                                return (yield i.exitRoom({ roomId: a }), a8.F.OK);
                            } catch (e) {
                                return (l.error(e), a8.F.ERROR);
                            }
                        }),
                    })),
                a9 = C.gK.model('CollectionVibeRoomsData', { items: C.gK.array(a6) }),
                a4 = eh
                    .props({ type: C.gK.literal(ec.t.COLLECTION_WAVE_ROOMS), data: C.gK.maybe(a9), meta: eA })
                    .named('CollectionVibeRooms')
                    .views((e) => ({
                        get isVisible() {
                            let {
                                collection: { vibeRooms: t },
                            } = (0, R.M)(e);
                            if (!t.isEnabled) return !1;
                            return !0;
                        },
                        get objectsCount() {
                            var t, a;
                            return null != (a = null == (t = e.data) ? void 0 : t.items.length) ? a : 0;
                        },
                    })),
                a7 = C.gK.model('MapUrl', { imageUrl: C.gK.string, url: C.gK.string }),
                ie = C.gK.model('MetroStation', { title: C.gK.string, lineColor: C.gK.string }),
                it = C.gK
                    .model('BaseMap', {
                        place: C.gK.string,
                        city: C.gK.string,
                        address: C.gK.string,
                        metroStations: C.gK.maybeNull(C.gK.array(ie)),
                        map: C.gK.maybeNull(a7),
                    })
                    .views((e) => ({
                        get groupedMetroStations() {
                            if (!e.metroStations) return [];
                            let t = new Map();
                            return (
                                e.metroStations.forEach((e) => {
                                    let a = t.get(e.title);
                                    (a || ((a = new Set()), t.set(e.title, a)), a.add(e.lineColor));
                                }),
                                Array.from(t.entries()).map((e) => {
                                    let [t, a] = e;
                                    return { title: t, colors: Array.from(a) };
                                })
                            );
                        },
                    })),
                ia = eh
                    .props({ type: C.gK.literal(ec.t.CONCERT_PLACE), data: C.gK.maybe(it), meta: eA })
                    .named('ConcertPlace')
                    .views((e) => ({
                        get isVisible() {
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: void 0 !== e.data,
                            });
                        },
                        get objectsCount() {
                            return +(null !== e.data);
                        },
                    })),
                ii = C.gK.model('ConcertsData', { items: C.gK.array(ai.a) }),
                il = eh
                    .props({
                        type: C.gK.union(
                            C.gK.literal(ec.t.CONCERTS_TOP),
                            C.gK.literal(ec.t.CONCERTS_PERSONAL),
                            C.gK.literal(ec.t.EDITORIAL_CONCERTS),
                            C.gK.literal(ec.t.VIEWED_CONCERTS),
                        ),
                        data: C.gK.maybe(ii),
                        meta: eA,
                    })
                    .named('Concerts')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    }));
            var ir = a(90322),
                is = a(66730);
            let io = C.gK
                    .model('ContinueListenTrackData', {
                        album: C.gK.maybe(is.G),
                        playlist: C.gK.maybe(tK.$),
                        track: H.v,
                        trackLoadingState: C.gK.optional(C.gK.enumeration(Object.values(M.G)), M.G.IDLE),
                        playlistLoadingState: C.gK.optional(C.gK.enumeration(Object.values(M.G)), M.G.IDLE),
                        albumDuration: C.gK.maybe(C.gK.number),
                        albumDurationLeft: C.gK.maybe(C.gK.number),
                    })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.trackLoadingState === M.G.IDLE;
                        },
                        get isLoading() {
                            return e.trackLoadingState === M.G.PENDING || e.playlistLoadingState === M.G.PENDING;
                        },
                        get isRejected() {
                            return e.trackLoadingState === M.G.REJECT || e.playlistLoadingState === M.G.REJECT;
                        },
                    }))
                    .actions((e) => ({
                        getTrackMeta: (0, C.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, C._$)(e),
                                { continueListen: i } = (0, R.M)(e);
                            if (i.track && 'number' == typeof i.track.durationMs) {
                                e.trackLoadingState = M.G.RESOLVE;
                                return;
                            }
                            e.trackLoadingState = M.G.PENDING;
                            try {
                                var l;
                                let a = (0, ir.V)(e.track.id, null == (l = e.album) ? void 0 : l.id),
                                    [i] = yield t.getTracksMeta({ trackIds: [a], withProgress: !0 });
                                if (((e.trackLoadingState = M.G.RESOLVE), i)) return (0, eH.v)(i);
                            } catch (t) {
                                (a.error(t), (e.trackLoadingState = M.G.REJECT));
                            }
                        }),
                        getPlaylistMeta: (0, C.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, C._$)(e),
                                { continueListen: i } = (0, R.M)(e);
                            if ((i.track && 'number' == typeof i.trackIndex) || !e.playlist) {
                                e.playlistLoadingState = M.G.RESOLVE;
                                return;
                            }
                            e.playlistLoadingState = M.G.PENDING;
                            try {
                                let { tracks: a } = yield t.getPlaylistWithTracksIds({ userId: String(e.playlist.uid), playlistKind: e.playlist.kind, resumeStream: !1 }),
                                    i = a.findIndex((t) => String(t.id) === e.track.id);
                                if (((e.playlistLoadingState = M.G.RESOLVE), e.track.durationMs && -1 !== i)) return i;
                            } catch (t) {
                                (a.error(t), (e.playlistLoadingState = M.G.REJECT));
                            }
                        }),
                    })),
                id = C.gK.model('ContinueListenTrack', { type: C.gK.string, data: io }),
                ig = C.gK.model('ContinueListenBaseItem', { uri: C.gK.string, color: C.gK.maybe(C.gK.string) }),
                iu = C.gK.model('ContinueListenBaseItem', {
                    title: C.gK.string,
                    covers: C.gK.array(ig),
                    bookCount: C.gK.maybe(C.gK.number),
                    podcastCount: C.gK.maybe(C.gK.number),
                    trackCount: C.gK.maybe(C.gK.number),
                }),
                ic = C.gK.model('ContinueListenData', { lastPlayed: C.gK.maybe(id), bookshelf: iu, newEpisodes: iu }),
                im = eh
                    .props({ type: C.gK.literal(ec.t.CONTINUE_LISTEN), data: C.gK.maybe(ic), meta: eA })
                    .named('ContinueListen')
                    .views((e) => ({
                        get isVisible() {
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!e.data,
                            });
                        },
                        get objectsCount() {
                            return Object.keys(e.data || {}).length;
                        },
                    })),
                ip = C.gK.model('BaseOverview', {
                    title: C.gK.maybe(C.gK.string),
                    message: C.gK.maybe(C.gK.string),
                    isExpandable: C.gK.optional(C.gK.boolean, !0),
                    visibleLinesCount: C.gK.optional(C.gK.number, 3),
                }),
                iy = ip.named('LandingBlockOverviewMeta').props({ showPolicy: C.gK.maybe(C.gK.string), viewAllActionLink: C.gK.maybeNull(C.gK.string) }),
                iE = eh
                    .props({ type: C.gK.literal(ec.t.DISLIKES), data: C.gK.undefined, meta: iy })
                    .named('Dislikes')
                    .views(() => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            return 0;
                        },
                    })),
                iS = C.gK.model('LandingDonationItem', { type: C.gK.literal(ee._.DONATION_ITEM), data: eM }),
                ib = C.gK.model('DonationsData', { items: C.gK.array(iS) }),
                iv = eh
                    .props({ type: C.gK.literal(ec.t.DONATIONS), data: C.gK.maybe(ib), meta: eA })
                    .named('Donations')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                iK = C.gK.model('EditorialVibesDataModel', { items: C.gK.array(eL.G) }),
                iI = eh
                    .props({
                        type: C.gK.union(
                            C.gK.literal(ec.t.EDITORIAL_WAVES),
                            C.gK.literal(ec.t.META_TAG_WAVE),
                            C.gK.literal(ec.t.MICRO_GENRE_WAVE),
                            C.gK.literal(ec.t.MICRO_GENRE_SIMILAR_WAVE),
                            C.gK.literal(ec.t.META_TAG_SIMILAR_WAVE),
                            C.gK.literal(ec.t.EDITORIAL_WAVES_AGENT),
                            C.gK.literal(ec.t.META_TAG_WAVE_AGENT),
                            C.gK.literal(ec.t.MICRO_GENRE_WAVE_AGENT),
                            C.gK.literal(ec.t.MICRO_GENRE_SIMILAR_WAVE_AGENT),
                            C.gK.literal(ec.t.META_TAG_SIMILAR_WAVE_AGENT),
                        ),
                        data: C.gK.maybe(iK),
                        meta: eA,
                    })
                    .named('EditorialVibes')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                iL = C.gK.model('FamiliarYouAndArtistPickData', { blocks: C.gK.array(C.gK.union(tA, tL)) }).views((e) => ({
                    get familiarYou() {
                        return e.blocks.find((e) => tA.is(e));
                    },
                    get artistPick() {
                        return e.blocks.find((e) => tL.is(e));
                    },
                })),
                iT = eh
                    .props({ type: C.gK.literal(ec.t.FAMILIAR_YOU_AND_ARTIST_PICK), data: C.gK.maybe(iL) })
                    .named('FamiliarYouAndArtistPick')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i, l, r, s;
                            if ((null == (t = e.data) ? void 0 : t.familiarYou) || (null == (a = e.data) ? void 0 : a.artistPick))
                                return !!(
                                    (null == (l = e.data) || null == (i = l.familiarYou) ? void 0 : i.isVisible) ||
                                    (null == (s = e.data) || null == (r = s.artistPick) ? void 0 : r.isVisible)
                                );
                            return !1;
                        },
                        get objectsCount() {
                            var n, o;
                            return null != (o = null == (n = e.data) ? void 0 : n.blocks.length) ? o : 0;
                        },
                    })),
                ih = C.gK.model('InStyleDataItemTab', { id: C.gK.number, title: C.gK.string, covers: C.gK.array(C.gK.string) }),
                iN = C.gK.model('InStyleDataItem', { tab: ih, data: C.gK.array(ey.J) }),
                iA = C.gK.model('InStyleData', { items: C.gK.array(iN) }),
                iC = eh
                    .props({ type: C.gK.literal(ec.t.IN_STYLE), data: C.gK.maybe(iA), meta: eA })
                    .named('InStyle')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i;
                            let l = (null == (t = e.data) ? void 0 : t.items.length) === 0,
                                r = null == (i = e.data) || null == (a = i.items) ? void 0 : a.every((e) => !(null == e ? void 0 : e.data));
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !l || !r,
                            });
                        },
                        get objectsCount() {
                            var l, r;
                            return null != (r = null == (l = e.data) ? void 0 : l.items.length) ? r : 0;
                        },
                    })),
                iR = C.gK.model('ItemListData', { items: C.gK.array(aR) }),
                ik = eh
                    .props({ type: C.gK.literal(ec.t.ITEM_LIST), data: C.gK.maybe(iR), meta: eA })
                    .named('ItemList')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                iD = C.gK
                    .model('LikesData', { title: C.gK.string, cover: t6.$, playlistUuid: C.gK.maybe(C.gK.string), trackCovers: C.gK.array(t6.$), count: C.gK.number })
                    .views((e) => ({
                        get id() {
                            return e.playlistUuid;
                        },
                        get url() {
                            let { href: t } = (0, th.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                            return t;
                        },
                    })),
                i_ = C.gK.model('HistoryData', { title: C.gK.string, trackCovers: C.gK.array(t6.$), artists: C.gK.array(C.gK.string) }).views(() => ({
                    get id() {
                        return 'music-history';
                    },
                    get url() {
                        let { href: e } = (0, th.u)('/music-history');
                        return e;
                    },
                })),
                iP = C.gK.model('LikesAndHistoryData', { favorites: iD, history: i_ }),
                iO = eh
                    .props({ type: C.gK.literal(ec.t.LIKES_AND_HISTORY), data: C.gK.maybe(iP), meta: eA })
                    .named('LikesAndCount')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return !!((null == (t = e.data) ? void 0 : t.favorites) && (null == (a = e.data) ? void 0 : a.history));
                        },
                        get objectsCount() {
                            return 2;
                        },
                    })),
                iw = C.gK.model('MixesGridMixCardItem', {
                    id: C.gK.string,
                    title: C.gK.string,
                    weblink: C.gK.maybeNull(C.gK.string),
                    covers: C.gK.maybeNull(C.gK.array(t6.$)),
                }),
                iG = C.gK.model('MixesGridData', { items: C.gK.array(iw) }),
                iM = eh
                    .props({ type: C.gK.union(C.gK.literal(ec.t.MIXES_GRID), C.gK.literal(ec.t.MIXES_MUSIC)), data: C.gK.maybe(iG), meta: eA })
                    .named('MixesGrid')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNotEmpty: (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0,
                                isLoaded: e.isLoaded,
                                isLoading: e.isLoading,
                                isRejected: e.isRejected,
                                isNeededToLoad: e.isNeededToLoad,
                            });
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    }));
            var iU = a(91409);
            let iB = C.gK.model('MixesData', { items: C.gK.array(iU.f) }),
                iF = eh
                    .props({ type: C.gK.literal(ec.t.MIXES), data: C.gK.maybe(iB), meta: eA })
                    .named('Mixes')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                iV = C.gK.model('NeuromusicItem', {
                    title: C.gK.string,
                    stationId: C.gK.string,
                    imageUrl: C.gK.maybe(C.gK.string),
                    style: C.gK.maybe(C.gK.model({ backgroundColor: C.gK.maybe(C.gK.string), titleColor: C.gK.maybe(C.gK.string) })),
                }),
                ix = C.gK.model('NeuromusicData', { items: C.gK.array(iV) }),
                ij = eh
                    .props({ type: C.gK.literal(ec.t.NEUROMUSIC), data: C.gK.maybe(ix), meta: eA })
                    .named('Neuromusic')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    }));
            var iW = a(49337);
            let iX = [
                    'avatars.mds.yandex.net/get-music-misc/30221/img.68678806f4c3467d82bab43b/%%',
                    'avatars.mds.yandex.net/get-music-misc/34161/img.68678811e40cd01bff989e50/%%',
                    'avatars.mds.yandex.net/get-music-misc/30221/img.6867881aea3b324d5df9692f/%%',
                ],
                i$ = [
                    'avatars.mds.yandex.net/get-music-misc/2419084/img.686688add03ee35062c02822/%%',
                    'avatars.mds.yandex.net/get-music-misc/28592/img.6867878964ece217d515ffda/%%',
                    'avatars.mds.yandex.net/get-music-misc/30221/img.686787926dccf85a8a06c771/%%',
                ],
                iJ = C.gK
                    .model('NewReleasesDataItem', {
                        album: ey.J,
                        releaseDate: C.gK.maybe(C.gK.string),
                        coverUri: C.gK.maybe(C.gK.string),
                        coverColor: C.gK.maybe(C.gK.string),
                    })
                    .views((e) => ({
                        coverUriWithPlaceholder: (t) =>
                            (function (e) {
                                let { coverUri: t, artistId: a, theme: i } = e;
                                if (!(null == t ? void 0 : t.includes('2419084/img.6568f242071da73cabc5846c'))) return t;
                                let l = (Number(a) || 0) % 3;
                                return i === iW.S.Light ? iX[l] : i$[l];
                            })({ coverUri: e.coverUri, artistId: e.album.artistId, theme: t }),
                    })),
                iY = C.gK.model('NewReleasesData', { items: C.gK.array(iJ) }),
                iH = eh
                    .props({ type: C.gK.union(C.gK.literal(ec.t.NEW_RELEASES), C.gK.literal(ec.t.EDITORIAL_NEW_RELEASES)), data: C.gK.maybe(iY), meta: eA })
                    .named('NewReleases')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                iq = C.gK.model('NonMusicChartAlbumData', { items: C.gK.array(ey.J) }),
                iz = eh
                    .props({ type: C.gK.union(C.gK.literal(ec.t.CHART_ALBUMS), C.gK.literal(ec.t.PODCASTS_CHART_ALBUMS)), data: C.gK.maybe(iq), meta: eA })
                    .named('NonMusicChartAlbum')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                iQ = C.gK.model('NonMusicEditorialCompilationData', { items: C.gK.array(C.gK.union(aV, eK)) }),
                iZ = eh
                    .props({
                        type: C.gK.union(C.gK.literal(ec.t.NON_MUSIC_EDITORIAL_COMPILATION), C.gK.literal(ec.t.NON_MUSIC_CATEGORY)),
                        data: C.gK.maybe(iQ),
                        meta: eA,
                    })
                    .named('NonMusicEditorialCompilation')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                i0 = eh
                    .props({ type: C.gK.literal(ec.t.OVERVIEW), data: C.gK.undefined, meta: iy })
                    .named('Overview')
                    .views((e) => ({
                        get isVisible() {
                            return !!e.meta.message;
                        },
                        get objectsCount() {
                            return 1;
                        },
                    })),
                i1 = C.gK.model('LandingPersonalPlaylistItem', { playlist: ev.I, playlistType: C.gK.string, description: C.gK.maybe(C.gK.string) }),
                i3 = C.gK.model('LandingPersonalPlaylistItem', { type: C.gK.literal(ee._.PERSONAL_PLAYLIST_ITEM), data: i1 }),
                i2 = C.gK.model('PersonalPlaylistsData', { items: C.gK.array(i3) }),
                i8 = eh
                    .props({ type: C.gK.union(C.gK.literal(ec.t.PERSONAL_PLAYLISTS), C.gK.literal(ec.t.REWIND_PLAYLISTS)), data: C.gK.maybe(i2), meta: eA })
                    .named('PersonalPlaylists')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    }));
            var i5 = a(29504),
                i6 = a(82401);
            let i9 = (e) => {
                    var t;
                    let a = (null == (t = e.tracks) ? void 0 : t.length) ? e.tracks.map((e) => ({ id: e })) : [];
                    return { id: e.id, name: e.name, tracks: (0, C.wg)(a) };
                },
                i4 = C.gK.model('PlaylistFiltersTrack', { id: C.gK.union(C.gK.string, C.gK.number) }),
                i7 = C.gK.model('PlaylistFiltersItem', { id: C.gK.string, name: C.gK.string, tracks: C.gK.array(i4) }),
                le = C.gK.model('LandingBlockClientMeta', {
                    title: C.gK.maybe(C.gK.string),
                    description: C.gK.maybe(C.gK.string),
                    viewAllActionLink: C.gK.maybeNull(C.gK.string),
                    showPolicy: C.gK.maybe(C.gK.string),
                    coverUri: C.gK.maybe(C.gK.string),
                });
            var lt = a(29671);
            let la = C.gK
                    .model('PlaylistWithTracksDataBase', {
                        totalItemsCount: C.gK.maybe(C.gK.number),
                        items: C.gK.array(H.v),
                        playlist: tK.$,
                        coverUri: C.gK.maybe(C.gK.string),
                        canShowEmptyBlock: C.gK.maybe(C.gK.boolean),
                        withRewindTrailerButton: C.gK.maybe(C.gK.boolean),
                    })
                    .views((e) => ({
                        getCoverUri(t) {
                            switch (t) {
                                case lt.z.DEFAULT:
                                    return e.playlist.coverUri;
                                case lt.z.CUSTOM:
                                    return e.coverUri;
                                default:
                                    var a;
                                    return null != (a = e.coverUri) ? a : e.playlist.coverUri;
                            }
                        },
                    })),
                li = C.gK
                    .compose(
                        C.gK.model('PlaylistWithTracksAndFiltersFilters', { items: C.gK.maybeNull(C.gK.array(i7)), activeFilter: C.gK.maybe(C.gK.string) }),
                        q.X,
                        D.p,
                    )
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isRejected || e.isLoading;
                        },
                        get activeFilterIndex() {
                            var t;
                            let a = null == (t = e.items) ? void 0 : t.findIndex((t) => t.id === e.activeFilter);
                            return void 0 !== a && a > -1 ? a : 0;
                        },
                    }))
                    .actions((e) => ({
                        setActiveFilter(t) {
                            t !== i5.Q.ALL ? (e.activeFilter = t) : (e.activeFilter = void 0);
                        },
                    })),
                ll = C.gK
                    .compose(
                        la.props({
                            likedTrackIds: C.gK.optional(C.gK.array(C.gK.string), () => []),
                            trackDetailsMap: C.gK.optional(C.gK.map(H.v), {}),
                            tracksLoading: C.gK.optional(q.X, () => ({ loadingState: M.G.IDLE })),
                            playlistLoading: C.gK.optional(q.X, () => ({ loadingState: M.G.IDLE })),
                            filters: C.gK.optional(li, () => ({ loadingState: M.G.IDLE })),
                        }),
                        D.p,
                    )
                    .named('PlaylistWithTracksAndFiltersData')
                    .views((e) => ({
                        get shouldShowEmptyPlaylist() {
                            return 0 === e.items.length && !e.tracksLoading.isLoading && !!e.canShowEmptyBlock;
                        },
                        get shouldLoadTracksMeta() {
                            return e.likedTrackIds.length > 0 && e.tracksLoading.isNeededToLoad;
                        },
                        get shouldLoadFilters() {
                            return e.likedTrackIds.length > 0 && e.filters.isNeededToLoad;
                        },
                        get visibleTrackIds() {
                            if (e.filters.activeFilter) {
                                var t;
                                let a = null == (t = e.filters.items) ? void 0 : t.find((t) => t.id === e.filters.activeFilter);
                                if (a) return a.tracks.slice(0, 8).map((e) => String(e.id));
                            }
                            return e.likedTrackIds.slice(0, 8);
                        },
                        get isLoading() {
                            return e.playlistLoading.isLoading || e.tracksLoading.isLoading;
                        },
                        get isRejected() {
                            return e.playlistLoading.isRejected || e.tracksLoading.isRejected;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getPlaylist: (0, C.L3)(function* () {
                                let { modelActionsLogger: a, usersResource: i, playlistResource: l } = (0, C._$)(e),
                                    { user: r } = (0, R.M)(e),
                                    s = r.account.data.uid;
                                if ((0, C._n)(e) && s) {
                                    e.playlistLoading.loadingState = M.G.PENDING;
                                    try {
                                        let a = yield i.getPlaylistWithTracksIds({
                                                userId: String(s),
                                                playlistKind: i6.j.LIKE,
                                                resumeStream: !1,
                                                trackMetaType: 'music',
                                            }),
                                            r = yield l.getPlaylist({ playlistUuid: a.playlistUuid, resumeStream: !1, richTracks: !1 });
                                        ((e.likedTrackIds = (0, C.wg)(r.tracks.map((e) => String(e.id)))),
                                            (e.totalItemsCount = e.likedTrackIds.length),
                                            0 === e.totalItemsCount && (e.canShowEmptyBlock = !0),
                                            (e.playlist = (0, tt.j)(r)),
                                            (e.playlistLoading.loadingState = M.G.RESOLVE),
                                            yield Promise.allSettled([t.getTracksMeta(), t.getFilters()]));
                                    } catch (t) {
                                        (a.error(t), (e.playlistLoading.loadingState = M.G.REJECT));
                                    }
                                }
                            }),
                            updateItemsFromCache() {
                                let a = [];
                                (e.visibleTrackIds.forEach((t) => {
                                    let i = e.trackDetailsMap.get(t);
                                    i && a.push(i);
                                }),
                                    t.setItems(a));
                            },
                            getTracksMeta: (0, C.L3)(function* () {
                                if (!(0, C._n)(e)) return;
                                let { tracksResource: a, modelActionsLogger: i } = (0, C._$)(e);
                                e.tracksLoading.loadingState = M.G.PENDING;
                                let l = e.visibleTrackIds.filter((t) => !e.trackDetailsMap.has(t));
                                if (!l.length) {
                                    (t.updateItemsFromCache(), (e.tracksLoading.loadingState = M.G.RESOLVE));
                                    return;
                                }
                                try {
                                    ((yield a.getTracksMeta({ trackIds: l })).forEach((t) => {
                                        let a = (0, eH.v)(t);
                                        e.trackDetailsMap.set(String(t.id), a);
                                    }),
                                        t.updateItemsFromCache(),
                                        (e.tracksLoading.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), (e.tracksLoading.loadingState = M.G.REJECT));
                                }
                            }),
                            getFilters: (0, C.L3)(function* () {
                                if (!(0, C._n)(e)) return;
                                let { filtersResource: t, modelActionsLogger: a } = (0, C._$)(e);
                                try {
                                    e.filters.loadingState = M.G.PENDING;
                                    let a = yield t.getTracksFilters({ trackIds: e.likedTrackIds }),
                                        i = ((e) => {
                                            let t = e.filters.map(i9);
                                            if (t.length < 3) return [];
                                            let a = t.find((e) => e.id === i5.Q.ALL);
                                            if (!a) return [];
                                            let i = t.filter((e) => e.tracks.length >= 8);
                                            return i.length < 2 ? [] : [a, ...i.slice(0, 7)];
                                        })(a);
                                    ((e.filters.items = (0, C.wg)(i)), (e.filters.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.filters.loadingState = M.G.REJECT));
                                }
                            }),
                            setItems(t) {
                                e.items.forEach((e) => {
                                    (0, C.Yo)(e);
                                });
                                let a = t.map((e) => (0, C.dV)(e));
                                e.items.replace(a);
                            },
                            handleFilterClick: (0, C.L3)(function* (a) {
                                (e.filters.setActiveFilter(a.id), yield t.getTracksMeta());
                            }),
                        };
                        return t;
                    }),
                lr = eh
                    .props({
                        type: C.gK.literal(ec.t.COLLECTION_FAVOURITE_PLAYLIST),
                        data: C.gK.optional(ll, () => ({
                            items: [],
                            playlist: { uuid: '', isAvailable: !0, uid: 0, kind: i6.j.LIKE, likesCount: 0, pendingLikesCount: 0 },
                        })),
                        meta: le,
                    })
                    .named('PlaylistWithTracksAndFilters')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i, l, r, s, n, o, d, g, u;
                            if ((e.isLoaded && 0 === e.data.items.length) || (null == (t = e.data) ? void 0 : t.canShowEmptyBlock)) return !0;
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: !!(
                                    e.isNeededToLoad ||
                                    (null == (a = e.data) ? void 0 : a.playlistLoading.isNeededToLoad) ||
                                    (null == (i = e.data) ? void 0 : i.tracksLoading.isNeededToLoad)
                                ),
                                isLoading: !!(
                                    e.isLoading ||
                                    (null == (l = e.data) ? void 0 : l.playlistLoading.isLoading) ||
                                    (null == (r = e.data) ? void 0 : r.tracksLoading.isLoading)
                                ),
                                isLoaded: !!(
                                    e.isLoaded &&
                                    (null == (s = e.data) ? void 0 : s.playlistLoading.isResolved) &&
                                    (null == (n = e.data) ? void 0 : n.tracksLoading.isResolved)
                                ),
                                isRejected: !!(
                                    e.isRejected ||
                                    (null == (o = e.data) ? void 0 : o.playlistLoading.isRejected) ||
                                    (null == (d = e.data) ? void 0 : d.tracksLoading.isRejected)
                                ),
                                isNotEmpty: !!((null == (g = e.data) ? void 0 : g.items.length) || (null == (u = e.data) ? void 0 : u.canShowEmptyBlock)),
                            });
                        },
                        get objectsCount() {
                            var c, m;
                            let t = null != (m = null == (c = e.data) ? void 0 : c.items.length) ? m : 0;
                            return t < 8 ? t : 8;
                        },
                    })),
                ls = la.named('PlaylistWithTracksData'),
                ln = eh
                    .props({
                        type: C.gK.union(
                            C.gK.literal(ec.t.OPEN_PLAYLIST),
                            C.gK.literal(ec.t.SMART_OPEN_PLAYLIST),
                            C.gK.literal(ec.t.NON_MUSIC_OPEN_PLAYLIST),
                            C.gK.literal(ec.t.COLLECTION_PLAYLIST_WITH_LIKES),
                        ),
                        data: C.gK.maybe(ls),
                        meta: eA,
                    })
                    .named('PlaylistWithTracks')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (null == (t = e.data) ? void 0 : t.canShowEmptyBlock) return !0;
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (a = e.data) ? void 0 : a.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var i, l;
                            let t = null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                            return t < 8 ? t : 8;
                        },
                    })),
                lo = C.gK.model('PromotionsDataItem', {
                    featureId: C.gK.string,
                    title: C.gK.string,
                    subtitle: C.gK.string,
                    weblink: C.gK.string,
                    imageUrl: C.gK.string,
                    advDisclaimer: C.gK.maybeNull(C.gK.string),
                }),
                ld = C.gK.model('PromotionsData', { items: C.gK.array(lo) }),
                lg = eh
                    .props({
                        type: C.gK.union(C.gK.literal(ec.t.PROMOTIONS), C.gK.literal(ec.t.EDITORIAL_PROMOTIONS), C.gK.literal(ec.t.NON_MUSIC_PROMOTIONS)),
                        data: C.gK.maybe(ld),
                        meta: eA,
                    })
                    .named('Promotions')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                lu = C.gK.model('Q2vSuggestion', { query: C.gK.string }),
                lc = C.gK.model('Q2vSuggestionsData', { suggestionsRequestId: C.gK.string, items: C.gK.array(lu) }),
                lm = eh
                    .props({ type: C.gK.literal(ec.t.Q2V_SUGGESTIONS), data: C.gK.maybe(lc), meta: eA })
                    .named('Q2vSuggestions')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            let {
                                    experiments: a,
                                    user: { hasPlus: i, isLumenAvailable: l },
                                } = (0, R.M)(e),
                                r = !!(null == (t = e.data) ? void 0 : t.items.length),
                                s = a.checkExperiment(k.z.WebNextQueryToVibeLumenOptionCheck, 'on');
                            if (!i || !a.checkExperiment(k.z.WebNextQueryToVibe, 'on') || (s && !l)) return !1;
                            if (r && (e.isNeededToLoad || e.isLoading)) return !0;
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: r,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                lp = C.gK.union(eE, eI, eb),
                ly = C.gK.model('RecentlyPlayedData', { items: C.gK.array(lp) }),
                lE = eh
                    .props({ type: C.gK.literal(ec.t.RECENTLY_PLAYED), data: C.gK.maybe(ly), meta: eA })
                    .named('RecentlyPlayed')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                lS = C.gK.model('LandingVibeItemData', { vibe: eL.G, cover: C.gK.maybeNull(t6.$) }),
                lb = C.gK.model('LandingVibeItem', { type: C.gK.literal(ee._.WAVE_ITEM), data: lS }),
                lv = C.gK.union(eb, eK, eE, aV, ax, lb, eT, ab),
                lK = C.gK.model('SearchHistoryData', { items: C.gK.array(lv) }),
                lI = eh
                    .props({ type: C.gK.union(C.gK.literal(ec.t.HISTORY), C.gK.literal(ec.t.SEARCH_HISTORY)), data: C.gK.maybe(lK), meta: eA })
                    .named('SearchHistory')
                    .views((e) => ({
                        get isVisible() {
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !0,
                            });
                        },
                        get objectsCount() {
                            var t, a;
                            return null != (a = null == (t = e.data) ? void 0 : t.items.length) ? a : 0;
                        },
                    })),
                lL = C.gK.model('SpecialThemeSettings', {
                    buttonColor: C.gK.maybeNull(C.gK.string),
                    textColor: C.gK.maybeNull(C.gK.string),
                    bgImageUrl: C.gK.maybeNull(C.gK.string),
                    imageUrl: C.gK.maybeNull(C.gK.string),
                    buttonTextColor: C.gK.maybeNull(C.gK.string),
                }),
                lT = C.gK.model('SpecialData', {
                    title: C.gK.maybe(C.gK.string),
                    subtitle: C.gK.maybe(C.gK.string),
                    buttonTitle: C.gK.maybe(C.gK.string),
                    imageUrl: C.gK.maybe(C.gK.string),
                    align: C.gK.maybeNull(C.gK.string),
                    weblink: C.gK.maybeNull(C.gK.string),
                    lightTheme: C.gK.maybeNull(lL),
                    darkTheme: C.gK.maybeNull(lL),
                    advDisclaimer: C.gK.maybeNull(C.gK.string),
                }),
                lh = eh
                    .props({ type: C.gK.literal(ec.t.SPECIAL), data: C.gK.maybe(lT), meta: eA })
                    .named('Special')
                    .views((e) => ({
                        get isVisible() {
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return !!e.data;
                        },
                        get objectsCount() {
                            return 0;
                        },
                    })),
                lN = C.gK.model('VibesDataItemTab', { id: C.gK.number, title: C.gK.string }),
                lA = C.gK.model('VibesDataItem', { tab: lN, data: C.gK.array(eL.G) }),
                lC = C.gK.model('VibesData', { items: C.gK.array(lA) }),
                lf = eh
                    .props({
                        type: C.gK.union(
                            C.gK.literal(ec.t.WAVES),
                            C.gK.literal(ec.t.SETS_BY_WAVES),
                            C.gK.literal(ec.t.WAVES_AGENT),
                            C.gK.literal(ec.t.SETS_BY_WAVES_AGENT),
                        ),
                        data: C.gK.maybe(lC),
                        meta: eA,
                    })
                    .named('Vibes')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i;
                            let l = (null == (t = e.data) ? void 0 : t.items.length) === 0,
                                r = null == (i = e.data) || null == (a = i.items) ? void 0 : a.every((e) => !(null == e ? void 0 : e.data));
                            return ep({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !l || !r,
                            });
                        },
                        get objectsCount() {
                            var l, r, s;
                            return null != (s = null == (r = e.data) || null == (l = r.items[0]) ? void 0 : l.data.length) ? s : 0;
                        },
                    })),
                lR = C.gK.model('WizardData', { title: C.gK.string, description: C.gK.maybe(C.gK.string), artists: C.gK.array(eS.P) }),
                lk = eh
                    .props({ type: C.gK.literal(ec.t.WIZARD), data: C.gK.maybe(lR), meta: eA })
                    .named('Wizard')
                    .views(() => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            return 0;
                        },
                    })),
                lD = C.gK.union(
                    am,
                    aL,
                    aw,
                    a1,
                    aJ,
                    aM,
                    ln,
                    lr,
                    iH,
                    eR,
                    lg,
                    lm,
                    lE,
                    iC,
                    i8,
                    lh,
                    lk,
                    lf,
                    iF,
                    ij,
                    iO,
                    iZ,
                    iz,
                    af,
                    il,
                    az,
                    iI,
                    ik,
                    i0,
                    aF,
                    iv,
                    aK,
                    aa,
                    ag,
                    im,
                    iE,
                    lI,
                    iM,
                    aX,
                    a4,
                    ar,
                    td,
                    tu,
                    tA,
                    tL,
                    tE,
                    an,
                    iT,
                    ia,
                    a2,
                    aP,
                ),
                l_ = C.gK.model('TabData', { id: C.gK.string, title: C.gK.string, subtitle: C.gK.maybe(C.gK.string), covers: C.gK.maybe(C.gK.array(C.gK.string)) }),
                lP = C.gK
                    .model('Tab', {
                        meta: C.gK.model({ id: C.gK.string, title: C.gK.string }),
                        data: C.gK.maybe(l_),
                        blocks: C.gK.array(lD),
                        shouldReloadNotification: C.gK.boolean,
                    })
                    .views((e) => ({
                        get hasErrorBlocks() {
                            return e.blocks.some((e) => e.isRejected && e.isVisible);
                        },
                    }))
                    .actions((e) => ({
                        setShouldReloadNotification(t) {
                            e.shouldReloadNotification = t;
                        },
                    })),
                lO = C.gK.compose(C.gK.model('TabsData', { data: C.gK.maybeNull(C.gK.array(lP)) }), D.p, q.X).actions((e) => ({
                    reset() {
                        ((e.loadingState = M.G.IDLE), e.destroyItems([e.data]));
                    },
                })),
                lw = C.gK
                    .compose(
                        C.gK.model('Tabs', {
                            meta: C.gK.maybeNull(C.gK.model({ selectedTabIndex: C.gK.number, source: C.gK.maybe(eN) })),
                            upperBlocks: C.gK.maybeNull(C.gK.array(lD)),
                            tabs: lO,
                        }),
                        q.X,
                    )
                    .views((e) => {
                        let t = {
                            get isEmpty() {
                                var a, i;
                                return !(null == (a = e.tabs.data) ? void 0 : a.length) && !(null == (i = e.upperBlocks) ? void 0 : i.length);
                            },
                            get isLoadedAndEmpty() {
                                return [M.G.RESOLVE, M.G.REJECT].includes(e.loadingState) && t.isEmpty;
                            },
                            get hasUpperBlocks() {
                                var l;
                                return !!(null == (l = e.upperBlocks) ? void 0 : l.some((e) => e.isVisible));
                            },
                        };
                        return t;
                    }),
                lG = lw
                    .props({ id: C.gK.optional(C.gK.string, ''), title: C.gK.optional(C.gK.string, '') })
                    .views((e) => ({
                        get isLoaded() {
                            return e.loadingState === M.G.RESOLVE || e.loadingState === M.G.REJECT;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getBlock: (0, C.L3)(function* (a) {
                                var i, l, r, s, n, o, d;
                                let g;
                                if (!a || (!('source' in a.meta) && ((g = a.type), !eJ.includes(g)) && !eX(a.type))) return;
                                if ((0, e$.Q)(a)) {
                                    null == (i = a.data) || i.blocks.forEach(t.getBlock);
                                    return;
                                }
                                let { landingResource: u, modelActionsLogger: c } = (0, C._$)(e);
                                try {
                                    if (((a.loadingState = eu.PENDING), eX(a.type))) {
                                        a.loadingState = eu.RESOLVE;
                                        return;
                                    }
                                    let { concerts: t } = (0, R.M)(e),
                                        i = yield u.getBlock({
                                            source:
                                                ((l = 'source' in a.meta ? a.meta.source : void 0),
                                                (r = a.type),
                                                (s = t.concertsLocationForRequest),
                                                l && t5.has(r) && (null == s ? void 0 : s.length) ? { ...l, locations: s } : l),
                                            type: a.type,
                                        });
                                    if (!(0, C._n)(a)) return;
                                    switch (((a.loadingState = eu.REJECT), a.type)) {
                                        case ec.t.CLIPS:
                                        case ec.t.ARTIST_CLIPS:
                                        case ec.t.COLLECTION_CLIPS:
                                            let g, c;
                                            'object' == typeof i &&
                                                null !== i &&
                                                'items' in i &&
                                                Array.isArray(i.items) &&
                                                (!i.items.length ||
                                                    ((g = i.items[0]),
                                                    'object' == typeof g && null !== g && 'type' in g && (g.type === ee._.CLIP || g.type === ee._.CLIP_ITEM))) &&
                                                ((c = a.type), (a.data = (0, C.wg)({ items: i.items.map(e8), canShowEmptyBlock: c === ec.t.COLLECTION_CLIPS })));
                                            break;
                                        case ec.t.WIZARD:
                                            'object' == typeof i && null !== i && 'title' in i && (a.data = t8(i));
                                            break;
                                        case ec.t.CHART_TRACKS:
                                            'chart' in i && (a.data = e3(i));
                                            break;
                                        case ec.t.NON_MUSIC_EDITORIAL_COMPILATION:
                                        case ec.t.NON_MUSIC_CATEGORY:
                                            'object' == typeof i && null !== i && 'items' in i && (a.data = tJ(i));
                                            break;
                                        case ec.t.CHART_ALBUMS:
                                        case ec.t.PODCASTS_CHART_ALBUMS:
                                            ((e) => {
                                                let t,
                                                    a = e.items;
                                                return !a.length || !!((t = a[0]) && 'object' == typeof t && 'type' in t && t.type === ee._.CHART_ALBUM_ITEM);
                                            })(i) &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) =>
                                                        ((e) => {
                                                            let { album: t, artists: a, likesCount: i, chart: l } = e;
                                                            return (0, C.wg)({ ...(0, et.s)({ album: t, artists: a, likesCount: i }), chart: l && (0, ti.w)(l) });
                                                        })({ album: e.data.album, likesCount: e.data.likesCount, chart: e.data.chart }),
                                                    );
                                                    return (0, C.wg)({ items: t });
                                                })(i));
                                            break;
                                        case ec.t.COLLECTION_ALBUMS:
                                            'likedAlbums' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).likedAlbums)
                                                            ? void 0
                                                            : t.map((e) => (0, et.s)({ album: e.data.album, artists: e.data.artists, trailer: e.data.trailer }));
                                                    return (0, C.wg)({ items: a, canShowEmptyBlock: !0 });
                                                })(i));
                                            break;
                                        case ec.t.COLLECTION_ARTISTS:
                                            'likedArtists' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).likedArtists)
                                                            ? void 0
                                                            : t.map((e) => (0, ei.a)({ artist: e.data.artist, trailer: e.data.trailer }));
                                                    return (0, C.wg)({ items: a, canShowEmptyBlock: !0 });
                                                })(i));
                                            break;
                                        case ec.t.COLLECTION_ARTISTS_AND_TOP:
                                            i &&
                                                'object' == typeof i &&
                                                'items' in i &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) => (0, ei.a)({ artist: e.data.artist, trailer: e.data.trailer }));
                                                    return (0, C.wg)({ items: t, canShowEmptyBlock: !0 });
                                                })(i));
                                            break;
                                        case ec.t.COLLECTION_TOP_ARTISTS:
                                            i &&
                                                'object' == typeof i &&
                                                'artists' in i &&
                                                Array.isArray(i.artists) &&
                                                (a.data = (0, C.wg)(
                                                    ((e) => {
                                                        let t = ((null == e ? void 0 : e.artists) || []).map((e) => ({
                                                            artist: (0, ei.a)({ artist: e.artist }),
                                                            listenTimeSeconds: e.listenTimeSeconds,
                                                            top: (0, ti.w)({ position: e.top.position, progress: e.top.progress }),
                                                        }));
                                                        return (0, C.wg)({ items: t });
                                                    })(i),
                                                ));
                                            break;
                                        case ec.t.PERSONAL_ARTISTS:
                                        case ec.t.NEW_STARS_ARTISTS:
                                        case ec.t.EDITORIAL_ARTISTS:
                                        case ec.t.META_TAG_POPULAR_ARTISTS:
                                        case ec.t.MICRO_GENRE_ARTISTS:
                                        case ec.t.MICRO_GENRE_TOP_ARTISTS:
                                        case ec.t.META_TAG_ARTISTS:
                                        case ec.t.SIMILAR_ARTISTS:
                                            'items' in i && (a.data = tw(i));
                                            break;
                                        case ec.t.COLLECTION_PLAYLISTS_CREATED:
                                            'createdPlaylists' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).createdPlaylists)
                                                            ? void 0
                                                            : t.map((e) =>
                                                                  (0, er.b)({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer }),
                                                              );
                                                    return (0, C.wg)({ items: a });
                                                })(i));
                                            break;
                                        case ec.t.COLLECTION_PLAYLISTS_LIKED:
                                            'likedPlaylists' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).likedPlaylists)
                                                            ? void 0
                                                            : t.map((e) =>
                                                                  (0, er.b)({
                                                                      playlist: e.data.playlist,
                                                                      generatedPlaylistType: e.data.generatedPlaylistType,
                                                                      likesCount: e.data.likesCount,
                                                                      trailer: e.data.trailer,
                                                                  }),
                                                              );
                                                    return (0, C.wg)({ items: a });
                                                })(i));
                                            break;
                                        case ec.t.OPEN_PLAYLIST:
                                        case ec.t.SMART_OPEN_PLAYLIST:
                                        case ec.t.NON_MUSIC_OPEN_PLAYLIST:
                                            'playlist' in i && (a.data = tY(i, a.id));
                                            break;
                                        case ec.t.COLLECTION_PLAYLIST_WITH_LIKES:
                                            'playlist' in i && (a.data = ta(i));
                                            break;
                                        case ec.t.NEW_RELEASES:
                                        case ec.t.EDITORIAL_NEW_RELEASES:
                                            'newReleases' in i && (a.data = t$(i));
                                            break;
                                        case ec.t.NEW_PLAYLISTS:
                                        case ec.t.EDITORIAL_COMPILATION:
                                        case ec.t.RECOMMENDED_PLAYLISTS:
                                        case ec.t.META_TAG_POPULAR_PLAYLISTS:
                                        case ec.t.META_TAG_NEW_ALBUMS:
                                        case ec.t.META_TAG_PLAYLISTS:
                                        case ec.t.MICRO_GENRE_ALBUMS:
                                        case ec.t.META_TAG_ALBUMS:
                                        case ec.t.ARTIST_PLAYLISTS:
                                        case ec.t.ARTIST_COMPILATIONS:
                                        case ec.t.ARTIST_ALBUMS:
                                        case ec.t.ARTIST_STUDIO_ALBUMS:
                                        case ec.t.ARTIST_SIMILAR_ENTITIES:
                                        case ec.t.COLLECTION_SIMILAR_ENTITIES:
                                            'items' in i && (a.data = eg(i));
                                            break;
                                        case ec.t.RECENTLY_PLAYED:
                                            'items' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).items)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  switch (e.type) {
                                                                      case ee._.PLAYLIST_ITEM:
                                                                          return en(e.data.playlist, e.data.trailer);
                                                                      case ee._.ALBUM_ITEM:
                                                                          return ea(e.data.album, e.data.artists, e.data.trailer);
                                                                      case ee._.ARTIST_ITEM:
                                                                          return el(e.data.artist, e.data.trailer);
                                                                  }
                                                              });
                                                    return (0, C.wg)({ items: a });
                                                })(i));
                                            break;
                                        case ec.t.IN_STYLE:
                                            'inStyleTabs' in i && (a.data = tB(i));
                                            break;
                                        case ec.t.PROMOTIONS:
                                        case ec.t.EDITORIAL_PROMOTIONS:
                                        case ec.t.NON_MUSIC_PROMOTIONS:
                                            'promotions' in i &&
                                                (a.data = ((e) => {
                                                    if (!Array.isArray(null == e ? void 0 : e.promotions)) return (0, C.wg)({});
                                                    let t =
                                                        null == e
                                                            ? void 0
                                                            : e.promotions.map((e) => {
                                                                  var t, a, i;
                                                                  return {
                                                                      featureId: (e = e || {}).featureId,
                                                                      title: e.title,
                                                                      subtitle: e.subtitle,
                                                                      weblink: null != (a = null == (t = e.action) ? void 0 : t.weblink) ? a : '',
                                                                      imageUrl: e.imageUrl,
                                                                      advDisclaimer: null != (i = e.advDisclaimer) ? i : null,
                                                                  };
                                                              });
                                                    return (0, C.wg)({ items: t });
                                                })(i));
                                            break;
                                        case ec.t.REWIND_PLAYLISTS:
                                        case ec.t.PERSONAL_PLAYLISTS:
                                            'items' in i && (a.data = tq(i));
                                            break;
                                        case ec.t.SPECIAL:
                                            'title' in i && (a.data = t0(i));
                                            break;
                                        case ec.t.COLLECTION_ALBUMS_PRESAVES:
                                            void 0 !== i.tabs &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).tabs)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let t = null == e ? void 0 : e.items.map(e6);
                                                                  return (0, C.wg)({ id: e.id, title: e.title, type: e.type, items: t, canShowEmptyBlock: !0 });
                                                              });
                                                    return (0, C.wg)({ tabs: a });
                                                })(i));
                                            break;
                                        case ec.t.WAVES:
                                        case ec.t.SETS_BY_WAVES:
                                            'waves' in i && (a.data = t2(i));
                                            break;
                                        case ec.t.WAVES_AGENT:
                                        case ec.t.SETS_BY_WAVES_AGENT:
                                            i && 'object' == typeof i && 'waves' in i && (a.data = t3(i));
                                            break;
                                        case ec.t.MIXES_GRID:
                                        case ec.t.MIXES_MUSIC:
                                            'object' == typeof i && null !== i && 'items' in i && (a.data = tj(i));
                                            break;
                                        case ec.t.MIXES:
                                            'items' in i && (a.data = { items: (0, C.wg)(i.items.map((e) => (0, tW.J)(e.data))) });
                                            break;
                                        case ec.t.NEUROMUSIC:
                                            'items' in i && (a.data = tX(i));
                                            break;
                                        case ec.t.LIKES_AND_HISTORY:
                                            'favorites' in i && (a.data = tV(i));
                                            break;
                                        case ec.t.CONCERTS_TOP:
                                        case ec.t.CONCERTS_PERSONAL:
                                        case ec.t.EDITORIAL_CONCERTS:
                                        case ec.t.VIEWED_CONCERTS:
                                            void 0 !== i.concerts && (a.data = tD(i));
                                            break;
                                        case ec.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED:
                                            'tabs' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).tabs)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let t =
                                                                      null == e
                                                                          ? void 0
                                                                          : e.items.map((e) =>
                                                                                (0, er.b)({
                                                                                    playlist: e.data.playlist,
                                                                                    generatedPlaylistType: e.data.generatedPlaylistType,
                                                                                    likesCount: e.data.likesCount,
                                                                                    trailer: e.data.trailer,
                                                                                }),
                                                                            );
                                                                  return (0, C.wg)({ id: e.id, title: e.title, type: e.type, items: t, canShowEmptyBlock: !0 });
                                                              });
                                                    return (0, C.wg)({ tabs: a });
                                                })(i));
                                            break;
                                        case ec.t.EDITORIAL_WAVES:
                                        case ec.t.META_TAG_WAVE:
                                        case ec.t.MICRO_GENRE_WAVE:
                                        case ec.t.MICRO_GENRE_SIMILAR_WAVE:
                                        case ec.t.META_TAG_SIMILAR_WAVE:
                                            'items' in i && (a.data = tU(i));
                                            break;
                                        case ec.t.EDITORIAL_WAVES_AGENT:
                                        case ec.t.META_TAG_WAVE_AGENT:
                                        case ec.t.MICRO_GENRE_WAVE_AGENT:
                                        case ec.t.MICRO_GENRE_SIMILAR_WAVE_AGENT:
                                        case ec.t.META_TAG_SIMILAR_WAVE_AGENT:
                                            i && 'object' == typeof i && 'items' in i && (a.data = tG(i));
                                            break;
                                        case ec.t.ITEM_LIST:
                                            'items' in i && (a.data = tF(i));
                                            break;
                                        case ec.t.DONATIONS:
                                            void 0 !== i.donations && (a.data = tO(i));
                                            break;
                                        case ec.t.CONTINUE_LISTEN:
                                            'object' == typeof i &&
                                                null !== i &&
                                                'bookshelf' in i &&
                                                (a.data = ((e) => {
                                                    let { bookshelf: t, newEpisodes: a, lastPlayed: i } = e;
                                                    return (0, C.wg)({
                                                        bookshelf: {
                                                            title: t.title,
                                                            covers: (t.covers || []).map(t_),
                                                            bookCount: t.bookCount,
                                                            podcastCount: t.podcastCount,
                                                        },
                                                        newEpisodes: { title: a.title, covers: (a.covers || []).map(t_), trackCount: a.trackCount },
                                                        lastPlayed:
                                                            i &&
                                                            ((e) => {
                                                                let {
                                                                    type: t,
                                                                    data: { track: a, album: i, playlist: l, durationTotal: r, durationLeft: s },
                                                                } = e;
                                                                return (0, C.wg)({
                                                                    type: t,
                                                                    data: {
                                                                        album: t === tc._.ALBUM && i ? (0, et.s)({ album: i }) : void 0,
                                                                        playlist: t !== tc._.ALBUM && l ? (0, er.b)({ playlist: l }) : void 0,
                                                                        track: (0, eH.v)(a),
                                                                        albumDuration: r,
                                                                        albumDurationLeft: s,
                                                                    },
                                                                });
                                                            })(i),
                                                    });
                                                })(i));
                                            break;
                                        case ec.t.SIMPLE_ALBUM_PROMO:
                                        case ec.t.ALBUM_PROMO:
                                            i && 'object' == typeof i && 'albumBanners' in i && (a.data = tz(i));
                                            break;
                                        case ec.t.ARTIST_RECOMMENDATIONS_PROMO:
                                        case ec.t.SIMPLE_ARTIST_RECOMMENDATIONS_PROMO:
                                            i && 'object' == typeof i && 'albumBanners' in i && (a.data = eZ(i));
                                            break;
                                        case ec.t.COLLECTION_DOWNLOADED_TRACKS:
                                            i &&
                                                'object' == typeof i &&
                                                'tracks' in i &&
                                                (a.data = ((e) => {
                                                    let t = (null == e ? void 0 : e.tracks) || [],
                                                        a = t.slice(0, 8).map((e) => (0, eH.v)(e));
                                                    return (0, C.wg)({ items: a, rawTracks: t });
                                                })(i));
                                            break;
                                        case ec.t.HISTORY:
                                        case ec.t.SEARCH_HISTORY:
                                            i &&
                                                'object' == typeof i &&
                                                'items' in i &&
                                                Array.isArray(i.items) &&
                                                (a.data = ((e) => {
                                                    let t = e.items
                                                        .map((e) => {
                                                            switch (e.type) {
                                                                case ee._.ALBUM_ITEM:
                                                                    return ea(e.data.album, e.data.artists, e.data.trailer);
                                                                case ee._.ARTIST_ITEM:
                                                                    return el(e.data.artist, e.data.trailer);
                                                                case ee._.TRACK_ITEM:
                                                                    return te(e);
                                                                case ee._.LIKED_PLAYLIST_ITEM:
                                                                    return es({
                                                                        playlist: e.data.playlist,
                                                                        likesCount: e.data.likesCount,
                                                                        trailer: e.data.trailer,
                                                                        tracksCount: e.data.trackCount,
                                                                    });
                                                                case ee._.WAVE_ITEM:
                                                                    let t;
                                                                    return (
                                                                        (t = e),
                                                                        (0, C.wg)({
                                                                            type: ee._.WAVE_ITEM,
                                                                            data: {
                                                                                cover: t.data.cover ? (0, e9.p)(t.data.cover) : void 0,
                                                                                vibe: (0, tM.e)(t.data.wave),
                                                                            },
                                                                        })
                                                                    );
                                                                case ee._.WAVE_AGENT_ITEM:
                                                                    return ed(e);
                                                                case ee._.NON_MUSIC_ALBUM_ITEM:
                                                                    return e7({
                                                                        album: e.data.album,
                                                                        likesCount: e.data.likesCount,
                                                                        bookmateOptionRequired: e.data.bookmateOptionRequired,
                                                                    });
                                                                case ee._.CLIP_ITEM:
                                                                case ee._.CLIP:
                                                                    return { type: e.type, data: e2({ clip: e.data.clip, artists: e.data.artists }) };
                                                                case ee._.QUERY_TO_VIBE_ITEM:
                                                                    let a;
                                                                    return (
                                                                        (a = e), (0, C.wg)({ type: ee._.QUERY_TO_VIBE_ITEM, data: (0, eo.l)(a.data.wave, a.data.agent) })
                                                                    );
                                                                default:
                                                                    return;
                                                            }
                                                        })
                                                        .filter((e) => e);
                                                    return (0, C.wg)({ items: t });
                                                })(i));
                                            break;
                                        case ec.t.Q2V_SUGGESTIONS:
                                            i &&
                                                'object' == typeof i &&
                                                'suggestionsRequestId' in i &&
                                                'string' == typeof i.suggestionsRequestId &&
                                                'items' in i &&
                                                Array.isArray(i.items) &&
                                                i.items.every((e) => !!(e && 'object' == typeof e && 'query' in e && 'string' == typeof e.query)) &&
                                                (a.data = tQ(i));
                                            break;
                                        case ec.t.COLLECTION_KIDS:
                                            i &&
                                                'object' == typeof i &&
                                                'items' in i &&
                                                Array.isArray(i.items) &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) => {
                                                        switch (e.type) {
                                                            case ee._.TRACK_ITEM:
                                                                return te(e);
                                                            case ee._.LIKED_PLAYLIST_ITEM:
                                                                return es({
                                                                    playlist: e.data.playlist,
                                                                    likesCount: e.data.likesCount,
                                                                    trailer: e.data.trailer,
                                                                    tracksCount: e.data.trackCount,
                                                                });
                                                            case ee._.NON_MUSIC_ALBUM_ITEM:
                                                                return e7({
                                                                    album: e.data.album,
                                                                    likesCount: e.data.likesCount,
                                                                    bookmateOptionRequired: e.data.bookmateOptionRequired,
                                                                });
                                                        }
                                                    });
                                                    return (0, C.wg)({ items: t });
                                                })(i));
                                            break;
                                        case ec.t.ARTIST_CONCERTS:
                                            i &&
                                                'object' == typeof i &&
                                                'concerts' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = e.concerts)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let { concert: t, minPrice: a } = e;
                                                                  return { ...(0, eY.h)(t, a) };
                                                              });
                                                    return (0, C.wg)({ items: a });
                                                })(i));
                                            break;
                                        case ec.t.ARTIST_POPULAR_TRACKS:
                                            i && 'object' == typeof i && 'tracks' in i && i.tracks && (a.data = (0, C.wg)({ items: i.tracks.map((e) => (0, eH.v)(e)) }));
                                            break;
                                        case ec.t.ARTIST_RELEASE:
                                            i &&
                                                'object' == typeof i &&
                                                'release' in i &&
                                                i.release &&
                                                (a.data = ((e) => {
                                                    let { album: t, artists: a, releaseDate: i, trailer: l } = e.release;
                                                    return { album: (0, et.s)({ album: t, artists: a, trailer: l, releaseDate: i }), releaseDate: i };
                                                })(i));
                                            break;
                                        case ec.t.FAMILIAR_YOU:
                                            i &&
                                                'object' == typeof i &&
                                                (a.data = (0, C.wg)({
                                                    vibeTrackCount: null == (n = i.wave) ? void 0 : n.trackCount,
                                                    collectionTrackCount: null == (o = i.collection) ? void 0 : o.trackCount,
                                                    collectionAlbumCount: null == (d = i.collection) ? void 0 : d.albumCount,
                                                }));
                                            break;
                                        case ec.t.ARTIST_PICK:
                                            i &&
                                                'object' == typeof i &&
                                                'artists' in i &&
                                                i.artists &&
                                                'playlist' in i &&
                                                i.playlist &&
                                                (a.data = ((e) => {
                                                    let t = e.artists.map((e) => (0, ei.a)({ artist: e }));
                                                    return (0, C.wg)({ playlist: (0, er.b)({ playlist: e.playlist }), artists: t });
                                                })(i));
                                            break;
                                        case ec.t.ARTIST_UPCOMING_RELEASE:
                                            i &&
                                                'object' == typeof i &&
                                                'release' in i &&
                                                i.release &&
                                                'presaved' in i &&
                                                (a.data = ((e) => {
                                                    let { album: t, artists: a, releaseDate: i } = e.release;
                                                    return {
                                                        album: ((e) => {
                                                            var t;
                                                            let { album: a, artists: i, releaseDate: l, isPresave: r } = e,
                                                                { disclaimers: s } = (0, e0.f)(a);
                                                            return (0, C.wg)({
                                                                id: a.id,
                                                                title: a.title,
                                                                type: a.albumType,
                                                                coverUri: null == (t = a.cover) ? void 0 : t.uri,
                                                                isPresave: r,
                                                                releaseDate: l,
                                                                disclaimers: s,
                                                                artists: null == i ? void 0 : i.map((e) => (0, ei.a)({ artist: e })),
                                                            });
                                                        })({ album: t, artists: a, releaseDate: i, isPresave: e.presaved }),
                                                    };
                                                })(i));
                                            break;
                                        case ec.t.CONCERT_PLACE:
                                            'object' == typeof i &&
                                                null !== i &&
                                                'map' in i &&
                                                (a.data = ((e) => {
                                                    let t = e.metroStations ? e.metroStations.map(tk) : null;
                                                    return (0, C.wg)({ place: e.place, city: e.city, address: e.address, metroStations: t, map: e.map });
                                                })(i));
                                            break;
                                        case ec.t.COLLECTION_WAVE_AGENT:
                                            i && 'object' == typeof i && 'wave' in i && 'agent' in i && (a.data = (0, C.wg)({ vibe: (0, eo.l)(i.wave, i.agent) }));
                                            break;
                                        case ec.t.COLLECTION_WAVE_ROOMS:
                                            i && Array.isArray(i) && (a.data = (0, C.wg)({ items: i.map(tr) }));
                                            break;
                                        case ec.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS:
                                            i &&
                                                'object' == typeof i &&
                                                'artists' in i &&
                                                (a.data = ((e) => {
                                                    let t = e.artists.map((e) => {
                                                        let t = e.items
                                                            .map((e) => {
                                                                switch (e.type) {
                                                                    case ee._.MENU_ITEM:
                                                                        return e4(e);
                                                                    case ee._.WAVE_AGENT_ITEM:
                                                                        return ed(e);
                                                                    default:
                                                                        return;
                                                                }
                                                            })
                                                            .filter((e) => void 0 !== e);
                                                        return { artist: (0, ei.a)({ artist: e.artist }), items: t };
                                                    });
                                                    return (0, C.wg)({ artists: t });
                                                })(i));
                                    }
                                    a.loadingState = eu.RESOLVE;
                                } catch (e) {
                                    (c.error(e),
                                        (0, C._n)(a) &&
                                            ((a.loadingState = eu.REJECT),
                                            e instanceof O.GX && (e.statusCode === O.X1.NOT_FOUND || e.statusCode === O.X1.BAD_REQUEST) && (a.isNotFound = !0)));
                                }
                            }),
                            getTabData: (0, C.L3)(function* (t) {
                                let { landingResource: a, modelActionsLogger: i } = (0, C._$)(e);
                                try {
                                    var l;
                                    e.tabs.loadingState = M.G.PENDING;
                                    let i = yield a.getBlock({ source: t }),
                                        r = t1(i) || [];
                                    (null == (l = e.tabs.data) ||
                                        l.forEach((e, t) => {
                                            let a = r.find((t) => t.title === e.meta.title);
                                            e.data = a || r[t];
                                        }),
                                        (e.tabs.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), (e.loadingState = M.G.REJECT));
                                }
                            }),
                            async prefetchBlocks(a) {
                                var i, l, r;
                                let s = null != a ? a : 0,
                                    n = [];
                                ((null == (i = e.meta) ? void 0 : i.source) && n.push(t.getTabData(e.meta.source)),
                                    null == (l = e.upperBlocks) ||
                                        l.forEach((e) => {
                                            s > 0 && ((0, tS.v)(e.meta) || eX(e.type)) && (s--, n.push(t.getBlock(e)));
                                        }),
                                    null == (r = e.tabs.data) ||
                                        r.forEach((e) => {
                                            e.blocks.slice(0, s).forEach((e) => {
                                                ((0, tS.v)(e.meta) || eX(e.type)) && n.push(t.getBlock(e));
                                            });
                                        }),
                                    n.length > 0 && (await Promise.allSettled(n)));
                            },
                            getSkeleton: (0, C.L3)(function* (a, i) {
                                let { landingResource: l, modelActionsLogger: r } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING)
                                    try {
                                        e.loadingState = M.G.PENDING;
                                        let r = yield l.getSkeleton(a),
                                            s = tR(null == r ? void 0 : r.blocks);
                                        (s &&
                                            ((e.id = r.id),
                                            (e.title = r.title),
                                            (e.meta = (0, C.wg)(s.meta)),
                                            (e.upperBlocks = (0, C.wg)(s.upperBlocks)),
                                            (e.tabs.data = (0, C.wg)(s.tabs.data)),
                                            yield t.prefetchBlocks(null == i ? void 0 : i.preloadBlocksCount)),
                                            e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                                    } catch (t) {
                                        (r.error(t), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                    }
                            }),
                            getArtistSkeleton: (0, C.L3)(function* (a, i) {
                                let { artistsResource: l, modelActionsLogger: r } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING)
                                    try {
                                        e.loadingState = M.G.PENDING;
                                        let r = yield l.getSkeleton(a),
                                            s = tR(null == r ? void 0 : r.blocks);
                                        (s &&
                                            ((e.id = r.id),
                                            (e.title = r.title),
                                            (e.meta = (0, C.wg)(s.meta)),
                                            (e.upperBlocks = (0, C.wg)(s.upperBlocks)),
                                            void 0 !== s.tabs && (e.tabs.data = (0, C.wg)(s.tabs.data)),
                                            yield t.prefetchBlocks(null == i ? void 0 : i.preloadBlocksCount)),
                                            e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                                    } catch (t) {
                                        (r.error(t), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                    }
                            }),
                            getConcertSkeleton: (0, C.L3)(function* (a, i) {
                                let { concertsResource: l, modelActionsLogger: r } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING)
                                    try {
                                        e.loadingState = M.G.PENDING;
                                        let r = yield l.getSkeleton(a),
                                            s = tR(null == r ? void 0 : r.blocks);
                                        (s &&
                                            ((e.id = r.id),
                                            (e.title = r.title),
                                            (e.meta = (0, C.wg)(s.meta)),
                                            (e.upperBlocks = (0, C.wg)(s.upperBlocks)),
                                            void 0 !== s.tabs && (e.tabs.data = (0, C.wg)(s.tabs.data)),
                                            yield t.prefetchBlocks(null == i ? void 0 : i.preloadBlocksCount)),
                                            e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                                    } catch (t) {
                                        (r.error(t), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                    }
                            }),
                            reset() {
                                ((e.loadingState = M.G.IDLE), (e.meta = null), e.tabs.reset(), (e.upperBlocks = null));
                            },
                        };
                        return t;
                    }),
                lM = C.gK.model('ArtistBrandedButton', { title: C.gK.maybeNull(C.gK.string), url: C.gK.maybeNull(C.gK.string) }),
                lU = C.gK
                    .model('ArtistMeta', {
                        artist: eS.P,
                        donationUrl: C.gK.maybe(C.gK.string),
                        lastMonthListeners: C.gK.maybe(C.gK.number),
                        brandedButton: C.gK.maybe(lM),
                        covers: C.gK.maybeNull(C.gK.array(C.gK.string)),
                    })
                    .views((e) => ({
                        get hasCovers() {
                            var t;
                            return !!(null == (t = e.covers) ? void 0 : t.length);
                        },
                    }));
            var lB = a(75173);
            let lF = /^https:\/\/tips\.yandex\.ru\//,
                lV = (e) => lF.test(null != e ? e : '');
            var lx = a(23218),
                lj = a(4562);
            let lW = C.gK
                    .compose(
                        C.gK.model('ArtistAlbumsPage', {
                            pagesLoader: (0, lx.I)(ey.J),
                            variant: C.gK.maybeNull(C.gK.enumeration(Object.values(lj.h))),
                            errorStatusCode: C.gK.maybeNull(C.gK.number),
                        }),
                        D.p,
                    )
                    .views((e) => ({
                        get isNotFound() {
                            var t, a;
                            let i = e.pagesLoader.isSomePageResolved && (null != (a = null == (t = e.pagesLoader.items) ? void 0 : t.length) ? a : 0) === 0,
                                l = e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST;
                            return (e.pagesLoader.isInitialRequestRejected && l) || i;
                        },
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get items() {
                            var i;
                            return null != (i = e.pagesLoader.items) ? i : [];
                        },
                    }))
                    .actions((e) => ({
                        setVariant: (t) => {
                            e.variant = t;
                        },
                        getData: (0, C.L3)(function* (t) {
                            let { artistId: a, page: i = 0, pageSize: l = 20, sort: r, preloadedAlbums: s } = t,
                                { artistsResource: n, modelActionsLogger: o } = (0, C._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, M.G.PENDING);
                                    let t = { artistId: a, page: i, pageSize: l, sort: { sortBy: null == r ? void 0 : r.sortBy } },
                                        o = s;
                                    if (!o)
                                        switch (e.variant) {
                                            case lj.h.COMPILATIONS:
                                                o = yield n.getAlsoAlbums(t);
                                                break;
                                            case lj.h.DISCOGRAPHY:
                                                o = yield n.getDiscographyAlbums(t);
                                                break;
                                            default:
                                                o = yield n.getDirectAlbums(t);
                                        }
                                    let d = o.albums.map(ek.p);
                                    e.pagesLoader.setItems(d, { page: i, pager: { page: i, perPage: l, total: o.pager.total } });
                                } catch (t) {
                                    (o.error(t),
                                        t instanceof O.GX &&
                                            (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = O.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: a8.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            ((e.variant = null), (e.errorStatusCode = null), e.pagesLoader.reset());
                        },
                    })),
                lX = C.gK
                    .model('ArtistClipsPage', { pagesLoader: (0, lx.I)(aS), errorStatusCode: C.gK.maybeNull(C.gK.number) })
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
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
                        get items() {
                            var t;
                            return null != (t = e.pagesLoader.items) ? t : [];
                        },
                        get isNotFound() {
                            return this.isRejected && e.errorStatusCode === O.X1.NOT_FOUND;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, C.L3)(function* (t) {
                            let { artistId: a, page: i = 0, pageSize: l = 20, preloadedClips: r } = t,
                                { artistsResource: s, modelActionsLogger: n } = (0, C._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, M.G.PENDING);
                                    let t = r;
                                    t || (t = yield s.getClips({ artistId: a, page: i, pageSize: l }));
                                    let n = t.items.map((e) => e2({ clip: e.data.clip, artists: e.data.artists }));
                                    e.pagesLoader.setItems(n, { page: i, pager: t.pager });
                                } catch (t) {
                                    (n.error(t),
                                        e.pagesLoader.setItems(null, { responseStatus: a8.F.ERROR, page: i }),
                                        t instanceof O.GX &&
                                            (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = O.X1.NOT_FOUND));
                                }
                        }),
                        reset() {
                            (e.pagesLoader.reset(), (e.errorStatusCode = null));
                        },
                    }));
            var l$ = a(68093),
                lJ = a(69274),
                lY = a(1645);
            let lH = (e) => {
                    var t, a, i, l, r;
                    return (0, C.wg)({
                        id: e.id,
                        dataSessionId: null != (l = e['data-session-id']) ? l : '',
                        datetime: e.datetime && (0, lJ.A)(e.datetime),
                        city: e.city,
                        place: e.place,
                        contentRating: e.contentRating,
                        price: (0, lY.J)(e.minPrice),
                        cashbackTitle: null == (t = e.cashback) ? void 0 : t.title,
                        cashbackValuePercent: null == (a = e.cashback) ? void 0 : a.valuePercent,
                        title: e.concertTitle,
                        eventKind: null != (r = null == (i = e.eventInfo) ? void 0 : i.type) ? r : l$.Z.UNSPECIFIED,
                    });
                },
                lq = C.gK
                    .compose(
                        C.gK.model('ArtistConcertsPage', {
                            errorStatusCode: C.gK.maybeNull(C.gK.number),
                            concerts: C.gK.maybeNull(C.gK.array(ai.a)),
                            artistTitle: C.gK.maybeNull(C.gK.string),
                        }),
                        D.p,
                        q.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === M.G.PENDING;
                        },
                        get isNotFound() {
                            var t;
                            let a = e.isResolved && (null == (t = e.concerts) ? void 0 : t.length) === 0,
                                i = e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST;
                            return (e.isRejected && i) || a;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, C.L3)(function* (t) {
                            let { artistId: a, preloadedConcerts: i } = t,
                                { artistsResource: l, modelActionsLogger: r } = (0, C._$)(e);
                            if (e.loadingState !== M.G.PENDING)
                                try {
                                    e.loadingState = M.G.PENDING;
                                    let t = null == i ? void 0 : i.concerts,
                                        r = null == i ? void 0 : i.artistTitle;
                                    if (!t) {
                                        let i = (0, R.M)(e).concerts.concertsLocationForRequest,
                                            s = yield l.getConcerts({ artistId: a, locations: i });
                                        ((t = s.concerts), (r = s.artistTitle));
                                    }
                                    ((e.concerts = (0, C.wg)(t.map(lH))), (e.artistTitle = null != r ? r : null), (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (r.error(t),
                                        t instanceof O.GX &&
                                            (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = O.X1.NOT_FOUND),
                                        e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = M.G.IDLE), (e.errorStatusCode = null), (e.artistTitle = null), e.destroyItems([e.concerts]));
                        },
                    }));
            var lz = a(32110);
            let lQ = (e) => (0, C.wg)({ ...(0, et.s)({ album: e, artists: e.artists }), version: e.version }),
                lZ = C.gK
                    .compose(
                        C.gK.model('ArtistFamiliarPage', {
                            errorStatusCode: C.gK.maybeNull(C.gK.number),
                            vibeTracks: C.gK.maybeNull(C.gK.array(H.v)),
                            collectionTracks: C.gK.maybeNull(C.gK.array(H.v)),
                            collectionAlbums: C.gK.maybeNull(C.gK.array(ey.J)),
                        }),
                        D.p,
                        q.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === M.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST;
                                return e.isRejected && t;
                            },
                            get hasCollectionEntities() {
                                var a, i;
                                return (
                                    (e.isResolved && Number(null == (a = e.collectionTracks) ? void 0 : a.length) > 0) ||
                                    Number(null == (i = e.collectionAlbums) ? void 0 : i.length) > 0
                                );
                            },
                            get shouldShowTitleBlocks() {
                                var l, r;
                                if (t.isLoading) return !0;
                                return (
                                    Number(null == (l = e.collectionTracks) ? void 0 : l.length) > 0 && Number(null == (r = e.collectionAlbums) ? void 0 : r.length) > 0
                                );
                            },
                            get hasVibeTracks() {
                                var s;
                                return Number(null == (s = e.vibeTracks) ? void 0 : s.length) > 0;
                            },
                            get collectionEntitiesData() {
                                var n, o;
                                return null != (o = null == (n = e.collectionTracks) ? void 0 : n.map(lz.$)) ? o : [];
                            },
                            get vibeEntitiesData() {
                                var d, g;
                                return null != (g = null == (d = e.vibeTracks) ? void 0 : d.map(lz.$)) ? g : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, C.L3)(function* (t) {
                            let { artistId: a, preloadedFamiliar: i } = t,
                                { artistsResource: l, modelActionsLogger: r } = (0, C._$)(e);
                            if (e.loadingState !== M.G.PENDING)
                                try {
                                    var s, n, o, d, g, u;
                                    e.loadingState = M.G.PENDING;
                                    let t = i;
                                    (t || (t = yield l.getFamiliarYou({ artistId: a, waveTracksLimit: 100, collectionTracksLimit: 100, collectionAlbumsLimit: 20 })),
                                        (e.vibeTracks = (0, C.wg)(null == (n = t.wave) || null == (s = n.tracks) ? void 0 : s.map((e) => (0, eH.v)(e)))),
                                        (e.collectionTracks = (0, C.wg)(null == (d = t.collection) || null == (o = d.tracks) ? void 0 : o.map((e) => (0, eH.v)(e)))),
                                        (e.collectionAlbums = (0, C.wg)(null == (u = t.collection) || null == (g = u.albums) ? void 0 : g.map(lQ))),
                                        (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (r.error(t),
                                        t instanceof O.GX &&
                                            (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = O.X1.NOT_FOUND),
                                        e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = M.G.IDLE), (e.errorStatusCode = null), e.destroyItems([e.vibeTracks, e.collectionTracks]));
                        },
                    }));
            var l0 = a(96692);
            let l1 = C.gK
                    .compose(
                        C.gK.model('ArtistSimilarArtistsPage', { errorStatusCode: C.gK.maybeNull(C.gK.number), similarArtists: C.gK.maybeNull(C.gK.array(eS.P)) }),
                        D.p,
                        q.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === M.G.PENDING;
                        },
                        get isNotFound() {
                            var t;
                            let a = e.isResolved && (null == (t = e.similarArtists) ? void 0 : t.length) === 0,
                                i = e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST;
                            return (e.isRejected && i) || a;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, C.L3)(function* (t) {
                            let { artistId: a, preloadedSimilarArtists: i } = t,
                                { artistsResource: l, modelActionsLogger: r } = (0, C._$)(e);
                            try {
                                e.loadingState = M.G.PENDING;
                                let t = i;
                                (t || (t = yield l.getSimilarArtists({ artistId: a })),
                                    (e.similarArtists = (0, C.wg)(t.similarArtists.map(l0.d))),
                                    e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                            } catch (t) {
                                (r.error(t),
                                    t instanceof O.GX && (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) && (e.errorStatusCode = O.X1.NOT_FOUND),
                                    e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                            }
                        }),
                        reset() {
                            ((e.loadingState = M.G.IDLE), (e.errorStatusCode = null), e.destroyItems([e.similarArtists]));
                        },
                    })),
                l3 = C.gK.model('CommonSubPage', { artistName: C.gK.maybeNull(C.gK.string) }),
                l2 = C.gK
                    .compose(
                        C.gK.model('FullTracksList', {
                            errorStatusCode: C.gK.maybeNull(C.gK.number),
                            ids: C.gK.maybeNull(C.gK.array(C.gK.string)),
                            tracks: C.gK.optional(C.gK.map(H.v), {}),
                        }),
                        D.p,
                        q.X,
                    )
                    .views((e) => ({
                        getTrackByIndex(t) {
                            if (!e.ids || !e.ids.length) return null;
                            let a = e.ids[t];
                            return (a && e.tracks.get(a)) || null;
                        },
                        get isNotFound() {
                            var t;
                            let a = e.isResolved && (null == (t = e.ids) ? void 0 : t.length) === 0,
                                i = e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST;
                            return (e.isRejected && i) || a;
                        },
                    }))
                    .actions((e) => ({
                        getTracksIds: (0, C.L3)(function* (t) {
                            let { artistId: a } = t,
                                { artistsResource: i, modelActionsLogger: l } = (0, C._$)(e);
                            try {
                                e.loadingState = M.G.PENDING;
                                let t = yield i.getArtistTrackIds({ artistId: a }),
                                    { sonataState: l } = (0, R.M)(e);
                                (l.setUnloadedEntitiesData(t.map((e) => (0, e_.l)(e))),
                                    (e.ids = (0, C.wg)(t)),
                                    e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                            } catch (t) {
                                (l.error(t),
                                    t instanceof O.GX && (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) && (e.errorStatusCode = O.X1.NOT_FOUND),
                                    e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                            }
                        }),
                        getTracks: (0, C.L3)(function* (t) {
                            let { trackIds: a } = t,
                                { tracksResource: i, modelActionsLogger: l } = (0, C._$)(e);
                            try {
                                let t = yield i.getTracksMeta({ trackIds: a, withProgress: !0 });
                                e.tracks.merge(t.reduce((e, t) => ((e[t.id] = (0, eH.v)(t)), e), {}));
                            } catch (e) {
                                l.error(e);
                            }
                        }),
                        reset() {
                            let { sonataState: t } = (0, R.M)(e);
                            (t.resetUnloadedEntitiesData(), (e.loadingState = M.G.IDLE), e.destroyItems([e.tracks, e.ids]));
                        },
                    }));
            var l8 = a(98487);
            let l5 = C.gK.compose(C.gK.model('OfflineArtistTrackIds', { ids: C.gK.maybeNull(C.gK.array(C.gK.string)) }), q.X, D.p).actions((e) => ({
                    getIds: (0, C.L3)(function* (t, a) {
                        let { modelActionsLogger: i } = (0, C._$)(e);
                        if (e.loadingState !== M.G.PENDING)
                            try {
                                e.loadingState = M.G.PENDING;
                                let i = yield a.getArtistTrackIdsByUser(t);
                                ((e.ids = (0, C.wg)(i)), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                            } catch (t) {
                                (i.error(t), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                            }
                    }),
                    reset() {
                        ((e.loadingState = M.G.IDLE), e.destroyItems([e.ids]));
                    },
                })),
                l6 = C.gK
                    .compose(C.gK.model('OfflineArtist', { id: C.gK.maybeNull(C.gK.string), meta: C.gK.maybeNull(lU), trackIds: l5, downloadedTracks: l8.b }), q.X, D.p)
                    .views((e) => ({
                        get isNotFound() {
                            return e.isResolved && !e.meta;
                        },
                    }))
                    .actions((e) => ({
                        setTracksCount: (t) => {
                            var a;
                            (null == (a = e.meta) ? void 0 : a.artist.counts) && (e.meta.artist.counts.tracks = t);
                        },
                        getArtist: (0, C.L3)(function* (t, a) {
                            let { modelActionsLogger: i } = (0, C._$)(e);
                            if (e.loadingState !== M.G.PENDING) {
                                e.id = t;
                                try {
                                    e.loadingState = M.G.PENDING;
                                    let i = yield a.getArtist(t);
                                    (i && (e.meta = (0, C.wg)({ artist: (0, l0.d)(i) })), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                }
                            }
                        }),
                        reset() {
                            ((e.id = null), (e.loadingState = M.G.IDLE), e.trackIds.reset(), e.downloadedTracks.reset(), e.destroyItems([e.meta]));
                        },
                    })),
                l9 = C.gK
                    .compose(
                        C.gK.model('ArtistPage', {
                            id: C.gK.maybeNull(C.gK.string),
                            meta: C.gK.maybeNull(lU),
                            landing: lG,
                            deprecationTargetArtistId: C.gK.maybeNull(C.gK.number),
                            albumsSubpage: lW,
                            fullTracksListSubpage: l2,
                            concertsSubpage: lq,
                            similarArtistsSubPage: l1,
                            clipsSubpage: lX,
                            familiarSubpage: lZ,
                            commonSubPage: l3,
                            offlineArtist: l6,
                            infoLoadingState: q.X,
                            infoErrorStatusCode: C.gK.maybeNull(C.gK.number),
                        }),
                        D.p,
                    )
                    .views((e) => {
                        let t = {
                            get isInfoNotFound() {
                                return e.infoLoadingState.isRejected && (e.infoErrorStatusCode === O.X1.NOT_FOUND || e.infoErrorStatusCode === O.X1.BAD_REQUEST);
                            },
                            get isInfoSomethingWentWrong() {
                                return e.infoLoadingState.isRejected && !t.isInfoNotFound;
                            },
                            get selfLink() {
                                if (!e.id) return '';
                                let { href: t } = (0, th.u)('/artist/:artistId', { params: { artistId: e.id } });
                                return t;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getInfo: (0, C.L3)(function* (t) {
                            let { artistId: a, preloadedArtist: i } = t,
                                { artistsResource: l, modelActionsLogger: r } = (0, C._$)(e);
                            if (((e.id = a), e.infoLoadingState.loadingState !== M.G.PENDING))
                                try {
                                    var s, n, o, d, g, u, c;
                                    let t;
                                    e.infoLoadingState.loadingState = M.G.PENDING;
                                    let r = i;
                                    r || (r = yield l.getInfo({ artistId: a }));
                                    let { artist: m, deprecation: p } = r;
                                    if (null == p ? void 0 : p.targetArtistId) {
                                        e.deprecationTargetArtistId = p.targetArtistId;
                                        return;
                                    }
                                    ((e.commonSubPage.artistName = m.name),
                                        (e.meta = (0, C.wg)(
                                            ((o = r),
                                            (0, C.wg)({
                                                artist: (0, ei.a)({ artist: o.artist, trailer: o.trailer, isComposer: o.artistType === lB.o.COMPOSER }),
                                                donationUrl: lV(null == (d = o.donation) ? void 0 : d.tipUrl) ? (null == (g = o.donation) ? void 0 : g.tipUrl) : void 0,
                                                lastMonthListeners: null == (u = o.stats) ? void 0 : u.lastMonthListeners,
                                                brandedButton: o.brandedButton ? ((t = o.brandedButton), (0, C.wg)({ title: t.title, url: t.action.weblink })) : void 0,
                                                covers:
                                                    null == (c = o.covers)
                                                        ? void 0
                                                        : c.map((e) => {
                                                              var t;
                                                              return null != (t = e.uri) ? t : '';
                                                          }),
                                            })),
                                        )),
                                        (null == (n = e.meta) || null == (s = n.artist) ? void 0 : s.resolveAllDisclaimers) &&
                                            (yield e.meta.artist.resolveAllDisclaimers()),
                                        e.infoLoadingState.loadingState !== M.G.IDLE && (e.infoLoadingState.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (r.error(t),
                                        t instanceof O.GX && (e.infoErrorStatusCode = t.statusCode),
                                        e.infoLoadingState.loadingState !== M.G.IDLE && (e.infoLoadingState.loadingState = M.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.infoLoadingState.loadingState = M.G.IDLE),
                                e.landing.reset(),
                                (e.id = null),
                                (e.deprecationTargetArtistId = null),
                                e.destroyItems([e.meta]));
                        },
                    }));
            var l4 = a(65455),
                l7 = a(99670);
            let re = (e) => !!e && (e === l7.x.ASC || e === l7.x.DESC);
            var rt = a(36786);
            let ra = C.gK.compose(C.gK.model('UpcomingAlbums', { items: C.gK.maybeNull(C.gK.array(tp)) }), D.p, q.X).actions((e) => ({
                    reset() {
                        ((e.loadingState = M.G.IDLE), e.destroyItems([e.items]));
                    },
                })),
                ri = C.gK
                    .compose(C.gK.model('CollectionAlbumsPage', { sort: C.gK.maybeNull(rt.w), pagesLoader: (0, lx.I)(ey.J), upcomingAlbums: ra }), D.p)
                    .views((e) => {
                        let t = {
                            get isAlbumsLoading() {
                                return !e.pagesLoader.isSomePageResolved;
                            },
                            get isLoading() {
                                return t.isAlbumsLoading || e.upcomingAlbums.isNeededToLoad || e.upcomingAlbums.isLoading;
                            },
                            get isUpcomingAlbumsLoading() {
                                return e.upcomingAlbums.isNeededToLoad || e.upcomingAlbums.isLoading;
                            },
                            get isUpcomingAlbumsEmpty() {
                                return !t.isUpcomingAlbumsLoading && (!e.upcomingAlbums.items || 0 === e.upcomingAlbums.items.length);
                            },
                            get isAlbumsEmpty() {
                                return e.pagesLoader.isEmpty;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get items() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, C.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: l = 20, sortBy: r, sortOrder: s, metaType: n } = t,
                                { usersResource: o, modelActionsLogger: d } = (0, C._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i)) {
                                ((e.sort = null), (0, l4.W)(r) && re(s) && (e.sort = (0, C.wg)({ sortBy: r, sortOrder: s })));
                                try {
                                    var g, u;
                                    e.pagesLoader.setPageState(i, M.G.PENDING);
                                    let t = yield o.getLikedAlbums({ userId: a, page: i, pageSize: l, sortBy: r, sortOrder: s, metaType: n }),
                                        d =
                                            null !=
                                            (u =
                                                null == (g = t.albums)
                                                    ? void 0
                                                    : g.map((e) => {
                                                          let { album: t } = e;
                                                          return (0, ek.p)(t);
                                                      }))
                                                ? u
                                                : [];
                                    e.pagesLoader.setItems(d, { page: i, pager: { page: i, perPage: l, total: t.pager.total } });
                                } catch (t) {
                                    (d.error(t), e.pagesLoader.setItems(null, { responseStatus: a8.F.ERROR, page: i }));
                                }
                            }
                        }),
                        getPresaves: (0, C.L3)(function* (t) {
                            let { userId: a } = t,
                                { usersResource: i, modelActionsLogger: l } = (0, C._$)(e);
                            if (!e.upcomingAlbums.isLoading)
                                try {
                                    var r;
                                    e.upcomingAlbums.loadingState = M.G.PENDING;
                                    let t = yield i.getPresaves({ userId: a, includeReleased: !1, includeUpcoming: !0 });
                                    ((e.upcomingAlbums.items = (0, C.wg)(null == (r = t.upcomingAlbums) ? void 0 : r.map(e5))),
                                        e.upcomingAlbumsLoadingState !== M.G.IDLE && (e.upcomingAlbums.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (l.error(t), e.upcomingAlbums.isNeededToLoad || (e.upcomingAlbums.loadingState = M.G.REJECT));
                                }
                        }),
                        reset() {
                            (e.pagesLoader.reset(), e.upcomingAlbums.reset(), e.destroyItems([e.sort]));
                        },
                    })),
                rl = C.gK.compose(C.gK.model('TopArtists', { items: C.gK.array(aZ) }), D.p, q.X).actions((e) => ({
                    reset() {
                        ((e.loadingState = M.G.IDLE), e.destroyItems([e.items]));
                    },
                })),
                rr = C.gK
                    .compose(C.gK.model('CollectionArtistsPage', { sort: C.gK.maybeNull(rt.w), pagesLoader: (0, lx.I)(eS.P), topArtists: rl }), D.p)
                    .views((e) => ({
                        get isLoadingTopArtists() {
                            return e.topArtists.isNeededToLoad || e.topArtists.isLoading;
                        },
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get items() {
                            var t;
                            return null != (t = e.pagesLoader.items) ? t : [];
                        },
                    }))
                    .actions((e) => ({
                        getDataTopArtists: (0, C.L3)(function* () {
                            let { personalResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            try {
                                var i, l;
                                e.topArtists.loadingState = M.G.PENDING;
                                let a = yield t.getTopArtists();
                                ((e.topArtists.items = (0, C.wg)(
                                    null !=
                                        (l =
                                            null == (i = a.artists)
                                                ? void 0
                                                : i.map((e) =>
                                                      ((e) => {
                                                          let t = (0, ei.a)({ artist: e.artist }),
                                                              a = (0, ti.w)(e.top);
                                                          return (0, C.wg)({ artist: t, listenTimeSeconds: e.listenTimeSeconds, top: a });
                                                      })(e),
                                                  ))
                                        ? l
                                        : [],
                                )),
                                    (e.topArtists.loadingState = M.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.topArtists.loadingState = M.G.REJECT));
                            }
                        }),
                        getData: (0, C.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: l = 20, sortBy: r, sortOrder: s } = t,
                                { usersResource: n, modelActionsLogger: o } = (0, C._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i)) {
                                ((e.sort = null), (0, l4.W)(r) && re(s) && (e.sort = (0, C.wg)({ sortBy: r, sortOrder: s })));
                                try {
                                    var d, g;
                                    e.pagesLoader.setPageState(i, M.G.PENDING);
                                    let t = yield n.getLikedArtists({ userId: a, page: i, pageSize: l, sortBy: r, sortOrder: s }),
                                        o = null != (g = null == (d = t.artists) ? void 0 : d.map(l0.d)) ? g : [];
                                    e.pagesLoader.setItems(o, { page: i, pager: { page: i, perPage: l, total: t.pager.total } });
                                } catch (t) {
                                    (o.error(t), e.pagesLoader.setItems(null, { responseStatus: a8.F.ERROR, page: i }));
                                }
                            }
                        }),
                        reset() {
                            (e.topArtists.reset(), e.pagesLoader.reset(), (e.sort = null));
                        },
                    })),
                rs = (e) => {
                    var t;
                    let a = null == (t = e.artists) ? void 0 : t.map((e) => (0, ei.a)({ artist: e }));
                    return (0, C.wg)({
                        ...((e) => {
                            let { available: t, disclaimers: a } = (0, e0.f)(e);
                            return (0, C.wg)({
                                clipId: e.clipId,
                                title: e.title,
                                thumbnail: e.thumbnail,
                                duration: e.duration,
                                previewUrl: e.previewUrl,
                                isAvailable: t,
                                version: e.version,
                                disclaimers: a,
                            });
                        })(e),
                        artists: a,
                    });
                };
            var rn = a(82745),
                ro = a(57483);
            let rd = C.gK
                    .compose(C.gK.model('CollectionClipsPageWillLike', { clips: C.gK.maybeNull(C.gK.array(aS)) }), q.X, D.p)
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isLoading || e.isRejected;
                        },
                        get isEmpty() {
                            var t;
                            return e.isResolved && (!e.clips || (null == (t = e.clips) ? void 0 : t.length) === 0);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, C.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            try {
                                e.loadingState = M.G.PENDING;
                                let a = yield t.getClipsWillLike({ page: 0, pageSize: 50 });
                                (a.clips && (e.clips = (0, C.wg)(a.clips.map(rs))), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                            }
                        }),
                        reset() {
                            ((e.loadingState = M.G.IDLE), e.destroyItems([e.clips]));
                        },
                    })),
                rg = C.gK
                    .compose(
                        C.gK.model('CollectionClipsPage', {
                            items: C.gK.array(C.gK.maybeNull(aS)),
                            pager: C.gK.maybeNull(ro.j),
                            alreadyRequestedPages: C.gK.map(C.gK.number),
                            pendingPages: C.gK.map(C.gK.number),
                            clipsWillLike: rd,
                        }),
                        q.X,
                        D.p,
                    )
                    .views((e) => ({
                        get isEmpty() {
                            return e.isResolved && (!e.pager || 0 === e.pager.total);
                        },
                        get isLoaded() {
                            return e.isResolved || e.isRejected;
                        },
                    }))
                    .actions((e) => ({
                        setInitialShimmer() {
                            e.items = (0, C.wg)(Array.from({ length: 20 }, () => null));
                        },
                        getData: (0, C.L3)(function* (t) {
                            var a;
                            let { userId: i, page: l = 0, pageSize: r = 20 } = t,
                                { usersResource: s, modelActionsLogger: n } = (0, C._$)(e);
                            if (
                                !(
                                    (e.pager && e.items.length >= (null == (a = e.pager) ? void 0 : a.total)) ||
                                    (e.loadingState === M.G.PENDING && e.pendingPages.has(l.toString()))
                                ) &&
                                !e.alreadyRequestedPages.has(l.toString())
                            ) {
                                'number' == typeof l && e.alreadyRequestedPages.set(l.toString(), l);
                                try {
                                    ((e.loadingState = M.G.PENDING), e.pendingPages.set(l.toString(), l));
                                    let t = yield s.getLikedClips({ userId: i, page: l, pageSize: r }),
                                        a = { page: l, perPage: r, total: t.pager.total };
                                    if (t.clips) {
                                        let i = t.clips.map(rs);
                                        ((0, rn.I)({ items: e.items, mappedRawItems: i, page: l, pageSize: r }), (e.items = (0, C.wg)(e.items.slice(0, a.total))));
                                    }
                                    ((e.pager = (0, C.wg)(a)), (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (n.error(t), (e.loadingState = M.G.REJECT));
                                } finally {
                                    e.pendingPages.delete(l.toString());
                                }
                            }
                        }),
                        reset() {
                            ((e.loadingState = M.G.IDLE),
                                (e.pager = null),
                                e.alreadyRequestedPages.clear(),
                                e.pendingPages.clear(),
                                e.destroyItems([e.items]),
                                e.clipsWillLike.reset());
                        },
                    })),
                ru = C.gK
                    .compose(
                        C.gK.model('CollectionNonMusicPage', {
                            items: C.gK.array(C.gK.maybeNull(ey.J)),
                            pager: C.gK.maybeNull(ro.j),
                            alreadyRequestedPages: C.gK.map(C.gK.number),
                            pendingPages: C.gK.map(C.gK.number),
                            requestsCount: C.gK.maybeNull(C.gK.number),
                        }),
                        q.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || (e.loadingState === M.G.PENDING && 0 === e.items.length);
                        },
                        get isEmptyItems() {
                            var t;
                            return !!(!(null == (t = e.items) ? void 0 : t.length) && e.requestsCount);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, C.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: l = 20, metaType: r } = t,
                                { usersResource: s, modelActionsLogger: n } = (0, C._$)(e);
                            if (!(e.loadingState === M.G.PENDING && e.pendingPages.has(''.concat(i))) && !e.alreadyRequestedPages.has(''.concat(i))) {
                                'number' == typeof i && e.alreadyRequestedPages.set(''.concat(i), i);
                                try {
                                    var o, d, g;
                                    ((e.loadingState = M.G.PENDING), e.pendingPages.set(''.concat(i), i));
                                    let t = yield s.getLikedAlbums({ userId: a, page: i, pageSize: l, metaType: r }),
                                        n = { page: i, perPage: l, total: t.pager.total };
                                    0 === e.items.length && (e.items = (0, C.wg)(Array.from({ length: n.total }, () => null)));
                                    let u =
                                        null !=
                                        (d =
                                            null == (o = t.albums)
                                                ? void 0
                                                : o.map((e) => {
                                                      let { album: t } = e;
                                                      return (0, ek.p)(t);
                                                  }))
                                            ? d
                                            : [];
                                    ((0, rn.I)({ items: e.items, mappedRawItems: u, page: i, pageSize: l }),
                                        (e.pager = (0, C.wg)(n)),
                                        (e.requestsCount = (null != (g = e.requestsCount) ? g : 0) + 1),
                                        e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (n.error(t), (e.loadingState = M.G.REJECT));
                                } finally {
                                    e.pendingPages.delete(''.concat(i));
                                }
                            }
                        }),
                        reset() {
                            ((e.loadingState = M.G.IDLE),
                                (e.items = (0, C.wg)([])),
                                e.pendingPages.clear(),
                                (e.pager = null),
                                e.alreadyRequestedPages.clear(),
                                (e.requestsCount = 0));
                        },
                    }));
            var rc = a(24169);
            let rm = (e) => ({ id: e.id, albumId: e.albumId, timestamp: e.timestamp }),
                rp = (e) => {
                    var t, a;
                    return (0, C.wg)({ ...(0, tt.j)(e), tracks: null != (a = null == e || null == (t = e.tracks) ? void 0 : t.map(rm)) ? a : [] });
                };
            var ry = a(45809),
                rE = a(58245);
            let rS = (e, t, a, i) => {
                    if (a === i) return;
                    let l = e.findIndex((e) => (null == e ? void 0 : e.key) === a),
                        r = e.findIndex((e) => (null == e ? void 0 : e.key) === i);
                    if (l < 0 || r < 0 || l >= t.length || r >= t.length) return;
                    let s = e[l],
                        n = e[r];
                    if (s && n && !s.isFavouritePlaylist && !n.isFavouritePlaylist && !s.generatedPlaylistType && !n.generatedPlaylistType) return { from: l, to: r };
                },
                rb = (e, t) => e.length === t.length && e.every((e, a) => e === t[a]),
                rv = C.gK
                    .model('CollectionPlaylistsCreatedPage', {
                        sort: C.gK.maybeNull(rt.w),
                        pagesLoader: (0, lx.I)(ry.Z),
                        kinds: C.gK.array(C.gK.number),
                        isPlaylistMovePending: C.gK.optional(C.gK.boolean, !1),
                    })
                    .volatile(() => ({ loadGeneration: 0, pageRequests: new Map() }))
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return !e.isPlaylistMovePending && e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get isDragAndDropEnabled() {
                            let { experiments: t } = (0, R.M)(e);
                            return t.checkExperiment(k.z.WebNextCollectionPlaylistsDnD, 'on');
                        },
                        get items() {
                            var t;
                            return null != (t = e.pagesLoader.items) ? t : [];
                        },
                    }))
                    .actions((e) => {
                        let t = (0, C.L3)(function* (t, a) {
                                let { userId: i, page: l = 0, pageSize: r = rE.d, withLikesCount: s } = t,
                                    { usersResource: n, modelActionsLogger: o } = (0, C._$)(e);
                                try {
                                    if ((e.pagesLoader.setPageState(l, M.G.PENDING), 0 === e.kinds.length)) {
                                        let t = yield* (0, C.HN)(n.getPlaylistsKinds({ userId: i, addPlaylistWithLikes: !0 }));
                                        if (a !== e.loadGeneration) return;
                                        e.kinds = (0, C.wg)(t);
                                    }
                                    let t = l * r,
                                        o = e.kinds.slice(t, t + r),
                                        d = yield* (0, C.HN)(n.getPlaylistsByKinds({ userId: i, kinds: o, withLikesCount: s, withTracks: !0 }));
                                    if (a !== e.loadGeneration) return;
                                    let g = d.map(rp);
                                    e.pagesLoader.setItems(g, { page: l, pager: { page: l, perPage: r, total: e.kinds.length } });
                                } catch (t) {
                                    if (a !== e.loadGeneration) return;
                                    (o.error(t), e.pagesLoader.setItems(null, { responseStatus: a8.F.ERROR, page: l }));
                                }
                            }),
                            a = (a) => {
                                let { page: i = 0, pageSize: l = rE.d, ...r } = a,
                                    s = e.pageRequests.get(i);
                                if (s) return s;
                                if (!e.pagesLoader.isPageNeedToLoad(i) || (e.isPlaylistMovePending && 0 === e.kinds.length)) return Promise.resolve();
                                let n = t({ ...r, page: i, pageSize: l }, e.loadGeneration);
                                e.pageRequests.set(i, n);
                                let o = () => {
                                    e.pageRequests.get(i) === n && e.pageRequests.delete(i);
                                };
                                return (n.then(o, o), n);
                            },
                            i = (t, a) => {
                                if (!e.pagesLoader.items) return [];
                                let i = new Set(),
                                    l = Math.min(t, a),
                                    r = Math.max(t, a);
                                for (let t = l; t <= r; t++) e.pagesLoader.items[t] || i.add(Math.floor(t / rE.d));
                                return Array.from(i);
                            },
                            l = (0, C.L3)(function* (t, i, l) {
                                for (let s = 0; s < i.length; s += 2) {
                                    let n = i.slice(s, s + 2);
                                    for (let t of n) {
                                        var r;
                                        (null == (r = e.pagesLoader.pageStates) ? void 0 : r[t]) === M.G.REJECT && e.pagesLoader.setPageState(t, M.G.IDLE);
                                    }
                                    if ((yield Promise.all(n.map((e) => a({ userId: t, page: e, pageSize: rE.d }))), l !== e.loadGeneration || !e.isDragAndDropEnabled))
                                        return;
                                }
                                return !0;
                            }),
                            r = () => {
                                ((e.loadGeneration += 1), e.pageRequests.clear(), (e.sort = null), e.pagesLoader.reset(), (e.kinds = (0, C.wg)([])));
                            },
                            s = (0, C.L3)(function* (t, a, i, l, s, n) {
                                let { usersResource: o, modelActionsLogger: d } = (0, C._$)(e);
                                try {
                                    let d = yield* (0, C.HN)(o.getPlaylistsKinds({ userId: t, addPlaylistWithLikes: !0 }));
                                    if (n !== e.loadGeneration) return;
                                    if (!e.isDragAndDropEnabled) return void r();
                                    let g = ((e) => {
                                        let { currentKinds: t, optimisticKinds: a, originalKinds: i, serverKinds: l } = e,
                                            r = rb(t, a);
                                        return r && rb(l, a) ? 'keep-optimistic' : r && rb(l, i) ? 'rollback' : 'reset';
                                    })({ currentKinds: e.kinds, optimisticKinds: s, originalKinds: l, serverKinds: d });
                                    if ('keep-optimistic' === g) return a8.F.OK;
                                    if (
                                        'rollback' === g &&
                                        ((t, a, i) => {
                                            if (!e.pagesLoader.items) return !1;
                                            let l = e.pagesLoader.items.findIndex((e) => (null == e ? void 0 : e.key) === t),
                                                r = e.pagesLoader.items[l],
                                                s = e.kinds[l];
                                            if (l < 0 || !r || 'number' != typeof s || i[a] !== s) return !1;
                                            let n = (0, C.Yo)(r);
                                            return (
                                                e.pagesLoader.items.splice(a, 0, n),
                                                e.kinds.splice(l, 1),
                                                e.kinds.splice(a, 0, s),
                                                e.kinds.length === i.length && e.kinds.every((e, t) => e === i[t])
                                            );
                                        })(a, i, l)
                                    )
                                        return a8.F.ERROR;
                                } catch (t) {
                                    if (n !== e.loadGeneration) return;
                                    d.error(t);
                                }
                                return (r(), a8.F.ERROR);
                            }),
                            n = (0, C.L3)(function* (t, a) {
                                if (!e.isDragAndDropEnabled || e.isPlaylistMovePending || !e.pagesLoader.items) return;
                                let n = rS(e.pagesLoader.items, e.kinds, t, a);
                                if (!n) return;
                                let o = e.pagesLoader.items[n.from];
                                if (!o) return;
                                e.isPlaylistMovePending = !0;
                                let { usersResource: d, modelActionsLogger: g } = (0, C._$)(e),
                                    u = e.loadGeneration;
                                try {
                                    let c = i(n.from, n.to);
                                    if (c.length > 0) {
                                        let t;
                                        try {
                                            t = yield* (0, C.HN)(l(o.uid, c, u));
                                        } catch (t) {
                                            if (u !== e.loadGeneration) return;
                                            return (g.error(t), a8.F.ERROR);
                                        }
                                        if (void 0 === t) return;
                                    }
                                    if (u !== e.loadGeneration || !e.isDragAndDropEnabled) return;
                                    let m = e.pagesLoader.items.findIndex((e) => (null == e ? void 0 : e.key) === a),
                                        p = e.pagesLoader.items[m],
                                        y = p
                                            ? ((e, t, a, i) => {
                                                  let l = rS(e, t, a, i);
                                                  if (!l) return;
                                                  let { from: r, to: s } = l,
                                                      n = Math.min(r, s),
                                                      o = Math.max(r, s);
                                                  if (e.slice(n, o + 1).every((e) => !!e && !e.isFavouritePlaylist && !e.generatedPlaylistType))
                                                      return { from: r, to: s };
                                              })(e.pagesLoader.items, e.kinds, t, p.key)
                                            : void 0;
                                    if (!y) return i(n.from, n.to).length > 0 ? a8.F.ERROR : void 0;
                                    let { from: E, to: S } = y,
                                        b = e.pagesLoader.items[E],
                                        v = e.kinds[E];
                                    if (!b || 'number' != typeof v) return;
                                    let K = b.uid,
                                        I = e.kinds.slice(),
                                        L = (0, C.Yo)(b);
                                    (e.pagesLoader.items.splice(S, 0, L), e.kinds.splice(E, 1), e.kinds.splice(S, 0, v));
                                    let T = e.kinds.slice();
                                    if (!e.isDragAndDropEnabled) return void r();
                                    try {
                                        let e = yield* (0, C.HN)(d.changePlaylistPosition({ userId: K, playlistKind: v, from: E, to: S }));
                                        if ('ok' !== e) throw Error('Не удалось изменить позицию плейлиста');
                                        return a8.F.OK;
                                    } catch (a) {
                                        if ((g.error(a), u !== e.loadGeneration)) return;
                                        if (!e.isDragAndDropEnabled) return void r();
                                        return yield* (0, C.HN)(s(K, t, E, I, T, u));
                                    }
                                } catch (e) {
                                    return (g.error(e), r(), a8.F.ERROR);
                                } finally {
                                    e.isPlaylistMovePending = !1;
                                }
                            });
                        return { getData: a, movePlaylist: n, reset: r };
                    }),
                rK = C.gK
                    .model('CollectionPlaylistsLikedPage', { sort: C.gK.maybeNull(rt.w), pagesLoader: (0, lx.I)(tK.$) })
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get items() {
                            var t;
                            return null != (t = e.pagesLoader.items) ? t : [];
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, C.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: l = 20, sortBy: r, sortOrder: s, playlistMetaType: n, withTracks: o } = t;
                            if (!e.pagesLoader.isPageNeedToLoad(i)) return;
                            let { usersResource: d, modelActionsLogger: g } = (0, C._$)(e);
                            ((e.sort = null), (0, l4.W)(r) && re(s) && (e.sort = (0, C.wg)({ sortBy: r, sortOrder: s })));
                            try {
                                e.pagesLoader.setPageState(i, M.G.PENDING);
                                let { likedPlaylists: t, pager: g } = yield d.getLikedPlaylists({
                                        userId: a,
                                        page: i,
                                        pageSize: l,
                                        sortBy: r,
                                        sortOrder: s,
                                        playlistMetaType: n,
                                        withTracks: o,
                                    }),
                                    u = t.map((e) => {
                                        let { playlist: t } = e;
                                        return (0, tt.j)(t);
                                    });
                                e.pagesLoader.setItems(u, { page: i, pager: g });
                            } catch (t) {
                                (g.error(t), e.pagesLoader.setItems(null, { responseStatus: a8.F.ERROR, page: i }));
                            }
                        }),
                        reset() {
                            ((e.sort = null), e.pagesLoader.reset());
                        },
                    })),
                rI = C.gK
                    .model('CollectionPlaylists', {
                        playlistsLiked: rK,
                        playlistsCreated: rv,
                        activeTabIndex: C.gK.number,
                        tabs: C.gK.array(C.gK.number),
                        tabIndexElement: C.gK.maybe(C.gK.string),
                    })
                    .views((e) => ({
                        get isLikedTabActive() {
                            return e.activeTabIndex === rc.a.LIKED;
                        },
                        get isCreatedTabActive() {
                            return e.activeTabIndex === rc.a.CREATED;
                        },
                        get activePlaylistsModel() {
                            switch (e.activeTabIndex) {
                                case rc.a.CREATED:
                                    return e.playlistsCreated;
                                case rc.a.LIKED:
                                    return e.playlistsLiked;
                                default:
                                    return e.playlistsCreated;
                            }
                        },
                        get isEmptyLikedTab() {
                            return 0 === e.playlistsLiked.items.length;
                        },
                    }))
                    .actions((e) => ({
                        setActiveTabIndex(t) {
                            e.activeTabIndex = t;
                        },
                        setTabIndexElement(t) {
                            e.tabIndexElement = t;
                        },
                        reset() {
                            (e.playlistsLiked.reset(), e.playlistsCreated.reset(), (e.activeTabIndex = rc.a.CREATED));
                        },
                    })),
                rL = (e) => (0, C.wg)({ type: e.type, track: (0, eH.v)(e.track), album: e.album && (0, ek.p)(e.album) }),
                rT = C.gK.model('ShelfLikedItem', { type: C.gK.string, track: H.v, album: C.gK.maybe(ey.J) }),
                rh = C.gK
                    .compose(
                        C.gK.model('CollectionShelfLiked', {
                            title: C.gK.maybeNull(C.gK.string),
                            typeForFrom: C.gK.maybeNull(C.gK.string),
                            entities: C.gK.maybeNull(C.gK.array(rT)),
                            pager: C.gK.maybeNull(ro.j),
                        }),
                        q.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === M.G.PENDING;
                        },
                        get isEmpty() {
                            var t;
                            return e.isResolved && (null == (t = e.entities) ? void 0 : t.length) === 0;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, C.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            if (e.loadingState !== M.G.PENDING)
                                try {
                                    var i;
                                    e.loadingState = M.G.PENDING;
                                    let a = yield t.getShelfLiked();
                                    ((e.title = a.title),
                                        (e.typeForFrom = null != (i = a.typeForFrom) ? i : null),
                                        (e.pager = (0, C.wg)(a.pager)),
                                        (e.entities = (0, C.wg)(a.entities ? a.entities.map(rL) : [])),
                                        (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.loadingState = M.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.entities = null), (e.title = null), (e.typeForFrom = null), (e.pager = null), (e.loadingState = M.G.IDLE));
                        },
                    }));
            var rN = a(29944),
                rA = a(589);
            let rC = C.gK.model('CaseForms', {
                    nominative: C.gK.optional(C.gK.string, ''),
                    genitive: C.gK.optional(C.gK.string, ''),
                    dative: C.gK.optional(C.gK.string, ''),
                    accusative: C.gK.optional(C.gK.string, ''),
                    instrumental: C.gK.optional(C.gK.string, ''),
                    prepositional: C.gK.optional(C.gK.string, ''),
                }),
                rf = C.gK.model('PlaylistMadeForUser', { caseForms: C.gK.maybeNull(rC) });
            var rR = a(99720);
            let rk = C.gK.model('PlaylistOwner', {
                    uid: C.gK.number,
                    login: C.gK.string,
                    name: C.gK.string,
                    sex: C.gK.enumeration(Object.values(rR.U)),
                    verified: C.gK.boolean,
                }),
                rD = C.gK.model('PlaylistTag', { id: C.gK.string, value: C.gK.string }),
                r_ = tK.$.props({
                    owner: C.gK.maybe(rk),
                    modified: C.gK.string,
                    description: C.gK.maybe(C.gK.string),
                    tags: C.gK.maybeNull(C.gK.array(rD)),
                    madeForUser: C.gK.maybeNull(rf),
                })
                    .views((e) => ({
                        get seeds() {
                            var t;
                            return ['playlist:'.concat(null == (t = e.owner) ? void 0 : t.login, '_').concat(e.kind)];
                        },
                        get tagsString() {
                            let { experiments: t } = (0, R.M)(e);
                            if (!t.checkExperiment(k.z.WebEditorsFeatures, 'on') || !Array.isArray(e.tags) || !e.tags.length) return null;
                            return e.tags.map((e) => e.value).join(', ');
                        },
                    }))
                    .actions((e) => ({
                        changeDescription: (0, C.L3)(function* (t) {
                            if (!(0, C._n)(e)) return a8.F.ERROR;
                            if (e.description === t) return a8.F.OK;
                            if (t.length > rA.i) return a8.F.ERROR;
                            let { usersResource: a, modelActionsLogger: i } = (0, C._$)(e);
                            if (e.canUserChange) {
                                let l = e.description;
                                e.description = t;
                                try {
                                    let i = yield a.changePlaylistDescription({ description: t, userId: e.uid, playlistKind: e.kind });
                                    return ((e.description = i.description), a8.F.OK);
                                } catch (t) {
                                    ((e.description = l), i.error(t));
                                }
                            }
                            return a8.F.ERROR;
                        }),
                        changePlaylistCover: (0, C.L3)(function* (t) {
                            if (!(0, C._n)(e)) return a8.F.ERROR;
                            let { usersResource: a, modelActionsLogger: i } = (0, C._$)(e);
                            try {
                                let i = yield a.uploadPlaylistCover({ userId: e.uid, formData: t, playlistKind: e.kind });
                                return ((e.coverUri = i.cover.uri), a8.F.OK);
                            } catch (e) {
                                i.error(e);
                            }
                            return a8.F.ERROR;
                        }),
                    }))
                    .named('PlaylistMeta'),
                rP = C.gK
                    .compose(
                        C.gK.model('CollectionShelfNewEpisodes', {
                            title: C.gK.maybeNull(C.gK.string),
                            typeForFrom: C.gK.maybeNull(C.gK.string),
                            playlist: C.gK.maybeNull(r_),
                            tracks: C.gK.maybeNull(C.gK.array(H.v)),
                        }),
                        q.X,
                    )
                    .views((e) => ({
                        get withPlaylist() {
                            return !!(e.playlist && e.playlist.kind && e.playlist.isAvailable && e.playlist.uuid);
                        },
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === M.G.PENDING;
                        },
                        get isEmpty() {
                            return e.isResolved && (!e.tracks || 0 === e.tracks.length);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, C.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            if (e.loadingState !== M.G.PENDING)
                                try {
                                    var i;
                                    e.loadingState = M.G.PENDING;
                                    let a = yield t.getNewEpisodes();
                                    e.title = a.title;
                                    let l = a.blocks[0];
                                    ((null == l ? void 0 : l.typeForFrom) && (e.typeForFrom = l.typeForFrom),
                                        (null == l || null == (i = l.entities[0]) ? void 0 : i.playlist) && (e.playlist = (0, rN.Z)(l.entities[0].playlist)),
                                        (null == l ? void 0 : l.entities) && (e.tracks = (0, C.wg)(l.entities.filter((e) => e.track).map((e) => (0, eH.v)(e.track)))),
                                        (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.loadingState = M.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.title = null), (e.playlist = null), (e.typeForFrom = null), (e.tracks = null), (e.loadingState = M.G.IDLE));
                        },
                    })),
                rO = (e) => (0, C.wg)({ type: e.type, album: e.album && (0, ek.p)(e.album), playlist: e.playlist && (0, rN.Z)(e.playlist), track: (0, eH.v)(e.track) }),
                rw = C.gK.model('ShelfRecentlyPlayedItem', { type: C.gK.string, album: C.gK.maybe(ey.J), playlist: C.gK.maybe(ev.I), track: H.v }),
                rG = C.gK
                    .compose(
                        C.gK.model('CollectionShelfRecentlyPlayed', {
                            title: C.gK.maybeNull(C.gK.string),
                            typeForFrom: C.gK.maybeNull(C.gK.string),
                            entities: C.gK.maybeNull(C.gK.array(rw)),
                            pager: C.gK.maybeNull(ro.j),
                        }),
                        q.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === M.G.PENDING;
                        },
                        get isEmpty() {
                            return !!(e.isResolved && e.entities && 0 === e.entities.length);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, C.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            if (e.loadingState !== M.G.PENDING)
                                try {
                                    var i;
                                    e.loadingState = M.G.PENDING;
                                    let a = yield t.getShelfRecentlyPlayed();
                                    ((e.title = a.title),
                                        (e.typeForFrom = null != (i = a.typeForFrom) ? i : null),
                                        (e.pager = (0, C.wg)(a.pager)),
                                        (e.entities = (0, C.wg)(a.entities.map(rO))),
                                        (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.loadingState = M.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.entities = null), (e.title = null), (e.typeForFrom = null), (e.pager = null), (e.loadingState = M.G.IDLE));
                        },
                    })),
                rM = C.gK
                    .model('CollectionShelfPage', { recentlyPlayed: rG, newEpisodes: rP, liked: rh })
                    .views((e) => ({
                        get isLoading() {
                            return e.recentlyPlayed.isLoading && e.liked.isLoading;
                        },
                        get isRejected() {
                            return e.recentlyPlayed.isRejected && e.liked.isRejected;
                        },
                        get isResolved() {
                            return e.recentlyPlayed.isResolved && e.liked.isResolved;
                        },
                        get isIdle() {
                            return e.recentlyPlayed.loadingState === M.G.IDLE && e.liked.loadingState === M.G.IDLE;
                        },
                        get hasRecentlyPlayed() {
                            var t;
                            return e.recentlyPlayed.isLoading || ((null == (t = e.recentlyPlayed.entities) ? void 0 : t.length) || 0) > 0;
                        },
                        get hasLiked() {
                            var a;
                            return e.liked.isLoading || ((null == (a = e.liked.entities) ? void 0 : a.length) || 0) > 0;
                        },
                    }))
                    .actions((e) => ({
                        reset() {
                            (e.recentlyPlayed.reset(), e.liked.reset());
                        },
                    })),
                rU = C.gK
                    .compose(C.gK.model('CollectionVibeRoomsPage', { items: C.gK.array(C.gK.maybeNull(a6)) }), q.X, D.p)
                    .views((e) => ({
                        get isEnabled() {
                            let { experiments: t } = (0, R.M)(e);
                            return t.checkExperiment(k.z.WebNextWaveForTwo, 'on') || t.checkExperiment(k.z.WebNextWaveForTwoTest, 'on');
                        },
                        get isLoading() {
                            return e.isNeededToLoad || (e.loadingState === M.G.PENDING && 0 === e.items.length);
                        },
                        get isEmptyItems() {
                            var t;
                            return !(null == (t = e.items) ? void 0 : t.length);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, C.L3)(function* () {
                            let { modelActionsLogger: t, waveResource: a } = (0, C._$)(e);
                            if (e.loadingState !== M.G.PENDING)
                                try {
                                    e.loadingState = M.G.PENDING;
                                    let t = yield a.getRooms();
                                    ((e.items = (0, C.wg)(t.map(tr))), (e.loadingState = M.G.RESOLVE));
                                } catch (a) {
                                    (t.error(a), (e.loadingState = M.G.REJECT));
                                }
                        }),
                        deleteRoomFromItems(t) {
                            var a;
                            e.items = (0, C.wg)(null == (a = e.items) ? void 0 : a.filter((e) => (null == e ? void 0 : e.id) !== t));
                        },
                        reset() {
                            ((e.loadingState = M.G.IDLE), e.destroyItems([e.items]));
                        },
                    })),
                rB = C.gK
                    .compose(C.gK.model('CollectionDislikesPageArtists', { items: C.gK.maybeNull(C.gK.array(eS.P)) }), q.X)
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === M.G.PENDING;
                            },
                            get isEmpty() {
                                var a;
                                return !t.isLoading && (null == (a = e.items) ? void 0 : a.length) === 0;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, C.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            if (!(0, C._n)(e)) return null;
                            let { user: i } = (0, R.M)(e);
                            if (e.loadingState === M.G.PENDING) return null;
                            if (((e.loadingState = M.G.PENDING), i.account.data.uid))
                                try {
                                    let a = yield t.getDislikedArtists({ userId: i.account.data.uid });
                                    return ((e.items = (0, C.wg)((a || []).map(l0.d))), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE), a);
                                } catch (t) {
                                    (a.error(t), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                }
                            return ((e.loadingState = M.G.REJECT), null);
                        }),
                        reset() {
                            ((e.loadingState = M.G.IDLE), (e.items = null));
                        },
                    })),
                rF = C.gK.model('CollectionDislikesPageTracksItem', { id: C.gK.string, loadingState: C.gK.enumeration(Object.values(M.G)), data: C.gK.maybeNull(H.v) }),
                rV = C.gK
                    .compose(C.gK.model('CollectionDislikesPageTracks', { items: C.gK.maybeNull(C.gK.array(rF)) }), q.X)
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === M.G.PENDING;
                            },
                            get isEmpty() {
                                var a;
                                return !t.isLoading && (null == (a = e.items) ? void 0 : a.length) === 0;
                            },
                            get sonataEntitiesData() {
                                var i, l;
                                return null != (l = null == (i = e.items) ? void 0 : i.map((e) => (0, e_.l)(e.id))) ? l : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, C.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, C._$)(e),
                                { user: i } = (0, R.M)(e);
                            if (i.account.data.uid && e.loadingState !== M.G.PENDING) {
                                e.loadingState = M.G.PENDING;
                                try {
                                    let {
                                            library: { tracks: a },
                                        } = yield t.getDislikedTracks({ userId: i.account.data.uid }),
                                        l = a.map((e) => {
                                            let { id: t, albumId: a } = e;
                                            return { id: String((0, ir.V)(t, a)), loadingState: M.G.IDLE };
                                        });
                                    ((e.items = (0, C.wg)(l)), (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                }
                            }
                        }),
                        getTracksByRange: (0, C.L3)(function* (t, a) {
                            var i;
                            let { tracksResource: l, modelActionsLogger: r } = (0, C._$)(e);
                            if (!(null == (i = e.items) ? void 0 : i.length)) return null;
                            ((t = Math.max(0, t)), (a = Math.min(a, e.items.length)));
                            let s = ((e, t, a) => {
                                let i = [];
                                for (let s = t; s <= a; s++) {
                                    var l, r;
                                    ((null == (l = e[s]) ? void 0 : l.loadingState) === M.G.IDLE || (null == (r = e[s]) ? void 0 : r.loadingState) === M.G.REJECT) &&
                                        i.push(s);
                                }
                                return i;
                            })(e.items, t, a);
                            try {
                                let t,
                                    a =
                                        ((t = e.items),
                                        s.map((e) => {
                                            let a = t[e];
                                            return String(null == a ? void 0 : a.id);
                                        }));
                                if (!a.length) return null;
                                s.forEach((t) => {
                                    var a;
                                    let i = null == (a = e.items) ? void 0 : a[t];
                                    i && (i.loadingState = M.G.PENDING);
                                });
                                let i = yield l.getTracksMeta({ trackIds: a, withProgress: !0 });
                                s.forEach((t, a) => {
                                    var l;
                                    let r = null == i ? void 0 : i[a];
                                    (null == (l = e.items) ? void 0 : l[t]) && r && (e.items[t] = { id: String(r.id), data: (0, eH.v)(r), loadingState: M.G.RESOLVE });
                                });
                            } catch (t) {
                                (r.error(t),
                                    s.forEach((t) => {
                                        var a;
                                        let i = null == (a = e.items) ? void 0 : a[t];
                                        i && (i.loadingState = M.G.REJECT);
                                    }));
                            }
                            return null;
                        }),
                        reset() {
                            ((e.loadingState = M.G.IDLE), (e.items = null));
                        },
                    })),
                rx = C.gK
                    .model('CollectionDislikesPage', { artists: rB, tracks: rV })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.tracks.isNeededToLoad && e.artists.isNeededToLoad;
                        },
                        get isLoading() {
                            return e.tracks.isLoading && e.artists.isLoading;
                        },
                        get isResolved() {
                            return e.tracks.isResolved && e.artists.isResolved;
                        },
                    }))
                    .actions((e) => ({
                        reset() {
                            (e.artists.reset(), e.tracks.reset());
                        },
                    }));
            var rj = a(50222);
            let rW = C.gK
                    .model('CollectionKidsAlbumsPage', { pagesLoader: (0, lx.I)(ey.J) })
                    .views((e) => {
                        let t = {
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
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
                            get items() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                            get shouldShowContent() {
                                return t.isShimmerVisible || t.items.length > 0;
                            },
                            get loadedItems() {
                                var i, l;
                                return null != (l = null == (i = e.pagesLoader.items) ? void 0 : i.filter((e) => null !== e)) ? l : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, C.L3)(function* (t) {
                            let { pageSize: a = rj.c, page: i = 0 } = t,
                                { landingBlocksResource: l, modelActionsLogger: r } = (0, C._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, M.G.PENDING);
                                    let t = yield l.getCollectionKidsAlbumsLiked({ page: i, pageSize: a }),
                                        r = t.items.map((e) => e7(e.data).data);
                                    e.pagesLoader.setItems(r, { page: i, pager: t.pager });
                                } catch (t) {
                                    (r.error(t), e.pagesLoader.setItems(null, { responseStatus: a8.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                rX = C.gK
                    .model('CollectionKidsPlaylistsPage', { pagesLoader: (0, lx.I)(ev.I) })
                    .views((e) => {
                        let t = {
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
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
                            get items() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                            get shouldShowContent() {
                                return t.isShimmerVisible || t.items.length > 0;
                            },
                            get loadedItems() {
                                var i, l;
                                return null != (l = null == (i = e.pagesLoader.items) ? void 0 : i.filter((e) => null !== e)) ? l : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, C.L3)(function* (t) {
                            let { pageSize: a = rj.c, page: i = 0 } = t,
                                { landingBlocksResource: l, modelActionsLogger: r } = (0, C._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, M.G.PENDING);
                                    let t = yield l.getCollectionKidsPlaylistsLiked({ page: i, pageSize: a }),
                                        r = t.items.map((e) => es(e.data).data);
                                    e.pagesLoader.setItems(r, { page: i, pager: t.pager });
                                } catch (t) {
                                    (r.error(t), e.pagesLoader.setItems(null, { responseStatus: a8.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                r$ = C.gK
                    .model('CollectionKidsTracksPage', { pagesLoader: (0, lx.I)(H.v) })
                    .views((e) => {
                        let t = {
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
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
                            get items() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                            get shouldShowContent() {
                                return t.isShimmerVisible || t.items.length > 0;
                            },
                            get loadedItems() {
                                var i, l;
                                return null != (l = null == (i = e.pagesLoader.items) ? void 0 : i.filter((e) => null !== e)) ? l : [];
                            },
                            get sonataEntitiesData() {
                                return t.loadedItems.map(lz.$);
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, C.L3)(function* (t) {
                            let { pageSize: a = rj.c, page: i = 0 } = t,
                                { landingBlocksResource: l, modelActionsLogger: r } = (0, C._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, M.G.PENDING);
                                    let t = yield l.getCollectionKidsTracksLiked({ page: i, pageSize: a }),
                                        r = t.items.map(te).map((e) => e.data);
                                    e.pagesLoader.setItems(r, { page: i, pager: t.pager });
                                } catch (t) {
                                    (r.error(t), e.pagesLoader.setItems(null, { responseStatus: a8.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                rJ = C.gK
                    .model('CollectionKidsPage', { albums: rW, playlists: rX, tracks: r$ })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.albums.isNeededToLoad && e.playlists.isNeededToLoad && e.tracks.isNeededToLoad;
                        },
                        get isRejected() {
                            return e.albums.isRejected && e.playlists.isRejected && e.tracks.isRejected;
                        },
                        get isResolved() {
                            return e.albums.isResolved && e.playlists.isResolved && e.tracks.isResolved;
                        },
                        get shouldShowContent() {
                            return e.albums.shouldShowContent || e.playlists.shouldShowContent || e.tracks.shouldShowContent;
                        },
                    }))
                    .actions((e) => ({
                        reset() {
                            (e.albums.reset(), e.playlists.reset(), e.tracks.reset());
                        },
                    })),
                rY = C.gK
                    .compose(C.gK.model('CollectionShelfLikedPage', { pagesLoader: (0, lx.I)(rT), typeForFrom: C.gK.maybeNull(C.gK.string) }), D.p)
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
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
                        get items() {
                            return e.pagesLoader.items || [];
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, C.L3)(function* (t) {
                            let { pageSize: a = rj.c, page: i = 0 } = t,
                                { nonMusicResource: l, modelActionsLogger: r } = (0, C._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    var s, n;
                                    e.pagesLoader.setPageState(i, M.G.PENDING);
                                    let t = yield l.getShelfLiked({ page: i, pageSize: a }),
                                        r = (null == (s = t.entities) ? void 0 : s.map(rL)) || [];
                                    (e.pagesLoader.setItems(r, { page: i, pager: t.pager }), (e.typeForFrom = null != (n = t.typeForFrom) ? n : null));
                                } catch (t) {
                                    (r.error(t), e.pagesLoader.setItems(null, { responseStatus: a8.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                rH = C.gK
                    .model('CollectionShelfRecentlyPlayedPage', { pagesLoader: (0, lx.I)(rw), typeForFrom: C.gK.maybeNull(C.gK.string) })
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
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
                        get items() {
                            return e.pagesLoader.items || [];
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, C.L3)(function* (t) {
                            let { pageSize: a = rj.c, page: i = 0 } = t,
                                { nonMusicResource: l, modelActionsLogger: r } = (0, C._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    var s, n;
                                    e.pagesLoader.setPageState(i, M.G.PENDING);
                                    let t = yield l.getShelfRecentlyPlayed({ page: i, pageSize: a }),
                                        r = (null == (s = t.entities) ? void 0 : s.map(rO)) || [];
                                    (e.pagesLoader.setItems(r, { page: i, pager: t.pager }), (e.typeForFrom = null != (n = t.typeForFrom) ? n : null));
                                } catch (t) {
                                    (r.error(t), e.pagesLoader.setItems(null, { responseStatus: a8.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            (e.pagesLoader.reset(), (e.typeForFrom = null));
                        },
                    })),
                rq = C.gK.model('CollectionPage', {
                    landing: lG,
                    albums: ri,
                    playlists: rI,
                    artists: rr,
                    shelf: rM,
                    shelfRecentlyPlayed: rH,
                    shelfLiked: rY,
                    nonMusicLiked: ru,
                    dislikes: rx,
                    kids: rJ,
                    clips: rg,
                    vibeRooms: rU,
                }),
                rz = C.gK.model('ConcertDescription', { text: C.gK.string, genre: C.gK.maybe(C.gK.string), source: C.gK.maybe(C.gK.string) }),
                rQ = C.gK
                    .compose(
                        C.gK.model('ConcertPage', {
                            meta: C.gK.maybeNull(ai.a),
                            covers: C.gK.maybeNull(C.gK.array(t6.$)),
                            description: C.gK.maybeNull(rz),
                            leadArtistId: C.gK.maybeNull(C.gK.union(C.gK.string, C.gK.number)),
                            artists: C.gK.maybeNull(C.gK.array(eS.P)),
                            errorStatusCode: C.gK.maybeNull(C.gK.number),
                            landing: lG,
                        }),
                        q.X,
                        D.p,
                    )
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading || e.isRejected;
                        },
                        get isShimmerActive() {
                            return e.isLoading;
                        },
                        get isNotFound() {
                            return e.isRejected && (e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST);
                        },
                        get coversUri() {
                            var t, a;
                            return null != (a = null == (t = e.covers) ? void 0 : t.map((e) => e.uri).filter((e) => !!e)) ? a : [];
                        },
                    }))
                    .actions((e) => ({
                        getInfo: (0, C.L3)(function* (t) {
                            let { concertId: a } = t,
                                { concertsResource: i, modelActionsLogger: l } = (0, C._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = M.G.PENDING;
                                    let { concert: t, minPrice: l, covers: r, description: s, leadArtistId: n, artists: o } = yield i.getInfo({ concertId: a });
                                    ((e.meta = (0, eY.h)(t, l)),
                                        (e.covers = (0, C.wg)(null == r ? void 0 : r.map((e) => (0, e9.p)(e)))),
                                        (e.description = s ? (0, C.wg)(s) : null),
                                        (e.leadArtistId = n ? (0, C.wg)(n) : null),
                                        (e.artists = (0, C.wg)(null == o ? void 0 : o.map((e) => (0, l0.d)(e)))),
                                        (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (l.error(t),
                                        t instanceof O.GX &&
                                            (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = O.X1.NOT_FOUND),
                                        (e.loadingState = M.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = M.G.IDLE), e.landing.reset(), (e.leadArtistId = null), e.destroyItems([e.covers, e.description, e.artists]));
                        },
                    }));
            var rZ = a(82413),
                r0 = a(95067);
            let r1 = (e, t, a) => (-1 === a ? e.slice(t) : e.slice(t, t + a)),
                r3 = (e) => (0, C.wg)({ id: e.id, name: e.name }),
                r2 = C.gK.model('ConcertLocation', { id: C.gK.number, name: C.gK.string });
            var r8 = a(47052);
            let r5 = C.gK
                    .compose(
                        C.gK.model({
                            selectedLocationId: C.gK.maybeNull(C.gK.number),
                            locations: C.gK.maybeNull(C.gK.array(r2)),
                            isInitialized: C.gK.optional(C.gK.boolean, !1),
                            modal: r8.q,
                            searchText: C.gK.optional(C.gK.string, ''),
                        }),
                        q.X,
                    )
                    .named('ConcertLocation')
                    .views((e) => ({
                        get isAutoDetect() {
                            return null === e.selectedLocationId;
                        },
                        get selectedLocationName() {
                            var t;
                            if (null === e.selectedLocationId || !e.locations) return null;
                            let a = e.locations.find((t) => t.id === e.selectedLocationId);
                            return null != (t = null == a ? void 0 : a.name) ? t : null;
                        },
                        get hasLocations() {
                            return null !== e.locations && e.locations.length > 0;
                        },
                        get shouldShowShimmer() {
                            return !e.isInitialized || (null !== e.selectedLocationId && e.isLoading && !e.isRejected);
                        },
                        get filteredLocations() {
                            if (!e.locations) return [];
                            let t = e.searchText.trim();
                            if (!t) return e.locations;
                            let a = t.toLowerCase();
                            return e.locations
                                .map((e) => {
                                    let t = e.name.toLowerCase(),
                                        i = null;
                                    return (
                                        t.startsWith(a) ? (i = 0) : t.split(/[\s-]+/).some((e) => e.startsWith(a)) ? (i = 1) : t.includes(a) && (i = 2),
                                        null === i ? null : { location: e, rank: i }
                                    );
                                })
                                .filter((e) => null !== e)
                                .sort((e, t) => (e.rank !== t.rank ? e.rank - t.rank : e.location.name.localeCompare(t.location.name)))
                                .map((e) => e.location);
                        },
                    }))
                    .actions((e) => ({
                        init() {
                            let { containerStorage: t } = (0, C._$)(e),
                                a = t.get(r0.c.ConcertLocation);
                            ('number' == typeof a && (e.selectedLocationId = a), (e.isInitialized = !0));
                        },
                        getLocations: (0, C.L3)(function* () {
                            let { concertsResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = M.G.PENDING;
                                    let a = yield t.getLocations({});
                                    ((e.locations = (0, C.wg)(a.locations.map(r3))), (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.loadingState = M.G.REJECT));
                                }
                        }),
                        setSelectedLocation(t) {
                            let { containerStorage: a } = (0, C._$)(e);
                            ((e.selectedLocationId = t),
                                null === t ? a.remove(r0.c.ConcertLocation) : a.set(r0.c.ConcertLocation, t, { expires: 365 }),
                                (0, R.M)(e).concerts.reloadData());
                        },
                        setSearchText(t) {
                            e.searchText = t;
                        },
                        resetSearchText() {
                            e.searchText = '';
                        },
                        reset() {
                            ((e.selectedLocationId = null),
                                (e.locations = null),
                                (e.loadingState = M.G.IDLE),
                                (e.isInitialized = !1),
                                (e.searchText = ''),
                                e.modal.close());
                        },
                    })),
                r6 = C.gK
                    .compose(
                        C.gK.model('ConcertsPageConfig', {
                            topOffset: C.gK.optional(C.gK.number, 0),
                            topLimit: C.gK.optional(C.gK.number, 3),
                            feedOffset: C.gK.optional(C.gK.number, 3),
                            feedLimit: C.gK.optional(C.gK.number, -1),
                        }),
                        q.X,
                    )
                    .actions((e) => ({
                        getData: (0, C.L3)(function* () {
                            let { concertsResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = M.G.PENDING;
                                    let {
                                        config: { feed: a, top: i },
                                    } = yield t.getTabConfig({});
                                    ((e.feedLimit = a.limit),
                                        (e.feedOffset = a.offset),
                                        (e.topLimit = i.limit),
                                        (e.topOffset = i.offset),
                                        (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.loadingState = M.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = M.G.IDLE), (e.feedLimit = -1), (e.feedOffset = 3), (e.topLimit = 3), (e.topOffset = 0));
                        },
                    })),
                r9 = C.gK
                    .compose(
                        C.gK.model('ConcertsPage', {
                            config: r6,
                            landing: lG,
                            locationSelection: r5,
                            topConcerts: C.gK.maybeNull(C.gK.array(ai.a)),
                            feedConcerts: C.gK.maybeNull(C.gK.array(ai.a)),
                        }),
                        q.X,
                        D.p,
                    )
                    .views((e) => {
                        let t = () => {
                            var t;
                            let { containerStorage: a } = (0, C._$)(e),
                                i = a.get(r0.c.ConcertLocation);
                            return null != (t = e.locationSelection.selectedLocationId) ? t : 'number' == typeof i ? i : null;
                        };
                        return {
                            get isShimmerVisible() {
                                return e.isNeededToLoad || e.isLoading || e.isRejected;
                            },
                            get isShimmerActive() {
                                return e.isLoading;
                            },
                            get isLocationSelectionExperimentEnabled() {
                                let { experiments: t } = (0, R.M)(e);
                                return t.checkExperiment(k.z.WebNextConcertsLocation, 'on');
                            },
                            get concertsLocationForRequest() {
                                let { experiments: a } = (0, R.M)(e),
                                    i = a.checkExperiment(k.z.WebNextConcertsLocationAll, 'on'),
                                    l = t();
                                if (i && null !== l) return [l];
                                return;
                            },
                            get concertsLocationForFeedRequest() {
                                let { experiments: a } = (0, R.M)(e),
                                    i = a.checkExperiment(k.z.WebNextConcertsLocation, 'on'),
                                    l = t();
                                if (i && null !== l) return [l];
                                return;
                            },
                        };
                    })
                    .actions((e) => {
                        let t = (0, C.L3)(function* () {
                                let { concertsResource: t } = (0, C._$)(e),
                                    a = {},
                                    i = e.concertsLocationForFeedRequest;
                                (null == i ? void 0 : i.length) && (a.locations = i);
                                let { items: l } = yield t.getFeed(a),
                                    { feedConcerts: r, topConcerts: s } = ((e, t) => {
                                        let { topLimit: a, topOffset: i, feedLimit: l, feedOffset: r } = e;
                                        return { topConcerts: r1(t, i, a), feedConcerts: r1(t, r, l) };
                                    })(
                                        e.config,
                                        l.map((e) => (0, rZ.H)(e)),
                                    );
                                ((e.feedConcerts = (0, C.wg)(r)), (e.topConcerts = (0, C.wg)(s)));
                            }),
                            a = {
                                resetPageData() {
                                    (e.config.reset(), e.landing.reset(), (e.loadingState = M.G.IDLE), e.destroyItems([e.topConcerts, e.feedConcerts]));
                                },
                                getData: (0, C.L3)(function* () {
                                    let { modelActionsLogger: a } = (0, C._$)(e);
                                    if (!e.config.isLoading && !e.isLoading)
                                        try {
                                            ((e.loadingState = M.G.PENDING),
                                                e.isLocationSelectionExperimentEnabled && e.locationSelection.init(),
                                                yield e.config.getData(),
                                                yield t(),
                                                (e.loadingState = M.G.RESOLVE));
                                        } catch (t) {
                                            (a.error(t), (e.loadingState = M.G.REJECT));
                                        }
                                }),
                                reloadData: (0, C.L3)(function* () {
                                    let { modelActionsLogger: a } = (0, C._$)(e);
                                    try {
                                        ((e.loadingState = M.G.PENDING), yield t(), (e.loadingState = M.G.RESOLVE));
                                    } catch (t) {
                                        (a.error(t), (e.loadingState = M.G.REJECT));
                                    }
                                }),
                                reset() {
                                    (a.resetPageData(), e.locationSelection.reset());
                                },
                            };
                        return a;
                    });
            var r4 = a(83772);
            let r7 = (e) => {
                    let t = (0, r4.f)(e);
                    return (0, C.wg)(t);
                },
                se = C.gK
                    .compose(
                        C.gK.model('KidsEditorialAlbumPage', {
                            errorStatusCode: C.gK.maybeNull(C.gK.number),
                            title: C.gK.maybeNull(C.gK.string),
                            albumsData: C.gK.array(C.gK.model({ id: C.gK.number })),
                            pagesLoader: (0, lx.I)(is.G),
                        }),
                        q.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === M.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST,
                                    a = e.pagesLoader.isEmpty;
                                return (e.isRejected && t) || a;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                            get albums() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getAlbums: (0, C.L3)(function* (t) {
                                let { page: a = 0, pageSize: i = 20 } = t,
                                    { albumResource: l, modelActionsLogger: r } = (0, C._$)(e);
                                if (e.loadingState === M.G.RESOLVE && e.pagesLoader.isPageNeedToLoad(a)) {
                                    e.pagesLoader.setPageState(a, M.G.PENDING);
                                    try {
                                        let t = a * i,
                                            r = e.albumsData.slice(t, t + i).map((e) => e.id),
                                            s = yield l.getAlbums({ albumIds: r }),
                                            n = { page: a, perPage: i, total: e.albumsData.length },
                                            o = s.map(r7);
                                        e.pagesLoader.setItems(o, { page: a, pager: n });
                                    } catch (t) {
                                        (r.error(t),
                                            e.pagesLoader.setItems(null, { responseStatus: a8.F.ERROR, page: a }),
                                            t instanceof O.GX &&
                                                (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = O.X1.NOT_FOUND),
                                            e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                    }
                                }
                            }),
                            getData: (0, C.L3)(function* (a) {
                                let { id: i, page: l = 0, pageSize: r = 20 } = a,
                                    { childrenLandingResource: s, modelActionsLogger: n } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING)
                                    try {
                                        var o;
                                        e.loadingState = M.G.PENDING;
                                        let a = yield s.getEditorialAlbum({ id: i });
                                        ((e.title = a.title),
                                            (e.albumsData = (0, C.wg)((null != (o = a.entities) ? o : []).map((e) => ({ id: e })))),
                                            e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE),
                                            yield t.getAlbums({ page: l, pageSize: r }));
                                    } catch (t) {
                                        (n.error(t),
                                            t instanceof O.GX &&
                                                (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = O.X1.NOT_FOUND),
                                            e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                    }
                            }),
                            reset() {
                                ((e.loadingState = M.G.IDLE), (e.title = null), e.pagesLoader.reset(), (e.albumsData = (0, C.wg)([])), (e.errorStatusCode = null));
                            },
                        };
                        return t;
                    }),
                st = C.gK
                    .compose(
                        C.gK.model('KidsEditorialPlaylistPage', {
                            errorStatusCode: C.gK.maybeNull(C.gK.number),
                            title: C.gK.maybeNull(C.gK.string),
                            playlistsData: C.gK.array(C.gK.model({ uid: C.gK.number, kind: C.gK.number })),
                            pagesLoader: (0, lx.I)(tK.$),
                        }),
                        q.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === M.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST,
                                    a = e.pagesLoader.isEmpty;
                                return (e.isRejected && t) || a;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                            get playlists() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getPlaylists: (0, C.L3)(function* (t) {
                                let { page: a = 0, pageSize: i = 20 } = t,
                                    { playlistsResource: l, modelActionsLogger: r } = (0, C._$)(e);
                                if (e.loadingState === M.G.RESOLVE && e.pagesLoader.isPageNeedToLoad(a)) {
                                    e.pagesLoader.setPageState(a, M.G.PENDING);
                                    try {
                                        let t = a * i,
                                            r = e.playlistsData.slice(t, t + i),
                                            s = yield l.getPlaylists({ playlistIds: r.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                            n = { page: a, perPage: i, total: e.playlistsData.length },
                                            o = s.playlists.map(tt.j);
                                        e.pagesLoader.setItems(o, { page: a, pager: n });
                                    } catch (t) {
                                        (r.error(t),
                                            e.pagesLoader.setItems(null, { responseStatus: a8.F.ERROR, page: a }),
                                            t instanceof O.GX &&
                                                (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = O.X1.NOT_FOUND),
                                            e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                    }
                                }
                            }),
                            getData: (0, C.L3)(function* (a) {
                                let { id: i, page: l = 0, pageSize: r = 20 } = a,
                                    { childrenLandingResource: s, modelActionsLogger: n } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING)
                                    try {
                                        var o;
                                        e.loadingState = M.G.PENDING;
                                        let a = yield s.getEditorialPlaylist({ id: i });
                                        ((e.title = a.title),
                                            (e.playlistsData = (0, C.wg)((null != (o = a.entities) ? o : []).map((e) => ({ uid: e.uid, kind: e.kind })))),
                                            e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE),
                                            yield t.getPlaylists({ page: l, pageSize: r }));
                                    } catch (t) {
                                        (n.error(t),
                                            t instanceof O.GX &&
                                                (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = O.X1.NOT_FOUND),
                                            e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                    }
                            }),
                            reset() {
                                ((e.loadingState = M.G.IDLE), (e.title = null), e.pagesLoader.reset(), (e.playlistsData = (0, C.wg)([])), (e.errorStatusCode = null));
                            },
                        };
                        return t;
                    }),
                sa = C.gK.model('KidsPage', { landing: lG, kidsEditorialPlaylistSubpage: st, kidsEditorialAlbumSubpage: se }),
                si = C.gK.model('SpecialHeaderThemeOptions', { backgroundColor: C.gK.maybe(C.gK.string), textColor: C.gK.maybe(C.gK.string) }),
                sl = C.gK.model('SpecialHeader', { title: C.gK.string, url: C.gK.string, lightTheme: si, darkTheme: si }),
                sr = C.gK
                    .model('MainPage', { landing: lG, specialHeaderLoadingState: C.gK.enumeration(Object.values(M.G)), specialHeader: C.gK.maybe(sl) })
                    .actions((e) => ({
                        getSpecialHeader: (0, C.L3)(function* () {
                            let { landingResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            if (e.specialHeaderLoadingState !== M.G.PENDING)
                                try {
                                    e.specialHeaderLoadingState = M.G.PENDING;
                                    let a = yield t.getSpecialHeader();
                                    ((e.specialHeader = (0, C.wg)(
                                        ((e) => {
                                            var t, a, i, l, r, s;
                                            if ((null == (t = e.button) ? void 0 : t.title) && (null == (a = e.button.action) ? void 0 : a.weblink))
                                                return {
                                                    title: e.button.title,
                                                    url: e.button.action.weblink,
                                                    lightTheme: {
                                                        backgroundColor: null == (i = e.lightTheme) ? void 0 : i.buttonColor,
                                                        textColor: null == (l = e.lightTheme) ? void 0 : l.buttonTitleColor,
                                                    },
                                                    darkTheme: {
                                                        backgroundColor: null == (r = e.darkTheme) ? void 0 : r.buttonColor,
                                                        textColor: null == (s = e.darkTheme) ? void 0 : s.buttonTitleColor,
                                                    },
                                                };
                                        })(a),
                                    )),
                                        (e.specialHeaderLoadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.specialHeaderLoadingState = M.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.specialHeaderLoadingState = M.G.IDLE), (e.specialHeader = void 0));
                        },
                    })),
                ss = C.gK.model('NonMusicAlbumsPageItem', { id: C.gK.number, data: C.gK.maybeNull(ey.J) }),
                sn = C.gK
                    .compose(
                        C.gK.model('NonMusicAlbumsPage', {
                            errorStatusCode: C.gK.maybe(C.gK.number),
                            title: C.gK.maybeNull(C.gK.string),
                            albums: C.gK.maybeNull(C.gK.array(ss)),
                            requestsCount: C.gK.maybe(C.gK.number),
                        }),
                        q.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === M.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST;
                                return e.loadingState === M.G.REJECT && t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getEditorialAlbums: (0, C.L3)(function* (t) {
                            let { id: a } = t,
                                { nonMusicResource: i, modelActionsLogger: l } = (0, C._$)(e);
                            if (e.loadingState !== M.G.PENDING)
                                try {
                                    var r;
                                    e.loadingState = M.G.PENDING;
                                    let t = yield i.getEditorialAlbums({ id: a });
                                    ((e.title = t.title),
                                        (null == (r = t.entities) ? void 0 : r.length) && (e.albums = (0, C.wg)(t.entities.map((e) => ({ id: e })))),
                                        e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (l.error(t),
                                        t instanceof O.GX &&
                                            (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = O.X1.NOT_FOUND),
                                        e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                }
                        }),
                        getCategoryAlbums: (0, C.L3)(function* (t) {
                            let { id: a } = t,
                                { nonMusicResource: i, modelActionsLogger: l } = (0, C._$)(e);
                            if (e.loadingState !== M.G.PENDING)
                                try {
                                    var r;
                                    e.loadingState = M.G.PENDING;
                                    let t = yield i.getCategoryAlbums({ id: a });
                                    ((e.title = t.title),
                                        (null == (r = t.albums) ? void 0 : r.length) && (e.albums = (0, C.wg)(t.albums.map((e) => ({ id: e })))),
                                        e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (l.error(t),
                                        t instanceof O.GX &&
                                            (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = O.X1.NOT_FOUND),
                                        e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                }
                        }),
                        getAlbumsByRange: (0, C.L3)(function* (t, a) {
                            var i, l, r;
                            let { albumResource: s, modelActionsLogger: n } = (0, C._$)(e);
                            if (!(null == (i = e.albums) ? void 0 : i.length)) return null;
                            ((t = Math.max(0, t)), (a = Math.min(a, e.albums.length)));
                            let o = [];
                            for (let i = t; i <= a; i++)
                                (null == (l = e.albums[i]) ? void 0 : l.id) && !(null == (r = e.albums[i]) ? void 0 : r.data) && o.push(e.albums[i].id);
                            if (!o.length) return null;
                            try {
                                let t = yield s.getAlbums({ albumIds: o });
                                (null == t ||
                                    t.forEach((t) => {
                                        var a;
                                        null == (a = e.albums) ||
                                            a.forEach((a, i) => {
                                                var l;
                                                a.id === t.id && (null == (l = e.albums) ? void 0 : l[i]) && (e.albums[i].data = (0, ek.p)(t));
                                            });
                                    }),
                                    e.requestsCount ? (e.requestsCount = e.requestsCount + 1) : (e.requestsCount = 1));
                            } catch (e) {
                                n.error(e);
                            }
                            return null;
                        }),
                        reset() {
                            ((e.loadingState = M.G.IDLE), (e.title = null), (e.albums = null), (e.requestsCount = 0));
                        },
                    })),
                so = C.gK
                    .compose(
                        C.gK.model('NonMusicCategoryPlaylistsPage', {
                            errorStatusCode: C.gK.maybeNull(C.gK.number),
                            title: C.gK.maybeNull(C.gK.string),
                            playlistsData: C.gK.array(C.gK.model({ uid: C.gK.number, kind: C.gK.number })),
                            pagesLoader: (0, lx.I)(tK.$),
                        }),
                        q.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === M.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST,
                                    a = e.pagesLoader.isEmpty;
                                return (e.isRejected && t) || a;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                            get playlists() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getPlaylists: (0, C.L3)(function* (t) {
                                let { page: a = 0, pageSize: i = 20 } = t,
                                    { playlistsResource: l, modelActionsLogger: r } = (0, C._$)(e);
                                if (e.loadingState === M.G.RESOLVE && e.pagesLoader.isPageNeedToLoad(a)) {
                                    e.pagesLoader.setPageState(a, M.G.PENDING);
                                    try {
                                        let t = a * i,
                                            r = e.playlistsData.slice(t, t + i),
                                            s = yield l.getPlaylists({ playlistIds: r.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                            n = { page: a, perPage: i, total: e.playlistsData.length },
                                            o = s.playlists.map(tt.j);
                                        e.pagesLoader.setItems(o, { page: a, pager: n });
                                    } catch (t) {
                                        (r.error(t),
                                            e.pagesLoader.setItems(null, { responseStatus: a8.F.ERROR, page: a }),
                                            t instanceof O.GX &&
                                                (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = O.X1.NOT_FOUND),
                                            e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                    }
                                }
                            }),
                            getData: (0, C.L3)(function* (a) {
                                let { categoryId: i, page: l = 0, pageSize: r = 20 } = a,
                                    { nonMusicResource: s, modelActionsLogger: n } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING)
                                    try {
                                        var o;
                                        e.loadingState = M.G.PENDING;
                                        let a = yield s.getPlaylists({ categoryId: i });
                                        ((e.title = a.title),
                                            (e.playlistsData = (0, C.wg)((null != (o = a.entities) ? o : []).map((e) => ({ uid: e.uid, kind: e.kind })))),
                                            e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE),
                                            yield t.getPlaylists({ page: l, pageSize: r }));
                                    } catch (t) {
                                        (n.error(t),
                                            t instanceof O.GX &&
                                                (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = O.X1.NOT_FOUND),
                                            e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                    }
                            }),
                            reset() {
                                (e.pagesLoader.reset(), (e.loadingState = M.G.IDLE), (e.title = null), (e.playlistsData = (0, C.wg)([])), (e.errorStatusCode = null));
                            },
                        };
                        return t;
                    }),
                sd = C.gK.model('NonMusicPage', { landing: lG, albums: sn, categoryPlaylistsSubpage: so });
            var sg = a(33660);
            let su = (e) => {
                    var t, a;
                    return (0, C.wg)({ ...(0, tt.j)(e), artists: null != (a = null == e || null == (t = e.artists) ? void 0 : t.map(l0.d)) ? a : [] });
                },
                sc = (e) => e.map((e) => (0, e_.l)(e.id, e.albumId || void 0));
            var sm = (function (e) {
                    return (
                        (e.MAJOR = 'Major'),
                        (e.NAME = 'Название'),
                        (e.ARTISCS = 'Исполнители'),
                        (e.LINK = 'Ссылка'),
                        (e.ALBUM_ID = 'albumId'),
                        (e.TRACK_ID = 'trackId'),
                        e
                    );
                })({}),
                sp = (function (e) {
                    return ((e.MAJOR = 'major'), (e.NAME = 'name'), (e.ARTISCS = 'artists'), (e.LINK = 'link'), (e.ALBUM_ID = 'albumId'), (e.TRACK_ID = 'trackId'), e);
                })({});
            let sy = C.gK
                    .model('EditorFeature', {
                        shouldShowMajor: C.gK.boolean,
                        shouldShowGenre: C.gK.boolean,
                        shouldShowDuplicate: C.gK.boolean,
                        colorMajorMap: C.gK.map(C.gK.string),
                        duplicate: C.gK.map(C.gK.number),
                    })
                    .views((e) => {
                        let t = {
                            getNumberGroupTrackDuplicated(t) {
                                let { experiments: a } = (0, R.M)(e);
                                if (t && a.checkExperiment(k.z.WebEditorsFeatures, 'on')) return e.duplicate.get(String(t.id));
                            },
                            shouldHighlightDublicatedTrack: (a) => !!(e.shouldShowDuplicate && t.getNumberGroupTrackDuplicated(a)),
                            get sheetDataPlaylist() {
                                var a, i;
                                let { location: t, playlist: l } = (0, R.M)(e),
                                    r = 'https://'.concat(t.host, '.').concat(t.tld),
                                    s = {
                                        sheet: 'Playlist',
                                        columns: [
                                            { label: sm.MAJOR, value: sp.MAJOR },
                                            { label: sm.NAME, value: sp.NAME },
                                            { label: sm.ARTISCS, value: sp.ARTISCS },
                                            { label: sm.LINK, value: sp.LINK },
                                            { label: sm.ALBUM_ID, value: sp.ALBUM_ID },
                                            { label: sm.TRACK_ID, value: sp.TRACK_ID },
                                        ],
                                        content: l.items
                                            .filter((e) => e.data)
                                            .map((e) => {
                                                var t, a, i, l, s, n, o, d, g, u, c, m, p;
                                                let { href: y } = (0, L.no)(null != (d = null == (t = e.data) ? void 0 : t.url) ? d : '', { options: { host: r } }),
                                                    E = (null == (a = e.data) ? void 0 : a.url) ? y : '';
                                                return {
                                                    major: null != (g = null == (l = e.data) || null == (i = l.major) ? void 0 : i.name) ? g : '',
                                                    name: null != (u = null == (s = e.data) ? void 0 : s.title) ? u : '',
                                                    artists: null != (c = null == (n = e.data) ? void 0 : n.artists.map((e) => e.name).join(', ')) ? c : '',
                                                    link: E,
                                                    albumId: null != (m = e.albumId) ? m : '',
                                                    trackId: null != (p = null == (o = e.data) ? void 0 : o.id) ? p : '',
                                                };
                                            }),
                                    };
                                return {
                                    data: s,
                                    settings: {
                                        fileName:
                                            (null == (a = l.meta) ? void 0 : a.uid) && (null == (i = l.meta) ? void 0 : i.kind)
                                                ? '%'.concat(l.meta.uid, '%_%').concat(l.meta.kind, '%_to_text')
                                                : 'to_text',
                                    },
                                };
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        exportToExcel: (0, C.L3)(function* () {
                            let { modelActionsLogger: t } = (0, C._$)(e);
                            try {
                                let t = yield Promise.all([a.e(714), a.e(8473), a.e(1330)]).then(a.t.bind(a, 35366, 23)),
                                    { data: i, settings: l } = e.sheetDataPlaylist;
                                if (0 === i.content.length) return a8.F.ERROR;
                                return (
                                    yield new Promise((e) => {
                                        t.default([i], l, () => e());
                                    }),
                                    a8.F.OK
                                );
                            } catch (e) {
                                return (t.error(e), a8.F.ERROR);
                            }
                        }),
                        getAllPlaylistItems: (0, C.L3)(function* (t) {
                            let { batchSize: a } = t,
                                { playlist: i } = (0, R.M)(e),
                                l = i.items.length - 1;
                            for (let e = 0; e < l; e += a) yield i.getTracksByRange({ startIndex: e, endIndex: Math.min(e + a, l) });
                        }),
                        getColorForMajor(t) {
                            let a = e.colorMajorMap.get(t);
                            if (a) return a;
                            let i = (function (e) {
                                    let t = 0;
                                    for (let a = 0; a < e.length; a++) t = e.charCodeAt(a) + ((t << 2) - t);
                                    return Math.abs(t % 360);
                                })(t),
                                l = 'hsl('.concat(i, ', 50%, 50%)');
                            return (e.colorMajorMap.set(t, l), l);
                        },
                        getDuplicates(t) {
                            let a = new Map();
                            t.forEach((e) => {
                                let t = a.get(e.id) || 0;
                                a.set(e.id, t + 1);
                            });
                            let i = 1;
                            a.forEach((t, a) => {
                                t > 1 && (e.duplicate.set(String(a), i), i++);
                            });
                        },
                        toggleShouldShowMajor() {
                            e.shouldShowMajor = !e.shouldShowMajor;
                        },
                        toggleShouldShowGenre() {
                            e.shouldShowGenre = !e.shouldShowGenre;
                        },
                        toggleShouldShowDuplicate() {
                            e.shouldShowDuplicate = !e.shouldShowDuplicate;
                        },
                        reset() {
                            ((e.shouldShowDuplicate = !1),
                                (e.shouldShowGenre = !1),
                                (e.shouldShowMajor = !1),
                                (e.colorMajorMap = (0, C.wg)({})),
                                (e.duplicate = (0, C.wg)({})));
                        },
                    })),
                sE = C.gK.model('PlaylistItem', {
                    id: C.gK.union(C.gK.string, C.gK.number),
                    albumId: C.gK.maybeNull(C.gK.union(C.gK.string, C.gK.number)),
                    key: C.gK.string,
                    data: C.gK.maybeNull(H.v),
                    loadingState: C.gK.enumeration(Object.values(M.G)),
                }),
                sS = (e) => {
                    var t, a;
                    let i = (null == (t = e.tracks) ? void 0 : t.length)
                        ? null == (a = e.tracks)
                            ? void 0
                            : a.map((e, t) =>
                                  ((e, t) => {
                                      let [a, i] = e.split(':');
                                      return (0, C.wg)({ id: a || '', albumId: i || '', key: ''.concat(a, '-').concat(t), data: null, loadingState: M.G.IDLE });
                                  })(e, t),
                              )
                        : [];
                    return { id: e.id, name: e.name, tracks: (0, C.wg)(i) };
                },
                sb = C.gK.model('PlaylistFiltersItem', { id: C.gK.string, name: C.gK.string, tracks: C.gK.array(sE) }),
                sv = C.gK
                    .compose(
                        C.gK.model('PlaylistPageFilters', {
                            items: C.gK.maybeNull(C.gK.array(sb)),
                            activeFilter: C.gK.maybe(C.gK.string),
                            activeFilterName: C.gK.maybeNull(C.gK.string),
                        }),
                        q.X,
                        D.p,
                    )
                    .views((e) => {
                        let t = {
                            get isShimmerVisible() {
                                return e.isRejected || e.isLoading;
                            },
                            get activeFilterIndex() {
                                var a;
                                let t = null == (a = e.items) ? void 0 : a.findIndex((t) => t.id === e.activeFilter);
                                return t && t > -1 ? t : 0;
                            },
                            get analyticsParamsActiveFilterIndex() {
                                return t.activeFilterIndex + 1;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getFilters: (0, C.L3)(function* () {
                                var a, i;
                                let { filtersResource: l, modelActionsLogger: r } = (0, C._$)(e),
                                    { sonataState: s, playlist: n } = (0, R.M)(e);
                                if (e.isLoading || !(null == (a = n.items) ? void 0 : a.length)) return;
                                let o = n.items.map((e) => String((0, ir.V)(e.id, e.albumId))) || [];
                                try {
                                    e.loadingState = M.G.PENDING;
                                    let a = yield l.getTracksFilters({ trackIds: o });
                                    ((e.items = (0, C.wg)(
                                        ((e) => {
                                            let t = e.filters.map(sS);
                                            if (t.length < 3) return [];
                                            let a = t.find((e) => e.id === i5.Q.ALL);
                                            if (!a) return [];
                                            let i = t.filter((e) => e.tracks.length >= 8);
                                            return i.length < 2 ? [] : [a].concat(i.slice(0, 7));
                                        })(a),
                                    )),
                                        t.setActiveFilter(s.playlistFilter),
                                        t.getFilterName(s.playlistFilter || i5.Q.ALL));
                                    let r = null == (i = e.items) ? void 0 : i.find((t) => t.id === e.activeFilter);
                                    (r && (n.setItems(r.tracks), s.setUnloadedEntitiesData(sc(n.items))), (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (r.error(t), (e.loadingState = M.G.REJECT));
                                }
                            }),
                            getFilterName: (0, C.L3)(function* (t) {
                                let { filtersResource: a, modelActionsLogger: i } = (0, C._$)(e);
                                try {
                                    e.activeFilterName = (yield a.getFilterName({ filterId: t })).name;
                                } catch (e) {
                                    i.error(e);
                                }
                            }),
                            handleFilterClick(a) {
                                if (!(0, C._n)(e)) return;
                                let { sonataState: i, playlist: l } = (0, R.M)(e);
                                (t.setActiveFilter(a.id),
                                    t.getFilterName(a.id),
                                    l.setItems(e.activeFilter ? a.tracks : l.initialItems),
                                    i.setUnloadedEntitiesData(sc(l.items)));
                            },
                            setActiveFilter(t) {
                                t !== i5.Q.ALL ? (e.activeFilter = t) : (e.activeFilter = void 0);
                            },
                            reset() {
                                (e.destroyItems([e.items]), (e.loadingState = M.G.IDLE), (e.activeFilter = void 0), (e.activeFilterName = null));
                            },
                        };
                        return t;
                    }),
                sK = C.gK
                    .compose(
                        C.gK.model('PlaylistPageSearch', {
                            errorStatusCode: C.gK.maybeNull(C.gK.number),
                            text: C.gK.string,
                            playlistTrackIds: C.gK.maybeNull(C.gK.array(C.gK.string)),
                            suggestedTrackIds: C.gK.maybeNull(C.gK.array(C.gK.string)),
                            additionTrackInProggress: C.gK.maybeNull(C.gK.string),
                            tracks: C.gK.maybeNull(C.gK.array(H.v)),
                            isFocused: C.gK.optional(C.gK.boolean, !1),
                        }),
                        q.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === M.G.PENDING;
                        },
                        get hasText() {
                            return !!e.text.length;
                        },
                        get suggestedTracks() {
                            var t;
                            return null == (t = e.suggestedTrackIds)
                                ? void 0
                                : t.map((t) => {
                                      var a;
                                      return (null == (a = e.tracks) ? void 0 : a.find((e) => e.id === t)) || null;
                                  });
                        },
                        get playlistTracks() {
                            let t = [...(e.playlistTrackIds || [])];
                            return (
                                e.additionTrackInProggress && t.unshift(e.additionTrackInProggress),
                                null == t
                                    ? void 0
                                    : t.map((t) => {
                                          var a;
                                          return (
                                              (null == (a = e.tracks)
                                                  ? void 0
                                                  : a.find((e) => {
                                                        var a;
                                                        return (
                                                            ((null == (a = e.mainAlbum) ? void 0 : a.id) && t.includes(':')
                                                                ? ''.concat(e.id, ':').concat(e.mainAlbum.id)
                                                                : e.id) === t
                                                        );
                                                    })) || null
                                          );
                                      })
                            );
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getTracksMeta: (0, C.L3)(function* () {
                                let { tracksResource: t, modelActionsLogger: a } = (0, C._$)(e),
                                    i = [...(e.playlistTrackIds || [])].concat(e.suggestedTrackIds || []);
                                try {
                                    let a = yield t.getTracksMeta({ trackIds: i, removeDuplicates: !0, withProgress: !0 });
                                    ((e.tracks = (0, C.wg)(null == a ? void 0 : a.map((e) => (0, eH.v)(e)))),
                                        e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                                } catch (e) {
                                    a.error(e);
                                }
                                return null;
                            }),
                            getTracks: (0, C.L3)(function* (a) {
                                let { uid: i, kind: l } = a,
                                    { searchPlaylistResource: r, modelActionsLogger: s } = (0, C._$)(e);
                                if (e.loadingState === M.G.PENDING || !e.hasText || !(0, C._n)(e)) return;
                                let { playlist: n } = (0, R.M)(e);
                                try {
                                    var o, d;
                                    let a;
                                    e.loadingState = M.G.PENDING;
                                    let { playlistTrackIds: s = [], suggestedTrackIds: g = [] } = yield r.getTrackIds({ uid: i, kind: l, part: e.text }),
                                        u =
                                            ((a = n.items),
                                            s.map((e) => {
                                                let t = a.find((t) => String(t.id) === e);
                                                return (null == t ? void 0 : t.albumId) ? ''.concat(e, ':').concat(t.albumId) : e;
                                            }));
                                    ((e.playlistTrackIds = (0, C.wg)(u)),
                                        (e.suggestedTrackIds = (0, C.wg)(g)),
                                        ((null == (o = e.playlistTrackIds) ? void 0 : o.length) || 0) + ((null == (d = e.suggestedTrackIds) ? void 0 : d.length) || 0) > 0
                                            ? t.getTracksMeta()
                                            : (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (s.error(t),
                                        t instanceof O.GX &&
                                            (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = O.X1.NOT_FOUND),
                                        e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                }
                            }),
                            setText(t) {
                                e.text = t;
                            },
                            setIdleState() {
                                e.loadingState = M.G.IDLE;
                            },
                            setAdditionTrackAnimation(t) {
                                e.additionTrackInProggress = t;
                            },
                            setFocus() {
                                e.isFocused = !0;
                            },
                            removeFocus() {
                                e.isFocused = !1;
                            },
                            replaceAdditionTrackInProggress() {
                                if (e.additionTrackInProggress) {
                                    var t, a;
                                    (null == (t = e.playlistTrackIds) || t.unshift(e.additionTrackInProggress),
                                        (e.suggestedTrackIds = (0, C.wg)(null == (a = e.suggestedTrackIds) ? void 0 : a.filter((t) => t !== e.additionTrackInProggress))),
                                        (e.additionTrackInProggress = null));
                                }
                            },
                            resetAdditionTrackAnimation() {
                                e.additionTrackInProggress = null;
                            },
                            reset() {
                                ((e.playlistTrackIds = null),
                                    (e.suggestedTrackIds = null),
                                    (e.additionTrackInProggress = null),
                                    (e.tracks = null),
                                    (e.loadingState = M.G.IDLE),
                                    (e.isFocused = !1));
                            },
                        };
                        return t;
                    }),
                sI = C.gK
                    .compose(
                        C.gK.model('PlaylistPage', {
                            uuid: C.gK.maybeNull(C.gK.string),
                            meta: C.gK.maybeNull(r_),
                            items: C.gK.array(sE),
                            errorStatusCode: C.gK.maybeNull(C.gK.number),
                            similarPlaylists: C.gK.array(ev.I),
                            initialItems: C.gK.array(sE),
                            shouldShowTrailerOnboarding: C.gK.maybeNull(C.gK.boolean),
                            editorFeature: sy,
                            search: sK,
                            filters: sv,
                            similarEntities: eR,
                        }),
                        D.p,
                        q.X,
                    )
                    .views((e) => {
                        let t = {
                            getUrl(t) {
                                if (!e.uuid) return '';
                                let { href: a } = (0, th.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.uuid }, query: t });
                                return a;
                            },
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === M.G.PENDING;
                            },
                            get isDisabled() {
                                var a;
                                return e.isResolved && (0 === e.items.length || !(null == (a = e.meta) ? void 0 : a.isAvailable));
                            },
                            get isNotFound() {
                                return e.isRejected && e.errorStatusCode === O.X1.NOT_FOUND;
                            },
                            get hasSimilarPlaylists() {
                                return t.isLoading || e.similarPlaylists.length > 0;
                            },
                            get isEmptyPlaylist() {
                                return e.isResolved && 0 === e.items.length;
                            },
                            get playbackEntitiesData() {
                                return sc(e.items);
                            },
                            get isSimilarEntitiesEnabled() {
                                let { experiments: t } = (0, R.M)(e);
                                return t.checkExperiment(k.z.WebNextWaveAgentExperiment, 'on');
                            },
                            get hasSimilarEntities() {
                                var i;
                                return !!(
                                    t.isSimilarEntitiesEnabled &&
                                    e.similarEntities.isLoaded &&
                                    (null == (i = e.similarEntities.data) ? void 0 : i.items) &&
                                    e.similarEntities.data.items.length > 0
                                );
                            },
                            get contextMeta() {
                                var l, r, s, n, o, d, g, u, c, m;
                                return {
                                    isAvailable: null == (l = e.meta) ? void 0 : l.isAvailable,
                                    id: e.meta.id,
                                    uid: null == (r = e.meta) ? void 0 : r.uid,
                                    uuid: e.meta.uuid,
                                    kind: null == (s = e.meta) ? void 0 : s.kind,
                                    title: null == (n = e.meta) ? void 0 : n.title,
                                    coverUri: null == (o = e.meta) ? void 0 : o.coverUri,
                                    likesCount: null == (d = e.meta) ? void 0 : d.likesCount,
                                    averageColor: null == (g = e.meta) ? void 0 : g.averageColor,
                                    owner: null == (u = e.meta) ? void 0 : u.owner,
                                    description: null == (c = e.meta) ? void 0 : c.description,
                                    modified: null == (m = e.meta) ? void 0 : m.modified,
                                };
                            },
                            get isDragAndDropEnabled() {
                                var p;
                                if (!(0, C._n)(e)) return !1;
                                let { ugcUploadCenter: t } = (0, R.M)(e);
                                return !!(
                                    (null == (p = e.meta) ? void 0 : p.canUserChange) &&
                                    (e.items.length > 1 || t.getUploadingTracksByPlaylistKind(e.meta.kind).length > 0)
                                );
                            },
                            get itemsKeys() {
                                return e.items.map((e) => e.key);
                            },
                            get isFavouritePlaylist() {
                                var y;
                                return (null == (y = e.meta) ? void 0 : y.kind) === i6.j.LIKE;
                            },
                            get enableVariousAutoFlow() {
                                return !!e.filters.activeFilter;
                            },
                            get trackIds() {
                                return e.initialItems.map((e) => String((0, ir.V)(e.id, e.albumId)));
                            },
                            get isRewind2024Playlist() {
                                var E;
                                return (null == (E = e.meta) ? void 0 : E.generatedPlaylistType) === 'rewind2024';
                            },
                            get areAllTracksUploaded() {
                                return e.items.every((e) => e.loadingState === M.G.RESOLVE);
                            },
                            get shouldShowEmptyBlock() {
                                var S, b;
                                if (!(0, C._n)(e)) return !1;
                                let { ugcUploadCenter: a } = (0, R.M)(e),
                                    i = !!(null == (S = e.meta) ? void 0 : S.isOwnPlaylist),
                                    l = !!((null == (b = e.meta) ? void 0 : b.kind) && a.getUploadingTracksByPlaylistKind(e.meta.kind).length),
                                    r = !!e.search.hasText;
                                return t.isEmptyPlaylist && i && !l && !r;
                            },
                            get virtualListItemsCount() {
                                var v, K;
                                if (e.search.hasText) return 0;
                                return null != (K = null == (v = e.items) ? void 0 : v.length) ? K : 0;
                            },
                            get isFiltersAvailable() {
                                var I;
                                return !!(t.isFavouritePlaylist && (null == (I = e.meta) ? void 0 : I.isOwnPlaylist));
                            },
                            get itemsForCopy() {
                                var L;
                                return null == (L = e.items) ? void 0 : L.map((e) => ({ id: String(e.id), albumId: e.albumId ? Number(e.albumId) : void 0 }));
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getTracksByRange: (0, C.L3)(function* (t) {
                                var a, i;
                                let { startIndex: l, endIndex: r } = t,
                                    { tracksResource: s, modelActionsLogger: n } = (0, C._$)(e);
                                if (!(null == (a = e.meta) ? void 0 : a.uid) || !(null == (i = e.meta) ? void 0 : i.kind)) return null;
                                ((l = Math.max(0, l)), (r = Math.min(r, e.items.length)));
                                let o = ((e, t) => {
                                    let { startIndex: a, endIndex: i } = t,
                                        l = [];
                                    for (let t = a; t <= i; t++) {
                                        var r, s;
                                        ((null == (r = e[t]) ? void 0 : r.loadingState) === M.G.IDLE || (null == (s = e[t]) ? void 0 : s.loadingState) === M.G.REJECT) &&
                                            l.push(t);
                                    }
                                    return l;
                                })(e.items, { startIndex: l, endIndex: r });
                                try {
                                    let t,
                                        a =
                                            ((t = e.items),
                                            o.map((e) => {
                                                let a = t[e];
                                                return (null == a ? void 0 : a.albumId) ? ''.concat(a.id, ':').concat(a.albumId) : String(null == a ? void 0 : a.id);
                                            }));
                                    if (!a.length) return null;
                                    o.forEach((t) => {
                                        let a = e.items[t];
                                        a && (a.loadingState = M.G.PENDING);
                                    });
                                    let i = yield s.getTracksMeta({ trackIds: a, withProgress: !0 });
                                    o.forEach((t, a) => {
                                        let l = null == i ? void 0 : i[a];
                                        if (e.items[t] && l) {
                                            var r, s;
                                            e.items[t] = {
                                                id: l.id,
                                                albumId: (null == (s = l.albums) || null == (r = s[0]) ? void 0 : r.id) || null,
                                                key: ''.concat(l.id, '-').concat(t),
                                                data: (0, eH.v)(l),
                                                loadingState: M.G.RESOLVE,
                                            };
                                        }
                                    });
                                } catch (t) {
                                    (n.error(t),
                                        o.forEach((t) => {
                                            let a = e.items[t];
                                            a && (a.loadingState = M.G.REJECT);
                                        }));
                                }
                                return null;
                            }),
                            updateData: (0, C.L3)(function* (a) {
                                var i, l;
                                if ((null == a ? void 0 : a.error) === 'not-found') return ((e.errorStatusCode = O.X1.NOT_FOUND), (e.loadingState = M.G.REJECT), null);
                                let { sonataState: r, playlist: s, experiments: n, user: o } = (0, R.M)(e);
                                return (
                                    (e.similarPlaylists = (0, C.wg)(null == (i = a.similarPlaylists) ? void 0 : i.map(su))),
                                    (e.meta = (0, rN.Z)(a)),
                                    (null == (l = e.meta) ? void 0 : l.isOwnFavouritePlaylist) && (e.meta.visibility = o.settings.userMusicVisibility),
                                    (e.items = (0, C.wg)(
                                        a.tracks.map((e, t) => ({
                                            id: String(e.id),
                                            albumId: e.albumId || null,
                                            key: ''.concat(e.id, '-').concat(t),
                                            loadingState: M.G.IDLE,
                                        })),
                                    )),
                                    (e.initialItems = (0, sg.HO)(e.items)),
                                    r.setUnloadedEntitiesData(sc(e.items)),
                                    (null == n ? void 0 : n.checkExperiment(k.z.WebEditorsFeatures, 'on')) && s.editorFeature.getDuplicates(e.items),
                                    yield t.getTracksByRange({ startIndex: 0, endIndex: 10 })
                                );
                            }),
                            getPlaylistByUserIdAndKind: (0, C.L3)(function* (a) {
                                let { userId: i, playlistKind: l, resumeStream: r = !1, trackMetaType: s, preloadedPlaylist: n } = a,
                                    { usersResource: o, modelActionsLogger: d } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING)
                                    try {
                                        e.loadingState = M.G.PENDING;
                                        let a = n;
                                        if (
                                            (a || (a = yield o.getPlaylistWithTracksIds({ userId: i, playlistKind: l, resumeStream: r, trackMetaType: s })),
                                            (e.uuid = null == a ? void 0 : a.playlistUuid),
                                            'string' != typeof a.playlistUuid)
                                        ) {
                                            ((e.errorStatusCode = O.X1.NOT_FOUND), (e.loadingState = M.G.REJECT));
                                            return;
                                        }
                                        (yield t.updateData(a), (e.loadingState = M.G.RESOLVE));
                                    } catch (t) {
                                        (d.error(t),
                                            t instanceof O.GX &&
                                                (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = O.X1.NOT_FOUND),
                                            (e.loadingState = M.G.REJECT));
                                    }
                            }),
                            getPlaylistByUuid: (0, C.L3)(function* (a) {
                                let { playlistUuid: i, richTracks: l = !1, resumeStream: r = !1, preloadedPlaylist: s } = a,
                                    { playlistResource: n, modelActionsLogger: o } = (0, C._$)(e);
                                if (((e.uuid = i), e.loadingState !== M.G.PENDING))
                                    try {
                                        e.loadingState = M.G.PENDING;
                                        let a = s;
                                        (a || (a = yield n.getPlaylist({ playlistUuid: i, resumeStream: r, richTracks: l })),
                                            yield t.updateData(a),
                                            e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                                    } catch (t) {
                                        (o.error(t),
                                            t instanceof O.GX &&
                                                (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = O.X1.NOT_FOUND),
                                            e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                    }
                            }),
                            getSimilarEntities: (0, C.L3)(function* (t) {
                                let { playlistResource: a, modelActionsLogger: i } = (0, C._$)(e);
                                if (!e.similarEntities.isLoading)
                                    try {
                                        e.similarEntities.loadingState = eu.PENDING;
                                        let i = yield a.getSimilarEntities(t);
                                        ((e.similarEntities.data = eg(i)), (e.similarEntities.loadingState = eu.RESOLVE));
                                    } catch (t) {
                                        (i.error(t), (e.similarEntities.loadingState = eu.REJECT));
                                    }
                            }),
                            updatePlaylistTrackByUuid: (0, C.L3)(function* (a) {
                                let { playlistUuid: i, richTracks: l = !1, resumeStream: r = !1 } = a,
                                    { playlistResource: s, modelActionsLogger: n } = (0, C._$)(e);
                                e.uuid = i;
                                try {
                                    let a = yield s.getPlaylist({ playlistUuid: i, resumeStream: r, richTracks: l }),
                                        n = [];
                                    if (
                                        ((e.items = (0, C.wg)(
                                            a.tracks.map((t, a) => {
                                                var i, l;
                                                let r = String(t.id),
                                                    s = t.albumId || null;
                                                return r === (null == (i = e.items[a]) ? void 0 : i.id) && s === (null == (l = e.items[a]) ? void 0 : l.albumId)
                                                    ? e.items[a]
                                                    : (n.push(a),
                                                      { id: String(t.id), albumId: t.albumId || null, key: ''.concat(t.id, '-').concat(a), loadingState: M.G.IDLE });
                                            }),
                                        )),
                                        e.meta && ((e.meta.modified = a.modified), (e.meta.revision = a.revision), n.length))
                                    ) {
                                        let e = Math.min(...n),
                                            a = Math.max(...n);
                                        t.getTracksByRange({ startIndex: e, endIndex: a });
                                    }
                                    if ((e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE), (0, C._n)(e))) {
                                        let { sonataState: t } = (0, R.M)(e);
                                        t.setUnloadedEntitiesData(sc(e.items));
                                    }
                                } catch (t) {
                                    (n.error(t),
                                        t instanceof O.GX &&
                                            (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = O.X1.NOT_FOUND),
                                        e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                }
                            }),
                            moveTrack(t, a) {
                                let i = (0, sg.HO)(e.items[t]);
                                if (
                                    !(t < 0) &&
                                    !(a < 0) &&
                                    !(t >= e.items.length) &&
                                    !(a >= e.items.length) &&
                                    i &&
                                    (e.items.splice(t, 1), e.items.splice(a, 0, i), (0, C._n)(e))
                                ) {
                                    let { sonataState: t } = (0, R.M)(e);
                                    t.setUnloadedEntitiesData(sc(e.items));
                                }
                            },
                            removeTracksFromItems(t, a) {
                                if ((e.items.splice(t, a), (0, C._n)(e))) {
                                    let { sonataState: t } = (0, R.M)(e);
                                    t.setUnloadedEntitiesData(sc(e.items));
                                }
                            },
                            setItems(t) {
                                e.items = (0, C.wg)((0, sg.HO)(t));
                            },
                            setShouldShowTrailerOnboarding(t) {
                                e.shouldShowTrailerOnboarding = t;
                            },
                            reset() {
                                let { sonataState: t } = (0, R.M)(e);
                                (t.resetUnloadedEntitiesData(),
                                    (e.uuid = null),
                                    (e.loadingState = M.G.IDLE),
                                    (e.errorStatusCode = null),
                                    (e.shouldShowTrailerOnboarding = null),
                                    (e.similarEntities.data = void 0),
                                    (e.similarEntities.loadingState = eu.IDLE),
                                    e.search.setText(''),
                                    e.search.reset(),
                                    e.filters.reset(),
                                    e.destroyItems([e.meta, e.items, e.initialItems, e.similarPlaylists]));
                            },
                            refresh() {
                                var a, i;
                                (null == (a = e.meta) ? void 0 : a.uuid) &&
                                    t.getPlaylistByUuid({ playlistUuid: null == (i = e.meta) ? void 0 : i.uuid, resumeStream: !1 });
                            },
                            refreshTracks() {
                                var a, i;
                                (null == (a = e.meta) ? void 0 : a.uuid) &&
                                    t.updatePlaylistTrackByUuid({ playlistUuid: null == (i = e.meta) ? void 0 : i.uuid, resumeStream: !1 });
                            },
                        };
                        return t;
                    });
            var sL = a(52669),
                sT = a(88429),
                sh = a(36054);
            let sN = C.gK.model('SearchFilter', { id: C.gK.string, displayName: C.gK.string });
            var sA = a(68103),
                sC = a(22965);
            let sf = C.gK.model('Ugc'),
                sR = C.gK.compose(H.v, sf).named('UgcTrack'),
                sk = C.gK.model('SearchAlbum', { type: C.gK.literal(sA.n.ALBUM), data: ey.J }),
                sD = C.gK.model('SearchPlaylist', { type: C.gK.literal(sA.n.PLAYLIST), data: ev.I }),
                s_ = C.gK.model('SearchArtist', { type: C.gK.literal(sA.n.ARTIST), data: eS.P }),
                sP = C.gK.model('SearchUgcTrack', { type: C.gK.literal(sA.n.UGC_TRACK), data: sR }),
                sO = C.gK.model('SearchTrack', { type: C.gK.literal(sA.n.TRACK), data: H.v }),
                sw = C.gK.model('SearchVibe', { type: C.gK.literal(sA.n.WAVE), data: eL.G }),
                sG = C.gK.model('SearchPodcast', { type: C.gK.literal(sA.n.PODCAST), data: ey.J }),
                sM = C.gK.model('SearchPodcastEpisode', { type: C.gK.literal(sA.n.PODCAST_EPISODE), data: H.v }),
                sU = C.gK.model('SearchClip', { type: C.gK.literal(sA.n.CLIP), data: aS }),
                sB = C.gK.model('SearchConcert', { type: C.gK.literal(sA.n.CONCERT), data: ai.a }),
                sF = C.gK.union(sk, sD, s_, sO, sP, sw, sG, sM, sU, sB),
                sV = C.gK.model('SearchBestVibe', { type: C.gK.literal(sC.r.WAVE), data: eL.G }),
                sx = C.gK.model('SearchBestPlaylist', { type: C.gK.literal(sC.r.PLAYLIST), data: ev.I }),
                sj = C.gK.model('SearchBestArtist', { type: C.gK.literal(sC.r.ARTIST), data: eS.P }),
                sW = C.gK.model('SearchBestPresave', { type: C.gK.literal(sC.r.UPCOMING), data: tp }),
                sX = C.gK.model('SearchBestAlbum', { type: C.gK.literal(sC.r.ALBUM), data: ey.J }),
                s$ = C.gK.model('SearchBestRecentRelease', { type: C.gK.literal(sC.r.RECENT_RELEASE), data: ey.J }),
                sJ = C.gK.model('SearchBestConcert', { type: C.gK.literal(sC.r.CONCERT), data: ai.a }),
                sY = C.gK.model('SearchBestTrack', { type: C.gK.literal(sC.r.TRACK), data: H.v }),
                sH = C.gK.model('SearchBestPodcast', { type: C.gK.literal(sC.r.PODCAST), data: ey.J }),
                sq = C.gK.model('SearchBestPodcastEpisode', { type: C.gK.literal(sC.r.PODCAST_EPISODE), data: H.v }),
                sz = C.gK.model('SearchBestOverview', { type: C.gK.literal(sC.r.OVERVIEW), data: ip }),
                sQ = C.gK.model('SearchBestNonMusic', { type: C.gK.literal(sC.r.NON_MUSIC), data: ey.J }),
                sZ = C.gK.model('SearchBestClip', { type: C.gK.literal(sC.r.CLIP), data: aS }),
                s0 = C.gK.model('SearchBestBookChapter', { type: C.gK.literal(sC.r.BOOK_CHAPTER), data: H.v }),
                s1 = C.gK.union(sX, s$, sV, sj, sJ, sY, sH, sq, sz, sQ, sW, sx, sZ, s0),
                s3 = [sA.n.ARTIST, sA.n.ALBUM, sA.n.TRACK, sA.n.PLAYLIST, sA.n.WAVE, sA.n.PODCAST, sA.n.PODCAST_EPISODE],
                s2 = [sA.n.ALBUM, sA.n.ARTIST, sA.n.PLAYLIST, sA.n.TRACK, sA.n.UGC_TRACK, sA.n.WAVE, sA.n.PODCAST, sA.n.PODCAST_EPISODE, sA.n.CLIP, sA.n.CONCERT],
                s8 = (e) => {
                    var t, a;
                    return (0, C.wg)({ ...(0, eH.v)(e), artists: null != (a = null == e || null == (t = e.artists) ? void 0 : t.map(l0.d)) ? a : [] });
                };
            var s5 = a(19966);
            let s6 = (e) => {
                    var t;
                    let { wave: a } = e;
                    return (0, C.wg)({
                        title: a.title,
                        description: a.subTitle,
                        seeds: null != (t = a.seeds) ? t : [''.concat(a.id.type, ':').concat(a.id.tag)],
                        backgroundColor: a.color,
                        imageUrl: a.image,
                        agent: (0, s5.K)(a.agent),
                    });
                },
                s9 = (e) => {
                    let { type: t } = e;
                    switch (t) {
                        case sA.n.UGC_TRACK:
                            return { type: t, data: s8(e.track) };
                        case sA.n.TRACK:
                            return { type: t, data: (0, eH.v)(e.track) };
                        case sA.n.ARTIST:
                            return { type: t, data: (0, l0.d)(e.artist) };
                        case sA.n.PLAYLIST:
                            return { type: t, data: su({ ...e.playlist, artists: [] }) };
                        case sA.n.ALBUM:
                            return { type: t, data: (0, ek.p)(e.album) };
                        case sA.n.WAVE:
                            return { type: t, data: s6(e) };
                        case sA.n.PODCAST:
                            return { type: t, data: (0, ek.p)(e.podcast) };
                        case sA.n.PODCAST_EPISODE:
                            return { type: t, data: (0, eH.v)(e.podcast_episode) };
                        default:
                            return null;
                    }
                };
            (n || (n = {})).QUERY_TO_VIBE = 'q2v_wave';
            let s4 = C.gK.compose(C.gK.model('SearchHistoryPage', { items: C.gK.array(sF) }), D.p, q.X).actions((e) => ({
                    reset() {
                        e.destroyItems([e.items]);
                    },
                })),
                s7 = C.gK
                    .model('SearchHistory', { loadingState: C.gK.enumeration(Object.values(M.G)), shouldUpdateHistory: C.gK.optional(C.gK.boolean, !1) })
                    .views((e) => ({
                        get hasCleared() {
                            return e.loadingState === M.G.RESOLVE;
                        },
                    }))
                    .actions((e) => ({
                        setShouldUpdateHistory(t) {
                            e.shouldUpdateHistory = t;
                        },
                        clear: (0, C.L3)(function* () {
                            if (!(0, C._n)(e)) return;
                            let { user: t } = (0, R.M)(e),
                                { usersResource: a, modelActionsLogger: i } = (0, C._$)(e);
                            if (e.loadingState !== M.G.PENDING && t.account.data.uid)
                                try {
                                    ((e.loadingState = M.G.PENDING), yield a.clearSearchHistory({ userId: t.account.data.uid }), (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), (e.loadingState = M.G.REJECT));
                                }
                        }),
                        reset() {
                            e.loadingState = M.G.IDLE;
                        },
                    })),
                ne = C.gK
                    .compose(
                        C.gK.model('SearchPage', {
                            searchCorrectedText: C.gK.maybeNull(C.gK.string),
                            searchRequestId: C.gK.optional(C.gK.string, ''),
                            bestResults: C.gK.array(s1),
                            historyPage: s4,
                            mixes: sT.Y,
                            landing: lG,
                            history: s7,
                            filters: C.gK.maybeNull(C.gK.array(sN)),
                            pagesLoader: (0, lx.I)(sF, { useAppendMode: !0 }),
                            q2vResults: C.gK.array(eL.G),
                        }),
                        D.p,
                        q.X,
                    )
                    .views((e) => ({
                        get isHistoryShimmerVisible() {
                            return e.historyPage.isLoading || e.historyPage.isRejected;
                        },
                        get isHistoryLoading() {
                            return e.historyPage.isLoading;
                        },
                        get isHistoryReady() {
                            return e.historyPage.isNeededToLoad;
                        },
                        get isEmptyHistory() {
                            return !e.historyPage.items.length && e.historyPage.isResolved;
                        },
                        get isShimmerVisible() {
                            return e.isLoading || e.isRejected;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isSomePageResolved && e.pagesLoader.isEmpty && 0 === e.bestResults.length && 0 === e.q2vResults.length;
                        },
                        filterPosition(t) {
                            var a, i;
                            return (null != (i = null == (a = e.filters) ? void 0 : a.findIndex((e) => e.id === t)) ? i : 0) + 1;
                        },
                    }))
                    .actions((e) => {
                        let t = new Map(),
                            a = new Set(),
                            i = (e, i) => {
                                e.forEach((e) => {
                                    let { feedback: l, key: r } = e;
                                    (a.delete(r), i && t.get(r) === l && t.delete(r));
                                });
                            };
                        return {
                            getSearchResults: (0, C.L3)(function* (t) {
                                let { text: a, filter: i, page: l = 0 } = t;
                                if (l > 0 && !e.pagesLoader.isPageNeedToLoad(l)) return;
                                let { searchResource: r } = (0, C._$)(e),
                                    {
                                        settings: { isMobile: s },
                                        experiments: o,
                                        concerts: d,
                                    } = (0, R.M)(e),
                                    g = o.checkExperiment(k.z.WebNextSearchConcerts, 'on'),
                                    u = i === sL.$.TOP,
                                    c = d.concertsLocationForRequest;
                                try {
                                    var m, p;
                                    ((e.loadingState = M.G.PENDING), e.pagesLoader.setPageState(l, M.G.PENDING));
                                    let t = yield r.getInstantMixedSearch({
                                        text: a,
                                        type: ((e, t) => {
                                            let { withClips: a, withConcerts: i } = t,
                                                l = [...s2];
                                            return (
                                                e === sL.$.TOP && (l = l.filter((e) => e !== sA.n.UGC_TRACK)),
                                                a || (l = l.filter((e) => e !== sA.n.CLIP)),
                                                i || (l = l.filter((e) => e !== sA.n.CONCERT)),
                                                l
                                            );
                                        })(i, { withClips: !s, withConcerts: g }),
                                        filter: u ? void 0 : i,
                                        withLikesCount: !0,
                                        page: l,
                                        pageSize: sh.k,
                                        withBestResults: u,
                                        locations: c,
                                    });
                                    t.misspellResult && (e.searchCorrectedText = t.misspellResult);
                                    let o = [];
                                    (t.results &&
                                        t.results.length > 0 &&
                                        ((o = t.results.map((e) => {
                                            switch (e.type) {
                                                case sA.n.ALBUM:
                                                    return { type: sA.n.ALBUM, data: (0, ek.p)(e.album) };
                                                case sA.n.ARTIST:
                                                    return { type: sA.n.ARTIST, data: (0, l0.d)(e.artist) };
                                                case sA.n.PLAYLIST:
                                                    return { type: sA.n.PLAYLIST, data: su({ ...e.playlist, artists: [] }) };
                                                case sA.n.UGC_TRACK:
                                                    return { type: sA.n.UGC_TRACK, data: s8(e.track) };
                                                case sA.n.TRACK:
                                                    return { type: sA.n.TRACK, data: (0, eH.v)(e.track) };
                                                case sA.n.WAVE:
                                                    return { type: sA.n.WAVE, data: s6(e) };
                                                case sA.n.PODCAST:
                                                    return { type: sA.n.PODCAST, data: (0, ek.p)(e.podcast) };
                                                case sA.n.CLIP:
                                                    return { type: sA.n.CLIP, data: rs(e.clip) };
                                                case sA.n.PODCAST_EPISODE:
                                                    return { type: sA.n.PODCAST_EPISODE, data: (0, eH.v)(e.podcast_episode) };
                                                case sA.n.CONCERT:
                                                    return { type: sA.n.CONCERT, data: (0, eY.h)(e.concert.concert, e.concert.minPrice) };
                                            }
                                        })),
                                        (e.searchRequestId = t.searchRequestId)),
                                        t.bestResults &&
                                            t.bestResults.length > 0 &&
                                            (e.bestResults = (0, C.wg)(
                                                t.bestResults
                                                    .map((e) => {
                                                        switch (e.type) {
                                                            case sC.r.ALBUM:
                                                                return {
                                                                    type: sC.r.ALBUM,
                                                                    data: (0, et.s)({
                                                                        album: e.best_result_album.album,
                                                                        artists: e.best_result_album.artists,
                                                                        trailer: e.best_result_album.trailer,
                                                                    }),
                                                                };
                                                            case sC.r.PLAYLIST:
                                                                return {
                                                                    type: sC.r.PLAYLIST,
                                                                    data: (0, er.b)({
                                                                        playlist: e.best_result_playlist.playlist,
                                                                        likesCount: e.best_result_playlist.likesCount,
                                                                        tracksCount: e.best_result_playlist.trackCount,
                                                                        trailer: e.best_result_playlist.trailer,
                                                                    }),
                                                                };
                                                            case sC.r.RECENT_RELEASE:
                                                                return {
                                                                    type: sC.r.RECENT_RELEASE,
                                                                    data: (0, et.s)({
                                                                        album: e.best_result_recent_release.album,
                                                                        artists: e.best_result_recent_release.artists,
                                                                        trailer: e.best_result_recent_release.trailer,
                                                                    }),
                                                                };
                                                            case sC.r.WAVE:
                                                                return { type: sC.r.WAVE, data: (0, tM.e)(e.best_result_wave) };
                                                            case sC.r.ARTIST:
                                                                return {
                                                                    type: sC.r.ARTIST,
                                                                    data: (0, ei.a)({
                                                                        artist: e.best_result_artist.artist,
                                                                        trailer: e.best_result_artist.trailer,
                                                                        likesCount: e.best_result_artist.likesCount,
                                                                    }),
                                                                };
                                                            case sC.r.UPCOMING:
                                                                return { type: sC.r.UPCOMING, data: e5(e.best_result_upcoming) };
                                                            case sC.r.CONCERT:
                                                                return { type: sC.r.CONCERT, data: lH(e.best_result_concert) };
                                                            case sC.r.PODCAST:
                                                                return {
                                                                    type: sC.r.PODCAST,
                                                                    data: (0, et.s)({ album: e.best_result_podcast.album, likesCount: e.best_result_podcast.likesCount }),
                                                                };
                                                            case sC.r.PODCAST_EPISODE:
                                                                return { type: sC.r.PODCAST_EPISODE, data: (0, eH.v)(e.best_result_podcast_episode) };
                                                            case sC.r.OVERVIEW:
                                                                return { type: sC.r.OVERVIEW, data: tb(e.best_result_overview) };
                                                            case sC.r.NON_MUSIC:
                                                                return {
                                                                    type: sC.r.NON_MUSIC,
                                                                    data: (0, et.s)({
                                                                        album: e.best_result_non_music.album,
                                                                        artists: e.best_result_non_music.artists,
                                                                        releaseYear: e.best_result_non_music.releaseYear,
                                                                    }),
                                                                };
                                                            case sC.r.TRACK:
                                                                return { type: sC.r.TRACK, data: (0, eH.v)(e.best_result_track) };
                                                            case sC.r.CLIP:
                                                                return { type: sC.r.CLIP, data: rs(e.best_result_clip) };
                                                            case sC.r.BOOK_CHAPTER:
                                                                return { type: sC.r.BOOK_CHAPTER, data: (0, eH.v)(e.best_result_book_chapter) };
                                                        }
                                                    })
                                                    .filter((e) => e),
                                            )),
                                        (e.q2vResults = (0, C.wg)(
                                            (null != (m = t.q2vResults) ? m : []).map((e) => {
                                                let { wave: t, agent: a } = e[n.QUERY_TO_VIBE];
                                                return (0, eo.l)(t, a);
                                            }),
                                        )),
                                        t.filters && t.filters.length > 0 && (e.filters = (0, C.wg)(t.filters)),
                                        e.pagesLoader.setItems(o, {
                                            page: l,
                                            pager: { page: l, perPage: null != (p = t.perPage) ? p : sh.k, total: 0, lastPage: !!u || t.lastPage },
                                        }),
                                        (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    ((e.loadingState = M.G.REJECT), e.pagesLoader.setItems(null, { responseStatus: a8.F.ERROR, page: l }));
                                }
                            }),
                            getHistory: (0, C.L3)(function* (t) {
                                let { userId: a } = t;
                                if (e.historyPage.loadingState === M.G.PENDING) return;
                                let { usersResource: i, modelActionsLogger: l } = (0, C._$)(e);
                                try {
                                    e.historyPage.loadingState = M.G.PENDING;
                                    let t = yield i.getSearchHistory({ userId: a, supportedTypes: s3 });
                                    ((e.historyPage.items = (0, C.wg)(t.map(s9).filter((e) => e))), (e.historyPage.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (l.error(t), (e.historyPage.loadingState = M.G.REJECT));
                                }
                            }),
                            clearHistory: (0, C.L3)(function* (t) {
                                let { userId: a } = t,
                                    { usersResource: i, modelActionsLogger: l } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING)
                                    try {
                                        ((e.loadingState = M.G.PENDING), yield i.clearSearchHistory({ userId: a }), (e.loadingState = M.G.RESOLVE));
                                    } catch (t) {
                                        (l.error(t), (e.loadingState = M.G.REJECT));
                                    }
                            }),
                            resetHistoryItems() {
                                e.historyPage.reset();
                            },
                            resetHistoryStateRequest() {
                                ((e.historyPage.loadingState = M.G.IDLE), e.historyPage.reset());
                            },
                            resetResults() {
                                (e.destroyItems([e.bestResults, e.q2vResults]), e.pagesLoader.reset());
                            },
                            resetSearchCorrectedText() {
                                e.searchCorrectedText = null;
                            },
                            reset() {
                                ((e.searchCorrectedText = null),
                                    (e.loadingState = M.G.IDLE),
                                    (e.filters = null),
                                    e.destroyItems([e.bestResults, e.q2vResults]),
                                    e.pagesLoader.reset());
                            },
                            sendFeedback: (0, C.L3)(function* (t) {
                                let { searchResource: a, modelActionsLogger: i } = (0, C._$)(e);
                                try {
                                    yield a.sendFeedback(t);
                                } catch (e) {
                                    i.error(e);
                                }
                            }),
                            addQ2vSuggestionFeedback(e) {
                                let a = ((e) => {
                                    let { query: t, suggestionsRequestId: a, type: i, position: l } = e;
                                    return ''.concat(t, ':').concat(a, ':').concat(i, ':').concat(l);
                                })(e);
                                t.has(a) || t.set(a, { ...e, timestamp: new Date().toISOString() });
                            },
                            sendQ2vSuggestionFeedbacks: (0, C.L3)(function* () {
                                let l = (() => {
                                    let e = [];
                                    return (
                                        t.forEach((t, i) => {
                                            a.has(i) || (a.add(i), e.push({ feedback: t, key: i }));
                                        }),
                                        e
                                    );
                                })();
                                if (0 === l.length) return;
                                let { searchResource: r, modelActionsLogger: s } = (0, C._$)(e);
                                try {
                                    (yield r.sendQ2vSuggestionsFeedback({
                                        events: l.map((e) => {
                                            let { feedback: t } = e;
                                            return t;
                                        }),
                                    }),
                                        i(l, !0));
                                } catch (e) {
                                    (i(l, !1), s.error('[Search] Q2V suggestions feedback send error', { error: e }));
                                }
                            }),
                        };
                    }),
                nt = C.gK
                    .compose(
                        C.gK.model({
                            meta: C.gK.maybeNull(H.v),
                            similarTracks: C.gK.maybeNull(C.gK.array(H.v)),
                            prevEntityId: C.gK.maybeNull(C.gK.union(C.gK.string, C.gK.number)),
                            trackId: C.gK.maybeNull(C.gK.union(C.gK.string, C.gK.number)),
                            albumId: C.gK.maybeNull(C.gK.number),
                            isTrackPage: C.gK.optional(C.gK.boolean, !1),
                            withAnimation: C.gK.boolean,
                            shouldSendEventOnPlusButtonShowed: C.gK.boolean,
                        }),
                        r8.q,
                        q.X,
                    )
                    .volatile(() => ({ lastTrackInfoTrack: void 0, lastTrackInfoSimilarTracks: void 0 }))
                    .views((e) => ({
                        get shouldReloadMeta() {
                            var t;
                            let a = e.trackId && e.albumId && (0, ir.V)(e.trackId, e.albumId);
                            return a === (null == (t = e.meta) ? void 0 : t.entityId) || a === e.prevEntityId;
                        },
                        get isShimmerVisible() {
                            return e.isLoading || e.isRejected;
                        },
                        get seeds() {
                            var a;
                            return ['track:'.concat(null == (a = e.meta) ? void 0 : a.id)];
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            setShouldSendEventOnPlusButtonShowed(t) {
                                e.shouldSendEventOnPlusButtonShowed = t;
                            },
                            setTrackInfo(t) {
                                var a;
                                (0, C._n)(e) &&
                                    ((e.lastTrackInfoTrack === t.track && e.lastTrackInfoSimilarTracks === t.similarTracks && e.isResolved) ||
                                        ((e.meta = (0, eH.v)(t.track)),
                                        (e.similarTracks = (0, C.wg)(null == (a = t.similarTracks) ? void 0 : a.map((e) => (0, eH.v)(e)))),
                                        (e.loadingState = M.G.RESOLVE),
                                        (e.lastTrackInfoTrack = t.track),
                                        (e.lastTrackInfoSimilarTracks = t.similarTracks)));
                            },
                            setIsTrackPage(t) {
                                e.isTrackPage = !!t;
                            },
                            setAnimationState(t) {
                                e.withAnimation = t;
                            },
                            getData: (0, C.L3)(function* () {
                                let { tracksResource: a, modelActionsLogger: i } = (0, C._$)(e);
                                if (!e.trackId || e.loadingState === M.G.PENDING || e.shouldReloadMeta) return null;
                                try {
                                    var l;
                                    ((e.loadingState = M.G.PENDING), (e.meta = null));
                                    let i = yield a.getFullInfoTrack({ trackId: e.trackId, albumId: e.albumId });
                                    if (!i) return ((e.loadingState = M.G.REJECT), null);
                                    ((e.meta = (0, eH.v)(i.track)),
                                        (e.similarTracks = (0, C.wg)(i.similarTracks.map((e) => (0, eH.v)(e)))),
                                        (e.prevEntityId = i.track.id),
                                        t.setShouldSendEventOnPlusButtonShowed(!0),
                                        (null == (l = e.meta) ? void 0 : l.resolveAllDisclaimers) && (yield e.meta.resolveAllDisclaimers()),
                                        (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), (e.loadingState = M.G.REJECT));
                                }
                                return null;
                            }),
                            open(t) {
                                let { trackId: a, albumId: i } = t;
                                a && i && ((e.trackId === a && e.albumId === i && e.isOpened) || ((e.trackId = a), (e.albumId = i), (e.isOpened = !0)));
                            },
                            reset() {
                                ((e.loadingState = M.G.IDLE), (e.shouldSendEventOnPlusButtonShowed = !0));
                            },
                        };
                        return t;
                    })
                    .named('TrackPage');
            var na = a(97109),
                ni = a(84146);
            let nl = C.gK
                    .model('BaseAdvertBanner', { type: C.gK.enumeration(Object.values(na.h)), noAds: C.gK.boolean, hasError: C.gK.boolean, isShowBanner: C.gK.boolean })
                    .views((e) => ({
                        get isBaseVisible() {
                            if (e.noAds || e.hasError || !e.isShowBanner) return !1;
                            let { advertBanners: t } = (0, R.M)(e);
                            if (t.hasBranding) return !1;
                            return t.isVisible(e.type);
                        },
                    }))
                    .actions((e) => ({
                        setType(t) {
                            e.type = t;
                        },
                        toggleNoAdsTrue() {
                            e.noAds = !0;
                        },
                        setIsShowBanner(t) {
                            e.isShowBanner = t;
                        },
                        toggleHasErrorTrue() {
                            e.hasError = !0;
                        },
                        reset() {
                            ((e.type = na.h.EMPTY), (e.noAds = !1), (e.isShowBanner = !0), (e.hasError = !1));
                        },
                    })),
                nr = nl
                    .extend((e) => ({
                        views: {
                            get isVisible() {
                                let { advert: t, experiments: a } = (0, R.M)(e);
                                if (
                                    !a.checkExperiment(k.z.WebNextBrandedPlaylistsAxe, 'on') ||
                                    f.NN ||
                                    e.noAds ||
                                    e.hasError ||
                                    !e.isShowBanner ||
                                    (e.type !== na.h.EMPTY && e.type !== na.h.BRANDING) ||
                                    t.isAdvertDisabled(ni.f.AXE_ENTITY_BRANDING)
                                )
                                    return !1;
                                return !0;
                            },
                        },
                    }))
                    .named('BrandedEntityAxeBanner'),
                ns = nl
                    .extend((e) => ({
                        views: {
                            get isVisible() {
                                let { advert: t, settings: a, user: i } = (0, R.M)(e);
                                if (!e.noAds && !e.hasError && e.type === na.h.BRANDING) return !a.isMobile;
                                if (e.noAds || e.hasError || e.type !== na.h.BRANDING || t.isAdvertDisabled(ni.f.PLAYLIST_BRANDING)) return !1;
                                return !i.hasPlus && !a.isMobile;
                            },
                        },
                    }))
                    .named('BrandedPlaylistBanner');
            var nn = a(48552);
            let no = C.gK.model('BrandedPlayerModal', {
                imageUri: C.gK.maybeNull(C.gK.string),
                content: C.gK.string,
                primaryHref: C.gK.string,
                shouldShowSecondaryButton: C.gK.boolean,
                secondaryText: C.gK.maybeNull(C.gK.string),
            });
            var nd = a(18760);
            let ng = C.gK
                    .compose(C.gK.model('BrandedPlayerBanner', { payload: C.gK.maybeNull(C.gK.model({ thumb: nn.K, modal: C.gK.maybeNull(no) })), modal: r8.q }), nl)
                    .views((e) => ({
                        get isVisible() {
                            let { advert: t, settings: a, user: i } = (0, R.M)(e);
                            if (e.noAds || e.hasError || t.isAdvertDisabled(ni.f.PLAYER_BRANDING)) return !1;
                            return !i.hasPlus && !a.isMobile;
                        },
                    }))
                    .actions((e) => ({
                        setPayload: (t) => {
                            let { settings: a } = (0, R.M)(e);
                            (a.setCustomPlayerThumb(nd.T.BRANDED), (e.payload = (0, C.wg)(t)));
                        },
                    })),
                nu = nl
                    .views((e) => ({
                        get isVisible() {
                            if (!e.isBaseVisible) return !1;
                            let {
                                    advert: t,
                                    advertBanners: {
                                        banners: { brandedPlaylistBanner: a, brandedEntityAxeBanner: i },
                                    },
                                } = (0, R.M)(e),
                                l = t.isAdvertDisabled(ni.f.SIDE_BANNER);
                            return !a.isVisible && !i.isVisible && !l;
                        },
                    }))
                    .named('SideAdvertBanner'),
                nc = nl
                    .views((e) => {
                        let t = {
                            get isTouchTopAdvertEnabled() {
                                let { advert: t, settings: a } = (0, R.M)(e),
                                    i = t.isAdvertDisabled(ni.f.TOUCH_BANNER);
                                return a.isMobile && !i;
                            },
                            get isVisible() {
                                var a;
                                if (!e.isBaseVisible) return !1;
                                let {
                                        advert: i,
                                        settings: l,
                                        advertBanners: {
                                            banners: { brandedPlaylistBanner: r, brandedEntityAxeBanner: s },
                                        },
                                    } = (0, R.M)(e),
                                    n = i.isAdvertDisabled(ni.f.TOP_BANNER),
                                    o = r.isVisible || s.isVisible;
                                return !(null == (a = l.browserInfo) ? void 0 : a.isTouch) && !t.isTouchTopAdvertEnabled && !o && !n;
                            },
                        };
                        return t;
                    })
                    .named('TopAdvertBanner'),
                nm = C.gK
                    .model('AdvertBanners', {
                        banners: C.gK.model({
                            topAdvertBanner: nc,
                            sideAdvertBanner: nu,
                            brandedPlaylistBanner: ns,
                            brandedPlayerBanner: ng,
                            brandedEntityAxeBanner: nr,
                        }),
                    })
                    .views((e) => {
                        let t = {
                            get values() {
                                return [e.banners.topAdvertBanner, e.banners.sideAdvertBanner, e.banners.brandedPlaylistBanner, e.banners.brandedEntityAxeBanner];
                            },
                            get hasBranding() {
                                return t.values.some((e) => e.type === na.h.BRANDING);
                            },
                            isVisible(e) {
                                if (e === na.h.EMPTY) return !0;
                                let a = t.values.filter((e) => e.type !== na.h.EMPTY);
                                return e === na.h.DIRECT ? a.every((e) => e.type === na.h.DIRECT) : e !== na.h.CREATIVE || a.every((e) => e.type !== na.h.BRANDING);
                            },
                        };
                        return t;
                    });
            (!(function (e) {
                ((e.ON_START_BAR_BELOW = 'music-web-on-start-bar-bellow'), (e.ON_START_FULLSCREEN = 'music-web-on-start-fullscreen'));
            })(o || (o = {})),
                (function (e) {
                    ((e.BAR_BELOW = 'barBellow'), (e.FULLSCREEN = 'fullscreen'));
                })(d || (d = {})));
            let np = (e) => {
                    let { text: t, textColor: a, color: i, action: l } = e;
                    return (0, C.wg)({
                        text: t || null,
                        textColor: a || null,
                        color: i || null,
                        action:
                            l &&
                            ((e) => {
                                let { id: t, type: a, value: i, communicationId: l } = e;
                                return (0, C.wg)({ id: t || null, type: a || null, value: i || null, communicationId: l || null });
                            })(l),
                    });
                },
                ny = (e) => {
                    let { bgUrl: t, bgColor: a, title: i, text: l, titleColor: r, textColor: s, imageUrl: n, buttons: o, advDisclaimer: d } = e;
                    return (0, C.wg)({
                        bgUrl: t || null,
                        bgColor: a || null,
                        title: i || null,
                        text: l || null,
                        titleColor: r || null,
                        textColor: s || null,
                        imageUrl: n || null,
                        buttons: o.filter((e) => e.text).map(np),
                        advDisclaimer: d || null,
                    });
                },
                nE = (e) => {
                    let {
                        isModal: t,
                        withShadow: a,
                        closeActionId: i,
                        bgUrl: l,
                        bgUrlLarge: r,
                        bgColor: s,
                        logoUrl: n,
                        title: o,
                        text: d,
                        titleColor: g,
                        textColor: u,
                        buttons: c,
                        disclaimer: m,
                        disclaimerColor: p,
                        advDisclaimer: y,
                    } = e;
                    return (0, C.wg)({
                        isModal: (0, L.G4)(t),
                        withShadow: (0, L.G4)(a),
                        closeActionId: i || null,
                        bgUrl: l || null,
                        bgUrlLarge: r || null,
                        bgColor: s || null,
                        logoUrl: n || null,
                        title: o || null,
                        text: d || null,
                        titleColor: g || null,
                        textColor: u || null,
                        buttons: c.filter((e) => e.text).map(np),
                        disclaimer: m || null,
                        disclaimerColor: p || null,
                        advDisclaimer: y || null,
                    });
                };
            !(function (e) {
                ((e.PRIMARY = 'primary'), (e.SECONDARY = 'secondary'), (e.PLUS = 'plus'));
            })(g || (g = {}));
            var nS = a(92892);
            let nb = C.gK.model('CommunicationButtonAction', {
                    id: C.gK.maybeNull(C.gK.string),
                    type: C.gK.maybeNull(C.gK.enumeration(Object.values(nS.T))),
                    value: C.gK.maybeNull(C.gK.string),
                    communicationId: C.gK.maybeNull(C.gK.string),
                }),
                nv = C.gK.model('CommunicationButton', {
                    text: C.gK.maybeNull(C.gK.string),
                    color: C.gK.maybeNull(C.gK.enumeration(Object.values(g))),
                    action: C.gK.maybeNull(nb),
                    textColor: C.gK.maybeNull(C.gK.string),
                }),
                nK = C.gK.model('BarBelowContent', {
                    bgUrl: C.gK.maybeNull(C.gK.string),
                    bgColor: C.gK.maybeNull(C.gK.string),
                    imageUrl: C.gK.maybeNull(C.gK.string),
                    title: C.gK.maybeNull(C.gK.string),
                    titleColor: C.gK.maybeNull(C.gK.string),
                    text: C.gK.maybeNull(C.gK.string),
                    textColor: C.gK.maybeNull(C.gK.string),
                    buttons: C.gK.array(nv),
                    advDisclaimer: C.gK.maybeNull(C.gK.string),
                }),
                nI = C.gK.model('BarBelow', {
                    anchorId: C.gK.enumeration(Object.values(o)),
                    screenId: C.gK.string,
                    content: nK,
                    feedbackToken: C.gK.maybeNull(C.gK.string),
                }),
                nL = C.gK
                    .model('BarBelowMain', {
                        anchorId: C.gK.maybe(C.gK.string),
                        isVisible: C.gK.maybe(C.gK.boolean),
                        hasAnimationAlreadyBeenShown: C.gK.maybe(C.gK.boolean),
                        hasAnimationAlreadyBeenHidden: C.gK.maybe(C.gK.boolean),
                        hasAnimationAlreadyBeenStarted: C.gK.maybe(C.gK.boolean),
                        list: C.gK.array(nI),
                    })
                    .volatile(() => ({ wasShown: !1 }))
                    .views((e) => ({
                        get barBelowItem() {
                            return e.list.find((t) => t.anchorId === e.anchorId);
                        },
                        get showWithAnimation() {
                            return !e.hasAnimationAlreadyBeenShown && e.isVisible;
                        },
                        get hideWithAnimation() {
                            return e.hasAnimationAlreadyBeenShown && !e.hasAnimationAlreadyBeenHidden && !e.isVisible;
                        },
                    }))
                    .actions((e) => ({
                        setAnchorId(t) {
                            e.anchorId = t;
                        },
                        show() {
                            ((e.isVisible = !0), (e.wasShown = !0));
                        },
                        hide() {
                            e.isVisible = !1;
                        },
                        setAnimationAlreadyBeenShown() {
                            e.hasAnimationAlreadyBeenShown = !0;
                        },
                        setAnimationAlreadyBeenHidden() {
                            e.hasAnimationAlreadyBeenHidden = !0;
                        },
                        setAnimationAlreadyBeenStarted() {
                            e.hasAnimationAlreadyBeenStarted = !0;
                        },
                    })),
                nT = C.gK.model('CommunicationModalContentModel', {
                    isModal: C.gK.boolean,
                    withShadow: C.gK.boolean,
                    closeActionId: C.gK.maybeNull(C.gK.string),
                    bgUrl: C.gK.maybeNull(C.gK.string),
                    bgUrlLarge: C.gK.maybeNull(C.gK.string),
                    bgColor: C.gK.maybeNull(C.gK.string),
                    logoUrl: C.gK.maybeNull(C.gK.string),
                    title: C.gK.maybeNull(C.gK.string),
                    titleColor: C.gK.maybeNull(C.gK.string),
                    text: C.gK.maybeNull(C.gK.string),
                    textColor: C.gK.maybeNull(C.gK.string),
                    buttons: C.gK.array(nv),
                    disclaimer: C.gK.maybeNull(C.gK.string),
                    disclaimerColor: C.gK.maybeNull(C.gK.string),
                    advDisclaimer: C.gK.maybeNull(C.gK.string),
                }),
                nh = C.gK.model('CommunicationModal', {
                    anchorId: C.gK.enumeration(Object.values(o)),
                    screenId: C.gK.string,
                    content: nT,
                    feedbackToken: C.gK.maybeNull(C.gK.string),
                }),
                nN = r8.q
                    .props({ anchorId: C.gK.maybe(C.gK.enumeration(Object.values(o))), list: C.gK.array(nh) })
                    .views((e) => ({
                        get modalItem() {
                            return e.list.find((t) => t.anchorId === e.anchorId);
                        },
                    }))
                    .actions((e) => ({
                        setAnchorId(t) {
                            e.anchorId = t;
                        },
                    })),
                nA = C.gK.model('CommunicationList', { barBelow: nL, modal: nN }),
                nC = C.gK
                    .model('Communication', { loadingState: C.gK.enumeration(Object.values(M.G)), list: C.gK.maybe(nA), errorStatusCode: C.gK.maybeNull(C.gK.number) })
                    .views((e) => ({
                        get isReadyToShowModal() {
                            var t;
                            let { desktopPaywall: a } = (0, R.M)(e),
                                i = null == (t = e.list) ? void 0 : t.modal;
                            return !!((null == i ? void 0 : i.modalItem) && !i.wasOpened && a.isPaywallPassed);
                        },
                        get isReadyToShowBarBelow() {
                            var a;
                            let { desktopPaywall: t } = (0, R.M)(e),
                                i = null == (a = e.list) ? void 0 : a.barBelow;
                            return !!((null == i ? void 0 : i.barBelowItem) && !i.wasShown && t.isPaywallPassed);
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getData: (0, C.L3)(function* () {
                                let { dynamicPagesResource: t, modelActionsLogger: a } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING && e.loadingState !== M.G.RESOLVE)
                                    try {
                                        e.loadingState = M.G.PENDING;
                                        let a = yield t.getTriggersV2({ anchorIds: Object.values(o) });
                                        if (
                                            (a &&
                                                a.triggers &&
                                                Array.isArray(a.triggers) &&
                                                a.triggers.every(
                                                    (e) =>
                                                        !!(
                                                            e &&
                                                            'object' == typeof e &&
                                                            'anchorId' in e &&
                                                            'triggers' in e &&
                                                            Array.isArray(e.triggers) &&
                                                            e.triggers.every(
                                                                (e) =>
                                                                    !!(
                                                                        e &&
                                                                        'object' == typeof e &&
                                                                        'screenId' in e &&
                                                                        'feedbackToken' in e &&
                                                                        'data' in e &&
                                                                        'meta' in e
                                                                    ),
                                                            )
                                                        ),
                                                ) &&
                                                (e.list = ((e) => {
                                                    let t = [],
                                                        a = [];
                                                    return (
                                                        e.triggers.forEach((e) => {
                                                            var i;
                                                            switch (null == (i = e.triggers[0]) ? void 0 : i.meta.notificationId) {
                                                                case d.BAR_BELOW:
                                                                    return void e.triggers.forEach((e) => {
                                                                        t.push(
                                                                            ((e) => {
                                                                                let t = 'data' in e ? ny(e.data) : ny(e.div),
                                                                                    a = 'feedbackToken' in e ? e.feedbackToken : null,
                                                                                    i = 'anchorId' in e ? e.anchorId : o.ON_START_BAR_BELOW;
                                                                                return (0, C.wg)({ anchorId: i, screenId: e.screenId, content: t, feedbackToken: a });
                                                                            })(e),
                                                                        );
                                                                    });
                                                                case d.FULLSCREEN:
                                                                    return void e.triggers.forEach((e) => {
                                                                        a.push(
                                                                            ((e) => {
                                                                                let t = 'data' in e ? nE(e.data) : nE(e.div),
                                                                                    a = 'feedbackToken' in e ? e.feedbackToken : null,
                                                                                    i = 'anchorId' in e ? e.anchorId : o.ON_START_FULLSCREEN;
                                                                                return (0, C.wg)({ anchorId: i, screenId: e.screenId, content: t, feedbackToken: a });
                                                                            })(e),
                                                                        );
                                                                    });
                                                            }
                                                        }),
                                                        (0, C.wg)({ barBelow: { list: t }, modal: { list: a } })
                                                    );
                                                })(a)),
                                            e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE),
                                            !e.list)
                                        )
                                            return;
                                        let { barBelow: i, modal: l } = e.list;
                                        (i.setAnchorId(o.ON_START_BAR_BELOW), l.setAnchorId(o.ON_START_FULLSCREEN));
                                    } catch (t) {
                                        (a.error(t),
                                            t instanceof O.GX &&
                                                (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = O.X1.NOT_FOUND),
                                            e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                    }
                            }),
                            showModal() {
                                var a;
                                if (!e.isReadyToShowModal) return;
                                let i = null == (a = e.list) ? void 0 : a.modal,
                                    l = null == i ? void 0 : i.modalItem;
                                i && l && (i.open(), t.shown(l.anchorId, l.screenId, l.feedbackToken));
                            },
                            showBarBelow() {
                                var a;
                                if (!e.isReadyToShowBarBelow) return;
                                let i = null == (a = e.list) ? void 0 : a.barBelow,
                                    l = null == i ? void 0 : i.barBelowItem;
                                i && l && (i.show(), t.shown(l.anchorId, l.screenId, l.feedbackToken));
                            },
                            shown: (0, C.L3)(function* (t, a, i) {
                                let { dynamicPagesResource: l, modelActionsLogger: r } = (0, C._$)(e);
                                try {
                                    i && (yield l.shownV2({ anchorIds: [t], feedbackToken: i }));
                                } catch (e) {
                                    r.error(e);
                                }
                            }),
                            action: (0, C.L3)(function* (t, a, i, l) {
                                let { dynamicPagesResource: r, modelActionsLogger: s } = (0, C._$)(e);
                                try {
                                    l && (yield r.actionV2({ anchorIds: [t], actionId: i, feedbackToken: l }));
                                } catch (e) {
                                    s.error(e);
                                }
                            }),
                        };
                        return t;
                    });
            var nf = a(22939),
                nR = a(60024);
            let nk = C.gK
                    .model('ContinueListen', {
                        track: C.gK.maybe(H.v),
                        trackIndex: C.gK.maybe(C.gK.number),
                        contextType: C.gK.maybeNull(C.gK.enumeration(Object.values(nf.K))),
                        contextId: C.gK.maybeNull(C.gK.union(C.gK.string, C.gK.number)),
                        albumDuration: C.gK.maybe(C.gK.number),
                        albumStreamProgress: C.gK.optional(nR.B, { endPositionSec: 0 }),
                        trackTempStreamProgress: C.gK.optional(nR.B, { endPositionSec: 0 }),
                    })
                    .actions((e) => ({
                        saveTrack: (t) => {
                            let { contextType: a, contextId: i, track: l, isDefaultTrack: r } = t;
                            (r && e.track) || ((e.contextType = a), (e.contextId = i), (e.track = (0, C.wg)((0, sg.HO)(l))));
                        },
                        saveTrackIndex: (t) => {
                            e.trackIndex = t;
                        },
                        saveAlbumDuration: (t) => {
                            e.albumDuration = t;
                        },
                    })),
                nD = C.gK
                    .model({ modal: r8.q })
                    .views((e) => ({
                        shouldShow() {
                            var t;
                            let { user: a, settings: i } = (0, R.M)(e),
                                { sessionStorage: l } = (0, C._$)(e);
                            if (!a.hasPlus || !(null == (t = i.browserInfo) ? void 0 : t.isMobile)) return !1;
                            let r = l.get(r0.c.DownloadMobileApp);
                            return null == r || !r.shown;
                        },
                    }))
                    .actions((e) => ({
                        openModal() {
                            var t;
                            let { localStorage: a, sessionStorage: i } = (0, C._$)(e);
                            if (!(null == (t = a.get(r0.c.DownloadMobileApp)) ? void 0 : t.shown)) {
                                (e.modal.open(), a.set(r0.c.DownloadMobileApp, { shown: !0 }), i.set(r0.c.DownloadMobileApp, { shown: !0 }));
                                return;
                            }
                            (setTimeout(() => {
                                e.modal.open();
                            }, 5e3),
                                i.set(r0.c.DownloadMobileApp, { shown: !0 }));
                        },
                    }));
            var n_ = a(31886),
                nP = a(30194);
            let nO = C.gK.model('FamilyInviteInfoModel', { name: C.gK.string, avatarUrl: C.gK.string }),
                nw = C.gK
                    .model('FamilyInviteModel', {
                        info: C.gK.model({ loadingState: C.gK.enumeration(Object.values(M.G)), data: C.gK.maybeNull(nO) }),
                        acceptanceLoadingState: C.gK.enumeration(Object.values(M.G)),
                        isSuccess: C.gK.maybe(C.gK.boolean),
                        modal: r8.q,
                        step: C.gK.enumeration('Step', Object.values(nP._)),
                        inviteId: C.gK.maybeNull(C.gK.string),
                        error: C.gK.maybeNull(C.gK.enumeration(Object.values(n_.C))),
                    })
                    .views((e) => ({
                        get hasError() {
                            return !!e.error;
                        },
                        get isInfoShimmerVisible() {
                            return e.info.loadingState === M.G.IDLE || e.info.loadingState === M.G.PENDING;
                        },
                        get isInfoShimmerActive() {
                            return e.info.loadingState === M.G.PENDING;
                        },
                        get isAcceptanceActive() {
                            return e.acceptanceLoadingState === M.G.PENDING;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            start(a) {
                                (t.setInviteId(a), e.modal.open(), t.getInviteInfo());
                            },
                            retry: (0, C.L3)(function* () {
                                (t.setError(null), t.toggleStepInfo(), e.info.loadingState !== M.G.RESOLVE && (yield t.getInviteInfo()));
                            }),
                            getInviteInfo: (0, C.L3)(function* () {
                                let { familyResource: a, modelActionsLogger: i } = (0, C._$)(e);
                                if (e.inviteId && e.info.loadingState !== M.G.PENDING)
                                    try {
                                        e.info.loadingState = M.G.PENDING;
                                        let i = { inviteId: e.inviteId },
                                            l = yield a.getInviteInfo(i);
                                        if (!l.hasPlus) {
                                            (t.setError(n_.C.SUBSCRIPTION_IS_NOT_AVAILABLE), (e.info.loadingState = M.G.RESOLVE));
                                            return;
                                        }
                                        ((e.info.data = ((e) => {
                                            let { name: t, avatarUrl: a } = e;
                                            return (0, C.wg)({ name: t, avatarUrl: a });
                                        })(l)),
                                            (e.info.loadingState = M.G.RESOLVE));
                                    } catch (a) {
                                        if (((e.info.loadingState = M.G.REJECT), i.error(a), a instanceof O.GX && a.statusCode === O.X1.BAD_REQUEST))
                                            return void t.setError(n_.C.INVITATION_IS_INVALID);
                                        t.setError(n_.C.UNKNOWN);
                                    }
                            }),
                            acceptInvite: (0, C.L3)(function* () {
                                let { familyResource: a, modelActionsLogger: i } = (0, C._$)(e);
                                if (e.inviteId && e.acceptanceLoadingState !== M.G.PENDING)
                                    try {
                                        e.acceptanceLoadingState = M.G.PENDING;
                                        let i = { inviteId: e.inviteId };
                                        (yield a.acceptInvite(i), (e.acceptanceLoadingState = M.G.RESOLVE), t.toggleStateSuccessTrue());
                                    } catch (a) {
                                        if (((e.acceptanceLoadingState = M.G.REJECT), i.error(a), a instanceof O.GX && a.statusCode === O.X1.BAD_REQUEST))
                                            return void t.setError(n_.C.INVITATION_IS_INVALID);
                                        t.setError(n_.C.UNKNOWN);
                                    }
                            }),
                            toggleStepInfo() {
                                e.step = nP._.INFO;
                            },
                            toggleStepSuccess() {
                                e.step = nP._.SUCCESS;
                            },
                            setError(t) {
                                e.error = t;
                            },
                            setInviteId(t) {
                                e.inviteId = t;
                            },
                            toggleStateSuccessTrue() {
                                (t.toggleStepSuccess(), (e.isSuccess = !0));
                            },
                            reset() {
                                ((e.acceptanceLoadingState = M.G.IDLE),
                                    (e.error = null),
                                    (e.info.loadingState = M.G.IDLE),
                                    (e.info.data = null),
                                    (e.inviteId = null),
                                    (e.step = nP._.INFO),
                                    (e.isSuccess = !1));
                            },
                        };
                        return t;
                    }),
                nG = (e) => {
                    switch (e.type) {
                        case ee._.MIX_CARD_ITEM:
                            return (0, C.wg)({ type: ee._.MIX_CARD_ITEM, data: tx(e.data) });
                        case ee._.NON_MUSIC_ALBUM_ITEM:
                            return e7({ album: e.data.album, likesCount: e.data.likesCount, bookmateOptionRequired: e.data.bookmateOptionRequired });
                        case ee._.ALBUM_ITEM:
                            return ea(e.data.album, e.data.artists, e.data.trailer);
                        case ee._.CHART_ALBUM_ITEM:
                            let t, a, i, l;
                            return (
                                (t = e.data.album),
                                (a = e.data.chart),
                                (i = e.data.likesCount),
                                (l = e.data.trailer),
                                { type: ee._.CHART_ALBUM_ITEM, data: (0, et.s)({ album: t, chart: a, likesCount: i, trailer: l }) }
                            );
                        case ee._.ARTIST_ITEM:
                            return el(e.data.artist, e.data.trailer);
                        case ee._.PLAYLIST_ITEM:
                            return en(e.data.playlist, e.data.trailer);
                        case ee._.PERSONAL_PLAYLIST_ITEM:
                            return tH(e);
                        case ee._.LIKED_PLAYLIST_ITEM:
                            return es({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer });
                    }
                },
                nM = C.gK.model('LandingChartAlbumItem', { type: C.gK.literal(ee._.CHART_ALBUM_ITEM), data: ey.J }),
                nU = C.gK.model('LandingMixCardItemModel', { type: C.gK.literal(ee._.MIX_CARD_ITEM), data: iw }),
                nB = C.gK.union(eE, eb, eI, i3, eK, nM, aV, nU),
                nF = C.gK
                    .compose(C.gK.model('LandingBlockEntities', { title: C.gK.maybeNull(C.gK.string), items: C.gK.array(nB) }), q.X)
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === M.G.PENDING;
                        },
                        get isNotFound() {
                            return e.isRejected;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, C.L3)(function* (t) {
                            let { blockId: a } = t,
                                { landingResource: i, modelActionsLogger: l } = (0, C._$)(e);
                            if (e.loadingState !== M.G.PENDING)
                                try {
                                    e.loadingState = M.G.PENDING;
                                    let t = yield i.getBlockEntities({ blockId: a, page: 0, pageSize: 100 });
                                    ((e.title = t.title), (e.items = (0, C.wg)(t.items.map(nG))), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (l.error(t), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = M.G.IDLE), (e.items = (0, C.wg)([])), (e.title = null));
                        },
                    }));
            var nV = a(72233);
            let nx = lw
                    .props({
                        id: C.gK.optional(C.gK.string, ''),
                        title: C.gK.optional(C.gK.string, ''),
                        skeletonMeta: C.gK.maybe(C.gK.frozen()),
                        preloadedBlocksMeta: C.gK.maybe(C.gK.frozen()),
                    })
                    .views((e) => {
                        let t = {
                            get isLoaded() {
                                return e.loadingState === M.G.RESOLVE || e.loadingState === M.G.REJECT;
                            },
                            get isSkeletonCreated() {
                                let { landingSdk: t } = (0, C._$)(e);
                                return !!t.skeleton;
                            },
                            get isNeededToInit() {
                                let { loadingState: a } = e;
                                return a === M.G.IDLE || (a === M.G.RESOLVE && !!e.skeletonMeta && !t.isSkeletonCreated);
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let { landingSdk: t, modelActionsLogger: a } = (0, C._$)(e),
                            i = {
                                loadAndCreateSkeleton: (0, C.L3)(function* (i) {
                                    let { preloadBlocksCount: l, skeletonData: r } = i;
                                    if (e.loadingState !== M.G.PENDING) {
                                        e.loadingState = M.G.PENDING;
                                        try {
                                            var s;
                                            if ((yield t.loadAndCreateSkeleton({ data: r }), null == (s = t.skeleton) ? void 0 : s.data.meta)) {
                                                let { blocks: a, id: i, title: l } = t.skeleton.data.meta,
                                                    r = tR(a);
                                                ((e.id = i),
                                                    (e.title = l),
                                                    (e.meta = (0, C.wg)(r.meta)),
                                                    (e.upperBlocks = (0, C.wg)(r.upperBlocks)),
                                                    (e.tabs.data = (0, C.wg)(r.tabs.data)),
                                                    (e.skeletonMeta = t.skeleton.data.meta));
                                            }
                                            (t.skeleton, e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                                        } catch (t) {
                                            (a.error(t), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                        }
                                    }
                                }),
                                createSkeleton(i) {
                                    let { skeletonData: l } = i;
                                    if (e.loadingState !== M.G.PENDING && e.skeletonMeta) {
                                        e.loadingState = M.G.PENDING;
                                        try {
                                            (t.createSkeleton({ data: { ...l, meta: e.skeletonMeta }, preloadedBlocksMeta: e.preloadedBlocksMeta }),
                                                (e.loadingState = M.G.RESOLVE));
                                        } catch (t) {
                                            (a.error(t), (e.loadingState = M.G.REJECT));
                                        }
                                    }
                                },
                                syncLoadedSdkBlocks() {
                                    var a, l, r, s;
                                    let n = (e) => {
                                        var a, l;
                                        if ((0, e$.Q)(e)) {
                                            null == (l = e.data) || l.blocks.forEach(n);
                                            return;
                                        }
                                        let r = null == (a = t.skeleton) ? void 0 : a.getNodeById(e.id);
                                        r && i.handleSdkBlockUpdate(e, r, r.state.loadingStatus.value);
                                    };
                                    (null == (a = e.upperBlocks) || a.forEach(n), null == (l = e.tabs.data) || l.forEach((e) => e.blocks.forEach(n)));
                                    let o = null == (s = t.skeleton) || null == (r = s.root) ? void 0 : r.getTabsBlock();
                                    o && i.handleSdkTabsBlockUpdate(o, o.state.loadingStatus.value);
                                },
                                handleSdkBlockUpdate(e, t, a) {
                                    switch (a) {
                                        case nV.rl.IDLE:
                                            e.loadingState = eu.IDLE;
                                            break;
                                        case nV.rl.PENDING:
                                            e.loadingState = eu.PENDING;
                                            break;
                                        case nV.rl.REJECT:
                                            e.loadingState = eu.REJECT;
                                            break;
                                        case nV.rl.RESOLVE:
                                            ((e.loadingState = eu.RESOLVE),
                                                (e.data = ((e, t) => {
                                                    if (t.data.meta)
                                                        switch (t.data.type) {
                                                            case ec.t.LIKES_AND_HISTORY:
                                                                return tV(t.data.meta);
                                                            case ec.t.CHART_TRACKS:
                                                                return e3(t.data.meta);
                                                            case ec.t.NEW_RELEASES:
                                                            case ec.t.EDITORIAL_NEW_RELEASES:
                                                                return t$(t.data.meta);
                                                            case ec.t.NEW_PLAYLISTS:
                                                            case ec.t.EDITORIAL_COMPILATION:
                                                            case ec.t.RECOMMENDED_PLAYLISTS:
                                                            case ec.t.META_TAG_POPULAR_PLAYLISTS:
                                                            case ec.t.META_TAG_NEW_ALBUMS:
                                                            case ec.t.META_TAG_PLAYLISTS:
                                                            case ec.t.MICRO_GENRE_ALBUMS:
                                                            case ec.t.META_TAG_ALBUMS:
                                                            case ec.t.ARTIST_PLAYLISTS:
                                                            case ec.t.ARTIST_ALBUMS:
                                                            case ec.t.ARTIST_COMPILATIONS:
                                                            case ec.t.ARTIST_STUDIO_ALBUMS:
                                                            case ec.t.ARTIST_SIMILAR_ENTITIES:
                                                            case ec.t.COLLECTION_SIMILAR_ENTITIES:
                                                                return eg(t.data.meta);
                                                            case ec.t.WAVES:
                                                            case ec.t.SETS_BY_WAVES:
                                                                return t2(t.data.meta);
                                                            case ec.t.WAVES_AGENT:
                                                            case ec.t.SETS_BY_WAVES_AGENT:
                                                                return t3(t.data.meta);
                                                            case ec.t.EDITORIAL_WAVES:
                                                            case ec.t.META_TAG_WAVE:
                                                            case ec.t.MICRO_GENRE_WAVE:
                                                            case ec.t.MICRO_GENRE_SIMILAR_WAVE:
                                                            case ec.t.META_TAG_SIMILAR_WAVE:
                                                                return tU(t.data.meta);
                                                            case ec.t.EDITORIAL_WAVES_AGENT:
                                                            case ec.t.META_TAG_WAVE_AGENT:
                                                            case ec.t.MICRO_GENRE_WAVE_AGENT:
                                                            case ec.t.MICRO_GENRE_SIMILAR_WAVE_AGENT:
                                                            case ec.t.META_TAG_SIMILAR_WAVE_AGENT:
                                                                return tG(t.data.meta);
                                                            case ec.t.ITEM_LIST:
                                                                return tF(t.data.meta);
                                                            case ec.t.MIXES_GRID:
                                                            case ec.t.MIXES_MUSIC:
                                                                return tj(t.data.meta);
                                                            case ec.t.NEUROMUSIC:
                                                                return tX(t.data.meta);
                                                            case ec.t.CONCERTS_TOP:
                                                            case ec.t.CONCERTS_PERSONAL:
                                                            case ec.t.EDITORIAL_CONCERTS:
                                                            case ec.t.VIEWED_CONCERTS:
                                                                return tD(t.data.meta);
                                                            case ec.t.OPEN_PLAYLIST:
                                                            case ec.t.SMART_OPEN_PLAYLIST:
                                                            case ec.t.NON_MUSIC_OPEN_PLAYLIST:
                                                                return tY(t.data.meta, e.id);
                                                            case ec.t.COLLECTION_PLAYLIST_WITH_LIKES:
                                                                return ta(t.data.meta);
                                                            case ec.t.DONATIONS:
                                                                return tO(t.data.meta);
                                                            case ec.t.PERSONAL_PLAYLISTS:
                                                            case ec.t.REWIND_PLAYLISTS:
                                                                return tq(t.data.meta);
                                                            case ec.t.Q2V_SUGGESTIONS:
                                                                return tQ(t.data.meta);
                                                            case ec.t.PERSONAL_ARTISTS:
                                                            case ec.t.NEW_STARS_ARTISTS:
                                                            case ec.t.EDITORIAL_ARTISTS:
                                                            case ec.t.META_TAG_POPULAR_ARTISTS:
                                                            case ec.t.MICRO_GENRE_ARTISTS:
                                                            case ec.t.MICRO_GENRE_TOP_ARTISTS:
                                                            case ec.t.META_TAG_ARTISTS:
                                                            case ec.t.SIMILAR_ARTISTS:
                                                                return tw(t.data.meta);
                                                            case ec.t.IN_STYLE:
                                                                return tB(t.data.meta);
                                                            case ec.t.WIZARD:
                                                                return t8(t.data.meta);
                                                            case ec.t.NON_MUSIC_EDITORIAL_COMPILATION:
                                                            case ec.t.NON_MUSIC_CATEGORY:
                                                                return tJ(t.data.meta);
                                                            case ec.t.SPECIAL:
                                                                return t0(t.data.meta);
                                                            case ec.t.ALBUM_PROMO:
                                                            case ec.t.SIMPLE_ALBUM_PROMO:
                                                                return tz(t.data.meta);
                                                            case ec.t.ARTIST_RECOMMENDATIONS_PROMO:
                                                            case ec.t.SIMPLE_ARTIST_RECOMMENDATIONS_PROMO:
                                                                return eZ(t.data.meta);
                                                            default:
                                                                return;
                                                        }
                                                })(e, t)));
                                    }
                                },
                                handleSdkTabsBlockUpdate(t, a) {
                                    switch (a) {
                                        case nV.rl.IDLE:
                                            e.tabs.loadingState = M.G.IDLE;
                                            break;
                                        case nV.rl.PENDING:
                                            e.tabs.loadingState = M.G.PENDING;
                                            break;
                                        case nV.rl.REJECT:
                                            e.tabs.loadingState = M.G.REJECT;
                                            break;
                                        case nV.rl.RESOLVE: {
                                            var i;
                                            if (!t.data.meta) break;
                                            let a = t1(t.data.meta) || [];
                                            (null == (i = e.tabs.data) ||
                                                i.forEach((e, t) => {
                                                    let i = a.find((t) => {
                                                        var a;
                                                        return t.id === (null == (a = e.data) ? void 0 : a.id);
                                                    });
                                                    e.data = i || a[t];
                                                }),
                                                (e.tabs.loadingState = M.G.RESOLVE));
                                        }
                                    }
                                },
                                reset() {
                                    ((e.loadingState = M.G.IDLE),
                                        (e.meta = null),
                                        (e.skeletonMeta = void 0),
                                        (e.preloadedBlocksMeta = void 0),
                                        e.tabs.reset(),
                                        (e.upperBlocks = null),
                                        t.destroy());
                                },
                            };
                        return i;
                    }),
                nj = (e) => ({ imgUrl: e.imgUrl, title: e.title, url: e.url }),
                nW = C.gK.model('ArtistLink', { imgUrl: C.gK.maybeNull(C.gK.string), title: C.gK.maybeNull(C.gK.string), url: C.gK.maybeNull(C.gK.string) }),
                nX = C.gK
                    .compose(
                        C.gK.model('ArtistAboutModal', {
                            modal: r8.q,
                            artist: C.gK.maybeNull(eS.P),
                            artistType: C.gK.maybeNull(C.gK.enumeration(Object.values(lB.o))),
                            description: C.gK.maybeNull(C.gK.string),
                            lastMonthListeners: C.gK.maybeNull(C.gK.number),
                            lastMonthListenersDelta: C.gK.optional(C.gK.number, 0),
                            covers: C.gK.maybeNull(C.gK.array(C.gK.string)),
                            links: C.gK.maybeNull(C.gK.array(nW)),
                        }),
                        q.X,
                        D.p,
                    )
                    .views((e) => ({
                        get isArtistStatsAvailable() {
                            return Number.isFinite(e.lastMonthListeners);
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            open(a) {
                                a && (t.getData(a), e.modal.open());
                            },
                            getData: (0, C.L3)(function* (t) {
                                let { artistsResource: a, modelActionsLogger: i } = (0, C._$)(e);
                                if (!e.isLoading)
                                    try {
                                        var l, r, s, n, o;
                                        e.loadingState = M.G.PENDING;
                                        let i = yield a.getAboutArtist({ artistId: t });
                                        ((e.artist = (0, ei.a)({ artist: i.artist })),
                                            (e.description = null != (o = i.description) ? o : null),
                                            (e.artistType = i.artistType === lB.o.COMPOSER ? lB.o.COMPOSER : lB.o.ARTIST),
                                            i.stats &&
                                                Number.isFinite(null == (l = i.stats) ? void 0 : l.lastMonthListeners) &&
                                                (e.lastMonthListeners = i.stats.lastMonthListeners),
                                            i.stats &&
                                                Number.isFinite(null == (r = i.stats) ? void 0 : r.lastMonthListenersDelta) &&
                                                (e.lastMonthListenersDelta = i.stats.lastMonthListenersDelta));
                                        let d = null == (s = i.covers) ? void 0 : s.map((e) => e.uri).filter((e) => !!e);
                                        (d && (e.covers = (0, C.wg)(d)),
                                            (e.links = (0, C.wg)(null == (n = i.links) ? void 0 : n.map(nj))),
                                            e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                                    } catch (t) {
                                        (i.error(t), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                    }
                            }),
                            close() {
                                (e.modal.close(), t.reset());
                            },
                            onOpenChange(a) {
                                (e.modal.onOpenChange(a), a || t.reset());
                            },
                            reset() {
                                ((e.loadingState = M.G.IDLE),
                                    (e.description = null),
                                    (e.lastMonthListeners = null),
                                    (e.lastMonthListenersDelta = 0),
                                    (e.artistType = null),
                                    e.destroyItems([e.artist, e.covers, e.links]));
                            },
                        };
                        return t;
                    }),
                n$ = C.gK
                    .model('ImageSliderModal', {
                        modal: r8.q,
                        images: C.gK.maybeNull(C.gK.array(C.gK.string)),
                        initialSlideIndex: C.gK.optional(C.gK.number, 0),
                        loadedImages: C.gK.maybeNull(C.gK.array(C.gK.string)),
                        sizeImage: C.gK.optional(C.gK.number, 1e3),
                        withAspectRatio: C.gK.optional(C.gK.boolean, !0),
                    })
                    .views((e) => ({ isImageLoaded: (t) => !!t && !!e.loadedImages && e.loadedImages.includes(t) }))
                    .actions((e) => ({
                        openImages(t) {
                            let { images: a, initialSlideIndex: i, sizeImage: l, withAspectRatio: r } = t;
                            ((e.images = (0, C.wg)((0, sg.HO)(a))),
                                (e.sizeImage = null != l ? l : 1e3),
                                (e.withAspectRatio = null == r || r),
                                i && (e.initialSlideIndex = i),
                                e.modal.open());
                        },
                        setImageIsLoaded(t) {
                            var a, i;
                            (e.loadedImages || (e.loadedImages = (0, C.wg)([])),
                                !t || (null == (a = e.loadedImages) ? void 0 : a.includes(t)) || null == (i = e.loadedImages) || i.push(t));
                        },
                        close() {
                            ((e.images = null), (e.initialSlideIndex = 0), (e.loadedImages = null), e.modal.close());
                        },
                    })),
                nJ = C.gK
                    .model('UgcTrackEditModal', { modal: r8.q })
                    .volatile(() => ({ track: null }))
                    .views((e) => ({
                        get trackTitle() {
                            if (!e.track) return '';
                            return e.track.title;
                        },
                        get trackArtist() {
                            if (!e.track) return '';
                            return e.track.artists.map((e) => e.name).join(', ');
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            open(t) {
                                ((e.track = t), e.modal.open());
                            },
                            close() {
                                (e.modal.close(), t.reset());
                            },
                            reset() {
                                e.track = null;
                            },
                        };
                        return t;
                    }),
                nY = C.gK.model('ModalsModel', {
                    disclaimerModal: r8.q,
                    shortcutsModal: r8.q,
                    aboutAppModal: r8.q,
                    overviewModal: r8.q,
                    ugcTrackEditModal: nJ,
                    crackdownModal: r8.q,
                    overwrittenExperimentsModal: r8.q,
                    overwrittenMocksModal: r8.q,
                    buySubscriptionModal: r8.q,
                    clearMemoryModal: r8.q,
                    imageSliderModal: n$,
                    promoLandingBuySubscriptionModal: r8.q,
                    artistAboutModal: nX,
                    bestRecommedationModal: r8.q,
                }),
                nH = (e) => 'object' == typeof e && e && 'type' in e,
                nq = (e) => {
                    switch (e.type) {
                        case ee._.WAVE_ITEM:
                            return (0, C.wg)({ type: ee._.WAVE_ITEM, data: (0, tM.e)(e.data) });
                        case ee._.PLAYLIST_ITEM:
                            return (0, C.wg)({ type: ee._.PLAYLIST_ITEM, data: (0, er.b)({ playlist: e.data }) });
                        case ee._.ARTIST_ITEM:
                            return (0, C.wg)({ type: ee._.ARTIST_ITEM, data: (0, ei.a)({ artist: e.data }) });
                        case ee._.ALBUM_ITEM:
                            return (0, C.wg)({ type: ee._.ALBUM_ITEM, data: (0, et.s)({ album: e.data }) });
                    }
                },
                nz = C.gK.model('PinAlbumItemModel', { type: C.gK.literal(ee._.ALBUM_ITEM), data: is.G }),
                nQ = C.gK.model('PinArtistItemModel', { type: C.gK.literal(ee._.ARTIST_ITEM), data: eS.P }),
                nZ = C.gK.model('PinPlaylistItemModel', { type: C.gK.literal(ee._.PLAYLIST_ITEM), data: tK.$ }),
                n0 = C.gK.model('PinVibeItemModel', { type: C.gK.literal(ee._.WAVE_ITEM), data: eL.G }),
                n1 = C.gK.union(nz, nQ, nZ, n0),
                n3 = C.gK
                    .model('Pins', { loadingState: C.gK.enumeration(Object.values(M.G)), items: C.gK.maybeNull(C.gK.array(n1)), index: C.gK.map(C.gK.boolean) })
                    .views((e) => ({
                        isPinned: (t) => !!e.index.get(t),
                        get(t) {
                            var a;
                            return null == (a = e.items) ? void 0 : a.find((e) => e.data.pinId === t);
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            deletePin(t) {
                                var a;
                                ((e.items = (0, C.wg)(null == (a = e.items) ? void 0 : a.filter((e) => e.data.pinId !== t))), e.index.delete(t));
                            },
                            addPin(t) {
                                var a, i, l, r;
                                if ((null == (a = e.items) ? void 0 : a.length) === 30) {
                                    let t = null == (r = e.items) ? void 0 : r.pop();
                                    void 0 !== t && e.index.delete(t.data.pinId);
                                }
                                null == (i = e.items) || i.unshift(nq(t));
                                let s = null == (l = e.items) ? void 0 : l.at(0);
                                s && e.index.set(s.data.pinId, !0);
                            },
                            getData: (0, C.L3)(function* () {
                                let { pinsResource: t, modelActionsLogger: a } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING)
                                    try {
                                        var i;
                                        e.loadingState = M.G.PENDING;
                                        let a = yield t.getPins();
                                        ((e.items = (0, C.wg)(a.pins.map(nq))),
                                            null == (i = e.items) ||
                                                i.forEach((t) => {
                                                    e.index.set(t.data.pinId, !0);
                                                }),
                                            (e.loadingState = M.G.RESOLVE));
                                    } catch (t) {
                                        ((e.loadingState = M.G.REJECT), a.error(t));
                                    }
                            }),
                            toggleAlbumPin: (0, C.L3)(function* (a, i) {
                                let { pinResource: l, modelActionsLogger: r } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING)
                                    try {
                                        let r;
                                        if (e.isPinned(i)) return ((r = yield l.unpinAlbum(a)), t.deletePin(i), r);
                                        return ((r = yield l.pinAlbum(a)), nH(r) && t.addPin(r), r);
                                    } catch (e) {
                                        r.error(e);
                                        return;
                                    }
                            }),
                            toggleArtistPin: (0, C.L3)(function* (a, i) {
                                let { pinResource: l, modelActionsLogger: r } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING)
                                    try {
                                        let r;
                                        if (e.isPinned(i)) return ((r = yield l.unpinArtist(a)), t.deletePin(i), r);
                                        return ((r = yield l.pinArtist(a)), nH(r) && t.addPin(r), r);
                                    } catch (e) {
                                        r.error(e);
                                        return;
                                    }
                            }),
                            togglePlaylistPin: (0, C.L3)(function* (a, i) {
                                let { pinResource: l, modelActionsLogger: r } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING)
                                    try {
                                        let r;
                                        if (e.isPinned(i)) return ((r = yield l.unpinPlaylist(a)), t.deletePin(i), r);
                                        return ((r = yield l.pinPlaylist(a)), nH(r) && t.addPin(r), r);
                                    } catch (e) {
                                        r.error(e);
                                        return;
                                    }
                            }),
                            toggleVibePin: (0, C.L3)(function* (a, i) {
                                let { pinResource: l, modelActionsLogger: r } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING)
                                    try {
                                        let r;
                                        if (e.isPinned(i)) return ((r = yield l.unpinWave(a)), t.deletePin(i), r);
                                        return ((r = yield l.pinWave(a)), nH(r) && t.addPin(r), r);
                                    } catch (e) {
                                        r.error(e);
                                        return;
                                    }
                            }),
                        };
                        return t;
                    }),
                n2 = C.gK.model({ modal: r8.q, freemiumCollectionBarrier: C.gK.optional(C.gK.boolean, !1) }).actions((e) => ({
                    openModal() {
                        e.modal.open();
                    },
                    openFreemiumCollectionPaywall() {
                        ((e.freemiumCollectionBarrier = !0), e.modal.open());
                    },
                    clearFreemiumCollectionBarrier() {
                        e.freemiumCollectionBarrier && ((e.freemiumCollectionBarrier = !1), e.modal.close());
                    },
                    closeModal() {
                        if (e.freemiumCollectionBarrier) return;
                        let { desktopPaywall: t } = (0, R.M)(e);
                        (t.startCrackdownTimeout(), e.modal.close());
                    },
                    onOpenChange(t) {
                        if (t || !e.freemiumCollectionBarrier) {
                            if (!t) {
                                let { desktopPaywall: t } = (0, R.M)(e);
                                t.startCrackdownTimeout();
                            }
                            e.modal.onOpenChange(t);
                        }
                    },
                })),
                n8 = C.gK.model('AdContainer', {
                    adTitle: C.gK.maybe(C.gK.string),
                    iconSrc: C.gK.maybe(C.gK.string),
                    clickThroughUrl: C.gK.maybe(C.gK.string),
                    src: C.gK.maybe(C.gK.string),
                    clientLegalInfo: C.gK.maybe(C.gK.string),
                    advertiserInfoUrl: C.gK.maybe(C.gK.string),
                });
            var n5 = a(14968);
            let n6 = C.gK
                .model('Advert', {
                    data: C.gK.maybeNull(n8),
                    isAdvertShown: C.gK.maybe(C.gK.boolean),
                    isAdvertPlaying: C.gK.maybe(C.gK.boolean),
                    isAdvertPlaybackCreated: C.gK.boolean,
                    type: C.gK.maybeNull(C.gK.enumeration(Object.values(n5.I))),
                })
                .views((e) => ({
                    get isAudioAdvert() {
                        return e.type === n5.I.AUDIO;
                    },
                    get isVideoAdvert() {
                        return e.type === n5.I.VIDEO;
                    },
                }))
                .actions((e) => ({
                    setData: (t) => {
                        e.data = (0, C.wg)({
                            adTitle: null == t ? void 0 : t.adTitle,
                            iconSrc: null == t ? void 0 : t.iconSrc,
                            clickThroughUrl: null == t ? void 0 : t.clickThroughUrl,
                            clientLegalInfo: null == t ? void 0 : t.clientLegalInfo,
                            advertiserInfoUrl: null == t ? void 0 : t.advertiserInfoUrl,
                        });
                    },
                    setType(t) {
                        e.type = t;
                    },
                    setAdvertShown: (t) => {
                        e.isAdvertShown = t;
                    },
                    setAdvertPlaying: (t) => {
                        e.isAdvertPlaying = t;
                    },
                    setIsAdvertPlaybackCreated(t) {
                        e.isAdvertPlaybackCreated = t;
                    },
                    isAdvertDisabled(t) {
                        var a, i;
                        let { experiments: l } = (0, R.M)(e),
                            r = null == (i = l.getExperiment(k.z.WebNextDisableAds)) || null == (a = i.value) ? void 0 : a.values;
                        return Array.isArray(r) && r.includes(t);
                    },
                    reset: () => {
                        ((e.data = null), (e.isAdvertPlaying = !0), (e.isAdvertShown = !1), (e.type = null));
                    },
                }));
            var n9 = a(94860),
                n4 = a(31927);
            let n7 = C.gK
                .model('FreePlayerAccess', { restrictionModal: C.gK.maybe(C.gK.frozen()) })
                .views((e) => ({
                    get shownRestrictionModal() {
                        var t;
                        return null != (t = e.restrictionModal) ? t : null;
                    },
                }))
                .actions((e) => ({
                    showRestrictionModal(t) {
                        let { user: a, freeAccess: i, fullscreenPlayer: l, sonataState: r } = (0, R.M)(e);
                        if (t === n4.W.Playing && r.isGenerativeContext) {
                            e.restrictionModal = void 0;
                            return;
                        }
                        if (!a.isAuthorized) {
                            e.restrictionModal = l.modal.isOpened ? n9.h.FullscreenUnauthorized : n9.h.PlayerAuthorization;
                            return;
                        }
                        if (!(t === n4.W.Playing ? i.isFreeDesktopUser || i.limitedFreePlayback : i.isFreeWebUser)) {
                            e.restrictionModal = void 0;
                            return;
                        }
                        e.restrictionModal = l.modal.isOpened ? n9.h.FullscreenSubscription : n9.h.PlayerSubscription;
                    },
                    hideRestrictionModal() {
                        e.restrictionModal = void 0;
                    },
                }));
            var oe = a(36699),
                ot = a(16886),
                oa = a(80468),
                oi = a(23951);
            let ol = (e) => {
                    var t, a, i;
                    switch (e.data.type) {
                        case aU.R.Generative: {
                            let a = e.data.meta,
                                i = (0, oi.Q)(null == a ? void 0 : a.derivedColors);
                            return (0, C.wg)({
                                id: String(a.id),
                                coverUri: a.imageUrl,
                                title: null != (t = a.title) ? t : '',
                                isAvailable: !0,
                                isRemoved: !1,
                                averageColor: i,
                            });
                        }
                        case aU.R.Clip:
                        case ot.z4.Unloaded:
                        case aU.R.Radio:
                            return null;
                        default: {
                            let t = e.data.meta,
                                l = null == (a = t.artists) ? void 0 : a.map(l0.d),
                                r = null == (i = t.albums) ? void 0 : i.map(r7);
                            return (0, C.wg)({ ...(0, oa.x)(t), artists: l, albums: r, isHiddenFromSonataQueue: e.hidden });
                        }
                    }
                },
                or = a(34001)
                    .O.props({ artists: C.gK.array(eS.P), albums: C.gK.array(is.G), chart: C.gK.maybe(aQ.I), isHiddenFromSonataQueue: C.gK.maybe(C.gK.boolean) })
                    .views((e) => ({
                        get idWithContext() {
                            return e.albumId ? ''.concat(e.id, ':').concat(e.albumId) : e.id;
                        },
                        get artistsNames() {
                            var t;
                            return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                        },
                        get mainArtist() {
                            var a, i;
                            return null != (i = null == (a = e.artists) ? void 0 : a[0]) ? i : null;
                        },
                        get mainAlbum() {
                            var l, r;
                            return null != (r = null == (l = e.albums) ? void 0 : l[0]) ? r : null;
                        },
                        get index() {
                            var s, n, o;
                            return null != (o = null == (n = e.albums[0]) || null == (s = n.trackPosition) ? void 0 : s.index) ? o : null;
                        },
                        get isPodcast() {
                            var d;
                            return e.isTrackPodcast || (null == (d = this.mainAlbum) ? void 0 : d.isPodcast);
                        },
                        get isAudiobook() {
                            return e.type === x.S.AUDIOBOOK;
                        },
                        get isFairyTale() {
                            return e.type === x.S.FAIRY_TALE;
                        },
                        get isNonMusic() {
                            return this.isPodcast || this.isAudiobook || this.isFairyTale;
                        },
                        get isAvailableOnlyForPlus() {
                            var g;
                            return !!(null == (g = this.mainAlbum) ? void 0 : g.isAvailableOnlyForPlus);
                        },
                    }))
                    .actions((e) => ({
                        changeTrackInfo: (0, C.L3)(function* (t, a) {
                            let { ugcResource: i, modelActionsLogger: l } = (0, C._$)(e);
                            if (e.artists.map((e) => e.name).join(', ') === a && t === e.title) return a8.F.OK;
                            try {
                                var r;
                                (yield i.changeTrack({ trackId: e.id, title: t, artist: a }), (e.title = t));
                                let l = (null == (r = e.artists[0]) ? void 0 : r.id) || '0';
                                if (((e.artists = (0, C.wg)([])), a)) {
                                    let t = eS.P.create({ id: l, name: a, isAvailable: !0 });
                                    e.artists = (0, C.wg)([t]);
                                }
                                return a8.F.OK;
                            } catch (e) {
                                return (l.error(e), a8.F.ERROR);
                            }
                        }),
                    })),
                os = C.gK
                    .compose(
                        C.gK.model('PlayQueue', {
                            isVisible: C.gK.optional(C.gK.boolean, !1),
                            beforeTracksIds: C.gK.maybeNull(C.gK.array(C.gK.number)),
                            afterTracksIds: C.gK.optional(C.gK.frozen(), []),
                            hiddenTrackIds: C.gK.array(C.gK.number),
                            currentIndex: C.gK.optional(C.gK.number, 0),
                            trackMap: C.gK.optional(C.gK.map(or), {}),
                        }),
                        D.p,
                    )
                    .views((e) => ({
                        get isVibeBlockShowed() {
                            let {
                                sonataState: { isVibeContext: t },
                            } = (0, R.M)(e);
                            return !t && 0 === e.afterTracksIds.length;
                        },
                        get itemsKeys() {
                            var t, a;
                            return null != (a = null == (t = e.beforeTracksIds) ? void 0 : t.concat(e.afterTracksIds).map(String)) ? a : [];
                        },
                        get isDragAndDropEnabled() {
                            let {
                                experiments: t,
                                sonataState: { isVibeContext: a },
                            } = (0, R.M)(e);
                            return t.checkExperiment(k.z.WebNextPlayQueueDnD, 'on') && !a;
                        },
                    }))
                    .actions((e) => {
                        let t = (t, a) => {
                                let i = t[a];
                                if (!i || (0, ot.Re)(i)) return null;
                                let { entity: l } = i,
                                    r = ol(l);
                                return !r || r.isHiddenFromSonataQueue ? null : (e.trackMap.has(r.id) || e.trackMap.set(r.id, (0, C.wg)(r)), a);
                            },
                            a = {
                                setVisible() {
                                    e.isVisible = !0;
                                },
                                setInvisible() {
                                    e.isVisible = !1;
                                },
                                updateTracks(e, t, i, l) {
                                    (a.setCurrentTrackId(e, t), a.setBeforeTracksIds(e, i), a.setAfterTracksIds(e, i, l), a.setHiddenTrackIds(e));
                                },
                                setCurrentTrackId(a, i) {
                                    ((e.currentIndex = i), t(a, i));
                                },
                                setBeforeTracksIds(a, i) {
                                    let l = Math.max(0, e.currentIndex - 125) - 1,
                                        r = [];
                                    for (let s = e.currentIndex - 1; s > l; s--) {
                                        let e = i[s];
                                        if ('number' != typeof e) break;
                                        let l = t(a, e);
                                        null !== l && r.unshift(l);
                                    }
                                    e.beforeTracksIds = (0, C.wg)(r);
                                },
                                setAfterTracksIds(a, i, l) {
                                    let r = l === nf.K.Vibe ? 1 : 125,
                                        s = [];
                                    for (let l = e.currentIndex + 1; l < i.length && s.length < r; l++) {
                                        let e = i[l];
                                        if ('number' != typeof e) break;
                                        let r = t(a, e);
                                        null !== r && s.push(r);
                                    }
                                    e.afterTracksIds = s;
                                },
                                setHiddenTrackIds(t) {
                                    let a = [];
                                    for (let e = 0; e < t.length; e++) {
                                        let i = t[e];
                                        i && i.entity.hidden && a.push(e);
                                    }
                                    e.hiddenTrackIds = (0, C.wg)(a);
                                },
                                reset() {
                                    (e.destroyItems([e.beforeTracksIds, e.hiddenTrackIds]), (e.afterTracksIds = []), e.trackMap.clear());
                                },
                            };
                        return a;
                    });
            var on = a(59342);
            !(function (e) {
                ((e.TEXT = 'TEXT'), (e.LRC = 'LRC'), (e.RICH_JSON = 'RICH_JSON'));
            })(u || (u = {}));
            var oo = a(28197),
                od = a(92231);
            let og = (e, t, a) => {
                    let i = Math.floor(Date.now() / 1e3),
                        l = ''.concat(t).concat(i);
                    return {
                        sign: (0, oo.createHmac)('sha256', (0, f.Ef)(e, (0, od.u)()))
                            .update(l)
                            .digest('base64'),
                        timeStamp: i,
                        trackId: t,
                        format: a,
                    };
                },
                ou = (e) => (0, C.wg)({ id: e.id, name: e.name, prettyName: e.prettyName }),
                oc = C.gK.model('MajorModel', { id: C.gK.number, name: C.gK.string, prettyName: C.gK.maybeNull(C.gK.string) }),
                om = (e) => {
                    if (!e) return;
                    let t = e.split(':'),
                        a = parseInt(t[0] || '0', 10),
                        i = parseFloat(t[1] || '0');
                    return a > 0 ? parseFloat((60 * a + i).toFixed(2)) : i;
                },
                op = C.gK.model('SyncLyricsLine', { text: C.gK.string, fromSec: C.gK.number, toSec: C.gK.maybe(C.gK.number) }).views((e) => ({
                    get key() {
                        return ''.concat(e.fromSec, ':').concat(e.toSec);
                    },
                })),
                oy = C.gK
                    .compose(
                        C.gK.model('SyncLyrics', {
                            isVisible: C.gK.optional(C.gK.boolean, !1),
                            lines: C.gK.maybeNull(C.gK.array(op)),
                            major: C.gK.maybeNull(oc),
                            writers: C.gK.maybeNull(C.gK.array(C.gK.string)),
                            lyricId: C.gK.maybeNull(C.gK.number),
                            externalLyricId: C.gK.maybeNull(C.gK.string),
                            currentTrackId: C.gK.maybeNull(C.gK.union(C.gK.string, C.gK.number)),
                            hasLyricsViewed: C.gK.optional(C.gK.boolean, !1),
                        }),
                        q.X,
                    )
                    .views((e) => ({
                        get startSec() {
                            var t;
                            let a = null == (t = e.lines) ? void 0 : t.at(0);
                            return null == a ? void 0 : a.fromSec;
                        },
                        get endSec() {
                            var a;
                            let t = null == (a = e.lines) ? void 0 : a.at(-1);
                            return null == t ? void 0 : t.toSec;
                        },
                        get hasWriters() {
                            var i;
                            return !!(e.writers && (null == (i = e.writers) ? void 0 : i.length) > 0);
                        },
                        get hasInvalidLyrics() {
                            var l;
                            return !!(e.isResolved && (null == (l = e.lines) ? void 0 : l.length) === 0);
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            setVisible() {
                                e.isVisible = !0;
                            },
                            setInvisible() {
                                e.isVisible = !1;
                            },
                            getActiveLineIndex: (t) => {
                                if ((e.startSec && t < e.startSec) || (e.endSec && t > e.endSec)) return null;
                                let a = (e.lines || []).findIndex((e) => (void 0 === e.toSec ? t >= e.fromSec : !!(t >= e.fromSec) && !!(e.toSec >= t)));
                                return a >= 0 ? a : null;
                            },
                            getData: (0, C.L3)(function* (a) {
                                let { config: i, tracksResource: l, modelActionsLogger: r } = (0, C._$)(e);
                                if (a)
                                    try {
                                        e.loadingState = M.G.PENDING;
                                        let { downloadUrl: r, major: s, externalLyricId: n, lyricId: o, writers: d } = yield l.getLyrics(og(i, a, u.LRC));
                                        ((e.major = ou(s)),
                                            (e.externalLyricId = n),
                                            (e.lyricId = o),
                                            (e.writers = (0, C.wg)(d)),
                                            (e.currentTrackId = a),
                                            (e.hasLyricsViewed = !1),
                                            yield t.downloadSyncLyrics(r),
                                            (e.loadingState = M.G.RESOLVE));
                                    } catch (t) {
                                        ((e.loadingState = M.G.REJECT), r.error(t));
                                    }
                            }),
                            downloadSyncLyrics: (0, C.L3)(function* (t) {
                                let { prefixlessResource: a } = (0, C._$)(e),
                                    i = yield a.getLyricsText(t);
                                e.lines = (0, C.wg)(
                                    ((e) => {
                                        try {
                                            return (
                                                ((e) => {
                                                    if ('string' != typeof e) throw TypeError('expect first argument to be a string');
                                                    let t = e.split('\n'),
                                                        a = /\[(\d*:\d*\.?\d*)\]/,
                                                        i = new RegExp(a.source + /(.+)/.source),
                                                        l = [],
                                                        r = [],
                                                        s = { scripts: [] };
                                                    for (let e = 0; e < t.length; e++) {
                                                        let a = t[e];
                                                        if (a && !1 === i.test(a)) l.push(a);
                                                        else break;
                                                    }
                                                    (l.reduce((e, t) => {
                                                        let a = t.trim().slice(1, -1).split(': '),
                                                            i = a[0],
                                                            l = a[1];
                                                        return (void 0 !== i && (e[i] = l), e);
                                                    }, s),
                                                        t.splice(0, l.length));
                                                    let n = new RegExp(''.concat(i.source, '|').concat(a.source));
                                                    t = t.filter((e) => e && n.test(e));
                                                    for (let e = 0, l = t.length; e < l; e++) {
                                                        let s = t[e],
                                                            n = e + 1 < l ? t[e + 1] : null;
                                                        if (s) {
                                                            let e = i.exec(s),
                                                                t = n ? a.exec(n) : null;
                                                            if (e) {
                                                                let [, a, i] = e,
                                                                    l = null == t ? void 0 : t[1];
                                                                a && r.push({ start: om(a), text: i || '', end: om(l) });
                                                            }
                                                        }
                                                    }
                                                    return ((s.scripts = r), s);
                                                })(e).scripts || []
                                            ).map((e) => {
                                                let { start: t, end: a, text: i } = e;
                                                return (0, C.wg)({ text: i.trim(), fromSec: t, toSec: a });
                                            });
                                        } catch (e) {
                                            return [];
                                        }
                                    })(i),
                                );
                            }),
                            sendViews: (0, C.L3)(function* (t) {
                                let { contextId: a, contextType: i } = t,
                                    { lyricViewsResource: l, modelActionsLogger: r } = (0, C._$)(e);
                                if (e.loadingState === M.G.RESOLVE)
                                    try {
                                        if (!e.major || !e.lyricId || !e.externalLyricId || !e.currentTrackId) return;
                                        (yield l.sendViews({
                                            lyricViews: [
                                                {
                                                    id: (0, on.A)(),
                                                    trackId: e.currentTrackId,
                                                    majorId: e.major.id,
                                                    lyricId: e.lyricId,
                                                    externalLyricId: e.externalLyricId,
                                                    lyricFormat: u.LRC,
                                                    albumId: i === nf.K.Album && a ? a : void 0,
                                                    playlistId: i === nf.K.Playlist && a ? a : void 0,
                                                },
                                            ],
                                        }),
                                            (e.hasLyricsViewed = !0));
                                    } catch (e) {
                                        r.error(e);
                                    }
                            }),
                        };
                        return t;
                    }),
                oE = C.gK
                    .model('FullscreenPlayer', { mode: C.gK.maybeNull(C.gK.enumeration(Object.values(oe.u))), syncLyrics: oy, playQueue: os, modal: r8.q })
                    .views((e) => ({
                        get isSplitMode() {
                            return this.isPlayQueueMode || this.isSyncLyricsMode;
                        },
                        get isSyncLyricsMode() {
                            var t;
                            let { sonataState: a } = (0, R.M)(e);
                            return e.mode === oe.u.SYNC_LYRICS && !!(null == a || null == (t = a.entityMeta) ? void 0 : t.isSyncLyricsAvailable);
                        },
                        get isPlayQueueMode() {
                            return e.mode === oe.u.PLAY_QUEUE;
                        },
                    }))
                    .actions((e) => ({
                        setMode(t) {
                            e.mode = t;
                        },
                        showFullscreenPlayerModal() {
                            (e.syncLyrics.setInvisible(), e.modal.open());
                        },
                        showSyncLyrics() {
                            ((e.mode = oe.u.SYNC_LYRICS), e.syncLyrics.setVisible(), e.modal.isOpened || e.modal.open());
                        },
                        hideSyncLyrics() {
                            ((e.mode = null), e.syncLyrics.setInvisible());
                        },
                        showPlayQueue() {
                            ((e.mode = oe.u.PLAY_QUEUE), e.playQueue.setVisible(), e.modal.isOpened || e.modal.open());
                        },
                        hidePlayQueue() {
                            ((e.mode = null), e.playQueue.setInvisible());
                        },
                        isModeActive: (t) => e.mode === t,
                        reset() {
                            e.mode = null;
                        },
                    })),
                oS = C.gK.model('QualitySettings', { modal: r8.q });
            var ob = a(98146);
            let ov = C.gK.model('UtmLink', {
                    utmSource: C.gK.maybe(C.gK.string),
                    utmCampaign: C.gK.maybe(C.gK.string),
                    utmMedium: C.gK.maybe(C.gK.string),
                    utmTerm: C.gK.maybe(C.gK.string),
                    yclid: C.gK.maybe(C.gK.string),
                }),
                oK = (e, t) => {
                    let a = (0, eH.v)(e, t);
                    if (null == t ? void 0 : t.albumId) {
                        var i, l;
                        let e = a.albums.find((e) => String(e.id) === String(t.albumId));
                        return {
                            ...a,
                            isBest: null == e || null == (i = e.bestAlbumTracks) ? void 0 : i.includes(Number(a.id)),
                            positionInAlbum: null == e || null == (l = e.trackPosition) ? void 0 : l.index,
                        };
                    }
                    return (0, C.wg)({ ...a });
                };
            var oI = a(47306);
            let oL = C.gK
                    .model('TrailerMeta', {
                        id: C.gK.string,
                        url: C.gK.string,
                        title: C.gK.maybe(C.gK.string),
                        uuid: C.gK.maybe(C.gK.string),
                        coverUri: C.gK.maybe(C.gK.string),
                        averageColor: C.gK.maybe(C.gK.string),
                        albumArtists: C.gK.maybe(C.gK.array(eS.P)),
                        albumType: C.gK.maybe(C.gK.string),
                    })
                    .views((e) => ({
                        getSharingProps(t) {
                            switch (t) {
                                case oI.H.ALBUM:
                                    return { pattern: '/album/:albumId', params: { albumId: e.id } };
                                case oI.H.ARTIST:
                                    return { pattern: '/artist/:artistId', params: { artistId: e.id } };
                                case oI.H.PLAYLIST:
                                    return { pattern: '/playlists/:playlistUuid', params: { playlistUuid: e.uuid } };
                                case oI.H.TRACK:
                                    return { pattern: '/track/:trackId', params: { trackId: e.id } };
                                default:
                                    return { pattern: ap.Z.main.href, params: {} };
                            }
                        },
                    })),
                oT = C.gK
                    .model('TrailerState', {
                        contextType: C.gK.maybeNull(C.gK.enumeration(Object.values(nf.K))),
                        contextId: C.gK.maybeNull(C.gK.string),
                        entityMeta: C.gK.maybeNull(or),
                        status: C.gK.enumeration(Object.values(ot.MT)),
                    })
                    .actions((e) => ({
                        setContextId: (t) => {
                            e.contextId = String(t);
                        },
                        setContextType: (t) => {
                            e.contextType = t;
                        },
                        setEntityMeta: (t) => {
                            t && t.data.meta && (e.entityMeta = ol(t));
                        },
                        setStatus: (t) => {
                            e.status = t;
                        },
                    })),
                oh = H.v.props({ isBest: C.gK.maybe(C.gK.boolean), positionInAlbum: C.gK.maybe(C.gK.number) }).named('TrailerTrack'),
                oN = C.gK
                    .compose(
                        C.gK.model('Trailer', {
                            id: C.gK.maybeNull(C.gK.string),
                            errorStatusCode: C.gK.maybeNull(C.gK.number),
                            modal: r8.q,
                            variant: C.gK.maybeNull(C.gK.enumeration(Object.values(oI.H))),
                            tracks: C.gK.maybeNull(C.gK.array(oh)),
                            meta: C.gK.maybeNull(oL),
                            state: oT,
                            withAnimation: C.gK.boolean,
                            shouldAutoStartPlaying: C.gK.boolean,
                            shouldSendEventOnTracksShowed: C.gK.boolean,
                            sonataStatusBeforeTrailerStart: C.gK.enumeration(Object.values(ot.MT)),
                            isManuallyPaused: C.gK.boolean,
                            utmLinkModel: C.gK.maybe(ov),
                            title: C.gK.maybeNull(C.gK.string),
                            shareable: C.gK.maybeNull(C.gK.boolean),
                            personalColor: C.gK.maybeNull(C.gK.number),
                        }),
                        q.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === M.G.PENDING;
                        },
                        get isNotFound() {
                            var t;
                            let a = e.loadingState === M.G.RESOLVE && (null == (t = e.tracks) ? void 0 : t.length) === 0,
                                i = e.errorStatusCode === O.X1.NOT_FOUND;
                            return a || i;
                        },
                        get objectId() {
                            return ''.concat(e.variant, ':').concat(e.id);
                        },
                        get utmLink() {
                            return e.utmLinkModel && (0, sg.HO)(e.utmLinkModel);
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            setUtmLink(t) {
                                t && (e.utmLinkModel = (0, C.wg)(t));
                            },
                            resetUtmLink() {
                                e.utmLinkModel = void 0;
                            },
                            setAnimationState(t) {
                                e.withAnimation = t;
                            },
                            setShouldAutoStartPlaying(t) {
                                e.shouldAutoStartPlaying = t;
                            },
                            setShouldSendEventOnTracksShowed(t) {
                                e.shouldSendEventOnTracksShowed = t;
                            },
                            setIsManuallyPaused(t) {
                                e.isManuallyPaused = t;
                            },
                            isTrailerActive: (t, a) => !!e.modal.isOpened && e.variant === t && e.id === a,
                            openArtistTrailer(a) {
                                let { sonataState: i } = (0, R.M)(e);
                                t.isTrailerActive(oI.H.ARTIST, a) ||
                                    (t.reset(),
                                    (e.variant = oI.H.ARTIST),
                                    (e.id = a),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getArtistTrailer(a));
                            },
                            openAlbumTrailer(a) {
                                let { sonataState: i } = (0, R.M)(e);
                                t.isTrailerActive(oI.H.ALBUM, String(a)) ||
                                    (t.reset(),
                                    (e.variant = oI.H.ALBUM),
                                    (e.id = String(a)),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getAlbumTrailer(a));
                            },
                            openPlaylistTrailer(a) {
                                let { sonataState: i } = (0, R.M)(e);
                                t.isTrailerActive(oI.H.PLAYLIST, a) ||
                                    (t.reset(),
                                    (e.variant = oI.H.PLAYLIST),
                                    (e.id = a),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getPlaylistTrailer(a));
                            },
                            openTrackTrailer(a) {
                                let { sonataState: i } = (0, R.M)(e);
                                t.isTrailerActive(oI.H.TRACK, a) ||
                                    (t.reset(),
                                    (e.variant = oI.H.TRACK),
                                    (e.id = a),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getTrackTrailer(a));
                            },
                            getArtistTrailer: (0, C.L3)(function* (a) {
                                let { artistsResource: i } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING)
                                    try {
                                        e.loadingState = M.G.PENDING;
                                        let { artist: t, trailer: l } = yield i.getTrailer({ artistId: a });
                                        (l.tracks && (e.tracks = (0, C.wg)(l.tracks.map((e) => oK(e, { isSmartPreview: !0 })))),
                                            l.title && (e.title = l.title),
                                            t &&
                                                (e.meta = ((e) => {
                                                    var t, a;
                                                    let { href: i } = (0, th.u)('/artist/:artistId', { params: { artistId: e.id } });
                                                    return (0, C.wg)({
                                                        id: String(e.id),
                                                        url: i,
                                                        title: e.name,
                                                        coverUri: null == (t = e.cover) ? void 0 : t.uri,
                                                        averageColor: null == (a = e.cover) ? void 0 : a.color,
                                                    });
                                                })(t)),
                                            (e.loadingState = M.G.RESOLVE));
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            getAlbumTrailer: (0, C.L3)(function* (a) {
                                let { albumResource: i } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING)
                                    try {
                                        e.loadingState = M.G.PENDING;
                                        let { album: t, artists: l, trailer: r } = yield i.getTrailer({ albumId: a });
                                        (r.tracks && (e.tracks = (0, C.wg)(r.tracks.map((e) => oK(e, { isSmartPreview: !0, albumId: t.id })))),
                                            r.title && (e.title = r.title),
                                            t &&
                                                (e.meta = ((e, t) => {
                                                    var a, i;
                                                    let l = null == t ? void 0 : t.map((e) => (0, ei.a)({ artist: e })),
                                                        { href: r } = (0, th.u)('/album/:albumId', { params: { albumId: e.id } });
                                                    return (0, C.wg)({
                                                        id: String(e.id),
                                                        url: r,
                                                        title: e.title,
                                                        coverUri: null == (a = e.cover) ? void 0 : a.uri,
                                                        averageColor: null == (i = e.cover) ? void 0 : i.color,
                                                        albumArtists: l,
                                                        albumType: e.albumType,
                                                    });
                                                })(t, l)),
                                            (e.loadingState = M.G.RESOLVE));
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            getPlaylistTrailer: (0, C.L3)(function* (a) {
                                let { usersResource: i } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING)
                                    try {
                                        e.loadingState = M.G.PENDING;
                                        let { uid: t, kind: l } = (0, ob.I)(a);
                                        if (!t || !l) {
                                            e.loadingState = M.G.REJECT;
                                            return;
                                        }
                                        let {
                                            playlist: r,
                                            trailer: s,
                                            shareable: n,
                                            personalColor: o,
                                        } = yield i.getPlaylistTrailer({ userId: t, playlistKind: Number(l) });
                                        (s.tracks && (e.tracks = (0, C.wg)(s.tracks.map((e) => oK(e, { isSmartPreview: !0 })))),
                                            s.title && (e.title = s.title),
                                            n && (e.shareable = n),
                                            o && (e.personalColor = o),
                                            r &&
                                                (e.meta = ((e) => {
                                                    var t, a;
                                                    let { href: i } = (0, th.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                                                    return (0, C.wg)({
                                                        id: ''.concat(e.uid, ':').concat(e.kind),
                                                        url: i,
                                                        uuid: e.playlistUuid,
                                                        title: e.title,
                                                        coverUri: null == (t = e.cover) ? void 0 : t.uri,
                                                        averageColor: null == (a = e.cover) ? void 0 : a.color,
                                                    });
                                                })(r)),
                                            (e.loadingState = M.G.RESOLVE));
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            getTrackTrailer: (0, C.L3)(function* (a) {
                                let { tracksResource: i } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING)
                                    try {
                                        e.loadingState = M.G.PENDING;
                                        let { track: t, title: n } = yield i.getTrailer({ trackId: a });
                                        if ((n && (e.title = n), t)) {
                                            var l, r, s;
                                            ((e.tracks = (0, C.wg)([oK(t, { isSmartPreview: !0 })])),
                                                (e.meta = (0, C.wg)({
                                                    id: String(t.id),
                                                    url: ((e, t) => {
                                                        if (!t) {
                                                            let { href: t } = (0, th.u)('/track/:trackId', { params: { trackId: e } });
                                                            return t;
                                                        }
                                                        let { href: a } = (0, th.u)('/album/:albumId/track/:trackId', { params: { albumId: t, trackId: e } });
                                                        return a;
                                                    })(t.id, null == (r = t.albums) || null == (l = r[0]) ? void 0 : l.id),
                                                    title: t.title,
                                                    coverUri: t.coverUri,
                                                    averageColor: null == (s = t.derivedColors) ? void 0 : s.average,
                                                })));
                                        }
                                        e.loadingState = M.G.RESOLVE;
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            handleError(t) {
                                let { modelActionsLogger: a } = (0, C._$)(e);
                                (a.error(t),
                                    t instanceof O.GX && (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) && (e.errorStatusCode = O.X1.NOT_FOUND),
                                    e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                            },
                            reset() {
                                ((e.loadingState = M.G.IDLE),
                                    (e.errorStatusCode = null),
                                    (e.variant = null),
                                    (e.id = null),
                                    (e.tracks = null),
                                    (e.meta = null),
                                    (e.withAnimation = !0),
                                    (e.shouldAutoStartPlaying = !0),
                                    (e.shouldSendEventOnTracksShowed = !0),
                                    (e.sonataStatusBeforeTrailerStart = ot.MT.IDLE),
                                    (e.isManuallyPaused = !0),
                                    (e.title = null),
                                    (e.shareable = null),
                                    (e.personalColor = null));
                            },
                        };
                        return t;
                    });
            (c || (c = {})).OK = 'ok';
            var oA = a(51514);
            let oC = C.gK
                .compose(
                    C.gK.model('VibeActions', {
                        meta: C.gK.maybeNull(eL.G),
                        applyingSetting: C.gK.maybeNull(C.gK.string),
                        isApplying: C.gK.boolean,
                        vibeResetLoadingState: C.gK.enumeration(Object.values(M.G)),
                    }),
                    q.X,
                )
                .views((e) => ({
                    get isMyVibe() {
                        return e.meta && 1 === e.meta.seeds.length && e.meta.seeds[0] === oA.M1;
                    },
                    get isShuffleVibe() {
                        var t;
                        return e.meta && 1 === e.meta.seeds.length && (null == (t = e.meta.seeds[0]) ? void 0 : t.includes(oA.yx));
                    },
                }))
                .actions((e) => ({
                    getLastVibe: (0, C.L3)(function* () {
                        let { rotorResource: t, modelActionsLogger: a } = (0, C._$)(e);
                        if (e.loadingState !== M.G.PENDING)
                            try {
                                e.loadingState = M.G.PENDING;
                                let a = yield t.waveLast();
                                ((e.meta = (0, eo.l)(a)), (e.loadingState = M.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.loadingState = M.G.REJECT));
                            }
                    }),
                    vibeReset: (0, C.L3)(function* () {
                        let { rotorResource: t, modelActionsLogger: a } = (0, C._$)(e);
                        if (e.vibeResetLoadingState !== M.G.PENDING)
                            try {
                                ((e.vibeResetLoadingState = M.G.PENDING),
                                    (yield t.waveLastReset()) === c.OK && (e.meta = (0, eo.l)({ name: '', seeds: [oA.M1] })),
                                    (e.vibeResetLoadingState = M.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.vibeResetLoadingState = M.G.REJECT));
                            }
                    }),
                    setApplyingSetting(t) {
                        t ? (e.applyingSetting = (0, C.wg)(t)) : (e.applyingSetting = null);
                    },
                    setIsApplying(t) {
                        e.isApplying = t;
                    },
                    setVibe(t) {
                        e.meta = (0, eo.l)(t);
                    },
                    reset() {
                        ((e.meta = null), (e.vibeResetLoadingState = M.G.IDLE), (e.loadingState = M.G.IDLE));
                    },
                }));
            var of = a(35955);
            let oR = aE.props({ artists: C.gK.array(eS.P), isHiddenFromSonataQueue: C.gK.maybe(C.gK.boolean) }).views((e) => ({
                    get idWithContext() {
                        return String(e.clipId);
                    },
                })),
                ok = C.gK
                    .model('VideoPlayerState', {
                        contextType: C.gK.maybeNull(C.gK.enumeration(Object.values(nf.K))),
                        contextId: C.gK.maybeNull(C.gK.string),
                        entityMeta: C.gK.maybeNull(oR),
                        status: C.gK.enumeration(Object.values(ot.MT)),
                        canMoveForward: C.gK.boolean,
                        canMoveBackward: C.gK.boolean,
                    })
                    .actions((e) => ({
                        setContextId: (t) => {
                            e.contextId = String(t);
                        },
                        setContextType: (t) => {
                            e.contextType = t;
                        },
                        setEntityMeta: (t) => {
                            (null == t ? void 0 : t.data.meta) &&
                                (e.entityMeta = ((e) => {
                                    if (e.data.type !== aU.R.Clip) return null;
                                    {
                                        var t;
                                        let a = e.data.meta;
                                        if (!a.clipId) return null;
                                        let i = null == (t = a.artists) ? void 0 : t.map((e) => (0, ei.a)({ artist: e })),
                                            { available: l, disclaimers: r } = (0, e0.f)(a);
                                        return (0, C.wg)({
                                            clipId: a.clipId,
                                            title: a.title,
                                            thumbnail: a.thumbnail,
                                            duration: a.duration,
                                            previewUrl: a.previewUrl,
                                            isAvailable: l,
                                            disclaimers: r,
                                            artists: i,
                                            isHiddenFromSonataQueue: e.hidden,
                                        });
                                    }
                                })(t));
                        },
                        setStatus: (t) => {
                            e.status = t;
                        },
                        setCanMoveForward: (t) => {
                            e.canMoveForward = t;
                        },
                        setCanMoveBackward: (t) => {
                            e.canMoveBackward = t;
                        },
                    })),
                oD = C.gK
                    .compose(
                        C.gK.model('FullscreenVideoPlayer', {
                            modal: r8.q,
                            ids: C.gK.array(C.gK.number),
                            activeIndex: C.gK.maybeNull(C.gK.number),
                            clips: C.gK.array(aS),
                            errorStatusCode: C.gK.maybeNull(C.gK.number),
                            state: ok,
                            sonataStatusBeforeClipStart: C.gK.enumeration(Object.values(ot.MT)),
                            isOpenedFromMain: C.gK.maybeNull(C.gK.boolean),
                            withAnimation: C.gK.boolean,
                        }),
                        q.X,
                        D.p,
                    )
                    .views((e) => {
                        let t = {
                            get clipActiveIndex() {
                                return e.activeIndex || 0;
                            },
                            get clipActive() {
                                return e.clips[t.clipActiveIndex];
                            },
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === M.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.isResolved && 0 === e.clips.length;
                                return e.errorStatusCode === O.X1.NOT_FOUND || t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                            get entitiesData() {
                                return e.ids.map((e) => ({ type: aU.R.Clip, meta: { id: e }, loadEntityMeta: !0 }));
                            },
                            get isPlayingSonataStatusBeforeClipStart() {
                                return e.sonataStatusBeforeClipStart === ot.MT.PLAYING;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setIds(t) {
                            e.ids = (0, C.wg)(t);
                        },
                        setClipIndex() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            e.activeIndex = t;
                        },
                        setOpenedFromMain() {
                            ((e.isOpenedFromMain = !0), (e.withAnimation = !1));
                        },
                        setAnimationState(t) {
                            e.withAnimation = t;
                        },
                        setSonataStatusBeforeClipStart() {
                            let { sonataState: t } = (0, R.M)(e);
                            e.sonataStatusBeforeClipStart = t.status;
                        },
                        getClips: (0, C.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            if (e.loadingState !== M.G.PENDING)
                                try {
                                    e.loadingState = M.G.PENDING;
                                    let a = yield t.getClip({ clipIds: e.ids });
                                    ((e.ids = (0, C.wg)(a.map((e) => e.clipId))),
                                        (e.clips = (0, C.wg)(a.map(rs))),
                                        (e.activeIndex = (0, of.z)(e.ids, e.activeIndex)),
                                        e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), t instanceof O.GX && (e.errorStatusCode = t.statusCode), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = M.G.IDLE),
                                (e.activeIndex = null),
                                (e.errorStatusCode = null),
                                (e.isOpenedFromMain = null),
                                (e.withAnimation = !0),
                                (e.sonataStatusBeforeClipStart = ot.MT.IDLE),
                                e.destroyItems([e.ids, e.clips]));
                        },
                    }));
            var o_ = a(57263),
                oP = a(92671),
                oO = a(71683),
                ow = a(16912);
            !(function (e) {
                ((e.CLICK = 'CLICK'), (e.VIEW = 'VIEW'));
            })(m || (m = {}));
            let oG = C.gK
                    .model('BaseWheelItem', {
                        id: C.gK.string,
                        index: C.gK.number,
                        type: C.gK.enumeration(Object.values(oP.D)),
                        style: C.gK.maybe(C.gK.string),
                        description: C.gK.maybe(C.gK.string),
                    })
                    .views((e) => ({
                        get isPlayable() {
                            if (!(0, C._n)(e)) return !1;
                            switch (e.type) {
                                case oP.D.WAVE:
                                case oP.D.ALBUM:
                                    return !0;
                                case oP.D.PROMO_LINK:
                                case oP.D.SETTING:
                                    return !1;
                            }
                        },
                    }))
                    .actions((e) => ({
                        handleFeedbackView() {
                            if (!(0, C._n)(e)) return;
                            let { wheel: t } = (0, R.M)(e);
                            t && t.addFeedback(m.VIEW, e.type, e.id, e.index);
                        },
                        handleFeedbackClick() {
                            if (!(0, C._n)(e)) return;
                            let { wheel: t } = (0, R.M)(e);
                            if (!t) return;
                            let a = t.addFeedback(m.CLICK, e.type, e.id, e.index);
                            e.isPlayable ||
                                a.then(() => {
                                    (0, C._n)(t) && t.sendFeedbacks();
                                });
                        },
                    })),
                oM = oG.props({ type: C.gK.literal(oP.D.ALBUM), data: ey.J }),
                oU = C.gK
                    .model('PromoLink', {
                        id: C.gK.string,
                        title: C.gK.string,
                        description: C.gK.maybe(C.gK.string),
                        url: C.gK.maybeNull(C.gK.string),
                        cover: t6.$,
                        color: C.gK.string,
                    })
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) })),
                oB = oG.props({ type: C.gK.literal(oP.D.PROMO_LINK), data: oU }),
                oF = C.gK.model('Setting', { title: C.gK.string, cover: t6.$ }).actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.title) })),
                oV = oG.props({ type: C.gK.literal(oP.D.SETTING), data: oF }),
                ox = oG.props({ type: C.gK.literal(oP.D.WAVE), data: eL.G }),
                oj = (e, t) =>
                    e.items
                        .map((e, a) => {
                            try {
                                var i, l, r, s;
                                switch (e.type) {
                                    case oP.D.WAVE:
                                        return ox.create({
                                            id: e.id,
                                            index: a,
                                            type: oP.D.WAVE,
                                            style: null != (i = e.style) ? i : ow.y.DEFAULT,
                                            description: e.description,
                                            data: (0, eo.l)(e.data.wave, e.data.agent),
                                        });
                                    case oP.D.ALBUM:
                                        return oM.create({
                                            id: e.id,
                                            index: a,
                                            type: oP.D.ALBUM,
                                            style: null != (l = e.style) ? l : ow.y.DEFAULT,
                                            description: e.description,
                                            data: (0, et.s)({ album: e.data.album, artists: e.data.artists }),
                                        });
                                    case oP.D.PROMO_LINK:
                                        return oB.create({
                                            id: e.id,
                                            index: a,
                                            type: oP.D.PROMO_LINK,
                                            style: null != (r = e.style) ? r : ow.y.DEFAULT,
                                            description: e.description,
                                            data: ((e) =>
                                                (0, C.wg)({
                                                    id: e.id,
                                                    title: e.title,
                                                    description: e.description,
                                                    url: e.action.weblink,
                                                    cover: e.cover,
                                                    color: e.color,
                                                }))(e.data),
                                        });
                                    case oP.D.SETTING:
                                        return oV.create({
                                            id: e.id,
                                            index: a,
                                            type: oP.D.SETTING,
                                            style: null != (s = e.style) ? s : ow.y.DEFAULT,
                                            description: e.description,
                                            data: { title: e.data.title, cover: e.data.cover },
                                        });
                                    default:
                                        return null;
                                }
                            } catch (a) {
                                return (null == t || t.error('[Wheel] Item parse error', { error: a, item: e }), null);
                            }
                        })
                        .filter((e) => null !== e),
                oW = C.gK.union(ox, oM, oB, oV),
                oX = C.gK
                    .compose(
                        C.gK.model('Wheel', {
                            wheelId: C.gK.optional(C.gK.string, ''),
                            items: C.gK.array(oW),
                            activeIndex: C.gK.optional(C.gK.number, 1),
                            lastRequestId: C.gK.optional(C.gK.string, ''),
                        }),
                        q.X,
                        D.p,
                    )
                    .volatile(() => ({ feedbacksStore: void 0 }))
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading;
                        },
                        get isEmpty() {
                            return 0 === e.items.length;
                        },
                        get isPersistentFeedbacksAvailable() {
                            var t;
                            return !!(null == (t = e.feedbacksStore) ? void 0 : t.isAvailable());
                        },
                    }))
                    .actions((e) => {
                        let t = new Map(),
                            a = Promise.resolve(),
                            i = async () => {
                                if ((await a, !e.feedbacksStore)) return { feedbacks: [], persistentFeedbackKeys: [] };
                                let t = await e.feedbacksStore.getFeedbacks();
                                return { feedbacks: t.map((e) => e.feedback), persistentFeedbackKeys: t.map((e) => e.feedbackKey) };
                            },
                            l = async () =>
                                e.isPersistentFeedbacksAvailable ? i() : { feedbacks: 0 === t.size ? [] : Array.from(t.values()), persistentFeedbackKeys: [] },
                            r = (a) => {
                                if ((t.clear(), a.persistentFeedbackKeys.length > 0)) {
                                    var i;
                                    null == (i = e.feedbacksStore) || i.clearSentFeedbacks(a.persistentFeedbackKeys);
                                }
                            };
                        return {
                            setFeedbacksStore(t) {
                                e.feedbacksStore = t;
                            },
                            setActiveIndex(t) {
                                e.activeIndex = t;
                            },
                            async addFeedback(i, l, r, s) {
                                let n = { wheelId: e.wheelId, timestamp: Date.now(), eventType: i, item: { type: l, id: r }, position: s };
                                if (e.isPersistentFeedbacksAvailable)
                                    return e.feedbacksStore
                                        ? (a = a
                                              .then(() => {
                                                  let t = e.feedbacksStore;
                                                  return t ? t.addFeedback(n) : Promise.resolve();
                                              })
                                              .catch(() => void 0))
                                        : Promise.resolve();
                                let o = (0, oO.q)(n);
                                t.has(o) || t.set(o, n);
                            },
                            sendFeedbacks: (0, C.L3)(function* () {
                                let { wheelResource: t, modelActionsLogger: a } = (0, C._$)(e),
                                    i = yield l();
                                if (0 !== i.feedbacks.length)
                                    try {
                                        (yield t.feedbacks({ feedbacks: i.feedbacks }), r(i));
                                    } catch (e) {
                                        a.error('[Wheel] Feedbacks send error', { error: e });
                                    }
                            }),
                            getData: (0, C.L3)(function* (t, a) {
                                let { context: i, forceFetch: s } = t,
                                    n = ((e) => {
                                        switch (e.type) {
                                            case o_.b.ALBUM:
                                            case o_.b.ARTIST:
                                                return ''.concat(e.type, ':').concat(e.data.id);
                                            case o_.b.PLAYLIST:
                                                return ''.concat(e.type, ':').concat(e.data.playlistUuid);
                                            case o_.b.WAVE:
                                                return ''.concat(e.type, ':').concat(e.data.seeds.join(','));
                                            case o_.b.GENERATIVE:
                                            case o_.b.CLIP:
                                                return e.type;
                                            case o_.b.OTHER:
                                                var t, a;
                                                return ''.concat(e.type, ':').concat(null != (a = null == (t = e.data) ? void 0 : t.id) ? a : '');
                                        }
                                    })(i);
                                if (!s && n === e.lastRequestId) return;
                                let { wheelResource: o, modelActionsLogger: d } = (0, C._$)(e);
                                e.loadingState = M.G.PENDING;
                                let g = yield l();
                                try {
                                    let t = yield o.wheelNew({ context: i, feedbacks: g.feedbacks });
                                    if (
                                        (r(g), (e.wheelId = t.wheelId), (e.items = (0, C.wg)(oj(t, d))), (e.activeIndex = 1), (e.lastRequestId = n), 0 === e.items.length)
                                    )
                                        throw Error('Empty response');
                                    e.loadingState = M.G.RESOLVE;
                                } catch (t) {
                                    if (e.isEmpty && a) {
                                        d.error('[Wheel] Pumpkin', { error: t });
                                        let i = ((e) => {
                                            let t = e({ id: 'vibe-wheel.activity-description' }),
                                                a = e({ id: 'vibe-wheel.mood-description' });
                                            return {
                                                wheelId: 'PUMPKIN',
                                                items: [
                                                    {
                                                        id: 'activity:wake-up',
                                                        type: oP.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.activity-wake-up' }), description: t, seeds: ['activity:wake-up'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/JVsyUlrs9Y',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/28592/rotor-activity-wake-up-agent-cover-RSUMc/%%',
                                                                    color: '#FFFFD6',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'activity:road-trip',
                                                        type: oP.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.activity-road-trip' }), description: t, seeds: ['activity:road-trip'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/Foah9sRLsS',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/70683/rotor-activity-road-trip-agent-cover-S1vPp/%%',
                                                                    color: '#FFFFDF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'activity:work-background',
                                                        type: oP.D.WAVE,
                                                        data: {
                                                            wave: {
                                                                name: e({ id: 'vibe-wheel.activity-work-background' }),
                                                                description: t,
                                                                seeds: ['activity:work-background'],
                                                            },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/tsXpFHIBjM',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/2413828/rotor-activity-work-background-agent-cover-5t6qb/%%',
                                                                    color: '#FFFFFF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'activity:workout',
                                                        type: oP.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.activity-workout' }), description: t, seeds: ['activity:workout'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/PexWCCcEc9',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/2413828/rotor-activity-workout-agent-cover-Wcrjo/%%',
                                                                    color: '#EBFFFE',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'activity:fall-asleep',
                                                        type: oP.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.activity-fall-asleep' }), description: t, seeds: ['activity:fall-asleep'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/J9QAoYnnPe',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/28592/rotor-activity-fall-asleep-agent-cover-XaOnj/%%',
                                                                    color: '#FAFFFF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'mood:energetic',
                                                        type: oP.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.mood-energetic' }), description: a, seeds: ['mood:energetic'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/e6Ptlara08',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/70683/rotor-mood-energetic-agent-cover-NrJtV/%%',
                                                                    color: '#FDFAFF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'mood:happy',
                                                        type: oP.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.mood-happy' }), description: a, seeds: ['mood:happy'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/EzOBeQmIXi',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/70683/rotor-mood-happy-agent-cover-JWFjr/%%',
                                                                    color: '#FFFFE8',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'mood:sad',
                                                        type: oP.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.mood-sad' }), description: a, seeds: ['mood:sad'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/rrF2I4tUvZ',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/30221/rotor-mood-sad-agent-cover-IN0O6/%%',
                                                                    color: '#EAFFFF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                ],
                                            };
                                        })(a);
                                        ((e.wheelId = i.wheelId), (e.items = (0, C.wg)(oj(i, d))), (e.activeIndex = 1));
                                    } else d.error('[Wheel] Load error', { error: t });
                                    e.loadingState = M.G.REJECT;
                                }
                            }),
                        };
                    }),
                o$ = C.gK.model('WizardGenre', { id: C.gK.string, title: C.gK.string }),
                oJ = C.gK
                    .model('Wizard', {
                        loadingState: C.gK.enumeration(Object.values(M.G)),
                        modal: r8.q,
                        introModal: r8.q,
                        genres: C.gK.array(o$),
                        artistsByGenres: C.gK.maybe(C.gK.frozen()),
                        savedLikedArtists: C.gK.array(C.gK.string),
                        likedArtists: C.gK.array(C.gK.string),
                        unlikedArtists: C.gK.array(C.gK.string),
                        filter: C.gK.maybe(C.gK.string),
                    })
                    .views((e) => ({
                        get genreItem() {
                            var t;
                            return null == (t = e.artistsByGenres) ? void 0 : t.get(e.filter);
                        },
                        get artistsByGenre() {
                            var a;
                            return (null == (a = this.genreItem) ? void 0 : a.artists) || [];
                        },
                        get selectedArtistsCounter() {
                            return e.likedArtists.length + e.savedLikedArtists.length - e.unlikedArtists.length;
                        },
                        isArtistLiked: (t) => !e.unlikedArtists.includes(t) && (e.likedArtists.includes(t) || e.savedLikedArtists.includes(t)),
                    }))
                    .actions((e) => ({
                        likeArtist: (t) => {
                            let { likedArtists: a, unlikedArtists: i, savedLikedArtists: l } = e,
                                r = ((e) => {
                                    let { id: t, likedArtists: a, unlikedArtists: i, savedLikedArtists: l } = e,
                                        r = {};
                                    if (a.includes(t)) return ((r.likedArtists = a.filter((e) => e !== t)), r);
                                    let s = l.includes(t),
                                        n = i.includes(t);
                                    return (((r.unlikedArtists = i.filter((e) => e !== t)), s && !n) ? r.unlikedArtists.push(t) : (r.likedArtists = [...a, t]), r);
                                })({ id: t, likedArtists: a, unlikedArtists: i, savedLikedArtists: l });
                            (r.likedArtists && (e.likedArtists = (0, C.wg)(r.likedArtists)), r.unlikedArtists && (e.unlikedArtists = (0, C.wg)(r.unlikedArtists)));
                        },
                        setFilter: (t) => {
                            e.filter = t;
                        },
                        getGenres: (0, C.L3)(function* () {
                            let { feedResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            if (e.loadingState !== M.G.PENDING && e.loadingState !== M.G.RESOLVE)
                                try {
                                    var i;
                                    e.loadingState = M.G.PENDING;
                                    let { genres: a } = yield t.getWizardGenres();
                                    if (((e.genres = (0, C.wg)(a.map((e) => ({ id: e.id, title: e.title })))), !a.length))
                                        throw Error("The wizard's genre array is empty");
                                    ((e.filter = null == (i = a[0]) ? void 0 : i.id),
                                        (e.artistsByGenres = (0, C.wg)(
                                            ((e) => {
                                                let t = new Map();
                                                return (
                                                    e.map((e) => {
                                                        t.set(e.id, { loadingState: M.G.IDLE, artists: [], showedArtists: [] });
                                                    }),
                                                    sg.sH.map(t)
                                                );
                                            })(a),
                                        )),
                                        e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                }
                        }),
                        getArtists: (0, C.L3)(function* (t) {
                            let { feedResource: a, modelActionsLogger: i } = (0, C._$)(e);
                            if (e.loadingState !== M.G.RESOLVE || !e.filter) return;
                            let l = e.artistsByGenres.get(e.filter);
                            if (l.loadingState !== M.G.PENDING)
                                try {
                                    l.loadingState = M.G.PENDING;
                                    let { artists: i = [], likedArtists: r = [] } = yield a.getWizardArtistsByGenre({
                                            genre: e.filter,
                                            showedArtists: l.showedArtists,
                                            likedArtists: e.likedArtists,
                                            unlikedArtists: e.unlikedArtists,
                                            countOfNewArtists: t,
                                        }),
                                        s = i.map((e) => (0, ei.a)({ artist: e })),
                                        n = i.map((e) => e.id);
                                    (e.artistsByGenres.set(e.filter, {
                                        artists: [...l.artists, ...s],
                                        showedArtists: [...l.showedArtists, ...n],
                                        loadingState: M.G.RESOLVE,
                                    }),
                                        (e.savedLikedArtists = (0, C.wg)(r.map((e) => String(e)))),
                                        (e.likedArtists = (0, C.wg)([])),
                                        (e.unlikedArtists = (0, C.wg)([])));
                                } catch (e) {
                                    (i.error(e), (l.loadingState = M.G.REJECT));
                                }
                        }),
                        finish: (0, C.L3)(function* () {
                            let { feedResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            if (!e.filter) return a8.F.ERROR;
                            try {
                                return (yield t.finishWizard({ genre: e.filter, likedArtists: e.likedArtists, unlikedArtists: e.unlikedArtists }), a8.F.OK);
                            } catch (e) {
                                return (a.error(e), a8.F.ERROR);
                            }
                        }),
                    })),
                oY = C.gK.model('Credit', { title: C.gK.string, value: C.gK.string }),
                oH = C.gK
                    .model('CurrentClipInfo', {
                        id: C.gK.maybeNull(C.gK.number),
                        clip: C.gK.maybeNull(aS),
                        clipLoadingState: C.gK.enumeration(Object.values(M.G)),
                        creditsLoadingState: C.gK.enumeration(Object.values(M.G)),
                        credits: C.gK.maybeNull(C.gK.array(oY)),
                        modal: r8.q,
                    })
                    .views((e) => ({
                        get isClipIdle() {
                            return e.clipLoadingState === M.G.IDLE;
                        },
                        get isClipLoading() {
                            return e.clipLoadingState === M.G.PENDING;
                        },
                        get isClipRejected() {
                            return e.clipLoadingState === M.G.REJECT;
                        },
                        get isCreditsIdle() {
                            return e.creditsLoadingState === M.G.IDLE;
                        },
                        get isCreditsLoading() {
                            return e.creditsLoadingState === M.G.PENDING;
                        },
                        get isCreditsRejected() {
                            return e.creditsLoadingState === M.G.REJECT;
                        },
                        get isRejected() {
                            return e.creditsLoadingState === M.G.REJECT && e.clipLoadingState === M.G.REJECT;
                        },
                    }))
                    .actions((e) => ({
                        setClipId(t) {
                            e.id = t;
                        },
                        getClip: (0, C.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            if (e.id && e.clipLoadingState !== M.G.PENDING)
                                try {
                                    e.clipLoadingState = M.G.PENDING;
                                    let [a] = yield t.getClip({ clipIds: [e.id] });
                                    if (!a) return;
                                    ((e.clip = rs(a)), (e.clipLoadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.clipLoadingState = M.G.REJECT));
                                }
                        }),
                        getCreditsInfo: (0, C.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            if (!e.id || e.creditsLoadingState === M.G.PENDING) return null;
                            try {
                                e.creditsLoadingState = M.G.PENDING;
                                let a = yield t.getCredits({ clipId: e.id });
                                ((e.credits = (0, C.wg)(null == a ? void 0 : a.credits)), (e.creditsLoadingState = M.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.creditsLoadingState = M.G.REJECT));
                            }
                            return null;
                        }),
                        reset() {
                            ((e.id = null), (e.clip = null), (e.clipLoadingState = M.G.IDLE), (e.creditsLoadingState = M.G.IDLE), (e.credits = null));
                        },
                    })),
                oq = C.gK.model('TranslationsModel', { data: C.gK.frozen() }),
                oz = C.gK
                    .model('ReleaseNotes', { modal: r8.q, translations: C.gK.maybeNull(oq), sortedDescReleaseNotesKeys: C.gK.maybeNull(C.gK.array(C.gK.string)) })
                    .views((e) => ({
                        get isReady() {
                            var t;
                            return !!(
                                (null == (t = e.translations) ? void 0 : t.data) &&
                                'object' == typeof e.translations.data &&
                                Object.keys(e.translations.data).length > 0
                            );
                        },
                    }))
                    .actions((e) => ({
                        setSortedDescReleaseNotesKeys: (t) => {
                            e.sortedDescReleaseNotesKeys = (0, C.wg)(t);
                        },
                        setTranslationsReleaseNotes: (t) => {
                            t && (e.translations = oq.create({ data: t }));
                        },
                    }));
            var oQ = a(70969);
            let oZ = (e) => 'object' == typeof e && null !== e && 'id' in e && 'owner' in e && 'members' in e && 'status' in e;
            var o0 = a(58848);
            let o1 = (e) => 'object' == typeof e && null !== e && 'errorName' in e,
                o3 = async (e) => {
                    if (!(e instanceof O.GX) || e.statusCode !== O.X1.BAD_REQUEST || !(0, o0.N)(e.cause) || !e.cause.response) return null;
                    try {
                        let t = await e.cause.response.json();
                        if (!(0, L.u4)(t)) return null;
                        let a = {};
                        'string' == typeof t.name && (a.errorName = t.name);
                        let i = t.details;
                        return ((0, L.u4)(i) && 'string' == typeof i.correctRoomId && (a.correctRoomId = i.correctRoomId), a);
                    } catch (e) {
                        return null;
                    }
                },
                o2 = C.gK
                    .compose(
                        C.gK.model('Multivibe', {
                            invitationRoom: C.gK.maybeNull(a6),
                            createdRoomId: C.gK.maybeNull(C.gK.string),
                            duplicateRoomId: C.gK.maybeNull(C.gK.string),
                            promoModal: r8.q,
                            inviteModal: r8.q,
                            disabledRoomInfoModal: r8.q,
                            disabledRoomId: C.gK.maybeNull(C.gK.string),
                            errorName: C.gK.maybeNull(C.gK.string),
                        }),
                        q.X,
                        D.p,
                    )
                    .views((e) => ({
                        get isEnabled() {
                            let { experiments: t } = (0, R.M)(e);
                            return t.checkExperiment(k.z.WebNextWaveForTwo, 'on') || t.checkExperiment(k.z.WebNextWaveForTwoTest, 'on');
                        },
                        get isNDAEnabled() {
                            let { experiments: t } = (0, R.M)(e);
                            return t.checkExperiment(k.z.WebNextWaveForTwoTest, 'on');
                        },
                        get isOnboardingEnabled() {
                            let { experiments: t } = (0, R.M)(e);
                            return t.checkExperiment(k.z.WebNextWaveForTwoOnboarding, 'on') && t.checkExperiment(k.z.WebNextSlidesPage, 'on');
                        },
                        get isGetRoomByIdLoading() {
                            return e.isNeededToLoad || e.loadingState === M.G.PENDING;
                        },
                        get isGetRoomByIdRejected() {
                            return e.loadingState === M.G.REJECT;
                        },
                    }))
                    .actions((e) => ({
                        getRoomById: (0, C.L3)(function* (t) {
                            let { roomId: a } = t;
                            if (e.loadingState === M.G.PENDING) return;
                            let { waveResource: i, modelActionsLogger: l } = (0, C._$)(e);
                            ((e.invitationRoom = null), (e.errorName = null));
                            try {
                                e.loadingState = M.G.PENDING;
                                let t = yield i.getRoomById({ roomId: a });
                                ((e.invitationRoom = (0, C.wg)(tr(t))), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                            } catch (t) {
                                (l.error(t),
                                    t instanceof O.GX && t.statusCode === O.X1.NOT_FOUND && (e.errorName = oQ.z.ROOM_NOT_FOUND),
                                    e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                            }
                        }),
                        createRoom: (0, C.L3)(function* () {
                            let { waveResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            e.errorName = null;
                            try {
                                let a = yield t.createRoom();
                                if (!oZ(a)) return a8.F.ERROR;
                                let i = tr(a);
                                return ((e.createdRoomId = null == i ? void 0 : i.id), a8.F.OK);
                            } catch (i) {
                                a.error(i);
                                let t = yield o3(i);
                                return (o1(t) && t.errorName === oQ.z.ROOM_LIMIT_EXCEEDED && (e.errorName = oQ.z.ROOM_LIMIT_EXCEEDED), a8.F.ERROR);
                            }
                        }),
                        enterRoom: (0, C.L3)(function* (t) {
                            let { waveResource: a, modelActionsLogger: i } = (0, C._$)(e);
                            ((e.errorName = null), (e.duplicateRoomId = null));
                            try {
                                let i = yield a.enterRoom(t);
                                if (!oZ(i)) return a8.F.ERROR;
                                return ((e.invitationRoom = (0, C.wg)(tr(i))), a8.F.OK);
                            } catch (a) {
                                i.error(a);
                                let t = yield o3(a);
                                return (
                                    o1(t) &&
                                        t.errorName === oQ.z.ROOM_DUPLICATION &&
                                        t.correctRoomId &&
                                        ((e.errorName = oQ.z.ROOM_DUPLICATION), (e.duplicateRoomId = t.correctRoomId)),
                                    a8.F.ERROR
                                );
                            }
                        }),
                        setDisabledRoomId(t) {
                            e.disabledRoomId = t;
                        },
                        resetDisabledRoomId() {
                            e.disabledRoomId = null;
                        },
                        resetDuplicateRoomId() {
                            e.duplicateRoomId = null;
                        },
                        resetErrorName() {
                            e.errorName = null;
                        },
                        reset() {
                            ((e.loadingState = M.G.IDLE),
                                (e.duplicateRoomId = null),
                                (e.disabledRoomId = null),
                                (e.errorName = null),
                                e.destroyItems([e.invitationRoom]));
                        },
                    })),
                o8 = C.gK
                    .model('ContextMenuAddTracksToPlaylist', { playlistsWithoutTracks: C.gK.array(tK.$), playlistsLoadingState: q.X, tracksLoadingState: q.X })
                    .views((e) => ({
                        get isPlaylistsLoading() {
                            return e.playlistsLoadingState.isNeededToLoad || e.playlistsLoadingState.isLoading;
                        },
                        get isTracksLoading() {
                            return e.tracksLoadingState.isLoading;
                        },
                        getFilteredPlaylists(t, a) {
                            let i = t.trim().toLowerCase();
                            return e.playlistsWithoutTracks.filter((e) => {
                                var t;
                                return e.uuid !== a && (!i || (null != (t = e.title) ? t : '').toLowerCase().includes(i));
                            });
                        },
                    }))
                    .actions((e) => ({
                        loadPlaylistsWithoutTracks: (0, C.L3)(function* () {
                            let { modelActionsLogger: t, usersResource: a } = (0, C._$)(e),
                                { user: i } = (0, R.M)(e),
                                l = i.account.data.uid;
                            if (l && !e.playlistsLoadingState.isLoading)
                                try {
                                    ((e.playlistsWithoutTracks = (0, C.wg)([])), (e.playlistsLoadingState.loadingState = M.G.PENDING));
                                    let t = yield a.getCreatedPlaylists({ userId: l, page: 0, pageSize: 1500 });
                                    ((e.playlistsWithoutTracks = (0, C.wg)(t.map(tt.j))), (e.playlistsLoadingState.loadingState = M.G.RESOLVE));
                                } catch (a) {
                                    ((e.playlistsLoadingState.loadingState = M.G.REJECT), t.error(a));
                                }
                        }),
                        fetchPlaylistTrackIds: (0, C.L3)(function* (t) {
                            let { user: a } = (0, R.M)(e),
                                i = a.account.data.uid;
                            if (!i || e.tracksLoadingState.isLoading) return null;
                            let { usersResource: l, modelActionsLogger: r } = (0, C._$)(e);
                            try {
                                e.tracksLoadingState.loadingState = M.G.PENDING;
                                let [a] = yield l.getPlaylistsByKinds({ userId: i, kinds: [t], withTracks: !0 });
                                if (((e.tracksLoadingState.loadingState = M.G.RESOLVE), !a)) return [];
                                return a.tracks.map((e) => {
                                    let { id: t } = e;
                                    return String(t);
                                });
                            } catch (t) {
                                return ((e.tracksLoadingState.loadingState = M.G.REJECT), r.error(t), null);
                            }
                        }),
                    }));
            var o5 = a(36432),
                o6 = a(55491);
            let o9 = { width: '614', height: '556' },
                o4 = { width: '100%', height: '240' },
                o7 = (e) => ({ width: e ? o4.width : o9.width, height: e ? o4.height : o9.height }),
                de = { width: '614', height: '244' },
                dt = { width: '100%', height: '240' };
            var da = a(90887),
                di = a(52830),
                dl = a(10378),
                dr = a(82928);
            let ds = (e) => e.replace(dl.ew, ''),
                dn = (e) => (dr.s.test(e) ? e : ''.concat(e).concat(dl.ew)),
                dd = (e) => {
                    let { width: t, height: a, iframeUri: i, listenMessage: l } = e,
                        r = ds(t),
                        s = ds(a),
                        n = dn(t),
                        o = dn(a);
                    return '<iframe frameborder="0" allow="clipboard-write" style="border:none;width:'
                        .concat(n, ';height:')
                        .concat(o, ';" width="')
                        .concat(r, '" height="')
                        .concat(s, '" src="')
                        .concat(i, '">')
                        .concat(l, '</iframe>');
                },
                dg = C.gK.model({ width: C.gK.string, height: C.gK.string }),
                du = dg
                    .props({
                        id: C.gK.number,
                        type: C.gK.literal(o6.Y.ALBUM),
                        title: C.gK.string,
                        path: C.gK.string,
                        artistName: C.gK.maybeNull(C.gK.string),
                        artistId: C.gK.maybeNull(C.gK.string),
                        listenMessage: C.gK.maybeNull(C.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                let { location: t } = (0, R.M)(e);
                                return ((e) => {
                                    let { tld: t, id: a } = e;
                                    return 'https://music.yandex.'.concat(t, '/iframe/album/').concat(a);
                                })({ tld: t.tld, id: e.id });
                            },
                            get entityUri() {
                                let { location: t } = (0, R.M)(e),
                                    { config: a } = (0, C._$)(e);
                                return ''.concat((0, da.r)(a.iframe.entityBaseUrl, t.tld, di.B)).concat(e.path);
                            },
                            get artistUri() {
                                if (null === e.artistId) return null;
                                let { location: t } = (0, R.M)(e),
                                    { config: a } = (0, C._$)(e);
                                return ''.concat((0, da.r)(a.iframe.entityBaseUrl, t.tld, di.B), '/artist/').concat(e.artistId);
                            },
                            get iframeCode() {
                                var a;
                                return dd({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (a = e.listenMessage) ? a : '' });
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setWidth(t) {
                            e.width = t;
                        },
                        setHeight(t) {
                            e.height = t;
                        },
                        setListenMessage(t) {
                            var a, i, l, r;
                            e.listenMessage = t(
                                ((a = e.entityUri),
                                (i = e.title),
                                (l = e.artistUri),
                                null === (r = e.artistName)
                                    ? '<a href="'.concat(a, '">').concat(i, '</a>')
                                    : null === l
                                      ? '<a href="'.concat(a, '">').concat(i, '</a> — ').concat(r)
                                      : '<a href="'.concat(a, '">').concat(i, '</a> — <a href="').concat(l, '">').concat(r, '</a>')),
                            );
                        },
                    })),
                dc = dg
                    .props({
                        id: C.gK.string,
                        type: C.gK.literal(o6.Y.PLAYLIST),
                        title: C.gK.maybeNull(C.gK.string),
                        path: C.gK.string,
                        ownerLogin: C.gK.maybeNull(C.gK.string),
                        ownerName: C.gK.maybeNull(C.gK.string),
                        listenMessage: C.gK.maybeNull(C.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                var a;
                                let { location: t } = (0, R.M)(e);
                                return ((e) => {
                                    let { tld: t, ownerLogin: a, id: i } = e;
                                    return 'https://music.yandex.'.concat(t, '/iframe/playlist/').concat(a, '/').concat(i);
                                })({ tld: t.tld, ownerLogin: null != (a = e.ownerLogin) ? a : '', id: e.id });
                            },
                            get entityUri() {
                                let { location: t } = (0, R.M)(e),
                                    { config: a } = (0, C._$)(e);
                                return ''.concat((0, da.r)(a.iframe.entityBaseUrl, t.tld, di.B)).concat(e.path);
                            },
                            get iframeCode() {
                                var i;
                                return dd({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (i = e.listenMessage) ? i : '' });
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setWidth(t) {
                            e.width = t;
                        },
                        setHeight(t) {
                            e.height = t;
                        },
                        setListenMessage(t) {
                            let a, i, l, r, s, n;
                            if (null === e.title || null === e.ownerName || null === e.ownerLogin) {
                                e.listenMessage = t('');
                                return;
                            }
                            let { location: o } = (0, R.M)(e);
                            e.listenMessage = t(
                                ((l = e.entityUri),
                                (r = e.title),
                                (s = e.ownerName),
                                (a = o.tld),
                                (i = e.ownerLogin),
                                (n = 'https://music.yandex.'.concat(a, '/users/').concat(i)),
                                '<a href="'.concat(l, '">').concat(r, '</a> — <a href="').concat(n, '">').concat(s, '</a>')),
                            );
                        },
                    })),
                dm = dg
                    .props({
                        id: C.gK.string,
                        albumId: C.gK.maybeNull(C.gK.number),
                        type: C.gK.literal(o6.Y.TRACK),
                        title: C.gK.string,
                        path: C.gK.string,
                        artistName: C.gK.maybeNull(C.gK.string),
                        artistId: C.gK.maybeNull(C.gK.string),
                        listenMessage: C.gK.maybeNull(C.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                var a;
                                let { location: t } = (0, R.M)(e);
                                return ((e) => {
                                    let { tld: t, id: a, albumId: i } = e;
                                    return void 0 !== i
                                        ? 'https://music.yandex.'.concat(t, '/iframe/album/').concat(i, '/track/').concat(a)
                                        : 'https://music.yandex.'.concat(t, '/iframe/track/').concat(a);
                                })({ tld: t.tld, id: e.id, albumId: null != (a = e.albumId) ? a : void 0 });
                            },
                            get entityUri() {
                                let { location: t } = (0, R.M)(e),
                                    { config: a } = (0, C._$)(e);
                                return ''.concat((0, da.r)(a.iframe.entityBaseUrl, t.tld, di.B)).concat(e.path);
                            },
                            get artistUri() {
                                if (null === e.artistId) return null;
                                let { location: t } = (0, R.M)(e),
                                    { config: a } = (0, C._$)(e);
                                return ''.concat((0, da.r)(a.iframe.entityBaseUrl, t.tld, di.B), '/artist/').concat(e.artistId);
                            },
                            get iframeCode() {
                                var i;
                                return dd({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (i = e.listenMessage) ? i : '' });
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setWidth(t) {
                            e.width = t;
                        },
                        setHeight(t) {
                            e.height = t;
                        },
                        setListenMessage(t) {
                            var a, i, l, r;
                            e.listenMessage = t(
                                ((a = e.entityUri),
                                (i = e.title),
                                (l = e.artistUri),
                                null === (r = e.artistName)
                                    ? '<a href="'.concat(a, '">').concat(i, '</a>')
                                    : null === l
                                      ? '<a href="'.concat(a, '">').concat(i, '</a> — ').concat(r)
                                      : '<a href="'.concat(a, '">').concat(i, '</a> — <a href="').concat(l, '">').concat(r, '</a>')),
                            );
                        },
                    })),
                dp = C.gK.union(dm, du, dc),
                dy = C.gK.model({ entity: C.gK.maybeNull(dp), modal: r8.q }).actions((e) => ({
                    openModal(t) {
                        let { settings: a } = (0, R.M)(e);
                        ((e.entity = ((e, t) => {
                            if (e.variant === o6.Y.TRACK)
                                return ((e) => {
                                    let t,
                                        { variant: a, id: i, title: l, path: r, trackArtistName: s, trackArtistId: n, trackAlbumId: o, isMobile: d } = e;
                                    return (0, C.wg)({
                                        id: i,
                                        type: a,
                                        albumId: o,
                                        title: l,
                                        path: r,
                                        artistName: null != s ? s : null,
                                        artistId: null != n ? n : null,
                                        ...{ width: (t = d) ? dt.width : de.width, height: t ? dt.height : de.height },
                                    });
                                })({ ...e, isMobile: t });
                            if (e.variant === o6.Y.ALBUM) {
                                let a = e.id;
                                if (void 0 === a) throw new o5.t('Missing album ID');
                                return ((e) => {
                                    let { variant: t, id: a, title: i, path: l, albumArtistName: r, albumArtistId: s, isMobile: n } = e;
                                    return (0, C.wg)({ id: a, type: t, title: i, path: l, artistName: null != r ? r : null, artistId: null != s ? s : null, ...o7(n) });
                                })({ ...e, id: a, isMobile: t });
                            }
                            if (e.variant === o6.Y.PLAYLIST)
                                return ((e) => {
                                    let { variant: t, id: a, title: i, path: l, playlistOwnerName: r, playlistOwnerLogin: s, isMobile: n } = e;
                                    return (0, C.wg)({
                                        id: String(a),
                                        type: t,
                                        title: null != i ? i : null,
                                        path: null != l ? l : null,
                                        ownerName: r,
                                        ownerLogin: s,
                                        ...o7(n),
                                    });
                                })({ ...e, isMobile: t });
                            throw new o5.t('Unknown variant');
                        })({ ...t, title: (0, L.ky)(t.title || '', { whiteList: {} }) }, a.isMobile)),
                            e.modal.open());
                    },
                    closeModal() {
                        (e.modal.close(), (e.entity = null));
                    },
                })),
                dE = C.gK.model('Network', { isOffline: C.gK.optional(C.gK.boolean, !1) }),
                dS = C.gK.model('Entity', { progress: C.gK.maybe(C.gK.number), loadingState: C.gK.enumeration(Object.values(G.DT)) }),
                db = C.gK
                    .model('Slam', { networkStatus: dE, offlineMode: C.gK.maybe(C.gK.boolean), tracks: C.gK.map(dS) })
                    .views((e) => {
                        let t = {
                            isTrackDownloaded: (t) => {
                                var a;
                                return (null == (a = e.tracks.get(t)) ? void 0 : a.loadingState) === G.DT.DOWNLOADED;
                            },
                            isTrackDownloading: (t) => {
                                var a;
                                return (null == (a = e.tracks.get(t)) ? void 0 : a.loadingState) === G.DT.DOWNLOADING;
                            },
                            getTrackDownloadingProgress: (t) => {
                                var a, i;
                                return null != (i = null == (a = e.tracks.get(t)) ? void 0 : a.progress) ? i : 0;
                            },
                            isPlaylistDownloaded: (e) =>
                                e.every((e) => {
                                    let [a] = (0, ir.d)(e);
                                    return !!a && t.isTrackDownloaded(a);
                                }),
                            isPlaylistDownloading: (e) =>
                                e.some((e) => {
                                    let [a] = (0, ir.d)(e);
                                    return !!a && t.isTrackDownloading(a);
                                }),
                            getPlaylistDownloadingProgress: (e) =>
                                Math.floor(
                                    (e.reduce((e, a) => {
                                        let [i] = (0, ir.d)(a);
                                        return i && t.isTrackDownloaded(i) ? e + 1 : e;
                                    }, 0) /
                                        e.length) *
                                        100,
                                ),
                            get isOfflineModeEnabled() {
                                if (!(0, C._n)(e)) return !1;
                                return e.offlineMode;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setNetworkStatus: (t) => {
                            e.networkStatus = t;
                        },
                        setTrack: (t, a) => {
                            e.tracks.set(t, a);
                        },
                        setTracks: (t) => {
                            e.tracks = (0, C.wg)(t);
                        },
                        setOfflineMode: (t) => {
                            let { localStorage: a } = (0, C._$)(e);
                            ((e.offlineMode = t), a.set(r0.c.OfflineMode, t));
                        },
                    }));
            var dv = a(77270),
                dK = a(78984),
                dI = a(39498);
            let dL = [ot.MT.PLAYING, ot.MT.LOADING_MEDIA_SOURCE, ot.MT.BUFFERING],
                dT = C.gK.model('UnloadedEntityMeta', { id: C.gK.union(C.gK.number, C.gK.string), albumId: C.gK.maybe(C.gK.union(C.gK.number, C.gK.string)) }),
                dh = C.gK.model('UnloadedEntityData', { meta: dT, type: C.gK.literal(ot.z4.Unloaded) }),
                dN = C.gK
                    .model('BaseSonataState', {
                        contextType: C.gK.maybeNull(C.gK.enumeration(Object.values(nf.K))),
                        contextId: C.gK.maybeNull(C.gK.string),
                        entityMeta: C.gK.maybeNull(or),
                        status: C.gK.enumeration(Object.values(ot.MT)),
                        canMoveForward: C.gK.boolean,
                        canMoveBackward: C.gK.boolean,
                        canSpeed: C.gK.boolean,
                        repeatMode: C.gK.enumeration(Object.values(dI.pM)),
                        canChangeRepeatMode: C.gK.boolean,
                        volume: C.gK.maybe(C.gK.number),
                        speed: C.gK.maybe(C.gK.number),
                        position: C.gK.maybeNull(C.gK.number),
                        duration: C.gK.maybeNull(C.gK.number),
                        canShuffle: C.gK.boolean,
                        shuffle: C.gK.boolean,
                        quality: C.gK.enumeration(Object.values(dK.e)),
                        unloadedEntitiesData: C.gK.maybe(C.gK.array(dh)),
                    })
                    .volatile(() => ({ volatileUnloadedEntitiesData: void 0 }))
                    .views((e) => ({
                        get unloadedEntitiesDataFromModels() {
                            var t;
                            return null != (t = e.volatileUnloadedEntitiesData) ? t : (0, sg.HO)(e.unloadedEntitiesData);
                        },
                        get isVibeContext() {
                            return e.contextType === nf.K.Vibe;
                        },
                        get isGenerativeContext() {
                            return e.contextType === nf.K.Generative;
                        },
                        get isPaused() {
                            return e.status === ot.MT.PAUSED;
                        },
                        get isPlaying() {
                            return dL.includes(e.status);
                        },
                        get isContextRepeatMode() {
                            return e.repeatMode === dI.pM.CONTEXT;
                        },
                        get isOneRepeatMode() {
                            return e.repeatMode === dI.pM.ONE;
                        },
                    }))
                    .actions((e) => ({
                        setContextId: (t) => {
                            e.contextId = String(t);
                        },
                        setContextType: (t) => {
                            e.contextType = t;
                        },
                        setEntityMeta: (t) => {
                            t && t.data.meta && (e.entityMeta && (0, C.Yo)(e.entityMeta), (e.entityMeta = ol(t)));
                        },
                        setUnloadedEntitiesData: (t) => {
                            t && ((e.volatileUnloadedEntitiesData = (0, dv.A)(t)), (e.unloadedEntitiesData = (0, C.wg)(t)));
                        },
                        resetUnloadedEntitiesData: () => {
                            ((e.volatileUnloadedEntitiesData = void 0), (e.unloadedEntitiesData = void 0));
                        },
                        setStatus: (t) => {
                            e.status = t;
                        },
                        setCanMoveForward: (t) => {
                            e.canMoveForward = t;
                        },
                        setCanMoveBackward: (t) => {
                            e.canMoveBackward = t;
                        },
                        setVolume: (t) => {
                            e.volume = t;
                        },
                        setCanSpeed: (t) => {
                            e.canSpeed = t;
                        },
                        setSpeed: (t) => {
                            e.speed = t;
                        },
                        setRepeatMode: (t) => {
                            e.repeatMode = t;
                        },
                        setCanChangeRepeatMode: (t) => {
                            e.canChangeRepeatMode = t;
                        },
                        setCanShuffle: (t) => {
                            e.canShuffle = t;
                        },
                        setShuffle: (t) => {
                            e.shuffle = t;
                        },
                        setQuality: (t) => {
                            e.quality = t;
                        },
                        setPosition: (t) => {
                            e.position = t;
                        },
                        setDuration: (t) => {
                            e.duration = t;
                        },
                    }))
                    .props({
                        playlistFilter: C.gK.maybe(C.gK.string),
                        areCoresRegistered: C.gK.boolean,
                        isVHCoreRegistered: C.gK.boolean,
                        shouldApplyYnisonState: C.gK.optional(C.gK.boolean, !0),
                        isCrossFadeEnabled: C.gK.boolean,
                    })
                    .actions((e) => ({
                        setIsVHCoreRegistered(t) {
                            e.isVHCoreRegistered = t;
                        },
                        setPlaylistFilter: (t) => {
                            e.playlistFilter = t;
                        },
                        setCoresAsRegistered: (t) => {
                            e.areCoresRegistered = t;
                        },
                        setShouldApplyYnisonState: (t) => {
                            e.shouldApplyYnisonState = t;
                        },
                        setCrossFadeMode: (t) => {
                            let { containerStorage: a } = (0, C._$)(e);
                            (a.set(r0.c.CrossFadeMode, t, { expires: 365 }), (e.isCrossFadeEnabled = t));
                        },
                    }))
                    .named('SonataState'),
                dA = C.gK.model('Credit', { title: C.gK.string, value: C.gK.string }),
                dC = C.gK
                    .model('CurrentTrackInfo', {
                        id: C.gK.maybeNull(C.gK.union(C.gK.string, C.gK.number)),
                        albumId: C.gK.maybeNull(C.gK.number),
                        isUGC: C.gK.maybeNull(C.gK.boolean),
                        trackLoadingState: C.gK.enumeration(Object.values(M.G)),
                        fullTrack: C.gK.maybeNull(H.v),
                        creditsLoadingState: C.gK.enumeration(Object.values(M.G)),
                        credits: C.gK.maybeNull(C.gK.array(dA)),
                        modal: r8.q,
                        fullDescription: C.gK.maybeNull(C.gK.string),
                        descriptionLoadingState: C.gK.enumeration(Object.values(M.G)),
                    })
                    .views((e) => ({
                        get isTrackIdle() {
                            return e.trackLoadingState === M.G.IDLE;
                        },
                        get isCreditsIdle() {
                            return e.creditsLoadingState === M.G.IDLE;
                        },
                        get isTrackLoading() {
                            return e.trackLoadingState === M.G.PENDING || e.trackLoadingState === M.G.IDLE;
                        },
                        get isTrackRejected() {
                            return e.trackLoadingState === M.G.REJECT;
                        },
                        get isCreditsLoading() {
                            return e.creditsLoadingState === M.G.PENDING || e.creditsLoadingState === M.G.IDLE;
                        },
                        get isCreditsRejected() {
                            return e.creditsLoadingState === M.G.REJECT;
                        },
                        get isRejected() {
                            return e.creditsLoadingState === M.G.REJECT && e.trackLoadingState === M.G.REJECT;
                        },
                    }))
                    .actions((e) => ({
                        setTrack(t) {
                            let { id: a, albumId: i, isUGC: l } = t;
                            ((e.id = a), (e.albumId = i), (e.isUGC = l));
                        },
                        getFullTrack: (0, C.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            if (!e.id || e.trackLoadingState === M.G.PENDING) return null;
                            try {
                                e.trackLoadingState = M.G.PENDING;
                                let a = yield t.getFullInfoTrack({ trackId: e.id, albumId: e.albumId });
                                if (!a) return null;
                                ((e.fullTrack = (0, C.wg)((0, eH.v)(a.track))), (e.trackLoadingState = M.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.trackLoadingState = M.G.REJECT));
                            }
                            return null;
                        }),
                        getFullDescription: (0, C.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            if (!e.id || e.descriptionLoadingState === M.G.PENDING) return null;
                            try {
                                e.descriptionLoadingState = M.G.PENDING;
                                let a = yield t.getFullDescriptionTrack({ trackId: e.id });
                                if (!a) return null;
                                ((e.fullDescription = a.description), (e.descriptionLoadingState = M.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.descriptionLoadingState = M.G.REJECT));
                            }
                            return null;
                        }),
                        getTrackMeta: (0, C.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            if (!e.id || e.trackLoadingState === M.G.PENDING) return null;
                            try {
                                e.trackLoadingState = M.G.PENDING;
                                let a = yield t.getTracksMeta({ trackIds: [e.id], removeDuplicates: !0 });
                                if (!a || !a.length) return null;
                                a[0] && ((e.fullTrack = (0, C.wg)((0, eH.v)(a[0]))), (e.trackLoadingState = M.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.trackLoadingState = M.G.REJECT));
                            }
                            return null;
                        }),
                        getCreditsInfo: (0, C.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            if (!e.id || e.creditsLoadingState === M.G.PENDING) return null;
                            try {
                                e.creditsLoadingState = M.G.PENDING;
                                let a = yield t.getCredits({ trackId: e.id });
                                ((e.credits = (0, C.wg)(null == a ? void 0 : a.credits)), (e.creditsLoadingState = M.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.creditsLoadingState = M.G.REJECT));
                            }
                            return null;
                        }),
                        reset() {
                            ((e.id = null),
                                (e.albumId = null),
                                (e.isUGC = null),
                                (e.trackLoadingState = M.G.IDLE),
                                (e.descriptionLoadingState = M.G.IDLE),
                                (e.creditsLoadingState = M.G.IDLE),
                                (e.fullTrack = null),
                                (e.credits = null));
                        },
                    })),
                df = C.gK.model('TrackComplaint', { trackId: C.gK.maybeNull(C.gK.string), modal: r8.q }).actions((e) => ({
                    setTrackId(t) {
                        e.trackId = t;
                    },
                    reset() {
                        e.trackId = null;
                    },
                })),
                dR = C.gK
                    .compose(
                        C.gK.model('TrackLyrics', {
                            lyrics: C.gK.maybeNull(C.gK.string),
                            major: C.gK.maybeNull(oc),
                            lyricId: C.gK.maybeNull(C.gK.number),
                            writers: C.gK.array(C.gK.string),
                            externalLyricId: C.gK.maybeNull(C.gK.string),
                            modal: r8.q,
                            track: C.gK.maybeNull(H.v),
                            trackId: C.gK.maybeNull(C.gK.union(C.gK.string, C.gK.number)),
                            currentTrackId: C.gK.maybeNull(C.gK.union(C.gK.string, C.gK.number)),
                            hasError: C.gK.optional(C.gK.boolean, !1),
                        }),
                        q.X,
                    )
                    .views((e) => ({
                        get writersNames() {
                            return e.writers.join(', ');
                        },
                        get hasWriters() {
                            return 0 !== e.writers.length;
                        },
                        get isShimmerVisible() {
                            return e.isLoading || e.isRejected;
                        },
                        get shouldShowErrorNotification() {
                            return e.isRejected && e.hasError;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            setTrack(t) {
                                e.track = (0, C.wg)({ ...(0, sg.HO)(t) });
                            },
                            resetShouldShowError() {
                                e.hasError = !1;
                            },
                            getLyrics: (0, C.L3)(function* (a) {
                                let { config: i, tracksResource: l, modelActionsLogger: r } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING && e.currentTrackId !== a)
                                    try {
                                        ((e.loadingState = M.G.PENDING), (e.currentTrackId = a));
                                        let { downloadUrl: r, major: s, externalLyricId: n, lyricId: o, writers: d } = yield l.getLyrics(og(i, a, u.TEXT));
                                        ((e.major = ou(s)),
                                            (e.externalLyricId = n),
                                            (e.lyricId = o),
                                            (e.writers = (0, C.wg)(d || [])),
                                            yield t.downloadLyrics(r),
                                            (e.loadingState = M.G.RESOLVE));
                                    } catch (t) {
                                        ((e.loadingState = M.G.REJECT), (e.currentTrackId = null), (e.hasError = !0), e.modal.isOpened && e.modal.close(), r.error(t));
                                    }
                            }),
                            downloadLyrics: (0, C.L3)(function* (t) {
                                let { prefixlessResource: a } = (0, C._$)(e);
                                e.lyrics = yield a.getLyricsText(t);
                            }),
                            sendViews: (0, C.L3)(function* (t) {
                                let { trackId: a, albumId: i } = t,
                                    { lyricViewsResource: l, modelActionsLogger: r } = (0, C._$)(e);
                                if (e.loadingState === M.G.RESOLVE)
                                    try {
                                        if (!e.major || !e.lyricId || !e.externalLyricId || !e.currentTrackId) return;
                                        yield l.sendViews({
                                            lyricViews: [
                                                {
                                                    id: (0, on.A)(),
                                                    trackId: a,
                                                    majorId: e.major.id,
                                                    lyricId: e.lyricId,
                                                    externalLyricId: e.externalLyricId,
                                                    lyricFormat: u.TEXT,
                                                    albumId: void 0 !== i ? String(i) : void 0,
                                                },
                                            ],
                                        });
                                    } catch (e) {
                                        r.error(e);
                                    }
                            }),
                        };
                        return t;
                    });
            var dk = a(46534),
                dD = a(67541);
            !(function (e) {
                ((e.PROCESSING = 'processing'), (e.PLAYABLE = 'playable'));
            })(p || (p = {}));
            var d_ = (function (e) {
                    return ((e.TOO_MANY_FILES = 'TOO_MANY_FILES'), (e.UNKNOWN_ERROR = 'UNKNOWN_ERROR'), e);
                })({}),
                dP = a(71630);
            (y || (y = {})).TOO_MANY_FILES = 'TOO_MANY_FILES';
            let dO = C.gK
                .model('TrackUgcUploadModel', {
                    loadingState: C.gK.enumeration(Object.values(dP.p)),
                    errorReason: C.gK.maybeNull(C.gK.enumeration(Object.values(d_))),
                    playlistKind: C.gK.number,
                    trackId: C.gK.maybeNull(C.gK.string),
                    uploadUrl: C.gK.maybeNull(C.gK.string),
                })
                .volatile(() => ({ file: null, abortController: null }))
                .actions((e) => {
                    let t = {
                        setFile(t) {
                            e.file = t;
                        },
                        getUploadUrl: (0, C.L3)(function* () {
                            if (!(0, C._n)(e)) return;
                            let { loaderResource: t, modelActionsLogger: a } = (0, C._$)(e),
                                { user: i } = (0, R.M)(e);
                            if (![dP.p.IDLE, dP.p.REJECT].includes(e.loadingState)) return;
                            e.loadingState = dP.p.PREPARE;
                            let l = i.account.data.uid;
                            if (l)
                                try {
                                    var r;
                                    let a = null == (r = e.file) ? void 0 : r.name,
                                        i = yield t.getUploadUrl({ playlistId: ''.concat(l, ':').concat(e.playlistKind), uid: l, path: a });
                                    if (i && 'result' in i && i.result === y.TOO_MANY_FILES) {
                                        ((e.loadingState = dP.p.REJECT), (e.errorReason = d_.TOO_MANY_FILES));
                                        return;
                                    }
                                    if (i && 'post-target' in i && 'ugc-track-id' in i) {
                                        ((e.uploadUrl = i['post-target']), (e.trackId = i['ugc-track-id']));
                                        return;
                                    }
                                    ((e.errorReason = d_.UNKNOWN_ERROR), (e.loadingState = dP.p.REJECT));
                                    return;
                                } catch (t) {
                                    ((e.loadingState = dP.p.REJECT), a.error(t));
                                    return;
                                }
                        }),
                        uploadFile: (0, C.L3)(function* () {
                            if (!(0, C._n)(e)) return;
                            let { prefixlessResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            if (e.loadingState === dP.p.PREPARE && e.uploadUrl && e.file) {
                                e.loadingState = dP.p.UPLOADING;
                                try {
                                    let a = new FormData();
                                    a.append('file', e.file);
                                    let i = new AbortController(),
                                        l = i.signal;
                                    ((e.abortController = i), yield t.uploadFile({ url: e.uploadUrl, formData: a }, { signal: l }), (e.loadingState = dP.p.PROCESSING));
                                    return;
                                } catch (t) {
                                    ((e.loadingState = dP.p.REJECT), a.error(t));
                                    return;
                                }
                            }
                        }),
                        runUpload: (0, C.L3)(function* () {
                            (0, C._n)(e) && (yield t.getUploadUrl(), e.loadingState !== dP.p.REJECT && (yield t.uploadFile()));
                        }),
                        retryUpload() {
                            if ((this.reset(), !(0, C._n)(e))) return;
                            let { ugcUploadCenter: t } = (0, R.M)(e);
                            t.runUploadTracksQueue();
                        },
                        abortUpload() {
                            var t;
                            if (((e.loadingState = dP.p.CANCELLED), null == (t = e.abortController) || t.abort(), !(0, C._n)(e))) return;
                            let { ugcUploadCenter: a } = (0, R.M)(e);
                            a.clearCancelledUploads();
                        },
                        reset() {
                            ((e.loadingState = dP.p.IDLE), (e.trackId = null), (e.uploadUrl = null), (e.abortController = null));
                        },
                    };
                    return t;
                });
            var dw = a(87495);
            let dG = C.gK.model('UgcUploadCenterNotificationsPairModel', { playlist: tK.$, type: C.gK.enumeration(Object.values(dw.u)) }),
                dM = C.gK
                    .model('UgcUploadCenterNotificationsModel', { pairs: C.gK.array(dG) })
                    .views((e) => ({ isNotificationExists: (t, a) => e.pairs.some((e) => e.playlist.kind === t && e.type === a) }))
                    .actions((e) => {
                        let t = {
                            addNotification(t, a) {
                                e.pairs.push({ playlist: (0, sg.HO)(t), type: a });
                            },
                            addNonexistentNotification(a, i) {
                                e.isNotificationExists(a.kind, i) || t.addNotification(a, i);
                            },
                            showAllNotifications() {
                                let t = (0, sg.HO)(e.pairs);
                                return ((e.pairs = (0, C.wg)([])), t);
                            },
                        };
                        return t;
                    }),
                dU = C.gK.model('UgcUploadCenterTrackPlaylistPair', { playlist: tK.$, file: dO }),
                dB = C.gK
                    .model('UgcUploadCenterModel', { tracks: C.gK.array(dU), notifications: dM, checkProcessingTracksAttempts: C.gK.number })
                    .views((e) => ({
                        getUploadingTracksByPlaylistKind: (t) => (t ? e.tracks.filter((e) => e.playlist.kind === t).map((e) => e.file) : []),
                        getTracksByLoadingState: (t) => e.tracks.filter((e) => e.file.loadingState === t).map((e) => e.file),
                        get idleTracks() {
                            return this.getTracksByLoadingState(dP.p.IDLE);
                        },
                        get preparingTracks() {
                            return this.getTracksByLoadingState(dP.p.PREPARE);
                        },
                        get uploadingTracks() {
                            return this.getTracksByLoadingState(dP.p.UPLOADING);
                        },
                        get processingTracks() {
                            return this.getTracksByLoadingState(dP.p.PROCESSING);
                        },
                        get hasTracksInUploadingState() {
                            return this.preparingTracks.length + this.uploadingTracks.length > 0;
                        },
                        get shouldCheckProcessingTracks() {
                            return e.checkProcessingTracksAttempts < 25 && this.processingTracks.length > 0;
                        },
                        getPlaylistByKind(t) {
                            var a;
                            return null == (a = e.tracks.find((e) => e.playlist.kind === t)) ? void 0 : a.playlist;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            appendFiles(t, a) {
                                if (
                                    (t.forEach((t) => {
                                        if (t.size > 0x19000000) return void e.notifications.addNonexistentNotification(a, dw.u.FILE_TOO_LARGE);
                                        let i = dO.create({ loadingState: dP.p.IDLE, playlistKind: a.kind });
                                        i.setFile(t);
                                        let l = dU.create({ file: i, playlist: (0, sg.HO)(a) });
                                        e.tracks.unshift(l);
                                    }),
                                    !(0, C._n)(e))
                                )
                                    return;
                                let { playlist: i } = (0, R.M)(e);
                                (i.search.setText(''), i.search.reset(), this.runUploadTracksQueue());
                            },
                            async runUploadTracksQueue() {
                                let a = e.idleTracks;
                                if (a.length && !e.hasTracksInUploadingState) {
                                    let i = a[a.length - 1];
                                    (i &&
                                        (await i.runUpload(),
                                        i.loadingState === dP.p.REJECT &&
                                            i.errorReason === d_.TOO_MANY_FILES &&
                                            ((e.tracks = (0, C.wg)([])), t.addNotificationForPlaylistKind(i.playlistKind, dw.u.TOO_MANY_FILES)),
                                        t.checkNotifications()),
                                        t.setCheckProcessingTracksAttempts(0),
                                        t.runUploadTracksQueue());
                                }
                            },
                            checkProcessingTracks: (0, C.L3)(function* () {
                                let { tracksResource: a, modelActionsLogger: i } = (0, C._$)(e),
                                    l = [];
                                if (e.checkProcessingTracksAttempts >= 25) return null;
                                t.setCheckProcessingTracksAttempts(e.checkProcessingTracksAttempts + 1);
                                try {
                                    let t = e.processingTracks.map((e) => e.trackId).filter((e) => !!e);
                                    if (!t.length) return null;
                                    let i = yield a.getTracksMeta({ trackIds: t, withProgress: !0 });
                                    null == i ||
                                        i.forEach((t) => {
                                            let a = e.tracks.find((e) => e.file.trackId === t.id && t.state === p.PLAYABLE);
                                            a && ((a.file.loadingState = dP.p.RESOLVE), a.file.trackId && l.push(a.file.trackId));
                                        });
                                } catch (e) {
                                    i.error(e);
                                }
                                return (t.checkNotifications(l), t.moveTracksFromUploadCenterToPlaylist(), null);
                            }),
                            moveTracksFromUploadCenterToPlaylist() {
                                var t;
                                if (!(0, C._n)(e)) return;
                                let { playlist: a } = (0, R.M)(e);
                                ((null == (t = a.meta) ? void 0 : t.kind) &&
                                    e.tracks.find((e) => {
                                        var t;
                                        return e.file.loadingState === dP.p.RESOLVE && e.playlist.kind === (null == (t = a.meta) ? void 0 : t.kind);
                                    }) &&
                                    a.refreshTracks(),
                                    (e.tracks = (0, C.wg)(e.tracks.filter((e) => e.file.loadingState !== dP.p.RESOLVE))));
                            },
                            setCheckProcessingTracksAttempts(t) {
                                e.checkProcessingTracksAttempts = t;
                            },
                            clearCancelledUploads() {
                                e.tracks = (0, C.wg)(e.tracks.filter((e) => e.file.loadingState !== dP.p.CANCELLED));
                            },
                            checkNotifications(a) {
                                let i = new Set();
                                (e.tracks.forEach((e) => i.add(e.playlist.kind)),
                                    i.forEach((i) => {
                                        let l = e.getUploadingTracksByPlaylistKind(i);
                                        if (!(!l.length || l.some((e) => e.loadingState !== dP.p.RESOLVE && e.loadingState !== dP.p.REJECT)))
                                            if (l.some((e) => e.loadingState === dP.p.REJECT)) {
                                                let r = !0;
                                                if (a && a.length) {
                                                    let t = l.map((e) => e.trackId).filter((e) => e),
                                                        i = (0, dk.A)(t, a, dD.A);
                                                    i.length &&
                                                        (r = i
                                                            .map((t) => e.tracks.find((e) => e.file.trackId === t))
                                                            .some((e) => (null == e ? void 0 : e.file.loadingState) === dP.p.REJECT));
                                                }
                                                r && t.addNotificationForPlaylistKind(i, dw.u.UNKNOWN_ERROR);
                                            } else t.addNotificationForPlaylistKind(i, dw.u.SUCCESS);
                                    }));
                            },
                            addNotificationForPlaylistKind(t, a) {
                                let i = e.getPlaylistByKind(t);
                                i && e.notifications.addNonexistentNotification(i, a);
                            },
                        };
                        return t;
                    }),
                dF = (e) => {
                    let { type: t, tag: a } = e.id;
                    return { title: e.name, seed: ''.concat(t, ':').concat(a), specialContext: e.specialContext, specialContextImage: e.specialContextImage };
                },
                dV = (e, t) => {
                    let a = [];
                    return (
                        t.possibleValues.forEach((e) => {
                            e.unspecified || a.push(((e) => ({ value: e.value, title: e.name, seed: e.serializedSeed, imageUrl: e.imageUrl }))(e));
                        }),
                        { type: e, title: t.name, values: (0, C.wg)(a) }
                    );
                };
            var dx = a(73939);
            let dj = C.gK.model('ContextItem', {
                    title: C.gK.string,
                    seed: C.gK.string,
                    specialContext: C.gK.boolean,
                    specialContextImage: C.gK.optional(C.gK.string, ''),
                }),
                dW = C.gK.model('RestrictonValue', { value: C.gK.string, title: C.gK.string, seed: C.gK.string, imageUrl: C.gK.maybe(C.gK.string) }),
                dX = C.gK.model('Restricton', { type: C.gK.enumeration(Object.values(dx.s)), title: C.gK.string, values: C.gK.array(dW) }),
                d$ = C.gK
                    .compose(
                        C.gK.model('VibeSettings', {
                            contextItems: C.gK.array(dj),
                            diversity: C.gK.maybeNull(dX),
                            moodEnergy: C.gK.maybeNull(dX),
                            language: C.gK.maybeNull(dX),
                            modal: r8.q,
                        }),
                        q.X,
                    )
                    .actions((e) => ({
                        getData: (0, C.L3)(function* (t) {
                            let { rotorResource: a, modelActionsLogger: i } = (0, C._$)(e);
                            if (e.loadingState !== M.G.PENDING)
                                try {
                                    var l, r, s, n;
                                    e.loadingState = M.G.PENDING;
                                    let i = yield a.waveSettings(t);
                                    ((null == i || null == (l = i.settingRestrictions) ? void 0 : l.diversity) &&
                                        (e.diversity = dV(dx.s.DIVERSITY, i.settingRestrictions.diversity)),
                                        (null == i || null == (r = i.settingRestrictions) ? void 0 : r.moodEnergy) &&
                                            (e.moodEnergy = dV(dx.s.MOOD_ENERGY, i.settingRestrictions.moodEnergy)),
                                        (null == i || null == (s = i.settingRestrictions) ? void 0 : s.language) &&
                                            (e.language = dV(dx.s.LANGUAGE, i.settingRestrictions.language)));
                                    let o =
                                        Array.isArray(null == i ? void 0 : i.blocks) &&
                                        (null == i || null == (n = i.blocks) ? void 0 : n.find((e) => (null == e ? void 0 : e.type) === 'contexts'));
                                    (o && Array.isArray(o.items) && (e.contextItems = (0, C.wg)(o.items.map(dF))),
                                        e.loadingState !== M.G.IDLE && (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), e.loadingState !== M.G.IDLE && (e.loadingState = M.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = M.G.IDLE),
                                (e.contextItems = (0, C.wg)([])),
                                (e.diversity = null),
                                (e.moodEnergy = null),
                                (e.language = null),
                                e.modal.close());
                        },
                    }));
            !(function (e) {
                ((e.DONATION = 'DONATION'), (e.CONCERT = 'CONCERT'), (e.FACT = 'FACT'));
            })(E || (E = {}));
            let dJ = (e) => {
                var t;
                return { title: e.title, url: e.url, faviconUrl: null != (t = e.faviconUrl) ? t : null };
            };
            var dY = a(55538);
            let dH = C.gK
                    .model('WordsBigCardPanel', {
                        isOpened: C.gK.optional(C.gK.boolean, !1),
                        trackId: C.gK.maybe(C.gK.string),
                        submittedFeedback: C.gK.maybeNull(C.gK.enumeration(Object.values(dY.a))),
                        isFeedbackMessageVisible: C.gK.optional(C.gK.boolean, !1),
                    })
                    .views((e) => ({
                        get card() {
                            return (0, R.M)(e).words.getCardForTrack(e.trackId);
                        },
                        get isFeedbackDisabled() {
                            return !e.isOpened || !this.card || (this.card.isFeedbackPending && !e.isFeedbackMessageVisible);
                        },
                    }))
                    .actions((e) => ({
                        open(t) {
                            let { words: a } = (0, R.M)(e),
                                i = a.getCardForTrack(t);
                            !e.trackId &&
                                (null == i ? void 0 : i.bigCardId) &&
                                ((e.trackId = t),
                                (e.isOpened = !0),
                                (e.submittedFeedback = null),
                                (e.isFeedbackMessageVisible = !1),
                                a.loadBigCard(i.bigCardId, t, i.id));
                        },
                        close() {
                            e.isOpened = !1;
                        },
                        reset() {
                            ((e.isOpened = !1), (e.trackId = void 0), (e.submittedFeedback = null), (e.isFeedbackMessageVisible = !1));
                        },
                        showFeedbackMessage(t) {
                            ((e.submittedFeedback = t), (e.isFeedbackMessageVisible = !0));
                        },
                        hideFeedbackMessage() {
                            e.isFeedbackMessageVisible = !1;
                        },
                    })),
                dq = C.gK.model('WordsCardAction', { title: C.gK.string, url: C.gK.string }),
                dz = C.gK.model('WordsCardSource', { title: C.gK.string, url: C.gK.string, faviconUrl: C.gK.maybeNull(C.gK.string) }),
                dQ = C.gK
                    .model('WordsCard', {
                        id: C.gK.string,
                        text: C.gK.string,
                        tags: C.gK.maybe(C.gK.array(C.gK.string)),
                        action: C.gK.maybe(dq),
                        actions: C.gK.maybe(C.gK.array(dz)),
                        bigCardIds: C.gK.maybe(C.gK.array(C.gK.string)),
                        feedbackState: C.gK.maybe(C.gK.string),
                        feedbackLoadingState: C.gK.enumeration(Object.values(M.G)),
                        analyticObjectType: C.gK.maybe(C.gK.string),
                        analyticObjectId: C.gK.maybe(C.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get isFact() {
                                var a;
                                if (!(0, C._n)(e)) return !1;
                                return null == (a = e.tags) ? void 0 : a.includes(E.FACT);
                            },
                            get isInformer() {
                                var i, l;
                                if (!(0, C._n)(e)) return !1;
                                return !(null == (i = e.tags) ? void 0 : i.includes(E.FACT)) && !!(null == (l = e.action) ? void 0 : l.url);
                            },
                            get bigCardId() {
                                var r;
                                return null == (r = e.bigCardIds) ? void 0 : r[0];
                            },
                            get hasBigCard() {
                                var s;
                                return !!(null == (s = e.bigCardIds) ? void 0 : s[0]);
                            },
                            get isLiked() {
                                return e.feedbackState === dY.a.LIKE;
                            },
                            get isDisliked() {
                                return e.feedbackState === dY.a.DISLIKE;
                            },
                            get isFeedbackPending() {
                                return e.feedbackLoadingState === M.G.PENDING;
                            },
                            get withDirectLinkNavigation() {
                                if (!(0, C._n)(e)) return !1;
                                let { experiments: a } = (0, R.M)(e);
                                return a.checkExperiment(k.z.WebNextWaveScreenWordsInWaveDirectLinks, 'on') && !!t.isInformer;
                            },
                            get withBigCardPanel() {
                                if (!(0, C._n)(e)) return !1;
                                let { words: t } = (0, R.M)(e);
                                return t.isBigCardPanelEnabled;
                            },
                            get isBigCardFullscreenEnabled() {
                                if (!(0, C._n)(e)) return !1;
                                let { experiments: a } = (0, R.M)(e);
                                return !t.withBigCardPanel && t.hasBigCard && a.checkExperiment(k.z.WebNextWaveScreenWordsInWaveBigReplica, 'on');
                            },
                            get isLumenFaceAvatarEnabled() {
                                return !!(t.withBigCardPanel && t.isFact && e.text);
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        sendFeedback: (0, C.L3)(function* (t) {
                            let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (!(0, C._n)(e) || e.isFeedbackPending) return;
                            let { wordsResource: i } = (0, C._$)(e),
                                l = e.feedbackState;
                            ((e.feedbackLoadingState = M.G.PENDING), a && (e.feedbackState = t));
                            try {
                                (yield i.cardsFeedback({ feedback: [{ id: e.id, feedbackState: t }] }),
                                    (0, C._n)(e) && ((e.feedbackState = t), (e.feedbackLoadingState = M.G.RESOLVE)));
                            } catch (t) {
                                throw ((0, C._n)(e) && (a && (e.feedbackState = l), (e.feedbackLoadingState = M.G.REJECT)), t);
                            }
                        }),
                    })),
                dZ = C.gK
                    .model('Words', {
                        cards: C.gK.map(dQ),
                        activeBigCard: C.gK.maybe(C.gK.frozen()),
                        loadingState: C.gK.enumeration(Object.values(M.G)),
                        bigCardLoadingState: q.X,
                        loadingTrackIds: C.gK.map(C.gK.boolean),
                        bigCardFullscreen: r8.q,
                        bigCardPanel: C.gK.optional(dH, {}),
                    })
                    .volatile(() => ({
                        requestedTrackIds: new Set(),
                        viewedCardIds: new Set(),
                        viewedBigCardIdsByCardId: new Map(),
                        viewedStore: void 0,
                        resolvedEmptyTrackIds: new Set(),
                        activeBigCardId: void 0,
                    }))
                    .views((e) => ({
                        get withSparkles() {
                            let { experiments: t } = (0, R.M)(e);
                            return t.checkExperiment(k.z.WebNextWaveScreenWordsInWave, 'on');
                        },
                        get isBigCardPanelEnabled() {
                            let { experiments: t, lumen: a, user: i } = (0, R.M)(e);
                            return i.hasPlus && a.isEnabled && t.checkExperiment(k.z.WebNextReplicsLumenUI, 'on');
                        },
                        getCardForTrack(t) {
                            if (t) return e.cards.get(String(t));
                        },
                        isTrackRequested: (t) => e.requestedTrackIds.has(t),
                        isTrackResolvedWithoutCard: (t) => e.resolvedEmptyTrackIds.has(t),
                        isLoading: (t) => e.loadingTrackIds.has(t),
                        get isShimmerVisible() {
                            return e.bigCardLoadingState.isNeededToLoad || e.bigCardLoadingState.isLoading;
                        },
                        get isShimmerActive() {
                            return e.bigCardLoadingState.isLoading;
                        },
                    }))
                    .actions((e) => ({
                        setWordsViewedStore(t) {
                            e.viewedStore = t;
                        },
                        markCardViewed(t) {
                            var a;
                            (e.viewedCardIds.add(t), null == (a = e.viewedStore) || a.addViewedIds([t]));
                        },
                        markBigCardViewed(t, a) {
                            var i, l;
                            let r = null != (l = e.viewedBigCardIdsByCardId.get(t)) ? l : new Set();
                            (r.add(a), e.viewedBigCardIdsByCardId.set(t, r), null == (i = e.viewedStore) || i.addViewedBigCards([{ cardId: t, bigCardIds: [a] }]));
                        },
                        evict(t) {
                            Array.from(e.cards.keys()).forEach((a) => {
                                if (!t.has(a)) {
                                    let t = e.cards.get(a);
                                    (t && e.viewedBigCardIdsByCardId.delete(t.id),
                                        e.cards.delete(a),
                                        e.requestedTrackIds.delete(a),
                                        e.loadingTrackIds.delete(a),
                                        e.resolvedEmptyTrackIds.delete(a));
                                }
                            });
                        },
                        loadCards: (0, C.L3)(function* (t) {
                            let { wordsResource: a, modelActionsLogger: i } = (0, C._$)(e),
                                l = t.filter((t) => !e.requestedTrackIds.has(t));
                            if (0 !== l.length) {
                                l.forEach((t) => {
                                    (e.requestedTrackIds.add(t), e.loadingTrackIds.set(t, !0));
                                });
                                try {
                                    var r, s, n, o, d, g;
                                    e.loadingState = M.G.PENDING;
                                    let t = yield null != (n = null == (r = e.viewedStore) ? void 0 : r.getViewedIds()) ? n : Promise.resolve([]),
                                        i = Array.from(new Set([...e.viewedCardIds, ...t])),
                                        u = yield null != (o = null == (s = e.viewedStore) ? void 0 : s.getViewedBigCards()) ? o : Promise.resolve([]),
                                        c = new Map();
                                    (u.forEach((e) => {
                                        c.set(e.cardId, new Set(e.bigCardIds));
                                    }),
                                        e.viewedBigCardIdsByCardId.forEach((e, t) => {
                                            var a;
                                            let i = null != (a = c.get(t)) ? a : new Set();
                                            (e.forEach((e) => i.add(e)), c.set(t, i));
                                        }));
                                    let m = Array.from(c.entries()).map((e) => {
                                            let [t, a] = e;
                                            return { cardId: t, bigCardIds: Array.from(a) };
                                        }),
                                        { concerts: p } = (0, R.M)(e),
                                        y = p.concertsLocationForRequest,
                                        S = yield a.cards({ trackIds: l, viewedCards: i, viewedBigCards: m, locations: y });
                                    (e.viewedCardIds.clear(),
                                        e.viewedBigCardIdsByCardId.clear(),
                                        i.length > 0 && (null == (d = e.viewedStore) || d.clearSentIds(i)),
                                        m.length > 0 && (null == (g = e.viewedStore) || g.clearSentBigCards(m)),
                                        S.forEach((t) => {
                                            let a = t.cards[0];
                                            a &&
                                                e.cards.set(
                                                    t.id,
                                                    ((e) => {
                                                        var t, a, i, l, r, s;
                                                        let { card: n, feedbackState: o } = e,
                                                            d = n.action
                                                                ? ((l = n.action),
                                                                  (null == (t = n.tags) ? void 0 : t.includes(E.DONATION))
                                                                      ? lV(l.link)
                                                                          ? { title: l.title, url: l.link }
                                                                          : void 0
                                                                      : { title: l.title, url: null != (s = null != (r = l.weblink) ? r : l.link) ? s : '' })
                                                                : void 0,
                                                            g = Array.isArray(n.tags) ? n.tags.filter((e) => 'string' == typeof e) : void 0,
                                                            u = Array.isArray(n.actions) ? n.actions.map(dJ) : void 0,
                                                            c = Array.isArray(n.bigCardIds) ? n.bigCardIds.filter((e) => 'string' == typeof e) : void 0,
                                                            m = null == (a = n.analyticPayload) ? void 0 : a.objectType,
                                                            p = null == (i = n.analyticPayload) ? void 0 : i.objectId;
                                                        return (0, C.wg)({
                                                            id: n.id,
                                                            text: n.text,
                                                            tags: g,
                                                            action: d,
                                                            actions: u,
                                                            bigCardIds: c,
                                                            feedbackState: o,
                                                            feedbackLoadingState: M.G.IDLE,
                                                            analyticObjectId: p,
                                                            analyticObjectType: m,
                                                        });
                                                    })(a),
                                                );
                                        }),
                                        l.forEach((t) => {
                                            e.cards.has(t) ? e.resolvedEmptyTrackIds.delete(t) : e.resolvedEmptyTrackIds.add(t);
                                        }),
                                        l.forEach((t) => e.loadingTrackIds.delete(t)),
                                        (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    ((e.loadingState = M.G.REJECT),
                                        l.forEach((t) => {
                                            (e.requestedTrackIds.delete(t), e.loadingTrackIds.delete(t), e.resolvedEmptyTrackIds.delete(t));
                                        }),
                                        i.error(t));
                                }
                            }
                        }),
                        loadBigCard: (0, C.L3)(function* (t, a, i) {
                            var l;
                            let { wordsResource: r, modelActionsLogger: s } = (0, C._$)(e),
                                n = e.activeBigCardId === t;
                            if (((e.activeBigCardId = t), (null == (l = e.activeBigCard) ? void 0 : l.id) === t)) {
                                e.bigCardLoadingState.loadingState = M.G.RESOLVE;
                                return;
                            }
                            if (!n || !e.bigCardLoadingState.isLoading) {
                                ((e.activeBigCard = void 0), (e.bigCardLoadingState.loadingState = M.G.PENDING));
                                try {
                                    let l = yield r.bigCards({ bigCardIds: [t], bigCardContexts: [{ bigCardId: t, trackId: a, cardId: i }] });
                                    if (e.activeBigCardId !== t) return;
                                    let s = l.find((e) => e.id === t);
                                    if (s) {
                                        ((e.activeBigCard = s), (e.bigCardLoadingState.loadingState = M.G.RESOLVE));
                                        return;
                                    }
                                    e.bigCardLoadingState.loadingState = M.G.REJECT;
                                } catch (a) {
                                    (e.activeBigCardId === t && ((e.activeBigCard = void 0), (e.bigCardLoadingState.loadingState = M.G.REJECT)), s.error(a));
                                }
                            }
                        }),
                    })),
                d0 = C.gK.model('FreeAccess').views((e) => {
                    let t = {
                        get isFreeDesktopUser() {
                            let { user: t } = (0, R.M)(e);
                            return !t.hasPlus && f.NN;
                        },
                        get isFreeWebUser() {
                            let { user: t } = (0, R.M)(e);
                            return !t.hasPlus && f.$3;
                        },
                        get isFreeUser() {
                            return t.isFreeDesktopUser || t.isFreeWebUser;
                        },
                        get isFreePlaybackDisabled() {
                            var a, i, l;
                            let { user: t, settings: r, experiments: s } = (0, R.M)(e);
                            return (
                                !t.hasPlus &&
                                (null == (i = s.getExperiment(k.z.WebNextDesktopWebFreemium)) || null == (a = i.value) ? void 0 : a.closeListening) === 'on' &&
                                !(null == (l = r.browserInfo) ? void 0 : l.isTouch) &&
                                t.isAuthorized
                            );
                        },
                        get limitedFreePlayback() {
                            var r, s, n;
                            let { user: t, settings: a, experiments: i } = (0, R.M)(e);
                            return (
                                !t.hasPlus &&
                                (null == (s = i.getExperiment(k.z.WebNextDesktopWebFreemium)) || null == (r = s.value) ? void 0 : r.limitListening) === 'on' &&
                                !(null == (n = a.browserInfo) ? void 0 : n.isTouch) &&
                                t.isAuthorized
                            );
                        },
                        get isVibeStartRestricted() {
                            return t.isFreeWebUser || t.isFreePlaybackDisabled;
                        },
                        get isSearchVibeStartRestricted() {
                            return t.isFreePlaybackDisabled;
                        },
                    };
                    return t;
                });
            !(function (e) {
                ((e.AWAKENED = 'awakened'), (e.UNAWAKENED = 'unawakened'));
            })(S || (S = {}));
            let d1 = [
                    {
                        [iW.S.Dark]: 'avatars.mds.yandex.net/get-music-misc/28592/img.69dcb1ef3dacc851cba63a44/%%',
                        [iW.S.Light]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69daa855b357516550b967b1/%%',
                    },
                    {
                        [iW.S.Dark]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69dcb1f03dacc851cba63a45/%%',
                        [iW.S.Light]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69daa856b357516550b967b2/%%',
                    },
                    {
                        [iW.S.Dark]: 'avatars.mds.yandex.net/get-music-misc/28592/img.69dcb1ee3dacc851cba63a43/%%',
                        [iW.S.Light]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69daa854b357516550b967b0/%%',
                    },
                ],
                d3 = (e) => {
                    let t = 0;
                    for (let a = 0; a < e.length; a++) t = (Math.imul(t, 31) + e.charCodeAt(a)) >>> 0;
                    return t;
                },
                d2 = C.gK.model('LumenThemes', { light: t6.$, dark: t6.$ }),
                d8 = C.gK
                    .compose(C.gK.model('Lumen', { status: C.gK.maybeNull(C.gK.enumeration(Object.values(S))), themes: C.gK.maybeNull(d2) }), q.X)
                    .views((e) => ({
                        get isAwakened() {
                            return e.status === S.AWAKENED;
                        },
                        get isEnabled() {
                            let { experiments: t } = (0, R.M)(e);
                            return t.checkExperiment(k.z.WebNextQueryToVibeXLumen, 'on');
                        },
                        get isTriedToLoadData() {
                            return !e.isNeededToLoad && !e.isLoading;
                        },
                        get playButtonShowDelay() {
                            var t;
                            let { experiments: a } = (0, R.M)(e),
                                i = null == (t = a.getExperiment(k.z.WebNextQueryToVibeXLumen)) ? void 0 : t.value.playButtonShowDelay;
                            return 'number' != typeof i || Number.isNaN(i) ? 0 : Number(i);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, C.L3)(function* (t) {
                            let { lumenResource: a, modelActionsLogger: i } = (0, C._$)(e),
                                { user: l } = (0, R.M)(e);
                            if (e.loadingState !== M.G.PENDING)
                                try {
                                    e.loadingState = M.G.PENDING;
                                    let i = d3(String(l.puid)),
                                        { status: r, themes: s } = yield a.getLumen({ hash: i }, { cacheControl: t ? 'no-cache' : void 0 });
                                    ((e.status = r), (e.themes = { light: (0, e9.p)(s.light.cover), dark: (0, e9.p)(s.dark.cover) }), (e.loadingState = M.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), (e.loadingState = M.G.REJECT));
                                }
                        }),
                        getFallbackImage: function () {
                            var e;
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                            return null != (e = d1[d3(t) % d1.length]) ? e : d1[0];
                        },
                    }));
            var d5 = a(37045);
            let d6 = C.gK
                    .model({
                        modal: r8.q,
                        target: C.gK.string,
                        isSilent: C.gK.boolean,
                        tariffOfferName: C.gK.string,
                        offersBatchId: C.gK.string,
                        offersPositionIds: C.gK.string,
                        serviceSessionId: C.gK.string,
                        status: C.gK.enumeration(Object.values(d5.c)),
                    })
                    .views((e) => ({
                        get isSuccess() {
                            return e.status === d5.c.SUCCESS;
                        },
                        get isError() {
                            return e.status === d5.c.ERROR;
                        },
                    }))
                    .actions((e) => ({
                        setTarget(t) {
                            e.target = t;
                        },
                        setIsSilent(t) {
                            e.isSilent = t;
                        },
                        setTariffOfferName(t) {
                            e.tariffOfferName = t;
                        },
                        setOffersBatchId(t) {
                            e.offersBatchId = t;
                        },
                        setOffersPositionIds(t) {
                            e.offersPositionIds = t;
                        },
                        setServiceSessionId(t) {
                            e.serviceSessionId = t;
                        },
                        setStatus(t) {
                            e.status = t;
                        },
                        reset() {
                            ((e.target = ''),
                                (e.tariffOfferName = ''),
                                (e.offersBatchId = ''),
                                (e.offersPositionIds = ''),
                                (e.serviceSessionId = ''),
                                (e.status = d5.c.IDLE));
                        },
                        onModalOpenChange(t) {
                            (e.modal.onOpenChange(t), e.status === d5.c.SUCCESS && window.location.reload());
                        },
                    })),
                d9 = C.gK
                    .model('DesktopPaywallModel')
                    .volatile(() => ({ crackdownTimeoutId: null }))
                    .views((e) => {
                        let t = {
                            get shouldUserHavePaywall() {
                                let { freeAccess: t, settings: a, user: i } = (0, R.M)(e);
                                return !a.isMobile && f.$3 && 0;
                            },
                            get isPaywallOpen() {
                                let { paywall: t } = (0, R.M)(e);
                                return t.modal.isOpened;
                            },
                            get isPaywallPassed() {
                                let { paywall: a, user: i } = (0, R.M)(e);
                                if (!i.account.isResolved || a.modal.isOpened) return !1;
                                return !t.shouldUserHavePaywall || !t.shouldShowOnEnter || a.modal.wasClosed;
                            },
                            get intervalMsOnEnter() {
                                var a;
                                let { experiments: t } = (0, R.M)(e),
                                    i = null == (a = t.getExperiment(k.z.WebNextDesktopPaywallInterval)) ? void 0 : a.value.interval;
                                if ('number' != typeof i || Number.isNaN(i)) return 2592e5;
                                return i;
                            },
                            get intervalMsCrackdown() {
                                var i;
                                let { experiments: t } = (0, R.M)(e),
                                    a = null == (i = t.getExperiment(k.z.WebNextPaywallCrackdownInterval)) ? void 0 : i.value.interval;
                                if ('number' != typeof a || Number.isNaN(a)) return 9e5;
                                return a;
                            },
                            get shouldShowOnEnter() {
                                var l, r;
                                let { settings: a } = (0, R.M)(e);
                                if (null == (l = a.browserInfo) ? void 0 : l.isMobile) return !1;
                                let { localStorage: i } = (0, C._$)(e),
                                    s = null == (r = i.get(r0.c.DesktopPaywall)) ? void 0 : r.lastOnLoadShowDate;
                                if (void 0 === s) return !0;
                                return new Date(s).getTime() < Date.now() - t.intervalMsOnEnter;
                            },
                            get isReadyToShowCrackdown() {
                                if (this.isPaywallOpen) return !1;
                                let {
                                    paymentWidgetModal: t,
                                    modals: { crackdownModal: a },
                                } = (0, R.M)(e);
                                if (t.modal.isOpened || a.isOpened) return !1;
                                return !0;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            showPaywall() {
                                if (!e.shouldUserHavePaywall) return;
                                let { paywall: t } = (0, R.M)(e),
                                    { localStorage: a } = (0, C._$)(e);
                                (t.openModal(), a.set(r0.c.DesktopPaywall, { lastOnLoadShowDate: new Date() }));
                            },
                            clearCrackdownTimeout() {
                                null !== e.crackdownTimeoutId && (clearTimeout(e.crackdownTimeoutId), (e.crackdownTimeoutId = null));
                            },
                            startCrackdownTimeout() {
                                let { paywall: a, settings: i, experiments: l } = (0, R.M)(e);
                                i.isMobile ||
                                    f.NN ||
                                    l.checkExperiment(k.z.WebNextPaywallCrackdownInterval, 'default') ||
                                    (null !== e.crackdownTimeoutId && t.clearCrackdownTimeout(),
                                    (e.crackdownTimeoutId = setTimeout(() => {
                                        if (!e.isReadyToShowCrackdown) return void t.startCrackdownTimeout();
                                        a.openModal();
                                    }, e.intervalMsCrackdown)));
                            },
                        };
                        return t;
                    }),
                d4 = C.gK.model('CreatePlaylist', { meta: C.gK.maybeNull(tK.$) }).actions((e) => ({
                    create: (0, C.L3)(function* (t) {
                        if (!(0, C._n)(e)) return null;
                        let { usersResource: a, modelActionsLogger: i } = (0, C._$)(e),
                            { user: l } = (0, R.M)(e);
                        if (!l.isAuthorized) return null;
                        let r = l.account.data.uid;
                        try {
                            let i = yield a.createPlaylist({ userId: String(r), ...t });
                            return ((e.meta = (0, tt.j)(i)), e.meta.uuid);
                        } catch (e) {
                            return (i.error(e), null);
                        }
                    }),
                    reset() {
                        e.meta = null;
                    },
                }));
            var d7 = a(51859);
            let ge = C.gK.model({ text: C.gK.string, buttonText: C.gK.string, href: C.gK.string }),
                gt = C.gK
                    .compose(C.gK.model('RedAlert', { data: C.gK.maybeNull(ge) }), q.X)
                    .views((e) => ({
                        get isVisible() {
                            let { settings: t } = (0, R.M)(e);
                            return t.layout !== d7.u.Mobile && !!e.data;
                        },
                        get text() {
                            if (null === e.data) throw Error('Missing data');
                            return e.data.text;
                        },
                        get buttonText() {
                            if (null === e.data) throw Error('Missing data');
                            return e.data.buttonText;
                        },
                        get href() {
                            if (null === e.data) throw Error('Missing data');
                            return e.data.href;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, C.L3)(function* () {
                            if (e.loadingState === M.G.PENDING) return;
                            let { user: t } = (0, R.M)(e),
                                { redAlertResource: a, modelActionsLogger: i } = (0, C._$)(e);
                            if (!t.isAuthorized) {
                                e.loadingState = M.G.IDLE;
                                return;
                            }
                            e.loadingState = M.G.PENDING;
                            try {
                                let t = yield a.getRedAlerts({ service: 'music', client: 'music-web', platform: 'web' });
                                ((e.data = ((e) => {
                                    let t = e.alerts.find((e) => {
                                        let { id: t } = e;
                                        return 'music-grace' === t;
                                    });
                                    return void 0 === t ? null : (0, C.wg)({ text: t.texts['bar-text'], buttonText: t.texts['bar-button-text'], href: t.clickUrl });
                                })(t)),
                                    (e.loadingState = M.G.RESOLVE));
                            } catch (t) {
                                (i.error(t), (e.loadingState = M.G.REJECT));
                            }
                        }),
                    }));
            var ga = a(41392),
                gi = a(86788),
                gl = a(86586);
            let gr = (e) => (0, C.wg)({ uri: null == e ? void 0 : e.uri, color: null == e ? void 0 : e.color, videoUrl: null == e ? void 0 : e.videoUrl }),
                gs = (e) => (0, C.wg)({ value: e.value, title: e.title, titleType: e.titleType, subtitle: e.subtitle, cover: e.cover, coverType: e.coverType });
            var gn = a(2855);
            let go = (e) => {
                    let t = ((e) =>
                        (0, C.wg)({
                            contentBackground: e.contentBackground ? gr(e.contentBackground) : void 0,
                            shareBackground: e.shareBackground ? gr(e.shareBackground) : void 0,
                            slideBackground: e.slideBackground ? gr(e.slideBackground) : void 0,
                            contentLogo: e.contentLogo ? gr(e.contentLogo) : void 0,
                            metaLabel: e.metaLabel,
                            metaLabelTextColor: e.metaLabelTextColor,
                            artists: e.artists,
                            artistTextColor: e.artistTextColor,
                            contentDescription: e.contentDescription,
                        }))(e.data);
                    switch (e.type) {
                        case gn.y.LINEUP:
                            return (0, C.wg)({
                                type: e.type,
                                data: { ...t, eventTagLabel: e.data.eventTagLabel, eventTagLabelTextColor: e.data.eventTagLabelTextColor },
                            });
                        case gn.y.LINEUP_WITH_FESTIVAL:
                            return (0, C.wg)({ type: e.type, data: { ...t, contentImage: gr(e.data.contentImage) } });
                        case gn.y.LINEUP_WITH_FESTIVAL_IMAGE:
                            return (0, C.wg)({
                                type: e.type,
                                data: { ...t, contentImage: gr(e.data.contentImage), festivalTitle: e.data.festivalTitle, festivalTextColor: e.data.festivalTextColor },
                            });
                    }
                },
                gd = (e) => (0, C.wg)({ value: e.value, valueDescription: e.valueDescription, valueSuffix: e.valueSuffix, footer: e.footer, align: e.align }),
                gg = (e) => {
                    var t, a, i, l, r, s, n;
                    return {
                        label: null != (i = e.label) ? i : null,
                        description: null != (l = e.description) ? l : null,
                        track: {
                            title: null != (r = e.track.title) ? r : null,
                            coverUri: null != (s = null == (t = e.track.cover) ? void 0 : t.uri) ? s : null,
                            artistsName: null != (n = null == (a = e.track.artists) ? void 0 : a.map((e) => e.name).join(', ')) ? n : null,
                        },
                    };
                },
                gu = (e, t) => {
                    var a, i, l, r, s, n, o, d, g, u, c, m, p, y, E, S;
                    let b, v, K;
                    if (null == (a = e.button) ? void 0 : a.type)
                        switch (e.button.type) {
                            case gi.m.ACTION:
                                b = ((e) => {
                                    var t;
                                    return (0, C.wg)({
                                        type: gi.m.ACTION,
                                        data: { title: e.data.title, imageUrl: e.data.imageUrl, url: null == (t = e.data.action) ? void 0 : t.weblink },
                                    });
                                })(e.button);
                                break;
                            case gi.m.SIMPLE:
                                b = ((e) =>
                                    (0, C.wg)({
                                        type: gi.m.SIMPLE,
                                        data: { title: e.data.title, buttonColor: e.data.buttonColor, textColor: e.data.textColor, url: e.data.action.weblink },
                                    }))(e.button);
                                break;
                            case gi.m.SHARE:
                                b = ((e) => {
                                    let { data: t } = e;
                                    return (0, C.wg)({ type: gi.m.SHARE, data: { title: t.title, buttonColor: t.bgColor, textColor: t.titleColor } });
                                })(e.button);
                                break;
                            case gi.m.LIKE:
                                b = ((e) => {
                                    var t, a, i, l;
                                    let { data: r } = e;
                                    return (0, C.wg)({
                                        type: gi.m.LIKE,
                                        data: {
                                            entityId: r.entityId,
                                            entityType: r.entityType,
                                            unliked: {
                                                title: r.unliked.title,
                                                buttonColor: null != (t = r.unliked.buttonColor) ? t : null,
                                                textColor: null != (a = r.unliked.textColor) ? a : null,
                                                enabled: r.unliked.enabled,
                                            },
                                            liked: {
                                                title: r.liked.title,
                                                buttonColor: null != (i = r.liked.buttonColor) ? i : null,
                                                textColor: null != (l = r.liked.textColor) ? l : null,
                                                enabled: r.liked.enabled,
                                            },
                                        },
                                    });
                                })(e.button);
                        }
                    let I = null != (n = e.background.videoUrl) ? n : '';
                    if (null == (i = e.content) ? void 0 : i.type)
                        switch (null == (o = e.content) ? void 0 : o.type) {
                            case ga.x.CHART:
                                v = ((e) =>
                                    (0, C.wg)({
                                        type: e.type,
                                        data: { description: e.data.description, isOrderVisible: !!e.data.isOrderVisible, items: e.data.items.map(gs) },
                                    }))(e.content);
                                break;
                            case ga.x.CHART_FAVORITES:
                                v = ((e) =>
                                    (0, C.wg)({
                                        type: e.type,
                                        data: {
                                            value: e.data.value,
                                            valueDescription: e.data.valueDescription,
                                            valueSuffix: e.data.valueSuffix,
                                            footer: e.data.footer,
                                            description: e.data.description,
                                            isOrderVisible: !!e.data.isOrderVisible,
                                            items: e.data.items.map(gs),
                                        },
                                    }))(e.content);
                                break;
                            case ga.x.SINGLE_ENTITY:
                                v = ((e) =>
                                    (0, C.wg)({
                                        type: e.type,
                                        data: {
                                            title: e.data.title,
                                            subtitle: e.data.subtitle,
                                            description: e.data.description,
                                            entityType: e.data.entityType,
                                            cover: gr(e.data.cover),
                                            align: e.data.align,
                                            smallRoundCover: e.data.smallRoundCover ? gr(e.data.smallRoundCover) : void 0,
                                            ...((e) => {
                                                let { coverMask: t, coverBackground: a } = e;
                                                return ((t && a) || ((t = gl.g2), (a = gl.wO)), { coverMask: t, coverBackground: a });
                                            })(e.data),
                                        },
                                    }))(e.content);
                                break;
                            case ga.x.STATS:
                                v = ((e) => {
                                    var t;
                                    return (0, C.wg)({
                                        type: e.type,
                                        data: {
                                            header: e.data.header,
                                            footer: null != (t = e.data.footer) ? t : void 0,
                                            align: e.data.align,
                                            stats: e.data.stats.map(gd),
                                        },
                                    });
                                })(e.content);
                                break;
                            case ga.x.TEXT:
                                v = ((e) =>
                                    (0, C.wg)({
                                        type: e.type,
                                        data: { title: e.data.title, subtitle: e.data.subtitle, align: e.data.align, titleSize: e.data.titleSize },
                                        disclaimer: null == e ? void 0 : e.disclaimer,
                                    }))(e.content);
                                break;
                            case ga.x.TEXT_FACT:
                                v = ((e) => {
                                    var t, a, i;
                                    return (0, C.wg)({
                                        type: e.type,
                                        data: {
                                            ...gd(e.data),
                                            coverType: null != (t = e.data.coverType) ? t : null,
                                            coverTitle: null != (a = e.data.coverTitle) ? a : null,
                                            smallCover: null != (i = e.data.smallCover) ? i : null,
                                        },
                                    });
                                })(e.content);
                                break;
                            case ga.x.CHART_ARTIST:
                                v = ((e) => {
                                    let t = e.data.cover ? gr(e.data.cover) : null;
                                    return (0, C.wg)({ type: e.type, data: { title: e.data.title, cover: t, items: e.data.items.map(gs) } });
                                })(e.content);
                                break;
                            case ga.x.ARTISTS:
                                v = ((e) => {
                                    let t = e.data.covers ? e.data.covers.slice(0, 3).map(gr) : [];
                                    return (0, C.wg)({
                                        type: e.type,
                                        data: {
                                            value: e.data.value,
                                            valueDescription: e.data.valueDescription,
                                            valueSuffix: e.data.valueSuffix,
                                            footer: e.data.footer,
                                            covers: t,
                                        },
                                    });
                                })(e.content);
                                break;
                            case ga.x.TEXT_EXTENDED:
                                v = ((e) => {
                                    var t, a, i;
                                    return {
                                        type: e.type,
                                        data: {
                                            title: null != (t = e.data.title) ? t : null,
                                            subtitle: null != (a = e.data.subtitle) ? a : null,
                                            description: null != (i = e.data.description) ? i : null,
                                        },
                                    };
                                })(e.content);
                                break;
                            case ga.x.THEN_NOW_COMPARISON:
                                v = ((e) => {
                                    var t, a;
                                    return {
                                        type: e.type,
                                        data: {
                                            title: null != (t = e.data.title) ? t : null,
                                            subtitle: null != (a = e.data.subtitle) ? a : null,
                                            firstItem: e.data.firstItem ? gg(e.data.firstItem) : null,
                                            secondItem: e.data.secondItem ? gg(e.data.secondItem) : null,
                                        },
                                    };
                                })(e.content);
                                break;
                            case ga.x.PAY_CARD:
                                v = ((e) => {
                                    var t, a, i;
                                    return {
                                        type: e.type,
                                        data: {
                                            title: null != (t = e.data.title) ? t : null,
                                            description: null != (a = e.data.description) ? a : null,
                                            artwork: null != (i = e.data.artwork) ? i : null,
                                        },
                                    };
                                })(e.content);
                                break;
                            case ga.x.CAROUSEL:
                                ((v = ((e) => {
                                    let t = e.data.items.map((e) => ({
                                        data: {
                                            title: e.data.title,
                                            subtitle: e.data.subtitle,
                                            description: e.data.description,
                                            cover: gr(e.data.cover),
                                            coverPlaceholder: e.data.coverPlaceholder,
                                            coverMask: e.data.coverMask,
                                            coverBackground: e.data.coverBackground,
                                        },
                                    }));
                                    return (0, C.wg)({ type: e.type, data: { savedChoiceKey: e.data.savedChoiceKey, items: t } });
                                })(e.content)),
                                    (K = null == (g = e.content) || null == (d = g.data) ? void 0 : d.savedChoiceKey));
                                break;
                            case ga.x.COLLAGE:
                                ((v = ((e) => {
                                    let {
                                            data: { items: t },
                                            type: a,
                                        } = e,
                                        i = t.map((e) => ({
                                            contentBackground: { uri: e.contentBackground.uri },
                                            bottomBlock: {
                                                type: e.bottomBlock.type,
                                                data: {
                                                    items: e.bottomBlock.data.items.map((e) => {
                                                        let { type: t, data: a } = e;
                                                        return { type: t, data: { key: a.key, title: a.title, subtitle: a.subtitle } };
                                                    }),
                                                },
                                            },
                                            topBlock: {
                                                type: e.topBlock.type,
                                                data: {
                                                    background: { uri: e.topBlock.data.background.uri },
                                                    items: e.topBlock.data.items.map((e) => {
                                                        let { type: t, data: a } = e;
                                                        return {
                                                            type: t,
                                                            data: {
                                                                key: a.key,
                                                                uri: a.uri,
                                                                rectangle: {
                                                                    x: a.rectangle.x,
                                                                    y: a.rectangle.y,
                                                                    z: a.rectangle.z,
                                                                    width: a.rectangle.width,
                                                                    height: a.rectangle.height,
                                                                },
                                                            },
                                                        };
                                                    }),
                                                },
                                            },
                                        }));
                                    return (0, C.wg)({ type: a, data: { items: i } });
                                })(e.content)),
                                    (I = ''));
                                break;
                            case ga.x.LINEUP:
                                ((v = ((e) => {
                                    let t = e.data.items.map(go);
                                    return (0, C.wg)({ type: e.type, data: { items: t } });
                                })(e.content)),
                                    (I = ''));
                                break;
                            case ga.x.LUMEN:
                                v = ((e) => {
                                    var t, a, i, l;
                                    return (0, C.wg)({
                                        type: e.type,
                                        data: {
                                            query: e.data.query
                                                ? {
                                                      image: e.data.query.image ? gr(e.data.query.image) : null,
                                                      text: null != (t = e.data.query.text) ? t : null,
                                                      textColor: null != (a = e.data.query.textColor) ? a : null,
                                                  }
                                                : null,
                                            unawakenedLumenImage: e.data.unawakenedLumenImage ? gr(e.data.unawakenedLumenImage) : null,
                                            title: null != (i = e.data.title) ? i : null,
                                            subtitle: null != (l = e.data.subtitle) ? l : null,
                                        },
                                    });
                                })(e.content);
                        }
                    let L = null != (u = null == (l = e.trailer) ? void 0 : l.tracks) ? u : [],
                        T = null != (c = null == (r = e.meta) ? void 0 : r.animationDelay) ? c : gl.fZ;
                    return (0, C.wg)({
                        id: e.id,
                        background: {
                            animationDelay: T,
                            bgImageUrl: null != (m = e.background.bgImageUrl) ? m : '',
                            videoUrl: I,
                            withSound: !!e.background.withSound,
                            firstFrameVideoUrl: null != (p = e.background.firstFrameVideoUrl) ? p : '',
                            lastFrameVideoUrl: null != (y = e.background.lastFrameVideoUrl) ? y : '',
                            withPersonalColor: !!e.background.withPersonalColor,
                            videoLoopEnabled: !!e.background.videoLoopEnabled,
                        },
                        slideColor: null == (s = e.meta) ? void 0 : s.color,
                        button: b,
                        content: v,
                        trailerRawTracks: L,
                        logo: null != (E = null == t ? void 0 : t.logo) ? E : null,
                        promoLogo: null != (S = e.promoLogo) ? S : null,
                        savedChoiceKey: K,
                    });
                },
                gc = C.gK.model('SlideButtonActionData', { title: C.gK.maybeNull(C.gK.string), imageUrl: C.gK.maybeNull(C.gK.string), url: C.gK.maybeNull(C.gK.string) }),
                gm = C.gK.model('SlideButtonAction', { type: C.gK.literal(gi.m.ACTION), data: gc }),
                gp = C.gK.model('SlideButtonLikeState', {
                    title: C.gK.string,
                    buttonColor: C.gK.maybeNull(C.gK.string),
                    textColor: C.gK.maybeNull(C.gK.string),
                    enabled: C.gK.boolean,
                }),
                gy = C.gK.model('SlideButtonLikeData', { entityId: C.gK.string, entityType: C.gK.string, unliked: gp, liked: gp }),
                gE = C.gK.model('SlideButtonLike', { type: C.gK.literal(gi.m.LIKE), data: gy }),
                gS = C.gK.model('SlideButtonSimpleData', {
                    title: C.gK.maybeNull(C.gK.string),
                    buttonColor: C.gK.maybeNull(C.gK.string),
                    textColor: C.gK.maybeNull(C.gK.string),
                }),
                gb = C.gK.model('SlideButtonShare', { type: C.gK.literal(gi.m.SHARE), data: gS }),
                gv = C.gK.model('SlideButtonSimpleData', {
                    title: C.gK.maybeNull(C.gK.string),
                    buttonColor: C.gK.maybeNull(C.gK.string),
                    textColor: C.gK.maybeNull(C.gK.string),
                    url: C.gK.maybeNull(C.gK.string),
                }),
                gK = C.gK.model('SlideButtonSimple', { type: C.gK.literal(gi.m.SIMPLE), data: gv }),
                gI = C.gK.model('SlideContentCover', { uri: C.gK.maybeNull(C.gK.string), color: C.gK.maybeNull(C.gK.string), videoUrl: C.gK.maybeNull(C.gK.string) }),
                gL = C.gK.model('SlideContentStat', {
                    value: C.gK.maybeNull(C.gK.number),
                    valueDescription: C.gK.maybeNull(C.gK.string),
                    valueSuffix: C.gK.maybeNull(C.gK.string),
                    footer: C.gK.maybeNull(C.gK.string),
                    align: C.gK.maybeNull(C.gK.string),
                }),
                gT = C.gK.compose(C.gK.model('SlideContentArtistsModelData', { covers: C.gK.array(gI) }), gL),
                gh = C.gK.model('SlideContentArtistsModel', { type: C.gK.literal(ga.x.ARTISTS), data: C.gK.maybe(gT) }),
                gN = C.gK.model('SlideContentCarouselItemData', {
                    title: C.gK.maybe(C.gK.string),
                    subtitle: C.gK.maybe(C.gK.string),
                    description: C.gK.maybe(C.gK.string),
                    cover: gI,
                    coverMask: C.gK.maybe(C.gK.string),
                    coverBackground: C.gK.maybe(C.gK.string),
                    coverPlaceholder: C.gK.maybe(C.gK.string),
                }),
                gA = C.gK.model('SlideContentCarouselItem', { data: gN }),
                gC = C.gK.model('SlideContentCarouselData', { savedChoiceKey: C.gK.maybe(C.gK.string), items: C.gK.array(gA) }),
                gf = C.gK.model('SlideContentCarousel', { type: C.gK.literal(ga.x.CAROUSEL), data: C.gK.maybe(gC) }),
                gR = C.gK.model('SlideContentItem', {
                    value: C.gK.maybeNull(C.gK.number),
                    title: C.gK.maybeNull(C.gK.string),
                    titleType: C.gK.maybeNull(C.gK.string),
                    subtitle: C.gK.maybeNull(C.gK.string),
                    cover: C.gK.maybeNull(gI),
                    coverType: C.gK.maybeNull(C.gK.string),
                }),
                gk = C.gK.model('SlideContentChartArtistData', { title: C.gK.maybeNull(C.gK.string), cover: C.gK.maybeNull(gI), items: C.gK.array(gR) }),
                gD = C.gK.model('SlideContentChartArtist', { type: C.gK.literal(ga.x.CHART_ARTIST), data: C.gK.maybe(gk) }),
                g_ = C.gK.compose(
                    C.gK.model('SlideContentChartFavoritesData', { description: C.gK.maybeNull(C.gK.string), isOrderVisible: C.gK.boolean, items: C.gK.array(gR) }),
                    gL,
                ),
                gP = C.gK.model('SlideContentChartFavorites', { type: C.gK.literal(ga.x.CHART_FAVORITES), data: C.gK.maybe(g_) }),
                gO = C.gK.model('SlideContentChartData', { description: C.gK.maybeNull(C.gK.string), isOrderVisible: C.gK.boolean, items: C.gK.array(gR) }),
                gw = C.gK.model('SlideContentChart', { type: C.gK.literal(ga.x.CHART), data: C.gK.maybe(gO) }),
                gG = C.gK.model('SlideContentCollageRectangle', { x: C.gK.number, y: C.gK.number, z: C.gK.number, width: C.gK.number, height: C.gK.number }),
                gM = C.gK.model('SlideContentCollageBottomBlockItemData', {
                    key: C.gK.maybe(C.gK.string),
                    title: C.gK.maybe(C.gK.string),
                    subtitle: C.gK.maybe(C.gK.string),
                }),
                gU = C.gK.model('SlideContentCollageBottomBlockItem', { type: C.gK.string, data: gM }),
                gB = C.gK.model('SlideContentCollageBottomBlockData', { items: C.gK.array(gU) }),
                gF = C.gK.model('SlideContentCollageTopBlockItemData', { key: C.gK.maybe(C.gK.string), uri: C.gK.maybe(C.gK.string), rectangle: gG }),
                gV = C.gK.model('SlideContentCollageTopBlockItem', { type: C.gK.string, data: gF }),
                gx = C.gK.model('SlideContentCollageTopBlockData', {
                    background: C.gK.model('SlideContentCollageTopBlockBackground', { uri: C.gK.maybe(C.gK.string) }),
                    items: C.gK.array(gV),
                }),
                gj = C.gK.model('SlideContentCollageItem', {
                    contentBackground: C.gK.model('SlideContentCollageContentBackground', { uri: C.gK.maybe(C.gK.string) }),
                    bottomBlock: C.gK.model('SlideContentCollageBottomBlock', { type: C.gK.string, data: gB }),
                    topBlock: C.gK.model('SlideContentCollageTopBlock', { type: C.gK.string, data: gx }),
                }),
                gW = C.gK.model('SlideContentCollageData', { items: C.gK.array(gj) }),
                gX = C.gK.model('SlideContentCollage', { type: C.gK.literal(ga.x.COLLAGE), data: gW }),
                g$ = C.gK.model('SlideContentLineupItemData', {
                    contentBackground: C.gK.maybe(gI),
                    shareBackground: C.gK.maybe(gI),
                    slideBackground: C.gK.maybe(gI),
                    contentLogo: C.gK.maybe(gI),
                    metaLabel: C.gK.maybe(C.gK.string),
                    metaLabelTextColor: C.gK.maybe(C.gK.string),
                    artists: C.gK.array(C.gK.string),
                    artistTextColor: C.gK.maybe(C.gK.string),
                    contentDescription: C.gK.maybe(C.gK.string),
                    eventTagLabel: C.gK.maybe(C.gK.string),
                    eventTagLabelTextColor: C.gK.maybe(C.gK.string),
                    contentImage: C.gK.maybe(gI),
                    festivalTitle: C.gK.maybe(C.gK.string),
                    festivalTextColor: C.gK.maybe(C.gK.string),
                }),
                gJ = C.gK.model('SlideContentLineupItem', { type: C.gK.string, data: g$ }),
                gY = C.gK.model('SlideContentLineupData', { items: C.gK.array(gJ) }),
                gH = C.gK.model('SlideContentLineup', { type: C.gK.literal(ga.x.LINEUP), data: gY }),
                gq = C.gK.model('SlideContentLumenQuery', { image: C.gK.maybeNull(gI), text: C.gK.maybeNull(C.gK.string), textColor: C.gK.maybeNull(C.gK.string) }),
                gz = C.gK.model('SlideContentLumenData', {
                    query: C.gK.maybeNull(gq),
                    unawakenedLumenImage: C.gK.maybeNull(gI),
                    title: C.gK.maybeNull(C.gK.string),
                    subtitle: C.gK.maybeNull(C.gK.string),
                }),
                gQ = C.gK.model('SlideContentLumen', { type: C.gK.literal(ga.x.LUMEN), data: gz }),
                gZ = C.gK.model('SlideContentPayCardData', {
                    title: C.gK.maybeNull(C.gK.string),
                    description: C.gK.maybeNull(C.gK.string),
                    artwork: C.gK.maybeNull(C.gK.string),
                }),
                g0 = C.gK.model('SlideContentPayCard', { type: C.gK.literal(ga.x.PAY_CARD), data: C.gK.maybe(gZ) }),
                g1 = C.gK.model('SlideContentSingleEntityData', {
                    title: C.gK.maybeNull(C.gK.string),
                    subtitle: C.gK.maybeNull(C.gK.string),
                    description: C.gK.maybeNull(C.gK.string),
                    entityType: C.gK.maybeNull(C.gK.string),
                    cover: gI,
                    coverMask: C.gK.string,
                    coverBackground: C.gK.string,
                    align: C.gK.maybe(C.gK.string),
                    smallRoundCover: C.gK.maybeNull(gI),
                }),
                g3 = C.gK.model('SlideContentSingleEntity', { type: C.gK.literal(ga.x.SINGLE_ENTITY), data: C.gK.maybe(g1) }),
                g2 = C.gK.model('SlideContentStatsData', {
                    header: C.gK.maybeNull(C.gK.string),
                    footer: C.gK.maybeNull(C.gK.string),
                    align: C.gK.maybeNull(C.gK.string),
                    stats: C.gK.array(gL),
                }),
                g8 = C.gK.model('SlideContentStats', { type: C.gK.literal(ga.x.STATS), data: C.gK.maybe(g2) }),
                g5 = C.gK.model('SlideContentTextExtendedData', {
                    title: C.gK.maybeNull(C.gK.string),
                    subtitle: C.gK.maybeNull(C.gK.string),
                    description: C.gK.maybeNull(C.gK.string),
                }),
                g6 = C.gK.model('SlideContentTextExtended', { type: C.gK.literal(ga.x.TEXT_EXTENDED), data: C.gK.maybe(g5) }),
                g9 = C.gK.compose(
                    C.gK.model('SlideContentTextFactDataModel', {
                        coverType: C.gK.maybeNull(C.gK.string),
                        coverTitle: C.gK.maybeNull(C.gK.string),
                        smallCover: C.gK.maybeNull(C.gK.string),
                    }),
                    gL,
                ),
                g4 = C.gK.model('SlideContentTextFact', { type: C.gK.literal(ga.x.TEXT_FACT), data: C.gK.maybe(g9) }),
                g7 = C.gK.model('SlideContentTextData', {
                    title: C.gK.maybeNull(C.gK.string),
                    subtitle: C.gK.maybeNull(C.gK.string),
                    align: C.gK.maybeNull(C.gK.string),
                    titleSize: C.gK.maybeNull(C.gK.string),
                }),
                ue = C.gK.model('SlideContentTextDisclaimer', { text: C.gK.maybeNull(C.gK.string), textColor: C.gK.maybeNull(C.gK.string) }),
                ut = C.gK.model('SlideContentText', { type: C.gK.literal(ga.x.TEXT), data: C.gK.maybe(g7), disclaimer: C.gK.maybe(ue) }),
                ua = C.gK.model('SlideContentThenNowComparisonItemTrack', {
                    title: C.gK.maybeNull(C.gK.string),
                    coverUri: C.gK.maybeNull(C.gK.string),
                    artistsName: C.gK.maybeNull(C.gK.string),
                }),
                ui = C.gK.model('SlideContentThenNowComparisonItem', {
                    label: C.gK.maybeNull(C.gK.string),
                    description: C.gK.maybeNull(C.gK.string),
                    track: C.gK.maybeNull(ua),
                }),
                ul = C.gK.model('SlideContentThenNowComparisonData', {
                    title: C.gK.maybeNull(C.gK.string),
                    subtitle: C.gK.maybeNull(C.gK.string),
                    firstItem: C.gK.maybeNull(ui),
                    secondItem: C.gK.maybeNull(ui),
                }),
                ur = C.gK.model('SlideContentThenNowComparison', { type: C.gK.literal(ga.x.THEN_NOW_COMPARISON), data: C.gK.maybe(ul) }),
                us = C.gK.model('SlideBackground', {
                    animationDelay: C.gK.number,
                    bgImageUrl: C.gK.string,
                    videoUrl: C.gK.string,
                    withSound: C.gK.boolean,
                    firstFrameVideoUrl: C.gK.string,
                    lastFrameVideoUrl: C.gK.string,
                    withPersonalColor: C.gK.boolean,
                    videoLoopEnabled: C.gK.boolean,
                }),
                un = C.gK
                    .model('Slide', {
                        id: C.gK.string,
                        background: us,
                        button: C.gK.maybe(C.gK.union(gm, gb, gK, gE)),
                        slideColor: C.gK.maybeNull(C.gK.string),
                        content: C.gK.maybe(C.gK.union(gw, gP, g3, ut, g8, g4, gD, gh, g6, ur, g0, gf, gX, gH, gQ)),
                        trailerRawTracks: C.gK.maybeNull(C.gK.frozen()),
                        logo: C.gK.maybeNull(C.gK.string),
                        promoLogo: C.gK.maybeNull(C.gK.string),
                        savedChoiceKey: C.gK.maybe(C.gK.string),
                        carouselIndex: C.gK.maybe(C.gK.number),
                    })
                    .views((e) => ({
                        get hasTrailer() {
                            var t;
                            return !!(null == (t = e.trailerRawTracks) ? void 0 : t.length);
                        },
                        get entitiesData() {
                            if (!e.trailerRawTracks) return [];
                            return e.trailerRawTracks.map((e) => ({ type: aU.R.SmartPreview, meta: e }));
                        },
                    }))
                    .actions((e) => ({
                        setCarouselIndex(t) {
                            e.carouselIndex = t;
                        },
                    }));
            var uo = a(73017);
            let ud = C.gK.model('SavedChoiceData', {
                    text: C.gK.maybe(C.gK.string),
                    uri: C.gK.maybe(C.gK.string),
                    coverMask: C.gK.maybe(C.gK.string),
                    coverBackground: C.gK.maybe(C.gK.string),
                }),
                ug = C.gK.model('SavedChoice', { index: C.gK.number, isSaved: C.gK.boolean, data: ud }),
                uu = C.gK
                    .model('Slides', {
                        userSlidesLoadingState: C.gK.enumeration(Object.values(M.G)),
                        artistSlidesLoadingState: C.gK.enumeration(Object.values(M.G)),
                        podcastSlidesLoadingState: C.gK.enumeration(Object.values(M.G)),
                        specialSlidesLoadingState: C.gK.enumeration(Object.values(M.G)),
                        kidsSlidesLoadingState: C.gK.enumeration(Object.values(M.G)),
                        consumer: C.gK.maybe(C.gK.enumeration(Object.values(uo.z))),
                        artistId: C.gK.maybe(C.gK.string),
                        podcastId: C.gK.maybe(C.gK.number),
                        campaignId: C.gK.maybe(C.gK.string),
                        activeSlide: C.gK.optional(C.gK.number, 0),
                        userItems: C.gK.array(un),
                        artistItems: C.gK.array(un),
                        podcastItems: C.gK.array(un),
                        specialItems: C.gK.array(un),
                        kidsItems: C.gK.array(un),
                        isMuted: C.gK.boolean,
                        savedChoices: C.gK.map(ug),
                        mainObjectId: C.gK.optional(C.gK.string, ''),
                    })
                    .views((e) => ({
                        get isLoaded() {
                            return (
                                e.userSlidesLoadingState === M.G.RESOLVE ||
                                e.artistSlidesLoadingState === M.G.RESOLVE ||
                                e.podcastSlidesLoadingState === M.G.RESOLVE ||
                                e.specialSlidesLoadingState === M.G.RESOLVE ||
                                e.kidsSlidesLoadingState === M.G.RESOLVE
                            );
                        },
                        get savedChoice() {
                            var t, a;
                            if (e.consumer !== uo.z.USER) return;
                            return e.savedChoices.get(null != (a = null == (t = e.userItems[e.activeSlide]) ? void 0 : t.savedChoiceKey) ? a : '');
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            setIsMuted: (t) => {
                                e.isMuted = t;
                            },
                            toggleMute: () => {
                                e.isMuted = !e.isMuted;
                            },
                            getUserSlides: (0, C.L3)(function* () {
                                let { slidesResource: a, modelActionsLogger: i } = (0, C._$)(e);
                                if (e.userSlidesLoadingState !== M.G.PENDING)
                                    try {
                                        e.userSlidesLoadingState = M.G.PENDING;
                                        let i = yield a.getUserSlides();
                                        (e.userSlidesLoadingState !== M.G.IDLE && (e.userSlidesLoadingState = M.G.RESOLVE),
                                            i.slides && ((e.consumer = uo.z.USER), (e.mainObjectId = e.consumer), (e.userItems = (0, C.wg)(t.processSlidesResponse(i)))),
                                            (e.userSlidesLoadingState = M.G.RESOLVE));
                                    } catch (t) {
                                        (i.error(t), e.userSlidesLoadingState !== M.G.IDLE && ((e.userSlidesLoadingState = M.G.REJECT), (e.userItems = (0, C.wg)([]))));
                                    }
                            }),
                            getArtistSlides: (0, C.L3)(function* (a) {
                                let { slidesResource: i, modelActionsLogger: l } = (0, C._$)(e);
                                if (e.artistSlidesLoadingState !== M.G.PENDING) {
                                    e.artistId = a.artistId;
                                    try {
                                        e.artistSlidesLoadingState = M.G.PENDING;
                                        let l = yield i.getArtistSlides(a);
                                        (e.artistSlidesLoadingState !== M.G.IDLE && (e.artistSlidesLoadingState = M.G.RESOLVE),
                                            l.slides &&
                                                ((e.consumer = uo.z.ARTIST),
                                                (e.mainObjectId = ''.concat(e.consumer, ':').concat(e.artistId)),
                                                (e.artistItems = (0, C.wg)(t.processSlidesResponse(l)))),
                                            (e.artistSlidesLoadingState = M.G.RESOLVE));
                                    } catch (t) {
                                        (l.error(t),
                                            e.artistSlidesLoadingState !== M.G.IDLE && ((e.artistSlidesLoadingState = M.G.REJECT), (e.artistItems = (0, C.wg)([]))));
                                    }
                                }
                            }),
                            getPodcastSlides: (0, C.L3)(function* (a) {
                                let { slidesResource: i, modelActionsLogger: l } = (0, C._$)(e);
                                if (e.podcastSlidesLoadingState !== M.G.PENDING) {
                                    e.podcastId = a.podcastId;
                                    try {
                                        e.podcastSlidesLoadingState = M.G.PENDING;
                                        let l = yield i.getPodcastSlides(a);
                                        (e.podcastSlidesLoadingState !== M.G.IDLE && (e.podcastSlidesLoadingState = M.G.RESOLVE),
                                            l.slides &&
                                                ((e.consumer = uo.z.PODCAST),
                                                (e.mainObjectId = ''.concat(e.consumer, ':').concat(e.podcastId)),
                                                (e.podcastItems = (0, C.wg)(t.processSlidesResponse(l)))),
                                            (e.podcastSlidesLoadingState = M.G.RESOLVE));
                                    } catch (t) {
                                        (l.error(t),
                                            e.podcastSlidesLoadingState !== M.G.IDLE && ((e.podcastSlidesLoadingState = M.G.REJECT), (e.podcastItems = (0, C.wg)([]))));
                                    }
                                }
                            }),
                            getSpecialSlides: (0, C.L3)(function* (a) {
                                let { slidesResource: i, modelActionsLogger: l } = (0, C._$)(e);
                                if (e.specialSlidesLoadingState !== M.G.PENDING) {
                                    e.campaignId = a.campaignId;
                                    try {
                                        e.specialSlidesLoadingState = M.G.PENDING;
                                        let l = yield i.getSpecialSlides(a);
                                        (e.specialSlidesLoadingState !== M.G.IDLE && (e.specialSlidesLoadingState = M.G.RESOLVE),
                                            l.slides &&
                                                ((e.consumer = uo.z.SPECIAL),
                                                (e.mainObjectId = ''.concat(e.consumer, ':').concat(e.campaignId)),
                                                (e.specialItems = (0, C.wg)(t.processSlidesResponse(l)))),
                                            (e.specialSlidesLoadingState = M.G.RESOLVE));
                                    } catch (t) {
                                        (l.error(t),
                                            e.specialSlidesLoadingState !== M.G.IDLE && ((e.specialSlidesLoadingState = M.G.REJECT), (e.specialItems = (0, C.wg)([]))));
                                    }
                                }
                            }),
                            getKidsSlides: (0, C.L3)(function* () {
                                let { slidesResource: a, modelActionsLogger: i } = (0, C._$)(e);
                                if (e.kidsSlidesLoadingState !== M.G.PENDING)
                                    try {
                                        e.kidsSlidesLoadingState = M.G.PENDING;
                                        let i = yield a.getKidsSlides();
                                        (e.kidsSlidesLoadingState !== M.G.IDLE && (e.kidsSlidesLoadingState = M.G.RESOLVE),
                                            i.slides && ((e.consumer = uo.z.KIDS), (e.mainObjectId = e.consumer), (e.kidsItems = (0, C.wg)(t.processSlidesResponse(i)))),
                                            (e.kidsSlidesLoadingState = M.G.RESOLVE));
                                    } catch (t) {
                                        (i.error(t), e.kidsSlidesLoadingState !== M.G.IDLE && ((e.kidsSlidesLoadingState = M.G.REJECT), (e.kidsItems = (0, C.wg)([]))));
                                    }
                            }),
                            setActiveSlide(t) {
                                e.activeSlide = t;
                            },
                            resetUser() {
                                ((e.userSlidesLoadingState = M.G.IDLE), (e.userItems = (0, C.wg)([])));
                            },
                            resetArtist() {
                                ((e.artistSlidesLoadingState = M.G.IDLE), (e.artistItems = (0, C.wg)([])));
                            },
                            resetPodcast() {
                                ((e.podcastSlidesLoadingState = M.G.IDLE), (e.podcastItems = (0, C.wg)([])));
                            },
                            resetKids() {
                                ((e.kidsSlidesLoadingState = M.G.IDLE), (e.kidsItems = (0, C.wg)([])));
                            },
                            resetSpecial() {
                                ((e.specialSlidesLoadingState = M.G.IDLE), (e.specialItems = (0, C.wg)([])));
                            },
                            saveChoice(t, a) {
                                e.savedChoices.set(t, a);
                            },
                            processSlidesResponse(e) {
                                let a = [];
                                for (let d of e.slides) {
                                    var i, l, r, s, n, o;
                                    let g = gu(d, { logo: e.logo });
                                    if ((a.push(g), g.savedChoiceKey && (null == (i = g.content) ? void 0 : i.type) === ga.x.CAROUSEL)) {
                                        let e = null == (s = g.content) || null == (r = s.data) || null == (l = r.items[0]) ? void 0 : l.data;
                                        if (!e) continue;
                                        t.saveChoice(g.savedChoiceKey, {
                                            index: 0,
                                            isSaved: !1,
                                            data: {
                                                coverBackground: e.coverBackground,
                                                coverMask: e.coverMask,
                                                text: e.title,
                                                uri: null != (o = null == (n = e.cover) ? void 0 : n.uri) ? o : void 0,
                                            },
                                        });
                                    }
                                }
                                return a;
                            },
                        };
                        return t;
                    });
            !(function (e) {
                ((e.ALICE_PRO = 'alice-pro'), (e.KIDS = 'kids'), (e.BOOKMATE = 'bookmate'), (e.LUMEN = 'lumen'));
            })(b || (b = {}));
            var uc = (function (e) {
                    return ((e[(e.PLUS = 1)] = 'PLUS'), (e[(e.NON_PLUS = 0)] = 'NON_PLUS'), (e[(e.UNAUTHORIZED = 2)] = 'UNAUTHORIZED'), e);
                })({}),
                um = a(57024),
                up = a(11871);
            let uy = (e) => {
                    var t, a;
                    return (0, C.wg)({
                        loadingState: M.G.RESOLVE,
                        showWizard: !e.wizardIsPassed,
                        userCollectionHue: e.userCollectionHue,
                        isChildModeEnabled: !!e.childModEnabled,
                        userMusicVisibility: null != (a = null == (t = e.userMusicVisibility) ? void 0 : t.toLowerCase()) ? a : up.L.PUBLIC,
                        aiContentReductionEnabled: !!e.aiContentReductionEnabled,
                    });
                },
                uE = C.gK.model({
                    uid: C.gK.maybe(C.gK.number),
                    hasPlus: C.gK.maybe(C.gK.boolean),
                    login: C.gK.maybe(C.gK.string),
                    avatarId: C.gK.maybe(C.gK.string),
                    isChild: C.gK.maybe(C.gK.boolean),
                    publicId: C.gK.maybe(C.gK.string),
                    publicName: C.gK.maybe(C.gK.string),
                    userSessionRegionIso: C.gK.maybe(C.gK.string),
                    geoRegionIso: C.gK.maybe(C.gK.string),
                    serviceAvailable: C.gK.maybe(C.gK.boolean),
                    options: C.gK.maybe(C.gK.array(C.gK.string)),
                }),
                uS = C.gK.compose(C.gK.model('Account', { data: uE }), q.X),
                ub = C.gK.compose(
                    C.gK.model('Settings', {
                        showWizard: C.gK.optional(C.gK.boolean, !0),
                        userCollectionHue: C.gK.maybe(C.gK.number),
                        isChildModeEnabled: C.gK.optional(C.gK.boolean, !1),
                        userMusicVisibility: C.gK.optional(C.gK.string, up.L.PUBLIC),
                        aiContentReductionEnabled: C.gK.optional(C.gK.boolean, !1),
                    }),
                    q.X,
                ),
                uv = C.gK
                    .model('User', { account: uS, settings: ub, userCollectionHue: C.gK.maybe(C.gK.number) })
                    .views((e) => ({
                        get isAuthorized() {
                            return !!e.account.data.uid;
                        },
                        get hasPlus() {
                            return !!e.account.data.hasPlus;
                        },
                        get isChild() {
                            return !!e.account.data.isChild;
                        },
                        get puid() {
                            return e.account.data.uid;
                        },
                        get collectionHue() {
                            return e.userCollectionHue || e.settings.userCollectionHue;
                        },
                        get isServiceAvailable() {
                            var t;
                            return null == (t = e.account.data.serviceAvailable) || t;
                        },
                        get isAliceProAvailable() {
                            var a;
                            return null == (a = e.account.data.options) ? void 0 : a.includes(b.ALICE_PRO);
                        },
                        get isLumenAvailable() {
                            var i;
                            return null == (i = e.account.data.options) ? void 0 : i.includes(b.LUMEN);
                        },
                        get advertRole() {
                            if (!this.isAuthorized) return uc.UNAUTHORIZED;
                            if (this.hasPlus) return uc.PLUS;
                            return uc.NON_PLUS;
                        },
                    }))
                    .actions((e) => ({
                        getAbout: (0, C.L3)(function* (t) {
                            let { accountResource: a, modelActionsLogger: i, containerStorage: l } = (0, C._$)(e);
                            if (!e.account.isLoading)
                                try {
                                    e.account.loadingState = M.G.PENDING;
                                    let i = t;
                                    (i || (i = yield a.about()),
                                        l.set(r0.c.YmUid, i.uid),
                                        (e.account.data = ((e) => {
                                            let t = e.options ? e.options.filter((e) => 'string' == typeof e) : void 0;
                                            return (0, C.wg)({
                                                uid: e.uid,
                                                login: e.login,
                                                avatarId: e.avatarId,
                                                hasPlus: e.hasPlus,
                                                publicId: e.publicId,
                                                publicName: e.publicName,
                                                isChild: e.isChild,
                                                userSessionRegionIso: e.userSessionRegionIso,
                                                geoRegionIso: e.geoRegionIso,
                                                serviceAvailable: e.serviceAvailable,
                                                options: t,
                                            });
                                        })(i)),
                                        (e.account.loadingState = M.G.RESOLVE),
                                        (0, um.uV)({ stage: 'account-about', result: (0, um.UC)(i) }));
                                } catch (t) {
                                    ((0, um.uV)({ stage: 'account-about', result: (0, um.dM)(t) }), i.error(t), (e.account.loadingState = M.G.REJECT));
                                }
                        }),
                        getSettings: (0, C.L3)(function* () {
                            let { accountResource: t, modelActionsLogger: a } = (0, C._$)(e);
                            if (e.settings.loadingState !== M.G.PENDING)
                                try {
                                    e.settings.loadingState = M.G.PENDING;
                                    let a = yield t.settings();
                                    e.settings = uy(a);
                                } catch (t) {
                                    (a.error(t), (e.settings.showWizard = !1), (e.settings.loadingState = M.G.REJECT));
                                }
                        }),
                        setSettings: (0, C.L3)(function* (t) {
                            let { isChildModeEnabled: a, userMusicVisibility: i, aiContentReductionEnabled: l } = t,
                                { accountResource: r, modelActionsLogger: s } = (0, C._$)(e),
                                n = e.settings.aiContentReductionEnabled;
                            try {
                                let t = {};
                                ('boolean' == typeof a && ((t.childModEnabled = a), (e.settings.isChildModeEnabled = a)),
                                    i && ((t.userMusicVisibility = i), (e.settings.userMusicVisibility = i)),
                                    'boolean' == typeof l && ((t.aiContentReductionEnabled = l), (e.settings.aiContentReductionEnabled = l)));
                                let s = yield r.settings(t);
                                if (
                                    ((e.settings = uy(s)),
                                    ('boolean' == typeof a && s.childModEnabled !== a) || ('boolean' == typeof l && s.aiContentReductionEnabled !== l))
                                )
                                    return a8.F.ERROR;
                                return a8.F.OK;
                            } catch (t) {
                                return ('boolean' == typeof l && (e.settings.aiContentReductionEnabled = n), s.error(t), a8.F.ERROR);
                            }
                        }),
                        setUnauthorized: () => {
                            e.account.loadingState = M.G.RESOLVE;
                        },
                        setAboutRejected: () => {
                            e.account.loadingState = M.G.REJECT;
                        },
                        setUserCollectionHue: (t) => {
                            e.userCollectionHue = t;
                        },
                    })),
                uK = C.gK.model('EntityRef', { entityType: C.gK.enumeration(Object.values(ay.n)), entityId: C.gK.union(C.gK.string, C.gK.number) }),
                uI = C.gK
                    .compose(
                        C.gK.model('DisclaimerModalState', {
                            currentEntityRef: C.gK.maybeNull(uK),
                            type: C.gK.maybeNull(C.gK.enumeration(Object.values(ay.Z))),
                            id: C.gK.maybeNull(C.gK.string),
                            isUnsafeDisclaimerConfirmed: C.gK.optional(C.gK.boolean, !1),
                            shouldHistoryBack: C.gK.optional(C.gK.boolean, !1),
                            shouldCloseModalOnOutsidePress: C.gK.optional(C.gK.boolean, !0),
                            shouldCloseModalOnEscape: C.gK.optional(C.gK.boolean, !0),
                            entityKey: C.gK.maybeNull(C.gK.string),
                            modalData: C.gK.maybeNull(C.gK.frozen()),
                        }),
                        q.X,
                    )
                    .volatile(() => ({ onDisclaimerConfirmHandler: null, onDisclaimerRejectHandler: null }))
                    .views((e) => ({
                        get entityType() {
                            var t, a;
                            return null != (a = null == (t = e.currentEntityRef) ? void 0 : t.entityType) ? a : null;
                        },
                        get entityId() {
                            var i, l;
                            return null != (l = null == (i = e.currentEntityRef) ? void 0 : i.entityId) ? l : null;
                        },
                        get isNeededToLoad() {
                            return e.loadingState === M.G.IDLE;
                        },
                    }))
                    .actions((e) => ({
                        setCurrentEntityRef(t, a) {
                            e.currentEntityRef = { entityType: t, entityId: a };
                        },
                        setId(t) {
                            e.id = t;
                        },
                        setType(t) {
                            e.type = t;
                        },
                        setConfirmUnsafeDisclaimer(t) {
                            e.isUnsafeDisclaimerConfirmed = t;
                        },
                        setShouldHistoryBack(t) {
                            e.shouldHistoryBack = t;
                        },
                        setShouldCloseModalOnOutsidePress(t) {
                            e.shouldCloseModalOnOutsidePress = t;
                        },
                        setShouldCloseModalOnEscape(t) {
                            e.shouldCloseModalOnEscape = t;
                        },
                        setEntityKey(t) {
                            e.entityKey = t;
                        },
                        setDisclaimerConfirmHandler(t) {
                            e.onDisclaimerConfirmHandler = t;
                        },
                        setDisclaimerRejectHandler(t) {
                            e.onDisclaimerRejectHandler = t;
                        },
                        setModalData(t) {
                            e.modalData = t;
                        },
                        reset() {
                            ((e.currentEntityRef = null),
                                (e.id = null),
                                (e.type = null),
                                (e.isUnsafeDisclaimerConfirmed = !1),
                                (e.shouldHistoryBack = !1),
                                (e.shouldCloseModalOnOutsidePress = !0),
                                (e.shouldCloseModalOnEscape = !0),
                                (e.loadingState = M.G.IDLE),
                                (e.entityKey = null),
                                (e.modalData = null),
                                (e.onDisclaimerConfirmHandler = null),
                                (e.onDisclaimerRejectHandler = null));
                        },
                    })),
                uL = q.X.named('DisclaimersDictionary').actions((e) => {
                    let t,
                        a,
                        i,
                        { disclaimerDictionary: l, modelActionsLogger: r } = (0, C._$)(e),
                        s = {
                            syncLoadingState() {
                                if (l.isLoading.value) {
                                    e.loadingState = M.G.PENDING;
                                    return;
                                }
                                if (l.error.value) {
                                    e.loadingState = M.G.REJECT;
                                    return;
                                }
                                if (l.items.value) {
                                    e.loadingState = M.G.RESOLVE;
                                    return;
                                }
                                e.loadingState = M.G.IDLE;
                            },
                            afterCreate() {
                                ((t = l.items.onChange(() => {
                                    s.syncLoadingState();
                                })),
                                    (a = l.isLoading.onChange(() => {
                                        s.syncLoadingState();
                                    })),
                                    (i = l.error.onChange(() => {
                                        s.syncLoadingState();
                                    })));
                            },
                            beforeDestroy() {
                                (null == t || t(), null == a || a(), null == i || i());
                            },
                            getDisclaimers: (0, C.L3)(function* () {
                                try {
                                    yield l.load();
                                } catch (e) {
                                    r.error(e);
                                }
                            }),
                            getDisclaimerById: (0, C.L3)(function* (e) {
                                try {
                                    return yield l.getById(e);
                                } catch (e) {
                                    r.error(e);
                                    return;
                                }
                            }),
                        };
                    return s;
                });
            var uT = a(66325),
                uh = a(41871);
            let uN = (e, t) => (t ? e.get(r0.c.OverwrittenExperiments) : null),
                uA = new Set(Object.values(k.z)),
                uC = C.gK
                    .model('Experiments', {
                        loadingState: C.gK.enumeration(Object.values(M.G)),
                        experiments: C.gK.optional(C.gK.frozen(), {}),
                        overwrittenExperiments: C.gK.optional(C.gK.frozen(), {}),
                    })
                    .views((e) => {
                        let t = {
                            getOverwrittenExperiments() {
                                let { containerStorage: t, clientSafeConfig: a } = (0, C._$)(e);
                                return uN(t, a.get(uh.yc));
                            },
                            getExperiment(a) {
                                var i;
                                let l = e.experiments[a],
                                    r = t.getOverwrittenExperiments();
                                return r && null != (i = r[a]) ? i : l;
                            },
                            isExperimentActive(e) {
                                var a, i;
                                let l = t.getExperiment(e),
                                    r = null != (i = null == l ? void 0 : l.group) ? i : null == l || null == (a = l.value) ? void 0 : a.title;
                                return !!r && 'default' !== r;
                            },
                            isExperimentEnabled(e) {
                                let a = t.getExperiment(e);
                                return (0, uT.A)(null == a ? void 0 : a.value.enabled)
                                    ? null == a
                                        ? void 0
                                        : a.value.enabled
                                    : t.checkExperiment(e, null == a ? void 0 : a.value.value);
                            },
                            getEnabledFlags() {
                                let a = [];
                                for (let i of new Set([...Object.keys(e.overwrittenExperiments), ...Object.keys(e.experiments)]).keys())
                                    t.isExperimentEnabled(i) && a.push(i);
                                return a;
                            },
                            checkExperiment(t, a) {
                                let i = e.experiments,
                                    { containerStorage: l, clientSafeConfig: r } = (0, C._$)(e);
                                return ((e, t) => {
                                    let { containerStorage: a, experiments: i } = e;
                                    return (e, l) => {
                                        var r;
                                        let s = null == i ? void 0 : i[e],
                                            n = uN(a, t);
                                        if (!n) return (null == s ? void 0 : s.group) === l;
                                        let o = null == (r = n[e]) ? void 0 : r.group;
                                        return o ? o === l : (null == s ? void 0 : s.group) === l;
                                    };
                                })({ containerStorage: l, experiments: i }, r.get(uh.yc))(t, a);
                            },
                            isRejected: () => e.loadingState === M.G.REJECT,
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = () => {
                            var t;
                            let a = null != (t = e.getOverwrittenExperiments()) ? t : {};
                            e.overwrittenExperiments = { ...e.overwrittenExperiments, ...a };
                        };
                        return {
                            getData: (0, C.L3)(function* (a) {
                                let { accountResource: i, modelActionsLogger: l } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING)
                                    try {
                                        let t;
                                        e.loadingState = M.G.PENDING;
                                        let l = a;
                                        (l || (l = yield i.experimentsDetails()),
                                            (t = l),
                                            (e.experiments = Object.fromEntries(
                                                Object.entries(t).filter((e) => {
                                                    let [t] = e;
                                                    return uA.has(t);
                                                }),
                                            )),
                                            (e.loadingState = M.G.RESOLVE));
                                    } catch (t) {
                                        (l.error(t), (e.loadingState = M.G.REJECT));
                                    } finally {
                                        t();
                                    }
                            }),
                            setRejected() {
                                ((e.loadingState = M.G.REJECT), t());
                            },
                            updateOverwrittenExperiments(t, a) {
                                let { clientSafeConfig: i } = (0, C._$)(e);
                                i.get(uh.yc) && (e.overwrittenExperiments = { ...e.overwrittenExperiments, [t]: a });
                            },
                            deleteOverwrittenExperiments(t) {
                                let { clientSafeConfig: a } = (0, C._$)(e);
                                if (!a.get(uh.yc)) return;
                                let { [t]: i, ...l } = e.overwrittenExperiments;
                                e.overwrittenExperiments = l;
                            },
                        };
                    });
            var uf = a(31860);
            let uR = (e) => (e ? { revision: e } : { allValuesRequired: !0 });
            var uk = (function (e) {
                    return (
                        (e.LIKED_ALBUMS = 'LIKED_ALBUMS'),
                        (e.LIKED_ARTISTS = 'LIKED_ARTISTS'),
                        (e.LIKED_TRACKS = 'LIKED_TRACKS'),
                        (e.LIKED_PLAYLISTS = 'LIKED_PLAYLISTS'),
                        (e.LIKED_CLIPS = 'LIKED_CLIPS'),
                        e
                    );
                })({}),
                uD = (function (e) {
                    return ((e.LIKED = '1'), (e.DISLIKED = '0'), e);
                })({});
            let u_ = [uk.LIKED_ALBUMS, uk.LIKED_ARTISTS, uk.LIKED_PLAYLISTS, uk.LIKED_TRACKS, uk.LIKED_CLIPS],
                uP = C.gK.optional(C.gK.map(C.gK.enumeration(Object.values(uD))), {}),
                uO = C.gK.model('LibraryRecord', { revision: C.gK.maybeNull(C.gK.number), items: uP }),
                uw = C.gK
                    .compose(C.gK.model('Library', { tracks: uO, albums: uO, artists: uO, playlists: uO, clips: uO }), q.X)
                    .views((e) => ({
                        isTrackLiked: (t) => e.tracks.items.get(String(t)) === uD.LIKED,
                        isTrackDisliked: (t) => e.tracks.items.get(String(t)) === uD.DISLIKED,
                        isArtistLiked: (t) => e.artists.items.get(String(t)) === uD.LIKED,
                        isArtistDisliked: (t) => e.artists.items.get(String(t)) === uD.DISLIKED,
                        isAlbumLiked: (t) => e.albums.items.get(String(t)) === uD.LIKED,
                        isPlaylistLiked: (t) => e.playlists.items.get(String(t)) === uD.LIKED,
                        isClipLiked: (t) => e.clips.items.get(String(t)) === uD.LIKED,
                    }))
                    .actions((e) => {
                        let t = {
                            getData: (0, C.L3)(function* () {
                                let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u_,
                                    { modelActionsLogger: i, collectionResource: l } = (0, C._$)(e);
                                if (e.loadingState !== M.G.PENDING)
                                    try {
                                        e.loadingState = M.G.PENDING;
                                        let i = {};
                                        (a.includes(uk.LIKED_ALBUMS) && (i.likedAlbums = uR(e.albums.revision)),
                                            a.includes(uk.LIKED_ARTISTS) && (i.likedArtists = uR(e.artists.revision)),
                                            a.includes(uk.LIKED_TRACKS) && (i.likedTracks = uR(e.tracks.revision)),
                                            a.includes(uk.LIKED_CLIPS) && (i.likedClips = uR(e.clips.revision)),
                                            a.includes(uk.LIKED_PLAYLISTS) && (i.likedPlaylists = {}));
                                        let r = yield l.sync(i);
                                        (t.setAlbums(r.values.likedAlbums),
                                            t.setArtists(r.values.likedArtists),
                                            t.setPlaylists(r.values.likedPlaylists),
                                            t.setTracks(r.values.likedTracks),
                                            t.setClips(r.values.likedClips),
                                            (e.loadingState = M.G.RESOLVE));
                                    } catch (t) {
                                        (i.error(t), (e.loadingState = M.G.REJECT));
                                    }
                            }),
                            setArtists: (a) => {
                                (null == a ? void 0 : a.values) &&
                                    e.artists.revision !== a.info.revision &&
                                    (t.clearArtists(),
                                    (e.artists.revision = a.info.revision),
                                    a.values.liked.map((t) => {
                                        e.artists.items.set(t.artistId.toString(), uD.LIKED);
                                    }),
                                    a.values.disliked.map((t) => {
                                        e.artists.items.set(t.artistId.toString(), uD.DISLIKED);
                                    }));
                            },
                            setAlbums: (a) => {
                                (null == a ? void 0 : a.values) &&
                                    e.albums.revision !== a.info.revision &&
                                    (t.clearAlbums(),
                                    (e.albums.revision = a.info.revision),
                                    a.values.liked.map((t) => {
                                        e.albums.items.set(t.albumId.toString(), uD.LIKED);
                                    }));
                            },
                            setPlaylists: (a) => {
                                (null == a ? void 0 : a.values) &&
                                    (t.clearPlaylists(),
                                    a.values.liked.map((t) => {
                                        e.playlists.items.set(''.concat(t.compositeData.uid, ':').concat(t.compositeData.kind), uD.LIKED);
                                    }));
                            },
                            setTracks: (a) => {
                                (null == a ? void 0 : a.values) &&
                                    e.tracks.revision !== a.info.revision &&
                                    (t.clearTracks(),
                                    (e.tracks.revision = a.info.revision),
                                    a.values.liked.map((t) => {
                                        e.tracks.items.set(t.trackId, uD.LIKED);
                                    }),
                                    a.values.disliked.map((t) => {
                                        e.tracks.items.set(t.trackId, uD.DISLIKED);
                                    }));
                            },
                            setClips: (a) => {
                                (null == a ? void 0 : a.values) &&
                                    e.clips.revision !== a.info.revision &&
                                    (t.clearClips(),
                                    (e.clips.revision = a.info.revision),
                                    a.values.liked.map((t) => {
                                        e.clips.items.set(t.clipId.toString(), uD.LIKED);
                                    }));
                            },
                            clearArtists: () => {
                                ((e.artists.revision = null), e.artists.items.clear());
                            },
                            clearAlbums: () => {
                                ((e.albums.revision = null), e.albums.items.clear());
                            },
                            clearPlaylists: () => {
                                ((e.playlists.revision = null), e.playlists.items.clear());
                            },
                            clearTracks: () => {
                                ((e.tracks.revision = null), e.tracks.items.clear());
                            },
                            clearClips: () => {
                                ((e.clips.revision = null), e.clips.items.clear());
                            },
                            toggleTrackLike: (0, C.L3)(function* (a) {
                                let { usersResource: i, modelActionsLogger: l } = (0, C._$)(e),
                                    r = String(a.entityId),
                                    s = e.tracks.items.get(r);
                                try {
                                    let l,
                                        s = { entityId: a.albumId ? ''.concat(a.entityId, ':').concat(a.albumId) : a.entityId, userId: a.userId };
                                    return (
                                        e.tracks.items.get(r) === uD.LIKED
                                            ? (e.tracks.items.delete(r), (l = yield i.unlikeTrack(s)))
                                            : (e.tracks.items.set(r, uD.LIKED), (l = yield i.likeTrack(s))),
                                        t.getData([uk.LIKED_TRACKS]),
                                        l
                                    );
                                } catch (t) {
                                    return (s ? e.tracks.items.set(r, s) : e.tracks.items.delete(r), l.error(t), uf.f.ERROR);
                                }
                            }),
                            toggleTrackDislike: (0, C.L3)(function* (a) {
                                let { usersResource: i, modelActionsLogger: l } = (0, C._$)(e),
                                    r = String(a.entityId),
                                    s = e.tracks.items.get(r);
                                try {
                                    let l,
                                        s = { entityId: a.albumId ? ''.concat(a.entityId, ':').concat(a.albumId) : a.entityId, userId: a.userId };
                                    return (
                                        e.tracks.items.get(r) === uD.DISLIKED
                                            ? (e.tracks.items.delete(r), (l = yield i.undislikeTrack(s)))
                                            : (e.tracks.items.set(r, uD.DISLIKED), (l = yield i.dislikeTrack(s))),
                                        t.getData([uk.LIKED_TRACKS]),
                                        l
                                    );
                                } catch (t) {
                                    return (s ? e.tracks.items.set(r, s) : e.tracks.items.delete(r), l.error(t), uf.f.ERROR);
                                }
                            }),
                            toggleArtistLike: (0, C.L3)(function* (a) {
                                let { usersResource: i, modelActionsLogger: l } = (0, C._$)(e),
                                    r = String(a.entityId),
                                    s = e.artists.items.get(r);
                                try {
                                    let l;
                                    return (
                                        e.artists.items.get(r) === uD.LIKED
                                            ? (e.artists.items.delete(r), (l = yield i.unlikeArtist(a)))
                                            : (e.artists.items.set(r, uD.LIKED), (l = yield i.likeArtist(a))),
                                        t.getData([uk.LIKED_ARTISTS]),
                                        l
                                    );
                                } catch (t) {
                                    return (s ? e.artists.items.set(r, s) : e.artists.items.delete(r), l.error(t), uf.f.ERROR);
                                }
                            }),
                            toggleArtistDislike: (0, C.L3)(function* (a) {
                                let { usersResource: i, modelActionsLogger: l } = (0, C._$)(e),
                                    r = String(a.entityId),
                                    s = e.artists.items.get(r);
                                try {
                                    let l;
                                    return (
                                        e.artists.items.get(r) === uD.DISLIKED
                                            ? (e.artists.items.delete(r), (l = yield i.undislikeArtist(a)))
                                            : (e.artists.items.set(r, uD.DISLIKED), (l = yield i.dislikeArtist(a))),
                                        t.getData([uk.LIKED_ARTISTS]),
                                        l
                                    );
                                } catch (t) {
                                    return (s ? e.artists.items.set(r, s) : e.artists.items.delete(r), l.error(t), uf.f.ERROR);
                                }
                            }),
                            toggleAlbumLike: (0, C.L3)(function* (a) {
                                let { usersResource: i, modelActionsLogger: l } = (0, C._$)(e),
                                    r = String(a.entityId),
                                    s = e.albums.items.get(r);
                                try {
                                    let l;
                                    return (
                                        e.albums.items.get(r) === uD.LIKED
                                            ? (e.albums.items.delete(r), (l = yield i.unlikeAlbum(a)))
                                            : (e.albums.items.set(r, uD.LIKED), (l = yield i.likeAlbum(a))),
                                        t.getData([uk.LIKED_ALBUMS]),
                                        l
                                    );
                                } catch (t) {
                                    return (s ? e.albums.items.set(r, s) : e.albums.items.delete(r), l.error(t), uf.f.ERROR);
                                }
                            }),
                            togglePlaylistLike: (0, C.L3)(function* (a) {
                                let { usersResource: i, modelActionsLogger: l } = (0, C._$)(e),
                                    r = String(a.entityId),
                                    s = e.playlists.items.get(r);
                                try {
                                    let l;
                                    return (
                                        e.playlists.items.get(r) === uD.LIKED
                                            ? (e.playlists.items.delete(r), (l = yield i.unlikePlaylist(a)))
                                            : (e.playlists.items.set(r, uD.LIKED), (l = yield i.likePlaylist(a))),
                                        t.getData([uk.LIKED_PLAYLISTS]),
                                        l
                                    );
                                } catch (t) {
                                    return (s ? e.playlists.items.set(r, s) : e.playlists.items.delete(r), l.error(t), uf.f.ERROR);
                                }
                            }),
                            toggleClipLike: (0, C.L3)(function* (a) {
                                let { usersResource: i, modelActionsLogger: l } = (0, C._$)(e),
                                    r = String(a.entityId),
                                    s = e.clips.items.get(r);
                                try {
                                    return (
                                        e.clips.items.get(r) === uD.LIKED
                                            ? (e.clips.items.delete(r), yield i.unlikeClip(a))
                                            : (e.clips.items.set(r, uD.LIKED), yield i.likeClip(a)),
                                        t.getData([uk.LIKED_CLIPS]),
                                        uf.f.OK
                                    );
                                } catch (t) {
                                    return (s ? e.clips.items.set(r, s) : e.clips.items.delete(r), l.error(t), uf.f.ERROR);
                                }
                            }),
                        };
                        return t;
                    }),
                uG = C.gK
                    .model('Location', {
                        pathname: C.gK.optional(C.gK.string, ''),
                        searchParams: C.gK.optional(C.gK.string, ''),
                        host: C.gK.optional(C.gK.string, ''),
                        tld: C.gK.optional(C.gK.string, ''),
                        origin: C.gK.optional(C.gK.string, ''),
                        href: C.gK.optional(C.gK.string, ''),
                        isNotFound: C.gK.optional(C.gK.boolean, !1),
                    })
                    .actions((e) => ({
                        setPathname(t) {
                            e.pathname = t;
                        },
                        setSearchParams(t) {
                            e.searchParams = t;
                        },
                        setHost(t) {
                            e.host = t;
                        },
                        setTld(t) {
                            e.tld = t;
                        },
                        setOrigin(t) {
                            e.origin = t;
                        },
                        setHref(t) {
                            e.href = t;
                        },
                        setNotFound(t) {
                            e.isNotFound = t;
                        },
                    }));
            var uM = a(68406),
                uU = a(37982);
            let uB = { INTRO_PLAN: uU.N.IntroPlan, INTRO_UNTIL_PLAN: uU.N.IntroUntilPlan, TRIAL_PLAN: uU.N.TrialPlan, TRIAL_UNTIL_PLAN: uU.N.TrialUntilPlan },
                uF = (e) => {
                    let { repetitionCount: t, typename: a, ...i } = e;
                    return { ...(Number.isFinite(t) ? { repeatCount: t } : {}), ...i, typename: uB[a] || a };
                };
            var uV = a(90339);
            let ux = (e) => (0, C.wg)(e),
                uj = (e) => {
                    let { plans: t, ...a } = e;
                    return (0, C.wg)({ ...a, plans: t.map(ux) });
                },
                uW = (e) => {
                    let { option: t, ...a } = e;
                    return (0, C.wg)({ ...uj(a), option: t });
                },
                uX = (e) =>
                    (0, C.wg)({
                        acqOffer: ((e) => {
                            let {
                                analyticData: t,
                                catalogCompositeOffer: a,
                                offerTexts: i,
                                target: l,
                                requestedFeatures: r,
                                position: s,
                                oneClickAvailable: n,
                                place: o,
                                purchaseToken: d,
                            } = e;
                            return (0, C.wg)({
                                analyticData: t,
                                catalogCompositeOffer: ((e) => {
                                    let { positionId: t, silentInvoiceAvailable: a, structureType: i, tariffOffer: l, optionOffers: r } = e;
                                    return (0, C.wg)({
                                        positionId: t,
                                        silentInvoiceAvailable: a,
                                        structureType: i,
                                        tariffOffer: ((e) => {
                                            if (!e) return null;
                                            let { tariff: t, ...a } = e;
                                            return (0, C.wg)({ ...uj(a), tariff: t });
                                        })(l),
                                        optionsOffers: r.map(uW),
                                    });
                                })(
                                    ((e) => {
                                        var t;
                                        let { tariffOffer: a, optionOffers: i } = e;
                                        return {
                                            ...e,
                                            silentInvoiceAvailable: !!e.silentInvoiceAvailable,
                                            structureType: e.structureType,
                                            tariffOffer: a ? { ...a, offerVendorType: a.offerVendorType, plans: null == (t = a.plans) ? void 0 : t.map(uF) } : void 0,
                                            optionOffers: null == i ? void 0 : i.map((e) => ({ ...e, plans: (e.plans || []).map(uF) })),
                                        };
                                    })(a),
                                ),
                                offerTexts: ((e) => {
                                    let { customTexts: t = {}, ...a } = e;
                                    return {
                                        ...a,
                                        customTexts: Object.entries(t).reduce((e, t) => {
                                            let [a, i] = t;
                                            return ((e[(0, uV.A)(a)] = i), e);
                                        }, {}),
                                    };
                                })(i),
                                target: l,
                                requestedFeatures: r,
                                position: s,
                                oneClickAvailable: n,
                                place: o,
                                purchaseToken: d,
                            });
                        })(e),
                    }),
                u$ = C.gK.model({ batchId: C.gK.string, positionId: C.gK.string, placeId: C.gK.maybe(C.gK.string) }),
                uJ = C.gK.model({
                    buttonText: C.gK.maybe(C.gK.string),
                    buttonAdditionalText: C.gK.maybe(C.gK.string),
                    buttonTextA11y: C.gK.maybe(C.gK.string),
                    disclaimerText: C.gK.maybe(C.gK.string),
                    disclaimerTextA11y: C.gK.maybe(C.gK.string),
                    oneClickDisclaimerText: C.gK.maybe(C.gK.string),
                    oneClickDisclaimerTextA11y: C.gK.maybe(C.gK.string),
                }),
                uY = C.gK.model({
                    subscriptionName: C.gK.string,
                    buttonText: C.gK.string,
                    buttonTextWithDetails: C.gK.string,
                    combinedIntroductoryText: C.gK.string,
                    combinedPriceText: C.gK.string,
                    combinedFullOfferText: C.gK.string,
                    priceInMonth: C.gK.string,
                    customTexts: uJ,
                });
            var uH = (function (e) {
                return ((e.COMPOSITE = 'COMPOSITE'), (e.OPTION = 'OPTION'), (e.TARIFF = 'TARIFF'), e);
            })({});
            let uq = C.gK.model({ amount: C.gK.number, currency: C.gK.string }),
                uz = C.gK.model({ typename: C.gK.literal(uU.N.IntroPlan), period: C.gK.string, price: uq, repeatCount: C.gK.maybe(C.gK.number) }),
                uQ = C.gK.model({ typename: C.gK.literal(uU.N.IntroUntilPlan), price: uq, until: C.gK.string }),
                uZ = C.gK.model({ typename: C.gK.literal(uU.N.TrialPlan), period: C.gK.string }),
                u0 = C.gK.model({ typename: C.gK.literal(uU.N.TrialUntilPlan), until: C.gK.string }),
                u1 = C.gK.union(uz, uQ, uZ, u0),
                u3 = C.gK.model({ name: C.gK.string }),
                u2 = C.gK.model({
                    additionText: C.gK.string,
                    description: C.gK.string,
                    name: C.gK.string,
                    text: C.gK.string,
                    title: C.gK.string,
                    plans: C.gK.array(u1),
                    commonPeriod: C.gK.string,
                    commonPrice: uq,
                }),
                u8 = u2.props({ option: u3 }),
                u5 = u2.props({ tariff: u3 }),
                u6 = C.gK.model({
                    positionId: C.gK.string,
                    silentInvoiceAvailable: C.gK.boolean,
                    structureType: C.gK.enumeration(Object.values(uH)),
                    tariffOffer: C.gK.maybeNull(u5),
                    optionsOffers: C.gK.array(u8),
                }),
                u9 = C.gK.model({
                    analyticData: u$,
                    catalogCompositeOffer: u6,
                    offerTexts: uY,
                    target: C.gK.string,
                    requestedFeatures: C.gK.maybe(C.gK.array(C.gK.string)),
                    position: C.gK.number,
                    oneClickAvailable: C.gK.maybe(C.gK.boolean),
                    place: C.gK.maybe(C.gK.string),
                    purchaseToken: C.gK.maybe(C.gK.string),
                }),
                u4 = C.gK.model({ offer: C.gK.maybeNull(u6), acqOffer: C.gK.maybeNull(u9) }).views((e) => {
                    let t = {
                        get target() {
                            var a;
                            return (null == (a = e.acqOffer) ? void 0 : a.target) || 'music';
                        },
                        get offerPosition() {
                            var i, l;
                            return null != (l = null == (i = e.acqOffer) ? void 0 : i.position) ? l : 0;
                        },
                        get place() {
                            var r;
                            return null == (r = e.acqOffer) ? void 0 : r.place;
                        },
                        get catalogCompositeOffer() {
                            var s;
                            return (null == (s = e.acqOffer) ? void 0 : s.catalogCompositeOffer) || e.offer;
                        },
                        get offersPositionId() {
                            var n, o;
                            return (
                                (null == (n = e.acqOffer) ? void 0 : n.analyticData.positionId) || (null == (o = t.catalogCompositeOffer) ? void 0 : o.positionId) || ''
                            );
                        },
                        get tariffOffer() {
                            var d;
                            return null == (d = t.catalogCompositeOffer) ? void 0 : d.tariffOffer;
                        },
                        get customTexts() {
                            var g, u;
                            return null == (u = e.acqOffer) || null == (g = u.offerTexts) ? void 0 : g.customTexts;
                        },
                        get oneClickAvailable() {
                            var c, m;
                            return !!((null == (c = e.acqOffer) ? void 0 : c.oneClickAvailable) && (null == (m = t.oneClickDisclaimerText) ? void 0 : m.trim()));
                        },
                        get oneClickDisclaimerText() {
                            var p;
                            return null == (p = t.customTexts) ? void 0 : p.oneClickDisclaimerText;
                        },
                        get oneClickDisclaimerTextA11y() {
                            var y;
                            return null == (y = t.customTexts) ? void 0 : y.oneClickDisclaimerTextA11y;
                        },
                        get disclaimerText() {
                            var E;
                            if (t.oneClickAvailable) return t.oneClickDisclaimerText;
                            let { experiments: a } = (0, R.M)(e);
                            return a.checkExperiment(k.z.WebNextPaywallDisclaimer, 'regular') ? (null == (E = t.customTexts) ? void 0 : E.disclaimerText) : void 0;
                        },
                        get disclaimerTextA11y() {
                            var S;
                            if (t.oneClickAvailable) return t.oneClickDisclaimerTextA11y;
                            let { experiments: a } = (0, R.M)(e);
                            return a.checkExperiment(k.z.WebNextPaywallDisclaimer, 'regular') ? (null == (S = t.customTexts) ? void 0 : S.disclaimerTextA11y) : void 0;
                        },
                        get mainText() {
                            var b, v;
                            return (null == (b = t.customTexts) ? void 0 : b.buttonText) || (null == (v = t.tariffOffer) ? void 0 : v.text);
                        },
                        get mainTextA11y() {
                            var K;
                            return null == (K = t.customTexts) ? void 0 : K.buttonTextA11y;
                        },
                        get additionText() {
                            var I, L;
                            return (null == (I = t.customTexts) ? void 0 : I.buttonAdditionalText) || (null == (L = t.tariffOffer) ? void 0 : L.additionText);
                        },
                        get offersBatchId() {
                            var T, h;
                            return (null == (T = e.acqOffer) ? void 0 : T.analyticData.batchId) || (null == (h = e.offer) ? void 0 : h.positionId) || '';
                        },
                        get subscriptionName() {
                            var N, A;
                            return null == (A = e.acqOffer) || null == (N = A.offerTexts) ? void 0 : N.subscriptionName;
                        },
                        get offerText() {
                            var C, f;
                            return null == (f = e.acqOffer) || null == (C = f.offerTexts) ? void 0 : C.buttonTextWithDetails;
                        },
                        get buttonText() {
                            var D, _;
                            return null == (_ = e.acqOffer) || null == (D = _.offerTexts) ? void 0 : D.buttonText;
                        },
                    };
                    return t;
                }),
                u7 = C.gK.model({
                    sessionId: C.gK.maybeNull(C.gK.string),
                    page: C.gK.maybeNull(C.gK.string),
                    offers: C.gK.array(u4),
                    mlRequestId: C.gK.maybeNull(C.gK.string),
                    offerConfigId: C.gK.maybeNull(C.gK.number),
                    language: C.gK.maybeNull(C.gK.string),
                }),
                ce = C.gK.compose(u7, q.X, C.gK.model({ isLoadOffersResultSent: C.gK.boolean })),
                ct = C.gK
                    .compose(C.gK.model({ isLoadOffersResultSent: C.gK.maybe(C.gK.boolean), acqData: C.gK.map(ce) }), q.X)
                    .volatile(() => ({ sessionId: (0, on.A)(), isFrontSessionStartSent: !1 }))
                    .views((e) => {
                        let t = {
                            getIsShimmerVisible(t) {
                                let a = t && e.acqData.get(t);
                                return a ? a.isNeededToLoad || a.isLoading || a.isRejected : e.isNeededToLoad || e.isLoading || e.isRejected;
                            },
                            getIsShimmerActive(t) {
                                let a = t && e.acqData.get(t);
                                return a ? a.isLoading : e.isLoading;
                            },
                            getIsNeededToLoad(t) {
                                let a = t && e.acqData.get(t);
                                return a ? a.isNeededToLoad : e.isNeededToLoad;
                            },
                            getIsLoadOffersResultSent(t) {
                                let a = t && e.acqData.get(t);
                                return a ? a.isLoadOffersResultSent : e.isLoadOffersResultSent;
                            },
                            getLoadingState(t) {
                                let a = t && e.acqData.get(t);
                                return a ? a.loadingState : e.loadingState;
                            },
                            get serviceSessionId() {
                                return e.sessionId;
                            },
                            getOffersPositionIds(t) {
                                var a, i, l;
                                return (
                                    (t && (null == (l = e.acqData) || null == (i = l.get(t)) || null == (a = i.offers) ? void 0 : a.map((e) => e.offersPositionId))) || []
                                );
                            },
                            getOffer(t, a) {
                                var i;
                                let l = null == (i = e.acqData) ? void 0 : i.get(t);
                                if (l) return a ? l.offers.find((e) => e.place === a) : l.offers[0];
                            },
                            getTarget(e, a) {
                                var i;
                                return (null == (i = t.getOffer(e, a)) ? void 0 : i.target) || 'music';
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            toggleIsFrontSessionStartSentTrue() {
                                e.isFrontSessionStartSent = !0;
                            },
                            toggleIsLoadOffersResultSentTrue() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uM.l.NO_VALUE;
                                t.setAcqData(e, { isLoadOffersResultSent: !0 });
                            },
                            setLoadingState(a) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uM.l.NO_VALUE;
                                t.setAcqData(i, { ...e.acqData.get(i), loadingState: a });
                            },
                            setAcqData(t, a) {
                                var i;
                                e.acqData.set(t, { loadingState: M.G.IDLE, isLoadOffersResultSent: !1, ...(null != (i = e.acqData.get(t)) ? i : {}), ...a });
                            },
                            getData: (0, C.L3)(function* (a) {
                                let { page: i, places: l, communicationId: r, campaignId: s, widgetServiceName: n } = a,
                                    { acqOffers: o, modelActionsLogger: d } = (0, C._$)(e),
                                    { experiments: g } = (0, R.M)(e),
                                    u = g.getEnabledFlags(),
                                    c = i || uM.l.NO_VALUE;
                                if (e.getLoadingState(i) !== M.G.PENDING) {
                                    e.isLoadOffersResultSent = !1;
                                    try {
                                        t.setLoadingState(M.G.PENDING, c);
                                        let a = {};
                                        (r && (a.communication_id = r), s && (a.campaign_id = s));
                                        let i = yield o.getOffers(c, l, { expFlags: u, eventSessionId: e.sessionId, customProperties: a, widgetServiceName: n });
                                        (t.setAcqData(c, {
                                            ...((e) => {
                                                let { sessionId: t, result: a, offerConfigId: i, mlRequestId: l, page: r, language: s } = e;
                                                return (0, C.wg)({ sessionId: t, page: r, offers: a.map(uX), mlRequestId: l, offerConfigId: i, language: s });
                                            })(i),
                                            loadingState: M.G.RESOLVE,
                                            isLoadOffersResultSent: !1,
                                        }),
                                            t.setLoadingState(M.G.RESOLVE, c));
                                    } catch (e) {
                                        (t.setLoadingState(M.G.REJECT, c), d.error(e));
                                    }
                                }
                            }),
                        };
                        return t;
                    })
                    .named('MusicOffers'),
                ca = C.gK.model('Offers', { music: ct });
            var ci = a(95029),
                cl = a(46925);
            let cr = C.gK
                    .model('BrowserInfo', {
                        hasHuaweiAppGallery: C.gK.boolean,
                        inAppBrowser: C.gK.boolean,
                        isBrowser: C.gK.boolean,
                        isMobile: C.gK.boolean,
                        isTablet: C.gK.boolean,
                        isTouch: C.gK.boolean,
                        name: C.gK.maybe(C.gK.string),
                        version: C.gK.maybe(C.gK.string),
                        OSFamily: C.gK.maybe(C.gK.string),
                    })
                    .views((e) => ({
                        get isSafari() {
                            var t;
                            return null == (t = e.name) ? void 0 : t.toLowerCase().includes('safari');
                        },
                    })),
                cs = C.gK
                    .model('Settings', {
                        layout: C.gK.maybeNull(C.gK.enumeration(Object.keys(d7.u))),
                        isLandscape: C.gK.boolean,
                        isMobileLandscapeHeight: C.gK.boolean,
                        platform: C.gK.maybe(C.gK.enumeration(Object.values(cl.O))),
                        browserInfo: cr,
                        liteVersionMode: C.gK.maybe(C.gK.enumeration(Object.values(ci.w))),
                        selectedThumbId: C.gK.enumeration(Object.values(nd.T)),
                    })
                    .views((e) => {
                        let t = {
                            get isMobile() {
                                return e.layout === d7.u.Mobile;
                            },
                            get isWindowsApplication() {
                                return e.platform === cl.O.WINDOWS;
                            },
                            get isMacOSApplication() {
                                return e.platform === cl.O.MACOS;
                            },
                            get isLinuxApplication() {
                                return e.platform === cl.O.LINUX;
                            },
                            get isLiteVersionModeEnabled() {
                                return e.liteVersionMode === ci.w.ENABLED;
                            },
                            get isLiteVersionModeDisabled() {
                                return e.liteVersionMode === ci.w.DISABLED;
                            },
                            get isLiteVersionModeAvailableForToggle() {
                                return t.isLiteVersionModeDisabled || t.isLiteVersionModeEnabled;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setLayout(t) {
                                e.layout = t;
                            },
                            setPlatform(t) {
                                e.platform = t;
                            },
                            setIsLandscape(t) {
                                e.isLandscape = t;
                            },
                            setIsMobileLandscapeHeight(t) {
                                e.isMobileLandscapeHeight = t;
                            },
                            setBrowserInfo(t) {
                                let a = void 0 !== t.version ? String(t.version) : void 0;
                                e.browserInfo = (0, C.wg)({ ...t, version: a });
                            },
                            initializeLiteVersionMode() {
                                if (!(0, C._n)(e)) return;
                                let { containerStorage: a } = (0, C._$)(e),
                                    i = a.get(r0.c.LiteVersionMode);
                                if (i) {
                                    if ('2' !== i.version) return void a.remove(r0.c.LiteVersionMode);
                                    t.setLiteVersionMode(i.mode, !1);
                                }
                            },
                            setLiteVersionMode(t, a) {
                                let { containerStorage: i } = (0, C._$)(e);
                                ((e.liteVersionMode = t), a && i.set(r0.c.LiteVersionMode, { version: '2', mode: t }));
                            },
                            setCustomPlayerThumb(t) {
                                let { localStorage: a } = (0, C._$)(e),
                                    i = t;
                                (Object.values(nd.T).includes(t) || (i = nd.T.DEFAULT), (e.selectedThumbId = i));
                                let l = a.get(r0.c.CustomPlayerThumbConfig);
                                a.set(r0.c.CustomPlayerThumbConfig, { ...l, selectedThumbId: i, version: '1' });
                            },
                            initializeCustomPlayerThumb() {
                                if (!(0, C._n)(e)) return;
                                let { user: a } = (0, R.M)(e),
                                    { localStorage: i } = (0, C._$)(e),
                                    l = i.get(r0.c.CustomPlayerThumbConfig);
                                if (l) {
                                    if ('1' !== l.version || !a.hasPlus) {
                                        ((e.selectedThumbId = nd.T.DEFAULT), i.remove(r0.c.CustomPlayerThumbConfig));
                                        return;
                                    }
                                    if (l.selectedThumbId === nd.T.BRANDED && a.hasPlus) return void t.setCustomPlayerThumb(nd.T.DEFAULT);
                                    t.setCustomPlayerThumb(l.selectedThumbId);
                                }
                            },
                        };
                        return t;
                    }),
                cn = C.gK.model('Root', {
                    isRootModel: C.gK.optional(C.gK.literal(!0), !0),
                    experiments: uC,
                    user: uv,
                    freeAccess: d0,
                    wizard: oJ,
                    collection: rq,
                    disclaimersDictionary: uL,
                    main: sr,
                    settings: cs,
                    currentClipInfo: oH,
                    currentTrackInfo: dC,
                    album: ej,
                    artist: l9,
                    library: uw,
                    sonataState: dN,
                    playlist: sI,
                    albumCPA: P,
                    slides: uu,
                    vibe: oC,
                    multivibe: o2,
                    search: ne,
                    vibeSettings: d$,
                    pinsCollection: n3,
                    landingBlockEntities: nF,
                    contextMenuPlaylists: rv,
                    contextMenuAddTracksToPlaylist: o8,
                    createPlaylist: d4,
                    location: uG,
                    nonMusic: sd,
                    disclaimerModalState: uI,
                    communication: nC,
                    trailer: oN,
                    modals: nY,
                    landing: lG,
                    landingSdkModel: nx,
                    fullscreenPlayer: oE,
                    freePlayerAccess: n7,
                    fullscreenVideoPlayer: oD,
                    releaseNotes: oz,
                    trackComplaint: df,
                    trackLyrics: dR,
                    ugcUploadCenter: dB,
                    paymentWidgetModal: d6,
                    offers: ca,
                    quality: oS,
                    kids: sa,
                    slam: db,
                    advert: n6,
                    track: nt,
                    continueListen: nk,
                    familyInvite: nw,
                    redAlert: gt,
                    shareIframe: dy,
                    paywall: n2,
                    downloadMobileApp: nD,
                    advertBanners: nm,
                    desktopPaywall: d9,
                    concerts: r9,
                    concert: rQ,
                    wheel: oX,
                    words: dZ,
                    lumen: d8,
                }),
                co = {
                    experiments: { loadingState: M.G.IDLE, experiments: {}, overwrittenExperiments: {} },
                    disclaimersDictionary: { loadingState: M.G.IDLE },
                    user: { account: { loadingState: M.G.IDLE, data: {} }, settings: { loadingState: M.G.IDLE } },
                    freeAccess: {},
                    wizard: { loadingState: M.G.IDLE, modal: {}, introModal: {}, savedLikedArtists: [], likedArtists: [], unlikedArtists: [] },
                    collection: {
                        albums: { pagesLoader: {}, upcomingAlbums: { loadingState: M.G.IDLE } },
                        playlists: {
                            playlistsLiked: { pagesLoader: {} },
                            playlistsCreated: { pagesLoader: {} },
                            activeTabIndex: rc.a.CREATED,
                            tabs: [rc.a.CREATED, rc.a.LIKED],
                        },
                        artists: { pagesLoader: {}, topArtists: { loadingState: M.G.IDLE, items: [] } },
                        landing: { loadingState: M.G.IDLE, tabs: { loadingState: M.G.IDLE } },
                        shelf: { recentlyPlayed: { loadingState: M.G.IDLE }, newEpisodes: { loadingState: M.G.IDLE }, liked: { loadingState: M.G.IDLE } },
                        nonMusicLiked: { loadingState: M.G.IDLE, items: [] },
                        dislikes: { artists: { loadingState: M.G.IDLE }, tracks: { loadingState: M.G.IDLE } },
                        kids: { albums: { pagesLoader: {} }, playlists: { pagesLoader: {} }, tracks: { pagesLoader: {} } },
                        shelfRecentlyPlayed: { pagesLoader: {} },
                        shelfLiked: { pagesLoader: {} },
                        clips: { loadingState: M.G.IDLE, clipsWillLike: { loadingState: M.G.IDLE } },
                        vibeRooms: { loadingState: M.G.IDLE },
                    },
                    main: { specialHeaderLoadingState: M.G.IDLE, landing: { loadingState: M.G.IDLE, tabs: { loadingState: M.G.IDLE } } },
                    nonMusic: {
                        landing: { loadingState: M.G.IDLE, tabs: { loadingState: M.G.IDLE } },
                        albums: { loadingState: M.G.IDLE },
                        categoryPlaylistsSubpage: { loadingState: M.G.IDLE, pagesLoader: {} },
                    },
                    kids: {
                        landing: { loadingState: M.G.IDLE, tabs: { loadingState: M.G.IDLE } },
                        kidsEditorialPlaylistSubpage: { loadingState: M.G.IDLE, pagesLoader: {} },
                        kidsEditorialAlbumSubpage: { loadingState: M.G.IDLE, pagesLoader: {} },
                    },
                    settings: {
                        layout: null,
                        isLandscape: !1,
                        isMobileLandscapeHeight: !1,
                        browserInfo: {
                            name: void 0,
                            version: void 0,
                            OSFamily: void 0,
                            isMobile: !1,
                            isTablet: !1,
                            isTouch: !1,
                            isBrowser: !1,
                            inAppBrowser: !1,
                            hasHuaweiAppGallery: !1,
                        },
                        selectedThumbId: nd.T.DEFAULT,
                    },
                    currentClipInfo: { clipLoadingState: M.G.IDLE, creditsLoadingState: M.G.IDLE, id: null, clip: null, credits: null, modal: {} },
                    currentTrackInfo: {
                        trackLoadingState: M.G.IDLE,
                        creditsLoadingState: M.G.IDLE,
                        descriptionLoadingState: M.G.IDLE,
                        id: null,
                        albumId: null,
                        isUGC: null,
                        fullTrack: null,
                        credits: null,
                        modal: {},
                    },
                    trackComplaint: { trackId: null, modal: {} },
                    trackLyrics: { loadingState: M.G.IDLE, lyrics: null, lyricId: null, externalLyricId: null, track: null, modal: {} },
                    album: {
                        loadingState: M.G.IDLE,
                        items: [],
                        meta: null,
                        otherAlbumVersions: [],
                        allTracksUnfinished: !1,
                        donations: { loadingState: M.G.IDLE, items: [] },
                        latestGenreAlbums: { loadingState: M.G.IDLE, items: [] },
                        otherArtistAlbums: { loadingState: M.G.IDLE, items: [] },
                        relatedContent: { loadingState: M.G.IDLE, items: [] },
                        similarEntities: {
                            id: 'similar-entities',
                            type: ec.t.COLLECTION_SIMILAR_ENTITIES,
                            loadingState: eu.IDLE,
                            isNotFound: !1,
                            hasSentAnalyticsOnLoaded: !1,
                            meta: {},
                        },
                    },
                    albumCPA: {},
                    artist: {
                        meta: null,
                        landing: { loadingState: M.G.IDLE, tabs: { loadingState: M.G.IDLE } },
                        fullTracksListSubpage: { loadingState: M.G.IDLE },
                        albumsSubpage: { pagesLoader: {} },
                        concertsSubpage: { loadingState: M.G.IDLE },
                        similarArtistsSubPage: { loadingState: M.G.IDLE },
                        familiarSubpage: { loadingState: M.G.IDLE },
                        clipsSubpage: { pagesLoader: {} },
                        commonSubPage: {},
                        offlineArtist: { loadingState: M.G.IDLE, trackIds: { loadingState: M.G.IDLE }, downloadedTracks: { loadingState: M.G.IDLE } },
                        infoLoadingState: { loadingState: M.G.IDLE },
                    },
                    library: { loadingState: M.G.IDLE, tracks: {}, artists: {}, playlists: {}, albums: {}, clips: {} },
                    sonataState: {
                        contextId: null,
                        contextType: null,
                        entityMeta: null,
                        status: ot.MT.IDLE,
                        canMoveBackward: !1,
                        canMoveForward: !1,
                        canSpeed: !1,
                        canChangeRepeatMode: !0,
                        repeatMode: dI.pM.NONE,
                        quality: dK.e.BALANCED,
                        canShuffle: !0,
                        shuffle: !1,
                        areCoresRegistered: !1,
                        isVHCoreRegistered: !1,
                        isCrossFadeEnabled: !0,
                    },
                    playlist: {
                        loadingState: M.G.IDLE,
                        meta: null,
                        items: [],
                        initialItems: [],
                        similarPlaylists: [],
                        filters: { loadingState: M.G.IDLE },
                        editorFeature: { shouldShowDuplicate: !1, shouldShowGenre: !1, shouldShowMajor: !1, colorMajorMap: {}, duplicate: {} },
                        search: { loadingState: M.G.IDLE, text: '' },
                        similarEntities: {
                            id: 'similar-entities',
                            type: ec.t.COLLECTION_SIMILAR_ENTITIES,
                            loadingState: eu.IDLE,
                            isNotFound: !1,
                            hasSentAnalyticsOnLoaded: !1,
                            meta: {},
                        },
                    },
                    slides: {
                        userSlidesLoadingState: M.G.IDLE,
                        artistSlidesLoadingState: M.G.IDLE,
                        podcastSlidesLoadingState: M.G.IDLE,
                        specialSlidesLoadingState: M.G.IDLE,
                        kidsSlidesLoadingState: M.G.IDLE,
                        userItems: [],
                        artistItems: [],
                        podcastItems: [],
                        specialItems: [],
                        kidsItems: [],
                        isMuted: !1,
                    },
                    vibe: { loadingState: M.G.IDLE, vibeResetLoadingState: M.G.IDLE, isApplying: !1 },
                    multivibe: {
                        invitationRoom: null,
                        duplicateRoomId: null,
                        createdRoomId: null,
                        errorName: null,
                        promoModal: {},
                        inviteModal: {},
                        disabledRoomInfoModal: {},
                        disabledRoomId: null,
                        loadingState: M.G.IDLE,
                    },
                    search: {
                        searchCorrectedText: null,
                        loadingState: M.G.IDLE,
                        historyPage: { loadingState: M.G.IDLE, items: [] },
                        mixes: { loadingState: M.G.IDLE, items: [] },
                        landing: { loadingState: M.G.IDLE, tabs: { loadingState: M.G.IDLE } },
                        history: { loadingState: M.G.IDLE },
                        pagesLoader: {},
                    },
                    vibeSettings: { loadingState: M.G.IDLE, modal: {} },
                    pinsCollection: { loadingState: M.G.IDLE, index: {} },
                    landingBlockEntities: { loadingState: M.G.IDLE },
                    contextMenuPlaylists: { pagesLoader: {} },
                    contextMenuAddTracksToPlaylist: { playlistsLoadingState: { loadingState: M.G.IDLE }, tracksLoadingState: { loadingState: M.G.IDLE } },
                    createPlaylist: {},
                    location: {},
                    disclaimerModalState: { loadingState: M.G.IDLE },
                    trailer: {
                        loadingState: M.G.IDLE,
                        withAnimation: !0,
                        shouldAutoStartPlaying: !0,
                        shouldSendEventOnTracksShowed: !0,
                        modal: {},
                        sonataStatusBeforeTrailerStart: ot.MT.IDLE,
                        isManuallyPaused: !0,
                        state: { contextId: null, contextType: null, entityMeta: null, status: ot.MT.IDLE },
                    },
                    communication: { loadingState: M.G.IDLE },
                    modals: {
                        disclaimerModal: {},
                        shortcutsModal: {},
                        aboutAppModal: {},
                        overviewModal: {},
                        ugcTrackEditModal: { modal: {} },
                        crackdownModal: {},
                        overwrittenExperimentsModal: {},
                        overwrittenMocksModal: {},
                        buySubscriptionModal: { isOpened: !0 },
                        promoLandingBuySubscriptionModal: {},
                        clearMemoryModal: {},
                        imageSliderModal: { modal: {} },
                        artistAboutModal: { loadingState: M.G.IDLE, modal: {} },
                        bestRecommedationModal: {},
                    },
                    landing: { loadingState: M.G.IDLE, tabs: { loadingState: M.G.IDLE } },
                    landingSdkModel: { loadingState: M.G.IDLE, tabs: { loadingState: M.G.IDLE } },
                    fullscreenPlayer: { modal: {}, syncLyrics: { loadingState: M.G.IDLE }, playQueue: {} },
                    freePlayerAccess: {},
                    fullscreenVideoPlayer: {
                        modal: {},
                        ids: [],
                        loadingState: M.G.IDLE,
                        sonataStatusBeforeClipStart: ot.MT.IDLE,
                        withAnimation: !0,
                        state: { contextId: null, contextType: null, entityMeta: null, status: ot.MT.IDLE, canMoveBackward: !1, canMoveForward: !1 },
                    },
                    advert: { data: null, isAdvertPlaying: !0, isAdvertShown: !1, isAdvertPlaybackCreated: !1 },
                    ugcUploadCenter: { checkProcessingTracksAttempts: 0, notifications: {} },
                    paymentWidgetModal: {
                        modal: {},
                        target: '',
                        serviceSessionId: '',
                        tariffOfferName: '',
                        offersBatchId: '',
                        offersPositionIds: '',
                        isSilent: !1,
                        status: d5.c.IDLE,
                    },
                    offers: { music: { loadingState: M.G.IDLE } },
                    quality: { modal: {} },
                    releaseNotes: { modal: {} },
                    slam: { networkStatus: {} },
                    track: { loadingState: M.G.IDLE, withAnimation: !0, shouldSendEventOnPlusButtonShowed: !0 },
                    familyInvite: { info: { loadingState: M.G.IDLE }, acceptanceLoadingState: M.G.IDLE, modal: {}, step: nP._.INFO },
                    continueListen: {},
                    redAlert: { loadingState: M.G.IDLE },
                    shareIframe: { modal: {} },
                    paywall: { modal: {}, freemiumCollectionBarrier: !1 },
                    downloadMobileApp: { modal: {} },
                    advertBanners: {
                        banners: {
                            topAdvertBanner: { type: na.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                            sideAdvertBanner: { type: na.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                            brandedPlaylistBanner: { type: na.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                            brandedPlayerBanner: { type: na.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0, modal: {} },
                            brandedEntityAxeBanner: { type: na.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                        },
                    },
                    desktopPaywall: {},
                    concerts: {
                        loadingState: M.G.IDLE,
                        config: { loadingState: M.G.IDLE },
                        landing: { loadingState: M.G.IDLE, tabs: { loadingState: M.G.IDLE } },
                        locationSelection: { loadingState: M.G.IDLE, modal: {} },
                    },
                    concert: { loadingState: M.G.IDLE, landing: { loadingState: M.G.IDLE, tabs: { loadingState: M.G.IDLE } } },
                    wheel: { loadingState: M.G.IDLE, items: [] },
                    words: { loadingState: M.G.IDLE, bigCardLoadingState: { loadingState: M.G.IDLE }, bigCardFullscreen: {} },
                    lumen: { loadingState: M.G.IDLE, status: null, themes: null },
                },
                cd = new Set([
                    'settings',
                    'lumen',
                    'sonataState',
                    'offers',
                    'modals',
                    'shareIframe',
                    'paywall',
                    'downloadMobileApp',
                    'disclaimerModalState',
                    'fullscreenPlayer',
                    'fullscreenVideoPlayer',
                    'advertBanners',
                    'redAlert',
                    'communication',
                    'desktopPaywall',
                ]);
            (0, K.eO)(!1);
            let cg = (e) => {
                    let { nonce: t, patchesRef: a } = e;
                    return (
                        (0, I.useServerInsertedHTML)(() => {
                            if (!(null == a ? void 0 : a.current)) return null;
                            let e = a.current.filter(
                                (e) =>
                                    !((e) => {
                                        if (!e.startsWith('/')) return !1;
                                        let t = e.indexOf('/', 1),
                                            a = e.slice(1, -1 === t ? void 0 : t);
                                        return cd.has(a);
                                    })(e.path),
                            );
                            return ((a.current = []), 0 === e.length)
                                ? null
                                : (0, v.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: '(window.__STATE_PATCHES__ = window.__STATE_PATCHES__ || []).push('
                                              .concat((0, L.Gr)(e), "); window.dispatchEvent(new Event('")
                                              .concat(T.s, "'));"),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                cu = () => {
                    var e;
                    let t = null != (e = window.__STATE_PATCHES__) ? e : [];
                    return (delete window.__STATE_PATCHES__, t);
                },
                cc = (e) => {
                    let { children: t, nonce: a } = e,
                        i = (0, A.Y)(),
                        { store: l, patchesRef: r } = (0, h.m)({ createStore: () => cn.create(co, i), getPendingPatchBatches: cu, patchesUpdatedEventName: T.s });
                    return (0, v.jsxs)(v.Fragment, { children: [(0, v.jsx)(cg, { nonce: a, patchesRef: r }), (0, v.jsx)(N.P.Provider, { value: l, children: t })] });
                };
        },
        35005: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => n });
            var i = a(28410),
                l = a(68093),
                r = a(69274),
                s = a(1645);
            let n = (e, t) => {
                var a, n, o, d;
                let { uri: g, color: u } = e.cover || {};
                return (0, i.wg)({
                    id: e.id,
                    title: e.concertTitle,
                    city: e.city,
                    place: e.place,
                    datetime: e.datetime && (0, r.A)(e.datetime),
                    contentRating: e.contentRating,
                    dataSessionId: e.dataSessionId,
                    cover: { uri: g, color: u },
                    rank: e.rank,
                    cashbackTitle: null == (a = e.cashback) ? void 0 : a.title,
                    cashbackValuePercent: null == (n = e.cashback) ? void 0 : n.valuePercent,
                    price: (0, s.J)(t),
                    eventKind: null != (d = null == (o = e.eventInfo) ? void 0 : o.type) ? d : l.Z.UNSPECIFIED,
                });
            };
        },
        35955: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => i });
            let i = (e, t) => {
                let a = Number(t);
                return !Number.isNaN(a) && a > 0 && a < e.length ? a : 0;
            };
        },
        36054: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => i });
            let i = 36;
        },
        36699: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => i });
            var i = (function (e) {
                return ((e.SYNC_LYRICS = 'syncLyrics'), (e.PLAY_QUEUE = 'playQueue'), e);
            })({});
        },
        36786: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => s });
            var i = a(28410),
                l = a(78111),
                r = a(99670);
            let s = i.gK
                .model('Sort', { sortBy: i.gK.maybe(i.gK.enumeration(Object.values(l.g))), sortOrder: i.gK.maybe(i.gK.enumeration(Object.values(r.x))) })
                .actions((e) => ({
                    setSortBy(t) {
                        e.sortBy = t;
                    },
                    setSortOrder(t) {
                        e.sortOrder = t;
                    },
                }));
        },
        37045: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => i });
            var i = (function (e) {
                return ((e.IDLE = 'idle'), (e.SUCCESS = 'success'), (e.ERROR = 'error'), e);
            })({});
        },
        37394: (e, t, a) => {
            'use strict';
            a.d(t, { ContainerProvider: () => m });
            var i = a(25839),
                l = a(74631),
                r = a(93588),
                s = a(36484),
                n = a(62562);
            let o = (0, l.cache)(async (e, t, i, l, s, n, o, d, g, u, c, m, p, y, E, S) => {
                    let b = (0, r.IU)(t);
                    {
                        let [{ env: t, publicConfig: i }, { createDesktopContainer: l }] = await Promise.all([
                            b,
                            Promise.all([a.e(1817), a.e(7911), a.e(5637), a.e(2209), a.e(9086), a.e(9138)]).then(a.bind(a, 19138)),
                        ]);
                        return l({ tld: e, env: t, publicConfig: i, customApiPrefixUrl: y });
                    }
                }),
                d = null;
            var g = a(16714);
            let u = async (e) => {
                    var t;
                    let { baseSetup: a } = e,
                        i = await (null != d ||
                            (d = o(
                                ...(function (e) {
                                    let {
                                            backendHostTld: t,
                                            env: a,
                                            forwardedForY: i,
                                            tracestate: l,
                                            traceparent: r,
                                            icookie: s,
                                            serverDetectedLocale: n,
                                            changeLanguageToken: o,
                                            userAgent: d,
                                            incomingRequestId: g,
                                            browserInfo: u,
                                            customApiPrefixUrl: c,
                                            customApiToken: m,
                                            requestUrl: p,
                                        } = e,
                                        { rawCookieString: y } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return [t, a, i, l, r, s, n, o, d, g, y, u.name, u.version, c, m, p];
                                })(a),
                            )),
                        d);
                    return (await i.get(s.Xc).loadDictionary(), await (null == (t = await i.get(s.RG)) ? void 0 : t()), i);
                },
                c = (e) => {
                    let { children: t, containerLoader: a } = e,
                        r = (0, l.use)(a);
                    return (0, i.jsx)(n.B.Provider, { value: r, children: t });
                },
                m = (e) => {
                    let { children: t, baseSetup: a } = e,
                        r = u({ baseSetup: a });
                    return (0, i.jsx)(l.Suspense, { fallback: (0, i.jsx)(g.MainSuspenseLoader, {}), children: (0, i.jsx)(c, { containerLoader: r, children: t }) });
                };
        },
        37982: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => i });
            var i = (function (e) {
                return ((e.IntroPlan = 'IntroPlan'), (e.IntroUntilPlan = 'IntroUntilPlan'), (e.TrialPlan = 'TrialPlan'), (e.TrialUntilPlan = 'TrialUntilPlan'), e);
            })({});
        },
        39985: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => r });
            var i = a(35522);
            let l = [i.t.ARTIST_POPULAR_TRACKS_AND_RELEASES, i.t.FAMILIAR_YOU_AND_ARTIST_PICK],
                r = (e) => l.includes(e.type);
        },
        40480: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => l });
            var i = a(25895);
            let l = (e, t, a) =>
                (0, i.u)(t ? '/album/:albumId/track/:trackId' : '/track/:trackId', { params: t ? { albumId: t, trackId: e } : { trackId: e }, query: a });
        },
        41392: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { x: () => i }),
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
                })(i || (i = {})));
        },
        41871: (e, t, a) => {
            'use strict';
            a.d(t, { W4: () => r, qV: () => i, yc: () => l });
            let i = Symbol(),
                l = Symbol(),
                r = Symbol();
        },
        45162: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { J: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        47052: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => l });
            var i = a(28410);
            let l = i.gK
                .model('BaseModal', { isOpened: i.gK.optional(i.gK.boolean, !1) })
                .volatile((e) => ({ wasOpened: e.isOpened }))
                .views((e) => ({
                    get wasClosed() {
                        return e.wasOpened && !e.isOpened;
                    },
                }))
                .actions((e) => {
                    let t = {
                        onOpenChange(t) {
                            ((e.isOpened = t), t && (e.wasOpened = !0));
                        },
                        open() {
                            t.onOpenChange(!0);
                        },
                        close() {
                            t.onOpenChange(!1);
                        },
                    };
                    return t;
                });
        },
        47306: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i });
            var i = (function (e) {
                return ((e.ALBUM = 'album'), (e.ARTIST = 'artist'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), e);
            })({});
        },
        48127: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => i });
            let i = { ABOUT: 'about', TRACKS: 'track-list' };
        },
        48552: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => l });
            var i = a(28410);
            let l = i.gK.model('CustomPlayerThumb', { href: i.gK.string, width: i.gK.number, height: i.gK.number });
        },
        50222: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => i });
            let i = 20;
        },
        50497: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => l });
            var i = a(28410);
            let l = (e) => {
                var t;
                return {
                    id: e.id,
                    title: e.title,
                    weblink: null != (t = e.action.weblink) ? t : '',
                    covers: (0, i.wg)(e.covers || []),
                    imagesLayoutType: e.style.imagesLayoutType,
                };
            };
        },
        51514: (e, t, a) => {
            'use strict';
            a.d(t, { M1: () => i, UM: () => l, q7: () => s, yx: () => r });
            let i = 'user:onyourwave',
                l = ['activity'],
                r = 'diversity:reshuffle',
                s = 'multivibe';
        },
        52669: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { $: () => i }),
                (function (e) {
                    ((e.TOP = 'top'),
                        (e.TRACK = 'track'),
                        (e.CLIP = 'clip'),
                        (e.ALBUM = 'album'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.KIDS_MUSIC = 'kids-music'),
                        (e.KIDS_PLAYLIST = 'kids-playlist'),
                        (e.SPOKEN_PLAYLIST = 'spoken-playlist'),
                        (e.PODCAST = 'podcast'),
                        (e.BOOK = 'book'),
                        (e.KIDS_PODCAST = 'kids-podcast'),
                        (e.KIDS_BOOK = 'kids-book'),
                        (e.WAVES = 'waves'),
                        (e.CONCERT = 'concert'));
                })(i || (i = {})));
        },
        52807: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { R: () => i }),
                (function (e) {
                    ((e.Music = 'music'),
                        (e.DownloadedMusic = 'downloadedMusic'),
                        (e.VibeTrack = 'vibeTrack'),
                        (e.Generative = 'generative'),
                        (e.Unknown = 'unknown'),
                        (e.SmartPreview = 'smartPreview'),
                        (e.Clip = 'clip'),
                        (e.Radio = 'fm_radio'));
                })(i || (i = {})));
        },
        53712: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => l });
            var i = a(25895);
            let l = {
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
                muzmarket: (0, i.u)('/muzmarket'),
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                multivibe: (0, i.u)('/multivibe'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        55491: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => i });
            var i = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.ARTIST = 'artist'),
                    (e.PLAYLIST = 'playlist'),
                    (e.TRACK = 'track'),
                    (e.CLIP = 'clip'),
                    (e.LABEL = 'label'),
                    (e.CONCERT = 'concert'),
                    e
                );
            })({});
        },
        55538: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { a: () => i }),
                (function (e) {
                    ((e.LIKE = 'like'), (e.DISLIKE = 'dislike'), (e.NEUTRAL = 'neutral'));
                })(i || (i = {})));
        },
        56829: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { _: () => i }),
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
        57263: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { b: () => i }),
                (function (e) {
                    ((e.ALBUM = 'ALBUM'),
                        (e.ARTIST = 'ARTIST'),
                        (e.PLAYLIST = 'PLAYLIST'),
                        (e.WAVE = 'WAVE'),
                        (e.CLIP = 'CLIP'),
                        (e.GENERATIVE = 'GENERATIVE'),
                        (e.OTHER = 'OTHER'));
                })(i || (i = {})));
        },
        57483: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => l });
            var i = a(28410);
            let l = i.gK.model('Pager', { page: i.gK.number, perPage: i.gK.number, total: i.gK.number, lastPage: i.gK.maybe(i.gK.boolean) });
        },
        58245: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => l, d: () => i });
            let i = 20,
                l = 1;
        },
        58268: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => l });
            var i = a(28410);
            let l = (e) => (0, i.wg)({ position: e.position, progress: e.progress });
        },
        58958: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { n: () => i }),
                (function (e) {
                    ((e.ALBUM = 'album_tab'), (e.PRESAVED_ALBUM = 'presaved_album_tab'));
                })(i || (i = {})));
        },
        61342: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => i });
            var i = (function (e) {
                return ((e.COLLECTION = 'collection'), (e.VIBE = 'vibe'), e);
            })({});
        },
        62560: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { E: () => i }),
                (function (e) {
                    ((e.SHOW_AND_LOAD = 'SHOW_AND_LOAD'), (e.LOAD_AND_SHOW = 'LOAD_AND_SHOW'));
                })(i || (i = {})));
        },
        65455: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => l });
            var i = a(78111);
            let l = (e) => !!e && (e === i.g.RATING || e === i.g.YEAR);
        },
        66881: (e, t, a) => {
            'use strict';
            a.d(t, { Rk: () => n, VN: () => r, nd: () => s, vY: () => l });
            var i = a(48127);
            let l = 10,
                r = 1,
                s = [i.O.ABOUT, i.O.TRACKS],
                n = 5;
        },
        68093: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { Z: () => i }),
                (function (e) {
                    ((e.CONCERT = 'concert'), (e.FESTIVAL = 'festival'), (e.TRIBUTE = 'tribute'), (e.MUSICAL = 'musical'), (e.UNSPECIFIED = 'unspecified'));
                })(i || (i = {})));
        },
        68103: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { n: () => i }),
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
                })(i || (i = {})));
        },
        68406: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => i });
            var i = (function (e) {
                return (
                    (e.MUSIC_PAYWALL_SCREEN = 'music_paywall_screen'),
                    (e.MUSIC_LANDING_SCREEN_PAY = 'music_landing_screen_pay'),
                    (e.HOME_SCREEN = 'home_screen'),
                    (e.SIDEBAR = 'sidebar'),
                    (e.CRACKDOWN_SCREEN = 'crackdown_screen'),
                    (e.MOBILE_POPUP = 'mobile_popup'),
                    (e.NO_VALUE = 'NO_VALUE'),
                    (e.MUSIC_CPA_ALBUM = 'music_cpa_album'),
                    (e.HEADER = 'music_header'),
                    (e.MUSIC_DEEPLINK_SCREEN = 'music_deeplink_screen'),
                    (e.ARTIST_PAGE = 'artist_page'),
                    (e.ALBUM_PAGE = 'album_page'),
                    (e.PLAYLIST_PAGE = 'playlist_page'),
                    (e.LABEL_PAGE = 'label_page'),
                    (e.TRACK_PAGE = 'track_page'),
                    (e.ENTITY_HEADER = 'entity_header'),
                    e
                );
            })({});
        },
        69274: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => l });
            let i = /[+-]\d{2}:?\d{2}/,
                l = (e) => (null == e ? void 0 : e.replace(i, ''));
        },
        69635: (e, t, a) => {
            'use strict';
            a.d(t, { a: () => o });
            var i = a(28410),
                l = a(51751),
                r = a(44806),
                s = a(26847);
            let n = i.gK.model('Price', { value: i.gK.number, currency: i.gK.string }),
                o = i.gK
                    .model('Concert', {
                        id: i.gK.string,
                        dataSessionId: i.gK.maybe(i.gK.string),
                        datetime: i.gK.maybe(i.gK.string),
                        city: i.gK.maybe(i.gK.string),
                        place: i.gK.maybe(i.gK.string),
                        contentRating: i.gK.maybe(i.gK.string),
                        price: i.gK.maybe(n),
                        cashbackTitle: i.gK.maybe(i.gK.string),
                        cashbackValuePercent: i.gK.maybe(i.gK.number),
                        title: i.gK.maybe(i.gK.string),
                        cover: i.gK.maybe(s.$),
                        rank: i.gK.maybe(i.gK.number),
                        eventKind: i.gK.maybe(i.gK.string),
                    })
                    .views((e) => ({
                        get isCashbackExperimentEnabled() {
                            let { experiments: t } = (0, l.M)(e);
                            return t.checkExperiment(r.z.WebNextConcertsCashback, 'on');
                        },
                        get isIdentityExperimentEnabled() {
                            let { experiments: t } = (0, l.M)(e);
                            return t.checkExperiment(r.z.WebNextConcertsIdentityEventType, 'on');
                        },
                    }))
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
        },
        70969: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { z: () => i }),
                (function (e) {
                    ((e.ROOM_DUPLICATION = 'ROOM_DUPLICATION'), (e.ROOM_NOT_FOUND = 'ROOM_NOT_FOUND'), (e.ROOM_LIMIT_EXCEEDED = 'ROOM_LIMIT_EXCEEDED'));
                })(i || (i = {})));
        },
        71630: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => i });
            var i = (function (e) {
                return (
                    (e.IDLE = 'IDLE'),
                    (e.PREPARE = 'PREPARE'),
                    (e.UPLOADING = 'UPLOADING'),
                    (e.PROCESSING = 'PROCESSING'),
                    (e.RESOLVE = 'RESOLVE'),
                    (e.REJECT = 'REJECT'),
                    (e.CANCELLED = 'CANCELLED'),
                    e
                );
            })({});
        },
        71683: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => i });
            let i = (e) => ''.concat(e.wheelId, '-').concat(e.eventType, '-').concat(e.item.id);
        },
        72233: (e, t, a) => {
            'use strict';
            a.d(t, { u2: () => d, rl: () => i, mz: () => o, yq: () => u, zE: () => l });
            var i,
                l,
                r = a(58025),
                s = a(36432);
            (!(function (e) {
                ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'));
            })(i || (i = {})),
                (function (e) {
                    ((e.HIDDEN = 'HIDDEN'), (e.VISIBLE = 'VISIBLE'));
                })(l || (l = {})));
            class n {
                attachSkeleton(e) {
                    (this.disconnect(), (this.skeleton = e));
                }
                observe(e) {
                    let { element: t, id: a } = e;
                    t && this.detector && (this.targetsToIdMap.set(t, a), this.detector.observe(t));
                }
                unobserve(e) {
                    let { element: t } = e;
                    t && this.detector && (this.targetsToIdMap.delete(t), this.detector.unobserve(t));
                }
                observeList(e) {
                    return this.virtualizedMetadataLoader
                        ? (this.stopObservingList(),
                          (this.listItems = e.items),
                          (this.potentialBlocksIndexes = this.calculatePotentialBlocksIndexes()),
                          this.virtualizedMetadataLoader.observeList({ ...e, items: this.getPotentialItems(), onVisibilityChange: this.onListVisibilityChange }),
                          this.subscribeToBlocksLoadingStatus(),
                          () => this.stopObservingList())
                        : () => void 0;
                }
                disconnect() {
                    var e;
                    (this.stopObservingList(), null == (e = this.detector) || e.disconnect(), this.targetsToIdMap.clear(), (this.skeleton = void 0));
                }
                calculatePotentialBlocksIndexes() {
                    let e = [];
                    return (
                        this.listItems.forEach((t, a) => {
                            var l;
                            let r = null == (l = this.skeleton) ? void 0 : l.getNodeById(t.id);
                            r && r.state.loadingStatus.value !== i.REJECT && e.push(a);
                        }),
                        e
                    );
                }
                getPotentialItems() {
                    let e = [];
                    return (
                        this.potentialBlocksIndexes.forEach((t) => {
                            let a = this.listItems[t];
                            a && e.push(a);
                        }),
                        e
                    );
                }
                subscribeToBlocksLoadingStatus() {
                    this.listItems.forEach((e) => {
                        var t;
                        let a = null == (t = this.skeleton) ? void 0 : t.getNodeById(e.id);
                        if (!a) return;
                        let l = a.state.loadingStatus.value === i.REJECT,
                            r = a.state.loadingStatus.onChange(() => {
                                let e = a.state.loadingStatus.value === i.REJECT;
                                e !== l && ((l = e), this.updatePotentialBlocksIndexes());
                            });
                        this.blocksLoadingStatusUnsubs.push(r);
                    });
                }
                stopObservingList() {
                    var e;
                    (this.blocksLoadingStatusUnsubs.forEach((e) => e()),
                        (this.blocksLoadingStatusUnsubs = []),
                        null == (e = this.virtualizedMetadataLoader) || e.unobserveList(),
                        (this.listItems = []),
                        (this.potentialBlocksIndexes = []));
                }
                constructor({ visibilityConfig: e }) {
                    if (
                        ((0, r._)(this, 'detector', void 0),
                        (0, r._)(this, 'virtualizedMetadataLoader', void 0),
                        (0, r._)(this, 'skeleton', void 0),
                        (0, r._)(this, 'targetsToIdMap', new Map()),
                        (0, r._)(this, 'listItems', []),
                        (0, r._)(this, 'potentialBlocksIndexes', []),
                        (0, r._)(this, 'blocksLoadingStatusUnsubs', []),
                        (0, r._)(this, 'updatePotentialBlocksIndexes', () => {
                            var e;
                            let t = this.potentialBlocksIndexes,
                                a = this.calculatePotentialBlocksIndexes();
                            ((this.potentialBlocksIndexes = a),
                                (t.length === a.length && t.every((e, t) => e === a[t])) ||
                                    null == (e = this.virtualizedMetadataLoader) ||
                                    e.updateItems(this.getPotentialItems()));
                        }),
                        (0, r._)(this, 'setNodeVisibility', (e, t) => {
                            var a;
                            let i = null == (a = this.skeleton) ? void 0 : a.getNodeById(e);
                            if (!i) return;
                            let r = t ? l.VISIBLE : l.HIDDEN;
                            i.state.visibilityStatus.value !== r && (i.state.visibilityStatus.value = r);
                        }),
                        (0, r._)(this, 'onListVisibilityChange', (e) => {
                            e.forEach((e) => {
                                this.setNodeVisibility(e.id, e.isVisible);
                            });
                        }),
                        (0, r._)(this, 'onElementsVisibilityChange', (e) => {
                            for (let t of e) {
                                let e = this.targetsToIdMap.get(t.target);
                                e && this.setNodeVisibility(e, t.isIntersecting);
                            }
                        }),
                        'listVisibility' === e.type)
                    ) {
                        this.virtualizedMetadataLoader = e.virtualizedMetadataLoader;
                        return;
                    }
                    this.detector = e.detectorFactory.create({ onVisibilityChange: this.onElementsVisibilityChange });
                }
            }
            class o {
                async loadAndCreateSkeleton(e) {
                    let { data: t, preloadedBlocksMeta: a } = e,
                        i = this.skeletonFactory.create({ data: t });
                    (this.visibilityController && this.visibilityController.attachSkeleton(i),
                        await i.loadSkeletonMeta(),
                        i.createSkeletonTree(a),
                        i.onNodesVisibilityChange(),
                        (this.skeleton = i));
                }
                createSkeleton(e) {
                    let { data: t, preloadedBlocksMeta: a } = e,
                        i = this.skeletonFactory.create({ data: t });
                    (this.visibilityController && this.visibilityController.attachSkeleton(i), i.createSkeletonTree(a), i.onNodesVisibilityChange(), (this.skeleton = i));
                }
                async loadNodes(e) {
                    if (!this.skeleton) return;
                    let t = [];
                    for (let a of e) {
                        let e = this.skeleton.getNodeById(a);
                        e && t.push(e.load());
                    }
                    await Promise.allSettled(t);
                }
                createVisibilityController(e) {
                    this.hasVisibilityController ||
                        ((this.visibilityController = new n(e)),
                        this.skeleton && this.visibilityController.attachSkeleton(this.skeleton),
                        (this.hasVisibilityController = !0));
                }
                observe(e) {
                    let { target: t, loadIfNoElement: a = !1 } = e,
                        { element: i, id: l } = t;
                    if (!i && a) {
                        var r;
                        let e = null == (r = this.skeleton) ? void 0 : r.getNodeById(l);
                        null == e || e.load();
                        return;
                    }
                    if (!this.visibilityController) throw new s.t('VisibilityController has not been created');
                    this.visibilityController.observe(t);
                }
                unobserve(e) {
                    if (!this.visibilityController) throw new s.t('VisibilityController has not been created');
                    this.visibilityController.unobserve(e);
                }
                observeList(e) {
                    if (!this.visibilityController) throw new s.t('VisibilityController has not been created');
                    return this.visibilityController.observeList(e);
                }
                destroy() {
                    var e, t;
                    (null == (e = this.visibilityController) || e.disconnect(), null == (t = this.skeleton) || t.destroy(), (this.skeleton = void 0));
                }
                constructor({ skeletonFactory: e }) {
                    ((0, r._)(this, 'skeletonFactory', void 0),
                        (0, r._)(this, 'visibilityController', void 0),
                        (0, r._)(this, 'hasVisibilityController', !1),
                        (0, r._)(this, 'skeleton', void 0),
                        (this.skeletonFactory = e));
                }
            }
            class d {
                observe(e, t) {
                    let a = new ResizeObserver(() => t());
                    return (a.observe(e, { box: 'border-box' }), () => a.disconnect());
                }
            }
            let g = (e) => 'window' in e && e.window === e;
            class u {
                observeList(e) {
                    let { container: t, scrollElement: a, items: i, gap: l, overscan: r = 2, onVisibilityChange: s } = e;
                    if (
                        (this.unobserveList(),
                        (this.container = t),
                        (this.scrollElement = a),
                        (this.items = i),
                        (this.gap = l),
                        (this.overscan = Number.isFinite(r) ? Math.max(0, r) : 2),
                        (this.onVisibilityChange = s),
                        (this.abortController = new AbortController()),
                        this.rebuildLayout(),
                        this.scrollElement.addEventListener('scroll', this.scheduleRefresh, { passive: !0, signal: this.abortController.signal }),
                        !g(a))
                    ) {
                        var n;
                        this.stopObservingResize = null == (n = this.resizeObserverAdapter) ? void 0 : n.observe(a, this.scheduleRefresh);
                    }
                    this.refresh();
                }
                updateItems(e) {
                    ((this.items = e), this.rebuildLayout(), this.refresh());
                }
                refresh() {
                    if ((this.cancelScheduledRefresh(), !this.container || !this.scrollElement || !this.onVisibilityChange)) return;
                    if (!this.container.isConnected || 0 === this.layout.totalSize) return void this.updateVisibility([]);
                    let e = this.container.getBoundingClientRect(),
                        t = g(this.scrollElement) ? { top: 0, bottom: this.scrollElement.innerHeight } : this.scrollElement.getBoundingClientRect(),
                        a = Math.max(0, t.top - e.top),
                        i = Math.min(this.layout.totalSize, t.bottom - e.top);
                    if (i <= a) return void this.updateVisibility([]);
                    let l = ((e) => {
                        let { items: t, viewportStart: a, viewportEnd: i, overscan: l } = e;
                        if (0 === t.length) return [];
                        let r = ((e, t) => {
                                let a = 0,
                                    i = e.length - 1,
                                    l = -1;
                                for (; a <= i;) {
                                    let r = Math.floor((a + i) / 2),
                                        s = e[r];
                                    if (!s) break;
                                    s.end >= t ? ((l = r), (i = r - 1)) : (a = r + 1);
                                }
                                return l;
                            })(t, a),
                            s = ((e, t) => {
                                let a = 0,
                                    i = e.length - 1,
                                    l = -1;
                                for (; a <= i;) {
                                    let r = Math.floor((a + i) / 2),
                                        s = e[r];
                                    if (!s) break;
                                    s.start <= t ? ((l = r), (a = r + 1)) : (i = r - 1);
                                }
                                return l;
                            })(t, i);
                        if (-1 === r || -1 === s || r > s) return [];
                        let n = Math.max(0, r - l),
                            o = Math.min(t.length - 1, s + l);
                        return t.slice(n, o + 1);
                    })({ items: this.layout.items, viewportStart: a, viewportEnd: i, overscan: this.overscan });
                    this.updateVisibility(l);
                }
                unobserveList() {
                    var e, t;
                    (null == (e = this.stopObservingResize) || e.call(this),
                        (this.stopObservingResize = void 0),
                        null == (t = this.abortController) || t.abort(),
                        (this.abortController = void 0),
                        this.cancelScheduledRefresh(),
                        this.updateVisibility([]),
                        (this.animationFrameId = void 0),
                        (this.container = void 0),
                        (this.scrollElement = void 0),
                        (this.items = []),
                        (this.layout = { items: [], totalSize: 0 }),
                        (this.gap = 0),
                        (this.overscan = 2),
                        (this.onVisibilityChange = void 0));
                }
                updateVisibility(e) {
                    let t = new Set(e.map((e) => e.id)),
                        a = [];
                    if (
                        (t.forEach((e) => {
                            this.visibleItemIds.has(e) || a.push({ id: e, isVisible: !0 });
                        }),
                        this.visibleItemIds.forEach((e) => {
                            t.has(e) || a.push({ id: e, isVisible: !1 });
                        }),
                        (this.visibleItemIds = t),
                        a.length > 0)
                    ) {
                        var i;
                        null == (i = this.onVisibilityChange) || i.call(this, a);
                    }
                }
                constructor({ resizeObserverAdapter: e } = {}) {
                    ((0, r._)(this, 'resizeObserverAdapter', void 0),
                        (0, r._)(this, 'container', void 0),
                        (0, r._)(this, 'scrollElement', void 0),
                        (0, r._)(this, 'gap', 0),
                        (0, r._)(this, 'overscan', 2),
                        (0, r._)(this, 'onVisibilityChange', void 0),
                        (0, r._)(this, 'abortController', void 0),
                        (0, r._)(this, 'items', []),
                        (0, r._)(this, 'layout', { items: [], totalSize: 0 }),
                        (0, r._)(this, 'visibleItemIds', new Set()),
                        (0, r._)(this, 'animationFrameId', void 0),
                        (0, r._)(this, 'stopObservingResize', void 0),
                        (0, r._)(this, 'rebuildLayout', () => {
                            this.layout = ((e) => {
                                let { items: t, gap: a } = e,
                                    i = [],
                                    l = 0,
                                    r = !1;
                                return (
                                    t.forEach((e, t) => {
                                        if (e.estimatedSize <= 0) return;
                                        let s = e.estimatedSize + a;
                                        (i.push({ id: e.id, index: t, start: l, end: l + s, size: s }), (l += s), (r = !0));
                                    }),
                                    { items: i, totalSize: r ? Math.max(0, l - a) : 0 }
                                );
                            })({ items: this.items, gap: this.gap });
                        }),
                        (0, r._)(this, 'cancelScheduledRefresh', () => {
                            var e;
                            if (void 0 === this.animationFrameId) return;
                            let t = null == (e = this.container) ? void 0 : e.ownerDocument.defaultView;
                            (null == t || t.cancelAnimationFrame(this.animationFrameId), (this.animationFrameId = void 0));
                        }),
                        (0, r._)(this, 'scheduleRefresh', () => {
                            if (!this.container || void 0 !== this.animationFrameId) return;
                            let e = this.container.ownerDocument.defaultView;
                            if (!e) return void this.refresh();
                            this.animationFrameId = e.requestAnimationFrame(() => {
                                ((this.animationFrameId = void 0), this.refresh());
                            });
                        }),
                        (this.resizeObserverAdapter = e));
                }
            }
        },
        73017: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => i });
            var i = (function (e) {
                return ((e.USER = 'user'), (e.ARTIST = 'artist'), (e.PODCAST = 'podcast'), (e.SPECIAL = 'special'), (e.KIDS = 'kids'), e);
            })({});
        },
        75173: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { o: () => i }),
                (function (e) {
                    ((e.ARTIST = 'artist'), (e.COMPOSER = 'composer'));
                })(i || (i = {})));
        },
        75501: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { S: () => i }),
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
        77895: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => l });
            var i = a(18660);
            let l = (e) => {
                let t = e === i.J.UGC,
                    a = e === i.J.OWN,
                    l = e === i.J.OWN_REPLACED_TO_UGC;
                return { isUGC: t, isOwn: a, isOwnReplacedToUGC: l, isNonUserGenerated: !t && !l };
            };
        },
        78111: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { g: () => i }),
                (function (e) {
                    ((e.RATING = 'rating'), (e.YEAR = 'year'));
                })(i || (i = {})));
        },
        82401: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => i });
            var i = (function (e) {
                return ((e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e);
            })({});
        },
        82413: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => l });
            var i = a(35005);
            let l = (e) => (0, i.h)(e.data.concert, e.data.minPrice);
        },
        82745: (e, t, a) => {
            'use strict';
            function i(e) {
                let { items: t, mappedRawItems: a, page: i, pageSize: l } = e,
                    r = i * l,
                    s = 0;
                for (let e = r; e < r + l; e++) (a[s] && (t[e] = a[s]), s++);
            }
            a.d(t, { I: () => i });
        },
        82928: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => i });
            let i = RegExp('(px|%)$');
        },
        83496: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => s });
            var i = a(28410),
                l = a(58268),
                r = a(24820);
            let s = (e, t) => (0, i.wg)({ ...(0, r.v)(e), chart: t && (0, l.w)(t) });
        },
        84146: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            var i = (function (e) {
                return (
                    (e.VIDEO = 'VIDEO'),
                    (e.AUDIO = 'AUDIO'),
                    (e.TOP_BANNER = 'TOP_BANNER'),
                    (e.SIDE_BANNER = 'SIDE_BANNER'),
                    (e.TOUCH_BANNER = 'TOUCH_BANNER'),
                    (e.PLAYLIST_BRANDING = 'PLAYLIST_BRANDING'),
                    (e.AXE_ENTITY_BRANDING = 'AXE_ENTITY_BRANDING'),
                    (e.PLAYER_BRANDING = 'PLAYER_BRANDING'),
                    e
                );
            })({});
        },
        86064: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => i });
            var i = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), (e.RELOAD = 'reload'), e);
            })({});
        },
        86358: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => i });
            var i = (function (e) {
                return ((e.TRACK = 'track'), (e.TEXT = 'text'), e);
            })({});
        },
        86584: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => l });
            var i = a(25895);
            let l = (e) => (0, i.u)('/label/:labelId', { params: { labelId: e } });
        },
        86586: (e, t, a) => {
            'use strict';
            a.d(t, {
                $$: () => p,
                EK: () => d,
                GF: () => s,
                Tu: () => n,
                VI: () => o,
                bF: () => g,
                bg: () => c,
                e0: () => m,
                fZ: () => r,
                g2: () => i,
                ur: () => u,
                wO: () => l,
            });
            let i = 'avatars.mds.yandex.net/get-music-misc/28592/img.68eebe12749d24738fe2018e/%%',
                l = 'avatars.mds.yandex.net/get-music-misc/28592/img.68eebdb294053d016bcd7bf0/%%',
                r = 0.5,
                s = 1.5,
                n = 1,
                o = 1920,
                d = 20,
                g = 1.7,
                u = 16,
                c = '.swiper-pagination,[data-screenshot-hidden]',
                m = 600,
                p = '  •  ';
        },
        86788: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { m: () => i }),
                (function (e) {
                    ((e.WAVE = 'WAVE'), (e.ACTION = 'ACTION'), (e.SHARE = 'SHARE'), (e.SIMPLE = 'SIMPLE'), (e.LIKE = 'LIKE'));
                })(i || (i = {})));
        },
        87495: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => i });
            var i = (function (e) {
                return ((e.FILE_TOO_LARGE = 'FILE_TOO_LARGE'), (e.TOO_MANY_FILES = 'TOO_MANY_FILES'), (e.UNKNOWN_ERROR = 'UNKNOWN_ERROR'), (e.SUCCESS = 'SUCCESS'), e);
            })({});
        },
        88429: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => g });
            var i = a(28410),
                l = a(93690),
                r = a(35522),
                s = a(91409),
                n = a(36159),
                o = a(19835),
                d = a(50497);
            let g = i.gK
                .compose(i.gK.model('Mixes', { items: i.gK.array(s.f), errorStatusCode: i.gK.maybeNull(i.gK.number) }), o.X)
                .views((e) => ({
                    get isLoading() {
                        return e.isNeededToLoad || e.loadingState === n.G.PENDING;
                    },
                    get isNotFound() {
                        let t = e.isResolved && 0 === e.items.length;
                        return e.errorStatusCode === l.X1.NOT_FOUND || t;
                    },
                }))
                .actions((e) => ({
                    getMixes: (0, i.L3)(function* (t) {
                        let { landingResource: a, modelActionsLogger: s } = (0, i._$)(e);
                        if (e.loadingState !== n.G.PENDING)
                            try {
                                e.loadingState = n.G.PENDING;
                                let l = yield a.getBlock({ source: { uri: '/landing/block/mixes', fullList: t }, type: r.t.MIXES });
                                ((e.items = { items: (0, i.wg)(l.items.map((e) => (0, d.J)(e.data))) }.items), (e.loadingState = n.G.RESOLVE));
                            } catch (t) {
                                (s.error(t),
                                    t instanceof l.GX && (t.statusCode === l.X1.NOT_FOUND || t.statusCode === l.X1.BAD_REQUEST) && (e.errorStatusCode = l.X1.NOT_FOUND),
                                    e.loadingState !== n.G.IDLE && (e.loadingState = n.G.REJECT));
                            }
                    }),
                }));
        },
        90322: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => l, d: () => i });
            let i = (e) => String(e).split(':'),
                l = (e, t) => (t ? [e, t].join(':') : e);
        },
        91201: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => s });
            var i = a(28410),
                l = a(83772),
                r = a(45337);
            let s = (e) => {
                let t = ((e) => ({ ...(0, l.f)(e), artists: e.artists.map(r.G) }))(e);
                return (0, i.wg)(t);
            };
        },
        91409: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => r });
            var i = a(28410),
                l = a(23302);
            let r = i.gK.model('MixItem', {
                id: i.gK.string,
                title: i.gK.string,
                weblink: i.gK.string,
                covers: i.gK.maybe(i.gK.array(i.gK.string)),
                imagesLayoutType: i.gK.enumeration(Object.values(l.R)),
            });
        },
        92231: (e, t, a) => {
            'use strict';
            function i() {
                var e;
                return null == (e = window.musicDesktop) ? void 0 : e.runtime.platform;
            }
            a.d(t, { u: () => i });
        },
        92671: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { D: () => i }),
                (function (e) {
                    ((e.ALBUM = 'ALBUM'), (e.WAVE = 'WAVE'), (e.PROMO_LINK = 'PROMO_LINK'), (e.SETTING = 'SETTING'));
                })(i || (i = {})));
        },
        92892: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { T: () => i }),
                (function (e) {
                    ((e.CLOSE = 'close'), (e.LINK = 'link'), (e.PAYWALL = 'paywall'));
                })(i || (i = {})));
        },
        95029: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => i });
            var i = (function (e) {
                return ((e.DISABLED = 'DISABLED'), (e.ENABLED = 'ENABLED'), e);
            })({});
        },
        95897: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => l });
            var i = a(28410);
            let l = i.gK.model('ModelDestroyManager').actions(() => ({
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
        96692: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => r });
            var i = a(28410),
                l = a(45337);
            let r = (e) => {
                let t = (0, l.G)(e);
                return (0, i.wg)(t);
            };
        },
        96895: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => l });
            var i = a(16886);
            let l = (e, t) => ({ type: i.z4.Unloaded, meta: { id: e, albumId: t } });
        },
        97109: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return ((e.EMPTY = 'empty'), (e.DIRECT = 'direct'), (e.CREATIVE = 'creative'), (e.BRANDING = 'branding'), e);
            })({});
        },
        97762: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { p: () => i }),
                (function (e) {
                    ((e.WEB_MAIN = 'web_main'),
                        (e.MAIN = 'main'),
                        (e.WEB_COLLECTION = 'web_collection'),
                        (e.NON_MUSIC = 'non_music'),
                        (e.KIDS = 'kids'),
                        (e.MAIN_NOLOGIN = 'main_nologin'),
                        (e.SEARCH = 'Search'),
                        (e.ARTIST = 'artist_web'),
                        (e.CONCERTS = 'concerts'),
                        (e.CONCERT_PAGE = 'concert_page'));
                })(i || (i = {})));
        },
        98146: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => i });
            let i = (e) => {
                let [t, a] = e.split(':');
                return { uid: String(t), kind: Number(a) };
            };
        },
        98487: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => d });
            var i = a(28410),
                l = a(52807),
                r = a(24820),
                s = a(88148),
                n = a(36159),
                o = a(19835);
            let d = i.gK
                .compose(i.gK.model('DownloadedTracks', { items: i.gK.maybeNull(i.gK.array(s.v)), tracks: i.gK.maybeNull(i.gK.frozen()) }), o.X)
                .views((e) => ({
                    get tracksDurationInMinutes() {
                        var t, a;
                        return (null != (a = null == (t = e.tracks) ? void 0 : t.reduce((e, t) => (t.durationMs ? e + t.durationMs : e), 0)) ? a : 0) / 1e3 / 60;
                    },
                    get entitiesData() {
                        if (!e.tracks) return [];
                        return e.tracks.map((e) => ({ type: l.R.DownloadedMusic, meta: e }));
                    },
                    get isEmpty() {
                        var i;
                        return e.isResolved && (null == (i = e.items) ? void 0 : i.length) === 0;
                    },
                }))
                .actions((e) => ({
                    getData: (0, i.L3)(function* (t, a) {
                        let { modelActionsLogger: l } = (0, i._$)(e);
                        if (e.loadingState !== n.G.PENDING)
                            try {
                                e.loadingState = n.G.PENDING;
                                let l = yield t.getTracks(a);
                                ((e.tracks = l), (e.items = (0, i.wg)(l.map((e) => (0, r.v)(e)))), e.loadingState !== n.G.IDLE && (e.loadingState = n.G.RESOLVE));
                            } catch (t) {
                                (l.error(t), e.loadingState !== n.G.IDLE && (e.loadingState = n.G.REJECT));
                            }
                    }),
                    reset() {
                        ((e.items = null), (e.tracks = null), (e.loadingState = n.G.IDLE));
                    },
                }));
        },
        99670: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { x: () => i }),
                (function (e) {
                    ((e.ASC = 'asc'), (e.DESC = 'desc'));
                })(i || (i = {})));
        },
        99720: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { U: () => i }),
                (function (e) {
                    ((e.UNKNOWN = 'unknown'), (e.MALE = 'male'), (e.FEMALE = 'female'));
                })(i || (i = {})));
        },
    },
]);
