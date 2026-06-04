(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6486],
    {
        520: (e, t, i) => {
            'use strict';
            i.d(t, { useAlbumAnalyticsAppScreenName: () => l });
            var r = i(55178),
                a = i(16172),
                s = i(64605);
            let l = (e) =>
                (0, r.useMemo)(() => {
                    switch (e) {
                        case s._.PODCAST:
                            return a.QT.PodcastScreen;
                        case s._.AUDIOBOOK:
                            return a.QT.AudiobookScreen;
                        default:
                            return a.QT.AlbumScreen;
                    }
                }, [e]);
        },
        7462: (e, t, i) => {
            'use strict';
            i.d(t, { AlbumEntityNameConsumer: () => l, useAlbumEntityName: () => n });
            var r = i(55178),
                a = i(60900),
                s = i(64605),
                l = (function (e) {
                    return (e.PIN = 'pin'), e;
                })({});
            let n = (e, t) => {
                let { formatMessage: i } = (0, a.A)();
                return (0, r.useMemo)(() => {
                    switch (e) {
                        case s._.SINGLE:
                            return i({ id: 'entity-names.single' });
                        case s._.PODCAST:
                            return i({ id: 'entity-names.podcast' });
                        case s._.AUDIOBOOK:
                            if ('pin' === t) return i({ id: 'entity-names.book' });
                            return i({ id: 'entity-names.audio' });
                        case s._.FAIRY_TALE:
                            return i({ id: 'entity-names.fairy-tale' });
                        default:
                            return i({ id: 'entity-names.album' });
                    }
                }, [e, i, t]);
            };
        },
        9152: (e, t, i) => {
            'use strict';
            i.d(t, {
                cr: () => c.AlbumEntityNameConsumer,
                GI: () => P,
                oM: () => N,
                rU: () => n,
                e7: () => s,
                G_: () => l,
                Rl: () => o.useAlbumAnalyticsAppScreenName,
                cp: () => u.useAlbumDisclaimer,
                r_: () => c.useAlbumEntityName,
                Ek: () => d.useMarkAlbumListenedClick,
                $1: () => m.useNavigateToAlbumCPA,
                KX: () => b.useOnLikeClick,
                A7: () => v.useOnPinClick,
                PL: () => p.useOnPresaveClick,
                c5: () => _.useOnPromoLandingLikeClick,
            });
            var r = i(60754),
                a = i(49574);
            let s = (e) => {
                    let t = (0, a.mxW)(e.trailer);
                    return (0, r.wg)({
                        id: e.id,
                        title: e.title,
                        coverUri: e.coverUri,
                        type: e.type,
                        year: e.year,
                        version: e.version,
                        genre: e.genre,
                        likesCount: e.likesCount,
                        averageColor: (0, a.QBb)(e.derivedColors),
                        isAvailable: !!e.available,
                        trackPosition: e.trackPosition,
                        disclaimers: e.disclaimers,
                        trackCount: e.trackCount,
                        availableForPremiumUsers: e.availableForPremiumUsers,
                        availableForOptions: e.availableForOptions || [],
                        bestAlbumTracks: e.bests,
                        durationSec: e.durationSec,
                        trailer: t,
                        listeningFinished: !!e.listeningFinished,
                    });
                },
                l = (e) => {
                    let t = !1;
                    e.presaveDate ? (t = !0) : e.presaved && (t = e.presaved);
                    let { disclaimers: i } = (0, a.fyr)(e);
                    return (0, r.wg)({ id: e.id, disclaimers: i, isPresave: t, title: e.title, type: e.type, coverUri: e.coverUri, releaseDate: e.releaseDate });
                };
            var n = (function (e) {
                    return (e.TRACK = 'track'), (e.TEXT = 'text'), e;
                })({}),
                o = i(520),
                u = i(34883),
                c = i(7462),
                d = i(18583),
                m = i(16472),
                b = i(83861),
                v = i(91253),
                p = i(63371),
                _ = i(15807),
                g = i(16172),
                A = i(64605),
                C = i(38103),
                y = i(90404),
                h = i(63380),
                k = i(95428);
            let x = r.gK.model('TrackPosition', { volume: r.gK.number, index: r.gK.number }),
                P = r.gK
                    .compose(
                        r.gK.model({
                            id: r.gK.number,
                            title: r.gK.string,
                            type: r.gK.maybe(r.gK.enumeration(Object.values(A._))),
                            coverUri: r.gK.maybe(r.gK.string),
                            averageColor: r.gK.maybe(r.gK.string),
                            year: r.gK.maybe(r.gK.number),
                            version: r.gK.maybe(r.gK.string),
                            isAvailable: r.gK.optional(r.gK.boolean, !0),
                            availableForOptions: r.gK.maybe(r.gK.array(r.gK.enumeration(Object.values(C.E)))),
                            availableForPremiumUsers: r.gK.maybe(r.gK.boolean),
                            bookmateOptionRequired: r.gK.maybe(r.gK.boolean),
                            genre: r.gK.maybe(r.gK.string),
                            trackPosition: r.gK.maybe(x),
                            disclaimers: r.gK.maybe(r.gK.array(r.gK.string)),
                            trackCount: r.gK.maybe(r.gK.number),
                            bestAlbumTracks: r.gK.maybe(r.gK.array(r.gK.number)),
                            trailer: r.gK.maybe(k.aQ),
                            durationSec: r.gK.maybe(r.gK.number),
                            listeningFinished: r.gK.maybe(r.gK.boolean),
                            releaseDate: r.gK.maybe(r.gK.string),
                        }),
                        k.tP,
                        k.Ec,
                    )
                    .views((e) => {
                        let t = {
                            get url() {
                                let { href: t } = (0, a.uvd)('/album/:albumId', { params: { albumId: e.id } });
                                return t;
                            },
                            get isLiked() {
                                if (!(0, r._n)(e)) return !1;
                                let { library: t } = (0, r.Zn)(e);
                                return null == t ? void 0 : t.isAlbumLiked(e.id);
                            },
                            get pinId() {
                                return ''.concat(y._.ALBUM_ITEM).concat(e.id);
                            },
                            get seeds() {
                                return ['album:'.concat(e.id)];
                            },
                            get isAlbum() {
                                return e.type === A._.ALBUM || e.type === A._.SINGLE;
                            },
                            get isPodcast() {
                                return e.type === A._.PODCAST;
                            },
                            get isAudiobook() {
                                return e.type === A._.AUDIOBOOK;
                            },
                            get isFairyTale() {
                                return e.type === A._.FAIRY_TALE;
                            },
                            get isNonMusic() {
                                if (!(0, r._n)(e)) return !1;
                                return t.isPodcast || t.isAudiobook || t.isFairyTale;
                            },
                            get mainObjectType() {
                                if (t.isPodcast) return g.ky.Podcast;
                                if (t.isAudiobook || t.isFairyTale) return g.ky.Audiobook;
                                return g.ky.Album;
                            },
                            get isPinned() {
                                if (!(0, r._n)(e)) return !1;
                                let { pinsCollection: t } = (0, r.Zn)(e);
                                return t.isPinned(this.pinId);
                            },
                            get isLegalRejected() {
                                if (!(0, r._n)(e)) return !1;
                                return e.getIsLegalRejected(e.isAvailable);
                            },
                            get isUnsafeLegal() {
                                if (!(0, r._n)(e)) return !1;
                                return e.getIsUnsafeLegal(e.isAvailable);
                            },
                            get isAvailableOnlyForPlus() {
                                var i;
                                return !e.isAvailable && (e.availableForPremiumUsers || !!(null == (i = e.availableForOptions) ? void 0 : i.includes(C.E.BOOKMATE)));
                            },
                            get shouldShowBooksBadge() {
                                var s;
                                return !!(
                                    e.bookmateOptionRequired ||
                                    (!e.availableForPremiumUsers && (null == (s = e.availableForOptions) ? void 0 : s.includes(C.E.BOOKMATE)))
                                );
                            },
                            getDisclaimerEntityRef: (i) => ({ entityType: null != i ? i : t.isPodcast ? a.nPY.PODCAST : a.nPY.ALBUM, entityId: e.id }),
                        };
                        return t;
                    })
                    .actions((e) => ({
                        toggleLike: (0, r.L3)(function* () {
                            if (!(0, r._n)(e)) return;
                            let { library: t, user: i } = (0, r.Zn)(e);
                            if (i.isAuthorized) {
                                let a = yield t.toggleAlbumLike({ entityId: e.id, userId: i.account.data.uid });
                                return (0, r._n)(e) && a === h.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), a;
                            }
                        }),
                        togglePin: (0, r.L3)(function* () {
                            if (!(0, r._n)(e)) return;
                            let { pinsCollection: t, user: i } = (0, r.Zn)(e);
                            if (i.isAuthorized) return yield t.toggleAlbumPin({ id: e.id }, e.pinId);
                        }),
                        getKey: (t) => ''.concat(t, '_').concat(e.id),
                        updateFinished: (t) => {
                            e.listeningFinished = t;
                        },
                    }))
                    .named('BaseAlbum');
            var f = i(90346);
            let N = r.gK
                .compose(
                    r.gK.model('BaseUpcomingAlbum', {
                        id: r.gK.number,
                        isPresave: r.gK.boolean,
                        title: r.gK.maybe(r.gK.string),
                        type: r.gK.maybe(r.gK.enumeration(Object.values(A._))),
                        coverUri: r.gK.maybe(r.gK.string),
                        releaseDate: r.gK.maybe(r.gK.string),
                    }),
                    k.Ec,
                )
                .actions((e) => {
                    let t = {
                        presaveAlbum: (0, r.L3)(function* (t) {
                            let { usersResource: i, modelActionsLogger: a } = (0, r._$)(e);
                            try {
                                e.isPresave = !0;
                                let r = yield i.presaveAlbum(t);
                                return r === f.J.ERROR && (e.isPresave = !1), r;
                            } catch (t) {
                                return (e.isPresave = !1), a.error(t), f.J.ERROR;
                            }
                        }),
                        removePresaveAlbum: (0, r.L3)(function* (t) {
                            let { usersResource: i, modelActionsLogger: a } = (0, r._$)(e);
                            try {
                                e.isPresave = !1;
                                let r = yield i.removePresaveAlbum(t);
                                return r === f.J.ERROR && (e.isPresave = !0), r;
                            } catch (t) {
                                return (e.isPresave = !0), a.error(t), f.J.ERROR;
                            }
                        }),
                        toggleLike: (0, r.L3)(function* () {
                            let i;
                            if (!(0, r._n)(e)) return;
                            let { user: a } = (0, r.Zn)(e);
                            if (a.account.data.uid)
                                return (
                                    (i = e.isPresave
                                        ? yield t.removePresaveAlbum({ albumId: e.id, userId: a.account.data.uid })
                                        : yield t.presaveAlbum({ albumId: e.id, userId: a.account.data.uid, likeAfterRelease: !0 })),
                                    !(0, r._n)(e),
                                    i
                                );
                        }),
                        getKey: (t) => ''.concat(t, '_').concat(e.id),
                    };
                    return t;
                });
        },
        10583: (e, t, i) => {
            'use strict';
            i.d(t, { AlbumCard: () => T });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                l = i(55178),
                n = i(60900),
                o = i(16172),
                u = i(59824),
                c = i(71483),
                d = i(64605),
                m = i(91027),
                b = i(6752),
                v = i(63423),
                p = i(14934),
                _ = i(82586),
                g = i(86269),
                A = i(71926),
                C = i(9152),
                y = i(33797),
                h = i(62400),
                k = i(49574),
                x = i(44574),
                P = i(77712);
            let f = { mainAxis: -26, alignmentAxis: -16 },
                N = { isEnabled: !0, width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' };
            var L = i(89549),
                I = i(89638),
                K = i.n(I);
            let T = (0, s.PA)((e) => {
                let {
                        className: t,
                        children: i,
                        album: s,
                        contentLinesCount: I,
                        withLikesCount: T,
                        withChart: O,
                        withAddition: j = !0,
                        withArtistName: M = !0,
                        releaseDateFormatter: B = k.sDH,
                    } = e,
                    { ref: w, intersectionPropertyId: U } = (0, k.nMI)(),
                    {
                        user: R,
                        trailer: E,
                        settings: { isMobile: S },
                        albumCPA: { isPlusCPAEnabled: z },
                        experiments: D,
                        paywall: { modal: F },
                    } = (0, k.Pjs)(),
                    { from: $, utmLink: Q } = (0, k.fyy)({ contextId: s.id, contextType: c.K.Album, utmForPageIds: s.artistIds }),
                    { formatMessage: q, formatDate: G } = (0, n.A)(),
                    { sendLikeSearchFeedback: H, sendNavigateSearchFeedback: V, sendPlaySearchFeedback: W } = (0, k.zEv)(),
                    [Y, J] = (0, l.useState)(!1),
                    [Z, X] = (0, l.useState)(!1),
                    [ee, et] = (0, l.useState)(!1),
                    ei = (0, k.NKK)(),
                    er = (0, k.brA)(),
                    ea = (0, C.KX)(s),
                    es = (0, C.A7)(s),
                    el = (0, k.ZpR)(s.url),
                    [en, eo] = (0, l.useState)(!1),
                    eu = (0, k.Ftl)(),
                    [ec, ed] = (0, l.useState)(!1),
                    em = (0, k.PT7)(),
                    { pageAlbumId: eb } = (0, k.THB)(),
                    ev = z({ pageAlbumId: eb, albumId: s.id, isNonMusic: s.isNonMusic }),
                    ep = (0, k.NPu)(),
                    e_ = s.isAvailableOnlyForPlus && !s.isUnsafeLegal && !s.isLegalRejected,
                    eg = e_ && !S,
                    eA = s.isAvailable || eg || s.isAudiobook,
                    eC = (0, l.useId)(),
                    ey = (0, k.ZpR)('https://music.yandex.ru/promo/lt-pay-promo/?get-plus=1&utm_source=music&utm_medium=non_music_tab&utm_campaign=web_music_birthday'),
                    eh = (0, m.c)((e) => {
                        if ((e.stopPropagation(), em())) return void e.preventDefault();
                        E.openAlbumTrailer(s.id), eu(o.ky.Album, String(s.id));
                    }),
                    ek = s.type === d._.SINGLE ? q({ id: 'entity-names.single' }) : void 0,
                    ex = s.releaseDate ? G(s.releaseDate, B()) : void 0,
                    eP = (0, k.daX)([null != ex ? ex : s.year, ek]),
                    ef = (0, C.r_)(s.type),
                    eN = (0, l.useMemo)(() => {
                        var e;
                        let t = s.isLiked ? q({ id: 'entity-names.has-your-like' }) : '';
                        return ''
                            .concat(ef, ' ')
                            .concat(s.title, ' ')
                            .concat(null != (e = s.version) ? e : '', ' ')
                            .concat(t);
                    }, [ef, q, s.title, s.isLiked, s.version]),
                    { isPlaying: eL, togglePlay: eI } = (0, k.Dx4)({
                        playContextParams: { contextData: { type: c.K.Album, meta: { id: s.id }, from: $, utmLink: Q }, loadContextMeta: !0 },
                    }),
                    eK = (0, C.cp)({ album: s, callback: el }),
                    eT = (0, C.cp)({ album: s, callback: eI }),
                    eO = (0, m.c)((e) => {
                        ei({ to: o.QT.AlbumScreen }), null == V || V(), eK(e);
                    }),
                    ej = (0, m.c)(() => {
                        if (!em()) {
                            if (ep) return void F.open();
                            Z || eL || (X(!0), null == W || W()), eT(), er(!eL);
                        }
                    }),
                    eM = (0, m.c)(() => {
                        Y || s.isLiked || (J(!0), null == H || H()), ea();
                    }),
                    eB = (0, m.c)((e) => {
                        et(e), eo(e);
                    }),
                    ew = (0, l.useMemo)(() => {
                        var e;
                        return (0, r.jsxs)(A.Caption, {
                            className: (0, a.$)(K().title, { [K().title_withVersion]: s.version, [K().title_withChart]: O }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            ...(0, u.Am)(u.Kq.album.ALBUM_TITLE),
                            children: [
                                (0, r.jsx)(x.N_, {
                                    'aria-label': ''.concat(s.title, ' ').concat(null != (e = s.version) ? e : ''),
                                    className: K().titleLink,
                                    href: s.url,
                                    onClick: eO,
                                    ...(0, u.Am)(u.Kq.album.ALBUM_TITLE_LINK),
                                    children: s.title,
                                }),
                                s.version &&
                                    (0, r.jsx)(A.Caption, {
                                        className: K().version,
                                        variant: 'span',
                                        ...(0, u.Am)(u.Kq.album.ALBUM_VERSION),
                                        children: ' '.concat(s.version),
                                    }),
                            ],
                        });
                    }, [s.title, s.url, s.version, eO, O]),
                    eU = (0, l.useMemo)(() => {
                        var e;
                        return (0, r.jsx)(x.N_, { href: s.url, onClick: eO, children: ''.concat(s.title, ' ').concat(null != (e = s.version) ? e : '') });
                    }, [s.title, s.url, s.version, eO]),
                    eR = (0, l.useMemo)(() => {
                        var e;
                        if (null == s || null == (e = s.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                x.nE,
                                {
                                    children: (0, r.jsx)(
                                        x.kJ,
                                        { className: (0, a.$)(K().trailerButton, K().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eh },
                                        s.getKey('TrailerButton'),
                                    ),
                                },
                                s.getKey('AlbumCardTrailerTooltip'),
                            );
                    }, [s, eh]),
                    eE = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(
                                L.BaseAlbumContextMenu,
                                {
                                    album: s,
                                    onOpenChange: eB,
                                    open: ee,
                                    className: (0, a.$)(K().menuButton, K().control),
                                    icon: (0, r.jsx)(_.Icon, { size: 'xxs', variant: 'more' }),
                                    size: 's',
                                    variant: P.z.CARD,
                                    ...(0, u.Am)(u.Kq.album.ALBUM_CONTEXT_MENU_BUTTON),
                                },
                                s.getKey('AlbumContextMenu'),
                            ),
                        [s, eB, ee],
                    ),
                    eS = (0, l.useCallback)(
                        () =>
                            (0, r.jsx)(
                                x.DM,
                                {
                                    className: (0, a.$)(K().playButton, K().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: ej,
                                    isPlaying: eL,
                                    disabled: eg,
                                },
                                s.getKey('PlayButton'),
                            ),
                        [eg, s, eL, ej],
                    ),
                    ez = (0, b.L)(() =>
                        (0, r.jsx)(
                            v.$,
                            {
                                role: 'link',
                                color: 'plus',
                                size: 'xxs',
                                radius: 'xxxl',
                                onClick: ey,
                                children: (0, r.jsx)(A.Caption, { variant: 'div', size: 'm', children: q({ id: 'payment.try-button' }) }),
                            },
                            eC,
                        ),
                    ),
                    eD = (0, l.useMemo)(
                        () =>
                            eg && R.hasPlus && D.checkExperiment(k.zal.WebNextPlusLandingLink, 'on')
                                ? (0, r.jsx)(x.SU, {
                                      className: K().buyPlusPopover,
                                      buttonText: q({ id: 'interface-actions.more-details' }),
                                      isNested: !0,
                                      placement: 'top-start',
                                      isOpened: ec,
                                      onOpenChange: ed,
                                      textVariant: 'album',
                                      albumTextVariant: s.type,
                                      arrowProps: N,
                                      offsetOptions: f,
                                      renderChildren: eS,
                                      customButtons: [ez],
                                  })
                                : eg
                                  ? (0, r.jsx)(x.SU, {
                                        className: K().buyPlusPopover,
                                        buttonText: q({ id: 'interface-actions.more-details' }),
                                        isNested: !0,
                                        placement: 'top-start',
                                        isOpened: ec,
                                        onOpenChange: ed,
                                        textVariant: 'album',
                                        albumTextVariant: s.type,
                                        arrowProps: N,
                                        offsetOptions: f,
                                        renderChildren: eS,
                                    })
                                  : eS(),
                        [eg, ec, ed, q, eS, s.type, ez, D, R.hasPlus],
                    ),
                    eF = (0, b.L)(() => {
                        if (eg) return;
                        let e = !ev && !R.isAuthorized;
                        return (0, r.jsx)(
                            x.cy,
                            {
                                className: (0, a.$)(K().likeButton, K().control),
                                isLiked: s.isLiked,
                                onClick: eM,
                                variant: 'default',
                                size: 's',
                                iconSize: 'xxs',
                                disabled: e,
                            },
                            s.getKey('LikeButton'),
                        );
                    }),
                    e$ = (0, l.useMemo)(() => {
                        if (!eg)
                            return (0, r.jsx)(
                                x.O0,
                                { onClick: es, isPinned: s.isPinned, className: (0, a.$)(K().pinButton, K().control), withRipple: !1, isDisabled: eg },
                                s.getKey('PinButton'),
                            );
                    }, [s, eg, es]),
                    eQ = (0, l.useMemo)(() => {
                        if (s.isAvailable || eg)
                            return (0, r.jsx)(p.hg, {
                                isVisible: ee || en || ec,
                                className: K().controls,
                                playControl: eD,
                                likeControl: eF,
                                menuControl: eE,
                                pinControl: e$,
                                trailerControl: eR,
                            });
                    }, [s, ee, en, eE, eR, ec, eD, eF, e$, eg]),
                    eq = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(g.Paper, {
                                className: K().cover,
                                radius: 's',
                                withShadow: !0,
                                ...(0, u.Am)(u.Kq.album.ALBUM_CARD),
                                children: (0, r.jsxs)('div', {
                                    className: K().coverBlock,
                                    onClick: eO,
                                    children: [
                                        (0, r.jsx)(x.BW, {
                                            className: K().image,
                                            src: s.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eN,
                                            withAvatarReplace: !0,
                                            isAvailable: eA,
                                            'aria-hidden': !0,
                                        }),
                                        e_ && (0, r.jsx)(_.Icon, { variant: 'plusBadge', className: K().plusBadge }),
                                        eQ,
                                    ],
                                }),
                            }),
                        [eO, s.coverUri, eA, eN, eQ, e_],
                    );
                return (0, r.jsxs)(p.MN, {
                    ref: w,
                    className: (0, a.$)(K().root, { [K().root_withChart]: O }, t),
                    'aria-label': eN,
                    explicitMarkComponent:
                        s.explicitDisclaimer &&
                        (0, r.jsx)(
                            x.Nq,
                            { className: K().explicitMark, getDescriptionTexts: s.getDescriptionTexts, variant: s.explicitDisclaimer },
                            s.getKey('AlbumCardExplicitMarkIcon'),
                        ),
                    title: ew,
                    srTitle: eU,
                    'data-intersection-property-id': U,
                    contentLinesCount: I,
                    view: eq,
                    description:
                        M &&
                        (0, r.jsx)(
                            y.iQ,
                            { className: K().artists, artists: s.artists, lineClamp: 1, linkClassName: K().artistLink, captionSize: 's' },
                            s.getKey('description'),
                        ),
                    chart:
                        O &&
                        s.chart &&
                        (0, r.jsx)(h.t1, { withIcon: !0, className: K().chart, position: s.chart.position, progress: s.chart.progress }, s.getKey('chart')),
                    ...(0, u.Am)(u.Kq.album.ALBUM_ITEM),
                    children: [
                        j &&
                            eP &&
                            (0, r.jsx)(A.Caption, { className: K().addition, variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: eP }),
                        T &&
                            !!s.actualLikesCount &&
                            (0, r.jsx)(x.xW, {
                                className: K().likeTextButton,
                                ariaLabel: q({ id: 'entity-names.likes-counter' }, { counter: s.actualLikesCount }),
                                likesCount: s.actualLikesCount,
                                isLiked: s.isLiked,
                                handleLikeClick: ea,
                            }),
                        i,
                    ],
                });
            });
        },
        12388: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => n });
            var r = i(60754),
                a = i(9152),
                s = i(33797),
                l = i(62400);
            let n = a.GI.props({ artists: r.gK.maybe(r.gK.array(s.PK)), chart: r.gK.maybe(l.Iz) }).views((e) => ({
                get artistNames() {
                    var t;
                    return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                },
                get artistName() {
                    var i, r, a, s;
                    if (null == (r = e.artists) || null == (i = r[0]) ? void 0 : i.various) return;
                    return null == (s = e.artists) || null == (a = s[0]) ? void 0 : a.name;
                },
                get artistIds() {
                    var l;
                    return null == (l = e.artists) ? void 0 : l.map((e) => e.id);
                },
                get artistId() {
                    var n, o;
                    return null == (o = e.artists) || null == (n = o[0]) ? void 0 : n.id;
                },
            }));
        },
        13365: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { _: () => r }),
                (function (e) {
                    (e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new');
                })(r || (r = {}));
        },
        15688: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => v });
            var r = i(32290),
                a = i(92708),
                s = i(55178),
                l = i(60900),
                n = i(63380),
                o = i(91027),
                u = i(49574),
                c = i(44574),
                d = i(96103),
                m = i(79238);
            let b = (0, d.PA)((e) => {
                    let { album: t, closeToast: i, withLink: a } = e,
                        s = (0, m.b)(t);
                    return (0, r.jsx)(c.OM, {
                        closeToast: i,
                        entityVariant: s,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        withLink: a,
                    });
                }),
                v = () => {
                    let { notify: e } = (0, u.lkh)(),
                        [t, i] = (0, s.useState)(!1),
                        { formatMessage: d } = (0, l.A)();
                    return (0, o.c)(async (s) => {
                        let { album: l, withLink: o = !0, withNotification: m = !0 } = s;
                        if (t) return;
                        let v = { ...(0, a.HO)(l), url: l.url, isLiked: !l.isLiked };
                        i(!0);
                        let p = await l.toggleLike();
                        i(!1),
                            m &&
                                (p === n.f.OK
                                    ? e((0, r.jsx)(b, { withLink: o, album: v }), { containerId: u.uQT.INFO })
                                    : e((0, r.jsx)(c.hT, { error: d({ id: 'error-messages.error-during-action' }) }), { containerId: u.uQT.ERROR }));
                    });
                };
        },
        15807: (e, t, i) => {
            'use strict';
            i.d(t, { useOnPromoLandingLikeClick: () => o });
            var r = i(21916),
                a = i(94154),
                s = i(91027),
                l = i(49574),
                n = i(15688);
            let o = (e) => {
                let {
                        user: t,
                        modals: { promoLandingBuySubscriptionModal: i, crackdownModal: o },
                        settings: { isMobile: u },
                        paywall: c,
                        albumCPA: { isPlusCPAEnabled: d },
                        promolanding: m,
                    } = (0, l.Pjs)(),
                    { isFreemium: b } = (0, l.XCI)(),
                    v = (0, n.f)(),
                    { pageAlbumId: p } = (0, l.THB)(),
                    _ = (0, r.useSearchParams)();
                return (0, s.c)(async () => {
                    if (d({ pageAlbumId: p, albumId: null == e ? void 0 : e.id, isNonMusic: null == e ? void 0 : e.isNonMusic })) return void c.openModal();
                    if ((!b || (null == e ? void 0 : e.isLiked) || (u ? i.open() : o.open()), t.isAuthorized) && e) {
                        if (!e.isLiked) {
                            var r, s;
                            m.sendLikeFeedback({
                                reaction: a.g.LIKE,
                                yclid: null != (r = _.get(l.K3F.YCLID)) ? r : '',
                                campaignId: null != (s = _.get(l.K3F.UTM_CAMPAIGN)) ? s : '',
                            });
                        }
                        return v({ album: e, withLink: !1, withNotification: t.hasPlus });
                    }
                });
            };
        },
        16472: (e, t, i) => {
            'use strict';
            i.d(t, { useNavigateToAlbumCPA: () => s });
            var r = i(91027),
                a = i(49574);
            let s = (e) => {
                let { albumId: t, albumUrl: i, callback: s } = e,
                    { getAlbumUrlWithSavedClid: l, checkIsCurrentAlbumPage: n } = (0, a.IQF)(),
                    o = (0, a.pqZ)();
                return (0, r.c)((e) => {
                    if (!t || !i) {
                        null == s || s(e);
                        return;
                    }
                    if (n(t)) {
                        null == e || e.preventDefault(), o(l(t, i));
                        return;
                    }
                    null == s || s(e);
                });
            };
        },
        16486: (e, t, i) => {
            'use strict';
            i.d(t, {
                aX: () => k.AlbumCard,
                zh: () => r.z,
                JC: () => y.J,
                pZ: () => x.AlbumsCarousel,
                x6: () => P.BaseAlbumContextMenu,
                M_: () => f.HorizontalAlbumCard,
                M3: () => N.UpcomingAlbumCard,
                VH: () => h,
                fO: () => s,
                pp: () => o,
                bl: () => c,
                sK: () => m,
                EV: () => b,
                h: () => v,
                yb: () => A,
                lO: () => C,
            });
            var r = i(77712),
                a = i(33797);
            let s = (e) => {
                var t;
                if (!e)
                    return {
                        id: 0,
                        title: '',
                        availableForOptions: [],
                        availableForPremiumUsers: !0,
                        artists: [],
                        volumes: [],
                        ogImage: '',
                        availablePartially: !1,
                        trackCount: 0,
                        recent: !1,
                        veryImportant: !1,
                        labels: [],
                        metaType: '',
                        availableForMobile: !0,
                    };
                let i = (null == (t = e.artists) ? void 0 : t.map((e) => (0, a.NE)(e))) || [];
                return {
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    coverUri: e.coverUri,
                    year: e.year,
                    version: e.version,
                    availableForOptions: e.availableForOptions || [],
                    availableForPremiumUsers: e.availableForPremiumUsers || !0,
                    artists: i,
                    volumes: [],
                    ogImage: e.coverUri || '',
                    availablePartially: !1,
                    trackCount: e.trackCount || 0,
                    recent: !1,
                    veryImportant: !1,
                    labels: [],
                    metaType: '',
                    availableForMobile: !0,
                };
            };
            var l = i(60754),
                n = i(9152);
            let o = (e) => {
                let t = e.artists.map((e) => (0, a.dM)(e));
                return (0, l.wg)({ ...(0, n.e7)(e), artists: t });
            };
            var u = i(62400);
            let c = (e, t) => (0, l.wg)({ ...o(e), chart: t && (0, u.ws)(t) });
            var d = i(49574);
            let m = (e) => {
                    var t, i;
                    let { album: r, artists: s, bookmateOptionRequired: n, chart: o, likesCount: u, trailer: c, releaseYear: m, releaseDate: b } = e,
                        { available: v, disclaimers: p } = (0, d.fyr)(r);
                    return (0, l.wg)({
                        id: r.id,
                        title: r.title,
                        coverUri: null == (t = r.cover) ? void 0 : t.uri,
                        type: r.albumType,
                        disclaimers: p,
                        artists: null == s ? void 0 : s.map((e) => (0, a.as)({ artist: e })),
                        averageColor: null == (i = r.cover) ? void 0 : i.color,
                        isAvailable: v,
                        likesCount: u,
                        bookmateOptionRequired: n,
                        chart: o,
                        trailer: (0, d.mxW)(c),
                        listeningFinished: r.listeningFinished,
                        year: m ? Number(m) : void 0,
                        releaseDate: b,
                    });
                },
                b = (e) => {
                    let { album: t, artists: i, likesCount: r, chart: a } = e;
                    return (0, l.wg)({ ...m({ album: t, artists: i, likesCount: r }), chart: a && (0, u.ws)(a) });
                },
                v = (e) => {
                    var t;
                    let { album: i, artists: r, releaseDate: s, isPresave: n } = e,
                        { disclaimers: o } = (0, d.fyr)(i);
                    return (0, l.wg)({
                        id: i.id,
                        title: i.title,
                        type: i.albumType,
                        coverUri: null == (t = i.cover) ? void 0 : t.uri,
                        isPresave: n,
                        releaseDate: s,
                        disclaimers: o,
                        artists: null == r ? void 0 : r.map((e) => (0, a.as)({ artist: e })),
                    });
                };
            var p = i(21916),
                _ = i(55178),
                g = i(26252);
            (0, _.cache)(async function (e) {
                var t, i, r, a;
                let s;
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1], (0, d.LLJ)(e) || (0, p.notFound)();
                try {
                    let { container: t, backendHostTld: l, locale: n, host: o, fullUrl: u, isRSC: c, requestUrl: m, referer: b } = await (0, d.IhE)();
                    if (c) return { album: void 0, backendHostTld: l, locale: n, host: o, fullUrl: u, requestUrl: m, disclaimerTitle: null };
                    let v = t.get(d.tzI).getAlbumWithTracksIds({ albumId: Number(e), resumeStream: !1 }),
                        [p, _] = await Promise.allSettled([v]);
                    if (!p || 'fulfilled' !== p.status) return (0, d.tfF)(p.reason, () => ({ album: void 0, disclaimerTitle: null, ...(0, d.Bj3)() }));
                    {
                        let e = (null == _ ? void 0 : _.status) === 'fulfilled' && _.value ? _.value.id : null,
                            c = null;
                        if ((0, d.TeF)(p.value)) {
                            let e = p.value.disclaimers && null != (r = null == (i = (0, g.bC)(p.value.disclaimers, g.Yw.MODAL)[0]) ? void 0 : i.id) ? r : null;
                            if (e) {
                                let i = t.get(d.ffg);
                                try {
                                    let t = await i.getById(e);
                                    c = null != (a = null == t ? void 0 : t.title) ? a : null;
                                } catch (e) {
                                    c = null;
                                }
                            }
                        }
                        s = { album: p.value, backendHostTld: l, locale: n, host: o, fullUrl: u, requestUrl: m, cpa: e, disclaimerTitle: c };
                    }
                } catch (e) {
                    return (0, d.tfF)(e, () => ({ album: void 0, disclaimerTitle: null, ...(0, d.Bj3)() }));
                }
                return (null == (t = s.album) ? void 0 : t.error) === 'not-found' && (0, p.notFound)(), s;
            }),
                (0, _.cache)(async (e, t) => {
                    var i;
                    let r;
                    (0, d.LLJ)(e) || (0, p.notFound)();
                    try {
                        let { container: i, backendHostTld: a, locale: s, host: l, fullUrl: n, isRSC: o, requestUrl: u, referer: c } = await (0, d.IhE)();
                        if (o) return { album: void 0, backendHostTld: a, locale: s, host: l, fullUrl: n, requestUrl: u, isActive: !1 };
                        let m = i.get(d.tzI),
                            b = i.get(d.dh7),
                            v = await b.getPromoAlbumInfo({ albumId: Number(e), campaignId: t });
                        if (!v.active) return { album: void 0, backendHostTld: a, locale: s, host: l, fullUrl: n, requestUrl: u, isActive: !1 };
                        let p = m.getAlbumWithTracksIds({ albumId: Number(e), resumeStream: !1 }),
                            [_, g] = await Promise.allSettled([p]);
                        if (!_ || 'fulfilled' !== _.status) return (0, d.tfF)(_.reason, () => ({ album: void 0, isActive: !1, ...(0, d.Bj3)() }));
                        {
                            let e = (null == g ? void 0 : g.status) === 'fulfilled' && g.value ? g.value.id : null;
                            r = { album: _.value, backendHostTld: a, locale: s, host: l, fullUrl: n, requestUrl: u, isActive: !0, artistId: v.artistId || null, cpa: e };
                        }
                    } catch (e) {
                        return (0, d.tfF)(e, () => ({ album: void 0, isActive: !1, ...(0, d.Bj3)() }));
                    }
                    return (null == (i = r.album) ? void 0 : i.error) === 'not-found' && (0, p.notFound)(), r;
                });
            let A = (e) => {
                    let { searchParams: t = {} } = e;
                    return 'bandlink' === t[d.K3F.UTM_SOURCE] || !!t[d.K3F.CLID] || !!t[d.K3F.REF_ID];
                },
                C = (e) => {
                    var t;
                    let i = null == (t = e.artists) ? void 0 : t.map((e) => (0, a.as)({ artist: e }));
                    return (0, l.wg)({ ...(0, n.G_)(e), artists: i });
                };
            var y = i(12388);
            let h = n.oM.props({ artists: l.gK.maybe(l.gK.array(a.PK)) }).views((e) => ({
                get artistNames() {
                    var t;
                    return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                },
            }));
            var k = i(10583),
                x = i(77435),
                P = i(89549),
                f = i(88446),
                N = i(40126);
        },
        18583: (e, t, i) => {
            'use strict';
            i.d(t, { useMarkAlbumListenedClick: () => u });
            var r = i(32290),
                a = i(55178),
                s = i(60900),
                l = i(92013),
                n = i(49574),
                o = i(44574);
            let u = () => {
                let { user: e, album: t, fullscreenPlayer: i } = (0, n.Pjs)(),
                    { notify: u } = (0, n.lkh)(),
                    { formatMessage: c } = (0, s.A)();
                return (0, a.useCallback)(async () => {
                    var a, s;
                    if (!t) return;
                    let d = i.modal.isOpened ? n.uQT.FULLSCREEN_ERROR : n.uQT.ERROR;
                    return e.isAuthorized
                        ? (await t.setListeningFinishedStatus()) !== l.T.OK
                            ? void u((0, r.jsx)(o.hT, { error: c({ id: 'error-messages.error-during-action' }) }), { containerId: d })
                            : void (null == (s = t.meta) || s.updateFinished(!(null == (a = t.meta) ? void 0 : a.listeningFinished)))
                        : void u((0, r.jsx)(o.hT, { error: c({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: d });
                }, [c, u, t, e.isAuthorized, i.modal.isOpened]);
            };
        },
        20930: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ControlsBar_root__hZQ_Z',
                item: 'ControlsBar_item__Y7iTC',
                item_buttonArrow: 'ControlsBar_item_buttonArrow__y_Ku0',
                controls: 'ControlsBar_controls__yRO8t',
                trailerIcon: 'ControlsBar_trailerIcon__areYT',
                controls_disabled: 'ControlsBar_controls_disabled___S7Rg',
                likeIcon: 'ControlsBar_likeIcon__eJvkI',
            };
        },
        34883: (e, t, i) => {
            'use strict';
            i.d(t, { useAlbumDisclaimer: () => a });
            var r = i(49574);
            let a = (e) => {
                let { album: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.lVe)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        38103: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { E: () => r }),
                (function (e) {
                    (e.KIDS = 'kids'), (e.BOOKMATE = 'bookmate');
                })(r || (r = {}));
        },
        38714: (e) => {
            e.exports = {
                root: 'UpcomingAlbumCard_root__lSZ5l',
                controls: 'UpcomingAlbumCard_controls__fQ50f',
                cover: 'UpcomingAlbumCard_cover__qvU1m',
                image: 'UpcomingAlbumCard_image__WKtGR',
                releaseDate: 'UpcomingAlbumCard_releaseDate__EvDzB',
                artists: 'UpcomingAlbumCard_artists__Jp1OE',
                artistLink: 'UpcomingAlbumCard_artistLink__RSqXw',
                control: 'UpcomingAlbumCard_control__pSMdI',
                presaveButton: 'UpcomingAlbumCard_presaveButton__ixwy_',
                lockButton: 'UpcomingAlbumCard_lockButton__9_qyp',
                lockIcon: 'UpcomingAlbumCard_lockIcon__wtvkP',
            };
        },
        40126: (e, t, i) => {
            'use strict';
            i.d(t, { UpcomingAlbumCard: () => k });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                l = i(55178),
                n = i(60900),
                o = i(39407),
                u = i(59824),
                c = i(6752),
                d = i(63423),
                m = i(14934),
                b = i(82586),
                v = i(86269),
                p = i(71926),
                _ = i(9152),
                g = i(33797),
                A = i(49574),
                C = i(44574),
                y = i(38714),
                h = i.n(y);
            let k = (0, s.PA)((e) => {
                let { className: t, children: i, upcomingAlbum: s, contentLinesCount: y } = e,
                    { user: k } = (0, A.Pjs)(),
                    { ref: x, intersectionPropertyId: P } = (0, A.nMI)(),
                    { formatMessage: f, formatDate: N } = (0, n.A)(),
                    L = (0, _.PL)(s),
                    I = s.getKey('PlayButton'),
                    K = s.getKey('LikeButton'),
                    T = (0, l.useMemo)(() => {
                        let e = f({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: s.title }),
                            t = s.isPresave ? f({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [f, s.title, s.isPresave]),
                    O = (0, c.L)(() =>
                        (0, r.jsxs)(v.Paper, {
                            className: h().cover,
                            radius: 's',
                            withShadow: !0,
                            children: [
                                (0, r.jsx)(C.BW, { className: h().image, src: s.coverUri, size: 200, fit: 'cover', alt: T, withAvatarReplace: !0 }),
                                (0, r.jsx)(m.hg, {
                                    className: h().controls,
                                    playControl: (0, r.jsx)(
                                        d.$,
                                        {
                                            className: h().lockButton,
                                            disabled: !0,
                                            radius: 'xxxl',
                                            variant: 'default',
                                            size: 's',
                                            icon: (0, r.jsx)(b.Icon, { variant: 'lock', size: 'xxs', className: h().lockIcon }),
                                            'aria-label': f({ id: 'entity-names.upcoming-album-play-disabled' }),
                                            ...(0, u.Am)(u.Kq.album.UPCOMING_ALBUM_LOCK_BUTTON),
                                        },
                                        I,
                                    ),
                                    likeControl: (0, r.jsx)(
                                        C.cy,
                                        {
                                            className: (0, a.$)(h().control, h().presaveButton),
                                            isLiked: s.isPresave,
                                            onClick: L,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !k.isAuthorized,
                                        },
                                        K,
                                    ),
                                }),
                            ],
                        }),
                    );
                return (0, r.jsxs)(m.MN, {
                    ref: x,
                    className: (0, a.$)(h().root, t),
                    'aria-label': T,
                    explicitMarkComponent: s.explicitDisclaimer && (0, r.jsx)(C.Nq, { getDescriptionTexts: s.getDescriptionTexts, variant: s.explicitDisclaimer }),
                    title: (0, r.jsx)(p.Caption, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        ...(0, u.Am)(u.Kq.album.UPCOMING_ALBUM_TITLE),
                        children: s.title,
                    }),
                    'data-intersection-property-id': P,
                    ...(0, u.Am)(u.Kq.album.UPCOMING_ALBUM_CARD),
                    contentLinesCount: y,
                    view: O,
                    description: (0, r.jsx)(g.iQ, { className: h().artists, artists: s.artists, lineClamp: 1, linkClassName: h().artistLink, captionSize: 's' }),
                    children: [
                        (0, r.jsx)(p.Caption, {
                            className: h().releaseDate,
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            ...(0, u.Am)(u.Kq.album.UPCOMING_ALBUM_RELEASE_DATE),
                            children: (0, r.jsx)(o.A, { id: 'entity-names.upcoming-album-date', values: { releaseDate: N(s.releaseDate, (0, A.sDH)()) } }),
                        }),
                        i,
                    ],
                });
            });
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
        62400: (e, t, i) => {
            'use strict';
            i.d(t, { t1: () => n.Chart, Iz: () => l, ws: () => a });
            var r = i(60754);
            let a = (e) => (0, r.wg)({ position: e.position, progress: e.progress });
            var s = i(13365);
            let l = r.gK.model('Chart', { position: r.gK.maybe(r.gK.number), progress: r.gK.maybe(r.gK.enumeration(Object.values(s._))) });
            var n = i(73749);
        },
        63371: (e, t, i) => {
            'use strict';
            i.d(t, { useOnPresaveClick: () => d });
            var r = i(32290),
                a = i(92708),
                s = i(55178),
                l = i(60900),
                n = i(90346),
                o = i(49574),
                u = i(44574);
            let c = (e) => {
                    let { upcomingAlbum: t, closeToast: i } = e;
                    return (0, r.jsx)(u.Pv, { closeToast: i, albumTitle: t.title, coverUri: t.coverUri, entityTitle: t.title, isPresave: t.isPresave });
                },
                d = (e) => {
                    let { user: t } = (0, o.Pjs)(),
                        { notify: i } = (0, o.lkh)(),
                        [d, m] = (0, s.useState)(!1),
                        { formatMessage: b } = (0, l.A)();
                    return (0, s.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.hT, { error: b({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.uQT.ERROR });
                        if (d) return;
                        let s = { ...(0, a.HO)(e), isPresave: !e.isPresave };
                        m(!0);
                        let l = await e.toggleLike();
                        m(!1),
                            l === n.J.OK
                                ? i((0, r.jsx)(c, { upcomingAlbum: s }), { containerId: o.uQT.INFO })
                                : i((0, r.jsx)(u.hT, { error: b({ id: 'error-messages.error-during-action' }) }), { containerId: o.uQT.ERROR });
                    }, [t.isAuthorized, d, e, i, b]);
                };
        },
        73749: (e, t, i) => {
            'use strict';
            i.d(t, { Chart: () => v });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                l = i(55178),
                n = i(60900),
                o = i(59824),
                u = i(13365),
                c = i(82586),
                d = i(71926),
                m = i(47977),
                b = i.n(m);
            let v = (0, s.PA)((e) => {
                let {
                        progress: t,
                        withIcon: i,
                        withCrownIcon: s,
                        position: m,
                        weight: v = 'normal',
                        isDisliked: p,
                        isDisabled: _,
                        className: g,
                        positionClassName: A,
                    } = e,
                    { formatMessage: C } = (0, n.A)(),
                    y = t || i,
                    h = (0, l.useMemo)(() => {
                        if (s) return 'crown';
                        switch (t) {
                            case u._.UP:
                                return 'chartUp';
                            case u._.DOWN:
                                return 'chartDown';
                            case u._.NEW:
                                return 'chartNew';
                            default:
                                return 'chartSame';
                        }
                    }, [t, s]),
                    k = (0, l.useMemo)(() => {
                        switch (t) {
                            case u._.UP:
                                return C({ id: 'entity-names.chart-up' });
                            case u._.DOWN:
                                return C({ id: 'entity-names.chart-down' });
                            case u._.NEW:
                                return C({ id: 'entity-names.chart-new' });
                            default:
                                return C({ id: 'entity-names.chart-same' });
                        }
                    }, [C, t]),
                    x = s ? 'crown' : t;
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(b().root, g),
                    ...(0, o.Am)(o.OA.chart.CHART_PROGRESS),
                    children: [
                        (0, r.jsx)(d.Caption, {
                            variant: 'div',
                            weight: v,
                            type: 'entity',
                            size: 'm',
                            className: (0, a.$)(b().position, A, { [b().position_disliked]: p, [b().position_disabled]: _ }),
                            ...(0, o.Am)(o.OA.chart.CHART_PROGRESS_POSITION),
                            children: m,
                        }),
                        y &&
                            (0, r.jsx)(c.Icon, {
                                variant: h,
                                size: 'xxs',
                                'aria-label': k,
                                className: (0, a.$)(b().progress, b()['progress_'.concat(x)], { [b().progress_disliked]: p, [b().progress_disabled]: _ }),
                                ...(0, o.Am)(o.OA.chart.CHART_PROGRESS_ICON),
                            }),
                    ],
                });
            });
        },
        77435: (e, t, i) => {
            'use strict';
            i.d(t, { AlbumsCarousel: () => c });
            var r = i(32290),
                a = i(55178),
                s = i(16172),
                l = i(49574),
                n = i(44574),
                o = i(10583);
            let u = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: u,
                            title: c,
                            description: d,
                            albums: m,
                            className: b,
                            containerClassName: v,
                            headerClassName: p,
                            viewAllActionLink: _,
                            headingRef: g,
                            headingVariant: A,
                            shouldSendAnalyticsOnLoaded: C,
                            ...y
                        } = e,
                        h = (0, l.fBs)();
                    return (
                        (0, a.useEffect)(() => {
                            C && h();
                        }, [h, C]),
                        (0, r.jsx)(n.OY, {
                            isShimmerVisible: i,
                            isShimmerActive: u,
                            className: b,
                            headerClassName: p,
                            containerClassName: v,
                            ref: t,
                            title: c,
                            description: d,
                            viewAllActionLink: _,
                            headingRef: g,
                            headingVariant: A,
                            ...y,
                            children:
                                null == m
                                    ? void 0
                                    : m.map((e, t) =>
                                          (0, r.jsx)(
                                              l.Bki,
                                              {
                                                  objectType: s.ky.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: m.length,
                                                  children: (0, r.jsx)(o.AlbumCard, {
                                                      album: e,
                                                      contentLinesCount: 3,
                                                      withAddition: !e.isNonMusic,
                                                      withLikesCount: e.isNonMusic,
                                                  }),
                                              },
                                              e.id,
                                          ),
                                      ),
                        })
                    );
                },
                c = (0, a.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
        },
        77712: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => r });
            var r = (function (e) {
                return (e.PAGE = 'PAGE'), (e.CARD = 'CARD'), e;
            })({});
        },
        79238: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => s });
            var r = i(64605),
                a = i(44574);
            let s = (e) => {
                switch (e.type) {
                    case r._.PODCAST:
                        return a.cp.PODCAST;
                    case r._.AUDIOBOOK:
                        return a.cp.AUDIOBOOK;
                    case r._.FAIRY_TALE:
                        return a.cp.FAIRY_TALE;
                    default:
                        return a.cp.ALBUM;
                }
            };
        },
        83861: (e, t, i) => {
            'use strict';
            i.d(t, { useOnLikeClick: () => u });
            var r = i(32290),
                a = i(60900),
                s = i(91027),
                l = i(49574),
                n = i(44574),
                o = i(15688);
            let u = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: u },
                    } = (0, l.Pjs)(),
                    { formatMessage: c } = (0, a.A)(),
                    { notify: d } = (0, l.lkh)(),
                    m = (0, o.f)(),
                    { pageAlbumId: b } = (0, l.THB)();
                return (0, s.c)(async () => {
                    if (e)
                        return u({ pageAlbumId: b, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? m({ album: e })
                              : void d((0, r.jsx)(n.hT, { error: c({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.uQT.ERROR });
                });
            };
        },
        88446: (e, t, i) => {
            'use strict';
            i.d(t, { HorizontalAlbumCard: () => k });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                l = i(55178),
                n = i(16172),
                o = i(59824),
                u = i(71483),
                c = i(91027),
                d = i(6752),
                m = i(58359),
                b = i(71926),
                v = i(9152),
                p = i(33797),
                _ = i(49574),
                g = i(44574),
                A = i(82586),
                C = i(20930),
                y = i.n(C);
            let h = (0, s.PA)((e) => {
                    var t;
                    let { className: i, album: s, likeIconSize: o = 'xxs' } = e,
                        { user: u, trailer: d } = (0, _.Pjs)(),
                        m = (0, _.PT7)(),
                        { sendLikeSearchFeedback: b } = (0, _.zEv)(),
                        p = (0, v.KX)(s),
                        [C, h] = (0, l.useState)(!1),
                        k = (0, c.c)(async () => {
                            C || s.isLiked || (h(!0), null == b || b()), await p();
                        }),
                        x = (0, _.Ftl)(),
                        P = (0, c.c)((e) => {
                            if ((e.stopPropagation(), m())) return void e.preventDefault();
                            d.openAlbumTrailer(s.id), x(n.ky.Album, String(s.id));
                        });
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(y().root, y().controls, i, { [y().controls_disabled]: !s.isAvailable }),
                        children: [
                            s.isAvailable &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(g.aQ, {
                                            fallback: (0, r.jsx)(g.cy, {
                                                size: 'xs',
                                                iconSize: o,
                                                className: (0, a.$)(y().item, y().likeIcon),
                                                isLiked: s.isLiked,
                                                onClick: k,
                                                disabled: !u.isAuthorized,
                                            }),
                                        }),
                                        (null == (t = s.trailer) ? void 0 : t.isAvailable) &&
                                            (0, r.jsx)(g.aQ, {
                                                fallback: (0, r.jsx)(g.kJ, {
                                                    className: (0, a.$)(y().item, y().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: P,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, r.jsx)('div', {
                                className: (0, a.$)(y().item, y().item_buttonArrow),
                                children: (0, r.jsx)(A.Icon, { className: g.$f.buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                k = (0, s.PA)((e) => {
                    let { className: t, album: i, pageId: s, coverClassName: A, playButtonIconSize: C, likeIconSize: y, shouldShowReleaseYear: k, description: x } = e,
                        P = (0, v.r_)(i.type),
                        { ref: f, intersectionPropertyId: N } = (0, _.nMI)(),
                        { from: L } = (0, _.fyy)({ pageId: s }),
                        [I, K] = (0, l.useState)(!1),
                        T = (0, _.brA)(),
                        O = (0, _.ZpR)(i.url),
                        j = (0, _.PT7)(),
                        { sendNavigateSearchFeedback: M, sendPlaySearchFeedback: B } = (0, _.zEv)(),
                        w = (0, _.NKK)(),
                        {
                            paywall: { modal: U },
                        } = (0, _.Pjs)(),
                        R = (0, _.NPu)(),
                        {
                            isPlaying: E,
                            isCurrent: S,
                            togglePlay: z,
                        } = (0, _.Dx4)({ playContextParams: { contextData: { type: u.K.Album, meta: { id: i.id }, from: L }, loadContextMeta: !0 } }),
                        D = (0, v.cp)({ album: i, callback: O }),
                        F = (0, v.cp)({ album: i, callback: z }),
                        $ = (0, c.c)((e) => {
                            null == M || M(), w({ to: n.QT.AlbumScreen }), D(e);
                        }),
                        Q = (0, c.c)(() => {
                            if (!j()) {
                                if (R) return void U.open();
                                I || E || (K(!0), null == B || B()), F(), T(!E);
                            }
                        }),
                        q = (0, c.c)((e) => {
                            (0, m.P)(e, g.$f.ripple), $(e);
                        }),
                        G = (0, c.c)((e) => {
                            e.stopPropagation(), $(e);
                        }),
                        H = (0, l.useCallback)(
                            (e) =>
                                (0, r.jsx)(g.q1, {
                                    isAvailable: i.isAvailable,
                                    isDisliked: !1,
                                    coverUri: i.coverUri,
                                    title: i.title,
                                    className: (0, a.$)(g.$f.playButtonCell, A),
                                    alt: ''.concat(P, ' ').concat(i.title),
                                    radius: 'xs',
                                    ...e,
                                }),
                            [i.coverUri, i.isAvailable, i.title, A, P],
                        ),
                        V = null == H ? void 0 : H({ onPlayButtonClick: Q, isPlaying: E, isCurrent: S, playButtonIconSize: C }),
                        W = (0, l.useMemo)(
                            () =>
                                i.url && i.isAvailable
                                    ? (0, r.jsx)(g.N_, { className: (0, a.$)(g.$f.text, g.$f.titleLink), href: i.url, onClick: G, children: i.title })
                                    : (0, r.jsx)(b.Caption, {
                                          className: (0, a.$)(g.$f.text, g.$f.titleText),
                                          size: 'm',
                                          variant: 'div',
                                          type: 'text',
                                          children: i.title,
                                      }),
                            [i.isAvailable, i.title, i.url, G],
                        ),
                        Y = (0, l.useCallback)(
                            (e, t) => {
                                var a;
                                return (null == (a = i.artists) ? void 0 : a.length)
                                    ? (0, r.jsx)(p.iQ, { linkClassName: e, captionClassName: t, artists: i.artists, lineClamp: 1, withLink: i.isAvailable })
                                    : null;
                            },
                            [i.artists, i.isAvailable],
                        ),
                        J = (0, d.L)(() => [i.artistNames, i.title, i.version].filter(Boolean).join(' '));
                    return (0, r.jsxs)(g.Cj, {
                        ref: f,
                        'data-intersection-property-id': N,
                        className: (0, a.$)(g.$f.root, { [g.$f.root_disabled]: !i.isAvailable }, t),
                        'aria-label': J,
                        onClick: q,
                        ...(0, o.Am)(o.Kq.album.HORIZONTAL_ALBUM_CARD),
                        children: [
                            V,
                            (0, r.jsx)(g.ro, {
                                isDisabled: !i.isAvailable,
                                version: i.version,
                                title: W,
                                artistsComponent: Y,
                                getDescriptionTexts: i.getDescriptionTexts,
                                explicitMarkVariant: i.explicitDisclaimer,
                                likesCount: i.isNonMusic ? i.actualLikesCount : void 0,
                                isLiked: i.isNonMusic ? i.isLiked : void 0,
                                releaseYear: i.isNonMusic && k ? i.year : void 0,
                                description: x,
                            }),
                            (0, r.jsx)(h, { className: g.$f.controlsBar, album: i, likeIconSize: y }),
                        ],
                    });
                });
        },
        89549: (e, t, i) => {
            'use strict';
            i.d(t, { BaseAlbumContextMenu: () => g });
            var r = i(32290),
                a = i(96103),
                s = i(55178),
                l = i(60900),
                n = i(16172),
                o = i(59824),
                u = i(71483),
                c = i(91027),
                d = i(19740),
                m = i(9152),
                b = i(78822),
                v = i(49574),
                p = i(44574),
                _ = i(77712);
            let g = (0, a.PA)((e) => {
                var t, i;
                let { album: a, children: g, onOpenChange: A, open: C, wrapperClassName: y, variant: h, ...k } = e,
                    { shouldShowBuySubscriptionModal: x, showBuySubscriptionModal: P } = (0, v.qBP)(),
                    {
                        settings: { isMobile: f },
                        trailer: N,
                        user: L,
                        experiments: I,
                        albumCPA: { isPlusCPAEnabled: K, isPlusCPAPlayerBarEnabled: T },
                    } = (0, v.Pjs)(),
                    O = (0, m.KX)(a),
                    j = (0, m.A7)(a),
                    M = (0, v.Ftl)(),
                    B = ''.concat(v.UfI.ALBUM, '-').concat(a.id),
                    w = a.isNonMusic && h === _.z.PAGE,
                    U = I.checkExperiment(v.zal.WebEditorsFeatures, 'on'),
                    { formatMessage: R } = (0, l.A)(),
                    E = (0, v.PT7)(),
                    { pageAlbumId: S } = (0, v.THB)(),
                    z = K({ pageAlbumId: S, albumId: a.id, isNonMusic: a.isNonMusic }),
                    D = T(a.id, a.isNonMusic),
                    F = (0, m.Ek)(),
                    { shareLink: $, pathname: Q } = (0, v.bNS)('/album/:albumId', { params: { albumId: a.id } }),
                    q = (0, b.A_)({ entityVariant: v.DwC.ALBUM, urlParams: { id: a.id } }),
                    { isPlaying: G, togglePlay: H } = (0, v.B0S)({
                        seeds: null != (i = null == a ? void 0 : a.seeds) ? i : [],
                        pageIdForFrom: v._Q$.RADIO,
                        blockIdForFrom: B,
                        parentContextId: a.id,
                    }),
                    { utmLink: V } = (0, v.fyy)({ blockId: v.UfI.ALBUM, contextType: u.K.Album, contextId: null == a ? void 0 : a.id }),
                    W = (0, c.c)(() => {
                        if (x && L.isAuthorized) return void P();
                        !E() && (G || H());
                    }),
                    Y = (0, c.c)(() => {
                        if (x && !D) return void P();
                        E() || (N.setUtmLink(V), N.openAlbumTrailer(a.id), M(n.ky.Album, String(a.id)));
                    });
                (0, v.NBO)(C);
                let J = (0, s.useMemo)(() => {
                        if (!f) return (0, r.jsx)(p.L1, { onClick: j, isPinned: a.isPinned, disabled: !a.isAvailable });
                    }, [a.isAvailable, a.isPinned, j, f]),
                    Z = (0, s.useMemo)(() => {
                        let e = !z && !L.isAuthorized;
                        return a.isNonMusic
                            ? (0, r.jsx)(p.Uc, { onClick: O, isLiked: a.isLiked, albumType: a.type })
                            : (0, r.jsx)(p.TW, { onClick: O, isLiked: a.isLiked, disabled: e });
                    }, [a.isLiked, a.type, O, a.isNonMusic, L.isAuthorized, z]),
                    X = (0, s.useMemo)(() => {
                        var e;
                        if (!a.isNonMusic && (null == (e = a.trailer) ? void 0 : e.isAvailable)) return (0, r.jsx)(p.No, { onClick: Y, disabled: !a.isAvailable });
                    }, [a.isAvailable, null == (t = a.trailer) ? void 0 : t.isAvailable, a.isNonMusic, Y]),
                    ee = (0, s.useMemo)(() => {
                        if (!a.isNonMusic) return (0, r.jsx)(p.C6, { onClick: W, disabled: !a.isAvailable || (D && f), variant: v.IGO.ALBUM, onOpenMenuChange: A });
                    }, [a.isAvailable, W, a.isNonMusic, A, D, f]),
                    et = { variant: v.Yxq.ALBUM, id: a.id, title: a.title, path: Q, albumArtistName: a.artistName, albumArtistId: a.artistId };
                return (0, r.jsxs)(d.W1, {
                    isMobile: f,
                    offsetOptions: 10,
                    open: C,
                    onOpenChange: A,
                    ariaLabel: R({ id: 'interface-actions.context-menu' }),
                    wrapperClassName: y,
                    containerProps: (0, o.Am)(o.Kq.album.ALBUM_CONTEXT_MENU),
                    ...k,
                    children: [
                        f && (0, r.jsx)(p.Cu, { getDescriptionTexts: a.getDescriptionTexts, entityId: a.id }),
                        U && (0, r.jsx)(b.dx, { entityVariant: v.DwC.ARTIST, adminUrl: q }),
                        J,
                        Z,
                        X,
                        ee,
                        g,
                        w && (0, r.jsx)(p.iF, { onClick: F, isFinished: a.listeningFinished }),
                        (0, r.jsx)(p.Ht, { shareLink: $, entityMeta: et }),
                    ],
                });
            });
        },
        89638: (e) => {
            e.exports = {
                root: 'AlbumCard_root__vP6k4',
                root_withChart: 'AlbumCard_root_withChart__J2SZv',
                artists: 'AlbumCard_artists__phKco',
                likeTextButton: 'AlbumCard_likeTextButton__2AQd9',
                controls: 'AlbumCard_controls__yuO40',
                cover: 'AlbumCard_cover__zXmdl',
                coverBlock: 'AlbumCard_coverBlock__94ZzY',
                image: 'AlbumCard_image__Mm55s',
                titleLink: 'AlbumCard_titleLink__u_WLG',
                title: 'AlbumCard_title__8YvhT',
                title_withVersion: 'AlbumCard_title_withVersion__NClAp',
                title_withChart: 'AlbumCard_title_withChart__PVOiJ',
                chart: 'AlbumCard_chart__gASdj',
                version: 'AlbumCard_version__h2aJz',
                artistLink: 'AlbumCard_artistLink__uPR_2',
                playButton: 'AlbumCard_playButton__mYK9R',
                likeButton: 'AlbumCard_likeButton__9B9C0',
                menuButton: 'AlbumCard_menuButton__pxkA6',
                pinButton: 'AlbumCard_pinButton__Mdi_E',
                trailerButton: 'AlbumCard_trailerButton__typHh',
                control: 'AlbumCard_control__qx7Xh',
                plusBadge: 'AlbumCard_plusBadge__i0FkP',
                buyPlusPopover: 'AlbumCard_buyPlusPopover__Kb79C',
            };
        },
        90346: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { J: () => r }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(r || (r = {}));
        },
        91253: (e, t, i) => {
            'use strict';
            i.d(t, { useOnPinClick: () => m });
            var r = i(32290),
                a = i(92708),
                s = i(55178),
                l = i(60900),
                n = i(49574),
                o = i(44574),
                u = i(96103),
                c = i(79238);
            let d = (0, u.PA)((e) => {
                    let { album: t, closeToast: i } = e,
                        a = (0, c.b)(t);
                    return (0, r.jsx)(o.k4, {
                        closeToast: i,
                        entityVariant: a,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                }),
                m = (e) => {
                    let { user: t } = (0, n.Pjs)(),
                        { notify: i } = (0, n.lkh)(),
                        { formatMessage: u } = (0, l.A)(),
                        [c, m] = (0, s.useState)(!1);
                    return (0, s.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(o.hT, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.uQT.ERROR });
                        if (c) return;
                        let s = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                        m(!0);
                        let l = await e.togglePin();
                        m(!1),
                            l
                                ? i((0, r.jsx)(d, { album: s }), { containerId: n.uQT.INFO })
                                : i((0, r.jsx)(o.hT, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: n.uQT.ERROR });
                    }, [e, u, i, c, t.isAuthorized]);
                };
        },
    },
]);
