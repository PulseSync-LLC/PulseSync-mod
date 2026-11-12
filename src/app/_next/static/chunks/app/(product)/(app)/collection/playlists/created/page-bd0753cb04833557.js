(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6696],
    {
        4044: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => l });
            var s = i(67174);
            let l = {
                main: (0, s.u)('/'),
                chart: (0, s.u)('/chart'),
                chartPodcasts: (0, s.u)('/chart/podcasts'),
                collection: (0, s.u)('/collection'),
                collectionAlbums: (0, s.u)('/collection/albums'),
                collectionArtists: (0, s.u)('/collection/artists'),
                collectionClips: (0, s.u)('/collection/clips'),
                collectionDislikes: (0, s.u)('/collection/dislikes'),
                collectionKids: (0, s.u)('/collection/kids'),
                collectionKidsAlbums: (0, s.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, s.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, s.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, s.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, s.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, s.u)('/collection/multivibes'),
                collectionPlaylists: (0, s.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, s.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, s.u)('/collection/playlists/liked'),
                collectionShelf: (0, s.u)('/collection/shelf'),
                collectionShelfLiked: (0, s.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, s.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, s.u)('/collection/shelf/recently-played'),
                concerts: (0, s.u)('/concerts'),
                kids: (0, s.u)('/kids'),
                mixes: (0, s.u)('/mixes'),
                musicHistory: (0, s.u)('/music-history'),
                muzmarket: (0, s.u)('/muzmarket'),
                mymusic: (0, s.u)('/mymusic'),
                mymusicDownloadsTracks: (0, s.u)('/mymusic/downloads/tracks'),
                multivibe: (0, s.u)('/multivibe'),
                nonMusic: (0, s.u)('/non-music'),
                pay: (0, s.u)('/pay'),
                userSlides: (0, s.u)('/slides/user'),
                search: (0, s.u)('/search'),
                searchHistory: (0, s.u)('/search/history'),
                settings: (0, s.u)('/settings'),
                video: (0, s.u)('/video'),
            };
        },
        6322: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => a });
            var s = i(88800),
                l = i(15077),
                r = i(33719);
            let a = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, s.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: l.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        7628: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var s = i(88800),
                l = i(88969),
                r = i(58390),
                a = i(17392),
                o = i(29993),
                n = i(96817),
                c = i(29504),
                d = i(99890),
                u = i(4086),
                p = i(41928);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', color: m = 'primary', withRipple: _ = !0, buttonText: h, isBlock: x, key: y, className: C } = e,
                    g = (0, r.useRouter)(),
                    v = (0, p.N)().get(u.QG),
                    k = (0, o.c)(() => {
                        v.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), g.push(v.authorizationUrl));
                    });
                return (0, s.jsx)(
                    n.$,
                    {
                        onClick: k,
                        className: C,
                        isBlock: x,
                        color: m,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': a.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    y,
                );
            };
        },
        9492: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => _ });
            var s = i(88800),
                l = i(65724),
                r = i(53548),
                a = i(2058),
                o = i(88969),
                n = i(96817),
                c = i(52300),
                d = i(29504),
                u = i(59304),
                p = i(4044),
                m = i.n(p);
            let _ = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    p = (0, r.useRef)(null),
                    { formatMessage: _ } = (0, a.A)();
                (0, r.useEffect)(() => {
                    var e;
                    null == (e = p.current) || e.focus();
                }, []);
                let h = (0, r.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(o.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(n.$, {
                                    ref: p,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': _({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [_, t],
                );
                return (0, s.jsx)(u.$, { className: (0, l.$)(m().root, m().important), message: h, closeToast: i });
            };
        },
        11006: (e) => {
            e.exports = {
                root: 'Footer_root__ugyur',
                root_withOffsetForDeeplink: 'Footer_root_withOffsetForDeeplink__qcs6U',
                important: 'Footer_important__mCXZp',
                links: 'Footer_links__3kOY7',
                list: 'Footer_list__0sCXQ',
                copyrights: 'Footer_copyrights__IsnbJ',
                link: 'Footer_link__av50q',
                copyrightLink: 'Footer_copyrightLink__6NOkg',
                yandexMusicLink: 'Footer_yandexMusicLink__k7ILf',
                explicitText: 'Footer_explicitText__Px3wr',
                text: 'Footer_text__lMPwl',
                empty: 'Footer_empty__RR_zf',
            };
        },
        13946: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => U });
            var s = i(88800),
                l = i(65724),
                r = i(84961),
                a = i(53548),
                o = i(79070),
                n = i(17610),
                c = i(24548),
                d = i(29993),
                u = i(72288),
                p = i(35994);
            let m = (e, t) => {
                let { withLink: i, separator: s } = t,
                    l = i && !e.various ? (0, p.R)(e.id) : null;
                return { artist: e, name: e.name, separator: s, link: l };
            };
            var _ = i(21010),
                h = i.n(_),
                x = i(17392),
                y = i(29504),
                C = i(91292),
                g = i(2058),
                v = i(87999),
                k = i(80643),
                A = i(78940),
                E = i(55693),
                N = i(58217);
            let f = (0, r.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: l, captionSize: r = 'm', allArtistsTitle: a, withCustomTooltip: o, hoverSettings: c } = e,
                        {
                            name: p,
                            link: m,
                            title: _,
                            ariaLabel: h,
                            tooltipText: f,
                            isTooltipEnabled: T,
                            handleNavigate: S,
                        } = ((e) => {
                            var t, i;
                            let { item: s, allArtistsTitle: l, withCustomTooltip: r } = e,
                                { formatMessage: a } = (0, g.A)(),
                                o = ((e, t) => {
                                    let { item: i, allArtistsTitle: s, withCustomTooltip: l } = e,
                                        r = s || i.name;
                                    return {
                                        ...i,
                                        title: l ? void 0 : r,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: r,
                                        isTooltipEnabled: !s && l,
                                    };
                                })({ item: s, allArtistsTitle: l, withCustomTooltip: r }, a),
                                {
                                    track: n,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                p = (0, A.Z)(null != (i = null == (t = o.link) ? void 0 : t.href) ? i : o.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, E.z)(),
                                _ = (0, k.S)(),
                                h = (0, d.c)((e) => {
                                    (c && n.isOpened && n.close(), p(e));
                                }),
                                x = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: l, fullscreenVideoPlayer: r } = (0, u.g)(),
                                        { modal: a } = s;
                                    return (0, N.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), a.isOpened && (s.reset(), a.close()), l.modal.isOpened && l.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            r.modal.isOpened && (r.modal.close(), r.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: o.artist, callback: h }),
                                y = (0, d.c)((e) => {
                                    (_({ to: v.AppScreen.ArtistScreen }), null == m || m(), x(e));
                                });
                            return { ...o, handleNavigate: y };
                        })({ item: t, allArtistsTitle: a, withCustomTooltip: o });
                    return m
                        ? (0, s.jsx)(C.N, {
                              ...m,
                              'aria-label': h,
                              className: i,
                              onClick: S,
                              title: _,
                              'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(n.m_, {
                                  enabled: T,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: f,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(y.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: l, children: p }),
                              }),
                          })
                        : (0, s.jsx)(n.m_, {
                              enabled: T,
                              offsetOptions: 4,
                              placement: 'top',
                              text: f,
                              hoverSettings: c,
                              children: (0, s.jsx)(y.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: l,
                                  title: _,
                                  'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: p,
                              }),
                          });
                }),
                T = (e) => {
                    let { group: t, linkClassName: i, captionClassName: l, captionSize: r, allArtistsTitle: o, withCustomTooltip: n, hoverSettings: c } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(f, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: l,
                                captionSize: r,
                                allArtistsTitle: o,
                                withCustomTooltip: n,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, s.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, s.jsx)(f, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: l,
                                                captionSize: r,
                                                allArtistsTitle: o,
                                                withCustomTooltip: n,
                                                hoverSettings: c,
                                            }),
                                        ],
                                    },
                                    e.artist.id,
                                ),
                            ),
                        ],
                    });
                };
            var S = i(88969),
                L = i(65453);
            let P = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: r } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(L.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(h().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': x.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(S.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var j = i(61013),
                O = i(87819),
                R = i(40634),
                b = i(48468),
                I = i.n(b);
            let w = (0, r.PA)((e) => {
                    let { label: t, artists: i, forwardRef: l } = e;
                    return (0, s.jsxs)(n.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, O.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: l, children: t }),
                            (0, s.jsx)(n.ZI, { className: I().tooltipContent, children: i.map((e) => (0, s.jsx)(R.V, { artist: e, className: I().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, a.forwardRef)((e, t) => (0, s.jsx)(w, { forwardRef: t, ...e }));
            var M = i(19934),
                F = i(70396),
                z = i.n(F);
            let H = (0, r.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: r } = (0, g.A)();
                    return (0, s.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, l.$)(z().root, z().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(R.V, { artist: e }, e.id)),
                    });
                }),
                B = (0, r.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: l } = e,
                        [r, n] = (0, a.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        p = (0, d.c)(() => {
                            let e = l.current;
                            e && n(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, o.L)(() =>
                            (0, j.A)(() => {
                                p();
                            }, 100),
                        );
                    if (
                        ((0, a.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                p(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, p],
                        ),
                        (0, a.useEffect)(() => {
                            p();
                        }, [t, p]),
                        0 !== t.length)
                    )
                        return (r || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(H, { artists: t, label: i }) : (0, s.jsx)(D, { artists: t, label: i })) : i;
                }),
                U = (0, r.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: r,
                            linkClassName: p,
                            captionClassName: _,
                            captionSize: x,
                            variant: y = 'breakAll',
                            spoilerComponent: C,
                            ...g
                        } = e,
                        v = ((e) => {
                            var t, i, s;
                            let { separator: l, visibleArtistsCount: r, withLink: o, withComposer: n, artistIdWithoutLink: c, withContextMenu: p } = e,
                                _ = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                x = null == (s = e.withCustomTooltip) || s,
                                y = (0, a.useRef)(null),
                                [C, g] = (0, a.useState)(!1),
                                {
                                    settings: { isMobile: v },
                                } = (0, u.g)(),
                                k = ((!v || 1 === _.length) && p) || !p,
                                A = ((e, t) => {
                                    var i, s, l;
                                    let r = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        a = null == (s = null == t ? void 0 : t.withLink) || s,
                                        o = null != (l = null == t ? void 0 : t.separator) ? l : ', ',
                                        n = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(o),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: s } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => s || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: r, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: s, separator: l, isFirst: r } = t;
                                                return {
                                                    primary: m(e, { withLink: s, separator: r ? void 0 : l }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = l ? e.separator : '';
                                                        return m(e, { withLink: s, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: a && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: o, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: n,
                                        hiddenArtistsCount: d,
                                    };
                                })(_, { separator: l, visibleArtistsCount: C ? void 0 : r, withComposer: n, withLink: !!k && o, artistIdWithoutLink: c }),
                                E = h ? A.allArtistsTitle : '',
                                N = (0, d.c)((e) => {
                                    (g(!0), e.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: A.groups,
                                hiddenArtistsCount: A.hiddenArtistsCount,
                                allArtistsTitle: E,
                                withCustomTooltip: x,
                                withContextMenu: p,
                                labelRef: y,
                                handleOnSpoilerClick: N,
                                isTooltipEnabled: !!E && x && !p && !v,
                                title: !E || x || p ? void 0 : E,
                            };
                        })(g),
                        k = (0, o.L)(() =>
                            v.hiddenArtistsCount <= 0
                                ? null
                                : (0, a.isValidElement)(C)
                                  ? C
                                  : (0, s.jsx)(P, { spoilerClassName: r, spoilerArtistsCount: v.hiddenArtistsCount, handleOnSpoilerClick: v.handleOnSpoilerClick }),
                        ),
                        A = (0, s.jsx)(n.m_, {
                            referenceRef: v.labelRef,
                            enabled: v.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: v.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, l.$)(h().root, h()['root_variant_'.concat(y)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: v.title,
                                children: [
                                    v.groups.map((e) =>
                                        (0, s.jsx)(
                                            T,
                                            {
                                                group: e,
                                                linkClassName: p,
                                                captionClassName: _,
                                                captionSize: x,
                                                allArtistsTitle: v.allArtistsTitle,
                                                withCustomTooltip: v.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    k,
                                ],
                            }),
                        });
                    return v.withContextMenu ? (0, s.jsx)(B, { labelRef: v.labelRef, artists: v.artists, label: A }) : A;
                });
        },
        16434: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        17017: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { Z: () => s }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(s || (s = {})));
        },
        17657: (e) => {
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
        19840: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => l }), i(46606));
            var s = i(91136);
            class l extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        21010: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        24460: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => p });
            var s = i(88800),
                l = i(96706),
                r = i(53548),
                a = i(2058),
                o = i(29595),
                n = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(6322);
            let p = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, n.l)(),
                    { formatMessage: p } = (0, a.A)(),
                    [m, _] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let r = { ...(0, l.HO)(e), url: e.url, isPinned: !e.isPinned };
                    _(!0);
                    let a = await e.togglePin();
                    (_(!1),
                        a
                            ? i((0, s.jsx)(u.l, { playlist: r }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(d.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, m, e, i, p]);
            };
        },
        24548: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        30832: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var s = i(88800),
                l = i(15077),
                r = i(42729);
            let a = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, s.jsx)(r.O, {
                    entityVariant: l.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        32780: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionPlaylistsCreatedPage: () => L });
            var s = i(88800),
                l = i(65724),
                r = i(84961),
                a = i(53548),
                o = i(2058),
                n = i(88969),
                c = i(87999),
                d = i(76903),
                u = i(17392),
                p = i(29504),
                m = i(69630),
                _ = i(41911),
                h = i(98427),
                x = i(46422),
                y = i(44230),
                C = i(37670),
                g = i(72288),
                v = i(54320),
                k = i(86790),
                A = i(60266),
                E = i(93317),
                N = i(37770),
                f = i(79418),
                T = i(65343),
                S = i.n(T);
            let L = (0, r.PA)(() => {
                let {
                        user: e,
                        collection: {
                            playlists: { playlistsCreated: t },
                        },
                        settings: { isMobile: i },
                    } = (0, g.g)(),
                    { formatMessage: r } = (0, o.A)(),
                    { contentScrollRef: T, setContentScrollRef: L } = (0, y.g)(),
                    P = (0, x.W)(),
                    j = (0, a.useMemo)(() => ({ Footer: () => (0, s.jsx)(A.A, { children: (0, s.jsx)(k.w, { className: S().footer }) }) }), []);
                (0, C.J)(t.isResolved);
                let O = (0, a.useCallback)(
                    (i) => {
                        e.account.data.uid && t.getData({ userId: e.account.data.uid, page: i, pageSize: 20 });
                    },
                    [t, e.account.data.uid],
                );
                ((0, v.X)(t.pagesLoader, O),
                    (0, a.useEffect)(
                        () => () => {
                            t.reset();
                        },
                        [t],
                    ),
                    e.account.data.uid && t.isNeededToLoad && (0, a.use)(t.getData({ userId: e.account.data.uid, page: 0, pageSize: 20 })));
                let R = t.isShimmerVisible ? 20 : t.items.length;
                return (0, s.jsx)(d.a, {
                    pageId: c.AppScreen.CollectionPlaylistsScreen,
                    pageIdForFrom: h.b.OWN_PLAYLISTS,
                    children: (0, s.jsx)(m.h, {
                        scrollElement: T,
                        outerTitle: r({ id: 'entity-names.my-playlists' }),
                        children: (0, s.jsxs)('div', {
                            className: S().root,
                            'data-test-id': u.Xk.collection.COLLECTION_PLAYLISTS_CREATED_PAGE,
                            children: [
                                (0, s.jsx)(E.Y, {
                                    variant: E.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: P.canBack,
                                    children: (0, s.jsx)(p.DZ, {
                                        id: 'collection-playlistsCreated-header',
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, s.jsx)(n.A, { id: 'entity-names.my-playlists' }),
                                    }),
                                }),
                                (0, s.jsx)(f.$, {
                                    className: (0, l.$)(S().scrollContainer, S().important),
                                    customComponents: j,
                                    itemContentCallback: (e) => {
                                        let i = t.items[e],
                                            l = r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.playlist' }) });
                                        return i ? (0, s.jsx)(_.B, { playlist: i, contentLinesCount: 3 }, i.key) : (0, s.jsx)(N.V, { 'aria-label': l });
                                    },
                                    totalCount: R,
                                    onGetDataByPage: O,
                                    pageSize: 20,
                                    totalRequests: t.requestsCount,
                                    listClassName: S().content,
                                    itemClassName: S().item,
                                    handleRef: L,
                                    context: { listAriaLabel: r({ id: 'collection.created-playlists-list' }) },
                                    isMobileLayout: i,
                                    useWindowScroll: i,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        35994: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => l });
            var s = i(67174);
            let l = (e) => (0, s.u)('/artist/:artistId', { params: { artistId: e } });
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => g });
            var s = i(88800),
                l = i(65724),
                r = i(84961),
                a = i(53548),
                o = i(87999),
                n = i(80643),
                c = i(17392),
                d = i(29993),
                u = i(90688),
                p = i(19934),
                m = i(7555),
                _ = i(29504),
                h = i(78940),
                x = i(72288),
                y = i(80932),
                C = i.n(y);
            let g = (0, r.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: r } = (0, x.g)(),
                    y = (0, h.Z)(t.url),
                    v = (0, n.S)(),
                    k = (0, a.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(g, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    A = (0, d.c)((e) => {
                        (r.modal.isOpened && r.modal.close(), v({ to: o.AppScreen.ArtistScreen }), y(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(p.Dr, {
                            className: (0, l.$)(C().root, i),
                            onClick: A,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(m.t, {
                                    radius: 'round',
                                    className: C().cover,
                                    children: (0, s.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: C().image }),
                                }),
                                (0, s.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        k,
                    ],
                });
            });
        },
        41911: (e, t, i) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = i(52300);
// for PulseSync: END import the download icon for playlist menu actions
            i.d(t, { B: () => J });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(88800),
                pulseSyncMenuItems = i(19934),
                pulseSyncMenuIcons = i(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var s = i(88800),
                l = i(65724),
                r = i(84961),
                a = i(53548),
                o = i(2058),
                n = i(87999),
                c = i(62414),
                d = i(80643),
                u = i(33979),
                p = i(17392),
                m = i(18593),
                _ = i(29993),
                h = i(79070),
                x = i(29832),
                y = i(52300),
                C = i(7555),
                g = i(29504),
                v = i(13946),
                k = i(85902),
                A = i(24460),
                E = i(5407),
                N = i(57934),
                f = i(84384),
                T = i(4795),
                S = i(78940),
                L = i(55693),
                P = i(39079),
                j = i(72288),
                O = i(86298),
                R = i(81877),
                b = i(49738),
                I = i(91292),
                w = i(56862),
                D = i(16704),
                M = i(56446),
                F = i(36207),
                z = i(47513),
                H = i(19934),
                B = i(48749),
                U = i(22505),
                Y = i(9618),
                V = i(95210),
                K = i(46936),
                X = i(97956),
                $ = i(93091),
                q = i(27817),
                W = i(15425);
            let G = (0, r.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: l, open: r, ...a } = e,
                    { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: d } = (0, Y.q)(),
                    {
                        experiments: u,
                        settings: { isMobile: m },
                        trailer: h,
                        user: x,
                    } = (0, j.g)(),
                    y = (0, k.K)(i),
                    C = (0, A.A)(i),
                    g = (0, N.F)(),
                    { formatMessage: v } = (0, o.A)(),
                    f = (0, E.P)(),
                    T = u.checkExperiment(X.z.WebEditorsFeatures, 'on'),
                    S = (0, B.A)({ entityVariant: K.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, V.N)(r);
                let L = (0, _.c)(() => {
                    if (c) return void d();
                    f() || (h.openPlaylistTrailer(i.id), g(n.DomainObjectType.Playlist, i.id));
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
                                        (activate(), l?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END playlist context and native addon menu item rendering
                return (0, s.jsxs)(H.W1, {
                    title: i.title,
                    onOpenChange: l,
                    open: r,
                    offsetOptions: 10,
                    isMobile: m,
                    ariaLabel: v({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: p.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...a,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        T && (0, s.jsx)(U.d, { entityVariant: K.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : S }),
                        !m && (0, s.jsx)(q.L, { onClick: C, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, s.jsx)($.T, { onClick: y, isLiked: i.isLiked, disabled: !x.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, s.jsx)(H.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, s.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, s.jsx)(W.N, { onClick: L, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var Q = i(17657),
                Z = i.n(Q);
            let J = (0, r.PA)((e) => {
                let { className: t, playlist: i, children: r, contentLinesCount: H, customDescription: B, onCoverMouseDown: U } = e,
                    Y = (0, c.D)(),
                    {
                        trailer: V,
                        user: K,
                        paywall: { modal: X },
                    } = (0, j.g)(),
                    { from: $, utmLink: q } = (0, f.f)({ contextId: i.uuid, contextType: m.K.Playlist }),
                    { formatMessage: W } = (0, o.A)(),
                    { sendLikeSearchFeedback: Q, sendNavigateSearchFeedback: J, sendPlaySearchFeedback: ee } = (0, L.z)(),
                    [et, ei] = (0, a.useState)(!1),
                    [es, el] = (0, a.useState)(!1),
                    [er, ea] = (0, a.useState)(!1),
                    eo = (0, z.r)(i),
                    en = (0, k.K)(i),
                    ec = (0, A.A)(i),
                    ed = (0, d.S)(),
                    eu = (0, u.g)(),
                    ep = (0, S.Z)(i.url),
                    em = (0, N.F)(),
                    e_ = (0, E.P)(),
                    eh = (0, _.c)((e) => {
                        if ((e.stopPropagation(), e_())) return void e.preventDefault();
                        (V.setUtmLink(q), V.openPlaylistTrailer(i.id), em(n.DomainObjectType.Playlist, i.id));
                    }),
                    [ex, ey] = (0, a.useState)(!1),
                    { isPlaying: eC, togglePlay: eg } = (0, P.D)({
                        playContextParams: { contextData: { type: m.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: $, utmLink: q }, loadContextMeta: !0 },
                    }),
                    ev = (0, _.c)(() => {
                        (ed({ to: n.AppScreen.PlaylistScreen }), null == J || J());
                    }),
                    ek = (0, _.c)((e) => {
                        (ev(), ep(e));
                    }),
                    eA = (0, T.N)(),
                    eE = (0, _.c)(() => {
                        if (!e_()) {
                            if (eA) return void X.open();
                            (et || eC || (ei(!0), null == ee || ee()), eg(), eC || eu());
                        }
                    }),
                    eN = (0, _.c)(() => {
                        (es || i.isLiked || (el(!0), null == Q || Q()), en());
                    }),
                    ef = (0, _.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eT = (0, _.c)((e) => {
                        (ea(e), ey(e));
                    }),
                    eS = (0, a.useMemo)(() => {
                        var e;
                        return B
                            ? (0, s.jsx)(g.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: B }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, s.jsx)(
                                    v.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [B, i]),
                    eL = (0, h.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, s.jsx)(
                                b.c,
                                {
                                    className: (0, l.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: eN,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !K.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eP = (0, a.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                F.n,
                                {
                                    children: (0, s.jsx)(
                                        M.k,
                                        { className: (0, l.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eh },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eh, i]),
                    ej = (0, a.useMemo)(
                        () =>
                            (0, s.jsx)(
                                w.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, l.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    eO = (0, a.useMemo)(
                        () =>
                            (0, s.jsx)(C.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': p.Kq.playlist.PLAYLIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: ek,
                                    onMouseDown: U,
                                    children: [
                                        (0, s.jsx)(R.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(x.hg, {
                                            isVisible: er || ex,
                                            className: Z().controls,
                                            playControl: (0, s.jsx)(
                                                D.D,
                                                {
                                                    className: (0, l.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eE,
                                                    isPlaying: eC,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eL,
                                            menuControl: (0, s.jsx)(
                                                G,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eT,
                                                    open: er,
                                                    onClick: ef,
                                                    className: (0, l.$)(Z().menuButton, Z().control),
                                                    icon: (0, s.jsx)(y.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': p.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: ej,
                                            trailerControl: eP,
                                        }),
                                    ],
                                }),
                            }),
                        [ek, U, i, eo, er, ex, eE, eC, eL, eT, ef, ej, eP],
                    ),
                    eR = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, s.jsxs)(x.MN, {
                    ref: Y,
                    'aria-label': eo,
                    className: (0, l.$)(Z().root, t),
                    title: (0, s.jsx)(g.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': p.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, s.jsx)(I.N, { className: Z().titleLink, href: i.url, tabIndex: -1, onClick: ev, children: i.title }),
                    }),
                    srTitle: (0, s.jsx)(I.N, { className: Z().srTitleLink, href: i.url, onClick: ev, children: i.title }),
                    contentLinesCount: H,
                    view: eO,
                    description: eS,
                    'data-test-id': p.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eR &&
                            (0, s.jsx)(O.x, {
                                ariaLabel: W({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: en,
                            }),
                        r,
                    ],
                });
            });
        },
        42674: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        46606: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { X: () => s }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(s || (s = {})));
        },
        47513: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => r });
            var s = i(53548),
                l = i(2058);
            let r = (e) => {
                let { formatMessage: t } = (0, l.A)();
                return (0, s.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let s = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(s, ' ').concat(i);
                }, [t, e]);
            };
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        54320: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var s = i(88800),
                l = i(53548),
                r = i(29993),
                a = i(9492),
                o = i(29595),
                n = i(74965),
                c = i(74773);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, n.l)(),
                    u = (0, l.useRef)(void 0),
                    p = (0, r.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let s = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, l.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(a.L, { reloadBlocks: p }), { containerId: o.u.ERROR, autoClose: !1 }));
                }, [d, p, i, e.rejectedPagesCount]);
            };
        },
        57328: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => h });
            var s = i(88800),
                l = i(84961),
                r = i(58390),
                a = i(65724),
                o = i(88969),
                n = i(29504),
                c = i(7628),
                d = i(42674),
                u = i.n(d);
            let p = (0, l.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(n.DZ, {
                            className: (0, a.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(o.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(n.HL, {
                            className: (0, a.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(o.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = i(4370),
                _ = i(72288);
            let h = (0, l.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: l } = (0, _.g)();
                return l.isAuthorized ? t : (i && (0, r.redirect)(m.Z.main.href), (0, s.jsx)(p, {}));
            });
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => a });
            var s = i(88800);
            i(30282);
            var l = i(11006),
                r = i.n(l);
            let a = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: r().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => l });
            var s = i(97956);
            let l = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: l, userRegion: r } = e;
                return 'ru' === r && t(s.z.WebNextFooterDisclaimer, 'on') ? i() : l();
            };
        },
        65343: (e) => {
            e.exports = {
                root: 'CollectionPlaylistsCreatedPage_root__o77CF',
                scrollContainer: 'CollectionPlaylistsCreatedPage_scrollContainer__Spb2M',
                important: 'CollectionPlaylistsCreatedPage_important__DLkOq',
                content: 'CollectionPlaylistsCreatedPage_content___qalr',
                footer: 'CollectionPlaylistsCreatedPage_footer__I2jJa',
                item: 'CollectionPlaylistsCreatedPage_item__2RmBg',
            };
        },
        67990: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        70621: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => n });
            var s = i(53548),
                l = i(63582),
                r = i(245),
                a = i(22681),
                o = i(56374);
            let n = (0, l.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, r.N)(),
                    t = (0, a.w)(),
                    i = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, o.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        74410: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 32780)));
        },
        76903: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                l = i(53548),
                r = i(53534),
                a = i(63582),
                o = i(245);
            let n = new WeakMap();
            class c {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, t) {
                    this.screenViewUuid = e;
                    let i =
                        n.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                i = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                s = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                i();
                                            } finally {
                                                ((t = !1), e.length > 0 && s());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (i(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), s());
                                },
                            };
                        })();
                    (n.set(t, i), (this.queue = i));
                }
                open(e, t) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (t(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, t) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: t, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, t) {
                    this.loadedTabs.has(e) || (t(), this.loadedTabs.add(e));
                }
                scheduleClose() {
                    let e = this.pendingClose;
                    !e ||
                        e.scheduled ||
                        this.consumers.size > 0 ||
                        ((e.scheduled = !0),
                        this.queue.defer(() => {
                            this.pendingClose !== e || this.consumers.size > 0 || ((this.pendingClose = null), e.send(), (this.closed = !0));
                        }));
                }
            }
            var d = i(87999);
            let u = (0, a.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, o.N)(),
                        a = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [n, u] = (0, l.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: a, scope: a ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        n.client !== i ||
                        n.input.pageId !== t.pageId ||
                        n.input.skeletonId !== t.skeletonId ||
                        n.input.mainObjectType !== t.mainObjectType ||
                        n.input.mainObjectId !== t.mainObjectId
                    ) {
                        let l = new c(i.createScreenSession().screenViewUuid, i),
                            o = { client: i, input: t, isReady: a, scope: a ? i.createScreenScope(t, l) : null, session: l };
                        return (u(o), (0, s.jsx)(r.k, { value: o, children: e }));
                    }
                    if (
                        n.isReady !== a ||
                        n.input.displayReasonId !== t.displayReasonId ||
                        n.input.pageIdForFrom !== t.pageIdForFrom ||
                        n.input.pagePlacement !== t.pagePlacement ||
                        n.input.pageStyle !== t.pageStyle
                    ) {
                        let l = { ...n, input: t, isReady: a, scope: a ? i.createScreenScope(t, n.session) : null };
                        return (u(l), (0, s.jsx)(r.k, { value: l, children: e }));
                    }
                    return (0, s.jsx)(r.k, { value: n, children: e });
                },
            );
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => x });
            var s = i(88800),
                l = i(65724),
                r = i(61013),
                a = i(53548);
            let o = (e) => {
                    let { style: t, forwardRef: i, context: l, ...r } = e,
                        a = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        o = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': a, style: { ...t }, ref: i, ...r });
                },
                n = (0, a.forwardRef)((e, t) => (0, s.jsx)(o, { forwardRef: t, ...e }));
            var c = i(16434),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: r, withHeader: a, withForceScroll: o, ...n } = e;
                    return (0, s.jsx)('div', {
                        className: (0, l.$)(d().scroller, { [d().scroller_withFooter]: r, [d().scroller_withHeader]: a, [d().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: i,
                        ...n,
                        tabIndex: -1,
                    });
                },
                p = (0, a.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var m = i(55482),
                _ = i(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: l,
                            debounceDurationInMs: r = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [p, h] = (0, a.useState)(null),
                        x = (0, a.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == l || l(e), n.length > 0 && h(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < s; e++) i(e);
                                    }
                                }, r),
                            [r, l, t, i, n],
                        );
                    (0, a.useEffect)(() => {
                        n.length > 0 && p && x(p);
                    }, n);
                    let y = (0, a.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, r);
                    }, [c, r]);
                    return (0, s.jsx)(_.sN, { ref: d, rangeChanged: x, totalCount: o, endReached: y, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: o,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: _,
                            overscan: x = 700,
                            pageSize: y = 20,
                            totalCount: C,
                            totalRequests: g,
                            debounceDurationInMs: v,
                            initialItemCount: k,
                            minInitialItemCount: A = 20,
                            handleRef: E,
                            alwaysShowScrollbar: N = !1,
                            testId: f,
                            isMobileLayout: T = !1,
                            shouldTriggerRangeChangedOn: S,
                            ...L
                        } = e,
                        [P, j] = (0, a.useState)(!1),
                        O = (0, a.useMemo)(
                            () =>
                                (0, r.A)((e) => {
                                    j(e);
                                }, 100),
                            [],
                        ),
                        R = (0, a.useMemo)(() => {
                            var e, t;
                            return T
                                ? {
                                      Scroller: p,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : n,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: p,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : n,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, g, T]),
                        b = k ? Math.min(k, A) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(d().root, { [d().root_scrolling]: P || N, [d().root_notScrolling]: !P && !N }, t),
                        'data-test-id': f,
                        children: [
                            T && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(h, {
                                overscan: x,
                                components: R,
                                listClassName: _,
                                itemClassName: u,
                                isScrolling: O,
                                itemContent: m,
                                scrollerRef: E,
                                totalCount: C,
                                pageSize: y,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: v,
                                initialItemCount: b,
                                shouldTriggerRangeChangedOn: S,
                                ...L,
                            }),
                            T && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        84218: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        85902: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var s = i(88800),
                l = i(96706),
                r = i(53548),
                a = i(2058),
                o = i(79390),
                n = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                p = i(30832);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, _] = (0, r.useState)(!1),
                    { formatMessage: h } = (0, a.A)();
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (m) return;
                    let r = { ...(0, l.HO)(e), url: e.url, isLiked: !e.isLiked };
                    _(!0);
                    let a = await e.toggleLike();
                    (_(!1),
                        a === o.f.OK
                            ? i((0, s.jsx)(p.T, { playlist: r }), { containerId: n.u.INFO })
                            : i((0, s.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [t.isAuthorized, m, e, h, i]);
            };
        },
        86298: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => p });
            var s = i(88800),
                l = i(65724),
                r = i(2058),
                a = i(17392),
                o = i(96817),
                n = i(52300),
                c = i(29504),
                d = i(84218),
                u = i.n(d);
            let p = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: p, ariaLabel: m } = e,
                    { formatNumber: _ } = (0, r.A)();
                return (0, s.jsx)(o.$, {
                    className: (0, l.$)(u().root, t),
                    onClick: p,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, s.jsx)(n.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': a.S7.CARD_LIKES,
                    children: (0, s.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: _(d) }),
                });
            };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => f });
            var s = i(88800),
                l = i(65724),
                r = i(84961),
                a = i(2058),
                o = i(30282),
                n = i(94144),
                c = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let d = (e, t, i) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: i, tld: s, year: l } = e;
                    return {
                        year: l,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var p = i(62293),
                m = i(99839);
            let _ = (e) => e(new Date(), (0, m.m)());
            var h = i(51611),
                x = i(72288),
                y = i(11006),
                C = i.n(y),
                g = i(17392),
                v = i(29504),
                k = i(91292);
            let A = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(C().copyrights, t),
                        'data-test-id': g.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(k.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, l.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': g.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(v.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(k.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: C().copyrightLink,
                                'data-test-id': g.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                E = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: C().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: C().list,
                                'data-test-id': g.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: l } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: C().item,
                                            children: (0, s.jsx)(k.N, { target: '_blank', href: l, className: C().link, 'data-test-id': g.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: C().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': g.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, l.$)(C().root, C().important, t),
                        'data-test-id': g.S7.FOOTER,
                        children: [(0, s.jsx)(E, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(A, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, x.g)(),
                    { formatDate: l, formatMessage: r } = (0, a.A)(),
                    { language: o } = (0, h.h)(),
                    n = u({ formatMessage: r, language: o, tld: i.tld, year: _(l) });
                return (0, s.jsx)(A, { className: t, data: n });
            });
            let f = (0, r.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: r, location: m, user: y } = (0, x.g)(),
                    { formatDate: g, formatMessage: v } = (0, a.A)(),
                    { isEnabled: k } = null != (t = (0, n.P)()) ? t : {},
                    { language: A } = (0, h.h)(),
                    E = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: l, tld: r, userRegion: a, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: l, userRegion: r } = e,
                                    a = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, l) },
                                    o = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, l) },
                                    n = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, l) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, l) },
                                    p = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, s, l) },
                                    m = [a, n, u];
                                return (i && 'ru' === r && m.push(o), m.push(p), m);
                            })({ formatMessage: i, isWebApplication: s, language: l, tld: r, userRegion: a }),
                            disclaimer: (0, p.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: a,
                            }),
                            copyrights: u({ formatMessage: i, language: l, tld: r, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: v,
                        isWebApplication: o.$3,
                        tld: m.tld,
                        language: A,
                        userRegion: y.account.data.userSessionRegionIso,
                        year: _(g),
                    });
                return (0, s.jsx)(N, { className: (0, l.$)({ [C().root_withOffsetForDeeplink]: k }, i), data: E });
            });
        },
        89916: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => r.G, X1: () => s.X, m5: () => l.m });
            var s = i(46606),
                l = i(91136),
                r = i(19840);
            i(17017);
        },
        91136: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => l });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: l = {}, ...r } = t,
                        a = e || 'Internal error';
                    (super(a, r), (this.message = a), (this.code = i), (this.data = l), (this.stack = Error(a).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class l extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => l, P: () => r });
            var s = i(53548);
            let l = (0, s.createContext)(null),
                r = () => (0, s.useContext)(l);
        },
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
        99890: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => r, UC: () => a, dM: () => o, uV: () => n });
            var s = i(89916),
                l = i(67990);
            let r = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                a = (e) => (e.uid ? 'authorized' : 'no-uid'),
                o = (e) => {
                    if (!(e instanceof s.m5) || !(0, l.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, l.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                n = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7908, 4700, 3248, 5038, 1147, 1191, 8655, 2691, 3165, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 4732, 9087, 3979,
                1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 2088, 763, 2670, 7358,
            ],
            () => e((e.s = 74410)),
        ),
            (_N_E = e.O()));
    },
]);
