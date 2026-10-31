(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [818],
    {
        1829: (e, t, i) => {
            'use strict';

            i.d(t, { _: () => eN });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(88800),
                pulseSyncMenuItems = i(19934),
                pulseSyncMenuIcons = i(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var a = i(88800),
                s = i(65724),
                l = i(96706),
                r = i(84961),
                n = i(53548),
                o = i(2058),
                c = i(88969),
                d = i(92716),
                u = i(17392),
                m = i(40700),
                _ = i(29993),
                v = i(52300),
                p = i(19934),
                y = i(92966),
                x = i(44318),
                A = i(38501),
                T = i(48749),
                f = i(22505),
                I = i(79546),
                k = i(17055),
                E = i(18143),
                h = i(29595),
                C = i(74965),
                O = i(9630),
                N = i(72288),
                b = i(66943),
                g = i(99698),
                S = i(42174),
                L = i(26401),
                j = i(18593),
                R = i(14518),
                D = i(93039),
                P = i(12241),
                M = i(20584),
                U = i(12816);
            let w = { [U._Q.SEARCH]: M.h.SEARCH, [U._Q.DOWNLOADS_TRACKS]: M.h.DOWNLOADED_TRACKS, [U._Q.HISTORY]: M.h.MUSIC_HISTORY };
            var K = i(5407),
                B = i(64284),
                z = i(25557),
                F = i(9618),
                Y = i(55693),
                H = i(95210),
                q = i(47964),
                W = i(46936),
                V = i(97956),
                X = i(98953),
                G = i(32721),
                $ = i(18130),
                Q = i(56117),
                Z = i(93091),
                J = i(34979),
                ee = i(74064),
                et = i(44988);
            let ei = (0, r.PA)((e) => {
                let { isFinished: t, onClick: i, className: s } = e,
                    { user: l } = (0, N.g)(),
                    r = (0, n.useMemo)(
                        () => (t ? (0, a.jsx)(c.A, { id: 'interface-actions.mark-non-listened' }) : (0, a.jsx)(c.A, { id: 'interface-actions.mark-listened' })),
                        [t],
                    );
                return (0, a.jsx)(p.Dr, {
                    className: s,
                    onClick: i,
                    icon: (0, a.jsx)(v.I, { variant: 'check', size: 'xxs' }),
                    disabled: !l.isAuthorized,
                    'data-test-id': u.S7.CONTEXT_MENU_MARK_LISTENED_BUTTON,
                    children: r,
                });
            });
            var ea = i(15425),
                es = i(81066),
                el = i(18278),
                er = i(12079),
                en = i(54667);
            let eo = (0, r.PA)((e) => {
                let { track: t } = e,
                    {
                        modals: { ugcTrackEditModal: i },
                    } = (0, N.g)(),
                    s = (0, n.useCallback)(() => {
                        i.open(t);
                    }, [t, i]);
                return (0, a.jsx)(p.Dr, {
                    onClick: s,
                    icon: (0, a.jsx)(v.I, { variant: 'edit', size: 'xxs' }),
                    'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU_UGC_EDIT_BUTTON,
                    children: (0, a.jsx)(c.A, { id: 'interface-actions.edit' }),
                });
            });
            var ec = i(33139),
                ed = i(84779),
                eu = i(31633),
                em = i.n(eu),
                e_ = i(51888),
                ev = i(99305),
                ep = i(58977),
                ey = i(4086),
                ex = i(41928),
                eA = i(71978),
                eT = i(79262),
                ef = i(68447),
                eI = i.n(ef);
            let ek = (0, r.PA)((e) => {
                let { track: t } = e,
                    i = (0, eA.j)(),
                    {
                        slam: { isOfflineModeEnabled: s },
                    } = (0, N.g)(),
                    l = (0, ex.N)().get(ey.vg),
                    r = (0, O.e)(),
                    o = (0, n.useCallback)(() => {
                        var e, a, n;
                        if (t.isDownloaded) {
                            null == (a = i.tracksController) || a.deleteTrack(t.entityId);
                            let e =
                                null == r
                                    ? void 0
                                    : r.state.queueState.entityList.value.findIndex((e) => {
                                          let { entity: i } = e;
                                          if ((0, k.b)(i)) {
                                              var a, s;
                                              return t.entityId === (0, e_.V)(i.data.meta.id, null == (s = i.data.meta.albums) || null == (a = s[0]) ? void 0 : a.id);
                                          }
                                          return !1;
                                      });
                            (void 0 !== e && s && (null == r || r.hide({ positions: [e] })), l.count(ev.x.TRACK_DELETE, ep.l));
                            return;
                        }
                        if (t.isDownloading) {
                            null == (n = i.tracksController) || n.stopDownload(t.entityId);
                            return;
                        }
                        (null == (e = i.tracksController) || e.download(t.entityId), l.count(ev.x.TRACK_DOWNLOAD, ep.l));
                    }, [t.isDownloaded, t.isDownloading, t.entityId, i.tracksController, l, r, s]),
                    d = (0, n.useMemo)(
                        () =>
                            t.isDownloaded
                                ? (0, a.jsx)(c.A, { id: 'offline.delete-from-device' })
                                : t.isDownloading
                                  ? (0, a.jsx)(c.A, { id: 'offline.stop-downloading' })
                                  : (0, a.jsx)(c.A, { id: 'offline.download' }),
                        [t.isDownloaded, t.isDownloading],
                    ),
                    m = (0, n.useMemo)(
                        () =>
                            t.isDownloaded
                                ? (0, a.jsx)(v.I, { variant: 'upload', size: 'xxs' })
                                : t.isDownloading
                                  ? (0, a.jsx)(eT.A, {
                                        value: t.downloadingProgress,
                                        size: 20,
                                        withCancelIcon: !0,
                                        className: eI().downloadingProgress,
                                        progressBarClassName: eI().progress,
                                        cancelIconClassName: eI().cancelIcon,
                                    })
                                  : (0, a.jsx)(v.I, { variant: 'download', size: 'xxs' }),
                        [t.downloadingProgress, t.isDownloaded, t.isDownloading],
                    );
                return (0, a.jsx)(p.Dr, { onClick: o, icon: m, className: eI().root, 'data-test-id': u.S7.CONTEXT_MENU_DOWNLOAD_BUTTON, children: d });
            });
            var eE = i(29504),
                eh = i(67699),
                eC = i.n(eh);
            // for PulseSync: BEGIN download-to-file action in the track context menu
            let downloadTrackToFile = (0, r.PA)((t) => {
                let { track: e } = t,
                    i = (0, n.useMemo)(() => {
                        let t = (e?.artists ?? [])
                            .map((t) => t.name)
                            .filter(Boolean)
                            .join(', ');
                        return [t, e?.title].filter(Boolean).join(' — ');
                    }, [e]),
                    r = (0, n.useCallback)(() => {
                        e?.id && window.musicDesktop?.pulsesync.downloads.track?.(e.id, i);
                    }, [e, i]);
                return (0, a.jsx)(p.Dr, {
                    onClick: r,
                    icon: (0, a.jsx)(v.I, {
                        variant: 'download',
                        size: 'xxs',
                    }),
                    className: eI().root,
                    'data-test-id': u.S7.CONTEXT_MENU_DOWNLOAD_BUTTON,
                    children: 'Скачать в файл',
                });
            });
            // for PulseSync: END download-to-file action in the track context menu
            let eO = (0, r.PA)((e) => {
                    let { track: t } = e,
                        {
                            settings: { isMobile: i },
                        } = (0, N.g)();
                    return t.isUGC && i
                        ? (0, a.jsxs)('div', {
                              className: eC().ugcLabel,
                              children: [
                                  (0, a.jsx)(v.I, { variant: 'eye_crossed', size: 'xxs' }),
                                  (0, a.jsx)(eE.HL, { variant: 'span', size: 's', children: (0, a.jsx)(c.A, { id: 'ugc.track-description' }) }),
                              ],
                          })
                        : null;
                }),
                eN = (0, r.PA)((e) => {
                    var t, i, r, eu, e_, ev, ep, ey, ex, eA, eT, ef, eI, eE, eh, eC, eN, eb, eg, eS;
                    let {
                            track: eL,
                            onOpenChange: ej,
                            open: eR,
                            placement: eD,
                            isFullscreenMobile: eP = !1,
                            icon: eM,
                            size: eU,
                            utmLink: ew,
                            handleRemove: eK,
                            withTrailer: eB = !0,
                            ...ez
                        } = e,
                        { shouldShowBuySubscriptionModal: eF, showBuySubscriptionModal: eY } = (0, F.q)(),
                        eH = (0, O.e)(),
                        {
                            settings: eq,
                            currentTrackInfo: eW,
                            experiments: eV,
                            fullscreenPlayer: eX,
                            trailer: eG,
                            sonataState: { entityMeta: e$, isVibeContext: eQ },
                            trackComplaint: eZ,
                            trackLyrics: eJ,
                            album: e0,
                            track: e8,
                            user: e9,
                            slam: e1,
                            albumCPA: { isPlusCPAPlayerBarEnabled: e7 },
                        } = (0, N.g)(),
                        { formatMessage: e5 } = (0, o.A)(),
                        { sendLikeSearchFeedback: e2 } = (0, Y.z)(),
                        [e6, e4] = (0, n.useState)(!1),
                        { modal: e3 } = eZ,
                        { modal: te } = eJ,
                        { modal: tt } = eW,
                        ti = (function (e) {
                            var t, i;
                            let { album: a, playlist: s, artist: l, track: r } = (0, N.g)(),
                                { sourceContextData: o } = (0, n.useContext)(P.l),
                                { pageId: c } = (0, R.$)();
                            return (0, n.useMemo)(() => {
                                var t, i, n, d;
                                let u = null == o ? void 0 : o.sourceContextType,
                                    m = null != u ? u : c && w[c] ? w[c] : M.h.BASED_ON_ENTITY_BY_DEFAULT,
                                    _ = !!(null == o || null == (t = o.meta) ? void 0 : t.id);
                                if (o && (o.type !== j.K.Various || _)) return o;
                                let v = r.isOpened ? r.albumId : null;
                                return v
                                    ? (0, D.t)({ contextType: j.K.Album, contextId: v, entityContextType: m })
                                    : (null == (i = s.meta) ? void 0 : i.uid) && (null == (n = s.meta) ? void 0 : n.kind)
                                      ? (0, D.t)({
                                            contextType: j.K.Playlist,
                                            contextId: ''.concat(s.meta.uid, ':').concat(s.meta.kind),
                                            playlistUid: s.meta.uid,
                                            playlistKind: s.meta.kind,
                                            filter: s.filters.activeFilter,
                                            entityContextType: m,
                                        })
                                      : a.id
                                        ? (0, D.t)({ contextType: j.K.Album, contextId: a.id, entityContextType: m })
                                        : l.id
                                          ? (0, D.t)({ contextType: j.K.Artist, contextId: l.id, entityContextType: m })
                                          : (null == e ? void 0 : e.albumId)
                                            ? (0, D.t)({ contextType: j.K.Album, contextId: e.albumId, entityContextType: m })
                                            : (0, D.t)({ contextType: j.K.Various, contextId: null != (d = null == e ? void 0 : e.id) ? d : '', entityContextType: m });
                            }, [
                                o,
                                c,
                                r.isOpened,
                                r.albumId,
                                a.id,
                                null == (t = s.meta) ? void 0 : t.uid,
                                null == (i = s.meta) ? void 0 : i.kind,
                                s.filters.activeFilter,
                                l.id,
                                null == e ? void 0 : e.albumId,
                                null == e ? void 0 : e.id,
                            ]);
                        })(eL),
                        ta = (0, L.i)(eL, I.N.NEXT, ti),
                        ts = (0, L.i)(eL, I.N.LAST, ti),
                        tl = (0, S.K)(eL),
                        tr = (0, g.m)(eL),
                        tn = (0, y.K)(eL.mainAlbum),
                        to = ((e) => {
                            let {
                                    user: t,
                                    fullscreenPlayer: i,
                                    sonataState: { entityMeta: s },
                                    album: l,
                                } = (0, N.g)(),
                                { notify: r } = (0, C.l)(),
                                { formatMessage: n } = (0, o.A)(),
                                c = (0, O.e)();
                            return (0, _.c)(async () => {
                                if (!e) return;
                                let o = i.modal.isOpened ? h.u.FULLSCREEN_ERROR : h.u.ERROR;
                                if (!t.isAuthorized)
                                    return void r((0, a.jsx)(b.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o });
                                let d = e.streamProgress,
                                    u = (null == s ? void 0 : s.id) === e.id && (null == s ? void 0 : s.albumId) === e.albumId;
                                if ((await e.setListeningFinishedStatus()) !== E.T.OK)
                                    r((0, a.jsx)(b.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: o });
                                else {
                                    var m, _;
                                    let t = !(null == d ? void 0 : d.hasEverFinished),
                                        i = null == c ? void 0 : c.state.queueState.entityList.value,
                                        a =
                                            null == i
                                                ? void 0
                                                : i.find((t) => {
                                                      let { entity: i } = t;
                                                      if ((0, k.b)(i)) {
                                                          var a, s;
                                                          let t = i.data.meta;
                                                          return t.realId === e.id && (null == (s = t.albums) || null == (a = s[0]) ? void 0 : a.id) === e.albumId;
                                                      }
                                                      return !1;
                                                  });
                                    (a && (a.entity.everFinished = !!t),
                                        u &&
                                            (null == s ? void 0 : s.streamProgress) &&
                                            (null == (m = s.streamProgress) ? void 0 : m.hasEverFinished) !== t &&
                                            (s.streamProgress.updateEverFinished(t), t && s.streamProgress.updateEndPositionSec(0)),
                                        (null == (_ = l.meta) ? void 0 : _.listeningFinished) &&
                                            !t &&
                                            (l.markTracksFinished({ withoutTracks: [e.id] }), l.setAlbumUnfinished(), l.setAllTracksUnfinished(!1)),
                                        null == d || d.updateEverFinished(t),
                                        l.meta && t && l.checkAllAlbumTrackFinished());
                                }
                            });
                        })(eL),
                        tc = (0, z.F)(),
                        td = ''.concat(B.U.TRACK, '-').concat(eL.id),
                        tu = eP || eq.isMobile,
                        tm = '/album/:albumId/track/:trackId';
                    eL.albumId || (tm = '/track/:trackId');
                    let { shareLink: t_, pathname: tv } = (0, $.b)(tm, { params: { albumId: null != (eg = eL.albumId) ? eg : '', trackId: eL.id } }),
                        // for PulseSync: BEGIN read the LRCLIB plain-text lyrics preference
                        pulseSyncLrclibEnabled = window.nativeSettings?.get('modSettings.lrclib.useText') !== !1,
                        // for PulseSync: END read the LRCLIB plain-text lyrics preference
                        tp = eL.isUGC ? W.D.UGC_TRACK : W.D.TRACK,
                        ty = (0, T.A)({ entityVariant: tp, urlParams: { id: eL.id } }),
                        tx = ((e) => {
                            var t;
                            let { formatMessage: i } = (0, o.A)();
                            return i(
                                (null == e ? void 0 : e.type) === en.S.AUDIOBOOK
                                    ? { id: 'track-modal.audiobook-title' }
                                    : (null == e ? void 0 : e.isTrackPodcast) || (null == e || null == (t = e.mainAlbum) ? void 0 : t.isPodcast)
                                      ? { id: 'track-modal.podcast-title' }
                                      : { id: 'track-modal.title' },
                            );
                        })(eL),
                        tA = (0, x.C)(),
                        tT = !!(null == (t = eL.mainAlbum) ? void 0 : t.isNonMusic),
                        tf = (null == e$ ? void 0 : e$.id) === eL.id && (null == e$ ? void 0 : e$.albumId) === (null == (i = eL.mainAlbum) ? void 0 : i.id),
                        tI =
                            (null == e0 || null == (r = e0.meta) ? void 0 : r.listeningFinished) ||
                            (tf && (null == e$ || null == (eu = e$.streamProgress) ? void 0 : eu.hasEverFinished)) ||
                            (null == (e_ = eL.streamProgress) ? void 0 : e_.hasEverFinished),
                        tk = e9.hasPlus && eL.isAvailableForDownload,
                        tE = eV.checkExperiment(V.z.WebEditorsFeatures, 'on'),
                        th = e9.isAuthorized && eV.checkExperiment(V.z.WebNextTrackComplaintForm, 'on') && eL.isTrackMusic,
                        tC = !!(0, m.S)(null == eH ? void 0 : eH.state.currentContext.value),
                        { canRemoveTrackFromPlaylist: tO, removeTrackFromPlaylist: tN } = (0, er.s)(),
                        tb = (0, K.P)(),
                        tg = e7(null == (ev = eL.mainAlbum) ? void 0 : ev.id, null == (ep = eL.mainAlbum) ? void 0 : ep.isNonMusic),
                        { isPlaying: tS, togglePlay: tL } = (0, q.B)({
                            seeds: null != (eS = null == eL ? void 0 : eL.seeds) ? eS : [],
                            pageIdForFrom: U._Q.RADIO,
                            blockIdForFrom: td,
                            parentContextId: (null == (ey = eL.mainAlbum) ? void 0 : ey.id) ? ''.concat(eL.mainAlbum.id, ':').concat(eL.id) : eL.entityId,
                        }),
                        tj = (0, _.c)(async () => {
                            (e6 || eL.isLiked || (e4(!0), null == e2 || e2()), await tl());
                        }),
                        tR = (0, _.c)(() => {
                            if (eF && e9.isAuthorized) return void eY();
                            !tb() && (tS || tL());
                        }),
                        tD = (0, _.c)(() => {
                            if (eF && !tg) return void eY();
                            tb() || (eG.setUtmLink(ew), eG.openTrackTrailer(eL.entityId), tc(d.DomainObjectType.Track, eL.id));
                        }),
                        tP = (0, _.c)(() => {
                            var e;
                            (eW.setTrack({ id: eL.id, albumId: (null == (e = eL.mainAlbum) ? void 0 : e.id) || null, isUGC: eL.isUGC || null }),
                                e8.isOpened && e8.close(),
                                tt.open());
                        }),
                        tM = (0, _.c)(() => {
                            eL.clipIds && tA((0, l.HO)(eL.clipIds));
                        }),
                        tU = (0, _.c)(() => {
                            if (eF && e9.isAuthorized) return void eY();
                            (eJ.setTrack(eL), e8.isOpened && e8.close(), te.open());
                        }),
                        tw = (0, _.c)(() => {
                            if (eF && e9.isAuthorized) return void eY();
                            eX.isSyncLyricsMode ? eX.hideSyncLyrics() : eX.showSyncLyrics();
                        }),
                        tK = (0, _.c)(() => {
                            (null == eK || eK(), null == ej || ej(!1));
                        }),
                        tB = (0, _.c)(() => {
                            (eZ.setTrackId(eL.id), e8.isOpened && e8.close(), e3.open(), null == ej || ej(!1));
                        }),
                        // for PulseSync: BEGIN include LRCLIB results in track-menu lyrics availability
                        tz = (0, _.c)(
                            () =>
                                (eL.isSyncLyricsAvailable ||
                                    eL.isSyncLyricsAvailableWithOfflineFeature ||
                                    eL.hasSyncLyrics ||
                                    (tf && eX.syncLyrics.hasLyricsForTrack(eL.id))) &&
                                eX.modal.isOpened &&
                                tu,
                        ),
                        tF = (0, _.c)(() => (eL.isLyricsAvailable || pulseSyncLrclibEnabled) && !eX.modal.isOpened),
                        // for PulseSync: END include LRCLIB results in track-menu lyrics availability
                        tY = (0, _.c)(() => {
                            var e;
                            return (null == (e = eL.trailer) ? void 0 : e.isAvailable) && !eX.modal.isOpened && eB;
                        }),
                        {
                            withSyncLyricsItem: tH,
                            withLyricsItem: tq,
                            withTrailerItem: tW,
                        } = (0, n.useMemo)(
                            () => ({ withSyncLyricsItem: tz(), withLyricsItem: tF(), withTrailerItem: tY() }),
                            // for PulseSync: BEGIN refresh track-menu lyrics availability when LRCLIB state changes
                            [
                                tz,
                                tF,
                                tY,
                                eL.isSyncLyricsAvailable,
                                eL.isSyncLyricsAvailableWithOfflineFeature,
                                eL.hasSyncLyrics,
                                eL.isLyricsAvailable,
                                pulseSyncLrclibEnabled,
                                eX.syncLyrics.currentTrackId,
                                eX.syncLyrics.lines,
                                eX.syncLyrics.isResolved,
                                null == (ex = eL.trailer) ? void 0 : ex.isAvailable,
                            ],
                            // for PulseSync: END refresh track-menu lyrics availability when LRCLIB state changes
                        );
                    (0, H.N)(eR);
                    let tV = !tT,
                        tX = eL.isNonUserGenerated && !tT && !eV.checkExperiment(V.z.WebNextProductWithoutRecommendation, 'on'),
                        tG = !tT,
                        t$ = !tu,
                        tQ = tT && tn,
                        tZ = eL.isNonUserGenerated && (eL.albums.length || eL.mainAlbum),
                        tJ =
                            eL.isNonUserGenerated &&
                            !!(null == (eA = eL.artists) ? void 0 : eA.length) &&
                            ((null == (eT = eL.mainAlbum) ? void 0 : eT.isAudiobook) ||
                                (null == (ef = eL.mainAlbum) ? void 0 : ef.isAlbum) ||
                                eL.isTrackAudiobook ||
                                eL.isTrackMusic),
                        t0 = !tC && e$,
                        t8 = eX.isPlayQueueMode && eK && !eQ,
                        t9 = (0, A.d)() && eL.isNonUserGenerated && (null == (eI = eL.clipIds) ? void 0 : eI.length),
                        t1 = {
                            variant: X.Y.TRACK,
                            id: eL.id,
                            title: eL.title,
                            path: tv,
                            trackArtistName: null == (eE = eL.mainArtist) ? void 0 : eE.name,
                            trackArtistId: null == (eh = eL.mainArtist) ? void 0 : eh.id,
                            trackAlbumId: eL.albumId,
                        };
                    // for PulseSync WebHost: BEGIN track context and native addon menu item rendering
                    let pulseSyncTrackIdParts = String(eL.id ?? '').split(':', 2),
                        pulseSyncTrackId = pulseSyncTrackIdParts[0],
                        pulseSyncTrackAlbumId = String(eL.albums?.[0]?.id ?? eL.albumId ?? eL.mainAlbum?.id ?? pulseSyncTrackIdParts[1] ?? '').trim(),
                        pulseSyncTrackContext = pulseSyncTrackId
                            ? {
                                  id: pulseSyncTrackId,
                                  url: pulseSyncTrackAlbumId
                                      ? `/album/${encodeURIComponent(pulseSyncTrackAlbumId)}/track/${encodeURIComponent(pulseSyncTrackId)}`
                                      : `/track/${encodeURIComponent(pulseSyncTrackId)}`,
                                  ...(pulseSyncTrackAlbumId
                                      ? {
                                            albumId: pulseSyncTrackAlbumId,
                                        }
                                      : {}),
                                  ...(eL.title
                                      ? {
                                            title: String(eL.title),
                                        }
                                      : {}),
                              }
                            : void 0,
                        pulseSyncInjectTrackMenuItems = (items) =>
                            pulseSyncTrackContext
                                ? (window.pulsesyncApi?.injectNativeSlotItems?.('trackContextMenu', items, {
                                      eventDetail: pulseSyncTrackContext,
                                      renderItem: ({ key, payload, activate }) => {
                                          const label = String(payload?.label ?? '').trim(),
                                              icon = String(payload?.icon ?? '').trim();
                                          if (!label || !icon) return null;
                                          return (0, pulseSyncMenuJsx.jsx)(
                                              pulseSyncMenuItems.Dr,
                                              {
                                                  icon: (0, pulseSyncMenuJsx.jsx)(pulseSyncMenuIcons.I, {
                                                      variant: icon,
                                                      size: 'xxs',
                                                  }),
                                                  onClick: () => {
                                                      (activate(), ej(!1));
                                                  },
                                                  children: label,
                                                  'data-pulsesync-addon-menu-item': '',
                                              },
                                              key,
                                          );
                                      },
                                  }) ?? items)
                                : items;
                    // for PulseSync WebHost: END track context and native addon menu item rendering
                    return e1.isOfflineModeEnabled
                        ? (0, a.jsxs)(p.W1, {
                              isMobile: tu,
                              placement: eD,
                              offsetOptions: 10,
                              open: eR,
                              onOpenChange: ej,
                              icon: eM,
                              size: eU,
                              containerDataTestId: u.Kq.track.TRACK_CONTEXT_MENU,
                              ariaLabel: e5({ id: 'interface-actions.context-menu' }),
                              variant: 'text',
                              ...ez,
                              // for PulseSync WebHost: BEGIN inject native addon items into the compact track context menu
                              children: pulseSyncInjectTrackMenuItems([
                                  tk && (0, a.jsx)(ek, { track: eL }),
                                  eL.isNonUserGenerated && (0, a.jsx)(ee.H, { shareLink: t_, entityMeta: t1 }),
                              ]),
                              // for PulseSync WebHost: END inject native addon items into the compact track context menu
                          })
                        : (0, a.jsxs)(p.W1, {
                              isMobile: tu,
                              placement: eD,
                              offsetOptions: 10,
                              open: eR,
                              onOpenChange: ej,
                              icon: eM,
                              size: eU,
                              containerDataTestId: u.Kq.track.TRACK_CONTEXT_MENU,
                              ariaLabel: e5({ id: 'interface-actions.context-menu' }),
                              variant: 'text',
                              ...ez,
                              // for PulseSync WebHost: BEGIN inject native addon items into the track context menu
                              children: pulseSyncInjectTrackMenuItems([
                                  (0, a.jsx)(eO, { track: eL }),
                                  tu && (0, a.jsx)(el.C, { getDescriptionTexts: eL.getDescriptionTexts, entityId: eL.id }),
                                  tE && (0, a.jsx)(f.d, { entityVariant: tp, adminUrl: ty }),
                                  tT && (0, a.jsx)(ei, { onClick: to, isFinished: tI }),
                                  tV && (0, a.jsx)(Z.T, { onClick: tj, isLiked: eL.isLiked, disabled: !e9.isAuthorized }),
                                  tW && (0, a.jsx)(ea.N, { onClick: tD }),
                                  tX && (0, a.jsx)(es.C, { onClick: tR, variant: G.I.TRACK, disabled: !eL.isAvailable || (tg && tu), onOpenMenuChange: ej }),
                                  t9 &&
                                      (0, a.jsx)(p.Dr, {
                                          onClick: tM,
                                          icon: (0, a.jsx)(v.I, { variant: 'clip', size: 'xxs' }),
                                          'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_CLIP_BUTTON,
                                          children: (0, a.jsx)(c.A, { id: 'non-music.navigate-to-clip' }),
                                      }),
                                  tk && (0, a.jsx)(ek, { track: eL }),
                                  // for PulseSync: BEGIN insert the download-to-file track menu action
                                  tk && (0, a.jsx)(downloadTrackToFile, { track: eL }),
                                  // for PulseSync: END insert the download-to-file track menu action
                                  t0 &&
                                      (0, a.jsx)(p.Dr, {
                                          onClick: ta,
                                          icon: (0, a.jsx)(v.I, { variant: 'playNext', size: 'xxs' }),
                                          disabled: !e9.isAuthorized,
                                          'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU_PLAY_NEXT_BUTTON,
                                          children: (0, a.jsx)(c.A, { id: 'play-queue.play-next' }),
                                      }),
                                  t0 &&
                                      (0, a.jsx)(p.Dr, {
                                          onClick: ts,
                                          icon: (0, a.jsx)(v.I, { variant: 'playLast', size: 'xxs' }),
                                          disabled: !e9.isAuthorized,
                                          'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU_PLAY_LAST_BUTTON,
                                          children: (0, a.jsx)(c.A, { id: 'play-queue.play-last' }),
                                      }),
                                  tH &&
                                      !eX.isSyncLyricsMode &&
                                      (0, a.jsx)(p.Dr, {
                                          className: (0, s.$)({ [em().syncLyrics]: eP }),
                                          onClick: tw,
                                          icon: (0, a.jsx)(v.I, { variant: 'syncLyrics', size: 'xxs' }),
                                          disabled: !e9.isAuthorized,
                                          'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU_SHOW_SYNC_LYRICS_BUTTON,
                                          children: (0, a.jsx)(c.A, { id: 'interface-actions.open-sync-lyrics' }),
                                      }),
                                  tH &&
                                      eX.isSyncLyricsMode &&
                                      (0, a.jsx)(p.Dr, {
                                          className: (0, s.$)({ [em().syncLyrics]: eP }),
                                          onClick: tw,
                                          icon: (0, a.jsx)(v.I, { variant: 'syncLyrics', size: 'xxs' }),
                                          'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU_HIDE_SYNC_LYRICS_BUTTON,
                                          children: (0, a.jsx)(c.A, { id: 'interface-actions.hide-sync-lyrics' }),
                                      }),
                                  t8 &&
                                      (0, a.jsx)(p.Dr, {
                                          onClick: tK,
                                          icon: (0, a.jsx)(v.I, { variant: 'bucket', size: 'xxs' }),
                                          children: (0, a.jsx)(c.A, { id: 'play-queue.delete-from-queue' }),
                                      }),
                                  tG && (0, a.jsx)(Q.D, { onClick: tr, isDisliked: eL.isDisliked }),
                                  t$ && (0, a.jsx)(ed.$, { track: eL }),
                                  tq &&
                                      (0, a.jsx)(p.Dr, {
                                          disabled: !e9.isAuthorized,
                                          onClick: tU,
                                          icon: (0, a.jsx)(v.I, { variant: 'lyrics', size: 'xxs' }),
                                          'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU_LYRICS_BUTTON,
                                          children: (0, a.jsx)(c.A, { id: 'interface-actions.open-lyrics' }),
                                      }),
                                  eL.isNonUserGenerated && (0, a.jsx)(ee.H, { shareLink: t_, entityMeta: t1 }),
                                  tZ &&
                                      (null == (eC = eL.mainAlbum) ? void 0 : eC.url) &&
                                      (0, a.jsx)(J.f, { albumUrl: eL.mainAlbum.url, albumType: eL.mainAlbum.type, trackType: eL.type }),
                                  tJ && eL.artists[0] && (0, a.jsx)(ec.o, { artists: eL.artists }),
                                  tQ &&
                                      (0, a.jsx)(et.U, {
                                          onClick: tn,
                                          isLiked: null == (eN = eL.mainAlbum) ? void 0 : eN.isLiked,
                                          albumType: null == (eb = eL.mainAlbum) ? void 0 : eb.type,
                                      }),
                                  eL.isUGC && (0, a.jsx)(eo, { track: eL }),
                                  tu &&
                                      tO &&
                                      (0, a.jsx)(p.Dr, {
                                          onClick: tN,
                                          icon: (0, a.jsx)(v.I, { variant: 'bucket', size: 'xxs' }),
                                          'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU_REMOVE_TRACK_FROM_PLAYLIST_BUTTON,
                                          children: (0, a.jsx)(c.A, { id: 'playlist-actions.remove-from-playlist' }),
                                      }),
                                  !tu &&
                                      (0, a.jsx)(p.Dr, {
                                          onClick: tP,
                                          icon: (0, a.jsx)(v.I, { variant: 'info', size: 'xxs' }),
                                          'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU_ABOUT_TRACK_BUTTON,
                                          children: tx,
                                      }),
                                  th &&
                                      (0, a.jsx)(p.Dr, {
                                          onClick: tB,
                                          icon: (0, a.jsx)(v.I, { variant: 'complain', size: 'xxs' }),
                                          children: (0, a.jsx)(c.A, { id: 'interface-actions.report-problem' }),
                                      }),
                              ]),
                              // for PulseSync WebHost: END inject native addon items into the track context menu
                          });
                });
        },
        1883: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => c });
            var a = i(88800),
                s = i(88969),
                l = i(29504),
                r = i(59304),
                n = i(81261),
                o = i.n(n);
            let c = () =>
                (0, a.jsx)(r.$, {
                    message: (0, a.jsx)(l.HL, {
                        className: o().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, a.jsx)(s.A, { id: 'playlist-errors.failed-add-track-to-playlist' }),
                    }),
                });
        },
        3895: (e) => {
            e.exports = {
                message: 'PlaylistNotification_message__nEykK',
                text: 'PlaylistNotification_text__kTfi1',
                title: 'PlaylistNotification_title__Q5IKF',
                link: 'PlaylistNotification_link__HezVx',
                playlistTitle: 'PlaylistNotification_playlistTitle__HweEg',
                image: 'PlaylistNotification_image__QvYVD',
            };
        },
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => s });
            var a = i(67174);
            let s = {
                main: (0, a.u)('/'),
                chart: (0, a.u)('/chart'),
                chartPodcasts: (0, a.u)('/chart/podcasts'),
                collection: (0, a.u)('/collection'),
                collectionAlbums: (0, a.u)('/collection/albums'),
                collectionArtists: (0, a.u)('/collection/artists'),
                collectionClips: (0, a.u)('/collection/clips'),
                collectionDislikes: (0, a.u)('/collection/dislikes'),
                collectionKids: (0, a.u)('/collection/kids'),
                collectionKidsAlbums: (0, a.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, a.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, a.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, a.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, a.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, a.u)('/collection/multivibes'),
                collectionPlaylists: (0, a.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, a.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, a.u)('/collection/playlists/liked'),
                collectionShelf: (0, a.u)('/collection/shelf'),
                collectionShelfLiked: (0, a.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, a.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, a.u)('/collection/shelf/recently-played'),
                concerts: (0, a.u)('/concerts'),
                kids: (0, a.u)('/kids'),
                mixes: (0, a.u)('/mixes'),
                musicHistory: (0, a.u)('/music-history'),
                muzmarket: (0, a.u)('/muzmarket'),
                mymusic: (0, a.u)('/mymusic'),
                mymusicDownloadsTracks: (0, a.u)('/mymusic/downloads/tracks'),
                multivibe: (0, a.u)('/multivibe'),
                nonMusic: (0, a.u)('/non-music'),
                pay: (0, a.u)('/pay'),
                userSlides: (0, a.u)('/slides/user'),
                search: (0, a.u)('/search'),
                searchHistory: (0, a.u)('/search/history'),
                settings: (0, a.u)('/settings'),
                video: (0, a.u)('/video'),
            };
        },
        5279: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => h });
            var a = i(88800),
                s = i(29993),
                l = i(67318),
                r = i(62518),
                n = i(63476),
                o = i(1883),
                c = i(84961),
                d = i(53548),
                u = i(88969),
                m = i(29504),
                _ = i(72288),
                v = i(59304),
                p = i(15077),
                y = i(81877),
                x = i(91292),
                A = i(3895),
                T = i.n(A);
            let f = (0, c.PA)((e) => {
                let { entityTitle: t, entityVariant: i, entityCoverUri: l, playlist: r, closeToast: n } = e,
                    { fullscreenPlayer: o } = (0, _.g)(),
                    c = (0, s.c)(() => {
                        o.modal.isOpened && o.modal.close();
                    }),
                    A = (0, d.useMemo)(() => {
                        let e,
                            s = {
                                trackName: (0, a.jsxs)(m.HL, {
                                    className: T().title,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    lineClamp: 1,
                                    children: ['\xa0', t, '\xa0'],
                                }),
                                playlistName: (0, a.jsx)(x.N, {
                                    className: T().link,
                                    href: r.url,
                                    onClick: c,
                                    children: (0, a.jsxs)(m.HL, {
                                        className: T().playlistTitle,
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        lineClamp: 1,
                                        children: ['\xa0', r.title, '\xa0'],
                                    }),
                                }),
                            };
                        switch (i) {
                            case p.c.PODCAST_EPISODE:
                                e = (0, a.jsx)(u.A, { id: 'notifications-info.added-podcast-episode-to-playlist', values: s });
                                break;
                            case p.c.AUDIOBOOK_EPISODE:
                                e = (0, a.jsx)(u.A, { id: 'notifications-info.added-audiobook-episode-to-playlist', values: s });
                                break;
                            default:
                                e = (0, a.jsx)(u.A, { id: 'notifications-info.added-track-to-playlist', values: s });
                        }
                        return (0, a.jsx)(m.HL, { className: T().message, variant: 'div', type: 'controls', size: 'm', lineClamp: 1, children: e });
                    }, [t, i, c, r.title, r.url]);
                return (0, a.jsx)(v.$, {
                    closeToast: n,
                    message: A,
                    cover: (0, a.jsx)(y.B, { className: T().image, src: l, withAvatarReplace: !0, size: 100, fit: 'cover', alt: t }),
                    coverRadius: 's',
                });
            });
            var I = i(28661),
                k = i(29595),
                E = i(74965);
            let h = () => {
                let { notify: e } = (0, E.l)(),
                    { playlist: t, fullscreenPlayer: i } = (0, _.g)(),
                    c = (0, s.c)((s) => {
                        var l, r;
                        let { withSuccessNotification: n, withPageRefresh: o, playlist: c, track: d } = s;
                        if (n) {
                            let t = (0, I.e)(d.type);
                            e((0, a.jsx)(f, { entityTitle: d.title, entityVariant: t, entityCoverUri: null != (r = d.coverUri) ? r : '', playlist: c }), {
                                containerId: i.modal.isOpened ? k.u.FULLSCREEN_INFO : k.u.INFO,
                            });
                        }
                        o && c.uuid === (null == (l = t.meta) ? void 0 : l.uuid) && t.refresh();
                    }),
                    d = (0, s.c)((t) => {
                        let { withFailNotification: s } = t;
                        s && e((0, a.jsx)(o.p, {}), { containerId: i.modal.isOpened ? k.u.FULLSCREEN_ERROR : k.u.ERROR });
                    });
                return (0, s.c)(async (e) => {
                    var t;
                    let { playlist: i, track: a, withSuccessNotification: s = !0, withFailNotification: o = !0, withPageRefresh: u = !0 } = e,
                        // for PulseSync: BEGIN choose the playlist insertion position from the append-to-end preference
                        p = 'undefined' != typeof window && window.nativeSettings?.get('modSettings.playlist.addTracksToEndFromContextMenu') === !0,
                        v = null != i.tracksCount ? i.tracksCount : null != i.trackCount ? i.trackCount : null == i ? void 0 : i.meta?.tracksCount,
                        h = null != v ? v : null == i ? void 0 : i.meta?.trackCount,
                        g = p ? Number(null != h ? h : Array.isArray(i.tracks) ? i.tracks.length : 0) || 0 : 0,
                        // for PulseSync: END choose the playlist insertion position from the append-to-end preference
                        m = await i.changePlaylist(
                            // for PulseSync: BEGIN insert the track at the configured playlist position
                            (0, r.M)({ operation: n.y.INSERT, position: g, tracks: [{ id: a.id, albumId: null == (t = a.mainAlbum) ? void 0 : t.id }] }),
                            // for PulseSync: END insert the track at the configured playlist position
                        );
                    return (m === l.Y.OK ? c({ withSuccessNotification: s, withPageRefresh: u, playlist: i, track: a }) : d({ withFailNotification: o }), m);
                });
            };
        },
        6667: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => s });
            var a = i(72288);
            function s(e) {
                let { withCustomTooltip: t } = e,
                    {
                        settings: { isMobile: i, browserInfo: s },
                    } = (0, a.g)();
                return ((e) => {
                    let { withCustomTooltip: t, isMobile: i, browserInfo: a } = e;
                    return !((null == a ? void 0 : a.name) === 'Safari' || i) && t;
                })({ withCustomTooltip: t, isMobile: i, browserInfo: s });
            }
        },
        7608: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => o });
            var a = i(62837),
                s = i(34126),
                l = i(98644),
                r = i(17387),
                n = i(69553);
            let o = (e, t) => {
                var i;
                let { isMobile: o, isOfflineModeEnabled: c, albumArtists: d, withTrackLink: u, withArtistLink: m, variant: _, withExplicitMark: v, query: p } = t,
                    y = (0, n.q)(e, { withLink: u, isMobile: o, isOfflineModeEnabled: c, query: p }),
                    x = (0, r.s)(null == (i = e.artists) ? void 0 : i.slice(), d),
                    A = (0, s.X)(e.trackSource, { withLink: m, isMobile: _ === l.X.ALBUM && o }),
                    T = (null == v || v) && e.disclaimers ? (0, a.DQ)(e.disclaimers) : null;
                return { ...y, artists: x, withArtistLink: A, explicitMark: T };
            };
        },
        8990: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var a = i(88800),
                s = i(65724),
                l = i(53548),
                r = i(68870),
                n = i.n(r);
            let o = (e) => {
                    let { className: t, children: i, forwardRef: l, onClick: r, ...o } = e;
                    return (0, a.jsx)('div', { ref: l, onClick: r, className: (0, s.$)(n().root, t), ...o, children: i });
                },
                c = (0, l.forwardRef)((e, t) => (0, a.jsx)(o, { forwardRef: t, ...e }));
        },
        11105: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { O: () => a }),
                (function (e) {
                    ((e.RADIO_STARTED = 'radioStarted'),
                        (e.TRACK_STARTED = 'trackStarted'),
                        (e.TRACK_FINISHED = 'trackFinished'),
                        (e.SKIP = 'skip'),
                        (e.SKIP_FAILED = 'skipFailed'),
                        (e.LIKE = 'like'),
                        (e.DISLIKE = 'dislike'),
                        (e.AD = 'ad'),
                        (e.JINGLE = 'jingle'),
                        (e.UNLIKE = 'unlike'),
                        (e.UNDISLIKE = 'undislike'),
                        (e.COMBINED_QUEUE_STARTED = 'combinedQueueStarted'),
                        (e.PLAYABLE_ITEM_STARTED = 'playableItemStarted'),
                        (e.PLAYABLE_ITEM_FINISHED = 'playableItemFinished'),
                        (e.PLAYABLE_ITEM_SKIP = 'playableItemSkip'),
                        (e.PLAYABLE_ITEM_LIKE = 'playableItemLike'),
                        (e.PLAYABLE_ITEM_DISLIKE = 'playableItemDislike'),
                        (e.PLAYABLE_ITEM_UNLIKE = 'playableItemUnlike'),
                        (e.PLAYABLE_ITEM_UNDISLIKE = 'playableItemUndislike'));
                })(a || (a = {})));
        },
        11325: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'PlayButtonWithCover_root__s6Orw',
                coverImage: 'PlayButtonWithCover_coverImage__DhS1R',
                cover: 'PlayButtonWithCover_cover__5__Ms',
                playingAnimation: 'PlayButtonWithCover_playingAnimation__HWuOW',
                control: 'PlayButtonWithCover_control__iZy3t',
                playButton: 'PlayButtonWithCover_playButton__rV9pQ',
                playButton_loading: 'PlayButtonWithCover_playButton_loading__bqydK',
                'applying-setting': 'PlayButtonWithCover_applying-setting__ZvViA',
                root_current: 'PlayButtonWithCover_root_current__2QYEm',
                root_playing: 'PlayButtonWithCover_root_playing__tAgph',
                root_disabled: 'PlayButtonWithCover_root_disabled__EHoIx',
                root_disliked: 'PlayButtonWithCover_root_disliked__FoWzV',
                spinner: 'PlayButtonWithCover_spinner__ryn04',
                playButtonIcon: 'PlayButtonWithCover_playButtonIcon__DRjkN',
            };
        },
        12079: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => v });
            var a = i(88800),
                s = i(53548),
                l = i(2058),
                r = i(67318),
                n = i(62518),
                o = i(54915),
                c = i(63476),
                d = i(29595),
                u = i(74965),
                m = i(72288),
                _ = i(66943);
            let v = () => {
                let { playlist: e, trackIndex: t } = (0, s.useContext)(o.x) || {},
                    { notify: i } = (0, u.l)(),
                    { playlist: v } = (0, m.g)(),
                    { formatMessage: p } = (0, l.A)(),
                    y = (0, s.useCallback)(async () => {
                        let s = !1;
                        if (
                            (e &&
                                'number' == typeof t &&
                                (await e.changePlaylist((0, n.M)({ operation: c.y.DELETE, startPosition: t, endPosition: t + 1 }))) === r.Y.OK &&
                                (s = !0),
                            s)
                        ) {
                            if (e && 'number' == typeof t) {
                                var l;
                                e.uuid === (null == (l = v.meta) ? void 0 : l.uuid) && (v.removeTracksFromItems(t, 1), v.search.setFocus());
                            }
                        } else i((0, a.jsx)(_.h, { error: p({ id: 'playlist-errors.failed-to-remove-track' }) }), { containerId: d.u.ERROR });
                    }, [e, t, v, i, p]);
                return { canRemoveTrackFromPlaylist: !!(null == e ? void 0 : e.canUserChange), removeTrackFromPlaylist: y };
            };
        },
        12241: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => a });
            let a = (0, i(53548).createContext)({ sourceContextData: null });
        },
        16717: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => r });
            var a = i(4370),
                s = i(34303),
                l = i(67174);
            let r = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: i } = (0, l.u)(a.Z.video.href, { query: { [s.K.IDS]: e.join(','), [s.K.ACTIVE_INDEX]: String(t) } });
                return i;
            };
        },
        17055: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => s });
            var a = i(44349);
            function s(e) {
                return (null == e ? void 0 : e.data.type) === a.R.Music;
            }
        },
        17387: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => s });
            var a = i(51235);
            let s = (e, t) => {
                var i, s, l;
                if (!e) return [];
                if (null == (s = e[0]) || null == (i = s.decomposed) ? void 0 : i.length) return e;
                let r = null != (l = null == t ? void 0 : t.map((e) => e.id).sort()) ? l : [],
                    n = e.map((e) => e.id).sort();
                return (0, a.A)(r, n) ? [] : e.filter((e) => !e.various);
            };
        },
        18610: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => s });
            var a = i(53548);
            let s = () =>
                (0, a.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.pushState(t, '', e);
                    }
                }, []);
        },
        20584: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { h: () => a }),
                (function (e) {
                    ((e.BASED_ON_ENTITY_BY_DEFAULT = 'BASED_ON_ENTITY_BY_DEFAULT'),
                        (e.USER_TRACKS = 'USER_TRACKS'),
                        (e.DOWNLOADED_TRACKS = 'DOWNLOADED_TRACKS'),
                        (e.SEARCH = 'SEARCH'),
                        (e.MUSIC_HISTORY = 'MUSIC_HISTORY'),
                        (e.MUSIC_HISTORY_SEARCH = 'MUSIC_HISTORY_SEARCH'),
                        (e.ARTIST_MY_COLLECTION = 'ARTIST_MY_COLLECTION'),
                        (e.ARTIST_FAMILIAR_FROM_WAVE = 'ARTIST_FAMILIAR_FROM_WAVE'));
                })(a || (a = {})));
        },
        21416: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => n });
            var a = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            s = '';
                                        if ('string' == typeof t || 'number' == typeof t) s += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (s && (s += ' '), (s += a));
                                            else for (i in t) t[i] && (s && (s += ' '), (s += i));
                                        return s;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (i.r(t), i.d(t, { clsx: () => a, default: () => s }));
                        let s = a;
                    },
                    2059: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root: 'i0E_2NX4cuGTUSRVsza3',
                            rotate: 'SMKp_W9v6gety5k24_TU',
                            root_size_xxxs: 'OSqyMcSTAjYqzIL992Yw',
                            root_size_xxs: 'wc4asYHkCHxWpvH_vfHV',
                            root_size_xs: '_EehQphkMVEVJTlcOqgz',
                            root_size_s: 'R_2xF0Onip_K0GrDRV97',
                            root_size_m: 'tQV7pWeuTErBtRna7Fxx',
                            root_size_l: 'OJsrGLXpsIsmbj65C9AC',
                            root_size_xl: 'Vo4fBR82NKcVtfQCh508',
                            root_size_xxl: 'F45u5jR26w00BDX1OFHX',
                            gradient: 'xNNiKSvH1JTxlAkvyDlr',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var s = null;
                            if ((void 0 !== a && (s = '' + a), void 0 !== t.key && (s = '' + t.key), 'key' in t))
                                for (var l in ((a = {}), t)) 'key' !== l && (a[l] = t[l]);
                            else a = t;
                            return { $$typeof: i, type: e, key: s, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7279: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Spinner = void 0));
                        let s = i(4377),
                            l = i(5881),
                            r = a(i(2059));
                        t.Spinner = (e) => {
                            let { className: t, thicknessSizeRatio: i = 0.1, paddingSizeRatio: a = 0.08, size: n, ...o } = e,
                                c = 100 * i,
                                d = 50 - c / 2 - 100 * a,
                                u = ((3 * Math.PI) / 2) * d;
                            return (0, s.jsxs)('svg', {
                                viewBox: '0 0 '.concat(100, ' ').concat(100),
                                className: (0, l.clsx)(r.default.root, r.default['root_size_'.concat(n)], t),
                                'aria-hidden': !0,
                                ...o,
                                children: [
                                    (0, s.jsx)('defs', {
                                        children: (0, s.jsx)('mask', {
                                            id: 'mask',
                                            maskContentUnits: 'userSpaceOnUse',
                                            children: (0, s.jsx)('circle', {
                                                cx: 50,
                                                cy: 50,
                                                r: d,
                                                stroke: 'white',
                                                strokeLinecap: 'round',
                                                strokeWidth: c,
                                                strokeDasharray: u,
                                                fill: 'none',
                                            }),
                                        }),
                                    }),
                                    (0, s.jsx)('foreignObject', {
                                        x: '0',
                                        y: '0',
                                        width: 100,
                                        height: 100,
                                        mask: 'url(#mask)',
                                        children: (0, s.jsx)('div', { className: r.default.gradient }),
                                    }),
                                ],
                            });
                        };
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var i = (s[e] = { exports: {} });
                return (a[e].call(i.exports, i, i.exports, l), i.exports);
            }
            ((l.d = (e, t) => {
                for (var i in t) l.o(t, i) && !l.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var r = {};
            (() => {
                (Object.defineProperty(r, 'X', { value: !0 }), (r.$ = void 0));
                var e = l(7279);
                Object.defineProperty(r, '$', {
                    enumerable: !0,
                    get: function () {
                        return e.Spinner;
                    },
                });
            })();
            var n = r.$;
            r.X;
        },
        26401: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => _ });
            var a = i(88800),
                s = i(29993),
                l = i(7123),
                r = i(29595),
                n = i(74965),
                o = i(9630),
                c = i(72288),
                d = i(87528),
                u = i(28661),
                m = i(79546);
            function _(e, t, i) {
                let { notify: _ } = (0, n.l)(),
                    { fullscreenPlayer: v } = (0, c.g)(),
                    p = (0, o.e)(),
                    y = (0, u.e)(null == e ? void 0 : e.type);
                return (0, s.c)(() => {
                    if (!e) return;
                    let s = t === m.N.LAST || t === m.N.NEXT,
                        n = s ? i : void 0,
                        o = s ? void 0 : i;
                    switch (t) {
                        case m.N.LAST:
                            null == p || p.injectLast({ entitiesData: [{ type: l.z4.Unloaded, meta: { id: e.entityId } }], sourceContextData: n });
                            break;
                        case m.N.NEXT:
                            null == p || p.injectNext({ entitiesData: [{ type: l.z4.Unloaded, meta: { id: e.entityId } }], sourceContextData: n });
                            break;
                        case m.N.REMOVE:
                            o && (null == p || p.removeAndLoadEntities({ positions: o }));
                            break;
                        case m.N.HIDE:
                            (null == o ? void 0 : o.length) && (null == p || p.hide({ positions: o }));
                    }
                    let c = v.modal.isOpened ? r.u.FULLSCREEN_INFO : r.u.INFO;
                    _((0, a.jsx)(d.l, { entityVariant: y, variant: t, entityTitle: e.title, coverUri: e.coverUri }), { containerId: c });
                });
            }
        },
        28661: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var a = i(54667),
                s = i(15077);
            let l = (e) => {
                switch (e) {
                    case a.S.PODCAST:
                        return s.c.PODCAST_EPISODE;
                    case a.S.AUDIOBOOK:
                        return s.c.AUDIOBOOK_EPISODE;
                    default:
                        return s.c.TRACK;
                }
            };
        },
        29831: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => s });
            var a = i(48987);
            let s = (e, t) => {
                let { seconds: i, hours: s, minutes: l } = (0, a.e)(e);
                return t({ id: 'time.hours-minutes-seconds' }, { hours: s, minutes: l, seconds: i });
            };
        },
        31633: (e) => {
            e.exports = { syncLyrics: 'TrackContextMenu_syncLyrics___CDVn' };
        },
        33139: (e, t, i) => {
            'use strict';
            i.d(t, { o: () => A });
            var a = i(88800),
                s = i(84961),
                l = i(2058),
                r = i(17392),
                n = i(52300),
                o = i(19934),
                c = i(59927),
                d = i(40634),
                u = i(72288),
                m = i(88969),
                _ = i(29993),
                v = i(78940),
                p = i(31633),
                y = i.n(p);
            let x = (0, s.PA)((e) => {
                    let { className: t, artist: i, ...s } = e,
                        { fullscreenPlayer: l } = (0, u.g)(),
                        r = (0, v.Z)(i.url),
                        c = (0, _.c)((e) => {
                            (r(e), l.modal.close());
                        });
                    return (0, a.jsx)(o.Dr, {
                        className: t,
                        onClick: c,
                        icon: (0, a.jsx)(n.I, { className: y().navigateToAlbumIcon, variant: 'artist', size: 'xxs' }),
                        ...s,
                        children: (0, a.jsx)(m.A, { id: 'interface-actions.navigate-to-artist' }),
                    });
                }),
                A = (0, s.PA)((e) => {
                    let { className: t, artists: i } = e,
                        {
                            settings: { isMobile: s },
                        } = (0, u.g)(),
                        { formatMessage: m } = (0, l.A)();
                    return 1 === (0, c.A)(null != i ? i : []) && i[0]
                        ? (0, a.jsx)(x, { className: t, artist: i[0], 'data-test-id': r.Kq.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_ARTIST })
                        : (0, a.jsx)(o.W1, {
                              isMobile: s,
                              icon: (0, a.jsx)(n.I, { variant: 'artist', size: 'xxs' }),
                              label: m({ id: 'interface-actions.navigate-to-artists' }),
                              ariaLabel: m({ id: 'interface-actions.navigate-to-artists' }),
                              className: t,
                              'data-test-id': r.Kq.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_ARTIST,
                              children: i.map((e) => (0, a.jsx)(d.V, { artist: e }, e.id)),
                          });
                });
        },
        34126: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => s });
            var a = i(70565);
            let s = (e, t) => {
                var i, s;
                let l = null == (i = null == t ? void 0 : t.withLink) || i,
                    r = null != (s = null == t ? void 0 : t.isMobile) && s,
                    { isNonUserGenerated: n } = (0, a.I)(e);
                return l && !r && n;
            };
        },
        34303: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => a });
            var a = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.URL = 'url'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
        34945: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => o });
            var a = i(88800),
                s = i(65724),
                l = i(17392),
                r = i(97811),
                n = i.n(r);
            let o = (e) => {
                let { className: t, stopAnimation: i } = e;
                return (0, a.jsx)('div', { className: (0, s.$)(n().root, { [n().root_stopAnimation]: i }, t), 'data-test-id': l.S7.PLAYING_ANIMATION });
            };
        },
        34979: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => p });
            var a = i(88800),
                s = i(84961),
                l = i(53548),
                r = i(88969),
                n = i(17392),
                o = i(61691),
                c = i(54667),
                d = i(29993),
                u = i(52300),
                m = i(19934),
                _ = i(78940),
                v = i(72288);
            let p = (0, s.PA)((e) => {
                let { className: t, albumType: i, albumUrl: s, trackType: p } = e,
                    { fullscreenPlayer: y } = (0, v.g)(),
                    x = (0, _.Z)(s),
                    A = (0, l.useMemo)(() => {
                        switch (i) {
                            case o._.AUDIOBOOK:
                                return (0, a.jsx)(r.A, { id: 'non-music.navigate-to-book-album' });
                            case o._.ALBUM:
                            case o._.SINGLE:
                                return (0, a.jsx)(r.A, { id: 'interface-actions.navigate-to-album' });
                            case o._.PODCAST:
                                return (0, a.jsx)(r.A, { id: 'non-music.navigate-to-podcast-album' });
                            default:
                                return null;
                        }
                    }, [i]),
                    T = (0, l.useMemo)(() => {
                        switch (p) {
                            case c.S.AUDIOBOOK:
                                return (0, a.jsx)(r.A, { id: 'non-music.navigate-to-book-album' });
                            case c.S.TRACK:
                            case c.S.MUSIC:
                                return (0, a.jsx)(r.A, { id: 'interface-actions.navigate-to-album' });
                            case c.S.PODCAST:
                                return (0, a.jsx)(r.A, { id: 'non-music.navigate-to-podcast-album' });
                            default:
                                return null;
                        }
                    }, [p]),
                    f = (0, d.c)(() => {
                        (x(), y.modal.close());
                    }),
                    I = (0, l.useMemo)(
                        () =>
                            i ? ([o._.ALBUM, o._.SINGLE].includes(i) ? 'album' : 'podcasts') : p ? ([c.S.TRACK, c.S.MUSIC].includes(p) ? 'album' : 'podcasts') : 'album',
                        [i, p],
                    );
                return A || T
                    ? (0, a.jsx)(m.Dr, {
                          className: t,
                          onClick: f,
                          icon: (0, a.jsx)(u.I, { variant: I, size: 'xxs' }),
                          'data-test-id': n.Kq.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_ALBUM,
                          children: A || T,
                      })
                    : null;
            });
        },
        36702: (e) => {
            e.exports = {
                root: 'DownloadingProgress_root__2Wsc5',
                cancelIcon: 'DownloadingProgress_cancelIcon__Eq2uD',
                progressBar: 'DownloadingProgress_progressBar__ajbBU',
            };
        },
        38501: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => s });
            var a = i(72288);
            let s = () => {
                let {
                    settings: { isMobile: e },
                } = (0, a.g)();
                return !e;
            };
        },
        39267: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => A });
            var a = i(88800),
                s = i(65724),
                l = i(84961),
                r = i(53548),
                n = i(2058),
                o = i(17392),
                c = i(7555),
                d = i(21416),
                u = i(72288),
                m = i(81877),
                _ = i(16704),
                v = i(34945),
                p = i(11325),
                y = i.n(p);
            let x = (0, l.PA)((e) => {
                    let {
                            className: t,
                            isAvailable: i,
                            isDisliked: l,
                            coverUri: r,
                            title: p,
                            onPlayButtonClick: x,
                            isPlaying: A,
                            isCurrent: T,
                            radius: f,
                            isPlayButtonLoading: I,
                            isLoading: k,
                            shouldShowControl: E = !0,
                            ariaDescribedBy: h,
                            ignoreDislikedStyles: C,
                            entityCoverStyle: O,
                            forwardRef: N,
                            playButtonIconSize: b = 'xs',
                            alt: g,
                            withLoadingIndicator: S,
                            coverClassName: L,
                            entityCoverClassName: j,
                            controlClassName: R,
                            fallbackIconSize: D = 'xs',
                        } = e,
                        { formatMessage: P } = (0, n.A)(),
                        {
                            settings: { isMobile: M },
                        } = (0, u.g)();
                    return (0, a.jsx)('div', {
                        className: (0, s.$)(y().root, t, { [y().root_disabled]: !i, [y().root_current]: T, [y().root_disliked]: l && !C, [y().root_playing]: A }),
                        'data-test-id': o.S7.PLAY_BUTTON_WITH_COVER,
                        children: (0, a.jsxs)(c.t, {
                            className: (0, s.$)(y().cover, L),
                            radius: f,
                            children: [
                                (0, a.jsx)(m.B, {
                                    className: (0, s.$)(y().coverImage, j),
                                    src: r,
                                    size: 100,
                                    alt: null != g ? g : P({ id: 'entity-names.track-name' }, { trackName: p }),
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    isAvailable: i,
                                    fallbackIconSize: D,
                                    style: O,
                                    withLoadingIndicator: S,
                                }),
                                E &&
                                    (0, a.jsxs)('div', {
                                        className: (0, s.$)(y().control, R),
                                        children: [
                                            !k && (0, a.jsx)(v.P, { stopAnimation: !A, className: y().playingAnimation }),
                                            k && M && (0, a.jsx)(d.y, { size: 'xs', className: y().spinner }),
                                            !M &&
                                                (0, a.jsx)(_.D, {
                                                    ref: N,
                                                    variant: 'filled',
                                                    className: (0, s.$)(y().playButton, { [y().playButton_loading]: I }),
                                                    iconClassName: y().playButtonIcon,
                                                    isPlaying: A,
                                                    onClick: x,
                                                    iconSize: b,
                                                    ariaDescribedBy: h,
                                                    disabled: !i,
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    });
                }),
                A = (0, r.forwardRef)((e, t) => (0, a.jsx)(x, { forwardRef: t, ...e }));
        },
        39344: (e) => {
            e.exports = {
                divider: 'ContextMenuPlaylistsList_divider__JREhp',
                root: 'ContextMenuPlaylistsList_root__Greny',
                listPlaylist: 'ContextMenuPlaylistsList_listPlaylist__0oWLm',
                shimmerEndItem: 'ContextMenuPlaylistsList_shimmerEndItem__1K0_w',
                favouritesPlaylistItem: 'ContextMenuPlaylistsList_favouritesPlaylistItem__qYrTR',
                icon: 'ContextMenuPlaylistsList_icon__Fhxnh',
            };
        },
        40700: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => s });
            var a = i(18593);
            function s(e) {
                return (null == e ? void 0 : e.data.type) === a.K.Generative;
            }
        },
        41925: (e, t, i) => {
            'use strict';
            (i.d(t, { C: () => s }), i(30282));
            var a = i(29993);
            let s = (e) => {
                let { onCmdCtrlClick: t, onClick: i } = e;
                return (0, a.c)((e) => {
                    (null != e && e.metaKey) || (null != e && e.ctrlKey) || (null != e && e.shiftKey) || null == i || i(e);
                });
            };
        },
        42174: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => x });
            var a = i(88800),
                s = i(2058),
                l = i(29993),
                r = i(29595),
                n = i(74965),
                o = i(72288),
                c = i(66943),
                d = i(96706),
                u = i(53548),
                m = i(188),
                _ = i(79390),
                v = i(11105),
                p = i(9630),
                y = i(65654);
            let x = (e) => {
                let { user: t, fullscreenPlayer: i } = (0, o.g)(),
                    { notify: x } = (0, n.l)(),
                    { formatMessage: A } = (0, s.A)(),
                    T = (() => {
                        let { notify: e } = (0, n.l)(),
                            [t, i] = (0, u.useState)(!1),
                            { formatMessage: r } = (0, s.A)(),
                            o = (0, p.e)();
                        return (0, l.c)(async (s) => {
                            let { track: l, withLink: n = !0, infoContainerId: u, errorContainerId: p, withNotification: x = !0, playbackId: A } = s;
                            if (t) return;
                            let T = { ...(0, d.HO)(l), isLiked: !l.isLiked };
                            i(!0);
                            let f = await l.toggleLike();
                            if ((i(!1), f === _.f.OK)) {
                                let e = T.isLiked ? v.O.LIKE : v.O.UNLIKE,
                                    t = null == o ? void 0 : o.getState(A);
                                if (t && (0, m.i)(null == t ? void 0 : t.currentContext.value)) {
                                    let i = t.queueState.entityList.value.find((e) => {
                                        let { entity: t } = e;
                                        return t.data.meta.id === T.id;
                                    });
                                    i && t.currentContext.value.sendFeedback({ type: e, entity: i.entity });
                                }
                            }
                            x &&
                                (f === _.f.OK
                                    ? e((0, a.jsx)(y.T, { withLink: n, track: T }), { containerId: u })
                                    : e((0, a.jsx)(c.h, { error: r({ id: 'error-messages.error-during-action' }) }), { containerId: p }));
                        });
                    })();
                return (0, l.c)(async () => {
                    if (!e) return;
                    let s = i.modal.isOpened ? r.u.FULLSCREEN_INFO : r.u.INFO,
                        l = i.modal.isOpened ? r.u.FULLSCREEN_ERROR : r.u.ERROR;
                    return t.isAuthorized
                        ? T({ track: e, errorContainerId: l, infoContainerId: s })
                        : void x((0, a.jsx)(c.h, { error: A({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l });
                });
            };
        },
        43522: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            let a = () => new URL(window.location.href).searchParams;
        },
        44318: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => n });
            var a = i(29993),
                s = i(72288),
                l = i(18610),
                r = i(16717);
            let n = () => {
                let { fullscreenVideoPlayer: e } = (0, s.g)(),
                    t = (0, l.p)();
                return (0, a.c)(function (i) {
                    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    (e.setIds(i), e.setClipIndex(a), t((0, r.J)(i, a)), e.modal.open());
                });
            };
        },
        44349: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { R: () => a }),
                (function (e) {
                    ((e.Music = 'music'),
                        (e.DownloadedMusic = 'downloadedMusic'),
                        (e.VibeTrack = 'vibeTrack'),
                        (e.Generative = 'generative'),
                        (e.Unknown = 'unknown'),
                        (e.SmartPreview = 'smartPreview'),
                        (e.Clip = 'clip'),
                        (e.Radio = 'fm_radio'));
                })(a || (a = {})));
        },
        46054: (e) => {
            e.exports = { shimmer: 'ContextMenuPlaylistItemShimmer_shimmer__bQ2Yb' };
        },
        48416: (e) => {
            e.exports = { menu: 'ContextSubMenuAddToPlaylist_menu__76MDp' };
        },
        48987: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => a });
            let a = (e) => {
                let t = Math.round(e);
                return { hours: Math.floor(t / 3600), minutes: Math.floor((t % 3600) / 60), seconds: t % 60 };
            };
        },
        51888: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s, d: () => a });
            let a = (e) => String(e).split(':'),
                s = (e, t) => (t ? [e, t].join(':') : e);
        },
        52073: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => s });
            var a = {};
            (Object.defineProperty(a, '__esModule', { value: !0 }),
                (a.createRipple = void 0),
                (a.createRipple = function (e, t, i) {
                    let a = null != i ? i : e.currentTarget,
                        s = document.createElement('span'),
                        l = Math.max(a.clientWidth, a.clientHeight),
                        r = l / 2,
                        n = a.getBoundingClientRect(),
                        o = 0 === e.clientX ? Math.round(n.width / 2) : e.clientX - n.left,
                        c = 0 === e.clientY ? Math.round(n.height / 2) : e.clientY - n.top;
                    ((s.style.width = ''.concat(l, 'px')),
                        (s.style.height = ''.concat(l, 'px')),
                        (s.style.left = 0 === e.clientX ? '0px' : ''.concat(o - r, 'px')),
                        (s.style.top = ''.concat(c - r, 'px')),
                        s.classList.add(t));
                    let d = a.getElementsByClassName(t)[0];
                    (d && d.remove(), a.insertBefore(s, a.firstChild));
                }),
                a.__esModule);
            var s = a.createRipple;
        },
        54272: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__R2jfZ',
                text: 'NotificationDislike_text__xmrnn',
                cover: 'NotificationDislike_cover__bvqFM',
                image: 'NotificationDislike_image__h0_EO',
            };
        },
        54667: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { S: () => a }),
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
                })(a || (a = {})));
        },
        54915: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => a });
            let a = (0, i(53548).createContext)(null);
        },
        54965: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => s });
            let a = (e, t) => (t > 0 ? Math.floor(e / t) : 0),
                s = (e, t) => {
                    let i = a(e, 3600),
                        s = a(e - 3600 * i, 60),
                        l = e - 3600 * i - 60 * s,
                        r = a(t || e, 3600) > 0,
                        n = [s, l];
                    return (r && n.unshift(i), n.map((e) => String(e).padStart(2, '0')).join(':'));
                };
        },
        56117: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var a = i(88800),
                s = i(84961),
                l = i(88969),
                r = i(17392),
                n = i(52300),
                o = i(19934),
                c = i(72288);
            let d = (0, s.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: s, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, a.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, a.jsx)(n.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: s || !u.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, a.jsx)(l.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        58977: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => a });
            let a = 'offline';
        },
        59927: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => a });
            let a = (e) =>
                e.reduce(
                    (e, t) =>
                        e +
                        1 +
                        ((e) => {
                            var t;
                            return null != (t = null == e ? void 0 : e.length) ? t : 0;
                        })(t.decomposed),
                    0,
                );
        },
        60385: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { L: () => a }),
                (function (e) {
                    ((e.PUBLIC = 'public'), (e.PRIVATE = 'private'));
                })(a || (a = {})));
        },
        62518: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => s });
            var a = i(35412);
            let s = (e) => {
                let { operation: t, position: i, startPosition: s, endPosition: l, tracks: r } = e,
                    n = ((e) =>
                        Object.keys(e)
                            .filter((t) => void 0 !== e[t])
                            .reduce((t, i) => ((t[i] = e[i]), t), {}))({ op: t, at: i, from: s, to: l, tracks: r });
                return (0, a.Gr)([n]);
            };
        },
        63476: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => a });
            var a = (function (e) {
                return ((e.INSERT = 'insert'), (e.DELETE = 'delete'), (e.MOVE = 'move'), e);
            })({});
        },
        63584: (e) => {
            e.exports = {
                entityTitle: 'NotificationPlayQueue_entityTitle__XCIsa',
                entityLink: 'NotificationPlayQueue_entityLink__O7tHL',
                text: 'NotificationPlayQueue_text___1DWX',
                image: 'NotificationPlayQueue_image__SLXsp',
            };
        },
        63698: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var a = i(67174);
            let s = (e, t, i) =>
                (0, a.u)(t ? '/album/:albumId/track/:trackId' : '/track/:trackId', { params: t ? { albumId: t, trackId: e } : { trackId: e }, query: i });
        },
        65462: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                artistCaption: 'Meta_artistCaption__JESZi',
                link: 'Meta_link__IFDBA',
                albumTitle: 'Meta_albumTitle__mHeOs',
                root: 'Meta_root__R8n1h',
                root_withSecondaryColor: 'Meta_root_withSecondaryColor___uENY',
                root_disabled: 'Meta_root_disabled__Dpx_M',
                albumLink: 'Meta_albumLink__gASh6',
                artists: 'Meta_artists__VnR52',
                explicitMark: 'Meta_explicitMark__ocnCV',
                title: 'Meta_title__GGBnH',
                titleContainer: 'Meta_titleContainer__gDuXr',
                version: 'Meta_version__c2sHU',
                root_disliked: 'Meta_root_disliked__DrZ7_',
                text: 'Meta_text__Y5uYH',
                explicitMarkContainer: 'Meta_explicitMarkContainer__BxMQg',
                metaContainer: 'Meta_metaContainer__7i2dp',
                titleContainer_withVersion: 'Meta_titleContainer_withVersion__n7MdY',
            };
        },
        65654: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => c });
            var a = i(88800),
                s = i(84961),
                l = i(42729),
                r = i(28661),
                n = i(54667),
                o = i(4370);
            let c = (0, s.PA)((e) => {
                let { track: t, closeToast: i, withLink: s } = e,
                    c = ((e) => {
                        switch (e) {
                            case n.S.PODCAST:
                            case n.S.AUDIOBOOK:
                                return o.Z.collectionShelfLiked.href;
                            default:
                                return o.Z.collection.href;
                        }
                    })(t.type),
                    d = (0, r.e)(t.type);
                return (0, a.jsx)(l.O, {
                    closeToast: i,
                    entityVariant: d,
                    entityTitle: t.title,
                    collectionUrl: c,
                    coverUri: t.coverUri,
                    isLiked: t.isLiked,
                    withLink: s,
                });
            });
        },
        67318: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => a });
            var a = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), (e.RELOAD = 'reload'), e);
            })({});
        },
        67699: (e) => {
            e.exports = { ugcLabel: 'TrackContextMenuHeader_ugcLabel__k7hmv' };
        },
        68254: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => c });
            var a,
                s = i(53548),
                l = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            s = '';
                                        if ('string' == typeof t || 'number' == typeof t) s += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (s && (s += ' '), (s += a));
                                            else for (i in t) t[i] && (s && (s += ' '), (s += i));
                                        return s;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (i.r(t), i.d(t, { clsx: () => a, default: () => s }));
                        let s = a;
                    },
                    1069: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            wrapper: 'EOWonrlAZfCxgDQrLIdO',
                            fullCircle: 'TNOA7GEcjPELn4mw8Zjz',
                            progressCircle: 'LyZUu89TXyP3Jmnxrn9r',
                            progressCircle_withRoundStroke: 'meplzQA7jf7cO_eu_HlZ',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var s = null;
                            if ((void 0 !== a && (s = '' + a), void 0 !== t.key && (s = '' + t.key), 'key' in t))
                                for (var l in ((a = {}), t)) 'key' !== l && (a[l] = t[l]);
                            else a = t;
                            return { $$typeof: i, type: e, key: s, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    284: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CircleProgress = void 0));
                        let s = i(4377),
                            l = i(810),
                            r = i(5881),
                            n = a(i(1069));
                        t.CircleProgress = (e) => {
                            let {
                                    className: t,
                                    value: i,
                                    max: a = 100,
                                    size: o = 14,
                                    strokeWidth: c = 2,
                                    withRoundStroke: d,
                                    'aria-valuetext': u,
                                    'aria-busy': m,
                                    progressCircleClassName: _,
                                    fullCircleClassName: v,
                                    ...p
                                } = e,
                                y = (o - c) / 2,
                                x = y + c / 2,
                                A = 2 * Math.PI * y,
                                T = 0.25 * A,
                                f = (0, l.useMemo)(() => {
                                    let e = Math.max(Math.min(i, a), 0) / a;
                                    return ''.concat(e * A, ' ').concat((1 - e) * A);
                                }, [a, i, A]);
                            return (0, s.jsx)('div', {
                                'aria-busy': m,
                                className: t,
                                'aria-valuetext': u,
                                role: 'progressbar',
                                'aria-valuemin': 0,
                                'aria-valuemax': a,
                                'aria-valuenow': i,
                                'data-test-id': p['data-test-id'],
                                children: (0, s.jsxs)('svg', {
                                    className: n.default.wrapper,
                                    width: o,
                                    height: o,
                                    viewBox: '0 0 '.concat(o, ' ').concat(o),
                                    children: [
                                        (0, s.jsx)('circle', {
                                            className: (0, r.clsx)(n.default.fullCircle, v),
                                            r: y,
                                            strokeWidth: c,
                                            cx: x,
                                            cy: x,
                                            role: 'presentation',
                                        }),
                                        (0, s.jsx)('circle', {
                                            className: (0, r.clsx)(n.default.progressCircle, { [n.default.progressCircle_withRoundStroke]: d }, _),
                                            r: y,
                                            strokeWidth: c,
                                            cx: x,
                                            cy: x,
                                            strokeDashoffset: T,
                                            strokeDasharray: f,
                                            role: 'presentation',
                                        }),
                                    ],
                                }),
                            });
                        };
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(s, 2));
                    },
                },
                r = {};
            function n(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var i = (r[e] = { exports: {} });
                return (l[e].call(i.exports, i, i.exports, n), i.exports);
            }
            ((n.d = (e, t) => {
                for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (n.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, 'X', { value: !0 }), (o.m = void 0));
                var e = n(284);
                Object.defineProperty(o, 'm', {
                    enumerable: !0,
                    get: function () {
                        return e.CircleProgress;
                    },
                });
            })();
            var c = o.m;
            o.X;
        },
        68340: (e) => {
            e.exports = { root: 'ContextMenuPlaylistItem_root__WU_1g', icon: 'ContextMenuPlaylistItem_icon__U79vo' };
        },
        68447: (e) => {
            e.exports = {
                cancelIcon: 'TrackContextMenuDownloadItem_cancelIcon__0YF_e',
                root: 'TrackContextMenuDownloadItem_root__BALdW',
                downloadingProgress: 'TrackContextMenuDownloadItem_downloadingProgress__Xmtgm',
                progress: 'TrackContextMenuDownloadItem_progress__FMBws',
            };
        },
        68870: (e) => {
            e.exports = { root: 'HorizontalCardContainer_root__YoAAP' };
        },
        69553: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => l });
            var a = i(78686),
                s = i(63698);
            let l = (e, t) => {
                let { withLink: i, isMobile: l, isOfflineModeEnabled: r, query: n } = t,
                    o = e.isRemoved,
                    c = !e.isRemoved && e.version ? e.version : void 0,
                    d = !e.isRemoved && (null == i || i) && (0, a.t)(e, { isMobile: l, isOfflineModeEnabled: r }) ? (0, s.l)(e.id, e.albumId, n) : null;
                return { title: e.title, shouldShowRemovedTitle: o, version: c, link: d };
            };
        },
        70565: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => s });
            var a = i(76794);
            let s = (e) => {
                let t = e === a.J.UGC,
                    i = e === a.J.OWN,
                    s = e === a.J.OWN_REPLACED_TO_UGC;
                return { isUGC: t, isOwn: i, isOwnReplacedToUGC: s, isNonUserGenerated: !t && !s };
            };
        },
        71978: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => l });
            var a = i(4086),
                s = i(41928);
            function l() {
                return (0, s.N)().get(a.y$);
            }
        },
        76794: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { J: () => a }),
                (function (e) {
                    ((e.OWN = 'OWN'), (e.UGC = 'UGC'), (e.OWN_REPLACED_TO_UGC = 'OWN_REPLACED_TO_UGC'), (e.EXTERNAL = 'EXTERNAL'));
                })(a || (a = {})));
        },
        78686: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => s });
            var a = i(70565);
            let s = (e, t) => {
                let { isMobile: i, isOfflineModeEnabled: s } = t,
                    { isNonUserGenerated: l } = (0, a.I)(e.trackSource);
                return e.isAvailable && l && !i && !s;
            };
        },
        79262: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => d });
            var a = i(88800),
                s = i(65724),
                l = i(2058),
                r = i(68254),
                n = i(52300),
                o = i(36702),
                c = i.n(o);
            let d = (e) => {
                let { value: t, size: i, strokeWidth: o, withCancelIcon: d, className: u, progressBarClassName: m, cancelIconClassName: _ } = e,
                    { formatMessage: v } = (0, l.A)();
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(c().root, u),
                    children: [
                        (0, a.jsx)(r.q, {
                            value: t,
                            size: i,
                            strokeWidth: o,
                            max: 100,
                            withRoundStroke: !0,
                            className: c().progressBar,
                            progressCircleClassName: m,
                            'aria-valuetext': v({ id: 'offline.download-progress' }),
                        }),
                        d && (0, a.jsx)(n.I, { variant: 'close', size: 'xxxs', className: (0, s.$)(c().cancelIcon, _) }),
                    ],
                });
            };
        },
        79546: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => a });
            var a = (function (e) {
                return ((e.NEXT = 'NEXT'), (e.LAST = 'LAST'), (e.REMOVE = 'REMOVE'), (e.HIDE = 'HIDE'), e);
            })({});
        },
        81261: (e) => {
            e.exports = { message: 'FailedPlaylistNotification_message__wxrzi' };
        },
        84779: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => ee });
            var a = i(88800),
                s = i(84961),
                l = i(53548),
                r = i(2058),
                n = i(88969),
                o = i(17392),
                c = i(52300),
                d = i(19934),
                u = i(72288),
                m = i(58390),
                _ = i(60385),
                v = i(29993),
                p = i(67318),
                y = i(1883),
                x = i(29595),
                A = i(74965),
                T = i(67174),
                f = i(5279),
                I = i(65724),
                k = i(8840),
                E = i(79070),
                h = i(99007),
                C = i(42174),
                O = i(29504),
                N = i(62518),
                b = i(63476),
                g = i(59304),
                S = i(81261),
                L = i.n(S);
            let j = () =>
                (0, a.jsx)(g.$, {
                    message: (0, a.jsx)(O.HL, {
                        className: L().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, a.jsx)(n.A, { id: 'playlist-errors.failed-to-remove-track' }),
                    }),
                });
            var R = i(15077),
                D = i(81877),
                P = i(91292),
                M = i(3895),
                U = i.n(M);
            let w = (0, s.PA)((e) => {
                let { entityTitle: t, entityVariant: i, entityCoverUri: s, playlist: r, closeToast: o } = e,
                    { fullscreenPlayer: c } = (0, u.g)(),
                    d = (0, v.c)(() => {
                        c.modal.isOpened && c.modal.close();
                    }),
                    m = (0, l.useMemo)(() => {
                        let e,
                            s = {
                                trackName: (0, a.jsxs)(O.HL, {
                                    className: U().title,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    lineClamp: 1,
                                    children: ['\xa0', t, '\xa0'],
                                }),
                                playlistName: (0, a.jsx)(P.N, {
                                    className: U().link,
                                    href: r.url,
                                    onClick: d,
                                    children: (0, a.jsxs)(O.HL, {
                                        className: U().playlistTitle,
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        lineClamp: 1,
                                        children: ['\xa0', r.title, '\xa0'],
                                    }),
                                }),
                            };
                        switch (i) {
                            case R.c.PODCAST_EPISODE:
                                e = (0, a.jsx)(n.A, { id: 'notifications-info.removed-podcast-episode-from-playlist', values: s });
                                break;
                            case R.c.AUDIOBOOK_EPISODE:
                                e = (0, a.jsx)(n.A, { id: 'notifications-info.removed-audiobook-episode-from-playlist', values: s });
                                break;
                            default:
                                e = (0, a.jsx)(n.A, { id: 'notifications-info.removed-track-from-playlist', values: s });
                        }
                        return (0, a.jsx)(O.HL, { className: U().message, variant: 'div', type: 'controls', size: 'm', lineClamp: 1, children: e });
                    }, [t, i, d, r.title, r.url]);
                return (0, a.jsx)(g.$, {
                    closeToast: o,
                    message: m,
                    cover: (0, a.jsx)(D.B, { className: U().image, src: s, withAvatarReplace: !0, size: 100, fit: 'cover', alt: t }),
                    coverRadius: 's',
                });
            });
            var K = i(28661),
                B = i(68340),
                z = i.n(B);
            let F = (e) => {
                let { playlist: t, track: i, autoFocus: s } = e,
                    { formatMessage: n } = (0, r.A)(),
                    m = (0, f.R)(),
                    _ = (() => {
                        let { notify: e } = (0, A.l)(),
                            { playlist: t, fullscreenPlayer: i } = (0, u.g)(),
                            s = (0, v.c)((s) => {
                                var l, r;
                                let { withSuccessNotification: n, withPageRefresh: o, playlist: c, track: d } = s;
                                if (n && d && c) {
                                    let t = (0, K.e)(d.type);
                                    e((0, a.jsx)(w, { entityTitle: d.title, entityVariant: t, entityCoverUri: null != (r = d.coverUri) ? r : '', playlist: c }), {
                                        containerId: i.modal.isOpened ? x.u.FULLSCREEN_INFO : x.u.INFO,
                                    });
                                }
                                o && (null == c ? void 0 : c.uuid) === (null == (l = t.meta) ? void 0 : l.uuid) && t.refresh();
                            }),
                            l = (0, v.c)((t) => {
                                let { withFailNotification: s } = t;
                                s && e((0, a.jsx)(j, {}), { containerId: i.modal.isOpened ? x.u.FULLSCREEN_ERROR : x.u.ERROR });
                            });
                        return (0, v.c)(async (e) => {
                            let { playlist: t, track: i, trackIndex: a, withSuccessNotification: r = !0, withFailNotification: n = !0, withPageRefresh: o = !0 } = e,
                                c = await t.changePlaylist((0, N.M)({ operation: b.y.DELETE, startPosition: a, endPosition: a + 1 }));
                            return (c === p.Y.OK ? s({ withSuccessNotification: r, withPageRefresh: o, playlist: t, track: i }) : l({ withFailNotification: n }), c);
                        });
                    })(),
                    { isTrackInPlaylist: y, trackIndexInPlaylist: T } = ((e, t) => {
                        var i, a;
                        let s = -1;
                        return (
                            (null == (i = e.tracks) ? void 0 : i.length) &&
                                (s =
                                    null == (a = e.tracks)
                                        ? void 0
                                        : a.findIndex((e) => (e.albumId ? String(e.id) === t.id && e.albumId === t.albumId : String(e.id) === t.id))),
                            { isTrackInPlaylist: s > -1, trackIndexInPlaylist: s }
                        );
                    })(t, i),
                    I = (0, l.useCallback)(() => {
                        y ? _({ playlist: t, track: i, trackIndex: T }) : m({ playlist: t, track: i });
                    }, [m, _, t, i, T, y]);
                return (0, a.jsxs)(d.Dr, {
                    autoFocus: s,
                    className: z().root,
                    onClick: I,
                    'data-test-id': o.Kq.track.TRACK_SUBMENU_ITEM,
                    children: [
                        (0, a.jsx)(O.HL, { variant: 'div', size: 'm', lineClamp: 1, children: t.title }),
                        y &&
                            (0, a.jsx)(c.I, {
                                className: z().icon,
                                size: 'xxs',
                                variant: 'check',
                                'aria-label': n({ id: 'entity-names.track-in-playlist' }),
                                'data-test-id': o.Kq.track.TRACK_SUBMENU_IN_PLAYLIST_ICON,
                            }),
                    ],
                });
            };
            var Y = i(19994),
                H = i(46054),
                q = i.n(H);
            let W = (e) => {
                    let { forwardRef: t, className: i, ...s } = e;
                    return (0, a.jsx)(d.Dr, { className: i, ref: t, ...s, children: (0, a.jsx)(Y.W, { isActive: !0, className: q().shimmer }) });
                },
                V = (0, l.forwardRef)((e, t) => {
                    let { ...i } = e;
                    return (0, a.jsx)(W, { ...i, forwardRef: t });
                });
            var X = i(39344),
                G = i.n(X);
            let $ = 'EndlessFeed',
                Q = (0, s.PA)((e) => {
                    var t, i, s;
                    let { track: m } = e,
                        { user: _, contextMenuPlaylists: p } = (0, u.g)(),
                        { formatMessage: y } = (0, r.A)(),
                        x = (0, C.K)(m),
                        A = (0, l.useRef)(null),
                        { isIntersecting: T } = null != (i = (0, k.BL)([A], { preflightCheck: !1 }, p.isShimmerVisible)[$]) ? i : {},
                        f = Math.ceil(p.items.length / 20),
                        O = null != (s = null == (t = p.pagesLoader.pager) ? void 0 : t.page) ? s : 0,
                        N = (0, v.c)((e) => {
                            _.account.data.uid && p.getData({ userId: _.account.data.uid, page: e, pageSize: 20 });
                        });
                    (0, l.useEffect)(() => {
                        T && N(O + 1);
                    }, [T, N]);
                    let b = (0, l.useMemo)(() => {
                            if (!m.isTrackNonMusic && p.isResolved)
                                return (0, a.jsxs)(d.Dr, {
                                    className: G().favouritesPlaylistItem,
                                    onClick: x,
                                    'data-test-id': o.Kq.track.TRACK_SUBMENU_LIKE_PLAYLIST_BUTTON,
                                    children: [
                                        (0, a.jsx)(n.A, { id: 'entity-names.liked-playlist' }),
                                        m.isLiked &&
                                            (0, a.jsx)(c.I, {
                                                className: G().icon,
                                                size: 'xxs',
                                                variant: 'check',
                                                'aria-label': y({ id: 'entity-names.track-in-playlist' }),
                                                'data-test-id': o.Kq.track.TRACK_SUBMENU_IN_PLAYLIST_ICON,
                                            }),
                                    ],
                                });
                        }, [p.isResolved, x, m, y]),
                        g = (0, E.L)(() => {
                            let e = p.items.filter((e) => null !== e);
                            if (0 !== e.length)
                                return e.map((e, t) => {
                                    if (!e || e.kind === h.j.LIKE) return;
                                    let i = O + 1 === f && t === p.items.length - (p.items.length % 20);
                                    return (0, a.jsx)(F, { autoFocus: i, track: m, playlist: e }, e.uuid);
                                });
                        });
                    return (0, a.jsxs)('div', {
                        className: G().root,
                        'data-test-id': o.Kq.track.TRACK_SUBMENU,
                        children: [
                            (0, a.jsx)('div', { className: G().divider }),
                            (0, a.jsxs)('div', {
                                className: G().listPlaylist,
                                children: [
                                    b,
                                    g,
                                    !p.isResolved && Array.from({ length: 10 }, (e, t) => (0, a.jsx)(V, {}, t)),
                                    (0, a.jsx)(V, {
                                        className: (0, I.$)({ [G().shimmerEndItem]: O + 1 === f }),
                                        ref: A,
                                        'data-intersection-property-id': $,
                                        'data-end-shimmer': !0,
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var Z = i(48416),
                J = i.n(Z);
            let ee = (0, s.PA)((e) => {
                let { track: t } = e,
                    { user: i, contextMenuPlaylists: s } = (0, u.g)(),
                    I = ((e) => {
                        let { createPlaylist: t, fullscreenPlayer: i } = (0, u.g)(),
                            { notify: s } = (0, A.l)(),
                            l = (0, m.useRouter)(),
                            { formatMessage: n } = (0, r.A)(),
                            o = (0, f.R)(),
                            c = (0, v.c)(async (e) => {
                                var i;
                                if (
                                    (await t.create({ title: n({ id: 'entity-names.new-playlist' }), visibility: _.L.PUBLIC }),
                                    !(null == t || null == (i = t.meta) ? void 0 : i.uuid))
                                )
                                    return null;
                                if ((await o({ playlist: t.meta, track: e, withPageRefresh: !1, withFailNotification: !1, withSuccessNotification: !1 })) === p.Y.OK) {
                                    let { href: e } = (0, T.u)('/playlists/:playlistUuid', { params: { playlistUuid: t.meta.uuid } });
                                    return (t.reset(), e);
                                }
                                return null;
                            });
                        return (0, v.c)(async () => {
                            let t = await c(e);
                            t
                                ? (i.modal.isOpened && i.modal.close(), l.push(t))
                                : s((0, a.jsx)(y.p, {}), { containerId: i.modal.isOpened ? x.u.FULLSCREEN_ERROR : x.u.ERROR });
                        });
                    })(t),
                    { formatMessage: k } = (0, r.A)(),
                    E = (0, l.useCallback)(async () => {
                        i.account.data.uid && (await s.getData({ userId: i.account.data.uid, page: 0, pageSize: 20 }));
                    }, [s, i.account.data.uid]);
                return (
                    (0, l.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    (0, a.jsxs)(d.W1, {
                        offsetOptions: 3,
                        onShow: E,
                        icon: (0, a.jsx)(c.I, { variant: 'addToPlaylist', size: 'xxs' }),
                        label: k({ id: 'playlist-actions.add-track-to-playlist' }),
                        ariaLabel: k({ id: 'playlist-actions.add-track-to-playlist' }),
                        disabled: !i.isAuthorized,
                        menuClassName: J().menu,
                        'data-test-id': o.Kq.track.TRACK_CONTEXT_MENU_ADD_TO_PLAYLIST_BUTTON,
                        children: [
                            (0, a.jsx)(d.Dr, {
                                onClick: I,
                                icon: (0, a.jsx)(c.I, { variant: 'add', size: 'xxs' }),
                                'data-test-id': o.Kq.track.TRACK_SUBMENU_ADD_PLAYLIST_BUTTON,
                                children: (0, a.jsx)(n.A, { id: 'playlist-actions.create-playlist' }),
                            }),
                            (0, a.jsx)(Q, { track: t }),
                        ],
                    })
                );
            });
        },
        85463: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => c });
            var a = i(29993),
                s = i(58217),
                l = i(41925),
                r = i(72288),
                n = i(43522),
                o = i(18610);
            let c = (e) => {
                let { track: t, withSavingQueryParams: i, entityType: c, onNavigate: d } = e,
                    { fullscreenPlayer: u, album: m, track: _ } = (0, r.g)(),
                    v = m.id === t.albumId,
                    p = (0, o.p)(),
                    y = (0, a.c)((e) => {
                        if ((u.modal.isOpened && u.modal.close(), null == d || d(), v)) {
                            null == e || e.preventDefault();
                            let a = (0, n.j)();
                            (i && a ? p(t.getUrl(Object.fromEntries(a))) : p(t.url), _.open({ trackId: t.id, albumId: t.albumId }));
                        } else null == e || e.stopPropagation();
                    }),
                    x = (0, a.c)((e) => {
                        (null == d || d(), null == e || e.stopPropagation());
                    }),
                    A = { entity: t, entityType: c },
                    T = (0, s.l)({ ...A, callback: y }),
                    f = (0, s.l)({ ...A, callback: x });
                return (0, l.C)({ onClick: T, onCmdCtrlClick: f });
            };
        },
        87528: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => v });
            var a = i(88800),
                s = i(53548),
                l = i(88969),
                r = i(17392),
                n = i(29504),
                o = i(59304),
                c = i(15077),
                d = i(81877),
                u = i(79546),
                m = i(63584),
                _ = i.n(m);
            let v = (e) => {
                let { closeToast: t, entityVariant: i, entityTitle: m, coverUri: v, variant: p } = e,
                    y = (0, s.useMemo)(
                        () =>
                            (0, a.jsxs)(n.HL, { className: _().entityTitle, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: ['\xa0', m, '\xa0'] }),
                        [m],
                    ),
                    x = (0, s.useMemo)(() => {
                        switch (p) {
                            case u.N.NEXT:
                                return ((e, t) => {
                                    switch (e) {
                                        case c.c.TRACK:
                                            return (0, a.jsx)(l.A, { id: 'play-queue.track-will-be-played-next', values: { title: t } });
                                        case c.c.PODCAST_EPISODE:
                                            return (0, a.jsx)(l.A, { id: 'play-queue.podcast-episode-will-be-played-next', values: { title: t } });
                                        case c.c.AUDIOBOOK_EPISODE:
                                            return (0, a.jsx)(l.A, { id: 'play-queue.audiobook-episode-will-be-played-next', values: { title: t } });
                                        case c.c.ALBUM:
                                            return (0, a.jsx)(l.A, { id: 'play-queue.album-will-be-played-next', values: { title: t } });
                                        case c.c.PLAYLIST:
                                            return (0, a.jsx)(l.A, { id: 'play-queue.playlist-will-be-played-next', values: { title: t } });
                                    }
                                })(i, y);
                            case u.N.LAST:
                                return ((e, t) => {
                                    switch (e) {
                                        case c.c.TRACK:
                                            return (0, a.jsx)(l.A, { id: 'play-queue.track-will-be-played-last', values: { title: t } });
                                        case c.c.PODCAST_EPISODE:
                                            return (0, a.jsx)(l.A, { id: 'play-queue.podcast-episode-will-be-played-last', values: { title: t } });
                                        case c.c.AUDIOBOOK_EPISODE:
                                            return (0, a.jsx)(l.A, { id: 'play-queue.audiobook-episode-will-be-played-last', values: { title: t } });
                                        case c.c.ALBUM:
                                            return (0, a.jsx)(l.A, { id: 'play-queue.album-will-be-played-last', values: { title: t } });
                                        case c.c.PLAYLIST:
                                            return (0, a.jsx)(l.A, { id: 'play-queue.playlist-will-be-played-last', values: { title: t } });
                                    }
                                })(i, y);
                            case u.N.HIDE:
                            case u.N.REMOVE:
                                return ((e, t) => {
                                    switch (e) {
                                        case c.c.TRACK:
                                            return (0, a.jsx)(l.A, { id: 'play-queue.track-will-be-removed', values: { title: t } });
                                        case c.c.PODCAST_EPISODE:
                                            return (0, a.jsx)(l.A, { id: 'play-queue.podcast-episode-will-be-removed', values: { title: t } });
                                        case c.c.AUDIOBOOK_EPISODE:
                                            return (0, a.jsx)(l.A, { id: 'play-queue.audiobook-episode-will-be-removed', values: { title: t } });
                                        case c.c.ALBUM:
                                            return (0, a.jsx)(l.A, { id: 'play-queue.album-will-be-removed', values: { title: t } });
                                        case c.c.PLAYLIST:
                                            return (0, a.jsx)(l.A, { id: 'play-queue.playlist-will-be-removed', values: { title: t } });
                                    }
                                })(i, y);
                        }
                    }, [p, i, y]);
                return (0, a.jsx)(o.$, {
                    message: (0, a.jsx)(n.HL, {
                        className: _().text,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        'data-test-id': r.OA.track.PLAY_QUEUE_NOTIFICATION_TEXT,
                        children: x,
                    }),
                    cover: (0, a.jsx)(d.B, { className: _().image, src: v, size: 100, fit: 'cover', alt: m, withAvatarReplace: !0 }),
                    closeToast: t,
                    coverRadius: 's',
                });
            };
        },
        93039: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => l });
            var a = i(20584),
                s = i(18593);
            function l(e) {
                var t;
                let i = null != (t = e.entityContextType) ? t : a.h.BASED_ON_ENTITY_BY_DEFAULT;
                switch (e.contextType) {
                    case s.K.Playlist: {
                        let t = void 0 !== e.playlistUid && void 0 !== e.playlistKind;
                        return {
                            type: s.K.Playlist,
                            from: '',
                            meta: { id: String(e.contextId), ...(t && { uid: e.playlistUid, kind: e.playlistKind }) },
                            sourceContextType: i,
                            filter: e.filter,
                        };
                    }
                    case s.K.Album:
                        return { type: s.K.Album, from: '', meta: { id: e.contextId }, sourceContextType: i };
                    case s.K.Artist:
                        return { type: s.K.Artist, from: '', meta: { id: e.contextId }, sourceContextType: i };
                    default:
                        return { type: s.K.Various, from: '', meta: { id: e.contextId }, sourceContextType: i };
                }
            }
        },
        97811: (e) => {
            e.exports = {
                root: 'PlayingAnimation_root__YrWz7',
                'bubble-out': 'PlayingAnimation_bubble-out__k2fBS',
                root_stopAnimation: 'PlayingAnimation_root_stopAnimation__qOw_g',
            };
        },
        98644: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => a });
            var a = (function (e) {
                return ((e.PLAYLIST = 'playlist'), (e.ALBUM = 'album'), e);
            })({});
        },
        99007: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            var a = (function (e) {
                return ((e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e);
            })({});
        },
        99305: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => a });
            var a = (function (e) {
                return (
                    (e.TRACKS_COUNT = 'tracksCount'),
                    (e.TRACK_DOWNLOAD = 'trackDownload'),
                    (e.TRACK_DELETE = 'trackDelete'),
                    (e.MY_FAVORITES_PLAYLIST_DOWNLOAD = 'myFavoritesPlaylistDownload'),
                    (e.MY_FAVORITES_PLAYLIST_DELETE = 'myFavoritesPlaylistDelete'),
                    e
                );
            })({});
        },
        99698: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => b });
            var a = i(88800),
                s = i(96706),
                l = i(53548),
                r = i(2058),
                n = i(188),
                o = i(79390),
                c = i(11105),
                d = i(29993),
                u = i(7123),
                m = i(29595),
                _ = i(74965),
                v = i(9630),
                p = i(72288),
                y = i(66943),
                x = i(65724),
                A = i(7555),
                T = i(73170),
                f = i(29504),
                I = i(59304),
                k = i(15077),
                E = i(81877),
                h = i(54272),
                C = i.n(h);
            let O = (e) => {
                let t,
                    { coverUri: i, title: s, isDisliked: l, closeToast: n, className: o, entityVariant: c } = e,
                    { formatMessage: d } = (0, r.A)();
                if (l)
                    switch (c) {
                        case k.c.PODCAST_EPISODE:
                            t = d({ id: 'notifications-info.podcast-episode-unavailable-in-recommendations' });
                            break;
                        case k.c.AUDIOBOOK_EPISODE:
                            t = d({ id: 'notifications-info.audiobook-episode-unavailable-in-recommendations' });
                            break;
                        default:
                            t = d({ id: 'notifications-info.track-unavailable-in-recommendations' });
                    }
                else
                    switch (c) {
                        case k.c.PODCAST_EPISODE:
                            t = d({ id: 'notifications-info.podcast-episode-available-in-recommendations' });
                            break;
                        case k.c.AUDIOBOOK_EPISODE:
                            t = d({ id: 'notifications-info.audiobook-episode-available-in-recommendations' });
                            break;
                        default:
                            t = d({ id: 'notifications-info.track-available-in-recommendations' });
                    }
                return (0, a.jsx)(I.$, {
                    className: (0, x.$)(C().root, o),
                    closeToast: n,
                    message: (0, a.jsxs)('div', {
                        className: C().message,
                        children: [
                            (0, a.jsx)(T.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, a.jsx)(A.t, {
                                className: C().cover,
                                radius: 's',
                                children: (0, a.jsx)(E.B, { className: C().image, src: i, alt: s, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, a.jsx)(f.HL, { className: C().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                });
            };
            var N = i(28661);
            let b = (e) => {
                let { user: t, fullscreenPlayer: i } = (0, p.g)(),
                    x = (0, v.e)(),
                    { notify: A } = (0, _.l)(),
                    [T, f] = (0, l.useState)(!1),
                    { formatMessage: I } = (0, r.A)(),
                    k = (0, N.e)(null == e ? void 0 : e.type);
                return (0, d.c)(async () => {
                    if (e) {
                        let d = i.modal.isOpened ? m.u.FULLSCREEN_INFO : m.u.INFO,
                            _ = i.modal.isOpened ? m.u.FULLSCREEN_ERROR : m.u.ERROR;
                        if (!t.isAuthorized) return void A((0, a.jsx)(y.h, { error: I({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: _ });
                        if (T) return;
                        let v = { ...(0, s.HO)(e), isDisliked: !e.isDisliked };
                        f(!0);
                        let p = await e.toggleDislike();
                        if ((f(!1), p === o.f.OK)) {
                            var l, r;
                            A((0, a.jsx)(O, { coverUri: v.coverUri, isDisliked: v.isDisliked, title: v.title, entityVariant: k }), { containerId: d });
                            let e = v.isDisliked ? c.O.DISLIKE : c.O.UNDISLIKE;
                            if (x && (0, n.i)(x.state.currentContext.value)) {
                                let t = x.state.currentContext.value,
                                    i = x.state.queueState.entityList.value.find((e) => {
                                        let { entity: t } = e;
                                        return t.data.meta.id === v.id;
                                    });
                                i &&
                                    (await t.sendFeedback({ type: e, entity: i.entity }),
                                    e === c.O.DISLIKE &&
                                        x.state.currentContext.value === t &&
                                        (null == (r = x.state.queueState.currentEntity.value) ? void 0 : r.entity) === i.entity &&
                                        x.moveForward(void 0, u.So.DISLIKE_MOVE_FORWARD));
                            } else
                                v.isDisliked &&
                                    v.id === (null == x || null == (l = x.state.queueState.currentEntity.value) ? void 0 : l.entity.data.meta.id) &&
                                    (null == x || x.moveForward());
                        } else A((0, a.jsx)(y.h, { error: I({ id: 'error-messages.error-during-action' }) }), { containerId: _ });
                    }
                });
            };
        },
    },
]);
