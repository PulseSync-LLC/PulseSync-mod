(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2839],
    {
        597: (e) => {
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
        3448: (e) => {
            e.exports = { root: 'SearchBestResultsPlaylistBlock_root__HLU50' };
        },
        5885: (e) => {
            e.exports = {
                root: 'MixedEntitiesBlock_root__Zs8l2',
                controls: 'MixedEntitiesBlock_controls__mOhq7',
                item: 'MixedEntitiesBlock_item__uRvxc',
                item_withMultipleColumns: 'MixedEntitiesBlock_item_withMultipleColumns__ziUqI',
                column: 'MixedEntitiesBlock_column__sHpUC',
            };
        },
        6424: (e) => {
            e.exports = { cover: 'SearchBestResultsClipBlock_cover___5Wwj' };
        },
        6668: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => i });
            var r = a(53548),
                s = a(29993);
            let i = () => {
                let e = (0, r.useRef)(new Map());
                return (
                    (0, r.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, s.c)((t, a) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, a), a)))
                );
            };
        },
        7628: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => h });
            var r = a(88800),
                s = a(88969),
                i = a(58390),
                o = a(17392),
                n = a(29993),
                l = a(96817),
                c = a(29504),
                d = a(99890),
                u = a(4086),
                m = a(41928);
            let h = (e) => {
                let { size: t = 'm', variant: a = 'default', color: h = 'primary', withRipple: _ = !0, buttonText: p, isBlock: x, key: b, className: S } = e,
                    v = (0, i.useRouter)(),
                    j = (0, m.N)().get(u.QG),
                    C = (0, n.c)(() => {
                        j.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), v.push(j.authorizationUrl));
                    });
                return (0, r.jsx)(
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
                        children: p || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(s.A, { id: 'authorization.enter-button' }) }),
                    },
                    b,
                );
            };
        },
        12360: (e) => {
            e.exports = { root: 'SearchBestResultsAlbumBlock_root__j7nJ4' };
        },
        14661: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { n: () => r }),
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
                })(r || (r = {})));
        },
        15324: (e) => {
            e.exports = { root: 'VirtualGrid_root__nSEzJ', column: 'VirtualGrid_column__P8hJp', row: 'VirtualGrid_row__PL5V_' };
        },
        17017: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { Z: () => r }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(r || (r = {})));
        },
        19840: (e, t, a) => {
            'use strict';
            (a.d(t, { G: () => s }), a(46606));
            var r = a(91136);
            class s extends r.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        19955: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 48750));
        },
        20445: (e) => {
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
        21576: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => u });
            var r = a(88800),
                s = a(84961),
                i = a(53548),
                o = a(50408),
                n = a(47969),
                l = a(53360),
                c = a(15324),
                d = a.n(c);
            let u = (0, s.PA)((e) => {
                let {
                        count: t,
                        rowGap: a,
                        columnGap: s,
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
                        virtualizer: v,
                        rowResizeObserver: j,
                        columnCount: C,
                        indices: A,
                    } = (0, n.L)({
                        count: t,
                        rowGap: a,
                        columnGap: s,
                        getEstimateRowSize: c,
                        minColumnCount: u,
                        minColumnWidth: m,
                        maxColumnWidth: h,
                        maxColumnCount: _,
                        containerRef: b,
                    });
                (0, i.useEffect)(() => {
                    !v.isScrolling && v.range && (null == x || x(v.range, C));
                }, [x, v.isScrolling, v.range, C]);
                let y = { '--virtual-grid-height': ''.concat(v.getTotalSize(), 'px'), '--virtual-grid-column-count': C };
                return (0, r.jsx)('div', {
                    ref: S,
                    style: y,
                    className: d().root,
                    children: v
                        .getVirtualItems()
                        .map((e) =>
                            (0, r.jsx)(
                                l.U,
                                {
                                    className: d().row,
                                    columnClassName: d().column,
                                    virtualItem: e,
                                    resizeObserver: j,
                                    indices: A,
                                    renderItemByIndex: p,
                                    scrollMargin: v.options.scrollMargin,
                                },
                                e.key,
                            ),
                        ),
                });
            });
        },
        22549: (e) => {
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
        28777: (e) => {
            e.exports = { root: 'SearchBestResults_root__12Tlp', root_withSingleResult: 'SearchBestResults_root_withSingleResult__qAMCB' };
        },
        33301: (e) => {
            e.exports = {
                button: 'SearchHistoryBlockMobile_button__Wh_Q6',
                header: 'SearchHistoryBlockMobile_header__Lx4On',
                mixedEntitiesBlock: 'SearchHistoryBlockMobile_mixedEntitiesBlock__cJ3o_',
                buttonContainer: 'SearchHistoryBlockMobile_buttonContainer__IppED',
            };
        },
        34232: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => r });
            let r = (e) => (e ? e.replace('-', '_') : null);
        },
        35786: (e) => {
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
        35948: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => r });
            let r = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        },
        37717: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => p });
            var r = a(88800),
                s = a(53548),
                i = a(2058),
                o = a(88969),
                n = a(58390),
                l = a(29993),
                c = a(29595),
                d = a(74965),
                u = a(4370),
                m = a(72288),
                h = a(59304),
                _ = a(66943);
            let p = (e) => {
                let { user: t, search: a } = (0, m.g)(),
                    { formatMessage: p } = (0, i.A)(),
                    { notify: x } = (0, d.l)(),
                    b = (0, n.useRouter)();
                return (
                    (0, s.useEffect)(() => {
                        a.isEmptyHistory && b.push(u.Z.search.href);
                    }, [a.isEmptyHistory, b]),
                    (0, l.c)(() => {
                        try {
                            (t.account.data.uid && a.clearHistory({ userId: t.account.data.uid }),
                                x((0, r.jsx)(h.$, { message: (0, r.jsx)(o.A, { id: 'search.cleared-history' }) }), { containerId: c.u.INFO }),
                                e && e(),
                                b.push(u.Z.search.href));
                        } catch (e) {
                            x((0, r.jsx)(_.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: c.u.ERROR });
                        }
                    })
                );
            };
        },
        41427: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { $: () => r }),
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
                })(r || (r = {})));
        },
        45923: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { r: () => r }),
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
                })(r || (r = {})));
        },
        46606: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { X: () => r }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(r || (r = {})));
        },
        47969: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => c });
            var r = a(35802),
                s = a(79070),
                i = a(61013),
                o = a(53548);
            let n = (e) => {
                let { minColumnWidth: t, maxColumnWidth: a, containerWidth: r, totalCount: s, columnGap: i, minColumnCount: o, maxColumnCount: n } = e,
                    l = Math.max(1, Math.floor((r + i) / (t + i))),
                    c = Math.max(o, Math.floor((r + i) / ((a + t) * 0.5 + i)));
                for (let e = o; e <= l; e++) {
                    let s = (r - (e - 1) * i) / e;
                    if (s >= t && s <= a) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(s / (c = n ? Math.min(c, n) : c)), columnCount: c };
            };
            var l = a(10270);
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
                        let { containerRef: t, minColumnCount: a, maxColumnWidth: r, minColumnWidth: s, totalCount: l, columnGap: c, maxColumnCount: d } = e,
                            [u, m] = (0, o.useState)({ rowCount: 0, columnCount: 0 }),
                            h = (0, o.useRef)(null),
                            _ = (0, o.useMemo)(
                                () =>
                                    (0, i.A)(
                                        (e) => {
                                            m(
                                                n({
                                                    minColumnWidth: s,
                                                    maxColumnWidth: r,
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
                                [c, d, r, a, s, l],
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
                                                minColumnWidth: s,
                                                maxColumnWidth: r,
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
                                [c, t, _, d, r, a, s, l],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: h, maxColumnWidth: m, minColumnWidth: u, maxColumnCount: _, containerRef: p }),
                    { virtualizer: S, resizeObserver: v } = (0, l.r)({ count: x, getEstimateSize: a, gap: c, containerRef: p }),
                    j = (0, r.A)(
                        Array.from({ length: t }, (e, t) => t),
                        b,
                    ),
                    C = (0, s.L)(() => {
                        var e, t;
                        if (!S.range) return null;
                        let a = null == (e = j[S.range.startIndex]) ? void 0 : e.at(0),
                            r = null == (t = j[S.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== a && void 0 !== r ? { startIndex: a, endIndex: r } : null;
                    });
                return { virtualizer: S, rowResizeObserver: v, indices: j, columnCount: b, visibleRange: C };
            };
        },
        48704: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => _ });
            var r = a(88800),
                s = a(65724),
                i = a(84961),
                o = a(53548),
                n = a(88969),
                l = a(17392),
                c = a(29504),
                d = a(84273),
                u = a(1698),
                m = a(70662),
                h = a.n(m);
            let _ = (0, i.PA)((e) => {
                let { isShimmerVisible: t, isShimmerActive: a, withTitle: i, mixes: m, shimmerCount: _ = 5, className: p } = e,
                    x = (0, o.useMemo)(
                        () =>
                            t
                                ? (0, r.jsx)(u.e, { isActive: a, round: !1, centered: !1, withInfo: !1, count: _ })
                                : m.map((e) => (0, r.jsx)(d.N, { title: e.title, weblink: e.weblink, covers: e.covers, imagesLayoutType: e.imagesLayoutType }, e.id)),
                        [a, t, m, _],
                    );
                return (0, r.jsxs)('div', {
                    'data-test-id': l.e8.mixes.MIXES_GRID_CONTAINER,
                    children: [
                        i &&
                            (0, r.jsx)(c.DZ, {
                                className: h().mixesTitle,
                                size: 's',
                                weight: 'bold',
                                variant: 'h3',
                                'data-test-id': l.e8.mixes.MIXES_GRID_HEADER,
                                children: (0, r.jsx)(n.A, { id: 'entity-names.mixes' }),
                            }),
                        (0, r.jsx)('div', { className: (0, s.$)(h().mixesGrid, p), children: x }),
                    ],
                });
            });
        },
        48750: (e, t, a) => {
            'use strict';
            a.d(t, { SearchPage: () => rH });
            var r,
                s,
                i = a(88800),
                o = a(65724),
                n = a(84961),
                l = a(53548),
                c = a(2058),
                d = a(58390),
                u = a(92716),
                m = a(17392),
                h = a(41427),
                _ = a(14661),
                p = a(46312),
                x = a(29993),
                b = a(79070),
                S = a(23237),
                v = a(98225),
                j = a(78275),
                C = a(23311),
                A = a(35948),
                y = a(72288);
            let T = (e) => {
                let t = 1200 + 1600 * e;
                return { phaseDelay: ''.concat(t / 1e3, 's'), gradientAnimationBegin: ''.concat((t + 160) / 1e3, 's') };
            };
            var g = a(76245),
                I = a.n(g);
            let E = [0, 1, 2, 3],
                k = (0, n.PA)((e) => {
                    var t;
                    let { isActive: a, size: r = 'xxxs' } = e,
                        { settings: s } = (0, y.g)(),
                        n = !!(null == (t = s.browserInfo) ? void 0 : t.isSafari),
                        c = (0, l.useId)(),
                        d = ''.concat(c, '-ring-mask'),
                        u = ''.concat(c, '-reveal-mask'),
                        m = ''.concat(c, '-glow-gradient'),
                        h = ''.concat(c, '-stroke-gradient'),
                        _ = ''.concat(c, '-reveal-gradient'),
                        p = ''.concat(c, '-soft-blur'),
                        x = ''.concat(c, '-hard-blur');
                    return (0, i.jsx)('div', {
                        className: (0, o.$)(I().root, { [I().root_active]: a, [I().root_safari]: n, [I().root_size_xxs]: 'xxs' === r }),
                        'aria-hidden': !0,
                        children: (0, i.jsxs)('svg', {
                            className: I().gradient,
                            focusable: 'false',
                            children: [
                                (0, i.jsxs)('defs', {
                                    children: [
                                        (0, i.jsxs)('linearGradient', {
                                            id: m,
                                            x1: '46.34%',
                                            y1: '115.24%',
                                            x2: '54.62%',
                                            y2: '-6.1%',
                                            children: [(0, i.jsx)('stop', { stopColor: '#9100df' }), (0, i.jsx)('stop', { offset: '1', stopColor: '#b900b7' })],
                                        }),
                                        (0, i.jsxs)('linearGradient', {
                                            id: h,
                                            x1: '12.43%',
                                            y1: '117.71%',
                                            x2: '81.08%',
                                            y2: '-25%',
                                            children: [
                                                (0, i.jsx)('stop', { stopColor: '#da95ff' }),
                                                (0, i.jsx)('stop', { offset: '0.711542', stopColor: '#f44dbb' }),
                                                (0, i.jsx)('stop', { offset: '1', stopColor: '#ff309f', stopOpacity: '0' }),
                                            ],
                                        }),
                                        (0, i.jsxs)('radialGradient', {
                                            id: _,
                                            children: [
                                                (0, i.jsx)('stop', { offset: '0', stopColor: '#fff' }),
                                                (0, i.jsx)('stop', { offset: '0.45', stopColor: '#fff', stopOpacity: '0.9' }),
                                                (0, i.jsx)('stop', { offset: '1', stopColor: '#fff', stopOpacity: '0' }),
                                            ],
                                        }),
                                        (0, i.jsx)('filter', {
                                            id: p,
                                            x: '-100%',
                                            y: '-1000%',
                                            width: '300%',
                                            height: '2100%',
                                            children: (0, i.jsx)('feGaussianBlur', { stdDeviation: 'xxs' === r ? 22.25 : 18.54 }),
                                        }),
                                        (0, i.jsx)('filter', {
                                            id: x,
                                            x: '-100%',
                                            y: '-1000%',
                                            width: '300%',
                                            height: '2100%',
                                            children: (0, i.jsx)('feGaussianBlur', { stdDeviation: 'xxs' === r ? 5.5 : 4.58 }),
                                        }),
                                        (0, i.jsxs)('mask', {
                                            className: I().ringMask,
                                            id: d,
                                            x: '-100%',
                                            y: '-1000%',
                                            width: '300%',
                                            height: '2100%',
                                            maskUnits: 'userSpaceOnUse',
                                            children: [
                                                (0, i.jsx)('rect', { className: I().ringOuter, fill: '#fff' }),
                                                (0, i.jsx)('rect', { className: I().ringHole, fill: '#000', rx: 'xxs' === r ? 22 : 18.33 }),
                                            ],
                                        }),
                                        (0, i.jsx)('mask', {
                                            className: I().revealMask,
                                            id: u,
                                            x: '-100%',
                                            y: '-1000%',
                                            width: '300%',
                                            height: '2100%',
                                            maskUnits: 'userSpaceOnUse',
                                            maskContentUnits: 'userSpaceOnUse',
                                            children: E.map((e) => {
                                                let { phaseDelay: t } = T(e);
                                                return (0, i.jsx)(
                                                    'g',
                                                    {
                                                        className: I().revealBlur,
                                                        style: { '--animated-search-input-gradient-mask-phase-delay': t },
                                                        children: (0, i.jsx)('rect', { className: I().revealPass, fill: n ? 'url(#'.concat(_, ')') : '#fff' }),
                                                    },
                                                    t,
                                                );
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)('g', {
                                    mask: 'url(#'.concat(u, ')'),
                                    children: [
                                        (0, i.jsx)('g', {
                                            className: I().softGlow,
                                            children: (0, i.jsx)('g', {
                                                filter: n ? 'url(#'.concat(p, ')') : void 0,
                                                children: (0, i.jsx)('rect', { className: I().ringOuter, fill: 'url(#'.concat(m, ')'), mask: 'url(#'.concat(d, ')') }),
                                            }),
                                        }),
                                        (0, i.jsx)('g', {
                                            className: I().hardGlow,
                                            children: (0, i.jsx)('g', {
                                                filter: n ? 'url(#'.concat(x, ')') : void 0,
                                                children: (0, i.jsx)('rect', { className: I().ringOuter, fill: 'url(#'.concat(m, ')'), mask: 'url(#'.concat(d, ')') }),
                                            }),
                                        }),
                                        (0, i.jsx)('rect', {
                                            className: I().stroke,
                                            fill: 'none',
                                            rx: 'xxs' === r ? 23.63 : 19.69,
                                            stroke: 'url(#'.concat(h, ')'),
                                            strokeWidth: 'xxs' === r ? 0.75 : 0.63,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                });
            var P = a(59047),
                f = a(88092);
            (!(function (e) {
                ((e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName'));
            })(r || (r = {})),
                (function (e) {
                    ((e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts'));
                })(s || (s = {})));
            var N = function (e) {
                var t = (0, c.A)(),
                    a = e.value,
                    r = e.children,
                    s = (0, f.__rest)(e, ['value', 'children']);
                return r(t.formatNumberToParts(a, s));
            };
            function R(e) {
                var t = function (t) {
                    var a = (0, c.A)(),
                        r = t.value,
                        s = t.children,
                        i = (0, f.__rest)(t, ['value', 'children']),
                        o = 'string' == typeof r ? new Date(r || 0) : r;
                    return s('formatDate' === e ? a.formatDateToParts(o, i) : a.formatTimeToParts(o, i));
                };
                return ((t.displayName = s[e]), t);
            }
            function B(e) {
                var t = function (t) {
                    var a = (0, c.A)(),
                        r = t.value,
                        s = t.children,
                        i = (0, f.__rest)(t, ['value', 'children']),
                        o = a[e](r, i);
                    if ('function' == typeof s) return s(o);
                    var n = a.textComponent || l.Fragment;
                    return l.createElement(n, null, o);
                };
                return ((t.displayName = r[e]), t);
            }
            ((N.displayName = 'FormattedNumberParts'),
                (N.displayName = 'FormattedNumberParts'),
                B('formatDate'),
                B('formatTime'),
                B('formatNumber'),
                B('formatList'),
                B('formatDisplayName'),
                R('formatDate'),
                R('formatTime'));
            var L = a(88626),
                O = a(597),
                D = a.n(O);
            let w = 'animated-search-input-text',
                M = '[data-animation-target="'.concat(w, '"]'),
                H = [
                    { attributeName: 'x1', dur: '1.87s', from: '-416', to: '143' },
                    { attributeName: 'y1', dur: '1.87s', from: '-32', to: '29' },
                    { attributeName: 'x2', dur: '1.5s', from: '80', to: '507' },
                    { attributeName: 'y2', dur: '1.5s', from: '21', to: '-14' },
                ],
                U = {
                    cheerfulNotTooMuch: { id: 'search.q2v-input-placeholder-cheerful-not-too-much' },
                    favoriteArtist: { id: 'search.q2v-input-placeholder-favorite-artist' },
                    collectionTrack: { id: 'search.q2v-input-placeholder-collection-track' },
                    melodicAndDanceable: { id: 'search.q2v-input-placeholder-melodic-and-danceable' },
                },
                z = [U.cheerfulNotTooMuch, U.favoriteArtist, U.collectionTrack, U.melodicAndDanceable],
                V = (0, n.PA)((e) => {
                    var t, a;
                    let { isActive: r, onAnimationEnd: s } = e,
                        { settings: n } = (0, y.g)(),
                        d = !!((null == (t = n.browserInfo) ? void 0 : t.isSafari) || (null == (a = n.browserInfo) ? void 0 : a.OSFamily) === L.j.IOS),
                        { formatMessage: u } = (0, c.A)(),
                        m = (0, l.useId)(),
                        h = (0, l.useRef)(null),
                        [_, p] = (0, l.useState)(z),
                        b = (0, x.c)((e) => {
                            e.currentTarget === e.target && s();
                        });
                    return (
                        (0, l.useEffect)(() => {
                            var e;
                            r ||
                                null == (e = h.current) ||
                                e.querySelectorAll(M).forEach((e) => {
                                    e.pauseAnimations();
                                });
                        }, [r]),
                        (0, l.useEffect)(() => {
                            p((0, P.A)(z));
                        }, []),
                        (0, i.jsx)('div', {
                            className: (0, o.$)(D().root, { [D().root_active]: r, [D().root_safari]: d }),
                            ref: h,
                            'aria-hidden': !0,
                            children: (0, i.jsx)('div', {
                                className: D().viewport,
                                children: _.map((e, t) => {
                                    let a = t === _.length - 1,
                                        r = u(e),
                                        { phaseDelay: s, gradientAnimationBegin: n } = T(t);
                                    return (0, i.jsx)(
                                        'span',
                                        {
                                            className: (0, o.$)(D().phrase, { [D().phrase_last]: a }),
                                            onAnimationEnd: a ? b : void 0,
                                            style: { '--animated-search-input-text-phase-delay': s },
                                            children: (0, i.jsx)('div', {
                                                className: D().phraseContent,
                                                children: (0, i.jsxs)('svg', {
                                                    className: D().text,
                                                    'data-animation-target': w,
                                                    focusable: 'false',
                                                    children: [
                                                        (0, i.jsx)('defs', {
                                                            children: (0, i.jsxs)('linearGradient', {
                                                                id: ''.concat(m, '-text-gradient-').concat(t),
                                                                x1: '-416',
                                                                y1: '-32',
                                                                x2: '80',
                                                                y2: '21',
                                                                gradientUnits: 'userSpaceOnUse',
                                                                children: [
                                                                    (0, i.jsx)('stop', {
                                                                        className: (0, o.$)(D().gradientStop, D().gradientStop_start),
                                                                        stopColor: 'var(--q2v-accent-color)',
                                                                        stopOpacity: '0',
                                                                    }),
                                                                    (0, i.jsx)('stop', {
                                                                        className: (0, o.$)(D().gradientStop, D().gradientStop_middle),
                                                                        offset: '0.2',
                                                                        stopColor: 'var(--q2v-accent-color)',
                                                                    }),
                                                                    (0, i.jsx)('stop', {
                                                                        className: (0, o.$)(D().gradientStop, D().gradientStop_end),
                                                                        offset: '1',
                                                                        stopColor: 'var(--q2v-accent-color)',
                                                                        stopOpacity: '0',
                                                                    }),
                                                                    H.map((e) => {
                                                                        let { attributeName: t, dur: a, from: r, to: s } = e;
                                                                        return (0, i.jsx)(
                                                                            'animate',
                                                                            { attributeName: t, begin: n, dur: a, from: r, to: s, fill: 'freeze' },
                                                                            t,
                                                                        );
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                        (0, i.jsx)('text', { className: D().base, x: '0', y: '50%', children: r }),
                                                        (0, i.jsx)('text', {
                                                            className: D().gradient,
                                                            x: '0',
                                                            y: '50%',
                                                            fill: 'url(#'.concat(m, '-text-gradient-').concat(t, ')'),
                                                            children: r,
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
            var G = a(20445),
                X = a.n(G);
            let $ = (e) => {
                let {
                        lumenColor: t,
                        initialValue: a = '',
                        correctedValue: r,
                        className: s,
                        autoFocus: n,
                        onResetClick: c,
                        innerInputProps: d,
                        searchIconProps: u,
                        ...m
                    } = e,
                    h = 0 === a.length,
                    [_, p] = (0, l.useState)(a),
                    [v, y] = (0, l.useState)(0),
                    [T, g] = (0, l.useState)(!1),
                    { state: I, toggleFalse: E } = (0, j.e)(h),
                    P = (0, l.useRef)(null),
                    f = (0, l.useRef)(!!(n && h)),
                    N = (0, x.c)(() => {
                        null !== P.current && (window.clearTimeout(P.current), (P.current = null));
                    }),
                    R = (0, x.c)(() => {
                        (N(), g(!1));
                    }),
                    B = (0, x.c)((e) => {
                        var t;
                        let a = null != (t = e.selectionStart) ? t : e.value.length;
                        (p(e.value.slice(0, a)), y(e.scrollLeft));
                    }),
                    L = (0, x.c)((e) => {
                        var t;
                        let a = e.currentTarget;
                        (E(),
                            B(a),
                            N(),
                            0 === a.value.length
                                ? g(!1)
                                : (g(!0),
                                  (P.current = window.setTimeout(() => {
                                      (g(!1), (P.current = null));
                                  }, 1e3))),
                            null == d || null == (t = d.onInput) || t.call(d, e));
                    }),
                    O = (0, x.c)((e) => {
                        var t;
                        (f.current || E(), null == d || null == (t = d.onFocus) || t.call(d, e));
                    }),
                    D = (0, x.c)((e) => {
                        var t;
                        ((f.current = !1), null == d || null == (t = d.onBlur) || t.call(d, e));
                    }),
                    w = (0, x.c)((e) => {
                        var t;
                        (B(e.currentTarget), null == d || null == (t = d.onSelect) || t.call(d, e));
                    }),
                    M = (0, x.c)((e) => {
                        var t;
                        (y(e.currentTarget.scrollLeft), null == d || null == (t = d.onScroll) || t.call(d, e));
                    }),
                    H = (0, x.c)(() => {
                        (p(''), y(0), R(), null == c || c());
                    });
                ((0, l.useEffect)(() => {
                    r &&
                        (E(),
                        p(r),
                        y(0),
                        N(),
                        g(!0),
                        (P.current = window.setTimeout(() => {
                            (g(!1), (P.current = null));
                        }, 1e3)));
                }, [N, r, E]),
                    (0, l.useEffect)(() => N, [N]),
                    (0, l.useEffect)(() => {
                        h && (0, A.y)() && E();
                    }, [h, E]));
                let U = (0, b.L)(() => {
                        let { actionsClassName: e, icon: t, inputClassName: a, ...r } = null != d ? d : {},
                            s = {
                                ...r,
                                actionsClassName: (0, o.$)(X().searchInputContent, e),
                                inputClassName: (0, o.$)(X().searchInputContent, a),
                                onBlur: D,
                                onFocus: O,
                                onInput: L,
                                onSelect: w,
                                onScroll: M,
                            };
                        return void 0 === t
                            ? s
                            : null === t
                              ? { ...s, icon: t }
                              : { ...s, icon: (0, l.cloneElement)(t, { className: (0, o.$)(X().searchInputContent, t.props.className) }) };
                    }),
                    z = { ...u, className: (0, o.$)(X().searchInputContent, null == u ? void 0 : u.className) };
                return (0, i.jsxs)('div', {
                    className: (0, o.$)(X().root, s, { [X().root_introActive]: I }),
                    onPointerDownCapture: E,
                    style: { '--animated-search-input-scroll-offset': ''.concat(-v, 'px'), '--q2v-accent-color': t },
                    children: [
                        (0, i.jsx)(S.D, {
                            ...m,
                            autoFocus: n,
                            className: X().searchInput,
                            initialValue: a,
                            correctedValue: r,
                            innerInputProps: U,
                            onResetClick: H,
                            searchIconProps: z,
                        }),
                        h && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(k, { isActive: I, size: m.size }), (0, i.jsx)(V, { isActive: I, onAnimationEnd: E })] }),
                        (0, i.jsx)('div', {
                            className: X().mirrorViewport,
                            'aria-hidden': !0,
                            children: (0, i.jsxs)('div', {
                                className: X().mirrorContent,
                                children: [(0, i.jsx)('span', { children: _ }), (0, i.jsx)(C.e, { className: (0, o.$)(X().haze, { [X().haze_visible]: T }) })],
                            }),
                        }),
                    ],
                });
            };
            var Y = a(88969),
                W = a(96817),
                F = a(29504),
                K = a(61909),
                q = a.n(K);
            let Q = (e) => {
                let { onCorrectText: t, searchCorrectedText: a } = e,
                    r = (0, l.useMemo)(
                        () => ({
                            text: (0, i.jsx)(W.$, {
                                'aria-label': a,
                                variant: 'text',
                                radius: 'xs',
                                onClick: t,
                                'data-test-id': m.e8.search.SEARCH_CORRECTED_TEXT_BUTTON,
                                children: (0, i.jsx)(F.HL, {
                                    className: q().link,
                                    variant: 'span',
                                    size: 'm',
                                    type: 'text',
                                    'data-test-id': m.e8.search.SEARCH_CORRECTED_TEXT_BUTTON_TEXT,
                                    children: a,
                                }),
                            }),
                        }),
                        [a, t],
                    );
                return (0, i.jsx)('div', {
                    className: q().root,
                    'data-test-id': m.e8.search.SEARCH_CORRECTED_TEXT,
                    children: (0, i.jsx)(F.HL, {
                        className: q().text,
                        variant: 'span',
                        size: 'm',
                        type: 'text',
                        'data-test-id': m.e8.search.SEARCH_CORRECTED_TEXT_TEXT,
                        children: (0, i.jsx)(Y.A, { id: 'search.corrected-text', values: r }),
                    }),
                });
            };
            var Z = a(52300),
                J = a(66719),
                ee = a(86790),
                et = a(60266),
                ea = a(98969),
                er = a.n(ea);
            let es = (e) => {
                    let { forwardRef: t, className: a, searchCorrectedText: r } = e,
                        { formatMessage: s } = (0, c.A)();
                    return (0, i.jsxs)(J.N, {
                        className: (0, o.$)(er().root, a),
                        containerClassName: er().container,
                        ref: t,
                        children: [
                            (0, i.jsxs)('div', {
                                className: er().content,
                                'data-test-id': m.e8.search.SEARCH_EMPTY_CONTAINER,
                                children: [
                                    r && (0, i.jsx)('div', { className: er().correctedTextBlock, children: r }),
                                    (0, i.jsx)(Z.I, { className: er().icon, variant: 'search', size: 'xxl', 'data-test-id': m.e8.search.SEARCH_EMPTY_ICON }),
                                    (0, i.jsx)(F.DZ, {
                                        className: er().title,
                                        size: 's',
                                        weight: 'bold',
                                        variant: 'h3',
                                        'data-test-id': m.e8.search.SEARCH_EMPTY_HEADER,
                                        children: s({ id: 'search-results.not-found-title' }),
                                    }),
                                    (0, i.jsx)(F.HL, {
                                        className: er().subtitle,
                                        variant: 'div',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        'data-test-id': m.e8.search.SEARCH_EMPTY_DESCRIPTION,
                                        children: s({ id: 'search-results.not-found-description' }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(et.A, { children: (0, i.jsx)(ee.w, { className: er().footer }) }),
                        ],
                    });
                },
                ei = (0, l.forwardRef)((e, t) => (0, i.jsx)(es, { forwardRef: t, ...e }));
            var eo = a(35412),
                en = a(18593),
                el = a(59758),
                ec = a(63765),
                ed = a(10079),
                eu = a(46811),
                em = a(21256),
                eh = a(69323),
                e_ = a(41911),
                ep = a(58378),
                ex = a(21576),
                eb = a(50408),
                eS = a(10270),
                ev = a(61956),
                ej = a.n(ev);
            let eC = (e) => {
                let { item: t, scrollMargin: a, resizeObserver: r, renderItemByIndex: s } = e,
                    [o, n] = (0, eb.d)();
                (0, l.useEffect)(
                    () => (
                        o && r && r.observe(o),
                        () => {
                            o && r && r.unobserve(o);
                        }
                    ),
                    [o, r],
                );
                let c = { transform: 'translate3d(0, '.concat(t.start - a, 'px, 0)') };
                return (0, i.jsx)('div', { 'data-index': t.index, className: ej().root, ref: n, style: c, children: s(t.index) }, t.key);
            };
            var eA = a(73436),
                ey = a.n(eA);
            let eT = (e) => {
                let { count: t, getEstimateRowSize: a, renderItemByIndex: r, onChangeRange: s } = e,
                    [o, n] = (0, eb.d)(),
                    { virtualizer: c, resizeObserver: d } = (0, eS.r)({ count: t, getEstimateSize: a, containerRef: o, overscan: 3 });
                (0, l.useEffect)(() => {
                    !c.isScrolling && c.range && s && s(c.range);
                }, [s, c.isScrolling, c.range]);
                let u = c.getTotalSize(),
                    m = c.getVirtualItems(),
                    h = c.options.scrollMargin;
                return (0, i.jsx)('div', {
                    className: ey().root,
                    style: { height: ''.concat(u, 'px') },
                    ref: n,
                    children: m.map((e) => (0, i.jsx)(eC, { item: e, scrollMargin: h, resizeObserver: d, renderItemByIndex: r }, e.key)),
                });
            };
            var eg = a(28119),
                eI = a(9739);
            a(30282);
            var eE = a(29832),
                ek = a(7555),
                eP = a(5407),
                ef = a(76675),
                eN = a(34500),
                eR = a(14518),
                eB = a(55693),
                eL = a(47964),
                eO = a(52726),
                eD = a(81877),
                ew = a(63955),
                eM = a(16704),
                eH = a(34945),
                eU = a(87475),
                ez = a.n(eU);
            let eV = (0, n.PA)((e) => {
                let { vibe: t, children: a, className: r } = e,
                    { pageId: s } = (0, eR.$)(),
                    [n, c] = (0, l.useState)(!1),
                    { blockIdForFrom: d } = (0, eN.N)(),
                    {
                        settings: { isMobile: u },
                        user: m,
                        freeAccess: h,
                    } = (0, y.g)(),
                    { sendPlaySearchFeedback: _ } = (0, eB.z)(),
                    p = (0, ef.b)(),
                    { isPlaying: b, isPaused: S, togglePlay: v } = (0, eL.B)({ seeds: t.seeds, pageIdForFrom: s, blockIdForFrom: d }),
                    j = (0, eP.P)(),
                    C = b || S,
                    A = (0, l.useCallback)(() => {
                        u && (n || b || (c(!0), null == _ || _()), v());
                    }, [u, b, n, _, v]),
                    T = (0, x.c)(() => {
                        !j() && (h.isVibeStartRestricted || (n || b || (c(!0), null == _ || _()), v(), p(!b)));
                    }),
                    g = (0, l.useCallback)(
                        () =>
                            (0, i.jsx)(
                                eM.D,
                                {
                                    isPlaying: b,
                                    onClick: T,
                                    className: (0, o.$)(ez().playButton, ez().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                },
                                t.getKey('PlayButton'),
                            ),
                        [b, T, t],
                    ),
                    I = (0, l.useMemo)(() => {
                        let e = !m.hasPlus && h.isFreePlaybackDisabled;
                        return m.isAuthorized
                            ? (0, i.jsx)(
                                  eO.S,
                                  {
                                      isEnabled: e && h.isVibeStartRestricted,
                                      placement: 'bottom',
                                      textVariant: 'vibe',
                                      vibeTextVariant: t.stationType,
                                      renderChildren: g,
                                  },
                                  t.getKey('BuyPlusPopover'),
                              )
                            : (0, i.jsx)(ew.Z, { isEnabled: e, placement: 'bottom', textVariant: 'vibe', vibeTextVariant: t.stationType, renderChildren: g });
                    }, [m.hasPlus, m.isAuthorized, t, g, h.isVibeStartRestricted, h.isFreePlaybackDisabled]),
                    E = (0, l.useMemo)(
                        () =>
                            (0, i.jsxs)(ek.t, {
                                className: ez().cover,
                                radius: 'round',
                                withShadow: !0,
                                onClick: A,
                                children: [
                                    (0, i.jsx)(eD.B, {
                                        size: 200,
                                        fit: 'cover',
                                        className: ez().image,
                                        style: { backgroundColor: t.backgroundColor },
                                        src: t.imageUrl,
                                        alt: t.title,
                                        withAvatarReplace: !0,
                                    }),
                                    C && (0, i.jsx)(eH.P, { stopAnimation: S, className: ez().playingAnimation }),
                                    (0, i.jsx)(eE.hg, {
                                        className: (0, o.$)(ez().controls, { [ez().controls_isPlaying]: C }, ez().important),
                                        bottomContainerClassName: ez().playControl,
                                        radius: 'round',
                                        playControl: I,
                                    }),
                                ],
                            }),
                        [A, t.backgroundColor, t.imageUrl, t.title, C, S, I],
                    );
                return (0, i.jsx)(eE.MN, {
                    className: (0, o.$)(ez().root, r),
                    textPosition: 'center',
                    title: (0, i.jsx)(F.HL, { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title }, t.getKey('Description')),
                    description: (0, i.jsx)(
                        F.HL,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: t.description },
                        t.getKey('Description'),
                    ),
                    view: E,
                    children: a,
                });
            });
            var eG = a(12816),
                eX = a(77948),
                e$ = a(84384),
                eY = a(91087),
                eW = a(6668),
                eF = a(97956),
                eK = a(98644),
                eq = a(68594),
                eQ = a(37770),
                eZ = a(93015),
                eJ = a(66564);
            let e0 = {
                    entity: { rowGap: 16, columnGap: 16, estimateRowSize: 275, minColumnWidth: 170, maxColumnWidth: 270, minColumnCount: 2, maxColumnCount: 7 },
                    clip: { rowGap: 16, columnGap: 16, estimateRowSize: 235, minColumnWidth: 200, maxColumnWidth: 400, minColumnCount: 1, maxColumnCount: 6 },
                    concert: { rowGap: 16, columnGap: 16, estimateRowSize: 371, minColumnWidth: 170, maxColumnWidth: 227, minColumnCount: 1, maxColumnCount: 2 },
                },
                e1 = (e, t) => {
                    let [a, r] = (0, l.useState)(t || e.length > 0),
                        [s, i] = (0, l.useState)(e.length > 0 ? e[0] : void 0),
                        o = (0, l.useRef)(void 0),
                        n = (0, l.useRef)(t),
                        c = (0, l.useRef)(t ? Date.now() : void 0),
                        d = (0, x.c)((e) => {
                            let t = Math.max(0, 2e3 - (void 0 !== c.current ? Date.now() - c.current : 2e3));
                            0 === t ? e() : (o.current = setTimeout(e, t));
                        });
                    return (
                        (0, l.useEffect)(() => {
                            let a = t && !n.current,
                                s = !t && n.current;
                            return (
                                (n.current = t),
                                a && (clearTimeout(o.current), (c.current = Date.now()), r(!0), i(void 0)),
                                s && (clearTimeout(o.current), e.length > 0 ? d(() => i(e[0])) : d(() => r(!1))),
                                () => clearTimeout(o.current)
                            );
                        }, [t, e, d]),
                        { isVisible: a, vibe: s }
                    );
                };
            var e8 = a(54020),
                e6 = a(48911),
                e2 = a(52018),
                e9 = a(95960),
                e3 = a.n(e9);
            let e4 = (0, n.PA)((e) => {
                let { id: t, concert: a } = e;
                return (0, i.jsxs)('div', {
                    className: e3().root,
                    id: t,
                    children: [
                        (0, i.jsx)(F.HL, { variant: 'div', size: 'm', weight: 'medium', className: e3().city, lineClamp: 1, children: null == a ? void 0 : a.title }),
                        (0, i.jsx)(F.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: null == a ? void 0 : a.city }),
                        (0, i.jsx)(F.HL, { variant: 'span', size: 'm', weight: 'medium', children: null == a ? void 0 : a.contentRating }),
                    ],
                });
            });
            var e5 = a(63865),
                e7 = a.n(e5);
            let te = (0, n.PA)((e) => {
                let { concert: t } = e,
                    a = (0, l.useRef)(String((0, e8.A)())),
                    r = t.isIdentityExperimentEnabled ? e2.M : e4;
                return (0, i.jsx)(e6.V, {
                    artistId: null,
                    viewUuid: a.current,
                    concert: t,
                    radius: 's',
                    className: e7().root,
                    meta: (0, i.jsx)(r, { concert: t }),
                    shouldSendAnalyticsOnHide: !0,
                    shouldShowMask: !0,
                });
            });
            var tt = a(8655),
                ta = a(44378);
            let tr = {
                    [tt.S.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_search.lottie',
                    [tt.S.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_search.lottie',
                },
                ts = {
                    loading: { loop: !0, markerId: 'loading' },
                    idle: { markerId: 'success' },
                    playing: { markerId: 'playing' },
                    paused: { markerId: 'playing', mode: 'reverse' },
                },
                ti = (e) => (0, i.jsx)(ta.D, { animationByTheme: tr, animationConfig: ts, ...e });
            var to = a(82204),
                tn = a(79285),
                tl = a.n(tn);
            let tc = (0, n.PA)((e) => {
                let { className: t, requestAwakeLumenModal: a, sendSearchFeedback: r, vibe: s } = e,
                    { lumen: n } = (0, y.g)(),
                    l = n.isAwakened ? u.DomainObjectType.Lumen : u.DomainObjectType.LumenUnawakened,
                    c = (0, b.L)(() => (s ? { sendSearchFeedback: r, id: s.seedsId, type: ec.o.WAVE, blockPosition: 0, position: 0 } : null));
                return (0, i.jsx)('div', {
                    className: (0, o.$)(tl().root, t),
                    children: (0, i.jsx)(to.F, {
                        blockId: u.EntityTypes.Q2vWave,
                        blockType: u.EntityTypes.Q2vWave,
                        mainObjectId: '',
                        mainObjectType: l,
                        blockPosX: 1,
                        blockPosY: 1,
                        objectsCount: 1,
                        children: (0, i.jsx)(eX.B, {
                            objectPosX: 1,
                            objectPosY: 1,
                            objectsCount: 1,
                            objectType: u.DomainObjectType.Wave,
                            objectId: null == s ? void 0 : s.stationId,
                            children: (0, i.jsx)(eY.N.Provider, { value: c, children: (0, i.jsx)(ti, { requestAwakeLumenModal: a, vibe: s }) }),
                        }),
                    }),
                });
            });
            var td = a(22549),
                tu = a.n(td);
            let tm = (0, n.PA)((e) => {
                    let {
                            forwardRef: t,
                            className: a,
                            results: r,
                            filter: s,
                            variant: n = 'grid',
                            sendSearchFeedback: c,
                            searchCorrectedText: d,
                            isShimmerVisible: m,
                            getDataByRange: h,
                            requestsCount: p,
                            q2vResults: S,
                            isShimmerActive: v,
                            requestAwakeLumenModal: j,
                            ...C
                        } = e,
                        { experiments: A } = (0, y.g)(),
                        T = (0, eg.f)(),
                        { isVisible: g, vibe: I } = e1(S, v),
                        E = T && g && s === _.n.WAVE,
                        k = ((e) => (e === _.n.CLIP ? e0.clip : e === _.n.CONCERT ? e0.concert : e0.entity))(s),
                        P = (0, x.c)(() => 56),
                        f = (0, x.c)(() => k.estimateRowSize),
                        N = (0, eW.w)(),
                        R = (() => {
                            let e = (0, l.useRef)(new Map());
                            return (
                                (0, l.useLayoutEffect)(
                                    () => (
                                        e.current.size > 0 && e.current.clear(),
                                        () => {
                                            e.current.clear();
                                        }
                                    ),
                                    [],
                                ),
                                (0, x.c)((t, a) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, a), a)))
                            );
                        })(),
                        { from: B } = (0, e$.f)({ pageId: eG._Q.SEARCH }),
                        L = (0, l.useCallback)(
                            (e) => {
                                let t = r[e];
                                if (!t)
                                    return 'list' === n
                                        ? (0, i.jsx)(eZ.D, { variant: eK.X.PLAYLIST, isActive: !0 })
                                        : s === _.n.CONCERT
                                          ? (0, i.jsx)(eq.W, { isShimmerActive: !0, className: tu().concertShimmer })
                                          : s === _.n.ARTIST
                                            ? (0, i.jsx)(eQ.V, { linesCount: 2, round: !0, centered: !0, isActive: !0 })
                                            : s === _.n.WAVE
                                              ? A.checkExperiment(eF.z.WebNextWaveAgentExperiment, 'on')
                                                  ? (0, i.jsx)(eQ.V, { linesCount: 3, centered: !0, isActive: !0 })
                                                  : (0, i.jsx)(eQ.V, { linesCount: 2, round: !0, centered: !0, isActive: !0 })
                                              : s === _.n.PLAYLIST
                                                ? (0, i.jsx)(eQ.V, { linesCount: 2, isActive: !0 })
                                                : s === _.n.CLIP
                                                  ? (0, i.jsx)(eQ.V, { linesCount: 2, shimmerClassName: tu().video, isActive: !0 })
                                                  : (0, i.jsx)(eQ.V, { className: tu().entityCardShimmer, isActive: !0, shimmerClassName: s === _.n.CLIP && tu().video });
                                switch (t.type) {
                                    case _.n.ALBUM:
                                        return (0, i.jsx)(
                                            eY.N.Provider,
                                            {
                                                value: R(t.data.id, { sendSearchFeedback: c, id: t.data.id, type: ec.o.ALBUM, blockPosition: 0, position: e }),
                                                children: (0, i.jsx)(ed.a, { album: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case _.n.PLAYLIST:
                                        return (0, i.jsx)(
                                            eY.N.Provider,
                                            {
                                                value: R(t.data.id, { sendSearchFeedback: c, id: t.data.id, type: ec.o.PLAYLIST, blockPosition: 0, position: e }),
                                                children: (0, i.jsx)(e_.B, { playlist: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case _.n.ARTIST:
                                        return (0, i.jsx)(
                                            eY.N.Provider,
                                            {
                                                value: R(t.data.id, { sendSearchFeedback: c, id: t.data.id, type: ec.o.ARTIST, blockPosition: 0, position: e }),
                                                children: (0, i.jsx)(em.a, { artist: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case _.n.PODCAST:
                                        return (0, i.jsx)(
                                            eX.B,
                                            {
                                                objectType: u.DomainObjectType.Podcast,
                                                objectId: String(t.data.id),
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                objectsCount: r.length,
                                                children: (0, i.jsx)(eY.N.Provider, {
                                                    value: R(t.data.id, { sendSearchFeedback: c, id: t.data.id, type: ec.o.PODCAST, blockPosition: 0, position: e }),
                                                    children: (0, i.jsx)(eu.M, { album: t.data }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                    case _.n.CLIP:
                                        return (0, i.jsx)(
                                            eY.N.Provider,
                                            {
                                                value: R(t.data.clipId, { sendSearchFeedback: c, id: t.data.clipId, type: ec.o.CLIP, blockPosition: 0, position: e }),
                                                children: (0, i.jsx)(eh.F, { clip: t.data }),
                                            },
                                            t.data.clipId,
                                        );
                                    case _.n.WAVE:
                                        if (!A.checkExperiment(eF.z.WebNextWaveAgentExperiment, 'on'))
                                            return (0, i.jsx)(
                                                eY.N.Provider,
                                                {
                                                    value: R(t.data.stationId, {
                                                        sendSearchFeedback: c,
                                                        id: t.data.stationId,
                                                        type: ec.o.WAVE,
                                                        blockPosition: 0,
                                                        position: e,
                                                    }),
                                                    children: (0, i.jsx)(eV, { vibe: t.data }),
                                                },
                                                t.data.stationId,
                                            );
                                        return (0, i.jsx)(
                                            eY.N.Provider,
                                            {
                                                value: R(t.data.stationId, {
                                                    sendSearchFeedback: c,
                                                    id: t.data.stationId,
                                                    type: ec.o.WAVE,
                                                    blockPosition: 0,
                                                    position: e,
                                                }),
                                                children: (0, i.jsx)(eI.y, { vibe: t.data }),
                                            },
                                            t.data.stationId,
                                        );
                                    case _.n.CONCERT:
                                        return (0, i.jsx)(
                                            eX.B,
                                            {
                                                objectType: u.DomainObjectType.Concert,
                                                objectId: t.data.id,
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                objectsCount: r.length,
                                                children: (0, i.jsx)(te, { concert: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case _.n.TRACK:
                                    case _.n.UGC_TRACK:
                                        return (0, i.jsx)(
                                            eX.B,
                                            {
                                                objectType: u.DomainObjectType.Track,
                                                objectId: t.data.id,
                                                objectPosX: 1,
                                                objectPosY: e + 1,
                                                objectsCount: r.length,
                                                children: (0, i.jsx)(eY.N.Provider, {
                                                    value: R(t.data.entityId, {
                                                        sendSearchFeedback: c,
                                                        id: t.data.entityId,
                                                        type: ec.o.TRACK,
                                                        blockPosition: 0,
                                                        position: e,
                                                    }),
                                                    children: (0, i.jsx)(ep.c, {
                                                        track: t.data,
                                                        playContextParams: N(t.data.entityId, {
                                                            contextData: { type: en.K.Various, meta: { id: t.data.entityId }, from: B, overrideContextType: el.b.Search },
                                                            queueParams: { index: e, entityId: t.data.id },
                                                            loadContextMeta: !0,
                                                        }),
                                                    }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                    case _.n.PODCAST_EPISODE:
                                        return (0, i.jsx)(
                                            eX.B,
                                            {
                                                objectType: u.DomainObjectType.PodcastEpisode,
                                                objectId: t.data.id,
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                objectsCount: r.length,
                                                children: (0, i.jsx)(ep.c, {
                                                    track: t.data,
                                                    playContextParams: N(t.data.entityId, {
                                                        contextData: { type: en.K.Various, meta: { id: t.data.entityId }, from: B, overrideContextType: el.b.Search },
                                                        queueParams: { index: e, entityId: t.data.id },
                                                        loadContextMeta: !0,
                                                    }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                }
                            },
                            [r, n, s, A, R, c, N, B, p],
                        ),
                        O = (0, b.L)(() => (m ? r.length + eJ.k : r.length)),
                        D = (0, b.L)(() =>
                            'list' === n
                                ? (0, i.jsx)(eT, { count: O, getEstimateRowSize: P, renderItemByIndex: L, onChangeRange: h })
                                : (0, i.jsx)(ex.Q, {
                                      count: O,
                                      rowGap: k.rowGap,
                                      columnGap: k.columnGap,
                                      getEstimateRowSize: f,
                                      minColumnCount: k.minColumnCount,
                                      minColumnWidth: k.minColumnWidth,
                                      maxColumnWidth: k.maxColumnWidth,
                                      maxColumnCount: k.maxColumnCount,
                                      renderItemByIndex: L,
                                      onChangeRange: h,
                                  }),
                        );
                    return (0, i.jsxs)(J.N, {
                        className: (0, o.$)(tu().root, a),
                        containerClassName: tu().container,
                        ref: t,
                        ...(0, eo.OZ)(C),
                        children: [
                            (0, i.jsxs)('div', {
                                children: [
                                    d && (0, i.jsx)('div', { className: tu().correctedTextBlock, children: d }),
                                    E && (0, i.jsx)(tc, { className: tu().queryToVibe, requestAwakeLumenModal: j, sendSearchFeedback: c, vibe: I }),
                                    D,
                                ],
                            }),
                            (0, i.jsx)(et.A, { children: (0, i.jsx)(ee.w, { className: tu().footer }) }),
                        ],
                    });
                }),
                th = (0, l.forwardRef)((e, t) => (0, i.jsx)(tm, { forwardRef: t, ...e }));
            var t_ = a(45923),
                tp = a(86535),
                tx = a(48483),
                tb = a(99564),
                tS = a(71344),
                tv = a(35802),
                tj = a(53323),
                tC = a(18486),
                tA = a(31764),
                ty = a(19994),
                tT = a(58373),
                tg = a.n(tT);
            let tI = (e) => {
                let { className: t, ariaLabel: a, isShimmerActive: r } = e;
                return (0, i.jsxs)('div', {
                    tabIndex: 0,
                    'aria-label': a,
                    'aria-live': 'polite',
                    'aria-busy': !0,
                    className: (0, o.$)(tg().root, t),
                    children: [
                        (0, i.jsxs)('div', {
                            className: tg().infoContainer,
                            children: [
                                (0, i.jsx)(ty.W, { className: tg().cover, radius: 's', isActive: r }),
                                (0, i.jsxs)('div', {
                                    className: tg().textContainer,
                                    children: [
                                        (0, i.jsx)(ty.W, { className: tg().title, radius: 's', isActive: r }),
                                        (0, i.jsx)(ty.W, { className: tg().description, radius: 's', isActive: r }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(ty.W, { className: tg().action, radius: 's', isActive: r }),
                    ],
                });
            };
            var tE = a(74481),
                tk = a.n(tE);
            let tP = (e) => {
                let { shimmersCount: t = 3, isShimmerActive: a = !0 } = e,
                    { formatMessage: r } = (0, c.A)();
                return Array.from({ length: t }, (e, t) =>
                    (0, i.jsx)(
                        tI,
                        {
                            className: tk().root,
                            ariaLabel: r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'search.history' }) }),
                            isShimmerActive: a,
                        },
                        t,
                    ),
                );
            };
            var tf = a(5885),
                tN = a.n(tf);
            let tR = (e) => {
                    let {
                            forwardRef: t,
                            title: a,
                            description: r,
                            viewAllAction: s,
                            coverUrl: n,
                            children: c,
                            className: d,
                            maxColumns: u = 2,
                            itemsPerColumn: h = 3,
                            containerClassName: _,
                            headerClassName: p,
                            titleSize: x,
                            showControls: b,
                            isShimmerVisible: S,
                            isShimmerActive: v,
                        } = e,
                        j = (0, l.useRef)(null),
                        C = (0, l.useId)(),
                        { items: A, columnLength: y } = (0, l.useMemo)(() => {
                            if (S)
                                return {
                                    columnLength: u,
                                    items: Array.from({ length: u }, (e, t) =>
                                        (0, i.jsx)('div', { className: tN().column, children: (0, i.jsx)(tP, { shimmersCount: 3, isShimmerActive: v }) }, t),
                                    ),
                                };
                            let e = (0, tv.A)(c, h).slice(0, (null == c ? void 0 : c.length) ? Math.ceil(c.length / h) : u);
                            return { items: e.map((e, t) => (0, i.jsx)('div', { className: tN().column, children: e }, t)), columnLength: e.length };
                        }, [c, v, S, h, u]);
                    return (0, i.jsxs)('section', {
                        ref: t,
                        className: (0, o.$)(d, tN().root),
                        'data-test-id': m.e8.search.MIXED_ENTITIES_BLOCK,
                        children: [
                            (0, i.jsx)(tC.T, {
                                className: p,
                                labeledForId: C,
                                title: a,
                                description: r,
                                coverUrl: n,
                                viewAllActionLink: s,
                                titleSize: x,
                                controls: b && (0, i.jsx)(tA.X, { className: tN().controls, carouselRef: j }),
                                withDescription: !!r,
                            }),
                            (0, i.jsx)(tj.F, {
                                className: _,
                                ref: j,
                                itemClassName: (0, o.$)(tN().item, { [tN().item_withMultipleColumns]: y > 1 }),
                                'aria-labelledby': C,
                                role: 'group',
                                children: A,
                            }),
                        ],
                    });
                },
                tB = (0, l.forwardRef)((e, t) => (0, i.jsx)(tR, { forwardRef: t, ...e }));
            var tL = a(64310),
                tO = a(48937),
                tD = a.n(tO);
            let tw = (e) => {
                let { isShimmerActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: tD().root,
                    children: [
                        (0, i.jsxs)('div', {
                            className: tD().container,
                            children: [
                                (0, i.jsx)(eQ.V, {
                                    className: (0, o.$)(tD().entity, tD().important),
                                    shimmerClassName: (0, o.$)(tD().cover, tD().important),
                                    round: !0,
                                    withInfo: !1,
                                    isActive: t,
                                }),
                                (0, i.jsxs)('div', {
                                    className: tD().meta,
                                    children: [
                                        (0, i.jsx)(tL.n, { textClassName: (0, o.$)(tD().title, tD().important), isActive: t }),
                                        (0, i.jsx)(tL.n, { textClassName: (0, o.$)(tD().subtitle, tD().important), isActive: t }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)('div', {
                            className: tD().container,
                            children: [
                                (0, i.jsx)(eQ.V, {
                                    className: (0, o.$)(tD().entity, tD().important),
                                    shimmerClassName: (0, o.$)(tD().cover, tD().important),
                                    withInfo: !1,
                                    isActive: t,
                                    radius: 'xs',
                                }),
                                (0, i.jsxs)('div', {
                                    className: tD().meta,
                                    children: [
                                        (0, i.jsx)(tL.n, { textClassName: (0, o.$)(tD().title, tD().important), isActive: t }),
                                        (0, i.jsx)(tL.n, { textClassName: (0, o.$)(tD().subtitle, tD().important), isActive: t }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            };
            var tM = a(28777),
                tH = a.n(tM),
                tU = a(71506),
                tz = a.n(tU),
                tV = a(12360),
                tG = a.n(tV);
            let tX = (0, n.PA)((e) => {
                let { album: t } = e;
                return (0, i.jsx)(eu.M, {
                    album: t,
                    className: (0, o.$)(tz().block, tG().root),
                    coverClassName: tz().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                });
            });
            var t$ = a(27639),
                tY = a(91802),
                tW = a.n(tY);
            let tF = (0, n.PA)((e) => {
                let { artist: t } = e;
                return (0, i.jsx)(t$.c, {
                    artist: t,
                    className: (0, o.$)(tz().block, tW().root),
                    coverClassName: tz().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    pageId: eG._Q.SEARCH,
                });
            });
            var tK = a(85463),
                tq = a(73805),
                tQ = a(56712),
                tZ = a(13946),
                tJ = a(34232),
                t0 = a(39079),
                t1 = a(85587),
                t8 = a(62270),
                t6 = a.n(t8),
                t2 = a(76816),
                t9 = a(91292),
                t3 = a(39267),
                t4 = a(80624),
                t5 = a.n(t4);
            let t7 = (0, n.PA)((e) => {
                var t;
                let { track: a } = e,
                    { from: r } = (0, e$.f)(),
                    { formatMessage: s } = (0, c.A)(),
                    n = { contextData: { type: en.K.Various, meta: { id: a.entityId }, from: r }, queueParams: { index: 0, entityId: a.id }, loadContextMeta: !0 },
                    d = (0, t0.D)({ playContextParams: n, entityId: a.entityId }),
                    u = (0, l.useCallback)(
                        (e) =>
                            (0, i.jsx)(t3.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: (0, o.$)(tz().cover, t5().cover),
                                alt: s({ id: 'entity-names.track-name-by-type' }, { type: (0, tJ.y)(a.type), name: a.title }),
                                radius: 'xs',
                                ...e,
                            }),
                        [s, a.coverUri, a.isAvailable, a.isDisliked, a.title, a.type],
                    ),
                    m = (0, tK.O)({ track: a, entityType: t1.n.AUDIOBOOK }),
                    h = (0, b.L)(() =>
                        a.url && a.isAvailable
                            ? (0, i.jsx)(t9.N, { className: (0, o.$)(t6().text, t6().titleLink), href: a.url, onClick: m, children: a.title })
                            : (0, i.jsx)(F.HL, { className: (0, o.$)(t6().text, t6().titleText), size: 'm', variant: 'div', type: 'text', children: a.title }),
                    ),
                    _ = (0, l.useCallback)(
                        (e, t) => {
                            var r;
                            return (null == (r = a.artists) ? void 0 : r.length)
                                ? (0, i.jsx)(tZ.i, { linkClassName: e, captionClassName: t, artists: a.artists, lineClamp: 1, withLink: a.isAvailable })
                                : null;
                        },
                        [a.artists, a.isAvailable],
                    );
                return (0, i.jsx)(tQ.C, {
                    className: (0, o.$)(tz().block, t5().root, t6().root, { [t6().root_disabled]: !a.isAvailable }),
                    track: a,
                    meta: (0, i.jsx)(t2.r, {
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
                    controls: (0, i.jsx)(tq.Q, { track: a, utmLink: n.contextData.utmLink, likeIconSize: 'xs' }),
                    ...d,
                });
            });
            var ae = a(91289),
                at = a(38501),
                aa = a(6424),
                ar = a.n(aa);
            let as = (0, n.PA)((e) => {
                    let { clip: t } = e,
                        a = (0, at.d)(),
                        r = (0, l.useRef)(String((0, e8.A)()));
                    return a
                        ? (0, i.jsx)(ae.N, {
                              clip: t,
                              viewUuid: r.current,
                              className: tz().block,
                              coverClassName: ar().cover,
                              playButtonIconSize: 'l',
                              likeIconSize: 'xs',
                              shouldShowTimecode: !0,
                          })
                        : null;
                }),
                ai = (0, n.PA)((e) => {
                    let { id: t, concert: a } = e,
                        r = [],
                        s = (0, i.jsx)(F.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                    return (
                        (null == a ? void 0 : a.city) && r.push((0, i.jsx)(F.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: a.city })),
                        (null == a ? void 0 : a.contentRating) &&
                            r.push(s, (0, i.jsx)(F.HL, { variant: 'span', size: 'm', weight: 'medium', children: a.contentRating })),
                        (0, i.jsxs)('div', {
                            className: e3().root,
                            id: t,
                            children: [
                                (0, i.jsx)(F.HL, {
                                    variant: 'div',
                                    size: 'm',
                                    weight: 'medium',
                                    className: e3().city,
                                    lineClamp: 1,
                                    children: null == a ? void 0 : a.title,
                                }),
                                (0, i.jsx)('div', { className: e3().info, children: r.map((e, t) => (0, l.cloneElement)(e, { key: t })) }),
                            ],
                        })
                    );
                });
            var ao = a(89592),
                an = a.n(ao);
            let al = (0, n.PA)((e) => {
                let { concert: t } = e,
                    a = (0, l.useRef)(String((0, e8.A)())),
                    r = t.isIdentityExperimentEnabled ? e2.M : ai;
                return (0, i.jsx)(e6.V, {
                    artistId: null,
                    viewUuid: a.current,
                    concert: t,
                    radius: 's',
                    className: an().root,
                    meta: (0, i.jsx)(r, { concert: t }),
                    shouldSendAnalyticsOnHide: !0,
                    shouldShowMask: !0,
                });
            });
            var ac = a(50392),
                ad = a.n(ac);
            let au = (0, n.PA)((e) => {
                let { album: t } = e;
                return (0, i.jsx)(eu.M, {
                    album: t,
                    className: (0, o.$)(tz().block, ad().root),
                    coverClassName: tz().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    shouldShowReleaseYear: !0,
                });
            });
            var am = a(32506),
                ah = a(94698),
                a_ = a.n(ah);
            let ap = (0, n.PA)((e) => {
                let { data: t } = e,
                    { formatMessage: a } = (0, c.A)();
                return (0, i.jsx)('div', {
                    className: a_().root,
                    children: (0, i.jsx)(am.F, { textButton: a({ id: 'interface-actions.further' }), meta: t, buttonClassName: (0, o.$)(a_().button, a_().important) }),
                });
            });
            var ax = a(4196),
                ab = a(3448),
                aS = a.n(ab);
            let av = (0, n.PA)((e) => {
                let { playlist: t } = e;
                return (0, i.jsx)(ax.v, {
                    playlist: t,
                    className: (0, o.$)(tz().block, aS().root),
                    coverClassName: tz().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                });
            });
            var aj = a(48215),
                aC = a(35786),
                aA = a.n(aC);
            let ay = (0, n.PA)((e) => {
                let { track: t } = e,
                    { from: a } = (0, e$.f)(),
                    { formatMessage: r } = (0, c.A)(),
                    {
                        settings: { isMobile: s },
                    } = (0, y.g)(),
                    n = { contextData: { type: en.K.Various, meta: { id: t.entityId }, from: a }, queueParams: { index: 0, entityId: t.id }, loadContextMeta: !0 },
                    d = (0, t0.D)({ playContextParams: n, entityId: t.entityId }),
                    u = (0, l.useCallback)(
                        (e) =>
                            (0, i.jsx)(t3.q, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: (0, o.$)(tz().cover, aA().cover),
                                alt: r({ id: 'entity-names.track-name-by-type' }, { type: (0, tJ.y)(t.type), name: t.title }),
                                radius: 'xs',
                                ...e,
                            }),
                        [r, t.coverUri, t.isAvailable, t.isDisliked, t.title, t.type],
                    );
                return (0, i.jsx)(tQ.C, {
                    className: (0, o.$)(tz().block, aA().root),
                    track: t,
                    meta: (0, i.jsx)(aj.w, {
                        podcastMetaClassName: (0, o.$)(aA().podcastMeta, aA().important),
                        titleContainerClassName: (0, o.$)(aA().titleContainer, aA().important),
                        textClassName: (0, o.$)(aA().text, aA().important),
                        progressClassName: (0, o.$)(aA().progress, aA().important),
                        track: t,
                        playContextParams: n,
                        withListeningProgress: !0,
                        explicitSize: 'xxxs',
                        titleLineClamp: 2,
                        withAlbumTitleLink: !s,
                    }),
                    playButtonCellRender: u,
                    playButtonIconSize: 'l',
                    controls: (0, i.jsx)(tq.Q, { track: t, utmLink: n.contextData.utmLink, likeIconSize: 'xs' }),
                    ...d,
                    'data-test-id': m.Kq.track.TRACK_PODCAST,
                });
            });
            var aT = a(61084),
                ag = a.n(aT);
            let aI = (0, n.PA)((e) => {
                let { album: t } = e;
                return (0, i.jsx)(eu.M, {
                    album: t,
                    className: (0, o.$)(tz().block, ag().root),
                    coverClassName: tz().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    description: (0, i.jsx)(Y.A, { id: 'entity-names.recently-release' }),
                });
            });
            var aE = a(15232),
                ak = a(72936),
                aP = a.n(ak);
            let af = (0, n.PA)((e) => {
                let { track: t } = e,
                    { from: a } = (0, e$.f)(),
                    {
                        settings: { isMobile: r },
                    } = (0, y.g)(),
                    s = { contextData: { type: en.K.Various, meta: { id: t.entityId }, from: a }, queueParams: { index: 0, entityId: t.id }, loadContextMeta: !0 },
                    n = (0, t0.D)({ playContextParams: s, entityId: t.entityId }),
                    c = (0, l.useCallback)(
                        (e) =>
                            (0, i.jsx)(t3.q, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: (0, o.$)(tz().cover, aP().cover),
                                radius: 'xs',
                                ...e,
                            }),
                        [t.coverUri, t.isAvailable, t.isDisliked, t.title],
                    );
                return (0, i.jsx)(tQ.C, {
                    className: (0, o.$)(tz().block, aP().root),
                    track: t,
                    meta: (0, i.jsx)(aE.j, { withArtistLink: !r, track: t }),
                    playButtonCellRender: c,
                    playButtonIconSize: 'l',
                    controls: (0, i.jsx)(tq.Q, { track: t, utmLink: s.contextData.utmLink, likeIconSize: 'xs' }),
                    ...n,
                    'data-test-id': m.Kq.track.SEARCH_TRACK_CARD,
                });
            });
            var aN = a(25596),
                aR = a(28830),
                aB = a(32414),
                aL = a(8990),
                aO = a(49738),
                aD = a(64546),
                aw = a(48864),
                aM = a.n(aw);
            let aH = (0, n.PA)((e) => {
                let { upcomingAlbum: t } = e,
                    { ref: a, intersectionPropertyId: r } = (0, aR.n)(),
                    { user: s } = (0, y.g)(),
                    { formatMessage: n, formatDate: d } = (0, c.A)(),
                    u = (0, aN.P)(t),
                    m = (0, b.L)(() => {
                        let e = n({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: t.title }),
                            a = t.isPresave ? n({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(a);
                    }),
                    h = (0, l.useCallback)(
                        (e, a) => {
                            var r;
                            return (null == (r = t.artists) ? void 0 : r.length)
                                ? (0, i.jsx)(tZ.i, { linkClassName: e, captionClassName: a, artists: t.artists, lineClamp: 1 })
                                : null;
                        },
                        [t.artists],
                    );
                return (0, i.jsxs)(aL.C, {
                    ref: a,
                    'data-intersection-property-id': r,
                    className: (0, o.$)(tz().block, t6().root, aM().root, aM().important),
                    'aria-label': m,
                    children: [
                        (0, i.jsxs)(ek.t, {
                            className: aM().cover,
                            radius: 'xs',
                            children: [
                                (0, i.jsx)(eD.B, {
                                    className: aM().coverImage,
                                    src: t.coverUri,
                                    size: 100,
                                    alt: n({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: t.title }),
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    fallbackIconSize: 'm',
                                    fallbackIconVariant: 'lock',
                                }),
                                t.coverUri && (0, i.jsx)(Z.I, { className: aM().lockIcon, variant: 'lock', size: 'xs' }),
                            ],
                        }),
                        (0, i.jsx)(t2.r, {
                            title: (0, i.jsx)(F.HL, { className: (0, o.$)(t6().text, t6().titleText), size: 'l', variant: 'div', type: 'text', children: t.title }),
                            description: (0, i.jsx)(F.HL, {
                                className: aM().releaseDate,
                                variant: 'div',
                                type: 'entity',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                children: (0, i.jsx)(Y.A, { id: 'entity-names.upcoming-album-date', values: { releaseDate: d(t.releaseDate, (0, aB.s)()) } }),
                            }),
                            artistsComponent: h,
                            getDescriptionTexts: t.getDescriptionTexts,
                            explicitMarkVariant: t.explicitDisclaimer,
                        }),
                        (0, i.jsx)(aD.WithOffline, {
                            fallback: (0, i.jsx)(aO.c, {
                                size: 'xs',
                                iconSize: 'xs',
                                className: aM().likeButton,
                                isLiked: t.isPresave,
                                onClick: u,
                                disabled: !s.isAuthorized,
                            }),
                        }),
                    ],
                });
            });
            var aU = a(5120),
                az = a(91198),
                aV = a(67665),
                aG = a(64916),
                aX = a.n(aG);
            let a$ = (0, n.PA)((e) => {
                    var t;
                    let { vibe: a } = e;
                    return (0, i.jsx)(aV.H, {
                        className: (0, o.$)(aX().root, aX().important),
                        coverClassName: (0, o.$)(aX().coverClassName, aX().important),
                        playButtonIconSize: 'l',
                        vibe: a,
                        cover: (0, aU.wg)({ uri: a.backgroundImageUrl, color: null == (t = a.colors) ? void 0 : t.average }),
                        description: a.description,
                        agentVariant: az.h.LARGE,
                    });
                }),
                aY = (0, n.PA)((e) => {
                    let { results: t, isShimmerVisible: a, isShimmerActive: r, blockPosition: s, sendSearchFeedback: n } = e,
                        { formatMessage: d } = (0, c.A)(),
                        h = (0, l.useCallback)(
                            (e, a) => {
                                switch (e.type) {
                                    case t_.r.ALBUM:
                                        return (0, i.jsx)(
                                            eX.B,
                                            {
                                                objectType: u.DomainObjectType.Album,
                                                objectId: String(e.data.id),
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(eY.N.Provider, {
                                                    value: { sendSearchFeedback: n, id: e.data.id, type: ec.o.ALBUM, blockPosition: s, position: a },
                                                    children: (0, i.jsx)(tX, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case t_.r.PLAYLIST:
                                        return (0, i.jsx)(
                                            eX.B,
                                            {
                                                objectType: u.DomainObjectType.Playlist,
                                                objectId: e.data.id,
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(eY.N.Provider, {
                                                    value: { sendSearchFeedback: n, id: e.data.id, type: ec.o.PLAYLIST, blockPosition: s, position: a },
                                                    children: (0, i.jsx)(av, { playlist: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case t_.r.RECENT_RELEASE:
                                        return (0, i.jsx)(
                                            eX.B,
                                            {
                                                objectType: u.DomainObjectType.Album,
                                                objectId: String(e.data.id),
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(eY.N.Provider, {
                                                    value: { sendSearchFeedback: n, id: e.data.id, type: ec.o.ALBUM, blockPosition: s, position: a },
                                                    children: (0, i.jsx)(aI, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case t_.r.WAVE:
                                        return (0, i.jsx)(
                                            eX.B,
                                            {
                                                objectType: u.DomainObjectType.Wave,
                                                objectId: e.data.stationId,
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(eY.N.Provider, {
                                                    value: { sendSearchFeedback: n, id: e.data.seedsId, type: ec.o.WAVE, blockPosition: s, position: a },
                                                    children: (0, i.jsx)(a$, { vibe: e.data }),
                                                }),
                                            },
                                            e.data.stationId,
                                        );
                                    case t_.r.ARTIST:
                                        return (0, i.jsx)(
                                            eX.B,
                                            {
                                                objectType: u.DomainObjectType.Artist,
                                                objectId: e.data.id,
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(eY.N.Provider, {
                                                    value: { sendSearchFeedback: n, id: e.data.id, type: ec.o.ARTIST, blockPosition: s, position: a },
                                                    children: (0, i.jsx)(tF, { artist: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case t_.r.UPCOMING:
                                        return (0, i.jsx)(
                                            eX.B,
                                            {
                                                objectType: u.DomainObjectType.UpcomingAlbum,
                                                objectId: String(e.data.id),
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(aH, { upcomingAlbum: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case t_.r.CONCERT:
                                        return (0, i.jsx)(
                                            eX.B,
                                            {
                                                objectType: u.DomainObjectType.Concert,
                                                objectId: e.data.id,
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(al, { concert: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case t_.r.PODCAST:
                                        return (0, i.jsx)(
                                            eX.B,
                                            {
                                                objectType: u.DomainObjectType.Podcast,
                                                objectId: String(e.data.id),
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(eY.N.Provider, {
                                                    value: { sendSearchFeedback: n, id: e.data.id, type: ec.o.ALBUM, blockPosition: s, position: a },
                                                    children: (0, i.jsx)(au, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case t_.r.NON_MUSIC:
                                        return (0, i.jsx)(
                                            eX.B,
                                            {
                                                objectType: u.DomainObjectType.Audiobook,
                                                objectId: String(e.data.id),
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(au, { album: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case t_.r.PODCAST_EPISODE:
                                        return (0, i.jsx)(
                                            eX.B,
                                            {
                                                objectType: u.DomainObjectType.PodcastEpisode,
                                                objectId: e.data.id,
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(ay, { track: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case t_.r.OVERVIEW:
                                        return (0, i.jsx)(ap, { data: e.data }, e.type);
                                    case t_.r.TRACK:
                                        return (0, i.jsx)(
                                            eX.B,
                                            {
                                                objectType: u.DomainObjectType.Track,
                                                objectId: e.data.id,
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(eY.N.Provider, {
                                                    value: { sendSearchFeedback: n, id: e.data.entityId, type: ec.o.TRACK, blockPosition: s, position: a },
                                                    children: (0, i.jsx)(af, { track: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case t_.r.CLIP:
                                        return (0, i.jsx)(
                                            eX.B,
                                            {
                                                objectType: u.DomainObjectType.Video,
                                                objectId: String(e.data.clipId),
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(eY.N.Provider, {
                                                    value: { sendSearchFeedback: n, id: e.data.clipId, type: ec.o.CLIP, blockPosition: s, position: a },
                                                    children: (0, i.jsx)(as, { clip: e.data }),
                                                }),
                                            },
                                            e.data.clipId,
                                        );
                                    case t_.r.BOOK_CHAPTER:
                                        return (0, i.jsx)(
                                            eX.B,
                                            {
                                                objectType: u.DomainObjectType.AudiobookChapter,
                                                objectId: String(e.data.id),
                                                objectPosX: a + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(t7, { track: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    default:
                                        return null;
                                }
                            },
                            [s, t.length, n],
                        ),
                        _ = (0, l.useMemo)(() => t.map((e, t) => h(e, t)).filter((e) => (0, l.isValidElement)(e)), [h, t, t.length]);
                    return a
                        ? (0, i.jsx)(tw, { isShimmerActive: r })
                        : _.length
                          ? (0, i.jsx)(to.F, {
                                blockId: tp.h.SEARCH_BEST_RESULTS,
                                blockType: tp.h.SEARCH_BEST_RESULTS,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: _.length,
                                children: (0, i.jsx)('div', {
                                    className: (0, o.$)(tH().root, { [tH().root_withSingleResult]: 1 === _.length }),
                                    role: 'group',
                                    'aria-label': d({ id: 'search-results.best' }),
                                    'data-test-id': m.e8.search.SEARCH_BEST_RESULTS,
                                    children: _,
                                }),
                            })
                          : null;
                });
            var aW = a(63766),
                aF = a(47934);
            let aK = (0, n.PA)((e) => {
                    let {
                            forwardRef: t,
                            items: a = [],
                            title: r,
                            sendSearchFeedback: s,
                            blockPosition: o = 0,
                            containerClassName: n,
                            headerClassName: l,
                            className: c,
                            itemClassName: d,
                            isShimmerVisible: u,
                            isShimmerActive: m,
                            isClipBlock: h,
                            ...p
                        } = e,
                        { search: x } = (0, y.g)(),
                        b = (0, at.d)(),
                        S = a.filter((e) => e.type !== _.n.PODCAST_EPISODE);
                    return (x.isResolved && 0 === S.length) || (h && !b)
                        ? null
                        : (0, i.jsx)(aF.O, {
                              isShimmerVisible: u,
                              isShimmerActive: m,
                              className: c,
                              containerClassName: n,
                              headerClassName: l,
                              showHeaderShimmer: !0,
                              title: r,
                              ref: t,
                              ...(0, eo.OZ)(p),
                              itemClassName: d,
                              children: S.map((e, t) => {
                                  switch (e.type) {
                                      case _.n.ALBUM:
                                          return (0, i.jsx)(
                                              eY.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: s, id: e.data.id, type: ec.o.ALBUM, blockPosition: o, position: t },
                                                  children: (0, i.jsx)(ed.a, { album: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.id,
                                          );
                                      case _.n.ARTIST:
                                          return (0, i.jsx)(
                                              eY.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: s, id: e.data.id, type: ec.o.ARTIST, blockPosition: o, position: t },
                                                  children: (0, i.jsx)(em.a, { artist: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.id,
                                          );
                                      case _.n.PLAYLIST:
                                          return (0, i.jsx)(
                                              eY.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: s, id: e.data.id, type: ec.o.PLAYLIST, blockPosition: o, position: t },
                                                  children: (0, i.jsx)(e_.B, { playlist: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.key,
                                          );
                                      case _.n.UGC_TRACK:
                                      case _.n.TRACK:
                                          return (0, i.jsx)(
                                              eY.N.Provider,
                                              {
                                                  value: {
                                                      sendSearchFeedback: s,
                                                      id: e.data.albumId ? ''.concat(e.data.id, ':').concat(e.data.albumId) : e.data.id,
                                                      type: ec.o.TRACK,
                                                      blockPosition: o,
                                                      position: t,
                                                  },
                                                  children: (0, i.jsx)(aW.w, { track: e.data, overrideContextType: el.b.Search }),
                                              },
                                              e.data.id,
                                          );
                                      case _.n.CLIP:
                                          return (0, i.jsx)(
                                              eY.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: s, id: e.data.clipId, type: ec.o.WAVE, blockPosition: o, position: t },
                                                  children: (0, i.jsx)(eh.F, { clip: e.data }),
                                              },
                                              e.data.clipId,
                                          );
                                      case _.n.PODCAST:
                                          return (0, i.jsx)(
                                              eY.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: s, id: e.data.id, type: ec.o.PODCAST, blockPosition: o, position: t },
                                                  children: (0, i.jsx)(ed.a, { album: e.data, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }),
                                              },
                                              e.data.id,
                                          );
                                      case _.n.WAVE:
                                          return (0, i.jsx)(
                                              eY.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: s, id: e.data.stationId, type: ec.o.WAVE, blockPosition: 0, position: t },
                                                  children: (0, i.jsx)(aV.H, {
                                                      vibe: e.data,
                                                      cover: e.data.cover,
                                                      description: e.data.description,
                                                      agentVariant: az.h.SMALL,
                                                  }),
                                              },
                                              e.data.stationId,
                                          );
                                  }
                              }),
                          });
                }),
                aq = (0, l.forwardRef)((e, t) => (0, i.jsx)(aK, { forwardRef: t, ...e }));
            var aQ = a(97893),
                aZ = a.n(aQ);
            let aJ = (0, n.PA)((e) => {
                    let {
                            forwardRef: t,
                            className: a,
                            results: r,
                            bestResults: s,
                            sendSearchFeedback: n,
                            searchCorrectedText: d,
                            isShimmerVisible: u,
                            isShimmerActive: p,
                            q2vResults: x,
                            requestAwakeLumenModal: b,
                            ...S
                        } = e,
                        { formatMessage: v } = (0, c.A)(),
                        j = (0, eg.f)(),
                        { isVisible: C, vibe: A } = e1(x, p),
                        y = (0, l.useMemo)(() => {
                            let e = {
                                [_.n.ALL]: { message: v({ id: 'search-results.best' }), type: _.n.ALL, items: [] },
                                [_.n.ARTIST]: { message: v({ id: 'search-results.artist' }), type: _.n.ARTIST, items: [] },
                                [_.n.PODCAST]: { message: v({ id: 'search-results.podcasts-and-books' }), type: _.n.PODCAST, items: [] },
                                [_.n.ALBUM]: { message: v({ id: 'search-results.album' }), type: _.n.ALBUM, items: [] },
                                [_.n.PLAYLIST]: { message: v({ id: 'search-results.playlist' }), type: _.n.PLAYLIST, items: [] },
                                [_.n.CLIP]: { message: v({ id: 'search-results.clip' }), type: _.n.CLIP, items: [] },
                            };
                            r.filter((e) => !!e).forEach((t) => {
                                if (t) {
                                    var a, r;
                                    (null == (a = e[t.type]) || a.items.push(t), null == (r = e[_.n.ALL]) || r.items.push(t));
                                }
                            });
                            let t = {
                                [_.n.ARTIST]: m.e8.search.SEARCH_MIXED_ARTIST,
                                [_.n.PODCAST]: m.e8.search.SEARCH_MIXED_PODCAST,
                                [_.n.ALBUM]: m.e8.search.SEARCH_MIXED_ALBUM,
                                [_.n.PLAYLIST]: m.e8.search.SEARCH_MIXED_PLAYLIST,
                                [_.n.CLIP]: m.e8.search.SEARCH_MIXED_CLIP,
                                [t_.r.PODCAST]: m.e8.search.SEARCH_MIXED_BEST_PODCAST,
                                [t_.r.OVERVIEW]: m.e8.search.SEARCH_MIXED_BEST_OVERVIEW,
                                [t_.r.PODCAST_EPISODE]: m.e8.search.SEARCH_MIXED_BEST_PODCAST_EPISODE,
                                [t_.r.NON_MUSIC]: m.e8.search.SEARCH_MIXED_BEST_NON_MUSIC,
                            };
                            return Object.getOwnPropertyNames(e).map((a, r) => {
                                let o = e[a],
                                    c = o.type === _.n.CLIP;
                                if (o.type === _.n.ALL) {
                                    let e = o.items
                                        .map((e, t) => {
                                            let {
                                                objectPosX: a,
                                                objectPosY: s,
                                                objectsCount: i,
                                            } = (0, tx.$)({ index: t, count: o.items.length, itemsCountPerColumn: 3, showedItemsCountInBlock: 6 });
                                            return (0, tS.G)({
                                                item: e,
                                                index: t,
                                                sendSearchFeedback: n,
                                                blockPosition: r,
                                                objectPosX: a,
                                                objectPosY: s,
                                                objectsCount: i,
                                            });
                                        })
                                        .filter((e) => (0, l.isValidElement)(e));
                                    return (0, i.jsxs)(
                                        l.Fragment,
                                        {
                                            children: [
                                                (0, i.jsx)(aY, { results: s, isShimmerVisible: u, isShimmerActive: p, blockPosition: r, sendSearchFeedback: n }),
                                                (0, i.jsx)(to.F, {
                                                    blockId: tp.h.SEARCH_OPEN_BEST_RESULTS,
                                                    blockType: tp.h.SEARCH_OPEN_BEST_RESULTS,
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    objectsCount: e.length,
                                                    children: (0, i.jsx)(tB, {
                                                        containerClassName: aZ().blockMixed,
                                                        className: aZ().block,
                                                        maxColumns: 2,
                                                        itemsPerColumn: 3,
                                                        showControls: !0,
                                                        'aria-label': v({ id: 'search-results.other-results' }),
                                                        isShimmerVisible: u,
                                                        isShimmerActive: p,
                                                        children: e,
                                                    }),
                                                }),
                                            ],
                                        },
                                        r,
                                    );
                                }
                                let d = t[o.type];
                                return (0, i.jsx)(
                                    aq,
                                    {
                                        className: aZ().block,
                                        headerClassName: aZ().blockHeader,
                                        containerClassName: aZ().blockCarousel,
                                        blockPosition: r,
                                        items: o.items,
                                        title: o.message,
                                        sendSearchFeedback: n,
                                        isShimmerVisible: u,
                                        isShimmerActive: p,
                                        isClipBlock: c,
                                        ...(d ? { 'data-test-id': d } : {}),
                                    },
                                    r,
                                );
                            });
                        }, [v, r, n, u, p, s]);
                    return (0, i.jsxs)(J.N, {
                        className: (0, o.$)(aZ().root, a),
                        containerClassName: aZ().container,
                        ref: t,
                        ...(0, eo.OZ)(S),
                        children: [
                            (0, i.jsxs)('div', {
                                className: aZ().content,
                                children: [
                                    d && (0, i.jsx)('div', { className: aZ().correctedTextBlock, children: d }),
                                    (0, i.jsxs)(tb.h, {
                                        tabId: h.$.TOP,
                                        tabPos: 1,
                                        isTabSelectedByDefault: !0,
                                        children: [
                                            j && C && (0, i.jsx)(tc, { requestAwakeLumenModal: b, sendSearchFeedback: n, vibe: A }),
                                            (0, i.jsx)('div', { className: aZ().items, children: y }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(et.A, { children: (0, i.jsx)(ee.w, { className: aZ().footer }) }),
                        ],
                    });
                }),
                a0 = (0, l.forwardRef)((e, t) => (0, i.jsx)(aJ, { forwardRef: t, ...e }));
            var a1 = a(20129),
                a8 = a(69048),
                a6 = a(23192),
                a2 = a(64284),
                a9 = a(4476),
                a3 = a(59844),
                a4 = a(27164),
                a5 = a(44230),
                a7 = a(37670),
                re = a(4370),
                rt = a(60628),
                ra = a(74773),
                rr = a(34303),
                rs = a(14912),
                ri = a(94058),
                ro = a(87366),
                rn = a(76099);
            let rl = Math.floor(eJ.k / 3);
            var rc = a(96966),
                rd = a.n(rc),
                ru = a(25772),
                rm = a(84273),
                rh = a(35962),
                r_ = a(62586),
                rp = a.n(r_);
            let rx = (0, n.PA)((e) => {
                let { isShimmerVisible: t, isShimmerActive: a, mixes: r } = e,
                    { formatMessage: s } = (0, c.A)(),
                    o = (0, l.useMemo)(
                        () =>
                            t
                                ? (0, rh.k)({ isActive: a, withInfo: !1 })
                                : r.map((e) =>
                                      (0, i.jsx)(
                                          rm.N,
                                          { title: e.title, weblink: e.weblink, covers: e.covers, coverSize: 80, imagesLayoutType: e.imagesLayoutType },
                                          e.id,
                                      ),
                                  ),
                        [a, t, r],
                    );
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tC.T, { className: rp().carouselHeader, title: s({ id: 'entity-names.mixes' }), titleSize: 'xs', viewAllActionLink: re.Z.mixes.href }),
                        (0, i.jsx)(tj.F, { className: rp().carouselBlock, itemClassName: rp().mixItem, children: o }),
                    ],
                });
            });
            var rb = a(48704);
            let rS = (0, n.PA)((e) => {
                let { className: t } = e,
                    {
                        settings: { isMobile: a },
                        search: r,
                    } = (0, y.g)();
                return (r.mixes.loadingState === ra.G.IDLE && (0, l.use)(r.mixes.getMixes(!1)), a)
                    ? (0, i.jsx)(rx, { isShimmerVisible: r.mixes.isLoading || r.mixes.isRejected, isShimmerActive: r.mixes.isLoading, mixes: r.mixes.items })
                    : (0, i.jsx)(rb.n, {
                          isShimmerVisible: r.mixes.isLoading || r.mixes.isRejected,
                          isShimmerActive: r.mixes.isLoading,
                          mixes: r.mixes.items,
                          className: t,
                          withTitle: !0,
                      });
            });
            var rv = a(62297),
                rj = a.n(rv);
            let rC = (0, n.PA)(() => {
                let { search: e, user: t } = (0, y.g)(),
                    { formatMessage: a } = (0, c.A)(),
                    r = e.historyPage.items;
                if (
                    ((0, l.useEffect)(
                        () => () => {
                            var t;
                            (null == (t = location) ? void 0 : t.pathname) !== re.Z.searchHistory.href && e.resetHistoryStateRequest();
                        },
                        [e],
                    ),
                    e.isHistoryReady && t.account.data.uid && (0, l.use)(e.getHistory({ userId: t.account.data.uid })),
                    0 === r.length)
                )
                    return null;
                let s = r.map((e, t) => (0, tS.G)({ item: e, index: t, pageId: eG._Q.SEARCH })).filter((e) => (0, l.isValidElement)(e));
                return (0, i.jsx)('section', {
                    className: rj().root,
                    children: (0, i.jsx)(tB, {
                        headerClassName: rj().header,
                        containerClassName: rj().content,
                        isShimmerVisible: e.isHistoryShimmerVisible,
                        isShimmerActive: e.isHistoryLoading,
                        title: a({ id: 'search.history' }),
                        viewAllAction: re.Z.searchHistory.href,
                        maxColumns: 2,
                        itemsPerColumn: 4,
                        showControls: !0,
                        children: s,
                    }),
                });
            });
            var rA = a(37717),
                ry = a(33301),
                rT = a.n(ry);
            let rg = (0, n.PA)(() => {
                    let { search: e, user: t } = (0, y.g)(),
                        { formatMessage: a } = (0, c.A)(),
                        r = (0, rA.t)(e.resetHistoryItems),
                        s = e.historyPage.items;
                    if (
                        ((0, l.useEffect)(
                            () => () => {
                                var t;
                                (null == (t = location) ? void 0 : t.pathname) !== re.Z.searchHistory.href && e.resetHistoryStateRequest();
                            },
                            [e],
                        ),
                        e.isHistoryReady && t.account.data.uid && (0, l.use)(e.getHistory({ userId: t.account.data.uid })),
                        0 === s.length)
                    )
                        return null;
                    let o = s.map((e, t) => (0, tS.G)({ item: e, index: t, pageId: eG._Q.SEARCH })).filter((e) => (0, l.isValidElement)(e));
                    return (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(tB, {
                                headerClassName: rT().header,
                                containerClassName: rT().mixedEntitiesBlock,
                                isShimmerVisible: e.isHistoryShimmerVisible,
                                isShimmerActive: e.isHistoryLoading,
                                title: a({ id: 'search.history' }),
                                viewAllAction: re.Z.searchHistory.href,
                                titleSize: 'xs',
                                children: o,
                            }),
                            (0, i.jsx)('div', {
                                className: rT().buttonContainer,
                                children: (0, i.jsx)(W.$, {
                                    className: rT().button,
                                    'aria-label': a({ id: 'search.clear-history' }),
                                    disabled: !s.length,
                                    size: 'default',
                                    radius: 'xxxl',
                                    onClick: r,
                                    children: (0, i.jsx)(F.HL, { variant: 'span', size: 'm', type: 'text', children: (0, i.jsx)(Y.A, { id: 'search.clear-history' }) }),
                                }),
                            }),
                        ],
                    });
                }),
                rI = (0, n.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, y.g)();
                    return e ? (0, i.jsx)(rg, {}) : (0, i.jsx)(rC, {});
                });
            var rE = a(32596),
                rk = a(69630),
                rP = a(78793),
                rf = a(99984),
                rN = a(90780),
                rR = a(65523),
                rB = a(37436),
                rL = a(46166),
                rO = a(76168);
            let rD = [rr.K.BEST_PLAY, rr.K.SEEDS];
            var rw = a(93317);
            let rM = (0, n.PA)((e) => {
                    let { autoPlaySearchText: t, searchResults: a, setContentScrollRef: r, contentScrollRef: s, hasSearchText: n } = e,
                        {
                            lumen: c,
                            user: h,
                            search: _,
                            settings: { isMobile: p },
                        } = (0, y.g)(),
                        [b, S] = (0, eb.d)(),
                        v = (0, l.useRef)(t),
                        j = t !== v.current,
                        C = c.isTriedToLoadData && !c.isAwakened;
                    ((e) => {
                        let { isEnabled: t, shouldCancel: a } = e,
                            { sonataState: r, vibe: s } = (0, y.g)(),
                            { pageId: i } = (0, eR.$)(),
                            o = (0, d.useSearchParams)(),
                            n = (0, rO.z)(),
                            c = ((e) => {
                                let { entityId: t, entityType: a, objectType: r } = e,
                                    s = (0, rN.st)(),
                                    i = (0, rR.U)(),
                                    { pageId: o, pagePlacement: n, pageStyle: l } = (0, eR.$)(),
                                    { blockId: c, blockType: d } = (0, eN.N)(),
                                    { objectType: m } = (0, rL.J)();
                                return (0, x.c)(() => {
                                    if (!s || !o) return;
                                    let e = {
                                            entityId: null != c ? c : t,
                                            entityType: null != d ? d : a,
                                            objectType: null != m ? m : r,
                                            pageId: rB.W[o],
                                            pagePlacement: null != n ? n : u.PagePlacements.Fullscreen,
                                            pageStyle: null != l ? l : u.PageStyles.Fullscreen,
                                        },
                                        h = (0, rP.F)({ params: e, logger: i, context: 'useSendEventOnScreenStarted' });
                                    h && (0, rf.e7)(s.evgenInstance, h);
                                });
                            })({ entityId: u.EntityTypes.Deeplink, entityType: u.EntityTypes.Deeplink, objectType: u.DomainObjectType.NonApplicable }),
                            m = (0, l.useRef)(!1),
                            h = o.get(rr.K.BEST_PLAY),
                            _ = o.get(rr.K.SEEDS),
                            p = 'true' === h && _,
                            b = (null !== h || null !== _) && !p,
                            S = (0, l.useRef)(p ? p.split(',') : []).current,
                            v = S.length > 0,
                            { isPlaying: j, togglePlay: C } = (0, eL.B)({ blockIdForFrom: u.EntityTypes.Q2vWave, pageIdForFrom: i, seeds: S });
                        ((0, l.useEffect)(() => {
                            b && n(rD);
                        }, [b, n]),
                            (0, l.useEffect)(() => {
                                let e = !a && !t;
                                !m.current && v && !e && ((m.current = !0), a || j || s.isApplying || (r.setShouldApplyYnisonState(!1), C(), n(rD), c()));
                            }, [v, t, j, n, c, a, r, C, s.isApplying]));
                    })({ isEnabled: c.isAwakened, shouldCancel: j || C });
                    let A = _.landing.hasUpperBlocks,
                        T = p || A,
                        g = !p && A;
                    return n
                        ? a
                        : h.isAuthorized
                          ? (0, i.jsx)(rk.h, {
                                scrollElement: g ? null : s,
                                headerElement: b,
                                children: (0, i.jsxs)(J.N, {
                                    className: (0, o.$)(rd().scrollableContent, { [rd().scrollableContent_withUpperBlocks]: A }),
                                    containerClassName: rd().main,
                                    ref: r,
                                    'data-test-id': m.Xk.search.SEARCH_PAGE_CONTENT,
                                    children: [
                                        (0, i.jsx)(ru.E, {
                                            containerClassName: (0, o.$)(rd().skeletonContainer, { [rd().skeletonContainer_withUpperBlocks]: A }),
                                            headerClassName: g ? (0, o.$)(rd().skeletonHeaderWithUpperBlocks, rd().important) : void 0,
                                            stickyHeaderClassName: g
                                                ? (0, o.$)(rd().skeletonStickyHeaderWithUpperBlocks, rd().important)
                                                : (0, o.$)(rd().skeletonStickyHeader, rd().important),
                                            stickyHeaderTabIndex: T ? null : 0,
                                            headerConcealerComponent: (0, i.jsx)('div', { ref: S }),
                                            landing: _.landing,
                                            errorComponent: (0, i.jsx)(rE.SomethingWentWrong, { className: rd().error, withBackwardControl: !1 }),
                                            headerVariant: T ? rw.V.COMPOSITE : rw.V.STICKY,
                                        }),
                                        (0, i.jsx)(et.A, { children: (0, i.jsx)(ee.w, { className: rd().footer }) }),
                                    ],
                                }),
                            })
                          : (0, i.jsxs)(J.N, {
                                className: rd().scrollableContent,
                                containerClassName: rd().main,
                                ref: r,
                                children: [
                                    (0, i.jsx)(l.Suspense, {
                                        children: (0, i.jsx)(to.F, {
                                            blockId: tp.h.SEARCH_HISTORY,
                                            blockType: tp.h.SEARCH_HISTORY,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            blockIdForFrom: tp.h.SEARCH_HISTORY,
                                            objectsCount: _.historyPage.items.length,
                                            children: (0, i.jsx)(rI, {}),
                                        }),
                                    }),
                                    (0, i.jsx)(l.Suspense, { children: (0, i.jsx)(rS, { className: rd().mixes }) }),
                                    (0, i.jsx)(et.A, { children: (0, i.jsx)(ee.w, { className: rd().footer }) }),
                                ],
                            });
                }),
                rH = (0, n.PA)(() => {
                    var e;
                    let t = (0, eg.f)(),
                        { awakeLumenModal: a, requestAwakeLumenModal: r } = (0, a8.z)(),
                        s = (0, v.zb)(0),
                        [n, j] = (0, l.useState)(h.$.TOP),
                        [C, A] = (0, l.useState)(!1),
                        [T, g] = (0, l.useState)(null),
                        { formatMessage: I } = (0, c.A)(),
                        { search: E, experiments: k, location: P, lumen: f, user: N, settings: R } = (0, y.g)(),
                        { isMobile: B } = R,
                        L = k.checkExperiment(eF.z.WebNextQueryToVibeInputAnimation, 'on'),
                        { contentScrollRef: O, setContentScrollRef: D } = (0, a5.g)(),
                        w = ((e) => {
                            let { formatMessage: t } = (0, c.A)(),
                                a = (0, at.d)(),
                                { experiments: r } = (0, y.g)(),
                                s = !r.checkExperiment(eF.z.WebNextProductWithoutRecommendation, 'on'),
                                i = r.checkExperiment(eF.z.WebNextSearchConcerts, 'on');
                            return e
                                ? [{ id: h.$.TOP, displayName: t({ id: 'search-filters.top' }) }, ...e].filter((e) => {
                                      if ((e.id !== h.$.CLIP || a) && (e.id !== h.$.CONCERT || i) && (e.id !== h.$.WAVES || s)) return e;
                                  })
                                : [{ id: h.$.TOP, displayName: t({ id: 'search-filters.top' }) }];
                        })(E.filters),
                        M = (0, rs.X)(),
                        [H, U] = (0, l.useState)(() => {
                            var e;
                            return decodeURIComponent(null != (e = new URLSearchParams(P.searchParams).get(rr.K.TEXT)) ? e : '');
                        }),
                        z = (0, l.useRef)(H),
                        V = H.length > 0,
                        G = C && null != (e = E.searchCorrectedText) ? e : H;
                    (k.checkExperiment(eF.z.WebNextDisableSearch, 'on') && (0, d.redirect)(re.Z.main.href),
                        (0, a7.J)(E.landing.loadingState === ra.G.RESOLVE),
                        (0, l.useEffect)(
                            () => () => {
                                (E.reset(), N.isAuthorized && E.landing.reset());
                            },
                            [N.isAuthorized, k, E],
                        ),
                        (0, l.useEffect)(() => {
                            f.isEnabled && f.getData();
                        }, [f]));
                    let X = (0, x.c)((e, t) => {
                            (E.resetResults(), 0 !== e.length && E.getSearchResults({ text: decodeURIComponent(e), filter: t }));
                        }),
                        Y = (0, x.c)(() => {
                            A(!0);
                        }),
                        W = (0, x.c)((e) => {
                            e.trim() && g(e);
                        }),
                        F = (0, x.c)((e) => {
                            var t, a;
                            if (!s.onTabChange || e === s.value) return;
                            s.onTabChange(e);
                            let r = null != (a = null == (t = w[e]) ? void 0 : t.id) ? a : h.$.TOP;
                            (Object.values(h.$).includes(r) && (j(r), X(z.current, r)), O && (O.scrollTop = 0));
                        }),
                        K = (0, x.c)((e) => {
                            let t = e.trim(),
                                a = encodeURIComponent(t);
                            (U(a),
                                (z.current = a),
                                0 !== s.value && F(0),
                                X(a, h.$.TOP),
                                E.history.setShouldUpdateHistory(!0),
                                E.resetSearchCorrectedText(),
                                A(!1),
                                g(null));
                            let r = new URL(window.location.href);
                            (r.searchParams.set(rr.K.TEXT, t), M(String(r)));
                        }),
                        q = (0, x.c)((e) => {
                            var t, a;
                            let { id: r, type: s, blockPosition: i, position: o, feedbackType: n } = e;
                            E.sendFeedback({
                                blockType: s,
                                entityId: ''.concat(s, ':').concat(r),
                                timestamp: new Date().toISOString(),
                                searchRequestId: E.searchRequestId,
                                query: z.current,
                                clickType: n,
                                blockPosition: i,
                                position: o,
                                page: null != (a = null == (t = E.pagesLoader.pager) ? void 0 : t.page) ? a : 0,
                            });
                        }),
                        Z = ((e) => {
                            let { search: t, searchText: a, searchFilter: r } = e;
                            return (0, l.useCallback)(
                                function (e) {
                                    var s, i;
                                    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                        n = t.pagesLoader.pager;
                                    if (!n) return;
                                    let l = null != (i = null == (s = t.pagesLoader.items) ? void 0 : s.length) ? i : 0,
                                        c = e.endIndex * o;
                                    if (l > 0 && c >= l - rl) {
                                        if (!t.pagesLoader.hasMorePages) return;
                                        let e = Math.ceil(l / n.perPage);
                                        t.pagesLoader.isPageNeedToLoad(e) && t.getSearchResults({ text: decodeURIComponent(a), filter: r, page: e });
                                    }
                                },
                                [t, a, r],
                            );
                        })({ search: E, searchText: z.current, searchFilter: n }),
                        J = (0, l.useMemo)(
                            () => (E.searchCorrectedText ? (0, i.jsx)(Q, { searchCorrectedText: E.searchCorrectedText, onCorrectText: Y }) : null),
                            [Y, E.searchCorrectedText],
                        ),
                        ee = (0, b.L)(() => {
                            var e, t, a, s, o;
                            if (E.isEmpty) return (0, i.jsx)(ei, { searchCorrectedText: J });
                            let l = {
                                className: rd().searchResults,
                                isShimmerVisible: E.isShimmerVisible,
                                isShimmerActive: E.isLoading,
                                results: null != (e = E.pagesLoader.items) ? e : [],
                                requestsCount: E.pagesLoader.requestsCount,
                                bestResults: E.bestResults,
                                q2vResults: E.q2vResults,
                                sendSearchFeedback: q,
                                searchCorrectedText: J,
                                getDataByRange: Z,
                                ref: D,
                                requestAwakeLumenModal: r,
                            };
                            switch (n) {
                                case h.$.TOP:
                                    return (0, i.jsx)(tb.h, {
                                        tabId: n,
                                        tabPos: E.filterPosition(n),
                                        isTabSelectedByDefault: !1,
                                        children: (0, i.jsx)(a0, { ...l, 'data-test-id': m.Xk.search.SEARCH_PAGE_RESULTS_TOP }),
                                    });
                                case h.$.TRACK:
                                    return (0, i.jsx)(tb.h, {
                                        tabId: n,
                                        tabPos: E.filterPosition(n),
                                        isTabSelectedByDefault: !1,
                                        children: (0, i.jsx)(to.F, {
                                            blockId: a2.U.SEARCH,
                                            blockType: u.EntityTypes.Tracks,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (t = E.pagesLoader.items) ? void 0 : t.length,
                                            children: (0, i.jsx)(th, { ...l, filter: n, variant: 'list', 'data-test-id': m.Xk.search.SEARCH_PAGE_RESULTS_TRACK }),
                                        }),
                                    });
                                case h.$.ALBUM:
                                    return (0, i.jsx)(th, { ...l, filter: _.n.ALBUM, 'data-test-id': m.Xk.search.SEARCH_PAGE_RESULTS_ALBUM });
                                case h.$.PLAYLIST:
                                    return (0, i.jsx)(th, { ...l, filter: _.n.PLAYLIST, 'data-test-id': m.Xk.search.SEARCH_PAGE_RESULTS_PLAYLIST });
                                case h.$.ARTIST:
                                    return (0, i.jsx)(th, { ...l, filter: _.n.ARTIST, 'data-test-id': m.Xk.search.SEARCH_PAGE_RESULTS_ARTIST });
                                case h.$.PODCAST:
                                    return (0, i.jsx)(tb.h, {
                                        tabId: n,
                                        tabPos: E.filterPosition(n),
                                        isTabSelectedByDefault: !1,
                                        children: (0, i.jsx)(to.F, {
                                            blockId: a2.U.SEARCH,
                                            blockType: u.EntityTypes.Podcasts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (a = E.pagesLoader.items) ? void 0 : a.length,
                                            children: (0, i.jsx)(th, {
                                                ...l,
                                                filter: _.n.PODCAST,
                                                variant: 'list',
                                                'data-test-id': m.Xk.search.SEARCH_PAGE_RESULTS_PODCAST,
                                            }),
                                        }),
                                    });
                                case h.$.BOOK:
                                    return (0, i.jsx)(tb.h, {
                                        tabId: n,
                                        tabPos: E.filterPosition(n),
                                        isTabSelectedByDefault: !1,
                                        children: (0, i.jsx)(to.F, {
                                            blockId: a2.U.SEARCH,
                                            blockType: u.EntityTypes.Podcasts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (s = E.pagesLoader.items) ? void 0 : s.length,
                                            children: (0, i.jsx)(th, { ...l, filter: _.n.BOOK, variant: 'list', 'data-test-id': m.Xk.search.SEARCH_PAGE_RESULTS_BOOK }),
                                        }),
                                    });
                                case h.$.CLIP:
                                    return (0, i.jsx)(th, { ...l, filter: _.n.CLIP, 'data-test-id': m.Xk.search.SEARCH_PAGE_RESULTS_CLIP });
                                case h.$.WAVES:
                                    return (0, i.jsx)(tb.h, {
                                        tabId: n,
                                        tabPos: E.filterPosition(n),
                                        isTabSelectedByDefault: !1,
                                        children: (0, i.jsx)(th, { ...l, filter: _.n.WAVE, 'data-test-id': m.Xk.search.SEARCH_PAGE_RESULTS_WAVES }),
                                    });
                                case h.$.CONCERT:
                                    return (0, i.jsx)(tb.h, {
                                        tabId: n,
                                        tabPos: E.filterPosition(n),
                                        isTabSelectedByDefault: !1,
                                        children: (0, i.jsx)(to.F, {
                                            blockId: a2.U.SEARCH,
                                            blockType: u.EntityTypes.Concerts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (o = E.pagesLoader.items) ? void 0 : o.length,
                                            children: (0, i.jsx)(th, { ...l, filter: _.n.CONCERT, 'data-test-id': m.Xk.search.SEARCH_PAGE_RESULTS_CONCERT }),
                                        }),
                                    });
                                default:
                                    return J;
                            }
                        }),
                        et = (0, l.useMemo)(() => {
                            if (V)
                                return (0, i.jsx)(ri.F, {
                                    className: rd().carousel,
                                    carouselElement: (0, i.jsx)(rn.wI, {
                                        className: rd().tabs,
                                        ...s,
                                        onTabChange: F,
                                        children: w.map((e, t) =>
                                            (0, i.jsx)(
                                                ro.o,
                                                { className: (0, o.$)(rd().tab, { [rd().tab_selected]: t === s.value }), title: e.displayName, value: t },
                                                t,
                                            ),
                                        ),
                                    }),
                                });
                        }, [w, F, s, V]),
                        ea = (0, b.L)(() => {
                            let e = t ? I({ id: 'search.input-placeholder-q2v' }) : I({ id: 'search.input-placeholder' }),
                                a = {
                                    className: rd().input,
                                    autoFocus: !0,
                                    initialValue: z.current,
                                    placeholder: e,
                                    onChange: K,
                                    resetButtonAriaLabel: I({ id: 'interface-actions.reset-search-input' }),
                                    correctedValue: null != T ? T : C ? E.searchCorrectedText : null,
                                    innerInputProps: { 'data-test-id': m.Xk.search.SEARCH_PAGE_SEARCH_INPUT },
                                    resetButtonProps: { 'data-test-id': m.Xk.search.SEARCH_PAGE_SEARCH_INPUT_RESET_BUTTON },
                                    searchIconProps: { 'data-test-id': m.Xk.search.SEARCH_PAGE_SEARCH_INPUT_ICON },
                                };
                            return L ? (0, i.jsx)($, { ...a, lumenColor: a6.R }) : (0, i.jsx)(S.D, { ...a });
                        }),
                        er = (0, x.c)(() => {
                            if (E.landing.isLoaded) return E.landing.getSkeleton({ id: p.p.SEARCH, showWizard: N.settings.showWizard }, { preloadBlocksCount: 2 });
                        });
                    return (
                        E.isNeededToLoad && V && (0, l.use)(E.getSearchResults({ text: decodeURIComponent(H), filter: n })),
                        N.isAuthorized &&
                            E.landing.isNeededToLoad &&
                            !V &&
                            (0, l.use)(E.landing.getSkeleton({ id: p.p.SEARCH, showWizard: N.settings.showWizard }, { preloadBlocksCount: 2 })),
                        (0, i.jsx)(a3.n, {
                            pageId: eG._Q.SEARCH,
                            displayReasonId: E.searchRequestId,
                            children: (0, i.jsxs)(a4.l, {
                                skeleton: p.p.SEARCH,
                                children: [
                                    a,
                                    (0, i.jsx)(rt.m.Provider, {
                                        value: W,
                                        children: (0, i.jsxs)('div', {
                                            className: (0, o.$)(rd().root, { [rd().root_showFilters]: V, [rd().root_mobile]: B }),
                                            'data-test-id': m.Xk.search.SEARCH_PAGE,
                                            children: [
                                                (0, i.jsxs)('div', {
                                                    className: rd().header,
                                                    'data-test-id': m.Xk.search.SEARCH_PAGE_HEADER_CONTAINER,
                                                    children: [ea, et],
                                                }),
                                                (0, i.jsx)('div', {
                                                    className: rd().content,
                                                    children: (0, i.jsx)(a9.j, {
                                                        children: (0, i.jsx)(rM, {
                                                            autoPlaySearchText: G,
                                                            hasSearchText: V,
                                                            contentScrollRef: O,
                                                            setContentScrollRef: D,
                                                            searchResults: ee,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, i.jsx)(a1.p, { onFinishSuccess: er }),
                                ],
                            }),
                        })
                    );
                });
        },
        48864: (e) => {
            e.exports = {
                root: 'SearchBestResultsUpcomingBlock_root__baVsK',
                important: 'SearchBestResultsUpcomingBlock_important__v_XW8',
                cover: 'SearchBestResultsUpcomingBlock_cover__c45Xf',
                coverImage: 'SearchBestResultsUpcomingBlock_coverImage___mLf5',
                lockIcon: 'SearchBestResultsUpcomingBlock_lockIcon__yaBf_',
                likeButton: 'SearchBestResultsUpcomingBlock_likeButton__Srh_v',
            };
        },
        48937: (e) => {
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
        50392: (e) => {
            e.exports = { root: 'SearchBestResultsNonMusicBlock_root__YagzT' };
        },
        51516: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        53360: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => c });
            var r = a(88800),
                s = a(65724),
                i = a(84961),
                o = a(53548),
                n = a(51516),
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
                    (0, r.jsx)('div', {
                        'data-index': a.index,
                        ref: m,
                        style: _,
                        className: (0, s.$)(l().root, c),
                        children: null == h ? void 0 : h.map((e) => (0, r.jsx)('div', { className: n, children: i(e) }, ''.concat(a.key, '_').concat(e))),
                    })
                );
            });
        },
        58373: (e) => {
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
        61084: (e) => {
            e.exports = { root: 'SearchBestResultsRecentReleaseBlock_root___1Eoa' };
        },
        61909: (e) => {
            e.exports = { root: 'SearchCorrectedText_root__ZM2f2', link: 'SearchCorrectedText_link__eORMG', text: 'SearchCorrectedText_text__HKgvL' };
        },
        61956: (e) => {
            e.exports = { root: 'VirtualListItem_root__j_Qqv' };
        },
        62297: (e) => {
            e.exports = {
                root: 'SearchHistoryBlockDesktop_root__jKICZ',
                controls: 'SearchHistoryBlockDesktop_controls__5JPBt',
                header: 'SearchHistoryBlockDesktop_header__zOALK',
                clearButton: 'SearchHistoryBlockDesktop_clearButton__kN4Nk',
                content: 'SearchHistoryBlockDesktop_content__doQsC',
            };
        },
        62586: (e) => {
            e.exports = {
                carouselBlock: 'MixesCarousel_carouselBlock__ZpMU2',
                carouselHeader: 'MixesCarousel_carouselHeader__6mMHX',
                mixItem: 'MixesCarousel_mixItem__YNSsB',
            };
        },
        63865: (e) => {
            e.exports = { root: 'SearchConcert_root__1DJPQ' };
        },
        63955: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => u });
            var r = a(88800),
                s = a(53548),
                i = a(2058),
                o = a(17392),
                n = a(29504),
                l = a(32721),
                c = a(12876),
                d = a(7628);
            let u = (e) => {
                let { textVariant: t, vibeTextVariant: a, ...u } = e,
                    m = (0, s.useId)(),
                    { formatMessage: h } = (0, i.A)(),
                    _ = (0, s.useMemo)(() => {
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
                    p = (0, s.useMemo)(() => {
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
                return (0, r.jsx)(c.z, {
                    contentElement: (0, r.jsx)(n.HL, { variant: 'div', size: 'l', weight: 'bold', children: p }),
                    buttons: [(0, r.jsx)(d.H, { size: 'xxs' }, m)],
                    renderChildrenText: p,
                    contentDataTestId: o.S7.LOGIN_POPOVER,
                    ...u,
                });
            };
        },
        64916: (e) => {
            e.exports = {
                root: 'SearchBestResultsVibeBlock_root__KmJ3e',
                important: 'SearchBestResultsVibeBlock_important__Zez1s',
                coverClassName: 'SearchBestResultsVibeBlock_coverClassName__jv0_I',
            };
        },
        66564: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => r });
            let r = 36;
        },
        67990: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => r });
            let r = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        70662: (e) => {
            e.exports = { mixesTitle: 'MixesGrid_mixesTitle__QawnL', mixesGrid: 'MixesGrid_mixesGrid__uZQtt' };
        },
        71344: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => p });
            var r = a(88800),
                s = a(92716),
                i = a(14661),
                o = a(63765),
                n = a(46811),
                l = a(27639),
                c = a(4196),
                d = a(58378),
                u = a(91198),
                m = a(67665),
                h = a(77948),
                _ = a(91087);
            let p = (e) => {
                let { item: t, index: a, pageId: p, sendSearchFeedback: x, blockPosition: b = 0, objectPosX: S, objectPosY: v, objectsCount: j } = e;
                switch (t.type) {
                    case i.n.PODCAST_EPISODE:
                        return (0, r.jsx)(
                            h.B,
                            {
                                objectType: s.DomainObjectType.PodcastEpisode,
                                objectId: t.data.id,
                                objectPosX: S,
                                objectPosY: v,
                                objectsCount: j,
                                children: (0, r.jsx)(d.c, { pageId: p, track: t.data }),
                            },
                            t.data.id,
                        );
                    case i.n.UGC_TRACK:
                        return (0, r.jsx)(d.c, { pageId: p, track: t.data });
                    case i.n.TRACK:
                        return (0, r.jsx)(
                            h.B,
                            {
                                objectType: s.DomainObjectType.Track,
                                objectId: t.data.id,
                                objectPosX: S,
                                objectPosY: v,
                                objectsCount: j,
                                children: (0, r.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: x, id: t.data.entityId, type: o.o.TRACK, blockPosition: b, position: a },
                                    children: (0, r.jsx)(d.c, { pageId: p, track: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case i.n.ARTIST:
                        return (0, r.jsx)(
                            h.B,
                            {
                                objectType: s.DomainObjectType.Artist,
                                objectId: t.data.id,
                                objectPosX: S,
                                objectPosY: v,
                                objectsCount: j,
                                children: (0, r.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: x, id: t.data.id, type: o.o.ARTIST, blockPosition: b, position: a },
                                    children: (0, r.jsx)(l.c, { pageId: p, artist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case i.n.PLAYLIST:
                        return (0, r.jsx)(
                            h.B,
                            {
                                objectType: s.DomainObjectType.Playlist,
                                objectId: t.data.id,
                                objectPosX: S,
                                objectPosY: v,
                                objectsCount: j,
                                children: (0, r.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: x, id: t.data.id, type: o.o.PLAYLIST, blockPosition: b, position: a },
                                    children: (0, r.jsx)(c.v, { pageId: p, playlist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case i.n.PODCAST:
                        return (0, r.jsx)(
                            h.B,
                            {
                                objectType: s.DomainObjectType.Podcast,
                                objectId: String(t.data.id),
                                objectPosX: S,
                                objectPosY: v,
                                objectsCount: j,
                                children: (0, r.jsx)(
                                    _.N.Provider,
                                    {
                                        value: { sendSearchFeedback: x, id: t.data.id, type: o.o.PODCAST, blockPosition: b, position: a },
                                        children: (0, r.jsx)(n.M, { pageId: p, album: t.data }),
                                    },
                                    t.data.id,
                                ),
                            },
                            t.data.id,
                        );
                    case i.n.ALBUM:
                        return (0, r.jsx)(
                            h.B,
                            {
                                objectType: s.DomainObjectType.Album,
                                objectId: String(t.data.id),
                                objectPosX: S,
                                objectPosY: v,
                                objectsCount: j,
                                children: (0, r.jsx)(
                                    _.N.Provider,
                                    {
                                        value: { sendSearchFeedback: x, id: t.data.id, type: o.o.ALBUM, blockPosition: b, position: a },
                                        children: (0, r.jsx)(n.M, { pageId: p, album: t.data }),
                                    },
                                    t.data.id,
                                ),
                            },
                            t.data.id,
                        );
                    case i.n.WAVE: {
                        let e = t.data;
                        return (0, r.jsx)(
                            h.B,
                            {
                                objectType: s.DomainObjectType.Wave,
                                objectId: e.stationId,
                                objectPosX: S,
                                objectPosY: v,
                                objectsCount: j,
                                children: (0, r.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: x, id: e.seedsId, type: o.o.WAVE, blockPosition: b, position: a },
                                    children: (0, r.jsx)(m.H, { vibe: e, cover: e.cover, description: e.description, agentVariant: u.h.SMALL }),
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
        71506: (e) => {
            e.exports = { block: 'SearchBestResultsCommon_block__v11At', cover: 'SearchBestResultsCommon_cover__ZHlYo' };
        },
        72936: (e) => {
            e.exports = { root: 'SearchBestResultsTrackBlock_root__Qsh_f', cover: 'SearchBestResultsTrackBlock_cover__aCixO' };
        },
        73436: (e) => {
            e.exports = { root: 'VirtualList_root__kEvf_' };
        },
        74481: (e) => {
            e.exports = { root: 'EntitiesListShimmer_root__Mq_tK' };
        },
        76245: (e) => {
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
        79285: (e) => {
            e.exports = { root: 'SearchQueryToVibeResults_root__fsXQh' };
        },
        80624: (e) => {
            e.exports = { root: 'SearchBestResultsBookChapterBlock_root__2JjcF', cover: 'SearchBestResultsBookChapterBlock_cover__I2CYO' };
        },
        87475: (e) => {
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
        88626: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => r });
            var r = (function (e) {
                return ((e.ANDROID = 'Android'), (e.IOS = 'iOS'), (e.MACOS = 'MacOS'), (e.WINDOWS = 'Windows'), e);
            })({});
        },
        89592: (e) => {
            e.exports = { root: 'SearchBestResultsConcertBlock_root__JDy_y' };
        },
        89916: (e, t, a) => {
            'use strict';
            a.d(t, { GX: () => i.G, X1: () => r.X, m5: () => s.m });
            var r = a(46606),
                s = a(91136),
                i = a(19840);
            a(17017);
        },
        91136: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => s });
            class r extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: a = 'E_INTERNAL', data: s = {}, ...i } = t,
                        o = e || 'Internal error';
                    (super(o, i), (this.message = o), (this.code = a), (this.data = s), (this.stack = Error(o).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
            class s extends r {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...a } = {}) {
                    (super(e, { code: t, ...a }), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        91802: (e) => {
            e.exports = { root: 'SearchBestResultsArtistBlock_root__ZLcy4' };
        },
        94698: (e) => {
            e.exports = {
                root: 'SearchBestResultsOverviewBlock_root__m1nKx',
                button: 'SearchBestResultsOverviewBlock_button__F2FaR',
                important: 'SearchBestResultsOverviewBlock_important__oLQCU',
            };
        },
        96966: (e) => {
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
        97893: (e) => {
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
        98969: (e) => {
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
        99890: (e, t, a) => {
            'use strict';
            a.d(t, { C8: () => i, UC: () => o, dM: () => n, uV: () => l });
            var r = a(89916),
                s = a(67990);
            let i = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                o = (e) => (e.uid ? 'authorized' : 'no-uid'),
                n = (e) => {
                    if (!(e instanceof r.m5) || !(0, s.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, s.N)(e.cause)) return;
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
    },
    (e) => {
        (e.O(
            0,
            [
                6925, 7617, 8752, 5108, 7435, 8380, 127, 1931, 1191, 4596, 3637, 4520, 8, 100, 1881, 9775, 2205, 4716, 7759, 5083, 3076, 1639, 8797, 4316, 4863, 7456,
                1445, 1138, 893, 6252, 6706, 4771, 1311, 5201, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 5151, 1714, 4732, 1195, 1598, 6281, 1928, 7627, 9124,
                7967, 900, 9934, 6387, 4561, 9337, 4613, 3724, 818, 7053, 9425, 4322, 1372, 3547, 8835, 7555, 9667, 8576, 2612, 763, 2670, 7358,
            ],
            () => e((e.s = 19955)),
        ),
            (_N_E = e.O()));
    },
]);
