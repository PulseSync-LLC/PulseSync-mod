'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [746],
    {
        6585: (e, i, t) => {
            t.d(i, { s: () => s });
            var r = t(28410),
                n = t(19225),
                l = t(9106),
                a = t(10024);
            let s = (e) => {
                var i, t;
                let { album: s, artists: o, bookmateOptionRequired: u, chart: d, likesCount: g, trailer: c, releaseYear: m, releaseDate: v } = e,
                    { available: y, disclaimers: b } = (0, l.f)(s);
                return (0, r.wg)({
                    id: s.id,
                    title: s.title,
                    coverUri: null == (i = s.cover) ? void 0 : i.uri,
                    type: s.albumType,
                    disclaimers: b,
                    artists: null == o ? void 0 : o.map((e) => (0, n.a)({ artist: e })),
                    averageColor: null == (t = s.cover) ? void 0 : t.color,
                    isAvailable: y,
                    likesCount: g,
                    bookmateOptionRequired: u,
                    chart: d,
                    trailer: (0, a.m)(c),
                    listeningFinished: s.listeningFinished,
                    year: m ? Number(m) : void 0,
                    releaseDate: v,
                });
            };
        },
        9106: (e, i, t) => {
            t.d(i, { f: () => r });
            let r = (e) => {
                var i, t, r, n, l, a;
                let s = null == (i = e.available) || i,
                    o = null != (t = e.disclaimers) ? t : [];
                return (
                    e.contentRestrictions &&
                        ((s = null == (l = null == (r = e.contentRestrictions) ? void 0 : r.available) || l),
                        (o = null != (a = null == (n = e.contentRestrictions) ? void 0 : n.disclaimers) ? a : [])),
                    { available: s, disclaimers: o }
                );
            };
        },
        9135: (e, i, t) => {
            t.d(i, { b: () => l });
            var r = t(28410),
                n = t(10024);
            let l = (e) => {
                var i, t;
                let { playlist: l, generatedPlaylistType: a, likesCount: s, trailer: o, tracksCount: u } = e;
                return (0, r.wg)({
                    isAvailable: null == (t = l.available) || t,
                    uuid: l.playlistUuid,
                    title: l.title,
                    uid: l.uid,
                    kind: l.kind,
                    coverUri: null == (i = l.cover) ? void 0 : i.uri,
                    generatedPlaylistType: a,
                    likesCount: s,
                    tracksCount: u,
                    trailer: (0, n.m)(o),
                });
            };
        },
        10024: (e, i, t) => {
            t.d(i, { m: () => l });
            var r = t(28410),
                n = t(31851);
            let l = (e) => {
                let i = (0, n.n)(e);
                return (0, r.wg)(i);
            };
        },
        13777: (e, i, t) => {
            var r;
            (t.d(i, { y: () => r }),
                (function (e) {
                    ((e.MIX = 'MIX'), (e.Q2V = 'Q2V'));
                })(r || (r = {})));
        },
        16063: (e, i, t) => {
            t.d(i, { K: () => a });
            var r = t(83772),
                n = t(45337),
                l = t(80468);
            let a = (e, i) => {
                var t, a;
                let s = null == (t = e.artists) ? void 0 : t.map(n.G),
                    o = null == (a = e.albums) ? void 0 : a.map(r.f);
                return { ...(0, l.x)(e, i), artists: s, albums: o };
            };
        },
        19225: (e, i, t) => {
            t.d(i, { a: () => s });
            var r = t(28410),
                n = t(9106),
                l = t(10024),
                a = t(22273);
            let s = (e) => {
                var i, t;
                let { artist: s, trailer: o, isComposer: u, likesCount: d } = e,
                    g = (0, a.m)(s.decomposed),
                    { available: c, disclaimers: m } = (0, n.f)(s);
                return (0, r.wg)({
                    id: String(s.id),
                    name: s.name,
                    coverUri: null == (i = s.cover) ? void 0 : i.uri,
                    various: s.various,
                    decomposed: g,
                    isAvailable: c,
                    disclaimers: m,
                    isComposer: u,
                    averageColor: null == (t = s.cover) ? void 0 : t.color,
                    trailer: (0, l.m)(o),
                    likesCount: d,
                });
            };
        },
        19966: (e, i, t) => {
            t.d(i, { K: () => n });
            var r = t(79497);
            let n = (e) => {
                var i;
                if (e) return { animationUri: e.animationUri, cover: (0, r.p)(e.cover), entityType: null == (i = e.entity) ? void 0 : i.type };
            };
        },
        24820: (e, i, t) => {
            t.d(i, { v: () => l });
            var r = t(28410),
                n = t(16063);
            let l = (e, i) => {
                let t = (0, n.K)(e, i);
                return (0, r.wg)(t);
            };
        },
        34001: (e, i, t) => {
            t.d(i, { O: () => K });
            var r = t(28410),
                n = t(75501),
                l = t(18660),
                a = t(51751),
                s = t(12929),
                o = t(26847),
                u = t(683),
                d = t(86656),
                g = t(27304),
                c = t(40480),
                m = t(77895),
                v = t(43708),
                y = t(60024);
            let b = [n.S.MUSIC, n.S.TRACK, n.S.NOISE, n.S.ASMR],
                K = r.gK
                    .compose(
                        r.gK.model('BaseTrack', {
                            id: r.gK.string,
                            isAvailable: r.gK.boolean,
                            isRemoved: r.gK.boolean,
                            title: r.gK.string,
                            trackSource: r.gK.maybe(r.gK.enumeration(Object.values(l.J))),
                            version: r.gK.maybe(r.gK.string),
                            durationMs: r.gK.maybe(r.gK.number),
                            coverUri: r.gK.maybe(r.gK.string),
                            averageColor: r.gK.maybe(r.gK.string),
                            trackParameters: r.gK.maybe(r.gK.frozen()),
                            albumId: r.gK.maybe(r.gK.number),
                            type: r.gK.maybe(r.gK.enumeration(Object.values(n.S))),
                            pubDate: r.gK.maybe(r.gK.string),
                            hasLyrics: r.gK.maybe(r.gK.boolean),
                            hasSyncLyrics: r.gK.maybe(r.gK.boolean),
                            trailer: r.gK.maybe(d.a),
                            shouldRememberPosition: r.gK.maybe(r.gK.boolean),
                            streamProgress: r.gK.maybe(y.B),
                            shortDescription: r.gK.maybe(r.gK.string),
                            major: r.gK.maybeNull(r.gK.frozen()),
                            clipIds: r.gK.maybeNull(r.gK.frozen()),
                            genre: r.gK.maybeNull(r.gK.string),
                            realId: r.gK.maybe(r.gK.string),
                            cutoutCover: r.gK.maybe(o.$),
                        }),
                        u.E,
                    )
                    .views((e) => {
                        let i = {
                            get isLiked() {
                                if ((0, r._n)(e)) {
                                    let { library: i } = (0, a.M)(e);
                                    return i.isTrackLiked(e.id);
                                }
                                return !1;
                            },
                            get isDownloaded() {
                                if (!(0, r._n)(e)) return !1;
                                let { slam: i } = (0, a.M)(e);
                                return i.isTrackDownloaded(e.id);
                            },
                            get isDownloading() {
                                if (!(0, r._n)(e)) return !1;
                                let { slam: i } = (0, a.M)(e);
                                return i.isTrackDownloading(e.id);
                            },
                            get downloadingProgress() {
                                if (!(0, r._n)(e)) return 0;
                                let { slam: i } = (0, a.M)(e);
                                return i.getTrackDownloadingProgress(e.id);
                            },
                            get isAvailableForDownload() {
                                if (!(0, r._n)(e)) return !1;
                                return (e.type && b.includes(e.type)) || !!i.isUGC;
                            },
                            getUrl(i) {
                                let { href: t } = (0, c.l)(e.id, e.albumId, i);
                                return t;
                            },
                            get url() {
                                return i.getUrl();
                            },
                            get isDisliked() {
                                if ((0, r._n)(e)) {
                                    let { library: i } = (0, a.M)(e);
                                    return i.isTrackDisliked(e.id);
                                }
                                return !1;
                            },
                            get isTrackPodcast() {
                                if ((0, r._n)(e)) return e.type === n.S.PODCAST;
                                return !1;
                            },
                            get isPlusSubscribed() {
                                if (!(0, r._n)(e)) return !1;
                                let { user: i } = (0, a.M)(e);
                                return i.hasPlus;
                            },
                            get isSyncLyricsAvailableWithOfflineFeature() {
                                if (!(0, r._n)(e)) return !1;
                                let { slam: i } = (0, a.M)(e);
                                return !!e.hasSyncLyrics && !i.isOfflineModeEnabled;
                            },
                            get isSyncLyricsAvailable() {
                                return this.isPlusSubscribed && this.isSyncLyricsAvailableWithOfflineFeature;
                            },
                            get isLyricsAvailable() {
                                if (!(0, r._n)(e)) return !1;
                                let { slam: i, user: t } = (0, a.M)(e);
                                if (!t.hasPlus) return !1;
                                return !!e.hasLyrics && !i.isOfflineModeEnabled;
                            },
                            get isTrackAudiobook() {
                                if ((0, r._n)(e)) return e.type === n.S.AUDIOBOOK;
                                return !1;
                            },
                            get isTrackFairyTale() {
                                if ((0, r._n)(e)) return e.type === n.S.FAIRY_TALE;
                                return !1;
                            },
                            get isTrackNonMusic() {
                                return this.isTrackPodcast || this.isTrackAudiobook || this.isTrackFairyTale;
                            },
                            get isTrackMusic() {
                                if ((0, r._n)(e)) return (0, v.f)(e.type);
                                return !1;
                            },
                            get isUGC() {
                                if ((0, r._n)(e)) {
                                    let { isUGC: i } = (0, m.I)(e.trackSource);
                                    return i;
                                }
                                return;
                            },
                            get isOwn() {
                                if ((0, r._n)(e)) {
                                    let { isOwn: i } = (0, m.I)(e.trackSource);
                                    return i;
                                }
                                return;
                            },
                            get isOwnReplacedToUGC() {
                                if ((0, r._n)(e)) {
                                    let { isOwnReplacedToUGC: i } = (0, m.I)(e.trackSource);
                                    return i;
                                }
                                return;
                            },
                            get seeds() {
                                return ['track:'.concat(e.id)];
                            },
                            get isLegalRejected() {
                                return e.getIsLegalRejected(e.isAvailable);
                            },
                            get isUnsafeLegal() {
                                return e.getIsUnsafeLegal(e.isAvailable);
                            },
                            get entityId() {
                                if (e.albumId) return ''.concat(e.id, ':').concat(e.albumId);
                                return e.id;
                            },
                            get hasAlbumLink() {
                                if (!(0, r._n)(e)) return !1;
                                return !!(e.albumId && this.isOwn && e.isAvailable);
                            },
                            get hasTrackLink() {
                                if (!(0, r._n)(e)) return !1;
                                let {
                                    settings: { isMobile: i },
                                    slam: t,
                                } = (0, a.M)(e);
                                return (0, g.t)(e, { isMobile: i, isOfflineModeEnabled: t.isOfflineModeEnabled });
                            },
                            get isNonUserGenerated() {
                                if (!(0, r._n)(e)) return !1;
                                let { isNonUserGenerated: i } = (0, m.I)(e.trackSource);
                                return i;
                            },
                            get hasModalAccess() {
                                return e.hasModalDisclaimer;
                            },
                            getDisclaimerEntityRef: (t) =>
                                t
                                    ? { entityType: t, entityId: e.id }
                                    : i.isTrackPodcast
                                      ? { entityType: s.n.PODCAST, entityId: e.id }
                                      : i.isTrackAudiobook
                                        ? { entityType: s.n.AUDIOBOOK, entityId: e.id }
                                        : { entityType: s.n.TRACK, entityId: e.id },
                        };
                        return i;
                    })
                    .actions((e) => ({
                        afterCreate() {
                            e.trackType = e.type;
                        },
                        toggleLike: (0, r.L3)(function* () {
                            if (!(0, r._n)(e)) return;
                            let { library: i, user: t } = (0, a.M)(e);
                            if (t.isAuthorized) return yield i.toggleTrackLike({ entityId: e.id, albumId: e.albumId, userId: t.account.data.uid });
                        }),
                        toggleDislike: (0, r.L3)(function* () {
                            if (!(0, r._n)(e)) return;
                            let { library: i, user: t } = (0, a.M)(e);
                            if (t.isAuthorized) return yield i.toggleTrackDislike({ entityId: e.id, albumId: e.albumId, userId: t.account.data.uid });
                        }),
                        setListeningFinishedStatus: (0, r.L3)(function* () {
                            let i = e.streamProgress;
                            if (i)
                                return (null == i ? void 0 : i.hasEverFinished)
                                    ? yield null == i ? void 0 : i.markUnlistened({ trackId: Number(e.id) })
                                    : yield null == i ? void 0 : i.markListened({ trackId: Number(e.id) });
                        }),
                        getKey: (i) => ''.concat(i, '_').concat(e.id),
                    }));
        },
        36159: (e, i, t) => {
            t.d(i, { G: () => r });
            var r = (function (e) {
                return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e);
            })({});
        },
        39528: (e, i, t) => {
            t.d(i, { R: () => n });
            var r = t(25895);
            let n = (e) => (0, r.u)('/artist/:artistId', { params: { artistId: e } });
        },
        42546: (e, i, t) => {
            t.d(i, { I: () => l });
            var r = t(28410),
                n = t(69088);
            let l = t(45809).Z.props({ artists: r.gK.maybe(r.gK.array(n.P)) });
        },
        43357: (e, i, t) => {
            t.d(i, { f: () => n });
            var r = t(98436);
            let n = (e) => {
                let { uid: i, kind: t } = e;
                return ''.concat(r._.PLAYLIST_ITEM).concat(i, '_').concat(t);
            };
        },
        43708: (e, i, t) => {
            t.d(i, { f: () => n });
            var r = t(75501);
            let n = (e) => e === r.S.TRACK || e === r.S.MUSIC;
        },
        45809: (e, i, t) => {
            t.d(i, { Z: () => l });
            var r = t(28410);
            let n = r.gK.model('TrackIdModel', { id: r.gK.union(r.gK.string, r.gK.number), albumId: r.gK.maybe(r.gK.number), timestamp: r.gK.maybe(r.gK.string) }),
                l = t(53469)
                    .$.props({ tracks: r.gK.maybe(r.gK.array(n)) })
                    .actions((e) => ({ getKey: (i) => ''.concat(i, '_').concat(e.id) }));
        },
        49337: (e, i, t) => {
            t.d(i, { S: () => r });
            var r = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        51859: (e, i, t) => {
            t.d(i, { P: () => r, u: () => n });
            var r = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                n = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        53469: (e, i, t) => {
            t.d(i, { $: () => K });
            var r = t(28410),
                n = t(93690),
                l = t(11871),
                a = t(31860),
                s = t(51751),
                o = t(31488),
                u = t(25895),
                d = t(86656),
                g = t(98181),
                c = t(86064),
                m = t(99725),
                v = t(65596),
                y = t(43357),
                b = t(82401);
            let K = r.gK
                .compose(
                    r.gK.model({
                        uuid: r.gK.string,
                        isAvailable: r.gK.boolean,
                        revision: r.gK.maybe(r.gK.number),
                        uid: r.gK.number,
                        kind: r.gK.number,
                        title: r.gK.maybe(r.gK.string),
                        coverUri: r.gK.maybe(r.gK.string),
                        tracksCount: r.gK.maybe(r.gK.number),
                        averageColor: r.gK.maybe(r.gK.string),
                        generatedPlaylistType: r.gK.maybe(r.gK.string),
                        personalColor: r.gK.maybeNull(r.gK.number),
                        visibility: r.gK.maybe(r.gK.string),
                        trailer: r.gK.maybe(d.a),
                    }),
                    g.t,
                )
                .views((e) => ({
                    get key() {
                        return ''.concat(e.uuid, '_').concat(e.uid, '_').concat(e.kind);
                    },
                    get url() {
                        let { href: i } = (0, u.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.uuid } });
                        return i;
                    },
                    get isLikesCountHidden() {
                        return e.kind === b.j.LIKE || e.kind === b.j.CHART || e.generatedPlaylistType;
                    },
                    get isFavouritePlaylist() {
                        return e.kind === b.j.LIKE;
                    },
                    get isPublic() {
                        return e.visibility === l.L.PUBLIC;
                    },
                    get isLiked() {
                        if (!(0, r._n)(e)) return !1;
                        let { library: i } = (0, s.M)(e);
                        return i.isPlaylistLiked((0, v.m)(e));
                    },
                    get pinId() {
                        return (0, y.f)(e);
                    },
                    get id() {
                        return (0, v.m)(e);
                    },
                    get isPinned() {
                        if (!(0, r._n)(e)) return !1;
                        let { pinsCollection: i } = (0, s.M)(e);
                        return i.isPinned(this.pinId);
                    },
                    get isOwnPlaylist() {
                        let { user: i } = (0, s.M)(e);
                        return !!(i.isAuthorized && e.uid && i.account.data.uid && e.uid === i.account.data.uid);
                    },
                    get canUserChange() {
                        if (!(0, r._n)(e)) return !1;
                        return this.isOwnPlaylist && !this.isFavouritePlaylist;
                    },
                    get isOwnFavouritePlaylist() {
                        if (!(0, r._n)(e)) return !1;
                        return this.isFavouritePlaylist && this.isOwnPlaylist;
                    },
                }))
                .actions((e) => ({
                    toggleLike: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { library: i, user: t } = (0, s.M)(e);
                        if (t.isAuthorized) {
                            let n = yield i.togglePlaylistLike({ userId: t.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                            return ((0, r._n)(e) && n === a.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), n);
                        }
                    }),
                    togglePin: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { pinsCollection: i, user: t } = (0, s.M)(e);
                        if (t.isAuthorized) return yield i.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                    }),
                    changePlaylist: (0, r.L3)(function* (i) {
                        if (!(0, r._n)(e)) return c.Y.ERROR;
                        let { usersResource: t, modelActionsLogger: l } = (0, r._$)(e);
                        try {
                            var a, s;
                            let r = yield t.changePlaylistRelative({ userId: e.uid, diff: i, revision: null != (a = e.revision) ? a : 0, playlistKind: e.kind });
                            return ((e.revision = r.revision), (e.isAvailable = null == (s = r.available) || s), c.Y.OK);
                        } catch (e) {
                            if ((l.error(e), e && 'object' == typeof e && 'statusCode' in e && e.statusCode === n.X1.PRECONDITION_FAILED)) return c.Y.RELOAD;
                            return c.Y.ERROR;
                        }
                    }),
                    changeTitle: (0, r.L3)(function* (i) {
                        if (!(0, r._n)(e)) return o.F.ERROR;
                        if (e.title === i) return o.F.OK;
                        let { usersResource: t, modelActionsLogger: n } = (0, r._$)(e);
                        if (e.canUserChange) {
                            if (i.length < 1 || i.length > m.k) return o.F.ERROR;
                            let r = e.title;
                            e.title = i;
                            try {
                                let n = yield t.changePlaylistTitle({ title: i, userId: e.uid, playlistKind: e.kind });
                                if (!(null == n ? void 0 : n.title)) return ((e.title = r), o.F.ERROR);
                                return ((e.title = n.title), o.F.OK);
                            } catch (i) {
                                ((e.title = r), n.error(i));
                            }
                        }
                        return o.F.ERROR;
                    }),
                    deletePlaylist: (0, r.L3)(function* () {
                        if (!(0, r._n)(e) || !e.canUserChange) return o.F.ERROR;
                        let { pinsCollection: i } = (0, s.M)(e),
                            { usersResource: t, modelActionsLogger: n } = (0, r._$)(e);
                        try {
                            return (yield t.deletePlaylist({ userId: e.uid, playlistKind: e.kind }), i.isPinned(e.pinId) && i.deletePin(e.pinId), o.F.OK);
                        } catch (e) {
                            n.error(e);
                        }
                        return o.F.ERROR;
                    }),
                    toggleVisibility: (0, r.L3)(function* (i) {
                        if (!(0, r._n)(e) || (!e.canUserChange && !e.isOwnFavouritePlaylist)) return o.F.ERROR;
                        let { usersResource: t, modelActionsLogger: n } = (0, r._$)(e),
                            { user: a } = (0, s.M)(e),
                            u = e.visibility,
                            d = e.isPublic ? l.L.PRIVATE : l.L.PUBLIC;
                        i && (d = i);
                        try {
                            return (
                                (e.visibility = d),
                                e.isOwnFavouritePlaylist
                                    ? yield a.setSettings({ userMusicVisibility: d })
                                    : yield t.togglePlaylistVisibility({ visibility: d, userId: e.uid, playlistKind: e.kind }),
                                o.F.OK
                            );
                        } catch (e) {
                            n.error(e);
                        }
                        return ((e.visibility = u), o.F.ERROR);
                    }),
                    getKey: (i) => ''.concat(i, '_').concat(e.id),
                }));
        },
        55180: (e, i, t) => {
            t.d(i, { J: () => s });
            var r = t(28410),
                n = t(66730),
                l = t(69088),
                a = t(69432);
            let s = n.G.props({ artists: r.gK.maybe(r.gK.array(l.P)), chart: r.gK.maybe(a.I) }).views((e) => ({
                get artistNames() {
                    var i;
                    return null == (i = e.artists) ? void 0 : i.map((e) => e.name).join(', ');
                },
                get artistName() {
                    var t, r, n, l;
                    if (null == (r = e.artists) || null == (t = r[0]) ? void 0 : t.various) return;
                    return null == (l = e.artists) || null == (n = l[0]) ? void 0 : n.name;
                },
                get artistIds() {
                    var a;
                    return null == (a = e.artists) ? void 0 : a.map((e) => e.id);
                },
                get artistId() {
                    var s, o;
                    return null == (o = e.artists) || null == (s = o[0]) ? void 0 : s.id;
                },
            }));
        },
        56629: (e, i, t) => {
            var r;
            (t.d(i, { _: () => r }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(r || (r = {})));
        },
        59981: (e, i, t) => {
            var r;
            (t.d(i, { T: () => r }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(r || (r = {})));
        },
        60024: (e, i, t) => {
            t.d(i, { B: () => l });
            var r = t(28410),
                n = t(59981);
            let l = r.gK.model('StreamProgress', { endPositionSec: r.gK.maybe(r.gK.number), hasEverFinished: r.gK.maybe(r.gK.boolean) }).actions((e) => ({
                updateEndPositionSec: (i) => {
                    e.endPositionSec = i;
                },
                updateEverFinished: (i) => {
                    e.hasEverFinished = i;
                },
                markListened: (0, r.L3)(function* (i) {
                    let { streamsResource: t, modelActionsLogger: l } = (0, r._$)(e);
                    try {
                        return yield t.markFinished(i);
                    } catch (e) {
                        return (l.error(e), n.T.ERROR);
                    }
                }),
                markUnlistened: (0, r.L3)(function* (i) {
                    let { streamsResource: t, modelActionsLogger: l } = (0, r._$)(e);
                    try {
                        return yield t.markUnfinished(i);
                    } catch (e) {
                        return (l.error(e), n.T.ERROR);
                    }
                }),
            }));
        },
        65596: (e, i, t) => {
            t.d(i, { m: () => r });
            let r = (e) => {
                let { uid: i, kind: t } = e;
                return ''.concat(i, ':').concat(t);
            };
        },
        71511: (e, i, t) => {
            t.d(i, { G: () => g });
            var r = t(28410),
                n = t(24591),
                l = t(13777),
                a = t(51751),
                s = t(44806),
                o = t(51514),
                u = t(26847);
            let d = r.gK.model('VibeAgent', { animationUri: r.gK.string, cover: u.$, entityType: r.gK.maybe(r.gK.string) }),
                g = r.gK
                    .model('Vibe', {
                        title: r.gK.optional(r.gK.string, ''),
                        description: r.gK.maybe(r.gK.string),
                        seeds: r.gK.array(r.gK.string),
                        imageUrl: r.gK.maybe(r.gK.string),
                        animationUrl: r.gK.maybe(r.gK.string),
                        backgroundImageUrl: r.gK.maybe(r.gK.string),
                        backgroundColor: r.gK.maybe(r.gK.string),
                        type: r.gK.maybe(r.gK.string),
                        colors: r.gK.maybe(r.gK.model({ average: r.gK.maybe(r.gK.string), waveText: r.gK.maybe(r.gK.string) })),
                        agent: r.gK.maybe(d),
                    })
                    .views((e) => {
                        let i = {
                            get stationId() {
                                var t;
                                return null != (t = e.seeds[0]) ? t : '';
                            },
                            get seedsId() {
                                return e.seeds.join(',');
                            },
                            get context() {
                                if (e.seeds) {
                                    if (i.stationId !== o.M1) return e.title;
                                    else if (e.seeds.length > 1) return e.title;
                                }
                                return null;
                            },
                            get pinId() {
                                return (0, n.f)(e.seeds);
                            },
                            get isPinned() {
                                if (!(0, r._n)(e)) return !1;
                                let { pinsCollection: i } = (0, a.M)(e);
                                return i.isPinned(this.pinId);
                            },
                            get stationType() {
                                var u, d;
                                return null != (d = null == (u = i.stationId) ? void 0 : u.split(':')[0]) ? d : '';
                            },
                            get isMix() {
                                return e.type === l.y.MIX;
                            },
                            get isQ2V() {
                                return e.type === l.y.Q2V;
                            },
                            get shouldShowAgent() {
                                if (!(0, r._n)(e)) return !1;
                                let { experiments: i } = (0, a.M)(e);
                                return i.checkExperiment(s.z.WebNextWaveAgentExperiment, 'on');
                            },
                            get cover() {
                                return (0, r.wg)({ uri: e.imageUrl, color: e.backgroundColor });
                            },
                        };
                        return i;
                    })
                    .actions((e) => ({
                        getKey: (i) => ''.concat(i, '_').concat(e.seeds[0]),
                        togglePin: (0, r.L3)(function* () {
                            if (!(0, r._n)(e)) return;
                            let { pinsCollection: i, user: t } = (0, a.M)(e);
                            if (t.isAuthorized) return yield i.toggleVibePin({ seeds: e.seeds }, e.pinId);
                        }),
                        getDescription() {
                            let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                            if (!(0, r._n)(e)) return i;
                            let { experiments: t } = (0, a.M)(e);
                            return t.checkExperiment(s.z.WebNextVibeDescription, 'on') && void 0 !== (null == e ? void 0 : e.description) ? e.description : i;
                        },
                    }));
        },
        73544: (e, i, t) => {
            t.d(i, { e: () => r });
            let r = (e) => ({ uri: e.uri, color: e.color });
        },
        79497: (e, i, t) => {
            t.d(i, { p: () => l });
            var r = t(28410),
                n = t(73544);
            let l = (e) => {
                let i = (0, n.e)(e);
                return (0, r.wg)(i);
            };
        },
        80468: (e, i, t) => {
            (t.d(i, { x: () => l }), ((r || (r = {})).SMART_PREVIEW = 'smart_preview'));
            var r,
                n = t(23951);
            let l = (e, i) => {
                var t, l, a, s, o, u, d, g, c, m;
                let { isSmartPreview: v, hasEverFinished: y } = i || {},
                    b = (0, n.Q)(null == e ? void 0 : e.derivedColors),
                    K = v ? (null == e || null == (t = e.smartPreviewParams) ? void 0 : t.durationMs) : null == e ? void 0 : e.durationMs,
                    f = { available: !!(null == e || null == (l = e.specialAudioResources) ? void 0 : l.includes(r.SMART_PREVIEW)) };
                return {
                    id: ((null == e ? void 0 : e.id) || 0).toString(),
                    isAvailable: !!(null == e ? void 0 : e.available),
                    isRemoved: (null == e ? void 0 : e.error) === 'not-found',
                    title: null != (c = null == e ? void 0 : e.title) ? c : '',
                    version: null == e ? void 0 : e.version,
                    durationMs: K,
                    coverUri: null == e ? void 0 : e.coverUri,
                    averageColor: b,
                    trackParameters: null == e ? void 0 : e.trackParameters,
                    trackSource: null == e ? void 0 : e.trackSource,
                    albumId: null == e || null == (s = e.albums) || null == (a = s[0]) ? void 0 : a.id,
                    disclaimers: null == e ? void 0 : e.disclaimers,
                    type: null == e ? void 0 : e.type,
                    pubDate: null == e ? void 0 : e.pubDate,
                    hasLyrics: null == e || null == (o = e.lyricsInfo) ? void 0 : o.hasAvailableTextLyrics,
                    hasSyncLyrics: null == e || null == (u = e.lyricsInfo) ? void 0 : u.hasAvailableSyncLyrics,
                    shouldRememberPosition: null == e ? void 0 : e.rememberPosition,
                    streamProgress: ((e, i) => ({
                        endPositionSec: null == e ? void 0 : e.endPositionSec,
                        hasEverFinished: (null == i ? void 0 : i.hasEverFinished) || (null == e ? void 0 : e.everFinished),
                    }))(null == e ? void 0 : e.streamProgress, { hasEverFinished: y }),
                    shortDescription: null != (m = null == e ? void 0 : e.shortDescription) ? m : '',
                    trailer: f,
                    clipIds: null == e ? void 0 : e.clipIds,
                    major: (null == e ? void 0 : e.major) ? { id: e.major.id, name: e.major.name } : null,
                    genre: null == e || null == (g = e.albums) || null == (d = g[0]) ? void 0 : d.genre,
                    realId: null == e ? void 0 : e.realId,
                    cutoutCover: null == e ? void 0 : e.cutoutCover,
                };
            };
        },
        81024: (e, i, t) => {
            t.d(i, { L: () => n });
            var r = t(25895);
            let n = (e) => (0, r.u)('/album/:albumId', { params: { albumId: e } });
        },
        85708: (e, i, t) => {
            t.d(i, { e: () => l });
            var r = t(28410),
                n = t(19966);
            let l = (e) => {
                var i, t, l, a;
                return (0, r.wg)({
                    title: e.title,
                    description: e.header,
                    seeds: e.seeds,
                    animationUrl: e.animationUrl,
                    backgroundImageUrl: e.backgroundImageUrl,
                    imageUrl: e.imageUrl,
                    colors: {
                        average: null != (l = null == (i = e.colors) ? void 0 : i.average) ? l : '',
                        waveText: null != (a = null == (t = e.colors) ? void 0 : t.waveText) ? a : '',
                    },
                    agent: (0, n.K)(e.agent),
                    type: e.type,
                });
            };
        },
        88148: (e, i, t) => {
            t.d(i, { v: () => u });
            var r = t(28410),
                n = t(66730),
                l = t(69088),
                a = t(69432),
                s = t(34001),
                o = t(31488);
            let u = s.O.props({ artists: r.gK.array(l.P), albums: r.gK.array(n.G), chart: r.gK.maybe(a.I) })
                .views((e) => ({
                    get artistsNames() {
                        var i;
                        return null == (i = e.artists) ? void 0 : i.map((e) => e.name).join(', ');
                    },
                    get mainArtist() {
                        var t, r, n, l;
                        if (null == (r = e.artists) || null == (t = r[0]) ? void 0 : t.various) return null;
                        return null != (l = null == (n = e.artists) ? void 0 : n[0]) ? l : null;
                    },
                    get mainAlbum() {
                        var a, s;
                        return null != (s = null == (a = e.albums) ? void 0 : a[0]) ? s : null;
                    },
                    get index() {
                        var o, u, d;
                        return null != (d = null == (u = e.albums[0]) || null == (o = u.trackPosition) ? void 0 : o.index) ? d : null;
                    },
                    get isAvailableOnlyForPlus() {
                        var g;
                        return !!(null == (g = this.mainAlbum) ? void 0 : g.isAvailableOnlyForPlus);
                    },
                }))
                .actions((e) => ({
                    changeTrackInfo: (0, r.L3)(function* (i, t) {
                        let { ugcResource: n, modelActionsLogger: a } = (0, r._$)(e);
                        if (e.artists.map((e) => e.name).join(', ') === t && i === e.title) return o.F.OK;
                        try {
                            var s;
                            (yield n.changeTrack({ trackId: e.id, title: i, artist: t }), (e.title = i));
                            let a = (null == (s = e.artists[0]) ? void 0 : s.id) || '0';
                            if (((e.artists = (0, r.wg)([])), t)) {
                                let i = l.P.create({ id: a, name: t, isAvailable: !0 });
                                e.artists = (0, r.wg)([i]);
                            }
                            return o.F.OK;
                        } catch (e) {
                            return (a.error(e), o.F.ERROR);
                        }
                    }),
                }))
                .named('Track');
        },
        93610: (e, i, t) => {
            t.d(i, { l: () => l });
            var r = t(28410),
                n = t(19966);
            let l = (e, i) => {
                var t;
                return (0, r.wg)({ title: e.name, seeds: e.seeds, description: e.description, type: null != (t = e.type) ? t : void 0, agent: (0, n.K)(i) });
            };
        },
        95067: (e, i, t) => {
            t.d(i, { c: () => n });
            var r = t(61943),
                n = (function (e) {
                    return (
                        (e.Theme = 'theme'),
                        (e.AllowAnalyticsLogs = 'AllowAnalyticsLogs'),
                        (e.NavbarCollapsed = 'navbarCollapsed'),
                        (e.SessionHistoryState = 'sessionHistoryState'),
                        (e.SessionId = 'Session_id'),
                        (e.YmPlayerRepeatMode = 'ymPlayerRepeatMode'),
                        (e.YmPlayerVolume = 'ymPlayerVolume'),
                        (e.YmPlayerPrevVolume = 'ymPlayerPrevVolume'),
                        (e.YmPlayerShuffle = 'ymPlayerShuffle'),
                        (e.YmPlayerQuality = 'ymPlayerQuality'),
                        (e.YmUid = 'ymUid'),
                        (e.YandexLogin = 'yandex_login'),
                        (e.YandexUid = 'yandexuid'),
                        (e.Oauth = 'oauth'),
                        (e.OauthState = 'oauthState'),
                        (e.ArtistDonationButtonOnbordingShowed = 'ArtistDonationButtonOnbordingShowed'),
                        (e.TrailerButtonOnbordingShowed = 'TrailerButtonOnbordingShowed'),
                        (e.ConcertsTabOnboardingShowed = 'ConcertsTabOnboardingShowed'),
                        (e[(e.SavedUserLanguage = r.s)] = 'SavedUserLanguage'),
                        (e.ExEx = 'ExEx'),
                        (e.EqualizerConfig = 'EqualizerConfig'),
                        (e.EnableMetricsPluginDebugMode = 'EnableMetricsPluginDebugMode'),
                        (e.EnableYnisonMetricsDebugMode = 'EnableYnisonMetricsDebugMode'),
                        (e.OverwrittenExperiments = 'overwrittenExperiments'),
                        (e.Offer = 'offer'),
                        (e.OfflineMode = 'offlineMode'),
                        (e.NavbarDownloadBarIsHidden = 'navbarDownloadBarIsHidden'),
                        (e.OfflineDegradation = 'offlineDegradation'),
                        (e.DesktopPaywall = 'desktopPaywall'),
                        (e.LiteVersionMode = 'liteVersionMode'),
                        (e.DownloadMobileApp = 'downloadMobileApp'),
                        (e.HideDeeplinkAndOnelink = 'hideDeeplinkAndOnelink'),
                        (e.YnisonDeviceId = 'ynisonDeviceId'),
                        (e.CrossFadeMode = 'crossFadeMode'),
                        (e.CustomPlayerThumbConfig = 'CustomPlayerThumbConfig'),
                        (e.BuySubscriptionParams = 'buySubscriptionParams'),
                        (e.EnableCrossfadeDebugMode = 'EnableCrossfadeDebugMode'),
                        (e.EnableBurstDebounceDebugMode = 'EnableBurstDebounceDebugMode'),
                        (e.ConcertLocation = 'concertLocation'),
                        e
                    );
                })({});
        },
        98436: (e, i, t) => {
            var r;
            (t.d(i, { _: () => r }),
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
                })(r || (r = {})));
        },
        99725: (e, i, t) => {
            t.d(i, { k: () => r });
            let r = 100;
        },
    },
]);
