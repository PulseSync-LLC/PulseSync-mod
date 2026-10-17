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
            a.d(t, { H: () => _ });
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
            let _ = (e) => {
                let { size: t = 'm', variant: a = 'default', color: _ = 'primary', withRipple: h = !0, buttonText: p, isBlock: x, key: b, className: S } = e,
                    j = (0, r.useRouter)(),
                    C = (0, m.N)().get(u.QG),
                    v = (0, n.c)(() => {
                        C.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), j.push(C.authorizationUrl));
                    });
                return (0, s.jsx)(
                    l.$,
                    {
                        onClick: v,
                        className: S,
                        isBlock: x,
                        color: _,
                        variant: a,
                        size: t,
                        radius: 'xxxl',
                        withRipple: h,
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
                    { formatMessage: _ } = (0, i.A)(),
                    h = (0, r.useMemo)(() => {
                        switch (a) {
                            case l.I.ALBUM:
                                return _({ id: 'onboarding.authorize-to-listen-vibe-by-album' }, { br: '\n', nbsp: ' ' });
                            case l.I.ARTIST:
                                return _({ id: 'onboarding.authorize-to-listen-vibe-by-artist' }, { br: '\n', nbsp: ' ' });
                            case l.I.PLAYLIST:
                                return _({ id: 'onboarding.authorize-to-listen-vibe-by-playlist' }, { br: '\n', nbsp: ' ' });
                            case l.I.TRACK:
                                return _({ id: 'onboarding.authorize-to-listen-vibe-by-track' }, { br: '\n', nbsp: ' ' });
                            case l.I.GENRE:
                            case l.I.MICRO_GENRE:
                                return _({ id: 'onboarding.authorize-to-listen-vibe-by-genre' }, { br: '\n', nbsp: ' ' });
                            case l.I.MOOD:
                                return _({ id: 'onboarding.authorize-to-listen-vibe-by-mood' }, { br: '\n', nbsp: ' ' });
                            case l.I.ACTIVITY:
                                return _({ id: 'onboarding.authorize-to-listen-vibe-by-activity' }, { br: '\n', nbsp: ' ' });
                            default:
                                return _({ id: 'onboarding.authorize-to-listen-vibe' }, { br: '\n', nbsp: ' ' });
                        }
                    }, [a, _]),
                    p = (0, r.useMemo)(() => {
                        switch (t) {
                            case 'fullTracks':
                                return _({ id: 'onboarding.authorize-to-listen-full' }, { br: '\n', nbsp: ' ' });
                            case 'changeQuality':
                                return _({ id: 'onboarding.authorize-to-change-quality' }, { br: '\n', nbsp: ' ' });
                            case 'addToCollection':
                                return _({ id: 'onboarding.authorize-to-add-to-collection' }, { br: '\n', nbsp: ' ' });
                            case 'openQueue':
                                return _({ id: 'onboarding.authorize-to-open-queue' }, { br: '\n', nbsp: ' ' });
                            case 'addToQueue':
                                return _({ id: 'onboarding.authorize-to-add-track-to-queue' }, { br: '\n', nbsp: ' ' });
                            case 'like':
                                return _({ id: 'onboarding.authorize-to-like' }, { br: '\n', nbsp: ' ' });
                            case 'dislike':
                                return _({ id: 'onboarding.authorize-to-dislike' }, { br: '\n', nbsp: ' ' });
                            case 'pin':
                                return _({ id: 'onboarding.authorize-to-pin' }, { br: '\n', nbsp: ' ' });
                            case 'sync-lyrics':
                                return _({ id: 'onboarding.authorize-to-view-sync-lyrics' }, { br: '\n', nbsp: ' ' });
                            case 'vibe':
                                return h;
                            default:
                                return '';
                        }
                    }, [_, t, h]);
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
        22984: (e) => {
            e.exports = {
                content: 'WizardModal_content__mLcxg',
                modalHeader: 'WizardModal_modalHeader__BbNjx',
                root: 'WizardModal_root__mrF2y',
                root_withCustomControls: 'WizardModal_root_withCustomControls__t7Kjv',
                modalContent: 'WizardModal_modalContent__OifZs',
                wrapper: 'WizardModal_wrapper__2_8ft',
                title: 'WizardModal_title__fPGJr',
                text: 'WizardModal_text__ntEON',
                button: 'WizardModal_button__e8bCS',
                mainContainer: 'WizardModal_mainContainer__fbjpt',
                carousel: 'WizardModal_carousel__uVcYS',
                scrollContainer: 'WizardModal_scrollContainer__tDrP6',
                important: 'WizardModal_important__7uymQ',
                tabCarousel: 'WizardModal_tabCarousel__AclIV',
                tabShimmer: 'WizardModal_tabShimmer__36Qc7',
                tabTitle: 'WizardModal_tabTitle__7ZAaF',
                filter: 'WizardModal_filter__o2wpn',
                filter_selected: 'WizardModal_filter_selected__qdlMf',
                item: 'WizardModal_item__wUHVg',
            };
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
                    _ = t[a.index],
                    h = { '--virtual-grid-row-vertical-offset': ''.concat(a.start - u, 'px') };
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
                        style: h,
                        className: (0, r.$)(l().root, c),
                        children: null == _ ? void 0 : _.map((e) => (0, s.jsx)('div', { className: n, children: i(e) }, ''.concat(a.key, '_').concat(e))),
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
                        minColumnCount: _,
                        maxColumnCount: h,
                        containerRef: p,
                    } = e,
                    { rowCount: x, columnCount: b } = ((e) => {
                        let { containerRef: t, minColumnCount: a, maxColumnWidth: s, minColumnWidth: r, totalCount: l, columnGap: c, maxColumnCount: d } = e,
                            [u, m] = (0, o.useState)({ rowCount: 0, columnCount: 0 }),
                            _ = (0, o.useRef)(null),
                            h = (0, o.useMemo)(
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
                                    _.current && _.current.disconnect(),
                                    (_.current = new ResizeObserver((e) => {
                                        e.forEach(h);
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
                                        _.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = _.current) || e.disconnect();
                                    }
                                ),
                                [c, t, h, d, s, a, r, l],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: _, maxColumnWidth: m, minColumnWidth: u, maxColumnCount: h, containerRef: p }),
                    { virtualizer: S, resizeObserver: j } = (0, l.r)({ count: x, getEstimateSize: a, gap: c, containerRef: p }),
                    C = (0, s.A)(
                        Array.from({ length: t }, (e, t) => t),
                        b,
                    ),
                    v = (0, r.L)(() => {
                        var e, t;
                        if (!S.range) return null;
                        let a = null == (e = C[S.range.startIndex]) ? void 0 : e.at(0),
                            s = null == (t = C[S.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== a && void 0 !== s ? { startIndex: a, endIndex: s } : null;
                    });
                return { virtualizer: S, rowResizeObserver: j, indices: C, columnCount: b, visibleRange: v };
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
                r = a(44031),
                i = a(68103),
                o = a(91879),
                n = a(28045),
                l = a(51011),
                c = a(18608),
                d = a(68224),
                u = a(32911),
                m = a(98031),
                _ = a(95314),
                h = a(32953);
            let p = (e) => {
                let { item: t, index: a, pageId: p, sendSearchFeedback: x, blockPosition: b = 0, objectPosX: S, objectPosY: j, objectsCount: C } = e;
                switch (t.type) {
                    case i.n.PODCAST_EPISODE:
                        return (0, s.jsx)(
                            _.B,
                            {
                                objectType: r.DomainObjectType.PodcastEpisode,
                                objectId: t.data.id,
                                objectPosX: S,
                                objectPosY: j,
                                objectsCount: C,
                                children: (0, s.jsx)(d.c, { pageId: p, track: t.data }),
                            },
                            t.data.id,
                        );
                    case i.n.UGC_TRACK:
                        return (0, s.jsx)(d.c, { pageId: p, track: t.data });
                    case i.n.TRACK:
                        return (0, s.jsx)(
                            _.B,
                            {
                                objectType: r.DomainObjectType.Track,
                                objectId: t.data.id,
                                objectPosX: S,
                                objectPosY: j,
                                objectsCount: C,
                                children: (0, s.jsx)(h.N.Provider, {
                                    value: { sendSearchFeedback: x, id: t.data.entityId, type: o.o.TRACK, blockPosition: b, position: a },
                                    children: (0, s.jsx)(d.c, { pageId: p, track: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case i.n.ARTIST:
                        return (0, s.jsx)(
                            _.B,
                            {
                                objectType: r.DomainObjectType.Artist,
                                objectId: t.data.id,
                                objectPosX: S,
                                objectPosY: j,
                                objectsCount: C,
                                children: (0, s.jsx)(h.N.Provider, {
                                    value: { sendSearchFeedback: x, id: t.data.id, type: o.o.ARTIST, blockPosition: b, position: a },
                                    children: (0, s.jsx)(l.c, { pageId: p, artist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case i.n.PLAYLIST:
                        return (0, s.jsx)(
                            _.B,
                            {
                                objectType: r.DomainObjectType.Playlist,
                                objectId: t.data.id,
                                objectPosX: S,
                                objectPosY: j,
                                objectsCount: C,
                                children: (0, s.jsx)(h.N.Provider, {
                                    value: { sendSearchFeedback: x, id: t.data.id, type: o.o.PLAYLIST, blockPosition: b, position: a },
                                    children: (0, s.jsx)(c.v, { pageId: p, playlist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case i.n.PODCAST:
                        return (0, s.jsx)(
                            _.B,
                            {
                                objectType: r.DomainObjectType.Podcast,
                                objectId: String(t.data.id),
                                objectPosX: S,
                                objectPosY: j,
                                objectsCount: C,
                                children: (0, s.jsx)(
                                    h.N.Provider,
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
                            _.B,
                            {
                                objectType: r.DomainObjectType.Album,
                                objectId: String(t.data.id),
                                objectPosX: S,
                                objectPosY: j,
                                objectsCount: C,
                                children: (0, s.jsx)(
                                    h.N.Provider,
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
                            _.B,
                            {
                                objectType: r.DomainObjectType.Wave,
                                objectId: e.stationId,
                                objectPosX: S,
                                objectPosY: j,
                                objectsCount: C,
                                children: (0, s.jsx)(h.N.Provider, {
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
        59858: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => o });
            var s = a(25839),
                r = a(74631),
                i = a(97904);
            let o = (e) => {
                let { skeleton: t, children: a } = e,
                    o = (0, r.useMemo)(() => ({ skeleton: t }), [t]);
                return (0, s.jsx)(i.D.Provider, { value: o, children: a });
            };
        },
        60706: (e) => {
            e.exports = { root: 'SearchBestResultsTrackBlock_root__Qsh_f', cover: 'SearchBestResultsTrackBlock_cover__aCixO' };
        },
        61670: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 81995));
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
        65343: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => s });
            var s = (function (e) {
                return (
                    (e.TOGGLE_PLAY = 'TOGGLE_PLAY'),
                    (e.TOGGLE_MUTE = 'TOGGLE_MUTE'),
                    (e.INCREASE_VOLUME = 'INCREASE_VOLUME'),
                    (e.DECREASE_VOLUME = 'DECREASE_VOLUME'),
                    (e.LIKE = 'LIKE'),
                    (e.DISLIKE = 'DISLIKE'),
                    (e.MOVE_FORWARD = 'MOVE_FORWARD'),
                    (e.MOVE_BACKWARD = 'MOVE_BACKWARD'),
                    (e.SLIDE_FORWARD = 'SLIDE_FORWARD'),
                    (e.SLIDE_BACKWARD = 'SLIDE_BACKWARD'),
                    (e.TOGGLE_REPEAT = 'TOGGLE_REPEAT'),
                    (e.TOGGLE_SHUFFLE = 'TOGGLE_SHUFFLE'),
                    (e.TOGGLE_FULLSCREEN_PLAYER = 'TOGGLE_FULLSCREEN_PLAYER'),
                    (e.CLOSE = 'CLOSE'),
                    e
                );
            })({});
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
                _ = a(51790),
                h = a(57549);
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
                                x((0, s.jsx)(_.$, { message: (0, s.jsx)(n.A, { id: 'search.cleared-history' }) }), { containerId: c.u.INFO }),
                                e && e(),
                                b.push(u.Z.search.href));
                        } catch (e) {
                            x((0, s.jsx)(h.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: c.u.ERROR });
                        }
                    })
                );
            };
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
            a.d(t, { SearchPage: () => sB });
            var s = a(25839),
                r = a(82298),
                i = a(88204),
                o = a(84059),
                n = a(74631),
                l = a(39004),
                c = a(44031),
                d = a(61493),
                u = a(52669),
                m = a(68103),
                _ = a(97762),
                h = a(71035),
                p = a(49656),
                x = a(56659),
                b = a(5867),
                S = a(14693),
                j = a(59925),
                C = a(80126),
                v = a(27954);
            let A = (e) => {
                let t = 1200 + 1600 * e;
                return { phaseDelay: ''.concat(t / 1e3, 's'), gradientAnimationBegin: ''.concat((t + 160) / 1e3, 's') };
            };
            var g = a(72715),
                y = a.n(g);
            let T = [0, 1, 2, 3],
                I = (0, i.PA)((e) => {
                    var t;
                    let { isActive: a, size: i = 'xxxs' } = e,
                        { settings: o } = (0, v.g)(),
                        l = !!(null == (t = o.browserInfo) ? void 0 : t.isSafari),
                        c = (0, n.useId)(),
                        d = ''.concat(c, '-ring-mask'),
                        u = ''.concat(c, '-reveal-mask'),
                        m = ''.concat(c, '-glow-gradient'),
                        _ = ''.concat(c, '-stroke-gradient'),
                        h = ''.concat(c, '-reveal-gradient'),
                        p = ''.concat(c, '-soft-blur'),
                        x = ''.concat(c, '-hard-blur');
                    return (0, s.jsx)('div', {
                        className: (0, r.$)(y().root, { [y().root_active]: a, [y().root_safari]: l, [y().root_size_xxs]: 'xxs' === i }),
                        'aria-hidden': !0,
                        children: (0, s.jsxs)('svg', {
                            className: y().gradient,
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
                                            id: _,
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
                                            id: h,
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
                                            className: y().ringMask,
                                            id: d,
                                            x: '-100%',
                                            y: '-1000%',
                                            width: '300%',
                                            height: '2100%',
                                            maskUnits: 'userSpaceOnUse',
                                            children: [
                                                (0, s.jsx)('rect', { className: y().ringOuter, fill: '#fff' }),
                                                (0, s.jsx)('rect', { className: y().ringHole, fill: '#000', rx: 'xxs' === i ? 22 : 18.33 }),
                                            ],
                                        }),
                                        (0, s.jsx)('mask', {
                                            className: y().revealMask,
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
                                                        className: y().revealBlur,
                                                        style: { '--animated-search-input-gradient-mask-phase-delay': t },
                                                        children: (0, s.jsx)('rect', { className: y().revealPass, fill: l ? 'url(#'.concat(h, ')') : '#fff' }),
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
                                            className: y().softGlow,
                                            children: (0, s.jsx)('g', {
                                                filter: l ? 'url(#'.concat(p, ')') : void 0,
                                                children: (0, s.jsx)('rect', { className: y().ringOuter, fill: 'url(#'.concat(m, ')'), mask: 'url(#'.concat(d, ')') }),
                                            }),
                                        }),
                                        (0, s.jsx)('g', {
                                            className: y().hardGlow,
                                            children: (0, s.jsx)('g', {
                                                filter: l ? 'url(#'.concat(x, ')') : void 0,
                                                children: (0, s.jsx)('rect', { className: y().ringOuter, fill: 'url(#'.concat(m, ')'), mask: 'url(#'.concat(d, ')') }),
                                            }),
                                        }),
                                        (0, s.jsx)('rect', {
                                            className: y().stroke,
                                            fill: 'none',
                                            rx: 'xxs' === i ? 23.63 : 19.69,
                                            stroke: 'url(#'.concat(_, ')'),
                                            strokeWidth: 'xxs' === i ? 0.75 : 0.63,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                });
            var E = a(48292),
                k = a(87138),
                P = a(92496),
                f = a(90115),
                R = a.n(f);
            let N = 'animated-search-input-text',
                L = '[data-animation-target="'.concat(N, '"]'),
                B = [
                    { attributeName: 'x1', dur: '1.87s', from: '-416', to: '143' },
                    { attributeName: 'y1', dur: '1.87s', from: '-32', to: '29' },
                    { attributeName: 'x2', dur: '1.5s', from: '80', to: '507' },
                    { attributeName: 'y2', dur: '1.5s', from: '21', to: '-14' },
                ],
                O = (0, k.YK)({
                    cheerfulNotTooMuch: { id: 'search.q2v-input-placeholder-cheerful-not-too-much' },
                    favoriteArtist: { id: 'search.q2v-input-placeholder-favorite-artist' },
                    collectionTrack: { id: 'search.q2v-input-placeholder-collection-track' },
                    melodicAndDanceable: { id: 'search.q2v-input-placeholder-melodic-and-danceable' },
                }),
                w = [O.cheerfulNotTooMuch, O.favoriteArtist, O.collectionTrack, O.melodicAndDanceable],
                D = (0, i.PA)((e) => {
                    var t, a;
                    let { isActive: i, onAnimationEnd: o } = e,
                        { settings: c } = (0, v.g)(),
                        d = !!((null == (t = c.browserInfo) ? void 0 : t.isSafari) || (null == (a = c.browserInfo) ? void 0 : a.OSFamily) === P.j.IOS),
                        { formatMessage: u } = (0, l.A)(),
                        m = (0, n.useId)(),
                        _ = (0, n.useRef)(null),
                        [p, x] = (0, n.useState)(w),
                        b = (0, h.c)((e) => {
                            e.currentTarget === e.target && o();
                        });
                    return (
                        (0, n.useEffect)(() => {
                            var e;
                            i ||
                                null == (e = _.current) ||
                                e.querySelectorAll(L).forEach((e) => {
                                    e.pauseAnimations();
                                });
                        }, [i]),
                        (0, n.useEffect)(() => {
                            x((0, E.A)(w));
                        }, []),
                        (0, s.jsx)('div', {
                            className: (0, r.$)(R().root, { [R().root_active]: i, [R().root_safari]: d }),
                            ref: _,
                            'aria-hidden': !0,
                            children: (0, s.jsx)('div', {
                                className: R().viewport,
                                children: p.map((e, t) => {
                                    let a = t === p.length - 1,
                                        i = u(e),
                                        { phaseDelay: o, gradientAnimationBegin: n } = A(t);
                                    return (0, s.jsx)(
                                        'span',
                                        {
                                            className: (0, r.$)(R().phrase, { [R().phrase_last]: a }),
                                            onAnimationEnd: a ? b : void 0,
                                            style: { '--animated-search-input-text-phase-delay': o },
                                            children: (0, s.jsx)('div', {
                                                className: R().phraseContent,
                                                children: (0, s.jsxs)('svg', {
                                                    className: R().text,
                                                    'data-animation-target': N,
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
                                                                        className: (0, r.$)(R().gradientStop, R().gradientStop_start),
                                                                        stopColor: 'var(--q2v-accent-color)',
                                                                        stopOpacity: '0',
                                                                    }),
                                                                    (0, s.jsx)('stop', {
                                                                        className: (0, r.$)(R().gradientStop, R().gradientStop_middle),
                                                                        offset: '0.2',
                                                                        stopColor: 'var(--q2v-accent-color)',
                                                                    }),
                                                                    (0, s.jsx)('stop', {
                                                                        className: (0, r.$)(R().gradientStop, R().gradientStop_end),
                                                                        offset: '1',
                                                                        stopColor: 'var(--q2v-accent-color)',
                                                                        stopOpacity: '0',
                                                                    }),
                                                                    B.map((e) => {
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
                                                        (0, s.jsx)('text', { className: R().base, x: '0', y: '50%', children: i }),
                                                        (0, s.jsx)('text', {
                                                            className: R().gradient,
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
                z = a.n(M);
            let H = (e) => {
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
                    _ = 0 === a.length,
                    [b, v] = (0, n.useState)(a),
                    [A, g] = (0, n.useState)(0),
                    [y, T] = (0, n.useState)(!1),
                    { state: E, toggleFalse: k } = (0, S.e)(_),
                    P = (0, n.useRef)(null),
                    f = (0, n.useRef)(!!(l && _)),
                    R = (0, h.c)(() => {
                        null !== P.current && (window.clearTimeout(P.current), (P.current = null));
                    }),
                    N = (0, h.c)(() => {
                        (R(), T(!1));
                    }),
                    L = (0, h.c)((e) => {
                        var t;
                        let a = null != (t = e.selectionStart) ? t : e.value.length;
                        (v(e.value.slice(0, a)), g(e.scrollLeft));
                    }),
                    B = (0, h.c)((e) => {
                        var t;
                        let a = e.currentTarget;
                        (k(),
                            L(a),
                            R(),
                            0 === a.value.length
                                ? T(!1)
                                : (T(!0),
                                  (P.current = window.setTimeout(() => {
                                      (T(!1), (P.current = null));
                                  }, 1e3))),
                            null == d || null == (t = d.onInput) || t.call(d, e));
                    }),
                    O = (0, h.c)((e) => {
                        var t;
                        (f.current || k(), null == d || null == (t = d.onFocus) || t.call(d, e));
                    }),
                    w = (0, h.c)((e) => {
                        var t;
                        ((f.current = !1), null == d || null == (t = d.onBlur) || t.call(d, e));
                    }),
                    M = (0, h.c)((e) => {
                        var t;
                        (L(e.currentTarget), null == d || null == (t = d.onSelect) || t.call(d, e));
                    }),
                    H = (0, h.c)((e) => {
                        var t;
                        (g(e.currentTarget.scrollLeft), null == d || null == (t = d.onScroll) || t.call(d, e));
                    }),
                    U = (0, h.c)(() => {
                        (v(''), g(0), N(), null == c || c());
                    });
                ((0, n.useEffect)(() => {
                    i &&
                        (k(),
                        v(i),
                        g(0),
                        R(),
                        T(!0),
                        (P.current = window.setTimeout(() => {
                            (T(!1), (P.current = null));
                        }, 1e3)));
                }, [R, i, k]),
                    (0, n.useEffect)(() => R, [R]),
                    (0, n.useEffect)(() => {
                        _ && (0, C.y)() && k();
                    }, [_, k]));
                let V = (0, p.L)(() => {
                        let { actionsClassName: e, icon: t, inputClassName: a, ...s } = null != d ? d : {},
                            i = {
                                ...s,
                                actionsClassName: (0, r.$)(z().searchInputContent, e),
                                inputClassName: (0, r.$)(z().searchInputContent, a),
                                onBlur: w,
                                onFocus: O,
                                onInput: B,
                                onSelect: M,
                                onScroll: H,
                            };
                        return void 0 === t
                            ? i
                            : null === t
                              ? { ...i, icon: t }
                              : { ...i, icon: (0, n.cloneElement)(t, { className: (0, r.$)(z().searchInputContent, t.props.className) }) };
                    }),
                    G = { ...u, className: (0, r.$)(z().searchInputContent, null == u ? void 0 : u.className) };
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(z().root, o, { [z().root_introActive]: E }),
                    onPointerDownCapture: k,
                    style: { '--animated-search-input-scroll-offset': ''.concat(-A, 'px'), '--q2v-accent-color': t },
                    children: [
                        (0, s.jsx)(x.D, {
                            ...m,
                            autoFocus: l,
                            className: z().searchInput,
                            initialValue: a,
                            correctedValue: i,
                            innerInputProps: V,
                            onResetClick: U,
                            searchIconProps: G,
                        }),
                        _ && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(I, { isActive: E, size: m.size }), (0, s.jsx)(D, { isActive: E, onAnimationEnd: k })] }),
                        (0, s.jsx)('div', {
                            className: z().mirrorViewport,
                            'aria-hidden': !0,
                            children: (0, s.jsxs)('div', {
                                className: z().mirrorContent,
                                children: [(0, s.jsx)('span', { children: b }), (0, s.jsx)(j.e, { className: (0, r.$)(z().haze, { [z().haze_visible]: y }) })],
                            }),
                        }),
                    ],
                });
            };
            var U = a(8487),
                V = a(4071),
                G = a(4254),
                W = a(15267),
                $ = a.n(W);
            let Y = (e) => {
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
                                    className: $().link,
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
                    className: $().root,
                    'data-test-id': d.e8.search.SEARCH_CORRECTED_TEXT,
                    children: (0, s.jsx)(G.HL, {
                        className: $().text,
                        variant: 'span',
                        size: 'm',
                        type: 'text',
                        'data-test-id': d.e8.search.SEARCH_CORRECTED_TEXT_TEXT,
                        children: (0, s.jsx)(U.A, { id: 'search.corrected-text', values: r }),
                    }),
                });
            };
            var X = a(66738),
                K = a(13833),
                F = a(99401),
                q = a(26076),
                Q = a(53671),
                Z = a.n(Q);
            let J = (e) => {
                    let { forwardRef: t, className: a, searchCorrectedText: i } = e,
                        { formatMessage: o } = (0, l.A)();
                    return (0, s.jsxs)(K.N, {
                        className: (0, r.$)(Z().root, a),
                        containerClassName: Z().container,
                        ref: t,
                        children: [
                            (0, s.jsxs)('div', {
                                className: Z().content,
                                'data-test-id': d.e8.search.SEARCH_EMPTY_CONTAINER,
                                children: [
                                    i && (0, s.jsx)('div', { className: Z().correctedTextBlock, children: i }),
                                    (0, s.jsx)(X.I, { className: Z().icon, variant: 'search', size: 'xxl', 'data-test-id': d.e8.search.SEARCH_EMPTY_ICON }),
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
                            (0, s.jsx)(q.A, { children: (0, s.jsx)(F.w, { className: Z().footer }) }),
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
                e_ = a(52312),
                eh = a(37094),
                ep = a.n(eh);
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
                    { virtualizer: c, resizeObserver: d } = (0, e_.r)({ count: t, getEstimateSize: a, containerRef: o, overscan: 3 });
                (0, n.useEffect)(() => {
                    !c.isScrolling && c.range && i && i(c.range);
                }, [i, c.isScrolling, c.range]);
                let u = c.getTotalSize(),
                    m = c.getVirtualItems(),
                    _ = c.options.scrollMargin;
                return (0, s.jsx)('div', {
                    className: eS().root,
                    style: { height: ''.concat(u, 'px') },
                    ref: l,
                    children: m.map((e) => (0, s.jsx)(ex, { item: e, scrollMargin: _, resizeObserver: d, renderItemByIndex: r }, e.key)),
                });
            };
            var eC = a(26237),
                ev = a(27089);
            a(93588);
            var eA = a(51246),
                eg = a(86869),
                ey = a(79367),
                eT = a(47009),
                eI = a(26742),
                eE = a(97952),
                ek = a(85743),
                eP = a(87201),
                ef = a(5668),
                eR = a(6323),
                eN = a(18197),
                eL = a(49438),
                eB = a(74987),
                eO = a(96957),
                ew = a.n(eO);
            let eD = (0, i.PA)((e) => {
                let { vibe: t, children: a, className: i } = e,
                    { pageId: o } = (0, eE.$)(),
                    [l, c] = (0, n.useState)(!1),
                    { blockIdForFrom: d } = (0, eI.N)(),
                    {
                        settings: { isMobile: u },
                        user: m,
                        freeAccess: _,
                    } = (0, v.g)(),
                    { sendPlaySearchFeedback: p } = (0, ek.z)(),
                    x = (0, eT.b)(),
                    { isPlaying: b, isPaused: S, togglePlay: j } = (0, eP.B)({ seeds: t.seeds, pageIdForFrom: o, blockIdForFrom: d }),
                    C = (0, ey.P)(),
                    A = b || S,
                    g = (0, n.useCallback)(() => {
                        u && (l || b || (c(!0), null == p || p()), j());
                    }, [u, b, l, p, j]),
                    y = (0, h.c)(() => {
                        !C() && (_.isVibeStartRestricted || (l || b || (c(!0), null == p || p()), j(), x(!b)));
                    }),
                    T = (0, n.useCallback)(
                        () =>
                            (0, s.jsx)(
                                eL.D,
                                {
                                    isPlaying: b,
                                    onClick: y,
                                    className: (0, r.$)(ew().playButton, ew().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                },
                                t.getKey('PlayButton'),
                            ),
                        [b, y, t],
                    ),
                    I = (0, n.useMemo)(() => {
                        let e = !m.hasPlus && _.isFreePlaybackDisabled;
                        return m.isAuthorized
                            ? (0, s.jsx)(
                                  ef.S,
                                  {
                                      isEnabled: e && _.isVibeStartRestricted,
                                      placement: 'bottom',
                                      textVariant: 'vibe',
                                      vibeTextVariant: t.stationType,
                                      renderChildren: T,
                                  },
                                  t.getKey('BuyPlusPopover'),
                              )
                            : (0, s.jsx)(eN.Z, { isEnabled: e, placement: 'bottom', textVariant: 'vibe', vibeTextVariant: t.stationType, renderChildren: T });
                    }, [m.hasPlus, m.isAuthorized, t, T, _.isVibeStartRestricted, _.isFreePlaybackDisabled]),
                    E = (0, n.useMemo)(
                        () =>
                            (0, s.jsxs)(eg.t, {
                                className: ew().cover,
                                radius: 'round',
                                withShadow: !0,
                                onClick: g,
                                children: [
                                    (0, s.jsx)(eR.B, {
                                        size: 200,
                                        fit: 'cover',
                                        className: ew().image,
                                        style: { backgroundColor: t.backgroundColor },
                                        src: t.imageUrl,
                                        alt: t.title,
                                        withAvatarReplace: !0,
                                    }),
                                    A && (0, s.jsx)(eB.P, { stopAnimation: S, className: ew().playingAnimation }),
                                    (0, s.jsx)(eA.hg, {
                                        className: (0, r.$)(ew().controls, { [ew().controls_isPlaying]: A }, ew().important),
                                        bottomContainerClassName: ew().playControl,
                                        radius: 'round',
                                        playControl: I,
                                    }),
                                ],
                            }),
                        [g, t.backgroundColor, t.imageUrl, t.title, A, S, I],
                    );
                return (0, s.jsx)(eA.MN, {
                    className: (0, r.$)(ew().root, i),
                    textPosition: 'center',
                    title: (0, s.jsx)(G.HL, { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title }, t.getKey('Description')),
                    description: (0, s.jsx)(
                        G.HL,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: t.description },
                        t.getKey('Description'),
                    ),
                    view: E,
                    children: a,
                });
            });
            var eM = a(20258),
                ez = a(95314),
                eH = a(30290),
                eU = a(32953),
                eV = a(79422),
                eG = a(44806),
                eW = a(3718),
                e$ = a(70676),
                eY = a(19412),
                eX = a(97805),
                eK = a(36054);
            let eF = {
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
                        d = (0, h.c)((e) => {
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
            let e4 = (0, i.PA)((e) => {
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
            var e9 = a(49337),
                e6 = a(16351);
            let e5 = {
                    [e9.S.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_search.lottie',
                    [e9.S.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_search.lottie',
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
                    { lumen: n } = (0, v.g)(),
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
                        children: (0, s.jsx)(ez.B, {
                            objectPosX: 1,
                            objectPosY: 1,
                            objectsCount: 1,
                            objectType: c.DomainObjectType.Wave,
                            objectId: null == o ? void 0 : o.stationId,
                            children: (0, s.jsx)(eU.N.Provider, { value: d, children: (0, s.jsx)(te, { requestAwakeLumenModal: a, vibe: o }) }),
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
                            isShimmerVisible: _,
                            getDataByRange: x,
                            requestsCount: b,
                            q2vResults: S,
                            isShimmerActive: j,
                            requestAwakeLumenModal: C,
                            ...A
                        } = e,
                        { experiments: g } = (0, v.g)(),
                        y = (0, eC.f)(),
                        { isVisible: T, vibe: I } = eq(S, j),
                        E = y && T && o === m.n.WAVE,
                        k = ((e) => (e === m.n.CLIP ? eF.clip : e === m.n.CONCERT ? eF.concert : eF.entity))(o),
                        P = (0, h.c)(() => 56),
                        f = (0, h.c)(() => k.estimateRowSize),
                        R = (0, eV.w)(),
                        N = (() => {
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
                                (0, h.c)((t, a) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, a), a)))
                            );
                        })(),
                        { from: L } = (0, eH.f)({ pageId: eM._Q.SEARCH }),
                        B = (0, n.useCallback)(
                            (e) => {
                                let t = i[e];
                                if (!t)
                                    return 'list' === l
                                        ? (0, s.jsx)(eX.D, { variant: eW.X.PLAYLIST, isActive: !0 })
                                        : o === m.n.CONCERT
                                          ? (0, s.jsx)(e$.W, { isShimmerActive: !0, className: to().concertShimmer })
                                          : o === m.n.ARTIST
                                            ? (0, s.jsx)(eY.V, { linesCount: 2, round: !0, centered: !0, isActive: !0 })
                                            : o === m.n.WAVE
                                              ? g.checkExperiment(eG.z.WebNextWaveAgentExperiment, 'on')
                                                  ? (0, s.jsx)(eY.V, { linesCount: 3, centered: !0, isActive: !0 })
                                                  : (0, s.jsx)(eY.V, { linesCount: 2, round: !0, centered: !0, isActive: !0 })
                                              : o === m.n.PLAYLIST
                                                ? (0, s.jsx)(eY.V, { linesCount: 2, isActive: !0 })
                                                : o === m.n.CLIP
                                                  ? (0, s.jsx)(eY.V, { linesCount: 2, shimmerClassName: to().video, isActive: !0 })
                                                  : (0, s.jsx)(eY.V, { className: to().entityCardShimmer, isActive: !0, shimmerClassName: o === m.n.CLIP && to().video });
                                switch (t.type) {
                                    case m.n.ALBUM:
                                        return (0, s.jsx)(
                                            eU.N.Provider,
                                            {
                                                value: N(t.data.id, { sendSearchFeedback: d, id: t.data.id, type: er.o.ALBUM, blockPosition: 0, position: e }),
                                                children: (0, s.jsx)(ei.a, { album: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case m.n.PLAYLIST:
                                        return (0, s.jsx)(
                                            eU.N.Provider,
                                            {
                                                value: N(t.data.id, { sendSearchFeedback: d, id: t.data.id, type: er.o.PLAYLIST, blockPosition: 0, position: e }),
                                                children: (0, s.jsx)(ec.B, { playlist: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case m.n.ARTIST:
                                        return (0, s.jsx)(
                                            eU.N.Provider,
                                            {
                                                value: N(t.data.id, { sendSearchFeedback: d, id: t.data.id, type: er.o.ARTIST, blockPosition: 0, position: e }),
                                                children: (0, s.jsx)(en.a, { artist: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case m.n.PODCAST:
                                        return (0, s.jsx)(
                                            ez.B,
                                            {
                                                objectType: c.DomainObjectType.Podcast,
                                                objectId: String(t.data.id),
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                objectsCount: i.length,
                                                children: (0, s.jsx)(eU.N.Provider, {
                                                    value: N(t.data.id, { sendSearchFeedback: d, id: t.data.id, type: er.o.PODCAST, blockPosition: 0, position: e }),
                                                    children: (0, s.jsx)(eo.M, { album: t.data }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                    case m.n.CLIP:
                                        return (0, s.jsx)(
                                            eU.N.Provider,
                                            {
                                                value: N(t.data.clipId, { sendSearchFeedback: d, id: t.data.clipId, type: er.o.CLIP, blockPosition: 0, position: e }),
                                                children: (0, s.jsx)(el.F, { clip: t.data }),
                                            },
                                            t.data.clipId,
                                        );
                                    case m.n.WAVE:
                                        if (!g.checkExperiment(eG.z.WebNextWaveAgentExperiment, 'on'))
                                            return (0, s.jsx)(
                                                eU.N.Provider,
                                                {
                                                    value: N(t.data.stationId, {
                                                        sendSearchFeedback: d,
                                                        id: t.data.stationId,
                                                        type: er.o.WAVE,
                                                        blockPosition: 0,
                                                        position: e,
                                                    }),
                                                    children: (0, s.jsx)(eD, { vibe: t.data }),
                                                },
                                                t.data.stationId,
                                            );
                                        return (0, s.jsx)(
                                            eU.N.Provider,
                                            {
                                                value: N(t.data.stationId, {
                                                    sendSearchFeedback: d,
                                                    id: t.data.stationId,
                                                    type: er.o.WAVE,
                                                    blockPosition: 0,
                                                    position: e,
                                                }),
                                                children: (0, s.jsx)(ev.y, { vibe: t.data }),
                                            },
                                            t.data.stationId,
                                        );
                                    case m.n.CONCERT:
                                        return (0, s.jsx)(
                                            ez.B,
                                            {
                                                objectType: c.DomainObjectType.Concert,
                                                objectId: t.data.id,
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                objectsCount: i.length,
                                                children: (0, s.jsx)(e4, { concert: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case m.n.TRACK:
                                    case m.n.UGC_TRACK:
                                        return (0, s.jsx)(
                                            ez.B,
                                            {
                                                objectType: c.DomainObjectType.Track,
                                                objectId: t.data.id,
                                                objectPosX: 1,
                                                objectPosY: e + 1,
                                                objectsCount: i.length,
                                                children: (0, s.jsx)(eU.N.Provider, {
                                                    value: N(t.data.entityId, {
                                                        sendSearchFeedback: d,
                                                        id: t.data.entityId,
                                                        type: er.o.TRACK,
                                                        blockPosition: 0,
                                                        position: e,
                                                    }),
                                                    children: (0, s.jsx)(ed.c, {
                                                        track: t.data,
                                                        playContextParams: R(t.data.entityId, {
                                                            contextData: { type: ea.K.Various, meta: { id: t.data.entityId }, from: L, overrideContextType: es.b.Search },
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
                                            ez.B,
                                            {
                                                objectType: c.DomainObjectType.PodcastEpisode,
                                                objectId: t.data.id,
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                objectsCount: i.length,
                                                children: (0, s.jsx)(ed.c, {
                                                    track: t.data,
                                                    playContextParams: R(t.data.entityId, {
                                                        contextData: { type: ea.K.Various, meta: { id: t.data.entityId }, from: L, overrideContextType: es.b.Search },
                                                        queueParams: { index: e, entityId: t.data.id },
                                                        loadContextMeta: !0,
                                                    }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                }
                            },
                            [i, l, o, g, N, d, R, L, b],
                        ),
                        O = (0, p.L)(() => (_ ? i.length + eK.k : i.length)),
                        w = (0, p.L)(() =>
                            'list' === l
                                ? (0, s.jsx)(ej, { count: O, getEstimateRowSize: P, renderItemByIndex: B, onChangeRange: x })
                                : (0, s.jsx)(eu.Q, {
                                      count: O,
                                      rowGap: k.rowGap,
                                      columnGap: k.columnGap,
                                      getEstimateRowSize: f,
                                      minColumnCount: k.minColumnCount,
                                      minColumnWidth: k.minColumnWidth,
                                      maxColumnWidth: k.maxColumnWidth,
                                      maxColumnCount: k.maxColumnCount,
                                      renderItemByIndex: B,
                                      onChangeRange: x,
                                  }),
                        );
                    return (0, s.jsxs)(K.N, {
                        className: (0, r.$)(to().root, a),
                        containerClassName: to().container,
                        ref: t,
                        ...(0, et.OZ)(A),
                        children: [
                            (0, s.jsxs)('div', {
                                children: [
                                    u && (0, s.jsx)('div', { className: to().correctedTextBlock, children: u }),
                                    E && (0, s.jsx)(tr, { className: to().queryToVibe, requestAwakeLumenModal: C, sendSearchFeedback: d, vibe: I }),
                                    w,
                                ],
                            }),
                            (0, s.jsx)(q.A, { children: (0, s.jsx)(F.w, { className: to().footer }) }),
                        ],
                    });
                }),
                tl = (0, n.forwardRef)((e, t) => (0, s.jsx)(tn, { forwardRef: t, ...e }));
            var tc = a(22965),
                td = a(42853),
                tu = a(35465),
                tm = a(39058),
                t_ = a(58954),
                th = a(26508),
                tp = a(5365),
                tx = a(18412),
                tb = a(80986),
                tS = a(23976),
                tj = a(96027),
                tC = a.n(tj);
            let tv = (e) => {
                let { className: t, ariaLabel: a, isShimmerActive: i } = e;
                return (0, s.jsxs)('div', {
                    tabIndex: 0,
                    'aria-label': a,
                    'aria-live': 'polite',
                    'aria-busy': !0,
                    className: (0, r.$)(tC().root, t),
                    children: [
                        (0, s.jsxs)('div', {
                            className: tC().infoContainer,
                            children: [
                                (0, s.jsx)(tS.W, { className: tC().cover, radius: 's', isActive: i }),
                                (0, s.jsxs)('div', {
                                    className: tC().textContainer,
                                    children: [
                                        (0, s.jsx)(tS.W, { className: tC().title, radius: 's', isActive: i }),
                                        (0, s.jsx)(tS.W, { className: tC().description, radius: 's', isActive: i }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)(tS.W, { className: tC().action, radius: 's', isActive: i }),
                    ],
                });
            };
            var tA = a(36031),
                tg = a.n(tA);
            let ty = (e) => {
                let { shimmersCount: t = 3, isShimmerActive: a = !0 } = e,
                    { formatMessage: r } = (0, l.A)();
                return Array.from({ length: t }, (e, t) =>
                    (0, s.jsx)(
                        tv,
                        {
                            className: tg().root,
                            ariaLabel: r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'search.history' }) }),
                            isShimmerActive: a,
                        },
                        t,
                    ),
                );
            };
            var tT = a(93875),
                tI = a.n(tT);
            let tE = (e) => {
                    let {
                            forwardRef: t,
                            title: a,
                            description: i,
                            viewAllAction: o,
                            coverUrl: l,
                            children: c,
                            className: u,
                            maxColumns: m = 2,
                            itemsPerColumn: _ = 3,
                            containerClassName: h,
                            headerClassName: p,
                            titleSize: x,
                            showControls: b,
                            isShimmerVisible: S,
                            isShimmerActive: j,
                        } = e,
                        C = (0, n.useRef)(null),
                        v = (0, n.useId)(),
                        { items: A, columnLength: g } = (0, n.useMemo)(() => {
                            if (S)
                                return {
                                    columnLength: m,
                                    items: Array.from({ length: m }, (e, t) =>
                                        (0, s.jsx)('div', { className: tI().column, children: (0, s.jsx)(ty, { shimmersCount: 3, isShimmerActive: j }) }, t),
                                    ),
                                };
                            let e = (0, th.A)(c, _).slice(0, (null == c ? void 0 : c.length) ? Math.ceil(c.length / _) : m);
                            return { items: e.map((e, t) => (0, s.jsx)('div', { className: tI().column, children: e }, t)), columnLength: e.length };
                        }, [c, j, S, _, m]);
                    return (0, s.jsxs)('section', {
                        ref: t,
                        className: (0, r.$)(u, tI().root),
                        'data-test-id': d.e8.search.MIXED_ENTITIES_BLOCK,
                        children: [
                            (0, s.jsx)(tx.T, {
                                className: p,
                                labeledForId: v,
                                title: a,
                                description: i,
                                coverUrl: l,
                                viewAllActionLink: o,
                                titleSize: x,
                                controls: b && (0, s.jsx)(tb.X, { className: tI().controls, carouselRef: C }),
                                withDescription: !!i,
                            }),
                            (0, s.jsx)(tp.F, {
                                className: h,
                                ref: C,
                                itemClassName: (0, r.$)(tI().item, { [tI().item_withMultipleColumns]: g > 1 }),
                                'aria-labelledby': v,
                                role: 'group',
                                children: A,
                            }),
                        ],
                    });
                },
                tk = (0, n.forwardRef)((e, t) => (0, s.jsx)(tE, { forwardRef: t, ...e }));
            var tP = a(36648),
                tf = a(85759),
                tR = a.n(tf);
            let tN = (e) => {
                let { isShimmerActive: t } = e;
                return (0, s.jsxs)('div', {
                    className: tR().root,
                    children: [
                        (0, s.jsxs)('div', {
                            className: tR().container,
                            children: [
                                (0, s.jsx)(eY.V, {
                                    className: (0, r.$)(tR().entity, tR().important),
                                    shimmerClassName: (0, r.$)(tR().cover, tR().important),
                                    round: !0,
                                    withInfo: !1,
                                    isActive: t,
                                }),
                                (0, s.jsxs)('div', {
                                    className: tR().meta,
                                    children: [
                                        (0, s.jsx)(tP.n, { textClassName: (0, r.$)(tR().title, tR().important), isActive: t }),
                                        (0, s.jsx)(tP.n, { textClassName: (0, r.$)(tR().subtitle, tR().important), isActive: t }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)('div', {
                            className: tR().container,
                            children: [
                                (0, s.jsx)(eY.V, {
                                    className: (0, r.$)(tR().entity, tR().important),
                                    shimmerClassName: (0, r.$)(tR().cover, tR().important),
                                    withInfo: !1,
                                    isActive: t,
                                    radius: 'xs',
                                }),
                                (0, s.jsxs)('div', {
                                    className: tR().meta,
                                    children: [
                                        (0, s.jsx)(tP.n, { textClassName: (0, r.$)(tR().title, tR().important), isActive: t }),
                                        (0, s.jsx)(tP.n, { textClassName: (0, r.$)(tR().subtitle, tR().important), isActive: t }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            };
            var tL = a(27679),
                tB = a.n(tL),
                tO = a(68840),
                tw = a.n(tO),
                tD = a(87010),
                tM = a.n(tD);
            let tz = (0, i.PA)((e) => {
                let { album: t } = e;
                return (0, s.jsx)(eo.M, {
                    album: t,
                    className: (0, r.$)(tw().block, tM().root),
                    coverClassName: tw().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                });
            });
            var tH = a(51011),
                tU = a(83020),
                tV = a.n(tU);
            let tG = (0, i.PA)((e) => {
                let { artist: t } = e;
                return (0, s.jsx)(tH.c, {
                    artist: t,
                    className: (0, r.$)(tw().block, tV().root),
                    coverClassName: tw().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    pageId: eM._Q.SEARCH,
                });
            });
            var tW = a(87221),
                t$ = a(2096),
                tY = a(69730),
                tX = a(56348),
                tK = a(56778),
                tF = a(50209),
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
                    { from: i } = (0, eH.f)(),
                    { formatMessage: o } = (0, l.A)(),
                    c = { contextData: { type: ea.K.Various, meta: { id: a.entityId }, from: i }, queueParams: { index: 0, entityId: a.id }, loadContextMeta: !0 },
                    d = (0, tF.D)({ playContextParams: c, entityId: a.entityId }),
                    u = (0, n.useCallback)(
                        (e) =>
                            (0, s.jsx)(t1.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: (0, r.$)(tw().cover, t8().cover),
                                alt: o({ id: 'entity-names.track-name-by-type' }, { type: (0, tK.y)(a.type), name: a.title }),
                                radius: 'xs',
                                ...e,
                            }),
                        [o, a.coverUri, a.isAvailable, a.isDisliked, a.title, a.type],
                    ),
                    m = (0, tW.O)({ track: a, entityType: tq.n.AUDIOBOOK }),
                    _ = (0, p.L)(() =>
                        a.url && a.isAvailable
                            ? (0, s.jsx)(t0.N, { className: (0, r.$)(tZ().text, tZ().titleLink), href: a.url, onClick: m, children: a.title })
                            : (0, s.jsx)(G.HL, { className: (0, r.$)(tZ().text, tZ().titleText), size: 'm', variant: 'div', type: 'text', children: a.title }),
                    ),
                    h = (0, n.useCallback)(
                        (e, t) => {
                            var r;
                            return (null == (r = a.artists) ? void 0 : r.length)
                                ? (0, s.jsx)(tX.i, { linkClassName: e, captionClassName: t, artists: a.artists, lineClamp: 1, withLink: a.isAvailable })
                                : null;
                        },
                        [a.artists, a.isAvailable],
                    );
                return (0, s.jsx)(tY.C, {
                    className: (0, r.$)(tw().block, t8().root, tZ().root, { [tZ().root_disabled]: !a.isAvailable }),
                    track: a,
                    meta: (0, s.jsx)(tJ.r, {
                        isDisabled: !a.isAvailable,
                        version: a.version,
                        title: _,
                        artistsComponent: h,
                        getDescriptionTexts: a.getDescriptionTexts,
                        explicitMarkVariant: a.explicitDisclaimer,
                        releaseYear: (null == (t = a.mainAlbum) ? void 0 : t.isNonMusic) ? a.mainAlbum.year : void 0,
                    }),
                    playButtonCellRender: u,
                    playButtonIconSize: 'l',
                    controls: (0, s.jsx)(t$.Q, { track: a, utmLink: c.contextData.utmLink, likeIconSize: 'xs' }),
                    ...d,
                });
            });
            var t4 = a(25323),
                t9 = a(18483),
                t6 = a(38242),
                t5 = a.n(t6);
            let t7 = (0, i.PA)((e) => {
                    let { clip: t } = e,
                        a = (0, t9.d)(),
                        r = (0, n.useRef)(String((0, eQ.A)()));
                    return a
                        ? (0, s.jsx)(t4.N, {
                              clip: t,
                              viewUuid: r.current,
                              className: tw().block,
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
                    className: (0, r.$)(tw().block, ai().root),
                    coverClassName: tw().cover,
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
                a_ = a.n(am);
            let ah = (0, i.PA)((e) => {
                let { playlist: t } = e;
                return (0, s.jsx)(au.v, {
                    playlist: t,
                    className: (0, r.$)(tw().block, a_().root),
                    coverClassName: tw().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                });
            });
            var ap = a(51253),
                ax = a(44860),
                ab = a.n(ax);
            let aS = (0, i.PA)((e) => {
                let { track: t } = e,
                    { from: a } = (0, eH.f)(),
                    { formatMessage: i } = (0, l.A)(),
                    {
                        settings: { isMobile: o },
                    } = (0, v.g)(),
                    c = { contextData: { type: ea.K.Various, meta: { id: t.entityId }, from: a }, queueParams: { index: 0, entityId: t.id }, loadContextMeta: !0 },
                    u = (0, tF.D)({ playContextParams: c, entityId: t.entityId }),
                    m = (0, n.useCallback)(
                        (e) =>
                            (0, s.jsx)(t1.q, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: (0, r.$)(tw().cover, ab().cover),
                                alt: i({ id: 'entity-names.track-name-by-type' }, { type: (0, tK.y)(t.type), name: t.title }),
                                radius: 'xs',
                                ...e,
                            }),
                        [i, t.coverUri, t.isAvailable, t.isDisliked, t.title, t.type],
                    );
                return (0, s.jsx)(tY.C, {
                    className: (0, r.$)(tw().block, ab().root),
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
                    controls: (0, s.jsx)(t$.Q, { track: t, utmLink: c.contextData.utmLink, likeIconSize: 'xs' }),
                    ...u,
                    'data-test-id': d.Kq.track.TRACK_PODCAST,
                });
            });
            var aj = a(68846),
                aC = a.n(aj);
            let av = (0, i.PA)((e) => {
                let { album: t } = e;
                return (0, s.jsx)(eo.M, {
                    album: t,
                    className: (0, r.$)(tw().block, aC().root),
                    coverClassName: tw().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    description: (0, s.jsx)(U.A, { id: 'entity-names.recently-release' }),
                });
            });
            var aA = a(77737),
                ag = a(60706),
                ay = a.n(ag);
            let aT = (0, i.PA)((e) => {
                let { track: t } = e,
                    { from: a } = (0, eH.f)(),
                    {
                        settings: { isMobile: i },
                    } = (0, v.g)(),
                    o = { contextData: { type: ea.K.Various, meta: { id: t.entityId }, from: a }, queueParams: { index: 0, entityId: t.id }, loadContextMeta: !0 },
                    l = (0, tF.D)({ playContextParams: o, entityId: t.entityId }),
                    c = (0, n.useCallback)(
                        (e) =>
                            (0, s.jsx)(t1.q, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: (0, r.$)(tw().cover, ay().cover),
                                radius: 'xs',
                                ...e,
                            }),
                        [t.coverUri, t.isAvailable, t.isDisliked, t.title],
                    );
                return (0, s.jsx)(tY.C, {
                    className: (0, r.$)(tw().block, ay().root),
                    track: t,
                    meta: (0, s.jsx)(aA.j, { withArtistLink: !i, track: t }),
                    playButtonCellRender: c,
                    playButtonIconSize: 'l',
                    controls: (0, s.jsx)(t$.Q, { track: t, utmLink: o.contextData.utmLink, likeIconSize: 'xs' }),
                    ...l,
                    'data-test-id': d.Kq.track.SEARCH_TRACK_CARD,
                });
            });
            var aI = a(6104),
                aE = a(52512),
                ak = a(98288),
                aP = a(18284),
                af = a(64720),
                aR = a(6304),
                aN = a(51586),
                aL = a.n(aN);
            let aB = (0, i.PA)((e) => {
                let { upcomingAlbum: t } = e,
                    { ref: a, intersectionPropertyId: i } = (0, aE.n)(),
                    { user: o } = (0, v.g)(),
                    { formatMessage: c, formatDate: d } = (0, l.A)(),
                    u = (0, aI.P)(t),
                    m = (0, p.L)(() => {
                        let e = c({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: t.title }),
                            a = t.isPresave ? c({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(a);
                    }),
                    _ = (0, n.useCallback)(
                        (e, a) => {
                            var r;
                            return (null == (r = t.artists) ? void 0 : r.length)
                                ? (0, s.jsx)(tX.i, { linkClassName: e, captionClassName: a, artists: t.artists, lineClamp: 1 })
                                : null;
                        },
                        [t.artists],
                    );
                return (0, s.jsxs)(aP.C, {
                    ref: a,
                    'data-intersection-property-id': i,
                    className: (0, r.$)(tw().block, tZ().root, aL().root, aL().important),
                    'aria-label': m,
                    children: [
                        (0, s.jsxs)(eg.t, {
                            className: aL().cover,
                            radius: 'xs',
                            children: [
                                (0, s.jsx)(eR.B, {
                                    className: aL().coverImage,
                                    src: t.coverUri,
                                    size: 100,
                                    alt: c({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: t.title }),
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    fallbackIconSize: 'm',
                                    fallbackIconVariant: 'lock',
                                }),
                                t.coverUri && (0, s.jsx)(X.I, { className: aL().lockIcon, variant: 'lock', size: 'xs' }),
                            ],
                        }),
                        (0, s.jsx)(tJ.r, {
                            title: (0, s.jsx)(G.HL, { className: (0, r.$)(tZ().text, tZ().titleText), size: 'l', variant: 'div', type: 'text', children: t.title }),
                            description: (0, s.jsx)(G.HL, {
                                className: aL().releaseDate,
                                variant: 'div',
                                type: 'entity',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                children: (0, s.jsx)(U.A, { id: 'entity-names.upcoming-album-date', values: { releaseDate: d(t.releaseDate, (0, ak.s)()) } }),
                            }),
                            artistsComponent: _,
                            getDescriptionTexts: t.getDescriptionTexts,
                            explicitMarkVariant: t.explicitDisclaimer,
                        }),
                        (0, s.jsx)(aR.WithOffline, {
                            fallback: (0, s.jsx)(af.c, {
                                size: 'xs',
                                iconSize: 'xs',
                                className: aL().likeButton,
                                isLiked: t.isPresave,
                                onClick: u,
                                disabled: !o.isAuthorized,
                            }),
                        }),
                    ],
                });
            });
            var aO = a(28410),
                aw = a(32911),
                aD = a(98031),
                aM = a(42670),
                az = a.n(aM);
            let aH = (0, i.PA)((e) => {
                    var t;
                    let { vibe: a } = e;
                    return (0, s.jsx)(aD.H, {
                        className: (0, r.$)(az().root, az().important),
                        coverClassName: (0, r.$)(az().coverClassName, az().important),
                        playButtonIconSize: 'l',
                        vibe: a,
                        cover: (0, aO.wg)({ uri: a.backgroundImageUrl, color: null == (t = a.colors) ? void 0 : t.average }),
                        description: a.description,
                        agentVariant: aw.h.LARGE,
                    });
                }),
                aU = (0, i.PA)((e) => {
                    let { results: t, isShimmerVisible: a, isShimmerActive: i, blockPosition: o, sendSearchFeedback: u } = e,
                        { formatMessage: m } = (0, l.A)(),
                        _ = (0, n.useCallback)(
                            (e, a) => {
                                switch (e.type) {
                                    case tc.r.ALBUM:
                                        return (0, s.jsx)(
                                            ez.B,
                                            {
                                                objectType: c.DomainObjectType.Album,
                                                objectId: String(e.data.id),
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(eU.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.id, type: er.o.ALBUM, blockPosition: o, position: a },
                                                    children: (0, s.jsx)(tz, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case tc.r.PLAYLIST:
                                        return (0, s.jsx)(
                                            ez.B,
                                            {
                                                objectType: c.DomainObjectType.Playlist,
                                                objectId: e.data.id,
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(eU.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.id, type: er.o.PLAYLIST, blockPosition: o, position: a },
                                                    children: (0, s.jsx)(ah, { playlist: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case tc.r.RECENT_RELEASE:
                                        return (0, s.jsx)(
                                            ez.B,
                                            {
                                                objectType: c.DomainObjectType.Album,
                                                objectId: String(e.data.id),
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(eU.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.id, type: er.o.ALBUM, blockPosition: o, position: a },
                                                    children: (0, s.jsx)(av, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case tc.r.WAVE:
                                        return (0, s.jsx)(
                                            ez.B,
                                            {
                                                objectType: c.DomainObjectType.Wave,
                                                objectId: e.data.stationId,
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(eU.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.seedsId, type: er.o.WAVE, blockPosition: o, position: a },
                                                    children: (0, s.jsx)(aH, { vibe: e.data }),
                                                }),
                                            },
                                            e.data.stationId,
                                        );
                                    case tc.r.ARTIST:
                                        return (0, s.jsx)(
                                            ez.B,
                                            {
                                                objectType: c.DomainObjectType.Artist,
                                                objectId: e.data.id,
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(eU.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.id, type: er.o.ARTIST, blockPosition: o, position: a },
                                                    children: (0, s.jsx)(tG, { artist: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case tc.r.UPCOMING:
                                        return (0, s.jsx)(
                                            ez.B,
                                            {
                                                objectType: c.DomainObjectType.UpcomingAlbum,
                                                objectId: String(e.data.id),
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(aB, { upcomingAlbum: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case tc.r.CONCERT:
                                        return (0, s.jsx)(
                                            ez.B,
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
                                            ez.B,
                                            {
                                                objectType: c.DomainObjectType.Podcast,
                                                objectId: String(e.data.id),
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(eU.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.id, type: er.o.ALBUM, blockPosition: o, position: a },
                                                    children: (0, s.jsx)(ao, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case tc.r.NON_MUSIC:
                                        return (0, s.jsx)(
                                            ez.B,
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
                                            ez.B,
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
                                            ez.B,
                                            {
                                                objectType: c.DomainObjectType.Track,
                                                objectId: e.data.id,
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(eU.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.entityId, type: er.o.TRACK, blockPosition: o, position: a },
                                                    children: (0, s.jsx)(aT, { track: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case tc.r.CLIP:
                                        return (0, s.jsx)(
                                            ez.B,
                                            {
                                                objectType: c.DomainObjectType.Video,
                                                objectId: String(e.data.clipId),
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, s.jsx)(eU.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.clipId, type: er.o.CLIP, blockPosition: o, position: a },
                                                    children: (0, s.jsx)(t7, { clip: e.data }),
                                                }),
                                            },
                                            e.data.clipId,
                                        );
                                    case tc.r.BOOK_CHAPTER:
                                        return (0, s.jsx)(
                                            ez.B,
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
                        h = (0, n.useMemo)(() => t.map((e, t) => _(e, t)).filter((e) => (0, n.isValidElement)(e)), [_, t, t.length]);
                    return a
                        ? (0, s.jsx)(tN, { isShimmerActive: i })
                        : h.length
                          ? (0, s.jsx)(tt.F, {
                                blockId: td.h.SEARCH_BEST_RESULTS,
                                blockType: td.h.SEARCH_BEST_RESULTS,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: h.length,
                                children: (0, s.jsx)('div', {
                                    className: (0, r.$)(tB().root, { [tB().root_withSingleResult]: 1 === h.length }),
                                    role: 'group',
                                    'aria-label': m({ id: 'search-results.best' }),
                                    'data-test-id': d.e8.search.SEARCH_BEST_RESULTS,
                                    children: h,
                                }),
                            })
                          : null;
                });
            var aV = a(738),
                aG = a(66284);
            let aW = (0, i.PA)((e) => {
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
                            isShimmerActive: _,
                            isClipBlock: h,
                            ...p
                        } = e,
                        { search: x } = (0, v.g)(),
                        b = (0, t9.d)(),
                        S = a.filter((e) => e.type !== m.n.PODCAST_EPISODE);
                    return (x.isResolved && 0 === S.length) || (h && !b)
                        ? null
                        : (0, s.jsx)(aG.O, {
                              isShimmerVisible: u,
                              isShimmerActive: _,
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
                                              eU.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.id, type: er.o.ALBUM, blockPosition: o, position: t },
                                                  children: (0, s.jsx)(ei.a, { album: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.id,
                                          );
                                      case m.n.ARTIST:
                                          return (0, s.jsx)(
                                              eU.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.id, type: er.o.ARTIST, blockPosition: o, position: t },
                                                  children: (0, s.jsx)(en.a, { artist: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.id,
                                          );
                                      case m.n.PLAYLIST:
                                          return (0, s.jsx)(
                                              eU.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.id, type: er.o.PLAYLIST, blockPosition: o, position: t },
                                                  children: (0, s.jsx)(ec.B, { playlist: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.key,
                                          );
                                      case m.n.UGC_TRACK:
                                      case m.n.TRACK:
                                          return (0, s.jsx)(
                                              eU.N.Provider,
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
                                              eU.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.clipId, type: er.o.WAVE, blockPosition: o, position: t },
                                                  children: (0, s.jsx)(el.F, { clip: e.data }),
                                              },
                                              e.data.clipId,
                                          );
                                      case m.n.PODCAST:
                                          return (0, s.jsx)(
                                              eU.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.id, type: er.o.PODCAST, blockPosition: o, position: t },
                                                  children: (0, s.jsx)(ei.a, { album: e.data, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }),
                                              },
                                              e.data.id,
                                          );
                                      case m.n.WAVE:
                                          return (0, s.jsx)(
                                              eU.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.stationId, type: er.o.WAVE, blockPosition: 0, position: t },
                                                  children: (0, s.jsx)(aD.H, {
                                                      vibe: e.data,
                                                      cover: e.data.cover,
                                                      description: e.data.description,
                                                      agentVariant: aw.h.SMALL,
                                                  }),
                                              },
                                              e.data.stationId,
                                          );
                                  }
                              }),
                          });
                }),
                a$ = (0, n.forwardRef)((e, t) => (0, s.jsx)(aW, { forwardRef: t, ...e }));
            var aY = a(92043),
                aX = a.n(aY);
            let aK = (0, i.PA)((e) => {
                    let {
                            forwardRef: t,
                            className: a,
                            results: i,
                            bestResults: o,
                            sendSearchFeedback: c,
                            searchCorrectedText: _,
                            isShimmerVisible: h,
                            isShimmerActive: p,
                            q2vResults: x,
                            requestAwakeLumenModal: b,
                            ...S
                        } = e,
                        { formatMessage: j } = (0, l.A)(),
                        C = (0, eC.f)(),
                        { isVisible: v, vibe: A } = eq(x, p),
                        g = (0, n.useMemo)(() => {
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
                                            return (0, t_.G)({
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
                                                (0, s.jsx)(aU, { results: o, isShimmerVisible: h, isShimmerActive: p, blockPosition: r, sendSearchFeedback: c }),
                                                (0, s.jsx)(tt.F, {
                                                    blockId: td.h.SEARCH_OPEN_BEST_RESULTS,
                                                    blockType: td.h.SEARCH_OPEN_BEST_RESULTS,
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    objectsCount: e.length,
                                                    children: (0, s.jsx)(tk, {
                                                        containerClassName: aX().blockMixed,
                                                        className: aX().block,
                                                        maxColumns: 2,
                                                        itemsPerColumn: 3,
                                                        showControls: !0,
                                                        'aria-label': j({ id: 'search-results.other-results' }),
                                                        isShimmerVisible: h,
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
                                    a$,
                                    {
                                        className: aX().block,
                                        headerClassName: aX().blockHeader,
                                        containerClassName: aX().blockCarousel,
                                        blockPosition: r,
                                        items: i.items,
                                        title: i.message,
                                        sendSearchFeedback: c,
                                        isShimmerVisible: h,
                                        isShimmerActive: p,
                                        isClipBlock: l,
                                        ...(d ? { 'data-test-id': d } : {}),
                                    },
                                    r,
                                );
                            });
                        }, [j, i, c, h, p, o]);
                    return (0, s.jsxs)(K.N, {
                        className: (0, r.$)(aX().root, a),
                        containerClassName: aX().container,
                        ref: t,
                        ...(0, et.OZ)(S),
                        children: [
                            (0, s.jsxs)('div', {
                                className: aX().content,
                                children: [
                                    _ && (0, s.jsx)('div', { className: aX().correctedTextBlock, children: _ }),
                                    (0, s.jsxs)(tm.h, {
                                        tabId: u.$.TOP,
                                        tabPos: 1,
                                        isTabSelectedByDefault: !0,
                                        children: [
                                            C && v && (0, s.jsx)(tr, { requestAwakeLumenModal: b, sendSearchFeedback: c, vibe: A }),
                                            (0, s.jsx)('div', { className: aX().items, children: g }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsx)(q.A, { children: (0, s.jsx)(F.w, { className: aX().footer }) }),
                        ],
                    });
                }),
                aF = (0, n.forwardRef)((e, t) => (0, s.jsx)(aK, { forwardRef: t, ...e }));
            var aq = a(89257),
                aQ = a(82196),
                aZ = a(53690),
                aJ = a(40110),
                a0 = a(95858),
                a1 = a(10322),
                a2 = a(59858),
                a8 = a(89192),
                a3 = a(30716),
                a4 = a(53712),
                a9 = a(42574),
                a6 = a(36159),
                a5 = a(6969),
                a7 = a(83918),
                se = a(69041),
                st = a(79396),
                sa = a(9931);
            let ss = Math.floor(eK.k / 3);
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
                        (0, s.jsx)(tx.T, { className: sd().carouselHeader, title: i({ id: 'entity-names.mixes' }), titleSize: 'xs', viewAllActionLink: a4.Z.mixes.href }),
                        (0, s.jsx)(tp.F, { className: sd().carouselBlock, itemClassName: sd().mixItem, children: o }),
                    ],
                });
            });
            var sm = a(95214);
            let s_ = (0, i.PA)((e) => {
                let { className: t } = e,
                    {
                        settings: { isMobile: a },
                        search: r,
                    } = (0, v.g)();
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
            var sh = a(78631),
                sp = a.n(sh);
            let sx = (0, i.PA)(() => {
                let { search: e, user: t } = (0, v.g)(),
                    { formatMessage: a } = (0, l.A)(),
                    r = e.historyPage.items;
                if (
                    ((0, n.useEffect)(
                        () => () => {
                            var t;
                            (null == (t = location) ? void 0 : t.pathname) !== a4.Z.searchHistory.href && e.resetHistoryStateRequest();
                        },
                        [e],
                    ),
                    e.isHistoryReady && t.account.data.uid && (0, n.use)(e.getHistory({ userId: t.account.data.uid })),
                    0 === r.length)
                )
                    return null;
                let i = r.map((e, t) => (0, t_.G)({ item: e, index: t, pageId: eM._Q.SEARCH })).filter((e) => (0, n.isValidElement)(e));
                return (0, s.jsx)('section', {
                    className: sp().root,
                    children: (0, s.jsx)(tk, {
                        headerClassName: sp().header,
                        containerClassName: sp().content,
                        isShimmerVisible: e.isHistoryShimmerVisible,
                        isShimmerActive: e.isHistoryLoading,
                        title: a({ id: 'search.history' }),
                        viewAllAction: a4.Z.searchHistory.href,
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
            let sC = (0, i.PA)(() => {
                    let { search: e, user: t } = (0, v.g)(),
                        { formatMessage: a } = (0, l.A)(),
                        r = (0, sb.t)(e.resetHistoryItems),
                        i = e.historyPage.items;
                    if (
                        ((0, n.useEffect)(
                            () => () => {
                                var t;
                                (null == (t = location) ? void 0 : t.pathname) !== a4.Z.searchHistory.href && e.resetHistoryStateRequest();
                            },
                            [e],
                        ),
                        e.isHistoryReady && t.account.data.uid && (0, n.use)(e.getHistory({ userId: t.account.data.uid })),
                        0 === i.length)
                    )
                        return null;
                    let o = i.map((e, t) => (0, t_.G)({ item: e, index: t, pageId: eM._Q.SEARCH })).filter((e) => (0, n.isValidElement)(e));
                    return (0, s.jsxs)('div', {
                        children: [
                            (0, s.jsx)(tk, {
                                headerClassName: sj().header,
                                containerClassName: sj().mixedEntitiesBlock,
                                isShimmerVisible: e.isHistoryShimmerVisible,
                                isShimmerActive: e.isHistoryLoading,
                                title: a({ id: 'search.history' }),
                                viewAllAction: a4.Z.searchHistory.href,
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
                                    children: (0, s.jsx)(G.HL, { variant: 'span', size: 'm', type: 'text', children: (0, s.jsx)(U.A, { id: 'search.clear-history' }) }),
                                }),
                            }),
                        ],
                    });
                }),
                sv = (0, i.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, v.g)();
                    return e ? (0, s.jsx)(sC, {}) : (0, s.jsx)(sx, {});
                });
            var sA = a(64715),
                sg = a(1407),
                sy = a(67379),
                sT = a(87277),
                sI = a(59450),
                sE = a(84e3),
                sk = a(79670),
                sP = a(25488),
                sf = a(63494);
            let sR = [a5.K.BEST_PLAY, a5.K.SEEDS];
            var sN = a(10603);
            let sL = (0, i.PA)((e) => {
                    let { autoPlaySearchText: t, searchResults: a, setContentScrollRef: i, contentScrollRef: l, hasSearchText: u } = e,
                        {
                            lumen: m,
                            user: _,
                            search: p,
                            settings: { isMobile: x },
                        } = (0, v.g)(),
                        [b, S] = (0, em.d)(),
                        j = (0, n.useRef)(t),
                        C = t !== j.current,
                        A = m.isTriedToLoadData && !m.isAwakened;
                    ((e) => {
                        let { isEnabled: t, shouldCancel: a } = e,
                            { sonataState: s, vibe: r } = (0, v.g)(),
                            { pageId: i } = (0, eE.$)(),
                            l = (0, o.useSearchParams)(),
                            d = (0, sf.z)(),
                            u = ((e) => {
                                let { entityId: t, entityType: a, objectType: s } = e,
                                    r = (0, sI.st)(),
                                    i = (0, sE.U)(),
                                    { pageId: o, pagePlacement: n, pageStyle: l } = (0, eE.$)(),
                                    { blockId: d, blockType: u } = (0, eI.N)(),
                                    { objectType: m } = (0, sP.J)();
                                return (0, h.c)(() => {
                                    if (!r || !o) return;
                                    let e = {
                                            entityId: null != d ? d : t,
                                            entityType: null != u ? u : a,
                                            objectType: null != m ? m : s,
                                            pageId: sk.W[o],
                                            pagePlacement: null != n ? n : c.PagePlacements.Fullscreen,
                                            pageStyle: null != l ? l : c.PageStyles.Fullscreen,
                                        },
                                        _ = (0, sy.F)({ params: e, logger: i, context: 'useSendEventOnScreenStarted' });
                                    _ && (0, sT.e7)(r.evgenInstance, _);
                                });
                            })({ entityId: c.EntityTypes.Deeplink, entityType: c.EntityTypes.Deeplink, objectType: c.DomainObjectType.NonApplicable }),
                            m = (0, n.useRef)(!1),
                            _ = l.get(a5.K.BEST_PLAY),
                            p = l.get(a5.K.SEEDS),
                            x = 'true' === _ && p,
                            b = (null !== _ || null !== p) && !x,
                            S = (0, n.useRef)(x ? x.split(',') : []).current,
                            j = S.length > 0,
                            { isPlaying: C, togglePlay: A } = (0, eP.B)({ blockIdForFrom: c.EntityTypes.Q2vWave, pageIdForFrom: i, seeds: S });
                        ((0, n.useEffect)(() => {
                            b && d(sR);
                        }, [b, d]),
                            (0, n.useEffect)(() => {
                                let e = !a && !t;
                                !m.current && j && !e && ((m.current = !0), a || C || r.isApplying || (s.setShouldApplyYnisonState(!1), A(), d(sR), u()));
                            }, [j, t, C, d, u, a, s, A, r.isApplying]));
                    })({ isEnabled: m.isAwakened, shouldCancel: C || A });
                    let g = p.landing.hasUpperBlocks,
                        y = x || g,
                        T = !x && g;
                    return u
                        ? a
                        : _.isAuthorized
                          ? (0, s.jsx)(sg.h, {
                                scrollElement: T ? null : l,
                                headerElement: b,
                                children: (0, s.jsxs)(K.N, {
                                    className: (0, r.$)(si().scrollableContent, { [si().scrollableContent_withUpperBlocks]: g }),
                                    containerClassName: si().main,
                                    ref: i,
                                    'data-test-id': d.Xk.search.SEARCH_PAGE_CONTENT,
                                    children: [
                                        (0, s.jsx)(so.E, {
                                            containerClassName: (0, r.$)(si().skeletonContainer, { [si().skeletonContainer_withUpperBlocks]: g }),
                                            headerClassName: T ? (0, r.$)(si().skeletonHeaderWithUpperBlocks, si().important) : void 0,
                                            stickyHeaderClassName: T
                                                ? (0, r.$)(si().skeletonStickyHeaderWithUpperBlocks, si().important)
                                                : (0, r.$)(si().skeletonStickyHeader, si().important),
                                            stickyHeaderTabIndex: y ? null : 0,
                                            headerConcealerComponent: (0, s.jsx)('div', { ref: S }),
                                            landing: p.landing,
                                            errorComponent: (0, s.jsx)(sA.SomethingWentWrong, { className: si().error, withBackwardControl: !1 }),
                                            headerVariant: y ? sN.V.COMPOSITE : sN.V.STICKY,
                                        }),
                                        (0, s.jsx)(q.A, { children: (0, s.jsx)(F.w, { className: si().footer }) }),
                                    ],
                                }),
                            })
                          : (0, s.jsxs)(K.N, {
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
                                            children: (0, s.jsx)(sv, {}),
                                        }),
                                    }),
                                    (0, s.jsx)(n.Suspense, { children: (0, s.jsx)(s_, { className: si().mixes }) }),
                                    (0, s.jsx)(q.A, { children: (0, s.jsx)(F.w, { className: si().footer }) }),
                                ],
                            });
                }),
                sB = (0, i.PA)(() => {
                    var e;
                    let t = (0, eC.f)(),
                        { awakeLumenModal: a, requestAwakeLumenModal: i } = (0, aQ.z)(),
                        S = (0, b.zb)(0),
                        [j, C] = (0, n.useState)(u.$.TOP),
                        [A, g] = (0, n.useState)(!1),
                        [y, T] = (0, n.useState)(null),
                        { formatMessage: I } = (0, l.A)(),
                        { search: E, experiments: k, location: P, lumen: f, user: R, settings: N } = (0, v.g)(),
                        { isMobile: L } = N,
                        B = k.checkExperiment(eG.z.WebNextQueryToVibeInputAnimation, 'on'),
                        { contentScrollRef: O, setContentScrollRef: w } = (0, a8.g)(),
                        D = ((e) => {
                            let { formatMessage: t } = (0, l.A)(),
                                a = (0, t9.d)(),
                                { experiments: s } = (0, v.g)(),
                                r = !s.checkExperiment(eG.z.WebNextProductWithoutRecommendation, 'on'),
                                i = s.checkExperiment(eG.z.WebNextSearchConcerts, 'on');
                            return e
                                ? [{ id: u.$.TOP, displayName: t({ id: 'search-filters.top' }) }, ...e].filter((e) => {
                                      if ((e.id !== u.$.CLIP || a) && (e.id !== u.$.CONCERT || i) && (e.id !== u.$.WAVES || r)) return e;
                                  })
                                : [{ id: u.$.TOP, displayName: t({ id: 'search-filters.top' }) }];
                        })(E.filters),
                        M = (0, a7.X)(),
                        [z, U] = (0, n.useState)(() => {
                            var e;
                            return decodeURIComponent(null != (e = new URLSearchParams(P.searchParams).get(a5.K.TEXT)) ? e : '');
                        }),
                        V = (0, n.useRef)(z),
                        G = z.length > 0,
                        W = A && null != (e = E.searchCorrectedText) ? e : z;
                    (k.checkExperiment(eG.z.WebNextDisableSearch, 'on') && (0, o.redirect)(a4.Z.main.href),
                        (0, a3.J)(E.landing.loadingState === a6.G.RESOLVE),
                        (0, n.useEffect)(
                            () => () => {
                                (E.reset(), R.isAuthorized && E.landing.reset());
                            },
                            [R.isAuthorized, k, E],
                        ),
                        (0, n.useEffect)(() => {
                            f.isEnabled && f.getData();
                        }, [f]));
                    let $ = (0, h.c)((e, t) => {
                            (E.resetResults(), 0 !== e.length && E.getSearchResults({ text: decodeURIComponent(e), filter: t }));
                        }),
                        X = (0, h.c)(() => {
                            g(!0);
                        }),
                        K = (0, h.c)((e) => {
                            e.trim() && T(e);
                        }),
                        F = (0, h.c)((e) => {
                            var t, a;
                            if (!S.onTabChange || e === S.value) return;
                            S.onTabChange(e);
                            let s = null != (a = null == (t = D[e]) ? void 0 : t.id) ? a : u.$.TOP;
                            (Object.values(u.$).includes(s) && (C(s), $(V.current, s)), O && (O.scrollTop = 0));
                        }),
                        q = (0, h.c)((e) => {
                            let t = e.trim(),
                                a = encodeURIComponent(t);
                            (U(a),
                                (V.current = a),
                                0 !== S.value && F(0),
                                $(a, u.$.TOP),
                                E.history.setShouldUpdateHistory(!0),
                                E.resetSearchCorrectedText(),
                                g(!1),
                                T(null));
                            let s = new URL(window.location.href);
                            (s.searchParams.set(a5.K.TEXT, t), M(String(s)));
                        }),
                        Q = (0, h.c)((e) => {
                            var t, a;
                            let { id: s, type: r, blockPosition: i, position: o, feedbackType: n } = e;
                            E.sendFeedback({
                                blockType: r,
                                entityId: ''.concat(r, ':').concat(s),
                                timestamp: new Date().toISOString(),
                                searchRequestId: E.searchRequestId,
                                query: V.current,
                                clickType: n,
                                blockPosition: i,
                                position: o,
                                page: null != (a = null == (t = E.pagesLoader.pager) ? void 0 : t.page) ? a : 0,
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
                        })({ search: E, searchText: V.current, searchFilter: j }),
                        J = (0, n.useMemo)(
                            () => (E.searchCorrectedText ? (0, s.jsx)(Y, { searchCorrectedText: E.searchCorrectedText, onCorrectText: X }) : null),
                            [X, E.searchCorrectedText],
                        ),
                        et = (0, p.L)(() => {
                            var e, t, a, r, o;
                            if (E.isEmpty) return (0, s.jsx)(ee, { searchCorrectedText: J });
                            let n = {
                                className: si().searchResults,
                                isShimmerVisible: E.isShimmerVisible,
                                isShimmerActive: E.isLoading,
                                results: null != (e = E.pagesLoader.items) ? e : [],
                                requestsCount: E.pagesLoader.requestsCount,
                                bestResults: E.bestResults,
                                q2vResults: E.q2vResults,
                                sendSearchFeedback: Q,
                                searchCorrectedText: J,
                                getDataByRange: Z,
                                ref: w,
                                requestAwakeLumenModal: i,
                            };
                            switch (j) {
                                case u.$.TOP:
                                    return (0, s.jsx)(tm.h, {
                                        tabId: j,
                                        tabPos: E.filterPosition(j),
                                        isTabSelectedByDefault: !1,
                                        children: (0, s.jsx)(aF, { ...n, 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_TOP }),
                                    });
                                case u.$.TRACK:
                                    return (0, s.jsx)(tm.h, {
                                        tabId: j,
                                        tabPos: E.filterPosition(j),
                                        isTabSelectedByDefault: !1,
                                        children: (0, s.jsx)(tt.F, {
                                            blockId: aJ.U.SEARCH,
                                            blockType: c.EntityTypes.Tracks,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (t = E.pagesLoader.items) ? void 0 : t.length,
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
                                        tabPos: E.filterPosition(j),
                                        isTabSelectedByDefault: !1,
                                        children: (0, s.jsx)(tt.F, {
                                            blockId: aJ.U.SEARCH,
                                            blockType: c.EntityTypes.Podcasts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (a = E.pagesLoader.items) ? void 0 : a.length,
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
                                        tabPos: E.filterPosition(j),
                                        isTabSelectedByDefault: !1,
                                        children: (0, s.jsx)(tt.F, {
                                            blockId: aJ.U.SEARCH,
                                            blockType: c.EntityTypes.Podcasts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (r = E.pagesLoader.items) ? void 0 : r.length,
                                            children: (0, s.jsx)(tl, { ...n, filter: m.n.BOOK, variant: 'list', 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_BOOK }),
                                        }),
                                    });
                                case u.$.CLIP:
                                    return (0, s.jsx)(tl, { ...n, filter: m.n.CLIP, 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_CLIP });
                                case u.$.WAVES:
                                    return (0, s.jsx)(tm.h, {
                                        tabId: j,
                                        tabPos: E.filterPosition(j),
                                        isTabSelectedByDefault: !1,
                                        children: (0, s.jsx)(tl, { ...n, filter: m.n.WAVE, 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_WAVES }),
                                    });
                                case u.$.CONCERT:
                                    return (0, s.jsx)(tm.h, {
                                        tabId: j,
                                        tabPos: E.filterPosition(j),
                                        isTabSelectedByDefault: !1,
                                        children: (0, s.jsx)(tt.F, {
                                            blockId: aJ.U.SEARCH,
                                            blockType: c.EntityTypes.Concerts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (o = E.pagesLoader.items) ? void 0 : o.length,
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
                                        onTabChange: F,
                                        children: D.map((e, t) =>
                                            (0, s.jsx)(
                                                st.o,
                                                { className: (0, r.$)(si().tab, { [si().tab_selected]: t === S.value }), title: e.displayName, value: t },
                                                t,
                                            ),
                                        ),
                                    }),
                                });
                        }, [D, F, S, G]),
                        es = (0, p.L)(() => {
                            let e = t ? I({ id: 'search.input-placeholder-q2v' }) : I({ id: 'search.input-placeholder' }),
                                a = {
                                    className: si().input,
                                    autoFocus: !0,
                                    initialValue: V.current,
                                    placeholder: e,
                                    onChange: q,
                                    resetButtonAriaLabel: I({ id: 'interface-actions.reset-search-input' }),
                                    correctedValue: null != y ? y : A ? E.searchCorrectedText : null,
                                    innerInputProps: { 'data-test-id': d.Xk.search.SEARCH_PAGE_SEARCH_INPUT },
                                    resetButtonProps: { 'data-test-id': d.Xk.search.SEARCH_PAGE_SEARCH_INPUT_RESET_BUTTON },
                                    searchIconProps: { 'data-test-id': d.Xk.search.SEARCH_PAGE_SEARCH_INPUT_ICON },
                                };
                            return B ? (0, s.jsx)(H, { ...a, lumenColor: aZ.R }) : (0, s.jsx)(x.D, { ...a });
                        }),
                        er = (0, h.c)(() => {
                            if (E.landing.isLoaded) return E.landing.getSkeleton({ id: _.p.SEARCH, showWizard: R.settings.showWizard }, { preloadBlocksCount: 2 });
                        });
                    return (
                        E.isNeededToLoad && G && (0, n.use)(E.getSearchResults({ text: decodeURIComponent(z), filter: j })),
                        R.isAuthorized &&
                            E.landing.isNeededToLoad &&
                            !G &&
                            (0, n.use)(E.landing.getSkeleton({ id: _.p.SEARCH, showWizard: R.settings.showWizard }, { preloadBlocksCount: 2 })),
                        (0, s.jsx)(a1.n, {
                            pageId: eM._Q.SEARCH,
                            displayReasonId: E.searchRequestId,
                            children: (0, s.jsxs)(a2.l, {
                                skeleton: _.p.SEARCH,
                                children: [
                                    a,
                                    (0, s.jsx)(a9.m.Provider, {
                                        value: K,
                                        children: (0, s.jsxs)('div', {
                                            className: (0, r.$)(si().root, { [si().root_showFilters]: G, [si().root_mobile]: L }),
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
                                                        children: (0, s.jsx)(sL, {
                                                            autoPlaySearchText: W,
                                                            hasSearchText: G,
                                                            contentScrollRef: O,
                                                            setContentScrollRef: w,
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
        86432: (e) => {
            e.exports = {
                coverBlock: 'ArtistCard_coverBlock__YCSus',
                like: 'ArtistCard_like__jmlKc',
                root: 'ArtistCard_root__F4RfA',
                root_selected: 'ArtistCard_root_selected__9Djbq',
                cover: 'ArtistCard_cover__RSTvK',
                image: 'ArtistCard_image__Uab5w',
                name: 'ArtistCard_name__IF9yZ',
                icon: 'ArtistCard_icon__PjbJI',
            };
        },
        87010: (e) => {
            e.exports = { root: 'SearchBestResultsAlbumBlock_root__j7nJ4' };
        },
        89209: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => s });
            var s = (function (e) {
                return (
                    (e.MAIN = 'MAIN'),
                    (e.TRAILER = 'TRAILER'),
                    (e.VIDEO_PLAYER = 'VIDEO_PLAYER'),
                    (e.IMAGE_SLIDER = 'IMAGE_SLIDER'),
                    (e.PROMO_LANDING = 'PROMO_LANDING'),
                    e
                );
            })({});
        },
        89257: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => V });
            var s = a(25839),
                r = a(82298),
                i = a(88204),
                o = a(74631),
                n = a(39004),
                l = a(8487),
                c = a(61493),
                d = a(68934),
                u = a(4071),
                m = a(35622),
                _ = a(5867),
                h = a(4254),
                p = a(51859),
                x = a(91149),
                b = a(92942),
                S = a(65343),
                j = a(89209),
                C = a(20790),
                v = a(27954),
                A = a(31488),
                g = a(36159),
                y = a(57549),
                T = a(69041),
                I = a(19412),
                E = a(79396),
                k = a(9931),
                P = a(6968),
                f = a(51246),
                R = a(66738),
                N = a(86869),
                L = a(52512),
                B = a(6323),
                O = a(27819),
                w = a(86432),
                D = a.n(w);
            let M = (0, i.PA)((e) => {
                let { className: t, artist: a } = e,
                    { ref: i, intersectionPropertyId: n } = (0, L.n)(),
                    {
                        wizard: { likeArtist: l, isArtistLiked: d },
                    } = (0, v.g)(),
                    { id: m, name: _, coverUri: p } = a,
                    x = (0, o.useCallback)(() => {
                        l(m);
                    }, [l, m]),
                    b = d(m),
                    S = (0, o.useMemo)(
                        () =>
                            (0, s.jsx)(N.t, {
                                className: D().cover,
                                radius: 'round',
                                'data-test-id': c.e8.wizard.ARTIST_CARD,
                                children: (0, s.jsxs)(u.$, {
                                    radius: 'round',
                                    className: D().coverBlock,
                                    variant: 'default',
                                    onClick: x,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': b,
                                    'aria-label': _,
                                    'data-test-id': c.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, s.jsx)(B.B, { className: D().image, src: p || O.A.src, fit: 'cover', alt: _, withAvatarReplace: !!p, 'aria-hidden': !0 }),
                                        (0, s.jsx)('div', {
                                            className: (0, r.$)(D().like),
                                            children: (0, s.jsx)(R.I, { variant: 'likedVariant', size: 's', className: D().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [b, p, _, x],
                    );
                return (0, s.jsx)(f.MN, {
                    ref: i,
                    className: (0, r.$)(D().root, { [D().root_selected]: b }, t),
                    textPosition: 'center',
                    title: (0, s.jsx)(h.HL, {
                        'aria-hidden': !0,
                        className: D().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.e8.wizard.ARTIST_CARD_NAME,
                        children: _,
                    }),
                    'data-intersection-property-id': n,
                    view: S,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                });
            });
            var z = a(22984),
                H = a.n(z);
            let U = { [p.u.Desktop]: { start: 40, end: 40 }, [p.u.Mobile]: { start: 40, end: 40 } },
                V = (0, i.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: a } = (0, n.A)(),
                        {
                            wizard: i,
                            settings: { isMobile: p, isWindowsApplication: f, isLinuxApplication: R },
                            user: N,
                        } = (0, v.g)(),
                        { notify: L } = (0, b.l)(),
                        B = (0, C.z)(),
                        [O, w] = (0, d.d)(),
                        D = (0, _.zb)(0),
                        z = (0, o.useMemo)(
                            () => (e) => {
                                var t;
                                if (!D.onTabChange || e === D.value) return;
                                D.onTabChange(e);
                                let a = null == (t = i.genres[e]) ? void 0 : t.id;
                                (i.setFilter(a), null == O || O.scrollTo({ top: 0 }));
                            },
                            [i, D, O],
                        ),
                        V = (0, o.useMemo)(() => {
                            switch (i.selectedArtistsQuantity) {
                                case 0:
                                    return a({ id: 'wizard.button-tune' });
                                case 1:
                                    return a({ id: 'wizard.button-little-more' });
                                case 2:
                                    return a({ id: 'wizard.button-one-more' });
                                default:
                                    return a({ id: 'wizard.button-done' });
                            }
                        }, [i.selectedArtistsQuantity, a]),
                        G = (0, o.useMemo)(
                            () =>
                                (0, s.jsx)(k.wI, {
                                    className: H().tabCarousel,
                                    ...D,
                                    onTabChange: z,
                                    isShimmerVisible: i.loadingState === g.G.PENDING,
                                    shimmer: (0, s.jsx)(k.zr, { isActive: !0, className: H().tabCarousel, shimmerClassName: H().tabShimmer, count: p ? 2 : 3 }),
                                    children: i.genres.map((e, t) =>
                                        (0, s.jsx)(
                                            E.o,
                                            {
                                                className: (0, r.$)(H().filter, { [H().filter_selected]: t === D.value }),
                                                titleClassName: H().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [i.genres, D, z, i.loadingState, p],
                        ),
                        W = (0, o.useCallback)(() => {
                            i.loadArtists(60);
                        }, [i]);
                    (0, o.useEffect)(() => {
                        i.filter && W();
                    }, [i.filter, W]);
                    let $ = (0, o.useCallback)(async () => {
                        (await i.loadGenres(), W());
                    }, [i, W]);
                    ((0, o.useEffect)(() => {
                        i.modal.isOpened && $();
                    }, [i, i.modal.isOpened, $]),
                        (0, o.useEffect)(() => {
                            i.loadingState === g.G.REJECT &&
                                (i.modal.close(), L((0, s.jsx)(y.h, { error: a({ id: 'error-messages.error-load-wizard' }) }), { containerId: x.u.ERROR }));
                        }, [i, i.loadGenres, i.loadingState, a, L]));
                    let Y = (0, o.useMemo)(
                            () =>
                                (0, s.jsx)(h.DZ, {
                                    className: H().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': c.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, s.jsx)(l.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        X = (0, o.useCallback)(async () => {
                            (i.canFinish ? (await i.finish()) === A.F.OK && (await N.getSettings(), await (null == t ? void 0 : t())) : i.loadArtists(), i.modal.close());
                        }, [t, N, i]);
                    return (
                        (0, o.useEffect)(
                            () => (
                                null == B ||
                                    B.addShortcutsListener(j.M.MAIN, S.l.CLOSE, () => {
                                        i.modal.isOpened && X();
                                    }),
                                () => {
                                    null == B || B.removeShortcutsListener(j.M.MAIN, S.l.CLOSE);
                                }
                            ),
                            [X, i.modal.isOpened, B],
                        ),
                        (0, s.jsxs)(m.a, {
                            className: (0, r.$)(H().root, { [H().root_withCustomControls]: f || R }),
                            headerClassName: H().modalHeader,
                            contentClassName: H().modalContent,
                            open: i.modal.isOpened,
                            onOpenChange: i.modal.onOpenChange,
                            onClose: X,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: a({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: c.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': c.e8.wizard.WIZARD_MODAL,
                            header: p && Y,
                            escapeKey: !1,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: H().wrapper,
                                    children: [
                                        !p && Y,
                                        (0, s.jsx)(h.HL, {
                                            className: H().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, s.jsx)(l.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, s.jsx)(u.$, {
                                            className: H().button,
                                            size: p ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: X,
                                            disabled: !i.canFinish,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, s.jsx)(h.HL, { variant: 'div', size: 'm', weight: 'medium', children: V }),
                                        }),
                                    ],
                                }),
                                (0, s.jsxs)('div', {
                                    className: H().mainContainer,
                                    children: [
                                        (0, s.jsx)(T.F, { className: H().carousel, carouselElement: G, scrollPadding: U }),
                                        (0, s.jsx)(P.$, {
                                            withFooter: !1,
                                            className: (0, r.$)(H().scrollContainer, H().important),
                                            itemContentCallback: (e) => {
                                                let t = i.artistsByGenre[e];
                                                if (!t) {
                                                    let e = a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.artist' }) });
                                                    return (0, s.jsx)(I.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, s.jsx)(M, { artist: t }, t.id);
                                            },
                                            data: i.artistsByGenre,
                                            endReached: W,
                                            listClassName: H().content,
                                            itemClassName: H().item,
                                            pageSize: 60,
                                            handleRef: w,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
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
            a.d(t, { n: () => h });
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
                _ = a.n(m);
            let h = (0, i.PA)((e) => {
                let { isShimmerVisible: t, isShimmerActive: a, withTitle: i, mixes: m, shimmerCount: h = 5, className: p } = e,
                    x = (0, o.useMemo)(
                        () =>
                            t
                                ? (0, s.jsx)(u.e, { isActive: a, round: !1, centered: !1, withInfo: !1, count: h })
                                : m.map((e) => (0, s.jsx)(d.N, { title: e.title, weblink: e.weblink, covers: e.covers, imagesLayoutType: e.imagesLayoutType }, e.id)),
                        [a, t, m, h],
                    );
                return (0, s.jsxs)('div', {
                    'data-test-id': l.e8.mixes.MIXES_GRID_CONTAINER,
                    children: [
                        i &&
                            (0, s.jsx)(c.DZ, {
                                className: _().mixesTitle,
                                size: 's',
                                weight: 'bold',
                                variant: 'h3',
                                'data-test-id': l.e8.mixes.MIXES_GRID_HEADER,
                                children: (0, s.jsx)(n.A, { id: 'entity-names.mixes' }),
                            }),
                        (0, s.jsx)('div', { className: (0, r.$)(_().mixesGrid, p), children: x }),
                    ],
                });
            });
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
                        maxColumnWidth: _,
                        maxColumnCount: h,
                        renderItemByIndex: p,
                        onChangeRange: x,
                    } = e,
                    [b, S] = (0, o.d)(),
                    {
                        virtualizer: j,
                        rowResizeObserver: C,
                        columnCount: v,
                        indices: A,
                    } = (0, n.L)({
                        count: t,
                        rowGap: a,
                        columnGap: r,
                        getEstimateRowSize: c,
                        minColumnCount: u,
                        minColumnWidth: m,
                        maxColumnWidth: _,
                        maxColumnCount: h,
                        containerRef: b,
                    });
                (0, i.useEffect)(() => {
                    !j.isScrolling && j.range && (null == x || x(j.range, v));
                }, [x, j.isScrolling, j.range, v]);
                let g = { '--virtual-grid-height': ''.concat(j.getTotalSize(), 'px'), '--virtual-grid-column-count': v };
                return (0, s.jsx)('div', {
                    ref: S,
                    style: g,
                    className: d().root,
                    children: j
                        .getVirtualItems()
                        .map((e) =>
                            (0, s.jsx)(
                                l.U,
                                {
                                    className: d().row,
                                    columnClassName: d().column,
                                    virtualItem: e,
                                    resizeObserver: C,
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
                3181, 2767, 3349, 7339, 7055, 740, 6287, 2121, 3472, 5128, 3112, 1540, 947, 1632, 9861, 6744, 8451, 1583, 364, 2779, 8561, 2e3, 5743, 3084, 3021, 5058,
                6170, 9468, 6706, 4771, 1311, 5201, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1251, 1817, 6215, 3257, 853, 2038, 4163, 3246, 7848, 3482, 6680, 2247,
                7856, 8836, 820, 4434, 8649, 862, 6361, 5898, 1808, 8222, 5232, 4932, 5622, 3268, 2445, 5853, 4018, 338, 4475, 5056, 7358,
            ],
            () => e((e.s = 61670)),
        ),
            (_N_E = e.O()));
    },
]);
