(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1287, 9476],
    {
        520: (e, r, t) => {
            'use strict';
            t.d(r, { useAlbumAnalyticsAppScreenName: () => o });
            var i = t(55178),
                n = t(16172),
                s = t(64605);
            let o = (e) =>
                (0, i.useMemo)(() => {
                    switch (e) {
                        case s._.PODCAST:
                            return n.QT.PodcastScreen;
                        case s._.AUDIOBOOK:
                            return n.QT.AudiobookScreen;
                        default:
                            return n.QT.AlbumScreen;
                    }
                }, [e]);
        },
        3092: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPageHeader_root__2vfuc',
                container: 'MyMusicDownloadedTracksPageHeader_container__hQ_wt',
                title: 'MyMusicDownloadedTracksPageHeader_title__Ncn5X',
                stickyTitle: 'MyMusicDownloadedTracksPageHeader_stickyTitle__Efl0U',
                playButton: 'MyMusicDownloadedTracksPageHeader_playButton__seWgC',
                stickyPlayButton: 'MyMusicDownloadedTracksPageHeader_stickyPlayButton__JVicd',
                titleContainer: 'MyMusicDownloadedTracksPageHeader_titleContainer__rLAkS',
                staticHeader: 'MyMusicDownloadedTracksPageHeader_staticHeader__LSVC8',
                important: 'MyMusicDownloadedTracksPageHeader_important__JIubq',
                stickyHeader: 'MyMusicDownloadedTracksPageHeader_stickyHeader__MuQh4',
            };
        },
        7462: (e, r, t) => {
            'use strict';
            t.d(r, { AlbumEntityNameConsumer: () => o, useAlbumEntityName: () => a });
            var i = t(55178),
                n = t(60900),
                s = t(64605),
                o = (function (e) {
                    return (e.PIN = 'pin'), e;
                })({});
            let a = (e, r) => {
                let { formatMessage: t } = (0, n.A)();
                return (0, i.useMemo)(() => {
                    switch (e) {
                        case s._.SINGLE:
                            return t({ id: 'entity-names.single' });
                        case s._.PODCAST:
                            return t({ id: 'entity-names.podcast' });
                        case s._.AUDIOBOOK:
                            if ('pin' === r) return t({ id: 'entity-names.book' });
                            return t({ id: 'entity-names.audio' });
                        case s._.FAIRY_TALE:
                            return t({ id: 'entity-names.fairy-tale' });
                        default:
                            return t({ id: 'entity-names.album' });
                    }
                }, [e, t, r]);
            };
        },
        9152: (e, r, t) => {
            'use strict';
            t.d(r, {
                cr: () => m.AlbumEntityNameConsumer,
                GI: () => x,
                oM: () => C,
                rU: () => a,
                e7: () => s,
                G_: () => o,
                Rl: () => l.useAlbumAnalyticsAppScreenName,
                cp: () => d.useAlbumDisclaimer,
                r_: () => m.useAlbumEntityName,
                Ek: () => u.useMarkAlbumListenedClick,
                $1: () => c.useNavigateToAlbumCPA,
                KX: () => v.useOnLikeClick,
                A7: () => h.useOnPinClick,
                PL: () => b.useOnPresaveClick,
                c5: () => P.useOnPromoLandingLikeClick,
            });
            var i = t(60754),
                n = t(49574);
            let s = (e) => {
                    let r = (0, n.mxW)(e.trailer);
                    return (0, i.wg)({
                        id: e.id,
                        title: e.title,
                        coverUri: e.coverUri,
                        type: e.type,
                        year: e.year,
                        version: e.version,
                        genre: e.genre,
                        likesCount: e.likesCount,
                        averageColor: (0, n.QBb)(e.derivedColors),
                        isAvailable: !!e.available,
                        trackPosition: e.trackPosition,
                        disclaimers: e.disclaimers,
                        trackCount: e.trackCount,
                        availableForPremiumUsers: e.availableForPremiumUsers,
                        availableForOptions: e.availableForOptions || [],
                        bestAlbumTracks: e.bests,
                        durationSec: e.durationSec,
                        trailer: r,
                        listeningFinished: !!e.listeningFinished,
                    });
                },
                o = (e) => {
                    let r = !1;
                    e.presaveDate ? (r = !0) : e.presaved && (r = e.presaved);
                    let { disclaimers: t } = (0, n.fyr)(e);
                    return (0, i.wg)({ id: e.id, disclaimers: t, isPresave: r, title: e.title, type: e.type, coverUri: e.coverUri, releaseDate: e.releaseDate });
                };
            var a = (function (e) {
                    return (e.TRACK = 'track'), (e.TEXT = 'text'), e;
                })({}),
                l = t(520),
                d = t(34883),
                m = t(7462),
                u = t(18583),
                c = t(16472),
                v = t(83861),
                h = t(91253),
                b = t(63371),
                P = t(15807),
                _ = t(16172),
                g = t(64605),
                p = t(38103),
                y = t(90404),
                k = t(63380),
                f = t(95428);
            let A = i.gK.model('TrackPosition', { volume: i.gK.number, index: i.gK.number }),
                x = i.gK
                    .compose(
                        i.gK.model({
                            id: i.gK.number,
                            title: i.gK.string,
                            type: i.gK.maybe(i.gK.enumeration(Object.values(g._))),
                            coverUri: i.gK.maybe(i.gK.string),
                            averageColor: i.gK.maybe(i.gK.string),
                            year: i.gK.maybe(i.gK.number),
                            version: i.gK.maybe(i.gK.string),
                            isAvailable: i.gK.optional(i.gK.boolean, !0),
                            availableForOptions: i.gK.maybe(i.gK.array(i.gK.enumeration(Object.values(p.E)))),
                            availableForPremiumUsers: i.gK.maybe(i.gK.boolean),
                            bookmateOptionRequired: i.gK.maybe(i.gK.boolean),
                            genre: i.gK.maybe(i.gK.string),
                            trackPosition: i.gK.maybe(A),
                            disclaimers: i.gK.maybe(i.gK.array(i.gK.string)),
                            trackCount: i.gK.maybe(i.gK.number),
                            bestAlbumTracks: i.gK.maybe(i.gK.array(i.gK.number)),
                            trailer: i.gK.maybe(f.aQ),
                            durationSec: i.gK.maybe(i.gK.number),
                            listeningFinished: i.gK.maybe(i.gK.boolean),
                            releaseDate: i.gK.maybe(i.gK.string),
                        }),
                        f.tP,
                        f.Ec,
                    )
                    .views((e) => {
                        let r = {
                            get url() {
                                let { href: r } = (0, n.uvd)('/album/:albumId', { params: { albumId: e.id } });
                                return r;
                            },
                            get isLiked() {
                                if (!(0, i._n)(e)) return !1;
                                let { library: r } = (0, i.Zn)(e);
                                return null == r ? void 0 : r.isAlbumLiked(e.id);
                            },
                            get pinId() {
                                return ''.concat(y._.ALBUM_ITEM).concat(e.id);
                            },
                            get seeds() {
                                return ['album:'.concat(e.id)];
                            },
                            get isAlbum() {
                                return e.type === g._.ALBUM || e.type === g._.SINGLE;
                            },
                            get isPodcast() {
                                return e.type === g._.PODCAST;
                            },
                            get isAudiobook() {
                                return e.type === g._.AUDIOBOOK;
                            },
                            get isFairyTale() {
                                return e.type === g._.FAIRY_TALE;
                            },
                            get isNonMusic() {
                                if (!(0, i._n)(e)) return !1;
                                return r.isPodcast || r.isAudiobook || r.isFairyTale;
                            },
                            get mainObjectType() {
                                if (r.isPodcast) return _.ky.Podcast;
                                if (r.isAudiobook || r.isFairyTale) return _.ky.Audiobook;
                                return _.ky.Album;
                            },
                            get isPinned() {
                                if (!(0, i._n)(e)) return !1;
                                let { pinsCollection: r } = (0, i.Zn)(e);
                                return r.isPinned(this.pinId);
                            },
                            get isLegalRejected() {
                                if (!(0, i._n)(e)) return !1;
                                return e.getIsLegalRejected(e.isAvailable);
                            },
                            get isUnsafeLegal() {
                                if (!(0, i._n)(e)) return !1;
                                return e.getIsUnsafeLegal(e.isAvailable);
                            },
                            get isAvailableOnlyForPlus() {
                                var t;
                                return !e.isAvailable && (e.availableForPremiumUsers || !!(null == (t = e.availableForOptions) ? void 0 : t.includes(p.E.BOOKMATE)));
                            },
                            get shouldShowBooksBadge() {
                                var s;
                                return !!(
                                    e.bookmateOptionRequired ||
                                    (!e.availableForPremiumUsers && (null == (s = e.availableForOptions) ? void 0 : s.includes(p.E.BOOKMATE)))
                                );
                            },
                            getDisclaimerEntityRef: (t) => ({ entityType: null != t ? t : r.isPodcast ? n.nPY.PODCAST : n.nPY.ALBUM, entityId: e.id }),
                        };
                        return r;
                    })
                    .actions((e) => ({
                        toggleLike: (0, i.L3)(function* () {
                            if (!(0, i._n)(e)) return;
                            let { library: r, user: t } = (0, i.Zn)(e);
                            if (t.isAuthorized) {
                                let n = yield r.toggleAlbumLike({ entityId: e.id, userId: t.account.data.uid });
                                return (0, i._n)(e) && n === k.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), n;
                            }
                        }),
                        togglePin: (0, i.L3)(function* () {
                            if (!(0, i._n)(e)) return;
                            let { pinsCollection: r, user: t } = (0, i.Zn)(e);
                            if (t.isAuthorized) return yield r.toggleAlbumPin({ id: e.id }, e.pinId);
                        }),
                        getKey: (r) => ''.concat(r, '_').concat(e.id),
                        updateFinished: (r) => {
                            e.listeningFinished = r;
                        },
                    }))
                    .named('BaseAlbum');
            var T = t(90346);
            let C = i.gK
                .compose(
                    i.gK.model('BaseUpcomingAlbum', {
                        id: i.gK.number,
                        isPresave: i.gK.boolean,
                        title: i.gK.maybe(i.gK.string),
                        type: i.gK.maybe(i.gK.enumeration(Object.values(g._))),
                        coverUri: i.gK.maybe(i.gK.string),
                        releaseDate: i.gK.maybe(i.gK.string),
                    }),
                    f.Ec,
                )
                .actions((e) => {
                    let r = {
                        presaveAlbum: (0, i.L3)(function* (r) {
                            let { usersResource: t, modelActionsLogger: n } = (0, i._$)(e);
                            try {
                                e.isPresave = !0;
                                let i = yield t.presaveAlbum(r);
                                return i === T.J.ERROR && (e.isPresave = !1), i;
                            } catch (r) {
                                return (e.isPresave = !1), n.error(r), T.J.ERROR;
                            }
                        }),
                        removePresaveAlbum: (0, i.L3)(function* (r) {
                            let { usersResource: t, modelActionsLogger: n } = (0, i._$)(e);
                            try {
                                e.isPresave = !1;
                                let i = yield t.removePresaveAlbum(r);
                                return i === T.J.ERROR && (e.isPresave = !0), i;
                            } catch (r) {
                                return (e.isPresave = !0), n.error(r), T.J.ERROR;
                            }
                        }),
                        toggleLike: (0, i.L3)(function* () {
                            let t;
                            if (!(0, i._n)(e)) return;
                            let { user: n } = (0, i.Zn)(e);
                            if (n.account.data.uid)
                                return (
                                    (t = e.isPresave
                                        ? yield r.removePresaveAlbum({ albumId: e.id, userId: n.account.data.uid })
                                        : yield r.presaveAlbum({ albumId: e.id, userId: n.account.data.uid, likeAfterRelease: !0 })),
                                    !(0, i._n)(e),
                                    t
                                );
                        }),
                        getKey: (r) => ''.concat(r, '_').concat(e.id),
                    };
                    return r;
                });
        },
        12119: (e, r, t) => {
            'use strict';
            t.d(r, { NotFound: () => b });
            var i = t(32290),
                n = t(63618),
                s = t(96103),
                o = t(39407),
                a = t(63423),
                l = t(82586),
                d = t(71926),
                m = t(49574),
                u = t(44574),
                c = t(55178),
                v = t(55365),
                h = t.n(v);
            let b = (0, s.PA)((e) => {
                let { className: r, title: t, description: s, iconVariant: v = 'musicLogo', iconClassName: b, iconSize: P } = e,
                    { contentRef: _ } = (0, m.gKY)(),
                    g = (0, m.ZpR)(m.Zyd.main.href);
                (0, m.LZB)();
                let { handleNavigateToMain: p } = (0, m.D5F)(g);
                return (
                    (0, m.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, m.Pjs)();
                        (0, c.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, i.jsxs)('div', {
                        className: (0, n.$)(h().root, { [h().root_desktop]: !_ }, r),
                        children: [
                            (0, i.jsx)(u.Lh, { withBackwardFallback: '/', className: h().navigation, withForwardControl: !1 }),
                            (0, i.jsxs)('div', {
                                className: h().content,
                                children: [
                                    (0, i.jsx)(l.Icon, { className: (0, n.$)(h().icon, b), variant: v, size: P }),
                                    (0, i.jsx)(d.Heading, {
                                        className: (0, n.$)(h().title, h().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: t || (0, i.jsx)(o.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, i.jsx)(d.Caption, {
                                        className: (0, n.$)(h().text, h().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: s || (0, i.jsx)(o.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, i.jsx)(a.$, {
                                        onClick: p,
                                        className: h().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(d.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, i.jsx)(o.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        13365: (e, r, t) => {
            'use strict';
            var i;
            t.d(r, { _: () => i }),
                (function (e) {
                    (e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new');
                })(i || (i = {}));
        },
        15688: (e, r, t) => {
            'use strict';
            t.d(r, { f: () => h });
            var i = t(32290),
                n = t(92708),
                s = t(55178),
                o = t(60900),
                a = t(63380),
                l = t(91027),
                d = t(49574),
                m = t(44574),
                u = t(96103),
                c = t(79238);
            let v = (0, u.PA)((e) => {
                    let { album: r, closeToast: t, withLink: n } = e,
                        s = (0, c.b)(r);
                    return (0, i.jsx)(m.OM, {
                        closeToast: t,
                        entityVariant: s,
                        coverUri: r.coverUri,
                        entityUrl: r.url,
                        collectionUrl: '/collection',
                        entityTitle: r.title,
                        isLiked: r.isLiked,
                        withLink: n,
                    });
                }),
                h = () => {
                    let { notify: e } = (0, d.lkh)(),
                        [r, t] = (0, s.useState)(!1),
                        { formatMessage: u } = (0, o.A)();
                    return (0, l.c)(async (s) => {
                        let { album: o, withLink: l = !0, withNotification: c = !0 } = s;
                        if (r) return;
                        let h = { ...(0, n.HO)(o), url: o.url, isLiked: !o.isLiked };
                        t(!0);
                        let b = await o.toggleLike();
                        t(!1),
                            c &&
                                (b === a.f.OK
                                    ? e((0, i.jsx)(v, { withLink: l, album: h }), { containerId: d.uQT.INFO })
                                    : e((0, i.jsx)(m.hT, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: d.uQT.ERROR }));
                    });
                };
        },
        15807: (e, r, t) => {
            'use strict';
            t.d(r, { useOnPromoLandingLikeClick: () => l });
            var i = t(21916),
                n = t(94154),
                s = t(91027),
                o = t(49574),
                a = t(15688);
            let l = (e) => {
                let {
                        user: r,
                        modals: { promoLandingBuySubscriptionModal: t, crackdownModal: l },
                        settings: { isMobile: d },
                        paywall: m,
                        albumCPA: { isPlusCPAEnabled: u },
                        promolanding: c,
                    } = (0, o.Pjs)(),
                    { isFreemium: v } = (0, o.XCI)(),
                    h = (0, a.f)(),
                    { pageAlbumId: b } = (0, o.THB)(),
                    P = (0, i.useSearchParams)();
                return (0, s.c)(async () => {
                    if (u({ pageAlbumId: b, albumId: null == e ? void 0 : e.id, isNonMusic: null == e ? void 0 : e.isNonMusic })) return void m.openModal();
                    if ((!v || (null == e ? void 0 : e.isLiked) || (d ? t.open() : l.open()), r.isAuthorized) && e) {
                        if (!e.isLiked) {
                            var i, s;
                            c.sendLikeFeedback({
                                reaction: n.g.LIKE,
                                yclid: null != (i = P.get(o.K3F.YCLID)) ? i : '',
                                campaignId: null != (s = P.get(o.K3F.UTM_CAMPAIGN)) ? s : '',
                            });
                        }
                        return h({ album: e, withLink: !1, withNotification: r.hasPlus });
                    }
                });
            };
        },
        16472: (e, r, t) => {
            'use strict';
            t.d(r, { useNavigateToAlbumCPA: () => s });
            var i = t(91027),
                n = t(49574);
            let s = (e) => {
                let { albumId: r, albumUrl: t, callback: s } = e,
                    { getAlbumUrlWithSavedClid: o, checkIsCurrentAlbumPage: a } = (0, n.IQF)(),
                    l = (0, n.pqZ)();
                return (0, i.c)((e) => {
                    if (!r || !t) {
                        null == s || s(e);
                        return;
                    }
                    if (a(r)) {
                        null == e || e.preventDefault(), l(o(r, t));
                        return;
                    }
                    null == s || s(e);
                });
            };
        },
        18583: (e, r, t) => {
            'use strict';
            t.d(r, { useMarkAlbumListenedClick: () => d });
            var i = t(32290),
                n = t(55178),
                s = t(60900),
                o = t(92013),
                a = t(49574),
                l = t(44574);
            let d = () => {
                let { user: e, album: r, fullscreenPlayer: t } = (0, a.Pjs)(),
                    { notify: d } = (0, a.lkh)(),
                    { formatMessage: m } = (0, s.A)();
                return (0, n.useCallback)(async () => {
                    var n, s;
                    if (!r) return;
                    let u = t.modal.isOpened ? a.uQT.FULLSCREEN_ERROR : a.uQT.ERROR;
                    return e.isAuthorized
                        ? (await r.setListeningFinishedStatus()) !== o.T.OK
                            ? void d((0, i.jsx)(l.hT, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: u })
                            : void (null == (s = r.meta) || s.updateFinished(!(null == (n = r.meta) ? void 0 : n.listeningFinished)))
                        : void d((0, i.jsx)(l.hT, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: u });
                }, [m, d, r, e.isAuthorized, t.modal.isOpened]);
            };
        },
        19476: (e, r, t) => {
            'use strict';
            t.r(r), t.d(r, { default: () => c });
            var i = t(32290),
                n = t(63618),
                s = t(55178),
                o = t(44989),
                a = t(54280),
                l = t(49574),
                d = t(91288),
                m = t.n(d),
                u = t(49124);
            let c = (e) => {
                let { children: r } = e,
                    { state: t, toggleTrue: d } = (0, o.e)(!1),
                    { state: c, toggleTrue: v } = (0, o.e)(!1),
                    { getThemeFromStorage: h } = (0, l.QDo)(new a.si()),
                    b = (0, s.useMemo)(() => {
                        var e;
                        return null != (e = h()) ? e : (0, l.VDQ)();
                    }, [h]),
                    P = (0, s.useCallback)(
                        (e) => {
                            let r = u.env.ASSET_PREFIX || '';
                            return ''.concat(r, '/media/splash_screen/splash_screen_').concat(b, '.').concat(e);
                        },
                        [b],
                    ),
                    _ = (0, s.useMemo)(() => ({ isVisible: !t }), [t]);
                return (0, i.jsxs)(l.nlO.Provider, {
                    value: _,
                    children: [
                        !t &&
                            (0, i.jsx)('div', {
                                className: (0, n.$)(m().root, m()['root_'.concat(b)], { [m().root_hidden]: c }),
                                onAnimationEnd: d,
                                children: (0, i.jsxs)('video', {
                                    className: m().video,
                                    autoPlay: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    onEnded: v,
                                    onError: d,
                                    children: [(0, i.jsx)('source', { src: P('webm'), type: 'video/webm' }), (0, i.jsx)('source', { src: P('mp4'), type: 'video/mp4' })],
                                }),
                            }),
                        r,
                    ],
                });
            };
        },
        29474: (e, r, t) => {
            'use strict';
            t.d(r, { b: () => d, L: () => i.useDownloadedTracks });
            var i = t(92533),
                n = t(60754),
                s = t(3623),
                o = t(80864),
                a = t(49574),
                l = t(95428);
            let d = n.gK
                .compose(n.gK.model('DownloadedTracks', { items: n.gK.maybeNull(n.gK.array(o.vj)), tracks: n.gK.maybeNull(n.gK.frozen()) }), l.XT)
                .views((e) => ({
                    get tracksDurationInMinutes() {
                        var r, t;
                        return (null != (t = null == (r = e.tracks) ? void 0 : r.reduce((e, r) => (r.durationMs ? e + r.durationMs : e), 0)) ? t : 0) / 1e3 / 60;
                    },
                    get entitiesData() {
                        if (!e.tracks) return [];
                        return e.tracks.map((e) => ({ type: s.R.DownloadedMusic, meta: e }));
                    },
                    get isEmpty() {
                        var i;
                        return e.isResolved && (null == (i = e.items) ? void 0 : i.length) === 0;
                    },
                }))
                .actions((e) => ({
                    getData: (0, n.L3)(function* (r, t) {
                        let { modelActionsLogger: i } = (0, n._$)(e);
                        if (e.loadingState !== a.GuX.PENDING)
                            try {
                                e.loadingState = a.GuX.PENDING;
                                let i = yield r.getTracks(t);
                                (e.tracks = i), (e.items = (0, n.wg)(i.map((e) => (0, o.vU)(e)))), e.loadingState !== a.GuX.IDLE && (e.loadingState = a.GuX.RESOLVE);
                            } catch (r) {
                                i.error(r), e.loadingState !== a.GuX.IDLE && (e.loadingState = a.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.items = null), (e.tracks = null), (e.loadingState = a.GuX.IDLE);
                    },
                }));
        },
        30310: (e) => {
            e.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        32381: (e, r, t) => {
            'use strict';
            t.d(r, { w: () => i.SomethingWentWrong });
            var i = t(60194);
        },
        34883: (e, r, t) => {
            'use strict';
            t.d(r, { useAlbumDisclaimer: () => n });
            var i = t(49574);
            let n = (e) => {
                let { album: r, callback: t, shouldHistoryBack: n } = e;
                return (0, i.lVe)({ entity: r, callback: t, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        38103: (e, r, t) => {
            'use strict';
            var i;
            t.d(r, { E: () => i }),
                (function (e) {
                    (e.KIDS = 'kids'), (e.BOOKMATE = 'bookmate');
                })(i || (i = {}));
        },
        40996: (e, r, t) => {
            'use strict';
            t.d(r, { L: () => m });
            var i,
                n = t(97020),
                s = t(55178),
                o = {
                    6699: (e, r, t) => {
                        Object.defineProperty(r, '__esModule', { value: !0 }), (r.useDebouncedToggle = void 0);
                        let i = t(352),
                            n = t(810);
                        r.useDebouncedToggle = (e) => {
                            let { delay: r, initialState: t, throttleTimeout: s } = e,
                                o = (0, n.useRef)(null),
                                [a, l] = (0, n.useState)(!!t),
                                d = (0, n.useMemo)(
                                    () =>
                                        (0, i.throttle)(() => {
                                            l(!t),
                                                o.current && window.clearTimeout(o.current),
                                                (o.current = window.setTimeout(() => {
                                                    l(!!t);
                                                }, r));
                                        }, s),
                                    [r, t, s],
                                ),
                                m = (0, n.useCallback)(() => {
                                    l(!!t), o.current && window.clearTimeout(o.current);
                                }, [t]);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        o.current && window.clearTimeout(o.current);
                                    },
                                    [],
                                ),
                                { state: a, handleDebouncedToggle: d, reset: m }
                            );
                        };
                    },
                    361: (e, r) => {
                        Object.defineProperty(r, '__esModule', { value: !0 }),
                            (r.getElementFromRefOrElement = void 0),
                            (r.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            });
                    },
                    352: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = i || (i = t.t(s, 2));
                    },
                },
                a = {};
            function l(e) {
                var r = a[e];
                if (void 0 !== r) return r.exports;
                var t = (a[e] = { exports: {} });
                return o[e](t, t.exports, l), t.exports;
            }
            var d = {};
            (() => {
                Object.defineProperty(d, '__esModule', { value: !0 }), (d.useScroll = void 0);
                let e = l(810),
                    r = l(361),
                    t = l(6699);
                d.useScroll = (i) => {
                    let { onScroll: n, listenIsScrolling: s, elementRef: o } = i,
                        { state: a, handleDebouncedToggle: l } = (0, t.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                        d = (0, e.useCallback)(() => {
                            s && l(), null == n || n();
                        }, [s, l, n]);
                    return (
                        (0, e.useEffect)(() => {
                            let e = (0, r.getElementFromRefOrElement)(o);
                            if (null === e) return;
                            let t = null != e ? e : window,
                                i = { capture: !0, passive: !0 };
                            return t.addEventListener('scroll', d, i), () => t.removeEventListener('scroll', d, i);
                        }, [o, d]),
                        a
                    );
                };
            })(),
                d.__esModule;
            var m = d.useScroll;
        },
        43740: (e, r, t) => {
            'use strict';
            t.d(r, { a: () => n });
            var i = t(46862);
            let n = () => {
                let e = null,
                    r = new i.cJ(!1),
                    t = [];
                return {
                    isLoaded: r,
                    init: (i) => {
                        var n, s;
                        if (void 0 !== (null == (n = window.Ya) ? void 0 : n.Metrika2) && !r.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...i })),
                                    (r.value = !0),
                                    (s = e),
                                    t.forEach((e) => {
                                        e(s);
                                    }),
                                    (t.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && i.logger.error(e);
                            }
                    },
                    count: function (r) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [i]: r })
                            : t.push((e) => {
                                  e.params({ [i]: r });
                              });
                    },
                    hit: (r) => {
                        e
                            ? e.hit(r)
                            : t.push((e) => {
                                  e.hit(r);
                              });
                    },
                    reachGoal: (r, i) => {
                        if (!e) return void t.push((e) => e.reachGoal(r, i));
                        e.reachGoal(r, i);
                    },
                };
            };
        },
        47977: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'Chart_root__ODed_',
                position: 'Chart_position__7UNY9',
                position_disliked: 'Chart_position_disliked__HzjC7',
                position_disabled: 'Chart_position_disabled__poZzD',
                progress: 'Chart_progress__sGj4s',
                progress_up: 'Chart_progress_up__y083c',
                progress_same: 'Chart_progress_same__Cnbdb',
                progress_down: 'Chart_progress_down__lv_ae',
                progress_crown: 'Chart_progress_crown__o__Zm',
                progress_new: 'Chart_progress_new__7DobI',
                progress_disliked: 'Chart_progress_disliked__maVAk',
                progress_disabled: 'Chart_progress_disabled__JoFqG',
            };
        },
        54122: (e, r, t) => {
            Promise.resolve().then(t.bind(t, 63397)),
                Promise.resolve().then(t.bind(t, 46456)),
                Promise.resolve().then(t.bind(t, 50162)),
                Promise.resolve().then(t.bind(t, 7276)),
                Promise.resolve().then(t.bind(t, 29680)),
                Promise.resolve().then(t.bind(t, 86269)),
                Promise.resolve().then(t.bind(t, 79856)),
                Promise.resolve().then(t.bind(t, 15299)),
                Promise.resolve().then(t.bind(t, 71926)),
                Promise.resolve().then(t.bind(t, 76822)),
                Promise.resolve().then(t.bind(t, 89523)),
                Promise.resolve().then(t.bind(t, 19338)),
                Promise.resolve().then(t.bind(t, 76202)),
                Promise.resolve().then(t.bind(t, 67299)),
                Promise.resolve().then(t.bind(t, 7200)),
                Promise.resolve().then(t.bind(t, 72038)),
                Promise.resolve().then(t.bind(t, 19476)),
                Promise.resolve().then(t.bind(t, 520)),
                Promise.resolve().then(t.bind(t, 34883)),
                Promise.resolve().then(t.bind(t, 7462)),
                Promise.resolve().then(t.bind(t, 18583)),
                Promise.resolve().then(t.bind(t, 16472)),
                Promise.resolve().then(t.bind(t, 83861)),
                Promise.resolve().then(t.bind(t, 91253)),
                Promise.resolve().then(t.bind(t, 63371)),
                Promise.resolve().then(t.bind(t, 15807)),
                Promise.resolve().then(t.bind(t, 91853)),
                Promise.resolve().then(t.bind(t, 96036)),
                Promise.resolve().then(t.bind(t, 86955)),
                Promise.resolve().then(t.bind(t, 11067)),
                Promise.resolve().then(t.bind(t, 5942)),
                Promise.resolve().then(t.bind(t, 70390)),
                Promise.resolve().then(t.bind(t, 43742)),
                Promise.resolve().then(t.bind(t, 78176)),
                Promise.resolve().then(t.bind(t, 45754)),
                Promise.resolve().then(t.bind(t, 22370)),
                Promise.resolve().then(t.bind(t, 10466)),
                Promise.resolve().then(t.bind(t, 41677)),
                Promise.resolve().then(t.bind(t, 73749)),
                Promise.resolve().then(t.bind(t, 83917)),
                Promise.resolve().then(t.bind(t, 73141)),
                Promise.resolve().then(t.bind(t, 73192)),
                Promise.resolve().then(t.bind(t, 11674)),
                Promise.resolve().then(t.bind(t, 10511)),
                Promise.resolve().then(t.bind(t, 44277)),
                Promise.resolve().then(t.bind(t, 47989)),
                Promise.resolve().then(t.bind(t, 54869)),
                Promise.resolve().then(t.bind(t, 39055)),
                Promise.resolve().then(t.bind(t, 12779)),
                Promise.resolve().then(t.bind(t, 96919)),
                Promise.resolve().then(t.bind(t, 8032)),
                Promise.resolve().then(t.bind(t, 85697)),
                Promise.resolve().then(t.bind(t, 52981)),
                Promise.resolve().then(t.bind(t, 2355)),
                Promise.resolve().then(t.bind(t, 10431)),
                Promise.resolve().then(t.bind(t, 83557)),
                Promise.resolve().then(t.bind(t, 66436)),
                Promise.resolve().then(t.bind(t, 54203)),
                Promise.resolve().then(t.bind(t, 58294)),
                Promise.resolve().then(t.bind(t, 23030)),
                Promise.resolve().then(t.bind(t, 74804)),
                Promise.resolve().then(t.bind(t, 60214)),
                Promise.resolve().then(t.bind(t, 66349)),
                Promise.resolve().then(t.bind(t, 27594)),
                Promise.resolve().then(t.bind(t, 84141)),
                Promise.resolve().then(t.bind(t, 18729)),
                Promise.resolve().then(t.bind(t, 5420)),
                Promise.resolve().then(t.bind(t, 54171)),
                Promise.resolve().then(t.bind(t, 6647)),
                Promise.resolve().then(t.bind(t, 1456)),
                Promise.resolve().then(t.bind(t, 27616)),
                Promise.resolve().then(t.bind(t, 68912)),
                Promise.resolve().then(t.bind(t, 20477)),
                Promise.resolve().then(t.bind(t, 13486)),
                Promise.resolve().then(t.bind(t, 72732)),
                Promise.resolve().then(t.bind(t, 4664)),
                Promise.resolve().then(t.bind(t, 22762)),
                Promise.resolve().then(t.bind(t, 61113)),
                Promise.resolve().then(t.bind(t, 12326)),
                Promise.resolve().then(t.bind(t, 16710)),
                Promise.resolve().then(t.bind(t, 36916)),
                Promise.resolve().then(t.bind(t, 2413)),
                Promise.resolve().then(t.bind(t, 7902)),
                Promise.resolve().then(t.bind(t, 14631)),
                Promise.resolve().then(t.bind(t, 94631)),
                Promise.resolve().then(t.bind(t, 69951)),
                Promise.resolve().then(t.bind(t, 49464)),
                Promise.resolve().then(t.bind(t, 79727)),
                Promise.resolve().then(t.bind(t, 87155)),
                Promise.resolve().then(t.bind(t, 92498)),
                Promise.resolve().then(t.bind(t, 71768)),
                Promise.resolve().then(t.bind(t, 65650)),
                Promise.resolve().then(t.bind(t, 59564)),
                Promise.resolve().then(t.bind(t, 9471)),
                Promise.resolve().then(t.bind(t, 78305)),
                Promise.resolve().then(t.bind(t, 70632)),
                Promise.resolve().then(t.bind(t, 35058)),
                Promise.resolve().then(t.bind(t, 85743)),
                Promise.resolve().then(t.bind(t, 90923)),
                Promise.resolve().then(t.bind(t, 17595)),
                Promise.resolve().then(t.bind(t, 41540)),
                Promise.resolve().then(t.bind(t, 48462)),
                Promise.resolve().then(t.bind(t, 8868)),
                Promise.resolve().then(t.bind(t, 12350)),
                Promise.resolve().then(t.bind(t, 95481)),
                Promise.resolve().then(t.bind(t, 47745)),
                Promise.resolve().then(t.bind(t, 12989)),
                Promise.resolve().then(t.bind(t, 2969)),
                Promise.resolve().then(t.bind(t, 84051)),
                Promise.resolve().then(t.bind(t, 27789)),
                Promise.resolve().then(t.bind(t, 70435)),
                Promise.resolve().then(t.bind(t, 19875)),
                Promise.resolve().then(t.bind(t, 54391)),
                Promise.resolve().then(t.bind(t, 63529)),
                Promise.resolve().then(t.bind(t, 73818)),
                Promise.resolve().then(t.bind(t, 20599)),
                Promise.resolve().then(t.bind(t, 84782)),
                Promise.resolve().then(t.bind(t, 30915)),
                Promise.resolve().then(t.bind(t, 70608)),
                Promise.resolve().then(t.bind(t, 18746)),
                Promise.resolve().then(t.bind(t, 71610)),
                Promise.resolve().then(t.bind(t, 23352)),
                Promise.resolve().then(t.bind(t, 10936)),
                Promise.resolve().then(t.bind(t, 2792)),
                Promise.resolve().then(t.bind(t, 22714)),
                Promise.resolve().then(t.bind(t, 37240)),
                Promise.resolve().then(t.bind(t, 3064)),
                Promise.resolve().then(t.bind(t, 51012)),
                Promise.resolve().then(t.bind(t, 9848)),
                Promise.resolve().then(t.bind(t, 47498)),
                Promise.resolve().then(t.bind(t, 8152)),
                Promise.resolve().then(t.bind(t, 43474)),
                Promise.resolve().then(t.bind(t, 46200)),
                Promise.resolve().then(t.bind(t, 5537)),
                Promise.resolve().then(t.bind(t, 34186)),
                Promise.resolve().then(t.bind(t, 56008)),
                Promise.resolve().then(t.bind(t, 67732)),
                Promise.resolve().then(t.bind(t, 30787)),
                Promise.resolve().then(t.bind(t, 65476)),
                Promise.resolve().then(t.bind(t, 83416)),
                Promise.resolve().then(t.bind(t, 31010)),
                Promise.resolve().then(t.bind(t, 19383)),
                Promise.resolve().then(t.bind(t, 3313)),
                Promise.resolve().then(t.bind(t, 81619)),
                Promise.resolve().then(t.bind(t, 83808)),
                Promise.resolve().then(t.bind(t, 22191)),
                Promise.resolve().then(t.bind(t, 14858)),
                Promise.resolve().then(t.bind(t, 61945)),
                Promise.resolve().then(t.bind(t, 83920)),
                Promise.resolve().then(t.bind(t, 49545)),
                Promise.resolve().then(t.bind(t, 3796)),
                Promise.resolve().then(t.bind(t, 40953)),
                Promise.resolve().then(t.bind(t, 30542)),
                Promise.resolve().then(t.bind(t, 59121)),
                Promise.resolve().then(t.bind(t, 71773)),
                Promise.resolve().then(t.bind(t, 34284)),
                Promise.resolve().then(t.bind(t, 46151)),
                Promise.resolve().then(t.bind(t, 32087)),
                Promise.resolve().then(t.bind(t, 5701)),
                Promise.resolve().then(t.bind(t, 10659)),
                Promise.resolve().then(t.bind(t, 68135)),
                Promise.resolve().then(t.bind(t, 75265)),
                Promise.resolve().then(t.bind(t, 36321)),
                Promise.resolve().then(t.bind(t, 29098)),
                Promise.resolve().then(t.bind(t, 92191)),
                Promise.resolve().then(t.bind(t, 27120)),
                Promise.resolve().then(t.bind(t, 53022)),
                Promise.resolve().then(t.bind(t, 22748)),
                Promise.resolve().then(t.bind(t, 84199)),
                Promise.resolve().then(t.bind(t, 81218)),
                Promise.resolve().then(t.bind(t, 90169)),
                Promise.resolve().then(t.bind(t, 6429)),
                Promise.resolve().then(t.bind(t, 44128)),
                Promise.resolve().then(t.bind(t, 31286)),
                Promise.resolve().then(t.bind(t, 92496)),
                Promise.resolve().then(t.bind(t, 21183)),
                Promise.resolve().then(t.bind(t, 59888)),
                Promise.resolve().then(t.bind(t, 95112)),
                Promise.resolve().then(t.bind(t, 57594)),
                Promise.resolve().then(t.bind(t, 26069)),
                Promise.resolve().then(t.bind(t, 4433)),
                Promise.resolve().then(t.bind(t, 50)),
                Promise.resolve().then(t.bind(t, 11262)),
                Promise.resolve().then(t.bind(t, 80792)),
                Promise.resolve().then(t.bind(t, 88424)),
                Promise.resolve().then(t.bind(t, 13528)),
                Promise.resolve().then(t.bind(t, 49932)),
                Promise.resolve().then(t.bind(t, 58534)),
                Promise.resolve().then(t.bind(t, 90357)),
                Promise.resolve().then(t.bind(t, 97755)),
                Promise.resolve().then(t.bind(t, 8097)),
                Promise.resolve().then(t.bind(t, 27373)),
                Promise.resolve().then(t.bind(t, 19620)),
                Promise.resolve().then(t.bind(t, 32156)),
                Promise.resolve().then(t.bind(t, 61376)),
                Promise.resolve().then(t.bind(t, 98148)),
                Promise.resolve().then(t.bind(t, 49522)),
                Promise.resolve().then(t.bind(t, 28563)),
                Promise.resolve().then(t.bind(t, 49518)),
                Promise.resolve().then(t.bind(t, 49346)),
                Promise.resolve().then(t.bind(t, 38223)),
                Promise.resolve().then(t.bind(t, 58237)),
                Promise.resolve().then(t.bind(t, 22369)),
                Promise.resolve().then(t.bind(t, 56367)),
                Promise.resolve().then(t.bind(t, 4914)),
                Promise.resolve().then(t.bind(t, 59833)),
                Promise.resolve().then(t.bind(t, 41566)),
                Promise.resolve().then(t.bind(t, 23042)),
                Promise.resolve().then(t.bind(t, 83755)),
                Promise.resolve().then(t.bind(t, 25160)),
                Promise.resolve().then(t.bind(t, 43679)),
                Promise.resolve().then(t.bind(t, 21027)),
                Promise.resolve().then(t.bind(t, 99752)),
                Promise.resolve().then(t.bind(t, 41972)),
                Promise.resolve().then(t.bind(t, 37711)),
                Promise.resolve().then(t.bind(t, 4820)),
                Promise.resolve().then(t.bind(t, 36011)),
                Promise.resolve().then(t.bind(t, 14388)),
                Promise.resolve().then(t.bind(t, 28724)),
                Promise.resolve().then(t.bind(t, 56664)),
                Promise.resolve().then(t.bind(t, 41812)),
                Promise.resolve().then(t.bind(t, 38420)),
                Promise.resolve().then(t.bind(t, 54290)),
                Promise.resolve().then(t.bind(t, 78570)),
                Promise.resolve().then(t.bind(t, 26452)),
                Promise.resolve().then(t.bind(t, 38936)),
                Promise.resolve().then(t.bind(t, 13798)),
                Promise.resolve().then(t.bind(t, 58054)),
                Promise.resolve().then(t.bind(t, 15509)),
                Promise.resolve().then(t.bind(t, 74694)),
                Promise.resolve().then(t.bind(t, 85377)),
                Promise.resolve().then(t.bind(t, 1444)),
                Promise.resolve().then(t.bind(t, 92744)),
                Promise.resolve().then(t.bind(t, 61258)),
                Promise.resolve().then(t.bind(t, 5592)),
                Promise.resolve().then(t.bind(t, 9634)),
                Promise.resolve().then(t.bind(t, 17584)),
                Promise.resolve().then(t.bind(t, 12894)),
                Promise.resolve().then(t.bind(t, 2694)),
                Promise.resolve().then(t.bind(t, 71730)),
                Promise.resolve().then(t.bind(t, 22734)),
                Promise.resolve().then(t.bind(t, 56037)),
                Promise.resolve().then(t.bind(t, 30584)),
                Promise.resolve().then(t.bind(t, 76385)),
                Promise.resolve().then(t.bind(t, 56059)),
                Promise.resolve().then(t.bind(t, 10180)),
                Promise.resolve().then(t.bind(t, 90326)),
                Promise.resolve().then(t.bind(t, 40229)),
                Promise.resolve().then(t.bind(t, 80195)),
                Promise.resolve().then(t.bind(t, 8264)),
                Promise.resolve().then(t.bind(t, 3630)),
                Promise.resolve().then(t.bind(t, 89363)),
                Promise.resolve().then(t.bind(t, 96677)),
                Promise.resolve().then(t.bind(t, 95432)),
                Promise.resolve().then(t.bind(t, 32562)),
                Promise.resolve().then(t.bind(t, 56568)),
                Promise.resolve().then(t.bind(t, 79884)),
                Promise.resolve().then(t.bind(t, 90048)),
                Promise.resolve().then(t.bind(t, 31236)),
                Promise.resolve().then(t.bind(t, 37340)),
                Promise.resolve().then(t.bind(t, 58345)),
                Promise.resolve().then(t.bind(t, 65755)),
                Promise.resolve().then(t.bind(t, 32152)),
                Promise.resolve().then(t.bind(t, 61748)),
                Promise.resolve().then(t.bind(t, 86844)),
                Promise.resolve().then(t.bind(t, 17106)),
                Promise.resolve().then(t.bind(t, 60244)),
                Promise.resolve().then(t.bind(t, 29268)),
                Promise.resolve().then(t.bind(t, 11260)),
                Promise.resolve().then(t.bind(t, 34925)),
                Promise.resolve().then(t.bind(t, 94218)),
                Promise.resolve().then(t.bind(t, 45257)),
                Promise.resolve().then(t.bind(t, 4008)),
                Promise.resolve().then(t.bind(t, 88523)),
                Promise.resolve().then(t.bind(t, 44390)),
                Promise.resolve().then(t.bind(t, 92533)),
                Promise.resolve().then(t.bind(t, 12119));
        },
        55365: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        58108: (e) => {
            e.exports = { root: 'MyMusicDownloadedTracksInfo_root__yIYHx' };
        },
        60194: (e, r, t) => {
            'use strict';
            t.d(r, { SomethingWentWrong: () => P });
            var i = t(32290),
                n = t(63618),
                s = t(96103),
                o = t(55178),
                a = t(60900),
                l = t(39407),
                d = t(63423),
                m = t(82586),
                u = t(71926),
                c = t(49574),
                v = t(44574),
                h = t(30310),
                b = t.n(h);
            let P = (0, s.PA)((e) => {
                let { className: r, withBackwardControl: t = !0 } = e,
                    { formatMessage: s } = (0, a.A)(),
                    h = s({ id: 'error-messages.something-went-wrong' });
                (0, c.CgZ)(h);
                let { sendRefreshEvent: P } = (0, c.cYT)(),
                    _ = (0, o.useCallback)(() => {
                        P(), (window.location.href = c.Zyd.main.href);
                    }, [P]),
                    { contentRef: g } = (0, c.gKY)();
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(b().root, r),
                    children: [
                        t &&
                            (0, i.jsx)(v.Lh, {
                                withBackwardFallback: '/',
                                className: (0, n.$)(b().navigation, { [b().navigation_desktop]: !g }),
                                withForwardControl: !1,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, n.$)(b().content, { [b().content_shrink]: !t }),
                            children: [
                                (0, i.jsx)(m.Icon, { className: b().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(u.Heading, { className: (0, n.$)(b().title, b().important), variant: 'h3', size: 'xs', children: h }),
                                (0, i.jsxs)(u.Caption, {
                                    className: (0, n.$)(b().text, b().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(d.$, {
                                    onClick: _,
                                    className: b().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(u.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        62400: (e, r, t) => {
            'use strict';
            t.d(r, { t1: () => a.Chart, Iz: () => o, ws: () => n });
            var i = t(60754);
            let n = (e) => (0, i.wg)({ position: e.position, progress: e.progress });
            var s = t(13365);
            let o = i.gK.model('Chart', { position: i.gK.maybe(i.gK.number), progress: i.gK.maybe(i.gK.enumeration(Object.values(s._))) });
            var a = t(73749);
        },
        63371: (e, r, t) => {
            'use strict';
            t.d(r, { useOnPresaveClick: () => u });
            var i = t(32290),
                n = t(92708),
                s = t(55178),
                o = t(60900),
                a = t(90346),
                l = t(49574),
                d = t(44574);
            let m = (e) => {
                    let { upcomingAlbum: r, closeToast: t } = e;
                    return (0, i.jsx)(d.Pv, { closeToast: t, albumTitle: r.title, coverUri: r.coverUri, entityTitle: r.title, isPresave: r.isPresave });
                },
                u = (e) => {
                    let { user: r } = (0, l.Pjs)(),
                        { notify: t } = (0, l.lkh)(),
                        [u, c] = (0, s.useState)(!1),
                        { formatMessage: v } = (0, o.A)();
                    return (0, s.useCallback)(async () => {
                        if (!r.isAuthorized)
                            return void t((0, i.jsx)(d.hT, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.uQT.ERROR });
                        if (u) return;
                        let s = { ...(0, n.HO)(e), isPresave: !e.isPresave };
                        c(!0);
                        let o = await e.toggleLike();
                        c(!1),
                            o === a.J.OK
                                ? t((0, i.jsx)(m, { upcomingAlbum: s }), { containerId: l.uQT.INFO })
                                : t((0, i.jsx)(d.hT, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: l.uQT.ERROR });
                    }, [r.isAuthorized, u, e, t, v]);
                };
        },
        73749: (e, r, t) => {
            'use strict';
            t.d(r, { Chart: () => h });
            var i = t(32290),
                n = t(63618),
                s = t(96103),
                o = t(55178),
                a = t(60900),
                l = t(59824),
                d = t(13365),
                m = t(82586),
                u = t(71926),
                c = t(47977),
                v = t.n(c);
            let h = (0, s.PA)((e) => {
                let {
                        progress: r,
                        withIcon: t,
                        withCrownIcon: s,
                        position: c,
                        weight: h = 'normal',
                        isDisliked: b,
                        isDisabled: P,
                        className: _,
                        positionClassName: g,
                    } = e,
                    { formatMessage: p } = (0, a.A)(),
                    y = r || t,
                    k = (0, o.useMemo)(() => {
                        if (s) return 'crown';
                        switch (r) {
                            case d._.UP:
                                return 'chartUp';
                            case d._.DOWN:
                                return 'chartDown';
                            case d._.NEW:
                                return 'chartNew';
                            default:
                                return 'chartSame';
                        }
                    }, [r, s]),
                    f = (0, o.useMemo)(() => {
                        switch (r) {
                            case d._.UP:
                                return p({ id: 'entity-names.chart-up' });
                            case d._.DOWN:
                                return p({ id: 'entity-names.chart-down' });
                            case d._.NEW:
                                return p({ id: 'entity-names.chart-new' });
                            default:
                                return p({ id: 'entity-names.chart-same' });
                        }
                    }, [p, r]),
                    A = s ? 'crown' : r;
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(v().root, _),
                    ...(0, l.Am)(l.OA.chart.CHART_PROGRESS),
                    children: [
                        (0, i.jsx)(u.Caption, {
                            variant: 'div',
                            weight: h,
                            type: 'entity',
                            size: 'm',
                            className: (0, n.$)(v().position, g, { [v().position_disliked]: b, [v().position_disabled]: P }),
                            ...(0, l.Am)(l.OA.chart.CHART_PROGRESS_POSITION),
                            children: c,
                        }),
                        y &&
                            (0, i.jsx)(m.Icon, {
                                variant: k,
                                size: 'xxs',
                                'aria-label': f,
                                className: (0, n.$)(v().progress, v()['progress_'.concat(A)], { [v().progress_disliked]: b, [v().progress_disabled]: P }),
                                ...(0, l.Am)(l.OA.chart.CHART_PROGRESS_ICON),
                            }),
                    ],
                });
            });
        },
        75645: (e, r, t) => {
            'use strict';
            t.d(r, { hO: () => c, jr: () => v, jp: () => h, QZ: () => n }), t(85377);
            var i = t(55178);
            let n = (e, r, t) => {
                let n = null != t && t;
                return {
                    topColorStyle: (0, i.useMemo)(() => {
                        if (void 0 === r) return;
                        let t = n ? 93 : 17,
                            i = r - t;
                        return { '--average-color-background': e, transform: 'translateY('.concat(r >= t ? 0 : i, 'px)'), opacity: 1 };
                    }, [r, n, e]),
                    headerStyle: (0, i.useMemo)(() => ({ '--average-color-background': e }), [e]),
                };
            };
            var s = t(32290),
                o = t(8055),
                a = t(96103),
                l = t(40996),
                d = t(49574),
                m = t(44574);
            let u = (e) => {
                    let { element: r, scrollTop: t, isMobile: i } = e,
                        n = 0.6 * r.clientHeight;
                    return t + (i ? 60 : 76) >= r.offsetTop + n;
                },
                c = (0, a.PA)((e) => {
                    let { children: r, scrollElement: t, outerTitle: n = '', headerElement: a, headerThreshold: c, shouldHideHeader: v } = e,
                        [h, b] = (0, i.useState)(n),
                        [P, _] = (0, i.useState)(null),
                        [g, p] = (0, i.useState)(null),
                        [y, k] = (0, i.useState)(null),
                        [f, A] = (0, i.useState)(!1),
                        [x, T] = (0, i.useState)(!1),
                        [C, O] = (0, i.useState)(!1),
                        [D, w] = (0, i.useState)(!1),
                        {
                            settings: { isMobile: N },
                        } = (0, d.Pjs)();
                    (0, i.useLayoutEffect)(() => {
                        b(n);
                    }, [n]);
                    let E = (0, i.useCallback)(() => {
                        let e = null != c ? c : 10,
                            r = a ? Number(a.offsetTop) - e : e;
                        r < 0 && (r = 0);
                        let i = (e) => {
                            O(e > r),
                                v && w(e > 30),
                                (null == P ? void 0 : P.current) && A(u({ element: null == P ? void 0 : P.current, scrollTop: e, isMobile: N })),
                                (null == g ? void 0 : g.current) && T(u({ element: null == g ? void 0 : g.current, scrollTop: e, isMobile: N }));
                        };
                        N ? i(window.scrollY) : t && i(t.scrollTop);
                    }, [c, a, N, v, P, g, t]);
                    (0, i.useEffect)(() => {
                        N ? 0 === window.scrollY && O(!1) : (t && 0 !== t.scrollTop) || O(!1);
                    }, [t, null == t ? void 0 : t.scrollTop, N]);
                    let M = (0, i.useMemo)(() => (N ? { onScroll: (0, o.A)(E, 200) } : { onScroll: (0, o.A)(E, 200), elementRef: t }), [E, t, N]);
                    (0, l.L)(M);
                    let S = (0, i.useMemo)(
                        () => ({
                            title: h,
                            setTitle: b,
                            titleElement: P,
                            scrollElement: N ? null : t,
                            setTitleElement: _,
                            childElement: g,
                            setChildElement: p,
                            child: y,
                            setChild: k,
                            isScrolledChild: x,
                            isScrolledTitle: f,
                            isScrolling: C,
                            isHeaderHidden: D,
                        }),
                        [h, f, P, t, C, N, y, g, x, D],
                    );
                    return (0, s.jsx)(m.B9.Provider, { value: S, children: r });
                }),
                v = (e) => {
                    let { children: r, child: t, className: n } = e,
                        { setChildElement: o, setChild: a } = (0, i.useContext)(m.B9),
                        l = (0, i.useRef)(null);
                    return (
                        (0, i.useEffect)(() => {
                            (null == l ? void 0 : l.current) && o(l), t && a(t);
                        }, [l, t, o, a]),
                        (0, i.useEffect)(
                            () => () => {
                                a(null);
                            },
                            [a],
                        ),
                        (0, s.jsx)('div', { ref: l, className: n, children: r })
                    );
                },
                h = (e) => {
                    let { children: r, title: t, className: n } = e,
                        { setTitleElement: o, setTitle: a } = (0, i.useContext)(m.B9),
                        l = (0, i.useRef)(null);
                    return (
                        (0, i.useEffect)(() => {
                            (null == l ? void 0 : l.current) && o(l), t && a(t);
                        }, [l, t, o, a]),
                        (0, i.useEffect)(
                            () => () => {
                                a('');
                            },
                            [a],
                        ),
                        (0, s.jsx)('div', { ref: l, className: n, children: r })
                    );
                };
        },
        76822: (e, r, t) => {
            'use strict';
            let i;
            t.d(r, { useMetrika: () => o });
            var n = t(55178),
                s = t(43740);
            let o = () => {
                let e = (i || (i = (0, s.a)()), i),
                    r = (0, n.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, n.useMemo)(() => ({ ...e, isLoaded: r }), [r]);
            };
        },
        79238: (e, r, t) => {
            'use strict';
            t.d(r, { b: () => s });
            var i = t(64605),
                n = t(44574);
            let s = (e) => {
                switch (e.type) {
                    case i._.PODCAST:
                        return n.cp.PODCAST;
                    case i._.AUDIOBOOK:
                        return n.cp.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return n.cp.FAIRY_TALE;
                    default:
                        return n.cp.ALBUM;
                }
            };
        },
        81354: (e, r, t) => {
            'use strict';
            t.d(r, { XU: () => u });
            var i,
                n,
                s = t(30782),
                o = t(55178),
                a = t(60900);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(i || (i = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(n || (n = {}));
            var l = function (e) {
                var r = (0, a.A)(),
                    t = e.value,
                    i = e.children,
                    n = (0, s.__rest)(e, ['value', 'children']);
                return i(r.formatNumberToParts(t, n));
            };
            function d(e) {
                var r = function (r) {
                    var t = (0, a.A)(),
                        i = r.value,
                        n = r.children,
                        o = (0, s.__rest)(r, ['value', 'children']),
                        l = 'string' == typeof i ? new Date(i || 0) : i;
                    return n('formatDate' === e ? t.formatDateToParts(l, o) : t.formatTimeToParts(l, o));
                };
                return (r.displayName = n[e]), r;
            }
            function m(e) {
                var r = function (r) {
                    var t = (0, a.A)(),
                        i = r.value,
                        n = r.children,
                        l = (0, s.__rest)(r, ['value', 'children']),
                        d = t[e](i, l);
                    if ('function' == typeof n) return n(d);
                    var m = t.textComponent || o.Fragment;
                    return o.createElement(m, null, d);
                };
                return (r.displayName = i[e]), r;
            }
            (l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts');
            var u = m('formatDate');
            m('formatTime'), m('formatNumber'), m('formatList'), m('formatDisplayName'), d('formatDate'), d('formatTime');
        },
        83861: (e, r, t) => {
            'use strict';
            t.d(r, { useOnLikeClick: () => d });
            var i = t(32290),
                n = t(60900),
                s = t(91027),
                o = t(49574),
                a = t(44574),
                l = t(15688);
            let d = (e) => {
                let {
                        user: r,
                        paywall: t,
                        albumCPA: { isPlusCPAEnabled: d },
                    } = (0, o.Pjs)(),
                    { formatMessage: m } = (0, n.A)(),
                    { notify: u } = (0, o.lkh)(),
                    c = (0, l.f)(),
                    { pageAlbumId: v } = (0, o.THB)();
                return (0, s.c)(async () => {
                    if (e)
                        return d({ pageAlbumId: v, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void t.openModal()
                            : r.isAuthorized
                              ? c({ album: e })
                              : void u((0, i.jsx)(a.hT, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.uQT.ERROR });
                });
            };
        },
        85912: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPage_root__hZZwz',
                important: 'MyMusicDownloadedTracksPage_important__QP_t0',
                pageContainer: 'MyMusicDownloadedTracksPage_pageContainer__qu3hF',
                footer: 'MyMusicDownloadedTracksPage_footer__KI5OP',
                content: 'MyMusicDownloadedTracksPage_content__Iz1WY',
                trackShimmer: 'MyMusicDownloadedTracksPage_trackShimmer__MZgW3',
            };
        },
        90346: (e, r, t) => {
            'use strict';
            var i;
            t.d(r, { J: () => i }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(i || (i = {}));
        },
        91253: (e, r, t) => {
            'use strict';
            t.d(r, { useOnPinClick: () => c });
            var i = t(32290),
                n = t(92708),
                s = t(55178),
                o = t(60900),
                a = t(49574),
                l = t(44574),
                d = t(96103),
                m = t(79238);
            let u = (0, d.PA)((e) => {
                    let { album: r, closeToast: t } = e,
                        n = (0, m.b)(r);
                    return (0, i.jsx)(l.k4, {
                        closeToast: t,
                        entityVariant: n,
                        coverUri: r.coverUri,
                        entityUrl: r.url,
                        entityTitle: r.title,
                        isPinned: r.isPinned,
                        radius: 's',
                    });
                }),
                c = (e) => {
                    let { user: r } = (0, a.Pjs)(),
                        { notify: t } = (0, a.lkh)(),
                        { formatMessage: d } = (0, o.A)(),
                        [m, c] = (0, s.useState)(!1);
                    return (0, s.useCallback)(async () => {
                        if (!r.isAuthorized)
                            return void t((0, i.jsx)(l.hT, { error: d({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a.uQT.ERROR });
                        if (m) return;
                        let s = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                        c(!0);
                        let o = await e.togglePin();
                        c(!1),
                            o
                                ? t((0, i.jsx)(u, { album: s }), { containerId: a.uQT.INFO })
                                : t((0, i.jsx)(l.hT, { error: d({ id: 'error-messages.error-during-action' }) }), { containerId: a.uQT.ERROR });
                    }, [e, d, t, m, r.isAuthorized]);
                };
        },
        91288: (e) => {
            e.exports = {
                root: 'SplashScreen_root__3jzFk',
                root_dark: 'SplashScreen_root_dark__0OcZj',
                root_light: 'SplashScreen_root_light__XAJTf',
                root_hidden: 'SplashScreen_root_hidden__BO7tp',
                'fade-out': 'SplashScreen_fade-out__uNMY4',
                video: 'SplashScreen_video__wFSy5',
            };
        },
        92498: (e, r, t) => {
            'use strict';
            t.d(r, { MyMusicDownloadedTracksPage: () => M });
            var i = t(32290),
                n = t(63618),
                s = t(96103),
                o = t(55178),
                a = t(60900),
                l = t(59824),
                d = t(71483),
                m = t(91027),
                u = t(29474),
                c = t(32381),
                v = t(75645),
                h = t(80864),
                b = t(49574),
                P = t(44574),
                _ = t(85912),
                g = t.n(_),
                p = t(39407),
                y = t(82586),
                k = t(71926),
                f = t(58108),
                A = t.n(f);
            let x = (0, s.PA)(() => {
                var e;
                let {
                        myMusic: { downloadedTracks: r },
                    } = (0, b.Pjs)(),
                    t = (0, i.jsx)(k.Caption, { variant: 'span', size: 's', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                    n = [];
                (null == (e = r.tracks) ? void 0 : e.length) &&
                    n.push(
                        (0, i.jsx)(k.Caption, {
                            variant: 'span',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            children: (0, i.jsx)(p.A, { id: 'entity-names.tracks-count', values: { value: r.tracks.length } }),
                        }),
                    );
                let s = Math.floor(r.tracksDurationInMinutes / 60),
                    a = Math.floor(r.tracksDurationInMinutes % 60);
                return (
                    (s || a) &&
                        (n.push(t),
                        n.push(
                            (0, i.jsx)(k.Caption, {
                                variant: 'span',
                                size: 's',
                                weight: 'medium',
                                children: (0, i.jsx)(p.A, { id: 'time.hours-minutes', values: { hours: s, minutes: a } }),
                            }),
                        )),
                    (0, i.jsx)('div', { className: A().root, children: n.map((e, r) => (0, o.cloneElement)(e, { key: r })) })
                );
            });
            var T = t(3092),
                C = t.n(T);
            let O = (0, s.PA)(() => {
                let { isScrolling: e } = (0, o.useContext)(P.B9),
                    r = (0, b.W6M)(),
                    {
                        myMusic: { downloadedTracks: t },
                        settings: { isMobile: n },
                        slam: s,
                    } = (0, b.Pjs)(),
                    { from: a } = (0, b.fyy)({ pageId: b._Q$.OWN_TRACKS, blockId: b.UfI.TRACK_LIST }),
                    u = (0, b.PT7)(),
                    c = (0, b.brA)(),
                    { isPlaying: v, togglePlay: h } = (0, b.Dx4)({
                        playContextParams: {
                            contextData: { type: d.K.Various, meta: { id: b._Q$.DOWNLOADS_TRACKS }, from: a },
                            entitiesData: t.entitiesData,
                            loadContextMeta: !1,
                        },
                    }),
                    _ = (0, m.c)(() => {
                        u() || (h(), c(!v));
                    });
                return (0, i.jsx)('header', {
                    className: C().root,
                    'aria-hidden': e,
                    ...(0, l.Am)(l.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_HEADER),
                    children: (0, i.jsxs)('div', {
                        className: C().container,
                        children: [
                            !s.isOfflineModeEnabled &&
                                r.canBack &&
                                (0, i.jsx)(P.Lh, { withForwardControl: !1, withBackwardControl: r.canBack, shouldFocusOnMount: !e, buttonSize: 'xxs' }),
                            (0, i.jsxs)('div', {
                                className: C().titleContainer,
                                children: [
                                    (0, i.jsx)(k.Heading, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xs',
                                        lineClamp: 1,
                                        className: C().title,
                                        children: (0, i.jsx)(p.A, { id: 'offline.downloaded-tracks' }),
                                    }),
                                    (0, i.jsx)(x, {}),
                                ],
                            }),
                            !t.isEmpty &&
                                (0, i.jsx)(P.DM, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: v,
                                    onClick: _,
                                    className: C().playButton,
                                    ariaHidden: e,
                                    tabIndex: e ? -1 : 0,
                                    children: !n && (0, i.jsx)(p.A, { id: 'player-actions.listen' }),
                                }),
                        ],
                    }),
                });
            });
            var D = t(95658),
                w = t.n(D);
            let N = (0, s.PA)(() =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(O, {}),
                            (0, i.jsxs)('div', {
                                className: w().root,
                                ...(0, l.Am)(l.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_EMPTY),
                                children: [
                                    (0, i.jsx)(y.Icon, { className: w().icon, size: 'l', variant: 'download' }),
                                    (0, i.jsx)(k.Heading, {
                                        className: w().title,
                                        variant: 'div',
                                        size: 'xs',
                                        children: (0, i.jsx)(p.A, { id: 'offline.downloaded-empty' }),
                                    }),
                                    (0, i.jsx)(k.Caption, {
                                        className: w().text,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'l',
                                        weight: 'normal',
                                        children: (0, i.jsx)(p.A, { id: 'offline.download-for-offline' }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ),
                E = (0, s.PA)(() => {
                    let { isScrolling: e } = (0, o.useContext)(P.B9),
                        r = (0, b.W6M)(),
                        {
                            myMusic: { downloadedTracks: t },
                            settings: { isMobile: s },
                            slam: a,
                        } = (0, b.Pjs)(),
                        { from: u } = (0, b.fyy)({ pageId: b._Q$.OWN_TRACKS, blockId: b.UfI.TRACK_LIST }),
                        c = (0, b.brA)(),
                        v = (0, b.PT7)(),
                        { isPlaying: h, togglePlay: _ } = (0, b.Dx4)({
                            playContextParams: {
                                contextData: { type: d.K.Various, meta: { id: b._Q$.DOWNLOADS_TRACKS }, from: u },
                                entitiesData: t.entitiesData,
                                loadContextMeta: !1,
                            },
                        }),
                        g = (0, m.c)(() => {
                            v() || (_(), c(!h));
                        });
                    return (0, i.jsx)(P.Y9, {
                        variant: P.Vw.COMPOSITE,
                        'aria-hidden': !e,
                        stickyChild: (0, i.jsxs)('div', {
                            className: C().container,
                            ...(0, l.Am)(l.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_STICKY_HEADER),
                            children: [
                                !a.isOfflineModeEnabled &&
                                    r.canBack &&
                                    (0, i.jsx)(P.Lh, { withForwardControl: !1, withBackwardControl: r.canBack, shouldFocusOnMount: !1, buttonSize: 'xxs' }),
                                (0, i.jsx)(k.Heading, {
                                    variant: 'h1',
                                    weight: 'bold',
                                    size: 'xs',
                                    lineClamp: 1,
                                    className: C().stickyTitle,
                                    children: (0, i.jsx)(p.A, { id: 'offline.downloaded-tracks' }),
                                }),
                                !t.isEmpty &&
                                    (0, i.jsx)(P.DM, {
                                        withRipple: !0,
                                        buttonVariant: 'default',
                                        radius: 'xxxl',
                                        size: 's',
                                        color: 'primary',
                                        iconSize: 'xxs',
                                        isPlaying: h,
                                        onClick: g,
                                        className: (0, n.$)(C().playButton, { [C().stickyPlayButton]: !s }),
                                        ariaHidden: !e,
                                        tabIndex: e ? 0 : -1,
                                        children: !s && (0, i.jsx)(p.A, { id: 'player-actions.listen' }),
                                    }),
                            ],
                        }),
                        stickyClassName: (0, n.$)(C().stickyHeader, C().important),
                        staticClassName: (0, n.$)(C().staticHeader, C().important),
                    });
                }),
                M = (0, s.PA)(() => {
                    var e;
                    let r = (0, b.jRO)(),
                        { contentScrollRef: t, setContentScrollRef: s } = (0, b.gKY)(),
                        { formatMessage: _ } = (0, a.A)(),
                        {
                            myMusic: { downloadedTracks: p },
                        } = (0, b.Pjs)(),
                        { from: y } = (0, b.fyy)({ pageId: b._Q$.OWN_TRACKS, blockId: b.UfI.TRACK_LIST }),
                        k = (0, b.wZZ)(),
                        f = (0, m.c)(() => {
                            r.tracksController && p.getData(r.tracksController);
                        });
                    (0, u.L)(f),
                        (0, o.useEffect)(() => {
                            p.isNeededToLoad && f();
                        }, [p.isNeededToLoad, f]),
                        (0, o.useEffect)(
                            () => () => {
                                p.reset();
                            },
                            [p],
                        ),
                        (0, b.Jzs)(p.isResolved);
                    let A = (0, o.useMemo)(
                        () => ({ Header: () => (0, i.jsx)(O, {}), Footer: () => (0, i.jsx)(P.A, { children: (0, i.jsx)(P.wi, { className: g().footer }) }) }),
                        [],
                    );
                    if (p.loadingState === b.GuX.REJECT) return (0, i.jsx)(c.w, {});
                    if (p.isEmpty) return (0, i.jsx)(N, {});
                    let x = (null == (e = p.items) ? void 0 : e.length) || 10;
                    return (0, i.jsx)(b.nVz, {
                        pageId: b._Q$.DOWNLOADS_TRACKS,
                        children: (0, i.jsx)(v.hO, {
                            scrollElement: t,
                            children: (0, i.jsxs)('div', {
                                className: g().pageContainer,
                                children: [
                                    (0, i.jsx)(E, {}),
                                    (0, i.jsx)(P.$$, {
                                        context: { listAriaLabel: _({ id: 'offline.downloaded-track-list' }) },
                                        className: (0, n.$)(g().root, g().important),
                                        listClassName: g().content,
                                        customComponents: A,
                                        totalCount: x,
                                        itemContentCallback: (e) => {
                                            var r;
                                            let t = null == (r = p.items) ? void 0 : r[e];
                                            return t
                                                ? (0, i.jsx)(
                                                      h.Kt,
                                                      {
                                                          track: t,
                                                          playContextParams: k(t.id, {
                                                              contextData: { type: d.K.Various, meta: { id: b._Q$.DOWNLOADS_TRACKS }, from: y },
                                                              entitiesData: p.entitiesData,
                                                              queueParams: { index: e, entityId: t.id },
                                                              loadContextMeta: !1,
                                                          }),
                                                      },
                                                      t.id,
                                                  )
                                                : (0, i.jsx)(P.DS, { isActive: !0, className: g().trackShimmer, variant: b.Xjt.PLAYLIST });
                                        },
                                        debounceDurationInMs: 300,
                                        initialItemCount: x,
                                        handleRef: s,
                                        shouldTriggerRangeChangedOn: [x],
                                        testId: l.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE,
                                    }),
                                ],
                            }),
                        }),
                    });
                });
        },
        92533: (e, r, t) => {
            'use strict';
            t.d(r, { useDownloadedTracks: () => l });
            var i = t(55178),
                n = t(44547),
                s = t(91027),
                o = t(49574);
            let a = [n.DT.IDLE, n.DT.DOWNLOADED],
                l = (e) => {
                    var r;
                    let t = (0, o.jRO)(),
                        l = (0, s.c)((r) => {
                            let { state: t } = r;
                            a.includes(t.loadingState) && e();
                        });
                    (0, i.useEffect)(() => {
                        var r, i;
                        return (
                            null == (r = t.store) || r.tracks.events.on(n.je.STATE_CHANGED, e),
                            null == (i = t.store) || i.tracks.events.on(n.je.ENTITY_CHANGED, l),
                            () => {
                                var r, i;
                                null == (r = t.store) || r.tracks.events.off(n.je.STATE_CHANGED, e), null == (i = t.store) || i.tracks.events.off(n.je.ENTITY_CHANGED, l);
                            }
                        );
                    }, [e, l, null == (r = t.store) ? void 0 : r.tracks.events]);
                };
        },
        95658: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPageEmpty_root__LAXpY',
                icon: 'MyMusicDownloadedTracksPageEmpty_icon__PDhk2',
                title: 'MyMusicDownloadedTracksPageEmpty_title__g2w5R',
                text: 'MyMusicDownloadedTracksPageEmpty_text__8RJFg',
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                3445, 1670, 9143, 6351, 9580, 9745, 7236, 6375, 1311, 7764, 6706, 1588, 3267, 9769, 4250, 1675, 4154, 764, 9574, 4574, 5428, 6049, 4089, 864, 4942, 2127,
                6687, 4547, 3057, 4220, 9562, 7358,
            ],
            () => e((e.s = 54122)),
        ),
            (_N_E = e.O());
    },
]);
