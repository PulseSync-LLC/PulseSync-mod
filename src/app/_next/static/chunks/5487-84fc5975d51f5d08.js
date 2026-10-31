(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5487],
    {
        1344: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => l });
            let i = [
                    { queryKey: 'utm_campaign', resultKey: 'utmCampaign' },
                    { queryKey: 'utm_medium', resultKey: 'utmMedium' },
                    { queryKey: 'utm_source', resultKey: 'utmSource' },
                    { queryKey: 'utm_term', resultKey: 'utmTerm' },
                    { queryKey: 'yclid', resultKey: 'yclid' },
                ],
                l = (e) =>
                    i.reduce((t, a) => {
                        let { queryKey: i, resultKey: l } = a;
                        return ('string' == typeof e[i] && (t[l] = e[i]), t);
                    }, {});
        },
        3259: (e) => {
            e.exports = {
                root: 'SlideCard_root__RSnvj',
                background: 'SlideCard_background__dftlE',
                logoContainer: 'SlideCard_logoContainer__1XaMN',
                logo: 'SlideCard_logo__ocv3o',
                buttonsContainer: 'SlideCard_buttonsContainer__ynOyN',
                wideContent: 'SlideCard_wideContent__TSSJ9',
                playAnimation: 'SlideCard_playAnimation__rFZZ3',
                fade: 'SlideCard_fade__2HpC6',
                content: 'SlideCard_content__7Y6aU',
                content_align_top: 'SlideCard_content_align_top__fDfyz',
                content_align_center: 'SlideCard_content_align_center__QFnxv',
                content_align_bottom: 'SlideCard_content_align_bottom__nsslT',
                button: 'SlideCard_button__EYX_G',
            };
        },
        4370: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => l });
            var i = a(67174);
            let l = {
                main: (0, i.u)('/'),
                chart: (0, i.u)('/chart'),
                chartPodcasts: (0, i.u)('/chart/podcasts'),
                collection: (0, i.u)('/collection'),
                collectionAlbums: (0, i.u)('/collection/albums'),
                collectionArtists: (0, i.u)('/collection/artists'),
                collectionClips: (0, i.u)('/collection/clips'),
                collectionDislikes: (0, i.u)('/collection/dislikes'),
                collectionKids: (0, i.u)('/collection/kids'),
                collectionKidsAlbums: (0, i.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, i.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, i.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, i.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, i.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, i.u)('/collection/multivibes'),
                collectionPlaylists: (0, i.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, i.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, i.u)('/collection/playlists/liked'),
                collectionShelf: (0, i.u)('/collection/shelf'),
                collectionShelfLiked: (0, i.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, i.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, i.u)('/collection/shelf/recently-played'),
                concerts: (0, i.u)('/concerts'),
                kids: (0, i.u)('/kids'),
                mixes: (0, i.u)('/mixes'),
                musicHistory: (0, i.u)('/music-history'),
                muzmarket: (0, i.u)('/muzmarket'),
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                multivibe: (0, i.u)('/multivibe'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        4476: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => o });
            var i = a(88800),
                l = a(53548),
                s = a(54020),
                r = a(8840),
                n = a(80566);
            let o = (e) => {
                let { children: t } = e,
                    a = (0, l.useRef)({}),
                    o = (0, l.useRef)(
                        (0, r.Gv)(
                            (e) => {
                                let t = (0, r.L5)(e.target),
                                    i = a.current[t];
                                if (i) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, s.A)());
                                            (i.callback(!0, e), (i.showed = !0), (i.viewUuid = e));
                                        }, 1e3);
                                        i.timerId = e;
                                    }
                                    (!e.isIntersecting && i.showed && (i.callback(!1, i.viewUuid), (i.showed = !1), (i.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(i.timerId));
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    d = (0, l.useCallback)((e) => {
                        var t;
                        !a.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = o.current) || t.observe(e.elementRef.current), (a.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    c = (0, l.useCallback)((e) => {
                        let t = a.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete a.current[e]);
                    }, []);
                (0, l.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = o.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, l.useMemo)(() => ({ observeElement: d, unobserveElement: c }), [d, c]);
                return (0, i.jsx)(n.B.Provider, { value: u, children: t });
            };
        },
        5295: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => l });
            var i = a(54683);
            let l = (e, t, a) => {
                let l = null != t ? t : i.wT,
                    s = null != a ? a : i.by,
                    r = (0, i.de)((0, i.aq)(e), l, s),
                    n = Math.round(255 * r[0]),
                    o = Math.round(255 * r[1]),
                    d = Math.round(255 * r[2]);
                return 'rgb('.concat(n, ', ').concat(o, ', ').concat(d, ')');
            };
        },
        6158: (e) => {
            e.exports = {
                root: 'TextContent_root__A4Qmc',
                subtitle: 'TextContent_subtitle__Xe_FH',
                text: 'TextContent_text__xsfVD',
                disclaimer: 'TextContent_disclaimer__LIrZ_',
            };
        },
        7628: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => m });
            var i = a(88800),
                l = a(88969),
                s = a(58390),
                r = a(17392),
                n = a(29993),
                o = a(96817),
                d = a(29504),
                c = a(99890),
                u = a(4086),
                _ = a(41928);
            let m = (e) => {
                let { size: t = 'm', variant: a = 'default', color: m = 'primary', withRipple: v = !0, buttonText: x, isBlock: p, key: h, className: C } = e,
                    T = (0, s.useRouter)(),
                    I = (0, _.N)().get(u.QG),
                    S = (0, n.c)(() => {
                        I.authorizationUrl && ((0, c.uV)({ stage: 'attempt-start', trigger: 'user' }), T.push(I.authorizationUrl));
                    });
                return (0, i.jsx)(
                    o.$,
                    {
                        onClick: S,
                        className: C,
                        isBlock: p,
                        color: m,
                        variant: a,
                        size: t,
                        radius: 'xxxl',
                        withRipple: v,
                        'data-test-id': r.S7.UNAUTHORIZED_BUTTON,
                        children: x || (0, i.jsx)(d.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    h,
                );
            };
        },
        8655: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => i });
            var i = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        9326: (e) => {
            e.exports = {
                root: 'ThenNowComparison_root__sAUJF',
                row: 'ThenNowComparison_row__1osE7',
                textPrimary: 'ThenNowComparison_textPrimary__mXrAG',
                textSecondary: 'ThenNowComparison_textSecondary__O5HTV',
                cover: 'ThenNowComparison_cover___UkLn',
                itemLabel: 'ThenNowComparison_itemLabel__L_vTN',
                itemMeta: 'ThenNowComparison_itemMeta__TqbEJ',
                header: 'ThenNowComparison_header__tWhL1',
            };
        },
        9630: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => l, e: () => s });
            var i = a(53548);
            let l = (0, i.createContext)(null);
            function s() {
                return (0, i.useContext)(l);
            }
        },
        10712: (e, t, a) => {
            'use strict';
            a.d(t, { SlidesPage: () => aR });
            var i,
                l,
                s,
                r,
                n,
                o,
                d,
                c,
                u,
                _ = a(88800),
                m = a(65724),
                v = a(84961),
                x = a(53548),
                p = a(2058),
                h = a(88969),
                C = a(58390),
                T = a(35412),
                I = a(92716),
                S = a(17392),
                g = a(64150),
                A = a(29993),
                E = a(96817),
                N = a(52300),
                L = a(73170),
                f = a(29504),
                b = a(7123),
                y = a(61758),
                R = a(44361),
                j = a(78275),
                O = a(28163),
                k = a(82204),
                w = a(77948),
                P = a(72288),
                B = a(42737),
                M = a.n(B);
            let D = (e) => {
                let { isFirstSlide: t, isLastSlide: a, style: i } = e,
                    l = (0, R.Mn)(),
                    { formatMessage: s } = (0, p.A)(),
                    r = (0, x.useCallback)(() => {
                        l.slidePrev();
                    }, [l]),
                    n = (0, x.useCallback)(() => {
                        l.slideNext();
                    }, [l]);
                return (0, _.jsxs)('div', {
                    className: M().root,
                    style: i,
                    children: [
                        (0, _.jsx)(E.$, {
                            variant: 'outline',
                            iconClassName: M().top,
                            size: 'm',
                            radius: 'round',
                            onClick: r,
                            disabled: t,
                            icon: (0, _.jsx)(N.I, { variant: 'arrowDown', size: 'xxs' }, 'prevIcon'),
                            withRipple: !1,
                            'aria-label': s({ id: 'slider.prev-slide' }),
                            className: M().control,
                            'data-test-id': S.e8.slider.SLIDES_SLIDER_PREV_BUTTON,
                        }),
                        (0, _.jsx)(E.$, {
                            variant: 'outline',
                            size: 'm',
                            radius: 'round',
                            onClick: n,
                            disabled: a,
                            icon: (0, _.jsx)(N.I, { variant: 'arrowDown', size: 'xxs' }, 'nextIcon'),
                            withRipple: !1,
                            'aria-label': s({ id: 'slider.next-slide' }),
                            className: M().control,
                            'data-test-id': S.e8.slider.SLIDES_SLIDER_NEXT_BUTTON,
                        }),
                    ],
                });
            };
            var U = a(18593),
                z = a(59758),
                H = a(7555);
            !(function (e) {
                ((e.TOP = 'TOP'), (e.CENTER = 'CENTER'), (e.BOTTOM = 'BOTTOM'));
            })(i || (i = {}));
            var F = a(18684),
                V = a(90688),
                G = a(5295),
                K = a(41731),
                $ = a(35948),
                X = a(20585),
                Y = a(9630),
                Z = a(32041),
                q = a.n(Z);
            let Q = (0, v.PA)((e) => {
                    let {
                            className: t,
                            children: a,
                            background: {
                                animationDelay: i,
                                withPersonalColor: l,
                                videoUrl: s,
                                firstFrameVideoUrl: r,
                                lastFrameVideoUrl: n,
                                bgImageUrl: o,
                                withSound: d,
                                videoLoopEnabled: c,
                            },
                            isActive: u,
                            isContentVisible: v,
                            setContentVisible: p,
                            setContentInvisible: h,
                            shareBackground: C,
                            'data-test-id': I,
                        } = e,
                        {
                            user: g,
                            slides: { isMuted: A },
                        } = (0, P.g)(),
                        { isVisible: E } = (0, K.d)(),
                        N = (0, x.useRef)(null),
                        [L, f] = (0, x.useState)(o),
                        [y, R] = (0, x.useState)(null),
                        j = (0, x.useRef)(null),
                        O = (0, Y.e)();
                    (0, x.useEffect)(() => {
                        if (s || !o || (0, $.y)()) {
                            (f(o), R(null), (j.current = null));
                            return;
                        }
                        if (o === L) {
                            j.current && j.current !== L && (R(null), (j.current = null));
                            return;
                        }
                        (R(o), (j.current = o));
                    }, [o, L, s]);
                    let k = (0, x.useCallback)(() => {
                            let e = j.current;
                            e && e === y && (f(e), R(null), (j.current = null));
                        }, [y]),
                        w = (null == O ? void 0 : O.getState(X.V.TRAILER).playerState.status.value) === b.MT.PLAYING && d,
                        B = (0, x.useCallback)(() => setTimeout(p, 1e3 * i), [i, p]);
                    ((0, x.useEffect)(() => {
                        !u && v && h();
                    }, [u, v, h]),
                        (0, x.useEffect)(() => {
                            var e, t, a;
                            u && !E
                                ? ((null == (e = N.current) ? void 0 : e.readyState) !== 4 && B(),
                                  null == (t = N.current) ||
                                      t
                                          .play()
                                          .then(() => {
                                              (B(), w && (null == O || O.pause(X.V.TRAILER)));
                                          })
                                          .catch(B))
                                : N.current && ((N.current.currentTime = 0), null == (a = N.current) || a.pause());
                        }, [B, u, E, p, w, O]));
                    let M = (0, x.useMemo)(() => {
                            if (l && g.collectionHue) return { '--user-background-color': (0, G.e)(g.collectionHue, 1, 0.5) };
                        }, [l, g.collectionHue]),
                        D = s && r && !l,
                        U = !s && L,
                        z = !!n || void 0;
                    return (0, _.jsxs)('div', {
                        className: (0, m.$)(q().root, t),
                        style: M,
                        'data-test-id': I,
                        children: [
                            U &&
                                (0, _.jsx)(
                                    V._V,
                                    {
                                        src: (0, T.lU)(L, 800, !0),
                                        className: q().firstFrame,
                                        'data-screenshot-hidden': z,
                                        'data-test-id': S.OA.slides.SLIDE_BACKGROUND_IMAGE,
                                    },
                                    L,
                                ),
                            !s &&
                                y &&
                                (0, _.jsx)(
                                    V._V,
                                    {
                                        src: (0, T.lU)(y, 800, !0),
                                        className: (0, m.$)(q().firstFrame, q().backgroundFadeIn),
                                        onAnimationEnd: k,
                                        'data-screenshot-hidden': z,
                                    },
                                    y,
                                ),
                            D && (0, _.jsx)(V._V, { src: (0, T.lU)(r, 800, !0), className: q().firstFrame }),
                            s &&
                                (0, _.jsx)('video', {
                                    className: (0, m.$)(q().media, { [q().media_withPersonalColor]: l }),
                                    'data-screenshot-hidden': !0,
                                    ref: N,
                                    src: s,
                                    poster: (0, T.lU)(o, 800, !0),
                                    playsInline: !0,
                                    muted: !d || A,
                                    loop: c,
                                }),
                            s && n && (0, _.jsx)(V._V, { 'data-screenshot-visible': !0, src: (0, T.lU)(n, 800, !0), className: (0, m.$)(q().lastFrame, q().hidden) }),
                            C && (0, _.jsx)(V._V, { 'data-screenshot-visible': !0, src: (0, T.lU)(C, 800, !0), className: q().shareBackground }),
                            !!a && a,
                        ],
                    });
                }),
                W = (0, x.memo)(Q);
            var J = a(6087),
                ee = a(75914),
                et = a(79070);
            !(function (e) {
                ((e.TRACK = 'TRACK'), (e.ARTIST = 'ARTIST'), (e.ALBUM = 'ALBUM'), (e.CLIP = 'CLIP'), (e.PLAYLIST = 'PLAYLIST'));
            })(l || (l = {}));
            let ea = new Set(Object.values(l)),
                ei = (e) => 'string' == typeof e && ea.has(e),
                el = (e, t, a) => {
                    if (!ei(t)) return !1;
                    switch (t) {
                        case l.TRACK:
                            return e.isTrackLiked(a);
                        case l.ARTIST:
                            return e.isArtistLiked(a);
                        case l.ALBUM:
                            return e.isAlbumLiked(a);
                        case l.CLIP:
                            return e.isClipLiked(a);
                        case l.PLAYLIST:
                            return e.isPlaylistLiked(a);
                    }
                };
            var es = a(96527),
                er = a(81877),
                en = a(91292),
                eo = a(89080),
                ed = a.n(eo);
            let ec = (e) => {
                var t;
                let { data: a, className: i, 'data-test-id': l } = e,
                    s = (0, es.N)(),
                    r = (0, A.c)(() => {
                        var e;
                        s({ deepLink: null != (e = a.url) ? e : '', to: I.AppScreen.Link });
                    });
                return (0, _.jsxs)(en.N, {
                    href: null != (t = a.url) ? t : void 0,
                    onClick: r,
                    className: (0, m.$)(ed().root, i),
                    'data-test-id': l,
                    children: [
                        (0, _.jsx)(H.t, {
                            radius: 'xs',
                            className: ed().cover,
                            children: a.imageUrl && (0, _.jsx)(er.B, { src: a.imageUrl, withAvatarReplace: !0, fit: 'contain', className: ed().image, size: 100 }),
                        }),
                        (0, _.jsx)(f.HL, { variant: 'span', type: 'controls', size: 'l', weight: 'medium', className: ed().text, lineClamp: 1, children: a.title }),
                        (0, _.jsx)(N.I, { variant: 'arrowRight', size: 'xs', className: ed().icon }),
                    ],
                });
            };
            var eu = a(26128),
                e_ = a.n(eu),
                em = a(79390),
                ev = a(29595),
                ex = a(74965),
                ep = a(66943),
                eh = a(97462),
                eC = a.n(eh);
            let eT = (0, v.PA)((e) => {
                let { data: t, className: a, 'data-test-id': i } = e,
                    s = ((e) => {
                        let { library: t } = (0, P.g)();
                        return el(t, e.entityType, e.entityId);
                    })(t),
                    r = s ? t.liked : t.unliked,
                    n = ((e) => {
                        let { data: t, isLiked: a } = e,
                            { library: i, user: s } = (0, P.g)(),
                            { notify: r } = (0, ex.l)(),
                            { formatMessage: n } = (0, p.A)(),
                            o = (0, F.m)(),
                            [d, c] = (0, x.useState)(!1);
                        return (0, A.c)(async () => {
                            let e;
                            if (!(a ? t.liked : t.unliked).enabled) return;
                            if (!s.isAuthorized)
                                return void r((0, _.jsx)(ep.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: ev.u.ERROR });
                            if (d || !ei(t.entityType)) return;
                            c(!0);
                            let u = s.account.data.uid,
                                m = { entityId: t.entityId, userId: u };
                            switch (t.entityType) {
                                case l.TRACK:
                                    e = await i.toggleTrackLike(m);
                                    break;
                                case l.ARTIST:
                                    e = await i.toggleArtistLike(m);
                                    break;
                                case l.ALBUM:
                                    e = await i.toggleAlbumLike(m);
                                    break;
                                case l.CLIP:
                                    e = await i.toggleClipLike(m);
                                    break;
                                case l.PLAYLIST: {
                                    let [a, l] = t.entityId.split(':');
                                    e = await i.togglePlaylistLike({ userId: u, entityId: t.entityId, ownerId: Number(a), kindId: Number(l) });
                                }
                            }
                            (c(!1),
                                e === em.f.OK
                                    ? o({
                                          actionType: a ? I.ActionType.Unlike : I.ActionType.Like,
                                          objectId: t.entityId,
                                          objectType: ((e) => {
                                              switch (e) {
                                                  case l.TRACK:
                                                      return I.DomainObjectType.Track;
                                                  case l.ARTIST:
                                                      return I.DomainObjectType.Artist;
                                                  case l.ALBUM:
                                                      return I.DomainObjectType.Album;
                                                  case l.CLIP:
                                                      return I.DomainObjectType.Video;
                                                  case l.PLAYLIST:
                                                      return I.DomainObjectType.Playlist;
                                              }
                                          })(t.entityType),
                                      })
                                    : e === em.f.ERROR && r((0, _.jsx)(ep.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: ev.u.ERROR }));
                        });
                    })({ data: t, isLiked: s }),
                    o = (0, et.L)(() => ({ '--text-color': r.textColor, '--button-color': r.buttonColor }));
                return (0, _.jsx)(E.$, {
                    style: o,
                    className: (0, m.$)(e_().root, eC().root, a),
                    size: 'default',
                    radius: 'xxxl',
                    color: 'primary',
                    withHover: !1,
                    withRipple: !1,
                    disabled: !r.enabled,
                    onClick: n,
                    'data-test-id': i,
                    children: (0, _.jsx)(f.HL, { variant: 'span', type: 'controls', size: 'l', weight: 'medium', lineClamp: 1, children: r.title }),
                });
            });
            var eI = a(78940);
            let eS = (e) => {
                var t;
                let { data: a, className: i, handleClick: l, 'data-test-id': s } = e,
                    r = (0, eI.Z)(null != (t = a.url) ? t : ''),
                    n = (0, es.N)(),
                    o = (0, x.useMemo)(() => ({ '--text-color': a.textColor, '--button-color': a.buttonColor }), [a.buttonColor, a.textColor]),
                    d = (0, A.c)(() => {
                        var e;
                        if (l) return l();
                        (n({ deepLink: null != (e = a.url) ? e : '', to: I.AppScreen.Link }), r());
                    });
                return (0, _.jsx)(E.$, {
                    role: 'link',
                    style: o,
                    className: (0, m.$)(e_().root, i),
                    size: 'default',
                    radius: 'xxxl',
                    color: 'primary',
                    withHover: !1,
                    withRipple: !1,
                    onClick: d,
                    'data-test-id': s,
                    children: (0, _.jsx)(f.HL, { variant: 'span', type: 'controls', size: 'l', weight: 'medium', lineClamp: 1, children: a.title }),
                });
            };
            var eg = a(25921),
                eA = a.n(eg);
            let eE = J.default.default(
                    () =>
                        Promise.all([a.e(8823), a.e(9934), a.e(3830)])
                            .then(a.bind(a, 63830))
                            .then((e) => e.ShareButton),
                    { ssr: !1 },
                ),
                eN = (e) => {
                    let { button: t, buttonClassName: a, cardRef: i } = e,
                        l = (0, m.$)(a, eA().contractButton);
                    switch (t.type) {
                        case ee.m.ACTION:
                            if (t.data.url) return (0, _.jsx)(ec, { data: t.data, className: l, 'data-test-id': S.OA.slides.SLIDE_ACTION_BUTTON });
                            return null;
                        case ee.m.SIMPLE:
                            if (t.data.url) return (0, _.jsx)(eS, { data: t.data, className: l, 'data-test-id': S.OA.slides.SLIDE_SIMPLE_BUTTON });
                            return null;
                        case ee.m.SHARE:
                            return (0, _.jsx)(eE, { data: t.data, wrapperClassName: l, cardRef: i, 'data-test-id': S.OA.slides.SLIDE_SHARE_BUTTON });
                        case ee.m.LIKE:
                            return (0, _.jsx)(eT, { data: t.data, className: l, 'data-test-id': S.OA.slides.SLIDE_LIKE_BUTTON });
                        default:
                            return null;
                    }
                },
                eL = (0, v.PA)((e) => {
                    var t, a;
                    let { slide: i, className: l, cardRef: s, hasLeft: r = !0, hasRight: n = !0, onSaveChoice: o, onEditChoice: d, onSlidePrev: c, onSlideNext: u } = e,
                        { button: v } = i,
                        {
                            library: h,
                            slides: { savedChoice: C },
                        } = (0, P.g)(),
                        T = null != (a = null == C ? void 0 : C.isSaved) && a,
                        { formatMessage: I } = (0, p.A)(),
                        A = (0, x.useMemo)(() => {
                            if ((null == v ? void 0 : v.type) === ee.m.SHARE || (null == v ? void 0 : v.type) === ee.m.SIMPLE)
                                return { textColor: v.data.textColor, buttonColor: v.data.buttonColor };
                            if ((null == v ? void 0 : v.type) === ee.m.LIKE) {
                                let e = el(h, v.data.entityType, v.data.entityId) ? v.data.liked : v.data.unliked;
                                return { textColor: e.textColor, buttonColor: e.buttonColor };
                            }
                            return { textColor: null, buttonColor: null };
                        }, [v, h]),
                        L = (0, x.useMemo)(() => ({ '--text-color': A.textColor, '--button-color': A.buttonColor }), [A]),
                        f = (0, et.L)(() => v && (0, _.jsx)(eN, { button: v, buttonClassName: l, cardRef: s })),
                        b = (0, et.L)(() =>
                            i.savedChoiceKey && (r || n)
                                ? (0, _.jsx)(eS, { data: { title: I({ id: 'rewind.save-choice' }), url: null, ...A }, handleClick: o, className: l })
                                : f,
                        ),
                        y = null == (t = i.content) ? void 0 : t.type;
                    return y !== g.x.CAROUSEL && y !== g.x.COLLAGE && y !== g.x.LINEUP
                        ? f
                        : T
                          ? (0, _.jsxs)('div', {
                                className: eA().buttonsContainer,
                                children: [
                                    v && (0, _.jsx)(eN, { button: v, buttonClassName: l, cardRef: s }),
                                    (0, _.jsx)(E.$, {
                                        color: 'primary',
                                        className: (0, m.$)(eA().iconButton, e_().root, eA().editButton),
                                        icon: (0, _.jsx)(N.I, { variant: 'pencil', size: 'xxs' }),
                                        radius: 'round',
                                        role: 'link',
                                        size: 'default',
                                        withHover: !0,
                                        withRipple: !0,
                                        style: L,
                                        onClick: d,
                                    }),
                                ],
                            })
                          : (0, _.jsxs)('div', {
                                className: eA().buttonsContainer,
                                children: [
                                    r &&
                                        (0, _.jsx)(E.$, {
                                            color: 'primary',
                                            className: (0, m.$)(eA().iconButton, e_().root, eA().arrowLeftButton),
                                            icon: (0, _.jsx)(N.I, { variant: 'arrowLeft', size: 'xxs' }),
                                            radius: 'round',
                                            role: 'link',
                                            size: 'default',
                                            withHover: !0,
                                            withRipple: !0,
                                            style: L,
                                            onClick: c,
                                            'data-test-id': S.OA.slides.SLIDE_CAROUSEL_PREV_BUTTON,
                                        }),
                                    (0, _.jsx)('div', { className: eA().mainButtonContainer, children: b }),
                                    n &&
                                        (0, _.jsx)(E.$, {
                                            color: 'primary',
                                            className: (0, m.$)(eA().iconButton, e_().root, eA().arrowRightButton),
                                            icon: (0, _.jsx)(N.I, { variant: 'arrowRight', size: 'xxs' }),
                                            radius: 'round',
                                            role: 'link',
                                            size: 'default',
                                            withHover: !0,
                                            withRipple: !0,
                                            style: L,
                                            onClick: u,
                                            'data-test-id': S.OA.slides.SLIDE_CAROUSEL_NEXT_BUTTON,
                                        }),
                                ],
                            });
                });
            var ef = a(29885);
            let eb = { 6: 84, 7: 84, 8: 68, 9: 68, 10: 56, 11: 56, 12: 48, 13: 48 };
            var ey = a(65568),
                eR = a.n(ey);
            let ej = (e) => {
                let { caption: t, className: a, lineClamp: i = 2, 'data-test-id': l } = e;
                return (0, _.jsx)(f.HL, {
                    variant: 'span',
                    type: 'text',
                    size: 'l',
                    weight: 'medium',
                    className: (0, m.$)(eR().root, a),
                    lineClamp: i,
                    'data-test-id': l,
                    children: t,
                });
            };
            var eO = a(89246),
                ek = a.n(eO);
            let ew = (e) => {
                let {
                        data: t,
                        className: a,
                        valueClassName: i,
                        valueContainerClassName: l,
                        withAutoResize: s,
                        descriptionLineClamp: r,
                        withOpacity: n,
                        lineClamp: o = 3,
                    } = e,
                    d = (0, x.useRef)(null),
                    { formatNumber: c } = (0, p.A)(),
                    u = (0, x.useCallback)((e) => (e >= 1e4 ? c(e) : String(e)), [c]);
                (0, x.useEffect)(() => {
                    if (d.current) {
                        if (null === t.value) return;
                        let e = new ef.T(d.current, Number(t.value), { startVal: 1, formattingFn: u });
                        e.error || e.start();
                    }
                }, [t.value, u]);
                let v = (0, x.useMemo)(() => {
                        if (s && t.value)
                            return {
                                fontSize: ((e) => {
                                    let t = String(e).length;
                                    return t > 13
                                        ? 'clamp('.concat(18, 'px, ').concat(11, 'cqi, ').concat(54, 'px)')
                                        : t <= 5
                                          ? 'clamp('.concat(18, 'px, ').concat(26, 'cqi, ').concat(100, 'px)')
                                          : 'clamp('
                                                .concat(18, 'px, ')
                                                .concat(26 - t, 'cqi, ')
                                                .concat(eb[t], 'px)');
                                })(t.value),
                            };
                    }, [t.value, s]),
                    h = (0, x.useMemo)(() => {
                        if (null !== t.value) return u(t.value);
                    }, [t.value, u]);
                return (0, _.jsxs)(_.Fragment, {
                    children: [
                        (0, _.jsxs)(L.q, { children: [t.value, ' ', t.valueSuffix, ' ', t.valueDescription] }),
                        (0, _.jsxs)('div', {
                            className: (0, m.$)(ek().root, { [ek().root_withOpacity]: n }, a),
                            'aria-hidden': !0,
                            'data-test-id': S.OA.slides.STAT_ITEM,
                            children: [
                                (0, _.jsxs)('div', {
                                    className: (0, m.$)(ek().valueContainer, l),
                                    children: [
                                        (0, _.jsx)(f.DZ, {
                                            variant: 'div',
                                            size: 'xxxxl',
                                            tabIndex: -1,
                                            ref: d,
                                            'aria-hidden': !0,
                                            className: (0, m.$)(ek().value, i),
                                            style: v,
                                            'data-test-id': S.OA.slides.STAT_VALUE,
                                            'data-screenshot-value': h,
                                        }),
                                        t.valueSuffix &&
                                            (0, _.jsx)(f.DZ, {
                                                variant: 'div',
                                                size: 'xxxxl',
                                                className: ek().value,
                                                style: v,
                                                'data-test-id': S.OA.slides.STAT_VALUE_SUFFIX,
                                                children: t.valueSuffix,
                                            }),
                                    ],
                                }),
                                (0, _.jsx)(f.DZ, {
                                    variant: 'div',
                                    size: 'xl',
                                    weight: 'black',
                                    className: ek().unit,
                                    lineClamp: r,
                                    'data-test-id': S.OA.slides.STAT_VALUE_DESCRIPTION,
                                    children: t.valueDescription,
                                }),
                                t.footer && (0, _.jsx)(ej, { caption: t.footer, className: ek().footer, lineClamp: o, 'data-test-id': S.OA.slides.STAT_FOOTER }),
                            ],
                        }),
                    ],
                });
            };
            var eP = a(43534),
                eB = a.n(eP);
            let eM = (e) => {
                let { data: t } = e,
                    a = (0, x.useMemo)(
                        () => ({ value: t.value, valueDescription: t.valueDescription, valueSuffix: t.valueSuffix, footer: t.footer, align: t.align }),
                        [t.footer, t.value, t.valueDescription, t.valueSuffix, t.align],
                    ),
                    i = (0, x.useMemo)(() => ({ '--covers-offset-translate': ''.concat((t.covers.length - 1) * 7.5, 'px') }), [t.covers]),
                    l = (0, x.useCallback)((e) => ({ '--cover-offset-translate': '-'.concat(15 * e, 'px') }), []);
                return (0, _.jsxs)('div', {
                    className: eB().root,
                    'data-test-id': S.OA.slides.ARTISTS_CONTENT,
                    children: [
                        (0, _.jsx)(ew, { data: a, withAutoResize: !0 }),
                        (0, _.jsx)('div', {
                            className: eB().covers,
                            style: i,
                            children: t.covers.map((e, t) => {
                                var a;
                                return (0, _.jsx)(
                                    H.t,
                                    {
                                        radius: 'round',
                                        className: eB().cover,
                                        style: l(t),
                                        children: (0, _.jsx)(er.B, {
                                            src: null != (a = e.uri) ? a : void 0,
                                            withAvatarReplace: !0,
                                            fit: 'contain',
                                            size: 100,
                                            className: eB().image,
                                        }),
                                    },
                                    e.uri,
                                );
                            }),
                        }),
                    ],
                });
            };
            var eD = a(82530),
                eU = a.n(eD);
            let ez = (e) => {
                    let {
                            forwardRef: t,
                            createUrlReplacer: a = T.lU,
                            className: i,
                            maskSrc: l,
                            style: s = {},
                            withAspectRatio: r = !1,
                            withAvatarReplace: n,
                            withMaskReplace: o = n,
                            ...d
                        } = e,
                        c = l ? 'url('.concat(o ? a(l, 'orig', r) : l, ')') : 'none';
                    return (0, _.jsx)(V._V, {
                        className: (0, m.$)(eU().root, i),
                        createUrlReplacer: a,
                        ref: t,
                        style: { ...s, maskImage: c },
                        withAspectRatio: r,
                        withAvatarReplace: n,
                        ...d,
                    });
                },
                eH = (0, x.forwardRef)((e, t) => (0, _.jsx)(ez, { forwardRef: t, ...e }));
            var eF = a(24546),
                eV = a.n(eF);
            let eG = (e) => {
                    let { backgroundSrc: t, className: a, forwardRef: i, maskSrc: l, size: s, src: r, withAvatarReplace: n, ...o } = e;
                    return (0, _.jsxs)('div', {
                        className: eV().root,
                        children: [
                            t && (0, _.jsx)(V._V, { className: eV().background, src: t, size: s, withAvatarReplace: n, ...o }),
                            (0, _.jsx)(eH, { className: a, maskSrc: l, ref: i, size: s, src: r, withAvatarReplace: n, ...o }),
                        ],
                    });
                },
                eK = (0, x.forwardRef)((e, t) => (0, _.jsx)(eG, { forwardRef: t, ...e }));
            var e$ = a(89988);
            a(21867);
            var eX = a(13876),
                eY = a.n(eX);
            let eZ = (0, v.PA)((e) => {
                let {
                        isDisabled: t,
                        initialIndex: a = 0,
                        slidesPerView: i = e$.bF,
                        disabledClassName: l,
                        slideActiveClassName: s,
                        slideClassName: r,
                        onSlideChange: n,
                        onCarouselReady: o,
                        className: d,
                        spaceBetween: c,
                        children: u,
                    } = e,
                    v = (0, x.useRef)(null);
                (0, x.useEffect)(() => {
                    var e, a;
                    t ? null == (e = v.current) || e.disable() : null == (a = v.current) || a.enable();
                }, [t]);
                let p = (0, x.useCallback)(
                        (e) => {
                            let { activeIndex: a } = e;
                            t || null == n || n(a);
                        },
                        [t, n],
                    ),
                    h = (0, x.useCallback)(
                        (e) => {
                            ((v.current = e), null == o || o({ slideNext: () => e.slideNext(), slidePrev: () => e.slidePrev() }));
                        },
                        [o],
                    );
                return (0, _.jsx)(R.RC, {
                    a11y: { enabled: !0 },
                    centeredSlides: !0,
                    className: (0, m.$)(eY().root, eY().swiper, d, { [null != l ? l : '']: t }),
                    initialSlide: a,
                    keyboard: !0,
                    modules: [y.Jq, y.s3, y.Vx, y.dK],
                    pagination: { dynamicBullets: !0, dynamicMainBullets: 3 },
                    slidesPerView: i,
                    spaceBetween: null != c ? c : e$.ur,
                    wrapperClass: eY().wrapper,
                    onActiveIndexChange: p,
                    onSwiper: h,
                    children: u.map((e, t) => {
                        var i, l;
                        return (0, _.jsx)(
                            R.qr,
                            {
                                className: (0, m.$)(eY().slide, r, {
                                    [null != s ? s : '']: t === (null != (l = null == (i = v.current) ? void 0 : i.activeIndex) ? l : a),
                                }),
                                children: e,
                            },
                            t,
                        );
                    }),
                });
            });
            var eq = a(96252),
                eQ = a.n(eq);
            let eW = (e) => {
                let { className: t, heading: a, lineClamp: i = 2, 'data-test-id': l } = e;
                return (0, _.jsx)(f.DZ, { variant: 'h3', size: 'xxl', weight: 'bold', className: (0, m.$)(eQ().root, t), lineClamp: i, 'data-test-id': l, children: a });
            };
            var eJ = a(97974),
                e0 = a.n(eJ);
            let e8 = (0, v.PA)((e) => {
                let { data: t, carouselIndex: a, onSlideChange: i, onCarouselReady: l } = e,
                    {
                        slides: { savedChoice: s },
                    } = (0, P.g)(),
                    { isSaved: r } = null != s ? s : { index: 0, isSaved: !1 },
                    [n, o] = (0, x.useState)(() => {
                        if (void 0 !== a) return t.items[a];
                    }),
                    d = (0, x.useCallback)(
                        (e) => {
                            let a = t.items[e];
                            a && (o(a), null == i || i(e, t.items.length));
                        },
                        [t.items, i],
                    );
                return t.items.length
                    ? (0, _.jsxs)('div', {
                          className: e0().root,
                          children: [
                              n && n.data.description && (0, _.jsx)(ej, { caption: n.data.description, className: e0().description, lineClamp: 3 }),
                              (0, _.jsx)(eZ, {
                                  isDisabled: r,
                                  initialIndex: a,
                                  slideClassName: e0().slide,
                                  slideActiveClassName: e0().slideActive,
                                  disabledClassName: e0().disabled,
                                  onCarouselReady: l,
                                  onSlideChange: d,
                                  children: t.items.map((e, t) => {
                                      var a, i;
                                      return (0, _.jsx)(
                                          H.t,
                                          {
                                              className: e0().cover,
                                              children:
                                                  e.data.cover.uri &&
                                                  (0, _.jsx)(eK, {
                                                      backgroundSrc: null != (a = e.data.coverBackground) ? a : '',
                                                      className: e0().image,
                                                      fit: 'contain',
                                                      maskSrc: null != (i = e.data.coverMask) ? i : '',
                                                      size: e$.e0,
                                                      src: e.data.cover.uri,
                                                      withAvatarReplace: !0,
                                                      withSrcSet: !1,
                                                  }),
                                          },
                                          t,
                                      );
                                  }),
                              }),
                              (0, _.jsxs)('div', {
                                  className: e0().meta,
                                  children: [
                                      (null == n ? void 0 : n.data.subtitle) && (0, _.jsx)(ej, { caption: n.data.subtitle, className: e0().subtitle }),
                                      (null == n ? void 0 : n.data.title) && (0, _.jsx)(eW, { className: e0().title, heading: n.data.title, lineClamp: 3 }),
                                  ],
                              }),
                          ],
                      })
                    : null;
            });
            !(function (e) {
                ((e.SQUARE = 'SQUARE'), (e.CIRCLE = 'CIRCLE'));
            })(s || (s = {}));
            var e1 = a(72863),
                e4 = a.n(e1),
                e5 = a(5120);
            !(function (e) {
                ((e.NUMBER = 'NUMBER'), (e.TEXT = 'TEXT'));
            })(r || (r = {}));
            var e2 = a(28523),
                e3 = a.n(e2);
            let e9 = (0, v.PA)((e) => {
                    var t;
                    let { data: a, index: i, variant: l, isOrderVisible: n, hasOnlyArtistItems: o } = e,
                        { formatNumber: d } = (0, p.A)(),
                        c = (0, x.useMemo)(
                            () => ({ '--slide-final-translate-offset': l === g.x.CHART && o ? ''.concat(-8 * i, 'px') : 0, animationDelay: ''.concat(0.5 * i, 's') }),
                            [i, o, l],
                        ),
                        u = (0, x.useMemo)(() => {
                            let e = Number(a.subtitle);
                            return a.subtitle && !isNaN(e) ? d(e) : a.subtitle;
                        }, [a.subtitle, d]),
                        v = (0, x.useMemo)(
                            () =>
                                a.titleType === r.NUMBER && 'number' == typeof a.value
                                    ? (0, _.jsx)(ew, {
                                          data: (0, e5.wg)({ value: a.value }),
                                          className: e3().stat,
                                          valueClassName: e3().statValue,
                                          valueContainerClassName: e3().statValueContainer,
                                      })
                                    : a.title
                                      ? l === g.x.CHART_ARTIST
                                          ? (0, _.jsx)(f.DZ, { variant: 'div', size: 's', weight: 'black', lineClamp: 2, className: e3().textVariant, children: a.title })
                                          : (0, _.jsx)(f.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                lineClamp: 2,
                                                className: e3().textVariant,
                                                'data-test-id': S.OA.slides.CHART_ITEM_TITLE,
                                                children: a.title,
                                            })
                                      : void 0,
                            [a.title, a.titleType, a.value, l],
                        ),
                        h = (0, x.useMemo)(() => {
                            if (u)
                                return (l === g.x.CHART && o) || l === g.x.CHART_FAVORITES
                                    ? (0, _.jsx)(f.DZ, {
                                          variant: 'div',
                                          size: 's',
                                          weight: 'black',
                                          lineClamp: 2,
                                          className: (0, m.$)(e3().textVariant, e3().subTitle),
                                          'data-test-id': S.OA.slides.CHART_ITEM_SUBTITLE,
                                          children: u,
                                      })
                                    : (0, _.jsx)(f.HL, {
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'medium',
                                          lineClamp: 2,
                                          className: (0, m.$)(e3().text, { [e3().textVariant]: l === g.x.CHART_ARTIST }),
                                          'data-test-id': S.OA.slides.CHART_ITEM_SUBTITLE,
                                          children: u,
                                      });
                        }, [u, o, l]);
                    return (0, _.jsxs)('li', {
                        className: e3().root,
                        style: c,
                        tabIndex: 0,
                        'data-test-id': S.OA.slides.CHART_ITEM,
                        children: [
                            n &&
                                (0, _.jsx)(f.DZ, {
                                    variant: 'div',
                                    size: 'l',
                                    weight: 'black',
                                    className: e3().order,
                                    'data-test-id': S.OA.slides.CHART_ITEM_POSITION,
                                    children: i + 1,
                                }),
                            (0, _.jsx)(H.t, {
                                radius: a.coverType === s.CIRCLE ? 'round' : 'xs',
                                className: e3().cover,
                                children:
                                    (null == (t = a.cover) ? void 0 : t.uri) &&
                                    (0, _.jsx)(er.B, { src: a.cover.uri, withAvatarReplace: !0, fit: 'contain', className: e3().image, size: 100 }),
                            }),
                            (0, _.jsxs)('div', { className: e3().meta, children: [v, h] }),
                        ],
                    });
                }),
                e7 = (e) => {
                    let { items: t, isOrderVisible: a, variant: i } = e,
                        l = (0, x.useMemo)(() => t.every((e) => e.coverType === s.CIRCLE), [t]),
                        r = (0, x.useMemo)(() => {
                            switch (i) {
                                case g.x.CHART_ARTIST:
                                    return 'l';
                                case g.x.CHART_FAVORITES:
                                    return 'xxl';
                                case g.x.CHART:
                                    if (l) return;
                                    return 'm';
                                default:
                                    return null;
                            }
                        }, [l, i]);
                    return (0, _.jsx)('ol', {
                        className: (0, m.$)(e4().root, e4()['root_spacer_'.concat(r)]),
                        tabIndex: -1,
                        'data-test-id': S.OA.slides.CHART_LIST,
                        children: t.map((e, t) =>
                            (0, _.jsx)(e9, { data: e, index: t, variant: i, hasOnlyArtistItems: l, isOrderVisible: a }, ''.concat(e.title, '-').concat(e.subtitle)),
                        ),
                    });
                };
            var e6 = a(46476),
                te = a.n(e6);
            let tt = (e) => {
                var t;
                let { data: a } = e;
                return (0, _.jsxs)('div', {
                    className: te().root,
                    children: [
                        (null == (t = a.cover) ? void 0 : t.uri) &&
                            (0, _.jsx)(H.t, {
                                radius: 'round',
                                className: te().cover,
                                children: (0, _.jsx)(er.B, { src: a.cover.uri, withAvatarReplace: !0, fit: 'contain', className: te().image, size: 200 }),
                            }),
                        a.title && (0, _.jsx)(f.DZ, { variant: 'div', size: 'xl', weight: 'bold', className: te().title, lineClamp: 2, children: a.title }),
                        (0, _.jsx)(e7, { items: a.items, isOrderVisible: !1, variant: g.x.CHART_ARTIST }),
                    ],
                });
            };
            var ta = a(47786),
                ti = a.n(ta);
            let tl = (e) => {
                var t;
                let { data: a } = e;
                return (0, _.jsxs)('div', {
                    className: ti().root,
                    'data-test-id': S.OA.slides.CHART_CONTENT,
                    children: [
                        a.description &&
                            (0, _.jsx)(ej, {
                                caption: null != (t = a.description) ? t : '',
                                className: ti().text,
                                lineClamp: 3,
                                'data-test-id': S.OA.slides.CHART_DESCRIPTION,
                            }),
                        (0, _.jsx)(e7, { items: a.items, variant: g.x.CHART, isOrderVisible: a.isOrderVisible }),
                    ],
                });
            };
            var ts = a(94842),
                tr = a.n(ts);
            let tn = (e) => {
                let { data: t } = e,
                    a = 'number' == typeof t.value,
                    i = (0, x.useMemo)(
                        () => ({ value: t.value, valueDescription: t.valueDescription, valueSuffix: t.valueSuffix, footer: t.footer, align: t.align }),
                        [t.footer, t.value, t.valueDescription, t.valueSuffix, t.align],
                    );
                return (0, _.jsxs)('div', {
                    className: tr().root,
                    'data-test-id': S.OA.slides.CHART_FAVORITES_CONTENT,
                    children: [
                        a && (0, _.jsx)(ew, { data: i, withAutoResize: !0 }),
                        t.description &&
                            (0, _.jsx)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'medium',
                                className: tr().description,
                                lineClamp: 3,
                                'data-test-id': S.OA.slides.CHART_FAVORITES_DESCRIPTION,
                                children: t.description,
                            }),
                        (0, _.jsx)(e7, { items: t.items, isOrderVisible: t.isOrderVisible, variant: g.x.CHART_FAVORITES }),
                    ],
                });
            };
            (!(function (e) {
                ((e.CHOSEN = 'CHOSEN'), (e.TEXT = 'TEXT'));
            })(n || (n = {})),
                (function (e) {
                    ((e.CHOSEN_IMAGE = 'CHOSEN_IMAGE'), (e.IMAGE = 'IMAGE'));
                })(o || (o = {})),
                (function (e) {
                    ((e.TEXT = 'TEXT'), (e.COLLAGE = 'COLLAGE'));
                })(d || (d = {})));
            var to = a(84516),
                td = a.n(to);
            let tc = (0, v.PA)((e) => {
                let { data: t, carouselIndex: a = 0, onBackgroundChange: i, onCarouselReady: l, onSlideChange: s } = e,
                    {
                        slides: { savedChoices: r },
                    } = (0, P.g)();
                (0, x.useEffect)(() => {
                    var e, l, s;
                    return null == i ? void 0 : i(null != (s = null == (l = t.items[a]) || null == (e = l.contentBackground) ? void 0 : e.uri) ? s : '');
                }, [t.items, a, i]);
                let d = (0, A.c)((e) => {
                    var a, l, r;
                    (null == i || i(null != (r = null == (l = t.items[e]) || null == (a = l.contentBackground) ? void 0 : a.uri) ? r : ''),
                        null == s || s(e, t.items.length));
                });
                return t.items.length
                    ? (0, _.jsx)('div', {
                          className: td().root,
                          children: (0, _.jsx)(eZ, {
                              initialIndex: a,
                              slidesPerView: 1,
                              onCarouselReady: l,
                              onSlideChange: d,
                              children: t.items.map((e, t) => {
                                  let a,
                                      { topBlock: i, bottomBlock: l } = e,
                                      {
                                          background: { uri: s },
                                          items: d,
                                      } = i.data,
                                      c = d.reduce((e, t) => {
                                          let a, i, l;
                                          if (t.type === o.IMAGE) a = t.data.uri;
                                          else if (t.type === o.CHOSEN_IMAGE) {
                                              var s;
                                              let e = r.get(null != (s = t.data.key) ? s : '');
                                              ((a = null == e ? void 0 : e.data.uri),
                                                  (i = null == e ? void 0 : e.data.coverMask),
                                                  (l = null == e ? void 0 : e.data.coverBackground));
                                          }
                                          if (!a) return e;
                                          let { x: n, y: d, z: c, width: u, height: _ } = t.data.rectangle;
                                          return (
                                              e.push({
                                                  uri: a,
                                                  coverMask: i,
                                                  coverBackground: l,
                                                  rectangle: {
                                                      left: ''.concat(n, '%'),
                                                      top: ''.concat(1.25 * d, '%'),
                                                      zIndex: c,
                                                      width: ''.concat(u, '%'),
                                                      height: ''.concat(1.25 * _, '%'),
                                                  },
                                              }),
                                              e
                                          );
                                      }, []),
                                      u =
                                          ((a = l.data.items),
                                          a.map((e) => {
                                              let t;
                                              if (e.type === n.TEXT) t = e.data.subtitle;
                                              else if (e.type === n.CHOSEN) {
                                                  var a;
                                                  let i = r.get(null != (a = e.data.key) ? a : '');
                                                  t = null == i ? void 0 : i.data.text;
                                              }
                                              return { title: e.data.title, subtitle: t };
                                          }));
                                  return (0, _.jsxs)(
                                      'div',
                                      {
                                          className: td().slide,
                                          children: [
                                              (0, _.jsxs)('div', {
                                                  className: td().topBlock,
                                                  children: [
                                                      s && (0, _.jsx)(V._V, { className: td().topBlockBackground, src: s, withAvatarReplace: !0 }),
                                                      c.map((e, t) => {
                                                          let { uri: a, coverMask: i, coverBackground: l, rectangle: s } = e;
                                                          return (0, _.jsx)(
                                                              'div',
                                                              {
                                                                  className: td().topBlockImageWrapper,
                                                                  style: s,
                                                                  children: (0, _.jsx)(eK, {
                                                                      backgroundSrc: l,
                                                                      className: td().topBlockImage,
                                                                      fit: 'contain',
                                                                      maskSrc: i,
                                                                      size: e$.e0,
                                                                      src: a,
                                                                      withAvatarReplace: !0,
                                                                      withSrcSet: !1,
                                                                  }),
                                                              },
                                                              t,
                                                          );
                                                      }),
                                                  ],
                                              }),
                                              (0, _.jsx)('div', {
                                                  className: td().bottomBlock,
                                                  children: u.map((e, t) => {
                                                      let { title: a, subtitle: i } = e;
                                                      return (0, _.jsxs)(
                                                          'div',
                                                          {
                                                              className: td().bottomBlock_item,
                                                              children: [
                                                                  a && (0, _.jsx)(ej, { caption: a, className: td().title, lineClamp: 1 }),
                                                                  i && (0, _.jsx)(eW, { heading: i, className: td().subtitle, lineClamp: 1 === t ? 1 : 2 }),
                                                              ],
                                                          },
                                                          a,
                                                      );
                                                  }),
                                              }),
                                          ],
                                      },
                                      t,
                                  );
                              }),
                          }),
                      })
                    : null;
            });
            var tu = a(16226),
                t_ = a.n(tu),
                tm = a(86165),
                tv = a(35199),
                tx = a.n(tv),
                tp = a(73171),
                th = a(50408),
                tC = a(40849),
                tT = a.n(tC);
            let tI = { maxFontSize: 20, minFontSize: 12, lineHeight: 1 },
                tS = (e) => {
                    let { children: t, className: a, textOptions: i } = e,
                        l = { ...tI, ...i },
                        [s, r] = (0, th.d)();
                    return ((0, tp.mf)(s, l), (0, _.jsx)('div', { className: (0, m.$)(tT().root, a), ref: r, children: t }));
                };
            var tg = a(40251),
                tA = a.n(tg);
            let tE = (e) => {
                let { data: t } = e,
                    { contentImage: a, contentLogo: i, metaLabel: l, festivalTextColor: s, festivalTitle: r, artists: n } = t,
                    o = null == a ? void 0 : a.uri,
                    d = null == i ? void 0 : i.uri,
                    c = s ? { '--festival-title-color': s } : void 0;
                return (0, _.jsxs)(_.Fragment, {
                    children: [
                        l &&
                            (0, _.jsx)('div', {
                                className: tA().header,
                                children: (0, _.jsx)(f.DZ, {
                                    className: tA().metaLabel,
                                    variant: 'span',
                                    type: 'text',
                                    size: 'xxs',
                                    weight: 'bold',
                                    'data-test-id': S.OA.slides.LINEUP_META_LABEL,
                                    children: l,
                                }),
                            }),
                        o &&
                            (0, _.jsx)(V._V, {
                                className: tA().festivalImage,
                                src: o,
                                fit: 'contain',
                                size: 'orig',
                                withAvatarReplace: !0,
                                withSrcSet: !1,
                                withFallback: !1,
                                withLoadingIndicator: !1,
                                'data-test-id': S.OA.slides.LINEUP_CONTENT_IMAGE,
                            }),
                        (0, _.jsxs)(tS, {
                            className: tA().text,
                            children: [
                                r &&
                                    (0, _.jsx)(f.DZ, {
                                        className: tA().festivalTitle,
                                        style: c,
                                        variant: 'span',
                                        type: 'text',
                                        size: 'xl',
                                        weight: 'bold',
                                        lineClamp: 2,
                                        'data-test-id': S.OA.slides.LINEUP_FESTIVAL_TITLE,
                                        children: r,
                                    }),
                                n.length > 0 &&
                                    (0, _.jsx)(f.DZ, {
                                        className: tA().artists,
                                        style: c,
                                        variant: 'span',
                                        type: 'text',
                                        size: 'xl',
                                        weight: 'bold',
                                        lineClamp: 6,
                                        'data-test-id': S.OA.slides.LINEUP_ARTISTS,
                                        children: n.join(e$.$$),
                                    }),
                            ],
                        }),
                        d &&
                            (0, _.jsx)(V._V, {
                                className: tA().logo,
                                src: d,
                                fit: 'contain',
                                size: 'orig',
                                withAvatarReplace: !0,
                                withSrcSet: !1,
                                withFallback: !1,
                                withLoadingIndicator: !1,
                                'aria-hidden': !0,
                                'data-test-id': S.OA.slides.LINEUP_CONTENT_LOGO,
                            }),
                    ],
                });
            };
            var tN = a(44989),
                tL = a.n(tN);
            let tf = (e) => {
                let { data: t } = e,
                    { contentLogo: a, contentImage: i, metaLabel: l, artists: s } = t,
                    r = null == a ? void 0 : a.uri,
                    n = null == i ? void 0 : i.uri,
                    o = (0, et.L)(() =>
                        r || l
                            ? (0, _.jsxs)('div', {
                                  className: tL().header,
                                  children: [
                                      r &&
                                          (0, _.jsx)(V._V, {
                                              className: tL().headerLogo,
                                              src: r,
                                              fit: 'contain',
                                              size: 'orig',
                                              withAvatarReplace: !0,
                                              withSrcSet: !1,
                                              withFallback: !1,
                                              withLoadingIndicator: !1,
                                              'aria-hidden': !0,
                                              'data-test-id': S.OA.slides.LINEUP_CONTENT_LOGO,
                                          }),
                                      l &&
                                          (0, _.jsx)(f.DZ, {
                                              className: tL().metaLabel,
                                              variant: 'span',
                                              type: 'text',
                                              size: 'xxs',
                                              weight: 'bold',
                                              'data-test-id': S.OA.slides.LINEUP_META_LABEL,
                                              children: l,
                                          }),
                                  ],
                              })
                            : null,
                    ),
                    d = (0, et.L)(() =>
                        s.length
                            ? (0, _.jsx)(tS, {
                                  className: tL().artists,
                                  children: (0, _.jsx)('div', {
                                      className: tL().artistList,
                                      children: s.map((e) =>
                                          (0, _.jsx)(
                                              f.DZ,
                                              {
                                                  className: tL().artist,
                                                  variant: 'span',
                                                  type: 'text',
                                                  size: 'xs',
                                                  weight: 'bold',
                                                  lineClamp: 2,
                                                  'data-test-id': S.OA.slides.LINEUP_ARTIST,
                                                  children: e,
                                              },
                                              e,
                                          ),
                                      ),
                                  }),
                              })
                            : null,
                    );
                return (0, _.jsxs)(_.Fragment, {
                    children: [
                        o,
                        n &&
                            (0, _.jsx)(V._V, {
                                className: tL().festivalImage,
                                src: n,
                                fit: 'contain',
                                size: 'orig',
                                withAvatarReplace: !0,
                                withSrcSet: !1,
                                withFallback: !1,
                                withLoadingIndicator: !1,
                                'data-test-id': S.OA.slides.LINEUP_CONTENT_IMAGE,
                            }),
                        d,
                    ],
                });
            };
            var tb = a(92265),
                ty = a.n(tb);
            let tR = (0, v.PA)((e) => {
                    let { data: t } = e,
                        { eventTagLabel: a, metaLabel: i, contentLogo: l, artists: s } = t,
                        r = (0, x.useRef)(null),
                        n = (0, x.useRef)(null),
                        o = (0, x.useRef)(s),
                        [d, c] = (0, x.useState)(!1),
                        u = ((e, t) => (e < 4 ? 1 : 4 === e || t ? 2 : 3))(s.length, d),
                        m = s.slice(0, u),
                        v = s.slice(u);
                    ((0, x.useLayoutEffect)(() => {
                        o.current !== s && ((o.current = s), c(!1));
                    }, [s]),
                        (0, x.useLayoutEffect)(() => {
                            let e = n.current;
                            3 === u && e && c(e.scrollHeight > e.clientHeight + 1);
                        }, [s, u]),
                        (0, x.useEffect)(() => {
                            let e = r.current;
                            if (!e) return;
                            let t = new ResizeObserver(() => {
                                let e = n.current;
                                c(!!((null == e ? void 0 : e.children.length) === 3 && e.scrollHeight > e.clientHeight + 1));
                            });
                            return (t.observe(e), () => t.disconnect());
                        }, []));
                    let p = (0, et.L)(() =>
                        a || i
                            ? (0, _.jsxs)('div', {
                                  className: ty().header,
                                  children: [
                                      a &&
                                          (0, _.jsx)(f.DZ, {
                                              className: ty().eventTag,
                                              lineClamp: 2,
                                              variant: 'span',
                                              type: 'text',
                                              size: 'xxs',
                                              weight: 'bold',
                                              'data-test-id': S.OA.slides.LINEUP_EVENT_TAG,
                                              children: a,
                                          }),
                                      i &&
                                          (0, _.jsx)(f.DZ, {
                                              className: ty().metaLabel,
                                              variant: 'span',
                                              type: 'text',
                                              size: 'xxs',
                                              weight: 'bold',
                                              'data-test-id': S.OA.slides.LINEUP_META_LABEL,
                                              children: i,
                                          }),
                                  ],
                              })
                            : null,
                    );
                    return (0, _.jsxs)('div', {
                        className: ty().root,
                        ref: r,
                        children: [
                            p,
                            (0, _.jsxs)(tS, {
                                className: ty().artists,
                                children: [
                                    (0, _.jsx)('div', {
                                        className: ty().highlighted,
                                        ref: n,
                                        children: m.map((e) =>
                                            (0, _.jsx)(
                                                f.DZ,
                                                {
                                                    className: ty().highlightedItem,
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'xl',
                                                    weight: 'bold',
                                                    lineClamp: 3,
                                                    'data-test-id': S.OA.slides.LINEUP_HIGHLIGHTED_ARTIST,
                                                    children: e,
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                    v.length > 0 &&
                                        (0, _.jsx)(f.DZ, {
                                            className: ty().restItem,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'xxs',
                                            weight: 'bold',
                                            lineClamp: 4,
                                            'data-test-id': S.OA.slides.LINEUP_REST_ARTISTS,
                                            children: v.join(e$.$$),
                                        }),
                                ],
                            }),
                            (null == l ? void 0 : l.uri) &&
                                (0, _.jsx)(V._V, {
                                    className: ty().logo,
                                    src: l.uri,
                                    fit: 'contain',
                                    size: 'orig',
                                    withAvatarReplace: !0,
                                    withSrcSet: !1,
                                    withFallback: !1,
                                    withLoadingIndicator: !1,
                                    'aria-hidden': !0,
                                    'data-test-id': S.OA.slides.LINEUP_CONTENT_LOGO,
                                }),
                        ],
                    });
                }),
                tj = (e) => {
                    var t;
                    let { type: a, data: i, isActive: l } = e,
                        s = null == (t = i.contentBackground) ? void 0 : t.uri,
                        r = ((e) => {
                            let { artistTextColor: t, metaLabelTextColor: a, eventTagLabelTextColor: i } = e;
                            if (t || a || i)
                                return {
                                    ...(t && { '--lineup-content-text-color': t }),
                                    ...(a && { '--lineup-content-meta-label-text-color': a }),
                                    ...(i && { '--lineup-content-event-tag-label-text-color': i }),
                                };
                        })(i),
                        n = ((e) => {
                            switch (e) {
                                case tm.y.LINEUP:
                                    return S.OA.slides.LINEUP_SIMPLE_ITEM;
                                case tm.y.LINEUP_WITH_FESTIVAL:
                                    return S.OA.slides.LINEUP_FESTIVAL_ITEM;
                                case tm.y.LINEUP_WITH_FESTIVAL_IMAGE:
                                    return S.OA.slides.LINEUP_FESTIVAL_IMAGE_ITEM;
                                default:
                                    return;
                            }
                        })(a),
                        o = (0, et.L)(() => {
                            switch (a) {
                                case tm.y.LINEUP:
                                    return (0, _.jsx)(tR, { data: i });
                                case tm.y.LINEUP_WITH_FESTIVAL:
                                    return (0, _.jsx)(tf, { data: i });
                                case tm.y.LINEUP_WITH_FESTIVAL_IMAGE:
                                    return (0, _.jsx)(tE, { data: i });
                                default:
                                    return null;
                            }
                        });
                    return (0, _.jsxs)('div', {
                        className: tx().root,
                        style: r,
                        'data-screenshot-hidden': !l || void 0,
                        'data-test-id': n,
                        children: [
                            s &&
                                (0, _.jsx)(V._V, {
                                    className: tx().background,
                                    src: s,
                                    fit: 'cover',
                                    size: 'orig',
                                    withAvatarReplace: !0,
                                    withSrcSet: !1,
                                    withFallback: !1,
                                    withLoadingIndicator: !1,
                                    'aria-hidden': !0,
                                    'data-test-id': S.OA.slides.LINEUP_BACKGROUND_IMAGE,
                                }),
                            (0, _.jsx)('div', { className: tx().content, children: o }),
                        ],
                    });
                },
                tO = (0, v.PA)((e) => {
                    let { data: t, carouselIndex: a = 0, onSlideChange: i, onCarouselReady: l, onBackgroundChange: s, onShareBackgroundChange: r } = e,
                        [n, o] = (0, x.useState)(a);
                    ((0, x.useEffect)(() => {
                        var e, i;
                        return null == s ? void 0 : s(null == (i = t.items[a]) || null == (e = i.data.slideBackground) ? void 0 : e.uri);
                    }, [a, t.items, s]),
                        (0, x.useEffect)(() => {
                            var e, i, l;
                            return null == r ? void 0 : r(null != (l = null == (i = t.items[a]) || null == (e = i.data.shareBackground) ? void 0 : e.uri) ? l : '');
                        }, [a, t.items, r]));
                    let d = (0, x.useMemo)(() => {
                            if (void 0 !== n) return t.items[n];
                        }, [n, t.items]),
                        c = (0, x.useCallback)(
                            (e) => {
                                var a, l, n;
                                let d = t.items[e];
                                d &&
                                    (o(e),
                                    null == i || i(e, t.items.length),
                                    null == s || s(null == (a = d.data.slideBackground) ? void 0 : a.uri),
                                    null == r || r(null != (n = null == (l = d.data.shareBackground) ? void 0 : l.uri) ? n : ''));
                            },
                            [t.items, s, r, i],
                        );
                    return t.items.length
                        ? (0, _.jsxs)('div', {
                              className: t_().root,
                              'data-test-id': S.OA.slides.LINEUP_CONTENT,
                              children: [
                                  (0, _.jsx)(eZ, {
                                      className: t_().carousel,
                                      initialIndex: a,
                                      slideClassName: t_().slide,
                                      slideActiveClassName: t_().slideActive,
                                      slidesPerView: 'auto',
                                      onCarouselReady: l,
                                      onSlideChange: c,
                                      spaceBetween: 14,
                                      children: t.items.map((e, t) => (0, _.jsx)(tj, { data: e.data, type: e.type, isActive: t === n }, t)),
                                  }),
                                  (0, _.jsx)('div', {
                                      className: t_().meta,
                                      'data-screenshot-hidden': !0,
                                      children:
                                          (null == d ? void 0 : d.data.contentDescription) &&
                                          (0, _.jsx)(ej, {
                                              caption: d.data.contentDescription,
                                              className: t_().description,
                                              lineClamp: 3,
                                              'data-test-id': S.OA.slides.LINEUP_DESCRIPTION,
                                          }),
                                  }),
                              ],
                          })
                        : null;
                });
            var tk = a(81438),
                tw = a(97916),
                tP = a.n(tw);
            let tB = (0, v.PA)((e) => {
                var t, a, i, l, s, r;
                let { data: n } = e,
                    { lumen: o } = (0, P.g)(),
                    { cover: d } = (0, tk.x)(),
                    c = o.isTriedToLoadData && !o.isAwakened,
                    u = null != (r = null == (t = n.unawakenedLumenImage) ? void 0 : t.uri) ? r : null,
                    m = c ? u : d,
                    v = null == (i = n.query) || null == (a = i.image) ? void 0 : a.uri,
                    x = null == (l = n.query) ? void 0 : l.textColor,
                    p = null == (s = n.query) ? void 0 : s.text,
                    h = x ? { '--query-text-color': x } : void 0,
                    C = (0, et.L)(() =>
                        o.isTriedToLoadData && m
                            ? (0, _.jsx)(H.t, {
                                  className: tP().lumenAvatar,
                                  children: (0, _.jsx)(V._V, {
                                      src: m,
                                      fit: 'contain',
                                      withAvatarReplace: !0,
                                      withFallback: !1,
                                      withLoadingIndicator: !1,
                                      size: 'orig',
                                      className: tP().lumenAvatarImage,
                                      'aria-hidden': !0,
                                      'data-test-id': S.OA.slides.LUMEN_AVATAR,
                                  }),
                              })
                            : null,
                    ),
                    T = (0, et.L)(() =>
                        v && p
                            ? (0, _.jsxs)('div', {
                                  className: tP().queryWrapper,
                                  style: h,
                                  'data-test-id': S.OA.slides.LUMEN_QUERY,
                                  children: [
                                      v &&
                                          (0, _.jsx)(er.B, { src: v, withAvatarReplace: !0, withAspectRatio: !0, fit: 'contain', size: 300, className: tP().queryImage }),
                                      p &&
                                          (0, _.jsx)(f.HL, {
                                              variant: 'span',
                                              type: 'text',
                                              size: 'm',
                                              weight: 'medium',
                                              className: tP().queryText,
                                              lineClamp: 2,
                                              'data-test-id': S.OA.slides.LUMEN_QUERY_TEXT,
                                              children: p,
                                          }),
                                  ],
                              })
                            : null,
                    );
                return (0, _.jsxs)('div', {
                    className: tP().root,
                    'data-test-id': S.OA.slides.LUMEN_CONTENT,
                    children: [
                        (0, _.jsx)('div', { className: tP().lumenAvatarArea, children: C }),
                        T,
                        n.title && (0, _.jsx)(eW, { heading: n.title, className: tP().title, lineClamp: 4, 'data-test-id': S.OA.slides.LUMEN_TITLE }),
                        n.subtitle && (0, _.jsx)(ej, { caption: n.subtitle, className: tP().subtitle, lineClamp: 4, 'data-test-id': S.OA.slides.LUMEN_SUBTITLE }),
                    ],
                });
            });
            var tM = a(92814),
                tD = a.n(tM);
            let tU = (e) => {
                let { data: t } = e;
                return (0, _.jsxs)('div', {
                    className: tD().root,
                    children: [
                        (0, _.jsx)(f.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'medium',
                            className: (0, m.$)(tD().description, tD().text),
                            lineClamp: 3,
                            children: t.description,
                        }),
                        t.artwork && (0, _.jsx)(V._V, { src: t.artwork, size: 300, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0, className: tD().artwork }),
                        (0, _.jsx)(f.DZ, { variant: 'h2', size: 'xl', weight: 'black', className: (0, m.$)(tD().title, tD().text), lineClamp: 2, children: t.title }),
                    ],
                });
            };
            !(function (e) {
                ((e.REWIND = 'REWIND'), (e.TRACK = 'TRACK'));
            })(c || (c = {}));
            let tz = { src: '/_next/static/media/trailer_animated.aa3fd227.gif' };
            var tH = a(22846),
                tF = a.n(tH);
            let tV = (0, v.PA)((e) => {
                var t, a;
                let { data: l, withPersonalColor: s } = e,
                    { user: r } = (0, P.g)(),
                    n = l.entityType === c.REWIND,
                    o = null == (t = l.smallRoundCover) ? void 0 : t.uri,
                    d = o && !n,
                    u = n || (o && !d),
                    v = l.align === i.BOTTOM,
                    p = u || d,
                    h = (0, x.useMemo)(() => {
                        if (!s || !r.collectionHue) {
                            var e;
                            return {
                                '--cover-background-color': l.cover.color,
                                '--small-round-cover-background-color': null == (e = l.smallRoundCover) ? void 0 : e.color,
                            };
                        }
                        return {
                            '--cover-background-color': (0, G.e)(r.collectionHue, 0.8, 0.6),
                            '--small-round-cover-background-color': (0, G.e)(r.collectionHue, 1, 0.35),
                        };
                    }, [l.cover.color, null == (a = l.smallRoundCover) ? void 0 : a.color, r.collectionHue, s]),
                    C = (0, et.L)(() =>
                        (0, _.jsx)(H.t, {
                            radius: 'round',
                            className: tF().smallRoundCover,
                            children: (0, _.jsx)(V._V, {
                                src: tz.src,
                                withFallback: !1,
                                withLoadingIndicator: !1,
                                fit: 'contain',
                                className: tF().trailer,
                                'aria-hidden': !0,
                            }),
                        }),
                    ),
                    T = (0, et.L)(() => {
                        if (o)
                            return (0, _.jsx)(H.t, {
                                radius: 'round',
                                className: (0, m.$)(tF().smallRoundCover, tF().smallRoundCover_withShadow),
                                children: (0, _.jsx)(er.B, { src: o, withAvatarReplace: !0, fit: 'contain', size: 100, className: tF().image }),
                            });
                    }),
                    I = (0, et.L)(() => (u ? (n ? C : T) : null));
                return (0, _.jsxs)('div', {
                    className: tF().root,
                    style: h,
                    'data-test-id': S.OA.slides.SINGLE_ENTITY_CONTENT,
                    children: [
                        !v &&
                            l.description &&
                            (0, _.jsx)(ej, { caption: l.description, className: tF().description, lineClamp: 3, 'data-test-id': S.OA.slides.SINGLE_ENTITY_DESCRIPTION }),
                        (0, _.jsxs)(H.t, {
                            className: (0, m.$)(tF().cover, { [tF().cover_small]: v, [tF().cover_withSmallRoundCoverOnCover]: d }),
                            'data-test-id': S.OA.slides.SINGLE_ENTITY_COVER,
                            children: [
                                l.cover.uri &&
                                    (0, _.jsx)(eK, {
                                        backgroundSrc: l.coverBackground,
                                        className: tF().image,
                                        fit: 'contain',
                                        maskSrc: l.coverMask,
                                        size: e$.e0,
                                        src: l.cover.uri,
                                        withAvatarReplace: !0,
                                        withSrcSet: !1,
                                    }),
                                d && T,
                            ],
                        }),
                        (0, _.jsxs)('div', {
                            className: (0, m.$)(tF().meta, { [tF().meta_withCover]: p }),
                            children: [
                                I,
                                l.subtitle &&
                                    (0, _.jsx)(ej, { caption: l.subtitle, className: tF().subtitle, lineClamp: 3, 'data-test-id': S.OA.slides.SINGLE_ENTITY_SUBTITLE }),
                                l.title && (0, _.jsx)(eW, { heading: l.title, lineClamp: 3, 'data-test-id': S.OA.slides.SINGLE_ENTITY_TITLE }),
                                v &&
                                    l.description &&
                                    (0, _.jsx)(ej, {
                                        caption: l.description,
                                        className: tF().description,
                                        lineClamp: 3,
                                        'data-test-id': S.OA.slides.SINGLE_ENTITY_DESCRIPTION,
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var tG = a(14828),
                tK = a.n(tG);
            let t$ = (e) => {
                var t, a;
                let { data: i } = e;
                return (0, _.jsxs)('div', {
                    className: tK().root,
                    'data-test-id': S.OA.slides.STATS_CONTENT,
                    children: [
                        (0, _.jsx)(ej, { caption: null != (t = i.header) ? t : '', className: tK().text, lineClamp: 3, 'data-test-id': S.OA.slides.STATS_HEADER }),
                        i.stats.map((e) =>
                            (0, _.jsx)(ew, { data: e, descriptionLineClamp: 2, withAutoResize: !0, withOpacity: !0 }, ''.concat(e.value, '-').concat(e.valueDescription)),
                        ),
                        (0, _.jsx)(ej, { caption: null != (a = i.footer) ? a : '', className: tK().text, lineClamp: 3, 'data-test-id': S.OA.slides.STATS_FOOTER }),
                    ],
                });
            };
            !(function (e) {
                ((e.SMALL = 'SMALL'), (e.BIG = 'BIG'));
            })(u || (u = {}));
            var tX = a(6158),
                tY = a.n(tX);
            let tZ = (e) => {
                var t;
                let { data: a, disclaimer: i } = e,
                    l = a.titleSize === u.BIG ? 'xxl' : 'xl',
                    s = (0, et.L)(() => {
                        if (null == i ? void 0 : i.textColor) return { '--disclaimer-text-color': i.textColor };
                    });
                return (0, _.jsxs)('div', {
                    className: tY().root,
                    style: s,
                    'data-test-id': S.OA.slides.TEXT_CONTENT,
                    children: [
                        (0, _.jsx)(f.DZ, {
                            variant: 'h2',
                            size: l,
                            weight: 'black',
                            className: tY().text,
                            lineClamp: 4,
                            'data-test-id': S.OA.slides.TEXT_TITLE,
                            children: a.title,
                        }),
                        (0, _.jsx)(ej, { caption: null != (t = a.subtitle) ? t : '', className: tY().text, lineClamp: 4, 'data-test-id': S.OA.slides.TEXT_SUBTITLE }),
                        (null == i ? void 0 : i.text) &&
                            (0, _.jsx)('span', {
                                className: tY().disclaimer,
                                dangerouslySetInnerHTML: { __html: (0, T.ky)(i.text) },
                                'data-test-id': S.OA.slides.TEXT_DISCLAIMER,
                            }),
                    ],
                });
            };
            var tq = a(93686),
                tQ = a.n(tq);
            let tW = (e) => {
                let {
                    data: { title: t, subtitle: a, description: i },
                } = e;
                return (0, _.jsxs)('div', {
                    className: tQ().root,
                    children: [
                        (0, _.jsx)(f.DZ, {
                            variant: 'h2',
                            size: 'xxxl',
                            weight: 'black',
                            className: (0, m.$)(tQ().text, tQ().header),
                            dangerouslySetInnerHTML: { __html: (0, T.ky)(t || '') },
                        }),
                        (0, _.jsx)(f.DZ, { variant: 'h3', size: 'xl', weight: 'black', className: tQ().text, dangerouslySetInnerHTML: { __html: (0, T.ky)(a || '') } }),
                        i &&
                            (0, _.jsx)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'medium',
                                className: tQ().text,
                                dangerouslySetInnerHTML: { __html: (0, T.ky)(i) },
                            }),
                    ],
                });
            };
            var tJ = a(84930),
                t0 = a.n(tJ);
            let t8 = (e) => {
                let { data: t } = e,
                    a = t.coverType === s.CIRCLE ? 'round' : 'xs';
                return (0, _.jsxs)('div', {
                    className: t0().root,
                    'data-test-id': S.OA.slides.TEXT_FACT_CONTENT,
                    children: [
                        t.smallCover &&
                            (0, _.jsx)(H.t, {
                                radius: a,
                                className: t0().cover,
                                'data-test-id': S.OA.slides.TEXT_FACT_COVER,
                                children: (0, _.jsx)(er.B, { src: t.smallCover, withAvatarReplace: !0, fit: 'contain', size: 100, className: t0().image }),
                            }),
                        t.coverTitle &&
                            (0, _.jsx)(f.DZ, {
                                variant: 'span',
                                weight: 'bold',
                                size: 'l',
                                className: t0().text,
                                lineClamp: 4,
                                'data-test-id': S.OA.slides.TEXT_FACT_COVER_TITLE,
                                children: t.coverTitle,
                            }),
                        (0, _.jsx)(ew, { data: t, withAutoResize: !0, lineClamp: 4 }),
                    ],
                });
            };
            var t1 = a(9326),
                t4 = a.n(t1);
            let t5 = (e) => {
                    let { label: t, description: a, artistsName: i, trackTitle: l, coverUri: s } = e,
                        r = [i, l].filter(Boolean).join(' • ');
                    return (0, _.jsxs)('div', {
                        children: [
                            (0, _.jsx)(f.DZ, { className: (0, m.$)(t4().textSecondary, t4().itemLabel), variant: 'h3', size: 's', weight: 'black', children: t }),
                            (0, _.jsx)(V._V, {
                                className: t4().cover,
                                src: s,
                                fit: 'cover',
                                withLoadingIndicator: !1,
                                withFallback: !0,
                                withAvatarReplace: !0,
                                withAspectRatio: !0,
                                'aria-hidden': !0,
                            }),
                            (0, _.jsx)(f.HL, {
                                className: (0, m.$)(t4().textPrimary, t4().itemMeta),
                                variant: 'div',
                                type: 'text',
                                size: 'l',
                                weight: 'medium',
                                lineClamp: 2,
                                children: r,
                            }),
                            (0, _.jsx)(f.DZ, { className: (0, m.$)(t4().textSecondary, t4().header), variant: 'h3', size: 'xl', weight: 'black', children: a }),
                        ],
                    });
                },
                t2 = (0, v.PA)((e) => {
                    var t, a, i, l, s, r, n, o, d, c, u, v;
                    let { data: x } = e,
                        { title: p, subtitle: h, firstItem: C, secondItem: T } = x;
                    return (0, _.jsxs)('div', {
                        className: t4().root,
                        children: [
                            (0, _.jsxs)('div', {
                                className: t4().row,
                                children: [
                                    (0, _.jsx)(f.DZ, { className: (0, m.$)(t4().textPrimary, t4().header), variant: 'h2', size: 'xxxl', weight: 'black', children: p }),
                                    (0, _.jsx)(f.DZ, { className: t4().textPrimary, variant: 'h3', size: 's', weight: 'black', children: h }),
                                ],
                            }),
                            C &&
                                (0, _.jsx)('div', {
                                    className: t4().row,
                                    children: (0, _.jsx)(t5, {
                                        label: C.label,
                                        description: C.description,
                                        artistsName: null != (n = null == (t = C.track) ? void 0 : t.artistsName) ? n : null,
                                        trackTitle: null != (o = null == (a = C.track) ? void 0 : a.title) ? o : null,
                                        coverUri: null != (d = null == (i = C.track) ? void 0 : i.coverUri) ? d : void 0,
                                    }),
                                }),
                            T &&
                                (0, _.jsx)('div', {
                                    className: t4().row,
                                    children: (0, _.jsx)(t5, {
                                        label: T.label,
                                        description: T.description,
                                        artistsName: null != (c = null == (l = T.track) ? void 0 : l.artistsName) ? c : null,
                                        trackTitle: null != (u = null == (s = T.track) ? void 0 : s.title) ? u : null,
                                        coverUri: null != (v = null == (r = T.track) ? void 0 : r.coverUri) ? v : void 0,
                                    }),
                                }),
                        ],
                    });
                }),
                t3 = (e) => {
                    let { content: t, withPersonalColor: a, ...i } = e;
                    if (null == t ? void 0 : t.data)
                        switch (t.type) {
                            case g.x.TEXT:
                                return (0, _.jsx)(tZ, { data: t.data, disclaimer: t.disclaimer });
                            case g.x.STATS:
                                return (0, _.jsx)(t$, { data: t.data });
                            case g.x.CHART:
                                return (0, _.jsx)(tl, { data: t.data });
                            case g.x.CHART_FAVORITES:
                                return (0, _.jsx)(tn, { data: t.data });
                            case g.x.SINGLE_ENTITY:
                                return (0, _.jsx)(tV, { data: t.data, withPersonalColor: a });
                            case g.x.TEXT_FACT:
                                return (0, _.jsx)(t8, { data: t.data });
                            case g.x.CHART_ARTIST:
                                return (0, _.jsx)(tt, { data: t.data });
                            case g.x.ARTISTS:
                                return (0, _.jsx)(eM, { data: t.data });
                            case g.x.TEXT_EXTENDED:
                                return (0, _.jsx)(tW, { data: t.data });
                            case g.x.THEN_NOW_COMPARISON:
                                return (0, _.jsx)(t2, { data: t.data });
                            case g.x.PAY_CARD:
                                return (0, _.jsx)(tU, { data: t.data });
                            case g.x.CAROUSEL:
                                return (0, _.jsx)(e8, { data: t.data, ...i });
                            case g.x.COLLAGE:
                                return (0, _.jsx)(tc, { data: t.data, onBackgroundChange: i.onBackgroundChange, ...i });
                            case g.x.LINEUP:
                                return (0, _.jsx)(tO, { data: t.data, ...i });
                            case g.x.LUMEN:
                                return (0, _.jsx)(tB, { data: t.data });
                        }
                    return null;
                };
            var t9 = a(45507),
                t7 = a.n(t9);
            let t6 = (e) => {
                let { src: t, className: a, 'data-test-id': i } = e;
                return (0, _.jsx)(V._V, {
                    className: (0, m.$)(t7().root, a),
                    fit: 'contain',
                    src: t,
                    size: 'orig',
                    withAvatarReplace: !0,
                    alt: '',
                    'aria-hidden': !0,
                    withLoadingIndicator: !1,
                    'data-test-id': i,
                });
            };
            var ae = a(3259),
                at = a.n(ae);
            let aa = !0,
                ai = (0, v.PA)((e) => {
                    var t, a;
                    let { slide: l, isActive: s } = e,
                        {
                            slides: { savedChoice: r, saveChoice: n, isMuted: o },
                        } = (0, P.g)(),
                        d = (0, F.m)(),
                        { carouselIndex: c = 0, setCarouselIndex: u } = l,
                        v = (0, x.useRef)(null),
                        [p, h] = (0, x.useState)(void 0),
                        [C, T] = (0, x.useState)(0),
                        [E, N] = (0, x.useState)(l.background),
                        [L, f] = (0, x.useState)(''),
                        { state: b, toggleTrue: y, toggleFalse: R } = (0, j.e)(!1),
                        O = (0, x.useMemo)(() => {
                            let e = l.content;
                            if ((null == e ? void 0 : e.data) && 'align' in e.data) {
                                var t;
                                switch (null == (t = e.data) ? void 0 : t.align) {
                                    case i.TOP:
                                        return 'top';
                                    case i.CENTER:
                                        break;
                                    case i.BOTTOM:
                                        return 'bottom';
                                }
                            }
                            return 'center';
                        }, [l]);
                    ((0, x.useEffect)(() => {
                        var e, t, a, i, s, r;
                        ((null == (e = l.content) ? void 0 : e.type) === g.x.CAROUSEL ||
                            (null == (t = l.content) ? void 0 : t.type) === g.x.COLLAGE ||
                            (null == (a = l.content) ? void 0 : a.type) === g.x.LINEUP) &&
                            T(null != (r = null == (s = l.content.data) || null == (i = s.items) ? void 0 : i.length) ? r : 0);
                    }, [l.content]),
                        (0, x.useEffect)(() => {
                            (o || (aa = !0), o && aa && (d({ actionType: I.ActionType.MuteTrailer }), (aa = !1)));
                        }, [o, d]));
                    let k = (0, A.c)((e) => h(e)),
                        w = (0, A.c)(() => (null == p ? void 0 : p.slidePrev())),
                        B = (0, A.c)(() => (null == p ? void 0 : p.slideNext())),
                        M = (0, A.c)(() => {
                            r && l.savedChoiceKey && n(l.savedChoiceKey, { ...r, isSaved: !1 });
                        }),
                        D = (0, A.c)(() => {
                            var e, t, a, i, s;
                            if (!l.savedChoiceKey || (null == (e = l.content) ? void 0 : e.type) !== g.x.CAROUSEL) return;
                            let r = null == (i = l.content.data) || null == (a = i.items) || null == (t = a[c]) ? void 0 : t.data;
                            if (!r) return;
                            d({ actionType: I.ActionType.SelectSlideItem, objectPosX: c + 1 });
                            let { coverMask: o, coverBackground: u, title: _, cover: m } = r;
                            n(l.savedChoiceKey, { data: { coverMask: o, coverBackground: u, text: _, uri: null != (s = m.uri) ? s : void 0 }, index: c, isSaved: !0 });
                        }),
                        U = (0, A.c)((e, t) => {
                            (u(e), T(t));
                        }),
                        z = (0, A.c)((e) => {
                            N({ ...l.background, ...(e && { bgImageUrl: e }) });
                        }),
                        H = (0, A.c)((e) => f(e));
                    return (0, _.jsx)('div', {
                        className: (0, m.$)(at().root, {
                            [at().wideContent]: (null == (t = l.content) ? void 0 : t.type) === g.x.COLLAGE || (null == (a = l.content) ? void 0 : a.type) === g.x.LINEUP,
                        }),
                        ref: v,
                        'data-test-id': S.OA.slides.SLIDE_CARD,
                        children: (0, _.jsxs)(W, {
                            isActive: s,
                            isContentVisible: b,
                            setContentVisible: y,
                            setContentInvisible: R,
                            background: E,
                            shareBackground: L,
                            className: at().background,
                            'data-test-id': S.OA.slides.SLIDE_BACKGROUND,
                            children: [
                                (l.logo || l.promoLogo) &&
                                    (0, _.jsxs)('div', {
                                        className: at().logoContainer,
                                        children: [
                                            l.logo && (0, _.jsx)(t6, { src: l.logo, className: at().logo, 'data-test-id': S.OA.slides.SLIDE_LOGO }),
                                            l.promoLogo && (0, _.jsx)(t6, { src: l.promoLogo, 'data-test-id': S.OA.slides.SLIDE_PROMO_LOGO }),
                                        ],
                                    }),
                                l.content &&
                                    b &&
                                    (0, _.jsx)('div', {
                                        className: (0, m.$)(at().content, at()['content_align_'.concat(O)], { [at().playAnimation]: b }),
                                        children: (0, _.jsx)(t3, {
                                            carouselIndex: c,
                                            content: l.content,
                                            withPersonalColor: l.background.withPersonalColor,
                                            onCarouselReady: k,
                                            onSlideChange: U,
                                            onBackgroundChange: z,
                                            onShareBackgroundChange: H,
                                        }),
                                    }),
                                (0, _.jsx)('div', {
                                    'data-screenshot-hidden': !0,
                                    className: at().buttonsContainer,
                                    children: (0, _.jsx)(eL, {
                                        cardRef: v,
                                        className: at().button,
                                        slide: l,
                                        onEditChoice: M,
                                        onSaveChoice: D,
                                        onSlidePrev: w,
                                        onSlideNext: B,
                                        hasLeft: c > 0,
                                        hasRight: c < C - 1,
                                    }),
                                }),
                            ],
                        }),
                    });
                });
            var al = a(64284),
                as = a(12816),
                ar = a(76675),
                an = a(28830),
                ao = a(84384),
                ad = a(81892),
                ac = a.n(ad);
            let au = (e) => {
                var t;
                let { slide: a, isVisible: i } = e,
                    { ref: l, intersectionPropertyId: s } = (0, an.n)(),
                    r = (0, Y.e)(),
                    { from: n } = (0, ao.f)({ pageId: as._Q.TRAILER_OF_THE_YEAR, blockId: al.U.DEFAULT }),
                    o = (0, ar.b)(),
                    { isActive: d } = (0, R.JO)(),
                    c = null == r ? void 0 : r.getState(X.V.TRAILER).queueState.entityList.value,
                    u = (0, x.useMemo)(
                        () =>
                            a.entitiesData &&
                            c &&
                            a.entitiesData.every((e, t) => {
                                var a;
                                return e.meta.id === (null == (a = c[t]) ? void 0 : a.entity.data.meta.id);
                            }),
                        [a.entitiesData, c],
                    ),
                    v = i && a.hasTrailer && (!u || (null == r ? void 0 : r.getState(X.V.TRAILER).playerState.status.value) !== b.MT.PLAYING),
                    p = v && (null == r || null == (t = r.getState(X.V.TRAILER).currentContext.value) ? void 0 : t.data.meta.id) === a.id;
                return (
                    (0, x.useEffect)(() => {
                        if (p)
                            return void r.restartContext({ playAfterRestart: !0, queueParams: { index: 0 }, entitiesData: a.entitiesData }, X.V.TRAILER).then(() => {
                                o(!0);
                            });
                        v &&
                            (null == r ||
                                r
                                    .playContext(
                                        {
                                            contextData: { type: U.K.Various, overrideContextType: z.b.Other, trailer: !0, meta: { id: a.id }, from: n },
                                            queueParams: { index: 0 },
                                            entitiesData: a.entitiesData,
                                            loadContextMeta: !1,
                                        },
                                        X.V.TRAILER,
                                    )
                                    .then(() => {
                                        o(!0);
                                    }));
                    }, [n, o, v, p, a.entitiesData, a.id, r]),
                    (0, _.jsx)(H.t, {
                        className: (0, m.$)(ac().root, { [ac().root_isActive]: d }),
                        radius: 'l',
                        tabIndex: 0,
                        'data-intersection-property-id': s,
                        ref: l,
                        children: (0, _.jsx)(ai, { slide: a, isActive: d }),
                    })
                );
            };
            var a_ = a(55988),
                am = a.n(a_);
            let av = (0, v.PA)((e) => {
                let { items: t } = e,
                    {
                        settings: { isMobile: a },
                        slides: i,
                    } = (0, P.g)(),
                    { formatMessage: l } = (0, p.A)(),
                    { state: s, toggleTrue: r } = (0, j.e)(!1),
                    n = (0, R.Mn)(),
                    o = (0, O.f)(),
                    d = (0, x.useRef)(!1),
                    [c, u] = (0, x.useState)(!0),
                    [v, h] = (0, x.useState)(!1);
                ((0, x.useEffect)(
                    () => (
                        r(),
                        () => {
                            (null == n || n.slideTo(0), i.setActiveSlide(0));
                        }
                    ),
                    [r, n, i],
                ),
                    (0, x.useEffect)(() => {
                        i.isLoaded && !d.current && (o(), (d.current = !0));
                    }, [i.isLoaded, o]));
                let C = (0, x.useCallback)(
                    (e) => {
                        (u(e.isBeginning), h(e.isEnd), i.setActiveSlide(e.activeIndex));
                    },
                    [i],
                );
                return (0, _.jsx)('div', {
                    className: (0, m.$)(am().root, { [am().root_visible]: s }),
                    'data-test-id': S.e8.slider.SLIDES_SLIDER,
                    children: (0, _.jsxs)(R.RC, {
                        direction: 'vertical',
                        centeredSlides: !a,
                        slidesPerView: 'auto',
                        spaceBetween: 16,
                        className: am().container,
                        keyboard: { enabled: !0 },
                        modules: [y.s3, y.Jq, y.FJ],
                        onActiveIndexChange: C,
                        a11y: { enabled: !0, containerMessage: l({ id: 'page.results-of-the-year' }) },
                        mousewheel: { thresholdDelta: 30, thresholdTime: 500 },
                        children: [
                            t.map((e, a) => {
                                var l, s, r;
                                return (0, _.jsx)(
                                    R.qr,
                                    {
                                        children: (0, _.jsx)(k.F, {
                                            blockPosX: 1,
                                            blockPosY: a + 1,
                                            blockType: null == (l = e.content) ? void 0 : l.type,
                                            blockId: e.id,
                                            mainObjectId: i.mainObjectId,
                                            mainObjectType: I.DomainObjectType.Slide,
                                            children: (0, _.jsx)(w.B, {
                                                objectType: I.DomainObjectType.SlideContent,
                                                objectId: ((e, t) => {
                                                    var a, i, l, s, r, n, o, d, c, u, _, m, v, x, p, h;
                                                    if (!e) return '';
                                                    switch (e.type) {
                                                        case g.x.CHART:
                                                        case g.x.CHART_FAVORITES:
                                                            return null != (i = null == (a = e.data) ? void 0 : a.description) ? i : '';
                                                        case g.x.CAROUSEL:
                                                            return null != (r = null == (s = e.data) || null == (l = s.items[t]) ? void 0 : l.data.title) ? r : '';
                                                        case g.x.COLLAGE:
                                                            return null !=
                                                                (d = null == (o = e.data.items[t]) || null == (n = o.bottomBlock.data.items[0]) ? void 0 : n.data.title)
                                                                ? d
                                                                : '';
                                                        case g.x.LINEUP:
                                                            return null != (u = null == (c = e.data.items[t]) ? void 0 : c.data.contentDescription) ? u : '';
                                                        case g.x.STATS:
                                                            return null != (m = null == (_ = e.data) ? void 0 : _.header) ? m : '';
                                                        case g.x.LUMEN:
                                                            return null != (x = null == (v = e.data.query) ? void 0 : v.text) ? x : '';
                                                        case g.x.CHART_ARTIST:
                                                        case g.x.TEXT_EXTENDED:
                                                        case g.x.PAY_CARD:
                                                        case g.x.SINGLE_ENTITY:
                                                        case g.x.TEXT:
                                                        case g.x.THEN_NOW_COMPARISON:
                                                            return null != (h = null == (p = e.data) ? void 0 : p.title) ? h : '';
                                                        default:
                                                            return '';
                                                    }
                                                })(e.content, null != (s = e.carouselIndex) ? s : 0),
                                                objectPosX: (null != (r = e.carouselIndex) ? r : 0) + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, _.jsx)(au, { isVisible: i.activeSlide === a, slide: e }),
                                            }),
                                        }),
                                    },
                                    e.id,
                                );
                            }),
                            (0, _.jsx)(D, { isFirstSlide: c, isLastSlide: v }),
                        ],
                    }),
                });
            });
            var ax = a(50355),
                ap = a(78793),
                ah = a(99984),
                aC = a(90780),
                aT = a(65523),
                aI = a(4476),
                aS = a(59844),
                ag = a(46777),
                aA = a(4370),
                aE = a(95210),
                aN = a(97956),
                aL = a(74773),
                af = a(70400),
                ab = a.n(af);
            function ay(e, t) {
                return (e === aL.G.RESOLVE || e === aL.G.REJECT) && 0 === t.length;
            }
            let aR = (0, v.PA)((e) => {
                var t;
                let { slidesConsumer: a, artistId: i, podcastId: l, campaignId: s } = e,
                    { formatMessage: r } = (0, p.A)(),
                    { slides: n, experiments: o, sonataState: d, settings: c, lumen: u } = (0, P.g)(),
                    v = (0, Y.e)(),
                    y = o.checkExperiment(aN.z.WebNextSlidesPage, 'on'),
                    R = !(null == (t = c.browserInfo) ? void 0 : t.isMobile) || !c.browserInfo.isTouch,
                    j = null == v ? void 0 : v.getState(X.V.TRAILER),
                    O = (0, x.useRef)(1),
                    w = (0, A.c)((e) => {
                        null == v || v.setExponentVolume(e, X.V.TRAILER);
                    }),
                    B = (0, A.c)(() => {
                        null == v || v.pause(X.V.TRAILER);
                    });
                (0, x.useEffect)(() => {
                    (w(1), n.setIsMuted(!1));
                }, [w, n, v]);
                let { canBack: M, moveBack: D } = (0, ag.J)(aA.Z.main.href),
                    U = (0, eI.Z)(aA.Z.main.href);
                ((0, x.useEffect)(
                    () => () => {
                        (n.resetUser(), n.resetArtist(), n.resetPodcast(), n.resetSpecial(), n.resetKids(), B());
                    },
                    [B, n],
                ),
                    y || (0, C.notFound)());
                let z = ((e) => {
                    let t = (0, aC.st)(),
                        a = (0, aT.U)(),
                        { hash: i } = (0, aC.gf)();
                    return (0, A.c)((l) => {
                        if (!t) return;
                        let s = { hash: i, pageId: I.AppScreen.SlidesScreen, mainObjectType: I.DomainObjectType.Slide, mainObjectId: e },
                            r = (0, ap.F)({ params: s, logger: a, context: 'useSendEventOnSlidesOpenedOrClosed' });
                        r && (l ? (0, ah.w5)(t.evgenInstance, r) : (0, ah.XB)(t.evgenInstance, r));
                    });
                })(n.mainObjectId);
                (0, x.useEffect)(
                    () => (
                        z(!0),
                        () => {
                            z(!1);
                        }
                    ),
                    [z],
                );
                let H = (0, x.useMemo)(() => {
                        switch (a) {
                            case ax.z.USER:
                                return n.userItems;
                            case ax.z.ARTIST:
                                return n.artistItems;
                            case ax.z.PODCAST:
                                return n.podcastItems;
                            case ax.z.SPECIAL:
                                return n.specialItems;
                            case ax.z.KIDS:
                                return n.kidsItems;
                        }
                    }, [n.artistItems, n.kidsItems, n.podcastItems, n.specialItems, n.userItems, a]),
                    F = H.some((e) => e.background.withSound || e.hasTrailer),
                    V = H.some((e) => {
                        var t;
                        return (null == (t = e.content) ? void 0 : t.type) === g.x.LUMEN;
                    });
                ((0, x.useEffect)(() => {
                    u.isEnabled && u.isNeededToLoad && V && u.getData();
                }, [u, u.isEnabled, u.isNeededToLoad, V]),
                    (0, x.useEffect)(() => {
                        F && d.status === b.MT.PLAYING && (null == v || v.togglePause());
                    }, [F, v, d.status]),
                    (0, x.useEffect)(() => {
                        if (y)
                            switch (a) {
                                case ax.z.USER:
                                    ay(n.userSlidesLoadingState, H) && (0, C.notFound)();
                                    break;
                                case ax.z.ARTIST:
                                    ay(n.artistSlidesLoadingState, H) && (0, C.notFound)();
                                    break;
                                case ax.z.PODCAST:
                                    ay(n.podcastSlidesLoadingState, H) && (0, C.notFound)();
                                    break;
                                case ax.z.SPECIAL:
                                    ay(n.specialSlidesLoadingState, H) && (0, C.notFound)();
                                    break;
                                case ax.z.KIDS:
                                    ay(n.kidsSlidesLoadingState, H) && (0, C.notFound)();
                            }
                        else (0, C.notFound)();
                    }, [
                        o,
                        y,
                        H,
                        H.length,
                        n.artistSlidesLoadingState,
                        n.podcastSlidesLoadingState,
                        n.userSlidesLoadingState,
                        n.specialSlidesLoadingState,
                        a,
                        n.kidsSlidesLoadingState,
                    ]),
                    (0, aE.N)(!0));
                let G = (0, x.useMemo)(() => {
                        var e;
                        let t,
                            a = null == (e = H[n.activeSlide]) ? void 0 : e.slideColor;
                        if (a) {
                            let { r: e, g: i, b: l } = (0, T.E2)(a);
                            t = 'rgba('.concat(e, ', ').concat(i, ', ').concat(l, ', 0.5)');
                        }
                        return { '--card-color-enabled_variant': a, '--card-color-enabled': t, '--logo-color': a };
                    }, [H, H.length, n.activeSlide]),
                    K = (0, x.useCallback)(() => {
                        let e = null == j ? void 0 : j.playerState.exponentVolume.value;
                        void 0 !== e && (n.toggleMute(), 0 !== e ? ((O.current = e), w(0)) : w(O.current));
                    }, [w, n, null == j ? void 0 : j.playerState.exponentVolume.value]),
                    $ = (0, A.c)(() => {
                        M ? D() : U();
                    }),
                    Z = n.isMuted ? 'volumeOff' : 'volume',
                    q = r(n.isMuted ? { id: 'player-actions.volume-off' } : { id: 'player-actions.volume-on' });
                switch (a) {
                    case ax.z.USER:
                        n.userSlidesLoadingState === aL.G.IDLE && (0, x.use)(n.getUserSlides());
                        break;
                    case ax.z.ARTIST:
                        i && n.artistSlidesLoadingState === aL.G.IDLE && (0, x.use)(n.getArtistSlides({ artistId: i }));
                        break;
                    case ax.z.PODCAST:
                        l && n.podcastSlidesLoadingState === aL.G.IDLE && (0, x.use)(n.getPodcastSlides({ podcastId: Number(l) }));
                        break;
                    case ax.z.SPECIAL:
                        s && n.specialSlidesLoadingState === aL.G.IDLE && (0, x.use)(n.getSpecialSlides({ campaignId: s }));
                        break;
                    case ax.z.KIDS:
                        n.kidsSlidesLoadingState === aL.G.IDLE && (0, x.use)(n.getKidsSlides());
                }
                return (0, _.jsx)(aI.j, {
                    children: (0, _.jsx)(aS.n, {
                        pageId: as._Q.SLIDES_SCREEN,
                        children: (0, _.jsxs)('div', {
                            className: ab().root,
                            style: G,
                            'data-test-id': S.Xk.slides.SLIDES_PAGE,
                            children: [
                                (0, _.jsx)(L.q, { children: (0, _.jsx)(f.DZ, { variant: 'h1', children: (0, _.jsx)(h.A, { id: 'page.results-of-the-year' }) }) }),
                                (0, _.jsxs)('header', {
                                    className: ab().header,
                                    'data-test-id': S.Xk.slides.SLIDES_HEADER,
                                    children: [
                                        (null == H ? void 0 : H.length) > 0 &&
                                            (0, _.jsxs)('div', {
                                                className: ab().slidesResult,
                                                'data-test-id': S.Xk.slides.SLIDES_COUNTER,
                                                children: [
                                                    (0, _.jsx)(f.HL, {
                                                        variant: 'span',
                                                        className: ab().counterActiveItem,
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        'data-test-id': S.Xk.slides.SLIDES_COUNTER_CURRENT,
                                                        children: Number(n.activeSlide) + 1,
                                                    }),
                                                    (0, _.jsx)(f.HL, {
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        className: ab().counterItem,
                                                        children: '/',
                                                    }),
                                                    (0, _.jsx)(f.HL, {
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        className: ab().counterItem,
                                                        'data-test-id': S.Xk.slides.SLIDES_COUNTER_TOTAL,
                                                        children: null == H ? void 0 : H.length,
                                                    }),
                                                ],
                                            }),
                                        R &&
                                            F &&
                                            (0, _.jsx)(E.$, {
                                                'aria-label': q,
                                                variant: 'text',
                                                radius: 'round',
                                                size: 'xxxs',
                                                icon: (0, _.jsx)(N.I, { size: 'xs', className: ab().icon, variant: Z }),
                                                onClick: K,
                                                className: (0, m.$)(ab().button, ab().volumeButton),
                                                withRipple: !1,
                                                'data-test-id': S.Xk.slides.SLIDES_VOLUME_BUTTON,
                                            }),
                                        (0, _.jsx)(E.$, {
                                            'aria-label': r({ id: 'navigation.go-back' }),
                                            radius: 'round',
                                            size: 'xs',
                                            icon: (0, _.jsx)(N.I, { size: 'xs', variant: 'close' }, 'handleBackIcon'),
                                            onClick: $,
                                            className: (0, m.$)(ab().button, ab().desktopBackButton),
                                            role: 'link',
                                            'data-test-id': S.Xk.slides.SLIDES_CLOSE_BUTTON,
                                        }),
                                        (0, _.jsx)(E.$, {
                                            variant: 'text',
                                            'aria-label': r({ id: 'navigation.go-back' }),
                                            radius: 'round',
                                            size: 'xs',
                                            icon: (0, _.jsx)(N.I, { size: 'xs', variant: 'arrowLeft' }, 'handleBackIcon'),
                                            onClick: $,
                                            className: (0, m.$)(ab().button, ab().mobileBackButton),
                                            role: 'link',
                                            'data-test-id': S.Xk.slides.SLIDES_BACK_BUTTON,
                                        }),
                                    ],
                                }),
                                (0, _.jsx)(k.F, {
                                    mainObjectType: I.DomainObjectType.Slide,
                                    mainObjectId: n.mainObjectId,
                                    blockType: I.DomainObjectType.Slide,
                                    blockId: n.mainObjectId,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    objectsCount: H.length,
                                    children: (0, _.jsx)(av, { items: H }),
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        13876: (e) => {
            e.exports = { root: 'Carousel_root__2FSoC', swiper: 'Carousel_swiper__ivHi0', slide: 'Carousel_slide__wgnHc', wrapper: 'Carousel_wrapper__ruBr5' };
        },
        14828: (e) => {
            e.exports = { root: 'StatsContent_root__yJVzS', text: 'StatsContent_text__l2xi_' };
        },
        16226: (e) => {
            e.exports = {
                root: 'LineupContent_root__1ryY_',
                carousel: 'LineupContent_carousel__0n_iU',
                slide: 'LineupContent_slide__WMsD2',
                slideActive: 'LineupContent_slideActive__GGmyR',
                meta: 'LineupContent_meta__ad63g',
                description: 'LineupContent_description__Gyg86',
            };
        },
        18684: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => C });
            var i = a(53548),
                l = a(78793),
                s = a(92716),
                r = a(54577),
                n = a(90780),
                o = a(79070),
                d = a(65523),
                c = a(42139),
                u = a(12816),
                _ = a(34500),
                m = a(57649),
                v = a(46166),
                x = a(14518),
                p = a(73442),
                h = a(91248);
            let C = () => {
                let e = (0, n.st)(),
                    t = (0, d.U)(),
                    { hash: a } = (0, n.gf)(),
                    { pageId: C, pageStyle: T, pagePlacement: I } = (0, x.$)(),
                    { tabId: S, tabPos: g, isTabSelectedByDefault: A } = (0, h.R)(),
                    { offsetBlockPosY: E } = (0, m.u)(),
                    { blockId: N, blockType: L, blockPosX: f, blockPosY: b, mainObjectId: y, mainObjectType: R } = (0, _.N)(),
                    { objectId: j, objectPosX: O, objectPosY: k, objectType: w, objectsCount: P } = (0, v.J)(),
                    { skeleton: B } = (0, p.b)(),
                    M = (0, o.L)(() => (void 0 !== E && void 0 !== b ? E + b : b));
                return (0, i.useCallback)(
                    (i) => {
                        let { objectId: n, objectType: o, actionType: d, userInteractionType: _, objectPosX: m, objectPosY: v, objectCount: x } = i;
                        if (!e || !C || !u.xK.includes(C) || !u.fD.includes(C)) return;
                        let p = c.F[C];
                        if (!p) return;
                        let h = {
                            hash: a,
                            pageId: p,
                            pageStyle: T || s.PageStyles.Fullscreen,
                            pagePlacement: I || s.PagePlacements.Fullscreen,
                            entityType: L,
                            entityId: N,
                            entityPosX: f,
                            entityPosY: M,
                            objectId: null != n ? n : j,
                            objectType: null != o ? o : w,
                            objectPosX: null != m ? m : O,
                            objectPosY: null != v ? v : k,
                            objectsCount: null != x ? x : P,
                            actionType: d,
                            userInteractionType: null != _ ? _ : s.UserInteractionType.Tap,
                        };
                        (u.qG.includes(C) && ((h.tabId = S), (h.tabPos = g), (h.isTabSelectedByDefault = A)),
                            B && (h.skeletonId = B),
                            y && R && ((h.mainObjectType = R), (h.mainObjectId = y)));
                        let E = (0, l.F)({ params: h, logger: t, context: 'useSendEventOnBlockActionPerformed' });
                        E && (0, r.h_)(e.evgenInstance, E);
                    },
                    [j, w, O, k, P, e, C, a, T, I, L, N, f, M, B, y, R, t, S, g, A],
                );
            };
        },
        20585: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => i });
            var i = (function (e) {
                return ((e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e);
            })({});
        },
        22846: (e) => {
            e.exports = {
                root: 'SingleEntityContent_root__N2vvp',
                description: 'SingleEntityContent_description__3pg2A',
                smallRoundCover: 'SingleEntityContent_smallRoundCover__jicWf',
                smallRoundCover_withShadow: 'SingleEntityContent_smallRoundCover_withShadow__cjRgd',
                cover: 'SingleEntityContent_cover__zeDqH',
                cover_withShadow: 'SingleEntityContent_cover_withShadow__tMIE1',
                cover_withSmallRoundCoverOnCover: 'SingleEntityContent_cover_withSmallRoundCoverOnCover__8kG3v',
                cover_small: 'SingleEntityContent_cover_small___jnS4',
                meta: 'SingleEntityContent_meta__XxJqA',
                meta_withCover: 'SingleEntityContent_meta_withCover__Bp0Tx',
                image: 'SingleEntityContent_image__P6nK2',
                trailer: 'SingleEntityContent_trailer__uYOk0',
                subtitle: 'SingleEntityContent_subtitle__KuJyA',
            };
        },
        24546: (e) => {
            e.exports = { root: 'MaskedImageWithBackground_root__jLo5w', background: 'MaskedImageWithBackground_background__9PdlN' };
        },
        25921: (e) => {
            e.exports = {
                buttonsContainer: 'SlideButtons_buttonsContainer__82Z3p',
                contractButton: 'SlideButtons_contractButton__46CMy',
                editButton: 'SlideButtons_editButton__r2XNo',
                iconButton: 'SlideButtons_iconButton__oC0it',
                arrowLeftButton: 'SlideButtons_arrowLeftButton__LL3LY',
                arrowRightButton: 'SlideButtons_arrowRightButton__405wl',
                mainButtonContainer: 'SlideButtons_mainButtonContainer__4htPC',
            };
        },
        26128: (e) => {
            e.exports = { root: 'CommonButton_root__thXs_' };
        },
        28163: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => C });
            var i = a(53548),
                l = a(78793),
                s = a(54577),
                r = a(90780),
                n = a(79070),
                o = a(65523),
                d = a(42139),
                c = a(12816),
                u = a(34500),
                _ = a(57649),
                m = a(60840),
                v = a(14518),
                x = a(73442),
                p = a(91248);
            let h = [
                    c._Q.HOME,
                    c._Q.LANDING,
                    c._Q.NON_MUSIC,
                    c._Q.OWN_COLLECTION,
                    c._Q.SEARCH,
                    c._Q.ARTIST,
                    c._Q.CONCERTS,
                    c._Q.CONCERT,
                    c._Q.ALBUM,
                    c._Q.PLAYLIST,
                    c._Q.SLIDES_SCREEN,
                    c._Q.PROMOLANDING_ALBUM,
                    c._Q.WAVE_LANDING_SCREEN,
                ],
                C = () => {
                    let e = (0, i.useRef)(!1),
                        t = (0, r.st)(),
                        a = (0, o.U)(),
                        { hash: C } = (0, r.gf)(),
                        { pageId: T } = (0, v.$)(),
                        { tabId: I, tabPos: S, isTabSelectedByDefault: g } = (0, p.R)(),
                        { offsetBlockPosY: A } = (0, _.u)(),
                        { blockId: E, blockType: N, blockPosX: L, blockPosY: f, mainObjectType: b, mainObjectId: y, objectsCount: R } = (0, u.N)(),
                        { filterKey: j, filterValue: O, filterPos: k } = (0, m.G)(),
                        { skeleton: w } = (0, x.b)(),
                        P = (0, n.L)(() => (void 0 !== A && void 0 !== f ? A + f : f));
                    return (0, i.useCallback)(() => {
                        if (!t || !T || !c.xK.includes(T) || !h.includes(T) || e.current) return;
                        let i = { hash: C, pageId: d.F[T], entityType: N, entityId: E, entityPosX: L, entityPosY: P, objectsCount: R };
                        (void 0 !== j && ((i.filterKey = j), (i.filterValue = O), (i.filterPos = k)),
                            c.qG.includes(T) && ((i.tabId = I), (i.tabPos = S), (i.isTabSelectedByDefault = g)),
                            w && (i.skeletonId = w),
                            y && b && ((i.mainObjectType = b), (i.mainObjectId = y)));
                        let r = (0, l.F)({ params: i, logger: a, context: 'useSendEventOnBlockLoaded' });
                        r && ((0, s.uY)(t.evgenInstance, r), (e.current = !0));
                    }, [t, T, C, N, E, L, P, j, O, k, R, w, y, b, a, I, S, g]);
                };
        },
        28523: (e) => {
            e.exports = {
                root: 'ChartItem_root__nAl8B',
                animation: 'ChartItem_animation__P8XVq',
                cover: 'ChartItem_cover__jybex',
                order: 'ChartItem_order__rTmAw',
                image: 'ChartItem_image__enYFm',
                meta: 'ChartItem_meta__apT_y',
                text: 'ChartItem_text__qRsWe',
                textVariant: 'ChartItem_textVariant__0NuuM',
                subTitle: 'ChartItem_subTitle__J2Znt',
                stat: 'ChartItem_stat__ofy5i',
                statValueContainer: 'ChartItem_statValueContainer__pn9Ck',
                statValue: 'ChartItem_statValue__fu5js',
            };
        },
        32041: (e) => {
            e.exports = {
                root: 'Background_root__s7ccu',
                media_withPersonalColor: 'Background_media_withPersonalColor__KuaB0',
                firstFrame: 'Background_firstFrame__c5Gw0',
                lastFrame: 'Background_lastFrame__sfpL7',
                media: 'Background_media__8DaeZ',
                shareBackground: 'Background_shareBackground__vmgH2',
                hidden: 'Background_hidden__7fdP5',
                backgroundFadeIn: 'Background_backgroundFadeIn__6yd3z',
                'background-fade-in': 'Background_background-fade-in__AJNN6',
            };
        },
        35199: (e) => {
            e.exports = { root: 'LineupContentItem_root__h3Olw', background: 'LineupContentItem_background__w1inW', content: 'LineupContentItem_content__fvXBe' };
        },
        35948: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => i });
            let i = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        },
        38860: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => s });
            var i = a(53548),
                l = a(41168);
            let s = () => (0, i.useContext)(l.P);
        },
        40251: (e) => {
            e.exports = {
                header: 'LineupFestivalImageItem_header__tQ4ho',
                metaLabel: 'LineupFestivalImageItem_metaLabel__Rvm_1',
                logo: 'LineupFestivalImageItem_logo__NQaIS',
                festivalImage: 'LineupFestivalImageItem_festivalImage__N73jB',
                festivalTitle: 'LineupFestivalImageItem_festivalTitle__CT_Un',
                artists: 'LineupFestivalImageItem_artists__0Rh7A',
                text: 'LineupFestivalImageItem_text__6_ilm',
            };
        },
        40849: (e) => {
            e.exports = { root: 'LineupArtistsWrapper_root__RAY_j' };
        },
        41168: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => i });
            let i = (0, a(53548).createContext)(null);
        },
        41731: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => s, n: () => l });
            var i = a(53548);
            let l = (0, i.createContext)({ isVisible: !1 }),
                s = () => (0, i.useContext)(l);
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
        42737: (e) => {
            e.exports = { root: 'SliderControls_root__v_ofj', control: 'SliderControls_control__E3joM', top: 'SliderControls_top__HN5gZ' };
        },
        43534: (e) => {
            e.exports = {
                root: 'ArtistsContent_root__Jpd8M',
                covers: 'ArtistsContent_covers__OeO2T',
                cover: 'ArtistsContent_cover__rzlO2',
                image: 'ArtistsContent_image__okuHk',
            };
        },
        44989: (e) => {
            e.exports = {
                header: 'LineupFestivalItem_header__VpBfn',
                headerLogo: 'LineupFestivalItem_headerLogo__tVwIZ',
                metaLabel: 'LineupFestivalItem_metaLabel__hc66P',
                festivalImage: 'LineupFestivalItem_festivalImage__JGaxU',
                artist: 'LineupFestivalItem_artist__ZTsFm',
                artists: 'LineupFestivalItem_artists__YKO8W',
                artistList: 'LineupFestivalItem_artistList__FpJ5r',
            };
        },
        45507: (e) => {
            e.exports = { root: 'SlideLogo_root__7H7nw' };
        },
        46476: (e) => {
            e.exports = {
                root: 'ChartArtistContent_root__OPxPJ',
                cover: 'ChartArtistContent_cover__flhXs',
                image: 'ChartArtistContent_image__D2isT',
                title: 'ChartArtistContent_title__a_d_4',
            };
        },
        46777: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => r });
            var i = a(55482),
                l = a(53548),
                s = a(46422);
            let r = (e) => {
                let t = (0, s.W)(),
                    a = (0, l.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    r = (0, l.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: a, moveForward: r };
            };
        },
        47786: (e) => {
            e.exports = { root: 'ChartContent_root__MFONP', text: 'ChartContent_text__cB18f' };
        },
        49397: (e) => {
            e.exports = { root: 'BaseNotificationError_root__FfGUZ', message: 'BaseNotificationError_message___W_xy' };
        },
        50355: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => i });
            var i = (function (e) {
                return ((e.USER = 'user'), (e.ARTIST = 'artist'), (e.PODCAST = 'podcast'), (e.SPECIAL = 'special'), (e.KIDS = 'kids'), e);
            })({});
        },
        50408: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => o });
            var i,
                l = a(53548),
                s = {
                    810: (e) => {
                        e.exports = i || (i = a.t(l, 2));
                    },
                },
                r = {},
                n = {};
            ((() => {
                (Object.defineProperty(n, '__esModule', { value: !0 }), (n.useForceUpdateRef = void 0));
                let e = (function e(t) {
                    var a = r[t];
                    if (void 0 !== a) return a.exports;
                    var i = (r[t] = { exports: {} });
                    return (s[t](i, i.exports, e), i.exports);
                })(810);
                n.useForceUpdateRef = () => {
                    let [t, a] = (0, e.useState)(null);
                    return [
                        t,
                        (0, e.useCallback)((e) => {
                            a((t) => (t !== e ? e : t));
                        }, []),
                    ];
                };
            })(),
                n.__esModule);
            var o = n.useForceUpdateRef;
        },
        55988: (e) => {
            e.exports = { root: 'Slider_root__T7EOX', root_visible: 'Slider_root_visible__b3Kqx', fade: 'Slider_fade__V7FGV', container: 'Slider_container__tZ0VH' };
        },
        57328: (e, t, a) => {
            'use strict';
            a.d(t, { WithAuth: () => x });
            var i = a(88800),
                l = a(84961),
                s = a(58390),
                r = a(65724),
                n = a(88969),
                o = a(29504),
                d = a(7628),
                c = a(42674),
                u = a.n(c);
            let _ = (0, l.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(o.DZ, {
                            className: (0, r.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(n.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(o.HL, {
                            className: (0, r.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(n.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(d.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = a(4370),
                v = a(72288);
            let x = (0, l.PA)((e) => {
                let { children: t, withRedirectToMainPage: a } = e,
                    { user: l } = (0, v.g)();
                return l.isAuthorized ? t : (a && (0, s.redirect)(m.Z.main.href), (0, i.jsx)(_, {}));
            });
        },
        59758: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { b: () => i }),
                (function (e) {
                    ((e.Album = 'album'), (e.Artist = 'artist'), (e.Playlist = 'playlist'), (e.Radio = 'fm_radio'), (e.Other = 'other'), (e.Search = 'search'));
                })(i || (i = {})));
        },
        59844: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => r });
            var i = a(88800),
                l = a(53548),
                s = a(90334);
            let r = (e) => {
                let { pageId: t, pageEntityId: a, displayReasonId: r, pageStyle: n, pagePlacement: o, children: d } = e,
                    c = (0, l.useMemo)(() => ({ pageId: t, pageEntityId: a, displayReasonId: r, pageStyle: n, pagePlacement: o }), [t, a, r, n, o]);
                return (0, i.jsx)(s.r.Provider, { value: c, children: d });
            };
        },
        64150: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { x: () => i }),
                (function (e) {
                    ((e.TEXT = 'TEXT'),
                        (e.TEXT_FACT = 'TEXT_FACT'),
                        (e.STATS = 'STATS'),
                        (e.CHART = 'CHART'),
                        (e.CHART_FAVORITES = 'CHART_FAVORITES'),
                        (e.SINGLE_ENTITY = 'SINGLE_ENTITY'),
                        (e.ARTISTS = 'ARTISTS'),
                        (e.CHART_ARTIST = 'CHART_ARTIST'),
                        (e.TEXT_EXTENDED = 'TEXT_EXTENDED'),
                        (e.THEN_NOW_COMPARISON = 'THEN_NOW_COMPARISON'),
                        (e.PAY_CARD = 'PAY_CARD'),
                        (e.CAROUSEL = 'CAROUSEL'),
                        (e.COLLAGE = 'COLLAGE'),
                        (e.LINEUP = 'LINEUP'),
                        (e.LUMEN = 'LUMEN'));
                })(i || (i = {})));
        },
        64284: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => i });
            var i = (function (e) {
                return (
                    (e.TRACK = 'track'),
                    (e.TRACK_LIST = 'track_list'),
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.RUP = 'rup'),
                    (e.MAIN = 'main'),
                    (e.RADIO = 'radio'),
                    (e.DISCOGRAPHY = 'discography'),
                    (e.CAROUSEL = 'carousel'),
                    (e.ALBUMS = 'albums'),
                    (e.COMPILATIONS = 'compilations'),
                    (e.PLAYLISTS = 'playlists'),
                    (e.ARTISTS = 'artists'),
                    (e.CLIPS = 'clips'),
                    (e.BLOCK = 'block'),
                    (e.DISCOVERY = 'discovery'),
                    (e.SIMILAR = 'similar'),
                    (e.SEARCH = 'search'),
                    (e.HISTORY = 'history'),
                    (e.DEFAULT = 'default'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.FILTERED = 'filtered'),
                    (e.SUGGESTED = 'suggested'),
                    (e.TRAILER = 'trailer'),
                    (e.DONATY = 'donaty'),
                    (e.BEST_RESULTS = 'best_results'),
                    (e.OPEN_BEST_RESULTS = 'open_best_results'),
                    (e.WHEEL = 'wheel'),
                    (e.Q2V = 'q2v'),
                    e
                );
            })({});
        },
        65523: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => n });
            var i = a(4086),
                l = a(41928),
                s = a(44084);
            let r = new WeakMap(),
                n = () =>
                    ((e) => {
                        if (e instanceof s.r) return e;
                        let t = r.get(e);
                        if (t) return t;
                        let a = {
                            log: (t, a) => e.info(t, a),
                            trace: (t, a) => e.trace(t, a),
                            debug: (t, a) => e.debug(t, a),
                            info: (t, a) => e.info(t, a),
                            warn: (t, a) => e.warn(t, a),
                            error: (t, a) => e.error(t, a),
                            fatal: (t, a) => e.fatal(t, a),
                            child: (t) => e.child(t),
                        };
                        return (r.set(e, a), a);
                    })((0, l.N)().get(i.Zf));
        },
        65568: (e) => {
            e.exports = { root: 'SlideCaption_root__JumhY' };
        },
        66943: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => c });
            var i = a(88800),
                l = a(65724),
                s = a(73170),
                r = a(29504),
                n = a(59304),
                o = a(49397),
                d = a.n(o);
            let c = (e) => {
                let { error: t, closeToast: a, className: o } = e;
                return (0, i.jsx)(n.$, {
                    className: (0, l.$)(d().root, o),
                    message: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(s.q, { children: (0, i.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, i.jsx)(r.HL, { className: d().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: a,
                });
            };
        },
        67990: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        69704: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => l, W: () => s });
            var i = a(53548);
            let l = (0, i.createContext)({ theme: null, setTheme: () => {} }),
                s = () => (0, i.useContext)(l);
        },
        70400: (e) => {
            e.exports = {
                root: 'SlidesPage_root__URM_B',
                header: 'SlidesPage_header__pnBx9',
                slidesResult: 'SlidesPage_slidesResult__neqIE',
                counterActiveItem: 'SlidesPage_counterActiveItem__Y_K9I',
                counterItem: 'SlidesPage_counterItem__3CqZW',
                button: 'SlidesPage_button__s9V8y',
                volumeButton: 'SlidesPage_volumeButton__HfFCM',
                desktopBackButton: 'SlidesPage_desktopBackButton__ae1Uj',
                mobileBackButton: 'SlidesPage_mobileBackButton__MwOgB',
            };
        },
        72863: (e) => {
            e.exports = {
                root: 'ChartBlock_root__GQF6w',
                root_spacer_m: 'ChartBlock_root_spacer_m__yVzU8',
                root_spacer_l: 'ChartBlock_root_spacer_l__wBImk',
                root_spacer_xxl: 'ChartBlock_root_spacer_xxl__cSNqe',
            };
        },
        73170: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => d });
            var i,
                l = a(53548),
                s = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (l && (l += ' '), (l += i));
                                            else for (a in t) t[a] && (l && (l += ' '), (l += a));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    7319: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var s in ((i = {}), t)) 'key' !== s && (i[s] = t[s]);
                            else i = t;
                            return { $$typeof: a, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    5531: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let l = a(4377),
                            s = a(5881),
                            r = a(810),
                            n = i(a(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: a, children: i, ...o } = e,
                                d = (0, s.clsx)(n.default.root, { [n.default.focusable]: a }, t);
                            return (0, r.isValidElement)(i)
                                ? (0, r.cloneElement)(i, { ...o, className: (0, s.clsx)(d, i.props.className) })
                                : (0, l.jsx)('span', { className: d, ...o, children: i });
                        };
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(l, 2));
                    },
                },
                r = {};
            function n(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var a = (r[e] = { exports: {} });
                return (s[e].call(a.exports, a, a.exports, n), a.exports);
            }
            ((n.d = (e, t) => {
                for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (n.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.SROnly = void 0));
                var e = n(5531);
                Object.defineProperty(o, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var d = o.SROnly;
            o.__esModule;
        },
        73171: (e, t, a) => {
            'use strict';
            a.d(t, { mf: () => o });
            var i,
                l = a(53548),
                s = {
                    810: (e) => {
                        e.exports = i || (i = a.t(l, 2));
                    },
                },
                r = {},
                n = {};
            ((() => {
                (Object.defineProperty(n, '__esModule', { value: !0 }), (n.useDynamicText = n.findOptimalFontSize = void 0));
                let e = (function e(t) {
                        var a = r[t];
                        if (void 0 !== a) return a.exports;
                        var i = (r[t] = { exports: {} });
                        return (s[t](i, i.exports, e), i.exports);
                    })(810),
                    t = (e) => {
                        ((e.style.wordBreak = 'keep-all'),
                            (e.style.overflowWrap = 'normal'),
                            (e.style.maxHeight = 'none'),
                            (e.style.height = 'auto'),
                            (e.style.overflow = 'visible'),
                            Array.from(e.children).forEach((e) => {
                                e instanceof HTMLElement && t(e);
                            }));
                    },
                    a = (e, t, a, i, l, s) => {
                        (e.style.setProperty('--dynamic-font-size', ''.concat(i, 'px')), e.style.setProperty('--dynamic-line-height', String(l)));
                        let r = 'number' == typeof s ? e.scrollHeight <= Math.min(s * i * l, a) + 1 : e.scrollHeight <= a + 1,
                            n = e.scrollWidth <= t + 1;
                        return r && n;
                    },
                    i = (e) => {
                        let { container: i, containerWidth: l, containerHeight: s, minFontSize: r, maxFontSize: n, lineHeight: o, maxLines: d, styleVariants: c } = e,
                            u = ((e, a, i) => {
                                let l = e.cloneNode(!0);
                                return (
                                    (l.style.cssText =
                                        '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                            a,
                                            'px !important;\n    ',
                                        )),
                                    t(l),
                                    l.style.setProperty('--dynamic-line-height', String(i)),
                                    document.body.appendChild(l),
                                    l
                                );
                            })(i, l, o);
                        try {
                            if (null == c ? void 0 : c.length) {
                                var _;
                                let e = [...c].sort((e, t) => t.fontSize - e.fontSize),
                                    t = null != (_ = e[e.length - 1]) ? _ : { fontSize: r, lineHeight: o };
                                for (let t of e) if (a(u, l, s, t.fontSize, t.lineHeight, d)) return { ...t, fits: !0 };
                                return { ...t, fits: !1 };
                            }
                            let e = r,
                                t = n,
                                i = null;
                            for (; e <= t;) {
                                let r = Math.floor((e + t) / 2);
                                a(u, l, s, r, o, d) ? ((i = r), (e = r + 1)) : (t = r - 1);
                            }
                            if (null === i) return { fontSize: r, lineHeight: o, fits: !1 };
                            return { fontSize: Math.max(r, i - 1), lineHeight: o, fits: !0 };
                        } finally {
                            u.remove();
                        }
                    };
                ((n.findOptimalFontSize = (e) => i(e).fontSize),
                    (n.useDynamicText = (t, a, l) => {
                        let { minFontSize: s, maxFontSize: r, lineHeight: n, maxLines: o, fallbackMaxLines: d, styleVariants: c } = a;
                        (0, e.useLayoutEffect)(() => {
                            if (null === t) return;
                            t.style.setProperty('--dynamic-line-height', String(n));
                            let e = () => {
                                    let e = t.clientWidth,
                                        a = t.clientHeight,
                                        u = t.childNodes.length > 0;
                                    if (0 === e || 0 === a || !u) return;
                                    let {
                                        maxLines: _,
                                        fontSize: m,
                                        lineHeight: v,
                                    } = ((e) => {
                                        let { fallbackMaxLines: t, maxLines: a } = e,
                                            l = i({ ...e, maxLines: a });
                                        if (void 0 === t || l.fits) return { maxLines: a, fontSize: l.fontSize, lineHeight: l.lineHeight };
                                        let s = i({ ...e, maxLines: t });
                                        return { maxLines: t, fontSize: s.fontSize, lineHeight: s.lineHeight };
                                    })({
                                        container: t,
                                        containerWidth: e,
                                        containerHeight: a,
                                        minFontSize: s,
                                        maxFontSize: r,
                                        lineHeight: n,
                                        maxLines: o,
                                        fallbackMaxLines: d,
                                        styleVariants: c,
                                    });
                                    (null == l || l(_),
                                        t.style.setProperty('--dynamic-font-size', ''.concat(m, 'px')),
                                        t.style.setProperty('--dynamic-line-height', String(v)));
                                },
                                a = new ResizeObserver(e),
                                u = new MutationObserver(e);
                            return (
                                a.observe(t),
                                u.observe(t, { childList: !0, characterData: !0, subtree: !0 }),
                                document.fonts.ready.then(e),
                                e(),
                                () => {
                                    (a.disconnect(), u.disconnect());
                                }
                            );
                        }, [t, l, d, n, r, o, s, c]);
                    }));
            })(),
                n.__esModule,
                n.findOptimalFontSize);
            var o = n.useDynamicText;
        },
        74773: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => i });
            var i = (function (e) {
                return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e);
            })({});
        },
        75914: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { m: () => i }),
                (function (e) {
                    ((e.WAVE = 'WAVE'), (e.ACTION = 'ACTION'), (e.SHARE = 'SHARE'), (e.SIMPLE = 'SIMPLE'), (e.LIKE = 'LIKE'));
                })(i || (i = {})));
        },
        76675: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => C });
            var i = a(53548),
                l = a(78793),
                s = a(54577),
                r = a(90780),
                n = a(79070),
                o = a(65523),
                d = a(42139),
                c = a(12816),
                u = a(34500),
                _ = a(57649),
                m = a(46166),
                v = a(14518),
                x = a(73442),
                p = a(91248);
            let h = [
                    c._Q.HOME,
                    c._Q.LANDING,
                    c._Q.NON_MUSIC,
                    c._Q.OWN_COLLECTION,
                    c._Q.SEARCH,
                    c._Q.CONCERTS,
                    c._Q.ALBUM,
                    c._Q.PLAYLIST,
                    c._Q.SLIDES_SCREEN,
                    c._Q.PROMOLANDING_ALBUM,
                    c._Q.WAVE_LANDING_SCREEN,
                    c._Q.COLLECTION_VIBE_ROOMS,
                    c._Q.MULTIVIBE_SENDING_INVITATION_SCREEN,
                    c._Q.MULTIVIBE_ACTION_SCREEN,
                    c._Q.MULTIVIBE_UNIFIED_SCREEN,
                ],
                C = () => {
                    let e = (0, r.st)(),
                        t = (0, o.U)(),
                        { hash: a } = (0, r.gf)(),
                        { pageId: C } = (0, v.$)(),
                        { tabId: T, tabPos: I, isTabSelectedByDefault: S } = (0, p.R)(),
                        { offsetBlockPosY: g } = (0, _.u)(),
                        { blockId: A, blockType: E, blockPosX: N, blockPosY: L, mainObjectId: f, mainObjectType: b } = (0, u.N)(),
                        { objectId: y, objectPosX: R, objectPosY: j, objectType: O, objectsCount: k } = (0, m.J)(),
                        { skeleton: w } = (0, x.b)(),
                        P = (0, n.L)(() => (void 0 !== g && void 0 !== L ? g + L : L));
                    return (0, i.useCallback)(
                        (i, r) => {
                            if (!e || !C || !c.xK.includes(C) || !i || !h.includes(C)) return;
                            let n = d.F[C];
                            if (!n) return;
                            let o = {
                                hash: a,
                                pageId: n,
                                entityType: E,
                                entityId: A,
                                entityPosX: N,
                                entityPosY: P,
                                objectId: null != r ? r : y,
                                objectType: O,
                                objectPosX: R,
                                objectPosY: j,
                                objectsCount: k,
                            };
                            (c.qG.includes(C) && ((o.tabId = T), (o.tabPos = I), (o.isTabSelectedByDefault = S)),
                                w && (o.skeletonId = w),
                                f && b && ((o.mainObjectType = b), (o.mainObjectId = f)));
                            let u = (0, l.F)({ params: o, logger: t, context: 'useSendEventOnBlockStarted' });
                            u && (0, s.er)(e.evgenInstance, u);
                        },
                        [e, C, a, E, A, N, P, y, O, R, j, k, w, f, b, t, T, I, S],
                    );
                };
        },
        77948: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => r });
            var i = a(88800),
                l = a(53548),
                s = a(90134);
            let r = (e) => {
                let { objectId: t, objectPosX: a, objectPosY: r, objectPos: n, objectType: o, objectsCount: d, mainObjectId: c, mainObjectType: u, children: _ } = e,
                    m = (0, l.useMemo)(
                        () => ({ objectId: t, objectPosX: a, objectPosY: r, objectPos: n, objectType: o, objectsCount: d, mainObjectId: c, mainObjectType: u }),
                        [t, a, r, n, o, d, c, u],
                    );
                return (0, i.jsx)(s.l.Provider, { value: m, children: _ });
            };
        },
        78275: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => o });
            var i,
                l = a(53548),
                s = {
                    810: (e) => {
                        e.exports = i || (i = a.t(l, 2));
                    },
                },
                r = {},
                n = {};
            ((() => {
                (Object.defineProperty(n, '__esModule', { value: !0 }), (n.useToggle = void 0));
                let e = (function e(t) {
                    var a = r[t];
                    if (void 0 !== a) return a.exports;
                    var i = (r[t] = { exports: {} });
                    return (s[t](i, i.exports, e), i.exports);
                })(810);
                n.useToggle = (t) => {
                    let [a, i] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        i(t);
                    }, [t]);
                    let l = (0, e.useCallback)(() => {
                            i((e) => !e);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            i(!0);
                        }, []),
                        r = (0, e.useCallback)(() => {
                            i(!1);
                        }, []);
                    return { state: a, toggle: l, setState: i, toggleTrue: s, toggleFalse: r };
                };
            })(),
                n.__esModule);
            var o = n.useToggle;
        },
        79390: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { f: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        81438: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => r });
            var i = a(72288),
                l = a(8655),
                s = a(69704);
            let r = () => {
                var e, t, a, r, n, o;
                let { lumen: d } = (0, i.g)(),
                    { theme: c } = (0, s.W)(),
                    u = null != c ? c : l.S.Dark,
                    _ = null == (e = d.themes) ? void 0 : e[u],
                    m = d.getFallbackImage()[u],
                    v = null != (r = null == _ ? void 0 : _.cover.uri) ? r : m;
                return {
                    cover: v,
                    fullCover: null != (n = null == _ || null == (t = _.fullCover) ? void 0 : t.uri) ? n : v,
                    faceCover: null != (o = null == _ || null == (a = _.faceCover) ? void 0 : a.uri) ? o : v,
                    solidColor: null == _ ? void 0 : _.solidColor,
                    fallbackImage: m,
                };
            };
        },
        81877: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => o });
            var i = a(88800),
                l = a(53548),
                s = a(17392),
                r = a(90688);
            let n = (e) => {
                    let { isAvailable: t = !0, className: a, fallbackIconSize: l, forwardRef: n, ...o } = e;
                    return t
                        ? (0, i.jsx)(r._V, { ref: n, className: a, fallbackIconSize: l, ...o, 'data-test-id': s.S7.ENTITY_COVER_IMAGE })
                        : (0, i.jsx)(r.Ab, { className: a, iconSize: l, iconVariant: 'unavailable', 'data-test-id': s.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                o = (0, l.forwardRef)((e, t) => (0, i.jsx)(n, { forwardRef: t, ...e }));
        },
        81892: (e) => {
            e.exports = { root: 'Slide_root__x5JEM', root_isActive: 'Slide_root_isActive__CKUSv' };
        },
        82204: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => r });
            var i = a(88800),
                l = a(53548),
                s = a(43620);
            let r = (e) => {
                let {
                        blockId: t,
                        blockType: a,
                        blockIdForFrom: r,
                        blockPosX: n,
                        blockPosY: o,
                        objectsCount: d,
                        mainObjectType: c,
                        mainObjectId: u,
                        children: _,
                        displayReasonId: m,
                    } = e,
                    v = (0, l.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: a,
                            blockIdForFrom: r,
                            blockPosX: n,
                            blockPosY: o,
                            objectsCount: d,
                            mainObjectType: c,
                            mainObjectId: u,
                            displayReasonId: m,
                        }),
                        [t, a, r, n, o, d, c, u, m],
                    );
                return (0, i.jsx)(s.p.Provider, { value: v, children: _ });
            };
        },
        82530: (e) => {
            e.exports = { root: 'MaskedImage_root__Dquqg' };
        },
        84384: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => _ });
            var i = a(53548);
            a(30282);
            var l = a(34500),
                s = a(14518),
                r = a(58390),
                n = a(64284),
                o = a(18593),
                d = a(12816),
                c = a(1344);
            let u = [n.U.TRAILER],
                _ = (e) => {
                    let t = ((e) => {
                            let t = null == e ? void 0 : e.pageId,
                                a = null == e ? void 0 : e.blockId,
                                r = null == e ? void 0 : e.pageEntityId,
                                { pageId: n, pageEntityId: o } = (0, s.$)(),
                                { blockId: d } = (0, l.N)();
                            return (0, i.useMemo)(() => ({ pageId: null != t ? t : n, blockId: null != a ? a : d, pageEntityId: null != r ? r : o }), [a, d, t, r, n, o]);
                        })(e),
                        a = ((e) => {
                            let { pageId: t, blockId: a } = e;
                            return (0, i.useMemo)(() => {
                                let e = ['desktop'];
                                return (t && e.push(t.toLowerCase()), a && e.push(a.toLowerCase()), e.push('default'), e.join('-'));
                            }, [a, t]);
                        })(t),
                        n = ((e) => {
                            let { pageId: t, blockId: a, pageEntityId: l, contextType: s, contextId: n, utmForPageIds: _ } = e,
                                m = (0, r.useSearchParams)();
                            return (0, i.useMemo)(
                                () =>
                                    ((e) => {
                                        let { searchParams: t, pageId: a, pageEntityId: i, utmForPageIds: l, contextId: s, contextType: r, blockId: n } = e,
                                            _ = t && Object.fromEntries(t),
                                            m = ((e) => {
                                                switch (e) {
                                                    case d._Q.ALBUM:
                                                    case d._Q.PROMOLANDING_ALBUM:
                                                    case d._Q.AUDIOBOOK:
                                                    case d._Q.PODCAST:
                                                        return o.K.Album;
                                                    case d._Q.ARTIST:
                                                    case d._Q.ARTIST_TRACKS:
                                                    case d._Q.ARTIST_ALBUMS:
                                                    case d._Q.ARTIST_DISCOGRAPHY:
                                                        return o.K.Artist;
                                                    case d._Q.PLAYLIST:
                                                        return o.K.Playlist;
                                                    default:
                                                        return null;
                                                }
                                            })(a);
                                        return !m || !_ || !i || u.includes(n)
                                            ? null
                                            : (Array.isArray(l) ? l.map((e) => String(e)).includes(String(i)) : !!s && m === r && String(s) === String(i)) && _
                                              ? (0, c.Z)(_)
                                              : null;
                                    })({ searchParams: m, pageId: t, pageEntityId: l, utmForPageIds: _, contextId: n, contextType: s, blockId: a }),
                                [m, t, l, n, s, a, _],
                            );
                        })({
                            ...t,
                            contextType: null == e ? void 0 : e.contextType,
                            contextId: null == e ? void 0 : e.contextId,
                            utmForPageIds: null == e ? void 0 : e.utmForPageIds,
                        });
                    return (0, i.useMemo)(() => ({ from: a, utmLink: n || void 0 }), [a, n]);
                };
        },
        84516: (e) => {
            e.exports = {
                root: 'CollageContent_root__NLzGo',
                slide: 'CollageContent_slide__5PvMl',
                topBlock: 'CollageContent_topBlock__7ckc_',
                topBlockBackground: 'CollageContent_topBlockBackground__y6HYf',
                topBlockImageWrapper: 'CollageContent_topBlockImageWrapper__Yc87n',
                topBlockImage: 'CollageContent_topBlockImage__tePia',
                subtitle: 'CollageContent_subtitle__M4cCR',
                title: 'CollageContent_title__35r5H',
                bottomBlock: 'CollageContent_bottomBlock__lSJaw',
                bottomBlock_item: 'CollageContent_bottomBlock_item__kSW3C',
            };
        },
        84930: (e) => {
            e.exports = {
                root: 'TextFactContent_root__vmKoy',
                text: 'TextFactContent_text__e_xOX',
                cover: 'TextFactContent_cover__xYsLC',
                image: 'TextFactContent_image__FnWmg',
            };
        },
        86165: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { y: () => i }),
                (function (e) {
                    ((e.LINEUP = 'LINEUP'), (e.LINEUP_WITH_FESTIVAL = 'LINEUP_WITH_FESTIVAL'), (e.LINEUP_WITH_FESTIVAL_IMAGE = 'LINEUP_WITH_FESTIVAL_IMAGE'));
                })(i || (i = {})));
        },
        89080: (e) => {
            e.exports = {
                root: 'ActionButton_root__YMLj2',
                cover: 'ActionButton_cover__04uzU',
                image: 'ActionButton_image__Lrf7N',
                text: 'ActionButton_text__wPgyi',
                icon: 'ActionButton_icon__fKoaq',
            };
        },
        89246: (e) => {
            e.exports = {
                root: 'StatItem_root__L7Uw0',
                root_withOpacity: 'StatItem_root_withOpacity__pOgaf',
                valueContainer: 'StatItem_valueContainer__HlYQZ',
                value: 'StatItem_value__IkJBB',
                unit: 'StatItem_unit__cO46p',
                footer: 'StatItem_footer__QZ7q6',
            };
        },
        89988: (e, t, a) => {
            'use strict';
            a.d(t, {
                $$: () => v,
                EK: () => d,
                GF: () => r,
                Tu: () => n,
                VI: () => o,
                bF: () => c,
                bg: () => _,
                e0: () => m,
                fZ: () => s,
                g2: () => i,
                ur: () => u,
                wO: () => l,
            });
            let i = 'avatars.mds.yandex.net/get-music-misc/28592/img.68eebe12749d24738fe2018e/%%',
                l = 'avatars.mds.yandex.net/get-music-misc/28592/img.68eebdb294053d016bcd7bf0/%%',
                s = 0.5,
                r = 1.5,
                n = 1,
                o = 1920,
                d = 20,
                c = 1.7,
                u = 16,
                _ = '.swiper-pagination,[data-screenshot-hidden]',
                m = 600,
                v = '  •  ';
        },
        92265: (e) => {
            e.exports = {
                root: 'LineupItem_root__B3yvr',
                header: 'LineupItem_header__gyDnL',
                eventTag: 'LineupItem_eventTag__V_p_g',
                metaLabel: 'LineupItem_metaLabel__yXFDs',
                artists: 'LineupItem_artists__lOur3',
                highlighted: 'LineupItem_highlighted__4jOig',
                highlightedItem: 'LineupItem_highlightedItem__2Rd6o',
                restItem: 'LineupItem_restItem__bhuIs',
                logo: 'LineupItem_logo__TSyce',
            };
        },
        92814: (e) => {
            e.exports = {
                root: 'PayCard_root__wjBVD',
                title: 'PayCard_title__t7qpS',
                description: 'PayCard_description__hh2_O',
                text: 'PayCard_text__w251H',
                artwork: 'PayCard_artwork__9oAUA',
            };
        },
        93686: (e) => {
            e.exports = { root: 'TextExtendedContent_root__vzsuG', text: 'TextExtendedContent_text__ksTX_', header: 'TextExtendedContent_header__yn1Ej' };
        },
        94842: (e) => {
            e.exports = { root: 'ChartFavoriteContent_root__ksE_w', description: 'ChartFavoriteContent_description__CCBKM' };
        },
        95210: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => s });
            var i = a(53548),
                l = a(38860);
            let s = (e) => {
                let t = (0, i.useRef)(!1),
                    a = (0, l.z)();
                (0, i.useEffect)(() => {
                    (e && (null == a || a.disable(), (t.current = !0)), !e && t.current && (null == a || a.enable(), (t.current = !1)));
                }, [e, a]);
            };
        },
        96252: (e) => {
            e.exports = { root: 'SlideHeading_root__naZ6V' };
        },
        97462: (e) => {
            e.exports = { root: 'LikeButton_root__ZGF7T' };
        },
        97916: (e) => {
            e.exports = {
                root: 'LumenContent_root__cf3c7',
                lumenAvatarArea: 'LumenContent_lumenAvatarArea__gaLj1',
                lumenAvatar: 'LumenContent_lumenAvatar__US1qg',
                lumenAvatarImage: 'LumenContent_lumenAvatarImage__Pb4tm',
                queryWrapper: 'LumenContent_queryWrapper__wuKtz',
                queryImage: 'LumenContent_queryImage___Ou_l',
                queryText: 'LumenContent_queryText__LIC0Z',
                subtitle: 'LumenContent_subtitle__olkf8',
                title: 'LumenContent_title__0ogc5',
            };
        },
        97974: (e) => {
            e.exports = {
                root: 'CarouselContent_root__fLntt',
                slide: 'CarouselContent_slide__MdGZO',
                slideActive: 'CarouselContent_slideActive__fECY6',
                disabled: 'CarouselContent_disabled__fuxnG',
                description: 'CarouselContent_description__IYsQ8',
                cover: 'CarouselContent_cover__Oc6UR',
                meta: 'CarouselContent_meta__0S_Xt',
                image: 'CarouselContent_image__EKRdr',
                title: 'CarouselContent_title__LHzEy',
                subtitle: 'CarouselContent_subtitle__vZKi2',
            };
        },
        99890: (e, t, a) => {
            'use strict';
            a.d(t, { C8: () => s, UC: () => r, dM: () => n, uV: () => o });
            var i = a(89916),
                l = a(67990);
            let s = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                r = (e) => (e.uid ? 'authorized' : 'no-uid'),
                n = (e) => {
                    if (!(e instanceof i.m5) || !(0, l.N)(e.cause)) return 'unexpected';
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
                o = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
    },
]);
