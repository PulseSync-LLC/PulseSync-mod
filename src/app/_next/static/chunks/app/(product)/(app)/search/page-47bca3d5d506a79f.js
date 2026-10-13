(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2839],
    {
        3260: (e) => {
            e.exports = {
                carouselBlock: 'MixesCarousel_carouselBlock__ZpMU2',
                carouselHeader: 'MixesCarousel_carouselHeader__6mMHX',
                mixItem: 'MixesCarousel_mixItem__YNSsB',
            };
        },
        4250: (e) => {
            e.exports = { root: 'SearchBestResultsBookChapterBlock_root__2JjcF', cover: 'SearchBestResultsBookChapterBlock_cover__I2CYO' };
        },
        10126: (e) => {
            e.exports = { root: 'VirtualGrid_root__nSEzJ', column: 'VirtualGrid_column__P8hJp', row: 'VirtualGrid_row__PL5V_' };
        },
        10971: (e) => {
            e.exports = {
                button: 'SearchHistoryBlockMobile_button__Wh_Q6',
                header: 'SearchHistoryBlockMobile_header__Lx4On',
                mixedEntitiesBlock: 'SearchHistoryBlockMobile_mixedEntitiesBlock__cJ3o_',
                buttonContainer: 'SearchHistoryBlockMobile_buttonContainer__IppED',
            };
        },
        12930: (e) => {
            e.exports = { root: 'SearchBestResultsNonMusicBlock_root__YagzT' };
        },
        13520: (e) => {
            e.exports = { mixesTitle: 'MixesGrid_mixesTitle__QawnL', mixesGrid: 'MixesGrid_mixesGrid__uZQtt' };
        },
        15267: (e) => {
            e.exports = { root: 'SearchCorrectedText_root__ZM2f2', link: 'SearchCorrectedText_link__eORMG', text: 'SearchCorrectedText_text__HKgvL' };
        },
        16978: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => h });
            var s = a(25839),
                r = a(84059),
                i = a(8487),
                o = a(61493),
                n = a(71035),
                l = a(4071),
                c = a(4254),
                d = a(57024),
                u = a(36484),
                m = a(62562);
            let h = (e) => {
                let { size: t = 'm', variant: a = 'default', color: h = 'primary', withRipple: _ = !0, buttonText: p, isBlock: x, key: b, className: S } = e,
                    j = (0, r.useRouter)(),
                    v = (0, m.N)().get(u.QG),
                    C = (0, n.c)(() => {
                        v.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), j.push(v.authorizationUrl));
                    });
                return (0, s.jsx)(
                    l.$,
                    {
                        onClick: C,
                        className: S,
                        isBlock: x,
                        color: h,
                        variant: a,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': o.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(i.A, { id: 'authorization.enter-button' }) }),
                    },
                    b,
                );
            };
        },
        18197: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => u });
            var s = a(25839),
                r = a(74631),
                i = a(39004),
                o = a(61493),
                n = a(4254),
                l = a(44851),
                c = a(35514),
                d = a(16978);
            let u = (e) => {
                let { textVariant: t, vibeTextVariant: a, ...u } = e,
                    m = (0, r.useId)(),
                    { formatMessage: h } = (0, i.A)(),
                    _ = (0, r.useMemo)(() => {
                        switch (a) {
                            case l.I.ALBUM:
                                return h({ id: 'onboarding.authorize-to-listen-vibe-by-album' }, { br: '\n', nbsp: ' ' });
                            case l.I.ARTIST:
                                return h({ id: 'onboarding.authorize-to-listen-vibe-by-artist' }, { br: '\n', nbsp: ' ' });
                            case l.I.PLAYLIST:
                                return h({ id: 'onboarding.authorize-to-listen-vibe-by-playlist' }, { br: '\n', nbsp: ' ' });
                            case l.I.TRACK:
                                return h({ id: 'onboarding.authorize-to-listen-vibe-by-track' }, { br: '\n', nbsp: ' ' });
                            case l.I.GENRE:
                            case l.I.MICRO_GENRE:
                                return h({ id: 'onboarding.authorize-to-listen-vibe-by-genre' }, { br: '\n', nbsp: ' ' });
                            case l.I.MOOD:
                                return h({ id: 'onboarding.authorize-to-listen-vibe-by-mood' }, { br: '\n', nbsp: ' ' });
                            case l.I.ACTIVITY:
                                return h({ id: 'onboarding.authorize-to-listen-vibe-by-activity' }, { br: '\n', nbsp: ' ' });
                            default:
                                return h({ id: 'onboarding.authorize-to-listen-vibe' }, { br: '\n', nbsp: ' ' });
                        }
                    }, [a, h]),
                    p = (0, r.useMemo)(() => {
                        switch (t) {
                            case 'fullTracks':
                                return h({ id: 'onboarding.authorize-to-listen-full' }, { br: '\n', nbsp: ' ' });
                            case 'changeQuality':
                                return h({ id: 'onboarding.authorize-to-change-quality' }, { br: '\n', nbsp: ' ' });
                            case 'addToCollection':
                                return h({ id: 'onboarding.authorize-to-add-to-collection' }, { br: '\n', nbsp: ' ' });
                            case 'openQueue':
                                return h({ id: 'onboarding.authorize-to-open-queue' }, { br: '\n', nbsp: ' ' });
                            case 'addToQueue':
                                return h({ id: 'onboarding.authorize-to-add-track-to-queue' }, { br: '\n', nbsp: ' ' });
                            case 'like':
                                return h({ id: 'onboarding.authorize-to-like' }, { br: '\n', nbsp: ' ' });
                            case 'dislike':
                                return h({ id: 'onboarding.authorize-to-dislike' }, { br: '\n', nbsp: ' ' });
                            case 'pin':
                                return h({ id: 'onboarding.authorize-to-pin' }, { br: '\n', nbsp: ' ' });
                            case 'sync-lyrics':
                                return h({ id: 'onboarding.authorize-to-view-sync-lyrics' }, { br: '\n', nbsp: ' ' });
                            case 'vibe':
                                return _;
                            default:
                                return '';
                        }
                    }, [h, t, _]);
                return (0, s.jsx)(c.z, {
                    contentElement: (0, s.jsx)(n.HL, { variant: 'div', size: 'l', weight: 'bold', children: p }),
                    buttons: [(0, s.jsx)(d.H, { size: 'xxs' }, m)],
                    renderChildrenText: p,
                    contentDataTestId: o.S7.LOGIN_POPOVER,
                    ...u,
                });
            };
        },
        21675: (e) => {
            e.exports = {
                root: 'SearchEntities_root__OHn_e',
                container: 'SearchEntities_container__mT8FY',
                queryToVibe: 'SearchEntities_queryToVibe__F4lY_',
                correctedTextBlock: 'SearchEntities_correctedTextBlock__B4b8e',
                footer: 'SearchEntities_footer__AUX9I',
                block: 'SearchEntities_block__yLWMc',
                video: 'SearchEntities_video__ndT3a',
                concertShimmer: 'SearchEntities_concertShimmer__QR0OC',
                entityCardShimmer: 'SearchEntities_entityCardShimmer__MSRgj',
            };
        },
        22965: (e, t, a) => {
            'use strict';
            var s;
            (a.d(t, { r: () => s }),
                (function (e) {
                    ((e.TRACK = 'best_result_track'),
                        (e.ARTIST = 'best_result_artist'),
                        (e.CONCERT = 'best_result_concert'),
                        (e.RECENT_RELEASE = 'best_result_recent_release'),
                        (e.ALBUM = 'best_result_album'),
                        (e.WAVE = 'best_result_wave'),
                        (e.ARTISTS_RELATED = 'best_result_artists_related'),
                        (e.OVERVIEW = 'best_result_overview'),
                        (e.PODCAST = 'best_result_podcast'),
                        (e.PODCAST_EPISODE = 'best_result_podcast_episode'),
                        (e.NON_MUSIC = 'best_result_non_music'),
                        (e.CLIP = 'best_result_clip'),
                        (e.UPCOMING = 'best_result_upcoming'),
                        (e.PLAYLIST = 'best_result_playlist'),
                        (e.BOOK_CHAPTER = 'best_result_book_chapter'));
                })(s || (s = {})));
        },
        25034: (e) => {
            e.exports = { root: 'SearchBestResultsConcertBlock_root__JDy_y' };
        },
        27679: (e) => {
            e.exports = { root: 'SearchBestResults_root__12Tlp', root_withSingleResult: 'SearchBestResults_root_withSingleResult__qAMCB' };
        },
        32190: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => c });
            var s = a(25839),
                r = a(82298),
                i = a(88204),
                o = a(74631),
                n = a(32942),
                l = a.n(n);
            let c = (0, i.PA)((e) => {
                let { indices: t, virtualItem: a, renderItemByIndex: i, columnClassName: n, className: c, resizeObserver: d, scrollMargin: u } = e,
                    m = (0, o.useRef)(null),
                    h = t[a.index],
                    _ = { '--virtual-grid-row-vertical-offset': ''.concat(a.start - u, 'px') };
                return (
                    (0, o.useEffect)(() => {
                        let e = m.current;
                        if (e)
                            return (
                                null == d || d.observe(e),
                                () => {
                                    null == d || d.unobserve(e);
                                }
                            );
                    }, [d]),
                    (0, s.jsx)('div', {
                        'data-index': a.index,
                        ref: m,
                        style: _,
                        className: (0, r.$)(l().root, c),
                        children: null == h ? void 0 : h.map((e) => (0, s.jsx)('div', { className: n, children: i(e) }, ''.concat(a.key, '_').concat(e))),
                    })
                );
            });
        },
        32942: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        36031: (e) => {
            e.exports = { root: 'EntitiesListShimmer_root__Mq_tK' };
        },
        36054: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => s });
            let s = 36;
        },
        36603: (e) => {
            e.exports = { root: 'SearchQueryToVibeResults_root__fsXQh' };
        },
        37094: (e) => {
            e.exports = { root: 'VirtualListItem_root__j_Qqv' };
        },
        38242: (e) => {
            e.exports = { cover: 'SearchBestResultsClipBlock_cover___5Wwj' };
        },
        40489: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => c });
            var s = a(26508),
                r = a(49656),
                i = a(28631),
                o = a(74631);
            let n = (e) => {
                let { minColumnWidth: t, maxColumnWidth: a, containerWidth: s, totalCount: r, columnGap: i, minColumnCount: o, maxColumnCount: n } = e,
                    l = Math.max(1, Math.floor((s + i) / (t + i))),
                    c = Math.max(o, Math.floor((s + i) / ((a + t) * 0.5 + i)));
                for (let e = o; e <= l; e++) {
                    let r = (s - (e - 1) * i) / e;
                    if (r >= t && r <= a) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(r / (c = n ? Math.min(c, n) : c)), columnCount: c };
            };
            var l = a(52312);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: a,
                        rowGap: c,
                        columnGap: d,
                        minColumnWidth: u,
                        maxColumnWidth: m,
                        minColumnCount: h,
                        maxColumnCount: _,
                        containerRef: p,
                    } = e,
                    { rowCount: x, columnCount: b } = ((e) => {
                        let { containerRef: t, minColumnCount: a, maxColumnWidth: s, minColumnWidth: r, totalCount: l, columnGap: c, maxColumnCount: d } = e,
                            [u, m] = (0, o.useState)({ rowCount: 0, columnCount: 0 }),
                            h = (0, o.useRef)(null),
                            _ = (0, o.useMemo)(
                                () =>
                                    (0, i.A)(
                                        (e) => {
                                            m(
                                                n({
                                                    minColumnWidth: r,
                                                    maxColumnWidth: s,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: l,
                                                    columnGap: c,
                                                    minColumnCount: a,
                                                    maxColumnCount: d,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, d, s, a, r, l],
                            );
                        return (
                            (0, o.useLayoutEffect)(
                                () => (
                                    h.current && h.current.disconnect(),
                                    (h.current = new ResizeObserver((e) => {
                                        e.forEach(_);
                                    })),
                                    t &&
                                        (m(
                                            n({
                                                minColumnWidth: r,
                                                maxColumnWidth: s,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: l,
                                                columnGap: c,
                                                minColumnCount: a,
                                                maxColumnCount: d,
                                            }),
                                        ),
                                        h.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = h.current) || e.disconnect();
                                    }
                                ),
                                [c, t, _, d, s, a, r, l],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: h, maxColumnWidth: m, minColumnWidth: u, maxColumnCount: _, containerRef: p }),
                    { virtualizer: S, resizeObserver: j } = (0, l.r)({ count: x, getEstimateSize: a, gap: c, containerRef: p }),
                    v = (0, s.A)(
                        Array.from({ length: t }, (e, t) => t),
                        b,
                    ),
                    C = (0, r.L)(() => {
                        var e, t;
                        if (!S.range) return null;
                        let a = null == (e = v[S.range.startIndex]) ? void 0 : e.at(0),
                            s = null == (t = v[S.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== a && void 0 !== s ? { startIndex: a, endIndex: s } : null;
                    });
                return { virtualizer: S, rowResizeObserver: j, indices: v, columnCount: b, visibleRange: C };
            };
        },
        41487: (e) => {
            e.exports = { root: 'SearchConcert_root__1DJPQ' };
        },
        42670: (e) => {
            e.exports = {
                root: 'SearchBestResultsVibeBlock_root__KmJ3e',
                important: 'SearchBestResultsVibeBlock_important__Zez1s',
                coverClassName: 'SearchBestResultsVibeBlock_coverClassName__jv0_I',
            };
        },
        44860: (e) => {
            e.exports = {
                root: 'SearchBestResultsPodcastEpisodeBlock_root__YHMZ5',
                cover: 'SearchBestResultsPodcastEpisodeBlock_cover__QuzER',
                podcastMeta: 'SearchBestResultsPodcastEpisodeBlock_podcastMeta__u2dSw',
                important: 'SearchBestResultsPodcastEpisodeBlock_important__qJ_Ej',
                titleContainer: 'SearchBestResultsPodcastEpisodeBlock_titleContainer__MNogD',
                text: 'SearchBestResultsPodcastEpisodeBlock_text__uJpwJ',
                progress: 'SearchBestResultsPodcastEpisodeBlock_progress__ftBpc',
            };
        },
        51586: (e) => {
            e.exports = {
                root: 'SearchBestResultsUpcomingBlock_root__baVsK',
                important: 'SearchBestResultsUpcomingBlock_important__v_XW8',
                cover: 'SearchBestResultsUpcomingBlock_cover__c45Xf',
                coverImage: 'SearchBestResultsUpcomingBlock_coverImage___mLf5',
                lockIcon: 'SearchBestResultsUpcomingBlock_lockIcon__yaBf_',
                likeButton: 'SearchBestResultsUpcomingBlock_likeButton__Srh_v',
            };
        },
        52669: (e, t, a) => {
            'use strict';
            var s;
            (a.d(t, { $: () => s }),
                (function (e) {
                    ((e.TOP = 'top'),
                        (e.TRACK = 'track'),
                        (e.CLIP = 'clip'),
                        (e.ALBUM = 'album'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.KIDS_MUSIC = 'kids-music'),
                        (e.KIDS_PLAYLIST = 'kids-playlist'),
                        (e.SPOKEN_PLAYLIST = 'spoken-playlist'),
                        (e.PODCAST = 'podcast'),
                        (e.BOOK = 'book'),
                        (e.KIDS_PODCAST = 'kids-podcast'),
                        (e.KIDS_BOOK = 'kids-book'),
                        (e.WAVES = 'waves'),
                        (e.CONCERT = 'concert'));
                })(s || (s = {})));
        },
        53671: (e) => {
            e.exports = {
                root: 'SearchEmpty_root__Yz53B',
                container: 'SearchEmpty_container__6WP_o',
                content: 'SearchEmpty_content__OdVMa',
                correctedTextBlock: 'SearchEmpty_correctedTextBlock__wR4Hh',
                icon: 'SearchEmpty_icon__NYKMM',
                title: 'SearchEmpty_title__C77x5',
                subtitle: 'SearchEmpty_subtitle__2TlGa',
                footer: 'SearchEmpty_footer__WP03G',
            };
        },
        56778: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => s });
            let s = (e) => (e ? e.replace('-', '_') : null);
        },
        57024: (e, t, a) => {
            'use strict';
            a.d(t, { C8: () => i, UC: () => o, dM: () => n, uV: () => l });
            var s = a(93690),
                r = a(58848);
            let i = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                o = (e) => (e.uid ? 'authorized' : 'no-uid'),
                n = (e) => {
                    if (!(e instanceof s.m5) || !(0, r.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, r.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                l = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        58848: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        58954: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => p });
            var s = a(25839),
                r = a(36619),
                i = a(68103),
                o = a(91879),
                n = a(28045),
                l = a(51011),
                c = a(18608),
                d = a(68224),
                u = a(32911),
                m = a(98031),
                h = a(95314),
                _ = a(32953);
            let p = (e) => {
                let { item: t, index: a, pageId: p, sendSearchFeedback: x, blockPosition: b = 0, objectPosX: S, objectPosY: j, objectsCount: v } = e;
                switch (t.type) {
                    case i.n.PODCAST_EPISODE:
                        return (0, s.jsx)(
                            h.B,
                            {
                                objectType: r.DomainObjectType.PodcastEpisode,
                                objectId: t.data.id,
                                objectPosX: S,
                                objectPosY: j,
                                objectsCount: v,
                                children: (0, s.jsx)(d.c, { pageId: p, track: t.data }),
                            },
                            t.data.id,
                        );
                    case i.n.UGC_TRACK:
                        return (0, s.jsx)(d.c, { pageId: p, track: t.data });
                    case i.n.TRACK:
                        return (0, s.jsx)(
                            h.B,
                            {
                                objectType: r.DomainObjectType.Track,
                                objectId: t.data.id,
                                objectPosX: S,
                                objectPosY: j,
                                objectsCount: v,
                                children: (0, s.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: x, id: t.data.entityId, type: o.o.TRACK, blockPosition: b, position: a },
                                    children: (0, s.jsx)(d.c, { pageId: p, track: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case i.n.ARTIST:
                        return (0, s.jsx)(
                            h.B,
                            {
                                objectType: r.DomainObjectType.Artist,
                                objectId: t.data.id,
                                objectPosX: S,
                                objectPosY: j,
                                objectsCount: v,
                                children: (0, s.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: x, id: t.data.id, type: o.o.ARTIST, blockPosition: b, position: a },
                                    children: (0, s.jsx)(l.c, { pageId: p, artist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case i.n.PLAYLIST:
                        return (0, s.jsx)(
                            h.B,
                            {
                                objectType: r.DomainObjectType.Playlist,
                                objectId: t.data.id,
                                objectPosX: S,
                                objectPosY: j,
                                objectsCount: v,
                                children: (0, s.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: x, id: t.data.id, type: o.o.PLAYLIST, blockPosition: b, position: a },
                                    children: (0, s.jsx)(c.v, { pageId: p, playlist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case i.n.PODCAST:
                        return (0, s.jsx)(
                            h.B,
                            {
                                objectType: r.DomainObjectType.Podcast,
                                objectId: String(t.data.id),
                                objectPosX: S,
                                objectPosY: j,
                                objectsCount: v,
                                children: (0, s.jsx)(
                                    _.N.Provider,
                                    {
                                        value: { sendSearchFeedback: x, id: t.data.id, type: o.o.PODCAST, blockPosition: b, position: a },
                                        children: (0, s.jsx)(n.M, { pageId: p, album: t.data }),
                                    },
                                    t.data.id,
                                ),
                            },
                            t.data.id,
                        );
                    case i.n.ALBUM:
                        return (0, s.jsx)(
                            h.B,
                            {
                                objectType: r.DomainObjectType.Album,
                                objectId: String(t.data.id),
                                objectPosX: S,
                                objectPosY: j,
                                objectsCount: v,
                                children: (0, s.jsx)(
                                    _.N.Provider,
                                    {
                                        value: { sendSearchFeedback: x, id: t.data.id, type: o.o.ALBUM, blockPosition: b, position: a },
                                        children: (0, s.jsx)(n.M, { pageId: p, album: t.data }),
                                    },
                                    t.data.id,
                                ),
                            },
                            t.data.id,
                        );
                    case i.n.WAVE: {
                        let e = t.data;
                        return (0, s.jsx)(
                            h.B,
                            {
                                objectType: r.DomainObjectType.Wave,
                                objectId: e.stationId,
                                objectPosX: S,
                                objectPosY: j,
                                objectsCount: v,
                                children: (0, s.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: x, id: e.seedsId, type: o.o.WAVE, blockPosition: b, position: a },
                                    children: (0, s.jsx)(m.H, { vibe: e, cover: e.cover, description: e.description, agentVariant: u.h.SMALL }),
                                }),
                            },
                            e.stationId,
                        );
                    }
                    default:
                        return null;
                }
            };
        },
        60706: (e) => {
            e.exports = { root: 'SearchBestResultsTrackBlock_root__Qsh_f', cover: 'SearchBestResultsTrackBlock_cover__aCixO' };
        },
        62152: (e) => {
            e.exports = {
                header: 'SearchPage_header__T2OUM',
                root: 'SearchPage_root__TtwTi',
                root_showFilters: 'SearchPage_root_showFilters__pb2o1',
                input: 'SearchPage_input__7L7wS',
                root_mobile: 'SearchPage_root_mobile__caKC9',
                content: 'SearchPage_content__Ax9D6',
                scrollableContent: 'SearchPage_scrollableContent__qdrWa',
                scrollableContent_withUpperBlocks: 'SearchPage_scrollableContent_withUpperBlocks___Tx_d',
                main: 'SearchPage_main__FDQGD',
                carousel: 'SearchPage_carousel__7jwGp',
                tabs: 'SearchPage_tabs__tlwgh',
                tab: 'SearchPage_tab__2yIDQ',
                tab_selected: 'SearchPage_tab_selected__Z7lYv',
                compilations: 'SearchPage_compilations__ZHEUr',
                footer: 'SearchPage_footer__uQN_X',
                error: 'SearchPage_error__WSxpu',
                skeletonStickyHeader: 'SearchPage_skeletonStickyHeader__SQqeV',
                important: 'SearchPage_important__z3aCa',
                skeletonHeaderWithUpperBlocks: 'SearchPage_skeletonHeaderWithUpperBlocks__LArR6',
                skeletonStickyHeaderWithUpperBlocks: 'SearchPage_skeletonStickyHeaderWithUpperBlocks__I1NoV',
                skeletonContainer: 'SearchPage_skeletonContainer__phbvK',
                skeletonContainer_withUpperBlocks: 'SearchPage_skeletonContainer_withUpperBlocks__J4934',
                mixes: 'SearchPage_mixes__yusZB',
            };
        },
        67746: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 81995));
        },
        68103: (e, t, a) => {
            'use strict';
            var s;
            (a.d(t, { n: () => s }),
                (function (e) {
                    ((e.ALL = 'all'),
                        (e.TRACK = 'track'),
                        (e.ALBUM = 'album'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.WAVE = 'wave'),
                        (e.GENRE = 'genre'),
                        (e.USER = 'user'),
                        (e.UGC_TRACK = 'ugc_track'),
                        (e.PODCAST = 'podcast'),
                        (e.PODCAST_EPISODE = 'podcast_episode'),
                        (e.VIDEO = 'video'),
                        (e.LYRICS = 'lyrics'),
                        (e.CLIP = 'clip'),
                        (e.BOOK = 'book'),
                        (e.CONCERT = 'concert'));
                })(s || (s = {})));
        },
        68840: (e) => {
            e.exports = { block: 'SearchBestResultsCommon_block__v11At', cover: 'SearchBestResultsCommon_cover__ZHlYo' };
        },
        68846: (e) => {
            e.exports = { root: 'SearchBestResultsRecentReleaseBlock_root___1Eoa' };
        },
        68930: (e) => {
            e.exports = { root: 'SearchBestResultsPlaylistBlock_root__HLU50' };
        },
        72715: (e) => {
            e.exports = {
                root: 'AnimatedSearchInputGradient_root__RCZ_L',
                'animated-search-input-gradient-soft-blur': 'AnimatedSearchInputGradient_animated-search-input-gradient-soft-blur__sl4Vj',
                'animated-search-input-gradient-mask-blur': 'AnimatedSearchInputGradient_animated-search-input-gradient-mask-blur__6VngZ',
                root_active: 'AnimatedSearchInputGradient_root_active__xjLMk',
                root_safari: 'AnimatedSearchInputGradient_root_safari__Ji6uj',
                root_size_xxs: 'AnimatedSearchInputGradient_root_size_xxs__umHrV',
                gradient: 'AnimatedSearchInputGradient_gradient__pMdqx',
                ringMask: 'AnimatedSearchInputGradient_ringMask__0hjLD',
                ringOuter: 'AnimatedSearchInputGradient_ringOuter__uNAfw',
                ringHole: 'AnimatedSearchInputGradient_ringHole__AXkf4',
                softGlow: 'AnimatedSearchInputGradient_softGlow__UDn1M',
                hardGlow: 'AnimatedSearchInputGradient_hardGlow__nLxz_',
                stroke: 'AnimatedSearchInputGradient_stroke__kujhk',
                revealMask: 'AnimatedSearchInputGradient_revealMask__PcVQv',
                revealBlur: 'AnimatedSearchInputGradient_revealBlur__k9fMh',
                'animated-search-input-gradient-mask-opacity': 'AnimatedSearchInputGradient_animated-search-input-gradient-mask-opacity__p6uRU',
                revealPass: 'AnimatedSearchInputGradient_revealPass__r6c29',
                'animated-search-input-gradient-mask-inline-motion': 'AnimatedSearchInputGradient_animated-search-input-gradient-mask-inline-motion__qC86w',
                'animated-search-input-gradient-mask-shape-motion': 'AnimatedSearchInputGradient_animated-search-input-gradient-mask-shape-motion__u8huB',
            };
        },
        76481: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => r });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: a = 'E_INTERNAL', data: r = {}, ...i } = t,
                        o = e || 'Internal error';
                    (super(o, i), (this.message = o), (this.code = a), (this.data = r), (this.stack = Error(o).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class r extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...a } = {}) {
                    (super(e, { code: t, ...a }), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        77276: (e) => {
            e.exports = {
                root: 'SearchBestResultsOverviewBlock_root__m1nKx',
                button: 'SearchBestResultsOverviewBlock_button__F2FaR',
                important: 'SearchBestResultsOverviewBlock_important__oLQCU',
            };
        },
        77435: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => p });
            var s = a(25839),
                r = a(84059),
                i = a(74631),
                o = a(39004),
                n = a(8487),
                l = a(71035),
                c = a(91149),
                d = a(92942),
                u = a(53712),
                m = a(27954),
                h = a(51790),
                _ = a(57549);
            let p = (e) => {
                let { user: t, search: a } = (0, m.g)(),
                    { formatMessage: p } = (0, o.A)(),
                    { notify: x } = (0, d.l)(),
                    b = (0, r.useRouter)();
                return (
                    (0, i.useEffect)(() => {
                        a.isEmptyHistory && b.push(u.Z.search.href);
                    }, [a.isEmptyHistory, b]),
                    (0, l.c)(() => {
                        try {
                            (t.account.data.uid && a.clearHistory({ userId: t.account.data.uid }),
                                x((0, s.jsx)(h.$, { message: (0, s.jsx)(n.A, { id: 'search.cleared-history' }) }), { containerId: c.u.INFO }),
                                e && e(),
                                b.push(u.Z.search.href));
                        } catch (e) {
                            x((0, s.jsx)(_.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: c.u.ERROR });
                        }
                    })
                );
            };
        },
        77920: (e, t, a) => {
            'use strict';
            var s;
            (a.d(t, { X: () => s }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(s || (s = {})));
        },
        78631: (e) => {
            e.exports = {
                root: 'SearchHistoryBlockDesktop_root__jKICZ',
                controls: 'SearchHistoryBlockDesktop_controls__5JPBt',
                header: 'SearchHistoryBlockDesktop_header__zOALK',
                clearButton: 'SearchHistoryBlockDesktop_clearButton__kN4Nk',
                content: 'SearchHistoryBlockDesktop_content__doQsC',
            };
        },
        79422: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => i });
            var s = a(74631),
                r = a(71035);
            let i = () => {
                let e = (0, s.useRef)(new Map());
                return (
                    (0, s.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, r.c)((t, a) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, a), a)))
                );
            };
        },
        80126: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => s });
            let s = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        },
        81995: (e, t, a) => {
            'use strict';
            a.d(t, { SearchPage: () => sL });
            var s = a(25839),
                r = a(82298),
                i = a(88204),
                o = a(84059),
                n = a(74631),
                l = a(39004),
                c = a(36619),
                d = a(61493),
                u = a(52669),
                m = a(68103),
                h = a(97762),
                _ = a(71035),
                p = a(49656),
                x = a(56659),
                b = a(5867),
                S = a(14693),
                j = a(59925),
                v = a(80126),
                C = a(27954);
            let A = (e) => {
                let t = 1200 + 1600 * e;
                return { phaseDelay: ''.concat(t / 1e3, 's'), gradientAnimationBegin: ''.concat((t + 160) / 1e3, 's') };
            };
            var y = a(72715),
                g = a.n(y);
            let T = [0, 1, 2, 3],
                I = (0, i.PA)((e) => {
                    var t;
                    let { isActive: a, size: i = 'xxxs' } = e,
                        { settings: o } = (0, C.g)(),
                        l = !!(null == (t = o.browserInfo) ? void 0 : t.isSafari),
                        c = (0, n.useId)(),
                        d = ''.concat(c, '-ring-mask'),
                        u = ''.concat(c, '-reveal-mask'),
                        m = ''.concat(c, '-glow-gradient'),
                        h = ''.concat(c, '-stroke-gradient'),
                        _ = ''.concat(c, '-reveal-gradient'),
                        p = ''.concat(c, '-soft-blur'),
                        x = ''.concat(c, '-hard-blur');
                    return (0, s.jsx)('div', {
                        className: (0, r.$)(g().root, { [g().root_active]: a, [g().root_safari]: l, [g().root_size_xxs]: 'xxs' === i }),
                        'aria-hidden': !0,
                        children: (0, s.jsxs)('svg', {
                            className: g().gradient,
                            focusable: 'false',
                            children: [
                                (0, s.jsxs)('defs', {
                                    children: [
                                        (0, s.jsxs)('linearGradient', {
                                            id: m,
                                            x1: '46.34%',
                                            y1: '115.24%',
                                            x2: '54.62%',
                                            y2: '-6.1%',
                                            children: [(0, s.jsx)('stop', { stopColor: '#9100df' }), (0, s.jsx)('stop', { offset: '1', stopColor: '#b900b7' })],
                                        }),
                                        (0, s.jsxs)('linearGradient', {
                                            id: h,
                                            x1: '12.43%',
                                            y1: '117.71%',
                                            x2: '81.08%',
                                            y2: '-25%',
                                            children: [
                                                (0, s.jsx)('stop', { stopColor: '#da95ff' }),
                                                (0, s.jsx)('stop', { offset: '0.711542', stopColor: '#f44dbb' }),
                                                (0, s.jsx)('stop', { offset: '1', stopColor: '#ff309f', stopOpacity: '0' }),
                                            ],
                                        }),
                                        (0, s.jsxs)('radialGradient', {
                                            id: _,
                                            children: [
                                                (0, s.jsx)('stop', { offset: '0', stopColor: '#fff' }),
                                                (0, s.jsx)('stop', { offset: '0.45', stopColor: '#fff', stopOpacity: '0.9' }),
                                                (0, s.jsx)('stop', { offset: '1', stopColor: '#fff', stopOpacity: '0' }),
                                            ],
                                        }),
                                        (0, s.jsx)('filter', {
                                            id: p,
                                            x: '-100%',
                                            y: '-1000%',
                                            width: '300%',
                                            height: '2100%',
                                            children: (0, s.jsx)('feGaussianBlur', { stdDeviation: 'xxs' === i ? 22.25 : 18.54 }),
                                        }),
                                        (0, s.jsx)('filter', {
                                            id: x,
                                            x: '-100%',
                                            y: '-1000%',
                                            width: '300%',
                                            height: '2100%',
                                            children: (0, s.jsx)('feGaussianBlur', { stdDeviation: 'xxs' === i ? 5.5 : 4.58 }),
                                        }),
                                        (0, s.jsxs)('mask', {
                                            className: g().ringMask,
                                            id: d,
                                            x: '-100%',
                                            y: '-1000%',
                                            width: '300%',
                                            height: '2100%',
                                            maskUnits: 'userSpaceOnUse',
                                            children: [
                                                (0, s.jsx)('rect', { className: g().ringOuter, fill: '#fff' }),
                                                (0, s.jsx)('rect', { className: g().ringHole, fill: '#000', rx: 'xxs' === i ? 22 : 18.33 }),
                                            ],
                                        }),
                                        (0, s.jsx)('mask', {
                                            className: g().revealMask,
                                            id: u,
                                            x: '-100%',
                                            y: '-1000%',
                                            width: '300%',
                                            height: '2100%',
                                            maskUnits: 'userSpaceOnUse',
                                            maskContentUnits: 'userSpaceOnUse',
                                            children: T.map((e) => {
                                                let { phaseDelay: t } = A(e);
                                                return (0, s.jsx)(
                                                    'g',
                                                    {
                                                        className: g().revealBlur,
                                                        style: { '--animated-search-input-gradient-mask-phase-delay': t },
                                                        children: (0, s.jsx)('rect', { className: g().revealPass, fill: l ? 'url(#'.concat(_, ')') : '#fff' }),
                                                    },
                                                    t,
                                                );
                                            }),
                                        }),
                                    ],
                                }),
                                (0, s.jsxs)('g', {
                                    mask: 'url(#'.concat(u, ')'),
                                    children: [
                                        (0, s.jsx)('g', {
                                            className: g().softGlow,
                                            children: (0, s.jsx)('g', {
                                                filter: l ? 'url(#'.concat(p, ')') : void 0,
                                                children: (0, s.jsx)('rect', { className: g().ringOuter, fill: 'url(#'.concat(m, ')'), mask: 'url(#'.concat(d, ')') }),
                                            }),
                                        }),
                                        (0, s.jsx)('g', {
                                            className: g().hardGlow,
                                            children: (0, s.jsx)('g', {
                                                filter: l ? 'url(#'.concat(x, ')') : void 0,
                                                children: (0, s.jsx)('rect', { className: g().ringOuter, fill: 'url(#'.concat(m, ')'), mask: 'url(#'.concat(d, ')') }),
                                            }),
                                        }),
                                        (0, s.jsx)('rect', {
                                            className: g().stroke,
                                            fill: 'none',
                                            rx: 'xxs' === i ? 23.63 : 19.69,
                                            stroke: 'url(#'.concat(h, ')'),
                                            strokeWidth: 'xxs' === i ? 0.75 : 0.63,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                });
            var k = a(48292),
                E = a(87138),
                P = a(92496),
                f = a(90115),
                N = a.n(f);
            let R = 'animated-search-input-text',
                B = '[data-animation-target="'.concat(R, '"]'),
                L = [
                    { attributeName: 'x1', dur: '1.87s', from: '-416', to: '143' },
                    { attributeName: 'y1', dur: '1.87s', from: '-32', to: '29' },
                    { attributeName: 'x2', dur: '1.5s', from: '80', to: '507' },
                    { attributeName: 'y2', dur: '1.5s', from: '21', to: '-14' },
                ],
                O = (0, E.YK)({
                    cheerfulNotTooMuch: { id: 'search.q2v-input-placeholder-cheerful-not-too-much' },
                    favoriteArtist: { id: 'search.q2v-input-placeholder-favorite-artist' },
                    collectionTrack: { id: 'search.q2v-input-placeholder-collection-track' },
                    melodicAndDanceable: { id: 'search.q2v-input-placeholder-melodic-and-danceable' },
                }),
                D = [O.cheerfulNotTooMuch, O.favoriteArtist, O.collectionTrack, O.melodicAndDanceable],
                w = (0, i.PA)((e) => {
                    var t, a;
                    let { isActive: i, onAnimationEnd: o } = e,
                        { settings: c } = (0, C.g)(),
                        d = !!((null == (t = c.browserInfo) ? void 0 : t.isSafari) || (null == (a = c.browserInfo) ? void 0 : a.OSFamily) === P.j.IOS),
                        { formatMessage: u } = (0, l.A)(),
                        m = (0, n.useId)(),
                        h = (0, n.useRef)(null),
                        [p, x] = (0, n.useState)(D),
                        b = (0, _.c)((e) => {
                            e.currentTarget === e.target && o();
                        });
                    return (
                        (0, n.useEffect)(() => {
                            var e;
                            i ||
                                null == (e = h.current) ||
                                e.querySelectorAll(B).forEach((e) => {
                                    e.pauseAnimations();
                                });
                        }, [i]),
                        (0, n.useEffect)(() => {
                            x((0, k.A)(D));
                        }, []),
                        (0, s.jsx)('div', {
                            className: (0, r.$)(N().root, { [N().root_active]: i, [N().root_safari]: d }),
                            ref: h,
                            'aria-hidden': !0,
                            children: (0, s.jsx)('div', {
                                className: N().viewport,
                                children: p.map((e, t) => {
                                    let a = t === p.length - 1,
                                        i = u(e),
                                        { phaseDelay: o, gradientAnimationBegin: n } = A(t);
                                    return (0, s.jsx)(
                                        'span',
                                        {
                                            className: (0, r.$)(N().phrase, { [N().phrase_last]: a }),
                                            onAnimationEnd: a ? b : void 0,
                                            style: { '--animated-search-input-text-phase-delay': o },
                                            children: (0, s.jsx)('div', {
                                                className: N().phraseContent,
                                                children: (0, s.jsxs)('svg', {
                                                    className: N().text,
                                                    'data-animation-target': R,
                                                    focusable: 'false',
                                                    children: [
                                                        (0, s.jsx)('defs', {
                                                            children: (0, s.jsxs)('linearGradient', {
                                                                id: ''.concat(m, '-text-gradient-').concat(t),
                                                                x1: '-416',
                                                                y1: '-32',
                                                                x2: '80',
                                                                y2: '21',
                                                                gradientUnits: 'userSpaceOnUse',
                                                                children: [
                                                                    (0, s.jsx)('stop', {
                                                                        className: (0, r.$)(N().gradientStop, N().gradientStop_start),
                                                                        stopColor: 'var(--q2v-accent-color)',
                                                                        stopOpacity: '0',
                                                                    }),
                                                                    (0, s.jsx)('stop', {
                                                                        className: (0, r.$)(N().gradientStop, N().gradientStop_middle),
                                                                        offset: '0.2',
                                                                        stopColor: 'var(--q2v-accent-color)',
                                                                    }),
                                                                    (0, s.jsx)('stop', {
                                                                        className: (0, r.$)(N().gradientStop, N().gradientStop_end),
                                                                        offset: '1',
                                                                        stopColor: 'var(--q2v-accent-color)',
                                                                        stopOpacity: '0',
                                                                    }),
                                                                    L.map((e) => {
                                                                        let { attributeName: t, dur: a, from: r, to: i } = e;
                                                                        return (0, s.jsx)(
                                                                            'animate',
                                                                            { attributeName: t, begin: n, dur: a, from: r, to: i, fill: 'freeze' },
                                                                            t,
                                                                        );
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                        (0, s.jsx)('text', { className: N().base, x: '0', y: '50%', children: i }),
                                                        (0, s.jsx)('text', {
                                                            className: N().gradient,
                                                            x: '0',
                                                            y: '50%',
                                                            fill: 'url(#'.concat(m, '-text-gradient-').concat(t, ')'),
                                                            children: i,
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        },
                                        e.id,
                                    );
                                }),
                            }),
                        })
                    );
                });
            var M = a(92755),
                H = a.n(M);
            let U = (e) => {
                let {
                        lumenColor: t,
                        initialValue: a = '',
                        correctedValue: i,
                        className: o,
                        autoFocus: l,
                        onResetClick: c,
                        innerInputProps: d,
                        searchIconProps: u,
                        ...m
                    } = e,
                    h = 0 === a.length,
                    [b, C] = (0, n.useState)(a),
                    [A, y] = (0, n.useState)(0),
                    [g, T] = (0, n.useState)(!1),
                    { state: k, toggleFalse: E } = (0, S.e)(h),
                    P = (0, n.useRef)(null),
                    f = (0, n.useRef)(!!(l && h)),
                    N = (0, _.c)(() => {
                        null !== P.current && (window.clearTimeout(P.current), (P.current = null));
                    }),
                    R = (0, _.c)(() => {
                        (N(), T(!1));
                    }),
                    B = (0, _.c)((e) => {
                        var t;
                        let a = null != (t = e.selectionStart) ? t : e.value.length;
                        (C(e.value.slice(0, a)), y(e.scrollLeft));
                    }),
                    L = (0, _.c)((e) => {
                        var t;
                        let a = e.currentTarget;
                        (E(),
                            B(a),
                            N(),
                            0 === a.value.length
                                ? T(!1)
                                : (T(!0),
                                  (P.current = window.setTimeout(() => {
                                      (T(!1), (P.current = null));
                                  }, 1e3))),
                            null == d || null == (t = d.onInput) || t.call(d, e));
                    }),
                    O = (0, _.c)((e) => {
                        var t;
                        (f.current || E(), null == d || null == (t = d.onFocus) || t.call(d, e));
                    }),
                    D = (0, _.c)((e) => {
                        var t;
                        ((f.current = !1), null == d || null == (t = d.onBlur) || t.call(d, e));
                    }),
                    M = (0, _.c)((e) => {
                        var t;
                        (B(e.currentTarget), null == d || null == (t = d.onSelect) || t.call(d, e));
                    }),
                    U = (0, _.c)((e) => {
                        var t;
                        (y(e.currentTarget.scrollLeft), null == d || null == (t = d.onScroll) || t.call(d, e));
                    }),
                    z = (0, _.c)(() => {
                        (C(''), y(0), R(), null == c || c());
                    });
                ((0, n.useEffect)(() => {
                    i &&
                        (E(),
                        C(i),
                        y(0),
                        N(),
                        T(!0),
                        (P.current = window.setTimeout(() => {
                            (T(!1), (P.current = null));
                        }, 1e3)));
                }, [N, i, E]),
                    (0, n.useEffect)(() => N, [N]),
                    (0, n.useEffect)(() => {
                        h && (0, v.y)() && E();
                    }, [h, E]));
                let V = (0, p.L)(() => {
                        let { actionsClassName: e, icon: t, inputClassName: a, ...s } = null != d ? d : {},
                            i = {
                                ...s,
                                actionsClassName: (0, r.$)(H().searchInputContent, e),
                                inputClassName: (0, r.$)(H().searchInputContent, a),
                                onBlur: D,
                                onFocus: O,
                                onInput: L,
                                onSelect: M,
                                onScroll: U,
                            };
                        return void 0 === t
                            ? i
                            : null === t
                              ? { ...i, icon: t }
                              : { ...i, icon: (0, n.cloneElement)(t, { className: (0, r.$)(H().searchInputContent, t.props.className) }) };
                    }),
                    G = { ...u, className: (0, r.$)(H().searchInputContent, null == u ? void 0 : u.className) };
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(H().root, o, { [H().root_introActive]: k }),
                    onPointerDownCapture: E,
                    style: { '--animated-search-input-scroll-offset': ''.concat(-A, 'px'), '--q2v-accent-color': t },
                    children: [
                        (0, s.jsx)(x.D, {
                            ...m,
                            autoFocus: l,
                            className: H().searchInput,
                            initialValue: a,
                            correctedValue: i,
                            innerInputProps: V,
                            onResetClick: z,
                            searchIconProps: G,
                        }),
                        h && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(I, { isActive: k, size: m.size }), (0, s.jsx)(w, { isActive: k, onAnimationEnd: E })] }),
                        (0, s.jsx)('div', {
                            className: H().mirrorViewport,
                            'aria-hidden': !0,
                            children: (0, s.jsxs)('div', {
                                className: H().mirrorContent,
                                children: [(0, s.jsx)('span', { children: b }), (0, s.jsx)(j.e, { className: (0, r.$)(H().haze, { [H().haze_visible]: g }) })],
                            }),
                        }),
                    ],
                });
            };
            var z = a(8487),
                V = a(4071),
                G = a(4254),
                X = a(15267),
                Y = a.n(X);
            let $ = (e) => {
                let { onCorrectText: t, searchCorrectedText: a } = e,
                    r = (0, n.useMemo)(
                        () => ({
                            text: (0, s.jsx)(V.$, {
                                'aria-label': a,
                                variant: 'text',
                                radius: 'xs',
                                onClick: t,
                                'data-test-id': d.e8.search.SEARCH_CORRECTED_TEXT_BUTTON,
                                children: (0, s.jsx)(G.HL, {
                                    className: Y().link,
                                    variant: 'span',
                                    size: 'm',
                                    type: 'text',
                                    'data-test-id': d.e8.search.SEARCH_CORRECTED_TEXT_BUTTON_TEXT,
                                    children: a,
                                }),
                            }),
                        }),
                        [a, t],
                    );
                return (0, s.jsx)('div', {
                    className: Y().root,
                    'data-test-id': d.e8.search.SEARCH_CORRECTED_TEXT,
                    children: (0, s.jsx)(G.HL, {
                        className: Y().text,
                        variant: 'span',
                        size: 'm',
                        type: 'text',
                        'data-test-id': d.e8.search.SEARCH_CORRECTED_TEXT_TEXT,
                        children: (0, s.jsx)(z.A, { id: 'search.corrected-text', values: r }),
                    }),
                });
            };
            var W = a(66738),
                F = a(13833),
                K = a(99401),
                q = a(26076),
                Q = a(53671),
                Z = a.n(Q);
            let J = (e) => {
                    let { forwardRef: t, className: a, searchCorrectedText: i } = e,
                        { formatMessage: o } = (0, l.A)();
                    return (0, s.jsxs)(F.N, {
                        className: (0, r.$)(Z().root, a),
                        containerClassName: Z().container,
                        ref: t,
                        children: [
                            (0, s.jsxs)('div', {
                                className: Z().content,
                                'data-test-id': d.e8.search.SEARCH_EMPTY_CONTAINER,
                                children: [
                                    i && (0, s.jsx)('div', { className: Z().correctedTextBlock, children: i }),
                                    (0, s.jsx)(W.I, { className: Z().icon, variant: 'search', size: 'xxl', 'data-test-id': d.e8.search.SEARCH_EMPTY_ICON }),
                                    (0, s.jsx)(G.DZ, {
                                        className: Z().title,
                                        size: 's',
                                        weight: 'bold',
                                        variant: 'h3',
                                        'data-test-id': d.e8.search.SEARCH_EMPTY_HEADER,
                                        children: o({ id: 'search-results.not-found-title' }),
                                    }),
                                    (0, s.jsx)(G.HL, {
                                        className: Z().subtitle,
                                        variant: 'div',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        'data-test-id': d.e8.search.SEARCH_EMPTY_DESCRIPTION,
                                        children: o({ id: 'search-results.not-found-description' }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(q.A, { children: (0, s.jsx)(K.w, { className: Z().footer }) }),
                        ],
                    });
                },
                ee = (0, n.forwardRef)((e, t) => (0, s.jsx)(J, { forwardRef: t, ...e }));
            var et = a(89288),
                ea = a(22939),
                es = a(42324),
                er = a(91879),
                ei = a(76939),
                eo = a(28045),
                en = a(84058),
                el = a(15049),
                ec = a(41707),
                ed = a(68224),
                eu = a(96382),
                em = a(68934),
                eh = a(52312),
                e_ = a(37094),
                ep = a.n(e_);
            let ex = (e) => {
                let { item: t, scrollMargin: a, resizeObserver: r, renderItemByIndex: i } = e,
                    [o, l] = (0, em.d)();
                (0, n.useEffect)(
                    () => (
                        o && r && r.observe(o),
                        () => {
                            o && r && r.unobserve(o);
                        }
                    ),
                    [o, r],
                );
                let c = { transform: 'translate3d(0, '.concat(t.start - a, 'px, 0)') };
                return (0, s.jsx)('div', { 'data-index': t.index, className: ep().root, ref: l, style: c, children: i(t.index) }, t.key);
            };
            var eb = a(91278),
                eS = a.n(eb);
            let ej = (e) => {
                let { count: t, getEstimateRowSize: a, renderItemByIndex: r, onChangeRange: i } = e,
                    [o, l] = (0, em.d)(),
                    { virtualizer: c, resizeObserver: d } = (0, eh.r)({ count: t, getEstimateSize: a, containerRef: o, overscan: 3 });
                (0, n.useEffect)(() => {
                    !c.isScrolling && c.range && i && i(c.range);
                }, [i, c.isScrolling, c.range]);
                let u = c.getTotalSize(),
                    m = c.getVirtualItems(),
                    h = c.options.scrollMargin;
                return (0, s.jsx)('div', {
                    className: eS().root,
                    style: { height: ''.concat(u, 'px') },
                    ref: l,
                    children: m.map((e) => (0, s.jsx)(ex, { item: e, scrollMargin: h, resizeObserver: d, renderItemByIndex: r }, e.key)),
                });
            };
            var ev = a(26237),
                eC = a(27089);
            a(93588);
            var eA = a(51246),
                ey = a(86869),
                eg = a(79367),
                eT = a(47009),
                eI = a(26742),
                ek = a(97952),
                eE = a(85743),
                eP = a(87201),
                ef = a(5668),
                eN = a(6323),
                eR = a(18197),
                eB = a(49438),
                eL = a(74987),
                eO = a(96957),
                eD = a.n(eO);
            let ew = (0, i.PA)((e) => {
                let { vibe: t, children: a, className: i } = e,
                    { pageId: o } = (0, ek.$)(),
                    [l, c] = (0, n.useState)(!1),
                    { blockIdForFrom: d } = (0, eI.N)(),
                    {
                        settings: { isMobile: u },
                        user: m,
                        freeAccess: h,
                    } = (0, C.g)(),
                    { sendPlaySearchFeedback: p } = (0, eE.z)(),
                    x = (0, eT.b)(),
                    { isPlaying: b, isPaused: S, togglePlay: j } = (0, eP.B)({ seeds: t.seeds, pageIdForFrom: o, blockIdForFrom: d }),
                    v = (0, eg.P)(),
                    A = b || S,
                    y = (0, n.useCallback)(() => {
                        u && (l || b || (c(!0), null == p || p()), j());
                    }, [u, b, l, p, j]),
                    g = (0, _.c)(() => {
                        !v() && (h.isVibeStartRestricted || (l || b || (c(!0), null == p || p()), j(), x(!b)));
                    }),
                    T = (0, n.useCallback)(
                        () =>
                            (0, s.jsx)(
                                eB.D,
                                {
                                    isPlaying: b,
                                    onClick: g,
                                    className: (0, r.$)(eD().playButton, eD().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                },
                                t.getKey('PlayButton'),
                            ),
                        [b, g, t],
                    ),
                    I = (0, n.useMemo)(() => {
                        let e = !m.hasPlus && h.isFreePlaybackDisabled;
                        return m.isAuthorized
                            ? (0, s.jsx)(
                                  ef.S,
                                  {
                                      isEnabled: e && h.isVibeStartRestricted,
                                      placement: 'bottom',
                                      textVariant: 'vibe',
                                      vibeTextVariant: t.stationType,
                                      renderChildren: T,
                                  },
                                  t.getKey('BuyPlusPopover'),
                              )
                            : (0, s.jsx)(eR.Z, { isEnabled: e, placement: 'bottom', textVariant: 'vibe', vibeTextVariant: t.stationType, renderChildren: T });
                    }, [m.hasPlus, m.isAuthorized, t, T, h.isVibeStartRestricted, h.isFreePlaybackDisabled]),
                    k = (0, n.useMemo)(
                        () =>
                            (0, s.jsxs)(ey.t, {
                                className: eD().cover,
                                radius: 'round',
                                withShadow: !0,
                                onClick: y,
                                children: [
                                    (0, s.jsx)(eN.B, {
                                        size: 200,
                                        fit: 'cover',
                                        className: eD().image,
                                        style: { backgroundColor: t.backgroundColor },
                                        src: t.imageUrl,
                                        alt: t.title,
                                        withAvatarReplace: !0,
                                    }),
                                    A && (0, s.jsx)(eL.P, { stopAnimation: S, className: eD().playingAnimation }),
                                    (0, s.jsx)(eA.hg, {
                                        className: (0, r.$)(eD().controls, { [eD().controls_isPlaying]: A }, eD().important),
                                        bottomContainerClassName: eD().playControl,
                                        radius: 'round',
                                        playControl: I,
                                    }),
                                ],
                            }),
                        [y, t.backgroundColor, t.imageUrl, t.title, A, S, I],
                    );
                return (0, s.jsx)(eA.MN, {
                    className: (0, r.$)(eD().root, i),
                    textPosition: 'center',
                    title: (0, s.jsx)(G.HL, { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title }, t.getKey('Description')),
                    description: (0, s.jsx)(
                        G.HL,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: t.description },
                        t.getKey('Description'),
                    ),
                    view: k,
                    children: a,
                });
            });
            var eM = a(20258),
                eH = a(95314),
                eU = a(30290),
                ez = a(32953),
                eV = a(79422),
                eG = a(44806),
                eX = a(3718),
                eY = a(70676),
                e$ = a(19412),
                eW = a(97805),
                eF = a(36054);
            let eK = {
                    entity: { rowGap: 16, columnGap: 16, estimateRowSize: 275, minColumnWidth: 170, maxColumnWidth: 270, minColumnCount: 2, maxColumnCount: 7 },
                    clip: { rowGap: 16, columnGap: 16, estimateRowSize: 235, minColumnWidth: 200, maxColumnWidth: 400, minColumnCount: 1, maxColumnCount: 6 },
                    concert: { rowGap: 16, columnGap: 16, estimateRowSize: 371, minColumnWidth: 170, maxColumnWidth: 227, minColumnCount: 1, maxColumnCount: 2 },
                },
                eq = (e, t) => {
                    let [a, s] = (0, n.useState)(t || e.length > 0),
                        [r, i] = (0, n.useState)(e.length > 0 ? e[0] : void 0),
                        o = (0, n.useRef)(void 0),
                        l = (0, n.useRef)(t),
                        c = (0, n.useRef)(t ? Date.now() : void 0),
                        d = (0, _.c)((e) => {
                            let t = Math.max(0, 2e3 - (void 0 !== c.current ? Date.now() - c.current : 2e3));
                            0 === t ? e() : (o.current = setTimeout(e, t));
                        });
                    return (
                        (0, n.useEffect)(() => {
                            let a = t && !l.current,
                                r = !t && l.current;
                            return (
                                (l.current = t),
                                a && (clearTimeout(o.current), (c.current = Date.now()), s(!0), i(void 0)),
                                r && (clearTimeout(o.current), e.length > 0 ? d(() => i(e[0])) : d(() => s(!1))),
                                () => clearTimeout(o.current)
                            );
                        }, [t, e, d]),
                        { isVisible: a, vibe: r }
                    );
                };
            var eQ = a(59342),
                eZ = a(38907),
                eJ = a(2488),
                e0 = a(26330),
                e1 = a.n(e0);
            let e2 = (0, i.PA)((e) => {
                let { id: t, concert: a } = e;
                return (0, s.jsxs)('div', {
                    className: e1().root,
                    id: t,
                    children: [
                        (0, s.jsx)(G.HL, { variant: 'div', size: 'm', weight: 'medium', className: e1().city, lineClamp: 1, children: null == a ? void 0 : a.title }),
                        (0, s.jsx)(G.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: null == a ? void 0 : a.city }),
                        (0, s.jsx)(G.HL, { variant: 'span', size: 'm', weight: 'medium', children: null == a ? void 0 : a.contentRating }),
                    ],
                });
            });
            var e8 = a(41487),
                e3 = a.n(e8);
            let e9 = (0, i.PA)((e) => {
                let { concert: t } = e,
                    a = (0, n.useRef)(String((0, eQ.A)())),
                    r = t.isIdentityExperimentEnabled ? eJ.M : e2;
                return (0, s.jsx)(eZ.V, {
                    artistId: null,
                    viewUuid: a.current,
                    concert: t,
                    radius: 's',
                    className: e3().root,
                    meta: (0, s.jsx)(r, { concert: t }),
                    shouldSendAnalyticsOnHide: !0,
                    shouldShowMask: !0,
                });
            });
            var e4 = a(49337),
                e6 = a(16351);
            let e5 = {
                    [e4.S.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_search.lottie',
                    [e4.S.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_search.lottie',
                },
                e7 = {
                    loading: { loop: !0, markerId: 'loading' },
                    idle: { markerId: 'success' },
                    playing: { markerId: 'playing' },
                    paused: { markerId: 'playing', mode: 'reverse' },
                },
                te = (e) => (0, s.jsx)(e6.D, { animationByTheme: e5, animationConfig: e7, ...e });
            var tt = a(57138),
                ta = a(36603),
                ts = a.n(ta);
            let tr = (0, i.PA)((e) => {
                let { className: t, requestAwakeLumenModal: a, sendSearchFeedback: i, vibe: o } = e,
                    { lumen: n } = (0, C.g)(),
                    l = n.isAwakened ? c.DomainObjectType.Lumen : c.DomainObjectType.LumenUnawakened,
                    d = (0, p.L)(() => (o ? { sendSearchFeedback: i, id: o.seedsId, type: er.o.WAVE, blockPosition: 0, position: 0 } : null));
                return (0, s.jsx)('div', {
                    className: (0, r.$)(ts().root, t),
                    children: (0, s.jsx)(tt.F, {
                        blockId: c.EntityTypes.Q2vWave,
                        blockType: c.EntityTypes.Q2vWave,
                        mainObjectId: '',
                        mainObjectType: l,
                        blockPosX: 1,
                        blockPosY: 1,
                        objectsCount: 1,
                        children: (0, s.jsx)(eH.B, {
                            objectPosX: 1,
                            objectPosY: 1,
                            objectsCount: 1,
                            objectType: c.DomainObjectType.Wave,
                            objectId: null == o ? void 0 : o.stationId,
                            children: (0, s.jsx)(ez.N.Provider, { value: d, children: (0, s.jsx)(te, { requestAwakeLumenModal: a, vibe: o }) }),
                        }),
                    }),
                });
            });
            var ti = a(21675),
                to = a.n(ti);
            let tn = (0, i.PA)((e) => {
                    let {
                            forwardRef: t,
                            className: a,
                            results: i,
                            filter: o,
                            variant: l = 'grid',
                            sendSearchFeedback: d,
                            searchCorrectedText: u,
                            isShimmerVisible: h,
                            getDataByRange: x,
                            requestsCount: b,
                            q2vResults: S,
                            isShimmerActive: j,
                            requestAwakeLumenModal: v,
                            ...A
                        } = e,
                        { experiments: y } = (0, C.g)(),
                        g = (0, ev.f)(),
                        { isVisible: T, vibe: I } = eq(S, j),
                        k = g && T && o === m.n.WAVE,
                        E = ((e) => (e === m.n.CLIP ? eK.clip : e === m.n.CONCERT ? eK.concert : eK.entity))(o),
                        P = (0, _.c)(() => 56),
                        f = (0, _.c)(() => E.estimateRowSize),
                        N = (0, eV.w)(),
                        R = (() => {
                            let e = (0, n.useRef)(new Map());
                            return (
                                (0, n.useLayoutEffect)(
                                    () => (
                                        e.current.size > 0 && e.current.clear(),
                                        () => {
                                            e.current.clear();
                                        }
                                    ),
                                    [],
                                ),
                                (0, _.c)((t, a) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, a), a)))
                            );
                        })(),
                        { from: B } = (0, eU.f)({ pageId: eM._Q.SEARCH }),
                        L = (0, n.useCallback)(
                            (e) => {
                                let t = i[e];
                                if (!t)
                                    return 'list' === l
                                        ? (0, s.jsx)(eW.D, { variant: eX.X.PLAYLIST, isActive: !0 })
                                        : o === m.n.CONCERT
                                          ? (0, s.jsx)(eY.W, { isShimmerActive: !0, className: to().concertShimmer })
                                          : o === m.n.ARTIST
                                            ? (0, s.jsx)(e$.V, { linesCount: 2, round: !0, centered: !0, isActive: !0 })
                                            : o === m.n.WAVE
                                              ? y.checkExperiment(eG.z.WebNextWaveAgentExperiment, 'on')
                                                  ? (0, s.jsx)(e$.V, { linesCount: 3, centered: !0, isActive: !0 })
                                                  : (0, s.jsx)(e$.V, { linesCount: 2, round: !0, centered: !0, isActive: !0 })
                                              : o === m.n.PLAYLIST
                                                ? (0, s.jsx)(e$.V, { linesCount: 2, isActive: !0 })
                                                : o === m.n.CLIP
                                                  ? (0, s.jsx)(e$.V, { linesCount: 2, shimmerClassName: to().video, isActive: !0 })
                                                  : (0, s.jsx)(e$.V, { className: to().entityCardShimmer, isActive: !0, shimmerClassName: o === m.n.CLIP && to().video });
                                switch (t.type) {
                                    case m.n.ALBUM:
                                        return (0, s.jsx)(
                                            ez.N.Provider,
                                            {
                                                value: R(t.data.id, { sendSearchFeedback: d, id: t.data.id, type: er.o.ALBUM, blockPosition: 0, position: e }),
                                                children: (0, s.jsx)(ei.a, { album: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case m.n.PLAYLIST:
                                        return (0, s.jsx)(
                                            ez.N.Provider,
                                            {
                                                value: R(t.data.id, { sendSearchFeedback: d, id: t.data.id, type: er.o.PLAYLIST, blockPosition: 0, position: e }),
                                                children: (0, s.jsx)(ec.B, { playlist: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case m.n.ARTIST:
                                        return (0, s.jsx)(
                                            ez.N.Provider,
                                            {
                                                value: R(t.data.id, { sendSearchFeedback: d, id: t.data.id, type: er.o.ARTIST, blockPosition: 0, position: e }),
                                                children: (0, s.jsx)(en.a, { artist: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case m.n.PODCAST:
                                        return (0, s.jsx)(
                                            eH.B,
                                            {
                                                objectType: c.DomainObjectType.Podcast,
                                                objectId: String(t.data.id),
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                objectsCount: i.length,
                                                children: (0, s.jsx)(ez.N.Provider, {
                                                    value: R(t.data.id, { sendSearchFeedback: d, id: t.data.id, type: er.o.PODCAST, blockPosition: 0, position: e }),
                                                    children: (0, s.jsx)(eo.M, { album: t.data }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                    case m.n.CLIP:
                                        return (0, s.jsx)(
                                            ez.N.Provider,
                                            {
                                                value: R(t.data.clipId, { sendSearchFeedback: d, id: t.data.clipId, type: er.o.CLIP, blockPosition: 0, position: e }),
                                                children: (0, s.jsx)(el.F, { clip: t.data }),
                                            },
                                            t.data.clipId,
                                        );
                                    case m.n.WAVE:
                                        if (!y.checkExperiment(eG.z.WebNextWaveAgentExperiment, 'on'))
                                            return (0, s.jsx)(
                                                ez.N.Provider,
                                                {
                                                    value: R(t.data.stationId, {
                                                        sendSearchFeedback: d,
                                                        id: t.data.stationId,
                                                        type: er.o.WAVE,
                                                        blockPosition: 0,
                                                        position: e,
                                                    }),
                                                    children: (0, s.jsx)(ew, { vibe: t.data }),
                                                },
                                                t.data.stationId,
                                            );
                                        return (0, s.jsx)(
                                            ez.N.Provider,
                                            {
                                                value: R(t.data.stationId, {
                                                    sendSearchFeedback: d,
                                                    id: t.data.stationId,
                                                    type: er.o.WAVE,
                                                    blockPosition: 0,
                                                    position: e,
                                                }),
                                                children: (0, s.jsx)(eC.y, { vibe: t.data }),
                                            },
                                            t.data.stationId,
                                        );
                                    case m.n.CONCERT:
                                        return (0, s.jsx)(
                                            eH.B,
                                            {
                                                objectType: c.DomainObjectType.Concert,
                                                objectId: t.data.id,
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                objectsCount: i.length,
                                                children: (0, s.jsx)(e9, { concert: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case m.n.TRACK:
                                    case m.n.UGC_TRACK:
                                        return (0, s.jsx)(
                                            eH.B,
                                            {
                                                objectType: c.DomainObjectType.Track,
                                                objectId: t.data.id,
                                                objectPosX: 1,
                                                objectPosY: e + 1,
                                                objectsCount: i.length,
                                                children: (0, s.jsx)(ez.N.Provider, {
                                                    value: R(t.data.entityId, {
                                                        sendSearchFeedback: d,
                                                        id: t.data.entityId,
                                                        type: er.o.TRACK,
                                                        blockPosition: 0,
                                                        position: e,
                                                    }),
                                                    children: (0, s.jsx)(ed.c, {
                                                        track: t.data,
                                                        playContextParams: N(t.data.entityId, {
                                                            contextData: { type: ea.K.Various, meta: { id: t.data.entityId }, from: B, overrideContextType: es.b.Search },
                                                            queueParams: { index: e, entityId: t.data.id },
                                                            loadContextMeta: !0,
                                                        }),
                                                    }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                    case m.n.PODCAST_EPISODE:
                                        return (0, s.jsx)(
                                            eH.B,
                                            {
                                                objectType: c.DomainObjectType.PodcastEpisode,
                                                objectId: t.data.id,
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                objectsCount: i.length,
                                                children: (0, s.jsx)(ed.c, {
                                                    track: t.data,
                                                    playContextParams: N(t.data.entityId, {
                                                        contextData: { type: ea.K.Various, meta: { id: t.data.entityId }, from: B, overrideContextType: es.b.Search },
                                                        queueParams: { index: e, entityId: t.data.id },
                                                        loadContextMeta: !0,
                                                    }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                }
                            },
                            [i, l, o, y, R, d, N, B, b],
                        ),
                        O = (0, p.L)(() => (h ? i.length + eF.k : i.length)),
                        D = (0, p.L)(() =>
                            'list' === l
                                ? (0, s.jsx)(ej, { count: O, getEstimateRowSize: P, renderItemByIndex: L, onChangeRange: x })
                                : (0, s.jsx)(eu.Q, {
                                      count: O,
                                      rowGap: E.rowGap,
                                      columnGap: E.columnGap,
                                      getEstimateRowSize: f,
                                      minColumnCount: E.minColumnCount,
                                      minColumnWidth: E.minColumnWidth,
                                      maxColumnWidth: E.maxColumnWidth,
                                      maxColumnCount: E.maxColumnCount,
                                      renderItemByIndex: L,
                                      onChangeRange: x,
                                  }),
                        );
                    return (0, s.jsxs)(F.N, {
                        className: (0, r.$)(to().root, a),
                        containerClassName: to().container,
                        ref: t,
                        ...(0, et.OZ)(A),
                        children: [
                            (0, s.jsxs)('div', {
                                children: [
                                    u && (0, s.jsx)('div', { className: to().correctedTextBlock, children: u }),
                                    k && (0, s.jsx)(tr, { className: to().queryToVibe, requestAwakeLumenModal: v, sendSearchFeedback: d, vibe: I }),
                                    D,
                                ],
                            }),
                            (0, s.jsx)(q.A, { children: (0, s.jsx)(K.w, { className: to().footer }) }),
                        ],
                    });
                }),
                tl = (0, n.forwardRef)((e, t) => (0, s.jsx)(tn, { forwardRef: t, ...e }));
            var tc = a(22965),
                td = a(42853),
                tu = a(35465),
                tm = a(39058),
                th = a(58954),
                t_ = a(26508),
                tp = a(5365),
                tx = a(18412),
                tb = a(80986),
                tS = a(23976),
                tj = a(96027),
                tv = a.n(tj);
            let tC = (e) => {
                let { className: t, ariaLabel: a, isShimmerActive: i } = e;
                return (0, s.jsxs)('div', {
                    tabIndex: 0,
                    'aria-label': a,
                    'aria-live': 'polite',
                    'aria-busy': !0,
                    className: (0, r.$)(tv().root, t),
                    children: [
                        (0, s.jsxs)('div', {
                            className: tv().infoContainer,
                            children: [
                                (0, s.jsx)(tS.W, { className: tv().cover, radius: 's', isActive: i }),
                                (0, s.jsxs)('div', {
                                    className: tv().textContainer,
                                    children: [
                                        (0, s.jsx)(tS.W, { className: tv().title, radius: 's', isActive: i }),
                                        (0, s.jsx)(tS.W, { className: tv().description, radius: 's', isActive: i }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)(tS.W, { className: tv().action, radius: 's', isActive: i }),
                    ],
                });
            };
            var tA = a(36031),
                ty = a.n(tA);
            let tg = (e) => {
                let { shimmersCount: t = 3, isShimmerActive: a = !0 } = e,
                    { formatMessage: r } = (0, l.A)();
                return Array.from({ length: t }, (e, t) =>
                    (0, s.jsx)(
                        tC,
                        {
                            className: ty().root,
                            ariaLabel: r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'search.history' }) }),
                            isShimmerActive: a,
                        },
                        t,
                    ),
                );
            };
            var tT = a(93875),
                tI = a.n(tT);
            let tk = (e) => {
                    let {
                            forwardRef: t,
                            title: a,
                            description: i,
                            viewAllAction: o,
                            coverUrl: l,
                            children: c,
                            className: u,
                            maxColumns: m = 2,
                            itemsPerColumn: h = 3,
                            containerClassName: _,
                            headerClassName: p,
                            titleSize: x,
                            showControls: b,
                            isShimmerVisible: S,
                            isShimmerActive: j,
                        } = e,
                        v = (0, n.useRef)(null),
                        C = (0, n.useId)(),
                        { items: A, columnLength: y } = (0, n.useMemo)(() => {
                            if (S)
                                return {
                                    columnLength: m,
                                    items: Array.from({ length: m }, (e, t) =>
                                        (0, s.jsx)('div', { className: tI().column, children: (0, s.jsx)(tg, { shimmersCount: 3, isShimmerActive: j }) }, t),
                                    ),
                                };
                            let e = (0, t_.A)(c, h).slice(0, (null == c ? void 0 : c.length) ? Math.ceil(c.length / h) : m);
                            return { items: e.map((e, t) => (0, s.jsx)('div', { className: tI().column, children: e }, t)), columnLength: e.length };
                        }, [c, j, S, h, m]);
                    return (0, s.jsxs)('section', {
                        ref: t,
                        className: (0, r.$)(u, tI().root),
                        'data-test-id': d.e8.search.MIXED_ENTITIES_BLOCK,
                        children: [
                            (0, s.jsx)(tx.T, {
                                className: p,
                                labeledForId: C,
                                title: a,
                                description: i,
                                coverUrl: l,
                                viewAllActionLink: o,
                                titleSize: x,
                                controls: b && (0, s.jsx)(tb.X, { className: tI().controls, carouselRef: v }),
                                withDescription: !!i,
                            }),
                            (0, s.jsx)(tp.F, {
                                className: _,
                                ref: v,
                                itemClassName: (0, r.$)(tI().item, { [tI().item_withMultipleColumns]: y > 1 }),
                                'aria-labelledby': C,
                                role: 'group',
                                children: A,
                            }),
                        ],
                    });
                },
                tE = (0, n.forwardRef)((e, t) => (0, s.jsx)(tk, { forwardRef: t, ...e }));
            var tP = a(36648),
                tf = a(85759),
                tN = a.n(tf);
            let tR = (e) => {
                let { isShimmerActive: t } = e;
                return (0, s.jsxs)('div', {
                    className: tN().root,
                    children: [
                        (0, s.jsxs)('div', {
                            className: tN().container,
                            children: [
                                (0, s.jsx)(e$.V, {
                                    className: (0, r.$)(tN().entity, tN().important),
                                    shimmerClassName: (0, r.$)(tN().cover, tN().important),
                                    round: !0,
                                    withInfo: !1,
                                    isActive: t,
                                }),
                                (0, s.jsxs)('div', {
                                    className: tN().meta,
                                    children: [
                                        (0, s.jsx)(tP.n, { textClassName: (0, r.$)(tN().title, tN().important), isActive: t }),
                                        (0, s.jsx)(tP.n, { textClassName: (0, r.$)(tN().subtitle, tN().important), isActive: t }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)('div', {
                            className: tN().container,
                            children: [
                                (0, s.jsx)(e$.V, {
                                    className: (0, r.$)(tN().entity, tN().important),
                                    shimmerClassName: (0, r.$)(tN().cover, tN().important),
                                    withInfo: !1,
                                    isActive: t,
                                    radius: 'xs',
                                }),
                                (0, s.jsxs)('div', {
                                    className: tN().meta,
                                    children: [
                                        (0, s.jsx)(tP.n, { textClassName: (0, r.$)(tN().title, tN().important), isActive: t }),
                                        (0, s.jsx)(tP.n, { textClassName: (0, r.$)(tN().subtitle, tN().important), isActive: t }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            };
            var tB = a(27679),
                tL = a.n(tB),
                tO = a(68840),
                tD = a.n(tO),
                tw = a(87010),
                tM = a.n(tw);
            let tH = (0, i.PA)((e) => {
                let { album: t } = e;
                return (0, s.jsx)(eo.M, {
                    album: t,
                    className: (0, r.$)(tD().block, tM().root),
                    coverClassName: tD().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                });
            });
            var tU = a(51011),
                tz = a(83020),
                tV = a.n(tz);
            let tG = (0, i.PA)((e) => {
                let { artist: t } = e;
                return (0, s.jsx)(tU.c, {
                    artist: t,
                    className: (0, r.$)(tD().block, tV().root),
                    coverClassName: tD().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    pageId: eM._Q.SEARCH,
                });
            });
            var tX = a(87221),
                tY = a(74756),
                t$ = a(39099),
                tW = a(4331),
                tF = a(56778),
                tK = a(50209),
                tq = a(12929),
                tQ = a(79856),
                tZ = a.n(tQ),
                tJ = a(77698),
                t0 = a(97522),
                t1 = a(6349),
                t2 = a(4250),
                t8 = a.n(t2);
            let t3 = (0, i.PA)((e) => {
                var t;
                let { track: a } = e,
                    { from: i } = (0, eU.f)(),
                    { formatMessage: o } = (0, l.A)(),
                    c = { contextData: { type: ea.K.Various, meta: { id: a.entityId }, from: i }, queueParams: { index: 0, entityId: a.id }, loadContextMeta: !0 },
                    d = (0, tK.D)({ playContextParams: c, entityId: a.entityId }),
                    u = (0, n.useCallback)(
                        (e) =>
                            (0, s.jsx)(t1.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: (0, r.$)(tD().cover, t8().cover),
                                alt: o({ id: 'entity-names.track-name-by-type' }, { type: (0, tF.y)(a.type), name: a.title }),
                                radius: 'xs',
                                ...e,
                            }),
                        [o, a.coverUri, a.isAvailable, a.isDisliked, a.title, a.type],
                    ),
                    m = (0, tX.O)({ track: a, entityType: tq.n.AUDIOBOOK }),
                    h = (0, p.L)(() =>
                        a.url && a.isAvailable
                            ? (0, s.jsx)(t0.N, { className: (0, r.$)(tZ().text, tZ().titleLink), href: a.url, onClick: m, children: a.title })
                            : (0, s.jsx)(G.HL, { className: (0, r.$)(tZ().text, tZ().titleText), size: 'm', variant: 'div', type: 'text', children: a.title }),
                    ),
                    _ = (0, n.useCallback)(
                        (e, t) => {
                            var r;
                            return (null == (r = a.artists) ? void 0 : r.length)
                                ? (0, s.jsx)(tW.i, { linkClassName: e, captionClassName: t, artists: a.artists, lineClamp: 1, withLink: a.isAvailable })
                                : null;
                        },
                        [a.artists, a.isAvailable],
                    );
                return (0, s.jsx)(t$.C, {
                    className: (0, r.$)(tD().block, t8().root, tZ().root, { [tZ().root_disabled]: !a.isAvailable }),
                    track: a,
                    meta: (0, s.jsx)(tJ.r, {
                        isDisabled: !a.isAvailable,
                        version: a.version,
                        title: h,
                        artistsComponent: _,
                        getDescriptionTexts: a.getDescriptionTexts,
                        explicitMarkVariant: a.explicitDisclaimer,
                        releaseYear: (null == (t = a.mainAlbum) ? void 0 : t.isNonMusic) ? a.mainAlbum.year : void 0,
                    }),
                    playButtonCellRender: u,
                    playButtonIconSize: 'l',
                    controls: (0, s.jsx)(tY.Q, { track: a, utmLink: c.contextData.utmLink, likeIconSize: 'xs' }),
                    ...d,
                });
            });
            var t9 = a(25323),
                t4 = a(18483),
                t6 = a(38242),
                t5 = a.n(t6);
            let t7 = (0, i.PA)((e) => {
                    let { clip: t } = e,
                        a = (0, t4.d)(),
                        r = (0, n.useRef)(String((0, eQ.A)()));
                    return a
                        ? (0, s.jsx)(t9.N, {
                              clip: t,
                              viewUuid: r.current,
                              className: tD().block,
                              coverClassName: t5().cover,
                              playButtonIconSize: 'l',
                              likeIconSize: 'xs',
                              shouldShowTimecode: !0,
                          })
                        : null;
                }),
                ae = (0, i.PA)((e) => {
                    let { id: t, concert: a } = e,
                        r = [],
                        i = (0, s.jsx)(G.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                    return (
                        (null == a ? void 0 : a.city) && r.push((0, s.jsx)(G.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: a.city })),
                        (null == a ? void 0 : a.contentRating) &&
                            r.push(i, (0, s.jsx)(G.HL, { variant: 'span', size: 'm', weight: 'medium', children: a.contentRating })),
                        (0, s.jsxs)('div', {
                            className: e1().root,
                            id: t,
                            children: [
                                (0, s.jsx)(G.HL, {
                                    variant: 'div',
                                    size: 'm',
                                    weight: 'medium',
                                    className: e1().city,
                                    lineClamp: 1,
                                    children: null == a ? void 0 : a.title,
                                }),
                                (0, s.jsx)('div', { className: e1().info, children: r.map((e, t) => (0, n.cloneElement)(e, { key: t })) }),
                            ],
                        })
                    );
                });
            var at = a(25034),
                aa = a.n(at);
            let as = (0, i.PA)((e) => {
                let { concert: t } = e,
                    a = (0, n.useRef)(String((0, eQ.A)())),
                    r = t.isIdentityExperimentEnabled ? eJ.M : ae;
                return (0, s.jsx)(eZ.V, {
                    artistId: null,
                    viewUuid: a.current,
                    concert: t,
                    radius: 's',
                    className: aa().root,
                    meta: (0, s.jsx)(r, { concert: t }),
                    shouldSendAnalyticsOnHide: !0,
                    shouldShowMask: !0,
                });
            });
            var ar = a(12930),
                ai = a.n(ar);
            let ao = (0, i.PA)((e) => {
                let { album: t } = e;
                return (0, s.jsx)(eo.M, {
                    album: t,
                    className: (0, r.$)(tD().block, ai().root),
                    coverClassName: tD().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    shouldShowReleaseYear: !0,
                });
            });
            var an = a(44129),
                al = a(77276),
                ac = a.n(al);
            let ad = (0, i.PA)((e) => {
                let { data: t } = e,
                    { formatMessage: a } = (0, l.A)();
                return (0, s.jsx)('div', {
                    className: ac().root,
                    children: (0, s.jsx)(an.F, { textButton: a({ id: 'interface-actions.further' }), meta: t, buttonClassName: (0, r.$)(ac().button, ac().important) }),
                });
            });
            var au = a(18608),
                am = a(68930),
                ah = a.n(am);
            let a_ = (0, i.PA)((e) => {
                let { playlist: t } = e;
                return (0, s.jsx)(au.v, {
                    playlist: t,
                    className: (0, r.$)(tD().block, ah().root),
                    coverClassName: tD().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                });
            });
            var ap = a(3912),
                ax = a(44860),
                ab = a.n(ax);
            let aS = (0, i.PA)((e) => {
                let { track: t } = e,
                    { from: a } = (0, eU.f)(),
                    { formatMessage: i } = (0, l.A)(),
                    {
                        settings: { isMobile: o },
                    } = (0, C.g)(),
                    c = { contextData: { type: ea.K.Various, meta: { id: t.entityId }, from: a }, queueParams: { index: 0, entityId: t.id }, loadContextMeta: !0 },
                    u = (0, tK.D)({ playContextParams: c, entityId: t.entityId }),
                    m = (0, n.useCallback)(
                        (e) =>
                            (0, s.jsx)(t1.q, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: (0, r.$)(tD().cover, ab().cover),
                                alt: i({ id: 'entity-names.track-name-by-type' }, { type: (0, tF.y)(t.type), name: t.title }),
                                radius: 'xs',
                                ...e,
                            }),
                        [i, t.coverUri, t.isAvailable, t.isDisliked, t.title, t.type],
                    );
                return (0, s.jsx)(t$.C, {
                    className: (0, r.$)(tD().block, ab().root),
                    track: t,
                    meta: (0, s.jsx)(ap.w, {
                        podcastMetaClassName: (0, r.$)(ab().podcastMeta, ab().important),
                        titleContainerClassName: (0, r.$)(ab().titleContainer, ab().important),
                        textClassName: (0, r.$)(ab().text, ab().important),
                        progressClassName: (0, r.$)(ab().progress, ab().important),
                        track: t,
                        playContextParams: c,
                        withListeningProgress: !0,
                        explicitSize: 'xxxs',
                        titleLineClamp: 2,
                        withAlbumTitleLink: !o,
                    }),
                    playButtonCellRender: m,
                    playButtonIconSize: 'l',
                    controls: (0, s.jsx)(tY.Q, { track: t, utmLink: c.contextData.utmLink, likeIconSize: 'xs' }),
                    ...u,
                    'data-test-id': d.Kq.track.TRACK_PODCAST,
                });
            });
            var aj = a(68846),
                av = a.n(aj);
            let aC = (0, i.PA)((e) => {
                let { album: t } = e;
                return (0, s.jsx)(eo.M, {
                    album: t,
                    className: (0, r.$)(tD().block, av().root),
                    coverClassName: tD().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    description: (0, s.jsx)(z.A, { id: 'entity-names.recently-release' }),
                });
            });
            var aA = a(41544),
                ay = a(60706),
                ag = a.n(ay);
            let aT = (0, i.PA)((e) => {
                let { track: t } = e,
                    { from: a } = (0, eU.f)(),
                    {
                        settings: { isMobile: i },
                    } = (0, C.g)(),
                    o = { contextData: { type: ea.K.Various, meta: { id: t.entityId }, from: a }, queueParams: { index: 0, entityId: t.id }, loadContextMeta: !0 },
                    l = (0, tK.D)({ playContextParams: o, entityId: t.entityId }),
                    c = (0, n.useCallback)(
                        (e) =>
                            (0, s.jsx)(t1.q, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: (0, r.$)(tD().cover, ag().cover),
                                radius: 'xs',
                                ...e,
                            }),
                        [t.coverUri, t.isAvailable, t.isDisliked, t.title],
                    );
                return (0, s.jsx)(t$.C, {
                    className: (0, r.$)(tD().block, ag().root),
                    track: t,
                    meta: (0, s.jsx)(aA.j, { withArtistLink: !i, track: t }),
                    playButtonCellRender: c,
                    playButtonIconSize: 'l',
                    controls: (0, s.jsx)(tY.Q, { track: t, utmLink: o.contextData.utmLink, likeIconSize: 'xs' }),
                    ...l,
                    'data-test-id': d.Kq.track.SEARCH_TRACK_CARD,
                });
            });
            var aI = a(6104),
                ak = a(52512),
                aE = a(98288),
                aP = a(18284),
                af = a(64720),
                aN = a(6304),
                aR = a(51586),
                aB = a.n(aR);
            let aL = (0, i.PA)((e) => {
                let { upcomingAlbum: t } = e,
                    { ref: a, intersectionPropertyId: i } = (0, ak.n)(),
                    { user: o } = (0, C.g)(),
                    { formatMessage: c, formatDate: d } = (0, l.A)(),
                    u = (0, aI.P)(t),
                    m = (0, p.L)(() => {
                        let e = c({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: t.title }),
                            a = t.isPresave ? c({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(a);
                    }),
                    h = (0, n.useCallback)(
                        (e, a) => {
                            var r;
                            return (null == (r = t.artists) ? void 0 : r.length)
                                ? (0, s.jsx)(tW.i, { linkClassName: e, captionClassName: a, artists: t.artists, lineClamp: 1 })
                                : null;
                        },
                        [t.artists],
                    );
                return (0, s.jsxs)(aP.C, {
                    ref: a,
                    'data-intersection-property-id': i,
                    className: (0, r.$)(tD().block, tZ().root, aB().root, aB().important),
                    'aria-label': m,
                    children: [
                        (0, s.jsxs)(ey.t, {
                            className: aB().cover,
                            radius: 'xs',
                            children: [
                                (0, s.jsx)(eN.B, {
                                    className: aB().coverImage,
                                    src: t.coverUri,
                                    size: 100,
                                    alt: c({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: t.title }),
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    fallbackIconSize: 'm',
                                    fallbackIconVariant: 'lock',
                                }),
                                t.coverUri && (0, s.jsx)(W.I, { className: aB().lockIcon, variant: 'lock', size: 'xs' }),
                            ],
                        }),
                        (0, s.jsx)(tJ.r, {
                            title: (0, s.jsx)(G.HL, { className: (0, r.$)(tZ().text, tZ().titleText), size: 'l', variant: 'div', type: 'text', children: t.title }),
                            description: (0, s.jsx)(G.HL, {
                                className: aB().releaseDate,
                                variant: 'div',
                                type: 'entity',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                children: (0, s.jsx)(z.A, { id: 'entity-names.upcoming-album-date', values: { releaseDate: d(t.releaseDate, (0, aE.s)()) } }),
                            }),
                            artistsComponent: h,
                            getDescriptionTexts: t.getDescriptionTexts,
                            explicitMarkVariant: t.explicitDisclaimer,
                        }),
                        (0, s.jsx)(aN.WithOffline, {
                            fallback: (0, s.jsx)(af.c, {
                                size: 'xs',
                                iconSize: 'xs',
                                className: aB().likeButton,
                                isLiked: t.isPresave,
                                onClick: u,
                                disabled: !o.isAuthorized,
                            }),
                        }),
                    ],
                });
            });
            var aO = a(28410),
                aD = a(32911),
                aw = a(98031),
                aM = a(42670),
                aH = a.n(aM);
            let aU = (0, i.PA)((e) => {
                    var t;
                    let { vibe: a } = e;
                    return (0, s.jsx)(aw.H, {
                        className: (0, r.$)(aH().root, aH().important),
                        coverClassName: (0, r.$)(aH().coverClassName, aH().important),
                        playButtonIconSize: 'l',
                        vibe: a,
                        cover: (0, aO.wg)({ uri: a.backgroundImageUrl, color: null == (t = a.colors) ? void 0 : t.average }),
                        description: a.description,
                        agentVariant: aD.h.LARGE,
                    });
                }),
                az = (0, i.PA)((e) => {
                    let { results: t, isShimmerVisible: a, isShimmerActive: i, blockPosition: o, sendSearchFeedback: u } = e,
                        { formatMessage: m } = (0, l.A)(),
                        h = (0, n.useCallback)(
                            (e, a) => {
                                switch (e.type) {
                                    case tc.r.ALBUM:
                                        return (0, s.jsx)(
                                            eH.B,
                                            {
                                                objectType: c.DomainObjectType.Album,
                                                objectId: String(e.data.id),
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(ez.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.id, type: er.o.ALBUM, blockPosition: o, position: a },
                                                    children: (0, s.jsx)(tH, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case tc.r.PLAYLIST:
                                        return (0, s.jsx)(
                                            eH.B,
                                            {
                                                objectType: c.DomainObjectType.Playlist,
                                                objectId: e.data.id,
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(ez.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.id, type: er.o.PLAYLIST, blockPosition: o, position: a },
                                                    children: (0, s.jsx)(a_, { playlist: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case tc.r.RECENT_RELEASE:
                                        return (0, s.jsx)(
                                            eH.B,
                                            {
                                                objectType: c.DomainObjectType.Album,
                                                objectId: String(e.data.id),
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(ez.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.id, type: er.o.ALBUM, blockPosition: o, position: a },
                                                    children: (0, s.jsx)(aC, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case tc.r.WAVE:
                                        return (0, s.jsx)(
                                            eH.B,
                                            {
                                                objectType: c.DomainObjectType.Wave,
                                                objectId: e.data.stationId,
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(ez.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.seedsId, type: er.o.WAVE, blockPosition: o, position: a },
                                                    children: (0, s.jsx)(aU, { vibe: e.data }),
                                                }),
                                            },
                                            e.data.stationId,
                                        );
                                    case tc.r.ARTIST:
                                        return (0, s.jsx)(
                                            eH.B,
                                            {
                                                objectType: c.DomainObjectType.Artist,
                                                objectId: e.data.id,
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(ez.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.id, type: er.o.ARTIST, blockPosition: o, position: a },
                                                    children: (0, s.jsx)(tG, { artist: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case tc.r.UPCOMING:
                                        return (0, s.jsx)(
                                            eH.B,
                                            {
                                                objectType: c.DomainObjectType.UpcomingAlbum,
                                                objectId: String(e.data.id),
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(aL, { upcomingAlbum: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case tc.r.CONCERT:
                                        return (0, s.jsx)(
                                            eH.B,
                                            {
                                                objectType: c.DomainObjectType.Concert,
                                                objectId: e.data.id,
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(as, { concert: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case tc.r.PODCAST:
                                        return (0, s.jsx)(
                                            eH.B,
                                            {
                                                objectType: c.DomainObjectType.Podcast,
                                                objectId: String(e.data.id),
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(ez.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.id, type: er.o.ALBUM, blockPosition: o, position: a },
                                                    children: (0, s.jsx)(ao, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case tc.r.NON_MUSIC:
                                        return (0, s.jsx)(
                                            eH.B,
                                            {
                                                objectType: c.DomainObjectType.Audiobook,
                                                objectId: String(e.data.id),
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(ao, { album: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case tc.r.PODCAST_EPISODE:
                                        return (0, s.jsx)(
                                            eH.B,
                                            {
                                                objectType: c.DomainObjectType.PodcastEpisode,
                                                objectId: e.data.id,
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(aS, { track: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case tc.r.OVERVIEW:
                                        return (0, s.jsx)(ad, { data: e.data }, e.type);
                                    case tc.r.TRACK:
                                        return (0, s.jsx)(
                                            eH.B,
                                            {
                                                objectType: c.DomainObjectType.Track,
                                                objectId: e.data.id,
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(ez.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.entityId, type: er.o.TRACK, blockPosition: o, position: a },
                                                    children: (0, s.jsx)(aT, { track: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case tc.r.CLIP:
                                        return (0, s.jsx)(
                                            eH.B,
                                            {
                                                objectType: c.DomainObjectType.Video,
                                                objectId: String(e.data.clipId),
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(ez.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.clipId, type: er.o.CLIP, blockPosition: o, position: a },
                                                    children: (0, s.jsx)(t7, { clip: e.data }),
                                                }),
                                            },
                                            e.data.clipId,
                                        );
                                    case tc.r.BOOK_CHAPTER:
                                        return (0, s.jsx)(
                                            eH.B,
                                            {
                                                objectType: c.DomainObjectType.AudiobookChapter,
                                                objectId: String(e.data.id),
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(t3, { track: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    default:
                                        return null;
                                }
                            },
                            [o, t.length, u],
                        ),
                        _ = (0, n.useMemo)(() => t.map((e, t) => h(e, t)).filter((e) => (0, n.isValidElement)(e)), [h, t, t.length]);
                    return a
                        ? (0, s.jsx)(tR, { isShimmerActive: i })
                        : _.length
                          ? (0, s.jsx)(tt.F, {
                                blockId: td.h.SEARCH_BEST_RESULTS,
                                blockType: td.h.SEARCH_BEST_RESULTS,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: _.length,
                                children: (0, s.jsx)('div', {
                                    className: (0, r.$)(tL().root, { [tL().root_withSingleResult]: 1 === _.length }),
                                    role: 'group',
                                    'aria-label': m({ id: 'search-results.best' }),
                                    'data-test-id': d.e8.search.SEARCH_BEST_RESULTS,
                                    children: _,
                                }),
                            })
                          : null;
                });
            var aV = a(738),
                aG = a(66284);
            let aX = (0, i.PA)((e) => {
                    let {
                            forwardRef: t,
                            items: a = [],
                            title: r,
                            sendSearchFeedback: i,
                            blockPosition: o = 0,
                            containerClassName: n,
                            headerClassName: l,
                            className: c,
                            itemClassName: d,
                            isShimmerVisible: u,
                            isShimmerActive: h,
                            isClipBlock: _,
                            ...p
                        } = e,
                        { search: x } = (0, C.g)(),
                        b = (0, t4.d)(),
                        S = a.filter((e) => e.type !== m.n.PODCAST_EPISODE);
                    return (x.isResolved && 0 === S.length) || (_ && !b)
                        ? null
                        : (0, s.jsx)(aG.O, {
                              isShimmerVisible: u,
                              isShimmerActive: h,
                              className: c,
                              containerClassName: n,
                              headerClassName: l,
                              showHeaderShimmer: !0,
                              title: r,
                              ref: t,
                              ...(0, et.OZ)(p),
                              itemClassName: d,
                              children: S.map((e, t) => {
                                  switch (e.type) {
                                      case m.n.ALBUM:
                                          return (0, s.jsx)(
                                              ez.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.id, type: er.o.ALBUM, blockPosition: o, position: t },
                                                  children: (0, s.jsx)(ei.a, { album: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.id,
                                          );
                                      case m.n.ARTIST:
                                          return (0, s.jsx)(
                                              ez.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.id, type: er.o.ARTIST, blockPosition: o, position: t },
                                                  children: (0, s.jsx)(en.a, { artist: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.id,
                                          );
                                      case m.n.PLAYLIST:
                                          return (0, s.jsx)(
                                              ez.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.id, type: er.o.PLAYLIST, blockPosition: o, position: t },
                                                  children: (0, s.jsx)(ec.B, { playlist: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.key,
                                          );
                                      case m.n.UGC_TRACK:
                                      case m.n.TRACK:
                                          return (0, s.jsx)(
                                              ez.N.Provider,
                                              {
                                                  value: {
                                                      sendSearchFeedback: i,
                                                      id: e.data.albumId ? ''.concat(e.data.id, ':').concat(e.data.albumId) : e.data.id,
                                                      type: er.o.TRACK,
                                                      blockPosition: o,
                                                      position: t,
                                                  },
                                                  children: (0, s.jsx)(aV.w, { track: e.data, overrideContextType: es.b.Search }),
                                              },
                                              e.data.id,
                                          );
                                      case m.n.CLIP:
                                          return (0, s.jsx)(
                                              ez.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.clipId, type: er.o.WAVE, blockPosition: o, position: t },
                                                  children: (0, s.jsx)(el.F, { clip: e.data }),
                                              },
                                              e.data.clipId,
                                          );
                                      case m.n.PODCAST:
                                          return (0, s.jsx)(
                                              ez.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.id, type: er.o.PODCAST, blockPosition: o, position: t },
                                                  children: (0, s.jsx)(ei.a, { album: e.data, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }),
                                              },
                                              e.data.id,
                                          );
                                      case m.n.WAVE:
                                          return (0, s.jsx)(
                                              ez.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.stationId, type: er.o.WAVE, blockPosition: 0, position: t },
                                                  children: (0, s.jsx)(aw.H, {
                                                      vibe: e.data,
                                                      cover: e.data.cover,
                                                      description: e.data.description,
                                                      agentVariant: aD.h.SMALL,
                                                  }),
                                              },
                                              e.data.stationId,
                                          );
                                  }
                              }),
                          });
                }),
                aY = (0, n.forwardRef)((e, t) => (0, s.jsx)(aX, { forwardRef: t, ...e }));
            var a$ = a(92043),
                aW = a.n(a$);
            let aF = (0, i.PA)((e) => {
                    let {
                            forwardRef: t,
                            className: a,
                            results: i,
                            bestResults: o,
                            sendSearchFeedback: c,
                            searchCorrectedText: h,
                            isShimmerVisible: _,
                            isShimmerActive: p,
                            q2vResults: x,
                            requestAwakeLumenModal: b,
                            ...S
                        } = e,
                        { formatMessage: j } = (0, l.A)(),
                        v = (0, ev.f)(),
                        { isVisible: C, vibe: A } = eq(x, p),
                        y = (0, n.useMemo)(() => {
                            let e = {
                                [m.n.ALL]: { message: j({ id: 'search-results.best' }), type: m.n.ALL, items: [] },
                                [m.n.ARTIST]: { message: j({ id: 'search-results.artist' }), type: m.n.ARTIST, items: [] },
                                [m.n.PODCAST]: { message: j({ id: 'search-results.podcasts-and-books' }), type: m.n.PODCAST, items: [] },
                                [m.n.ALBUM]: { message: j({ id: 'search-results.album' }), type: m.n.ALBUM, items: [] },
                                [m.n.PLAYLIST]: { message: j({ id: 'search-results.playlist' }), type: m.n.PLAYLIST, items: [] },
                                [m.n.CLIP]: { message: j({ id: 'search-results.clip' }), type: m.n.CLIP, items: [] },
                            };
                            i.filter((e) => !!e).forEach((t) => {
                                if (t) {
                                    var a, s;
                                    (null == (a = e[t.type]) || a.items.push(t), null == (s = e[m.n.ALL]) || s.items.push(t));
                                }
                            });
                            let t = {
                                [m.n.ARTIST]: d.e8.search.SEARCH_MIXED_ARTIST,
                                [m.n.PODCAST]: d.e8.search.SEARCH_MIXED_PODCAST,
                                [m.n.ALBUM]: d.e8.search.SEARCH_MIXED_ALBUM,
                                [m.n.PLAYLIST]: d.e8.search.SEARCH_MIXED_PLAYLIST,
                                [m.n.CLIP]: d.e8.search.SEARCH_MIXED_CLIP,
                                [tc.r.PODCAST]: d.e8.search.SEARCH_MIXED_BEST_PODCAST,
                                [tc.r.OVERVIEW]: d.e8.search.SEARCH_MIXED_BEST_OVERVIEW,
                                [tc.r.PODCAST_EPISODE]: d.e8.search.SEARCH_MIXED_BEST_PODCAST_EPISODE,
                                [tc.r.NON_MUSIC]: d.e8.search.SEARCH_MIXED_BEST_NON_MUSIC,
                            };
                            return Object.getOwnPropertyNames(e).map((a, r) => {
                                let i = e[a],
                                    l = i.type === m.n.CLIP;
                                if (i.type === m.n.ALL) {
                                    let e = i.items
                                        .map((e, t) => {
                                            let {
                                                objectPosX: a,
                                                objectPosY: s,
                                                objectsCount: o,
                                            } = (0, tu.$)({ index: t, count: i.items.length, itemsCountPerColumn: 3, showedItemsCountInBlock: 6 });
                                            return (0, th.G)({
                                                item: e,
                                                index: t,
                                                sendSearchFeedback: c,
                                                blockPosition: r,
                                                objectPosX: a,
                                                objectPosY: s,
                                                objectsCount: o,
                                            });
                                        })
                                        .filter((e) => (0, n.isValidElement)(e));
                                    return (0, s.jsxs)(
                                        n.Fragment,
                                        {
                                            children: [
                                                (0, s.jsx)(az, { results: o, isShimmerVisible: _, isShimmerActive: p, blockPosition: r, sendSearchFeedback: c }),
                                                (0, s.jsx)(tt.F, {
                                                    blockId: td.h.SEARCH_OPEN_BEST_RESULTS,
                                                    blockType: td.h.SEARCH_OPEN_BEST_RESULTS,
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    objectsCount: e.length,
                                                    children: (0, s.jsx)(tE, {
                                                        containerClassName: aW().blockMixed,
                                                        className: aW().block,
                                                        maxColumns: 2,
                                                        itemsPerColumn: 3,
                                                        showControls: !0,
                                                        'aria-label': j({ id: 'search-results.other-results' }),
                                                        isShimmerVisible: _,
                                                        isShimmerActive: p,
                                                        children: e,
                                                    }),
                                                }),
                                            ],
                                        },
                                        r,
                                    );
                                }
                                let d = t[i.type];
                                return (0, s.jsx)(
                                    aY,
                                    {
                                        className: aW().block,
                                        headerClassName: aW().blockHeader,
                                        containerClassName: aW().blockCarousel,
                                        blockPosition: r,
                                        items: i.items,
                                        title: i.message,
                                        sendSearchFeedback: c,
                                        isShimmerVisible: _,
                                        isShimmerActive: p,
                                        isClipBlock: l,
                                        ...(d ? { 'data-test-id': d } : {}),
                                    },
                                    r,
                                );
                            });
                        }, [j, i, c, _, p, o]);
                    return (0, s.jsxs)(F.N, {
                        className: (0, r.$)(aW().root, a),
                        containerClassName: aW().container,
                        ref: t,
                        ...(0, et.OZ)(S),
                        children: [
                            (0, s.jsxs)('div', {
                                className: aW().content,
                                children: [
                                    h && (0, s.jsx)('div', { className: aW().correctedTextBlock, children: h }),
                                    (0, s.jsxs)(tm.h, {
                                        tabId: u.$.TOP,
                                        tabPos: 1,
                                        isTabSelectedByDefault: !0,
                                        children: [
                                            v && C && (0, s.jsx)(tr, { requestAwakeLumenModal: b, sendSearchFeedback: c, vibe: A }),
                                            (0, s.jsx)('div', { className: aW().items, children: y }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsx)(q.A, { children: (0, s.jsx)(K.w, { className: aW().footer }) }),
                        ],
                    });
                }),
                aK = (0, n.forwardRef)((e, t) => (0, s.jsx)(aF, { forwardRef: t, ...e }));
            var aq = a(89257),
                aQ = a(82196),
                aZ = a(53690),
                aJ = a(40110),
                a0 = a(95858),
                a1 = a(10322),
                a2 = a(59858),
                a8 = a(89192),
                a3 = a(30716),
                a9 = a(53712),
                a4 = a(42574),
                a6 = a(36159),
                a5 = a(6969),
                a7 = a(83918),
                se = a(69041),
                st = a(79396),
                sa = a(9931);
            let ss = Math.floor(eF.k / 3);
            var sr = a(62152),
                si = a.n(sr),
                so = a(32113),
                sn = a(41915),
                sl = a(95388),
                sc = a(3260),
                sd = a.n(sc);
            let su = (0, i.PA)((e) => {
                let { isShimmerVisible: t, isShimmerActive: a, mixes: r } = e,
                    { formatMessage: i } = (0, l.A)(),
                    o = (0, n.useMemo)(
                        () =>
                            t
                                ? (0, sl.k)({ isActive: a, withInfo: !1 })
                                : r.map((e) =>
                                      (0, s.jsx)(
                                          sn.N,
                                          { title: e.title, weblink: e.weblink, covers: e.covers, coverSize: 80, imagesLayoutType: e.imagesLayoutType },
                                          e.id,
                                      ),
                                  ),
                        [a, t, r],
                    );
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(tx.T, { className: sd().carouselHeader, title: i({ id: 'entity-names.mixes' }), titleSize: 'xs', viewAllActionLink: a9.Z.mixes.href }),
                        (0, s.jsx)(tp.F, { className: sd().carouselBlock, itemClassName: sd().mixItem, children: o }),
                    ],
                });
            });
            var sm = a(95214);
            let sh = (0, i.PA)((e) => {
                let { className: t } = e,
                    {
                        settings: { isMobile: a },
                        search: r,
                    } = (0, C.g)();
                return (r.mixes.loadingState === a6.G.IDLE && (0, n.use)(r.mixes.getMixes(!1)), a)
                    ? (0, s.jsx)(su, { isShimmerVisible: r.mixes.isLoading || r.mixes.isRejected, isShimmerActive: r.mixes.isLoading, mixes: r.mixes.items })
                    : (0, s.jsx)(sm.n, {
                          isShimmerVisible: r.mixes.isLoading || r.mixes.isRejected,
                          isShimmerActive: r.mixes.isLoading,
                          mixes: r.mixes.items,
                          className: t,
                          withTitle: !0,
                      });
            });
            var s_ = a(78631),
                sp = a.n(s_);
            let sx = (0, i.PA)(() => {
                let { search: e, user: t } = (0, C.g)(),
                    { formatMessage: a } = (0, l.A)(),
                    r = e.historyPage.items;
                if (
                    ((0, n.useEffect)(
                        () => () => {
                            var t;
                            (null == (t = location) ? void 0 : t.pathname) !== a9.Z.searchHistory.href && e.resetHistoryStateRequest();
                        },
                        [e],
                    ),
                    e.isHistoryReady && t.account.data.uid && (0, n.use)(e.getHistory({ userId: t.account.data.uid })),
                    0 === r.length)
                )
                    return null;
                let i = r.map((e, t) => (0, th.G)({ item: e, index: t, pageId: eM._Q.SEARCH })).filter((e) => (0, n.isValidElement)(e));
                return (0, s.jsx)('section', {
                    className: sp().root,
                    children: (0, s.jsx)(tE, {
                        headerClassName: sp().header,
                        containerClassName: sp().content,
                        isShimmerVisible: e.isHistoryShimmerVisible,
                        isShimmerActive: e.isHistoryLoading,
                        title: a({ id: 'search.history' }),
                        viewAllAction: a9.Z.searchHistory.href,
                        maxColumns: 2,
                        itemsPerColumn: 4,
                        showControls: !0,
                        children: i,
                    }),
                });
            });
            var sb = a(77435),
                sS = a(10971),
                sj = a.n(sS);
            let sv = (0, i.PA)(() => {
                    let { search: e, user: t } = (0, C.g)(),
                        { formatMessage: a } = (0, l.A)(),
                        r = (0, sb.t)(e.resetHistoryItems),
                        i = e.historyPage.items;
                    if (
                        ((0, n.useEffect)(
                            () => () => {
                                var t;
                                (null == (t = location) ? void 0 : t.pathname) !== a9.Z.searchHistory.href && e.resetHistoryStateRequest();
                            },
                            [e],
                        ),
                        e.isHistoryReady && t.account.data.uid && (0, n.use)(e.getHistory({ userId: t.account.data.uid })),
                        0 === i.length)
                    )
                        return null;
                    let o = i.map((e, t) => (0, th.G)({ item: e, index: t, pageId: eM._Q.SEARCH })).filter((e) => (0, n.isValidElement)(e));
                    return (0, s.jsxs)('div', {
                        children: [
                            (0, s.jsx)(tE, {
                                headerClassName: sj().header,
                                containerClassName: sj().mixedEntitiesBlock,
                                isShimmerVisible: e.isHistoryShimmerVisible,
                                isShimmerActive: e.isHistoryLoading,
                                title: a({ id: 'search.history' }),
                                viewAllAction: a9.Z.searchHistory.href,
                                titleSize: 'xs',
                                children: o,
                            }),
                            (0, s.jsx)('div', {
                                className: sj().buttonContainer,
                                children: (0, s.jsx)(V.$, {
                                    className: sj().button,
                                    'aria-label': a({ id: 'search.clear-history' }),
                                    disabled: !i.length,
                                    size: 'default',
                                    radius: 'xxxl',
                                    onClick: r,
                                    children: (0, s.jsx)(G.HL, { variant: 'span', size: 'm', type: 'text', children: (0, s.jsx)(z.A, { id: 'search.clear-history' }) }),
                                }),
                            }),
                        ],
                    });
                }),
                sC = (0, i.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, C.g)();
                    return e ? (0, s.jsx)(sv, {}) : (0, s.jsx)(sx, {});
                });
            var sA = a(78299),
                sy = a(1407),
                sg = a(67379),
                sT = a(76945),
                sI = a(59450),
                sk = a(84e3),
                sE = a(79670),
                sP = a(25488),
                sf = a(63494);
            let sN = [a5.K.BEST_PLAY, a5.K.SEEDS];
            var sR = a(10603);
            let sB = (0, i.PA)((e) => {
                    let { autoPlaySearchText: t, searchResults: a, setContentScrollRef: i, contentScrollRef: l, hasSearchText: u } = e,
                        {
                            lumen: m,
                            user: h,
                            search: p,
                            settings: { isMobile: x },
                        } = (0, C.g)(),
                        [b, S] = (0, em.d)(),
                        j = (0, n.useRef)(t),
                        v = t !== j.current,
                        A = m.isTriedToLoadData && !m.isAwakened;
                    ((e) => {
                        let { isEnabled: t, shouldCancel: a } = e,
                            { sonataState: s, vibe: r } = (0, C.g)(),
                            { pageId: i } = (0, ek.$)(),
                            l = (0, o.useSearchParams)(),
                            d = (0, sf.z)(),
                            u = ((e) => {
                                let { entityId: t, entityType: a, objectType: s } = e,
                                    r = (0, sI.st)(),
                                    i = (0, sk.U)(),
                                    { pageId: o, pagePlacement: n, pageStyle: l } = (0, ek.$)(),
                                    { blockId: d, blockType: u } = (0, eI.N)(),
                                    { objectType: m } = (0, sP.J)();
                                return (0, _.c)(() => {
                                    if (!r || !o) return;
                                    let e = {
                                            entityId: null != d ? d : t,
                                            entityType: null != u ? u : a,
                                            objectType: null != m ? m : s,
                                            pageId: sE.W[o],
                                            pagePlacement: null != n ? n : c.PagePlacements.Fullscreen,
                                            pageStyle: null != l ? l : c.PageStyles.Fullscreen,
                                        },
                                        h = (0, sg.F)({ params: e, logger: i, context: 'useSendEventOnScreenStarted' });
                                    h && (0, sT.e7)(r.evgenInstance, h);
                                });
                            })({ entityId: c.EntityTypes.Deeplink, entityType: c.EntityTypes.Deeplink, objectType: c.DomainObjectType.NonApplicable }),
                            m = (0, n.useRef)(!1),
                            h = l.get(a5.K.BEST_PLAY),
                            p = l.get(a5.K.SEEDS),
                            x = 'true' === h && p,
                            b = (null !== h || null !== p) && !x,
                            S = (0, n.useRef)(x ? x.split(',') : []).current,
                            j = S.length > 0,
                            { isPlaying: v, togglePlay: A } = (0, eP.B)({ blockIdForFrom: c.EntityTypes.Q2vWave, pageIdForFrom: i, seeds: S });
                        ((0, n.useEffect)(() => {
                            b && d(sN);
                        }, [b, d]),
                            (0, n.useEffect)(() => {
                                let e = !a && !t;
                                !m.current && j && !e && ((m.current = !0), a || v || r.isApplying || (s.setShouldApplyYnisonState(!1), A(), d(sN), u()));
                            }, [j, t, v, d, u, a, s, A, r.isApplying]));
                    })({ isEnabled: m.isAwakened, shouldCancel: v || A });
                    let y = p.landing.hasUpperBlocks,
                        g = x || y,
                        T = !x && y;
                    return u
                        ? a
                        : h.isAuthorized
                          ? (0, s.jsx)(sy.h, {
                                scrollElement: T ? null : l,
                                headerElement: b,
                                children: (0, s.jsxs)(F.N, {
                                    className: (0, r.$)(si().scrollableContent, { [si().scrollableContent_withUpperBlocks]: y }),
                                    containerClassName: si().main,
                                    ref: i,
                                    'data-test-id': d.Xk.search.SEARCH_PAGE_CONTENT,
                                    children: [
                                        (0, s.jsx)(so.E, {
                                            containerClassName: (0, r.$)(si().skeletonContainer, { [si().skeletonContainer_withUpperBlocks]: y }),
                                            headerClassName: T ? (0, r.$)(si().skeletonHeaderWithUpperBlocks, si().important) : void 0,
                                            stickyHeaderClassName: T
                                                ? (0, r.$)(si().skeletonStickyHeaderWithUpperBlocks, si().important)
                                                : (0, r.$)(si().skeletonStickyHeader, si().important),
                                            stickyHeaderTabIndex: g ? null : 0,
                                            headerConcealerComponent: (0, s.jsx)('div', { ref: S }),
                                            landing: p.landing,
                                            errorComponent: (0, s.jsx)(sA.SomethingWentWrong, { className: si().error, withBackwardControl: !1 }),
                                            headerVariant: g ? sR.V.COMPOSITE : sR.V.STICKY,
                                        }),
                                        (0, s.jsx)(q.A, { children: (0, s.jsx)(K.w, { className: si().footer }) }),
                                    ],
                                }),
                            })
                          : (0, s.jsxs)(F.N, {
                                className: si().scrollableContent,
                                containerClassName: si().main,
                                ref: i,
                                children: [
                                    (0, s.jsx)(n.Suspense, {
                                        children: (0, s.jsx)(tt.F, {
                                            blockId: td.h.SEARCH_HISTORY,
                                            blockType: td.h.SEARCH_HISTORY,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            blockIdForFrom: td.h.SEARCH_HISTORY,
                                            objectsCount: p.historyPage.items.length,
                                            children: (0, s.jsx)(sC, {}),
                                        }),
                                    }),
                                    (0, s.jsx)(n.Suspense, { children: (0, s.jsx)(sh, { className: si().mixes }) }),
                                    (0, s.jsx)(q.A, { children: (0, s.jsx)(K.w, { className: si().footer }) }),
                                ],
                            });
                }),
                sL = (0, i.PA)(() => {
                    var e;
                    let t = (0, ev.f)(),
                        { awakeLumenModal: a, requestAwakeLumenModal: i } = (0, aQ.z)(),
                        S = (0, b.zb)(0),
                        [j, v] = (0, n.useState)(u.$.TOP),
                        [A, y] = (0, n.useState)(!1),
                        [g, T] = (0, n.useState)(null),
                        { formatMessage: I } = (0, l.A)(),
                        { search: k, experiments: E, location: P, lumen: f, user: N, settings: R } = (0, C.g)(),
                        { isMobile: B } = R,
                        L = E.checkExperiment(eG.z.WebNextQueryToVibeInputAnimation, 'on'),
                        { contentScrollRef: O, setContentScrollRef: D } = (0, a8.g)(),
                        w = ((e) => {
                            let { formatMessage: t } = (0, l.A)(),
                                a = (0, t4.d)(),
                                { experiments: s } = (0, C.g)(),
                                r = s.checkExperiment(eG.z.WebNextSearchConcerts, 'on');
                            return e
                                ? [{ id: u.$.TOP, displayName: t({ id: 'search-filters.top' }) }, ...e].filter((e) => {
                                      if ((e.id !== u.$.CLIP || a) && (e.id !== u.$.CONCERT || r)) return e;
                                  })
                                : [{ id: u.$.TOP, displayName: t({ id: 'search-filters.top' }) }];
                        })(k.filters),
                        M = (0, a7.X)(),
                        [H, z] = (0, n.useState)(() => {
                            var e;
                            return decodeURIComponent(null != (e = new URLSearchParams(P.searchParams).get(a5.K.TEXT)) ? e : '');
                        }),
                        V = (0, n.useRef)(H),
                        G = H.length > 0,
                        X = A && null != (e = k.searchCorrectedText) ? e : H;
                    (E.checkExperiment(eG.z.WebNextDisableSearch, 'on') && (0, o.redirect)(a9.Z.main.href),
                        (0, a3.J)(k.landing.loadingState === a6.G.RESOLVE),
                        (0, n.useEffect)(
                            () => () => {
                                (k.reset(), N.isAuthorized && k.landing.reset());
                            },
                            [N.isAuthorized, E, k],
                        ),
                        (0, n.useEffect)(() => {
                            f.isEnabled && f.getData();
                        }, [f]));
                    let Y = (0, _.c)((e, t) => {
                            (k.resetResults(), 0 !== e.length && k.getSearchResults({ text: decodeURIComponent(e), filter: t }));
                        }),
                        W = (0, _.c)(() => {
                            y(!0);
                        }),
                        F = (0, _.c)((e) => {
                            e.trim() && T(e);
                        }),
                        K = (0, _.c)((e) => {
                            var t, a;
                            if (!S.onTabChange || e === S.value) return;
                            S.onTabChange(e);
                            let s = null != (a = null == (t = w[e]) ? void 0 : t.id) ? a : u.$.TOP;
                            (Object.values(u.$).includes(s) && (v(s), Y(V.current, s)), O && (O.scrollTop = 0));
                        }),
                        q = (0, _.c)((e) => {
                            let t = e.trim(),
                                a = encodeURIComponent(t);
                            (z(a),
                                (V.current = a),
                                0 !== S.value && K(0),
                                Y(a, u.$.TOP),
                                k.history.setShouldUpdateHistory(!0),
                                k.resetSearchCorrectedText(),
                                y(!1),
                                T(null));
                            let s = new URL(window.location.href);
                            (s.searchParams.set(a5.K.TEXT, t), M(String(s)));
                        }),
                        Q = (0, _.c)((e) => {
                            var t, a;
                            let { id: s, type: r, blockPosition: i, position: o, feedbackType: n } = e;
                            k.sendFeedback({
                                blockType: r,
                                entityId: ''.concat(r, ':').concat(s),
                                timestamp: new Date().toISOString(),
                                searchRequestId: k.searchRequestId,
                                query: V.current,
                                clickType: n,
                                blockPosition: i,
                                position: o,
                                page: null != (a = null == (t = k.pagesLoader.pager) ? void 0 : t.page) ? a : 0,
                            });
                        }),
                        Z = ((e) => {
                            let { search: t, searchText: a, searchFilter: s } = e;
                            return (0, n.useCallback)(
                                function (e) {
                                    var r, i;
                                    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                        n = t.pagesLoader.pager;
                                    if (!n) return;
                                    let l = null != (i = null == (r = t.pagesLoader.items) ? void 0 : r.length) ? i : 0,
                                        c = e.endIndex * o;
                                    if (l > 0 && c >= l - ss) {
                                        if (!t.pagesLoader.hasMorePages) return;
                                        let e = Math.ceil(l / n.perPage);
                                        t.pagesLoader.isPageNeedToLoad(e) && t.getSearchResults({ text: decodeURIComponent(a), filter: s, page: e });
                                    }
                                },
                                [t, a, s],
                            );
                        })({ search: k, searchText: V.current, searchFilter: j }),
                        J = (0, n.useMemo)(
                            () => (k.searchCorrectedText ? (0, s.jsx)($, { searchCorrectedText: k.searchCorrectedText, onCorrectText: W }) : null),
                            [W, k.searchCorrectedText],
                        ),
                        et = (0, p.L)(() => {
                            var e, t, a, r, o;
                            if (k.isEmpty) return (0, s.jsx)(ee, { searchCorrectedText: J });
                            let n = {
                                className: si().searchResults,
                                isShimmerVisible: k.isShimmerVisible,
                                isShimmerActive: k.isLoading,
                                results: null != (e = k.pagesLoader.items) ? e : [],
                                requestsCount: k.pagesLoader.requestsCount,
                                bestResults: k.bestResults,
                                q2vResults: k.q2vResults,
                                sendSearchFeedback: Q,
                                searchCorrectedText: J,
                                getDataByRange: Z,
                                ref: D,
                                requestAwakeLumenModal: i,
                            };
                            switch (j) {
                                case u.$.TOP:
                                    return (0, s.jsx)(tm.h, {
                                        tabId: j,
                                        tabPos: k.filterPosition(j),
                                        isTabSelectedByDefault: !1,
                                        children: (0, s.jsx)(aK, { ...n, 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_TOP }),
                                    });
                                case u.$.TRACK:
                                    return (0, s.jsx)(tm.h, {
                                        tabId: j,
                                        tabPos: k.filterPosition(j),
                                        isTabSelectedByDefault: !1,
                                        children: (0, s.jsx)(tt.F, {
                                            blockId: aJ.U.SEARCH,
                                            blockType: c.EntityTypes.Tracks,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (t = k.pagesLoader.items) ? void 0 : t.length,
                                            children: (0, s.jsx)(tl, { ...n, filter: j, variant: 'list', 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_TRACK }),
                                        }),
                                    });
                                case u.$.ALBUM:
                                    return (0, s.jsx)(tl, { ...n, filter: m.n.ALBUM, 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_ALBUM });
                                case u.$.PLAYLIST:
                                    return (0, s.jsx)(tl, { ...n, filter: m.n.PLAYLIST, 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_PLAYLIST });
                                case u.$.ARTIST:
                                    return (0, s.jsx)(tl, { ...n, filter: m.n.ARTIST, 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_ARTIST });
                                case u.$.PODCAST:
                                    return (0, s.jsx)(tm.h, {
                                        tabId: j,
                                        tabPos: k.filterPosition(j),
                                        isTabSelectedByDefault: !1,
                                        children: (0, s.jsx)(tt.F, {
                                            blockId: aJ.U.SEARCH,
                                            blockType: c.EntityTypes.Podcasts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (a = k.pagesLoader.items) ? void 0 : a.length,
                                            children: (0, s.jsx)(tl, {
                                                ...n,
                                                filter: m.n.PODCAST,
                                                variant: 'list',
                                                'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_PODCAST,
                                            }),
                                        }),
                                    });
                                case u.$.BOOK:
                                    return (0, s.jsx)(tm.h, {
                                        tabId: j,
                                        tabPos: k.filterPosition(j),
                                        isTabSelectedByDefault: !1,
                                        children: (0, s.jsx)(tt.F, {
                                            blockId: aJ.U.SEARCH,
                                            blockType: c.EntityTypes.Podcasts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (r = k.pagesLoader.items) ? void 0 : r.length,
                                            children: (0, s.jsx)(tl, { ...n, filter: m.n.BOOK, variant: 'list', 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_BOOK }),
                                        }),
                                    });
                                case u.$.CLIP:
                                    return (0, s.jsx)(tl, { ...n, filter: m.n.CLIP, 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_CLIP });
                                case u.$.WAVES:
                                    return (0, s.jsx)(tm.h, {
                                        tabId: j,
                                        tabPos: k.filterPosition(j),
                                        isTabSelectedByDefault: !1,
                                        children: (0, s.jsx)(tl, { ...n, filter: m.n.WAVE, 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_WAVES }),
                                    });
                                case u.$.CONCERT:
                                    return (0, s.jsx)(tm.h, {
                                        tabId: j,
                                        tabPos: k.filterPosition(j),
                                        isTabSelectedByDefault: !1,
                                        children: (0, s.jsx)(tt.F, {
                                            blockId: aJ.U.SEARCH,
                                            blockType: c.EntityTypes.Concerts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (o = k.pagesLoader.items) ? void 0 : o.length,
                                            children: (0, s.jsx)(tl, { ...n, filter: m.n.CONCERT, 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_CONCERT }),
                                        }),
                                    });
                                default:
                                    return J;
                            }
                        }),
                        ea = (0, n.useMemo)(() => {
                            if (G)
                                return (0, s.jsx)(se.F, {
                                    className: si().carousel,
                                    carouselElement: (0, s.jsx)(sa.wI, {
                                        className: si().tabs,
                                        ...S,
                                        onTabChange: K,
                                        children: w.map((e, t) =>
                                            (0, s.jsx)(
                                                st.o,
                                                { className: (0, r.$)(si().tab, { [si().tab_selected]: t === S.value }), title: e.displayName, value: t },
                                                t,
                                            ),
                                        ),
                                    }),
                                });
                        }, [w, K, S, G]),
                        es = (0, p.L)(() => {
                            let e = t ? I({ id: 'search.input-placeholder-q2v' }) : I({ id: 'search.input-placeholder' }),
                                a = {
                                    className: si().input,
                                    autoFocus: !0,
                                    initialValue: V.current,
                                    placeholder: e,
                                    onChange: q,
                                    resetButtonAriaLabel: I({ id: 'interface-actions.reset-search-input' }),
                                    correctedValue: null != g ? g : A ? k.searchCorrectedText : null,
                                    innerInputProps: { 'data-test-id': d.Xk.search.SEARCH_PAGE_SEARCH_INPUT },
                                    resetButtonProps: { 'data-test-id': d.Xk.search.SEARCH_PAGE_SEARCH_INPUT_RESET_BUTTON },
                                    searchIconProps: { 'data-test-id': d.Xk.search.SEARCH_PAGE_SEARCH_INPUT_ICON },
                                };
                            return L ? (0, s.jsx)(U, { ...a, lumenColor: aZ.R }) : (0, s.jsx)(x.D, { ...a });
                        }),
                        er = (0, _.c)(() => {
                            if (k.landing.isLoaded) return k.landing.getSkeleton({ id: h.p.SEARCH, showWizard: N.settings.showWizard }, { preloadBlocksCount: 2 });
                        });
                    return (
                        k.isNeededToLoad && G && (0, n.use)(k.getSearchResults({ text: decodeURIComponent(H), filter: j })),
                        N.isAuthorized &&
                            k.landing.isNeededToLoad &&
                            !G &&
                            (0, n.use)(k.landing.getSkeleton({ id: h.p.SEARCH, showWizard: N.settings.showWizard }, { preloadBlocksCount: 2 })),
                        (0, s.jsx)(a1.n, {
                            pageId: eM._Q.SEARCH,
                            displayReasonId: k.searchRequestId,
                            children: (0, s.jsxs)(a2.l, {
                                skeleton: h.p.SEARCH,
                                children: [
                                    a,
                                    (0, s.jsx)(a4.m.Provider, {
                                        value: F,
                                        children: (0, s.jsxs)('div', {
                                            className: (0, r.$)(si().root, { [si().root_showFilters]: G, [si().root_mobile]: B }),
                                            'data-test-id': d.Xk.search.SEARCH_PAGE,
                                            children: [
                                                (0, s.jsxs)('div', {
                                                    className: si().header,
                                                    'data-test-id': d.Xk.search.SEARCH_PAGE_HEADER_CONTAINER,
                                                    children: [es, ea],
                                                }),
                                                (0, s.jsx)('div', {
                                                    className: si().content,
                                                    children: (0, s.jsx)(a0.j, {
                                                        children: (0, s.jsx)(sB, {
                                                            autoPlaySearchText: X,
                                                            hasSearchText: G,
                                                            contentScrollRef: O,
                                                            setContentScrollRef: D,
                                                            searchResults: et,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, s.jsx)(aq.p, { onFinishSuccess: er }),
                                ],
                            }),
                        })
                    );
                });
        },
        83020: (e) => {
            e.exports = { root: 'SearchBestResultsArtistBlock_root__ZLcy4' };
        },
        85759: (e) => {
            e.exports = {
                root: 'SearchBestResultsShimmer_root__xMCOZ',
                container: 'SearchBestResultsShimmer_container__Je48X',
                entity: 'SearchBestResultsShimmer_entity____sr1',
                important: 'SearchBestResultsShimmer_important__vbFUa',
                cover: 'SearchBestResultsShimmer_cover__rzY5m',
                meta: 'SearchBestResultsShimmer_meta__GlLPe',
                title: 'SearchBestResultsShimmer_title__AXYX8',
                subtitle: 'SearchBestResultsShimmer_subtitle__IULSY',
            };
        },
        87010: (e) => {
            e.exports = { root: 'SearchBestResultsAlbumBlock_root__j7nJ4' };
        },
        90115: (e) => {
            e.exports = {
                viewport: 'AnimatedSearchInputText_viewport__u75Lt',
                phrase: 'AnimatedSearchInputText_phrase__4UX_G',
                phrase_last: 'AnimatedSearchInputText_phrase_last__UEo_B',
                phraseContent: 'AnimatedSearchInputText_phraseContent__GDAaa',
                text: 'AnimatedSearchInputText_text__Yinjg',
                base: 'AnimatedSearchInputText_base__49jn_',
                gradient: 'AnimatedSearchInputText_gradient__ET9p_',
                'animated-search-input-text-gradient': 'AnimatedSearchInputText_animated-search-input-text-gradient__u_iqf',
                gradientStop: 'AnimatedSearchInputText_gradientStop___ehIy',
                gradientStop_start: 'AnimatedSearchInputText_gradientStop_start__y1iyr',
                gradientStop_middle: 'AnimatedSearchInputText_gradientStop_middle__7Ojsx',
                gradientStop_end: 'AnimatedSearchInputText_gradientStop_end__suNEa',
                root: 'AnimatedSearchInputText_root__3H8oP',
                'animated-search-input-text-phrase': 'AnimatedSearchInputText_animated-search-input-text-phrase__xxBCh',
                'animated-search-input-text-phrase-last': 'AnimatedSearchInputText_animated-search-input-text-phrase-last__zII_U',
                root_active: 'AnimatedSearchInputText_root_active__mXt1h',
                root_safari: 'AnimatedSearchInputText_root_safari__OMxq_',
                'animated-search-input-text-phrase-safari': 'AnimatedSearchInputText_animated-search-input-text-phrase-safari__93BWx',
                'animated-search-input-text-phrase-last-safari': 'AnimatedSearchInputText_animated-search-input-text-phrase-last-safari__rGLqU',
                'animated-search-input-text-content-safari': 'AnimatedSearchInputText_animated-search-input-text-content-safari__XtJjl',
            };
        },
        91278: (e) => {
            e.exports = { root: 'VirtualList_root__kEvf_' };
        },
        91626: (e, t, a) => {
            'use strict';
            (a.d(t, { G: () => r }), a(77920));
            var s = a(76481);
            class r extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        92043: (e) => {
            e.exports = {
                root: 'SearchMixed_root__RR4QT',
                container: 'SearchMixed_container__KIfE1',
                correctedTextBlock: 'SearchMixed_correctedTextBlock___1rfE',
                block: 'SearchMixed_block__SasiH',
                blockCarousel: 'SearchMixed_blockCarousel__IQjJA',
                blockHeader: 'SearchMixed_blockHeader__L0FSh',
                blockMixed: 'SearchMixed_blockMixed__udOYV',
                footer: 'SearchMixed_footer__INQFP',
                item: 'SearchMixed_item__aTIrG',
                important: 'SearchMixed_important__1ncD8',
            };
        },
        92496: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => s });
            var s = (function (e) {
                return ((e.ANDROID = 'Android'), (e.IOS = 'iOS'), (e.MACOS = 'MacOS'), (e.WINDOWS = 'Windows'), e);
            })({});
        },
        92755: (e) => {
            e.exports = {
                root: 'AnimatedSearchInput_root__9y1dF',
                root_introActive: 'AnimatedSearchInput_root_introActive__NzQ59',
                searchInput: 'AnimatedSearchInput_searchInput__fhfbv',
                searchInputContent: 'AnimatedSearchInput_searchInputContent___J4zD',
                mirrorViewport: 'AnimatedSearchInput_mirrorViewport__1S69P',
                mirrorContent: 'AnimatedSearchInput_mirrorContent__fjXLS',
                haze: 'AnimatedSearchInput_haze__q7hJQ',
                haze_visible: 'AnimatedSearchInput_haze_visible__qw91M',
            };
        },
        93690: (e, t, a) => {
            'use strict';
            a.d(t, { GX: () => i.G, X1: () => s.X, m5: () => r.m });
            var s = a(77920),
                r = a(76481),
                i = a(91626);
            a(95919);
        },
        93875: (e) => {
            e.exports = {
                root: 'MixedEntitiesBlock_root__Zs8l2',
                controls: 'MixedEntitiesBlock_controls__mOhq7',
                item: 'MixedEntitiesBlock_item__uRvxc',
                item_withMultipleColumns: 'MixedEntitiesBlock_item_withMultipleColumns__ziUqI',
                column: 'MixedEntitiesBlock_column__sHpUC',
            };
        },
        95214: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => _ });
            var s = a(25839),
                r = a(82298),
                i = a(88204),
                o = a(74631),
                n = a(8487),
                l = a(61493),
                c = a(4254),
                d = a(41915),
                u = a(95772),
                m = a(13520),
                h = a.n(m);
            let _ = (0, i.PA)((e) => {
                let { isShimmerVisible: t, isShimmerActive: a, withTitle: i, mixes: m, shimmerCount: _ = 5, className: p } = e,
                    x = (0, o.useMemo)(
                        () =>
                            t
                                ? (0, s.jsx)(u.e, { isActive: a, round: !1, centered: !1, withInfo: !1, count: _ })
                                : m.map((e) => (0, s.jsx)(d.N, { title: e.title, weblink: e.weblink, covers: e.covers, imagesLayoutType: e.imagesLayoutType }, e.id)),
                        [a, t, m, _],
                    );
                return (0, s.jsxs)('div', {
                    'data-test-id': l.e8.mixes.MIXES_GRID_CONTAINER,
                    children: [
                        i &&
                            (0, s.jsx)(c.DZ, {
                                className: h().mixesTitle,
                                size: 's',
                                weight: 'bold',
                                variant: 'h3',
                                'data-test-id': l.e8.mixes.MIXES_GRID_HEADER,
                                children: (0, s.jsx)(n.A, { id: 'entity-names.mixes' }),
                            }),
                        (0, s.jsx)('div', { className: (0, r.$)(h().mixesGrid, p), children: x }),
                    ],
                });
            });
        },
        95919: (e, t, a) => {
            'use strict';
            var s;
            (a.d(t, { Z: () => s }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(s || (s = {})));
        },
        96027: (e) => {
            e.exports = {
                root: 'SearchColumnShimmer_root__PDf3Y',
                infoContainer: 'SearchColumnShimmer_infoContainer__cQ8_H',
                textContainer: 'SearchColumnShimmer_textContainer__IekgL',
                title: 'SearchColumnShimmer_title__IorPg',
                description: 'SearchColumnShimmer_description__nNupy',
                cover: 'SearchColumnShimmer_cover__58jV8',
                action: 'SearchColumnShimmer_action__JbJGl',
            };
        },
        96382: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => u });
            var s = a(25839),
                r = a(88204),
                i = a(74631),
                o = a(68934),
                n = a(40489),
                l = a(32190),
                c = a(10126),
                d = a.n(c);
            let u = (0, r.PA)((e) => {
                let {
                        count: t,
                        rowGap: a,
                        columnGap: r,
                        getEstimateRowSize: c,
                        minColumnCount: u = 2,
                        minColumnWidth: m,
                        maxColumnWidth: h,
                        maxColumnCount: _,
                        renderItemByIndex: p,
                        onChangeRange: x,
                    } = e,
                    [b, S] = (0, o.d)(),
                    {
                        virtualizer: j,
                        rowResizeObserver: v,
                        columnCount: C,
                        indices: A,
                    } = (0, n.L)({
                        count: t,
                        rowGap: a,
                        columnGap: r,
                        getEstimateRowSize: c,
                        minColumnCount: u,
                        minColumnWidth: m,
                        maxColumnWidth: h,
                        maxColumnCount: _,
                        containerRef: b,
                    });
                (0, i.useEffect)(() => {
                    !j.isScrolling && j.range && (null == x || x(j.range, C));
                }, [x, j.isScrolling, j.range, C]);
                let y = { '--virtual-grid-height': ''.concat(j.getTotalSize(), 'px'), '--virtual-grid-column-count': C };
                return (0, s.jsx)('div', {
                    ref: S,
                    style: y,
                    className: d().root,
                    children: j.getVirtualItems().map((e) =>
                        (0, s.jsx)(
                            l.U,
                            {
                                className: d().row,
                                columnClassName: d().column,
                                virtualItem: e,
                                resizeObserver: v,
                                indices: A,
                                renderItemByIndex: p,
                                scrollMargin: j.options.scrollMargin,
                            },
                            e.key,
                        ),
                    ),
                });
            });
        },
        96957: (e) => {
            e.exports = {
                root: 'VibeCard_root__9TDjP',
                playingAnimation: 'VibeCard_playingAnimation__iRgvh',
                cover: 'VibeCard_cover__LbX93',
                image: 'VibeCard_image__luolD',
                controls: 'VibeCard_controls__CcEVx',
                controls_isPlaying: 'VibeCard_controls_isPlaying__1_Ass',
                important: 'VibeCard_important__WPWqc',
                control: 'VibeCard_control__SM3H4',
                playControl: 'VibeCard_playControl__pZxq5',
                playButton: 'VibeCard_playButton__LWepP',
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3181, 1107, 3349, 7339, 1676, 6749, 6287, 2121, 3472, 7349, 1540, 947, 1632, 9861, 6744, 8451, 1583, 364, 2779, 8561, 2e3, 5743, 3084, 3021, 5058, 3789,
                9468, 6706, 1311, 5201, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 3257, 4305, 3269, 4163, 3246, 4517, 3482, 6680, 6504, 5329, 8836, 820,
                4434, 48, 862, 6361, 5898, 2533, 8222, 4932, 5622, 9973, 5853, 6271, 7804, 3545, 6490, 4475, 5056, 7358,
            ],
            () => e((e.s = 67746)),
        ),
            (_N_E = e.O()));
    },
]);
