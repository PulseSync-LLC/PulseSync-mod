(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9797],
    {
        148: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        16063: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => s });
            var a = r(83772),
                i = r(45337),
                n = r(80468);
            let s = (e, t) => {
                var r, s;
                // for PulseSync: BEGIN use substituted artists in track metadata
                let l = null == (r = e.substituted?.artists ?? e.artists) ? void 0 : r.map(i.G),
                // for PulseSync: END use substituted artists in track metadata
                    o = null == (s = e.albums) ? void 0 : s.map(a.f);
                // for PulseSync: BEGIN normalize substituted MUSIC track types to lowercase
                if (e?.type === 'MUSIC') e.type = e.type.toLowerCase();
                // for PulseSync: END normalize substituted MUSIC track types to lowercase
                return { ...(0, n.x)(e, t), artists: l, albums: o };
            };
        },
        22413: (e, t, r) => {
            'use strict';
            r.d(t, { Jt: () => n, TF: () => l, hZ: () => s });
            var a = function () {
                return (a =
                    Object.assign ||
                    function (e) {
                        for (var t, r = 1, a = arguments.length; r < a; r++)
                            for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e;
                    }).apply(this, arguments);
            };
            function i(e, t) {
                if (!t) return '';
                var r = '; ' + e;
                return !0 === t ? r : r + '=' + t;
            }
            function n(e) {
                return (function (e) {
                    for (var t = {}, r = e ? e.split('; ') : [], a = 0; a < r.length; a++) {
                        var i = r[a].split('='),
                            n = i.slice(1).join('=');
                        '"' === n[0] && (n = n.slice(1, -1));
                        try {
                            t[decodeURIComponent(i[0])] = n.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function s(e, t, r) {
                var n;
                document.cookie =
                    ((n = a({ path: '/' }, r)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                i('Expires', e.expires ? e.expires.toUTCString() : '') +
                                i('Domain', e.domain) +
                                i('Path', e.path) +
                                i('Secure', e.secure) +
                                i('SameSite', e.sameSite)
                            );
                        })(n));
            }
            function l(e, t) {
                s(e, '', a(a({}, t), { expires: -1 }));
            }
        },
        24820: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => n });
            var a = r(28410),
                i = r(16063);
            let n = (e, t) => {
                let r = (0, i.K)(e, t);
                return (0, a.wg)(r);
            };
        },
        25464: (e, t, r) => {
            'use strict';
            r.d(t, { MyMusicPageStoreProvider: () => u });
            var a = r(80499),
                i = r(82706),
                n = r(28410),
                s = r(98487),
                l = r(36159);
            let o = n.gK.model('MyMusicPage', { downloadedTracks: s.b }),
                d = { downloadedTracks: { loadingState: l.G.IDLE } },
                { pageStoreProvider: c } = (0, a.W)({ createStore: (e) => o.create(d, e), patchKey: i.n.MY_MUSIC }),
                u = c;
        },
        29340: (e, t, r) => {
            'use strict';
            r.d(t, { MyMusicDownloadedTracksPage: () => et });
            var a = r(25839),
                i = r(82298),
                n = r(88204),
                s = r(74631),
                l = r(39004),
                o = r(61493),
                d = r(22939),
                c = r(71035),
                u = r(82589),
                g = r(78299),
                m = r(1407),
                _ = r(82967),
                v = r(40110),
                y = r(20258),
                p = r(10322),
                h = r(30290),
                k = r(89192),
                T = r(30716),
                S = r(96444),
                A = r(79422),
                f = r(80499),
                M = r(82706),
                E = r(36159),
                b = r(3718),
                x = r(99401),
                P = r(26076),
                D = r(97805),
                C = r(6968),
                I = r(35240),
                w = r.n(I),
                K = r(8487),
                L = r(66738),
                O = r(4254),
                j = r(79367),
                R = r(47009),
                N = r(21784),
                H = r(50209),
                U = r(27954),
                G = r(27625),
                F = r(15270),
                z = r(49438),
                W = r(39052),
                B = r.n(W);
            let Y = (0, n.PA)(() => {
                var e;
                let { downloadedTracks: t } = (0, f.s)(M.n.MY_MUSIC),
                    r = (0, a.jsx)(O.HL, { variant: 'span', size: 's', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                    i = [];
                (null == (e = t.tracks) ? void 0 : e.length) &&
                    i.push(
                        (0, a.jsx)(O.HL, {
                            variant: 'span',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            children: (0, a.jsx)(K.A, { id: 'entity-names.tracks-count', values: { value: t.tracks.length } }),
                        }),
                    );
                let n = Math.floor(t.tracksDurationInMinutes / 60),
                    l = Math.floor(t.tracksDurationInMinutes % 60);
                return (
                    (n || l) &&
                        (i.push(r),
                        i.push(
                            (0, a.jsx)(O.HL, {
                                variant: 'span',
                                size: 's',
                                weight: 'medium',
                                children: (0, a.jsx)(K.A, { id: 'time.hours-minutes', values: { hours: n, minutes: l } }),
                            }),
                        )),
                    (0, a.jsx)('div', { className: B().root, children: i.map((e, t) => (0, s.cloneElement)(e, { key: t })) })
                );
            });
            var V = r(33220),
                Q = r.n(V);
            let Z = (0, n.PA)(() => {
                let { isScrolling: e } = (0, s.useContext)(G.B),
                    t = (0, N.W)(),
                    { downloadedTracks: r } = (0, f.s)(M.n.MY_MUSIC),
                    {
                        settings: { isMobile: i },
                        slam: n,
                    } = (0, U.g)(),
                    { from: l } = (0, h.f)({ pageId: y._Q.OWN_TRACKS, blockId: v.U.TRACK_LIST }),
                    u = (0, j.P)(),
                    g = (0, R.b)(),
                    { isPlaying: m, togglePlay: _ } = (0, H.D)({
                        playContextParams: {
                            contextData: { type: d.K.Various, meta: { id: y._Q.DOWNLOADS_TRACKS }, from: l },
                            entitiesData: r.entitiesData,
                            loadContextMeta: !1,
                        },
                    }),
                    p = (0, c.c)(() => {
                        u() || (_(), g(!m));
                    });
                return (0, a.jsx)('header', {
                    className: Q().root,
                    'aria-hidden': e,
                    'data-test-id': o.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_HEADER,
                    children: (0, a.jsxs)('div', {
                        className: Q().container,
                        children: [
                            !n.isOfflineModeEnabled &&
                                t.canBack &&
                                (0, a.jsx)(F.L, { withForwardControl: !1, withBackwardControl: t.canBack, shouldFocusOnMount: !e, buttonSize: 'xxs' }),
                            (0, a.jsxs)('div', {
                                className: Q().titleContainer,
                                children: [
                                    (0, a.jsx)(O.DZ, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xs',
                                        lineClamp: 1,
                                        className: Q().title,
                                        children: (0, a.jsx)(K.A, { id: 'offline.downloaded-tracks' }),
                                    }),
                                    (0, a.jsx)(Y, {}),
                                ],
                            }),
                            !r.isEmpty &&
                                (0, a.jsx)(z.D, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: m,
                                    onClick: p,
                                    className: Q().playButton,
                                    ariaHidden: e,
                                    tabIndex: e ? -1 : 0,
                                    children: !i && (0, a.jsx)(K.A, { id: 'player-actions.listen' }),
                                }),
                        ],
                    }),
                });
            });
            var $ = r(61050),
                X = r.n($);
            let J = (0, n.PA)(() =>
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(Z, {}),
                        (0, a.jsxs)('div', {
                            className: X().root,
                            'data-test-id': o.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_EMPTY,
                            children: [
                                (0, a.jsx)(L.I, { className: X().icon, size: 'l', variant: 'download' }),
                                (0, a.jsx)(O.DZ, { className: X().title, variant: 'div', size: 'xs', children: (0, a.jsx)(K.A, { id: 'offline.downloaded-empty' }) }),
                                (0, a.jsx)(O.HL, {
                                    className: X().text,
                                    variant: 'span',
                                    type: 'controls',
                                    size: 'l',
                                    weight: 'normal',
                                    children: (0, a.jsx)(K.A, { id: 'offline.download-for-offline' }),
                                }),
                            ],
                        }),
                    ],
                }),
            );
            var q = r(10603);
            let ee = (0, n.PA)(() => {
                    let { isScrolling: e } = (0, s.useContext)(G.B),
                        t = (0, N.W)(),
                        { downloadedTracks: r } = (0, f.s)(M.n.MY_MUSIC),
                        {
                            settings: { isMobile: n },
                            slam: l,
                        } = (0, U.g)(),
                        { from: u } = (0, h.f)({ pageId: y._Q.OWN_TRACKS, blockId: v.U.TRACK_LIST }),
                        g = (0, R.b)(),
                        m = (0, j.P)(),
                        { isPlaying: _, togglePlay: p } = (0, H.D)({
                            playContextParams: {
                                contextData: { type: d.K.Various, meta: { id: y._Q.DOWNLOADS_TRACKS }, from: u },
                                entitiesData: r.entitiesData,
                                loadContextMeta: !1,
                            },
                        }),
                        k = (0, c.c)(() => {
                            m() || (p(), g(!_));
                        });
                    return (0, a.jsx)(q.Y, {
                        variant: q.V.COMPOSITE,
                        'aria-hidden': !e,
                        stickyChild: (0, a.jsxs)('div', {
                            className: Q().container,
                            'data-test-id': o.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_STICKY_HEADER,
                            children: [
                                !l.isOfflineModeEnabled &&
                                    t.canBack &&
                                    (0, a.jsx)(F.L, { withForwardControl: !1, withBackwardControl: t.canBack, shouldFocusOnMount: !1, buttonSize: 'xxs' }),
                                (0, a.jsx)(O.DZ, {
                                    variant: 'h1',
                                    weight: 'bold',
                                    size: 'xs',
                                    lineClamp: 1,
                                    className: Q().stickyTitle,
                                    children: (0, a.jsx)(K.A, { id: 'offline.downloaded-tracks' }),
                                }),
                                !r.isEmpty &&
                                    (0, a.jsx)(z.D, {
                                        withRipple: !0,
                                        buttonVariant: 'default',
                                        radius: 'xxxl',
                                        size: 's',
                                        color: 'primary',
                                        iconSize: 'xxs',
                                        isPlaying: _,
                                        onClick: k,
                                        className: (0, i.$)(Q().playButton, { [Q().stickyPlayButton]: !n }),
                                        ariaHidden: !e,
                                        tabIndex: e ? 0 : -1,
                                        children: !n && (0, a.jsx)(K.A, { id: 'player-actions.listen' }),
                                    }),
                            ],
                        }),
                        stickyClassName: (0, i.$)(Q().stickyHeader, Q().important),
                        staticClassName: (0, i.$)(Q().staticHeader, Q().important),
                    });
                }),
                et = (0, n.PA)(() => {
                    var e;
                    let t = (0, S.j)(),
                        { contentScrollRef: r, setContentScrollRef: n } = (0, k.g)(),
                        { formatMessage: I } = (0, l.A)(),
                        { downloadedTracks: K } = (0, f.s)(M.n.MY_MUSIC),
                        { from: L } = (0, h.f)({ pageId: y._Q.OWN_TRACKS, blockId: v.U.TRACK_LIST }),
                        O = (0, A.w)(),
                        j = (0, c.c)(() => {
                            t.tracksController && K.getData(t.tracksController);
                        });
                    ((0, u.L)(j),
                        (0, s.useEffect)(() => {
                            K.isNeededToLoad && j();
                        }, [K.isNeededToLoad, j]),
                        (0, s.useEffect)(
                            () => () => {
                                K.reset();
                            },
                            [K],
                        ),
                        (0, T.J)(K.isResolved));
                    let R = (0, s.useMemo)(
                        () => ({ Header: () => (0, a.jsx)(Z, {}), Footer: () => (0, a.jsx)(P.A, { children: (0, a.jsx)(x.w, { className: w().footer }) }) }),
                        [],
                    );
                    if (K.loadingState === E.G.REJECT) return (0, a.jsx)(g.SomethingWentWrong, {});
                    if (K.isEmpty) return (0, a.jsx)(J, {});
                    let N = (null == (e = K.items) ? void 0 : e.length) || 10;
                    return (0, a.jsx)(p.n, {
                        pageId: y._Q.DOWNLOADS_TRACKS,
                        children: (0, a.jsx)(m.h, {
                            scrollElement: r,
                            children: (0, a.jsxs)('div', {
                                className: w().pageContainer,
                                children: [
                                    (0, a.jsx)(ee, {}),
                                    (0, a.jsx)(C.$, {
                                        context: { listAriaLabel: I({ id: 'offline.downloaded-track-list' }) },
                                        className: (0, i.$)(w().root, w().important),
                                        listClassName: w().content,
                                        customComponents: R,
                                        totalCount: N,
                                        itemContentCallback: (e) => {
                                            var t;
                                            let r = null == (t = K.items) ? void 0 : t[e];
                                            return r
                                                ? (0, a.jsx)(
                                                      _.K,
                                                      {
                                                          track: r,
                                                          playContextParams: O(r.id, {
                                                              contextData: { type: d.K.Various, meta: { id: y._Q.DOWNLOADS_TRACKS }, from: L },
                                                              entitiesData: K.entitiesData,
                                                              queueParams: { index: e, entityId: r.id },
                                                              loadContextMeta: !1,
                                                          }),
                                                      },
                                                      r.id,
                                                  )
                                                : (0, a.jsx)(D.D, { isActive: !0, className: w().trackShimmer, variant: b.X.PLAYLIST });
                                        },
                                        debounceDurationInMs: 300,
                                        initialItemCount: N,
                                        handleRef: n,
                                        shouldTriggerRangeChangedOn: [N],
                                        testId: o.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE,
                                    }),
                                ],
                            }),
                        }),
                    });
                });
        },
        30871: (e, t, r) => {
            'use strict';
            r.d(t, { WithAuth: () => v });
            var a = r(25839),
                i = r(88204),
                n = r(84059),
                s = r(82298),
                l = r(8487),
                o = r(4254),
                d = r(16978),
                c = r(148),
                u = r.n(c);
            let g = (0, i.PA)(() =>
                (0, a.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, a.jsx)(o.DZ, {
                            className: (0, s.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, a.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, a.jsx)(o.HL, {
                            className: (0, s.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, a.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, a.jsx)(d.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = r(53712),
                _ = r(27954);
            let v = (0, i.PA)((e) => {
                let { children: t, withRedirectToMainPage: r } = e,
                    { user: i } = (0, _.g)();
                return i.isAuthorized ? t : (r && (0, n.redirect)(m.Z.main.href), (0, a.jsx)(g, {}));
            });
        },
        33220: (e) => {
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
        34001: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => p });
            var a = r(28410),
                i = r(75501),
                n = r(18660),
                s = r(51751),
                l = r(12929),
                o = r(26847),
                d = r(683),
                c = r(86656),
                u = r(27304),
                g = r(40480),
                m = r(77895),
                _ = r(43708),
                v = r(60024);
            let y = [i.S.MUSIC, i.S.TRACK, i.S.NOISE, i.S.ASMR],
                p = a.gK
                    .compose(
                        a.gK.model('BaseTrack', {
                            id: a.gK.string,
                            isAvailable: a.gK.boolean,
                            isRemoved: a.gK.boolean,
                            title: a.gK.string,
                            trackSource: a.gK.maybe(a.gK.enumeration(Object.values(n.J))),
                            version: a.gK.maybe(a.gK.string),
                            durationMs: a.gK.maybe(a.gK.number),
                            coverUri: a.gK.maybe(a.gK.string),
                            averageColor: a.gK.maybe(a.gK.string),
                            trackParameters: a.gK.maybe(a.gK.frozen()),
                            albumId: a.gK.maybe(a.gK.number),
                            type: a.gK.maybe(a.gK.enumeration(Object.values(i.S))),
                            pubDate: a.gK.maybe(a.gK.string),
                            hasLyrics: a.gK.maybe(a.gK.boolean),
                            hasSyncLyrics: a.gK.maybe(a.gK.boolean),
                            trailer: a.gK.maybe(c.a),
                            shouldRememberPosition: a.gK.maybe(a.gK.boolean),
                            streamProgress: a.gK.maybe(v.B),
                            shortDescription: a.gK.maybe(a.gK.string),
                            major: a.gK.maybeNull(a.gK.frozen()),
                            clipIds: a.gK.maybeNull(a.gK.frozen()),
                            genre: a.gK.maybeNull(a.gK.string),
                            realId: a.gK.maybe(a.gK.string),
                            cutoutCover: a.gK.maybe(o.$),
                        }),
                        d.E,
                    )
                    .views((e) => {
                        let t = {
                            get isLiked() {
                                if ((0, a._n)(e)) {
                                    let { library: t } = (0, s.M)(e);
                                    return t.isTrackLiked(e.id);
                                }
                                return !1;
                            },
                            get isDownloaded() {
                                if (!(0, a._n)(e)) return !1;
                                let { slam: t } = (0, s.M)(e);
                                return t.isTrackDownloaded(e.id);
                            },
                            get isDownloading() {
                                if (!(0, a._n)(e)) return !1;
                                let { slam: t } = (0, s.M)(e);
                                return t.isTrackDownloading(e.id);
                            },
                            get downloadingProgress() {
                                if (!(0, a._n)(e)) return 0;
                                let { slam: t } = (0, s.M)(e);
                                return t.getTrackDownloadingProgress(e.id);
                            },
                            get isAvailableForDownload() {
                                if (!(0, a._n)(e)) return !1;
                                return (e.type && y.includes(e.type)) || !!t.isUGC;
                            },
                            getUrl(t) {
                                let { href: r } = (0, g.l)(e.id, e.albumId, t);
                                return r;
                            },
                            get url() {
                                return t.getUrl();
                            },
                            get isDisliked() {
                                if ((0, a._n)(e)) {
                                    let { library: t } = (0, s.M)(e);
                                    return t.isTrackDisliked(e.id);
                                }
                                return !1;
                            },
                            get isTrackPodcast() {
                                if ((0, a._n)(e)) return e.type === i.S.PODCAST;
                                return !1;
                            },
                            get isPlusSubscribed() {
                                if (!(0, a._n)(e)) return !1;
                                let { user: t } = (0, s.M)(e);
                                return t.hasPlus;
                            },
                            get isSyncLyricsAvailableWithOfflineFeature() {
                                if (!(0, a._n)(e)) return !1;
                                let { slam: t } = (0, s.M)(e);
                                return !!e.hasSyncLyrics && !t.isOfflineModeEnabled;
                            },
                            get isSyncLyricsAvailable() {
                                return this.isPlusSubscribed && this.isSyncLyricsAvailableWithOfflineFeature;
                            },
                            get isLyricsAvailable() {
                                if (!(0, a._n)(e)) return !1;
                                let { slam: t, user: r } = (0, s.M)(e);
                                if (!r.hasPlus) return !1;
                                return !!e.hasLyrics && !t.isOfflineModeEnabled;
                            },
                            get isTrackAudiobook() {
                                if ((0, a._n)(e)) return e.type === i.S.AUDIOBOOK;
                                return !1;
                            },
                            get isTrackFairyTale() {
                                if ((0, a._n)(e)) return e.type === i.S.FAIRY_TALE;
                                return !1;
                            },
                            get isTrackNonMusic() {
                                return this.isTrackPodcast || this.isTrackAudiobook || this.isTrackFairyTale;
                            },
                            get isTrackMusic() {
                                if ((0, a._n)(e)) return (0, _.f)(e.type);
                                return !1;
                            },
                            get isUGC() {
                                if ((0, a._n)(e)) {
                                    let { isUGC: t } = (0, m.I)(e.trackSource);
                                    return t;
                                }
                                return;
                            },
                            get isOwn() {
                                if ((0, a._n)(e)) {
                                    let { isOwn: t } = (0, m.I)(e.trackSource);
                                    return t;
                                }
                                return;
                            },
                            get isOwnReplacedToUGC() {
                                if ((0, a._n)(e)) {
                                    let { isOwnReplacedToUGC: t } = (0, m.I)(e.trackSource);
                                    return t;
                                }
                                return;
                            },
                            get seeds() {
                                return ['track:'.concat(e.id)];
                            },
                            get isLegalRejected() {
                                // for PulseSync: BEGIN ignore metadata updates after the model is destroyed
                                if (!(0, a._n)(e)) return !1;
                                // for PulseSync: END ignore metadata updates after the model is destroyed
                                return e.getIsLegalRejected(e.isAvailable);
                            },
                            get isUnsafeLegal() {
                                // for PulseSync: BEGIN ignore metadata updates after the model is destroyed
                                if (!(0, a._n)(e)) return !1;
                                // for PulseSync: END ignore metadata updates after the model is destroyed
                                return e.getIsUnsafeLegal(e.isAvailable);
                            },
                            get entityId() {
                                if (e.albumId) return ''.concat(e.id, ':').concat(e.albumId);
                                return e.id;
                            },
                            get hasAlbumLink() {
                                if (!(0, a._n)(e)) return !1;
                                return !!(e.albumId && this.isOwn && e.isAvailable);
                            },
                            get hasTrackLink() {
                                if (!(0, a._n)(e)) return !1;
                                let {
                                    settings: { isMobile: t },
                                    slam: r,
                                } = (0, s.M)(e);
                                return (0, u.t)(e, { isMobile: t, isOfflineModeEnabled: r.isOfflineModeEnabled });
                            },
                            get isNonUserGenerated() {
                                if (!(0, a._n)(e)) return !1;
                                let { isNonUserGenerated: t } = (0, m.I)(e.trackSource);
                                return t;
                            },
                            get hasModalAccess() {
                                return e.hasModalDisclaimer;
                            },
                            getDisclaimerEntityRef: (r) =>
                                r
                                    ? { entityType: r, entityId: e.id }
                                    : t.isTrackPodcast
                                      ? { entityType: l.n.PODCAST, entityId: e.id }
                                      : t.isTrackAudiobook
                                        ? { entityType: l.n.AUDIOBOOK, entityId: e.id }
                                        : { entityType: l.n.TRACK, entityId: e.id },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        afterCreate() {
                            e.trackType = e.type;
                        },
                        toggleLike: (0, a.L3)(function* () {
                            if (!(0, a._n)(e)) return;
                            let { library: t, user: r } = (0, s.M)(e);
                            if (r.isAuthorized) return yield t.toggleTrackLike({ entityId: e.id, albumId: e.albumId, userId: r.account.data.uid });
                        }),
                        toggleDislike: (0, a.L3)(function* () {
                            if (!(0, a._n)(e)) return;
                            let { library: t, user: r } = (0, s.M)(e);
                            if (r.isAuthorized) return yield t.toggleTrackDislike({ entityId: e.id, albumId: e.albumId, userId: r.account.data.uid });
                        }),
                        setListeningFinishedStatus: (0, a.L3)(function* () {
                            let t = e.streamProgress;
                            if (t)
                                return (null == t ? void 0 : t.hasEverFinished)
                                    ? yield null == t ? void 0 : t.markUnlistened({ trackId: Number(e.id) })
                                    : yield null == t ? void 0 : t.markListened({ trackId: Number(e.id) });
                        }),
                        getKey: (t) => ''.concat(t, '_').concat(e.id),
                    }))
                    // for PulseSync WebHost: BEGIN attach addon metadata update actions to the track model
                    .actions(r(999994).metadataModelActions('track'));
                    // for PulseSync WebHost: END attach addon metadata update actions to the track model
        },
        35240: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPage_root__hZZwz',
                important: 'MyMusicDownloadedTracksPage_important__QP_t0',
                pageContainer: 'MyMusicDownloadedTracksPage_pageContainer__qu3hF',
                footer: 'MyMusicDownloadedTracksPage_footer__KI5OP',
                content: 'MyMusicDownloadedTracksPage_content__Iz1WY',
                trackShimmer: 'MyMusicDownloadedTracksPage_trackShimmer__MZgW3',
            };
        },
        39052: (e) => {
            e.exports = { root: 'MyMusicDownloadedTracksInfo_root__yIYHx' };
        },
        43708: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => i });
            var a = r(75501);
            let i = (e) => e === a.S.TRACK || e === a.S.MUSIC;
        },
        60024: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => n });
            var a = r(28410),
                i = r(59981);
            let n = a.gK.model('StreamProgress', { endPositionSec: a.gK.maybe(a.gK.number), hasEverFinished: a.gK.maybe(a.gK.boolean) }).actions((e) => ({
                updateEndPositionSec: (t) => {
                    e.endPositionSec = t;
                },
                updateEverFinished: (t) => {
                    e.hasEverFinished = t;
                },
                markListened: (0, a.L3)(function* (t) {
                    let { streamsResource: r, modelActionsLogger: n } = (0, a._$)(e);
                    try {
                        return yield r.markFinished(t);
                    } catch (e) {
                        return (n.error(e), i.T.ERROR);
                    }
                }),
                markUnlistened: (0, a.L3)(function* (t) {
                    let { streamsResource: r, modelActionsLogger: n } = (0, a._$)(e);
                    try {
                        return yield r.markUnfinished(t);
                    } catch (e) {
                        return (n.error(e), i.T.ERROR);
                    }
                }),
            }));
        },
        61050: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPageEmpty_root__LAXpY',
                icon: 'MyMusicDownloadedTracksPageEmpty_icon__PDhk2',
                title: 'MyMusicDownloadedTracksPageEmpty_title__g2w5R',
                text: 'MyMusicDownloadedTracksPageEmpty_text__8RJFg',
            };
        },
        79422: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => n });
            var a = r(74631),
                i = r(71035);
            let n = () => {
                let e = (0, a.useRef)(new Map());
                return (
                    (0, a.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, i.c)((t, r) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, r), r)))
                );
            };
        },
        80468: (e, t, r) => {
            'use strict';
            (r.d(t, { x: () => n }), ((a || (a = {})).SMART_PREVIEW = 'smart_preview'));
            var a,
                i = r(23951);
            let n = (e, t) => {
                var r, n, s, l, o, d, c, u, g, m;
                let { isSmartPreview: _, hasEverFinished: v } = t || {},
                    // for PulseSync: BEGIN use substituted track colors
                    y = (0, i.Q)(e?.substituted?.derivedColors ?? e?.derivedColors),
                    // for PulseSync: END use substituted track colors
                    p = _ ? (null == e || null == (r = e.smartPreviewParams) ? void 0 : r.durationMs) : null == e ? void 0 : e.durationMs,
                    h = { available: !!(null == e || null == (n = e.specialAudioResources) ? void 0 : n.includes(a.SMART_PREVIEW)) };
                return {
                    id: ((null == e ? void 0 : e.id) || 0).toString(),
                    isAvailable: !!(null == e ? void 0 : e.available),
                    isRemoved: (null == e ? void 0 : e.error) === 'not-found',
                    // for PulseSync: BEGIN use substituted track title and version and flag substitution
                    title: e?.substituted?.title ?? e?.title ?? '',
                    version: e?.substituted?.version ?? e?.version,
                    isSubstituted: !!(e?.isSubstituted || e?.substituted),
                    // for PulseSync: END use substituted track title and version and flag substitution
                    durationMs: p,
                    // for PulseSync: BEGIN use substituted track cover fields
                    coverUri: e?.substituted?.coverUri || e?.substituted?.ogImage || e?.substituted?.cover?.uri || e?.substituted?.albums?.[0]?.coverUri || e?.coverUri,
                    // for PulseSync: END use substituted track cover fields
                    averageColor: y,
                    trackParameters: null == e ? void 0 : e.trackParameters,
                    trackSource: null == e ? void 0 : e.trackSource,
                    // for PulseSync: BEGIN normalize album IDs and add substituted-track disclaimers
                    albumId: null == e || null == (l = e.albums) || null == (s = l[0]) || null == s.id ? void 0 : Number(s.id),
                    disclaimers:
                        e?.isSubstituted || e?.substituted
                            ? Array.from(new Set([...(e.disclaimers ?? []), 'substitutedIcon:pulsesync-substituted', 'descriptionText:pulsesync-substituted']))
                            : e?.disclaimers,
                    // for PulseSync: END normalize album IDs and add substituted-track disclaimers
                    type: null == e ? void 0 : e.type,
                    pubDate: null == e ? void 0 : e.pubDate,
                    hasLyrics: null == e || null == (o = e.lyricsInfo) ? void 0 : o.hasAvailableTextLyrics,
                    hasSyncLyrics: null == e || null == (d = e.lyricsInfo) ? void 0 : d.hasAvailableSyncLyrics,
                    shouldRememberPosition: null == e ? void 0 : e.rememberPosition,
                    streamProgress: ((e, t) => ({
                        endPositionSec: null == e ? void 0 : e.endPositionSec,
                        hasEverFinished: (null == t ? void 0 : t.hasEverFinished) || (null == e ? void 0 : e.everFinished),
                    }))(null == e ? void 0 : e.streamProgress, { hasEverFinished: v }),
                    shortDescription: null != (m = null == e ? void 0 : e.shortDescription) ? m : '',
                    trailer: h,
                    // for PulseSync: BEGIN use substituted track clip IDs
                    clipIds: e?.substituted?.clipIds ?? e?.clipIds,
                    // for PulseSync: END use substituted track clip IDs
                    major: (null == e ? void 0 : e.major) ? { id: e.major.id, name: e.major.name } : null,
                    genre: null == e || null == (u = e.albums) || null == (c = u[0]) ? void 0 : c.genre,
                    realId: null == e ? void 0 : e.realId,
                    cutoutCover: null == e ? void 0 : e.cutoutCover,
                };
            };
        },
        80499: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => y, s: () => p });
            var a = r(25839),
                i = r(88204),
                n = r(84059),
                s = r(74631),
                l = r(89288),
                o = r(36432),
                d = r(94421),
                c = r(99989),
                u = r(27954),
                g = r(83382);
            (0, i.eO)(!1);
            let m = (0, s.createContext)(null),
                _ = (e) => {
                    let { children: t, store: r, storeKey: i } = e,
                        n = (0, s.useMemo)(() => ({ store: r, storeKey: i }), [r, i]);
                    return (0, a.jsx)(m.Provider, { value: n, children: t });
                },
                v = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: i } = e;
                    return (
                        (0, n.useServerInsertedHTML)(() => {
                            let e = i.current;
                            return ((i.current = []), 0 === e.length)
                                ? null
                                : (0, a.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, l.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(d.O, "'));\n    "))(r, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                y = (e) => {
                    let { createStore: t, patchKey: r } = e,
                        i = () => {
                            var e, t;
                            let a = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], a);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: n, nonce: s } = e,
                                l = (0, g.Y)(),
                                o = (0, u.g)(),
                                { store: m, patchesRef: y } = (0, c.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: i,
                                    patchesUpdatedEventName: d.O,
                                });
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(v, { nonce: s, patchKey: r, patchesRef: y }), (0, a.jsx)(_, { store: m, storeKey: r, children: n })],
                            });
                        },
                    };
                };
            function p(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, s.useContext)(m);
                if (!r || r.storeKey !== e) {
                    var a;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (a = null == r ? void 0 : r.storeKey) ? a : 'null', expectedStoreKey: e },
                    });
                }
                return r.store;
            }
        },
        82589: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => o });
            var a = r(74631),
                i = r(8187),
                n = r(71035),
                s = r(96444);
            let l = [i.DT.IDLE, i.DT.DOWNLOADED],
                o = (e) => {
                    var t;
                    let r = (0, s.j)(),
                        o = (0, n.c)((t) => {
                            let { state: r } = t;
                            l.includes(r.loadingState) && e();
                        });
                    (0, a.useEffect)(() => {
                        var t, a;
                        return (
                            null == (t = r.store) || t.tracks.events.on(i.je.STATE_CHANGED, e),
                            null == (a = r.store) || a.tracks.events.on(i.je.ENTITY_CHANGED, o),
                            () => {
                                var t, a;
                                (null == (t = r.store) || t.tracks.events.off(i.je.STATE_CHANGED, e),
                                    null == (a = r.store) || a.tracks.events.off(i.je.ENTITY_CHANGED, o));
                            }
                        );
                    }, [e, o, null == (t = r.store) ? void 0 : t.tracks.events]);
                };
        },
        82706: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => a });
            let a = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        88148: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => d });
            var a = r(28410),
                i = r(66730),
                n = r(69088),
                s = r(69432),
                l = r(34001),
                o = r(31488);
            let d = l.O.props({ artists: a.gK.array(n.P), albums: a.gK.array(i.G), chart: a.gK.maybe(s.I) })
                .views((e) => ({
                    get artistsNames() {
                        var t;
                        return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                    },
                    get mainArtist() {
                        var r, a, i, n;
                        if (null == (a = e.artists) || null == (r = a[0]) ? void 0 : r.various) return null;
                        return null != (n = null == (i = e.artists) ? void 0 : i[0]) ? n : null;
                    },
                    get mainAlbum() {
                        var s, l;
                        return null != (l = null == (s = e.albums) ? void 0 : s[0]) ? l : null;
                    },
                    get index() {
                        var o, d, c;
                        return null != (c = null == (d = e.albums[0]) || null == (o = d.trackPosition) ? void 0 : o.index) ? c : null;
                    },
                    get isAvailableOnlyForPlus() {
                        var u;
                        return !!(null == (u = this.mainAlbum) ? void 0 : u.isAvailableOnlyForPlus);
                    },
                }))
                .actions((e) => ({
                    changeTrackInfo: (0, a.L3)(function* (t, r) {
                        let { ugcResource: i, modelActionsLogger: s } = (0, a._$)(e);
                        if (e.artists.map((e) => e.name).join(', ') === r && t === e.title) return o.F.OK;
                        try {
                            var l;
                            (yield i.changeTrack({ trackId: e.id, title: t, artist: r }), (e.title = t));
                            let s = (null == (l = e.artists[0]) ? void 0 : l.id) || '0';
                            if (((e.artists = (0, a.wg)([])), r)) {
                                let t = n.P.create({ id: s, name: r, isAvailable: !0 });
                                e.artists = (0, a.wg)([t]);
                            }
                            return o.F.OK;
                        } catch (e) {
                            return (s.error(e), o.F.ERROR);
                        }
                    }),
                }))
                .named('Track');
        },
        98487: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => d });
            var a = r(28410),
                i = r(52807),
                n = r(24820),
                s = r(88148),
                l = r(36159),
                o = r(19835);
            let d = a.gK
                .compose(a.gK.model('DownloadedTracks', { items: a.gK.maybeNull(a.gK.array(s.v)), tracks: a.gK.maybeNull(a.gK.frozen()) }), o.X)
                .views((e) => ({
                    get tracksDurationInMinutes() {
                        var t, r;
                        return (null != (r = null == (t = e.tracks) ? void 0 : t.reduce((e, t) => (t.durationMs ? e + t.durationMs : e), 0)) ? r : 0) / 1e3 / 60;
                    },
                    get entitiesData() {
                        if (!e.tracks) return [];
                        return e.tracks.map((e) => ({ type: i.R.DownloadedMusic, meta: e }));
                    },
                    get isEmpty() {
                        var a;
                        return e.isResolved && (null == (a = e.items) ? void 0 : a.length) === 0;
                    },
                }))
                .actions((e) => ({
                    getData: (0, a.L3)(function* (t, r) {
                        let { modelActionsLogger: i } = (0, a._$)(e);
                        if (e.loadingState !== l.G.PENDING)
                            try {
                                e.loadingState = l.G.PENDING;
                                let i = yield t.getTracks(r);
                                ((e.tracks = i), (e.items = (0, a.wg)(i.map((e) => (0, n.v)(e)))), e.loadingState !== l.G.IDLE && (e.loadingState = l.G.RESOLVE));
                            } catch (t) {
                                (i.error(t), e.loadingState !== l.G.IDLE && (e.loadingState = l.G.REJECT));
                            }
                    }),
                    reset() {
                        ((e.items = null), (e.tracks = null), (e.loadingState = l.G.IDLE));
                    },
                }));
        },
    },
]);
