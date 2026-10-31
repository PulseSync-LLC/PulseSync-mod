(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2539],
    {
        408: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => d });
            var i = a(45144),
                l = a(47618),
                s = a(53548),
                r = a(49176),
                n = a(9519);
            class o extends i.uN {}
            (0, n._)(o, 'activators', [
                {
                    eventName: 'onKeyDown',
                    handler: (e) => {
                        let { nativeEvent: t } = e;
                        return (!(t.target instanceof HTMLElement) || 'button' !== t.target.tagName.toLowerCase()) && t.code === r.v.ENTER;
                    },
                },
            ]);
            let d = () => {
                let [e, t] = (0, s.useState)(null),
                    a = (0, s.useCallback)((e) => {
                        let { active: a } = e;
                        t(a.id);
                    }, []);
                return {
                    activeId: e,
                    handleDragStart: a,
                    handleDragCancel: (0, s.useCallback)(() => {
                        t(null);
                    }, []),
                    sensors: (0, i.FR)(
                        (0, i.MS)(i.cA, { activationConstraint: { distance: { y: 1 }, tolerance: 5 } }),
                        (0, i.MS)(i.IG, { activationConstraint: { delay: 250, tolerance: 5 } }),
                        (0, i.MS)(o, { coordinateGetter: l.JR, keyboardCodes: { start: [r.v.ENTER], cancel: [r.v.ESCAPE], end: [r.v.ENTER] } }),
                    ),
                };
            };
        },
        631: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            let i = (e, t, a) => {
                var i, l, s;
                let r = null != (s = null == (l = document.getElementById(t)) || null == (i = l.querySelector('iframe')) ? void 0 : i.contentWindow) ? s : null;
                return null !== r && e.source === r && ('null' === window.location.origin || e.origin === window.location.origin) && a(e.data);
            };
        },
        1220: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { $: () => i }),
                (function (e) {
                    ((e.RU = 'ru'),
                        (e.EN = 'en'),
                        (e.UK = 'uk'),
                        (e.BE = 'be'),
                        (e.KK = 'kk'),
                        (e.HY = 'hy'),
                        (e.AZ = 'az'),
                        (e.KA = 'ka'),
                        (e.HE = 'he'),
                        (e.UZ = 'uz'),
                        (e.TG = 'tg'),
                        (e.TR = 'tr'),
                        (e.JA = 'ja'),
                        (e.ZH = 'zh'),
                        (e.KO = 'ko'),
                        (e.TH = 'th'),
                        (e.ID = 'id'),
                        (e.DE = 'de'),
                        (e.EL = 'el'),
                        (e.RO = 'ro'),
                        (e.MO = 'mo'),
                        (e.AR = 'ar'));
                })(i || (i = {})));
        },
        1606: (e) => {
            e.exports = {
                cancelIcon: 'DownloadButton_cancelIcon__MR36M',
                root_downloading: 'DownloadButton_root_downloading__H8Eh7',
                root: 'DownloadButton_root__AU5eq',
                downloadingProgress: 'DownloadButton_downloadingProgress__eenjt',
                progress: 'DownloadButton_progress__MM72T',
                progressText: 'DownloadButton_progressText__aQ12B',
                downloadedIcon: 'DownloadButton_downloadedIcon__tETl2',
            };
        },
        2520: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => r });
            var i = a(53548),
                l = a(18593),
                s = a(93039);
            let r = (e) => {
                let { playlistId: t, filter: a } = e;
                return (0, i.useMemo)(() => (t ? (0, s.t)({ contextType: l.K.Playlist, contextId: t, filter: a }) : null), [t, a]);
            };
        },
        3685: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => l });
            var i = a(53548);
            let l = (e, t) => ({
                topColorStyle: (0, i.useMemo)(() => {
                    if (void 0 === t) return;
                    let a = t - 17;
                    return { '--average-color-background': e, transform: 'translateY('.concat(t >= 17 ? 0 : a, 'px)'), opacity: 1 };
                }, [t, e]),
                headerStyle: (0, i.useMemo)(() => ({ '--average-color-background': e }), [e]),
            });
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
        5739: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                card: 'TrackUgcUpload_card__bidIG',
                important: 'TrackUgcUpload_important__RQkp0',
                playButton: 'TrackUgcUpload_playButton__3l2I7',
                meta: 'TrackUgcUpload_meta__aHQv9',
                title: 'TrackUgcUpload_title__Xq3UP',
                status: 'TrackUgcUpload_status__aFGvl',
                controls: 'TrackUgcUpload_controls__Ie2Ox',
            };
        },
        8357: (e) => {
            e.exports = {
                root: 'SearchPlaylistInput_root__o14iM',
                content: 'SearchPlaylistInput_content__iDyfU',
                catalog: 'SearchPlaylistInput_catalog__5r6Xm',
                catalog_withTracks: 'SearchPlaylistInput_catalog_withTracks__B2ZYF',
                track: 'SearchPlaylistInput_track__2TGLS',
                shimmerItem: 'SearchPlaylistInput_shimmerItem__V0cOt',
                emptyBlockContainer: 'SearchPlaylistInput_emptyBlockContainer__NSQKG',
                disappearingTrack: 'SearchPlaylistInput_disappearingTrack__D6ja5',
                disappearing: 'SearchPlaylistInput_disappearing__w48Cd',
                appearingTrack: 'SearchPlaylistInput_appearingTrack__CYHzN',
                appearing: 'SearchPlaylistInput_appearing__SafaE',
            };
        },
        9184: (e) => {
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
        10561: (e) => {
            e.exports = {
                root: 'PageHeaderPlaylist_root__yJBii',
                trailerControl: 'PageHeaderPlaylist_trailerControl__grrD9',
                pinControl: 'PageHeaderPlaylist_pinControl__hJOde',
                downloadControl: 'PageHeaderPlaylist_downloadControl__ijcAx',
                menuControl: 'PageHeaderPlaylist_menuControl__RGH0G',
                likeControl: 'PageHeaderPlaylist_likeControl__bCypn',
                controls: 'PageHeaderPlaylist_controls__uSwwK',
                mainControls: 'PageHeaderPlaylist_mainControls__k_S_i',
                ugcControls: 'PageHeaderPlaylist_ugcControls__9q8Ne',
            };
        },
        10829: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => h });
            var i = a(88800),
                l = a(65724),
                s = a(84961),
                r = a(53548),
                n = a(17392),
                o = a(34126),
                d = a(39079),
                c = a(72288),
                u = a(39267),
                m = a(13619),
                p = a(73805),
                _ = a(15232),
                y = a(56712),
                g = a(26243),
                v = a.n(g);
            let h = (0, s.PA)((e) => {
                var t;
                let {
                        track: a,
                        playContextParams: s,
                        className: g,
                        withDNDBlock: h,
                        isDragging: x,
                        draggingClassName: P,
                        ignoreDislikedStyles: A,
                        withSecondaryColor: f,
                        handleRemove: T,
                        withDislike: b,
                        withTrailer: C = !0,
                        beforeTitle: k,
                        removeButtonAriaLabel: I,
                        hideControls: S,
                    } = e,
                    L = (0, d.D)({ playContextParams: s, entityId: a.entityId }),
                    {
                        settings: { isMobile: j },
                    } = (0, c.g)(),
                    N = (0, o.X)(a.trackSource, { isMobile: j }),
                    E = (0, r.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: A,
                                radius: 'xs',
                                ...e,
                            }),
                        [A, a.coverUri, a.isAvailable, a.isDisliked, a.title],
                    );
                return (0, i.jsx)(y.C, {
                    className: (0, l.$)(g, { [v().trackWithDots]: h, [v().important]: h }),
                    track: a,
                    beforeBlock: h ? (0, i.jsx)(m.O, { className: (0, l.$)(v().dots, P), isDragging: x }) : void 0,
                    meta: (0, i.jsx)(_.j, { withArtistLink: N, beforeTitle: k, track: a, ignoreDislikedStyles: A, withSecondaryColor: f }),
                    playButtonCellRender: E,
                    controls: (0, i.jsx)(p.Q, {
                        track: a,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: A,
                        utmLink: null == (t = s.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: f,
                        handleRemove: T,
                        withDislike: b,
                        withTrailer: C,
                        removeButtonAriaLabel: I,
                        hideControls: S,
                    }),
                    ...L,
                    'data-test-id': n.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        11940: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => n });
            var i = a(88800),
                l = a(35412);
            let s = /\[([^([\])]+)\]\(((?:https?:\/)?\/[^(()\s)]+)\)/g,
                r = /\[[^([\])]+\]\((?:https?:\/)?\/[^(()\s)]+\)/,
                n = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!e || !t) return [];
                    let n = (0, l.ky)(e).toString(),
                        o = [...n.matchAll(s)];
                    return n.split(r).reduce((e, l, s) => {
                        e.push(l);
                        let { 1: r, 2: n } = o[s] || [];
                        return (r && n && e.push((0, i.jsx)(t, { href: n, ...a, children: r })), e);
                    }, []);
                };
        },
        12364: (e) => {
            e.exports = { root: 'PageHeaderPlaylistBrandingLink_root__7dQVL' };
        },
        12844: (e) => {
            e.exports = {
                root: 'PlaylistPageFooter_root__h6jh8',
                carouselContainer: 'PlaylistPageFooter_carouselContainer__fIwg5',
                carouselBlock: 'PlaylistPageFooter_carouselBlock__OFRtz',
                carouselBlockHeader: 'PlaylistPageFooter_carouselBlockHeader__HbjLr',
                footer: 'PlaylistPageFooter_footer__Mqwre',
            };
        },
        14533: (e) => {
            e.exports = {
                controlsContainer: 'CommonPageHeader_controlsContainer__4_h22',
                controls: 'CommonPageHeader_controls__c27E_',
                playControl: 'CommonPageHeader_playControl__gYOuR',
                playControl_withLogin: 'CommonPageHeader_playControl_withLogin__FL_L6',
            };
        },
        16472: (e) => {
            e.exports = {
                root: 'PageHeaderShimmer_root__kqSwa',
                cover: 'PageHeaderShimmer_cover__ay2cr',
                content: 'PageHeaderShimmer_content__SdBKK',
                info: 'PageHeaderShimmer_info__cZkS2',
                entityName: 'PageHeaderShimmer_entityName__tlWnA',
                title: 'PageHeaderShimmer_title__xKG4e',
                meta: 'PageHeaderShimmer_meta__YWx0m',
                controls: 'PageHeaderShimmer_controls__gPErM',
                desktopPlayButton: 'PageHeaderShimmer_desktopPlayButton__R7EmH',
                button: 'PageHeaderShimmer_button__13qrG',
            };
        },
        16948: (e) => {
            e.exports = {
                header: 'PlaylistPageHeader_header__Fgqns',
                header_branded: 'PlaylistPageHeader_header_branded__WyJ4k',
                header_brandedAxe: 'PlaylistPageHeader_header_brandedAxe__RDLB2',
                content: 'PlaylistPageHeader_content__boBkt',
                emptyPlaylist: 'PlaylistPageHeader_emptyPlaylist__oiG4B',
            };
        },
        20924: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => r });
            var i = a(8655),
                l = a(69704),
                s = a(5295);
            let r = (e) => {
                let { theme: t } = (0, l.W)(),
                    a = t === i.S.Light ? 0.6 : 0.35;
                return { '--trailer-color': (0, s.e)(e, 0.8, a) };
            };
        },
        23577: (e, t, a) => {
            'use strict';
            (a.d(t, { FN: () => l, gj: () => i }), a(13687));
            let i = (e) => {
                    let { containerNodeRect: t, draggingNodeRect: a, transform: i } = e;
                    return a && t
                        ? (function (e, t, a) {
                              let i = { ...e };
                              return (
                                  t.top + e.y <= a.top ? (i.y = a.top - t.top) : t.bottom + e.y >= a.top + a.height && (i.y = a.top + a.height - t.bottom),
                                  t.left + e.x <= a.left ? (i.x = a.left - t.left) : t.right + e.x >= a.left + a.width && (i.x = a.left + a.width - t.right),
                                  i
                              );
                          })(i, a, t)
                        : i;
                },
                l = (e) => {
                    let { transform: t } = e;
                    return { ...t, x: 0 };
                };
        },
        23598: (e) => {
            e.exports = {
                brandedPlaylistBannerWrapper: 'PlaylistPageHeaderBranding_brandedPlaylistBannerWrapper__S8BTI',
                creative: 'PlaylistPageHeaderBranding_creative__5OXtq',
            };
        },
        24586: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => s });
            var i = a(88800),
                l = a(35412);
            let s = (e) => {
                let { value: t } = e,
                    a = { '@context': 'https://schema.org', ...t };
                return (0, i.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: (0, l.Gr)(a) } });
            };
        },
        24609: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => s, m: () => l });
            var i = a(53548);
            let l = (0, i.createContext)(null);
            function s() {
                return (0, i.useContext)(l);
            }
        },
        25300: (e) => {
            e.exports = {
                root: 'PageHeaderPlaylistMeta_root__9SHZ0',
                description: 'PageHeaderPlaylistMeta_description__edoVx',
                descriptionButton: 'PageHeaderPlaylistMeta_descriptionButton__Jkbg9',
                descriptionLink: 'PageHeaderPlaylistMeta_descriptionLink__OcY5m',
                updatedText: 'PageHeaderPlaylistMeta_updatedText__FSo_0',
                descriptionActionLink: 'PageHeaderPlaylistMeta_descriptionActionLink__aGgtK',
                addDescription: 'PageHeaderPlaylistMeta_addDescription__bFw2Y',
                textField: 'PageHeaderPlaylistMeta_textField__J5QMd',
                actionButtons: 'PageHeaderPlaylistMeta_actionButtons__EYX8Z',
                saveButton: 'PageHeaderPlaylistMeta_saveButton__rZbPS',
                cancelButton: 'PageHeaderPlaylistMeta_cancelButton__Qc5lG',
            };
        },
        26208: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            var i = (function (e) {
                return (
                    (e.AUDIO = 'AUDIO'),
                    (e.TOP_BANNER = 'TOP_BANNER'),
                    (e.SIDE_BANNER = 'SIDE_BANNER'),
                    (e.TOUCH_BANNER = 'TOUCH_BANNER'),
                    (e.PLAYLIST_BRANDING = 'PLAYLIST_BRANDING'),
                    (e.AXE_ENTITY_BRANDING = 'AXE_ENTITY_BRANDING'),
                    (e.PLAYER_BRANDING = 'PLAYER_BRANDING'),
                    e
                );
            })({});
        },
        26243: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        27054: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => m });
            var i = a(53548),
                l = a(78793),
                s = a(92716),
                r = a(99984),
                n = a(90780),
                o = a(29993),
                d = a(65523),
                c = a(37436),
                u = a(14518);
            let m = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: t = !0 } = e,
                    a = (0, n.st)(),
                    m = (0, d.U)(),
                    { hash: p } = (0, n.gf)(),
                    { pageId: _ } = (0, u.$)(),
                    y = (0, o.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !a ||
                            !_ ||
                            !p ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = c.W[_];
                        if (!t) return;
                        let i = {
                                hash: p,
                                pageId: s.AppScreen.Link,
                                entityType: s.EntityTypes.Deeplink,
                                entityId: s.EntityTypes.Deeplink,
                                from: s.AppScreen.Link,
                                to: t,
                                deepLink: null != e ? e : window.location.href,
                            },
                            n = (0, l.F)({ params: i, logger: m, context: 'useSendDeeplinkNavigationEvent' });
                        n && (0, r.ID)(a.evgenInstance, n);
                    });
                return (
                    (0, i.useEffect)(() => {
                        t && y();
                    }, [t, y]),
                    (0, o.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t || y({ deepLink: e });
                    })
                );
            };
        },
        27169: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { Q: () => i }),
                (function (e) {
                    ((e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic'));
                })(i || (i = {})));
        },
        29343: (e) => {
            e.exports = { root: 'PlaylistFilter_root__AnfqR', root_selected: 'PlaylistFilter_root_selected__DxSW9' };
        },
        31059: (e) => {
            e.exports = {
                menuContent: 'ContextMenuAddTracksToPlaylistItem_menuContent__xq7AW',
                playlistList: 'ContextMenuAddTracksToPlaylistItem_playlistList__B4kxD',
                virtualPlaylistList: 'ContextMenuAddTracksToPlaylistItem_virtualPlaylistList__iC936',
                virtualPlaylistItem: 'ContextMenuAddTracksToPlaylistItem_virtualPlaylistItem__c7vyn',
                searchSection: 'ContextMenuAddTracksToPlaylistItem_searchSection__XKQcm',
                searchField: 'ContextMenuAddTracksToPlaylistItem_searchField__02VVy',
                playlistItemIcon: 'ContextMenuAddTracksToPlaylistItem_playlistItemIcon__76dbD',
                playlistItemShimmer: 'ContextMenuAddTracksToPlaylistItem_playlistItemShimmer__2WkFc',
                playlistItem: 'ContextMenuAddTracksToPlaylistItem_playlistItem___kFlm',
                emptyState: 'ContextMenuAddTracksToPlaylistItem_emptyState__vrM8b',
                createPlaylistButton: 'ContextMenuAddTracksToPlaylistItem_createPlaylistButton__IlAeY',
                menuDivider: 'ContextMenuAddTracksToPlaylistItem_menuDivider__oZg1N',
            };
        },
        32353: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => i, u: () => l });
            var i = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                l = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        32596: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => N });
            var i = a(88800),
                l = a(65724),
                s = a(84961),
                r = a(53548),
                n = a(2058),
                o = a(88969);
            a(30282);
            var d = a(96817),
                c = a(52300),
                u = a(29504),
                m = a(78793),
                p = a(92716),
                _ = a(99984),
                y = a(90780),
                g = a(65523),
                v = a(14518),
                h = a(44230),
                x = a(4370),
                P = a(72288),
                A = a(97956),
                f = a(56248),
                T = a(90688),
                b = a(78940);
            let C = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var k = a(96856),
                I = a.n(k);
            let S = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: s } = e,
                    { slam: r } = (0, P.g)(),
                    { contentRef: n } = (0, h.g)(),
                    c = (0, b.Z)(x.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(I().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(f.L, {
                                withBackwardFallback: '/',
                                className: (0, l.$)(I().navigation, { [I().navigation_desktop]: !n }),
                                withForwardControl: !1,
                                onBackwardClick: s,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, l.$)(I().content, { [I().content_shrink]: !a }),
                            children: [
                                (0, i.jsx)(T._V, { className: I().image, src: C.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: I().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: I().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: I().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                r.hasDownloadedTracks &&
                                    (0, i.jsx)(d.$, {
                                        className: I().button,
                                        onClick: c,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: I().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var L = a(9184),
                j = a.n(L);
            let N = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: s } = e,
                    { formatMessage: T } = (0, n.A)(),
                    b = (0, r.useContext)(P.P),
                    C = null == b ? void 0 : b.experiments.checkExperiment(A.z.WebNextUnstableMusicScreen, 'on'),
                    k = T(C ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, y.st)(),
                        { hash: a } = (0, y.gf)(),
                        { pageId: i } = (0, v.$)(),
                        l = (0, g.U)();
                    (0, r.useEffect)(() => {
                        if (!t || !a || !i) return;
                        let s = (0, m.F)({
                            params: {
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: a,
                                pageId: i,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            },
                            logger: l,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, _.z5)(t.evgenInstance, s);
                    }, [t, e, a, i, l]);
                })(k);
                let { sendRefreshEvent: I } = (function () {
                        let e = (0, y.st)(),
                            { hash: t } = (0, y.gf)(),
                            { pageId: a } = (0, v.$)(),
                            i = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, r.useCallback)(() => {
                                if (!e || !t || !a) return;
                                let l = (0, m.F)({
                                    params: {
                                        actionType: p.ActionType.Refresh,
                                        userInteractionType: p.UserInteractionType.Tap,
                                        entityType: p.EntityTypes.Error,
                                        entityId: p.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: a,
                                        pageStyle: p.PageStyles.Fullscreen,
                                        pagePlacement: p.PagePlacements.Fullscreen,
                                        mainObjectType: p.DomainObjectType.NonApplicable,
                                        mainObjectId: p.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                l && (0, _.bv)(e.evgenInstance, l);
                            }, [e, t, a, i]),
                        };
                    })(),
                    L = (0, r.useCallback)(() => {
                        (I(), (window.location.href = x.Z.main.href));
                    }, [I]),
                    { contentRef: N } = (0, h.g)();
                return C
                    ? (0, i.jsx)(S, { className: t, withBackwardControl: a, onBack: s })
                    : (0, i.jsxs)('div', {
                          className: (0, l.$)(j().root, t),
                          children: [
                              a &&
                                  (0, i.jsx)(f.L, {
                                      withBackwardFallback: '/',
                                      className: (0, l.$)(j().navigation, { [j().navigation_desktop]: !N }),
                                      withForwardControl: !1,
                                      onBackwardClick: s,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, l.$)(j().content, { [j().content_shrink]: !a }),
                                  children: [
                                      (0, i.jsx)(c.I, { className: j().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, l.$)(j().title, j().important), variant: 'h3', size: 'xs', children: k }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, l.$)(j().text, j().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(d.$, {
                                          onClick: L,
                                          className: j().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        32932: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => i });
            var i = (function (e) {
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
            })({});
        },
        34407: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => i });
            let i = 100;
        },
        37821: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => r });
            var i = a(8655),
                l = a(69704),
                s = a(5295);
            let r = (e) => {
                let { theme: t } = (0, l.W)(),
                    a = t === i.S.Light ? 0.48 : 0.4;
                return { '--cover-color': (0, s.e)(e, 0.8, a) };
            };
        },
        37862: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => i });
            var i = (function (e) {
                return ((e.ALL = 'all'), e);
            })({});
        },
        38147: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return ((e.EMPTY = 'empty'), (e.DIRECT = 'direct'), (e.CREATIVE = 'creative'), (e.BRANDING = 'branding'), e);
            })({});
        },
        39400: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => D });
            var i = a(88800),
                l = a(65724),
                s = a(84961),
                r = a(53548),
                n = a(79070),
                o = a(32353),
                d = a(44230),
                c = a(72288),
                u = a(94058),
                m = a(76099),
                p = a(37862),
                _ = a(78793),
                y = a(81123),
                g = a(90780),
                v = a(65523),
                h = a(37436),
                x = a(34500),
                P = a(14518),
                A = a(73442),
                f = a(87366),
                T = a(29343),
                b = a.n(T);
            let C = (e) => {
                let { filter: t, tabsState: a, value: s, isSticky: n, ...o } = e,
                    d = (() => {
                        let e = (0, r.useRef)(!1),
                            t = (0, g.st)(),
                            a = (0, v.U)(),
                            { hash: i } = (0, g.gf)(),
                            { pageId: l } = (0, P.$)(),
                            { mainObjectType: s, mainObjectId: n } = (0, x.N)(),
                            { skeleton: o } = (0, A.b)();
                        return (0, r.useCallback)(
                            (r) => {
                                let { tabId: d = '', tabPos: c = 1, isTabSelectedByDefault: u = !1 } = r;
                                if (!t || !l || e.current) return;
                                let m = { hash: i, pageId: h.W[l], tabId: d, tabPos: c, isTabSelectedByDefault: u };
                                (o && (m.skeletonId = o), n && s && ((m.mainObjectType = s), (m.mainObjectId = n)));
                                let p = (0, _.F)({ params: m, logger: a, context: 'useSendEventOnTabLoaded' });
                                p && ((0, y.hc)(t.evgenInstance, p), (e.current = !0));
                            },
                            [t, l, i, o, n, s, a],
                        );
                    })();
                return (
                    (0, r.useEffect)(() => {
                        d({ tabId: t.id, tabPos: s + 1, isTabSelectedByDefault: t.id === p.Q.ALL });
                    }, [t.id, s, d]),
                    (0, i.jsx)(f.o, { tabIndex: n ? -1 : 0, className: (0, l.$)(b().root, { [b().root_selected]: s === a.value }), title: t.name, value: s, ...o })
                );
            };
            var k = a(46911),
                I = a.n(k);
            let S = (0, s.PA)((e) => {
                let { className: t, isActive: a = !0, shimmerClassName: s } = e;
                return (0, i.jsx)(m.wI, {
                    className: (0, l.$)(I().root, t),
                    isShimmerVisible: !0,
                    value: 0,
                    shimmer: (0, i.jsx)(m.zr, { className: (0, l.$)(I().root, s), shimmerClassName: I().shimmer, count: 3, isActive: a }),
                });
            });
            var L = a(89021),
                j = a.n(L);
            let N = { [o.u.Desktop]: { start: 40, end: 20 }, [o.u.Mobile]: { start: 40, end: 40 } },
                E = { [o.u.Desktop]: { start: 40, end: 20 }, [o.u.Mobile]: { start: 20, end: 50 } },
                R = (0, s.PA)((e) => {
                    let {
                            tabsState: t,
                            handleFilterClick: a,
                            className: s,
                            forwardRef: o,
                            carouselClassName: p,
                            shimmerClassName: _,
                            isSticky: y,
                            items: g,
                            isShimmerVisible: v,
                            isShimmerActive: h,
                            skipSearchCheck: x = !1,
                        } = e,
                        {
                            playlist: P,
                            settings: { isMobile: A },
                        } = (0, c.g)(),
                        { playlistStickyFiltersRef: f, playlistStaticFiltersRef: T, contentScrollRef: b } = (0, d.g)(),
                        k = null != g ? g : P.filters.items,
                        I = (0, n.L)(() =>
                            (0, i.jsx)(m.wI, {
                                ref: o,
                                className: (0, l.$)(j().carousel, p),
                                ...t,
                                onTabChange: a,
                                children: null == k ? void 0 : k.map((e, a) => (0, i.jsx)(C, { filter: e, tabsState: t, value: a, isSticky: y }, e.id)),
                            }),
                        ),
                        L = (0, r.useCallback)(() => {
                            T && f && (T.scrollLeft = f.scrollLeft);
                        }, [T, f]),
                        R = (0, r.useCallback)(() => {
                            T && f && (f.classList.add(j().carousel_noSmooth), (f.scrollLeft = T.scrollLeft), f.classList.remove(j().carousel_noSmooth));
                        }, [T, f]),
                        [D, w] = (0, r.useState)(!1);
                    (0, r.useEffect)(() => {
                        D && R();
                    }, [D, R]);
                    let O = (0, r.useCallback)(() => {
                        w((null == f ? void 0 : f.checkVisibility({ checkOpacity: !0 })) || !1);
                    }, [f]);
                    return (
                        (0, r.useEffect)(() => {
                            let e = new AbortController(),
                                t = { signal: e.signal };
                            return (
                                y
                                    ? (null == f || f.addEventListener('scroll', L, t), null == f || f.addEventListener('resize', L, t))
                                    : A
                                      ? (window.addEventListener('scroll', O, t), window.addEventListener('resize', O, t))
                                      : (null == b || b.addEventListener('scroll', O, t), null == b || b.addEventListener('resize', O, t)),
                                () => {
                                    e.abort();
                                }
                            );
                        }, [y, b, f, O, L, A]),
                        (null != v ? v : P.filters.isShimmerVisible)
                            ? (0, i.jsx)(S, { isActive: null == h || h, shimmerClassName: _ })
                            : k && 0 !== k.length && (x || P.search.isNeededToLoad)
                              ? (0, i.jsx)(u.F, { className: s, carouselElement: I, ref: o, scrollPadding: y ? E : N })
                              : void 0
                    );
                }),
                D = (0, r.forwardRef)((e, t) => (0, i.jsx)(R, { forwardRef: t, ...e }));
        },
        39942: (e) => {
            e.exports = {
                stickyFilters: 'PlaylistPageFilters_stickyFilters__SfT9C',
                staticFilters: 'PlaylistPageFilters_staticFilters__sk7JJ',
                staticFiltersCarousel: 'PlaylistPageFilters_staticFiltersCarousel__vJQXE',
            };
        },
        40512: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => l });
            var i = a(7123);
            let l = (e) => ({ type: i.z4.Unloaded, meta: { id: e.entityId } });
        },
        43856: (e) => {
            e.exports = { button: 'PageHeaderPlaylistUgcUploadButton_button__mWtCr', form: 'PageHeaderPlaylistUgcUploadButton_form__V64Yu' };
        },
        46900: (e) => {
            e.exports = {
                emptyBlockContainer: 'PlaylistPageItem_emptyBlockContainer__K5xRV',
                shimmerItem: 'PlaylistPageItem_shimmerItem__s_fFo',
                isDuplicate: 'PlaylistPageItem_isDuplicate__Fhcc1',
            };
        },
        46911: (e) => {
            e.exports = { root: 'PlaylistFiltersShimmer_root__Pam_a', shimmer: 'PlaylistFiltersShimmer_shimmer__Grx4y' };
        },
        49176: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => i });
            var i = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        49518: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => m });
            var i = a(53548),
                l = a(29993);
            let s = null,
                r = [],
                n = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === s)
                        return void r.push((e) => {
                            e.context.AdvManager.render(...t);
                        });
                    s.context.AdvManager.render(...t);
                },
                o = function () {
                    for (var e, t = arguments.length, a = Array(t), i = 0; i < t; i++) a[i] = arguments[i];
                    let [l, ...n] = a;
                    if (null === s)
                        return void r.push((e) => {
                            var t;
                            e.code.create({ cspNonce: null != (t = null == s ? void 0 : s.cspNonce) ? t : void 0, ...l }, ...n);
                        });
                    s.code.create({ cspNonce: null != (e = s.cspNonce) ? e : void 0, ...l }, ...n);
                },
                d = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === s)
                        return void r.push((e) => {
                            e.code.reload(...t);
                        });
                    s.code.reload(...t);
                },
                c = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === s)
                        return void r.push((e) => {
                            e.code.destroy(...t);
                        });
                    s.code.destroy(...t);
                },
                u = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === s)
                        return void r.push((e) => {
                            e.code.initialize(...t);
                        });
                    s.code.initialize(...t);
                },
                m = () => {
                    let [e, t] = (0, i.useState)(null !== s),
                        a = (0, l.c)((a) => {
                            var i, l, n;
                            let { cspNonce: o } = a;
                            void 0 === (null == (i = window) ? void 0 : i.Ya.Context) ||
                                void 0 === (null == (l = window) ? void 0 : l.Ya.adfoxCode) ||
                                e ||
                                ((window.yaContextCb = window.yaContextCb || []),
                                (s = { context: window.Ya.Context, code: window.Ya.adfoxCode, cspNonce: o }),
                                t(!0),
                                (n = s),
                                r.forEach((e) => {
                                    e(n);
                                }),
                                (r = []));
                        });
                    return { isLoaded: e, init: a, render: n, create: o, reload: d, destroy: c, initialize: u };
                };
        },
        50327: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => r });
            var i = a(35412),
                l = a(8655),
                s = a(69704);
            let r = (e) => {
                let { theme: t } = (0, s.W)();
                if (e) {
                    let { r: a, g: s, b: r } = (0, i.E2)(e),
                        n = t === l.S.Light ? 0.15 : 0.7;
                    return 'rgba('.concat(a, ', ').concat(s, ', ').concat(r, ', ').concat(n, ')');
                }
            };
        },
        53158: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => h });
            var i = a(88800),
                l = a(84961),
                s = a(53548),
                r = a(29993),
                n = a(631),
                o = a(38147),
                d = a(72288),
                c = a(69704),
                u = a(78101),
                m = a(8655);
            let p = (e, t) => (t === m.S.Dark ? Math.floor(0.8 * e) : Math.min(255, Math.floor(e + (255 - e) * 0.3))),
                _ = (e) => e.toString(16).padStart(2, '0');
            var y = a(82712),
                g = a(92847);
            let v = (e) =>
                    (0, y.m)(e) &&
                    (e.type === g.k.PLAYLIST_GRADIENT || e.type === g.k.AXE_GRADIENT) &&
                    'object' == typeof e.payload &&
                    null !== e.payload &&
                    !Array.isArray(e.payload) &&
                    'color' in e.payload,
                h = (0, l.PA)((e) => {
                    let { children: t, containerId: a, expectedType: l } = e,
                        {
                            advertBanners: {
                                banners: { brandedPlaylistBanner: m, brandedEntityAxeBanner: y },
                            },
                        } = (0, d.g)(),
                        { theme: h } = (0, c.W)(),
                        x = (0, s.useContext)(u.G),
                        [P, A] = (0, s.useState)(null),
                        f = (0, r.c)((e) => {
                            (0, n.f)(e, a, v) && e.data.type === l && A(e.data);
                        });
                    (0, s.useEffect)(
                        () => (
                            window.addEventListener('message', f),
                            () => {
                                window.removeEventListener('message', f);
                            }
                        ),
                        [f],
                    );
                    let T = l === g.k.PLAYLIST_GRADIENT && m.isVisible && m.type !== o.h.EMPTY,
                        b = l === g.k.AXE_GRADIENT && y.isVisible && y.type !== o.h.EMPTY,
                        C = T || b,
                        k = (0, s.useMemo)(() => {
                            if ((null == P ? void 0 : P.payload.color) === void 0) return {};
                            let e = {
                                '--entity-branding-gradient-color-from':
                                    y.isVisible && y.type !== o.h.EMPTY && h
                                        ? ((e, t) => {
                                              let a = e.replace('#', '');
                                              if (
                                                  (3 === a.length &&
                                                      (a = a
                                                          .split('')
                                                          .map((e) => e + e)
                                                          .join('')),
                                                  6 !== a.length)
                                              )
                                                  return e;
                                              let i = parseInt(a.substring(0, 2), 16),
                                                  l = parseInt(a.substring(2, 4), 16),
                                                  s = parseInt(a.substring(4, 6), 16),
                                                  r = p(i, t),
                                                  n = p(l, t),
                                                  o = p(s, t);
                                              return '#'.concat(_(r)).concat(_(n)).concat(_(o));
                                          })(P.payload.color, h)
                                        : P.payload.color,
                                '--entity-branding-gradient-color-to': 'transparent',
                            };
                            return null === P.payload.button
                                ? e
                                : {
                                      ...e,
                                      '--entity-branding-button-background-color': P.payload.button.backgroundColor,
                                      '--entity-branding-button-text-color': P.payload.button.textColor,
                                  };
                        }, [null == P ? void 0 : P.payload.color, null == P ? void 0 : P.payload.button, h, y.isVisible, y.type]),
                        I = (0, s.useMemo)(() => (C && null !== P ? { data: { type: P.type, style: k, button: P.payload.button }, isEnabled: C } : x), [P, k, C, x]);
                    return (0, i.jsx)(u.G.Provider, { value: I, children: t });
                });
        },
        55196: (e) => {
            e.exports = { root: 'PlaylistPageItemEditorialBeforeTitle_root__DcMpV', major: 'PlaylistPageItemEditorialBeforeTitle_major__lifWe' };
        },
        58105: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => c });
            var i,
                l = a(14022),
                s = a(53548),
                r = {
                    8612: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let i = a(352),
                            l = a(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: a, throttleTimeout: s } = e,
                                r = (0, l.useRef)(null),
                                [n, o] = (0, l.useState)(!!a),
                                d = (0, l.useMemo)(
                                    () =>
                                        (0, i.throttle)(() => {
                                            (o(!a),
                                                r.current && window.clearTimeout(r.current),
                                                (r.current = window.setTimeout(() => {
                                                    o(!!a);
                                                }, t)));
                                        }, s),
                                    [t, a, s],
                                ),
                                c = (0, l.useCallback)(() => {
                                    (o(!!a), r.current && window.clearTimeout(r.current));
                                }, [a]);
                            return (
                                (0, l.useEffect)(
                                    () => () => {
                                        r.current && window.clearTimeout(r.current);
                                    },
                                    [],
                                ),
                                { state: n, handleDebouncedToggle: d, reset: c }
                            );
                        };
                    },
                    3940: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0));
                        let i = a(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, i.useState)(null);
                            return [
                                e,
                                (0, i.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    3830: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0));
                        let i = a(810),
                            l = a(1848),
                            s = a(8612);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: a, elementRef: r } = e,
                                { state: n, handleDebouncedToggle: o } = (0, s.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                d = (0, i.useCallback)(() => {
                                    (a && o(), null == t || t());
                                }, [a, o, t]);
                            return (
                                (0, i.useEffect)(() => {
                                    let e = (0, l.getElementFromRefOrElement)(r);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        a = { capture: !0, passive: !0 };
                                    return (t.addEventListener('scroll', d, a), () => t.removeEventListener('scroll', d, a));
                                }, [r, d]),
                                n
                            );
                        };
                    },
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    352: (e) => {
                        e.exports = l;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(s, 2));
                    },
                },
                n = {};
            function o(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var a = (n[e] = { exports: {} });
                return (r[e](a, a.exports, o), a.exports);
            }
            var d = {};
            ((() => {
                (Object.defineProperty(d, '__esModule', { value: !0 }), (d.useElementOffsetY = void 0));
                let e = o(810),
                    t = o(3830),
                    a = o(3940);
                d.useElementOffsetY = (i) => {
                    let [l, s] = (0, a.useForceUpdateRef)(),
                        [r, n] = (0, e.useState)(),
                        o = (0, e.useCallback)(() => {
                            let e = null == l ? void 0 : l.getBoundingClientRect();
                            e && n(e.y);
                        }, [l]);
                    return ((0, e.useLayoutEffect)(o), (0, t.useScroll)({ onScroll: o, elementRef: i }), { forceUpdateRefCallback: s, offsetY: r });
                };
            })(),
                d.__esModule);
            var c = d.useElementOffsetY;
        },
        61166: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => l, l: () => i });
            let i = 'yandex_rtb',
                l = 256152;
        },
        62115: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => i });
            let i = 1e3;
        },
        63449: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => s });
            var i = a(72288),
                l = a(97956);
            let s = () => {
                var e, t, a;
                let { user: s, experiments: r, settings: n } = (0, i.g)();
                return (
                    !r.checkExperiment(l.z.WebNextDisableCollection, 'on') &&
                    !(null == (e = n.browserInfo) ? void 0 : e.isTouch) &&
                    s.isAuthorized &&
                    !s.hasPlus &&
                    (null == (a = r.getExperiment(l.z.WebNextDesktopWebFreemium)) || null == (t = a.value) ? void 0 : t.closeCollection) === 'on'
                );
            };
        },
        64861: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => m });
            var i = a(53548),
                l = a(78793),
                s = a(81123),
                r = a(90780),
                n = a(65523),
                o = a(37436),
                d = a(34500),
                c = a(14518),
                u = a(73442);
            let m = () => {
                let e = (0, r.st)(),
                    t = (0, n.U)(),
                    { hash: a } = (0, r.gf)(),
                    { pageId: m } = (0, c.$)(),
                    { mainObjectType: p, mainObjectId: _ } = (0, d.N)(),
                    { skeleton: y } = (0, u.b)();
                return (0, i.useCallback)(
                    (i) => {
                        let { tabId: r = '', tabPos: n = 1, isTabSelectedByDefault: d = !1 } = i;
                        if (!e || !m) return;
                        let c = { hash: a, pageId: o.W[m], tabId: r, tabPos: n, isTabSelectedByDefault: d };
                        (y && (c.skeletonId = y), _ && p && ((c.mainObjectType = p), (c.mainObjectId = _)));
                        let u = (0, l.F)({ params: c, logger: t, context: 'useSendEventOnTabOpened' });
                        u && (0, s.TV)(e.evgenInstance, u);
                    },
                    [e, m, a, y, _, p, t],
                );
            };
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
        67990: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        68567: (e) => {
            e.exports = { root: 'ContextMenuPlaylistPrivacyItem_root__kz3gc', caption: 'ContextMenuPlaylistPrivacyItem_caption__0VuXh' };
        },
        74973: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => s });
            var i = a(53548),
                l = a(78101);
            let s = () => (0, i.useContext)(l.G);
        },
        75470: (e) => {
            e.exports = {
                root: 'PlaylistPageDnDList_root__6Fryw',
                draggableItemWrapper: 'PlaylistPageDnDList_draggableItemWrapper__vvEWL',
                dots: 'PlaylistPageDnDList_dots__F4qh2',
                noHoverItem: 'PlaylistPageDnDList_noHoverItem__dbPTH',
            };
        },
        77887: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => ip });
            var i = a(88800),
                l = a(65724),
                s = a(84961),
                r = a(53548),
                n = a(2058),
                o = a(58390),
                d = a(92716),
                c = a(17392),
                u = a(58105),
                m = a(32596),
                p = a(80527),
                _ = a(92847),
                y = a(74973),
                g = a(53158),
                v = a(3685),
                h = a(69630),
                x = a(12816),
                P = a(27054),
                A = a(2345),
                f = a(4476),
                T = a(59844),
                b = a(99564),
                C = a(50327),
                k = a(44230),
                I = a(37670),
                S = a(72288),
                L = a(93317),
                j = a(79418),
                N = a(30144),
                E = a(27169),
                R = a(60385),
                D = a(324),
                w = a(46511),
                O = a(57297),
                U = a(2218),
                B = a(77863),
                M = a(19049),
                F = a(45383);
            async function H(e, t) {
                var a, i, l, s, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, w.W)(t.locale),
                    o = null != (i = e.ogTitle) ? i : (0, M.Y)(e.title, 48, !1),
                    d = n({ id: 'metadata.playlist-title' }, { playlistTitle: e.title });
                return (null == (a = e.owner) ? void 0 : a.verified)
                    ? {
                          title: d,
                          description: d,
                          openGraph: (0, O.i)({
                              ogTitle: o,
                              ogDescription: (function (e) {
                                  var t;
                                  let { playlistMeta: a, messageFormatter: i } = e,
                                      l = '';
                                  return (
                                      a.ogDescription ? (l = a.ogDescription) : a.description && (l = a.description.replace(/\[(.*?)\]\(.*?\)/gi, '$1')),
                                      [
                                          (l = (0, M.Y)(l, 96, !1)),
                                          i({ id: 'metadata.playlist' }),
                                          (null != (t = a.likesCount) ? t : 0) > 0 && i({ id: 'metadata.likes-counter' }, { counter: a.likesCount }),
                                      ]
                                          .filter(Boolean)
                                          .join(' • ')
                                  );
                              })({ playlistMeta: e, messageFormatter: n }),
                              fullUrl: null != (l = t.fullUrl) ? l : '',
                              locale: t.locale,
                              ogImage: e.ogImage,
                              siteName: n({ id: 'metadata.yandex-music' }),
                              ogType: 'music.playlist',
                          }),
                          twitter: (0, U.H)({ cardType: B.W.APP, title: o, url: t.url, appName: n({ id: 'metadata.yandex-music' }) }),
                          appLinks: (0, D.X)({
                              additional: { ...t, url: null != (s = t.url) ? s : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                              appName: n({ id: 'metadata.yandex-music' }),
                          }),
                          alternates: (0, F.S)('/playlists/:playlistUuid', t.tld, { params: { playlistUuid: e.playlistUuid } }),
                      }
                    : { title: d, robots: { index: !1, follow: !1 } };
            }
            var Y = a(63449),
                W = a(5295),
                z = a(8655),
                K = a(69704),
                G = a(94144),
                V = a(67174),
                $ = a(89068),
                X = a.n($),
                q = a(47618),
                Q = a(91370),
                Z = a.n(Q);
            let J = (0, s.PA)(
                (0, r.forwardRef)((e, t) => {
                    var a;
                    let { children: s, 'data-index': n, ...o } = e,
                        { playlist: d } = (0, S.g)(),
                        {
                            isDragging: c,
                            listeners: u,
                            setNodeRef: m,
                            transform: p,
                            transition: _,
                            attributes: y,
                        } = (0, q.gl)({ id: String(null == (a = d.items[n]) ? void 0 : a.key) }),
                        g = (0, r.useCallback)(
                            (e) => {
                                (m(e), 'function' == typeof t && t(e));
                            },
                            [t, m],
                        ),
                        v = { transition: _, '--translate-y': p ? ''.concat(Math.round(p.y), 'px') : void 0 };
                    return (0, i.jsx)('div', {
                        ref: g,
                        'data-index': n,
                        style: v,
                        ...o,
                        className: Z().root,
                        children: (0, i.jsx)('div', { className: (0, l.$)(Z().inner, { [Z().dragging]: c }), ...u, ...y, children: s }),
                    });
                }),
            );
            var ee = a(45144),
                et = a(23577),
                ea = a(53405),
                ei = a(408);
            let el = (e, t) => {
                var a;
                let i = t - 1;
                if (!e.items.length || i < 0 || i > e.items.length) return '';
                let l = e.items[i];
                return (null == l || null == (a = l.data) ? void 0 : a.title) || '';
            };
            var es = a(67318),
                er = a(62518),
                en = a(63476),
                eo = a(29595),
                ed = a(74965),
                ec = a(66943),
                eu = a(18593),
                em = a(54915),
                ep = a(64284),
                e_ = a(82204),
                ey = a(77948),
                eg = a(84384),
                ev = a(98644),
                eh = a(93015),
                ex = a(46900),
                eP = a.n(ex),
                eA = a(12079),
                ef = a(76843),
                eT = a(29504),
                eb = a(97956),
                eC = a(55196),
                ek = a.n(eC);
            let eI = (0, s.PA)((e) => {
                    var t, a, l, s, n;
                    let { item: o } = e,
                        { playlist: d, experiments: c } = (0, S.g)(),
                        { shouldShowMajor: u, shouldShowGenre: m, shouldShowDuplicate: p } = d.editorFeature,
                        _ = c.checkExperiment(eb.z.WebEditorsFeatures, 'on'),
                        y = p && d.editorFeature.getNumberGroupTrackDuplicated(o);
                    if (!_ || !o || (!m && !u && !y)) return null;
                    let g = [],
                        v = null == (a = o.data) || null == (t = a.major) ? void 0 : t.name,
                        h = null == (n = o.data) || null == (s = n.albums) || null == (l = s[0]) ? void 0 : l.genre;
                    if ((y && g.push('№'.concat(y)), u && v)) {
                        let e = d.editorFeature.getColorForMajor(v),
                            t = (0, i.jsx)('span', { className: ek().major, style: { '--major-color': e }, children: v });
                        g.push(t);
                    }
                    if ((m && h && g.push(h), !g.length)) return null;
                    let x = g.map((e, t, a) => (0, i.jsxs)(r.Fragment, { children: [e, t < a.length - 1 && '; '] }, t));
                    return (0, i.jsxs)(eT.HL, { className: ek().root, type: 'entity', size: 'm', weight: 'medium', variant: 'span', children: ['[', x, '] \xa0'] });
                }),
                eS = (0, s.PA)((e) => {
                    let { item: t, track: a, withDNDBlock: l, isDragging: s, draggingClassName: r, from: o, utmLink: d, index: c, className: u } = e,
                        { playlist: m } = (0, S.g)(),
                        { formatMessage: p } = (0, n.A)(),
                        { removeTrackFromPlaylist: _, canRemoveTrackFromPlaylist: y } = (0, eA.s)();
                    return (0, i.jsx)(ef.K, {
                        beforeTitle: (0, i.jsx)(eI, { item: t }),
                        withPodcastName: !0,
                        withDNDBlock: l,
                        isDragging: s,
                        track: a,
                        handleRemove: y ? _ : void 0,
                        draggingClassName: r,
                        playContextParams: {
                            contextData: { type: eu.K.Playlist, meta: m.contextMeta, from: o, utmLink: d },
                            entitiesData: m.playbackEntitiesData,
                            queueParams: { index: c },
                            loadContextMeta: !0,
                        },
                        removeButtonAriaLabel: p({ id: 'playlist-actions.remove-from-playlist' }),
                        className: u,
                    });
                });
            var eL = a(10829);
            let ej = (0, s.PA)((e) => {
                    let { item: t, track: a, withDNDBlock: s, isDragging: r, draggingClassName: o, from: d, utmLink: c, index: u, className: m } = e,
                        { playlist: p } = (0, S.g)(),
                        { formatMessage: _ } = (0, n.A)(),
                        { removeTrackFromPlaylist: y, canRemoveTrackFromPlaylist: g } = (0, eA.s)();
                    return (0, i.jsx)(eL.K, {
                        beforeTitle: (0, i.jsx)(eI, { item: t }),
                        withDNDBlock: s,
                        isDragging: r,
                        track: a,
                        handleRemove: g ? y : void 0,
                        draggingClassName: o,
                        playContextParams: {
                            contextData: {
                                type: eu.K.Playlist,
                                meta: p.contextMeta,
                                from: d,
                                utmLink: c,
                                filter: p.filters.activeFilter,
                                filterName: p.filters.activeFilterName,
                                enableVariousAutoFlow: p.enableVariousAutoFlow,
                            },
                            entitiesData: p.playbackEntitiesData,
                            queueParams: { index: u },
                            loadContextMeta: !0,
                        },
                        removeButtonAriaLabel: _({ id: 'playlist-actions.remove-from-playlist' }),
                        className: (0, l.$)(m, { [eP().isDuplicate]: p.editorFeature.shouldHighlightDublicatedTrack(t) }),
                    });
                }),
                eN = (0, s.PA)((e) => {
                    var t, a, s, r, n;
                    let o,
                        { index: c, className: u, isDragging: m, draggingClassName: p } = e,
                        { playlist: _ } = (0, S.g)(),
                        y = (null == (t = _.meta) ? void 0 : t.uuid) || _.uuid,
                        { from: g, utmLink: v } = (0, eg.f)({ pageId: x._Q.PLAYLIST, blockId: ep.U.PLAYLIST, pageEntityId: y, contextType: eu.K.Playlist, contextId: y }),
                        h = _.isDragAndDropEnabled,
                        P = null == (a = _.items) ? void 0 : a[c];
                    return (
                        (o =
                            P && P.data && _.meta
                                ? P.data.isTrackNonMusic || (null == (s = P.data.mainAlbum) ? void 0 : s.isNonMusic)
                                    ? (0, i.jsx)(eS, {
                                          item: P,
                                          withDNDBlock: h,
                                          isDragging: m,
                                          from: g,
                                          index: c,
                                          track: P.data,
                                          utmLink: v,
                                          draggingClassName: p,
                                          className: u,
                                      })
                                    : (0, i.jsx)(ej, {
                                          item: P,
                                          from: g,
                                          index: c,
                                          track: P.data,
                                          withDNDBlock: h,
                                          isDragging: m,
                                          draggingClassName: p,
                                          className: (0, l.$)(u, { [eP().isDuplicate]: _.editorFeature.shouldHighlightDublicatedTrack(P) }),
                                      })
                                : (0, i.jsx)(eh.D, { isActive: !0, className: eP().shimmerItem, variant: ev.X.PLAYLIST })),
                        (0, i.jsx)(em.x.Provider, {
                            value: { playlist: _.meta, trackIndex: c },
                            children: (0, i.jsx)(e_.F, {
                                blockType: d.EntityTypes.Tracks,
                                blockId: d.EntityTypes.Tracks,
                                blockPosX: 1,
                                blockPosY: 2,
                                mainObjectId: String(null == _ || null == (r = _.meta) ? void 0 : r.uuid),
                                mainObjectType: d.DomainObjectType.Playlist,
                                children: (0, i.jsx)(ey.B, {
                                    objectType: d.DomainObjectType.Track,
                                    objectId: String(null == P || null == (n = P.data) ? void 0 : n.id),
                                    objectPosX: 1,
                                    objectPosY: c + 1,
                                    objectsCount: _.items.length,
                                    children: o,
                                }),
                            }),
                        })
                    );
                });
            var eE = a(75470),
                eR = a.n(eE);
            let eD = (0, s.PA)((e) => {
                let { children: t, playlist: a } = e,
                    { announcements: l, screenReaderInstructions: s } = ((e) => {
                        let { formatMessage: t } = (0, n.A)();
                        return {
                            screenReaderInstructions: { draggable: t({ id: 'drag-and-drop.playlist-move-instructions' }) },
                            announcements: {
                                onDragStart(a) {
                                    let { active: i } = a;
                                    return t({ id: 'drag-and-drop.playlist-on-move-start' }, { trackName: el(e, Number(i.id)), index: i.id });
                                },
                                onDragOver(a) {
                                    let { active: i, over: l } = a,
                                        s = el(e, Number(i.id));
                                    return l
                                        ? t({ id: 'drag-and-drop.playlist-on-move' }, { trackName: s, index: l.id })
                                        : t({ id: 'drag-and-drop.playlist-on-move-fail' }, { trackName: s });
                                },
                                onDragEnd(a) {
                                    let { active: i, over: l } = a,
                                        s = el(e, Number(i.id));
                                    return l
                                        ? t({ id: 'drag-and-drop.playlist-on-move-end-with-index' }, { trackName: s, index: l.id })
                                        : t({ id: 'drag-and-drop.playlist-on-move-end' }, { trackName: s });
                                },
                                onDragCancel: () => t({ id: 'drag-and-drop.playlist-on-move-cancel' }),
                            },
                        };
                    })(a),
                    o = ((e) => {
                        let { notify: t } = (0, ed.l)(),
                            { formatMessage: a } = (0, n.A)();
                        return (0, r.useCallback)(
                            async (l) => {
                                var s, r, n, o;
                                let { from: d, to: c } = l;
                                if (d < 0 || c < 0 || d >= e.items.length || c >= e.items.length) return;
                                let u = String(null == (s = e.items[d]) ? void 0 : s.id);
                                if (!u) return;
                                let m = (null == (r = e.items[d]) ? void 0 : r.albumId) ? Number(null == (n = e.items[d]) ? void 0 : n.albumId) : void 0;
                                e.moveTrack(d, c);
                                let p = await (null == (o = e.meta)
                                    ? void 0
                                    : o.changePlaylist((0, er.M)({ operation: en.y.MOVE, startPosition: d, endPosition: c, tracks: [{ id: u, albumId: m }] })));
                                (p && p === es.Y.OK) ||
                                    (p === es.Y.RELOAD ? e.refresh() : e.moveTrack(c, d),
                                    t((0, i.jsx)(ec.h, { error: a({ id: 'drag-and-drop.failed-to-move' }) }), { containerId: eo.u.ERROR }));
                            },
                            [a, t, e],
                        );
                    })(a),
                    { activeId: d, handleDragStart: c, handleDragCancel: u, sensors: m } = (0, ei.Y)(),
                    p = (0, r.useCallback)(
                        (e) => {
                            let { active: t, over: i } = e;
                            if (!t.id || !(null == i ? void 0 : i.id)) return;
                            let l = a.itemsKeys.indexOf(String(t.id)),
                                s = a.itemsKeys.indexOf(String(i.id));
                            Number.isInteger(l) && Number.isInteger(s) && o({ from: l, to: s });
                        },
                        [o, a.itemsKeys],
                    ),
                    _ = (0, r.useMemo)(() => a.itemsKeys.indexOf(String(d)), [d, a.itemsKeys]);
                return a.isDragAndDropEnabled
                    ? (0, i.jsxs)(ee.Mp, {
                          sensors: m,
                          collisionDetection: ee.fp,
                          onDragStart: c,
                          onDragEnd: p,
                          onDragCancel: u,
                          modifiers: [et.FN, et.gj],
                          accessibility: { announcements: l, screenReaderInstructions: s },
                          children: [
                              (0, i.jsx)('div', { className: eR().root, children: (0, i.jsx)(q.gB, { items: a.itemsKeys, strategy: q._G, children: t }) }),
                              (0, ea.createPortal)(
                                  (0, i.jsx)(ee.Hd, {
                                      dropAnimation: { duration: 0 },
                                      children: d
                                          ? (0, i.jsx)('div', {
                                                className: eR().draggableItemWrapper,
                                                children: (0, i.jsx)(eN, { index: _, className: eR().noHoverItem, isDragging: !0, draggingClassName: eR().dots }),
                                            })
                                          : null,
                                  }),
                                  window.document.body,
                              ),
                          ],
                      })
                    : t;
            });
            var ew = a(79070),
                eO = a(50493),
                eU = a(80715),
                eB = a(86535),
                eM = a(86790),
                eF = a(60266),
                eH = a(12844),
                eY = a.n(eH);
            let eW = (0, s.PA)((e) => {
                let { playlist: t } = e,
                    { formatMessage: a } = (0, n.A)(),
                    s = (0, ew.L)(() => {
                        var e, s, r;
                        let n = [],
                            o = 3;
                        return (
                            t.hasSimilarEntities &&
                                (n.push(
                                    (0, i.jsx)(
                                        e_.F,
                                        {
                                            blockType: d.EntityTypes.SimilarEntities,
                                            blockId: d.EntityTypes.SimilarEntities,
                                            blockPosX: 1,
                                            blockPosY: o,
                                            objectsCount: null == (e = t.similarEntities.data) ? void 0 : e.items.length,
                                            mainObjectId: String(null == (s = t.meta) ? void 0 : s.uuid),
                                            mainObjectType: d.DomainObjectType.Playlist,
                                            children: (0, i.jsx)(eO.Q, {
                                                ...t.similarEntities,
                                                meta: { title: a({ id: 'page.similar-entities-block-title' }) },
                                                headingVariant: 'h2',
                                                className: eY().carouselContainer,
                                                headerClassName: (0, l.$)(eY().carouselBlock, eY().carouselBlockHeader),
                                                containerClassName: eY().carouselBlock,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                isLoaded: t.similarEntities.isLoaded,
                                                setHasSentAnalyticsOnLoaded: t.similarEntities.setHasSentAnalyticsOnLoaded,
                                            }),
                                        },
                                        d.EntityTypes.SimilarEntities,
                                    ),
                                ),
                                o++),
                            t.hasSimilarPlaylists &&
                                (n.push(
                                    (0, i.jsx)(
                                        e_.F,
                                        {
                                            blockId: d.EntityTypes.SimilarPlaylists,
                                            blockType: d.EntityTypes.SimilarPlaylists,
                                            blockPosX: 1,
                                            blockPosY: o,
                                            blockIdForFrom: eB.h.PLAYLISTS_SIMILAR_PLAYLIST,
                                            objectsCount: t.similarPlaylists.length,
                                            mainObjectId: String(null == (r = t.meta) ? void 0 : r.uuid),
                                            mainObjectType: d.DomainObjectType.Playlist,
                                            children: (0, i.jsx)(eU.E, {
                                                headingVariant: 'h2',
                                                isShimmerVisible: t.isLoading,
                                                isShimmerActive: !0,
                                                className: eY().carouselContainer,
                                                headerClassName: (0, l.$)(eY().carouselBlockHeader, eY().carouselBlock),
                                                containerClassName: eY().carouselBlock,
                                                title: a({ id: 'entity-names.similar-playlists' }),
                                                playlists: t.similarPlaylists,
                                                shouldSendAnalyticsOnLoaded: !0,
                                            }),
                                        },
                                        d.EntityTypes.SimilarPlaylists,
                                    ),
                                ),
                                o++),
                            n
                        );
                    });
                return (0, i.jsxs)('div', {
                    className: eY().root,
                    children: [(0, i.jsx)('div', { children: s }), (0, i.jsx)(eF.A, { children: (0, i.jsx)(eM.w, { className: eY().footer }) })],
                });
            });
            var ez = a(88894),
                eK = a(32739),
                eG = a(88969),
                eV = a(29993),
                e$ = a(52300),
                eX = a(34407),
                eq = a(85902),
                eQ = a(24460),
                eZ = a(5407),
                eJ = a(28163),
                e0 = a(25557),
                e1 = a(9618),
                e8 = a(4795),
                e5 = a(20924),
                e2 = a(39079),
                e9 = a(27506),
                e4 = a(34303),
                e3 = a(49738),
                e6 = a(56862),
                e7 = a(16704),
                te = a(56446),
                tt = a(19038),
                ta = a(99409),
                ti = a(61097),
                tl = a(14533),
                ts = a.n(tl),
                tr = a(96817),
                tn = a(19934),
                to = a(99305),
                td = a(58977),
                tc = a(4086),
                tu = a(41928),
                tm = a(24609),
                tp = a(79262),
                t_ = a(1606),
                ty = a.n(t_);
            let tg = (0, s.PA)((e) => {
                let { trackIds: t, className: a, onRemove: s } = e,
                    { slam: o } = (0, S.g)(),
                    d = (0, tm.A)(),
                    { formatMessage: u } = (0, n.A)(),
                    m = (0, tu.N)(),
                    [p, _] = (0, r.useState)(!1),
                    y = m.get(tc.vg),
                    g = o.isPlaylistDownloaded(t),
                    v = o.isPlaylistDownloading(t),
                    h = o.getPlaylistDownloadingProgress(t),
                    x = (0, eV.c)(() => {
                        if (v) {
                            null == d || d.stopDownload(t);
                            return;
                        }
                        if (g) return void _(!0);
                        (null == d || d.download(t), y.count(to.x.MY_FAVORITES_PLAYLIST_DOWNLOAD, td.l));
                    }),
                    P = (0, eV.c)(() => {
                        (null == d || d.delete(t), y.count(to.x.MY_FAVORITES_PLAYLIST_DELETE, td.l), null == s || s());
                    }),
                    A = (0, r.useMemo)(
                        () =>
                            g
                                ? (0, i.jsx)(e$.I, { variant: 'check', size: 'xxs', className: ty().downloadedIcon })
                                : v
                                  ? (0, i.jsx)(tp.A, {
                                        value: null != h ? h : 0,
                                        size: 26,
                                        withCancelIcon: !0,
                                        className: ty().downloadingProgress,
                                        progressBarClassName: ty().progress,
                                        cancelIconClassName: ty().cancelIcon,
                                    })
                                  : (0, i.jsx)(e$.I, { variant: 'download', size: 'xxs' }),
                        [g, v, h],
                    ),
                    f = (0, r.useMemo)(() => (v ? u({ id: 'offline.stop-downloading' }) : u({ id: 'offline.download' })), [u, v]);
                return g
                    ? (0, i.jsx)(tn.W1, {
                          variant: 'default',
                          size: 's',
                          radius: 'xxxl',
                          icon: A,
                          offsetOptions: 10,
                          open: p,
                          onOpenChange: _,
                          wrapperClassName: a,
                          ariaLabel: u({ id: 'offline.delete-from-device' }),
                          'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_DOWNLOADED_BUTTON,
                          children: (0, i.jsx)(tn.Dr, {
                              icon: (0, i.jsx)(e$.I, { variant: 'upload', size: 'xxs' }),
                              onClick: P,
                              children: (0, i.jsx)(eG.A, { id: 'offline.delete-from-device' }),
                          }),
                      })
                    : (0, i.jsx)(tr.$, {
                          className: (0, l.$)(ty().root, { [ty().root_downloading]: v }, a),
                          variant: 'default',
                          size: 's',
                          radius: 'xxxl',
                          icon: A,
                          'aria-label': f,
                          onClick: x,
                          'data-test-id': v ? c.e8.pageHeader.PLAYLIST_HEADER_STOP_DOWNLOAD_BUTTON : c.e8.pageHeader.PLAYLIST_HEADER_DOWNLOAD_BUTTON,
                          children:
                              v &&
                              (0, i.jsx)(eT.HL, {
                                  variant: 'div',
                                  className: ty().progressText,
                                  'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_DOWNLOAD_PROGRESS_TEXT,
                                  children: (0, i.jsx)(eG.A, { id: 'offline.downloading-progress', values: { value: h } }),
                              }),
                      });
            });
            var tv = a(10561),
                th = a.n(tv),
                tx = a(65453),
                tP = a(78793),
                tA = a(99984),
                tf = a(90780),
                tT = a(65523),
                tb = a(37436),
                tC = a(12364),
                tk = a.n(tC);
            let tI = (0, s.PA)((e) => {
                var t, a, l;
                let { playlistUuid: s } = e,
                    n = (0, y.Q)(),
                    o = ((e) => {
                        let t = (0, tf.st)(),
                            a = (0, tT.U)(),
                            { hash: i } = (0, tf.gf)();
                        return (0, r.useCallback)(() => {
                            if (!t || !e.link) return;
                            let l = {
                                    hash: i,
                                    pageId: tb.W[x._Q.PLAYLIST],
                                    mainObjectType: d.DomainObjectType.Playlist,
                                    mainObjectId: e.objectId,
                                    entityId: 'playlist_branded_action_button',
                                    pageStyle: d.PageStyles.Fullscreen,
                                    pagePlacement: d.PagePlacements.Fullscreen,
                                    from: tb.W[x._Q.PLAYLIST],
                                    to: d.AppScreen.Link,
                                    deepLink: e.link,
                                    tabId: '',
                                    tabPos: 0,
                                },
                                s = (0, tP.F)({ params: l, logger: a, context: 'useSendEventOnPlaylistBrandingLinkNavigated' });
                            s && (0, tA.Mu)(t.evgenInstance, s);
                        }, [t, i, a, e]);
                    })({ objectId: s, link: null == (a = n.data) || null == (t = a.button) ? void 0 : t.href });
                return n.isEnabled && (null == (l = n.data) ? void 0 : l.button)
                    ? (0, i.jsx)(tx.N, {
                          className: tk().root,
                          href: n.data.button.href,
                          target: '_blank',
                          onClick: o,
                          children: (0, i.jsx)(eT.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: n.data.button.text }),
                      })
                    : null;
            });
            var tS = a(35412),
                tL = a(7555),
                tj = a(37821),
                tN = a(81877);
            let tE = ['image/png', 'image/jpeg', 'image/jpg'];
            var tR = a(91908),
                tD = a.n(tR);
            let tw = (0, s.PA)((e) => {
                let { className: t, playlist: a } = e,
                    {
                        settings: { isMobile: s },
                        playlist: { isRewind2024Playlist: o },
                        modals: { imageSliderModal: d },
                    } = (0, S.g)(),
                    u = a.coverUri,
                    m = a.canUserChange && !s,
                    { notify: p } = (0, ed.l)(),
                    { formatMessage: _ } = (0, n.A)(),
                    y = (0, r.useRef)(null),
                    [g, v] = (0, r.useState)(u || ''),
                    [h, x] = (0, r.useState)(m),
                    [P, A] = (0, r.useState)(new FormData()),
                    f = (0, tS.lU)(u || '', 600, !1),
                    T = (0, tS.lU)(u || '', 300, !1),
                    [b, C] = (0, r.useState)(f),
                    [k, I] = (0, r.useState)(!1),
                    L = !!u,
                    j = (0, r.useMemo)(() => {
                        if (o && a.personalColor) return (0, tj.m)(a.personalColor);
                    }, [o, a.personalColor]);
                (0, r.useEffect)(() => {
                    h !== m && x(m);
                }, [m, h]);
                let N = (0, r.useCallback)(
                        () => p((0, i.jsx)(ec.h, { error: _({ id: 'playlist-errors.failed-to-change-poster' }) }), { containerId: eo.u.ERROR }),
                        [p, _],
                    ),
                    E = (0, eV.c)(() => {
                        u && !k && d.openImages({ images: [u] });
                    }),
                    R = (0, eV.c)((e) => {
                        var t;
                        (null == e || e.stopPropagation(), null == y || null == (t = y.current) || t.click());
                    }),
                    D = (0, eV.c)((e) => {
                        (e.stopPropagation(), 'Enter' === e.key && R());
                    }),
                    w = (0, eV.c)((e) => {
                        e.stopPropagation();
                    }),
                    O = (0, eV.c)((e) => {
                        let t,
                            a = e.target,
                            i = (a.files || [])[0] || null;
                        if (((a.value = ''), !i || ((t = i.type), !tE.includes(t)) || !((e) => e > 0 && e <= 2e7)(i.size))) return void N();
                        (g && C(g), x(!1), v(URL.createObjectURL(i)));
                        let l = new FormData();
                        (l.append('image', i), A(l));
                    }),
                    U = (0, r.useCallback)(
                        async (e) => {
                            let t = e.target,
                                i = () => {
                                    (v(b), N(), x(!0));
                                };
                            if ((u && (t.currentSrc === f || t.currentSrc === T)) || !m || b === t.currentSrc) return;
                            if (
                                !((e) => {
                                    if (!e) return;
                                    let t = 2 * e.naturalHeight || e.height,
                                        a = 2 * e.naturalWidth || e.width;
                                    return t < 5e3 && a < 5e3;
                                })(t)
                            )
                                return void i();
                            I(!0);
                            let l = await a.changePlaylistCover(P);
                            (I(!1), l === e9.F.ERROR ? i() : x(!0));
                        },
                        [N, b, a, P, u, m, f, T],
                    ),
                    B = (0, r.useMemo)(() => (g ? _({ id: 'playlist-actions.change-poster' }) : _({ id: 'playlist-actions.add-poster' })), [g, _]);
                return (0, i.jsxs)(tL.t, {
                    radius: 'm',
                    className: (0, l.$)(tD().root, t, { [tD().root_hoverable]: L }),
                    children: [
                        (0, i.jsx)('div', {
                            className: tD().backCoverColor,
                            style: j,
                            children: (0, i.jsx)(tr.$, {
                                onClick: E,
                                'aria-label': _({ id: 'slider.view-cover' }),
                                tabIndex: L ? 0 : -1,
                                disabled: !L,
                                className: tD().coverButton,
                                children: (0, i.jsx)(tN.B, { fit: 'cover', src: g, size: 300, className: tD().coverImage, withAvatarReplace: !0, onLoad: U }),
                            }),
                        }),
                        h &&
                            (0, i.jsx)('div', {
                                className: (0, l.$)(tD().buttonContainer, { [tD().buttonContainer_withCursorPointer]: g }),
                                onClick: L ? E : void 0,
                                children: (0, i.jsxs)('div', {
                                    className: (0, l.$)(tD().fileUploadContainer, { [tD().fileUploadContainer_hovered]: g }),
                                    children: [
                                        (0, i.jsx)(tr.$, {
                                            className: tD().button,
                                            radius: 'xxxl',
                                            size: 'xxs',
                                            color: 'secondary',
                                            withRipple: !1,
                                            onClick: R,
                                            onKeyUp: D,
                                            'aria-label': _({ id: 'playlist-actions.add-poster' }),
                                            'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_ADD_COVER_BUTTON,
                                            children: B,
                                        }),
                                        (0, i.jsx)('form', {
                                            className: tD().formFile,
                                            encType: 'multipart/form-data',
                                            children: (0, i.jsx)('input', {
                                                ref: y,
                                                type: 'file',
                                                name: 'file',
                                                accept: 'image/jpeg, image/png, image/jpg',
                                                onChange: O,
                                                onClick: w,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                    ],
                });
            });
            var tO = a(78275),
                tU = a(62115),
                tB = a(11940),
                tM = a(91292),
                tF = a(59378),
                tH = a(25300),
                tY = a.n(tH),
                tW = a(79993),
                tz = a(32947);
            let tK = (0, s.PA)((e) => {
                    let { playlist: t, className: a } = e,
                        { formatMessage: l } = (0, n.A)(),
                        s = (0, r.useCallback)(
                            (e, t) => {
                                if (!(null == t ? void 0 : t.playlistReceiver))
                                    switch (e) {
                                        case tz.r.TODAY:
                                            return l({ id: 'interface-actions.playlist-made-today' }, t);
                                        case tz.r.YESTERDAY:
                                            return l({ id: 'interface-actions.playlist-made-yesterday' }, t);
                                        case tz.r.DATE_WITH_YEAR:
                                            return l({ id: 'interface-actions.playlist-made-date-with-year' }, t);
                                        default:
                                            return l({ id: 'interface-actions.playlist-made-date' }, t);
                                    }
                                switch (e) {
                                    case tz.r.TODAY:
                                        return l({ id: 'interface-actions.playlist-made-for-today' }, t);
                                    case tz.r.YESTERDAY:
                                        return l({ id: 'interface-actions.playlist-made-for-yesterday' }, t);
                                    case tz.r.DATE_WITH_YEAR:
                                        return l({ id: 'interface-actions.playlist-made-for-date-with-year' }, t);
                                    default:
                                        return l({ id: 'interface-actions.playlist-made-for-date' }, t);
                                }
                            },
                            [l],
                        ),
                        o = (0, r.useCallback)(
                            (e, t) => {
                                if (!(null == t ? void 0 : t.ownerName))
                                    switch (e) {
                                        case tz.r.TODAY:
                                            return l({ id: 'interface-actions.updated-anonymously-playlist-today' }, t);
                                        case tz.r.YESTERDAY:
                                            return l({ id: 'interface-actions.updated-anonymously-playlist-yesterday' }, t);
                                        case tz.r.DATE_WITH_YEAR:
                                            return l({ id: 'interface-actions.updated-anonymously-playlist-date-with-year' }, t);
                                        default:
                                            return l({ id: 'interface-actions.updated-anonymously-playlist-date' }, t);
                                    }
                                switch (e) {
                                    case tz.r.TODAY:
                                        return l({ id: 'interface-actions.updated-playlist-today' }, t);
                                    case tz.r.YESTERDAY:
                                        return l({ id: 'interface-actions.updated-playlist-yesterday' }, t);
                                    case tz.r.DATE_WITH_YEAR:
                                        return l({ id: 'interface-actions.updated-playlist-date-with-year' }, t);
                                    default:
                                        return l({ id: 'interface-actions.updated-playlist-date' }, t);
                                }
                            },
                            [l],
                        ),
                        d = (0, r.useMemo)(() => {
                            var e, a, i, l, r;
                            let n = new Date(t.modified),
                                d = (0, tz.L)(n);
                            return t.madeForUser
                                ? s(d, {
                                      playlistReceiver: (null == t || null == (l = t.madeForUser) || null == (i = l.caseForms) ? void 0 : i.genitive) || '',
                                      updateDate: n,
                                  })
                                : t.isFavouritePlaylist
                                  ? (null == (r = t.owner) ? void 0 : r.name) || ''
                                  : o(d, {
                                        updateDate: new Date(t.modified),
                                        ownerName: (null == (e = t.owner) ? void 0 : e.name) || '',
                                        gender: (null == (a = t.owner) ? void 0 : a.sex) === tW.U.FEMALE ? 'female' : 'male',
                                    });
                        }, [t, s, o]);
                    return (0, i.jsx)(eT.HL, {
                        variant: 'span',
                        className: a,
                        type: 'text',
                        size: 'm',
                        weight: 'medium',
                        lineClamp: 1,
                        'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_UPDATED_TEXT,
                        children: d,
                    });
                }),
                tG = (0, s.PA)((e) => {
                    let { playlist: t } = e,
                        { formatMessage: a } = (0, n.A)(),
                        {
                            settings: { isMobile: s },
                        } = (0, S.g)(),
                        { notify: o } = (0, ed.l)(),
                        d = t.canUserChange && !s,
                        u = !!t.description,
                        { state: m, toggleTrue: p, toggleFalse: _ } = (0, tO.e)(!1),
                        [y, g] = (0, r.useState)(t.description || ''),
                        v = (0, r.useCallback)(async () => {
                            (_(),
                                (await t.changeDescription(y)) === e9.F.ERROR &&
                                    o((0, i.jsx)(ec.h, { error: a({ id: 'playlist-errors.failed-to-change-description' }) }), { containerId: eo.u.ERROR }));
                        }, [a, y, o, t, _]),
                        h = (0, r.useCallback)((e) => {
                            g(e);
                        }, []),
                        x = (0, r.useMemo)(() => (0, tB.r)(t.description, tM.N, { className: tY().descriptionLink }), [t.description]),
                        P = (0, r.useMemo)(
                            () =>
                                t.tagsString
                                    ? (0, i.jsx)(eT.HL, {
                                          variant: 'span',
                                          type: 'text',
                                          size: 'm',
                                          weight: 'medium',
                                          children: (0, i.jsx)(eG.A, { id: 'entity-names.tags', values: { tags: t.tagsString } }),
                                      })
                                    : null,
                            [t.tagsString],
                        );
                    return (0, i.jsxs)('div', {
                        className: tY().root,
                        children: [
                            u &&
                                !m &&
                                (0, i.jsxs)(eT.HL, {
                                    variant: 'span',
                                    className: tY().description,
                                    type: 'text',
                                    size: 'm',
                                    weight: 'medium',
                                    children: [
                                        x,
                                        d &&
                                            (0, i.jsx)(tr.$, {
                                                variant: 'text',
                                                withRipple: !1,
                                                onClick: p,
                                                className: (0, l.$)(tY().descriptionActionLink, tY().addDescription),
                                                'aria-label': a({ id: 'playlist-actions.change-description' }),
                                                color: 'primary',
                                                'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_CHANGE_DESCRIPTION_BUTTON,
                                                children: (0, i.jsx)(eT.HL, {
                                                    variant: 'span',
                                                    size: 'm',
                                                    type: 'text',
                                                    className: tY().button,
                                                    children: (0, i.jsx)(eG.A, { id: 'playlist-actions.change-description-abbr' }),
                                                }),
                                            }),
                                    ],
                                }),
                            !u &&
                                d &&
                                !m &&
                                (0, i.jsx)(tr.$, {
                                    variant: 'text',
                                    withRipple: !1,
                                    onClick: p,
                                    className: tY().descriptionActionLink,
                                    'aria-label': a({ id: 'playlist-actions.add-description' }),
                                    color: 'primary',
                                    'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_ADD_DESCRIPTION_BUTTON,
                                    children: (0, i.jsxs)(eT.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        type: 'text',
                                        className: tY().button,
                                        children: [(0, i.jsx)(eG.A, { id: 'playlist-actions.add-description' }), '...'],
                                    }),
                                }),
                            d &&
                                m &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(tF.A, {
                                            text: t.description,
                                            className: tY().textField,
                                            placeholder: ''.concat(a({ id: 'playlist-actions.add-description' }), '...'),
                                            maxTextLength: tU.i,
                                            onChangeFinish: h,
                                            variant: 'textarea',
                                            withOutline: !0,
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: tY().actionButtons,
                                            children: [
                                                (0, i.jsx)(tr.$, {
                                                    className: tY().saveButton,
                                                    color: 'secondary',
                                                    radius: 'xxxl',
                                                    size: 's',
                                                    'aria-label': a({ id: 'interface-actions.save' }),
                                                    onClick: v,
                                                    withHover: !0,
                                                    children: (0, i.jsx)(eG.A, { id: 'interface-actions.save' }),
                                                }),
                                                (0, i.jsx)(tr.$, {
                                                    variant: 'text',
                                                    withRipple: !1,
                                                    onClick: _,
                                                    className: tY().cancelButton,
                                                    'aria-label': a({ id: 'interface-actions.cancel' }),
                                                    color: 'primary',
                                                    children: (0, i.jsx)(eT.HL, {
                                                        variant: 'span',
                                                        size: 'm',
                                                        type: 'text',
                                                        className: tY().button,
                                                        children: (0, i.jsx)(eG.A, { id: 'interface-actions.cancel' }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, i.jsx)(tK, { className: tY().updatedText, playlist: t }),
                            P,
                        ],
                    });
                });
            var tV = a(43856),
                t$ = a.n(tV);
            let tX = (0, s.PA)((e) => {
                let { playlist: t } = e,
                    a = (0, r.useRef)(null),
                    { ugcUploadCenter: l } = (0, S.g)(),
                    { formatMessage: s } = (0, n.A)(),
                    o = (0, r.useCallback)(() => {
                        var e;
                        null == a || null == (e = a.current) || e.click();
                    }, [a]),
                    d = (0, r.useCallback)(
                        (e) => {
                            let a = e.target.files;
                            (a && a.length > 0 && l.appendFiles([...a], t), (e.target.value = ''));
                        },
                        [t, l],
                    );
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tr.$, {
                            size: 's',
                            radius: 'xxxl',
                            'aria-label': s({ id: 'ugc.upload-track' }),
                            className: t$().button,
                            onClick: o,
                            'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_UPLOAD_UGC_BUTTON,
                            children: s({ id: 'ugc.upload-track' }),
                        }),
                        (0, i.jsx)('form', {
                            className: t$().form,
                            encType: 'multipart/form-data',
                            children: (0, i.jsx)('input', { ref: a, type: 'file', accept: 'audio/*', onChange: d, multiple: !0 }),
                        }),
                    ],
                });
            });
            var tq = a(40700),
                tQ = a(98158),
                tZ = a(48749),
                tJ = a(22505),
                t0 = a(31059),
                t1 = a.n(t0),
                t8 = a(98148),
                t5 = a(23237),
                t2 = a(56949),
                t9 = a(19994),
                t4 = a(59304),
                t3 = a(81261),
                t6 = a.n(t3);
            let t7 = () =>
                (0, i.jsx)(t4.$, {
                    message: (0, i.jsx)(eT.HL, {
                        className: t6().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, i.jsx)(eG.A, { id: 'playlist-errors.failed-add-tracks-to-playlist' }),
                    }),
                });
            var ae = a(3895),
                at = a.n(ae);
            let aa = (0, s.PA)((e) => {
                    let { playlistTitle: t = '', playlistUrl: a, closeToast: l } = e,
                        { fullscreenPlayer: s } = (0, S.g)(),
                        n = (0, eV.c)(() => {
                            s.modal.isOpened && s.modal.close();
                        }),
                        o = (0, r.useMemo)(
                            () =>
                                (0, i.jsx)(eT.HL, {
                                    className: at().message,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    lineClamp: 1,
                                    children: (0, i.jsx)(eG.A, {
                                        id: 'notifications-info.added-tracks-to-playlist',
                                        values: {
                                            playlistName: (0, i.jsx)(tM.N, {
                                                className: at().link,
                                                href: a,
                                                onClick: n,
                                                children: (0, i.jsxs)(eT.HL, {
                                                    className: at().playlistTitle,
                                                    variant: 'div',
                                                    type: 'controls',
                                                    size: 'm',
                                                    lineClamp: 1,
                                                    children: ['\xa0', t, '\xa0'],
                                                }),
                                            }),
                                        },
                                    }),
                                }),
                            [n, t, a],
                        );
                    return (0, i.jsx)(t4.$, { closeToast: l, message: o });
                }),
                ai = () =>
                    (0, i.jsx)(t4.$, {
                        message: (0, i.jsx)(eT.HL, {
                            className: at().message,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, i.jsx)(eG.A, { id: 'notifications-info.already-added-tracks' }),
                        }),
                    }),
                al = (0, s.PA)((e) => {
                    let { playlistItem: t } = e,
                        {
                            contextMenuAddTracksToPlaylist: { fetchPlaylistTrackIds: a, isTracksLoading: l },
                            fullscreenPlayer: s,
                            playlist: { itemsForCopy: r },
                        } = (0, S.g)(),
                        { notify: n } = (0, ed.l)(),
                        o = (0, eV.c)(async () => {
                            if (0 === r.length || l) return;
                            let e = { containerId: s.modal.isOpened ? eo.u.FULLSCREEN_INFO : eo.u.INFO },
                                o = await a(t.kind);
                            if (null === o) return void n((0, i.jsx)(t7, {}), e);
                            let d = new Set(o),
                                c = r.filter((e) => !d.has(e.id));
                            return c.length
                                ? (await t.changePlaylist((0, er.M)({ operation: en.y.INSERT, position: 0, tracks: c }))) === es.Y.OK
                                    ? void n((0, i.jsx)(aa, { playlistTitle: t.title, playlistUrl: t.url }), e)
                                    : void n((0, i.jsx)(t7, {}), e)
                                : void n((0, i.jsx)(ai, {}), e);
                        });
                    return (0, i.jsx)(tn.Dr, {
                        isBlock: !0,
                        onClick: o,
                        icon: (0, i.jsx)(e$.I, { variant: 'add', size: 'xxs', className: t1().playlistItemIcon }),
                        className: t1().playlistItem,
                        'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_ITEM,
                        children: (0, i.jsx)(eT.HL, { variant: 'div', size: 'm', lineClamp: 1, children: t.title }),
                    });
                }),
                as = (0, s.PA)((e) => {
                    let { searchQuery: t, sourcePlaylistUuid: a } = e,
                        {
                            contextMenuAddTracksToPlaylist: { isPlaylistsLoading: l, getFilteredPlaylists: s },
                        } = (0, S.g)(),
                        n = (0, r.useRef)(null),
                        o = s(t, a),
                        d = (0, t2.Te)({
                            count: o.length,
                            getScrollElement: () => n.current,
                            estimateSize: () => 36,
                            getItemKey: (e) => {
                                var t, a;
                                return null != (a = null == (t = o[e]) ? void 0 : t.uuid) ? a : e;
                            },
                            overscan: 2,
                        }),
                        u = d.getVirtualItems().flatMap((e) => {
                            let t = o[e.index];
                            return t ? [{ virtualItem: e, playlist: t }] : [];
                        });
                    return ((0, r.useEffect)(() => {
                        d.scrollToOffset(0);
                    }, [t, d]),
                    l)
                        ? (0, i.jsx)('div', {
                              className: t1().playlistList,
                              'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_LIST,
                              children: Array.from({ length: 10 }, (e, t) =>
                                  (0, i.jsx)(tn.Dr, { children: (0, i.jsx)(t9.W, { isActive: !0, className: t1().playlistItemShimmer }) }, t),
                              ),
                          })
                        : o.length
                          ? (0, i.jsx)('div', {
                                ref: n,
                                className: t1().playlistList,
                                'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_LIST,
                                children: (0, i.jsx)('div', {
                                    className: t1().virtualPlaylistList,
                                    style: { height: d.getTotalSize() },
                                    children: u.map((e) => {
                                        let { virtualItem: t, playlist: a } = e;
                                        return (0, i.jsx)(
                                            'div',
                                            {
                                                ref: d.measureElement,
                                                className: t1().virtualPlaylistItem,
                                                'data-index': t.index,
                                                style: { transform: 'translate3d(0, '.concat(t.start, 'px, 0)') },
                                                children: (0, i.jsx)(al, { playlistItem: a }),
                                            },
                                            t.key,
                                        );
                                    }),
                                }),
                            })
                          : (0, i.jsx)('div', {
                                className: t1().emptyState,
                                'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_EMPTY_STATE,
                                children: (0, i.jsx)(eG.A, { id: 'search-results.not-found-title' }),
                            });
                }),
                ar = (0, s.PA)((e) => {
                    let { sourcePlaylistUuid: t } = e,
                        {
                            playlist: { itemsForCopy: a },
                        } = (0, S.g)(),
                        { formatMessage: l } = (0, n.A)(),
                        [s, d] = (0, r.useState)(''),
                        u = ((e) => {
                            let { createPlaylist: t, fullscreenPlayer: a } = (0, S.g)(),
                                { notify: l } = (0, ed.l)(),
                                s = (0, o.useRouter)(),
                                { formatMessage: r } = (0, n.A)();
                            return (0, eV.c)(async () => {
                                if (!(null == e ? void 0 : e.length)) return;
                                let n = { containerId: a.modal.isOpened ? eo.u.FULLSCREEN_INFO : eo.u.INFO };
                                await t.create({ title: r({ id: 'entity-names.new-playlist' }), visibility: R.L.PUBLIC });
                                let o = t.meta;
                                if (!(null == o ? void 0 : o.uuid)) {
                                    (l((0, i.jsx)(t7, {}), n), t.reset());
                                    return;
                                }
                                if ((await o.changePlaylist((0, er.M)({ operation: en.y.INSERT, position: 0, tracks: e }))) === es.Y.OK) {
                                    let { href: e } = (0, V.u)('/playlists/:playlistUuid', { params: { playlistUuid: o.uuid } });
                                    (t.reset(), a.modal.isOpened && a.modal.close(), s.push(e));
                                    return;
                                }
                                (t.reset(), l((0, i.jsx)(t7, {}), n));
                            });
                        })(a),
                        m = (0, eV.c)((e) => {
                            d(e);
                        }),
                        p = (0, eV.c)(() => {
                            d('');
                        }),
                        _ = (0, eV.c)((e) => {
                            (e.stopPropagation(), e.nativeEvent.stopImmediatePropagation());
                        });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', {
                                className: t1().searchSection,
                                children: (0, i.jsx)(t5.D, {
                                    className: t1().searchField,
                                    initialValue: s,
                                    correctedValue: null,
                                    placeholder: l({ id: 'search.playlist-placeholder' }),
                                    onChange: m,
                                    resetButtonAriaLabel: l({ id: 'interface-actions.reset-search-input' }),
                                    onResetClick: p,
                                    shouldPreventAutoFocusScroll: !0,
                                    innerInputProps: { onKeyDown: _, 'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_SEARCH_INPUT },
                                }),
                            }),
                            (0, i.jsx)(tn.Dr, {
                                onClick: u,
                                icon: (0, i.jsx)(e$.I, { variant: 'add', size: 'xxs' }),
                                className: t1().createPlaylistButton,
                                'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_CREATE_BUTTON,
                                children: (0, i.jsx)(eT.HL, {
                                    variant: 'div',
                                    size: 'm',
                                    lineClamp: 1,
                                    children: (0, i.jsx)(eG.A, { id: 'playlist-actions.create-playlist' }),
                                }),
                            }),
                            (0, i.jsx)(t8.c, { className: t1().menuDivider }),
                            (0, i.jsx)(as, { searchQuery: s, sourcePlaylistUuid: t }),
                        ],
                    });
                }),
                an = (0, s.PA)((e) => {
                    let { disabled: t, className: a, sourcePlaylistUuid: l } = e,
                        {
                            contextMenuAddTracksToPlaylist: { loadPlaylistsWithoutTracks: s },
                            settings: { isMobile: r },
                            user: o,
                            playlist: { items: d },
                        } = (0, S.g)(),
                        { formatMessage: u } = (0, n.A)(),
                        m = t || !o.isAuthorized || !d.length,
                        p = (0, eV.c)(() => {
                            s();
                        });
                    return (0, i.jsx)(tn.W1, {
                        offsetOptions: 3,
                        isMobile: r,
                        className: a,
                        listClassName: t1().menuContent,
                        label: u({ id: 'interface-actions.add-tracks-to-playlist' }),
                        icon: (0, i.jsx)(e$.I, { variant: 'addToPlaylist', size: 'xxs' }),
                        disabled: m,
                        onShow: p,
                        containerDataTestId: c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST,
                        'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_BUTTON,
                        children: (0, i.jsx)(ar, { sourcePlaylistUuid: l }),
                    });
                });
            var ao = a(16161),
                ad = a(68567),
                ac = a.n(ad);
            let au = (0, s.PA)((e) => {
                let { className: t, playlist: a } = e,
                    { notify: s } = (0, ed.l)(),
                    { formatMessage: o } = (0, n.A)(),
                    d = (0, r.useCallback)(async () => {
                        (await a.toggleVisibility()) === e9.F.ERROR &&
                            s((0, i.jsx)(ec.h, { error: o({ id: 'playlist-errors.failed-to-change-privacy-settings' }) }), { containerId: eo.u.ERROR });
                    }, [o, s, a]);
                return (0, i.jsxs)(tn.Dr, {
                    className: (0, l.$)(ac().root, t),
                    onClick: d,
                    icon: (0, i.jsx)(e$.I, { variant: 'eye_crossed', size: 'xxs' }),
                    'data-test-id': c.S7.CONTEXT_MENU_PLAYLIST_PRIVACY_BUTTON,
                    role: 'menuitemcheckbox',
                    'aria-checked': !a.isPublic,
                    isSubMenu: !0,
                    isBlock: !0,
                    children: [
                        (0, i.jsx)('span', { className: ac().caption, children: (0, i.jsx)(eG.A, { id: 'playlist-actions.privacy' }) }),
                        (0, i.jsx)(ao.l, { isChecked: !a.isPublic, ariaLabel: o({ id: 'playlist-actions.privacy-label' }), tabIndex: -1 }),
                    ],
                });
            });
            var am = a(79546),
                ap = a(4370),
                a_ = a(95210),
                ay = a(47964),
                ag = a(9630),
                av = a(2520),
                ah = a(46936),
                ax = a(98953),
                aP = a(32721),
                aA = a(18130),
                af = a(15077),
                aT = a(93091),
                ab = a(27817),
                aC = a(74064),
                ak = a(15425),
                aI = a(81066);
            let aS = (0, s.PA)((e) => {
                    var t, a, l, s;
                    let { playlist: u, onOpenChange: m, open: p, wrapperClassName: _, ...y } = e,
                        { shouldShowBuySubscriptionModal: g, showBuySubscriptionModal: v } = (0, e1.q)(),
                        {
                            settings: { isMobile: h },
                            trailer: P,
                            playlist: {
                                filters: { activeFilter: A, analyticsParamsActiveFilterIndex: f },
                                items: T,
                            },
                            user: b,
                            experiments: C,
                            sonataState: { entityMeta: k },
                        } = (0, S.g)(),
                        I = (0, ag.e)(),
                        L = (0, eq.K)(u),
                        j = C.checkExperiment(eb.z.WebEditorsFeatures, 'on'),
                        N = (0, eQ.A)(u),
                        E = (0, e0.F)(),
                        R = ''.concat(ep.U.PLAYLIST, '-').concat(u.uid, '_').concat(u.kind),
                        D = u.canUserChange,
                        { utmLink: w } = (0, eg.f)({
                            pageId: x._Q.PLAYLIST,
                            blockId: ep.U.PLAYLIST,
                            contextType: eu.K.Playlist,
                            contextId: u.uuid,
                            pageEntityId: u.uuid,
                        }),
                        O = (0, eZ.P)(),
                        U = u.isOwnFavouritePlaylist && C.checkExperiment(eb.z.WebNextToggleFavouritePlaylistVisibility, 'on'),
                        B = (0, tq.S)(null == I ? void 0 : I.state.currentContext.value),
                        M = k && !B,
                        F = !C.checkExperiment(eb.z.WebNextProductWithoutRecommendation, 'on'),
                        H = (0, av.i)({ playlistId: u.id, filter: A }),
                        Y = (0, eV.c)((e) =>
                            e.data
                                ? !e.data.isRemoved && e.data.isAvailable
                                    ? e.data.entityId
                                    : void 0
                                : null !== e.albumId
                                  ? ''.concat(e.id, ':').concat(e.albumId)
                                  : String(e.id),
                        ),
                        W = (0, tQ.m)(T, am.N.NEXT, H, { entityVariant: af.c.PLAYLIST, entityTitle: u.title, coverUri: u.coverUri }, Y),
                        z = (0, tQ.m)(T, am.N.LAST, H, { entityVariant: af.c.PLAYLIST, entityTitle: u.title, coverUri: u.coverUri }, Y),
                        { notify: K } = (0, ed.l)(),
                        { formatMessage: G } = (0, n.A)(),
                        V = (0, o.useRouter)(),
                        $ = ((e) => {
                            let t = (0, tf.st)(),
                                a = (0, tT.U)(),
                                { hash: i } = (0, tf.gf)();
                            return (0, r.useCallback)(() => {
                                if (!t || !e.objectId) return;
                                let l = {
                                        hash: i,
                                        pageId: tb.W[x._Q.PLAYLIST],
                                        mainObjectType: d.DomainObjectType.Wave,
                                        mainObjectId: e.objectId,
                                        tabId: e.tabId || '',
                                        tabPos: e.tabPos || 1,
                                    },
                                    s = (0, tP.F)({ params: l, logger: a, context: 'useSendEventOnPlaylistWaveStarted' });
                                s && (0, tA.e7)(t.evgenInstance, s);
                            }, [t, i, a, e]);
                        })((0, r.useMemo)(() => ({ objectId: u.seeds[0], tabId: A, tabPos: f }), [u.seeds, A, f])),
                        { shareLink: X, pathname: q } = (0, aA.b)('/playlists/:playlistUuid', { params: { playlistUuid: u.uuid } }),
                        Q = (0, tZ.A)({ entityVariant: ah.D.PLAYLIST, urlParams: { id: u.uid, kind: u.kind } }),
                        { isPlaying: Z, togglePlay: J } = (0, ay.B)({
                            seeds: null != (s = u.seeds) ? s : [],
                            pageIdForFrom: x._Q.RADIO,
                            blockIdForFrom: R,
                            parentContextId: u.uuid,
                        }),
                        ee = (0, eV.c)(() => {
                            if (g && b.isAuthorized) return void v();
                            !O() && (Z || (J(), $()));
                        }),
                        et = (0, eV.c)(() => {
                            if (g) return void v();
                            O() || (P.setUtmLink(w), P.openPlaylistTrailer(u.id), E(d.DomainObjectType.Playlist, u.id));
                        }),
                        ea = (0, eV.c)(async () => {
                            if ((await u.deletePlaylist()) === e9.F.ERROR)
                                return void K((0, i.jsx)(ec.h, { error: G({ id: 'playlist-errors.failed-to-remove-playlist' }) }), { containerId: eo.u.ERROR });
                            V.push(ap.Z.collection.href);
                        });
                    (0, a_.N)(p);
                    let ei = (u.isPublic || u.isFavouritePlaylist) && u.isAvailable,
                        el = {
                            variant: ax.Y.PLAYLIST,
                            id: u.kind,
                            title: u.title,
                            path: q,
                            playlistOwnerName: null == (t = u.owner) ? void 0 : t.name,
                            playlistOwnerLogin: null == (a = u.owner) ? void 0 : a.login,
                        };
                    return (0, i.jsxs)(tn.W1, {
                        isMobile: h,
                        offsetOptions: 10,
                        open: p,
                        onOpenChange: m,
                        ariaLabel: G({ id: 'interface-actions.context-menu' }),
                        wrapperClassName: _,
                        ...y,
                        containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                        children: [
                            j && (0, i.jsx)(tJ.d, { entityVariant: ah.D.PLAYLIST, adminUrl: u.isFavouritePlaylist ? void 0 : Q, withPlaylistPageFeatures: !0 }),
                            (0, i.jsx)(an, { sourcePlaylistUuid: u.uuid }),
                            !h && (0, i.jsx)(ab.L, { onClick: N, isPinned: u.isPinned }),
                            !u.isFavouritePlaylist && (0, i.jsx)(aT.T, { onClick: L, isLiked: u.isLiked, disabled: !b.isAuthorized }),
                            (null == (l = u.trailer) ? void 0 : l.isAvailable) && (0, i.jsx)(ak.N, { onClick: et }),
                            F && (0, i.jsx)(aI.C, { disabled: !u.isAvailable, onClick: ee, variant: aP.I.PLAYLIST }),
                            M &&
                                (0, i.jsx)(tn.Dr, {
                                    onClick: W,
                                    icon: (0, i.jsx)(e$.I, { variant: 'playNext', size: 'xxs' }),
                                    disabled: !b.isAuthorized,
                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_PLAY_NEXT_BUTTON,
                                    children: (0, i.jsx)(eG.A, { id: 'play-queue.play-next' }),
                                }),
                            M &&
                                (0, i.jsx)(tn.Dr, {
                                    onClick: z,
                                    icon: (0, i.jsx)(e$.I, { variant: 'playLast', size: 'xxs' }),
                                    disabled: !b.isAuthorized,
                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_PLAY_LAST_BUTTON,
                                    children: (0, i.jsx)(eG.A, { id: 'play-queue.play-last' }),
                                }),
                            (0, i.jsx)(aC.H, { disabled: !ei, shareLink: X, entityMeta: el }),
                            D &&
                                (0, i.jsx)(tn.Dr, {
                                    icon: (0, i.jsx)(e$.I, { variant: 'bucket', size: 'xxs' }),
                                    onClick: ea,
                                    children: (0, i.jsx)(eG.A, { id: 'playlist-actions.remove-playlist' }),
                                }),
                            (D || U) && (0, i.jsx)(au, { playlist: u }),
                        ],
                    });
                }),
                aL = (0, s.PA)((e) => {
                    var t, a;
                    let { playlist: s, isDisabled: u, className: m, forwardRef: p } = e,
                        { shouldShowBuySubscriptionModal: _, showBuySubscriptionModal: y } = (0, e1.q)(),
                        { from: g, utmLink: v } = (0, eg.f)({
                            pageId: x._Q.PLAYLIST,
                            blockId: ep.U.PLAYLIST,
                            contextType: eu.K.Playlist,
                            contextId: s.uuid,
                            pageEntityId: s.uuid,
                        }),
                        {
                            settings: { isMobile: h },
                            sonataState: P,
                            trailer: A,
                            playlist: {
                                filters: { activeFilter: f, activeFilterName: T },
                                enableVariousAutoFlow: b,
                                trackIds: C,
                                isRewind2024Playlist: k,
                                setShouldShowTrailerOnboarding: I,
                            },
                            user: L,
                            ugcUploadCenter: j,
                            paywall: { modal: N },
                        } = (0, S.g)(),
                        E = h && !L.isAuthorized,
                        R = h && !L.hasPlus && L.isAuthorized,
                        D = E || R,
                        w = (0, e8.N)(),
                        { formatMessage: O, formatNumber: U } = (0, n.A)(),
                        [B, M] = (0, r.useState)(!1),
                        F = (0, eq.K)(s),
                        H = (0, eQ.A)(s),
                        Y = (0, e0.F)(),
                        W = !h,
                        z = (0, r.useRef)(null),
                        K = (0, eJ.f)(),
                        G = (0, eZ.P)(),
                        { controlSize: V, iconSize: $ } = (0, ta.q)(h),
                        { notify: X } = (0, ed.l)(),
                        q = s.canUserChange && !h,
                        Q = (0, o.useSearchParams)(),
                        Z = (0, r.useMemo)(() => {
                            if (k && s.personalColor) return (0, e5.R)(s.personalColor);
                        }, [k, s.personalColor]),
                        J = (0, eV.c)(() => {
                            var e;
                            null == (e = z.current) || e.focus();
                        });
                    (0, r.useEffect)(() => {
                        K();
                    }, [K]);
                    let ee = (0, eV.c)(async (e) => {
                            (await s.changeTitle(e)) === e9.F.ERROR &&
                                X((0, i.jsx)(ec.h, { error: O({ id: 'playlist-errors.failed-to-change-title' }) }), { containerId: eo.u.ERROR });
                        }),
                        { isPlaying: et, togglePlay: ea } = (0, e2.D)({
                            playContextParams: {
                                contextData: {
                                    type: eu.K.Playlist,
                                    meta: { id: s.id, uuid: s.uuid },
                                    filter: f,
                                    filterName: T,
                                    enableVariousAutoFlow: b,
                                    from: g,
                                    utmLink: v,
                                },
                                loadContextMeta: !0,
                                entitiesData: P.unloadedEntitiesDataFromModels,
                            },
                        }),
                        [ei, el] = (0, r.useState)(et),
                        es = (0, eV.c)(() => {
                            if (!G()) {
                                if (_) return void y();
                                if (w) return void N.open();
                                (ea(), P.setPlaylistFilter(f));
                            }
                        });
                    (0, r.useEffect)(() => {
                        et && (P.playlistFilter === f || ((0, eK.A)(P.playlistFilter) && (0, eK.A)(f))) ? el(!0) : el(!1);
                    }, [et, P.playlistFilter, f]);
                    let er = (0, r.useMemo)(() => {
                            if (s.actualLikesCount && s.actualLikesCount > 0)
                                return (0, i.jsx)(eT.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    size: 's',
                                    weight: 'medium',
                                    children: s.actualLikesCount && U(s.actualLikesCount),
                                });
                        }, [s.actualLikesCount, U]),
                        en = (0, r.useMemo)(
                            () =>
                                h
                                    ? (0, i.jsx)(e7.D, {
                                          ref: z,
                                          className: (0, l.$)(ts().playControl, { [ts().playControl_withLogin]: D }),
                                          color: D ? 'secondary' : 'primary',
                                          buttonVariant: 'default',
                                          iconSize: D ? $ : 'xxl',
                                          size: D ? V : void 0,
                                          isPlaying: ei,
                                          variant: D ? 'default' : 'filled',
                                          onClick: es,
                                          disabled: u,
                                          shouldSendAnalyticsOnPlayClick: !0,
                                      })
                                    : (0, i.jsx)(e7.D, {
                                          ref: z,
                                          className: ts().playControl,
                                          withRipple: !0,
                                          buttonVariant: 'default',
                                          radius: 'xxxl',
                                          size: 's',
                                          color: 'primary',
                                          iconSize: 'xxs',
                                          isPlaying: ei,
                                          onClick: es,
                                          disabled: u,
                                          shouldSendAnalyticsOnPlayClick: !0,
                                          children: (0, i.jsx)(eG.A, { id: 'player-actions.listen' }),
                                      }),
                            [u, h, es, ei, D, $, V],
                        ),
                        em = (0, eV.c)(() => {
                            G() || (A.setUtmLink(v), A.openPlaylistTrailer(s.id), Y(d.DomainObjectType.Playlist, s.id));
                        }),
                        e_ = (0, eV.c)(() => {
                            if (_) return void y();
                            em();
                        });
                    (0, r.useEffect)(() => {
                        var e;
                        (null == (e = s.trailer) ? void 0 : e.isAvailable) && 'true' === Q.get(e4.K.OPEN_TRAILER) && em();
                    }, [k, s.personalColor, em, Q, I, null == (t = s.trailer) ? void 0 : t.isAvailable]);
                    let ev = (0, r.useMemo)(() => {
                            var e;
                            return (null == (e = s.trailer) ? void 0 : e.isAvailable) && !h
                                ? (0, i.jsx)(tt.L, {
                                      children: (0, i.jsx)(te.k, {
                                          size: 's',
                                          radius: 'xxxl',
                                          iconSize: 'xxs',
                                          className: th().trailerControl,
                                          onClick: e_,
                                          disabled: !s.isAvailable,
                                          style: Z,
                                          children: (0, i.jsx)(eG.A, { id: 'entity-names.trailer' }),
                                      }),
                                  })
                                : null;
                        }, [e_, h, null == (a = s.trailer) ? void 0 : a.isAvailable, s.isAvailable, Z]),
                        eh = s.canUserChange && j.isAvailable,
                        ex = (0, r.useMemo)(() => {
                            if (eh) return (0, i.jsx)('div', { className: th().ugcControls, children: (0, i.jsx)(tX, { playlist: s }) });
                        }, [s, eh]),
                        eP = (0, r.useMemo)(() => O({ id: 'entity-names.likes-count-description' }, { count: s.actualLikesCount }), [O, s.actualLikesCount]),
                        eA = (0, ew.L)(() => {
                            if (!s.isFavouritePlaylist)
                                return h
                                    ? (0, i.jsx)(e3.c, {
                                          className: th().likeControl,
                                          isLiked: s.isLiked,
                                          onClick: F,
                                          variant: 'default',
                                          size: V,
                                          iconSize: $,
                                          iconClassName: th().likeIcon,
                                          disabled: !L.isAuthorized,
                                      })
                                    : (0, i.jsx)(e3.c, {
                                          className: th().likeControl,
                                          isLiked: s.isLiked,
                                          onClick: F,
                                          withRipple: !0,
                                          iconSize: $,
                                          size: V,
                                          variant: 'default',
                                          'aria-label': eP,
                                          iconClassName: th().likeIcon,
                                          disabled: !L.isAuthorized,
                                          children: er,
                                      });
                        }),
                        ef = L.hasPlus && !h && s.isFavouritePlaylist && s.isOwnPlaylist,
                        eb = (0, r.useMemo)(
                            () =>
                                (0, i.jsxs)('div', {
                                    className: th().controls,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: th().mainControls,
                                            children: [
                                                (0, i.jsx)(ey.B, {
                                                    objectType: d.DomainObjectType.Playlist,
                                                    objectId: String(s.uuid),
                                                    objectPosX: 1,
                                                    objectPosY: 1,
                                                    objectsCount: 1,
                                                    children: en,
                                                }),
                                                (0, i.jsx)(tI, { playlistUuid: s.uuid }),
                                                ev,
                                                (0, i.jsx)(ey.B, {
                                                    objectType: d.DomainObjectType.Playlist,
                                                    objectId: String(s.uuid),
                                                    objectPosX: 1,
                                                    objectPosY: 1,
                                                    objectsCount: 1,
                                                    children: eA,
                                                }),
                                                W && (0, i.jsx)(e6.O, { onClick: H, isPinned: s.isPinned, className: th().pinControl }),
                                                (0, i.jsx)(aS, {
                                                    playlist: s,
                                                    open: B,
                                                    onOpenChange: M,
                                                    wrapperClassName: th().menuControl,
                                                    size: V,
                                                    icon: (0, i.jsx)(e$.I, { size: $, variant: 'more' }),
                                                    'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_CONTEXT_MENU_BUTTON,
                                                }),
                                                ef && (0, i.jsx)(tg, { trackIds: C, className: th().downloadControl, onRemove: J }),
                                            ],
                                        }),
                                        ex,
                                    ],
                                }),
                            [en, ev, eA, H, s, ef, C, B, V, $, ex, W, J],
                        );
                    return (0, i.jsx)('div', {
                        className: th().root,
                        children: (0, i.jsx)(ti.k, {
                            headingVariant: 'h1',
                            ref: p,
                            className: m,
                            controls: eb,
                            meta: (0, i.jsx)(tG, { playlist: s }),
                            entityName: O({ id: 'entity-names.playlist' }),
                            title: s.title,
                            canChangeTitle: q,
                            maxTitleLength: eX.k,
                            onTitleChange: ee,
                            cover: (0, i.jsx)(tw, { playlist: s }),
                            showMobileLoginButton: E,
                            showMobileSubscriptionButton: R,
                        }),
                    });
                }),
                aj = (0, r.forwardRef)((e, t) => (0, i.jsx)(aL, { forwardRef: t, ...e }));
            var aN = a(55482),
                aE = a(80921),
                aR = a.n(aE);
            let aD = (e) => {
                let { className: t, isEmptySearch: a } = e,
                    s = (0, r.useMemo)(
                        () =>
                            a ? (0, i.jsx)(eG.A, { id: 'search-results.not-found-title' }) : (0, i.jsx)(eG.A, { id: 'error-messages.empty-collection-playlist-title' }),
                        [a],
                    ),
                    n = (0, r.useMemo)(
                        () =>
                            a
                                ? (0, i.jsx)(eG.A, { id: 'search-results.not-found-description' })
                                : (0, i.jsx)(eG.A, { id: 'error-messages.empty-collection-playlist-description' }),
                        [a],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(aR().root, t),
                    'data-test-id': c.Kq.playlist.PLAYLIST_EMPTY_BLOCK,
                    children: [
                        (0, i.jsx)('div', {
                            className: aR().iconBackground,
                            children: (0, i.jsx)(e$.I, { variant: 'search', size: 'l', className: aR().icon, 'data-test-id': c.Kq.playlist.PLAYLIST_EMPTY_BLOCK_ICON }),
                        }),
                        (0, i.jsx)(eT.DZ, { variant: 'h3', size: 'xs', className: aR().title, 'data-test-id': c.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TITLE, children: s }),
                        (0, i.jsx)(eT.HL, { variant: 'span', size: 'l', className: aR().subtitle, 'data-test-id': c.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TEXT, children: n }),
                    ],
                });
            };
            var aw = a(5279),
                aO = a(39267),
                aU = a(15232),
                aB = a(56712),
                aM = a(96827),
                aF = a.n(aM);
            let aH = (0, s.PA)((e) => {
                let { className: t, track: a, playContextParams: l, onClick: s } = e,
                    { formatMessage: o } = (0, n.A)(),
                    {
                        settings: { isMobile: d },
                    } = (0, S.g)(),
                    u = (0, e2.D)({ playContextParams: l, entityId: a.entityId }),
                    m = (0, r.useCallback)(
                        (e) =>
                            (0, i.jsx)(aO.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: aF().playButtonCell,
                                radius: 'xs',
                                ...e,
                            }),
                        [a],
                    ),
                    p = (0, r.useCallback)(
                        (e) => {
                            (e.stopPropagation(), null == s || s(a));
                        },
                        [a, s],
                    ),
                    _ = (0, r.useMemo)(
                        () =>
                            (0, i.jsx)('div', {
                                className: aF().controls,
                                children: (0, i.jsx)(tr.$, {
                                    className: aF().button,
                                    variant: 'text',
                                    size: 'xs',
                                    radius: 'xxxl',
                                    'aria-label': o({ id: 'interface-actions.add-track-to-playlist' }),
                                    onClick: p,
                                    icon: (0, i.jsx)(e$.I, { size: 'xxs', variant: 'add' }),
                                }),
                            }),
                        [o, p],
                    );
                return (0, i.jsx)(aB.C, {
                    className: t,
                    track: a,
                    meta: (0, i.jsx)(aU.j, { withArtistLink: !d, track: a }),
                    playButtonCellRender: m,
                    controls: _,
                    ...u,
                    'data-test-id': c.Kq.track.TRACK_PLAYLIST_ADDITION,
                });
            });
            var aY = a(40512);
            let aW = (e) => {
                let { item: t, from: a, tracks: i } = e,
                    l = i
                        .map((e) => {
                            if (e) return (0, aY.$)(e);
                        })
                        .filter((e) => e);
                return {
                    contextData: { type: eu.K.Various, meta: { id: t.entityId }, from: a },
                    queueParams: { entityId: t.entityId },
                    loadContextMeta: !0,
                    entitiesData: l,
                };
            };
            var az = a(8357),
                aK = a.n(az);
            let aG = (0, s.PA)((e) => {
                var t, a, s, o, u, m, p, _, y;
                let { autoFocus: g, className: v } = e,
                    { formatMessage: h } = (0, n.A)(),
                    { playlist: P } = (0, S.g)(),
                    { search: A } = P,
                    f = (0, aw.R)(),
                    T = (0, r.useRef)(0),
                    b = (null == (t = P.meta) ? void 0 : t.isOwnPlaylist) ? x._Q.OWN_PLAYLISTS : x._Q.PLAYLIST,
                    { from: C } = (0, eg.f)({ pageId: b, blockId: ep.U.FILTERED }),
                    { from: k } = (0, eg.f)({ pageId: b, blockId: ep.U.SUGGESTED }),
                    [I, L] = (0, r.useState)(!1);
                (0, r.useEffect)(
                    () => () => {
                        window.clearTimeout(T.current);
                    },
                    [],
                );
                let j = (0, r.useMemo)(
                        () =>
                            (0, aN.A)((e) => {
                                let t = e.trim();
                                (A.setText(t),
                                    t && (null == P ? void 0 : P.meta) && (A.reset(), A.getTracks({ uid: P.meta.uid, kind: P.meta.kind })),
                                    (t && 0 !== t.length) || (I && (L(!1), P.refreshTracks()), A.setIdleState()));
                            }, 100),
                        [A, P, I],
                    ),
                    N = (0, r.useCallback)(
                        async (e) => {
                            if (P.meta) {
                                A.setAdditionTrackAnimation(e.id);
                                let t = f({ track: e, playlist: P.meta, withSuccessNotification: !1, withPageRefresh: !1 }),
                                    a = new Promise((e) => {
                                        T.current = window.setTimeout(e, 300);
                                    }),
                                    [i] = await Promise.all([t, a]);
                                i === es.Y.OK ? (A.replaceAdditionTrackInProggress(), L(!0)) : A.resetAdditionTrackAnimation();
                            }
                        },
                        [f, P.meta, A],
                    ),
                    E = (0, r.useMemo)(() => {
                        var e;
                        return A.isLoading
                            ? (0, i.jsx)(eh.D, { isActive: !0, className: aK().shimmerItem, variant: ev.X.PLAYLIST })
                            : null == (e = A.playlistTracks)
                              ? void 0
                              : e.map((e, t) => {
                                    var a, s;
                                    return e
                                        ? e.isTrackNonMusic
                                            ? (0, i.jsx)(
                                                  ey.B,
                                                  {
                                                      objectType: d.DomainObjectType.Track,
                                                      objectId: String(null == e ? void 0 : e.id),
                                                      objectPosX: 1,
                                                      objectPosY: t + 1,
                                                      objectsCount: null == (s = A.playlistTracks) ? void 0 : s.length,
                                                      children: (0, i.jsx)(ef.K, {
                                                          withPodcastName: !0,
                                                          track: e,
                                                          playContextParams: aW({ item: e, from: C, tracks: A.playlistTracks }),
                                                          className: (0, l.$)(aK().track, { [aK().appearingTrack]: e.id === A.additionTrackInProggress }),
                                                      }),
                                                  },
                                                  e.id,
                                              )
                                            : (0, i.jsx)(
                                                  ey.B,
                                                  {
                                                      objectType: d.DomainObjectType.Track,
                                                      objectId: String(null == e ? void 0 : e.id),
                                                      objectPosX: 1,
                                                      objectPosY: t + 1,
                                                      objectsCount: null == (a = A.playlistTracks) ? void 0 : a.length,
                                                      children: (0, i.jsx)(eL.K, {
                                                          className: (0, l.$)(aK().track, { [aK().appearingTrack]: e.id === A.additionTrackInProggress }),
                                                          track: e,
                                                          playContextParams: aW({ item: e, from: C, tracks: A.playlistTracks }),
                                                      }),
                                                  },
                                                  e.id,
                                              )
                                        : null;
                                });
                    }, [A.isLoading, A.playlistTracks, A.additionTrackInProggress, C]),
                    R = (0, r.useMemo)(() => {
                        var e, t;
                        if (null == (e = P.meta) ? void 0 : e.canUserChange)
                            return A.isLoading
                                ? (0, i.jsx)(eh.D, { isActive: !0, className: aK().shimmerItem, variant: ev.X.PLAYLIST })
                                : null == (t = A.suggestedTracks)
                                  ? void 0
                                  : t.map((e) =>
                                        e
                                            ? (0, i.jsx)(
                                                  aH,
                                                  {
                                                      track: e,
                                                      className: (0, l.$)({ [aK().disappearingTrack]: e.id === A.additionTrackInProggress }),
                                                      playContextParams: ((e, t) => ({
                                                          contextData: { type: eu.K.Various, meta: { id: e.entityId }, from: t },
                                                          queueParams: { index: 0, entityId: e.entityId },
                                                          loadContextMeta: !0,
                                                      }))(e, k),
                                                      onClick: N,
                                                  },
                                                  e.id,
                                              )
                                            : null,
                                    );
                    }, [null == (a = P.meta) ? void 0 : a.canUserChange, A.isLoading, A.suggestedTracks, A.additionTrackInProggress, k, N]),
                    D = (0, r.useMemo)(() => {
                        var e, t, a;
                        let l = !(null == (e = A.suggestedTracks) ? void 0 : e.length) || !(null == (t = P.meta) ? void 0 : t.canUserChange);
                        return (null == (a = A.playlistTrackIds) ? void 0 : a.length) || !l || A.isLoading
                            ? null
                            : (0, i.jsx)(aD, { className: aK().emptyBlockContainer, isEmptySearch: !0 });
                    }, [
                        null == (s = A.suggestedTracks) ? void 0 : s.length,
                        null == (o = A.playlistTrackIds) ? void 0 : o.length,
                        A.isLoading,
                        null == (u = P.meta) ? void 0 : u.canUserChange,
                    ]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(t5.D, {
                            className: (0, l.$)(aK().root, v),
                            autoFocus: g,
                            initialValue: A.text,
                            correctedValue: null,
                            placeholder: h({ id: 'search.track-placeholder' }),
                            onChange: j,
                            resetButtonAriaLabel: h({ id: 'interface-actions.reset-search-input' }),
                            onResetClick: A.reset,
                            innerInputProps: { 'data-test-id': c.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT },
                            resetButtonProps: { 'data-test-id': c.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT_RESET_BUTTON },
                            searchIconProps: { 'data-test-id': c.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT_ICON },
                            shouldPreventAutoFocusScroll: !0,
                        }),
                        A.text &&
                            (0, i.jsxs)('div', {
                                className: aK().content,
                                children: [
                                    D,
                                    (0, i.jsx)(e_.F, {
                                        blockType: d.EntityTypes.Tracks,
                                        blockId: d.EntityTypes.Tracks,
                                        blockPosX: 1,
                                        blockPosY: 2,
                                        mainObjectId: String(null == P || null == (m = P.meta) ? void 0 : m.uuid),
                                        mainObjectType: d.DomainObjectType.Playlist,
                                        children: E,
                                    }),
                                    Number(null == (p = A.suggestedTracks) ? void 0 : p.length) > 0 &&
                                        (null == (_ = P.meta) ? void 0 : _.canUserChange) &&
                                        (0, i.jsx)(
                                            eT.DZ,
                                            {
                                                variant: 'h3',
                                                className: (0, l.$)(aK().catalog, { [aK().catalog_withTracks]: null == (y = A.playlistTrackIds) ? void 0 : y.length }),
                                                children: (0, i.jsx)(eG.A, { id: 'search.search-catalog' }),
                                            },
                                            'search.search-catalog-caption',
                                        ),
                                    R,
                                ],
                            }),
                    ],
                });
            });
            var aV = a(38147),
                a$ = a(98225),
                aX = a(63807);
            let aq = (e) => {
                let { children: t, child: a, className: l } = e,
                    { setChildElement: s, setChild: n } = (0, r.useContext)(aX.B),
                    o = (0, r.useRef)(null);
                return (
                    (0, r.useEffect)(() => {
                        ((null == o ? void 0 : o.current) && s(o), a && n(a));
                    }, [o, a, s, n]),
                    (0, r.useEffect)(
                        () => () => {
                            n(null);
                        },
                        [n],
                    ),
                    (0, i.jsx)('div', { ref: o, className: l, children: t })
                );
            };
            var aQ = a(39400),
                aZ = a(64861),
                aJ = a(39942),
                a0 = a.n(aJ);
            let a1 = (0, s.PA)((e) => {
                var t;
                let { playlist: a } = e,
                    { setPlaylistStickyFiltersRef: l, setPlaylistStaticFiltersRef: s } = (0, k.g)(),
                    n = (0, a$.zb)(a.filters.activeFilterIndex),
                    o = (0, r.useRef)(null),
                    d = (0, aZ.$)();
                (0, r.useEffect)(() => {
                    a.isResolved && a.filters.getFilters();
                }, [a, a.loadingState]);
                let c = (0, eV.c)((e) => {
                        var t;
                        if (!n.onTabChange || e === n.value) return;
                        (setTimeout(() => {
                            var t, a, i;
                            null == (i = o.current) || null == (a = i.children[e]) || null == (t = a.focus) || t.call(a);
                        }),
                            n.onTabChange(e));
                        let i = null == (t = a.filters.items) ? void 0 : t[e];
                        i && (a.filters.handleFilterClick(i), d({ tabId: i.id, tabPos: e + 1 }));
                    }),
                    u = null == (t = a.filters.items) ? void 0 : t.map((e) => ({ id: e.id, name: e.name }));
                return (0, i.jsx)(aq, {
                    child: (0, i.jsx)(aQ.A, { className: a0().stickyFilters, tabsState: n, handleFilterClick: c, ref: l, isSticky: !0, items: u }),
                    children: (0, i.jsx)(aQ.A, {
                        className: a0().staticFilters,
                        tabsState: n,
                        handleFilterClick: c,
                        ref: s,
                        carouselClassName: a0().staticFiltersCarousel,
                        items: u,
                    }),
                });
            });
            var a8 = a(61166),
                a5 = a(95850);
            let a2 = (0, s.PA)((e) => {
                let { className: t, creativeClassName: a, gradientClassName: l } = e,
                    {
                        advertBanners: {
                            banners: { brandedPlaylistBanner: s },
                        },
                    } = (0, S.g)(),
                    { formatMessage: o } = (0, n.A)(),
                    d = (0, eV.c)(() => {
                        s.setType(aV.h.BRANDING);
                    });
                return (
                    (0, r.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    (0, i.jsxs)('div', {
                        className: t,
                        'aria-label': o({ id: 'advert.banner' }),
                        role: 'banner',
                        children: [
                            (0, i.jsx)(a5.N, {
                                className: l,
                                ownerId: a8.P,
                                containerId: p.LB,
                                params: p.w_,
                                onLoad: d,
                                onError: s.toggleHasErrorTrue,
                                onNoAds: s.toggleNoAdsTrue,
                            }),
                            (0, i.jsx)(a5.N, {
                                className: a,
                                ownerId: a8.P,
                                containerId: p.KZ,
                                params: p.RA,
                                onLoad: d,
                                onError: s.toggleHasErrorTrue,
                                onNoAds: s.toggleNoAdsTrue,
                            }),
                        ],
                    })
                );
            });
            var a9 = a(26208),
                a4 = a(23598),
                a3 = a.n(a4);
            let a6 = (0, s.PA)(() => {
                var e;
                let {
                        advert: t,
                        advertBanners: {
                            banners: { brandedPlaylistBanner: a },
                        },
                    } = (0, S.g)(),
                    s = (0, y.Q)(),
                    r = a.isVisible && s.isEnabled;
                return t.isAdvertDisabled(a9.f.PLAYLIST_BRANDING)
                    ? null
                    : (0, i.jsx)('div', {
                          className: (0, l.$)({ [a3().brandedPlaylistBannerWrapper]: r }),
                          style: null == (e = s.data) ? void 0 : e.style,
                          children: (0, i.jsx)(a2, { creativeClassName: a3().creative }),
                      });
            });
            var a7 = a(32932),
                ie = a(8990),
                it = a(5739),
                ia = a.n(it);
            let ii = (0, s.PA)((e) => {
                    var t;
                    let { className: a, track: s } = e,
                        { formatMessage: o } = (0, n.A)(),
                        d = null == (t = s.file) ? void 0 : t.name,
                        u = (0, r.useCallback)(() => {
                            s.abortUpload();
                        }, [s]),
                        m = (0, r.useCallback)(() => {
                            s.retryUpload();
                        }, [s]),
                        p = (0, r.useMemo)(
                            () =>
                                (0, i.jsx)(tr.$, {
                                    variant: 'text',
                                    withRipple: !1,
                                    'aria-label': o({ id: 'ugc.cancel-upload' }),
                                    color: 'primary',
                                    onClick: u,
                                    'data-test-id': c.Kq.track.UGC_TRACK_CANCEL_UPLOAD_BUTTON,
                                    children: (0, i.jsx)(eT.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        type: 'text',
                                        className: ia().button,
                                        children: (0, i.jsx)(eG.A, { id: 'ugc.cancel-upload' }),
                                    }),
                                }),
                            [u, o],
                        ),
                        _ = (0, r.useMemo)(
                            () =>
                                (0, i.jsx)(tr.$, {
                                    variant: 'text',
                                    withRipple: !1,
                                    'aria-label': o({ id: 'ugc.repeat-upload' }),
                                    color: 'primary',
                                    onClick: m,
                                    'data-test-id': c.Kq.track.UGC_TRACK_RETRY_UPLOAD_BUTTON,
                                    children: (0, i.jsx)(eT.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        type: 'text',
                                        className: ia().button,
                                        children: (0, i.jsx)(eG.A, { id: 'ugc.repeat-upload' }),
                                    }),
                                }),
                            [o, m],
                        ),
                        y = (0, r.useMemo)(() => {
                            switch (s.loadingState) {
                                case a7.p.IDLE:
                                case a7.p.PREPARE:
                                case a7.p.UPLOADING:
                                    return p;
                                case a7.p.REJECT:
                                    return _;
                                default:
                                    return null;
                            }
                        }, [p, _, s.loadingState]),
                        g = (0, r.useMemo)(() => {
                            switch (s.loadingState) {
                                case a7.p.IDLE:
                                case a7.p.PREPARE:
                                case a7.p.UPLOADING:
                                    return (0, i.jsx)(eT.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: ia().status,
                                        'data-test-id': c.Kq.track.UGS_TRACK_UPLOADING_PENDING_STATUS_TEXT,
                                        children: (0, i.jsx)(eG.A, { id: 'ugc.track-uploading-pending-status' }),
                                    });
                                case a7.p.PROCESSING:
                                case a7.p.RESOLVE:
                                    return (0, i.jsx)(eT.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: ia().status,
                                        children: (0, i.jsx)(eG.A, { id: 'ugc.track-uploading-processing-status' }),
                                    });
                                case a7.p.REJECT:
                                    return (0, i.jsx)(eT.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: ia().status,
                                        'data-test-id': c.Kq.track.UGC_TRACK_UPLOADING_ERROR_STATUS_TEXT,
                                        children: (0, i.jsx)(eG.A, { id: 'ugc.track-uploading-error-status' }),
                                    });
                                default:
                                    return null;
                            }
                        }, [s.loadingState]);
                    return (0, i.jsxs)(ie.C, {
                        'aria-label': d,
                        className: (0, l.$)(ia().root, ia().card, ia().important, a),
                        'data-test-id': c.Kq.track.UGC_TRACK,
                        children: [
                            (0, i.jsx)(aO.q, { title: d, radius: 'xs', className: ia().playButton }),
                            (0, i.jsxs)('div', {
                                className: ia().meta,
                                children: [
                                    (0, i.jsx)(eT.HL, { variant: 'div', size: 'm', className: ia().title, 'data-test-id': c.Kq.track.UGC_TRACK_TITLE, children: d }),
                                    g,
                                ],
                            }),
                            (0, i.jsx)('div', { className: ia().controls, children: y }),
                        ],
                    });
                }),
                il = (0, s.PA)((e) => {
                    var t;
                    let { className: a } = e,
                        { ugcUploadCenter: l, playlist: s } = (0, S.g)();
                    if (!(null == (t = s.meta) ? void 0 : t.kind) || !s.search.isNeededToLoad) return;
                    let r = l.getUploadingTracksByPlaylistKind(s.meta.kind);
                    if (0 !== r.length) return (0, i.jsx)('div', { className: a, children: r.map((e, t) => (0, i.jsx)(ii, { track: e }, t)) });
                });
            var is = a(16948),
                ir = a.n(is);
            let io = (0, s.PA)((e) => {
                var t;
                let { playlistHeaderRef: a } = e,
                    {
                        playlist: s,
                        advertBanners: {
                            banners: { brandedEntityAxeBanner: n },
                        },
                    } = (0, S.g)(),
                    o = (0, y.Q)();
                return ((0, r.useEffect)(() => {
                    s.search.isFocused && s.search.removeFocus();
                }, [s.search.isFocused, s.search]),
                s.isLoading || !s.meta || s.isRejected)
                    ? (0, i.jsx)(ez.c, { className: ir().header })
                    : (0, i.jsxs)(e_.F, {
                          blockType: d.EntityTypes.Header,
                          blockId: d.EntityTypes.Header,
                          blockPosX: 1,
                          blockPosY: 1,
                          mainObjectId: String(null == (t = s.meta) ? void 0 : t.uuid),
                          mainObjectType: d.DomainObjectType.Playlist,
                          objectsCount: 1,
                          children: [
                              (0, i.jsx)(a6, {}),
                              (0, i.jsx)(aj, {
                                  className: (0, l.$)(ir().header, {
                                      [ir().header_branded]: o.isEnabled,
                                      [ir().header_brandedAxe]: n.isVisible && n.type === aV.h.BRANDING,
                                  }),
                                  playlist: s.meta,
                                  isDisabled: s.isDisabled,
                                  ref: a,
                              }),
                              (0, i.jsx)(aG, { autoFocus: !!(!s.items.length || s.search.isFocused) }),
                              s.isFiltersAvailable && (0, i.jsx)(a1, { playlist: s }),
                              (0, i.jsx)(il, { className: ir().content }),
                              s.shouldShowEmptyBlock && (0, i.jsx)(aD, { className: ir().emptyPlaylist }),
                          ],
                      });
            });
            var id = a(72131),
                ic = a(24586);
            let iu = (0, s.PA)((e) => {
                    var t;
                    let { user: a, playlist: l } = e,
                        { formatMessage: s } = (0, n.A)(),
                        o = (0, tu.N)().get(tc.V4),
                        d = (0, id._)(o.webHost),
                        c = (0, r.useMemo)(() => {
                            let e =
                                    l.actualLikesCount > 0
                                        ? s({ id: 'entity-names.likes-counter' }, { counter: l.actualLikesCount })
                                        : s({ id: 'entity-names.likes-counter-empty' }),
                                t = ''.concat(s({ id: 'entity-names.playlist' }), ' • ').concat(e);
                            return l.description ? ''.concat(l.description, ' • ').concat(t) : t;
                        }, [s, l.actualLikesCount, l.description]);
                    if (a.isAuthorized) return null;
                    let { href: u } = (0, tS.no)('/playlists/:playlistUuid', { params: { playlistUuid: l.uuid }, options: { host: 'https://'.concat(d) } }),
                        m = {
                            '@type': 'MusicPlaylist',
                            name: l.title,
                            url: u,
                            description: c,
                            ...(l.modified && { datePublished: l.modified }),
                            ...(l.tracksCount && { numTracks: l.tracksCount }),
                            ...((null == (t = l.owner) ? void 0 : t.name) && { author: { '@type': 'Person', name: l.owner.name } }),
                        };
                    return (0, i.jsx)(ic.S, { value: m });
                }),
                im = (0, s.PA)((e) => {
                    var t, a, s, p, _;
                    let { userId: g, kind: x, playlistUuid: f, preloadedPlaylistByUuid: T } = e,
                        {
                            user: D,
                            playlist: w,
                            settings: { isMobile: O },
                        } = (0, S.g)(),
                        { formatMessage: U } = (0, n.A)(),
                        { contentScrollRef: B, setContentScrollRef: M } = (0, k.g)(),
                        { forceUpdateRefCallback: F, offsetY: $ } = (0, u.G)(B),
                        q = (0, A.l)({ mainObjectType: d.DomainObjectType.Playlist }),
                        Q = (0, C.y)(null == w || null == (t = w.meta) ? void 0 : t.averageColor),
                        Z = (0, r.useMemo)(() => {
                            var e;
                            return w.isRewind2024Playlist && (null == (e = w.meta) ? void 0 : e.personalColor)
                                ? ((e) => {
                                      let { theme: t } = (0, K.W)(),
                                          a = t === z.S.Light ? 0.7 : 0.36;
                                      return (0, W.e)(e, 0.6, a);
                                  })(w.meta.personalColor)
                                : Q;
                        }, [w.isRewind2024Playlist, null == (a = w.meta) ? void 0 : a.personalColor, Q]),
                        { topColorStyle: ee, headerStyle: et } = (0, v.Q)(Z, $);
                    (((e) => {
                        var t;
                        let { setDeeplink: a } = null != (t = (0, G.P)()) ? t : {};
                        (0, r.useEffect)(() => {
                            if (e) {
                                let { href: t } = (0, V.u)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                                null == a || a(t);
                            }
                            return () => {
                                null == a || a(null);
                            };
                        }, [e, a]);
                    })(f),
                        (0, I.J)(w.isResolved),
                        ((e) => {
                            let { fullscreenVideoPlayer: t } = (0, S.g)(),
                                a = null == e ? void 0 : e.meta,
                                i = null == e ? void 0 : e.isLoading,
                                l = null == e ? void 0 : e.isRejected,
                                s = (0, r.useCallback)(
                                    (t) =>
                                        l
                                            ? {}
                                            : e && a && !i
                                              ? H(
                                                    ((e) => {
                                                        var t, a, i, l, s, r, n, o, d, c, u, m, p;
                                                        let _ = e.items.map((e) => ({ id: Number(e.id), albumId: Number(e.albumId) || void 0 }));
                                                        return {
                                                            owner: null == (t = e.meta) ? void 0 : t.owner,
                                                            uid: (null == (a = e.meta) ? void 0 : a.uid) || 0,
                                                            kind: (null == (i = e.meta) ? void 0 : i.kind) || 0,
                                                            title: (null == (l = e.meta) ? void 0 : l.title) || '',
                                                            description: null == (s = e.meta) ? void 0 : s.description,
                                                            revision: (null == (r = e.meta) ? void 0 : r.revision) || 0,
                                                            snapshot: 0,
                                                            trackCount: _.length,
                                                            cover: {
                                                                uri: (null == (n = e.meta) ? void 0 : n.coverUri) || '',
                                                                prefix: '',
                                                                type: E.Q.FROM_ALBUM_COVER,
                                                                custom: !1,
                                                            },
                                                            playlistUuid: (null == (o = e.meta) ? void 0 : o.uuid) || '',
                                                            available: (null == (d = e.meta) ? void 0 : d.isAvailable) || !0,
                                                            visibility: (null == (c = e.meta) ? void 0 : c.visibility) || R.L.PUBLIC,
                                                            likesCount: null == (u = e.meta) ? void 0 : u.likesCount,
                                                            modified: (null == (m = e.meta) ? void 0 : m.modified) || '',
                                                            created: '',
                                                            isBanner: !1,
                                                            isPremiere: !1,
                                                            durationMs: 0,
                                                            collective: !1,
                                                            ogImage: (null == (p = e.meta) ? void 0 : p.coverUri) || '',
                                                            tags: [],
                                                            tracks: _,
                                                        };
                                                    })(e),
                                                    t,
                                                )
                                              : void 0,
                                    [e, a, i, l],
                                );
                            (0, N.C)(t.modal.isOpened ? null : s);
                        })(w),
                        (0, P.A)(),
                        ((e) => {
                            let t = (0, Y.n)(),
                                { paywall: a } = (0, S.g)(),
                                i = t && e;
                            (0, r.useEffect)(
                                () => (
                                    i && a.openFreemiumCollectionPaywall(),
                                    () => {
                                        a.clearFreemiumCollectionBarrier();
                                    }
                                ),
                                [i, a],
                            );
                        })(w.isFavouritePlaylist),
                        (0, r.useEffect)(
                            () => (
                                q(!0),
                                () => {
                                    q(!1);
                                }
                            ),
                            [q],
                        ),
                        (0, r.useEffect)(
                            () => () => {
                                w.reset();
                            },
                            [w, f, g, x],
                        ));
                    let ea = (0, r.useMemo)(
                            () => ({
                                Header: () => (0, i.jsx)(io, { playlistHeaderRef: F }),
                                Item: w.isDragAndDropEnabled ? J : void 0,
                                Footer: () => (0, i.jsx)(eW, { playlist: w }),
                            }),
                            [F, w, w.isDragAndDropEnabled],
                        ),
                        ei = (0, r.useCallback)(
                            (e) => {
                                w.getTracksByRange(e);
                            },
                            [w],
                        ),
                        el = (0, r.useCallback)(
                            (e) => {
                                var t;
                                return null == (t = w.items[e]) ? void 0 : t.key;
                            },
                            [w.items],
                        ),
                        es = (0, r.useCallback)((e) => e, []),
                        er = (0, y.Q)();
                    if (
                        (w.isNeededToLoad &&
                            ('string' == typeof f
                                ? (0, r.use)(w.getPlaylistByUuid({ playlistUuid: f, resumeStream: !1, preloadedPlaylist: T }))
                                : 'string' == typeof g &&
                                  'string' == typeof x &&
                                  (0, r.use)(w.getPlaylistByUserIdAndKind({ userId: g, playlistKind: Number(x), resumeStream: !1 }))),
                        w.uuid &&
                            w.isResolved &&
                            w.similarEntities.isNeededToLoad &&
                            w.isSimilarEntitiesEnabled &&
                            (0, r.use)(w.getSimilarEntities({ playlistUuid: w.uuid })),
                        w.isNotFound && (0, o.notFound)(),
                        w.isRejected)
                    )
                        return (0, i.jsx)(m.SomethingWentWrong, {});
                    let en = er.isEnabled ? L.V.BRANDED_PLAYLIST : L.V.INNER;
                    return (0, i.jsxs)(b.h, {
                        tabId: w.filters.activeFilter || '',
                        tabPos: w.filters.analyticsParamsActiveFilterIndex,
                        isTabSelectedByDefault: !1,
                        children: [
                            (0, i.jsx)(h.h, {
                                scrollElement: B,
                                children: (0, i.jsxs)('div', {
                                    className: X().wrapper,
                                    style: null == (s = er.data) ? void 0 : s.style,
                                    children: [
                                        (0, i.jsx)(L.Y, { variant: en, style: et }),
                                        !er.isEnabled && (0, i.jsx)('div', { className: X().averageColorBackground, style: ee }),
                                        (0, i.jsx)(eD, {
                                            playlist: w,
                                            children: (0, i.jsx)(j.$, {
                                                context: {
                                                    listAriaLabel: U(
                                                        { id: 'entity-names.playlist-tracks-list' },
                                                        { playlistName: (null == (p = w.meta) ? void 0 : p.title) || '' },
                                                    ),
                                                },
                                                className: (0, l.$)(X().root, X().important),
                                                listClassName: X().content,
                                                customComponents: ea,
                                                computeItemKey: w.isDragAndDropEnabled ? el : es,
                                                totalCount: w.virtualListItemsCount,
                                                itemContentCallback: (e) => (0, i.jsx)(eN, { index: e }),
                                                onGetDataByRange: ei,
                                                debounceDurationInMs: 300,
                                                initialItemCount: null == (_ = w.items) ? void 0 : _.length,
                                                handleRef: M,
                                                shouldTriggerRangeChangedOn: [w.filters.activeFilter, w.virtualListItemsCount],
                                                testId: c.Xk.playlist.PLAYLIST_PAGE,
                                                isMobileLayout: O,
                                                useWindowScroll: O,
                                                withFooter: !0,
                                                withForceScroll: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            w.meta && (0, i.jsx)(iu, { user: D, playlist: w.meta }),
                        ],
                    });
                }),
                ip = (0, s.PA)((e) =>
                    (0, i.jsx)(g.A, {
                        containerId: p.LB,
                        expectedType: _.k.PLAYLIST_GRADIENT,
                        children: (0, i.jsx)(T.n, {
                            pageId: x._Q.PLAYLIST,
                            pageEntityId: e.playlistUuid,
                            children: (0, i.jsx)(f.j, { children: (0, i.jsx)(im, { ...e }) }),
                        }),
                    }),
                );
        },
        78101: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => i });
            let i = (0, a(53548).createContext)({ data: null, isEnabled: !1 });
        },
        79993: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { U: () => i }),
                (function (e) {
                    ((e.UNKNOWN = 'unknown'), (e.MALE = 'male'), (e.FEMALE = 'female'));
                })(i || (i = {})));
        },
        80527: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => r, E9: () => d, KZ: () => o, LB: () => n, RA: () => l, kz: () => s, r_: () => c, w_: () => i });
            let i = { pp: 'g', ps: 'clni', p2: 'jjwl', puid1: '', puid2: '', puid3: '' },
                l = { pp: 'g', ps: 'clni', p2: 'jjzh', puid1: '', puid2: '', puid3: '' },
                s = { p1: 'dkreo', p2: 'jozm', puid1: '', puid2: '', puid3: '' },
                r = { p1: 'dlnfl', p2: 'jpzb', puid1: '', puid2: '', puid3: '' },
                n = 'adfox_173998931315812570',
                o = 'adfox_174043316511852570',
                d = 'adfox_176504636866914259',
                c = 'adfox_176053846725924259';
        },
        80715: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => u });
            var i = a(88800),
                l = a(53548),
                s = a(92716),
                r = a(28163),
                n = a(77948),
                o = a(47934),
                d = a(41911);
            let c = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: c,
                            title: u,
                            description: m,
                            playlists: p,
                            containerClassName: _,
                            className: y,
                            headerClassName: g,
                            viewAllActionLink: v,
                            headingVariant: h,
                            shouldSendAnalyticsOnLoaded: x,
                            ...P
                        } = e,
                        A = (0, r.f)();
                    return (
                        (0, l.useEffect)(() => {
                            x && !a && A();
                        }, [a, A, x]),
                        (0, i.jsx)(o.O, {
                            isShimmerVisible: a,
                            isShimmerActive: c,
                            className: y,
                            headerClassName: g,
                            containerClassName: _,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: v,
                            headingVariant: h,
                            ...P,
                            children:
                                null == p
                                    ? void 0
                                    : p.map((e, t) =>
                                          (0, i.jsx)(
                                              n.B,
                                              {
                                                  objectType: s.DomainObjectType.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: p.length,
                                                  children: (0, i.jsx)(d.B, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, l.forwardRef)((e, t) => (0, i.jsx)(c, { forwardRef: t, ...e }));
        },
        80921: (e) => {
            e.exports = {
                root: 'EmptyPlaylistBlock_root__wpA0j',
                iconBackground: 'EmptyPlaylistBlock_iconBackground__pnUlz',
                title: 'EmptyPlaylistBlock_title__pQQLf',
                subtitle: 'EmptyPlaylistBlock_subtitle__P4Q7x',
            };
        },
        81192: (e) => {
            e.exports = {
                control: 'CarouselWithArrows_control__3uyYB',
                list: 'CarouselWithArrows_list__2f6lz',
                buttons: 'CarouselWithArrows_buttons__fW_Dp',
                root: 'CarouselWithArrows_root__RreSk',
                root_arrowLeft_hidden: 'CarouselWithArrows_root_arrowLeft_hidden__WmoMn',
                root_arrowRight_hidden: 'CarouselWithArrows_root_arrowRight_hidden__sQTGA',
                root_arrow_hidden: 'CarouselWithArrows_root_arrow_hidden__sltkz',
                control_left: 'CarouselWithArrows_control_left__GrTcO',
                control_right: 'CarouselWithArrows_control_right__Si_BV',
                root_carouselBetweenArrows: 'CarouselWithArrows_root_carouselBetweenArrows___aN_d',
                wrapper: 'CarouselWithArrows_wrapper__Kezgl',
                carousel: 'CarouselWithArrows_carousel__gm5sM',
                important: 'CarouselWithArrows_important__ZFlvq',
            };
        },
        82712: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = (e) => 'object' == typeof e && null !== e && !Array.isArray(e) && 'source' in e && 'adfox' === e.source && 'type' in e && 'payload' in e;
        },
        86535: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => l });
            var i = a(64284),
                l = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(i.U.RUP, '_').concat(i.U.MAIN, '-').concat(i.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(i.U.DISCOGRAPHY, '_').concat(i.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(i.U.ALBUMS, '_').concat(i.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(i.U.COMPILATIONS, '_').concat(i.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(i.U.ARTISTS, '_').concat(i.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(i.U.CLIPS, '_').concat(i.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(i.U.DISCOVERY, '_').concat(i.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(i.U.SEARCH, '_').concat(i.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR, '_').concat(i.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        88894: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => u });
            var i = a(88800),
                l = a(65724),
                s = a(84961),
                r = a(53548),
                n = a(19994),
                o = a(72288),
                d = a(16472),
                c = a.n(d);
            let u = (0, s.PA)((e) => {
                let { className: t, coverRadius: a = 'm', isActive: s } = e,
                    {
                        settings: { isMobile: d },
                    } = (0, o.g)(),
                    u = (0, r.useMemo)(
                        () =>
                            d
                                ? (0, i.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, i.jsx)(n.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(n.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(n.W, { className: c().button, radius: 'round', isActive: s }),
                                      ],
                                  })
                                : (0, i.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, i.jsx)(n.W, { className: c().desktopPlayButton, isActive: s }),
                                          (0, i.jsx)(n.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(n.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(n.W, { className: c().button, radius: 'round', isActive: s }),
                                      ],
                                  }),
                        [s, d],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(c().root, t),
                    children: [
                        (0, i.jsx)(n.W, { className: c().cover, radius: a, isActive: s }),
                        (0, i.jsxs)('div', {
                            className: c().content,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: c().info,
                                    children: [
                                        (0, i.jsx)(n.W, { className: c().entityName, radius: 's', isActive: s }),
                                        (0, i.jsx)(n.W, { className: c().title, radius: 'xl', isActive: s }),
                                        (0, i.jsx)(n.W, { className: c().meta, radius: 's', isActive: s }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    ],
                });
            });
        },
        89021: (e) => {
            e.exports = { carousel: 'PlaylistFilters_carousel__pO6nw', carousel_noSmooth: 'PlaylistFilters_carousel_noSmooth__cqaBs' };
        },
        89068: (e) => {
            e.exports = {
                root: 'PlaylistPage_root__ajyaP',
                important: 'PlaylistPage_important__1Xpl5',
                wrapper: 'PlaylistPage_wrapper__XLjbD',
                averageColorBackground: 'PlaylistPage_averageColorBackground__3wEkw',
                content: 'PlaylistPage_content__T7zOm',
                brandedPlaylistBannerCreative: 'PlaylistPage_brandedPlaylistBannerCreative__fr6ZP',
            };
        },
        91370: (e) => {
            e.exports = {
                root: 'PlaylistPageDnDItemWrapper_root__eBm1E',
                inner: 'PlaylistPageDnDItemWrapper_inner__UXQZf',
                dragging: 'PlaylistPageDnDItemWrapper_dragging__Pl94m',
                dragOverlay: 'PlaylistPageDnDItemWrapper_dragOverlay__tWQut',
            };
        },
        91908: (e) => {
            e.exports = {
                root: 'PageHeaderPlaylistCover_root__Vdn75',
                coverButton: 'PageHeaderPlaylistCover_coverButton__dw0rj',
                root_hoverable: 'PageHeaderPlaylistCover_root_hoverable__ZeqpX',
                coverImage: 'PageHeaderPlaylistCover_coverImage__OC58K',
                backCoverColor: 'PageHeaderPlaylistCover_backCoverColor__7z3dk',
                button: 'PageHeaderPlaylistCover_button__vCYgD',
                fileUploadContainer: 'PageHeaderPlaylistCover_fileUploadContainer___JnqP',
                fileUploadContainer_hovered: 'PageHeaderPlaylistCover_fileUploadContainer_hovered__RtD_X',
                buttonContainer: 'PageHeaderPlaylistCover_buttonContainer__OkEaT',
                buttonContainer_withCursorPointer: 'PageHeaderPlaylistCover_buttonContainer_withCursorPointer__pnzha',
                formFile: 'PageHeaderPlaylistCover_formFile__1xnry',
            };
        },
        92847: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => i });
            var i = (function (e) {
                return ((e.PLAYLIST_GRADIENT = 'branded_playlist_gradient'), (e.AXE_GRADIENT = 'branded_axe_gradient'), e);
            })({});
        },
        94058: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => f });
            var i = a(88800),
                l = a(65724),
                s = a(14231),
                r = a(84961),
                n = a(53548),
                o = a.t(n, 2),
                d = a(17392),
                c = a(88021),
                u = {
                    810: (e) => {
                        e.exports = o;
                    },
                },
                m = {},
                p = {};
            ((() => {
                (Object.defineProperty(p, '__esModule', { value: !0 }), (p.useForwardRef = void 0));
                let e = (function e(t) {
                    var a = m[t];
                    if (void 0 !== a) return a.exports;
                    var i = (m[t] = { exports: {} });
                    return (u[t](i, i.exports, e), i.exports);
                })(810);
                p.useForwardRef = function (t, a) {
                    let i = (0, e.useRef)(a);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(i.current) : (t.current = i.current));
                        }, [t]),
                        i
                    );
                };
            })(),
                p.__esModule);
            var _ = p.useForwardRef,
                y = a(32353),
                g = a(72288),
                v = a(31764),
                h = a(81192),
                x = a.n(h);
            let P = { [y.u.Desktop]: { start: 40, end: 20 }, [y.u.Mobile]: { start: 40, end: 40 } },
                A = (0, r.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: a,
                            forwardRef: r,
                            scrollPadding: o,
                            isCarouselBetweenArrows: u = !1,
                            controlsWrapperClassName: m,
                            buttonSize: p,
                            buttonVariant: h,
                            withSecondaryColor: A,
                        } = e,
                        {
                            settings: { isMobile: f },
                        } = (0, g.g)(),
                        T = _(r, null),
                        { shouldBackwardButtonBeDisabled: b, shouldForwardButtonBeDisabled: C, shouldHideControls: k } = (0, c.Y)(T),
                        [I, S] = (0, n.useMemo)(() => {
                            let e = (0, s.A)(P, o);
                            return [f ? e[y.u.Mobile].start : e[y.u.Desktop].start, f ? e[y.u.Mobile].end : e[y.u.Desktop].end];
                        }, [o, f]),
                        L = (0, n.useCallback)(
                            (e) => {
                                var t;
                                let a = null == (t = T.current) ? void 0 : t.children[e],
                                    { current: i } = T;
                                if (!i || !(a instanceof HTMLElement)) return;
                                if (a.offsetLeft - i.scrollLeft < I) {
                                    i.scrollLeft = a.offsetLeft - I;
                                    return;
                                }
                                let l = i.scrollLeft + i.clientWidth - a.offsetLeft - a.offsetWidth;
                                l < S && (i.scrollLeft -= l - S);
                            },
                            [T, S, I],
                        ),
                        j = (0, n.useCallback)(
                            (e) => {
                                var t, i;
                                (L(e), null == (t = (i = a.props).onTabChange) || t.call(i, e));
                            },
                            [a, L],
                        ),
                        N = (0, n.cloneElement)(a, { forwardRef: T, className: (0, l.$)(x().wrapper, a.props.className, x().carousel, x().important), onTabChange: j });
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(
                            x().root,
                            {
                                [x().root_carouselBetweenArrows]: u,
                                [x().root_arrowLeft_hidden]: b,
                                [x().root_arrowRight_hidden]: C,
                                [x().root_arrow_hidden]: b && C && k,
                            },
                            t,
                        ),
                        'data-test-id': d.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, i.jsx)('div', { className: x().list, children: N }),
                            !f &&
                                (0, i.jsx)(v.X, {
                                    className: (0, l.$)(x().buttons, m),
                                    carouselRef: T,
                                    backwardControlClassName: x().control,
                                    forwardControlClassName: x().control,
                                    withSecondaryColor: A,
                                    buttonSize: p,
                                    buttonVariant: h,
                                }),
                        ],
                    });
                }),
                f = (0, n.forwardRef)((e, t) => (0, i.jsx)(A, { forwardRef: t, ...e }));
        },
        95850: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => p });
            var i = a(88800),
                l = a(84961),
                s = a(53548),
                r = a(58390),
                n = a(38147),
                o = a(49518),
                d = a(65523),
                c = a(72288),
                u = a(8655),
                m = a(69704);
            let p = (0, l.PA)((e) => {
                let { className: t, ownerId: a, containerId: l, params: p, onLoad: _, onRender: y, onNoAds: g, onError: v } = e,
                    { user: h } = (0, c.g)(),
                    x = (0, r.usePathname)(),
                    P = (0, r.useSearchParams)(),
                    { create: A, destroy: f, initialize: T } = (0, o.s)(),
                    { theme: b } = (0, m.W)(),
                    C = (0, d.U)(),
                    k = (0, s.useRef)(!0),
                    I = { ...p };
                return (
                    (I.puid1 = h.advertRole),
                    (0, s.useEffect)(() => {
                        A({
                            ownerId: a,
                            containerId: l,
                            params: I,
                            insertionCodeParams: { darkTheme: b === u.S.Dark, additionalClasses: b ? [b] : [] },
                            onClose: () => {
                                C.log('[AdvertBanner] Close');
                            },
                            onLoad: (e) => {
                                if ((C.log('[AdvertBanner] Load', { data: e }), void 0 === e)) {
                                    null == _ || _(n.h.EMPTY);
                                    return;
                                }
                                if ((null == e ? void 0 : e.bundleName) === 'banner.direct') {
                                    null == _ || _(n.h.DIRECT);
                                    return;
                                }
                                null == _ || _(n.h.CREATIVE);
                            },
                            onRender: () => {
                                (C.log('[AdvertBanner] Render'), null == y || y());
                            },
                            onStub: () => {
                                (C.log('[AdvertBanner] Stub'), null == g || g());
                            },
                            onError: (e) => {
                                (C.log('[AdvertBanner] Error', { error: e }), null == v || v());
                            },
                        });
                    }, []),
                    (0, s.useEffect)(() => {
                        if (k.current) {
                            k.current = !1;
                            return;
                        }
                        (C.log('[AdvertBanner] Destroy'), f(l), C.log('[AdvertBanner] Initialize'), T(l));
                    }, [x, P, l, f, T, C]),
                    (0, i.jsx)('div', { id: l, className: t, tabIndex: -1, 'aria-hidden': !0 })
                );
            });
        },
        96827: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylistAddition_playButtonCell__Ocnhq',
                controls: 'TrackPlaylistAddition_controls__S346Y',
                button: 'TrackPlaylistAddition_button__fsY9k',
            };
        },
        96856: (e) => {
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
        98158: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => p });
            var i = a(88800),
                l = a(29993),
                s = a(7123),
                r = a(79546),
                n = a(87528),
                o = a(29595),
                d = a(74965),
                c = a(9630),
                u = a(72288);
            let m = (e) => {
                var t;
                return null == (t = e.data) ? void 0 : t.entityId;
            };
            function p(e, t, a, p) {
                let _ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : m,
                    { notify: y } = (0, d.l)(),
                    { fullscreenPlayer: g } = (0, u.g)(),
                    v = (0, c.e)();
                return (0, l.c)(() => {
                    let l = e.reduce((e, t) => {
                        let a = _(t);
                        return (a && e.push({ type: s.z4.Unloaded, meta: { id: a } }), e);
                    }, []);
                    if (!l.length) return;
                    switch (t) {
                        case r.N.LAST:
                            null == v || v.injectLast({ entitiesData: l, sourceContextData: null != a ? a : void 0 });
                            break;
                        case r.N.NEXT:
                            null == v || v.injectNext({ entitiesData: l, sourceContextData: null != a ? a : void 0 });
                    }
                    let d = g.modal.isOpened ? o.u.FULLSCREEN_INFO : o.u.INFO;
                    y((0, i.jsx)(n.l, { entityVariant: p.entityVariant, variant: t, entityTitle: p.entityTitle, coverUri: p.coverUri }), { containerId: d });
                });
            }
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
