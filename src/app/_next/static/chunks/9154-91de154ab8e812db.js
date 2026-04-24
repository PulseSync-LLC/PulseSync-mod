(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9154],
    {
        2: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => l, e: () => n });
            var r = i(20073),
                a = i(85906);
            let n = (e) => {
                    if (!e) return a.cp.TRACK;
                    switch (e.type) {
                        case r.S.PODCAST:
                            return a.cp.PODCAST_EPISODE;
                        case r.S.AUDIOBOOK:
                            return a.cp.AUDIOBOOK_EPISODE;
                        default:
                            return a.cp.TRACK;
                    }
                },
                l = (e) => n(e);
        },
        67: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { Q: () => r }),
                (function (e) {
                    (e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic');
                })(r || (r = {}));
        },
        462: (e, t, i) => {
            'use strict';
            i.d(t, { ArtistStats: () => c });
            var r = i(62936),
                a = i(79950),
                n = i(44020),
                l = i(26731),
                s = i(8669),
                o = i(20418),
                u = i(45132),
                d = i.n(u);
            let c = (e) => {
                let { lastMonthListeners: t, lastMonthListenersDelta: i } = e,
                    u = (0, n.useMemo)(() => {
                        let e = (0, r.jsx)('br', {});
                        if (0 === i) return (0, r.jsx)(l.A, { id: 'artist.stats-same-listeners-per-month', values: { br: e } });
                        let t = (0, r.jsx)(o.Caption, {
                            variant: 'span',
                            className: (0, a.$)({ [d().statsNumber_positive]: i > 0, [d().statsNumber_negative]: i < 0 }),
                            size: 'l',
                            weight: 'medium',
                            children: Math.abs(i).toLocaleString('ru'),
                        });
                        return i > 0
                            ? (0, r.jsx)(l.A, { id: 'artist.stats-more-listeners-per-month', values: { number: t, br: e, nbsp: '\xa0' } })
                            : (0, r.jsx)(l.A, { id: 'artist.stats-less-listeners-per-month', values: { number: t, br: e, nbsp: '\xa0' } });
                    }, [i]);
                return (0, r.jsxs)('div', {
                    ...(0, s.Am)(s.e8.content.ARTIST_ABOUT_STATS),
                    children: [
                        (0, r.jsx)(o.Caption, {
                            variant: 'div',
                            className: d().title,
                            size: 'l',
                            weight: 'medium',
                            ...(0, s.Am)(s.e8.content.ARTIST_ABOUT_STATS_TITLE),
                            children: (0, r.jsx)(l.A, { id: 'artist.stats-listeners-per-month' }),
                        }),
                        (0, r.jsx)(o.Heading, {
                            size: 'xxl',
                            variant: 'div',
                            className: d().count,
                            ...(0, s.Am)(s.e8.content.ARTIST_ABOUT_STATS_COUNT),
                            children: t.toLocaleString('ru'),
                        }),
                        (0, r.jsx)(o.Caption, {
                            variant: 'div',
                            className: d().stats,
                            size: 'l',
                            weight: 'medium',
                            ...(0, s.Am)(s.e8.content.ARTIST_ABOUT_STATS_DYNAMIC),
                            children: u,
                        }),
                    ],
                });
            };
        },
        1624: (e, t, i) => {
            'use strict';
            i.d(t, { useOnPinClick: () => d });
            var r = i(62936),
                a = i(16264),
                n = i(44020),
                l = i(47480),
                s = i(42561),
                o = i(85906);
            let u = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, r.jsx)(o.k4, {
                        closeToast: i,
                        entityVariant: o.cp.ARTIST,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        entityTitle: t.name,
                        isPinned: t.isPinned,
                        radius: 'round',
                    });
                },
                d = (e) => {
                    let { user: t } = (0, s.Pjs)(),
                        { notify: i } = (0, s.lkh)(),
                        { formatMessage: d } = (0, l.A)(),
                        [c, m] = (0, n.useState)(!1);
                    return (0, n.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(o.hT, { error: d({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s.uQT.ERROR });
                        if (c) return;
                        let n = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                        m(!0);
                        let l = await e.togglePin();
                        m(!1),
                            l
                                ? i((0, r.jsx)(u, { artist: n }), { containerId: s.uQT.INFO })
                                : i((0, r.jsx)(o.hT, { error: d({ id: 'error-messages.error-during-action' }) }), { containerId: s.uQT.ERROR });
                    }, [e, t.isAuthorized, c, d, i]);
                };
        },
        2749: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a });
            var r = i(36547);
            function a(e) {
                return (null == e ? void 0 : e.data.type) === r.R.Music;
            }
        },
        3873: (e, t, i) => {
            'use strict';
            i.d(t, { useProgressTimeNonMusic: () => n });
            var r = i(47480),
                a = i(42561);
            let n = (e, t) => {
                let { formatMessage: i } = (0, r.A)(),
                    { hours: n, minutes: l, seconds: s } = (0, a.e6v)(e),
                    { hours: o, minutes: u, seconds: d } = (0, a.e6v)(t);
                return i(
                    { id: 'non-music.non-music-progress' },
                    { progress: Math.round((e / t) * 100), beginHours: n, beginMinutes: l, beginSeconds: s, endHours: o, endMinutes: u, endSeconds: d },
                );
            };
        },
        5374: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        6383: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { O: () => r }),
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
                })(r || (r = {}));
        },
        9451: (e, t, i) => {
            'use strict';
            i.d(t, { NotificationAddToPlaylist: () => p });
            var r = i(62936),
                a = i(19718),
                n = i(44020),
                l = i(26731),
                s = i(59935),
                o = i(20418),
                u = i(42561),
                d = i(85906),
                c = i(30269),
                m = i.n(c);
            let p = (0, a.PA)((e) => {
                let { entityTitle: t, entityVariant: i, entityCoverUri: a, playlist: c, closeToast: p } = e,
                    { fullscreenPlayer: _ } = (0, u.Pjs)(),
                    v = (0, s.c)(() => {
                        _.modal.isOpened && _.modal.close();
                    }),
                    f = (0, n.useMemo)(() => {
                        let e,
                            a = {
                                trackName: (0, r.jsxs)(o.Caption, {
                                    className: m().title,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    lineClamp: 1,
                                    children: ['\xa0', t, '\xa0'],
                                }),
                                playlistName: (0, r.jsx)(d.N_, {
                                    className: m().link,
                                    href: c.url,
                                    onClick: v,
                                    children: (0, r.jsxs)(o.Caption, {
                                        className: m().playlistTitle,
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        lineClamp: 1,
                                        children: ['\xa0', c.title, '\xa0'],
                                    }),
                                }),
                            };
                        switch (i) {
                            case d.cp.PODCAST_EPISODE:
                                e = (0, r.jsx)(l.A, { id: 'notifications-info.added-podcast-episode-to-playlist', values: a });
                                break;
                            case d.cp.AUDIOBOOK_EPISODE:
                                e = (0, r.jsx)(l.A, { id: 'notifications-info.added-audiobook-episode-to-playlist', values: a });
                                break;
                            default:
                                e = (0, r.jsx)(l.A, { id: 'notifications-info.added-track-to-playlist', values: a });
                        }
                        return (0, r.jsx)(o.Caption, { className: m().message, variant: 'div', type: 'controls', size: 'm', lineClamp: 1, children: e });
                    }, [t, i, v, c.title, c.url]);
                return (0, r.jsx)(d.$W, {
                    closeToast: p,
                    message: f,
                    cover: (0, r.jsx)(d.BW, { className: m().image, src: a, withAvatarReplace: !0, size: 100, fit: 'cover', alt: t }),
                    coverRadius: 's',
                });
            });
        },
        11503: (e, t, i) => {
            'use strict';
            i.d(t, { useOnModifyPlayQueue: () => d });
            var r = i(62936),
                a = i(59935),
                n = i(46663),
                l = i(42561),
                s = i(86482),
                o = i(69804),
                u = i(2);
            function d(e, t, i) {
                let { notify: d } = (0, l.lkh)(),
                    { fullscreenPlayer: c } = (0, l.Pjs)(),
                    m = (0, l.eGp)(),
                    p = (0, u.b)(e);
                return (0, a.c)(() => {
                    if (!e) return;
                    let a = t === o.N.LAST || t === o.N.NEXT,
                        u = a ? i : void 0,
                        _ = a ? void 0 : i;
                    switch (t) {
                        case o.N.LAST:
                            null == m || m.injectLast({ entitiesData: [{ type: n.z4.Unloaded, meta: { id: e.entityId } }], sourceContextData: u });
                            break;
                        case o.N.NEXT:
                            null == m || m.injectNext({ entitiesData: [{ type: n.z4.Unloaded, meta: { id: e.entityId } }], sourceContextData: u });
                            break;
                        case o.N.REMOVE:
                            _ && (null == m || m.removeAndLoadEntities({ positions: _ }));
                            break;
                        case o.N.HIDE:
                            (null == _ ? void 0 : _.length) && (null == m || m.hide({ positions: _ }));
                    }
                    let v = c.modal.isOpened ? l.uQT.FULLSCREEN_INFO : l.uQT.INFO;
                    d((0, r.jsx)(s.NotificationPlayQueue, { entityVariant: p, variant: t, entityTitle: e.title, coverUri: e.coverUri }), { containerId: v });
                });
            }
        },
        12052: (e) => {
            e.exports = { root: 'ArtistsMenu_root__j5U2g', menuList: 'ArtistsMenu_menuList__4v6Uo', menuItem: 'ArtistsMenu_menuItem__lievm' };
        },
        14144: (e, t, i) => {
            'use strict';
            i.d(t, { useOnLikeClick: () => c });
            var r = i(62936),
                a = i(16264),
                n = i(44020),
                l = i(47480),
                s = i(21192),
                o = i(42561),
                u = i(85906);
            let d = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(u.OM, {
                        entityVariant: u.cp.PLAYLIST,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        closeToast: i,
                        coverUri: t.coverUri,
                    });
                },
                c = (e) => {
                    let { user: t } = (0, o.Pjs)(),
                        { notify: i } = (0, o.lkh)(),
                        [c, m] = (0, n.useState)(!1),
                        { formatMessage: p } = (0, l.A)();
                    return (0, n.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.hT, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.uQT.ERROR });
                        if (c) return;
                        let n = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                        m(!0);
                        let l = await e.toggleLike();
                        m(!1),
                            l === s.f.OK
                                ? i((0, r.jsx)(d, { playlist: n }), { containerId: o.uQT.INFO })
                                : i((0, r.jsx)(u.hT, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.uQT.ERROR });
                    }, [t.isAuthorized, c, e, p, i]);
                };
        },
        14398: (e) => {
            e.exports = { message: 'EditorsFeaturesFailedNotification_message__EIgMe' };
        },
        14848: (e, t, i) => {
            'use strict';
            i.d(t, { useArtistsMenu: () => n });
            var r = i(44020),
                a = i(59935);
            let n = (e) => {
                let { ref: t } = e,
                    [i, n] = (0, r.useState)(!1),
                    [l, s] = (0, r.useState)(null);
                return {
                    isArtistsMenuOpen: i,
                    artistsMenuPosition: l,
                    handleArtistsMenuClick: (0, a.c)((e) => {
                        if (e.detail > 0) {
                            let { clientX: t, clientY: i } = e;
                            s({ getBoundingClientRect: () => new DOMRect(t, i, 0, 0) });
                        } else s(t.current);
                        n(!0);
                    }),
                    handleArtistsMenuOpenChange: (0, a.c)((e) => {
                        n(e), e || s(null);
                    }),
                };
            };
        },
        16258: (e, t, i) => {
            'use strict';
            i.d(t, { MN: () => d, hg: () => u });
            var r,
                a = i(44020),
                n = {
                    5881: (e, t, i) => {
                        function r() {
                            for (var e, t, i = 0, r = ''; i < arguments.length; )
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            r,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (r = e(t[i])) && (a && (a += ' '), (a += r));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        i.r(t), i.d(t, { clsx: () => r, default: () => a });
                        let a = r;
                    },
                    4881: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => r });
                        let r = {
                            root: 'KL50tMDvfAdw_9MzcVht',
                            bottom: 'bL0wE1Bui8zpIZbvMVL3',
                            top: 'P6gOmyFtXyetUz0dqhF3',
                            bottom_left: 'RvWjZle1erRBXzJEF9Zj',
                            bottom_right: 'bBh7lvgdfF7bqNqlK78Q',
                            label: 'FgncHYHPDU14dLddn0wF',
                            controls: 'PBhQ1krUFiAybu_BS2YE',
                            controls_radius_default: 'cSCPJSa6Lx6OnpM4ljX9',
                            controls_radius_round: 'kHUOlGxOaBwL4P3jEBXU',
                            controls_visible: 'QZC5vQL9p11QsEkdkTtZ',
                        };
                    },
                    4247: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => r });
                        let r = {
                            root: 'laBJlJAaqEVS0i_4Ot3l',
                            titleContainer: 'LmhA6nlLyzxwYIX31gYa',
                            wrapper: 'IO4kvpDGNI2J0CHwcKSf',
                            content: 'l8SktNpJd30JWp1owp_b',
                            content_left: 'Mb33JzAWx9EjbQAeScFt',
                            description: 'kbcBH9meMfY6Du_xQNnI',
                            content_center: 'Dp41JRuLGzwV3MHBYHMC',
                            content_right: 'eOsuNCgUirwAw16iUKLu',
                            title: 'FAmeEGy52GX1k0xZuPDn',
                            content_linesCount_1: 'Cfj1Wkh1bvQMCfk1mZwK',
                            content_linesCount_2: 'lV4OXsCTURC5K1s9Q5mx',
                            content_linesCount_3: 'PVBDIXF2RTUThmbNT9sV',
                            content_linesCount_4: 'ND4XIwkIYtNoU89EOISr',
                        };
                    },
                    9474: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => r });
                        let r = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7238: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => r });
                        let r = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    3641: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => r });
                        let r = {
                            root_controls_xxs: 'tRaaBpDMg9Qu8v6gKjtn',
                            root_entity_xxs: 'M9zvtlcpLUVn6DKdcHhj',
                            root_text_xxs: 'ln0PYYwDmFnfYxCDJsFU',
                            root_controls_xs: 'n5AeWEsJC3_AYXcbK4Lt',
                            root_entity_xs: '__hrMKGmNbw54T54IUyh',
                            root_text_xs: 'SehSa7OyRpC2nzYTVb2Q',
                            root_controls_s: '_oBLf5gprWsKjCw4Ce58',
                            root_entity_s: 'mxSPe5xpZnie9gpIqacd',
                            root_text_s: 'Ai2iRN9elHpk_u5splD6',
                            root_controls_m: 'tk7ahHRDYXJMMB879KUA',
                            root_entity_m: 'Z_WIr2W8JU4MPQek3hgR',
                            root_text_m: 'g3qWNP6xl__7qxNmtrvd',
                            root_controls_l: 'grvxapJE3vGArOKDWf6n',
                            root_entity_l: 'Esj5A1UeSi4xV4tZ839D',
                            root_text_l: 'V3WU123oO65AxsprotU9',
                            root_weight_normal: 'ZYV27jeWd30QDXu4GhaH',
                            root_weight_medium: '_3_Mxw7Si7j2g4kWjlpR',
                            root_weight_bold: 'Vi7Rd0SZWqD17F0872TB',
                        };
                    },
                    5153: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => r });
                        let r = {
                            root_size_xs: 'qJJ288377iHlWN_RXeEE',
                            root_size_s: '_sd8Q9d_Ttn0Ufe4ISWS',
                            root_size_m: 'Ctk8dbecq31Qh7isOJPQ',
                            root_size_l: 'M_Djh6ppIkCO3A2k_BTA',
                            root_size_xl: 'dtxlzGQMPAbM2MEndXWX',
                            root_size_xxl: 'IUb9XLplTAoZqne9rNUL',
                            root_size_xxxl: 'ZYZamUwql_rfFR4RpI2B',
                            root_size_xxxxl: 'ZBZyxow5njdq8z5dnRPY',
                            root_size_xxxxxl: 'WdvQQNwdDNCdRSwRkAtT',
                            root_weight_bold: 'nSU6fV9y80WrZEfafvww',
                            root_weight_black: 'KBeGPPK4DinQzAP41Y_N',
                        };
                    },
                    5818: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => r });
                        let r = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var a = null;
                            if ((void 0 !== r && (a = '' + r), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var n in ((r = {}), t)) 'key' !== n && (r[n] = t[n]);
                            else r = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r);
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    5817: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0);
                        let a = i(4377),
                            n = i(5881),
                            l = i(9e3),
                            s = r(i(4881));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: i,
                                    likeControl: r,
                                    menuControl: o,
                                    pinControl: u,
                                    trailerControl: d,
                                    isVisible: c,
                                    radius: m = 'default',
                                    bottomContainerClassName: p,
                                    labelText: _,
                                } = e,
                                v = d || i,
                                f = o || r;
                            return (0, a.jsxs)('div', {
                                className: (0, n.clsx)(
                                    s.default.root,
                                    s.default.controls,
                                    { [s.default.controls_visible]: c },
                                    s.default['controls_radius_'.concat(m)],
                                    t,
                                ),
                                children: [
                                    (0, a.jsx)('div', { className: s.default.top, children: u }),
                                    (0, a.jsxs)('div', {
                                        className: (0, n.clsx)(s.default.bottom, p),
                                        children: [
                                            v && (0, a.jsxs)('div', { className: s.default.bottom_left, children: [d, i] }),
                                            f && (0, a.jsxs)('div', { className: s.default.bottom_right, children: [o, r] }),
                                        ],
                                    }),
                                    !!_ && (0, a.jsx)(l.Label, { className: s.default.label, children: _ }),
                                ],
                            });
                        };
                    },
                    440: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0);
                        let a = i(4377),
                            n = i(810),
                            l = i(5881),
                            s = i(2582),
                            o = i(3758),
                            u = r(i(4247)),
                            d = (e) => {
                                let {
                                    forwardRef: t,
                                    view: i,
                                    className: r,
                                    textPosition: n = 'left',
                                    contentLinesCount: d = 2,
                                    title: c,
                                    description: m,
                                    explicitMarkComponent: p,
                                    chart: _,
                                    children: v,
                                    srTitle: f,
                                    wrapperClassName: g,
                                    ...y
                                } = e;
                                return (0, a.jsxs)('div', {
                                    className: (0, l.clsx)(u.default.root, r),
                                    ref: t,
                                    ...y,
                                    children: [
                                        (0, a.jsx)(o.SROnly, { tabIndex: -1, children: null != f ? f : c }),
                                        (0, a.jsx)('div', { className: u.default.viewContainer, children: i }),
                                        (0, a.jsxs)('div', {
                                            className: (0, l.clsx)(u.default.wrapper, g),
                                            children: [
                                                _,
                                                (0, a.jsxs)('div', {
                                                    className: (0, l.clsx)(
                                                        u.default.content,
                                                        u.default['content_'.concat(n)],
                                                        u.default['content_linesCount_'.concat(d)],
                                                    ),
                                                    children: [
                                                        (0, a.jsxs)('div', {
                                                            className: u.default.titleContainer,
                                                            children: [
                                                                (0, a.jsx)(s.Caption, {
                                                                    className: u.default.title,
                                                                    variant: 'div',
                                                                    type: 'entity',
                                                                    size: 's',
                                                                    weight: 'medium',
                                                                    lineClamp: 2,
                                                                    children: c,
                                                                }),
                                                                p,
                                                            ],
                                                        }),
                                                        m,
                                                        v,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, n.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
                    },
                    2: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0);
                        let a = i(4377),
                            n = i(5881),
                            l = i(2582),
                            s = r(i(9474));
                        t.Label = (e) => {
                            let { children: t, className: i, size: r = 's', ...o } = e;
                            return (0, a.jsx)(l.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: r,
                                lineClamp: 1,
                                className: (0, n.clsx)(s.default.root, i),
                                ...o,
                                children: t,
                            });
                        };
                    },
                    9e3: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0);
                        var r = i(2);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return r.Label;
                            },
                        });
                    },
                    2865: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0);
                        let a = i(4377),
                            n = i(5881),
                            l = i(810),
                            s = r(i(7238));
                        t.SROnly = (e) => {
                            let { className: t, focusable: i, children: r, ...o } = e,
                                u = (0, n.clsx)(s.default.root, { [s.default.focusable]: i }, t);
                            return (0, l.isValidElement)(r)
                                ? (0, l.cloneElement)(r, { ...o, className: (0, n.clsx)(u, r.props.className) })
                                : (0, a.jsx)('span', { className: u, ...o, children: r });
                        };
                    },
                    3758: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0);
                        var r = i(2865);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return r.SROnly;
                            },
                        });
                    },
                    7743: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0);
                        let a = i(4377),
                            n = i(5881),
                            l = i(810),
                            s = i(4721),
                            o = r(i(3641));
                        (t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: i, type: r = 'text', size: l = 's', className: u, children: d, weight: c = 'medium', ...m } = e;
                            return (0, a.jsx)(s.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, n.clsx)(o.default.root, o.default['root_'.concat(r, '_').concat(l)], o.default['root_weight_'.concat(c)], u),
                                ...m,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, l.forwardRef)((e, i) => (0, a.jsx)(t.CaptionComponent, { forwardRef: i, ...e })));
                    },
                    404: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0);
                        let a = i(4377),
                            n = i(5881),
                            l = i(810),
                            s = i(4721),
                            o = r(i(5153));
                        (t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: i, weight: r = 'bold', size: l = 's', className: u, children: d, ...c } = e;
                            return (0, a.jsx)(s.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, n.clsx)(o.default.root, o.default['root_size_'.concat(l)], o.default['root_weight_'.concat(r)], u),
                                ...c,
                                children: d,
                            });
                        }),
                            (t.Heading = (0, l.forwardRef)((e, i) => (0, a.jsx)(t.HeadingComponent, { forwardRef: i, ...e })));
                    },
                    4721: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0);
                        let a = i(4377),
                            n = i(5881),
                            l = i(810),
                            s = r(i(5818));
                        function o(e) {
                            let { forwardRef: t, style: i, className: r, children: l, variant: o, lineClamp: u, ...d } = e,
                                c = u && 'string' == typeof l ? l : void 0;
                            return (0, a.jsx)(o, {
                                style: { ...i, WebkitLineClamp: u },
                                ref: t,
                                title: c,
                                className: (0, n.clsx)(
                                    s.default.root,
                                    { [s.default.root_clamp]: u && u > 0, [s.default.root_clamp_oneline]: u && 1 === u, [s.default.root_clamp_multiline]: u && u > 1 },
                                    r,
                                ),
                                ...d,
                                children: l,
                            });
                        }
                        (t.TypographyComponent = o), (t.Typography = (0, l.forwardRef)((e, t) => (0, a.jsx)(o, { forwardRef: t, ...e })));
                    },
                    2582: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0);
                        var r = i(7743);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return r.Caption;
                            },
                        });
                        var a = i(404);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return a.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                l = {};
            function s(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var i = (l[e] = { exports: {} });
                return n[e].call(i.exports, i, i.exports, s), i.exports;
            }
            (s.d = (e, t) => {
                for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var o = {};
            (() => {
                Object.defineProperty(o, 'X$', { value: !0 }), (o.kk = o.m7 = void 0);
                var e = s(440);
                Object.defineProperty(o, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = s(5817);
                Object.defineProperty(o, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var u = o.kk,
                d = o.m7;
            o.X$;
        },
        16945: (e, t, i) => {
            'use strict';
            i.d(t, { useOnLikeClick: () => u });
            var r = i(62936),
                a = i(47480),
                n = i(59935),
                l = i(42561),
                s = i(85906),
                o = i(66776);
            let u = (e) => {
                let { user: t, fullscreenPlayer: i } = (0, l.Pjs)(),
                    { notify: u } = (0, l.lkh)(),
                    { formatMessage: d } = (0, a.A)(),
                    c = (0, o.f)();
                return (0, n.c)(async () => {
                    if (!e) return;
                    let a = i.modal.isOpened ? l.uQT.FULLSCREEN_INFO : l.uQT.INFO,
                        n = i.modal.isOpened ? l.uQT.FULLSCREEN_ERROR : l.uQT.ERROR;
                    return t.isAuthorized
                        ? c({ track: e, errorContainerId: n, infoContainerId: a })
                        : void u((0, r.jsx)(s.hT, { error: d({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n });
                });
            };
        },
        18099: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => u });
            var r,
                a = i(44020),
                n = {
                    5881: (e, t, i) => {
                        function r() {
                            for (var e, t, i = 0, r = ''; i < arguments.length; )
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            r,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (r = e(t[i])) && (a && (a += ' '), (a += r));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        i.r(t), i.d(t, { clsx: () => r, default: () => a });
                        let a = r;
                    },
                    1920: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => r });
                        let r = {
                            contentContainer: 'JjlbHZ4FaP9EAcR_1DxF',
                            contentContainer_block: 'iOlzvyUREgDkthkrx7Sf',
                            flexIcon: 'WsKeF73pWotx9W1tWdYY',
                            root: 'cpeagBA1_PblpJn8Xgtv',
                            root_withoutBorder: 'qU2apWBO1yyEK0lZ3lPO',
                            root_radius_xs: 'MmZbSs387gu2qrJ1lDWd',
                            root_radius_s: 'mlcrraysn7mW6xrBXSBF',
                            root_radius_m: 'dgV08FKVLZKFsucuiryn',
                            root_radius_l: 'S97_5dtzhpxo_amtfYRg',
                            root_radius_xl: 'nNBJnDHRlyLTniWosJhk',
                            root_radius_xxxl: 'zIMibMuH7wcqUoW7KH1B',
                            root_radius_round: 'uwk3hfWzB2VT7kE13SQk',
                            root_size: 'IlG7b1K0AD7E7AMx6F5p',
                            root_size_default: 'C_QGmfTz6UFX93vfPt6Z',
                            root_size_xxxs: 'eQt33MLDiQ6DRSuLaYEp',
                            root_size_xxs: 'oR11LfCBVqMbUJiAgknd',
                            root_size_xs: 'j1jXIVckFgZECecFzZMe',
                            root_size_s: 'WtFdWDF44egSVM_YiMUX',
                            root_size_m: 'Y2uqxoU7xa_AZ8FUCVOW',
                            root_size_l: 'SGYcNjvjmMsXeEVGUV2Z',
                            root_icon_left: 'kc5CjvU5hT9KEj0iTt3C',
                            root_icon_right: 'et24Jf7pT_X9Fvc7TznR',
                            root_primary: 'fXlFz1qMkliFUWOkHo8T',
                            root_primary_default: '_eTRQi5ADZCUvUKMZqJU',
                            ripple: 'spMT3NcRD9Yb0ntNaNct',
                            root_primary_outline: 'fCUSh2B0Ye9kEvceE8zc',
                            root_primary_text: 'qlPp6CSQQEMVZPqtqLiQ',
                            root_primary_withHover: 'KZF6_4K1p_Y_GMIAxaAn',
                            root_primary_withHover_default: 'rWukOKAJh5Ga7JuIp62L',
                            root_primary_withHover_outline: 'fdwWCJKgUqml5wNqrRcN',
                            root_primary_withHover_text: 'IgYbZLnYjW0nMahgpkus',
                            root_secondary: '_T4p_w41oaq6L4sztSdw',
                            root_secondary_default: 'iJVAJMgccD4vj4E4o068',
                            root_secondary_outline: 'pnM3iSP9keZOELI2oohr',
                            root_secondary_text: 'UDMYhpDjiAFT3xUx268O',
                            root_secondary_withHover: 'qUbrkhZIOVrvM0roV1QF',
                            root_secondary_withHover_default: 'nHWc2sto1C6Gm0Dpw_l0',
                            root_secondary_withHover_outline: 'i5WuBm5mfG0mflk_1jH_',
                            root_secondary_withHover_text: 'HbaqudSqu7Q3mv3zMPGr',
                            root_plus: 'ixLRsIJ2FvXO2k04n_QY',
                            root_plus_default: 'yRHwHzEGfDgRXGzYJqw2',
                            root_plus_outline: 'e777irPFmyQFFrURLF_U',
                            root_plus_text: 'vRqDhvmt3gt8TFp45_Zw',
                            root_plus_withHover: 'TZif6q3I2RwBEYXwK_iA',
                            root_plus_withHover_default: 'k3DhvmzpnM_Fb9oFdE4q',
                            root_plus_withHover_outline: 'RiDWYwGIxqbrUPR699DM',
                            root_plus_withHover_text: 'hC_mMCzWjkTn2j9xZzGc',
                            root_accent: 'jqD2jMT6n7F0WKyqwMsn',
                            root_accent_default: 'bDp0r9MtoYECZ8ObMoCh',
                            root_accent_outline: 'rXNyGp8NBAw2MUjACZNj',
                            root_accent_text: 'hmV4ERaXWAJc4uPLZL30',
                            root_accent_withHover: 'uKuxXu1N4TP5cWaEK5Ke',
                            root_accent_withHover_default: 't_hequUaUgAMhFuxizLb',
                            root_accent_withHover_outline: 'Oy9sPFTxNTo1_E29U4aF',
                            root_accent_withHover_text: 'LcKRSd3DLoh7k60Oqox8',
                            root_withActiveSpinner: 'nAGvO87rLs15SJgft6Hh',
                            block: 'BbCxxIjBGupN28bq2lSP',
                            icon: 'J9wTKytjOWG73QMoN5WP',
                            icon_position_left: 'elJfazUBui03YWZgHCbW',
                            icon_position_right: 'RBoEbyJKP5rEtLsXM1ji',
                            icon_withButtonSize: 'cE17_kCWJgx8kzQEkeVr',
                            spinnerContainer: 'STbBDGqYjUEcLuNvhu9w',
                        };
                    },
                    5682: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => r });
                        let r = {
                            root: 'rqUESGQ8jp3tbDawOzuG',
                            root_checked: 'GJh5PwV9GyFuKhlG6pQz',
                            icon: 'aw9IoPC0GuAC7Hmf825u',
                            icon_checked: 'KC8t9NStVmQ1_VY54KH4',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var a = null;
                            if ((void 0 !== r && (a = '' + r), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var n in ((r = {}), t)) 'key' !== n && (r[n] = t[n]);
                            else r = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r);
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    8796: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, i) {
                                let r = null != i ? i : e.currentTarget,
                                    a = document.createElement('span'),
                                    n = Math.max(r.clientWidth, r.clientHeight),
                                    l = n / 2,
                                    s = r.getBoundingClientRect(),
                                    o = 0 === e.clientX ? Math.round(s.width / 2) : e.clientX - s.left,
                                    u = 0 === e.clientY ? Math.round(s.height / 2) : e.clientY - s.top;
                                (a.style.width = ''.concat(n, 'px')),
                                    (a.style.height = ''.concat(n, 'px')),
                                    (a.style.left = 0 === e.clientX ? '0px' : ''.concat(o - l, 'px')),
                                    (a.style.top = ''.concat(u - l, 'px')),
                                    a.classList.add(t);
                                let d = r.getElementsByClassName(t)[0];
                                d && d.remove(), r.insertBefore(a, r.firstChild);
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
                    8216: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.getElementFromRefOrElement = t.createRipple = void 0);
                        var r = i(8796);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return r.createRipple;
                            },
                        });
                        var a = i(361);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return a.getElementFromRefOrElement;
                            },
                        });
                    },
                    8119: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0);
                        let a = i(4377),
                            n = i(810),
                            l = i(5881),
                            s = i(8216),
                            o = r(i(1920)),
                            u = (e) => {
                                let {
                                        forwardRef: t,
                                        isBlock: i,
                                        iconPosition: r = 'left',
                                        children: u,
                                        className: d,
                                        color: c = 'secondary',
                                        flexIcon: m,
                                        icon: p,
                                        spinner: _,
                                        role: v,
                                        onClick: f,
                                        radius: g = 'm',
                                        size: y,
                                        type: h = 'button',
                                        variant: A = 'default',
                                        withRipple: b = !0,
                                        withHover: x = !0,
                                        withBorder: k = !1,
                                        disabled: T,
                                        iconClassName: E,
                                        contentContainerClassName: I,
                                        ...C
                                    } = e,
                                    P = (0, n.useId)(),
                                    O = !n.Children.toArray(u).filter(Boolean).length,
                                    S = 'left' === r,
                                    L = null,
                                    R = (0, n.isValidElement)(_);
                                if (p) {
                                    var N, j;
                                    L = (0, n.cloneElement)(p, {
                                        className: (0, l.clsx)(
                                            o.default.icon,
                                            {
                                                [o.default['icon_position_'.concat(r)]]: r && !O,
                                                [o.default.icon_withButtonSize]: !(null == (N = p.props) ? void 0 : N.size),
                                            },
                                            null == (j = p.props) ? void 0 : j.className,
                                            E,
                                        ),
                                        key: P,
                                    });
                                }
                                let K = (0, n.useMemo)(() => (R ? (0, a.jsx)('div', { className: o.default.spinnerContainer, children: _ }) : null), [R, _]),
                                    M = (0, n.useCallback)(
                                        (e) => {
                                            R || (b && (0, s.createRipple)(e, o.default.ripple), null == f || f(e));
                                        },
                                        [R, f, b],
                                    );
                                return (0, a.jsx)('button', {
                                    ref: t,
                                    className: (0, l.clsx)(
                                        o.default.root,
                                        o.default['root_'.concat(c, '_').concat(A)],
                                        o.default['root_radius_'.concat(g)],
                                        o.default.root_size,
                                        {
                                            [o.default['root_'.concat(c, '_withHover_').concat(A)]]: x && !T && !R,
                                            [o.default['root_size_'.concat(y)]]: y,
                                            [o.default.root_withoutBorder]: !k,
                                            [o.default.root_withActiveSpinner]: R,
                                            [o.default.block]: i,
                                            [o.default.flexIcon]: m,
                                            [o.default.iconOnly]: O,
                                            [o.default.root_icon_left]: p && !O && S,
                                            [o.default.root_icon_right]: p && !O && !S,
                                        },
                                        d,
                                    ),
                                    type: h,
                                    role: v,
                                    onClick: M,
                                    ...C,
                                    disabled: T,
                                    'aria-live': R ? 'polite' : 'off',
                                    'aria-busy': R,
                                    children:
                                        p || R
                                            ? (0, a.jsxs)('span', {
                                                  className: (0, l.clsx)(o.default.contentContainer, { [o.default.contentContainer_block]: i }, I),
                                                  children: [p && S && L, !O && u, p && !S && L, K],
                                              })
                                            : u,
                                });
                            };
                        t.Button = (0, n.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
                    },
                    5928: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0);
                        var r = i(8119);
                        Object.defineProperty(t, 'Button', {
                            enumerable: !0,
                            get: function () {
                                return r.Button;
                            },
                        });
                    },
                    7459: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Toggle = void 0);
                        let a = i(4377),
                            n = i(5881),
                            l = i(810),
                            s = i(5928),
                            o = r(i(5682)),
                            u = (e) => {
                                let { isChecked: t } = e;
                                return (0, a.jsx)('div', { className: (0, n.clsx)(o.default.icon, { [o.default.icon_checked]: t }) });
                            };
                        t.Toggle = (e) => {
                            let { className: t, isChecked: i = !1, onChange: r, 'aria-label': d, 'aria-describedby': c, ...m } = e,
                                [p, _] = (0, l.useState)(i),
                                v = (0, l.useCallback)(() => {
                                    let e = !p;
                                    _(e), null == r || r(e);
                                }, [p, r]);
                            return (
                                (0, l.useEffect)(() => {
                                    _(i);
                                }, [i]),
                                (0, a.jsx)(s.Button, {
                                    className: (0, n.clsx)(o.default.root, { [o.default.root_checked]: p }, t),
                                    radius: 'xxxl',
                                    variant: 'default',
                                    icon: (0, a.jsx)(u, { isChecked: p }),
                                    withRipple: !1,
                                    onClick: v,
                                    role: 'switch',
                                    'aria-checked': p,
                                    'aria-label': d,
                                    'aria-describedby': c,
                                    ...m,
                                    color: p ? 'primary' : 'secondary',
                                })
                            );
                        };
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                l = {};
            function s(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var i = (l[e] = { exports: {} });
                return n[e].call(i.exports, i, i.exports, s), i.exports;
            }
            (s.d = (e, t) => {
                for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var o = {};
            (() => {
                Object.defineProperty(o, 'X', { value: !0 }), (o.Z = void 0);
                var e = s(7459);
                Object.defineProperty(o, 'Z', {
                    enumerable: !0,
                    get: function () {
                        return e.Toggle;
                    },
                });
            })();
            var u = o.Z;
            o.X;
        },
        18460: (e, t, i) => {
            'use strict';
            i.d(t, { ArtistItem: () => f });
            var r = i(62936),
                a = i(79950),
                n = i(19718),
                l = i(44020),
                s = i(23480),
                o = i(59935),
                u = i(13030),
                d = i(64304),
                c = i(56721),
                m = i(20418),
                p = i(42561),
                _ = i(5374),
                v = i.n(_);
            let f = (0, n.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: n } = (0, p.Pjs)(),
                    _ = (0, p.ZpR)(t.url),
                    g = (0, p.NKK)(),
                    y = (0, l.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(f, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    h = (0, o.c)((e) => {
                        n.modal.isOpened && n.modal.close(), g({ to: s.QT.ArtistScreen }), _(e);
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(d.Dr, {
                            className: (0, a.$)(v().root, i),
                            onClick: h,
                            children: [
                                (0, r.jsx)(c.Paper, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, r.jsx)(u.Image, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, r.jsx)(m.Caption, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        y,
                    ],
                });
            });
        },
        21656: (e) => {
            e.exports = {
                root: 'ArtistBandlinkScanner_root__D3cAC',
                descriptionTitleButton: 'ArtistBandlinkScanner_descriptionTitleButton__0M8Ag',
                icon: 'ArtistBandlinkScanner_icon__n5ntO',
                description: 'ArtistBandlinkScanner_description__n8ypX',
                descriptionTitle: 'ArtistBandlinkScanner_descriptionTitle__9Z1MT',
                descriptionTitleText: 'ArtistBandlinkScanner_descriptionTitleText__xWvIS',
                descriptionArtist: 'ArtistBandlinkScanner_descriptionArtist__7ZvJo',
            };
        },
        23205: (e) => {
            e.exports = {
                message: 'EditorsFeaturesNotification_message__Q__9v',
                text: 'EditorsFeaturesNotification_text__b79yA',
                title: 'EditorsFeaturesNotification_title__BuJZ_',
                link: 'EditorsFeaturesNotification_link__deYjx',
                playlistTitle: 'EditorsFeaturesNotification_playlistTitle__Hv7bZ',
                image: 'EditorsFeaturesNotification_image__AidPK',
            };
        },
        25358: (e, t, i) => {
            'use strict';
            i.d(t, {
                $o: () => T,
                Y9: () => o,
                uY: () => C.ContextMenuPlaylistPrivacyItem,
                Bw: () => P.CreatePlaylistCard,
                Co: () => E,
                iz: () => u,
                kc: () => d,
                mZ: () => L.NotificationAddToPlaylist,
                pw: () => O.NotificationFailedAddToPlaylist,
                HB: () => S.NotificationFailedRemoveFromPlaylist,
                mM: () => R.NotificationRemoveFromPlaylist,
                Q1: () => p,
                yC: () => v,
                ji: () => f,
                Zq: () => I,
                xG: () => _.TrackPlaylistContext,
                Ji: () => a,
                jX: () => s,
                Mp: () => m,
                KX: () => g.useOnLikeClick,
                A7: () => y.useOnPinClick,
            });
            var r = i(67);
            let a = (e) => {
                var t;
                return e
                    ? {
                          playlistUuid: e.uuid,
                          available: e.isAvailable,
                          uid: e.uid,
                          kind: e.kind,
                          title: e.title || '',
                          revision: e.revision || 0,
                          snapshot: 0,
                          trackCount: e.tracksCount || 0,
                          visibility: e.visibility || 'public',
                          collective: !1,
                          created: '',
                          modified: '',
                          isBanner: !1,
                          isPremiere: !1,
                          durationMs: 0,
                          cover: { uri: e.coverUri || '', type: r.Q.PIC, prefix: '', custom: !1 },
                          ogImage: e.coverUri || '',
                          tags: [],
                          likesCount: e.likesCount || 0,
                          generatedPlaylistType: e.generatedPlaylistType || '',
                          trailer: { available: !!(null == (t = e.trailer) ? void 0 : t.isAvailable) },
                      }
                    : {
                          playlistUuid: '',
                          available: !0,
                          uid: 0,
                          kind: 0,
                          title: '',
                          revision: 0,
                          snapshot: 0,
                          trackCount: 0,
                          visibility: 'public',
                          collective: !1,
                          created: '',
                          modified: '',
                          isBanner: !1,
                          isPremiere: !1,
                          durationMs: 0,
                          cover: { uri: '', type: r.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          tags: [],
                          likesCount: 0,
                          generatedPlaylistType: '',
                          trailer: { available: !0 },
                      };
            };
            var n = i(51606),
                l = i(42561);
            let s = (e) => {
                var t, i, r, a, s;
                e = e || {};
                let o = (0, l.mxW)(e.trailer);
                return (0, n.wg)({
                    isAvailable: null == (a = e.available) || a,
                    uid: e.uid,
                    uuid: null != (s = e.playlistUuid) ? s : '',
                    kind: e.kind,
                    title: e.title,
                    coverUri: (null == e || null == (t = e.cover) ? void 0 : t.uri) || (null == e || null == (r = e.cover) || null == (i = r.itemsUri) ? void 0 : i[0]),
                    tracksCount: e.trackCount,
                    likesCount: e.likesCount,
                    averageColor: (0, l.QBb)(null == e ? void 0 : e.derivedColors),
                    revision: e.revision,
                    generatedPlaylistType: e.generatedPlaylistType,
                    personalColor: e.personalColor,
                    visibility: e.visibility,
                    trailer: o,
                });
            };
            var o = (function (e) {
                return (e.OK = 'ok'), (e.ERROR = 'error'), (e.RELOAD = 'reload'), e;
            })({});
            let u = 1e3,
                d = 100;
            var c = i(33878);
            let m = (e) => {
                let { operation: t, position: i, startPosition: r, endPosition: a, tracks: n } = e,
                    l = ((e) =>
                        Object.keys(e)
                            .filter((t) => void 0 !== e[t])
                            .reduce((t, i) => ((t[i] = e[i]), t), {}))({ op: t, at: i, from: r, to: a, tracks: n });
                return (0, c.stringifyJSONSafely)([l]);
            };
            var p = (function (e) {
                    return (e.ALL = 'all'), e;
                })({}),
                _ = i(51945),
                v = (function (e) {
                    return (e.INSERT = 'insert'), (e.DELETE = 'delete'), (e.MOVE = 'move'), e;
                })({}),
                f = (function (e) {
                    return (e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e;
                })({}),
                g = i(14144),
                y = i(34753),
                h = i(14525),
                A = i(48320),
                b = i(92496),
                x = i(21192),
                k = i(54690);
            let T = n.gK
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
                            trailer: n.gK.maybe(k.aQ),
                        }),
                        k.tP,
                    )
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.uuid, '_').concat(e.uid, '_').concat(e.kind);
                        },
                        get url() {
                            let { href: t } = (0, l.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e.uuid } });
                            return t;
                        },
                        get isLikesCountHidden() {
                            return e.kind === f.LIKE || e.kind === f.CHART || e.generatedPlaylistType;
                        },
                        get isFavouritePlaylist() {
                            return e.kind === f.LIKE;
                        },
                        get isPublic() {
                            return e.visibility === A.L.PUBLIC;
                        },
                        get isLiked() {
                            if (!(0, n._n)(e)) return !1;
                            let { library: t } = (0, n.Zn)(e);
                            return t.isPlaylistLiked(''.concat(e.uid, ':').concat(e.kind));
                        },
                        get pinId() {
                            return ''.concat(b._.PLAYLIST_ITEM).concat(e.uid, '_').concat(e.kind);
                        },
                        get id() {
                            return ''.concat(e.uid, ':').concat(e.kind);
                        },
                        get isPinned() {
                            if (!(0, n._n)(e)) return !1;
                            let { pinsCollection: t } = (0, n.Zn)(e);
                            return t.isPinned(this.pinId);
                        },
                        get isOwnPlaylist() {
                            let { user: t } = (0, n.Zn)(e);
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
                            let { library: t, user: i } = (0, n.Zn)(e);
                            if (i.isAuthorized) {
                                let r = yield t.togglePlaylistLike({ userId: i.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                                return (0, n._n)(e) && r === x.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), r;
                            }
                        }),
                        togglePin: (0, n.L3)(function* () {
                            if (!(0, n._n)(e)) return;
                            let { pinsCollection: t, user: i } = (0, n.Zn)(e);
                            if (i.isAuthorized) return yield t.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                        }),
                        changePlaylist: (0, n.L3)(function* (t) {
                            if (!(0, n._n)(e)) return o.ERROR;
                            let { usersResource: i, modelActionsLogger: r } = (0, n._$)(e);
                            try {
                                var a, l;
                                let r = yield i.changePlaylistRelative({ userId: e.uid, diff: t, revision: null != (a = e.revision) ? a : 0, playlistKind: e.kind });
                                return (e.revision = r.revision), (e.isAvailable = null == (l = r.available) || l), o.OK;
                            } catch (e) {
                                if ((r.error(e), e && 'object' == typeof e && 'statusCode' in e && e.statusCode === h.X1.PRECONDITION_FAILED)) return o.RELOAD;
                                return o.ERROR;
                            }
                        }),
                        changeTitle: (0, n.L3)(function* (t) {
                            if (!(0, n._n)(e)) return l.FlZ.ERROR;
                            if (e.title === t) return l.FlZ.OK;
                            let { usersResource: i, modelActionsLogger: r } = (0, n._$)(e);
                            if (e.canUserChange) {
                                if (t.length < 1 || t.length > d) return l.FlZ.ERROR;
                                let a = e.title;
                                e.title = t;
                                try {
                                    let r = yield i.changePlaylistTitle({ title: t, userId: e.uid, playlistKind: e.kind });
                                    if (!(null == r ? void 0 : r.title)) return (e.title = a), l.FlZ.ERROR;
                                    return (e.title = r.title), l.FlZ.OK;
                                } catch (t) {
                                    (e.title = a), r.error(t);
                                }
                            }
                            return l.FlZ.ERROR;
                        }),
                        deletePlaylist: (0, n.L3)(function* () {
                            if (!(0, n._n)(e) || !e.canUserChange) return l.FlZ.ERROR;
                            let { pinsCollection: t } = (0, n.Zn)(e),
                                { usersResource: i, modelActionsLogger: r } = (0, n._$)(e);
                            try {
                                return yield i.deletePlaylist({ userId: e.uid, playlistKind: e.kind }), t.isPinned(e.pinId) && t.deletePin(e.pinId), l.FlZ.OK;
                            } catch (e) {
                                r.error(e);
                            }
                            return l.FlZ.ERROR;
                        }),
                        toggleVisibility: (0, n.L3)(function* (t) {
                            if (!(0, n._n)(e) || (!e.canUserChange && !e.isOwnFavouritePlaylist)) return l.FlZ.ERROR;
                            let { usersResource: i, modelActionsLogger: r } = (0, n._$)(e),
                                { user: a } = (0, n.Zn)(e),
                                s = e.visibility,
                                o = e.isPublic ? A.L.PRIVATE : A.L.PUBLIC;
                            t && (o = t);
                            try {
                                return (
                                    (e.visibility = o),
                                    e.isOwnFavouritePlaylist
                                        ? yield a.setSettings({ userMusicVisibility: o })
                                        : yield i.togglePlaylistVisibility({ visibility: o, userId: e.uid, playlistKind: e.kind }),
                                    l.FlZ.OK
                                );
                            } catch (e) {
                                r.error(e);
                            }
                            return (e.visibility = s), l.FlZ.ERROR;
                        }),
                        getKey: (t) => ''.concat(t, '_').concat(e.id),
                    })),
                E = n.gK.model('CreatePlaylist', { meta: n.gK.maybeNull(T) }).actions((e) => ({
                    create: (0, n.L3)(function* (t) {
                        if (!(0, n._n)(e)) return null;
                        let { usersResource: i, modelActionsLogger: r } = (0, n._$)(e),
                            { user: a } = (0, n.Zn)(e);
                        if (!a.isAuthorized) return null;
                        let l = a.account.data.uid;
                        try {
                            let r = yield i.createPlaylist({ userId: String(l), ...t });
                            return (e.meta = s(r)), e.meta.uuid;
                        } catch (e) {
                            return r.error(e), null;
                        }
                    }),
                    reset() {
                        e.meta = null;
                    },
                })),
                I = T.props({ tracks: n.gK.maybe(n.gK.array(k.eD)) }).actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
            var C = i(34211),
                P = i(63065),
                O = i(31441),
                S = i(37577),
                L = i(9451),
                R = i(64987);
        },
        30269: (e) => {
            e.exports = {
                message: 'PlaylistNotification_message__nEykK',
                text: 'PlaylistNotification_text__kTfi1',
                title: 'PlaylistNotification_title__Q5IKF',
                link: 'PlaylistNotification_link__HezVx',
                playlistTitle: 'PlaylistNotification_playlistTitle__HweEg',
                image: 'PlaylistNotification_image__QvYVD',
            };
        },
        31011: (e, t, i) => {
            'use strict';
            i.d(t, { useOnLikeClick: () => c });
            var r = i(62936),
                a = i(16264),
                n = i(44020),
                l = i(47480),
                s = i(21192),
                o = i(42561),
                u = i(85906);
            let d = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, r.jsx)(u.OM, {
                        closeToast: i,
                        entityVariant: u.cp.ARTIST,
                        entityUrl: t.url,
                        collectionUrl: o.Zyd.collectionArtists.href,
                        coverUri: t.coverUri,
                        entityTitle: t.name,
                        isLiked: t.isLiked,
                    });
                },
                c = (e) => {
                    let { user: t } = (0, o.Pjs)(),
                        { notify: i } = (0, o.lkh)(),
                        [c, m] = (0, n.useState)(!1),
                        { formatMessage: p } = (0, l.A)();
                    return (0, n.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.hT, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.uQT.ERROR });
                        if (c) return;
                        let n = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                        m(!0);
                        let l = await e.toggleLike();
                        m(!1),
                            l === s.f.OK
                                ? i((0, r.jsx)(d, { artist: n }), { containerId: o.uQT.INFO })
                                : i((0, r.jsx)(u.hT, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.uQT.ERROR });
                    }, [e, t.isAuthorized, c, p, i]);
                };
        },
        31441: (e, t, i) => {
            'use strict';
            i.d(t, { NotificationFailedAddToPlaylist: () => u });
            var r = i(62936),
                a = i(26731),
                n = i(20418),
                l = i(85906),
                s = i(53235),
                o = i.n(s);
            let u = () =>
                (0, r.jsx)(l.$W, {
                    message: (0, r.jsx)(n.Caption, {
                        className: o().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, r.jsx)(a.A, { id: 'playlist-errors.failed-add-track-to-playlist' }),
                    }),
                });
        },
        32322: (e, t, i) => {
            'use strict';
            i.d(t, { useTrackSourceContext: () => o });
            var r = i(44020),
                a = i(81959),
                n = i(42561),
                l = i(12998);
            let s = { [n._Q$.SEARCH]: l.h.SEARCH, [n._Q$.DOWNLOADS_TRACKS]: l.h.DOWNLOADED_TRACKS, [n._Q$.HISTORY]: l.h.MUSIC_HISTORY };
            function o(e) {
                var t, i;
                let { album: o, playlist: u, artist: d, track: c } = (0, n.Pjs)(),
                    { sourceContextData: m } = (0, n.SsQ)(),
                    { pageId: p } = (0, n.$au)();
                return (0, r.useMemo)(() => {
                    var t, i, r, _;
                    let v = null == m ? void 0 : m.sourceContextType,
                        f = null != v ? v : p && s[p] ? s[p] : l.h.BASED_ON_ENTITY_BY_DEFAULT,
                        g = !!(null == m || null == (t = m.meta) ? void 0 : t.id);
                    if (m && (m.type !== a.K.Various || g)) return m;
                    let y = c.isOpened ? c.albumId : null;
                    return y
                        ? (0, n.tW0)({ contextType: a.K.Album, contextId: y, entityContextType: f })
                        : (null == (i = u.meta) ? void 0 : i.uid) && (null == (r = u.meta) ? void 0 : r.kind)
                          ? (0, n.tW0)({
                                contextType: a.K.Playlist,
                                contextId: ''.concat(u.meta.uid, ':').concat(u.meta.kind),
                                playlistUid: u.meta.uid,
                                playlistKind: u.meta.kind,
                                filter: u.filters.activeFilter,
                                entityContextType: f,
                            })
                          : o.id
                            ? (0, n.tW0)({ contextType: a.K.Album, contextId: o.id, entityContextType: f })
                            : d.id
                              ? (0, n.tW0)({ contextType: a.K.Artist, contextId: d.id, entityContextType: f })
                              : (null == e ? void 0 : e.albumId)
                                ? (0, n.tW0)({ contextType: a.K.Album, contextId: e.albumId, entityContextType: f })
                                : (0, n.tW0)({ contextType: a.K.Various, contextId: null != (_ = null == e ? void 0 : e.id) ? _ : '', entityContextType: f });
                }, [
                    m,
                    p,
                    c.isOpened,
                    c.albumId,
                    o.id,
                    null == (t = u.meta) ? void 0 : t.uid,
                    null == (i = u.meta) ? void 0 : i.kind,
                    u.filters.activeFilter,
                    d.id,
                    null == e ? void 0 : e.albumId,
                    null == e ? void 0 : e.id,
                ]);
            }
        },
        34211: (e, t, i) => {
            'use strict';
            i.d(t, { ContextMenuPlaylistPrivacyItem: () => g });
            var r = i(62936),
                a = i(79950),
                n = i(19718),
                l = i(44020),
                s = i(47480),
                o = i(26731),
                u = i(8669),
                d = i(85742),
                c = i(64304),
                m = i(18099),
                p = i(42561),
                _ = i(85906),
                v = i(86709),
                f = i.n(v);
            let g = (0, n.PA)((e) => {
                let { className: t, playlist: i } = e,
                    { notify: n } = (0, p.lkh)(),
                    { formatMessage: v } = (0, s.A)(),
                    g = (0, l.useCallback)(async () => {
                        (await i.toggleVisibility()) === p.FlZ.ERROR &&
                            n((0, r.jsx)(_.hT, { error: v({ id: 'playlist-errors.failed-to-change-privacy-settings' }) }), { containerId: p.uQT.ERROR });
                    }, [v, n, i]);
                return (0, r.jsxs)(c.Dr, {
                    className: (0, a.$)(f().root, t),
                    onClick: g,
                    icon: (0, r.jsx)(d.Icon, { variant: 'eye_crossed', size: 'xxs' }),
                    ...(0, u.Am)(u.S7.CONTEXT_MENU_PLAYLIST_PRIVACY_BUTTON),
                    role: 'menuitemcheckbox',
                    'aria-checked': !i.isPublic,
                    isSubMenu: !0,
                    isBlock: !0,
                    children: [
                        (0, r.jsx)('span', { className: f().caption, children: (0, r.jsx)(o.A, { id: 'playlist-actions.privacy' }) }),
                        (0, r.jsx)(m.l, { isChecked: !i.isPublic, ariaLabel: v({ id: 'playlist-actions.privacy-label' }), tabIndex: -1 }),
                    ],
                });
            });
        },
        34753: (e, t, i) => {
            'use strict';
            i.d(t, { useOnPinClick: () => d });
            var r = i(62936),
                a = i(16264),
                n = i(44020),
                l = i(47480),
                s = i(42561),
                o = i(85906);
            let u = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(o.k4, {
                        closeToast: i,
                        entityVariant: o.cp.PLAYLIST,
                        entityUrl: t.url,
                        coverUri: t.coverUri,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                },
                d = (e) => {
                    let { user: t } = (0, s.Pjs)(),
                        { notify: i } = (0, s.lkh)(),
                        { formatMessage: d } = (0, l.A)(),
                        [c, m] = (0, n.useState)(!1);
                    return (0, n.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(o.hT, { error: d({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s.uQT.ERROR });
                        if (c) return;
                        let n = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                        m(!0);
                        let l = await e.togglePin();
                        m(!1),
                            l
                                ? i((0, r.jsx)(u, { playlist: n }), { containerId: s.uQT.INFO })
                                : i((0, r.jsx)(o.hT, { error: d({ id: 'error-messages.error-during-action' }) }), { containerId: s.uQT.ERROR });
                    }, [t.isAuthorized, c, e, i, d]);
                };
        },
        35250: (e, t, i) => {
            'use strict';
            i.d(t, { dx: () => O, A_: () => a });
            var r = i(42561);
            let a = (e) => {
                let t,
                    { entityVariant: i, urlParams: a } = e,
                    n = (0, r.D60)();
                if (
                    !a.id ||
                    !(t =
                        'production' === n
                            ? ((e) => {
                                  switch (e) {
                                      case r.DwC.ALBUM:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLJkvqJ0/LJkvqJ1WMQ06nJD=';
                                      case r.DwC.PLAYLIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3OfLKyfnKA0pl92nJI3YKOfLKyfnKA0YzSwqTyiow91nJD9BzyxWzgcozD9BzgcozD=';
                                      case r.DwC.ARTIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLKW0nKA0C2SlqTymqRyxCGccMN==';
                                      case r.DwC.TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgqUWuL2f/qUWuL2gWMQ06nJD=';
                                      case r.DwC.UGC_TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3IaLl92nJI3YKElLJAeC3ElLJAeFJD9Bzyx';
                                  }
                              })(i)
                            : ((e) => {
                                  switch (e) {
                                      case r.DwC.ALBUM:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLJkvqJ0/LJkvqJ1WMQ06nJD=';
                                      case r.DwC.PLAYLIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3OfLKyfnKA0pl92nJI3YKOfLKyfnKA0YzSwqTyiow91nJD9BzyxWzgcozD9BzgcozD=';
                                      case r.DwC.ARTIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLKW0nKA0C2SlqTymqRyxCGccMN==';
                                      case r.DwC.TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgqUWuL2f/qUWuL2gWMQ06nJD=';
                                      case r.DwC.UGC_TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3IaLl92nJI3YKElLJAeC3ElLJAeFJD9Bzyx';
                                  }
                              })(i))
                )
                    return;
                let l = atob(
                    t.replace(/[A-Za-z]/g, function (e) {
                        return String.fromCharCode(e.charCodeAt(0) + ('M' >= e.toUpperCase() ? 13 : -13));
                    }),
                );
                return (0, r.BcX)(l, a);
            };
            var n = i(62936),
                l = i(19718),
                s = i(47480),
                o = i(8669),
                u = i(64304),
                d = i(44020),
                c = i(26731),
                m = i(20418),
                p = i(85906),
                _ = i(14398),
                v = i.n(_);
            let f = (e) => {
                    let { closeToast: t } = e;
                    return (0, n.jsx)(p.$W, {
                        message: (0, n.jsx)(m.Caption, {
                            className: v().message,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, n.jsx)(c.A, { id: 'playlist-errors.failed-part-tracks-download-xlsx' }),
                        }),
                        closeToast: t,
                    });
                },
                g = (e) => {
                    let { closeToast: t } = e;
                    return (0, n.jsx)(p.$W, {
                        message: (0, n.jsx)(m.Caption, {
                            className: v().message,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, n.jsx)(c.A, { id: 'playlist-errors.failed-download-xlsx' }),
                        }),
                        closeToast: t,
                    });
                };
            var y = i(23205),
                h = i.n(y);
            let A = (e) => {
                    let { closeToast: t } = e;
                    return (0, n.jsx)(p.$W, {
                        message: (0, n.jsx)(m.Caption, {
                            variant: 'div',
                            size: 'm',
                            className: h().text,
                            children: (0, n.jsx)(c.A, { id: 'notifications-info.xlsx-success' }),
                        }),
                        closeToast: t,
                        coverRadius: 's',
                    });
                },
                b = () =>
                    (0, n.jsx)(p.$W, {
                        message: (0, n.jsx)(m.Caption, {
                            variant: 'div',
                            size: 'm',
                            className: h().text,
                            children: (0, n.jsx)(c.A, { id: 'notifications-info.xlsx-loading' }),
                        }),
                        coverRadius: 's',
                    }),
                x = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 40,
                        { fullscreenPlayer: t, playlist: i } = (0, r.Pjs)(),
                        { notify: a, dismiss: l } = (0, r.lkh)(),
                        s = (0, d.useRef)(null),
                        o = t.modal.isOpened ? r.uQT.FULLSCREEN_INFO : r.uQT.INFO;
                    return (0, d.useCallback)(async () => {
                        (s.current = a((0, n.jsx)(b, {}), { containerId: o, autoClose: !1 })),
                            await i.editorFeature.getAllPlaylistItems({ batchSize: e }),
                            (await i.editorFeature.exportToExcel()) === r.FlZ.OK
                                ? i.areAllTracksUploaded
                                    ? a((0, n.jsx)(A, {}), { containerId: o })
                                    : a((0, n.jsx)(f, {}), { containerId: t.modal.isOpened ? r.uQT.FULLSCREEN_ERROR : r.uQT.ERROR, autoClose: !1 })
                                : a((0, n.jsx)(g, {}), { containerId: t.modal.isOpened ? r.uQT.FULLSCREEN_ERROR : r.uQT.ERROR, autoClose: !1 }),
                            l({ notificationId: s.current, forceClose: !0 });
                    }, [e, l, t.modal.isOpened, o, a, i.areAllTracksUploaded, i.editorFeature]);
                },
                k = (0, l.PA)(() => {
                    let {
                            playlist: { editorFeature: e },
                        } = (0, r.Pjs)(),
                        { toggleShouldShowDuplicate: t, shouldShowDuplicate: i } = e,
                        { formatMessage: a } = (0, s.A)();
                    return (0, n.jsx)(p.Kb, {
                        'aria-label': a({ id: 'entity-names.editor-feature-is-show' }),
                        text: a({ id: 'interface-actions.show-duplicates' }),
                        onClick: t,
                        isActive: i,
                    });
                }),
                T = (0, l.PA)(() => {
                    let {
                            playlist: { editorFeature: e },
                        } = (0, r.Pjs)(),
                        { toggleShouldShowGenre: t, shouldShowGenre: i } = e,
                        { formatMessage: a } = (0, s.A)();
                    return (0, n.jsx)(p.Kb, {
                        'aria-label': a({ id: 'entity-names.editor-feature-is-show' }),
                        text: a({ id: 'interface-actions.show-genres' }),
                        onClick: t,
                        isActive: i,
                    });
                }),
                E = (0, l.PA)(() => {
                    let {
                            playlist: { editorFeature: e },
                        } = (0, r.Pjs)(),
                        { toggleShouldShowMajor: t, shouldShowMajor: i } = e,
                        { formatMessage: a } = (0, s.A)();
                    return (0, n.jsx)(p.Kb, {
                        'aria-label': a({ id: 'entity-names.editor-feature-is-show' }),
                        text: a({ id: 'interface-actions.show-majors' }),
                        onClick: t,
                        isActive: i,
                    });
                });
            var I = i(69526),
                C = i(59935);
            let P = (0, l.PA)((e) => {
                    let { adminUrl: t } = e;
                    (0, I.useRouter)();
                    let i = (0, C.c)(() => {
                        window.open(t, '_blank');
                    });
                    return (0, n.jsx)(u.Dr, {
                        onClick: i,
                        isSubMenu: !0,
                        children: (0, n.jsx)(m.Caption, { variant: 'div', lineClamp: 1, children: (0, n.jsx)(c.A, { id: 'interface-actions.navigate-to-admin' }) }),
                    });
                }),
                O = (0, l.PA)((e) => {
                    let { entityVariant: t, adminUrl: i, withPlaylistPageFeatures: a, className: l, isDisabled: d } = e,
                        {
                            settings: { isMobile: c },
                        } = (0, r.Pjs)(),
                        { formatMessage: m } = (0, s.A)();
                    x();
                    let p = t === r.DwC.PLAYLIST && a,
                        _ = t === r.DwC.PLAYLIST && a,
                        v = t === r.DwC.PLAYLIST && a,
                        f = t === r.DwC.PLAYLIST && a;
                    return (0, n.jsxs)(u.W1, {
                        label: m({ id: 'interface-actions.editorial-tools' }),
                        menuClassName: l,
                        offsetOptions: 3,
                        isMobile: c,
                        disabled: d,
                        ...(0, o.Am)(o.OA.playlist.CONTEXT_MENU_EDITOR_FEATURES_BUTTON),
                        children: [i && (0, n.jsx)(P, { adminUrl: i }), p && (0, n.jsx)(E, {}), _ && (0, n.jsx)(T, {}), v && (0, n.jsx)(k, {}), f && !1],
                    });
                });
        },
        35702: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        36547: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { R: () => r }),
                (function (e) {
                    (e.Music = 'music'),
                        (e.DownloadedMusic = 'downloadedMusic'),
                        (e.VibeTrack = 'vibeTrack'),
                        (e.Generative = 'generative'),
                        (e.Unknown = 'unknown'),
                        (e.SmartPreview = 'smartPreview'),
                        (e.Clip = 'clip'),
                        (e.Radio = 'fm_radio');
                })(r || (r = {}));
        },
        37577: (e, t, i) => {
            'use strict';
            i.d(t, { NotificationFailedRemoveFromPlaylist: () => u });
            var r = i(62936),
                a = i(26731),
                n = i(20418),
                l = i(85906),
                s = i(53235),
                o = i.n(s);
            let u = () =>
                (0, r.jsx)(l.$W, {
                    message: (0, r.jsx)(n.Caption, {
                        className: o().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, r.jsx)(a.A, { id: 'playlist-errors.failed-to-remove-track' }),
                    }),
                });
        },
        41338: (e, t, i) => {
            'use strict';
            i.d(t, { ArtistBandlinkScanner: () => m });
            var r = i(62936),
                a = i(79950),
                n = i(26731),
                l = i(8669),
                s = i(85742),
                o = i(20418),
                u = i(85906),
                d = i(21656),
                c = i.n(d);
            let m = (e) => {
                let { className: t, artistId: i, artistName: d } = e;
                return (0, r.jsxs)(u.N_, {
                    href: 'https://band.link/scanner?search='.concat(i, '&type=artist_id&service=yandex_music'),
                    className: (0, a.$)(c().root, t),
                    ...(0, l.Am)(l.e8.content.ARTIST_ABOUT_BANDLINK_SCANNER),
                    children: [
                        (0, r.jsx)(s.Icon, { className: c().icon, variant: 'bandlink' }),
                        (0, r.jsxs)('div', {
                            className: c().description,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: c().descriptionTitle,
                                    children: [
                                        (0, r.jsx)(o.Caption, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'medium',
                                            className: c().descriptionTitleText,
                                            children: (0, r.jsx)(n.A, { id: 'artist.artist-in-playlists' }),
                                        }),
                                        (0, r.jsx)(s.Icon, { variant: 'link', size: 'xxs', className: c().descriptionTitleButton }),
                                    ],
                                }),
                                (0, r.jsx)(o.Caption, { variant: 'div', size: 'l', weight: 'medium', className: c().descriptionArtist, children: null != d ? d : '' }),
                            ],
                        }),
                    ],
                });
            };
        },
        41936: (e, t, i) => {
            'use strict';
            i.d(t, { useTimeLeftText: () => n });
            var r = i(44020),
                a = i(47480);
            let n = () => {
                let { formatMessage: e } = (0, a.A)();
                return (0, r.useCallback)(
                    function (t) {
                        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            r = Math.floor(t / 60),
                            a = function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    r = e({ id: 'time.minutes-left' }, { minutes: t });
                                return i ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(r) : r;
                            };
                        if (t < 1) return e({ id: 'time.finished' });
                        if (t < 60)
                            return (function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    r = e({ id: 'time.seconds-left' }, { seconds: t });
                                return i ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(r) : r;
                            })(Math.floor(t), i);
                        if (r < 60) return a(r, i);
                        let n = Math.floor(r / 60),
                            l = r % 60,
                            s = (function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return i ? e({ id: 'time.hours-left' }, { hours: t }) : e({ id: 'time.hours' }, { hours: t });
                            })(n, i);
                        return l > 0 ? ''.concat(s, ' ').concat(a(l)) : s;
                    },
                    [e],
                );
            };
        },
        43026: (e, t, i) => {
            'use strict';
            i.d(t, {
                OQ: () => L,
                Bg: () => K.ListeningProgress,
                t$: () => R,
                l3: () => M.NotificationPlayQueue,
                NM: () => p.N,
                d0: () => w.RemoveButton,
                B9: () => C,
                oQ: () => c,
                pK: () => m,
                vz: () => N,
                jU: () => j,
                gK: () => s,
                eK: () => v.e,
                $O: () => o,
                LT: () => u,
                Rw: () => d,
                TH: () => _.useMarkListenedClick,
                mW: () => f.useOnDislikeClick,
                KX: () => g.useOnLikeClick,
                iQ: () => y.useOnModifyPlayQueue,
                c5: () => h.useOnPromoLandingLikeClick,
                mw: () => A.useProgressTimeNonMusic,
                $4: () => b.useTimeLeftText,
                Dv: () => x.useTrackSourceContext,
            });
            var r,
                a,
                n = i(51606);
            (r || (r = {})).SMART_PREVIEW = 'smart_preview';
            var l = i(42561);
            let s = (e, t) => {
                    var i, a, s, o, u, d, c, m, p, _;
                    e = e || {};
                    let { isSmartPreview: v, hasEverFinished: f } = t || {},
                        g = (0, l.QBb)(null == e ? void 0 : e.derivedColors),
                        y = v ? (null == (i = e.smartPreviewParams) ? void 0 : i.durationMs) : null == e ? void 0 : e.durationMs,
                        h = (0, n.wg)({ available: !!(null == (a = e.specialAudioResources) ? void 0 : a.includes(r.SMART_PREVIEW)) });
                    return (0, n.wg)({
                        id: (e.id || 0).toString(),
                        isAvailable: !!(null == e ? void 0 : e.available),
                        isRemoved: (null == e ? void 0 : e.error) === 'not-found',
                        title: null != (p = null == e ? void 0 : e.title) ? p : '',
                        version: null == e ? void 0 : e.version,
                        durationMs: y,
                        coverUri: null == e ? void 0 : e.coverUri,
                        averageColor: g,
                        trackParameters: ((e) =>
                            (0, n.wg)({
                                bpm: null == e ? void 0 : e.bpm,
                                energy: null == e ? void 0 : e.energy,
                                hue: null == e ? void 0 : e.hue,
                                userCollectionHue: null == e ? void 0 : e.userCollectionHue,
                            }))(null == e ? void 0 : e.trackParameters),
                        trackSource: null == e ? void 0 : e.trackSource,
                        albumId: null == (o = e.albums) || null == (s = o[0]) ? void 0 : s.id,
                        disclaimers: e.disclaimers,
                        type: e.type,
                        pubDate: e.pubDate,
                        hasLyrics: null == (u = e.lyricsInfo) ? void 0 : u.hasAvailableTextLyrics,
                        hasSyncLyrics: null == (d = e.lyricsInfo) ? void 0 : d.hasAvailableSyncLyrics,
                        shouldRememberPosition: e.rememberPosition,
                        streamProgress: ((e, t) =>
                            (0, n.wg)({
                                endPositionSec: null == e ? void 0 : e.endPositionSec,
                                hasEverFinished: (null == t ? void 0 : t.hasEverFinished) || (null == e ? void 0 : e.everFinished),
                            }))(null == e ? void 0 : e.streamProgress, { hasEverFinished: f }),
                        shortDescription: null != (_ = e.shortDescription) ? _ : '',
                        trailer: h,
                        clipIds: e.clipIds,
                        major: e.major,
                        genre: null == (m = e.albums) || null == (c = m[0]) ? void 0 : c.genre,
                        realId: e.realId,
                    });
                },
                o = (e, t) => {
                    if (!t) {
                        let { href: t } = (0, l.uvd)('/track/:trackId', { params: { trackId: e } });
                        return t;
                    }
                    let { href: i } = (0, l.uvd)('/album/:albumId/track/:trackId', { params: { albumId: t, trackId: e } });
                    return i;
                },
                u = (e) => (0, n.wg)({ id: e.id, name: e.name, prettyName: e.prettyName }),
                d = (e) => ({ id: e.id, albumId: e.albumId, timestamp: e.timestamp });
            var c = (function (e) {
                    return (e.TOO_MANY_FILES = 'TOO_MANY_FILES'), (e.UNKNOWN_ERROR = 'UNKNOWN_ERROR'), e;
                })({}),
                m = (function (e) {
                    return (
                        (e.IDLE = 'IDLE'),
                        (e.PREPARE = 'PREPARE'),
                        (e.UPLOADING = 'UPLOADING'),
                        (e.PROCESSING = 'PROCESSING'),
                        (e.RESOLVE = 'RESOLVE'),
                        (e.REJECT = 'REJECT'),
                        (e.CANCELLED = 'CANCELLED'),
                        e
                    );
                })({}),
                p = i(69804),
                _ = i(77188),
                v = i(2),
                f = i(50509),
                g = i(16945),
                y = i(11503),
                h = i(60131),
                A = i(3873),
                b = i(41936),
                x = i(32322),
                k = i(20073),
                T = i(79416),
                E = i(54690),
                I = i(84585);
            let C = n.gK.model('StreamProgress', { endPositionSec: n.gK.maybe(n.gK.number), hasEverFinished: n.gK.maybe(n.gK.boolean) }).actions((e) => ({
                    updateEndPositionSec: (t) => {
                        e.endPositionSec = t;
                    },
                    updateEverFinished: (t) => {
                        e.hasEverFinished = t;
                    },
                    markListened: (0, n.L3)(function* (t) {
                        let { streamsResource: i, modelActionsLogger: r } = (0, n._$)(e);
                        try {
                            return yield i.markFinished(t);
                        } catch (e) {
                            return r.error(e), I.T.ERROR;
                        }
                    }),
                    markUnlistened: (0, n.L3)(function* (t) {
                        let { streamsResource: i, modelActionsLogger: r } = (0, n._$)(e);
                        try {
                            return yield i.markUnfinished(t);
                        } catch (e) {
                            return r.error(e), I.T.ERROR;
                        }
                    }),
                })),
                P = n.gK.model('TrackMajor', { id: n.gK.maybeNull(n.gK.number), name: n.gK.maybeNull(n.gK.string) }),
                O = n.gK.model('TrackParameters', {
                    bpm: n.gK.maybe(n.gK.number),
                    energy: n.gK.maybe(n.gK.number),
                    hue: n.gK.maybe(n.gK.number),
                    userCollectionHue: n.gK.maybe(n.gK.number),
                }),
                S = [k.S.MUSIC, k.S.TRACK, k.S.NOISE, k.S.ASMR],
                L = n.gK
                    .compose(
                        n.gK.model('BaseTrack', {
                            id: n.gK.string,
                            isAvailable: n.gK.boolean,
                            isRemoved: n.gK.boolean,
                            title: n.gK.string,
                            trackSource: n.gK.maybe(n.gK.enumeration(Object.values(T.J))),
                            version: n.gK.maybe(n.gK.string),
                            durationMs: n.gK.maybe(n.gK.number),
                            coverUri: n.gK.maybe(n.gK.string),
                            averageColor: n.gK.maybe(n.gK.string),
                            trackParameters: n.gK.maybe(O),
                            albumId: n.gK.maybe(n.gK.number),
                            disclaimers: n.gK.maybe(n.gK.array(n.gK.string)),
                            type: n.gK.maybe(n.gK.enumeration(Object.values(k.S))),
                            pubDate: n.gK.maybe(n.gK.string),
                            hasLyrics: n.gK.maybe(n.gK.boolean),
                            hasSyncLyrics: n.gK.maybe(n.gK.boolean),
                            trailer: n.gK.maybe(E.aQ),
                            shouldRememberPosition: n.gK.maybe(n.gK.boolean),
                            streamProgress: n.gK.maybe(C),
                            shortDescription: n.gK.maybe(n.gK.string),
                            major: n.gK.maybeNull(P),
                            clipIds: n.gK.maybeNull(n.gK.array(n.gK.number)),
                            genre: n.gK.maybeNull(n.gK.string),
                            realId: n.gK.maybe(n.gK.string),
                        }),
                        E.Ec,
                    )
                    .views((e) => {
                        let t = {
                            get isLiked() {
                                if ((0, n._n)(e)) {
                                    let { library: t } = (0, n.Zn)(e);
                                    return t.isTrackLiked(e.id);
                                }
                                return !1;
                            },
                            get isDownloaded() {
                                if (!(0, n._n)(e)) return !1;
                                let { slam: t } = (0, n.Zn)(e);
                                return t.isTrackDownloaded(e.id);
                            },
                            get isDownloading() {
                                if (!(0, n._n)(e)) return !1;
                                let { slam: t } = (0, n.Zn)(e);
                                return t.isTrackDownloading(e.id);
                            },
                            get downloadingProgress() {
                                if (!(0, n._n)(e)) return 0;
                                let { slam: t } = (0, n.Zn)(e);
                                return t.getTrackDownloadingProgress(e.id);
                            },
                            get isAvailableForDownload() {
                                if (!(0, n._n)(e)) return !1;
                                return (e.type && S.includes(e.type)) || !!t.isUGC;
                            },
                            getUrl(t) {
                                let i = e.albumId ? '/album/:albumId/track/:trackId' : '/track/:trackId',
                                    r = e.albumId ? { albumId: e.albumId, trackId: e.id } : { trackId: e.id },
                                    { href: a } = (0, l.uvd)(i, { params: r, query: t });
                                return a;
                            },
                            get url() {
                                return t.getUrl();
                            },
                            get isDisliked() {
                                if ((0, n._n)(e)) {
                                    let { library: t } = (0, n.Zn)(e);
                                    return t.isTrackDisliked(e.id);
                                }
                                return !1;
                            },
                            get isTrackPodcast() {
                                if ((0, n._n)(e)) return e.type === k.S.PODCAST;
                                return !1;
                            },
                            get isPlusSubscribed() {
                                if (!(0, n._n)(e)) return !1;
                                let { user: t } = (0, n.Zn)(e);
                                return t.hasPlus;
                            },
                            get isSyncLyricsAvailableWithOfflineFeature() {
                                if (!(0, n._n)(e)) return !1;
                                let { slam: t } = (0, n.Zn)(e);
                                return !!e.hasSyncLyrics && !t.isOfflineModeEnabled;
                            },
                            get isSyncLyricsAvailable() {
                                return this.isPlusSubscribed && this.isSyncLyricsAvailableWithOfflineFeature;
                            },
                            get isLyricsAvailable() {
                                if (!(0, n._n)(e)) return !1;
                                let { slam: t, user: i } = (0, n.Zn)(e);
                                if (!i.hasPlus) return !1;
                                return !!e.hasLyrics && !t.isOfflineModeEnabled;
                            },
                            get isTrackAudiobook() {
                                if ((0, n._n)(e)) return e.type === k.S.AUDIOBOOK;
                                return !1;
                            },
                            get isTrackFairyTale() {
                                if ((0, n._n)(e)) return e.type === k.S.FAIRY_TALE;
                                return !1;
                            },
                            get isTrackNonMusic() {
                                return this.isTrackPodcast || this.isTrackAudiobook || this.isTrackFairyTale;
                            },
                            get isTrackMusic() {
                                if ((0, n._n)(e)) return e.type === k.S.TRACK || e.type === k.S.MUSIC;
                                return !1;
                            },
                            get isUGC() {
                                if ((0, n._n)(e)) return e.trackSource === T.J.UGC;
                                return;
                            },
                            get isOwn() {
                                if ((0, n._n)(e)) return e.trackSource === T.J.OWN;
                                return;
                            },
                            get isOwnReplacedToUGC() {
                                if ((0, n._n)(e)) return e.trackSource === T.J.OWN_REPLACED_TO_UGC;
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
                                if (!(0, n._n)(e)) return !1;
                                return !!(e.albumId && this.isOwn && e.isAvailable);
                            },
                            get hasTrackLink() {
                                if (!(0, n._n)(e)) return !1;
                                let {
                                    settings: { isMobile: t },
                                    slam: i,
                                } = (0, n.Zn)(e);
                                return e.isAvailable && !this.isUGC && !this.isOwnReplacedToUGC && !t && !i.isOfflineModeEnabled;
                            },
                            get isNonUserGenerated() {
                                if (!(0, n._n)(e)) return !1;
                                return !t.isUGC && !t.isOwnReplacedToUGC;
                            },
                            get hasModalAccess() {
                                return e.hasModalDisclaimer;
                            },
                            getDisclaimerEntityRef: (i) =>
                                i
                                    ? { entityType: i, entityId: e.id }
                                    : t.isTrackPodcast
                                      ? { entityType: l.nPY.PODCAST, entityId: e.id }
                                      : t.isTrackAudiobook
                                        ? { entityType: l.nPY.AUDIOBOOK, entityId: e.id }
                                        : { entityType: l.nPY.TRACK, entityId: e.id },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        afterCreate() {
                            e.trackType = e.type;
                        },
                        toggleLike: (0, n.L3)(function* () {
                            if (!(0, n._n)(e)) return;
                            let { library: t, user: i } = (0, n.Zn)(e);
                            if (i.isAuthorized) return yield t.toggleTrackLike({ entityId: e.id, albumId: e.albumId, userId: i.account.data.uid });
                        }),
                        toggleDislike: (0, n.L3)(function* () {
                            if (!(0, n._n)(e)) return;
                            let { library: t, user: i } = (0, n.Zn)(e);
                            if (i.isAuthorized) return yield t.toggleTrackDislike({ entityId: e.id, albumId: e.albumId, userId: i.account.data.uid });
                        }),
                        setListeningFinishedStatus: (0, n.L3)(function* () {
                            let t = e.streamProgress;
                            if (t)
                                return (null == t ? void 0 : t.hasEverFinished)
                                    ? yield null == t ? void 0 : t.markUnlistened({ trackId: Number(e.id) })
                                    : yield null == t ? void 0 : t.markListened({ trackId: Number(e.id) });
                        }),
                        getKey: (t) => ''.concat(t, '_').concat(e.id),
                    })),
                R = n.gK.model('MajorModel', { id: n.gK.number, name: n.gK.string, prettyName: n.gK.maybeNull(n.gK.string) });
            (a || (a = {})).TOO_MANY_FILES = 'TOO_MANY_FILES';
            let N = n.gK
                    .model('TrackUgcUploadModel', {
                        loadingState: n.gK.enumeration(Object.values(m)),
                        errorReason: n.gK.maybeNull(n.gK.enumeration(Object.values(c))),
                        playlistKind: n.gK.number,
                        trackId: n.gK.maybeNull(n.gK.string),
                        uploadUrl: n.gK.maybeNull(n.gK.string),
                    })
                    .volatile(() => ({ file: null, abortController: null }))
                    .actions((e) => {
                        let t = {
                            setFile(t) {
                                e.file = t;
                            },
                            getUploadUrl: (0, n.L3)(function* () {
                                if (!(0, n._n)(e)) return;
                                let { loaderResource: t, modelActionsLogger: i } = (0, n._$)(e),
                                    { user: r } = (0, n.Zn)(e);
                                if (![m.IDLE, m.REJECT].includes(e.loadingState)) return;
                                e.loadingState = m.PREPARE;
                                let l = r.account.data.uid;
                                if (l)
                                    try {
                                        var s;
                                        let i = null == (s = e.file) ? void 0 : s.name,
                                            r = yield t.getUploadUrl({ playlistId: ''.concat(l, ':').concat(e.playlistKind), uid: l, path: i });
                                        if (r && 'result' in r && r.result === a.TOO_MANY_FILES) {
                                            (e.loadingState = m.REJECT), (e.errorReason = c.TOO_MANY_FILES);
                                            return;
                                        }
                                        if (r && 'post-target' in r && 'ugc-track-id' in r) {
                                            (e.uploadUrl = r['post-target']), (e.trackId = r['ugc-track-id']);
                                            return;
                                        }
                                        (e.errorReason = c.UNKNOWN_ERROR), (e.loadingState = m.REJECT);
                                        return;
                                    } catch (t) {
                                        (e.loadingState = m.REJECT), i.error(t);
                                        return;
                                    }
                            }),
                            uploadFile: (0, n.L3)(function* () {
                                if (!(0, n._n)(e)) return;
                                let { prefixlessResource: t, modelActionsLogger: i } = (0, n._$)(e);
                                if (e.loadingState === m.PREPARE && e.uploadUrl && e.file) {
                                    e.loadingState = m.UPLOADING;
                                    try {
                                        let i = new FormData();
                                        i.append('file', e.file);
                                        let r = new AbortController(),
                                            a = r.signal;
                                        (e.abortController = r), yield t.uploadFile({ url: e.uploadUrl, formData: i }, { signal: a }), (e.loadingState = m.PROCESSING);
                                        return;
                                    } catch (t) {
                                        (e.loadingState = m.REJECT), i.error(t);
                                        return;
                                    }
                                }
                            }),
                            runUpload: (0, n.L3)(function* () {
                                (0, n._n)(e) && (yield t.getUploadUrl(), e.loadingState !== m.REJECT && (yield t.uploadFile()));
                            }),
                            retryUpload() {
                                if ((this.reset(), !(0, n._n)(e))) return;
                                let { ugcUploadCenter: t } = (0, n.Zn)(e);
                                t.runUploadTracksQueue();
                            },
                            abortUpload() {
                                var t;
                                if (((e.loadingState = m.CANCELLED), null == (t = e.abortController) || t.abort(), !(0, n._n)(e))) return;
                                let { ugcUploadCenter: i } = (0, n.Zn)(e);
                                i.clearCancelledUploads();
                            },
                            reset() {
                                (e.loadingState = m.IDLE), (e.trackId = null), (e.uploadUrl = null), (e.abortController = null);
                            },
                        };
                        return t;
                    }),
                j = n.gK.model('Ugc');
            var K = i(69410);
            i(80210), i(91638);
            var M = i(86482),
                w = i(70505);
        },
        45132: (e) => {
            e.exports = {
                title: 'ArtistStats_title__Yxyh1',
                count: 'ArtistStats_count__8h5zM',
                stats: 'ArtistStats_stats__Hammf',
                statsNumber_positive: 'ArtistStats_statsNumber_positive__GlukF',
                statsNumber_negative: 'ArtistStats_statsNumber_negative__C0bH5',
            };
        },
        47746: (e) => {
            e.exports = {
                entityTitle: 'NotificationPlayQueue_entityTitle__XCIsa',
                entityLink: 'NotificationPlayQueue_entityLink__O7tHL',
                text: 'NotificationPlayQueue_text___1DWX',
                image: 'NotificationPlayQueue_image__SLXsp',
            };
        },
        48320: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { L: () => r }),
                (function (e) {
                    (e.PUBLIC = 'public'), (e.PRIVATE = 'private');
                })(r || (r = {}));
        },
        49923: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => a });
            var r = {};
            Object.defineProperty(r, '__esModule', { value: !0 }),
                (r.createRipple = void 0),
                (r.createRipple = function (e, t, i) {
                    let r = null != i ? i : e.currentTarget,
                        a = document.createElement('span'),
                        n = Math.max(r.clientWidth, r.clientHeight),
                        l = n / 2,
                        s = r.getBoundingClientRect(),
                        o = 0 === e.clientX ? Math.round(s.width / 2) : e.clientX - s.left,
                        u = 0 === e.clientY ? Math.round(s.height / 2) : e.clientY - s.top;
                    (a.style.width = ''.concat(n, 'px')),
                        (a.style.height = ''.concat(n, 'px')),
                        (a.style.left = 0 === e.clientX ? '0px' : ''.concat(o - l, 'px')),
                        (a.style.top = ''.concat(u - l, 'px')),
                        a.classList.add(t);
                    let d = r.getElementsByClassName(t)[0];
                    d && d.remove(), r.insertBefore(a, r.firstChild);
                }),
                r.__esModule;
            var a = r.createRipple;
        },
        50509: (e, t, i) => {
            'use strict';
            i.d(t, { useOnDislikeClick: () => v });
            var r = i(62936),
                a = i(16264),
                n = i(44020),
                l = i(47480),
                s = i(7862),
                o = i(21192),
                u = i(6383),
                d = i(59935),
                c = i(42561),
                m = i(85906),
                p = i(80210),
                _ = i(2);
            let v = (e) => {
                let { user: t, fullscreenPlayer: i } = (0, c.Pjs)(),
                    v = (0, c.eGp)(),
                    { notify: f } = (0, c.lkh)(),
                    [g, y] = (0, n.useState)(!1),
                    { formatMessage: h } = (0, l.A)(),
                    A = (0, _.b)(e);
                return (0, d.c)(async () => {
                    if (e) {
                        let l = i.modal.isOpened ? c.uQT.FULLSCREEN_INFO : c.uQT.INFO,
                            d = i.modal.isOpened ? c.uQT.FULLSCREEN_ERROR : c.uQT.ERROR;
                        if (!t.isAuthorized) return void f((0, r.jsx)(m.hT, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: d });
                        if (g) return;
                        let _ = { ...(0, a.HO)(e), isDisliked: !e.isDisliked };
                        y(!0);
                        let b = await e.toggleDislike();
                        if ((y(!1), b === o.f.OK)) {
                            var n;
                            f((0, r.jsx)(p.NotificationDislike, { coverUri: _.coverUri, isDisliked: _.isDisliked, title: _.title, entityVariant: A }), {
                                containerId: l,
                            });
                            let e = _.isDisliked ? u.O.DISLIKE : u.O.UNDISLIKE;
                            if (v && (0, s.i)(v.state.currentContext.value)) {
                                let t = v.state.queueState.entityList.value.find((e) => {
                                    let { entity: t } = e;
                                    return t.data.meta.id === _.id;
                                });
                                t && (await v.state.currentContext.value.sendFeedback({ type: e, entity: t.entity }));
                            }
                            _.isDisliked &&
                                _.id === (null == v || null == (n = v.state.queueState.currentEntity.value) ? void 0 : n.entity.data.meta.id) &&
                                (null == v || v.moveForward());
                        } else f((0, r.jsx)(m.hT, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: d });
                    }
                });
            };
        },
        51945: (e, t, i) => {
            'use strict';
            i.d(t, { TrackPlaylistContext: () => r });
            let r = (0, i(44020).createContext)(null);
        },
        53235: (e) => {
            e.exports = { message: 'FailedPlaylistNotification_message__wxrzi' };
        },
        54238: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { g: () => r }),
                (function (e) {
                    (e.LIKE = 'like'), (e.DISLIKE = 'dislike');
                })(r || (r = {}));
        },
        57028: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        57297: (e, t, i) => {
            'use strict';
            i.d(t, { useArtistDisclaimer: () => a });
            var r = i(42561);
            let a = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.lVe)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        60131: (e, t, i) => {
            'use strict';
            i.d(t, { useOnPromoLandingLikeClick: () => o });
            var r = i(69526),
                a = i(54238),
                n = i(59935),
                l = i(42561),
                s = i(66776);
            let o = (e) => {
                let {
                        user: t,
                        modals: { promoLandingBuySubscriptionModal: i, crackdownModal: o },
                        settings: { isMobile: u },
                        promolanding: d,
                    } = (0, l.Pjs)(),
                    { isFreemium: c } = (0, l.XCI)(),
                    m = (0, s.f)(),
                    p = (0, r.useSearchParams)();
                return (0, n.c)(async () => {
                    if ((!c || (null == e ? void 0 : e.isLiked) || (u ? i.open() : o.open()), t.isAuthorized) && e) {
                        if (!e.isLiked) {
                            var r, n;
                            d.sendLikeFeedback({
                                reaction: a.g.LIKE,
                                yclid: null != (r = p.get(l.K3F.YCLID)) ? r : '',
                                campaignId: null != (n = p.get(l.K3F.UTM_CAMPAIGN)) ? n : '',
                                trackId: e.id,
                            });
                        }
                        return m({
                            track: e,
                            errorContainerId: l.uQT.ERROR,
                            infoContainerId: l.uQT.INFO,
                            withLink: !1,
                            withNotification: t.hasPlus,
                            playbackId: l.V_r.PROMO_LANDING,
                        });
                    }
                });
            };
        },
        61387: (e, t, i) => {
            'use strict';
            i.d(t, { useOnDislikeClick: () => g });
            var r = i(62936),
                a = i(16264),
                n = i(44020),
                l = i(47480),
                s = i(21192),
                o = i(59935),
                u = i(42561),
                d = i(85906),
                c = i(56721),
                m = i(20512),
                p = i(20418),
                _ = i(75780),
                v = i.n(_);
            let f = (e) => {
                    let { coverUri: t, title: i, isDisliked: a, closeToast: n } = e,
                        { formatMessage: s } = (0, l.A)(),
                        o = s(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                    return (0, r.jsx)(d.$W, {
                        closeToast: n,
                        message: (0, r.jsxs)('div', {
                            className: v().message,
                            children: [
                                (0, r.jsx)(m.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                                (0, r.jsx)(c.Paper, {
                                    className: v().cover,
                                    radius: 'round',
                                    children: (0, r.jsx)(d.BW, { className: v().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                                }),
                                (0, r.jsx)(p.Caption, { className: v().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                            ],
                        }),
                    });
                },
                g = (e) => {
                    let { user: t } = (0, u.Pjs)(),
                        { notify: i } = (0, u.lkh)(),
                        [c, m] = (0, n.useState)(!1),
                        { formatMessage: p } = (0, l.A)();
                    return (0, o.c)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(d.hT, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: u.uQT.ERROR });
                        if (c) return;
                        let n = { ...(0, a.HO)(e), isDisliked: !e.isDisliked };
                        m(!0);
                        let l = await e.toggleDislike();
                        m(!1),
                            l === s.f.OK
                                ? i((0, r.jsx)(f, { coverUri: n.coverUri, title: n.name, isDisliked: n.isDisliked }), { containerId: u.uQT.INFO })
                                : i((0, r.jsx)(d.hT, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: u.uQT.ERROR });
                    });
                };
        },
        63065: (e, t, i) => {
            'use strict';
            i.d(t, { CreatePlaylistCard: () => h });
            var r = i(62936),
                a = i(79950),
                n = i(19718),
                l = i(69526),
                s = i(44020),
                o = i(47480),
                u = i(26731),
                d = i(8669),
                c = i(48320),
                m = i(5099),
                p = i(85742),
                _ = i(20418),
                v = i(42561),
                f = i(85906),
                g = i(95991),
                y = i.n(g);
            let h = (0, n.PA)((e) => {
                let { className: t } = e,
                    { formatMessage: i } = (0, o.A)(),
                    { createPlaylist: n } = (0, v.Pjs)(),
                    { notify: g } = (0, v.lkh)(),
                    h = (0, l.useRouter)(),
                    A = (0, s.useRef)(!1),
                    b = (0, s.useCallback)(async () => {
                        if (A.current) return;
                        A.current = !0;
                        let e = await n.create({ title: i({ id: 'entity-names.new-playlist' }), visibility: c.L.PUBLIC });
                        if (e) {
                            let { href: t } = (0, v.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                            h.push(t);
                        } else g((0, r.jsx)(f.hT, { error: i({ id: 'playlist-errors.failed-to-create-playlist' }) }), { containerId: v.uQT.ERROR }), (A.current = !1);
                    }, [n, i, h, g]);
                return (
                    (0, s.useEffect)(
                        () => () => {
                            n.reset();
                        },
                        [n],
                    ),
                    (0, r.jsxs)('div', {
                        className: (0, a.$)(y().root, t),
                        ...(0, d.Am)(d.OA.playlist.CREATE_PLAYLIST_CARD),
                        children: [
                            (0, r.jsx)(m.$, {
                                className: y().button,
                                icon: (0, r.jsx)(p.Icon, { className: y().icon, variant: 'add', size: 'l' }),
                                radius: 's',
                                'aria-label': i({ id: 'playlist-actions.create-playlist' }),
                                onClick: b,
                                flexIcon: !0,
                                isBlock: !0,
                                ...(0, d.Am)(d.OA.playlist.CREATE_PLAYLIST_BUTTON),
                            }),
                            (0, r.jsx)(_.Caption, {
                                weight: 'medium',
                                size: 's',
                                variant: 'div',
                                className: y().text,
                                ...(0, d.Am)(d.OA.playlist.CREATE_PLAYLIST_TITLE),
                                children: (0, r.jsx)(u.A, { id: 'collection.new-playlist' }),
                            }),
                        ],
                    })
                );
            });
        },
        64987: (e, t, i) => {
            'use strict';
            i.d(t, { NotificationRemoveFromPlaylist: () => p });
            var r = i(62936),
                a = i(19718),
                n = i(44020),
                l = i(26731),
                s = i(59935),
                o = i(20418),
                u = i(42561),
                d = i(85906),
                c = i(30269),
                m = i.n(c);
            let p = (0, a.PA)((e) => {
                let { entityTitle: t, entityVariant: i, entityCoverUri: a, playlist: c, closeToast: p } = e,
                    { fullscreenPlayer: _ } = (0, u.Pjs)(),
                    v = (0, s.c)(() => {
                        _.modal.isOpened && _.modal.close();
                    }),
                    f = (0, n.useMemo)(() => {
                        let e,
                            a = {
                                trackName: (0, r.jsxs)(o.Caption, {
                                    className: m().title,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    lineClamp: 1,
                                    children: ['\xa0', t, '\xa0'],
                                }),
                                playlistName: (0, r.jsx)(d.N_, {
                                    className: m().link,
                                    href: c.url,
                                    onClick: v,
                                    children: (0, r.jsxs)(o.Caption, {
                                        className: m().playlistTitle,
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        lineClamp: 1,
                                        children: ['\xa0', c.title, '\xa0'],
                                    }),
                                }),
                            };
                        switch (i) {
                            case d.cp.PODCAST_EPISODE:
                                e = (0, r.jsx)(l.A, { id: 'notifications-info.removed-podcast-episode-from-playlist', values: a });
                                break;
                            case d.cp.AUDIOBOOK_EPISODE:
                                e = (0, r.jsx)(l.A, { id: 'notifications-info.removed-audiobook-episode-from-playlist', values: a });
                                break;
                            default:
                                e = (0, r.jsx)(l.A, { id: 'notifications-info.removed-track-from-playlist', values: a });
                        }
                        return (0, r.jsx)(o.Caption, { className: m().message, variant: 'div', type: 'controls', size: 'm', lineClamp: 1, children: e });
                    }, [t, i, v, c.title, c.url]);
                return (0, r.jsx)(d.$W, {
                    closeToast: p,
                    message: f,
                    cover: (0, r.jsx)(d.BW, { className: m().image, src: a, withAvatarReplace: !0, size: 100, fit: 'cover', alt: t }),
                    coverRadius: 's',
                });
            });
        },
        66776: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => _ });
            var r = i(62936),
                a = i(16264),
                n = i(44020),
                l = i(47480),
                s = i(7862),
                o = i(21192),
                u = i(6383),
                d = i(59935),
                c = i(42561),
                m = i(85906),
                p = i(91638);
            let _ = () => {
                let { notify: e } = (0, c.lkh)(),
                    [t, i] = (0, n.useState)(!1),
                    { formatMessage: _ } = (0, l.A)(),
                    v = (0, c.eGp)();
                return (0, d.c)(async (n) => {
                    let { track: l, withLink: d = !0, infoContainerId: c, errorContainerId: f, withNotification: g = !0, playbackId: y } = n;
                    if (t) return;
                    let h = { ...(0, a.HO)(l), isLiked: !l.isLiked };
                    i(!0);
                    let A = await l.toggleLike();
                    if ((i(!1), A === o.f.OK)) {
                        let e = h.isLiked ? u.O.LIKE : u.O.UNLIKE,
                            t = null == v ? void 0 : v.getState(y);
                        if (t && (0, s.i)(null == t ? void 0 : t.currentContext.value)) {
                            let i = t.queueState.entityList.value.find((e) => {
                                let { entity: t } = e;
                                return t.data.meta.id === h.id;
                            });
                            i && t.currentContext.value.sendFeedback({ type: e, entity: i.entity });
                        }
                    }
                    g &&
                        (A === o.f.OK
                            ? e((0, r.jsx)(p.NotificationLike, { withLink: d, track: h }), { containerId: c })
                            : e((0, r.jsx)(m.hT, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: f }));
                });
            };
        },
        67441: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { o: () => r }),
                (function (e) {
                    (e.ARTIST = 'artist'), (e.COMPOSER = 'composer');
                })(r || (r = {}));
        },
        69410: (e, t, i) => {
            'use strict';
            i.d(t, { ListeningProgress: () => y });
            var r = i(62936),
                a = i(79950),
                n = i(19718),
                l = i(44020),
                s = i(26731),
                o = i(8669),
                u = i(26744),
                d = i(85742),
                c = i(20418),
                m = i(46663),
                p = i(42561),
                _ = i(3873),
                v = i(41936),
                f = i(84970),
                g = i.n(f);
            let y = (0, n.PA)((e) => {
                var t, i, n, f, y, h, A, b, x;
                let { className: k, id: T, albumId: E, streamProgress: I, durationMs: C, playContextParams: P, withTimeLeftText: O = !0, isFinishedLabelHidden: S } = e,
                    L = (0, p.eGp)(),
                    { sonataState: R, album: N } = (0, p.Pjs)(),
                    j = Math.floor(C / 1e3),
                    [K, M] = (0, l.useState)(!1),
                    w = (0, v.useTimeLeftText)(),
                    { isPlaying: U, isCurrent: D } = (0, p.Dx4)({ playContextParams: P, entityId: E ? ''.concat(T, ':').concat(E) : T });
                (0, l.useEffect)(() => {
                    if (!D) return void M(!1);
                    let e =
                        null == L
                            ? void 0
                            : L.state.playerState.status.onChange(() => {
                                  (null == L ? void 0 : L.state.playerState.status.value) === m.MT.BUFFERING && M(!0);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [L, I, D, U]),
                    (0, l.useEffect)(() => {
                        var e;
                        (null == N || null == (e = N.meta) ? void 0 : e.listeningFinished)
                            ? (I.updateEndPositionSec(0), I.updateEverFinished(!0))
                            : (null == N ? void 0 : N.allTracksUnfinished) && I.updateEverFinished(!1);
                    }, [I, null == N ? void 0 : N.allTracksUnfinished, null == N || null == (t = N.meta) ? void 0 : t.listeningFinished]),
                    (0, l.useEffect)(() => {
                        var e, t;
                        D &&
                            (null == R || null == (e = R.entityMeta) ? void 0 : e.streamProgress) &&
                            I &&
                            R.entityMeta.streamProgress.hasEverFinished !== I.hasEverFinished &&
                            I.updateEverFinished(!!R.entityMeta.streamProgress.hasEverFinished),
                            j - ((null == I ? void 0 : I.endPositionSec) || 0) < 1 &&
                                ((null == R || null == (t = R.entityMeta) ? void 0 : t.streamProgress) &&
                                    D &&
                                    (R.entityMeta.streamProgress.updateEverFinished(!0), R.entityMeta.streamProgress.updateEndPositionSec(0)),
                                null == I || I.updateEverFinished(!0));
                    }, [
                        D,
                        null == R || null == (i = R.entityMeta) ? void 0 : i.streamProgress,
                        null == R || null == (f = R.entityMeta) || null == (n = f.streamProgress) ? void 0 : n.hasEverFinished,
                        I,
                        I.hasEverFinished,
                        I.endPositionSec,
                        j,
                    ]),
                    (0, l.useEffect)(() => {
                        if (!D) return;
                        let e =
                            null == L
                                ? void 0
                                : L.state.playerState.progress.onChange(() => {
                                      var e;
                                      let t = L.state.playerState.progress.value,
                                          i = null == R || null == (e = R.entityMeta) ? void 0 : e.streamProgress;
                                      0 !== t.position && K && I.updateEndPositionSec(t.position),
                                          D &&
                                              parseInt(''.concat(null == i ? void 0 : i.endPositionSec), 10) !== parseInt(''.concat(t.position), 10) &&
                                              (null == i || i.updateEndPositionSec(t.position));
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [L, I, D, U, K, T, null == R ? void 0 : R.entityMeta]);
                let F = (D && (null == R || null == (h = R.entityMeta) || null == (y = h.streamProgress) ? void 0 : y.endPositionSec)) || I.endPositionSec,
                    z = (0, _.useProgressTimeNonMusic)(null != F ? F : 0, j),
                    Y = (0, l.useMemo)(() => {
                        var e, t, i;
                        if (
                            ((D && (null == R || null == (t = R.entityMeta) || null == (e = t.streamProgress) ? void 0 : e.hasEverFinished)) ||
                                (null == I ? void 0 : I.hasEverFinished) ||
                                (null == N || null == (i = N.meta) ? void 0 : i.listeningFinished)) &&
                            !S
                        )
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(c.Caption, {
                                        lineClamp: 1,
                                        variant: 'div',
                                        className: (0, a.$)(g().text, { [g().text_withoutTimeLeft]: !O }),
                                        ...(0, o.Am)(o.OA.track.LISTENING_PROGRESS_FINISHED_TEXT),
                                        children: (0, r.jsx)(s.A, { id: 'time.finished' }),
                                    }),
                                    (0, r.jsx)(d.Icon, {
                                        size: 'xxs',
                                        variant: 'check',
                                        className: g().checkIcon,
                                        ...(0, o.Am)(o.OA.track.LISTENING_PROGRESS_FINISHED_ICON),
                                    }),
                                ],
                            });
                        if (!F || 0 === F) return;
                        let n = j - F,
                            l = w(n);
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c.Caption, {
                                    lineClamp: 1,
                                    variant: 'div',
                                    className: (0, a.$)(g().text, { [g().text_withoutTimeLeft]: !O }),
                                    ...(0, o.Am)(o.OA.track.LISTENING_PROGRESS_TIMINGS_TEXT),
                                    children: l,
                                }),
                                n > 1 || S
                                    ? (0, r.jsx)(u.q, {
                                          'aria-valuetext': z,
                                          'aria-busy': D && U,
                                          value: F,
                                          max: j,
                                          ...(0, o.Am)(o.OA.track.LISTENING_PROGRESS_TIMINGS_PROGRESS),
                                      })
                                    : (0, r.jsx)(d.Icon, {
                                          size: 'xxs',
                                          variant: 'check',
                                          className: g().checkIcon,
                                          ...(0, o.Am)(o.OA.track.LISTENING_PROGRESS_TIMINGS_ICON),
                                      }),
                            ],
                        });
                    }, [
                        j,
                        null == I ? void 0 : I.hasEverFinished,
                        O,
                        w,
                        D,
                        U,
                        null == R || null == (b = R.entityMeta) || null == (A = b.streamProgress) ? void 0 : A.hasEverFinished,
                        null == N || null == (x = N.meta) ? void 0 : x.listeningFinished,
                        S,
                        F,
                        z,
                    ]);
                return (0, r.jsx)('div', { className: (0, a.$)(g().root, k), ...(0, o.Am)(o.OA.track.LISTENING_PROGRESS), children: Y });
            });
        },
        69804: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => r });
            var r = (function (e) {
                return (e.NEXT = 'NEXT'), (e.LAST = 'LAST'), (e.REMOVE = 'REMOVE'), (e.HIDE = 'HIDE'), e;
            })({});
        },
        70505: (e, t, i) => {
            'use strict';
            i.d(t, { RemoveButton: () => u });
            var r = i(62936),
                a = i(44020),
                n = i(47480),
                l = i(8669),
                s = i(5099),
                o = i(85742);
            let u = (e) => {
                let { className: t, variant: i = 'text', onClick: u, iconClassName: d, iconSize: c, size: m = 's', ariaLabel: p } = e,
                    { formatMessage: _ } = (0, n.A)(),
                    v = null != p ? p : _({ id: 'play-queue.delete-from-queue' }),
                    f = (0, a.useCallback)(
                        (e) => {
                            null == u || u(), e.stopPropagation();
                        },
                        [u],
                    );
                return (0, r.jsx)(s.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: m,
                    radius: 'round',
                    'aria-label': v,
                    onClick: f,
                    icon: (0, r.jsx)(o.Icon, { size: c, className: d, variant: 'bucket' }),
                    ...(0, l.Am)(l.OA.track.REMOVE_BUTTON),
                });
            };
        },
        71851: (e, t, i) => {
            'use strict';
            i.d(t, { SeparatedArtists: () => K });
            var r = i(62936),
                a = i(79950),
                n = i(19718),
                l = i(44020),
                s = i(62828),
                o = i(42561),
                u = i(57028),
                d = i.n(u),
                c = i(47480),
                m = i(23480),
                p = i(8669),
                _ = i(59935),
                v = i(20418),
                f = i(85906);
            let g = (0, n.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: a,
                            captionClassName: n,
                            captionSize: l = 'm',
                            allArtistsTitle: u,
                            withCustomTooltip: d,
                            hoverSettings: g,
                        } = e,
                        { formatMessage: y } = (0, c.A)(),
                        {
                            track: h,
                            settings: { isMobile: A },
                        } = (0, o.Pjs)(),
                        b = (0, o.ZpR)(t.url),
                        { sendNavigateSearchFeedback: x } = (0, o.zEv)(),
                        k = (0, o.NKK)(),
                        T = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: r, fullscreenPlayer: a, fullscreenVideoPlayer: n } = (0, o.Pjs)(),
                                { modal: l } = r;
                            return (0, o.lVe)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), l.isOpened && (r.reset(), l.close()), a.modal.isOpened && a.modal.close();
                                },
                                onAfterHandled: () => {
                                    n.modal.isOpened && (n.modal.close(), n.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, _.c)((e) => {
                                A && h.isOpened && h.close(), b(e);
                            }),
                        }),
                        E = (0, _.c)((e) => {
                            k({ to: m.QT.ArtistScreen }), null == x || x(), T(e);
                        });
                    return i && !t.various
                        ? (0, r.jsx)(f.N_, {
                              'aria-label': y({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: a,
                              href: t.url,
                              onClick: E,
                              title: d ? void 0 : u || t.name,
                              ...(0, p.Am)(p.OA.artists.SEPARATED_ARTIST_TITLE),
                              children: (0, r.jsx)(s.m_, {
                                  enabled: !u && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: u || t.name,
                                  hoverSettings: g,
                                  children: (0, r.jsx)(v.Caption, { variant: 'span', type: 'entity', size: l, weight: 'medium', className: n, children: t.name }),
                              }),
                          })
                        : (0, r.jsx)(s.m_, {
                              enabled: !u && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: u || t.name,
                              hoverSettings: g,
                              children: (0, r.jsx)(v.Caption, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: l,
                                  weight: 'medium',
                                  className: n,
                                  title: d ? void 0 : u || t.name,
                                  ...(0, p.Am)(p.OA.artists.SEPARATED_ARTIST_TITLE),
                                  children: t.name,
                              }),
                          });
                }),
                y = (e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: a,
                            captionClassName: n,
                            captionSize: s,
                            allArtistsTitle: o,
                            withCustomTooltip: u,
                            hoverSettings: d,
                            shouldUseSeparator: c = !0,
                        } = e,
                        m = (0, l.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              c ? t.separator : '',
                                              (0, r.jsx)(
                                                  g,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: a,
                                                      captionClassName: n,
                                                      captionSize: s,
                                                      allArtistsTitle: o,
                                                      withCustomTooltip: u,
                                                      hoverSettings: d,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, c, i, a, n, s, o, u, d]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(g, {
                                artist: t,
                                withLink: i,
                                linkClassName: a,
                                captionClassName: n,
                                captionSize: s,
                                allArtistsTitle: o,
                                withCustomTooltip: u,
                                hoverSettings: d,
                            }),
                            m,
                        ],
                    });
                };
            var h = i(26731),
                A = i(55619);
            let b = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: n } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(A.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(d().spoiler, i),
                            onClick: n,
                            rel: 'nofollow',
                            ...(0, p.Am)(p.OA.artists.SEPARATED_ARTISTS_SPOILER),
                            children: (0, r.jsx)(h.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var x = i(30643),
                k = i(60188),
                T = i(68085),
                E = i(18460),
                I = i(87790),
                C = i.n(I);
            let P = (0, n.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, r.jsxs)(s.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, T.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: a, children: t }),
                            (0, r.jsx)(s.ZI, { className: C().tooltipContent, children: i.map((e) => (0, r.jsx)(E.ArtistItem, { artist: e }, e.id)) }),
                        ],
                    });
                }),
                O = (0, l.forwardRef)((e, t) => (0, r.jsx)(P, { forwardRef: t, ...e }));
            var S = i(64304),
                L = i(35702),
                R = i.n(L);
            let N = (0, n.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: n } = (0, c.A)();
                    return (0, r.jsx)(S.W1, {
                        isMobile: !0,
                        className: (0, a.$)(R().root, R().important),
                        label: t,
                        ariaLabel: n({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(E.ArtistItem, { artist: e }, e.id)),
                    });
                }),
                j = (0, n.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [n, s] = (0, l.useState)(!1),
                        {
                            settings: { isMobile: u },
                        } = (0, o.Pjs)(),
                        d = (0, _.c)(() => {
                            let e = a.current;
                            e && s(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        c = (0, k.L)(() =>
                            (0, x.A)(() => {
                                d();
                            }, 100),
                        );
                    if (
                        ((0, l.useEffect)(
                            () => (
                                window.addEventListener('resize', c),
                                d(),
                                () => {
                                    window.removeEventListener('resize', c);
                                }
                            ),
                            [c, d],
                        ),
                        (0, l.useEffect)(() => {
                            d();
                        }, [t, d]),
                        0 !== t.length)
                    )
                        return (n || u) && (!u || 1 !== t.length) ? (u ? (0, r.jsx)(N, { artists: t, label: i }) : (0, r.jsx)(O, { artists: t, label: i })) : i;
                }),
                K = (0, n.PA)((e) => {
                    let {
                            className: t,
                            artists: i = [],
                            separator: n = ', ',
                            lineClamp: u,
                            visibleArtistsCount: c,
                            withLink: m = !0,
                            spoilerClassName: p,
                            linkClassName: _,
                            captionClassName: v,
                            captionSize: f,
                            variant: g = 'breakAll',
                            withAllArtistsTitle: h = !0,
                            withComposer: A = !0,
                            spoilerComponent: x,
                            withCustomTooltip: k = !0,
                            artistIdWithoutLink: T,
                            withContextMenu: E,
                        } = e,
                        I = (0, l.useRef)(null),
                        [C, P] = (0, l.useState)(!1),
                        O = h
                            ? i
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let i = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...i]) : [t.name, ...i];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(n)
                            : '',
                        {
                            settings: { isMobile: S },
                        } = (0, o.Pjs)(),
                        L = 1 === i.length,
                        R = (0, l.useCallback)((e) => {
                            P(!0), e.preventDefault();
                        }, []),
                        N = (0, l.useMemo)(() => {
                            let e = i;
                            return (
                                c && !C && (e = i.slice(0, c)),
                                e.reduce((e, t) => {
                                    if (!A && t.isComposer) return e.length ? e : [];
                                    let i = (0, r.jsx)(
                                        y,
                                        {
                                            artist: t,
                                            linkClassName: _,
                                            captionClassName: v,
                                            withLink: m && t.id !== T && (((!S || L) && E) || !E),
                                            captionSize: f,
                                            allArtistsTitle: O,
                                            withCustomTooltip: k,
                                            hoverSettings: o.VP$,
                                            shouldUseSeparator: !!n,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([n, i]) : [i];
                                }, [])
                            );
                        }, [i, c, C, A, S, L, E, _, v, m, T, f, O, k, n]),
                        K = (0, l.useMemo)(() => {
                            if (!C && c && c < i.length) {
                                let e = i.length - c;
                                return (0, l.isValidElement)(x) ? x : (0, r.jsx)(b, { spoilerClassName: p, spoilerArtistsCount: e, handleOnSpoilerClick: R });
                            }
                        }, [i.length, R, C, p, x, c]),
                        M = (0, l.useMemo)(() => {
                            if (u) return { WebkitLineClamp: u };
                        }, [u]),
                        w = (0, r.jsx)(s.m_, {
                            referenceRef: I,
                            enabled: !!(h && O) && k && !E && !S,
                            offsetOptions: 4,
                            placement: 'top',
                            text: O,
                            hoverSettings: o.VP$,
                            children: (0, r.jsxs)('div', {
                                style: M,
                                className: (0, a.$)(d().root, d()['root_variant_'.concat(g)], { [d().root_clamp]: u && u > 0 }, { [d().ellipsis]: !u }, t),
                                title: h && O && !k && !E ? O : void 0,
                                children: [N, K],
                            }),
                        });
                    return E ? (0, r.jsx)(j, { labelRef: I, artists: i, label: w }) : w;
                });
        },
        75780: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        77188: (e, t, i) => {
            'use strict';
            i.d(t, { useMarkListenedClick: () => d });
            var r = i(62936),
                a = i(47480),
                n = i(2749),
                l = i(84585),
                s = i(59935),
                o = i(42561),
                u = i(85906);
            let d = (e) => {
                let {
                        user: t,
                        fullscreenPlayer: i,
                        sonataState: { entityMeta: d },
                        album: c,
                    } = (0, o.Pjs)(),
                    { notify: m } = (0, o.lkh)(),
                    { formatMessage: p } = (0, a.A)(),
                    _ = (0, o.eGp)();
                return (0, s.c)(async () => {
                    if (!e) return;
                    let a = i.modal.isOpened ? o.uQT.FULLSCREEN_ERROR : o.uQT.ERROR;
                    if (!t.isAuthorized) return void m((0, r.jsx)(u.hT, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a });
                    let s = e.streamProgress,
                        v = (null == d ? void 0 : d.id) === e.id && (null == d ? void 0 : d.albumId) === e.albumId;
                    if ((await e.setListeningFinishedStatus()) !== l.T.OK)
                        m((0, r.jsx)(u.hT, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: a });
                    else {
                        var f, g;
                        let t = !(null == s ? void 0 : s.hasEverFinished),
                            i = null == _ ? void 0 : _.state.queueState.entityList.value,
                            r =
                                null == i
                                    ? void 0
                                    : i.find((t) => {
                                          let { entity: i } = t;
                                          if ((0, n.b)(i)) {
                                              var r, a;
                                              let t = i.data.meta;
                                              return t.realId === e.id && (null == (a = t.albums) || null == (r = a[0]) ? void 0 : r.id) === e.albumId;
                                          }
                                          return !1;
                                      });
                        r && (r.entity.everFinished = !!t),
                            v &&
                                (null == d ? void 0 : d.streamProgress) &&
                                (null == (f = d.streamProgress) ? void 0 : f.hasEverFinished) !== t &&
                                (d.streamProgress.updateEverFinished(t), t && d.streamProgress.updateEndPositionSec(0)),
                            (null == (g = c.meta) ? void 0 : g.listeningFinished) &&
                                !t &&
                                (c.markTracksFinished({ withoutTracks: [e.id] }), c.setAlbumUnfinished(), c.setAllTracksUnfinished(!1)),
                            null == s || s.updateEverFinished(t),
                            c.meta && t && c.checkAllAlbumTrackFinished();
                    }
                });
            };
        },
        77642: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__R2jfZ',
                text: 'NotificationDislike_text__xmrnn',
                cover: 'NotificationDislike_cover__bvqFM',
                image: 'NotificationDislike_image__h0_EO',
            };
        },
        79078: (e, t, i) => {
            'use strict';
            i.d(t, { ArtistsMenu: () => c });
            var r = i(62936),
                a = i(19718),
                n = i(47480),
                l = i(57282),
                s = i(42561),
                o = i(18460),
                u = i(12052),
                d = i.n(u);
            let c = (0, a.PA)((e) => {
                let { artists: t, open: i, positionElement: a, onOpenChange: u } = e,
                    { formatMessage: c } = (0, n.A)(),
                    {
                        settings: { isMobile: m },
                    } = (0, s.Pjs)();
                return (0, r.jsxs)(l.AM, {
                    isMobile: m,
                    placement: m ? 'bottom' : 'top',
                    open: i,
                    onOpenChange: u,
                    positionElement: m ? void 0 : a,
                    transform: m,
                    children: [
                        null,
                        (0, r.jsx)(l.hl, {
                            className: d().root,
                            'aria-label': c({ id: 'interface-actions.context-menu-artists' }),
                            children: (0, r.jsx)('div', {
                                className: d().menuList,
                                children: t.map((e) => (0, r.jsx)(o.ArtistItem, { artist: e, className: d().menuItem }, e.id)),
                            }),
                        }),
                    ],
                });
            });
        },
        79416: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { J: () => r }),
                (function (e) {
                    (e.OWN = 'OWN'), (e.UGC = 'UGC'), (e.OWN_REPLACED_TO_UGC = 'OWN_REPLACED_TO_UGC'), (e.EXTERNAL = 'EXTERNAL');
                })(r || (r = {}));
        },
        80210: (e, t, i) => {
            'use strict';
            i.d(t, { NotificationDislike: () => m });
            var r = i(62936),
                a = i(79950),
                n = i(47480),
                l = i(56721),
                s = i(20512),
                o = i(20418),
                u = i(85906),
                d = i(77642),
                c = i.n(d);
            let m = (e) => {
                let t,
                    { coverUri: i, title: d, isDisliked: m, closeToast: p, className: _, entityVariant: v } = e,
                    { formatMessage: f } = (0, n.A)();
                if (m)
                    switch (v) {
                        case u.cp.PODCAST_EPISODE:
                            t = f({ id: 'notifications-info.podcast-episode-unavailable-in-recommendations' });
                            break;
                        case u.cp.AUDIOBOOK_EPISODE:
                            t = f({ id: 'notifications-info.audiobook-episode-unavailable-in-recommendations' });
                            break;
                        default:
                            t = f({ id: 'notifications-info.track-unavailable-in-recommendations' });
                    }
                else
                    switch (v) {
                        case u.cp.PODCAST_EPISODE:
                            t = f({ id: 'notifications-info.podcast-episode-available-in-recommendations' });
                            break;
                        case u.cp.AUDIOBOOK_EPISODE:
                            t = f({ id: 'notifications-info.audiobook-episode-available-in-recommendations' });
                            break;
                        default:
                            t = f({ id: 'notifications-info.track-available-in-recommendations' });
                    }
                return (0, r.jsx)(u.$W, {
                    className: (0, a.$)(c().root, _),
                    closeToast: p,
                    message: (0, r.jsxs)('div', {
                        className: c().message,
                        children: [
                            (0, r.jsx)(s.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, r.jsx)(l.Paper, {
                                className: c().cover,
                                radius: 's',
                                children: (0, r.jsx)(u.BW, { className: c().image, src: i, alt: d, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(o.Caption, { className: c().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                });
            };
        },
        81628: (e, t, i) => {
            'use strict';
            i.d(t, {
                lW: () => P.ArtistBandlinkScanner,
                V8: () => O.ArtistItem,
                dP: () => A,
                PK: () => C,
                KH: () => L.ArtistSocialLinks,
                FO: () => R.ArtistStats,
                MJ: () => S.ArtistsMenu,
                iQ: () => N.SeparatedArtists,
                DZ: () => r,
                NE: () => n,
                dM: () => u,
                FA: () => o,
                as: () => d,
                Uw: () => c,
                AX: () => m,
                XV: () => p,
                SA: () => _.useArtistDisclaimer,
                Bn: () => v.useArtistsMenu,
                eI: () => f.useGetArtistTypeName,
                mW: () => g.useOnDislikeClick,
                KX: () => y.useOnLikeClick,
                A7: () => h.useOnPinClick,
            });
            let r = (e) => ({ imgUrl: e.imgUrl, title: e.title, url: e.url });
            var a = i(67);
            let n = (e) => {
                var t, i, r, n, l;
                return e
                    ? {
                          id: Number(e.id),
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: Number(e.id),
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: e.disclaimers,
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: a.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: e.disclaimers,
                          counts: {
                              directAlbums: (null == (i = e.counts) ? void 0 : i.albums) || 0,
                              alsoAlbums: (null == (r = e.counts) ? void 0 : r.compilations) || 0,
                              tracks: (null == (n = e.counts) ? void 0 : n.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (l = e.trailer) ? void 0 : l.isAvailable) },
                          hasPromotions: !1,
                          genres: [],
                          links: [],
                          ticketsAvailable: !1,
                          ratings: { week: 0, month: 0, day: 0 },
                          composer: e.isComposer || !1,
                          various: e.various || !1,
                      }
                    : {
                          id: '',
                          name: '',
                          various: !1,
                          composer: !1,
                          decomposed: [],
                          ogImage: '',
                          hasPromotions: !1,
                          genres: [],
                          ticketsAvailable: !1,
                          links: [],
                          ratings: { week: 0, month: 0, day: 0 },
                          counts: { directAlbums: 0, alsoAlbums: 0, tracks: 0, alsoTracks: 0 },
                          available: !1,
                          disclaimers: [],
                      };
            };
            var l = i(51606),
                s = i(42561);
            let o = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = [];
                    return (
                        e.forEach((i, r) => {
                            let a = e[r + 1];
                            if ('string' == typeof i && 'object' == typeof a) {
                                var n, s;
                                t.push(
                                    (0, l.wg)({
                                        id: String(a.id),
                                        name: a.name,
                                        various: a.various,
                                        isComposer: a.composer,
                                        separator: i,
                                        isAvailable: null == (s = a.available) || s,
                                        disclaimers: a.disclaimers,
                                        coverUri: null == (n = a.cover) ? void 0 : n.uri,
                                    }),
                                );
                            }
                        }),
                        t.length > 0 ? t : void 0
                    );
                },
                u = (e) => {
                    var t, i, r;
                    let a = o(e.decomposed),
                        n = (null == e ? void 0 : e.counts) ? ((e) => ({ albums: e.directAlbums, compilations: e.alsoAlbums, tracks: e.tracks }))(e.counts) : void 0,
                        u = (0, s.mxW)(e.trailer),
                        d = e.cutoutCover ? (0, s.pX4)(e.cutoutCover) : void 0;
                    return (0, l.wg)({
                        id: String(e.id),
                        name: e.name,
                        isComposer: e.composer,
                        coverUri: null == (t = e.cover) ? void 0 : t.uri,
                        coverType: null == (i = e.cover) ? void 0 : i.type,
                        various: e.various,
                        averageColor: (0, s.QBb)(null == e ? void 0 : e.derivedColors),
                        decomposed: a,
                        counts: n,
                        isAvailable: null == (r = null == e ? void 0 : e.available) || r,
                        disclaimers: e.disclaimers,
                        trailer: u,
                        cutoutCover: d,
                    });
                },
                d = (e) => {
                    var t, i;
                    let { artist: r, trailer: a, isComposer: n, likesCount: u } = e,
                        d = o(r.decomposed),
                        { available: c, disclaimers: m } = (0, s.fyr)(r);
                    return (0, l.wg)({
                        id: String(r.id),
                        name: r.name,
                        coverUri: null == (t = r.cover) ? void 0 : t.uri,
                        various: r.various,
                        decomposed: d,
                        isAvailable: c,
                        disclaimers: m,
                        isComposer: n,
                        averageColor: null == (i = r.cover) ? void 0 : i.color,
                        trailer: (0, s.mxW)(a),
                        likesCount: u,
                    });
                },
                c = (e, t) => {
                    let i = e / 60;
                    return i <= 45 ? t({ id: 'time.minutes-left' }, { minutes: Math.round(i) }) : t({ id: 'time.hours' }, { hours: Math.round((i / 60) * 2) / 2 });
                },
                m = (e) =>
                    e.reduce(
                        (e, t) =>
                            e +
                            1 +
                            ((e) => {
                                var t;
                                return null != (t = null == e ? void 0 : e.length) ? t : 0;
                            })(t.decomposed),
                        0,
                    ),
                p = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ', ';
                    return e
                        .map((e) =>
                            e.decomposed
                                ? e.name +
                                  e.decomposed
                                      .map((e) => {
                                          var t;
                                          return ''.concat(null != (t = e.separator) ? t : '').concat(e.name);
                                      })
                                      .join('')
                                : e.name,
                        )
                        .join(t);
                };
            var _ = i(57297),
                v = i(14848),
                f = i(82447),
                g = i(61387),
                y = i(31011),
                h = i(1624);
            let A = l.gK.model('ArtistLink', { imgUrl: l.gK.maybeNull(l.gK.string), title: l.gK.maybeNull(l.gK.string), url: l.gK.maybeNull(l.gK.string) });
            var b = i(92496),
                x = i(21192),
                k = i(54690);
            let T = l.gK
                    .compose(
                        l.gK.model('BaseArtist', {
                            id: l.gK.string,
                            name: l.gK.string,
                            various: l.gK.maybe(l.gK.boolean),
                            isComposer: l.gK.maybe(l.gK.boolean),
                            isAvailable: l.gK.boolean,
                            trailer: l.gK.maybe(k.aQ),
                            coverUri: l.gK.maybe(l.gK.string),
                            coverType: l.gK.maybe(l.gK.string),
                            cutoutCover: l.gK.maybe(k.$B),
                        }),
                        k.tP,
                        k.Ec,
                    )
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.id, '_').concat(e.name);
                        },
                        get url() {
                            let { href: t } = (0, s.uvd)('/artist/:artistId', { params: { artistId: e.id } });
                            return t;
                        },
                        get isLiked() {
                            if (!(0, l._n)(e)) return !1;
                            let { library: t } = (0, l.Zn)(e);
                            return t.isArtistLiked(e.id);
                        },
                        get isDisliked() {
                            if (!(0, l._n)(e)) return !1;
                            let { library: t } = (0, l.Zn)(e);
                            return t.isArtistDisliked(e.id);
                        },
                        get pinId() {
                            return ''.concat(b._.ARTIST_ITEM).concat(e.id);
                        },
                        get seeds() {
                            return ['artist:'.concat(e.id)];
                        },
                        get isPinned() {
                            if (!(0, l._n)(e)) return !1;
                            let { pinsCollection: t } = (0, l.Zn)(e);
                            return t.isPinned(this.pinId);
                        },
                        get isLegalRejected() {
                            return e.getIsLegalRejected(e.isAvailable);
                        },
                        get isUnsafeLegal() {
                            return e.getIsUnsafeLegal(e.isAvailable);
                        },
                        get isCoverFromAlbum() {
                            if (!(0, l._n)(e)) return !1;
                            return e.coverType === a.Q.FROM_ALBUM_COVER;
                        },
                        getDisclaimerEntityRef: (t) => ({ entityType: null != t ? t : s.nPY.ARTIST, entityId: e.id }),
                    }))
                    .actions((e) => ({
                        toggleLike: (0, l.L3)(function* () {
                            if (!(0, l._n)(e)) return;
                            let { library: t, user: i } = (0, l.Zn)(e);
                            if (i.isAuthorized) {
                                let r = yield t.toggleArtistLike({ entityId: e.id, userId: i.account.data.uid });
                                return (0, l._n)(e) && r === x.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), r;
                            }
                        }),
                        toggleDislike() {
                            if (!(0, l._n)(e)) return;
                            let { library: t, user: i } = (0, l.Zn)(e);
                            return t.toggleArtistDislike({ entityId: e.id, userId: i.account.data.uid });
                        },
                        togglePin: (0, l.L3)(function* () {
                            if (!(0, l._n)(e)) return;
                            let { pinsCollection: t, user: i } = (0, l.Zn)(e);
                            if (i.isAuthorized) return yield t.toggleArtistPin({ id: e.id }, e.pinId);
                        }),
                        getKey: (t) => ''.concat(t, '_').concat(e.id),
                    })),
                E = l.gK.model('Counts', { albums: l.gK.number, compilations: l.gK.number, tracks: l.gK.number }),
                I = T.props({ separator: l.gK.maybe(l.gK.string) }),
                C = T.props({ decomposed: l.gK.maybe(l.gK.array(I)), averageColor: l.gK.maybe(l.gK.string), counts: l.gK.maybe(E) }).views((e) => ({
                    get isAvailableForPlaying() {
                        if (void 0 === e.counts) return !0;
                        return e.counts.tracks > 0;
                    },
                }));
            var P = i(41338),
                O = i(18460),
                S = i(79078),
                L = i(89774),
                R = i(462),
                N = i(71851);
        },
        82447: (e, t, i) => {
            'use strict';
            i.d(t, { useGetArtistTypeName: () => n });
            var r = i(47480),
                a = i(67441);
            let n = (e) => {
                let { formatMessage: t } = (0, r.A)();
                return t(e === a.o.COMPOSER ? { id: 'entity-names.composer' } : { id: 'entity-names.singer' });
            };
        },
        84585: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { T: () => r }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(r || (r = {}));
        },
        84970: (e) => {
            e.exports = {
                root: 'ListeningProgress_root__Rvlcn',
                text_withoutTimeLeft: 'ListeningProgress_text_withoutTimeLeft__eAmOF',
                checkIcon: 'ListeningProgress_checkIcon___yh49',
            };
        },
        86428: (e) => {
            e.exports = { root: 'ArtistSocialLinks_root__9wQxA', link: 'ArtistSocialLinks_link__UFvCL', icon: 'ArtistSocialLinks_icon__Y9VLu' };
        },
        86482: (e, t, i) => {
            'use strict';
            i.d(t, { NotificationPlayQueue: () => m });
            var r = i(62936),
                a = i(44020),
                n = i(26731),
                l = i(8669),
                s = i(20418),
                o = i(85906),
                u = i(69804),
                d = i(47746),
                c = i.n(d);
            let m = (e) => {
                let { closeToast: t, entityVariant: i, entityTitle: d, coverUri: m, variant: p } = e,
                    _ = (0, a.useMemo)(
                        () =>
                            (0, r.jsxs)(s.Caption, {
                                className: c().entityTitle,
                                variant: 'span',
                                type: 'controls',
                                size: 'm',
                                lineClamp: 1,
                                children: ['\xa0', d, '\xa0'],
                            }),
                        [d],
                    ),
                    v = (0, a.useMemo)(() => {
                        switch (p) {
                            case u.N.NEXT:
                                return ((e, t) => {
                                    switch (e) {
                                        case o.cp.TRACK:
                                            return (0, r.jsx)(n.A, { id: 'play-queue.track-will-be-played-next', values: { title: t } });
                                        case o.cp.PODCAST_EPISODE:
                                            return (0, r.jsx)(n.A, { id: 'play-queue.podcast-episode-will-be-played-next', values: { title: t } });
                                        case o.cp.AUDIOBOOK_EPISODE:
                                            return (0, r.jsx)(n.A, { id: 'play-queue.audiobook-episode-will-be-played-next', values: { title: t } });
                                        case o.cp.ALBUM:
                                            return (0, r.jsx)(n.A, { id: 'play-queue.album-will-be-played-next', values: { title: t } });
                                        case o.cp.PLAYLIST:
                                            return (0, r.jsx)(n.A, { id: 'play-queue.playlist-will-be-played-next', values: { title: t } });
                                    }
                                })(i, _);
                            case u.N.LAST:
                                return ((e, t) => {
                                    switch (e) {
                                        case o.cp.TRACK:
                                            return (0, r.jsx)(n.A, { id: 'play-queue.track-will-be-played-last', values: { title: t } });
                                        case o.cp.PODCAST_EPISODE:
                                            return (0, r.jsx)(n.A, { id: 'play-queue.podcast-episode-will-be-played-last', values: { title: t } });
                                        case o.cp.AUDIOBOOK_EPISODE:
                                            return (0, r.jsx)(n.A, { id: 'play-queue.audiobook-episode-will-be-played-last', values: { title: t } });
                                        case o.cp.ALBUM:
                                            return (0, r.jsx)(n.A, { id: 'play-queue.album-will-be-played-last', values: { title: t } });
                                        case o.cp.PLAYLIST:
                                            return (0, r.jsx)(n.A, { id: 'play-queue.playlist-will-be-played-last', values: { title: t } });
                                    }
                                })(i, _);
                            case u.N.HIDE:
                            case u.N.REMOVE:
                                return ((e, t) => {
                                    switch (e) {
                                        case o.cp.TRACK:
                                            return (0, r.jsx)(n.A, { id: 'play-queue.track-will-be-removed', values: { title: t } });
                                        case o.cp.PODCAST_EPISODE:
                                            return (0, r.jsx)(n.A, { id: 'play-queue.podcast-episode-will-be-removed', values: { title: t } });
                                        case o.cp.AUDIOBOOK_EPISODE:
                                            return (0, r.jsx)(n.A, { id: 'play-queue.audiobook-episode-will-be-removed', values: { title: t } });
                                        case o.cp.ALBUM:
                                            return (0, r.jsx)(n.A, { id: 'play-queue.album-will-be-removed', values: { title: t } });
                                        case o.cp.PLAYLIST:
                                            return (0, r.jsx)(n.A, { id: 'play-queue.playlist-will-be-removed', values: { title: t } });
                                    }
                                })(i, _);
                        }
                    }, [p, i, _]);
                return (0, r.jsx)(o.$W, {
                    message: (0, r.jsx)(s.Caption, {
                        className: c().text,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        ...(0, l.Am)(l.OA.track.PLAY_QUEUE_NOTIFICATION_TEXT),
                        children: v,
                    }),
                    cover: (0, r.jsx)(o.BW, { className: c().image, src: m, size: 100, fit: 'cover', alt: d, withAvatarReplace: !0 }),
                    closeToast: t,
                    coverRadius: 's',
                });
            };
        },
        86709: (e) => {
            e.exports = { root: 'ContextMenuPlaylistPrivacyItem_root__kz3gc', caption: 'ContextMenuPlaylistPrivacyItem_caption__0VuXh' };
        },
        87790: (e) => {
            e.exports = { tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD' };
        },
        89774: (e, t, i) => {
            'use strict';
            i.d(t, { ArtistSocialLinks: () => _ });
            var r = i(62936),
                a = i(47480),
                n = i(23480),
                l = i(8669),
                s = i(59935),
                o = i(13030),
                u = i(42561),
                d = i(85906),
                c = i(86428),
                m = i.n(c);
            let p = (e) => {
                    var t;
                    let { link: i, artistName: l, shouldSendAnalyticsOnNavigate: c } = e,
                        { formatMessage: p } = (0, a.A)(),
                        _ = (0, u.NKK)(),
                        { ref: v, intersectionPropertyId: f } = (0, u.nMI)(),
                        g = (0, s.c)(() => {
                            var e;
                            c && _({ to: n.QT.Link, deepLink: null != (e = i.url) ? e : void 0 });
                        });
                    return (0, r.jsx)('div', {
                        ref: v,
                        'data-intersection-property-id': f,
                        children: (0, r.jsx)(d.N_, {
                            href: i.url,
                            className: m().link,
                            target: '_blank',
                            'aria-label': p({ id: 'artist.artist-links-label' }, { artistName: l, linkName: i.title }),
                            onClick: g,
                            children: (0, r.jsx)(o.Image, {
                                fit: 'contain',
                                className: m().icon,
                                size: 100,
                                src: null != (t = i.imgUrl) ? t : void 0,
                                fallbackIconVariant: 'site',
                                fallbackIconSize: 'xs',
                                withAvatarReplace: !0,
                            }),
                        }),
                    });
                },
                _ = (e) => {
                    let { links: t, artistName: i, shouldSendAnalyticsOnNavigate: a, albumId: s } = e;
                    return (0, r.jsx)('div', {
                        className: m().root,
                        ...(0, l.Am)(l.e8.content.ARTIST_ABOUT_SOCIAL_LINKS),
                        children: t.map((e, l) =>
                            (0, r.jsx)(
                                u.Bki,
                                {
                                    objectType: n.ky.Link,
                                    objectId: String(e.url),
                                    objectPosX: l + 1,
                                    objectPosY: 1,
                                    objectsCount: t.length,
                                    mainObjectType: n.ky.Link,
                                    mainObjectId: s,
                                    children: (0, r.jsx)(p, { link: e, artistName: i, shouldSendAnalyticsOnNavigate: a }, e.url),
                                },
                                e.url,
                            ),
                        ),
                    });
                };
        },
        91638: (e, t, i) => {
            'use strict';
            i.d(t, { NotificationLike: () => u });
            var r = i(62936),
                a = i(19718),
                n = i(85906),
                l = i(2),
                s = i(20073),
                o = i(42561);
            let u = (0, a.PA)((e) => {
                let { track: t, closeToast: i, withLink: a } = e,
                    u = ((e) => {
                        switch (e.type) {
                            case s.S.PODCAST:
                            case s.S.AUDIOBOOK:
                                return o.Zyd.collectionShelfLiked.href;
                            default:
                                return o.Zyd.collection.href;
                        }
                    })(t),
                    d = (0, l.b)(t);
                return (0, r.jsx)(n.OM, {
                    closeToast: i,
                    entityVariant: d,
                    entityTitle: t.title,
                    collectionUrl: u,
                    coverUri: t.coverUri,
                    isLiked: t.isLiked,
                    withLink: a,
                });
            });
        },
        92496: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { _: () => r }),
                (function (e) {
                    (e.ALBUM_ITEM = 'album_item'),
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
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item');
                })(r || (r = {}));
        },
        95991: (e) => {
            e.exports = {
                root: 'CreatePlaylistCard_root__pMDua',
                button: 'CreatePlaylistCard_button__ZaAtb',
                icon: 'CreatePlaylistCard_icon__09K9N',
                text: 'CreatePlaylistCard_text__dd9Q6',
            };
        },
    },
]);
