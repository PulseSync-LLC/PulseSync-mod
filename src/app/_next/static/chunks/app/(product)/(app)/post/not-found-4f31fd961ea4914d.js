(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4004],
    {
        3291: (e) => {
            e.exports = {
                description: 'HorizontalPlaylistCard_description__KYHZF',
                likesCount: 'HorizontalPlaylistCard_likesCount__rgUhr',
                tracksCount: 'HorizontalPlaylistCard_tracksCount__ZdjzM',
                icon: 'HorizontalPlaylistCard_icon__LHymu',
            };
        },
        7103: (e, i, t) => {
            'use strict';
            t.d(i, { r: () => r });
            var s = t(44020),
                n = t(47480);
            let r = (e) => {
                let { formatMessage: i } = (0, n.A)();
                return (0, s.useMemo)(() => {
                    let t = '';
                    e.isLiked && !e.actualLikesCount
                        ? (t = i({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (t =
                              e.actualLikesCount > 0
                                  ? i({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : i({ id: 'entity-names.likes-counter-empty' }));
                    let s = i({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(s, ' ').concat(t);
                }, [i, e]);
            };
        },
        9066: (e, i, t) => {
            'use strict';
            t.d(i, { HorizontalPlaylistCard: () => N });
            var s = t(62936),
                n = t(79950),
                r = t(19718),
                o = t(44020),
                l = t(47480),
                a = t(26731),
                d = t(23480),
                m = t(8669),
                c = t(81959),
                v = t(59935),
                h = t(49923),
                P = t(85742),
                b = t(20418),
                u = t(42561),
                _ = t(85906),
                p = t(7103),
                y = t(25358),
                x = t(71318),
                g = t.n(x);
            let k = (0, r.PA)((e) => {
                var i;
                let { className: t, playlist: r, likeIconSize: l = 'xxs' } = e,
                    { user: a, trailer: m } = (0, u.Pjs)(),
                    c = (0, u.PT7)(),
                    { sendLikeSearchFeedback: h } = (0, u.zEv)(),
                    b = (0, y.KX)(r),
                    [p, x] = (0, o.useState)(!1),
                    k = (0, v.c)(async () => {
                        p || r.isLiked || (x(!0), null == h || h()), await b();
                    }),
                    C = (0, u.Ftl)(),
                    j = (0, v.c)((e) => {
                        if ((e.stopPropagation(), c())) return void e.preventDefault();
                        m.openPlaylistTrailer(r.id), C(d.ky.Playlist, r.id);
                    });
                return (0, s.jsxs)('div', {
                    className: (0, n.$)(g().root, g().controls, t, { [g().controls_disabled]: !r.isAvailable }),
                    children: [
                        r.isAvailable &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)(_.aQ, {
                                        fallback: (0, s.jsx)(_.cy, {
                                            size: 'xs',
                                            iconSize: l,
                                            className: (0, n.$)(g().item, g().likeIcon),
                                            isLiked: r.isLiked,
                                            onClick: k,
                                            disabled: !a.isAuthorized,
                                        }),
                                    }),
                                    (null == (i = r.trailer) ? void 0 : i.isAvailable) &&
                                        (0, s.jsx)(_.aQ, {
                                            fallback: (0, s.jsx)(_.kJ, {
                                                className: (0, n.$)(g().item, g().trailerIcon),
                                                iconSize: 'xs',
                                                variant: 'text',
                                                onClick: j,
                                                withRipple: !1,
                                            }),
                                        }),
                                ],
                            }),
                        (0, s.jsx)('div', {
                            className: (0, n.$)(g().item, g().item_buttonArrow),
                            children: (0, s.jsx)(P.Icon, { className: _.$f.buttonArrow, variant: 'arrowRight', size: 'xs' }),
                        }),
                    ],
                });
            });
            var C = t(3291),
                j = t.n(C);
            let N = (0, r.PA)((e) => {
                let { className: i, playlist: t, pageId: r, coverClassName: y, playButtonIconSize: x, likeIconSize: g } = e,
                    { ref: C, intersectionPropertyId: N } = (0, u.nMI)(),
                    { from: f } = (0, u.fyy)({ pageId: r }),
                    [L, A] = (0, o.useState)(!1),
                    w = (0, u.brA)(),
                    S = (0, p.r)(t),
                    T = t.title || '',
                    { formatMessage: B, formatNumber: K } = (0, l.A)(),
                    z = (0, u.PT7)(),
                    { sendNavigateSearchFeedback: F, sendPlaySearchFeedback: I } = (0, u.zEv)(),
                    E = (0, u.NKK)(),
                    {
                        paywall: { modal: M },
                    } = (0, u.Pjs)(),
                    W = (0, u.NPu)(),
                    {
                        isPlaying: $,
                        isCurrent: R,
                        togglePlay: O,
                    } = (0, u.Dx4)({ playContextParams: { contextData: { type: c.K.Playlist, meta: { id: t.id, uuid: t.uuid }, from: f }, loadContextMeta: !0 } }),
                    Y = (0, u.ZpR)(t.url),
                    Z = (0, v.c)((e) => {
                        null == F || F(), E({ to: d.QT.PlaylistScreen }), e.preventDefault(), Y(e);
                    }),
                    D = (0, v.c)(() => {
                        if (!z()) {
                            if (W) return void M.open();
                            L || $ || (A(!0), null == I || I()), O(), w(!$);
                        }
                    }),
                    H = (0, v.c)((e) => {
                        (0, h.P)(e, _.$f.ripple), Z(e);
                    }),
                    q = (0, v.c)((e) => {
                        e.stopPropagation(), Z(e);
                    }),
                    U = (0, o.useCallback)(
                        (e) =>
                            (0, s.jsx)(_.q1, {
                                isAvailable: t.isAvailable,
                                isDisliked: !1,
                                coverUri: t.coverUri,
                                title: T,
                                className: (0, n.$)(_.$f.playButtonCell, y),
                                alt: B({ id: 'entity-names.playlist-name' }, { playlistName: T }),
                                radius: 'xs',
                                ...e,
                            }),
                        [t, T, y, B],
                    ),
                    X = null == U ? void 0 : U({ onPlayButtonClick: D, isPlaying: $, isCurrent: R, playButtonIconSize: x }),
                    Q = (0, o.useMemo)(
                        () =>
                            t.url && t.isAvailable
                                ? (0, s.jsx)(_.N_, { className: (0, n.$)(_.$f.text, _.$f.titleLink), href: t.url, onClick: q, children: T })
                                : (0, s.jsx)(b.Caption, { className: (0, n.$)(_.$f.text, _.$f.titleText), size: 'm', variant: 'div', type: 'text', children: T }),
                        [q, t.isAvailable, t.url, T],
                    ),
                    V = (0, o.useMemo)(() => {
                        if (void 0 === t.actualLikesCount || void 0 === t.tracksCount) return;
                        let e = (0, s.jsx)(b.Caption, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                            i = t.isLiked ? 'likedVariant' : 'likeVariant',
                            n = ''.concat(S, ' ').concat(B({ id: 'entity-names.tracks-count' }, { value: t.tracksCount }));
                        return (0, s.jsxs)('div', {
                            className: j().description,
                            'aria-label': n,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: j().likesCount,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, s.jsx)(P.Icon, { className: j().icon, variant: i, size: 'xxs' }),
                                        (0, s.jsx)(b.Caption, { variant: 'span', size: 'm', weight: 'medium', children: K(t.actualLikesCount) }),
                                    ],
                                }),
                                (0, s.jsxs)('div', {
                                    className: j().tracksCount,
                                    'aria-hidden': !0,
                                    children: [
                                        e,
                                        (0, s.jsx)(b.Caption, {
                                            variant: 'span',
                                            size: 'm',
                                            weight: 'medium',
                                            children: (0, s.jsx)(a.A, { id: 'entity-names.tracks-count', values: { value: K(t.tracksCount) } }),
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }, [B, K, S, t.actualLikesCount, t.isLiked, t.tracksCount]);
                return (0, s.jsxs)(_.Cj, {
                    ref: C,
                    'data-intersection-property-id': N,
                    className: (0, n.$)(_.$f.root, { [_.$f.root_disabled]: !t.isAvailable }, i),
                    'aria-label': t.title || B({ id: 'entity-names.playlist' }),
                    onClick: H,
                    ...(0, m.Am)(m.Kq.playlist.HORIZONTAL_PLAYLIST_CARD),
                    children: [X, (0, s.jsx)(_.ro, { isDisabled: !t.isAvailable, title: Q, description: V }), (0, s.jsx)(k, { playlist: t, likeIconSize: g })],
                });
            });
        },
        9939: (e, i, t) => {
            'use strict';
            t.d(i, { M: () => s.NotFound });
            var s = t(91455);
        },
        20433: (e, i, t) => {
            'use strict';
            t.d(i, { PlaylistsCarousel: () => m });
            var s = t(62936),
                n = t(44020),
                r = t(23480),
                o = t(42561),
                l = t(85906),
                a = t(88587);
            let d = (e) => {
                    let {
                            forwardRef: i,
                            isShimmerVisible: t,
                            isShimmerActive: d,
                            title: m,
                            description: c,
                            playlists: v,
                            containerClassName: h,
                            className: P,
                            headerClassName: b,
                            viewAllActionLink: u,
                            headingVariant: _,
                            shouldSendAnalyticsOnLoaded: p,
                            ...y
                        } = e,
                        x = (0, o.fBs)();
                    return (
                        (0, n.useEffect)(() => {
                            p && !t && x();
                        }, [t, x, p]),
                        (0, s.jsx)(l.OY, {
                            isShimmerVisible: t,
                            isShimmerActive: d,
                            className: P,
                            headerClassName: b,
                            containerClassName: h,
                            ref: i,
                            title: m,
                            description: c,
                            viewAllActionLink: u,
                            headingVariant: _,
                            ...y,
                            children:
                                null == v
                                    ? void 0
                                    : v.map((e, i) =>
                                          (0, s.jsx)(
                                              o.Bki,
                                              {
                                                  objectType: r.ky.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: i + 1,
                                                  objectPosY: 1,
                                                  objectsCount: v.length,
                                                  children: (0, s.jsx)(a.PlaylistCard, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      ),
                        })
                    );
                },
                m = (0, n.forwardRef)((e, i) => (0, s.jsx)(d, { forwardRef: i, ...e }));
        },
        26499: (e) => {
            e.exports = { root: 'PostPlaylists_root__3tea0', content: 'PostPlaylists_content__2fXI5' };
        },
        32679: (e) => {
            e.exports = { root: 'PostArtists_root__Zxmjq', content: 'PostArtists_content__JzGOH' };
        },
        36118: (e, i, t) => {
            'use strict';
            t.d(i, { SomethingWentWrong: () => u });
            var s = t(62936),
                n = t(79950),
                r = t(19718),
                o = t(44020),
                l = t(47480),
                a = t(26731),
                d = t(5099),
                m = t(85742),
                c = t(20418),
                v = t(42561),
                h = t(85906),
                P = t(52166),
                b = t.n(P);
            let u = (0, r.PA)((e) => {
                let { className: i, withBackwardControl: t = !0 } = e,
                    { formatMessage: r } = (0, l.A)(),
                    P = r({ id: 'error-messages.something-went-wrong' });
                (0, v.CgZ)(P);
                let { sendRefreshEvent: u } = (0, v.cYT)(),
                    _ = (0, o.useCallback)(() => {
                        u(), (window.location.href = v.Zyd.main.href);
                    }, [u]),
                    { contentRef: p } = (0, v.gKY)();
                return (0, s.jsxs)('div', {
                    className: (0, n.$)(b().root, i),
                    children: [
                        t &&
                            (0, s.jsx)(h.Lh, {
                                withBackwardFallback: '/',
                                className: (0, n.$)(b().navigation, { [b().navigation_desktop]: !p }),
                                withForwardControl: !1,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, n.$)(b().content, { [b().content_shrink]: !t }),
                            children: [
                                (0, s.jsx)(m.Icon, { className: b().icon, variant: 'attention', size: 'xxl' }),
                                (0, s.jsx)(c.Heading, { className: (0, n.$)(b().title, b().important), variant: 'h3', size: 'xs', children: P }),
                                (0, s.jsxs)(c.Caption, {
                                    className: (0, n.$)(b().text, b().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, s.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, s.jsx)(d.$, {
                                    onClick: _,
                                    className: b().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, s.jsxs)(c.Caption, {
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
        37416: (e, i, t) => {
            'use strict';
            t.d(i, { PostNotFoundPage: () => o });
            var s = t(62936),
                n = t(19718),
                r = t(9939);
            let o = (0, n.PA)(() => (0, s.jsx)(r.M, {}));
        },
        40507: (e) => {
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
        43528: (e, i, t) => {
            'use strict';
            t.d(i, { a: () => n });
            var s = t(43696);
            let n = () => {
                let e = null,
                    i = new s.cJ(!1),
                    t = [];
                return {
                    isLoaded: i,
                    init: (s) => {
                        var n, r;
                        if (void 0 !== (null == (n = window.Ya) ? void 0 : n.Metrika2) && !i.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...s })),
                                    (i.value = !0),
                                    (r = e),
                                    t.forEach((e) => {
                                        e(r);
                                    }),
                                    (t.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && s.logger.error(e);
                            }
                    },
                    count: function (i) {
                        let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [s]: i })
                            : t.push((e) => {
                                  e.params({ [s]: i });
                              });
                    },
                    hit: (i) => {
                        e
                            ? e.hit(i)
                            : t.push((e) => {
                                  e.hit(i);
                              });
                    },
                    reachGoal: (i, s) => {
                        if (!e) return void t.push((e) => e.reachGoal(i, s));
                        e.reachGoal(i, s);
                    },
                };
            };
        },
        52166: (e) => {
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
        54802: (e, i, t) => {
            'use strict';
            let s;
            t.d(i, { useMetrika: () => o });
            var n = t(44020),
                r = t(43528);
            let o = () => {
                let e = (s || (s = (0, r.a)()), s),
                    i = (0, n.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, n.useMemo)(() => ({ ...e, isLoaded: i }), [i]);
            };
        },
        56587: (e, i, t) => {
            Promise.resolve().then(t.bind(t, 13030)),
                Promise.resolve().then(t.bind(t, 50576)),
                Promise.resolve().then(t.bind(t, 59260)),
                Promise.resolve().then(t.bind(t, 56721)),
                Promise.resolve().then(t.bind(t, 30388)),
                Promise.resolve().then(t.bind(t, 85023)),
                Promise.resolve().then(t.bind(t, 20418)),
                Promise.resolve().then(t.bind(t, 54802)),
                Promise.resolve().then(t.bind(t, 70036)),
                Promise.resolve().then(t.bind(t, 62967)),
                Promise.resolve().then(t.bind(t, 91738)),
                Promise.resolve().then(t.bind(t, 25467)),
                Promise.resolve().then(t.bind(t, 87740)),
                Promise.resolve().then(t.bind(t, 89457)),
                Promise.resolve().then(t.bind(t, 70892)),
                Promise.resolve().then(t.bind(t, 90031)),
                Promise.resolve().then(t.bind(t, 90339)),
                Promise.resolve().then(t.bind(t, 57297)),
                Promise.resolve().then(t.bind(t, 14848)),
                Promise.resolve().then(t.bind(t, 82447)),
                Promise.resolve().then(t.bind(t, 61387)),
                Promise.resolve().then(t.bind(t, 31011)),
                Promise.resolve().then(t.bind(t, 1624)),
                Promise.resolve().then(t.bind(t, 41338)),
                Promise.resolve().then(t.bind(t, 18460)),
                Promise.resolve().then(t.bind(t, 79078)),
                Promise.resolve().then(t.bind(t, 89774)),
                Promise.resolve().then(t.bind(t, 462)),
                Promise.resolve().then(t.bind(t, 71851)),
                Promise.resolve().then(t.bind(t, 2545)),
                Promise.resolve().then(t.bind(t, 51945)),
                Promise.resolve().then(t.bind(t, 14144)),
                Promise.resolve().then(t.bind(t, 34753)),
                Promise.resolve().then(t.bind(t, 34211)),
                Promise.resolve().then(t.bind(t, 63065)),
                Promise.resolve().then(t.bind(t, 31441)),
                Promise.resolve().then(t.bind(t, 37577)),
                Promise.resolve().then(t.bind(t, 9451)),
                Promise.resolve().then(t.bind(t, 64987)),
                Promise.resolve().then(t.bind(t, 77188)),
                Promise.resolve().then(t.bind(t, 50509)),
                Promise.resolve().then(t.bind(t, 16945)),
                Promise.resolve().then(t.bind(t, 11503)),
                Promise.resolve().then(t.bind(t, 60131)),
                Promise.resolve().then(t.bind(t, 3873)),
                Promise.resolve().then(t.bind(t, 41936)),
                Promise.resolve().then(t.bind(t, 32322)),
                Promise.resolve().then(t.bind(t, 69410)),
                Promise.resolve().then(t.bind(t, 80210)),
                Promise.resolve().then(t.bind(t, 91638)),
                Promise.resolve().then(t.bind(t, 86482)),
                Promise.resolve().then(t.bind(t, 70505)),
                Promise.resolve().then(t.bind(t, 79438)),
                Promise.resolve().then(t.bind(t, 28751)),
                Promise.resolve().then(t.bind(t, 91441)),
                Promise.resolve().then(t.bind(t, 75481)),
                Promise.resolve().then(t.bind(t, 69546)),
                Promise.resolve().then(t.bind(t, 95565)),
                Promise.resolve().then(t.bind(t, 9066)),
                Promise.resolve().then(t.bind(t, 88587)),
                Promise.resolve().then(t.bind(t, 20433)),
                Promise.resolve().then(t.bind(t, 37416)),
                Promise.resolve().then(t.bind(t, 56617)),
                Promise.resolve().then(t.bind(t, 70900)),
                Promise.resolve().then(t.bind(t, 11182)),
                Promise.resolve().then(t.bind(t, 95368)),
                Promise.resolve().then(t.bind(t, 12331)),
                Promise.resolve().then(t.bind(t, 52589)),
                Promise.resolve().then(t.bind(t, 83132)),
                Promise.resolve().then(t.bind(t, 7670)),
                Promise.resolve().then(t.bind(t, 395)),
                Promise.resolve().then(t.bind(t, 83543)),
                Promise.resolve().then(t.bind(t, 99303)),
                Promise.resolve().then(t.bind(t, 45648)),
                Promise.resolve().then(t.bind(t, 35042)),
                Promise.resolve().then(t.bind(t, 94311)),
                Promise.resolve().then(t.bind(t, 46650)),
                Promise.resolve().then(t.bind(t, 33405)),
                Promise.resolve().then(t.bind(t, 32101)),
                Promise.resolve().then(t.bind(t, 63329)),
                Promise.resolve().then(t.bind(t, 941)),
                Promise.resolve().then(t.bind(t, 58991)),
                Promise.resolve().then(t.bind(t, 42297)),
                Promise.resolve().then(t.bind(t, 7551)),
                Promise.resolve().then(t.bind(t, 75695)),
                Promise.resolve().then(t.bind(t, 42323)),
                Promise.resolve().then(t.bind(t, 91135)),
                Promise.resolve().then(t.bind(t, 14878)),
                Promise.resolve().then(t.bind(t, 26467)),
                Promise.resolve().then(t.bind(t, 41970)),
                Promise.resolve().then(t.bind(t, 16847)),
                Promise.resolve().then(t.bind(t, 78780)),
                Promise.resolve().then(t.bind(t, 16782)),
                Promise.resolve().then(t.bind(t, 77966)),
                Promise.resolve().then(t.bind(t, 31148)),
                Promise.resolve().then(t.bind(t, 76532)),
                Promise.resolve().then(t.bind(t, 38076)),
                Promise.resolve().then(t.bind(t, 94158)),
                Promise.resolve().then(t.bind(t, 14124)),
                Promise.resolve().then(t.bind(t, 86100)),
                Promise.resolve().then(t.bind(t, 59736)),
                Promise.resolve().then(t.bind(t, 20532)),
                Promise.resolve().then(t.bind(t, 80222)),
                Promise.resolve().then(t.bind(t, 93148)),
                Promise.resolve().then(t.bind(t, 43898)),
                Promise.resolve().then(t.bind(t, 23164)),
                Promise.resolve().then(t.bind(t, 71637)),
                Promise.resolve().then(t.bind(t, 87894)),
                Promise.resolve().then(t.bind(t, 72964)),
                Promise.resolve().then(t.bind(t, 2760)),
                Promise.resolve().then(t.bind(t, 31927)),
                Promise.resolve().then(t.bind(t, 97248)),
                Promise.resolve().then(t.bind(t, 57612)),
                Promise.resolve().then(t.bind(t, 5670)),
                Promise.resolve().then(t.bind(t, 70915)),
                Promise.resolve().then(t.bind(t, 8148)),
                Promise.resolve().then(t.bind(t, 32634)),
                Promise.resolve().then(t.bind(t, 508)),
                Promise.resolve().then(t.bind(t, 36363)),
                Promise.resolve().then(t.bind(t, 15958)),
                Promise.resolve().then(t.bind(t, 78685)),
                Promise.resolve().then(t.bind(t, 34476)),
                Promise.resolve().then(t.bind(t, 60917)),
                Promise.resolve().then(t.bind(t, 62520)),
                Promise.resolve().then(t.bind(t, 21389)),
                Promise.resolve().then(t.bind(t, 85546)),
                Promise.resolve().then(t.bind(t, 80185)),
                Promise.resolve().then(t.bind(t, 38285)),
                Promise.resolve().then(t.bind(t, 792)),
                Promise.resolve().then(t.bind(t, 34291)),
                Promise.resolve().then(t.bind(t, 31299)),
                Promise.resolve().then(t.bind(t, 56209)),
                Promise.resolve().then(t.bind(t, 44162)),
                Promise.resolve().then(t.bind(t, 93427)),
                Promise.resolve().then(t.bind(t, 57861)),
                Promise.resolve().then(t.bind(t, 30615)),
                Promise.resolve().then(t.bind(t, 34990)),
                Promise.resolve().then(t.bind(t, 16395)),
                Promise.resolve().then(t.bind(t, 75020)),
                Promise.resolve().then(t.bind(t, 32746)),
                Promise.resolve().then(t.bind(t, 2552)),
                Promise.resolve().then(t.bind(t, 7323)),
                Promise.resolve().then(t.bind(t, 68270)),
                Promise.resolve().then(t.bind(t, 99525)),
                Promise.resolve().then(t.bind(t, 44276)),
                Promise.resolve().then(t.bind(t, 49452)),
                Promise.resolve().then(t.bind(t, 68834)),
                Promise.resolve().then(t.bind(t, 67484)),
                Promise.resolve().then(t.bind(t, 6987)),
                Promise.resolve().then(t.bind(t, 748)),
                Promise.resolve().then(t.bind(t, 94756)),
                Promise.resolve().then(t.bind(t, 5798)),
                Promise.resolve().then(t.bind(t, 44817)),
                Promise.resolve().then(t.bind(t, 6181)),
                Promise.resolve().then(t.bind(t, 40846)),
                Promise.resolve().then(t.bind(t, 43762)),
                Promise.resolve().then(t.bind(t, 12364)),
                Promise.resolve().then(t.bind(t, 13660)),
                Promise.resolve().then(t.bind(t, 31543)),
                Promise.resolve().then(t.bind(t, 38224)),
                Promise.resolve().then(t.bind(t, 63210)),
                Promise.resolve().then(t.bind(t, 44697)),
                Promise.resolve().then(t.bind(t, 64802)),
                Promise.resolve().then(t.bind(t, 1443)),
                Promise.resolve().then(t.bind(t, 95297)),
                Promise.resolve().then(t.bind(t, 4552)),
                Promise.resolve().then(t.bind(t, 92648)),
                Promise.resolve().then(t.bind(t, 73572)),
                Promise.resolve().then(t.bind(t, 29992)),
                Promise.resolve().then(t.bind(t, 66230)),
                Promise.resolve().then(t.bind(t, 18611)),
                Promise.resolve().then(t.bind(t, 36082)),
                Promise.resolve().then(t.bind(t, 42398)),
                Promise.resolve().then(t.bind(t, 21155)),
                Promise.resolve().then(t.bind(t, 44161)),
                Promise.resolve().then(t.bind(t, 38317)),
                Promise.resolve().then(t.bind(t, 22883)),
                Promise.resolve().then(t.bind(t, 59790)),
                Promise.resolve().then(t.bind(t, 47933)),
                Promise.resolve().then(t.bind(t, 88586)),
                Promise.resolve().then(t.bind(t, 34414)),
                Promise.resolve().then(t.bind(t, 41855)),
                Promise.resolve().then(t.bind(t, 10668)),
                Promise.resolve().then(t.bind(t, 51969)),
                Promise.resolve().then(t.bind(t, 93319)),
                Promise.resolve().then(t.bind(t, 6644)),
                Promise.resolve().then(t.bind(t, 73416)),
                Promise.resolve().then(t.bind(t, 6043)),
                Promise.resolve().then(t.bind(t, 98216)),
                Promise.resolve().then(t.bind(t, 68808)),
                Promise.resolve().then(t.bind(t, 94584)),
                Promise.resolve().then(t.bind(t, 77272)),
                Promise.resolve().then(t.bind(t, 20908)),
                Promise.resolve().then(t.bind(t, 26216)),
                Promise.resolve().then(t.bind(t, 62440)),
                Promise.resolve().then(t.bind(t, 99270)),
                Promise.resolve().then(t.bind(t, 55046)),
                Promise.resolve().then(t.bind(t, 32856)),
                Promise.resolve().then(t.bind(t, 2726)),
                Promise.resolve().then(t.bind(t, 75690)),
                Promise.resolve().then(t.bind(t, 39695)),
                Promise.resolve().then(t.bind(t, 84929)),
                Promise.resolve().then(t.bind(t, 24301)),
                Promise.resolve().then(t.bind(t, 21485)),
                Promise.resolve().then(t.bind(t, 25992)),
                Promise.resolve().then(t.bind(t, 51692)),
                Promise.resolve().then(t.bind(t, 79374)),
                Promise.resolve().then(t.bind(t, 13514)),
                Promise.resolve().then(t.bind(t, 99974)),
                Promise.resolve().then(t.bind(t, 42260)),
                Promise.resolve().then(t.bind(t, 72866)),
                Promise.resolve().then(t.bind(t, 81338)),
                Promise.resolve().then(t.bind(t, 82630)),
                Promise.resolve().then(t.bind(t, 49058)),
                Promise.resolve().then(t.bind(t, 39857)),
                Promise.resolve().then(t.bind(t, 48167)),
                Promise.resolve().then(t.bind(t, 40461)),
                Promise.resolve().then(t.bind(t, 59884)),
                Promise.resolve().then(t.bind(t, 73144)),
                Promise.resolve().then(t.bind(t, 66458)),
                Promise.resolve().then(t.bind(t, 77286)),
                Promise.resolve().then(t.bind(t, 53431)),
                Promise.resolve().then(t.bind(t, 22605)),
                Promise.resolve().then(t.bind(t, 94714)),
                Promise.resolve().then(t.bind(t, 90479)),
                Promise.resolve().then(t.bind(t, 64697)),
                Promise.resolve().then(t.bind(t, 5356)),
                Promise.resolve().then(t.bind(t, 6374)),
                Promise.resolve().then(t.bind(t, 39260)),
                Promise.resolve().then(t.bind(t, 68816)),
                Promise.resolve().then(t.bind(t, 20372)),
                Promise.resolve().then(t.bind(t, 85208)),
                Promise.resolve().then(t.bind(t, 95296)),
                Promise.resolve().then(t.bind(t, 78029)),
                Promise.resolve().then(t.bind(t, 6063)),
                Promise.resolve().then(t.bind(t, 14876)),
                Promise.resolve().then(t.bind(t, 86216)),
                Promise.resolve().then(t.bind(t, 18744)),
                Promise.resolve().then(t.bind(t, 32438)),
                Promise.resolve().then(t.bind(t, 18792)),
                Promise.resolve().then(t.bind(t, 84520)),
                Promise.resolve().then(t.bind(t, 85816)),
                Promise.resolve().then(t.bind(t, 71193)),
                Promise.resolve().then(t.bind(t, 37934)),
                Promise.resolve().then(t.bind(t, 92852)),
                Promise.resolve().then(t.bind(t, 34740)),
                Promise.resolve().then(t.bind(t, 83373)),
                Promise.resolve().then(t.bind(t, 9322));
        },
        56617: (e, i, t) => {
            'use strict';
            t.d(i, { PostPage: () => K });
            var s = t(62936),
                n = t(79950),
                r = t(19718),
                o = t(69526),
                l = t(44020),
                a = t(99877),
                d = t(14501),
                m = t(30388),
                c = t(20418),
                v = t(65438),
                h = t(92229),
                P = t(42561),
                b = t(85906),
                u = t(63622),
                _ = t.n(u);
            let p = () =>
                (0, s.jsxs)('div', {
                    className: _().root,
                    children: [(0, s.jsx)(m.Shimmer, { radius: 'l', className: _().top }), (0, s.jsx)(m.Shimmer, { radius: 'l', className: _().bottom })],
                });
            var y = t(92110),
                x = t.n(y),
                g = t(90914),
                k = t(99793),
                C = t.n(k);
            let j = (0, r.PA)((e) => {
                let { albums: i = [] } = e;
                return (0, s.jsx)('div', {
                    className: C().root,
                    children: (0, s.jsx)('div', {
                        className: C().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: i.map((e) => (0, s.jsx)(g.aX, { className: C().item, album: e, contentLinesCount: 3 }, e.id)),
                    }),
                });
            });
            var N = t(11334),
                f = t(32679),
                L = t.n(f);
            let A = (0, r.PA)((e) => {
                let { artists: i = [] } = e;
                return (0, s.jsx)('div', {
                    className: L().root,
                    children: (0, s.jsx)('div', {
                        className: L().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: i.map((e) => (0, s.jsx)(N.ao, { className: L().item, artist: e, contentLinesCount: 3 }, e.id)),
                    }),
                });
            });
            var w = t(79670),
                S = t(26499),
                T = t.n(S);
            let B = (0, r.PA)((e) => {
                    let { playlists: i = [] } = e;
                    return (0, s.jsx)('div', {
                        className: T().root,
                        children: (0, s.jsx)('div', {
                            className: T().content,
                            'aria-labelledby': 'post-page-header',
                            tabIndex: 0,
                            children: i.map((e) => (0, s.jsx)(w.B6, { className: T().item, playlist: e, contentLinesCount: 3 }, e.id)),
                        }),
                    });
                }),
                K = (0, r.PA)((e) => {
                    let { promoId: i } = e,
                        { post: t } = (0, P.Pjs)(),
                        r = (0, P.W6M)(),
                        { contentScrollRef: u, setContentScrollRef: _ } = (0, P.gKY)();
                    (0, l.useEffect)(
                        () => () => {
                            t.reset();
                        },
                        [t],
                    ),
                        t.isNotFound && (0, o.notFound)(),
                        (0, P.Jzs)(t.isResolved);
                    let y = (0, l.useMemo)(() => {
                        if (t.isLoading) return (0, s.jsx)(p, {});
                        switch (t.promotionType) {
                            case a.Q.ARTISTS:
                                return (0, s.jsx)(A, { artists: t.artists });
                            case a.Q.ALBUMS:
                                return (0, s.jsx)(j, { albums: t.albums });
                            case a.Q.PLAYLISTS:
                                return (0, s.jsx)(B, { playlists: t.playlists });
                            default:
                                (0, o.notFound)();
                        }
                    }, [t.albums, t.artists, t.isLoading, t.playlists, t.promotionType]);
                    return (i && t.isNeededToLoad && (0, l.use)(t.getData({ promoId: i })), t.isSomethingWrong)
                        ? (0, s.jsx)(v.w, {})
                        : (0, s.jsx)(P.nVz, {
                              pageId: P._Q$.POST,
                              children: (0, s.jsx)(h.hO, {
                                  scrollElement: u,
                                  outerTitle: t.title || void 0,
                                  children: (0, s.jsxs)('div', {
                                      className: x().root,
                                      children: [
                                          (0, s.jsx)(b.Y9, {
                                              variant: b.Vw.TEXT,
                                              withForwardControl: !1,
                                              withBackwardControl: r.canBack,
                                              children: t.title
                                                  ? (0, s.jsx)(c.Heading, {
                                                        id: 'post-header',
                                                        variant: 'h2',
                                                        weight: 'bold',
                                                        size: 'xl',
                                                        lineClamp: 1,
                                                        children: t.title,
                                                    })
                                                  : (0, s.jsx)(m.Shimmer, { className: x().shimmerTitle, radius: 'l' }),
                                          }),
                                          (0, s.jsx)(d.N, {
                                              containerClassName: (0, n.$)(x().scrollContainer, x().important),
                                              className: x().scrollableContainer,
                                              ref: _,
                                              children: (0, s.jsx)('div', { className: x().container, children: y }),
                                          }),
                                      ],
                                  }),
                              }),
                          });
                });
        },
        63622: (e) => {
            e.exports = { root: 'PostShimmer_root__MlLkY', top: 'PostShimmer_top__ySpmZ', bottom: 'PostShimmer_bottom__ajW_P' };
        },
        65438: (e, i, t) => {
            'use strict';
            t.d(i, { w: () => s.SomethingWentWrong });
            var s = t(36118);
        },
        71318: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ControlsBar_root__mf9o_',
                item: 'ControlsBar_item__4YJMp',
                item_buttonArrow: 'ControlsBar_item_buttonArrow__9hTqa',
                controls: 'ControlsBar_controls__DcFpX',
                likeIcon: 'ControlsBar_likeIcon__g8y02',
                trailerIcon: 'ControlsBar_trailerIcon__iH6eY',
                controls_disabled: 'ControlsBar_controls_disabled___hlf6',
            };
        },
        79670: (e, i, t) => {
            'use strict';
            t.d(i, {
                pA: () => g.EmptyPlaylistBlock,
                vf: () => k.HorizontalPlaylistCard,
                B6: () => C.PlaylistCard,
                BL: () => y,
                IP: () => x,
                EC: () => j.PlaylistsCarousel,
                bk: () => r,
                ZC: () => d,
                Ew: () => c,
                pd: () => h,
            });
            var s = t(51606),
                n = t(42561);
            let r = (e) => {
                var i, t;
                let { playlist: r, generatedPlaylistType: o, likesCount: l, trailer: a, tracksCount: d } = e;
                return (0, s.wg)({
                    isAvailable: null == (t = r.available) || t,
                    uuid: r.playlistUuid,
                    title: r.title,
                    uid: r.uid,
                    kind: r.kind,
                    coverUri: null == (i = r.cover) ? void 0 : i.uri,
                    generatedPlaylistType: o,
                    likesCount: l,
                    tracksCount: d,
                    trailer: (0, n.mxW)(a),
                });
            };
            var o = t(69526),
                l = t(44020);
            (0, l.cache)(async (e, i) => {
                var t;
                let s;
                try {
                    let { container: t, backendHostTld: r, locale: o, host: l, fullUrl: a, isRSC: d, requestUrl: m } = await (0, n.IhE)();
                    if (d) return { playlist: void 0, backendHostTld: r, locale: o, host: l, fullUrl: a, requestUrl: m };
                    let c = t.get(n._19);
                    s = {
                        playlist: await c.getPlaylistWithTracksIds({ userId: e, playlistKind: i, resumeStream: !1 }),
                        backendHostTld: r,
                        locale: o,
                        host: l,
                        fullUrl: a,
                        requestUrl: m,
                    };
                } catch (e) {
                    return (0, n.tfF)(e, () => ({ playlist: void 0, ...(0, n.Bj3)() }));
                }
                return (null == (t = s.playlist) ? void 0 : t.error) === 'not-found' && (0, o.notFound)(), s;
            }),
                (0, l.cache)(async (e) => {
                    var i;
                    let t;
                    (0, n.sU0)(e) || (0, o.notFound)();
                    try {
                        let { container: i, backendHostTld: s, locale: r, host: o, fullUrl: l, isRSC: a, requestUrl: d } = await (0, n.IhE)();
                        if (a) return { playlist: void 0, backendHostTld: s, locale: r, host: o, fullUrl: l, requestUrl: d };
                        let m = i.get(n.qNr);
                        t = {
                            playlist: await m.getPlaylist({ playlistUuid: e, resumeStream: !1, richTracks: !1 }),
                            backendHostTld: s,
                            locale: r,
                            host: o,
                            fullUrl: l,
                            requestUrl: d,
                        };
                    } catch (e) {
                        return (0, n.tfF)(e, () => ({ playlist: void 0, ...(0, n.Bj3)() }));
                    }
                    return (null == (i = t.playlist) ? void 0 : i.error) === 'not-found' && (0, o.notFound)(), t;
                });
            var a = t(25358);
            let d = (e) =>
                (0, s.wg)({
                    ...(0, a.jX)(e),
                    owner: e.owner ? ((e) => ({ uid: e.uid, login: e.login, name: e.name, sex: e.sex, verified: e.verified }))(e.owner) : void 0,
                    description: e.description,
                    tags: e.tags,
                    modified: e.modified,
                    madeFor: e.madeFor ? ((e) => (0, s.wg)({ caseForms: e.caseForms ? (0, n.NH4)(e.caseForms) : null }))(e.madeFor) : null,
                });
            var m = t(81628);
            let c = (e) => {
                var i, t;
                return (0, s.wg)({ ...(0, a.jX)(e), artists: null != (t = null == e || null == (i = e.artists) ? void 0 : i.map(m.dM)) ? t : [] });
            };
            var v = t(43026);
            let h = (e) => {
                var i, t;
                return (0, s.wg)({ ...(0, a.jX)(e), tracks: null != (t = null == e || null == (i = e.tracks) ? void 0 : i.map(v.Rw)) ? t : [] });
            };
            var P = t(54690);
            let b = s.gK.model('PlaylistOwner', { caseForms: s.gK.maybeNull(P.lg) });
            var u = t(78980);
            let _ = s.gK.model('PlaylistOwner', {
                    uid: s.gK.number,
                    login: s.gK.string,
                    name: s.gK.string,
                    sex: s.gK.enumeration(Object.values(u.U)),
                    verified: s.gK.boolean,
                }),
                p = s.gK.model('PlaylistTag', { id: s.gK.string, value: s.gK.string }),
                y = a.$o
                    .props({
                        owner: s.gK.maybe(_),
                        modified: s.gK.string,
                        description: s.gK.maybe(s.gK.string),
                        tags: s.gK.maybeNull(s.gK.array(p)),
                        madeFor: s.gK.maybeNull(b),
                    })
                    .views((e) => ({
                        get seeds() {
                            var i;
                            return ['playlist:'.concat(null == (i = e.owner) ? void 0 : i.login, '_').concat(e.kind)];
                        },
                        get tagsString() {
                            let { experiments: i } = (0, s.Zn)(e);
                            if (!i.checkExperiment(n.zal.WebEditorsFeatures, 'on') || !Array.isArray(e.tags) || !e.tags.length) return null;
                            return e.tags.map((e) => e.value).join(', ');
                        },
                    }))
                    .actions((e) => ({
                        changeDescription: (0, s.L3)(function* (i) {
                            if (!(0, s._n)(e)) return n.FlZ.ERROR;
                            if (e.description === i) return n.FlZ.OK;
                            if (i.length > a.iz) return n.FlZ.ERROR;
                            let { usersResource: t, modelActionsLogger: r } = (0, s._$)(e);
                            if (e.canUserChange) {
                                let s = e.description;
                                e.description = i;
                                try {
                                    let s = yield t.changePlaylistDescription({ description: i, userId: e.uid, playlistKind: e.kind });
                                    return (e.description = s.description), n.FlZ.OK;
                                } catch (i) {
                                    (e.description = s), r.error(i);
                                }
                            }
                            return n.FlZ.ERROR;
                        }),
                        changePlaylistCover: (0, s.L3)(function* (i) {
                            if (!(0, s._n)(e)) return n.FlZ.ERROR;
                            let { usersResource: t, modelActionsLogger: r } = (0, s._$)(e);
                            try {
                                let s = yield t.uploadPlaylistCover({ userId: e.uid, formData: i, playlistKind: e.kind });
                                return (e.coverUri = s.cover.uri), n.FlZ.OK;
                            } catch (e) {
                                r.error(e);
                            }
                            return n.FlZ.ERROR;
                        }),
                    }))
                    .named('PlaylistMeta'),
                x = a.Zq.props({ artists: s.gK.maybe(s.gK.array(m.PK)) });
            var g = t(95565),
                k = t(9066),
                C = t(88587),
                j = t(20433);
        },
        88587: (e, i, t) => {
            'use strict';
            t.d(i, { PlaylistCard: () => L });
            var s = t(62936),
                n = t(79950),
                r = t(19718),
                o = t(44020),
                l = t(47480),
                a = t(23480),
                d = t(8669),
                m = t(81959),
                c = t(59935),
                v = t(60188),
                h = t(16258),
                P = t(85742),
                b = t(56721),
                u = t(20418),
                _ = t(81628),
                p = t(25358),
                y = t(42561),
                x = t(85906),
                g = t(7103),
                k = t(64304),
                C = t(35250);
            let downloadPlaylistToFile = ({ playlist: e }) => {
                let i = Array.isArray(e?.trackIds) ? e.trackIds : [],
                    t = (0, c.c)(() => {
                        var i;
                        e?.title && e?.trackIds?.length && (null == (i = window.desktopEvents) || i.send(y.EE.DOWNLOAD_TRACKS, e.trackIds, 'playlist', e.title));
                    });
                return i.length
                    ? (0, s.jsx)(k.Dr, {
                          onClick: t,
                          icon: (0, s.jsx)(P.Icon, { variant: 'download', size: 'xxs' }),
                          children: 'Скачать в файл',
                      })
                    : null;
            };
            let j = (0, r.PA)((e) => {
                var i;
                let { playlist: t, onOpenChange: n, open: r, ...o } = e,
                    { shouldShowBuySubscriptionModal: m, showBuySubscriptionModal: v } = (0, y.qBP)(),
                    {
                        experiments: h,
                        settings: { isMobile: P },
                        trailer: b,
                        user: u,
                    } = (0, y.Pjs)(),
                    _ = (0, p.KX)(t),
                    g = (0, p.A7)(t),
                    j = (0, y.Ftl)(),
                    { formatMessage: N } = (0, l.A)(),
                    f = (0, y.PT7)(),
                    L = h.checkExperiment(y.zal.WebEditorsFeatures, 'on'),
                    A = (0, C.A_)({ entityVariant: y.DwC.PLAYLIST, urlParams: { id: t.uid, kind: t.kind } });
                (0, y.NBO)(r);
                let w = (0, c.c)(() => {
                    if (m) return void v();
                    f() || (b.openPlaylistTrailer(t.id), j(a.ky.Playlist, t.id));
                });
                return (0, s.jsxs)(k.W1, {
                    title: t.title,
                    onOpenChange: n,
                    open: r,
                    offsetOptions: 10,
                    isMobile: P,
                    ariaLabel: N({ id: 'interface-actions.context-menu' }),
                    containerProps: (0, d.Am)(d.Kq.playlist.PLAYLIST_CONTEXT_MENU),
                    ...o,
                    children: [
                        L && (0, s.jsx)(C.dx, { entityVariant: y.DwC.PLAYLIST, adminUrl: t.isFavouritePlaylist ? void 0 : A }),
                        !P && (0, s.jsx)(x.L1, { onClick: g, isPinned: t.isPinned }),
                        !t.isFavouritePlaylist && (0, s.jsx)(x.TW, { onClick: _, isLiked: t.isLiked, disabled: !u.isAuthorized }),
                        (0, s.jsx)(downloadPlaylistToFile, { playlist: t }),
                        (null == (i = t.trailer) ? void 0 : i.isAvailable) && (0, s.jsx)(x.No, { onClick: w, disabled: !t.isAvailable }),
                    ],
                });
            });
            var N = t(40507),
                f = t.n(N);
            let L = (0, r.PA)((e) => {
                let { className: i, playlist: t, children: r, contentLinesCount: k, customDescription: C } = e,
                    { ref: N, intersectionPropertyId: L } = (0, y.nMI)(),
                    {
                        trailer: A,
                        user: w,
                        paywall: { modal: S },
                    } = (0, y.Pjs)(),
                    { from: T, utmLink: B } = (0, y.fyy)({ contextId: t.uuid, contextType: m.K.Playlist }),
                    { formatMessage: K } = (0, l.A)(),
                    { sendLikeSearchFeedback: z, sendNavigateSearchFeedback: F, sendPlaySearchFeedback: I } = (0, y.zEv)(),
                    [E, M] = (0, o.useState)(!1),
                    [W, $] = (0, o.useState)(!1),
                    [R, O] = (0, o.useState)(!1),
                    Y = (0, g.r)(t),
                    Z = (0, p.KX)(t),
                    D = (0, p.A7)(t),
                    H = (0, y.NKK)(),
                    q = (0, y.brA)(),
                    U = (0, y.ZpR)(t.url),
                    X = (0, y.Ftl)(),
                    Q = (0, y.PT7)(),
                    V = (0, c.c)((e) => {
                        if ((e.stopPropagation(), Q())) return void e.preventDefault();
                        A.setUtmLink(B), A.openPlaylistTrailer(t.id), X(a.ky.Playlist, t.id);
                    }),
                    [G, J] = (0, o.useState)(!1),
                    { isPlaying: ee, togglePlay: ei } = (0, y.Dx4)({
                        playContextParams: { contextData: { type: m.K.Playlist, meta: { id: t.id, uuid: t.uuid }, from: T, utmLink: B }, loadContextMeta: !0 },
                    }),
                    et = (0, c.c)(() => {
                        H({ to: a.QT.PlaylistScreen }), null == F || F();
                    }),
                    es = (0, c.c)((e) => {
                        et(), U(e);
                    }),
                    en = (0, y.NPu)(),
                    er = (0, c.c)(() => {
                        if (!Q()) {
                            if (en) return void S.open();
                            E || ee || (M(!0), null == I || I()), ei(), q(!ee);
                        }
                    }),
                    eo = (0, c.c)(() => {
                        W || t.isLiked || ($(!0), null == z || z()), Z();
                    }),
                    el = (0, c.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    ea = (0, c.c)((e) => {
                        O(e), J(e);
                    }),
                    ed = (0, o.useMemo)(() => {
                        var e;
                        return C
                            ? (0, s.jsx)(u.Caption, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: C }, t.getKey('description'))
                            : (null == (e = t.artists) ? void 0 : e.length)
                              ? (0, s.jsx)(
                                    _.iQ,
                                    { className: f().artists, artists: t.artists, lineClamp: 1, linkClassName: f().artistLink, captionSize: 's' },
                                    t.getKey('description'),
                                )
                              : void 0;
                    }, [C, t]),
                    em = (0, v.L)(() => {
                        if (!t.isFavouritePlaylist)
                            return (0, s.jsx)(
                                x.cy,
                                {
                                    className: (0, n.$)(f().likeButton, f().control),
                                    isLiked: t.isLiked,
                                    onClick: eo,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !w.isAuthorized,
                                },
                                t.getKey('LikeButton'),
                            );
                    }),
                    ec = (0, o.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                x.nE,
                                {
                                    children: (0, s.jsx)(
                                        x.kJ,
                                        { className: (0, n.$)(f().trailerButton, f().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: V },
                                        t.getKey('TrailerButton'),
                                    ),
                                },
                                t.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [V, t]),
                    ev = (0, o.useMemo)(
                        () =>
                            (0, s.jsx)(
                                x.O0,
                                { onClick: D, isPinned: t.isPinned, className: (0, n.$)(f().pinButton, f().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [D, t],
                    ),
                    eh = (0, o.useMemo)(
                        () =>
                            (0, s.jsx)(b.Paper, {
                                className: f().cover,
                                radius: 's',
                                withShadow: !0,
                                ...(0, d.Am)(d.Kq.playlist.PLAYLIST_CARD),
                                children: (0, s.jsxs)('div', {
                                    className: f().coverBlock,
                                    onClick: es,
                                    children: [
                                        (0, s.jsx)(x.BW, {
                                            className: f().image,
                                            src: t.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: Y,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(h.hg, {
                                            isVisible: R || G,
                                            className: f().controls,
                                            playControl: (0, s.jsx)(
                                                x.DM,
                                                {
                                                    className: (0, n.$)(f().playButton, f().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: er,
                                                    isPlaying: ee,
                                                    disabled: !t.isAvailable,
                                                },
                                                t.getKey('PlayButton'),
                                            ),
                                            likeControl: em,
                                            menuControl: (0, s.jsx)(
                                                j,
                                                {
                                                    playlist: t,
                                                    onOpenChange: ea,
                                                    open: R,
                                                    onClick: el,
                                                    className: (0, n.$)(f().menuButton, f().control),
                                                    icon: (0, s.jsx)(P.Icon, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    ...(0, d.Am)(d.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON),
                                                },
                                                t.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: ev,
                                            trailerControl: ec,
                                        }),
                                    ],
                                }),
                            }),
                        [es, t, Y, R, G, er, ee, em, ea, el, ev, ec],
                    ),
                    eP = !!t.actualLikesCount && !t.isLikesCountHidden;
                return (0, s.jsxs)(h.MN, {
                    ref: N,
                    'aria-label': Y,
                    className: (0, n.$)(f().root, i),
                    title: (0, s.jsx)(u.Caption, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        ...(0, d.Am)(d.Kq.playlist.PLAYLIST_TITLE),
                        children: (0, s.jsx)(x.N_, { className: f().titleLink, href: t.url, onClick: et, children: t.title }),
                    }),
                    srTitle: (0, s.jsx)(x.N_, { href: t.url, onClick: et, children: t.title }),
                    'data-intersection-property-id': L,
                    contentLinesCount: k,
                    view: eh,
                    description: ed,
                    ...(0, d.Am)(d.Kq.playlist.PLAYLIST_ITEM),
                    children: [
                        eP &&
                            (0, s.jsx)(x.xW, {
                                ariaLabel: K({ id: 'entity-names.likes-counter' }, { counter: t.actualLikesCount }),
                                likesCount: t.actualLikesCount,
                                isLiked: t.isLiked,
                                handleLikeClick: Z,
                            }),
                        r,
                    ],
                });
            });
        },
        88933: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        91455: (e, i, t) => {
            'use strict';
            t.d(i, { NotFound: () => b });
            var s = t(62936),
                n = t(79950),
                r = t(19718),
                o = t(26731),
                l = t(5099),
                a = t(85742),
                d = t(20418),
                m = t(42561),
                c = t(85906),
                v = t(44020),
                h = t(88933),
                P = t.n(h);
            let b = (0, r.PA)((e) => {
                let { className: i, title: t, description: r, iconVariant: h = 'musicLogo', iconClassName: b, iconSize: u } = e,
                    { contentRef: _ } = (0, m.gKY)(),
                    p = (0, m.ZpR)(m.Zyd.main.href);
                (0, m.LZB)();
                let { handleNavigateToMain: y } = (0, m.D5F)(p);
                return (
                    (0, m.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, m.Pjs)();
                        (0, v.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, s.jsxs)('div', {
                        className: (0, n.$)(P().root, { [P().root_desktop]: !_ }, i),
                        children: [
                            (0, s.jsx)(c.Lh, { withBackwardFallback: '/', className: P().navigation, withForwardControl: !1 }),
                            (0, s.jsxs)('div', {
                                className: P().content,
                                children: [
                                    (0, s.jsx)(a.Icon, { className: (0, n.$)(P().icon, b), variant: h, size: u }),
                                    (0, s.jsx)(d.Heading, {
                                        className: (0, n.$)(P().title, P().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: t || (0, s.jsx)(o.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, s.jsx)(d.Caption, {
                                        className: (0, n.$)(P().text, P().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: r || (0, s.jsx)(o.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, s.jsx)(l.$, {
                                        onClick: y,
                                        className: P().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(d.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, s.jsx)(o.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        92110: (e) => {
            e.exports = {
                root: 'PostPage_root__Orhf7',
                scrollableContainer: 'PostPage_scrollableContainer__iV9Bo',
                scrollContainer: 'PostPage_scrollContainer__zrIrH',
                important: 'PostPage_important__qUlED',
                container: 'PostPage_container__orSfz',
                shimmerTitle: 'PostPage_shimmerTitle__EeFCD',
            };
        },
        92339: (e) => {
            e.exports = {
                root: 'EmptyPlaylistBlock_root__wpA0j',
                iconBackground: 'EmptyPlaylistBlock_iconBackground__pnUlz',
                title: 'EmptyPlaylistBlock_title__pQQLf',
                subtitle: 'EmptyPlaylistBlock_subtitle__P4Q7x',
            };
        },
        95565: (e, i, t) => {
            'use strict';
            t.d(i, { EmptyPlaylistBlock: () => v });
            var s = t(62936),
                n = t(79950),
                r = t(44020),
                o = t(26731),
                l = t(8669),
                a = t(85742),
                d = t(20418),
                m = t(92339),
                c = t.n(m);
            let v = (e) => {
                let { className: i, isEmptySearch: t } = e,
                    m = (0, r.useMemo)(
                        () => (t ? (0, s.jsx)(o.A, { id: 'search-results.not-found-title' }) : (0, s.jsx)(o.A, { id: 'error-messages.empty-collection-playlist-title' })),
                        [t],
                    ),
                    v = (0, r.useMemo)(
                        () =>
                            t
                                ? (0, s.jsx)(o.A, { id: 'search-results.not-found-description' })
                                : (0, s.jsx)(o.A, { id: 'error-messages.empty-collection-playlist-description' }),
                        [t],
                    );
                return (0, s.jsxs)('div', {
                    className: (0, n.$)(c().root, i),
                    ...(0, l.Am)(l.Kq.playlist.PLAYLIST_EMPTY_BLOCK),
                    children: [
                        (0, s.jsx)('div', {
                            className: c().iconBackground,
                            children: (0, s.jsx)(a.Icon, { variant: 'search', size: 'l', className: c().icon, ...(0, l.Am)(l.Kq.playlist.PLAYLIST_EMPTY_BLOCK_ICON) }),
                        }),
                        (0, s.jsx)(d.Heading, { variant: 'h3', size: 'xs', className: c().title, ...(0, l.Am)(l.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TITLE), children: m }),
                        (0, s.jsx)(d.Caption, {
                            variant: 'span',
                            size: 'l',
                            className: c().subtitle,
                            ...(0, l.Am)(l.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TEXT),
                            children: v,
                        }),
                    ],
                });
            };
        },
        99793: (e) => {
            e.exports = { root: 'PostAlbums_root__u2a1q', content: 'PostAlbums_content__uMSez' };
        },
        99877: (e, i, t) => {
            'use strict';
            var s;
            t.d(i, { Q: () => s }),
                (function (e) {
                    (e.ALBUMS = 'albums'), (e.ARTISTS = 'artists'), (e.PLAYLISTS = 'playlists');
                })(s || (s = {}));
        },
    },
    (e) => {
        e.O(0, [85, 260, 3196, 403, 2537, 3789, 1970, 2670, 4103, 1311, 7764, 6706, 2899, 5419, 2561, 5906, 4690, 4501, 9154, 914, 3197, 1009, 4670, 7358], () =>
            e((e.s = 56587)),
        ),
            (_N_E = e.O());
    },
]);
