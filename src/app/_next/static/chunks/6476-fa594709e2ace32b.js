'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6476],
    {
        16476: (t, e, i) => {
            i.d(e, { SM: () => D.PlaylistPage, Pn: () => f, Cm: () => K.PlaylistShimmersPage, rb: () => l.useSetPlaylistFilters }), i(84458);
            var l = i(14782),
                a = i(93064),
                r = i(15209),
                n = i(83252),
                s = (function (t) {
                    return (
                        (t.MAJOR = 'Major'),
                        (t.NAME = 'Название'),
                        (t.ARTISCS = 'Исполнители'),
                        (t.LINK = 'Ссылка'),
                        (t.ALBUM_ID = 'albumId'),
                        (t.TRACK_ID = 'trackId'),
                        t
                    );
                })({}),
                d = (function (t) {
                    return (t.MAJOR = 'major'), (t.NAME = 'name'), (t.ARTISCS = 'artists'), (t.LINK = 'link'), (t.ALBUM_ID = 'albumId'), (t.TRACK_ID = 'trackId'), t;
                })({});
            let u = a.gK
                .model('EditorFeature', {
                    shouldShowMajor: a.gK.boolean,
                    shouldShowGenre: a.gK.boolean,
                    shouldShowDuplicate: a.gK.boolean,
                    colorMajorMap: a.gK.map(a.gK.string),
                    duplicate: a.gK.map(a.gK.number),
                })
                .views((t) => {
                    let e = {
                        getNumberGroupTrackDuplicated(e) {
                            let { experiments: i } = (0, a.Zn)(t);
                            if (e && i.checkExperiment(n.zal.WebEditorsFeatures, 'on')) return t.duplicate.get(String(e.id));
                        },
                        shouldHighlightDublicatedTrack: (i) => !!(t.shouldShowDuplicate && e.getNumberGroupTrackDuplicated(i)),
                        get sheetDataPlaylist() {
                            var i, l;
                            let { location: e, playlist: n } = (0, a.Zn)(t),
                                u = 'https://'.concat(e.host, '.').concat(e.tld),
                                o = {
                                    sheet: 'Playlist',
                                    columns: [
                                        { label: s.MAJOR, value: d.MAJOR },
                                        { label: s.NAME, value: d.NAME },
                                        { label: s.ARTISCS, value: d.ARTISCS },
                                        { label: s.LINK, value: d.LINK },
                                        { label: s.ALBUM_ID, value: d.ALBUM_ID },
                                        { label: s.TRACK_ID, value: d.TRACK_ID },
                                    ],
                                    content: n.items
                                        .filter((t) => t.data)
                                        .map((t) => {
                                            var e, i, l, a, n, s, d, o, g, m, c, v, y;
                                            let { href: S } = (0, r.getLinkAttributesBase)(null != (o = null == (e = t.data) ? void 0 : e.url) ? o : '', {
                                                    options: { host: u },
                                                }),
                                                h = (null == (i = t.data) ? void 0 : i.url) ? S : '';
                                            return {
                                                major: null != (g = null == (a = t.data) || null == (l = a.major) ? void 0 : l.name) ? g : '',
                                                name: null != (m = null == (n = t.data) ? void 0 : n.title) ? m : '',
                                                artists: null != (c = null == (s = t.data) ? void 0 : s.artists.map((t) => t.name).join(', ')) ? c : '',
                                                link: h,
                                                albumId: null != (v = t.albumId) ? v : '',
                                                trackId: null != (y = null == (d = t.data) ? void 0 : d.id) ? y : '',
                                            };
                                        }),
                                };
                            return {
                                data: o,
                                settings: {
                                    fileName:
                                        (null == (i = n.meta) ? void 0 : i.uid) && (null == (l = n.meta) ? void 0 : l.kind)
                                            ? '%'.concat(n.meta.uid, '%_%').concat(n.meta.kind, '%_to_text')
                                            : 'to_text',
                                },
                            };
                        },
                    };
                    return e;
                })
                .actions((t) => ({
                    exportToExcel: (0, a.L3)(function* () {
                        let { modelActionsLogger: e } = (0, a._$)(t);
                        try {
                            let e = yield Promise.all([i.e(714), i.e(8473), i.e(9484)]).then(i.t.bind(i, 52224, 23)),
                                { data: l, settings: a } = t.sheetDataPlaylist;
                            if (0 === l.content.length) return n.FlZ.ERROR;
                            return (
                                yield new Promise((t) => {
                                    e.default([l], a, () => t());
                                }),
                                n.FlZ.OK
                            );
                        } catch (t) {
                            return e.error(t), n.FlZ.ERROR;
                        }
                    }),
                    getAllPlaylistItems: (0, a.L3)(function* (e) {
                        let { batchSize: i } = e,
                            { playlist: l } = (0, a.Zn)(t),
                            r = l.items.length - 1;
                        for (let t = 0; t < r; t += i) yield l.getTracksByRange({ startIndex: t, endIndex: Math.min(t + i, r) });
                    }),
                    getColorForMajor(e) {
                        let i = t.colorMajorMap.get(e);
                        if (i) return i;
                        let l = (0, n.KkH)(e),
                            a = 'hsl('.concat(l, ', 50%, 50%)');
                        return t.colorMajorMap.set(e, a), a;
                    },
                    getDuplicates(e) {
                        let i = new Map();
                        e.forEach((t) => {
                            let e = i.get(t.id) || 0;
                            i.set(t.id, e + 1);
                        });
                        let l = 1;
                        i.forEach((e, i) => {
                            e > 1 && (t.duplicate.set(String(i), l), l++);
                        });
                    },
                    toggleShouldShowMajor() {
                        t.shouldShowMajor = !t.shouldShowMajor;
                    },
                    toggleShouldShowGenre() {
                        t.shouldShowGenre = !t.shouldShowGenre;
                    },
                    toggleShouldShowDuplicate() {
                        t.shouldShowDuplicate = !t.shouldShowDuplicate;
                    },
                    reset() {
                        (t.shouldShowDuplicate = !1),
                            (t.shouldShowGenre = !1),
                            (t.shouldShowMajor = !1),
                            (t.colorMajorMap = (0, a.wg)({})),
                            (t.duplicate = (0, a.wg)({}));
                    },
                }));
            var o = i(21365);
            let g = a.gK.model('PlaylistItem', {
                    id: a.gK.union(a.gK.string, a.gK.number),
                    albumId: a.gK.maybeNull(a.gK.union(a.gK.string, a.gK.number)),
                    key: a.gK.string,
                    data: a.gK.maybeNull(o.vj),
                    loadingState: a.gK.enumeration(Object.values(n.GuX)),
                }),
                m = a.gK.model('PlaylistFiltersItem', { id: a.gK.string, name: a.gK.string, tracks: a.gK.array(g) });
            var c = i(63930),
                v = i(14287),
                y = i(14032),
                S = i(6664),
                h = i(83909),
                E = i(52733),
                I = i(26433),
                T = i(97719);
            let k = (t) => t.map((t) => (0, T.li)(t.id, t.albumId || void 0)),
                p = (t) => {
                    var e, i;
                    let l = (null == (e = t.tracks) ? void 0 : e.length)
                        ? null == (i = t.tracks)
                            ? void 0
                            : i.map((t, e) =>
                                  ((t, e) => {
                                      let [i, l] = t.split(':');
                                      return (0, a.wg)({ id: i || '', albumId: l || '', key: ''.concat(i, '-').concat(e), data: null, loadingState: n.GuX.IDLE });
                                  })(t, e),
                              )
                        : [];
                    return { id: t.id, name: t.name, tracks: (0, a.wg)(l) };
                },
                b = a.gK
                    .compose(
                        a.gK.model('PlaylistPageFilters', {
                            items: a.gK.maybeNull(a.gK.array(m)),
                            activeFilter: a.gK.maybe(a.gK.string),
                            activeFilterName: a.gK.maybeNull(a.gK.string),
                        }),
                        I.XT,
                        I.pl,
                    )
                    .views((t) => {
                        let e = {
                            get isShimmerVisible() {
                                return t.isRejected || t.isLoading;
                            },
                            get activeFilterIndex() {
                                var i;
                                let e = null == (i = t.items) ? void 0 : i.findIndex((e) => e.id === t.activeFilter);
                                return e && e > -1 ? e : 0;
                            },
                            get analyticsParamsActiveFilterIndex() {
                                return e.activeFilterIndex + 1;
                            },
                        };
                        return e;
                    })
                    .actions((t) => {
                        let e = {
                            getFilters: (0, a.L3)(function* () {
                                var i, l;
                                let { filtersResource: r, modelActionsLogger: s } = (0, a._$)(t),
                                    { sonataState: d, playlist: u } = (0, a.Zn)(t);
                                if (t.isLoading || !(null == (i = u.items) ? void 0 : i.length)) return;
                                let o = u.items.map((t) => String((0, y.V)(t.id, t.albumId))) || [];
                                try {
                                    t.loadingState = n.GuX.PENDING;
                                    let i = yield r.getTracksFilters({ trackIds: o });
                                    (t.items = (0, a.wg)(
                                        ((t) => {
                                            let e = t.filters.map(p);
                                            if (e.length < 3) return [];
                                            let i = e.find((t) => t.id === E.Q1.ALL);
                                            if (!i) return [];
                                            let l = e.filter((t) => t.tracks.length >= 8);
                                            return l.length < 2 ? [] : [i].concat(l.slice(0, 7));
                                        })(i),
                                    )),
                                        e.setActiveFilter(d.playlistFilter),
                                        e.getFilterName(d.playlistFilter || E.Q1.ALL);
                                    let s = null == (l = t.items) ? void 0 : l.find((e) => e.id === t.activeFilter);
                                    s && (u.setItems(s.tracks), d.setUnloadedEntitiesData(k(u.items))), (t.loadingState = n.GuX.RESOLVE);
                                } catch (e) {
                                    s.error(e), (t.loadingState = n.GuX.REJECT);
                                }
                            }),
                            getFilterName: (0, a.L3)(function* (e) {
                                let { filtersResource: i, modelActionsLogger: l } = (0, a._$)(t);
                                try {
                                    t.activeFilterName = (yield i.getFilterName({ filterId: e })).name;
                                } catch (t) {
                                    l.error(t);
                                }
                            }),
                            handleFilterClick(i) {
                                if (!(0, a._n)(t)) return;
                                let { sonataState: l, playlist: r } = (0, a.Zn)(t);
                                e.setActiveFilter(i.id),
                                    e.getFilterName(i.id),
                                    r.setItems(t.activeFilter ? i.tracks : r.initialItems),
                                    l.setUnloadedEntitiesData(k(r.items));
                            },
                            setActiveFilter(e) {
                                e !== E.Q1.ALL ? (t.activeFilter = e) : (t.activeFilter = void 0);
                            },
                            reset() {
                                t.destroyItems([t.items]), (t.loadingState = n.GuX.IDLE), (t.activeFilter = void 0), (t.activeFilterName = null);
                            },
                        };
                        return e;
                    }),
                N = a.gK
                    .compose(
                        a.gK.model('PlaylistPageSearch', {
                            errorStatusCode: a.gK.maybeNull(a.gK.number),
                            text: a.gK.string,
                            playlistTrackIds: a.gK.maybeNull(a.gK.array(a.gK.string)),
                            suggestedTrackIds: a.gK.maybeNull(a.gK.array(a.gK.string)),
                            additionTrackInProggress: a.gK.maybeNull(a.gK.string),
                            tracks: a.gK.maybeNull(a.gK.array(o.vj)),
                            isFocused: a.gK.optional(a.gK.boolean, !1),
                        }),
                        I.XT,
                    )
                    .views((t) => ({
                        get isLoading() {
                            return t.isNeededToLoad || t.loadingState === n.GuX.PENDING;
                        },
                        get hasText() {
                            return !!t.text.length;
                        },
                        get suggestedTracks() {
                            var e;
                            return null == (e = t.suggestedTrackIds)
                                ? void 0
                                : e.map((e) => {
                                      var i;
                                      return (null == (i = t.tracks) ? void 0 : i.find((t) => t.id === e)) || null;
                                  });
                        },
                        get playlistTracks() {
                            let e = [...(t.playlistTrackIds || [])];
                            return (
                                t.additionTrackInProggress && e.unshift(t.additionTrackInProggress),
                                null == e
                                    ? void 0
                                    : e.map((e) => {
                                          var i;
                                          return (
                                              (null == (i = t.tracks)
                                                  ? void 0
                                                  : i.find((t) => {
                                                        var i;
                                                        return (
                                                            ((null == (i = t.mainAlbum) ? void 0 : i.id) && e.includes(':')
                                                                ? ''.concat(t.id, ':').concat(t.mainAlbum.id)
                                                                : t.id) === e
                                                        );
                                                    })) || null
                                          );
                                      })
                            );
                        },
                    }))
                    .actions((t) => {
                        let e = {
                            getTracksMeta: (0, a.L3)(function* () {
                                let { tracksResource: e, modelActionsLogger: i } = (0, a._$)(t),
                                    l = [...(t.playlistTrackIds || [])].concat(t.suggestedTrackIds || []);
                                try {
                                    let i = yield e.getTracksMeta({ trackIds: l, removeDuplicates: !0, withProgress: !0 });
                                    (t.tracks = (0, a.wg)(null == i ? void 0 : i.map((t) => (0, o.vU)(t)))),
                                        t.loadingState !== n.GuX.IDLE && (t.loadingState = n.GuX.RESOLVE);
                                } catch (t) {
                                    i.error(t);
                                }
                                return null;
                            }),
                            getTracks: (0, a.L3)(function* (i) {
                                let { uid: l, kind: r } = i,
                                    { searchPlaylistResource: s, modelActionsLogger: d } = (0, a._$)(t);
                                if (t.loadingState === n.GuX.PENDING || !t.hasText || !(0, a._n)(t)) return;
                                let { playlist: u } = (0, a.Zn)(t);
                                try {
                                    var o, g;
                                    let i;
                                    t.loadingState = n.GuX.PENDING;
                                    let { playlistTrackIds: d = [], suggestedTrackIds: m = [] } = yield s.getTrackIds({ uid: l, kind: r, part: t.text }),
                                        c =
                                            ((i = u.items),
                                            d.map((t) => {
                                                let e = i.find((e) => String(e.id) === t);
                                                return (null == e ? void 0 : e.albumId) ? ''.concat(t, ':').concat(e.albumId) : t;
                                            }));
                                    (t.playlistTrackIds = (0, a.wg)(c)),
                                        (t.suggestedTrackIds = (0, a.wg)(m)),
                                        ((null == (o = t.playlistTrackIds) ? void 0 : o.length) || 0) + ((null == (g = t.suggestedTrackIds) ? void 0 : g.length) || 0) > 0
                                            ? e.getTracksMeta()
                                            : (t.loadingState = n.GuX.RESOLVE);
                                } catch (e) {
                                    d.error(e),
                                        e instanceof v.GX &&
                                            (e.statusCode === v.X1.NOT_FOUND || e.statusCode === v.X1.BAD_REQUEST) &&
                                            (t.errorStatusCode = v.X1.NOT_FOUND),
                                        t.loadingState !== n.GuX.IDLE && (t.loadingState = n.GuX.REJECT);
                                }
                            }),
                            setText(e) {
                                t.text = e;
                            },
                            setIdleState() {
                                t.loadingState = n.GuX.IDLE;
                            },
                            setAdditionTrackAnimation(e) {
                                t.additionTrackInProggress = e;
                            },
                            setFocus() {
                                t.isFocused = !0;
                            },
                            removeFocus() {
                                t.isFocused = !1;
                            },
                            replaceAdditionTrackInProggress() {
                                if (t.additionTrackInProggress) {
                                    var e, i;
                                    null == (e = t.playlistTrackIds) || e.unshift(t.additionTrackInProggress),
                                        (t.suggestedTrackIds = (0, a.wg)(null == (i = t.suggestedTrackIds) ? void 0 : i.filter((e) => e !== t.additionTrackInProggress))),
                                        (t.additionTrackInProggress = null);
                                }
                            },
                            resetAdditionTrackAnimation() {
                                t.additionTrackInProggress = null;
                            },
                            reset() {
                                (t.playlistTrackIds = null),
                                    (t.suggestedTrackIds = null),
                                    (t.additionTrackInProggress = null),
                                    (t.tracks = null),
                                    (t.loadingState = n.GuX.IDLE),
                                    (t.isFocused = !1);
                            },
                        };
                        return e;
                    }),
                f = a.gK
                    .compose(
                        a.gK.model('PlaylistPage', {
                            uuid: a.gK.maybeNull(a.gK.string),
                            meta: a.gK.maybeNull(h.BL),
                            items: a.gK.array(g),
                            errorStatusCode: a.gK.maybeNull(a.gK.number),
                            similarPlaylists: a.gK.array(h.IP),
                            initialItems: a.gK.array(g),
                            shouldShowTrailerOnboarding: a.gK.maybeNull(a.gK.boolean),
                            editorFeature: u,
                            search: N,
                            filters: b,
                            similarEntities: S.F6,
                        }),
                        I.pl,
                        I.XT,
                    )
                    .views((t) => {
                        let e = {
                            getUrl(e) {
                                if (!t.uuid) return '';
                                let { href: i } = (0, n.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: t.uuid }, query: e });
                                return i;
                            },
                            get isLoading() {
                                return t.isNeededToLoad || t.loadingState === n.GuX.PENDING;
                            },
                            get isDisabled() {
                                var i;
                                return t.isResolved && (0 === t.items.length || !(null == (i = t.meta) ? void 0 : i.isAvailable));
                            },
                            get isNotFound() {
                                return t.isRejected && t.errorStatusCode === v.X1.NOT_FOUND;
                            },
                            get hasSimilarPlaylists() {
                                return e.isLoading || t.similarPlaylists.length > 0;
                            },
                            get isEmptyPlaylist() {
                                return t.isResolved && 0 === t.items.length;
                            },
                            get isSimilarEntitiesEnabled() {
                                let { experiments: e } = (0, a.Zn)(t);
                                return e.checkExperiment(n.zal.WebNextWaveAgentExperiment, 'on');
                            },
                            get hasSimilarEntities() {
                                var l;
                                return !!(
                                    e.isSimilarEntitiesEnabled &&
                                    t.similarEntities.isLoaded &&
                                    (null == (l = t.similarEntities.data) ? void 0 : l.items) &&
                                    t.similarEntities.data.items.length > 0
                                );
                            },
                            get contextMeta() {
                                var r, s, d, u, o, g, m, c, S, h;
                                return {
                                    isAvailable: null == (r = t.meta) ? void 0 : r.isAvailable,
                                    id: t.meta.id,
                                    uid: null == (s = t.meta) ? void 0 : s.uid,
                                    uuid: t.meta.uuid,
                                    kind: null == (d = t.meta) ? void 0 : d.kind,
                                    title: null == (u = t.meta) ? void 0 : u.title,
                                    coverUri: null == (o = t.meta) ? void 0 : o.coverUri,
                                    likesCount: null == (g = t.meta) ? void 0 : g.likesCount,
                                    averageColor: null == (m = t.meta) ? void 0 : m.averageColor,
                                    owner: null == (c = t.meta) ? void 0 : c.owner,
                                    description: null == (S = t.meta) ? void 0 : S.description,
                                    modified: null == (h = t.meta) ? void 0 : h.modified,
                                };
                            },
                            get isDragAndDropEnabled() {
                                var I;
                                if (!(0, a._n)(t)) return !1;
                                let { ugcUploadCenter: e } = (0, a.Zn)(t);
                                return !!(
                                    (null == (I = t.meta) ? void 0 : I.canUserChange) &&
                                    (t.items.length > 1 || e.getUploadingTracksByPlaylistKind(t.meta.kind).length > 0)
                                );
                            },
                            get itemsKeys() {
                                return t.items.map((t) => t.key);
                            },
                            get isFavouritePlaylist() {
                                var T;
                                return (null == (T = t.meta) ? void 0 : T.kind) === E.ji.LIKE;
                            },
                            get enableVariousAutoFlow() {
                                return !!t.filters.activeFilter;
                            },
                            get trackIds() {
                                return t.initialItems.map((t) => String((0, y.V)(t.id, t.albumId)));
                            },
                            get isRewind2024Playlist() {
                                var k;
                                return (null == (k = t.meta) ? void 0 : k.generatedPlaylistType) === 'rewind2024';
                            },
                            get areAllTracksUploaded() {
                                return t.items.every((t) => t.loadingState === n.GuX.RESOLVE);
                            },
                            get shouldShowEmptyBlock() {
                                var p, b;
                                if (!(0, a._n)(t)) return !1;
                                let { ugcUploadCenter: i } = (0, a.Zn)(t),
                                    l = !!(null == (p = t.meta) ? void 0 : p.isOwnPlaylist),
                                    r = !!((null == (b = t.meta) ? void 0 : b.kind) && i.getUploadingTracksByPlaylistKind(t.meta.kind).length),
                                    n = !!t.search.hasText;
                                return e.isEmptyPlaylist && l && !r && !n;
                            },
                            get virtualListItemsCount() {
                                var N, f;
                                if (t.search.hasText) return 0;
                                return null != (f = null == (N = t.items) ? void 0 : N.length) ? f : 0;
                            },
                            get isFiltersAvailable() {
                                var D;
                                return !!(e.isFavouritePlaylist && (null == (D = t.meta) ? void 0 : D.isOwnPlaylist));
                            },
                        };
                        return e;
                    })
                    .actions((t) => {
                        let e = {
                            getTracksByRange: (0, a.L3)(function* (e) {
                                var i, l;
                                let { startIndex: r, endIndex: s } = e,
                                    { tracksResource: d, modelActionsLogger: u } = (0, a._$)(t);
                                if (!(null == (i = t.meta) ? void 0 : i.uid) || !(null == (l = t.meta) ? void 0 : l.kind)) return null;
                                (r = Math.max(0, r)), (s = Math.min(s, t.items.length));
                                let g = ((t, e) => {
                                    let { startIndex: i, endIndex: l } = e,
                                        a = [];
                                    for (let e = i; e <= l; e++) {
                                        var r, s;
                                        ((null == (r = t[e]) ? void 0 : r.loadingState) === n.GuX.IDLE ||
                                            (null == (s = t[e]) ? void 0 : s.loadingState) === n.GuX.REJECT) &&
                                            a.push(e);
                                    }
                                    return a;
                                })(t.items, { startIndex: r, endIndex: s });
                                try {
                                    let e,
                                        i =
                                            ((e = t.items),
                                            g.map((t) => {
                                                let i = e[t];
                                                return (null == i ? void 0 : i.albumId) ? ''.concat(i.id, ':').concat(i.albumId) : String(null == i ? void 0 : i.id);
                                            }));
                                    if (!i.length) return null;
                                    g.forEach((e) => {
                                        let i = t.items[e];
                                        i && (i.loadingState = n.GuX.PENDING);
                                    });
                                    let l = yield d.getTracksMeta({ trackIds: i, withProgress: !0 });
                                    g.forEach((e, i) => {
                                        let a = null == l ? void 0 : l[i];
                                        if (t.items[e] && a) {
                                            var r, s;
                                            t.items[e] = {
                                                id: a.id,
                                                albumId: (null == (s = a.albums) || null == (r = s[0]) ? void 0 : r.id) || null,
                                                key: ''.concat(a.id, '-').concat(e),
                                                data: (0, o.vU)(a),
                                                loadingState: n.GuX.RESOLVE,
                                            };
                                        }
                                    });
                                } catch (e) {
                                    u.error(e),
                                        g.forEach((e) => {
                                            let i = t.items[e];
                                            i && (i.loadingState = n.GuX.REJECT);
                                        });
                                }
                                return null;
                            }),
                            updateData: (0, a.L3)(function* (i) {
                                var l, r;
                                if ((null == i ? void 0 : i.error) === 'not-found') return (t.errorStatusCode = v.X1.NOT_FOUND), (t.loadingState = n.GuX.REJECT), null;
                                let { sonataState: s, playlist: d, experiments: u, user: o } = (0, a.Zn)(t);
                                return (
                                    (t.similarPlaylists = (0, a.wg)(null == (l = i.similarPlaylists) ? void 0 : l.map(h.Ew))),
                                    (t.meta = (0, h.ZC)(i)),
                                    (null == (r = t.meta) ? void 0 : r.isOwnFavouritePlaylist) && (t.meta.visibility = o.settings.userMusicVisibility),
                                    (t.items = (0, a.wg)(
                                        i.tracks.map((t, e) => ({
                                            id: String(t.id),
                                            albumId: t.albumId || null,
                                            key: ''.concat(t.id, '-').concat(e),
                                            loadingState: n.GuX.IDLE,
                                        })),
                                    )),
                                    (t.initialItems = (0, c.HO)(t.items)),
                                    s.setUnloadedEntitiesData(k(t.items)),
                                    (null == u ? void 0 : u.checkExperiment(n.zal.WebEditorsFeatures, 'on')) && d.editorFeature.getDuplicates(t.items),
                                    yield e.getTracksByRange({ startIndex: 0, endIndex: 10 })
                                );
                            }),
                            getPlaylistByUserIdAndKind: (0, a.L3)(function* (i) {
                                let { userId: l, playlistKind: r, resumeStream: s = !1, trackMetaType: d, preloadedPlaylist: u } = i,
                                    { usersResource: o, modelActionsLogger: g } = (0, a._$)(t);
                                if (t.loadingState !== n.GuX.PENDING)
                                    try {
                                        t.loadingState = n.GuX.PENDING;
                                        let i = u;
                                        if (
                                            (i || (i = yield o.getPlaylistWithTracksIds({ userId: l, playlistKind: r, resumeStream: s, trackMetaType: d })),
                                            (t.uuid = null == i ? void 0 : i.playlistUuid),
                                            'string' != typeof i.playlistUuid)
                                        ) {
                                            (t.errorStatusCode = v.X1.NOT_FOUND), (t.loadingState = n.GuX.REJECT);
                                            return;
                                        }
                                        yield e.updateData(i), (t.loadingState = n.GuX.RESOLVE);
                                    } catch (e) {
                                        g.error(e),
                                            e instanceof v.GX &&
                                                (e.statusCode === v.X1.NOT_FOUND || e.statusCode === v.X1.BAD_REQUEST) &&
                                                (t.errorStatusCode = v.X1.NOT_FOUND),
                                            (t.loadingState = n.GuX.REJECT);
                                    }
                            }),
                            getPlaylistByUuid: (0, a.L3)(function* (i) {
                                let { playlistUuid: l, richTracks: r = !1, resumeStream: s = !1, preloadedPlaylist: d } = i,
                                    { playlistResource: u, modelActionsLogger: o } = (0, a._$)(t);
                                if (((t.uuid = l), t.loadingState !== n.GuX.PENDING))
                                    try {
                                        t.loadingState = n.GuX.PENDING;
                                        let i = d;
                                        i || (i = yield u.getPlaylist({ playlistUuid: l, resumeStream: s, richTracks: r })),
                                            yield e.updateData(i),
                                            t.loadingState !== n.GuX.IDLE && (t.loadingState = n.GuX.RESOLVE);
                                    } catch (e) {
                                        o.error(e),
                                            e instanceof v.GX &&
                                                (e.statusCode === v.X1.NOT_FOUND || e.statusCode === v.X1.BAD_REQUEST) &&
                                                (t.errorStatusCode = v.X1.NOT_FOUND),
                                            t.loadingState !== n.GuX.IDLE && (t.loadingState = n.GuX.REJECT);
                                    }
                            }),
                            getSimilarEntities: (0, a.L3)(function* (e) {
                                let { playlistResource: i, modelActionsLogger: l } = (0, a._$)(t);
                                if (!t.similarEntities.isLoading)
                                    try {
                                        t.similarEntities.loadingState = S.SQ.PENDING;
                                        let l = yield i.getSimilarEntities(e);
                                        (t.similarEntities.data = (0, S.Ds)(l)), (t.similarEntities.loadingState = S.SQ.RESOLVE);
                                    } catch (e) {
                                        l.error(e), (t.similarEntities.loadingState = S.SQ.REJECT);
                                    }
                            }),
                            updatePlaylistTrackByUuid: (0, a.L3)(function* (i) {
                                let { playlistUuid: l, richTracks: r = !1, resumeStream: s = !1 } = i,
                                    { playlistResource: d, modelActionsLogger: u } = (0, a._$)(t);
                                t.uuid = l;
                                try {
                                    let i = yield d.getPlaylist({ playlistUuid: l, resumeStream: s, richTracks: r }),
                                        u = [];
                                    if (
                                        ((t.items = (0, a.wg)(
                                            i.tracks.map((e, i) => {
                                                var l, a;
                                                let r = String(e.id),
                                                    s = e.albumId || null;
                                                return r === (null == (l = t.items[i]) ? void 0 : l.id) && s === (null == (a = t.items[i]) ? void 0 : a.albumId)
                                                    ? t.items[i]
                                                    : (u.push(i),
                                                      { id: String(e.id), albumId: e.albumId || null, key: ''.concat(e.id, '-').concat(i), loadingState: n.GuX.IDLE });
                                            }),
                                        )),
                                        t.meta && ((t.meta.modified = i.modified), (t.meta.revision = i.revision), u.length))
                                    ) {
                                        let t = Math.min(...u),
                                            i = Math.max(...u);
                                        e.getTracksByRange({ startIndex: t, endIndex: i });
                                    }
                                    if ((t.loadingState !== n.GuX.IDLE && (t.loadingState = n.GuX.RESOLVE), (0, a._n)(t))) {
                                        let { sonataState: e } = (0, a.Zn)(t);
                                        e.setUnloadedEntitiesData(k(t.items));
                                    }
                                } catch (e) {
                                    u.error(e),
                                        e instanceof v.GX &&
                                            (e.statusCode === v.X1.NOT_FOUND || e.statusCode === v.X1.BAD_REQUEST) &&
                                            (t.errorStatusCode = v.X1.NOT_FOUND),
                                        t.loadingState !== n.GuX.IDLE && (t.loadingState = n.GuX.REJECT);
                                }
                            }),
                            moveTrack(e, i) {
                                let l = (0, c.HO)(t.items[e]);
                                if (
                                    !(e < 0) &&
                                    !(i < 0) &&
                                    !(e >= t.items.length) &&
                                    !(i >= t.items.length) &&
                                    l &&
                                    (t.items.splice(e, 1), t.items.splice(i, 0, l), (0, a._n)(t))
                                ) {
                                    let { sonataState: e } = (0, a.Zn)(t);
                                    e.setUnloadedEntitiesData(k(t.items));
                                }
                            },
                            removeTracksFromItems(e, i) {
                                if ((t.items.splice(e, i), (0, a._n)(t))) {
                                    let { sonataState: e } = (0, a.Zn)(t);
                                    e.setUnloadedEntitiesData(k(t.items));
                                }
                            },
                            setItems(e) {
                                t.items = (0, a.wg)((0, c.HO)(e));
                            },
                            setShouldShowTrailerOnboarding(e) {
                                t.shouldShowTrailerOnboarding = e;
                            },
                            reset() {
                                let { sonataState: e } = (0, a.Zn)(t);
                                e.resetUnloadedEntitiesData(),
                                    (t.uuid = null),
                                    (t.loadingState = n.GuX.IDLE),
                                    (t.errorStatusCode = null),
                                    (t.shouldShowTrailerOnboarding = null),
                                    (t.similarEntities.data = void 0),
                                    (t.similarEntities.loadingState = S.SQ.IDLE),
                                    t.search.setText(''),
                                    t.search.reset(),
                                    t.filters.reset(),
                                    t.destroyItems([t.meta, t.items, t.initialItems, t.similarPlaylists]);
                            },
                            refresh() {
                                var i, l;
                                (null == (i = t.meta) ? void 0 : i.uuid) &&
                                    e.getPlaylistByUuid({ playlistUuid: null == (l = t.meta) ? void 0 : l.uuid, resumeStream: !1 });
                            },
                            refreshTracks() {
                                var i, l;
                                (null == (i = t.meta) ? void 0 : i.uuid) &&
                                    e.updatePlaylistTrackByUuid({ playlistUuid: null == (l = t.meta) ? void 0 : l.uuid, resumeStream: !1 });
                            },
                        };
                        return e;
                    });
            i(94094);
            var D = i(41390),
                K = i(5203);
        },
    },
]);
