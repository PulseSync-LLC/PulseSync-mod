(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6696],
    {
        3377: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => h });
            var l = i(32290),
                s = i(96103),
                r = i(21916),
                a = i(63618),
                o = i(39407),
                n = i(71926),
                c = i(94218),
                d = i(55556),
                u = i.n(d);
            let _ = (0, s.PA)(() =>
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
                p = i(57594);
            let h = (0, s.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: s } = (0, p.g)();
                return s.isAuthorized ? t : (i && (0, r.redirect)(m.Z.main.href), (0, l.jsx)(_, {}));
            });
        },
        8626: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => l });
            let l = () => ({ year: 'numeric' });
        },
        11262: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var l = i(32290),
                s = i(55178),
                r = i(91027),
                a = i(71730),
                o = i(45477),
                n = i(75582),
                c = i(49399);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, n.l)(),
                    u = (0, s.useRef)(void 0),
                    _ = (0, r.c)(() => {
                        var i;
                        d({ notificationId: u.current }), (u.current = 0);
                        let l = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        e.resetRejectedPagesState(),
                            l.forEach((e) => {
                                t(e);
                            });
                    });
                (0, s.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, l.jsx)(a.L, { reloadBlocks: _ }), { containerId: o.u.ERROR, autoClose: !1 }));
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
            var l = i(55178),
                s = i(60900);
            let r = (e) => {
                let { formatMessage: t } = (0, s.A)();
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
                s = i(57594),
                r = i(79406);
            let a = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, l.A)(),
                    { user: i, experiments: a } = (0, s.g)(),
                    o = 'ru' === i.account.data.userSessionRegionIso && a.checkExperiment(r.z.WebNextFooterDisclaimer, 'on'),
                    n = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return o ? t({ id: 'footer.disclaimer-content' }) : n;
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        20472: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => s });
            var l = i(36477);
            let s = {
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
        23254: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 3377)), Promise.resolve().then(i.bind(i, 69114));
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var l = i(32290),
                s = i(55178),
                r = i(60900),
                a = i(21732),
                o = i(63423),
                n = i(82586),
                c = i(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: s,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: h,
                            forwardRef: x,
                            style: v,
                            children: C,
                        } = e,
                        { formatMessage: y } = (0, r.A)(),
                        g = y({ id: 'trailer.button-aria-label' });
                    return (0, l.jsx)(o.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: s,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': g,
                        onClick: m,
                        ref: x,
                        icon: (0, l.jsx)(n.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': a.S7.TRAILER_BUTTON,
                        children: C,
                    });
                },
                u = (0, s.forwardRef)((e, t) => (0, l.jsx)(d, { forwardRef: t, ...e }));
        },
        31010: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => s, P: () => r });
            var l = i(55178);
            let s = (0, l.createContext)(null),
                r = () => (0, l.useContext)(s);
        },
        32468: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => a });
            var l = i(32290),
                s = i(77088),
                r = i.n(s);
            let a = (e) => {
                let { children: t } = e;
                return (0, l.jsx)('footer', { className: r().empty });
            };
        },
        34925: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => a });
            var l = i(32290),
                s = i(60900),
                r = i(70280);
            let a = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, s.A)();
                return (0, l.jsx)(r.m_, {
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
            var l = i(32290),
                s = i(63618),
                r = i(96103),
                a = i(55178),
                o = i(70280),
                n = i(57594),
                c = i(53514),
                d = i(40484),
                u = i.n(d),
                _ = i(60900),
                m = i(16172),
                p = i(21732),
                h = i(91027),
                x = i(71926),
                v = i(47745),
                C = i(84062),
                y = i(28999),
                g = i(61258),
                f = i(19383);
            let k = (0, r.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: s,
                            captionClassName: r,
                            captionSize: a = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: k } = (0, _.A)(),
                        {
                            track: S,
                            settings: { isMobile: A },
                        } = (0, n.g)(),
                        N = (0, C.Z)(t.url),
                        { sendNavigateSearchFeedback: L } = (0, y.z)(),
                        j = (0, v.N)(),
                        P = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: l, fullscreenPlayer: s, fullscreenVideoPlayer: r } = (0, n.g)(),
                                { modal: a } = l;
                            return (0, f.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), a.isOpened && (l.reset(), a.close()), s.modal.isOpened && s.modal.close();
                                },
                                onAfterHandled: () => {
                                    r.modal.isOpened && (r.modal.close(), r.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, h.c)((e) => {
                                A && S.isOpened && S.close(), N(e);
                            }),
                        }),
                        E = (0, h.c)((e) => {
                            j({ to: m.QT.ArtistScreen }), null == L || L(), P(e);
                        });
                    return i && !t.various
                        ? (0, l.jsx)(g.N, {
                              'aria-label': k({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: s,
                              href: t.url,
                              onClick: E,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, l.jsx)(o.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, l.jsx)(x.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: r, children: t.name }),
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
                                  className: r,
                                  title: d ? void 0 : c || t.name,
                                  'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                S = (e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: s,
                            captionClassName: r,
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
                                                  k,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: s,
                                                      captionClassName: r,
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
                        }, [t.decomposed, u, i, s, r, o, n, c, d]);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(k, {
                                artist: t,
                                withLink: i,
                                linkClassName: s,
                                captionClassName: r,
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
                N = i(63887);
            let L = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: r } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        ' ',
                        (0, l.jsx)(N.N, {
                            role: 'button',
                            href: '',
                            className: (0, s.$)(u().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': p.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, l.jsx)(A.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var j = i(8055),
                P = i(6752),
                E = i(78035),
                R = i(78176),
                T = i(83598),
                b = i.n(T);
            let I = (0, r.PA)((e) => {
                    let { label: t, artists: i, forwardRef: s } = e;
                    return (0, l.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, E.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, l.jsx)('div', { ref: s, children: t }),
                            (0, l.jsx)(o.ZI, { className: b().tooltipContent, children: i.map((e) => (0, l.jsx)(R.V, { artist: e, className: b().artistItem }, e.id)) }),
                        ],
                    });
                }),
                O = (0, a.forwardRef)((e, t) => (0, l.jsx)(I, { forwardRef: t, ...e }));
            var w = i(19740),
                z = i(52598),
                M = i.n(z);
            let D = (0, r.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: r } = (0, _.A)();
                    return (0, l.jsx)(w.W1, {
                        isMobile: !0,
                        className: (0, s.$)(M().root, M().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, l.jsx)(R.V, { artist: e }, e.id)),
                    });
                }),
                F = (0, r.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: s } = e,
                        [r, o] = (0, a.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, n.g)(),
                        d = (0, h.c)(() => {
                            let e = s.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, P.L)(() =>
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
                        return (r || c) && (!c || 1 !== t.length) ? (c ? (0, l.jsx)(D, { artists: t, label: i }) : (0, l.jsx)(O, { artists: t, label: i })) : i;
                }),
                H = (0, r.PA)((e) => {
                    let {
                            className: t,
                            artists: i = [],
                            separator: r = ', ',
                            lineClamp: d,
                            visibleArtistsCount: _,
                            withLink: m = !0,
                            spoilerClassName: p,
                            linkClassName: h,
                            captionClassName: x,
                            captionSize: v,
                            variant: C = 'breakAll',
                            withAllArtistsTitle: y = !0,
                            withComposer: g = !0,
                            spoilerComponent: f,
                            withCustomTooltip: k = !0,
                            artistIdWithoutLink: A,
                            withContextMenu: N,
                        } = e,
                        j = (0, a.useRef)(null),
                        [P, E] = (0, a.useState)(!1),
                        R = y
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
                            settings: { isMobile: T },
                        } = (0, n.g)(),
                        b = 1 === i.length,
                        I = (0, a.useCallback)((e) => {
                            E(!0), e.preventDefault();
                        }, []),
                        O = (0, a.useMemo)(() => {
                            let e = i;
                            return (
                                _ && !P && (e = i.slice(0, _)),
                                e.reduce((e, t) => {
                                    if (!g && t.isComposer) return e.length ? e : [];
                                    let i = (0, l.jsx)(
                                        S,
                                        {
                                            artist: t,
                                            linkClassName: h,
                                            captionClassName: x,
                                            withLink: m && t.id !== A && (((!T || b) && N) || !N),
                                            captionSize: v,
                                            allArtistsTitle: R,
                                            withCustomTooltip: k,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!r,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([r, i]) : [i];
                                }, [])
                            );
                        }, [i, _, P, g, T, b, N, h, x, m, A, v, R, k, r]),
                        w = (0, a.useMemo)(() => {
                            if (!P && _ && _ < i.length) {
                                let e = i.length - _;
                                return (0, a.isValidElement)(f) ? f : (0, l.jsx)(L, { spoilerClassName: p, spoilerArtistsCount: e, handleOnSpoilerClick: I });
                            }
                        }, [i.length, I, P, p, f, _]),
                        z = (0, a.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        M = (0, l.jsx)(o.m_, {
                            referenceRef: j,
                            enabled: !!(y && R) && k && !N && !T,
                            offsetOptions: 4,
                            placement: 'top',
                            text: R,
                            hoverSettings: c.V,
                            children: (0, l.jsxs)('div', {
                                style: z,
                                className: (0, s.$)(u().root, u()['root_variant_'.concat(C)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: y && R && !k && !N ? R : void 0,
                                children: [O, w],
                            }),
                        });
                    return N ? (0, l.jsx)(F, { labelRef: j, artists: i, label: M }) : M;
                });
        },
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => x });
            var l = i(32290),
                s = i(63618),
                r = i(8055),
                a = i(55178);
            let o = (e) => {
                    let { style: t, forwardRef: i, context: s, ...r } = e,
                        a = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        o = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': a, style: { ...t }, ref: i, ...r });
                },
                n = (0, a.forwardRef)((e, t) => (0, l.jsx)(o, { forwardRef: t, ...e }));
            var c = i(39684),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: r, withHeader: a, withForceScroll: o, ...n } = e;
                    return (0, l.jsx)('div', {
                        className: (0, s.$)(d().scroller, { [d().scroller_withFooter]: r, [d().scroller_withHeader]: a, [d().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: i,
                        ...n,
                        tabIndex: -1,
                    });
                },
                _ = (0, a.forwardRef)((e, t) => (0, l.jsx)(u, { forwardRef: t, ...e }));
            var m = i(62060),
                p = i(31417);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: s,
                            debounceDurationInMs: r = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            ...d
                        } = e,
                        [u, _] = (0, a.useState)(null),
                        h = (0, a.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == s || s(e), n.length > 0 && _(e), t && i)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < l; e++) i(e);
                                    }
                                }, r),
                            [r, s, t, i, n],
                        );
                    (0, a.useEffect)(() => {
                        n.length > 0 && u && h(u);
                    }, n);
                    let x = (0, a.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, r);
                    }, [c, r]);
                    return (0, l.jsx)(p.sN, { rangeChanged: h, totalCount: o, endReached: x, ...d });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: o,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: x = 700,
                            pageSize: v = 20,
                            totalCount: C,
                            totalRequests: y,
                            debounceDurationInMs: g,
                            initialItemCount: f,
                            minInitialItemCount: k = 20,
                            handleRef: S,
                            alwaysShowScrollbar: A = !1,
                            testId: N,
                            isMobileLayout: L = !1,
                            shouldTriggerRangeChangedOn: j,
                            ...P
                        } = e,
                        [E, R] = (0, a.useState)(!1),
                        T = (0, a.useMemo)(
                            () =>
                                (0, r.A)((e) => {
                                    R(e);
                                }, 100),
                            [],
                        ),
                        b = (0, a.useMemo)(() => {
                            var e, t;
                            return L
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
                        }, [i, y, L]),
                        I = f ? Math.min(f, k) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, s.$)(d().root, { [d().root_scrolling]: E || A, [d().root_notScrolling]: !E && !A }, t),
                        'data-test-id': N,
                        children: [
                            L && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, l.jsx)(h, {
                                overscan: x,
                                components: b,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: T,
                                itemContent: m,
                                scrollerRef: S,
                                totalCount: C,
                                pageSize: v,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: g,
                                initialItemCount: I,
                                shouldTriggerRangeChangedOn: j,
                                ...P,
                            }),
                            L && (null == i ? void 0 : i.Footer) && i.Footer(),
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
        56502: (e) => {
            e.exports = {
                root: 'CollectionPlaylistsCreatedPage_root__o77CF',
                scrollContainer: 'CollectionPlaylistsCreatedPage_scrollContainer__Spb2M',
                important: 'CollectionPlaylistsCreatedPage_important__DLkOq',
                content: 'CollectionPlaylistsCreatedPage_content___qalr',
                footer: 'CollectionPlaylistsCreatedPage_footer__I2jJa',
                item: 'CollectionPlaylistsCreatedPage_item__2RmBg',
            };
        },
        57594: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => r, g: () => a });
            var l = i(29222),
                s = i(55178);
            let r = (0, s.createContext)(null);
            function a() {
                let e = (0, s.useContext)(r);
                if (null === e) throw new l.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        58054: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => f });
            var l = i(32290),
                s = i(63618),
                r = i(96103),
                a = i(60900),
                o = i(39407),
                n = i(21732),
                c = i(71926),
                d = i(14858),
                u = i(8626),
                _ = i(31010),
                m = i(61945),
                p = i(57594),
                h = (function (e) {
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
                    case h.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case h.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                    case h.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                    case h.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                    case h.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case h.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                    case h.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                }
            };
            var v = i(61258),
                C = i(77088),
                y = i.n(C);
            let g = (0, r.PA)((e) => {
                    let { className: t } = e,
                        { location: i } = (0, p.g)(),
                        { formatDate: r } = (0, a.A)(),
                        { language: d } = (0, m.h)();
                    return (0, l.jsxs)('div', {
                        className: (0, s.$)(y().copyrights, t),
                        'data-test-id': n.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, l.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    r(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, l.jsx)(v.N, {
                                        target: '_blank',
                                        href: x(h.YANDEX, i.tld, d),
                                        className: (0, s.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': n.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, l.jsx)(o.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, l.jsx)(v.N, {
                                target: '_blank',
                                href: x(h.YANDEX_PROJECTS, i.tld, d),
                                className: y().copyrightLink,
                                'data-test-id': n.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, l.jsx)(o.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                f = (0, r.PA)((e) => {
                    var t;
                    let { className: i } = e,
                        { user: r, location: a } = (0, p.g)(),
                        { isEnabled: u } = null != (t = (0, _.P)()) ? t : {},
                        { language: C } = (0, m.h)(),
                        f = (0, d.w)(!0),
                        k = ((e) => {
                            let { platform: t, tld: i, language: s, userRegion: r } = e,
                                a = { title: (0, l.jsx)(o.A, { id: 'footer.links-copyright-holders' }), url: x(h.COPYRIGHT_HOLDER, i, s) },
                                n = { title: (0, l.jsx)(o.A, { id: 'footer.links-privacy-policy' }), url: x(h.PRIVACY_POLICY, i, s) },
                                c = { title: (0, l.jsx)(o.A, { id: 'footer.links-terms' }), url: x(h.AGREEMENT, i, s) },
                                d = { title: (0, l.jsx)(o.A, { id: 'footer.links-recommendation-rules' }), url: x(h.RECOMMENDATION_RULES, i, s) },
                                u = { title: (0, l.jsx)(o.A, { id: 'footer.links-help' }), url: x(h.HELP, i, s) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [a, c, d];
                                    return 'ru' === r && e.push(n), e.push(u), e;
                                }
                                case 'desktop':
                                    return [a, c, d, u];
                            }
                        })({ platform: 'desktop', tld: a.tld, language: C, userRegion: r.account.data.userSessionRegionIso });
                    return (0, l.jsxs)('footer', {
                        className: (0, s.$)(y().root, y().important, { [y().root_withOffsetForDeeplink]: u }, i),
                        'data-test-id': n.S7.FOOTER,
                        children: [
                            (0, l.jsxs)('div', {
                                className: y().links,
                                children: [
                                    (0, l.jsx)('ol', {
                                        className: y().list,
                                        'data-test-id': n.S7.FOOTER_LINKS_LIST,
                                        children: k.map((e) => {
                                            let { title: t, url: i } = e;
                                            return (0, l.jsx)(
                                                'li',
                                                {
                                                    className: y().item,
                                                    children: (0, l.jsx)(v.N, {
                                                        target: '_blank',
                                                        href: i,
                                                        className: y().link,
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
                                        className: y().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: f },
                                        'data-test-id': n.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(g, {}),
                        ],
                    });
                });
        },
        61376: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => _ });
            var l = i(32290),
                s = i(63618),
                r = i(60900),
                a = i(21732),
                o = i(63423),
                n = i(82586),
                c = i(71926),
                d = i(22492),
                u = i.n(d);
            let _ = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: _, ariaLabel: m } = e,
                    { formatNumber: p } = (0, r.A)();
                return (0, l.jsx)(o.$, {
                    className: (0, s.$)(u().root, t),
                    onClick: _,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, l.jsx)(n.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': a.S7.CARD_LIKES,
                    children: (0, l.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(d) }),
                });
            };
        },
        69114: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionPlaylistsCreatedPage: () => j });
            var l = i(32290),
                s = i(63618),
                r = i(96103),
                a = i(55178),
                o = i(60900),
                n = i(39407),
                c = i(21732),
                d = i(71926),
                u = i(7999),
                _ = i(83460),
                m = i(48922),
                p = i(22714),
                h = i(83808),
                x = i(83920),
                v = i(3796),
                C = i(57594),
                y = i(11262),
                g = i(58054),
                f = i(32468),
                k = i(74694),
                S = i(89020),
                A = i(45257),
                N = i(56502),
                L = i.n(N);
            let j = (0, r.PA)(() => {
                let {
                        user: e,
                        collection: {
                            playlists: { playlistsCreated: t },
                        },
                        settings: { isMobile: i },
                    } = (0, C.g)(),
                    { formatMessage: r } = (0, o.A)(),
                    { contentScrollRef: N, setContentScrollRef: j } = (0, x.g)(),
                    P = (0, h.W)(),
                    E = (0, a.useMemo)(() => ({ Footer: () => (0, l.jsx)(f.A, { children: (0, l.jsx)(g.w, { className: L().footer }) }) }), []);
                (0, v.J)(t.isResolved);
                let R = (0, a.useCallback)(
                    (i) => {
                        e.account.data.uid && t.getData({ userId: e.account.data.uid, page: i, pageSize: 20 });
                    },
                    [t, e.account.data.uid],
                );
                (0, y.X)(t.pagesLoader, R),
                    (0, a.useEffect)(
                        () => () => {
                            t.reset();
                        },
                        [t],
                    ),
                    e.account.data.uid && t.isNeededToLoad && (0, a.use)(t.getData({ userId: e.account.data.uid, page: 0, pageSize: 20 }));
                let T = t.isShimmerVisible ? 20 : t.items.length;
                return (0, l.jsx)(p.n, {
                    pageId: m._Q.OWN_PLAYLISTS,
                    children: (0, l.jsx)(u.h, {
                        scrollElement: N,
                        outerTitle: r({ id: 'entity-names.my-playlists' }),
                        children: (0, l.jsxs)('div', {
                            className: L().root,
                            'data-test-id': c.Xk.collection.COLLECTION_PLAYLISTS_CREATED_PAGE,
                            children: [
                                (0, l.jsx)(k.Y, {
                                    variant: k.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: P.canBack,
                                    children: (0, l.jsx)(d.DZ, {
                                        id: 'collection-playlistsCreated-header',
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, l.jsx)(n.A, { id: 'entity-names.my-playlists' }),
                                    }),
                                }),
                                (0, l.jsx)(A.$, {
                                    className: (0, s.$)(L().scrollContainer, L().important),
                                    customComponents: E,
                                    itemContentCallback: (e) => {
                                        let i = t.items[e],
                                            s = r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.playlist' }) });
                                        return i ? (0, l.jsx)(_.B, { playlist: i, contentLinesCount: 3 }, i.key) : (0, l.jsx)(S.V, { 'aria-label': s });
                                    },
                                    totalCount: T,
                                    onGetDataByPage: R,
                                    pageSize: 20,
                                    totalRequests: t.requestsCount,
                                    listClassName: L().content,
                                    itemClassName: L().item,
                                    handleRef: j,
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
            i.d(t, { L: () => p });
            var l = i(32290),
                s = i(63618),
                r = i(55178),
                a = i(60900),
                o = i(39407),
                n = i(63423),
                c = i(82586),
                d = i(71926),
                u = i(58534),
                _ = i(70718),
                m = i.n(_);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    _ = (0, r.useRef)(null),
                    { formatMessage: p } = (0, a.A)();
                (0, r.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let h = (0, r.useMemo)(
                    () =>
                        (0, l.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, l.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, l.jsx)(o.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, l.jsx)(n.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, l.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, l.jsx)(u.$, { className: (0, s.$)(m().root, m().important), message: h, closeToast: i });
            };
        },
        73141: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var l = i(32290),
                s = i(92708),
                r = i(55178),
                a = i(60900),
                o = i(63380),
                n = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                _ = i(97647),
                m = i(97755);
            let p = (e) => {
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
                h = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [_, m] = (0, r.useState)(!1),
                        { formatMessage: h } = (0, a.A)();
                    return (0, r.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, l.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (_) return;
                        let r = { ...(0, s.HO)(e), url: e.url, isLiked: !e.isLiked };
                        m(!0);
                        let a = await e.toggleLike();
                        m(!1),
                            a === o.f.OK
                                ? i((0, l.jsx)(p, { playlist: r }), { containerId: n.u.INFO })
                                : i((0, l.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR });
                    }, [t.isAuthorized, _, e, h, i]);
                };
        },
        73192: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => p });
            var l = i(32290),
                s = i(92708),
                r = i(55178),
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
                p = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, n.l)(),
                        { formatMessage: u } = (0, a.A)(),
                        [_, p] = (0, r.useState)(!1);
                    return (0, r.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, l.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let r = { ...(0, s.HO)(e), url: e.url, isPinned: !e.isPinned };
                        p(!0);
                        let a = await e.togglePin();
                        p(!1),
                            a
                                ? i((0, l.jsx)(m, { playlist: r }), { containerId: o.u.INFO })
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
            i.d(t, { V: () => y });
            var l = i(32290),
                s = i(63618),
                r = i(96103),
                a = i(55178),
                o = i(16172),
                n = i(21732),
                c = i(91027),
                d = i(50162),
                u = i(19740),
                _ = i(86269),
                m = i(71926),
                p = i(47745),
                h = i(84062),
                x = i(57594),
                v = i(16510),
                C = i.n(v);
            let y = (0, r.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: r } = (0, x.g)(),
                    v = (0, h.Z)(t.url),
                    g = (0, p.N)(),
                    f = (0, a.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, l.jsx)(y, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    k = (0, c.c)((e) => {
                        r.modal.isOpened && r.modal.close(), g({ to: o.QT.ArtistScreen }), v(e);
                    });
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)(u.Dr, {
                            className: (0, s.$)(C().root, i),
                            onClick: k,
                            'data-test-id': n.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, l.jsx)(_.t, {
                                    radius: 'round',
                                    className: C().cover,
                                    children: (0, l.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: C().image }),
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
            i.d(t, { B: () => Z });
            var l = i(32290),
                s = i(63618),
                r = i(96103),
                a = i(55178),
                o = i(60900),
                n = i(16172),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                _ = i(6752),
                m = i(14934),
                p = i(82586),
                pulseSyncPlaylistDownloadIcons = i(82586),
                h = i(86269),
                x = i(71926),
                v = i(41677),
                C = i(73141),
                y = i(73192),
                g = i(71735),
                f = i(47745),
                k = i(2969),
                S = i(54391),
                A = i(23352),
                N = i(72396),
                L = i(5537),
                j = i(84062),
                P = i(28999),
                E = i(90169),
                R = i(57594),
                T = i(61376),
                b = i(11323),
                I = i(92744),
                O = i(61258),
                w = i(10180),
                z = i(90326),
                M = i(29268),
                D = i(34925),
                F = i(13931),
                H = i(19740),
                B = i(9017),
                Y = i(65477),
                K = i(46200),
                V = i(27120),
                U = i(95134),
                $ = i(79406),
                W = i(58237),
                X = i(56367),
                q = i(83755);
            let G = (0, r.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: s, open: r, ...a } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, K.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: p },
                        trailer: h,
                        user: x,
                    } = (0, R.g)(),
                    v = (0, C.K)(i),
                    f = (0, y.A)(i),
                    k = (0, S.F)(),
                    { formatMessage: A } = (0, o.A)(),
                    N = (0, g.P)(),
                    L = m.checkExperiment($.z.WebEditorsFeatures, 'on'),
                    j = (0, B.A)({ entityVariant: U.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, V.N)(r);
                let P = (0, u.c)(() => {
                    if (d) return void _();
                    N() || (h.openPlaylistTrailer(i.id), k(n.ky.Playlist, i.id));
                });
                return (0, l.jsxs)(H.W1, {
                    title: i.title,
                    onOpenChange: s,
                    open: r,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: A({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU },
                    ...a,
                    children: [
                        L && (0, l.jsx)(Y.d, { entityVariant: U.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : j }),
                        !p && (0, l.jsx)(X.L, { onClick: f, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, l.jsx)(W.T, { onClick: v, isLiked: i.isLiked, disabled: !x.isAuthorized }),
                        (i.tracksCount ?? 1) > 0 &&
                            (0, l.jsx)(H.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, l.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, l.jsx)(q.N, { onClick: P, disabled: !i.isAvailable }),
                    ],
                });
            });
            var J = i(11675),
                Q = i.n(J);
            let Z = (0, r.PA)((e) => {
                let { className: t, playlist: i, children: r, contentLinesCount: H, customDescription: B } = e,
                    { ref: Y, intersectionPropertyId: K } = (0, A.n)(),
                    {
                        trailer: V,
                        user: U,
                        paywall: { modal: $ },
                    } = (0, R.g)(),
                    { from: W, utmLink: X } = (0, N.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: q } = (0, o.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: Z, sendPlaySearchFeedback: ee } = (0, P.z)(),
                    [et, ei] = (0, a.useState)(!1),
                    [el, es] = (0, a.useState)(!1),
                    [er, ea] = (0, a.useState)(!1),
                    eo = (0, F.r)(i),
                    en = (0, C.K)(i),
                    ec = (0, y.A)(i),
                    ed = (0, f.N)(),
                    eu = (0, k.b)(),
                    e_ = (0, j.Z)(i.url),
                    em = (0, S.F)(),
                    ep = (0, g.P)(),
                    eh = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        V.setUtmLink(X), V.openPlaylistTrailer(i.id), em(n.ky.Playlist, i.id);
                    }),
                    [ex, ev] = (0, a.useState)(!1),
                    { isPlaying: eC, togglePlay: ey } = (0, E.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: W, utmLink: X }, loadContextMeta: !0 },
                    }),
                    eg = (0, u.c)(() => {
                        ed({ to: n.QT.PlaylistScreen }), null == Z || Z();
                    }),
                    ef = (0, u.c)((e) => {
                        eg(), e_(e);
                    }),
                    ek = (0, L.N)(),
                    eS = (0, u.c)(() => {
                        if (!ep()) {
                            if (ek) return void $.open();
                            et || eC || (ei(!0), null == ee || ee()), ey(), eu(!eC);
                        }
                    }),
                    eA = (0, u.c)(() => {
                        el || i.isLiked || (es(!0), null == J || J()), en();
                    }),
                    eN = (0, u.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    eL = (0, u.c)((e) => {
                        ea(e), ev(e);
                    }),
                    ej = (0, a.useMemo)(() => {
                        var e;
                        return B
                            ? (0, l.jsx)(x.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: B }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, l.jsx)(
                                    v.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [B, i]),
                    eP = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, l.jsx)(
                                I.c,
                                {
                                    className: (0, s.$)(Q().likeButton, Q().control),
                                    isLiked: i.isLiked,
                                    onClick: eA,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !U.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eE = (0, a.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, l.jsx)(
                                D.n,
                                {
                                    children: (0, l.jsx)(
                                        M.k,
                                        { className: (0, s.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eh },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eh, i]),
                    eR = (0, a.useMemo)(
                        () =>
                            (0, l.jsx)(
                                w.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, s.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    eT = (0, a.useMemo)(
                        () =>
                            (0, l.jsx)(h.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, l.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: ef,
                                    children: [
                                        (0, l.jsx)(b.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, l.jsx)(m.hg, {
                                            isVisible: er || ex,
                                            className: Q().controls,
                                            playControl: (0, l.jsx)(
                                                z.D,
                                                {
                                                    className: (0, s.$)(Q().playButton, Q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eS,
                                                    isPlaying: eC,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eP,
                                            menuControl: (0, l.jsx)(
                                                G,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eL,
                                                    open: er,
                                                    onClick: eN,
                                                    className: (0, s.$)(Q().menuButton, Q().control),
                                                    icon: (0, l.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eR,
                                            trailerControl: eE,
                                        }),
                                    ],
                                }),
                            }),
                        [ef, i, eo, er, ex, eS, eC, eP, eL, eN, eR, eE],
                    ),
                    eb = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, l.jsxs)(m.MN, {
                    ref: Y,
                    'aria-label': eo,
                    className: (0, s.$)(Q().root, t),
                    title: (0, l.jsx)(x.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, l.jsx)(O.N, { className: Q().titleLink, href: i.url, onClick: eg, children: i.title }),
                    }),
                    srTitle: (0, l.jsx)(O.N, { href: i.url, onClick: eg, children: i.title }),
                    'data-intersection-property-id': K,
                    contentLinesCount: H,
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
        89020: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => n });
            var l = i(32290),
                s = i(63618),
                r = i(79856),
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
                    radius: p = 'l',
                } = e;
                return (0, l.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(o().root, i),
                    children: [
                        m && (0, l.jsx)(r.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, l.jsx)(r.W, { isActive: t, className: (0, s.$)(o().cover, a, { [o().cover_round]: n, [o().cover_withSubcover]: m }), radius: p }),
                        u &&
                            (0, l.jsx)('div', {
                                className: (0, s.$)(o().infoContainer, o()['content_linesCount_'.concat(_)], { [o().infoContainer_centered]: d }),
                                children: (0, l.jsx)(r.W, { isActive: t, className: (0, s.$)(o().title, { [o().title_withSubcover]: m }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        94218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => _ });
            var l = i(32290),
                s = i(21916),
                r = i(39407),
                a = i(21732),
                o = i(91027),
                n = i(63423),
                c = i(71926),
                d = i(70204),
                u = i(34186);
            let _ = (e) => {
                let { size: t = 'm', variant: i = 'default', withRipple: _ = !0, buttonText: m, isBlock: p, key: h, className: x } = e,
                    v = (0, s.useRouter)(),
                    C = (0, u.N)().get(d.QG),
                    y = (0, o.c)(() => {
                        C.authorizationUrl && v.push(C.authorizationUrl);
                    });
                return (0, l.jsx)(
                    n.$,
                    {
                        onClick: y,
                        className: x,
                        isBlock: p,
                        color: 'primary',
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': a.S7.UNAUTHORIZED_BUTTON,
                        children: m || (0, l.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, l.jsx)(r.A, { id: 'authorization.enter-button' }) }),
                    },
                    h,
                );
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                5718, 7034, 7231, 6347, 3183, 9763, 6639, 7258, 2225, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6477, 7275, 2586, 8347, 7702, 6874,
                861, 782, 4668, 9740, 1175, 14, 8816, 4220, 9562, 7358,
            ],
            () => e((e.s = 23254)),
        ),
            (_N_E = e.O());
    },
]);
