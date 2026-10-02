'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2209],
    {
        2209: (t, e, a) => {
            a.d(e, { X: () => r, ET: () => d.ET, F6: () => G, $b: () => s });
            var s,
                i = a(58025),
                o = a(36432);
            class r {
                apply(t) {
                    let { hooks: e } = t;
                    e.afterError.tapPromise('LandingLoggerPlugin', async (t) => {
                        let e;
                        ((e = t instanceof o.t ? t : new o.t('Error in LandingSdk', { code: 'E_LANDING_SDK', cause: t })),
                            this.logger.error('[LandingSdk] '.concat(e.message), { ...e.data, code: e.code, cause: e.cause }),
                            await Promise.resolve());
                    });
                }
                constructor({ logger: t }) {
                    ((0, i._)(this, 'logger', void 0), (this.logger = t));
                }
            }
            var d = a(79157);
            !(function (t) {
                ((t.LANDING_PAGE = 'LANDING_PAGE'), (t.ARTIST_PAGE = 'ARTIST_PAGE'));
            })(s || (s = {}));
            class n {
                async load(t) {
                    switch (t.type) {
                        case s.ARTIST_PAGE:
                            return this.artistsResource.getSkeleton({ artistId: t.artistId, skeletonId: t.skeletonId });
                        case s.LANDING_PAGE:
                            return this.landingResource.getSkeleton({ id: t.id, showWizard: t.showWizard });
                        default:
                            return Promise.reject();
                    }
                }
                constructor({ artistsResource: t, landingResource: e }) {
                    ((0, i._)(this, 'artistsResource', void 0), (0, i._)(this, 'landingResource', void 0), (this.artistsResource = t), (this.landingResource = e));
                }
            }
            var l = a(35522),
                h = a(6139),
                c = a(62560);
            class u extends d.P7 {
                get showPolicy() {
                    var t, e;
                    return null != (e = null == (t = this.data.dataFromSkeleton) ? void 0 : t.showPolicy) ? e : c.E.SHOW_AND_LOAD;
                }
                async loadMetadata() {
                    this.data.meta = await this.metadataSource.load(this.data);
                }
                constructor(t) {
                    (super(t), (0, i._)(this, 'metadataSource', void 0), (this.metadataSource = t.metadataSource));
                }
            }
            class S extends u {
                constructor(...t) {
                    (super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e, a, s;
                                return (
                                    !!this.isLoading ||
                                    !!this.isRejected ||
                                    !!this.isNeededToLoad ||
                                    (null != (s = null == (a = this.data.meta) || null == (e = a.chart) || null == (t = e.tracks) ? void 0 : t.length) ? s : 0) > 0
                                );
                            }),
                        ));
                }
            }
            class E extends u {
                constructor(...t) {
                    (super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e, a;
                                return (
                                    !!this.data.canShowEmptyBlock ||
                                    (0, d.PP)({
                                        showPolicy: this.showPolicy,
                                        isNeededToLoad: this.isNeededToLoad,
                                        isLoading: this.isLoading,
                                        isLoaded: this.isLoaded,
                                        isRejected: this.isRejected,
                                        isNotEmpty: (null != (a = null == (e = this.data.meta) || null == (t = e.items) ? void 0 : t.length) ? a : 0) > 0,
                                    })
                                );
                            }),
                        ));
                }
            }
            class m extends u {
                constructor(...t) {
                    (super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e, a;
                                return (0, d.PP)({
                                    showPolicy: this.showPolicy,
                                    isNeededToLoad: this.isNeededToLoad,
                                    isLoading: this.isLoading,
                                    isLoaded: this.isLoaded,
                                    isRejected: this.isRejected,
                                    isNotEmpty: (null != (a = null == (e = this.data.meta) || null == (t = e.concerts) ? void 0 : t.length) ? a : 0) > 0,
                                });
                            }),
                        ));
                }
            }
            class L extends u {
                constructor(...t) {
                    (super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e, a;
                                return (0, d.PP)({
                                    showPolicy: this.showPolicy,
                                    isNeededToLoad: this.isNeededToLoad,
                                    isLoading: this.isLoading,
                                    isLoaded: this.isLoaded,
                                    isRejected: this.isRejected,
                                    isNotEmpty: (null != (a = null == (e = this.data.meta) || null == (t = e.donations) ? void 0 : t.length) ? a : 0) > 0,
                                });
                            }),
                        ));
                }
            }
            class g extends u {
                constructor(...t) {
                    (super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e, a;
                                return (0, d.PP)({
                                    showPolicy: this.showPolicy,
                                    isNeededToLoad: this.isNeededToLoad,
                                    isLoading: this.isLoading,
                                    isLoaded: this.isLoaded,
                                    isRejected: this.isRejected,
                                    isNotEmpty: (null != (a = null == (e = this.data.meta) || null == (t = e.items) ? void 0 : t.length) ? a : 0) > 0,
                                });
                            }),
                        ));
                }
            }
            class k extends u {
                constructor(...t) {
                    (super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t;
                                return !!this.isLoading || !!this.isRejected || !!this.isNeededToLoad || (null == (t = this.data.meta) ? void 0 : t.items.length) !== 0;
                            }),
                        ));
                }
            }
            class _ extends u {
                constructor(...t) {
                    (super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t;
                                return !!this.isLoading || !!this.isRejected || !!this.isNeededToLoad || (null == (t = this.data.meta) ? void 0 : t.items.length) !== 0;
                            }),
                        ));
                }
            }
            var T = a(72233);
            class v {
                constructor({ artists: t, album: e, releaseDate: a, cover: s, trailer: o }) {
                    ((0, i._)(this, 'artists', void 0),
                        (0, i._)(this, 'album', void 0),
                        (0, i._)(this, 'releaseDate', void 0),
                        (0, i._)(this, 'cover', void 0),
                        (0, i._)(this, 'trailer', void 0),
                        (this.artists = t),
                        (this.album = e),
                        (this.releaseDate = a),
                        (this.cover = s),
                        (this.trailer = o));
                }
            }
            class y extends u {
                loadingStatusChangeHandler() {
                    if (this.data.meta && this.state.loadingStatus.value === T.rl.RESOLVE) for (let t of this.data.meta.newReleases) this.items.push(new v(t));
                }
                onLoadingStatusChange() {
                    this.loadingStatusChangeUnsub = this.state.loadingStatus.onChange(this.loadingStatusChangeHandler.bind(this));
                }
                offLoadingStatusChange() {
                    var t;
                    null == (t = this.loadingStatusChangeUnsub) || t.call(this);
                }
                constructor(t) {
                    (super(t),
                        (0, i._)(this, 'loadingStatusChangeUnsub', void 0),
                        (0, i._)(this, 'items', []),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e;
                                return (0, d.PP)({
                                    showPolicy: this.showPolicy,
                                    isNeededToLoad: this.isNeededToLoad,
                                    isLoading: this.isLoading,
                                    isLoaded: this.isLoaded,
                                    isRejected: this.isRejected,
                                    isNotEmpty: (null != (e = null == (t = this.data.meta) ? void 0 : t.newReleases.length) ? e : 0) > 0,
                                });
                            }),
                        ),
                        this.onLoadingStatusChange());
                }
            }
            class b extends u {
                constructor(...t) {
                    (super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t;
                                let e = null == (t = this.data.meta) ? void 0 : t.waves,
                                    a = (null == e ? void 0 : e.length) === 0,
                                    s = null == e ? void 0 : e.every((t) => !t.items.length);
                                return (0, d.PP)({
                                    showPolicy: this.showPolicy,
                                    isNeededToLoad: this.isNeededToLoad,
                                    isLoading: this.isLoading,
                                    isLoaded: this.isLoaded,
                                    isRejected: this.isRejected,
                                    isNotEmpty: !a || !s,
                                });
                            }),
                        ));
                }
            }
            class w {
                create() {
                    return {
                        load: async (t) => {
                            if (!('dataFromSkeleton' in t) || !(0, d.vW)(t.dataFromSkeleton))
                                throw new o.t('Block with type='.concat(t.type, ' and id=').concat(t.id, ' is not fetchable'));
                            return this.landingResource.getBlock({ type: t.type, source: t.dataFromSkeleton.source });
                        },
                    };
                }
                constructor(t) {
                    ((0, i._)(this, 'landingResource', void 0), (this.landingResource = t));
                }
            }
            class A extends d.r1 {
                changeSelectedTab(t) {
                    var e, a;
                    super.changeSelectedTab(t);
                    let s = null == (e = this.children[t]) ? void 0 : e.data.id;
                    s && (null == (a = this.tabIdQueryParamController) || a.update(s));
                }
                async loadMetadata() {
                    var t, e;
                    this.data.meta = await this.metadataSource.load(this.data);
                    let a = null != (e = null == (t = this.data.meta) ? void 0 : t.tabs) ? e : [];
                    for (let t = 0; t < a.length; t++) {
                        let e = this.children[t],
                            s = a[t];
                        e && s && (e.data.meta = s);
                    }
                }
                constructor({ data: t, tabIdQueryParamController: e, metadataSource: a, hooksEmitter: s }) {
                    (super({
                        data: t,
                        selectedTabIndex: (function (t, e) {
                            var a, s, i, o, r;
                            let d = null != (o = null == (a = t.dataFromSkeleton) ? void 0 : a.selectedTabIndex) ? o : 0;
                            if (!e) return d;
                            let n = e.get();
                            if (!n) return d;
                            let l = null != (r = null == (i = t.dataFromSkeleton) || null == (s = i.tabs) ? void 0 : s.findIndex((t) => t.id === n)) ? r : -1;
                            return l >= 0 ? l : d;
                        })(t, e),
                        hooksEmitter: s,
                    }),
                        (0, i._)(this, 'metadataSource', void 0),
                        (0, i._)(this, 'tabIdQueryParamController', void 0),
                        (0, i._)(this, 'isVisible', new h.rm(() => !0)),
                        (this.metadataSource = a),
                        (this.tabIdQueryParamController = e));
                }
            }
            class I extends u {
                constructor(...t) {
                    (super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e;
                                return (
                                    !!this.isLoading ||
                                    !!this.isRejected ||
                                    !!this.isNeededToLoad ||
                                    !!((null == (t = this.data.meta) ? void 0 : t.favorites) && (null == (e = this.data.meta) ? void 0 : e.history))
                                );
                            }),
                        ));
                }
            }
            class f extends u {
                constructor(...t) {
                    (super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e, a;
                                return (
                                    !!this.isLoading ||
                                    !!this.isRejected ||
                                    !!this.isNeededToLoad ||
                                    (null != (a = null == (e = this.data.meta) || null == (t = e.items) ? void 0 : t.length) ? a : 0) > 0
                                );
                            }),
                        ));
                }
            }
            class R extends u {
                constructor(...t) {
                    (super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e;
                                return (0, d.PP)({
                                    showPolicy: this.showPolicy,
                                    isNeededToLoad: this.isNeededToLoad,
                                    isLoading: this.isLoading,
                                    isLoaded: this.isLoaded,
                                    isRejected: this.isRejected,
                                    isNotEmpty: (null != (e = null == (t = this.data.meta) ? void 0 : t.items.length) ? e : 0) > 0,
                                });
                            }),
                        ));
                }
            }
            class C extends u {
                constructor(...t) {
                    (super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e;
                                return (
                                    !!this.isLoading ||
                                    !!this.isRejected ||
                                    !!this.isNeededToLoad ||
                                    (null != (e = null == (t = this.data.meta) ? void 0 : t.items.length) ? e : 0) > 0
                                );
                            }),
                        ));
                }
            }
            class N extends u {
                constructor(...t) {
                    (super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e, a;
                                return (
                                    !!this.data.canShowEmptyBlock ||
                                    (0, d.PP)({
                                        showPolicy: this.showPolicy,
                                        isNeededToLoad: this.isNeededToLoad,
                                        isLoading: this.isLoading,
                                        isLoaded: this.isLoaded,
                                        isRejected: this.isRejected,
                                        isNotEmpty: (null != (a = null == (e = this.data.meta) || null == (t = e.tracks) ? void 0 : t.length) ? a : 0) > 0,
                                    })
                                );
                            }),
                        ));
                }
            }
            class p extends u {
                constructor(...t) {
                    (super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e;
                                return (0, d.PP)({
                                    showPolicy: this.showPolicy,
                                    isNeededToLoad: this.isNeededToLoad,
                                    isLoading: this.isLoading,
                                    isLoaded: this.isLoaded,
                                    isRejected: this.isRejected,
                                    isNotEmpty: (null != (e = null == (t = this.data.meta) ? void 0 : t.albumBanners.length) ? e : 0) > 0,
                                });
                            }),
                        ));
                }
            }
            class P extends p {}
            class O extends p {}
            class B extends u {
                constructor(...t) {
                    (super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e;
                                let a = (null == (t = this.data.meta) ? void 0 : t.inStyleTabs.length) === 0,
                                    s = null == (e = this.data.meta) ? void 0 : e.inStyleTabs.every((t) => !t.items.length);
                                return (0, d.PP)({
                                    showPolicy: this.showPolicy,
                                    isNeededToLoad: this.isNeededToLoad,
                                    isLoading: this.isLoading,
                                    isLoaded: this.isLoaded,
                                    isRejected: this.isRejected,
                                    isNotEmpty: !a && !s,
                                });
                            }),
                        ));
                }
            }
            class M extends u {
                constructor(...t) {
                    (super(...t), (0, i._)(this, 'isVisible', new h.rm(() => !0)));
                }
            }
            class V extends u {
                constructor(...t) {
                    (super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e;
                                return (
                                    !!this.isLoading ||
                                    !!this.isRejected ||
                                    !!this.isNeededToLoad ||
                                    (null != (e = null == (t = this.data.meta) ? void 0 : t.items.length) ? e : 0) > 0
                                );
                            }),
                        ));
                }
            }
            class D extends u {
                constructor(...t) {
                    (super(...t),
                        (0, i._)(
                            this,
                            'isVisible',
                            new h.rm(() => {
                                var t, e, a;
                                return (0, d.PP)({
                                    showPolicy: this.showPolicy,
                                    isNotEmpty: (null != (a = null == (e = this.data.meta) || null == (t = e.items) ? void 0 : t.length) ? a : 0) > 0,
                                    isLoaded: this.isLoaded,
                                    isLoading: this.isLoading,
                                    isRejected: this.isRejected,
                                    isNeededToLoad: this.isNeededToLoad,
                                });
                            }),
                        ));
                }
            }
            class F extends u {
                constructor(...t) {
                    (super(...t), (0, i._)(this, 'isVisible', new h.rm(() => !!this.isLoading || !!this.isRejected || !!this.isNeededToLoad || !!this.data.meta)));
                }
            }
            class x {
                createBlock(t) {
                    switch (t.data.type) {
                        case l.t.TABS:
                            return new A({
                                data: t.data,
                                tabIdQueryParamController: this.tabIdQueryParamController,
                                hooksEmitter: this.hooksEmitter,
                                metadataSource: this.metadataSourceFactory.create(),
                            });
                        case l.t.NEW_RELEASES:
                        case l.t.EDITORIAL_NEW_RELEASES:
                            return new y({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.NEW_PLAYLISTS:
                        case l.t.EDITORIAL_COMPILATION:
                        case l.t.RECOMMENDED_PLAYLISTS:
                        case l.t.META_TAG_POPULAR_PLAYLISTS:
                        case l.t.META_TAG_NEW_ALBUMS:
                        case l.t.META_TAG_PLAYLISTS:
                        case l.t.MICRO_GENRE_ALBUMS:
                        case l.t.META_TAG_ALBUMS:
                        case l.t.ARTIST_PLAYLISTS:
                        case l.t.ARTIST_ALBUMS:
                        case l.t.ARTIST_COMPILATIONS:
                        case l.t.ARTIST_STUDIO_ALBUMS:
                        case l.t.ARTIST_SIMILAR_ENTITIES:
                        case l.t.COLLECTION_SIMILAR_ENTITIES:
                            return new g({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.WAVES:
                        case l.t.SETS_BY_WAVES:
                        case l.t.WAVES_AGENT:
                        case l.t.SETS_BY_WAVES_AGENT:
                            return new b({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.EDITORIAL_WAVES:
                        case l.t.META_TAG_WAVE:
                        case l.t.MICRO_GENRE_WAVE:
                        case l.t.MICRO_GENRE_SIMILAR_WAVE:
                        case l.t.META_TAG_SIMILAR_WAVE:
                        case l.t.EDITORIAL_WAVES_AGENT:
                        case l.t.META_TAG_WAVE_AGENT:
                        case l.t.MICRO_GENRE_WAVE_AGENT:
                        case l.t.MICRO_GENRE_SIMILAR_WAVE_AGENT:
                        case l.t.META_TAG_SIMILAR_WAVE_AGENT:
                            return new k({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.ITEM_LIST:
                            return new _({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.MIXES_GRID:
                        case l.t.MIXES_MUSIC:
                            return new D({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.LIKES_AND_HISTORY:
                            return new I({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.CHART_TRACKS:
                            return new S({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.NEUROMUSIC:
                            return new f({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.Q2V_SUGGESTIONS:
                            return new R({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.CONCERTS_TOP:
                        case l.t.CONCERTS_PERSONAL:
                        case l.t.EDITORIAL_CONCERTS:
                        case l.t.VIEWED_CONCERTS:
                            return new m({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.OPEN_PLAYLIST:
                        case l.t.SMART_OPEN_PLAYLIST:
                        case l.t.NON_MUSIC_OPEN_PLAYLIST:
                            return new N({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.COLLECTION_PLAYLIST_WITH_LIKES:
                            return new N({
                                data: { ...t.data, canShowEmptyBlock: !0 },
                                hooksEmitter: this.hooksEmitter,
                                metadataSource: this.metadataSourceFactory.create(),
                            });
                        case l.t.DONATIONS:
                            return new L({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.PERSONAL_PLAYLISTS:
                        case l.t.REWIND_PLAYLISTS:
                            return new C({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.PERSONAL_ARTISTS:
                        case l.t.NEW_STARS_ARTISTS:
                        case l.t.EDITORIAL_ARTISTS:
                        case l.t.META_TAG_POPULAR_ARTISTS:
                        case l.t.MICRO_GENRE_ARTISTS:
                        case l.t.MICRO_GENRE_TOP_ARTISTS:
                        case l.t.META_TAG_ARTISTS:
                        case l.t.SIMILAR_ARTISTS:
                            return new E({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.ALBUM_PROMO:
                        case l.t.SIMPLE_ALBUM_PROMO:
                            return new P({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.ARTIST_RECOMMENDATIONS_PROMO:
                        case l.t.SIMPLE_ARTIST_RECOMMENDATIONS_PROMO:
                            return new O({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.IN_STYLE:
                            return new B({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.WIZARD:
                            return new M({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.NON_MUSIC_EDITORIAL_COMPILATION:
                        case l.t.NON_MUSIC_CATEGORY:
                            return new V({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        case l.t.SPECIAL:
                            return new F({ data: t.data, hooksEmitter: this.hooksEmitter, metadataSource: this.metadataSourceFactory.create() });
                        default:
                            return;
                    }
                }
                createTab(t) {
                    var e;
                    return new d.ZZ({ data: t.data, config: null == (e = this.config) ? void 0 : e.tabConfig });
                }
                constructor(t) {
                    ((0, i._)(this, 'hooksEmitter', void 0),
                        (0, i._)(this, 'metadataSourceFactory', void 0),
                        (0, i._)(this, 'tabIdQueryParamController', void 0),
                        (0, i._)(this, 'config', void 0),
                        (this.metadataSourceFactory = new w(t.landingResource)),
                        (this.tabIdQueryParamController = t.tabIdQueryParamController),
                        (this.hooksEmitter = t.hooksEmitter),
                        (this.config = t.config));
                }
            }
            class G {
                create(t) {
                    var e;
                    let { data: a, hooksEmitter: s } = t,
                        i = new n({ landingResource: this.landingResource, artistsResource: this.artistsResource }),
                        o = new x({
                            landingResource: this.landingResource,
                            hooksEmitter: s,
                            tabIdQueryParamController: this.tabIdQueryParamController,
                            config: null == (e = this.config) ? void 0 : e.nodesConfig,
                        });
                    return new d.xd({ data: a, hooksEmitter: s, skeletonMetadataSource: i, nodeFactory: o });
                }
                constructor({ landingResource: t, artistsResource: e, tabIdQueryParamController: a, config: s }) {
                    ((0, i._)(this, 'landingResource', void 0),
                        (0, i._)(this, 'artistsResource', void 0),
                        (0, i._)(this, 'tabIdQueryParamController', void 0),
                        (0, i._)(this, 'config', void 0),
                        (this.landingResource = t),
                        (this.artistsResource = e),
                        (this.tabIdQueryParamController = a),
                        (this.config = s));
                }
            }
        },
        79157: (t, e, a) => {
            a.d(e, { P7: () => y, ZZ: () => I, r1: () => A, SU: () => l, xd: () => k, ET: () => f, PP: () => w, vW: () => v });
            var s,
                i = a(58025),
                o = a(72233),
                r = a(39477);
            class d {
                async beforeSkeletonLoad(t) {
                    await this.safeEmitAsync(async () => {
                        await this.hooks.beforeSkeletonLoad.promise(t);
                    });
                }
                async afterSkeletonLoad(t) {
                    await this.safeEmitAsync(async () => {
                        await this.hooks.afterSkeletonLoad.promise(t);
                    });
                }
                async beforeBlockLoad(t) {
                    await this.safeEmitAsync(async () => {
                        await this.hooks.beforeBlockLoad.promise(t);
                    });
                }
                async afterBlockLoad(t) {
                    await this.safeEmitAsync(async () => {
                        await this.hooks.afterBlockLoad.promise(t);
                    });
                }
                beforeTabChange(t) {
                    this.safeEmitSync(() => this.hooks.beforeTabChange.call(t));
                }
                afterTabChange(t) {
                    this.safeEmitSync(() => this.hooks.afterTabChange.call(t));
                }
                async afterError(t) {
                    try {
                        await this.hooks.afterError.promise(t);
                    } catch (t) {}
                }
                async safeEmitAsync(t) {
                    try {
                        await t();
                    } catch (t) {
                        await this.afterError(t);
                    }
                }
                safeEmitSync(t) {
                    try {
                        t();
                    } catch (t) {
                        this.scheduleErrorReport(t);
                    }
                }
                scheduleErrorReport(t) {
                    let e = this.scheduledErrorReport.catch(() => void 0);
                    this.scheduledErrorReport = e.then(async () => {
                        await this.afterError(t);
                    });
                }
                constructor({ hooks: t }) {
                    ((0, i._)(this, 'hooks', void 0), (0, i._)(this, 'scheduledErrorReport', Promise.resolve()), (this.hooks = t));
                }
            }
            function n(t) {
                return (null == t ? void 0 : t.data.nodeType) === s.TAB;
            }
            !(function (t) {
                ((t.TAB = 'TAB'), (t.BLOCK = 'BLOCK'), (t.TABS_BLOCK = 'TABS_BLOCK'));
            })(s || (s = {}));
            class l {
                get skeleton() {
                    return this.skeletonSdk.skeleton;
                }
                async loadAndCreateSkeleton(t) {
                    return this.skeletonSdk.loadAndCreateSkeleton(t);
                }
                createSkeleton(t) {
                    this.skeletonSdk.createSkeleton(t);
                }
                async loadNodes(t) {
                    return this.skeletonSdk.loadNodes(t);
                }
                createVisibilityController(t) {
                    this.skeletonSdk.createVisibilityController(t);
                }
                observe() {
                    for (var t = arguments.length, e = Array(t), a = 0; a < t; a++) e[a] = arguments[a];
                    this.skeletonSdk.observe(...e);
                }
                unobserve(t) {
                    this.skeletonSdk.unobserve(t);
                }
                observeList(t) {
                    var e;
                    let { tabId: a, sizes: s, ...i } = t,
                        o = null == (e = this.skeleton) ? void 0 : e.getNodeById(a),
                        r = [];
                    return (
                        n(o) &&
                            (r = o.children.flatMap((t) => {
                                let e = t.data.id,
                                    a = s[t.data.type];
                                return 'number' != typeof a || !Number.isFinite(a) || a < 0 ? [] : [{ id: e, estimatedSize: a }];
                            })),
                        this.skeletonSdk.observeList({ ...i, items: r })
                    );
                }
                destroy() {
                    this.skeletonSdk.destroy();
                }
                constructor({ skeletonFactory: t, visibilityControllerParams: e, plugins: a }) {
                    ((0, i._)(this, 'hooks', void 0), (0, i._)(this, 'skeletonSdk', void 0));
                    let s = {
                            beforeSkeletonLoad: new r.AsyncSeriesHook(['loadData']),
                            afterSkeletonLoad: new r.AsyncSeriesHook(['loadData']),
                            beforeBlockLoad: new r.AsyncSeriesHook(['blockLoadData']),
                            afterBlockLoad: new r.AsyncSeriesHook(['blockLoadData']),
                            beforeTabChange: new r.SyncHook(['tabChangeData']),
                            afterTabChange: new r.SyncHook(['tabChangeData']),
                            afterError: new r.AsyncSeriesHook(['error']),
                        },
                        n = new d({ hooks: s });
                    ((this.hooks = s),
                        (this.skeletonSdk = new o.mz({
                            skeletonFactory: {
                                create: (e) => {
                                    let { data: a } = e;
                                    return t.create({ data: a, hooksEmitter: n });
                                },
                            },
                        })),
                        e && this.createVisibilityController(e),
                        null == a ||
                            a.forEach((t) => {
                                t.apply({ hooks: this.hooks, landingSdk: this });
                            }));
                }
            }
            var h = a(35522);
            function c(t) {
                return 'id' in t && 'title' in t && 'blocks' in t;
            }
            function u(t) {
                return 'id' in t && 'type' in t && 'data' in t;
            }
            function S(t) {
                return u(t) && t.type === h.t.TABS;
            }
            function E(t) {
                return u(t) && t.type !== h.t.TABS;
            }
            function m(t, e) {
                let a = [t];
                for (; a.length > 0;) {
                    var s;
                    let t = a.pop();
                    e(t);
                    let i = null != (s = t.children) ? s : [];
                    for (let t = i.length - 1; t >= 0; t -= 1) {
                        let e = i[t];
                        e && a.push(e);
                    }
                }
            }
            function L(t) {
                return (null == t ? void 0 : t.data.nodeType) === s.BLOCK;
            }
            function g(t) {
                return (null == t ? void 0 : t.data.nodeType) === s.TABS_BLOCK;
            }
            class k {
                async loadSkeletonMeta() {
                    await this.hooksEmitter.beforeSkeletonLoad({ data: this.data });
                    try {
                        let t = await this.skeletonMetadataSource.load(this.data);
                        ((this.data.meta = t), await this.hooksEmitter.afterSkeletonLoad({ data: this.data }));
                    } catch (t) {
                        throw (await this.hooksEmitter.afterError(t), t);
                    }
                }
                createSkeletonTree(t) {
                    this.data.meta &&
                        ((this.root = (function (t, e) {
                            let a,
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                                o = [{ parent: void 0, child: t }];
                            for (; o.length > 0;) {
                                var r, d, l;
                                let t = o.pop();
                                if (!t) continue;
                                let h = (function (t, e) {
                                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                                        i = a.find((e) => e.id === t.id);
                                    return c(t)
                                        ? e.createTab({ data: { ...i, id: t.id, title: t.title, nodeType: s.TAB } })
                                        : E(t)
                                          ? e.createBlock({ data: { ...i, dataFromSkeleton: t.data, id: t.id, type: t.type, nodeType: s.BLOCK } })
                                          : S(t)
                                            ? e.createBlock({ data: { ...i, dataFromSkeleton: t.data, id: t.id, type: t.type, nodeType: s.TABS_BLOCK } })
                                            : void 0;
                                })(t.child, e, i);
                                if (h) {
                                    for (let e of (void 0 === a && n(h) && (a = h),
                                    null == (d = t.parent) || null == (r = d.children) || r.push(h),
                                    c((l = t.child))
                                        ? [...l.blocks].reverse()
                                        : S(l)
                                          ? [...l.data.tabs].reverse()
                                          : E(l) && 'blocks' in l.data
                                            ? [...l.data.blocks].reverse()
                                            : []))
                                        o.push({ parent: h, child: e });
                                }
                            }
                            return a;
                        })(this.data.meta, this.nodeFactory, this.data.nodesData)),
                        this.initBlocksToShow(),
                        this.hydratePreloadedBlocksMeta(t));
                }
                getNodeById(t) {
                    if (this.root)
                        return (function (t, e) {
                            let a = [t],
                                s = new Set();
                            for (; a.length > 0;) {
                                var i;
                                let t = a.pop();
                                if (s.has(t)) continue;
                                if ((s.add(t), t.data.id === e)) return t;
                                let o = null != (i = t.children) ? i : [];
                                for (let t = o.length - 1; t >= 0; t -= 1) {
                                    let e = o[t];
                                    e && a.push(e);
                                }
                            }
                        })(this.root, t);
                }
                async preloadBlocks(t) {
                    if (!this.root || t <= 0) return;
                    let e = t,
                        a = [],
                        s = (t) => {
                            if (g(t)) return void a.push(t.load());
                            if (L(t) && !(e <= 0) && t.state.loadingStatus.value === o.rl.IDLE) {
                                if (((e -= 1), this.hasBlockChildren(t))) return void a.push(...this.preloadCompositeBlockChildren(t));
                                a.push(t.load());
                            }
                        };
                    (m(this.root, s), a.length > 0 && (await Promise.allSettled(a)));
                }
                getPreloadedBlocksMeta() {
                    let t = {};
                    return (
                        this.root &&
                            m(this.root, (e) => {
                                (L(e) || g(e)) && e.state.loadingStatus.value === o.rl.RESOLVE && void 0 !== e.data.meta && (t[e.data.id] = e.data.meta);
                            }),
                        t
                    );
                }
                hydratePreloadedBlocksMeta(t) {
                    if (!this.root || !t) return;
                    let e = (e) => {
                        let a = t[e.data.id];
                        void 0 !== a && ((e.data.meta = a), (e.state.loadingStatus.value = o.rl.RESOLVE), g(e) && this.hydrateTabsBlockChildrenMeta(e));
                    };
                    m(this.root, e);
                }
                preloadCompositeBlockChildren(t) {
                    var e;
                    let a = [];
                    for (let s of null != (e = t.children) ? e : []) {
                        if (g(s)) {
                            s.state.loadingStatus.value === o.rl.IDLE && a.push(s.load());
                            continue;
                        }
                        if (L(s) && s.state.loadingStatus.value === o.rl.IDLE) {
                            if (this.hasBlockChildren(s)) {
                                a.push(...this.preloadCompositeBlockChildren(s));
                                continue;
                            }
                            a.push(s.load());
                        }
                    }
                    return a;
                }
                hasBlockChildren(t) {
                    var e;
                    return !!(null == (e = t.children) ? void 0 : e.some((t) => L(t) || g(t)));
                }
                hydrateTabsBlockChildrenMeta(t) {
                    var e, a;
                    let s = null != (a = null == (e = t.data.meta) ? void 0 : e.tabs) ? a : [];
                    for (let e = 0; e < s.length; e += 1) {
                        let a = t.children[e],
                            i = s[e];
                        a && i && (a.data.meta = i);
                    }
                }
                initBlocksToShow() {
                    this.root &&
                        m(this.root, (t) => {
                            n(t) && t.initBlocksToShow();
                        });
                }
                onNodesVisibilityChange() {
                    this.root && m(this.root, (t) => t.onVisibilityChange());
                }
                destroy() {
                    (this.offBlocksLoadingStatusChangeInTab(), this.offNodesVisibilityChange());
                }
                offBlocksLoadingStatusChangeInTab() {
                    this.root &&
                        m(this.root, (t) => {
                            n(t) && t.offBlocksLoadingStatusChange();
                        });
                }
                offNodesVisibilityChange() {
                    this.root && m(this.root, (t) => t.offVisibilityChange());
                }
                constructor({ data: t, skeletonMetadataSource: e, nodeFactory: a, hooksEmitter: s }) {
                    ((0, i._)(this, 'data', void 0),
                        (0, i._)(this, 'skeletonMetadataSource', void 0),
                        (0, i._)(this, 'root', void 0),
                        (0, i._)(this, 'nodeFactory', void 0),
                        (0, i._)(this, 'hooksEmitter', void 0),
                        (this.data = t),
                        (this.skeletonMetadataSource = e),
                        (this.nodeFactory = a),
                        (this.hooksEmitter = s));
                }
            }
            var _ = a(6139);
            class T {
                constructor({ loadingStatus: t, visibilityStatus: e }) {
                    ((0, i._)(this, 'loadingStatus', void 0),
                        (0, i._)(this, 'visibilityStatus', void 0),
                        (this.loadingStatus = new _.cJ(t)),
                        (this.visibilityStatus = new _.cJ(e)));
                }
            }
            let v = (t) => !!(t && 'object' == typeof t && 'source' in t);
            class y {
                get isNeededToLoad() {
                    return this.state.loadingStatus.value === o.rl.IDLE;
                }
                get isLoading() {
                    return this.state.loadingStatus.value === o.rl.PENDING;
                }
                get isLoaded() {
                    return this.state.loadingStatus.value === o.rl.RESOLVE;
                }
                get isRejected() {
                    return this.state.loadingStatus.value === o.rl.REJECT;
                }
                async load() {
                    if (this.state.loadingStatus.value !== o.rl.IDLE) return;
                    let t = { blockId: this.data.id, blockType: this.data.type, status: o.rl.IDLE };
                    ((this.state.loadingStatus.value = o.rl.PENDING), await this.hooksEmitter.beforeBlockLoad(t));
                    try {
                        (v(this.data.dataFromSkeleton) && (await this.loadMetadata()),
                            (this.state.loadingStatus.value = o.rl.RESOLVE),
                            await this.hooksEmitter.afterBlockLoad({ ...t, status: o.rl.RESOLVE }));
                    } catch (e) {
                        ((this.state.loadingStatus.value = o.rl.REJECT),
                            await this.hooksEmitter.afterError(e),
                            await this.hooksEmitter.afterBlockLoad({ ...t, status: o.rl.REJECT }));
                    }
                }
                async reload() {
                    ((this.state.loadingStatus.value = o.rl.IDLE), await this.load());
                }
                onVisibilityChange() {
                    this.visibilityChangeUnsub = this.state.visibilityStatus.onChange(this.visibilityHandler.bind(this));
                }
                offVisibilityChange() {
                    var t;
                    (null == (t = this.visibilityChangeUnsub) || t.call(this), (this.visibilityChangeUnsub = void 0));
                }
                visibilityHandler() {
                    this.state.visibilityStatus.value === o.zE.VISIBLE && this.load();
                }
                constructor({ data: t, hooksEmitter: e }) {
                    ((0, i._)(this, 'data', void 0),
                        (0, i._)(this, 'children', []),
                        (0, i._)(this, 'state', void 0),
                        (0, i._)(this, 'visibilityChangeUnsub', void 0),
                        (0, i._)(this, 'hooksEmitter', void 0),
                        (this.data = t),
                        (this.hooksEmitter = e),
                        (this.state = new T({ loadingStatus: o.rl.IDLE, visibilityStatus: o.zE.HIDDEN })));
                }
            }
            var b = a(62560);
            let w = (t) => {
                let { showPolicy: e, isNeededToLoad: a, isLoading: s, isLoaded: i, isRejected: o, isNotEmpty: r } = t;
                switch (e) {
                    case b.E.SHOW_AND_LOAD:
                        if (s || o || a) return !0;
                        return r;
                    case b.E.LOAD_AND_SHOW:
                        return i && r;
                    default:
                        return !0;
                }
            };
            class A extends y {
                changeSelectedTab(t) {
                    let e = this.tabIndex.value,
                        a = { tabsBlockId: this.data.id, previousIndex: e, nextIndex: t };
                    (this.hooksEmitter.beforeTabChange(a), (this.tabIndex.value = t), this.hooksEmitter.afterTabChange(a));
                }
                constructor({ data: t, selectedTabIndex: e, hooksEmitter: a }) {
                    var s, o;
                    (super({ data: t, hooksEmitter: a }),
                        (0, i._)(this, 'children', []),
                        (0, i._)(this, 'selectedTab', void 0),
                        (0, i._)(this, 'tabIndex', void 0),
                        (this.tabIndex = new _.cJ(null != (o = null != e ? e : null == (s = t.dataFromSkeleton) ? void 0 : s.selectedTabIndex) ? o : 0)),
                        (this.selectedTab = new _.rm(() => this.children[this.tabIndex.value])));
                }
            }
            class I {
                updateBlocksToShow() {
                    let t = [];
                    (this.children.forEach((e, a) => {
                        var s, i;
                        if (e.isVisible.value) return void t.push(a);
                        let o = L(e) && (null == (s = e.data.dataFromSkeleton) ? void 0 : s.showPolicy) === b.E.LOAD_AND_SHOW && e.isNeededToLoad;
                        (null == (i = this.config) ? void 0 : i.addLoadAndShowBlocks) && o && t.push(a);
                    }),
                        (this.blocksIndexesToShow.value = t));
                }
                initBlocksToShow() {
                    for (let t = 0; t < this.children.length; t++) this.blocksIndexesToShow.value.push(t);
                    this.onBlocksLoadingStatusChange();
                }
                onBlocksLoadingStatusChange() {
                    for (let t of this.children) {
                        let e = t.state.loadingStatus.onChange(() => {
                            var e;
                            if ([o.rl.RESOLVE, o.rl.REJECT].includes(t.state.loadingStatus.value)) {
                                if (L(t) && (null == (e = t.data.dataFromSkeleton) ? void 0 : e.showPolicy) === b.E.SHOW_AND_LOAD) {
                                    t.state.loadingStatus.value === o.rl.REJECT && this.updateBlocksToShow();
                                    return;
                                }
                                this.updateBlocksToShow();
                            }
                        });
                        this.blocksLoadingStatusChangeUnsubs.push(e);
                    }
                }
                offBlocksLoadingStatusChange() {
                    for (let t of this.blocksLoadingStatusChangeUnsubs) t();
                    this.blocksLoadingStatusChangeUnsubs = [];
                }
                get upperBlocks() {
                    let t = [];
                    for (let e of this.children) {
                        if (g(e)) break;
                        t.push(e);
                    }
                    return t;
                }
                getTabsBlock(t) {
                    let e,
                        a = (e) => !t || e.data.id === t;
                    for (let t of this.children)
                        if (g(t) && a(t)) {
                            e = t;
                            break;
                        }
                    return e;
                }
                async load() {
                    return Promise.resolve();
                }
                reloadErrorBlocks() {
                    this.children.forEach((t) => {
                        t.isRejected && t.reload();
                    });
                }
                onVisibilityChange() {
                    this.visibilityChangeUnsub = this.state.visibilityStatus.onChange(() => {});
                }
                offVisibilityChange() {
                    var t;
                    (null == (t = this.visibilityChangeUnsub) || t.call(this), (this.visibilityChangeUnsub = void 0));
                }
                constructor({ data: t, config: e }) {
                    ((0, i._)(this, 'data', void 0),
                        (0, i._)(this, 'children', []),
                        (0, i._)(this, 'state', void 0),
                        (0, i._)(this, 'blocksIndexesToShow', new _.cJ([])),
                        (0, i._)(this, 'hasErrorBlocks', new _.rm(() => this.children.some((t) => t.isRejected && t.isVisible.value))),
                        (0, i._)(this, 'visibilityChangeUnsub', void 0),
                        (0, i._)(this, 'blocksLoadingStatusChangeUnsubs', []),
                        (0, i._)(this, 'config', void 0),
                        (this.data = t),
                        (this.config = e),
                        (this.state = new T({ loadingStatus: o.rl.IDLE, visibilityStatus: o.zE.HIDDEN })));
                }
            }
            class f {
                get() {
                    if (this.requestUrl) {
                        let t = new URL(this.requestUrl).searchParams.get('tab');
                        return null != t ? t : void 0;
                    }
                    let t = new URLSearchParams(window.location.search).get('tab');
                    return null != t ? t : void 0;
                }
                update(t) {
                    let e = new URL(window.location.href);
                    (e.searchParams.set('tab', t), window.history.replaceState(window.history.state, '', e.toString()));
                }
                constructor(t) {
                    ((0, i._)(this, 'requestUrl', void 0), (this.requestUrl = t));
                }
            }
        },
    },
]);
