'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4367],
    {
        36748: (e, t, i) => {
            i.d(t, { dx: () => d, l$: () => R.AlbumPage, MH: () => N, Wh: () => J }), i(2576), i(86552);
            var l,
                n,
                a = i(93064),
                s = i(83252),
                r = i(26433);
            let o = a.gK.model('Cpa', { clid: a.gK.string, artistId: a.gK.number }),
                d = a.gK
                    .compose(a.gK.model('AlbumCpa', { albumId: a.gK.maybeNull(a.gK.number), cpa: a.gK.maybeNull(o) }), r.pl)
                    .views((e) => ({
                        isPlusCPAEnabled(t) {
                            let { pageAlbumId: i, albumId: l, isNonMusic: n } = t,
                                {
                                    experiments: s,
                                    user: { isAuthorized: r },
                                } = (0, a.Zn)(e);
                            return !1;
                        },
                        isPlusCPAPlayerBarEnabled(t, i) {
                            let {
                                experiments: l,
                                user: { hasPlus: n },
                            } = (0, a.Zn)(e);
                            return !1;
                        },
                        isPlusCPABannerEnabled(t) {
                            var i;
                            let { pageAlbumId: l, albumId: n, isNonMusic: s } = t,
                                {
                                    experiments: r,
                                    settings: o,
                                    user: { hasPlus: d },
                                } = (0, a.Zn)(e);
                            return null == (i = o.browserInfo) || i.isTouch, !1;
                        },
                        isHidePlusModalEnabled(t, i) {
                            var l;
                            let {
                                experiments: n,
                                settings: s,
                                user: { hasPlus: r },
                            } = (0, a.Zn)(e);
                            return null == (l = s.browserInfo) || l.isTouch, !1;
                        },
                    }))
                    .actions((e) => ({
                        getCpa: (0, a.L3)(function* (t) {
                            let { albumId: i, preloadedCpa: l } = t,
                                { experiments: n, user: s } = (0, a.Zn)(e);
                        }),
                        reset() {
                            (e.albumId = null), e.destroyItems([e.cpa]);
                        },
                    }));
            var u = i(14287),
                m = i(58623),
                g = i(8075);
            ((l || (l = {})).RECENT_ALBUMS = 'recent-albums'),
                (function (e) {
                    (e[(e.DAY = 1)] = 'DAY'), (e[(e.WEEK = 7)] = 'WEEK'), (e[(e.MONTH = 30)] = 'MONTH');
                })(n || (n = {}));
            var c = i(12460),
                b = i(8593),
                E = i(6664),
                v = i(80156),
                A = i(7981),
                h = i(97719),
                p = i(21365),
                S = i(46423);
            let L = (e) => (0, a.wg)({ type: S.rU.TEXT, data: null != e ? e : null, loadingState: s.GuX.RESOLVE }),
                G = (e) => {
                    var t;
                    let { data: i, ...l } = e;
                    return (0, a.wg)({ type: null != (t = null == i ? void 0 : i.type) ? t : g.S.TRACK, data: null != i ? i : null, ...l });
                },
                I = (e) => ''.concat(e, '-text'),
                y = (e) => String(e),
                C = (e) => (0, a.wg)({ id: e.id, type: e.type, title: e.title, albums: e.albums.map(v.pp) }),
                f = (e) => !!(e && 'position' in e),
                T = a.gK.compose(a.gK.model('AlbumDonations', { items: a.gK.maybeNull(a.gK.array(A.eG)) }), r.pl, r.XT).actions((e) => ({
                    reset() {
                        (e.loadingState = s.GuX.IDLE), e.destroyItems([e.items]);
                    },
                })),
                X = a.gK.model('LabelItem', { id: a.gK.number, name: a.gK.string }),
                K = a.gK.compose(a.gK.model('RelatedAlbumsPage', { items: a.gK.array(v.JC) }), r.pl, r.XT).actions((e) => ({
                    reset() {
                        (e.loadingState = s.GuX.IDLE), e.destroyItems([e.items]);
                    },
                })),
                k = a.gK.compose(a.gK.model('RelatedContent', { items: a.gK.maybeNull(a.gK.array(b.N3)) }), r.pl, r.XT).actions((e) => ({
                    reset() {
                        (e.loadingState = s.GuX.IDLE), e.destroyItems([e.items]);
                    },
                })),
                N = a.gK
                    .compose(
                        a.gK.model('AlbumPage', {
                            id: a.gK.maybeNull(a.gK.number),
                            meta: a.gK.maybeNull(v.JC),
                            items: a.gK.array(b.PX),
                            indexItems: a.gK.map(a.gK.array(a.gK.number)),
                            errorStatusCode: a.gK.maybeNull(a.gK.number),
                            deprecationTargetAlbumId: a.gK.maybeNull(a.gK.number),
                            latestGenreAlbums: a.gK.maybe(K),
                            otherArtistAlbums: a.gK.maybe(K),
                            otherAlbumVersions: a.gK.maybe(a.gK.array(v.JC)),
                            labels: a.gK.maybeNull(a.gK.array(X)),
                            description: a.gK.maybe(a.gK.string),
                            donations: a.gK.maybe(T),
                            relatedContent: a.gK.maybe(k),
                            allTracksUnfinished: a.gK.boolean,
                            similarEntities: E.F6,
                        }),
                        r.Ec,
                        r.pl,
                        r.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isOtherArtistAlbumsAvailable() {
                                var i, l, n, r, o;
                                return !!(
                                    !(null == (i = e.meta) ? void 0 : i.isNonMusic) &&
                                    (null == (n = e.meta) || null == (l = n.artists) ? void 0 : l.length) === 1 &&
                                    !(null == (o = e.meta) || null == (r = o.artists[0]) ? void 0 : r.various)
                                );
                            },
                            get isLatestGenreAlbumsAvailable() {
                                var d, m;
                                return !!(!(null == (d = e.meta) ? void 0 : d.isNonMusic) && (null == (m = e.meta) ? void 0 : m.genre));
                            },
                            get isNotFound() {
                                return e.isRejected && (e.errorStatusCode === u.X1.NOT_FOUND || e.errorStatusCode === u.X1.BAD_REQUEST);
                            },
                            get isSimilarEntitiesEnabled() {
                                let { experiments: t } = (0, a.Zn)(e);
                                return t.checkExperiment(s.zal.WebNextWaveAgentExperiment, 'on');
                            },
                            get isCacheNotFound() {
                                return e.isRejected && e.errorStatusCode === c.FX;
                            },
                            get hasDonations() {
                                var g;
                                return !!((null == (g = e.donations) ? void 0 : g.isResolved) && e.donations && e.donations.items && e.donations.items.length > 0);
                            },
                            get hasSimilarEntities() {
                                var b;
                                return !!(
                                    t.isSimilarEntitiesEnabled &&
                                    e.similarEntities.isLoaded &&
                                    (null == (b = e.similarEntities.data) ? void 0 : b.items) &&
                                    e.similarEntities.data.items.length > 0
                                );
                            },
                            get hasOtherAlbumVersions() {
                                return !!(e.isNeededToLoad || e.loadingState === s.GuX.PENDING || (e.otherAlbumVersions && e.otherAlbumVersions.length > 0));
                            },
                            get hasLatestGenreAlbums() {
                                var E, v;
                                let i = e.latestGenreAlbums && e.latestGenreAlbums.items && e.latestGenreAlbums.items.length > 0;
                                return !!(
                                    t.isLatestGenreAlbumsAvailable &&
                                    ((null == (E = e.latestGenreAlbums) ? void 0 : E.isNeededToLoad) || (null == (v = e.latestGenreAlbums) ? void 0 : v.isLoading) || i)
                                );
                            },
                            get hasOtherArtistAlbums() {
                                var A, h;
                                let i = e.otherArtistAlbums && e.otherArtistAlbums.items && e.otherArtistAlbums.items.length > 0;
                                return !!(
                                    t.isOtherArtistAlbumsAvailable &&
                                    ((null == (A = e.otherArtistAlbums) ? void 0 : A.isNeededToLoad) || (null == (h = e.otherArtistAlbums) ? void 0 : h.isLoading) || i)
                                );
                            },
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === s.GuX.PENDING;
                            },
                            get isLatestGenreAlbumsLoading() {
                                var p, L;
                                return !!((null == (p = e.latestGenreAlbums) ? void 0 : p.isNeededToLoad) || (null == (L = e.latestGenreAlbums) ? void 0 : L.isLoading));
                            },
                            get isOtherArtistAlbumsLoading() {
                                var G, I;
                                return !!((null == (G = e.otherArtistAlbums) ? void 0 : G.isNeededToLoad) || (null == (I = e.otherArtistAlbums) ? void 0 : I.isLoading));
                            },
                            get isRelatedContentLoading() {
                                var y, C;
                                return !!((null == (y = e.relatedContent) ? void 0 : y.isNeededToLoad) || (null == (C = e.relatedContent) ? void 0 : C.isLoading));
                            },
                            get contextMeta() {
                                var f, T, X, K, k, N, R, D, P;
                                return {
                                    id: e.meta.id,
                                    title: null == (f = e.meta) ? void 0 : f.title,
                                    coverUri: null == (T = e.meta) ? void 0 : T.coverUri,
                                    type: null == (X = e.meta) ? void 0 : X.type,
                                    year: null == (K = e.meta) ? void 0 : K.year,
                                    version: null == (k = e.meta) ? void 0 : k.version,
                                    genre: null == (N = e.meta) ? void 0 : N.genre,
                                    likesCount: null == (R = e.meta) ? void 0 : R.likesCount,
                                    averageColor: null == (D = e.meta) ? void 0 : D.averageColor,
                                    available: null == (P = e.meta) ? void 0 : P.isAvailable,
                                };
                            },
                            get tracks() {
                                return e.items.filter((e) => e.type !== S.rU.TEXT);
                            },
                            get lastEpisodes() {
                                return t.tracks.slice(0, 5);
                            },
                            get lastEpisodesTrackIds() {
                                return t.lastEpisodes.map((e) => e.id);
                            },
                            get hasLabel() {
                                return !!(e.labels && e.labels.length);
                            },
                            get shouldShowLabel() {
                                let { experiments: i } = (0, a.Zn)(e);
                                return t.hasLabel && i.checkExperiment(s.zal.WebNextLabelPage, 'on');
                            },
                            labelUrl(e) {
                                let { href: t } = (0, s.uvd)('/label/:labelId', { params: { labelId: e } });
                                return t;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            makeFlatVolumeItems: (t) => {
                                let i = 0;
                                t.volumes.forEach((l) => {
                                    t.volumes.length > 1 && l[0] && (e.items.push(L()), e.indexItems.set(I(l[0].id), [e.items.length - 1])),
                                        l.forEach((t) => {
                                            e.items.push(G({ id: t.id, loadingState: s.GuX.IDLE, positionInContext: i }));
                                            let l = e.indexItems.get(String(t.id));
                                            e.indexItems.set(y(t.id), l ? [...l, e.items.length - 1] : [e.items.length - 1]), i++;
                                        });
                                });
                            },
                            updateVolumeItemsState: (t, i) => {
                                t.forEach((t) => {
                                    let l = e.indexItems.get(String(t));
                                    null == l ||
                                        l.forEach((l) => {
                                            let n = e.items[l];
                                            f(n) &&
                                                (e.items[l] = G({ id: t, loadingState: i, positionInContext: n.positionInContext, hasEverFinished: n.hasEverFinished }));
                                        });
                                });
                            },
                            insertDataToVolumeItems: (t) => {
                                t.forEach((t, i) => {
                                    let l = e.indexItems.get(y(t.id));
                                    null == l ||
                                        l.forEach((l) => {
                                            var n, a, r, o, d;
                                            let u = e.items[0],
                                                m = e.items[l],
                                                g = e.items[l - 1];
                                            if (!f(m)) return;
                                            let c =
                                                    f(u) && u.id === m.id
                                                        ? 1
                                                        : null == (r = t.albums) || null == (a = r[0]) || null == (n = a.trackPosition)
                                                          ? void 0
                                                          : n.index,
                                                b = null == m ? void 0 : m.positionInContext,
                                                E = f(g) && (null == g ? void 0 : g.position) ? g.position + 1 : c,
                                                v = (0, p.vU)(t, { hasEverFinished: null == m ? void 0 : m.hasEverFinished });
                                            if (v.isRemoved) {
                                                e.items[l] = G({ id: t.id, loadingState: s.GuX.REJECT, positionInContext: b, position: f(g) ? g.position : i });
                                                return;
                                            }
                                            e.items[l] = G({
                                                id: t.id,
                                                loadingState: s.GuX.RESOLVE,
                                                positionInContext: b,
                                                data: v,
                                                position: (null == g ? void 0 : g.type) === S.rU.TEXT ? 1 : E,
                                                isBest: null == (d = e.meta) || null == (o = d.bestAlbumTracks) ? void 0 : o.includes(Number(t.id)),
                                                hasEverFinished: null == m ? void 0 : m.hasEverFinished,
                                            });
                                        });
                                    let n = e.indexItems.get(I(t.id));
                                    null == n ||
                                        n.forEach((i) => {
                                            var l, n, a;
                                            e.items[i] = L(null == (a = t.albums) || null == (n = a[0]) || null == (l = n.trackPosition) ? void 0 : l.volume);
                                        });
                                });
                            },
                            setAlbumUnfinished: () => {
                                var i;
                                t.markUnfinished({ albumId: e.id || 0 }), null == (i = e.meta) || i.updateFinished(!1);
                            },
                            setAllTracksUnfinished: (t) => {
                                e.allTracksUnfinished = t;
                            },
                            checkAllAlbumTrackFinished: () => {
                                var i, l;
                                e.items
                                    .filter((e) => {
                                        let { type: t, data: i } = e;
                                        return i && t !== S.rU.TEXT;
                                    })
                                    .every((e) => {
                                        var t;
                                        let { data: i } = e;
                                        return null == i || null == (t = i.streamProgress) ? void 0 : t.hasEverFinished;
                                    }) &&
                                    ((null == (i = e.meta) ? void 0 : i.listeningFinished) ||
                                        (t.markFinished({ albumId: Number(e.id) }), null == (l = e.meta) || l.updateFinished(!0)));
                            },
                            markTracksFinished: (t) => {
                                let { withoutTracks: i = [] } = t;
                                e.items.forEach((e) => {
                                    if (e.type === S.rU.TEXT) return;
                                    let { data: t } = e;
                                    if (!(t && i.includes(t.id)))
                                        if (t) {
                                            var l;
                                            null == (l = t.streamProgress) || l.updateEverFinished(!0);
                                        } else e.updateEverFinished(!0);
                                });
                            },
                            markFinished: (0, a.L3)(function* (t) {
                                let { streamsResource: i, modelActionsLogger: l } = (0, a._$)(e);
                                try {
                                    return yield i.markAlbumFinished(t);
                                } catch (e) {
                                    return l.error(e), m.T.ERROR;
                                }
                            }),
                            markUnfinished: (0, a.L3)(function* (t) {
                                let { streamsResource: i, modelActionsLogger: l } = (0, a._$)(e);
                                try {
                                    return yield i.markAlbumUnfinished(t);
                                } catch (e) {
                                    return l.error(e), m.T.ERROR;
                                }
                            }),
                            setListeningFinishedStatus: (0, a.L3)(function* () {
                                var i;
                                return (null == (i = e.meta) ? void 0 : i.listeningFinished)
                                    ? (t.setAllTracksUnfinished(!0), yield t.markUnfinished({ albumId: Number(e.id) }))
                                    : yield t.markFinished({ albumId: Number(e.id) });
                            }),
                            getLatestGenreAlbums: (0, a.L3)(function* (t) {
                                let { topResource: i, modelActionsLogger: l } = (0, a._$)(e);
                                if (e.latestGenreAlbums && !e.latestGenreAlbums.isLoading)
                                    try {
                                        e.latestGenreAlbums.loadingState = s.GuX.PENDING;
                                        let l = yield i.getTopByGenre(t);
                                        (e.latestGenreAlbums.items = (0, a.wg)(l.albums.map(v.pp))), (e.latestGenreAlbums.loadingState = s.GuX.RESOLVE);
                                    } catch (t) {
                                        l.error(t), (e.latestGenreAlbums.loadingState = s.GuX.REJECT);
                                    }
                            }),
                            getSimilarEntities: (0, a.L3)(function* (t) {
                                let { albumResource: i, modelActionsLogger: l } = (0, a._$)(e);
                                if (!e.similarEntities.isLoading)
                                    try {
                                        e.similarEntities.loadingState = E.SQ.PENDING;
                                        let l = yield i.getSimilarEntities(t);
                                        (e.similarEntities.data = (0, E.Ds)(l)), (e.similarEntities.loadingState = E.SQ.RESOLVE);
                                    } catch (t) {
                                        l.error(t), (e.similarEntities.loadingState = E.SQ.REJECT);
                                    }
                            }),
                            getOtherArtistAlbums: (0, a.L3)(function* (t, i) {
                                let { artistsResource: l, modelActionsLogger: n } = (0, a._$)(e);
                                if (e.otherArtistAlbums && !e.otherArtistAlbums.isLoading)
                                    try {
                                        if (!t.artistId) {
                                            e.otherArtistAlbums.loadingState = s.GuX.REJECT;
                                            return;
                                        }
                                        e.otherArtistAlbums.loadingState = s.GuX.PENDING;
                                        let n = yield l.getSafeDirectAlbums({ ...t, artistId: t.artistId });
                                        (e.otherArtistAlbums.items = (0, a.wg)(n.albums.filter((e) => String(e.id) !== String(i)).map(v.pp))),
                                            (e.otherArtistAlbums.loadingState = s.GuX.RESOLVE);
                                    } catch (t) {
                                        n.error(t), (e.otherArtistAlbums.loadingState = s.GuX.REJECT);
                                    }
                            }),
                            getTracks: (0, a.L3)(function* (i) {
                                let { trackIds: l } = i,
                                    { tracksResource: n, modelActionsLogger: r } = (0, a._$)(e);
                                try {
                                    var o, d;
                                    let i;
                                    if (!(null == (o = e.meta) ? void 0 : o.id)) return;
                                    t.updateVolumeItemsState(l, s.GuX.PENDING);
                                    let a = yield n.getTracksMeta({ trackIds: ((i = e.meta.id), l.map((e) => ''.concat(e, ':').concat(i))), withProgress: !0 });
                                    for (let i of (t.insertDataToVolumeItems(a), a)) {
                                        let t = e.items.find((e) => f(e) && e.data && String(e.data.id) === String(i.id));
                                        f(t) && (null == (d = t.data) ? void 0 : d.resolveAllDisclaimers) && t.data.resolveAllDisclaimers();
                                    }
                                } catch (e) {
                                    r.error(e), t.updateVolumeItemsState(l, s.GuX.REJECT);
                                }
                            }),
                            getDonations: (0, a.L3)(function* (t) {
                                let { albumId: i } = t,
                                    { experiments: l } = (0, a.Zn)(e),
                                    { donationResource: n, modelActionsLogger: r } = (0, a._$)(e);
                                if (l.checkExperiment(s.zal.WebNextAlbumDonationButton, 'on') && e.donations && !e.donations.isLoading)
                                    try {
                                        e.donations.loadingState = s.GuX.PENDING;
                                        let { donations: t } = yield n.getAlbumDonations({ albumId: i });
                                        t &&
                                            (e.donations.items = (0, a.wg)(
                                                t.map((e) => {
                                                    var t;
                                                    let { data: i } = e;
                                                    return (0, A.GT)({ url: i.tipUrl, goal: null == (t = i.goal) ? void 0 : t.title, artist: i.artist });
                                                }),
                                            )),
                                            (e.donations.loadingState = s.GuX.RESOLVE);
                                    } catch (t) {
                                        r.error(t), (e.donations.loadingState = s.GuX.REJECT);
                                    }
                            }),
                            getData: (0, a.L3)(function* (i) {
                                let {
                                        albumId: r,
                                        resumeStream: o,
                                        preloadedAlbum: d,
                                        withLatestGenreAlbumsRequest: m = !0,
                                        withOtherArtistAlbumsRequest: c = !0,
                                        sonataState: b,
                                    } = i,
                                    { albumResource: E, modelActionsLogger: A } = (0, a._$)(e);
                                if (((e.id = r), e.loadingState !== s.GuX.PENDING))
                                    try {
                                        var p, S, L, G;
                                        let i, A;
                                        e.loadingState = s.GuX.PENDING;
                                        let I = d;
                                        if ((I || (I = yield E.getAlbumWithTracksIds({ albumId: r, resumeStream: o })), (null == I ? void 0 : I.error) === 'not-found')) {
                                            (e.errorStatusCode = u.X1.NOT_FOUND),
                                                (e.loadingState = s.GuX.REJECT),
                                                e.otherArtistAlbums && (e.otherArtistAlbums.loadingState = s.GuX.REJECT),
                                                e.latestGenreAlbums && (e.latestGenreAlbums.loadingState = s.GuX.REJECT);
                                            return;
                                        }
                                        if (null == (p = I.deprecation) ? void 0 : p.targetAlbumId) {
                                            (e.deprecationTargetAlbumId = I.deprecation.targetAlbumId), (e.loadingState = s.GuX.RESOLVE);
                                            return;
                                        }
                                        b.setUnloadedEntitiesData(I.volumes.flat().map((e) => (0, h.li)(e.id))),
                                            (e.meta = (0, v.pp)(I)),
                                            (e.labels = (0, a.wg)(I.labels)),
                                            (e.contentWarning = (0, a.wg)(I.contentWarning)),
                                            (e.description = (0, a.wg)(I.description)),
                                            (null == (S = e.meta) ? void 0 : S.resolveAllDisclaimers) && (yield e.meta.resolveAllDisclaimers()),
                                            I.duplicates &&
                                                I.duplicates.length > 0 &&
                                                (e.otherAlbumVersions = (0, a.wg)(null == (L = I.duplicates) ? void 0 : L.map(v.pp))),
                                            t.makeFlatVolumeItems(I);
                                        let y = [];
                                        for (let t = 0; t < 10; t++) {
                                            let i = e.items[t];
                                            (null == i ? void 0 : i.type) === g.S.TRACK && y.push(String(i.id));
                                        }
                                        yield t.getTracks({ trackIds: y }),
                                            e.isLatestGenreAlbumsAvailable &&
                                                m &&
                                                (i = t.getLatestGenreAlbums({ category: l.RECENT_ALBUMS, period: n.WEEK, pageSize: 8, genre: I.genre })),
                                            e.isOtherArtistAlbumsAvailable &&
                                                c &&
                                                (A = t.getOtherArtistAlbums({ artistId: String(null == (G = I.artists[0]) ? void 0 : G.id), limit: 8 }, r)),
                                            yield Promise.allSettled([i, A]),
                                            e.loadingState !== s.GuX.IDLE && (e.loadingState = s.GuX.RESOLVE);
                                    } catch (t) {
                                        A.error(t),
                                            t instanceof u.GX && (e.errorStatusCode = t.statusCode),
                                            e.loadingState !== s.GuX.IDLE &&
                                                ((e.loadingState = s.GuX.REJECT),
                                                e.otherArtistAlbums && (e.otherArtistAlbums.loadingState = s.GuX.REJECT),
                                                e.latestGenreAlbums && (e.latestGenreAlbums.loadingState = s.GuX.REJECT));
                                    }
                            }),
                            loadLastEpisodes() {
                                t.getTracks({ trackIds: e.lastEpisodesTrackIds });
                            },
                            getRelatedContent: (0, a.L3)(function* () {
                                let { albumResource: t, modelActionsLogger: i } = (0, a._$)(e);
                                if (e.relatedContent && !e.relatedContent.isLoading)
                                    try {
                                        var l, n;
                                        if (!(null == (l = e.meta) ? void 0 : l.id)) return;
                                        e.relatedContent.loadingState = s.GuX.PENDING;
                                        let i = yield t.getRelatedContent({ albumId: e.meta.id });
                                        (e.relatedContent.items = (0, a.wg)(null == (n = i.blocks) ? void 0 : n.map(C))), (e.relatedContent.loadingState = s.GuX.RESOLVE);
                                    } catch (t) {
                                        i.error(t), (e.relatedContent.loadingState = s.GuX.REJECT);
                                    }
                            }),
                            reset(t) {
                                var i, l, n, r;
                                let { albumCPA: o } = (0, a.Zn)(e);
                                o.reset(),
                                    t.resetUnloadedEntitiesData(),
                                    (e.id = null),
                                    (e.errorStatusCode = null),
                                    (e.deprecationTargetAlbumId = null),
                                    e.indexItems.clear(),
                                    (e.loadingState = s.GuX.IDLE),
                                    (e.description = ''),
                                    (e.allTracksUnfinished = !1),
                                    null == (i = e.latestGenreAlbums) || i.reset(),
                                    null == (l = e.otherArtistAlbums) || l.reset(),
                                    null == (n = e.relatedContent) || n.reset(),
                                    null == (r = e.donations) || r.reset(),
                                    (e.similarEntities.data = void 0),
                                    (e.similarEntities.loadingState = E.SQ.IDLE),
                                    e.destroyItems([e.meta, e.items, e.otherAlbumVersions, e.labels]);
                            },
                        };
                        return t;
                    });
            i(79119);
            var R = i(3956);
            i(72880), i(70717);
            var D = i(91283),
                P = i(77217);
            let x = a.gK
                    .compose(a.gK.model('PromoLandingConcerts', { items: a.gK.maybeNull(a.gK.array(P.aR)) }), r.pl, r.XT)
                    .views((e) => ({
                        get isResolved() {
                            return e.loadingState === s.GuX.RESOLVE;
                        },
                    }))
                    .actions((e) => ({
                        setItems(t) {
                            e.items = t;
                        },
                        reset() {
                            (e.loadingState = s.GuX.IDLE), e.destroyItems([e.items]);
                        },
                    })),
                O = a.gK.model('ExternalStreamingService', { name: a.gK.string, logoUrl: a.gK.string }),
                F = a.gK.model('ExternalStreamingLink', { service: O, url: a.gK.string }),
                U = a.gK.compose(a.gK.model('PromoLandingExternalStreamings', { items: a.gK.maybeNull(a.gK.array(F)) }), r.XT).actions((e) => ({
                    setItems(t) {
                        e.items = t;
                    },
                    reset() {
                        (e.loadingState = s.GuX.IDLE), e.items && e.items.clear();
                    },
                }));
            var w = i(63695);
            let V = a.gK.compose(a.gK.model('PromoLandingSocialLinks', { items: a.gK.maybeNull(a.gK.array(w.dP)) }), r.pl, r.XT).actions((e) => ({
                    setItems(t) {
                        e.items = t;
                    },
                    reset() {
                        (e.loadingState = s.GuX.IDLE), e.items && e.items.clear();
                    },
                })),
                _ = a.gK
                    .compose(a.gK.model('PromoCampaign', { isActive: a.gK.boolean, artistId: a.gK.maybeNull(a.gK.number) }), r.XT)
                    .views((e) => ({
                        get isPromoCampaignActive() {
                            return e.isResolved && e.isActive;
                        },
                        get isPromoCampaignInactive() {
                            return e.isRejected || (e.isResolved && !e.isActive);
                        },
                    }))
                    .actions((e) => ({
                        setArtistId(t) {
                            e.artistId = t;
                        },
                        getData: (0, a.L3)(function* (t) {
                            let { isActive: i, albumId: l, campaignId: n } = t,
                                { promoResource: r, modelActionsLogger: o } = (0, a._$)(e);
                            if (!e.isLoading)
                                try {
                                    if (((e.loadingState = s.GuX.PENDING), 'boolean' == typeof i))
                                        if (n) {
                                            let t = yield r.getPromoAlbumInfo({ albumId: l, campaignId: n });
                                            (e.isActive = t.active), (e.artistId = t.artistId || null);
                                        } else e.isActive = i;
                                    else {
                                        let t = yield r.getPromoAlbumInfo({ albumId: l, campaignId: n });
                                        (e.isActive = t.active), (e.artistId = t.artistId || null);
                                    }
                                    e.loadingState = s.GuX.RESOLVE;
                                } catch (t) {
                                    o.error(t), (e.loadingState = s.GuX.REJECT);
                                }
                        }),
                    })),
                J = N.props({
                    promoCampaign: _,
                    state: h.QQ,
                    donations: a.gK.optional(T, { loadingState: s.GuX.IDLE }),
                    concerts: a.gK.optional(x, { loadingState: s.GuX.IDLE }),
                    socialLinks: a.gK.optional(V, { loadingState: s.GuX.IDLE }),
                    externalStreamings: a.gK.optional(U, { loadingState: s.GuX.IDLE }),
                })
                    .views((e) => ({
                        get hasConcerts() {
                            var t, i;
                            let { experiments: l } = (0, a.Zn)(e);
                            if (l.checkExperiment(s.zal.disableAllConcerts, 'on')) return !1;
                            return !!((null == (t = e.concerts) ? void 0 : t.isResolved) && (null == (i = e.concerts.items) ? void 0 : i.length));
                        },
                        get hasSocialLinks() {
                            var l, n;
                            return !!((null == (l = e.socialLinks) ? void 0 : l.isResolved) && (null == (n = e.socialLinks.items) ? void 0 : n.length));
                        },
                        get hasExternalStreamings() {
                            var r, o;
                            return !!((null == (r = e.externalStreamings) ? void 0 : r.isResolved) && (null == (o = e.externalStreamings.items) ? void 0 : o.length));
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getArtistConcerts: (0, a.L3)(function* (t) {
                                let { artistId: i } = t,
                                    { artistsResource: l, modelActionsLogger: n } = (0, a._$)(e);
                                if (!e.concerts.isLoading)
                                    try {
                                        e.concerts.loadingState = s.GuX.PENDING;
                                        let t = yield l.getConcerts({ artistId: i });
                                        t.concerts && t.concerts.length > 0 ? (e.concerts.items = (0, a.wg)(t.concerts.map(P.oP))) : (e.concerts.items = null),
                                            (e.concerts.loadingState = s.GuX.RESOLVE);
                                    } catch (t) {
                                        n.error(t), (e.concerts.loadingState = s.GuX.REJECT);
                                    }
                            }),
                            getArtistDonations: (0, a.L3)(function* (t) {
                                let { artistId: i } = t,
                                    { experiments: l } = (0, a.Zn)(e),
                                    { artistsResource: n, modelActionsLogger: r } = (0, a._$)(e);
                                if (l.checkExperiment(s.zal.WebNextAlbumDonationButton, 'on') && !e.donations.isLoading)
                                    try {
                                        e.donations.loadingState = s.GuX.PENDING;
                                        let { donations: t } = yield n.getDonation({ artistId: i });
                                        t && t.length > 0
                                            ? (e.donations.items = (0, a.wg)(
                                                  t.map((e) => {
                                                      var t;
                                                      let { data: i } = e;
                                                      return (0, A.GT)({ url: i.tipUrl, goal: null == (t = i.goal) ? void 0 : t.title, artist: i.artist });
                                                  }),
                                              ))
                                            : (e.donations.items = null),
                                            (e.donations.loadingState = s.GuX.RESOLVE);
                                    } catch (t) {
                                        r.error(t), (e.donations.loadingState = s.GuX.REJECT);
                                    }
                            }),
                            getArtistSocialLinks: (0, a.L3)(function* (t) {
                                let { artistId: i } = t,
                                    { artistsResource: l, modelActionsLogger: n } = (0, a._$)(e);
                                if (!e.socialLinks.isLoading)
                                    try {
                                        var r;
                                        e.socialLinks.loadingState = s.GuX.PENDING;
                                        let t = yield l.getArtistLinks({ artistId: i });
                                        (e.socialLinks.items = (null == (r = t.links) ? void 0 : r.length) ? (0, a.wg)(t.links) : null),
                                            (e.socialLinks.loadingState = s.GuX.RESOLVE);
                                    } catch (t) {
                                        n.error(t), (e.socialLinks.loadingState = s.GuX.REJECT);
                                    }
                            }),
                            getAlbumExternalStreamings: (0, a.L3)(function* (t) {
                                let { albumId: i } = t,
                                    { albumResource: l, modelActionsLogger: n } = (0, a._$)(e);
                                if (!e.externalStreamings.isLoading)
                                    try {
                                        var r;
                                        e.externalStreamings.loadingState = s.GuX.PENDING;
                                        let t = yield l.getExternalStreamingLinks({ albumId: i });
                                        (e.externalStreamings.items = (null == (r = t.links) ? void 0 : r.length) ? (0, a.wg)(t.links) : null),
                                            (e.externalStreamings.loadingState = s.GuX.RESOLVE);
                                    } catch (t) {
                                        n.error(t), (e.externalStreamings.loadingState = s.GuX.REJECT);
                                    }
                            }),
                            getDataByCampaign: (0, a.L3)(function* (i) {
                                let { albumId: l, preloadedAlbum: n, preloadedCpa: r, isActive: o, campaignId: d } = i;
                                if ((yield e.promoCampaign.getData({ albumId: l, isActive: o, campaignId: d }), e.promoCampaign.isPromoCampaignActive)) {
                                    var u, m, g, c, b, E, v, A, h, p, S, L, G, I, y, C, f, T, X;
                                    let { albumCPA: i, experiments: o } = (0, a.Zn)(e),
                                        d = [
                                            e.getData({
                                                albumId: l,
                                                resumeStream: !1,
                                                preloadedAlbum: n,
                                                withLatestGenreAlbumsRequest: !1,
                                                withOtherArtistAlbumsRequest: !1,
                                                sonataState: e.state,
                                            }),
                                            i.getCpa({ albumId: l, preloadedCpa: r }),
                                        ],
                                        K = o.getExperiment(s.zal.WebNextPromoLandingLayout),
                                        k = null == K || null == (u = K.value) ? void 0 : u.params;
                                    if (
                                        (null == k || null == (g = k.mobile) || null == (m = g.content) ? void 0 : m.includes(D.Cq.ExternalStreamings)) ||
                                        (null == k || null == (b = k.desktop) || null == (c = b.content) ? void 0 : c.includes(D.Cq.ExternalStreamings))
                                    ) {
                                        let e = t.getAlbumExternalStreamings({ albumId: l });
                                        d.push(e);
                                    }
                                    if (e.promoCampaign.artistId) {
                                        let i =
                                                (null == k || null == (v = k.mobile) || null == (E = v.header) ? void 0 : E.includes(D._7.Donation)) ||
                                                (null == k || null == (h = k.mobile) || null == (A = h.content) ? void 0 : A.includes(D.Cq.Donation)) ||
                                                (null == k || null == (S = k.desktop) || null == (p = S.header) ? void 0 : p.includes(D._7.Donation)),
                                            l =
                                                (null == k || null == (G = k.mobile) || null == (L = G.content) ? void 0 : L.includes(D.Cq.Concerts)) ||
                                                (null == k || null == (y = k.desktop) || null == (I = y.content) ? void 0 : I.includes(D.Cq.Concerts)),
                                            n =
                                                (null == k || null == (f = k.mobile) || null == (C = f.content) ? void 0 : C.includes(D.Cq.SocialLinks)) ||
                                                (null == k || null == (X = k.desktop) || null == (T = X.content) ? void 0 : T.includes(D.Cq.SocialLinks));
                                        if (i) {
                                            let i = t.getArtistDonations({ artistId: e.promoCampaign.artistId });
                                            d.push(i);
                                        }
                                        if (l) {
                                            let i = t.getArtistConcerts({ artistId: e.promoCampaign.artistId });
                                            d.push(i);
                                        }
                                        if (n) {
                                            let i = t.getArtistSocialLinks({ artistId: e.promoCampaign.artistId });
                                            d.push(i);
                                        }
                                    }
                                    yield Promise.allSettled(d);
                                }
                            }),
                            sendLikeFeedback: (0, a.L3)(function* (t) {
                                let { promoResource: i, modelActionsLogger: l } = (0, a._$)(e);
                                try {
                                    yield i.sendFeedback(t);
                                } catch (e) {
                                    l.error(e);
                                }
                            }),
                        };
                        return t;
                    })
                    .named('PromoLandingAlbumPage');
        },
    },
]);
