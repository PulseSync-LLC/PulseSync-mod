(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9719],
    {
        777: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => x });
            var a = i(88800),
                s = i(84961),
                r = i(2058),
                l = i(88969),
                o = i(17392),
                n = i(29993),
                c = i(52300),
                d = i(19934),
                m = i(38769),
                _ = i(4370),
                u = i(95210),
                p = i(72288),
                v = i(98953),
                b = i(18130),
                C = i(93091),
                h = i(74064);
            let x = (0, s.PA)((e) => {
                let { onOpenChange: t, open: i, placement: s, isFullscreenMobile: x = !1, icon: A, size: j, clip: T, ...N } = e,
                    { currentClipInfo: I, settings: S, user: f } = (0, p.g)(),
                    { formatMessage: L } = (0, r.A)(),
                    { shareLink: g, pathname: y } = (0, b.b)(_.Z.video.href, { query: { ids: String(T.clipId) } }),
                    k = x || S.isMobile;
                (0, u.N)(i);
                let R = (0, m.K)(T),
                    E = (0, n.c)(() => {
                        (I.setClipId(T.clipId), I.modal.open());
                    }),
                    P = { variant: v.Y.CLIP, id: T.clipId, title: T.title, path: y };
                return (0, a.jsxs)(d.W1, {
                    isMobile: k,
                    placement: s,
                    offsetOptions: -10,
                    open: i,
                    onOpenChange: t,
                    icon: A,
                    size: j,
                    containerDataTestId: o.Kq.clip.CLIP_CONTEXT_MENU,
                    ariaLabel: L({ id: 'interface-actions.context-menu' }),
                    variant: 'text',
                    ...N,
                    children: [
                        (0, a.jsx)(C.T, { onClick: R, isLiked: T.isLiked, disabled: !f.isAuthorized }),
                        (0, a.jsx)(h.H, { shareLink: g, entityMeta: P }),
                        (0, a.jsx)(d.Dr, {
                            onClick: E,
                            icon: (0, a.jsx)(c.I, { variant: 'info', size: 'xxs' }),
                            'data-test-id': o.Kq.clip.CLIP_CONTEXT_MENU_ABOUT_TRACK_BUTTON,
                            children: (0, a.jsx)(l.A, { id: 'track-modal.clip-title' }),
                        }),
                    ],
                });
            });
        },
        1173: (e) => {
            e.exports = {
                titleShimmer: 'WizardTextShimmer_titleShimmer__g__ye',
                titleTextShimmer: 'WizardTextShimmer_titleTextShimmer__ThHNk',
                textShimmer: 'WizardTextShimmer_textShimmer__QokKt',
                descriptionShimmer: 'WizardTextShimmer_descriptionShimmer__Z9daY',
            };
        },
        1249: (e) => {
            e.exports = {
                root: 'CollectionArtistsAndTopWithItems_root__tR4BR',
                controls: 'CollectionArtistsAndTopWithItems_controls__Z_VQb',
                itemContainer: 'CollectionArtistsAndTopWithItems_itemContainer__xF00m',
                actionItem: 'CollectionArtistsAndTopWithItems_actionItem__7xPUf',
                important: 'CollectionArtistsAndTopWithItems_important__TEa6m',
                item: 'CollectionArtistsAndTopWithItems_item__fPqL0',
            };
        },
        1698: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            var a = i(88800),
                s = i(37770);
            let r = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: r,
                    centered: l,
                    withInfo: o,
                    count: n = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': m,
                    withSubcover: _,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, a.jsx)(
                        s.V,
                        { isActive: t, linesCount: d, className: i, round: r, centered: l, withInfo: o, withSubcover: _, 'aria-label': m, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        2520: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => l });
            var a = i(53548),
                s = i(18593),
                r = i(93039);
            let l = (e) => {
                let { playlistId: t, filter: i } = e;
                return (0, a.useMemo)(() => (t ? (0, r.t)({ contextType: s.K.Playlist, contextId: t, filter: i }) : null), [t, i]);
            };
        },
        3150: (e) => {
            e.exports = {
                root: 'VibeRoomCardShimmer_root__lG3e3',
                root_mobile: 'VibeRoomCardShimmer_root_mobile__A462e',
                coverContainer: 'VibeRoomCardShimmer_coverContainer__dBb9G',
                coverContainer_mobile: 'VibeRoomCardShimmer_coverContainer_mobile__fcRcH',
                avatarShimmer: 'VibeRoomCardShimmer_avatarShimmer__ZHbcX',
                infoContainer: 'VibeRoomCardShimmer_infoContainer__WxMcd',
                infoContainer_mobile: 'VibeRoomCardShimmer_infoContainer_mobile__DJYX6',
                title: 'VibeRoomCardShimmer_title__X_5k3',
                title_mobile: 'VibeRoomCardShimmer_title_mobile___I56b',
            };
        },
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
        4063: (e) => {
            e.exports = {
                root: 'Wizard_root__aW2c2',
                title: 'Wizard_title__L8ktt',
                description: 'Wizard_description__RFf2U',
                button: 'Wizard_button__lr8pa',
                buttonIcon: 'Wizard_buttonIcon__eOX3P',
                imagesWrapper: 'Wizard_imagesWrapper__tyqWr',
                images: 'Wizard_images__5rxec',
                paper: 'Wizard_paper__ijUgq',
                image: 'Wizard_image__k9AXl',
            };
        },
        4501: (e) => {
            e.exports = { station: 'MetroStation_station__mCvqj', stationColors: 'MetroStation_stationColors__MgJFV', colorSpan: 'MetroStation_colorSpan__cFHsy' };
        },
        4683: (e) => {
            e.exports = {
                playButtonCell: 'TrackChart_playButtonCell__cvY7u',
                controlsBarCell: 'TrackChart_controlsBarCell__Xd5pn',
                chartCell: 'TrackChart_chartCell__33_al',
            };
        },
        6269: (e) => {
            e.exports = { filters: 'PlaylistWithTracksAndFilters_filters__koC2A', shimmer: 'PlaylistWithTracksAndFilters_shimmer__vrNPe' };
        },
        7857: (e) => {
            e.exports = { root: 'ClipsCarousel_root__r1mGp', controls: 'ClipsCarousel_controls__nZB6r' };
        },
        8299: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => s });
            var a = i(58217);
            let s = (e) => {
                let { clip: t, callback: i, disclaimerRejectHandler: s } = e;
                return (0, a.l)({ entity: t, callback: i, onReject: s, modalBehavior: { closeOnOutside: !1, closeOnEscape: !1 }, preventDefaultWhenSafe: !0 });
            };
        },
        9319: (e) => {
            e.exports = {
                root: 'EditorialVibesAgent_root__DWv1O',
                controls: 'EditorialVibesAgent_controls__8zmg0',
                item: 'EditorialVibesAgent_item__D8lQA',
                important: 'EditorialVibesAgent_important__xnrnN',
            };
        },
        9492: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => p });
            var a = i(88800),
                s = i(65724),
                r = i(53548),
                l = i(2058),
                o = i(88969),
                n = i(96817),
                c = i(52300),
                d = i(29504),
                m = i(59304),
                _ = i(4044),
                u = i.n(_);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    _ = (0, r.useRef)(null),
                    { formatMessage: p } = (0, l.A)();
                (0, r.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let v = (0, r.useMemo)(
                    () =>
                        (0, a.jsxs)('div', {
                            className: u().message,
                            children: [
                                (0, a.jsx)(d.HL, {
                                    className: u().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, a.jsx)(o.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, a.jsx)(n.$, {
                                    ref: _,
                                    className: u().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, a.jsx)(c.I, { variant: 'reset', size: 'xxs', className: u().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, a.jsx)(m.$, { className: (0, s.$)(u().root, u().important), message: v, closeToast: i });
            };
        },
        9523: (e) => {
            e.exports = { cover: 'FamiliarYou_cover__nY4e8', shimmerCover: 'FamiliarYou_shimmerCover__HFgkx' };
        },
        9955: (e) => {
            e.exports = {
                root: 'ArtistPopularTracksAndReleases_root__rN5Wk',
                container: 'ArtistPopularTracksAndReleases_container__EQIVk',
                popularTracks: 'ArtistPopularTracksAndReleases_popularTracks__HEZ73',
                popularTracks_withReleaseBlock: 'ArtistPopularTracksAndReleases_popularTracks_withReleaseBlock__WwiJr',
                release: 'ArtistPopularTracksAndReleases_release__9NDdR',
                releaseCard: 'ArtistPopularTracksAndReleases_releaseCard__uHtao',
            };
        },
        10270: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => c });
            var a = i(56949),
                s = i(53548),
                r = i(29993),
                l = i(44230),
                o = i(72288);
            let n = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: i, gap: c, containerRef: d, overscan: m = 2 } = e,
                        {
                            settings: { isMobile: _ },
                        } = (0, o.g)(),
                        { contentScrollRef: u } = (0, l.g)(),
                        p = (0, s.useRef)(new Map()),
                        v = (0, s.useRef)(void 0),
                        b = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = p.current.get(String(e));
                                return null != t ? t : i(e);
                            },
                            overscan: m,
                            initialRect: n,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, i) => {
                                if (!t) return 0;
                                let a = t.getBoundingClientRect().top;
                                return e && 1 ? a + window.scrollY : !e && i ? a + i.scrollTop : 0;
                            })(_, d, u),
                        },
                        C = (0, a.XW)(b),
                        h = (0, a.Te)({ ...b, getScrollElement: () => u, initialOffset: null == u ? void 0 : u.scrollTop }),
                        x = _ ? C : h,
                        A = (0, r.c)(() => {
                            x.measure();
                        });
                    return (
                        (0, s.useEffect)(() => {
                            v.current ||
                                (v.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let i = e.target.getAttribute('data-index');
                                        if (e.target && i) {
                                            let a = e.contentRect.height;
                                            a && a !== p.current.get(i) && (p.current.set(i, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && A());
                                }));
                        }, [A]),
                        { virtualizer: x, resizeObserver: v.current }
                    );
                };
        },
        10465: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            let a = () => ({ timeStyle: 'short' });
        },
        10732: (e) => {
            e.exports = {
                container: 'SkeletonBlock_container__9IxUi',
                important: 'SkeletonBlock_important__faY0E',
                container_withContentVisibility: 'SkeletonBlock_container_withContentVisibility__QzL5d',
                headerContainer: 'SkeletonBlock_headerContainer__fl8EX',
                tracksContainer: 'SkeletonBlock_tracksContainer__uF8Tg',
            };
        },
        11510: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => n });
            var a = i(53548),
                s = i(96820),
                r = i(29993),
                l = i(71978);
            let o = [s.DT.IDLE, s.DT.DOWNLOADED],
                n = (e) => {
                    var t;
                    let i = (0, l.j)(),
                        n = (0, r.c)((t) => {
                            let { state: i } = t;
                            o.includes(i.loadingState) && e();
                        });
                    (0, a.useEffect)(() => {
                        var t, a;
                        return (
                            null == (t = i.store) || t.tracks.events.on(s.je.STATE_CHANGED, e),
                            null == (a = i.store) || a.tracks.events.on(s.je.ENTITY_CHANGED, n),
                            () => {
                                var t, a;
                                (null == (t = i.store) || t.tracks.events.off(s.je.STATE_CHANGED, e),
                                    null == (a = i.store) || a.tracks.events.off(s.je.ENTITY_CHANGED, n));
                            }
                        );
                    }, [e, n, null == (t = i.store) ? void 0 : t.tracks.events]);
                };
        },
        12533: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => a });
            let a = (e, t) => {
                let [i, a] = e.split('?'),
                    s = new URLSearchParams(a || '');
                for (let [e, i] of new URLSearchParams(t).entries()) s.set(e, i);
                let r = s.toString();
                return ''.concat(i).concat(r ? '?'.concat(r) : '');
            };
        },
        12739: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => r });
            var a = i(82212);
            let s = [a.t.ARTIST_POPULAR_TRACKS_AND_RELEASES, a.t.FAMILIAR_YOU_AND_ARTIST_PICK],
                r = (e) => s.includes(e.type);
        },
        12816: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => r, x: () => s });
            var a = i(98427);
            let s = [
                    a.b.HOME,
                    a.b.SIDEBAR,
                    a.b.OWN_COLLECTION,
                    a.b.LANDING,
                    a.b.OWN_ARTISTS,
                    a.b.ARTIST,
                    a.b.ARTIST_CONCERTS,
                    a.b.NON_MUSIC,
                    a.b.PLAYLIST,
                    a.b.SEARCH,
                    a.b.VIDEO_PLAYER,
                    a.b.LABEL,
                    a.b.CONCERTS,
                    a.b.CONCERT,
                    a.b.CONCERT_LOCATION_SELECTOR,
                    a.b.ALBUM,
                    a.b.PLAYLIST,
                    a.b.SLIDES_SCREEN,
                    a.b.PROMOLANDING_ALBUM,
                    a.b.WAVE_LANDING_SCREEN,
                    a.b.FACT_SCREEN,
                    a.b.LUMEN_FACT_SCREEN,
                    a.b.LUMEN_AWAKENING_SCREEN,
                    a.b.COLLECTION_VIBE_ROOMS,
                    a.b.MULTIVIBE_SENDING_INVITATION_SCREEN,
                    a.b.MULTIVIBE_ACTION_SCREEN,
                    a.b.MULTIVIBE_UNIFIED_SCREEN,
                ],
                r = [a.b.HOME, a.b.LANDING, a.b.NON_MUSIC, a.b.OWN_COLLECTION, a.b.SEARCH, a.b.ARTIST, a.b.CONCERTS, a.b.CONCERT, a.b.ALBUM, a.b.PLAYLIST];
        },
        12946: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { l: () => a }),
                (function (e) {
                    ((e.PLAYLIST_LIKED_TAB = 'liked_playlist_tab'), (e.PLAYLIST_CREATED_TAB = 'created_playlist_tab'));
                })(a || (a = {})));
        },
        13060: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => d });
            var a = i(88800),
                s = i(65724),
                r = i(17392),
                l = i(52300),
                o = i(29504),
                n = i(19872),
                c = i.n(n);
            let d = (e) => {
                let { title: t, className: i, titleClassName: n, valuePercent: d } = e;
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(c().root, i),
                    children: [
                        (0, a.jsx)(l.I, { 'aria-hidden': !0, className: c().icon, variant: 'plus' }),
                        (0, a.jsx)(o.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            className: (0, s.$)(c().title, n),
                            'data-test-id': r.OA.concert.CONCERT_CARD_CASHBACK,
                            children: d ? ''.concat(d, '%') : t,
                        }),
                    ],
                });
            };
        },
        13317: (e) => {
            e.exports = { root: 'CollectionClipsEmpty_root__LwgZS', text: 'CollectionClipsEmpty_text__cZfLW' };
        },
        14229: (e) => {
            e.exports = {
                root: 'Concert_root__INQJc',
                cover: 'Concert_cover__POyDO',
                index: 'Concert_index__cPRuN',
                meta: 'Concert_meta__s_lsH',
                textContainer: 'Concert_textContainer__50dZP',
                date: 'Concert_date__3xwWB',
                info: 'Concert_info__viObm',
                concertTitle: 'Concert_concertTitle__kngHo',
                description: 'Concert_description__JTZtZ',
                descriptionContainer: 'Concert_descriptionContainer__cPF3d',
                cashback: 'Concert_cashback__b7feO',
                title: 'Concert_title__tX2Mj',
            };
        },
        14668: (e, t, i) => {
            'use strict';
            ((t.__ = function (e, t) {
                let i = (0, a.makeMetaParams)(1),
                    s = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: i };
                e.trackEvent('ArtistConcerts.Opened', s);
            }),
                (t.pe = function (e, t) {
                    let i = (0, a.makeMetaParams)(1),
                        s = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: i };
                    e.trackEvent('ArtistConcerts.Closed', s);
                }),
                (t.Z4 = function (e, t) {
                    let { objectPos: i = 1 } = t,
                        s = (0, a.makeMetaParams)(1),
                        r = { ...t, objectPos: i, pageId: 'artist_concerts_screen', pageType: 'listing', objectType: 'concert', _meta: s };
                    e.trackEvent('ArtistConcerts.Concert.Showed', r);
                }),
                (t.mh = function (e, t) {
                    let { objectPos: i = 1 } = t,
                        s = (0, a.makeMetaParams)(1),
                        r = {
                            ...t,
                            objectPos: i,
                            pageId: 'artist_concerts_screen',
                            pageType: 'listing',
                            objectType: 'concert',
                            from: 'artist_concerts_screen',
                            _meta: s,
                        };
                    e.trackEvent('ArtistConcerts.Concert.Navigated', r);
                }));
            let a = i(59203);
        },
        14814: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => A });
            var a = i(88800),
                s = i(65724),
                r = i(84961),
                l = i(53548),
                o = i(49784),
                n = i(37523),
                c = i(29993),
                d = i(79070),
                m = i(86535),
                _ = i(72288),
                u = i(97956),
                p = i(12739),
                v = i(17342),
                b = i(10732),
                C = i.n(b),
                h = i(25176);
            let x = (0, r.PA)((e) => {
                    let { landing: t, block: i, isIntersecting: r, forwardRef: n, onLoad: m, className: b, containerClassName: x, ...A } = e,
                        {
                            isNeededToLoad: j,
                            isLoading: T,
                            isLoaded: N,
                            isRejected: I,
                            isShimmerVisible: S,
                            isShimmerActive: f,
                            isVisible: L,
                            id: g,
                            type: y,
                            meta: k,
                            data: R,
                            setOutdated: E,
                            setIsNeededToLoad: P,
                        } = i;
                    if ((0, p.Q)(i)) return null;
                    let w = h.D[i.type];
                    (0, o.W)({ enabled: N && t.isResolved });
                    let { settings: O, experiments: M } = (0, _.g)(),
                        D = !M.checkExperiment(u.z.WebNextVirtualSkeleton, 'on') && O.browserInfo && !O.browserInfo.isSafari;
                    (0, l.useEffect)(() => {
                        (r || !L) && j && (0, v.v)(k) && t.getBlock(i);
                    }, [i, r, j, L, t, k]);
                    let B = (0, c.c)(() => {
                        t.getBlock(i);
                    });
                    (0, l.useEffect)(() => {
                        (N || I) && (null == m || m());
                    }, [N, I, m]);
                    let V = (0, d.L)(() => {
                        if (((e) => !!(e && 'object' == typeof e && 'current' in e))(n)) {
                            var e;
                            return null == (e = n.current) ? void 0 : e.clientHeight;
                        }
                        return 0;
                    });
                    return L
                        ? (0, a.jsx)(
                              w,
                              {
                                  setIsNeededToLoad: P,
                                  setOutdated: E,
                                  isLoaded: N,
                                  isLoading: T,
                                  isShimmerVisible: S,
                                  isShimmerActive: f,
                                  isRejected: I,
                                  tracksContainerClassName: C().tracksContainer,
                                  containerClassName: (0, s.$)(C().container, C().important, x),
                                  className: (0, s.$)({ [C().container_withContentVisibility]: D && V }, b),
                                  headerClassName: C().headerContainer,
                                  meta: k,
                                  data: R,
                                  type: y,
                                  ref: n,
                                  headingVariant: 'h2',
                                  'data-intersection-property-id': i.id,
                                  'data-test-id': i.type,
                                  ...A,
                                  onRefetch: B,
                              },
                              g,
                          )
                        : null;
                }),
                A = (0, r.PA)((e) => {
                    let { ...t } = e;
                    return (0, a.jsx)(n.F, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(m.h.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, a.jsx)(x, { ...t }),
                    });
                });
        },
        16559: (e) => {
            e.exports = {
                root: 'NewReleases_root__4ONiw',
                controls: 'NewReleases_controls__zlJZF',
                shimmerImage: 'NewReleases_shimmerImage__8IEd_',
                shimmerCard: 'NewReleases_shimmerCard__S1gfL',
                item: 'NewReleases_item__Gv0iR',
                important: 'NewReleases_important__qkt9x',
            };
        },
        16661: (e) => {
            e.exports = {
                root: 'ConcertCard_root__fcR9B',
                root_withConcertsRedesign: 'ConcertCard_root_withConcertsRedesign__0g8bs',
                ripple: 'ConcertCard_ripple__PW4xI',
                date: 'ConcertCard_date__ECoa3',
                dateWithMask: 'ConcertCard_dateWithMask__si35m',
                important: 'ConcertCard_important__dQYxN',
                dateColor: 'ConcertCard_dateColor__muPRD',
                button: 'ConcertCard_button__GQxNL',
            };
        },
        17342: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            let a = (e) => !!(e && 'object' == typeof e && 'source' in e);
        },
        17944: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            var a = (function (e) {
                return ((e.LIKED_ALBUMS = 'liked'), (e.UPCOMING_ALBUMS = 'upcoming'), e);
            })({});
        },
        18344: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { R: () => a }),
                (function (e) {
                    ((e.RADIAL = 'RADIAL'), (e.STACK = 'STACK'));
                })(a || (a = {})));
        },
        19191: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => p });
            var a = i(53548),
                s = i(87999),
                r = i(24114),
                l = i(14668),
                o = i(84423),
                n = i(89846),
                c = i(64543),
                d = i(80643),
                m = i(63582),
                _ = i(12816),
                u = i(98427);
            let p = (0, m.n)({ event: 'Artist.Concerts.Navigated', kind: 'hook', requiredScopes: ['screen', 'object'] }, function (e) {
                var t, i;
                let { artistId: m, viewUuid: p, objectPos: v } = e,
                    b = null == (t = (0, o.s)()) ? void 0 : t.evgenInstance,
                    { hash: C } = (0, n.g)(),
                    { screen: h, block: x, object: A } = (0, c.j)(),
                    j =
                        null != (i = null == h ? void 0 : h.pageIdForFrom)
                            ? i
                            : (null == h ? void 0 : h.pageId) === s.AppScreen.SearchScreen
                              ? u.b.SEARCH
                              : null == h
                                ? void 0
                                : h.pageId,
                    T = null == x ? void 0 : x.objectsCount,
                    N = null == A ? void 0 : A.objectType,
                    I = null == A ? void 0 : A.objectId,
                    S = null == A ? void 0 : A.objectPosX,
                    f = null == A ? void 0 : A.objectPosY,
                    L = (0, d.S)(),
                    g = (0, a.useCallback)(
                        (e) => {
                            if (
                                !b ||
                                void 0 === C ||
                                'string' != typeof m ||
                                void 0 === T ||
                                (N !== s.DomainObjectType.Concert && N !== s.DomainObjectType.Shortcut) ||
                                void 0 === I ||
                                void 0 === S ||
                                void 0 === f ||
                                void 0 === e
                            )
                                return;
                            let t = {
                                hash: C,
                                artistId: m,
                                objectsCount: T,
                                objectType: N === s.DomainObjectType.Concert ? s.ConcertBlockItemType.Concert : s.ConcertBlockItemType.Shortcut,
                                objectId: I,
                                objectPosX: S,
                                objectPosY: f,
                                to: e,
                            };
                            (0, r.U6)(b, t);
                        },
                        [b, m, C, I, S, f, N, T],
                    ),
                    y = (0, a.useCallback)(
                        (e) => {
                            if (
                                !b ||
                                void 0 === C ||
                                'string' != typeof m ||
                                !p ||
                                void 0 === I ||
                                void 0 === v ||
                                !Number.isFinite(v) ||
                                (e !== s.FromArtistScreenTo.ConcertScreen && e !== s.FromArtistScreenTo.ConcertPurchaseScreen)
                            )
                                return;
                            let t = {
                                hash: C,
                                artistId: m,
                                viewUuid: p,
                                objectId: I,
                                objectPos: v,
                                to:
                                    e === s.FromArtistScreenTo.ConcertScreen
                                        ? s.FromArtistConcertsScreenTo.ConcertScreen
                                        : s.FromArtistConcertsScreenTo.ConcertPurchaseScreen,
                            };
                            (0, l.mh)(b, t);
                        },
                        [b, m, C, I, v, p],
                    );
                return (0, a.useCallback)(
                    (e) => {
                        if (b && j && _.x.includes(j))
                            switch (j) {
                                case u.b.ARTIST:
                                    g(e);
                                    break;
                                case u.b.ARTIST_CONCERTS:
                                    y(e);
                                    break;
                                case u.b.SEARCH:
                                    L({ to: s.AppScreen.ConcertPurchaseScreen });
                            }
                    },
                    [b, j, L, y, g],
                );
            });
        },
        19872: (e) => {
            e.exports = { root: 'CashbackBadge_root__hStMF', icon: 'CashbackBadge_icon__RJ6qe', title: 'CashbackBadge_title__neGD7' };
        },
        19981: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => a });
            let a = (e, t) => {
                let i = e / 60;
                return i <= 45 ? t({ id: 'time.minutes-left' }, { minutes: Math.round(i) }) : t({ id: 'time.hours' }, { hours: Math.round((i / 60) * 2) / 2 });
            };
        },
        20585: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => a });
            var a = (function (e) {
                return ((e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e);
            })({});
        },
        21971: (e) => {
            e.exports = { root: 'VirtualizedSkeletonBlock_root__njUFa' };
        },
        22989: (e) => {
            e.exports = { root: 'ConcertDate_root__xnVG1', month: 'ConcertDate_month__ti5Na', day: 'ConcertDate_day__YibpP', weekday: 'ConcertDate_weekday__fBZXo' };
        },
        23192: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => a });
            let a = '#b239f3';
        },
        23311: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            var a = i(88800),
                s = i(53548);
            let r = (e) => {
                let { className: t } = e,
                    i = (0, s.useId)(),
                    r = (0, s.useId)();
                return (0, a.jsxs)('svg', {
                    className: t,
                    viewBox: '0 0 139 72',
                    preserveAspectRatio: 'none',
                    focusable: 'false',
                    'aria-hidden': !0,
                    children: [
                        (0, a.jsx)('g', { filter: 'url(#'.concat(i, ')'), children: (0, a.jsx)('path', { d: 'M24 24L115 36L24 48V24Z', fill: 'url(#'.concat(r, ')') }) }),
                        (0, a.jsxs)('defs', {
                            children: [
                                (0, a.jsx)('filter', {
                                    id: i,
                                    x: '0',
                                    y: '0',
                                    width: '139',
                                    height: '72',
                                    filterUnits: 'userSpaceOnUse',
                                    colorInterpolationFilters: 'sRGB',
                                    children: (0, a.jsx)('feGaussianBlur', { stdDeviation: '12' }),
                                }),
                                (0, a.jsxs)('linearGradient', {
                                    id: r,
                                    x1: '24',
                                    y1: '36',
                                    x2: '115',
                                    y2: '36',
                                    gradientUnits: 'userSpaceOnUse',
                                    children: [
                                        (0, a.jsx)('stop', { stopColor: 'var(--q2v-accent-color)' }),
                                        (0, a.jsx)('stop', { offset: '1', stopColor: 'var(--q2v-accent-color)', stopOpacity: '0' }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            };
        },
        23717: (e) => {
            e.exports = {
                root: 'DonationCarousel_root__Uejjw',
                controls: 'DonationCarousel_controls__anVvP',
                item: 'DonationCarousel_item__89_B6',
                important: 'DonationCarousel_important__Y52Es',
            };
        },
        24114: (e, t, i) => {
            'use strict';
            var a;
            ((t.HB = function (e, t) {
                let { objectsCount: i = 1, objectPosX: a = 1, objectPosY: r = 1 } = t,
                    l = (0, s.makeMetaParams)(2),
                    o = {
                        ...t,
                        objectsCount: i,
                        objectPosX: a,
                        objectPosY: r,
                        pageId: 'artist_screen',
                        pageType: 'object',
                        entityType: 'carousel',
                        entityId: 'concerts',
                        objectsType: 'concert',
                        _meta: l,
                    };
                e.trackEvent('Artist.Concerts.Showed', o);
            }),
                (t.U6 = function (e, t) {
                    let { objectsCount: i = 1, objectPosX: a = 1, objectPosY: r = 1 } = t,
                        l = (0, s.makeMetaParams)(2),
                        o = {
                            ...t,
                            objectsCount: i,
                            objectPosX: a,
                            objectPosY: r,
                            pageId: 'artist_screen',
                            pageType: 'object',
                            entityType: 'carousel',
                            entityId: 'concerts',
                            objectsType: 'concert',
                            from: 'artist_screen',
                            _meta: l,
                        };
                    e.trackEvent('Artist.Concerts.Navigated', o);
                }));
            let s = i(59203);
            (a || (a = {})).ConcertScreen = 'concert_screen';
        },
        24824: (e) => {
            e.exports = {
                root: 'TrackCard_root__kIpe1',
                srTitleLink: 'TrackCard_srTitleLink__ZVq_n',
                controls: 'TrackCard_controls__E7Y3L',
                cover: 'TrackCard_cover__tkVPB',
                coverBlock: 'TrackCard_coverBlock__WdvvQ',
                coverBlock_withTrackLink: 'TrackCard_coverBlock_withTrackLink__fDe6k',
                image: 'TrackCard_image__KsOFF',
                artists: 'TrackCard_artists__wH48n',
                artistLink: 'TrackCard_artistLink__aqLl7',
                titleContainer: 'TrackCard_titleContainer__YCcZk',
                titleContainer_withVersion: 'TrackCard_titleContainer_withVersion__fTRGu',
                title: 'TrackCard_title__BVLuv',
                titleLink: 'TrackCard_titleLink__NtPhm',
                version: 'TrackCard_version__7iPuj',
                playButton: 'TrackCard_playButton__ukJDd',
                likeButton: 'TrackCard_likeButton__Hejrk',
                menuButton: 'TrackCard_menuButton__XtYLf',
                trailerButton: 'TrackCard_trailerButton__nGqhD',
                control: 'TrackCard_control___huPc',
            };
        },
        25176: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => li });
            var a,
                s = i(82212),
                r = i(88800),
                l = i(53548),
                o = i(87999),
                n = i(7833),
                c = i(65724),
                d = i(84961),
                m = i(2058),
                _ = i(88969),
                u = i(62414),
                p = i(80643),
                v = i(33979),
                b = i(17392),
                C = i(18593),
                h = i(27766),
                x = i(29993),
                A = i(7555),
                j = i(29504),
                T = i(60757),
                N = i(13946),
                I = i(5407),
                S = i(84384),
                f = i(1344),
                L = i(4795),
                g = i(78940),
                y = i(39079),
                k = i(72288),
                R = i(81877),
                E = i(90224),
                P = i(91292),
                w = i(16704),
                O = i(79064),
                M = i.n(O);
            let D = (0, d.PA)((e) => {
                let { promo: t } = e,
                    { formatMessage: i } = (0, m.A)(),
                    a = (0, u.D)(),
                    s = (0, p.S)(),
                    l = (0, g.Z)(t.albumUrl),
                    n = (0, T.c)({ album: t.album, callback: l }),
                    d = (0, v.g)(),
                    O = (0, I.P)(),
                    {
                        paywall: { modal: D },
                    } = (0, k.g)(),
                    B = (0, L.N)(),
                    { from: V } = (0, S.f)({ contextId: t.album.id, contextType: C.K.Album }),
                    { isPlaying: U, togglePlay: W } = (0, y.D)({
                        playContextParams: {
                            contextData: { type: C.K.Album, meta: { id: t.album.id }, from: V, utmLink: (0, f.Z)(t.reportingProperties) },
                            loadContextMeta: !0,
                        },
                    }),
                    H = (0, x.c)((e) => {
                        (t.setClicked(), s({ to: o.AppScreen.AlbumScreen }), n(e));
                    }),
                    z = (0, x.c)(() => {
                        (t.setClicked(), W(), U || d());
                    }),
                    K = (0, T.c)({ album: t.album, callback: z }),
                    Y = (0, x.c)(() => {
                        if (!O()) {
                            if (B) return void D.open();
                            K();
                        }
                    }),
                    F = i({ id: 'entity-names.album-name' }, { albumName: t.album.title }),
                    $ = t.coverContentMode === h.y.TOP;
                return (0, r.jsxs)('div', {
                    className: M().root,
                    ref: a,
                    'data-test-id': b.Kq.albumPromo.ALBUM_PROMO_CARD,
                    children: [
                        (0, r.jsxs)(A.t, {
                            className: M().artistCover,
                            radius: 'm',
                            withShadow: !0,
                            'data-test-id': b.Kq.albumPromo.ALBUM_PROMO_CARD_ARTIST_COVER,
                            children: [
                                (0, r.jsx)(P.N, {
                                    className: M().artistLink,
                                    href: t.albumUrl,
                                    onClick: H,
                                    'aria-label': F,
                                    children: (0, r.jsx)(R.B, {
                                        className: (0, c.$)(M().artistImage, { [M().artistImage_withTopPosition]: $ }),
                                        src: t.cover.uri,
                                        withAvatarReplace: !0,
                                        withAspectRatio: !0,
                                        size: 600,
                                        fit: 'cover',
                                        'aria-hidden': !0,
                                    }),
                                }),
                                (0, r.jsx)(A.t, {
                                    className: M().albumCover,
                                    radius: 'xs',
                                    'data-test-id': b.Kq.albumPromo.ALBUM_PROMO_CARD_ALBUM_COVER,
                                    children: (0, r.jsx)(P.N, {
                                        className: M().albumLink,
                                        href: t.albumUrl,
                                        onClick: H,
                                        'aria-label': F,
                                        children: (0, r.jsx)(R.B, {
                                            className: M().albumImage,
                                            src: t.album.coverUri,
                                            withAvatarReplace: !0,
                                            size: 300,
                                            fit: 'cover',
                                            'aria-hidden': !0,
                                        }),
                                    }),
                                }),
                                (0, r.jsx)(w.D, {
                                    className: M().button,
                                    withRipple: !1,
                                    withHover: !1,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 'default',
                                    color: 'secondary',
                                    iconSize: 'xxs',
                                    isPlaying: U,
                                    onClick: Y,
                                    iconClassName: M().buttonIcon,
                                    disabled: !t.album.isAvailable,
                                    children: (0, r.jsx)(j.HL, {
                                        className: M().buttonText,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'm',
                                        weight: 'medium',
                                        children: (0, r.jsx)(_.A, { id: 'player-actions.listen' }),
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)('div', {
                            className: M().meta,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: M().titleContainer,
                                    'data-test-id': b.Kq.albumPromo.ALBUM_PROMO_CARD_TITLE,
                                    children: [
                                        (0, r.jsx)(j.HL, {
                                            className: M().title,
                                            variant: 'div',
                                            lineClamp: 1,
                                            type: 'entity',
                                            size: 's',
                                            weight: 'medium',
                                            children: (0, r.jsx)(P.N, {
                                                className: M().titleLink,
                                                href: t.albumUrl,
                                                onClick: H,
                                                'data-test-id': b.Kq.albumPromo.ALBUM_PROMO_CARD_TITLE_LINK,
                                                children: t.album.title,
                                            }),
                                        }),
                                        t.album.explicitDisclaimer &&
                                            (0, r.jsx)(E.N, { getDescriptionTexts: t.album.getDescriptionTexts, variant: t.album.explicitDisclaimer, size: 'xxxs' }),
                                    ],
                                }),
                                (0, r.jsx)(N.i, { className: M().artists, linkClassName: M().artistsLink, artists: t.artists, lineClamp: 1, captionSize: 's' }),
                            ],
                        }),
                    ],
                });
            });
            var B = i(35412),
                V = i(53323),
                U = i(18486),
                W = i(31764),
                H = i(83295),
                z = i(62960),
                K = i(68282),
                Y = i.n(K);
            let F = (e) => {
                    let {
                            forwardRef: t,
                            isLoaded: i,
                            setOutdated: a,
                            headerClassName: s,
                            containerClassName: o,
                            data: n,
                            meta: d,
                            headingVariant: m,
                            className: _,
                            children: u,
                            ...p
                        } = e,
                        { intersectionPropertyId: v, ref: b } = ((e) => {
                            let { forwardedRef: t, isLoaded: i, data: a, setOutdated: s } = e,
                                { report: r, reporting: o } = null != a ? a : {},
                                n = (0, l.useMemo)(() => {
                                    var e, t, i;
                                    return [
                                        {
                                            threshold: 0,
                                            visibleTime: null != (e = null == o ? void 0 : o.blockRender.timeMs) ? e : 0,
                                            callback: () => {
                                                let e = null == o ? void 0 : o.blockRender.url;
                                                e && (null == r || r(e));
                                            },
                                        },
                                        {
                                            threshold: 0.5,
                                            visibleTime: null != (t = null == o ? void 0 : o.blockImpression.timeMs) ? t : 2100,
                                            callback: () => {
                                                let e = null == o ? void 0 : o.blockImpression.url;
                                                (e && (null == r || r(e)), s());
                                            },
                                        },
                                        {
                                            threshold: 0,
                                            visibleTime: null != (i = null == o ? void 0 : o.adImpressions.timeMs) ? i : 2100,
                                            callback: () => {
                                                let e = null == o ? void 0 : o.adImpressions.url;
                                                e && (null == r || r(e));
                                            },
                                        },
                                    ];
                                }, [
                                    r,
                                    null == o ? void 0 : o.adImpressions.timeMs,
                                    null == o ? void 0 : o.adImpressions.url,
                                    null == o ? void 0 : o.blockImpression.timeMs,
                                    null == o ? void 0 : o.blockImpression.url,
                                    null == o ? void 0 : o.blockRender.timeMs,
                                    null == o ? void 0 : o.blockRender.url,
                                    s,
                                ]),
                                { ref: c, intersectionPropertyId: d } = (0, z.h)({ isLoaded: i, params: n });
                            return { intersectionPropertyId: d, ref: (0, H.S)([c, t]) };
                        })({ forwardedRef: t, data: n, isLoaded: i, setOutdated: a }),
                        C = (0, l.useRef)(null);
                    return (0, r.jsxs)('section', {
                        className: (0, c.$)(Y().root, _),
                        ref: b,
                        'data-intersection-property-id': v,
                        ...(0, B.OZ)(p),
                        children: [
                            (0, r.jsx)(U.T, { className: s, title: d.title, controls: (0, r.jsx)(W.X, { className: Y().controls, carouselRef: C }), headingVariant: m }),
                            (0, r.jsx)(V.F, { className: o, ref: C, itemClassName: (0, c.$)(Y().item, Y().important), children: u }),
                        ],
                    });
                },
                $ = (0, l.forwardRef)((e, t) => (0, r.jsx)(F, { forwardRef: t, ...e })),
                X = (e) => {
                    let { forwardRef: t, data: i, ...a } = e;
                    return (0, r.jsx)($, {
                        ref: t,
                        data: i,
                        ...a,
                        children:
                            null == i
                                ? void 0
                                : i.items.map((e, t) =>
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.DomainObjectType.Album,
                                              objectId: String(e.album.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              children: (0, r.jsx)(D, { promo: e }),
                                          },
                                          e.album.getKey(t),
                                      ),
                                  ),
                    });
                },
                G = (0, l.forwardRef)((e, t) => (0, r.jsx)(X, { forwardRef: t, ...e }));
            var Z = i(52073),
                q = i(80153),
                Q = i.n(q);
            let J = (0, d.PA)((e) => {
                    let {
                            className: t,
                            forwardRef: i,
                            album: a,
                            description: s,
                            trailerButton: n,
                            entityName: d,
                            onClick: _,
                            albumUrl: u,
                            from: h,
                            utmLink: N,
                            coverColor: S,
                            ...f
                        } = e,
                        O = (0, g.Z)(u),
                        M = (0, I.P)(),
                        D = (0, v.g)(),
                        {
                            paywall: { modal: V },
                        } = (0, k.g)(),
                        U = (0, L.N)(),
                        { formatMessage: W } = (0, m.A)(),
                        { isPlaying: H, togglePlay: z } = (0, y.D)({
                            playContextParams: { contextData: { type: C.K.Album, meta: { id: a.id }, from: h, utmLink: N }, loadContextMeta: !0 },
                        }),
                        K = (0, x.c)(() => {
                            (null == _ || _(), z());
                        }),
                        Y = (0, T.c)({ album: a, callback: O }),
                        F = (0, T.c)({ album: a, callback: K }),
                        $ = (0, p.S)(),
                        X = (0, x.c)((e) => {
                            ((0, Z.P)(e, Q().ripple), e.stopPropagation(), null == _ || _(), $({ to: o.AppScreen.AlbumScreen }), Y(e));
                        }),
                        G = (0, x.c)(() => {
                            if (!M()) {
                                if (U) return void V.open();
                                (F(), H || D());
                            }
                        }),
                        q = (0, l.useMemo)(() => {
                            let e;
                            if (S) {
                                let { h: t, s: i } = (0, B.g8)(S);
                                e = 'hsl('.concat(t, ', ').concat(i, '%, ', 20, '%)');
                            }
                            return { '--new-release-cover-color': e, '--new-release-color': null == a ? void 0 : a.averageColor };
                        }, [null == a ? void 0 : a.averageColor, S]),
                        J = d ? ''.concat(d, ' ').concat(a.title) : a.title;
                    return (0, r.jsxs)(A.t, {
                        radius: 'l',
                        className: (0, c.$)(Q().root, t),
                        ref: i,
                        style: q,
                        ...(0, B.OZ)(f),
                        children: [
                            (0, r.jsx)(P.N, { href: u, className: Q().paperLink, onClick: X, 'aria-label': J }),
                            (0, r.jsx)(R.B, {
                                className: Q().image,
                                src: a.coverUri,
                                alt: W({ id: 'entity-names.album-name' }, { albumName: a.title }),
                                size: 100,
                                fit: 'cover',
                                withAvatarReplace: !0,
                            }),
                            (0, r.jsxs)('div', {
                                className: Q().info,
                                children: [
                                    (0, r.jsx)(j.HL, {
                                        className: Q().title,
                                        variant: 'div',
                                        type: 'entity',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 2,
                                        'aria-label': J,
                                        'data-test-id': b.Kq.newRelease.NEW_RELEASE_CARD_TITLE,
                                        children: a.title,
                                    }),
                                    s &&
                                        (0, r.jsx)(j.HL, {
                                            className: Q().description,
                                            variant: 'div',
                                            type: 'entity',
                                            size: 's',
                                            weight: 'medium',
                                            lineClamp: 1,
                                            'data-test-id': b.Kq.newRelease.NEW_RELEASE_CARD_DESCRIPTION,
                                            children: s,
                                        }),
                                ],
                            }),
                            (0, r.jsxs)('div', {
                                className: Q().container,
                                children: [
                                    a.explicitDisclaimer &&
                                        (0, r.jsx)(E.N, {
                                            className: Q().explicitMark,
                                            containerClassName: Q().explicitMarkContainer,
                                            getDescriptionTexts: a.getDescriptionTexts,
                                            variant: a.explicitDisclaimer,
                                        }),
                                    n,
                                    (0, r.jsx)(w.D, {
                                        buttonVariant: 'default',
                                        withHover: !1,
                                        className: Q().button,
                                        iconClassName: Q().buttonIcon,
                                        variant: 'filled',
                                        iconSize: 'm',
                                        isPlaying: H,
                                        onClick: G,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                ee = (0, l.forwardRef)((e, t) => (0, r.jsx)(J, { forwardRef: t, ...e })),
                et = (0, d.PA)((e) => {
                    let { promo: t } = e,
                        i = (0, u.D)(),
                        { from: a } = (0, S.f)({ contextId: t.album.id, contextType: C.K.Album });
                    return (0, r.jsx)(ee, {
                        onClick: t.setClicked,
                        album: t.album,
                        albumUrl: t.albumUrl,
                        utmLink: (0, f.Z)(t.reportingProperties),
                        from: a,
                        ref: i,
                        description: t.album.artistNames,
                        'data-test-id': b.Kq.simpleAlbumPromo.SIMPLE_ALBUM_PROMO_CARD,
                    });
                }),
                ei = (e) => {
                    let { forwardRef: t, data: i, ...a } = e;
                    return (0, r.jsx)($, {
                        ref: t,
                        data: i,
                        ...a,
                        children:
                            null == i
                                ? void 0
                                : i.items.map((e, t) =>
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.DomainObjectType.Album,
                                              objectId: String(e.album.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              children: (0, r.jsx)(et, { promo: e }),
                                          },
                                          e.album.getKey(t),
                                      ),
                                  ),
                    });
                },
                ea = (0, l.forwardRef)((e, t) => (0, r.jsx)(ei, { forwardRef: t, ...e }));
            var es = i(48911),
                er = i(27021),
                el = i(52018),
                eo = i(35802),
                en = i(63793),
                ec = i(19191),
                ed = i(46033),
                em = i.n(ed);
            let e_ = (e) => {
                    let {
                            artistId: t,
                            forwardRef: i,
                            isLoading: a,
                            title: s,
                            viewAllActionLink: n,
                            children: d,
                            className: m,
                            containerClassName: _,
                            headerClassName: u,
                            itemClassName: p,
                            headingVariant: v,
                            ...b
                        } = e,
                        C = (0, l.useId)(),
                        h = (0, l.useRef)(null),
                        x = (0, ec.m)({ artistId: t }),
                        A = (0, l.useCallback)(() => {
                            x(o.FromArtistScreenTo.ArtistConcertsScreen);
                        }, [x]),
                        j = (0, l.useMemo)(
                            () =>
                                (0, eo.A)(d, 2)
                                    .slice(0, 4)
                                    .map((e, t) => (0, r.jsx)('div', { className: em().concertsColumn, children: e }, t)),
                            [d],
                        );
                    return (0, r.jsxs)('section', {
                        ref: i,
                        className: (0, c.$)(em().root, m),
                        ...b,
                        children: [
                            (0, r.jsx)(U.T, {
                                className: u,
                                labeledForId: C,
                                title: s,
                                viewAllActionLink: n,
                                onViewAllAction: A,
                                controls: (0, r.jsx)(W.X, { className: em().controls, carouselRef: h }),
                                headingVariant: v,
                                shouldSendAnalyticsOnLoaded: !a,
                            }),
                            (0, r.jsx)(V.F, {
                                itemClassName: (0, c.$)(em().item, { [em().item_singleColumn]: 2 >= l.Children.count(d) }, p),
                                className: (0, c.$)(_, { [em().preventScroll]: a }),
                                ref: h,
                                'aria-labelledby': C,
                                children: a ? Array.from({ length: 2 }, (e, t) => (0, r.jsx)('div', { className: em().concertsColumn, children: (0, en.T)(2) }, t)) : j,
                            }),
                        ],
                    });
                },
                eu = (0, l.forwardRef)((e, t) => (0, r.jsx)(e_, { forwardRef: t, ...e }));
            var ep = i(48483),
                ev = i(97956);
            let eb = (0, d.PA)((e) => {
                    var t, i;
                    let {
                            forwardRef: a,
                            isShimmerVisible: s,
                            isShimmerActive: l,
                            containerClassName: c,
                            headerClassName: d,
                            meta: m,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...v
                        } = e,
                        { artist: b, concert: C, experiments: h } = (0, k.g)(),
                        x = null != (i = null != (t = b.id) ? t : C.leadArtistId) ? i : '',
                        A = h.checkExperiment(ev.z.WebNextConcertsIdentityEventType, 'on'),
                        j = A ? el.M : er.Z;
                    return (0, r.jsx)(n.B, {
                        objectType: o.DomainObjectType.Shortcut,
                        objectId: String(x),
                        objectPosX: 1,
                        objectPosY: 1,
                        children: (0, r.jsx)(eu, {
                            ref: a,
                            artistId: String(x),
                            title: m.title,
                            viewAllActionLink: m.viewAllActionLink,
                            isLoading: s || l,
                            headingVariant: u,
                            className: p,
                            headerClassName: d,
                            containerClassName: c,
                            ...(0, B.OZ)(v),
                            children:
                                null == _
                                    ? void 0
                                    : _.items.map((e, t) => {
                                          var i, a;
                                          let { objectPosX: s, objectPosY: l } = (0, ep.$)({
                                              index: t,
                                              count: null != (a = null == (i = _.items) ? void 0 : i.length) ? a : 0,
                                              itemsCountPerColumn: 2,
                                          });
                                          return (0, r.jsx)(
                                              n.B,
                                              {
                                                  objectType: o.DomainObjectType.Concert,
                                                  objectId: String(e.id),
                                                  objectPosX: s,
                                                  objectPosY: l,
                                                  children: (0, r.jsx)(es.V, { artistId: String(x), concert: e, meta: (0, r.jsx)(j, { concert: e }), shouldShowMask: A }),
                                              },
                                              e.id,
                                          );
                                      }),
                        }),
                    });
                }),
                eC = (0, l.forwardRef)((e, t) => (0, r.jsx)(eb, { forwardRef: t, ...e }));
            var eh = i(73170),
                ex = i(99525),
                eA = i.n(ex);
            let ej = (0, d.PA)((e) => {
                    var t, i, a;
                    let { isShimmerVisible: s, isShimmerActive: l, headerClassName: o, data: n, headingVariant: c } = e,
                        d = (0, u.D)(),
                        { playlist: m, artists: p } = n || {},
                        { artist: v } = (0, k.g)(),
                        b = !!(null == (t = v.meta) ? void 0 : t.artist.isAvailable),
                        C = null == (i = v.meta) ? void 0 : i.artist.coverUri,
                        h = null == (a = v.meta) ? void 0 : a.artist.name;
                    return (0, r.jsx)(U.T, {
                        ref: d,
                        coverUrl: null == m ? void 0 : m.coverUri,
                        withCover: !0,
                        withDescription: !0,
                        viewAllActionLink: null == m ? void 0 : m.url,
                        title: null == m ? void 0 : m.title,
                        controls: !1,
                        coverContainerClassName: eA().cover,
                        shimmerCoverClassName: eA().shimmerCover,
                        titleLineClamp: 1,
                        withDescriptionWidthLimit: !1,
                        isShimmerVisible: s,
                        isShimmerActive: l,
                        headingVariant: c,
                        className: o,
                        subTitle: (0, r.jsxs)('div', {
                            className: eA().subTitle,
                            children: [
                                (0, r.jsx)(eh.q, {
                                    children: (0, r.jsx)(j.DZ, {
                                        variant: 'h4',
                                        children: (0, r.jsx)(_.A, { id: 'page.artist-pick-aria-label', values: { artistName: h } }),
                                    }),
                                }),
                                (0, r.jsx)(j.HL, {
                                    variant: 'span',
                                    size: 'l',
                                    weight: 'medium',
                                    className: eA().text,
                                    'aria-hidden': !0,
                                    children: (0, r.jsx)(_.A, { id: 'page.artist-pick-subtitle' }),
                                }),
                                (0, r.jsx)(A.t, {
                                    radius: 'round',
                                    className: eA().smallCoverContainer,
                                    children: (0, r.jsx)(R.B, {
                                        fit: 'cover',
                                        src: C,
                                        size: 50,
                                        className: eA().smallCover,
                                        withAvatarReplace: !0,
                                        isAvailable: b,
                                        'aria-hidden': !0,
                                    }),
                                }),
                                h &&
                                    (0, r.jsx)(j.HL, {
                                        variant: 'span',
                                        size: 'l',
                                        weight: 'medium',
                                        className: eA().text,
                                        lineClamp: 1,
                                        'aria-hidden': !0,
                                        children: h,
                                    }),
                            ],
                        }),
                        description: (0, r.jsx)(N.i, {
                            artists: p,
                            linkClassName: eA().artistLink,
                            spoilerClassName: eA().artistsSpoiler,
                            lineClamp: 1,
                            visibleArtistsCount: 3,
                            spoilerComponent: (0, r.jsx)(_.A, { id: 'entity-names.and-more-artists', values: { artists: '' } }),
                        }),
                    });
                }),
                eT = (0, d.PA)((e) => {
                    var t, i;
                    let { forwardRef: a, className: s, ...l } = e;
                    return (0, r.jsx)('section', {
                        ref: a,
                        className: s,
                        ...(0, B.OZ)(l),
                        children: (0, r.jsx)(n.B, {
                            objectType: o.DomainObjectType.Playlist,
                            objectPosX: 1,
                            objectPosY: 1,
                            objectId: null != (i = null == (t = l.data) ? void 0 : t.playlist.id) ? i : '',
                            children: (0, r.jsx)(ej, { ...l }),
                        }),
                    });
                }),
                eN = (0, l.forwardRef)((e, t) => (0, r.jsx)(eT, { forwardRef: t, ...e }));
            var eI = i(10829),
                eS = i(98644),
                ef = i(67984),
                eL = i(93015),
                eg = i(65403),
                ey = i.n(eg);
            let ek = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            tracksContainerClassName: s,
                            meta: l,
                            data: d,
                            headerClassName: m,
                            headingVariant: _,
                            className: u,
                            ...p
                        } = e,
                        v = (function () {
                            var e;
                            let { artist: t, concert: i } = (0, k.g)();
                            return null != (e = t.id) ? e : i.leadArtistId;
                        })(),
                        { from: b, utmLink: h } = (0, S.f)({ contextType: C.K.Artist, contextId: v });
                    return null === v
                        ? null
                        : (0, r.jsx)(ef.$, {
                              className: u,
                              ref: t,
                              shimmer: (0, r.jsx)(eL.D, { variant: eS.X.PLAYLIST, isActive: a }),
                              maxColumnsCount: ef.D.ONE,
                              itemsCountPerColumn: 5,
                              isShimmerVisible: i,
                              isShimmerActive: a,
                              carouselClassName: s,
                              carouselItemClassName: (0, c.$)(ey().item, ey().important),
                              blockHeaderClassName: m,
                              blockHeaderTitle: l.title,
                              blockHeaderDescription: l.description,
                              blockHeaderHeadingVariant: _,
                              viewAllActionLink: l.viewAllActionLink,
                              ...p,
                              children:
                                  null == d
                                      ? void 0
                                      : d.items.map((e, t) => {
                                            var i;
                                            let { objectPosX: a, objectPosY: s } = (0, ep.$)({ index: t, count: d.items.length });
                                            return (0, r.jsx)(
                                                n.B,
                                                {
                                                    objectId: e.id,
                                                    objectType: o.DomainObjectType.Track,
                                                    objectPosX: a,
                                                    objectPosY: s,
                                                    children: (0, r.jsx)(eI.K, {
                                                        track: e,
                                                        playContextParams:
                                                            ((i = e.id),
                                                            d && v
                                                                ? {
                                                                      contextData: { type: C.K.Artist, meta: { id: v }, from: b, utmLink: h },
                                                                      queueParams: { index: t, entityId: i },
                                                                      loadContextMeta: !0,
                                                                  }
                                                                : { contextData: { type: C.K.Artist, meta: { id: '' }, from: b, utmLink: h } }),
                                                    }),
                                                },
                                                e.id,
                                            );
                                        }),
                          });
                }),
                eR = (0, l.forwardRef)((e, t) => (0, r.jsx)(ek, { forwardRef: t, ...e }));
            var eE = i(72714),
                eP = i(4465),
                ew = i(79070),
                eO = i(10079),
                eM = i(37770);
            let eD = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: l,
                            meta: c,
                            data: d,
                            headingVariant: m,
                            className: _,
                            ...u
                        } = e,
                        p = (0, ew.L)(() =>
                            i || !d
                                ? (0, r.jsx)(eM.V, { className: s, isActive: a })
                                : (0, r.jsx)(n.B, {
                                      objectType: o.DomainObjectType.Album,
                                      objectId: String(d.album.id),
                                      objectPosX: 1,
                                      objectPosY: 1,
                                      children: (0, r.jsx)(eO.a, { className: s, album: d.album }),
                                  }),
                        );
                    return (0, r.jsxs)('section', {
                        className: _,
                        ref: t,
                        ...(0, B.OZ)(u),
                        children: [(0, r.jsx)(U.T, { className: l, title: c.title, headingVariant: m, titleLineClamp: 1 }), p],
                    });
                },
                eB = (0, l.forwardRef)((e, t) => (0, r.jsx)(eD, { forwardRef: t, ...e }));
            var eV = i(31108);
            let eU = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: l,
                            meta: c,
                            data: d,
                            headingVariant: m,
                            className: _,
                            ...u
                        } = e,
                        p = (0, ew.L)(() =>
                            i || !d
                                ? (0, r.jsx)(eM.V, { className: s, isActive: a })
                                : (0, r.jsx)(n.B, {
                                      objectType: o.DomainObjectType.UpcomingAlbum,
                                      objectId: String(d.album.id),
                                      objectPosX: 1,
                                      objectPosY: 1,
                                      children: (0, r.jsx)(eV.M, { className: s, upcomingAlbum: d.album }),
                                  }),
                        );
                    return (0, r.jsxs)('section', {
                        className: _,
                        ref: t,
                        ...(0, B.OZ)(u),
                        children: [(0, r.jsx)(U.T, { className: l, title: c.title, headingVariant: m, titleLineClamp: 1 }), p],
                    });
                },
                eW = (0, l.forwardRef)((e, t) => (0, r.jsx)(eU, { forwardRef: t, ...e }));
            var eH = i(52309),
                ez = i(33586),
                eK = i(2520);
            let eY = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            tracksContainerClassName: s,
                            meta: l,
                            data: c,
                            headerClassName: d,
                            headingVariant: m,
                            className: _,
                            ...u
                        } = e,
                        { from: p, utmLink: v } = (0, S.f)({ contextType: C.K.Playlist, contextId: null == c ? void 0 : c.playlist.id }),
                        b = (0, eK.i)({ playlistId: null == c ? void 0 : c.playlist.id });
                    return (0, r.jsx)(ez._, {
                        sourceContextData: b,
                        children: (0, r.jsx)(ef.$, {
                            className: _,
                            ref: t,
                            shimmer: (0, r.jsx)(eL.D, { variant: eS.X.PLAYLIST, isActive: a }),
                            maxColumnsCount: ef.D.TWO,
                            itemsCountPerColumn: 4,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            carouselClassName: s,
                            blockHeaderClassName: d,
                            blockHeaderTitle: l.title,
                            blockHeaderDescription: l.description,
                            blockHeaderHeadingVariant: m,
                            viewAllActionLink: l.viewAllActionLink,
                            ...u,
                            children:
                                null == c
                                    ? void 0
                                    : c.items.map((e, t) => {
                                          let { objectPosX: i, objectPosY: a } = (0, ep.$)({ index: t, count: c.items.length });
                                          return (0, r.jsx)(
                                              n.B,
                                              {
                                                  objectId: e.data.id,
                                                  objectType: o.DomainObjectType.Track,
                                                  objectPosX: i,
                                                  objectPosY: a,
                                                  children: (0, r.jsx)(eH.Q, {
                                                      track: e.data,
                                                      playContextParams: ((e) =>
                                                          c
                                                              ? {
                                                                    contextData: { type: C.K.Playlist, meta: { id: c.playlist.id }, from: p, utmLink: v },
                                                                    queueParams: { index: c.items.findIndex((t) => t.data.id === e), entityId: e },
                                                                    loadContextMeta: !0,
                                                                }
                                                              : { contextData: { type: C.K.Playlist, meta: { id: '' }, from: p, utmLink: v } })(e.data.id),
                                                  }),
                                              },
                                              e.data.id,
                                          );
                                      }),
                        }),
                    });
                }),
                eF = (0, l.forwardRef)((e, t) => (0, r.jsx)(eY, { forwardRef: t, ...e }));
            var e$ = i(79939);
            let eX = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return e.map((e) => e.data);
                },
                eG = (e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, data: s, meta: l, containerClassName: o, headerClassName: n, className: c, ...d } = e;
                    return (0, r.jsx)(e$.K, {
                        className: c,
                        ref: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        clips: eX(null == s ? void 0 : s.items),
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        containerClassName: o,
                        headerClassName: n,
                        ...d,
                    });
                },
                eZ = (0, l.forwardRef)((e, t) => (0, r.jsx)(eG, { forwardRef: t, ...e }));
            var eq = i(47934),
                eQ = i(87504),
                eJ = i.n(eQ);
            let e0 = (e) => {
                    let { title: t, description: i, viewAllActionLink: a, headerClassName: s, containerClassName: l, headingVariant: o } = e,
                        { formatMessage: n } = (0, m.A)();
                    return (0, r.jsxs)('div', {
                        className: eJ().root,
                        children: [
                            (0, r.jsx)(U.T, {
                                className: s,
                                title: t,
                                description: i,
                                viewAllActionLink: a,
                                'aria-label': n({ id: 'error-messages.empty-collection-podcasts' }),
                                headingVariant: o,
                                withDescription: !!i,
                            }),
                            (0, r.jsx)('div', { className: (0, c.$)(eJ().text, l), children: (0, r.jsx)(_.A, { id: 'error-messages.empty-collection-podcasts' }) }),
                        ],
                    });
                },
                e1 = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        meta: c,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (null == d ? void 0 : d.isEmptyBlock)
                        ? (0, r.jsx)(e0, {
                              title: c.title,
                              description: c.description,
                              viewAllActionLink: c.viewAllActionLink,
                              containerClassName: s,
                              headerClassName: l,
                              headingVariant: m,
                          })
                        : (0, r.jsx)(eq.O, {
                              className: _,
                              ...u,
                              isShimmerVisible: i,
                              isShimmerActive: a,
                              headerClassName: l,
                              containerClassName: s,
                              title: c.title,
                              description: c.description,
                              viewAllActionLink: c.viewAllActionLink,
                              ref: t,
                              headingVariant: m,
                              children:
                                  null == d
                                      ? void 0
                                      : d.items.map((e, t) =>
                                            (0, r.jsx)(
                                                n.B,
                                                {
                                                    objectType: o.DomainObjectType.Album,
                                                    objectId: String(e.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    children: (0, r.jsx)(eO.a, { album: e, contentLinesCount: 3 }),
                                                },
                                                e.id,
                                            ),
                                        ),
                          });
                },
                e8 = (0, l.forwardRef)((e, t) => (0, r.jsx)(e1, { forwardRef: t, ...e }));
            var e2 = i(42078),
                e4 = i(98225),
                e9 = i(35962),
                e3 = i(87366),
                e5 = i(76099),
                e6 = i(97639),
                e7 = i.n(e6),
                te = i(63500),
                tt = i(55659),
                ti = i.n(tt);
            let ta = (e) => {
                    let { tab: t, areBothTabsEmpty: i } = e,
                        a = (0, l.useMemo)(() => {
                            switch (t) {
                                case te.n.ALBUM:
                                    return (0, r.jsx)(_.A, { id: 'error-messages.empty-collection-albums' });
                                case te.n.PRESAVED_ALBUM:
                                    return (0, r.jsx)(_.A, { id: 'error-messages.empty-collection-upcoming-albums-title' });
                            }
                        }, [t]);
                    return (0, r.jsx)('div', { className: (0, c.$)(ti().root, { [ti().root_oneEmptyTab]: !i, [ti().root_twoEmptyTabs]: i }), children: a });
                },
                ts = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: d,
                            meta: m,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...v
                        } = e,
                        b = (0, l.useId)(),
                        C = (0, l.useRef)(null),
                        h = (0, l.useId)(),
                        x = ''.concat(b, ' ').concat(b, '-description'),
                        A = (0, e4.zb)((null == _ ? void 0 : _.activeIndexTab) || 0),
                        j = (0, l.useMemo)(() => {
                            var e;
                            return (null == _ || null == (e = _.tabs[A.value]) ? void 0 : e.items.length) === 0;
                        }, [null == _ ? void 0 : _.tabs, A.value]),
                        T = (0, l.useCallback)(
                            (e) =>
                                e.isEmptyTab
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              !(null == _ ? void 0 : _.areBothTabsEmpty) &&
                                                  (0, r.jsx)(V.F, {
                                                      className: (0, c.$)(e7().carouselEmpty, s),
                                                      itemClassName: (0, c.$)(e7().item, e7().important),
                                                      tabIndex: -1,
                                                      children: (0, e9.k)({ isActive: !1, withInfo: !0, linesCount: 4 }),
                                                  }),
                                              (0, r.jsx)(ta, { tab: e.type, areBothTabsEmpty: null == _ ? void 0 : _.areBothTabsEmpty }),
                                          ],
                                      })
                                    : (0, r.jsx)(V.F, {
                                          ref: C,
                                          itemClassName: (0, c.$)(e7().item, e7().important),
                                          className: s,
                                          'aria-labelledby': x,
                                          children: e.items.map((e, t) => {
                                              switch (e.type) {
                                                  case e2._.ALBUM_ITEM:
                                                      return (0, r.jsx)(
                                                          n.B,
                                                          {
                                                              objectType: o.DomainObjectType.Album,
                                                              objectId: String(e.data.id),
                                                              objectPosX: t + 1,
                                                              objectPosY: 1,
                                                              children: (0, r.jsx)(eO.a, { contentLinesCount: 4, album: e.data }),
                                                          },
                                                          e.data.id,
                                                      );
                                                  case e2._.PRESAVED_ALBUM_ITEM:
                                                      return (0, r.jsx)(
                                                          n.B,
                                                          {
                                                              objectType: o.DomainObjectType.UpcomingAlbum,
                                                              objectId: String(e.data.id),
                                                              objectPosX: t + 1,
                                                              objectPosY: 1,
                                                              children: (0, r.jsx)(eV.M, { contentLinesCount: 4, upcomingAlbum: e.data }),
                                                          },
                                                          e.data.id,
                                                      );
                                              }
                                          }),
                                      }),
                            [x, s, null == _ ? void 0 : _.areBothTabsEmpty],
                        ),
                        N = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, r.jsx)(V.F, {
                                          ref: C,
                                          itemClassName: (0, c.$)(e7().item, e7().important),
                                          className: s,
                                          'aria-labelledby': x,
                                          children: (0, e9.k)({ isActive: a, withInfo: !0, linesCount: 4 }),
                                      })
                                    : null == _
                                      ? void 0
                                      : _.tabs.map((e, t) =>
                                            (0, r.jsx)(e4.Kp, { name: t, value: A.value, elementId: h, className: e7().tabPanel, children: T(e) }, e.id),
                                        ),
                            [i, null == _ ? void 0 : _.tabs, s, x, a, A.value, h, T],
                        );
                    return (0, r.jsxs)('section', {
                        className: (0, c.$)(e7().root, p, { [e7().root_withControls]: !j }),
                        ref: t,
                        ...(0, B.OZ)(v),
                        children: [
                            (0, r.jsx)(n.B, {
                                objectType: o.DomainObjectType.Shortcut,
                                objectId: String(m.viewAllActionLink),
                                objectPosX: 1,
                                objectPosY: 1,
                                children: (0, r.jsx)(U.T, {
                                    className: (0, c.$)(d, e7().header, e7().important),
                                    title: m.title,
                                    description: m.description,
                                    labeledForId: b,
                                    viewAllActionLink: m.viewAllActionLink,
                                    controls: (0, r.jsx)(W.X, { className: e7().controls, carouselRef: C }),
                                    headingVariant: u,
                                    withDescription: !!m.description,
                                }),
                            }),
                            (0, r.jsx)(e5.wI, {
                                className: (0, c.$)(s, e7().tabCarousel, e7().important),
                                isShimmerVisible: i,
                                elementId: h,
                                shimmer: (0, r.jsx)(e5.zr, { isActive: a, className: (0, c.$)(s, e7().tabCarousel, e7().important), shimmerClassName: e7().tabShimmer }),
                                'aria-labelledby': b,
                                ...A,
                                children:
                                    null == _
                                        ? void 0
                                        : _.tabs.map((e, t) =>
                                              (0, r.jsx)(e3.o, { value: t, 'aria-label': e.title, title: e.title, className: (0, c.$)(e7().tab, e7().important) }, e.id),
                                          ),
                            }),
                            N,
                        ],
                    });
                }),
                tr = (0, l.forwardRef)((e, t) => (0, r.jsx)(ts, { forwardRef: t, ...e }));
            var tl = i(21256),
                to = i(39238),
                tn = i.n(to);
            let tc = (e) => {
                    let { title: t, description: i, viewAllActionLink: a, headerClassName: s, containerClassName: l } = e,
                        { formatMessage: o } = (0, m.A)();
                    return (0, r.jsxs)('div', {
                        className: tn().root,
                        children: [
                            (0, r.jsx)(U.T, {
                                className: s,
                                title: t,
                                description: i,
                                viewAllActionLink: a,
                                'aria-label': o({ id: 'error-messages.empty-collection-artists-title' }),
                                withDescription: !!i,
                            }),
                            (0, r.jsx)('div', { className: (0, c.$)(tn().text, l), children: (0, r.jsx)(_.A, { id: 'error-messages.empty-collection-artists-title' }) }),
                        ],
                    });
                },
                td = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        className: c,
                        meta: d,
                        data: m,
                        headingVariant: _,
                        ...u
                    } = e;
                    return (null == m ? void 0 : m.isEmptyBlock)
                        ? (0, r.jsx)(tc, {
                              title: d.title,
                              description: d.description,
                              viewAllActionLink: d.viewAllActionLink,
                              containerClassName: s,
                              headerClassName: l,
                          })
                        : (0, r.jsx)(eq.O, {
                              ...u,
                              className: c,
                              isShimmerVisible: i,
                              isShimmerActive: a,
                              isShimmerCentered: !0,
                              isShimmerRounded: !0,
                              containerClassName: s,
                              headerClassName: l,
                              title: d.title,
                              description: d.description,
                              viewAllActionLink: d.viewAllActionLink,
                              ref: t,
                              headingVariant: _,
                              children:
                                  null == m
                                      ? void 0
                                      : m.items.map((e, t) =>
                                            (0, r.jsx)(
                                                n.B,
                                                {
                                                    objectType: o.DomainObjectType.Artist,
                                                    objectId: e.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    children: (0, r.jsx)(tl.a, { artist: e, contentLinesCount: 3 }),
                                                },
                                                e.id,
                                            ),
                                        ),
                          });
                },
                tm = (0, l.forwardRef)((e, t) => (0, r.jsx)(td, { forwardRef: t, ...e }));
            var t_ = i(78275),
                tu = i(90688),
                tp = i(55211),
                tv = i(64284),
                tb = i(98427),
                tC = i(47964),
                th = i(52726),
                tx = i(8990),
                tA = i(39267),
                tj = i(28896),
                tT = i.n(tj);
            let tN = (e) => {
                    var t;
                    let { item: i } = e,
                        a = (0, x.c)((e) => {
                            (0, Z.P)(e, tT().ripple);
                        });
                    return (0, r.jsxs)(P.N, {
                        href: i.data.viewAllActionLink,
                        className: (0, c.$)(tT().item, tT().menuItem),
                        onClick: a,
                        children: [
                            (0, r.jsx)(tu._V, {
                                src: null == (t = i.data.cover) ? void 0 : t.uri,
                                className: tT().cover,
                                fit: 'cover',
                                withAvatarReplace: !0,
                                'aria-hidden': !0,
                            }),
                            (0, r.jsx)(j.HL, { className: tT().text, variant: 'div', type: 'entity', size: 'm', weight: 'medium', lineClamp: 2, children: i.data.title }),
                        ],
                    });
                },
                tI = (0, d.PA)((e) => {
                    let { item: t, artistId: i } = e,
                        [a, s] = (0, l.useState)(!1),
                        { state: o, setState: n } = (0, t_.e)(!1),
                        c = (0, I.P)(),
                        { freeAccess: d } = (0, k.g)(),
                        m = (0, v.g)(),
                        _ = ''.concat(tv.U.ARTIST, '-').concat(i),
                        {
                            isPlaying: u,
                            togglePlay: p,
                            isCurrent: b,
                        } = (0, tC.B)({ seeds: t.data.seeds, pageIdForFrom: tb.b.RADIO, blockIdForFrom: _, parentContextId: i }),
                        C = (0, x.c)(async () => {
                            if (d.isVibeStartRestricted) return void n(!0);
                            let e = p();
                            return (u || m(), e);
                        }),
                        h = (0, x.c)(() => {
                            c() ||
                                (s(!0),
                                C().finally(() => {
                                    s(!1);
                                }));
                        }),
                        A = (0, x.c)((e) => {
                            ((0, Z.P)(e, tT().ripple), h());
                        }),
                        T = (0, ew.L)(() => {
                            var e;
                            return t.data.shouldShowAgent && t.data.agent
                                ? (0, r.jsx)(tp.n, { agent: t.data.agent, isCurrent: b, isPlaying: u, onPlayButtonClick: h, playButtonIconSize: 'm' })
                                : (0, r.jsx)(tA.q, {
                                      isCurrent: b,
                                      isPlaying: u,
                                      isAvailable: !0,
                                      isPlayButtonLoading: a,
                                      onPlayButtonClick: h,
                                      title: t.data.title,
                                      entityCoverStyle: { backgroundColor: null == (e = t.data.agent) ? void 0 : e.cover.color },
                                      coverUri: 'avatars.mds.yandex.net/get-music-misc/2419084/img.64426eadaa320f4f1b4b633a/%%',
                                      radius: 'round',
                                      withLoadingIndicator: !1,
                                      playButtonIconSize: 'm',
                                  });
                        }),
                        N = (0, l.useCallback)(
                            () =>
                                (0, r.jsxs)(tx.C, {
                                    className: tT().item,
                                    onClick: A,
                                    children: [
                                        T,
                                        (0, r.jsx)(j.HL, {
                                            className: tT().text,
                                            variant: 'div',
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            lineClamp: 2,
                                            children: t.data.title,
                                        }),
                                    ],
                                }),
                            [A, T, t.data.title],
                        );
                    return (0, r.jsx)(th.S, {
                        isEnabled: d.isVibeStartRestricted,
                        isOpened: o,
                        onOpenChange: n,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: t.data.stationType,
                        renderChildren: N,
                    });
                }),
                tS = (e) => {
                    let { items: t, className: i, artistId: a } = e;
                    return (0, r.jsx)('div', {
                        className: (0, c.$)(tT().root, i),
                        children: t.map((e, t) => {
                            switch (e.type) {
                                case e2._.MENU_ITEM:
                                    return (0, r.jsx)(tN, { item: e }, e.key);
                                case e2._.WAVE_AGENT_ITEM:
                                    return (0, r.jsx)(tI, { item: e, artistId: a }, t);
                                default:
                                    return null;
                            }
                        }),
                    });
                };
            var tf = i(19994),
                tL = i(38754),
                tg = i.n(tL);
            let ty = (e) => {
                    let { isActive: t, itemClassName: i, actionItemClassName: a } = e;
                    return (0, r.jsxs)('div', {
                        className: tg().root,
                        children: [
                            (0, r.jsx)(eM.V, { isActive: t, className: i, round: !0, centered: !0 }),
                            (0, r.jsxs)('div', {
                                className: (0, c.$)(tg().actionItems, a),
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: tg().actionItem,
                                        children: [
                                            (0, r.jsx)(tf.W, { isActive: t, className: tg().actionCover, radius: 's' }),
                                            (0, r.jsxs)('div', {
                                                className: tg().actionTextContainer,
                                                children: [
                                                    (0, r.jsx)(tf.W, { isActive: t, className: (0, c.$)(tg().actionText, tg().actionText_title), radius: 's' }),
                                                    (0, r.jsx)(tf.W, { isActive: t, className: tg().actionText, radius: 's' }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: tg().actionItem,
                                        children: [
                                            (0, r.jsx)(tf.W, { isActive: t, className: tg().actionCover, radius: 'round' }),
                                            (0, r.jsxs)('div', {
                                                className: tg().actionTextContainer,
                                                children: [
                                                    (0, r.jsx)(tf.W, { isActive: t, className: (0, c.$)(tg().actionText, tg().actionText_title), radius: 's' }),
                                                    (0, r.jsx)(tf.W, { isActive: t, className: tg().actionText, radius: 's' }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                tk = function () {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Array.from({ length: null != (e = t.countWeb) ? e : 5 }, (e, i) => (0, r.jsx)(ty, { ...t }, i));
                };
            var tR = i(1249),
                tE = i.n(tR);
            let tP = (e) => {
                    var t;
                    let {
                            forwardRef: i,
                            isShimmerVisible: a,
                            isShimmerActive: s,
                            containerClassName: d,
                            headerClassName: _,
                            className: u,
                            meta: p,
                            data: v,
                            headingVariant: b,
                            ...C
                        } = e,
                        { formatMessage: h } = (0, m.A)(),
                        x = (0, l.useRef)(null);
                    return (0, r.jsxs)('section', {
                        ref: i,
                        className: (0, c.$)(tE().root, u),
                        ...(0, B.OZ)(C),
                        children: [
                            (0, r.jsx)(U.T, {
                                className: _,
                                title: p.title,
                                description: p.description,
                                viewAllActionLink: p.viewAllActionLink,
                                headingVariant: b,
                                controls: (0, r.jsx)(W.X, { className: tE().controls, carouselRef: x }),
                            }),
                            (0, r.jsx)(V.F, {
                                className: d,
                                ref: x,
                                children: a
                                    ? tk({
                                          isActive: s,
                                          itemClassName: (0, c.$)(tE().item, tE().important),
                                          actionItemClassName: (0, c.$)(tE().actionItem, tE().important),
                                          countWeb: null == (t = p.source) ? void 0 : t.countWeb,
                                      })
                                    : null == v
                                      ? void 0
                                      : v.artists.map((e, t) =>
                                            (0, r.jsx)(
                                                n.B,
                                                {
                                                    objectType: o.DomainObjectType.Artist,
                                                    objectId: e.artist.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    children: (0, r.jsxs)('div', {
                                                        className: tE().itemContainer,
                                                        'aria-label': h({ id: 'entity-names.artist-name' }, { artistName: e.artist.name }),
                                                        children: [
                                                            (0, r.jsx)(tl.a, { className: (0, c.$)(tE().item, tE().important), artist: e.artist, contentLinesCount: 2 }),
                                                            (0, r.jsx)(tS, {
                                                                className: (0, c.$)(tE().actionItem, tE().important),
                                                                items: e.items,
                                                                artistId: e.artist.id,
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                e.artist.id,
                                            ),
                                        ),
                            }),
                        ],
                    });
                },
                tw = (0, l.forwardRef)((e, t) => (0, r.jsx)(tP, { forwardRef: t, ...e }));
            var tO = i(13317),
                tM = i.n(tO);
            let tD = (e) => {
                    let { title: t, description: i, viewAllActionLink: a, headerClassName: s, containerClassName: l, headingVariant: o } = e,
                        { formatMessage: n } = (0, m.A)();
                    return (0, r.jsxs)('div', {
                        className: tM().root,
                        'data-test-id': b.e8.landing.COLLECTION_CLIPS,
                        children: [
                            (0, r.jsx)(U.T, {
                                className: s,
                                title: t,
                                description: i,
                                viewAllActionLink: a,
                                'aria-label': n({ id: 'error-messages.empty-collection-clips-title' }),
                                headingVariant: o,
                                withDescription: !!i,
                            }),
                            (0, r.jsx)(j.HL, {
                                className: (0, c.$)(tM().text, l),
                                variant: 'div',
                                size: 'l',
                                weight: 'normal',
                                'data-test-id': b.e8.landing.COLLECTION_CLIPS_BLOCK_LIKED_EMPTY_BLOCK_TITLE,
                                children: (0, r.jsx)(_.A, { id: 'error-messages.empty-collection-clips-title' }),
                            }),
                        ],
                    });
                },
                tB = (e) => {
                    let { forwardRef: t, containerClassName: i, headerClassName: a, meta: s, data: l, headingVariant: o, ...n } = e;
                    return (null == l ? void 0 : l.isEmptyBlock)
                        ? (0, r.jsx)(tD, {
                              title: s.title,
                              description: s.description,
                              viewAllActionLink: s.viewAllActionLink,
                              containerClassName: i,
                              headerClassName: a,
                              headingVariant: o,
                          })
                        : (0, r.jsx)(eZ, { ref: t, meta: s, data: l, containerClassName: i, headerClassName: a, headingVariant: o, ...n });
                },
                tV = (0, l.forwardRef)((e, t) => (0, r.jsx)(tB, { forwardRef: t, ...e }));
            var tU = i(41911),
                tW = i(89643);
            let tH = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: c,
                            meta: d,
                            data: m,
                            headingVariant: _,
                            className: u,
                            ...p
                        } = e,
                        v = (0, l.useMemo)(() => {
                            let e =
                                null == m
                                    ? void 0
                                    : m.items.map((e, t) =>
                                          (0, r.jsx)(
                                              n.B,
                                              {
                                                  objectType: o.DomainObjectType.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  children: (0, r.jsx)(tU.B, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      );
                            return (null == e || e.unshift((0, r.jsx)(tW.B, {}, 'create-playlist-card')), e);
                        }, [null == m ? void 0 : m.items]);
                    return (0, r.jsx)(eq.O, {
                        className: u,
                        ...p,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: c,
                        title: d.title,
                        description: d.description,
                        viewAllActionLink: d.viewAllActionLink,
                        ref: t,
                        headingVariant: _,
                        children: v,
                    });
                }),
                tz = (0, l.forwardRef)((e, t) => (0, r.jsx)(tH, { forwardRef: t, ...e }));
            var tK = i(11510);
            let tY = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            tracksContainerClassName: l,
                            headerClassName: c,
                            className: d,
                            meta: _,
                            data: u,
                            headingVariant: p,
                            onRefetch: v,
                            ...h
                        } = e,
                        { from: x } = (0, S.f)(),
                        { formatMessage: A } = (0, m.A)();
                    (0, tK.L)(v);
                    let j = Array.isArray(null == u ? void 0 : u.rawTracks)
                        ? A({ id: 'entity-names.number-of-tracks' }, { counter: null == u ? void 0 : u.rawTracks.length })
                        : _.description;
                    return (0, r.jsx)(ef.$, {
                        className: d,
                        shimmer: (0, r.jsx)(eL.D, { variant: eS.X.PLAYLIST, isActive: a }),
                        'data-test-id': b.e8.landing.COLLECTION_DOWNLOADED_TRACKS,
                        maxColumnsCount: ef.D.TWO,
                        itemsCountPerColumn: 4,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        blockHeaderClassName: c,
                        carouselClassName: l,
                        blockHeaderTitle: _.title,
                        viewAllActionLink: _.viewAllActionLink,
                        blockHeaderDescription: j,
                        ref: t,
                        blockHeaderHeadingVariant: p,
                        withBlockHeaderDescription: !0,
                        ...h,
                        children:
                            null == u
                                ? void 0
                                : u.items.map((e, t) => {
                                      let i,
                                          { objectPosX: a, objectPosY: l } = (0, ep.$)({ index: t, count: u.items.length });
                                      return (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.DomainObjectType.Track,
                                              objectId: e.id,
                                              objectPosX: a,
                                              objectPosY: l,
                                              children: (0, r.jsx)(eI.K, {
                                                  track: e,
                                                  playContextParams:
                                                      ((i = e.id),
                                                      {
                                                          contextData: { type: C.K.Various, meta: { id: s.t.COLLECTION_DOWNLOADED_TRACKS }, from: x },
                                                          entitiesData: null == u ? void 0 : u.entitiesData,
                                                          queueParams: { index: t, entityId: i },
                                                          loadContextMeta: !1,
                                                      }),
                                              }),
                                          },
                                          e.id,
                                      );
                                  }),
                    });
                }),
                tF = (0, l.forwardRef)((e, t) => (0, r.jsx)(tY, { forwardRef: t, ...e }));
            var t$ = i(63766);
            let tX = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        meta: c,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, r.jsx)(eq.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        title: c.title,
                        description: c.description,
                        viewAllActionLink: c.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) => {
                                      switch (e.type) {
                                          case e2._.TRACK_ITEM:
                                              return (0, r.jsx)(
                                                  n.B,
                                                  {
                                                      objectType: o.DomainObjectType.Track,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      children: (0, r.jsx)(t$.w, { track: e.data, contentLinesCount: 3 }, e.data.getKey('track')),
                                                  },
                                                  e.data.id,
                                              );
                                          case e2._.LIKED_PLAYLIST_ITEM:
                                              return (0, r.jsx)(
                                                  n.B,
                                                  {
                                                      objectType: o.DomainObjectType.Playlist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      children: (0, r.jsx)(tU.B, { playlist: e.data, contentLinesCount: 3 }, e.data.getKey('playlist')),
                                                  },
                                                  e.data.key,
                                              );
                                          case e2._.NON_MUSIC_ALBUM_ITEM:
                                              return (0, r.jsx)(
                                                  n.B,
                                                  {
                                                      objectType: o.DomainObjectType.Album,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      children: (0, r.jsx)(eO.a, { album: e.data, contentLinesCount: 3 }, e.data.getKey('album')),
                                                  },
                                                  e.data.id,
                                              );
                                      }
                                  }),
                    });
                },
                tG = (0, l.forwardRef)((e, t) => (0, r.jsx)(tX, { forwardRef: t, ...e })),
                tZ = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        meta: c,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, r.jsx)(eq.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: l,
                        containerClassName: s,
                        title: c.title,
                        description: c.description,
                        viewAllActionLink: c.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) =>
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.DomainObjectType.Playlist,
                                              objectId: e.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              children: (0, r.jsx)(tU.B, { playlist: e, contentLinesCount: 3 }),
                                          },
                                          e.key,
                                      ),
                                  ),
                    });
                },
                tq = (0, l.forwardRef)((e, t) => (0, r.jsx)(tZ, { forwardRef: t, ...e }));
            var tQ = i(12946),
                tJ = i(34007),
                t0 = i.n(tJ),
                t1 = i(86797),
                t8 = i.n(t1);
            let t2 = (e) => {
                    let { className: t } = e;
                    return (0, r.jsx)('div', {
                        className: (0, c.$)(t8().root, t),
                        'data-test-id': b.e8.landing.COLLECTION_PLAYLISTS_BLOCK_LIKED_EMPTY_BLOCK_TEXT,
                        children: (0, r.jsx)(_.A, { id: 'error-messages.empty-collection-liked-playlists' }),
                    });
                },
                t4 = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: d,
                            meta: m,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...v
                        } = e,
                        b = (0, l.useId)(),
                        C = (0, l.useRef)(null),
                        h = (0, l.useId)(),
                        x = ''.concat(b, ' ').concat(b, '-description'),
                        A = (0, e4.zb)((null == _ ? void 0 : _.activeIndexTab) || 0),
                        j = (0, l.useMemo)(() => {
                            var e, t;
                            return (
                                (null == _ || null == (e = _.tabs[A.value]) ? void 0 : e.type) !== tQ.l.PLAYLIST_CREATED_TAB &&
                                (null == _ || null == (t = _.tabs[A.value]) ? void 0 : t.items.length) === 0
                            );
                        }, [null == _ ? void 0 : _.tabs, A.value]),
                        T = (0, l.useCallback)(
                            (e) => {
                                if (e.isEmptyTab && e.type !== tQ.l.PLAYLIST_CREATED_TAB)
                                    return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(V.F, {
                                                className: (0, c.$)(t0().carouselEmpty, s),
                                                itemClassName: (0, c.$)(t0().item, t0().important),
                                                tabIndex: -1,
                                                children: (0, e9.k)({ isActive: !1, withInfo: !0, linesCount: 4 }),
                                            }),
                                            (0, r.jsx)(t2, {}),
                                        ],
                                    });
                                let t = e.items.map((e, t) =>
                                    (0, r.jsx)(
                                        n.B,
                                        {
                                            objectType: o.DomainObjectType.Playlist,
                                            objectId: String(e.id),
                                            objectPosX: t + 1,
                                            objectPosY: 1,
                                            children: (0, r.jsx)(tU.B, { contentLinesCount: 4, playlist: e }),
                                        },
                                        e.id,
                                    ),
                                );
                                return (
                                    e.type === tQ.l.PLAYLIST_CREATED_TAB && t.unshift((0, r.jsx)(tW.B, { className: t0().createPlaylistCard }, 'create-playlist-card')),
                                    (0, r.jsx)(V.F, { ref: C, itemClassName: (0, c.$)(t0().item, t0().important), className: s, 'aria-labelledby': x, children: t })
                                );
                            },
                            [x, s],
                        ),
                        N = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, r.jsx)(V.F, {
                                          ref: C,
                                          itemClassName: (0, c.$)(t0().item, t0().important),
                                          className: s,
                                          'aria-labelledby': x,
                                          children: (0, e9.k)({ isActive: a, withInfo: !0, linesCount: 4 }),
                                      })
                                    : null == _
                                      ? void 0
                                      : _.tabs.map((e, t) =>
                                            (0, r.jsx)(e4.Kp, { name: t, value: A.value, elementId: h, className: t0().tabPanel, children: T(e) }, e.id),
                                        ),
                            [i, null == _ ? void 0 : _.tabs, s, x, a, A.value, h, T],
                        );
                    return (0, r.jsxs)('section', {
                        className: (0, c.$)(t0().root, p, { [t0().root_withControls]: !j }),
                        ref: t,
                        ...(0, B.OZ)(v),
                        children: [
                            (0, r.jsx)(n.B, {
                                objectType: o.DomainObjectType.Shortcut,
                                objectId: String(m.viewAllActionLink),
                                objectPosX: 1,
                                objectPosY: 1,
                                children: (0, r.jsx)(U.T, {
                                    className: (0, c.$)(d, t0().header, t0().important),
                                    title: m.title,
                                    description: m.description,
                                    labeledForId: b,
                                    viewAllActionLink: m.viewAllActionLink,
                                    controls: (0, r.jsx)(W.X, { className: t0().controls, carouselRef: C }),
                                    headingVariant: u,
                                    withDescription: !!m.description,
                                }),
                            }),
                            (0, r.jsx)(e5.wI, {
                                isShimmerVisible: i,
                                className: (0, c.$)(s, t0().tabCarousel, t0().important),
                                elementId: h,
                                shimmer: (0, r.jsx)(e5.zr, { isActive: a, className: (0, c.$)(s, t0().tabCarousel, t0().important), shimmerClassName: t0().tabShimmer }),
                                'aria-labelledby': b,
                                ...A,
                                children:
                                    null == _
                                        ? void 0
                                        : _.tabs.map((e, t) =>
                                              (0, r.jsx)(e3.o, { value: t, 'aria-label': e.title, title: e.title, className: (0, c.$)(t0().tab, t0().important) }, e.id),
                                          ),
                            }),
                            N,
                        ],
                    });
                }),
                t9 = (0, l.forwardRef)((e, t) => (0, r.jsx)(t4, { forwardRef: t, ...e }));
            var t3 = i(13607),
                t5 = i(52300),
                t6 = i(19981),
                t7 = i(81602),
                ie = i.n(t7);
            let it = { [t3._.UP]: 'chartUp', [t3._.DOWN]: 'chartDown', [t3._.SAME]: 'chartSame', [t3._.NEW]: 'chartNew' },
                ii = (0, d.PA)((e) => {
                    let { artist: t, position: i, progress: a, listenTimeSeconds: s, className: l } = e,
                        { formatMessage: o } = (0, m.A)(),
                        n = (0, t6.U)(s, o),
                        d = a ? it[a] : null,
                        _ = d
                            ? (0, r.jsx)(t5.I, { variant: d, size: 'xxs', className: (0, c.$)(ie().progressIcon, ie()['progressIcon_'.concat(a)]), 'aria-hidden': !0 })
                            : null,
                        u = (0, ew.L)(() =>
                            void 0 !== i
                                ? (0, r.jsxs)('div', {
                                      className: ie().positionIndicator,
                                      children: [
                                          (0, r.jsx)(j.HL, { variant: 'span', type: 'entity', size: 'm', weight: 'bold', children: i }),
                                          1 === i && (0, r.jsx)(t5.I, { variant: 'crown', size: 'xxs', className: ie().crownIcon, 'aria-hidden': 'true' }),
                                          1 !== i && _,
                                      ],
                                  })
                                : void 0,
                        ),
                        p = (0, ew.L)(() => (0, r.jsx)(j.HL, { variant: 'div', type: 'controls', size: 's', weight: 'medium', className: ie().listenTime, children: n }));
                    return (0, r.jsx)(tl.a, { artist: t, className: l, topTitleElement: u, bottomTitleElement: p, contentLinesCount: 3 });
                }),
                ia = (0, d.PA)((e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        className: c,
                        meta: d,
                        data: m,
                        headingVariant: _,
                        ...u
                    } = e;
                    return i || (null == m ? void 0 : m.items.length)
                        ? (0, r.jsx)(eq.O, {
                              ...u,
                              className: c,
                              isShimmerVisible: i,
                              isShimmerActive: a,
                              isShimmerCentered: !0,
                              isShimmerRounded: !0,
                              containerClassName: s,
                              headerClassName: l,
                              title: d.title,
                              description: d.description,
                              viewAllActionLink: d.viewAllActionLink,
                              ref: t,
                              headingVariant: _,
                              children:
                                  null == m
                                      ? void 0
                                      : m.items.map((e, t) => {
                                            var i, a;
                                            return (0, r.jsx)(
                                                n.B,
                                                {
                                                    objectType: o.DomainObjectType.Artist,
                                                    objectId: e.artist.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    children: (0, r.jsx)(ii, {
                                                        artist: e.artist,
                                                        position: null == (i = e.top) ? void 0 : i.position,
                                                        progress: null == (a = e.top) ? void 0 : a.progress,
                                                        listenTimeSeconds: e.listenTimeSeconds,
                                                    }),
                                                },
                                                e.artist.id,
                                            );
                                        }),
                          })
                        : (0, r.jsx)(tc, {
                              title: d.title,
                              description: d.description,
                              viewAllActionLink: d.viewAllActionLink,
                              containerClassName: s,
                              headerClassName: l,
                          });
                }),
                is = (0, l.forwardRef)((e, t) => (0, r.jsx)(ia, { forwardRef: t, ...e }));
            var ir = i(64543),
                il = i(64605),
                io = i(64555),
                ic = i.n(io);
            let id = (0, d.PA)((e) => {
                    var t;
                    let { containerClassName: i, meta: a, data: s, forwardRef: o, isShimmerVisible: n, isShimmerActive: d, headingVariant: m = 'h2', ...u } = e,
                        {
                            settings: { isMobile: p },
                            freeAccess: b,
                        } = (0, k.g)(),
                        { screen: C } = (0, ir.j)(),
                        h = null == C ? void 0 : C.pageIdForFrom,
                        { block: x } = (0, ir.j)(),
                        [A, T] = (0, l.useState)(!1),
                        { isPlaying: N, togglePlay: I } = (0, tC.B)({
                            seeds: null != (t = null == s ? void 0 : s.vibe.seeds) ? t : [],
                            pageIdForFrom: h,
                            blockIdForFrom: null == x ? void 0 : x.blockIdForFrom,
                        }),
                        S = (0, v.g)(),
                        f = (0, l.useCallback)(() => {
                            !b.isVibeStartRestricted && (I(), N || S());
                        }, [b.isVibeStartRestricted, I, N, S]),
                        L = (0, l.useCallback)(
                            () =>
                                (0, r.jsx)(w.D, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: N,
                                    onClick: f,
                                    className: ic().playButton,
                                    children: (0, r.jsx)(_.A, { id: 'player-actions.listen' }),
                                }),
                            [f, N],
                        ),
                        g = (0, ew.L)(() =>
                            (0, r.jsx)(th.S, {
                                isEnabled: b.isVibeStartRestricted,
                                isOpened: A,
                                onOpenChange: T,
                                placement: 'top',
                                textVariant: 'vibe',
                                vibeTextVariant: null == s ? void 0 : s.vibe.stationType,
                                renderChildren: L,
                            }),
                        ),
                        y = (0, ew.L)(() =>
                            n || !s
                                ? (0, r.jsxs)('div', {
                                      className: ic().root,
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: ic().shimmerContainer,
                                              children: [
                                                  (0, r.jsx)(tf.W, { isActive: d, radius: 'xs', className: (0, c.$)(ic().coverShimmer, ic().item, ic().important) }),
                                                  p && (0, r.jsx)(tf.W, { radius: 'l', isActive: d, width: 150, height: 24 }),
                                              ],
                                          }),
                                          !p &&
                                              (0, r.jsxs)('div', {
                                                  className: ic().container,
                                                  children: [
                                                      (0, r.jsx)(tf.W, { radius: 'l', isActive: d, width: 300, height: 32 }),
                                                      (0, r.jsx)(tf.W, { radius: 'xxxl', isActive: d, width: 124, height: 48 }),
                                                  ],
                                              }),
                                      ],
                                  })
                                : (0, r.jsxs)('div', {
                                      className: ic().root,
                                      children: [
                                          (0, r.jsx)(il.y, {
                                              vibe: s.vibe,
                                              shouldShowPlayButton: !1,
                                              className: (0, c.$)(ic().item, ic().important),
                                              shouldShowAdditionals: p,
                                              additionalsLinesCount: 1,
                                          }),
                                          !p &&
                                              (0, r.jsxs)('div', {
                                                  className: ic().container,
                                                  children: [
                                                      (0, r.jsx)(j.DZ, {
                                                          weight: 'bold',
                                                          size: 'm',
                                                          className: ic().text,
                                                          lineClamp: 2,
                                                          variant: m,
                                                          children: null == s ? void 0 : s.vibe.description,
                                                      }),
                                                      g,
                                                  ],
                                              }),
                                      ],
                                  }),
                        );
                    return (0, r.jsx)('section', { ref: o, title: a.title, className: i, ...(0, B.OZ)(u), children: y });
                }),
                im = (0, l.forwardRef)((e, t) => {
                    var i, a;
                    return (0, r.jsx)(n.B, {
                        objectType: o.DomainObjectType.Wave,
                        objectId: null != (a = null == (i = e.data) ? void 0 : i.vibe.stationId) ? a : '',
                        objectPosX: 1,
                        objectPosY: 1,
                        children: (0, r.jsx)(id, { forwardRef: t, ...e }),
                    });
                });
            var i_ = i(76830),
                iu = i(4370),
                ip = i(43378),
                iv = i(88102);
            let ib = (0, d.PA)((e) => {
                let { room: t, onRoomSuccessExit: i } = e,
                    a = (0, x.c)(() => {
                        i(t.id);
                    });
                return (0, r.jsx)(iv.E, { room: t, contentLinesCount: 3, onRoomSuccessExit: a });
            });
            var iC = i(37659),
                ih = i.n(iC);
            let ix = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: c,
                            meta: d,
                            data: m,
                            headingVariant: _,
                            className: u,
                            ...p
                        } = e,
                        [v, C] = (0, l.useState)([]);
                    (0, l.useEffect)(() => {
                        var e;
                        C((null == m || null == (e = m.items) ? void 0 : e.length) ? (null == m ? void 0 : m.items) : []);
                    }, [null == m ? void 0 : m.items]);
                    let h = (0, x.c)((e) => {
                            C((t) => t.filter((t) => t.id !== e));
                        }),
                        A = (0, ew.L)(() => {
                            let e = v.map((e, t) => {
                                var i, a;
                                return (0, r.jsx)(
                                    n.B,
                                    {
                                        objectType: o.DomainObjectType.Wave,
                                        objectId: null != (a = null == (i = e.wave) ? void 0 : i.seedsId) ? a : '',
                                        objectPosX: t + 1,
                                        objectPosY: 1,
                                        children: (0, r.jsx)(ib, { room: e, onRoomSuccessExit: h }, e.id),
                                    },
                                    e.id,
                                );
                            });
                            return [
                                (0, r.jsx)(n.B, {
                                    objectType: o.DomainObjectType.Shortcut,
                                    objectId: '',
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    children: (0, r.jsx)(i_.f, {}, 'create-vibe-room-button'),
                                }),
                                ...e,
                            ];
                        }),
                        j = (0, ew.L)(() => Array.from({ length: 9 }, (e, t) => (0, r.jsx)(ip.P, { isActive: a }, t)));
                    return (0, r.jsx)(eq.O, {
                        className: u,
                        ...p,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        showShimmerInfo: !1,
                        containerClassName: s,
                        headerClassName: c,
                        title: d.title,
                        description: d.description,
                        viewAllActionLink: d.viewAllActionLink || iu.Z.collectionVibeRooms.href,
                        ref: t,
                        headingVariant: _,
                        customShimmer: j,
                        'data-test-id': b.e8.landing.COLLECTION_WAVE_ROOMS,
                        children: A,
                    });
                }),
                iA = (0, l.forwardRef)((e, t) => {
                    let {
                        collection: { vibeRooms: i },
                        user: a,
                    } = (0, k.g)();
                    return i.isEnabled && a.hasPlus ? (0, r.jsx)(ix, { forwardRef: t, ...e, containerClassName: ih().root }) : null;
                });
            var ij = i(69704),
                iT = i(67174),
                iN = i(43947),
                iI = i.n(iN),
                iS = i(4501),
                iL = i.n(iS);
            let ig = (0, d.PA)((e) => {
                    let { title: t, colors: i } = e;
                    return (0, r.jsxs)(j.HL, {
                        size: 'm',
                        variant: 'span',
                        className: iL().station,
                        children: [
                            (0, r.jsx)('div', {
                                className: iL().stationColors,
                                children: i.map((e, t) => (0, r.jsx)('span', { className: iL().colorSpan, style: { '--metro-station-color-line': e } }, t)),
                            }),
                            t,
                        ],
                    });
                }),
                iy = (0, d.PA)((e) => {
                    var t, i, a;
                    let { data: s } = e,
                        { place: n, city: c, address: d, map: _ } = s,
                        v = (() => {
                            let { theme: e } = (0, ij.W)();
                            return (0, l.useCallback)(
                                (t) => {
                                    let i = (0, B.a6)(t.replace('%%', '1300,1000')),
                                        { href: a } = (0, iT.u)(i, { query: { theme: null != e ? e : '' } });
                                    return a;
                                },
                                [e],
                            );
                        })(),
                        { formatMessage: b } = (0, m.A)(),
                        { href: C, target: h } = ((e) => {
                            let { theme: t } = (0, ij.W)();
                            return (0, iT.u)(null != e ? e : '', { query: { theme: null != t ? t : '' }, options: { isExternalLink: !0 } });
                        })(null != (a = null == s || null == (t = s.map) ? void 0 : t.url) ? a : ''),
                        A = (0, p.S)(),
                        T = (0, u.D)(),
                        N = (0, x.c)(() => {
                            A({ to: o.AppScreen.Link, deepLink: C });
                        });
                    return (0, r.jsxs)('div', {
                        ref: T,
                        className: iI().root,
                        children: [
                            (0, r.jsx)(j.DZ, { size: 'm', variant: 'h3', className: iI().heading, children: n }),
                            (0, r.jsx)(P.N, {
                                onClick: N,
                                'aria-label': b({ id: 'entity-names.map-url' }),
                                href: C,
                                className: iI().linkContainer,
                                target: h,
                                children: (0, r.jsx)(tu._V, {
                                    createUrlReplacer: v,
                                    className: iI().mapImage,
                                    alt: n,
                                    fit: 'cover',
                                    size: 600,
                                    src: null == _ ? void 0 : _.imageUrl,
                                    withAvatarReplace: !0,
                                }),
                            }),
                            (0, r.jsxs)('div', {
                                className: iI().addressContainer,
                                children: [
                                    (0, r.jsx)(j.HL, { variant: 'span', size: 'm', weight: 'medium', className: iI().address, children: ''.concat(c, ', ').concat(d) }),
                                    (0, r.jsx)('div', {
                                        'aria-label': b({ id: 'entity-names.metro-stations' }),
                                        className: iI().metroStations,
                                        children:
                                            null == (i = s.groupedMetroStations) ? void 0 : i.map((e, t) => (0, r.jsx)(ig, { title: e.title, colors: e.colors }, t)),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var ik = i(34105),
                iR = i.n(ik);
            let iE = (0, d.PA)((e) => {
                    let { isActive: t } = e;
                    return (0, r.jsxs)('div', {
                        className: iR().root,
                        children: [
                            (0, r.jsx)(tf.W, { className: iR().heading, radius: 's', isActive: t }),
                            (0, r.jsx)(tf.W, { className: iR().mapImage, radius: 's', isActive: t }),
                            (0, r.jsx)(tf.W, { className: iR().address, radius: 's', isActive: t }),
                            (0, r.jsx)(tf.W, { className: iR().metroStations, radius: 's', isActive: t }),
                        ],
                    });
                }),
                iP = (0, d.PA)((e) => {
                    var t, i;
                    let { forwardRef: a, containerClassName: s, isShimmerVisible: l, isShimmerActive: c, id: d, data: m, ..._ } = e,
                        { concert: u } = (0, k.g)(),
                        p = null != (i = null == (t = u.meta) ? void 0 : t.id) ? i : '',
                        v = (0, ew.L)(() => (l ? (0, r.jsx)(iE, { isActive: c }) : m ? (0, r.jsx)(iy, { data: m }) : void 0));
                    return (0, r.jsx)('section', {
                        ref: a,
                        className: s,
                        ...(0, B.OZ)(_),
                        children: (0, r.jsx)(n.B, { objectId: p, objectType: o.DomainObjectType.Concert, objectPosX: 1, objectPosY: 1, children: v }, d),
                    });
                }),
                iw = (0, l.forwardRef)((e, t) => (0, r.jsx)(iP, { forwardRef: t, ...e }));
            var iO = i(63582),
                iM = i(36236);
            let iD = (0, iO.B)(
                { kind: 'provider', requiredProps: ['filterKey', 'filterValue', 'filterPos'], scope: 'filter' },
                ({ children: e, filterKey: t, filterPos: i, filterValue: a }) => {
                    let s = (0, l.useMemo)(() => ({ filterKey: t, filterPos: i, filterValue: a }), [t, i, a]);
                    return (0, r.jsx)(iM.S, { value: s, children: e });
                },
            );
            var iB = i(38371),
                iV = i(36930),
                iU = i(44167),
                iW = i(13060),
                iH = i(74250),
                iz = i(10465),
                iK = i(49176),
                iY = i(14229),
                iF = i.n(iY);
            let i$ = (e) => {
                let { concert: t } = e,
                    {
                        title: i,
                        datetime: a,
                        city: s,
                        place: n,
                        contentRating: d,
                        cover: _,
                        dataSessionId: v,
                        rank: b,
                        isCashbackExperimentEnabled: C,
                        isIdentityExperimentEnabled: h,
                        cashbackTitle: T,
                        cashbackValuePercent: N,
                    } = t,
                    { formatDate: I } = (0, m.A)(),
                    S = (0, u.D)(),
                    f = (0, p.S)(),
                    { state: L, toggleTrue: y, toggleFalse: R } = (0, t_.e)(!1),
                    { experiments: E } = (0, k.g)(),
                    { href: P } = (0, iT.u)('/concert/:concertId', { params: { concertId: t.id } }),
                    w = (0, g.Z)(P),
                    O = E.checkExperiment(ev.z.WebNextConcertPage, 'on'),
                    M = (0, l.useMemo)(() => {
                        let e = C && !!T;
                        if ((h && N) || e)
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(eh.q, { children: I(a, (0, iz.f)()) }),
                                    (0, r.jsxs)(j.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: iF().descriptionContainer,
                                        children: [
                                            (0, r.jsx)(j.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                lineClamp: 1,
                                                className: iF().description,
                                                children: n,
                                            }),
                                            (0, r.jsx)(j.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                className: iF().description,
                                                'aria-hidden': !0,
                                                children: ' • ',
                                            }),
                                            d &&
                                                (0, r.jsx)(j.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    className: iF().description,
                                                    children: d,
                                                }),
                                        ],
                                    }),
                                    (0, r.jsx)(iW.m, { className: iF().cashback, title: T, valuePercent: N }),
                                ],
                            });
                        let t = [];
                        return (
                            a && t.push(I(a, (0, iz.f)())),
                            d && t.push(d),
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(j.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        className: iF().description,
                                        children: n,
                                    }),
                                    (0, r.jsxs)(eh.q, { children: [I(a, (0, iz.f)()), ' ', d] }),
                                    (0, r.jsx)(j.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        className: iF().description,
                                        'aria-hidden': !0,
                                        children: t.join(' • '),
                                    }),
                                ],
                            })
                        );
                    }, [T, N, d, a, I, C, h, n]),
                    D = (0, l.useCallback)(
                        (e) => {
                            (f({ to: o.AppScreen.ConcertPurchaseScreen }), y(), null == e || e.stopPropagation());
                        },
                        [y, f],
                    ),
                    V = (0, x.c)((e) => {
                        if (!O) {
                            (D(e), f({ to: o.AppScreen.ConcertScreen }));
                            return;
                        }
                        w(e);
                    }),
                    U = (0, l.useCallback)(
                        (e) => {
                            (e.code === iK.v.SPACE || e.code === iK.v.ENTER) && (e.preventDefault(), V());
                        },
                        [V],
                    );
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(A.t, {
                            className: iF().root,
                            style: ((e) => {
                                let t;
                                if (e) {
                                    let { h: i, s: a, l: s } = (0, B.g8)(e);
                                    t = 'linear-gradient(\n            180deg, \n            transparent 0%, \n            hsla('
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0) 40%, \n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.1) 43%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.2) 46%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.3) 49%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.4) 52%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.5) 55%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.6) 58%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.7) 61%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.8) 64%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.9) 67%, \n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 1) 70%, \n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 1) 100%\n        )');
                                }
                                return { '--concert-card-linear-gradient': t };
                            })(null == _ ? void 0 : _.color),
                            radius: 'l',
                            role: 'button',
                            tabIndex: 0,
                            onClick: V,
                            onKeyDown: U,
                            ref: S,
                            children: [
                                (0, r.jsx)(tu._V, {
                                    className: iF().cover,
                                    src: null == _ ? void 0 : _.uri,
                                    size: 400,
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    withLoadingIndicator: !1,
                                }),
                                void 0 !== b &&
                                    (0, r.jsx)(j.HL, {
                                        variant: 'span',
                                        size: 'l',
                                        weight: 'bold',
                                        className: (0, c.$)(iF().index, iF().title),
                                        'aria-hidden': !0,
                                        children: b,
                                    }),
                                (0, r.jsxs)('div', {
                                    className: iF().meta,
                                    children: [
                                        (0, r.jsx)(j.DZ, {
                                            variant: 'h3',
                                            size: 'xs',
                                            weight: 'bold',
                                            lineClamp: 3,
                                            className: (0, c.$)(iF().title, iF().concertTitle),
                                            children: i,
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: iF().textContainer,
                                            children: [
                                                a &&
                                                    (0, r.jsx)(iH.d, {
                                                        datetime: a,
                                                        className: iF().date,
                                                        monthClassName: iF().description,
                                                        dayClassName: iF().title,
                                                        withWeekday: !1,
                                                    }),
                                                (0, r.jsxs)('div', {
                                                    className: iF().info,
                                                    children: [
                                                        (0, r.jsx)(j.HL, {
                                                            variant: 'span',
                                                            type: 'controls',
                                                            size: 'm',
                                                            weight: 'medium',
                                                            lineClamp: 1,
                                                            className: iF().title,
                                                            children: s,
                                                        }),
                                                        M,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(iU.h, { dataSessionId: v, isOpened: L, onOpen: y, onClose: R }),
                    ],
                });
            };
            var iX = i(66328),
                iG = i.n(iX);
            let iZ = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: d,
                            meta: m,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...v
                        } = e,
                        b = (0, l.useId)(),
                        { experiments: C, concerts: h } = (0, k.g)(),
                        x = (0, l.useRef)(null),
                        A = C.checkExperiment(ev.z.WebNextNewConcertCard, 'on'),
                        j = (0, l.useMemo)(
                            () =>
                                i
                                    ? ((e, t) =>
                                          Array.from({ length: 10 }, (i, a) =>
                                              e ? (0, r.jsx)(iV.L, { isActive: t }, a) : (0, r.jsx)(tf.W, { isActive: t, className: iG().shimmer }, a),
                                          ))(A, a)
                                    : null == _
                                      ? void 0
                                      : _.items.map((e, t) =>
                                            (0, r.jsx)(
                                                n.B,
                                                {
                                                    objectType: o.DomainObjectType.Concert,
                                                    objectId: e.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    children: A ? (0, r.jsx)(iB.Q, { concert: e }) : (0, r.jsx)(i$, { concert: e }),
                                                },
                                                e.id,
                                            ),
                                        ),
                            [null == _ ? void 0 : _.items, a, i, A],
                        );
                    return (0, r.jsx)(iD, {
                        filterKey: o.DomainObjectType.Location,
                        filterValue: null !== h.locationSelection.selectedLocationId ? String(h.locationSelection.selectedLocationId) : 'auto',
                        filterPos: 1,
                        children: (0, r.jsxs)('section', {
                            ref: t,
                            className: (0, c.$)(iG().root, { [iG().root_withNewConcertCards]: A }, p),
                            ...(0, B.OZ)(v),
                            children: [
                                (0, r.jsx)(U.T, {
                                    className: d,
                                    labeledForId: b,
                                    title: m.title,
                                    viewAllActionLink: m.viewAllActionLink,
                                    controls: (0, r.jsx)(W.X, { className: iG().controls, carouselRef: x }),
                                    headingVariant: u,
                                }),
                                (0, r.jsx)(V.F, { ref: x, itemClassName: (0, c.$)(iG().item, iG().important), className: s, 'aria-labelledby': b, children: j }),
                            ],
                        }),
                    });
                }),
                iq = (0, l.forwardRef)((e, t) => (0, r.jsx)(iZ, { forwardRef: t, ...e }));
            var iQ = i(48249),
                iJ = i.n(iQ),
                i0 = i(97888),
                i1 = i.n(i0);
            let i8 = (e) => {
                let { className: t, title: i, subtitle: a, covers: s, link: n, type: d, withLastPlayed: m } = e,
                    _ = (0, p.S)(),
                    u = (0, l.useMemo)(() => {
                        if (0 !== s.length)
                            return (0, r.jsx)('div', {
                                className: i1().covers,
                                'data-test-id': b.e8.landing.CONTINUE_LISTEN_BASE_ITEM_COVERS,
                                children: s
                                    .slice(0, 2)
                                    .map((e, t) =>
                                        (0, r.jsx)(
                                            A.t,
                                            {
                                                className: i1().coverContainer,
                                                radius: 'xs',
                                                children: (0, r.jsx)(tu._V, {
                                                    className: i1().cover,
                                                    size: 80,
                                                    src: e.uri,
                                                    fit: 'contain',
                                                    withAvatarReplace: !0,
                                                    fallbackIconSize: 's',
                                                    'data-test-id': ''.concat(b.e8.landing.CONTINUE_LISTEN_BASE_ITEM_COVERS, '_').concat(t),
                                                }),
                                            },
                                            t,
                                        ),
                                    ),
                            });
                    }, [s]),
                    v = (0, l.useCallback)(() => {
                        _({ to: o.AppScreen.Link });
                    }, [_]);
                return (0, r.jsx)(A.t, {
                    className: (0, c.$)(i1().root, i1()['root_'.concat(d)], { [i1().root_withCovers]: s.length > 0, [i1().root_withLastPlayed]: m }, t),
                    radius: 'l',
                    'data-test-id': b.e8.landing.CONTINUE_LISTEN_BASE_ITEM,
                    children: (0, r.jsx)(P.N, {
                        className: i1().link,
                        href: n,
                        onClick: v,
                        'data-test-id': b.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK,
                        children: (0, r.jsxs)('div', {
                            className: i1().content,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: i1().textContainer,
                                    children: [
                                        (0, r.jsxs)(j.HL, {
                                            className: i1().title,
                                            size: 'm',
                                            variant: 'div',
                                            'data-test-id': b.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK_TITLE,
                                            children: [i, (0, r.jsx)(t5.I, { className: i1().titleIcon, size: 'xs', variant: 'arrowRight' })],
                                        }),
                                        a &&
                                            (0, r.jsx)(j.HL, {
                                                className: i1().subtitle,
                                                size: 'm',
                                                variant: 'div',
                                                lineClamp: 2,
                                                'data-test-id': b.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK_SUBTITLE,
                                                children: a,
                                            }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    }),
                });
            };
            var i2 = i(61013),
                i4 = i(68254),
                i9 = i(36303),
                i3 = i(91106),
                i5 = i(9630),
                i6 = i(70610),
                i7 = i.n(i6);
            let ae = (e) => {
                    let { isContinueListenEntity: t, isPlaying: i, onTogglePlay: a, showAdvertNotification: s } = e,
                        l = (0, v.g)(),
                        o = (0, x.c)(() => {
                            !s() && (a(), i || l());
                        });
                    return (0, r.jsx)(w.D, { variant: 'filled', className: i7().playButton, isPlaying: i && t, onClick: o, iconSize: 'm' });
                },
                at = (0, d.PA)((e) => {
                    var t, i, a, s, d;
                    let { className: _, lastPlayed: u } = e,
                        { formatMessage: p } = (0, m.A)(),
                        { sonataState: v, continueListen: h } = (0, k.g)(),
                        x = (0, i5.e)(),
                        T = (0, i3.$)(),
                        {
                            album: N,
                            playlist: f,
                            track: L,
                            getTrackMeta: g,
                            getPlaylistMeta: w,
                            isNeededToLoad: O,
                            isRejected: M,
                            albumDuration: D,
                            albumDurationLeft: B,
                        } = u.data,
                        { track: V, trackIndex: U, contextType: W, contextId: H, albumDuration: z, albumStreamProgress: K, trackTempStreamProgress: Y } = h,
                        F = (0, I.P)(),
                        $ = (0, l.useMemo)(() => V || L, [V, L]),
                        X = (null == (t = v.entityMeta) ? void 0 : t.isPodcast) || (null == (i = v.entityMeta) ? void 0 : i.isAudiobook),
                        G = (0, l.useCallback)(async () => {
                            let e = await g();
                            !h.track &&
                                e &&
                                (h.saveTrack({
                                    contextType: N ? C.K.Album : C.K.Playlist,
                                    contextId: N ? N.id : String(null == f ? void 0 : f.id),
                                    track: e,
                                    isDefaultTrack: !0,
                                }),
                                D && B && (h.saveAlbumDuration(D), h.albumStreamProgress.updateEndPositionSec(D - B)));
                        }, [h, N, D, B, g, null == f ? void 0 : f.id]),
                        Z = (0, l.useCallback)(async () => {
                            let e = await w();
                            h.trackIndex || 'number' != typeof e || h.saveTrackIndex(e);
                        }, [w, h]);
                    (0, l.useEffect)(() => {
                        O && (G(), Z());
                    }, [O, G, Z]);
                    let q = W === C.K.Album && $.mainAlbum && (null == $ ? void 0 : $.mainAlbum.isAudiobook),
                        Q = (0, l.useCallback)(
                            (e) => {
                                var t, i;
                                if (
                                    e &&
                                    e.duration &&
                                    (e.duration === 1 / 0
                                        ? null == (t = $.streamProgress) || t.updateEndPositionSec(0)
                                        : null == (i = $.streamProgress) || i.updateEndPositionSec(e.position),
                                    q)
                                ) {
                                    let t = (null == K ? void 0 : K.endPositionSec) || 0,
                                        i = e.position,
                                        a = i - ((null == Y ? void 0 : Y.endPositionSec) || 0);
                                    (null == K || K.updateEndPositionSec(t + a), null == Y || Y.updateEndPositionSec(i));
                                }
                            },
                            [$.streamProgress, K, Y, q],
                        ),
                        J = q ? (null == K ? void 0 : K.endPositionSec) || 0 : (null == (a = $.streamProgress) ? void 0 : a.endPositionSec) || 0,
                        ee = $.durationMs ? $.durationMs / 1e3 : 0,
                        et = q ? z || 0 : ee,
                        ei = (0, i9.m)(J, et),
                        ea = (0, l.useMemo)(() => (0, i2.A)(Q, 500), [Q]),
                        { isPlaying: es, togglePlay: er } = ((e) => {
                            let { track: t, trackIndex: i, contextType: a, contextId: s } = e,
                                r = (0, l.useMemo)(() => {
                                    switch (a) {
                                        case C.K.Playlist:
                                            return { type: C.K.Playlist, meta: { id: String(s) } };
                                        case C.K.Album:
                                            return { type: C.K.Album, meta: { id: Number(s) } };
                                        case C.K.Various:
                                            return { type: C.K.Various, meta: { id: Number(s) } };
                                        case C.K.Artist:
                                            return { type: C.K.Artist, meta: { id: Number(s) } };
                                        case C.K.Generative:
                                            return { type: C.K.Generative, meta: { id: Number(s) } };
                                        case C.K.Vibe:
                                            return { type: C.K.Vibe, meta: { id: String(s) } };
                                        default:
                                            return { type: C.K.Various, meta: { id: '' } };
                                    }
                                }, [a, s]),
                                { from: o, utmLink: n } = (0, S.f)({ contextId: r.meta.id, contextType: r.type }),
                                c = (0, ew.L)(() => {
                                    switch (a) {
                                        case C.K.Playlist:
                                            return { type: C.K.Playlist, meta: { id: String(s) }, from: o, utmLink: n };
                                        case C.K.Album:
                                            return { type: C.K.Album, meta: { id: Number(s) }, from: o, utmLink: n };
                                        case C.K.Various:
                                            return { type: C.K.Various, meta: { id: Number(s) }, from: o, utmLink: n };
                                        case C.K.Artist:
                                            return { type: C.K.Artist, meta: { id: Number(s) }, from: o, utmLink: n };
                                        case C.K.Generative:
                                            return { type: C.K.Generative, meta: { id: Number(s) }, from: o, utmLink: n };
                                        case C.K.Vibe:
                                            return {
                                                type: C.K.Vibe,
                                                meta: { id: String(s) },
                                                seeds: [String(s)],
                                                includeTracksInResponse: !0,
                                                trackToStartFrom: t.id,
                                                from: o,
                                                utmLink: n,
                                            };
                                        default:
                                            return { type: C.K.Playlist, meta: { id: '' }, from: o, utmLink: n };
                                    }
                                });
                            return (0, y.D)({
                                playContextParams: { contextData: c, queueParams: { entityId: t.id, index: i }, loadContextMeta: !0 },
                                entityId: t.entityId,
                            });
                        })({ track: $, trackIndex: U, contextType: W, contextId: H }),
                        el = (0, l.useMemo)(() => ({ '--color-background': $.averageColor }), [$.averageColor]);
                    (0, l.useEffect)(() => {
                        let e,
                            t =
                                null == x
                                    ? void 0
                                    : x.state.queueState.currentEntity.onChange(() => {
                                          (null == e || e(),
                                              (e = x.state.playerState.progress.onChange(() => {
                                                  let e = x.state.playerState.progress.value;
                                                  X && ea(e);
                                              })));
                                      });
                        return () => {
                            (null == t || t(), null == e || e());
                        };
                    }, [x, ea, X, $.streamProgress]);
                    let eo = q ? $.mainAlbum.title : $.title,
                        en = q ? $.mainAlbum.coverUri : $.coverUri,
                        ec = (0, l.useMemo)(() => {
                            var e;
                            return p({ id: 'entity-names.album-name' }, { albumName: null == (e = $.mainAlbum) ? void 0 : e.title });
                        }, [p, null == (s = $.mainAlbum) ? void 0 : s.title]),
                        ed = (0, l.useMemo)(() => (q ? ec : p({ id: 'entity-names.track-name' }, { trackName: $.title })), [p, q, ec, $.title]),
                        em = q ? $.mainAlbum.explicitDisclaimer : $.explicitDisclaimer,
                        e_ = T(et - J, !1);
                    return M
                        ? null
                        : (0, r.jsx)(
                              n.B,
                              {
                                  objectType: o.DomainObjectType.Track,
                                  objectId: String($.id),
                                  objectPosX: 1,
                                  objectPosY: 1,
                                  children: (0, r.jsxs)(A.t, {
                                      className: (0, c.$)(i7().root, _),
                                      radius: 'l',
                                      style: el,
                                      'aria-label': eo,
                                      'data-test-id': b.e8.landing.CONTINUE_LISTEN_TRACK,
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: i7().content,
                                              children: [
                                                  (0, r.jsx)(R.B, {
                                                      className: (0, c.$)(i7().cover, i7().important),
                                                      src: en,
                                                      size: 50,
                                                      alt: ed,
                                                      fit: 'cover',
                                                      withAvatarReplace: !0,
                                                      isAvailable: $.isAvailable,
                                                      fallbackIconSize: 'xs',
                                                      'aria-hidden': !0,
                                                  }),
                                                  (0, r.jsxs)('div', {
                                                      className: i7().metaTrack,
                                                      children: [
                                                          (0, r.jsxs)(P.N, {
                                                              className: i7().metaContainer,
                                                              href: null == (d = $.mainAlbum) ? void 0 : d.url,
                                                              'data-test-id': b.e8.landing.CONTINUE_LISTEN_TRACK_META_LINK,
                                                              children: [
                                                                  (0, r.jsx)(j.HL, {
                                                                      className: i7().title,
                                                                      type: 'entity',
                                                                      size: 'm',
                                                                      weight: 'medium',
                                                                      variant: 'span',
                                                                      lineClamp: 1,
                                                                      'aria-label': ec,
                                                                      'data-test-id': b.e8.landing.CONTINUE_LISTEN_TRACK_META_LINK_TITLE,
                                                                      children: eo,
                                                                  }),
                                                                  em &&
                                                                      (0, r.jsx)(E.N, {
                                                                          getDescriptionTexts: $.getDescriptionTexts,
                                                                          size: 'xs',
                                                                          variant: em,
                                                                          className: i7().explicitMark,
                                                                      }),
                                                                  (0, r.jsx)(t5.I, { className: i7().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                                              ],
                                                          }),
                                                          (0, r.jsx)('div', {
                                                              className: i7().progress,
                                                              children:
                                                                  !!et &&
                                                                  (0, r.jsxs)(r.Fragment, {
                                                                      children: [
                                                                          (0, r.jsx)(i4.q, {
                                                                              'aria-valuetext': ei,
                                                                              'aria-busy': es && X,
                                                                              fullCircleClassName: i7().fullCircle,
                                                                              progressCircleClassName: i7().progressCircle,
                                                                              value: J,
                                                                              max: et,
                                                                              'data-test-id': b.e8.landing.CONTINUE_LISTEN_TRACK_META_CIRCLE_PROGRESS,
                                                                          }),
                                                                          (0, r.jsx)(j.HL, {
                                                                              lineClamp: 1,
                                                                              variant: 'div',
                                                                              size: 'm',
                                                                              'data-test-id': b.e8.landing.CONTINUE_LISTEN_TRACK_META_PROGRESS_TEXT,
                                                                              children: e_,
                                                                          }),
                                                                      ],
                                                                  }),
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(ae, { isContinueListenEntity: !!X, isPlaying: es, onTogglePlay: er, showAdvertNotification: F }),
                                      ],
                                  }),
                              },
                              $.id,
                          );
                }),
                ai = (e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, headerClassName: s, containerClassName: d, headingVariant: _, data: u, ...p } = e,
                        { formatMessage: v } = (0, m.A)(),
                        b = (0, l.useId)(),
                        C = (0, l.useMemo)(() => {
                            if (!u || i) return Array.from({ length: 3 }, (e, t) => (0, r.jsx)(tf.W, { className: iJ().item, isActive: a }, t));
                            let e = [
                                    u.bookshelf.bookCount ? v({ id: 'entity-names.number-of-books' }, { counter: u.bookshelf.bookCount }) : void 0,
                                    u.bookshelf.podcastCount ? v({ id: 'entity-names.number-of-podcasts' }, { counter: u.bookshelf.podcastCount }) : void 0,
                                ]
                                    .filter(Boolean)
                                    .join(',\n'),
                                t = u.newEpisodes.trackCount ? v({ id: 'entity-names.number-of-episodes' }, { counter: u.newEpisodes.trackCount }) : void 0,
                                s = [];
                            return (
                                u.lastPlayed &&
                                    s.push((0, r.jsx)(at, { className: (0, c.$)(iJ().item, iJ().item_lastPlayed), lastPlayed: u.lastPlayed }, u.lastPlayed.type)),
                                s.push(
                                    (0, r.jsx)(
                                        n.B,
                                        {
                                            objectType: o.DomainObjectType.Text,
                                            objectId: 'bookshelf',
                                            objectPosX: 1,
                                            objectPosY: 1,
                                            children: (0, r.jsx)(i8, {
                                                className: iJ().item,
                                                type: 'bookshelf',
                                                link: iu.Z.collectionShelf.href,
                                                title: u.bookshelf.title,
                                                subtitle: e,
                                                covers: u.bookshelf.covers,
                                                withLastPlayed: !!u.lastPlayed,
                                            }),
                                        },
                                        u.bookshelf.title,
                                    ),
                                    (0, r.jsx)(
                                        n.B,
                                        {
                                            objectType: o.DomainObjectType.Text,
                                            objectId: 'newEpisodes',
                                            objectPosX: 2,
                                            objectPosY: 1,
                                            children: (0, r.jsx)(i8, {
                                                className: iJ().item,
                                                type: 'newEpisodes',
                                                link: iu.Z.collectionShelfNewEpisodes.href,
                                                title: u.newEpisodes.title,
                                                subtitle: t,
                                                covers: u.newEpisodes.covers,
                                                withLastPlayed: !!u.lastPlayed,
                                            }),
                                        },
                                        u.newEpisodes.title,
                                    ),
                                ),
                                s
                            );
                        }, [v, u, a, i]);
                    return (0, r.jsxs)('section', {
                        ref: t,
                        ...(0, B.OZ)(p),
                        children: [
                            (0, r.jsx)(U.T, { className: s, labeledForId: b, title: v({ id: 'non-music.continue-listen-landing-block-title' }), headingVariant: _ }),
                            (0, r.jsx)('div', {
                                className: iJ().blocksContainer,
                                children: (0, r.jsx)('div', { className: (0, c.$)(iJ().container, d), 'aria-labelledby': b, children: C }),
                            }),
                        ],
                    });
                },
                aa = (0, l.forwardRef)((e, t) => (0, r.jsx)(ai, { forwardRef: t, ...e })),
                as = (e) => {
                    let { forwardRef: t, headerClassName: i, headingVariant: a, meta: s, ...l } = e;
                    return (0, r.jsx)(n.B, {
                        objectType: o.DomainObjectType.Text,
                        objectId: String(s.viewAllActionLink),
                        objectPosX: 1,
                        objectPosY: 1,
                        children: (0, r.jsx)('section', {
                            ref: t,
                            ...(0, B.OZ)(l),
                            children: (0, r.jsx)(U.T, { className: i, title: s.title, headingVariant: a, viewAllActionLink: s.viewAllActionLink }),
                        }),
                    });
                },
                ar = (0, l.forwardRef)((e, t) => (0, r.jsx)(as, { forwardRef: t, ...e }));
            var al = i(77783),
                ao = i(52632),
                an = i(41578),
                ac = i(72503),
                ad = i(91959);
            let am = (0, d.PA)((e) => {
                    let { donation: t } = e,
                        i = (0, u.D)(),
                        a = (0, an.Q)()(t.url),
                        s = (0, g.Z)(a),
                        l = (0, g.Z)(t.artist.url),
                        n = (0, p.S)(),
                        c = (0, x.c)(() => {
                            (n({ to: o.AppScreen.ArtistScreen }), l());
                        }),
                        d = (0, x.c)(() => {
                            (n({ to: o.AppScreen.Link, deepLink: a }), s());
                        }),
                        m = (0, ad.S)({ artist: t.artist, callback: c });
                    return (0, r.jsx)(ac.X, { ref: i, artist: t.artist, goal: t.goal, onNavigateToArtist: m, onNavigateToDonation: d });
                }),
                a_ = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: c,
                            meta: d,
                            data: m,
                            headingVariant: _,
                            className: u,
                            ...p
                        } = e,
                        v = (0, l.useMemo)(
                            () =>
                                !i && (null == m ? void 0 : m.items)
                                    ? m.items.map((e, t) => {
                                          let { data: i } = e;
                                          return (0, r.jsx)(
                                              n.B,
                                              {
                                                  objectType: o.DomainObjectType.Donation,
                                                  objectId: i.artist.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  children: (0, r.jsx)(am, { donation: i }),
                                              },
                                              i.artist.id,
                                          );
                                      })
                                    : (0, ao.k)(a),
                            [null == m ? void 0 : m.items, a, i],
                        );
                    return (0, r.jsx)(al.x, {
                        containerClassName: s,
                        headerClassName: c,
                        headingVariant: _,
                        className: u,
                        forwardRef: t,
                        description: d.description,
                        viewAllActionLink: d.viewAllActionLink,
                        title: d.title,
                        ...p,
                        children: v,
                    });
                },
                au = (0, l.forwardRef)((e, t) => (0, r.jsx)(a_, { forwardRef: t, ...e }));
            var ap = i(88021),
                av = i(96817),
                ab = i(53279),
                aC = i.n(ab);
            let ah = (e) => {
                    let { isActive: t, className: i } = e;
                    return (0, r.jsx)(tf.W, { isActive: t, className: (0, c.$)(aC().root, i) });
                },
                ax = (0, d.PA)((e) => {
                    let { className: t, vibe: i } = e,
                        { formatMessage: a } = (0, m.A)(),
                        { screen: s } = (0, ir.j)(),
                        o = null == s ? void 0 : s.pageIdForFrom,
                        { block: n } = (0, ir.j)(),
                        d = null == n ? void 0 : n.blockIdForFrom,
                        _ = (0, u.D)(),
                        { toggleTrue: p, toggleFalse: C, state: h } = (0, t_.e)(!1),
                        { freeAccess: x } = (0, k.g)(),
                        A = i.title.length > 26,
                        { isPlaying: T, togglePlay: N } = (0, tC.B)({ seeds: i.seeds, pageIdForFrom: o, blockIdForFrom: d }),
                        I = (0, v.g)(),
                        S = (0, l.useCallback)(
                            (e) => {
                                x.isVibeStartRestricted ||
                                    ((0, Z.P)(e, aC().ripple),
                                    p(),
                                    N()
                                        .then(() => {
                                            T || I();
                                        })
                                        .finally(C));
                            },
                            [C, p, N, T, I, x.isVibeStartRestricted],
                        ),
                        f = (0, l.useMemo)(() => {
                            var e, t;
                            return {
                                '--vibe-button-background': null == (e = i.colors) ? void 0 : e.average,
                                '--vibe-button-text-color': null == (t = i.colors) ? void 0 : t.waveText,
                            };
                        }, [i.colors]),
                        L = T ? 'pause' : 'play',
                        g = T ? b.e8.landing.VIBE_DISCOVERY_ITEM_PAUSE_ICON : b.e8.landing.VIBE_DISCOVERY_ITEM_PLAY_ICON,
                        y = (0, l.useCallback)(
                            () =>
                                (0, r.jsxs)(av.$, {
                                    style: f,
                                    withRipple: !1,
                                    withHover: !1,
                                    variant: 'text',
                                    onClick: S,
                                    className: (0, c.$)(aC().root, aC().button, { [aC().button_loading]: h }, t),
                                    ref: _,
                                    'data-test-id': b.e8.landing.VIBE_DISCOVERY_ITEM,
                                    children: [
                                        (0, r.jsx)(tu._V, {
                                            className: aC().image,
                                            withAvatarReplace: !0,
                                            withFallback: !1,
                                            src: i.backgroundImageUrl,
                                            withAspectRatio: !0,
                                            size: 400,
                                            fit: 'cover',
                                        }),
                                        (0, r.jsxs)('span', {
                                            className: aC().textContainer,
                                            children: [
                                                (0, r.jsx)(j.HL, {
                                                    className: aC().subtitle,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    weight: 'bold',
                                                    children: i.getDescription(a({ id: 'entity-names.my-vibe' })),
                                                }),
                                                (0, r.jsxs)(j.HL, {
                                                    className: (0, c.$)(aC().title, { [aC().title_long]: A }),
                                                    variant: 'span',
                                                    size: 's',
                                                    weight: 'bold',
                                                    lineClamp: 2,
                                                    children: [(0, r.jsx)(t5.I, { className: aC().icon, size: 'xxs', variant: L, 'data-test-id': g }), i.title],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            [t, a, S, g, L, A, h, _, f, i],
                        );
                    return (0, r.jsx)(th.S, {
                        isEnabled: x.isVibeStartRestricted,
                        placement: 'top',
                        textVariant: 'vibe',
                        vibeTextVariant: i.stationType,
                        renderChildren: y,
                    });
                });
            var aA = i(48840),
                aj = i.n(aA);
            let aT = (e) => {
                    let { forwardRef: t, items: i, itemClassName: a, containerClassName: s, ariaLabelledBy: l } = e;
                    return (0, r.jsx)(V.F, {
                        ref: t,
                        className: s,
                        itemClassName: (0, c.$)(aj().item, aj().important, a),
                        'aria-labelledby': l,
                        children:
                            null == i
                                ? void 0
                                : i.map((e, t) =>
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.DomainObjectType.Wave,
                                              objectId: e.stationId,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              children: (0, r.jsx)(ax, { vibe: e }),
                                          },
                                          e.stationId,
                                      ),
                                  ),
                    });
                },
                aN = (e) => {
                    let { forwardRef: t, isActive: i, itemClassName: a, containerClassName: s, ariaLabelledBy: l, length: o } = e;
                    return (0, r.jsx)(V.F, {
                        ref: t,
                        className: s,
                        itemClassName: (0, c.$)(aj().item, aj().important, a),
                        'aria-labelledby': l,
                        children: Array.from({ length: o }, (e, t) => (0, r.jsx)(ah, { isActive: i }, t)),
                    });
                },
                aI = (0, l.forwardRef)((e, t) => (0, r.jsx)(aT, { forwardRef: t, ...e })),
                aS = (0, l.forwardRef)((e, t) => (0, r.jsx)(aN, { forwardRef: t, ...e }));
            var af = i(61945),
                aL = i.n(af);
            let ag = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: o,
                            meta: n,
                            data: d,
                            className: m,
                            headingVariant: _,
                            ...u
                        } = e,
                        p = (0, l.useId)(),
                        v = (0, l.useRef)(null),
                        { shouldHideControls: b } = (0, ap.Y)(v),
                        C = !!(n.description || n.title || !b),
                        h = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, r.jsx)(aS, { isActive: a, ref: v, containerClassName: s, ariaLabelledBy: p, length: 9 })
                                    : (0, r.jsx)(aI, { ref: v, containerClassName: s, ariaLabelledBy: p, items: null == d ? void 0 : d.items }),
                            [null == d ? void 0 : d.items, a, i, s, p],
                        );
                    return (0, r.jsxs)('section', {
                        className: (0, c.$)(aL().root, m),
                        ref: t,
                        ...(0, B.OZ)(u),
                        children: [
                            C &&
                                (0, r.jsx)(U.T, {
                                    className: o,
                                    title: n.title,
                                    description: n.description,
                                    labeledForId: p,
                                    viewAllActionLink: n.viewAllActionLink,
                                    controls: (0, r.jsx)(W.X, { className: aL().controls, carouselRef: v }),
                                    headingVariant: _,
                                    withDescription: !!n.description,
                                }),
                            h,
                        ],
                    });
                },
                ay = (0, l.forwardRef)((e, t) => (0, r.jsx)(ag, { forwardRef: t, ...e }));
            var ak = i(9319),
                aR = i.n(ak);
            let aE = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: d,
                            meta: m,
                            data: _,
                            className: u,
                            headingVariant: p,
                            ...v
                        } = e,
                        b = (0, l.useId)(),
                        C = (0, l.useRef)(null),
                        { shouldHideControls: h } = (0, ap.Y)(C),
                        x = !!(m.description || m.title || !h),
                        A = (0, l.useMemo)(() => {
                            var e;
                            return i
                                ? (0, r.jsx)(V.F, {
                                      ref: C,
                                      itemClassName: (0, c.$)(aR().item, aR().important),
                                      className: s,
                                      'aria-labelledby': ''.concat(b, ' ').concat(b, '-description'),
                                      children: (0, e9.k)({ isActive: a, centered: !0 }),
                                  })
                                : (0, r.jsx)(V.F, {
                                      ref: C,
                                      itemClassName: (0, c.$)(aR().item, aR().important),
                                      className: s,
                                      'aria-labelledby': ''.concat(b, ' ').concat(b, '-description'),
                                      children:
                                          null == _ || null == (e = _.items)
                                              ? void 0
                                              : e.map((e, t) =>
                                                    (0, r.jsx)(
                                                        n.B,
                                                        {
                                                            objectType: o.DomainObjectType.Wave,
                                                            objectId: e.stationId,
                                                            objectPosX: t + 1,
                                                            objectPosY: 1,
                                                            children: (0, r.jsx)(il.y, { vibe: e }),
                                                        },
                                                        e.stationId,
                                                    ),
                                                ),
                                  });
                        }, [null == _ ? void 0 : _.items, a, i, s, b]);
                    return (0, r.jsxs)('section', {
                        className: (0, c.$)(aR().root, u),
                        ref: t,
                        ...(0, B.OZ)(v),
                        children: [
                            x &&
                                (0, r.jsx)(U.T, {
                                    className: d,
                                    title: m.title,
                                    description: m.description,
                                    labeledForId: b,
                                    viewAllActionLink: m.viewAllActionLink,
                                    controls: (0, r.jsx)(W.X, { className: aR().controls, carouselRef: C }),
                                    headingVariant: p,
                                    withDescription: !!m.description,
                                }),
                            A,
                        ],
                    });
                },
                aP = (0, l.forwardRef)((e, t) => (0, r.jsx)(aE, { forwardRef: t, ...e }));
            var aw = i(50493),
                aO = i(9523),
                aM = i.n(aO);
            let aD = (0, d.PA)((e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, headerClassName: s, meta: l, data: o, headingVariant: n, className: c, ...d } = e,
                        { artist: _ } = (0, k.g)(),
                        { formatMessage: u } = (0, m.A)(),
                        p = (0, ew.L)(() => {
                            if (!o) return;
                            let e = [];
                            return (
                                o.tracksCount && e.push(u({ id: 'entity-names.tracks-count' }, { value: o.tracksCount })),
                                o.collectionAlbumCount && e.push(u({ id: 'entity-names.albums-count' }, { value: o.collectionAlbumCount })),
                                e.join(' • ')
                            );
                        });
                    return (0, r.jsx)('section', {
                        ref: t,
                        className: c,
                        ...(0, B.OZ)(d),
                        children: (0, r.jsx)(U.T, {
                            className: s,
                            title: l.title,
                            coverUrl: 'avatars.mds.yandex.net/get-music-misc/2419084/img.65faec7dd0866004f49a38bc/%%',
                            controls: !1,
                            viewAllActionLink: null == o ? void 0 : o.href(_.id),
                            coverContainerClassName: aM().cover,
                            shimmerCoverClassName: aM().shimmerCover,
                            headingVariant: n,
                            titleLineClamp: 1,
                            withDescription: !0,
                            description: p,
                            isShimmerActive: a,
                            isShimmerVisible: i,
                        }),
                    });
                }),
                aB = (0, l.forwardRef)((e, t) => (0, r.jsx)(aD, { forwardRef: t, ...e }));
            var aV = i(44131),
                aU = i.n(aV);
            let aW = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: d,
                            meta: m,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...v
                        } = e,
                        b = (0, e4.zb)(0),
                        C = (0, l.useId)(),
                        h = (0, l.useRef)(null),
                        x = (0, l.useId)(),
                        A = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, r.jsx)(V.F, {
                                          ref: h,
                                          itemClassName: (0, c.$)(aU().item, aU().important),
                                          className: s,
                                          'aria-labelledby': ''.concat(C, ' ').concat(C, '-description'),
                                          children: (0, e9.k)({ isActive: a }),
                                      })
                                    : null == _
                                      ? void 0
                                      : _.items.map((e) =>
                                            (0, r.jsx)(
                                                e4.Kp,
                                                {
                                                    name: e.tab.id,
                                                    value: b.value,
                                                    elementId: x,
                                                    children: (0, r.jsx)(V.F, {
                                                        ref: h,
                                                        itemClassName: (0, c.$)(aU().item, aU().important),
                                                        className: s,
                                                        'aria-labelledby': ''.concat(C, ' ').concat(C, '-description'),
                                                        children: e.data.map((e, t) =>
                                                            (0, r.jsx)(
                                                                n.B,
                                                                {
                                                                    objectType: o.DomainObjectType.Album,
                                                                    objectId: String(e.id),
                                                                    objectPosX: t + 1,
                                                                    objectPosY: 1,
                                                                    children: (0, r.jsx)(eO.a, { contentLinesCount: 3, album: e }),
                                                                },
                                                                e.id,
                                                            ),
                                                        ),
                                                    }),
                                                },
                                                e.tab.id,
                                            ),
                                        ),
                            [i, null == _ ? void 0 : _.items, s, C, a, b.value, x],
                        );
                    return (0, r.jsxs)('section', {
                        className: (0, c.$)(aU().root, p),
                        ref: t,
                        ...(0, B.OZ)(v),
                        children: [
                            (0, r.jsx)(n.B, {
                                objectType: o.DomainObjectType.Shortcut,
                                objectId: String(m.viewAllActionLink),
                                objectPosX: 1,
                                objectPosY: 1,
                                children: (0, r.jsx)(U.T, {
                                    className: (0, c.$)(d, aU().header, aU().important),
                                    title: m.title,
                                    description: m.description,
                                    labeledForId: C,
                                    viewAllActionLink: m.viewAllActionLink,
                                    controls: (0, r.jsx)(W.X, { className: aU().controls, carouselRef: h }),
                                    headingVariant: u,
                                    withDescription: !!m.description,
                                }),
                            }),
                            (0, r.jsx)(e5.wI, {
                                isShimmerVisible: i,
                                className: (0, c.$)(s, aU().tabCarousel, aU().important),
                                elementId: x,
                                shimmer: (0, r.jsx)(e5.nR, { isActive: a, className: (0, c.$)(s, aU().tabCarousel, aU().important) }),
                                'aria-labelledby': C,
                                ...b,
                                children:
                                    null == _
                                        ? void 0
                                        : _.items.map((e) => {
                                              let { tab: t } = e;
                                              return (0, r.jsx)(
                                                  e3.o,
                                                  {
                                                      value: t.id,
                                                      'aria-label': t.title,
                                                      title: t.title,
                                                      covers: t.covers,
                                                      className: (0, c.$)(aU().tab, aU().important),
                                                      withCovers: !0,
                                                  },
                                                  t.id,
                                              );
                                          }),
                            }),
                            A,
                        ],
                    });
                }),
                aH = (0, l.forwardRef)((e, t) => (0, r.jsx)(aW, { forwardRef: t, ...e }));
            var az = i(85614),
                aK = i(38487),
                aY = i.n(aK);
            let aF = (e) => {
                    var t;
                    let { containerClassName: i, meta: a, data: s, forwardRef: o, isShimmerVisible: n, isShimmerActive: c, headingVariant: d } = e,
                        m = (0, l.useMemo)(() => {
                            if (n) {
                                var e;
                                return (0, az.q)({
                                    className: aY().root,
                                    shimmerClassName: aY().shimmer,
                                    isActive: c,
                                    count: (null == (e = a.source) ? void 0 : e.countWeb) || 10,
                                    minWidth: 30,
                                    maxWidth: 70,
                                });
                            }
                            return (0, r.jsx)('div', {
                                className: aY().root,
                                children:
                                    null == s
                                        ? void 0
                                        : s.items.map((e) =>
                                              (0, r.jsx)(
                                                  U.T,
                                                  { titleLineClamp: 1, title: e.data.title, viewAllActionLink: e.data.viewAllActionLink, headingVariant: d },
                                                  e.key,
                                              ),
                                          ),
                            });
                        }, [null == s ? void 0 : s.items, d, c, n, null == (t = a.source) ? void 0 : t.countWeb]);
                    return (0, r.jsx)('section', { ref: o, title: a.title, className: i, 'data-test-id': b.e8.landing.ITEM_LIST, children: m });
                },
                a$ = (0, l.forwardRef)((e, t) => (0, r.jsx)(aF, { forwardRef: t, ...e }));
            var aX = i(61543),
                aG = i.n(aX),
                aZ = i(95631),
                aq = i.n(aZ);
            let aQ = (0, d.PA)((e) => {
                    let { title: t, subtitle: i, link: a, testId: s, icon: o, covers: n, navigateTo: c } = e,
                        {
                            settings: { isMobile: d },
                        } = (0, k.g)(),
                        m = (0, p.S)(),
                        _ = (0, u.D)(),
                        v = (0, l.useMemo)(() => {
                            if (0 !== n.length)
                                return (0, r.jsx)('div', {
                                    className: aq().covers,
                                    children: n.map((e, t) =>
                                        (0, r.jsx)(
                                            A.t,
                                            {
                                                className: aq().coverContainer,
                                                radius: 'xs',
                                                'data-test-id': b.e8.landing.LIKES_HISTORY_COVERS,
                                                children: (0, r.jsx)(tu._V, { size: 80, className: aq().cover, src: e.uri, fit: 'cover', withAvatarReplace: !0 }),
                                            },
                                            t,
                                        ),
                                    ),
                                });
                        }, [n]),
                        C = (0, l.useCallback)(() => {
                            m({ to: c });
                        }, [c, m]);
                    return (0, r.jsx)('div', {
                        ref: _,
                        className: aq().root,
                        'data-test-id': s,
                        children: (0, r.jsxs)(P.N, {
                            className: aq().link,
                            href: a,
                            onClick: C,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: aq().start,
                                    children: [
                                        o,
                                        (0, r.jsxs)('div', {
                                            className: aq().textContainer,
                                            children: [
                                                (0, r.jsxs)(j.DZ, {
                                                    className: aq().title,
                                                    size: d ? 'xs' : 'm',
                                                    variant: 'h2',
                                                    'data-test-id': b.e8.landing.LIKES_HISTORY_TITLE,
                                                    children: [t, (0, r.jsx)(t5.I, { className: aq().titleIcon, size: 'xs', variant: 'arrowRight' })],
                                                }),
                                                (0, r.jsx)(j.HL, {
                                                    className: aq().subtitle,
                                                    size: 'm',
                                                    variant: 'div',
                                                    lineClamp: 1,
                                                    'data-test-id': b.e8.landing.LIKES_HISTORY_SUBTITLE,
                                                    children: i,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                v,
                            ],
                        }),
                    });
                }),
                aJ = (e) => {
                    let { isActive: t } = e;
                    return (0, r.jsx)(tf.W, { isActive: t, className: aq().root, height: 82 });
                },
                a0 = (e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, data: s, ...c } = e,
                        { formatMessage: d } = (0, m.A)(),
                        _ = (0, l.useMemo)(() => {
                            var e;
                            return (null == s ? void 0 : s.favorites) && s.history && !i
                                ? [
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.DomainObjectType.Playlist,
                                              objectId: null != (e = s.favorites.id) ? e : '',
                                              objectPosX: 1,
                                              objectPosY: 1,
                                              children: (0, r.jsx)(aQ, {
                                                  title: s.favorites.title,
                                                  subtitle: d({ id: 'entity-names.number-of-tracks' }, { counter: s.favorites.count }),
                                                  link: s.favorites.url,
                                                  navigateTo: o.AppScreen.PlaylistScreen,
                                                  testId: b.e8.landing.LIKES_BLOCK,
                                                  icon: (0, r.jsx)(A.t, {
                                                      className: aG().favoritesCoverContainer,
                                                      radius: 'm',
                                                      children: (0, r.jsx)(tu._V, {
                                                          className: aG().favoritesCover,
                                                          size: 80,
                                                          src: s.favorites.cover.uri,
                                                          fit: 'cover',
                                                          withAvatarReplace: !0,
                                                          alt: s.favorites.title,
                                                      }),
                                                  }),
                                                  covers: s.favorites.trackCovers,
                                              }),
                                          },
                                          s.favorites.id,
                                      ),
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.DomainObjectType.Shortcut,
                                              objectId: s.history.id,
                                              objectPosX: 2,
                                              objectPosY: 1,
                                              children: (0, r.jsx)(aQ, {
                                                  title: s.history.title,
                                                  subtitle: s.history.artists.join(', '),
                                                  link: s.history.url,
                                                  navigateTo: o.AppScreen.MusicHistoryScreen,
                                                  testId: b.e8.landing.HISTORY_BLOCK,
                                                  icon: (0, r.jsx)(A.t, {
                                                      className: aG().historyIconContainer,
                                                      radius: 'm',
                                                      children: (0, r.jsx)(t5.I, { className: aG().historyIcon, variant: 'history', size: 'm' }),
                                                  }),
                                                  covers: s.history.trackCovers,
                                              }),
                                          },
                                          s.history.id,
                                      ),
                                  ]
                                : [(0, r.jsx)(aJ, { isActive: a }, 0), (0, r.jsx)(aJ, { isActive: a }, 1)];
                        }, [null == s ? void 0 : s.favorites, null == s ? void 0 : s.history, i, d, a]);
                    return (0, r.jsx)('section', {
                        ref: t,
                        className: aG().root,
                        ...(0, B.OZ)(c),
                        children: (0, r.jsx)(V.F, { className: aG().carousel, itemClassName: aG().carouselItem, children: _ }),
                    });
                },
                a1 = (0, l.forwardRef)((e, t) => (0, r.jsx)(a0, { forwardRef: t, ...e }));
            var a8 = i(84273),
                a2 = i(64843),
                a4 = i.n(a2);
            let a9 = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        meta: o,
                        data: n,
                        headingVariant: c,
                        className: d,
                        ...m
                    } = e;
                    return (0, r.jsx)(eq.O, {
                        className: d,
                        ...m,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        title: o.title,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        itemClassName: a4().item,
                        showShimmerInfo: !1,
                        ref: t,
                        headingVariant: c,
                        'data-test-id': b.e8.landing.MIXES_BLOCK,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e) =>
                                      (0, r.jsx)(
                                          a8.N,
                                          { title: e.title, weblink: e.weblink, covers: e.covers, imagesLayoutType: e.imagesLayoutType, headingVariant: 'h3' },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                a3 = (0, l.forwardRef)((e, t) => (0, r.jsx)(a9, { forwardRef: t, ...e }));
            var a5 = i(32094),
                a6 = i(1698),
                a7 = i(48711),
                se = i.n(a7);
            let st = (e) => {
                    var t;
                    let {
                            forwardRef: i,
                            headerClassName: a,
                            meta: s,
                            data: d,
                            headingVariant: m,
                            isShimmerActive: _,
                            containerClassName: u,
                            isShimmerVisible: p,
                            className: v,
                            ...b
                        } = e,
                        C = (0, l.useId)(),
                        h = (0, l.useMemo)(() => {
                            if (p) {
                                var e;
                                return (0, r.jsx)(a6.e, {
                                    itemClassName: (0, c.$)(se().item, se().important, se().shimmerWithSubcover),
                                    isActive: _,
                                    centered: !0,
                                    withInfo: !0,
                                    withSubcover: !0,
                                    count: null == (e = s.source) ? void 0 : e.count,
                                });
                            }
                            return null == d
                                ? void 0
                                : d.items.map((e, t) =>
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.DomainObjectType.Shortcut,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              children: (0, r.jsx)(
                                                  a5.V,
                                                  {
                                                      linkClassName: (0, c.$)(se().item, se().important),
                                                      title: e.title,
                                                      weblink: e.weblink,
                                                      covers: e.covers,
                                                      captionVariant: 'h3',
                                                  },
                                                  e.id,
                                              ),
                                          },
                                          e.id,
                                      ),
                                  );
                        }, [_, p, null == d ? void 0 : d.items, null == (t = s.source) ? void 0 : t.count]);
                    return (0, r.jsxs)('section', {
                        ref: i,
                        className: v,
                        ...(0, B.OZ)(b),
                        children: [
                            (0, r.jsx)(U.T, {
                                className: (0, c.$)(se().header, a),
                                labeledForId: C,
                                title: s.title,
                                viewAllActionLink: s.viewAllActionLink,
                                headingVariant: m,
                            }),
                            (0, r.jsx)('div', { className: (0, c.$)(se().mixesGrid, u), children: h }),
                        ],
                    });
                },
                si = (0, l.forwardRef)((e, t) => (0, r.jsx)(st, { forwardRef: t, ...e }));
            var sa = i(41927),
                ss = i.n(sa);
            let sr = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        meta: c,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, r.jsx)(eq.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        isShimmerWithSubcover: !0,
                        isShimmerCentered: !0,
                        shimmerClassName: ss().shimmer,
                        containerClassName: s,
                        headerClassName: l,
                        title: c.title,
                        description: c.description,
                        viewAllActionLink: c.viewAllActionLink,
                        itemClassName: ss().item,
                        showShimmerInfo: !0,
                        ref: t,
                        headingVariant: m,
                        'data-test-id': b.e8.landing.MIXES_MUSIC,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) =>
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.DomainObjectType.Shortcut,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              children: (0, r.jsx)(
                                                  a5.V,
                                                  { linkClassName: ss().item, title: e.title, weblink: e.weblink, covers: e.covers, captionVariant: 'h3' },
                                                  e.id,
                                              ),
                                          },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                sl = (0, l.forwardRef)((e, t) => (0, r.jsx)(sr, { forwardRef: t, ...e }));
            var so = i(52461),
                sn = i.n(so),
                sc = i(51128),
                sd = i.n(sc);
            let sm = (e) => {
                    let { isActive: t } = e;
                    return (0, r.jsx)(tf.W, { isActive: t, className: sd().root });
                },
                s_ = (0, d.PA)((e) => {
                    var t, i;
                    let { neuromusic: a } = e,
                        { from: s } = (0, S.f)(),
                        { isPlaying: o, togglePlay: n } = (0, y.D)({
                            playContextParams: { contextData: { type: C.K.Generative, meta: { id: a.stationId }, from: s }, loadContextMeta: !0 },
                        }),
                        d = (0, l.useCallback)(
                            (e) => {
                                ((0, Z.P)(e, sd().ripple), n());
                            },
                            [n],
                        ),
                        m = (0, l.useMemo)(() => {
                            var e, t;
                            return {
                                '--neuromusic-button-background': null == a || null == (e = a.style) ? void 0 : e.backgroundColor,
                                '--neuromusic-button-color': null == a || null == (t = a.style) ? void 0 : t.titleColor,
                            };
                        }, [null == a || null == (t = a.style) ? void 0 : t.backgroundColor, null == a || null == (i = a.style) ? void 0 : i.titleColor]),
                        _ = o ? b.e8.landing.NEUROMUSIC_BLOCK_ITEM_PAUSE_ICON : b.e8.landing.NEUROMUSIC_BLOCK_ITEM_PLAY_ICON;
                    return (0, r.jsx)(av.$, {
                        style: m,
                        withRipple: !1,
                        withHover: !1,
                        variant: 'text',
                        onClick: d,
                        className: (0, c.$)(sd().root, sd().button),
                        'data-test-id': b.e8.landing.NEUROMUSIC_BLOCK_ITEM,
                        children: (0, r.jsxs)('div', {
                            className: sd().textContainer,
                            children: [
                                (0, r.jsx)(t5.I, { className: sd().icon, size: 'xxs', variant: o ? 'pause' : 'play', 'data-test-id': _ }),
                                (0, r.jsx)(j.HL, { className: sd().title, variant: 'span', size: 's', weight: 'bold', lineClamp: 1, children: a.title }),
                            ],
                        }),
                    });
                }),
                su = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: o,
                            meta: n,
                            data: d,
                            className: m,
                            headingVariant: _,
                            ...u
                        } = e,
                        p = (0, l.useId)(),
                        v = (0, l.useRef)(null),
                        b = (0, l.useMemo)(
                            () =>
                                i
                                    ? Array.from({ length: 3 }, (e, t) => (0, r.jsx)(sm, { isActive: a }, t))
                                    : null == d
                                      ? void 0
                                      : d.items.map((e, t) => (0, r.jsx)(s_, { neuromusic: e }, t)),
                            [null == d ? void 0 : d.items, a, i],
                        );
                    return (0, r.jsxs)('section', {
                        ref: t,
                        className: (0, c.$)(sn().root, m),
                        ...(0, B.OZ)(u),
                        children: [
                            (0, r.jsx)(U.T, {
                                className: o,
                                labeledForId: p,
                                title: n.title,
                                description: n.description,
                                controls: (0, r.jsx)(W.X, { className: sn().controls, carouselRef: v }),
                                headingVariant: _,
                                withDescription: !!n.description,
                            }),
                            (0, r.jsx)(V.F, { ref: v, itemClassName: (0, c.$)(sn().item, sn().important), className: s, 'aria-labelledby': p, children: b }),
                        ],
                    });
                },
                sp = (0, l.forwardRef)((e, t) => (0, r.jsx)(su, { forwardRef: t, ...e }));
            var sv = i(29008),
                sb = i(57934),
                sC = i(56446),
                sh = i(19038);
            let sx = /^#[a-fA-F\d]{2}[a-fA-F\d]{2}[a-fA-F\d]{2}$/i;
            var sA = i(63650),
                sj = i.n(sA);
            let sT = (e) => {
                    let { artistId: t, artistName: i, artistUrl: a, objectPosX: s, onNavigate: l } = e,
                        c = (0, p.S)(),
                        d = (0, x.c)((e) => {
                            (c({ to: o.AppScreen.ArtistScreen }), l(e));
                        });
                    return (0, r.jsx)(n.B, {
                        objectType: o.DomainObjectType.Artist,
                        objectId: t,
                        objectPosX: s,
                        objectPosY: 1,
                        children: (0, r.jsx)(P.N, { className: sj().fade, 'aria-label': i, href: a, onClick: d }),
                    });
                },
                sN = (0, d.PA)((e) => {
                    var t, i, a, s;
                    let { album: n, releaseDate: c, coverColor: d, coverUri: _, objectPosX: p } = e,
                        v = null == n || null == (t = n.artists) ? void 0 : t[0],
                        { formatDate: h } = (0, m.A)(),
                        { trailer: T } = (0, k.g)(),
                        f = (0, u.D)(),
                        L = (0, g.Z)(null != (a = null == v ? void 0 : v.url) ? a : ''),
                        y = (0, ad.S)({ artist: v, callback: L }),
                        E = (0, sb.F)(),
                        P = (0, sv.r)(n.type),
                        w = (0, I.P)(),
                        { from: O, utmLink: M } = (0, S.f)({ contextId: n.id, contextType: C.K.Album }),
                        D = (0, x.c)((e) => {
                            if (w()) {
                                (e.stopPropagation(), e.preventDefault());
                                return;
                            }
                            (null == n ? void 0 : n.id) && (e.stopPropagation(), T.openAlbumTrailer(n.id), E(o.DomainObjectType.Album, String(n.id)));
                        }),
                        V = (0, l.useMemo)(() => {
                            var e;
                            if (null == n || null == (e = n.trailer) ? void 0 : e.isAvailable)
                                return (0, r.jsx)(sh.L, {
                                    children: (0, r.jsx)(sC.k, { variant: 'text', iconSize: 'xs', className: sj().trailerButton, withRipple: !1, onClick: D }),
                                });
                        }, [null == n || null == (i = n.trailer) ? void 0 : i.isAvailable, D]),
                        U = (0, l.useMemo)(() => {
                            if (c)
                                return (0, r.jsxs)(j.HL, {
                                    variant: 'span',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    className: sj().descriptionContainer,
                                    children: [
                                        (0, r.jsx)(j.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: P.toLowerCase() }),
                                        (0, r.jsx)(j.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                                        (0, r.jsx)(j.HL, {
                                            variant: 'span',
                                            type: 'text',
                                            size: 's',
                                            weight: 'medium',
                                            children: h(new Date(c), { day: 'numeric', month: 'long' }),
                                        }),
                                    ],
                                });
                        }, [P, h, c]);
                    return (0, r.jsxs)('div', {
                        className: sj().root,
                        ref: f,
                        children: [
                            (0, r.jsxs)('div', {
                                className: sj().cover,
                                children: [
                                    (0, r.jsxs)(A.t, {
                                        className: sj().coverImage,
                                        radius: 'round',
                                        withShadow: !0,
                                        children: [
                                            (0, r.jsx)(R.B, {
                                                className: sj().image,
                                                src: _,
                                                alt: null == v ? void 0 : v.name,
                                                size: 300,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                                'aria-hidden': !0,
                                            }),
                                            (0, r.jsx)('div', {
                                                className: sj().fade,
                                                style: {
                                                    background: ((e) => {
                                                        (e && sx.test(e)) || (e = '#000000');
                                                        let { r: t, g: i, b: a } = (0, B.E2)(e);
                                                        return 'linear-gradient(180.14deg, rgba('
                                                            .concat(t, ', ')
                                                            .concat(i, ', ')
                                                            .concat(a, ', 0) 30.88%, rgba(')
                                                            .concat(t, ', ')
                                                            .concat(i, ', ')
                                                            .concat(a, ', 0.4) 70.8%, rgba(')
                                                            .concat(t, ', ')
                                                            .concat(i, ', ')
                                                            .concat(a, ', 0.9) 80.88%)');
                                                    })(null == n ? void 0 : n.averageColor),
                                                },
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(sT, {
                                        artistId: String(null != (s = null == v ? void 0 : v.id) ? s : ''),
                                        artistName: null == v ? void 0 : v.name,
                                        artistUrl: null == v ? void 0 : v.url,
                                        objectPosX: p,
                                        onNavigate: y,
                                    }),
                                    (0, r.jsx)(N.i, {
                                        className: sj().artists,
                                        lineClamp: 2,
                                        artists: null == n ? void 0 : n.artists,
                                        linkClassName: sj().artistLink,
                                        captionClassName: sj().artistCaption,
                                        variant: 'breakWord',
                                    }),
                                ],
                            }),
                            (0, r.jsx)(ee, {
                                className: sj().card,
                                album: n,
                                albumUrl: n.url,
                                from: O,
                                utmLink: M,
                                trailerButton: V,
                                description: U,
                                entityName: P,
                                coverColor: d,
                                'data-test-id': b.Kq.newRelease.NEW_RELEASE_CARD,
                            }),
                        ],
                    });
                });
            var sI = i(16559),
                sS = i.n(sI);
            let sf = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerActive: i,
                            isShimmerVisible: a,
                            containerClassName: s,
                            headerClassName: d,
                            meta: m,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...v
                        } = e,
                        b = (0, l.useId)(),
                        C = (0, l.useRef)(null),
                        { theme: h } = (0, ij.W)(),
                        x = (0, l.useMemo)(
                            () =>
                                a
                                    ? ((e) =>
                                          Array.from({ length: 6 }, (t, i) =>
                                              (0, r.jsxs)(
                                                  'div',
                                                  {
                                                      children: [
                                                          (0, r.jsx)(tf.W, { isActive: e, radius: 'round', className: sS().shimmerImage }),
                                                          (0, r.jsx)(tf.W, { isActive: e, radius: 'l', className: sS().shimmerCard }),
                                                      ],
                                                  },
                                                  i,
                                              ),
                                          ))(i)
                                    : null == _
                                      ? void 0
                                      : _.items.map((e, t) => {
                                            let i = e.coverUriWithPlaceholder(h);
                                            return (0, r.jsx)(
                                                n.B,
                                                {
                                                    objectType: o.DomainObjectType.Album,
                                                    objectId: String(e.album.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    children: (0, r.jsx)(sN, { ...e, coverUri: i, objectPosX: t + 1 }),
                                                },
                                                e.album.id,
                                            );
                                        }),
                            [null == _ ? void 0 : _.items, i, a, h],
                        );
                    return (0, r.jsxs)('section', {
                        ref: t,
                        className: (0, c.$)(sS().root, p),
                        ...(0, B.OZ)(v),
                        children: [
                            (0, r.jsx)(n.B, {
                                objectType: o.DomainObjectType.Shortcut,
                                objectId: String(m.viewAllActionLink),
                                objectPosX: 1,
                                objectPosY: 1,
                                children: (0, r.jsx)(U.T, {
                                    className: d,
                                    labeledForId: b,
                                    title: m.title,
                                    viewAllActionLink: m.viewAllActionLink,
                                    controls: (0, r.jsx)(W.X, { className: sS().controls, carouselRef: C }),
                                    headingVariant: u,
                                }),
                            }),
                            (0, r.jsx)(V.F, { ref: C, itemClassName: (0, c.$)(sS().item, sS().important), className: s, 'aria-labelledby': b, children: x }),
                        ],
                    });
                }),
                sL = (0, l.forwardRef)((e, t) => (0, r.jsx)(sf, { forwardRef: t, ...e })),
                sg = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        meta: c,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, r.jsx)(eq.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: l,
                        containerClassName: s,
                        title: c.title,
                        description: c.description,
                        viewAllActionLink: c.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) =>
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.DomainObjectType.Album,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              children: (0, r.jsx)(eO.a, { album: e, contentLinesCount: 3, withLikesCount: !0, withChart: !0, withAddition: !1 }),
                                          },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                sy = (0, l.forwardRef)((e, t) => (0, r.jsx)(sg, { forwardRef: t, ...e })),
                sk = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        meta: c,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, r.jsx)(eq.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: l,
                        containerClassName: s,
                        title: c.title,
                        description: c.description,
                        viewAllActionLink: c.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) =>
                                      e.type === e2._.NON_MUSIC_ALBUM_ITEM
                                          ? (0, r.jsx)(
                                                n.B,
                                                {
                                                    objectType: o.DomainObjectType.Album,
                                                    objectId: String(e.data.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    children: (0, r.jsx)(eO.a, { album: e.data, contentLinesCount: 3, withLikesCount: !0 }),
                                                },
                                                e.data.id,
                                            )
                                          : (0, r.jsx)(
                                                n.B,
                                                {
                                                    objectType: o.DomainObjectType.Playlist,
                                                    objectId: String(e.data.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    children: (0, r.jsx)(tU.B, { playlist: e.data, contentLinesCount: 3 }),
                                                },
                                                e.data.id,
                                            ),
                                  ),
                    });
                },
                sR = (0, l.forwardRef)((e, t) => (0, r.jsx)(sk, { forwardRef: t, ...e }));
            var sE = i(32506),
                sP = i(69463),
                sw = i.n(sP);
            let sO = (e) => {
                    let { forwardRef: t, containerClassName: i, id: a, meta: s, ...l } = e,
                        { formatMessage: d } = (0, m.A)();
                    return (0, r.jsx)('section', {
                        ref: t,
                        className: (0, c.$)(sw().root, i),
                        ...(0, B.OZ)(l),
                        children: (0, r.jsx)(
                            n.B,
                            {
                                objectType: o.DomainObjectType.Text,
                                objectId: a,
                                objectPosX: 1,
                                objectPosY: 1,
                                children: (0, r.jsx)(sE.F, { textButton: d({ id: 'interface-actions.further' }), meta: s }),
                            },
                            a,
                        ),
                    });
                },
                sM = (0, l.forwardRef)((e, t) => (0, r.jsx)(sO, { forwardRef: t, ...e })),
                sD = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        meta: c,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, r.jsx)(eq.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: l,
                        containerClassName: s,
                        title: c.title,
                        description: c.description,
                        viewAllActionLink: c.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) =>
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.DomainObjectType.Playlist,
                                              objectId: e.data.playlist.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              children: (0, r.jsx)(tU.B, { playlist: e.data.playlist, customDescription: e.data.description, contentLinesCount: 4 }),
                                          },
                                          e.data.playlist.key,
                                      ),
                                  ),
                    });
                },
                sB = (0, l.forwardRef)((e, t) => (0, r.jsx)(sD, { forwardRef: t, ...e }));
            var sV = i(31893),
                sU = i(82457),
                sW = i(76843);
            let sH = (e) => {
                    let { items: t, playlistId: i, playlistUuid: a, from: s, utmLink: l } = e;
                    return t.slice(0, 8).map((e, c) => {
                        let d,
                            { objectPosX: m, objectPosY: _ } = (0, ep.$)({ index: c, count: t.length }),
                            u =
                                ((d = e.id),
                                {
                                    contextData: { type: C.K.Playlist, meta: { id: i, uuid: a }, from: s, utmLink: l, completeEntitesDataByLoadedMeta: !0 },
                                    queueParams: { index: c, entityId: d },
                                    loadContextMeta: !0,
                                    entitiesData: t.map((e) => (0, sU.l)(e.id, e.albumId ? String(e.albumId) : void 0)),
                                });
                        return (0, r.jsx)(
                            n.B,
                            {
                                objectType: o.DomainObjectType.Track,
                                objectId: e.id,
                                objectPosX: m,
                                objectPosY: _,
                                children: e.isTrackNonMusic
                                    ? (0, r.jsx)(sW.K, { track: e, playContextParams: u, withPodcastName: !0, withTimeLeftText: !1 })
                                    : (0, r.jsx)(eI.K, { track: e, playContextParams: u }),
                            },
                            e.id,
                        );
                    });
                },
                sz = { src: '/_next/static/media/heart.602389ae.png' };
            var sK = i(64621),
                sY = i.n(sK);
            let sF = (0, d.PA)(() => {
                var e, t;
                let { vibe: i, freeAccess: a, experiments: s } = (0, k.g)(),
                    { screen: o, block: n } = (0, ir.j)(),
                    c = null == o ? void 0 : o.pageIdForFrom,
                    { blockIdForFrom: d } = null != n ? n : {},
                    u = (0, g.Z)(iu.Z.main.href),
                    { formatMessage: p } = (0, m.A)(),
                    v = p({ id: 'vibe-actions.play-vibe' }),
                    C = !s.checkExperiment(ev.z.WebNextProductWithoutRecommendation, 'on'),
                    { isPlaying: h, togglePlay: x } = (0, tC.B)({
                        seeds: null != (t = null == (e = i.meta) ? void 0 : e.seeds) ? t : [],
                        pageIdForFrom: c,
                        blockIdForFrom: d,
                    });
                (0, l.useEffect)(
                    () => () => {
                        i.reset();
                    },
                    [i],
                );
                let A = (0, l.useCallback)(() => {
                        a.isVibeStartRestricted || (h || x(), u());
                    }, [a.isVibeStartRestricted, h, u, x]),
                    T = (0, l.useCallback)(
                        () =>
                            (0, r.jsx)(av.$, {
                                withRipple: !0,
                                radius: 'xxxl',
                                size: 'l',
                                color: 'primary',
                                className: sY().myWaveButton,
                                'aria-label': v,
                                onClick: A,
                                'data-test-id': b.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_MY_VIBE_BUTTON,
                                children: (0, r.jsx)(j.HL, {
                                    variant: 'span',
                                    size: 'm',
                                    children: (0, r.jsx)(j.HL, { variant: 'span', size: 'm', weight: 'medium', className: sY().myWaveButtonText, children: v }),
                                }),
                            }),
                        [v, A],
                    );
                return (
                    C && i.isNeededToLoad && (0, l.use)(i.getLastVibe()),
                    (0, r.jsxs)('div', {
                        className: sY().root,
                        'data-test-id': b.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK,
                        children: [
                            (0, r.jsx)(tu._V, { src: sz.src, className: sY().image, 'data-test-id': b.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_IMAGE }),
                            (0, r.jsx)(j.DZ, {
                                variant: 'h3',
                                size: 'xs',
                                className: sY().header,
                                'data-test-id': b.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_TITLE,
                                children: (0, r.jsx)(_.A, { id: 'collection.empty-liked-tracks-title' }),
                            }),
                            (0, r.jsx)(j.HL, {
                                variant: 'div',
                                size: 'l',
                                weight: 'normal',
                                className: sY().text,
                                'data-test-id': b.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_TEXT,
                                children: (0, r.jsx)(_.A, { id: 'collection.empty-liked-tracks-text' }),
                            }),
                            C && (0, r.jsx)(th.S, { isEnabled: a.isVibeStartRestricted, placement: 'top', textVariant: 'vibe', renderChildren: T }),
                        ],
                    })
                );
            });
            var s$ = i(51417),
                sX = i.n(s$);
            let sG = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            tracksContainerClassName: n,
                            headerClassName: d,
                            meta: u,
                            data: p,
                            type: v,
                            headingVariant: b,
                            className: h,
                            ...x
                        } = e,
                        { from: A, utmLink: j } = (0, S.f)({ contextId: null == p ? void 0 : p.playlist.id, contextType: C.K.Playlist }),
                        {
                            trailer: T,
                            settings: { isMobile: N },
                        } = (0, k.g)(),
                        I = (0, sb.F)(),
                        { formatMessage: f } = (0, m.A)(),
                        L = (0, eK.i)({ playlistId: null == p ? void 0 : p.playlist.id }),
                        g = (null == p ? void 0 : p.totalItemsCount)
                            ? f({ id: 'entity-names.number-of-tracks' }, { counter: null == p ? void 0 : p.totalItemsCount })
                            : u.description,
                        y = [s.t.COLLECTION_PLAYLIST_WITH_LIKES, s.t.SMART_OPEN_PLAYLIST].includes(v),
                        R = u.coverStyle !== sV.z.NONE,
                        E = (0, l.useCallback)(() => {
                            (null == p ? void 0 : p.playlist.id) &&
                                (T.setUtmLink(j), T.openPlaylistTrailer(null == p ? void 0 : p.playlist.id), I(o.DomainObjectType.Playlist, String(p.playlist.id)));
                        }, [T, null == p ? void 0 : p.playlist.id, I, j]),
                        P = (0, l.useMemo)(() => {
                            if (null == p ? void 0 : p.withRewindTrailerButton)
                                return N
                                    ? (0, r.jsx)(sC.k, { className: sX().trailer, radius: 'round', size: 's', iconSize: 'xs', onClick: E })
                                    : (0, r.jsx)(sC.k, {
                                          size: 's',
                                          radius: 'xxxl',
                                          iconSize: 'xxs',
                                          className: sX().trailer,
                                          onClick: E,
                                          children: (0, r.jsx)(_.A, { id: 'entity-names.trailer' }),
                                      });
                        }, [null == p ? void 0 : p.withRewindTrailerButton, N, E]);
                    return (null == p ? void 0 : p.playlist.isFavouritePlaylist) &&
                        (null == p ? void 0 : p.totalItemsCount) === 0 &&
                        (null == p ? void 0 : p.canShowEmptyBlock)
                        ? (0, r.jsx)(sF, {})
                        : (0, r.jsx)(ez._, {
                              sourceContextData: L,
                              children: (0, r.jsx)(ef.$, {
                                  isShimmerActive: a,
                                  shimmer: (0, r.jsx)(eL.D, { variant: eS.X.PLAYLIST, isActive: a }),
                                  maxColumnsCount: ef.D.TWO,
                                  itemsCountPerColumn: 4,
                                  className: (0, c.$)(sX().root, h),
                                  isShimmerVisible: i,
                                  blockHeaderClassName: d,
                                  carouselClassName: n,
                                  blockHeaderTitle: u.title,
                                  blockHeaderCoverUrl: null == p ? void 0 : p.getCoverUri(u.coverStyle),
                                  blockHeaderDescription: g,
                                  viewAllActionLink: null == p ? void 0 : p.playlist.url,
                                  ref: t,
                                  blockHeaderHeadingVariant: b,
                                  additionalControl: P,
                                  withBlockHeaderDescription: y,
                                  withBlockHeaderCover: R,
                                  ...x,
                                  children:
                                      (null == p ? void 0 : p.items) &&
                                      sH({ items: p.items, playlistId: p.playlist.id, playlistUuid: p.playlist.uuid, from: A, utmLink: j }),
                              }),
                          });
                }),
                sZ = (0, l.forwardRef)((e, t) => (0, r.jsx)(sG, { forwardRef: t, ...e }));
            var sq = i(77309),
                sQ = i(69117),
                sJ = i(6269),
                s0 = i.n(sJ);
            let s1 = (0, d.PA)((e) => {
                    var t, i;
                    let {
                            forwardRef: a,
                            isShimmerVisible: s,
                            isShimmerActive: o,
                            tracksContainerClassName: n,
                            headerClassName: c,
                            meta: d,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...v
                        } = e,
                        { formatMessage: b } = (0, m.A)(),
                        { from: h, utmLink: A } = (0, S.f)({ contextId: null == _ ? void 0 : _.playlist.id, contextType: C.K.Playlist }),
                        j = (0, eK.i)({ playlistId: null == _ ? void 0 : _.playlist.id, filter: null == _ ? void 0 : _.filters.activeFilter }),
                        T = (0, e4.zb)((null == _ ? void 0 : _.filters.activeFilterIndex) || 0),
                        N = (0, l.useRef)(null),
                        I = (0, sq.M)(),
                        f = (null == _ ? void 0 : _.totalItemsCount) ? b({ id: 'entity-names.number-of-tracks' }, { counter: _.totalItemsCount }) : d.description,
                        L = (0, x.c)((e) => {
                            var t;
                            if (!T.onTabChange || e === T.value || !_) return;
                            (setTimeout(() => {
                                var t, i, a;
                                null == (a = N.current) || null == (i = a.children[e]) || null == (t = i.focus) || t.call(i);
                            }),
                                T.onTabChange(e));
                            let i = null == (t = _.filters.items) ? void 0 : t[e];
                            i && (_.handleFilterClick(i), I({ tabId: i.id, tabPos: e + 1 }));
                        });
                    if (((null == _ ? void 0 : _.playlistLoading.isNeededToLoad) && (0, l.use)(_.getPlaylist()), null == _ ? void 0 : _.shouldShowEmptyPlaylist))
                        return (0, r.jsx)(sF, {});
                    let g = o || !!(null == _ ? void 0 : _.isLoading),
                        y = s || !!(null == _ ? void 0 : _.isLoading) || !!(null == _ ? void 0 : _.isRejected),
                        k = _ && 0 === _.items.length,
                        R = !!(null == _ || null == (t = _.filters.items) ? void 0 : t.length),
                        E = !_ || (null == _ ? void 0 : _.isLoading) || (null == _ || null == (i = _.filters) ? void 0 : i.isShimmerVisible) || k || R,
                        P = (0, ew.L)(() => {
                            var e, t, i, a;
                            if (E)
                                return (0, r.jsx)(sQ.A, {
                                    className: s0().filters,
                                    tabsState: T,
                                    handleFilterClick: L,
                                    ref: N,
                                    items: null != (a = null == _ || null == (e = _.filters) ? void 0 : e.items) ? a : void 0,
                                    isShimmerVisible: null == _ || null == (t = _.filters) ? void 0 : t.isShimmerVisible,
                                    isShimmerActive: null == _ || null == (i = _.filters) ? void 0 : i.isLoading,
                                    skipSearchCheck: !0,
                                    shimmerClassName: s0().shimmer,
                                });
                        });
                    return (0, r.jsx)(ez._, {
                        sourceContextData: j,
                        children: (0, r.jsx)(ef.$, {
                            isShimmerActive: g,
                            shimmer: (0, r.jsx)(eL.D, { variant: eS.X.PLAYLIST, isActive: g }),
                            maxColumnsCount: ef.D.TWO,
                            itemsCountPerColumn: 4,
                            className: p,
                            isShimmerVisible: s,
                            isColumnsShimmerVisible: y,
                            isHeaderWithoutControls: !0,
                            blockHeaderClassName: c,
                            carouselClassName: n,
                            blockHeaderTitle: d.title,
                            blockHeaderCoverUrl: d.coverUri,
                            blockHeaderDescription: f,
                            viewAllActionLink: null == _ ? void 0 : _.playlist.url,
                            ref: a,
                            blockHeaderHeadingVariant: u,
                            withBlockHeaderDescription: !0,
                            withBlockHeaderCover: d.coverStyle !== sV.z.NONE,
                            beforeCarousel: P,
                            ...v,
                            children:
                                (null == _ ? void 0 : _.items) && sH({ items: _.items, playlistId: _.playlist.id, playlistUuid: _.playlist.uuid, from: h, utmLink: A }),
                        }),
                    });
                }),
                s8 = (0, l.forwardRef)((e, t) => (0, r.jsx)(s1, { forwardRef: t, ...e }));
            var s2 = i(34712),
                s4 = i(47187),
                s9 = i.n(s4);
            let s3 = (e) => {
                let { promotion: t } = e,
                    i = (0, u.D)(),
                    a = (0, p.S)(),
                    { advDisclaimer: s } = t,
                    [n, d] = (0, l.useState)(!1),
                    m = (0, l.useCallback)(() => {
                        a({ to: o.AppScreen.Link });
                    }, [a]);
                return (0, r.jsxs)('div', {
                    className: (0, c.$)(s9().root, s9().card),
                    ref: i,
                    'data-test-id': b.e8.landing.EDITORIAL_PROMOTIONS_CARD,
                    children: [
                        (0, r.jsxs)('div', {
                            className: s9().meta,
                            children: [
                                (0, r.jsx)(P.N, {
                                    className: s9().titleLink,
                                    href: t.weblink,
                                    onClick: m,
                                    children: (0, r.jsx)(j.HL, { variant: 'div', lineClamp: 1, type: 'entity', size: 's', weight: 'medium', children: t.title }),
                                }),
                                (0, r.jsx)(j.HL, {
                                    className: s9().subtitle,
                                    variant: 'div',
                                    lineClamp: 1,
                                    type: 'entity',
                                    size: 's',
                                    weight: 'medium',
                                    children: t.subtitle,
                                }),
                            ],
                        }),
                        (0, r.jsxs)('div', {
                            className: s9().coverWrapper,
                            children: [
                                (0, r.jsx)(P.N, {
                                    className: s9().coverLink,
                                    href: t.weblink,
                                    onClick: m,
                                    'aria-hidden': !0,
                                    tabIndex: -1,
                                    children: (0, r.jsx)(A.t, {
                                        className: s9().cover,
                                        radius: 'm',
                                        withShadow: !0,
                                        children: (0, r.jsx)(tu._V, {
                                            className: s9().image,
                                            src: t.imageUrl,
                                            alt: t.title,
                                            withAvatarReplace: !0,
                                            withAspectRatio: !0,
                                            size: 400,
                                            fit: 'cover',
                                        }),
                                    }),
                                }),
                                s &&
                                    (0, r.jsx)('div', {
                                        className: s9().advDisclaimer,
                                        children: (0, r.jsxs)(s2.AM, {
                                            placement: 'top-end',
                                            open: n,
                                            onOpenChange: d,
                                            offsetOptions: 8,
                                            transform: !1,
                                            children: [
                                                (0, r.jsxs)(av.$, {
                                                    variant: 'text',
                                                    color: 'secondary',
                                                    withHover: !1,
                                                    withRipple: !1,
                                                    className: s9().advDisclaimerTrigger,
                                                    'data-test-id': b.e8.landing.EDITORIAL_PROMOTIONS_ADV_DISCLAIMER_TRIGGER_BUTTON,
                                                    children: [(0, r.jsx)(_.A, { id: 'ads.ad' }), (0, r.jsx)(t5.I, { variant: 'moreOutlined', size: 'xxxs' })],
                                                }),
                                                (0, r.jsx)(s2.hl, {
                                                    className: s9().advDisclaimerPopover,
                                                    children: (0, r.jsx)(j.HL, {
                                                        className: s9().advDisclaimerText,
                                                        variant: 'p',
                                                        type: 'text',
                                                        size: 'xs',
                                                        weight: 'medium',
                                                        'data-test-id': b.e8.landing.EDITORIAL_PROMOTIONS_ADV_DISCLAIMER_TEXT,
                                                        children: s,
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            };
            var s5 = i(59097),
                s6 = i.n(s5),
                s7 = i(34924),
                re = i.n(s7);
            let rt = (e) => {
                    let { isActive: t, withHeadingShimmer: i } = e;
                    return (0, r.jsxs)('div', {
                        className: re().root,
                        children: [
                            (0, r.jsx)(tf.W, { isActive: t, className: re().cover, radius: 'l' }),
                            (0, r.jsxs)('div', {
                                className: re().meta,
                                children: [
                                    i && (0, r.jsx)(tf.W, { isActive: t, className: re().heading, radius: 's' }),
                                    (0, r.jsx)(tf.W, { isActive: t, className: re().title, radius: 's' }),
                                    (0, r.jsx)(tf.W, { isActive: t, className: re().subtitle, radius: 's' }),
                                ],
                            }),
                        ],
                    });
                },
                ri = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            data: s,
                            meta: d,
                            containerClassName: m,
                            headerClassName: _,
                            headingVariant: u,
                            className: p,
                            ...v
                        } = e,
                        C = (0, l.useId)(),
                        h = (0, l.useRef)(null),
                        x = (0, l.useMemo)(() => {
                            if (i) return Array.from({ length: 6 }, (e, t) => (0, r.jsx)(rt, { isActive: a, withHeadingShimmer: !0 }, t));
                            return null == s
                                ? void 0
                                : s.items.map((e, t) =>
                                      (0, r.jsx)(
                                          n.B,
                                          {
                                              objectType: o.DomainObjectType.Feature,
                                              objectId: e.featureId,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              children: (0, r.jsx)(s3, { promotion: e }),
                                          },
                                          e.featureId,
                                      ),
                                  );
                        }, [null == s ? void 0 : s.items, a, i]);
                    return (0, r.jsxs)('section', {
                        className: (0, c.$)(s6().root, p),
                        ref: t,
                        ...(0, B.OZ)(v),
                        'data-test-id': b.e8.landing.EDITORIAL_PROMOTIONS,
                        children: [
                            (0, r.jsx)(U.T, {
                                className: _,
                                labeledForId: C,
                                title: d.title,
                                controls: (0, r.jsx)(W.X, { className: s6().controls, carouselRef: h }),
                                headingVariant: u,
                            }),
                            (0, r.jsx)(V.F, { className: m, ref: h, itemClassName: (0, c.$)(s6().item, s6().important), 'aria-labelledby': C, children: x }),
                        ],
                    });
                },
                ra = (0, l.forwardRef)((e, t) => (0, r.jsx)(ri, { forwardRef: t, ...e }));
            var rs = i(52456),
                rr = i(23192),
                rl = i(60628),
                ro = i(70621),
                rn = i(90233),
                rc = i(23311),
                rd = i(81438),
                rm = i(28198),
                r_ = i.n(rm);
            let ru = (e) => {
                    let { content: t, onAwake: i } = e,
                        a = (0, p.S)(),
                        s = (0, x.c)(() => {
                            (a({ to: o.AppScreen.LumenAwakeningScreen }), i());
                        });
                    return (0, r.jsx)('button', {
                        type: 'button',
                        className: (0, c.$)(r_().root, r_().root_clickable),
                        onClick: s,
                        'data-test-id': b.e8.landing.Q2V_AWAKE_LUMEN_BUTTON,
                        children: t,
                    });
                },
                rp = (0, d.PA)((e) => {
                    let { isLoading: t, onRefetch: i, onSendFeedbacks: a, onStartLoading: s } = e,
                        d = (0, l.useRef)(!1),
                        { lumen: _, search: u } = (0, k.g)(),
                        { cover: p, fallbackImage: v } = (0, rd.x)(),
                        { awakeLumenModal: C, requestAwakeLumenModal: h } = (0, rn.z)(),
                        A = (0, ro.D)(),
                        { formatMessage: j } = (0, m.A)(),
                        T = _.isEnabled ? p : v,
                        N = _.isEnabled && !_.isAwakened,
                        I = _.isEnabled && _.isAwakened,
                        S = (0, x.c)(() => {
                            h(() => void 0);
                        }),
                        f = (0, x.c)(async () => {
                            if (!t && !d.current && u.hasQ2vSuggestionFeedbacks()) {
                                ((d.current = !0), A({ actionType: o.ActionType.Refresh, userInteractionType: o.UserInteractionType.Tap }), s());
                                try {
                                    (await a(), i());
                                } finally {
                                    d.current = !1;
                                }
                            }
                        }),
                        L = (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(rc.e, { className: r_().haze }),
                                (0, r.jsx)(tu._V, {
                                    alt: '',
                                    className: (0, c.$)(r_().image, r_().imageBlurred),
                                    src: T,
                                    fit: 'cover',
                                    draggable: !1,
                                    withAvatarReplace: !0,
                                    withFallback: !1,
                                    withLoadingIndicator: !1,
                                }),
                                (0, r.jsx)(tu._V, {
                                    alt: '',
                                    className: r_().image,
                                    src: T,
                                    fit: 'cover',
                                    draggable: !1,
                                    withAvatarReplace: !0,
                                    withFallback: !1,
                                    withLoadingIndicator: !1,
                                }),
                            ],
                        }),
                        g = (0, ew.L)(() =>
                            N
                                ? (0, r.jsx)(n.B, {
                                      objectType: o.DomainObjectType.LumenUnawakened,
                                      objectId: '',
                                      objectPosX: 1,
                                      objectPosY: 1,
                                      children: (0, r.jsx)(ru, { content: L, onAwake: S }),
                                  })
                                : I
                                  ? (0, r.jsx)('button', {
                                        type: 'button',
                                        className: (0, c.$)(r_().root, r_().root_clickable),
                                        disabled: t,
                                        'aria-label': j({ id: 'interface-actions.reload-part-page' }),
                                        onClick: f,
                                        'data-test-id': b.e8.landing.Q2V_REFETCH_SUGGESTIONS_BUTTON,
                                        children: L,
                                    })
                                  : (0, r.jsx)('div', { className: r_().root, 'aria-hidden': !0, children: L }),
                        );
                    return (0, r.jsxs)(r.Fragment, { children: [C, g] });
                });
            !(function (e) {
                ((e.VIEW = 'VIEW'), (e.CLICK = 'CLICK'));
            })(a || (a = {}));
            var rv = i(73900),
                rb = i.n(rv);
            let rC = (e) => {
                let { handleFeedBack: t, onSelect: i, position: s, query: l, suggestionsRequestId: n } = e,
                    c = (0, ro.D)(),
                    d = (0, x.c)((e) => {
                        e && t({ type: a.VIEW, query: l, suggestionsRequestId: n, position: s });
                    }),
                    m = (0, u.D)({ onVisibilityChange: d }),
                    _ = (0, x.c)(() => {
                        (c({ actionType: o.ActionType.SearchItemSelected, userInteractionType: o.UserInteractionType.Tap }),
                            t({ type: a.CLICK, query: l, suggestionsRequestId: n, position: s }),
                            null == i || i(l));
                    });
                return (0, r.jsx)('button', {
                    ref: m,
                    className: rb().root,
                    'data-test-id': b.e8.landing.Q2V_SUGGESTION_BUTTON,
                    type: 'button',
                    onClick: _,
                    children: (0, r.jsx)(j.HL, { className: rb().text, size: 'm', weight: 'medium', variant: 'span', type: 'text', lineClamp: 2, children: l }),
                });
            };
            var rh = i(53409),
                rx = i.n(rh);
            let rA = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            data: i,
                            className: a,
                            containerClassName: s,
                            isShimmerVisible: d,
                            isShimmerActive: m,
                            setIsNeededToLoad: u,
                            onRefetch: p,
                            ...v
                        } = e,
                        b = (0, rl.u)(),
                        {
                            search: C,
                            settings: { isMobile: h },
                        } = (0, k.g)(),
                        x = (0, l.useRef)(null),
                        { shouldBackwardButtonBeDisabled: A, shouldForwardButtonBeDisabled: T, shouldHideControls: N } = (0, ap.Y)(x),
                        { state: I, handleDebouncedToggle: S } = (0, rs.F)({ delay: 1500, throttleTimeout: 0 });
                    ((0, l.useEffect)(() => {
                        d && m && S();
                    }, [m, d, S]),
                        (0, l.useEffect)(
                            () => () => {
                                C.sendQ2vSuggestionFeedbacks();
                            },
                            [null == i ? void 0 : i.suggestionsRequestId, C],
                        ));
                    let f = m || I,
                        L = (0, ew.L)(() =>
                            f
                                ? (0, r.jsx)(j.HL, {
                                      className: rx().loadingText,
                                      size: 'm',
                                      weight: 'medium',
                                      variant: 'span',
                                      type: 'text',
                                      children: (0, r.jsx)(_.A, { id: 'search.q2v-suggestions-loading' }),
                                  })
                                : (0, r.jsxs)('div', {
                                      className: (0, c.$)(rx().carouselWithArrows, {
                                          [rx().carouselWithArrows_arrowLeft_hidden]: A,
                                          [rx().carouselWithArrows_arrowRight_hidden]: T,
                                          [rx().carouselWithArrows_arrow_hidden]: N,
                                      }),
                                      children: [
                                          (0, r.jsx)(V.F, {
                                              ref: x,
                                              className: rx().carousel,
                                              itemClassName: rx().item,
                                              children:
                                                  null == i
                                                      ? void 0
                                                      : i.items.map((e, t) => {
                                                            let { query: a } = e;
                                                            return (0, r.jsx)(
                                                                n.B,
                                                                {
                                                                    objectType: o.DomainObjectType.SearchItem,
                                                                    objectId: a,
                                                                    objectPosX: t + 1,
                                                                    objectPosY: 1,
                                                                    children: (0, r.jsx)(rC, {
                                                                        query: a,
                                                                        position: t,
                                                                        suggestionsRequestId: i.suggestionsRequestId,
                                                                        handleFeedBack: C.addQ2vSuggestionFeedback,
                                                                        onSelect: null != b ? b : void 0,
                                                                    }),
                                                                },
                                                                a,
                                                            );
                                                        }),
                                          }),
                                          !h && (0, r.jsx)(W.X, { className: rx().controls, carouselRef: x }),
                                      ],
                                  }),
                        ),
                        g = { '--q2v-accent-color': rr.R };
                    return (0, r.jsxs)('div', {
                        ref: t,
                        className: (0, c.$)(rx().root, s, a),
                        style: g,
                        ...(0, B.OZ)(v),
                        children: [
                            (0, r.jsx)(n.B, {
                                objectType: o.DomainObjectType.Lumen,
                                objectId: '',
                                objectPosX: 1,
                                objectPosY: 1,
                                children: (0, r.jsx)(rp, {
                                    isLoading: f,
                                    onRefetch: null != p ? p : u,
                                    onSendFeedbacks: C.sendQ2vSuggestionFeedbacks,
                                    onStartLoading: S,
                                }),
                            }),
                            L,
                        ],
                    });
                }),
                rj = (0, l.forwardRef)((e, t) => (0, r.jsx)(rA, { forwardRef: t, ...e })),
                rT = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: l,
                        meta: c,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, r.jsx)(eq.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: l,
                        containerClassName: s,
                        title: c.title,
                        description: c.description,
                        viewAllActionLink: c.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) => {
                                      switch (e.type) {
                                          case e2._.ALBUM_ITEM:
                                              return (0, r.jsx)(
                                                  n.B,
                                                  {
                                                      objectType: o.DomainObjectType.Album,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      children: (0, r.jsx)(eO.a, { withLikesCount: !0, album: e.data, contentLinesCount: 3 }),
                                                  },
                                                  e.data.id,
                                              );
                                          case e2._.ARTIST_ITEM:
                                              return (0, r.jsx)(
                                                  n.B,
                                                  {
                                                      objectType: o.DomainObjectType.Artist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      children: (0, r.jsx)(tl.a, { artist: e.data, contentLinesCount: 3 }, e.data.id),
                                                  },
                                                  e.data.id,
                                              );
                                          case e2._.PLAYLIST_ITEM:
                                              return (0, r.jsx)(
                                                  n.B,
                                                  {
                                                      objectType: o.DomainObjectType.Playlist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      children: (0, r.jsx)(tU.B, { playlist: e.data, contentLinesCount: 3 }, e.data.id),
                                                  },
                                                  e.data.id,
                                              );
                                      }
                                  }),
                    });
                },
                rN = (0, l.forwardRef)((e, t) => (0, r.jsx)(rT, { forwardRef: t, ...e }));
            var rI = i(37523),
                rS = i(46811),
                rf = i(27639),
                rL = i(91289),
                rg = i(4196),
                ry = i(58378),
                rk = i(39631),
                rR = i(38501),
                rE = i(28119),
                rP = i(91198),
                rw = i(39585),
                rO = i(67665),
                rM = i(75034),
                rD = i.n(rM);
            let rB = (e) => {
                let { isActive: t, className: i, ariaLabel: a } = e;
                return (0, r.jsxs)('div', {
                    'aria-label': a,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, c.$)(rD().root, i),
                    children: [
                        (0, r.jsxs)('div', {
                            className: rD().infoContainer,
                            children: [
                                (0, r.jsx)(tf.W, { isActive: t, className: rD().cover, radius: 's' }),
                                (0, r.jsx)('div', { className: rD().textContainer, children: (0, r.jsx)(tf.W, { isActive: t, className: rD().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, r.jsx)(tf.W, { isActive: t, className: rD().action, radius: 'l' }),
                    ],
                });
            };
            var rV = i(94607),
                rU = i.n(rV);
            let rW = (0, d.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerActive: i,
                            isShimmerVisible: a,
                            data: s,
                            meta: d,
                            isLoaded: u,
                            headerClassName: p,
                            setIsNeededToLoad: v,
                            tracksContainerClassName: C,
                            className: h,
                            ...x
                        } = e,
                        A = (0, rk._)(),
                        { formatMessage: T } = (0, m.A)(),
                        {
                            search: { history: N },
                        } = (0, k.g)(),
                        I = (0, rR.d)(),
                        S = !(null == s ? void 0 : s.items.length) && u,
                        f = (0, rE.f)(),
                        { awakeLumenModal: L, requestAwakeLumenModal: g } = (0, rn.z)();
                    return ((0, l.useLayoutEffect)(
                        () => (
                            N.shouldUpdateHistory && (v(), N.setShouldUpdateHistory(!1)),
                            () => {
                                (N.hasCleared && v(), N.reset());
                            }
                        ),
                        [N, v],
                    ),
                    S || N.hasCleared)
                        ? (0, r.jsx)('div', {
                              ref: t,
                              className: (0, c.$)(rU().root, rU().fallback),
                              ...(0, B.OZ)(x),
                              'data-test-id': b.e8.landing.SEARCH_HISTORY_EMPTY,
                              children: (0, r.jsx)(j.HL, {
                                  variant: 'span',
                                  type: 'text',
                                  size: 'l',
                                  weight: 'normal',
                                  children: (0, r.jsx)(_.A, { id: 'search.recent-requests-fallback' }),
                              }),
                          })
                        : (0, r.jsxs)('div', {
                              ref: t,
                              className: rU().root,
                              ...(0, B.OZ)(x),
                              'data-test-id': b.e8.landing.SEARCH_HISTORY,
                              children: [
                                  L,
                                  (0, r.jsx)(ef.$, {
                                      className: h,
                                      shimmer: (0, r.jsx)(rB, { isActive: i }),
                                      isShimmerActive: i,
                                      isShimmerVisible: a,
                                      itemsCountPerColumn: 5,
                                      maxColumnsCount: ef.D.TWO,
                                      blockHeaderClassName: p,
                                      carouselClassName: (0, c.$)(C, rU().content),
                                      blockHeaderTitle: d.title,
                                      blockHeaderDescription: d.description,
                                      viewAllActionLink: d.viewAllActionLink,
                                      children:
                                          null == s
                                              ? void 0
                                              : s.items.map((e, t) => {
                                                    var i, a;
                                                    let { objectPosX: l, objectPosY: c } = (0, ep.$)({
                                                        index: t,
                                                        count: s.items.length,
                                                        itemsCountPerColumn: 5,
                                                        showedItemsCountInBlock: 10,
                                                    });
                                                    switch (e.type) {
                                                        case e2._.NON_MUSIC_ALBUM_ITEM:
                                                        case e2._.ALBUM_ITEM:
                                                            return (0, r.jsx)(
                                                                n.B,
                                                                {
                                                                    objectType: o.DomainObjectType.Album,
                                                                    objectId: String(e.data.id),
                                                                    objectPosX: l,
                                                                    objectPosY: c,
                                                                    children: (0, r.jsx)(rS.M, { album: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case e2._.ARTIST_ITEM:
                                                            return (0, r.jsx)(
                                                                n.B,
                                                                {
                                                                    objectType: o.DomainObjectType.Artist,
                                                                    objectId: e.data.id,
                                                                    objectPosX: l,
                                                                    objectPosY: c,
                                                                    children: (0, r.jsx)(rf.c, { description: T({ id: 'entity-names.singer' }), artist: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case e2._.TRACK_ITEM:
                                                            return (0, r.jsx)(
                                                                n.B,
                                                                {
                                                                    objectType: o.DomainObjectType.Track,
                                                                    objectId: e.data.id,
                                                                    objectPosX: l,
                                                                    objectPosY: c,
                                                                    children: (0, r.jsx)(ry.c, { track: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case e2._.LIKED_PLAYLIST_ITEM:
                                                            return (0, r.jsx)(
                                                                n.B,
                                                                {
                                                                    objectType: o.DomainObjectType.Playlist,
                                                                    objectId: e.data.id,
                                                                    objectPosX: l,
                                                                    objectPosY: c,
                                                                    children: (0, r.jsx)(rg.v, { playlist: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case e2._.WAVE_ITEM:
                                                            return (0, r.jsx)(
                                                                n.B,
                                                                {
                                                                    objectType: o.DomainObjectType.Wave,
                                                                    objectId: null != (i = e.data.vibe.seeds[0]) ? i : '',
                                                                    objectPosX: l,
                                                                    objectPosY: c,
                                                                    children: (0, r.jsx)(rO.H, {
                                                                        vibe: e.data.vibe,
                                                                        controls: A(e.data.vibe),
                                                                        cover: e.data.cover,
                                                                        description: e.data.vibe.getDescription(T({ id: 'entity-names.my-vibe' })),
                                                                    }),
                                                                },
                                                                e.data.vibe.getKey(t),
                                                            );
                                                        case e2._.WAVE_AGENT_ITEM:
                                                            return (0, r.jsx)(
                                                                n.B,
                                                                {
                                                                    objectType: o.DomainObjectType.Wave,
                                                                    objectId: null != (a = e.data.seeds[0]) ? a : '',
                                                                    objectPosX: l,
                                                                    objectPosY: c,
                                                                    children: (0, r.jsx)(rO.H, {
                                                                        vibe: e.data,
                                                                        controls: A(e.data),
                                                                        description: e.data.getDescription(T({ id: 'entity-names.my-vibe' })),
                                                                        agentVariant: rP.h.SMALL,
                                                                    }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case e2._.CLIP_ITEM:
                                                            if (!I) return null;
                                                            return (0, r.jsx)(rL.N, { clip: e.data }, e.data.clipId);
                                                        case e2._.QUERY_TO_VIBE_ITEM:
                                                            return (
                                                                f &&
                                                                (0, r.jsx)(rI.F, {
                                                                    blockId: o.EntityTypes.Q2vWave,
                                                                    blockType: o.EntityTypes.Q2vWave,
                                                                    blockPosX: 1,
                                                                    blockPosY: 1,
                                                                    objectsCount: 1,
                                                                    children: (0, r.jsx)(
                                                                        n.B,
                                                                        {
                                                                            objectPosX: 1,
                                                                            objectPosY: 1,
                                                                            objectType: o.DomainObjectType.Wave,
                                                                            objectId: e.data.stationId,
                                                                            children: (0, r.jsx)(rw.K, { requestAwakeLumenModal: g, vibe: e.data, controls: A(e.data) }),
                                                                        },
                                                                        e.data.getKey(t),
                                                                    ),
                                                                })
                                                            );
                                                        default:
                                                            return null;
                                                    }
                                                }),
                                  }),
                                  u &&
                                      (0, r.jsx)(av.$, {
                                          onClick: N.clear,
                                          className: rU().button,
                                          radius: 'xxxl',
                                          variant: 'default',
                                          size: 'default',
                                          'data-test-id': b.e8.landing.SEARCH_HISTORY_CLEAR_BUTTON,
                                          children: (0, r.jsx)(_.A, { id: 'search.clear-history' }),
                                      }),
                              ],
                          });
                }),
                rH = (0, l.forwardRef)((e, t) => (0, r.jsx)(rW, { forwardRef: t, ...e }));
            var rz = i(8655),
                rK = i(74791),
                rY = i.n(rK);
            let rF = (0, d.PA)((e) => {
                    var t, i, a, s, o, n, c, d, m;
                    let { containerClassName: u, meta: p, data: v, forwardRef: C, headingVariant: h = 'h2', ...x } = e,
                        A = (0, g.Z)(null != (m = null == v ? void 0 : v.weblink) ? m : ''),
                        { theme: T } = (0, ij.W)(),
                        N = null == v ? void 0 : v.advDisclaimer,
                        [I, S] = (0, l.useState)(!1),
                        f =
                            T === rz.S.Light
                                ? null == v || null == (t = v.lightTheme)
                                    ? void 0
                                    : t.imageUrl
                                : null == v || null == (i = v.darkTheme)
                                  ? void 0
                                  : i.imageUrl,
                        L = (0, l.useMemo)(() => {
                            var e, t;
                            return {
                                '--text-color':
                                    T === rz.S.Light
                                        ? null == v || null == (e = v.lightTheme)
                                            ? void 0
                                            : e.textColor
                                        : null == v || null == (t = v.darkTheme)
                                          ? void 0
                                          : t.textColor,
                            };
                        }, [T, null == v || null == (a = v.darkTheme) ? void 0 : a.textColor, null == v || null == (s = v.lightTheme) ? void 0 : s.textColor]),
                        y = (0, l.useMemo)(() => {
                            var e, t, i, a;
                            return {
                                '--button-color':
                                    T === rz.S.Light
                                        ? null == v || null == (e = v.lightTheme)
                                            ? void 0
                                            : e.buttonColor
                                        : null == v || null == (t = v.darkTheme)
                                          ? void 0
                                          : t.buttonColor,
                                '--button-text-color':
                                    T === rz.S.Light
                                        ? null == v || null == (i = v.lightTheme)
                                            ? void 0
                                            : i.buttonTextColor
                                        : null == v || null == (a = v.darkTheme)
                                          ? void 0
                                          : a.buttonTextColor,
                            };
                        }, [
                            T,
                            null == v || null == (o = v.darkTheme) ? void 0 : o.buttonColor,
                            null == v || null == (n = v.lightTheme) ? void 0 : n.buttonColor,
                            null == v || null == (c = v.darkTheme) ? void 0 : c.buttonTextColor,
                            null == v || null == (d = v.lightTheme) ? void 0 : d.buttonTextColor,
                        ]);
                    return (0, r.jsx)('section', {
                        ref: C,
                        title: p.title,
                        className: u,
                        ...(0, B.OZ)(x),
                        children: (0, r.jsxs)('div', {
                            className: rY().root,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: rY().actions,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: rY().textContainer,
                                            children: [
                                                !!(null == v ? void 0 : v.title) &&
                                                    (0, r.jsx)(j.DZ, {
                                                        weight: 'black',
                                                        size: 'xl',
                                                        className: rY().textColor,
                                                        lineClamp: 2,
                                                        variant: h,
                                                        style: L,
                                                        children: null == v ? void 0 : v.title,
                                                    }),
                                                !!(null == v ? void 0 : v.subtitle) &&
                                                    (0, r.jsx)(j.HL, {
                                                        className: rY().textColor,
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        lineClamp: 2,
                                                        style: L,
                                                        children: null == v ? void 0 : v.subtitle,
                                                    }),
                                            ],
                                        }),
                                        !!(null == v ? void 0 : v.weblink) &&
                                            !!(null == v ? void 0 : v.buttonTitle) &&
                                            (0, r.jsx)(av.$, {
                                                color: 'primary',
                                                radius: 'xxxl',
                                                className: rY().button,
                                                role: 'link',
                                                onClick: A,
                                                style: y,
                                                children: (0, r.jsx)(j.HL, {
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    children: null == v ? void 0 : v.buttonTitle,
                                                }),
                                            }),
                                    ],
                                }),
                                (0, r.jsx)('div', {
                                    className: rY().imageContainer,
                                    children: (0, r.jsx)(tu._V, {
                                        src: f || (null == v ? void 0 : v.imageUrl),
                                        withAvatarReplace: !0,
                                        fit: 'cover',
                                        size: 300,
                                        withFallback: !1,
                                        className: rY().image,
                                        withLoadingIndicator: !1,
                                    }),
                                }),
                                N &&
                                    (0, r.jsx)('div', {
                                        className: rY().advDisclaimer,
                                        children: (0, r.jsxs)(s2.AM, {
                                            placement: 'top-end',
                                            open: I,
                                            onOpenChange: S,
                                            offsetOptions: 8,
                                            transform: !1,
                                            children: [
                                                (0, r.jsxs)(av.$, {
                                                    variant: 'text',
                                                    color: 'secondary',
                                                    withHover: !1,
                                                    withRipple: !1,
                                                    className: rY().advDisclaimerTrigger,
                                                    'data-test-id': b.e8.landing.SPECIAL_ADV_DISCLAIMER_TRIGGER_BUTTON,
                                                    children: [(0, r.jsx)(_.A, { id: 'ads.ad' }), (0, r.jsx)(t5.I, { variant: 'moreOutlined', size: 'xxxs' })],
                                                }),
                                                (0, r.jsx)(s2.hl, {
                                                    className: rY().advDisclaimerPopover,
                                                    children: (0, r.jsx)(j.HL, {
                                                        className: rY().advDisclaimerText,
                                                        variant: 'p',
                                                        type: 'text',
                                                        size: 'xs',
                                                        weight: 'medium',
                                                        'data-test-id': b.e8.landing.SPECIAL_ADV_DISCLAIMER_TEXT,
                                                        children: N,
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                            ],
                        }),
                    });
                }),
                r$ = (0, l.forwardRef)((e, t) => (0, r.jsx)(rF, { forwardRef: t, ...e }));
            var rX = i(76723),
                rG = i.n(rX);
            let rZ = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: o,
                            meta: n,
                            data: d,
                            headingVariant: m,
                            className: _,
                            ...u
                        } = e,
                        p = (0, l.useId)(),
                        v = (0, e4.zb)(0),
                        b = (0, l.useRef)(null),
                        C = (0, l.useId)(),
                        h = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, r.jsx)(aS, {
                                          isActive: a,
                                          ref: b,
                                          containerClassName: s,
                                          ariaLabelledBy: ''.concat(p, ' ').concat(p, '-description'),
                                          length: 9,
                                      })
                                    : null == d
                                      ? void 0
                                      : d.items.map((e) =>
                                            (0, r.jsx)(
                                                e4.Kp,
                                                {
                                                    name: e.tab.id,
                                                    value: v.value,
                                                    elementId: C,
                                                    children: (0, r.jsx)(aI, {
                                                        ref: b,
                                                        containerClassName: s,
                                                        ariaLabelledBy: ''.concat(p, ' ').concat(p, '-description'),
                                                        items: e.data,
                                                    }),
                                                },
                                                e.tab.id,
                                            ),
                                        ),
                            [null == d ? void 0 : d.items, i, a, s, p, v.value, C],
                        );
                    return (0, r.jsxs)('section', {
                        className: (0, c.$)(rG().root, _),
                        ref: t,
                        ...(0, B.OZ)(u),
                        children: [
                            (0, r.jsx)(U.T, {
                                className: (0, c.$)(o, rG().header, rG().important),
                                title: n.title,
                                description: n.description,
                                labeledForId: p,
                                viewAllActionLink: n.viewAllActionLink,
                                controls: (0, r.jsx)(W.X, { className: rG().controls, carouselRef: b }),
                                headingVariant: m,
                                withDescription: !!n.description,
                            }),
                            (0, r.jsx)(e5.wI, {
                                isShimmerVisible: i,
                                className: (0, c.$)(s, rG().tabCarousel, rG().important),
                                elementId: C,
                                shimmer: (0, r.jsx)(e5.zr, { isActive: a, className: (0, c.$)(s, rG().tabCarousel, rG().important), shimmerClassName: rG().tabShimmer }),
                                'aria-labelledby': p,
                                ...v,
                                children:
                                    null == d
                                        ? void 0
                                        : d.items.map((e) => {
                                              let { tab: t } = e;
                                              return (0, r.jsx)(
                                                  e3.o,
                                                  { className: (0, c.$)(rG().tab, rG().important), value: t.id, 'aria-label': t.title, title: t.title },
                                                  t.id,
                                              );
                                          }),
                            }),
                            h,
                        ],
                    });
                },
                rq = (0, l.forwardRef)((e, t) => (0, r.jsx)(rZ, { forwardRef: t, ...e }));
            var rQ = i(29585),
                rJ = i.n(rQ);
            let r0 = (e) => {
                    var t;
                    let {
                            forwardRef: i,
                            isShimmerVisible: a,
                            isShimmerActive: s,
                            containerClassName: d,
                            headerClassName: m,
                            meta: _,
                            data: u,
                            headingVariant: p,
                            className: v,
                            ...b
                        } = e,
                        C = (0, l.useId)(),
                        h = (0, e4.zb)(0),
                        x = (0, l.useRef)(null),
                        A = (0, l.useId)(),
                        j = (0, l.useMemo)(
                            () =>
                                a
                                    ? (0, r.jsx)(V.F, {
                                          ref: x,
                                          itemClassName: (0, c.$)(rJ().item, rJ().important),
                                          className: d,
                                          'aria-labelledby': ''.concat(C, ' ').concat(C, '-description'),
                                          children: (0, e9.k)({ isActive: s, centered: !0 }),
                                      })
                                    : null == u
                                      ? void 0
                                      : u.items.map((e) => {
                                            var t;
                                            return (0, r.jsx)(
                                                e4.Kp,
                                                {
                                                    name: e.tab.id,
                                                    value: h.value,
                                                    elementId: A,
                                                    children: (0, r.jsx)(V.F, {
                                                        ref: x,
                                                        itemClassName: (0, c.$)(rJ().item, rJ().important),
                                                        className: d,
                                                        'aria-labelledby': ''.concat(C, ' ').concat(C, '-description'),
                                                        children:
                                                            null == (t = e.data)
                                                                ? void 0
                                                                : t.map((e, t) =>
                                                                      (0, r.jsx)(
                                                                          n.B,
                                                                          {
                                                                              objectType: o.DomainObjectType.Wave,
                                                                              objectId: e.stationId,
                                                                              objectPosX: t + 1,
                                                                              objectPosY: 1,
                                                                              children: (0, r.jsx)(il.y, { vibe: e }),
                                                                          },
                                                                          e.stationId,
                                                                      ),
                                                                  ),
                                                    }),
                                                },
                                                e.tab.id,
                                            );
                                        }),
                            [null == u ? void 0 : u.items, a, s, d, C, h.value, A],
                        );
                    return (0, r.jsxs)('section', {
                        className: (0, c.$)(rJ().root, v),
                        ref: i,
                        ...(0, B.OZ)(b),
                        children: [
                            (0, r.jsx)(U.T, {
                                className: (0, c.$)(m, rJ().header, rJ().important),
                                title: _.title,
                                description: _.description,
                                labeledForId: C,
                                viewAllActionLink: _.viewAllActionLink,
                                controls: (0, r.jsx)(W.X, { className: rJ().controls, carouselRef: x }),
                                headingVariant: p,
                                withDescription: !!_.description,
                            }),
                            (0, r.jsx)(e5.wI, {
                                isShimmerVisible: a,
                                className: (0, c.$)(d, rJ().tabCarousel, rJ().important),
                                elementId: A,
                                shimmer: (0, r.jsx)(e5.zr, { isActive: s, className: (0, c.$)(d, rJ().tabCarousel, rJ().important), shimmerClassName: rJ().tabShimmer }),
                                'aria-labelledby': C,
                                ...h,
                                children:
                                    null == u || null == (t = u.items)
                                        ? void 0
                                        : t.map((e) => {
                                              let { tab: t } = e;
                                              return (0, r.jsx)(
                                                  e3.o,
                                                  { className: (0, c.$)(rJ().tab, rJ().important), value: t.id, 'aria-label': t.title, title: t.title },
                                                  t.id,
                                              );
                                          }),
                            }),
                            j,
                        ],
                    });
                },
                r1 = (0, l.forwardRef)((e, t) => (0, r.jsx)(r0, { forwardRef: t, ...e }));
            var r8 = i(60978),
                r2 = i(4063),
                r4 = i.n(r2),
                r9 = i(64310),
                r3 = i(1173),
                r5 = i.n(r3);
            let r6 = (0, d.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, k.g)();
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(r9.n, { isActive: !0, className: r5().titleShimmer, textClassName: r5().titleTextShimmer }),
                            (0, r.jsx)(r9.n, { isActive: !0, className: r5().descriptionShimmer, textClassName: r5().textShimmer }),
                            (0, r.jsx)(r9.n, { isActive: !0, className: r5().descriptionShimmer, textClassName: r5().textShimmer }),
                            (0, r.jsx)(r9.n, { isActive: !0, className: r5().descriptionShimmer, textClassName: r5().textShimmer }),
                            e &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(r9.n, { isActive: !0, className: r5().descriptionShimmer, textClassName: r5().textShimmer }),
                                        (0, r.jsx)(r9.n, { isActive: !0, className: r5().descriptionShimmer, textClassName: r5().textShimmer }),
                                    ],
                                }),
                        ],
                    });
                }),
                r7 = Array.from({ length: 3 }, () => r8.A.src),
                le = (0, d.PA)((e) => {
                    let { forwardRef: t, isShimmerVisible: i, data: a, headingVariant: s = 'h2' } = e,
                        { formatMessage: o } = (0, m.A)(),
                        { wizard: n } = (0, k.g)(),
                        c = (0, l.useMemo)(
                            () =>
                                (0, r.jsx)('div', {
                                    className: r4().images,
                                    'data-test-id': b.e8.landing.WIZARD_BLOCK_ARTISTS,
                                    children: r7.map((e, t) => {
                                        var i;
                                        let s = null == a || null == (i = a.artists[t]) ? void 0 : i.coverUri;
                                        return (0, r.jsx)(
                                            A.t,
                                            {
                                                className: r4().paper,
                                                radius: 'round',
                                                children: (0, r.jsx)(tu._V, {
                                                    className: r4().image,
                                                    src: s || e,
                                                    fit: 'contain',
                                                    withAvatarReplace: !!s,
                                                    'aria-hidden': !0,
                                                    fallbackIconSize: 's',
                                                    'data-test-id': ''.concat(b.e8.landing.WIZARD_BLOCK_ARTIST_COVER, '_').concat(t),
                                                }),
                                            },
                                            t,
                                        );
                                    }),
                                }),
                            [null == a ? void 0 : a.artists],
                        ),
                        d = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, r.jsx)(r6, {})
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(j.DZ, {
                                                  variant: s,
                                                  size: 'xs',
                                                  className: r4().title,
                                                  'data-test-id': b.e8.landing.WIZARD_BLOCK_TITLE,
                                                  children: null == a ? void 0 : a.title,
                                              }),
                                              (null == a ? void 0 : a.description) &&
                                                  (0, r.jsx)(j.DZ, {
                                                      variant: 'h3',
                                                      size: 'l',
                                                      className: r4().description,
                                                      lineClamp: 5,
                                                      'data-test-id': b.e8.landing.WIZARD_BLOCK_TEXT,
                                                      children: a.description,
                                                  }),
                                          ],
                                      }),
                            [i, s, null == a ? void 0 : a.title, null == a ? void 0 : a.description],
                        );
                    return (0, r.jsxs)('section', {
                        className: r4().root,
                        ref: t,
                        'data-test-id': b.e8.landing.WIZARD_BLOCK,
                        children: [
                            c,
                            d,
                            (0, r.jsx)(av.$, {
                                className: r4().button,
                                icon: (0, r.jsx)(t5.I, { variant: 'link', size: 'xxs', className: r4().buttonIcon }),
                                color: 'secondary',
                                size: 'm',
                                iconPosition: 'right',
                                radius: 'xxxl',
                                onClick: n.modal.open,
                                disabled: !n.isAvailable,
                                'data-test-id': b.e8.landing.WIZARD_BLOCK_BUTTON,
                                children: o({ id: 'wizard.buttonText' }),
                            }),
                        ],
                    });
                }),
                lt = (0, l.forwardRef)((e, t) => (0, r.jsx)(le, { forwardRef: t, ...e })),
                li = {
                    [s.t.COLLECTION_PLAYLIST_WITH_LIKES]: sZ,
                    [s.t.COLLECTION_FAVOURITE_PLAYLIST]: s8,
                    [s.t.OPEN_PLAYLIST]: sZ,
                    [s.t.SMART_OPEN_PLAYLIST]: sZ,
                    [s.t.NON_MUSIC_OPEN_PLAYLIST]: sZ,
                    [s.t.COLLECTION_ARTISTS]: tm,
                    [s.t.COLLECTION_ARTISTS_AND_TOP]: tm,
                    [s.t.PERSONAL_ARTISTS]: tm,
                    [s.t.NEW_STARS_ARTISTS]: tm,
                    [s.t.EDITORIAL_ARTISTS]: tm,
                    [s.t.META_TAG_POPULAR_ARTISTS]: tm,
                    [s.t.MICRO_GENRE_ARTISTS]: tm,
                    [s.t.MICRO_GENRE_TOP_ARTISTS]: tm,
                    [s.t.META_TAG_ARTISTS]: tm,
                    [s.t.SIMILAR_ARTISTS]: tm,
                    [s.t.NEW_RELEASES]: sL,
                    [s.t.EDITORIAL_NEW_RELEASES]: sL,
                    [s.t.NEW_PLAYLISTS]: aw.Q,
                    [s.t.EDITORIAL_COMPILATION]: aw.Q,
                    [s.t.RECOMMENDED_PLAYLISTS]: aw.Q,
                    [s.t.META_TAG_POPULAR_PLAYLISTS]: aw.Q,
                    [s.t.META_TAG_PLAYLISTS]: aw.Q,
                    [s.t.META_TAG_NEW_ALBUMS]: aw.Q,
                    [s.t.MICRO_GENRE_ALBUMS]: aw.Q,
                    [s.t.META_TAG_ALBUMS]: aw.Q,
                    [s.t.ARTIST_PLAYLISTS]: aw.Q,
                    [s.t.ARTIST_ALBUMS]: aw.Q,
                    [s.t.ARTIST_COMPILATIONS]: aw.Q,
                    [s.t.ARTIST_STUDIO_ALBUMS]: aw.Q,
                    [s.t.ARTIST_SIMILAR_ENTITIES]: aw.Q,
                    [s.t.COLLECTION_SIMILAR_ENTITIES]: aw.Q,
                    [s.t.PROMOTIONS]: ra,
                    [s.t.EDITORIAL_PROMOTIONS]: ra,
                    [s.t.NON_MUSIC_PROMOTIONS]: ra,
                    [s.t.Q2V_SUGGESTIONS]: rj,
                    [s.t.PERSONAL_PLAYLISTS]: sB,
                    [s.t.REWIND_PLAYLISTS]: sB,
                    [s.t.MICRO_GENRE_SIMILAR_WAVE]: ay,
                    [s.t.META_TAG_SIMILAR_WAVE]: ay,
                    [s.t.EDITORIAL_WAVES]: ay,
                    [s.t.META_TAG_WAVE]: ay,
                    [s.t.MICRO_GENRE_WAVE]: ay,
                    [s.t.EDITORIAL_WAVES_AGENT]: aP,
                    [s.t.META_TAG_WAVE_AGENT]: aP,
                    [s.t.MICRO_GENRE_WAVE_AGENT]: aP,
                    [s.t.MICRO_GENRE_SIMILAR_WAVE_AGENT]: aP,
                    [s.t.META_TAG_SIMILAR_WAVE_AGENT]: aP,
                    [s.t.CONCERTS_PERSONAL]: iq,
                    [s.t.CONCERTS_TOP]: iq,
                    [s.t.EDITORIAL_CONCERTS]: iq,
                    [s.t.VIEWED_CONCERTS]: iq,
                    [s.t.CLIPS]: eZ,
                    [s.t.ARTIST_CLIPS]: eZ,
                    [s.t.WAVES]: rq,
                    [s.t.SETS_BY_WAVES]: rq,
                    [s.t.WAVES_AGENT]: r1,
                    [s.t.SETS_BY_WAVES_AGENT]: r1,
                    [s.t.CHART_TRACKS]: eF,
                    [s.t.COLLECTION_KIDS]: tG,
                    [s.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED]: t9,
                    [s.t.COLLECTION_PLAYLISTS_CREATED]: tz,
                    [s.t.COLLECTION_PLAYLISTS_LIKED]: tq,
                    [s.t.ALBUM_PROMO]: G,
                    [s.t.ARTIST_RECOMMENDATIONS_PROMO]: eE.v,
                    [s.t.SIMPLE_ARTIST_RECOMMENDATIONS_PROMO]: eP.i,
                    [s.t.SIMPLE_ALBUM_PROMO]: ea,
                    [s.t.ITEM_LIST]: a$,
                    [s.t.OVERVIEW]: sM,
                    [s.t.COLLECTION_ALBUMS]: e8,
                    [s.t.COLLECTION_CLIPS]: tV,
                    [s.t.COLLECTION_TOP_ARTISTS]: is,
                    [s.t.RECENTLY_PLAYED]: rN,
                    [s.t.IN_STYLE]: aH,
                    [s.t.SPECIAL]: r$,
                    [s.t.WIZARD]: lt,
                    [s.t.MIXES]: a3,
                    [s.t.MIXES_GRID]: si,
                    [s.t.MIXES_MUSIC]: sl,
                    [s.t.NEUROMUSIC]: sp,
                    [s.t.CONCERT_PLACE]: iw,
                    [s.t.LIKES_AND_HISTORY]: a1,
                    [s.t.NON_MUSIC_EDITORIAL_COMPILATION]: sR,
                    [s.t.COLLECTION_ALBUMS_PRESAVES]: tr,
                    [s.t.CHART_ALBUMS]: sy,
                    [s.t.DONATIONS]: au,
                    [s.t.CONTINUE_LISTEN]: aa,
                    [s.t.DISLIKES]: ar,
                    [s.t.COLLECTION_DOWNLOADED_TRACKS]: tF,
                    [s.t.HISTORY]: rH,
                    [s.t.SEARCH_HISTORY]: rH,
                    [s.t.ARTIST_CONCERTS]: eC,
                    [s.t.ARTIST_POPULAR_TRACKS]: eR,
                    [s.t.ARTIST_RELEASE]: eB,
                    [s.t.FAMILIAR_YOU]: aB,
                    [s.t.ARTIST_PICK]: eN,
                    [s.t.ARTIST_UPCOMING_RELEASE]: eW,
                    [s.t.COLLECTION_WAVE_AGENT]: im,
                    [s.t.COLLECTION_WAVE_ROOMS]: iA,
                    [s.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS]: tw,
                    [s.t.NON_MUSIC_CATEGORY]: sR,
                    [s.t.PODCASTS_CHART_ALBUMS]: sy,
                };
        },
        25596: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => S });
            var a = i(88800),
                s = i(96706),
                r = i(53548),
                l = i(2058),
                o = i(97804),
                n = i(29595),
                c = i(74965),
                d = i(72288),
                m = i(66943),
                _ = i(65724),
                u = i(88969),
                p = i(17392),
                v = i(73170),
                b = i(29504),
                C = i(17944),
                h = i(81877),
                x = i(91292),
                A = i(59304),
                j = i(59357),
                T = i.n(j);
            let N = (e) => {
                    let { closeToast: t, albumTitle: i, coverUri: s, isPresave: o, entityTitle: n, className: c } = e,
                        { formatMessage: d } = (0, l.A)(),
                        m = (0, r.useMemo)(
                            () => (o ? (0, a.jsx)(u.A, { id: 'notifications-info.added-to' }) : (0, a.jsx)(u.A, { id: 'notifications-info.removed-from' })),
                            [o],
                        ),
                        j = (0, r.useMemo)(
                            () => (o ? (0, a.jsx)(u.A, { id: 'notifications-info.to-collection' }) : (0, a.jsx)(u.A, { id: 'notifications-info.from-collection' })),
                            [o],
                        ),
                        N = (0, r.useMemo)(
                            () =>
                                o
                                    ? d({ id: 'notifications-info.album-added-to-collection-aria-label' }, { entity: n })
                                    : d({ id: 'notifications-info.album-removed-from-collection-aria-label' }, { entity: n }),
                            [o, n, d],
                        ),
                        I = (0, r.useMemo)(
                            () =>
                                (0, a.jsxs)(b.HL, {
                                    className: T().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    'data-test-id': p.S7.BASE_NOTIFICATION_PRESAVE_TEXT,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, a.jsx)(u.A, { id: 'entity-names.album' }),
                                        '\xa0',
                                        (0, a.jsxs)(b.HL, { className: T().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: [n, '\xa0'] }),
                                        m,
                                        '\xa0',
                                        (0, a.jsx)(x.N, {
                                            className: T().link,
                                            href: '/collection/albums?tab='.concat(C.H.UPCOMING_ALBUMS),
                                            title: String(j),
                                            children: (0, a.jsx)(b.HL, { variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: j }),
                                        }),
                                    ],
                                }),
                            [n, m, j],
                        );
                    return (0, a.jsx)(A.$, {
                        className: (0, _.$)(T().root, c),
                        message: (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(v.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': N }) }), I] }),
                        cover: (0, a.jsx)(h.B, { className: T().image, src: s, size: 100, fit: 'cover', alt: i, withAvatarReplace: !0 }),
                        closeToast: t,
                        coverRadius: 's',
                    });
                },
                I = (e) => {
                    let { upcomingAlbum: t, closeToast: i } = e;
                    return (0, a.jsx)(N, { closeToast: i, albumTitle: t.title, coverUri: t.coverUri, entityTitle: t.title, isPresave: t.isPresave });
                },
                S = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [_, u] = (0, r.useState)(!1),
                        { formatMessage: p } = (0, l.A)();
                    return (0, r.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, a.jsx)(m.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (_) return;
                        let r = { ...(0, s.HO)(e), isPresave: !e.isPresave };
                        u(!0);
                        let l = await e.toggleLike();
                        (u(!1),
                            l === o.J.OK
                                ? i((0, a.jsx)(I, { upcomingAlbum: r }), { containerId: n.u.INFO })
                                : i((0, a.jsx)(m.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                    }, [t.isAuthorized, _, e, i, p]);
                };
        },
        25772: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => Z });
            var a = i(88800),
                s = i(65724),
                r = i(84961),
                l = i(53548),
                o = i(58390),
                n = i(89009),
                c = i(17392),
                d = i(29993),
                m = i(8840),
                _ = i(98225),
                u = i(44230),
                p = i(72288),
                v = i(97956),
                b = i(74773),
                C = i(34303),
                h = i(44440),
                x = i(14912),
                A = i(93317),
                j = i(63807),
                T = i(87366),
                N = i(76099),
                I = i(17342),
                S = i(12739),
                f = i(14814),
                L = i(37523),
                g = i(86535),
                y = i(52676);
            let k = (0, r.PA)((e) => {
                    let { block: t, forwardRef: i, onLoad: s, ...r } = e;
                    if (
                        ((0, l.useEffect)(() => {
                            null == s || s();
                        }, [t.isVisible, s]),
                        !(0, S.Q)(t) || !t.isVisible)
                    )
                        return null;
                    let o = y.Y[t.type];
                    return (0, a.jsx)(o, { data: t.data, ref: i, 'data-intersection-property-id': t.id, ...r });
                }),
                R = (0, r.PA)((e) => {
                    let { ...t } = e;
                    return (0, a.jsx)(L.F, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(g.h.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, a.jsx)(k, { ...t }),
                    });
                }),
                E = (0, r.PA)((e) => ((0, S.Q)(e.block) ? (0, a.jsx)(R, { ...e }) : (0, a.jsx)(f.Z, { ...e })));
            var P = i(53736),
                w = i.n(P),
                O = i(5120),
                M = i(29595),
                D = i(74965),
                B = i(9492);
            let V = (e) => {
                    let { landing: t, tab: i } = e,
                        { notify: s, dismiss: r } = (0, D.l)(),
                        o = (0, l.useRef)(void 0),
                        n = (0, d.c)(() => {
                            (i.blocks.forEach((e) => {
                                e.isRejected && (0, I.v)(e.meta) && t.getBlock(e);
                            }),
                                r({ notificationId: o.current }),
                                i.setShouldReloadNotification(!1));
                        });
                    ((0, l.useEffect)(() => {
                        i.hasErrorBlocks &&
                            !i.shouldReloadNotification &&
                            setTimeout(() => {
                                ((o.current = s((0, a.jsx)(B.L, { reloadBlocks: n }), { containerId: M.u.ERROR, autoClose: !1 })), i.setShouldReloadNotification(!0));
                            });
                    }, [s, n, i.hasErrorBlocks, i.shouldReloadNotification, i]),
                        (0, l.useEffect)(
                            () => () => {
                                (r(), (0, O._n)(i) && i.setShouldReloadNotification(!1));
                            },
                            [r, i],
                        ));
                },
                U = (0, r.PA)((e) => {
                    var t;
                    let { landing: i, tab: s, tabIndex: r } = e,
                        o = (0, l.useMemo)(() => s.blocks.map(() => (0, l.createRef)()), [s.blocks]),
                        c = (0, m.BL)(o, { freezeOnceVisible: !0 });
                    return (
                        V({ landing: i, tab: s }),
                        (0, a.jsx)(n.h, {
                            tabId: s.meta.id,
                            tabPos: r + 1,
                            isTabSelectedByDefault: (null == (t = i.meta) ? void 0 : t.selectedTabIndex) === r,
                            children: (0, a.jsx)('div', {
                                className: w().root,
                                children: s.blocks.map((e, t) => {
                                    let { isIntersecting: s } = c[e.id] || {};
                                    return (0, a.jsx)(E, { landing: i, block: e, blockIndex: t, isIntersecting: s, forwardRef: o[t] }, e.id);
                                }),
                            }),
                        })
                    );
                });
            var W = i(56846),
                H = i(50408),
                z = i(10270),
                K = i(76106),
                Y = i(21971),
                F = i.n(Y);
            let $ = (0, r.PA)((e) => {
                    var t;
                    let { virtualItem: i, resizeObserver: s, isScrolling: r, style: o, ...n } = e,
                        [c, d] = (0, H.d)(),
                        [_, u] = (0, H.d)(),
                        { isIntersecting: p } =
                            null != (t = (0, m.BL)([{ current: c }], !c || (null == c ? void 0 : c.dataset.intersectionPropertyId) !== n.block.id)[n.block.id]) ? t : {};
                    return (
                        (0, l.useEffect)(
                            () => (
                                _ && s && s.observe(_),
                                () => {
                                    _ && s && s.unobserve(_);
                                }
                            ),
                            [_, s],
                        ),
                        (0, a.jsx)('div', {
                            'data-index': i.index,
                            className: F().root,
                            ref: u,
                            style: o,
                            children: (0, a.jsx)(E, { ...n, forwardRef: d, isIntersecting: p && !r }),
                        })
                    );
                }),
                X = (0, r.PA)((e) => {
                    var t, i;
                    let { landing: s, tab: r, tabIndex: c } = e,
                        m = (0, o.useSearchParams)(),
                        {
                            settings: { isMobile: _ },
                        } = (0, p.g)(),
                        [u, v] = (0, H.d)(),
                        b = (0, l.useRef)(!0),
                        [h, x] = (0, l.useState)(() => Array.from({ length: r.blocks.length }, (e, t) => t)),
                        A = (0, d.c)(() => {
                            let e = [];
                            (r.blocks.forEach((t, i) => {
                                var a;
                                (t.isVisible || ((null == (a = t.meta) ? void 0 : a.showPolicy) === W.E.LOAD_AND_SHOW && t.isNeededToLoad)) && e.push(i);
                            }),
                                x(e));
                        }),
                        j = (0, d.c)((e) => {
                            let t = h[e];
                            if (void 0 === t) return 300;
                            let i = r.blocks[t];
                            return (null == i ? void 0 : i.isVisible) ? K.X[i.type] : 0;
                        }),
                        { virtualizer: T, resizeObserver: N } = (0, z.r)({
                            count: null != (i = h.length) ? i : 0,
                            gap: _ ? 16 : 24,
                            getEstimateSize: j,
                            containerRef: u,
                        });
                    (0, l.useEffect)(() => {
                        var e;
                        if (!b.current) return;
                        let t = m.get(C.K.BLOCK),
                            i = r.blocks.findIndex((e) => e.id === t);
                        if (!h.includes(i)) return;
                        let a = null == (e = T.getOffsetForIndex(i, 'center')) ? void 0 : e[0];
                        (T.scrollToIndex(i, { align: 'center', behavior: 'auto' }), T.scrollOffset && a && 100 > Math.abs(T.scrollOffset - a) && (b.current = !1));
                    }, [h, m, r.blocks, T]);
                    let I = T.getTotalSize(),
                        S = T.getVirtualItems();
                    return (
                        V({ landing: s, tab: r }),
                        (0, a.jsx)(n.h, {
                            tabId: r.meta.id,
                            tabPos: c + 1,
                            isTabSelectedByDefault: (null == (t = s.meta) ? void 0 : t.selectedTabIndex) === c,
                            children: (0, a.jsx)('div', {
                                className: w().root,
                                style: { height: ''.concat(I, 'px') },
                                ref: v,
                                children: S.map((e) => {
                                    let t = h[e.index],
                                        i = r.blocks[Number(t)];
                                    return i
                                        ? (0, a.jsx)(
                                              $,
                                              {
                                                  virtualItem: e,
                                                  resizeObserver: N,
                                                  landing: s,
                                                  block: i,
                                                  blockIndex: Number(t),
                                                  isScrolling: T.isScrolling,
                                                  onLoad: A,
                                                  style: { transform: 'translate3d(0, '.concat(e.start - T.options.scrollMargin, 'px, 0)') },
                                              },
                                              e.key,
                                          )
                                        : null;
                                }),
                            }),
                        })
                    );
                }),
                G = (0, r.PA)((e) => {
                    var t, i, r;
                    let {
                            landing: o,
                            upperBlocks: n,
                            headerConcealerComponent: m,
                            tabsState: C,
                            containerClassName: h,
                            containerStyle: x,
                            headerClassName: I,
                            tabWithHeadingTitle: S,
                            tabWithCovers: f,
                            tabWithSubtitle: L,
                            stickyHeaderClassName: g,
                            staticHeaderClassName: y,
                            stickyHeaderTabIndex: k,
                            headerVariant: R = A.V.COMPOSITE,
                        } = e,
                        { tabs: E } = o,
                        P = (0, l.useId)(),
                        { isScrolling: O } = (0, l.useContext)(j.B),
                        { contentScrollRef: M } = (0, u.g)(),
                        {
                            experiments: D,
                            settings: { isMobile: B },
                        } = (0, p.g)(),
                        V = D.checkExperiment(v.z.WebNextVirtualSkeleton, 'on') ? X : U,
                        W = (0, d.c)((e) => {
                            var t;
                            (B ? window.scrollTo(0, 0) : M && (M.scrollTop = 0), null == (t = C.onTabChange) || t.call(C, e));
                        });
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            n,
                            m,
                            (0, a.jsx)(A.Y, {
                                className: (0, s.$)(w().header, I),
                                variant: R,
                                stickyClassName: g,
                                staticClassName: y,
                                stickyChild: (0, a.jsx)(N.wI, {
                                    isShimmerVisible: E.isLoading || o.isLoading,
                                    className: w().stickyTabs,
                                    shimmer: (0, a.jsx)(N.zr, {}),
                                    elementId: P,
                                    'data-test-id': c.e8.landing.MAIN_TABS,
                                    value: C.value,
                                    onTabChange: W,
                                    children:
                                        null == (t = E.data)
                                            ? void 0
                                            : t.flatMap((e, t) => {
                                                  let { meta: i, blocks: s } = e;
                                                  return s.length
                                                      ? [
                                                            (0, a.jsx)(
                                                                T.o,
                                                                {
                                                                    className: w().tab,
                                                                    value: t,
                                                                    'aria-label': i.title,
                                                                    title: i.title,
                                                                    'aria-hidden': !O && R !== A.V.STICKY,
                                                                    tabIndex: null != k ? k : O ? 0 : -1,
                                                                },
                                                                i.id,
                                                            ),
                                                        ]
                                                      : [];
                                              }),
                                }),
                                children: (0, a.jsx)(N.wI, {
                                    className: (0, s.$)(w().tabCarousel, w().important),
                                    elementId: P,
                                    'data-test-id': c.e8.landing.MAIN_TABS,
                                    ...C,
                                    children:
                                        null == (i = E.data)
                                            ? void 0
                                            : i.flatMap((e, t) => {
                                                  let { meta: i, data: s, blocks: r } = e;
                                                  return r.length
                                                      ? [
                                                            (0, a.jsx)(
                                                                T.o,
                                                                {
                                                                    className: w().tab,
                                                                    value: t,
                                                                    'aria-label': i.title,
                                                                    title: i.title,
                                                                    subtitle: null == s ? void 0 : s.subtitle,
                                                                    covers: null == s ? void 0 : s.covers,
                                                                    'aria-hidden': O,
                                                                    tabIndex: O ? -1 : 0,
                                                                    withCovers: f,
                                                                    withSubtitle: L,
                                                                    withHeading: S,
                                                                    isShimmerVisible: E.loadingState === b.G.PENDING,
                                                                },
                                                                i.id,
                                                            ),
                                                        ]
                                                      : [];
                                              }),
                                }),
                            }),
                            (0, a.jsx)('div', {
                                className: h,
                                style: x,
                                children:
                                    null == (r = E.data)
                                        ? void 0
                                        : r.map((e, t) =>
                                              e.blocks.length
                                                  ? (0, a.jsx)(
                                                        _.Kp,
                                                        {
                                                            className: w().tabPanel,
                                                            name: t,
                                                            value: C.value,
                                                            elementId: P,
                                                            children: (0, a.jsx)(V, { landing: o, tab: e, tabIndex: t }),
                                                        },
                                                        e.meta.id,
                                                    )
                                                  : null,
                                          ),
                            }),
                        ],
                    });
                }),
                Z = (0, r.PA)((e) => {
                    var t, i, s, r, c, d, u, b;
                    let {
                            landing: A,
                            headerConcealerComponent: j,
                            errorComponent: T,
                            containerClassName: N,
                            headerClassName: S,
                            containerStyle: f,
                            tabWithHeadingTitle: L,
                            tabWithCovers: g,
                            tabWithSubtitle: y,
                            staticHeaderClassName: k,
                            stickyHeaderClassName: R,
                            stickyHeaderTabIndex: P,
                            headerVariant: O,
                        } = e,
                        M = (0, o.useSearchParams)(),
                        D = (0, x.X)(),
                        B = ((e) =>
                            (0, l.useCallback)(
                                (t) => {
                                    var i;
                                    let a = null == (i = e.tabs.data) ? void 0 : i[t];
                                    null == a ||
                                        a.blocks.forEach((t) => {
                                            t.isOutdated && (0, I.v)(t.meta) && (t.setHasSentAnalyticsOnLoaded(!1), e.getBlock(t));
                                        });
                                },
                                [e],
                            ))(A),
                        { experiments: V } = (0, p.g)(),
                        W = V.checkExperiment(v.z.WebNextVirtualSkeleton, 'on') ? X : U,
                        H = (0, l.useMemo)(() => {
                            var e;
                            if (!A.isLoaded) return null;
                            let t = M.get(C.K.TAB),
                                i = null == (e = A.tabs.data) ? void 0 : e.findIndex((e) => e.meta.id === t);
                            return 'number' == typeof i && i >= 0 ? i : null;
                        }, [A.isLoaded, A.tabs.data, M]),
                        z = (0, _.zb)(null != (u = null != H ? H : null == (t = A.meta) ? void 0 : t.selectedTabIndex) ? u : 0),
                        K = null != (b = null == (i = A.tabs.data) ? void 0 : i.findIndex((e) => e.blocks.length > 0)) ? b : -1,
                        Y = (null == (r = A.tabs.data) || null == (s = r[z.value]) ? void 0 : s.blocks.length) ? z.value : K,
                        F = (0, l.useCallback)(
                            (e) => {
                                var t, i, a;
                                let s = null == (i = A.tabs.data) || null == (t = i[e]) ? void 0 : t.meta.id;
                                if ((e !== Y && B(Y), null == (a = z.onTabChange) || a.call(z, e), s)) {
                                    let e = (0, h.b)(C.K.TAB, s);
                                    e && D(e);
                                }
                            },
                            [Y, D, A.tabs.data, B, z],
                        ),
                        $ = !!(A.tabs.data && A.tabs.data.filter((e) => e.blocks.length > 0).length > 1),
                        Z = null == (c = A.tabs.data) ? void 0 : c[K],
                        q = (0, l.useMemo)(() => {
                            var e, t;
                            return null != (t = null == (e = A.upperBlocks) ? void 0 : e.map(() => (0, l.createRef)())) ? t : [];
                        }, [A.upperBlocks]),
                        Q = (0, m.BL)(q, { freezeOnceVisible: !0 }),
                        J = (0, l.useMemo)(() => {
                            var e;
                            if (null == (e = A.upperBlocks) ? void 0 : e.length)
                                return (0, a.jsx)(n.h, {
                                    tabId: '',
                                    tabPos: -1,
                                    isTabSelectedByDefault: !1,
                                    children: (0, a.jsx)('div', {
                                        className: w().upperBlocks,
                                        children: A.upperBlocks.map((e, t) => {
                                            let { isIntersecting: i } = Q[e.id] || {};
                                            return (0, a.jsx)(E, { landing: A, block: e, blockIndex: t, isIntersecting: i, forwardRef: q[t] }, e.id);
                                        }),
                                    }),
                                });
                        }, [null == (d = A.upperBlocks) ? void 0 : d.length, A, Q, q]);
                    return $
                        ? (0, a.jsx)(G, {
                              landing: A,
                              upperBlocks: J,
                              headerConcealerComponent: j,
                              tabsState: { value: Y, onTabChange: F },
                              containerClassName: N,
                              containerStyle: f,
                              headerClassName: S,
                              tabWithHeadingTitle: L,
                              tabWithCovers: g,
                              tabWithSubtitle: y,
                              staticHeaderClassName: k,
                              stickyHeaderClassName: R,
                              stickyHeaderTabIndex: P,
                              headerVariant: O,
                          })
                        : Z
                          ? (0, a.jsxs)('div', { className: N, style: f, children: [J, j, (0, a.jsx)(W, { landing: A, tab: Z, tabIndex: K })] })
                          : J
                            ? (0, a.jsxs)('div', { className: N, style: f, children: [J, j] })
                            : A.isLoadedAndEmpty || (A.isLoaded && K < 0)
                              ? (0, a.jsx)('div', { className: N, style: f, children: T })
                              : null;
                });
        },
        27021: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => _ });
            var a = i(88800),
                s = i(84961),
                r = i(53548),
                l = i(2058),
                o = i(29504),
                n = i(10465),
                c = i(13060),
                d = i(95960),
                m = i.n(d);
            let _ = (0, s.PA)((e) => {
                let { id: t, concert: i } = e,
                    { formatDate: s } = (0, l.A)(),
                    d = [],
                    _ = (0, a.jsx)(o.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                return (
                    (null == i ? void 0 : i.place) && d.push((0, a.jsx)(o.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: i.place })),
                    (null == i ? void 0 : i.datetime) &&
                        d.push(_, (0, a.jsx)(o.HL, { variant: 'span', size: 'm', weight: 'medium', className: m().time, children: s(i.datetime, (0, n.f)()) })),
                    (null == i ? void 0 : i.contentRating) && d.push(_, (0, a.jsx)(o.HL, { variant: 'span', size: 'm', weight: 'medium', children: i.contentRating })),
                    (0, a.jsxs)('div', {
                        className: m().root,
                        id: t,
                        children: [
                            (0, a.jsx)(o.HL, { variant: 'div', size: 'm', weight: 'medium', className: m().city, lineClamp: 1, children: null == i ? void 0 : i.city }),
                            (0, a.jsx)('div', { className: m().info, children: d.map((e, t) => (0, r.cloneElement)(e, { key: t })) }),
                            (null == i ? void 0 : i.isIdentityExperimentEnabled) &&
                                i.cashbackValuePercent &&
                                (0, a.jsx)(c.m, { className: m().cashback, valuePercent: i.cashbackValuePercent }),
                            !(null == i ? void 0 : i.isIdentityExperimentEnabled) &&
                                (null == i ? void 0 : i.isCashbackExperimentEnabled) &&
                                i.cashbackTitle &&
                                (0, a.jsx)(c.m, { className: m().cashback, title: i.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        28198: (e) => {
            e.exports = {
                root: 'Q2vLumen_root__KMtjw',
                root_clickable: 'Q2vLumen_root_clickable__Yczhj',
                image: 'Q2vLumen_image__6dREJ',
                imageBlurred: 'Q2vLumen_imageBlurred__NyTmk',
                haze: 'Q2vLumen_haze__ZmnSW',
            };
        },
        28896: (e) => {
            e.exports = {
                root: 'ArtistActionItems_root__r3J3K',
                item: 'ArtistActionItems_item__8DYtg',
                ripple: 'ArtistActionItems_ripple__3t0gz',
                menuItem: 'ArtistActionItems_menuItem__qWymt',
                cover: 'ArtistActionItems_cover__4E3qx',
                text: 'ArtistActionItems_text__RcAY_',
            };
        },
        29343: (e) => {
            e.exports = { root: 'PlaylistFilter_root__AnfqR', root_selected: 'PlaylistFilter_root_selected__DxSW9' };
        },
        29585: (e) => {
            e.exports = {
                root: 'VibesAgent_root__vZxtE',
                controls: 'VibesAgent_controls__6jNJF',
                header: 'VibesAgent_header__PrZP3',
                important: 'VibesAgent_important__5yfOt',
                tab: 'VibesAgent_tab__Wwcd_',
                tabShimmer: 'VibesAgent_tabShimmer__TnlQU',
                tabCarousel: 'VibesAgent_tabCarousel__q__hc',
                item: 'VibesAgent_item__UBIWG',
            };
        },
        31108: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => f });
            var a = i(88800),
                s = i(65724),
                r = i(84961),
                l = i(53548),
                o = i(2058),
                n = i(88969),
                c = i(62414),
                d = i(17392),
                m = i(79070),
                _ = i(96817),
                u = i(29832),
                p = i(52300),
                v = i(7555),
                b = i(29504),
                C = i(25596),
                h = i(13946),
                x = i(32414),
                A = i(72288),
                j = i(81877),
                T = i(90224),
                N = i(49738),
                I = i(43708),
                S = i.n(I);
            let f = (0, r.PA)((e) => {
                let { className: t, children: i, upcomingAlbum: r, contentLinesCount: I } = e,
                    { user: f } = (0, A.g)(),
                    L = (0, c.D)(),
                    { formatMessage: g, formatDate: y } = (0, o.A)(),
                    k = (0, C.P)(r),
                    R = r.getKey('PlayButton'),
                    E = r.getKey('LikeButton'),
                    P = (0, l.useMemo)(() => {
                        let e = g({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: r.title }),
                            t = r.isPresave ? g({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [g, r.title, r.isPresave]),
                    w = (0, m.L)(() =>
                        (0, a.jsxs)(v.t, {
                            className: S().cover,
                            radius: 's',
                            withShadow: !0,
                            children: [
                                (0, a.jsx)(j.B, { className: S().image, src: r.coverUri, size: 200, fit: 'cover', alt: P, withAvatarReplace: !0 }),
                                (0, a.jsx)(u.hg, {
                                    className: S().controls,
                                    playControl: (0, a.jsx)(
                                        _.$,
                                        {
                                            className: S().lockButton,
                                            disabled: !0,
                                            radius: 'xxxl',
                                            variant: 'default',
                                            size: 's',
                                            icon: (0, a.jsx)(p.I, { variant: 'lock', size: 'xxs', className: S().lockIcon }),
                                            'aria-label': g({ id: 'entity-names.upcoming-album-play-disabled' }),
                                            'data-test-id': d.Kq.album.UPCOMING_ALBUM_LOCK_BUTTON,
                                        },
                                        R,
                                    ),
                                    likeControl: (0, a.jsx)(
                                        N.c,
                                        {
                                            className: (0, s.$)(S().control, S().presaveButton),
                                            isLiked: r.isPresave,
                                            onClick: k,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !f.isAuthorized,
                                        },
                                        E,
                                    ),
                                }),
                            ],
                        }),
                    );
                return (0, a.jsxs)(u.MN, {
                    ref: L,
                    className: (0, s.$)(S().root, t),
                    'aria-label': P,
                    explicitMarkComponent: r.explicitDisclaimer && (0, a.jsx)(T.N, { getDescriptionTexts: r.getDescriptionTexts, variant: r.explicitDisclaimer }),
                    title: (0, a.jsx)(b.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': d.Kq.album.UPCOMING_ALBUM_TITLE,
                        children: r.title,
                    }),
                    contentLinesCount: I,
                    view: w,
                    description: (0, a.jsx)(h.i, { className: S().artists, artists: r.artists, lineClamp: 1, linkClassName: S().artistLink, captionSize: 's' }),
                    'data-test-id': d.Kq.album.UPCOMING_ALBUM_CARD,
                    children: [
                        (0, a.jsx)(b.HL, {
                            className: S().releaseDate,
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            'data-test-id': d.Kq.album.UPCOMING_ALBUM_RELEASE_DATE,
                            children: (0, a.jsx)(n.A, { id: 'entity-names.upcoming-album-date', values: { releaseDate: y(r.releaseDate, (0, x.s)()) } }),
                        }),
                        i,
                    ],
                });
            });
        },
        31423: (e) => {
            e.exports = { root: 'AfishaWidget_root__Fu9a6', content: 'AfishaWidget_content__YFmbs', widget: 'AfishaWidget_widget__ZdvqS' };
        },
        31893: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { z: () => a }),
                (function (e) {
                    ((e.NONE = 'none'), (e.DEFAULT = 'default'), (e.CUSTOM = 'custom'));
                })(a || (a = {})));
        },
        32094: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => p });
            var a = i(88800),
                s = i(65724),
                r = i(84961),
                l = i(53548),
                o = i(17392),
                n = i(90688),
                c = i(7555),
                d = i(29504),
                m = i(91292),
                _ = i(97754),
                u = i.n(_);
            let p = (0, r.PA)((e) => {
                var t;
                let { className: i, title: r, weblink: _, linkClassName: p, covers: v, coverSize: b = 100, captionVariant: C = 'div' } = e,
                    h = (0, l.useMemo)(() => {
                        var e;
                        if (null == v || null == (e = v[0]) ? void 0 : e.color) return { '--subcover-background-color': v[0].color };
                    }, [v]);
                return (0, a.jsx)(m.N, {
                    href: _,
                    className: (0, s.$)(u().link, p),
                    'data-test-id': o.OA.mix.MIX_CARD,
                    children: (0, a.jsxs)(c.t, {
                        radius: 'm',
                        style: h,
                        className: (0, s.$)(u().root, i),
                        children: [
                            (0, a.jsxs)('div', {
                                className: u().plate,
                                'data-test-id': o.OA.mix.MIX_CARD_PLATE,
                                children: [
                                    (0, a.jsx)('div', { className: u().subcover, 'data-test-id': o.OA.mix.MIX_CARD_SUBCOVER }),
                                    (0, a.jsx)(n._V, {
                                        src: null == v || null == (t = v[0]) ? void 0 : t.uri,
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: u().cover,
                                        size: b,
                                        'data-test-id': o.OA.mix.MIX_CARD_COVER,
                                    }),
                                ],
                            }),
                            (0, a.jsx)('div', {
                                className: u().header,
                                children: (0, a.jsx)(d.HL, {
                                    variant: C,
                                    size: 'xs',
                                    weight: 'bold',
                                    className: u().title,
                                    lineClamp: 2,
                                    'data-test-id': o.OA.mix.MIX_CARD_HEADER,
                                    children: r,
                                }),
                            }),
                        ],
                    }),
                });
            });
        },
        32506: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => x });
            var a = i(88800),
                s = i(65724),
                r = i(84961),
                l = i(53548),
                o = i(35412),
                n = i(17392),
                c = i(83961),
                d = i(96817),
                m = i(29504),
                _ = i(72288),
                u = i(83182),
                p = i.n(u),
                v = i(2058),
                b = i(11372),
                C = i(44230);
            let h = (0, r.PA)((e) => {
                    let { message: t, title: i, className: r, credits: l, messageClassName: c } = e,
                        {
                            modals: { overviewModal: d },
                            settings: { isMobile: u },
                        } = (0, _.g)(),
                        { formatMessage: h } = (0, v.A)(),
                        { contentRef: x } = (0, C.g)();
                    return (0, a.jsxs)(b.a, {
                        title: i,
                        titleDataTestId: n.Kq.overview.OVERVIEW_MODAL_TITLE,
                        className: (0, s.$)(p().modal, r),
                        contentClassName: p().modalContent,
                        overlayClassName: p().modalOverlay,
                        headerClassName: (0, s.$)(p().modalHeader, { [p().modalHeader_withTitle]: i }),
                        size: 'fitContent',
                        placement: u ? 'default' : 'right',
                        open: d.isOpened,
                        onOpenChange: d.onOpenChange,
                        onClose: d.close,
                        portalNode: u ? null : x,
                        isMobile: u,
                        labelClose: h({ id: 'interface-actions.close' }),
                        'data-test-id': n.Kq.overview.OVERVIEW_MODAL,
                        closeButtonDataTestId: n.Kq.overview.OVERVIEW_MODAL_CLOSE_BUTTON,
                        children: [
                            (0, a.jsx)(m.HL, {
                                className: (0, s.$)(p().message, c),
                                size: 'l',
                                variant: 'div',
                                dangerouslySetInnerHTML: { __html: (0, o.ky)(t) },
                                'data-test-id': n.Kq.overview.OVERVIEW_MODAL_MESSAGE,
                            }),
                            l,
                        ],
                    });
                }),
                x = (0, r.PA)((e) => {
                    let {
                            meta: t,
                            buttonClassName: i,
                            modalClassName: r,
                            creditsModal: u,
                            messageClassName: v,
                            messageModalClassName: b,
                            textButton: C,
                            withShowButton: x,
                        } = e,
                        A = (0, l.useRef)(null),
                        {
                            modals: { overviewModal: j },
                        } = (0, _.g)(),
                        { isTruncated: T } = (0, c.W)(A),
                        N = (T && t.isExpandable) || x;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(m.HL, {
                                ref: A,
                                className: (0, s.$)(p().message, v),
                                size: 'm',
                                variant: 'div',
                                lineClamp: t.visibleLinesCount,
                                dangerouslySetInnerHTML: { __html: (0, o.ky)(t.message || '') },
                                'data-test-id': n.Kq.overview.OVERVIEW_MESSAGE,
                            }),
                            N &&
                                t.message &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(d.$, {
                                            className: (0, s.$)(p().button, i),
                                            onClick: j.open,
                                            radius: 'xs',
                                            variant: 'text',
                                            color: 'secondary',
                                            withRipple: !1,
                                            'data-test-id': n.Kq.overview.OVERVIEW_FURTHER_BUTTON,
                                            children: (0, a.jsx)(m.HL, { size: 'm', variant: 'span', children: C }),
                                        }),
                                        (0, a.jsx)(h, { message: t.message, title: t.title, className: r, credits: u, messageClassName: b }),
                                    ],
                                }),
                        ],
                    });
                });
        },
        33075: (e) => {
            e.exports = { root: 'CashbackPercentBadge_root__rP2Rj', icon: 'CashbackPercentBadge_icon__dq7pE', text: 'CashbackPercentBadge_text__Uol3I' };
        },
        34007: (e) => {
            e.exports = {
                root_withControls: 'CollectionPlaylists_root_withControls__YV7o_',
                controls: 'CollectionPlaylists_controls___7XSv',
                header: 'CollectionPlaylists_header__EDtBS',
                important: 'CollectionPlaylists_important__oumcA',
                tab: 'CollectionPlaylists_tab__PppbA',
                tabShimmer: 'CollectionPlaylists_tabShimmer__U_ZFn',
                tabCarousel: 'CollectionPlaylists_tabCarousel__hWuL_',
                tabPanel: 'CollectionPlaylists_tabPanel__wSwRR',
                carouselEmpty: 'CollectionPlaylists_carouselEmpty__SVn6E',
                createPlaylistCard: 'CollectionPlaylists_createPlaylistCard__1cMca',
                item: 'CollectionPlaylists_item__YeviY',
            };
        },
        34105: (e) => {
            e.exports = {
                root: 'ShimmerMapBlock_root__TAa25',
                heading: 'ShimmerMapBlock_heading__rF7ts',
                mapImage: 'ShimmerMapBlock_mapImage__bQbYD',
                address: 'ShimmerMapBlock_address__GgNdC',
                metroStations: 'ShimmerMapBlock_metroStations__omTcd',
            };
        },
        34924: (e) => {
            e.exports = {
                root: 'PromotionShimmer_root__Nb8vU',
                cover: 'PromotionShimmer_cover__WYwD7',
                meta: 'PromotionShimmer_meta__9eRwi',
                heading: 'PromotionShimmer_heading__38lLU',
                title: 'PromotionShimmer_title__TLj1g',
                subtitle: 'PromotionShimmer_subtitle__LS5v_',
            };
        },
        36930: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => o });
            var a = i(88800),
                s = i(19994),
                r = i(78373),
                l = i.n(r);
            let o = (e) => {
                let { isActive: t, withMeta: i, withPriceButton: r } = e;
                return (0, a.jsxs)('div', {
                    className: l().root,
                    children: [
                        (0, a.jsx)(s.W, { radius: 'm', className: l().shimmerCover, isActive: t }),
                        (0, a.jsxs)('div', {
                            className: l().meta,
                            children: [
                                (0, a.jsx)(s.W, { isActive: t, radius: 'xxxl', className: l().shimmerTitle }),
                                i &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(s.W, { isActive: t, radius: 'xxxl', className: l().shimmerInfo }),
                                            (0, a.jsx)(s.W, { isActive: t, radius: 'xxxl', className: l().shimmerCity }),
                                        ],
                                    }),
                            ],
                        }),
                        r && (0, a.jsx)(s.W, { isActive: t, radius: 'xxxl', className: l().shimmerButton }),
                    ],
                });
            };
        },
        37659: (e) => {
            e.exports = { root: 'CollectionVibeRooms_root__TCV_x' };
        },
        37862: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => a });
            var a = (function (e) {
                return ((e.ALL = 'all'), e);
            })({});
        },
        38371: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => P });
            var a = i(88800),
                s = i(84961),
                r = i(88969),
                l = i(87999),
                o = i(62414),
                n = i(80643),
                c = i(17392),
                d = i(29993),
                m = i(79070),
                _ = i(78275),
                u = i(96817),
                p = i(73170),
                v = i(29504),
                b = i(78940),
                C = i(72288),
                h = i(97956),
                x = i(49176),
                A = i(67174),
                j = i(76484),
                T = i(44167),
                N = i(13060);
            let I = ' • ',
                S = (e, t) => {
                    let i = [];
                    return (e.city && i.push(e.city), e.place && i.push(e.place), i.join(t));
                };
            var f = i(95960),
                L = i.n(f);
            let g = (0, s.PA)((e) => {
                let { concert: t, cashback: i } = e;
                return (0, a.jsxs)('div', {
                    className: L().meta,
                    children: [
                        (0, a.jsx)(v.HL, {
                            variant: 'span',
                            type: 'controls',
                            size: 'l',
                            weight: 'medium',
                            lineClamp: 1,
                            className: L().title,
                            'data-test-id': c.OA.concert.CONCERT_CARD_TITLE,
                            children: t.title,
                        }),
                        (0, a.jsxs)(v.HL, {
                            variant: 'span',
                            type: 'controls',
                            weight: 'medium',
                            className: L().info,
                            children: [
                                (0, a.jsx)(v.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    lineClamp: 1,
                                    className: L().location,
                                    'aria-label': S(t, ' '),
                                    'data-test-id': c.OA.concert.CONCERT_CARD_LOCATION,
                                    children: S(t, I),
                                }),
                                (0, a.jsx)(v.HL, { 'aria-hidden': !0, className: L().separator, variant: 'span', type: 'controls', weight: 'medium', children: I }),
                                (0, a.jsx)(v.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    className: L().rating,
                                    'data-test-id': c.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                    children: t.contentRating,
                                }),
                            ],
                        }),
                        i,
                    ],
                });
            });
            var y = i(52018),
                k = i(72876),
                R = i(78373),
                E = i.n(R);
            let P = (0, s.PA)((e) => {
                var t, i, s;
                let { concert: I, withMask: S = !0, withPriceButton: f, withInlineMeta: L = !1 } = e,
                    { state: R, toggleTrue: P, toggleFalse: w } = (0, _.e)(!1),
                    O = (0, o.D)(),
                    { experiments: M } = (0, C.g)(),
                    D = M.checkExperiment(h.z.WebNextConcertPage, 'on'),
                    B = (0, n.S)(),
                    V = (0, j.Y)(),
                    { href: U } = (0, A.u)('/concert/:concertId', { params: { concertId: I.id } }),
                    W = (0, b.Z)(U),
                    H = V(I),
                    z = (0, d.c)((e) => {
                        (B({ to: l.AppScreen.ConcertPurchaseScreen }), P(), null == e || e.stopPropagation());
                    }),
                    K = (0, d.c)((e) => {
                        if (!D) return void z(e);
                        (B({ to: l.AppScreen.ConcertScreen }), W(e));
                    }),
                    Y = (0, d.c)((e) => {
                        (e.code === x.v.SPACE || e.code === x.v.ENTER) && (e.preventDefault(), K());
                    }),
                    F = (0, d.c)((e) => {
                        D && (z(e), e.preventDefault());
                    }),
                    $ = (0, m.L)(() => {
                        let e = I.isIdentityExperimentEnabled && I.cashbackValuePercent,
                            t = !I.isIdentityExperimentEnabled && I.isCashbackExperimentEnabled && I.cashbackTitle;
                        if (e || t)
                            return (0, a.jsx)(N.m, {
                                className: E().cashback,
                                titleClassName: E().cashbackTitle,
                                title: I.cashbackTitle,
                                valuePercent: I.cashbackValuePercent,
                            });
                    }),
                    X = (0, a.jsx)(y.M, { concert: I, withCashback: !1, withInlineMeta: L, titleSize: 'l' }),
                    G = (0, a.jsx)(g, { concert: I, cashback: $ });
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)('div', {
                            className: E().root,
                            role: 'button',
                            tabIndex: 0,
                            onClick: K,
                            onKeyDown: Y,
                            ref: O,
                            'data-test-id': c.OA.concert.CONCERT_CARD,
                            children: [
                                (0, a.jsx)(p.q, { children: (0, a.jsx)(v.HL, { variant: 'div', children: (0, a.jsx)(r.A, { id: 'entity-names.concert' }) }) }),
                                (0, a.jsx)('div', {
                                    className: E().cover,
                                    children: (0, a.jsx)(k.W, {
                                        datetime: I.datetime,
                                        coverColor: null == (t = I.cover) ? void 0 : t.color,
                                        uri: null == (i = I.cover) ? void 0 : i.uri,
                                        withMask: S,
                                        cashbackPercent: I.isIdentityExperimentEnabled ? I.cashbackValuePercent : void 0,
                                    }),
                                }),
                                I.isIdentityExperimentEnabled ? X : G,
                                !!(null == (s = I.price) ? void 0 : s.value) && (0, a.jsx)(p.q, { children: (0, a.jsx)(v.HL, { variant: 'div', children: H }) }),
                                f &&
                                    (0, a.jsx)(u.$, {
                                        'aria-hidden': !0,
                                        tabIndex: -1,
                                        radius: 'xxxl',
                                        className: E().button,
                                        size: 'default',
                                        variant: 'default',
                                        color: 'primary',
                                        onClick: F,
                                        'data-test-id': c.OA.concert.CONCERT_CARD_BUTTON,
                                        children: H,
                                    }),
                            ],
                        }),
                        (0, a.jsx)(T.h, { dataSessionId: I.dataSessionId, isOpened: R, onOpen: P, onClose: w }),
                    ],
                });
            });
        },
        38487: (e) => {
            e.exports = { root: 'ItemList_root__0fUbd', shimmer: 'ItemList_shimmer__hIZtA' };
        },
        38754: (e) => {
            e.exports = {
                root: 'ArtistWithItemsShimmer_root__0UQ8u',
                actionItems: 'ArtistWithItemsShimmer_actionItems__drxv9',
                actionItem: 'ArtistWithItemsShimmer_actionItem__NksfP',
                actionCover: 'ArtistWithItemsShimmer_actionCover__4LUi8',
                actionTextContainer: 'ArtistWithItemsShimmer_actionTextContainer__Qijsx',
                actionText: 'ArtistWithItemsShimmer_actionText__nUSLH',
                actionText_title: 'ArtistWithItemsShimmer_actionText_title__cXusB',
            };
        },
        38769: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => b });
            var a = i(88800),
                s = i(96706),
                r = i(53548),
                l = i(2058),
                o = i(79390),
                n = i(29595),
                c = i(74965),
                d = i(72288),
                m = i(66943),
                _ = i(4370),
                u = i(15077),
                p = i(42729);
            let v = (e) => {
                    let { clip: t, closeToast: i } = e;
                    return (0, a.jsx)(p.O, {
                        entityVariant: u.c.CLIP,
                        entityTitle: t.title,
                        collectionUrl: _.Z.collectionClips.href,
                        isLiked: t.isLiked,
                        closeToast: i,
                        coverUri: t.thumbnail,
                    });
                },
                b = (e) => {
                    let { user: t, fullscreenVideoPlayer: i, collection: _ } = (0, d.g)(),
                        { notify: u } = (0, c.l)(),
                        [p, b] = (0, r.useState)(!1),
                        { formatMessage: C } = (0, l.A)();
                    return (0, r.useCallback)(async () => {
                        if (!e) return;
                        let r = i.modal.isOpened ? n.u.FULLSCREEN_INFO : n.u.INFO,
                            l = i.modal.isOpened ? n.u.FULLSCREEN_ERROR : n.u.ERROR;
                        if (!t.isAuthorized) return void u((0, a.jsx)(m.h, { error: C({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l });
                        if (p) return;
                        let c = { ...(0, s.HO)(e), isLiked: !e.isLiked };
                        b(!0);
                        let d = await e.toggleLike();
                        (b(!1),
                            _.clips.reset(),
                            d === o.f.OK
                                ? u((0, a.jsx)(v, { clip: c }), { containerId: r })
                                : u((0, a.jsx)(m.h, { error: C({ id: 'error-messages.error-during-action' }) }), { containerId: l }));
                    }, [e, t.isAuthorized, p, C, u, i.modal.isOpened, _.clips]);
                };
        },
        39238: (e) => {
            e.exports = { root: 'CollectionArtistsEmpty_root__i2XSM', text: 'CollectionArtistsEmpty_text__E_gjT' };
        },
        40989: (e) => {
            e.exports = {
                root: 'MixCard_root__9tPLV',
                header: 'MixCard_header__j7Zpo',
                title: 'MixCard_title__nhghp',
                cover: 'MixCard_cover__oSu73',
                covers: 'MixCard_covers__S61hz',
                covers_stack: 'MixCard_covers_stack__VeHDp',
                covers_radial: 'MixCard_covers_radial__orE40',
            };
        },
        41153: (e) => {
            e.exports = { root_mobile: 'VibeRoomContextMenu_root_mobile__mH0PT' };
        },
        41578: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => d });
            var a = i(53548),
                s = i(58390),
                r = i(8655),
                l = i(69704),
                o = i(12533),
                n = i(34303);
            let c = { [r.S.Light]: 'yandex_music', [r.S.Dark]: 'yandex_music_dark' },
                d = () => {
                    let e = (0, s.useSearchParams)(),
                        { theme: t } = (0, l.W)();
                    return (0, a.useCallback)(
                        (i) => {
                            if (!t) return i;
                            let a = new URLSearchParams(e);
                            a.set('wl', c[t]);
                            let s = e.get(n.K.UTM_CAMPAIGN);
                            return (s && a.set('meta', 'campaignid_'.concat(s)), (0, o.C)(i, a));
                        },
                        [t, e],
                    );
                };
        },
        41927: (e) => {
            e.exports = { item: 'MixesMusic_item__9QVmW', shimmer: 'MixesMusic_shimmer__rJ3xa' };
        },
        42789: (e) => {
            e.exports = {
                root: 'VibeRoomCard_root__5_iia',
                root_mobile: 'VibeRoomCard_root_mobile__v2PVq',
                cardWrapper: 'VibeRoomCard_cardWrapper__SjvtK',
                cardWrapper_mobile: 'VibeRoomCard_cardWrapper_mobile__Zq5mQ',
                roomInfo: 'VibeRoomCard_roomInfo__OH814',
                roomInfo_mobile: 'VibeRoomCard_roomInfo_mobile__q49k2',
                unavailableStatus: 'VibeRoomCard_unavailableStatus___TRYU',
                unavailableStatusDot: 'VibeRoomCard_unavailableStatusDot__HhbgW',
                roomName: 'VibeRoomCard_roomName__vMTor',
                roomName_disabled: 'VibeRoomCard_roomName_disabled__ADQ3G',
                roomName_mobile: 'VibeRoomCard_roomName_mobile__AcCl_',
                textField: 'VibeRoomCard_textField__SZ7Nw',
                avatarsWrapper: 'VibeRoomCard_avatarsWrapper__y7_Rm',
                avatarsWrapper_mobile: 'VibeRoomCard_avatarsWrapper_mobile__jGyAN',
                avatarsWrapper_visible: 'VibeRoomCard_avatarsWrapper_visible__RCg1b',
                avatarsWrapper_disabled: 'VibeRoomCard_avatarsWrapper_disabled__P_0ea',
                playingAnimation: 'VibeRoomCard_playingAnimation__biX8D',
                cardControls: 'VibeRoomCard_cardControls__ffMym',
                control: 'VibeRoomCard_control__QKRAh',
                playControl: 'VibeRoomCard_playControl__DnQ9O',
                menuControl: 'VibeRoomCard_menuControl__KwpDi',
                pinControl: 'VibeRoomCard_pinControl__C3epe',
                menuControl_mobile: 'VibeRoomCard_menuControl_mobile__VsaOD',
                pinControl_mobile: 'VibeRoomCard_pinControl_mobile__5gVK6',
            };
        },
        43378: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => d });
            var a = i(88800),
                s = i(65724),
                r = i(19994),
                l = i(72288),
                o = i(76524),
                n = i(3150),
                c = i.n(n);
            let d = (e) => {
                let { isActive: t, className: i, 'aria-label': n, withMobileLayout: d = !1 } = e,
                    {
                        settings: { isMobile: m },
                    } = (0, l.g)(),
                    _ = d && m;
                return (0, a.jsxs)('div', {
                    'aria-label': n,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(c().root, { [c().root_mobile]: _ }, i),
                    children: [
                        (0, a.jsxs)('div', {
                            className: (0, s.$)(c().coverContainer, { [c().coverContainer_mobile]: _ }),
                            children: [
                                (0, a.jsx)(o.b, { align: 'back', children: (0, a.jsx)(r.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
                                (0, a.jsx)(o.b, { align: 'front', children: (0, a.jsx)(r.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
                            ],
                        }),
                        (0, a.jsx)('div', {
                            className: (0, s.$)(c().infoContainer, { [c().infoContainer_mobile]: _ }),
                            children: (0, a.jsx)(r.W, { isActive: t, className: (0, s.$)(c().title, { [c().title_mobile]: _ }), radius: 's' }),
                        }),
                    ],
                });
            };
        },
        43708: (e) => {
            e.exports = {
                root: 'UpcomingAlbumCard_root__lSZ5l',
                controls: 'UpcomingAlbumCard_controls__fQ50f',
                cover: 'UpcomingAlbumCard_cover__qvU1m',
                image: 'UpcomingAlbumCard_image__WKtGR',
                releaseDate: 'UpcomingAlbumCard_releaseDate__EvDzB',
                artists: 'UpcomingAlbumCard_artists__Jp1OE',
                artistLink: 'UpcomingAlbumCard_artistLink__RSqXw',
                control: 'UpcomingAlbumCard_control__pSMdI',
                presaveButton: 'UpcomingAlbumCard_presaveButton__ixwy_',
                lockButton: 'UpcomingAlbumCard_lockButton__9_qyp',
                lockIcon: 'UpcomingAlbumCard_lockIcon__wtvkP',
            };
        },
        43947: (e) => {
            e.exports = {
                root: 'MapBlock_root__lcL__',
                heading: 'MapBlock_heading__20gje',
                linkContainer: 'MapBlock_linkContainer__iO0dw',
                mapImage: 'MapBlock_mapImage__Qch0h',
                addressContainer: 'MapBlock_addressContainer__gFnzq',
                address: 'MapBlock_address__UofT6',
                metroStations: 'MapBlock_metroStations__T3Zpc',
            };
        },
        44131: (e) => {
            e.exports = {
                root: 'InStyle_root__ZsdXE',
                controls: 'InStyle_controls__mGqhj',
                header: 'InStyle_header__C2AWP',
                important: 'InStyle_important__msPsl',
                tab: 'InStyle_tab__DeURY',
                tabCarousel: 'InStyle_tabCarousel__SXqBO',
                item: 'InStyle_item__e5_Qz',
            };
        },
        44167: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => x });
            var a = i(88800),
                s = i(53548),
                r = i(2058),
                l = i(30282),
                o = i(17392),
                n = i(96817),
                c = i(11372),
                d = i(73170),
                m = i(4086),
                _ = i(41928),
                u = i(12149),
                p = i(58390),
                v = i(12533),
                b = i(34303),
                C = i(31423),
                h = i.n(C);
            let x = (e) => {
                let { dataSessionId: t, isOpened: i, onOpen: C, onClose: x } = e,
                    A = (0, _.N)().get(m.V4),
                    { formatMessage: j } = (0, r.A)(),
                    T = (() => {
                        let e = (0, p.useSearchParams)();
                        return (0, s.useCallback)(
                            (t) => {
                                let i = e.get(b.K.UTM_CAMPAIGN);
                                if (!i) return t;
                                let a = new URLSearchParams();
                                return (a.set(b.K.UTM_SOURCE, 'campaignid_'.concat(i)), (0, v.C)(t, a));
                            },
                            [e],
                        );
                    })(),
                    N = (0, s.useCallback)(
                        (e) => {
                            e.origin === A.afisha.host && 'close' === e.data.type && x();
                        },
                        [x, A.afisha.host],
                    );
                (0, s.useEffect)(
                    () => (
                        window.addEventListener('message', N),
                        () => {
                            window.removeEventListener('message', N);
                        }
                    ),
                    [N],
                );
                let I = (0, s.useCallback)(
                        (e) => {
                            e ? C() : x();
                        },
                        [x, C],
                    ),
                    S = (0, l.tE)(A, (0, u.u)()),
                    f = T(''.concat(A.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(S));
                return (0, a.jsxs)(c.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: i,
                    onOpenChange: I,
                    onClose: x,
                    showHeader: !1,
                    className: h().widget,
                    contentClassName: h().content,
                    overlayColor: 'full',
                    'data-test-id': o.OA.concert.AFISHA_MODAL,
                    children: [
                        (0, a.jsx)(d.q, { children: (0, a.jsx)(n.$, { 'aria-label': j({ id: 'interface-actions.close' }), onClick: x }) }),
                        (0, a.jsx)('iframe', {
                            src: f,
                            className: h().root,
                            referrerPolicy: 'no-referrer',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read clipboard-write',
                        }),
                    ],
                });
            };
        },
        44440: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a });
            let a = (e, t) => {
                let i = new URL(window.location.href),
                    a = i.searchParams;
                return (a.set(e, t), (i.search = a.toString()), i.toString());
            };
        },
        44599: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => m });
            var a = i(87999),
                s = i(38982),
                r = i(84423),
                l = i(89846),
                o = i(64543),
                n = i(63582),
                c = i(29993),
                d = i(12816);
            let m = (0, n.n)({ event: 'LandingBlock.Navigated', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, (e) => {
                let t = (0, r.s)(),
                    { hash: i } = (0, l.g)(),
                    { screen: n, block: m, object: _, tab: u } = (0, o.j)();
                return (0, c.c)(() => {
                    let r = null == n ? void 0 : n.pageIdForFrom;
                    if (!t || !n || !m || !_ || void 0 === _.objectId || !r || !d.x.includes(r) || void 0 === i || !e) return;
                    let l = n.pageId;
                    if (void 0 === l) return;
                    let o = {
                        hash: i,
                        pageId: r,
                        entityType: m.blockType,
                        entityId: m.blockId,
                        entityPosX: m.blockPosX,
                        entityPosY: m.blockPosY,
                        objectId: _.objectId,
                        objectType: _.objectType,
                        objectPosX: _.objectPosX,
                        objectPosY: _.objectPosY,
                        objectsCount: m.objectsCount,
                        from: l,
                        to: a.AppScreen.VideoScreen,
                    };
                    (d.q.some((e) => e === r) &&
                        ((o.tabId = null == u ? void 0 : u.tabId),
                        (o.tabPos = null == u ? void 0 : u.tabPos),
                        (o.isTabSelectedByDefault = null == u ? void 0 : u.isTabSelectedByDefault)),
                        n.skeletonId && (o.skeletonId = n.skeletonId),
                        n.mainObjectType && (o.mainObjectType = n.mainObjectType),
                        n.mainObjectId && (o.mainObjectId = n.mainObjectId),
                        Object.values(o).some((e) => void 0 === e) || (0, s.QS)(t.evgenInstance, o));
                });
            });
        },
        44616: (e) => {
            e.exports = {
                root: 'CarouselWithColumnsBlock_root__v_qoo',
                controls: 'CarouselWithColumnsBlock_controls__yCSFo',
                item: 'CarouselWithColumnsBlock_item__RBGs4',
                item_columns_one: 'CarouselWithColumnsBlock_item_columns_one__GuhDB',
                item_columns_two: 'CarouselWithColumnsBlock_item_columns_two__46rgZ',
                column: 'CarouselWithColumnsBlock_column__oMRES',
                backwardControl: 'CarouselWithColumnsBlock_backwardControl__b_uKR',
                controlsContainer: 'CarouselWithColumnsBlock_controlsContainer__4_1Ao',
            };
        },
        46033: (e) => {
            e.exports = {
                root: 'ConcertsBlock_root__d_1G3',
                controls: 'ConcertsBlock_controls__oULxu',
                item: 'ConcertsBlock_item__jMAX9',
                item_singleColumn: 'ConcertsBlock_item_singleColumn__p8ilp',
                preventScroll: 'ConcertsBlock_preventScroll__YeeZH',
                concertsColumn: 'ConcertsBlock_concertsColumn__2M2t_',
            };
        },
        46462: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => m });
            var a = i(53548),
                s = i(47149),
                r = i(63582),
                l = i(59791),
                o = i(7695),
                n = i(89846),
                c = i(64543),
                d = i(56374);
            let m = (0, r.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, a.useContext)(l.I),
                    { hash: t } = (0, n.g)(),
                    { screen: i, tab: r } = (0, c.j)();
                return (0, d.c)((a) => {
                    e &&
                        i &&
                        void 0 !== t &&
                        (0, s.rw)(e, {
                            ...a,
                            hash: t,
                            pageId: i.pageId,
                            pageStyle: i.pageStyle,
                            pagePlacement: i.pagePlacement,
                            skeletonId: i.skeletonId,
                            mainObjectType: i.mainObjectType,
                            mainObjectId: i.mainObjectId,
                            ...(r ?? o.Ve),
                        });
                });
            });
        },
        46695: (e) => {
            e.exports = { root: 'FamiliarYouAndArtistPick_root___Ihxe' };
        },
        46911: (e) => {
            e.exports = { root: 'PlaylistFiltersShimmer_root__Pam_a', shimmer: 'PlaylistFiltersShimmer_shimmer__Grx4y' };
        },
        47187: (e) => {
            e.exports = {
                root: 'PromotionsCard_root__1yY_m',
                coverLink: 'PromotionsCard_coverLink__masNa',
                image: 'PromotionsCard_image__4lmYk',
                titleLink: 'PromotionsCard_titleLink__3q_M5',
                subtitle: 'PromotionsCard_subtitle__fGfn9',
                coverWrapper: 'PromotionsCard_coverWrapper__IbTzz',
                advDisclaimer: 'PromotionsCard_advDisclaimer__moi3V',
                advDisclaimerTrigger: 'PromotionsCard_advDisclaimerTrigger__GOUr2',
                advDisclaimerPopover: 'PromotionsCard_advDisclaimerPopover__h_zAR',
                advDisclaimerText: 'PromotionsCard_advDisclaimerText__2WRMS',
            };
        },
        47674: (e) => {
            e.exports = {
                root: 'MultivibeShowPromoModalButton_root__IVPw7',
                root_mobile: 'MultivibeShowPromoModalButton_root_mobile__WRav6',
                button: 'MultivibeShowPromoModalButton_button__FIPMr',
                button_mobile: 'MultivibeShowPromoModalButton_button_mobile__27mpZ',
                surface: 'MultivibeShowPromoModalButton_surface__moFgc',
                icon: 'MultivibeShowPromoModalButton_icon__Sq7Vg',
                title: 'MultivibeShowPromoModalButton_title__0ZG_f',
                titleWrapper: 'MultivibeShowPromoModalButton_titleWrapper__GNMdJ',
                title_mobile: 'MultivibeShowPromoModalButton_title_mobile__qZ_tH',
                content_linesCount_1: 'MultivibeShowPromoModalButton_content_linesCount_1__YfsBl',
                content_linesCount_2: 'MultivibeShowPromoModalButton_content_linesCount_2__AC_t8',
                content_linesCount_3: 'MultivibeShowPromoModalButton_content_linesCount_3___wDV_',
                content_linesCount_4: 'MultivibeShowPromoModalButton_content_linesCount_4__BuNw_',
            };
        },
        48082: (e) => {
            e.exports = { root: 'TextShimmer_root__qqWug', text: 'TextShimmer_text__z8oN9' };
        },
        48249: (e) => {
            e.exports = {
                blocksContainer: 'ContinueListen_blocksContainer__tQ80F',
                container: 'ContinueListen_container__1oxhK',
                item: 'ContinueListen_item__jGg_0',
                item_lastPlayed: 'ContinueListen_item_lastPlayed__AkN1T',
                important: 'ContinueListen_important__xwCU5',
            };
        },
        48483: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => a });
            let a = (e) => {
                let { index: t, count: i, itemsCountPerColumn: a = 4, showedItemsCountInBlock: s = 8 } = e;
                return { objectPosX: Math.floor(t / a) + 1, objectPosY: (t % a) + 1, objectsCount: i > s ? s : i };
            };
        },
        48711: (e) => {
            e.exports = {
                shimmerWithSubcover: 'MixesGridBlock_shimmerWithSubcover__3EtzK',
                header: 'MixesGridBlock_header__wz5KI',
                mixesGrid: 'MixesGridBlock_mixesGrid__LSeyw',
                item: 'MixesGridBlock_item__TVzNE',
                important: 'MixesGridBlock_important__DQE7T',
            };
        },
        48840: (e) => {
            e.exports = { item: 'VibesCarousel_item__AupL0', important: 'VibesCarousel_important__JkzUC' };
        },
        48911: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => w });
            var a = i(88800),
                s = i(65724),
                r = i(84961),
                l = i(53548),
                o = i(87999),
                n = i(62414),
                c = i(17392),
                d = i(29993),
                m = i(78275),
                _ = i(52073),
                u = i(96817),
                p = i(7555),
                v = i(78940),
                b = i(72288),
                C = i(97956),
                h = i(67174),
                x = i(19191),
                A = i(24114),
                j = i(14668),
                T = i(84423),
                N = i(89846),
                I = i(64543),
                S = i(63582),
                f = i(12816),
                L = i(98427);
            let g = (0, S.n)({ event: 'Artist.Concerts.Showed', kind: 'hook', requiredScopes: ['screen', 'object'] }, function (e) {
                var t, i;
                let { artistId: a, viewUuid: s, objectPos: r } = e,
                    n = null == (t = (0, T.s)()) ? void 0 : t.evgenInstance,
                    { hash: c } = (0, N.g)(),
                    { screen: d, block: m, object: _ } = (0, I.j)(),
                    u = null != (i = null == d ? void 0 : d.pageIdForFrom) ? i : null == d ? void 0 : d.pageId,
                    p = null == m ? void 0 : m.objectsCount,
                    v = null == _ ? void 0 : _.objectType,
                    b = null == _ ? void 0 : _.objectId,
                    C = null == _ ? void 0 : _.objectPosX,
                    h = null == _ ? void 0 : _.objectPosY,
                    x = (0, l.useCallback)(() => {
                        if (
                            !n ||
                            void 0 === c ||
                            'string' != typeof a ||
                            void 0 === p ||
                            (v !== o.DomainObjectType.Concert && v !== o.DomainObjectType.Shortcut) ||
                            void 0 === b ||
                            void 0 === C ||
                            void 0 === h
                        )
                            return;
                        let e = {
                            hash: c,
                            artistId: a,
                            objectsCount: p,
                            objectType: v === o.DomainObjectType.Concert ? o.ConcertBlockItemType.Concert : o.ConcertBlockItemType.Shortcut,
                            objectId: b,
                            objectPosX: C,
                            objectPosY: h,
                        };
                        (0, A.HB)(n, e);
                    }, [n, a, c, b, C, h, v, p]),
                    S = (0, l.useCallback)(() => {
                        n &&
                            void 0 !== c &&
                            'string' == typeof a &&
                            s &&
                            void 0 !== b &&
                            void 0 !== r &&
                            Number.isFinite(r) &&
                            (0, j.Z4)(n, { hash: c, artistId: a, viewUuid: s, objectId: b, objectPos: r });
                    }, [n, a, c, b, r, s]);
                return (0, l.useCallback)(() => {
                    if (n && u && f.x.includes(u))
                        switch (u) {
                            case L.b.ARTIST:
                            case L.b.CONCERT:
                                x();
                                break;
                            case L.b.ARTIST_CONCERTS:
                                S();
                        }
                }, [n, u, S, x]);
            });
            var y = i(76484),
                k = i(44167),
                R = i(74250),
                E = i(16661),
                P = i.n(E);
            let w = (0, r.PA)((e) => {
                let {
                        artistId: t,
                        concert: i,
                        meta: r,
                        viewUuid: A,
                        objectPos: j,
                        radius: T = 'l',
                        className: N,
                        shouldSendAnalyticsOnHide: I,
                        forceAfishaWidget: S,
                        shouldShowMask: f,
                    } = e,
                    { state: L, toggleTrue: E, toggleFalse: w } = (0, m.e)(!1),
                    { experiments: O } = (0, b.g)(),
                    M = !S && O.checkExperiment(C.z.WebNextConcertPage, 'on'),
                    { href: D } = (0, h.u)('/concert/:concertId', { params: { concertId: i.id } }),
                    B = (0, v.Z)(D),
                    V = g({ artistId: t, viewUuid: A, objectPos: j }),
                    U = (0, x.m)({ artistId: t, viewUuid: A, objectPos: j }),
                    W = (0, l.useRef)(!1),
                    H = (0, d.c)((e) => {
                        null !== t && e && (I || !W.current) && (V(), (W.current = !0));
                    }),
                    z = (0, n.D)({ onVisibilityChange: H }),
                    K = (0, l.useId)(),
                    Y = (0, l.useId)(),
                    F = (0, y.Y)()(i),
                    $ = (0, d.c)((e) => {
                        ((0, _.P)(e, P().ripple), M && (B(e), U(o.FromArtistScreenTo.ConcertScreen)));
                    }),
                    X = (0, d.c)((e) => {
                        (E(), U(o.FromArtistScreenTo.ConcertPurchaseScreen), e.stopPropagation(), e.preventDefault());
                    });
                return (0, a.jsxs)(p.t, {
                    radius: T,
                    className: (0, s.$)(P().root, N, { [P().root_withConcertsRedesign]: i.isIdentityExperimentEnabled }),
                    ref: z,
                    onClick: $,
                    children: [
                        i.datetime &&
                            (0, a.jsx)(R.d, {
                                datetime: i.datetime,
                                id: K,
                                className: (0, s.$)(P().date, { [P().dateWithMask]: f, [P().important]: f }),
                                dayClassName: P().dateColor,
                                monthClassName: P().dateColor,
                            }),
                        (0, l.cloneElement)(r, { id: Y, concert: i }),
                        i.dataSessionId &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(u.$, {
                                        color: 'primary',
                                        radius: 'xxxl',
                                        className: P().button,
                                        'aria-describedby': ''.concat(K, ' ').concat(Y),
                                        'aria-label': F,
                                        onClick: X,
                                        'data-test-id': c.OA.concert.CONCERT_CARD_BUTTON,
                                        children: F,
                                    }),
                                    (0, a.jsx)(k.h, { dataSessionId: i.dataSessionId, isOpened: L, onOpen: E, onClose: w }),
                                ],
                            }),
                    ],
                });
            });
        },
        51128: (e) => {
            e.exports = {
                root: 'NeuromusicButton_root__OMwq0',
                ripple: 'NeuromusicButton_ripple__B9e3A',
                textContainer: 'NeuromusicButton_textContainer__2rb8y',
                title: 'NeuromusicButton_title__mTAB8',
                button: 'NeuromusicButton_button__kT4GN',
                icon: 'NeuromusicButton_icon__HTDr2',
            };
        },
        51417: (e) => {
            e.exports = { trailer: 'PlaylistWithTracks_trailer__dOp1u', root: 'PlaylistWithTracks_root__jchZL' };
        },
        51806: (e) => {
            e.exports = {
                root: 'ConcertShimmer_root__yp58v',
                date: 'ConcertShimmer_date__GEOK7',
                meta: 'ConcertShimmer_meta__y8Y2_',
                title: 'ConcertShimmer_title__Rj3Dc',
                description: 'ConcertShimmer_description__tJ4Qp',
                action: 'ConcertShimmer_action__6c4QF',
            };
        },
        52018: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => u });
            var a = i(88800),
                s = i(84961),
                r = i(53548),
                l = i(88969),
                o = i(17392),
                n = i(79070),
                c = i(29504),
                d = i(13060),
                m = i(95960),
                _ = i.n(m);
            let u = (0, s.PA)((e) => {
                let { id: t, concert: i, withCashback: s = !0, withInlineMeta: m = !1, titleSize: u = 'm' } = e,
                    p = [],
                    v = (0, a.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                ((null == i ? void 0 : i.eventKind) &&
                    p.push(
                        (0, a.jsx)(c.HL, {
                            variant: 'span',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': o.OA.concert.CONCERT_CARD_EVENT_KIND,
                            children: (0, a.jsx)(l.A, { id: 'concerts.event-kind', values: { kind: i.eventKind } }),
                        }),
                    ),
                    (null == i ? void 0 : i.contentRating) &&
                        p.push(
                            v,
                            (0, a.jsx)(c.HL, {
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': o.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                children: i.contentRating,
                            }),
                        ));
                let b = (0, n.L)(() =>
                    (null == i ? void 0 : i.city)
                        ? (0, a.jsx)(c.HL, {
                              variant: 'span',
                              size: 'm',
                              weight: 'medium',
                              lineClamp: 1,
                              'data-test-id': o.OA.concert.CONCERT_CARD_LOCATION,
                              children: i.city,
                          })
                        : null,
                );
                return (
                    m && b && p.push(v, b),
                    (0, a.jsxs)('div', {
                        className: _().root,
                        id: t,
                        children: [
                            (0, a.jsx)(c.HL, {
                                variant: 'div',
                                size: u,
                                weight: 'medium',
                                className: _().city,
                                lineClamp: 1,
                                'data-test-id': o.OA.concert.CONCERT_CARD_TITLE,
                                children: null == i ? void 0 : i.title,
                            }),
                            (0, a.jsx)('div', { className: _().info, children: p.map((e, t) => (0, r.cloneElement)(e, { key: t })) }),
                            !m && b,
                            s &&
                                (null == i ? void 0 : i.isIdentityExperimentEnabled) &&
                                i.cashbackValuePercent &&
                                (0, a.jsx)(d.m, { className: _().cashback, valuePercent: i.cashbackValuePercent }),
                            s &&
                                !(null == i ? void 0 : i.isIdentityExperimentEnabled) &&
                                (null == i ? void 0 : i.isCashbackExperimentEnabled) &&
                                i.cashbackTitle &&
                                (0, a.jsx)(d.m, { className: _().cashback, title: i.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        52309: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => b });
            var a = i(88800),
                s = i(84961),
                r = i(53548),
                l = i(17392),
                o = i(43443),
                n = i(39079),
                c = i(72288),
                d = i(39267),
                m = i(73805),
                _ = i(15232),
                u = i(56712),
                p = i(4683),
                v = i.n(p);
            let b = (0, s.PA)((e) => {
                var t, i;
                let { track: s, playContextParams: p } = e,
                    b = (0, n.D)({ playContextParams: p, entityId: s.entityId }),
                    {
                        settings: { isMobile: C },
                    } = (0, c.g)(),
                    h = (0, r.useCallback)(
                        (e) =>
                            (0, a.jsx)(d.q, {
                                isAvailable: s.isAvailable,
                                isDisliked: s.isDisliked,
                                coverUri: s.coverUri,
                                title: s.title,
                                className: v().playButtonCell,
                                radius: 'xs',
                                ...e,
                            }),
                        [s],
                    );
                return (0, a.jsx)(u.C, {
                    track: s,
                    meta: (0, a.jsx)(_.j, { withArtistLink: !C, track: s }),
                    beforeBlock: (0, a.jsx)(o.t, {
                        withIcon: !0,
                        className: v().chartCell,
                        progress: null == (t = s.chart) ? void 0 : t.progress,
                        position: null == (i = s.chart) ? void 0 : i.position,
                        isDisliked: s.isDisliked,
                        isDisabled: !s.isAvailable,
                    }),
                    playButtonCellRender: h,
                    controls: (0, a.jsx)(m.Q, { track: s, className: v().controlsBarCell }),
                    ...b,
                    'data-test-id': l.Kq.track.TRACK_CHART,
                });
            });
        },
        52456: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => d });
            var a,
                s = i(14022),
                r = i(53548),
                l = {
                    352: (e) => {
                        e.exports = s;
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(r, 2));
                    },
                },
                o = {};
            function n(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return (l[e](i, i.exports, n), i.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, '__esModule', { value: !0 }), (c.useDebouncedToggle = void 0));
                let e = n(352),
                    t = n(810);
                c.useDebouncedToggle = (i) => {
                    let { delay: a, initialState: s, throttleTimeout: r } = i,
                        l = (0, t.useRef)(null),
                        [o, n] = (0, t.useState)(!!s),
                        c = (0, t.useMemo)(
                            () =>
                                (0, e.throttle)(() => {
                                    (n(!s),
                                        l.current && window.clearTimeout(l.current),
                                        (l.current = window.setTimeout(() => {
                                            n(!!s);
                                        }, a)));
                                }, r),
                            [a, s, r],
                        ),
                        d = (0, t.useCallback)(() => {
                            (n(!!s), l.current && window.clearTimeout(l.current));
                        }, [s]);
                    return (
                        (0, t.useEffect)(
                            () => () => {
                                l.current && window.clearTimeout(l.current);
                            },
                            [],
                        ),
                        { state: o, handleDebouncedToggle: c, reset: d }
                    );
                };
            })(),
                c.__esModule);
            var d = c.useDebouncedToggle;
        },
        52461: (e) => {
            e.exports = {
                root: 'Neuromusic_root__wTkG_',
                controls: 'Neuromusic_controls__8kH7t',
                item: 'Neuromusic_item__Q_JI_',
                important: 'Neuromusic_important__8Ib5E',
            };
        },
        52632: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => c });
            var a = i(88800),
                s = i(65724),
                r = i(19994),
                l = i(90285),
                o = i.n(l);
            let n = (e) => {
                    let { isActive: t } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(o().shimmer, o().donation),
                        children: [
                            (0, a.jsx)(r.W, { isActive: t, radius: 'round', className: o().shimmerCover }),
                            (0, a.jsxs)('div', {
                                className: o().shimmerContainer,
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: o().shimmerText,
                                        children: [
                                            (0, a.jsx)(r.W, { isActive: t, radius: 'xxxl', className: o().shimmerArtist }),
                                            (0, a.jsx)(r.W, { isActive: t, radius: 'xxxl', className: o().shimmerGoal }),
                                        ],
                                    }),
                                    (0, a.jsx)(r.W, { isActive: t, radius: 'xxxl', className: o().shimmerButton }),
                                ],
                            }),
                        ],
                    });
                },
                c = (e) => Array.from({ length: 10 }, (t, i) => (0, a.jsx)(n, { isActive: e }, i));
        },
        52676: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => x });
            var a = i(82212),
                s = i(88800),
                r = i(65724),
                l = i(84961),
                o = i(53548),
                n = i(35412),
                c = i(79070),
                d = i(14814),
                m = i(9955),
                _ = i.n(m);
            let u = (0, l.PA)((e) => {
                    let { forwardRef: t, data: i, ...a } = e,
                        l = (0, c.L)(() => {
                            if (null == i ? void 0 : i.release)
                                return (0, s.jsx)(d.Z, { ...a, className: _().release, containerClassName: _().releaseCard, block: i.release });
                        }),
                        o = (0, c.L)(() => {
                            if (null == i ? void 0 : i.upcomingRelese)
                                return (0, s.jsx)(d.Z, { ...a, className: _().release, containerClassName: _().releaseCard, block: i.upcomingRelese });
                        }),
                        m = (0, c.L)(() => {
                            if (null == i ? void 0 : i.popularTracks)
                                return (0, s.jsx)(d.Z, {
                                    ...a,
                                    className: (0, r.$)(_().popularTracks, { [_().popularTracks_withReleaseBlock]: !!(null != o ? o : l) }),
                                    block: i.popularTracks,
                                });
                        });
                    return (0, s.jsx)('section', {
                        ref: t,
                        className: _().root,
                        ...(0, n.OZ)(a),
                        children: (0, s.jsxs)('div', { className: _().container, children: [m, null != o ? o : l] }),
                    });
                }),
                p = (0, o.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var v = i(46695),
                b = i.n(v);
            let C = (0, l.PA)((e) => {
                    let { forwardRef: t, data: i, ...a } = e,
                        r = (0, c.L)(() => {
                            if (null == i ? void 0 : i.familiarYou) return (0, s.jsx)(d.Z, { ...a, block: i.familiarYou });
                        }),
                        l = (0, c.L)(() => {
                            if (null == i ? void 0 : i.artistPick) return (0, s.jsx)(d.Z, { ...a, block: i.artistPick });
                        });
                    return (0, s.jsxs)('section', { ref: t, className: b().root, ...(0, n.OZ)(a), children: [l, r] });
                }),
                h = (0, o.forwardRef)((e, t) => (0, s.jsx)(C, { forwardRef: t, ...e })),
                x = { [a.t.ARTIST_POPULAR_TRACKS_AND_RELEASES]: p, [a.t.FAMILIAR_YOU_AND_ARTIST_PICK]: h };
        },
        53279: (e) => {
            e.exports = {
                root: 'VibeButton_root___i3R5',
                ripple: 'VibeButton_ripple__cmoBR',
                textContainer: 'VibeButton_textContainer__j9nOW',
                title: 'VibeButton_title__sLC0I',
                title_long: 'VibeButton_title_long__gSVM5',
                subtitle: 'VibeButton_subtitle__MQ_Ca',
                image: 'VibeButton_image__GOwKJ',
                button: 'VibeButton_button__tXFAm',
                button_loading: 'VibeButton_button_loading__LYnUR',
                titleContainer: 'VibeButton_titleContainer__yrRRu',
                'applying-setting': 'VibeButton_applying-setting__Jd_3C',
                icon: 'VibeButton_icon__KIv7n',
            };
        },
        53409: (e) => {
            e.exports = {
                root: 'Q2vSuggestions_root__i22DA',
                loadingText: 'Q2vSuggestions_loadingText__BJVPX',
                'loading-shimmer': 'Q2vSuggestions_loading-shimmer__KVw_H',
                carousel: 'Q2vSuggestions_carousel__cmIj5',
                carouselWithArrows: 'Q2vSuggestions_carouselWithArrows__EscuL',
                'content-appear': 'Q2vSuggestions_content-appear__yrwAp',
                carouselWithArrows_arrowLeft_hidden: 'Q2vSuggestions_carouselWithArrows_arrowLeft_hidden__N_rpe',
                carouselWithArrows_arrowRight_hidden: 'Q2vSuggestions_carouselWithArrows_arrowRight_hidden__yiDMn',
                carouselWithArrows_arrow_hidden: 'Q2vSuggestions_carouselWithArrows_arrow_hidden__ZuI4D',
                controls: 'Q2vSuggestions_controls__SJZet',
                item: 'Q2vSuggestions_item__rDItX',
            };
        },
        53736: (e) => {
            e.exports = {
                root: 'Skeleton_root__ANDaF',
                upperBlocks: 'Skeleton_upperBlocks__zI__5',
                tab: 'Skeleton_tab__Jn6By',
                tabPanel: 'Skeleton_tabPanel__Ke42U',
                tabCarousel: 'Skeleton_tabCarousel__E2kLf',
                important: 'Skeleton_important__ob12_',
                header: 'Skeleton_header__Ir5f4',
                stickyTabs: 'Skeleton_stickyTabs__I_uuk',
            };
        },
        55659: (e) => {
            e.exports = {
                root: 'CollectionAlbumsPresavesEmpty_root__3w6b7',
                root_oneEmptyTab: 'CollectionAlbumsPresavesEmpty_root_oneEmptyTab__UIaL3',
                root_twoEmptyTabs: 'CollectionAlbumsPresavesEmpty_root_twoEmptyTabs__4Ct2l',
            };
        },
        55737: (e) => {
            e.exports = {
                itemCounter_3: 'ClipsCarouselContent_itemCounter_3__c_H3V',
                item: 'ClipsCarouselContent_item__Yy7_P',
                important: 'ClipsCarouselContent_important__nZYA0',
                itemCounter_5: 'ClipsCarouselContent_itemCounter_5__QeQd_',
            };
        },
        56846: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { E: () => a }),
                (function (e) {
                    ((e.SHOW_AND_LOAD = 'SHOW_AND_LOAD'), (e.LOAD_AND_SHOW = 'LOAD_AND_SHOW'));
                })(a || (a = {})));
        },
        57899: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ControlsBar_root__l6Fg6',
                item: 'ControlsBar_item__tEQvM',
                item_buttonArrow: 'ControlsBar_item_buttonArrow__3aZyp',
                contextMenu: 'ControlsBar_contextMenu__1Sj5f',
                contextMenu_visible: 'ControlsBar_contextMenu_visible__FMTw4',
                controls_disabled: 'ControlsBar_controls_disabled__xR0_N',
                controls: 'ControlsBar_controls__PEMXx',
                likeIcon: 'ControlsBar_likeIcon__UBXQm',
            };
        },
        59097: (e) => {
            e.exports = {
                root: 'Promotions_root__Osgj2',
                controls: 'Promotions_controls__IEqvq',
                item: 'Promotions_item__ycc9P',
                important: 'Promotions_important__x_kQK',
            };
        },
        59357: (e) => {
            e.exports = {
                link: 'BaseNotificationPresave_link__4uQhM',
                title: 'BaseNotificationPresave_title__bEloI',
                text: 'BaseNotificationPresave_text__3Kv9j',
                image: 'BaseNotificationPresave_image__Hb7ve',
            };
        },
        60201: (e) => {
            e.exports = {
                root: 'ConcertImage_root__gZpOa',
                root_withMask: 'ConcertImage_root_withMask__1ayfK',
                image: 'ConcertImage_image__xtZCZ',
                day: 'ConcertImage_day__c90Ih',
                month: 'ConcertImage_month__Ic5k5',
                date: 'ConcertImage_date__aH1IR',
                date_withEventType: 'ConcertImage_date_withEventType__QRb1o',
                day_withEventType: 'ConcertImage_day_withEventType__GI5B9',
                month_withEventType: 'ConcertImage_month_withEventType__Thry7',
                weekday_withEventType: 'ConcertImage_weekday_withEventType__v4vMZ',
                dateBackground: 'ConcertImage_dateBackground__GAONC',
                weekday: 'ConcertImage_weekday__kXeo3',
                important: 'ConcertImage_important__0o7jF',
                cashback: 'ConcertImage_cashback__TQ_tu',
            };
        },
        60628: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s, u: () => r });
            var a = i(53548);
            let s = (0, a.createContext)(null),
                r = () => (0, a.useContext)(s);
        },
        60978: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => a });
            let a = {
                src: '/_next/static/media/artist.d238337d.webp',
                height: 327,
                width: 327,
                blurDataURL:
                    'data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDcAAAABN6AmAAFGLREF9q0aERG4Qx2sIslqLIhkYEj/WQECkgJwcBfR/5j9mQEnwGchWUgR7oAz228AAFZQOCA0AAAA0AEAnQEqCAAIAAJAOCWUAAMX+VdAjqAA/ubxr1dKCvvMhnGE/guc0nvMLJJkD5h+3R4AAA==',
                blurWidth: 8,
                blurHeight: 8,
            };
        },
        61543: (e) => {
            e.exports = {
                root: 'LikesAndHistory_root__KCuz_',
                carousel: 'LikesAndHistory_carousel__579RD',
                carouselItem: 'LikesAndHistory_carouselItem__Yq5Xw',
                favoritesCoverContainer: 'LikesAndHistory_favoritesCoverContainer__UUIDf',
                favoritesCover: 'LikesAndHistory_favoritesCover__Nt7Gm',
                historyIcon: 'LikesAndHistory_historyIcon__2FAMu',
                historyIconContainer: 'LikesAndHistory_historyIconContainer__KPPbS',
            };
        },
        61849: (e) => {
            e.exports = {
                root: 'HorizontalClipCard_root__B_6yA',
                cover: 'HorizontalClipCard_cover__vpEvl',
                unavailable: 'HorizontalClipCard_unavailable__SILaB',
                duration: 'HorizontalClipCard_duration__r1UFp',
            };
        },
        61945: (e) => {
            e.exports = { root: 'EditorialVibes_root__MPgdy', controls: 'EditorialVibes_controls__sKvZK' };
        },
        63087: (e) => {
            e.exports = { surface: 'VibeRoomMemberAvatar_surface__L4WU2', overlay: 'VibeRoomMemberAvatar_overlay__9adN4', image: 'VibeRoomMemberAvatar_image__g4AsX' };
        },
        63500: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { n: () => a }),
                (function (e) {
                    ((e.ALBUM = 'album_tab'), (e.PRESAVED_ALBUM = 'presaved_album_tab'));
                })(a || (a = {})));
        },
        63650: (e) => {
            e.exports = {
                root: 'NewRelease_root__W0T4a',
                image: 'NewRelease_image__Vw6_k',
                cover: 'NewRelease_cover__EVFNR',
                coverImage: 'NewRelease_coverImage__9x6Uk',
                card: 'NewRelease_card__yn06x',
                fade: 'NewRelease_fade__rVE0_',
                artists: 'NewRelease_artists__wGTaP',
                artistLink: 'NewRelease_artistLink__CO3Zn',
                artistCaption: 'NewRelease_artistCaption__1F8A9',
                trailerButton: 'NewRelease_trailerButton__OYAW6',
                descriptionContainer: 'NewRelease_descriptionContainer__g56GG',
            };
        },
        63766: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => H });
            var a = i(88800),
                s = i(65724),
                r = i(84961),
                l = i(53548),
                o = i(2058),
                n = i(33979),
                c = i(18593),
                d = i(29993),
                m = i(79070),
                _ = i(29832),
                u = i(7555),
                p = i(29504),
                v = i(60757),
                b = i(13946),
                C = i(42174),
                h = i(5407),
                x = i(84384),
                A = i(4795),
                j = i(78940),
                T = i(55693),
                N = i(39079),
                I = i(72288),
                S = i(81877),
                f = i(90224),
                L = i(91292),
                g = i(95993),
                y = i(24824),
                k = i.n(y),
                R = i(88969),
                E = i(87999),
                P = i(17392),
                w = i(52300),
                O = i(57934),
                M = i(49738),
                D = i(16704),
                B = i(56446),
                V = i(36207),
                U = i(1829);
            let W = (0, r.PA)((e) => {
                    let { track: t, handleLikeButtonClick: i, handlePlayButtonClick: r, isPlaying: o } = e,
                        { trailer: n, user: c } = (0, I.g)(),
                        [u, p] = (0, l.useState)(!1),
                        [v, b] = (0, l.useState)(!1),
                        C = (0, h.P)(),
                        x = (0, O.F)(),
                        A = (0, d.c)(() => {
                            (p(!u), b(!u));
                        }),
                        j = (0, d.c)((e) => {
                            (e.preventDefault(), e.stopPropagation());
                        }),
                        T = (0, d.c)((e) => {
                            if ((e.stopPropagation(), C())) return void e.preventDefault();
                            (n.openTrackTrailer(t.id), x(E.DomainObjectType.Track, t.id));
                        }),
                        N = (0, m.L)(() => {
                            var e;
                            if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                                return (0, a.jsx)(
                                    V.n,
                                    {
                                        children: (0, a.jsx)(B.k, {
                                            className: (0, s.$)(k().trailerButton, k().control),
                                            radius: 'round',
                                            size: 's',
                                            iconSize: 'xxs',
                                            onClick: T,
                                        }),
                                    },
                                    t.getKey('TrackCardTrailerTooltip'),
                                );
                        });
                    return (0, a.jsx)(_.hg, {
                        isVisible: u || v,
                        className: k().controls,
                        labelText: (0, a.jsx)(R.A, { id: 'entity-names.track' }),
                        playControl: (0, a.jsx)(
                            D.D,
                            {
                                className: (0, s.$)(k().playButton, k().control),
                                buttonVariant: 'default',
                                withHover: !1,
                                iconSize: 'xl',
                                variant: 'filled',
                                isPlaying: o,
                                onClick: r,
                            },
                            t.getKey('PlayButton'),
                        ),
                        likeControl: (0, a.jsx)(
                            M.c,
                            {
                                className: (0, s.$)(k().likeButton, k().control),
                                isLiked: t.isLiked,
                                onClick: i,
                                variant: 'default',
                                size: 's',
                                iconSize: 'xxs',
                                disabled: !c.isAuthorized,
                            },
                            t.getKey('LikeButton'),
                        ),
                        menuControl: (0, a.jsx)(
                            U._,
                            {
                                placement: 'bottom',
                                track: t,
                                onOpenChange: A,
                                open: u,
                                onClick: j,
                                className: (0, s.$)(k().menuButton, k().control),
                                icon: (0, a.jsx)(w.I, { size: 'xxs', variant: 'more' }),
                                size: 's',
                                'data-test-id': P.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                            },
                            t.getKey('TrackContextMenu'),
                        ),
                        trailerControl: N,
                    });
                }),
                H = (0, r.PA)((e) => {
                    var t, i;
                    let { className: r, children: y, track: R, contentLinesCount: E, overrideContextType: P } = e,
                        { from: w } = (0, x.f)(),
                        {
                            track: O,
                            paywall: { modal: M },
                        } = (0, I.g)(),
                        { formatMessage: D } = (0, o.A)(),
                        [B, V] = (0, l.useState)(!1),
                        [U, H] = (0, l.useState)(!1),
                        { sendLikeSearchFeedback: z, sendPlaySearchFeedback: K, sendNavigateSearchFeedback: Y } = (0, T.z)(),
                        F = (0, C.K)(R),
                        $ = (0, j.Z)(null != (i = null == (t = R.mainAlbum) ? void 0 : t.url) ? i : ''),
                        X = (0, j.Z)(R.url),
                        G = (0, n.g)(),
                        Z = (0, h.P)(),
                        q = (0, m.L)(() => {
                            var e;
                            let t = D({ id: 'entity-names.track-name' }, { trackName: R.title }),
                                i = R.isLiked ? D({ id: 'entity-names.has-your-like' }) : '';
                            return ''
                                .concat(t, ' ')
                                .concat(null != (e = R.version) ? e : '', ' ')
                                .concat(i);
                        }),
                        { isPlaying: Q, togglePlay: J } = (0, N.D)({
                            playContextParams: {
                                contextData: { type: c.K.Various, meta: { id: R.entityId }, from: w, overrideContextType: P },
                                queueParams: { index: 0 },
                                loadContextMeta: !0,
                            },
                            entityId: R.entityId,
                        }),
                        ee = (0, d.c)(() => {
                            O.open({ trackId: R.id, albumId: R.albumId });
                        }),
                        et = (0, d.c)(() => {
                            (B || Q || (V(!0), null == K || K()), J());
                        }),
                        ei = (0, v.c)({ album: R.mainAlbum, callback: $ }),
                        ea = (0, g.w)({ track: R, callback: X }),
                        es = (0, g.w)({ track: R, callback: ee }),
                        er = (0, g.w)({ track: R, callback: et }),
                        el = (0, A.N)(),
                        eo = (0, d.c)(() => {
                            if (!Z()) {
                                if (el) return void M.open();
                                (er(), Q || G());
                            }
                        }),
                        en = (0, d.c)(() => {
                            R.hasTrackLink && es();
                        }),
                        ec = (0, d.c)(() => {
                            (U || R.isLiked || (H(!0), null == z || z()), F());
                        }),
                        ed = (0, d.c)((e) => {
                            var t;
                            if (R.hasTrackLink) {
                                (null == Y || Y(), ea(e));
                                return;
                            }
                            R.hasAlbumLink && (null == (t = R.mainAlbum) ? void 0 : t.url) && ei(e);
                        }),
                        em = (0, m.L)(() => {
                            var e, t, i;
                            return R.hasTrackLink
                                ? (0, a.jsx)(L.N, {
                                      'aria-label': ''.concat(R.title, ' ').concat(null != (t = R.version) ? t : ''),
                                      className: k().titleLink,
                                      href: R.url,
                                      tabIndex: -1,
                                      onClick: ed,
                                      children: R.title,
                                  })
                                : R.hasAlbumLink && (null == (e = R.mainAlbum) ? void 0 : e.url)
                                  ? (0, a.jsx)(L.N, {
                                        'aria-label': ''.concat(R.title, ' ').concat(null != (i = R.version) ? i : ''),
                                        className: k().titleLink,
                                        href: R.mainAlbum.url,
                                        tabIndex: -1,
                                        onClick: ed,
                                        children: R.title,
                                    })
                                  : (0, a.jsx)(p.HL, { className: k().title, variant: 'span', children: R.title });
                        }),
                        e_ = (0, m.L)(() => {
                            var e, t;
                            let i = R.hasAlbumLink ? (null == (e = R.mainAlbum) ? void 0 : e.url) : void 0,
                                s = R.hasTrackLink ? R.url : i;
                            return s
                                ? (0, a.jsx)(L.N, {
                                      className: k().srTitleLink,
                                      href: s,
                                      onClick: ed,
                                      children: ''.concat(R.title, ' ').concat(null != (t = R.version) ? t : ''),
                                  })
                                : null;
                        }),
                        eu = (0, m.L)(() => {
                            if (R.isAvailable) return (0, a.jsx)(W, { track: R, isPlaying: Q, handleLikeButtonClick: ec, handlePlayButtonClick: eo });
                        });
                    return (0, a.jsx)(_.MN, {
                        className: (0, s.$)(k().root, r),
                        'aria-label': q,
                        explicitMarkComponent: R.explicitDisclaimer && (0, a.jsx)(f.N, { getDescriptionTexts: R.getDescriptionTexts, variant: R.explicitDisclaimer }),
                        title: (0, a.jsxs)(p.HL, {
                            className: (0, s.$)(k().titleContainer, { [k().titleContainer_withVersion]: R.version }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            'aria-hidden': !!e_ || void 0,
                            children: [em, R.version && (0, a.jsx)(p.HL, { className: k().version, variant: 'span', children: ' '.concat(R.version) })],
                        }),
                        srTitle: e_,
                        contentLinesCount: E,
                        view: (0, a.jsx)(u.t, {
                            className: k().cover,
                            radius: 'l',
                            withShadow: !0,
                            children: (0, a.jsxs)('div', {
                                className: (0, s.$)(k().coverBlock, { [k().coverBlock_withTrackLink]: R.hasTrackLink }),
                                onClick: en,
                                children: [
                                    (0, a.jsx)(S.B, {
                                        className: k().image,
                                        src: R.coverUri,
                                        size: 200,
                                        fit: 'cover',
                                        alt: q,
                                        withAvatarReplace: !0,
                                        isAvailable: R.isAvailable,
                                        'aria-hidden': !0,
                                    }),
                                    eu,
                                ],
                            }),
                        }),
                        description: (0, a.jsx)(
                            b.i,
                            { className: k().artists, artists: R.artists, lineClamp: 1, linkClassName: k().artistLink, captionSize: 's', withLink: R.isNonUserGenerated },
                            R.getKey('description'),
                        ),
                        children: y,
                    });
                });
        },
        63793: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => r });
            var a = i(88800),
                s = i(68594);
            let r = (e) => Array.from({ length: e }, (e, t) => (0, a.jsx)(s.W, {}, t));
        },
        64310: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var a = i(88800),
                s = i(65724),
                r = i(19994),
                l = i(48082),
                o = i.n(l);
            let n = (e) => {
                let { className: t, textClassName: i, isActive: l } = e;
                return (0, a.jsx)('div', { className: (0, s.$)(o().root, t), children: (0, a.jsx)(r.W, { className: (0, s.$)(o().text, i), isActive: l, radius: 's' }) });
            };
        },
        64555: (e) => {
            e.exports = {
                root: 'CollectionVibeAgent_root__Ckkcd',
                container: 'CollectionVibeAgent_container__Vnapv',
                text: 'CollectionVibeAgent_text__WYNR_',
                playButton: 'CollectionVibeAgent_playButton__YANpE',
                coverShimmer: 'CollectionVibeAgent_coverShimmer__q32bW',
                shimmerContainer: 'CollectionVibeAgent_shimmerContainer__4wBoC',
                item: 'CollectionVibeAgent_item__X8a1I',
                important: 'CollectionVibeAgent_important__FEcUJ',
            };
        },
        64621: (e) => {
            e.exports = {
                root: 'PlaylistWithTracksEmpty_root__secDB',
                image: 'PlaylistWithTracksEmpty_image__JH2uE',
                header: 'PlaylistWithTracksEmpty_header__pD30X',
                text: 'PlaylistWithTracksEmpty_text__b69Q_',
                myWaveButton: 'PlaylistWithTracksEmpty_myWaveButton__Kswfl',
                myWaveButtonText: 'PlaylistWithTracksEmpty_myWaveButtonText__AfIg9',
            };
        },
        64843: (e) => {
            e.exports = { item: 'Mixes_item__Om7aR' };
        },
        65403: (e) => {
            e.exports = { item: 'ArtistPopularTracks_item__PsKwP', important: 'ArtistPopularTracks_important__hdfzU' };
        },
        66328: (e) => {
            e.exports = {
                root_withNewConcertCards: 'Concerts_root_withNewConcertCards__42M3w',
                item: 'Concerts_item__jetvg',
                important: 'Concerts_important__rvXs6',
                root: 'Concerts_root__12jay',
                controls: 'Concerts_controls__n4qr8',
                shimmer: 'Concerts_shimmer__ujsLv',
            };
        },
        67984: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => h, D: () => b });
            var a = i(88800),
                s = i(65724),
                r = i(35802),
                l = i(53548),
                o = i(35412),
                n = i(87999),
                c = i(7833),
                d = i(17392),
                m = i(53323),
                _ = i(18486),
                u = i(31764),
                p = i(44616),
                v = i.n(p),
                b = (function (e) {
                    return ((e.ONE = 'one'), (e.TWO = 'two'), e);
                })({});
            let C = (e) => {
                    let {
                            className: t,
                            forwardRef: i,
                            isShimmerVisible: p,
                            isColumnsShimmerVisible: b,
                            isHeaderWithoutControls: C,
                            maxColumnsCount: h,
                            carouselItemClassName: x,
                            carouselClassName: A,
                            children: j,
                            itemsCountPerColumn: T,
                            shimmer: N,
                            viewAllActionLink: I,
                            blockHeaderClassName: S,
                            additionalControl: f,
                            blockHeaderDescription: L,
                            blockHeaderTitle: g,
                            blockHeaderCoverUrl: y,
                            withBlockHeaderDescription: k,
                            withBlockHeaderCover: R,
                            blockHeaderHeadingVariant: E,
                            isShimmerActive: P,
                            shouldResetCarouselScroll: w,
                            beforeCarousel: O,
                            ...M
                        } = e,
                        [D, B] = (0, l.useState)(),
                        V = (0, l.useId)(),
                        U = (0, l.useRef)(null),
                        W = 'two' === h,
                        H = 'string' == typeof I ? String(I) : '',
                        z = null != b ? b : p,
                        K = (0, l.useCallback)(
                            (e) => {
                                let t = (0, r.A)(e, T).slice(0, W ? 2 : 1);
                                return (
                                    1 === t.length ? B('one') : B('two'),
                                    t.map((e, t) => (0, a.jsx)('div', { className: v().column, 'data-test-id': d.S7.CAROUSEL_WITH_COLUMNS_BLOCK_COLUMN, children: e }, t))
                                );
                            },
                            [T, W],
                        ),
                        Y = (0, l.useMemo)(() => {
                            if (z) return K(Array.from({ length: 2 * T }, (e, t) => (0, l.cloneElement)(N, { key: t })));
                            return K(j);
                        }, [j, K, z, T, N]),
                        F = (0, l.useMemo)(
                            () =>
                                C
                                    ? null
                                    : (0, a.jsxs)('div', {
                                          className: v().controlsContainer,
                                          children: [f, (0, a.jsx)(u.X, { carouselRef: U, className: v().controls, backwardControlClassName: v().backwardControl })],
                                      }),
                            [f, C],
                        );
                    return (
                        (0, l.useEffect)(() => {
                            U.current && w && U.current.scrollTo(0, 0);
                        }, [w]),
                        (0, a.jsxs)('section', {
                            ref: i,
                            className: (0, s.$)(v().root, t),
                            ...(0, o.OZ)(M),
                            children: [
                                (0, a.jsx)(c.B, {
                                    objectType: n.DomainObjectType.Shortcut,
                                    objectId: H,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    children: (0, a.jsx)(_.T, {
                                        coverUrl: y,
                                        title: g,
                                        description: L,
                                        className: S,
                                        labeledForId: V,
                                        viewAllActionLink: I,
                                        controls: F,
                                        isShimmerVisible: p,
                                        isShimmerActive: P,
                                        withDescription: k,
                                        withCover: R,
                                        headingVariant: E,
                                    }),
                                }),
                                O,
                                (0, a.jsx)(m.F, {
                                    itemClassName: (0, s.$)(v().item, v()['item_columns_'.concat(z && W ? 'two' : D)], x),
                                    className: A,
                                    ref: U,
                                    'aria-labelledby': V,
                                    'data-test-id': d.S7.CAROUSEL_WITH_COLUMNS_BLOCK_CAROUSEL,
                                    children: Y,
                                }),
                            ],
                        })
                    );
                },
                h = (0, l.forwardRef)((e, t) => (0, a.jsx)(C, { forwardRef: t, ...e }));
        },
        68282: (e) => {
            e.exports = {
                root: 'BaseAlbumPromo_root__wgbC3',
                controls: 'BaseAlbumPromo_controls__NiVRJ',
                item: 'BaseAlbumPromo_item__coi3X',
                important: 'BaseAlbumPromo_important__OiNRT',
            };
        },
        68594: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => c });
            var a = i(88800),
                s = i(65724),
                r = i(2058),
                l = i(19994),
                o = i(51806),
                n = i.n(o);
            let c = (e) => {
                let { className: t, isShimmerActive: i } = e,
                    { formatMessage: o } = (0, r.A)();
                return (0, a.jsxs)('div', {
                    'aria-label': o({ id: 'loading-messages.concert-is-loading' }),
                    'aria-live': 'polite',
                    'aria-busy': !0,
                    className: (0, s.$)(n().root, t),
                    children: [
                        (0, a.jsx)(l.W, { className: n().date, radius: 'm', isActive: i }),
                        (0, a.jsxs)('div', {
                            className: n().meta,
                            children: [
                                (0, a.jsx)(l.W, { className: n().title, radius: 's', isActive: i }),
                                (0, a.jsx)(l.W, { className: n().description, radius: 's', isActive: i }),
                            ],
                        }),
                        (0, a.jsx)(l.W, { className: n().action, radius: 'l', isActive: i }),
                    ],
                });
            };
        },
        69117: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => O });
            var a = i(88800),
                s = i(65724),
                r = i(84961),
                l = i(53548),
                o = i(79070),
                n = i(32353),
                c = i(44230),
                d = i(72288),
                m = i(94058),
                _ = i(76099),
                u = i(86540),
                p = i(63582),
                v = i(7695),
                b = i(59791),
                C = i(53534),
                h = i(89846),
                x = i(64543),
                A = i(56374);
            let j = (0, p.n)({ event: 'Tab.Loaded', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, l.useContext)(b.I),
                    { hash: t } = (0, h.g)(),
                    { screen: i, tab: a } = (0, x.j)(),
                    s = (0, l.useContext)(C.k)?.session;
                return (0, A.c)(({ tabId: r = a?.tabId ?? v.w, tabPos: l = a?.tabPos ?? v.Vn, isTabSelectedByDefault: o = a?.isTabSelectedByDefault ?? v.p6 } = {}) => {
                    e &&
                        i?.pageId &&
                        s &&
                        void 0 !== t &&
                        s.loadTab(r, () =>
                            (0, u.hc)(e, {
                                hash: t,
                                pageId: i.pageId,
                                skeletonId: i.skeletonId,
                                mainObjectId: i.mainObjectId,
                                mainObjectType: i.mainObjectType,
                                tabId: r,
                                tabPos: l,
                                isTabSelectedByDefault: o,
                            }),
                        );
                });
            });
            var T = i(37862),
                N = i(87366),
                I = i(29343),
                S = i.n(I);
            let f = (e) => {
                let { filter: t, tabsState: i, value: r, isSticky: o, ...n } = e,
                    c = j();
                return (
                    (0, l.useEffect)(() => {
                        c({ tabId: t.id, tabPos: r + 1, isTabSelectedByDefault: t.id === T.Q.ALL });
                    }, [t.id, r, c]),
                    (0, a.jsx)(N.o, { tabIndex: o ? -1 : 0, className: (0, s.$)(S().root, { [S().root_selected]: r === i.value }), title: t.name, value: r, ...n })
                );
            };
            var L = i(46911),
                g = i.n(L);
            let y = (0, r.PA)((e) => {
                let { className: t, isActive: i = !0, shimmerClassName: r } = e;
                return (0, a.jsx)(_.wI, {
                    className: (0, s.$)(g().root, t),
                    isShimmerVisible: !0,
                    value: 0,
                    shimmer: (0, a.jsx)(_.zr, { className: (0, s.$)(g().root, r), shimmerClassName: g().shimmer, count: 3, isActive: i }),
                });
            });
            var k = i(89021),
                R = i.n(k);
            let E = { [n.u.Desktop]: { start: 40, end: 20 }, [n.u.Mobile]: { start: 40, end: 40 } },
                P = { [n.u.Desktop]: { start: 40, end: 20 }, [n.u.Mobile]: { start: 20, end: 50 } },
                w = (0, r.PA)((e) => {
                    let {
                            tabsState: t,
                            handleFilterClick: i,
                            className: r,
                            forwardRef: n,
                            carouselClassName: u,
                            shimmerClassName: p,
                            isSticky: v,
                            items: b,
                            isShimmerVisible: C,
                            isShimmerActive: h,
                            skipSearchCheck: x = !1,
                        } = e,
                        {
                            playlist: A,
                            settings: { isMobile: j },
                        } = (0, d.g)(),
                        { playlistStickyFiltersRef: T, playlistStaticFiltersRef: N, contentScrollRef: I } = (0, c.g)(),
                        S = null != b ? b : A.filters.items,
                        L = (0, o.L)(() =>
                            (0, a.jsx)(_.wI, {
                                ref: n,
                                className: (0, s.$)(R().carousel, u),
                                ...t,
                                onTabChange: i,
                                children: null == S ? void 0 : S.map((e, i) => (0, a.jsx)(f, { filter: e, tabsState: t, value: i, isSticky: v }, e.id)),
                            }),
                        ),
                        g = (0, l.useCallback)(() => {
                            N && T && (N.scrollLeft = T.scrollLeft);
                        }, [N, T]),
                        k = (0, l.useCallback)(() => {
                            N && T && (T.classList.add(R().carousel_noSmooth), (T.scrollLeft = N.scrollLeft), T.classList.remove(R().carousel_noSmooth));
                        }, [N, T]),
                        [w, O] = (0, l.useState)(!1);
                    (0, l.useEffect)(() => {
                        w && k();
                    }, [w, k]);
                    let M = (0, l.useCallback)(() => {
                        O((null == T ? void 0 : T.checkVisibility({ checkOpacity: !0 })) || !1);
                    }, [T]);
                    return (
                        (0, l.useEffect)(() => {
                            let e = new AbortController(),
                                t = { signal: e.signal };
                            return (
                                v
                                    ? (null == T || T.addEventListener('scroll', g, t), null == T || T.addEventListener('resize', g, t))
                                    : j
                                      ? (window.addEventListener('scroll', M, t), window.addEventListener('resize', M, t))
                                      : (null == I || I.addEventListener('scroll', M, t), null == I || I.addEventListener('resize', M, t)),
                                () => {
                                    e.abort();
                                }
                            );
                        }, [v, I, T, M, g, j]),
                        (null != C ? C : A.filters.isShimmerVisible)
                            ? (0, a.jsx)(y, { isActive: null == h || h, shimmerClassName: p })
                            : S && 0 !== S.length && (x || A.search.isNeededToLoad)
                              ? (0, a.jsx)(m.F, { className: r, carouselElement: L, ref: n, scrollPadding: v ? P : E })
                              : void 0
                    );
                }),
                O = (0, l.forwardRef)((e, t) => (0, a.jsx)(w, { forwardRef: t, ...e }));
        },
        69323: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => D });
            var a = i(88800),
                s = i(65724),
                r = i(55482),
                l = i(84961),
                o = i(53548),
                n = i(2058),
                c = i(35412),
                d = i(62414),
                m = i(17392),
                _ = i(18593),
                u = i(29993),
                p = i(29832),
                v = i(90688),
                b = i(7555),
                C = i(29504),
                h = i(13946),
                x = i(44599),
                A = i(16717),
                j = i(44318),
                T = i(64284),
                N = i(98427),
                I = i(84384),
                S = i(54965),
                f = i(97361),
                L = i(99313),
                g = i(20585),
                y = i(39079),
                k = i(72288),
                R = i(90224),
                E = i(91292),
                P = i(16704),
                w = i(8299),
                O = i(90865),
                M = i.n(O);
            let D = (0, l.PA)((e) => {
                var t;
                let {
                        titleClassName: i,
                        artistLinkClassName: l,
                        clip: O,
                        withVideo: D = !0,
                        artistIdWithoutLink: B,
                        viewUuid: V,
                        shouldOpenModalOnCardClick: U = !0,
                    } = e,
                    { fullscreenVideoPlayer: W } = (0, k.g)(),
                    { formatMessage: H } = (0, n.A)(),
                    z = (0, j.C)(),
                    { from: K } = (0, I.f)({ pageId: N.b.VIDEO_PLAYER, contextId: W.state.contextId, contextType: _.K.Various, blockId: T.U.CLIPS }),
                    Y = (0, f.P)(null != (t = O.duration) ? t : 0),
                    F = (0, x._)(V),
                    $ = (0, d.D)(),
                    X = (0, o.useRef)(null),
                    G = D && O.previewUrl,
                    Z = (0, u.c)(() => {
                        X.current && ((X.current.currentTime = 0), X.current.play());
                    }),
                    q = (0, o.useMemo)(() => (0, r.A)(Z, 500), [Z]),
                    Q = (0, u.c)(() => {
                        var e;
                        null == (e = X.current) || e.pause();
                    }),
                    J = (0, o.useMemo)(() => W.ids.indexOf(O.clipId), [W, O.clipId]),
                    { isPlaying: ee, togglePlay: et } = (0, y.D)({
                        playContextParams: {
                            contextData: { type: _.K.Various, meta: { id: L.H.VARIOUS_CLIP_CONTEXT }, from: K },
                            queueParams: { index: J },
                            entitiesData: W.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(O.clipId),
                        sonataState: W.state,
                        playbackId: g.V.CLIP,
                    }),
                    ei = U ? O.url : (0, A.J)(W.ids, J),
                    ea = (0, u.c)(() => {
                        U ? (z([O.clipId]), F()) : ee || et();
                    }),
                    es = (0, w.X)({ clip: O, callback: ea }),
                    er = H({ id: 'entity-names.clip-name' }, { clipName: O.title }),
                    el = (0, o.useMemo)(
                        () =>
                            O.isAvailable
                                ? (0, a.jsxs)(b.t, {
                                      radius: 'm',
                                      className: (0, s.$)(M().view, M().cover),
                                      onMouseEnter: q,
                                      onMouseLeave: Q,
                                      onClick: es,
                                      children: [
                                          G &&
                                              (0, a.jsx)('video', {
                                                  className: M().media,
                                                  ref: X,
                                                  poster: O.thumbnail && (0, c.oZ)(O.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, a.jsx)('source', { src: O.previewUrl, type: 'video/mp4' }),
                                              }),
                                          O.thumbnail &&
                                              (0, a.jsx)(v._V, {
                                                  className: M().image,
                                                  'aria-hidden': !0,
                                                  src: O.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: c.oZ,
                                              }),
                                          void 0 !== O.duration &&
                                              (0, a.jsx)(C.HL, {
                                                  role: 'text',
                                                  'aria-label': Y,
                                                  variant: 'span',
                                                  className: M().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: (0, S.E)(O.duration, O.duration) }),
                                              }),
                                          (0, a.jsx)(P.D, { variant: 'filled', className: M().playButton, onClick: es, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, a.jsx)(b.t, {
                                      radius: 'm',
                                      className: M().unavailableCover,
                                      children: (0, a.jsx)(v.Ab, { className: M().image, iconVariant: 'unavailable', 'data-test-id': m.S7.ENTITY_COVER_FALLBACK_IMAGE }),
                                  }),
                        [Y, O.isAvailable, O.thumbnail, O.previewUrl, O.duration, q, Q, es, G],
                    ),
                    eo = (0, o.useMemo)(
                        () =>
                            O.hasArtists
                                ? (0, a.jsx)(
                                      h.i,
                                      { linkClassName: (0, s.$)(M().artistLink, l), artists: O.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: B },
                                      O.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [B, O, l],
                    );
                return (0, a.jsx)(p.MN, {
                    ref: $,
                    className: M().root,
                    explicitMarkComponent:
                        O.explicitDisclaimer &&
                        (0, a.jsx)(R.N, { getDescriptionTexts: O.getDescriptionTexts, variant: O.explicitDisclaimer, size: 'xxs' }, O.getKey('ExplicitMarkIcon')),
                    'aria-label': er,
                    srTitle: (0, a.jsx)(E.N, { className: M().srTitleLink, href: ei, onClick: es, children: er }),
                    title: (0, a.jsxs)(
                        C.HL,
                        {
                            className: (0, s.$)(M().title, i),
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            'aria-hidden': !0,
                            children: [
                                (0, a.jsx)(E.N, {
                                    className: M().titleLink,
                                    href: ei,
                                    tabIndex: -1,
                                    'aria-label': er,
                                    onClick: es,
                                    'data-test-id': m.Kq.clip.CLIP_META_TITLE,
                                    children: O.title,
                                }),
                                O.version && (0, a.jsx)(C.HL, { className: M().version, variant: 'span', children: ' '.concat(O.version) }),
                            ],
                        },
                        O.getKey('Title'),
                    ),
                    view: el,
                    description: eo,
                    'data-test-id': m.Kq.clip.CLIP_CARD,
                });
            });
        },
        69463: (e) => {
            e.exports = { root: 'Overview_root__2deXs' };
        },
        70558: (e) => {
            e.exports = { root: 'TextBlockShimmer_root__og5Bj', shimmer: 'TextBlockShimmer_shimmer__TpDdq' };
        },
        70610: (e) => {
            e.exports = {
                root: 'ContinueListenTrack_root__JFzVe',
                cover: 'ContinueListenTrack_cover__E5zob',
                important: 'ContinueListenTrack_important__4_84V',
                metaTrack: 'ContinueListenTrack_metaTrack__hSIYC',
                content: 'ContinueListenTrack_content__xU2R9',
                textContainer: 'ContinueListenTrack_textContainer__zisLi',
                titleIcon: 'ContinueListenTrack_titleIcon__smcf_',
                title: 'ContinueListenTrack_title__LBdpD',
                explicitMark: 'ContinueListenTrack_explicitMark___eXOa',
                metaContainer: 'ContinueListenTrack_metaContainer__Yoo2N',
                playButton: 'ContinueListenTrack_playButton__5tT4s',
                progress: 'ContinueListenTrack_progress__CfJQP',
                fullCircle: 'ContinueListenTrack_fullCircle__xrROh',
                progressCircle: 'ContinueListenTrack_progressCircle__msDye',
            };
        },
        72503: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => h });
            var a = i(88800),
                s = i(65724),
                r = i(53548),
                l = i(2058),
                o = i(88969),
                n = i(35412),
                c = i(96817),
                d = i(52300),
                m = i(7555),
                _ = i(29504),
                u = i(81877),
                p = i(91292),
                v = i(90285),
                b = i.n(v);
            let C = (e) => {
                    let { artist: t, goal: i, onNavigateToArtist: r, onNavigateToDonation: v, forwardRef: C, ...h } = e,
                        { formatMessage: x } = (0, l.A)();
                    return (0, a.jsxs)('div', {
                        ref: C,
                        className: (0, s.$)(b().root, b().donation),
                        ...(0, n.OZ)(h),
                        children: [
                            (0, a.jsx)(m.t, {
                                radius: 'round',
                                className: b().cover,
                                children: (0, a.jsx)(p.N, {
                                    href: t.url,
                                    onClick: r,
                                    'aria-label': x({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                                    children: (0, a.jsx)(u.B, {
                                        className: b().image,
                                        src: t.coverUri,
                                        isAvailable: t.isAvailable,
                                        size: 200,
                                        fit: 'cover',
                                        withAvatarReplace: !0,
                                        'aria-hidden': !0,
                                    }),
                                }),
                            }),
                            (0, a.jsxs)('div', {
                                className: b().container,
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: b().text,
                                        children: [
                                            (0, a.jsx)(_.DZ, { variant: 'span', size: 'xs', weight: 'bold', lineClamp: 2, className: b().artist, children: t.name }),
                                            (0, a.jsx)(_.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                lineClamp: 2,
                                                className: b().goal,
                                                children: i,
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)(c.$, {
                                        role: 'link',
                                        size: 's',
                                        color: 'secondary',
                                        onClick: v,
                                        className: b().label,
                                        withRipple: !1,
                                        children: [
                                            (0, a.jsx)(d.I, { variant: 'ruble', size: 'xxxs' }),
                                            (0, a.jsx)(_.HL, {
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                variant: 'span',
                                                children: (0, a.jsx)(o.A, { id: 'donation.support-button' }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                h = (0, r.forwardRef)((e, t) => (0, a.jsx)(C, { forwardRef: t, ...e }));
        },
        72876: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => f });
            var a,
                s,
                r = i(88800),
                l = i(65724),
                o = i(84961),
                n = i(53548),
                c = i(17392),
                d = i(79070),
                m = i(90688),
                _ = i(72288),
                u = i(97956),
                p = i(35412);
            let v = (e) => (0, p.a6)(e.replace('%%', '960x690_noncrop'));
            var b = i(88969),
                C = i(29504);
            function h() {
                return (h = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var a in i) ({}).hasOwnProperty.call(i, a) && (e[a] = i[a]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let x = function (e) {
                return n.createElement(
                    'svg',
                    h({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none' }, e),
                    a ||
                        (a = n.createElement(
                            'defs',
                            null,
                            n.createElement(
                                'linearGradient',
                                { id: 'plusColorGradient', x1: 0, x2: 24, y1: 10.4, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                n.createElement('stop', { stopColor: '#FF5C4D' }),
                                n.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                n.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            n.createElement('clipPath', { id: 'plusColorClip' }, n.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 })),
                        )),
                    s ||
                        (s = n.createElement(
                            'g',
                            { clipPath: 'url(#plusColorClip)' },
                            n.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 }),
                            n.createElement('path', {
                                fill: 'url(#plusColorGradient)',
                                fillRule: 'evenodd',
                                d: 'M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0c1.295 0 2.542.205 3.71.585L12.977 9H4.989l-.976 3H12l-2.34 7.2h3.3L15.3 12H24Zm-.378-3h-7.346l2.29-7.046A12.019 12.019 0 0 1 23.622 9Z',
                                clipRule: 'evenodd',
                            }),
                        )),
                );
            };
            var A = i(33075),
                j = i.n(A);
            let T = (e) => {
                let { percent: t, className: i } = e;
                return (0, r.jsxs)('div', {
                    className: (0, l.$)(j().root, i),
                    'data-test-id': c.OA.concert.CONCERT_CARD_CASHBACK_PERCENT,
                    children: [
                        (0, r.jsx)(x, { 'aria-hidden': !0, className: j().icon }),
                        (0, r.jsx)(C.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'xs',
                            weight: 'medium',
                            className: j().text,
                            children: (0, r.jsx)(b.A, { id: 'entity-names.percent', values: { value: t } }),
                        }),
                    ],
                });
            };
            var N = i(74250),
                I = i(60201),
                S = i.n(I);
            let f = (0, o.PA)((e) => {
                let { uri: t, withMask: i, datetime: a, coverColor: s, cashbackPercent: o } = e,
                    { experiments: b } = (0, _.g)(),
                    [C, h] = (0, n.useState)(!1),
                    x = b.checkExperiment(u.z.NewConcertsTicketRedesign, 'on') && i,
                    A = b.checkExperiment(u.z.WebNextConcertsIdentityEventType, 'on'),
                    j = (0, n.useCallback)(() => {
                        h(!0);
                    }, []),
                    I = (0, d.L)(() => {
                        if (s)
                            return {
                                '--concert-image-date-background': ((e) => {
                                    let { h: t, s: i, l: a } = (0, p.g8)(e);
                                    return 'hsl('
                                        .concat(t, ', ')
                                        .concat(i, '%, ')
                                        .concat(a <= 55 ? a + 20 : a - 20, '%)');
                                })(s),
                            };
                    }),
                    f = (0, d.L)(() =>
                        a
                            ? (0, r.jsxs)('div', {
                                  className: (0, l.$)(S().date, { [S().date_withEventType]: A }),
                                  children: [
                                      (0, r.jsx)(m._V, {
                                          className: S().dateBackground,
                                          fit: 'cover',
                                          src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69aab8c335547735b2df1c54/%%',
                                          'aria-hidden': !0,
                                          withAvatarReplace: !0,
                                          withLoadingIndicator: !1,
                                          onLoad: j,
                                      }),
                                      C &&
                                          (0, r.jsx)(N.d, {
                                              className: S().root_withEventType,
                                              dayClassName: S().day_withEventType,
                                              weekdayClassName: S().weekday_withEventType,
                                              monthClassName: S().month_withEventType,
                                              datetime: a,
                                          }),
                                  ],
                              })
                            : null,
                    ),
                    L = (0, d.L)(() =>
                        a
                            ? (0, r.jsx)(N.d, {
                                  dayClassName: S().day,
                                  weekdayClassName: (0, l.$)(S().weekday, S().important),
                                  monthClassName: S().month,
                                  className: S().date,
                                  datetime: a,
                              })
                            : null,
                    );
                return (0, r.jsxs)('div', {
                    className: (0, l.$)(S().root, { [S().root_withMask]: x }),
                    style: I,
                    children: [
                        (0, r.jsx)(m._V, {
                            className: S().image,
                            fit: 'cover',
                            src: t,
                            withAvatarReplace: !0,
                            createUrlReplacer: v,
                            'aria-hidden': !0,
                            'data-test-id': c.OA.concert.CONCERT_CARD_IMAGE,
                        }),
                        a && (A ? f : L),
                        A && o && (0, r.jsx)(T, { className: S().cashback, percent: o }),
                    ],
                });
            });
        },
        73900: (e) => {
            e.exports = { text: 'Q2vSuggestion_text__d1vnX', root: 'Q2vSuggestion_root__Ep0ce' };
        },
        74250: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => m });
            var a = i(88800),
                s = i(65724),
                r = i(2058),
                l = i(17392),
                o = i(29504),
                n = i(32414),
                c = i(22989),
                d = i.n(c);
            let m = (e) => {
                let { datetime: t, className: i, monthClassName: c, dayClassName: m, weekdayClassName: _, withWeekday: u = !0, ...p } = e,
                    { formatDate: v } = (0, r.A)(),
                    b = ((e) => {
                        let { formatMessage: t } = (0, r.A)(),
                            i = {
                                0: t({ id: 'calendar.january-short' }),
                                1: t({ id: 'calendar.february-short' }),
                                2: t({ id: 'calendar.march-short' }),
                                3: t({ id: 'calendar.april-short' }),
                                4: t({ id: 'calendar.may-short' }),
                                5: t({ id: 'calendar.june-short' }),
                                6: t({ id: 'calendar.july-short' }),
                                7: t({ id: 'calendar.august-short' }),
                                8: t({ id: 'calendar.september-short' }),
                                9: t({ id: 'calendar.october-short' }),
                                10: t({ id: 'calendar.november-short' }),
                                11: t({ id: 'calendar.december-short' }),
                            };
                        if (e) return i[new Date(e).getMonth()];
                    })(t);
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(d().root, i),
                    'aria-label': v(t, (0, n.s)()),
                    ...p,
                    'data-test-id': l.OA.concert.CONCERT_DATE,
                    children: [
                        (0, a.jsx)(o.HL, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, s.$)(d().month, c),
                            'data-test-id': l.OA.concert.CONCERT_DATE_MONTH,
                            children: b,
                        }),
                        (0, a.jsx)(o.HL, {
                            variant: 'div',
                            className: (0, s.$)(d().day, m),
                            'data-test-id': l.OA.concert.CONCERT_DATE_DAY,
                            children: v(t, { day: 'numeric' }),
                        }),
                        u &&
                            (0, a.jsx)(o.HL, {
                                variant: 'div',
                                size: 'xs',
                                weight: 'bold',
                                className: (0, s.$)(d().weekday, _),
                                'data-test-id': l.OA.concert.CONCERT_DATE_WEEKDAY,
                                children: v(t, { weekday: 'short' }),
                            }),
                    ],
                });
            };
        },
        74791: (e) => {
            e.exports = {
                root: 'Special_root__FOrBZ',
                actions: 'Special_actions__XYuvB',
                textContainer: 'Special_textContainer__pN_TF',
                textColor: 'Special_textColor__dySbq',
                imageContainer: 'Special_imageContainer__V1_E3',
                image: 'Special_image__1sSXR',
                button: 'Special_button__j8gGH',
                advDisclaimer: 'Special_advDisclaimer__aMsoC',
                advDisclaimerTrigger: 'Special_advDisclaimerTrigger__19qVj',
                advDisclaimerPopover: 'Special_advDisclaimerPopover__5WrLl',
                advDisclaimerText: 'Special_advDisclaimerText__eQP9w',
            };
        },
        75034: (e) => {
            e.exports = {
                root: 'VerticalListItemShimmer_root__Ppz8c',
                infoContainer: 'VerticalListItemShimmer_infoContainer__ycrKq',
                textContainer: 'VerticalListItemShimmer_textContainer__kHkGo',
                title: 'VerticalListItemShimmer_title__z_x63',
                cover: 'VerticalListItemShimmer_cover__0SqgP',
                action: 'VerticalListItemShimmer_action__DvEuY',
            };
        },
        76106: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => s });
            var a = i(82212);
            let s = {
                [a.t.ALBUM_PROMO]: 314,
                [a.t.ARTIST_RECOMMENDATIONS_PROMO]: 390,
                [a.t.SIMPLE_ARTIST_RECOMMENDATIONS_PROMO]: 184,
                [a.t.ARTIST_PICK]: 102,
                [a.t.ARTIST_CONCERTS]: 232,
                [a.t.ARTIST_PLAYLISTS]: 316,
                [a.t.ARTIST_POPULAR_TRACKS_AND_RELEASES]: 340,
                [a.t.ARTIST_POPULAR_TRACKS]: 340,
                [a.t.ARTIST_RELEASE]: 340,
                [a.t.ARTIST_UPCOMING_RELEASE]: 340,
                [a.t.ARTIST_ALBUMS]: 316,
                [a.t.ARTIST_COMPILATIONS]: 316,
                [a.t.ARTIST_CLIPS]: 292,
                [a.t.ARTIST_STUDIO_ALBUMS]: 316,
                [a.t.FAMILIAR_YOU_AND_ARTIST_PICK]: 102,
                [a.t.SIMPLE_ALBUM_PROMO]: 140,
                [a.t.CHART_ALBUMS]: 322,
                [a.t.CHART_TRACKS]: 284,
                [a.t.COLLECTION_ALBUMS]: 320,
                [a.t.COLLECTION_ALBUMS_PRESAVES]: 378,
                [a.t.COLLECTION_ARTISTS]: 336,
                [a.t.COLLECTION_ARTISTS_AND_TOP]: 336,
                [a.t.COLLECTION_TOP_ARTISTS]: 336,
                [a.t.COLLECTION_CLIPS]: 292,
                [a.t.COLLECTION_FAVOURITE_PLAYLIST]: 370,
                [a.t.COLLECTION_PLAYLISTS_CREATED]: 316,
                [a.t.COLLECTION_PLAYLISTS_LIKED]: 316,
                [a.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED]: 378,
                [a.t.COLLECTION_PLAYLIST_WITH_LIKES]: 310,
                [a.t.COLLECTION_KIDS]: 320,
                [a.t.COLLECTION_WAVE_ROOMS]: 320,
                [a.t.CONCERTS_PERSONAL]: 442,
                [a.t.COLLECTION_DOWNLOADED_TRACKS]: 298,
                [a.t.CONCERTS_TOP]: 442,
                [a.t.EDITORIAL_ARTISTS]: 336,
                [a.t.EDITORIAL_CONCERTS]: 442,
                [a.t.VIEWED_CONCERTS]: 442,
                [a.t.EDITORIAL_COMPILATION]: 316,
                [a.t.EDITORIAL_NEW_RELEASES]: 410,
                [a.t.EDITORIAL_PROMOTIONS]: 342,
                [a.t.EDITORIAL_WAVES]: 138,
                [a.t.EDITORIAL_WAVES_AGENT]: 319,
                [a.t.META_TAG_WAVE_AGENT]: 319,
                [a.t.MICRO_GENRE_WAVE_AGENT]: 319,
                [a.t.MICRO_GENRE_SIMILAR_WAVE_AGENT]: 319,
                [a.t.META_TAG_SIMILAR_WAVE_AGENT]: 319,
                [a.t.IN_STYLE]: 370,
                [a.t.ITEM_LIST]: 250,
                [a.t.LIKES_AND_HISTORY]: 106,
                [a.t.META_TAG_ALBUMS]: 316,
                [a.t.META_TAG_ARTISTS]: 336,
                [a.t.META_TAG_NEW_ALBUMS]: 316,
                [a.t.META_TAG_PLAYLISTS]: 316,
                [a.t.META_TAG_POPULAR_ARTISTS]: 336,
                [a.t.META_TAG_POPULAR_PLAYLISTS]: 316,
                [a.t.META_TAG_SIMILAR_WAVE]: 138,
                [a.t.META_TAG_WAVE]: 64,
                [a.t.MICRO_GENRE_ALBUMS]: 316,
                [a.t.MICRO_GENRE_ARTISTS]: 336,
                [a.t.MICRO_GENRE_SIMILAR_WAVE]: 138,
                [a.t.MICRO_GENRE_TOP_ARTISTS]: 336,
                [a.t.MICRO_GENRE_WAVE]: 64,
                [a.t.MIXES]: 260,
                [a.t.MIXES_GRID]: 240,
                [a.t.MIXES_MUSIC]: 264,
                [a.t.NEUROMUSIC]: 138,
                [a.t.NEW_PLAYLISTS]: 316,
                [a.t.ARTIST_SIMILAR_ENTITIES]: 316,
                [a.t.COLLECTION_SIMILAR_ENTITIES]: 316,
                [a.t.NEW_RELEASES]: 410,
                [a.t.NEW_STARS_ARTISTS]: 336,
                [a.t.NON_MUSIC_EDITORIAL_COMPILATION]: 316,
                [a.t.NON_MUSIC_OPEN_PLAYLIST]: 310,
                [a.t.NON_MUSIC_PROMOTIONS]: 342,
                [a.t.OPEN_PLAYLIST]: 310,
                [a.t.OVERVIEW]: 84,
                [a.t.PERSONAL_ARTISTS]: 336,
                [a.t.PERSONAL_PLAYLISTS]: 342,
                [a.t.PROMOTIONS]: 342,
                [a.t.Q2V_SUGGESTIONS]: 48,
                [a.t.RECENTLY_PLAYED]: 316,
                [a.t.RECOMMENDED_PLAYLISTS]: 316,
                [a.t.REWIND_PLAYLISTS]: 342,
                [a.t.SMART_OPEN_PLAYLIST]: 310,
                [a.t.SPECIAL]: 192,
                [a.t.SIMILAR_ARTISTS]: 336,
                [a.t.TABS]: 60,
                [a.t.WAVES]: 176,
                [a.t.WAVES_AGENT]: 370,
                [a.t.SETS_BY_WAVES_AGENT]: 370,
                [a.t.SETS_BY_WAVES]: 176,
                [a.t.WIZARD]: 328,
                [a.t.DONATIONS]: 216,
                [a.t.CLIPS]: 292,
                [a.t.CONTINUE_LISTEN]: 138,
                [a.t.DISLIKES]: 54,
                [a.t.HISTORY]: 402,
                [a.t.SEARCH_HISTORY]: 402,
                [a.t.FAMILIAR_YOU]: 102,
                [a.t.CONCERT_PLACE]: 324,
                [a.t.COLLECTION_WAVE_AGENT]: 186,
                [a.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS]: 336,
                [a.t.NON_MUSIC_CATEGORY]: 316,
                [a.t.PODCASTS_CHART_ALBUMS]: 322,
            };
        },
        76484: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => r });
            var a = i(2058),
                s = i(29993);
            let r = () => {
                let { formatMessage: e, formatNumber: t } = (0, a.A)();
                return (0, s.c)((i) => {
                    var a, s;
                    return (null == (a = i.price) ? void 0 : a.value)
                        ? e(
                              { id: 'payment.min-price' },
                              { value: t(i.price.value, { style: 'currency', currency: null == (s = i.price) ? void 0 : s.currency, maximumFractionDigits: 0 }) },
                          )
                        : e({ id: 'payment.buy' });
                });
            };
        },
        76524: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => o });
            var a = i(88800),
                s = i(65724),
                r = i(82892),
                l = i.n(r);
            let o = (e) => {
                let { align: t, children: i, overlay: r, isDisabled: o = !1, className: n, surfaceClassName: c, overlayClassName: d } = e,
                    m = 'back' === t;
                return (0, a.jsxs)('span', {
                    className: (0, s.$)(l().root, m ? l().root_back : l().root_front, n),
                    children: [
                        (0, a.jsxs)('span', {
                            className: (0, s.$)(l().circle, { [l().circle_back]: m, [l().circle_disabled]: o }),
                            children: [(0, a.jsx)('span', { className: (0, s.$)(l().surface, c), children: i }), d && (0, a.jsx)('span', { className: d })],
                        }),
                        r,
                    ],
                });
            };
        },
        76723: (e) => {
            e.exports = {
                root: 'Vibes_root__Bk6PF',
                controls: 'Vibes_controls__bUp2H',
                header: 'Vibes_header__RcW5b',
                important: 'Vibes_important__Vew_4',
                tab: 'Vibes_tab__uOfqW',
                tabShimmer: 'Vibes_tabShimmer__hjehH',
                tabCarousel: 'Vibes_tabCarousel__bSvp0',
            };
        },
        76827: (e) => {
            e.exports = {
                root: 'ClipCardShimmer_root__sIvNr',
                cover: 'ClipCardShimmer_cover__yA4jz',
                title: 'ClipCardShimmer_title__MCApK',
                text: 'ClipCardShimmer_text__ajZGv',
            };
        },
        76830: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => x });
            var a = i(88800),
                s = i(65724),
                r = i(84961),
                l = i(2058),
                o = i(88969),
                n = i(87999),
                c = i(80643),
                d = i(17392),
                m = i(29993),
                _ = i(96817),
                u = i(52300),
                p = i(29504),
                v = i(72288),
                b = i(76524),
                C = i(47674),
                h = i.n(C);
            let x = (0, r.PA)((e) => {
                let { withMobileLayout: t } = e,
                    {
                        settings: { isMobile: i },
                        multivibe: r,
                    } = (0, v.g)(),
                    { formatMessage: C } = (0, l.A)(),
                    x = (0, c.S)(),
                    A = t && i,
                    j = (0, m.c)(() => {
                        (x({ to: n.AppScreen.MultivibeSendingInvitationScreen }), r.promoModal.open());
                    });
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(h().root, { [h().root_mobile]: A }),
                    'data-test-id': d.Kq.multivibe.MULTIVIBE_SHOW_PROMO_MODAL_CARD,
                    children: [
                        (0, a.jsxs)(_.$, {
                            className: (0, s.$)(h().button, { [h().button_mobile]: A }),
                            'aria-label': C({ id: 'interface-actions.create' }),
                            onClick: j,
                            variant: 'text',
                            isBlock: !0,
                            withRipple: !1,
                            withHover: !1,
                            'data-test-id': d.Kq.multivibe.MULTIVIBE_SHOW_PROMO_MODAL_BUTTON,
                            children: [
                                (0, a.jsx)(b.b, { align: 'back', surfaceClassName: h().surface }),
                                (0, a.jsx)(b.b, {
                                    align: 'front',
                                    surfaceClassName: h().surface,
                                    children: (0, a.jsx)(u.I, { variant: 'add', size: A ? 'xxxs' : 'l', className: h().icon }),
                                }),
                            ],
                        }),
                        (0, a.jsx)('div', {
                            className: h().titleWrapper,
                            children: (0, a.jsx)(p.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                className: (0, s.$)(h().title, { [h().title_mobile]: A }),
                                children: (0, a.jsx)(o.A, { id: 'interface-actions.create' }),
                            }),
                        }),
                    ],
                });
            });
        },
        77309: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => m });
            var a = i(53548),
                s = i(86540),
                r = i(63582),
                l = i(7695),
                o = i(59791),
                n = i(89846),
                c = i(64543),
                d = i(56374);
            let m = (0, r.n)({ event: 'Tab.Opened', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, a.useContext)(o.I),
                    { hash: t } = (0, n.g)(),
                    { screen: i, tab: r } = (0, c.j)();
                return (0, d.c)(({ tabId: a = r?.tabId ?? l.w, tabPos: o = r?.tabPos ?? l.Vn, isTabSelectedByDefault: n = r?.isTabSelectedByDefault ?? l.p6 } = {}) => {
                    e &&
                        i?.pageId &&
                        void 0 !== t &&
                        (0, s.TV)(e, {
                            hash: t,
                            pageId: i.pageId,
                            skeletonId: i.skeletonId,
                            mainObjectId: i.mainObjectId,
                            mainObjectType: i.mainObjectType,
                            tabId: a,
                            tabPos: o,
                            isTabSelectedByDefault: n,
                        });
                });
            });
        },
        77605: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => n });
            var a = i(88800),
                s = i(19994),
                r = i(64310),
                l = i(76827),
                o = i.n(l);
            let n = (e) => {
                let { isActive: t } = e;
                return (0, a.jsxs)('div', {
                    className: o().root,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    children: [
                        (0, a.jsx)(s.W, { isActive: t, className: o().cover, radius: 'l' }),
                        (0, a.jsx)(r.n, { isActive: t, className: o().title }),
                        (0, a.jsx)(r.n, { isActive: t, className: o().text }),
                    ],
                });
            };
        },
        77783: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => u });
            var a = i(88800),
                s = i(65724),
                r = i(53548),
                l = i(35412),
                o = i(53323),
                n = i(18486),
                c = i(31764),
                d = i(23717),
                m = i.n(d);
            let _ = (e) => {
                    let {
                            className: t,
                            forwardRef: i,
                            headerClassName: d,
                            containerClassName: _,
                            headingVariant: u,
                            title: p,
                            viewAllActionLink: v,
                            description: b,
                            children: C,
                            ...h
                        } = e,
                        x = (0, r.useId)(),
                        A = (0, r.useRef)(null);
                    return (0, a.jsxs)('section', {
                        ref: i,
                        className: (0, s.$)(m().root, t),
                        ...(0, l.OZ)(h),
                        children: [
                            (0, a.jsx)(n.T, {
                                className: d,
                                labeledForId: x,
                                title: p,
                                description: b,
                                viewAllActionLink: v,
                                controls: (0, a.jsx)(c.X, { className: m().controls, carouselRef: A }),
                                headingVariant: u,
                                withDescription: !!b,
                            }),
                            (0, a.jsx)(o.F, { ref: A, itemClassName: (0, s.$)(m().item, m().important), className: _, 'aria-labelledby': x, children: C }),
                        ],
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, a.jsx)(_, { forwardRef: t, ...e }));
        },
        78373: (e) => {
            e.exports = {
                root: 'ConcertCardWithImage_root__NHF59',
                cover: 'ConcertCardWithImage_cover__3V2fk',
                cashbackTitle: 'ConcertCardWithImage_cashbackTitle__lfr7z',
                cashback: 'ConcertCardWithImage_cashback__sNa2M',
                shimmerCover: 'ConcertCardWithImage_shimmerCover___X6xn',
                shimmerTitle: 'ConcertCardWithImage_shimmerTitle__YgaQa',
                shimmerInfo: 'ConcertCardWithImage_shimmerInfo__yUfJ4',
                shimmerCity: 'ConcertCardWithImage_shimmerCity__VlGY_',
                meta: 'ConcertCardWithImage_meta__mhsYf',
                button: 'ConcertCardWithImage_button__osv22',
                shimmerButton: 'ConcertCardWithImage_shimmerButton__JZEFY',
            };
        },
        79064: (e) => {
            e.exports = {
                root: 'AlbumPromoCard_root__dAUet',
                artistImage: 'AlbumPromoCard_artistImage__fWVxn',
                artistImage_withTopPosition: 'AlbumPromoCard_artistImage_withTopPosition__tRrcO',
                artistCover: 'AlbumPromoCard_artistCover__Gfhab',
                albumCover: 'AlbumPromoCard_albumCover__QYYKH',
                button: 'AlbumPromoCard_button__mpQr6',
                buttonIcon: 'AlbumPromoCard_buttonIcon__WredC',
                buttonText: 'AlbumPromoCard_buttonText__pI3Ot',
                albumImage: 'AlbumPromoCard_albumImage__v8021',
                albumLink: 'AlbumPromoCard_albumLink__dnGvR',
                artistLink: 'AlbumPromoCard_artistLink__AD9__',
                title: 'AlbumPromoCard_title__uzmho',
                titleLink: 'AlbumPromoCard_titleLink__4DLNk',
                titleContainer: 'AlbumPromoCard_titleContainer__f1k8Y',
                artists: 'AlbumPromoCard_artists__UYpyB',
                artistsLink: 'AlbumPromoCard_artistsLink__8gTlH',
            };
        },
        79939: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var a = i(88800),
                s = i(65724),
                r = i(84961),
                l = i(53548),
                o = i(35412),
                n = i(18486),
                c = i(31764),
                d = i(7857),
                m = i.n(d),
                _ = i(93671);
            let u = (0, r.PA)((e) => {
                    let {
                            clipCardTitleClassName: t,
                            clipCardArtistLinkClassName: i,
                            carouselItemClassName: r,
                            forwardRef: d,
                            isShimmerVisible: u,
                            isShimmerActive: p,
                            title: v,
                            description: b,
                            containerClassName: C,
                            headerClassName: h,
                            viewAllActionLink: x,
                            artistIdWithoutLink: A,
                            withVideo: j = !0,
                            clips: T,
                            headingVariant: N,
                            className: I,
                            shouldOpenModalOnCardClick: S = !0,
                            itemCounter: f,
                            ...L
                        } = e,
                        g = (0, l.useId)(),
                        y = (0, l.useRef)(null);
                    return (0, a.jsxs)('section', {
                        className: (0, s.$)(m().root, I),
                        ref: d,
                        ...(0, o.OZ)(L),
                        children: [
                            (0, a.jsx)(n.T, {
                                className: h,
                                labeledForId: g,
                                title: v,
                                description: b,
                                viewAllActionLink: x,
                                controls: (0, a.jsx)(c.X, { className: m().controls, carouselRef: y }),
                                headingVariant: N,
                                withDescription: !!b,
                            }),
                            (0, a.jsx)(_.t, {
                                clipCardTitleClassName: t,
                                clipCardArtistLinkClassName: i,
                                carouselItemClassName: r,
                                isShimmerVisible: u,
                                isShimmerActive: p,
                                containerClassName: C,
                                artistIdWithoutLink: A,
                                withVideo: j,
                                clips: T,
                                shouldOpenModalOnCardClick: S,
                                itemCounter: f,
                                ref: y,
                                'aria-labelledby': g,
                            }),
                        ],
                    });
                }),
                p = (0, l.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
        },
        80153: (e) => {
            e.exports = {
                root: 'NewReleaseCard_root__IY5m_',
                ripple: 'NewReleaseCard_ripple__VoybZ',
                image: 'NewReleaseCard_image__oxm2S',
                info: 'NewReleaseCard_info__rcfoY',
                type: 'NewReleaseCard_type__cW58D',
                title: 'NewReleaseCard_title__N5soS',
                description: 'NewReleaseCard_description__Daz5q',
                container: 'NewReleaseCard_container__XvwZC',
                explicitMark: 'NewReleaseCard_explicitMark__isgxE',
                explicitMarkContainer: 'NewReleaseCard_explicitMarkContainer__QHRoH',
                button: 'NewReleaseCard_button__WPk82',
                paperLink: 'NewReleaseCard_paperLink__NN_8o',
            };
        },
        81602: (e) => {
            e.exports = {
                positionIndicator: 'ArtistTopCard_positionIndicator__Bs_Ga',
                crownIcon: 'ArtistTopCard_crownIcon__yxAH3',
                progressIcon: 'ArtistTopCard_progressIcon__gHcbF',
                progressIcon_up: 'ArtistTopCard_progressIcon_up__PeHBx',
                progressIcon_down: 'ArtistTopCard_progressIcon_down__0PKeO',
                progressIcon_same: 'ArtistTopCard_progressIcon_same___SujQ',
                progressIcon_new: 'ArtistTopCard_progressIcon_new__w3wA6',
                listenTime: 'ArtistTopCard_listenTime__P1_jw',
            };
        },
        82457: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var a = i(7123);
            let s = (e, t) => ({ type: a.z4.Unloaded, meta: { id: e, albumId: t } });
        },
        82892: (e) => {
            e.exports = {
                root: 'VibeRoomMemberAvatarSlot_root__0id8R',
                root_back: 'VibeRoomMemberAvatarSlot_root_back__whzaT',
                root_front: 'VibeRoomMemberAvatarSlot_root_front__ZAlv_',
                surface: 'VibeRoomMemberAvatarSlot_surface__Ylq3t',
                circle: 'VibeRoomMemberAvatarSlot_circle__N0n0t',
                circle_back: 'VibeRoomMemberAvatarSlot_circle_back__XNqs4',
                circle_disabled: 'VibeRoomMemberAvatarSlot_circle_disabled__KTcAv',
            };
        },
        83182: (e) => {
            e.exports = {
                message: 'OverviewBlock_message__f41Rq',
                modal: 'OverviewBlock_modal__Jxiv2',
                modalHeader: 'OverviewBlock_modalHeader__nerV2',
                modalHeader_withTitle: 'OverviewBlock_modalHeader_withTitle__gjKhp',
                modalContent: 'OverviewBlock_modalContent__fw4fH',
                button: 'OverviewBlock_button__k7t4c',
                modalOverlay: 'OverviewBlock_modalOverlay__1dp_D',
            };
        },
        84273: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => p });
            var a = i(88800),
                s = i(65724),
                r = i(84961),
                l = i(17392),
                o = i(18344),
                n = i(90688),
                c = i(7555),
                d = i(29504),
                m = i(91292),
                _ = i(40989),
                u = i.n(_);
            let p = (0, r.PA)((e) => {
                let { className: t, title: i, weblink: r, covers: _ = [], coverSize: p = 100, imagesLayoutType: v, headingVariant: b = 'h3' } = e;
                return (0, a.jsx)(m.N, {
                    href: r,
                    'data-test-id': l.OA.mix.MIX_CARD,
                    children: (0, a.jsxs)(c.t, {
                        className: (0, s.$)(u().root, t),
                        radius: 'l',
                        children: [
                            (0, a.jsx)('div', {
                                className: u().header,
                                children: (0, a.jsx)(d.HL, {
                                    variant: b,
                                    size: 'xs',
                                    weight: 'bold',
                                    className: u().title,
                                    lineClamp: 2,
                                    'data-test-id': l.OA.mix.MIX_CARD_HEADER,
                                    children: i,
                                }),
                            }),
                            (0, a.jsxs)('div', {
                                className: (0, s.$)(u().covers, { [u().covers_radial]: v === o.R.RADIAL, [u().covers_stack]: v === o.R.STACK }),
                                'data-test-id': l.OA.mix.MIX_CARD_COVERS,
                                children: [
                                    (0, a.jsx)(n._V, {
                                        src: _[2],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: u().cover,
                                        size: p,
                                        'data-test-id': l.OA.mix.MIX_CARD_COVER_IMAGE_3,
                                    }),
                                    (0, a.jsx)(n._V, {
                                        src: _[1],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: u().cover,
                                        size: p,
                                        'data-test-id': l.OA.mix.MIX_CARD_COVER_IMAGE_2,
                                    }),
                                    (0, a.jsx)(n._V, {
                                        src: _[0],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: u().cover,
                                        size: p,
                                        'data-test-id': l.OA.mix.MIX_CARD_COVER_IMAGE_1,
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
        },
        85614: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => n });
            var a = i(88800),
                s = i(65724),
                r = i(19994),
                l = i(70558),
                o = i.n(l);
            let n = (e) => {
                let { className: t, shimmerClassName: i, isActive: l = !1, count: n = 10, minWidth: c = 50, maxWidth: d = 90, multiplicity: m = 1 } = e;
                return (0, a.jsx)('div', {
                    className: (0, s.$)(o().root, t),
                    children: Array.from({ length: n }, (e, t) => {
                        let n = ''.concat(((e, t, i) => Math.floor((Math.floor(Math.random() * (t - e + 1)) + e) / i) * i)(c, d, m), '%');
                        return (0, a.jsx)(r.W, { width: n, className: (0, s.$)(o().shimmer, i), isActive: l, radius: 's' }, t);
                    }),
                });
            };
        },
        86535: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => s });
            var a = i(64284),
                s = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(a.U.RUP, '_').concat(a.U.MAIN, '-').concat(a.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(a.U.DISCOGRAPHY, '_').concat(a.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(a.U.ALBUMS, '_').concat(a.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(a.U.COMPILATIONS, '_').concat(a.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(a.U.ARTISTS, '_').concat(a.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(a.U.CLIPS, '_').concat(a.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(a.U.DISCOVERY, '_').concat(a.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(a.U.SEARCH, '_').concat(a.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.SIMILAR, '_').concat(a.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(a.U.SEARCH, '_').concat(a.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(a.U.SEARCH, '_').concat(a.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        86540: (e, t, i) => {
            'use strict';
            ((t.TV = function (e, t) {
                let { skeletonId: i = '', mainObjectType: r = s.DomainObjectType.NonApplicable, mainObjectId: l = '' } = t,
                    o = (0, a.makeMetaParams)(1),
                    n = { ...t, skeletonId: i, mainObjectType: r, mainObjectId: l, _meta: o };
                e.trackEvent('Tab.Opened', n);
            }),
                (t.hc = function (e, t) {
                    let { skeletonId: i = '', mainObjectType: r = s.DomainObjectType.NonApplicable, mainObjectId: l = '' } = t,
                        o = (0, a.makeMetaParams)(1),
                        n = { ...t, skeletonId: i, mainObjectType: r, mainObjectId: l, _meta: o };
                    e.trackEvent('Tab.Loaded', n);
                }));
            let a = i(59203),
                s = i(87999);
        },
        86797: (e) => {
            e.exports = { root: 'CollectionPlaylistsEmpty_root__KGNv_' };
        },
        87504: (e) => {
            e.exports = { root: 'CollectionAlbumsEmpty_root__xtfuI', text: 'CollectionAlbumsEmpty_text__fRpx_' };
        },
        88102: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => q });
            var a = i(88800),
                s = i(65724),
                r = i(84961),
                l = i(53548),
                o = i(2058),
                n = i(88969),
                c = i(87999),
                d = i(64543),
                m = i(62414),
                _ = i(33979),
                u = i(70621),
                p = i(80643),
                v = i(17392),
                b = i(29993),
                C = i(79070),
                h = i(78275),
                x = i(29832),
                A = i(29504),
                j = i(5407),
                T = i(55693),
                N = i(47964),
                I = i(72288),
                S = i(49176),
                f = i(56862),
                L = i(16704),
                g = i(34945),
                y = i(59378),
                k = i(56475),
                R = i(16112),
                E = i(76903),
                P = i(52300),
                w = i(19934),
                O = i(98427),
                M = i(95210),
                D = i(40887),
                B = i(41153),
                V = i.n(B),
                U = i(54721),
                W = i(89718);
            let H = (0, r.PA)((e) => {
                    let { room: t, isRenamePending: i, onRenameClick: s, onPinClick: r, onExitClick: l, isExitPending: o } = e,
                        n = (0, u.D)();
                    (0, U.u)();
                    let d = (0, b.c)(async () => {
                            (n({ actionType: c.ActionType.Pin, userInteractionType: c.UserInteractionType.Tap }), await r());
                        }),
                        m = (0, b.c)(async () => {
                            (n({ actionType: c.ActionType.Remove, userInteractionType: c.UserInteractionType.Tap }), await l());
                        });
                    return (0, a.jsx)(W.J, { room: t, onRenameClick: s, isRenamePending: i, onPinClick: d, onExitClick: m, isExitPending: o });
                }),
                z = (0, r.PA)((e) => {
                    let { room: t, onOpenChange: i, onRenameClick: r, isRenamePending: l, onRoomSuccessExit: n, open: d, className: m, ..._ } = e,
                        {
                            settings: { isMobile: u },
                        } = (0, I.g)(),
                        { formatMessage: p } = (0, o.A)(),
                        b = (0, R.A)(t.wave),
                        { exitVibeRoom: C, isPending: h } = (0, D.J)({ room: t, onRoomSuccessExit: n });
                    return (
                        (0, M.N)(d),
                        (0, a.jsx)(w.W1, {
                            ..._,
                            isMobile: u,
                            offsetOptions: 10,
                            open: d,
                            onOpenChange: i,
                            ariaLabel: p({ id: 'interface-actions.context-menu' }),
                            containerDataTestId: v.OA.vibe.VIBE_ROOM_CONTEXT_MENU,
                            size: 's',
                            icon: (0, a.jsx)(P.I, { size: 'xxs', variant: 'more' }),
                            color: 'secondary',
                            variant: 'default',
                            className: m,
                            menuClassName: (0, s.$)(V().root, { [V().root_mobile]: u }),
                            children: (0, a.jsx)(E.a, {
                                pageId: c.AppScreen.MultivibeActionScreen,
                                pageIdForFrom: O.b.MULTIVIBE_ACTION_SCREEN,
                                pageStyle: c.PageStyles.Sheet,
                                pagePlacement: c.PagePlacements.Bottom,
                                children: (0, a.jsx)(H, { room: t, onRenameClick: r, isRenamePending: l, onPinClick: b, onExitClick: C, isExitPending: h }),
                            }),
                        })
                    );
                });
            var K = i(81877),
                Y = i(76524),
                F = i(63087),
                $ = i.n(F);
            let X = (e) => {
                let { align: t, controls: i, src: s, isDisabled: r = !1, isMobileLayout: l = !1 } = e;
                return (0, a.jsx)(Y.b, {
                    align: t,
                    isDisabled: r,
                    overlay: i,
                    surfaceClassName: $().surface,
                    overlayClassName: $().overlay,
                    children: (0, a.jsx)(K.B, {
                        size: 200,
                        fit: 'cover',
                        className: $().image,
                        src: s,
                        withSrcSet: !1,
                        alt: '',
                        withAvatarReplace: !0,
                        fallbackIconSize: l ? 'xxxs' : 'l',
                    }),
                });
            };
            var G = i(42789),
                Z = i.n(G);
            let q = (0, r.PA)((e) => {
                var t, i, r, E;
                let { room: P, contentLinesCount: w = 3, className: O, withMobileLayout: M = !1, onRoomSuccessExit: D } = e,
                    { screen: B } = (0, d.j)(),
                    V = null == B ? void 0 : B.pageIdForFrom,
                    U = (0, m.D)(),
                    {
                        settings: { isMobile: W },
                        multivibe: H,
                        user: K,
                        freeAccess: Y,
                    } = (0, I.g)(),
                    F = (0, j.P)(),
                    { sendPlaySearchFeedback: $ } = (0, T.z)(),
                    [G, q] = (0, l.useState)(!1),
                    Q = (0, R.A)(P.wave),
                    J = (0, _.g)(),
                    ee = (0, u.D)(),
                    et = (0, p.S)(),
                    { state: ei, setState: ea } = (0, h.e)(!1),
                    { state: es, setState: er } = (0, h.e)(!1),
                    { state: el, toggleTrue: eo, toggleFalse: en } = (0, h.e)(!1),
                    { formatMessage: ec } = (0, o.A)(),
                    { editVibeRoom: ed, isPending: em } = (0, k.h)(P),
                    e_ = M && W,
                    eu = (el || ei || es) && !W,
                    {
                        isPlaying: ep,
                        isPaused: ev,
                        togglePlay: eb,
                    } = (0, N.B)({ seeds: null != (E = null == (t = P.wave) ? void 0 : t.seeds) ? E : [], pageIdForFrom: V, blockIdForFrom: c.EntityTypes.Multiwave }),
                    eC = e_ && !P.isDisabled && (ep || ev),
                    eh = (0, b.c)(() => {
                        !(P.isDisabled || F()) &&
                            (Y.isVibeStartRestricted ||
                                (G || ep || (q(!0), null == $ || $()),
                                eb(),
                                ep || J(),
                                ee({ actionType: ep ? c.ActionType.Pause : c.ActionType.Play, userInteractionType: c.UserInteractionType.Tap })));
                    }),
                    ex = (0, b.c)(async () => {
                        (ee({ actionType: c.ActionType.Pin, userInteractionType: c.UserInteractionType.Tap }), await Q());
                    }),
                    eA = (0, b.c)(() => {
                        if (P.isDisabled) {
                            (H.setDisabledRoomId(P.id), H.disabledRoomInfoModal.open(), et({ to: c.AppScreen.MultivibeUnifiedScreen }));
                            return;
                        }
                        W && eh();
                    }),
                    ej = (0, b.c)((e) => {
                        (e && et({ to: c.AppScreen.MultivibeActionScreen, objectType: c.DomainObjectType.Link }), ea(e), er(e));
                    }),
                    eT = (0, b.c)((e) => {
                        e.target === e.currentTarget && (e.code === S.v.SPACE || e.code === S.v.ENTER) && (e.preventDefault(), eA());
                    }),
                    [eN, eI] = (0, l.useState)(!1),
                    eS = (0, l.useCallback)(
                        (e) => {
                            (eI(!1), ed(e), ee({ actionType: c.ActionType.Rename, userInteractionType: c.UserInteractionType.Tap }));
                        },
                        [ed, ee, eI],
                    ),
                    ef = (0, l.useCallback)(() => {
                        (eI(!0), et({ to: c.AppScreen.MultivibeRenameScreen }));
                    }, [et, eI]),
                    eL = (0, C.L)(() =>
                        (0, a.jsx)(
                            z,
                            {
                                room: P,
                                onOpenChange: ej,
                                open: ei,
                                isRenamePending: em,
                                onRenameClick: ef,
                                returnFocus: !eN,
                                className: (0, s.$)(Z().menuControl, Z().control, { [Z().menuControl_mobile]: e_ }),
                                onRoomSuccessExit: D,
                                'data-test-id': v.OA.vibe.VIBE_ROOM_CONTEXT_MENU_BUTTON,
                            },
                            P.getKey('VibeRoomContextMenu'),
                        ),
                    ),
                    eg = (0, C.L)(() => {
                        if (!P.isDisabled)
                            return (0, a.jsx)(
                                L.D,
                                {
                                    isPlaying: ep,
                                    onClick: eh,
                                    className: (0, s.$)(Z().playControl, Z().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                },
                                P.getKey('PlayButton'),
                            );
                    }),
                    ey = (0, C.L)(() => {
                        var e;
                        if (!P.isDisabled)
                            return (0, a.jsx)(
                                f.O,
                                {
                                    isPinned: null == (e = P.wave) ? void 0 : e.isPinned,
                                    onClick: ex,
                                    className: (0, s.$)(Z().pinControl, Z().control, { [Z().pinControl_mobile]: e_ }),
                                    withRipple: !1,
                                },
                                P.getKey('PinButton'),
                            );
                    }),
                    ek = P.isDisabled ? ec({ id: 'multivibe.room-status-disabled' }) : ec({ id: 'multivibe.room-status-enabled' }),
                    eR = ec({ id: 'entity-names.vibe-room-name' }, { name: P.name, status: ek }),
                    eE = P.owner.cover.uri,
                    eP = null == (i = P.members[0]) ? void 0 : i.cover.uri,
                    ew = (null == (r = P.owner) ? void 0 : r.uid) && P.owner.uid === K.puid,
                    eO = ew ? eE : eP,
                    eM = ew ? eP : eE,
                    eD = (0, C.L)(() =>
                        (0, a.jsxs)('div', {
                            className: (0, s.$)(Z().avatarsWrapper, {
                                [Z().avatarsWrapper_mobile]: e_,
                                [Z().avatarsWrapper_disabled]: P.isDisabled,
                                [Z().avatarsWrapper_visible]: eu,
                            }),
                            children: [
                                (0, a.jsx)(X, {
                                    align: 'back',
                                    isDisabled: P.isDisabled,
                                    isMobileLayout: e_,
                                    src: eO,
                                    controls: (0, a.jsx)(x.hg, { isVisible: eu, className: Z().cardControls, radius: 'round', pinControl: ey }),
                                }),
                                (0, a.jsx)(X, {
                                    align: 'front',
                                    isDisabled: P.isDisabled,
                                    isMobileLayout: e_,
                                    src: eM,
                                    controls: (0, a.jsx)(x.hg, { isVisible: eu, className: Z().cardControls, radius: 'round', playControl: eg, menuControl: eL }),
                                }),
                                eC && (0, a.jsx)(g.P, { stopAnimation: ev, className: Z().playingAnimation }),
                            ],
                        }),
                    ),
                    eB = (0, C.L)(() =>
                        P.isDisabled
                            ? (0, a.jsxs)('span', {
                                  className: Z().unavailableStatus,
                                  'data-test-id': v.OA.vibe.VIBE_ROOM_UNAVAILABLE_STATUS,
                                  children: [
                                      (0, a.jsx)('span', { className: Z().unavailableStatusDot }),
                                      (0, a.jsx)(A.HL, {
                                          variant: 'div',
                                          type: 'entity',
                                          size: 'xs',
                                          weight: 'medium',
                                          lineClamp: 1,
                                          children: (0, a.jsx)(n.A, { id: 'multivibe.room-unavailable' }),
                                      }),
                                  ],
                              })
                            : null,
                    ),
                    eV = (0, C.L)(() =>
                        eN
                            ? (0, a.jsx)('div', {
                                  className: Z().textFieldContainer,
                                  children: (0, a.jsx)(y.A, {
                                      text: P.name,
                                      className: Z().textField,
                                      onChangeFinish: eS,
                                      maxTextLength: 200,
                                      minTextLength: 1,
                                      placeholder: ec({ id: 'vibe-actions.enter-title' }),
                                      shouldFinishOnKeyPress: !0,
                                      'data-test-id': v.OA.vibe.VIBE_ROOM_RENAME_INPUT,
                                  }),
                              })
                            : (0, a.jsx)(A.HL, {
                                  variant: 'div',
                                  type: 'entity',
                                  size: 'm',
                                  weight: 'medium',
                                  lineClamp: P.isDisabled ? 1 : 2,
                                  className: (0, s.$)(Z().roomName, { [Z().roomName_disabled]: P.isDisabled, [Z().roomName_mobile]: e_ }),
                                  'data-test-id': v.OA.vibe.VIBE_ROOM_NAME,
                                  children: P.name,
                              }),
                    );
                return (0, a.jsxs)(x.MN, {
                    ref: U,
                    className: (0, s.$)(Z().root, { [Z().root_mobile]: e_ }, O),
                    contentLinesCount: e_ ? 2 : w,
                    textPosition: e_ ? 'left' : 'center',
                    wrapperClassName: (0, s.$)(Z().cardWrapper, { [Z().cardWrapper_mobile]: e_ }),
                    view: eD,
                    'aria-label': eR,
                    tabIndex: 0,
                    onClick: eA,
                    onKeyDown: eT,
                    onFocus: eo,
                    onMouseEnter: eo,
                    onMouseLeave: en,
                    onBlur: en,
                    'data-test-id': v.OA.vibe.VIBE_ROOM_CARD,
                    children: [(0, a.jsxs)('div', { className: (0, s.$)(Z().roomInfo, { [Z().roomInfo_mobile]: e_ }), 'aria-hidden': !0, children: [eV, eB] }), e_ && eL],
                });
            });
        },
        89021: (e) => {
            e.exports = { carousel: 'PlaylistFilters_carousel__pO6nw', carousel_noSmooth: 'PlaylistFilters_carousel_noSmooth__cqaBs' };
        },
        89643: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => T });
            var a = i(88800),
                s = i(65724),
                r = i(84961),
                l = i(53548),
                o = i(2058),
                n = i(88969),
                c = i(58390),
                d = i(17392),
                m = i(60385),
                _ = i(96817),
                u = i(52300),
                p = i(29504),
                v = i(29595),
                b = i(74965),
                C = i(72288),
                h = i(67174),
                x = i(66943),
                A = i(96825),
                j = i.n(A);
            let T = (0, r.PA)((e) => {
                let { className: t } = e,
                    { formatMessage: i } = (0, o.A)(),
                    { createPlaylist: r } = (0, C.g)(),
                    { notify: A } = (0, b.l)(),
                    T = (0, c.useRouter)(),
                    N = (0, l.useRef)(!1),
                    I = (0, l.useCallback)(async () => {
                        if (N.current) return;
                        N.current = !0;
                        let e = await r.create({ title: i({ id: 'entity-names.new-playlist' }), visibility: m.L.PUBLIC });
                        if (e) {
                            let { href: t } = (0, h.u)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                            T.push(t);
                        } else (A((0, a.jsx)(x.h, { error: i({ id: 'playlist-errors.failed-to-create-playlist' }) }), { containerId: v.u.ERROR }), (N.current = !1));
                    }, [r, i, T, A]);
                return (
                    (0, l.useEffect)(
                        () => () => {
                            r.reset();
                        },
                        [r],
                    ),
                    (0, a.jsxs)('div', {
                        className: (0, s.$)(j().root, t),
                        'data-test-id': d.OA.playlist.CREATE_PLAYLIST_CARD,
                        children: [
                            (0, a.jsx)(_.$, {
                                className: j().button,
                                icon: (0, a.jsx)(u.I, { className: j().icon, variant: 'add', size: 'l' }),
                                radius: 's',
                                'aria-label': i({ id: 'playlist-actions.create-playlist' }),
                                onClick: I,
                                flexIcon: !0,
                                isBlock: !0,
                                'data-test-id': d.OA.playlist.CREATE_PLAYLIST_BUTTON,
                            }),
                            (0, a.jsx)(p.HL, {
                                weight: 'medium',
                                size: 's',
                                variant: 'div',
                                className: j().text,
                                'data-test-id': d.OA.playlist.CREATE_PLAYLIST_TITLE,
                                children: (0, a.jsx)(n.A, { id: 'collection.new-playlist' }),
                            }),
                        ],
                    })
                );
            });
        },
        90285: (e) => {
            e.exports = {
                root: 'DonationCard_root__81nc5',
                donation: 'DonationCard_donation__SlArJ',
                cover: 'DonationCard_cover__Mqb3g',
                image: 'DonationCard_image__xABTn',
                container: 'DonationCard_container__1xkqs',
                text: 'DonationCard_text__mdeXx',
                artist: 'DonationCard_artist__xq4Jw',
                goal: 'DonationCard_goal__6BdcG',
                label: 'DonationCard_label__T_hDw',
                shimmer: 'DonationCard_shimmer__cMO7r',
                shimmerContainer: 'DonationCard_shimmerContainer__9ZH20',
                shimmerText: 'DonationCard_shimmerText__TrtjR',
                shimmerCover: 'DonationCard_shimmerCover__U6Rwp',
                shimmerArtist: 'DonationCard_shimmerArtist__jRQCV',
                shimmerGoal: 'DonationCard_shimmerGoal__UGSTd',
                shimmerButton: 'DonationCard_shimmerButton__LYfOm',
            };
        },
        90865: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                view: 'ClipCard_view__MYSwA',
                playButton: 'ClipCard_playButton__0Wyss',
                duration: 'ClipCard_duration__89ZCx',
                image: 'ClipCard_image__hSUud',
                media: 'ClipCard_media__dU4RM',
                unavailableCover: 'ClipCard_unavailableCover__Zd9jl',
                cover: 'ClipCard_cover__ztEok',
                cover_withoutOffset: 'ClipCard_cover_withoutOffset__aasE2',
                root: 'ClipCard_root__kzWjg',
                srTitleLink: 'ClipCard_srTitleLink__0tQdz',
                title: 'ClipCard_title__I1s7Q',
                artistLink: 'ClipCard_artistLink__t6oPP',
                titleLink: 'ClipCard_titleLink__g3HDM',
                version: 'ClipCard_version__w9PM7',
            };
        },
        91289: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => Z });
            var a = i(88800),
                s = i(65724),
                r = i(55482),
                l = i(84961),
                o = i(53548),
                n = i(2058),
                c = i(35412),
                d = i(62414),
                m = i(17392),
                _ = i(18593),
                u = i(29993),
                p = i(79070),
                v = i(52073),
                b = i(90688),
                C = i(7555),
                h = i(29504),
                x = i(13946),
                A = i(44599),
                j = i(44318),
                T = i(64284),
                N = i(98427),
                I = i(84384),
                S = i(54965),
                f = i(97361),
                L = i(55693),
                g = i(99313),
                y = i(20585),
                k = i(39079),
                R = i(72288),
                E = i(62270),
                P = i.n(E),
                w = i(76816),
                O = i(8990),
                M = i(16704),
                D = i(8299),
                B = i(90865),
                V = i.n(B),
                U = i(52300),
                W = i(38769),
                H = i(49738),
                z = i(64546),
                K = i(777),
                Y = i(57899),
                F = i.n(Y);
            let $ = (0, l.PA)((e) => {
                let { className: t, clip: i, likeIconSize: r = 'xxs' } = e,
                    { user: l } = (0, R.g)(),
                    { sendLikeSearchFeedback: n } = (0, L.z)(),
                    c = (0, W.K)(i),
                    [d, _] = (0, o.useState)(!1),
                    [p, v] = (0, o.useState)(!1),
                    b = (0, u.c)(() => {
                        (d || i.isLiked || (_(!0), null == n || n()), c());
                    });
                return (0, a.jsx)('div', {
                    className: (0, s.$)(F().root, F().controls, t, { [F().controls_disabled]: !i.isAvailable }),
                    children:
                        i.isAvailable &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(z.WithOffline, {
                                    fallback: (0, a.jsx)(H.c, {
                                        size: 'xs',
                                        iconSize: r,
                                        className: (0, s.$)(F().item, F().likeIcon),
                                        isLiked: i.isLiked,
                                        onClick: b,
                                        disabled: !l.isAuthorized,
                                    }),
                                }),
                                (0, a.jsx)(K.z, {
                                    placement: 'top-start',
                                    icon: (0, a.jsx)(U.I, { variant: 'more', size: 'xs' }),
                                    size: 'xs',
                                    clip: i,
                                    className: (0, s.$)(F().contextMenu, { [F().contextMenu_visible]: p }),
                                    onOpenChange: v,
                                    open: p,
                                    'data-test-id': m.Kq.clip.CLIP_CONTEXT_MENU_BUTTON,
                                }),
                            ],
                        }),
                });
            });
            var X = i(61849),
                G = i.n(X);
            let Z = (0, l.PA)((e) => {
                var t;
                let { clip: i, className: l, coverClassName: E, playButtonIconSize: B = 'xs', likeIconSize: U, viewUuid: W, shouldShowTimecode: H = !1 } = e,
                    { fullscreenVideoPlayer: z } = (0, R.g)(),
                    { formatMessage: K } = (0, n.A)(),
                    Y = (0, f.P)(null != (t = i.duration) ? t : 0),
                    F = (0, A._)(W),
                    X = (0, d.D)(),
                    { from: Z } = (0, I.f)({ pageId: N.b.VIDEO_PLAYER, contextId: z.state.contextId, contextType: _.K.Various, blockId: T.U.CLIPS }),
                    [q, Q] = (0, o.useState)(!1),
                    { sendNavigateSearchFeedback: J, sendPlaySearchFeedback: ee } = (0, L.z)(),
                    et = (0, j.C)(),
                    ei = (0, o.useRef)(null),
                    ea = (0, u.c)(() => {
                        ei.current && ((ei.current.currentTime = 0), ei.current.play());
                    }),
                    es = (0, o.useMemo)(() => (0, r.A)(ea, 500), [ea]),
                    er = (0, u.c)(() => {
                        var e;
                        null == (e = ei.current) || e.pause();
                    }),
                    el = (0, o.useMemo)(() => z.ids.indexOf(i.clipId), [z, i.clipId]),
                    { isPlaying: eo } = (0, k.D)({
                        playContextParams: {
                            contextData: { type: _.K.Various, meta: { id: g.H.VARIOUS_CLIP_CONTEXT }, from: Z },
                            queueParams: { index: el },
                            entitiesData: z.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(i.clipId),
                        sonataState: z.state,
                        playbackId: y.V.CLIP,
                    }),
                    en = (0, u.c)(() => {
                        (et([i.clipId]), q || eo || (Q(!0), null == ee || ee()), null == J || J(), F());
                    }),
                    ec = (0, D.X)({ clip: i, callback: en }),
                    ed = (0, u.c)((e) => {
                        ((0, v.P)(e, P().ripple), ec(e));
                    }),
                    em = (0, p.L)(() =>
                        (0, a.jsx)(h.HL, {
                            className: (0, s.$)(P().text, P().titleText),
                            'aria-hidden': !0,
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            children: i.title,
                        }),
                    ),
                    e_ = (0, o.useCallback)(
                        (e, t) => {
                            var s;
                            return (null == (s = i.artists) ? void 0 : s.length)
                                ? (0, a.jsx)(x.i, { linkClassName: e, captionClassName: t, artists: i.artists, lineClamp: 1 })
                                : null;
                        },
                        [i.artists],
                    ),
                    eu = K({ id: 'entity-names.clip-name' }, { clipName: i.title }),
                    ep = (0, p.L)(() =>
                        i.isAvailable
                            ? (0, a.jsxs)(C.t, {
                                  className: (0, s.$)(G().cover, V().cover, V().cover_withoutOffset, E),
                                  radius: 'xs',
                                  onMouseEnter: es,
                                  onMouseLeave: er,
                                  children: [
                                      i.previewUrl &&
                                          (0, a.jsx)('video', {
                                              className: V().media,
                                              ref: ei,
                                              poster: i.thumbnail && (0, c.oZ)(i.thumbnail, 80),
                                              playsInline: !0,
                                              muted: !0,
                                              loop: !0,
                                              'aria-hidden': !0,
                                              children: (0, a.jsx)('source', { src: i.previewUrl, type: 'video/mp4' }),
                                          }),
                                      i.thumbnail &&
                                          (0, a.jsx)(b._V, {
                                              className: V().image,
                                              src: i.thumbnail,
                                              fit: 'cover',
                                              withAvatarReplace: !0,
                                              size: 80,
                                              createUrlReplacer: c.oZ,
                                              alt: eu,
                                          }),
                                      void 0 !== i.duration &&
                                          H &&
                                          (0, a.jsx)(h.HL, {
                                              variant: 'span',
                                              className: (0, s.$)(V().duration, G().duration),
                                              type: 'entity',
                                              size: 'xs',
                                              weight: 'medium',
                                              role: 'text',
                                              'aria-label': Y,
                                              children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: (0, S.E)(i.duration, i.duration) }),
                                          }),
                                      (0, a.jsx)(M.D, { variant: 'filled', className: V().playButton, onClick: ec, iconSize: B }),
                                  ],
                              })
                            : (0, a.jsxs)(C.t, {
                                  className: (0, s.$)(G().cover, G().unavailable, E),
                                  radius: 'xs',
                                  children: [
                                      (0, a.jsx)(b.Ab, {
                                          className: V().image,
                                          iconVariant: 'unavailable',
                                          iconSize: 'xs',
                                          'data-test-id': m.S7.ENTITY_COVER_FALLBACK_IMAGE,
                                      }),
                                      (0, a.jsx)(M.D, { variant: 'filled', className: V().playButton, iconSize: B, disabled: !0 }),
                                  ],
                              }),
                    );
                return (0, a.jsxs)(O.C, {
                    ref: X,
                    className: (0, s.$)(P().root, { [P().root_disabled]: !i.isAvailable }, G().root, l),
                    onClick: ed,
                    'data-test-id': m.Kq.clip.HORIZONTAL_CLIP_CARD,
                    children: [
                        ep,
                        (0, a.jsx)(w.r, {
                            isDisabled: !i.isAvailable,
                            title: em,
                            artistsComponent: e_,
                            getDescriptionTexts: i.getDescriptionTexts,
                            explicitMarkVariant: i.explicitDisclaimer,
                            isLiked: i.isLiked,
                        }),
                        (0, a.jsx)($, { className: P().controlsBar, clip: i, likeIconSize: U }),
                    ],
                });
            });
        },
        93671: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => b });
            var a = i(88800),
                s = i(65724),
                r = i(84961),
                l = i(53548),
                o = i(54020),
                n = i(87999),
                c = i(7833),
                d = i(53323),
                m = i(69323),
                _ = i(77605),
                u = i(55737),
                p = i.n(u);
            let v = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            clipCardTitleClassName: i,
                            clipCardArtistLinkClassName: r,
                            carouselItemClassName: u,
                            isShimmerVisible: v,
                            isShimmerActive: b,
                            containerClassName: C,
                            artistIdWithoutLink: h,
                            withVideo: x = !0,
                            clips: A,
                            shouldOpenModalOnCardClick: j = !0,
                            itemCounter: T,
                        } = e,
                        N = (0, l.useId)(),
                        I = (0, l.useRef)(String((0, o.A)())),
                        S = (0, l.useMemo)(() => {
                            if (v) return Array.from({ length: 5 }, (e, t) => (0, a.jsx)(_.k, { isActive: b }, t));
                            return null == A
                                ? void 0
                                : A.map((e, t) =>
                                      (0, a.jsx)(
                                          c.B,
                                          {
                                              objectType: n.DomainObjectType.Video,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectId: String(e.clipId),
                                              children: (0, a.jsx)(m.F, {
                                                  titleClassName: i,
                                                  artistLinkClassName: r,
                                                  clip: e,
                                                  withVideo: x,
                                                  artistIdWithoutLink: h,
                                                  viewUuid: I.current,
                                                  shouldOpenModalOnCardClick: j,
                                              }),
                                          },
                                          e.clipId,
                                      ),
                                  );
                        }, [i, r, v, b, h, x, A, j]);
                    return (0, a.jsx)(d.F, {
                        className: (0, s.$)(p().itemCounter, { [p()['itemCounter_'.concat(T)]]: T }, C),
                        ref: t,
                        itemClassName: (0, s.$)(p().item, p().important, u),
                        'aria-labelledby': N,
                        children: S,
                    });
                }),
                b = (0, l.forwardRef)((e, t) => (0, a.jsx)(v, { forwardRef: t, ...e }));
        },
        94607: (e) => {
            e.exports = {
                root: 'SearchHistory_root__0z_bV',
                fallback: 'SearchHistory_fallback____oTN',
                button: 'SearchHistory_button__LBJeT',
                content: 'SearchHistory_content__wSN8E',
            };
        },
        95631: (e) => {
            e.exports = {
                root: 'LikesAndHistoryItem_root__oI1gk',
                link: 'LikesAndHistoryItem_link__snTl_',
                start: 'LikesAndHistoryItem_start__wdtiV',
                textContainer: 'LikesAndHistoryItem_textContainer__yGdOu',
                titleIcon: 'LikesAndHistoryItem_titleIcon__2D_yS',
                title: 'LikesAndHistoryItem_title__hdi2H',
                subtitle: 'LikesAndHistoryItem_subtitle__ghuKi',
                covers: 'LikesAndHistoryItem_covers__9k_yw',
                coverContainer: 'LikesAndHistoryItem_coverContainer__fwXXJ',
                cover: 'LikesAndHistoryItem_cover__QlRhz',
            };
        },
        95960: (e) => {
            e.exports = {
                root: 'ConcertMeta_root__CkKU3',
                city: 'ConcertMeta_city__ngDq2',
                info: 'ConcertMeta_info__czKlU',
                time: 'ConcertMeta_time__gX09u',
                cashback: 'ConcertMeta_cashback__fkZfk',
                meta: 'ConcertMeta_meta__GteL_',
                title: 'ConcertMeta_title__cqonb',
                location: 'ConcertMeta_location__HuUgv',
                rating: 'ConcertMeta_rating__P4Ana',
                separator: 'ConcertMeta_separator__BcJsF',
            };
        },
        96825: (e) => {
            e.exports = {
                root: 'CreatePlaylistCard_root__pMDua',
                button: 'CreatePlaylistCard_button__ZaAtb',
                icon: 'CreatePlaylistCard_icon__09K9N',
                text: 'CreatePlaylistCard_text__dd9Q6',
            };
        },
        97361: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => r });
            var a = i(2058),
                s = i(29831);
            let r = (e) => {
                let { formatMessage: t } = (0, a.A)();
                return (0, s.j)(e, t);
            };
        },
        97639: (e) => {
            e.exports = {
                root_withControls: 'CollectionAlbumsPresaves_root_withControls__qE_u_',
                controls: 'CollectionAlbumsPresaves_controls__8twKX',
                header: 'CollectionAlbumsPresaves_header__1flkp',
                important: 'CollectionAlbumsPresaves_important__EkdBU',
                tab: 'CollectionAlbumsPresaves_tab__V6yvN',
                tabShimmer: 'CollectionAlbumsPresaves_tabShimmer__T6w2W',
                tabCarousel: 'CollectionAlbumsPresaves_tabCarousel__hobTn',
                tabPanel: 'CollectionAlbumsPresaves_tabPanel__ZHz6v',
                carouselEmpty: 'CollectionAlbumsPresaves_carouselEmpty__8szhR',
                item: 'CollectionAlbumsPresaves_item__to1P9',
            };
        },
        97754: (e) => {
            e.exports = {
                plate: 'MixesGridMixCard_plate__ONH3P',
                root: 'MixesGridMixCard_root__HHE7z',
                subcover: 'MixesGridMixCard_subcover__z5sBj',
                link: 'MixesGridMixCard_link__D3_S6',
                header: 'MixesGridMixCard_header__t24VH',
                title: 'MixesGridMixCard_title__fKTCy',
                cover: 'MixesGridMixCard_cover__Ra3ic',
            };
        },
        97804: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { J: () => a }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(a || (a = {})));
        },
        97888: (e) => {
            e.exports = {
                content: 'ContinueListenBaseItem_content__Rdrbh',
                root: 'ContinueListenBaseItem_root__FH7Jk',
                root_bookshelf: 'ContinueListenBaseItem_root_bookshelf__cKQqb',
                root_newEpisodes: 'ContinueListenBaseItem_root_newEpisodes__OTZgU',
                root_withLastPlayed: 'ContinueListenBaseItem_root_withLastPlayed__1Z2P5',
                title: 'ContinueListenBaseItem_title__vvDta',
                root_withCovers: 'ContinueListenBaseItem_root_withCovers__Y4w7V',
                link: 'ContinueListenBaseItem_link__3xuh7',
                textContainer: 'ContinueListenBaseItem_textContainer__1nvoM',
                titleIcon: 'ContinueListenBaseItem_titleIcon__4lGcT',
                subtitle: 'ContinueListenBaseItem_subtitle__jFLLT',
                covers: 'ContinueListenBaseItem_covers__bCLfi',
                coverContainer: 'ContinueListenBaseItem_coverContainer__qdnAa',
                cover: 'ContinueListenBaseItem_cover__gSp5J',
            };
        },
        99313: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            var a = (function (e) {
                return ((e.VARIOUS_CLIP_CONTEXT = 'various-clip-context'), e);
            })({});
        },
        99525: (e) => {
            e.exports = {
                artistLink: 'ArtistPick_artistLink__WYRFP',
                artistsSpoiler: 'ArtistPick_artistsSpoiler__HBKka',
                subTitle: 'ArtistPick_subTitle__5SJFj',
                text: 'ArtistPick_text__sIhNG',
                smallCoverContainer: 'ArtistPick_smallCoverContainer__iBgJu',
                cover: 'ArtistPick_cover__9utVr',
                smallCover: 'ArtistPick_smallCover__6NSnL',
                shimmerCover: 'ArtistPick_shimmerCover__HIauy',
            };
        },
    },
]);
