(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4004],
    {
        9905: (e) => {
            e.exports = { root: 'PostAlbums_root__u2a1q', content: 'PostAlbums_content__uMSez' };
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
        12119: (e, i, t) => {
            'use strict';
            t.d(i, { NotFound: () => b });
            var s = t(32290),
                n = t(63618),
                r = t(96103),
                o = t(39407),
                l = t(63423),
                a = t(82586),
                d = t(71926),
                m = t(49574),
                c = t(44574),
                v = t(55178),
                h = t(55365),
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
        13931: (e, i, t) => {
            'use strict';
            t.d(i, { r: () => r });
            var s = t(55178),
                n = t(60900);
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
        15910: (e) => {
            e.exports = { root: 'PostShimmer_root__MlLkY', top: 'PostShimmer_top__ySpmZ', bottom: 'PostShimmer_bottom__ajW_P' };
        },
        16915: (e) => {
            e.exports = {
                root: 'EmptyPlaylistBlock_root__wpA0j',
                iconBackground: 'EmptyPlaylistBlock_iconBackground__pnUlz',
                title: 'EmptyPlaylistBlock_title__pQQLf',
                subtitle: 'EmptyPlaylistBlock_subtitle__P4Q7x',
            };
        },
        18889: (e, i, t) => {
            'use strict';
            var s;
            t.d(i, { Q: () => s }),
                (function (e) {
                    (e.ALBUMS = 'albums'), (e.ARTISTS = 'artists'), (e.PLAYLISTS = 'playlists');
                })(s || (s = {}));
        },
        19182: (e) => {
            e.exports = {
                root: 'PostPage_root__Orhf7',
                scrollableContainer: 'PostPage_scrollableContainer__iV9Bo',
                scrollContainer: 'PostPage_scrollContainer__zrIrH',
                important: 'PostPage_important__qUlED',
                container: 'PostPage_container__orSfz',
                shimmerTitle: 'PostPage_shimmerTitle__EeFCD',
            };
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
        32381: (e, i, t) => {
            'use strict';
            t.d(i, { w: () => s.SomethingWentWrong });
            var s = t(60194);
        },
        32924: (e, i, t) => {
            'use strict';
            t.d(i, { PostNotFoundPage: () => o });
            var s = t(32290),
                n = t(96103),
                r = t(80719);
            let o = (0, n.PA)(() => (0, s.jsx)(r.M, {}));
        },
        38009: (e, i, t) => {
            'use strict';
            t.d(i, { EmptyPlaylistBlock: () => v });
            var s = t(32290),
                n = t(63618),
                r = t(55178),
                o = t(39407),
                l = t(59824),
                a = t(82586),
                d = t(71926),
                m = t(16915),
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
        43740: (e, i, t) => {
            'use strict';
            t.d(i, { a: () => n });
            var s = t(46862);
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
        48909: (e, i, t) => {
            Promise.resolve().then(t.bind(t, 50162)),
                Promise.resolve().then(t.bind(t, 7276)),
                Promise.resolve().then(t.bind(t, 29680)),
                Promise.resolve().then(t.bind(t, 86269)),
                Promise.resolve().then(t.bind(t, 79856)),
                Promise.resolve().then(t.bind(t, 15299)),
                Promise.resolve().then(t.bind(t, 71926)),
                Promise.resolve().then(t.bind(t, 76822)),
                Promise.resolve().then(t.bind(t, 520)),
                Promise.resolve().then(t.bind(t, 34883)),
                Promise.resolve().then(t.bind(t, 7462)),
                Promise.resolve().then(t.bind(t, 18583)),
                Promise.resolve().then(t.bind(t, 16472)),
                Promise.resolve().then(t.bind(t, 83861)),
                Promise.resolve().then(t.bind(t, 91253)),
                Promise.resolve().then(t.bind(t, 63371)),
                Promise.resolve().then(t.bind(t, 15807)),
                Promise.resolve().then(t.bind(t, 91853)),
                Promise.resolve().then(t.bind(t, 96036)),
                Promise.resolve().then(t.bind(t, 86955)),
                Promise.resolve().then(t.bind(t, 11067)),
                Promise.resolve().then(t.bind(t, 5942)),
                Promise.resolve().then(t.bind(t, 70390)),
                Promise.resolve().then(t.bind(t, 43742)),
                Promise.resolve().then(t.bind(t, 78176)),
                Promise.resolve().then(t.bind(t, 45754)),
                Promise.resolve().then(t.bind(t, 22370)),
                Promise.resolve().then(t.bind(t, 10466)),
                Promise.resolve().then(t.bind(t, 41677)),
                Promise.resolve().then(t.bind(t, 73749)),
                Promise.resolve().then(t.bind(t, 83917)),
                Promise.resolve().then(t.bind(t, 73141)),
                Promise.resolve().then(t.bind(t, 73192)),
                Promise.resolve().then(t.bind(t, 11674)),
                Promise.resolve().then(t.bind(t, 10511)),
                Promise.resolve().then(t.bind(t, 44277)),
                Promise.resolve().then(t.bind(t, 47989)),
                Promise.resolve().then(t.bind(t, 54869)),
                Promise.resolve().then(t.bind(t, 39055)),
                Promise.resolve().then(t.bind(t, 12779)),
                Promise.resolve().then(t.bind(t, 96919)),
                Promise.resolve().then(t.bind(t, 8032)),
                Promise.resolve().then(t.bind(t, 85697)),
                Promise.resolve().then(t.bind(t, 52981)),
                Promise.resolve().then(t.bind(t, 2355)),
                Promise.resolve().then(t.bind(t, 10431)),
                Promise.resolve().then(t.bind(t, 83557)),
                Promise.resolve().then(t.bind(t, 66436)),
                Promise.resolve().then(t.bind(t, 54203)),
                Promise.resolve().then(t.bind(t, 58294)),
                Promise.resolve().then(t.bind(t, 23030)),
                Promise.resolve().then(t.bind(t, 74804)),
                Promise.resolve().then(t.bind(t, 60214)),
                Promise.resolve().then(t.bind(t, 66349)),
                Promise.resolve().then(t.bind(t, 10583)),
                Promise.resolve().then(t.bind(t, 77435)),
                Promise.resolve().then(t.bind(t, 89549)),
                Promise.resolve().then(t.bind(t, 88446)),
                Promise.resolve().then(t.bind(t, 40126)),
                Promise.resolve().then(t.bind(t, 38009)),
                Promise.resolve().then(t.bind(t, 50476)),
                Promise.resolve().then(t.bind(t, 83460)),
                Promise.resolve().then(t.bind(t, 64538)),
                Promise.resolve().then(t.bind(t, 32924)),
                Promise.resolve().then(t.bind(t, 63054)),
                Promise.resolve().then(t.bind(t, 71768)),
                Promise.resolve().then(t.bind(t, 65650)),
                Promise.resolve().then(t.bind(t, 59564)),
                Promise.resolve().then(t.bind(t, 9471)),
                Promise.resolve().then(t.bind(t, 78305)),
                Promise.resolve().then(t.bind(t, 70632)),
                Promise.resolve().then(t.bind(t, 35058)),
                Promise.resolve().then(t.bind(t, 85743)),
                Promise.resolve().then(t.bind(t, 90923)),
                Promise.resolve().then(t.bind(t, 17595)),
                Promise.resolve().then(t.bind(t, 41540)),
                Promise.resolve().then(t.bind(t, 48462)),
                Promise.resolve().then(t.bind(t, 8868)),
                Promise.resolve().then(t.bind(t, 12350)),
                Promise.resolve().then(t.bind(t, 95481)),
                Promise.resolve().then(t.bind(t, 47745)),
                Promise.resolve().then(t.bind(t, 12989)),
                Promise.resolve().then(t.bind(t, 2969)),
                Promise.resolve().then(t.bind(t, 84051)),
                Promise.resolve().then(t.bind(t, 27789)),
                Promise.resolve().then(t.bind(t, 70435)),
                Promise.resolve().then(t.bind(t, 19875)),
                Promise.resolve().then(t.bind(t, 54391)),
                Promise.resolve().then(t.bind(t, 63529)),
                Promise.resolve().then(t.bind(t, 73818)),
                Promise.resolve().then(t.bind(t, 20599)),
                Promise.resolve().then(t.bind(t, 84782)),
                Promise.resolve().then(t.bind(t, 30915)),
                Promise.resolve().then(t.bind(t, 70608)),
                Promise.resolve().then(t.bind(t, 18746)),
                Promise.resolve().then(t.bind(t, 71610)),
                Promise.resolve().then(t.bind(t, 23352)),
                Promise.resolve().then(t.bind(t, 10936)),
                Promise.resolve().then(t.bind(t, 2792)),
                Promise.resolve().then(t.bind(t, 22714)),
                Promise.resolve().then(t.bind(t, 37240)),
                Promise.resolve().then(t.bind(t, 3064)),
                Promise.resolve().then(t.bind(t, 51012)),
                Promise.resolve().then(t.bind(t, 9848)),
                Promise.resolve().then(t.bind(t, 47498)),
                Promise.resolve().then(t.bind(t, 8152)),
                Promise.resolve().then(t.bind(t, 43474)),
                Promise.resolve().then(t.bind(t, 46200)),
                Promise.resolve().then(t.bind(t, 5537)),
                Promise.resolve().then(t.bind(t, 34186)),
                Promise.resolve().then(t.bind(t, 56008)),
                Promise.resolve().then(t.bind(t, 67732)),
                Promise.resolve().then(t.bind(t, 30787)),
                Promise.resolve().then(t.bind(t, 65476)),
                Promise.resolve().then(t.bind(t, 83416)),
                Promise.resolve().then(t.bind(t, 31010)),
                Promise.resolve().then(t.bind(t, 19383)),
                Promise.resolve().then(t.bind(t, 3313)),
                Promise.resolve().then(t.bind(t, 81619)),
                Promise.resolve().then(t.bind(t, 83808)),
                Promise.resolve().then(t.bind(t, 22191)),
                Promise.resolve().then(t.bind(t, 14858)),
                Promise.resolve().then(t.bind(t, 61945)),
                Promise.resolve().then(t.bind(t, 83920)),
                Promise.resolve().then(t.bind(t, 49545)),
                Promise.resolve().then(t.bind(t, 3796)),
                Promise.resolve().then(t.bind(t, 40953)),
                Promise.resolve().then(t.bind(t, 30542)),
                Promise.resolve().then(t.bind(t, 59121)),
                Promise.resolve().then(t.bind(t, 71773)),
                Promise.resolve().then(t.bind(t, 34284)),
                Promise.resolve().then(t.bind(t, 46151)),
                Promise.resolve().then(t.bind(t, 32087)),
                Promise.resolve().then(t.bind(t, 5701)),
                Promise.resolve().then(t.bind(t, 10659)),
                Promise.resolve().then(t.bind(t, 68135)),
                Promise.resolve().then(t.bind(t, 75265)),
                Promise.resolve().then(t.bind(t, 36321)),
                Promise.resolve().then(t.bind(t, 29098)),
                Promise.resolve().then(t.bind(t, 92191)),
                Promise.resolve().then(t.bind(t, 27120)),
                Promise.resolve().then(t.bind(t, 53022)),
                Promise.resolve().then(t.bind(t, 22748)),
                Promise.resolve().then(t.bind(t, 84199)),
                Promise.resolve().then(t.bind(t, 81218)),
                Promise.resolve().then(t.bind(t, 90169)),
                Promise.resolve().then(t.bind(t, 6429)),
                Promise.resolve().then(t.bind(t, 44128)),
                Promise.resolve().then(t.bind(t, 31286)),
                Promise.resolve().then(t.bind(t, 92496)),
                Promise.resolve().then(t.bind(t, 21183)),
                Promise.resolve().then(t.bind(t, 59888)),
                Promise.resolve().then(t.bind(t, 95112)),
                Promise.resolve().then(t.bind(t, 57594)),
                Promise.resolve().then(t.bind(t, 26069)),
                Promise.resolve().then(t.bind(t, 4433)),
                Promise.resolve().then(t.bind(t, 50)),
                Promise.resolve().then(t.bind(t, 11262)),
                Promise.resolve().then(t.bind(t, 80792)),
                Promise.resolve().then(t.bind(t, 88424)),
                Promise.resolve().then(t.bind(t, 13528)),
                Promise.resolve().then(t.bind(t, 49932)),
                Promise.resolve().then(t.bind(t, 58534)),
                Promise.resolve().then(t.bind(t, 90357)),
                Promise.resolve().then(t.bind(t, 97755)),
                Promise.resolve().then(t.bind(t, 8097)),
                Promise.resolve().then(t.bind(t, 27373)),
                Promise.resolve().then(t.bind(t, 19620)),
                Promise.resolve().then(t.bind(t, 32156)),
                Promise.resolve().then(t.bind(t, 61376)),
                Promise.resolve().then(t.bind(t, 98148)),
                Promise.resolve().then(t.bind(t, 49522)),
                Promise.resolve().then(t.bind(t, 28563)),
                Promise.resolve().then(t.bind(t, 49518)),
                Promise.resolve().then(t.bind(t, 49346)),
                Promise.resolve().then(t.bind(t, 38223)),
                Promise.resolve().then(t.bind(t, 58237)),
                Promise.resolve().then(t.bind(t, 22369)),
                Promise.resolve().then(t.bind(t, 56367)),
                Promise.resolve().then(t.bind(t, 4914)),
                Promise.resolve().then(t.bind(t, 59833)),
                Promise.resolve().then(t.bind(t, 41566)),
                Promise.resolve().then(t.bind(t, 23042)),
                Promise.resolve().then(t.bind(t, 83755)),
                Promise.resolve().then(t.bind(t, 25160)),
                Promise.resolve().then(t.bind(t, 43679)),
                Promise.resolve().then(t.bind(t, 21027)),
                Promise.resolve().then(t.bind(t, 99752)),
                Promise.resolve().then(t.bind(t, 41972)),
                Promise.resolve().then(t.bind(t, 37711)),
                Promise.resolve().then(t.bind(t, 4820)),
                Promise.resolve().then(t.bind(t, 36011)),
                Promise.resolve().then(t.bind(t, 14388)),
                Promise.resolve().then(t.bind(t, 28724)),
                Promise.resolve().then(t.bind(t, 56664)),
                Promise.resolve().then(t.bind(t, 41812)),
                Promise.resolve().then(t.bind(t, 38420)),
                Promise.resolve().then(t.bind(t, 54290)),
                Promise.resolve().then(t.bind(t, 78570)),
                Promise.resolve().then(t.bind(t, 26452)),
                Promise.resolve().then(t.bind(t, 38936)),
                Promise.resolve().then(t.bind(t, 13798)),
                Promise.resolve().then(t.bind(t, 58054)),
                Promise.resolve().then(t.bind(t, 15509)),
                Promise.resolve().then(t.bind(t, 74694)),
                Promise.resolve().then(t.bind(t, 85377)),
                Promise.resolve().then(t.bind(t, 1444)),
                Promise.resolve().then(t.bind(t, 92744)),
                Promise.resolve().then(t.bind(t, 61258)),
                Promise.resolve().then(t.bind(t, 5592)),
                Promise.resolve().then(t.bind(t, 9634)),
                Promise.resolve().then(t.bind(t, 17584)),
                Promise.resolve().then(t.bind(t, 12894)),
                Promise.resolve().then(t.bind(t, 2694)),
                Promise.resolve().then(t.bind(t, 71730)),
                Promise.resolve().then(t.bind(t, 22734)),
                Promise.resolve().then(t.bind(t, 56037)),
                Promise.resolve().then(t.bind(t, 30584)),
                Promise.resolve().then(t.bind(t, 76385)),
                Promise.resolve().then(t.bind(t, 56059)),
                Promise.resolve().then(t.bind(t, 10180)),
                Promise.resolve().then(t.bind(t, 90326)),
                Promise.resolve().then(t.bind(t, 40229)),
                Promise.resolve().then(t.bind(t, 80195)),
                Promise.resolve().then(t.bind(t, 8264)),
                Promise.resolve().then(t.bind(t, 3630)),
                Promise.resolve().then(t.bind(t, 89363)),
                Promise.resolve().then(t.bind(t, 96677)),
                Promise.resolve().then(t.bind(t, 95432)),
                Promise.resolve().then(t.bind(t, 32562)),
                Promise.resolve().then(t.bind(t, 56568)),
                Promise.resolve().then(t.bind(t, 79884)),
                Promise.resolve().then(t.bind(t, 90048)),
                Promise.resolve().then(t.bind(t, 31236)),
                Promise.resolve().then(t.bind(t, 37340)),
                Promise.resolve().then(t.bind(t, 58345)),
                Promise.resolve().then(t.bind(t, 65755)),
                Promise.resolve().then(t.bind(t, 32152)),
                Promise.resolve().then(t.bind(t, 61748)),
                Promise.resolve().then(t.bind(t, 86844)),
                Promise.resolve().then(t.bind(t, 17106)),
                Promise.resolve().then(t.bind(t, 60244)),
                Promise.resolve().then(t.bind(t, 29268)),
                Promise.resolve().then(t.bind(t, 11260)),
                Promise.resolve().then(t.bind(t, 34925)),
                Promise.resolve().then(t.bind(t, 94218)),
                Promise.resolve().then(t.bind(t, 45257)),
                Promise.resolve().then(t.bind(t, 4008)),
                Promise.resolve().then(t.bind(t, 88523)),
                Promise.resolve().then(t.bind(t, 44390));
        },
        50476: (e, i, t) => {
            'use strict';
            t.d(i, { HorizontalPlaylistCard: () => N });
            var s = t(32290),
                n = t(63618),
                r = t(96103),
                o = t(55178),
                l = t(60900),
                a = t(39407),
                d = t(16172),
                m = t(59824),
                c = t(71483),
                v = t(91027),
                h = t(58359),
                P = t(82586),
                b = t(71926),
                u = t(49574),
                _ = t(44574),
                p = t(13931),
                y = t(55550),
                x = t(84534),
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
            var C = t(61947),
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
        50510: (e, i, t) => {
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
            var s = t(60754),
                n = t(49574);
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
            var o = t(21916),
                l = t(55178);
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
            var a = t(55550);
            let d = (e) =>
                (0, s.wg)({
                    ...(0, a.jX)(e),
                    owner: e.owner ? ((e) => ({ uid: e.uid, login: e.login, name: e.name, sex: e.sex, verified: e.verified }))(e.owner) : void 0,
                    description: e.description,
                    tags: e.tags,
                    modified: e.modified,
                    madeFor: e.madeFor ? ((e) => (0, s.wg)({ caseForms: e.caseForms ? (0, n.NH4)(e.caseForms) : null }))(e.madeFor) : null,
                });
            var m = t(33797);
            let c = (e) => {
                var i, t;
                return (0, s.wg)({ ...(0, a.jX)(e), artists: null != (t = null == e || null == (i = e.substituted?.artists ?? e.artists) ? void 0 : i.map(m.dM)) ? t : [] });
            };
            var v = t(93510);
            let h = (e) => {
                var i, t;
                return (0, s.wg)({ ...(0, a.jX)(e), tracks: null != (t = null == e || null == (i = e.tracks) ? void 0 : i.map(v.Rw)) ? t : [] });
            };
            var P = t(95428);
            let b = s.gK.model('PlaylistOwner', { caseForms: s.gK.maybeNull(P.lg) });
            var u = t(51496);
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
            var g = t(38009),
                k = t(50476),
                C = t(83460),
                j = t(64538);
        },
        55365: (e) => {
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
        60194: (e, i, t) => {
            'use strict';
            t.d(i, { SomethingWentWrong: () => u });
            var s = t(32290),
                n = t(63618),
                r = t(96103),
                o = t(55178),
                l = t(60900),
                a = t(39407),
                d = t(63423),
                m = t(82586),
                c = t(71926),
                v = t(49574),
                h = t(44574),
                P = t(30310),
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
        61947: (e) => {
            e.exports = {
                description: 'HorizontalPlaylistCard_description__KYHZF',
                likesCount: 'HorizontalPlaylistCard_likesCount__rgUhr',
                tracksCount: 'HorizontalPlaylistCard_tracksCount__ZdjzM',
                icon: 'HorizontalPlaylistCard_icon__LHymu',
            };
        },
        63054: (e, i, t) => {
            'use strict';
            t.d(i, { PostPage: () => K });
            var s = t(32290),
                n = t(63618),
                r = t(96103),
                o = t(21916),
                l = t(55178),
                a = t(18889),
                d = t(46049),
                m = t(79856),
                c = t(71926),
                v = t(32381),
                h = t(75645),
                P = t(49574),
                b = t(44574),
                u = t(15910),
                _ = t.n(u);
            let p = () =>
                (0, s.jsxs)('div', {
                    className: _().root,
                    children: [(0, s.jsx)(m.Shimmer, { radius: 'l', className: _().top }), (0, s.jsx)(m.Shimmer, { radius: 'l', className: _().bottom })],
                });
            var y = t(19182),
                x = t.n(y),
                g = t(16486),
                k = t(9905),
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
            var N = t(58634),
                f = t(98503),
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
            var w = t(50510),
                S = t(79043),
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
        64538: (e, i, t) => {
            'use strict';
            t.d(i, { PlaylistsCarousel: () => m });
            var s = t(32290),
                n = t(55178),
                r = t(16172),
                o = t(49574),
                l = t(44574),
                a = t(83460);
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
        76822: (e, i, t) => {
            'use strict';
            let s;
            t.d(i, { useMetrika: () => o });
            var n = t(55178),
                r = t(43740);
            let o = () => {
                let e = (s || (s = (0, r.a)()), s),
                    i = (0, n.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, n.useMemo)(() => ({ ...e, isLoaded: i }), [i]);
            };
        },
        79043: (e) => {
            e.exports = { root: 'PostPlaylists_root__3tea0', content: 'PostPlaylists_content__2fXI5' };
        },
        80719: (e, i, t) => {
            'use strict';
            t.d(i, { M: () => s.NotFound });
            var s = t(12119);
        },
        83460: (e, i, t) => {
            'use strict';
            t.d(i, { PlaylistCard: () => L });
            var s = t(32290),
                n = t(63618),
                r = t(96103),
                o = t(55178),
                l = t(60900),
                a = t(16172),
                d = t(59824),
                m = t(71483),
                c = t(91027),
                v = t(6752),
                h = t(14934),
                P = t(82586),
                b = t(86269),
                u = t(71926),
                _ = t(33797),
                p = t(55550),
                y = t(49574),
                x = t(44574),
                g = t(13931),
                k = t(19740),
                C = t(78822);
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
            var N = t(11675),
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
        84534: (e) => {
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
        98503: (e) => {
            e.exports = { root: 'PostArtists_root__Zxmjq', content: 'PostArtists_content__JzGOH' };
        },
    },
    (e) => {
        e.O(0, [1670, 3445, 9745, 9221, 4567, 6375, 4826, 1311, 7764, 6706, 3267, 9769, 9574, 4574, 5428, 6049, 4089, 6486, 3317, 4220, 9562, 7358], () =>
            e((e.s = 48909)),
        ),
            (_N_E = e.O());
    },
]);
