'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2591],
    {
        82591: (t, e, a) => {
            a.d(e, {
                rJ: () => U.ArtistAlbumsPage,
                GH: () => w.ArtistClipsPage,
                cC: () => _.ArtistConcertsPage,
                Sd: () => F.ArtistFamiliarPage,
                ZQ: () => B.ArtistPage,
                E: () => P,
                Wy: () => j.ArtistSimilarPage,
                fD: () => J.ArtistTracksPage,
            }),
                a(99775),
                a(83924),
                a(88599),
                a(35944),
                a(29222),
                a(53060),
                a(53891),
                a(73398),
                a(81439);
            var r,
                i = a(51606),
                s = a(14525),
                l = a(14622),
                o = a(22991),
                n = a(90914),
                u = a(11334),
                d = a(66281),
                g = a(79670),
                c = a(66161),
                m = a(81628),
                p = a(16616),
                S = a(42561),
                N = a(54690);
            !(function (t) {
                (t.DEFAULT = 'default'), (t.DONATION = 'donation'), (t.REWIND = 'year-rewind');
            })(r || (r = {}));
            let v = (t) => {
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
            var E = a(67441),
                T = a(40094);
            let C = i.gK
                    .compose(
                        i.gK.model('ArtistAlbumsPage', {
                            pagesLoader: (0, N.Ij)(n.JC),
                            variant: i.gK.maybeNull(i.gK.enumeration(Object.values(T.h))),
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
                            let { artistId: a, page: r = 0, pageSize: l = 20, sort: o, preloadedAlbums: u } = e,
                                { artistsResource: d, modelActionsLogger: g } = (0, i._$)(t);
                            if (t.pagesLoader.isPageNeedToLoad(r))
                                try {
                                    t.pagesLoader.setPageState(r, S.GuX.PENDING);
                                    let e = { artistId: a, page: r, pageSize: l, sort: { sortBy: null == o ? void 0 : o.sortBy } },
                                        i = u;
                                    if (!i)
                                        switch (t.variant) {
                                            case T.h.COMPILATIONS:
                                                i = yield d.getAlsoAlbums(e);
                                                break;
                                            case T.h.DISCOGRAPHY:
                                                i = yield d.getDiscographyAlbums(e);
                                                break;
                                            default:
                                                i = yield d.getDirectAlbums(e);
                                        }
                                    let s = i.albums.map(n.pp);
                                    t.pagesLoader.setItems(s, { page: r, pager: { page: r, perPage: l, total: i.pager.total } });
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
                b = i.gK
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
                            let { artistId: a, page: r = 0, pageSize: l = 20, preloadedClips: o } = e,
                                { artistsResource: n, modelActionsLogger: u } = (0, i._$)(t);
                            if (t.pagesLoader.isPageNeedToLoad(r))
                                try {
                                    t.pagesLoader.setPageState(r, S.GuX.PENDING);
                                    let e = o;
                                    e || (e = yield n.getClips({ artistId: a, page: r, pageSize: l }));
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
                L = i.gK
                    .compose(
                        i.gK.model('ArtistConcertsPage', {
                            errorStatusCode: i.gK.maybeNull(i.gK.number),
                            concerts: i.gK.maybeNull(i.gK.array(p.aR)),
                            artistTitle: i.gK.maybeNull(i.gK.string),
                        }),
                        N.pl,
                        N.XT,
                    )
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
                                { artistsResource: l, modelActionsLogger: o } = (0, i._$)(t);
                            if (t.loadingState !== S.GuX.PENDING)
                                try {
                                    t.loadingState = S.GuX.PENDING;
                                    let e = null == r ? void 0 : r.concerts,
                                        s = null == r ? void 0 : r.artistTitle;
                                    if (!e) {
                                        let t = yield l.getConcerts({ artistId: a });
                                        (e = t.concerts), (s = t.artistTitle);
                                    }
                                    (t.concerts = (0, i.wg)(e.map(p.oP))), (t.artistTitle = null != s ? s : null), (t.loadingState = S.GuX.RESOLVE);
                                } catch (e) {
                                    o.error(e),
                                        e instanceof s.GX &&
                                            (e.statusCode === s.X1.NOT_FOUND || e.statusCode === s.X1.BAD_REQUEST) &&
                                            (t.errorStatusCode = s.X1.NOT_FOUND),
                                        t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (t.loadingState = S.GuX.IDLE), (t.errorStatusCode = null), (t.artistTitle = null), t.destroyItems([t.concerts]);
                        },
                    })),
                I = (t) => (0, i.wg)({ ...(0, n.sK)({ album: t, artists: t.artists }), version: t.version }),
                X = i.gK
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
                                var i, l;
                                if (e.isLoading) return !0;
                                return (
                                    Number(null == (i = t.collectionTracks) ? void 0 : i.length) > 0 && Number(null == (l = t.collectionAlbums) ? void 0 : l.length) > 0
                                );
                            },
                            get hasVibeTracks() {
                                var o;
                                return Number(null == (o = t.vibeTracks) ? void 0 : o.length) > 0;
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
                                { artistsResource: l, modelActionsLogger: o } = (0, i._$)(t);
                            if (t.loadingState !== S.GuX.PENDING)
                                try {
                                    var n, u, d, g, m, p;
                                    t.loadingState = S.GuX.PENDING;
                                    let e = r;
                                    e || (e = yield l.getFamiliarYou({ artistId: a, waveTracksLimit: 100, collectionTracksLimit: 100, collectionAlbumsLimit: 20 })),
                                        (t.vibeTracks = (0, i.wg)(null == (u = e.wave) || null == (n = u.tracks) ? void 0 : n.map((t) => (0, c.vU)(t)))),
                                        (t.collectionTracks = (0, i.wg)(null == (g = e.collection) || null == (d = g.tracks) ? void 0 : d.map((t) => (0, c.vU)(t)))),
                                        (t.collectionAlbums = (0, i.wg)(null == (p = e.collection) || null == (m = p.albums) ? void 0 : m.map(I))),
                                        (t.loadingState = S.GuX.RESOLVE);
                                } catch (e) {
                                    o.error(e),
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
            var y = a(25358);
            let D = i.gK.model('ArtistPick', { playlist: y.$o, artists: i.gK.array(m.PK) }),
                G = i.gK
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
                                { artistsResource: l, modelActionsLogger: o } = (0, i._$)(t);
                            try {
                                t.loadingState = S.GuX.PENDING;
                                let e = r;
                                e || (e = yield l.getSimilarArtists({ artistId: a })),
                                    (t.similarArtists = (0, i.wg)(e.similarArtists.map(m.dM))),
                                    t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.RESOLVE);
                            } catch (e) {
                                o.error(e),
                                    e instanceof s.GX && (e.statusCode === s.X1.NOT_FOUND || e.statusCode === s.X1.BAD_REQUEST) && (t.errorStatusCode = s.X1.NOT_FOUND),
                                    t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.REJECT);
                            }
                        }),
                        reset() {
                            (t.loadingState = S.GuX.IDLE), (t.errorStatusCode = null), t.destroyItems([t.similarArtists]);
                        },
                    })),
                f = i.gK.model('CommonSubPage', { artistName: i.gK.maybeNull(i.gK.string) }),
                K = i.gK
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
            var h = a(41094);
            let A = i.gK
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
                            { artistsResource: r, modelActionsLogger: l } = (0, i._$)(t);
                        try {
                            t.loadingState = S.GuX.PENDING;
                            let e = yield r.getArtistTrackIds({ artistId: a }),
                                { sonataState: s } = (0, i.Zn)(t);
                            s.setUnloadedEntitiesData(e.map((t) => (0, h.li)(t))),
                                (t.ids = (0, i.wg)(e)),
                                t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.RESOLVE);
                        } catch (e) {
                            l.error(e),
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
            var R = a(21202);
            let k = i.gK.compose(i.gK.model('OfflineArtistTrackIds', { ids: i.gK.maybeNull(i.gK.array(i.gK.string)) }), N.XT, N.pl).actions((t) => ({
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
                O = i.gK
                    .compose(i.gK.model('OfflineArtist', { id: i.gK.maybeNull(i.gK.string), meta: i.gK.maybeNull(u.G4), trackIds: k, downloadedTracks: R.b }), N.XT, N.pl)
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
                P = i.gK
                    .compose(
                        i.gK.model('ArtistPage', {
                            id: i.gK.maybeNull(i.gK.string),
                            meta: i.gK.maybeNull(u.G4),
                            landing: o.Ju,
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
                            artistPick: i.gK.maybeNull(D),
                            familiarInfo: K,
                            albumsSubpage: C,
                            fullTracksListSubpage: A,
                            concertsSubpage: L,
                            similarArtistsSubPage: G,
                            clipsSubpage: b,
                            familiarSubpage: X,
                            commonSubPage: f,
                            offlineArtist: O,
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
                                return t.isRejected && t.errorStatusCode === l.FX;
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
                            let { artistId: a, preloadedArtist: l } = e,
                                { slides: o, experiments: d } = (0, i.Zn)(t),
                                { artistsResource: N, modelActionsLogger: E } = (0, i._$)(t);
                            if (((t.id = a), t.loadingState !== S.GuX.PENDING))
                                try {
                                    var T, C, b;
                                    t.loadingState = S.GuX.PENDING;
                                    let e = l;
                                    e ||
                                        (e = yield N.getBriefInfo({
                                            artistId: a,
                                            popularTracksCount: u.xx,
                                            fetchPlaylistLikesCounts: !0,
                                            discographyBlockEnabled: !0,
                                            useClipDataFormat: !0,
                                        }));
                                    let {
                                        popularTracks: E,
                                        error: L,
                                        artist: I,
                                        stats: X,
                                        albums: y,
                                        playlists: D,
                                        alsoAlbums: G,
                                        similarArtists: f,
                                        lastReleases: K,
                                        concerts: h,
                                        upcomingAlbum: A,
                                        discography: R,
                                        artistPick: k,
                                        clips: O,
                                        allCovers: P,
                                    } = e;
                                    if ('not-found' === L || (null == I ? void 0 : I.error) === 'not-found') {
                                        (t.errorStatusCode = s.X1.NOT_FOUND), (t.loadingState = S.GuX.REJECT);
                                        return;
                                    }
                                    if (null == (T = I.deprecation) ? void 0 : T.targetArtistId) {
                                        (t.deprecationTargetArtistId = I.deprecation.targetArtistId), (t.loadingState = S.GuX.RESOLVE);
                                        return;
                                    }
                                    if (
                                        ((t.commonSubPage.artistName = I.name),
                                        d.checkExperiment(S.zal.WebNextArtistSkeletonHeader, 'on') ||
                                            (t.meta = (0, i.wg)(
                                                ((t, e, a) => {
                                                    var s;
                                                    let l = null == (s = t.extraActions) ? void 0 : s.find((t) => t.type === r.DONATION && (0, S.Kgy)(t.url));
                                                    return (0, i.wg)({
                                                        artist: (0, m.dM)(t),
                                                        donationUrl: null == l ? void 0 : l.url,
                                                        lastMonthListeners: null == e ? void 0 : e.lastMonthListeners,
                                                        covers: null == a ? void 0 : a.map((t) => t.uri),
                                                    });
                                                })(I, X, P),
                                            )),
                                        (null == (b = t.meta) || null == (C = b.artist) ? void 0 : C.resolveAllDisclaimers) &&
                                            (yield t.meta.artist.resolveAllDisclaimers()),
                                        K && K.length > 0)
                                    ) {
                                        let e = K[0];
                                        e && y && y.length > 1 && (t.lastRelease = (0, i.wg)((0, n.pp)(e)));
                                    }
                                    A && (t.upcomingAlbum = (0, i.wg)((0, n.lO)(A))),
                                        h && (t.concerts = (0, i.wg)(h.map(p.oP))),
                                        E && E.length > 0 && (t.popularTracks = (0, i.wg)(E.slice(0, u.xx).map((t) => (0, c.vU)(t)))),
                                        f && f.length > 0 && (t.similarArtists = (0, i.wg)(f.slice(0, u.dg).map(m.dM))),
                                        Number(null == y ? void 0 : y.length) > 0 && (t.albums = (0, i.wg)(null == y ? void 0 : y.map(n.pp))),
                                        Number(null == R ? void 0 : R.length) > 0 && (t.discography = (0, i.wg)(null == R ? void 0 : R.map(n.pp).slice(0, u.vx))),
                                        Number(null == G ? void 0 : G.length) > 0 && (t.compilations = (0, i.wg)(null == G ? void 0 : G.map(n.pp).slice(0, u.vx))),
                                        D && D.length > 0 && (t.playlists = (0, i.wg)(D.map(g.ZC).slice(0, u.vx))),
                                        k &&
                                            (t.artistPick = ((t) => {
                                                let e = t.artists.map((t) => (0, m.as)({ artist: t }));
                                                return (0, i.wg)({ playlist: (0, g.bk)({ playlist: t.playlist }), artists: e });
                                            })(k)),
                                        O && (t.clips = (0, i.wg)(O.map(v).slice(0, u.eS))),
                                        o.resetArtist(),
                                        t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.RESOLVE);
                                } catch (e) {
                                    E.error(e), e instanceof s.GX && (t.errorStatusCode = e.statusCode), t.loadingState !== S.GuX.IDLE && (t.loadingState = S.GuX.REJECT);
                                }
                        }),
                        getInfo: (0, i.L3)(function* (e) {
                            let { artistId: a } = e,
                                { artistsResource: r, modelActionsLogger: l } = (0, i._$)(t);
                            if (((t.id = a), t.infoLoadingState.loadingState !== S.GuX.PENDING))
                                try {
                                    var o, n, d, g, c, p;
                                    t.infoLoadingState.loadingState = S.GuX.PENDING;
                                    let e = yield r.getInfo({ artistId: a }),
                                        { artist: s, deprecation: l } = e;
                                    if (null == l ? void 0 : l.targetArtistId) {
                                        (t.deprecationTargetArtistId = l.targetArtistId), (t.loadingState = S.GuX.RESOLVE);
                                        return;
                                    }
                                    (t.commonSubPage.artistName = s.name),
                                        (t.meta = (0, i.wg)(
                                            (0, i.wg)({
                                                artist: (0, m.as)({ artist: e.artist, trailer: e.trailer, isComposer: e.artistType === E.o.COMPOSER }),
                                                donationUrl: (0, S.Kgy)(null == (d = e.donation) ? void 0 : d.tipUrl)
                                                    ? null == (g = e.donation)
                                                        ? void 0
                                                        : g.tipUrl
                                                    : void 0,
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
                                        (null == (n = t.meta) || null == (o = n.artist) ? void 0 : o.resolveAllDisclaimers) &&
                                            (yield t.meta.artist.resolveAllDisclaimers()),
                                        t.infoLoadingState.loadingState !== S.GuX.IDLE && (t.infoLoadingState.loadingState = S.GuX.RESOLVE);
                                } catch (e) {
                                    l.error(e),
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
            var U = a(38593),
                w = a(93039),
                _ = a(60092),
                F = a(49826);
            a(43643);
            var B = a(68241),
                j = a(16634),
                J = a(88477);
        },
    },
]);
