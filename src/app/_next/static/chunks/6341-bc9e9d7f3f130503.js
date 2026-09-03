(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6341],
    {
        61: (e) => {
            e.exports = {
                message: 'PlaylistNotification_message__nEykK',
                text: 'PlaylistNotification_text__kTfi1',
                title: 'PlaylistNotification_title__Q5IKF',
                link: 'PlaylistNotification_link__HezVx',
                playlistTitle: 'PlaylistNotification_playlistTitle__HweEg',
                image: 'PlaylistNotification_image__QvYVD',
            };
        },
        72: (e) => {
            e.exports = { root: 'HorizontalCardContainer_root__YoAAP' };
        },
        1444: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var a = i(32290),
                s = i(63618),
                l = i(55178),
                r = i(72),
                n = i.n(r);
            let o = (e) => {
                    let { className: t, children: i, forwardRef: l, onClick: r, ...o } = e;
                    return (0, a.jsx)('div', { ref: l, onClick: r, className: (0, s.$)(n().root, t), ...o, children: i });
                },
                c = (0, l.forwardRef)((e, t) => (0, a.jsx)(o, { forwardRef: t, ...e }));
        },
        2047: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { L: () => a }),
                (function (e) {
                    (e.PUBLIC = 'public'), (e.PRIVATE = 'private');
                })(a || (a = {}));
        },
        2355: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => _ });
            var a = i(32290),
                s = i(91027),
                l = i(72676),
                r = i(45477),
                n = i(75582),
                o = i(44128),
                c = i(57594),
                d = i(60214),
                u = i(9480),
                m = i(54950);
            function _(e, t, i) {
                let { notify: _ } = (0, n.l)(),
                    { fullscreenPlayer: v } = (0, c.g)(),
                    p = (0, o.e)(),
                    y = (0, m.b)(e);
                return (0, s.c)(() => {
                    if (!e) return;
                    let s = t === u.N.LAST || t === u.N.NEXT,
                        n = s ? i : void 0,
                        o = s ? void 0 : i;
                    switch (t) {
                        case u.N.LAST:
                            null == p || p.injectLast({ entitiesData: [{ type: l.z4.Unloaded, meta: { id: e.entityId } }], sourceContextData: n });
                            break;
                        case u.N.NEXT:
                            null == p || p.injectNext({ entitiesData: [{ type: l.z4.Unloaded, meta: { id: e.entityId } }], sourceContextData: n });
                            break;
                        case u.N.REMOVE:
                            o && (null == p || p.removeAndLoadEntities({ positions: o }));
                            break;
                        case u.N.HIDE:
                            (null == o ? void 0 : o.length) && (null == p || p.hide({ positions: o }));
                    }
                    let c = v.modal.isOpened ? r.u.FULLSCREEN_INFO : r.u.INFO;
                    _((0, a.jsx)(d.l, { entityVariant: y, variant: t, entityTitle: e.title, coverUri: e.coverUri }), { containerId: c });
                });
            }
        },
        3623: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { R: () => a }),
                (function (e) {
                    (e.Music = 'music'),
                        (e.DownloadedMusic = 'downloadedMusic'),
                        (e.VibeTrack = 'vibeTrack'),
                        (e.Generative = 'generative'),
                        (e.Unknown = 'unknown'),
                        (e.SmartPreview = 'smartPreview'),
                        (e.Clip = 'clip'),
                        (e.Radio = 'fm_radio');
                })(a || (a = {}));
        },
        3707: (e, t, i) => {
            'use strict';
            i.d(t, { o: () => A });
            var a = i(32290),
                s = i(96103),
                l = i(60900),
                r = i(21732),
                n = i(82586),
                o = i(19740),
                c = i(66249),
                d = i(78176),
                u = i(57594),
                m = i(39407),
                _ = i(91027),
                v = i(84062),
                p = i(5447),
                y = i.n(p);
            let x = (0, s.PA)((e) => {
                    let { className: t, artist: i, ...s } = e,
                        { fullscreenPlayer: l } = (0, u.g)(),
                        r = (0, v.Z)(i.url),
                        c = (0, _.c)((e) => {
                            r(e), l.modal.close();
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
        5447: (e) => {
            e.exports = { syncLyrics: 'TrackContextMenu_syncLyrics___CDVn' };
        },
        5856: (e) => {
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
        9480: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => a });
            var a = (function (e) {
                return (e.NEXT = 'NEXT'), (e.LAST = 'LAST'), (e.REMOVE = 'REMOVE'), (e.HIDE = 'HIDE'), e;
            })({});
        },
        9970: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s, d: () => a });
            let a = (e) => String(e).split(':'),
                s = (e, t) => (t ? [e, t].join(':') : e);
        },
        12906: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__R2jfZ',
                text: 'NotificationDislike_text__xmrnn',
                cover: 'NotificationDislike_cover__bvqFM',
                image: 'NotificationDislike_image__h0_EO',
            };
        },
        14482: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => a });
            var a = (function (e) {
                return (e.INSERT = 'insert'), (e.DELETE = 'delete'), (e.MOVE = 'move'), e;
            })({});
        },
        17705: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => k });
            var a = i(32290),
                s = i(60900),
                l = i(91027),
                r = i(45477),
                n = i(75582),
                o = i(57594),
                c = i(90357),
                d = i(92708),
                u = i(55178),
                m = i(62386),
                _ = i(63380),
                v = i(65163),
                p = i(44128),
                y = i(96103),
                x = i(97755),
                A = i(54950),
                f = i(96333),
                I = i(20472);
            let T = (0, y.PA)((e) => {
                    let { track: t, closeToast: i, withLink: s } = e,
                        l = ((e) => {
                            switch (e.type) {
                                case f.S.PODCAST:
                                case f.S.AUDIOBOOK:
                                    return I.Z.collectionShelfLiked.href;
                                default:
                                    return I.Z.collection.href;
                            }
                        })(t),
                        r = (0, A.b)(t);
                    return (0, a.jsx)(x.O, {
                        closeToast: i,
                        entityVariant: r,
                        entityTitle: t.title,
                        collectionUrl: l,
                        coverUri: t.coverUri,
                        isLiked: t.isLiked,
                        withLink: s,
                    });
                }),
                k = (e) => {
                    let { user: t, fullscreenPlayer: i } = (0, o.g)(),
                        { notify: y } = (0, n.l)(),
                        { formatMessage: x } = (0, s.A)(),
                        A = (() => {
                            let { notify: e } = (0, n.l)(),
                                [t, i] = (0, u.useState)(!1),
                                { formatMessage: r } = (0, s.A)(),
                                o = (0, p.e)();
                            return (0, l.c)(async (s) => {
                                let { track: l, withLink: n = !0, infoContainerId: u, errorContainerId: p, withNotification: y = !0, playbackId: x } = s;
                                if (t) return;
                                let A = { ...(0, d.HO)(l), isLiked: !l.isLiked };
                                i(!0);
                                let f = await l.toggleLike();
                                if ((i(!1), f === _.f.OK)) {
                                    let e = A.isLiked ? v.O.LIKE : v.O.UNLIKE,
                                        t = null == o ? void 0 : o.getState(x);
                                    if (t && (0, m.i)(null == t ? void 0 : t.currentContext.value)) {
                                        let i = t.queueState.entityList.value.find((e) => {
                                            let { entity: t } = e;
                                            return t.data.meta.id === A.id;
                                        });
                                        i && t.currentContext.value.sendFeedback({ type: e, entity: i.entity });
                                    }
                                }
                                y &&
                                    (f === _.f.OK
                                        ? e((0, a.jsx)(T, { withLink: n, track: A }), { containerId: u })
                                        : e((0, a.jsx)(c.h, { error: r({ id: 'error-messages.error-during-action' }) }), { containerId: p }));
                            });
                        })();
                    return (0, l.c)(async () => {
                        if (!e) return;
                        let s = i.modal.isOpened ? r.u.FULLSCREEN_INFO : r.u.INFO,
                            l = i.modal.isOpened ? r.u.FULLSCREEN_ERROR : r.u.ERROR;
                        return t.isAuthorized
                            ? A({ track: e, errorContainerId: l, infoContainerId: s })
                            : void y((0, a.jsx)(c.h, { error: x({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l });
                    });
                };
        },
        17713: (e) => {
            e.exports = {
                root: 'PlayingAnimation_root__YrWz7',
                'bubble-out': 'PlayingAnimation_bubble-out__k2fBS',
                root_stopAnimation: 'PlayingAnimation_root_stopAnimation__qOw_g',
            };
        },
        18729: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => v });
            var a = i(32290),
                s = i(55178),
                l = i(60900),
                r = i(20168),
                n = i(66920),
                o = i(83917),
                c = i(14482),
                d = i(45477),
                u = i(75582),
                m = i(57594),
                _ = i(90357);
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
        20168: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => a });
            var a = (function (e) {
                return (e.OK = 'ok'), (e.ERROR = 'error'), (e.RELOAD = 'reload'), e;
            })({});
        },
        20472: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => s });
            var a = i(36477);
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
                mymusic: (0, a.u)('/mymusic'),
                mymusicDownloadsTracks: (0, a.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, a.u)('/non-music'),
                pay: (0, a.u)('/pay'),
                userSlides: (0, a.u)('/slides/user'),
                search: (0, a.u)('/search'),
                searchHistory: (0, a.u)('/search/history'),
                settings: (0, a.u)('/settings'),
                video: (0, a.u)('/video'),
            };
        },
        21183: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => a });
            let a = (0, i(55178).createContext)({ sourceContextData: null });
        },
        22191: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => l });
            var a = i(60900),
                s = i(29913);
            let l = (e) => {
                let { seconds: t, hours: i, minutes: l } = (0, s.e)(e),
                    { formatMessage: r } = (0, a.A)();
                return r({ id: 'time.hours-minutes-seconds' }, { hours: i, minutes: l, seconds: t });
            };
        },
        22369: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => p });
            var a = i(32290),
                s = i(96103),
                l = i(55178),
                r = i(39407),
                n = i(21732),
                o = i(64605),
                c = i(96333),
                d = i(91027),
                u = i(82586),
                m = i(19740),
                _ = i(84062),
                v = i(57594);
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
                    f = (0, l.useMemo)(() => {
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
                    I = (0, d.c)(() => {
                        x(), y.modal.close();
                    }),
                    T = (0, l.useMemo)(
                        () =>
                            i ? ([o._.ALBUM, o._.SINGLE].includes(i) ? 'album' : 'podcasts') : p ? ([c.S.TRACK, c.S.MUSIC].includes(p) ? 'album' : 'podcasts') : 'album',
                        [i, p],
                    );
                return A || f
                    ? (0, a.jsx)(m.Dr, {
                          className: t,
                          onClick: I,
                          icon: (0, a.jsx)(u.I, { variant: T, size: 'xxs' }),
                          'data-test-id': n.Kq.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_ALBUM,
                          children: A || f,
                      })
                    : null;
            });
        },
        24760: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => s });
            var a = i(57594);
            function s(e) {
                let { withCustomTooltip: t } = e,
                    {
                        settings: { isMobile: i, browserInfo: s },
                    } = (0, a.g)();
                return !((null == s ? void 0 : s.name) === 'Safari' || i) && t;
            }
        },
        25649: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => s });
            var a = i(67893);
            let s = function () {
                var e, t;
                let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                if (null == (t = i[0]) || null == (e = t.decomposed) ? void 0 : e.length) return i;
                let l = s.map((e) => e.id).sort(),
                    r = i.map((e) => e.id).sort();
                return (0, a.A)(l, r) ? [] : i.filter((e) => !e.various);
            };
        },
        28816: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => s });
            var a = i(55178);
            let s = () =>
                (0, a.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.pushState(t, '', e);
                    }
                }, []);
        },
        29913: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => a });
            let a = (e) => {
                let t = Math.round(e);
                return { hours: Math.floor(t / 3600), minutes: Math.floor((t % 3600) / 60), seconds: t % 60 };
            };
        },
        33323: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => s });
            var a = i(91027);
            let s = (e) => {
                let { onCmdCtrlClick: t, onClick: i } = e;
                return (0, a.c)((e) => {
                    (null != e && e.metaKey) || (null != e && e.ctrlKey) || (null != e && e.shiftKey) || null == i || i(e);
                });
            };
        },
        38223: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var a = i(32290),
                s = i(96103),
                l = i(39407),
                r = i(21732),
                n = i(82586),
                o = i(19740),
                c = i(57594);
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
        38420: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => d });
            var a = i(32290),
                s = i(63618),
                l = i(60900),
                r = i(74924),
                n = i(82586),
                o = i(71264),
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
        39380: (e) => {
            e.exports = { shimmer: 'ContextMenuPlaylistItemShimmer_shimmer__bQ2Yb' };
        },
        39400: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => eN });
            var a = i(32290),
                s = i(63618),
                l = i(92708),
                r = i(96103),
                n = i(55178),
                o = i(60900),
                c = i(39407),
                d = i(16172),
                u = i(21732),
                m = i(79490),
                _ = i(91027),
                v = i(82586),
                p = i(19740),
                y = i(63363),
                x = i(99872),
                A = i(84427),
                f = i(9017),
                I = i(65477),
                T = i(9480),
                k = i(75369),
                h = i(92013),
                C = i(45477),
                E = i(75582),
                O = i(44128),
                N = i(57594),
                g = i(90357),
                b = i(75783),
                S = i(17705),
                j = i(2355),
                L = i(71483),
                R = i(37240),
                D = i(46673),
                P = i(21183),
                M = i(83778),
                U = i(48922);
            let K = { [U._Q.SEARCH]: M.h.SEARCH, [U._Q.DOWNLOADS_TRACKS]: M.h.DOWNLOADED_TRACKS, [U._Q.HISTORY]: M.h.MUSIC_HISTORY };
            var w = i(71735),
                B = i(37862),
                z = i(54391),
                F = i(46200),
                Y = i(28999),
                H = i(27120),
                q = i(43564),
                V = i(95134),
                W = i(79406),
                X = i(51675),
                G = i(48027),
                $ = i(89384),
                Q = i(38223),
                Z = i(58237),
                J = i(22369),
                ee = i(4914),
                et = i(41566);
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
            var ea = i(83755),
                es = i(25160),
                el = i(4820),
                er = i(18729),
                en = i(96333);
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
            var ec = i(3707),
                ed = i(56117),
                eu = i(5447),
                em = i.n(eu),
                e_ = i(9970),
                ev = i(77327),
                ep = i(70675),
                ey = i(70204),
                ex = i(34186),
                eA = i(88964),
                ef = i(38420),
                eI = i(59041),
                eT = i.n(eI);
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
                            void 0 !== e && s && (null == r || r.hide({ positions: [e] })), l.count(ev.x.TRACK_DELETE, ep.l);
                            return;
                        }
                        if (t.isDownloading) {
                            null == (n = i.tracksController) || n.stopDownload(t.entityId);
                            return;
                        }
                        null == (e = i.tracksController) || e.download(t.entityId), l.count(ev.x.TRACK_DOWNLOAD, ep.l);
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
                                  ? (0, a.jsx)(ef.A, {
                                        value: t.downloadingProgress,
                                        size: 20,
                                        withCancelIcon: !0,
                                        className: eT().downloadingProgress,
                                        progressBarClassName: eT().progress,
                                        cancelIconClassName: eT().cancelIcon,
                                    })
                                  : (0, a.jsx)(v.I, { variant: 'download', size: 'xxs' }),
                        [t.downloadingProgress, t.isDownloaded, t.isDownloading],
                    );
                return (0, a.jsx)(p.Dr, { onClick: o, icon: m, className: eT().root, 'data-test-id': u.S7.CONTEXT_MENU_DOWNLOAD_BUTTON, children: d });
            });
            var eh = i(71926),
                eC = i(67221),
                eE = i.n(eC);
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
                        e?.id && window.desktopEvents?.send('DOWNLOAD_TRACK', e.id, i);
                    }, [e, i]);
                return (0, a.jsx)(p.Dr, {
                    onClick: r,
                    icon: (0, a.jsx)(v.I, { variant: 'download', size: 'xxs' }),
                    className: eT().root,
                    'data-test-id': u.S7.CONTEXT_MENU_DOWNLOAD_BUTTON,
                    children: 'Скачать в файл',
                });
            });
            let eO = (0, r.PA)((e) => {
                    let { track: t } = e,
                        {
                            settings: { isMobile: i },
                        } = (0, N.g)();
                    return t.isUGC && i
                        ? (0, a.jsxs)('div', {
                              className: eE().ugcLabel,
                              children: [
                                  (0, a.jsx)(v.I, { variant: 'eye_crossed', size: 'xxs' }),
                                  (0, a.jsx)(eh.HL, { variant: 'span', size: 's', children: (0, a.jsx)(c.A, { id: 'ugc.track-description' }) }),
                              ],
                          })
                        : null;
                }),
                eN = (0, r.PA)((e) => {
                    var t, i, r, eu, e_, ev, ep, ey, ex, eA, ef, eI, eT, eh, eC, eE, eN, eg, eb, eS;
                    let {
                            track: ej,
                            onOpenChange: eL,
                            open: eR,
                            placement: eD,
                            isFullscreenMobile: eP = !1,
                            icon: eM,
                            size: eU,
                            utmLink: eK,
                            handleRemove: ew,
                            dismissSettings: eB,
                            withTrailer: ez = !0,
                            ...eF
                        } = e,
                        { shouldShowBuySubscriptionModal: eY, showBuySubscriptionModal: eH } = (0, F.q)(),
                        eq = (0, O.e)(),
                        {
                            settings: eV,
                            currentTrackInfo: eW,
                            experiments: eX,
                            fullscreenPlayer: eG,
                            trailer: e$,
                            sonataState: { entityMeta: eQ, isVibeContext: eZ },
                            trackLyrics: eJ,
                            album: e0,
                            track: e7,
                            user: e1,
                            slam: e2,
                            albumCPA: { isPlusCPAPlayerBarEnabled: e9 },
                        } = (0, N.g)(),
                        { formatMessage: e3 } = (0, o.A)(),
                        { sendLikeSearchFeedback: e5 } = (0, Y.z)(),
                        [e4, e6] = (0, n.useState)(!1),
                        { modal: e8 } = eJ,
                        { modal: te } = eW,
                        tt = (function (e) {
                            var t, i;
                            let { album: a, playlist: s, artist: l, track: r } = (0, N.g)(),
                                { sourceContextData: o } = (0, n.useContext)(P.l),
                                { pageId: c } = (0, R.$)();
                            return (0, n.useMemo)(() => {
                                var t, i, n, d;
                                let u = null == o ? void 0 : o.sourceContextType,
                                    m = null != u ? u : c && K[c] ? K[c] : M.h.BASED_ON_ENTITY_BY_DEFAULT,
                                    _ = !!(null == o || null == (t = o.meta) ? void 0 : t.id);
                                if (o && (o.type !== L.K.Various || _)) return o;
                                let v = r.isOpened ? r.albumId : null;
                                return v
                                    ? (0, D.t)({ contextType: L.K.Album, contextId: v, entityContextType: m })
                                    : (null == (i = s.meta) ? void 0 : i.uid) && (null == (n = s.meta) ? void 0 : n.kind)
                                      ? (0, D.t)({
                                            contextType: L.K.Playlist,
                                            contextId: ''.concat(s.meta.uid, ':').concat(s.meta.kind),
                                            playlistUid: s.meta.uid,
                                            playlistKind: s.meta.kind,
                                            filter: s.filters.activeFilter,
                                            entityContextType: m,
                                        })
                                      : a.id
                                        ? (0, D.t)({ contextType: L.K.Album, contextId: a.id, entityContextType: m })
                                        : l.id
                                          ? (0, D.t)({ contextType: L.K.Artist, contextId: l.id, entityContextType: m })
                                          : (null == e ? void 0 : e.albumId)
                                            ? (0, D.t)({ contextType: L.K.Album, contextId: e.albumId, entityContextType: m })
                                            : (0, D.t)({ contextType: L.K.Various, contextId: null != (d = null == e ? void 0 : e.id) ? d : '', entityContextType: m });
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
                        })(ej),
                        ti = (0, j.i)(ej, T.N.NEXT, tt),
                        ta = (0, j.i)(ej, T.N.LAST, tt),
                        ts = (0, S.K)(ej),
                        tl = (0, b.m)(ej),
                        tr = (0, y.K)(ej.mainAlbum),
                        tn = ((e) => {
                            let {
                                    user: t,
                                    fullscreenPlayer: i,
                                    sonataState: { entityMeta: s },
                                    album: l,
                                } = (0, N.g)(),
                                { notify: r } = (0, E.l)(),
                                { formatMessage: n } = (0, o.A)(),
                                c = (0, O.e)();
                            return (0, _.c)(async () => {
                                if (!e) return;
                                let o = i.modal.isOpened ? C.u.FULLSCREEN_ERROR : C.u.ERROR;
                                if (!t.isAuthorized)
                                    return void r((0, a.jsx)(g.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o });
                                let d = e.streamProgress,
                                    u = (null == s ? void 0 : s.id) === e.id && (null == s ? void 0 : s.albumId) === e.albumId;
                                if ((await e.setListeningFinishedStatus()) !== h.T.OK)
                                    r((0, a.jsx)(g.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: o });
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
                                    a && (a.entity.everFinished = !!t),
                                        u &&
                                            (null == s ? void 0 : s.streamProgress) &&
                                            (null == (m = s.streamProgress) ? void 0 : m.hasEverFinished) !== t &&
                                            (s.streamProgress.updateEverFinished(t), t && s.streamProgress.updateEndPositionSec(0)),
                                        (null == (_ = l.meta) ? void 0 : _.listeningFinished) &&
                                            !t &&
                                            (l.markTracksFinished({ withoutTracks: [e.id] }), l.setAlbumUnfinished(), l.setAllTracksUnfinished(!1)),
                                        null == d || d.updateEverFinished(t),
                                        l.meta && t && l.checkAllAlbumTrackFinished();
                                }
                            });
                        })(ej),
                        to = (0, z.F)(),
                        tc = ''.concat(B.U.TRACK, '-').concat(ej.id),
                        td = eP || eV.isMobile,
                        tu = '/album/:albumId/track/:trackId';
                    ej.albumId || (tu = '/track/:trackId');
                    let { shareLink: tm, pathname: t_ } = (0, $.b)(tu, { params: { albumId: null != (eb = ej.albumId) ? eb : '', trackId: ej.id } }),
                        pulseSyncLrclibEnabled = window.nativeSettings?.get('modSettings.lrclib.useText') !== !1,
                        tv = ej.isUGC ? V.D.UGC_TRACK : V.D.TRACK,
                        tp = (0, f.A)({ entityVariant: tv, urlParams: { id: ej.id } }),
                        ty = ((e) => {
                            var t;
                            let { formatMessage: i } = (0, o.A)();
                            return i(
                                (null == e ? void 0 : e.type) === en.S.AUDIOBOOK
                                    ? { id: 'track-modal.audiobook-title' }
                                    : (null == e ? void 0 : e.isTrackPodcast) || (null == e || null == (t = e.mainAlbum) ? void 0 : t.isPodcast)
                                      ? { id: 'track-modal.podcast-title' }
                                      : { id: 'track-modal.title' },
                            );
                        })(ej),
                        tx = (0, x.C)(),
                        tA = !!(null == (t = ej.mainAlbum) ? void 0 : t.isNonMusic),
                        tf = (null == eQ ? void 0 : eQ.id) === ej.id && (null == eQ ? void 0 : eQ.albumId) === (null == (i = ej.mainAlbum) ? void 0 : i.id),
                        tI =
                            (null == e0 || null == (r = e0.meta) ? void 0 : r.listeningFinished) ||
                            (tf && (null == eQ || null == (eu = eQ.streamProgress) ? void 0 : eu.hasEverFinished)) ||
                            (null == (e_ = ej.streamProgress) ? void 0 : e_.hasEverFinished),
                        tT = e1.hasPlus && ej.isAvailableForDownload,
                        tk = eX.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                        th = !!(0, m.S)(null == eq ? void 0 : eq.state.currentContext.value),
                        { canRemoveTrackFromPlaylist: tC, removeTrackFromPlaylist: tE } = (0, er.s)(),
                        tO = (0, w.P)(),
                        tN = e9(null == (ev = ej.mainAlbum) ? void 0 : ev.id, null == (ep = ej.mainAlbum) ? void 0 : ep.isNonMusic),
                        { isPlaying: tg, togglePlay: tb } = (0, q.B)({
                            seeds: null != (eS = null == ej ? void 0 : ej.seeds) ? eS : [],
                            pageIdForFrom: U._Q.RADIO,
                            blockIdForFrom: tc,
                            parentContextId: (null == (ey = ej.mainAlbum) ? void 0 : ey.id) ? ''.concat(ej.mainAlbum.id, ':').concat(ej.id) : ej.entityId,
                        }),
                        tS = (0, _.c)(async () => {
                            e4 || ej.isLiked || (e6(!0), null == e5 || e5()), await ts();
                        }),
                        tj = (0, _.c)(() => {
                            if (eY && e1.isAuthorized) return void eH();
                            !tO() && (tg || tb());
                        }),
                        tL = (0, _.c)(() => {
                            if (eY && !tN) return void eH();
                            tO() || (e$.setUtmLink(eK), e$.openTrackTrailer(ej.entityId), to(d.ky.Track, ej.id));
                        }),
                        tR = (0, _.c)(() => {
                            var e;
                            eW.setTrack({ id: ej.id, albumId: (null == (e = ej.mainAlbum) ? void 0 : e.id) || null, isUGC: ej.isUGC || null }),
                                e7.isOpened && e7.close(),
                                te.open();
                        }),
                        tD = (0, _.c)(() => {
                            ej.clipIds && tx((0, l.HO)(ej.clipIds));
                        }),
                        tP = (0, _.c)(() => {
                            if (eY && e1.isAuthorized) return void eH();
                            eJ.setTrack(ej), e7.isOpened && e7.close(), e8.open();
                        }),
                        tM = (0, _.c)(() => {
                            if (eY && e1.isAuthorized) return void eH();
                            eG.isSyncLyricsMode ? eG.hideSyncLyrics() : eG.showSyncLyrics();
                        }),
                        tU = (0, _.c)(() => {
                            null == ew || ew(), null == eL || eL(!1);
                        }),
                        tK = (0, _.c)(
                            () =>
                                (ej.isSyncLyricsAvailable ||
                                    ej.isSyncLyricsAvailableWithOfflineFeature ||
                                    ej.hasSyncLyrics ||
                                    (tf && eG.syncLyrics.hasLyricsForTrack(ej.id))) &&
                                eG.modal.isOpened &&
                                td,
                        ),
                        tw = (0, _.c)(() => (ej.isLyricsAvailable || pulseSyncLrclibEnabled) && !eG.modal.isOpened),
                        tB = (0, _.c)(() => {
                            var e;
                            return (null == (e = ej.trailer) ? void 0 : e.isAvailable) && !eG.modal.isOpened && ez;
                        }),
                        {
                            withSyncLyricsItem: tz,
                            withLyricsItem: tF,
                            withTrailerItem: tY,
                        } = (0, n.useMemo)(
                            () => ({ withSyncLyricsItem: tK(), withLyricsItem: tw(), withTrailerItem: tB() }),
                            [
                                tK,
                                tw,
                                tB,
                                ej.isSyncLyricsAvailable,
                                ej.isSyncLyricsAvailableWithOfflineFeature,
                                ej.hasSyncLyrics,
                                ej.isLyricsAvailable,
                                pulseSyncLrclibEnabled,
                                eG.syncLyrics.currentTrackId,
                                eG.syncLyrics.lines,
                                eG.syncLyrics.isResolved,
                                null == (ex = ej.trailer) ? void 0 : ex.isAvailable,
                            ],
                        );
                    (0, H.N)(eR);
                    let tH = !tA,
                        tq = ej.isNonUserGenerated && !tA,
                        tV = !tA,
                        tW = !td,
                        tX = tA && tr,
                        tG = ej.isNonUserGenerated && (ej.albums.length || ej.mainAlbum),
                        t$ =
                            ej.isNonUserGenerated &&
                            !!(null == (eA = ej.artists) ? void 0 : eA.length) &&
                            ((null == (ef = ej.mainAlbum) ? void 0 : ef.isAudiobook) ||
                                (null == (eI = ej.mainAlbum) ? void 0 : eI.isAlbum) ||
                                ej.isTrackAudiobook ||
                                ej.isTrackMusic),
                        tQ = !th && eQ,
                        tZ = eG.isPlayQueueMode && ew && !eZ,
                        tJ = (0, A.d)() && ej.isNonUserGenerated && (null == (eT = ej.clipIds) ? void 0 : eT.length),
                        t0 = {
                            variant: X.Y.TRACK,
                            id: ej.id,
                            title: ej.title,
                            path: t_,
                            trackArtistName: null == (eh = ej.mainArtist) ? void 0 : eh.name,
                            trackArtistId: null == (eC = ej.mainArtist) ? void 0 : eC.id,
                            trackAlbumId: ej.albumId,
                        },
                        pulseSyncInjectTrackMenuItems = (items) =>
                            window.pulsesyncApi?.injectTrackMenuItems?.(items, {
                                jsx: a.jsx,
                                MenuItem: p.Dr,
                                Icon: v.I,
                                track: ej,
                                close: () => eL(!1),
                            }) ?? items;
                    return e2.isOfflineModeEnabled
                        ? (0, a.jsxs)(p.W1, {
                              isMobile: td,
                              placement: eD,
                              offsetOptions: 10,
                              open: eR,
                              onOpenChange: eL,
                              icon: eM,
                              size: eU,
                              dismissSettings: eB,
                              containerProps: { 'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU },
                              ariaLabel: e3({ id: 'interface-actions.context-menu' }),
                              variant: 'text',
                              ...eF,
                              children: pulseSyncInjectTrackMenuItems([
                                  tT && (0, a.jsx)(ek, { track: ej }),
                                  ej.isNonUserGenerated && (0, a.jsx)(ee.H, { shareLink: tm, entityMeta: t0 }),
                              ]),
                          })
                        : (0, a.jsxs)(p.W1, {
                              dismissSettings: eB,
                              isMobile: td,
                              placement: eD,
                              offsetOptions: 10,
                              open: eR,
                              onOpenChange: eL,
                              icon: eM,
                              size: eU,
                              containerProps: { 'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU },
                              ariaLabel: e3({ id: 'interface-actions.context-menu' }),
                              variant: 'text',
                              ...eF,
                              children: pulseSyncInjectTrackMenuItems([
                                  ej.isUGC && td && (0, a.jsx)(eO, { track: ej }),
                                  td && (0, a.jsx)(el.C, { getDescriptionTexts: ej.getDescriptionTexts, entityId: ej.id }),
                                  tk && (0, a.jsx)(I.d, { entityVariant: tv, adminUrl: tp }),
                                  tA && (0, a.jsx)(ei, { onClick: tn, isFinished: tI }),
                                  tH && (0, a.jsx)(Z.T, { onClick: tS, isLiked: ej.isLiked, disabled: !e1.isAuthorized }),
                                  tY && (0, a.jsx)(ea.N, { onClick: tL }),
                                  tq && (0, a.jsx)(es.C, { onClick: tj, variant: G.I.TRACK, disabled: !ej.isAvailable || (tN && td), onOpenMenuChange: eL }),
                                  tJ &&
                                      (0, a.jsx)(p.Dr, {
                                          onClick: tD,
                                          icon: (0, a.jsx)(v.I, { variant: 'clip', size: 'xxs' }),
                                          'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_CLIP_BUTTON,
                                          children: (0, a.jsx)(c.A, { id: 'non-music.navigate-to-clip' }),
                                      }),
                                  tT && (0, a.jsx)(ek, { track: ej }),
                                  tT && (0, a.jsx)(downloadTrackToFile, { track: ej }),
                                  tQ &&
                                      (0, a.jsx)(p.Dr, {
                                          onClick: ti,
                                          icon: (0, a.jsx)(v.I, { variant: 'playNext', size: 'xxs' }),
                                          disabled: !e1.isAuthorized,
                                          'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU_PLAY_NEXT_BUTTON,
                                          children: (0, a.jsx)(c.A, { id: 'play-queue.play-next' }),
                                      }),
                                  tQ &&
                                      (0, a.jsx)(p.Dr, {
                                          onClick: ta,
                                          icon: (0, a.jsx)(v.I, { variant: 'playLast', size: 'xxs' }),
                                          disabled: !e1.isAuthorized,
                                          'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU_PLAY_LAST_BUTTON,
                                          children: (0, a.jsx)(c.A, { id: 'play-queue.play-last' }),
                                      }),
                                  tz &&
                                      !eG.isSyncLyricsMode &&
                                      (0, a.jsx)(p.Dr, {
                                          className: (0, s.$)({ [em().syncLyrics]: eP }),
                                          onClick: tM,
                                          icon: (0, a.jsx)(v.I, { variant: 'syncLyrics', size: 'xxs' }),
                                          disabled: !e1.isAuthorized,
                                          'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU_SHOW_SYNC_LYRICS_BUTTON,
                                          children: (0, a.jsx)(c.A, { id: 'interface-actions.open-sync-lyrics' }),
                                      }),
                                  tz &&
                                      eG.isSyncLyricsMode &&
                                      (0, a.jsx)(p.Dr, {
                                          className: (0, s.$)({ [em().syncLyrics]: eP }),
                                          onClick: tM,
                                          icon: (0, a.jsx)(v.I, { variant: 'syncLyrics', size: 'xxs' }),
                                          'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU_HIDE_SYNC_LYRICS_BUTTON,
                                          children: (0, a.jsx)(c.A, { id: 'interface-actions.hide-sync-lyrics' }),
                                      }),
                                  tZ &&
                                      (0, a.jsx)(p.Dr, {
                                          onClick: tU,
                                          icon: (0, a.jsx)(v.I, { variant: 'bucket', size: 'xxs' }),
                                          children: (0, a.jsx)(c.A, { id: 'play-queue.delete-from-queue' }),
                                      }),
                                  tV && (0, a.jsx)(Q.D, { onClick: tl, isDisliked: ej.isDisliked }),
                                  tW && (0, a.jsx)(ed.$, { track: ej }),
                                  tF &&
                                      (0, a.jsx)(p.Dr, {
                                          disabled: !e1.isAuthorized,
                                          onClick: tP,
                                          icon: (0, a.jsx)(v.I, { variant: 'lyrics', size: 'xxs' }),
                                          'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU_LYRICS_BUTTON,
                                          children: (0, a.jsx)(c.A, { id: 'interface-actions.open-lyrics' }),
                                      }),
                                  ej.isNonUserGenerated && (0, a.jsx)(ee.H, { shareLink: tm, entityMeta: t0 }),
                                  tG &&
                                      (null == (eE = ej.mainAlbum) ? void 0 : eE.url) &&
                                      (0, a.jsx)(J.f, { albumUrl: ej.mainAlbum.url, albumType: ej.mainAlbum.type, trackType: ej.type }),
                                  t$ && ej.artists[0] && (0, a.jsx)(ec.o, { artists: ej.artists }),
                                  tX &&
                                      (0, a.jsx)(et.U, {
                                          onClick: tr,
                                          isLiked: null == (eN = ej.mainAlbum) ? void 0 : eN.isLiked,
                                          albumType: null == (eg = ej.mainAlbum) ? void 0 : eg.type,
                                      }),
                                  ej.isUGC && (0, a.jsx)(eo, { track: ej }),
                                  td &&
                                      tC &&
                                      (0, a.jsx)(p.Dr, {
                                          onClick: tE,
                                          icon: (0, a.jsx)(v.I, { variant: 'bucket', size: 'xxs' }),
                                          'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU_REMOVE_TRACK_FROM_PLAYLIST_BUTTON,
                                          children: (0, a.jsx)(c.A, { id: 'playlist-actions.remove-from-playlist' }),
                                      }),
                                  !td &&
                                      (0, a.jsx)(p.Dr, {
                                          onClick: tR,
                                          icon: (0, a.jsx)(v.I, { variant: 'info', size: 'xxs' }),
                                          'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU_ABOUT_TRACK_BUTTON,
                                          children: ty,
                                      }),
                              ]),
                          });
                });
        },
        40229: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => A });
            var a = i(32290),
                s = i(63618),
                l = i(96103),
                r = i(55178),
                n = i(60900),
                o = i(21732),
                c = i(86269),
                d = i(99902),
                u = i(57594),
                m = i(11323),
                _ = i(90326),
                v = i(80195),
                p = i(50251),
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
                            isCurrent: f,
                            radius: I,
                            isPlayButtonLoading: T,
                            isLoading: k,
                            shouldShowControl: h = !0,
                            ariaDescribedBy: C,
                            ignoreDislikedStyles: E,
                            entityCoverStyle: O,
                            forwardRef: N,
                            playButtonIconSize: g = 'xs',
                            alt: b,
                            withLoadingIndicator: S,
                            coverClassName: j,
                            entityCoverClassName: L,
                            controlClassName: R,
                            fallbackIconSize: D = 'xs',
                        } = e,
                        { formatMessage: P } = (0, n.A)(),
                        {
                            settings: { isMobile: M },
                        } = (0, u.g)();
                    return (0, a.jsx)('div', {
                        className: (0, s.$)(y().root, t, { [y().root_disabled]: !i, [y().root_current]: f, [y().root_disliked]: l && !E, [y().root_playing]: A }),
                        'data-test-id': o.S7.PLAY_BUTTON_WITH_COVER,
                        children: (0, a.jsxs)(c.t, {
                            className: (0, s.$)(y().cover, j),
                            radius: I,
                            children: [
                                (0, a.jsx)(m.B, {
                                    className: (0, s.$)(y().coverImage, L),
                                    src: r,
                                    size: 100,
                                    alt: null != b ? b : P({ id: 'entity-names.track-name' }, { trackName: p }),
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    isAvailable: i,
                                    fallbackIconSize: D,
                                    style: O,
                                    withLoadingIndicator: S,
                                }),
                                h &&
                                    (0, a.jsxs)('div', {
                                        className: (0, s.$)(y().control, R),
                                        children: [
                                            !k && (0, a.jsx)(v.P, { stopAnimation: !A, className: y().playingAnimation }),
                                            k && M && (0, a.jsx)(d.y, { size: 'xs', className: y().spinner }),
                                            !M &&
                                                (0, a.jsx)(_.D, {
                                                    ref: N,
                                                    variant: 'filled',
                                                    className: (0, s.$)(y().playButton, { [y().playButton_loading]: T }),
                                                    iconClassName: y().playButtonIcon,
                                                    isPlaying: A,
                                                    onClick: x,
                                                    iconSize: g,
                                                    ariaDescribedBy: C,
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
        44265: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            var a = (function (e) {
                return (e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e;
            })({});
        },
        46673: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => l });
            var a = i(83778),
                s = i(71483);
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
        47742: (e) => {
            e.exports = { menu: 'ContextSubMenuAddToPlaylist_menu__76MDp' };
        },
        47989: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => c });
            var a = i(32290),
                s = i(39407),
                l = i(71926),
                r = i(58534),
                n = i(78099),
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
        50251: (e) => {
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
        51730: (e) => {
            e.exports = { root: 'ContextMenuPlaylistItem_root__WU_1g', icon: 'ContextMenuPlaylistItem_icon__U79vo' };
        },
        52843: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => s });
            let a = (e, t) => (t > 0 ? Math.floor(e / t) : 0),
                s = (e, t) => {
                    let i = a(e, 3600),
                        s = a(e - 3600 * i, 60),
                        l = e - 3600 * i - 60 * s,
                        r = a(t || e, 3600) > 0,
                        n = [s, l];
                    return r && n.unshift(i), n.map((e) => String(e).padStart(2, '0')).join(':');
                };
        },
        54950: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => r, e: () => l });
            var a = i(96333),
                s = i(97647);
            let l = (e) => {
                    if (!e) return s.c.TRACK;
                    switch (e.type) {
                        case a.S.PODCAST:
                            return s.c.PODCAST_EPISODE;
                        case a.S.AUDIOBOOK:
                            return s.c.AUDIOBOOK_EPISODE;
                        default:
                            return s.c.TRACK;
                    }
                },
                r = (e) => l(e);
        },
        56117: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => ee });
            var a = i(32290),
                s = i(96103),
                l = i(55178),
                r = i(60900),
                n = i(39407),
                o = i(21732),
                c = i(82586),
                d = i(19740),
                u = i(57594),
                m = i(21916),
                _ = i(2047),
                v = i(91027),
                p = i(20168),
                y = i(47989),
                x = i(45477),
                A = i(75582),
                f = i(36477),
                I = i(58139),
                T = i(63618),
                k = i(42406),
                h = i(6752),
                C = i(44265),
                E = i(17705),
                O = i(71926),
                N = i(66920),
                g = i(14482),
                b = i(58534),
                S = i(78099),
                j = i.n(S);
            let L = () =>
                (0, a.jsx)(b.$, {
                    message: (0, a.jsx)(O.HL, {
                        className: j().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, a.jsx)(n.A, { id: 'playlist-errors.failed-to-remove-track' }),
                    }),
                });
            var R = i(97647),
                D = i(11323),
                P = i(61258),
                M = i(61),
                U = i.n(M);
            let K = (0, s.PA)((e) => {
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
                return (0, a.jsx)(b.$, {
                    closeToast: o,
                    message: m,
                    cover: (0, a.jsx)(D.B, { className: U().image, src: s, withAvatarReplace: !0, size: 100, fit: 'cover', alt: t }),
                    coverRadius: 's',
                });
            });
            var w = i(54950),
                B = i(51730),
                z = i.n(B);
            let F = (e) => {
                let { playlist: t, track: i, autoFocus: s } = e,
                    { formatMessage: n } = (0, r.A)(),
                    m = (0, I.R)(),
                    _ = (() => {
                        let { notify: e } = (0, A.l)(),
                            { playlist: t, fullscreenPlayer: i } = (0, u.g)(),
                            s = (0, v.c)((s) => {
                                var l, r;
                                let { withSuccessNotification: n, withPageRefresh: o, playlist: c, track: d } = s;
                                if (n && d && c) {
                                    let t = (0, w.e)(d);
                                    e((0, a.jsx)(K, { entityTitle: d.title, entityVariant: t, entityCoverUri: null != (r = d.coverUri) ? r : '', playlist: c }), {
                                        containerId: i.modal.isOpened ? x.u.FULLSCREEN_INFO : x.u.INFO,
                                    });
                                }
                                o && (null == c ? void 0 : c.uuid) === (null == (l = t.meta) ? void 0 : l.uuid) && t.refresh();
                            }),
                            l = (0, v.c)((t) => {
                                let { withFailNotification: s } = t;
                                s && e((0, a.jsx)(L, {}), { containerId: i.modal.isOpened ? x.u.FULLSCREEN_ERROR : x.u.ERROR });
                            });
                        return (0, v.c)(async (e) => {
                            let { playlist: t, track: i, trackIndex: a, withSuccessNotification: r = !0, withFailNotification: n = !0, withPageRefresh: o = !0 } = e,
                                c = await t.changePlaylist((0, N.M)({ operation: g.y.DELETE, startPosition: a, endPosition: a + 1 }));
                            return c === p.Y.OK ? s({ withSuccessNotification: r, withPageRefresh: o, playlist: t, track: i }) : l({ withFailNotification: n }), c;
                        });
                    })(),
                    { isTrackInPlaylist: y, trackIndexInPlaylist: f } = ((e, t) => {
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
                    T = (0, l.useCallback)(() => {
                        y ? _({ playlist: t, track: i, trackIndex: f }) : m({ playlist: t, track: i });
                    }, [m, _, t, i, f, y]);
                return (0, a.jsxs)(d.Dr, {
                    autoFocus: s,
                    className: z().root,
                    onClick: T,
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
            var Y = i(79856),
                H = i(39380),
                q = i.n(H);
            let V = (e) => {
                    let { forwardRef: t, className: i, ...s } = e;
                    return (0, a.jsx)(d.Dr, { className: i, ref: t, ...s, children: (0, a.jsx)(Y.W, { isActive: !0, className: q().shimmer }) });
                },
                W = (0, l.forwardRef)((e, t) => {
                    let { ...i } = e;
                    return (0, a.jsx)(V, { ...i, forwardRef: t });
                });
            var X = i(91542),
                G = i.n(X);
            let $ = 'EndlessFeed',
                Q = (0, s.PA)((e) => {
                    var t, i, s;
                    let { track: m } = e,
                        { user: _, contextMenuPlaylists: p } = (0, u.g)(),
                        { formatMessage: y } = (0, r.A)(),
                        x = (0, E.K)(m),
                        A = (0, l.useRef)(null),
                        { isIntersecting: f } = null != (i = (0, k.BL)([A], { preflightCheck: !1 }, p.isShimmerVisible)[$]) ? i : {},
                        I = Math.ceil(p.items.length / 20),
                        O = null != (s = null == (t = p.pagesLoader.pager) ? void 0 : t.page) ? s : 0,
                        N = (0, v.c)((e) => {
                            _.account.data.uid && p.getData({ userId: _.account.data.uid, page: e, pageSize: 20 });
                        });
                    (0, l.useEffect)(() => {
                        f && N(O + 1);
                    }, [f, N]);
                    let g = (0, l.useMemo)(() => {
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
                        b = (0, h.L)(() => {
                            let e = p.items.filter((e) => null !== e);
                            if (0 !== e.length)
                                return e.map((e, t) => {
                                    if (!e || e.kind === C.j.LIKE) return;
                                    let i = O + 1 === I && t === p.items.length - (p.items.length % 20);
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
                                    g,
                                    b,
                                    !p.isResolved && Array.from({ length: 10 }, (e, t) => (0, a.jsx)(W, {}, t)),
                                    (0, a.jsx)(W, {
                                        className: (0, T.$)({ [G().shimmerEndItem]: O + 1 === I }),
                                        ref: A,
                                        'data-intersection-property-id': $,
                                        'data-end-shimmer': !0,
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var Z = i(47742),
                J = i.n(Z);
            let ee = (0, s.PA)((e) => {
                let { track: t } = e,
                    { user: i, contextMenuPlaylists: s } = (0, u.g)(),
                    T = ((e) => {
                        let { createPlaylist: t, fullscreenPlayer: i } = (0, u.g)(),
                            { notify: s } = (0, A.l)(),
                            l = (0, m.useRouter)(),
                            { formatMessage: n } = (0, r.A)(),
                            o = (0, I.R)(),
                            c = (0, v.c)(async (e) => {
                                var i;
                                if (
                                    (await t.create({ title: n({ id: 'entity-names.new-playlist' }), visibility: _.L.PUBLIC }),
                                    !(null == t || null == (i = t.meta) ? void 0 : i.uuid))
                                )
                                    return null;
                                if ((await o({ playlist: t.meta, track: e, withPageRefresh: !1, withFailNotification: !1, withSuccessNotification: !1 })) === p.Y.OK) {
                                    let { href: e } = (0, f.u)('/playlists/:playlistUuid', { params: { playlistUuid: t.meta.uuid } });
                                    return t.reset(), e;
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
                    h = (0, l.useCallback)(async () => {
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
                        onShow: h,
                        icon: (0, a.jsx)(c.I, { variant: 'addToPlaylist', size: 'xxs' }),
                        label: k({ id: 'playlist-actions.add-track-to-playlist' }),
                        ariaLabel: k({ id: 'playlist-actions.add-track-to-playlist' }),
                        disabled: !i.isAuthorized,
                        menuClassName: J().menu,
                        'data-test-id': o.Kq.track.TRACK_CONTEXT_MENU_ADD_TO_PLAYLIST_BUTTON,
                        children: [
                            (0, a.jsx)(d.Dr, {
                                onClick: T,
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
        58139: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => C });
            var a = i(32290),
                s = i(91027),
                l = i(20168),
                r = i(66920),
                n = i(14482),
                o = i(47989),
                c = i(96103),
                d = i(55178),
                u = i(39407),
                m = i(71926),
                _ = i(57594),
                v = i(58534),
                p = i(97647),
                y = i(11323),
                x = i(61258),
                A = i(61),
                f = i.n(A);
            let I = (0, c.PA)((e) => {
                let { entityTitle: t, entityVariant: i, entityCoverUri: l, playlist: r, closeToast: n } = e,
                    { fullscreenPlayer: o } = (0, _.g)(),
                    c = (0, s.c)(() => {
                        o.modal.isOpened && o.modal.close();
                    }),
                    A = (0, d.useMemo)(() => {
                        let e,
                            s = {
                                trackName: (0, a.jsxs)(m.HL, {
                                    className: f().title,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    lineClamp: 1,
                                    children: ['\xa0', t, '\xa0'],
                                }),
                                playlistName: (0, a.jsx)(x.N, {
                                    className: f().link,
                                    href: r.url,
                                    onClick: c,
                                    children: (0, a.jsxs)(m.HL, {
                                        className: f().playlistTitle,
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
                        return (0, a.jsx)(m.HL, { className: f().message, variant: 'div', type: 'controls', size: 'm', lineClamp: 1, children: e });
                    }, [t, i, c, r.title, r.url]);
                return (0, a.jsx)(v.$, {
                    closeToast: n,
                    message: A,
                    cover: (0, a.jsx)(y.B, { className: f().image, src: l, withAvatarReplace: !0, size: 100, fit: 'cover', alt: t }),
                    coverRadius: 's',
                });
            });
            var T = i(54950),
                k = i(45477),
                h = i(75582);
            let C = () => {
                let { notify: e } = (0, h.l)(),
                    { playlist: t, fullscreenPlayer: i } = (0, _.g)(),
                    c = (0, s.c)((s) => {
                        var l, r;
                        let { withSuccessNotification: n, withPageRefresh: o, playlist: c, track: d } = s;
                        if (n) {
                            let t = (0, T.e)(d);
                            e((0, a.jsx)(I, { entityTitle: d.title, entityVariant: t, entityCoverUri: null != (r = d.coverUri) ? r : '', playlist: c }), {
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
                        p = 'undefined' != typeof window && window.nativeSettings?.get('modSettings.playlist.addTracksToEndFromContextMenu') === !0,
                        v = null != i.tracksCount ? i.tracksCount : null != i.trackCount ? i.trackCount : null == i ? void 0 : i.meta?.tracksCount,
                        h = null != v ? v : null == i ? void 0 : i.meta?.trackCount,
                        g = p ? Number(null != h ? h : Array.isArray(i.tracks) ? i.tracks.length : 0) || 0 : 0,
                        m = await i.changePlaylist(
                            (0, r.M)({ operation: n.y.INSERT, position: g, tracks: [{ id: a.id, albumId: null == (t = a.mainAlbum) ? void 0 : t.id }] }),
                        );
                    return m === l.Y.OK ? c({ withSuccessNotification: s, withPageRefresh: u, playlist: i, track: a }) : d({ withFailNotification: o }), m;
                });
            };
        },
        58359: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => s });
            var a = {};
            Object.defineProperty(a, '__esModule', { value: !0 }),
                (a.createRipple = void 0),
                (a.createRipple = function (e, t, i) {
                    let a = null != i ? i : e.currentTarget,
                        s = document.createElement('span'),
                        l = Math.max(a.clientWidth, a.clientHeight),
                        r = l / 2,
                        n = a.getBoundingClientRect(),
                        o = 0 === e.clientX ? Math.round(n.width / 2) : e.clientX - n.left,
                        c = 0 === e.clientY ? Math.round(n.height / 2) : e.clientY - n.top;
                    (s.style.width = ''.concat(l, 'px')),
                        (s.style.height = ''.concat(l, 'px')),
                        (s.style.left = 0 === e.clientX ? '0px' : ''.concat(o - r, 'px')),
                        (s.style.top = ''.concat(c - r, 'px')),
                        s.classList.add(t);
                    let d = a.getElementsByClassName(t)[0];
                    d && d.remove(), a.insertBefore(s, a.firstChild);
                }),
                a.__esModule;
            var s = a.createRipple;
        },
        59041: (e) => {
            e.exports = {
                cancelIcon: 'TrackContextMenuDownloadItem_cancelIcon__0YF_e',
                root: 'TrackContextMenuDownloadItem_root__BALdW',
                downloadingProgress: 'TrackContextMenuDownloadItem_downloadingProgress__Xmtgm',
                progress: 'TrackContextMenuDownloadItem_progress__FMBws',
            };
        },
        60214: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => v });
            var a = i(32290),
                s = i(55178),
                l = i(39407),
                r = i(21732),
                n = i(71926),
                o = i(58534),
                c = i(97647),
                d = i(11323),
                u = i(9480),
                m = i(92002),
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
        65163: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { O: () => a }),
                (function (e) {
                    (e.RADIO_STARTED = 'radioStarted'),
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
                        (e.PLAYABLE_ITEM_UNDISLIKE = 'playableItemUndislike');
                })(a || (a = {}));
        },
        66249: (e, t, i) => {
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
        66920: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => s });
            var a = i(80451);
            let s = (e) => {
                let { operation: t, position: i, startPosition: s, endPosition: l, tracks: r } = e,
                    n = ((e) =>
                        Object.keys(e)
                            .filter((t) => void 0 !== e[t])
                            .reduce((t, i) => ((t[i] = e[i]), t), {}))({ op: t, at: i, from: s, to: l, tracks: r });
                return (0, a.stringifyJSONSafely)([n]);
            };
        },
        67221: (e) => {
            e.exports = { ugcLabel: 'TrackContextMenuHeader_ugcLabel__k7hmv' };
        },
        70675: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => a });
            let a = 'offline';
        },
        71264: (e) => {
            e.exports = {
                root: 'DownloadingProgress_root__2Wsc5',
                cancelIcon: 'DownloadingProgress_cancelIcon__Eq2uD',
                progressBar: 'DownloadingProgress_progressBar__ajbBU',
            };
        },
        74924: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => c });
            var a,
                s = i(55178),
                l = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length; )
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
                        i.r(t), i.d(t, { clsx: () => a, default: () => s });
                        let s = a;
                    },
                    3183: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => a });
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
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a);
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    833: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.CircleProgress = void 0);
                        let s = i(4377),
                            l = i(810),
                            r = i(5881),
                            n = a(i(3183));
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
                                f = 0.25 * A,
                                I = (0, l.useMemo)(() => {
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
                                            strokeDashoffset: f,
                                            strokeDasharray: I,
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
                return l[e].call(i.exports, i, i.exports, n), i.exports;
            }
            (n.d = (e, t) => {
                for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (n.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var o = {};
            (() => {
                Object.defineProperty(o, 'X', { value: !0 }), (o.m = void 0);
                var e = n(833);
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
        75369: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => s });
            var a = i(3623);
            function s(e) {
                return (null == e ? void 0 : e.data.type) === a.R.Music;
            }
        },
        75783: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => N });
            var a = i(32290),
                s = i(92708),
                l = i(55178),
                r = i(60900),
                n = i(62386),
                o = i(63380),
                c = i(65163),
                d = i(91027),
                u = i(45477),
                m = i(75582),
                _ = i(44128),
                v = i(57594),
                p = i(90357),
                y = i(63618),
                x = i(86269),
                A = i(74196),
                f = i(71926),
                I = i(58534),
                T = i(97647),
                k = i(11323),
                h = i(12906),
                C = i.n(h);
            let E = (e) => {
                let t,
                    { coverUri: i, title: s, isDisliked: l, closeToast: n, className: o, entityVariant: c } = e,
                    { formatMessage: d } = (0, r.A)();
                if (l)
                    switch (c) {
                        case T.c.PODCAST_EPISODE:
                            t = d({ id: 'notifications-info.podcast-episode-unavailable-in-recommendations' });
                            break;
                        case T.c.AUDIOBOOK_EPISODE:
                            t = d({ id: 'notifications-info.audiobook-episode-unavailable-in-recommendations' });
                            break;
                        default:
                            t = d({ id: 'notifications-info.track-unavailable-in-recommendations' });
                    }
                else
                    switch (c) {
                        case T.c.PODCAST_EPISODE:
                            t = d({ id: 'notifications-info.podcast-episode-available-in-recommendations' });
                            break;
                        case T.c.AUDIOBOOK_EPISODE:
                            t = d({ id: 'notifications-info.audiobook-episode-available-in-recommendations' });
                            break;
                        default:
                            t = d({ id: 'notifications-info.track-available-in-recommendations' });
                    }
                return (0, a.jsx)(I.$, {
                    className: (0, y.$)(C().root, o),
                    closeToast: n,
                    message: (0, a.jsxs)('div', {
                        className: C().message,
                        children: [
                            (0, a.jsx)(A.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, a.jsx)(x.t, {
                                className: C().cover,
                                radius: 's',
                                children: (0, a.jsx)(k.B, { className: C().image, src: i, alt: s, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, a.jsx)(f.HL, { className: C().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                });
            };
            var O = i(54950);
            let N = (e) => {
                let { user: t, fullscreenPlayer: i } = (0, v.g)(),
                    y = (0, _.e)(),
                    { notify: x } = (0, m.l)(),
                    [A, f] = (0, l.useState)(!1),
                    { formatMessage: I } = (0, r.A)(),
                    T = (0, O.b)(e);
                return (0, d.c)(async () => {
                    if (e) {
                        let r = i.modal.isOpened ? u.u.FULLSCREEN_INFO : u.u.INFO,
                            d = i.modal.isOpened ? u.u.FULLSCREEN_ERROR : u.u.ERROR;
                        if (!t.isAuthorized) return void x((0, a.jsx)(p.h, { error: I({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: d });
                        if (A) return;
                        let m = { ...(0, s.HO)(e), isDisliked: !e.isDisliked };
                        f(!0);
                        let _ = await e.toggleDislike();
                        if ((f(!1), _ === o.f.OK)) {
                            var l;
                            x((0, a.jsx)(E, { coverUri: m.coverUri, isDisliked: m.isDisliked, title: m.title, entityVariant: T }), { containerId: r });
                            let e = m.isDisliked ? c.O.DISLIKE : c.O.UNDISLIKE;
                            if (y && (0, n.i)(y.state.currentContext.value)) {
                                let t = y.state.queueState.entityList.value.find((e) => {
                                    let { entity: t } = e;
                                    return t.data.meta.id === m.id;
                                });
                                t && (await y.state.currentContext.value.sendFeedback({ type: e, entity: t.entity }));
                            }
                            m.isDisliked &&
                                m.id === (null == y || null == (l = y.state.queueState.currentEntity.value) ? void 0 : l.entity.data.meta.id) &&
                                (null == y || y.moveForward());
                        } else x((0, a.jsx)(p.h, { error: I({ id: 'error-messages.error-during-action' }) }), { containerId: d });
                    }
                });
            };
        },
        77327: (e, t, i) => {
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
        78099: (e) => {
            e.exports = { message: 'FailedPlaylistNotification_message__wxrzi' };
        },
        79490: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => s });
            var a = i(71483);
            function s(e) {
                return (null == e ? void 0 : e.data.type) === a.K.Generative;
            }
        },
        80195: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => o });
            var a = i(32290),
                s = i(63618),
                l = i(21732),
                r = i(17713),
                n = i.n(r);
            let o = (e) => {
                let { className: t, stopAnimation: i } = e;
                return (0, a.jsx)('div', { className: (0, s.$)(n().root, { [n().root_stopAnimation]: i }, t), 'data-test-id': l.S7.PLAYING_ANIMATION });
            };
        },
        80408: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            let a = () => new URL(window.location.href).searchParams;
        },
        83778: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { h: () => a }),
                (function (e) {
                    (e.BASED_ON_ENTITY_BY_DEFAULT = 'BASED_ON_ENTITY_BY_DEFAULT'),
                        (e.USER_TRACKS = 'USER_TRACKS'),
                        (e.DOWNLOADED_TRACKS = 'DOWNLOADED_TRACKS'),
                        (e.SEARCH = 'SEARCH'),
                        (e.MUSIC_HISTORY = 'MUSIC_HISTORY'),
                        (e.MUSIC_HISTORY_SEARCH = 'MUSIC_HISTORY_SEARCH'),
                        (e.ARTIST_MY_COLLECTION = 'ARTIST_MY_COLLECTION'),
                        (e.ARTIST_FAMILIAR_FROM_WAVE = 'ARTIST_FAMILIAR_FROM_WAVE');
                })(a || (a = {}));
        },
        83917: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => a });
            let a = (0, i(55178).createContext)(null);
        },
        84141: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => c });
            var a = i(91027),
                s = i(19383),
                l = i(33323),
                r = i(57594),
                n = i(80408),
                o = i(28816);
            let c = (e) => {
                let { track: t, withSavingQueryParams: i, entityType: c, onNavigate: d } = e,
                    { fullscreenPlayer: u, album: m, track: _ } = (0, r.g)(),
                    v = m.id === t.albumId,
                    p = (0, o.p)(),
                    y = (0, a.c)((e) => {
                        if ((u.modal.isOpened && u.modal.close(), null == d || d(), v)) {
                            null == e || e.preventDefault();
                            let a = (0, n.j)();
                            i && a ? p(t.getUrl(Object.fromEntries(a))) : p(t.url), _.open({ trackId: t.id, albumId: t.albumId });
                        } else null == e || e.stopPropagation();
                    }),
                    x = (0, a.c)((e) => {
                        null == d || d(), null == e || e.stopPropagation();
                    }),
                    A = { entity: t, entityType: c },
                    f = (0, s.l)({ ...A, callback: y }),
                    I = (0, s.l)({ ...A, callback: x });
                return (0, l.C)({ onClick: f, onCmdCtrlClick: I });
            };
        },
        84427: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => s });
            var a = i(57594);
            let s = () => {
                let {
                    settings: { isMobile: e },
                } = (0, a.g)();
                return !e;
            };
        },
        88964: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => l });
            var a = i(70204),
                s = i(34186);
            function l() {
                return (0, s.N)().get(a.y$);
            }
        },
        91542: (e) => {
            e.exports = {
                divider: 'ContextMenuPlaylistsList_divider__JREhp',
                root: 'ContextMenuPlaylistsList_root__Greny',
                listPlaylist: 'ContextMenuPlaylistsList_listPlaylist__0oWLm',
                shimmerEndItem: 'ContextMenuPlaylistsList_shimmerEndItem__1K0_w',
                favouritesPlaylistItem: 'ContextMenuPlaylistsList_favouritesPlaylistItem__qYrTR',
                icon: 'ContextMenuPlaylistsList_icon__Fhxnh',
            };
        },
        92002: (e) => {
            e.exports = {
                entityTitle: 'NotificationPlayQueue_entityTitle__XCIsa',
                entityLink: 'NotificationPlayQueue_entityLink__O7tHL',
                text: 'NotificationPlayQueue_text___1DWX',
                image: 'NotificationPlayQueue_image__SLXsp',
            };
        },
        94315: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => r });
            var a = i(20472),
                s = i(97201),
                l = i(36477);
            let r = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: i } = (0, l.u)(a.Z.video.href, { query: { [s.K.IDS]: e.join(','), [s.K.ACTIVE_INDEX]: String(t) } });
                return i;
            };
        },
        96333: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { S: () => a }),
                (function (e) {
                    (e.TRACK = 'track'),
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
                        (e.POETRY = 'poetry');
                })(a || (a = {}));
        },
        97201: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => a });
            var a = (function (e) {
                return (
                    (e.TAB = 'tab'),
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
                    (e.MULTIVIBE_INVITE_ROOM_ID = 'multivibeInviteRoomId'),
                    e
                );
            })({});
        },
        99872: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => n });
            var a = i(91027),
                s = i(57594),
                l = i(28816),
                r = i(94315);
            let n = () => {
                let { fullscreenVideoPlayer: e } = (0, s.g)(),
                    t = (0, l.p)();
                return (0, a.c)(function (i) {
                    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    e.setIds(i), e.setClipIndex(a), t((0, r.J)(i, a)), e.modal.open();
                });
            };
        },
        99902: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => n });
            var a = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length; )
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
                        i.r(t), i.d(t, { clsx: () => a, default: () => s });
                        let s = a;
                    },
                    5900: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => a });
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
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a);
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    248: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Spinner = void 0);
                        let s = i(4377),
                            l = i(5881),
                            r = a(i(5900));
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
                return a[e].call(i.exports, i, i.exports, l), i.exports;
            }
            (l.d = (e, t) => {
                for (var i in t) l.o(t, i) && !l.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var r = {};
            (() => {
                Object.defineProperty(r, 'X', { value: !0 }), (r.$ = void 0);
                var e = l(248);
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
    },
]);
