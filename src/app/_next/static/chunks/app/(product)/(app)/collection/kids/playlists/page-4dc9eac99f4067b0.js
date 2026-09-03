(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [453],
    {
        3377: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => p });
            var s = i(32290),
                l = i(96103),
                r = i(21916),
                n = i(63618),
                o = i(39407),
                a = i(71926),
                c = i(94218),
                d = i(55556),
                u = i.n(d);
            let _ = (0, l.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(a.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(o.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(a.HL, {
                            className: (0, n.$)(u().text, u().important),
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
            var m = i(20472),
                h = i(57594);
            let p = (0, l.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: l } = (0, h.g)();
                return l.isAuthorized ? t : (i && (0, r.redirect)(m.Z.main.href), (0, s.jsx)(_, {}));
            });
        },
        8626: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
        11262: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var s = i(32290),
                l = i(55178),
                r = i(91027),
                n = i(71730),
                o = i(45477),
                a = i(75582),
                c = i(49399);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, a.l)(),
                    u = (0, l.useRef)(void 0),
                    _ = (0, r.c)(() => {
                        var i;
                        d({ notificationId: u.current }), (u.current = 0);
                        let s = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            });
                    });
                (0, l.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(n.L, { reloadBlocks: _ }), { containerId: o.u.ERROR, autoClose: !1 }));
                }, [d, _, i, e.rejectedPagesCount]);
            };
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
            i.d(t, { r: () => r });
            var s = i(55178),
                l = i(60900);
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
        14858: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => n });
            var s = i(60900),
                l = i(57594),
                r = i(79406);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, s.A)(),
                    { user: i, experiments: n } = (0, l.g)(),
                    o = 'ru' === i.account.data.userSessionRegionIso && n.checkExperiment(r.z.WebNextFooterDisclaimer, 'on'),
                    a = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return o ? t({ id: 'footer.disclaimer-content' }) : a;
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        19581: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 3377)), Promise.resolve().then(i.bind(i, 94056));
        },
        20472: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => l });
            var s = i(36477);
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
                mymusic: (0, s.u)('/mymusic'),
                mymusicDownloadsTracks: (0, s.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, s.u)('/non-music'),
                pay: (0, s.u)('/pay'),
                userSlides: (0, s.u)('/slides/user'),
                search: (0, s.u)('/search'),
                searchHistory: (0, s.u)('/search/history'),
                settings: (0, s.u)('/settings'),
                video: (0, s.u)('/video'),
            };
        },
        22492: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var s = i(32290),
                l = i(55178),
                r = i(60900),
                n = i(21732),
                o = i(63423),
                a = i(82586),
                c = i(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: l,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: h,
                            className: p,
                            forwardRef: x,
                            style: g,
                            children: v,
                        } = e,
                        { formatMessage: y } = (0, r.A)(),
                        C = y({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(o.$, {
                        className: p,
                        color: 'secondary',
                        radius: d,
                        size: l,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': C,
                        onClick: m,
                        ref: x,
                        icon: (0, s.jsx)(a.I, { variant: 'trailer', size: u, className: h }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: g,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, l.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
        },
        30294: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => s });
            let s = 20;
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
        31010: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => l, P: () => r });
            var s = i(55178);
            let l = (0, s.createContext)(null),
                r = () => (0, s.useContext)(l);
        },
        32468: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var s = i(32290),
                l = i(77088),
                r = i.n(l);
            let n = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: r().empty });
            };
        },
        33960: (e) => {
            e.exports = {
                root: 'CollectionKidsSubPageEmpty_root__53xVY',
                scrollableContainer: 'CollectionKidsSubPageEmpty_scrollableContainer__Dh6Sp',
                content: 'CollectionKidsSubPageEmpty_content__VZZg5',
                icon: 'CollectionKidsSubPageEmpty_icon__IQAON',
                title: 'CollectionKidsSubPageEmpty_title__t9H4h',
                button: 'CollectionKidsSubPageEmpty_button__26EKY',
                footer: 'CollectionKidsSubPageEmpty_footer__XQnAw',
            };
        },
        34925: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var s = i(32290),
                l = i(60900),
                r = i(70280);
            let n = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, l.A)();
                return (0, s.jsx)(r.m_, {
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
            i.d(t, { i: () => H });
            var s = i(32290),
                l = i(63618),
                r = i(96103),
                n = i(55178),
                o = i(70280),
                a = i(57594),
                c = i(53514),
                d = i(40484),
                u = i.n(d),
                _ = i(60900),
                m = i(16172),
                h = i(21732),
                p = i(91027),
                x = i(71926),
                g = i(47745),
                v = i(84062),
                y = i(28999),
                C = i(61258),
                k = i(19383);
            let f = (0, r.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: l,
                            captionClassName: r,
                            captionSize: n = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: f } = (0, _.A)(),
                        {
                            track: S,
                            settings: { isMobile: j },
                        } = (0, a.g)(),
                        N = (0, v.Z)(t.url),
                        { sendNavigateSearchFeedback: A } = (0, y.z)(),
                        L = (0, g.N)(),
                        P = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: s, fullscreenPlayer: l, fullscreenVideoPlayer: r } = (0, a.g)(),
                                { modal: n } = s;
                            return (0, k.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), n.isOpened && (s.reset(), n.close()), l.modal.isOpened && l.modal.close();
                                },
                                onAfterHandled: () => {
                                    r.modal.isOpened && (r.modal.close(), r.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, p.c)((e) => {
                                j && S.isOpened && S.close(), N(e);
                            }),
                        }),
                        E = (0, p.c)((e) => {
                            L({ to: m.QT.ArtistScreen }), null == A || A(), P(e);
                        });
                    return i && !t.various
                        ? (0, s.jsx)(C.N, {
                              'aria-label': f({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: l,
                              href: t.url,
                              onClick: E,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: r, children: t.name }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, s.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: r,
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
                            linkClassName: l,
                            captionClassName: r,
                            captionSize: o,
                            allArtistsTitle: a,
                            withCustomTooltip: c,
                            hoverSettings: d,
                            shouldUseSeparator: u = !0,
                        } = e,
                        _ = (0, n.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, s.jsx)(
                                                  f,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: l,
                                                      captionClassName: r,
                                                      captionSize: o,
                                                      allArtistsTitle: a,
                                                      withCustomTooltip: c,
                                                      hoverSettings: d,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, u, i, l, r, o, a, c, d]);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(f, {
                                artist: t,
                                withLink: i,
                                linkClassName: l,
                                captionClassName: r,
                                captionSize: o,
                                allArtistsTitle: a,
                                withCustomTooltip: c,
                                hoverSettings: d,
                            }),
                            _,
                        ],
                    });
                };
            var j = i(39407),
                N = i(63887);
            let A = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: r } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(N.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(u().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(j.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var L = i(8055),
                P = i(6752),
                E = i(78035),
                b = i(78176),
                R = i(83598),
                T = i.n(R);
            let I = (0, r.PA)((e) => {
                    let { label: t, artists: i, forwardRef: l } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, E.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: l, children: t }),
                            (0, s.jsx)(o.ZI, { className: T().tooltipContent, children: i.map((e) => (0, s.jsx)(b.V, { artist: e, className: T().artistItem }, e.id)) }),
                        ],
                    });
                }),
                w = (0, n.forwardRef)((e, t) => (0, s.jsx)(I, { forwardRef: t, ...e }));
            var O = i(19740),
                z = i(52598),
                F = i.n(z);
            let M = (0, r.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: r } = (0, _.A)();
                    return (0, s.jsx)(O.W1, {
                        isMobile: !0,
                        className: (0, l.$)(F().root, F().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(b.V, { artist: e }, e.id)),
                    });
                }),
                D = (0, r.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: l } = e,
                        [r, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, a.g)(),
                        d = (0, p.c)(() => {
                            let e = l.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, P.L)(() =>
                            (0, L.A)(() => {
                                d();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', u),
                                d(),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            ),
                            [u, d],
                        ),
                        (0, n.useEffect)(() => {
                            d();
                        }, [t, d]),
                        0 !== t.length)
                    )
                        return (r || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(M, { artists: t, label: i }) : (0, s.jsx)(w, { artists: t, label: i })) : i;
                }),
                H = (0, r.PA)((e) => {
                    let {
                            className: t,
                            artists: i = [],
                            separator: r = ', ',
                            lineClamp: d,
                            visibleArtistsCount: _,
                            withLink: m = !0,
                            spoilerClassName: h,
                            linkClassName: p,
                            captionClassName: x,
                            captionSize: g,
                            variant: v = 'breakAll',
                            withAllArtistsTitle: y = !0,
                            withComposer: C = !0,
                            spoilerComponent: k,
                            withCustomTooltip: f = !0,
                            artistIdWithoutLink: j,
                            withContextMenu: N,
                        } = e,
                        L = (0, n.useRef)(null),
                        [P, E] = (0, n.useState)(!1),
                        b = y
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
                                  .join(r)
                            : '',
                        {
                            settings: { isMobile: R },
                        } = (0, a.g)(),
                        T = 1 === i.length,
                        I = (0, n.useCallback)((e) => {
                            E(!0), e.preventDefault();
                        }, []),
                        w = (0, n.useMemo)(() => {
                            let e = i;
                            return (
                                _ && !P && (e = i.slice(0, _)),
                                e.reduce((e, t) => {
                                    if (!C && t.isComposer) return e.length ? e : [];
                                    let i = (0, s.jsx)(
                                        S,
                                        {
                                            artist: t,
                                            linkClassName: p,
                                            captionClassName: x,
                                            withLink: m && t.id !== j && (((!R || T) && N) || !N),
                                            captionSize: g,
                                            allArtistsTitle: b,
                                            withCustomTooltip: f,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!r,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([r, i]) : [i];
                                }, [])
                            );
                        }, [i, _, P, C, R, T, N, p, x, m, j, g, b, f, r]),
                        O = (0, n.useMemo)(() => {
                            if (!P && _ && _ < i.length) {
                                let e = i.length - _;
                                return (0, n.isValidElement)(k) ? k : (0, s.jsx)(A, { spoilerClassName: h, spoilerArtistsCount: e, handleOnSpoilerClick: I });
                            }
                        }, [i.length, I, P, h, k, _]),
                        z = (0, n.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        F = (0, s.jsx)(o.m_, {
                            referenceRef: L,
                            enabled: !!(y && b) && f && !N && !R,
                            offsetOptions: 4,
                            placement: 'top',
                            text: b,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: z,
                                className: (0, l.$)(u().root, u()['root_variant_'.concat(v)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: y && b && !f && !N ? b : void 0,
                                children: [w, O],
                            }),
                        });
                    return N ? (0, s.jsx)(D, { labelRef: L, artists: i, label: F }) : F;
                });
        },
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => x });
            var s = i(32290),
                l = i(63618),
                r = i(8055),
                n = i(55178);
            let o = (e) => {
                    let { style: t, forwardRef: i, context: l, ...r } = e,
                        n = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        o = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': n, style: { ...t }, ref: i, ...r });
                },
                a = (0, n.forwardRef)((e, t) => (0, s.jsx)(o, { forwardRef: t, ...e }));
            var c = i(39684),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: r, withHeader: n, withForceScroll: o, ...a } = e;
                    return (0, s.jsx)('div', {
                        className: (0, l.$)(d().scroller, { [d().scroller_withFooter]: r, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: i,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, n.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var m = i(62060),
                h = i(31417);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: l,
                            debounceDurationInMs: r = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            ...d
                        } = e,
                        [u, _] = (0, n.useState)(null),
                        p = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == l || l(e), a.length > 0 && _(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < s; e++) i(e);
                                    }
                                }, r),
                            [r, l, t, i, a],
                        );
                    (0, n.useEffect)(() => {
                        a.length > 0 && u && p(u);
                    }, a);
                    let x = (0, n.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, r);
                    }, [c, r]);
                    return (0, s.jsx)(h.sN, { rangeChanged: p, totalCount: o, endReached: x, ...d });
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
                            pageSize: g = 20,
                            totalCount: v,
                            totalRequests: y,
                            debounceDurationInMs: C,
                            initialItemCount: k,
                            minInitialItemCount: f = 20,
                            handleRef: S,
                            alwaysShowScrollbar: j = !1,
                            testId: N,
                            isMobileLayout: A = !1,
                            shouldTriggerRangeChangedOn: L,
                            ...P
                        } = e,
                        [E, b] = (0, n.useState)(!1),
                        R = (0, n.useMemo)(
                            () =>
                                (0, r.A)((e) => {
                                    b(e);
                                }, 100),
                            [],
                        ),
                        T = (0, n.useMemo)(() => {
                            var e, t;
                            return A
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : a,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : a,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, y, A]),
                        I = k ? Math.min(k, f) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(d().root, { [d().root_scrolling]: E || j, [d().root_notScrolling]: !E && !j }, t),
                        'data-test-id': N,
                        children: [
                            A && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(p, {
                                overscan: x,
                                components: T,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: R,
                                itemContent: m,
                                scrollerRef: S,
                                totalCount: v,
                                pageSize: g,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: C,
                                initialItemCount: I,
                                shouldTriggerRangeChangedOn: L,
                                ...P,
                            }),
                            A && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
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
        58054: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => k });
            var s = i(32290),
                l = i(63618),
                r = i(96103),
                n = i(60900),
                o = i(39407),
                a = i(21732),
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
            var g = i(61258),
                v = i(77088),
                y = i.n(v);
            let C = (0, r.PA)((e) => {
                    let { className: t } = e,
                        { location: i } = (0, h.g)(),
                        { formatDate: r } = (0, n.A)(),
                        { language: d } = (0, m.h)();
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(y().copyrights, t),
                        'data-test-id': a.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    r(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, s.jsx)(g.N, {
                                        target: '_blank',
                                        href: x(p.YANDEX, i.tld, d),
                                        className: (0, l.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': a.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, s.jsx)(o.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(g.N, {
                                target: '_blank',
                                href: x(p.YANDEX_PROJECTS, i.tld, d),
                                className: y().copyrightLink,
                                'data-test-id': a.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, s.jsx)(o.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                k = (0, r.PA)((e) => {
                    var t;
                    let { className: i } = e,
                        { user: r, location: n } = (0, h.g)(),
                        { isEnabled: u } = null != (t = (0, _.P)()) ? t : {},
                        { language: v } = (0, m.h)(),
                        k = (0, d.w)(!0),
                        f = ((e) => {
                            let { platform: t, tld: i, language: l, userRegion: r } = e,
                                n = { title: (0, s.jsx)(o.A, { id: 'footer.links-copyright-holders' }), url: x(p.COPYRIGHT_HOLDER, i, l) },
                                a = { title: (0, s.jsx)(o.A, { id: 'footer.links-privacy-policy' }), url: x(p.PRIVACY_POLICY, i, l) },
                                c = { title: (0, s.jsx)(o.A, { id: 'footer.links-terms' }), url: x(p.AGREEMENT, i, l) },
                                d = { title: (0, s.jsx)(o.A, { id: 'footer.links-recommendation-rules' }), url: x(p.RECOMMENDATION_RULES, i, l) },
                                u = { title: (0, s.jsx)(o.A, { id: 'footer.links-help' }), url: x(p.HELP, i, l) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [n, c, d];
                                    return 'ru' === r && e.push(a), e.push(u), e;
                                }
                                case 'desktop':
                                    return [n, c, d, u];
                            }
                        })({ platform: 'desktop', tld: n.tld, language: v, userRegion: r.account.data.userSessionRegionIso });
                    return (0, s.jsxs)('footer', {
                        className: (0, l.$)(y().root, y().important, { [y().root_withOffsetForDeeplink]: u }, i),
                        'data-test-id': a.S7.FOOTER,
                        children: [
                            (0, s.jsxs)('div', {
                                className: y().links,
                                children: [
                                    (0, s.jsx)('ol', {
                                        className: y().list,
                                        'data-test-id': a.S7.FOOTER_LINKS_LIST,
                                        children: f.map((e) => {
                                            let { title: t, url: i } = e;
                                            return (0, s.jsx)(
                                                'li',
                                                {
                                                    className: y().item,
                                                    children: (0, s.jsx)(g.N, {
                                                        target: '_blank',
                                                        href: i,
                                                        className: y().link,
                                                        'data-test-id': a.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                i,
                                            );
                                        }),
                                    }),
                                    (0, s.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: y().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: k },
                                        'data-test-id': a.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(C, {}),
                        ],
                    });
                });
        },
        61376: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => _ });
            var s = i(32290),
                l = i(63618),
                r = i(60900),
                n = i(21732),
                o = i(63423),
                a = i(82586),
                c = i(71926),
                d = i(22492),
                u = i.n(d);
            let _ = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: _, ariaLabel: m } = e,
                    { formatNumber: h } = (0, r.A)();
                return (0, s.jsx)(o.$, {
                    className: (0, l.$)(u().root, t),
                    onClick: _,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, s.jsx)(a.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': n.S7.CARD_LIKES,
                    children: (0, s.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: h(d) }),
                });
            };
        },
        61500: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => k });
            var s = i(32290),
                l = i(96103),
                r = i(39407),
                n = i(63423),
                o = i(82586),
                a = i(46049),
                c = i(71926),
                d = i(7999),
                u = i(83808),
                _ = i(83920),
                m = i(20472),
                h = i(84062),
                p = i(57594),
                x = i(58054),
                g = i(32468),
                v = i(74694),
                y = i(33960),
                C = i.n(y);
            let k = (0, l.PA)((e) => {
                let { title: t } = e,
                    {
                        settings: { isMobile: i },
                    } = (0, p.g)(),
                    { contentScrollRef: l, setContentScrollRef: y } = (0, _.g)(),
                    k = (0, u.W)(),
                    f = (0, h.Z)(m.Z.collectionKids.href);
                return (0, s.jsxs)(d.h, {
                    scrollElement: l,
                    outerTitle: t,
                    children: [
                        (0, s.jsx)(v.Y, {
                            variant: v.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: k.canBack,
                            children: (0, s.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: i ? 'm' : 'xl', lineClamp: 2, children: t }),
                        }),
                        (0, s.jsxs)(a.N, {
                            ref: y,
                            containerClassName: C().scrollableContainer,
                            className: C().root,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: C().content,
                                    children: [
                                        (0, s.jsx)('div', { className: C().icon, children: (0, s.jsx)(o.I, { variant: 'like', size: 'l' }) }),
                                        (0, s.jsx)(c.DZ, {
                                            className: C().title,
                                            variant: 'h3',
                                            size: 'xs',
                                            children: (0, s.jsx)(r.A, { id: 'error-messages.empty-collection-kids-sub-page-title' }),
                                        }),
                                        (0, s.jsx)(n.$, {
                                            onClick: f,
                                            className: C().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 's',
                                            radius: 'xxxl',
                                            children: (0, s.jsx)(c.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, s.jsx)(r.A, { id: 'error-messages.empty-collection-kids-sub-page-link' }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(g.A, { children: (0, s.jsx)(x.w, { className: C().footer }) }),
                            ],
                        }),
                    ],
                });
            });
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => k });
            var s = i(32290),
                l = i(63618),
                r = i(96103),
                n = i(55178),
                o = i(60900),
                a = i(39407),
                c = i(63423),
                d = i(82586),
                u = i(71926),
                _ = i(16172),
                m = i(52068),
                h = i(62376),
                p = i(37240),
                x = i(83920),
                g = i(20472),
                v = i(12894),
                y = i(30310),
                C = i.n(y);
            let k = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: r } = (0, o.A)(),
                    y = r({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, m.st)(),
                        { hash: i } = (0, m.gf)(),
                        { pageId: s } = (0, p.$)(),
                        l = (0, h.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !i || !s) return;
                        let r = (0, _.Fx)({
                            params: {
                                entityType: _.LA.Error,
                                entityId: _.LA.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: s,
                                pageStyle: _.QL.Fullscreen,
                                pagePlacement: _.c4.Fullscreen,
                                mainObjectType: _.ky.NonApplicable,
                                mainObjectId: _.ky.NonApplicable,
                            },
                            logger: l,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, _.z5)(t.evgenInstance, r);
                    }, [t, e, i, s, l]);
                })(y);
                let { sendRefreshEvent: k } = (function () {
                        let e = (0, m.st)(),
                            { hash: t } = (0, m.gf)(),
                            { pageId: i } = (0, p.$)(),
                            s = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let l = (0, _.Fx)({
                                    params: {
                                        actionType: _.X2.Refresh,
                                        userInteractionType: _.gi.Tap,
                                        entityType: _.LA.Error,
                                        entityId: _.LA.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: _.QL.Fullscreen,
                                        pagePlacement: _.c4.Fullscreen,
                                        mainObjectType: _.ky.NonApplicable,
                                        mainObjectId: _.ky.NonApplicable,
                                    },
                                    logger: s,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                l && (0, _.bv)(e.evgenInstance, l);
                            }, [e, t, i, s]),
                        };
                    })(),
                    f = (0, n.useCallback)(() => {
                        k(), (window.location.href = g.Z.main.href);
                    }, [k]),
                    { contentRef: S } = (0, x.g)();
                return (0, s.jsxs)('div', {
                    className: (0, l.$)(C().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(v.L, { withBackwardFallback: '/', className: (0, l.$)(C().navigation, { [C().navigation_desktop]: !S }), withForwardControl: !1 }),
                        (0, s.jsxs)('div', {
                            className: (0, l.$)(C().content, { [C().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(d.I, { className: C().icon, variant: 'attention', size: 'xxl' }),
                                (0, s.jsx)(u.DZ, { className: (0, l.$)(C().title, C().important), variant: 'h3', size: 'xs', children: y }),
                                (0, s.jsxs)(u.HL, {
                                    className: (0, l.$)(C().text, C().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, s.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, s.jsx)(c.$, {
                                    onClick: f,
                                    className: C().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, s.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, s.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        70718: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        71730: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => h });
            var s = i(32290),
                l = i(63618),
                r = i(55178),
                n = i(60900),
                o = i(39407),
                a = i(63423),
                c = i(82586),
                d = i(71926),
                u = i(58534),
                _ = i(70718),
                m = i.n(_);
            let h = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    _ = (0, r.useRef)(null),
                    { formatMessage: h } = (0, n.A)();
                (0, r.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let p = (0, r.useMemo)(
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
                                (0, s.jsx)(a.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': h({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [h, t],
                );
                return (0, s.jsx)(u.$, { className: (0, l.$)(m().root, m().important), message: p, closeToast: i });
            };
        },
        73141: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var s = i(32290),
                l = i(92708),
                r = i(55178),
                n = i(60900),
                o = i(63380),
                a = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                _ = i(97647),
                m = i(97755);
            let h = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, s.jsx)(m.O, {
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
                        [_, m] = (0, r.useState)(!1),
                        { formatMessage: p } = (0, n.A)();
                    return (0, r.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, s.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a.u.ERROR });
                        if (_) return;
                        let r = { ...(0, l.HO)(e), url: e.url, isLiked: !e.isLiked };
                        m(!0);
                        let n = await e.toggleLike();
                        m(!1),
                            n === o.f.OK
                                ? i((0, s.jsx)(h, { playlist: r }), { containerId: a.u.INFO })
                                : i((0, s.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: a.u.ERROR });
                    }, [t.isAuthorized, _, e, p, i]);
                };
        },
        73192: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => h });
            var s = i(32290),
                l = i(92708),
                r = i(55178),
                n = i(60900),
                o = i(45477),
                a = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                _ = i(8097);
            let m = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, s.jsx)(_.k, {
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
                        { notify: i } = (0, a.l)(),
                        { formatMessage: u } = (0, n.A)(),
                        [_, h] = (0, r.useState)(!1);
                    return (0, r.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, s.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let r = { ...(0, l.HO)(e), url: e.url, isPinned: !e.isPinned };
                        h(!0);
                        let n = await e.togglePin();
                        h(!1),
                            n
                                ? i((0, s.jsx)(m, { playlist: r }), { containerId: o.u.INFO })
                                : i((0, s.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
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
            i.d(t, { V: () => y });
            var s = i(32290),
                l = i(63618),
                r = i(96103),
                n = i(55178),
                o = i(16172),
                a = i(21732),
                c = i(91027),
                d = i(50162),
                u = i(19740),
                _ = i(86269),
                m = i(71926),
                h = i(47745),
                p = i(84062),
                x = i(57594),
                g = i(16510),
                v = i.n(g);
            let y = (0, r.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: r } = (0, x.g)(),
                    g = (0, p.Z)(t.url),
                    C = (0, h.N)(),
                    k = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(y, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    f = (0, c.c)((e) => {
                        r.modal.isOpened && r.modal.close(), C({ to: o.QT.ArtistScreen }), g(e);
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(u.Dr, {
                            className: (0, l.$)(v().root, i),
                            onClick: f,
                            'data-test-id': a.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(_.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, s.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, s.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        k,
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
            i.d(t, { B: () => J });
            var s = i(32290),
                l = i(63618),
                r = i(96103),
                n = i(55178),
                o = i(60900),
                a = i(16172),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                _ = i(6752),
                m = i(14934),
                h = i(82586),
                // for PulseSync WebHost
                pulseSyncPlaylistDownloadIcons = i(82586),
                p = i(86269),
                x = i(71926),
                g = i(41677),
                v = i(73141),
                y = i(73192),
                C = i(71735),
                k = i(47745),
                f = i(2969),
                S = i(54391),
                j = i(23352),
                N = i(72396),
                A = i(5537),
                L = i(84062),
                P = i(28999),
                E = i(90169),
                b = i(57594),
                R = i(61376),
                T = i(11323),
                I = i(92744),
                w = i(61258),
                O = i(10180),
                z = i(90326),
                F = i(29268),
                M = i(34925),
                D = i(13931),
                H = i(19740),
                W = i(9017),
                K = i(65477),
                B = i(46200),
                Y = i(27120),
                $ = i(95134),
                V = i(79406),
                U = i(58237),
                X = i(56367),
                Z = i(83755);
            let G = (0, r.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: l, open: r, ...n } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, B.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: h },
                        trailer: p,
                        user: x,
                    } = (0, b.g)(),
                    g = (0, v.K)(i),
                    k = (0, y.A)(i),
                    f = (0, S.F)(),
                    { formatMessage: j } = (0, o.A)(),
                    N = (0, C.P)(),
                    A = m.checkExperiment(V.z.WebEditorsFeatures, 'on'),
                    L = (0, W.A)({ entityVariant: $.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, Y.N)(r);
                let P = (0, u.c)(() => {
                    if (d) return void _();
                    N() || (p.openPlaylistTrailer(i.id), f(a.ky.Playlist, i.id));
                });
                return (0, s.jsxs)(H.W1, {
                    title: i.title,
                    onOpenChange: l,
                    open: r,
                    offsetOptions: 10,
                    isMobile: h,
                    ariaLabel: j({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU },
                    ...n,
                    // for PulseSync WebHost
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
                                return (0, s.jsx)(
                                    H.Dr,
                                    {
                                        icon: (0, s.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: icon, size: 'xxs' }),
                                        onClick: () => {
                                            activate(), l?.(!1);
                                        },
                                        children: label,
                                        'data-pulsesync-addon-menu-item': '',
                                    },
                                    key,
                                );
                            },
                        }) ?? items)([
                        A && (0, s.jsx)(K.d, { entityVariant: $.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : L }),
                        !h && (0, s.jsx)(X.L, { onClick: k, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, s.jsx)(U.T, { onClick: g, isLiked: i.isLiked, disabled: !x.isAuthorized }),
                        (i.tracksCount ?? 1) > 0 &&
                            (0, s.jsx)(H.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, s.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, s.jsx)(Z.N, { onClick: P, disabled: !i.isAvailable }),
                    ]),
                });
            });
            var Q = i(11675),
                q = i.n(Q);
            let J = (0, r.PA)((e) => {
                let { className: t, playlist: i, children: r, contentLinesCount: H, customDescription: W } = e,
                    { ref: K, intersectionPropertyId: B } = (0, j.n)(),
                    {
                        trailer: Y,
                        user: $,
                        paywall: { modal: V },
                    } = (0, b.g)(),
                    { from: U, utmLink: X } = (0, N.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: Z } = (0, o.A)(),
                    { sendLikeSearchFeedback: Q, sendNavigateSearchFeedback: J, sendPlaySearchFeedback: ee } = (0, P.z)(),
                    [et, ei] = (0, n.useState)(!1),
                    [es, el] = (0, n.useState)(!1),
                    [er, en] = (0, n.useState)(!1),
                    eo = (0, D.r)(i),
                    ea = (0, v.K)(i),
                    ec = (0, y.A)(i),
                    ed = (0, k.N)(),
                    eu = (0, f.b)(),
                    e_ = (0, L.Z)(i.url),
                    em = (0, S.F)(),
                    eh = (0, C.P)(),
                    ep = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eh())) return void e.preventDefault();
                        Y.setUtmLink(X), Y.openPlaylistTrailer(i.id), em(a.ky.Playlist, i.id);
                    }),
                    [ex, eg] = (0, n.useState)(!1),
                    { isPlaying: ev, togglePlay: ey } = (0, E.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: U, utmLink: X }, loadContextMeta: !0 },
                    }),
                    eC = (0, u.c)(() => {
                        ed({ to: a.QT.PlaylistScreen }), null == J || J();
                    }),
                    ek = (0, u.c)((e) => {
                        eC(), e_(e);
                    }),
                    ef = (0, A.N)(),
                    eS = (0, u.c)(() => {
                        if (!eh()) {
                            if (ef) return void V.open();
                            et || ev || (ei(!0), null == ee || ee()), ey(), eu(!ev);
                        }
                    }),
                    ej = (0, u.c)(() => {
                        es || i.isLiked || (el(!0), null == Q || Q()), ea();
                    }),
                    eN = (0, u.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    eA = (0, u.c)((e) => {
                        en(e), eg(e);
                    }),
                    eL = (0, n.useMemo)(() => {
                        var e;
                        return W
                            ? (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: W }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, s.jsx)(
                                    g.i,
                                    { className: q().artists, artists: i.artists, lineClamp: 1, linkClassName: q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [W, i]),
                    eP = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, s.jsx)(
                                I.c,
                                {
                                    className: (0, l.$)(q().likeButton, q().control),
                                    isLiked: i.isLiked,
                                    onClick: ej,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !$.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eE = (0, n.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                M.n,
                                {
                                    children: (0, s.jsx)(
                                        F.k,
                                        { className: (0, l.$)(q().trailerButton, q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ep },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ep, i]),
                    eb = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                O.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, l.$)(q().pinButton, q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    eR = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(p.t, {
                                className: q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: q().coverBlock,
                                    onClick: ek,
                                    children: [
                                        (0, s.jsx)(T.B, {
                                            className: q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(m.hg, {
                                            isVisible: er || ex,
                                            className: q().controls,
                                            playControl: (0, s.jsx)(
                                                z.D,
                                                {
                                                    className: (0, l.$)(q().playButton, q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eS,
                                                    isPlaying: ev,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eP,
                                            menuControl: (0, s.jsx)(
                                                G,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eA,
                                                    open: er,
                                                    onClick: eN,
                                                    className: (0, l.$)(q().menuButton, q().control),
                                                    icon: (0, s.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eb,
                                            trailerControl: eE,
                                        }),
                                    ],
                                }),
                            }),
                        [ek, i, eo, er, ex, eS, ev, eP, eA, eN, eb, eE],
                    ),
                    eT = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, s.jsxs)(m.MN, {
                    ref: K,
                    'aria-label': eo,
                    className: (0, l.$)(q().root, t),
                    title: (0, s.jsx)(x.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, s.jsx)(w.N, { className: q().titleLink, href: i.url, onClick: eC, children: i.title }),
                    }),
                    srTitle: (0, s.jsx)(w.N, { href: i.url, onClick: eC, children: i.title }),
                    'data-intersection-property-id': B,
                    contentLinesCount: H,
                    view: eR,
                    description: eL,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eT &&
                            (0, s.jsx)(R.x, {
                                ariaLabel: Z({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ea,
                            }),
                        r,
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
        84296: (e) => {
            e.exports = {
                root: 'CollectionKidsPlaylistsPage_root__RXH06',
                scrollContainer: 'CollectionKidsPlaylistsPage_scrollContainer__F_oj2',
                important: 'CollectionKidsPlaylistsPage_important__5V_zc',
                footer: 'CollectionKidsPlaylistsPage_footer__R41Ol',
                item: 'CollectionKidsPlaylistsPage_item__ht83l',
                content: 'CollectionKidsPlaylistsPage_content__6Oo1m',
            };
        },
        89020: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => a });
            var s = i(32290),
                l = i(63618),
                r = i(79856),
                n = i(80556),
                o = i.n(n);
            let a = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: n,
                    round: a,
                    'aria-label': c,
                    centered: d,
                    withInfo: u = !0,
                    linesCount: _ = 3,
                    withSubcover: m,
                    radius: h = 'l',
                } = e;
                return (0, s.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, l.$)(o().root, i),
                    children: [
                        m && (0, s.jsx)(r.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, s.jsx)(r.W, { isActive: t, className: (0, l.$)(o().cover, n, { [o().cover_round]: a, [o().cover_withSubcover]: m }), radius: h }),
                        u &&
                            (0, s.jsx)('div', {
                                className: (0, l.$)(o().infoContainer, o()['content_linesCount_'.concat(_)], { [o().infoContainer_centered]: d }),
                                children: (0, s.jsx)(r.W, { isActive: t, className: (0, l.$)(o().title, { [o().title_withSubcover]: m }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        94056: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsPlaylistsPage: () => b });
            var s = i(32290),
                l = i(63618),
                r = i(96103),
                n = i(55178),
                o = i(60900),
                a = i(39407),
                c = i(21732),
                d = i(71926),
                u = i(64170),
                _ = i(7999),
                m = i(83460),
                h = i(48922),
                p = i(22714),
                x = i(83808),
                g = i(83920),
                v = i(3796),
                y = i(57594),
                C = i(11262),
                k = i(58054),
                f = i(32468),
                S = i(74694),
                j = i(89020),
                N = i(45257),
                A = i(30294),
                L = i(61500),
                P = i(84296),
                E = i.n(P);
            let b = (0, r.PA)(() => {
                let {
                        settings: { isMobile: e },
                        collection: {
                            kids: { playlists: t },
                        },
                    } = (0, y.g)(),
                    { contentScrollRef: i, setContentScrollRef: r } = (0, g.g)(),
                    P = (0, x.W)(),
                    { formatMessage: b } = (0, o.A)(),
                    R = (0, n.useCallback)(
                        (e) => {
                            t.getData({ page: e, pageSize: A.c });
                        },
                        [t],
                    );
                (0, C.X)(t.pagesLoader, R);
                let T = (0, n.useMemo)(() => ({ Footer: () => (0, s.jsx)(f.A, { children: (0, s.jsx)(k.w, { className: E().footer }) }) }), []),
                    I = t.isShimmerVisible ? 20 : t.items.length;
                return ((0, n.useEffect)(
                    () => () => {
                        t.reset();
                    },
                    [t],
                ),
                (0, v.J)(t.isResolved),
                t.isNeededToLoad && (0, n.use)(t.getData({ pageSize: A.c })),
                t.isRejected)
                    ? (0, s.jsx)(u.SomethingWentWrong, {})
                    : t.isEmpty
                      ? (0, s.jsx)(L.i, { title: b({ id: 'entity-names.artist-playlist' }) })
                      : (0, s.jsx)(p.n, {
                            pageId: h._Q.COLLECTION_KIDS_PLAYLISTS,
                            children: (0, s.jsx)(_.h, {
                                scrollElement: i,
                                outerTitle: b({ id: 'entity-names.artist-playlist' }),
                                children: (0, s.jsxs)('div', {
                                    className: E().root,
                                    'data-test-id': c.Xk.collection.COLLECTION_KIDS_PLAYLISTS_PAGE,
                                    children: [
                                        (0, s.jsx)(S.Y, {
                                            variant: S.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: P.canBack,
                                            children: (0, s.jsx)(d.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, s.jsx)(a.A, { id: 'entity-names.artist-playlist' }),
                                            }),
                                        }),
                                        (0, s.jsx)(N.$, {
                                            className: (0, l.$)(E().scrollContainer, E().important),
                                            customComponents: T,
                                            itemContentCallback: (e) => {
                                                let i = t.items[e],
                                                    l = b({ id: 'loading-messages.entity-is-loading' }, { entityName: b({ id: 'entity-names.album' }) });
                                                return i
                                                    ? (0, s.jsx)(m.B, { playlist: i, contentLinesCount: 3 }, i.id)
                                                    : (0, s.jsx)(j.V, { 'aria-label': l, linesCount: 3 });
                                            },
                                            initialItemCount: I,
                                            totalCount: I,
                                            onGetDataByPage: R,
                                            totalRequests: t.requestsCount,
                                            pageSize: A.c,
                                            listClassName: E().content,
                                            itemClassName: E().item,
                                            handleRef: r,
                                            context: { listAriaLabel: b({ id: 'entity-names.albums' }) },
                                            isMobileLayout: e,
                                            useWindowScroll: e,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        94218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => _ });
            var s = i(32290),
                l = i(21916),
                r = i(39407),
                n = i(21732),
                o = i(91027),
                a = i(63423),
                c = i(71926),
                d = i(70204),
                u = i(34186);
            let _ = (e) => {
                let { size: t = 'm', variant: i = 'default', withRipple: _ = !0, buttonText: m, isBlock: h, key: p, className: x } = e,
                    g = (0, l.useRouter)(),
                    v = (0, u.N)().get(d.QG),
                    y = (0, o.c)(() => {
                        v.authorizationUrl && g.push(v.authorizationUrl);
                    });
                return (0, s.jsx)(
                    a.$,
                    {
                        onClick: y,
                        className: x,
                        isBlock: h,
                        color: 'primary',
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: m || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(r.A, { id: 'authorization.enter-button' }) }),
                    },
                    p,
                );
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                5718, 7034, 7231, 6347, 3183, 9763, 6639, 7258, 3907, 2456, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6477, 7275, 2586, 8347, 4522,
                7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8816, 4220, 9562, 7358,
            ],
            () => e((e.s = 19581)),
        ),
            (_N_E = e.O());
    },
]);
