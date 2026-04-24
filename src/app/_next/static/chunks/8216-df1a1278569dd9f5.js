(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8216],
    {
        1048: (e) => {
            e.exports = { root: 'TrailerTrack_root__0UIP4', root_active: 'TrailerTrack_root_active__F_8Iw' };
        },
        4520: (e) => {
            e.exports = { root: 'TrailerModal_root__T4ZJ8', modalContent: 'TrailerModal_modalContent__ZSNFe', header: 'TrailerModal_header__0h1zj' };
        },
        6817: (e) => {
            e.exports = {
                root: 'TrackModalLyricsShimmer_root__t88sX',
                title: 'TrackModalLyricsShimmer_title__lIyk4',
                lyrics: 'TrackModalLyricsShimmer_lyrics__BSM_Q',
                important: 'TrackModalLyricsShimmer_important__U1BbD',
                button: 'TrackModalLyricsShimmer_button__uAG_w',
            };
        },
        7286: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => eu, v: () => x });
            var i = a(16264),
                n = a(51606),
                r = a(14525),
                l = a(27966),
                s = a(46663),
                o = a(42561),
                d = a(54690),
                c = a(81628),
                u = a(43026),
                m = a(66161);
            let _ = (e, t) => {
                let a = (0, m.vU)(e, t);
                if (null == t ? void 0 : t.albumId) {
                    var i, r;
                    let e = a.albums.find((e) => String(e.id) === String(t.albumId));
                    return {
                        ...a,
                        isBest: null == e || null == (i = e.bestAlbumTracks) ? void 0 : i.includes(Number(a.id)),
                        positionInAlbum: null == e || null == (r = e.trackPosition) ? void 0 : r.index,
                    };
                }
                return (0, n.wg)({ ...a });
            };
            var p = (function (e) {
                return (e.ALBUM = 'album'), (e.ARTIST = 'artist'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), e;
            })({});
            let g = n.gK
                .model('TrailerMeta', {
                    id: n.gK.string,
                    url: n.gK.string,
                    title: n.gK.maybe(n.gK.string),
                    uuid: n.gK.maybe(n.gK.string),
                    coverUri: n.gK.maybe(n.gK.string),
                    averageColor: n.gK.maybe(n.gK.string),
                    albumArtists: n.gK.maybe(n.gK.array(c.PK)),
                    albumType: n.gK.maybe(n.gK.string),
                })
                .views((e) => ({
                    getSharingProps(t) {
                        switch (t) {
                            case p.ALBUM:
                                return { pattern: '/album/:albumId', params: { albumId: e.id } };
                            case p.ARTIST:
                                return { pattern: '/artist/:artistId', params: { artistId: e.id } };
                            case p.PLAYLIST:
                                return { pattern: '/playlists/:playlistUuid', params: { playlistUuid: e.uuid } };
                            case p.TRACK:
                                return { pattern: '/track/:trackId', params: { trackId: e.id } };
                            default:
                                return { pattern: o.Zyd.main.href, params: {} };
                        }
                    },
                }));
            var v = a(81959),
                h = a(41094);
            let b = n.gK
                    .model('TrailerState', {
                        contextType: n.gK.maybeNull(n.gK.enumeration(Object.values(v.K))),
                        contextId: n.gK.maybeNull(n.gK.string),
                        entityMeta: n.gK.maybeNull(h.x5),
                        status: n.gK.enumeration(Object.values(s.MT)),
                    })
                    .actions((e) => ({
                        setContextId: (t) => {
                            e.contextId = String(t);
                        },
                        setContextType: (t) => {
                            e.contextType = t;
                        },
                        setEntityMeta: (t) => {
                            t && t.data.meta && (e.entityMeta = (0, h.pE)(t));
                        },
                        setStatus: (t) => {
                            e.status = t;
                        },
                    })),
                I = m.vj.props({ isBest: n.gK.maybe(n.gK.boolean), positionInAlbum: n.gK.maybe(n.gK.number) }).named('TrailerTrack'),
                x = n.gK
                    .compose(
                        n.gK.model('Trailer', {
                            id: n.gK.maybeNull(n.gK.string),
                            errorStatusCode: n.gK.maybeNull(n.gK.number),
                            modal: d.qt,
                            variant: n.gK.maybeNull(n.gK.enumeration(Object.values(p))),
                            tracks: n.gK.maybeNull(n.gK.array(I)),
                            meta: n.gK.maybeNull(g),
                            state: b,
                            withAnimation: n.gK.boolean,
                            shouldAutoStartPlaying: n.gK.boolean,
                            shouldSendEventOnTracksShowed: n.gK.boolean,
                            sonataStatusBeforeTrailerStart: n.gK.enumeration(Object.values(s.MT)),
                            isManuallyPaused: n.gK.boolean,
                            utmLinkModel: n.gK.maybe(o._eP),
                            title: n.gK.maybeNull(n.gK.string),
                            shareable: n.gK.maybeNull(n.gK.boolean),
                            personalColor: n.gK.maybeNull(n.gK.number),
                        }),
                        d.XT,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === o.GuX.PENDING;
                        },
                        get isNotFound() {
                            var t;
                            let a = e.loadingState === o.GuX.RESOLVE && (null == (t = e.tracks) ? void 0 : t.length) === 0,
                                i = e.errorStatusCode === r.X1.NOT_FOUND;
                            return a || i;
                        },
                        get objectId() {
                            return ''.concat(e.variant, ':').concat(e.id);
                        },
                        get utmLink() {
                            return e.utmLinkModel && (0, i.HO)(e.utmLinkModel);
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            setUtmLink(t) {
                                t && (e.utmLinkModel = (0, n.wg)(t));
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
                                let { sonataState: i } = (0, n.Zn)(e);
                                t.isTrailerActive(p.ARTIST, a) ||
                                    (t.reset(), (e.variant = p.ARTIST), (e.id = a), (e.sonataStatusBeforeTrailerStart = i.status), e.modal.open(), t.getArtistTrailer(a));
                            },
                            openAlbumTrailer(a) {
                                let { sonataState: i } = (0, n.Zn)(e);
                                t.isTrailerActive(p.ALBUM, String(a)) ||
                                    (t.reset(),
                                    (e.variant = p.ALBUM),
                                    (e.id = String(a)),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getAlbumTrailer(a));
                            },
                            openPlaylistTrailer(a) {
                                let { sonataState: i } = (0, n.Zn)(e);
                                t.isTrailerActive(p.PLAYLIST, a) ||
                                    (t.reset(),
                                    (e.variant = p.PLAYLIST),
                                    (e.id = a),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getPlaylistTrailer(a));
                            },
                            openTrackTrailer(a) {
                                let { sonataState: i } = (0, n.Zn)(e);
                                t.isTrailerActive(p.TRACK, a) ||
                                    (t.reset(), (e.variant = p.TRACK), (e.id = a), (e.sonataStatusBeforeTrailerStart = i.status), e.modal.open(), t.getTrackTrailer(a));
                            },
                            getArtistTrailer: (0, n.L3)(function* (a) {
                                let { artistsResource: i } = (0, n._$)(e);
                                if (e.loadingState !== o.GuX.PENDING)
                                    try {
                                        e.loadingState = o.GuX.PENDING;
                                        let { artist: t, trailer: r } = yield i.getTrailer({ artistId: a });
                                        r.tracks && (e.tracks = (0, n.wg)(r.tracks.map((e) => _(e, { isSmartPreview: !0 })))),
                                            r.title && (e.title = r.title),
                                            t &&
                                                (e.meta = ((e) => {
                                                    var t, a;
                                                    let { href: i } = (0, o.uvd)('/artist/:artistId', { params: { artistId: e.id } });
                                                    return (0, n.wg)({
                                                        id: String(e.id),
                                                        url: i,
                                                        title: e.name,
                                                        coverUri: null == (t = e.cover) ? void 0 : t.uri,
                                                        averageColor: null == (a = e.cover) ? void 0 : a.color,
                                                    });
                                                })(t)),
                                            (e.loadingState = o.GuX.RESOLVE);
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            getAlbumTrailer: (0, n.L3)(function* (a) {
                                let { albumResource: i } = (0, n._$)(e);
                                if (e.loadingState !== o.GuX.PENDING)
                                    try {
                                        e.loadingState = o.GuX.PENDING;
                                        let { album: t, artists: r, trailer: l } = yield i.getTrailer({ albumId: a });
                                        l.tracks && (e.tracks = (0, n.wg)(l.tracks.map((e) => _(e, { isSmartPreview: !0, albumId: t.id })))),
                                            l.title && (e.title = l.title),
                                            t &&
                                                (e.meta = ((e, t) => {
                                                    var a, i;
                                                    let r = null == t ? void 0 : t.map((e) => (0, c.as)({ artist: e })),
                                                        { href: l } = (0, o.uvd)('/album/:albumId', { params: { albumId: e.id } });
                                                    return (0, n.wg)({
                                                        id: String(e.id),
                                                        url: l,
                                                        title: e.title,
                                                        coverUri: null == (a = e.cover) ? void 0 : a.uri,
                                                        averageColor: null == (i = e.cover) ? void 0 : i.color,
                                                        albumArtists: r,
                                                        albumType: e.albumType,
                                                    });
                                                })(t, r)),
                                            (e.loadingState = o.GuX.RESOLVE);
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            getPlaylistTrailer: (0, n.L3)(function* (a) {
                                let { usersResource: i } = (0, n._$)(e);
                                if (e.loadingState !== o.GuX.PENDING)
                                    try {
                                        e.loadingState = o.GuX.PENDING;
                                        let { uid: t, kind: r } = (0, l.I)(a);
                                        if (!t || !r) {
                                            e.loadingState = o.GuX.REJECT;
                                            return;
                                        }
                                        let {
                                            playlist: s,
                                            trailer: d,
                                            shareable: c,
                                            personalColor: u,
                                        } = yield i.getPlaylistTrailer({ userId: t, playlistKind: Number(r) });
                                        d.tracks && (e.tracks = (0, n.wg)(d.tracks.map((e) => _(e, { isSmartPreview: !0 })))),
                                            d.title && (e.title = d.title),
                                            c && (e.shareable = c),
                                            u && (e.personalColor = u),
                                            s &&
                                                (e.meta = ((e) => {
                                                    var t, a;
                                                    let { href: i } = (0, o.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                                                    return (0, n.wg)({
                                                        id: ''.concat(e.uid, ':').concat(e.kind),
                                                        url: i,
                                                        uuid: e.playlistUuid,
                                                        title: e.title,
                                                        coverUri: null == (t = e.cover) ? void 0 : t.uri,
                                                        averageColor: null == (a = e.cover) ? void 0 : a.color,
                                                    });
                                                })(s)),
                                            (e.loadingState = o.GuX.RESOLVE);
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            getTrackTrailer: (0, n.L3)(function* (a) {
                                let { tracksResource: i } = (0, n._$)(e);
                                if (e.loadingState !== o.GuX.PENDING)
                                    try {
                                        e.loadingState = o.GuX.PENDING;
                                        let { track: t, title: d } = yield i.getTrailer({ trackId: a });
                                        if ((d && (e.title = d), t)) {
                                            var r, l, s;
                                            (e.tracks = (0, n.wg)([_(t, { isSmartPreview: !0 })])),
                                                (e.meta = (0, n.wg)({
                                                    id: String(t.id),
                                                    url: (0, u.$O)(t.id, null == (l = t.albums) || null == (r = l[0]) ? void 0 : r.id),
                                                    title: t.title,
                                                    coverUri: t.coverUri,
                                                    averageColor: null == (s = t.derivedColors) ? void 0 : s.average,
                                                }));
                                        }
                                        e.loadingState = o.GuX.RESOLVE;
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            handleError(t) {
                                let { modelActionsLogger: a } = (0, n._$)(e);
                                a.error(t),
                                    t instanceof r.GX && (t.statusCode === r.X1.NOT_FOUND || t.statusCode === r.X1.BAD_REQUEST) && (e.errorStatusCode = r.X1.NOT_FOUND),
                                    e.loadingState !== o.GuX.IDLE && (e.loadingState = o.GuX.REJECT);
                            },
                            reset() {
                                (e.loadingState = o.GuX.IDLE),
                                    (e.errorStatusCode = null),
                                    (e.variant = null),
                                    (e.id = null),
                                    (e.tracks = null),
                                    (e.meta = null),
                                    (e.withAnimation = !0),
                                    (e.shouldAutoStartPlaying = !0),
                                    (e.shouldSendEventOnTracksShowed = !0),
                                    (e.sonataStatusBeforeTrailerStart = s.MT.IDLE),
                                    (e.isManuallyPaused = !0),
                                    (e.title = null),
                                    (e.shareable = null),
                                    (e.personalColor = null);
                            },
                        };
                        return t;
                    });
            var N = a(62936),
                A = a(19718),
                S = a(44020),
                y = a(47480),
                C = a(8669),
                f = a(5099),
                T = a(85742),
                E = a(4714),
                L = a(23480),
                j = a(11584);
            let P = () => {
                let e = (0, j.st)(),
                    t = (0, o.UlF)(),
                    { hash: a } = (0, j.gf)(),
                    { pageId: i } = (0, o.$au)();
                return (0, S.useCallback)(
                    (n) => {
                        if (!e || !i) return;
                        let r = { hash: a, pageId: o.Wft[i], mainObjectType: L.ky.Trailer, mainObjectId: n },
                            l = (0, L.Fx)({ params: r, logger: t, context: 'useSendEventOnTrailerClosed' });
                        l && (0, L.XB)(e.evgenInstance, l);
                    },
                    [e, a, t, i],
                );
            };
            var R = a(79950),
                k = a(33782),
                M = a(85906);
            let w = () => {
                    let e = (0, j.st)(),
                        t = (0, o.UlF)(),
                        { hash: a } = (0, j.gf)(),
                        { pageId: i } = (0, o.$au)();
                    return (0, S.useCallback)(
                        (n, r) => {
                            if (!e || !i) return;
                            let l = { hash: a, pageId: o.Wft[i], mainObjectType: L.ky.Trailer, mainObjectId: n };
                            r && ((l.actionType = L.X2.Pause), (l.userInteractionType = L.gi.Tap));
                            let s = (0, L.Fx)({ params: l, logger: t, context: 'useSendEventOnTrailerStarted' });
                            s &&
                                (r && ((e) => 'object' == typeof e && null !== e && 'actionType' in e && 'mainObjectId' in e)(s)
                                    ? (0, L.bv)(e.evgenInstance, s)
                                    : (0, L.e7)(e.evgenInstance, s));
                        },
                        [e, a, t, i],
                    );
                },
                O = (e) => {
                    let { variant: t, blockId: a, meta: i } = e,
                        n = ((e) => {
                            switch (e) {
                                case p.ALBUM:
                                    return o._Q$.ALBUM;
                                case p.ARTIST:
                                    return o._Q$.ARTIST;
                                case p.PLAYLIST:
                                    return o._Q$.PLAYLIST;
                                case p.TRACK:
                                    return o._Q$.TRACK;
                            }
                        })(t),
                        r = ((e) => {
                            switch (e) {
                                case p.ALBUM:
                                    return v.K.Album;
                                case p.ARTIST:
                                    return v.K.Artist;
                                case p.PLAYLIST:
                                    return v.K.Playlist;
                                case p.TRACK:
                                default:
                                    return v.K.Various;
                            }
                        })(t),
                        l = (null == i ? void 0 : i.uuid) || (null == i ? void 0 : i.id);
                    return (0, o.fyy)({ pageId: n, blockId: a, contextId: l, contextType: r, pageEntityId: l });
                },
                B = (e) => {
                    let { variant: t, id: a, from: i, uuid: n, utmLink: r } = e;
                    switch (t) {
                        case p.ALBUM:
                            return { type: v.K.Album, trailer: !0, meta: { id: Number(a) }, from: i, utmLink: r };
                        case p.ARTIST:
                            return { type: v.K.Artist, trailer: !0, meta: { id: String(a) }, from: i, utmLink: r };
                        case p.PLAYLIST:
                            return { type: v.K.Playlist, trailer: !0, meta: { id: String(a), uuid: n }, from: i, utmLink: r };
                        case p.TRACK:
                            return { type: v.K.Various, trailer: !0, meta: { id: String(a) }, from: i, utmLink: r };
                    }
                };
            var D = a(26731),
                K = a(20418),
                U = a(11186),
                G = a.n(U);
            let V = (0, A.PA)(() => {
                    let { trailer: e } = (0, o.Pjs)(),
                        { variant: t, id: a } = e,
                        i = (0, S.useCallback)(() => {
                            if (t && a)
                                switch (t) {
                                    case p.ALBUM:
                                        e.getAlbumTrailer(Number(a));
                                        break;
                                    case p.ARTIST:
                                        e.getArtistTrailer(a);
                                        break;
                                    case p.PLAYLIST:
                                        e.getPlaylistTrailer(a);
                                        break;
                                    case p.TRACK:
                                        e.getTrackTrailer(a);
                                }
                        }, [a, e, t]);
                    return (0, N.jsxs)('div', {
                        className: G().root,
                        children: [
                            (0, N.jsxs)('div', {
                                className: G().textContainer,
                                children: [
                                    (0, N.jsx)(K.Heading, {
                                        variant: 'h2',
                                        className: G().title,
                                        size: 'xs',
                                        weight: 'bold',
                                        children: (0, N.jsx)(D.A, { id: 'error-messages.something-went-wrong' }),
                                    }),
                                    (0, N.jsx)(K.Caption, {
                                        className: G().description,
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: (0, N.jsx)(D.A, { id: 'trailer.something-went-wrong-description' }),
                                    }),
                                ],
                            }),
                            (0, N.jsx)(f.$, {
                                onClick: i,
                                color: 'secondary',
                                size: 'default',
                                radius: 'xxxl',
                                children: (0, N.jsx)(K.Caption, { type: 'controls', variant: 'span', size: 'm', children: (0, N.jsx)(D.A, { id: 'page-error.reload' }) }),
                            }),
                        ],
                    });
                }),
                z = () =>
                    (0, N.jsx)('div', {
                        className: G().root,
                        children: (0, N.jsxs)('div', {
                            className: G().textContainer,
                            children: [
                                (0, N.jsx)(K.Heading, {
                                    variant: 'h2',
                                    className: G().title,
                                    size: 'xs',
                                    weight: 'bold',
                                    children: (0, N.jsx)(D.A, { id: 'trailer.not-found-title' }),
                                }),
                                (0, N.jsx)(K.Caption, {
                                    className: G().description,
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: (0, N.jsx)(D.A, { id: 'trailer.not-found-description' }),
                                }),
                            ],
                        }),
                    });
            var F = a(30388);
            let W = () => {
                    let e = (0, j.st)(),
                        t = (0, o.UlF)(),
                        { hash: a } = (0, j.gf)(),
                        { pageId: i } = (0, o.$au)();
                    return (0, S.useCallback)(
                        (n, r) => {
                            if (!e || !i) return;
                            let l = { hash: a, pageId: o.Wft[i], mainObjectType: L.ky.Trailer, mainObjectId: n, from: L.QT.TrailerScreen, to: o.Wft[r] },
                                s = (0, L.Fx)({ params: l, logger: t, context: 'useSendEventOnTrailerNavigated' });
                            s && (0, L.Mu)(e.evgenInstance, s);
                        },
                        [e, a, t, i],
                    );
                },
                X = { [p.ALBUM]: L.ky.Album, [p.ARTIST]: L.ky.Artist, [p.PLAYLIST]: L.ky.Playlist, [p.TRACK]: L.ky.Track },
                Y = { [p.ALBUM]: o._Q$.ALBUM, [p.ARTIST]: o._Q$.ARTIST, [p.PLAYLIST]: o._Q$.PLAYLIST };
            var $ = a(78462),
                H = a.n($);
            let q = (0, A.PA)((e) => {
                var t, a;
                let { variant: i, isShimmerVisible: n, isShimmerActive: r, className: l } = e,
                    {
                        trailer: { state: d, meta: c, modal: u, objectId: m, resetUtmLink: _ },
                        paywall: { modal: g },
                    } = (0, o.Pjs)(),
                    h = (0, o.NPu)(),
                    b = (0, o.eGp)(),
                    { from: I } = O({ variant: i, blockId: o.UfI.TRAILER }),
                    x = W(),
                    A = P(),
                    y = (() => {
                        let e = (0, j.st)(),
                            t = (0, o.UlF)(),
                            { hash: a } = (0, j.gf)(),
                            { pageId: i } = (0, o.$au)();
                        return (0, S.useCallback)(
                            (n, r) => {
                                if (!e || !i) return;
                                let l = { hash: a, pageId: o.Wft[i], mainObjectType: n, mainObjectId: r },
                                    s = (0, L.Fx)({ params: l, logger: t, context: 'useSendEventOnTrailerEntityStarted' });
                                s && (0, L.e7)(e.evgenInstance, s);
                            },
                            [e, a, t, i],
                        );
                    })(),
                    E = (0, o.ZpR)(null != (a = null == c ? void 0 : c.url) ? a : ''),
                    k = (0, S.useCallback)(() => {
                        E();
                        let e = Y[i];
                        e && x(m, e);
                    }, [E, m, x, i]),
                    M = ((e) => {
                        let {
                            trailer: { meta: t },
                            artist: a,
                            album: i,
                            playlist: n,
                        } = (0, o.Pjs)();
                        switch (e) {
                            case p.ALBUM:
                                return i.id === Number(null == t ? void 0 : t.id);
                            case p.ARTIST:
                                return a.id === (null == t ? void 0 : t.id);
                            case p.PLAYLIST:
                                return n.uuid === (null == t ? void 0 : t.uuid);
                            case p.TRACK:
                                return !1;
                        }
                    })(i),
                    w = !M && i !== p.TRACK,
                    B = (0, S.useCallback)(() => {
                        var e, t, a, n;
                        if (h) return void g.open();
                        let r =
                            null == b || null == (a = b.playbackController.activePlayback.value) || null == (t = a.state) || null == (e = t.currentContext.value)
                                ? void 0
                                : e.utmLink;
                        null == b || b.stop(o.V_r.TRAILER), _(), u.close(), A(m), w && k();
                        let l = d.status !== s.MT.PLAYING || i === p.ALBUM ? { index: 0 } : { entityId: null == (n = d.entityMeta) ? void 0 : n.id },
                            x = ((e) => {
                                let { variant: t, id: a, from: i, uuid: n, utmLink: r } = e;
                                switch (t) {
                                    case p.ALBUM:
                                        return { type: v.K.Album, meta: { id: Number(a) }, from: i, utmLink: r };
                                    case p.ARTIST:
                                        return { type: v.K.Artist, meta: { id: String(a) }, from: i, utmLink: r };
                                    case p.PLAYLIST:
                                        return { type: v.K.Playlist, meta: { id: String(a), uuid: n }, from: i, utmLink: r };
                                    case p.TRACK:
                                        return { type: v.K.Various, meta: { id: String(a) }, from: i, utmLink: r };
                                }
                            })({ variant: i, id: null == c ? void 0 : c.id, uuid: null == c ? void 0 : c.uuid, from: I, utmLink: r });
                        null == b ||
                            b.playContext({ contextData: x, queueParams: l }).then(() => {
                                (null == c ? void 0 : c.id) && y(X[i], c.id);
                            });
                    }, [
                        b,
                        _,
                        u,
                        A,
                        m,
                        w,
                        d.status,
                        null == (t = d.entityMeta) ? void 0 : t.id,
                        i,
                        null == c ? void 0 : c.id,
                        null == c ? void 0 : c.uuid,
                        I,
                        k,
                        y,
                        h,
                        g,
                    ]),
                    K = (0, S.useMemo)(
                        () =>
                            (0, N.jsxs)('div', {
                                className: (0, R.$)(H().root, l),
                                children: [
                                    (0, N.jsx)(f.$, {
                                        radius: 'xxxl',
                                        size: 'default',
                                        color: 'secondary',
                                        icon: (0, N.jsx)(T.Icon, { variant: 'play', size: 'xxxs' }),
                                        className: H().button,
                                        onClick: B,
                                        ...(0, C.Am)(C.e8.trailer.TRAILER_LISTEN_FULL_VERSION_BUTTON),
                                        children: (0, N.jsx)(D.A, { id: 'trailer.listen-full-version' }),
                                    }),
                                    w &&
                                        (0, N.jsx)(f.$, {
                                            radius: 'xxxl',
                                            size: 'default',
                                            color: 'secondary',
                                            onClick: k,
                                            className: H().button,
                                            ...(0, C.Am)(C.e8.trailer.TRAILER_NAVIGATE_TO_ENTITY_BUTTON),
                                            children: (0, N.jsx)(D.A, { id: 'trailer.navigate' }),
                                        }),
                                ],
                            }),
                        [l, B, k, w],
                    );
                return n
                    ? ((e) => {
                          let { isActive: t, className: a, isCurrentEntityPage: i } = e;
                          return (0, N.jsxs)('div', {
                              className: (0, R.$)(H().root, a),
                              children: [
                                  (0, N.jsx)(F.Shimmer, { isActive: t, radius: 'xxxl', className: H().playButtonShimmer }),
                                  i && (0, N.jsx)(F.Shimmer, { isActive: t, radius: 'xxxl', className: H().linkButtonShimmer }),
                              ],
                          });
                      })({ isActive: r, isCurrentEntityPage: M, className: l })
                    : K;
            });
            var Z = a(59935),
                Q = a(13030),
                J = a(56721),
                ee = a(29234),
                et = a.n(ee);
            let ea = (0, A.PA)((e) => {
                var t;
                let { variant: a, isShimmerVisible: i, isShimmerActive: n, className: r } = e,
                    {
                        trailer: { meta: l, objectId: s, utmLink: d, personalColor: c, shareable: u, title: m, state: _ },
                        playlist: { shouldShowTrailerOnboarding: g, isRewind2024Playlist: v },
                    } = (0, o.Pjs)(),
                    { from: h } = O({ variant: a, blockId: o.UfI.TRAILER, meta: l }),
                    b = W(),
                    I = w(),
                    x = (0, o.brA)(),
                    A = a === p.ARTIST ? 'round' : 's',
                    { notify: y } = (0, o.lkh)(),
                    E = (0, o.PT7)(),
                    L = (0, N.jsx)(D.A, { id: 'onboarding.rewind-trailer', values: { br: (0, N.jsx)('br', {}) } }),
                    { togglePlay: j, isPlaying: P } = (0, o.Dx4)({
                        playContextParams: {
                            contextData: B({ variant: a, id: null == l ? void 0 : l.id, uuid: null == l ? void 0 : l.uuid, from: h, utmLink: d }),
                            loadContextMeta: !0,
                        },
                        sonataState: _,
                        playbackId: o.V_r.TRAILER,
                    }),
                    k = (0, Z.c)(() => {
                        E() || (I(s, P), j(), x(!P));
                    }),
                    U = (0, S.useCallback)(() => {
                        let e = Y[a];
                        e && b(s, e);
                    }, [s, b, a]),
                    G = (0, o.R4Z)(c || 0),
                    V = (0, o.mBl)(c || 0),
                    z = (0, S.useMemo)(() => {
                        let e, t;
                        return (
                            'number' == typeof c ? ((e = G), (t = V)) : (e = { '--trailer-color': null == l ? void 0 : l.averageColor }),
                            (0, N.jsxs)('div', {
                                className: et().coverContainer,
                                ...(0, C.Am)(C.e8.trailer.TRAILER_COVER),
                                children: [
                                    (0, N.jsx)(J.Paper, {
                                        radius: A,
                                        className: et().cover,
                                        style: t,
                                        withShadow: !0,
                                        children: (0, N.jsx)(Q.Image, {
                                            'aria-hidden': !0,
                                            src: null == l ? void 0 : l.coverUri,
                                            size: 100,
                                            fit: 'cover',
                                            withAvatarReplace: !0,
                                        }),
                                    }),
                                    (0, N.jsx)('div', {
                                        className: et().iconContainer,
                                        style: e,
                                        children: (0, N.jsx)(T.Icon, { variant: 'trailer', size: 'xs', className: et().icon }),
                                    }),
                                ],
                            })
                        );
                    }, [A, null == l ? void 0 : l.coverUri, V, null == l ? void 0 : l.averageColor, c, G]),
                    X = (0, S.useMemo)(() => {
                        let e = null == l ? void 0 : l.url;
                        return e
                            ? (0, N.jsx)(M.N_, {
                                  href: e,
                                  className: et().link,
                                  onClick: U,
                                  ...(0, C.Am)(C.e8.trailer.TRAILER_ENTITY_TITLE),
                                  children: (0, N.jsx)(K.Caption, {
                                      variant: 'span',
                                      type: 'controls',
                                      lineClamp: 1,
                                      className: et().text,
                                      children: null == l ? void 0 : l.title,
                                  }),
                              })
                            : (0, N.jsx)(K.Caption, {
                                  variant: 'span',
                                  type: 'controls',
                                  lineClamp: 1,
                                  className: et().text,
                                  ...(0, C.Am)(C.e8.trailer.TRAILER_ENTITY_TITLE),
                                  children: null == l ? void 0 : l.title,
                              });
                    }, [U, l]),
                    $ = (0, S.useMemo)(
                        () =>
                            (0, N.jsxs)('div', {
                                className: et().textContainer,
                                children: [
                                    (0, N.jsx)(K.Heading, {
                                        variant: 'h1',
                                        className: (0, R.$)(et().text, et().title),
                                        lineClamp: 1,
                                        ...(0, C.Am)(C.e8.trailer.TRAILER_MODAL_TITLE),
                                        children: m,
                                    }),
                                    X,
                                ],
                            }),
                        [X, m],
                    ),
                    { pattern: H, params: q } = null != (t = null == l ? void 0 : l.getSharingProps(a)) ? t : { pattern: o.Zyd.main.href, params: {} },
                    { shareLink: ee } = (0, o.bNS)(H, { params: q, query: { [o.K3F.OPEN_TRAILER]: 'true' } }),
                    ea = (0, S.useCallback)(async () => {
                        await window.navigator.clipboard.writeText(ee),
                            y(
                                (0, N.jsx)(M.Do, {
                                    entityTitle: null == l ? void 0 : l.title,
                                    entityVariant: ((e) => {
                                        switch (e) {
                                            case p.ALBUM:
                                                return o.Yxq.ALBUM;
                                            case p.ARTIST:
                                                return o.Yxq.ARTIST;
                                            case p.PLAYLIST:
                                                return o.Yxq.PLAYLIST;
                                            case p.TRACK:
                                                return o.Yxq.TRACK;
                                        }
                                    })(a),
                                }),
                                { containerId: o.uQT.INFO },
                            );
                    }, [ee, y, null == l ? void 0 : l.title, a]);
                return (0, N.jsxs)('div', {
                    className: (0, R.$)(et().root, r),
                    ...(0, C.Am)(C.e8.trailer.TRAILER_HEADER),
                    children: [
                        i ? (0, N.jsx)('div', { className: et().coverContainer, children: (0, N.jsx)(F.Shimmer, { isActive: n, radius: A, className: et().cover }) }) : z,
                        i
                            ? ((e) =>
                                  (0, N.jsxs)('div', {
                                      className: et().textContainer,
                                      children: [
                                          (0, N.jsx)('div', {
                                              className: et().shimmerContainer,
                                              children: (0, N.jsx)(F.Shimmer, { isActive: e, radius: 'xl', className: et().titleShimmer }),
                                          }),
                                          (0, N.jsx)('div', {
                                              className: et().shimmerContainer,
                                              children: (0, N.jsx)(F.Shimmer, { isActive: e, radius: 'xl', className: et().descriptionShimmer }),
                                          }),
                                      ],
                                  }))(n)
                            : $,
                        !i &&
                            u &&
                            (0, N.jsx)(f.$, {
                                className: et().share,
                                icon: (0, N.jsx)(T.Icon, { variant: 'share', size: 'xxs' }),
                                onClick: ea,
                                variant: 'text',
                                withRipple: !1,
                                withHover: !1,
                            }),
                        !i &&
                            (0, N.jsx)(M.cv, {
                                customMessage: v ? L : void 0,
                                shouldForceOpenTooltip: !!g,
                                children: (0, N.jsx)(M.DM, {
                                    className: et().playButton,
                                    iconSize: 'm',
                                    variant: 'filled',
                                    isPlaying: P,
                                    iconClassName: et().playButtonIcon,
                                    onClick: k,
                                }),
                            }),
                    ],
                });
            });
            var ei = a(1048),
                en = a.n(ei);
            let er = (0, A.PA)((e) => {
                let { variant: t, track: a, playContextParams: i, viewUuid: n } = e,
                    {
                        trailer: { meta: r, objectId: l, shouldSendEventOnTracksShowed: d, setShouldSendEventOnTracksShowed: c },
                    } = (0, o.Pjs)(),
                    u = t === p.ALBUM ? m.g2 : m.nP,
                    { isActive: _, progress: g } = ((e, t) => {
                        var a;
                        let i = (0, o.eGp)(),
                            {
                                trailer: { state: n },
                            } = (0, o.Pjs)(),
                            [r, l] = (0, S.useState)(0),
                            d = (null == (a = n.entityMeta) ? void 0 : a.id) === e;
                        return (
                            (0, S.useEffect)(() => {
                                let e =
                                    null == i
                                        ? void 0
                                        : i.getState(o.V_r.TRAILER).playerState.progress.onChange(() => {
                                              let e,
                                                  a = i.getState(o.V_r.TRAILER).playerState,
                                                  n = a.progress.value;
                                              (e = t ? t / 1e3 : n.duration), d || l(0), a.status.value === s.MT.PLAYING && d && l((n.position / e) * 100);
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [t, d, i]),
                            { isActive: d, progress: r }
                        );
                    })(a.id, a.durationMs),
                    v = ((e, t) => {
                        let a = (0, o.UlF)(),
                            i = (0, j.st)(),
                            { hash: n } = (0, j.gf)(),
                            { pageId: r } = (0, o.$au)(),
                            { blockType: l, blockId: s, blockPosX: d, blockPosY: c } = (0, o.N8n)(),
                            { objectType: u, objectsCount: m, objectId: _, objectPosX: p, objectPosY: g } = (0, o.Jfv)();
                        return (0, S.useCallback)(() => {
                            if (!i || !r) return;
                            let v = o.Wft[r];
                            if (!v) return;
                            let h = {
                                    hash: n,
                                    pageId: v,
                                    mainObjectType: L.ky.Trailer,
                                    mainObjectId: e,
                                    entityType: l,
                                    entityId: s,
                                    entityPosX: d,
                                    entityPosY: c,
                                    objectsCount: m,
                                    viewUuid: t,
                                    objectType: u,
                                    objectId: _,
                                    objectPosX: p,
                                    objectPosY: g,
                                },
                                b = (0, L.Fx)({ params: h, logger: a, context: 'useSendEventOnSmartPreviewShowed' });
                            b && (0, L.Pf)(i.evgenInstance, b);
                        }, [i, s, d, c, l, n, a, e, _, p, g, u, m, r, t]);
                    })(l, n),
                    h = ((e) => {
                        let t = (0, o.UlF)(),
                            a = (0, j.st)(),
                            { hash: i } = (0, j.gf)(),
                            { pageId: n } = (0, o.$au)(),
                            { blockType: r, blockId: l, blockPosX: s, blockPosY: d } = (0, o.N8n)(),
                            { objectType: c, objectsCount: u, objectId: m, objectPosX: _, objectPosY: p } = (0, o.Jfv)();
                        return (0, S.useCallback)(
                            (g) => {
                                if (!a || !n) return;
                                let v = o.Wft[n];
                                if (!v) return;
                                let h = {
                                    hash: i,
                                    pageId: v,
                                    mainObjectType: L.ky.Trailer,
                                    mainObjectId: e,
                                    entityType: r,
                                    entityId: l,
                                    entityPosX: s,
                                    entityPosY: d,
                                    objectsCount: u,
                                    objectType: c,
                                    objectId: m,
                                    objectPosX: _,
                                    objectPosY: p,
                                };
                                g || ((h.actionType = L.X2.Pause), (h.userInteractionType = L.gi.Tap));
                                let b = (0, L.Fx)({ params: h, logger: t, context: 'useSendEventOnSmartPreviewStarted' });
                                b &&
                                    (!g && ((e) => 'object' == typeof e && null !== e && 'actionType' in e && 'mainObjectId' in e)(b)
                                        ? (0, L.h_)(a.evgenInstance, b)
                                        : (0, L.er)(a.evgenInstance, b));
                            },
                            [a, l, s, d, r, i, t, e, m, _, p, c, u, n],
                        );
                    })(l),
                    b = ((e) => {
                        let t = (0, o.UlF)(),
                            a = (0, j.st)(),
                            { hash: i } = (0, j.gf)(),
                            { pageId: n } = (0, o.$au)(),
                            { blockType: r, blockId: l, blockPosX: s, blockPosY: d } = (0, o.N8n)(),
                            { objectType: c, objectsCount: u, objectId: m, objectPosX: _, objectPosY: p } = (0, o.Jfv)();
                        return (0, S.useCallback)(
                            (g) => {
                                if (!a || !n) return;
                                let v = o.Wft[n];
                                if (!v) return;
                                let h = {
                                    hash: i,
                                    pageId: v,
                                    mainObjectType: L.ky.Trailer,
                                    mainObjectId: e,
                                    entityType: r,
                                    entityId: l,
                                    entityPosX: s,
                                    entityPosY: d,
                                    objectsCount: u,
                                    objectType: c,
                                    objectId: m,
                                    objectPosX: _,
                                    objectPosY: p,
                                    userInteractionType: L.gi.Tap,
                                };
                                g ? (h.actionType = L.X2.Like) : (h.actionType = L.X2.Unlike);
                                let b = (0, L.Fx)({ params: h, logger: t, context: 'useSendEventOnSmartPreviewLike' });
                                b && (0, L.h_)(a.evgenInstance, b);
                            },
                            [a, l, s, d, r, i, t, e, m, _, p, c, u, n],
                        );
                    })(l),
                    I = ((e) => {
                        let t = (0, o.UlF)(),
                            a = (0, j.st)(),
                            { hash: i } = (0, j.gf)(),
                            { pageId: n } = (0, o.$au)(),
                            { blockType: r, blockId: l, blockPosX: s, blockPosY: d } = (0, o.N8n)(),
                            { objectType: c, objectsCount: u, objectId: m, objectPosX: _, objectPosY: p } = (0, o.Jfv)();
                        return (0, S.useCallback)(
                            (g) => {
                                if (!a || !n) return;
                                let v = o.Wft[n];
                                if (!v) return;
                                let h = {
                                    hash: i,
                                    pageId: v,
                                    mainObjectType: L.ky.Trailer,
                                    mainObjectId: e,
                                    entityType: r,
                                    entityId: l,
                                    entityPosX: s,
                                    entityPosY: d,
                                    objectsCount: u,
                                    objectType: c,
                                    objectId: m,
                                    objectPosX: _,
                                    objectPosY: p,
                                    userInteractionType: L.gi.Tap,
                                };
                                g ? (h.actionType = L.X2.Dislike) : (h.actionType = L.X2.Undislike);
                                let b = (0, L.Fx)({ params: h, logger: t, context: 'useSendEventOnSmartPreviewDislike' });
                                b && (0, L.h_)(a.evgenInstance, b);
                            },
                            [a, l, s, d, r, i, t, e, m, _, p, c, u, n],
                        );
                    })(l);
                (0, S.useEffect)(() => {
                    d && (v(), c(!1));
                }, [v, c, d]);
                let x = (0, S.useMemo)(() => ({ '--track-progress': ''.concat(g || 0, '%') }), [g]);
                return (0, N.jsx)('div', {
                    className: (0, R.$)(en().root, { [en().root_active]: _ }),
                    style: x,
                    children: (0, N.jsx)(u, {
                        position: a.positionInAlbum,
                        withLightning: !!(null == a ? void 0 : a.isBest),
                        track: a,
                        playContextParams: i,
                        albumArtists: null == r ? void 0 : r.albumArtists,
                        onPlayClick: h,
                        onLikeClick: b,
                        onDislikeClick: I,
                    }),
                });
            });
            var el = a(14786),
                es = a.n(el);
            let eo = (0, A.PA)((e) => {
                let { variant: t } = e,
                    {
                        trailer: a,
                        playlist: { setShouldShowTrailerOnboarding: i },
                    } = (0, o.Pjs)(),
                    {
                        isLoading: n,
                        isRejected: r,
                        tracks: l,
                        meta: s,
                        state: d,
                        shouldAutoStartPlaying: c,
                        setShouldAutoStartPlaying: u,
                        isNotFound: m,
                        modal: _,
                        utmLink: g,
                    } = a,
                    v = (0, o.eGp)(),
                    { from: h } = O({ variant: t, blockId: o.UfI.TRAILER, meta: s }),
                    b = (() => {
                        let e = (0, j.st)(),
                            t = (0, o.UlF)(),
                            { hash: a } = (0, j.gf)(),
                            { pageId: i } = (0, o.$au)();
                        return (0, S.useCallback)(
                            (n) => {
                                if (!e || !i) return;
                                let r = { hash: a, pageId: o.Wft[i], mainObjectType: L.ky.Trailer, mainObjectId: n },
                                    l = (0, L.Fx)({ params: r, logger: t, context: 'useSendEventOnTrailerOpened' });
                                l && (0, L.w5)(e.evgenInstance, l);
                            },
                            [e, a, t, i],
                        );
                    })(),
                    I = w(),
                    [x, A] = (0, S.useState)(!1),
                    y = (0, S.useRef)((0, k.A)()),
                    C = n || r,
                    { isPlaying: f } = (0, o.Dx4)({
                        playContextParams: {
                            contextData: B({ variant: t, id: null == s ? void 0 : s.id, uuid: null == s ? void 0 : s.uuid, from: h, utmLink: g }),
                            loadContextMeta: !0,
                        },
                        sonataState: a.state,
                        playbackId: o.V_r.TRAILER,
                    });
                (0, S.useEffect)(() => {
                    _.isOpened &&
                        (null == s ? void 0 : s.id) &&
                        c &&
                        (b(a.objectId),
                        null == v ||
                            v
                                .playContext(
                                    {
                                        contextData: B({ variant: t, id: null == s ? void 0 : s.id, uuid: null == s ? void 0 : s.uuid, from: h, utmLink: g }),
                                        queueParams: { index: 0 },
                                        loadContextMeta: !0,
                                    },
                                    o.V_r.TRAILER,
                                )
                                .then(() => {
                                    A(!0);
                                }),
                        u(!1));
                }, [h, null == s ? void 0 : s.id, null == s ? void 0 : s.uuid, _.isOpened, b, I, u, c, v, d.status, a.objectId, t, g, f]),
                    (0, S.useEffect)(() => {
                        x && (f ? (I(a.objectId), A(!1)) : i(!0));
                    }, [x, f, I, a.objectId, i]);
                let T = (0, S.useCallback)(
                        (e) => ({
                            contextData: B({ variant: t, id: null == s ? void 0 : s.id, uuid: null == s ? void 0 : s.uuid, from: h, utmLink: g }),
                            queueParams: { index: e },
                            loadContextMeta: !0,
                        }),
                        [h, null == s ? void 0 : s.id, null == s ? void 0 : s.uuid, t, g],
                    ),
                    E = (0, S.useMemo)(
                        () =>
                            C
                                ? ((e, t) => {
                                      let a = t === p.ALBUM ? o.Xjt.ALBUM : o.Xjt.PLAYLIST;
                                      return Array.from({ length: t === p.TRACK ? 1 : 5 }, (t, i) =>
                                          (0, N.jsx)(
                                              'div',
                                              {
                                                  className: es().trackContainer,
                                                  children: (0, N.jsx)(M.DS, {
                                                      isActive: e,
                                                      className: (0, R.$)(es().trackShimmer, { [es().albumShimmer]: a === o.Xjt.ALBUM }),
                                                      variant: a,
                                                  }),
                                              },
                                              i,
                                          ),
                                      );
                                  })(n, t)
                                : null == l
                                  ? void 0
                                  : l.map((e, a) =>
                                        (0, N.jsx)(
                                            o.FoH,
                                            {
                                                blockType: L.ky.SmartPreview,
                                                blockId: e.id,
                                                blockPosX: 1,
                                                blockPosY: 1,
                                                children: (0, N.jsx)(o.Bki, {
                                                    objectType: L.ky.SmartPreview,
                                                    objectId: e.id,
                                                    objectPosX: 1,
                                                    objectPosY: a + 1,
                                                    objectsCount: l.length,
                                                    children: (0, N.jsx)(er, { variant: t, track: e, playContextParams: T(a), viewUuid: y.current }),
                                                }),
                                            },
                                            e.id,
                                        ),
                                    ),
                        [T, n, C, l, t],
                    );
                return r
                    ? m
                        ? (0, N.jsx)(z, {})
                        : (0, N.jsx)(V, {})
                    : (0, N.jsxs)('div', {
                          className: es().root,
                          children: [
                              (0, N.jsx)(ea, { isShimmerVisible: C, isShimmerActive: n, variant: t, className: es().header }),
                              E,
                              (0, N.jsx)(q, { isShimmerVisible: C, isShimmerActive: n, variant: t, className: es().footer }),
                          ],
                      });
            });
            var ed = a(4520),
                ec = a.n(ed);
            let eu = (0, A.PA)(() => {
                let {
                        settings: { isMobile: e },
                        trailer: t,
                        sonataState: a,
                        fullscreenPlayer: i,
                    } = (0, o.Pjs)(),
                    n = (0, o.eGp)(),
                    { contentRef: r } = (0, o.gKY)(),
                    { formatMessage: l } = (0, y.A)(),
                    d = P();
                (() => {
                    let { trailer: e } = (0, o.Pjs)(),
                        t = (0, o.eGp)(),
                        a = (0, o.zwV)(),
                        i = (0, u.KX)(e.state.entityMeta),
                        n = (0, u.mW)(e.state.entityMeta);
                    (0, S.useEffect)(() => {
                        e.modal.isOpened
                            ? (null == a || a.disable(o.Mo.MAIN),
                              null == a || a.enable(o.Mo.MAIN, o.lbr.TOGGLE_MUTE),
                              null == a || a.enable(o.Mo.MAIN, o.lbr.INCREASE_VOLUME),
                              null == a || a.enable(o.Mo.MAIN, o.lbr.DECREASE_VOLUME),
                              null == a || a.enable(o.Mo.MAIN, o.lbr.TOGGLE_FULLSCREEN_PLAYER),
                              null == a || a.enable(o.Mo.TRAILER))
                            : (null == a || a.disable(o.Mo.TRAILER), null == a || a.enable(o.Mo.MAIN));
                    }, [a, e.modal.isOpened]),
                        (0, S.useEffect)(
                            () => (
                                null == a ||
                                    a.addShortcutsListener(o.Mo.TRAILER, o.lbr.TOGGLE_PLAY, () => {
                                        null == t || t.togglePause(o.V_r.TRAILER);
                                    }),
                                null == a || a.addShortcutsListener(o.Mo.TRAILER, o.lbr.LIKE, i),
                                null == a || a.addShortcutsListener(o.Mo.TRAILER, o.lbr.DISLIKE, n),
                                null == a ||
                                    a.addShortcutsListener(o.Mo.TRAILER, o.lbr.MOVE_FORWARD, async () => {
                                        var e;
                                        (null == t || null == (e = t.getState(o.V_r.TRAILER).currentContext.value) ? void 0 : e.availableActions.moveForward.value) &&
                                            (await (null == t ? void 0 : t.moveForward(o.V_r.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(o.Mo.TRAILER, o.lbr.MOVE_BACKWARD, async () => {
                                        var e;
                                        (null == t || null == (e = t.getState(o.V_r.TRAILER).currentContext.value) ? void 0 : e.availableActions.moveBackward.value) &&
                                            (await (null == t ? void 0 : t.moveBackward(o.V_r.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(o.Mo.TRAILER, o.lbr.SLIDE_FORWARD, async () => {
                                        (null == t ? void 0 : t.getState(o.V_r.TRAILER).playerState.progress.value.duration) &&
                                            (await (null == t ? void 0 : t.slideForward(1, o.V_r.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(o.Mo.TRAILER, o.lbr.SLIDE_BACKWARD, async () => {
                                        (null == t ? void 0 : t.getState(o.V_r.TRAILER).playerState.progress.value.duration) &&
                                            (await (null == t ? void 0 : t.slideBackward(1, o.V_r.TRAILER)));
                                    }),
                                () => {
                                    null == a || a.removeShortcutsListener(o.Mo.TRAILER, o.lbr.TOGGLE_PLAY),
                                        null == a || a.removeShortcutsListener(o.Mo.TRAILER, o.lbr.LIKE),
                                        null == a || a.removeShortcutsListener(o.Mo.TRAILER, o.lbr.DISLIKE),
                                        null == a || a.removeShortcutsListener(o.Mo.TRAILER, o.lbr.MOVE_FORWARD),
                                        null == a || a.removeShortcutsListener(o.Mo.TRAILER, o.lbr.MOVE_BACKWARD),
                                        null == a || a.removeShortcutsListener(o.Mo.TRAILER, o.lbr.SLIDE_FORWARD),
                                        null == a || a.removeShortcutsListener(o.Mo.TRAILER, o.lbr.SLIDE_BACKWARD);
                                }
                            ),
                            [n, i, a, t],
                        );
                })(),
                    (0, S.useEffect)(() => {
                        let e =
                                null == n
                                    ? void 0
                                    : n.getState(o.V_r.TRAILER).queueState.currentEntity.onChange((e) => {
                                          var a;
                                          let i = null == e ? void 0 : e.context.data.type,
                                              n = null == e ? void 0 : e.context.data.meta.id;
                                          t.state.setEntityMeta(null != (a = null == e ? void 0 : e.entity) ? a : null),
                                              i && t.state.setContextType(i),
                                              n && t.state.setContextId(n);
                                      }),
                            a =
                                null == n
                                    ? void 0
                                    : n.getState(o.V_r.TRAILER).playerState.status.onChange((e) => {
                                          e && t.state.setStatus(e);
                                      });
                        return () => {
                            null == e || e(), null == a || a();
                        };
                    }, [n, t.state]);
                let c = (0, S.useCallback)(() => {
                        null == n ||
                            n.stop(o.V_r.TRAILER).finally(() => {
                                t.sonataStatusBeforeTrailerStart !== s.MT.PLAYING || t.isManuallyPaused || null == n || n.resume(),
                                    t.setAnimationState(!0),
                                    t.resetUtmLink(),
                                    t.modal.close(),
                                    d(t.objectId);
                            });
                    }, [d, n, t]),
                    m = (0, S.useCallback)(
                        (e) => {
                            t.modal.onOpenChange(e), e || c();
                        },
                        [c, t.modal],
                    );
                return (
                    (0, S.useEffect)(() => {
                        t.modal.isOpened && t.isResolved && a.status === s.MT.PLAYING && c();
                    }, [c, a.status, t, t.modal.isOpened]),
                    (0, S.useEffect)(() => {
                        t.modal.isOpened && t.isResolved && t.setAnimationState(!1);
                    }, [t]),
                    (0, S.useEffect)(() => {
                        i.modal.isOpened && t.modal.isOpened && c();
                    }, [i.modal.isOpened, c, t.modal.isOpened]),
                    (0, N.jsxs)(E.a, {
                        size: 'fitContent',
                        placement: e ? 'default' : 'right',
                        open: t.modal.isOpened,
                        onOpenChange: m,
                        onClose: c,
                        className: ec().root,
                        contentClassName: ec().modalContent,
                        portalNode: e ? null : r,
                        showHeader: !1,
                        withOverlay: e,
                        closeOnOutsidePress: e,
                        containerProps: (0, C.Am)(C.e8.trailer.TRAILER_MODAL),
                        withAnimation: t.withAnimation,
                        isMobile: e,
                        lockScroll: e,
                        overlayColor: 'full',
                        enableSwipe: !0,
                        children: [
                            !e &&
                                (0, N.jsx)('div', {
                                    className: ec().header,
                                    children: (0, N.jsx)(f.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, N.jsx)(T.Icon, { variant: 'close', size: 'xxs' }),
                                        onClick: c,
                                        'aria-label': l({ id: 'trailer.close' }),
                                        ...(0, C.Am)(C.e8.trailer.TRAILER_CLOSE_BUTTON),
                                    }),
                                }),
                            t.variant && (0, N.jsx)(eo, { variant: t.variant }),
                        ],
                    })
                );
            });
        },
        9049: (e) => {
            e.exports = {
                root: 'BuySubscriptionButton_root__BdquR',
                root_hidden: 'BuySubscriptionButton_root_hidden__oMe3p',
                info: 'BuySubscriptionButton_info__qBinu',
                subtitle: 'BuySubscriptionButton_subtitle__Ni4VS',
                title: 'BuySubscriptionButton_title__RG_OU',
                buttonText: 'BuySubscriptionButton_buttonText__cmJMC',
                titleContainer: 'BuySubscriptionButton_titleContainer__h7Lmt',
                titleShimmer: 'BuySubscriptionButton_titleShimmer___hnah',
                titleShimmerContainer: 'BuySubscriptionButton_titleShimmerContainer__Wv82r',
                icon: 'BuySubscriptionButton_icon__0oNi_',
            };
        },
        9432: (e) => {
            e.exports = {
                root: 'TrackModalSimilarTracks_root__EAOmg',
                title: 'TrackModalSimilarTracks_title__0WPaJ',
                item: 'TrackModalSimilarTracks_item__BGQWd',
                important: 'TrackModalSimilarTracks_important__mGqEv',
                tracksContainer: 'TrackModalSimilarTracks_tracksContainer__E55ep',
            };
        },
        10024: (e) => {
            e.exports = {
                container: 'VideoPlayerContainer_container__pZe41',
                loadingIndicator: 'VideoPlayerContainer_loadingIndicator__qDxPV',
                root: 'VideoPlayerContainer_root__GHDoi',
                loadingIndicator_showed: 'VideoPlayerContainer_loadingIndicator_showed__KQCNf',
            };
        },
        10775: (e) => {
            e.exports = {
                root: 'NavbarDesktopUnauthorizedBar_root__uQZ9L',
                title: 'NavbarDesktopUnauthorizedBar_title__vf0W7',
                subtitle: 'NavbarDesktopUnauthorizedBar_subtitle__anNNQ',
                userProfile: 'NavbarDesktopUnauthorizedBar_userProfile__hAABb',
                userId: 'NavbarDesktopUnauthorizedBar_userId__m0jC6',
                buttons: 'NavbarDesktopUnauthorizedBar_buttons__94Y3N',
            };
        },
        11186: (e) => {
            e.exports = {
                root: 'TrailerError_root__GwuKR',
                textContainer: 'TrailerError_textContainer__lF7RZ',
                title: 'TrailerError_title__Q52Pa',
                description: 'TrailerError_description__60UJ6',
            };
        },
        11539: (e) => {
            e.exports = { image: 'FamilyInviteStepSuccess_image__kDBnc', image_mobile: 'FamilyInviteStepSuccess_image_mobile__PyiXK' };
        },
        13466: (e, t, a) => {
            'use strict';
            a.d(t, { Bx: () => A, t5: () => c, S3: () => s });
            var i = a(51606),
                n = a(97108),
                r = a(69548);
            let l = (e) => {
                    let { bgUrl: t, bgColor: a, title: n, text: l, titleColor: s, textColor: o, imageUrl: d, buttons: c } = e;
                    return (0, i.wg)({
                        bgUrl: t || null,
                        bgColor: a || null,
                        title: n || null,
                        text: l || null,
                        titleColor: s || null,
                        textColor: o || null,
                        imageUrl: d || null,
                        buttons: c.filter((e) => e.text).map(r.cZ),
                    });
                },
                s = (e) => {
                    let t = 'data' in e ? l(e.data) : l(e.div),
                        a = 'feedbackToken' in e ? e.feedbackToken : null,
                        r = 'anchorId' in e ? e.anchorId : n.v.ON_START_BAR_BELOW;
                    return (0, i.wg)({ anchorId: r, screenId: e.screenId, content: t, feedbackToken: a });
                },
                o = i.gK.model('BarBelowContent', {
                    bgUrl: i.gK.maybeNull(i.gK.string),
                    bgColor: i.gK.maybeNull(i.gK.string),
                    imageUrl: i.gK.maybeNull(i.gK.string),
                    title: i.gK.maybeNull(i.gK.string),
                    titleColor: i.gK.maybeNull(i.gK.string),
                    text: i.gK.maybeNull(i.gK.string),
                    textColor: i.gK.maybeNull(i.gK.string),
                    buttons: i.gK.array(r.__),
                }),
                d = i.gK.model('BarBelow', {
                    anchorId: i.gK.enumeration(Object.values(n.v)),
                    screenId: i.gK.string,
                    content: o,
                    feedbackToken: i.gK.maybeNull(i.gK.string),
                }),
                c = i.gK
                    .model('BarBelowMain', {
                        anchorId: i.gK.maybe(i.gK.string),
                        isVisible: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenShown: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenHidden: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenStarted: i.gK.maybe(i.gK.boolean),
                        list: i.gK.array(d),
                    })
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
                            e.isVisible = !0;
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
                    }));
            var u = a(62936),
                m = a(79950),
                _ = a(19718),
                p = a(44020),
                g = a(47480),
                v = a(8669),
                h = a(13030),
                b = a(20418),
                I = a(42561),
                x = a(92302),
                N = a.n(x);
            let A = (0, _.PA)((e) => {
                var t, a, i, n;
                let { className: l, barBelow: s } = e,
                    { formatMessage: o } = (0, g.A)(),
                    d = (0, p.useMemo)(() => {
                        let e = { title: {}, text: {}, bg: {} };
                        if (!s.barBelowItem) return e;
                        let { titleColor: t, textColor: a, bgColor: i, bgUrl: n } = s.barBelowItem.content;
                        return (
                            t && (e.title.color = t),
                            a && (e.text.color = a),
                            i && (e.bg.backgroundColor = i),
                            n && (e.bg.backgroundImage = 'url("'.concat(s.barBelowItem.content.bgUrl, '")')),
                            e
                        );
                    }, [s]),
                    c = (0, p.useMemo)(() => {
                        var e;
                        return null == (e = s.barBelowItem)
                            ? void 0
                            : e.content.buttons.map((e) => {
                                  var t, a;
                                  return (0, u.jsx)(
                                      r.tL,
                                      {
                                          anchorId: null == (t = s.barBelowItem) ? void 0 : t.anchorId,
                                          screenId: null == (a = s.barBelowItem) ? void 0 : a.screenId,
                                          button: e,
                                          buttonSize: 'l',
                                          hide: s.hide,
                                          feedbackToken: s.barBelowItem ? s.barBelowItem.feedbackToken : null,
                                      },
                                      e.text,
                                  );
                              });
                    }, [s]),
                    _ = (0, p.useCallback)(
                        (e) => {
                            e.animationName.includes('show') ? s.setAnimationAlreadyBeenShown() : e.animationName.includes('hide') && s.setAnimationAlreadyBeenHidden();
                        },
                        [s],
                    ),
                    x = (0, p.useCallback)(
                        (e) => {
                            e.animationName.includes('show') && s.setAnimationAlreadyBeenStarted();
                        },
                        [s],
                    );
                return (0, u.jsx)(I.rtM, {
                    page: I.l7W.MUSIC_DEEPLINK_SCREEN,
                    places: [I.RBW.TOP_BUTTON],
                    children: (0, u.jsxs)('section', {
                        className: (0, m.$)(
                            N().root,
                            { [N().root_hidden]: !s.isVisible && !s.hideWithAnimation, [N().root_show]: s.showWithAnimation, [N().root_hide]: s.hideWithAnimation },
                            l,
                        ),
                        style: d.bg,
                        onAnimationStart: x,
                        onAnimationEnd: _,
                        'aria-label': o({ id: 'bar-below.section-name' }),
                        ...(0, v.Am)(v.Kq.barBelow.BAR_BELOW),
                        children: [
                            (null == (t = s.barBelowItem) ? void 0 : t.content.imageUrl) &&
                                (0, u.jsx)(h.Image, {
                                    className: N().image,
                                    'aria-hidden': !0,
                                    src: null == (a = s.barBelowItem) ? void 0 : a.content.imageUrl,
                                    fit: 'contain',
                                    withAvatarReplace: !0,
                                    withAspectRatio: !0,
                                    ...(0, v.Am)(v.Kq.barBelow.BAR_BELOW_IMAGE),
                                }),
                            (0, u.jsxs)('div', {
                                className: N().content,
                                children: [
                                    (null == (i = s.barBelowItem) ? void 0 : i.content.title) &&
                                        (0, u.jsx)(b.Heading, {
                                            className: N().title,
                                            variant: 'h3',
                                            style: d.title,
                                            lineClamp: 2,
                                            ...(0, v.Am)(v.Kq.barBelow.BAR_BELOW_TITLE_TEXT),
                                            children: s.barBelowItem.content.title,
                                        }),
                                    (null == (n = s.barBelowItem) ? void 0 : n.content.text) &&
                                        (0, u.jsx)(b.Heading, {
                                            className: N().text,
                                            variant: 'h4',
                                            size: 'xs',
                                            style: d.text,
                                            lineClamp: 2,
                                            ...(0, v.Am)(v.Kq.barBelow.BAR_BELOW_SECONDARY_TEXT),
                                            children: s.barBelowItem.content.text,
                                        }),
                                ],
                            }),
                            (0, u.jsx)('div', { className: N().buttons, children: c }),
                        ],
                    }),
                });
            });
        },
        14701: (e, t, a) => {
            'use strict';
            a.d(t, { ov: () => E, k8: () => m, fZ: () => o });
            var i = a(51606),
                n = a(97108),
                r = a(33878),
                l = a(69548);
            let s = (e) => {
                    let {
                        isModal: t,
                        withShadow: a,
                        closeActionId: n,
                        bgUrl: s,
                        bgUrlLarge: o,
                        bgColor: d,
                        logoUrl: c,
                        title: u,
                        text: m,
                        titleColor: _,
                        textColor: p,
                        buttons: g,
                        disclaimer: v,
                        disclaimerColor: h,
                    } = e;
                    return (0, i.wg)({
                        isModal: (0, r.toBoolean)(t),
                        withShadow: (0, r.toBoolean)(a),
                        closeActionId: n || null,
                        bgUrl: s || null,
                        bgUrlLarge: o || null,
                        bgColor: d || null,
                        logoUrl: c || null,
                        title: u || null,
                        text: m || null,
                        titleColor: _ || null,
                        textColor: p || null,
                        buttons: g.filter((e) => e.text).map(l.cZ),
                        disclaimer: v || null,
                        disclaimerColor: h || null,
                    });
                },
                o = (e) => {
                    let t = 'data' in e ? s(e.data) : s(e.div),
                        a = 'feedbackToken' in e ? e.feedbackToken : null,
                        r = 'anchorId' in e ? e.anchorId : n.v.ON_START_FULLSCREEN;
                    return (0, i.wg)({ anchorId: r, screenId: e.screenId, content: t, feedbackToken: a });
                };
            var d = a(54690);
            let c = i.gK.model('CommunicationModalContentModel', {
                    isModal: i.gK.boolean,
                    withShadow: i.gK.boolean,
                    closeActionId: i.gK.maybeNull(i.gK.string),
                    bgUrl: i.gK.maybeNull(i.gK.string),
                    bgUrlLarge: i.gK.maybeNull(i.gK.string),
                    bgColor: i.gK.maybeNull(i.gK.string),
                    logoUrl: i.gK.maybeNull(i.gK.string),
                    title: i.gK.maybeNull(i.gK.string),
                    titleColor: i.gK.maybeNull(i.gK.string),
                    text: i.gK.maybeNull(i.gK.string),
                    textColor: i.gK.maybeNull(i.gK.string),
                    buttons: i.gK.array(l.__),
                    disclaimer: i.gK.maybeNull(i.gK.string),
                    disclaimerColor: i.gK.maybeNull(i.gK.string),
                }),
                u = i.gK.model('CommunicationModal', {
                    anchorId: i.gK.enumeration(Object.values(n.v)),
                    screenId: i.gK.string,
                    content: c,
                    feedbackToken: i.gK.maybeNull(i.gK.string),
                }),
                m = d.qt
                    .props({ anchorId: i.gK.maybe(i.gK.enumeration(Object.values(n.v))), list: i.gK.array(u) })
                    .views((e) => ({
                        get modalItem() {
                            return e.list.find((t) => t.anchorId === e.anchorId);
                        },
                    }))
                    .actions((e) => ({
                        setAnchorId(t) {
                            e.anchorId = t;
                        },
                    }));
            var _ = a(62936),
                p = a(79950),
                g = a(19718),
                v = a(44020),
                h = a(47480),
                b = a(8669),
                I = a(5099),
                x = a(85742),
                N = a(13030),
                A = a(4714),
                S = a(20418),
                y = a(42561),
                C = a(85906),
                f = a(91865),
                T = a.n(f);
            let E = (0, g.PA)((e) => {
                var t, a, i, n, r, s;
                let { modal: o } = e,
                    { formatMessage: d } = (0, h.A)(),
                    { communication: c } = (0, y.Pjs)(),
                    u = null == (t = o.modalItem) ? void 0 : t.content.isModal,
                    m = (0, v.useMemo)(() => {
                        var e;
                        return null == (e = o.modalItem)
                            ? void 0
                            : e.content.buttons.map((e) => {
                                  var t;
                                  return (0, _.jsx)(
                                      l.tL,
                                      {
                                          screenId: null == (t = o.modalItem) ? void 0 : t.screenId,
                                          anchorId: o.anchorId,
                                          button: e,
                                          buttonSize: 'default',
                                          buttonClassName: T().button,
                                          textClassName: T().buttonText,
                                          hide: o.close,
                                          feedbackToken: o.modalItem ? o.modalItem.feedbackToken : null,
                                      },
                                      e.text,
                                  );
                              });
                    }, [o]),
                    g = (0, v.useMemo)(() => {
                        let e = { bg: {}, title: {}, text: {}, disclaimer: {} };
                        if (!o.modalItem) return e;
                        let { bgUrl: t, bgUrlLarge: a, bgColor: i, titleColor: n, textColor: r, disclaimerColor: l } = o.modalItem.content;
                        return (
                            t && (e.bg['--bg-url'] = 'url("'.concat(t, '")')),
                            a && (e.bg['--bg-url-large'] = 'url("'.concat(a, '")')),
                            i && (e.bg.backgroundColor = i),
                            n && (e.title.color = n),
                            r && (e.text.color = r),
                            l && (e.disclaimer.color = l),
                            e
                        );
                    }, [o]),
                    f = (0, v.useCallback)(() => {
                        o.modalItem &&
                            o.modalItem.content.closeActionId &&
                            c.action(o.modalItem.anchorId, o.modalItem.screenId, o.modalItem.content.closeActionId, o.modalItem.feedbackToken),
                            o.close();
                    }, [o, c]),
                    E = (0, v.useMemo)(() => {
                        var e;
                        if (null == (e = o.modalItem) ? void 0 : e.content.logoUrl)
                            return (0, _.jsx)(N.Image, {
                                className: T().image,
                                withAvatarReplace: !0,
                                withFallback: !1,
                                src: o.modalItem.content.logoUrl,
                                withAspectRatio: !0,
                                size: 400,
                                fit: 'cover',
                            });
                    }, [o]),
                    L = (0, v.useMemo)(() => {
                        var e;
                        return (
                            (null == (e = o.modalItem) ? void 0 : e.content.disclaimer) &&
                            (0, y.rVI)(o.modalItem.content.disclaimer, C.N_, { className: T().disclaimerLink, style: g.disclaimer, target: '_blank' })
                        );
                    }, [o, g]);
                return (0, _.jsxs)(A.a, {
                    style: g.bg,
                    className: (0, p.$)(T().root, u ? T().root_modal : T().root_fullscreen),
                    headerClassName: T().modalHeader,
                    contentClassName: T().modalContent,
                    header:
                        E &&
                        (0, _.jsx)('div', {
                            className: (0, p.$)(T().imageWrapper, T().imageWrapper_header),
                            ...(0, b.Am)(b.Kq.communicationModal.COMMUNICATION_MODAL_HEADER_LOGO),
                            children: E,
                        }),
                    open: o.isOpened,
                    onOpenChange: o.onOpenChange,
                    onClose: f,
                    closeOnOutsidePress: !1,
                    size: u ? 'fitContent' : 'fullscreen',
                    placement: 'center',
                    labelClose: d({ id: 'interface-actions.close' }),
                    customCloseButton: (0, _.jsx)(
                        I.$,
                        {
                            radius: 'round',
                            size: 'xxs',
                            icon: (0, _.jsx)(x.Icon, { className: T().closeButtonIcon, variant: 'close', size: 'xxs' }),
                            onClick: f,
                            'aria-label': d({ id: 'interface-actions.close' }),
                            className: T().closeButton,
                            withHover: !1,
                            ...(0, b.Am)(b.Kq.communicationModal.COMMUNICATION_MODAL_CLOSE_CROSS_BUTTON),
                        },
                        ''.concat(null == (a = o.modalItem) ? void 0 : a.anchorId, '-').concat(null == (i = o.modalItem) ? void 0 : i.content.closeActionId),
                    ),
                    ...(0, b.Am)(b.Kq.communicationModal.COMMUNICATION_MODAL),
                    children: [
                        (0, _.jsxs)('div', {
                            className: T().container,
                            children: [
                                (0, _.jsxs)('div', {
                                    className: T().wrapper,
                                    children: [
                                        E &&
                                            (0, _.jsx)('div', {
                                                className: (0, p.$)(T().imageWrapper, T().imageWrapper_content),
                                                ...(0, b.Am)(b.Kq.communicationModal.COMMUNICATION_MODAL_CONTENT_LOGO),
                                                children: E,
                                            }),
                                        (null == (n = o.modalItem) ? void 0 : n.content.title) &&
                                            (0, _.jsx)(S.Heading, {
                                                className: T().title,
                                                style: g.title,
                                                size: 'xl',
                                                weight: 'black',
                                                variant: 'h1',
                                                lineClamp: 3,
                                                ...(0, b.Am)(b.Kq.communicationModal.COMMUNICATION_MODAL_TITLE_TEXT),
                                                children: o.modalItem.content.title,
                                            }),
                                        (null == (r = o.modalItem) ? void 0 : r.content.text) &&
                                            (0, _.jsx)(S.Heading, {
                                                className: T().text,
                                                style: g.text,
                                                size: 'xs',
                                                variant: 'h2',
                                                lineClamp: 4,
                                                ...(0, b.Am)(b.Kq.communicationModal.COMMUNICATION_MODAL_CONTENT_TEXT),
                                                children: o.modalItem.content.text,
                                            }),
                                        (0, _.jsx)(y.rtM, {
                                            page: y.l7W.MUSIC_DEEPLINK_SCREEN,
                                            places: [y.RBW.TOP_BUTTON],
                                            children: (0, _.jsx)('div', { className: T().buttons, children: m }),
                                        }),
                                    ],
                                }),
                                (0, _.jsx)('div', {
                                    className: T().disclaimerWrapper,
                                    children: (0, _.jsx)(S.Caption, {
                                        className: T().disclaimer,
                                        style: g.disclaimer,
                                        type: 'text',
                                        variant: 'div',
                                        size: 'xs',
                                        weight: 'medium',
                                        ...(0, b.Am)(b.Kq.communicationModal.COMMUNICATION_MODAL_DISCLAIMER),
                                        children: L,
                                    }),
                                }),
                            ],
                        }),
                        !u && (null == (s = o.modalItem) ? void 0 : s.content.withShadow) && (0, _.jsx)('div', { className: T().gradientOverlay }),
                    ],
                });
            });
        },
        14786: (e) => {
            e.exports = {
                root: 'Trailer_root__c8eG3',
                header: 'Trailer_header__FBFMi',
                trackShimmer: 'Trailer_trackShimmer__qmCN3',
                albumShimmer: 'Trailer_albumShimmer__8RxuC',
                footer: 'Trailer_footer__POMTS',
            };
        },
        17298: (e) => {
            e.exports = {
                root: 'FullscreenVideoPlayerDesktop_root__a69Pd',
                important: 'FullscreenVideoPlayerDesktop_important__NvXzL',
                header: 'FullscreenVideoPlayerDesktop_header__oiftJ',
                modalContent: 'FullscreenVideoPlayerDesktop_modalContent__YeGCV',
                closeButton: 'FullscreenVideoPlayerDesktop_closeButton__OqSFs',
                logoLink: 'FullscreenVideoPlayerDesktop_logoLink__o92zi',
                logo_ru: 'FullscreenVideoPlayerDesktop_logo_ru__uRbpz',
                logo_en: 'FullscreenVideoPlayerDesktop_logo_en__mBcdF',
            };
        },
        17456: (e) => {
            e.exports = {
                collapseButton: 'NavbarDesktop_collapseButton__XQh9d',
                root: 'NavbarDesktop_root__scYzp',
                logoWrapper: 'NavbarDesktop_logoWrapper__89ce6',
                navigation: 'NavbarDesktop_navigation__dLUGW',
                navigation_new: 'NavbarDesktop_navigation_new__0j8W5',
                navigation_gapFill: 'NavbarDesktop_navigation_gapFill__SsWxA',
                navigationGroup: 'NavbarDesktop_navigationGroup__eexLF',
                logoLink: 'NavbarDesktop_logoLink__KR0Dk',
                logo: 'NavbarDesktop_logo__Z4jGx',
                collapseButtonTooltip_hidden: 'NavbarDesktop_collapseButtonTooltip_hidden__tFoZZ',
                subTitle: 'NavbarDesktop_subTitle__Fqvr4',
                subTitle_withCursorPointer: 'NavbarDesktop_subTitle_withCursorPointer__VYJOh',
                title: 'NavbarDesktop_title__OrnHN',
                title_animate: 'NavbarDesktop_title_animate__XLxaQ',
                animation_show: 'NavbarDesktop_animation_show__pRFj9',
                title_collapsed: 'NavbarDesktop_title_collapsed__IH9Bc',
                animation_hide: 'NavbarDesktop_animation_hide__8VxPs',
                pinsList: 'NavbarDesktop_pinsList___jXIM',
                scrollableContainer: 'NavbarDesktop_scrollableContainer__HLc9D',
                scrollableContent: 'NavbarDesktop_scrollableContent__OyU4P',
                disabledNavigationItem: 'NavbarDesktop_disabledNavigationItem__Qp_hs',
                bestRecommendationsModal: 'NavbarDesktop_bestRecommendationsModal__l7GD2',
                bestRecommendationsModalHeader: 'NavbarDesktop_bestRecommendationsModalHeader__VSi5Y',
                bestRecommendationsModalContent: 'NavbarDesktop_bestRecommendationsModalContent__WhwfK',
                bestRecommendationsModalLogo: 'NavbarDesktop_bestRecommendationsModalLogo__QnXgm',
                bestRecommendationsModalText: 'NavbarDesktop_bestRecommendationsModalText__05Z3M',
            };
        },
        24411: (e) => {
            e.exports = {
                root: 'PinsList_root__LN_2Z',
                root_withScroll: 'PinsList_root_withScroll__g8x3V',
                root_hasPins: 'PinsList_root_hasPins__3LXlo',
                content: 'PinsList_content__9RG7s',
                pin_enter: 'PinsList_pin_enter__2p2_6',
                pin_enter_active: 'PinsList_pin_enter_active__eNGlc',
                'enter-fade': 'PinsList_enter-fade__G_QY8',
                'enter-move': 'PinsList_enter-move__DSAXH',
                pin_exit: 'PinsList_pin_exit__y_gcM',
                pin_exit_active: 'PinsList_pin_exit_active__rF5Je',
                'exit-fade': 'PinsList_exit-fade__M6fYX',
                'exit-move': 'PinsList_exit-move__Jtgi0',
            };
        },
        26411: (e) => {
            e.exports = { growContainer: 'FamilyInviteStepInfo_growContainer__y0xmo', important: 'FamilyInviteStepInfo_important__YvkpI' };
        },
        27966: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => i });
            let i = (e) => {
                let [t, a] = e.split(':');
                return { uid: String(t), kind: Number(a) };
            };
        },
        28268: (e, t, a) => {
            'use strict';
            a.d(t, { x8: () => X, J4: () => _, _n: () => i, hj: () => s });
            var i = (function (e) {
                    return (e.INFO = 'INFO'), (e.SUCCESS = 'SUCCESS'), e;
                })({}),
                n = a(44020),
                r = a(42561);
            let l = { INVITE_ID: 'invite_id', UTM_MEDIUM: 'utm_medium' },
                s = () => {
                    let { user: e } = (0, r.Pjs)(),
                        t = (0, r.XJ9)(),
                        { inviteIdSearchParam: a, hasNecessarySearchParams: i } = (0, n.useMemo)(() => {
                            let e = (0, r.qne)(l.INVITE_ID),
                                t = !!(e && 'copy_link' === (0, r.qne)(l.UTM_MEDIUM));
                            return { inviteIdSearchParam: e, hasNecessarySearchParams: t };
                        }, []),
                        s = (0, n.useCallback)(() => {
                            let e = (0, r.jrm)();
                            if (null === e) return;
                            e.delete(l.INVITE_ID), e.delete(l.UTM_MEDIUM);
                            let a = new URL(window.location.href);
                            (a.search = e.toString()), t(a.toString());
                        }, [t]);
                    return { inviteId: a, shouldShowFamilyInvite: !!(!e.hasPlus && i), clear: s };
                };
            var o = a(51606),
                d = a(14525),
                c = a(54690),
                u = (function (e) {
                    return (
                        (e.SUBSCRIPTION_IS_NOT_AVAILABLE = 'SUBSCRIPTION_IS_NOT_AVAILABLE'),
                        (e.INVITATION_IS_INVALID = 'INVITATION_IS_INVALID'),
                        (e.UNKNOWN = 'UNKNOWN'),
                        e
                    );
                })({});
            let m = o.gK.model('FamilyInviteInfoModel', { name: o.gK.string, avatarUrl: o.gK.string }),
                _ = o.gK
                    .model('FamilyInviteModel', {
                        info: o.gK.model({ loadingState: o.gK.enumeration(Object.values(r.GuX)), data: o.gK.maybeNull(m) }),
                        acceptanceLoadingState: o.gK.enumeration(Object.values(r.GuX)),
                        isSuccess: o.gK.maybe(o.gK.boolean),
                        modal: c.qt,
                        step: o.gK.enumeration('Step', Object.values(i)),
                        inviteId: o.gK.maybeNull(o.gK.string),
                        error: o.gK.maybeNull(o.gK.enumeration(Object.values(u))),
                    })
                    .views((e) => ({
                        get hasError() {
                            return !!e.error;
                        },
                        get isInfoShimmerVisible() {
                            return e.info.loadingState === r.GuX.IDLE || e.info.loadingState === r.GuX.PENDING;
                        },
                        get isInfoShimmerActive() {
                            return e.info.loadingState === r.GuX.PENDING;
                        },
                        get isAcceptanceActive() {
                            return e.acceptanceLoadingState === r.GuX.PENDING;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            start(a) {
                                t.setInviteId(a), e.modal.open(), t.getInviteInfo();
                            },
                            retry: (0, o.L3)(function* () {
                                t.setError(null), t.toggleStepInfo(), e.info.loadingState !== r.GuX.RESOLVE && (yield t.getInviteInfo());
                            }),
                            getInviteInfo: (0, o.L3)(function* () {
                                let { familyResource: a, modelActionsLogger: i } = (0, o._$)(e);
                                if (e.inviteId && e.info.loadingState !== r.GuX.PENDING)
                                    try {
                                        e.info.loadingState = r.GuX.PENDING;
                                        let i = { inviteId: e.inviteId },
                                            n = yield a.getInviteInfo(i);
                                        if (!n.hasPlus) {
                                            t.setError(u.SUBSCRIPTION_IS_NOT_AVAILABLE), (e.info.loadingState = r.GuX.RESOLVE);
                                            return;
                                        }
                                        (e.info.data = ((e) => {
                                            let { name: t, avatarUrl: a } = e;
                                            return (0, o.wg)({ name: t, avatarUrl: a });
                                        })(n)),
                                            (e.info.loadingState = r.GuX.RESOLVE);
                                    } catch (a) {
                                        if (((e.info.loadingState = r.GuX.REJECT), i.error(a), a instanceof d.GX && a.statusCode === d.X1.BAD_REQUEST))
                                            return void t.setError(u.INVITATION_IS_INVALID);
                                        t.setError(u.UNKNOWN);
                                    }
                            }),
                            acceptInvite: (0, o.L3)(function* () {
                                let { familyResource: a, modelActionsLogger: i } = (0, o._$)(e);
                                if (e.inviteId && e.acceptanceLoadingState !== r.GuX.PENDING)
                                    try {
                                        e.acceptanceLoadingState = r.GuX.PENDING;
                                        let i = { inviteId: e.inviteId };
                                        yield a.acceptInvite(i), (e.acceptanceLoadingState = r.GuX.RESOLVE), t.toggleStateSuccessTrue();
                                    } catch (a) {
                                        if (((e.acceptanceLoadingState = r.GuX.REJECT), i.error(a), a instanceof d.GX && a.statusCode === d.X1.BAD_REQUEST))
                                            return void t.setError(u.INVITATION_IS_INVALID);
                                        t.setError(u.UNKNOWN);
                                    }
                            }),
                            toggleStepInfo() {
                                e.step = i.INFO;
                            },
                            toggleStepSuccess() {
                                e.step = i.SUCCESS;
                            },
                            setError(t) {
                                e.error = t;
                            },
                            setInviteId(t) {
                                e.inviteId = t;
                            },
                            toggleStateSuccessTrue() {
                                t.toggleStepSuccess(), (e.isSuccess = !0);
                            },
                            reset() {
                                (e.acceptanceLoadingState = r.GuX.IDLE),
                                    (e.error = null),
                                    (e.info.loadingState = r.GuX.IDLE),
                                    (e.info.data = null),
                                    (e.inviteId = null),
                                    (e.step = i.INFO),
                                    (e.isSuccess = !1);
                            },
                        };
                        return t;
                    });
            var p = a(62936),
                g = a(19718),
                v = a(8669),
                h = a(85906);
            let b = () => {
                let {
                    familyInvite: { modal: e, isSuccess: t, reset: a },
                } = (0, r.Pjs)();
                return (0, n.useCallback)(() => {
                    if ((e.close(), t)) return void window.location.reload();
                    a();
                }, [e, t, a]);
            };
            var I = a(79950),
                x = a(13030),
                N = a(57143),
                A = a.n(N),
                S = a(47480),
                y = a(26731),
                C = a(20418);
            let f = (0, g.PA)(() => {
                    let { formatMessage: e } = (0, S.A)(),
                        {
                            settings: { isMobile: t },
                        } = (0, r.Pjs)(),
                        a = b();
                    return (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsxs)('div', {
                                className: h.SE.text,
                                children: [
                                    (0, p.jsx)(C.Heading, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: h.SE.title,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE),
                                        children: (0, p.jsx)(y.A, { id: 'family.invitation-error-title' }),
                                    }),
                                    (0, p.jsx)(C.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        className: h.SE.description,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION),
                                        children: (0, p.jsx)(y.A, { id: 'family.invitation-error-description' }),
                                    }),
                                ],
                            }),
                            (0, p.jsx)('div', {
                                className: h.SE.buttons,
                                children: (0, p.jsx)(h.mv, {
                                    color: 'primary',
                                    isMobile: t,
                                    text: e({ id: 'interface-actions.confirm' }),
                                    onClick: a,
                                    ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_INVITATION_ERROR_BUTTON_CONFIRM),
                                }),
                            }),
                        ],
                    });
                }),
                T = (0, g.PA)(() => {
                    let { formatMessage: e } = (0, S.A)(),
                        {
                            settings: { isMobile: t },
                            paywall: { modal: a },
                        } = (0, r.Pjs)(),
                        i = b(),
                        l = (0, n.useCallback)(() => {
                            i(), a.open();
                        }, [i, a]);
                    return (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsxs)('div', {
                                className: h.SE.text,
                                children: [
                                    (0, p.jsx)(C.Heading, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: h.SE.title,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE),
                                        children: (0, p.jsx)(y.A, { id: 'family.subscription-error-title' }),
                                    }),
                                    (0, p.jsx)(C.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        className: h.SE.description,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION),
                                        children: (0, p.jsx)(y.A, { id: 'family.subscription-error-description' }),
                                    }),
                                ],
                            }),
                            (0, p.jsxs)('div', {
                                className: h.SE.buttons,
                                children: [
                                    (0, p.jsx)(h.mv, {
                                        color: 'primary',
                                        isMobile: t,
                                        text: e({ id: 'family.about1' }),
                                        onClick: l,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_SUBSCRIPTION_ERROR_BUTTON_ABOUT),
                                    }),
                                    (0, p.jsx)(h.mv, {
                                        color: 'secondary',
                                        isMobile: t,
                                        text: (0, p.jsx)(y.A, { id: 'family.later' }),
                                        onClick: i,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_SUBSCRIPTION_ERROR_BUTTON_LATER),
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                E = (0, g.PA)(() => {
                    let { formatMessage: e } = (0, S.A)(),
                        {
                            familyInvite: { retry: t },
                        } = (0, r.Pjs)();
                    return (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsxs)('div', {
                                className: h.SE.text,
                                children: [
                                    (0, p.jsx)(C.Heading, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: h.SE.title,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE),
                                        children: (0, p.jsx)(y.A, { id: 'family.unknown-error-title' }),
                                    }),
                                    (0, p.jsx)(C.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        className: h.SE.description,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION),
                                        children: (0, p.jsx)(y.A, { id: 'family.unknown-error-description' }),
                                    }),
                                ],
                            }),
                            (0, p.jsx)('div', {
                                className: h.SE.buttons,
                                children: (0, p.jsx)(h.mv, {
                                    color: 'primary',
                                    text: e({ id: 'family.retry' }),
                                    onClick: t,
                                    ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_UNKNOWN_ERROR_BUTTON_RETRY),
                                }),
                            }),
                        ],
                    });
                }),
                L = { [u.INVITATION_IS_INVALID]: (0, p.jsx)(f, {}), [u.SUBSCRIPTION_IS_NOT_AVAILABLE]: (0, p.jsx)(T, {}), [u.UNKNOWN]: (0, p.jsx)(E, {}) },
                j = (0, g.PA)(() => {
                    let {
                            familyInvite: { error: e },
                            settings: { isMobile: t },
                        } = (0, r.Pjs)(),
                        a = t || e === u.SUBSCRIPTION_IS_NOT_AVAILABLE;
                    return (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsx)('div', {
                                className: (0, I.$)(h.SE.growContainer, h.SE.growContainer_withoutPaddings),
                                children: (0, p.jsx)(x.Image, {
                                    className: (0, I.$)(A().image, { [A().image_small]: a }),
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.6724b88e3c0f01402213116b/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.6724b88c3c0f01402213116a/orig 2x',
                                    fit: 'contain',
                                    'aria-hidden': !0,
                                }),
                            }),
                            L[null != e ? e : u.UNKNOWN],
                        ],
                    });
                });
            var P = a(69526),
                R = a(85742),
                k = a(42687),
                M = a(78895),
                w = a.n(M);
            let O = (e) => {
                let { avatarSrc: t, name: a, isMobile: i } = e;
                return (0, p.jsxs)('div', {
                    className: (0, I.$)(w().root, { [w().root_mobile]: i }),
                    children: [
                        (0, p.jsx)(k.ny, {
                            className: (0, I.$)(w().icon, w().important),
                            avatarSrc: t,
                            hasPlus: !0,
                            ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_INVITER_AVATAR),
                        }),
                        (0, p.jsx)(C.Caption, {
                            className: w().name,
                            variant: 'div',
                            size: 'm',
                            ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_INVITER_NAME),
                            children: a,
                        }),
                    ],
                });
            };
            var B = a(30388);
            let D = (e) => {
                let { isActive: t, isMobile: a } = e;
                return (0, p.jsxs)('div', {
                    className: (0, I.$)(w().root, { [w().root_mobile]: a }),
                    children: [
                        (0, p.jsx)(B.Shimmer, { className: w().iconShimmer, isActive: t, radius: 'round' }),
                        (0, p.jsx)(B.Shimmer, { className: w().nameShimmer, isActive: t, radius: 'xs' }),
                    ],
                });
            };
            var K = a(26411),
                U = a.n(K);
            let G = (0, g.PA)(() => {
                let {
                        user: e,
                        location: t,
                        settings: { isMobile: a },
                        familyInvite: {
                            isInfoShimmerVisible: i,
                            isInfoShimmerActive: l,
                            isAcceptanceActive: s,
                            info: { data: o },
                            acceptInvite: d,
                        },
                    } = (0, r.Pjs)(),
                    { name: c = '', avatarUrl: u = '' } = o || {},
                    m = (0, r.NFA)(),
                    _ = (0, P.useRouter)(),
                    g = m.get(r.QGx),
                    x = b(),
                    N = (0, n.useCallback)(() => {
                        if (!e.isAuthorized) {
                            g.authorizationUrl && _.push(g.authorizationUrl);
                            return;
                        }
                        d();
                    }, [g.authorizationUrl, _, e.isAuthorized, d]),
                    A = (0, n.useMemo)(() => (i ? (0, p.jsx)(D, { isActive: l, isMobile: a }) : (0, p.jsx)(O, { avatarSrc: u, name: c, isMobile: a })), [i, l, a, u, c]),
                    S = (0, n.useMemo)(
                        () =>
                            i
                                ? (0, p.jsx)(h.bb, { isActive: l, isMobile: a })
                                : (0, p.jsx)(h.mv, {
                                      color: 'plus',
                                      isMobile: a,
                                      text: (0, p.jsx)(y.A, { id: 'family.accept' }),
                                      onClick: N,
                                      showSpinner: s,
                                      ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_BUTTON_ACCEPT),
                                  }),
                        [i, l, s, a, N],
                    );
                return (0, p.jsxs)(p.Fragment, {
                    children: [
                        (0, p.jsx)('div', { className: (0, I.$)(h.SE.growContainer, U().growContainer, U().important), children: A }),
                        (0, p.jsxs)('div', {
                            className: h.SE.text,
                            children: [
                                (0, p.jsx)(C.Heading, {
                                    variant: 'h1',
                                    size: 'xl',
                                    className: h.SE.title,
                                    ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_TITLE),
                                    children: (0, p.jsx)(y.A, { id: 'family.info-title', values: { br: '\n' } }),
                                }),
                                (0, p.jsx)(C.Caption, {
                                    variant: 'span',
                                    size: 'm',
                                    className: h.SE.description,
                                    ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_DESCRIPTION),
                                    children: (0, p.jsx)(y.A, { id: 'family.info-description', values: { br: '\n' } }),
                                }),
                                (0, p.jsx)(h.N_, {
                                    target: '_blank',
                                    href: 'https://yandex.'.concat(t.tld, '/legal/yandex_plus_conditions/'),
                                    icon: (0, p.jsx)(R.Icon, { variant: 'arrowRight', size: 'xxxs', className: h.SE.linkArrow }),
                                    iconPosition: 'right',
                                    className: h.SE.link,
                                    containerClassName: h.SE.linkContainer,
                                    ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_TERMS),
                                    children: (0, p.jsx)(C.Caption, { type: 'controls', variant: 'span', size: 'm', children: (0, p.jsx)(y.A, { id: 'family.terms' }) }),
                                }),
                            ],
                        }),
                        (0, p.jsxs)('div', {
                            className: h.SE.buttons,
                            children: [
                                S,
                                (0, p.jsx)(h.mv, {
                                    color: 'secondary',
                                    isMobile: a,
                                    text: (0, p.jsx)(y.A, { id: 'family.reject' }),
                                    onClick: x,
                                    ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_BUTTON_REJECT),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var V = a(11539),
                z = a.n(V);
            let F = (0, g.PA)(() => {
                    let {
                            location: e,
                            settings: { isMobile: t },
                        } = (0, r.Pjs)(),
                        a = b();
                    return (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsx)('div', {
                                className: h.SE.growContainer,
                                children: (0, p.jsx)(x.Image, {
                                    className: (0, I.$)(z().image, { [z().image_mobile]: t }),
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.6724a5445724776f278ec59d/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.6724a5445724776f278ec59d/orig 2x',
                                    fit: 'contain',
                                    'aria-hidden': !0,
                                }),
                            }),
                            (0, p.jsxs)('div', {
                                className: h.SE.text,
                                children: [
                                    (0, p.jsx)(C.Heading, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: h.SE.title,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_TITLE),
                                        children: (0, p.jsx)(y.A, { id: 'family.success-title' }),
                                    }),
                                    (0, p.jsx)(C.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        className: h.SE.description,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_DESCRIPTION),
                                        children: (0, p.jsx)(y.A, { id: 'family.success-description', values: { br: '\n' } }),
                                    }),
                                    (0, p.jsx)(h.N_, {
                                        target: '_blank',
                                        href: 'https://plus.yandex.'.concat(e.tld, '/'),
                                        icon: (0, p.jsx)(R.Icon, { variant: 'arrowRight', size: 'xxxs', className: h.SE.linkArrow }),
                                        iconPosition: 'right',
                                        className: h.SE.link,
                                        containerClassName: h.SE.linkContainer,
                                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_ABOUT),
                                        children: (0, p.jsx)(C.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, p.jsx)(y.A, { id: 'family.about' }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, p.jsx)('div', {
                                className: h.SE.buttons,
                                children: (0, p.jsx)(h.mv, {
                                    color: 'plus',
                                    isMobile: t,
                                    text: (0, p.jsx)(y.A, { id: 'family.go-to-music' }),
                                    onClick: a,
                                    ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_BUTTON_FINISH),
                                }),
                            }),
                        ],
                    });
                }),
                W = { [i.INFO]: (0, p.jsx)(G, {}), [i.SUCCESS]: (0, p.jsx)(F, {}) },
                X = (0, g.PA)(() => {
                    let {
                            familyInvite: { modal: e, step: t, hasError: a },
                        } = (0, r.Pjs)(),
                        i = b(),
                        l = (0, n.useCallback)(
                            (t) => {
                                t || i(), e.onOpenChange(t);
                            },
                            [i, e],
                        ),
                        s = (0, n.useMemo)(() => (a ? (0, p.jsx)(j, {}) : W[t]), [a, t]);
                    return (0, p.jsx)(h.cu, {
                        open: e.isOpened,
                        hasError: a,
                        onOpenChange: l,
                        onClose: i,
                        ...(0, v.Am)(v.e8.familyInvite.FAMILY_INVITE_MODAL),
                        children: s,
                    });
                });
        },
        29234: (e) => {
            e.exports = {
                root: 'TrailerHeader_root__n8XkZ',
                coverContainer: 'TrailerHeader_coverContainer__4R_jG',
                cover: 'TrailerHeader_cover__G6BRb',
                iconContainer: 'TrailerHeader_iconContainer__QXR64',
                icon: 'TrailerHeader_icon__5T0JT',
                textContainer: 'TrailerHeader_textContainer__LR03v',
                text: 'TrailerHeader_text__BWMLw',
                link: 'TrailerHeader_link__kObd5',
                title: 'TrailerHeader_title__GuIe0',
                playButton: 'TrailerHeader_playButton__MGmhZ',
                playButtonIcon: 'TrailerHeader_playButtonIcon__JFbl_',
                shimmerContainer: 'TrailerHeader_shimmerContainer__cOsas',
                titleShimmer: 'TrailerHeader_titleShimmer__KKn7b',
                descriptionShimmer: 'TrailerHeader_descriptionShimmer__WOlY5',
                share: 'TrailerHeader_share__5lxh7',
            };
        },
        31824: (e) => {
            e.exports = {
                coverBlock: 'ArtistCard_coverBlock__YCSus',
                like: 'ArtistCard_like__jmlKc',
                root: 'ArtistCard_root__F4RfA',
                root_selected: 'ArtistCard_root_selected__9Djbq',
                cover: 'ArtistCard_cover__RSTvK',
                image: 'ArtistCard_image__Uab5w',
                name: 'ArtistCard_name__IF9yZ',
                icon: 'ArtistCard_icon__PjbJI',
            };
        },
        32341: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedPlusBar_root___wH9W',
                button: 'NavbarDesktopAnimatedPlusBar_button__IX7L4',
                important: 'NavbarDesktopAnimatedPlusBar_important__7R916',
                icon: 'NavbarDesktopAnimatedPlusBar_icon__9lTgJ',
            };
        },
        32538: (e) => {
            e.exports = {
                root: 'TrackModalControls_root__alpd3',
                controlsContainer: 'TrackModalControls_controlsContainer__UeQb4',
                menuWrapper: 'TrackModalControls_menuWrapper__tDLID',
                menuButton: 'TrackModalControls_menuButton__V6L4c',
                disabledButtonByDisclaimer: 'TrackModalControls_disabledButtonByDisclaimer__qfCvg',
            };
        },
        35046: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedDownloadBarEnlarged_root__5lnM0',
                closeButton: 'NavbarDesktopAnimatedDownloadBarEnlarged_closeButton__MSz9j',
                text: 'NavbarDesktopAnimatedDownloadBarEnlarged_text__fT36E',
                downloadButtonText: 'NavbarDesktopAnimatedDownloadBarEnlarged_downloadButtonText__3GqKa',
                textBright: 'NavbarDesktopAnimatedDownloadBarEnlarged_textBright__JA1nf',
                closeButtonIcon: 'NavbarDesktopAnimatedDownloadBarEnlarged_closeButtonIcon___xaoS',
                downloadButtonIcon: 'NavbarDesktopAnimatedDownloadBarEnlarged_downloadButtonIcon__oE_rc',
            };
        },
        35935: (e) => {
            e.exports = {
                root: 'NavbarDesktopPlusOptionsBar_root__2WZsH',
                addition: 'NavbarDesktopPlusOptionsBar_addition__DJOlV',
                title: 'NavbarDesktopPlusOptionsBar_title__wGODi',
                buttons: 'NavbarDesktopPlusOptionsBar_buttons__lzCHr',
                optionIcon: 'NavbarDesktopPlusOptionsBar_optionIcon__O1ccD',
            };
        },
        36509: (e) => {
            e.exports = { tooltip: 'NavigationOnboarding_tooltip___xZni', text: 'NavigationOnboarding_text__YW93F', button: 'NavigationOnboarding_button__Vc_Ka' };
        },
        37085: (e) => {
            e.exports = { root: 'TicketImage_root__vTgWd' };
        },
        39168: (e) => {
            e.exports = {
                root_primary: 'CommunicationButton_root_primary__rrmax',
                root_plus: 'CommunicationButton_root_plus__d48MV',
                root_secondary: 'CommunicationButton_root_secondary__YQujH',
                text: 'CommunicationButton_text__kObnq',
            };
        },
        42090: (e) => {
            e.exports = {
                root: 'ImageSliderModal_root__AZO_D',
                root_mobile: 'ImageSliderModal_root_mobile__lBg8o',
                modalContent: 'ImageSliderModal_modalContent__R7c_w',
                closeButton: 'ImageSliderModal_closeButton__mabus',
                content: 'ImageSliderModal_content__Gjm6N',
                image: 'ImageSliderModal_image__ZUYEL',
                image_loading: 'ImageSliderModal_image_loading__1Fyyn',
                leftArrowWrapper: 'ImageSliderModal_leftArrowWrapper__2d5RO',
                rightArrowWrapper: 'ImageSliderModal_rightArrowWrapper__vSPiO',
                slider: 'ImageSliderModal_slider__gDVWR',
                'swiper-pagination-disabled': 'ImageSliderModal_swiper-pagination-disabled__l_U2N',
                'swiper-pagination-clickable': 'ImageSliderModal_swiper-pagination-clickable__URGM_',
                'swiper-rtl': 'ImageSliderModal_swiper-rtl__6n6TQ',
                'swiper-horizontal': 'ImageSliderModal_swiper-horizontal__qVsPY',
                'swiper-vertical': 'ImageSliderModal_swiper-vertical__fVuXc',
                wrapper: 'ImageSliderModal_wrapper__s31SU',
                slide: 'ImageSliderModal_slide__4VnYF',
                loadingIndicator: 'ImageSliderModal_loadingIndicator__3yfbk',
                loadingIndicator_showed: 'ImageSliderModal_loadingIndicator_showed__Ec0yW',
            };
        },
        43794: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => A, A: () => l });
            var i = a(51606),
                n = a(42561),
                r = a(54690);
            let l = i.gK
                .model({ modal: r.qt })
                .views((e) => ({
                    shouldShow() {
                        var t;
                        let { user: a, settings: r } = (0, i.Zn)(e),
                            { sessionStorage: l } = (0, i._$)(e);
                        if (!a.hasPlus || !(null == (t = r.browserInfo) ? void 0 : t.isMobile)) return !1;
                        let s = l.get(n.cYZ.DownloadMobileApp);
                        return null == s || !s.shown;
                    },
                }))
                .actions((e) => ({
                    openModal() {
                        var t;
                        let { localStorage: a, sessionStorage: r } = (0, i._$)(e);
                        if (!(null == (t = a.get(n.cYZ.DownloadMobileApp)) ? void 0 : t.shown)) {
                            e.modal.open(), a.set(n.cYZ.DownloadMobileApp, { shown: !0 }), r.set(n.cYZ.DownloadMobileApp, { shown: !0 });
                            return;
                        }
                        setTimeout(() => {
                            e.modal.open();
                        }, 5e3),
                            r.set(n.cYZ.DownloadMobileApp, { shown: !0 });
                    },
                }));
            var s = a(62936),
                o = a(19718),
                d = a(4714),
                c = a(79950),
                u = a(47480),
                m = a(26731),
                _ = a(5099),
                p = a(85742),
                g = a(55619),
                v = a(20418),
                h = a(44810),
                b = a.n(h);
            let I = (0, o.PA)(() => {
                let { downloadMobileApp: e, user: t, settings: a } = (0, n.Pjs)(),
                    { formatMessage: i } = (0, u.A)(),
                    r = (0, n.qQp)({ browserInfo: a.browserInfo, login: t.account.data.login });
                return (0, s.jsxs)('div', {
                    className: (0, c.$)(b().root, (0, n.JH_)(n.Sxu.Dark)),
                    children: [
                        (0, s.jsx)(_.$, {
                            className: b().closeButton,
                            radius: 'round',
                            size: 'xxs',
                            icon: (0, s.jsx)(p.Icon, { variant: 'close', size: 'xxs' }),
                            'aria-label': i({ id: 'interface-actions.close' }),
                            onClick: e.modal.close,
                        }),
                        (0, s.jsxs)('div', {
                            className: b().text,
                            children: [
                                (0, s.jsx)(v.Heading, {
                                    variant: 'h1',
                                    size: 'xl',
                                    weight: 'bold',
                                    children: (0, s.jsx)(m.A, { id: 'download-mobile-app.title', values: { nbsp: '\xa0' } }),
                                }),
                                (0, s.jsx)(v.Caption, {
                                    className: b().subtitle,
                                    variant: 'p',
                                    size: 'l',
                                    weight: 'bold',
                                    children: (0, s.jsx)(m.A, { id: 'download-mobile-app.subtitle', values: { nbsp: '\xa0' } }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)('div', {
                            className: b().buttons,
                            children: [
                                (0, s.jsx)(g.N, {
                                    className: b().listenInAppLink,
                                    href: r(),
                                    children: (0, s.jsx)(_.$, {
                                        className: b().button,
                                        color: 'primary',
                                        size: 'm',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(v.Caption, {
                                            variant: 'span',
                                            size: 'm',
                                            weight: 'medium',
                                            children: (0, s.jsx)(m.A, { id: 'download-mobile-app.listen-in-app' }),
                                        }),
                                    }),
                                }),
                                (0, s.jsx)(_.$, {
                                    className: (0, c.$)(b().button, b().stayButton),
                                    variant: 'text',
                                    size: 'm',
                                    color: 'secondary',
                                    radius: 'xxxl',
                                    onClick: e.modal.close,
                                    children: (0, s.jsx)(v.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        weight: 'medium',
                                        children: (0, s.jsx)(m.A, { id: 'download-mobile-app.stay' }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var x = a(78184),
                N = a.n(x);
            let A = (0, o.PA)(() => {
                let { downloadMobileApp: e } = (0, n.Pjs)();
                return (0, s.jsx)(d.a, {
                    className: N().root,
                    contentClassName: N().content,
                    open: e.modal.isOpened,
                    size: 'fullscreen',
                    placement: 'center',
                    showHeader: !1,
                    closeOnOutsidePress: !1,
                    overlayColor: 'full',
                    onOpenChange: e.modal.onOpenChange,
                    onClose: e.modal.close,
                    children: (0, s.jsx)(I, {}),
                });
            });
        },
        44810: (e) => {
            e.exports = {
                root: 'DownloadMobileApp_root__RU7VS',
                closeButton: 'DownloadMobileApp_closeButton__t38Rw',
                text: 'DownloadMobileApp_text__bCbs3',
                subtitle: 'DownloadMobileApp_subtitle__vPtiS',
                buttons: 'DownloadMobileApp_buttons__mL4w1',
                listenInAppLink: 'DownloadMobileApp_listenInAppLink__flOyk',
                button: 'DownloadMobileApp_button__r0E7Z',
                stayButton: 'DownloadMobileApp_stayButton__k3Ot8',
            };
        },
        45269: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedBar_root__tTyvO',
                bar: 'NavbarDesktopAnimatedBar_bar__Wge_o',
                bar_enter: 'NavbarDesktopAnimatedBar_bar_enter__pUWOV',
                bar_enter_active: 'NavbarDesktopAnimatedBar_bar_enter_active__cYAzl',
                animation_show: 'NavbarDesktopAnimatedBar_animation_show__oAMq1',
                animation_scale: 'NavbarDesktopAnimatedBar_animation_scale__iOhup',
                bar_exit: 'NavbarDesktopAnimatedBar_bar_exit__Wq1AL',
                bar_exit_active: 'NavbarDesktopAnimatedBar_bar_exit_active__EZFDU',
                animation_hide: 'NavbarDesktopAnimatedBar_animation_hide__Eiu1e',
                animation_unscale: 'NavbarDesktopAnimatedBar_animation_unscale__gyZb6',
                button: 'NavbarDesktopAnimatedBar_button__T7n21',
                button_enter: 'NavbarDesktopAnimatedBar_button_enter__6v5a5',
                button_enter_active: 'NavbarDesktopAnimatedBar_button_enter_active__jZmtw',
                button_exit: 'NavbarDesktopAnimatedBar_button_exit__j8qXO',
                button_exit_active: 'NavbarDesktopAnimatedBar_button_exit_active__D5JJp',
            };
        },
        46608: (e) => {
            e.exports = {
                heading: 'BuySubscriptionBaseContent_heading__lQExw',
                buttons: 'BuySubscriptionBaseContent_buttons__1MZhL',
                button: 'BuySubscriptionBaseContent_button___DQII',
                buttonMainText: 'BuySubscriptionBaseContent_buttonMainText__kKEWL',
                buttonAdditionText: 'BuySubscriptionBaseContent_buttonAdditionText__lV_51',
            };
        },
        46842: (e) => {
            e.exports = {
                root: 'PaymentWidgetModal_root__I6Hrp',
                root_loaded: 'PaymentWidgetModal_root_loaded__Rzltj',
                root_level_up: 'PaymentWidgetModal_root_level_up__pj52G',
                content: 'PaymentWidgetModal_content__ifRry',
                widget: 'PaymentWidgetModal_widget__cu_gr',
            };
        },
        47958: (e) => {
            e.exports = {
                root: 'SideAdvertBanner_root__hT1jJ',
                root_hidden: 'SideAdvertBanner_root_hidden__Yg__R',
                contentWrapper: 'SideAdvertBanner_contentWrapper__5255E',
                content: 'SideAdvertBanner_content__nDGWG',
                disableAdsButton: 'SideAdvertBanner_disableAdsButton__is8g1',
            };
        },
        48579: (e) => {
            e.exports = {
                root: 'NavbarDesktopPlusBar_root__QgKqJ',
                logos: 'NavbarDesktopPlusBar_logos__kKKEl',
                addition: 'NavbarDesktopPlusBar_addition__vluXf',
                title: 'NavbarDesktopPlusBar_title__mMdem',
                buttons: 'NavbarDesktopPlusBar_buttons__40_1A',
            };
        },
        51708: (e, t, a) => {
            'use strict';
            a.d(t, { Fp: () => tW, _1: () => w, Yp: () => I });
            var i,
                n,
                r,
                l,
                s,
                o,
                d,
                c,
                u,
                m,
                _ = a(30643),
                p = a(44020),
                g = a.t(p, 2),
                v = a(55471),
                h = a(42561);
            let b = (e) => window.innerWidth < (e ? 1920 : 1024),
                I = () => {
                    let { sideBannerRef: e } = (0, h.gKY)(),
                        {
                            advertBanners: {
                                banners: { sideAdvertBanner: t },
                            },
                        } = (0, h.Pjs)(),
                        a = (0, v.y)(),
                        i = e ? !!(t.isVisible && e.clientWidth) : a,
                        [n, r] = (0, p.useState)(b(i)),
                        l = (0, p.useMemo)(
                            () =>
                                (0, _.A)(
                                    () => {
                                        r(b(i));
                                    },
                                    100,
                                    { trailing: !1 },
                                ),
                            [r, i],
                        );
                    return (
                        (0, p.useEffect)(
                            () => (
                                window.addEventListener('resize', l),
                                l(),
                                () => {
                                    window.removeEventListener('resize', l);
                                }
                            ),
                            [l],
                        ),
                        n
                    );
                };
            var x = a(51606),
                N = a(92496),
                A = a(25270),
                S = a(81628),
                y = a(25358),
                C = a(32632);
            let f = x.gK.model('PinAlbumItemModel', { type: x.gK.literal(N._.ALBUM_ITEM), data: A.GI }),
                T = x.gK.model('PinArtistItemModel', { type: x.gK.literal(N._.ARTIST_ITEM), data: S.PK }),
                E = x.gK.model('PinPlaylistItemModel', { type: x.gK.literal(N._.PLAYLIST_ITEM), data: y.$o }),
                L = x.gK.model('PinVibeItemModel', { type: x.gK.literal(N._.WAVE_ITEM), data: C.Gh }),
                j = x.gK.union(f, T, E, L),
                P = (e) => 'object' == typeof e && e && 'type' in e;
            var R = a(90914),
                k = a(79670);
            let M = (e) => {
                    switch (e.type) {
                        case N._.WAVE_ITEM:
                            return (0, x.wg)({ type: N._.WAVE_ITEM, data: (0, C.er)(e.data) });
                        case N._.PLAYLIST_ITEM:
                            return (0, x.wg)({ type: N._.PLAYLIST_ITEM, data: (0, k.bk)({ playlist: e.data }) });
                        case N._.ARTIST_ITEM:
                            return (0, x.wg)({ type: N._.ARTIST_ITEM, data: (0, S.as)({ artist: e.data }) });
                        case N._.ALBUM_ITEM:
                            return (0, x.wg)({ type: N._.ALBUM_ITEM, data: (0, R.sK)({ album: e.data }) });
                    }
                },
                w = x.gK
                    .model('Pins', { loadingState: x.gK.enumeration(Object.values(h.GuX)), items: x.gK.maybeNull(x.gK.array(j)), index: x.gK.map(x.gK.boolean) })
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
                                (e.items = (0, x.wg)(null == (a = e.items) ? void 0 : a.filter((e) => e.data.pinId !== t))), e.index.delete(t);
                            },
                            addPin(t) {
                                var a, i, n, r;
                                if ((null == (a = e.items) ? void 0 : a.length) === 30) {
                                    let t = null == (r = e.items) ? void 0 : r.pop();
                                    void 0 !== t && e.index.delete(t.data.pinId);
                                }
                                null == (i = e.items) || i.unshift(M(t));
                                let l = null == (n = e.items) ? void 0 : n.at(0);
                                l && e.index.set(l.data.pinId, !0);
                            },
                            getData: (0, x.L3)(function* () {
                                let { pinsResource: t, modelActionsLogger: a } = (0, x._$)(e);
                                if (e.loadingState !== h.GuX.PENDING)
                                    try {
                                        var i;
                                        e.loadingState = h.GuX.PENDING;
                                        let a = yield t.getPins();
                                        (e.items = (0, x.wg)(a.pins.map(M))),
                                            null == (i = e.items) ||
                                                i.forEach((t) => {
                                                    e.index.set(t.data.pinId, !0);
                                                }),
                                            (e.loadingState = h.GuX.RESOLVE);
                                    } catch (t) {
                                        (e.loadingState = h.GuX.REJECT), a.error(t);
                                    }
                            }),
                            toggleAlbumPin: (0, x.L3)(function* (a, i) {
                                let { pinResource: n, modelActionsLogger: r } = (0, x._$)(e);
                                if (e.loadingState !== h.GuX.PENDING)
                                    try {
                                        let r;
                                        if (e.isPinned(i)) return (r = yield n.unpinAlbum(a)), t.deletePin(i), r;
                                        return (r = yield n.pinAlbum(a)), P(r) && t.addPin(r), r;
                                    } catch (e) {
                                        r.error(e);
                                        return;
                                    }
                            }),
                            toggleArtistPin: (0, x.L3)(function* (a, i) {
                                let { pinResource: n, modelActionsLogger: r } = (0, x._$)(e);
                                if (e.loadingState !== h.GuX.PENDING)
                                    try {
                                        let r;
                                        if (e.isPinned(i)) return (r = yield n.unpinArtist(a)), t.deletePin(i), r;
                                        return (r = yield n.pinArtist(a)), P(r) && t.addPin(r), r;
                                    } catch (e) {
                                        r.error(e);
                                        return;
                                    }
                            }),
                            togglePlaylistPin: (0, x.L3)(function* (a, i) {
                                let { pinResource: n, modelActionsLogger: r } = (0, x._$)(e);
                                if (e.loadingState !== h.GuX.PENDING)
                                    try {
                                        let r;
                                        if (e.isPinned(i)) return (r = yield n.unpinPlaylist(a)), t.deletePin(i), r;
                                        return (r = yield n.pinPlaylist(a)), P(r) && t.addPin(r), r;
                                    } catch (e) {
                                        r.error(e);
                                        return;
                                    }
                            }),
                            toggleVibePin: (0, x.L3)(function* (a, i) {
                                let { pinResource: n, modelActionsLogger: r } = (0, x._$)(e);
                                if (e.loadingState !== h.GuX.PENDING)
                                    try {
                                        let r;
                                        if (e.isPinned(i)) return (r = yield n.unpinWave(a)), t.deletePin(i), r;
                                        return (r = yield n.pinWave(a)), P(r) && t.addPin(r), r;
                                    } catch (e) {
                                        r.error(e);
                                        return;
                                    }
                            }),
                        };
                        return t;
                    });
            var O = a(62936),
                B = a(79950),
                D = a(19718),
                K = a(8669),
                U = a(59935),
                G = a(23480),
                V = a(11584),
                z = a(56367),
                F = a.n(z),
                W = a(47480),
                X = a(26731),
                Y = a(56874),
                $ = a(5099),
                H = a(85742),
                q = a(50576),
                Z = a(4714),
                Q = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length; )
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (n && (n += ' '), (n += i));
                                            else for (a in t) t[a] && (n && (n += ' '), (n += a));
                                        return n;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        a.r(t), a.d(t, { clsx: () => i, default: () => n });
                        let n = i;
                    },
                    2408: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = {
                            root: 'NGdj0oZ2Bt8qdZhP2Tzt',
                            root_collapsed: 'rece5errcONnjJeX0YW8',
                            root_direction_vertical: 'QilmoKKJwk6f0BdkYgrA',
                            root_direction_horizontal: 'AO4rWY4RLVh48fwQw5Qs',
                        };
                    },
                    1308: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = { root: 'yuyI2hMAT7qyL1N14MAQ', root_direction_vertical: 'xfFtKQpgAYvC2jI1tBtS', root_direction_horizontal: 'OGlYJO0lZgpSOhfU2Iru' };
                    },
                    2056: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = {
                            root: 'Bp1d3U6W8Nrbqi3MRQS_',
                            root_direction_vertical: 'hYfgO_Y8c4rrQsZJWTDZ',
                            ripple: 'UiZ4QyGEVzfvZ3QfQqqA',
                            root_direction_horizontal: 'X_Lr5kqrhzMO6kX8v92s',
                            root_collapsed: 'Q3gGGaIXiJ_oQTiVZBfl',
                            root_variant_main: 'H4trq_Zx2d9qOnQgxmxr',
                            root_animate: 'Kr9rXeXGlqHee2euqH0u',
                            animation_width: 'k8zKIZRDy6LmoaIcEpo8',
                            item: 'A4bDkbQHkwWNGqxO9qhW',
                            item_selected: 'mAd9pgMkWVX5ktCgYINQ',
                            item_direction_vertical: 'Xx9Tg5ugzg1pkf8Zh421',
                            item_direction_horizontal: 'fQVXazc9HwT3NQ8dywCh',
                            iconContainer: 'zpkgiiHgDpbBThy6gavq',
                            textContainer: 'ZrkG6gNYcr4h3hfkhyT1',
                            textContainer_selected: 'xENlRAFvRskKnt8LUObC',
                            textContainer_direction_horizontal: 'xE5fIMRnjd8oSm5BOhpI',
                        };
                    },
                    5408: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = {
                            root: 'HcfYy4VfnRHqgXzIdL7w',
                            root_direction_vertical: 'kRmUIkcHKD5AgtpPo8wT',
                            ripple: 'aHtf5XL4YejhYEJNUkYi',
                            root_direction_horizontal: 'ZxlCWb78gIBQ8izioAXa',
                            root_collapsed: 'e1KYSvMXXv0FD4s_yCuw',
                            item: 'ZfF8mQ3Iftpwu0aZgDtG',
                            item_selected: 'Eg3pt5lTL33sOlxorSbN',
                            item_direction_vertical: 'yWJHrpNsBvchs9Jjyokk',
                            item_direction_horizontal: 'bJ7YpssStK5UnpbuTtf2',
                            item_collapsed_vertical: 'uw57VJ37U4rAAHDs0zJR',
                            iconContainer: '_YzsXZGNK8KeaUFC4Ja1',
                            textContainer: 'nxMXCBiVfgH4oxds3f2y',
                            textContainer_selected: 'jhnLSZpmG69Hlxi8n6IO',
                            textContainer_direction_horizontal: 'FH36Kh9OP4VHc2Yv3bIc',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var n = null;
                            if ((void 0 !== i && (n = '' + i), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var r in ((i = {}), t)) 'key' !== r && (i[r] = t[r]);
                            else i = t;
                            return { $$typeof: a, type: e, key: n, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i);
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    8796: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, a) {
                                let i = null != a ? a : e.currentTarget,
                                    n = document.createElement('span'),
                                    r = Math.max(i.clientWidth, i.clientHeight),
                                    l = r / 2,
                                    s = i.getBoundingClientRect(),
                                    o = 0 === e.clientX ? Math.round(s.width / 2) : e.clientX - s.left,
                                    d = 0 === e.clientY ? Math.round(s.height / 2) : e.clientY - s.top;
                                (n.style.width = ''.concat(r, 'px')),
                                    (n.style.height = ''.concat(r, 'px')),
                                    (n.style.left = 0 === e.clientX ? '0px' : ''.concat(o - l, 'px')),
                                    (n.style.top = ''.concat(d - l, 'px')),
                                    n.classList.add(t);
                                let c = i.getElementsByClassName(t)[0];
                                c && c.remove(), i.insertBefore(n, i.firstChild);
                            });
                    },
                    361: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            });
                    },
                    8216: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.getElementFromRefOrElement = t.createRipple = void 0);
                        var i = a(8796);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return i.createRipple;
                            },
                        });
                        var n = a(361);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return n.getElementFromRefOrElement;
                            },
                        });
                    },
                    19: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Navigation = void 0);
                        let n = a(4377),
                            r = a(5881),
                            l = a(7786),
                            s = i(a(2408));
                        t.Navigation = function (e) {
                            let { className: t, children: a, collapsed: i = !1, direction: o = 'vertical', ...d } = e;
                            return (0, n.jsx)(l.NavigationProvider, {
                                collapsed: i,
                                direction: o,
                                children: (0, n.jsx)('nav', {
                                    className: (0, r.clsx)(s.default.root, s.default['root_direction_'.concat(o)], { [s.default.root_collapsed]: i }, t),
                                    'aria-label': d['aria-label'],
                                    ...d,
                                    children: a,
                                }),
                            });
                        };
                    },
                    7786: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationProvider = t.NavigationContext = void 0);
                        let i = a(4377),
                            n = a(810);
                        (t.NavigationContext = (0, n.createContext)({ collapsed: !1, direction: 'vertical' })),
                            (t.NavigationProvider = (e) => {
                                let { collapsed: a, direction: r, children: l } = e,
                                    s = (0, n.useMemo)(() => ({ collapsed: a, direction: r }), [a, r]);
                                return (0, i.jsx)(t.NavigationContext.Provider, { value: s, children: l });
                            });
                    },
                    8106: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationGroup = void 0);
                        let n = a(4377),
                            r = a(810),
                            l = a(5881),
                            s = a(7786),
                            o = i(a(1308));
                        t.NavigationGroup = function (e) {
                            let { className: t, children: a, ...i } = e,
                                d = (0, r.createRef)(),
                                { direction: c } = (0, r.useContext)(s.NavigationContext);
                            return (0, n.jsx)('ol', { ref: d, className: (0, l.clsx)(o.default.root, o.default['root_direction_'.concat(c)], t), ...i, children: a });
                        };
                    },
                    3506: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationItem = t.NavigationItemComponent = void 0);
                        let n = a(4377),
                            r = a(810),
                            l = a(5881),
                            s = a(7786),
                            o = a(8216),
                            d = i(a(2056)),
                            c = i(a(5408));
                        function u(e) {
                            let {
                                    className: t = '',
                                    forwardRef: a,
                                    children: i,
                                    selected: u = !1,
                                    shownAnimation: m,
                                    withRipple: _ = !1,
                                    variant: p = 'default',
                                    isNewVisualVersion: g,
                                    ...v
                                } = e,
                                { collapsed: h, direction: b } = (0, r.useContext)(s.NavigationContext),
                                I = g ? c.default : d.default,
                                x = (0, r.useCallback)(
                                    (e) => {
                                        _ && (0, o.createRipple)(e, I.ripple);
                                    },
                                    [I.ripple, _],
                                ),
                                [N, A] = r.Children.toArray(i.props.children),
                                S = (0, r.useMemo)(
                                    () =>
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)('div', { className: I.iconContainer, children: N }),
                                                (0, n.jsx)('div', {
                                                    className: (0, l.clsx)(I.textContainer, I['textContainer_direction_'.concat(b)], { [I.textContainer_selected]: u }),
                                                    children: A,
                                                }),
                                            ],
                                        }),
                                    [I, N, b, u, A],
                                ),
                                y = (0, r.cloneElement)(i, {
                                    className: (0, l.clsx)(
                                        I.item,
                                        I['item_direction_'.concat(b)],
                                        { [I.item_selected]: u, [I['item_collapsed_'.concat(b)]]: h },
                                        i.props.className,
                                    ),
                                    children: S,
                                });
                            return (0, n.jsx)('li', {
                                ref: a,
                                className: (0, l.clsx)(
                                    I.root,
                                    I['root_direction_'.concat(b)],
                                    I['root_variant_'.concat(p)],
                                    { [I.root_animate]: m, [I.root_collapsed]: h },
                                    t,
                                ),
                                'aria-current': !!u && 'page',
                                onClick: x,
                                ...v,
                                children: y,
                            });
                        }
                        (t.NavigationItemComponent = u), (t.NavigationItem = (0, r.forwardRef)((e, t) => (0, n.jsx)(u, { forwardRef: t, ...e })));
                    },
                    810: (e) => {
                        e.exports = g;
                    },
                },
                J = {};
            function ee(e) {
                var t = J[e];
                if (void 0 !== t) return t.exports;
                var a = (J[e] = { exports: {} });
                return Q[e].call(a.exports, a, a.exports, ee), a.exports;
            }
            (ee.d = (e, t) => {
                for (var a in t) ee.o(t, a) && !ee.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (ee.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (ee.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var et = {};
            (() => {
                Object.defineProperty(et, 'X$', { value: !0 }), (et.Dx = et.KB = et.W_ = void 0);
                var e = ee(19);
                Object.defineProperty(et, 'W_', {
                    enumerable: !0,
                    get: function () {
                        return e.Navigation;
                    },
                });
                var t = ee(8106);
                Object.defineProperty(et, 'KB', {
                    enumerable: !0,
                    get: function () {
                        return t.NavigationGroup;
                    },
                });
                var a = ee(3506);
                Object.defineProperty(et, 'Dx', {
                    enumerable: !0,
                    get: function () {
                        return a.NavigationItem;
                    },
                });
            })();
            var ea = et.W_,
                ei = et.KB,
                en = et.Dx;
            et.X$;
            var er = a(62828),
                el = a(20418),
                es = a(44588),
                eo = a(85906);
            let ed = () => {
                    let e = (0, V.st)(),
                        { hash: t } = (0, V.gf)(),
                        a = (0, h.UlF)(),
                        { location: i } = (0, h.Pjs)();
                    return (0, p.useCallback)(
                        (n, r) => {
                            if (!e || !t) return;
                            let l = (0, G.Fx)({
                                params: ((e) => {
                                    let { isNotFound: t, entityType: a, to: i, hash: n } = e;
                                    return t
                                        ? {
                                              entityType: G.LA.Error,
                                              entityId: G.LA.Error,
                                              hash: n,
                                              pageId: G.QT.PageNotFoundScreen,
                                              pageStyle: G.QL.Fullscreen,
                                              pagePlacement: G.c4.Fullscreen,
                                              mainObjectType: G.ky.NonApplicable,
                                              mainObjectId: G.ky.NonApplicable,
                                              from: G.QT.PageNotFoundScreen,
                                              to: i,
                                          }
                                        : {
                                              entityType: a,
                                              entityId: a,
                                              hash: n,
                                              pageId: G.QT.Sidebar,
                                              pageStyle: G.QL.Bar,
                                              pagePlacement: G.c4.Left,
                                              from: G.QT.Sidebar,
                                              to: i,
                                          };
                                })({ isNotFound: i.isNotFound, entityType: n, to: r, hash: t }),
                                logger: a,
                                context: 'useSendEventOnNavbarNavigated',
                            });
                            l && (0, G.ID)(e.evgenInstance, l);
                        },
                        [e, t, a, i.isNotFound],
                    );
                },
                ec = {
                    [h.RnV.SEARCH]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_SEARCH,
                    [h.RnV.HOME]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_HOME,
                    [h.RnV.FOR_YOU_AND_TRENDS]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_FOR_YOU_AND_TRENDS,
                    [h.RnV.CONCERTS]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_CONCERTS,
                    [h.RnV.NON_MUSIC]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_NON_MUSIC,
                    [h.RnV.KIDS]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_KIDS,
                    [h.RnV.COLLECTION]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_COLLECTION,
                    [h.RnV.PLUS]: K.e8.navbar.NAVBAR_NAVIGATION_ITEM_PLUS,
                },
                eu = (e) => {
                    let { padding: t, placement: a } = e;
                    return { shiftOptions: { padding: t }, offsetOptions: t, flipOptions: { fallbackAxisSideDirection: 'start', padding: t }, placement: a };
                },
                em = eu({ placement: 'right', padding: 8 });
            var e_ = a(36509),
                ep = a.n(e_);
            let eg = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                ev = (0, D.PA)((e) => {
                    let { config: t, children: a } = e,
                        { formatMessage: i } = (0, W.A)(),
                        {
                            settings: { isMobile: n },
                        } = (0, h.Pjs)(),
                        { compositePlayerBarRef: r } = (0, h.gKY)(),
                        { setIsOnboardingOpened: l } = (0, h.wD7)(),
                        [s, o] = (0, Y.d)(),
                        d = (0, h.zzi)({ id: t.id, ref: s }),
                        [c, u] = (0, p.useState)(d && t.isEnabled),
                        m = (0, U.c)((e) => {
                            null == e || e.stopPropagation(), u(!1), l(!1);
                        }),
                        _ = (0, U.c)((e) => {
                            e || m();
                        });
                    return (0, O.jsxs)(er.m_, {
                        placement: n ? 'top' : 'right',
                        arrowProps: eg,
                        offsetOptions: n ? 15 : -10,
                        isHoverEnabled: !1,
                        open: c,
                        onOpenChange: _,
                        enableAriaDescribedby: !0,
                        referenceRef: o,
                        children: [
                            a,
                            (0, O.jsxs)(er.ZI, {
                                className: ep().tooltip,
                                rootNode: n ? r : void 0,
                                children: [
                                    (0, O.jsx)($.$, {
                                        icon: (0, O.jsx)(H.Icon, { variant: 'close', size: 'xxs' }),
                                        onClick: m,
                                        variant: 'text',
                                        withRipple: !1,
                                        className: ep().button,
                                        'aria-label': i({ id: 'interface-actions.close' }),
                                    }),
                                    (0, O.jsx)(el.Caption, { className: ep().text, variant: 'span', children: t.text }),
                                ],
                            }),
                        ],
                    });
                }),
                eh = (e) => {
                    let { config: t, children: a } = e;
                    return t ? (0, O.jsx)(ev, { config: t, children: a }) : a;
                };
            var eb = a(50794),
                eI = a(53058),
                ex = a(13030),
                eN = a(56721);
            let eA = () => {
                let e = (0, V.st)(),
                    { hash: t } = (0, V.gf)(),
                    a = (0, h.UlF)(),
                    {
                        settings: { isMobile: i },
                    } = (0, h.Pjs)();
                return (0, p.useCallback)(
                    (n, r) => {
                        if (!e) return;
                        let l = (0, G.Fx)({
                            params: { hash: t, pageId: G.QT.Sidebar, sidebarSize: n || i ? G.JQ.Small : G.JQ.Medium, from: G.QT.Sidebar, to: r },
                            logger: a,
                            context: 'useSendEventOnSidebarNavigated',
                        });
                        l && (0, G.qi)(e.evgenInstance, l);
                    },
                    [e, t, i, a],
                );
            };
            var eS = a(49923),
                ey = a(77377),
                eC = a.n(ey);
            let ef = (e) => {
                    let { children: t, entityUrl: a, ...i } = e;
                    return a ? (0, O.jsx)(eo.N_, { href: a, className: eC().link, ...i, children: t }) : t;
                },
                eT = (e) => {
                    let {
                            className: t,
                            cover: a,
                            title: i,
                            subtitle: n,
                            contextMenu: r,
                            isCollapsed: l,
                            withCollapseAnimation: s,
                            entityUrl: o,
                            onDoubleClick: d,
                            onClick: c,
                            forwardRef: u,
                            ariaLabel: m,
                        } = e,
                        _ = (0, h.EE7)(),
                        g = (0, p.useCallback)(
                            (e) => {
                                2 === e.detail
                                    ? null == d || d()
                                    : (e.target instanceof HTMLElement && 'IMG' !== e.target.tagName && (0, eS.P)(e, eC().ripple), null == c || c(e));
                            },
                            [c, d],
                        ),
                        v = o && _([o]) ? void 0 : o;
                    return (0, O.jsxs)(eo.Cj, {
                        ref: u,
                        className: (0, B.$)(eC().root, { [eC().root_withoutLink]: !v }, t),
                        role: 'listitem',
                        'aria-label': m,
                        ...(0, K.Am)(K.e8.navbar.PIN_ITEM),
                        children: [
                            (0, O.jsxs)(ef, {
                                entityUrl: v,
                                onClick: g,
                                children: [
                                    (0, O.jsx)('div', { className: eC().cover, ...(0, K.Am)(K.e8.navbar.PIN_COVER), children: a }),
                                    (0, O.jsx)('div', {
                                        className: eC().meta,
                                        children: (0, O.jsxs)('div', {
                                            className: (0, B.$)(eC().info, {
                                                [eC().info_collapsed]: l,
                                                [eC().info_animated]: s,
                                                [eC().info_withContextMenu]: (0, p.isValidElement)(r),
                                            }),
                                            children: [
                                                (0, O.jsx)(el.Caption, {
                                                    'aria-hidden': !0,
                                                    className: eC().title,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    lineClamp: 1,
                                                    ...(0, K.Am)(K.e8.navbar.PIN_TITLE),
                                                    children: i,
                                                }),
                                                (0, O.jsx)(el.Caption, {
                                                    'aria-hidden': !0,
                                                    className: eC().subtitle,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    lineClamp: 1,
                                                    ...(0, K.Am)(K.e8.navbar.PIN_SUBTITLE),
                                                    children: n,
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, p.isValidElement)(r) &&
                                (0, O.jsx)('div', {
                                    className: (0, B.$)(eC().contextMenu, { [eC().contextMenu_hidden]: l }),
                                    ...(0, K.Am)(K.e8.navbar.PIN_CONTEXT_MENU_BUTTON),
                                    children: r,
                                }),
                        ],
                    });
                },
                eE = (0, p.forwardRef)((e, t) => (0, O.jsx)(eT, { forwardRef: t, ...e })),
                eL = (0, p.createContext)(null);
            var ej = a(75726),
                eP = a.n(ej),
                eR = a(64304);
            let ek = () => {
                    let e = (0, V.st)(),
                        { hash: t } = (0, V.gf)(),
                        a = (0, h.UlF)(),
                        {
                            settings: { isMobile: i },
                        } = (0, h.Pjs)();
                    return (0, p.useCallback)(
                        (n) => {
                            let { actionType: r, isCollapsed: l, mainObjectType: s, mainObjectId: o } = n;
                            if (!e) return;
                            let d = { hash: t, actionType: r, user_interaction_type: G.gi.Tap, pageId: G.QT.Sidebar, sidebarSize: l || i ? G.JQ.Small : G.JQ.Medium };
                            s && (d.mainObjectType = s), o && (d.mainObjectId = o);
                            let c = (0, G.Fx)({ params: d, logger: a, context: 'useSendEventOnSidebarActionPerformed' });
                            c && (0, G.dL)(e.evgenInstance, c);
                        },
                        [e, t, i, a],
                    );
                },
                eM = (e) => {
                    let { onPinClick: t, isPinned: a } = e,
                        { formatMessage: i } = (0, W.A)(),
                        { isCollapsed: n } = (0, p.useContext)(eL) || {},
                        [r, l] = (0, p.useState)(!1),
                        s = ek(),
                        o = (0, p.useCallback)((e) => {
                            e.preventDefault(), e.stopPropagation();
                        }, []),
                        d = (0, p.useCallback)(() => {
                            t(), s({ actionType: G.X2.Unpin, isCollapsed: null != n && n });
                        }, [n, t, s]);
                    return (
                        (0, h.NBO)(r),
                        (0, O.jsx)(eR.W1, {
                            className: (0, B.$)(eP().contextMenu, { [eP().contextMenu_visible]: r }),
                            onClick: o,
                            icon: (0, O.jsx)(H.Icon, { size: 'xxs', variant: 'more' }),
                            tabIndex: n ? -1 : 0,
                            'aria-hidden': n,
                            variant: 'text',
                            offsetOptions: 3,
                            open: r,
                            onOpenChange: l,
                            ariaLabel: i({ id: 'interface-actions.context-menu' }),
                            containerProps: (0, K.Am)(K.e8.navbar.PIN_CONTEXT_MENU),
                            children: (0, O.jsx)(eo.L1, { onClick: d, isPinned: a }),
                        })
                    );
                },
                ew = (0, D.PA)((e) => {
                    var t;
                    let { className: a, album: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: l } = (0, W.A)(),
                        { isCollapsed: s, withCollapseAnimation: o } = null != (t = (0, p.useContext)(eL)) ? t : {},
                        d = (0, A.A7)(i),
                        c = (0, A.r_)(i.type, A.cr.PIN),
                        u = eA(),
                        m = (0, A.Rl)(i.type),
                        _ = (0, h.ZpR)(i.url),
                        g = (0, A.$1)({ albumId: i.id, albumUrl: i.url, callback: _ }),
                        v = (0, A.cp)({ album: i, callback: g }),
                        b = (0, U.c)((e) => {
                            u(null != s && s, m), v(e);
                        }),
                        I = (0, p.useMemo)(
                            () =>
                                (0, O.jsx)(eN.Paper, {
                                    className: eP().cover,
                                    radius: 'xs',
                                    children: (0, O.jsxs)(er.m_, {
                                        ...r,
                                        enabled: s,
                                        children: [
                                            (0, O.jsx)(ex.Image, {
                                                className: eP().image,
                                                'aria-hidden': !0,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, O.jsx)(er.ZI, {
                                                className: eP().tooltip,
                                                children: (0, O.jsx)(el.Caption, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.title,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [i.coverUri, i.title, s, r],
                        );
                    return (0, O.jsx)(eE, {
                        ref: n,
                        ariaLabel: l({ id: 'entity-names.album-name' }, { albumName: i.title }),
                        className: (0, B.$)(eP().root, a),
                        title: i.title,
                        entityUrl: i.url,
                        subtitle: c,
                        cover: I,
                        isCollapsed: !!s,
                        withCollapseAnimation: !!o,
                        contextMenu: (0, O.jsx)(eM, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: b,
                    });
                }),
                eO = (0, p.forwardRef)((e, t) => (0, O.jsx)(ew, { forwardRef: t, ...e })),
                eB = (0, D.PA)((e) => {
                    var t;
                    let { className: a, artist: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: l } = (0, W.A)(),
                        { isCollapsed: s, withCollapseAnimation: o } = null != (t = (0, p.useContext)(eL)) ? t : {},
                        d = (0, S.A7)(i),
                        c = eA(),
                        u = (0, h.ZpR)(i.url),
                        m = (0, S.SA)({ artist: i, callback: u }),
                        _ = (0, U.c)((e) => {
                            c(null != s && s, G.QT.ArtistScreen), m(e);
                        }),
                        g = (0, p.useMemo)(
                            () =>
                                (0, O.jsx)(eN.Paper, {
                                    className: eP().cover,
                                    radius: 'round',
                                    children: (0, O.jsxs)(er.m_, {
                                        ...r,
                                        enabled: s,
                                        children: [
                                            (0, O.jsx)(ex.Image, {
                                                className: eP().image,
                                                'aria-hidden': !0,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, O.jsx)(er.ZI, {
                                                className: eP().tooltip,
                                                children: (0, O.jsx)(el.Caption, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.name,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [i.coverUri, i.name, s, r],
                        );
                    return (0, O.jsx)(eE, {
                        ref: n,
                        ariaLabel: l({ id: 'entity-names.artist-name' }, { artistName: i.name }),
                        className: (0, B.$)(eP().root, a),
                        title: i.name,
                        entityUrl: i.url,
                        subtitle: (0, O.jsx)(X.A, { id: 'entity-names.artist' }),
                        cover: g,
                        isCollapsed: !!s,
                        withCollapseAnimation: !!o,
                        contextMenu: (0, O.jsx)(eM, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: _,
                    });
                }),
                eD = (0, p.forwardRef)((e, t) => (0, O.jsx)(eB, { forwardRef: t, ...e })),
                eK = (e) => {
                    var t;
                    let { className: a, playlist: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: l } = (0, W.A)(),
                        { isCollapsed: s, withCollapseAnimation: o } = null != (t = (0, p.useContext)(eL)) ? t : {},
                        d = (0, y.A7)(i),
                        c = eA(),
                        u = (0, U.c)(() => {
                            c(null != s && s, G.QT.PlaylistScreen);
                        }),
                        m = (0, p.useMemo)(
                            () =>
                                (0, O.jsx)(eN.Paper, {
                                    className: eP().cover,
                                    radius: 'xs',
                                    children: (0, O.jsxs)(er.m_, {
                                        ...r,
                                        enabled: s,
                                        children: [
                                            (0, O.jsx)(ex.Image, {
                                                'aria-hidden': !0,
                                                className: eP().image,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, O.jsx)(er.ZI, {
                                                className: eP().tooltip,
                                                children: (0, O.jsx)(el.Caption, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.title,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [s, i.coverUri, i.title, r],
                        );
                    return (0, O.jsx)(eE, {
                        ref: n,
                        ariaLabel: l({ id: 'entity-names.playlist-name' }, { playlistName: i.title }),
                        className: (0, B.$)(eP().root, a),
                        title: i.title,
                        entityUrl: i.url,
                        subtitle: (0, O.jsx)(X.A, { id: 'entity-names.playlist' }),
                        cover: m,
                        isCollapsed: !!s,
                        withCollapseAnimation: !!o,
                        contextMenu: (0, O.jsx)(eM, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: u,
                    });
                },
                eU = (0, p.forwardRef)((e, t) => (0, O.jsx)(eK, { forwardRef: t, ...e }));
            var eG = a(60188),
                eV = a(4497);
            let ez = (0, D.PA)((e) => {
                    var t;
                    let { className: a, vibe: i, forwardRef: n, tooltipOptions: r } = e,
                        l = (0, p.useId)(),
                        { formatMessage: s } = (0, W.A)(),
                        { isCollapsed: o, withCollapseAnimation: d } = null != (t = (0, p.useContext)(eL)) ? t : {},
                        [c, u] = (0, p.useState)(!1),
                        m = (0, C.A7)(i),
                        { isFreemium: _ } = (0, h.XCI)(),
                        { state: g, setState: v } = (0, eV.e)(!1),
                        b = (() => {
                            let e = (0, V.st)(),
                                { hash: t } = (0, V.gf)(),
                                a = (0, h.UlF)(),
                                {
                                    settings: { isMobile: i },
                                } = (0, h.Pjs)();
                            return (0, p.useCallback)(
                                (n) => {
                                    let { isCollapsed: r, mainObjectId: l } = n;
                                    if (!e) return;
                                    let s = (0, G.Fx)({
                                        params: {
                                            hash: t,
                                            pageId: G.QT.Sidebar,
                                            sidebarSize: r || i ? G.JQ.Small : G.JQ.Medium,
                                            mainObjectType: G.ky.Wave,
                                            mainObjectId: l,
                                        },
                                        logger: a,
                                        context: 'useSendEventOnSidebarStarted',
                                    });
                                    s && (0, G.cV)(e.evgenInstance, s);
                                },
                                [e, t, i, a],
                            );
                        })(),
                        I = ek(),
                        x = (0, h.brA)(),
                        N = (0, h.PT7)(),
                        { isPlaying: A, togglePlay: S, isCurrent: y } = (0, h.B0S)({ seeds: i.seeds, pageIdForFrom: h._Q$.SIDEBAR, blockIdForFrom: h.UfI.RADIO }),
                        f = (0, U.c)(async () => {
                            var e, t;
                            return _
                                ? void v(!0)
                                : (A
                                      ? I({
                                            actionType: G.X2.Pause,
                                            isCollapsed: null != o && o,
                                            mainObjectType: G.ky.Wave,
                                            mainObjectId: null != (e = i.seeds[0]) ? e : '',
                                        })
                                      : b({ isCollapsed: null != o && o, mainObjectId: null != (t = i.seeds[0]) ? t : '' }),
                                  S());
                        }),
                        T = (0, U.c)(() => {
                            N() ||
                                (u(!0),
                                f().finally(() => {
                                    u(!1);
                                }),
                                x(!A));
                        }),
                        E = (0, p.useMemo)(
                            () =>
                                (0, O.jsx)(el.Caption, {
                                    id: l,
                                    variant: 'span',
                                    'aria-label': s({ id: 'entity-names.vibe-name' }, { vibeName: i.title }),
                                    type: 'controls',
                                    size: 's',
                                    lineClamp: 1,
                                    children: i.title,
                                }),
                            [s, l, i.title],
                        ),
                        L = (0, eG.L)(() => {
                            var e;
                            return i.shouldShowAgent && i.agent
                                ? (0, O.jsx)(C.nr, { agent: i.agent, isCurrent: y, isPlaying: A, onPlayButtonClick: T })
                                : (0, O.jsx)(eo.q1, {
                                      isCurrent: y,
                                      isPlaying: A,
                                      isAvailable: !0,
                                      isPlayButtonLoading: c,
                                      onPlayButtonClick: T,
                                      title: i.title,
                                      entityCoverStyle: { backgroundColor: null == (e = i.colors) ? void 0 : e.average },
                                      ariaDescribedBy: l,
                                      coverUri: i.backgroundImageUrl,
                                      radius: 'round',
                                      withLoadingIndicator: !1,
                                  });
                        }),
                        j = (0, eG.L)(() =>
                            (0, O.jsxs)(er.m_, {
                                ...r,
                                enabled: o,
                                children: [
                                    L,
                                    (0, O.jsx)(er.ZI, {
                                        className: eP().tooltip,
                                        children: (0, O.jsx)(el.Caption, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: i.title }),
                                    }),
                                ],
                            }),
                        ),
                        P = (0, p.useCallback)(
                            () =>
                                (0, O.jsx)(eE, {
                                    ref: n,
                                    onDoubleClick: f,
                                    className: (0, B.$)(eP().root, a),
                                    isCollapsed: !!o,
                                    contextMenu: (0, O.jsx)(eM, { onPinClick: m, isPinned: i.isPinned }),
                                    withCollapseAnimation: !!d,
                                    title: E,
                                    subtitle: i.getDescription(s({ id: 'entity-names.my-vibe' })),
                                    cover: j,
                                }),
                            [n, f, a, o, m, i, d, E, s, j],
                        );
                    return (0, O.jsx)(eo.SU, {
                        isEnabled: _,
                        isOpened: g,
                        onOpenChange: v,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: i.stationType,
                        renderChildren: P,
                    });
                }),
                eF = (0, p.forwardRef)((e, t) => (0, O.jsx)(ez, { forwardRef: t, ...e }));
            var eW = a(24411),
                eX = a.n(eW);
            let eY = eu({ placement: 'right', padding: 20 }),
                e$ = { enter: eX().pin_enter, enterActive: eX().pin_enter_active, exit: eX().pin_exit, exitActive: eX().pin_exit_active },
                eH = (0, D.PA)((e) => {
                    var t, a;
                    let { className: i, withCollapseAnimation: n, isCollapsed: r, style: l } = e,
                        { formatMessage: s } = (0, W.A)(),
                        { pinsCollection: o } = (0, h.Pjs)(),
                        d = null == (t = o.items) ? void 0 : t.map(() => (0, p.createRef)()),
                        c = (0, p.useMemo)(() => ({ withCollapseAnimation: n, isCollapsed: r }), [r, n]),
                        u = o.items && o.items.length > 0,
                        m = o.items && o.items.length >= 3;
                    return (0, O.jsx)(eL.Provider, {
                        value: c,
                        children: (0, O.jsx)('div', {
                            className: (0, B.$)(eX().root, { [eX().root_withScroll]: m, [eX().root_hasPins]: u }, i),
                            style: l,
                            ...(0, K.Am)(K.e8.navbar.PIN_LIST),
                            children: (0, O.jsx)('div', {
                                role: 'list',
                                'aria-label': s({ id: 'navigation.pins-list' }),
                                className: eX().content,
                                children: (0, O.jsx)(eb.A, {
                                    component: null,
                                    children:
                                        null == (a = o.items)
                                            ? void 0
                                            : a.map((e, t) => {
                                                  switch (e.type) {
                                                      case N._.ALBUM_ITEM:
                                                          return (0, O.jsx)(
                                                              eI.A,
                                                              {
                                                                  classNames: e$,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, O.jsx)(eO, {
                                                                      className: eX().pin,
                                                                      tooltipOptions: eY,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      album: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case N._.ARTIST_ITEM:
                                                          return (0, O.jsx)(
                                                              eI.A,
                                                              {
                                                                  classNames: e$,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, O.jsx)(eD, {
                                                                      className: eX().pin,
                                                                      tooltipOptions: eY,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      artist: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case N._.PLAYLIST_ITEM:
                                                          return (0, O.jsx)(
                                                              eI.A,
                                                              {
                                                                  classNames: e$,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, O.jsx)(eU, {
                                                                      className: eX().pin,
                                                                      tooltipOptions: eY,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      playlist: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case N._.WAVE_ITEM:
                                                          return (0, O.jsx)(
                                                              eI.A,
                                                              {
                                                                  classNames: e$,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, O.jsx)(eF, {
                                                                      className: eX().pin,
                                                                      tooltipOptions: eY,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      vibe: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                  }
                                              }),
                                }),
                            }),
                        }),
                    });
                }),
                eq = { src: '/_next/static/media/ticket_dark.4e1b9044.png' },
                eZ = { src: '/_next/static/media/ticket_dark_selected.2b929060.png' },
                eQ = { src: '/_next/static/media/ticket_light.6b4bb4f7.png' },
                eJ = { src: '/_next/static/media/ticket_light_selected.648fa420.png' };
            var e0 = a(37085),
                e1 = a.n(e0);
            let e2 = (e) => {
                    let { isSelected: t, forwardRef: a } = e,
                        { theme: i } = (0, h.DPo)(),
                        n = (0, eG.L)(() => {
                            switch (i) {
                                case h.Sxu.Dark:
                                    if (t) return eZ.src;
                                    return eq.src;
                                case h.Sxu.Light:
                                    if (t) return eJ.src;
                                    return eQ.src;
                            }
                        });
                    return (0, O.jsx)(ex.Image, { ref: a, className: e1().root, fit: 'contain', withLoadingIndicator: !1, src: n });
                },
                e4 = (0, p.forwardRef)((e, t) => (0, O.jsx)(e2, { forwardRef: t, ...e }));
            var e8 = a(17456),
                e5 = a.n(e8),
                e6 = (function (e) {
                    return (e.WINDOWS = 'WINDOWS'), (e.MACOS = 'MACOS'), (e.UNKNOWN = 'UNKNOWN'), e;
                })({}),
                e9 = a(45269),
                e3 = a.n(e9);
            let e7 = { exit: e3().bar_exit, exitActive: e3().bar_exit_active, enter: e3().bar_enter, enterActive: e3().bar_enter_active },
                te = { exit: e3().button_exit, exitActive: e3().button_exit_active, enter: e3().button_enter, enterActive: e3().button_enter_active },
                tt = (e) => {
                    let { className: t, children: a, button: i, isCollapsed: n, barClassName: r } = e,
                        l = (0, p.useRef)(null),
                        s = (0, p.useRef)(null);
                    return (0, O.jsxs)('div', {
                        className: (0, B.$)(e3().root, t),
                        children: [
                            (0, O.jsx)(eI.A, {
                                nodeRef: s,
                                in: n,
                                timeout: 150,
                                classNames: te,
                                unmountOnExit: !0,
                                children: (0, O.jsx)('div', { className: (0, B.$)(e3().button), ref: s, children: i }),
                            }),
                            (0, O.jsx)(eI.A, {
                                nodeRef: l,
                                in: !n,
                                timeout: 150,
                                classNames: e7,
                                unmountOnExit: !0,
                                children: (0, O.jsx)('div', { className: (0, B.$)(e3().bar, r), ref: l, children: a }),
                            }),
                        ],
                    });
                },
                ta = (e) => {
                    switch (e) {
                        case e6.MACOS:
                            return 'macos';
                        case e6.WINDOWS:
                            return 'windows';
                        default:
                            return 'musicLogo';
                    }
                },
                ti = (e) => {
                    let { formatMessage: t } = (0, W.A)();
                    switch (e) {
                        case e6.MACOS:
                            return t({ id: 'sidebar.download-macos' });
                        case e6.WINDOWS:
                            return t({ id: 'sidebar.download-windows' });
                        default:
                            return t({ id: 'sidebar.download-app' });
                    }
                };
            var tn = a(35046),
                tr = a.n(tn);
            let tl = (e) => {
                    let { variant: t, forwardRef: a, onDownloadClick: i, onCloseClick: n } = e,
                        { formatMessage: r } = (0, W.A)(),
                        l = ti(t),
                        s = (0, p.useMemo)(() => {
                            let e = { span: (e) => (0, O.jsx)('span', { className: tr().textBright, children: e }) };
                            switch (t) {
                                case e6.MACOS:
                                    return r({ id: 'sidebar.download-macos-formatted' }, e);
                                case e6.WINDOWS:
                                    return r({ id: 'sidebar.download-windows-formatted' }, e);
                                default:
                                    return r({ id: 'sidebar.download-app-formatted' }, e);
                            }
                        }, [r, t]);
                    return (0, O.jsx)('section', {
                        ref: a,
                        'aria-label': l,
                        children: (0, O.jsxs)(eN.Paper, {
                            radius: 'm',
                            className: tr().root,
                            children: [
                                (0, O.jsx)($.$, {
                                    color: 'secondary',
                                    radius: 'round',
                                    variant: 'text',
                                    size: 'xxxs',
                                    className: tr().closeButton,
                                    icon: (0, O.jsx)(H.Icon, { variant: 'close', size: 'xxs', className: tr().closeButtonIcon }),
                                    withRipple: !1,
                                    onClick: n,
                                    'aria-label': r({ id: 'interface-actions.close' }),
                                }),
                                (0, O.jsx)(el.Caption, { variant: 'div', className: tr().text, size: 'm', children: s }),
                                (0, O.jsx)($.$, {
                                    color: 'secondary',
                                    radius: 'xxxl',
                                    size: 'xs',
                                    variant: 'default',
                                    role: 'link',
                                    withRipple: !0,
                                    flexIcon: !0,
                                    'aria-label': l,
                                    onClick: i,
                                    icon: (0, O.jsx)(H.Icon, { variant: ta(t), size: 'xxs', className: tr().downloadButtonIcon }),
                                    ...(0, K.Am)(K.e8.navbar.DOWNLOAD_APP_BUTTON_ENLARGED),
                                    children: (0, O.jsx)(el.Caption, {
                                        variant: 'span',
                                        className: tr().downloadButtonText,
                                        size: 'm',
                                        children: (0, O.jsx)(X.A, { id: 'offline.download' }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                ts = (0, p.forwardRef)((e, t) => (0, O.jsx)(tl, { forwardRef: t, ...e }));
            var to = a(72432),
                td = a.n(to);
            let tc = (e) => {
                    let { variant: t, onDownloadClick: a } = e,
                        i = ti(t),
                        n = (0, p.useMemo)(() => ta(t), [t]);
                    return (0, O.jsxs)(eN.Paper, {
                        radius: 'm',
                        className: td().root,
                        children: [
                            (0, O.jsx)(H.Icon, { variant: n, className: td().icon }),
                            (0, O.jsxs)(er.m_, {
                                placement: 'left',
                                offsetOptions: 4,
                                children: [
                                    (0, O.jsx)($.$, {
                                        className: td().button,
                                        color: 'secondary',
                                        radius: 'round',
                                        size: 'xs',
                                        variant: 'default',
                                        role: 'link',
                                        withRipple: !0,
                                        flexIcon: !0,
                                        onClick: a,
                                        icon: (0, O.jsx)(H.Icon, { variant: 'download', size: 'xxs', className: td().buttonIcon }),
                                        'aria-label': i,
                                        ...(0, K.Am)(K.e8.navbar.DOWNLOAD_APP_BUTTON_MINIMIZED),
                                    }),
                                    (0, O.jsx)(er.ZI, {
                                        children: (0, O.jsx)(el.Caption, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: i }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                tu = (0, D.PA)((e) => {
                    var t;
                    let { isCollapsed: a } = e,
                        { settings: i } = (0, h.Pjs)(),
                        n = (0, h.NFA)(),
                        r = n.get(h.ooW),
                        l = n.get(h.twC),
                        [s, o] = (0, p.useState)(!1),
                        d = (() => {
                            let e = (0, V.st)(),
                                { hash: t } = (0, V.gf)(),
                                a = (0, h.UlF)();
                            return (0, p.useCallback)(() => {
                                if (!e || !t) return;
                                let i = (0, G.Fx)({
                                    params: {
                                        entityType: G.LA.Error,
                                        entityId: G.LA.Error,
                                        hash: t,
                                        pageId: G.QT.PageNotFoundScreen,
                                        pageStyle: G.QL.Fullscreen,
                                        pagePlacement: G.c4.Fullscreen,
                                        mainObjectType: G.ky.NonApplicable,
                                        mainObjectId: G.ky.NonApplicable,
                                        from: G.QT.PageNotFoundScreen,
                                        to: G.QT.AppDownloadScreen,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnDownloadScreenNavigated',
                                });
                                i && (0, G.ID)(e.evgenInstance, i);
                            }, [e, t, a]);
                        })(),
                        c = (0, p.useMemo)(() => {
                            var e;
                            switch (null == (e = i.browserInfo) ? void 0 : e.OSFamily) {
                                case 'MacOS':
                                    return e6.MACOS;
                                case 'Windows':
                                    return e6.WINDOWS;
                                default:
                                    return e6.UNKNOWN;
                            }
                        }, [null == (t = i.browserInfo) ? void 0 : t.OSFamily]),
                        u = (0, h._lF)(l.downloadDesktop.url),
                        m = (0, p.useCallback)(() => {
                            d(), window.open(u, '_blank', 'noreferrer noopener');
                        }, [d, u]),
                        _ = (0, p.useCallback)(() => {
                            r.set(h.cYZ.NavbarDownloadBarIsHidden, !0, { expires: 30 }), o(!0);
                        }, [r]);
                    return s
                        ? null
                        : (0, O.jsx)(tt, {
                              isCollapsed: a,
                              button: (0, O.jsx)(tc, { variant: c, onDownloadClick: m }),
                              children: (0, O.jsx)(ts, { variant: c, onDownloadClick: m, onCloseClick: _ }),
                          });
                });
            var tm = a(79422);
            function t_() {
                return (t_ = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let tp = function (e) {
                return p.createElement(
                    'svg',
                    t_({ viewBox: '0 0 58 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    p.createElement(
                        'g',
                        { clipPath: 'url(#clip0_2521_25547)' },
                        p.createElement(
                            'g',
                            { clipPath: 'url(#clip1_2521_25547)' },
                            i || (i = p.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' })),
                            n ||
                                (n = p.createElement('path', {
                                    d: 'M40.4184 5.14279C41.6821 4.20644 43.1756 3.6404 44.7322 3.49976V6.07553C43.726 6.20598 42.765 6.59121 41.943 7.20031C40.9138 7.96298 40.1569 9.03624 39.7839 10.2618C39.411 11.4873 39.4419 12.8003 39.8719 14.007C40.3019 15.2137 41.1084 16.2502 42.1723 16.9637C43.2362 17.6773 44.5013 18.03 45.7809 17.9698C47.0605 17.9097 48.2869 17.4399 49.2792 16.6298C50.2716 15.8197 50.9773 14.712 51.2922 13.4703C51.5119 12.6042 51.5334 11.7049 51.3613 10.8378L53.5243 9.09892L53.5229 9.0849C54.1067 10.691 54.1959 12.4383 53.7744 14.1C53.3245 15.8738 52.3163 17.4561 50.8987 18.6135C49.4811 19.7708 47.7291 20.4419 45.9011 20.5278C44.0731 20.6137 42.2658 20.1099 40.7459 19.0906C39.2261 18.0713 38.074 16.5905 37.4597 14.8666C36.8453 13.1428 36.8013 11.2671 37.334 9.51633C37.8668 7.76555 38.948 6.23231 40.4184 5.14279Z',
                                    fill: '#FCCA00',
                                })),
                            r ||
                                (r = p.createElement('path', {
                                    d: 'M51.8934 6.34507L51.9025 6.36777L50.457 8.66347C49.9314 7.88453 49.227 7.23618 48.4027 6.77726V12.0016C48.4027 13.6044 47.1033 14.9038 45.5004 14.9038C43.8975 14.9038 42.5981 13.6044 42.5981 12.0016C42.5981 10.3987 43.8975 9.09931 45.5004 9.09931C46.1011 9.09931 46.6592 9.28181 47.1223 9.59441V3.61938C49.0065 3.98181 50.6703 4.96381 51.8934 6.34507Z',
                                    fill: '#FC3F1D',
                                })),
                            p.createElement(
                                'mask',
                                { id: 'mask0_2521_25547', style: { maskType: 'alpha' }, maskUnits: 'userSpaceOnUse', x: 33, y: 0, width: 25, height: 24 },
                                l || (l = p.createElement('circle', { cx: 45.5005, cy: 12, r: 12, fill: 'white' })),
                            ),
                            s || (s = p.createElement('g', { mask: 'url(#mask0_2521_25547)' })),
                            o ||
                                (o = p.createElement(
                                    'g',
                                    { clipPath: 'url(#clip2_2521_25547)' },
                                    p.createElement('rect', { width: 24, height: 24, transform: 'translate(33.5005)', fill: 'black' }),
                                    p.createElement('path', {
                                        d: 'M57.5002 3.59937L45.121 10.2255L51.5722 3.59937L47.9962 3.59937L43.6042 9.6956V3.59937L40.7002 3.59937V20.3994H43.6042V14.313L47.9962 20.3994H51.5722L45.2885 13.9815L57.5002 20.3994V17.2794L46.3623 12.811L57.5002 13.5594V10.4394L46.4328 11.1589L57.5002 6.71936V3.59937Z',
                                        fill: 'url(#paint0_radial_2521_25547)',
                                    }),
                                )),
                        ),
                    ),
                    d ||
                        (d = p.createElement(
                            'g',
                            { clipPath: 'url(#clip3_2521_25547)' },
                            p.createElement('rect', { x: 17.0005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            p.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M41.0005 12C41.0005 18.6274 35.6279 24 29.0005 24C22.3731 24 17.0005 18.6274 17.0005 12C17.0005 5.37258 22.3731 0 29.0005 0C30.2956 0 31.5427 0.205154 32.7112 0.584736L29.9763 9H21.9892L21.0132 12H29.0013L26.6613 19.2H29.9613L32.3013 12L41.0005 12ZM40.6224 9H33.2763L35.5662 1.95391C38.0324 3.56896 39.8677 6.06758 40.6224 9Z',
                                fill: 'url(#paint1_linear_2521_25547)',
                            }),
                        )),
                    c ||
                        (c = p.createElement('path', {
                            d: 'M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z',
                            fill: 'black',
                        })),
                    u ||
                        (u = p.createElement('path', {
                            d: 'M18.2943 10.6431C18.2943 10.6431 21.283 14.8271 21.2703 14.8639C21.2143 15.024 21.154 15.1821 21.0895 15.338C21.0747 15.3735 17.35 12.1585 17.35 12.1585C17.35 12.1585 18.3728 19.0145 18.3525 19.0314C18.2041 19.1531 18.0528 19.2706 17.8972 19.383C17.8757 19.3986 15.6594 12.6669 15.6594 12.6669C15.6594 12.6669 12.5603 21.1641 12.5342 21.1646C12.4861 21.1654 12.4376 21.1658 12.3896 21.1658C12.2277 21.1658 12.0671 21.1616 11.9069 21.1536C11.8828 21.1523 13.7581 12.101 13.7581 12.101C13.7581 12.101 4.94181 17.5004 4.92916 17.4839C4.80269 17.3199 4.68169 17.1517 4.56617 16.9789C4.55395 16.9607 12.2686 10.4711 12.2686 10.4711C12.269 10.4716 3.15343 9.90658 3.15723 9.88756C3.19601 9.69233 3.2407 9.49879 3.29129 9.30821C3.29593 9.29003 12.0532 8.60038 12.0532 8.60038C12.0532 8.60038 5.65977 5.13649 5.67495 5.12085C5.80606 4.98689 5.94139 4.85674 6.08052 4.73039C6.09738 4.71517 13.1383 7.06726 13.1383 7.06726C13.1383 7.06726 10.9718 2.40366 11.011 2.39774C11.1691 2.3745 11.328 2.35506 11.4886 2.33985C11.5224 2.33689 15.1704 6.63623 15.1704 6.63623C15.1704 6.63623 16.3365 3.16388 16.3711 3.18036C16.5363 3.25811 16.6991 3.34009 16.8588 3.42672C16.8888 3.44278 16.9891 7.20502 16.9891 7.20502C16.9891 7.20502 19.8066 5.92333 19.8133 5.93178C19.9116 6.05814 20.0068 6.18702 20.0987 6.31887C20.1046 6.32732 18.0401 8.74829 18.0401 8.74829C18.0401 8.74829 21.6506 10.0397 21.6565 10.0735C21.6835 10.2261 21.7071 10.3794 21.7265 10.5341C21.7303 10.5658 18.2943 10.6431 18.2943 10.6431Z',
                            fill: '#FED42B',
                        })),
                    m ||
                        (m = p.createElement(
                            'defs',
                            null,
                            p.createElement(
                                'radialGradient',
                                {
                                    id: 'paint0_radial_2521_25547',
                                    cx: 0,
                                    cy: 0,
                                    r: 1,
                                    gradientUnits: 'userSpaceOnUse',
                                    gradientTransform: 'translate(40.7002 3.59937) rotate(45) scale(23.7588)',
                                },
                                p.createElement('stop', { offset: 0.5, stopColor: '#FF5500' }),
                                p.createElement('stop', { offset: 1, stopColor: '#BBFF00' }),
                            ),
                            p.createElement(
                                'linearGradient',
                                { id: 'paint1_linear_2521_25547', x1: 17.0005, y1: 10.4, x2: 41.0005, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                p.createElement('stop', { stopColor: '#FF5C4D' }),
                                p.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                p.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            p.createElement(
                                'clipPath',
                                { id: 'clip0_2521_25547' },
                                p.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                            p.createElement(
                                'clipPath',
                                { id: 'clip1_2521_25547' },
                                p.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                            p.createElement(
                                'clipPath',
                                { id: 'clip2_2521_25547' },
                                p.createElement('rect', { width: 24, height: 24, fill: 'white', transform: 'translate(33.5005)' }),
                            ),
                            p.createElement(
                                'clipPath',
                                { id: 'clip3_2521_25547' },
                                p.createElement('rect', { x: 17.0005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                        )),
                );
            };
            var tg = a(48579),
                tv = a.n(tg);
            let th = (e) => {
                    let { className: t, forwardRef: a, shouldFetchOffers: i } = e,
                        {
                            paywall: { modal: n },
                        } = (0, h.Pjs)(),
                        { formatMessage: r } = (0, W.A)();
                    return (0, O.jsxs)('section', {
                        className: (0, B.$)(tv().root, t),
                        ref: a,
                        'aria-label': r({ id: 'plusbar.subscription-activation' }),
                        ...(0, K.Am)(K.e8.plusBar.PLUS_BAR),
                        children: [
                            (0, O.jsx)(tp, { className: tv().logos, 'aria-hidden': 'true' }),
                            (0, O.jsx)(el.Caption, {
                                className: tv().title,
                                variant: 'div',
                                size: 'm',
                                weight: 'medium',
                                ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_TITLE),
                                children: (0, O.jsx)(X.A, { id: 'plusbar.title', values: { br: '\n', nbsp: '\xa0' } }),
                            }),
                            (0, O.jsx)(el.Caption, {
                                className: tv().addition,
                                variant: 'div',
                                size: 'xs',
                                weight: 'normal',
                                ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_ADDITION),
                                children: (0, O.jsx)(X.A, { id: 'plusbar.text', values: { br: '\n', nbsp: '\xa0' } }),
                            }),
                            (0, O.jsxs)('div', {
                                className: tv().buttons,
                                children: [
                                    (0, O.jsx)(tm.FB, { shouldFetchOffers: i, ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_OFFER_BUTTON) }),
                                    (0, O.jsx)($.$, {
                                        className: tv().button,
                                        isBlock: !0,
                                        radius: 'xxxl',
                                        size: 'm',
                                        variant: 'text',
                                        color: 'primary',
                                        withRipple: !1,
                                        onClick: n.open,
                                        ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_PAYWALL_BUTTON),
                                        children: (0, O.jsx)(X.A, { id: 'interface-actions.more-details' }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                tb = (0, p.forwardRef)((e, t) =>
                    (0, O.jsx)(h.rtM, { page: h.l7W.SIDEBAR, places: [h.RBW.SIDEBAR_BANNER], children: (0, O.jsx)(th, { forwardRef: t, ...e }) }),
                );
            var tI = a(32341),
                tx = a.n(tI);
            let tN = (0, D.PA)((e) => {
                let { isCollapsed: t, shouldFetchOffers: a } = e,
                    { formatMessage: i } = (0, W.A)(),
                    {
                        paywall: { modal: n },
                    } = (0, h.Pjs)();
                return (0, O.jsx)(tt, {
                    className: tx().root,
                    isCollapsed: t,
                    button: (0, O.jsxs)(er.m_, {
                        ...em,
                        enabled: t,
                        children: [
                            (0, O.jsx)($.$, {
                                variant: 'text',
                                withRipple: !1,
                                size: 'xxs',
                                icon: (0, O.jsx)(H.Icon, { className: tx().icon, variant: 'plusOutlined' }),
                                className: (0, B.$)(tx().button, tx().important),
                                'aria-label': i({ id: 'plusbar.subscription-activation' }),
                                onClick: n.open,
                                ...(0, K.Am)(K.e8.navbar.PAYWALL_BUTTON_MINIMIZED),
                            }),
                            (0, O.jsx)(er.ZI, {
                                children: (0, O.jsx)(el.Caption, {
                                    variant: 'span',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    children: (0, O.jsx)(X.A, { id: 'plusbar.subscription-activation' }),
                                }),
                            }),
                        ],
                    }),
                    children: (0, O.jsx)(tb, { shouldFetchOffers: a }),
                });
            });
            tN.displayName = 'NavbarDesktopAnimatedPlusBar';
            var tA = a(57282),
                tS = a(35935),
                ty = a.n(tS);
            let tC = (e) => {
                let { className: t, optionOffer: a } = e,
                    { formatMessage: i } = (0, W.A)(),
                    { subscriptionName: n, offerText: r, mainText: l, openPaymentWidgetModal: s } = a;
                return (0, O.jsxs)('section', {
                    className: (0, B.$)(ty().root, t),
                    'aria-label': i({ id: 'plusbar.subscription-activation' }),
                    ...(0, K.Am)(K.e8.plusBar.PLUS_BAR),
                    children: [
                        (0, O.jsx)(ex.Image, {
                            src: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.693eab4a84d7e41b1102de79/orig',
                            alt: 'Option Icon',
                            className: ty().optionIcon,
                        }),
                        (0, O.jsx)(el.Caption, {
                            className: ty().title,
                            variant: 'div',
                            size: 'm',
                            weight: 'medium',
                            ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_TITLE),
                            children: n,
                        }),
                        (0, O.jsx)(el.Caption, {
                            className: ty().addition,
                            variant: 'div',
                            size: 'xs',
                            weight: 'normal',
                            ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_ADDITION),
                            children: r,
                        }),
                        (0, O.jsx)('div', {
                            className: ty().buttons,
                            children: (0, O.jsx)($.$, {
                                className: ty().button,
                                isBlock: !0,
                                radius: 'xxxl',
                                size: 'm',
                                variant: 'default',
                                color: 'secondary',
                                withRipple: !1,
                                onClick: s,
                                ...(0, K.Am)(K.e8.plusBar.PLUS_BAR_PAYMENT_WIDGET_BUTTON),
                                children: l,
                            }),
                        }),
                    ],
                });
            };
            var tf = a(62711),
                tT = a.n(tf);
            let tE = (0, D.PA)((e) => {
                let { optionOffer: t, isCollapsed: a, setForceUpdateElement: i } = e,
                    [n, r] = (0, p.useState)(!1),
                    l = (0, U.c)(() => {
                        r(!0);
                    }),
                    s = (0, U.c)(() => {
                        r(!1);
                    });
                return (0, O.jsx)(tt, {
                    className: tT().root,
                    isCollapsed: a,
                    button: (0, O.jsxs)(tA.AM, {
                        open: n,
                        onOpenChange: r,
                        placement: 'top',
                        offsetOptions: { mainAxis: -50, crossAxis: 0 },
                        children: [
                            (0, O.jsx)($.$, {
                                type: 'button',
                                onMouseEnter: l,
                                onMouseLeave: s,
                                className: tT().button,
                                ref: i,
                                'data-intersection-property-id': 'PLUSBAR_OPTIONS_BUTTON_INTERSECTION_PROPERTY_ID',
                                children: (0, O.jsx)(ex.Image, {
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.693eab4a84d7e41b1102de79/orig',
                                    alt: 'Option Icon',
                                    className: tT().optionIcon,
                                }),
                            }),
                            (0, O.jsx)(tA.hl, {
                                className: tT().popoverContent,
                                onMouseEnter: l,
                                onMouseLeave: s,
                                children: (0, O.jsx)(tC, { className: tT().popoverContent, optionOffer: t }),
                            }),
                        ],
                    }),
                    children: (0, O.jsx)(tC, { optionOffer: t }),
                });
            });
            tE.displayName = 'NavbarDesktopAnimatedPlusOptionsBar';
            var tL = a(30388),
                tj = a(53159),
                tP = a.n(tj);
            let tR = (e) => {
                let { isCollapsed: t, isActive: a } = e;
                return (0, O.jsx)(tt, {
                    className: tP().root,
                    isCollapsed: t,
                    button: (0, O.jsx)(tL.Shimmer, { className: tP().buttonShimmer, isActive: a, radius: 'round' }),
                    children: (0, O.jsx)(tL.Shimmer, { className: tP().barShimmer, isActive: a, radius: 'xxxl' }),
                });
            };
            tR.displayName = 'NavbarDesktopAnimatedShimmerBar';
            var tk = a(42687),
                tM = a(10775),
                tw = a.n(tM);
            let tO = () => {
                let {
                        experiments: e,
                        paywall: { modal: t },
                    } = (0, h.Pjs)(),
                    { formatMessage: a } = (0, W.A)(),
                    i = e.checkExperiment(h.zal.WebNextUnauthorizedSubscriptionButton, 'on'),
                    n = i ? a({ id: 'plusbar.title' }, { br: '\n', nbsp: '\xa0' }) : a({ id: 'authorization.enter-title' }),
                    r = i ? a({ id: 'plusbar.text' }, { br: '\n', nbsp: '\xa0' }) : a({ id: 'authorization.enter-subtitle' }),
                    l = (0, p.useMemo)(
                        () =>
                            i
                                ? (0, O.jsxs)('div', {
                                      className: tw().buttons,
                                      children: [
                                          (0, O.jsx)(tm.FB, {}),
                                          (0, O.jsx)($.$, {
                                              className: tw().button,
                                              isBlock: !0,
                                              radius: 'xxxl',
                                              size: 'm',
                                              variant: 'default',
                                              color: 'secondary',
                                              withRipple: !1,
                                              onClick: t.open,
                                              children: (0, O.jsx)(X.A, { id: 'interface-actions.more-details' }),
                                          }),
                                          (0, O.jsx)(eo.Hi, {
                                              size: 's',
                                              variant: 'text',
                                              withRipple: !1,
                                              buttonText: (0, O.jsx)(X.A, { id: 'authorization.has-subscription' }),
                                              isBlock: !0,
                                          }),
                                      ],
                                  })
                                : (0, O.jsx)(eo.Hi, { size: 's', isBlock: !0 }),
                        [t.open, i],
                    );
                return (0, O.jsxs)('div', {
                    className: tw().root,
                    ...(0, K.Am)(K.e8.unauthBar.UNAUTH_BAR),
                    children: [
                        (0, O.jsx)(p.Suspense, { children: (0, O.jsx)(tk.YS, { className: tw().userProfile, userIdClassName: tw().userId, variant: 'desktop' }) }),
                        (0, O.jsx)(el.Caption, {
                            className: tw().title,
                            size: 'm',
                            variant: 'div',
                            weight: 'bold',
                            ...(0, K.Am)(K.e8.unauthBar.UNAUTH_BAR_TITLE),
                            children: n,
                        }),
                        (0, O.jsx)(el.Caption, {
                            className: tw().subtitle,
                            size: 'xs',
                            variant: 'div',
                            weight: 'medium',
                            ...(0, K.Am)(K.e8.unauthBar.UNAUTH_BAR_ADDITION),
                            children: r,
                        }),
                        l,
                    ],
                });
            };
            var tB = a(81131),
                tD = a.n(tB);
            let tK = (0, D.PA)((e) => {
                    let { isCollapsed: t, withUserProfileAnimation: a } = e,
                        { user: i, experiments: n } = (0, h.Pjs)();
                    if (!i.isAuthorized) {
                        let e = n.checkExperiment(h.zal.WebNextUnauthorizedSubscriptionButton, 'on'),
                            a = !t && e,
                            i = e || t;
                        return (0, O.jsx)(tt, {
                            barClassName: tD().unauthorizedBar,
                            isCollapsed: i,
                            button: (0, O.jsxs)(er.m_, {
                                ...em,
                                enabled: t,
                                children: [
                                    (0, O.jsxs)('div', {
                                        className: tD().userProfileContainer,
                                        children: [
                                            (0, O.jsx)(tk.YS, { className: tD().userProfile }),
                                            a &&
                                                (0, O.jsx)(el.Caption, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    children: (0, O.jsx)(X.A, { id: 'authorization.enter-button' }),
                                                }),
                                        ],
                                    }),
                                    (0, O.jsx)(er.ZI, {
                                        children: (0, O.jsx)(el.Caption, {
                                            variant: 'span',
                                            type: 'text',
                                            size: 's',
                                            weight: 'medium',
                                            children: (0, O.jsx)(X.A, { id: 'authorization.enter-tooltip' }),
                                        }),
                                    }),
                                ],
                            }),
                            children: (0, O.jsx)(tO, {}),
                        });
                    }
                    return (0, O.jsx)('div', {
                        className: tD().userProfileContainer,
                        children: (0, O.jsx)(tk.YS, {
                            className: tD().userProfile,
                            userIdClassName: tD().userId,
                            metaClassName: (0, B.$)(tD().userMeta, { [tD().userMeta_withAnimation]: a, [tD().userMeta_collapsed]: t }),
                            withMeta: !0,
                        }),
                    });
                }),
                tU = (0, D.PA)((e) => {
                    var t, a, i, n, r;
                    let { className: l, forwardRef: s, isCollapsed: o, shownAnimation: d, handleClick: c } = e,
                        u = I(),
                        m = (0, h.EE7)(),
                        { formatMessage: _ } = (0, W.A)(),
                        g = (0, h.jjz)(),
                        {
                            user: v,
                            experiments: b,
                            settings: x,
                            modals: { bestRecommedationModal: N },
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: A },
                            },
                        } = (0, h.Pjs)(),
                        [S, y] = (0, Y.d)(),
                        C = b.checkExperiment(h.zal.WebNextPlusOptionsSidebar, 'on') && v.hasPlus,
                        f = (0, h.DpZ)({
                            storeName: 'music',
                            communicationId: 'mu-promo-kids-7d-web',
                            isEnabled: C,
                            offerElement: { element: S, intersectionPropertyId: 'PLUSBAR_OPTIONS_BUTTON_INTERSECTION_PROPERTY_ID' },
                        }),
                        T = (0, h.Yej)(),
                        E = (0, h.NFA)().get(h.ooW),
                        L = ed(),
                        j = ((e) => {
                            let t = (0, h.NFA)().get(h.ooW),
                                a = I(),
                                [i, n] = (0, p.useState)(!1);
                            return (
                                (0, p.useEffect)(() => {
                                    !0 !== t.get(h.cYZ.NavbarCollapsed) && (((e || a) && !1 !== t.get(h.cYZ.NavbarCollapsed)) || n(!0));
                                }, [e, a, t]),
                                i
                            );
                        })(o),
                        P = ((e, t, a) => (e.checkExperiment(h.zal.WebNextUnauthorizedSubscriptionButton, 'on') ? !a : t && !a))(b, v.isAuthorized, v.hasPlus),
                        R = C && f.isShimmerVisible,
                        k = C && !f.isShimmerVisible && f.subscriptionName,
                        M = (0, es.Qj)(),
                        w = A.isVisible && A.type === h.h8o.BRANDING && M.isEnabled ? (null == (t = M.data) ? void 0 : t.style) : void 0,
                        D = b.checkExperiment(h.zal.WebNextPromoVeryBestRecommendations, 'on'),
                        G = b.checkExperiment(h.zal.WebNextNavbarExplicit, 'on'),
                        V = !o && G,
                        z = (null == (a = x.browserInfo) || a.isTouch, E.get(h.cYZ.NavbarDownloadBarIsHidden)),
                        F = b.checkExperiment(h.zal.WebNextNewWaveTab, 'on') || b.checkExperiment(h.zal.WebNextNewWaveTab, 'on1'),
                        Q =
                            !(null == (i = x.browserInfo) ? void 0 : i.isTouch) &&
                            v.isAuthorized &&
                            !v.hasPlus &&
                            (null == (r = b.getExperiment(h.zal.WebNextDesktopWebFreemium)) || null == (n = r.value) ? void 0 : n.closeCollection) === 'on',
                        [J, ee] = (0, p.useState)(!1),
                        [et, eu] = (0, p.useState)(null),
                        e_ = (0, p.useMemo)(() => T.some((e) => e.id === h.RnV.COLLECTION && e.isEnabled), [T]),
                        ep = Q && e_;
                    (0, p.useEffect)(() => {
                        Q || ee(!1);
                    }, [Q]);
                    let eg = (0, U.c)(() => (0, O.jsx)('span', { 'aria-hidden': !0 })),
                        ev = (0, p.useMemo)(() => {
                            if (v.collectionHue && !F) return { '--logo-color': (0, h.eWZ)(v.collectionHue) };
                        }, [F, v.collectionHue]),
                        eb = (0, p.useMemo)(() => (o ? _({ id: 'sidebar.uncollapse' }) : _({ id: 'sidebar.collapse' })), [o, _]),
                        eI = (0, p.useCallback)(
                            (e, t) =>
                                e.id === h.RnV.CONCERTS && b.checkExperiment(h.zal.WebNextConcertsTicketIcon, 'on')
                                    ? (0, O.jsx)(e4, { isSelected: t })
                                    : F
                                      ? (0, O.jsx)(H.Icon, { variant: e.iconNewVersion, size: 'xs' })
                                      : (0, O.jsx)(H.Icon, { variant: t ? e.iconSelected : e.icon, size: 'm' }),
                            [b, F],
                        ),
                        ex = (0, U.c)(() => {
                            V && N.open();
                        }),
                        eN = (0, p.useMemo)(
                            () => ({
                                [h.RnV.SEARCH]: _({ id: 'navigation.search' }),
                                [h.RnV.HOME]: F ? _({ id: 'navigation.page-my-vibe' }) : _({ id: 'navigation.page-main' }),
                                [h.RnV.FOR_YOU_AND_TRENDS]: _({ id: 'navigation.page-for-you-and-trends' }),
                                [h.RnV.COLLECTION]: _({ id: 'navigation.page-collection' }),
                                [h.RnV.NON_MUSIC]: _({ id: 'entity-names.podcasts-and-books' }),
                                [h.RnV.KIDS]: _({ id: 'kids.for-kids' }),
                                [h.RnV.CONCERTS]: _({ id: 'entity-names.concerts' }),
                                [h.RnV.PLUS]: _({ id: 'navigation.page-plus' }),
                            }),
                            [_, F],
                        ),
                        eA = (0, U.c)((e, t) => () => {
                            L(e, t);
                        }),
                        eS = (0, p.useMemo)(
                            () =>
                                (0, O.jsx)(
                                    ei,
                                    {
                                        className: (0, B.$)({ [e5().navigationGroup]: F }),
                                        children: T.map((e) => {
                                            let t = m(e.availablePaths),
                                                a = e.id === h.RnV.COLLECTION && !!Q && e.isEnabled,
                                                i = eA(e.analyticsParams.entityType, e.analyticsParams.to),
                                                n = !a && e.isEnabled && !t;
                                            return (0, O.jsx)(
                                                eh,
                                                {
                                                    config: e.onboardingConfig,
                                                    children: (0, O.jsx)(en, {
                                                        'data-intersection-property-id': h.NZ,
                                                        selected: t,
                                                        shownAnimation: d,
                                                        variant: 'main',
                                                        isNewVisualVersion: F,
                                                        withRipple: F && e.isEnabled && !t,
                                                        children: (0, O.jsxs)(eo.N_, {
                                                            ref: a ? eu : void 0,
                                                            href: n ? e.path : void 0,
                                                            role: 'link',
                                                            'aria-disabled': !e.isEnabled,
                                                            tabIndex: e.isEnabled ? 0 : -1,
                                                            className: (0, B.$)({ [e5().disabledNavigationItem]: !e.isEnabled }),
                                                            onClick: a
                                                                ? (e) => {
                                                                      e.preventDefault(), i(), ee((e) => !e);
                                                                  }
                                                                : i,
                                                            ...(0, K.Am)(ec[e.id]),
                                                            children: [
                                                                (0, O.jsxs)(er.m_, {
                                                                    ...em,
                                                                    enabled: o,
                                                                    children: [
                                                                        eI(e, t),
                                                                        (0, O.jsx)(er.ZI, {
                                                                            children: (0, O.jsx)(el.Caption, {
                                                                                variant: 'span',
                                                                                type: 'text',
                                                                                size: 's',
                                                                                weight: 'medium',
                                                                                children: eN[e.id],
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, O.jsx)(el.Caption, {
                                                                    variant: 'span',
                                                                    type: 'controls',
                                                                    size: 'm',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    className: (0, B.$)({ [e5().title_animate]: d, [e5().title_collapsed]: o }),
                                                                    children: eN[e.id],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.id,
                                            );
                                        }),
                                    },
                                    'main',
                                ),
                            [m, o, b, b.loadingState, d, eN, T, eA, eI, Q, ee],
                        ),
                        ey = (0, p.useMemo)(
                            () =>
                                u
                                    ? null
                                    : (0, p.createElement)(er.m_, {
                                          ...em,
                                          key: 'collapseTooltip',
                                          enabled: o,
                                          isFocusEnabled: !1,
                                          children: [
                                              (0, O.jsx)($.$, {
                                                  className: e5().collapseButton,
                                                  'aria-label': eb,
                                                  radius: 'round',
                                                  color: 'secondary',
                                                  size: 'xs',
                                                  icon: (0, O.jsx)(H.Icon, { variant: o ? 'arrowRight' : 'arrowLeft', size: 'xxs' }),
                                                  onClick: c,
                                              }),
                                              (0, O.jsx)(er.ZI, { className: (0, B.$)({ [e5().collapseButtonTooltip_hidden]: !o }), children: eb }),
                                          ],
                                      }),
                            [o, eb, c, u],
                        );
                    return (0, O.jsxs)('div', {
                        className: (0, B.$)(e5().root, l),
                        style: w,
                        ref: s,
                        children: [
                            (0, O.jsxs)('div', {
                                className: e5().logoWrapper,
                                children: [
                                    (0, O.jsx)(eo.N_, {
                                        href: '/',
                                        className: e5().logoLink,
                                        'aria-label': _({ id: 'navigation.page-main' }),
                                        children: (0, O.jsx)(q.gu, { style: ev, className: e5().logo, collapsed: o, shownAnimation: d, lang: g }),
                                    }),
                                    ey,
                                ],
                            }),
                            D &&
                                (0, O.jsx)(el.Caption, {
                                    style: ev,
                                    variant: 'div',
                                    type: 'text',
                                    size: 'xs',
                                    weight: 'medium',
                                    className: (0, B.$)(e5().subTitle, { [e5().title_animate]: d, [e5().title_collapsed]: o, [e5().subTitle_withCursorPointer]: V }),
                                    onClick: ex,
                                    children: (0, O.jsx)(X.A, { id: 'navigation.best-recommendations' }),
                                }),
                            (0, O.jsx)('div', {
                                className: e5().scrollableContainer,
                                children: (0, O.jsxs)('div', {
                                    className: e5().scrollableContent,
                                    children: [
                                        (0, O.jsx)(ea, {
                                            className: (0, B.$)(e5().navigation, { [e5().navigation_new]: F, [e5().navigation_gapFill]: !1 }),
                                            collapsed: o,
                                            'aria-label': _({ id: 'navigation.main-menu' }),
                                            children: eS,
                                        }),
                                        (0, O.jsx)(eo.aQ, {
                                            fallback: (0, O.jsx)(eH, { style: w, isCollapsed: o, withCollapseAnimation: !!d, className: e5().pinsList }),
                                        }),
                                        P && (0, O.jsx)(tN, { shouldFetchOffers: j, isCollapsed: o }),
                                        !z && !1,
                                        R && (0, O.jsx)(tR, { isCollapsed: o, isActive: f.isShimmerActive }),
                                        k && (0, O.jsx)(tE, { optionOffer: f, isCollapsed: o, setForceUpdateElement: y }),
                                    ],
                                }),
                            }),
                            (0, O.jsx)(tK, { withUserProfileAnimation: d, isCollapsed: o }),
                            ep &&
                                null !== et &&
                                (0, O.jsx)(eo.SU, {
                                    isOpened: J,
                                    onOpenChange: ee,
                                    placement: 'right',
                                    positionElement: et,
                                    textVariant: 'collectionFreemium',
                                    renderChildren: eg,
                                }),
                            G &&
                                (0, O.jsxs)(Z.a, {
                                    className: e5().bestRecommendationsModal,
                                    headerClassName: e5().bestRecommendationsModalHeader,
                                    contentClassName: e5().bestRecommendationsModalContent,
                                    open: N.isOpened,
                                    onOpenChange: N.onOpenChange,
                                    onClose: N.close,
                                    size: 'fitContent',
                                    placement: 'center',
                                    overlayColor: 'full',
                                    labelClose: _({ id: 'interface-actions.close' }),
                                    children: [
                                        (0, O.jsx)(H.Icon, { variant: 'musicLogo', className: e5().bestRecommendationsModalLogo }),
                                        (0, O.jsx)(el.Caption, {
                                            className: e5().bestRecommendationsModalText,
                                            variant: 'div',
                                            size: 'm',
                                            weight: 'normal',
                                            dangerouslySetInnerHTML: { __html: _({ id: 'about-app.explicit-content' }) },
                                        }),
                                    ],
                                }),
                        ],
                    });
                }),
                tG = (0, p.forwardRef)((e, t) =>
                    (0, O.jsx)(h.rtM, { page: h.l7W.SIDEBAR, places: [h.RBW.SIDEBAR_BANNER], children: (0, O.jsx)(tU, { forwardRef: t, ...e }) }),
                );
            var tV = a(69942),
                tz = a.n(tV);
            let tF = (0, D.PA)((e) => {
                    let { className: t } = e,
                        { experiments: a } = (0, h.Pjs)(),
                        i = (0, h.EE7)(),
                        { formatMessage: n } = (0, W.A)(),
                        r = (0, h.Yej)(),
                        l = n({ id: 'navigation.main-menu' }),
                        s = ed(),
                        o = a.checkExperiment(h.zal.WebNextNewWaveTab, 'on') || a.checkExperiment(h.zal.WebNextNewWaveTab, 'on1'),
                        d = (0, p.useMemo)(
                            () => ({
                                [h.RnV.SEARCH]: n({ id: 'navigation.search' }),
                                [h.RnV.HOME]: o ? n({ id: 'navigation.page-my-vibe' }) : n({ id: 'navigation.page-main' }),
                                [h.RnV.FOR_YOU_AND_TRENDS]: n({ id: 'navigation.page-for-you-and-trends' }),
                                [h.RnV.COLLECTION]: n({ id: 'navigation.page-collection' }),
                                [h.RnV.NON_MUSIC]: n({ id: 'entity-names.podcasts-and-books' }),
                                [h.RnV.KIDS]: n({ id: 'kids.for-kids' }),
                                [h.RnV.CONCERTS]: n({ id: 'entity-names.concerts' }),
                            }),
                            [n, o],
                        ),
                        c = (0, p.useCallback)(
                            (e, t) =>
                                e.id === h.RnV.CONCERTS && a.checkExperiment(h.zal.WebNextConcertsTicketIcon, 'on')
                                    ? (0, O.jsx)(e4, { isSelected: t || o })
                                    : o
                                      ? (0, O.jsx)(H.Icon, { variant: e.iconNewVersion, size: 'xs' })
                                      : (0, O.jsx)(H.Icon, { variant: t ? e.iconSelected : e.icon, size: 'm' }),
                            [a, o],
                        ),
                        u = (0, U.c)((e, t) => () => {
                            s(e, t);
                        });
                    return (0, O.jsx)('div', {
                        className: (0, B.$)(tz().root, t),
                        children: (0, O.jsx)(ea, {
                            collapsed: !0,
                            direction: 'horizontal',
                            'aria-label': l,
                            children: (0, O.jsx)(ei, {
                                children: (0, O.jsxs)(O.Fragment, {
                                    children: [
                                        r.map((e) => {
                                            let t = i(e.availablePaths);
                                            return (0, O.jsx)(
                                                eh,
                                                {
                                                    config: e.onboardingConfig,
                                                    children: (0, O.jsx)(en, {
                                                        'data-intersection-property-id': h.NZ,
                                                        selected: t,
                                                        isNewVisualVersion: o,
                                                        children: (0, O.jsxs)(eo.N_, {
                                                            href: e.isEnabled && !t ? e.path : void 0,
                                                            role: 'link',
                                                            'aria-disabled': !e.isEnabled,
                                                            tabIndex: e.isEnabled ? 0 : -1,
                                                            className: (0, B.$)({ [tz().disabledNavigationItem]: !e.isEnabled }),
                                                            onClick: u(e.analyticsParams.entityType, e.analyticsParams.to),
                                                            ...(0, K.Am)(ec[e.id]),
                                                            children: [
                                                                c(e, t),
                                                                (0, O.jsx)(el.Caption, {
                                                                    variant: 'span',
                                                                    type: 'controls',
                                                                    size: 'm',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    children: d[e.id],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.id,
                                            );
                                        }),
                                        !o && (0, O.jsx)(en, { children: (0, O.jsx)(tk.YS, { className: tz().user, variant: 'mobile' }) }),
                                    ],
                                }),
                            }),
                        }),
                    });
                }),
                tW = (0, D.PA)((e) => {
                    var t;
                    let { className: a, externalIsCollapsed: i, externalSetIsCollapsed: n } = e,
                        r = (0, h.NFA)().get(h.ooW),
                        l = I(),
                        {
                            settings: { isMobile: s },
                        } = (0, h.Pjs)(),
                        [o, d] = (0, p.useState)(null != (t = r.get(h.cYZ.NavbarCollapsed)) ? t : l),
                        [c, u] = (0, p.useState)(!1),
                        m = (() => {
                            let e = (0, V.st)(),
                                { hash: t } = (0, V.gf)(),
                                a = (0, h.UlF)(),
                                {
                                    settings: { isMobile: i },
                                } = (0, h.Pjs)();
                            return (0, p.useCallback)(
                                (n) => {
                                    if (!e) return;
                                    let r = (0, G.Fx)({
                                        params: {
                                            hash: t,
                                            pageId: G.QT.Sidebar,
                                            sidebarSize: n || i ? G.JQ.Small : G.JQ.Medium,
                                            sidebarPosition: i ? G.Vw.Bottom : G.Vw.Left,
                                        },
                                        logger: a,
                                        context: 'useSendEventOnSidebarOpened',
                                    });
                                    r && (0, G.U0)(e.evgenInstance, r);
                                },
                                [e, t, i, a],
                            );
                        })(),
                        _ = null != i ? i : o,
                        g = null != n ? n : d,
                        v = (0, p.useMemo)(() => (s ? tF : tG), [s]),
                        b = (0, U.c)((e) => {
                            e.stopPropagation(), e.preventDefault();
                            let t = !_;
                            r.set(h.cYZ.NavbarCollapsed, t, { expires: 180 }), g(t), u(!0);
                        });
                    return (
                        (0, p.useEffect)(() => {
                            m(_ || l);
                        }, [l, _, m]),
                        (0, O.jsx)('aside', {
                            className: (0, B.$)(F().root, { [F().root_collapsed]: _ || l }, a),
                            ...(0, K.Am)(K.e8.navbar.NAVBAR),
                            children: (0, O.jsx)(v, { handleClick: b, isCollapsed: _ || l, shownAnimation: c }),
                        })
                    );
                });
        },
        51950: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => k, H: () => d });
            var i = a(51606),
                n = a(81628),
                r = a(42561),
                l = a(54690),
                s = a(16264);
            let o = i.gK.model('WizardGenre', { id: i.gK.string, title: i.gK.string }),
                d = i.gK
                    .model('Wizard', {
                        loadingState: i.gK.enumeration(Object.values(r.GuX)),
                        modal: l.qt,
                        genres: i.gK.array(o),
                        artistsByGenres: i.gK.maybe(i.gK.frozen()),
                        savedLikedArtists: i.gK.array(i.gK.string),
                        likedArtists: i.gK.array(i.gK.string),
                        unlikedArtists: i.gK.array(i.gK.string),
                        filter: i.gK.maybe(i.gK.string),
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
                            let { likedArtists: a, unlikedArtists: n, savedLikedArtists: r } = e,
                                l = ((e) => {
                                    let { id: t, likedArtists: a, unlikedArtists: i, savedLikedArtists: n } = e,
                                        r = {};
                                    if (a.includes(t)) return (r.likedArtists = a.filter((e) => e !== t)), r;
                                    let l = n.includes(t),
                                        s = i.includes(t);
                                    return ((r.unlikedArtists = i.filter((e) => e !== t)), l && !s) ? r.unlikedArtists.push(t) : (r.likedArtists = [...a, t]), r;
                                })({ id: t, likedArtists: a, unlikedArtists: n, savedLikedArtists: r });
                            l.likedArtists && (e.likedArtists = (0, i.wg)(l.likedArtists)), l.unlikedArtists && (e.unlikedArtists = (0, i.wg)(l.unlikedArtists));
                        },
                        setFilter: (t) => {
                            e.filter = t;
                        },
                        getGenres: (0, i.L3)(function* () {
                            let { feedResource: t, modelActionsLogger: a } = (0, i._$)(e);
                            if (e.loadingState !== r.GuX.PENDING && e.loadingState !== r.GuX.RESOLVE)
                                try {
                                    var n;
                                    e.loadingState = r.GuX.PENDING;
                                    let { genres: a } = yield t.getWizardGenres();
                                    if (((e.genres = (0, i.wg)(a.map((e) => ({ id: e.id, title: e.title })))), !a.length))
                                        throw Error("The wizard's genre array is empty");
                                    (e.filter = null == (n = a[0]) ? void 0 : n.id),
                                        (e.artistsByGenres = (0, i.wg)(
                                            ((e) => {
                                                let t = new Map();
                                                return (
                                                    e.map((e) => {
                                                        t.set(e.id, { loadingState: r.GuX.IDLE, artists: [], showedArtists: [] });
                                                    }),
                                                    s.sH.map(t)
                                                );
                                            })(a),
                                        )),
                                        e.loadingState !== r.GuX.IDLE && (e.loadingState = r.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), e.loadingState !== r.GuX.IDLE && (e.loadingState = r.GuX.REJECT);
                                }
                        }),
                        getArtists: (0, i.L3)(function* (t) {
                            let { feedResource: a, modelActionsLogger: l } = (0, i._$)(e);
                            if (e.loadingState !== r.GuX.RESOLVE || !e.filter) return;
                            let s = e.artistsByGenres.get(e.filter);
                            if (s.loadingState !== r.GuX.PENDING)
                                try {
                                    s.loadingState = r.GuX.PENDING;
                                    let { artists: l = [], likedArtists: o = [] } = yield a.getWizardArtistsByGenre({
                                            genre: e.filter,
                                            showedArtists: s.showedArtists,
                                            likedArtists: e.likedArtists,
                                            unlikedArtists: e.unlikedArtists,
                                            countOfNewArtists: t,
                                        }),
                                        d = l.map((e) => (0, n.as)({ artist: e })),
                                        c = l.map((e) => e.id);
                                    e.artistsByGenres.set(e.filter, {
                                        artists: [...s.artists, ...d],
                                        showedArtists: [...s.showedArtists, ...c],
                                        loadingState: r.GuX.RESOLVE,
                                    }),
                                        (e.savedLikedArtists = (0, i.wg)(o.map((e) => String(e)))),
                                        (e.likedArtists = (0, i.wg)([])),
                                        (e.unlikedArtists = (0, i.wg)([]));
                                } catch (e) {
                                    l.error(e), (s.loadingState = r.GuX.REJECT);
                                }
                        }),
                        finish: (0, i.L3)(function* () {
                            let { feedResource: t, modelActionsLogger: a } = (0, i._$)(e);
                            if (!e.filter) return r.FlZ.ERROR;
                            try {
                                return yield t.finishWizard({ genre: e.filter, likedArtists: e.likedArtists, unlikedArtists: e.unlikedArtists }), r.FlZ.OK;
                            } catch (e) {
                                return a.error(e), r.FlZ.ERROR;
                            }
                        }),
                    }));
            var c = a(62936),
                u = a(79950),
                m = a(19718),
                _ = a(44020),
                p = a(47480),
                g = a(26731),
                v = a(8669),
                h = a(56874),
                b = a(5099),
                I = a(4714),
                x = a(85023),
                N = a(20418),
                A = a(85906),
                S = a(16258),
                y = a(85742),
                C = a(56721);
            let f = { src: '/_next/static/media/artist.c49b2bfa.png' };
            var T = a(31824),
                E = a.n(T);
            let L = (0, m.PA)((e) => {
                let { className: t, artist: a } = e,
                    { ref: i, intersectionPropertyId: n } = (0, r.nMI)(),
                    {
                        wizard: { likeArtist: l, isArtistLiked: s },
                    } = (0, r.Pjs)(),
                    { id: o, name: d, coverUri: m } = a,
                    p = (0, _.useCallback)(() => {
                        l(o);
                    }, [l, o]),
                    g = s(o),
                    h = (0, _.useMemo)(
                        () =>
                            (0, c.jsx)(C.Paper, {
                                className: E().cover,
                                radius: 'round',
                                ...(0, v.Am)(v.e8.wizard.ARTIST_CARD),
                                children: (0, c.jsxs)(b.$, {
                                    radius: 'round',
                                    className: E().coverBlock,
                                    variant: 'default',
                                    onClick: p,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': g,
                                    'aria-label': d,
                                    ...(0, v.Am)(v.e8.wizard.ARTIST_CARD_BUTTON),
                                    children: [
                                        (0, c.jsx)(A.BW, { className: E().image, src: m || f.src, fit: 'cover', alt: d, withAvatarReplace: !!m, 'aria-hidden': !0 }),
                                        (0, c.jsx)('div', {
                                            className: (0, u.$)(E().like),
                                            children: (0, c.jsx)(y.Icon, { variant: 'likedVariant', size: 's', className: E().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [g, m, d, p],
                    );
                return (0, c.jsx)(S.MN, {
                    ref: i,
                    className: (0, u.$)(E().root, { [E().root_selected]: g }, t),
                    textPosition: 'center',
                    title: (0, c.jsx)(N.Caption, {
                        'aria-hidden': !0,
                        className: E().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        ...(0, v.Am)(v.e8.wizard.ARTIST_CARD_NAME),
                        children: d,
                    }),
                    'data-intersection-property-id': n,
                    view: h,
                    ...(0, v.Am)(v.Kq.artist.ARTIST_ITEM),
                });
            });
            var j = a(78616),
                P = a.n(j);
            let R = { [r.u40.Desktop]: { start: 40, end: 40 }, [r.u40.Mobile]: { start: 40, end: 40 } },
                k = (0, m.PA)(() => {
                    let { formatMessage: e } = (0, p.A)(),
                        {
                            wizard: t,
                            settings: { isMobile: a, isWindowsApplication: i, isLinuxApplication: n },
                            user: l,
                        } = (0, r.Pjs)(),
                        { notify: s } = (0, r.lkh)(),
                        o = (0, r.zwV)(),
                        [d, m] = (0, h.d)(),
                        S = (0, r.RpR)(),
                        y = (0, x.useTabsState)(0),
                        C = (0, _.useMemo)(
                            () => (e) => {
                                var a;
                                if (!y.onTabChange || e === y.value) return;
                                y.onTabChange(e);
                                let i = null == (a = t.genres[e]) ? void 0 : a.id;
                                t.setFilter(i), null == d || d.scrollTo({ top: 0 });
                            },
                            [t, y, d],
                        ),
                        f = (0, _.useMemo)(() => {
                            switch (t.selectedArtistsCounter) {
                                case 0:
                                    return e({ id: 'wizard.button-tune' });
                                case 1:
                                    return e({ id: 'wizard.button-little-more' });
                                case 2:
                                    return e({ id: 'wizard.button-one-more' });
                                default:
                                    return e({ id: 'wizard.button-done' });
                            }
                        }, [t.selectedArtistsCounter, e]),
                        T = (0, _.useMemo)(
                            () =>
                                (0, c.jsx)(A.wI, {
                                    className: P().tabCarousel,
                                    ...y,
                                    onTabChange: C,
                                    isShimmerVisible: t.loadingState === r.GuX.PENDING,
                                    shimmer: (0, c.jsx)(A.zr, { isActive: !0, className: P().tabCarousel, shimmerClassName: P().tabShimmer, count: a ? 2 : 3 }),
                                    children: t.genres.map((e, t) =>
                                        (0, c.jsx)(
                                            A.oz,
                                            {
                                                className: (0, u.$)(P().filter, { [P().filter_selected]: t === y.value }),
                                                titleClassName: P().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [t.genres, y, C, t.loadingState, a],
                        ),
                        E = (0, _.useCallback)(() => {
                            t.getArtists(60);
                        }, [t]);
                    (0, _.useEffect)(() => {
                        t.filter && E();
                    }, [t.filter, E]);
                    let j = (0, _.useCallback)(async () => {
                        await t.getGenres(), E();
                    }, [t, E]);
                    (0, _.useEffect)(() => {
                        t.modal.isOpened && j();
                    }, [t, t.modal.isOpened, j]),
                        (0, _.useEffect)(() => {
                            t.loadingState === r.GuX.REJECT &&
                                (t.modal.close(), s((0, c.jsx)(A.hT, { error: e({ id: 'error-messages.error-load-wizard' }) }), { containerId: r.uQT.ERROR }));
                        }, [t, t.getGenres, t.loadingState, e, s]);
                    let k = (0, _.useMemo)(
                            () =>
                                (0, c.jsx)(N.Heading, {
                                    className: P().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    ...(0, v.Am)(v.e8.wizard.WIZARD_MODAL_TITLE),
                                    children: (0, c.jsx)(g.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        M = (0, _.useCallback)(async () => {
                            t.selectedArtistsCounter < 3 ? t.getArtists() : (await t.finish()) === r.FlZ.OK && (await l.getSettings(), S()), t.modal.close();
                        }, [S, l, t]);
                    return (
                        (0, _.useEffect)(
                            () => (
                                null == o ||
                                    o.addShortcutsListener(r.Mo.MAIN, r.lbr.CLOSE, () => {
                                        t.modal.isOpened && M();
                                    }),
                                () => {
                                    null == o || o.removeShortcutsListener(r.Mo.MAIN, r.lbr.CLOSE);
                                }
                            ),
                            [M, t.modal.isOpened, o],
                        ),
                        (0, c.jsxs)(I.a, {
                            className: (0, u.$)(P().root, { [P().root_withCustomControls]: i || n }),
                            headerClassName: P().modalHeader,
                            contentClassName: P().modalContent,
                            open: t.modal.isOpened,
                            onOpenChange: t.modal.onOpenChange,
                            onClose: M,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: e({ id: 'interface-actions.close' }),
                            closeButtonProps: (0, v.Am)(v.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON),
                            ...(0, v.Am)(v.e8.wizard.WIZARD_MODAL),
                            header: a && k,
                            escapeKey: !1,
                            children: [
                                (0, c.jsxs)('div', {
                                    className: P().wrapper,
                                    children: [
                                        !a && k,
                                        (0, c.jsx)(N.Caption, {
                                            className: P().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            ...(0, v.Am)(v.e8.wizard.WIZARD_MODAL_TEXT),
                                            children: (0, c.jsx)(g.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, c.jsx)(b.$, {
                                            className: P().button,
                                            size: a ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: M,
                                            disabled: t.selectedArtistsCounter < 3,
                                            ...(0, v.Am)(v.e8.wizard.WIZARD_MODAL_BUTTON),
                                            children: (0, c.jsx)(N.Caption, { variant: 'div', size: 'm', weight: 'medium', children: f }),
                                        }),
                                    ],
                                }),
                                (0, c.jsxs)('div', {
                                    className: P().mainContainer,
                                    children: [
                                        (0, c.jsx)(A.FY, { className: P().carousel, carouselElement: T, scrollPadding: R }),
                                        (0, c.jsx)(A.$$, {
                                            withFooter: !1,
                                            className: (0, u.$)(P().scrollContainer, P().important),
                                            itemContentCallback: (a) => {
                                                let i = t.artistsByGenre[a];
                                                if (!i) {
                                                    let t = e({ id: 'loading-messages.entity-is-loading' }, { entityName: e({ id: 'entity-names.artist' }) });
                                                    return (0, c.jsx)(A.Vt, { 'aria-label': t, round: !0, centered: !0 });
                                                }
                                                return (0, c.jsx)(L, { artist: i }, i.id);
                                            },
                                            data: t.artistsByGenre,
                                            endReached: E,
                                            listClassName: P().content,
                                            itemClassName: P().item,
                                            pageSize: 60,
                                            handleRef: m,
                                            ...(0, v.Am)(v.e8.wizard.WIZARD_MODAL_ARTISTS_GRID),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        53159: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedShimmerBar_root__o3xBB',
                barShimmer: 'NavbarDesktopAnimatedShimmerBar_barShimmer__ejAhM',
                buttonShimmer: 'NavbarDesktopAnimatedShimmerBar_buttonShimmer___3Vz2',
            };
        },
        53884: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => X, D: () => S });
            var i = a(51606),
                n = a(33878),
                r = a(54690),
                l = a(63924),
                s = a(42561);
            let o = { width: '614', height: '556' },
                d = { width: '100%', height: '240' },
                c = (e) => ({ width: e ? d.width : o.width, height: e ? d.height : o.height }),
                u = { width: '614', height: '244' },
                m = { width: '100%', height: '240' },
                _ = '{lang}',
                p = RegExp('(px|%)$'),
                g = (e) => e.replace('px', ''),
                v = (e) => (p.test(e) ? e : ''.concat(e).concat('px')),
                h = (e) => {
                    let { width: t, height: a, iframeUri: i, listenMessage: n } = e,
                        r = g(t),
                        l = g(a),
                        s = v(t),
                        o = v(a);
                    return '<iframe frameborder="0" allow="clipboard-write" style="border:none;width:'
                        .concat(s, ';height:')
                        .concat(o, ';" width="')
                        .concat(r, '" height="')
                        .concat(l, '" src="')
                        .concat(i, '">')
                        .concat(n, '</iframe>');
                },
                b = i.gK.model({ width: i.gK.string, height: i.gK.string }),
                I = b
                    .props({
                        id: i.gK.number,
                        type: i.gK.literal(s.Yxq.ALBUM),
                        title: i.gK.string,
                        path: i.gK.string,
                        artistName: i.gK.maybeNull(i.gK.string),
                        artistId: i.gK.maybeNull(i.gK.string),
                        listenMessage: i.gK.maybeNull(i.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                let { location: t } = (0, i.Zn)(e);
                                return (0, s.yK3)({ tld: t.tld, id: e.id });
                            },
                            get entityUri() {
                                let { location: t } = (0, i.Zn)(e),
                                    { config: a } = (0, i._$)(e);
                                return ''.concat((0, n.getTldHost)(a.iframe.entityBaseUrl, t.tld, s.BEZ)).concat(e.path);
                            },
                            get artistUri() {
                                if (null === e.artistId) return null;
                                let { location: t } = (0, i.Zn)(e),
                                    { config: a } = (0, i._$)(e);
                                return ''.concat((0, n.getTldHost)(a.iframe.entityBaseUrl, t.tld, s.BEZ), '/artist/').concat(e.artistId);
                            },
                            get iframeCode() {
                                var a;
                                return h({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (a = e.listenMessage) ? a : '' });
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
                            var a, i, n, r;
                            e.listenMessage = t(
                                ((a = e.entityUri),
                                (i = e.title),
                                (n = e.artistUri),
                                null === (r = e.artistName)
                                    ? '<a href="'.concat(a, '">').concat(i, '</a>')
                                    : null === n
                                      ? '<a href="'.concat(a, '">').concat(i, '</a> — ').concat(r)
                                      : '<a href="'.concat(a, '">').concat(i, '</a> — <a href="').concat(n, '">').concat(r, '</a>')),
                            );
                        },
                    })),
                x = b
                    .props({
                        id: i.gK.string,
                        type: i.gK.literal(s.Yxq.PLAYLIST),
                        title: i.gK.maybeNull(i.gK.string),
                        path: i.gK.string,
                        ownerLogin: i.gK.maybeNull(i.gK.string),
                        ownerName: i.gK.maybeNull(i.gK.string),
                        listenMessage: i.gK.maybeNull(i.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                var a;
                                let { location: t } = (0, i.Zn)(e);
                                return (0, s.J6z)({ tld: t.tld, ownerLogin: null != (a = e.ownerLogin) ? a : '', id: e.id });
                            },
                            get entityUri() {
                                let { location: t } = (0, i.Zn)(e),
                                    { config: a } = (0, i._$)(e);
                                return ''.concat((0, n.getTldHost)(a.iframe.entityBaseUrl, t.tld, s.BEZ)).concat(e.path);
                            },
                            get iframeCode() {
                                var r;
                                return h({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (r = e.listenMessage) ? r : '' });
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
                            let a, n, r, l;
                            if (null === e.title || null === e.ownerName || null === e.ownerLogin) {
                                e.listenMessage = t('');
                                return;
                            }
                            let { location: o } = (0, i.Zn)(e);
                            e.listenMessage = t(
                                ((a = e.entityUri),
                                (n = e.title),
                                (r = e.ownerName),
                                (l = (0, s.QoD)(o.tld, e.ownerLogin)),
                                '<a href="'.concat(a, '">').concat(n, '</a> — <a href="').concat(l, '">').concat(r, '</a>')),
                            );
                        },
                    })),
                N = b
                    .props({
                        id: i.gK.string,
                        albumId: i.gK.maybeNull(i.gK.number),
                        type: i.gK.literal(s.Yxq.TRACK),
                        title: i.gK.string,
                        path: i.gK.string,
                        artistName: i.gK.maybeNull(i.gK.string),
                        artistId: i.gK.maybeNull(i.gK.string),
                        listenMessage: i.gK.maybeNull(i.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                var a;
                                let { location: t } = (0, i.Zn)(e);
                                return (0, s.iq5)({ tld: t.tld, id: e.id, albumId: null != (a = e.albumId) ? a : void 0 });
                            },
                            get entityUri() {
                                let { location: t } = (0, i.Zn)(e),
                                    { config: a } = (0, i._$)(e);
                                return ''.concat((0, n.getTldHost)(a.iframe.entityBaseUrl, t.tld, s.BEZ)).concat(e.path);
                            },
                            get artistUri() {
                                if (null === e.artistId) return null;
                                let { location: t } = (0, i.Zn)(e),
                                    { config: a } = (0, i._$)(e);
                                return ''.concat((0, n.getTldHost)(a.iframe.entityBaseUrl, t.tld, s.BEZ), '/artist/').concat(e.artistId);
                            },
                            get iframeCode() {
                                var r;
                                return h({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (r = e.listenMessage) ? r : '' });
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
                            var a, i, n, r;
                            e.listenMessage = t(
                                ((a = e.entityUri),
                                (i = e.title),
                                (n = e.artistUri),
                                null === (r = e.artistName)
                                    ? '<a href="'.concat(a, '">').concat(i, '</a>')
                                    : null === n
                                      ? '<a href="'.concat(a, '">').concat(i, '</a> — ').concat(r)
                                      : '<a href="'.concat(a, '">').concat(i, '</a> — <a href="').concat(n, '">').concat(r, '</a>')),
                            );
                        },
                    })),
                A = i.gK.union(N, I, x),
                S = i.gK.model({ entity: i.gK.maybeNull(A), modal: r.qt }).actions((e) => ({
                    openModal(t) {
                        let { settings: a } = (0, i.Zn)(e);
                        (e.entity = ((e, t) => {
                            if (e.variant === s.Yxq.TRACK)
                                return ((e) => {
                                    let t,
                                        { variant: a, id: n, title: r, path: l, trackArtistName: s, trackArtistId: o, trackAlbumId: d, isMobile: c } = e;
                                    return (0, i.wg)({
                                        id: n,
                                        type: a,
                                        albumId: d,
                                        title: r,
                                        path: l,
                                        artistName: null != s ? s : null,
                                        artistId: null != o ? o : null,
                                        ...{ width: (t = c) ? m.width : u.width, height: t ? m.height : u.height },
                                    });
                                })({ ...e, isMobile: t });
                            if (e.variant === s.Yxq.ALBUM) {
                                let a = e.id;
                                if (void 0 === a) throw new l.t('Missing album ID');
                                return ((e) => {
                                    let { variant: t, id: a, title: n, path: r, albumArtistName: l, albumArtistId: s, isMobile: o } = e;
                                    return (0, i.wg)({ id: a, type: t, title: n, path: r, artistName: null != l ? l : null, artistId: null != s ? s : null, ...c(o) });
                                })({ ...e, id: a, isMobile: t });
                            }
                            if (e.variant === s.Yxq.PLAYLIST)
                                return ((e) => {
                                    let { variant: t, id: a, title: n, path: r, playlistOwnerName: l, playlistOwnerLogin: s, isMobile: o } = e;
                                    return (0, i.wg)({
                                        id: String(a),
                                        type: t,
                                        title: null != n ? n : null,
                                        path: null != r ? r : null,
                                        ownerName: l,
                                        ownerLogin: s,
                                        ...c(o),
                                    });
                                })({ ...e, isMobile: t });
                            throw new l.t('Unknown variant');
                        })({ ...t, title: (0, n.sanitizeDOM)(t.title || '', { whiteList: {} }) }, a.isMobile)),
                            e.modal.open();
                    },
                    closeModal() {
                        e.modal.close(), (e.entity = null);
                    },
                }));
            var y = a(62936),
                C = a(19718),
                f = a(47480),
                T = a(8669),
                E = a(4714),
                L = a(44020),
                j = a(26731),
                P = a(59935),
                R = a(5099),
                k = a(85742),
                M = a(69671),
                w = a(20418);
            let O = (e, t) => (p.test(e) ? e : 0 === e.trim().length ? ''.concat(t, 'px') : ''.concat(Math.max(Number(e), t), 'px'));
            var B = a(85906),
                D = a(80485),
                K = a.n(D);
            let U = (e) => {
                let { closeToast: t } = e;
                return (0, y.jsx)(B.$W, {
                    closeToast: t,
                    cover: (0, y.jsx)(k.Icon, { className: K().icon, size: 'xs', variant: 'chain' }),
                    message: (0, y.jsx)(w.Caption, {
                        className: K().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, y.jsx)(j.A, { id: 'notifications-info.html-code-copied' }),
                    }),
                    coverRadius: 's',
                });
            };
            var G = a(79073),
                V = a.n(G);
            let z = (0, C.PA)((e) => {
                let { entity: t } = e,
                    { formatMessage: a } = (0, f.A)(),
                    { language: i } = (0, s.h6b)(),
                    { notify: n } = (0, s.lkh)();
                (0, L.useEffect)(() => {
                    t.setListenMessage((e) => a({ id: 'share.iframe-listen' }, { html: e }));
                }, [t, a]);
                let r = (0, P.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        t.setWidth(a);
                    }),
                    l = (0, P.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        !p.test(a) && (0 === a.length || Number.isNaN(Number(a)) || 220 > Number(a)) && t.setWidth(String(220));
                    }),
                    o = (0, P.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        t.setHeight(a);
                    }),
                    d = (0, P.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        !p.test(a) && (0 === a.length || Number.isNaN(Number(a)) || 88 > Number(a)) && t.setHeight(String(88));
                    }),
                    c = { width: O(t.width, 220), height: O(t.height, 88) },
                    u = t.iframeUri.replace(_, i),
                    m = t.iframeCode.replace(_, i),
                    g = (0, P.c)(async () => {
                        await window.navigator.clipboard.writeText(m), n((0, y.jsx)(U, {}), { containerId: s.uQT.INFO });
                    });
                return (0, y.jsxs)('div', {
                    className: V().root,
                    ...(0, T.Am)(T.Kq.shareIframe.SHARE_IFRAME_EDITOR),
                    children: [
                        (0, y.jsxs)('form', {
                            className: V().controls,
                            children: [
                                (0, y.jsxs)('div', {
                                    className: V().settings,
                                    children: [
                                        (0, y.jsx)(M.p, {
                                            containerClassName: V().sizeInputContainer,
                                            size: 'xxxs',
                                            value: t.width,
                                            variant: 'secondary',
                                            pattern: '^\\d+(px|%)?$',
                                            min: 220,
                                            required: !0,
                                            onChange: r,
                                            onBlur: l,
                                            'aria-label': a({ id: 'share.iframe-editor-width' }),
                                            ...(0, T.Am)(T.Kq.shareIframe.SHARE_IFRAME_EDITOR_WIDTH_INPUT),
                                        }),
                                        (0, y.jsx)(k.Icon, { size: 'xs', variant: 'close' }),
                                        (0, y.jsx)(M.p, {
                                            containerClassName: V().sizeInputContainer,
                                            size: 'xxxs',
                                            value: t.height,
                                            pattern: '^\\d+(px|%)?$',
                                            variant: 'secondary',
                                            min: 88,
                                            required: !0,
                                            onChange: o,
                                            onBlur: d,
                                            'aria-label': a({ id: 'share.iframe-editor-height' }),
                                            ...(0, T.Am)(T.Kq.shareIframe.SHARE_IFRAME_EDITOR_HEIGHT_INPUT),
                                        }),
                                    ],
                                }),
                                (0, y.jsx)(M.p, {
                                    inputClassName: V().iframeCodeInput,
                                    containerClassName: V().iframeCodeInputContainer,
                                    type: 'text',
                                    size: 'xxxs',
                                    variant: 'secondary',
                                    value: m,
                                    required: !0,
                                    readOnly: !0,
                                    'aria-label': a({ id: 'share.iframe-editor-code' }),
                                    ...(0, T.Am)(T.Kq.shareIframe.SHARE_IFRAME_EDITOR_CODE_INPUT),
                                }),
                                (0, y.jsx)(R.$, {
                                    color: 'primary',
                                    className: V().copyButton,
                                    size: 'l',
                                    radius: 'xxxl',
                                    onClick: g,
                                    ...(0, T.Am)(T.Kq.shareIframe.SHARE_IFRAME_EDITOR_COPY_BUTTON),
                                    children: (0, y.jsx)(w.Caption, {
                                        type: 'text',
                                        variant: 'div',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        children: (0, y.jsx)(j.A, { id: 'share.iframe-copy' }),
                                    }),
                                }),
                            ],
                        }),
                        (0, y.jsx)('div', {
                            className: V().iframeContainer,
                            style: c,
                            ...(0, T.Am)(T.Kq.shareIframe.SHARE_IFRAME_EDITOR_PREVIEW),
                            children: (0, y.jsx)('iframe', { className: V().iframe, src: u, title: a({ id: 'share.iframe-editor-preview' }) }),
                        }),
                    ],
                });
            });
            var F = a(90042),
                W = a.n(F);
            let X = (0, C.PA)(() => {
                let {
                        shareIframe: e,
                        settings: { isMobile: t },
                    } = (0, s.Pjs)(),
                    { formatMessage: a } = (0, f.A)();
                return e.entity
                    ? (0, y.jsx)(E.a, {
                          className: W().root,
                          contentClassName: W().content,
                          open: e.modal.isOpened,
                          onOpenChange: e.modal.onOpenChange,
                          placement: t ? 'default' : 'center',
                          size: 'fitContent',
                          title: a({ id: 'share.iframe-modal-title' }),
                          labelClose: a({ id: 'interface-actions.close' }),
                          onClose: e.closeModal,
                          overlayColor: 'full',
                          containerProps: (0, T.Am)(T.Kq.shareIframe.SHARE_IFRAME_MODAL),
                          children: (0, y.jsx)(z, { entity: e.entity }),
                      })
                    : null;
            });
        },
        55471: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => b, y: () => n });
            var i = a(42561);
            let n = () => {
                let { isFreemium: e } = (0, i.XCI)(),
                    {
                        user: t,
                        advertBanners: {
                            banners: { sideAdvertBanner: a },
                        },
                    } = (0, i.Pjs)();
                return !!a.isVisible && (!t.isAuthorized || e);
            };
            var r = a(62936),
                l = a(79950),
                s = a(19718),
                o = a(44020),
                d = a(47480),
                c = a(26731),
                u = a(5099),
                m = a(20418),
                _ = a(85906);
            let p = { p1: 'bwvvu', p2: 'foom', puid1: '', puid2: '' };
            var g = a(47958),
                v = a.n(g);
            let h = (0, s.PA)((e) => {
                    let { className: t, forwardRef: a } = e,
                        {
                            advertBanners: {
                                banners: { sideAdvertBanner: n },
                            },
                            experiments: s,
                            paywall: { modal: o },
                        } = (0, i.Pjs)(),
                        { formatMessage: g } = (0, d.A)(),
                        h = n.type !== i.h8o.EMPTY && s.checkExperiment(i.zal.WebNextCloseAdsSideBanner, 'on');
                    return (0, r.jsxs)('section', {
                        className: (0, l.$)(v().root, t, { [v().root_hidden]: !n.isVisible }),
                        'aria-label': g({ id: 'advert.banner' }),
                        role: 'banner',
                        ref: a,
                        children: [
                            (0, r.jsx)('div', {
                                className: v().contentWrapper,
                                children: (0, r.jsx)(_.NX, {
                                    className: v().content,
                                    ownerId: i.PVv,
                                    containerId: 'adfox_173831489302952769',
                                    params: p,
                                    onLoad: n.setType,
                                    onError: n.toggleHasErrorTrue,
                                    onNoAds: n.toggleNoAdsTrue,
                                }),
                            }),
                            h &&
                                (0, r.jsx)(u.$, {
                                    className: v().disableAdsButton,
                                    onClick: o.open,
                                    size: 'default',
                                    radius: 'xxxl',
                                    children: (0, r.jsx)(m.Caption, {
                                        className: v().adsCloseText,
                                        variant: 'span',
                                        size: 'm',
                                        children: (0, r.jsx)(c.A, { id: 'ads.disable-ads' }),
                                    }),
                                }),
                        ],
                    });
                }),
                b = (0, o.forwardRef)((e, t) => (0, r.jsx)(h, { forwardRef: t, ...e }));
        },
        56367: (e) => {
            e.exports = { root: 'Navbar_root__chF4R', root_collapsed: 'Navbar_root_collapsed__pozJX' };
        },
        57143: (e) => {
            e.exports = { image: 'FamilyInviteErrorView_image__OyVA_', image_small: 'FamilyInviteErrorView_image_small__uczsu' };
        },
        58108: (e) => {
            e.exports = {
                title: 'TrackModalTitle_title__3zfNn',
                important: 'TrackModalTitle_important__qNVlq',
                content: 'TrackModalTitle_content__mtQKw',
                explicitMark: 'TrackModalTitle_explicitMark__aRT_I',
                text: 'TrackModalTitle_text__3iWX4',
                artistCaption: 'TrackModalTitle_artistCaption__Sj1CR',
                link: 'TrackModalTitle_link__kzVsl',
                meta: 'TrackModalTitle_meta__xlEgt',
                entityName: 'TrackModalTitle_entityName__BRnTV',
            };
        },
        59192: (e, t, a) => {
            'use strict';
            a.d(t, { hq: () => el, qQ: () => d });
            var i = a(42561);
            async function n(e, t, a) {
                var n, r, l, s, o, d, c;
                if (!e || !t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let u = await (0, i.WGy)(a.locale),
                    m = (0, i.NsT)(null != (n = e.title) ? n : '');
                return a.isNotFound
                    ? { robots: { index: !1 } }
                    : {
                          title:
                              null != (r = a.disclaimerTitle)
                                  ? r
                                  : (function (e) {
                                        var t;
                                        let { trackMeta: a, messageFormatter: n } = e,
                                            r = (0, i.j4K)(null != (t = a.artists) ? t : []);
                                        return n({ id: 'metadata.track-title' }, { trackTitle: a.title, artistsNames: r });
                                    })({ trackMeta: e, messageFormatter: u }),
                          description: (function (e) {
                              var t, a;
                              let { trackMeta: n, albumMeta: r, messageFormatter: l } = e,
                                  s = (0, i.j4K)(null != (a = n.artists) ? a : []),
                                  o = Math.round((n.durationMs || 0) / i.k7R);
                              return l(
                                  { id: 'metadata.track-description' },
                                  {
                                      type: (null == (t = n.type) ? void 0 : t.replace('-', '_')) || null,
                                      artistsNames: s || null,
                                      trackTitle: n.title,
                                      albumTitle: (null == r ? void 0 : r.title) || null,
                                      duration: (0, i.E4p)(o),
                                      year: (null == r ? void 0 : r.year) || null,
                                  },
                              );
                          })({ trackMeta: e, albumMeta: t, messageFormatter: u }),
                          openGraph: (0, i.i$E)({
                              ogTitle: m,
                              ogDescription: (function (e) {
                                  var t, a;
                                  let { trackMeta: n, albumMeta: r, messageFormatter: l } = e,
                                      s = (0, i.YFq)((0, i.j4K)(null != (a = n.artists) ? a : []), 96, !1);
                                  return l(
                                      { id: 'metadata.track-og-description' },
                                      {
                                          type: (null == (t = n.type) ? void 0 : t.replace('-', '_')) || null,
                                          artistsNames: s || null,
                                          year: (null == r ? void 0 : r.year) || null,
                                      },
                                  );
                              })({ trackMeta: e, albumMeta: t, messageFormatter: u }),
                              fullUrl: null != (l = a.fullUrl) ? l : '',
                              locale: a.locale,
                              ogImage: null != (s = e.ogImage) ? s : '',
                              siteName: u({ id: 'metadata.yandex-music' }),
                          }),
                          twitter: (0, i.HRN)({ cardType: i.WfF.APP, title: m, url: a.url, appName: u({ id: 'metadata.yandex-music' }) }),
                          appLinks: (0, i.X5i)({
                              additional: { ...a, url: null != (o = a.url) ? o : '', fullUrl: null != (d = a.fullUrl) ? d : '', host: a.host },
                              appName: u({ id: 'metadata.yandex-music' }),
                          }),
                          other: { 'music:musician': (0, i.xdV)(null != (c = null == e ? void 0 : e.artists) ? c : [], a.host) },
                          alternates: (0, i.SEs)('/album/:albumId/track/:trackId', a.tld, { params: { albumId: t.id, trackId: e.id } }),
                      };
            }
            var r = a(51606),
                l = a(83110),
                s = a(66161),
                o = a(54690);
            let d = r.gK
                .compose(
                    r.gK.model({
                        meta: r.gK.maybeNull(s.vj),
                        similarTracks: r.gK.maybeNull(r.gK.array(s.vj)),
                        prevEntityId: r.gK.maybeNull(r.gK.union(r.gK.string, r.gK.number)),
                        trackId: r.gK.maybeNull(r.gK.union(r.gK.string, r.gK.number)),
                        albumId: r.gK.maybeNull(r.gK.number),
                        isTrackPage: r.gK.optional(r.gK.boolean, !1),
                        withAnimation: r.gK.boolean,
                        shouldSendEventOnPlusButtonShowed: r.gK.boolean,
                    }),
                    o.qt,
                    o.XT,
                )
                .views((e) => ({
                    get shouldReloadMeta() {
                        var t;
                        let a = e.trackId && e.albumId && (0, l.V)(e.trackId, e.albumId);
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
                            (0, r._n)(e) &&
                                ((e.meta = (0, s.vU)(t.track)),
                                (e.similarTracks = (0, r.wg)(null == (a = t.similarTracks) ? void 0 : a.map((e) => (0, s.vU)(e)))),
                                (e.loadingState = i.GuX.RESOLVE));
                        },
                        setIsTrackPage(t) {
                            e.isTrackPage = !!t;
                        },
                        setAnimationState(t) {
                            e.withAnimation = t;
                        },
                        getData: (0, r.L3)(function* () {
                            let { tracksResource: a, modelActionsLogger: n } = (0, r._$)(e);
                            if (!e.trackId || e.loadingState === i.GuX.PENDING || e.shouldReloadMeta) return null;
                            try {
                                var l;
                                (e.loadingState = i.GuX.PENDING), (e.meta = null);
                                let n = yield a.getFullInfoTrack({ trackId: e.trackId, albumId: e.albumId });
                                if (!n) return (e.loadingState = i.GuX.REJECT), null;
                                (e.meta = (0, s.vU)(n.track)),
                                    (e.similarTracks = (0, r.wg)(n.similarTracks.map((e) => (0, s.vU)(e)))),
                                    (e.prevEntityId = n.track.id),
                                    t.setShouldSendEventOnPlusButtonShowed(!0),
                                    (null == (l = e.meta) ? void 0 : l.resolveAllDisclaimers) && (yield e.meta.resolveAllDisclaimers()),
                                    (e.loadingState = i.GuX.RESOLVE);
                            } catch (t) {
                                n.error(t), (e.loadingState = i.GuX.REJECT);
                            }
                            return null;
                        }),
                        open(t) {
                            let { trackId: a, albumId: i } = t;
                            a && i && ((e.trackId = a), (e.albumId = i), (e.isOpened = !0));
                        },
                        reset() {
                            (e.loadingState = i.GuX.IDLE), (e.shouldSendEventOnPlusButtonShowed = !0);
                        },
                    };
                    return t;
                })
                .named('TrackPage');
            var c = a(62936),
                u = a(19718),
                m = a(44020),
                _ = a(4714),
                p = a(90914),
                g = a(96297),
                v = a.n(g),
                h = a(47480),
                b = a(8669),
                I = a(59935),
                x = a(5099),
                N = a(85742),
                A = a(85906),
                S = a(20418),
                y = a(61328),
                C = a.n(y),
                f = a(30388),
                T = a(90078),
                E = a.n(T);
            let L = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, c.jsxs)('div', {
                        className: E().root,
                        children: [
                            (0, c.jsx)(f.Shimmer, { className: E().title, isActive: t }),
                            (0, c.jsxs)('div', {
                                className: E().coverBlock,
                                children: [
                                    (0, c.jsx)(f.Shimmer, { className: E().cover, isActive: t }),
                                    (0, c.jsxs)('div', {
                                        className: E().linkBlock,
                                        children: [
                                            (0, c.jsx)(f.Shimmer, { className: E().link, isActive: t }),
                                            (0, c.jsx)(f.Shimmer, { className: E().description, isActive: t }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                j = (0, u.PA)((e) => {
                    var t;
                    let { onModalClose: a } = e,
                        { formatMessage: n } = (0, h.A)(),
                        {
                            settings: { isMobile: r },
                            track: l,
                            fullscreenPlayer: s,
                        } = (0, i.Pjs)(),
                        o = (0, I.c)(() => {
                            s.modal.isOpened && s.modal.close(), r && a();
                        }),
                        d = null == (t = l.meta) ? void 0 : t.mainAlbum,
                        u = (0, m.useMemo)(() => {
                            if (!d) return;
                            let e = d.trackCount;
                            return d.isAudiobook || d.isFairyTale
                                ? n({ id: 'entity-names.number-of-chapters' }, { counter: e })
                                : d.isPodcast
                                  ? n({ id: 'entity-names.number-of-episodes' }, { counter: e })
                                  : n({ id: 'entity-names.number-of-tracks' }, { counter: e });
                        }, [d, n]);
                    return l.isShimmerVisible
                        ? (0, c.jsx)(L, { isShimmerActive: l.isLoading })
                        : d
                          ? (0, c.jsxs)('div', {
                                className: C().root,
                                ...(0, b.Am)(b.Xk.track.TRACK_PAGE_ALBUM),
                                children: [
                                    (0, c.jsx)(S.Heading, {
                                        variant: 'h2',
                                        size: 'm',
                                        lineClamp: 1,
                                        className: C().title,
                                        ...(0, b.Am)(b.Xk.track.TRACK_PAGE_ALBUM_TITLE),
                                        children: n({ id: 'track-modal.album-heading' }, { type: (0, i.yDn)(d.type) }),
                                    }),
                                    (0, c.jsx)(A.Tw, {
                                        title: null == d ? void 0 : d.title,
                                        coverUrl: null == d ? void 0 : d.coverUri,
                                        description: u,
                                        viewAllActionLink: null == d ? void 0 : d.url,
                                        onViewAllAction: o,
                                        titleLineClamp: 1,
                                        available: d.isAvailable,
                                        titleSize: 'xs',
                                        withDescription: !!u,
                                    }),
                                ],
                            })
                          : null;
                });
            var P = a(4497),
                R = a(5768),
                k = a(75686),
                M = a.n(k),
                w = a(79950),
                O = a(6817),
                B = a.n(O);
            let D = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, c.jsxs)('div', {
                        className: B().root,
                        children: [
                            (0, c.jsx)(f.Shimmer, { className: B().title, isActive: t }),
                            (0, c.jsx)(A.q$, { className: (0, w.$)(B().lyrics, B().important), count: 4, isActive: t }),
                            (0, c.jsx)(f.Shimmer, { className: B().button, isActive: t }),
                        ],
                    });
                },
                K = (0, u.PA)((e) => {
                    var t, a, n, r;
                    let { track: l } = e,
                        { formatMessage: o } = (0, h.A)(),
                        { notify: d } = (0, i.lkh)(),
                        { track: u, trackLyrics: _ } = (0, i.Pjs)(),
                        { state: p, setState: g } = (0, P.e)(!1),
                        v = _.currentTrackId !== (null == (t = u.meta) ? void 0 : t.id),
                        x = u.isResolved && (null == (a = u.meta) ? void 0 : a.isLyricsAvailable);
                    (0, m.useEffect)(() => {
                        var e;
                        (null == (e = u.meta) ? void 0 : e.id) && x && v && _.getLyrics(u.meta.id);
                    }, [v, x, _, null == (n = u.meta) ? void 0 : n.id]),
                        _.shouldShowErrorNotification &&
                            (d((0, c.jsx)(A.hT, { error: o({ id: 'error-messages.error-during-action' }) }), { containerId: i.uQT.ERROR }), _.resetShouldShowError());
                    let N = (0, I.c)((e) => {
                        g(e), e && l && _.sendViews({ trackId: l.id, albumId: l.albumId });
                    });
                    return _.isShimmerVisible || !_.lyrics || u.isShimmerVisible
                        ? (0, c.jsx)(D, { isShimmerActive: _.isLoading || u.isLoading })
                        : (0, c.jsxs)('div', {
                              className: M().root,
                              ...(0, b.Am)(b.Xk.track.TRACK_PAGE_LYRICS),
                              children: [
                                  (0, c.jsx)(S.Heading, {
                                      variant: 'h2',
                                      size: 'm',
                                      lineClamp: 1,
                                      className: M().title,
                                      ...(0, b.Am)(b.e8.content.TRACK_LYRICS_TITLE),
                                      children: o({ id: 'entity-names.text' }),
                                  }),
                                  (0, c.jsx)(R.K, {
                                      moreText: o({ id: 'track-modal.read-more' }),
                                      buttonClassName: M().button,
                                      open: p,
                                      onOpenChange: N,
                                      lineClamp: 4,
                                      withFade: !0,
                                      children: (0, c.jsx)(S.Caption, {
                                          variant: 'div',
                                          className: M().lyrics,
                                          size: 'l',
                                          weight: 'medium',
                                          ...(0, b.Am)(b.e8.content.TRACK_LYRICS_TEXT),
                                          children: (0, c.jsx)(s.xe, {
                                              lyrics: _.lyrics,
                                              authors: _.writersNames,
                                              source: null == (r = _.major) ? void 0 : r.prettyName,
                                              isShimmerVisible: _.isShimmerVisible,
                                              isShimmerActive: _.isLoading,
                                          }),
                                      }),
                                  }),
                              ],
                          });
                });
            var U = a(81959),
                G = a(9432),
                V = a.n(G);
            let z = (0, u.PA)((e) => {
                let { tracks: t, contextId: a, isShimmerVisible: n, isShimmerActive: r, autoflowSeeds: l, shouldResetCarouselScroll: o } = e,
                    { formatMessage: d } = (0, h.A)(),
                    { from: u } = (0, i.fyy)({ contextId: a, contextType: U.K.Various }),
                    m = (0, I.c)((e, a) => ({
                        contextData: { type: U.K.Various, meta: { id: e.entityId }, from: u, overrideAutoflowSeeds: l },
                        queueParams: { index: a },
                        loadContextMeta: !1,
                        entitiesData: t.map(s.$b),
                    }));
                return (0, c.jsx)(A.$2, {
                    className: V().root,
                    shimmer: (0, c.jsx)(A.DS, { variant: i.Xjt.PLAYLIST, isActive: r }),
                    maxColumnsCount: A.DI.TWO,
                    itemsCountPerColumn: 4,
                    blockHeaderTitle: d({ id: 'track-modal.similar-tracks' }),
                    blockHeaderHeadingVariant: 'h2',
                    isShimmerVisible: n,
                    isShimmerActive: r,
                    carouselItemClassName: (0, w.$)(V().item, V().important),
                    blockHeaderClassName: V().title,
                    carouselClassName: V().tracksContainer,
                    shouldResetCarouselScroll: o,
                    ...(0, b.Am)(b.Xk.track.TRACK_PAGE_SIMILAR_TRACKS),
                    children: t.map((e, t) => (0, c.jsx)(s.Kt, { track: e, playContextParams: m(e, t), withDislike: !1, withTrailer: !1 }, e.id)),
                });
            });
            var F = a(35085),
                W = a(81628),
                X = a(26731),
                Y = a(43026),
                $ = a(23480),
                H = a(11584),
                q = a(32538),
                Z = a.n(q);
            let Q = (0, u.PA)((e) => {
                var t, a, n;
                let { track: r } = e,
                    { shouldShowBuySubscriptionModal: l, showBuySubscriptionModal: o } = (0, i.qBP)(),
                    { from: d, utmLink: u } = (0, i.fyy)({ contextId: r.id, contextType: U.K.Various }),
                    {
                        user: _,
                        settings: { isMobile: p },
                        track: { shouldSendEventOnPlusButtonShowed: g, setShouldSendEventOnPlusButtonShowed: v, isOpened: h },
                        albumCPA: { isPlusCPAPlayerBarEnabled: x },
                        paywall: { modal: S },
                    } = (0, i.Pjs)(),
                    y = (0, i.brA)(),
                    C = ((e) => {
                        let t = (0, H.st)(),
                            a = (0, i.UlF)(),
                            { hash: n } = (0, H.gf)();
                        return (0, I.c)(() => {
                            if (!t) return;
                            let r = {
                                    hash: n,
                                    pageId: i.Wft[i._Q$.TRACK_SCREEN],
                                    mainObjectType: $.ky.Track,
                                    mainObjectId: e.objectId,
                                    entityId: 'buy_subscription_button',
                                    pageStyle: $.QL.Sheet,
                                    pagePlacement: $.c4.Right,
                                    from: i.Wft[i._Q$.TRACK_SCREEN],
                                    to: i.Wft[i._Q$.PAYWALL],
                                    tabId: '',
                                    tabPos: 0,
                                },
                                l = (0, $.Fx)({ params: r, logger: a, context: 'useSendEventOnTrackModalPlusButtonNavigated' });
                            l && (0, $.QS)(t.evgenInstance, l);
                        });
                    })({ objectId: r.id }),
                    f = ((e) => {
                        let t = (0, H.st)(),
                            a = (0, i.UlF)(),
                            { hash: n } = (0, H.gf)();
                        return (0, I.c)(() => {
                            if (!t) return;
                            let r = {
                                    hash: n,
                                    pageId: i.Wft[i._Q$.TRACK_SCREEN],
                                    mainObjectType: $.ky.Track,
                                    mainObjectId: e.objectId,
                                    entityId: 'buy_subscription_button',
                                    pageStyle: $.QL.Sheet,
                                    pagePlacement: $.c4.Right,
                                    tabId: '',
                                    tabPos: 0,
                                },
                                l = (0, $.Fx)({ params: r, logger: a, context: 'useSendEventOnTrackModalPlusButtonShowed' });
                            l && (0, $.Pf)(t.evgenInstance, l);
                        });
                    })({ objectId: r.id }),
                    T = (0, i.PT7)(),
                    E = !_.hasPlus && r.isTrackMusic && ((r.isAvailable && !r.hasModalAccess) || (null == (t = r.mainAlbum) ? void 0 : t.isAvailableOnlyForPlus)),
                    L = (0, i.NPu)(),
                    j = x(null == (a = r.mainAlbum) ? void 0 : a.id, null == (n = r.mainAlbum) ? void 0 : n.isNonMusic),
                    P = r.isAvailable && L && !j,
                    { iconSize: R, controlSize: k } = (0, F.q)(p),
                    [M, O] = (0, m.useState)(!1),
                    { isPlaying: B, togglePlay: D } = (0, i.Dx4)({
                        playContextParams: { contextData: { type: U.K.Various, meta: { id: r.entityId }, from: d, utmLink: u }, loadContextMeta: !0 },
                        entityId: r.entityId,
                    }),
                    K = (0, s.wf)({ track: r, callback: D }),
                    G = (0, I.c)(() => {
                        if (!T()) {
                            if (l && !j) return void o();
                            if (P) return void S.open();
                            K(), y(!B);
                        }
                    }),
                    V = (0, Y.KX)(r),
                    z = (0, I.c)((e) => {
                        e.stopPropagation();
                    });
                (0, m.useEffect)(() => {
                    g && E && h && (f(), v(!1));
                }, [f, E, g, v, h]);
                let W = (0, m.useMemo)(() => {
                        if (E) return (0, c.jsx)(A.hS, { text: (0, c.jsx)(X.A, { id: 'payment.high-quality-offer-button-title' }), analyticsNavigatedCallback: C });
                    }, [E, C]),
                    q = E ? 'secondary' : 'primary';
                return (0, c.jsxs)('div', {
                    className: Z().root,
                    children: [
                        W,
                        (0, c.jsxs)('div', {
                            className: Z().controlsContainer,
                            children: [
                                (0, c.jsx)(A.DM, {
                                    className: (0, w.$)({ [Z().disabledButtonByDisclaimer]: !r.isAvailable && r.hasModalAccess }),
                                    withRipple: r.isAvailable,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: k,
                                    color: q,
                                    iconSize: R,
                                    isPlaying: B,
                                    onClick: G,
                                    disabled: !r.isAvailable && !r.hasModalAccess,
                                    children: !p && (0, c.jsx)(X.A, { id: 'player-actions.listen' }),
                                }),
                                (0, c.jsx)(A.cy, {
                                    isLiked: r.isLiked,
                                    onClick: V,
                                    variant: 'default',
                                    size: k,
                                    iconSize: R,
                                    withRipple: !p,
                                    disabled: !r.isAvailable || !_.isAuthorized,
                                }),
                                r.isAvailable &&
                                    (0, c.jsx)(s._Y, {
                                        track: r,
                                        open: M,
                                        onOpenChange: O,
                                        size: k,
                                        icon: (0, c.jsx)(N.Icon, { variant: 'more', size: R }),
                                        className: (0, w.$)(Z().menuButton, { [Z().menuButton_active]: M }),
                                        wrapperClassName: Z().menuWrapper,
                                        onClick: z,
                                        withTrailer: !1,
                                        ...(0, b.Am)(b.e8.pageHeader.TRACK_HEADER_CONTEXT_MENU_BUTTON),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var J = a(58108),
                ee = a.n(J),
                et = a(91263),
                ea = a.n(et);
            let ei = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, c.jsxs)('div', {
                        className: ea().root,
                        children: [
                            (0, c.jsx)(f.Shimmer, { className: ea().entityName, isActive: t }),
                            (0, c.jsx)(f.Shimmer, { className: ea().title, isActive: t }),
                            (0, c.jsx)(A.q$, {
                                className: (0, w.$)(ea().artists, ea().important),
                                shimmerClassName: ea().artist,
                                count: 3,
                                minWidth: 10,
                                maxWidth: 30,
                                isActive: t,
                            }),
                            (0, c.jsxs)('div', {
                                className: ea().controls,
                                children: [
                                    (0, c.jsx)(f.Shimmer, { className: ea().playButton, isActive: t }),
                                    (0, c.jsx)(f.Shimmer, { className: ea().button, isActive: t }),
                                    (0, c.jsx)(f.Shimmer, { className: ea().button, isActive: t }),
                                    (0, c.jsx)(f.Shimmer, { className: ea().button, isActive: t }),
                                ],
                            }),
                        ],
                    });
                },
                en = (0, u.PA)((e) => {
                    let { track: t, isShimmerVisible: a, isShimmerActive: n, isTrackPage: r } = e,
                        { formatMessage: l } = (0, h.A)(),
                        {
                            settings: { isMobile: s },
                        } = (0, i.Pjs)(),
                        o = null == t ? void 0 : t.explicitDisclaimer,
                        d = (0, m.useMemo)(() => {
                            if (o)
                                return (0, c.jsx)(A.Nq, {
                                    className: (0, w.$)(ee().explicitMark, ee().important),
                                    getDescriptionTexts: t.getDescriptionTexts,
                                    size: 'xxs',
                                    variant: o,
                                });
                        }, [o, null == t ? void 0 : t.getDescriptionTexts]);
                    return a
                        ? (0, c.jsx)(ei, { isShimmerActive: n })
                        : t
                          ? (0, c.jsx)(F.kE, {
                                entityName: l({ id: 'entity-names.track-type' }, { type: (0, i.yDn)(t.type) }),
                                entityNameIcon: d,
                                controls: (0, c.jsx)(Q, { track: t }),
                                meta: (0, c.jsx)(W.iQ, {
                                    className: (0, w.$)(ee().text, ee().important),
                                    linkClassName: ee().link,
                                    captionClassName: ee().artistCaption,
                                    artists: t.artists,
                                    variant: 'breakWord',
                                    separator: s ? '' : void 0,
                                }),
                                title: t.title,
                                version: t.version,
                                headingVariant: r ? 'h1' : 'div',
                                titleClassName: (0, w.$)(ee().title, ee().important),
                                metaClassName: (0, w.$)(ee().meta, ee().important),
                                contentClassName: (0, w.$)(ee().content, ee().important),
                                withHeadingClamp: !1,
                                entityNameClassName: ee().entityName,
                            })
                          : null;
                }),
                er = (0, u.PA)(() => {
                    var e, t, a, n, r, l, o, d;
                    let { formatMessage: u } = (0, h.A)(),
                        { notify: _ } = (0, i.lkh)(),
                        {
                            user: p,
                            track: g,
                            albumCPA: { isPlusCPAPlayerBarEnabled: S },
                        } = (0, i.Pjs)(),
                        y = S(
                            null == (t = g.meta) || null == (e = t.mainAlbum) ? void 0 : e.id,
                            null == (n = g.meta) || null == (a = n.mainAlbum) ? void 0 : a.isNonMusic,
                        ),
                        C = g.similarTracks && g.similarTracks.length > 0 && (null == (r = g.meta) ? void 0 : r.isTrackMusic) && !y,
                        f = (0, I.c)(() => {
                            g.setAnimationState(!0), g.close(), g.reset();
                        }),
                        T = (0, s.wf)({ track: g.meta, disclaimerRejectHandler: f });
                    return (
                        (0, m.useEffect)(() => {
                            var e;
                            g.isOpened && (null == (e = g.meta) ? void 0 : e.isLegalRejected) && g.close();
                        }, [g, g.isOpened, null == (l = g.meta) ? void 0 : l.isLegalRejected]),
                        (0, m.useEffect)(() => {
                            T();
                        }, [T]),
                        g.isRejected && _((0, c.jsx)(A.hT, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: i.uQT.ERROR }),
                        (0, c.jsxs)('div', {
                            ...(0, b.Am)(b.Xk.track.TRACK_PAGE),
                            children: [
                                (0, c.jsxs)('header', {
                                    className: v().header,
                                    children: [
                                        (0, c.jsx)(x.$, {
                                            radius: 'round',
                                            color: 'secondary',
                                            size: 'xxs',
                                            icon: (0, c.jsx)(N.Icon, { variant: 'close', size: 'xxs' }),
                                            className: v().closeButton,
                                            onClick: f,
                                            'aria-label': u({ id: 'interface-actions.close' }),
                                            ...(0, b.Am)(b.Xk.track.TRACK_PAGE_CLOSE_BUTTON),
                                        }),
                                        (0, c.jsx)(en, { track: g.meta, isShimmerVisible: g.isShimmerVisible, isShimmerActive: g.isLoading, isTrackPage: g.isTrackPage }),
                                    ],
                                }),
                                (0, c.jsxs)('div', {
                                    className: v().content,
                                    ...(0, b.Am)(b.Xk.track.TRACK_PAGE_CONTENT),
                                    children: [
                                        (0, c.jsx)(j, { onModalClose: f }),
                                        (null == (o = g.meta) ? void 0 : o.isLyricsAvailable) && (0, c.jsx)(K, { track: g.meta }, g.meta.id),
                                        C &&
                                            g.similarTracks &&
                                            (0, c.jsx)(z, {
                                                tracks: g.similarTracks,
                                                contextId: null == (d = g.meta) ? void 0 : d.entityId,
                                                isShimmerVisible: g.isShimmerVisible,
                                                isShimmerActive: g.isLoading,
                                                autoflowSeeds: g.seeds,
                                                shouldResetCarouselScroll: g.shouldReloadMeta,
                                            }),
                                    ],
                                }),
                                g.meta && (0, c.jsx)(s.v4, { user: p, track: g.meta }),
                            ],
                        })
                    );
                }),
                el = (0, u.PA)(() => {
                    let { contentRef: e } = (0, i.gKY)(),
                        {
                            album: t,
                            track: a,
                            settings: { isMobile: r },
                        } = (0, i.Pjs)();
                    a.trackId && a.albumId && a.isOpened && a.getData(),
                        (0, m.useEffect)(
                            () => () => {
                                a.reset();
                            },
                            [a],
                        ),
                        (0, m.useEffect)(() => {
                            a.isOpened && a.setAnimationState(!1);
                        }, [a]),
                        ((e, t) => {
                            (0, m.useEffect)(() => {
                                if (!e || !t || t.isLegalRejected) return;
                                let a = (0, p.fO)(e);
                                n((0, s.zc)(t), a, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                    (0, i.jxB)(e);
                                });
                            }, [e, null == e ? void 0 : e.title, t, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.title]);
                        })(t.meta, a.meta);
                    let l = (0, m.useCallback)(
                        (e) => {
                            var t;
                            null == (t = a.onOpenChange) || t.call(a, e);
                        },
                        [a],
                    );
                    return (0, c.jsx)(_.a, {
                        size: 'fitContent',
                        placement: r ? 'default' : 'right',
                        open: a.isOpened,
                        onOpenChange: l,
                        className: v().root,
                        contentClassName: v().modalContent,
                        portalNode: r ? null : e,
                        showHeader: !1,
                        withOverlay: r,
                        closeOnOutsidePress: !1,
                        withAnimation: a.withAnimation,
                        isMobile: r,
                        lockScroll: r,
                        children: (0, c.jsx)(er, {}),
                    });
                });
            (0, u.PA)((e) => {
                let { albumId: t, trackId: a, preloadedTrack: n, preloadedSimilarTracks: r } = e,
                    { track: l } = (0, i.Pjs)(),
                    s = (0, i.J75)(n);
                return n && l.setTrackInfo({ track: n, similarTracks: r }), l.setIsTrackPage(!0), s || l.open({ trackId: a, albumId: Number(t) }), null;
            });
        },
        59413: (e) => {
            e.exports = {
                root: 'BuySubscriptionBanner_root__y2M_5',
                logos: 'BuySubscriptionBanner_logos__LHOzM',
                title: 'BuySubscriptionBanner_title___sWo0',
                plusButton: 'BuySubscriptionBanner_plusButton__UwULz',
                plusButtonShimmer: 'BuySubscriptionBanner_plusButtonShimmer__nS7im',
            };
        },
        61328: (e) => {
            e.exports = { root: 'TrackModalAlbum_root__ux7J4', title: 'TrackModalAlbum_title__CtM2_' };
        },
        61691: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => y, J: () => l });
            var i = a(16264),
                n = a(51606),
                r = a(54690);
            let l = n.gK
                .model('ImageSliderModal', {
                    modal: r.qt,
                    images: n.gK.maybeNull(n.gK.array(n.gK.string)),
                    initialSlideIndex: n.gK.optional(n.gK.number, 0),
                    loadedImages: n.gK.maybeNull(n.gK.array(n.gK.string)),
                    sizeImage: n.gK.optional(n.gK.number, 1e3),
                    withAspectRatio: n.gK.optional(n.gK.boolean, !0),
                })
                .views((e) => ({ isImageLoaded: (t) => !!t && !!e.loadedImages && e.loadedImages.includes(t) }))
                .actions((e) => ({
                    openImages(t) {
                        let { images: a, initialSlideIndex: r, sizeImage: l, withAspectRatio: s } = t;
                        (e.images = (0, n.wg)((0, i.HO)(a))),
                            (e.sizeImage = null != l ? l : 1e3),
                            (e.withAspectRatio = null == s || s),
                            r && (e.initialSlideIndex = r),
                            e.modal.open();
                    },
                    setImageIsLoaded(t) {
                        var a, i;
                        e.loadedImages || (e.loadedImages = (0, n.wg)([])),
                            !t || (null == (a = e.loadedImages) ? void 0 : a.includes(t)) || null == (i = e.loadedImages) || i.push(t);
                    },
                    close() {
                        (e.images = null), (e.initialSlideIndex = 0), (e.loadedImages = null), e.modal.close();
                    },
                }));
            var s = a(62936),
                o = a(79950),
                d = a(19718),
                c = a(44020),
                u = a(47480),
                m = a(90163),
                _ = a(11576),
                p = a(8669),
                g = a(59935),
                v = a(5099),
                h = a(85742),
                b = a(13030),
                I = a(4714),
                x = a(1858),
                N = a(42561),
                A = a(42090),
                S = a.n(A);
            let y = (0, d.PA)(() => {
                var e, t, a, i;
                let {
                        settings: { isMobile: n },
                        modals: { imageSliderModal: r },
                    } = (0, N.Pjs)(),
                    { formatMessage: l } = (0, u.A)(),
                    { contentRef: d } = (0, N.gKY)(),
                    A = (0, N.zwV)(),
                    y = (0, c.useRef)(null),
                    [C, f] = (0, c.useState)(!0),
                    [T, E] = (0, c.useState)(!1),
                    [L, j] = (0, c.useState)(0),
                    P = (null != (i = null == (e = r.images) ? void 0 : e.length) ? i : 0) > 1,
                    R = (0, g.c)(() => {
                        var e;
                        null == (e = y.current) || e.swiper.slideNext();
                    }),
                    k = (0, g.c)(() => {
                        var e;
                        null == (e = y.current) || e.swiper.slidePrev();
                    }),
                    M = (0, g.c)((e) => {
                        f(e.isBeginning), E(e.isEnd), j(e.activeIndex);
                    });
                return (
                    (0, c.useEffect)(() => {
                        setTimeout(() => {
                            var e, t, a;
                            (null == (e = y.current) ? void 0 : e.swiper) &&
                                (f(0 === y.current.swiper.activeIndex),
                                E(y.current.swiper.activeIndex === (null != (a = null == (t = r.images) ? void 0 : t.length) ? a : 0) - 1),
                                j(y.current.swiper.activeIndex));
                        });
                    }, [null == (t = r.images) ? void 0 : t.length, n]),
                    (0, c.useEffect)(() => {
                        r.modal.isOpened
                            ? (null == A || A.disable(N.Mo.MAIN, N.lbr.CLOSE),
                              null == A || A.disable(N.Mo.MAIN, N.lbr.SLIDE_BACKWARD),
                              null == A || A.disable(N.Mo.MAIN, N.lbr.SLIDE_FORWARD),
                              null == A || A.enable(N.Mo.IMAGE_SLIDER, N.lbr.CLOSE))
                            : (null == A || A.disable(N.Mo.IMAGE_SLIDER, N.lbr.CLOSE),
                              null == A || A.enable(N.Mo.MAIN, N.lbr.CLOSE),
                              null == A || A.enable(N.Mo.MAIN, N.lbr.SLIDE_BACKWARD),
                              null == A || A.enable(N.Mo.MAIN, N.lbr.SLIDE_FORWARD));
                    }, [A, r.modal.isOpened]),
                    (0, c.useEffect)(
                        () => (
                            null == A ||
                                A.addShortcutsListener(N.Mo.IMAGE_SLIDER, N.lbr.CLOSE, () => {
                                    r.modal.isOpened && r.close();
                                }),
                            () => {
                                null == A || A.removeShortcutsListener(N.Mo.IMAGE_SLIDER, N.lbr.CLOSE),
                                    null == A || A.disable(N.Mo.IMAGE_SLIDER, N.lbr.CLOSE),
                                    null == A || A.enable(N.Mo.MAIN, N.lbr.CLOSE),
                                    null == A || A.enable(N.Mo.MAIN, N.lbr.SLIDE_BACKWARD),
                                    null == A || A.enable(N.Mo.MAIN, N.lbr.SLIDE_FORWARD),
                                    r.close();
                            }
                        ),
                        [A, r],
                    ),
                    (0, s.jsxs)(I.a, {
                        className: (0, o.$)(S().root, { [S().root_mobile]: n }),
                        contentClassName: S().modalContent,
                        open: r.modal.isOpened,
                        size: n ? 'fullscreen' : 'fitContent',
                        placement: 'center',
                        showHeader: !1,
                        isMobile: n,
                        onClose: r.close,
                        escapeKey: !1,
                        onOpenChange: r.modal.onOpenChange,
                        portalNode: n ? null : d,
                        withAnimation: !r.modal.isOpened,
                        ...(0, p.Am)(p.e8.imageSlider.IMAGE_SLIDER_MODAL),
                        children: [
                            (0, s.jsx)('div', {
                                className: S().leftArrowWrapper,
                                children:
                                    P &&
                                    (0, s.jsx)(v.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, s.jsx)(h.Icon, { variant: 'arrowLeft', size: 'xxs' }),
                                        onClick: k,
                                        disabled: C,
                                        'aria-label': l({ id: 'slider.prev-image' }),
                                        ...(0, p.Am)(p.e8.imageSlider.IMAGE_SLIDER_MODAL_PREV_SLIDE_BUTTON),
                                    }),
                            }),
                            (0, s.jsx)('div', {
                                className: S().rightArrowWrapper,
                                children:
                                    P &&
                                    (0, s.jsx)(v.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, s.jsx)(h.Icon, { variant: 'arrowRight', size: 'xxs' }),
                                        onClick: R,
                                        disabled: T,
                                        'aria-label': l({ id: 'slider.next-image' }),
                                        ...(0, p.Am)(p.e8.imageSlider.IMAGE_SLIDER_MODAL_NEXT_SLIDE_BUTTON),
                                    }),
                            }),
                            (0, s.jsx)(v.$, {
                                radius: 'round',
                                color: 'secondary',
                                size: 'xxs',
                                icon: (0, s.jsx)(h.Icon, { variant: 'close', size: 'xxs' }),
                                className: S().closeButton,
                                onClick: r.close,
                                'aria-label': l({ id: 'slider.close-image-modal' }),
                                ...(0, p.Am)(p.e8.imageSlider.IMAGE_SLIDER_MODAL_CLOSE_BUTTON),
                            }),
                            (0, s.jsx)('div', {
                                className: S().content,
                                children: (0, s.jsx)(_.RC, {
                                    initialSlide: r.initialSlideIndex,
                                    className: S().slider,
                                    wrapperClass: S().wrapper,
                                    ref: y,
                                    onActiveIndexChange: M,
                                    a11y: { enabled: !0, containerMessage: l({ id: 'slider.image-slider-modal' }) },
                                    pagination: { dynamicBullets: !0, dynamicMainBullets: 4 },
                                    modules: [m.dK, m.s3],
                                    keyboard: !0,
                                    children:
                                        null == (a = r.images)
                                            ? void 0
                                            : a.map((e, t) => {
                                                  var a, i;
                                                  let n = ((e, t) => e >= t - 5 && e <= t + 5)(t, L) ? e : void 0;
                                                  return (0, s.jsxs)(
                                                      _.qr,
                                                      {
                                                          className: S().slide,
                                                          ...(0, p.Am)(p.e8.imageSlider.IMAGE_SLIDER_MODAL_SLIDE),
                                                          children: [
                                                              (0, s.jsx)(b.Image, {
                                                                  fit: 'contain',
                                                                  className: (0, o.$)(S().image, { [S().image_loading]: !r.isImageLoaded(n) }),
                                                                  src: n,
                                                                  size: r.sizeImage,
                                                                  tabIndex: t === L ? 0 : -1,
                                                                  'aria-roledescription': l({ id: 'slider.slide' }),
                                                                  'aria-label': l(
                                                                      { id: 'slider.image-counter' },
                                                                      { index: t + 1, count: null != (i = null == (a = r.images) ? void 0 : a.length) ? i : 0 },
                                                                  ),
                                                                  onLoadBySrc: r.setImageIsLoaded,
                                                                  withLoadingIndicator: !1,
                                                                  withSrcSet: !1,
                                                                  withAvatarReplace: !0,
                                                                  withAspectRatio: r.withAspectRatio,
                                                              }),
                                                              t === L &&
                                                                  (0, s.jsx)('div', {
                                                                      className: (0, o.$)(S().loadingIndicator, { [S().loadingIndicator_showed]: !r.isImageLoaded(n) }),
                                                                      children: (0, s.jsx)(x.y, { size: 'm' }),
                                                                  }),
                                                          ],
                                                      },
                                                      t,
                                                  );
                                              }),
                                }),
                            }),
                        ],
                    })
                );
            });
        },
        62711: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedPlusOptionsBar_root__dOEU7',
                button: 'NavbarDesktopAnimatedPlusOptionsBar_button__NRXbJ',
                important: 'NavbarDesktopAnimatedPlusOptionsBar_important__mltBe',
                icon: 'NavbarDesktopAnimatedPlusOptionsBar_icon__EKWgb',
                optionIcon: 'NavbarDesktopAnimatedPlusOptionsBar_optionIcon__gPbRm',
                popoverContent: 'NavbarDesktopAnimatedPlusOptionsBar_popoverContent__wSXo7',
            };
        },
        63648: (e, t, a) => {
            'use strict';
            a.d(t, { qi: () => d, ak: () => i.a });
            var i = a(24450),
                n = a(51606),
                r = a(22991),
                l = a(42561);
            let s = n.gK.model('SpecialHeaderThemeOptions', { backgroundColor: n.gK.maybe(n.gK.string), textColor: n.gK.maybe(n.gK.string) }),
                o = n.gK.model('SpecialHeader', { title: n.gK.string, url: n.gK.string, lightTheme: s, darkTheme: s }),
                d = n.gK
                    .model('MainPage', { landing: r.Ju, specialHeaderLoadingState: n.gK.enumeration(Object.values(l.GuX)), specialHeader: n.gK.maybe(o) })
                    .actions((e) => ({
                        getSpecialHeader: (0, n.L3)(function* () {
                            let { landingResource: t, modelActionsLogger: a } = (0, n._$)(e);
                            if (e.specialHeaderLoadingState !== l.GuX.PENDING)
                                try {
                                    e.specialHeaderLoadingState = l.GuX.PENDING;
                                    let a = yield t.getSpecialHeader();
                                    (e.specialHeader = (0, n.wg)(
                                        ((e) => {
                                            var t, a, i, n, r, l;
                                            if ((null == (t = e.button) ? void 0 : t.title) && (null == (a = e.button.action) ? void 0 : a.weblink))
                                                return {
                                                    title: e.button.title,
                                                    url: e.button.action.weblink,
                                                    lightTheme: {
                                                        backgroundColor: null == (i = e.lightTheme) ? void 0 : i.buttonColor,
                                                        textColor: null == (n = e.lightTheme) ? void 0 : n.buttonTitleColor,
                                                    },
                                                    darkTheme: {
                                                        backgroundColor: null == (r = e.darkTheme) ? void 0 : r.buttonColor,
                                                        textColor: null == (l = e.darkTheme) ? void 0 : l.buttonTitleColor,
                                                    },
                                                };
                                        })(a),
                                    )),
                                        (e.specialHeaderLoadingState = l.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.specialHeaderLoadingState = l.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.specialHeaderLoadingState = l.GuX.IDLE), (e.specialHeader = void 0);
                        },
                    }));
            a(27511);
        },
        69548: (e, t, a) => {
            'use strict';
            a.d(t, { tL: () => A, __: () => o, cZ: () => l });
            var i,
                n,
                r = a(51606);
            let l = (e) => {
                let { text: t, textColor: a, color: i, action: n } = e;
                return (0, r.wg)({
                    text: t || null,
                    textColor: a || null,
                    color: i || null,
                    action:
                        n &&
                        ((e) => {
                            let { id: t, type: a, value: i, communicationId: n } = e;
                            return (0, r.wg)({ id: t || null, type: a || null, value: i || null, communicationId: n || null });
                        })(n),
                });
            };
            !(function (e) {
                (e.CLOSE = 'close'), (e.LINK = 'link'), (e.PAYWALL = 'paywall');
            })(i || (i = {}));
            let s = r.gK.model('CommunicationButtonAction', {
                id: r.gK.maybeNull(r.gK.string),
                type: r.gK.maybeNull(r.gK.enumeration(Object.values(i))),
                value: r.gK.maybeNull(r.gK.string),
                communicationId: r.gK.maybeNull(r.gK.string),
            });
            !(function (e) {
                (e.PRIMARY = 'primary'), (e.SECONDARY = 'secondary'), (e.PLUS = 'plus');
            })(n || (n = {}));
            let o = r.gK.model('CommunicationButton', {
                text: r.gK.maybeNull(r.gK.string),
                color: r.gK.maybeNull(r.gK.enumeration(Object.values(n))),
                action: r.gK.maybeNull(s),
                textColor: r.gK.maybeNull(r.gK.string),
            });
            var d = a(62936),
                c = a(79950),
                u = a(19718),
                m = a(44020),
                _ = a(8669),
                p = a(59935),
                g = a(56874),
                v = a(60188),
                h = a(5099),
                b = a(20418),
                I = a(42561),
                x = a(39168),
                N = a.n(x);
            let A = (0, u.PA)((e) => {
                var t, a, n, r;
                let { anchorId: l, screenId: s, button: o, buttonSize: u, buttonClassName: x, textClassName: A, feedbackToken: S, hide: y } = e,
                    { communication: C } = (0, I.Pjs)(),
                    [f] = (0, g.d)(),
                    { openPaymentWidgetModal: T } = (0, I.DpZ)({
                        storeName: 'music',
                        communicationId: null != (r = null == (t = o.action) ? void 0 : t.communicationId) ? r : '',
                        offerElement: { element: f, intersectionPropertyId: 'barbellow' },
                        isEnabled: !!(null == (a = o.action) ? void 0 : a.communicationId),
                    }),
                    E = ((null == (n = o.action) ? void 0 : n.type) === i.LINK && o.action.value) || '',
                    L = (0, I.ZpR)(E),
                    j = (0, p.c)((e) => {
                        if (o.action)
                            switch ((l && s && o.action.id && C.action(l, s, o.action.id, S), o.action.type)) {
                                case i.PAYWALL:
                                    T(), null == y || y();
                                    return;
                                case i.LINK:
                                    o.action.value && (L(e), null == y || y());
                                    return;
                                case i.CLOSE:
                                    null == y || y();
                                    return;
                            }
                    }),
                    P = (0, m.useMemo)(() => {
                        if (o.textColor) return { color: o.textColor };
                    }, [o.textColor]),
                    R = (0, v.L)(() => {
                        var e;
                        switch (null == (e = o.action) ? void 0 : e.type) {
                            case i.LINK:
                                return _.OA.communicationButton.COMMUNICATION_BUTTON_LINK;
                            case i.CLOSE:
                                return _.OA.communicationButton.COMMUNICATION_BUTTON_CLOSE;
                            default:
                                return _.OA.communicationButton.COMMUNICATION_BUTTON_PAYWALL;
                        }
                    });
                return (0, d.jsx)(h.$, {
                    className: (0, c.$)(N().root, N()['root_'.concat(o.color)], x),
                    role: E ? 'link' : 'button',
                    color: o.color ? o.color : void 0,
                    radius: 'xxxl',
                    onClick: j,
                    size: u,
                    ...(0, _.Am)(R),
                    children: (0, d.jsx)(b.Caption, { className: (0, c.$)(N().text, A), variant: 'div', type: 'text', size: 'm', style: P, children: o.text }),
                });
            });
        },
        69942: (e) => {
            e.exports = { root: 'NavbarMobile_root__NhKBQ', user: 'NavbarMobile_user__vTEb2', disabledNavigationItem: 'NavbarMobile_disabledNavigationItem__PA3EE' };
        },
        72432: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedDownloadBarMinimized_root__nEPqZ',
                icon: 'NavbarDesktopAnimatedDownloadBarMinimized_icon__Y2hec',
                button: 'NavbarDesktopAnimatedDownloadBarMinimized_button__hesBw',
            };
        },
        74064: (e) => {
            e.exports = { buttonWithPlayerBar: 'WithBuySubscriptionModal_buttonWithPlayerBar__p7or7' };
        },
        74287: (e) => {
            e.exports = { root: 'BuySubscriptionModal_root__5LvlX', content: 'BuySubscriptionModal_content__v06Ju', header: 'BuySubscriptionModal_header__ho5hr' };
        },
        74622: (e) => {
            e.exports = {
                headingContainer: 'BuySubscriptionBenefitsContent_headingContainer__euBSr',
                heading: 'BuySubscriptionBenefitsContent_heading__xx64Z',
                offerHeading: 'BuySubscriptionBenefitsContent_offerHeading__58HWj',
                entityCover: 'BuySubscriptionBenefitsContent_entityCover__0zowc',
                entityTitle: 'BuySubscriptionBenefitsContent_entityTitle__gA8J2',
                benefits: 'BuySubscriptionBenefitsContent_benefits__HK41W',
                benefitItem: 'BuySubscriptionBenefitsContent_benefitItem__sYkCL',
                benefitIcon: 'BuySubscriptionBenefitsContent_benefitIcon__VczZK',
                benefitImage: 'BuySubscriptionBenefitsContent_benefitImage__LVU2a',
                benefitText: 'BuySubscriptionBenefitsContent_benefitText__stotu',
                benefitDivider: 'BuySubscriptionBenefitsContent_benefitDivider__uELk3',
                button: 'BuySubscriptionBenefitsContent_button__vNi8i',
                loginContainer: 'BuySubscriptionBenefitsContent_loginContainer__ov5gH',
                bonusText: 'BuySubscriptionBenefitsContent_bonusText__nzIej',
                giftIcon: 'BuySubscriptionBenefitsContent_giftIcon__1bL51',
                oneClickDisclaimerText: 'BuySubscriptionBenefitsContent_oneClickDisclaimerText__k5W_A',
            };
        },
        75686: (e) => {
            e.exports = {
                root: 'TrackModalLyrics_root__JABJp',
                title: 'TrackModalLyrics_title__zjWl_',
                button: 'TrackModalLyrics_button__YqxIm',
                lyrics: 'TrackModalLyrics_lyrics__naoEF',
            };
        },
        75726: (e) => {
            e.exports = {
                contextMenu: 'PinItem_contextMenu__VwiFp',
                contextMenu_visible: 'PinItem_contextMenu_visible__Zgwkh',
                root: 'PinItem_root__WSoCn',
                image: 'PinItem_image__Ow56U',
                cover: 'PinItem_cover__9TcjE',
                tooltip: 'PinItem_tooltip__BGwBw',
            };
        },
        77377: (e) => {
            e.exports = {
                root: 'Pin_root__UyplT',
                ripple: 'Pin_ripple__Vzpzs',
                link: 'Pin_link__nz6I7',
                root_withoutLink: 'Pin_root_withoutLink__fr1XH',
                info: 'Pin_info__x_7Zx',
                info_withContextMenu: 'Pin_info_withContextMenu__7HX5A',
                info_collapsed: 'Pin_info_collapsed__bF9ac',
                info_animated: 'Pin_info_animated__AQQZk',
                show: 'Pin_show__xSkOa',
                hide: 'Pin_hide__RCc9X',
                meta: 'Pin_meta__MzX_7',
                contextMenu: 'Pin_contextMenu__WGmhp',
                contextMenu_hidden: 'Pin_contextMenu_hidden__xksGY',
                title: 'Pin_title__Jw5WW',
                subtitle: 'Pin_subtitle__rb8Gq',
                cover: 'Pin_cover__7ofYY',
                cover_withAnimation: 'Pin_cover_withAnimation__2Z2n6',
                show_and_scale: 'Pin_show_and_scale__VdNfj',
            };
        },
        78184: (e) => {
            e.exports = { root: 'DownloadMobileAppModal_root__nD7fo', content: 'DownloadMobileAppModal_content__4ZW2F' };
        },
        78462: (e) => {
            e.exports = {
                root: 'TrailerFooter_root__LKXby',
                playButtonShimmer: 'TrailerFooter_playButtonShimmer__5QwPi',
                linkButtonShimmer: 'TrailerFooter_linkButtonShimmer__ZV1s1',
            };
        },
        78616: (e) => {
            e.exports = {
                content: 'WizardModal_content__mLcxg',
                modalHeader: 'WizardModal_modalHeader__BbNjx',
                root: 'WizardModal_root__mrF2y',
                root_withCustomControls: 'WizardModal_root_withCustomControls__t7Kjv',
                modalContent: 'WizardModal_modalContent__OifZs',
                wrapper: 'WizardModal_wrapper__2_8ft',
                title: 'WizardModal_title__fPGJr',
                text: 'WizardModal_text__ntEON',
                button: 'WizardModal_button__e8bCS',
                mainContainer: 'WizardModal_mainContainer__fbjpt',
                carousel: 'WizardModal_carousel__uVcYS',
                scrollContainer: 'WizardModal_scrollContainer__tDrP6',
                important: 'WizardModal_important__7uymQ',
                tabCarousel: 'WizardModal_tabCarousel__AclIV',
                tabShimmer: 'WizardModal_tabShimmer__36Qc7',
                tabTitle: 'WizardModal_tabTitle__7ZAaF',
                filter: 'WizardModal_filter__o2wpn',
                filter_selected: 'WizardModal_filter_selected__qdlMf',
                item: 'WizardModal_item__wUHVg',
            };
        },
        78895: (e) => {
            e.exports = {
                root: 'FamilyInviteInviter_root__2XR_p',
                icon: 'FamilyInviteInviter_icon__e5pZe',
                important: 'FamilyInviteInviter_important__wl_l1',
                iconShimmer: 'FamilyInviteInviter_iconShimmer__Dbxw_',
                root_mobile: 'FamilyInviteInviter_root_mobile__LRDAo',
                name: 'FamilyInviteInviter_name__0E0QC',
                nameShimmer: 'FamilyInviteInviter_nameShimmer__Zzoa1',
            };
        },
        79073: (e) => {
            e.exports = {
                root: 'ShareIframeEditor_root__LALvp',
                controls: 'ShareIframeEditor_controls__k8vT_',
                iframeCodeInputContainer: 'ShareIframeEditor_iframeCodeInputContainer__b4Klq',
                settings: 'ShareIframeEditor_settings__UWt51',
                copyButton: 'ShareIframeEditor_copyButton___jOz_',
                sizeInputContainer: 'ShareIframeEditor_sizeInputContainer__s6PMW',
                iframeCodeInput: 'ShareIframeEditor_iframeCodeInput__M9w6E',
                iframeContainer: 'ShareIframeEditor_iframeContainer__pgdr5',
                iframe: 'ShareIframeEditor_iframe__ky5_o',
            };
        },
        79422: (e, t, a) => {
            'use strict';
            a.d(t, { BZ: () => D, FB: () => V });
            var i = (function (e) {
                    return (e.ARTIST = 'artist'), (e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.LABEL = 'label'), (e.TRACK = 'track'), e;
                })({}),
                n = a(62936),
                r = a(79950),
                l = a(19718),
                s = a(47480),
                o = a(26731),
                d = a(59935),
                c = a(56874),
                u = a(5099),
                m = a(13030),
                _ = a(30388),
                p = a(20418),
                g = a(42561);
            let v = { src: '/_next/static/media/logos.fdba38dc.png' };
            var h = a(59413),
                b = a.n(h);
            let I = 'BUY_SUBSCRIPTION_BANNER_BUTTON_INTERSECTION_PROPERTY_ID';
            (0, l.PA)((e) => {
                let { className: t } = e,
                    {
                        user: a,
                        paywall: { modal: i },
                    } = (0, g.Pjs)(),
                    [l, h] = (0, c.d)(),
                    { formatMessage: x } = (0, s.A)(),
                    {
                        mainText: N,
                        isShimmerVisible: A,
                        isShimmerActive: S,
                        openPaymentWidgetModal: y,
                        saveOfferAndAuthorize: C,
                    } = (0, g.DpZ)({ storeName: 'music', offerElement: { element: l, intersectionPropertyId: I }, place: g.RBW.BANNER_BUTTON }),
                    f = (0, d.c)(() => {
                        if (!a.isAuthorized) return void C();
                        y();
                    });
                return (0, n.jsxs)('section', {
                    className: (0, r.$)(b().root, t),
                    'aria-label': x({ id: 'plusbar.subscription-activation' }),
                    'data-intersection-property-id': 'BUY_SUBSCRIPTION_BANNER_INTERSECTION_PROPERTY_ID',
                    children: [
                        (0, n.jsx)(m.Image, { fit: 'contain', src: v.src, className: b().logos }),
                        (0, n.jsx)(p.Heading, {
                            variant: 'div',
                            size: 'm',
                            weight: 'bold',
                            className: b().title,
                            children: (0, n.jsx)(o.A, { id: 'buy-subscription.get-more-discoveries', values: { nbsp: '\xa0' } }),
                        }),
                        A && (0, n.jsx)(_.Shimmer, { className: b().plusButtonShimmer, isActive: S, radius: 'xxxl' }),
                        !A &&
                            (0, n.jsx)(u.$, {
                                className: b().plusButton,
                                isBlock: !0,
                                radius: 'xxxl',
                                size: 'm',
                                color: 'plus',
                                onClick: f,
                                ref: h,
                                'data-intersection-property-id': I,
                                children: (0, n.jsx)(p.Caption, { variant: 'div', size: 's', lineClamp: 2, children: N }),
                            }),
                        (0, n.jsx)(u.$, {
                            className: b().button,
                            isBlock: !0,
                            radius: 'xxxl',
                            size: 'm',
                            variant: 'text',
                            color: 'primary',
                            withRipple: !1,
                            onClick: i.open,
                            children: (0, n.jsx)(o.A, { id: 'interface-actions.more-details' }),
                        }),
                    ],
                });
            });
            var x = a(8669),
                N = a(60188),
                A = a(4714),
                S = a(69526),
                y = a(85906),
                C = a(46608),
                f = a.n(C);
            let T = 'buy-subscription-modal',
                E = (0, l.PA)((e) => {
                    let { modal: t } = e,
                        a = (0, S.useRouter)(),
                        i = (0, g.NFA)().get(g.QGx),
                        { user: r } = (0, g.Pjs)(),
                        [l, s] = (0, c.d)(),
                        {
                            openPaymentWidgetModal: m,
                            isShimmerActive: _,
                            isShimmerVisible: v,
                            mainText: h,
                            mainTextA11y: b,
                            additionText: I,
                            saveOfferAndAuthorize: N,
                        } = (0, g.DpZ)({ storeName: 'music', offerElement: { element: l, intersectionPropertyId: T } }),
                        A = (0, d.c)(() => {
                            if ((t.close(), !r.isAuthorized)) return void N();
                            m();
                        }),
                        C = (0, d.c)(() => {
                            t.close(), i.authorizationUrl && a.push(i.authorizationUrl);
                        });
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(p.Caption, {
                                className: f().heading,
                                variant: 'div',
                                weight: 'bold',
                                ...(0, x.Am)(x.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_TITLE),
                                children: (0, n.jsx)(o.A, { id: 'buy-subscription.listen-without-restrictions', values: { nbsp: ' ' } }),
                            }),
                            (0, n.jsxs)('div', {
                                className: f().buttons,
                                children: [
                                    (0, n.jsx)(y.b4, {
                                        ref: s,
                                        'data-intersection-property-id': T,
                                        mainText: h,
                                        ariaLabel: b,
                                        additionText: I,
                                        isShimmerActive: _,
                                        isShimmerVisible: v,
                                        onClick: A,
                                        className: f().button,
                                        mainTextClassName: f().buttonMainText,
                                        additionTextClassName: f().buttonAdditionText,
                                        ...(0, x.Am)(x.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_SUBSCRIPTION_BUTTON),
                                    }),
                                    (0, n.jsx)(u.$, {
                                        onClick: C,
                                        className: f().button,
                                        isBlock: !0,
                                        color: 'secondary',
                                        variant: 'default',
                                        size: 'l',
                                        radius: 'xxxl',
                                        ...(0, x.Am)(x.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ALREADY_IN_PLUS_BUTTON),
                                        children: (0, n.jsx)(p.Caption, {
                                            className: f().buttonMainText,
                                            variant: 'span',
                                            weight: 'bold',
                                            children: (0, n.jsx)(o.A, { id: 'buy-subscription.already-in-plus', values: { nbsp: '\xa0' } }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var L = a(70766),
                j = a(85742),
                P = a(56721),
                R = a(74622),
                k = a.n(R);
            let M = 'buy-subscription-benefits-modal',
                w = (0, l.PA)((e) => {
                    let { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: r, withRoundCover: l } = e,
                        { user: s } = (0, g.Pjs)(),
                        [u, _] = (0, c.d)(),
                        {
                            openPaymentWidgetModal: v,
                            isShimmerActive: h,
                            isShimmerVisible: b,
                            mainText: I,
                            mainTextA11y: N,
                            additionText: A,
                            oneClickAvailable: S,
                            oneClickDisclaimerText: C,
                            oneClickDisclaimerTextA11y: f,
                            buttonText: T,
                        } = (0, g.DpZ)({ storeName: 'music', offerElement: { element: u, intersectionPropertyId: M } }),
                        E = (0, d.c)(() => {
                            t.close(), v();
                        });
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(P.Paper, {
                                radius: l ? 'round' : 'm',
                                className: k().entityCover,
                                children: (0, n.jsx)(y.BW, {
                                    fit: 'cover',
                                    src: i || 'https://avatars.mds.yandex.net/get-music-misc/30221/img.69b3f718179e1659eceb7a5c/orig',
                                    size: 110,
                                    withAvatarReplace: !0,
                                    isAvailable: !i || r,
                                    ...(0, x.Am)(x.Kq.buySubscriptionModal.ENTITY_COVER),
                                }),
                            }),
                            !!a &&
                                (0, n.jsx)(p.Caption, {
                                    variant: 'span',
                                    className: k().entityTitle,
                                    lineClamp: 2,
                                    ...(0, x.Am)(x.Kq.buySubscriptionModal.ENTITY_TITLE),
                                    children: a,
                                }),
                            (0, n.jsxs)('div', {
                                className: k().headingContainer,
                                children: [
                                    (0, n.jsx)(p.Caption, {
                                        className: k().heading,
                                        variant: 'div',
                                        weight: 'bold',
                                        size: 's',
                                        ...(0, x.Am)(x.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_TITLE),
                                        children: (0, n.jsx)(o.A, { id: 'buy-subscription.listen-without-restrictions', values: { nbsp: ' ' } }),
                                    }),
                                    !!T &&
                                        s.isAuthorized &&
                                        (0, n.jsx)(p.Caption, {
                                            className: k().offerHeading,
                                            variant: 'div',
                                            weight: 'bold',
                                            size: 's',
                                            ...(0, x.Am)(x.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_TITLE),
                                            children: (0, n.jsx)(o.A, {
                                                id: 'buy-subscription.offer-for-you',
                                                values: { offerText: null == T ? void 0 : T.toLowerCase() },
                                            }),
                                        }),
                                ],
                            }),
                            (0, n.jsxs)('div', {
                                className: k().benefits,
                                ...(0, x.Am)(x.Kq.buySubscriptionModal.BENEFITS),
                                children: [
                                    (0, n.jsxs)('div', {
                                        className: k().benefitItem,
                                        children: [
                                            (0, n.jsx)('div', {
                                                className: k().benefitIcon,
                                                children: (0, n.jsx)(m.Image, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.69a6b052d268e8685d597e08/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.69a6b0e4563d4e7d5eadc110/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: k().benefitImage,
                                                }),
                                            }),
                                            (0, n.jsx)(p.Caption, {
                                                variant: 'span',
                                                className: k().benefitText,
                                                children: (0, n.jsx)(o.A, { id: 'buy-subscription.plus-benefit-recommendations' }),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: k().benefitItem,
                                        children: [
                                            (0, n.jsx)('div', {
                                                className: k().benefitIcon,
                                                children: (0, n.jsx)(m.Image, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14722da017d15a4f2ec/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.69a6b14722da017d15a4f2eb/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: k().benefitImage,
                                                }),
                                            }),
                                            (0, n.jsx)(p.Caption, {
                                                variant: 'span',
                                                className: k().benefitText,
                                                children: (0, n.jsx)(o.A, { id: 'buy-subscription.plus-benefit-non-music', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(L.c, { className: k().benefitDivider }),
                                    (0, n.jsx)(L.c, { className: k().benefitDivider }),
                                    (0, n.jsxs)('div', {
                                        className: k().benefitItem,
                                        children: [
                                            (0, n.jsx)('div', {
                                                className: k().benefitIcon,
                                                children: (0, n.jsx)(m.Image, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14822da017d15a4f2ee/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14722da017d15a4f2ed/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: k().benefitImage,
                                                }),
                                            }),
                                            (0, n.jsx)(p.Caption, {
                                                variant: 'span',
                                                className: k().benefitText,
                                                children: (0, n.jsx)(o.A, { id: 'buy-subscription.plus-benefit-offline', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: k().benefitItem,
                                        children: [
                                            (0, n.jsx)('div', {
                                                className: k().benefitIcon,
                                                children: (0, n.jsx)(m.Image, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b1510974f922f316a6df/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.69a6b1510974f922f316a6de/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: k().benefitImage,
                                                }),
                                            }),
                                            (0, n.jsx)(p.Caption, {
                                                variant: 'span',
                                                className: k().benefitText,
                                                children: (0, n.jsx)(o.A, { id: 'buy-subscription.plus-benefit-other-services', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !s.isAuthorized &&
                                (0, n.jsxs)('div', {
                                    className: k().loginContainer,
                                    children: [
                                        (0, n.jsx)(y.Hi, {
                                            size: 'l',
                                            variant: 'default',
                                            buttonText: (0, n.jsx)(p.Caption, {
                                                variant: 'span',
                                                size: 'l',
                                                children: (0, n.jsx)(o.A, { id: 'authorization.enter-and-listen-button' }),
                                            }),
                                            className: k().button,
                                            ...(0, x.Am)(x.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ALREADY_IN_PLUS_BUTTON),
                                        }),
                                        (0, n.jsxs)(p.Caption, {
                                            variant: 'div',
                                            size: 'm',
                                            weight: 'medium',
                                            className: k().bonusText,
                                            children: [
                                                (0, n.jsx)(j.Icon, { variant: 'gift', size: 'xxs', className: k().giftIcon }),
                                                (0, n.jsx)(o.A, { id: 'payment.learn-personal-bonus' }),
                                            ],
                                        }),
                                    ],
                                }),
                            s.isAuthorized &&
                                !s.hasPlus &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(y.b4, {
                                            ref: _,
                                            'data-intersection-property-id': M,
                                            mainText: I,
                                            ariaLabel: N,
                                            additionText: A,
                                            isShimmerActive: h,
                                            isShimmerVisible: b,
                                            onClick: E,
                                            className: k().button,
                                            mainTextClassName: k().buttonMainText,
                                            additionTextClassName: k().buttonAdditionText,
                                            color: 'primary',
                                            ...(0, x.Am)(x.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_SUBSCRIPTION_BUTTON),
                                        }),
                                        S &&
                                            (0, n.jsx)(p.Caption, {
                                                variant: 'div',
                                                size: 's',
                                                weight: 'normal',
                                                'aria-label': f,
                                                className: k().oneClickDisclaimerText,
                                                ...(0, x.Am)(x.Kq.buySubscriptionModal.ONE_CLICK_DISCLAIMER_TEXT),
                                                children: C,
                                            }),
                                    ],
                                }),
                        ],
                    });
                });
            var O = a(74287),
                B = a.n(O);
            let D = (0, l.PA)((e) => {
                let { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: r, isLegalRejected: l, withRoundCover: s } = e,
                    { experiments: o } = (0, g.Pjs)(),
                    d = (0, N.L)(() =>
                        o.checkExperiment(g.zal.WebNextPlusModalFlow, 'on') && !l
                            ? (0, n.jsx)(w, { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: r, withRoundCover: s })
                            : (0, n.jsx)(E, { modal: t }),
                    );
                return (0, n.jsx)(A.a, {
                    className: B().root,
                    headerClassName: B().header,
                    contentClassName: B().content,
                    size: 'fitContent',
                    placement: 'default',
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    lockScroll: !0,
                    closeButtonProps: (0, x.Am)(x.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_CLOSE_BUTTON),
                    ...(0, x.Am)(x.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET),
                    children: d,
                });
            });
            D.displayName = 'BuySubscriptionModal';
            var K = a(85683),
                U = a.n(K);
            let G = 'PLUSBAR_BUTTON_INTERSECTION_PROPERTY_ID',
                V = (0, l.PA)((e) => {
                    let { shouldFetchOffers: t, ...a } = e,
                        { user: i, experiments: r } = (0, g.Pjs)(),
                        [l, o] = (0, c.d)(),
                        { formatMessage: m } = (0, s.A)(),
                        {
                            mainText: v,
                            isShimmerVisible: h,
                            isShimmerActive: b,
                            openPaymentWidgetModal: I,
                            saveOfferAndAuthorize: x,
                        } = (0, g.DpZ)({ storeName: 'music', isEnabled: t, offerElement: { element: l, intersectionPropertyId: G } }),
                        A = (0, N.L)(() => (!v && r.checkExperiment(g.zal.WebNextUnauthorizedSubscriptionButton, 'on') ? m({ id: 'authorization.start-button' }) : v)),
                        S = (0, d.c)(() => {
                            if (!i.isAuthorized) return void x();
                            I();
                        });
                    return h
                        ? (0, n.jsx)(_.Shimmer, { className: U().plusButtonShimmer, isActive: b, radius: 'xxxl' })
                        : (0, n.jsx)(u.$, {
                              className: U().root,
                              isBlock: !0,
                              radius: 'xxxl',
                              size: 'm',
                              color: 'plus',
                              onClick: S,
                              ref: o,
                              'data-intersection-property-id': G,
                              ...a,
                              children: (0, n.jsx)(p.Caption, { variant: 'div', size: 's', lineClamp: 2, children: A }),
                          });
                });
            V.displayName = 'PlusNavbarButton';
            var z = a(44020),
                F = a(9049),
                W = a.n(F);
            let X = 'buy-subscription-button',
                Y = (0, l.PA)((e) => {
                    let { className: t } = e,
                        a = (0, z.useRef)(null),
                        { showBuySubscriptionModal: i } = (0, g.qBP)(),
                        {
                            mainText: l,
                            mainTextA11y: s,
                            isShimmerVisible: d,
                            isShimmerActive: c,
                        } = (0, g.DpZ)({ storeName: 'music', isEnabled: !1, offerElement: { element: a.current, intersectionPropertyId: X } }),
                        m = (0, N.L)(() =>
                            d
                                ? (0, n.jsx)(y.nN, { className: W().titleShimmerContainer, isActive: c, textClassName: W().titleShimmer })
                                : (0, n.jsx)(p.Caption, { className: W().title, variant: 'span', size: 'm', weight: 'bold', 'aria-label': s, children: l }),
                        );
                    return (0, n.jsxs)('div', {
                        ref: a,
                        className: (0, r.$)(W().root, t),
                        'data-intersection-property-id': X,
                        children: [
                            (0, n.jsxs)('div', {
                                className: W().info,
                                children: [
                                    (0, n.jsxs)('div', {
                                        className: W().titleContainer,
                                        children: [(0, n.jsx)(j.Icon, { className: W().icon, 'aria-hidden': !0, variant: 'plusColor' }), m],
                                    }),
                                    (0, n.jsx)(p.Caption, {
                                        className: W().subtitle,
                                        variant: 'span',
                                        size: 'xs',
                                        weight: 'normal',
                                        children: (0, n.jsx)(o.A, { id: 'buy-subscription.music-and-films-and-other' }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(u.$, {
                                color: 'plus',
                                variant: 'default',
                                size: 'm',
                                radius: 'xxxl',
                                onClick: i,
                                children: (0, n.jsx)(p.Caption, {
                                    className: W().buttonText,
                                    variant: 'span',
                                    size: 'm',
                                    weight: 'normal',
                                    children: (0, n.jsx)(o.A, { id: 'buy-subscription.activate' }),
                                }),
                            }),
                        ],
                    });
                });
            var $ = a(74064),
                H = a.n($);
            let q = (0, l.PA)((e) => {
                    var t, a, i, l, s;
                    let { shouldShowBuySubscriptionModal: o, shouldEnableCPAFeatures: d } = e,
                        {
                            album: c,
                            modals: { buySubscriptionModal: u },
                        } = (0, g.Pjs)();
                    return (0, n.jsxs)(g.rtM, {
                        page: g.l7W.ALBUM_PAGE,
                        places: [g.RBW.TOP_BUTTON],
                        shouldFetchOffers: o,
                        children: [
                            (0, n.jsx)(Y, { className: (0, r.$)({ [H().buttonWithPlayerBar]: d }) }),
                            (0, n.jsx)(D, {
                                modal: u,
                                entityTitle: null == (t = c.meta) ? void 0 : t.title,
                                entityCoverUri: null == (a = c.meta) ? void 0 : a.coverUri,
                                isLegalRejected: null == (i = c.meta) ? void 0 : i.isLegalRejected,
                                isEntityAvailable: (null == (l = c.meta) ? void 0 : l.isAvailable) !== !1 || (null == (s = c.meta) ? void 0 : s.isAudiobook),
                            }),
                        ],
                    });
                }),
                Z = (0, l.PA)((e) => {
                    var t, a, i, l;
                    let { shouldShowBuySubscriptionModal: s, shouldEnableCPAFeatures: o } = e,
                        {
                            artist: d,
                            modals: { buySubscriptionModal: c },
                        } = (0, g.Pjs)();
                    return (0, n.jsxs)(g.rtM, {
                        page: g.l7W.ARTIST_PAGE,
                        places: [g.RBW.TOP_BUTTON],
                        shouldFetchOffers: s,
                        children: [
                            (0, n.jsx)(Y, { className: (0, r.$)({ [H().buttonWithPlayerBar]: o }) }),
                            (0, n.jsx)(D, {
                                modal: c,
                                entityTitle: null == (t = d.meta) ? void 0 : t.artist.name,
                                entityCoverUri: null == (a = d.meta) ? void 0 : a.artist.coverUri,
                                isEntityAvailable: (null == (i = d.meta) ? void 0 : i.artist.isAvailable) !== !1,
                                isLegalRejected: null == (l = d.meta) ? void 0 : l.artist.isLegalRejected,
                                withRoundCover: !0,
                            }),
                        ],
                    });
                }),
                Q = (0, l.PA)((e) => {
                    let { shouldShowBuySubscriptionModal: t, shouldEnableCPAFeatures: a } = e,
                        {
                            label: i,
                            modals: { buySubscriptionModal: l },
                        } = (0, g.Pjs)();
                    return (0, n.jsxs)(g.rtM, {
                        page: g.l7W.LABEL_PAGE,
                        places: [g.RBW.TOP_BUTTON],
                        shouldFetchOffers: t,
                        children: [(0, n.jsx)(Y, { className: (0, r.$)({ [H().buttonWithPlayerBar]: a }) }), (0, n.jsx)(D, { modal: l, entityTitle: i.name || '' })],
                    });
                }),
                J = (0, l.PA)((e) => {
                    var t, a, i;
                    let { shouldShowBuySubscriptionModal: l, shouldEnableCPAFeatures: s } = e,
                        {
                            playlist: o,
                            modals: { buySubscriptionModal: d },
                        } = (0, g.Pjs)();
                    return (0, n.jsxs)(g.rtM, {
                        page: g.l7W.PLAYLIST_PAGE,
                        places: [g.RBW.TOP_BUTTON],
                        shouldFetchOffers: l,
                        children: [
                            (0, n.jsx)(Y, { className: (0, r.$)({ [H().buttonWithPlayerBar]: s }) }),
                            (0, n.jsx)(D, {
                                modal: d,
                                entityTitle: null == (t = o.meta) ? void 0 : t.title,
                                entityCoverUri: null == (a = o.meta) ? void 0 : a.coverUri,
                                isEntityAvailable: (null == (i = o.meta) ? void 0 : i.isAvailable) !== !1,
                            }),
                        ],
                    });
                }),
                ee = (0, l.PA)((e) => {
                    var t, a, i;
                    let { shouldShowBuySubscriptionModal: l, shouldEnableCPAFeatures: s } = e,
                        {
                            track: o,
                            modals: { buySubscriptionModal: d },
                        } = (0, g.Pjs)();
                    return (0, n.jsxs)(g.rtM, {
                        page: g.l7W.TRACK_PAGE,
                        places: [g.RBW.TOP_BUTTON],
                        shouldFetchOffers: l,
                        children: [
                            (0, n.jsx)(Y, { className: (0, r.$)({ [H().buttonWithPlayerBar]: s }) }),
                            (0, n.jsx)(D, {
                                modal: d,
                                entityTitle: null == (t = o.meta) ? void 0 : t.title,
                                entityCoverUri: null == (a = o.meta) ? void 0 : a.coverUri,
                                isLegalRejected: null == (i = o.meta) ? void 0 : i.isLegalRejected,
                            }),
                        ],
                    });
                });
            (0, l.PA)((e) => {
                var t;
                let { children: a, page: l } = e,
                    {
                        paymentWidgetModal: s,
                        modals: { buySubscriptionModal: o },
                        album: d,
                        albumCPA: { isPlusCPAPlayerBarEnabled: c },
                        settings: { isMobile: u, browserInfo: m },
                    } = (0, g.Pjs)(),
                    { shouldShowBuySubscriptionModal: _, showBuySubscriptionModal: p, hideBuySubscriptionModal: v } = (0, g.qBP)(),
                    h = c(d.id, null == (t = d.meta) ? void 0 : t.isNonMusic),
                    b = null == m ? void 0 : m.isTouch,
                    I = u || (b && !h);
                if (
                    ((0, z.useEffect)(() => {
                        if (_ && !h) {
                            if (s.modal.isOpened) return void v();
                            p();
                        }
                    }, [v, s.modal.isOpened, _, p, h]),
                    !_ || !I)
                )
                    return a;
                let x = (0, z.useMemo)(() => {
                    switch (l) {
                        case i.ARTIST:
                            return (0, n.jsx)(Z, { shouldShowBuySubscriptionModal: _, shouldEnableCPAFeatures: h });
                        case i.ALBUM:
                            return (0, n.jsx)(q, { shouldShowBuySubscriptionModal: _, shouldEnableCPAFeatures: h });
                        case i.PLAYLIST:
                            return (0, n.jsx)(J, { shouldShowBuySubscriptionModal: _, shouldEnableCPAFeatures: h });
                        case i.LABEL:
                            return (0, n.jsx)(Q, { shouldShowBuySubscriptionModal: _, shouldEnableCPAFeatures: h });
                        case i.TRACK:
                            return (0, n.jsx)(ee, { shouldShowBuySubscriptionModal: _, shouldEnableCPAFeatures: h });
                        default:
                            return (0, n.jsxs)(g.rtM, {
                                page: g.l7W.MOBILE_POPUP,
                                places: [g.RBW.TOP_BUTTON],
                                shouldFetchOffers: _,
                                children: [(0, n.jsx)(Y, { className: (0, r.$)({ [H().buttonWithPlayerBar]: h }) }), (0, n.jsx)(D, { modal: o })],
                            });
                    }
                }, [l, _, h, o]);
                return (0, n.jsxs)(n.Fragment, { children: [a, x] });
            });
        },
        80485: (e) => {
            e.exports = { icon: 'NotificationHtmlCodeCopied_icon__qJMbi', message: 'NotificationHtmlCodeCopied_message__ivRvX' };
        },
        81131: (e) => {
            e.exports = {
                userProfileContainer: 'NavbarDesktopUserWidget_userProfileContainer__ha3Tm',
                userProfile: 'NavbarDesktopUserWidget_userProfile__vqeMC',
                userId: 'NavbarDesktopUserWidget_userId__ihL7U',
                userMeta_withAnimation: 'NavbarDesktopUserWidget_userMeta_withAnimation__rrz0Y',
                animation_show: 'NavbarDesktopUserWidget_animation_show__fadL3',
                userMeta_collapsed: 'NavbarDesktopUserWidget_userMeta_collapsed__cSARy',
                animation_hide: 'NavbarDesktopUserWidget_animation_hide__tO81o',
                unauthorizedBar: 'NavbarDesktopUserWidget_unauthorizedBar__HE5Yu',
            };
        },
        82243: (e, t, a) => {
            'use strict';
            a.d(t, { A2: () => ee, bg: () => v });
            var i = a(42561);
            async function n(e) {
                var t, a, n, r, l, s, o;
                let d,
                    c,
                    { clipMeta: u, additional: m } = e,
                    _ = await (0, i.WGy)(m.locale);
                return (
                    u
                        ? ((d = _(
                              { id: 'metadata.clips-title' },
                              { clipTitle: u.title, clipArtists: null == (a = u.artists) || null == (t = a.map((e) => e.name)) ? void 0 : t.join(', ') },
                          )),
                          (c = _(
                              { id: 'metadata.clips-description' },
                              { clipTitle: u.title, clipArtists: null == (r = u.artists) || null == (n = r.map((e) => e.name)) ? void 0 : n.join(', ') },
                          )))
                        : ((d = _({ id: 'metadata.clips-title-default' })), (c = _({ id: 'metadata.clips-description-default' }))),
                    {
                        title: d,
                        description: c,
                        openGraph: (0, i.i$E)({
                            ogTitle: d,
                            ogDescription: c,
                            ogType: 'website',
                            fullUrl: null != (l = m.fullUrl) ? l : '',
                            locale: m.locale,
                            customImage: (0, i.vWM)({ tld: m.tld }),
                            siteName: _({ id: 'metadata.yandex-music' }),
                        }),
                        twitter: (0, i.HRN)({ cardType: i.WfF.SUMMARY_LARGE_IMAGE, title: d, description: c }),
                        facebook: (0, i.kRl)(),
                        appLinks: (0, i.X5i)({
                            additional: { ...m, url: null != (s = m.url) ? s : '', fullUrl: null != (o = m.fullUrl) ? o : '', host: m.host },
                            appName: _({ id: 'metadata.yandex-music' }),
                        }),
                    }
                );
            }
            var r = a(44020),
                l = a(66281),
                s = a(51606),
                o = a(14525),
                d = a(36547),
                c = a(46663),
                u = a(25099),
                m = a(54690),
                _ = a(81959),
                p = a(41094);
            let g = s.gK
                    .model('VideoPlayerState', {
                        contextType: s.gK.maybeNull(s.gK.enumeration(Object.values(_.K))),
                        contextId: s.gK.maybeNull(s.gK.string),
                        entityMeta: s.gK.maybeNull(p.Op),
                        status: s.gK.enumeration(Object.values(c.MT)),
                        canMoveForward: s.gK.boolean,
                        canMoveBackward: s.gK.boolean,
                    })
                    .actions((e) => ({
                        setContextId: (t) => {
                            e.contextId = String(t);
                        },
                        setContextType: (t) => {
                            e.contextType = t;
                        },
                        setEntityMeta: (t) => {
                            (null == t ? void 0 : t.data.meta) && (e.entityMeta = (0, p.EX)(t));
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
                v = s.gK
                    .compose(
                        s.gK.model('FullscreenVideoPlayer', {
                            modal: m.qt,
                            ids: s.gK.array(s.gK.number),
                            activeIndex: s.gK.maybeNull(s.gK.number),
                            clips: s.gK.array(l.kv),
                            errorStatusCode: s.gK.maybeNull(s.gK.number),
                            state: g,
                            sonataStatusBeforeClipStart: s.gK.enumeration(Object.values(c.MT)),
                            isOpenedFromMain: s.gK.maybeNull(s.gK.boolean),
                            withAnimation: s.gK.boolean,
                        }),
                        m.XT,
                        m.pl,
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
                                return e.isNeededToLoad || e.loadingState === i.GuX.PENDING;
                            },
                            get isNotFound() {
                                let t = e.isResolved && 0 === e.clips.length;
                                return e.errorStatusCode === o.X1.NOT_FOUND || t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                            get entitiesData() {
                                return e.ids.map((e) => ({ type: d.R.Clip, meta: { id: e }, loadEntityMeta: !0 }));
                            },
                            get isPlayingSonataStatusBeforeClipStart() {
                                return e.sonataStatusBeforeClipStart === c.MT.PLAYING;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setIds(t) {
                            e.ids = (0, s.wg)(t);
                        },
                        setClipIndex() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            e.activeIndex = t;
                        },
                        setOpenedFromMain() {
                            (e.isOpenedFromMain = !0), (e.withAnimation = !1);
                        },
                        setAnimationState(t) {
                            e.withAnimation = t;
                        },
                        setSonataStatusBeforeClipStart() {
                            let { sonataState: t } = (0, s.Zn)(e);
                            e.sonataStatusBeforeClipStart = t.status;
                        },
                        getClips: (0, s.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, s._$)(e);
                            if (e.loadingState !== i.GuX.PENDING)
                                try {
                                    e.loadingState = i.GuX.PENDING;
                                    let a = yield t.getClip({ clipIds: e.ids });
                                    (e.ids = (0, s.wg)(a.map((e) => e.clipId))),
                                        (e.clips = (0, s.wg)(a.map(l.i$))),
                                        (e.activeIndex = (0, u.z4)(e.ids, e.activeIndex)),
                                        e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), t instanceof o.GX && (e.errorStatusCode = t.statusCode), e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = i.GuX.IDLE),
                                (e.activeIndex = null),
                                (e.errorStatusCode = null),
                                (e.isOpenedFromMain = null),
                                (e.withAnimation = !0),
                                (e.sonataStatusBeforeClipStart = c.MT.IDLE),
                                e.destroyItems([e.ids, e.clips]);
                        },
                    }));
            var h = a(62936),
                b = a(19718),
                I = a(79950),
                x = a(47480),
                N = a(8669),
                A = a(59935),
                S = a(5099),
                y = a(85742),
                C = a(4714),
                f = a(59260),
                T = a(85906),
                E = a(19992),
                L = a(4497),
                j = a(28964),
                P = a(22e3),
                R = a(62828),
                k = a(20418),
                M = a(66161),
                w = a(81628),
                O = a(99876),
                B = a.n(O);
            let D = (0, b.PA)((e) => {
                let {
                        className: t,
                        clip: a,
                        withExplicitMark: n = !0,
                        withSecondaryColor: l,
                        captionSize: s = 'm',
                        explicitSize: o = 'xxxs',
                        withAllArtistsTitle: d,
                        withCustomTooltip: c = !0,
                        hasLineClamp: u = !0,
                        withArtistLink: m = !0,
                    } = e,
                    _ = (0, M.$N)({ withCustomTooltip: c }),
                    p = (0, r.useCallback)(
                        (e) => {
                            let t = String(a.title);
                            return (0, h.jsx)(R.m_, {
                                enabled: _,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: i.VP$,
                                children: (0, h.jsx)(k.Caption, {
                                    className: (0, I.$)(B().text, B().title),
                                    type: 'entity',
                                    size: s,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: a.title,
                                }),
                            });
                        },
                        [_, s, a.title],
                    ),
                    g = (0, r.useMemo)(() => p((0, N.Am)(N.Kq.clip.CLIP_META_TITLE)), [p]),
                    v = (0, M.su)(a.artists);
                return (0, h.jsx)('div', {
                    className: (0, I.$)(B().root, { [B().root_withSecondaryColor]: l }, t),
                    children: (0, h.jsxs)('div', {
                        className: B().metaContainer,
                        children: [
                            (0, h.jsxs)('div', {
                                className: B().titleContainer,
                                children: [
                                    (0, h.jsx)(k.Caption, { type: 'entity', size: s, weight: 'medium', variant: 'div', lineClamp: 1, children: g }),
                                    a.explicitDisclaimer &&
                                        n &&
                                        (0, h.jsx)(T.Nq, {
                                            getDescriptionTexts: a.getDescriptionTexts,
                                            size: o,
                                            variant: a.explicitDisclaimer,
                                            className: B().explicitMark,
                                            trackId: String(a.clipId),
                                        }),
                                ],
                            }),
                            v.length > 0 &&
                                (0, h.jsx)(w.iQ, {
                                    linkClassName: B().link,
                                    captionClassName: B().artistCaption,
                                    artists: v,
                                    withLink: m,
                                    lineClamp: +!!u,
                                    captionSize: s,
                                    withAllArtistsTitle: d,
                                    withCustomTooltip: _,
                                }),
                        ],
                    }),
                });
            });
            var K = a(99720),
                U = a.n(K);
            let G = (0, b.PA)((e) => {
                    let { entityMeta: t, onLikeClick: a, onContextMenuOpenChange: n, isContextMenuOpened: s } = e,
                        { user: o, sonataState: d, fullscreenVideoPlayer: c } = (0, i.Pjs)(),
                        { isPassToProduct: u } = (0, i.XCI)(),
                        m = (0, p.d0)(),
                        _ = (0, A.c)(async (e) => {
                            await m(d, e);
                        }),
                        g = (0, r.useMemo)(
                            () =>
                                t
                                    ? (0, h.jsx)('div', { className: U().description, children: (0, h.jsx)(D, { captionSize: 'l', clip: t, withSecondaryColor: !0 }) })
                                    : null,
                            [t],
                        );
                    return (0, h.jsxs)('section', {
                        className: U().root,
                        children: [
                            (0, h.jsxs)('div', {
                                className: U().info,
                                children: [
                                    (0, h.jsx)('div', { className: U().infoCard, children: g }),
                                    (0, h.jsxs)('div', {
                                        className: U().infoButtons,
                                        children: [
                                            c.clipActive &&
                                                (0, h.jsx)(l.zb, {
                                                    placement: 'top-start',
                                                    icon: (0, h.jsx)(y.Icon, { variant: 'more', size: 'm' }),
                                                    size: 'l',
                                                    clip: c.clipActive,
                                                    onOpenChange: n,
                                                    open: s,
                                                    ...(0, N.Am)(N.Kq.clip.CLIP_CONTEXT_MENU_BUTTON),
                                                }),
                                            t &&
                                                (0, h.jsx)(T.cy, {
                                                    className: U().likeButton,
                                                    isLiked: t.isLiked,
                                                    iconSize: 'xs',
                                                    onClick: a,
                                                    disabled: !o.isAuthorized,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, h.jsxs)('div', {
                                className: U().sonata,
                                children: [
                                    (0, h.jsx)(p.qF, {}),
                                    (0, h.jsx)(j.v, {
                                        sliderClassName: (0, I.$)(U().slider, U().important),
                                        disabled: !t,
                                        isMobile: !1,
                                        isFullscreen: !1,
                                        canMoveForward: c.state.canMoveForward,
                                        customDuration: (null == o ? void 0 : o.isAuthorized) && !u ? void 0 : 29,
                                        sonataPlaybackId: i.V_r.CLIP,
                                    }),
                                ],
                            }),
                            (0, h.jsx)('div', {
                                className: U().meta,
                                children: (0, h.jsx)(P.r, { sonataVolume: d.volume, onVolumeClick: _, horizontalSliderClassName: (0, I.$)(U().slider, U().important) }),
                            }),
                        ],
                    });
                }),
                V = (0, b.PA)((e) => {
                    let { className: t, isSettingsMenuOpened: a, onSettingsMenuOpenChange: n, isContextMenuOpened: r, onContextMenuOpenChange: l } = e,
                        { fullscreenVideoPlayer: s } = (0, i.Pjs)(),
                        o = (0, u.KX)(s.state.entityMeta),
                        {
                            settings: { isMobile: d },
                        } = (0, i.Pjs)();
                    return d
                        ? null
                        : (0, h.jsx)(G, {
                              className: t,
                              onLikeClick: o,
                              entityMeta: s.state.entityMeta,
                              isSettingsMenuOpened: a,
                              onSettingsMenuOpenChange: n,
                              isContextMenuOpened: r,
                              onContextMenuOpenChange: l,
                          });
                });
            var z = a(95053),
                F = a.n(z);
            let W = (0, b.PA)(() => {
                    let { fullscreenVideoPlayer: e } = (0, i.Pjs)(),
                        { state: t, toggleTrue: a, toggleFalse: n } = (0, L.e)(!1),
                        { state: s, toggleTrue: o, toggleFalse: d } = (0, L.e)(!1),
                        { state: u, toggleTrue: m, toggleFalse: _ } = (0, L.e)(!1),
                        p = (0, r.useRef)(null),
                        [g, v] = (0, r.useState)(!1),
                        [b, x] = (0, r.useState)(!1),
                        N = b || g,
                        S = (0, r.useMemo)(
                            () =>
                                (0, E.A)(() => {
                                    n(), d();
                                }, 1500),
                            [d, n],
                        ),
                        y = (0, r.useMemo)(
                            () =>
                                (0, E.A)(() => {
                                    d();
                                }, 1500),
                            [d],
                        ),
                        C = (0, A.c)(() => {
                            y.cancel(), o(), m();
                        }),
                        f = (0, A.c)(() => {
                            y(), _();
                        }),
                        j = (0, A.c)(() => {
                            g || b || S();
                        }),
                        P = (0, A.c)((e) => {
                            e.stopPropagation(), S.cancel(), y.cancel(), a(), o(), S();
                        }),
                        R = (0, A.c)((e) => {
                            e.stopPropagation(), S.cancel(), y.cancel(), a(), S();
                        }),
                        k = (0, A.c)(() => {
                            t ? S.cancel() : a(), S();
                        });
                    (0, r.useEffect)(
                        () => (
                            window.addEventListener('mousemove', k),
                            () => {
                                window.removeEventListener('mousemove', k);
                            }
                        ),
                        [k],
                    ),
                        (0, r.useEffect)(() => {
                            t || d();
                        }, [d, t]);
                    let M = e.state.status !== c.MT.PLAYING,
                        w = (0, r.useMemo)(
                            () =>
                                (0, h.jsx)(l.tD, {
                                    className: F().carousel,
                                    containerClassName: F().carouselBlock,
                                    clipCardTitleClassName: (0, I.$)(F().clipCardTitle, F().important),
                                    clipCardArtistLinkClassName: (0, I.$)(F().clipCardArtist, F().important),
                                    isShimmerVisible: e.isLoading,
                                    isShimmerActive: !0,
                                    clips: e.clips,
                                    shouldOpenModalOnCardClick: !1,
                                    itemCounter: 5,
                                    ref: p,
                                }),
                            [e.clips, e.isLoading, p],
                        );
                    return (
                        (0, r.useEffect)(() => {
                            (s || u) && (a(), o());
                        }, [u, s, o, a]),
                        (0, h.jsxs)('div', {
                            className: (0, I.$)(F().root, { [F().root_visible]: t || M || u || N, [F().root_withHoveredCarousel]: s }),
                            onMouseEnter: a,
                            onMouseLeave: j,
                            onFocus: R,
                            children: [
                                (0, h.jsx)(V, { isSettingsMenuOpened: g, onSettingsMenuOpenChange: v, isContextMenuOpened: b, onContextMenuOpenChange: x }),
                                (0, h.jsx)(i.FoH, {
                                    blockId: i.hf$.CLIPS_CAROUSEL,
                                    blockType: i.hf$.CLIPS_CAROUSEL,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    objectsCount: e.clips.length,
                                    children: (0, h.jsx)('div', {
                                        className: F().carouselContainer,
                                        onMouseEnter: C,
                                        onMouseLeave: f,
                                        onFocus: P,
                                        children: (0, h.jsx)(T.FY, {
                                            className: F().carouselWrapper,
                                            carouselElement: w,
                                            ref: p,
                                            isCarouselBetweenArrows: !0,
                                            controlsWrapperClassName: F().carouselControls,
                                            buttonSize: 'xs',
                                            buttonVariant: 'default',
                                            withSecondaryColor: !0,
                                        }),
                                    }),
                                }),
                            ],
                        })
                    );
                }),
                X = (0, b.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, i.Pjs)();
                    return e ? null : (0, h.jsx)(W, {});
                });
            var Y = a(1858),
                $ = a(10024),
                H = a.n($);
            let q = (0, b.PA)((e) => {
                let { closeModal: t } = e,
                    a = (0, r.useRef)(null),
                    n = (0, i.eGp)(),
                    {
                        sonataState: { isVHCoreRegistered: s },
                        fullscreenVideoPlayer: o,
                        advert: d,
                    } = (0, i.Pjs)(),
                    { from: m } = (0, i.fyy)({ pageId: i._Q$.VIDEO_PLAYER, contextId: o.state.contextId, contextType: _.K.Various }),
                    p = (0, i.XJ9)(),
                    { state: g, toggleFalse: v } = (0, L.e)(!0),
                    { togglePlay: b } = (0, i.Dx4)({
                        playContextParams: { contextData: { type: _.K.Various, meta: { id: i.H7u.VARIOUS_CLIP_CONTEXT }, from: m }, loadContextMeta: !0 },
                        sonataState: o.state,
                        playbackId: i.V_r.CLIP,
                    }),
                    x = (0, l.XP)({ clip: o.clips[o.clipActiveIndex], callback: b, disclaimerRejectHandler: t });
                return (
                    (0, r.useEffect)(() => {
                        let e, t, r;
                        if (a.current && n && s) {
                            let l, s;
                            o.setSonataStatusBeforeClipStart(),
                                n.setVideoCoreContainer({ container: a.current, playbackId: i.V_r.CLIP }),
                                n
                                    .setContext(
                                        {
                                            contextData: { type: _.K.Various, meta: { id: i.H7u.VARIOUS_CLIP_CONTEXT }, from: m },
                                            entitiesData: o.entitiesData,
                                            queueParams: { index: o.clipActiveIndex },
                                            loadContextMeta: !1,
                                        },
                                        i.V_r.CLIP,
                                    )
                                    .then(() => {
                                        d.isAdvertShown || x();
                                    });
                            let c = n.getState(i.V_r.CLIP);
                            (e = c.queueState.currentEntity.onChange((e) => {
                                var t;
                                let a = null == e ? void 0 : e.context.data.type,
                                    i = null == e ? void 0 : e.context.data.meta.id,
                                    n = null == e ? void 0 : e.entity.data.meta.id;
                                if (n) {
                                    let e = (0, u.z4)(o.ids, o.ids.indexOf(Number(n)));
                                    o.setClipIndex(e), p((0, u.JL)(o.ids, e));
                                }
                                o.state.setEntityMeta(null != (t = null == e ? void 0 : e.entity) ? t : null),
                                    a && o.state.setContextType(a),
                                    i && o.state.setContextId(i);
                            })),
                                (t = c.playerState.status.onChange((e) => {
                                    e && o.state.setStatus(e);
                                })),
                                (r = c.currentContext.onChange((e) => {
                                    null == l || l(),
                                        null == s || s(),
                                        (l =
                                            null == e
                                                ? void 0
                                                : e.availableActions.moveBackward.onChange((e) => {
                                                      o.state.setCanMoveBackward(!!e);
                                                  })),
                                        (s =
                                            null == e
                                                ? void 0
                                                : e.availableActions.moveForward.onChange((e) => {
                                                      o.state.setCanMoveForward(!!e);
                                                  }));
                                }));
                        }
                        return () => {
                            null == n || n.destroyVideoCore(i.V_r.CLIP),
                                o.isPlayingSonataStatusBeforeClipStart && (null == n || n.resume()),
                                null == e || e(),
                                null == t || t(),
                                null == r || r();
                        };
                    }, [n, s, o, m, p, b, x, d.isAdvertShown]),
                    (0, r.useEffect)(() => {
                        o.state.status === c.MT.PLAYING && v();
                    }, [o.state.status, v]),
                    (0, h.jsxs)('div', {
                        className: H().root,
                        children: [
                            (0, h.jsx)('div', { onClick: b, ref: a, className: H().container }),
                            (0, h.jsx)('div', {
                                className: (0, I.$)(H().loadingIndicator, { [H().loadingIndicator_showed]: g }),
                                children: (0, h.jsx)(Y.y, { size: 'm' }),
                            }),
                        ],
                    })
                );
            });
            var Z = a(17298),
                Q = a.n(Z);
            let J = (0, b.PA)(() => {
                    let { formatMessage: e } = (0, x.A)(),
                        {
                            advertBanners: {
                                banners: { topAdvertBanner: t },
                            },
                            fullscreenVideoPlayer: a,
                            modals: { disclaimerModal: s },
                        } = (0, i.Pjs)(),
                        { defaultLayoutRef: o } = (0, i.gKY)(),
                        d = (0, i.v8p)(),
                        c = (0, i.pqZ)(),
                        { notify: m } = (0, i.lkh)(),
                        _ = (0, i.eGp)(),
                        p = (0, i.jjz)(),
                        g = (0, u.QV)(),
                        v = (0, u.Hx)(),
                        [b] = a.ids,
                        E = (0, A.c)(() => {
                            let e = (0, i.qne)(i.K3F.IDS),
                                t = (0, i.qne)(i.K3F.ACTIVE_INDEX),
                                { clipIds: n, activeClipIndex: r } = (0, l.V1)(e, t);
                            n.length
                                ? (a.setIds(n),
                                  a.setClipIndex(r),
                                  a.setAnimationState(!1),
                                  null == _ || _.setEntityByIndex(a.clipActiveIndex, i.V_r.CLIP),
                                  a.modal.open())
                                : (a.modal.close(), a.reset());
                        }),
                        L = (0, A.c)(() => {
                            if (a.modal.isOpened && !s.isOpened) {
                                if ((a.setAnimationState(!0), b && v(String(b)), a.isOpenedFromMain)) {
                                    c(i.Zyd.main.href),
                                        (0, i.Zgt)({ fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                            (0, i.jxB)(e);
                                        }),
                                        a.modal.close(),
                                        a.reset();
                                    return;
                                }
                                d();
                            }
                        });
                    ((e) => {
                        let { fullscreenVideoPlayer: t, advert: a } = (0, i.Pjs)(),
                            n = (0, i.eGp)(),
                            l = (0, i.zwV)(),
                            s = (0, u.KX)(t.state.entityMeta);
                        (0, r.useEffect)(() => {
                            if (a.isAdvertShown) {
                                null == l || l.disable(i.Mo.VIDEO_PLAYER);
                                return;
                            }
                            t.modal.isOpened
                                ? (null == l || l.disable(i.Mo.MAIN),
                                  null == l || l.enable(i.Mo.MAIN, i.lbr.TOGGLE_MUTE),
                                  null == l || l.enable(i.Mo.MAIN, i.lbr.INCREASE_VOLUME),
                                  null == l || l.enable(i.Mo.MAIN, i.lbr.DECREASE_VOLUME),
                                  null == l || l.enable(i.Mo.VIDEO_PLAYER))
                                : (null == l || l.disable(i.Mo.VIDEO_PLAYER), null == l || l.enable(i.Mo.MAIN));
                        }, [l, t.modal.isOpened, a.isAdvertShown]);
                        let o = null == n ? void 0 : n.getState(i.V_r.CLIP);
                        (0, r.useEffect)(
                            () => (
                                null == l || l.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.CLOSE, e),
                                null == l ||
                                    l.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.TOGGLE_PLAY, () => {
                                        null == n || n.togglePause(i.V_r.CLIP);
                                    }),
                                null == l || l.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.LIKE, s),
                                null == l ||
                                    l.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.MOVE_FORWARD, async () => {
                                        var e;
                                        (null == o || null == (e = o.currentContext.value) ? void 0 : e.availableActions.moveForward.value) &&
                                            (await (null == n ? void 0 : n.moveForward(i.V_r.CLIP)));
                                    }),
                                null == l ||
                                    l.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.MOVE_BACKWARD, async () => {
                                        var e;
                                        (null == o || null == (e = o.currentContext.value) ? void 0 : e.availableActions.moveBackward.value) &&
                                            (await (null == n ? void 0 : n.moveBackward(i.V_r.CLIP)));
                                    }),
                                null == l ||
                                    l.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.SLIDE_FORWARD, async () => {
                                        (null == o ? void 0 : o.playerState.progress.value.duration) && (await (null == n ? void 0 : n.slideForward(1, i.V_r.CLIP)));
                                    }),
                                null == l ||
                                    l.addShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.SLIDE_BACKWARD, async () => {
                                        (null == o ? void 0 : o.playerState.progress.value.duration) && (await (null == n ? void 0 : n.slideBackward(1, i.V_r.CLIP)));
                                    }),
                                () => {
                                    null == l || l.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.CLOSE),
                                        null == l || l.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.TOGGLE_PLAY),
                                        null == l || l.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.LIKE),
                                        null == l || l.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.MOVE_FORWARD),
                                        null == l || l.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.MOVE_BACKWARD),
                                        null == l || l.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.SLIDE_FORWARD),
                                        null == l || l.removeShortcutsListener(i.Mo.VIDEO_PLAYER, i.lbr.SLIDE_BACKWARD);
                                }
                            ),
                            [l, t.ids, e, s, n, o, a.isAdvertShown],
                        );
                    })(L),
                        0 === a.ids.length && L(),
                        (0, r.useEffect)(
                            () => () => {
                                a.reset(), t.setIsShowBanner(!0);
                            },
                            [a, t, t.setIsShowBanner],
                        ),
                        (0, r.useEffect)(() => {
                            a.modal.isOpened ? t.setIsShowBanner(!1) : t.setIsShowBanner(!0);
                        }, [a.modal.isOpened, t, t.setIsShowBanner]);
                    let j = (0, A.c)(() => {
                        a.setAnimationState(!0), b && v(String(b)), c(i.Zyd.main.href), a.modal.close(), a.reset();
                    });
                    return (
                        (0, r.useEffect)(() => {
                            if (a.isNotFound || a.isSomethingWrong) {
                                L();
                                let t = a.modal.isOpened ? i.uQT.FULLSCREEN_ERROR : i.uQT.ERROR;
                                m((0, h.jsx)(T.hT, { error: e({ id: 'error-messages.something-went-wrong' }) }), { containerId: t });
                            }
                        }, [a.isNotFound, a.isSomethingWrong, a.modal.isOpened, L, e, m]),
                        (0, r.useEffect)(() => {
                            a.modal.isOpened && b && g(String(b));
                        }, [a.modal.isOpened, g, b]),
                        (0, r.useEffect)(
                            () => (
                                window.addEventListener('popstate', E),
                                () => {
                                    window.removeEventListener('popstate', E);
                                }
                            ),
                            [E],
                        ),
                        ((e) => {
                            (0, r.useEffect)(() => {
                                (null == e ? void 0 : e.clips) &&
                                    0 !== e.clips.length &&
                                    !e.isLoading &&
                                    n({ clipMeta: (0, l.wS)(e.clips[0]), additional: { fullUrl: null, locale: null, url: null, tld: '', host: '' } }).then((e) => {
                                        (0, i.jxB)(e);
                                    });
                            }, [null == e ? void 0 : e.clips, null == e ? void 0 : e.isLoading]);
                        })(a),
                        (0, r.useEffect)(() => {
                            a.isNeededToLoad && a.modal.isOpened && b && a.getClips();
                        }, [a, a.isNeededToLoad, a.modal.isOpened, b]),
                        (0, h.jsxs)(C.a, {
                            className: (0, I.$)(Q().root, Q().important),
                            open: a.modal.isOpened,
                            onOpenChange: a.modal.onOpenChange,
                            onClose: L,
                            portalNode: o,
                            size: 'fullscreen',
                            placement: 'center',
                            showHeader: !1,
                            contentClassName: Q().modalContent,
                            closeOnOutsidePress: !1,
                            escapeKey: !1,
                            transitionDuration: 300 * !!a.withAnimation,
                            ...(0, N.Am)(N.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_MODAL),
                            children: [
                                (0, h.jsxs)('header', {
                                    className: Q().header,
                                    children: [
                                        (0, h.jsx)(S.$, {
                                            className: Q().closeButton,
                                            radius: 'round',
                                            color: 'secondary',
                                            size: 'm',
                                            icon: (0, h.jsx)(y.Icon, { variant: 'arrowDown', size: 'xs' }),
                                            onClick: L,
                                            'aria-label': e({ id: 'interface-actions.close' }),
                                            ...(0, N.Am)(N.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_CLOSE_BUTTON),
                                        }),
                                        (0, h.jsx)(T.N_, {
                                            className: Q().logoLink,
                                            href: '/',
                                            onClick: j,
                                            'aria-label': e({ id: 'navigation.page-main' }),
                                            ...(0, N.Am)(N.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_LABEL_BUTTON),
                                            children: (0, h.jsx)(y.Icon, { variant: 'musicLogoCenter'.concat(p), className: Q()['logo_'.concat(p.toLocaleLowerCase())] }),
                                        }),
                                    ],
                                }),
                                (0, h.jsx)(q, { closeModal: L }),
                                (0, h.jsx)(X, {}),
                                (0, h.jsx)(f.Notification, {
                                    className: Q().notification,
                                    enableMultiContainer: !0,
                                    containerId: i.uQT.FULLSCREEN_INFO,
                                    position: 'bottom-center',
                                }),
                                (0, h.jsx)(f.Notification, {
                                    className: Q().notification,
                                    enableMultiContainer: !0,
                                    containerId: i.uQT.FULLSCREEN_ERROR,
                                    position: 'bottom-center',
                                }),
                            ],
                        })
                    );
                }),
                ee = (0, b.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, i.Pjs)();
                    return e ? null : (0, h.jsx)(J, {});
                });
        },
        83881: (e, t, a) => {
            'use strict';
            a.d(t, { mi: () => c.SortDropdown, wY: () => d, WG: () => i.W, hl: () => r, y8: () => l.useSort });
            var i = a(94331),
                n = a(62858);
            let r = (e) => !!e && (e === n.x.ASC || e === n.x.DESC);
            var l = a(84038),
                s = a(51606),
                o = a(28563);
            let d = s.gK
                .model('Sort', { sortBy: s.gK.maybe(s.gK.enumeration(Object.values(o.g))), sortOrder: s.gK.maybe(s.gK.enumeration(Object.values(n.x))) })
                .actions((e) => ({
                    setSortBy(t) {
                        e.sortBy = t;
                    },
                    setSortOrder(t) {
                        e.sortOrder = t;
                    },
                }));
            var c = a(65471);
        },
        85683: (e) => {
            e.exports = { root: 'PlusNavbarButton_root__kdY04', plusButtonShimmer: 'PlusNavbarButton_plusButtonShimmer__6t1go' };
        },
        90042: (e) => {
            e.exports = { root: 'ShareIframeModal_root__t_NbK', content: 'ShareIframeModal_content__jcq_o' };
        },
        90078: (e) => {
            e.exports = {
                root: 'TrackModalAlbumShimmer_root__iGoUU',
                title: 'TrackModalAlbumShimmer_title__2jt8z',
                coverBlock: 'TrackModalAlbumShimmer_coverBlock__PQFDQ',
                cover: 'TrackModalAlbumShimmer_cover__AI0zt',
                linkBlock: 'TrackModalAlbumShimmer_linkBlock__yBLL4',
                link: 'TrackModalAlbumShimmer_link__7_gHs',
                description: 'TrackModalAlbumShimmer_description__63Pnt',
            };
        },
        91263: (e) => {
            e.exports = {
                root: 'TrackModalTitleShimmer_root__woixY',
                entityName: 'TrackModalTitleShimmer_entityName__9NMYB',
                title: 'TrackModalTitleShimmer_title__PXJfS',
                artists: 'TrackModalTitleShimmer_artists__mz6q9',
                important: 'TrackModalTitleShimmer_important__uBJ8_',
                artist: 'TrackModalTitleShimmer_artist__fre6F',
                controls: 'TrackModalTitleShimmer_controls__0kNh8',
                playButton: 'TrackModalTitleShimmer_playButton__PYklv',
                button: 'TrackModalTitleShimmer_button__j5_GI',
            };
        },
        91865: (e) => {
            e.exports = {
                modalHeader: 'CommunicationModal_modalHeader__TnzU6',
                modalContent: 'CommunicationModal_modalContent__d8REH',
                container: 'CommunicationModal_container__BIgb7',
                wrapper: 'CommunicationModal_wrapper__SRy17',
                imageWrapper: 'CommunicationModal_imageWrapper__LOr5C',
                imageWrapper_content: 'CommunicationModal_imageWrapper_content__PfjQl',
                imageWrapper_header: 'CommunicationModal_imageWrapper_header__8wsRZ',
                image: 'CommunicationModal_image__qzXK8',
                title: 'CommunicationModal_title__yvFAn',
                text: 'CommunicationModal_text__gGaLU',
                buttons: 'CommunicationModal_buttons__MDmp2',
                disclaimerWrapper: 'CommunicationModal_disclaimerWrapper__pMRYf',
                disclaimer: 'CommunicationModal_disclaimer__NJJSA',
                disclaimerLink: 'CommunicationModal_disclaimerLink__8yuBO',
                root: 'CommunicationModal_root__1dOYE',
                root_modal: 'CommunicationModal_root_modal__u_igG',
                button: 'CommunicationModal_button__qysqU',
                root_fullscreen: 'CommunicationModal_root_fullscreen__41Y5Y',
                gradientOverlay: 'CommunicationModal_gradientOverlay__MOg5g',
                buttonText: 'CommunicationModal_buttonText__2XS8u',
                closeButton: 'CommunicationModal_closeButton__EP7ay',
                closeButtonIcon: 'CommunicationModal_closeButtonIcon__ujXug',
            };
        },
        92302: (e) => {
            e.exports = {
                root: 'BarBelow_root__KFexT',
                root_hidden: 'BarBelow_root_hidden__eTKvU',
                root_show: 'BarBelow_root_show__yIQBX',
                show: 'BarBelow_show__5GQBP',
                root_hide: 'BarBelow_root_hide__d1a_5',
                hide: 'BarBelow_hide__a0dwD',
                image: 'BarBelow_image__GfExj',
                content: 'BarBelow_content__GWWbR',
                title: 'BarBelow_title__hBNPY',
                text: 'BarBelow_text__tU_Rm',
                buttons: 'BarBelow_buttons__XGwDQ',
            };
        },
        94951: (e, t, a) => {
            'use strict';
            a.d(t, { VT: () => $, um: () => S, ac: () => i.a, Ij: () => n.useFreemiumCollectionPaywall });
            var i = a(18149);
            a(78118);
            var n = a(35141),
                r = a(51606),
                l = a(22991),
                s = a(90914),
                o = a(83881),
                d = a(42561),
                c = a(54690);
            let u = r.gK.compose(r.gK.model('UpcomingAlbums', { items: r.gK.maybeNull(r.gK.array(s.VH)) }), c.pl, c.XT).actions((e) => ({
                    reset() {
                        (e.loadingState = d.GuX.IDLE), e.destroyItems([e.items]);
                    },
                })),
                m = r.gK
                    .compose(r.gK.model('CollectionAlbumsPage', { sort: r.gK.maybeNull(o.wY), pagesLoader: (0, c.Ij)(s.JC), upcomingAlbums: u }), c.pl)
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
                        getData: (0, r.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: n = 20, sortBy: l, sortOrder: c, metaType: u } = t,
                                { usersResource: m, modelActionsLogger: _ } = (0, r._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i)) {
                                (e.sort = null), (0, o.WG)(l) && (0, o.hl)(c) && (e.sort = (0, r.wg)({ sortBy: l, sortOrder: c }));
                                try {
                                    var p, g;
                                    e.pagesLoader.setPageState(i, d.GuX.PENDING);
                                    let t = yield m.getLikedAlbums({ userId: a, page: i, pageSize: n, sortBy: l, sortOrder: c, metaType: u }),
                                        r =
                                            null !=
                                            (g =
                                                null == (p = t.albums)
                                                    ? void 0
                                                    : p.map((e) => {
                                                          let { album: t } = e;
                                                          return (0, s.pp)(t);
                                                      }))
                                                ? g
                                                : [];
                                    e.pagesLoader.setItems(r, { page: i, pager: { page: i, perPage: n, total: t.pager.total } });
                                } catch (t) {
                                    _.error(t), e.pagesLoader.setItems(null, { responseStatus: d.FlZ.ERROR, page: i });
                                }
                            }
                        }),
                        getPresaves: (0, r.L3)(function* (t) {
                            let { userId: a } = t,
                                { usersResource: i, modelActionsLogger: n } = (0, r._$)(e);
                            if (!e.upcomingAlbums.isLoading)
                                try {
                                    var l;
                                    e.upcomingAlbums.loadingState = d.GuX.PENDING;
                                    let t = yield i.getPresaves({ userId: a, includeReleased: !1, includeUpcoming: !0 });
                                    (e.upcomingAlbums.items = (0, r.wg)(null == (l = t.upcomingAlbums) ? void 0 : l.map(s.lO))),
                                        e.upcomingAlbumsLoadingState !== d.GuX.IDLE && (e.upcomingAlbums.loadingState = d.GuX.RESOLVE);
                                } catch (t) {
                                    n.error(t), e.upcomingAlbums.isNeededToLoad || (e.upcomingAlbums.loadingState = d.GuX.REJECT);
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), e.upcomingAlbums.reset(), e.destroyItems([e.sort]);
                        },
                    }));
            var _ = a(11334),
                p = a(81628);
            let g = r.gK.compose(r.gK.model('TopArtists', { items: r.gK.array(_.GV) }), c.pl, c.XT).actions((e) => ({
                    reset() {
                        (e.loadingState = d.GuX.IDLE), e.destroyItems([e.items]);
                    },
                })),
                v = r.gK
                    .compose(r.gK.model('CollectionArtistsPage', { sort: r.gK.maybeNull(o.wY), pagesLoader: (0, c.Ij)(p.PK), topArtists: g }), c.pl)
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
                        getDataTopArtists: (0, r.L3)(function* () {
                            let { personalResource: t, modelActionsLogger: a } = (0, r._$)(e);
                            try {
                                var i, n;
                                e.topArtists.loadingState = d.GuX.PENDING;
                                let a = yield t.getTopArtists();
                                (e.topArtists.items = (0, r.wg)(null != (n = null == (i = a.artists) ? void 0 : i.map((e) => (0, _.MX)(e))) ? n : [])),
                                    (e.topArtists.loadingState = d.GuX.RESOLVE);
                            } catch (t) {
                                a.error(t), (e.topArtists.loadingState = d.GuX.REJECT);
                            }
                        }),
                        getData: (0, r.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: n = 20, sortBy: l, sortOrder: s } = t,
                                { usersResource: c, modelActionsLogger: u } = (0, r._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i)) {
                                (e.sort = null), (0, o.WG)(l) && (0, o.hl)(s) && (e.sort = (0, r.wg)({ sortBy: l, sortOrder: s }));
                                try {
                                    var m, _;
                                    e.pagesLoader.setPageState(i, d.GuX.PENDING);
                                    let t = yield c.getLikedArtists({ userId: a, page: i, pageSize: n, sortBy: l, sortOrder: s }),
                                        r = null != (_ = null == (m = t.artists) ? void 0 : m.map(p.dM)) ? _ : [];
                                    e.pagesLoader.setItems(r, { page: i, pager: { page: i, perPage: n, total: t.pager.total } });
                                } catch (t) {
                                    u.error(t), e.pagesLoader.setItems(null, { responseStatus: d.FlZ.ERROR, page: i });
                                }
                            }
                        }),
                        reset() {
                            e.topArtists.reset(), e.pagesLoader.reset(), (e.sort = null);
                        },
                    }));
            var h = a(66281);
            let b = r.gK
                    .compose(r.gK.model('CollectionClipsPageWillLike', { clips: r.gK.maybeNull(r.gK.array(h.kv)) }), c.XT, c.pl)
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
                        getData: (0, r.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, r._$)(e);
                            try {
                                e.loadingState = d.GuX.PENDING;
                                let a = yield t.getClipsWillLike({ page: 0, pageSize: 50 });
                                a.clips && (e.clips = (0, r.wg)(a.clips.map(h.i$))), e.loadingState !== d.GuX.IDLE && (e.loadingState = d.GuX.RESOLVE);
                            } catch (t) {
                                a.error(t), e.loadingState !== d.GuX.IDLE && (e.loadingState = d.GuX.REJECT);
                            }
                        }),
                        reset() {
                            (e.loadingState = d.GuX.IDLE), e.destroyItems([e.clips]);
                        },
                    })),
                I = r.gK
                    .compose(
                        r.gK.model('CollectionClipsPage', {
                            items: r.gK.array(r.gK.maybeNull(h.kv)),
                            pager: r.gK.maybeNull(c.jd),
                            alreadyRequestedPages: r.gK.map(r.gK.number),
                            pendingPages: r.gK.map(r.gK.number),
                            clipsWillLike: b,
                        }),
                        c.XT,
                        c.pl,
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
                            e.items = (0, r.wg)(Array.from({ length: 20 }, () => null));
                        },
                        getData: (0, r.L3)(function* (t) {
                            var a;
                            let { userId: i, page: n = 0, pageSize: l = 20 } = t,
                                { usersResource: s, modelActionsLogger: o } = (0, r._$)(e);
                            if (
                                !(
                                    (e.pager && e.items.length >= (null == (a = e.pager) ? void 0 : a.total)) ||
                                    (e.loadingState === d.GuX.PENDING && e.pendingPages.has(n.toString()))
                                ) &&
                                !e.alreadyRequestedPages.has(n.toString())
                            ) {
                                'number' == typeof n && e.alreadyRequestedPages.set(n.toString(), n);
                                try {
                                    (e.loadingState = d.GuX.PENDING), e.pendingPages.set(n.toString(), n);
                                    let t = yield s.getLikedClips({ userId: i, page: n, pageSize: l }),
                                        a = { page: n, perPage: l, total: t.pager.total };
                                    if (t.clips) {
                                        let i = t.clips.map(h.i$);
                                        (0, d.Iyy)({ items: e.items, mappedRawItems: i, page: n, pageSize: l }), (e.items = (0, r.wg)(e.items.slice(0, a.total)));
                                    }
                                    (e.pager = a), (e.loadingState = d.GuX.RESOLVE);
                                } catch (t) {
                                    o.error(t), (e.loadingState = d.GuX.REJECT);
                                } finally {
                                    e.pendingPages.delete(n.toString());
                                }
                            }
                        }),
                        reset() {
                            (e.loadingState = d.GuX.IDLE),
                                (e.pager = null),
                                e.alreadyRequestedPages.clear(),
                                e.pendingPages.clear(),
                                e.destroyItems([e.items]),
                                e.clipsWillLike.reset();
                        },
                    })),
                x = r.gK
                    .compose(
                        r.gK.model('CollectionNonMusicPage', {
                            items: r.gK.array(r.gK.maybeNull(s.JC)),
                            pager: r.gK.maybeNull(c.jd),
                            alreadyRequestedPages: r.gK.map(r.gK.number),
                            pendingPages: r.gK.map(r.gK.number),
                            requestsCount: r.gK.maybeNull(r.gK.number),
                        }),
                        c.XT,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || (e.loadingState === d.GuX.PENDING && 0 === e.items.length);
                        },
                        get isEmptyItems() {
                            var t;
                            return !!(!(null == (t = e.items) ? void 0 : t.length) && e.requestsCount);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, r.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: n = 20, metaType: l } = t,
                                { usersResource: o, modelActionsLogger: c } = (0, r._$)(e);
                            if (!(e.loadingState === d.GuX.PENDING && e.pendingPages.has(''.concat(i))) && !e.alreadyRequestedPages.has(''.concat(i))) {
                                'number' == typeof i && e.alreadyRequestedPages.set(''.concat(i), i);
                                try {
                                    var u, m, _;
                                    (e.loadingState = d.GuX.PENDING), e.pendingPages.set(''.concat(i), i);
                                    let t = yield o.getLikedAlbums({ userId: a, page: i, pageSize: n, metaType: l }),
                                        c = { page: i, perPage: n, total: t.pager.total };
                                    0 === e.items.length && (e.items = (0, r.wg)(Array.from({ length: c.total }, () => null)));
                                    let p =
                                        null !=
                                        (m =
                                            null == (u = t.albums)
                                                ? void 0
                                                : u.map((e) => {
                                                      let { album: t } = e;
                                                      return (0, s.pp)(t);
                                                  }))
                                            ? m
                                            : [];
                                    (0, d.Iyy)({ items: e.items, mappedRawItems: p, page: i, pageSize: n }),
                                        (e.pager = c),
                                        (e.requestsCount = (null != (_ = e.requestsCount) ? _ : 0) + 1),
                                        e.loadingState !== d.GuX.IDLE && (e.loadingState = d.GuX.RESOLVE);
                                } catch (t) {
                                    c.error(t), (e.loadingState = d.GuX.REJECT);
                                } finally {
                                    e.pendingPages.delete(''.concat(i));
                                }
                            }
                        }),
                        reset() {
                            (e.loadingState = d.GuX.IDLE),
                                (e.items = (0, r.wg)([])),
                                e.pendingPages.clear(),
                                (e.pager = null),
                                e.alreadyRequestedPages.clear(),
                                (e.requestsCount = 0);
                        },
                    }));
            var N = a(79670),
                A = a(25358);
            let S = r.gK
                    .model('CollectionPlaylistsCreatedPage', { sort: r.gK.maybeNull(o.wY), pagesLoader: (0, c.Ij)(A.Zq), kinds: r.gK.array(r.gK.number) })
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
                    .actions((e) => {
                        let t = {
                            getKinds: (0, r.L3)(function* (t) {
                                let a = [],
                                    { usersResource: i } = (0, r._$)(e);
                                (a = yield i.getPlaylistsKinds({ userId: t, addPlaylistWithLikes: !0 })), (e.kinds = (0, r.wg)(a));
                            }),
                            getData: (0, r.L3)(function* (a) {
                                let { userId: i, page: n = 0, pageSize: l = 20, withLikesCount: s } = a,
                                    { usersResource: o, modelActionsLogger: c } = (0, r._$)(e);
                                if (e.pagesLoader.isPageNeedToLoad(n))
                                    try {
                                        e.pagesLoader.setPageState(n, d.GuX.PENDING), 0 === e.kinds.length && (yield t.getKinds(i));
                                        let a = n * l,
                                            r = e.kinds.slice(a, a + l),
                                            c = (yield o.getPlaylistsByKinds({ userId: i, kinds: r, withLikesCount: s, withTracks: !0 })).map(N.pd);
                                        e.pagesLoader.setItems(c, { page: n, pager: { page: n, perPage: l, total: e.kinds.length } });
                                    } catch (t) {
                                        c.error(t), e.pagesLoader.setItems(null, { responseStatus: d.FlZ.ERROR, page: n });
                                    }
                            }),
                            reset() {
                                (e.sort = null), e.pagesLoader.reset(), (e.kinds = (0, r.wg)([]));
                            },
                        };
                        return t;
                    }),
                y = r.gK
                    .model('CollectionPlaylistsLikedPage', { sort: r.gK.maybeNull(o.wY), pagesLoader: (0, c.Ij)(A.$o) })
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
                        getData: (0, r.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: n = 20, sortBy: l, sortOrder: s, playlistMetaType: c, withTracks: u } = t;
                            if (!e.pagesLoader.isPageNeedToLoad(i)) return;
                            let { usersResource: m, modelActionsLogger: _ } = (0, r._$)(e);
                            (e.sort = null), (0, o.WG)(l) && (0, o.hl)(s) && (e.sort = (0, r.wg)({ sortBy: l, sortOrder: s }));
                            try {
                                e.pagesLoader.setPageState(i, d.GuX.PENDING);
                                let { likedPlaylists: t, pager: r } = yield m.getLikedPlaylists({
                                        userId: a,
                                        page: i,
                                        pageSize: n,
                                        sortBy: l,
                                        sortOrder: s,
                                        playlistMetaType: c,
                                        withTracks: u,
                                    }),
                                    o = t.map((e) => {
                                        let { playlist: t } = e;
                                        return (0, A.jX)(t);
                                    });
                                e.pagesLoader.setItems(o, { page: i, pager: r });
                            } catch (t) {
                                _.error(t), e.pagesLoader.setItems(null, { responseStatus: d.FlZ.ERROR, page: i });
                            }
                        }),
                        reset() {
                            (e.sort = null), e.pagesLoader.reset();
                        },
                    })),
                C = r.gK
                    .model('CollectionPlaylists', {
                        playlistsLiked: y,
                        playlistsCreated: S,
                        activeTabIndex: r.gK.number,
                        tabs: r.gK.array(r.gK.number),
                        tabIndexElement: r.gK.maybe(r.gK.string),
                    })
                    .views((e) => ({
                        get isLikedTabActive() {
                            return e.activeTabIndex === i.a.LIKED;
                        },
                        get isCreatedTabActive() {
                            return e.activeTabIndex === i.a.CREATED;
                        },
                        get activePlaylistsModel() {
                            switch (e.activeTabIndex) {
                                case i.a.CREATED:
                                    return e.playlistsCreated;
                                case i.a.LIKED:
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
                            e.playlistsLiked.reset(), e.playlistsCreated.reset(), (e.activeTabIndex = i.a.CREATED);
                        },
                    }));
            var f = a(66161);
            let T = (e) => (0, r.wg)({ type: e.type, track: (0, f.vU)(e.track), album: e.album && (0, s.pp)(e.album) }),
                E = (e) => (0, r.wg)({ type: e.type, album: e.album && (0, s.pp)(e.album), playlist: e.playlist && (0, N.ZC)(e.playlist), track: (0, f.vU)(e.track) }),
                L = r.gK.model('ShelfLikedItem', { type: r.gK.string, track: f.vj, album: r.gK.maybe(s.JC) });
            r.gK.model('ShelfNewEpisodesItem', { type: r.gK.string, playlist: r.gK.maybe(N.BL), track: f.vj });
            let j = r.gK.model('ShelfRecentlyPlayedItem', { type: r.gK.string, album: r.gK.maybe(s.JC), playlist: r.gK.maybe(N.IP), track: f.vj }),
                P = r.gK
                    .compose(
                        r.gK.model('CollectionShelfLiked', {
                            title: r.gK.maybeNull(r.gK.string),
                            typeForFrom: r.gK.maybeNull(r.gK.string),
                            entities: r.gK.maybeNull(r.gK.array(L)),
                            pager: r.gK.maybeNull(c.jd),
                        }),
                        c.XT,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === d.GuX.PENDING;
                        },
                        get isEmpty() {
                            var t;
                            return e.isResolved && (null == (t = e.entities) ? void 0 : t.length) === 0;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, r.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, r._$)(e);
                            if (e.loadingState !== d.GuX.PENDING)
                                try {
                                    var i, n;
                                    e.loadingState = d.GuX.PENDING;
                                    let a = yield t.getShelfLiked();
                                    (e.title = a.title),
                                        (e.typeForFrom = null != (i = a.typeForFrom) ? i : null),
                                        (e.pager = null != (n = a.pager) ? n : null),
                                        (e.entities = (0, r.wg)(a.entities ? a.entities.map(T) : [])),
                                        (e.loadingState = d.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.loadingState = d.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.entities = null), (e.title = null), (e.typeForFrom = null), (e.pager = null), (e.loadingState = d.GuX.IDLE);
                        },
                    })),
                R = r.gK
                    .compose(
                        r.gK.model('CollectionShelfNewEpisodes', {
                            title: r.gK.maybeNull(r.gK.string),
                            typeForFrom: r.gK.maybeNull(r.gK.string),
                            playlist: r.gK.maybeNull(N.BL),
                            tracks: r.gK.maybeNull(r.gK.array(f.vj)),
                        }),
                        c.XT,
                    )
                    .views((e) => ({
                        get withPlaylist() {
                            return !!(e.playlist && e.playlist.kind && e.playlist.isAvailable && e.playlist.uuid);
                        },
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === d.GuX.PENDING;
                        },
                        get isEmpty() {
                            return e.isResolved && (!e.tracks || 0 === e.tracks.length);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, r.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, r._$)(e);
                            if (e.loadingState !== d.GuX.PENDING)
                                try {
                                    var i;
                                    e.loadingState = d.GuX.PENDING;
                                    let a = yield t.getNewEpisodes();
                                    e.title = a.title;
                                    let n = a.blocks[0];
                                    (null == n ? void 0 : n.typeForFrom) && (e.typeForFrom = n.typeForFrom),
                                        (null == n || null == (i = n.entities[0]) ? void 0 : i.playlist) && (e.playlist = (0, N.ZC)(n.entities[0].playlist)),
                                        (null == n ? void 0 : n.entities) && (e.tracks = (0, r.wg)(n.entities.filter((e) => e.track).map((e) => (0, f.vU)(e.track)))),
                                        (e.loadingState = d.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.loadingState = d.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.title = null), (e.playlist = null), (e.typeForFrom = null), (e.tracks = null), (e.loadingState = d.GuX.IDLE);
                        },
                    })),
                k = r.gK
                    .compose(
                        r.gK.model('CollectionShelfRecentlyPlayed', {
                            title: r.gK.maybeNull(r.gK.string),
                            typeForFrom: r.gK.maybeNull(r.gK.string),
                            entities: r.gK.maybeNull(r.gK.array(j)),
                            pager: r.gK.maybeNull(c.jd),
                        }),
                        c.XT,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === d.GuX.PENDING;
                        },
                        get isEmpty() {
                            return !!(e.isResolved && e.entities && 0 === e.entities.length);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, r.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, r._$)(e);
                            if (e.loadingState !== d.GuX.PENDING)
                                try {
                                    var i, n;
                                    e.loadingState = d.GuX.PENDING;
                                    let a = yield t.getShelfRecentlyPlayed();
                                    (e.title = a.title),
                                        (e.typeForFrom = null != (i = a.typeForFrom) ? i : null),
                                        (e.pager = null != (n = a.pager) ? n : null),
                                        (e.entities = (0, r.wg)(a.entities.map(E))),
                                        (e.loadingState = d.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.loadingState = d.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.entities = null), (e.title = null), (e.typeForFrom = null), (e.pager = null), (e.loadingState = d.GuX.IDLE);
                        },
                    })),
                M = r.gK
                    .model('CollectionShelfPage', { recentlyPlayed: k, newEpisodes: R, liked: P })
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
                            return e.recentlyPlayed.loadingState === d.GuX.IDLE && e.liked.loadingState === d.GuX.IDLE;
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
                            e.recentlyPlayed.reset(), e.liked.reset();
                        },
                    })),
                w = r.gK
                    .compose(r.gK.model('CollectionDislikesPageArtists', { items: r.gK.maybeNull(r.gK.array(p.PK)) }), c.XT)
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === d.GuX.PENDING;
                            },
                            get isEmpty() {
                                var a;
                                return !t.isLoading && (null == (a = e.items) ? void 0 : a.length) === 0;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, r.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, r._$)(e);
                            if (!(0, r._n)(e)) return null;
                            let { user: i } = (0, r.Zn)(e);
                            if (e.loadingState === d.GuX.PENDING) return null;
                            if (((e.loadingState = d.GuX.PENDING), i.account.data.uid))
                                try {
                                    let a = yield t.getDislikedArtists({ userId: i.account.data.uid });
                                    return (e.items = (0, r.wg)((a || []).map(p.dM))), e.loadingState !== d.GuX.IDLE && (e.loadingState = d.GuX.RESOLVE), a;
                                } catch (t) {
                                    a.error(t), e.loadingState !== d.GuX.IDLE && (e.loadingState = d.GuX.REJECT);
                                }
                            return (e.loadingState = d.GuX.REJECT), null;
                        }),
                        reset() {
                            (e.loadingState = d.GuX.IDLE), (e.items = null);
                        },
                    }));
            var O = a(83110),
                B = a(41094);
            let D = r.gK.model('CollectionDislikesPageTracksItem', { id: r.gK.string, loadingState: r.gK.enumeration(Object.values(d.GuX)), data: r.gK.maybeNull(f.vj) }),
                K = r.gK
                    .compose(r.gK.model('CollectionDislikesPageTracks', { items: r.gK.maybeNull(r.gK.array(D)) }), c.XT)
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === d.GuX.PENDING;
                            },
                            get isEmpty() {
                                var a;
                                return !t.isLoading && (null == (a = e.items) ? void 0 : a.length) === 0;
                            },
                            get sonataEntitiesData() {
                                var i, n;
                                return null != (n = null == (i = e.items) ? void 0 : i.map((e) => (0, B.li)(e.id))) ? n : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, r.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, r._$)(e),
                                { user: i } = (0, r.Zn)(e);
                            if (i.account.data.uid && e.loadingState !== d.GuX.PENDING) {
                                e.loadingState = d.GuX.PENDING;
                                try {
                                    let {
                                            library: { tracks: a },
                                        } = yield t.getDislikedTracks({ userId: i.account.data.uid }),
                                        n = a.map((e) => {
                                            let { id: t, albumId: a } = e;
                                            return { id: String((0, O.V)(t, a)), loadingState: d.GuX.IDLE };
                                        });
                                    (e.items = (0, r.wg)(n)), (e.loadingState = d.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), e.loadingState !== d.GuX.IDLE && (e.loadingState = d.GuX.REJECT);
                                }
                            }
                        }),
                        getTracksByRange: (0, r.L3)(function* (t, a) {
                            var i;
                            let { tracksResource: n, modelActionsLogger: l } = (0, r._$)(e);
                            if (!(null == (i = e.items) ? void 0 : i.length)) return null;
                            (t = Math.max(0, t)), (a = Math.min(a, e.items.length));
                            let s = ((e, t, a) => {
                                let i = [];
                                for (let l = t; l <= a; l++) {
                                    var n, r;
                                    ((null == (n = e[l]) ? void 0 : n.loadingState) === d.GuX.IDLE || (null == (r = e[l]) ? void 0 : r.loadingState) === d.GuX.REJECT) &&
                                        i.push(l);
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
                                    i && (i.loadingState = d.GuX.PENDING);
                                });
                                let i = yield n.getTracksMeta({ trackIds: a, withProgress: !0 });
                                s.forEach((t, a) => {
                                    var n;
                                    let r = null == i ? void 0 : i[a];
                                    (null == (n = e.items) ? void 0 : n[t]) && r && (e.items[t] = { id: String(r.id), data: (0, f.vU)(r), loadingState: d.GuX.RESOLVE });
                                });
                            } catch (t) {
                                l.error(t),
                                    s.forEach((t) => {
                                        var a;
                                        let i = null == (a = e.items) ? void 0 : a[t];
                                        i && (i.loadingState = d.GuX.REJECT);
                                    });
                            }
                            return null;
                        }),
                        reset() {
                            (e.loadingState = d.GuX.IDLE), (e.items = null);
                        },
                    })),
                U = r.gK
                    .model('CollectionDislikesPage', { artists: w, tracks: K })
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
                            e.artists.reset(), e.tracks.reset();
                        },
                    }));
            var G = a(22898);
            let V = r.gK
                    .model('CollectionKidsAlbumsPage', { pagesLoader: (0, c.Ij)(s.JC) })
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
                                var i, n;
                                return null != (n = null == (i = e.pagesLoader.items) ? void 0 : i.filter((e) => null !== e)) ? n : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, r.L3)(function* (t) {
                            let { pageSize: a = G.c, page: i = 0 } = t,
                                { landingBlocksResource: n, modelActionsLogger: s } = (0, r._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, d.GuX.PENDING);
                                    let t = yield n.getCollectionKidsAlbumsLiked({ page: i, pageSize: a }),
                                        r = t.items.map((e) => (0, l.vj)(e.data).data);
                                    e.pagesLoader.setItems(r, { page: i, pager: t.pager });
                                } catch (t) {
                                    s.error(t), e.pagesLoader.setItems(null, { responseStatus: d.FlZ.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                z = r.gK
                    .model('CollectionKidsPlaylistsPage', { pagesLoader: (0, c.Ij)(N.IP) })
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
                                var i, n;
                                return null != (n = null == (i = e.pagesLoader.items) ? void 0 : i.filter((e) => null !== e)) ? n : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, r.L3)(function* (t) {
                            let { pageSize: a = G.c, page: i = 0 } = t,
                                { landingBlocksResource: n, modelActionsLogger: s } = (0, r._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, d.GuX.PENDING);
                                    let t = yield n.getCollectionKidsPlaylistsLiked({ page: i, pageSize: a }),
                                        r = t.items.map((e) => (0, l.dF)(e.data).data);
                                    e.pagesLoader.setItems(r, { page: i, pager: t.pager });
                                } catch (t) {
                                    s.error(t), e.pagesLoader.setItems(null, { responseStatus: d.FlZ.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                F = r.gK
                    .model('CollectionKidsTracksPage', { pagesLoader: (0, c.Ij)(f.vj) })
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
                                var i, n;
                                return null != (n = null == (i = e.pagesLoader.items) ? void 0 : i.filter((e) => null !== e)) ? n : [];
                            },
                            get sonataEntitiesData() {
                                return t.loadedItems.map(f.$b);
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, r.L3)(function* (t) {
                            let { pageSize: a = G.c, page: i = 0 } = t,
                                { landingBlocksResource: n, modelActionsLogger: s } = (0, r._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, d.GuX.PENDING);
                                    let t = yield n.getCollectionKidsTracksLiked({ page: i, pageSize: a }),
                                        r = t.items.map(l.vI).map((e) => e.data);
                                    e.pagesLoader.setItems(r, { page: i, pager: t.pager });
                                } catch (t) {
                                    s.error(t), e.pagesLoader.setItems(null, { responseStatus: d.FlZ.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                W = r.gK
                    .model('CollectionKidsPage', { albums: V, playlists: z, tracks: F })
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
                            e.albums.reset(), e.playlists.reset(), e.tracks.reset();
                        },
                    })),
                X = r.gK
                    .compose(r.gK.model('CollectionShelfLikedPage', { pagesLoader: (0, c.Ij)(L), typeForFrom: r.gK.maybeNull(r.gK.string) }), c.pl)
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
                        getData: (0, r.L3)(function* (t) {
                            let { pageSize: a = G.c, page: i = 0 } = t,
                                { nonMusicResource: n, modelActionsLogger: l } = (0, r._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    var s, o;
                                    e.pagesLoader.setPageState(i, d.GuX.PENDING);
                                    let t = yield n.getShelfLiked({ page: i, pageSize: a }),
                                        r = (null == (s = t.entities) ? void 0 : s.map(T)) || [];
                                    e.pagesLoader.setItems(r, { page: i, pager: t.pager }), (e.typeForFrom = null != (o = t.typeForFrom) ? o : null);
                                } catch (t) {
                                    l.error(t), e.pagesLoader.setItems(null, { responseStatus: d.FlZ.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                Y = r.gK
                    .model('CollectionShelfRecentlyPlayedPage', { pagesLoader: (0, c.Ij)(j), typeForFrom: r.gK.maybeNull(r.gK.string) })
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
                        getData: (0, r.L3)(function* (t) {
                            let { pageSize: a = G.c, page: i = 0 } = t,
                                { nonMusicResource: n, modelActionsLogger: l } = (0, r._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    var s, o;
                                    e.pagesLoader.setPageState(i, d.GuX.PENDING);
                                    let t = yield n.getShelfRecentlyPlayed({ page: i, pageSize: a }),
                                        r = (null == (s = t.entities) ? void 0 : s.map(E)) || [];
                                    e.pagesLoader.setItems(r, { page: i, pager: t.pager }), (e.typeForFrom = null != (o = t.typeForFrom) ? o : null);
                                } catch (t) {
                                    l.error(t), e.pagesLoader.setItems(null, { responseStatus: d.FlZ.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), (e.typeForFrom = null);
                        },
                    })),
                $ = r.gK.model('CollectionPage', {
                    landing: l.Ju,
                    albums: m,
                    playlists: C,
                    artists: v,
                    shelf: M,
                    shelfRecentlyPlayed: Y,
                    shelfLiked: X,
                    nonMusicLiked: x,
                    dislikes: U,
                    kids: W,
                    clips: I,
                });
            a(68089),
                a(23959),
                a(41664),
                a(81153),
                a(25986),
                a(81550),
                a(60060),
                a(90474),
                a(28224),
                a(47476),
                a(72490),
                a(46610),
                a(94254),
                a(71868),
                a(42571),
                a(35434),
                a(18488),
                a(46534),
                a(99628);
        },
        95053: (e) => {
            e.exports = {
                root: 'VideoPlayerBarContainerDesktop_root__Aw4GO',
                root_visible: 'VideoPlayerBarContainerDesktop_root_visible__F_7vs',
                root_withHoveredCarousel: 'VideoPlayerBarContainerDesktop_root_withHoveredCarousel__2gzlW',
                carouselWrapper: 'VideoPlayerBarContainerDesktop_carouselWrapper__HN1rc',
                carousel: 'VideoPlayerBarContainerDesktop_carousel__15RwT',
                carouselBlock: 'VideoPlayerBarContainerDesktop_carouselBlock__8prtL',
                carouselControls: 'VideoPlayerBarContainerDesktop_carouselControls__OwWar',
                clipCardTitle: 'VideoPlayerBarContainerDesktop_clipCardTitle__4wJ1A',
                important: 'VideoPlayerBarContainerDesktop_important__PBP47',
                clipCardArtist: 'VideoPlayerBarContainerDesktop_clipCardArtist__XegP0',
            };
        },
        96297: (e) => {
            e.exports = {
                root: 'TrackModal_root__QrFg6',
                header: 'TrackModal_header__hjfRd',
                closeButton: 'TrackModal_closeButton__VLm_R',
                modalContent: 'TrackModal_modalContent__AzQPF',
                content: 'TrackModal_content__9qH7W',
                container: 'TrackModal_container__JaG86',
            };
        },
        97108: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { v: () => i }),
                (function (e) {
                    (e.ON_START_BAR_BELOW = 'music-web-on-start-bar-bellow'), (e.ON_START_FULLSCREEN = 'music-web-on-start-fullscreen');
                })(i || (i = {}));
        },
        97753: (e, t, a) => {
            'use strict';
            a.d(t, { mt: () => x, bo: () => l, cF: () => r });
            var i = a(51606),
                n = a(54690),
                r = (function (e) {
                    return (e.IDLE = 'idle'), (e.SUCCESS = 'success'), (e.ERROR = 'error'), e;
                })({});
            let l = i.gK
                .model({
                    modal: n.qt,
                    target: i.gK.string,
                    isSilent: i.gK.boolean,
                    tariffOfferName: i.gK.string,
                    offersBatchId: i.gK.string,
                    offersPositionIds: i.gK.string,
                    serviceSessionId: i.gK.string,
                    status: i.gK.enumeration(Object.values(r)),
                })
                .views((e) => ({
                    get isSuccess() {
                        return e.status === r.SUCCESS;
                    },
                    get isError() {
                        return e.status === r.ERROR;
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
                        (e.target = ''), (e.tariffOfferName = ''), (e.offersBatchId = ''), (e.offersPositionIds = ''), (e.serviceSessionId = ''), (e.status = r.IDLE);
                    },
                    onModalOpenChange(t) {
                        e.modal.onOpenChange(t), e.status === r.SUCCESS && window.location.reload();
                    },
                }));
            var s = a(62936),
                o = a(79950),
                d = a(19718),
                c = a(44020),
                u = a(8669),
                m = a(4497),
                _ = a(4714),
                p = a(42561),
                g = a(59935);
            let v = null,
                h = (0, d.PA)((e) => {
                    let {
                            className: t,
                            target: a,
                            silent: i,
                            serviceSessionId: n,
                            tariffOfferName: r,
                            offersBatchId: l,
                            offersPositionIds: o,
                            onLoad: d,
                            onSuccess: u,
                            onError: m,
                            onClose: _,
                        } = e,
                        h = (0, c.useRef)(null),
                        { theme: b } = (0, p.DPo)(),
                        { pwTools: I } = (0, p.q4i)(),
                        x = (0, p.bBU)(),
                        N = (0, g.c)((e) => {
                            'purchase_data' === e.type && (null == u || u());
                        }),
                        A = (0, g.c)(() => {
                            null == m || m();
                        }),
                        S = (0, g.c)(() => {
                            null == _ || _();
                        }),
                        y = (0, g.c)((e) => {
                            'loaded' === e.data.status && (null == d || d());
                        }),
                        C = (0, c.useCallback)(async () => {
                            if (!I || !h.current) return;
                            let { lang: e, mode: t, platform: s, widgetServiceName: d, authMethod: c } = I.options;
                            if (!v)
                                try {
                                    v = await I.loadManager();
                                } catch (e) {
                                    S();
                                    return;
                                }
                            v.send({
                                type: 'init',
                                options: {
                                    lang: e,
                                    mode: t,
                                    platform: s,
                                    widgetServiceName: d,
                                    authMethod: c,
                                    silent: i,
                                    usePlusHost: !0,
                                    theme: b,
                                    onSuccess: N,
                                    onError: A,
                                    onReport: y,
                                    onClose: S,
                                },
                            });
                            let u = {
                                    target: a,
                                    eventSessionId: n,
                                    tariffOfferName: r,
                                    offersBatchId: l,
                                    offersPositionIds: o,
                                    targetNode: h.current,
                                    isTarifficator: !0,
                                },
                                m = await x();
                            null !== m && (u.clid = m), v.send({ type: 'open', options: u });
                        }, [b, I, a, i, r, n, l, o, N, A, y, S, x]);
                    return (
                        (0, c.useEffect)(
                            () => (
                                C(),
                                () => {
                                    null == v || v.send({ type: 'close' });
                                }
                            ),
                            [C],
                        ),
                        (0, s.jsx)('div', { className: t, ref: h })
                    );
                });
            var b = a(46842),
                I = a.n(b);
            let x = (0, d.PA)(() => {
                let { paymentWidgetModal: e, advert: t } = (0, p.Pjs)(),
                    { state: a, toggleTrue: i } = (0, m.e)(!1),
                    n = (0, p.vUB)();
                (0, c.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                );
                let l = (0, c.useCallback)(() => {
                        e.setStatus(r.SUCCESS), n.track({ label: 'WCvtCKnr84oYEPnRuvUo' });
                    }, [e, n]),
                    d = (0, c.useCallback)(() => {
                        e.modal.close(), e.isSuccess && window.location.reload(), e.reset();
                    }, [e]),
                    g = (0, c.useCallback)(() => {
                        e.setStatus(r.ERROR);
                    }, [e]);
                return (0, s.jsx)(_.a, {
                    open: e.modal.isOpened,
                    size: 'fitContent',
                    placement: 'center',
                    showHeader: !1,
                    withAnimation: !1,
                    className: (0, o.$)(I().root, { [I().root_loaded]: a, [I().root_level_up]: t.isAdvertShown }),
                    ...(0, u.Am)(u.OA.paymentWidget.PAYMENT_WIDGET),
                    contentClassName: I().content,
                    overlayColor: 'full',
                    onOpenChange: e.onModalOpenChange,
                    children: (0, s.jsx)(h, {
                        className: I().widget,
                        target: e.target,
                        silent: e.isSilent,
                        serviceSessionId: e.serviceSessionId,
                        tariffOfferName: e.tariffOfferName,
                        offersBatchId: e.offersBatchId,
                        offersPositionIds: e.offersPositionIds,
                        onLoad: i,
                        onSuccess: l,
                        onError: g,
                        onClose: d,
                    }),
                });
            });
        },
        99720: (e) => {
            e.exports = {
                root: 'VideoPlayerBarDesktop_root__OxypO',
                info: 'VideoPlayerBarDesktop_info__ulYvU',
                infoCard: 'VideoPlayerBarDesktop_infoCard__mE___',
                coverContainer: 'VideoPlayerBarDesktop_coverContainer__xV_VP',
                cover: 'VideoPlayerBarDesktop_cover__Nf4WW',
                description: 'VideoPlayerBarDesktop_description__sAiwG',
                artists: 'VideoPlayerBarDesktop_artists__PNY62',
                artistLink: 'VideoPlayerBarDesktop_artistLink__FgFZ8',
                infoButtons: 'VideoPlayerBarDesktop_infoButtons__9xWZ3',
                sonata: 'VideoPlayerBarDesktop_sonata__VrtGS',
                meta: 'VideoPlayerBarDesktop_meta__KlPBv',
                slider: 'VideoPlayerBarDesktop_slider__xULTh',
                important: 'VideoPlayerBarDesktop_important__HR9Xf',
            };
        },
        99876: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                artistCaption: 'ClipMeta_artistCaption__8RrCD',
                link: 'ClipMeta_link__6QadT',
                root: 'ClipMeta_root__pqZ6s',
                root_withSecondaryColor: 'ClipMeta_root_withSecondaryColor__va_JM',
                explicitMark: 'ClipMeta_explicitMark__TmCzw',
                metaContainer: 'ClipMeta_metaContainer__023Bj',
                titleContainer: 'ClipMeta_titleContainer__dtIm1',
                title: 'ClipMeta_title__L6Nwk',
            };
        },
    },
]);
