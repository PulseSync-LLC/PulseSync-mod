(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3069],
    {
        1134: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var n = i(25839),
                s = i(33660),
                r = i(74631),
                a = i(39004),
                l = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(27892);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, a.A)(),
                    [m, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, n.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (m) return;
                    let r = { ...(0, s.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let a = await e.togglePin();
                    (p(!1),
                        a
                            ? i((0, n.jsx)(u.l, { playlist: r }), { containerId: l.u.INFO })
                            : i((0, n.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [t.isAuthorized, m, e, i, _]);
            };
        },
        1797: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => s });
            var n = i(40207);
            let s = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: s } = e;
                return (0, n.l)({ entity: t, callback: i, modalBehavior: void 0 === s ? void 0 : { shouldHistoryBack: s }, preventDefaultWhenSafe: !0 });
            };
        },
        7361: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var n = i(25839),
                s = i(33660),
                r = i(74631),
                a = i(39004),
                l = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                _ = i(63149);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, p] = (0, r.useState)(!1),
                    { formatMessage: g } = (0, a.A)();
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, n.jsx)(u.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let r = { ...(0, s.HO)(e), isLiked: !e.isLiked };
                    p(!0);
                    let a = await e.toggleLike();
                    (p(!1),
                        a === l.f.OK
                            ? i((0, n.jsx)(_.T, { artist: r }), { containerId: o.u.INFO })
                            : i((0, n.jsx)(u.h, { error: g({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, m, g, i]);
            };
        },
        10024: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            var n = i(28410),
                s = i(31851);
            let r = (e) => {
                let t = (0, s.n)(e);
                return (0, n.wg)(t);
            };
        },
        11871: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { L: () => n }),
                (function (e) {
                    ((e.PUBLIC = 'public'), (e.PRIVATE = 'private'));
                })(n || (n = {})));
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
            i.d(t, { g: () => Z });
            var n = i(25839),
                s = i(88204),
                r = i(39004),
                a = i(44031),
                l = i(61493),
                o = i(22939),
                c = i(71035),
                d = i(66738),
                u = i(10820),
                _ = i(33660),
                m = i(74631),
                p = i(31860),
                g = i(91149),
                y = i(92942),
                v = i(27954),
                h = i(57549),
                T = i(86869),
                x = i(69084),
                A = i(4254),
                E = i(51790),
                k = i(6323),
                P = i(24596),
                C = i.n(P);
            let b = (e) => {
                let { coverUri: t, title: i, isDisliked: s, closeToast: a } = e,
                    { formatMessage: l } = (0, r.A)(),
                    o = l(s ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, n.jsx)(E.$, {
                    closeToast: a,
                    message: (0, n.jsxs)('div', {
                        className: C().message,
                        children: [
                            (0, n.jsx)(x.q, { children: (0, n.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, n.jsx)(T.t, {
                                className: C().cover,
                                radius: 'round',
                                children: (0, n.jsx)(k.B, { className: C().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, n.jsx)(A.HL, { className: C().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var I = i(7361),
                N = i(90613),
                S = i(3210),
                f = i(11609),
                L = i(79367),
                O = i(40110),
                j = i(20258),
                R = i(34159),
                K = i(30290),
                U = i(29872),
                M = i(56120),
                D = i(87201),
                w = i(83014),
                B = i(44806),
                z = i(55491),
                F = i(44851),
                W = i(14240),
                H = i(56615),
                G = i(16386),
                Y = i(67303),
                V = i(74682),
                X = i(59043),
                $ = i(2144),
                q = i(6304);
            let Z = (0, s.PA)((e) => {
                var t, i, s;
                let { artist: T, onOpenChange: x, open: A, ...E } = e,
                    { shouldShowBuySubscriptionModal: k, showBuySubscriptionModal: P } = (0, U.q)(),
                    {
                        settings: { isMobile: C },
                        modals: { artistAboutModal: Z },
                        trailer: Q,
                        user: J,
                        experiments: ee,
                    } = (0, v.g)(),
                    et = (0, N.A)(T),
                    ei = (0, I.K)(T),
                    en = ((e) => {
                        let { user: t } = (0, v.g)(),
                            { notify: i } = (0, y.l)(),
                            [s, a] = (0, m.useState)(!1),
                            { formatMessage: l } = (0, r.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, n.jsx)(h.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: g.u.ERROR });
                            if (s) return;
                            let r = { ...(0, _.HO)(e), isDisliked: !e.isDisliked };
                            a(!0);
                            let o = await e.toggleDislike();
                            (a(!1),
                                o === p.f.OK
                                    ? i((0, n.jsx)(b, { coverUri: r.coverUri, title: r.name, isDisliked: r.isDisliked }), { containerId: g.u.INFO })
                                    : i((0, n.jsx)(h.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: g.u.ERROR }));
                        });
                    })(T),
                    es = (0, R.F)(),
                    er = ''.concat(O.U.ARTIST, '-').concat(null == T ? void 0 : T.id),
                    { formatMessage: ea } = (0, r.A)(),
                    { utmLink: el } = (0, K.f)({ blockId: O.U.ARTIST, contextType: o.K.Artist, contextId: null == T ? void 0 : T.id }),
                    { shareLink: eo, pathname: ec } = (0, W.b)('/artist/:artistId', { params: { artistId: null != (i = null == T ? void 0 : T.id) ? i : '' } }),
                    ed = (0, S.A)({ entityVariant: w.D.ARTIST, urlParams: { id: null == T ? void 0 : T.id } }),
                    { isPlaying: eu, togglePlay: e_ } = (0, D.B)({
                        seeds: null != (s = null == T ? void 0 : T.seeds) ? s : [],
                        pageIdForFrom: j._Q.RADIO,
                        blockIdForFrom: er,
                        parentContextId: null == T ? void 0 : T.id,
                    }),
                    em = (0, L.P)(),
                    ep = ea((null == T ? void 0 : T.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    eg = (0, c.c)(() => {
                        if (k && J.isAuthorized) return void P();
                        eu || e_();
                    }),
                    ey = (0, c.c)(() => {
                        if (!em()) {
                            if (k) return void P();
                            (null == T ? void 0 : T.id) && (Q.setUtmLink(el), Q.openArtistTrailer(T.id), es(a.DomainObjectType.Artist, T.id));
                        }
                    }),
                    ev = (0, c.c)(() => {
                        Z.open(null == T ? void 0 : T.id);
                    });
                (0, M.N)(A);
                let eh = { variant: z.Y.ARTIST, id: null == T ? void 0 : T.id, title: null == T ? void 0 : T.name, path: ec },
                    eT = ee.checkExperiment(B.z.WebEditorsFeatures, 'on'),
                    ex = null == T || null == (t = T.trailer) ? void 0 : t.isAvailable,
                    eA = ee.checkExperiment(B.z.WebNextArtistInfo, 'on'),
                    eE = !ee.checkExperiment(B.z.WebNextProductWithoutRecommendation, 'on');
                return (0, n.jsxs)(u.W1, {
                    isMobile: C,
                    offsetOptions: 10,
                    open: A,
                    onOpenChange: x,
                    ariaLabel: ea({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...E,
                    children: [
                        eT && (0, n.jsx)(q.WithOffline, { fallback: (0, n.jsx)(f.d, { entityVariant: w.D.ARTIST, adminUrl: ed }) }),
                        !C && (0, n.jsx)(q.WithOffline, { fallback: (0, n.jsx)(Y.L, { onClick: et, isPinned: null == T ? void 0 : T.isPinned }) }),
                        (0, n.jsx)(q.WithOffline, {
                            fallback: (0, n.jsx)(G.T, {
                                onClick: ei,
                                isLiked: null == T ? void 0 : T.isLiked,
                                disabled: !J.isAuthorized || !(null == T ? void 0 : T.isAvailable),
                            }),
                        }),
                        ex && (0, n.jsx)(q.WithOffline, { fallback: (0, n.jsx)(X.N, { onClick: ey }) }),
                        eE &&
                            (0, n.jsx)(q.WithOffline, {
                                fallback: (0, n.jsx)($.C, { onClick: eg, disabled: !(null == T ? void 0 : T.isAvailable), variant: F.I.ARTIST, onOpenMenuChange: x }),
                            }),
                        (0, n.jsx)(V.H, { disabled: !T, shareLink: eo, entityMeta: eh }),
                        eA &&
                            (0, n.jsx)(q.WithOffline, {
                                fallback: (0, n.jsx)(u.Dr, {
                                    onClick: ev,
                                    icon: (0, n.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ep,
                                }),
                            }),
                        (0, n.jsx)(q.WithOffline, {
                            fallback: (0, n.jsx)(H.D, { onClick: en, isDisliked: null == T ? void 0 : T.isDisliked, disabled: !(null == T ? void 0 : T.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        22413: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => r, TF: () => l, hZ: () => a });
            var n = function () {
                return (n =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, n = arguments.length; i < n; i++)
                            for (var s in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                        return e;
                    }).apply(this, arguments);
            };
            function s(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function r(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], n = 0; n < i.length; n++) {
                        var s = i[n].split('='),
                            r = s.slice(1).join('=');
                        '"' === r[0] && (r = r.slice(1, -1));
                        try {
                            t[decodeURIComponent(s[0])] = r.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function a(e, t, i) {
                var r;
                document.cookie =
                    ((r = n({ path: '/' }, i)),
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
                        })(r));
            }
            function l(e, t) {
                a(e, '', n(n({}, t), { expires: -1 }));
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
            var n = i(25839),
                s = i(35015),
                r = i(10546);
            let a = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, n.jsx)(r.k, {
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
        27990: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
        },
        28915: (e) => {
            e.exports = { root: 'PostPlaylists_root__3tea0', content: 'PostPlaylists_content__2fXI5' };
        },
        33957: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            var n = i(28410),
                s = i(23951),
                r = i(10024);
            let a = (e) => {
                var t, i, a, l, o;
                e = e || {};
                let c = (0, r.m)(e.trailer);
                return (0, n.wg)({
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
            i.d(t, { r: () => r });
            var n = i(74631),
                s = i(39004);
            let r = (e) => {
                let { formatMessage: t } = (0, s.A)();
                return (0, n.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let n = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(n, ' ').concat(i);
                }, [t, e]);
            };
        },
        41707: (e, t, i) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = i(66738);
// for PulseSync: END import the download icon for playlist menu actions
            i.d(t, { B: () => J });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(25839),
                pulseSyncMenuItems = i(10820),
                pulseSyncMenuIcons = i(66738);
            // for PulseSync WebHost: END imports for native addon context menu items
            var n = i(25839),
                s = i(82298),
                r = i(88204),
                a = i(74631),
                l = i(39004),
                o = i(44031),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                _ = i(49656),
                m = i(51246),
                p = i(66738),
                g = i(86869),
                y = i(4254),
                v = i(56348),
                h = i(62948),
                T = i(1134),
                x = i(79367),
                A = i(29481),
                E = i(47009),
                k = i(34159),
                P = i(52512),
                C = i(30290),
                b = i(61561),
                I = i(85686),
                N = i(85743),
                S = i(50209),
                f = i(27954),
                L = i(74760),
                O = i(6323),
                j = i(64720),
                R = i(97522),
                K = i(41580),
                U = i(49438),
                M = i(71996),
                D = i(78437),
                w = i(41459),
                B = i(10820),
                z = i(3210),
                F = i(11609),
                W = i(29872),
                H = i(56120),
                G = i(83014),
                Y = i(44806),
                V = i(16386),
                X = i(67303),
                $ = i(59043);
            let q = (0, r.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: s, open: r, ...a } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, W.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: p },
                        trailer: g,
                        user: y,
                    } = (0, f.g)(),
                    v = (0, h.K)(i),
                    A = (0, T.A)(i),
                    E = (0, k.F)(),
                    { formatMessage: P } = (0, l.A)(),
                    C = (0, x.P)(),
                    b = m.checkExperiment(Y.z.WebEditorsFeatures, 'on'),
                    I = (0, z.A)({ entityVariant: G.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, H.N)(r);
                let N = (0, u.c)(() => {
                    if (d) return void _();
                    C() || (g.openPlaylistTrailer(i.id), E(o.DomainObjectType.Playlist, i.id));
                });
                // for PulseSync WebHost: BEGIN playlist context and native addon menu item rendering
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
                // for PulseSync WebHost: END playlist context and native addon menu item rendering
                return (0, n.jsxs)(B.W1, {
                    title: i.title,
                    onOpenChange: s,
                    open: r,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: P({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...a,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        b && (0, n.jsx)(F.d, { entityVariant: G.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : I }),
                        !p && (0, n.jsx)(X.L, { onClick: A, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, n.jsx)(V.T, { onClick: v, isLiked: i.isLiked, disabled: !y.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, n.jsx)(B.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, n.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, n.jsx)($.N, { onClick: N, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var Z = i(15787),
                Q = i.n(Z);
            let J = (0, r.PA)((e) => {
                let { className: t, playlist: i, children: r, contentLinesCount: B, customDescription: z, onCoverMouseDown: F } = e,
                    { ref: W, intersectionPropertyId: H } = (0, P.n)(),
                    {
                        trailer: G,
                        user: Y,
                        paywall: { modal: V },
                    } = (0, f.g)(),
                    { from: X, utmLink: $ } = (0, C.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: Z } = (0, l.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, N.z)(),
                    [ei, en] = (0, a.useState)(!1),
                    [es, er] = (0, a.useState)(!1),
                    [ea, el] = (0, a.useState)(!1),
                    eo = (0, w.r)(i),
                    ec = (0, h.K)(i),
                    ed = (0, T.A)(i),
                    eu = (0, A.N)(),
                    e_ = (0, E.b)(),
                    em = (0, I.Z)(i.url),
                    ep = (0, k.F)(),
                    eg = (0, x.P)(),
                    ey = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eg())) return void e.preventDefault();
                        (G.setUtmLink($), G.openPlaylistTrailer(i.id), ep(o.DomainObjectType.Playlist, i.id));
                    }),
                    [ev, eh] = (0, a.useState)(!1),
                    { isPlaying: eT, togglePlay: ex } = (0, S.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: X, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    eA = (0, u.c)(() => {
                        (eu({ to: o.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eE = (0, u.c)((e) => {
                        (eA(), em(e));
                    }),
                    ek = (0, b.N)(),
                    eP = (0, u.c)(() => {
                        if (!eg()) {
                            if (ek) return void V.open();
                            (ei || eT || (en(!0), null == et || et()), ex(), e_(!eT));
                        }
                    }),
                    eC = (0, u.c)(() => {
                        (es || i.isLiked || (er(!0), null == J || J()), ec());
                    }),
                    eb = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eI = (0, u.c)((e) => {
                        (el(e), eh(e));
                    }),
                    eN = (0, a.useMemo)(() => {
                        var e;
                        return z
                            ? (0, n.jsx)(y.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: z }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, n.jsx)(
                                    v.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [z, i]),
                    eS = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, n.jsx)(
                                j.c,
                                {
                                    className: (0, s.$)(Q().likeButton, Q().control),
                                    isLiked: i.isLiked,
                                    onClick: eC,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !Y.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    ef = (0, a.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, n.jsx)(
                                D.n,
                                {
                                    children: (0, n.jsx)(
                                        M.k,
                                        { className: (0, s.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ey },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ey, i]),
                    eL = (0, a.useMemo)(
                        () =>
                            (0, n.jsx)(
                                K.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, s.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eO = (0, a.useMemo)(
                        () =>
                            (0, n.jsx)(g.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, n.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: eE,
                                    onMouseDown: F,
                                    children: [
                                        (0, n.jsx)(O.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, n.jsx)(m.hg, {
                                            isVisible: ea || ev,
                                            className: Q().controls,
                                            playControl: (0, n.jsx)(
                                                U.D,
                                                {
                                                    className: (0, s.$)(Q().playButton, Q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eP,
                                                    isPlaying: eT,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eS,
                                            menuControl: (0, n.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eI,
                                                    open: ea,
                                                    onClick: eb,
                                                    className: (0, s.$)(Q().menuButton, Q().control),
                                                    icon: (0, n.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eL,
                                            trailerControl: ef,
                                        }),
                                    ],
                                }),
                            }),
                        [eE, F, i, eo, ea, ev, eP, eT, eS, eI, eb, eL, ef],
                    ),
                    ej = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, n.jsxs)(m.MN, {
                    ref: W,
                    'aria-label': eo,
                    className: (0, s.$)(Q().root, t),
                    title: (0, n.jsx)(y.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, n.jsx)(R.N, { className: Q().titleLink, href: i.url, tabIndex: -1, onClick: eA, children: i.title }),
                    }),
                    srTitle: (0, n.jsx)(R.N, { className: Q().srTitleLink, href: i.url, onClick: eA, children: i.title }),
                    'data-intersection-property-id': H,
                    contentLinesCount: B,
                    view: eO,
                    description: eN,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        ej &&
                            (0, n.jsx)(L.x, {
                                ariaLabel: Z({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        r,
                    ],
                });
            });
        },
        42190: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var n = i(25839),
                s = i(35015),
                r = i(3163);
            let a = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, n.jsx)(r.O, {
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
            i.d(t, { I: () => r });
            var n = i(28410),
                s = i(69088);
            let r = i(45809).Z.props({ artists: n.gK.maybe(n.gK.array(s.P)) });
        },
        43357: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => s });
            var n = i(98436);
            let s = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(n._.PLAYLIST_ITEM).concat(t, '_').concat(i);
            };
        },
        45809: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => r });
            var n = i(28410);
            let s = n.gK.model('TrackIdModel', { id: n.gK.union(n.gK.string, n.gK.number), albumId: n.gK.maybe(n.gK.number), timestamp: n.gK.maybe(n.gK.string) }),
                r = i(53469)
                    .$.props({ tracks: n.gK.maybe(n.gK.array(s)) })
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
        },
        53469: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => v });
            var n = i(28410),
                s = i(93690),
                r = i(11871),
                a = i(31860),
                l = i(51751),
                o = i(31488),
                c = i(25895),
                d = i(86656),
                u = i(98181),
                _ = i(86064),
                m = i(99725),
                p = i(65596),
                g = i(43357),
                y = i(82401);
            let v = n.gK
                .compose(
                    n.gK.model({
                        uuid: n.gK.string,
                        isAvailable: n.gK.boolean,
                        revision: n.gK.maybe(n.gK.number),
                        uid: n.gK.number,
                        kind: n.gK.number,
                        title: n.gK.maybe(n.gK.string),
                        coverUri: n.gK.maybe(n.gK.string),
                        tracksCount: n.gK.maybe(n.gK.number),
                        averageColor: n.gK.maybe(n.gK.string),
                        generatedPlaylistType: n.gK.maybe(n.gK.string),
                        personalColor: n.gK.maybeNull(n.gK.number),
                        visibility: n.gK.maybe(n.gK.string),
                        trailer: n.gK.maybe(d.a),
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
                        return e.visibility === r.L.PUBLIC;
                    },
                    get isLiked() {
                        if (!(0, n._n)(e)) return !1;
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
                        if (!(0, n._n)(e)) return !1;
                        let { pinsCollection: t } = (0, l.M)(e);
                        return t.isPinned(this.pinId);
                    },
                    get isOwnPlaylist() {
                        let { user: t } = (0, l.M)(e);
                        return !!(t.isAuthorized && e.uid && t.account.data.uid && e.uid === t.account.data.uid);
                    },
                    get canUserChange() {
                        if (!(0, n._n)(e)) return !1;
                        return this.isOwnPlaylist && !this.isFavouritePlaylist;
                    },
                    get isOwnFavouritePlaylist() {
                        if (!(0, n._n)(e)) return !1;
                        return this.isFavouritePlaylist && this.isOwnPlaylist;
                    },
                }))
                .actions((e) => ({
                    toggleLike: (0, n.L3)(function* () {
                        if (!(0, n._n)(e)) return;
                        let { library: t, user: i } = (0, l.M)(e);
                        if (i.isAuthorized) {
                            let s = yield t.togglePlaylistLike({ userId: i.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                            return ((0, n._n)(e) && s === a.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), s);
                        }
                    }),
                    togglePin: (0, n.L3)(function* () {
                        if (!(0, n._n)(e)) return;
                        let { pinsCollection: t, user: i } = (0, l.M)(e);
                        if (i.isAuthorized) return yield t.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                    }),
                    changePlaylist: (0, n.L3)(function* (t) {
                        if (!(0, n._n)(e)) return _.Y.ERROR;
                        let { usersResource: i, modelActionsLogger: r } = (0, n._$)(e);
                        try {
                            var a, l;
                            let n = yield i.changePlaylistRelative({ userId: e.uid, diff: t, revision: null != (a = e.revision) ? a : 0, playlistKind: e.kind });
                            // for PulseSync: BEGIN keep playlist track counts for append-to-end insertion
                            Number.isSafeInteger(n.trackCount) && n.trackCount >= 0 && (e.tracksCount = n.trackCount);
                            // for PulseSync: END keep playlist track counts for append-to-end insertion
                            return ((e.revision = n.revision), (e.isAvailable = null == (l = n.available) || l), _.Y.OK);
                        } catch (e) {
                            if ((r.error(e), e && 'object' == typeof e && 'statusCode' in e && e.statusCode === s.X1.PRECONDITION_FAILED)) return _.Y.RELOAD;
                            return _.Y.ERROR;
                        }
                    }),
                    changeTitle: (0, n.L3)(function* (t) {
                        if (!(0, n._n)(e)) return o.F.ERROR;
                        if (e.title === t) return o.F.OK;
                        let { usersResource: i, modelActionsLogger: s } = (0, n._$)(e);
                        if (e.canUserChange) {
                            if (t.length < 1 || t.length > m.k) return o.F.ERROR;
                            let n = e.title;
                            e.title = t;
                            try {
                                let s = yield i.changePlaylistTitle({ title: t, userId: e.uid, playlistKind: e.kind });
                                if (!(null == s ? void 0 : s.title)) return ((e.title = n), o.F.ERROR);
                                return ((e.title = s.title), o.F.OK);
                            } catch (t) {
                                ((e.title = n), s.error(t));
                            }
                        }
                        return o.F.ERROR;
                    }),
                    deletePlaylist: (0, n.L3)(function* () {
                        if (!(0, n._n)(e) || !e.canUserChange) return o.F.ERROR;
                        let { pinsCollection: t } = (0, l.M)(e),
                            { usersResource: i, modelActionsLogger: s } = (0, n._$)(e);
                        try {
                            return (yield i.deletePlaylist({ userId: e.uid, playlistKind: e.kind }), t.isPinned(e.pinId) && t.deletePin(e.pinId), o.F.OK);
                        } catch (e) {
                            s.error(e);
                        }
                        return o.F.ERROR;
                    }),
                    toggleVisibility: (0, n.L3)(function* (t) {
                        if (!(0, n._n)(e) || (!e.canUserChange && !e.isOwnFavouritePlaylist)) return o.F.ERROR;
                        let { usersResource: i, modelActionsLogger: s } = (0, n._$)(e),
                            { user: a } = (0, l.M)(e),
                            c = e.visibility,
                            d = e.isPublic ? r.L.PRIVATE : r.L.PUBLIC;
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
                    getKey: (t) => ''.concat(t, '_').concat(e.id),

                    // for PulseSync: BEGIN playlist model download-to-file action
                    downloadToFile: (0, n.L3)(function* () {
                        if (!(0, n._n)(e)) return;
                        let { usersResource: resource, modelActionsLogger: logger } = (0, n._$)(e);
                        try {
                            let { tracks = [] } = yield resource.getPlaylistWithTracksIds({
                                    userId: String(e.uid),
                                    playlistKind: e.kind,
                                    resumeStream: !1,
                                }),
                                trackIds = tracks.map((track) => (null == track?.id ? null : track.albumId ? ''.concat(track.id, ':').concat(track.albumId) : String(track.id))).filter(Boolean);
                            trackIds.length && window.musicDesktop?.pulsesync.downloads.tracks?.(trackIds, 'playlist', e.title || '');
                        } catch (error) {
                            logger.error(error);
                        }
                    }),
                    // for PulseSync: END playlist model download-to-file action
                    }));
        },
        53712: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => s });
            var n = i(25895);
            let s = {
                main: (0, n.u)('/'),
                chart: (0, n.u)('/chart'),
                chartPodcasts: (0, n.u)('/chart/podcasts'),
                collection: (0, n.u)('/collection'),
                collectionAlbums: (0, n.u)('/collection/albums'),
                collectionArtists: (0, n.u)('/collection/artists'),
                collectionClips: (0, n.u)('/collection/clips'),
                collectionDislikes: (0, n.u)('/collection/dislikes'),
                collectionKids: (0, n.u)('/collection/kids'),
                collectionKidsAlbums: (0, n.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, n.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, n.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, n.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, n.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, n.u)('/collection/multivibes'),
                collectionPlaylists: (0, n.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, n.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, n.u)('/collection/playlists/liked'),
                collectionShelf: (0, n.u)('/collection/shelf'),
                collectionShelfLiked: (0, n.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, n.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, n.u)('/collection/shelf/recently-played'),
                concerts: (0, n.u)('/concerts'),
                kids: (0, n.u)('/kids'),
                mixes: (0, n.u)('/mixes'),
                musicHistory: (0, n.u)('/music-history'),
                muzmarket: (0, n.u)('/muzmarket'),
                mymusic: (0, n.u)('/mymusic'),
                mymusicDownloadsTracks: (0, n.u)('/mymusic/downloads/tracks'),
                multivibe: (0, n.u)('/multivibe'),
                nonMusic: (0, n.u)('/non-music'),
                pay: (0, n.u)('/pay'),
                userSlides: (0, n.u)('/slides/user'),
                search: (0, n.u)('/search'),
                searchHistory: (0, n.u)('/search/history'),
                settings: (0, n.u)('/settings'),
                video: (0, n.u)('/video'),
            };
        },
        55180: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => l });
            var n = i(28410),
                s = i(66730),
                r = i(69088),
                a = i(69432);
            let l = s.G.props({ artists: n.gK.maybe(n.gK.array(r.P)), chart: n.gK.maybe(a.I) }).views((e) => ({
                get artistNames() {
                    var t;
                    return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                },
                get artistName() {
                    var i, n, s, r;
                    if (null == (n = e.artists) || null == (i = n[0]) ? void 0 : i.various) return;
                    return null == (r = e.artists) || null == (s = r[0]) ? void 0 : s.name;
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
            var n = i(25839),
                s = i(88204),
                r = i(8487),
                a = i(61493),
                l = i(66738),
                o = i(10820),
                c = i(27954);
            let d = (0, s.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: s, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, n.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, n.jsx)(l.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: s || !u.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, n.jsx)(r.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        59394: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 97852));
        },
        60407: (e) => {
            e.exports = { root: 'PostArtists_root__Zxmjq', content: 'PostArtists_content__JzGOH' };
        },
        62948: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var n = i(25839),
                s = i(33660),
                r = i(74631),
                a = i(39004),
                l = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                _ = i(42190);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, p] = (0, r.useState)(!1),
                    { formatMessage: g } = (0, a.A)();
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, n.jsx)(u.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let r = { ...(0, s.HO)(e), url: e.url, isLiked: !e.isLiked };
                    p(!0);
                    let a = await e.toggleLike();
                    (p(!1),
                        a === l.f.OK
                            ? i((0, n.jsx)(_.T, { playlist: r }), { containerId: o.u.INFO })
                            : i((0, n.jsx)(u.h, { error: g({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, m, e, g, i]);
            };
        },
        63149: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var n = i(25839),
                s = i(53712),
                r = i(35015),
                a = i(3163);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, n.jsx)(a.O, {
                    closeToast: i,
                    entityVariant: r.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: s.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        64715: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => L });
            var n = i(25839),
                s = i(82298),
                r = i(88204),
                a = i(74631),
                l = i(39004),
                o = i(8487);
            i(93588);
            var c = i(4071),
                d = i(66738),
                u = i(4254),
                _ = i(67379),
                m = i(44031),
                p = i(87277),
                g = i(59450),
                y = i(84e3),
                v = i(97952),
                h = i(89192),
                T = i(53712),
                x = i(27954),
                A = i(44806),
                E = i(15270),
                k = i(23818),
                P = i(85686);
            let C = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var b = i(27990),
                I = i.n(b);
            let N = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { slam: r } = (0, x.g)(),
                    { contentRef: a } = (0, h.g)(),
                    l = (0, P.Z)(T.Z.mymusicDownloadsTracks.href);
                return (0, n.jsxs)('div', {
                    className: (0, s.$)(I().root, t),
                    children: [
                        i &&
                            (0, n.jsx)(E.L, { withBackwardFallback: '/', className: (0, s.$)(I().navigation, { [I().navigation_desktop]: !a }), withForwardControl: !1 }),
                        (0, n.jsxs)('div', {
                            className: (0, s.$)(I().content, { [I().content_shrink]: !i }),
                            children: [
                                (0, n.jsx)(k._V, { className: I().image, src: C.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, n.jsxs)('div', {
                                    className: I().message,
                                    children: [
                                        (0, n.jsx)(u.DZ, {
                                            className: I().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, n.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, n.jsx)(u.HL, {
                                            className: I().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                r.hasDownloadedTracks &&
                                    (0, n.jsx)(c.$, {
                                        className: I().button,
                                        onClick: l,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, n.jsx)(u.HL, {
                                            className: I().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, n.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var S = i(68854),
                f = i.n(S);
            let L = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: r } = (0, l.A)(),
                    k = (0, a.useContext)(x.P),
                    P = null == k ? void 0 : k.experiments.checkExperiment(A.z.WebNextUnstableMusicScreen, 'on'),
                    C = r(P ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, g.st)(),
                        { hash: i } = (0, g.gf)(),
                        { pageId: n } = (0, v.$)(),
                        s = (0, y.U)();
                    (0, a.useEffect)(() => {
                        if (!t || !i || !n) return;
                        let r = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: n,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: s,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, p.z5)(t.evgenInstance, r);
                    }, [t, e, i, n, s]);
                })(C);
                let { sendRefreshEvent: b } = (function () {
                        let e = (0, g.st)(),
                            { hash: t } = (0, g.gf)(),
                            { pageId: i } = (0, v.$)(),
                            n = (0, y.U)();
                        return {
                            sendRefreshEvent: (0, a.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let s = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                s && (0, p.bv)(e.evgenInstance, s);
                            }, [e, t, i, n]),
                        };
                    })(),
                    I = (0, a.useCallback)(() => {
                        (b(), (window.location.href = T.Z.main.href));
                    }, [b]),
                    { contentRef: S } = (0, h.g)();
                return P
                    ? (0, n.jsx)(N, { className: t, withBackwardControl: i })
                    : (0, n.jsxs)('div', {
                          className: (0, s.$)(f().root, t),
                          children: [
                              i &&
                                  (0, n.jsx)(E.L, {
                                      withBackwardFallback: '/',
                                      className: (0, s.$)(f().navigation, { [f().navigation_desktop]: !S }),
                                      withForwardControl: !1,
                                  }),
                              (0, n.jsxs)('div', {
                                  className: (0, s.$)(f().content, { [f().content_shrink]: !i }),
                                  children: [
                                      (0, n.jsx)(d.I, { className: f().icon, variant: 'attention', size: 'xxl' }),
                                      (0, n.jsx)(u.DZ, { className: (0, s.$)(f().title, f().important), variant: 'h3', size: 'xs', children: C }),
                                      (0, n.jsxs)(u.HL, {
                                          className: (0, s.$)(f().text, f().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, n.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, n.jsx)(c.$, {
                                          onClick: I,
                                          className: f().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, n.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, n.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        65078: (e) => {
            e.exports = { root: 'PostShimmer_root__MlLkY' };
        },
        65596: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => n });
            let n = (e) => {
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
            i.d(t, { e: () => n });
            let n = (e) => ({ uri: e.uri, color: e.color });
        },
        75501: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { S: () => n }),
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
                })(n || (n = {})));
        },
        76481: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            class n extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: s = {}, ...r } = t,
                        a = e || 'Internal error';
                    (super(a, r), (this.message = a), (this.code = i), (this.data = s), (this.stack = Error(a).stack), Object.setPrototypeOf(this, n.prototype));
                }
            }
            class s extends n {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        77920: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { X: () => n }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(n || (n = {})));
        },
        80477: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => a });
            var n = i(25839),
                s = i(35015),
                r = i(10546);
            let a = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, n.jsx)(r.k, {
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
            var n = i(25839),
                s = i(88204),
                r = i(84059),
                a = i(74631),
                l = i(89288),
                o = i(36432),
                c = i(94421),
                d = i(99989),
                u = i(27954),
                _ = i(83382);
            (0, s.eO)(!1);
            let m = (0, a.createContext)(null),
                p = (e) => {
                    let { children: t, store: i, storeKey: s } = e,
                        r = (0, a.useMemo)(() => ({ store: i, storeKey: s }), [i, s]);
                    return (0, n.jsx)(m.Provider, { value: r, children: t });
                },
                g = (e) => {
                    let { nonce: t, patchKey: i, patchesRef: s } = e;
                    return (
                        (0, r.useServerInsertedHTML)(() => {
                            let e = s.current;
                            return ((s.current = []), 0 === e.length)
                                ? null
                                : (0, n.jsx)('script', {
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
                            let n = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[i]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[i], n);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: r, nonce: a } = e,
                                l = (0, _.Y)(),
                                o = (0, u.g)(),
                                { store: m, patchesRef: y } = (0, d.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: s,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(g, { nonce: a, patchKey: i, patchesRef: y }), (0, n.jsx)(p, { store: m, storeKey: i, children: r })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, a.useContext)(m);
                if (!i || i.storeKey !== e) {
                    var n;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (n = null == i ? void 0 : i.storeKey) ? n : 'null', expectedStoreKey: e },
                    });
                }
                return i.store;
            }
        },
        81024: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => s });
            var n = i(25895);
            let s = (e) => (0, n.u)('/album/:albumId', { params: { albumId: e } });
        },
        82401: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => n });
            var n = (function (e) {
                return ((e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e);
            })({});
        },
        82706: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            let n = {
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
            i.d(t, { a: () => z });
            var n = i(25839),
                s = i(82298),
                r = i(88204),
                a = i(74631),
                l = i(39004),
                o = i(44031),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                _ = i(49656),
                m = i(51246),
                p = i(66738),
                g = i(86869),
                y = i(4254),
                v = i(1797),
                h = i(7361),
                T = i(90613),
                x = i(79367),
                A = i(29481),
                E = i(47009),
                k = i(34159),
                P = i(52512),
                C = i(30290),
                b = i(61561),
                I = i(85686),
                N = i(85743),
                S = i(50209),
                f = i(27954),
                L = i(6323),
                O = i(64720),
                j = i(97522),
                R = i(41580),
                K = i(49438),
                U = i(71996),
                M = i(78437),
                D = i(21971),
                w = i(13936),
                B = i.n(w);
            let z = (0, r.PA)((e) => {
                let { artist: t, className: i, children: r, contentLinesCount: w, topTitleElement: z, bottomTitleElement: F } = e,
                    { ref: W, intersectionPropertyId: H } = (0, P.n)(),
                    {
                        trailer: G,
                        user: Y,
                        paywall: { modal: V },
                    } = (0, f.g)(),
                    { from: X, utmLink: $ } = (0, C.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: q } = (0, l.A)(),
                    [Z, Q] = (0, a.useState)(!1),
                    [J, ee] = (0, a.useState)(!1),
                    [et, ei] = (0, a.useState)(!1),
                    { sendLikeSearchFeedback: en, sendNavigateSearchFeedback: es, sendPlaySearchFeedback: er } = (0, N.z)(),
                    ea = (0, A.N)(),
                    el = (0, E.b)(),
                    eo = (0, h.K)(t),
                    ec = (0, T.A)(t),
                    { id: ed, name: eu, coverUri: e_, isLiked: em } = t,
                    ep = (0, I.Z)(t.url),
                    [eg, ey] = (0, a.useState)(!1),
                    ev = (0, k.F)(),
                    eh = (0, x.P)(),
                    eT = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eh())) return void e.preventDefault();
                        (G.openArtistTrailer(t.id), ev(o.DomainObjectType.Artist, t.id));
                    }),
                    ex = (0, a.useMemo)(() => {
                        let e = q({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = em ? q({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, em, q]),
                    { isPlaying: eA, togglePlay: eE } = (0, S.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: X, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    ek = (0, v.S)({ artist: t, callback: ep }),
                    eP = (0, v.S)({ artist: t, callback: eE }),
                    eC = (0, u.c)((e) => {
                        (null == es || es(), ea({ to: o.AppScreen.ArtistScreen }), ek(e));
                    }),
                    eb = (0, b.N)(),
                    eI = (0, u.c)(() => {
                        if (!eh()) {
                            if (eb) return void V.open();
                            (Z || eA || (Q(!0), null == er || er()), eP(), el(!eA));
                        }
                    }),
                    eN = (0, u.c)(() => {
                        (J || em || (ee(!0), null == en || en()), eo());
                    }),
                    eS = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    ef = (0, u.c)((e) => {
                        (ei(e), ey(e));
                    }),
                    eL = (0, a.useMemo)(
                        () =>
                            (0, n.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: ef,
                                    open: et,
                                    onClick: eS,
                                    className: (0, s.$)(B().menuButton, B().control),
                                    size: 's',
                                    icon: (0, n.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eS, ef, et],
                    ),
                    eO = (0, a.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, n.jsx)(
                                M.n,
                                {
                                    children: (0, n.jsx)(U.k, {
                                        className: (0, s.$)(B().trailerButton, B().control),
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
                            (0, n.jsx)(
                                R.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, s.$)(B().pinButton, B().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eR = (0, _.L)(() => {
                        if (t.isAvailable)
                            return (0, n.jsx)(
                                m.hg,
                                {
                                    isVisible: et || eg,
                                    className: B().controls,
                                    radius: 'round',
                                    playControl: (0, n.jsx)(
                                        K.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, s.$)(B().playButton, B().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eI,
                                            isPlaying: eA,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, n.jsx)(
                                        O.c,
                                        {
                                            className: (0, s.$)(B().likeButton, B().control),
                                            isLiked: em,
                                            onClick: eN,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !Y.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eL,
                                    pinControl: ej,
                                    trailerControl: eO,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eK = (0, a.useMemo)(
                        () =>
                            (0, n.jsx)(g.t, {
                                className: B().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, n.jsxs)('div', {
                                    className: B().coverBlock,
                                    onClick: eC,
                                    children: [
                                        (0, n.jsx)(L.B, {
                                            className: B().image,
                                            src: e_,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ex,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eR,
                                    ],
                                }),
                            }),
                        [eC, e_, ex, t.isAvailable, eR],
                    );
                return (0, n.jsx)(m.MN, {
                    ref: W,
                    className: (0, s.$)(B().root, i),
                    textPosition: 'center',
                    'aria-label': ex,
                    title: (0, n.jsxs)(n.Fragment, {
                        children: [
                            z,
                            (0, n.jsx)(y.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, n.jsx)(j.N, {
                                    className: B().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': ex,
                                    onClick: eC,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            F,
                        ],
                    }),
                    srTitle: (0, n.jsx)(j.N, { className: B().srTitleLink, href: t.url, onClick: eC, children: ex }),
                    'data-intersection-property-id': H,
                    contentLinesCount: w,
                    view: eK,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: r,
                });
            });
        },
        86064: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => n });
            var n = (function (e) {
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
            i.d(t, { A: () => _ });
            var n = i(25839),
                s = i(33660),
                r = i(74631),
                a = i(39004),
                l = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(80477);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, a.A)(),
                    [m, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, n.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (m) return;
                    let r = { ...(0, s.HO)(e), isPinned: !e.isPinned };
                    p(!0);
                    let a = await e.togglePin();
                    (p(!1),
                        a
                            ? i((0, n.jsx)(u.l, { artist: r }), { containerId: l.u.INFO })
                            : i((0, n.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, m, _, i]);
            };
        },
        91201: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => a });
            var n = i(28410),
                s = i(83772),
                r = i(45337);
            let a = (e) => {
                let t = ((e) => ({ ...(0, s.f)(e), artists: e.artists.map(r.G) }))(e);
                return (0, n.wg)(t);
            };
        },
        91626: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => s }), i(77920));
            var n = i(76481);
            class s extends n.m {
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
            i.d(t, { GX: () => r.G, X1: () => n.X, m5: () => s.m });
            var n = i(77920),
                s = i(76481),
                r = i(91626);
            i(95919);
        },
        95919: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { Z: () => n }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(n || (n = {})));
        },
        96692: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => r });
            var n = i(28410),
                s = i(45337);
            let r = (e) => {
                let t = (0, s.G)(e);
                return (0, n.wg)(t);
            };
        },
        97852: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => et }));
            var n,
                s = i(25839),
                r = i(84059),
                a = i(74631),
                l = i(80499),
                o = i(82706),
                c = i(28410),
                d = i(93690);
            !(function (e) {
                ((e.ALBUMS = 'albums'), (e.ARTISTS = 'artists'), (e.PLAYLISTS = 'playlists'));
            })(n || (n = {}));
            var u = i(91201),
                _ = i(55180),
                m = i(42546),
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
                            promotionType: c.gK.maybeNull(c.gK.enumeration(Object.values(n))),
                            artists: c.gK.maybe(c.gK.array(g.P)),
                            albums: c.gK.maybe(c.gK.array(_.J)),
                            playlists: c.gK.maybe(c.gK.array(m.I)),
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
                                { feedResource: n, modelActionsLogger: s } = (0, c._$)(e);
                            if (e.loadingState !== v.G.PENDING)
                                try {
                                    e.loadingState = v.G.PENDING;
                                    let t = yield n.getPromotionsById({ promoId: i });
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
                x = { loadingState: v.G.IDLE },
                { pageStoreProvider: A } = (0, l.W)({ createStore: (e) => T.create(x, e), patchKey: o.n.POST });
            var E = i(82298),
                k = i(88204),
                P = i(13833),
                C = i(23976),
                b = i(4254),
                I = i(64715),
                N = i(1407),
                S = i(20258),
                f = i(10322),
                L = i(21784),
                O = i(89192),
                j = i(30716),
                R = i(10603),
                K = i(19412),
                U = i(65078),
                M = i.n(U);
            let D = () => {
                let e = Array.from({ length: 20 }, (e, t) => {
                    let i = void 0 === e ? t : ''.concat(t, '-').concat(String(e));
                    return (0, s.jsx)(K.V, { isActive: !0 }, i);
                });
                return (0, s.jsx)('div', { className: M().root, children: e });
            };
            var w = i(90462),
                B = i.n(w),
                z = i(76939),
                F = i(27393),
                W = i.n(F);
            let H = (0, k.PA)((e) => {
                let { albums: t = [] } = e;
                return (0, s.jsx)('div', {
                    className: W().root,
                    children: (0, s.jsx)('div', {
                        className: W().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: t.map((e) => (0, s.jsx)(z.a, { className: W().item, album: e, contentLinesCount: 3 }, e.id)),
                    }),
                });
            });
            var G = i(84058),
                Y = i(60407),
                V = i.n(Y);
            let X = (0, k.PA)((e) => {
                let { artists: t = [] } = e;
                return (0, s.jsx)('div', {
                    className: V().root,
                    children: (0, s.jsx)('div', {
                        className: V().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: t.map((e) => (0, s.jsx)(G.a, { className: V().item, artist: e, contentLinesCount: 3 }, e.id)),
                    }),
                });
            });
            var $ = i(41707),
                q = i(28915),
                Z = i.n(q);
            let Q = (0, k.PA)((e) => {
                    let { playlists: t = [] } = e;
                    return (0, s.jsx)('div', {
                        className: Z().root,
                        children: (0, s.jsx)('div', {
                            className: Z().content,
                            'aria-labelledby': 'post-page-header',
                            tabIndex: 0,
                            children: t.map((e) => (0, s.jsx)($.B, { className: Z().item, playlist: e, contentLinesCount: 3 }, e.id)),
                        }),
                    });
                }),
                J = (0, k.PA)((e) => {
                    let { promoId: t } = e,
                        i = (0, l.s)(o.n.POST),
                        c = (0, L.W)(),
                        { contentScrollRef: d, setContentScrollRef: u } = (0, O.g)();
                    (i.isNotFound && (0, r.notFound)(), (0, j.J)(i.isResolved));
                    let _ = (0, a.useMemo)(() => {
                        if (i.isLoading) return (0, s.jsx)(D, {});
                        switch (i.promotionType) {
                            case n.ARTISTS:
                                return (0, s.jsx)(X, { artists: i.artists });
                            case n.ALBUMS:
                                return (0, s.jsx)(H, { albums: i.albums });
                            case n.PLAYLISTS:
                                return (0, s.jsx)(Q, { playlists: i.playlists });
                            default:
                                (0, r.notFound)();
                        }
                    }, [i.albums, i.artists, i.isLoading, i.playlists, i.promotionType]);
                    return (t && i.isNeededToLoad && (0, a.use)(i.getData({ promoId: t })), i.isSomethingWrong)
                        ? (0, s.jsx)(I.SomethingWentWrong, {})
                        : (0, s.jsx)(f.n, {
                              pageId: S._Q.POST,
                              children: (0, s.jsx)(N.h, {
                                  scrollElement: d,
                                  outerTitle: i.title || void 0,
                                  children: (0, s.jsxs)('div', {
                                      className: B().root,
                                      children: [
                                          (0, s.jsx)(R.Y, {
                                              variant: R.V.TEXT,
                                              withForwardControl: !1,
                                              withBackwardControl: c.canBack,
                                              children: i.title
                                                  ? (0, s.jsx)(b.DZ, { id: 'post-header', variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: i.title })
                                                  : (0, s.jsx)(C.W, { className: B().shimmerTitle, radius: 'l' }),
                                          }),
                                          (0, s.jsx)(P.N, {
                                              containerClassName: (0, E.$)(B().scrollContainer, B().important),
                                              className: B().scrollableContainer,
                                              ref: u,
                                              children: (0, s.jsx)('div', { className: B().container, children: _ }),
                                          }),
                                      ],
                                  }),
                              }),
                          });
                }),
                ee = () => {
                    let e = (0, L.W)();
                    return (0, s.jsx)(N.h, {
                        scrollElement: null,
                        children: (0, s.jsxs)('div', {
                            className: B().root,
                            children: [
                                (0, s.jsx)(R.Y, {
                                    variant: R.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, s.jsx)(C.W, { className: B().shimmerTitle, radius: 'l' }),
                                }),
                                (0, s.jsx)(P.N, {
                                    containerClassName: (0, E.$)(B().scrollContainer, B().important),
                                    className: B().scrollableContainer,
                                    children: (0, s.jsx)('div', { className: B().container, children: (0, s.jsx)(D, {}) }),
                                }),
                            ],
                        }),
                    });
                },
                et = () => {
                    let e = (0, r.useSearchParams)().get('promoId');
                    return (
                        e || (0, r.notFound)(),
                        (0, s.jsx)(A, { children: (0, s.jsx)(a.Suspense, { fallback: (0, s.jsx)(ee, {}), children: (0, s.jsx)(J, { promoId: e }) }) })
                    );
                };
        },
        98436: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { _: () => n }),
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
                })(n || (n = {})));
        },
        99725: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => n });
            let n = 100;
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 7055, 3112, 945, 7339, 740, 6287, 2121, 3472, 3560, 5372, 6706, 4771, 1311, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1251, 1817, 6215, 2038,
                4163, 3246, 7848, 3482, 6680, 2247, 7856, 8836, 820, 4434, 8649, 862, 6361, 5898, 9333, 4475, 5056, 7358,
            ],
            () => e((e.s = 59394)),
        ),
            (_N_E = e.O()));
    },
]);
