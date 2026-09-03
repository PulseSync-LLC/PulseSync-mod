(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3695],
    {
        3377: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => p });
            var l = i(32290),
                r = i(96103),
                s = i(21916),
                a = i(63618),
                o = i(39407),
                n = i(71926),
                c = i(94218),
                d = i(55556),
                u = i.n(d);
            let _ = (0, r.PA)(() =>
                (0, l.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, l.jsx)(n.DZ, {
                            className: (0, a.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, l.jsx)(o.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, l.jsx)(n.HL, {
                            className: (0, a.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, l.jsx)(o.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, l.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = i(20472),
                h = i(57594);
            let p = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: r } = (0, h.g)();
                return r.isAuthorized ? t : (i && (0, s.redirect)(m.Z.main.href), (0, l.jsx)(_, {}));
            });
        },
        8246: (e, t, i) => {
            'use strict';
            var l;
            i.d(t, { x: () => l }),
                (function (e) {
                    (e.ASC = 'asc'), (e.DESC = 'desc');
                })(l || (l = {}));
        },
        8626: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => l });
            let l = () => ({ year: 'numeric' });
        },
        10398: (e, t, i) => {
            'use strict';
            var l;
            i.d(t, { S: () => l }),
                (function (e) {
                    (e.MUSIC = 'music'), (e.CHILDREN = 'children');
                })(l || (l = {}));
        },
        11675: (e) => {
            e.exports = {
                root: 'PlaylistCard_root__i3pR4',
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
        13931: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => s });
            var l = i(55178),
                r = i(60900);
            let s = (e) => {
                let { formatMessage: t } = (0, r.A)();
                return (0, l.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let l = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(l, ' ').concat(i);
                }, [t, e]);
            };
        },
        14858: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => a });
            var l = i(60900),
                r = i(57594),
                s = i(79406);
            let a = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, l.A)(),
                    { user: i, experiments: a } = (0, r.g)(),
                    o = 'ru' === i.account.data.userSessionRegionIso && a.checkExperiment(s.z.WebNextFooterDisclaimer, 'on'),
                    n = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return o ? t({ id: 'footer.disclaimer-content' }) : n;
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        20472: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => r });
            var l = i(36477);
            let r = {
                main: (0, l.u)('/'),
                chart: (0, l.u)('/chart'),
                chartPodcasts: (0, l.u)('/chart/podcasts'),
                collection: (0, l.u)('/collection'),
                collectionAlbums: (0, l.u)('/collection/albums'),
                collectionArtists: (0, l.u)('/collection/artists'),
                collectionClips: (0, l.u)('/collection/clips'),
                collectionDislikes: (0, l.u)('/collection/dislikes'),
                collectionKids: (0, l.u)('/collection/kids'),
                collectionKidsAlbums: (0, l.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, l.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, l.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, l.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, l.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, l.u)('/collection/multivibes'),
                collectionPlaylists: (0, l.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, l.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, l.u)('/collection/playlists/liked'),
                collectionShelf: (0, l.u)('/collection/shelf'),
                collectionShelfLiked: (0, l.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, l.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, l.u)('/collection/shelf/recently-played'),
                concerts: (0, l.u)('/concerts'),
                kids: (0, l.u)('/kids'),
                mixes: (0, l.u)('/mixes'),
                musicHistory: (0, l.u)('/music-history'),
                mymusic: (0, l.u)('/mymusic'),
                mymusicDownloadsTracks: (0, l.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, l.u)('/non-music'),
                pay: (0, l.u)('/pay'),
                userSlides: (0, l.u)('/slides/user'),
                search: (0, l.u)('/search'),
                searchHistory: (0, l.u)('/search/history'),
                settings: (0, l.u)('/settings'),
                video: (0, l.u)('/video'),
            };
        },
        22492: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var l = i(32290),
                r = i(55178),
                s = i(60900),
                a = i(21732),
                o = i(63423),
                n = i(82586),
                c = i(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: h,
                            className: p,
                            forwardRef: x,
                            style: v,
                            children: y,
                        } = e,
                        { formatMessage: C } = (0, s.A)(),
                        k = C({ id: 'trailer.button-aria-label' });
                    return (0, l.jsx)(o.$, {
                        className: p,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': k,
                        onClick: m,
                        ref: x,
                        icon: (0, l.jsx)(n.I, { variant: 'trailer', size: u, className: h }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': a.S7.TRAILER_BUTTON,
                        children: y,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, l.jsx)(d, { forwardRef: t, ...e }));
        },
        31010: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r, P: () => s });
            var l = i(55178);
            let r = (0, l.createContext)(null),
                s = () => (0, l.useContext)(r);
        },
        32468: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => a });
            var l = i(32290),
                r = i(77088),
                s = i.n(r);
            let a = (e) => {
                let { children: t } = e;
                return (0, l.jsx)('footer', { className: s().empty });
            };
        },
        34925: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => a });
            var l = i(32290),
                r = i(60900),
                s = i(70280);
            let a = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, r.A)();
                return (0, l.jsx)(s.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        39684: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        41677: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => F });
            var l = i(32290),
                r = i(63618),
                s = i(96103),
                a = i(55178),
                o = i(70280),
                n = i(57594),
                c = i(53514),
                d = i(40484),
                u = i.n(d),
                _ = i(60900),
                m = i(16172),
                h = i(21732),
                p = i(91027),
                x = i(71926),
                v = i(47745),
                y = i(84062),
                C = i(28999),
                k = i(61258),
                f = i(19383);
            let g = (0, s.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: r,
                            captionClassName: s,
                            captionSize: a = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: g } = (0, _.A)(),
                        {
                            track: S,
                            settings: { isMobile: A },
                        } = (0, n.g)(),
                        L = (0, y.Z)(t.url),
                        { sendNavigateSearchFeedback: N } = (0, C.z)(),
                        j = (0, v.N)(),
                        E = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: l, fullscreenPlayer: r, fullscreenVideoPlayer: s } = (0, n.g)(),
                                { modal: a } = l;
                            return (0, f.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), a.isOpened && (l.reset(), a.close()), r.modal.isOpened && r.modal.close();
                                },
                                onAfterHandled: () => {
                                    s.modal.isOpened && (s.modal.close(), s.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, p.c)((e) => {
                                A && S.isOpened && S.close(), L(e);
                            }),
                        }),
                        P = (0, p.c)((e) => {
                            j({ to: m.QT.ArtistScreen }), null == N || N(), E(e);
                        });
                    return i && !t.various
                        ? (0, l.jsx)(k.N, {
                              'aria-label': g({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: r,
                              href: t.url,
                              onClick: P,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, l.jsx)(o.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, l.jsx)(x.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: s, children: t.name }),
                              }),
                          })
                        : (0, l.jsx)(o.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, l.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: s,
                                  title: d ? void 0 : c || t.name,
                                  'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                S = (e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: r,
                            captionClassName: s,
                            captionSize: o,
                            allArtistsTitle: n,
                            withCustomTooltip: c,
                            hoverSettings: d,
                            shouldUseSeparator: u = !0,
                        } = e,
                        _ = (0, a.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, l.jsx)(
                                                  g,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: r,
                                                      captionClassName: s,
                                                      captionSize: o,
                                                      allArtistsTitle: n,
                                                      withCustomTooltip: c,
                                                      hoverSettings: d,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, u, i, r, s, o, n, c, d]);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(g, {
                                artist: t,
                                withLink: i,
                                linkClassName: r,
                                captionClassName: s,
                                captionSize: o,
                                allArtistsTitle: n,
                                withCustomTooltip: c,
                                hoverSettings: d,
                            }),
                            _,
                        ],
                    });
                };
            var A = i(39407),
                L = i(63887);
            let N = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: s } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        ' ',
                        (0, l.jsx)(L.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(u().spoiler, i),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, l.jsx)(A.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var j = i(8055),
                E = i(6752),
                P = i(78035),
                R = i(78176),
                T = i(83598),
                b = i.n(T);
            let I = (0, s.PA)((e) => {
                    let { label: t, artists: i, forwardRef: r } = e;
                    return (0, l.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, P.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, l.jsx)('div', { ref: r, children: t }),
                            (0, l.jsx)(o.ZI, { className: b().tooltipContent, children: i.map((e) => (0, l.jsx)(R.V, { artist: e, className: b().artistItem }, e.id)) }),
                        ],
                    });
                }),
                O = (0, a.forwardRef)((e, t) => (0, l.jsx)(I, { forwardRef: t, ...e }));
            var w = i(19740),
                z = i(52598),
                M = i.n(z);
            let H = (0, s.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: s } = (0, _.A)();
                    return (0, l.jsx)(w.W1, {
                        isMobile: !0,
                        className: (0, r.$)(M().root, M().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, l.jsx)(R.V, { artist: e }, e.id)),
                    });
                }),
                D = (0, s.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: r } = e,
                        [s, o] = (0, a.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, n.g)(),
                        d = (0, p.c)(() => {
                            let e = r.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, E.L)(() =>
                            (0, j.A)(() => {
                                d();
                            }, 100),
                        );
                    if (
                        ((0, a.useEffect)(
                            () => (
                                window.addEventListener('resize', u),
                                d(),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            ),
                            [u, d],
                        ),
                        (0, a.useEffect)(() => {
                            d();
                        }, [t, d]),
                        0 !== t.length)
                    )
                        return (s || c) && (!c || 1 !== t.length) ? (c ? (0, l.jsx)(H, { artists: t, label: i }) : (0, l.jsx)(O, { artists: t, label: i })) : i;
                }),
                F = (0, s.PA)((e) => {
                    let {
                            className: t,
                            artists: i = [],
                            separator: s = ', ',
                            lineClamp: d,
                            visibleArtistsCount: _,
                            withLink: m = !0,
                            spoilerClassName: h,
                            linkClassName: p,
                            captionClassName: x,
                            captionSize: v,
                            variant: y = 'breakAll',
                            withAllArtistsTitle: C = !0,
                            withComposer: k = !0,
                            spoilerComponent: f,
                            withCustomTooltip: g = !0,
                            artistIdWithoutLink: A,
                            withContextMenu: L,
                        } = e,
                        j = (0, a.useRef)(null),
                        [E, P] = (0, a.useState)(!1),
                        R = C
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
                                  .join(s)
                            : '',
                        {
                            settings: { isMobile: T },
                        } = (0, n.g)(),
                        b = 1 === i.length,
                        I = (0, a.useCallback)((e) => {
                            P(!0), e.preventDefault();
                        }, []),
                        O = (0, a.useMemo)(() => {
                            let e = i;
                            return (
                                _ && !E && (e = i.slice(0, _)),
                                e.reduce((e, t) => {
                                    if (!k && t.isComposer) return e.length ? e : [];
                                    let i = (0, l.jsx)(
                                        S,
                                        {
                                            artist: t,
                                            linkClassName: p,
                                            captionClassName: x,
                                            withLink: m && t.id !== A && (((!T || b) && L) || !L),
                                            captionSize: v,
                                            allArtistsTitle: R,
                                            withCustomTooltip: g,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!s,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([s, i]) : [i];
                                }, [])
                            );
                        }, [i, _, E, k, T, b, L, p, x, m, A, v, R, g, s]),
                        w = (0, a.useMemo)(() => {
                            if (!E && _ && _ < i.length) {
                                let e = i.length - _;
                                return (0, a.isValidElement)(f) ? f : (0, l.jsx)(N, { spoilerClassName: h, spoilerArtistsCount: e, handleOnSpoilerClick: I });
                            }
                        }, [i.length, I, E, h, f, _]),
                        z = (0, a.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        M = (0, l.jsx)(o.m_, {
                            referenceRef: j,
                            enabled: !!(C && R) && g && !L && !T,
                            offsetOptions: 4,
                            placement: 'top',
                            text: R,
                            hoverSettings: c.V,
                            children: (0, l.jsxs)('div', {
                                style: z,
                                className: (0, r.$)(u().root, u()['root_variant_'.concat(y)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: C && R && !g && !L ? R : void 0,
                                children: [O, w],
                            }),
                        });
                    return L ? (0, l.jsx)(D, { labelRef: j, artists: i, label: M }) : M;
                });
        },
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => x });
            var l = i(32290),
                r = i(63618),
                s = i(8055),
                a = i(55178);
            let o = (e) => {
                    let { style: t, forwardRef: i, context: r, ...s } = e,
                        a = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        o = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': a, style: { ...t }, ref: i, ...s });
                },
                n = (0, a.forwardRef)((e, t) => (0, l.jsx)(o, { forwardRef: t, ...e }));
            var c = i(39684),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: s, withHeader: a, withForceScroll: o, ...n } = e;
                    return (0, l.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: a, [d().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: i,
                        ...n,
                        tabIndex: -1,
                    });
                },
                _ = (0, a.forwardRef)((e, t) => (0, l.jsx)(u, { forwardRef: t, ...e }));
            var m = i(62060),
                h = i(31417);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: r,
                            debounceDurationInMs: s = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            ...d
                        } = e,
                        [u, _] = (0, a.useState)(null),
                        p = (0, a.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == r || r(e), n.length > 0 && _(e), t && i)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < l; e++) i(e);
                                    }
                                }, s),
                            [s, r, t, i, n],
                        );
                    (0, a.useEffect)(() => {
                        n.length > 0 && u && p(u);
                    }, n);
                    let x = (0, a.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, l.jsx)(h.sN, { rangeChanged: p, totalCount: o, endReached: x, ...d });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: o,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: x = 700,
                            pageSize: v = 20,
                            totalCount: y,
                            totalRequests: C,
                            debounceDurationInMs: k,
                            initialItemCount: f,
                            minInitialItemCount: g = 20,
                            handleRef: S,
                            alwaysShowScrollbar: A = !1,
                            testId: L,
                            isMobileLayout: N = !1,
                            shouldTriggerRangeChangedOn: j,
                            ...E
                        } = e,
                        [P, R] = (0, a.useState)(!1),
                        T = (0, a.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    R(e);
                                }, 100),
                            [],
                        ),
                        b = (0, a.useMemo)(() => {
                            var e, t;
                            return N
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : n,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : n,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, C, N]),
                        I = f ? Math.min(f, g) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: P || A, [d().root_notScrolling]: !P && !A }, t),
                        'data-test-id': L,
                        children: [
                            N && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, l.jsx)(p, {
                                overscan: x,
                                components: b,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: T,
                                itemContent: m,
                                scrollerRef: S,
                                totalCount: y,
                                pageSize: v,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: k,
                                initialItemCount: I,
                                shouldTriggerRangeChangedOn: j,
                                ...E,
                            }),
                            N && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => l });
            let l = { delay: { open: 1e3, close: 0 } };
        },
        55556: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        57594: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => s, g: () => a });
            var l = i(29222),
                r = i(55178);
            let s = (0, r.createContext)(null);
            function a() {
                let e = (0, r.useContext)(s);
                if (null === e) throw new l.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        58054: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => f });
            var l = i(32290),
                r = i(63618),
                s = i(96103),
                a = i(60900),
                o = i(39407),
                n = i(21732),
                c = i(71926),
                d = i(14858),
                u = i(8626),
                _ = i(31010),
                m = i(61945),
                h = i(57594),
                p = (function (e) {
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
            let x = (e, t, i) => {
                switch (e) {
                    case p.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case p.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                    case p.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                    case p.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                    case p.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case p.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                    case p.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                }
            };
            var v = i(61258),
                y = i(77088),
                C = i.n(y);
            let k = (0, s.PA)((e) => {
                    let { className: t } = e,
                        { location: i } = (0, h.g)(),
                        { formatDate: s } = (0, a.A)(),
                        { language: d } = (0, m.h)();
                    return (0, l.jsxs)('div', {
                        className: (0, r.$)(C().copyrights, t),
                        'data-test-id': n.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, l.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    s(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, l.jsx)(v.N, {
                                        target: '_blank',
                                        href: x(p.YANDEX, i.tld, d),
                                        className: (0, r.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': n.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, l.jsx)(o.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, l.jsx)(v.N, {
                                target: '_blank',
                                href: x(p.YANDEX_PROJECTS, i.tld, d),
                                className: C().copyrightLink,
                                'data-test-id': n.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, l.jsx)(o.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                f = (0, s.PA)((e) => {
                    var t;
                    let { className: i } = e,
                        { user: s, location: a } = (0, h.g)(),
                        { isEnabled: u } = null != (t = (0, _.P)()) ? t : {},
                        { language: y } = (0, m.h)(),
                        f = (0, d.w)(!0),
                        g = ((e) => {
                            let { platform: t, tld: i, language: r, userRegion: s } = e,
                                a = { title: (0, l.jsx)(o.A, { id: 'footer.links-copyright-holders' }), url: x(p.COPYRIGHT_HOLDER, i, r) },
                                n = { title: (0, l.jsx)(o.A, { id: 'footer.links-privacy-policy' }), url: x(p.PRIVACY_POLICY, i, r) },
                                c = { title: (0, l.jsx)(o.A, { id: 'footer.links-terms' }), url: x(p.AGREEMENT, i, r) },
                                d = { title: (0, l.jsx)(o.A, { id: 'footer.links-recommendation-rules' }), url: x(p.RECOMMENDATION_RULES, i, r) },
                                u = { title: (0, l.jsx)(o.A, { id: 'footer.links-help' }), url: x(p.HELP, i, r) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [a, c, d];
                                    return 'ru' === s && e.push(n), e.push(u), e;
                                }
                                case 'desktop':
                                    return [a, c, d, u];
                            }
                        })({ platform: 'desktop', tld: a.tld, language: y, userRegion: s.account.data.userSessionRegionIso });
                    return (0, l.jsxs)('footer', {
                        className: (0, r.$)(C().root, C().important, { [C().root_withOffsetForDeeplink]: u }, i),
                        'data-test-id': n.S7.FOOTER,
                        children: [
                            (0, l.jsxs)('div', {
                                className: C().links,
                                children: [
                                    (0, l.jsx)('ol', {
                                        className: C().list,
                                        'data-test-id': n.S7.FOOTER_LINKS_LIST,
                                        children: g.map((e) => {
                                            let { title: t, url: i } = e;
                                            return (0, l.jsx)(
                                                'li',
                                                {
                                                    className: C().item,
                                                    children: (0, l.jsx)(v.N, {
                                                        target: '_blank',
                                                        href: i,
                                                        className: C().link,
                                                        'data-test-id': n.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                i,
                                            );
                                        }),
                                    }),
                                    (0, l.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: C().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: f },
                                        'data-test-id': n.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(k, {}),
                        ],
                    });
                });
        },
        61376: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => _ });
            var l = i(32290),
                r = i(63618),
                s = i(60900),
                a = i(21732),
                o = i(63423),
                n = i(82586),
                c = i(71926),
                d = i(22492),
                u = i.n(d);
            let _ = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: _, ariaLabel: m } = e,
                    { formatNumber: h } = (0, s.A)();
                return (0, l.jsx)(o.$, {
                    className: (0, r.$)(u().root, t),
                    onClick: _,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, l.jsx)(n.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': a.S7.CARD_LIKES,
                    children: (0, l.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: h(d) }),
                });
            };
        },
        73141: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var l = i(32290),
                r = i(92708),
                s = i(55178),
                a = i(60900),
                o = i(63380),
                n = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                _ = i(97647),
                m = i(97755);
            let h = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, l.jsx)(m.O, {
                        entityVariant: _.c.PLAYLIST,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        closeToast: i,
                        coverUri: t.coverUri,
                    });
                },
                p = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [_, m] = (0, s.useState)(!1),
                        { formatMessage: p } = (0, a.A)();
                    return (0, s.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, l.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (_) return;
                        let s = { ...(0, r.HO)(e), url: e.url, isLiked: !e.isLiked };
                        m(!0);
                        let a = await e.toggleLike();
                        m(!1),
                            a === o.f.OK
                                ? i((0, l.jsx)(h, { playlist: s }), { containerId: n.u.INFO })
                                : i((0, l.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR });
                    }, [t.isAuthorized, _, e, p, i]);
                };
        },
        73192: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => h });
            var l = i(32290),
                r = i(92708),
                s = i(55178),
                a = i(60900),
                o = i(45477),
                n = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                _ = i(8097);
            let m = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, l.jsx)(_.k, {
                        closeToast: i,
                        entityVariant: u.c.PLAYLIST,
                        entityUrl: t.url,
                        coverUri: t.coverUri,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                },
                h = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, n.l)(),
                        { formatMessage: u } = (0, a.A)(),
                        [_, h] = (0, s.useState)(!1);
                    return (0, s.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, l.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let s = { ...(0, r.HO)(e), url: e.url, isPinned: !e.isPinned };
                        h(!0);
                        let a = await e.togglePin();
                        h(!1),
                            a
                                ? i((0, l.jsx)(m, { playlist: s }), { containerId: o.u.INFO })
                                : i((0, l.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                    }, [t.isAuthorized, _, e, i, u]);
                };
        },
        77088: (e) => {
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
        78176: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => C });
            var l = i(32290),
                r = i(63618),
                s = i(96103),
                a = i(55178),
                o = i(16172),
                n = i(21732),
                c = i(91027),
                d = i(50162),
                u = i(19740),
                _ = i(86269),
                m = i(71926),
                h = i(47745),
                p = i(84062),
                x = i(57594),
                v = i(16510),
                y = i.n(v);
            let C = (0, s.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: s } = (0, x.g)(),
                    v = (0, p.Z)(t.url),
                    k = (0, h.N)(),
                    f = (0, a.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, l.jsx)(C, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    g = (0, c.c)((e) => {
                        s.modal.isOpened && s.modal.close(), k({ to: o.QT.ArtistScreen }), v(e);
                    });
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)(u.Dr, {
                            className: (0, r.$)(y().root, i),
                            onClick: g,
                            'data-test-id': n.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, l.jsx)(_.t, {
                                    radius: 'round',
                                    className: y().cover,
                                    children: (0, l.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: y().image }),
                                }),
                                (0, l.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        f,
                    ],
                });
            });
        },
        80556: (e) => {
            e.exports = {
                root: 'EntityCardShimmer_root__Sh7ah',
                subcover: 'EntityCardShimmer_subcover__ESt3R',
                cover: 'EntityCardShimmer_cover__BXtjT',
                cover_round: 'EntityCardShimmer_cover_round__Ci3zW',
                cover_withSubcover: 'EntityCardShimmer_cover_withSubcover__v9l5y',
                infoContainer: 'EntityCardShimmer_infoContainer__22kYk',
                infoContainer_centered: 'EntityCardShimmer_infoContainer_centered__cxlPO',
                title: 'EntityCardShimmer_title__GQ2jX',
                title_withSubcover: 'EntityCardShimmer_title_withSubcover__lBHBC',
                content_linesCount_1: 'EntityCardShimmer_content_linesCount_1__JHlue',
                content_linesCount_2: 'EntityCardShimmer_content_linesCount_2__CMvO5',
                content_linesCount_3: 'EntityCardShimmer_content_linesCount_3__mPzav',
                content_linesCount_4: 'EntityCardShimmer_content_linesCount_4__8KtHO',
            };
        },
        83460: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => Q });
            var l = i(32290),
                r = i(63618),
                s = i(96103),
                a = i(55178),
                o = i(60900),
                n = i(16172),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                _ = i(6752),
                m = i(14934),
                h = i(82586),
                pulseSyncPlaylistDownloadIcons = i(82586),
                p = i(86269),
                x = i(71926),
                v = i(41677),
                y = i(73141),
                C = i(73192),
                k = i(71735),
                f = i(47745),
                g = i(2969),
                S = i(54391),
                A = i(23352),
                L = i(72396),
                N = i(5537),
                j = i(84062),
                E = i(28999),
                P = i(90169),
                R = i(57594),
                T = i(61376),
                b = i(11323),
                I = i(92744),
                O = i(61258),
                w = i(10180),
                z = i(90326),
                M = i(29268),
                H = i(34925),
                D = i(13931),
                F = i(19740),
                Y = i(9017),
                B = i(65477),
                K = i(46200),
                U = i(27120),
                V = i(95134),
                $ = i(79406),
                W = i(58237),
                X = i(56367),
                q = i(83755);
            let G = (0, s.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: r, open: s, ...a } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, K.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: h },
                        trailer: p,
                        user: x,
                    } = (0, R.g)(),
                    v = (0, y.K)(i),
                    f = (0, C.A)(i),
                    g = (0, S.F)(),
                    { formatMessage: A } = (0, o.A)(),
                    L = (0, k.P)(),
                    N = m.checkExperiment($.z.WebEditorsFeatures, 'on'),
                    j = (0, Y.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, U.N)(s);
                let E = (0, u.c)(() => {
                    if (d) return void _();
                    L() || (p.openPlaylistTrailer(i.id), g(n.ky.Playlist, i.id));
                });
                return (0, l.jsxs)(F.W1, {
                    title: i.title,
                    onOpenChange: r,
                    open: s,
                    offsetOptions: 10,
                    isMobile: h,
                    ariaLabel: A({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU },
                    ...a,
                    children: ((items) =>
                        window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                            eventDetail: {
                                id: String(i.kind ?? i.id),
                                uuid: String(i.uuid ?? ''),
                                url: String(i.url ?? ''),
                                ...(i.title ? { title: String(i.title) } : {}),
                            },
                            renderItem: ({ key, payload, activate }) => {
                                const label = String(payload?.label ?? '').trim(),
                                    icon = String(payload?.icon ?? '').trim();
                                if (!label || !icon) return null;
                                return (0, l.jsx)(
                                    F.Dr,
                                    {
                                        icon: (0, l.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: icon, size: 'xxs' }),
                                        onClick: () => {
                                            activate(), r?.(!1);
                                        },
                                        children: label,
                                        'data-pulsesync-addon-menu-item': '',
                                    },
                                    key,
                                );
                            },
                        }) ?? items)([
                        N && (0, l.jsx)(B.d, { entityVariant: V.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : j }),
                        !h && (0, l.jsx)(X.L, { onClick: f, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, l.jsx)(W.T, { onClick: v, isLiked: i.isLiked, disabled: !x.isAuthorized }),
                        (i.tracksCount ?? 1) > 0 &&
                            (0, l.jsx)(F.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, l.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, l.jsx)(q.N, { onClick: E, disabled: !i.isAvailable }),
                    ]),
                });
            });
            var Z = i(11675),
                J = i.n(Z);
            let Q = (0, s.PA)((e) => {
                let { className: t, playlist: i, children: s, contentLinesCount: F, customDescription: Y } = e,
                    { ref: B, intersectionPropertyId: K } = (0, A.n)(),
                    {
                        trailer: U,
                        user: V,
                        paywall: { modal: $ },
                    } = (0, R.g)(),
                    { from: W, utmLink: X } = (0, L.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: q } = (0, o.A)(),
                    { sendLikeSearchFeedback: Z, sendNavigateSearchFeedback: Q, sendPlaySearchFeedback: ee } = (0, E.z)(),
                    [et, ei] = (0, a.useState)(!1),
                    [el, er] = (0, a.useState)(!1),
                    [es, ea] = (0, a.useState)(!1),
                    eo = (0, D.r)(i),
                    en = (0, y.K)(i),
                    ec = (0, C.A)(i),
                    ed = (0, f.N)(),
                    eu = (0, g.b)(),
                    e_ = (0, j.Z)(i.url),
                    em = (0, S.F)(),
                    eh = (0, k.P)(),
                    ep = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eh())) return void e.preventDefault();
                        U.setUtmLink(X), U.openPlaylistTrailer(i.id), em(n.ky.Playlist, i.id);
                    }),
                    [ex, ev] = (0, a.useState)(!1),
                    { isPlaying: ey, togglePlay: eC } = (0, P.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: W, utmLink: X }, loadContextMeta: !0 },
                    }),
                    ek = (0, u.c)(() => {
                        ed({ to: n.QT.PlaylistScreen }), null == Q || Q();
                    }),
                    ef = (0, u.c)((e) => {
                        ek(), e_(e);
                    }),
                    eg = (0, N.N)(),
                    eS = (0, u.c)(() => {
                        if (!eh()) {
                            if (eg) return void $.open();
                            et || ey || (ei(!0), null == ee || ee()), eC(), eu(!ey);
                        }
                    }),
                    eA = (0, u.c)(() => {
                        el || i.isLiked || (er(!0), null == Z || Z()), en();
                    }),
                    eL = (0, u.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    eN = (0, u.c)((e) => {
                        ea(e), ev(e);
                    }),
                    ej = (0, a.useMemo)(() => {
                        var e;
                        return Y
                            ? (0, l.jsx)(x.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: Y }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, l.jsx)(
                                    v.i,
                                    { className: J().artists, artists: i.artists, lineClamp: 1, linkClassName: J().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [Y, i]),
                    eE = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, l.jsx)(
                                I.c,
                                {
                                    className: (0, r.$)(J().likeButton, J().control),
                                    isLiked: i.isLiked,
                                    onClick: eA,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !V.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eP = (0, a.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, l.jsx)(
                                H.n,
                                {
                                    children: (0, l.jsx)(
                                        M.k,
                                        { className: (0, r.$)(J().trailerButton, J().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ep },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ep, i]),
                    eR = (0, a.useMemo)(
                        () =>
                            (0, l.jsx)(
                                w.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, r.$)(J().pinButton, J().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    eT = (0, a.useMemo)(
                        () =>
                            (0, l.jsx)(p.t, {
                                className: J().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, l.jsxs)('div', {
                                    className: J().coverBlock,
                                    onClick: ef,
                                    children: [
                                        (0, l.jsx)(b.B, {
                                            className: J().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, l.jsx)(m.hg, {
                                            isVisible: es || ex,
                                            className: J().controls,
                                            playControl: (0, l.jsx)(
                                                z.D,
                                                {
                                                    className: (0, r.$)(J().playButton, J().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eS,
                                                    isPlaying: ey,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eE,
                                            menuControl: (0, l.jsx)(
                                                G,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eN,
                                                    open: es,
                                                    onClick: eL,
                                                    className: (0, r.$)(J().menuButton, J().control),
                                                    icon: (0, l.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eR,
                                            trailerControl: eP,
                                        }),
                                    ],
                                }),
                            }),
                        [ef, i, eo, es, ex, eS, ey, eE, eN, eL, eR, eP],
                    ),
                    eb = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, l.jsxs)(m.MN, {
                    ref: B,
                    'aria-label': eo,
                    className: (0, r.$)(J().root, t),
                    title: (0, l.jsx)(x.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, l.jsx)(O.N, { className: J().titleLink, href: i.url, onClick: ek, children: i.title }),
                    }),
                    srTitle: (0, l.jsx)(O.N, { href: i.url, onClick: ek, children: i.title }),
                    'data-intersection-property-id': K,
                    contentLinesCount: F,
                    view: eT,
                    description: ej,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eb &&
                            (0, l.jsx)(T.x, {
                                ariaLabel: q({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: en,
                            }),
                        s,
                    ],
                });
            });
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        89020: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => n });
            var l = i(32290),
                r = i(63618),
                s = i(79856),
                a = i(80556),
                o = i.n(a);
            let n = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: a,
                    round: n,
                    'aria-label': c,
                    centered: d,
                    withInfo: u = !0,
                    linesCount: _ = 3,
                    withSubcover: m,
                    radius: h = 'l',
                } = e;
                return (0, l.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, r.$)(o().root, i),
                    children: [
                        m && (0, l.jsx)(s.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, l.jsx)(s.W, { isActive: t, className: (0, r.$)(o().cover, a, { [o().cover_round]: n, [o().cover_withSubcover]: m }), radius: h }),
                        u &&
                            (0, l.jsx)('div', {
                                className: (0, r.$)(o().infoContainer, o()['content_linesCount_'.concat(_)], { [o().infoContainer_centered]: d }),
                                children: (0, l.jsx)(s.W, { isActive: t, className: (0, r.$)(o().title, { [o().title_withSubcover]: m }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        94218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => _ });
            var l = i(32290),
                r = i(21916),
                s = i(39407),
                a = i(21732),
                o = i(91027),
                n = i(63423),
                c = i(71926),
                d = i(70204),
                u = i(34186);
            let _ = (e) => {
                let { size: t = 'm', variant: i = 'default', withRipple: _ = !0, buttonText: m, isBlock: h, key: p, className: x } = e,
                    v = (0, r.useRouter)(),
                    y = (0, u.N)().get(d.QG),
                    C = (0, o.c)(() => {
                        y.authorizationUrl && v.push(y.authorizationUrl);
                    });
                return (0, l.jsx)(
                    n.$,
                    {
                        onClick: C,
                        className: x,
                        isBlock: h,
                        color: 'primary',
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': a.S7.UNAUTHORIZED_BUTTON,
                        children: m || (0, l.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, l.jsx)(s.A, { id: 'authorization.enter-button' }) }),
                    },
                    p,
                );
            };
        },
    },
]);
