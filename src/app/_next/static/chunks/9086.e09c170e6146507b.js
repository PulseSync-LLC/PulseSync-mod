(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9086],
    {
        41: (t, e, s) => {
            'use strict';
            s.d(e, { b: () => a });
            var i = s(93690);
            let a = (t) =>
                class extends t {
                    error(t, e) {
                        !(t instanceof i.m5) && (t instanceof Error || 'string' == typeof t) && super.error(t, e);
                    }
                    constructor(t) {
                        super(t);
                    }
                };
        },
        767: (t, e, s) => {
            'use strict';
            s.d(e, { P: () => a });
            let i = [5e3, 1e4, 2e4, 3e4];
            function a(t) {
                let e,
                    s,
                    { probe: a, probeTimeoutMs: n = 5e3 } = t,
                    r = !1 === navigator.onLine ? 'offline' : 'unknown',
                    o = !1,
                    l = 0,
                    c = new Set();
                function u(t) {
                    r !== t && ((r = t), c.forEach((t) => t(r)));
                }
                function d() {
                    e && (clearTimeout(e), (e = void 0));
                }
                function h() {
                    s && (clearTimeout(s.timeout), s.controller.abort(), (s = void 0));
                }
                function p() {
                    if (o) return;
                    d();
                    let t = i[Math.min(l, i.length - 1)];
                    ((l += 1),
                        (e = setTimeout(() => {
                            ((e = void 0), g());
                        }, t)));
                }
                function g() {
                    if (o || s) return;
                    d();
                    let t = new AbortController(),
                        e = {
                            controller: t,
                            timeout: setTimeout(() => {
                                s === e && (t.abort(), (s = void 0), u('offline'), p());
                            }, n),
                        };
                    ((s = e),
                        a(t.signal)
                            .then(() => {
                                o || s !== e || (clearTimeout(e.timeout), (s = void 0), (l = 0), u('online'));
                            })
                            .catch(() => {
                                o || s !== e || (clearTimeout(e.timeout), (s = void 0), u('offline'), p());
                            }));
                }
                function m() {
                    (d(), h(), u('offline'));
                }
                function y() {
                    (d(), g());
                }
                return (
                    window.addEventListener('offline', m),
                    window.addEventListener('online', y),
                    'unknown' === r && g(),
                    {
                        getStatus: () => r,
                        subscribe: (t) => (
                            c.add(t),
                            () => {
                                c.delete(t);
                            }
                        ),
                        dispose: () => {
                            ((o = !0), window.removeEventListener('offline', m), window.removeEventListener('online', y), d(), h(), c.clear());
                        },
                    }
                );
            }
        },
        2242: (t, e, s) => {
            'use strict';
            s.d(e, { B: () => n });
            var i = s(58025),
                a = s(6490);
            class n extends a.X {
                async getChartPodcasts(t, e) {
                    return (
                        await this.httpClient.get(
                            'chart/podcasts',
                            this.createHttpOptions({ timeoutKey: 'getChartPodcasts', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getChartPodcastsCategory(t, e) {
                    return (
                        await this.httpClient.get(
                            'chart/podcasts/category/'.concat(t.categoryId),
                            this.createHttpOptions({ timeoutKey: 'getChartPodcastsCategory', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        2794: (t, e, s) => {
            'use strict';
            s.d(e, { p: () => n });
            var i = s(58025),
                a = s(6490);
            class n extends a.X {
                async getPlaylistIds(t, e) {
                    return (
                        await this.httpClient.get(
                            'tags/'.concat(t.id, '/playlist-ids'),
                            this.createHttpOptions({ timeoutKey: 'getPlaylistIds', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        2952: (t, e, s) => {
            'use strict';
            s.d(e, { PW: () => n, uY: () => l, xW: () => o, ie: () => u });
            var i = s(18422),
                a = s(35757);
            let n = (t) => {
                let e = (0, i.e)(a.pL);
                for (let [s, i] of Object.entries(e)) t.headers.set(s, i);
            };
            var r = s(59342);
            let o = (t) => {
                    t.headers.has('x-request-id') || t.headers.set('x-request-id', (0, r.A)());
                },
                l = (t) => (e) => {
                    'string' == typeof t && t.length > 0 && e.headers.set('X-Yandex-Music-Crowdtest-Token', t);
                };
            var c = s(58848);
            let u = (t, e) => {
                let { cause: s } = t;
                if (((t) => 'object' == typeof t && null !== t && 'response' in t && 'request' in t)(s) || (0, c.N)(s)) {
                    var i;
                    let t = (null == (i = s.request.options) ? void 0 : i.headers) || s.request.originalRequestHeaders;
                    if (t instanceof Headers) {
                        t.set('x-retry-count', String(e));
                        let [s] = (t.get('x-request-id') || (0, r.A)()).split('.');
                        t.set('x-request-id', ''.concat(s, '.').concat(e));
                    }
                }
            };
        },
        3030: (t, e, s) => {
            'use strict';
            s.d(e, { o: () => r });
            var i = s(58025),
                a = s(6490),
                n = s(73364);
            class r extends a.X {
                async pinAlbum(t, e) {
                    let s = (0, n.F)({ id: t.id });
                    return (
                        await this.httpClient.put(
                            'pin/album',
                            this.createHttpOptions({ timeoutKey: 'pinAlbum', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async unpinAlbum(t, e) {
                    let s = (0, n.F)({ id: t.id });
                    return (
                        await this.httpClient.delete(
                            'pin/album',
                            this.createHttpOptions({ timeoutKey: 'unpinAlbum', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async pinPlaylist(t, e) {
                    let s = (0, n.F)({ uid: t.uid, kind: t.kind });
                    return (
                        await this.httpClient.put(
                            'pin/playlist',
                            this.createHttpOptions({ timeoutKey: 'pinPlaylist', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async unpinPlaylist(t, e) {
                    let s = (0, n.F)({ uid: t.uid, kind: t.kind });
                    return (
                        await this.httpClient.delete(
                            'pin/playlist',
                            this.createHttpOptions({ timeoutKey: 'unpinPlaylist', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async pinArtist(t, e) {
                    let s = (0, n.F)({ id: t.id });
                    return (
                        await this.httpClient.put(
                            'pin/artist',
                            this.createHttpOptions({ timeoutKey: 'pinArtist', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async unpinArtist(t, e) {
                    let s = (0, n.F)({ id: t.id });
                    return (
                        await this.httpClient.delete(
                            'pin/artist',
                            this.createHttpOptions({ timeoutKey: 'unpinArtist', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async pinWave(t, e) {
                    let s = (0, n.F)({ seeds: t.seeds });
                    return (
                        await this.httpClient.put(
                            'pin/wave',
                            this.createHttpOptions({ timeoutKey: 'pinWave', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async unpinWave(t, e) {
                    let s = (0, n.F)({ seeds: t.seeds });
                    return (
                        await this.httpClient.delete(
                            'pin/wave',
                            this.createHttpOptions({ timeoutKey: 'unpinWave', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        3374: (t, e, s) => {
            'use strict';
            s.d(e, { g: () => r });
            var i = s(58025),
                a = s(73364),
                n = s(6490);
            class r extends n.X {
                async getTracksFilters(t, e) {
                    let s = (0, a.F)({ trackIds: t.trackIds });
                    return (
                        await this.httpClient.post(
                            'filters/tracks',
                            this.createHttpOptions({ timeoutKey: 'getTracksFilters', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getFilterName(t, e) {
                    return (
                        await this.httpClient.get(
                            'filters/'.concat(t.filterId),
                            this.createHttpOptions({ timeoutKey: 'getFilterName', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        9902: (t, e, s) => {
            'use strict';
            s.d(e, { _: () => r });
            var i = s(58025),
                a = s(6490),
                n = s(19786);
            class r extends a.X {
                async getAfterTrack(t, e) {
                    return (
                        await this.httpClient.get(
                            'after-track',
                            this.createHttpOptions({
                                timeoutKey: 'getAfterTrack',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, n.P)({ from: t.from, types: t.types, nextTrackId: t.nextTrackId, prevTrackId: t.prevTrackId }),
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        10696: (t, e, s) => {
            'use strict';
            s.d(e, { B: () => o });
            var i = s(58025),
                a = s(93690),
                n = s(19786),
                r = s(6490);
            class o extends r.X {
                async getAlbumWithRichTracks(t, e) {
                    // for PulseSync: BEGIN intercept albums.getAlbumWithRichTracks and publish album metadata
                    // for PulseSync WebHost: BEGIN wrap the upstream entity request for addon interception and publication
                    const pulseSyncOriginal = async (t, e) => {
                    let pulseSyncEntity = await (
                        await this.httpClient.get(
                            'albums/'.concat(t.albumId, '/with-tracks'),
                            this.createHttpOptions({
                                timeoutKey: 'getAlbumWithRichTracks',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, n.P)({
                                    resumeStream: t.resumeStream,
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    'sort-order': t.sortOrder,
                                    richTracks: !0,
                                    withListeningFinished: !0,
                                }),
                            }),
                        )
                    ).json();
                        return pulseSyncEntity;
                    };
                    // for PulseSync WebHost: END wrap the upstream entity request for addon interception and publication
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('albums', 'getAlbumWithRichTracks', [t, e], pulseSyncOriginal)
                        : await pulseSyncOriginal(t, e);
                    if (!window.pulsesyncApi?.isInternalResourceCall?.(e)) window.pulsesyncApi?.publishPageEntity?.('album', pulseSyncResponse);
                    return pulseSyncResponse;
                    // for PulseSync: END intercept albums.getAlbumWithRichTracks and publish album metadata
                }
                async getAlbumWithTracksIds(t, e) {
                    // for PulseSync: BEGIN intercept albums.getAlbumWithTracksIds and publish album metadata
                    // for PulseSync WebHost: BEGIN wrap the upstream entity request for addon interception and publication
                    const pulseSyncOriginal = async (t, e) => {
                    let pulseSyncEntity = await (
                        await this.httpClient.get(
                            'albums/'.concat(t.albumId, '/with-tracks'),
                            this.createHttpOptions({
                                timeoutKey: 'getAlbumWithTracksIds',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, n.P)({
                                    resumeStream: t.resumeStream,
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    'sort-order': t.sortOrder,
                                    richTracks: !1,
                                    withListeningFinished: !0,
                                }),
                            }),
                        )
                    ).json();
                        return pulseSyncEntity;
                    };
                    // for PulseSync WebHost: END wrap the upstream entity request for addon interception and publication
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('albums', 'getAlbumWithTracksIds', [t, e], pulseSyncOriginal)
                        : await pulseSyncOriginal(t, e);
                    if (!window.pulsesyncApi?.isInternalResourceCall?.(e)) window.pulsesyncApi?.publishPageEntity?.('album', pulseSyncResponse);
                    return pulseSyncResponse;
                    // for PulseSync: END intercept albums.getAlbumWithTracksIds and publish album metadata
                }
                async getAlbumWithTracksIdsWithEtag(t, e) {
                    // for PulseSync WebHost: BEGIN intercept albums.getAlbumWithTracksIdsWithEtag for addons
                    // for PulseSync WebHost: BEGIN wrap the upstream resource method for addon interception
                    const pulseSyncOriginal = async (t, e) => {
                    let s = this.createHttpOptions({
                        timeoutKey: 'getAlbumWithTracksIdsWithEtag',
                        params: t,
                        signal: null == e ? void 0 : e.signal,
                        searchParams: (0, n.P)({
                            resumeStream: t.resumeStream,
                            page: t.page,
                            pageSize: t.pageSize,
                            'sort-order': t.sortOrder,
                            richTracks: !1,
                            withListeningFinished: !0,
                        }),
                    });
                    t.ifNoneMatch && s.headers && (s.headers['if-none-match'] = t.ifNoneMatch);
                    let i = await this.httpClient.get('albums/'.concat(t.albumId, '/with-tracks'), s);
                        const pulseSyncResponse =
                            i.statusCode === a.X1.NOT_MODIFIED ? { notModified: !0 } : { notModified: !1, data: await i.json(), etag: i.headers.etag };
                        return pulseSyncResponse;
                    };
                    // for PulseSync WebHost: END wrap the upstream resource method for addon interception
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('albums', 'getAlbumWithTracksIdsWithEtag', [t, e], pulseSyncOriginal)
                        : await pulseSyncOriginal(t, e);
                    return pulseSyncResponse;
                    // for PulseSync WebHost: END intercept albums.getAlbumWithTracksIdsWithEtag for addons
                }
                async getDisclaimer(t, e) {
                    return (
                        await this.httpClient.get(
                            'albums/'.concat(t.albumId, '/disclaimer'),
                            this.createHttpOptions({ timeoutKey: 'getDisclaimer', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getTrailer(t, e) {
                    return (
                        await this.httpClient.get(
                            'albums/'.concat(t.albumId, '/trailer'),
                            this.createHttpOptions({ timeoutKey: 'getTrailer', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getRelatedContent(t, e) {
                    return (
                        await this.httpClient.get(
                            'albums/'.concat(t.albumId, '/related-content'),
                            this.createHttpOptions({ timeoutKey: 'getRelatedContent', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getAlbums(t, e) {
                    // for PulseSync WebHost: BEGIN wrap the upstream resource method for addon interception
                    const pulseSyncOriginal = async (t, e) => {
                    return (
                        await this.httpClient.get(
                            'albums',
                            this.createHttpOptions({
                                timeoutKey: 'getAlbums',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, n.P)({ albumIds: t.albumIds.join(',') }),
                            }),
                        )
                    ).json();
                    };
                    // for PulseSync WebHost: END wrap the upstream resource method for addon interception
                    // for PulseSync WebHost: BEGIN intercept albums.getAlbums for addons
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('albums', 'getAlbums', [t, e], pulseSyncOriginal)
                        : await pulseSyncOriginal(t, e);
                    return pulseSyncResponse;
                    // for PulseSync WebHost: END intercept albums.getAlbums for addons
                }
                async getSimilarEntities(t, e) {
                    return (
                        await this.httpClient.get(
                            'albums/'.concat(t.albumId, '/similar-entities'),
                            this.createHttpOptions({ timeoutKey: 'getSimilarEntities', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getExternalStreamingLinks(t, e) {
                    return (
                        await this.httpClient.get(
                            'albums/'.concat(t.albumId, '/external-streaming-links'),
                            this.createHttpOptions({ timeoutKey: 'getExternalStreamingLinks', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        12482: (t, e, s) => {
            'use strict';
            s.d(e, { z: () => r });
            var i = s(58025),
                a = s(19786),
                n = s(6490);
            class r extends n.X {
                async saveAds(t, e) {
                    return (
                        await this.httpClient.post(
                            'ads/save-ads',
                            this.createHttpOptions({
                                timeoutKey: 'saveAds',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ from: t.from, trackId: t.trackId, type: t.type }),
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        12526: (t, e, s) => {
            var i = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function a(t) {
                if (!s.o(i, t))
                    return Promise.resolve().then(() => {
                        var e = Error("Cannot find module '" + t + "'");
                        throw ((e.code = 'MODULE_NOT_FOUND'), e);
                    });
                var e = i[t],
                    a = e[0];
                return s.e(e[1]).then(() => s.t(a, 19));
            }
            ((a.keys = () => Object.keys(i)), (a.id = 12526), (t.exports = a));
        },
        14514: (t, e, s) => {
            'use strict';
            s.d(e, { k: () => i });
            let i = (t, e) => (t.langs.includes(e) ? e : t.defaultLang);
        },
        15178: (t, e, s) => {
            'use strict';
            s.d(e, { w: () => r });
            var i = s(58025),
                a = s(19786),
                n = s(6490);
            class r extends n.X {
                async getData(t, e) {
                    return (
                        await this.httpClient.get(
                            'labels/'.concat(t.labelId),
                            this.createHttpOptions({ timeoutKey: 'getData', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getAlbums(t, e) {
                    return (
                        await this.httpClient.get(
                            'labels/'.concat(t.labelId, '/albums'),
                            this.createHttpOptions({
                                timeoutKey: 'getAlbums',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ page: t.page, pageSize: t.pageSize, sortBy: t.sortBy, sortOrder: t.sortOrder }),
                            }),
                        )
                    ).json();
                }
                async getArtists(t, e) {
                    return (
                        await this.httpClient.get(
                            'labels/'.concat(t.labelId, '/artists'),
                            this.createHttpOptions({
                                timeoutKey: 'getArtists',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ page: t.page, pageSize: t.pageSize }),
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        15545: (t, e, s) => {
            'use strict';
            s.d(e, { c: () => r });
            var i = s(58025),
                a = s(6490),
                n = s(19786);
            class r extends a.X {
                async getRedAlerts(t, e) {
                    var s;
                    let i = (null == (s = t.common) ? void 0 : s.language) || this.config.params.common.language;
                    return (
                        await this.httpClient.get(
                            'proxy/plus-red-alert/v1/alerts',
                            this.createHttpOptions({
                                timeoutKey: 'getRedAlerts',
                                params: t,
                                searchParams: (0, n.P)({ service: t.service, client: t.client, platform: t.platform, countryId: t.countryId, language: i }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        16249: (t, e, s) => {
            'use strict';
            s.d(e, { L: () => o });
            var i = s(58025),
                a = s(93690),
                n = s(6490),
                r = s(19786);
            class o extends n.X {
                async getStorageData(t, e) {
                    let { formatFlags: s, direct: i, preview: a, canUseStreaming: n, tsInSeconds: o, sign: l, debug: c, isAliceRequester: u, requireMp3Link: d } = t;
                    return (
                        await this.httpClient.get(
                            'tracks/'.concat(t.trackId, '/download-info'),
                            this.createHttpOptions({
                                timeoutKey: 'getStorageData',
                                params: t,
                                searchParams: (0, r.P)({
                                    formatFlags: s,
                                    debug: c,
                                    preview: a,
                                    direct: i,
                                    isAliceRequester: u,
                                    requireMp3Link: d,
                                    canUseStreaming: n,
                                    ts: o,
                                    sign: l,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getTracksMeta(t, e) {
                    // for PulseSync: BEGIN restore substituted track fields and intercept tracks.getTracksMeta
                    // for PulseSync WebHost: BEGIN wrap the upstream track metadata request for substitution and addon hooks
                    const pulseSyncOriginal = async (t, e) => {
                    let s = await (
                        await this.httpClient.post(
                            'tracks',
                            this.createHttpOptions({
                                timeoutKey: 'getTracksMeta',
                                params: t,
                                body: (function (t) {
                                    let e = new FormData();
                                    return (
                                        Object.getOwnPropertyNames(t).forEach((s) => {
                                            let i = t[s];
                                            (('number' == typeof i || 'string' == typeof i || 'boolean' == typeof i) && e.append(s, String(i)),
                                                Array.isArray(i) &&
                                                    i.forEach((t) => {
                                                        ('number' == typeof t || 'string' == typeof t) && e.append(s, String(t));
                                                    }));
                                        }),
                                        e
                                    );
                                })({ trackIds: t.trackIds, removeDuplicates: t.removeDuplicates || !1, withProgress: t.withProgress, withMixData: t.withMixData }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                        s = s.map((t) => ({ ...t }));
                    return (
                        s.forEach((t) => {
                            (t.substituted &&
                                ((t.isSubstituted = !0),
                                (t.artists = t.substituted.artists ?? t.artists),
                                (t.ogImage = t.substituted.ogImage ?? t.substituted.coverUri ?? t.ogImage),
                                (t.title = t.substituted.title ?? t.title),
                                (t.derivedColors = t.substituted.derivedColors ?? t.derivedColors),
                                (t.version = t.substituted.version ?? t.version),
                                (t.disclaimers = Array.from(
                                    new Set([...(t.disclaimers ?? []), 'substitutedIcon:pulsesync-substituted', 'descriptionText:pulsesync-substituted']),
                                ))),
                                (t.coverUri =
                                    t.substituted?.coverUri ||
                                    t.substituted?.ogImage ||
                                    t.substituted?.cover?.uri ||
                                    t.substituted?.albums?.[0]?.coverUri ||
                                    t.albums?.[0]?.coverUri ||
                                    t.ogImage ||
                                    t.cover?.uri ||
                                    t.coverUri));
                        }),
                        s
                    );
                    };
                    // for PulseSync WebHost: END wrap the upstream track metadata request for substitution and addon hooks
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('tracks', 'getTracksMeta', [t, e], pulseSyncOriginal)
                        : await pulseSyncOriginal(t, e);
                    return pulseSyncResponse;
                    // for PulseSync: END restore substituted track fields and intercept tracks.getTracksMeta
                }
                async getFullInfoTrack(t, e) {
                    // for PulseSync WebHost: BEGIN wrap the upstream resource method for addon interception
                    const pulseSyncOriginal = async (t, e) => {
                    let s = t.albumId ? ''.concat(t.trackId, ':').concat(t.albumId) : t.trackId;
                    return (
                        await this.httpClient.get(
                            'tracks/'.concat(s, '/full-info'),
                            this.createHttpOptions({ timeoutKey: 'getFullInfoTrack', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                    };
                    // for PulseSync WebHost: END wrap the upstream resource method for addon interception
                    // for PulseSync WebHost: BEGIN intercept tracks.getFullInfoTrack for addons
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('tracks', 'getFullInfoTrack', [t, e], pulseSyncOriginal)
                        : await pulseSyncOriginal(t, e);
                    return pulseSyncResponse;
                    // for PulseSync WebHost: END intercept tracks.getFullInfoTrack for addons
                }
                async getFullInfoTrackWithEtag(t, e) {
                    // for PulseSync WebHost: BEGIN intercept tracks.getFullInfoTrackWithEtag for addons
                    // for PulseSync WebHost: BEGIN wrap the upstream resource method for addon interception
                    const pulseSyncOriginal = async (t, e) => {
                    let s = t.albumId ? ''.concat(t.trackId, ':').concat(t.albumId) : t.trackId,
                        i = this.createHttpOptions({ timeoutKey: 'getFullInfoTrackWithEtag', params: t, signal: null == e ? void 0 : e.signal });
                    t.ifNoneMatch && i.headers && (i.headers['if-none-match'] = t.ifNoneMatch);
                    let n = await this.httpClient.get('tracks/'.concat(s, '/full-info'), i);
                        const pulseSyncResponse =
                            n.statusCode === a.X1.NOT_MODIFIED ? { notModified: !0 } : { notModified: !1, data: await n.json(), etag: n.headers.etag };
                        return pulseSyncResponse;
                    };
                    // for PulseSync WebHost: END wrap the upstream resource method for addon interception
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('tracks', 'getFullInfoTrackWithEtag', [t, e], pulseSyncOriginal)
                        : await pulseSyncOriginal(t, e);
                    return pulseSyncResponse;
                    // for PulseSync WebHost: END intercept tracks.getFullInfoTrackWithEtag for addons
                }
                async getFullDescriptionTrack(t, e) {
                    return (
                        await this.httpClient.get(
                            'tracks/'.concat(t.trackId, '/supplement'),
                            this.createHttpOptions({ timeoutKey: 'getFullDescriptionTrack', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getCredits(t, e) {
                    return (
                        await this.httpClient.get(
                            'tracks/'.concat(t.trackId, '/credits'),
                            this.createHttpOptions({ timeoutKey: 'getCredits', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getDisclaimer(t, e) {
                    return (
                        await this.httpClient.get(
                            'tracks/'.concat(t.trackId, '/disclaimer'),
                            this.createHttpOptions({ timeoutKey: 'getDisclaimer', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getTrailer(t, e) {
                    return (
                        await this.httpClient.get(
                            'tracks/'.concat(t.trackId, '/trailer'),
                            this.createHttpOptions({ timeoutKey: 'getTrailer', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getLyrics(t, e) {
                    return (
                        await this.httpClient.get(
                            'tracks/'.concat(t.trackId, '/lyrics'),
                            this.createHttpOptions({
                                timeoutKey: 'getLyrics',
                                params: t,
                                searchParams: (0, r.P)({ sign: t.sign, timeStamp: t.timeStamp, format: t.format }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        18370: (t, e, s) => {
            'use strict';
            s.d(e, { _: () => c });
            var i = s(58025),
                a = s(6490),
                n = s(73364),
                r = s(19786);
            class o extends a.X {
                async log(t) {
                    await this.httpClient.post(
                        'log',
                        this.createHttpOptions(
                            {
                                timeoutKey: 'log',
                                params: t,
                                json: (0, n.F)(t.payload),
                                excludeHeaders: ['x-request-id', 'x-retry-count', 'x-retpath-y'],
                                searchParams: (0, r.P)(t.urlParams),
                            },
                            { withoutHeaders: !0 },
                        ),
                    );
                }
                async perfLog(t) {
                    await this.httpClient.post(
                        'perf',
                        this.createHttpOptions(
                            {
                                timeoutKey: 'perfLog',
                                params: t,
                                json: t.payload,
                                excludeHeaders: ['x-request-id', 'x-retry-count', 'x-retpath-y'],
                                searchParams: (0, r.P)(t.urlParams),
                            },
                            { withoutHeaders: !0 },
                        ),
                    );
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
            var l = s(48068);
            let c = (t) => {
                let { httpClient: e, musicExternalApi: s, publicConfig: i } = t;
                return new o(e, {
                    prefixUrl: i.player.telemetry.telemetryUrl,
                    retryPolicyConfig: s.retryPolicyConfig,
                    timeouts: s.timeouts.telemetryResouce,
                    params: { common: { client: (0, l._)() } },
                });
            };
        },
        18420: (t, e, s) => {
            'use strict';
            s.d(e, { K: () => r });
            var i = s(58025),
                a = s(19786),
                n = s(6490);
            class r extends n.X {
                async getFileInfo(t, e) {
                    var s;
                    let i = await this.httpClient.get(
                        'resources/v2/file-info',
                        this.createHttpOptions({
                            timeoutKey: 'getFileInfo',
                            params: t,
                            searchParams: (0, a.P)({
                                ts: t.tsInSeconds,
                                trackId: t.trackId,
                                quality: t.quality,
                                codecs: t.codecs.join(','),
                                transports: t.transports.join(','),
                                sign: t.sign,
                                fromPromoLanding: t.fromPromoLanding,
                            }),
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                    return { fileInfo: await i.json(), responseTime: null == (s = i.timings) ? void 0 : s.response, url: i.url };
                }
                async getFileInfoBatch(t, e) {
                    return (
                        await this.httpClient.get(
                            'resources/v2/file-info/batch',
                            this.createHttpOptions({
                                timeoutKey: 'getFileInfoBatch',
                                params: t,
                                searchParams: (0, a.P)({
                                    ts: t.tsInSeconds,
                                    trackIds: t.trackIds,
                                    quality: t.quality,
                                    codecs: t.codecs.join(','),
                                    transports: t.transports.join(','),
                                    sign: t.sign,
                                    fromPromoLanding: t.fromPromoLanding,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        18752: (t, e, s) => {
            'use strict';
            s.d(e, { n: () => n });
            var i = s(93588),
                a = s(89288);
            let n = (t, e) => async (s) => {
                let n = await t.post(s.url, {
                    json: void 0 === s.body ? void 0 : (0, a.UL)(s.body, e),
                    headers: s.headers,
                    signal: s.signal,
                    credentials: s.credentials,
                    retry: { config: i.tk },
                });
                return await n.json();
            };
        },
        22582: (t, e, s) => {
            'use strict';
            s.d(e, { V: () => i });
            var i = (function (t) {
                return ((t.WINDOWS = 'Windows'), (t.MACOS = 'MacOS'), (t.LINUX = 'Linux'), t);
            })({});
        },
        23285: (t, e, s) => {
            'use strict';
            s.d(e, { i: () => l });
            var i = s(58025),
                a = s(22240);
            let n = ['x-request-id', 'x-retry-count', 'X-Requested-With', 'X-Retpath-Y'],
                r = { statusCodes: {}, totalRequestsLimit: 0 };
            class o extends a.Y {
                async ping(t) {
                    let e = new URL(this.url, window.location.origin);
                    (e.searchParams.set('_', String(Date.now())),
                        await this.httpClient.head(String(e), { credentials: 'omit', excludeHeaders: n, retry: { config: r }, signal: null == t ? void 0 : t.signal }));
                }
                constructor(t, e) {
                    (super(t), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'url', void 0), (this.httpClient = t), (this.url = e));
                }
            }
            let l = (t) => {
                let { httpClientFactory: e, publicConfig: s } = t;
                return new o(e({ credentials: 'omit' }), s.resources.networkReachability.url);
            };
        },
        25630: (t, e, s) => {
            'use strict';
            s.d(e, { q: () => o });
            var i = s(58025),
                a = s(6490),
                n = s(73364),
                r = s(19786);
            class o extends a.X {
                async getPromoAlbumInfo(t, e) {
                    return (
                        await this.httpClient.get(
                            'promo/albums/'.concat(t.albumId),
                            this.createHttpOptions({
                                timeoutKey: 'getPromoAlbumInfo',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, r.P)({ campaignId: t.campaignId }),
                            }),
                        )
                    ).json();
                }
                async getAlbumCpaId(t, e) {
                    return (
                        await this.httpClient.get(
                            'promo/albums/'.concat(t.albumId, '/cpa-id'),
                            this.createHttpOptions({ timeoutKey: 'getAlbumCpaId', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async sendFeedback(t, e) {
                    await this.httpClient.post(
                        'promo/feedback',
                        this.createHttpOptions({
                            timeoutKey: 'sendFeedback',
                            params: t,
                            signal: null == e ? void 0 : e.signal,
                            json: (0, n.F)({ reaction: t.reaction, yclid: t.yclid, campaignId: t.campaignId, trackId: t.trackId }),
                        }),
                    );
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        25678: (t, e, s) => {
            'use strict';
            s.d(e, { e: () => r });
            var i = s(58025),
                a = s(6490),
                n = s(19786);
            class r extends a.X {
                async getPlaylists(t, e) {
                    return (
                        await this.httpClient.get(
                            'playlists',
                            this.createHttpOptions({
                                timeoutKey: 'getPlaylists',
                                params: t,
                                searchParams: (0, n.P)({ resumeStream: t.resumeStream, page: t.page, pageSize: t.pageSize, playlistIds: t.playlistIds }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getPlaylistPersonal(t, e) {
                    return (
                        await this.httpClient.get(
                            'playlists/personal/'.concat(t.playlistId),
                            this.createHttpOptions({ timeoutKey: 'getPlaylistPersonal', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        27354: (t, e, s) => {
            'use strict';
            s.d(e, { _: () => r });
            var i = s(58025),
                a = s(6490),
                n = s(19786);
            class r extends a.X {
                async getAvailabilityTracks(t, e) {
                    return (
                        await this.httpClient.post(
                            'availability/tracks',
                            this.createHttpOptions({
                                timeoutKey: 'getAvailabilityTracks',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, n.P)({ trackIds: t.trackIds }),
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        27940: (t, e, s) => {
            'use strict';
            s.d(e, { H: () => n });
            var i = s(58025),
                a = s(6490);
            class n extends a.X {
                async getMetatags(t, e) {
                    return (
                        await this.httpClient.get(
                            'landing3/metatags',
                            this.createHttpOptions({ timeoutKey: 'getMetatags', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getChart(t, e) {
                    // for PulseSync WebHost: BEGIN wrap the upstream resource method for addon interception
                    const pulseSyncOriginal = async (t, e) => {
                    return (
                            await this.httpClient.get(
                                'landing3/chart',
                                this.createHttpOptions({ timeoutKey: 'getChart', params: t, signal: null == e ? void 0 : e.signal }),
                            )
                    ).json();
                    };
                    // for PulseSync WebHost: END wrap the upstream resource method for addon interception
                    // for PulseSync WebHost: BEGIN intercept landing3.getChart for addons
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('landing3', 'getChart', [t, e], pulseSyncOriginal)
                        : await pulseSyncOriginal(t, e);
                    return pulseSyncResponse;
                    // for PulseSync WebHost: END intercept landing3.getChart for addons
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        28596: (t, e, s) => {
            'use strict';
            s.d(e, { D: () => o });
            var i = s(58025),
                a = s(6490),
                n = s(19786),
                r = s(73364);
            class o extends a.X {
                async getPromotionsById(t, e) {
                    return (
                        await this.httpClient.get(
                            'feed/promotions/'.concat(t.promoId),
                            this.createHttpOptions({
                                timeoutKey: 'getPromotionsById',
                                params: t,
                                searchParams: (0, n.P)({ checkContent: t.checkContent }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getWizardGenres(t, e) {
                    return (
                        await this.httpClient.get(
                            'feed/wizard2-new/get-genres',
                            this.createHttpOptions({ timeoutKey: 'getWizardGenres', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getWizardArtistsByGenre(t, e) {
                    let s = (0, r.F)({
                        genre: t.genre,
                        showedArtists: t.showedArtists,
                        likedArtists: t.likedArtists,
                        unlikedArtists: t.unlikedArtists,
                        countOfNewArtists: t.countOfNewArtists,
                    });
                    return (
                        await this.httpClient.post(
                            'feed/wizard2-new/get-artists-by-genre',
                            this.createHttpOptions({ timeoutKey: 'getWizardArtistsByGenre', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async finishWizard(t, e) {
                    let s = (0, r.F)({ genre: t.genre, likedArtists: t.likedArtists, unlikedArtists: t.unlikedArtists });
                    await this.httpClient.post(
                        'feed/wizard2-new/finish',
                        this.createHttpOptions({ timeoutKey: 'finishWizard', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                    );
                }
                async infiniteFeed(t, e) {
                    return (
                        await this.httpClient.get(
                            'infinite-feed',
                            this.createHttpOptions({
                                timeoutKey: 'infiniteFeed',
                                params: t,
                                searchParams: (0, n.P)({ batchNumber: t.batchNumber, landingType: t.landingType, supportedBlocks: 'generic' }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        28869: (t, e, s) => {
            'use strict';
            s.d(e, { E: () => d });
            var i = s(58025),
                a = s(78773),
                n = s(14514),
                r = s(56107);
            let o = (t) => r.U.parseAcceptLanguage(null != t ? t : void 0);
            var l = s(86166);
            let c = (t) => {
                var e;
                return null != (e = { ru: l.$.RU, en: l.$.EN, uz: l.$.UZ, kk: l.$.KK }[t]) ? e : l.$.RU;
            };
            var u = s(55040);
            class d {
                static getDefaultLocale() {
                    return new Intl.Locale(a.Xn);
                }
                getLocale() {
                    let t;
                    try {
                        t = new Intl.Locale(this.serverDetectedLocale).region;
                    } catch (e) {
                        t = d.getDefaultLocale().region;
                    }
                    return new Intl.Locale(this.language, { region: t });
                }
                getDefaultLanguage() {
                    return c((0, n.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, n.k)(this.config, this.language));
                }
                setLanguage(t) {
                    var e, s, i;
                    let a = (0, n.k)(this.config, t);
                    a !== (null == (e = this.storage) ? void 0 : e.get()) &&
                        (null == (s = this.storage) || s.set(a), null == (i = this.changeLanguageHandler) || i.onChangeLanguage(a));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((t) => c((0, n.k)(this.config, t)));
                }
                async loadDictionary() {
                    let t = (0, n.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, u.M)(t);
                    } catch (e) {
                        (e instanceof Error && this.logger.error(e, { language: t }), (this.dictionary = {}));
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: t, isBuildTypeDesktop: e, storage: s, changeLanguageHandler: l, logger: c }) {
                    let u;
                    if (
                        ((0, i._)(this, 'language', void 0),
                        (0, i._)(this, 'storage', void 0),
                        (0, i._)(this, 'dictionary', void 0),
                        (0, i._)(this, 'config', void 0),
                        (0, i._)(this, 'logger', void 0),
                        (0, i._)(this, 'changeLanguageHandler', void 0),
                        (0, i._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = s),
                        (this.logger = c),
                        (this.changeLanguageHandler = l),
                        (this.serverDetectedLocale = t),
                        (this.config = a.pE[a.cy]),
                        e)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var d;
                            let t;
                            u = ((t = this.config), new r.U({ brandConfig: t, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (d = this.storage) ? void 0 : d.get()) || void 0,
                                acceptLangs: o(navigator.languages.join()),
                            });
                        }
                    } else [u] = o(t) || [];
                    this.language = (0, n.k)(this.config, u);
                }
            }
        },
        32141: (t, e, s) => {
            'use strict';
            s.d(e, { I: () => o });
            var i = s(58025),
                a = s(6490),
                n = s(19786),
                r = s(73364);
            class o extends a.X {
                async getMusicHistory(t, e) {
                    return (
                        await this.httpClient.get(
                            'music-history',
                            this.createHttpOptions({
                                timeoutKey: 'getMusicHistory',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, n.P)({ fullModelsCount: t.fullModelsCount }),
                            }),
                        )
                    ).json();
                }
                async getMusicHistoryItems(t, e) {
                    return (
                        await this.httpClient.post(
                            'music-history/items',
                            this.createHttpOptions({
                                timeoutKey: 'getMusicHistoryItems',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                json: (0, r.F)({ items: t.items }),
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        32817: (t, e, s) => {
            'use strict';
            s.d(e, { Z: () => o });
            var i = s(58025),
                a = s(6490);
            class n extends a.X {
                async sendMetrics(t) {
                    let { varsString: e, reqid: s, table: i, path: a, slots: n, experimentsSetting: r } = t,
                        o = [
                            '/reqid='.concat(s),
                            '/table='.concat(i),
                            a ? '/path='.concat(a) : '',
                            n ? '/slots='.concat(Array.isArray(n) ? n.join(';') : n) : '',
                            r ? '/experiments='.concat(Array.isArray(r) ? r.join(';') : r) : '',
                            '/vars='.concat(e),
                            '/cts='.concat(Date.now()),
                            '/*',
                        ]
                            .filter(Boolean)
                            .join('');
                    return this.httpClient.post('', {
                        prefixUrl: this.config.prefixUrl,
                        body: o,
                        retry: this.config.retryPolicyConfig ? { config: this.config.retryPolicyConfig } : void 0,
                    });
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
            var r = s(48068);
            let o = (t) => {
                let { httpClient: e, publicConfig: s } = t,
                    i = s.resources.musicExternalApi;
                return new n(e, { prefixUrl: s.player.telemetry.rumUrl, retryPolicyConfig: i.retryPolicyConfig, params: { common: { client: (0, r._)() } } });
            };
        },
        33031: (t, e, s) => {
            'use strict';
            s.d(e, { v: () => r });
            var i = s(58025),
                a = s(6490),
                n = s(19786);
            class r extends a.X {
                async getTrackIds(t, e) {
                    return (
                        await this.httpClient.get(
                            'search-playlist/'.concat(t.uid, '/').concat(t.kind),
                            this.createHttpOptions({
                                timeoutKey: 'getTrackIds',
                                params: t,
                                searchParams: (0, n.P)({ part: t.part }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        33314: (t, e, s) => {
            'use strict';
            s.d(e, { O: () => r });
            var i = s(58025),
                a = s(19786),
                n = s(6490);
            class r extends n.X {
                async getTabConfig(t, e) {
                    let s = await this.httpClient.get(
                        'concerts/tab-config',
                        this.createHttpOptions({ timeoutKey: 'getTabConfig', params: t, signal: null == e ? void 0 : e.signal }),
                    );
                    return await s.json();
                }
                async getFeed(t, e) {
                    let s = await this.httpClient.get(
                        'concerts/feed',
                        this.createHttpOptions({
                            timeoutKey: 'getFeed',
                            params: t,
                            searchParams: (0, a.P)({ locations: t.locations }),
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                    return await s.json();
                }
                async getInfo(t, e) {
                    let s = await this.httpClient.get(
                        'concerts/'.concat(t.concertId, '/info'),
                        this.createHttpOptions({ timeoutKey: 'getInfo', params: t, signal: null == e ? void 0 : e.signal }),
                    );
                    return await s.json();
                }
                async getSkeleton(t, e) {
                    return (
                        await this.httpClient.get(
                            'concerts/'.concat(t.concertId, '/skeletons/').concat(t.skeletonId),
                            this.createHttpOptions({ timeoutKey: 'getSkeleton', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getConcertsDetails(t, e) {
                    return (
                        await this.httpClient.get(
                            'concerts/details/'.concat(t.type, '/').concat(t.id),
                            this.createHttpOptions({
                                timeoutKey: 'getConcertsDetails',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ locations: t.locations }),
                            }),
                        )
                    ).json();
                }
                async getLocations(t, e) {
                    return (
                        await this.httpClient.get(
                            'concerts/locations',
                            this.createHttpOptions({ timeoutKey: 'getLocations', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        35591: (t, e, s) => {
            'use strict';
            s.d(e, { Y: () => r });
            var i = s(74245),
                a = s(58025);
            class n {
                async loadAll() {
                    return (await this.resource.getDisclaimers()).map((t) => ({
                        id: t.id,
                        type: t.type,
                        title: t.title,
                        description: t.description,
                        details: t.details ? { text: t.details.text, url: t.details.url } : void 0,
                    }));
                }
                constructor(t) {
                    ((0, a._)(this, 'resource', void 0), (this.resource = t));
                }
            }
            let r = (t) => new i.AS({ dataSource: new n(t) });
        },
        36064: (t, e, s) => {
            'use strict';
            s.d(e, { L: () => r });
            var i = s(58025),
                a = s(6490),
                n = s(73364);
            class r extends a.X {
                async sync(t, e) {
                    return (
                        await this.httpClient.post(
                            'collection/sync',
                            this.createHttpOptions({
                                timeoutKey: 'sync',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                json: (0, n.F)({
                                    likedAlbums: t.likedAlbums,
                                    likedArtists: t.likedArtists,
                                    likedClips: t.likedClips,
                                    likedTracks: t.likedTracks,
                                    presavedAlbums: t.presavedAlbums,
                                    ownPlaylists: t.ownPlaylists,
                                    likedPlaylists: t.likedPlaylists,
                                }),
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        38125: (t, e, s) => {
            'use strict';
            s.d(e, { u: () => r });
            var i = s(58025),
                a = s(19786),
                n = s(6490);
            class r extends n.X {
                async getCollectionKidsTracksLiked(t, e) {
                    return (
                        await this.httpClient.get(
                            'landing-blocks/collection/kids/tracks-liked',
                            this.createHttpOptions({
                                timeoutKey: 'getCollectionKidsTracksLiked',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ page: t.page, pageSize: t.pageSize }),
                            }),
                        )
                    ).json();
                }
                async getCollectionKidsPlaylistsLiked(t, e) {
                    return (
                        await this.httpClient.get(
                            'landing-blocks/collection/kids/playlists-liked',
                            this.createHttpOptions({
                                timeoutKey: 'getCollectionKidsPlaylistsLiked',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ page: t.page, pageSize: t.pageSize }),
                            }),
                        )
                    ).json();
                }
                async getCollectionKidsAlbumsLiked(t, e) {
                    return (
                        await this.httpClient.get(
                            'landing-blocks/collection/kids/albums-liked',
                            this.createHttpOptions({
                                timeoutKey: 'getCollectionKidsAlbumsLiked',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ page: t.page, pageSize: t.pageSize }),
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        42132: (t, e, s) => {
            'use strict';
            s.d(e, { l: () => n });
            var i = s(58025),
                a = s(6490);
            class n extends a.X {
                async getTopArtists(t, e) {
                    return (
                        await this.httpClient.get(
                            'personal/top/artists/month',
                            this.createHttpOptions({ timeoutKey: 'getTopArtists', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        44342: (t, e, s) => {
            'use strict';
            s.d(e, { x: () => i });
            let i = [
                'request.headers.cookie',
                'request.headers.x-ya-service-ticket',
                'request.headers.x-ya-user-ticket',
                'request.headers.authorization',
                'request.headers.x-authorization',
                'request.headers.content-security-policy',
                'request.headers.x-ya-balancer-service-ticket',
                'request.headers.x-balancer-tvm-service-ticket',
                'response.headers.set-cookie',
                'response.headers.x-ya-service-ticket',
                'response.headers.x-ya-user-ticket',
                'response.headers.x-ya-balancer-service-ticket',
                'response.headers.x-balancer-tvm-service-ticket',
                'response.headers.x-authorization',
                'response.headers.content-security-policy',
            ];
        },
        46646: (t, e, s) => {
            var i = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function a(t) {
                if (!s.o(i, t))
                    return Promise.resolve().then(() => {
                        var e = Error("Cannot find module '" + t + "'");
                        throw ((e.code = 'MODULE_NOT_FOUND'), e);
                    });
                var e = i[t],
                    a = e[0];
                return s.e(e[1]).then(() => s.t(a, 19));
            }
            ((a.keys = () => Object.keys(i)), (a.id = 46646), (t.exports = a));
        },
        48068: (t, e, s) => {
            'use strict';
            s.d(e, { _: () => r });
            var i = s(93588),
                a = s(90208),
                n = s(59628);
            let r = () => {
                let t = (0, a.B)(),
                    e = (0, n.y)();
                return (0, i.CP)(e, t);
            };
        },
        48106: (t, e, s) => {
            'use strict';
            s.d(e, { d: () => l });
            var i = s(58025),
                a = s(31860),
                n = s(45162),
                r = s(19786),
                o = s(6490);
            class l extends o.X {
                async getLikedAlbums(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/likes/albums/page'),
                            this.createHttpOptions({
                                timeoutKey: 'getLikedAlbums',
                                params: t,
                                searchParams: (0, r.P)({
                                    rich: !0,
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    'sort-by': t.sortBy,
                                    'sort-order': t.sortOrder,
                                    metaType: t.metaType,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getLikedArtists(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/likes/artists/page'),
                            this.createHttpOptions({
                                timeoutKey: 'getLikedArtists',
                                params: t,
                                searchParams: (0, r.P)({
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    'sort-by': t.sortBy,
                                    'sort-order': t.sortOrder,
                                    withTimestamps: t.withTimestamps,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getDislikedArtists(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/dislikes/artists'),
                            this.createHttpOptions({
                                timeoutKey: 'getDislikedArtists',
                                params: t,
                                searchParams: (0, r.P)({ 'sort-by': t.sortBy, 'sort-order': t.sortOrder }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getLikedPlaylists(t, e) {
                    let s = await this.httpClient.get(
                            'users/'.concat(t.userId, '/likes/playlists'),
                            this.createHttpOptions({
                                timeoutKey: 'getLikedPlaylists',
                                params: { ...t, common: { ...t.common, withoutInvocationInfo: !1 } },
                                searchParams: (0, r.P)({
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    'sort-by': t.sortBy,
                                    'sort-order': t.sortOrder,
                                    playlistMetaType: t.playlistMetaType,
                                    withTracks: t.withTracks,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        ),
                        i = await s.json();
                    return { likedPlaylists: i.result, pager: i.pager };
                }
                async getPlaylistsKinds(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/playlists/list/kinds'),
                            this.createHttpOptions({
                                timeoutKey: 'getPlaylistsKinds',
                                params: t,
                                searchParams: (0, r.P)({ addPlaylistWithLikes: t.addPlaylistWithLikes }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async createPlaylist(t, e) {
                    return (
                        await this.httpClient.post(
                            'users/'.concat(t.userId, '/playlists/create'),
                            this.createHttpOptions({
                                timeoutKey: 'createPlaylist',
                                params: t,
                                searchParams: (0, r.P)({ visibility: t.visibility, title: t.title, description: t.description }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getPlaylistsByKinds(t, e) {
                    return (
                        await this.httpClient.post(
                            'users/'.concat(t.userId, '/playlists'),
                            this.createHttpOptions({
                                timeoutKey: 'getPlaylistsByKinds',
                                params: t,
                                searchParams: (0, r.P)({ kinds: t.kinds, withLikesCount: t.withLikesCount, withTracks: t.withTracks }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getCreatedPlaylists(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/playlists/list'),
                            this.createHttpOptions({
                                timeoutKey: 'getCreatedPlaylists',
                                params: t,
                                searchParams: (0, r.P)({
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    'sort-by': t.sortBy,
                                    'sort-order': t.sortOrder,
                                    withLikesCount: t.withLikesCount,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getPlaylistWithRichTracks(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/playlists/').concat(t.playlistKind),
                            this.createHttpOptions({
                                timeoutKey: 'getPlaylistWithRichTracks',
                                params: t,
                                searchParams: (0, r.P)({
                                    resumeStream: t.resumeStream,
                                    trackMetaType: t.trackMetaType,
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    trackPlayCounts: t.trackPlayCounts,
                                    withSimilarsLikesCount: t.withSimilarsLikesCount,
                                    richTracks: !0,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async changePlaylistTitle(t, e) {
                    return (
                        await this.httpClient.post(
                            'users/'.concat(t.userId, '/playlists/').concat(t.playlistKind, '/name'),
                            this.createHttpOptions({
                                timeoutKey: 'changePlaylistTitle',
                                params: t,
                                searchParams: (0, r.P)({ value: t.title }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async changePlaylistPosition(t, e) {
                    return (
                        await this.httpClient.post(
                            'users/'.concat(t.userId, '/playlists/').concat(t.playlistKind, '/change-position'),
                            this.createHttpOptions({
                                timeoutKey: 'changePlaylistPosition',
                                params: t,
                                searchParams: (0, r.P)({ from: t.from, to: t.to }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async deletePlaylist(t, e) {
                    return (
                        await this.httpClient.post(
                            'users/'.concat(t.userId, '/playlists/').concat(t.playlistKind, '/delete'),
                            this.createHttpOptions({ timeoutKey: 'deletePlaylist', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async changePlaylistDescription(t, e) {
                    return (
                        await this.httpClient.post(
                            'users/'.concat(t.userId, '/playlists/').concat(t.playlistKind, '/description'),
                            this.createHttpOptions({
                                timeoutKey: 'changePlaylistDescription',
                                params: t,
                                searchParams: (0, r.P)({ value: t.description }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getPlaylistWithTracksIds(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/playlists/').concat(t.playlistKind),
                            this.createHttpOptions({
                                timeoutKey: 'getPlaylistWithTracksIds',
                                params: t,
                                searchParams: (0, r.P)({
                                    resumeStream: t.resumeStream,
                                    trackMetaType: t.trackMetaType,
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    trackPlayCounts: t.trackPlayCounts,
                                    withSimilarsLikesCount: t.withSimilarsLikesCount,
                                    richTracks: !1,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async likeTrack(t, e) {
                    let s = await this.httpClient.post(
                            'users/'.concat(t.userId, '/likes/tracks/add'),
                            this.createHttpOptions({
                                timeoutKey: 'likeTrack',
                                params: t,
                                searchParams: (0, r.P)({ 'track-id': t.entityId }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        ),
                        i = await s.json();
                    return (null == i ? void 0 : i.revision) ? a.f.OK : a.f.ERROR;
                }
                async unlikeTrack(t, e) {
                    let s = await this.httpClient.post(
                            'users/'.concat(t.userId, '/likes/tracks/').concat(t.entityId, '/remove'),
                            this.createHttpOptions({ timeoutKey: 'unlikeTrack', params: t, signal: null == e ? void 0 : e.signal }),
                        ),
                        i = await s.json();
                    return (null == i ? void 0 : i.revision) ? a.f.OK : a.f.ERROR;
                }
                async getDislikedTracks(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/dislikes/tracks'),
                            this.createHttpOptions({ timeoutKey: 'getDislikedTracks', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async dislikeTrack(t, e) {
                    let s = await this.httpClient.post(
                            'users/'.concat(t.userId, '/dislikes/tracks/add'),
                            this.createHttpOptions({
                                timeoutKey: 'dislikeTrack',
                                params: t,
                                searchParams: (0, r.P)({ 'track-id': t.entityId }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        ),
                        i = await s.json();
                    return (null == i ? void 0 : i.revision) ? a.f.OK : a.f.ERROR;
                }
                async undislikeTrack(t, e) {
                    let s = await this.httpClient.post(
                            'users/'.concat(t.userId, '/dislikes/tracks/').concat(t.entityId, '/remove'),
                            this.createHttpOptions({ timeoutKey: 'undislikeTrack', params: t, signal: null == e ? void 0 : e.signal }),
                        ),
                        i = await s.json();
                    return (null == i ? void 0 : i.revision) ? a.f.OK : a.f.ERROR;
                }
                async likeArtist(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/likes/artists/add'),
                        this.createHttpOptions({
                            timeoutKey: 'likeArtist',
                            params: t,
                            searchParams: (0, r.P)({ 'artist-id': t.entityId }),
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                    return (await s.json()) === a.f.OK ? a.f.OK : a.f.ERROR;
                }
                async unlikeArtist(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/likes/artists/').concat(t.entityId, '/remove'),
                        this.createHttpOptions({ timeoutKey: 'unlikeArtist', params: t, signal: null == e ? void 0 : e.signal }),
                    );
                    return (await s.json()) === a.f.OK ? a.f.OK : a.f.ERROR;
                }
                async dislikeArtist(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/dislikes/artists/add'),
                        this.createHttpOptions({
                            timeoutKey: 'dislikeArtist',
                            params: t,
                            searchParams: (0, r.P)({ 'artist-id': t.entityId }),
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                    return (await s.json()) === a.f.OK ? a.f.OK : a.f.ERROR;
                }
                async undislikeArtist(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/dislikes/artists/').concat(t.entityId, '/remove'),
                        this.createHttpOptions({ timeoutKey: 'undislikeArtist', params: t, signal: null == e ? void 0 : e.signal }),
                    );
                    return (await s.json()) === a.f.OK ? a.f.OK : a.f.ERROR;
                }
                async likeAlbum(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/likes/albums/add'),
                        this.createHttpOptions({
                            timeoutKey: 'likeAlbum',
                            params: t,
                            searchParams: (0, r.P)({ 'album-id': t.entityId }),
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                    return (await s.json()) === a.f.OK ? a.f.OK : a.f.ERROR;
                }
                async unlikeAlbum(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/likes/albums/').concat(t.entityId, '/remove'),
                        this.createHttpOptions({ timeoutKey: 'unlikeAlbum', params: t, signal: null == e ? void 0 : e.signal }),
                    );
                    return (await s.json()) === a.f.OK ? a.f.OK : a.f.ERROR;
                }
                async likePlaylist(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/likes/playlists/add'),
                        this.createHttpOptions({
                            timeoutKey: 'likePlaylist',
                            params: t,
                            searchParams: (0, r.P)({ 'owner-uid': t.ownerId, kind: t.kindId }),
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                    return (await s.json()) === a.f.OK ? a.f.OK : a.f.ERROR;
                }
                async unlikePlaylist(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/likes/playlists/').concat(t.ownerId, '-').concat(t.kindId, '/remove'),
                        this.createHttpOptions({ timeoutKey: 'unlikePlaylist', params: t, signal: null == e ? void 0 : e.signal }),
                    );
                    return (await s.json()) === a.f.OK ? a.f.OK : a.f.ERROR;
                }
                async getLikedClips(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/likes/clips'),
                            this.createHttpOptions({
                                timeoutKey: 'getLikedClips',
                                params: t,
                                searchParams: (0, r.P)({ page: t.page, pageSize: t.pageSize }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async likeClip(t, e) {
                    await this.httpClient.post(
                        'users/'.concat(t.userId, '/likes/clips/add'),
                        this.createHttpOptions({
                            timeoutKey: 'likeClip',
                            params: t,
                            searchParams: (0, r.P)({ 'clip-id': t.entityId }),
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                }
                async unlikeClip(t, e) {
                    await this.httpClient.post(
                        'users/'.concat(t.userId, '/likes/clips/').concat(t.entityId, '/remove'),
                        this.createHttpOptions({ timeoutKey: 'unlikeClip', params: t, signal: null == e ? void 0 : e.signal }),
                    );
                }
                async presaveAlbum(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/presaves/add'),
                        this.createHttpOptions({
                            timeoutKey: 'presaveAlbum',
                            params: t,
                            searchParams: (0, r.P)({ albumId: t.albumId, likeAfterRelease: t.likeAfterRelease }),
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                    return (await s.json()) === n.J.OK ? n.J.OK : n.J.ERROR;
                }
                async removePresaveAlbum(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/presaves/remove'),
                        this.createHttpOptions({
                            timeoutKey: 'removePresaveAlbum',
                            params: t,
                            searchParams: (0, r.P)({ albumId: t.albumId }),
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                    return (await s.json()) === n.J.OK ? n.J.OK : n.J.ERROR;
                }
                async getPresaves(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/presaves'),
                            this.createHttpOptions({
                                timeoutKey: 'getPresaves',
                                params: t,
                                searchParams: (0, r.P)({ includeReleased: t.includeReleased, includeUpcoming: t.includeUpcoming }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getSearchHistory(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/search-history'),
                            this.createHttpOptions({
                                timeoutKey: 'getSearchHistory',
                                params: t,
                                searchParams: (0, r.P)({ clientSearchContext: t.clientSearchContext, contentType: t.contentType, supportedTypes: t.supportedTypes }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async clearSearchHistory(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/search-history/clear'),
                            this.createHttpOptions({ timeoutKey: 'clearSearchHistory', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async changePlaylistRelative(t, e) {
                    return (
                        await this.httpClient.post(
                            'users/'.concat(t.userId, '/playlists/').concat(t.playlistKind, '/change-relative'),
                            this.createHttpOptions({
                                timeoutKey: 'changePlaylistRelative',
                                params: t,
                                body: (0, r.P)({ diff: t.diff, revision: t.revision }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async uploadPlaylistCover(t, e) {
                    return (
                        await this.httpClient.post(
                            'users/'.concat(t.userId, '/playlists/').concat(t.playlistKind, '/cover/upload'),
                            this.createHttpOptions({ timeoutKey: 'uploadPlaylistCover', params: t, body: t.formData, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getPlaylistTrailer(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/playlists/').concat(t.playlistKind, '/trailer'),
                            this.createHttpOptions({ timeoutKey: 'getPlaylistTrailer', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async togglePlaylistVisibility(t, e) {
                    return (
                        await this.httpClient.post(
                            'users/'.concat(t.userId, '/playlists/').concat(t.playlistKind, '/visibility'),
                            this.createHttpOptions({
                                timeoutKey: 'createPlaylist',
                                params: t,
                                searchParams: (0, r.P)({ value: t.visibility }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        50302: (t, e, s) => {
            'use strict';
            s.d(e, { w: () => n });
            var i = s(58025),
                a = s(6490);
            class n extends a.X {
                async getAllIds(t, e) {
                    return (
                        await this.httpClient.get(
                            'library/all-ids',
                            this.createHttpOptions({ timeoutKey: 'getAllIds', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        55040: (t, e, s) => {
            'use strict';
            s.d(e, { M: () => c, X: () => l });
            var i = s(36432),
                a = s(78773);
            let n = async (t) => t.then((t) => t.default),
                r = a.pE[a.cy],
                o = r.langs.reduce((t, e) => (t.set(e, async () => n(s(12526)('./'.concat(e, '.json')))), t), new Map()),
                l = r.langs.reduce((t, e) => (t.set(e, async () => n(s(46646)('./'.concat(e, '.json')))), t), new Map()),
                c = async function (t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
                        s = e.get(t),
                        a = e.get('ru');
                    if (s) return s();
                    if (a) return a();
                    throw new i.t('No translations for '.concat(t, ' or ru languages'));
                };
        },
        55256: (t, e, s) => {
            var i = {
                './default.ts': [35125, 5125],
                './development.ts': [82601, 2601],
                './production.ts': [32872, 491],
                './qa.ts': [88313, 694],
                './stress.ts': [95156, 5156],
                './tokens/DevToolsTokens.ts': [41871],
            };
            function a(t) {
                if (!s.o(i, t))
                    return Promise.resolve().then(() => {
                        var e = Error("Cannot find module '" + t + "'");
                        throw ((e.code = 'MODULE_NOT_FOUND'), e);
                    });
                var e = i[t],
                    a = e[0];
                return Promise.all(e.slice(1).map(s.e)).then(() => s(a));
            }
            ((a.keys = () => Object.keys(i)), (a.id = 55256), (t.exports = a));
        },
        58123: (t, e, s) => {
            'use strict';
            s.d(e, { T: () => r });
            var i = s(58025),
                a = s(6490),
                n = s(19786);
            class r extends a.X {
                async getPlaylist(t, e) {
                    // for PulseSync WebHost: BEGIN capture native playlist metadata for addon publication
                    let pulseSyncEntity = await (
                        await this.httpClient.get(
                            'playlist/'.concat(t.playlistUuid),
                            this.createHttpOptions({
                                timeoutKey: 'getPlaylist',
                                params: t,
                                searchParams: (0, n.P)({
                                    resumeStream: t.resumeStream,
                                    richTracks: t.richTracks,
                                    trackPlayCounts: t.trackPlayCounts,
                                    withSimilarsLikesCount: t.withSimilarsLikesCount,
                                    page: t.page,
                                    pageSize: t.pageSize,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                    // for PulseSync WebHost: END capture native playlist metadata for addon publication
                    // for PulseSync WebHost: BEGIN publish playlist page metadata to addons
                    return (window.pulsesyncApi?.publishPageEntity?.('playlist', pulseSyncEntity), pulseSyncEntity);
                    // for PulseSync WebHost: END publish playlist page metadata to addons
                }
                async getSimilarEntities(t, e) {
                    return (
                        await this.httpClient.get(
                            'playlist/'.concat(t.playlistUuid, '/similar-entities'),
                            this.createHttpOptions({ timeoutKey: 'getSimilarEntities', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        58174: (t, e, s) => {
            'use strict';
            s.d(e, { C: () => r });
            var i = s(58025),
                a = s(6490),
                n = s(73364);
            class r extends a.X {
                async wheelNew(t, e) {
                    let s = (0, n.F)({ context: t.context, feedbacks: t.feedbacks });
                    return (
                        await this.httpClient.post(
                            'wheel/new',
                            this.createHttpOptions({ timeoutKey: 'wheelNew', params: t, signal: null == e ? void 0 : e.signal, json: s }),
                        )
                    ).json();
                }
                async feedbacks(t, e) {
                    let s = (0, n.F)({ feedbacks: t.feedbacks });
                    await this.httpClient.post(
                        'wheel/feedbacks',
                        this.createHttpOptions({ timeoutKey: 'feedbacks', params: t, signal: null == e ? void 0 : e.signal, json: s }),
                    );
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        59158: (t, e, s) => {
            'use strict';
            s.d(e, { E: () => r });
            var i = s(58025),
                a = s(6490),
                n = s(73364);
            class r extends a.X {
                async changeTrack(t, e) {
                    return (
                        await this.httpClient.post(
                            'ugc/tracks/'.concat(t.trackId, '/change'),
                            this.createHttpOptions({
                                timeoutKey: 'changeTrack',
                                params: t,
                                json: (0, n.F)({ artist: t.artist, title: t.title }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        59628: (t, e, s) => {
            'use strict';
            s.d(e, { y: () => r });
            var i = s(93588),
                a = s(92231),
                n = s(90932);
            let r = () => ''.concat(i.sK.DESKTOP).concat((0, n.$)((0, a.u)()));
        },
        59815: (t, e, s) => {
            'use strict';
            s.d(e, { D: () => r });
            var i = s(58025),
                a = s(6490),
                n = s(19786);
            class r extends a.X {
                async getShelfRecentlyPlayed(t, e) {
                    return (
                        await this.httpClient.get(
                            'non-music/bookshelf/recently-played',
                            this.createHttpOptions({
                                timeoutKey: 'getShelfRecentlyPlayed',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, n.P)({ page: null == t ? void 0 : t.page, pageSize: null == t ? void 0 : t.pageSize }),
                            }),
                        )
                    ).json();
                }
                async getShelfLiked(t, e) {
                    return (
                        await this.httpClient.get(
                            'non-music/bookshelf/liked',
                            this.createHttpOptions({
                                timeoutKey: 'getShelfLiked',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, n.P)({ page: null == t ? void 0 : t.page, pageSize: null == t ? void 0 : t.pageSize }),
                            }),
                        )
                    ).json();
                }
                async getPlaylists(t, e) {
                    return (
                        await this.httpClient.get(
                            'non-music/editorial/playlist/'.concat(t.categoryId, '/'),
                            this.createHttpOptions({ timeoutKey: 'getPlaylists', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getNewEpisodes(t, e) {
                    return (
                        await this.httpClient.get(
                            'non-music/new-episodes',
                            this.createHttpOptions({ timeoutKey: 'getNewEpisodes', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getEditorialAlbums(t, e) {
                    return (
                        await this.httpClient.get(
                            'non-music/editorial/album/'.concat(t.id),
                            this.createHttpOptions({ timeoutKey: 'getEditorialAlbums', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getCategory(t, e) {
                    return (
                        await this.httpClient.get(
                            'non-music/category/'.concat(t.categoryId),
                            this.createHttpOptions({ timeoutKey: 'getCategory', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getCategoryAlbums(t, e) {
                    return (
                        await this.httpClient.get(
                            'non-music/category/'.concat(t.id, '/albums'),
                            this.createHttpOptions({ timeoutKey: 'getCategoryAlbums', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        60070: (t, e, s) => {
            'use strict';
            s.d(e, { s: () => n });
            var i = s(58025),
                a = s(6490);
            class n extends a.X {
                async uploadFile(t, e) {
                    return (
                        await this.httpClient.post(
                            t.url,
                            this.createHttpOptions(
                                {
                                    timeoutKey: 'uploadFile',
                                    params: t,
                                    body: t.formData,
                                    excludeHeaders: ['x-request-id', 'x-retry-count'],
                                    signal: null == e ? void 0 : e.signal,
                                },
                                { withoutHeaders: !0 },
                            ),
                        )
                    ).json();
                }
                async reportForPromo(t, e) {
                    await this.httpClient.get(
                        t,
                        this.createHttpOptions(
                            { timeoutKey: 'reportForPromo', excludeHeaders: ['x-request-id', 'x-retry-count'], signal: null == e ? void 0 : e.signal },
                            { withoutHeaders: !0 },
                        ),
                    );
                }
                async getLyricsText(t, e) {
                    return (
                        await this.httpClient.get(
                            t,
                            this.createHttpOptions(
                                { timeoutKey: 'getLyricsText', excludeHeaders: ['x-request-id', 'x-retry-count'], signal: null == e ? void 0 : e.signal },
                                { withoutHeaders: !0 },
                            ),
                        )
                    ).text();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        61279: (t, e, s) => {
            'use strict';
            s.d(e, { L: () => n });
            var i = s(58025),
                a = s(6490);
            class n extends a.X {
                async getSkeleton(t, e) {
                    return (
                        await this.httpClient.get(
                            'children-landing/category/'.concat(t.categoryId),
                            this.createHttpOptions({ timeoutKey: 'getSkeleton', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getEditorialPlaylist(t, e) {
                    return (
                        await this.httpClient.get(
                            'children-landing/editorial/playlist/'.concat(t.id),
                            this.createHttpOptions({ timeoutKey: 'getEditorialPlaylist', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getEditorialAlbum(t, e) {
                    return (
                        await this.httpClient.get(
                            'children-landing/editorial/album/'.concat(t.id),
                            this.createHttpOptions({ timeoutKey: 'getEditorialAlbum', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        62631: (t, e, s) => {
            'use strict';
            async function i(t) {
                let { config: e } = await s(55256)('./'.concat(t, '.ts'));
                return e();
            }
            s.d(e, { B: () => i });
        },
        65844: (t, e, s) => {
            'use strict';
            s.d(e, { J: () => n });
            var i = s(58025),
                a = s(6490);
            class n extends a.X {
                async getInviteInfo(t) {
                    return (
                        await this.httpClient.get(
                            'account/family/invite-info/'.concat(t.inviteId, '/'),
                            this.createHttpOptions({ timeoutKey: 'getInviteInfo', params: t }),
                        )
                    ).json();
                }
                async acceptInvite(t) {
                    await this.httpClient.post('account/family/accept-invite/'.concat(t.inviteId), this.createHttpOptions({ timeoutKey: 'acceptInvite', params: t }));
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        67154: (t, e, s) => {
            'use strict';
            s.d(e, { V: () => a });
            var i = s(58025);
            class a {
                setPassportUid(t) {
                    let e = this.executionContext.getStore();
                    (void 0 !== e && (e.puid = t), (this.passportUid = t));
                }
                getPassportUid() {
                    return this.passportUid;
                }
                constructor(t) {
                    ((0, i._)(this, 'executionContext', void 0), (0, i._)(this, 'passportUid', void 0), (this.executionContext = t));
                }
            }
        },
        68510: (t, e, s) => {
            'use strict';
            s.d(e, { a: () => r });
            var i = s(58025),
                a = s(6490),
                n = s(19786);
            class r extends a.X {
                async getTopByGenre(t, e) {
                    return (
                        await this.httpClient.get(
                            'top/'.concat(t.category),
                            this.createHttpOptions({
                                timeoutKey: 'getTopByGenre',
                                params: t,
                                searchParams: (0, n.P)({
                                    genre: t.genre,
                                    period: t.period,
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    popularTracksPerArtist: t.popularTracksPerArtist,
                                    chartRegion: t.chartRegion,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        69935: (t, e, s) => {
            'use strict';
            s.d(e, { L: () => i });
            let i = 'mocksConfiguration';
        },
        71062: (t, e, s) => {
            'use strict';
            s.d(e, { N: () => n });
            var i = s(58025),
                a = s(58848);
            class n {
                getHeaders(t) {
                    return t instanceof Headers ? Object.fromEntries(t.entries()) : t;
                }
                getUrl(t) {
                    return new URL(t || 'https://unknown');
                }
                constructor(t) {
                    ((0, i._)(this, 'logger', void 0),
                        (0, i._)(this, 'beforeRequestHook', (t) => {
                            let e = this.getUrl(t.url);
                            this.logger.info('[Resource] Request started '.concat(t.method, ' ').concat(e.origin, ' ').concat(e.pathname).concat(e.search), {
                                request: { method: t.method, url: t.url, headers: this.getHeaders(t.headers), body: t.json },
                            });
                        }),
                        (0, i._)(this, 'beforeRetryHook', (t, e) => {
                            let s = t.cause;
                            if ((0, a.N)(s)) {
                                var i, n, r, o, l, c, u, d, h, p, g, m, y, v;
                                let a = {
                                    error: { name: t.name, message: t.message, code: t.code, data: t.data, stack: t.stack },
                                    request: {
                                        method: (null == (i = s.request) ? void 0 : i.method) || (null == (n = s.options) ? void 0 : n.method),
                                        url: (null == (r = s.request) ? void 0 : r.url) || (null == (o = s.options) ? void 0 : o.url),
                                        headers: this.getHeaders((null == (l = s.request) ? void 0 : l.headers) || (null == (c = s.options) ? void 0 : c.headers)),
                                        body: (null == (u = s.request) ? void 0 : u.json) || (null == (d = s.options) ? void 0 : d.json),
                                        retries: e,
                                    },
                                };
                                void 0 !== s.response &&
                                    (a.response = {
                                        statusCode: s.response.statusCode,
                                        headers: this.getHeaders(s.response.headers),
                                        time: null == (v = s.response.timings) || null == (y = v.phases) ? void 0 : y.total,
                                    });
                                let C = this.getUrl((null == (h = s.request) ? void 0 : h.url) || (null == (p = s.options) ? void 0 : p.url));
                                this.logger.warn(
                                    '[Resource] Retry request '
                                        .concat((null == (g = s.request) ? void 0 : g.method) || (null == (m = s.options) ? void 0 : m.method), ' ')
                                        .concat(C.origin, ' ')
                                        .concat(C.pathname)
                                        .concat(C.search),
                                    a,
                                );
                            } else
                                this.logger.warn('[Resource] Retry request (unknown)', {
                                    error: { name: t.name, message: t.message, code: t.code, data: t.data, stack: t.stack },
                                });
                        }),
                        (0, i._)(this, 'afterResponseHook', (t) => {
                            if ((t.statusCode || t.status) >= 200 && 299 >= (t.statusCode || t.status)) {
                                var e, s;
                                let i = this.getUrl(t.url);
                                this.logger.info(
                                    '[Resource] Request resolved '
                                        .concat(t.statusCode, ' ')
                                        .concat(t.request.method, ' ')
                                        .concat(i.origin, ' ')
                                        .concat(i.pathname)
                                        .concat(i.search),
                                    {
                                        request: { method: t.request.method, url: t.url, headers: this.getHeaders(t.request.headers), body: t.request.body },
                                        response: {
                                            statusCode: t.statusCode || t.status,
                                            headers: this.getHeaders(t.headers),
                                            time: null == (s = t.timings) || null == (e = s.phases) ? void 0 : e.total,
                                        },
                                    },
                                );
                            }
                            return t;
                        }),
                        (0, i._)(this, 'beforeErrorHook', (t) => {
                            let e = t.cause;
                            if ((0, a.N)(e)) {
                                var s, i, n, r, o, l, c, u, d, h, p, g, m, y;
                                let a = {
                                    error: { name: t.name, message: t.message, code: t.code, data: t.data, stack: t.stack },
                                    request: {
                                        method: (null == (s = e.request) ? void 0 : s.method) || (null == (i = e.options) ? void 0 : i.method),
                                        url: (null == (n = e.request) ? void 0 : n.url) || (null == (r = e.options) ? void 0 : r.url),
                                        headers: this.getHeaders((null == (o = e.request) ? void 0 : o.headers) || (null == (l = e.options) ? void 0 : l.headers)),
                                        body: (null == (c = e.request) ? void 0 : c.json) || (null == (u = e.options) ? void 0 : u.json),
                                    },
                                };
                                void 0 !== e.response &&
                                    (a.response = {
                                        statusCode: e.response.statusCode || e.response.status,
                                        headers: this.getHeaders(e.response.headers),
                                        time: null == (y = e.response.timings) || null == (m = y.phases) ? void 0 : m.total,
                                    });
                                let v = this.getUrl((null == (d = e.request) ? void 0 : d.url) || (null == (h = e.options) ? void 0 : h.url));
                                this.logger.error(
                                    '[Resource] Request failed '
                                        .concat((null == (p = e.request) ? void 0 : p.method) || (null == (g = e.options) ? void 0 : g.method), ' ')
                                        .concat(v.origin, ' ')
                                        .concat(v.pathname)
                                        .concat(v.search, ', reason: ')
                                        .concat(t.name),
                                    a,
                                );
                            } else
                                this.logger.error('[Resource] Request failed (unknown), reason: '.concat(t.name), {
                                    error: { name: t.name, message: t.message, code: t.code, data: t.data, stack: t.stack },
                                });
                            return t;
                        }),
                        (this.logger = t));
                }
            }
        },
        73364: (t, e, s) => {
            'use strict';
            function i(t) {
                let e = {};
                return (
                    Object.getOwnPropertyNames(t)
                        .filter((e) => void 0 !== t[e] && null !== t[e])
                        .map((s) => {
                            e[s] = t[s];
                        }),
                    e
                );
            }
            s.d(e, { F: () => i });
        },
        73650: (t, e, s) => {
            'use strict';
            s.d(e, { q: () => a });
            var i = s(58025);
            class a {
                get(t) {
                    return this.config.get(t);
                }
                set(t, e) {
                    this.config.set(t, e);
                }
                constructor(t) {
                    ((0, i._)(this, 'config', void 0), (this.config = t));
                }
            }
        },
        74128: (t, e, s) => {
            'use strict';
            s.d(e, { p: () => o });
            var i = s(58025),
                a = s(6490),
                n = s(73364),
                r = s(19786);
            class o extends a.X {
                async getInstantMixedSearch(t, e) {
                    // for PulseSync WebHost: BEGIN wrap the upstream resource method for addon interception
                    const pulseSyncOriginal = async (t, e) => {
                    return (
                        await this.httpClient.get(
                            'search/instant/mixed',
                            this.createHttpOptions({
                                timeoutKey: 'getInstantMixedSearch',
                                params: t,
                                searchParams: (0, r.P)({
                                    text: t.text,
                                    type: t.type,
                                    page: t.page,
                                    filter: t.filter,
                                    pageSize: t.pageSize,
                                    nocorrect: t.nocorrent,
                                    onlyCounters: t.onlyCounters,
                                    withLikesCount: t.withLikesCount,
                                    from: t.from,
                                    inputType: t.inputType,
                                    vocalTypes: t.vocalTypes,
                                    releaseYears: t.releaseYears,
                                    epochs: t.epochs,
                                    moods: t.moods,
                                    activities: t.activities,
                                    genres: t.genres,
                                    lyricsLanguages: t.lyricsLanguages,
                                    moodScoresFrom: t.moodScoresFrom,
                                    moodScoresTo: t.moodScoresTo,
                                    activityScoresFrom: t.activityScoresFrom,
                                    activityScoresTo: t.activityScoresTo,
                                    withBestResults: t.withBestResults,
                                    locations: t.locations,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                    };
                    // for PulseSync WebHost: END wrap the upstream resource method for addon interception
                    // for PulseSync WebHost: BEGIN intercept search.getInstantMixedSearch for addons
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('search', 'getInstantMixedSearch', [t, e], pulseSyncOriginal)
                        : await pulseSyncOriginal(t, e);
                    return pulseSyncResponse;
                    // for PulseSync WebHost: END intercept search.getInstantMixedSearch for addons
                }
                async sendFeedback(t, e) {
                    let s = (0, n.F)({
                        blockType: t.blockType,
                        entityId: t.entityId,
                        timestamp: t.timestamp,
                        blockPosition: t.blockPosition,
                        position: t.position,
                        searchRequestId: t.searchRequestId,
                        query: t.query,
                        page: t.page,
                        clickType: t.clickType,
                        clientNow: t.clientNow,
                        absolutePosition: t.absoluteBlockPosition,
                        clientSearchContext: t.clientSearchContext,
                        searchType: t.searchType,
                    });
                    return (
                        await this.httpClient.post(
                            'search/feedback',
                            this.createHttpOptions({ timeoutKey: 'sendFeedback', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async sendQ2vSuggestionsFeedback(t, e) {
                    let s = (0, n.F)({ events: t.events });
                    return (
                        await this.httpClient.post(
                            'search/suggestions/q2v/feedback',
                            this.createHttpOptions({ timeoutKey: 'sendQ2vSuggestionsFeedback', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        74906: (t, e, s) => {
            'use strict';
            s.d(e, { U: () => r });
            var i = s(58025),
                a = s(6490),
                n = s(19786);
            class r extends a.X {
                async getLumen(t, e) {
                    return (
                        await this.httpClient.get(
                            'lumen',
                            this.createHttpOptions({
                                timeoutKey: 'getLumen',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                cacheControl: null == e ? void 0 : e.cacheControl,
                                searchParams: (0, n.P)({ hash: null == t ? void 0 : t.hash }),
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        75749: (t, e, s) => {
            'use strict';
            s.d(e, { o: () => n });
            var i = s(58848),
                a = s(57024);
            let n = (t, e) => async (s) => {
                let n = s.cause;
                if (
                    (0, i.N)(n) &&
                    401 ===
                        ((t) => {
                            var e, s, a, n;
                            if ((0, i.N)(t.cause))
                                return (
                                    (null == (s = t.cause) || null == (e = s.response) ? void 0 : e.statusCode) ||
                                    (null == (n = t.cause) || null == (a = n.response) ? void 0 : a.status)
                                );
                        })(s)
                )
                    try {
                        let t = await e.about();
                        (0, a.uV)({ stage: 'account-validation', result: (0, a.UC)(t), decision: 'keep-session' });
                    } catch (s) {
                        let e = (0, a.dM)(s);
                        '401' === e
                            ? ((0, a.uV)({ stage: 'attempt-start', trigger: 'confirmed-401' }),
                              (0, a.uV)({ stage: 'account-validation', result: e, decision: 'redirect-authorization' }),
                              t.redirectToAuthorizationUrl())
                            : (0, a.uV)({ stage: 'account-validation', result: e, decision: 'none' });
                    }
                return s;
            };
        },
        76597: (t, e, s) => {
            'use strict';
            s.d(e, { c: () => r });
            var i = s(58025),
                a = s(6490),
                n = s(73364);
            class r extends a.X {
                async sendViews(t, e) {
                    let s = (0, n.F)({ lyricViews: t.lyricViews });
                    await this.httpClient.post(
                        'lyric-views',
                        this.createHttpOptions({ timeoutKey: 'sendViews', params: t, signal: null == e ? void 0 : e.signal, json: s }),
                    );
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        77448: (t, e, s) => {
            'use strict';
            s.d(e, { l: () => n });
            var i = s(58025),
                a = s(6490);
            class n extends a.X {
                async getPins(t, e) {
                    return (
                        await this.httpClient.get('pins', this.createHttpOptions({ timeoutKey: 'getPins', params: t, signal: null == e ? void 0 : e.signal }))
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        78773: (t, e, s) => {
            'use strict';
            s.d(e, { Xn: () => n, cy: () => a, pE: () => i });
            let i = {
                    yandex: {
                        regions: ['RU', 'BY', 'KZ', 'UZ'],
                        regionLangs: {
                            RU: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            BY: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            KZ: { langs: ['kk', 'en', 'ru', 'uz'], defaultLang: 'kk' },
                            UZ: { langs: ['uz', 'en', 'ru', 'kk'], defaultLang: 'uz' },
                        },
                        langs: ['ru', 'en', 'uz', 'kk'],
                        defaultLang: 'ru',
                    },
                    yango: {
                        regions: ['AE', 'BH', 'EG', 'IQ', 'JO', 'KW', 'OM', 'QA', 'SA'],
                        regionLangs: {
                            AE: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            BH: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            EG: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            IQ: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            JO: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            KW: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            OM: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            QA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            SA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                        },
                        langs: ['en', 'ar'],
                        defaultLang: 'en',
                    },
                },
                a = 'yandex',
                n = 'ru-RU';
        },
        79078: (t, e, s) => {
            'use strict';
            s.d(e, { Q: () => o });
            var i = s(58025),
                a = s(6490),
                n = s(73364),
                r = s(19786);
            class o extends a.X {
                async cards(t, e) {
                    let s = (0, n.F)({ trackIds: t.trackIds, viewedCards: t.viewedCards, viewedBigCards: t.viewedBigCards, locations: t.locations }),
                        i = await this.httpClient.post(
                            'words/cards',
                            this.createHttpOptions({
                                timeoutKey: 'cards',
                                params: t,
                                json: s,
                                searchParams: (0, r.P)({ locations: t.locations }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        );
                    return (await i.json()).result;
                }
                async bigCards(t, e) {
                    let s = (0, n.F)({ bigCardIds: t.bigCardIds, bigCardContexts: t.bigCardContexts }),
                        i = await this.httpClient.post(
                            'words/big-cards',
                            this.createHttpOptions({ timeoutKey: 'bigCards', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        );
                    return (await i.json()).result;
                }
                async cardsFeedback(t, e) {
                    let s = (0, n.F)({ feedback: t.feedback });
                    await this.httpClient.put(
                        'words/cards/feedback',
                        this.createHttpOptions({ timeoutKey: 'cardsFeedback', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                    );
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        79250: (t, e, s) => {
            'use strict';
            s.d(e, { S: () => r });
            var i = s(58025),
                a = s(19786),
                n = s(6490);
            class r extends n.X {
                async getUploadUrl(t, e) {
                    return (
                        await this.httpClient.post(
                            'loader/upload-url',
                            this.createHttpOptions({
                                timeoutKey: 'getUploadUrl',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ uid: t.uid, 'playlist-id': t.playlistId, visibility: t.visibility, path: t.path }),
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        80188: (t, e, s) => {
            'use strict';
            s.d(e, { N: () => n });
            var i = s(58025),
                a = s(6490);
            class n extends a.X {
                async getAlbumDonations(t, e) {
                    let s = await this.httpClient.get(
                        'donation/albums/'.concat(t.albumId),
                        this.createHttpOptions({ timeoutKey: 'getAlbumDonations', params: t, signal: null == e ? void 0 : e.signal }),
                    );
                    return await s.json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        80250: (t, e, s) => {
            'use strict';
            s.d(e, { c: () => r });
            var i = s(58025),
                a = s(6490),
                n = s(19786);
            class r extends a.X {
                async progressSync(t, e) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/sync',
                            this.createHttpOptions({
                                timeoutKey: 'progressSync',
                                params: t,
                                json: { lastSyncTimestamp: t.lastSyncTimestamp, trackStreams: t.trackStreams },
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async markAlbumFinished(t, e) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-album-finished',
                            this.createHttpOptions({
                                timeoutKey: 'markAlbumFinished',
                                params: t,
                                searchParams: (0, n.P)({ albumId: t.albumId }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async markAlbumUnfinished(t, e) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-album-unfinished',
                            this.createHttpOptions({
                                timeoutKey: 'markAlbumUnfinished',
                                params: t,
                                searchParams: (0, n.P)({ albumId: t.albumId }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async markFinished(t, e) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-finished',
                            this.createHttpOptions({
                                timeoutKey: 'markFinished',
                                params: t,
                                searchParams: (0, n.P)({ trackId: t.trackId }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async markUnfinished(t, e) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-unfinished',
                            this.createHttpOptions({
                                timeoutKey: 'markUnfinished',
                                params: t,
                                searchParams: (0, n.P)({ trackId: t.trackId }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async progressSaveCurrent(t, e) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/save-current',
                            this.createHttpOptions({
                                timeoutKey: 'progressSaveCurrent',
                                params: t,
                                searchParams: (0, n.P)({
                                    trackId: t.trackId,
                                    positionSec: t.positionSec,
                                    trackLengthSec: t.trackLengthSec,
                                    finished: t.finished,
                                    timestamp: t.timestamp,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        80389: (t, e, s) => {
            'use strict';
            s.d(e, { s: () => n });
            var i = s(58025),
                a = s(6490);
            class n extends a.X {
                async getTriggers(t, e) {
                    return (
                        await this.httpClient.post(
                            'dynamic-pages/trigger/polling',
                            this.createHttpOptions({ timeoutKey: 'getTriggers', params: t, json: { anchorIds: t.anchorIds }, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getTrigger(t, e) {
                    return (
                        await this.httpClient.get(
                            'dynamic-pages/trigger/polling/'.concat(t.anchorId),
                            this.createHttpOptions({ timeoutKey: 'getTrigger', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async shown(t, e) {
                    await this.httpClient.post(
                        'dynamic-pages/trigger/shown',
                        this.createHttpOptions({
                            timeoutKey: 'shown',
                            params: t,
                            json: { anchorIds: t.anchorIds, screenId: t.screenId },
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                }
                async action(t, e) {
                    await this.httpClient.post(
                        'dynamic-pages/trigger/action',
                        this.createHttpOptions({
                            timeoutKey: 'action',
                            params: t,
                            json: { anchorIds: t.anchorIds, screenId: t.screenId, actionId: t.actionId },
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                }
                async getTriggersV2(t, e) {
                    return (
                        await this.httpClient.post(
                            'dynamic-pages/v2/trigger/polling',
                            this.createHttpOptions({ timeoutKey: 'getTriggers', params: t, json: { anchorIds: t.anchorIds }, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async shownV2(t, e) {
                    await this.httpClient.post(
                        'dynamic-pages/v2/trigger/shown',
                        this.createHttpOptions({
                            timeoutKey: 'shown',
                            params: t,
                            json: { anchorIds: t.anchorIds, feedbackToken: t.feedbackToken },
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                }
                async actionV2(t, e) {
                    await this.httpClient.post(
                        'dynamic-pages/v2/trigger/action',
                        this.createHttpOptions({
                            timeoutKey: 'action',
                            params: t,
                            json: { anchorIds: t.anchorIds, actionId: t.actionId, feedbackToken: t.feedbackToken },
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        81102: (t, e, s) => {
            'use strict';
            s.d(e, { w: () => r });
            var i = s(58025),
                a = s(6490),
                n = s(73364);
            class r extends a.X {
                async createRoom(t, e) {
                    return (
                        await this.httpClient.post('wave/rooms', this.createHttpOptions({ timeoutKey: 'createRoom', params: t, signal: null == e ? void 0 : e.signal }))
                    ).json();
                }
                async getRooms(t, e) {
                    return (
                        await this.httpClient.get('wave/rooms', this.createHttpOptions({ timeoutKey: 'getRooms', params: t, signal: null == e ? void 0 : e.signal }))
                    ).json();
                }
                async getRoomById(t, e) {
                    return (
                        await this.httpClient.get(
                            'wave/rooms/'.concat(t.roomId),
                            this.createHttpOptions({ timeoutKey: 'getRoomById', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async editRoom(t, e) {
                    let s = (0, n.F)({ name: t.name });
                    return (
                        await this.httpClient.put(
                            'wave/rooms/'.concat(t.roomId),
                            this.createHttpOptions({ timeoutKey: 'editRoom', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async enterRoom(t, e) {
                    return (
                        await this.httpClient.put(
                            'wave/rooms/'.concat(t.roomId, '/enter'),
                            this.createHttpOptions({ timeoutKey: 'enterRoom', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async exitRoom(t, e) {
                    await this.httpClient.put(
                        'wave/rooms/'.concat(t.roomId, '/exit'),
                        this.createHttpOptions({ timeoutKey: 'exitRoom', params: t, signal: null == e ? void 0 : e.signal }),
                    );
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        83894: (t, e, s) => {
            'use strict';
            s.d(e, { H: () => n });
            var i = s(58025),
                a = s(6490);
            class n extends a.X {
                async getDisclaimers(t, e) {
                    // for PulseSync: BEGIN add the substituted-track informational disclaimer
                    // for PulseSync: BEGIN capture native disclaimers before adding the substituted-track notice
                    let i = await (
                            await this.httpClient.get(
                                'disclaimers',
                                this.createHttpOptions({ timeoutKey: 'getDisclaimers', params: t, signal: null == e ? void 0 : e.signal }),
                            )
                        ).json(),
                    // for PulseSync: END capture native disclaimers before adding the substituted-track notice
                        s = {
                            id: 'pulsesync-substituted',
                            type: 'informational',
                            title: 'Подменённые данные трека были восстановлены',
                        };
                    return Array.isArray(i) && !i.some((e) => e.id === s.id) ? [...i, s] : i;
                    // for PulseSync: END add the substituted-track informational disclaimer
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        86166: (t, e, s) => {
            'use strict';
            var i;
            (s.d(e, { $: () => i }),
                (function (t) {
                    ((t.RU = 'ru'),
                        (t.EN = 'en'),
                        (t.UK = 'uk'),
                        (t.BE = 'be'),
                        (t.KK = 'kk'),
                        (t.HY = 'hy'),
                        (t.AZ = 'az'),
                        (t.KA = 'ka'),
                        (t.HE = 'he'),
                        (t.UZ = 'uz'),
                        (t.TG = 'tg'),
                        (t.TR = 'tr'),
                        (t.JA = 'ja'),
                        (t.ZH = 'zh'),
                        (t.KO = 'ko'),
                        (t.TH = 'th'),
                        (t.ID = 'id'),
                        (t.DE = 'de'),
                        (t.EL = 'el'),
                        (t.RO = 'ro'),
                        (t.MO = 'mo'),
                        (t.AR = 'ar'));
                })(i || (i = {})));
        },
        87452: (t, e, s) => {
            'use strict';
            s.d(e, { P: () => r });
            var i = s(58025),
                a = s(90887),
                n = s(52830);
            class r {
                setRedirectUrl(t) {
                    let { pathname: e, host: s, searchParams: i, tld: a } = t;
                    ((this.host = null != s ? s : this.host),
                        (this.tld = null != a ? a : this.tld),
                        (this.searchParams = null != i ? i : this.searchParams),
                        (this.pathname = null != e ? e : this.pathname));
                }
                setRedirectHandler(t) {
                    this.redirect = t;
                }
                setPassportOriginResolver(t) {
                    this.passportOriginResolver = t;
                }
                get passportOrigin() {
                    var t, e;
                    return null != (e = null == (t = this.passportOriginResolver) ? void 0 : t.call(this)) ? e : this.config.passportCredentials.origin;
                }
                getPassportHostWithTld(t, e) {
                    if (!t || !e) return;
                    let {
                        passportCredentials: { host: s },
                    } = this.config;
                    return (0, a.r)(s, this.tld, n.B);
                }
                get passportLogin() {}
                get yandexUid() {}
                observe(t) {}
                disconnect() {}
                constructor(t, e) {
                    ((0, i._)(this, 'storage', void 0),
                        (0, i._)(this, 'config', void 0),
                        (0, i._)(this, 'pathname', void 0),
                        (0, i._)(this, 'searchParams', void 0),
                        (0, i._)(this, 'host', void 0),
                        (0, i._)(this, 'tld', void 0),
                        (0, i._)(this, 'redirect', void 0),
                        (0, i._)(this, 'passportOriginResolver', void 0),
                        (this.storage = t),
                        (this.config = e),
                        (this.pathname = ''),
                        (this.searchParams = ''),
                        (this.host = ''),
                        (this.tld = ''),
                        (this.redirect = () => {}));
                }
            }
        },
        89646: (t, e, s) => {
            'use strict';
            s.d(e, { _: () => r });
            var i = s(58025),
                a = s(19786),
                n = s(6490);
            class r extends n.X {
                async getClip(t, e) {
                    return (
                        await this.httpClient.get(
                            'clips',
                            this.createHttpOptions({
                                timeoutKey: 'getClip',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ clipIds: t.clipIds.join(',') }),
                            }),
                        )
                    ).json();
                }
                async getCredits(t, e) {
                    return (
                        await this.httpClient.get(
                            'clips/'.concat(t.clipId, '/credits'),
                            this.createHttpOptions({ timeoutKey: 'getCredits', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getDisclaimer(t, e) {
                    return (
                        await this.httpClient.get(
                            'clips/'.concat(t.clipId, '/disclaimer'),
                            this.createHttpOptions({ timeoutKey: 'getDisclaimer', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getClipsWillLike(t, e) {
                    return (
                        await this.httpClient.get(
                            'clips/will/like',
                            this.createHttpOptions({
                                timeoutKey: 'getClipsWillLike',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ page: t.page, pageSize: t.pageSize }),
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        90208: (t, e, s) => {
            'use strict';
            function i() {
                var t;
                return null == (t = window.musicDesktop) ? void 0 : t.runtime.version;
            }
            s.d(e, { B: () => i });
        },
        90496: (t, e, s) => {
            'use strict';
            s.d(e, { $: () => r });
            var i = s(58025),
                a = s(6490),
                n = s(19786);
            class r extends a.X {
                async getMetatagById(t, e) {
                    return (
                        await this.httpClient.get(
                            'metatags/'.concat(t.id),
                            this.createHttpOptions({
                                timeoutKey: 'getMetatagById',
                                params: t,
                                searchParams: (0, n.P)({
                                    tracksCount: t.tracksCount,
                                    artistsCount: t.artistsCount,
                                    composersCount: t.composersCount,
                                    albumsCount: t.albumsCount,
                                    promotionsCount: t.promotionsCount,
                                    featuresCount: t.featuresCount,
                                    playlistsCount: t.playlistsCount,
                                    concertsCount: t.concertsCount,
                                    tracksSortBy: t.tracksSortBy,
                                    albumsSortBy: t.albumsSortBy,
                                    withLikesCount: t.withLikesCount,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getMetatagAlbums(t, e) {
                    return (
                        await this.httpClient.get(
                            'metatags/'.concat(t.id, '/albums'),
                            this.createHttpOptions({
                                timeoutKey: 'getMetatagAlbums',
                                params: t,
                                searchParams: (0, n.P)({ period: t.period, sortBy: t.sortBy, offset: t.offset, limit: t.limit }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getMetatagArtists(t, e) {
                    return (
                        await this.httpClient.get(
                            'metatags/'.concat(t.id, '/artists'),
                            this.createHttpOptions({
                                timeoutKey: 'getMetatagArtists',
                                params: t,
                                searchParams: (0, n.P)({ period: t.period, sortBy: t.sortBy, offset: t.offset, limit: t.limit, tracksPerArtist: t.tracksPerArtist }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getMetatagPlaylists(t, e) {
                    return (
                        await this.httpClient.get(
                            'metatags/'.concat(t.id, '/playlists'),
                            this.createHttpOptions({
                                timeoutKey: 'getMetatagPlaylists',
                                params: t,
                                searchParams: (0, n.P)({ sortBy: t.sortBy, offset: t.offset, limit: t.limit, withLikesCount: t.withLikesCount }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        90932: (t, e, s) => {
            'use strict';
            s.d(e, { $: () => a });
            var i = s(22582);
            let a = (t) => {
                switch (t) {
                    case 'win32':
                        return i.V.WINDOWS;
                    case 'darwin':
                        return i.V.MACOS;
                    case 'linux':
                        return i.V.LINUX;
                }
                return null;
            };
        },
        91736: (t, e, s) => {
            'use strict';
            s.d(e, { V: () => n });
            var i = s(58025),
                a = s(6490);
            class n extends a.X {
                async getUserSlides(t, e) {
                    return (
                        await this.httpClient.get(
                            'recap-slides/user',
                            this.createHttpOptions({ timeoutKey: 'getUserSlides', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getArtistSlides(t, e) {
                    return (
                        await this.httpClient.get(
                            'recap-slides/artist/'.concat(t.artistId),
                            this.createHttpOptions({ timeoutKey: 'getArtistSlides', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getPodcastSlides(t, e) {
                    return (
                        await this.httpClient.get(
                            'recap-slides/podcast/'.concat(t.podcastId),
                            this.createHttpOptions({ timeoutKey: 'getPodcastSlides', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getSpecialSlides(t, e) {
                    return (
                        await this.httpClient.get(
                            'recap-slides/special/'.concat(t.campaignId),
                            this.createHttpOptions({ timeoutKey: 'getSpecialSlides', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getKidsSlides(t, e) {
                    return (
                        await this.httpClient.get(
                            'recap-slides/kids',
                            this.createHttpOptions({ timeoutKey: 'getKidsSlides', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        94564: (t, e, s) => {
            'use strict';
            s.d(e, { Y: () => a });
            var i = s(58025);
            class a {
                getStore() {
                    return this.store;
                }
                constructor(t) {
                    ((0, i._)(this, 'store', void 0), (this.store = t));
                }
            }
        },
        94638: (t, e, s) => {
            'use strict';
            s.d(e, { b: () => r });
            var i = s(58025),
                a = s(19786),
                n = s(6490);
            class r extends n.X {
                async getArtistTracks(t, e) {
                    // for PulseSync WebHost: BEGIN wrap the upstream resource method for addon interception
                    const pulseSyncOriginal = async (t, e) => {
                    var s, i;
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/tracks'),
                            this.createHttpOptions({
                                timeoutKey: 'getArtistTracks',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({
                                    'sort-by': null == (s = t.sort) ? void 0 : s.sortBy,
                                    'sort-order': null == (i = t.sort) ? void 0 : i.sortOrder,
                                    page: t.page,
                                    pageSize: t.pageSize,
                                }),
                            }),
                        )
                    ).json();
                    };
                    // for PulseSync WebHost: END wrap the upstream resource method for addon interception
                    // for PulseSync WebHost: BEGIN intercept artists.getArtistTracks for addons
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('artists', 'getArtistTracks', [t, e], pulseSyncOriginal, (method, request, options) =>
                              this[method](request, options),
                          )
                        : await pulseSyncOriginal(t, e);
                    return pulseSyncResponse;
                    // for PulseSync WebHost: END intercept artists.getArtistTracks for addons
                }
                async getArtistTrackIds(t, e) {
                    // for PulseSync WebHost: BEGIN wrap the upstream resource method for addon interception
                    const pulseSyncOriginal = async (t, e) => {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/track-ids'),
                            this.createHttpOptions({
                                timeoutKey: 'getArtistTrackIds',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ page: t.page, pageSize: t.pageSize }),
                            }),
                        )
                    ).json();
                    };
                    // for PulseSync WebHost: END wrap the upstream resource method for addon interception
                    // for PulseSync WebHost: BEGIN intercept artists.getArtistTrackIds for addons
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('artists', 'getArtistTrackIds', [t, e], pulseSyncOriginal, (method, request, options) =>
                              this[method](request, options),
                          )
                        : await pulseSyncOriginal(t, e);
                    return pulseSyncResponse;
                    // for PulseSync WebHost: END intercept artists.getArtistTrackIds for addons
                }
                async getSafeDirectAlbums(t, e) {
                    var s, i;
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/safe-direct-albums'),
                            this.createHttpOptions({
                                timeoutKey: 'getSafeDirectAlbums',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({
                                    'sort-by': null == (s = t.sort) ? void 0 : s.sortBy,
                                    'sort-order': null == (i = t.sort) ? void 0 : i.sortOrder,
                                    limit: t.limit,
                                }),
                            }),
                        )
                    ).json();
                }
                async getBriefInfo(t, e) {
                    // for PulseSync: BEGIN intercept artists.getBriefInfo and publish artist metadata
                    // for PulseSync WebHost: BEGIN wrap the upstream entity request for addon interception and publication
                    const pulseSyncOriginal = async (t, e) => {
                    let pulseSyncEntity = await (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/brief-info'),
                            this.createHttpOptions({
                                timeoutKey: 'getBriefInfo',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({
                                    popularTracksCount: t.popularTracksCount,
                                    useClipDataFormat: t.useClipDataFormat,
                                    discographyBlockEnabled: t.discographyBlockEnabled,
                                    fetchPlaylistLikesCounts: t.fetchPlaylistLikesCounts,
                                }),
                            }),
                        )
                    ).json();
                        return pulseSyncEntity;
                    };
                    // for PulseSync WebHost: END wrap the upstream entity request for addon interception and publication
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('artists', 'getBriefInfo', [t, e], pulseSyncOriginal, (method, request, options) =>
                              this[method](request, options),
                          )
                        : await pulseSyncOriginal(t, e);
                    if (!window.pulsesyncApi?.isInternalResourceCall?.(e)) window.pulsesyncApi?.publishPageEntity?.('artist', pulseSyncResponse, void 0, !0);
                    return pulseSyncResponse;
                    // for PulseSync: END intercept artists.getBriefInfo and publish artist metadata
                }
                async getAboutArtist(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/about-artist'),
                            this.createHttpOptions({ timeoutKey: 'getAboutArtist', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getSimilarArtists(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/similar'),
                            this.createHttpOptions({ timeoutKey: 'getSimilarArtists', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getDiscographyAlbums(t, e) {
                    var s, i;
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/discography-albums'),
                            this.createHttpOptions({
                                timeoutKey: 'getDiscographyAlbums',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    'sort-by': null == (s = t.sort) ? void 0 : s.sortBy,
                                    'sort-order': null == (i = t.sort) ? void 0 : i.sortOrder,
                                }),
                            }),
                        )
                    ).json();
                }
                async getDirectAlbums(t, e) {
                    // for PulseSync WebHost: BEGIN wrap the upstream resource method for addon interception
                    const pulseSyncOriginal = async (t, e) => {
                    var s, i;
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/direct-albums'),
                            this.createHttpOptions({
                                timeoutKey: 'getDirectAlbums',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    'sort-by': null == (s = t.sort) ? void 0 : s.sortBy,
                                    'sort-order': null == (i = t.sort) ? void 0 : i.sortOrder,
                                }),
                            }),
                        )
                    ).json();
                    };
                    // for PulseSync WebHost: END wrap the upstream resource method for addon interception
                    // for PulseSync WebHost: BEGIN intercept artists.getDirectAlbums for addons
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('artists', 'getDirectAlbums', [t, e], pulseSyncOriginal, (method, request, options) =>
                              this[method](request, options),
                          )
                        : await pulseSyncOriginal(t, e);
                    return pulseSyncResponse;
                    // for PulseSync WebHost: END intercept artists.getDirectAlbums for addons
                }
                async getAlsoAlbums(t, e) {
                    var s, i;
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/also-albums'),
                            this.createHttpOptions({
                                timeoutKey: 'getAlsoAlbums',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    'sort-by': null == (s = t.sort) ? void 0 : s.sortBy,
                                    'sort-order': null == (i = t.sort) ? void 0 : i.sortOrder,
                                }),
                            }),
                        )
                    ).json();
                }
                async getConcerts(t, e) {
                    let s = await this.httpClient.get(
                        'artists/'.concat(t.artistId, '/concerts'),
                        this.createHttpOptions({
                            timeoutKey: 'getConcerts',
                            params: { ...t, common: { ...t, withoutInvocationInfo: !1 } },
                            signal: null == e ? void 0 : e.signal,
                            searchParams: (0, a.P)({ locations: t.locations }),
                        }),
                    );
                    return (await s.json()).result;
                }
                async getFamiliarYouInfo(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/familiar-you/info'),
                            this.createHttpOptions({
                                timeoutKey: 'getFamiliarYouInfo',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ withWaveInfo: t.withWaveInfo, withCollectionInfo: t.withCollectionInfo }),
                            }),
                        )
                    ).json();
                }
                async getFamiliarYou(t, e) {
                    // for PulseSync WebHost: BEGIN wrap the upstream resource method for addon interception
                    const pulseSyncOriginal = async (t, e) => {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/familiar-you'),
                            this.createHttpOptions({
                                timeoutKey: 'getFamiliarYou',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({
                                    waveTracksLimit: t.waveTracksLimit,
                                    collectionTracksLimit: t.collectionTracksLimit,
                                    collectionAlbumsLimit: t.collectionAlbumsLimit,
                                    withIds: t.withIds,
                                }),
                            }),
                        )
                    ).json();
                    };
                    // for PulseSync WebHost: END wrap the upstream resource method for addon interception
                    // for PulseSync WebHost: BEGIN intercept artists.getFamiliarYou for addons
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('artists', 'getFamiliarYou', [t, e], pulseSyncOriginal, (method, request, options) =>
                              this[method](request, options),
                          )
                        : await pulseSyncOriginal(t, e);
                    return pulseSyncResponse;
                    // for PulseSync WebHost: END intercept artists.getFamiliarYou for addons
                }
                async getDisclaimer(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/disclaimer'),
                            this.createHttpOptions({ timeoutKey: 'getDisclaimer', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getTrailer(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/trailer'),
                            this.createHttpOptions({ timeoutKey: 'getTrailer', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getInfo(t, e) {
                    // for PulseSync: BEGIN intercept artists.getInfo and publish artist metadata
                    // for PulseSync WebHost: BEGIN wrap the upstream entity request for addon interception and publication
                    const pulseSyncOriginal = async (t, e) => {
                    let pulseSyncEntity = await (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/info'),
                            this.createHttpOptions({ timeoutKey: 'getInfo', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                        return pulseSyncEntity;
                    };
                    // for PulseSync WebHost: END wrap the upstream entity request for addon interception and publication
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('artists', 'getInfo', [t, e], pulseSyncOriginal, (method, request, options) =>
                              this[method](request, options),
                          )
                        : await pulseSyncOriginal(t, e);
                    if (!window.pulsesyncApi?.isInternalResourceCall?.(e)) window.pulsesyncApi?.publishPageEntity?.('artist', pulseSyncResponse, () => this.getBriefInfo(t, e));
                    return pulseSyncResponse;
                    // for PulseSync: END intercept artists.getInfo and publish artist metadata
                }
                async getSkeleton(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/skeletons/').concat(t.skeletonId),
                            this.createHttpOptions({ timeoutKey: 'getSkeleton', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getClips(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/blocks/artist-clips'),
                            this.createHttpOptions({
                                timeoutKey: 'getClips',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ page: t.page, pageSize: t.pageSize }),
                            }),
                        )
                    ).json();
                }
                async getDonation(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/blocks/artist-donation'),
                            this.createHttpOptions({ timeoutKey: 'getDonation', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getArtistLinks(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/artist-links'),
                            this.createHttpOptions({ timeoutKey: 'getArtistLinks', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        96208: (t, e, s) => {
            'use strict';
            s.d(e, { Z: () => l });
            var i = s(58025);
            let a = (t) => ({ sessionId: t.radioSessionId, seeds: t.seeds, feedbacks: t.feedbacks });
            var n = s(19786),
                r = s(73364),
                o = s(6490);
            class l extends o.X {
                createSessionRequestHeaders(t) {
                    let e = this.createRequestHeaders({ params: t });
                    return (t.aiContentReductionEnabled && (e['X-Yandex-Music-AI-Content-Rate'] = 'reduced'), e);
                }
                async getStationInfo(t, e) {
                    return (
                        await this.httpClient.get(
                            'rotor/station/'.concat(t.stationId, '/info'),
                            this.createHttpOptions({ timeoutKey: 'getStationInfo', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async sessionNew(t, e) {
                    // for PulseSync WebHost: BEGIN wrap the upstream resource method for addon interception
                    const pulseSyncOriginal = async (t, e) => {
                    var s;
                    let i = null == (s = t.sessions) ? void 0 : s.map(a),
                        n = (0, r.F)({
                            seeds: t.seeds,
                            queue: t.queue,
                            includeTracksInResponse: t.includeTracksInResponse,
                            trackToStartFrom: t.trackToStartFrom,
                            clientRemoteType: t.clientRemoteType,
                            incognito: t.incognito,
                            child: t.child,
                            allowExplicit: t.allowExplicit,
                            aliceExperiments: t.aliceExperiments,
                            djData: t.djData,
                            useIchwill: t.useIchwill,
                            includeWaveModel: t.includeWaveModel,
                            interactive: t.interactive,
                            sessions: i,
                        });
                    return (
                        await this.httpClient.post(
                            'rotor/session/new',
                            this.createHttpOptions({
                                timeoutKey: 'sessionNew',
                                params: t,
                                headers: this.createSessionRequestHeaders(t),
                                json: n,
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                    };
                    // for PulseSync WebHost: END wrap the upstream resource method for addon interception
                    // for PulseSync WebHost: BEGIN intercept rotor.sessionNew for addons
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('rotor', 'sessionNew', [t, e], pulseSyncOriginal)
                        : await pulseSyncOriginal(t, e);
                    return pulseSyncResponse;
                    // for PulseSync WebHost: END intercept rotor.sessionNew for addons
                }
                async sessionClone(t, e) {
                    // for PulseSync WebHost: BEGIN wrap the upstream resource method for addon interception
                    const pulseSyncOriginal = async (t, e) => {
                    var s;
                    let i = null == (s = t.sessions) ? void 0 : s.map(a),
                        n = (0, r.F)({
                            queue: t.queue,
                            includeTracksInResponse: t.includeTracksInResponse,
                            trackToStartFrom: t.trackToStartFrom,
                            clientRemoteType: t.clientRemoteType,
                            incognito: t.incognito,
                            child: t.child,
                            allowExplicit: t.allowExplicit,
                            aliceExperiments: t.aliceExperiments,
                            djData: t.djData,
                            useIchwill: t.useIchwill,
                            includeWaveModel: t.includeWaveModel,
                            interactive: t.interactive,
                            sessions: i,
                        });
                    return (
                        await this.httpClient.post(
                            'rotor/session/'.concat(t.radioSessionId, '/clone'),
                            this.createHttpOptions({
                                timeoutKey: 'sessionClone',
                                params: t,
                                headers: this.createSessionRequestHeaders(t),
                                json: n,
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                    };
                    // for PulseSync WebHost: END wrap the upstream resource method for addon interception
                    // for PulseSync WebHost: BEGIN intercept rotor.sessionClone for addons
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('rotor', 'sessionClone', [t, e], pulseSyncOriginal)
                        : await pulseSyncOriginal(t, e);
                    return pulseSyncResponse;
                    // for PulseSync WebHost: END intercept rotor.sessionClone for addons
                }
                async sessionTracks(t, e) {
                    // for PulseSync WebHost: BEGIN wrap the upstream resource method for addon interception
                    const pulseSyncOriginal = async (t, e) => {
                    var s;
                    let i = (0, r.F)({
                        queue: t.queue,
                        aliceExperiments: t.aliceExperiments,
                        djData: t.djData,
                        useIchwill: t.useIchwill,
                        feedbacks: t.feedbacks,
                        sessions: (null == (s = t.sessions) ? void 0 : s.length) ? t.sessions.map(a) : void 0,
                    });
                    return (
                        await this.httpClient.post(
                            'rotor/session/'.concat(t.radioSessionId, '/tracks'),
                            this.createHttpOptions({
                                timeoutKey: 'sessionTracks',
                                params: t,
                                headers: this.createSessionRequestHeaders(t),
                                json: i,
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                    };
                    // for PulseSync WebHost: END wrap the upstream resource method for addon interception
                    // for PulseSync WebHost: BEGIN intercept rotor.sessionTracks for addons
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('rotor', 'sessionTracks', [t, e], pulseSyncOriginal)
                        : await pulseSyncOriginal(t, e);
                    return pulseSyncResponse;
                    // for PulseSync WebHost: END intercept rotor.sessionTracks for addons
                }
                async sessionFeedback(t, e) {
                    // for PulseSync WebHost: BEGIN wrap the upstream resource method for addon interception
                    const pulseSyncOriginal = async (t, e) => {
                    let s = (0, r.F)({ event: t.feedback.event, batchId: t.feedback.batchId, from: t.feedback.from });
                    return (
                        await this.httpClient.post(
                            'rotor/session/'.concat(t.radioSessionId, '/feedback/'),
                            this.createHttpOptions({ timeoutKey: 'sessionFeedback', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                    };
                    // for PulseSync WebHost: END wrap the upstream resource method for addon interception
                    // for PulseSync WebHost: BEGIN intercept rotor.sessionFeedback for addons
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('rotor', 'sessionFeedback', [t, e], pulseSyncOriginal)
                        : await pulseSyncOriginal(t, e);
                    return pulseSyncResponse;
                    // for PulseSync WebHost: END intercept rotor.sessionFeedback for addons
                }
                async sessionFeedbacks(t, e) {
                    // for PulseSync WebHost: BEGIN wrap the upstream resource method for addon interception
                    const pulseSyncOriginal = async (t, e) => {
                    let s = {
                        feedbacks: t.feedbacks.map((t) => {
                            let { event: e, batchId: s, from: i } = t;
                            return (0, r.F)({ event: e, batchId: s, from: i });
                        }),
                    };
                    return (
                        await this.httpClient.post(
                            'rotor/session/'.concat(t.radioSessionId, '/feedbacks/'),
                            this.createHttpOptions({ timeoutKey: 'sessionFeedbacks', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                    };
                    // for PulseSync WebHost: END wrap the upstream resource method for addon interception
                    // for PulseSync WebHost: BEGIN intercept rotor.sessionFeedbacks for addons
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('rotor', 'sessionFeedbacks', [t, e], pulseSyncOriginal)
                        : await pulseSyncOriginal(t, e);
                    return pulseSyncResponse;
                    // for PulseSync WebHost: END intercept rotor.sessionFeedbacks for addons
                }
                async sessionsFeedbacks(t, e) {
                    // for PulseSync WebHost: BEGIN wrap the upstream resource method for addon interception
                    const pulseSyncOriginal = async (t, e) => {
                    let s = t.sessions.map(a);
                    return (
                        await this.httpClient.post(
                            'rotor/sessions/feedbacks/',
                            this.createHttpOptions({ timeoutKey: 'sessionsFeedbacks', params: t, json: { sessions: s }, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                    };
                    // for PulseSync WebHost: END wrap the upstream resource method for addon interception
                    // for PulseSync WebHost: BEGIN intercept rotor.sessionsFeedbacks for addons
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('rotor', 'sessionsFeedbacks', [t, e], pulseSyncOriginal)
                        : await pulseSyncOriginal(t, e);
                    return pulseSyncResponse;
                    // for PulseSync WebHost: END intercept rotor.sessionsFeedbacks for addons
                }
                async waveLast(t, e) {
                    return (
                        await this.httpClient.get('rotor/wave/last', this.createHttpOptions({ timeoutKey: 'waveLast', params: t, signal: null == e ? void 0 : e.signal }))
                    ).json();
                }
                async waveSettings(t, e) {
                    return (
                        await this.httpClient.get(
                            'rotor/wave/settings',
                            this.createHttpOptions({
                                timeoutKey: 'waveSettings',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, n.P)({ seeds: null == t ? void 0 : t.seeds }),
                            }),
                        )
                    ).json();
                }
                async waveLastReset(t, e) {
                    return (
                        await this.httpClient.post(
                            'rotor/wave/last/reset',
                            this.createHttpOptions({ timeoutKey: 'waveLastReset', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getGenerativeInfo(t, e) {
                    return (
                        await this.httpClient.get(
                            'rotor/station/'.concat(t.stationId, '/stream'),
                            this.createHttpOptions({ timeoutKey: 'getGenerativeInfo', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async stationFeedback(t, e) {
                    return (
                        await this.httpClient.post(
                            'rotor/station/'.concat(t.stationId, '/feedback'),
                            this.createHttpOptions({
                                timeoutKey: 'stationFeedback',
                                params: t,
                                json: (0, r.F)({ type: t.type, timestamp: t.timestamp }),
                                searchParams: (0, n.P)({ streamId: t.streamId }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async combinedLanding(t, e) {
                    return (
                        await this.httpClient.post(
                            'rotor/combined/session/landing',
                            this.createHttpOptions({
                                timeoutKey: 'combinedLanding',
                                params: t,
                                json: (0, r.F)({ supportedTypes: t.supportedTypes, child: t.child, allowExplicit: t.allowExplicit }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async combinedSessionNew(t, e) {
                    // for PulseSync WebHost: BEGIN wrap the upstream resource method for addon interception
                    const pulseSyncOriginal = async (t, e) => {
                    return (
                        await this.httpClient.post(
                            'rotor/combined/session/new',
                            this.createHttpOptions({
                                timeoutKey: 'combinedSessionNew',
                                params: t,
                                json: (0, r.F)({ supportedTypes: t.supportedTypes, child: t.child, allowExplicit: t.allowExplicit, queue: t.queue }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                    };
                    // for PulseSync WebHost: END wrap the upstream resource method for addon interception
                    // for PulseSync WebHost: BEGIN intercept rotor.combinedSessionNew for addons
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('rotor', 'combinedSessionNew', [t, e], pulseSyncOriginal)
                        : await pulseSyncOriginal(t, e);
                    return pulseSyncResponse;
                    // for PulseSync WebHost: END intercept rotor.combinedSessionNew for addons
                }
                async combinedSessionNext(t, e) {
                    // for PulseSync WebHost: BEGIN wrap the upstream resource method for addon interception
                    const pulseSyncOriginal = async (t, e) => {
                    return (
                        await this.httpClient.post(
                            'rotor/combined/session/'.concat(t.sessionid, '/next'),
                            this.createHttpOptions({
                                timeoutKey: 'combinedSessionNext',
                                params: t,
                                json: (0, r.F)({ queue: t.queue }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                    };
                    // for PulseSync WebHost: END wrap the upstream resource method for addon interception
                    // for PulseSync WebHost: BEGIN intercept rotor.combinedSessionNext for addons
                    const pulseSyncResponse = window.pulsesyncApi?.executeResourceCall
                        ? await window.pulsesyncApi.executeResourceCall('rotor', 'combinedSessionNext', [t, e], pulseSyncOriginal)
                        : await pulseSyncOriginal(t, e);
                    return pulseSyncResponse;
                    // for PulseSync WebHost: END intercept rotor.combinedSessionNext for addons
                }
                async stationsDashboard(t, e) {
                    return (
                        await this.httpClient.get(
                            'rotor/stations/dashboard',
                            this.createHttpOptions({
                                timeoutKey: 'stationsDashboard',
                                params: t,
                                searchParams: (0, n.P)({ limit: t.limit }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    (super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e));
                }
            }
        },
        99950: (t, e, s) => {
            'use strict';
            s.d(e, { G: () => n, B: () => r });
            var i = s(58025),
                a = s(36432);
            class n {
                async send(t, e) {
                    var s, i, n, r, o, l, c;
                    let { name: u, data: d } = t,
                        h = this.rum._errorSettings,
                        p = this.rum._buildAdditional(h.additional, d),
                        g = this.rum._buildExperiments(null != (c = h.experiments) ? c : []),
                        m = {
                            ...this.rum._vars,
                            '-project': 'music.frontend',
                            '-service': e.service,
                            '-experiments': g,
                            '-yandexuid': h.yandexuid,
                            '-loggedin': h.loggedin,
                            '-referrer': this.rum._getReferrer(h),
                            '-additional': p,
                            '-ts': Date.now(),
                            '-type': 'string',
                            '-name': u,
                            '-value': this.clientType,
                        },
                        y = this.rum._createVarsString(m),
                        v = (null == (s = (i = this.rum).getSetting) ? void 0 : s.call(i, 'reqid')) || '',
                        C = null == (n = (r = this.rum).getSetting) ? void 0 : n.call(r, 'slots'),
                        k = null == (o = (l = this.rum).getSetting) ? void 0 : o.call(l, 'experiments');
                    try {
                        await this.rumResource.sendMetrics({
                            varsString: y,
                            reqid: v,
                            table: 'rum_events',
                            slots: C,
                            experimentsSetting: k,
                            name: u,
                            clientType: this.clientType,
                        });
                    } catch (t) {
                        throw new a.t('Failed to send metrics to RUM', { code: 'E_RUM_METRICS_SEND', cause: t });
                    }
                }
                constructor(t, e, s) {
                    ((0, i._)(this, 'clientType', void 0),
                        (0, i._)(this, 'rumResource', void 0),
                        (0, i._)(this, 'rum', void 0),
                        (this.clientType = t),
                        (this.rumResource = e),
                        (this.rum = s));
                }
            }
            class r {
                async send(t, e) {
                    return new Promise((s) => {
                        let i = { [t.name]: { ...t.data } };
                        (this.yaMetrika.count(i, e.topLevelParameter), s());
                    });
                }
                constructor(t) {
                    ((0, i._)(this, 'yaMetrika', void 0), (this.yaMetrika = t));
                }
            }
        },
    },
]);
