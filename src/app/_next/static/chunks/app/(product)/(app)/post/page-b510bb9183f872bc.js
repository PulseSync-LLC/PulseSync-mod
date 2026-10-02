(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3069, 4245],
    {
        1134: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var r = i(25839),
                s = i(33660),
                n = i(74631),
                a = i(39004),
                l = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(27892);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, a.A)(),
                    [_, p] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let n = { ...(0, s.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let a = await e.togglePin();
                    (p(!1),
                        a
                            ? i((0, r.jsx)(u.l, { playlist: n }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [t.isAuthorized, _, e, i, m]);
            };
        },
        1797: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => s });
            var r = i(40207);
            let s = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: s } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === s ? void 0 : { shouldHistoryBack: s }, preventDefaultWhenSafe: !0 });
            };
        },
        7361: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var r = i(25839),
                s = i(33660),
                n = i(74631),
                a = i(39004),
                l = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                m = i(63149);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, p] = (0, n.useState)(!1),
                    { formatMessage: g } = (0, a.A)();
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let n = { ...(0, s.HO)(e), isLiked: !e.isLiked };
                    p(!0);
                    let a = await e.toggleLike();
                    (p(!1),
                        a === l.f.OK
                            ? i((0, r.jsx)(m.T, { artist: n }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(u.h, { error: g({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, _, g, i]);
            };
        },
        8558: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 97852));
        },
        10024: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => n });
            var r = i(28410),
                s = i(31851);
            let n = (e) => {
                let t = (0, s.n)(e);
                return (0, r.wg)(t);
            };
        },
        11871: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { L: () => r }),
                (function (e) {
                    ((e.PUBLIC = 'public'), (e.PRIVATE = 'private'));
                })(r || (r = {})));
        },
        13936: (e) => {
            e.exports = {
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
                root: 'ArtistCard_root__x67BK',
                srTitleLink: 'ArtistCard_srTitleLink__jzfOW',
                coverBlock: 'ArtistCard_coverBlock__dBL4x',
                image: 'ArtistCard_image__pONJx',
                titleLink: 'ArtistCard_titleLink__G8Puz',
                playButton: 'ArtistCard_playButton__XZoTr',
                likeButton: 'ArtistCard_likeButton__LU9TL',
                menuButton: 'ArtistCard_menuButton__EynXG',
                pinButton: 'ArtistCard_pinButton__G_VOi',
                trailerButton: 'ArtistCard_trailerButton__a2NHm',
                control: 'ArtistCard_control___qv5j',
            };
        },
        15787: (e) => {
            e.exports = {
                root: 'PlaylistCard_root__i3pR4',
                srTitleLink: 'PlaylistCard_srTitleLink__Gg2Dy',
                controls: 'PlaylistCard_controls__Ej8Rz',
                cover: 'PlaylistCard_cover__tpK5L',
                coverBlock: 'PlaylistCard_coverBlock__1slsN',
                image: 'PlaylistCard_image__Li6oy',
                titleLink: 'PlaylistCard_titleLink__H8qEc',
                artists: 'PlaylistCard_artists__HtVIF',
                artistLink: 'PlaylistCard_artistLink__jx3KB',
                playButton: 'PlaylistCard_playButton__eaduk',
                likeButton: 'PlaylistCard_likeButton__RYXJz',
                menuButton: 'PlaylistCard_menuButton__jFcWr',
                pinButton: 'PlaylistCard_pinButton__jhWnL',
                trailerButton: 'PlaylistCard_trailerButton__Qjg_U',
                control: 'PlaylistCard_control__73YUq',
            };
        },
        21971: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Q });
            var r = i(25839),
                s = i(88204),
                n = i(39004),
                a = i(36619),
                l = i(61493),
                o = i(22939),
                c = i(71035),
                d = i(66738),
                u = i(10820),
                m = i(33660),
                _ = i(74631),
                p = i(31860),
                g = i(91149),
                y = i(92942),
                v = i(27954),
                h = i(57549),
                T = i(86869),
                A = i(69084),
                E = i(4254),
                I = i(51790),
                b = i(6323),
                C = i(24596),
                P = i.n(C);
            let O = (e) => {
                let { coverUri: t, title: i, isDisliked: s, closeToast: a } = e,
                    { formatMessage: l } = (0, n.A)(),
                    o = l(s ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(I.$, {
                    closeToast: a,
                    message: (0, r.jsxs)('div', {
                        className: P().message,
                        children: [
                            (0, r.jsx)(A.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, r.jsx)(T.t, {
                                className: P().cover,
                                radius: 'round',
                                children: (0, r.jsx)(b.B, { className: P().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(E.HL, { className: P().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var x = i(7361),
                f = i(90613),
                k = i(3210),
                L = i(11609),
                N = i(79367),
                S = i(40110),
                j = i(20258),
                R = i(34159),
                K = i(30290),
                D = i(29872),
                w = i(56120),
                B = i(87201),
                M = i(83014),
                U = i(44806),
                F = i(55491),
                z = i(44851),
                G = i(14240),
                W = i(56615),
                V = i(16386),
                H = i(67303),
                X = i(74682),
                Y = i(59043),
                $ = i(2144),
                q = i(6304);
            let Q = (0, s.PA)((e) => {
                var t, i, s;
                let { artist: T, onOpenChange: A, open: E, ...I } = e,
                    { shouldShowBuySubscriptionModal: b, showBuySubscriptionModal: C } = (0, D.q)(),
                    {
                        settings: { isMobile: P },
                        modals: { artistAboutModal: Q },
                        trailer: Z,
                        user: J,
                        experiments: ee,
                    } = (0, v.g)(),
                    et = (0, f.A)(T),
                    ei = (0, x.K)(T),
                    er = ((e) => {
                        let { user: t } = (0, v.g)(),
                            { notify: i } = (0, y.l)(),
                            [s, a] = (0, _.useState)(!1),
                            { formatMessage: l } = (0, n.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(h.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: g.u.ERROR });
                            if (s) return;
                            let n = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            a(!0);
                            let o = await e.toggleDislike();
                            (a(!1),
                                o === p.f.OK
                                    ? i((0, r.jsx)(O, { coverUri: n.coverUri, title: n.name, isDisliked: n.isDisliked }), { containerId: g.u.INFO })
                                    : i((0, r.jsx)(h.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: g.u.ERROR }));
                        });
                    })(T),
                    es = (0, R.F)(),
                    en = ''.concat(S.U.ARTIST, '-').concat(null == T ? void 0 : T.id),
                    { formatMessage: ea } = (0, n.A)(),
                    { utmLink: el } = (0, K.f)({ blockId: S.U.ARTIST, contextType: o.K.Artist, contextId: null == T ? void 0 : T.id }),
                    { shareLink: eo, pathname: ec } = (0, G.b)('/artist/:artistId', { params: { artistId: null != (i = null == T ? void 0 : T.id) ? i : '' } }),
                    ed = (0, k.A)({ entityVariant: M.D.ARTIST, urlParams: { id: null == T ? void 0 : T.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, B.B)({
                        seeds: null != (s = null == T ? void 0 : T.seeds) ? s : [],
                        pageIdForFrom: j._Q.RADIO,
                        blockIdForFrom: en,
                        parentContextId: null == T ? void 0 : T.id,
                    }),
                    e_ = (0, N.P)(),
                    ep = ea((null == T ? void 0 : T.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    eg = (0, c.c)(() => {
                        if (b && J.isAuthorized) return void C();
                        eu || em();
                    }),
                    ey = (0, c.c)(() => {
                        if (!e_()) {
                            if (b) return void C();
                            (null == T ? void 0 : T.id) && (Z.setUtmLink(el), Z.openArtistTrailer(T.id), es(a.DomainObjectType.Artist, T.id));
                        }
                    }),
                    ev = (0, c.c)(() => {
                        Q.open(null == T ? void 0 : T.id);
                    });
                (0, w.N)(E);
                let eh = { variant: F.Y.ARTIST, id: null == T ? void 0 : T.id, title: null == T ? void 0 : T.name, path: ec },
                    eT = ee.checkExperiment(U.z.WebEditorsFeatures, 'on'),
                    eA = null == T || null == (t = T.trailer) ? void 0 : t.isAvailable,
                    eE = ee.checkExperiment(U.z.WebNextArtistInfo, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: P,
                    offsetOptions: 10,
                    open: E,
                    onOpenChange: A,
                    ariaLabel: ea({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...I,
                    children: [
                        eT && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(L.d, { entityVariant: M.D.ARTIST, adminUrl: ed }) }),
                        !P && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(H.L, { onClick: et, isPinned: null == T ? void 0 : T.isPinned }) }),
                        (0, r.jsx)(q.WithOffline, {
                            fallback: (0, r.jsx)(V.T, {
                                onClick: ei,
                                isLiked: null == T ? void 0 : T.isLiked,
                                disabled: !J.isAuthorized || !(null == T ? void 0 : T.isAvailable),
                            }),
                        }),
                        eA && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(Y.N, { onClick: ey }) }),
                        (0, r.jsx)(q.WithOffline, {
                            fallback: (0, r.jsx)($.C, { onClick: eg, disabled: !(null == T ? void 0 : T.isAvailable), variant: z.I.ARTIST, onOpenMenuChange: A }),
                        }),
                        (0, r.jsx)(X.H, { disabled: !T, shareLink: eo, entityMeta: eh }),
                        eE &&
                            (0, r.jsx)(q.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: ev,
                                    icon: (0, r.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ep,
                                }),
                            }),
                        (0, r.jsx)(q.WithOffline, {
                            fallback: (0, r.jsx)(W.D, { onClick: er, isDisliked: null == T ? void 0 : T.isDisliked, disabled: !(null == T ? void 0 : T.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        22413: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => n, TF: () => l, hZ: () => a });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, r = arguments.length; i < r; i++)
                            for (var s in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                        return e;
                    }).apply(this, arguments);
            };
            function s(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function n(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], r = 0; r < i.length; r++) {
                        var s = i[r].split('='),
                            n = s.slice(1).join('=');
                        '"' === n[0] && (n = n.slice(1, -1));
                        try {
                            t[decodeURIComponent(s[0])] = n.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function a(e, t, i) {
                var n;
                document.cookie =
                    ((n = r({ path: '/' }, i)),
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
                                s('Expires', e.expires ? e.expires.toUTCString() : '') +
                                s('Domain', e.domain) +
                                s('Path', e.path) +
                                s('Secure', e.secure) +
                                s('SameSite', e.sameSite)
                            );
                        })(n));
            }
            function l(e, t) {
                a(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        24596: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        27393: (e) => {
            e.exports = { root: 'PostAlbums_root__u2a1q', content: 'PostAlbums_content__uMSez' };
        },
        27892: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => a });
            var r = i(25839),
                s = i(35015),
                n = i(10546);
            let a = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(n.k, {
                    closeToast: i,
                    entityVariant: s.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        28915: (e) => {
            e.exports = { root: 'PostPlaylists_root__3tea0', content: 'PostPlaylists_content__2fXI5' };
        },
        33957: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            var r = i(28410),
                s = i(23951),
                n = i(10024);
            let a = (e) => {
                var t, i, a, l, o;
                e = e || {};
                let c = (0, n.m)(e.trailer);
                return (0, r.wg)({
                    isAvailable: null == (l = e.available) || l,
                    uid: e.uid,
                    uuid: null != (o = e.playlistUuid) ? o : '',
                    kind: e.kind,
                    title: e.title,
                    coverUri: (null == e || null == (t = e.cover) ? void 0 : t.uri) || (null == e || null == (a = e.cover) || null == (i = a.itemsUri) ? void 0 : i[0]),
                    tracksCount: e.trackCount,
                    likesCount: e.likesCount,
                    averageColor: (0, s.Q)(null == e ? void 0 : e.derivedColors),
                    revision: e.revision,
                    generatedPlaylistType: e.generatedPlaylistType,
                    personalColor: e.personalColor,
                    visibility: e.visibility,
                    trailer: c,
                });
            };
        },
        41459: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => n });
            var r = i(74631),
                s = i(39004);
            let n = (e) => {
                let { formatMessage: t } = (0, s.A)();
                return (0, r.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let r = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(r, ' ').concat(i);
                }, [t, e]);
            };
        },
        41707: (e, t, i) => {
            'use strict';

            var pulseSyncPlaylistDownloadIcons = i(66738);
            i.d(t, { B: () => J });
            var pulseSyncMenuJsx = i(25839),
                pulseSyncMenuItems = i(10820),
                pulseSyncMenuIcons = i(66738);
            var r = i(25839),
                s = i(82298),
                n = i(88204),
                a = i(74631),
                l = i(39004),
                o = i(36619),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                m = i(49656),
                _ = i(51246),
                p = i(66738),
                g = i(86869),
                y = i(4254),
                v = i(4331),
                h = i(62948),
                T = i(1134),
                A = i(79367),
                E = i(29481),
                I = i(47009),
                b = i(34159),
                C = i(52512),
                P = i(30290),
                O = i(61561),
                x = i(85686),
                f = i(85743),
                k = i(50209),
                L = i(27954),
                N = i(74760),
                S = i(6323),
                j = i(64720),
                R = i(97522),
                K = i(41580),
                D = i(49438),
                w = i(71996),
                B = i(78437),
                M = i(41459),
                U = i(10820),
                F = i(3210),
                z = i(11609),
                G = i(29872),
                W = i(56120),
                V = i(83014),
                H = i(44806),
                X = i(16386),
                Y = i(67303),
                $ = i(59043);
            let q = (0, n.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: s, open: n, ...a } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: m } = (0, G.q)(),
                    {
                        experiments: _,
                        settings: { isMobile: p },
                        trailer: g,
                        user: y,
                    } = (0, L.g)(),
                    v = (0, h.K)(i),
                    E = (0, T.A)(i),
                    I = (0, b.F)(),
                    { formatMessage: C } = (0, l.A)(),
                    P = (0, A.P)(),
                    O = _.checkExperiment(H.z.WebEditorsFeatures, 'on'),
                    x = (0, F.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, W.N)(n);
                let f = (0, u.c)(() => {
                    if (d) return void m();
                    P() || (g.openPlaylistTrailer(i.id), I(o.DomainObjectType.Playlist, i.id));
                });
                let pulseSyncInjectPlaylistMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                        eventDetail: {
                            id: String(i.kind ?? i.id),
                            uuid: String(i.uuid ?? ''),
                            url: String(i.url ?? ''),
                            ...(i.title
                                ? {
                                      title: String(i.title),
                                  }
                                : {}),
                        },
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
                                        (activate(), s?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                return (0, r.jsxs)(U.W1, {
                    title: i.title,
                    onOpenChange: s,
                    open: n,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: C({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...a,
                    children: pulseSyncInjectPlaylistMenuItems([
                        O && (0, r.jsx)(z.d, { entityVariant: V.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : x }),
                        !p && (0, r.jsx)(Y.L, { onClick: E, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(X.T, { onClick: v, isLiked: i.isLiked, disabled: !y.isAuthorized }),
                        (i.tracksCount ?? 1) > 0 &&
                            (0, r.jsx)(U.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, r.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)($.N, { onClick: f, disabled: !i.isAvailable }),
                    ]),
                });
            });
            var Q = i(15787),
                Z = i.n(Q);
            let J = (0, n.PA)((e) => {
                let { className: t, playlist: i, children: n, contentLinesCount: U, customDescription: F, onCoverMouseDown: z } = e,
                    { ref: G, intersectionPropertyId: W } = (0, C.n)(),
                    {
                        trailer: V,
                        user: H,
                        paywall: { modal: X },
                    } = (0, L.g)(),
                    { from: Y, utmLink: $ } = (0, P.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: Q } = (0, l.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, f.z)(),
                    [ei, er] = (0, a.useState)(!1),
                    [es, en] = (0, a.useState)(!1),
                    [ea, el] = (0, a.useState)(!1),
                    eo = (0, M.r)(i),
                    ec = (0, h.K)(i),
                    ed = (0, T.A)(i),
                    eu = (0, E.N)(),
                    em = (0, I.b)(),
                    e_ = (0, x.Z)(i.url),
                    ep = (0, b.F)(),
                    eg = (0, A.P)(),
                    ey = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eg())) return void e.preventDefault();
                        (V.setUtmLink($), V.openPlaylistTrailer(i.id), ep(o.DomainObjectType.Playlist, i.id));
                    }),
                    [ev, eh] = (0, a.useState)(!1),
                    { isPlaying: eT, togglePlay: eA } = (0, k.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: Y, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    eE = (0, u.c)(() => {
                        (eu({ to: o.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eI = (0, u.c)((e) => {
                        (eE(), e_(e));
                    }),
                    eb = (0, O.N)(),
                    eC = (0, u.c)(() => {
                        if (!eg()) {
                            if (eb) return void X.open();
                            (ei || eT || (er(!0), null == et || et()), eA(), em(!eT));
                        }
                    }),
                    eP = (0, u.c)(() => {
                        (es || i.isLiked || (en(!0), null == J || J()), ec());
                    }),
                    eO = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    ex = (0, u.c)((e) => {
                        (el(e), eh(e));
                    }),
                    ef = (0, a.useMemo)(() => {
                        var e;
                        return F
                            ? (0, r.jsx)(y.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: F }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    v.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [F, i]),
                    ek = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                j.c,
                                {
                                    className: (0, s.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: eP,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !H.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eL = (0, a.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                B.n,
                                {
                                    children: (0, r.jsx)(
                                        w.k,
                                        { className: (0, s.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ey },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ey, i]),
                    eN = (0, a.useMemo)(
                        () =>
                            (0, r.jsx)(
                                K.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, s.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eS = (0, a.useMemo)(
                        () =>
                            (0, r.jsx)(g.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eI,
                                    onMouseDown: z,
                                    children: [
                                        (0, r.jsx)(S.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(_.hg, {
                                            isVisible: ea || ev,
                                            className: Z().controls,
                                            playControl: (0, r.jsx)(
                                                D.D,
                                                {
                                                    className: (0, s.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eC,
                                                    isPlaying: eT,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: ek,
                                            menuControl: (0, r.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: ex,
                                                    open: ea,
                                                    onClick: eO,
                                                    className: (0, s.$)(Z().menuButton, Z().control),
                                                    icon: (0, r.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eN,
                                            trailerControl: eL,
                                        }),
                                    ],
                                }),
                            }),
                        [eI, z, i, eo, ea, ev, eC, eT, ek, ex, eO, eN, eL],
                    ),
                    ej = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(_.MN, {
                    ref: G,
                    'aria-label': eo,
                    className: (0, s.$)(Z().root, t),
                    title: (0, r.jsx)(y.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(R.N, { className: Z().titleLink, href: i.url, tabIndex: -1, onClick: eE, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(R.N, { className: Z().srTitleLink, href: i.url, onClick: eE, children: i.title }),
                    'data-intersection-property-id': W,
                    contentLinesCount: U,
                    view: eS,
                    description: ef,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        ej &&
                            (0, r.jsx)(N.x, {
                                ariaLabel: Q({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        n,
                    ],
                });
            });
        },
        42190: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var r = i(25839),
                s = i(35015),
                n = i(3163);
            let a = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(n.O, {
                    entityVariant: s.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        42546: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => n });
            var r = i(28410),
                s = i(69088);
            let n = i(45809).Z.props({ artists: r.gK.maybe(r.gK.array(s.P)) });
        },
        43357: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => s });
            var r = i(98436);
            let s = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(r._.PLAYLIST_ITEM).concat(t, '_').concat(i);
            };
        },
        45809: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => n });
            var r = i(28410);
            let s = r.gK.model('TrackIdModel', { id: r.gK.union(r.gK.string, r.gK.number), albumId: r.gK.maybe(r.gK.number), timestamp: r.gK.maybe(r.gK.string) }),
                n = i(53469)
                    .$.props({ tracks: r.gK.maybe(r.gK.array(s)) })
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
        },
        53469: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => v });
            var r = i(28410),
                s = i(93690),
                n = i(11871),
                a = i(31860),
                l = i(51751),
                o = i(31488),
                c = i(25895),
                d = i(86656),
                u = i(98181),
                m = i(86064),
                _ = i(99725),
                p = i(65596),
                g = i(43357),
                y = i(82401);
            let v = r.gK
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
                    u.t,
                )
                .views((e) => ({
                    get key() {
                        return ''.concat(e.uuid, '_').concat(e.uid, '_').concat(e.kind);
                    },
                    get url() {
                        let { href: t } = (0, c.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.uuid } });
                        return t;
                    },
                    get isLikesCountHidden() {
                        return e.kind === y.j.LIKE || e.kind === y.j.CHART || e.generatedPlaylistType;
                    },
                    get isFavouritePlaylist() {
                        return e.kind === y.j.LIKE;
                    },
                    get isPublic() {
                        return e.visibility === n.L.PUBLIC;
                    },
                    get isLiked() {
                        if (!(0, r._n)(e)) return !1;
                        let { library: t } = (0, l.M)(e);
                        return t.isPlaylistLiked((0, p.m)(e));
                    },
                    get pinId() {
                        return (0, g.f)(e);
                    },
                    get id() {
                        return (0, p.m)(e);
                    },
                    get isPinned() {
                        if (!(0, r._n)(e)) return !1;
                        let { pinsCollection: t } = (0, l.M)(e);
                        return t.isPinned(this.pinId);
                    },
                    get isOwnPlaylist() {
                        let { user: t } = (0, l.M)(e);
                        return !!(t.isAuthorized && e.uid && t.account.data.uid && e.uid === t.account.data.uid);
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
                        let { library: t, user: i } = (0, l.M)(e);
                        if (i.isAuthorized) {
                            let s = yield t.togglePlaylistLike({ userId: i.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                            return ((0, r._n)(e) && s === a.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), s);
                        }
                    }),
                    togglePin: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { pinsCollection: t, user: i } = (0, l.M)(e);
                        if (i.isAuthorized) return yield t.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                    }),
                    changePlaylist: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e)) return m.Y.ERROR;
                        let { usersResource: i, modelActionsLogger: n } = (0, r._$)(e);
                        try {
                            var a, l;
                            let r = yield i.changePlaylistRelative({ userId: e.uid, diff: t, revision: null != (a = e.revision) ? a : 0, playlistKind: e.kind });
                            Number.isSafeInteger(r.trackCount) && r.trackCount >= 0 && (e.tracksCount = r.trackCount);
                            return ((e.revision = r.revision), (e.isAvailable = null == (l = r.available) || l), m.Y.OK);
                        } catch (e) {
                            if ((n.error(e), e && 'object' == typeof e && 'statusCode' in e && e.statusCode === s.X1.PRECONDITION_FAILED)) return m.Y.RELOAD;
                            return m.Y.ERROR;
                        }
                    }),
                    changeTitle: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e)) return o.F.ERROR;
                        if (e.title === t) return o.F.OK;
                        let { usersResource: i, modelActionsLogger: s } = (0, r._$)(e);
                        if (e.canUserChange) {
                            if (t.length < 1 || t.length > _.k) return o.F.ERROR;
                            let r = e.title;
                            e.title = t;
                            try {
                                let s = yield i.changePlaylistTitle({ title: t, userId: e.uid, playlistKind: e.kind });
                                if (!(null == s ? void 0 : s.title)) return ((e.title = r), o.F.ERROR);
                                return ((e.title = s.title), o.F.OK);
                            } catch (t) {
                                ((e.title = r), s.error(t));
                            }
                        }
                        return o.F.ERROR;
                    }),
                    deletePlaylist: (0, r.L3)(function* () {
                        if (!(0, r._n)(e) || !e.canUserChange) return o.F.ERROR;
                        let { pinsCollection: t } = (0, l.M)(e),
                            { usersResource: i, modelActionsLogger: s } = (0, r._$)(e);
                        try {
                            return (yield i.deletePlaylist({ userId: e.uid, playlistKind: e.kind }), t.isPinned(e.pinId) && t.deletePin(e.pinId), o.F.OK);
                        } catch (e) {
                            s.error(e);
                        }
                        return o.F.ERROR;
                    }),
                    toggleVisibility: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e) || (!e.canUserChange && !e.isOwnFavouritePlaylist)) return o.F.ERROR;
                        let { usersResource: i, modelActionsLogger: s } = (0, r._$)(e),
                            { user: a } = (0, l.M)(e),
                            c = e.visibility,
                            d = e.isPublic ? n.L.PRIVATE : n.L.PUBLIC;
                        t && (d = t);
                        try {
                            return (
                                (e.visibility = d),
                                e.isOwnFavouritePlaylist
                                    ? yield a.setSettings({ userMusicVisibility: d })
                                    : yield i.togglePlaylistVisibility({ visibility: d, userId: e.uid, playlistKind: e.kind }),
                                o.F.OK
                            );
                        } catch (e) {
                            s.error(e);
                        }
                        return ((e.visibility = c), o.F.ERROR);
                    }),
                    downloadToFile: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { usersResource: i, modelActionsLogger: t } = (0, r._$)(e);
                        try {
                            let { tracks: r = [] } = yield i.getPlaylistWithTracksIds({
                                    userId: String(e.uid),
                                    playlistKind: e.kind,
                                    resumeStream: !1,
                                }),
                                n = r.map((e) => (null == e?.id ? null : e.albumId ? ''.concat(e.id, ':').concat(e.albumId) : String(e.id))).filter(Boolean);
                            n.length && window.desktopEvents?.send?.('DOWNLOAD_TRACKS', n, 'playlist', e.title || '');
                        } catch (e) {
                            t.error(e);
                        }
                    }),
                    getKey: (t) => ''.concat(t, '_').concat(e.id),
                }));
        },
        53712: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => s });
            var r = i(25895);
            let s = {
                main: (0, r.u)('/'),
                chart: (0, r.u)('/chart'),
                chartPodcasts: (0, r.u)('/chart/podcasts'),
                collection: (0, r.u)('/collection'),
                collectionAlbums: (0, r.u)('/collection/albums'),
                collectionArtists: (0, r.u)('/collection/artists'),
                collectionClips: (0, r.u)('/collection/clips'),
                collectionDislikes: (0, r.u)('/collection/dislikes'),
                collectionKids: (0, r.u)('/collection/kids'),
                collectionKidsAlbums: (0, r.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, r.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, r.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, r.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, r.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, r.u)('/collection/multivibes'),
                collectionPlaylists: (0, r.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, r.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, r.u)('/collection/playlists/liked'),
                collectionShelf: (0, r.u)('/collection/shelf'),
                collectionShelfLiked: (0, r.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, r.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, r.u)('/collection/shelf/recently-played'),
                concerts: (0, r.u)('/concerts'),
                kids: (0, r.u)('/kids'),
                mixes: (0, r.u)('/mixes'),
                musicHistory: (0, r.u)('/music-history'),
                muzmarket: (0, r.u)('/muzmarket'),
                mymusic: (0, r.u)('/mymusic'),
                mymusicDownloadsTracks: (0, r.u)('/mymusic/downloads/tracks'),
                multivibe: (0, r.u)('/multivibe'),
                nonMusic: (0, r.u)('/non-music'),
                pay: (0, r.u)('/pay'),
                userSlides: (0, r.u)('/slides/user'),
                search: (0, r.u)('/search'),
                searchHistory: (0, r.u)('/search/history'),
                settings: (0, r.u)('/settings'),
                video: (0, r.u)('/video'),
            };
        },
        55180: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => l });
            var r = i(28410),
                s = i(66730),
                n = i(69088),
                a = i(69432);
            let l = s.G.props({ artists: r.gK.maybe(r.gK.array(n.P)), chart: r.gK.maybe(a.I) }).views((e) => ({
                get artistNames() {
                    var t;
                    return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                },
                get artistName() {
                    var i, r, s, n;
                    if (null == (r = e.artists) || null == (i = r[0]) ? void 0 : i.various) return;
                    return null == (n = e.artists) || null == (s = n[0]) ? void 0 : s.name;
                },
                get artistIds() {
                    var a;
                    return null == (a = e.artists) ? void 0 : a.map((e) => e.id);
                },
                get artistId() {
                    var l, o;
                    return null == (o = e.artists) || null == (l = o[0]) ? void 0 : l.id;
                },
            }));
        },
        56615: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var r = i(25839),
                s = i(88204),
                n = i(8487),
                a = i(61493),
                l = i(66738),
                o = i(10820),
                c = i(27954);
            let d = (0, s.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: s, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, r.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, r.jsx)(l.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: s || !u.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, r.jsx)(n.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        59126: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => r });
            class r extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: s = {}, ...n } = t,
                        a = e || 'Internal error';
                    (super(a, n), (this.message = a), (this.code = i), (this.data = s), (this.stack = Error(a).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        60407: (e) => {
            e.exports = { root: 'PostArtists_root__Zxmjq', content: 'PostArtists_content__JzGOH' };
        },
        62948: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var r = i(25839),
                s = i(33660),
                n = i(74631),
                a = i(39004),
                l = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                m = i(42190);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, p] = (0, n.useState)(!1),
                    { formatMessage: g } = (0, a.A)();
                return (0, n.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let n = { ...(0, s.HO)(e), url: e.url, isLiked: !e.isLiked };
                    p(!0);
                    let a = await e.toggleLike();
                    (p(!1),
                        a === l.f.OK
                            ? i((0, r.jsx)(m.T, { playlist: n }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(u.h, { error: g({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, _, e, g, i]);
            };
        },
        63149: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var r = i(25839),
                s = i(53712),
                n = i(35015),
                a = i(3163);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(a.O, {
                    closeToast: i,
                    entityVariant: n.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: s.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        65078: (e) => {
            e.exports = { root: 'PostShimmer_root__MlLkY' };
        },
        65596: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(t, ':').concat(i);
            };
        },
        68854: (e) => {
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
        73544: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            let r = (e) => ({ uri: e.uri, color: e.color });
        },
        74245: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => m, Yw: () => r, JU: () => s, DQ: () => g, Ve: () => y });
            var r,
                s,
                n = i(30691),
                a = (function () {
                    function e(e) {
                        ((this.observableValue = (0, n.vP)(e)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var i = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var r = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (s) {
                                    if (s !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && r) {
                                            r = !1;
                                            return;
                                        }
                                        (i.prevValueByListener.set(e, s), e(s));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, n.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var i = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var r = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (s) {
                                if (s !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && r) {
                                        r = !1;
                                        return;
                                    }
                                    (i.prevValueByListener.set(e, s), e(s));
                                }
                            })
                        );
                    }));
            })();
            var l = i(59126);
            class o extends l.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, o.prototype));
                }
            }
            class c extends l.t {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    (super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            !(function (e) {
                ((e.MODAL = 'modal'),
                    (e.FOREIGN_AGENT = 'foreignAgent'),
                    (e.INFORMATIONAL = 'informational'),
                    (e.AGE_18 = 'age18'),
                    (e.EXPLICIT = 'explicit'),
                    (e.DESCRIPTION_TEXT = 'descriptionText'),
                    (e.AGE_12_ICON = 'age12Icon'),
                    (e.AGE_16_ICON = 'age16Icon'),
                    (e.AGE_18_ICON = 'age18Icon'),
                    (e.EXPLICIT_ICON = 'explicitIcon'),
                    ((e.EXCLAMATION_ICON = 'exclamationIcon'), (e.SUBSTITUTED_ICON = 'substitutedIcon')));
            })(r || (r = {}));
            let d = (e) => {
                    let t = [];
                    for (let i of e) {
                        let [e, r] = i.split(':');
                        e && r && t.push({ type: e, id: r });
                    }
                    return t;
                },
                u = (e, t) => d(e).filter((e) => e.type === t);
            class m {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    ((this.dataSource = e.dataSource),
                        (this.itemsObservable = new a(null)),
                        (this.isLoadingObservable = new a(!1)),
                        (this.errorObservable = new a(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable));
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    ((this.isLoadingObservable.value = !0), (this.errorObservable.value = null));
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new o(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    ((this.loadingPromise = e), await e);
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new c(e, !0);
                }
                async resolveByType(e, t) {
                    let i = u(e, t);
                    return (await Promise.all(i.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = d(e),
                        i = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        r = {};
                    for (let e of i)
                        if (e) {
                            let t = r[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (r[e.disclaimerType] = t));
                        }
                    return r;
                }
                destroy() {
                    ((this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null));
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (e) {
                ((e.E = 'e'), (e.AGE_12 = '12+'), (e.AGE_16 = '16+'), (e.AGE_18 = '18+'), ((e.EXCLAMATION = '!'), (e.SUBSTITUTED = 'substituted')));
            })(s || (s = {}));
            let _ = new Map([
                    [r.EXPLICIT_ICON, s.E],
                    [r.AGE_18_ICON, s.AGE_18],
                    [r.AGE_16_ICON, s.AGE_16],
                    [r.AGE_12_ICON, s.AGE_12],
                    [r.EXCLAMATION_ICON, s.EXCLAMATION],
                    [r.SUBSTITUTED_ICON, s.SUBSTITUTED],
                ]),
                p = [r.EXPLICIT_ICON, r.AGE_18_ICON, r.AGE_16_ICON, r.AGE_12_ICON, r.SUBSTITUTED_ICON, r.EXCLAMATION_ICON],
                g = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = u(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, p);
                    if (null === t) return null;
                    let i = _.get(t.type);
                    return void 0 !== i ? i : null;
                },
                y = (e, t) => u(e, t).length > 0;
        },
        75501: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { S: () => r }),
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
                })(r || (r = {})));
        },
        76481: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            class r extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: s = {}, ...n } = t,
                        a = e || 'Internal error';
                    (super(a, n), (this.message = a), (this.code = i), (this.data = s), (this.stack = Error(a).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
            class s extends r {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        77920: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { X: () => r }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(r || (r = {})));
        },
        78299: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => b });
            var r = i(25839),
                s = i(82298),
                n = i(88204),
                a = i(74631),
                l = i(39004),
                o = i(8487);
            i(93588);
            var c = i(4071),
                d = i(66738),
                u = i(4254),
                m = i(67379),
                _ = i(36619),
                p = i(76945),
                g = i(59450),
                y = i(84e3),
                v = i(97952),
                h = i(89192),
                T = i(53712),
                A = i(15270),
                E = i(68854),
                I = i.n(E);
            let b = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: n } = (0, l.A)(),
                    E = n({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, g.st)(),
                        { hash: i } = (0, g.gf)(),
                        { pageId: r } = (0, v.$)(),
                        s = (0, y.U)();
                    (0, a.useEffect)(() => {
                        if (!t || !i || !r) return;
                        let n = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: r,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: s,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        n && (0, p.z5)(t.evgenInstance, n);
                    }, [t, e, i, r, s]);
                })(E);
                let { sendRefreshEvent: b } = (function () {
                        let e = (0, g.st)(),
                            { hash: t } = (0, g.gf)(),
                            { pageId: i } = (0, v.$)(),
                            r = (0, y.U)();
                        return {
                            sendRefreshEvent: (0, a.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let s = (0, m.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                s && (0, p.bv)(e.evgenInstance, s);
                            }, [e, t, i, r]),
                        };
                    })(),
                    C = (0, a.useCallback)(() => {
                        (b(), (window.location.href = T.Z.main.href));
                    }, [b]),
                    { contentRef: P } = (0, h.g)();
                return (0, r.jsxs)('div', {
                    className: (0, s.$)(I().root, t),
                    children: [
                        i &&
                            (0, r.jsx)(A.L, { withBackwardFallback: '/', className: (0, s.$)(I().navigation, { [I().navigation_desktop]: !P }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, s.$)(I().content, { [I().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(d.I, { className: I().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.DZ, { className: (0, s.$)(I().title, I().important), variant: 'h3', size: 'xs', children: E }),
                                (0, r.jsxs)(u.HL, {
                                    className: (0, s.$)(I().text, I().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: C,
                                    className: I().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, r.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        80477: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => a });
            var r = i(25839),
                s = i(35015),
                n = i(10546);
            let a = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(n.k, {
                    closeToast: i,
                    entityVariant: s.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        80499: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => y, s: () => v });
            var r = i(25839),
                s = i(88204),
                n = i(84059),
                a = i(74631),
                l = i(89288),
                o = i(36432),
                c = i(94421),
                d = i(99989),
                u = i(27954),
                m = i(83382);
            (0, s.eO)(!1);
            let _ = (0, a.createContext)(null),
                p = (e) => {
                    let { children: t, store: i, storeKey: s } = e,
                        n = (0, a.useMemo)(() => ({ store: i, storeKey: s }), [i, s]);
                    return (0, r.jsx)(_.Provider, { value: n, children: t });
                },
                g = (e) => {
                    let { nonce: t, patchKey: i, patchesRef: s } = e;
                    return (
                        (0, n.useServerInsertedHTML)(() => {
                            let e = s.current;
                            return ((s.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, l.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(i, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                y = (e) => {
                    let { createStore: t, patchKey: i } = e,
                        s = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[i]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[i], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: n, nonce: a } = e,
                                l = (0, m.Y)(),
                                o = (0, u.g)(),
                                { store: _, patchesRef: y } = (0, d.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: s,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(g, { nonce: a, patchKey: i, patchesRef: y }), (0, r.jsx)(p, { store: _, storeKey: i, children: n })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, a.useContext)(_);
                if (!i || i.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == i ? void 0 : i.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return i.store;
            }
        },
        81024: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => s });
            var r = i(25895);
            let s = (e) => (0, r.u)('/album/:albumId', { params: { albumId: e } });
        },
        82401: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => r });
            var r = (function (e) {
                return ((e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e);
            })({});
        },
        82706: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => r });
            let r = {
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
        84058: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => F });
            var r = i(25839),
                s = i(82298),
                n = i(88204),
                a = i(74631),
                l = i(39004),
                o = i(36619),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                m = i(49656),
                _ = i(51246),
                p = i(66738),
                g = i(86869),
                y = i(4254),
                v = i(1797),
                h = i(7361),
                T = i(90613),
                A = i(79367),
                E = i(29481),
                I = i(47009),
                b = i(34159),
                C = i(52512),
                P = i(30290),
                O = i(61561),
                x = i(85686),
                f = i(85743),
                k = i(50209),
                L = i(27954),
                N = i(6323),
                S = i(64720),
                j = i(97522),
                R = i(41580),
                K = i(49438),
                D = i(71996),
                w = i(78437),
                B = i(21971),
                M = i(13936),
                U = i.n(M);
            let F = (0, n.PA)((e) => {
                let { artist: t, className: i, children: n, contentLinesCount: M, topTitleElement: F, bottomTitleElement: z } = e,
                    { ref: G, intersectionPropertyId: W } = (0, C.n)(),
                    {
                        trailer: V,
                        user: H,
                        paywall: { modal: X },
                    } = (0, L.g)(),
                    { from: Y, utmLink: $ } = (0, P.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: q } = (0, l.A)(),
                    [Q, Z] = (0, a.useState)(!1),
                    [J, ee] = (0, a.useState)(!1),
                    [et, ei] = (0, a.useState)(!1),
                    { sendLikeSearchFeedback: er, sendNavigateSearchFeedback: es, sendPlaySearchFeedback: en } = (0, f.z)(),
                    ea = (0, E.N)(),
                    el = (0, I.b)(),
                    eo = (0, h.K)(t),
                    ec = (0, T.A)(t),
                    { id: ed, name: eu, coverUri: em, isLiked: e_ } = t,
                    ep = (0, x.Z)(t.url),
                    [eg, ey] = (0, a.useState)(!1),
                    ev = (0, b.F)(),
                    eh = (0, A.P)(),
                    eT = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eh())) return void e.preventDefault();
                        (V.openArtistTrailer(t.id), ev(o.DomainObjectType.Artist, t.id));
                    }),
                    eA = (0, a.useMemo)(() => {
                        let e = q({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = e_ ? q({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, e_, q]),
                    { isPlaying: eE, togglePlay: eI } = (0, k.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: Y, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    eb = (0, v.S)({ artist: t, callback: ep }),
                    eC = (0, v.S)({ artist: t, callback: eI }),
                    eP = (0, u.c)((e) => {
                        (null == es || es(), ea({ to: o.AppScreen.ArtistScreen }), eb(e));
                    }),
                    eO = (0, O.N)(),
                    ex = (0, u.c)(() => {
                        if (!eh()) {
                            if (eO) return void X.open();
                            (Q || eE || (Z(!0), null == en || en()), eC(), el(!eE));
                        }
                    }),
                    ef = (0, u.c)(() => {
                        (J || e_ || (ee(!0), null == er || er()), eo());
                    }),
                    ek = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eL = (0, u.c)((e) => {
                        (ei(e), ey(e));
                    }),
                    eN = (0, a.useMemo)(
                        () =>
                            (0, r.jsx)(
                                B.g,
                                {
                                    artist: t,
                                    onOpenChange: eL,
                                    open: et,
                                    onClick: ek,
                                    className: (0, s.$)(U().menuButton, U().control),
                                    size: 's',
                                    icon: (0, r.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, ek, eL, et],
                    ),
                    eS = (0, a.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                w.n,
                                {
                                    children: (0, r.jsx)(D.k, {
                                        className: (0, s.$)(U().trailerButton, U().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eT,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eT]),
                    ej = (0, a.useMemo)(
                        () =>
                            (0, r.jsx)(
                                R.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, s.$)(U().pinButton, U().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eR = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                _.hg,
                                {
                                    isVisible: et || eg,
                                    className: U().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        K.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, s.$)(U().playButton, U().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: ex,
                                            isPlaying: eE,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        S.c,
                                        {
                                            className: (0, s.$)(U().likeButton, U().control),
                                            isLiked: e_,
                                            onClick: ef,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !H.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eN,
                                    pinControl: ej,
                                    trailerControl: eS,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eK = (0, a.useMemo)(
                        () =>
                            (0, r.jsx)(g.t, {
                                className: U().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: U().coverBlock,
                                    onClick: eP,
                                    children: [
                                        (0, r.jsx)(N.B, {
                                            className: U().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eA,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eR,
                                    ],
                                }),
                            }),
                        [eP, em, eA, t.isAvailable, eR],
                    );
                return (0, r.jsx)(_.MN, {
                    ref: G,
                    className: (0, s.$)(U().root, i),
                    textPosition: 'center',
                    'aria-label': eA,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            F,
                            (0, r.jsx)(y.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, r.jsx)(j.N, {
                                    className: U().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eA,
                                    onClick: eP,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            z,
                        ],
                    }),
                    srTitle: (0, r.jsx)(j.N, { className: U().srTitleLink, href: t.url, onClick: eP, children: eA }),
                    'data-intersection-property-id': W,
                    contentLinesCount: M,
                    view: eK,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: n,
                });
            });
        },
        86064: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => r });
            var r = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), (e.RELOAD = 'reload'), e);
            })({});
        },
        90462: (e) => {
            e.exports = {
                root: 'PostPage_root__Orhf7',
                scrollableContainer: 'PostPage_scrollableContainer__iV9Bo',
                scrollContainer: 'PostPage_scrollContainer__zrIrH',
                important: 'PostPage_important__qUlED',
                container: 'PostPage_container__orSfz',
                shimmerTitle: 'PostPage_shimmerTitle__EeFCD',
            };
        },
        90613: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var r = i(25839),
                s = i(33660),
                n = i(74631),
                a = i(39004),
                l = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(80477);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, a.A)(),
                    [_, p] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let n = { ...(0, s.HO)(e), isPinned: !e.isPinned };
                    p(!0);
                    let a = await e.togglePin();
                    (p(!1),
                        a
                            ? i((0, r.jsx)(u.l, { artist: n }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, _, m, i]);
            };
        },
        91201: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => a });
            var r = i(28410),
                s = i(83772),
                n = i(45337);
            let a = (e) => {
                let t = ((e) => ({ ...(0, s.f)(e), artists: e.artists.map(n.G) }))(e);
                return (0, r.wg)(t);
            };
        },
        91626: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => s }), i(77920));
            var r = i(76481);
            class s extends r.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        93690: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => n.G, X1: () => r.X, m5: () => s.m });
            var r = i(77920),
                s = i(76481),
                n = i(91626);
            i(95919);
        },
        95919: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { Z: () => r }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(r || (r = {})));
        },
        96692: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => n });
            var r = i(28410),
                s = i(45337);
            let n = (e) => {
                let t = (0, s.G)(e);
                return (0, r.wg)(t);
            };
        },
        97852: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => et }));
            var r,
                s = i(25839),
                n = i(84059),
                a = i(74631),
                l = i(80499),
                o = i(82706),
                c = i(28410),
                d = i(93690);
            !(function (e) {
                ((e.ALBUMS = 'albums'), (e.ARTISTS = 'artists'), (e.PLAYLISTS = 'playlists'));
            })(r || (r = {}));
            var u = i(91201),
                m = i(55180),
                _ = i(42546),
                p = i(96692),
                g = i(69088),
                y = i(33957),
                v = i(36159),
                h = i(19835);
            let T = c.gK
                    .compose(
                        c.gK.model('PostPage', {
                            errorStatusCode: c.gK.maybe(c.gK.number),
                            title: c.gK.maybeNull(c.gK.string),
                            promotionType: c.gK.maybeNull(c.gK.enumeration(Object.values(r))),
                            artists: c.gK.maybe(c.gK.array(g.P)),
                            albums: c.gK.maybe(c.gK.array(m.J)),
                            playlists: c.gK.maybe(c.gK.array(_.I)),
                        }),
                        h.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === v.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === d.X1.NOT_FOUND || e.errorStatusCode === d.X1.BAD_REQUEST;
                                return e.isRejected && t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, c.L3)(function* (t) {
                            let { promoId: i } = t,
                                { feedResource: r, modelActionsLogger: s } = (0, c._$)(e);
                            if (e.loadingState !== v.G.PENDING)
                                try {
                                    e.loadingState = v.G.PENDING;
                                    let t = yield r.getPromotionsById({ promoId: i });
                                    ((e.title = t.title),
                                        (e.promotionType = t.promotionType),
                                        t.artists && t.artists.length > 0 && (e.artists = (0, c.wg)(t.artists.map(p.d))),
                                        t.albums && t.albums.length > 0 && (e.albums = (0, c.wg)(t.albums.map(u.p))),
                                        t.playlists &&
                                            t.playlists.length > 0 &&
                                            (e.playlists = (0, c.wg)(
                                                t.playlists.map((e) => {
                                                    let { playlist: t } = e;
                                                    return (0, y.j)(t);
                                                }),
                                            )),
                                        e.loadingState !== v.G.IDLE && (e.loadingState = v.G.RESOLVE));
                                } catch (t) {
                                    (s.error(t),
                                        t instanceof d.GX &&
                                            (t.statusCode === d.X1.NOT_FOUND || t.statusCode === d.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = d.X1.NOT_FOUND),
                                        e.loadingState !== v.G.IDLE && (e.loadingState = v.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = v.G.IDLE), (e.title = null), (e.artists = (0, c.wg)([])), (e.albums = (0, c.wg)([])));
                        },
                    })),
                A = { loadingState: v.G.IDLE },
                { pageStoreProvider: E } = (0, l.W)({ createStore: (e) => T.create(A, e), patchKey: o.n.POST });
            var I = i(82298),
                b = i(88204),
                C = i(13833),
                P = i(23976),
                O = i(4254),
                x = i(78299),
                f = i(1407),
                k = i(20258),
                L = i(10322),
                N = i(21784),
                S = i(89192),
                j = i(30716),
                R = i(10603),
                K = i(19412),
                D = i(65078),
                w = i.n(D);
            let B = () => {
                let e = Array.from({ length: 20 }, (e, t) => {
                    let i = void 0 === e ? t : ''.concat(t, '-').concat(String(e));
                    return (0, s.jsx)(K.V, { isActive: !0 }, i);
                });
                return (0, s.jsx)('div', { className: w().root, children: e });
            };
            var M = i(90462),
                U = i.n(M),
                F = i(76939),
                z = i(27393),
                G = i.n(z);
            let W = (0, b.PA)((e) => {
                let { albums: t = [] } = e;
                return (0, s.jsx)('div', {
                    className: G().root,
                    children: (0, s.jsx)('div', {
                        className: G().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: t.map((e) => (0, s.jsx)(F.a, { className: G().item, album: e, contentLinesCount: 3 }, e.id)),
                    }),
                });
            });
            var V = i(84058),
                H = i(60407),
                X = i.n(H);
            let Y = (0, b.PA)((e) => {
                let { artists: t = [] } = e;
                return (0, s.jsx)('div', {
                    className: X().root,
                    children: (0, s.jsx)('div', {
                        className: X().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: t.map((e) => (0, s.jsx)(V.a, { className: X().item, artist: e, contentLinesCount: 3 }, e.id)),
                    }),
                });
            });
            var $ = i(41707),
                q = i(28915),
                Q = i.n(q);
            let Z = (0, b.PA)((e) => {
                    let { playlists: t = [] } = e;
                    return (0, s.jsx)('div', {
                        className: Q().root,
                        children: (0, s.jsx)('div', {
                            className: Q().content,
                            'aria-labelledby': 'post-page-header',
                            tabIndex: 0,
                            children: t.map((e) => (0, s.jsx)($.B, { className: Q().item, playlist: e, contentLinesCount: 3 }, e.id)),
                        }),
                    });
                }),
                J = (0, b.PA)((e) => {
                    let { promoId: t } = e,
                        i = (0, l.s)(o.n.POST),
                        c = (0, N.W)(),
                        { contentScrollRef: d, setContentScrollRef: u } = (0, S.g)();
                    (i.isNotFound && (0, n.notFound)(), (0, j.J)(i.isResolved));
                    let m = (0, a.useMemo)(() => {
                        if (i.isLoading) return (0, s.jsx)(B, {});
                        switch (i.promotionType) {
                            case r.ARTISTS:
                                return (0, s.jsx)(Y, { artists: i.artists });
                            case r.ALBUMS:
                                return (0, s.jsx)(W, { albums: i.albums });
                            case r.PLAYLISTS:
                                return (0, s.jsx)(Z, { playlists: i.playlists });
                            default:
                                (0, n.notFound)();
                        }
                    }, [i.albums, i.artists, i.isLoading, i.playlists, i.promotionType]);
                    return (t && i.isNeededToLoad && (0, a.use)(i.getData({ promoId: t })), i.isSomethingWrong)
                        ? (0, s.jsx)(x.SomethingWentWrong, {})
                        : (0, s.jsx)(L.n, {
                              pageId: k._Q.POST,
                              children: (0, s.jsx)(f.h, {
                                  scrollElement: d,
                                  outerTitle: i.title || void 0,
                                  children: (0, s.jsxs)('div', {
                                      className: U().root,
                                      children: [
                                          (0, s.jsx)(R.Y, {
                                              variant: R.V.TEXT,
                                              withForwardControl: !1,
                                              withBackwardControl: c.canBack,
                                              children: i.title
                                                  ? (0, s.jsx)(O.DZ, { id: 'post-header', variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: i.title })
                                                  : (0, s.jsx)(P.W, { className: U().shimmerTitle, radius: 'l' }),
                                          }),
                                          (0, s.jsx)(C.N, {
                                              containerClassName: (0, I.$)(U().scrollContainer, U().important),
                                              className: U().scrollableContainer,
                                              ref: u,
                                              children: (0, s.jsx)('div', { className: U().container, children: m }),
                                          }),
                                      ],
                                  }),
                              }),
                          });
                }),
                ee = () => {
                    let e = (0, N.W)();
                    return (0, s.jsx)(f.h, {
                        scrollElement: null,
                        children: (0, s.jsxs)('div', {
                            className: U().root,
                            children: [
                                (0, s.jsx)(R.Y, {
                                    variant: R.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, s.jsx)(P.W, { className: U().shimmerTitle, radius: 'l' }),
                                }),
                                (0, s.jsx)(C.N, {
                                    containerClassName: (0, I.$)(U().scrollContainer, U().important),
                                    className: U().scrollableContainer,
                                    children: (0, s.jsx)('div', { className: U().container, children: (0, s.jsx)(B, {}) }),
                                }),
                            ],
                        }),
                    });
                },
                et = () => {
                    let e = (0, n.useSearchParams)().get('promoId');
                    return (
                        e || (0, n.notFound)(),
                        (0, s.jsx)(E, { children: (0, s.jsx)(a.Suspense, { fallback: (0, s.jsx)(ee, {}), children: (0, s.jsx)(J, { promoId: e }) }) })
                    );
                };
        },
        98436: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
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
        99725: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => r });
            let r = 100;
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 1676, 7349, 945, 7339, 6749, 6287, 2121, 3472, 3560, 5372, 6706, 1311, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3269, 4163,
                3246, 4517, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 5898, 9333, 4475, 5056, 7358,
            ],
            () => e((e.s = 8558)),
        ),
            (_N_E = e.O()));
    },
]);
