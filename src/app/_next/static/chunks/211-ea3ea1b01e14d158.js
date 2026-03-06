'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [211],
    {
        50211: (t, e, a) => {
            a.d(e, {
                rJ: () => _.ArtistAlbumsPage,
                GH: () => F.ArtistClipsPage,
                cC: () => B.ArtistConcertsPage,
                Sd: () => j.ArtistFamiliarPage,
                ZQ: () => J.ArtistPage,
                E: () => w,
                Wy: () => V.ArtistSimilarPage,
                fD: () => $.ArtistTracksPage,
            }),
                a(8242),
                a(46310),
                a(30697),
                a(79190),
                a(71284),
                a(44034),
                a(20121),
                a(91280),
                a(50365);
            var r,
                i = a(93064),
                s = a(14287),
                o = a(12460),
                l = a(6664),
                n = a(80156),
                u = a(55616),
                d = a(65779),
                g = a(83909),
                c = a(21365),
                m = a(63695),
                p = a(77217),
                S = a(83252),
                N = a(26433);
            !(function (t) {
                (t.DEFAULT = 'default'), (t.DONATION = 'donation'), (t.REWIND = 'year-rewind');
            })(r || (r = {}));
            let v = /^https:\/\/tips\.yandex\.ru\//,
                E = (t) => v.test(null != t ? t : ''),
                C = (t) => {
                    let { available: e, disclaimers: a } = (0, S.fyr)(t);
                    return (0, i.wg)({
                        clipId: t.clipId,
                        title: t.title,
                        thumbnail: t.thumbnail,
                        previewUrl: t.previewUrl,
                        duration: t.duration,
                        version: t.version,
                        artists: (t.artists || []).map((t) => (0, m.as)({ artist: t })),
                        isAvailable: e,
                        disclaimers: a,
                    });
                };
            var L = a(46163),
                b = a(2880);
            let I = i.gK
                    .compose(
                        i.gK.model('ArtistAlbumsPage', {
                            pagesLoader: (0, N.Ij)(n.JC),
                            variant: i.gK.maybeNull(i.gK.enumeration(Object.values(b.h))),
                            errorStatusCode: i.gK.maybeNull(i.gK.number),
                        }),
                        N.pl,
                    )
                    .views((t) => ({
                        get isNotFound() {
                            var e, a;
                            let r = t.pagesLoader.isSomePageResolved && (null != (a = null == (e = t.pagesLoader.items) ? void 0 : e.length) ? a : 0) === 0,
                                i = t.errorStatusCode === s.X1.NOT_FOUND || t.errorStatusCode === s.X1.BAD_REQUEST;
                            return (t.pagesLoader.isInitialRequestRejected && i) || r;
                        },
                        get isShimmerVisible() {
                            return !t.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return t.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return t.pagesLoader.isInitialRequestRejected;
                        },
                        get isResolved() {
                            return t.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return t.pagesLoader.requestsCount;
                        },
                        get items() {
                            var r;
                            return null != (r = t.pagesLoader.items) ? r : [];
                        },
                    }))
                    .actions((t) => ({
                        setVariant: (e) => {
                            t.variant = e;
                        },
                        getData: (0, i.L3)(function* (e) {
                            let { artistId: a, page: r = 0, pageSize: o = 20, sort: l, preloadedAlbums: u } = e,
                                { artistsResource: d, modelActionsLogger: g } = (0, i._$)(t);
                            if (t.pagesLoader.isPageNeedToLoad(r))
                                try {
                                    t.pagesLoader.setPageState(r, S.GuX.PENDING);
                                    let e = { artistId: a, page: r, pageSize: o, sort: { sortBy: null == l ? void 0 : l.sortBy } },
                                        i = u;
                                    if (!i)
                                        switch (t.variant) {
                                            case b.h.COMPILATIONS:
                                                i = yield d.getAlsoAlbums(e);
                                                break;
                                            case b.h.DISCOGRAPHY:
                                                i = yield d.getDiscographyAlbums(e);
                                                break;
                                            default:
                                                i = yield d.getDirectAlbums(e);
                                        }
                                    let s = i.albums.map(n.pp);
                                    t.pagesLoader.setItems(s, { page: r, pager: { page: r, perPage: o, total: i.pager.total } });
                                } catch (e) {
                                    g.error(e),
                                        e instanceof s.GX &&
                                            (e.statusCode === s.X1.NOT_FOUND || e.statusCode === s.X1.BAD_REQUEST) &&
                                            (t.errorStatusCode = s.X1.NOT_FOUND),
                                        t.pagesLoader.setItems(null, { responseStatus: S.FlZ.ERROR, page: r });
                                }
                        }),
                        reset() {
                            (t.variant = null), (t.errorStatusCode = null), t.pagesLoader.reset();
                        },
                    })),
                T = i.gK
                    .model('ArtistClipsPage', { pagesLoader: (0, N.Ij)(d.kv), errorStatusCode: i.gK.maybeNull(i.gK.number) })
                    .views((t) => ({
                        get isShimmerVisible() {
                            return !t.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return t.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return t.pagesLoader.isInitialRequestRejected;
                        },
                        get isEmpty() {
                            return t.pagesLoader.isEmpty;
                        },
                        get isResolved() {
                            return t.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return t.pagesLoader.requestsCount;
                        },
                        get items() {
                            var e;
                            return null != (e = t.pagesLoader.items) ? e : [];
                        },
                        get isNotFound() {
                            return this.isRejected && t.errorStatusCode === s.X1.NOT_FOUND;
                        },
                    }))
                    .actions((t) => ({
                        getData: (0, i.L3)(function* (e) {
                            let { artistId: a, page: r = 0, pageSize: o = 20, preloadedClips: l } = e,
                                { artistsResource: n, modelActionsLogger: u } = (0, i._$)(t);
                            if (t.pagesLoader.isPageNeedToLoad(r))
                                try {
                                    t.pagesLoader.setPageState(r, S.GuX.PENDING);
                                    let e = l;
                                    e || (e = yield n.getClips({ artistId: a, page: r, pageSize: o }));
                                    let i = e.items.map((t) => (0, d.SZ)({ clip: t.data.clip, artists: t.data.artists }));
                                    t.pagesLoader.setItems(i, { page: r, pager: e.pager });
                                } catch (e) {
                                    u.error(e),
                                        t.pagesLoader.setItems(null, { responseStatus: S.FlZ.ERROR, page: r }),
                                        e instanceof s.GX &&
                                            (e.statusCode === s.X1.NOT_FOUND || e.statusCode === s.X1.BAD_REQUEST) &&
                                            (t.errorStatusCode = s.X1.NOT_FOUND);
                                }
                        }),
                        reset() {
                            t.pagesLoader.reset(), (t.errorStatusCode = null);
                        },
                    })),
                X = i.gK
                    .compose(i.gK.model('ArtistConcertsPage', { errorStatusCode: i.gK.maybeNull(i.gK.number), concerts: i.gK.maybeNull(i.gK.array(p.aR)) }), N.pl, N.XT)
                    .views((t) => ({
                        get isLoading() {
                            return t.isNeededToLoad || t.loadingState === S.GuX.PENDING;
                        },
                        get isNotFound() {
                            var e;
                            let a = t.isResolved && (null == (e = t.concerts) ? void 0 : e.length) === 0,
                                r = t.errorStatusCode === s.X1.NOT_FOUND || t.errorStatusCode === s.X1.BAD_REQUEST;
                            return (t.isRejected && r) || a;
                        },
                    }))
                    .actions((t) => ({
                        getData: (0, i.L3)(function* (e) {
                            let { artistId: a, preloadedConcerts: r } = e,
                                { artistsResource: o, modelActionsLogger: l } = (0, i._$)(t);
                            if (t.loadingState !== S.GuX.PENDING)
                                try {
                                    t.loadingState = S.GuX.PENDING;
                                    let e = null == r ? void 0 : r.concerts;
                                    e || (e = (yield o.getConcerts({ artistId: a })).concerts), (t.concerts = (0, i.wg)(e.map(p.oP))), (t.loadingState = S.GuX.RESOLVE);
                                } catch (e) {
                                    l.error(e),
                                        e instanceof s.GX &&
                                            (e.statusCode === s.X1.NOT_FOUND || e.statusCode === s.X1.BAD_REQUEST) &&
                                            (t.errorStatusCode = s.X1.NOT_FOUND),
                                        t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (t.loadingState = S.GuX.IDLE), (t.errorStatusCode = null), t.destroyItems([t.concerts]);
                        },
                    })),
                y = (t) => (0, i.wg)({ ...(0, n.sK)({ album: t, artists: t.artists }), version: t.version }),
                D = i.gK
                    .compose(
                        i.gK.model('ArtistFamiliarPage', {
                            errorStatusCode: i.gK.maybeNull(i.gK.number),
                            vibeTracks: i.gK.maybeNull(i.gK.array(c.vj)),
                            collectionTracks: i.gK.maybeNull(i.gK.array(c.vj)),
                            collectionAlbums: i.gK.maybeNull(i.gK.array(n.JC)),
                        }),
                        N.pl,
                        N.XT,
                    )
                    .views((t) => {
                        let e = {
                            get isLoading() {
                                return t.isNeededToLoad || t.loadingState === S.GuX.PENDING;
                            },
                            get isNotFound() {
                                let e = t.errorStatusCode === s.X1.NOT_FOUND || t.errorStatusCode === s.X1.BAD_REQUEST;
                                return t.isRejected && e;
                            },
                            get hasCollectionEntities() {
                                var a, r;
                                return (
                                    (t.isResolved && Number(null == (a = t.collectionTracks) ? void 0 : a.length) > 0) ||
                                    Number(null == (r = t.collectionAlbums) ? void 0 : r.length) > 0
                                );
                            },
                            get shouldShowTitleBlocks() {
                                var i, o;
                                if (e.isLoading) return !0;
                                return (
                                    Number(null == (i = t.collectionTracks) ? void 0 : i.length) > 0 && Number(null == (o = t.collectionAlbums) ? void 0 : o.length) > 0
                                );
                            },
                            get hasVibeTracks() {
                                var l;
                                return Number(null == (l = t.vibeTracks) ? void 0 : l.length) > 0;
                            },
                            get collectionEntitiesData() {
                                var n, u;
                                return null != (u = null == (n = t.collectionTracks) ? void 0 : n.map(c.$b)) ? u : [];
                            },
                            get vibeEntitiesData() {
                                var d, g;
                                return null != (g = null == (d = t.vibeTracks) ? void 0 : d.map(c.$b)) ? g : [];
                            },
                        };
                        return e;
                    })
                    .actions((t) => ({
                        getData: (0, i.L3)(function* (e) {
                            let { artistId: a, preloadedFamiliar: r } = e,
                                { artistsResource: o, modelActionsLogger: l } = (0, i._$)(t);
                            if (t.loadingState !== S.GuX.PENDING)
                                try {
                                    var n, u, d, g, m, p;
                                    t.loadingState = S.GuX.PENDING;
                                    let e = r;
                                    e || (e = yield o.getFamiliarYou({ artistId: a, waveTracksLimit: 100, collectionTracksLimit: 100, collectionAlbumsLimit: 20 })),
                                        (t.vibeTracks = (0, i.wg)(null == (u = e.wave) || null == (n = u.tracks) ? void 0 : n.map((t) => (0, c.vU)(t)))),
                                        (t.collectionTracks = (0, i.wg)(null == (g = e.collection) || null == (d = g.tracks) ? void 0 : d.map((t) => (0, c.vU)(t)))),
                                        (t.collectionAlbums = (0, i.wg)(null == (p = e.collection) || null == (m = p.albums) ? void 0 : m.map(y))),
                                        (t.loadingState = S.GuX.RESOLVE);
                                } catch (e) {
                                    l.error(e),
                                        e instanceof s.GX &&
                                            (e.statusCode === s.X1.NOT_FOUND || e.statusCode === s.X1.BAD_REQUEST) &&
                                            (t.errorStatusCode = s.X1.NOT_FOUND),
                                        t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (t.loadingState = S.GuX.IDLE), (t.errorStatusCode = null), t.destroyItems([t.vibeTracks, t.collectionTracks]);
                        },
                    }));
            var G = a(52733);
            let f = i.gK.model('ArtistPick', { playlist: G.$o, artists: i.gK.array(m.PK) }),
                h = i.gK
                    .compose(
                        i.gK.model('ArtistSimilarArtistsPage', { errorStatusCode: i.gK.maybeNull(i.gK.number), similarArtists: i.gK.maybeNull(i.gK.array(m.PK)) }),
                        N.pl,
                        N.XT,
                    )
                    .views((t) => ({
                        get isLoading() {
                            return t.isNeededToLoad || t.loadingState === S.GuX.PENDING;
                        },
                        get isNotFound() {
                            var e;
                            let a = t.isResolved && (null == (e = t.similarArtists) ? void 0 : e.length) === 0,
                                r = t.errorStatusCode === s.X1.NOT_FOUND || t.errorStatusCode === s.X1.BAD_REQUEST;
                            return (t.isRejected && r) || a;
                        },
                    }))
                    .actions((t) => ({
                        getData: (0, i.L3)(function* (e) {
                            let { artistId: a, preloadedSimilarArtists: r } = e,
                                { artistsResource: o, modelActionsLogger: l } = (0, i._$)(t);
                            try {
                                t.loadingState = S.GuX.PENDING;
                                let e = r;
                                e || (e = yield o.getSimilarArtists({ artistId: a })),
                                    (t.similarArtists = (0, i.wg)(e.similarArtists.map(m.dM))),
                                    t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.RESOLVE);
                            } catch (e) {
                                l.error(e),
                                    e instanceof s.GX && (e.statusCode === s.X1.NOT_FOUND || e.statusCode === s.X1.BAD_REQUEST) && (t.errorStatusCode = s.X1.NOT_FOUND),
                                    t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.REJECT);
                            }
                        }),
                        reset() {
                            (t.loadingState = S.GuX.IDLE), (t.errorStatusCode = null), t.destroyItems([t.similarArtists]);
                        },
                    })),
                K = i.gK.model('CommonSubPage', { artistName: i.gK.maybeNull(i.gK.string) }),
                A = i.gK
                    .compose(
                        i.gK.model('FamiliarInfo', {
                            vibeTrackCount: i.gK.optional(i.gK.number, 0),
                            collectionTrackCount: i.gK.optional(i.gK.number, 0),
                            collectionAlbumCount: i.gK.optional(i.gK.number, 0),
                        }),
                        N.XT,
                    )
                    .views((t) => {
                        let e = {
                            get hasTracks() {
                                return t.isResolved && (t.collectionTrackCount > 0 || t.vibeTrackCount > 0);
                            },
                            get hasFamiliarInfo() {
                                return t.isResolved && (e.hasTracks || t.collectionAlbumCount > 0);
                            },
                            get tracksCount() {
                                return t.collectionTrackCount + t.vibeTrackCount;
                            },
                            get hasCollectionEntities() {
                                return t.isResolved && (t.collectionTrackCount > 0 || t.collectionAlbumCount > 0);
                            },
                            get hasVibeEntities() {
                                return t.isResolved && t.vibeTrackCount > 0;
                            },
                            href(t) {
                                if (!t) return '';
                                if (e.hasCollectionEntities) {
                                    let { href: e } = (0, S.uvd)('/artist/:artistId/familiar', { params: { artistId: t }, query: { tab: S.JCK.COLLECTION } });
                                    return e;
                                }
                                if (e.hasVibeEntities) {
                                    let { href: e } = (0, S.uvd)('/artist/:artistId/familiar', { params: { artistId: t }, query: { tab: S.JCK.VIBE } });
                                    return e;
                                }
                                let { href: a } = (0, S.uvd)('/artist/:artistId/familiar', { params: { artistId: t } });
                                return a;
                            },
                        };
                        return e;
                    })
                    .actions((t) => ({
                        getData: (0, i.L3)(function* (e) {
                            let { artistId: a } = e,
                                { artistsResource: r, modelActionsLogger: s } = (0, i._$)(t);
                            if (t.loadingState !== S.GuX.PENDING)
                                try {
                                    t.loadingState = S.GuX.PENDING;
                                    let e = yield r.getFamiliarYouInfo({ artistId: a, withWaveInfo: !0, withCollectionInfo: !0 });
                                    e.collection && ((t.collectionTrackCount = e.collection.trackCount), (t.collectionAlbumCount = e.collection.albumCount)),
                                        e.wave && (t.vibeTrackCount = e.wave.trackCount),
                                        t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.RESOLVE);
                                } catch (e) {
                                    s.error(e), t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (t.loadingState = S.GuX.IDLE), (t.vibeTrackCount = 0), (t.collectionTrackCount = 0), (t.collectionAlbumCount = 0);
                        },
                    }));
            var R = a(97719);
            let k = i.gK
                .compose(
                    i.gK.model('FullTracksList', {
                        errorStatusCode: i.gK.maybeNull(i.gK.number),
                        ids: i.gK.maybeNull(i.gK.array(i.gK.string)),
                        tracks: i.gK.optional(i.gK.map(c.vj), {}),
                    }),
                    N.pl,
                    N.XT,
                )
                .views((t) => ({
                    getTrackByIndex(e) {
                        if (!t.ids || !t.ids.length) return null;
                        let a = t.ids[e];
                        return (a && t.tracks.get(a)) || null;
                    },
                    get isNotFound() {
                        var e;
                        let a = t.isResolved && (null == (e = t.ids) ? void 0 : e.length) === 0,
                            r = t.errorStatusCode === s.X1.NOT_FOUND || t.errorStatusCode === s.X1.BAD_REQUEST;
                        return (t.isRejected && r) || a;
                    },
                }))
                .actions((t) => ({
                    getTracksIds: (0, i.L3)(function* (e) {
                        let { artistId: a } = e,
                            { artistsResource: r, modelActionsLogger: o } = (0, i._$)(t);
                        try {
                            t.loadingState = S.GuX.PENDING;
                            let e = yield r.getArtistTrackIds({ artistId: a }),
                                { sonataState: s } = (0, i.Zn)(t);
                            s.setUnloadedEntitiesData(e.map((t) => (0, R.li)(t))),
                                (t.ids = (0, i.wg)(e)),
                                t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.RESOLVE);
                        } catch (e) {
                            o.error(e),
                                e instanceof s.GX && (e.statusCode === s.X1.NOT_FOUND || e.statusCode === s.X1.BAD_REQUEST) && (t.errorStatusCode = s.X1.NOT_FOUND),
                                t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.REJECT);
                        }
                    }),
                    getTracks: (0, i.L3)(function* (e) {
                        let { trackIds: a } = e,
                            { tracksResource: r, modelActionsLogger: s } = (0, i._$)(t);
                        try {
                            let e = yield r.getTracksMeta({ trackIds: a, withProgress: !0 });
                            t.tracks.merge(e.reduce((t, e) => ((t[e.id] = (0, c.vU)(e)), t), {}));
                        } catch (t) {
                            s.error(t);
                        }
                    }),
                    reset() {
                        let { sonataState: e } = (0, i.Zn)(t);
                        e.resetUnloadedEntitiesData(), (t.loadingState = S.GuX.IDLE), t.destroyItems([t.tracks, t.ids]);
                    },
                }));
            var O = a(89511);
            let P = i.gK.compose(i.gK.model('OfflineArtistTrackIds', { ids: i.gK.maybeNull(i.gK.array(i.gK.string)) }), N.XT, N.pl).actions((t) => ({
                    getIds: (0, i.L3)(function* (e, a) {
                        let { modelActionsLogger: r } = (0, i._$)(t);
                        if (t.loadingState !== S.GuX.PENDING)
                            try {
                                t.loadingState = S.GuX.PENDING;
                                let r = yield a.getArtistTrackIdsByUser(e);
                                (t.ids = (0, i.wg)(r)), t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.RESOLVE);
                            } catch (e) {
                                r.error(e), t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (t.loadingState = S.GuX.IDLE), t.destroyItems([t.ids]);
                    },
                })),
                U = i.gK
                    .compose(i.gK.model('OfflineArtist', { id: i.gK.maybeNull(i.gK.string), meta: i.gK.maybeNull(u.G4), trackIds: P, downloadedTracks: O.b }), N.XT, N.pl)
                    .views((t) => ({
                        get isNotFound() {
                            return t.isResolved && !t.meta;
                        },
                    }))
                    .actions((t) => ({
                        setTracksCount: (e) => {
                            var a;
                            (null == (a = t.meta) ? void 0 : a.artist.counts) && (t.meta.artist.counts.tracks = e);
                        },
                        getArtist: (0, i.L3)(function* (e, a) {
                            let { modelActionsLogger: r } = (0, i._$)(t);
                            if (t.loadingState !== S.GuX.PENDING) {
                                t.id = e;
                                try {
                                    t.loadingState = S.GuX.PENDING;
                                    let r = yield a.getArtist(e);
                                    r && (t.meta = (0, i.wg)({ artist: (0, m.dM)(r) })), t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.RESOLVE);
                                } catch (e) {
                                    r.error(e), t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.REJECT);
                                }
                            }
                        }),
                        reset() {
                            (t.id = null), (t.loadingState = S.GuX.IDLE), t.trackIds.reset(), t.downloadedTracks.reset(), t.destroyItems([t.meta]);
                        },
                    })),
                w = i.gK
                    .compose(
                        i.gK.model('ArtistPage', {
                            id: i.gK.maybeNull(i.gK.string),
                            meta: i.gK.maybeNull(u.G4),
                            landing: l.Ju,
                            popularTracks: i.gK.array(c.vj),
                            lastRelease: i.gK.maybeNull(n.JC),
                            upcomingAlbum: i.gK.maybeNull(n.VH),
                            concerts: i.gK.maybeNull(i.gK.array(p.aR)),
                            similarArtists: i.gK.array(m.PK),
                            playlists: i.gK.array(g.IP),
                            errorStatusCode: i.gK.maybeNull(i.gK.number),
                            deprecationTargetArtistId: i.gK.maybeNull(i.gK.number),
                            albums: i.gK.array(n.JC),
                            discography: i.gK.array(n.JC),
                            compilations: i.gK.array(n.JC),
                            clips: i.gK.array(d.kv),
                            artistPick: i.gK.maybeNull(f),
                            familiarInfo: A,
                            albumsSubpage: I,
                            fullTracksListSubpage: k,
                            concertsSubpage: X,
                            similarArtistsSubPage: h,
                            clipsSubpage: T,
                            familiarSubpage: D,
                            commonSubPage: K,
                            offlineArtist: U,
                            infoLoadingState: N.XT,
                            infoErrorStatusCode: i.gK.maybeNull(i.gK.number),
                        }),
                        N.pl,
                        N.XT,
                    )
                    .views((t) => {
                        let e = {
                            get isLoading() {
                                return t.isNeededToLoad || t.loadingState === S.GuX.PENDING;
                            },
                            get hasPopularTracks() {
                                return e.isLoading || t.popularTracks.length > 0;
                            },
                            get hasAlbums() {
                                return e.isLoading || t.albums.length > 0;
                            },
                            get hasDiscography() {
                                return e.isLoading || t.discography.length > 0;
                            },
                            get hasCompilations() {
                                return e.isLoading || t.compilations.length > 0;
                            },
                            get hasSimilarArtists() {
                                return e.isLoading || t.similarArtists.length > 0;
                            },
                            get hasPlaylists() {
                                return e.isLoading || (t.playlists && t.playlists.length > 0);
                            },
                            get hasConcerts() {
                                return e.isLoading || (t.concerts && t.concerts.length > 0);
                            },
                            get hasClips() {
                                return e.isLoading || t.clips.length > 0;
                            },
                            get isNotFound() {
                                return t.isRejected && (t.errorStatusCode === s.X1.NOT_FOUND || t.errorStatusCode === s.X1.BAD_REQUEST);
                            },
                            get isInfoNotFound() {
                                return t.infoLoadingState.isRejected && (t.infoErrorStatusCode === s.X1.NOT_FOUND || t.infoErrorStatusCode === s.X1.BAD_REQUEST);
                            },
                            get isSomethingWentWrong() {
                                return t.isRejected && !e.isNotFound;
                            },
                            get isInfoSomethingWentWrong() {
                                return t.infoLoadingState.isRejected && !e.isInfoNotFound;
                            },
                            get isCacheNotFound() {
                                return t.isRejected && t.errorStatusCode === o.FX;
                            },
                            get hasReleaseBlock() {
                                return !!(e.isLoading || t.upcomingAlbum || t.lastRelease);
                            },
                            get selfLink() {
                                if (!t.id) return '';
                                let { href: e } = (0, S.uvd)('/artist/:artistId', { params: { artistId: t.id } });
                                return e;
                            },
                            get tracksUrl() {
                                if (!t.id) return '';
                                let { href: e } = (0, S.uvd)('/artist/:artistId/tracks', { params: { artistId: t.id } });
                                return e;
                            },
                            get concertsUrl() {
                                var a;
                                if ((null == (a = t.meta) ? void 0 : a.artist.id) && t.concerts && t.concerts.length > u.M$) {
                                    let { href: e } = (0, S.uvd)('/artist/:artistId/concerts', { params: { artistId: t.meta.artist.id } });
                                    return e;
                                }
                                return '';
                            },
                            get clipsUrl() {
                                if (!t.id) return '';
                                let { href: e } = (0, S.uvd)('/artist/:artistId/videos', { params: { artistId: t.id } });
                                return e;
                            },
                            get compilationsUrl() {
                                if (!t.id) return '';
                                let { href: e } = (0, S.uvd)('/artist/:artistId/compilations', { params: { artistId: t.id } });
                                return e;
                            },
                            get discographyUrl() {
                                if (!t.id) return '';
                                let { href: e } = (0, S.uvd)('/artist/:artistId/discography', { params: { artistId: t.id } });
                                return e;
                            },
                            get albumsUrl() {
                                if (!t.id) return '';
                                let { href: e } = (0, S.uvd)('/artist/:artistId/albums', { params: { artistId: t.id } });
                                return e;
                            },
                            get similarArtistsUrl() {
                                if (!t.id) return '';
                                let { href: e } = (0, S.uvd)('/artist/:artistId/similar', { params: { artistId: t.id } });
                                return e;
                            },
                        };
                        return e;
                    })
                    .actions((t) => ({
                        getData: (0, i.L3)(function* (e) {
                            let { artistId: a, preloadedArtist: o } = e,
                                { slides: l, experiments: d } = (0, i.Zn)(t),
                                { artistsResource: N, modelActionsLogger: v } = (0, i._$)(t);
                            if (((t.id = a), t.loadingState !== S.GuX.PENDING))
                                try {
                                    var L, b, I;
                                    t.loadingState = S.GuX.PENDING;
                                    let e = o;
                                    e ||
                                        (e = yield N.getBriefInfo({
                                            artistId: a,
                                            popularTracksCount: u.xx,
                                            fetchPlaylistLikesCounts: !0,
                                            discographyBlockEnabled: !0,
                                            useClipDataFormat: !0,
                                        }));
                                    let {
                                        popularTracks: v,
                                        error: T,
                                        artist: X,
                                        stats: y,
                                        albums: D,
                                        playlists: G,
                                        alsoAlbums: f,
                                        similarArtists: h,
                                        lastReleases: K,
                                        concerts: A,
                                        upcomingAlbum: R,
                                        discography: k,
                                        artistPick: O,
                                        clips: P,
                                        allCovers: U,
                                    } = e;
                                    if ('not-found' === T || (null == X ? void 0 : X.error) === 'not-found') {
                                        (t.errorStatusCode = s.X1.NOT_FOUND), (t.loadingState = S.GuX.REJECT);
                                        return;
                                    }
                                    if (null == (L = X.deprecation) ? void 0 : L.targetArtistId) {
                                        (t.deprecationTargetArtistId = X.deprecation.targetArtistId), (t.loadingState = S.GuX.RESOLVE);
                                        return;
                                    }
                                    if (
                                        ((t.commonSubPage.artistName = X.name),
                                        d.checkExperiment(S.zal.WebNextArtistSkeletonHeader, 'on') ||
                                            (t.meta = (0, i.wg)(
                                                ((t, e, a) => {
                                                    var s;
                                                    let o = null == (s = t.extraActions) ? void 0 : s.find((t) => t.type === r.DONATION && E(t.url));
                                                    return (0, i.wg)({
                                                        artist: (0, m.dM)(t),
                                                        donationUrl: null == o ? void 0 : o.url,
                                                        lastMonthListeners: null == e ? void 0 : e.lastMonthListeners,
                                                        covers: null == a ? void 0 : a.map((t) => t.uri),
                                                    });
                                                })(X, y, U),
                                            )),
                                        (null == (I = t.meta) || null == (b = I.artist) ? void 0 : b.resolveAllDisclaimers) &&
                                            (yield t.meta.artist.resolveAllDisclaimers()),
                                        K && K.length > 0)
                                    ) {
                                        let e = K[0];
                                        e && D && D.length > 1 && (t.lastRelease = (0, i.wg)((0, n.pp)(e)));
                                    }
                                    R && (t.upcomingAlbum = (0, i.wg)((0, n.lO)(R))),
                                        A && (t.concerts = (0, i.wg)(A.map(p.oP))),
                                        v && v.length > 0 && (t.popularTracks = (0, i.wg)(v.slice(0, u.xx).map((t) => (0, c.vU)(t)))),
                                        h && h.length > 0 && (t.similarArtists = (0, i.wg)(h.slice(0, u.dg).map(m.dM))),
                                        Number(null == D ? void 0 : D.length) > 0 && (t.albums = (0, i.wg)(null == D ? void 0 : D.map(n.pp))),
                                        Number(null == k ? void 0 : k.length) > 0 && (t.discography = (0, i.wg)(null == k ? void 0 : k.map(n.pp).slice(0, u.vx))),
                                        Number(null == f ? void 0 : f.length) > 0 && (t.compilations = (0, i.wg)(null == f ? void 0 : f.map(n.pp).slice(0, u.vx))),
                                        G && G.length > 0 && (t.playlists = (0, i.wg)(G.map(g.ZC).slice(0, u.vx))),
                                        O &&
                                            (t.artistPick = ((t) => {
                                                let e = t.artists.map((t) => (0, m.as)({ artist: t }));
                                                return (0, i.wg)({ playlist: (0, g.bk)({ playlist: t.playlist }), artists: e });
                                            })(O)),
                                        P && (t.clips = (0, i.wg)(P.map(C).slice(0, u.eS))),
                                        l.resetArtist(),
                                        t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.RESOLVE);
                                } catch (e) {
                                    v.error(e), e instanceof s.GX && (t.errorStatusCode = e.statusCode), t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.REJECT);
                                }
                        }),
                        getInfo: (0, i.L3)(function* (e) {
                            let { artistId: a } = e,
                                { artistsResource: r, modelActionsLogger: o } = (0, i._$)(t);
                            if (((t.id = a), t.infoLoadingState.loadingState !== S.GuX.PENDING))
                                try {
                                    var l, n, d, g, c, p;
                                    t.infoLoadingState.loadingState = S.GuX.PENDING;
                                    let e = yield r.getInfo({ artistId: a }),
                                        { artist: s, deprecation: o } = e;
                                    if (null == o ? void 0 : o.targetArtistId) {
                                        (t.deprecationTargetArtistId = o.targetArtistId), (t.loadingState = S.GuX.RESOLVE);
                                        return;
                                    }
                                    (t.commonSubPage.artistName = s.name),
                                        (t.meta = (0, i.wg)(
                                            (0, i.wg)({
                                                artist: (0, m.as)({ artist: e.artist, trailer: e.trailer, isComposer: e.artistType === L.o.COMPOSER }),
                                                donationUrl: E(null == (d = e.donation) ? void 0 : d.tipUrl) ? (null == (g = e.donation) ? void 0 : g.tipUrl) : void 0,
                                                lastMonthListeners: null == (c = e.stats) ? void 0 : c.lastMonthListeners,
                                                brandedButton: e.brandedButton ? (0, u.LH)(e.brandedButton) : void 0,
                                                covers:
                                                    null == (p = e.covers)
                                                        ? void 0
                                                        : p.map((t) => {
                                                              var e;
                                                              return null != (e = t.uri) ? e : '';
                                                          }),
                                            }),
                                        )),
                                        (null == (n = t.meta) || null == (l = n.artist) ? void 0 : l.resolveAllDisclaimers) &&
                                            (yield t.meta.artist.resolveAllDisclaimers()),
                                        t.infoLoadingState.loadingState !== S.GuX.IDLE && (t.infoLoadingState.loadingState = S.GuX.RESOLVE);
                                } catch (e) {
                                    o.error(e),
                                        e instanceof s.GX && (t.infoErrorStatusCode = e.statusCode),
                                        t.infoLoadingState.loadingState !== S.GuX.IDLE && (t.infoLoadingState.loadingState = S.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (t.loadingState = S.GuX.IDLE),
                                (t.infoLoadingState.loadingState = S.GuX.IDLE),
                                t.landing.reset(),
                                (t.id = null),
                                (t.errorStatusCode = null),
                                (t.deprecationTargetArtistId = null),
                                t.destroyItems([
                                    t.clips,
                                    t.popularTracks,
                                    t.similarArtists,
                                    t.playlists,
                                    t.albums,
                                    t.discography,
                                    t.compilations,
                                    t.meta,
                                    t.lastRelease,
                                    t.upcomingAlbum,
                                    t.concerts,
                                    t.artistPick,
                                ]);
                        },
                    }));
            var _ = a(42509),
                F = a(89071),
                B = a(6237),
                j = a(70768);
            a(45957);
            var J = a(41680),
                V = a(7425),
                $ = a(55273);
        },
    },
]);
