(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4441],
    {
        5407: (e, i, t) => {
            'use strict';
            t.d(i, { P: () => m });
            var a = t(88800),
                o = t(29993),
                n = t(88969),
                l = t(29504),
                r = t(59304),
                s = t(51028),
                c = t.n(s);
            let d = () =>
                (0, a.jsx)(r.$, {
                    message: (0, a.jsx)(l.HL, { variant: 'div', size: 'm', className: c().notification, children: (0, a.jsx)(n.A, { id: 'ads.continue-ad' }) }),
                    coverRadius: 's',
                });
            var u = t(29595),
                f = t(74965),
                p = t(72288);
            let m = () => {
                let { notify: e } = (0, f.l)(),
                    { advert: i } = (0, p.g)();
                return (0, o.c)(() => (i.isAdvertShown && e((0, a.jsx)(d, {}), { containerId: u.u.INFO }), !!i.isAdvertShown));
            };
        },
        9618: (e, i, t) => {
            'use strict';
            t.d(i, { q: () => n });
            var a = t(53548),
                o = t(72288);
            let n = () => {
                var e;
                let {
                        modals: { buySubscriptionModal: i },
                        user: t,
                        settings: n,
                        familyInvite: l,
                        freeAccess: r,
                    } = (0, o.g)(),
                    s = null == (e = n.browserInfo) ? void 0 : e.isTouch,
                    c = l.modal.isOpened;
                return (0, a.useMemo)(
                    () => ({
                        showBuySubscriptionModal: i.open,
                        hideBuySubscriptionModal: i.close,
                        shouldShowBuySubscriptionModal: (r.isFreeWebUser || !t.isAuthorized) && !!s && !c,
                    }),
                    [i.close, i.open, r.isFreeWebUser, s, t.isAuthorized, c],
                );
            };
        },
        12893: (e) => {
            e.exports = {
                collectionLink: 'BaseNotificationLike_collectionLink__HDZIi',
                collectionTitle: 'BaseNotificationLike_collectionTitle__42dz9',
                entityLink: 'BaseNotificationLike_entityLink__PW80J',
                entityTitle: 'BaseNotificationLike_entityTitle__Eyv0h',
                text: 'BaseNotificationLike_text__Jvlq8',
                image: 'BaseNotificationLike_image__8wD5H',
            };
        },
        15077: (e, i, t) => {
            'use strict';
            t.d(i, { c: () => a });
            var a = (function (e) {
                return (
                    (e.ARTIST = 'artist'),
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.TRACK = 'track'),
                    (e.VIBE = 'vibe'),
                    (e.PODCAST = 'podcast'),
                    (e.PODCAST_EPISODE = 'podcast-episode'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.AUDIOBOOK_EPISODE = 'audiobook-episode'),
                    (e.FAIRY_TALE = 'fairy-tale'),
                    (e.CLIP = 'clip'),
                    e
                );
            })({});
        },
        15425: (e, i, t) => {
            'use strict';
            t.d(i, { N: () => s });
            var a = t(88800),
                o = t(88969),
                n = t(17392),
                l = t(52300),
                r = t(19934);
            let s = (e) => {
                let { onClick: i, className: t, disabled: s } = e;
                return (0, a.jsx)(r.Dr, {
                    className: t,
                    onClick: i,
                    icon: (0, a.jsx)(l.I, { variant: 'trailer', size: 'xxs' }),
                    disabled: s,
                    'data-test-id': n.S7.CONTEXT_MENU_TRAILER_BUTTON,
                    children: (0, a.jsx)(o.A, { id: 'entity-names.trailer' }),
                });
            };
        },
        15979: (e) => {
            e.exports = {
                message: 'EditorsFeaturesNotification_message__Q__9v',
                text: 'EditorsFeaturesNotification_text__b79yA',
                title: 'EditorsFeaturesNotification_title__BuJZ_',
                link: 'EditorsFeaturesNotification_link__deYjx',
                playlistTitle: 'EditorsFeaturesNotification_playlistTitle__Hv7bZ',
                image: 'EditorsFeaturesNotification_image__AidPK',
            };
        },
        22505: (e, i, t) => {
            'use strict';
            t.d(i, { d: () => B });
            var a = t(88800),
                o = t(84961),
                n = t(2058),
                l = t(30282),
                r = t(17392),
                s = t(19934),
                c = t(72288),
                d = t(46936),
                u = t(53548),
                f = t(29595),
                p = t(74965),
                m = t(27506),
                v = t(88969),
                y = t(29504),
                L = t(59304),
                b = t(52424),
                A = t.n(b);
            let x = (e) => {
                    let { closeToast: i } = e;
                    return (0, a.jsx)(L.$, {
                        message: (0, a.jsx)(y.HL, {
                            className: A().message,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, a.jsx)(v.A, { id: 'playlist-errors.failed-part-tracks-download-xlsx' }),
                        }),
                        closeToast: i,
                    });
                },
                g = (e) => {
                    let { closeToast: i } = e;
                    return (0, a.jsx)(L.$, {
                        message: (0, a.jsx)(y.HL, {
                            className: A().message,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, a.jsx)(v.A, { id: 'playlist-errors.failed-download-xlsx' }),
                        }),
                        closeToast: i,
                    });
                };
            var _ = t(15979),
                S = t.n(_);
            let I = (e) => {
                    let { closeToast: i } = e;
                    return (0, a.jsx)(L.$, {
                        message: (0, a.jsx)(y.HL, {
                            variant: 'div',
                            size: 'm',
                            className: S().text,
                            children: (0, a.jsx)(v.A, { id: 'notifications-info.xlsx-success' }),
                        }),
                        closeToast: i,
                        coverRadius: 's',
                    });
                },
                E = () =>
                    (0, a.jsx)(L.$, {
                        message: (0, a.jsx)(y.HL, {
                            variant: 'div',
                            size: 'm',
                            className: S().text,
                            children: (0, a.jsx)(v.A, { id: 'notifications-info.xlsx-loading' }),
                        }),
                        coverRadius: 's',
                    }),
                T = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 40,
                        { fullscreenPlayer: i, playlist: t } = (0, c.g)(),
                        { notify: o, dismiss: n } = (0, p.l)(),
                        l = (0, u.useRef)(null),
                        r = i.modal.isOpened ? f.u.FULLSCREEN_INFO : f.u.INFO;
                    return (0, u.useCallback)(async () => {
                        ((l.current = o((0, a.jsx)(E, {}), { containerId: r, autoClose: !1 })),
                            await t.editorFeature.getAllPlaylistItems({ batchSize: e }),
                            (await t.editorFeature.exportToExcel()) === m.F.OK
                                ? t.areAllTracksUploaded
                                    ? o((0, a.jsx)(I, {}), { containerId: r })
                                    : o((0, a.jsx)(x, {}), { containerId: i.modal.isOpened ? f.u.FULLSCREEN_ERROR : f.u.ERROR, autoClose: !1 })
                                : o((0, a.jsx)(g, {}), { containerId: i.modal.isOpened ? f.u.FULLSCREEN_ERROR : f.u.ERROR, autoClose: !1 }),
                            n({ notificationId: l.current, forceClose: !0 }));
                    }, [e, n, i.modal.isOpened, r, o, t.areAllTracksUploaded, t.editorFeature]);
                };
            var N = t(65724),
                k = t(52300),
                C = t(74406),
                O = t.n(C);
            let j = (e) => {
                    let { text: i, onClick: t, isDisabled: o, className: n, isActive: l, 'aria-label': r } = e;
                    return (0, a.jsxs)(s.Dr, {
                        className: (0, N.$)(n, O().menuItem),
                        onClick: t,
                        disabled: o,
                        isSubMenu: !0,
                        children: [
                            (0, a.jsx)(y.HL, { variant: 'div', size: 'm', lineClamp: 1, children: i }),
                            l && (0, a.jsx)(k.I, { className: O().icon, size: 'xxxs', variant: 'check', 'aria-label': r }),
                        ],
                    });
                },
                Y = (0, o.PA)(() => {
                    let {
                            playlist: { editorFeature: e },
                        } = (0, c.g)(),
                        { toggleShouldShowDuplicate: i, shouldShowDuplicate: t } = e,
                        { formatMessage: o } = (0, n.A)();
                    return (0, a.jsx)(j, {
                        'aria-label': o({ id: 'entity-names.editor-feature-is-show' }),
                        text: o({ id: 'interface-actions.show-duplicates' }),
                        onClick: i,
                        isActive: t,
                    });
                }),
                D = (0, o.PA)(() => {
                    let {
                            playlist: { editorFeature: e },
                        } = (0, c.g)(),
                        { toggleShouldShowGenre: i, shouldShowGenre: t } = e,
                        { formatMessage: o } = (0, n.A)();
                    return (0, a.jsx)(j, {
                        'aria-label': o({ id: 'entity-names.editor-feature-is-show' }),
                        text: o({ id: 'interface-actions.show-genres' }),
                        onClick: i,
                        isActive: t,
                    });
                }),
                R = (0, o.PA)(() => {
                    let {
                            playlist: { editorFeature: e },
                        } = (0, c.g)(),
                        { toggleShouldShowMajor: i, shouldShowMajor: t } = e,
                        { formatMessage: o } = (0, n.A)();
                    return (0, a.jsx)(j, {
                        'aria-label': o({ id: 'entity-names.editor-feature-is-show' }),
                        text: o({ id: 'interface-actions.show-majors' }),
                        onClick: i,
                        isActive: t,
                    });
                });
            var h = t(58390),
                P = t(29993);
            let M = (0, o.PA)((e) => {
                    let { adminUrl: i } = e;
                    (0, h.useRouter)();
                    let t = (0, P.c)(() => {
                        window.open(i, '_blank');
                    });
                    return (0, a.jsx)(s.Dr, {
                        onClick: t,
                        isSubMenu: !0,
                        children: (0, a.jsx)(y.HL, { variant: 'div', size: 'm', lineClamp: 1, children: (0, a.jsx)(v.A, { id: 'interface-actions.navigate-to-admin' }) }),
                    });
                }),
                B = (0, o.PA)((e) => {
                    let { entityVariant: i, adminUrl: t, withPlaylistPageFeatures: o, className: u, isDisabled: f } = e,
                        {
                            settings: { isMobile: p },
                        } = (0, c.g)(),
                        { formatMessage: m } = (0, n.A)();
                    T();
                    let v = i === d.D.PLAYLIST && o,
                        y = i === d.D.PLAYLIST && o,
                        L = i === d.D.PLAYLIST && o,
                        b = i === d.D.PLAYLIST && o;
                    return (0, a.jsxs)(s.W1, {
                        label: m({ id: 'interface-actions.editorial-tools' }),
                        menuClassName: u,
                        offsetOptions: 3,
                        isMobile: p,
                        disabled: f,
                        'data-test-id': r.OA.playlist.CONTEXT_MENU_EDITOR_FEATURES_BUTTON,
                        children: [t && (0, a.jsx)(M, { adminUrl: t }), v && (0, a.jsx)(R, {}), y && (0, a.jsx)(D, {}), L && (0, a.jsx)(Y, {}), b && !l.NN && 0],
                    });
                });
        },
        27506: (e, i, t) => {
            'use strict';
            t.d(i, { F: () => a });
            var a = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), e);
            })({});
        },
        38860: (e, i, t) => {
            'use strict';
            t.d(i, { z: () => n });
            var a = t(53548),
                o = t(41168);
            let n = () => (0, a.useContext)(o.P);
        },
        39318: (e, i, t) => {
            'use strict';
            t.d(i, { N: () => a });
            let a = 'onboarding-tooltip';
        },
        41168: (e, i, t) => {
            'use strict';
            t.d(i, { P: () => a });
            let a = (0, t(53548).createContext)(null);
        },
        42729: (e, i, t) => {
            'use strict';
            t.d(i, { O: () => x });
            var a = t(88800),
                o = t(65724),
                n = t(84961),
                l = t(53548),
                r = t(17392),
                s = t(29993),
                c = t(73170),
                d = t(29504),
                u = t(2058),
                f = t(88969),
                p = t(15077),
                m = t(72288),
                v = t(81877),
                y = t(91292),
                L = t(59304),
                b = t(12893),
                A = t.n(b);
            let x = (0, n.PA)((e) => {
                let {
                        closeToast: i,
                        entityVariant: t,
                        entityUrl: n,
                        collectionUrl: b,
                        entityTitle: x,
                        coverUri: g,
                        customCover: _,
                        isLiked: S,
                        className: I,
                        withLink: E = !0,
                    } = e,
                    { fullscreenPlayer: T, fullscreenVideoPlayer: N } = (0, m.g)(),
                    k = t === p.c.ARTIST,
                    C = (() => {
                        let { formatMessage: e } = (0, u.A)();
                        return (0, l.useCallback)(
                            (i) => {
                                let { entityVariant: t, values: o, entityTitle: n } = i;
                                switch (t) {
                                    case p.c.VIBE:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.my-vibe-added-to-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-added-to-collection-aria-label' }),
                                        };
                                    case p.c.TRACK:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.track-added-to-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.track-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.PLAYLIST:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.playlist-added-to-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.playlist-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.ALBUM:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.album-added-to-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.album-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.FAIRY_TALE:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.fairytale-added-to-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.fairytale-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.ARTIST:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.artist-added-to-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.artist-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.PODCAST:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.podcast-added-to-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.podcast-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.PODCAST_EPISODE:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.podcast-episode-added-to-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.podcast-episode-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.AUDIOBOOK:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.audiobook-added-to-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.audiobook-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.AUDIOBOOK_EPISODE:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.audiobook-episode-added-to-shelf', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.audiobook-episode-added-to-shelf-aria-label' }, { entity: n }),
                                        };
                                    case p.c.CLIP:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.clip-added-to-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.clip-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                }
                            },
                            [e],
                        );
                    })(),
                    O = (() => {
                        let { formatMessage: e } = (0, u.A)();
                        return (0, l.useCallback)(
                            (i) => {
                                let { entityVariant: t, values: o, entityTitle: n } = i;
                                switch (t) {
                                    case p.c.VIBE:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.my-vibe-removed-from-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-removed-from-collection-aria-label' }),
                                        };
                                    case p.c.TRACK:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.track-removed-from-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.track-removed-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.PLAYLIST:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.playlist-removed-from-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.playlist-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.ALBUM:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.album-removed-from-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.album-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.FAIRY_TALE:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.fairytale-removed-from-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.fairytale-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.ARTIST:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.artist-removed-from-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.artist-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.PODCAST:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.podcast-removed-from-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.podcast-remove-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.PODCAST_EPISODE:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.podcast-episode-removed-from-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.podcast-episode-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.AUDIOBOOK:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.audiobook-removed-from-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.audiobook-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.AUDIOBOOK_EPISODE:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.audiobook-episode-removed-from-shelf', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.audiobook-episode-removed-from-shelf-aria-label' }, { entity: n }),
                                        };
                                    case p.c.CLIP:
                                        return {
                                            caption: (0, a.jsx)(f.A, { id: 'notifications-info.clip-removed-from-collection', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.clip-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                }
                            },
                            [e],
                        );
                    })(),
                    j = (0, s.c)(() => {
                        (T.modal.isOpened && T.modal.close(), N.modal.isOpened && N.modal.close());
                    }),
                    Y = (0, l.useMemo)(
                        () =>
                            n && x && E
                                ? (0, a.jsx)(y.N, {
                                      className: A().entityLink,
                                      href: n,
                                      onClick: j,
                                      children: (0, a.jsxs)(d.HL, {
                                          className: A().entityTitle,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', x, '\xa0'],
                                      }),
                                  })
                                : x
                                  ? (0, a.jsxs)(d.HL, {
                                        className: A().entityTitle,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'm',
                                        lineClamp: 1,
                                        title: x,
                                        children: ['\xa0', x, '\xa0'],
                                    })
                                  : void 0,
                        [x, n, j, E],
                    ),
                    D = (0, l.useMemo)(() => {
                        let e = {
                            entity: Y,
                            collection: (e) =>
                                E
                                    ? (0, a.jsx)(y.N, {
                                          className: A().collectionLink,
                                          href: b,
                                          onClick: j,
                                          children: (0, a.jsxs)(d.HL, {
                                              className: A().collectionTitle,
                                              variant: 'span',
                                              type: 'controls',
                                              size: 'm',
                                              lineClamp: 1,
                                              children: ['\xa0', e, '\xa0'],
                                          }),
                                      })
                                    : (0, a.jsxs)(d.HL, {
                                          className: A().collectionTitle,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', e, '\xa0'],
                                      }),
                        };
                        return S ? C({ entityVariant: t, values: e, entityTitle: x }) : O({ entityVariant: t, values: e, entityTitle: x });
                    }, [b, t, j, S, Y, x, C, O, E]);
                return (0, a.jsx)(L.$, {
                    className: (0, o.$)(A().root, I),
                    message: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(c.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': D.ariaLabel }) }),
                            (0, a.jsx)(d.HL, {
                                className: A().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': r.S7.BASE_NOTIFICATION_LIKE_TEXT,
                                'aria-hidden': !0,
                                children: D.caption,
                            }),
                        ],
                    }),
                    cover: null != _ ? _ : (0, a.jsx)(v.B, { className: A().image, src: g, size: 100, fit: 'cover', alt: x, withAvatarReplace: !0 }),
                    coverRadius: k ? 'round' : 's',
                    closeToast: i,
                });
            });
        },
        46936: (e, i, t) => {
            'use strict';
            t.d(i, { D: () => a });
            var a = (function (e) {
                return ((e.ALBUM = 'album'), (e.ARTIST = 'artist'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.UGC_TRACK = 'ugc_track'), e);
            })({});
        },
        48749: (e, i, t) => {
            'use strict';
            t.d(i, { A: () => n });
            var a = t(60208),
                o = t(46936);
            let n = (e) => {
                let i,
                    { entityVariant: t, urlParams: n } = e,
                    l = (0, a.D)();
                if (
                    n.id &&
                    (i =
                        'production' === l
                            ? ((e) => {
                                  switch (e) {
                                      case o.D.ALBUM:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLJkvqJ0/LJkvqJ1WMQ06nJD=';
                                      case o.D.PLAYLIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3OfLKyfnKA0pl92nJI3YKOfLKyfnKA0YzSwqTyiow91nJD9BzyxWzgcozD9BzgcozD=';
                                      case o.D.ARTIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLKW0nKA0C2SlqTymqRyxCGccMN==';
                                      case o.D.TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgqUWuL2f/qUWuL2gWMQ06nJD=';
                                      case o.D.UGC_TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3IaLl92nJI3YKElLJAeC3ElLJAeFJD9Bzyx';
                                  }
                              })(t)
                            : ((e) => {
                                  switch (e) {
                                      case o.D.ALBUM:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLJkvqJ0/LJkvqJ1WMQ06nJD=';
                                      case o.D.PLAYLIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3OfLKyfnKA0pl92nJI3YKOfLKyfnKA0YzSwqTyiow91nJD9BzyxWzgcozD9BzgcozD=';
                                      case o.D.ARTIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLKW0nKA0C2SlqTymqRyxCGccMN==';
                                      case o.D.TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgqUWuL2f/qUWuL2gWMQ06nJD=';
                                      case o.D.UGC_TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3IaLl92nJI3YKElLJAeC3ElLJAeFJD9Bzyx';
                                  }
                              })(t))
                )
                    return ((e, i) => {
                        let t = ''.concat(e);
                        for (let [e, a] of Object.entries(i)) t.includes(':'.concat(e)) && ((t = t.replace(':'.concat(e), a.toString())), delete i[e]);
                        return ''.concat(t).concat(
                            ((e) => {
                                let i = Object.entries(e)
                                    .map((e) => {
                                        let [i, t] = e;
                                        return ''.concat(i, '=').concat(encodeURIComponent(t));
                                    })
                                    .join('&');
                                return i ? '?'.concat(i) : '';
                            })(i),
                        );
                    })(
                        atob(
                            i.replace(/[A-Za-z]/g, function (e) {
                                return String.fromCharCode(e.charCodeAt(0) + ('M' >= e.toUpperCase() ? 13 : -13));
                            }),
                        ),
                        n,
                    );
            };
        },
        49397: (e) => {
            e.exports = { root: 'BaseNotificationError_root__FfGUZ', message: 'BaseNotificationError_message___W_xy' };
        },
        49738: (e, i, t) => {
            'use strict';
            t.d(i, { c: () => L });
            var a = t(88800),
                o = t(65724),
                n = t(84961),
                l = t(53548),
                r = t(2058),
                s = t(87999),
                c = t(70621),
                d = t(17392),
                u = t(81883),
                f = t(96817),
                p = t(52300),
                m = t(90958),
                v = t.n(m);
            let y = (0, n.PA)((e) => {
                    let {
                            className: i,
                            variant: t = 'text',
                            iconSize: n,
                            isLiked: l = !1,
                            onClick: m,
                            iconClassName: y,
                            withRipple: L = !1,
                            size: b = 's',
                            forwardRef: A,
                            children: x,
                            color: g,
                            disabled: _ = !1,
                            'aria-label': S,
                        } = e,
                        I = (0, c.D)(),
                        { formatMessage: E } = (0, r.A)(),
                        {
                            scaleAnimation: T,
                            unscaleAnimation: N,
                            handleAnimationEnd: k,
                            handleClick: C,
                        } = (0, u.C)({
                            shouldStartFromUnscale: l,
                            onClick: (e) => {
                                (null == m || m(e), I({ actionType: l ? s.ActionType.Unlike : s.ActionType.Like, userInteractionType: s.UserInteractionType.Tap }));
                            },
                        }),
                        O = l ? 'liked' : 'like';
                    return (0, a.jsx)(f.$, {
                        className: (0, o.$)(v().root, { [v().animation_scaled]: T, [v().animation_unscaled]: N }, i),
                        color: g,
                        onAnimationEnd: k,
                        withRipple: L,
                        variant: t,
                        size: b,
                        radius: 'xxxl',
                        'aria-label': S || E({ id: 'interface-actions.like' }),
                        'aria-pressed': l,
                        onClick: C,
                        icon: (0, a.jsx)(p.I, { size: n, className: (0, o.$)(v().icon, y), variant: O }),
                        ref: A,
                        disabled: _,
                        'data-test-id': d.S7.LIKE_BUTTON,
                        children: x,
                    });
                }),
                L = (0, l.forwardRef)((e, i) => (0, a.jsx)(y, { forwardRef: i, ...e }));
        },
        51028: (e) => {
            e.exports = { notification: 'NotificationAd_notification__DNmdu' };
        },
        52424: (e) => {
            e.exports = { message: 'EditorsFeaturesFailedNotification_message__EIgMe' };
        },
        57934: (e, i, t) => {
            'use strict';
            t.d(i, { F: () => m });
            var a = t(53548),
                o = t(87999),
                n = t(38982),
                l = t(47149),
                r = t(84423),
                s = t(89846),
                c = t(64543),
                d = t(63582),
                u = t(98427);
            let f = {
                    [u.b.HOME]: o.LandingBlockPageID.MainScreen,
                    [u.b.SIDEBAR]: o.LandingBlockPageID.Sidebar,
                    [u.b.NON_MUSIC]: o.LandingBlockPageID.NonmusicLandingScreen,
                    [u.b.OWN_COLLECTION]: o.LandingBlockPageID.CollectionLandingScreen,
                    [u.b.LANDING]: o.LandingBlockPageID.DynamicScreen,
                    [u.b.OWN_ARTISTS]: o.LandingBlockPageID.CollectionArtistsScreen,
                    [u.b.SEARCH]: o.LandingBlockPageID.SearchScreen,
                    [u.b.ARTIST]: o.LandingBlockPageID.ArtistScreen,
                    [u.b.CONCERTS]: o.LandingBlockPageID.ConcertsLandingScreen,
                    [u.b.CONCERT]: o.LandingBlockPageID.ConcertScreen,
                    [u.b.CONCERT_LOCATION_SELECTOR]: o.LandingBlockPageID.ConcertLocationSelector,
                    [u.b.ALBUM]: o.LandingBlockPageID.AlbumScreen,
                    [u.b.PLAYLIST]: o.LandingBlockPageID.PlaylistScreen,
                    [u.b.SLIDES_SCREEN]: o.LandingBlockPageID.SlidesScreen,
                    [u.b.PROMOLANDING_ALBUM]: o.LandingBlockPageID.PromolandingAlbumScreen,
                    [u.b.WAVE_LANDING_SCREEN]: o.LandingBlockPageID.WaveLandingScreen,
                    [u.b.FACT_SCREEN]: o.LandingBlockPageID.FactScreen,
                    [u.b.LUMEN_FACT_SCREEN]: o.LandingBlockPageID.LumenFactScreen,
                    [u.b.COLLECTION_VIBE_ROOMS]: o.LandingBlockPageID.MultivibeScreen,
                    [u.b.MULTIVIBE_SENDING_INVITATION_SCREEN]: o.LandingBlockPageID.MultivibeSendingInvitationScreen,
                    [u.b.MULTIVIBE_ACTION_SCREEN]: o.LandingBlockPageID.MultivibeActionScreen,
                    [u.b.MULTIVIBE_LIMIT_SCREEN]: o.LandingBlockPageID.MultivibeLimitScreen,
                    [u.b.MULTIVIBE_UNIFIED_SCREEN]: o.LandingBlockPageID.MultivibeUnifiedScreen,
                },
                p = [u.b.HOME, u.b.OWN_COLLECTION, u.b.LANDING, u.b.SEARCH],
                m = (0, d.n)({ event: 'LandingBlock.Navigated/Screen.Navigated', kind: 'hook', requiredScopes: ['screen'] }, () => {
                    var e;
                    let i = null == (e = (0, r.s)()) ? void 0 : e.evgenInstance,
                        { hash: t } = (0, s.g)(),
                        { screen: d, block: u, object: m, tab: v } = (0, c.j)(),
                        y = null == d ? void 0 : d.pageIdForFrom,
                        L = null == d ? void 0 : d.pageId,
                        { tabId: b, tabPos: A, isTabSelectedByDefault: x } = null != v ? v : {},
                        { blockId: g, blockType: _, blockPosX: S, blockPosY: I, objectsCount: E } = null != u ? u : {},
                        { objectType: T, objectId: N, objectPosX: k, objectPosY: C } = null != m ? m : {},
                        O = null == d ? void 0 : d.skeletonId;
                    return (0, a.useCallback)(
                        (e, a) => {
                            if (i && void 0 !== t && y)
                                if (p.some((e) => e === y)) {
                                    if (void 0 === _ || void 0 === g || void 0 === T || void 0 === N) return;
                                    let e = f[y];
                                    if (!e) return;
                                    let a = {
                                        hash: t,
                                        pageId: e,
                                        tabId: b,
                                        tabPos: A,
                                        entityType: _,
                                        entityId: g,
                                        entityPosX: S,
                                        entityPosY: I,
                                        isTabSelectedByDefault: x,
                                        objectsCount: E,
                                        objectType: T,
                                        objectId: N,
                                        objectPosX: k,
                                        objectPosY: C,
                                        from: e,
                                        to: o.AppScreen.TrailerScreen,
                                    };
                                    if ((O && (a.skeletonId = O), Object.values(a).some((e) => void 0 === e))) return;
                                    (0, n.QS)(i, a);
                                } else {
                                    if (!L) return;
                                    let n = { hash: t, pageId: L, mainObjectType: e, mainObjectId: a, from: L, to: o.AppScreen.TrailerScreen };
                                    if (Object.values(n).some((e) => void 0 === e)) return;
                                    (0, l.Mu)(i, n);
                                }
                        },
                        [g, S, I, _, t, x, i, N, k, C, T, E, y, L, O, b, A],
                    );
                });
        },
        66943: (e, i, t) => {
            'use strict';
            t.d(i, { h: () => d });
            var a = t(88800),
                o = t(65724),
                n = t(73170),
                l = t(29504),
                r = t(59304),
                s = t(49397),
                c = t.n(s);
            let d = (e) => {
                let { error: i, closeToast: t, className: s } = e;
                return (0, a.jsx)(r.$, {
                    className: (0, o.$)(c().root, s),
                    message: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(n.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': i }) }),
                            (0, a.jsx)(l.HL, { className: c().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: i }),
                        ],
                    }),
                    closeToast: t,
                });
            };
        },
        73170: (e, i, t) => {
            'use strict';
            t.d(i, { q: () => c });
            var a,
                o = t(53548),
                n = {
                    5881: (e, i, t) => {
                        function a() {
                            for (var e, i, t = 0, a = ''; t < arguments.length;)
                                (e = arguments[t++]) &&
                                    (i = (function e(i) {
                                        var t,
                                            a,
                                            o = '';
                                        if ('string' == typeof i || 'number' == typeof i) o += i;
                                        else if ('object' == typeof i)
                                            if (Array.isArray(i)) for (t = 0; t < i.length; t++) i[t] && (a = e(i[t])) && (o && (o += ' '), (o += a));
                                            else for (t in i) i[t] && (o && (o += ' '), (o += t));
                                        return o;
                                    })(e)) &&
                                    (a && (a += ' '), (a += i));
                            return a;
                        }
                        (t.r(i), t.d(i, { clsx: () => a, default: () => o }));
                        let o = a;
                    },
                    7319: (e, i, t) => {
                        (t.r(i), t.d(i, { default: () => a }));
                        let a = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, i) => {
                        var t = Symbol.for('react.transitional.element');
                        function a(e, i, a) {
                            var o = null;
                            if ((void 0 !== a && (o = '' + a), void 0 !== i.key && (o = '' + i.key), 'key' in i))
                                for (var n in ((a = {}), i)) 'key' !== n && (a[n] = i[n]);
                            else a = i;
                            return { $$typeof: t, type: e, key: o, ref: void 0 !== (i = a.ref) ? i : null, props: a };
                        }
                        ((i.Fragment = Symbol.for('react.fragment')), (i.jsx = a), (i.jsxs = a));
                    },
                    4377: (e, i, t) => {
                        e.exports = t(9097);
                    },
                    5531: function (e, i, t) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(i, '__esModule', { value: !0 }), (i.SROnly = void 0));
                        let o = t(4377),
                            n = t(5881),
                            l = t(810),
                            r = a(t(7319));
                        i.SROnly = (e) => {
                            let { className: i, focusable: t, children: a, ...s } = e,
                                c = (0, n.clsx)(r.default.root, { [r.default.focusable]: t }, i);
                            return (0, l.isValidElement)(a)
                                ? (0, l.cloneElement)(a, { ...s, className: (0, n.clsx)(c, a.props.className) })
                                : (0, o.jsx)('span', { className: c, ...s, children: a });
                        };
                    },
                    810: (e) => {
                        e.exports = a || (a = t.t(o, 2));
                    },
                },
                l = {};
            function r(e) {
                var i = l[e];
                if (void 0 !== i) return i.exports;
                var t = (l[e] = { exports: {} });
                return (n[e].call(t.exports, t, t.exports, r), t.exports);
            }
            ((r.d = (e, i) => {
                for (var t in i) r.o(i, t) && !r.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: i[t] });
            }),
                (r.o = (e, i) => Object.prototype.hasOwnProperty.call(e, i)),
                (r.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var s = {};
            (() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.SROnly = void 0));
                var e = r(5531);
                Object.defineProperty(s, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = s.SROnly;
            s.__esModule;
        },
        74406: (e) => {
            e.exports = { menuItem: 'ContextMenuWithCheckItem_menuItem__x6QcI', icon: 'ContextMenuWithCheckItem_icon__GowgV' };
        },
        79390: (e, i, t) => {
            'use strict';
            var a;
            (t.d(i, { f: () => a }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(a || (a = {})));
        },
        81877: (e, i, t) => {
            'use strict';
            t.d(i, { B: () => s });
            var a = t(88800),
                o = t(53548),
                n = t(17392),
                l = t(90688);
            let r = (e) => {
                    let { isAvailable: i = !0, className: t, fallbackIconSize: o, forwardRef: r, ...s } = e;
                    return i
                        ? (0, a.jsx)(l._V, { ref: r, className: t, fallbackIconSize: o, ...s, 'data-test-id': n.S7.ENTITY_COVER_IMAGE })
                        : (0, a.jsx)(l.Ab, { className: t, iconSize: o, iconVariant: 'unavailable', 'data-test-id': n.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                s = (0, o.forwardRef)((e, i) => (0, a.jsx)(r, { forwardRef: i, ...e }));
        },
        81883: (e, i, t) => {
            'use strict';
            t.d(i, { C: () => c });
            var a,
                o = t(53548),
                n = {
                    1676: (e, i, t) => {
                        (Object.defineProperty(i, '__esModule', { value: !0 }), (i.useToggle = void 0));
                        let a = t(810);
                        i.useToggle = (e) => {
                            let [i, t] = (0, a.useState)(e);
                            (0, a.useEffect)(() => {
                                t(e);
                            }, [e]);
                            let o = (0, a.useCallback)(() => {
                                    t((e) => !e);
                                }, []),
                                n = (0, a.useCallback)(() => {
                                    t(!0);
                                }, []),
                                l = (0, a.useCallback)(() => {
                                    t(!1);
                                }, []);
                            return { state: i, toggle: o, setState: t, toggleTrue: n, toggleFalse: l };
                        };
                    },
                    810: (e) => {
                        e.exports = a || (a = t.t(o, 2));
                    },
                },
                l = {};
            function r(e) {
                var i = l[e];
                if (void 0 !== i) return i.exports;
                var t = (l[e] = { exports: {} });
                return (n[e](t, t.exports, r), t.exports);
            }
            var s = {};
            ((() => {
                (Object.defineProperty(s, 'X', { value: !0 }), (s.l = void 0));
                let e = r(810),
                    i = r(1676);
                s.l = (t) => {
                    let { isEnabled: a = !0, onClick: o, shouldStartFromUnscale: n } = t,
                        { state: l, toggleFalse: r, toggleTrue: s } = (0, i.useToggle)(!1),
                        { state: c, toggleFalse: d, toggleTrue: u } = (0, i.useToggle)(!1),
                        f = (0, e.useCallback)(
                            (e) => {
                                (null == o || o(e), a && (n ? u() : s()), e.stopPropagation(), e.preventDefault());
                            },
                            [a, o, n, s, u],
                        );
                    return {
                        handleAnimationEnd: (0, e.useCallback)(() => {
                            (r(), d());
                        }, [r, d]),
                        handleClick: f,
                        scaleAnimation: l,
                        unscaleAnimation: c,
                    };
                };
            })(),
                s.X);
            var c = s.l;
        },
        90958: (e) => {
            e.exports = {
                animation_scaled: 'LikeButton_animation_scaled___NgPW',
                scale: 'LikeButton_scale__Gv0fD',
                animation_unscaled: 'LikeButton_animation_unscaled__YdYoQ',
                unscale: 'LikeButton_unscale__4Kprg',
            };
        },
        93091: (e, i, t) => {
            'use strict';
            t.d(i, { T: () => s });
            var a = t(88800),
                o = t(88969),
                n = t(17392),
                l = t(52300),
                r = t(19934);
            let s = (e) => {
                let { isLiked: i, onClick: t, disabled: s, className: c, iconClassName: d } = e;
                return (0, a.jsx)(r.Dr, {
                    className: c,
                    onClick: t,
                    disabled: s,
                    icon: (0, a.jsx)(l.I, { className: d, variant: i ? 'liked' : 'like', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': i,
                    'data-test-id': n.S7.CONTEXT_MENU_LIKE_BUTTON,
                    children: (0, a.jsx)(o.A, { id: 'interface-actions.like' }),
                });
            };
        },
        95210: (e, i, t) => {
            'use strict';
            t.d(i, { N: () => n });
            var a = t(53548),
                o = t(38860);
            let n = (e) => {
                let i = (0, a.useRef)(!1),
                    t = (0, o.z)();
                (0, a.useEffect)(() => {
                    (e && (null == t || t.disable(), (i.current = !0)), !e && i.current && (null == t || t.enable(), (i.current = !1)));
                }, [e, t]);
            };
        },
    },
]);
