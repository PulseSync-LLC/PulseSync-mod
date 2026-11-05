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
        5818: (e) => {
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
            a.d(t, { w: () => s });
            var r = a(53548),
                i = a(29993);
            let s = () => {
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
                    (0, i.c)((t, a) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, a), a)))
                );
            };
        },
        7628: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => _ });
            var r = a(88800),
                i = a(88969),
                s = a(58390),
                o = a(17392),
                n = a(29993),
                l = a(96817),
                c = a(29504),
                d = a(99890),
                u = a(4086),
                m = a(41928);
            let _ = (e) => {
                let { size: t = 'm', variant: a = 'default', color: _ = 'primary', withRipple: h = !0, buttonText: p, isBlock: x, key: S, className: b } = e,
                    v = (0, s.useRouter)(),
                    C = (0, m.N)().get(u.QG),
                    j = (0, n.c)(() => {
                        C.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), v.push(C.authorizationUrl));
                    });
                return (0, r.jsx)(
                    l.$,
                    {
                        onClick: j,
                        className: b,
                        isBlock: x,
                        color: _,
                        variant: a,
                        size: t,
                        radius: 'xxxl',
                        withRipple: h,
                        'data-test-id': o.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(i.A, { id: 'authorization.enter-button' }) }),
                    },
                    S,
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
        16434: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        17071: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => r });
            var r = (function (e) {
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
        20129: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => V });
            var r = a(88800),
                i = a(65724),
                s = a(84961),
                o = a(53548),
                n = a(2058),
                l = a(88969),
                c = a(17392),
                d = a(50408),
                u = a(96817),
                m = a(11372),
                _ = a(98225),
                h = a(29504),
                p = a(32353),
                x = a(29595),
                S = a(74965),
                b = a(51318),
                v = a(17071),
                C = a(38860),
                j = a(72288),
                A = a(27506),
                g = a(74773),
                y = a(66943),
                I = a(94058),
                T = a(37770),
                f = a(87366),
                k = a(76099),
                E = a(79418),
                P = a(62414),
                N = a(29832),
                R = a(52300),
                L = a(7555),
                B = a(81877),
                O = a(60978),
                w = a(5818),
                D = a.n(w);
            let M = (0, s.PA)((e) => {
                let { className: t, artist: a } = e,
                    s = (0, P.D)(),
                    {
                        wizard: { toggleArtistLike: n, isArtistLiked: l },
                    } = (0, j.g)(),
                    { id: d, name: m, coverUri: _ } = a,
                    p = (0, o.useCallback)(() => {
                        n(d);
                    }, [n, d]),
                    x = l(d),
                    S = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(L.t, {
                                className: D().cover,
                                radius: 'round',
                                'data-test-id': c.e8.wizard.ARTIST_CARD,
                                children: (0, r.jsxs)(u.$, {
                                    radius: 'round',
                                    className: D().coverBlock,
                                    variant: 'default',
                                    onClick: p,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': x,
                                    'aria-label': m,
                                    'data-test-id': c.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, r.jsx)(B.B, { className: D().image, src: _ || O.A.src, fit: 'cover', alt: m, withAvatarReplace: !!_, 'aria-hidden': !0 }),
                                        (0, r.jsx)('div', {
                                            className: (0, i.$)(D().like),
                                            children: (0, r.jsx)(R.I, { variant: 'likedVariant', size: 's', className: D().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [x, _, m, p],
                    );
                return (0, r.jsx)(N.MN, {
                    ref: s,
                    className: (0, i.$)(D().root, { [D().root_selected]: x }, t),
                    textPosition: 'center',
                    title: (0, r.jsx)(h.HL, {
                        'aria-hidden': !0,
                        className: D().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.e8.wizard.ARTIST_CARD_NAME,
                        children: m,
                    }),
                    view: S,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                });
            });
            var z = a(63442),
                H = a.n(z);
            let U = { [p.u.Desktop]: { start: 40, end: 40 }, [p.u.Mobile]: { start: 40, end: 40 } },
                V = (0, s.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: a } = (0, n.A)(),
                        {
                            wizard: s,
                            settings: { isMobile: p, isWindowsApplication: P, isLinuxApplication: N },
                            user: R,
                        } = (0, j.g)(),
                        { notify: L } = (0, S.l)(),
                        B = (0, C.z)(),
                        [O, w] = (0, d.d)(),
                        D = (0, _.zb)(0),
                        z = (0, o.useMemo)(
                            () => (e) => {
                                var t;
                                if (!D.onTabChange || e === D.value) return;
                                D.onTabChange(e);
                                let a = null == (t = s.genres[e]) ? void 0 : t.id;
                                (s.setFilter(a), null == O || O.scrollTo({ top: 0 }));
                            },
                            [s, D, O],
                        ),
                        V = (0, o.useMemo)(() => {
                            switch (s.selectedArtistsQuantity) {
                                case 0:
                                    return a({ id: 'wizard.button-tune' });
                                case 1:
                                    return a({ id: 'wizard.button-little-more' });
                                case 2:
                                    return a({ id: 'wizard.button-one-more' });
                                default:
                                    return a({ id: 'wizard.button-done' });
                            }
                        }, [s.selectedArtistsQuantity, a]),
                        G = (0, o.useMemo)(
                            () =>
                                (0, r.jsx)(k.wI, {
                                    className: H().tabCarousel,
                                    ...D,
                                    onTabChange: z,
                                    isShimmerVisible: s.loadingState === g.G.PENDING,
                                    shimmer: (0, r.jsx)(k.zr, { isActive: !0, className: H().tabCarousel, shimmerClassName: H().tabShimmer, count: p ? 2 : 3 }),
                                    children: s.genres.map((e, t) =>
                                        (0, r.jsx)(
                                            f.o,
                                            {
                                                className: (0, i.$)(H().filter, { [H().filter_selected]: t === D.value }),
                                                titleClassName: H().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [s.genres, D, z, s.loadingState, p],
                        ),
                        W = (0, o.useCallback)(() => {
                            s.loadArtists(60);
                        }, [s]);
                    (0, o.useEffect)(() => {
                        s.filter && W();
                    }, [s.filter, W]);
                    let F = (0, o.useCallback)(async () => {
                        (await s.loadGenres(), W());
                    }, [s, W]);
                    ((0, o.useEffect)(() => {
                        s.modal.isOpened && F();
                    }, [s, s.modal.isOpened, F]),
                        (0, o.useEffect)(() => {
                            s.loadingState === g.G.REJECT &&
                                (s.modal.close(), L((0, r.jsx)(y.h, { error: a({ id: 'error-messages.error-load-wizard' }) }), { containerId: x.u.ERROR }));
                        }, [s, s.loadGenres, s.loadingState, a, L]));
                    let $ = (0, o.useMemo)(
                            () =>
                                (0, r.jsx)(h.DZ, {
                                    className: H().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': c.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, r.jsx)(l.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        Y = (0, o.useCallback)(async () => {
                            (s.canFinish ? (await s.finish()) === A.F.OK && (await R.getSettings(), await (null == t ? void 0 : t())) : s.loadArtists(), s.modal.close());
                        }, [t, R, s]);
                    return (
                        (0, o.useEffect)(
                            () => (
                                null == B ||
                                    B.addShortcutsListener(v.M.MAIN, b.l.CLOSE, () => {
                                        s.modal.isOpened && Y();
                                    }),
                                () => {
                                    null == B || B.removeShortcutsListener(v.M.MAIN, b.l.CLOSE);
                                }
                            ),
                            [Y, s.modal.isOpened, B],
                        ),
                        (0, r.jsxs)(m.a, {
                            className: (0, i.$)(H().root, { [H().root_withCustomControls]: P || N }),
                            headerClassName: H().modalHeader,
                            contentClassName: H().modalContent,
                            open: s.modal.isOpened,
                            onOpenChange: s.modal.onOpenChange,
                            onClose: Y,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: a({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: c.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': c.e8.wizard.WIZARD_MODAL,
                            header: p && $,
                            escapeKey: !1,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: H().wrapper,
                                    children: [
                                        !p && $,
                                        (0, r.jsx)(h.HL, {
                                            className: H().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, r.jsx)(l.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, r.jsx)(u.$, {
                                            className: H().button,
                                            size: p ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: Y,
                                            disabled: !s.canFinish,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, r.jsx)(h.HL, { variant: 'div', size: 'm', weight: 'medium', children: V }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)('div', {
                                    className: H().mainContainer,
                                    children: [
                                        (0, r.jsx)(I.F, { className: H().carousel, carouselElement: G, scrollPadding: U }),
                                        (0, r.jsx)(E.$, {
                                            withFooter: !1,
                                            className: (0, i.$)(H().scrollContainer, H().important),
                                            itemContentCallback: (e) => {
                                                let t = s.artistsByGenre[e];
                                                if (!t) {
                                                    let e = a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.artist' }) });
                                                    return (0, r.jsx)(T.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, r.jsx)(M, { artist: t }, t.id);
                                            },
                                            data: s.artistsByGenre,
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
                i = a(84961),
                s = a(53548),
                o = a(50408),
                n = a(47969),
                l = a(53360),
                c = a(15324),
                d = a.n(c);
            let u = (0, i.PA)((e) => {
                let {
                        count: t,
                        rowGap: a,
                        columnGap: i,
                        getEstimateRowSize: c,
                        minColumnCount: u = 2,
                        minColumnWidth: m,
                        maxColumnWidth: _,
                        maxColumnCount: h,
                        renderItemByIndex: p,
                        onChangeRange: x,
                    } = e,
                    [S, b] = (0, o.d)(),
                    {
                        virtualizer: v,
                        rowResizeObserver: C,
                        columnCount: j,
                        indices: A,
                    } = (0, n.L)({
                        count: t,
                        rowGap: a,
                        columnGap: i,
                        getEstimateRowSize: c,
                        minColumnCount: u,
                        minColumnWidth: m,
                        maxColumnWidth: _,
                        maxColumnCount: h,
                        containerRef: S,
                    });
                (0, s.useEffect)(() => {
                    !v.isScrolling && v.range && (null == x || x(v.range, j));
                }, [x, v.isScrolling, v.range, j]);
                let g = { '--virtual-grid-height': ''.concat(v.getTotalSize(), 'px'), '--virtual-grid-column-count': j };
                return (0, r.jsx)('div', {
                    ref: b,
                    style: g,
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
                                    resizeObserver: C,
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
        26323: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => h });
            var r = a(88800),
                i = a(65724),
                s = a(84961),
                o = a(53548),
                n = a(88969),
                l = a(17392),
                c = a(29504),
                d = a(84273),
                u = a(1698),
                m = a(70662),
                _ = a.n(m);
            let h = (0, s.PA)((e) => {
                let { isShimmerVisible: t, isShimmerActive: a, withTitle: s, mixes: m, shimmerCount: h = 5, className: p } = e,
                    x = (0, o.useMemo)(
                        () =>
                            t
                                ? (0, r.jsx)(u.e, { isActive: a, round: !1, centered: !1, withInfo: !1, count: h })
                                : m.map((e) => (0, r.jsx)(d.N, { title: e.title, weblink: e.weblink, covers: e.covers, imagesLayoutType: e.imagesLayoutType }, e.id)),
                        [a, t, m, h],
                    );
                return (0, r.jsxs)('div', {
                    'data-test-id': l.e8.mixes.MIXES_GRID_CONTAINER,
                    children: [
                        s &&
                            (0, r.jsx)(c.DZ, {
                                className: _().mixesTitle,
                                size: 's',
                                weight: 'bold',
                                variant: 'h3',
                                'data-test-id': l.e8.mixes.MIXES_GRID_HEADER,
                                children: (0, r.jsx)(n.A, { id: 'entity-names.mixes' }),
                            }),
                        (0, r.jsx)('div', { className: (0, i.$)(_().mixesGrid, p), children: x }),
                    ],
                });
            });
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
            a.d(t, { x: () => r, y: () => i });
            let r = '(prefers-reduced-motion: reduce)',
                i = () => window.matchMedia(r).matches;
        },
        37717: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => p });
            var r = a(88800),
                i = a(53548),
                s = a(2058),
                o = a(88969),
                n = a(58390),
                l = a(29993),
                c = a(29595),
                d = a(74965),
                u = a(4370),
                m = a(72288),
                _ = a(59304),
                h = a(66943);
            let p = (e) => {
                let { user: t, search: a } = (0, m.g)(),
                    { formatMessage: p } = (0, s.A)(),
                    { notify: x } = (0, d.l)(),
                    S = (0, n.useRouter)();
                return (
                    (0, i.useEffect)(() => {
                        a.isEmptyHistory && S.push(u.Z.search.href);
                    }, [a.isEmptyHistory, S]),
                    (0, l.c)(() => {
                        try {
                            (t.account.data.uid && a.clearHistory({ userId: t.account.data.uid }),
                                x((0, r.jsx)(_.$, { message: (0, r.jsx)(o.A, { id: 'search.cleared-history' }) }), { containerId: c.u.INFO }),
                                e && e(),
                                S.push(u.Z.search.href));
                        } catch (e) {
                            x((0, r.jsx)(h.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: c.u.ERROR });
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
        47969: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => c });
            var r = a(35802),
                i = a(79070),
                s = a(61013),
                o = a(53548);
            let n = (e) => {
                let { minColumnWidth: t, maxColumnWidth: a, containerWidth: r, totalCount: i, columnGap: s, minColumnCount: o, maxColumnCount: n } = e,
                    l = Math.max(1, Math.floor((r + s) / (t + s))),
                    c = Math.max(o, Math.floor((r + s) / ((a + t) * 0.5 + s)));
                for (let e = o; e <= l; e++) {
                    let i = (r - (e - 1) * s) / e;
                    if (i >= t && i <= a) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(i / (c = n ? Math.min(c, n) : c)), columnCount: c };
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
                        minColumnCount: _,
                        maxColumnCount: h,
                        containerRef: p,
                    } = e,
                    { rowCount: x, columnCount: S } = ((e) => {
                        let { containerRef: t, minColumnCount: a, maxColumnWidth: r, minColumnWidth: i, totalCount: l, columnGap: c, maxColumnCount: d } = e,
                            [u, m] = (0, o.useState)({ rowCount: 0, columnCount: 0 }),
                            _ = (0, o.useRef)(null),
                            h = (0, o.useMemo)(
                                () =>
                                    (0, s.A)(
                                        (e) => {
                                            m(
                                                n({
                                                    minColumnWidth: i,
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
                                [c, d, r, a, i, l],
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
                                                minColumnWidth: i,
                                                maxColumnWidth: r,
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
                                [c, t, h, d, r, a, i, l],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: _, maxColumnWidth: m, minColumnWidth: u, maxColumnCount: h, containerRef: p }),
                    { virtualizer: b, resizeObserver: v } = (0, l.r)({ count: x, getEstimateSize: a, gap: c, containerRef: p }),
                    C = (0, r.A)(
                        Array.from({ length: t }, (e, t) => t),
                        S,
                    ),
                    j = (0, i.L)(() => {
                        var e, t;
                        if (!b.range) return null;
                        let a = null == (e = C[b.range.startIndex]) ? void 0 : e.at(0),
                            r = null == (t = C[b.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== a && void 0 !== r ? { startIndex: a, endIndex: r } : null;
                    });
                return { virtualizer: b, rowResizeObserver: v, indices: C, columnCount: S, visibleRange: j };
            };
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
        51318: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => r });
            var r = (function (e) {
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
        51516: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        53360: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => c });
            var r = a(88800),
                i = a(65724),
                s = a(84961),
                o = a(53548),
                n = a(51516),
                l = a.n(n);
            let c = (0, s.PA)((e) => {
                let { indices: t, virtualItem: a, renderItemByIndex: s, columnClassName: n, className: c, resizeObserver: d, scrollMargin: u } = e,
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
                    (0, r.jsx)('div', {
                        'data-index': a.index,
                        ref: m,
                        style: h,
                        className: (0, i.$)(l().root, c),
                        children: null == _ ? void 0 : _.map((e) => (0, r.jsx)('div', { className: n, children: s(e) }, ''.concat(a.key, '_').concat(e))),
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
        63442: (e) => {
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
        63865: (e) => {
            e.exports = { root: 'SearchConcert_root__1DJPQ' };
        },
        63955: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => u });
            var r = a(88800),
                i = a(53548),
                s = a(2058),
                o = a(17392),
                n = a(29504),
                l = a(32721),
                c = a(12876),
                d = a(7628);
            let u = (e) => {
                let { textVariant: t, vibeTextVariant: a, ...u } = e,
                    m = (0, i.useId)(),
                    { formatMessage: _ } = (0, s.A)(),
                    h = (0, i.useMemo)(() => {
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
                    p = (0, i.useMemo)(() => {
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
        68296: (e, t, a) => {
            'use strict';
            a.d(t, { SearchPage: () => rM });
            var r,
                i,
                s = a(88800),
                o = a(65724),
                n = a(84961),
                l = a(53548),
                c = a(2058),
                d = a(58390),
                u = a(87999),
                m = a(89009),
                _ = a(37523),
                h = a(76903),
                p = a(17392),
                x = a(41427),
                S = a(14661),
                b = a(46312),
                v = a(29993),
                C = a(79070),
                j = a(23237),
                A = a(98225),
                g = a(78275),
                y = a(23311),
                I = a(35948),
                T = a(72288);
            let f = (e) => {
                let t = 1200 + 1600 * e;
                return { phaseDelay: ''.concat(t / 1e3, 's'), gradientAnimationBegin: ''.concat((t + 160) / 1e3, 's') };
            };
            var k = a(76245),
                E = a.n(k);
            let P = [0, 1, 2, 3],
                N = (0, n.PA)((e) => {
                    var t;
                    let { isActive: a, size: r = 'xxxs' } = e,
                        { settings: i } = (0, T.g)(),
                        n = !!(null == (t = i.browserInfo) ? void 0 : t.isSafari),
                        c = (0, l.useId)(),
                        d = ''.concat(c, '-ring-mask'),
                        u = ''.concat(c, '-reveal-mask'),
                        m = ''.concat(c, '-glow-gradient'),
                        _ = ''.concat(c, '-stroke-gradient'),
                        h = ''.concat(c, '-reveal-gradient'),
                        p = ''.concat(c, '-soft-blur'),
                        x = ''.concat(c, '-hard-blur');
                    return (0, s.jsx)('div', {
                        className: (0, o.$)(E().root, { [E().root_active]: a, [E().root_safari]: n, [E().root_size_xxs]: 'xxs' === r }),
                        'aria-hidden': !0,
                        children: (0, s.jsxs)('svg', {
                            className: E().gradient,
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
                                            children: (0, s.jsx)('feGaussianBlur', { stdDeviation: 'xxs' === r ? 22.25 : 18.54 }),
                                        }),
                                        (0, s.jsx)('filter', {
                                            id: x,
                                            x: '-100%',
                                            y: '-1000%',
                                            width: '300%',
                                            height: '2100%',
                                            children: (0, s.jsx)('feGaussianBlur', { stdDeviation: 'xxs' === r ? 5.5 : 4.58 }),
                                        }),
                                        (0, s.jsxs)('mask', {
                                            className: E().ringMask,
                                            id: d,
                                            x: '-100%',
                                            y: '-1000%',
                                            width: '300%',
                                            height: '2100%',
                                            maskUnits: 'userSpaceOnUse',
                                            children: [
                                                (0, s.jsx)('rect', { className: E().ringOuter, fill: '#fff' }),
                                                (0, s.jsx)('rect', { className: E().ringHole, fill: '#000', rx: 'xxs' === r ? 22 : 18.33 }),
                                            ],
                                        }),
                                        (0, s.jsx)('mask', {
                                            className: E().revealMask,
                                            id: u,
                                            x: '-100%',
                                            y: '-1000%',
                                            width: '300%',
                                            height: '2100%',
                                            maskUnits: 'userSpaceOnUse',
                                            maskContentUnits: 'userSpaceOnUse',
                                            children: P.map((e) => {
                                                let { phaseDelay: t } = f(e);
                                                return (0, s.jsx)(
                                                    'g',
                                                    {
                                                        className: E().revealBlur,
                                                        style: { '--animated-search-input-gradient-mask-phase-delay': t },
                                                        children: (0, s.jsx)('rect', { className: E().revealPass, fill: n ? 'url(#'.concat(h, ')') : '#fff' }),
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
                                            className: E().softGlow,
                                            children: (0, s.jsx)('g', {
                                                filter: n ? 'url(#'.concat(p, ')') : void 0,
                                                children: (0, s.jsx)('rect', { className: E().ringOuter, fill: 'url(#'.concat(m, ')'), mask: 'url(#'.concat(d, ')') }),
                                            }),
                                        }),
                                        (0, s.jsx)('g', {
                                            className: E().hardGlow,
                                            children: (0, s.jsx)('g', {
                                                filter: n ? 'url(#'.concat(x, ')') : void 0,
                                                children: (0, s.jsx)('rect', { className: E().ringOuter, fill: 'url(#'.concat(m, ')'), mask: 'url(#'.concat(d, ')') }),
                                            }),
                                        }),
                                        (0, s.jsx)('rect', {
                                            className: E().stroke,
                                            fill: 'none',
                                            rx: 'xxs' === r ? 23.63 : 19.69,
                                            stroke: 'url(#'.concat(_, ')'),
                                            strokeWidth: 'xxs' === r ? 0.75 : 0.63,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                });
            var R = a(59047),
                L = a(88092);
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
                })(i || (i = {})));
            var B = function (e) {
                var t = (0, c.A)(),
                    a = e.value,
                    r = e.children,
                    i = (0, L.__rest)(e, ['value', 'children']);
                return r(t.formatNumberToParts(a, i));
            };
            function O(e) {
                var t = function (t) {
                    var a = (0, c.A)(),
                        r = t.value,
                        i = t.children,
                        s = (0, L.__rest)(t, ['value', 'children']),
                        o = 'string' == typeof r ? new Date(r || 0) : r;
                    return i('formatDate' === e ? a.formatDateToParts(o, s) : a.formatTimeToParts(o, s));
                };
                return ((t.displayName = i[e]), t);
            }
            function w(e) {
                var t = function (t) {
                    var a = (0, c.A)(),
                        r = t.value,
                        i = t.children,
                        s = (0, L.__rest)(t, ['value', 'children']),
                        o = a[e](r, s);
                    if ('function' == typeof i) return i(o);
                    var n = a.textComponent || l.Fragment;
                    return l.createElement(n, null, o);
                };
                return ((t.displayName = r[e]), t);
            }
            ((B.displayName = 'FormattedNumberParts'),
                (B.displayName = 'FormattedNumberParts'),
                w('formatDate'),
                w('formatTime'),
                w('formatNumber'),
                w('formatList'),
                w('formatDisplayName'),
                O('formatDate'),
                O('formatTime'));
            var D = a(88626),
                M = a(597),
                z = a.n(M);
            let H = 'animated-search-input-text',
                U = '[data-animation-target="'.concat(H, '"]'),
                V = [
                    { attributeName: 'x1', dur: '1.87s', from: '-416', to: '143' },
                    { attributeName: 'y1', dur: '1.87s', from: '-32', to: '29' },
                    { attributeName: 'x2', dur: '1.5s', from: '80', to: '507' },
                    { attributeName: 'y2', dur: '1.5s', from: '21', to: '-14' },
                ],
                G = {
                    cheerfulNotTooMuch: { id: 'search.q2v-input-placeholder-cheerful-not-too-much' },
                    favoriteArtist: { id: 'search.q2v-input-placeholder-favorite-artist' },
                    collectionTrack: { id: 'search.q2v-input-placeholder-collection-track' },
                    melodicAndDanceable: { id: 'search.q2v-input-placeholder-melodic-and-danceable' },
                },
                W = [G.cheerfulNotTooMuch, G.favoriteArtist, G.collectionTrack, G.melodicAndDanceable],
                F = (0, n.PA)((e) => {
                    var t, a;
                    let { isActive: r, onAnimationEnd: i } = e,
                        { settings: n } = (0, T.g)(),
                        d = !!((null == (t = n.browserInfo) ? void 0 : t.isSafari) || (null == (a = n.browserInfo) ? void 0 : a.OSFamily) === D.j.IOS),
                        { formatMessage: u } = (0, c.A)(),
                        m = (0, l.useId)(),
                        _ = (0, l.useRef)(null),
                        [h, p] = (0, l.useState)(W),
                        x = (0, v.c)((e) => {
                            e.currentTarget === e.target && i();
                        });
                    return (
                        (0, l.useEffect)(() => {
                            var e;
                            r ||
                                null == (e = _.current) ||
                                e.querySelectorAll(U).forEach((e) => {
                                    e.pauseAnimations();
                                });
                        }, [r]),
                        (0, l.useEffect)(() => {
                            p((0, R.A)(W));
                        }, []),
                        (0, s.jsx)('div', {
                            className: (0, o.$)(z().root, { [z().root_active]: r, [z().root_safari]: d }),
                            ref: _,
                            'aria-hidden': !0,
                            children: (0, s.jsx)('div', {
                                className: z().viewport,
                                children: h.map((e, t) => {
                                    let a = t === h.length - 1,
                                        r = u(e),
                                        { phaseDelay: i, gradientAnimationBegin: n } = f(t);
                                    return (0, s.jsx)(
                                        'span',
                                        {
                                            className: (0, o.$)(z().phrase, { [z().phrase_last]: a }),
                                            onAnimationEnd: a ? x : void 0,
                                            style: { '--animated-search-input-text-phase-delay': i },
                                            children: (0, s.jsx)('div', {
                                                className: z().phraseContent,
                                                children: (0, s.jsxs)('svg', {
                                                    className: z().text,
                                                    'data-animation-target': H,
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
                                                                        className: (0, o.$)(z().gradientStop, z().gradientStop_start),
                                                                        stopColor: 'var(--q2v-accent-color)',
                                                                        stopOpacity: '0',
                                                                    }),
                                                                    (0, s.jsx)('stop', {
                                                                        className: (0, o.$)(z().gradientStop, z().gradientStop_middle),
                                                                        offset: '0.2',
                                                                        stopColor: 'var(--q2v-accent-color)',
                                                                    }),
                                                                    (0, s.jsx)('stop', {
                                                                        className: (0, o.$)(z().gradientStop, z().gradientStop_end),
                                                                        offset: '1',
                                                                        stopColor: 'var(--q2v-accent-color)',
                                                                        stopOpacity: '0',
                                                                    }),
                                                                    V.map((e) => {
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
                                                        (0, s.jsx)('text', { className: z().base, x: '0', y: '50%', children: r }),
                                                        (0, s.jsx)('text', {
                                                            className: z().gradient,
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
            var $ = a(20445),
                Y = a.n($);
            let X = (e) => {
                let {
                        lumenColor: t,
                        initialValue: a = '',
                        correctedValue: r,
                        className: i,
                        autoFocus: n,
                        onResetClick: c,
                        innerInputProps: d,
                        searchIconProps: u,
                        ...m
                    } = e,
                    _ = 0 === a.length,
                    [h, p] = (0, l.useState)(a),
                    [x, S] = (0, l.useState)(0),
                    [b, A] = (0, l.useState)(!1),
                    { state: T, toggleFalse: f } = (0, g.e)(_),
                    k = (0, l.useRef)(null),
                    E = (0, l.useRef)(!!(n && _)),
                    P = (0, v.c)(() => {
                        null !== k.current && (window.clearTimeout(k.current), (k.current = null));
                    }),
                    R = (0, v.c)(() => {
                        (P(), A(!1));
                    }),
                    L = (0, v.c)((e) => {
                        var t;
                        let a = null != (t = e.selectionStart) ? t : e.value.length;
                        (p(e.value.slice(0, a)), S(e.scrollLeft));
                    }),
                    B = (0, v.c)((e) => {
                        var t;
                        let a = e.currentTarget;
                        (f(),
                            L(a),
                            P(),
                            0 === a.value.length
                                ? A(!1)
                                : (A(!0),
                                  (k.current = window.setTimeout(() => {
                                      (A(!1), (k.current = null));
                                  }, 1e3))),
                            null == d || null == (t = d.onInput) || t.call(d, e));
                    }),
                    O = (0, v.c)((e) => {
                        var t;
                        (E.current || f(), null == d || null == (t = d.onFocus) || t.call(d, e));
                    }),
                    w = (0, v.c)((e) => {
                        var t;
                        ((E.current = !1), null == d || null == (t = d.onBlur) || t.call(d, e));
                    }),
                    D = (0, v.c)((e) => {
                        var t;
                        (L(e.currentTarget), null == d || null == (t = d.onSelect) || t.call(d, e));
                    }),
                    M = (0, v.c)((e) => {
                        var t;
                        (S(e.currentTarget.scrollLeft), null == d || null == (t = d.onScroll) || t.call(d, e));
                    }),
                    z = (0, v.c)(() => {
                        (p(''), S(0), R(), null == c || c());
                    });
                ((0, l.useEffect)(() => {
                    r &&
                        (f(),
                        p(r),
                        S(0),
                        P(),
                        A(!0),
                        (k.current = window.setTimeout(() => {
                            (A(!1), (k.current = null));
                        }, 1e3)));
                }, [P, r, f]),
                    (0, l.useEffect)(() => P, [P]),
                    (0, l.useEffect)(() => {
                        _ && (0, I.y)() && f();
                    }, [_, f]));
                let H = (0, C.L)(() => {
                        let { actionsClassName: e, icon: t, inputClassName: a, ...r } = null != d ? d : {},
                            i = {
                                ...r,
                                actionsClassName: (0, o.$)(Y().searchInputContent, e),
                                inputClassName: (0, o.$)(Y().searchInputContent, a),
                                onBlur: w,
                                onFocus: O,
                                onInput: B,
                                onSelect: D,
                                onScroll: M,
                            };
                        return void 0 === t
                            ? i
                            : null === t
                              ? { ...i, icon: t }
                              : { ...i, icon: (0, l.cloneElement)(t, { className: (0, o.$)(Y().searchInputContent, t.props.className) }) };
                    }),
                    U = { ...u, className: (0, o.$)(Y().searchInputContent, null == u ? void 0 : u.className) };
                return (0, s.jsxs)('div', {
                    className: (0, o.$)(Y().root, i, { [Y().root_introActive]: T }),
                    onPointerDownCapture: f,
                    style: { '--animated-search-input-scroll-offset': ''.concat(-x, 'px'), '--q2v-accent-color': t },
                    children: [
                        (0, s.jsx)(j.D, {
                            ...m,
                            autoFocus: n,
                            className: Y().searchInput,
                            initialValue: a,
                            correctedValue: r,
                            innerInputProps: H,
                            onResetClick: z,
                            searchIconProps: U,
                        }),
                        _ && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(N, { isActive: T, size: m.size }), (0, s.jsx)(F, { isActive: T, onAnimationEnd: f })] }),
                        (0, s.jsx)('div', {
                            className: Y().mirrorViewport,
                            'aria-hidden': !0,
                            children: (0, s.jsxs)('div', {
                                className: Y().mirrorContent,
                                children: [(0, s.jsx)('span', { children: h }), (0, s.jsx)(y.e, { className: (0, o.$)(Y().haze, { [Y().haze_visible]: b }) })],
                            }),
                        }),
                    ],
                });
            };
            var K = a(88969),
                q = a(96817),
                Z = a(29504),
                Q = a(61909),
                J = a.n(Q);
            let ee = (e) => {
                let { onCorrectText: t, searchCorrectedText: a } = e,
                    r = (0, l.useMemo)(
                        () => ({
                            text: (0, s.jsx)(q.$, {
                                'aria-label': a,
                                variant: 'text',
                                radius: 'xs',
                                onClick: t,
                                'data-test-id': p.e8.search.SEARCH_CORRECTED_TEXT_BUTTON,
                                children: (0, s.jsx)(Z.HL, {
                                    className: J().link,
                                    variant: 'span',
                                    size: 'm',
                                    type: 'text',
                                    'data-test-id': p.e8.search.SEARCH_CORRECTED_TEXT_BUTTON_TEXT,
                                    children: a,
                                }),
                            }),
                        }),
                        [a, t],
                    );
                return (0, s.jsx)('div', {
                    className: J().root,
                    'data-test-id': p.e8.search.SEARCH_CORRECTED_TEXT,
                    children: (0, s.jsx)(Z.HL, {
                        className: J().text,
                        variant: 'span',
                        size: 'm',
                        type: 'text',
                        'data-test-id': p.e8.search.SEARCH_CORRECTED_TEXT_TEXT,
                        children: (0, s.jsx)(K.A, { id: 'search.corrected-text', values: r }),
                    }),
                });
            };
            var et = a(52300),
                ea = a(66719),
                er = a(86790),
                ei = a(60266),
                es = a(98969),
                eo = a.n(es);
            let en = (e) => {
                    let { forwardRef: t, className: a, searchCorrectedText: r } = e,
                        { formatMessage: i } = (0, c.A)();
                    return (0, s.jsxs)(ea.N, {
                        className: (0, o.$)(eo().root, a),
                        containerClassName: eo().container,
                        ref: t,
                        children: [
                            (0, s.jsxs)('div', {
                                className: eo().content,
                                'data-test-id': p.e8.search.SEARCH_EMPTY_CONTAINER,
                                children: [
                                    r && (0, s.jsx)('div', { className: eo().correctedTextBlock, children: r }),
                                    (0, s.jsx)(et.I, { className: eo().icon, variant: 'search', size: 'xxl', 'data-test-id': p.e8.search.SEARCH_EMPTY_ICON }),
                                    (0, s.jsx)(Z.DZ, {
                                        className: eo().title,
                                        size: 's',
                                        weight: 'bold',
                                        variant: 'h3',
                                        'data-test-id': p.e8.search.SEARCH_EMPTY_HEADER,
                                        children: i({ id: 'search-results.not-found-title' }),
                                    }),
                                    (0, s.jsx)(Z.HL, {
                                        className: eo().subtitle,
                                        variant: 'div',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        'data-test-id': p.e8.search.SEARCH_EMPTY_DESCRIPTION,
                                        children: i({ id: 'search-results.not-found-description' }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(ei.A, { children: (0, s.jsx)(er.w, { className: eo().footer }) }),
                        ],
                    });
                },
                el = (0, l.forwardRef)((e, t) => (0, s.jsx)(en, { forwardRef: t, ...e }));
            var ec = a(35412),
                ed = a(7833),
                eu = a(18593),
                em = a(59758),
                e_ = a(63765),
                eh = a(10079),
                ep = a(46811),
                ex = a(21256),
                eS = a(69323),
                eb = a(41911),
                ev = a(58378),
                eC = a(64605),
                ej = a(21576),
                eA = a(50408),
                eg = a(10270),
                ey = a(61956),
                eI = a.n(ey);
            let eT = (e) => {
                let { item: t, scrollMargin: a, resizeObserver: r, renderItemByIndex: i } = e,
                    [o, n] = (0, eA.d)();
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
                return (0, s.jsx)('div', { 'data-index': t.index, className: eI().root, ref: n, style: c, children: i(t.index) }, t.key);
            };
            var ef = a(73436),
                ek = a.n(ef);
            let eE = (e) => {
                let { count: t, getEstimateRowSize: a, renderItemByIndex: r, onChangeRange: i } = e,
                    [o, n] = (0, eA.d)(),
                    { virtualizer: c, resizeObserver: d } = (0, eg.r)({ count: t, getEstimateSize: a, containerRef: o, overscan: 3 });
                (0, l.useEffect)(() => {
                    !c.isScrolling && c.range && i && i(c.range);
                }, [i, c.isScrolling, c.range]);
                let u = c.getTotalSize(),
                    m = c.getVirtualItems(),
                    _ = c.options.scrollMargin;
                return (0, s.jsx)('div', {
                    className: ek().root,
                    style: { height: ''.concat(u, 'px') },
                    ref: n,
                    children: m.map((e) => (0, s.jsx)(eT, { item: e, scrollMargin: _, resizeObserver: d, renderItemByIndex: r }, e.key)),
                });
            };
            var eP = a(28119);
            a(30282);
            var eN = a(64543),
                eR = a(33979),
                eL = a(29832),
                eB = a(7555),
                eO = a(5407),
                ew = a(55693),
                eD = a(47964),
                eM = a(52726),
                ez = a(81877),
                eH = a(63955),
                eU = a(16704),
                eV = a(34945),
                eG = a(87475),
                eW = a.n(eG);
            let eF = (0, n.PA)((e) => {
                let { vibe: t, children: a, className: r } = e,
                    { screen: i } = (0, eN.j)(),
                    n = null == i ? void 0 : i.pageIdForFrom,
                    [c, d] = (0, l.useState)(!1),
                    { block: u } = (0, eN.j)(),
                    m = null == u ? void 0 : u.blockIdForFrom,
                    {
                        settings: { isMobile: _ },
                        user: h,
                        freeAccess: p,
                    } = (0, T.g)(),
                    { sendPlaySearchFeedback: x } = (0, ew.z)(),
                    S = (0, eR.g)(),
                    { isPlaying: b, isPaused: C, togglePlay: j } = (0, eD.B)({ seeds: t.seeds, pageIdForFrom: n, blockIdForFrom: m }),
                    A = (0, eO.P)(),
                    g = b || C,
                    y = (0, l.useCallback)(() => {
                        _ && (c || b || (d(!0), null == x || x()), j());
                    }, [_, b, c, x, j]),
                    I = (0, v.c)(() => {
                        A() || (!p.isVibeStartRestricted && (c || b || (d(!0), null == x || x()), j(), b || S()));
                    }),
                    f = (0, l.useCallback)(
                        () =>
                            (0, s.jsx)(
                                eU.D,
                                {
                                    isPlaying: b,
                                    onClick: I,
                                    className: (0, o.$)(eW().playButton, eW().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                },
                                t.getKey('PlayButton'),
                            ),
                        [b, I, t],
                    ),
                    k = (0, l.useMemo)(() => {
                        let e = !h.hasPlus && p.isFreePlaybackDisabled;
                        return h.isAuthorized
                            ? (0, s.jsx)(
                                  eM.S,
                                  {
                                      isEnabled: e && p.isVibeStartRestricted,
                                      placement: 'bottom',
                                      textVariant: 'vibe',
                                      vibeTextVariant: t.stationType,
                                      renderChildren: f,
                                  },
                                  t.getKey('BuyPlusPopover'),
                              )
                            : (0, s.jsx)(eH.Z, { isEnabled: e, placement: 'bottom', textVariant: 'vibe', vibeTextVariant: t.stationType, renderChildren: f });
                    }, [h.hasPlus, h.isAuthorized, t, f, p.isVibeStartRestricted, p.isFreePlaybackDisabled]),
                    E = (0, l.useMemo)(
                        () =>
                            (0, s.jsxs)(eB.t, {
                                className: eW().cover,
                                radius: 'round',
                                withShadow: !0,
                                onClick: y,
                                children: [
                                    (0, s.jsx)(ez.B, {
                                        size: 200,
                                        fit: 'cover',
                                        className: eW().image,
                                        style: { backgroundColor: t.backgroundColor },
                                        src: t.imageUrl,
                                        alt: t.title,
                                        withAvatarReplace: !0,
                                    }),
                                    g && (0, s.jsx)(eV.P, { stopAnimation: C, className: eW().playingAnimation }),
                                    (0, s.jsx)(eL.hg, {
                                        className: (0, o.$)(eW().controls, { [eW().controls_isPlaying]: g }, eW().important),
                                        bottomContainerClassName: eW().playControl,
                                        radius: 'round',
                                        playControl: k,
                                    }),
                                ],
                            }),
                        [y, t.backgroundColor, t.imageUrl, t.title, g, C, k],
                    );
                return (0, s.jsx)(eL.MN, {
                    className: (0, o.$)(eW().root, r),
                    textPosition: 'center',
                    title: (0, s.jsx)(Z.HL, { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title }, t.getKey('Description')),
                    description: (0, s.jsx)(
                        Z.HL,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: t.description },
                        t.getKey('Description'),
                    ),
                    view: E,
                    children: a,
                });
            });
            var e$ = a(98427),
                eY = a(84384),
                eX = a(91087),
                eK = a(6668),
                eq = a(97956),
                eZ = a(98644),
                eQ = a(68594),
                eJ = a(37770),
                e0 = a(93015),
                e1 = a(66564);
            let e8 = {
                    entity: { rowGap: 16, columnGap: 16, estimateRowSize: 275, minColumnWidth: 170, maxColumnWidth: 270, minColumnCount: 2, maxColumnCount: 7 },
                    clip: { rowGap: 16, columnGap: 16, estimateRowSize: 235, minColumnWidth: 200, maxColumnWidth: 400, minColumnCount: 1, maxColumnCount: 6 },
                    concert: { rowGap: 16, columnGap: 16, estimateRowSize: 371, minColumnWidth: 170, maxColumnWidth: 227, minColumnCount: 1, maxColumnCount: 2 },
                },
                e2 = (e, t) => {
                    let [a, r] = (0, l.useState)(t || e.length > 0),
                        [i, s] = (0, l.useState)(e.length > 0 ? e[0] : void 0),
                        o = (0, l.useRef)(void 0),
                        n = (0, l.useRef)(t),
                        c = (0, l.useRef)(t ? Date.now() : void 0),
                        d = (0, v.c)((e) => {
                            let t = Math.max(0, 2e3 - (void 0 !== c.current ? Date.now() - c.current : 2e3));
                            0 === t ? e() : (o.current = setTimeout(e, t));
                        });
                    return (
                        (0, l.useEffect)(() => {
                            let a = t && !n.current,
                                i = !t && n.current;
                            return (
                                (n.current = t),
                                a && (clearTimeout(o.current), (c.current = Date.now()), r(!0), s(void 0)),
                                i && (clearTimeout(o.current), e.length > 0 ? d(() => s(e[0])) : d(() => r(!1))),
                                () => clearTimeout(o.current)
                            );
                        }, [t, e, d]),
                        { isVisible: a, vibe: i }
                    );
                };
            var e9 = a(54020),
                e6 = a(48911),
                e3 = a(52018),
                e4 = a(95960),
                e7 = a.n(e4);
            let e5 = (0, n.PA)((e) => {
                let { id: t, concert: a } = e;
                return (0, s.jsxs)('div', {
                    className: e7().root,
                    id: t,
                    children: [
                        (0, s.jsx)(Z.HL, { variant: 'div', size: 'm', weight: 'medium', className: e7().city, lineClamp: 1, children: null == a ? void 0 : a.title }),
                        (0, s.jsx)(Z.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: null == a ? void 0 : a.city }),
                        (0, s.jsx)(Z.HL, { variant: 'span', size: 'm', weight: 'medium', children: null == a ? void 0 : a.contentRating }),
                    ],
                });
            });
            var te = a(63865),
                tt = a.n(te);
            let ta = (0, n.PA)((e) => {
                let { concert: t } = e,
                    a = (0, l.useRef)(String((0, e9.A)())),
                    r = t.isIdentityExperimentEnabled ? e3.M : e5;
                return (0, s.jsx)(e6.V, {
                    artistId: null,
                    viewUuid: a.current,
                    concert: t,
                    radius: 's',
                    className: tt().root,
                    meta: (0, s.jsx)(r, { concert: t }),
                    shouldSendAnalyticsOnHide: !0,
                    shouldShowMask: !0,
                });
            });
            var tr = a(8655),
                ti = a(44378);
            let ts = {
                    [tr.S.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_search.lottie',
                    [tr.S.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_search.lottie',
                },
                to = {
                    loading: { loop: !0, markerId: 'loading' },
                    idle: { markerId: 'success' },
                    playing: { markerId: 'playing' },
                    paused: { markerId: 'playing', mode: 'reverse' },
                },
                tn = (e) => (0, s.jsx)(ti.D, { animationByTheme: ts, animationConfig: to, ...e });
            var tl = a(79285),
                tc = a.n(tl);
            let td = (0, n.PA)((e) => {
                var t;
                let { className: a, requestAwakeLumenModal: r, sendSearchFeedback: i, vibe: n } = e,
                    l = (0, C.L)(() => (n ? { sendSearchFeedback: i, id: n.seedsId, type: e_.o.WAVE, blockPosition: 0, position: 0 } : null));
                return (0, s.jsx)('div', {
                    className: (0, o.$)(tc().root, a),
                    children: (0, s.jsx)(_.F, {
                        blockId: u.EntityTypes.Q2vWave,
                        blockType: u.EntityTypes.Q2vWave,
                        blockPosX: 1,
                        blockPosY: 1,
                        objectsCount: 1,
                        children: (0, s.jsx)(ed.B, {
                            objectPosX: 1,
                            objectPosY: 1,
                            objectType: u.DomainObjectType.Wave,
                            objectId: null != (t = null == n ? void 0 : n.stationId) ? t : '',
                            children: (0, s.jsx)(eX.N.Provider, { value: l, children: (0, s.jsx)(tn, { requestAwakeLumenModal: r, vibe: n }) }),
                        }),
                    }),
                });
            });
            var tu = a(22549),
                tm = a.n(tu);
            let t_ = (0, n.PA)((e) => {
                    let {
                            forwardRef: t,
                            className: a,
                            results: r,
                            filter: i,
                            variant: n = 'grid',
                            sendSearchFeedback: c,
                            searchCorrectedText: d,
                            isShimmerVisible: m,
                            getDataByRange: _,
                            requestsCount: h,
                            q2vResults: p,
                            isShimmerActive: x,
                            requestAwakeLumenModal: b,
                            ...j
                        } = e,
                        { experiments: A } = (0, T.g)(),
                        g = (0, eP.f)(),
                        { isVisible: y, vibe: I } = e2(p, x),
                        f = g && y && i === S.n.WAVE,
                        k = ((e) => (e === S.n.CLIP ? e8.clip : e === S.n.CONCERT ? e8.concert : e8.entity))(i),
                        E = (0, v.c)(() => 56),
                        P = (0, v.c)(() => k.estimateRowSize),
                        N = (0, eK.w)(),
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
                                (0, v.c)((t, a) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, a), a)))
                            );
                        })(),
                        { from: L } = (0, eY.f)({ pageId: e$.b.SEARCH }),
                        B = (0, l.useCallback)(
                            (e) => {
                                let t = r[e];
                                if (!t)
                                    return 'list' === n
                                        ? (0, s.jsx)(e0.D, { variant: eZ.X.PLAYLIST, isActive: !0 })
                                        : i === S.n.CONCERT
                                          ? (0, s.jsx)(eQ.W, { isShimmerActive: !0, className: tm().concertShimmer })
                                          : i === S.n.ARTIST
                                            ? (0, s.jsx)(eJ.V, { linesCount: 2, round: !0, centered: !0, isActive: !0 })
                                            : i === S.n.WAVE
                                              ? A.checkExperiment(eq.z.WebNextWaveAgentExperiment, 'on')
                                                  ? (0, s.jsx)(eJ.V, { linesCount: 3, centered: !0, isActive: !0 })
                                                  : (0, s.jsx)(eJ.V, { linesCount: 2, round: !0, centered: !0, isActive: !0 })
                                              : i === S.n.PLAYLIST
                                                ? (0, s.jsx)(eJ.V, { linesCount: 2, isActive: !0 })
                                                : i === S.n.CLIP
                                                  ? (0, s.jsx)(eJ.V, { linesCount: 2, shimmerClassName: tm().video, isActive: !0 })
                                                  : (0, s.jsx)(eJ.V, { className: tm().entityCardShimmer, isActive: !0, shimmerClassName: i === S.n.CLIP && tm().video });
                                switch (t.type) {
                                    case S.n.ALBUM:
                                        return (0, s.jsx)(
                                            eX.N.Provider,
                                            {
                                                value: R(t.data.id, { sendSearchFeedback: c, id: t.data.id, type: e_.o.ALBUM, blockPosition: 0, position: e }),
                                                children: (0, s.jsx)(eh.a, { album: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case S.n.PLAYLIST:
                                        return (0, s.jsx)(
                                            eX.N.Provider,
                                            {
                                                value: R(t.data.id, { sendSearchFeedback: c, id: t.data.id, type: e_.o.PLAYLIST, blockPosition: 0, position: e }),
                                                children: (0, s.jsx)(eb.B, { playlist: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case S.n.ARTIST:
                                        return (0, s.jsx)(
                                            eX.N.Provider,
                                            {
                                                value: R(t.data.id, { sendSearchFeedback: c, id: t.data.id, type: e_.o.ARTIST, blockPosition: 0, position: e }),
                                                children: (0, s.jsx)(ex.a, { artist: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case S.n.PODCAST:
                                        return (0, s.jsx)(
                                            ed.B,
                                            {
                                                objectType: u.DomainObjectType.Podcast,
                                                objectId: String(t.data.id),
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                children: (0, s.jsx)(eX.N.Provider, {
                                                    value: R(t.data.id, { sendSearchFeedback: c, id: t.data.id, type: e_.o.PODCAST, blockPosition: 0, position: e }),
                                                    children: (0, s.jsx)(ep.M, { album: t.data }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                    case S.n.CLIP:
                                        return (0, s.jsx)(
                                            eX.N.Provider,
                                            {
                                                value: R(t.data.clipId, { sendSearchFeedback: c, id: t.data.clipId, type: e_.o.CLIP, blockPosition: 0, position: e }),
                                                children: (0, s.jsx)(eS.F, { clip: t.data }),
                                            },
                                            t.data.clipId,
                                        );
                                    case S.n.WAVE:
                                        if (!A.checkExperiment(eq.z.WebNextWaveAgentExperiment, 'on'))
                                            return (0, s.jsx)(
                                                eX.N.Provider,
                                                {
                                                    value: R(t.data.stationId, {
                                                        sendSearchFeedback: c,
                                                        id: t.data.stationId,
                                                        type: e_.o.WAVE,
                                                        blockPosition: 0,
                                                        position: e,
                                                    }),
                                                    children: (0, s.jsx)(eF, { vibe: t.data }),
                                                },
                                                t.data.stationId,
                                            );
                                        return (0, s.jsx)(
                                            eX.N.Provider,
                                            {
                                                value: R(t.data.stationId, {
                                                    sendSearchFeedback: c,
                                                    id: t.data.stationId,
                                                    type: e_.o.WAVE,
                                                    blockPosition: 0,
                                                    position: e,
                                                }),
                                                children: (0, s.jsx)(eC.y, { vibe: t.data }),
                                            },
                                            t.data.stationId,
                                        );
                                    case S.n.CONCERT:
                                        return (0, s.jsx)(
                                            ed.B,
                                            {
                                                objectType: u.DomainObjectType.Concert,
                                                objectId: t.data.id,
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                children: (0, s.jsx)(ta, { concert: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case S.n.TRACK:
                                    case S.n.UGC_TRACK:
                                        return (0, s.jsx)(
                                            ed.B,
                                            {
                                                objectType: u.DomainObjectType.Track,
                                                objectId: t.data.id,
                                                objectPosX: 1,
                                                objectPosY: e + 1,
                                                children: (0, s.jsx)(eX.N.Provider, {
                                                    value: R(t.data.entityId, {
                                                        sendSearchFeedback: c,
                                                        id: t.data.entityId,
                                                        type: e_.o.TRACK,
                                                        blockPosition: 0,
                                                        position: e,
                                                    }),
                                                    children: (0, s.jsx)(ev.c, {
                                                        track: t.data,
                                                        playContextParams: N(t.data.entityId, {
                                                            contextData: { type: eu.K.Various, meta: { id: t.data.entityId }, from: L, overrideContextType: em.b.Search },
                                                            queueParams: { index: e, entityId: t.data.id },
                                                            loadContextMeta: !0,
                                                        }),
                                                    }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                    case S.n.PODCAST_EPISODE:
                                        return (0, s.jsx)(
                                            ed.B,
                                            {
                                                objectType: u.DomainObjectType.PodcastEpisode,
                                                objectId: t.data.id,
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                children: (0, s.jsx)(ev.c, {
                                                    track: t.data,
                                                    playContextParams: N(t.data.entityId, {
                                                        contextData: { type: eu.K.Various, meta: { id: t.data.entityId }, from: L, overrideContextType: em.b.Search },
                                                        queueParams: { index: e, entityId: t.data.id },
                                                        loadContextMeta: !0,
                                                    }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                }
                            },
                            [r, n, i, A, R, c, N, L, h],
                        ),
                        O = (0, C.L)(() => (m ? r.length + e1.k : r.length)),
                        w = (0, C.L)(() =>
                            'list' === n
                                ? (0, s.jsx)(eE, { count: O, getEstimateRowSize: E, renderItemByIndex: B, onChangeRange: _ })
                                : (0, s.jsx)(ej.Q, {
                                      count: O,
                                      rowGap: k.rowGap,
                                      columnGap: k.columnGap,
                                      getEstimateRowSize: P,
                                      minColumnCount: k.minColumnCount,
                                      minColumnWidth: k.minColumnWidth,
                                      maxColumnWidth: k.maxColumnWidth,
                                      maxColumnCount: k.maxColumnCount,
                                      renderItemByIndex: B,
                                      onChangeRange: _,
                                  }),
                        );
                    return (0, s.jsxs)(ea.N, {
                        className: (0, o.$)(tm().root, a),
                        containerClassName: tm().container,
                        ref: t,
                        ...(0, ec.OZ)(j),
                        children: [
                            (0, s.jsxs)('div', {
                                children: [
                                    d && (0, s.jsx)('div', { className: tm().correctedTextBlock, children: d }),
                                    f && (0, s.jsx)(td, { className: tm().queryToVibe, requestAwakeLumenModal: b, sendSearchFeedback: c, vibe: I }),
                                    w,
                                ],
                            }),
                            (0, s.jsx)(ei.A, { children: (0, s.jsx)(er.w, { className: tm().footer }) }),
                        ],
                    });
                }),
                th = (0, l.forwardRef)((e, t) => (0, s.jsx)(t_, { forwardRef: t, ...e }));
            var tp = a(45923),
                tx = a(39631),
                tS = a(86535),
                tb = a(48483),
                tv = a(71344),
                tC = a(35802),
                tj = a(53323),
                tA = a(18486),
                tg = a(31764),
                ty = a(19994),
                tI = a(58373),
                tT = a.n(tI);
            let tf = (e) => {
                let { className: t, ariaLabel: a, isShimmerActive: r } = e;
                return (0, s.jsxs)('div', {
                    tabIndex: 0,
                    'aria-label': a,
                    'aria-live': 'polite',
                    'aria-busy': !0,
                    className: (0, o.$)(tT().root, t),
                    children: [
                        (0, s.jsxs)('div', {
                            className: tT().infoContainer,
                            children: [
                                (0, s.jsx)(ty.W, { className: tT().cover, radius: 's', isActive: r }),
                                (0, s.jsxs)('div', {
                                    className: tT().textContainer,
                                    children: [
                                        (0, s.jsx)(ty.W, { className: tT().title, radius: 's', isActive: r }),
                                        (0, s.jsx)(ty.W, { className: tT().description, radius: 's', isActive: r }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)(ty.W, { className: tT().action, radius: 's', isActive: r }),
                    ],
                });
            };
            var tk = a(74481),
                tE = a.n(tk);
            let tP = (e) => {
                let { shimmersCount: t = 3, isShimmerActive: a = !0 } = e,
                    { formatMessage: r } = (0, c.A)();
                return Array.from({ length: t }, (e, t) =>
                    (0, s.jsx)(
                        tf,
                        {
                            className: tE().root,
                            ariaLabel: r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'search.history' }) }),
                            isShimmerActive: a,
                        },
                        t,
                    ),
                );
            };
            var tN = a(5885),
                tR = a.n(tN);
            let tL = (e) => {
                    let {
                            forwardRef: t,
                            title: a,
                            description: r,
                            viewAllAction: i,
                            coverUrl: n,
                            children: c,
                            className: d,
                            maxColumns: u = 2,
                            itemsPerColumn: m = 3,
                            containerClassName: _,
                            headerClassName: h,
                            titleSize: x,
                            showControls: S,
                            isShimmerVisible: b,
                            isShimmerActive: v,
                        } = e,
                        C = (0, l.useRef)(null),
                        j = (0, l.useId)(),
                        { items: A, columnLength: g } = (0, l.useMemo)(() => {
                            if (b)
                                return {
                                    columnLength: u,
                                    items: Array.from({ length: u }, (e, t) =>
                                        (0, s.jsx)('div', { className: tR().column, children: (0, s.jsx)(tP, { shimmersCount: 3, isShimmerActive: v }) }, t),
                                    ),
                                };
                            let e = (0, tC.A)(c, m).slice(0, (null == c ? void 0 : c.length) ? Math.ceil(c.length / m) : u);
                            return { items: e.map((e, t) => (0, s.jsx)('div', { className: tR().column, children: e }, t)), columnLength: e.length };
                        }, [c, v, b, m, u]);
                    return (0, s.jsxs)('section', {
                        ref: t,
                        className: (0, o.$)(d, tR().root),
                        'data-test-id': p.e8.search.MIXED_ENTITIES_BLOCK,
                        children: [
                            (0, s.jsx)(tA.T, {
                                className: h,
                                labeledForId: j,
                                title: a,
                                description: r,
                                coverUrl: n,
                                viewAllActionLink: i,
                                titleSize: x,
                                controls: S && (0, s.jsx)(tg.X, { className: tR().controls, carouselRef: C }),
                                withDescription: !!r,
                            }),
                            (0, s.jsx)(tj.F, {
                                className: _,
                                ref: C,
                                itemClassName: (0, o.$)(tR().item, { [tR().item_withMultipleColumns]: g > 1 }),
                                'aria-labelledby': j,
                                role: 'group',
                                children: A,
                            }),
                        ],
                    });
                },
                tB = (0, l.forwardRef)((e, t) => (0, s.jsx)(tL, { forwardRef: t, ...e }));
            var tO = a(64310),
                tw = a(48937),
                tD = a.n(tw);
            let tM = (e) => {
                let { isShimmerActive: t } = e;
                return (0, s.jsxs)('div', {
                    className: tD().root,
                    children: [
                        (0, s.jsxs)('div', {
                            className: tD().container,
                            children: [
                                (0, s.jsx)(eJ.V, {
                                    className: (0, o.$)(tD().entity, tD().important),
                                    shimmerClassName: (0, o.$)(tD().cover, tD().important),
                                    round: !0,
                                    withInfo: !1,
                                    isActive: t,
                                }),
                                (0, s.jsxs)('div', {
                                    className: tD().meta,
                                    children: [
                                        (0, s.jsx)(tO.n, { textClassName: (0, o.$)(tD().title, tD().important), isActive: t }),
                                        (0, s.jsx)(tO.n, { textClassName: (0, o.$)(tD().subtitle, tD().important), isActive: t }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)('div', {
                            className: tD().container,
                            children: [
                                (0, s.jsx)(eJ.V, {
                                    className: (0, o.$)(tD().entity, tD().important),
                                    shimmerClassName: (0, o.$)(tD().cover, tD().important),
                                    withInfo: !1,
                                    isActive: t,
                                    radius: 'xs',
                                }),
                                (0, s.jsxs)('div', {
                                    className: tD().meta,
                                    children: [
                                        (0, s.jsx)(tO.n, { textClassName: (0, o.$)(tD().title, tD().important), isActive: t }),
                                        (0, s.jsx)(tO.n, { textClassName: (0, o.$)(tD().subtitle, tD().important), isActive: t }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            };
            var tz = a(28777),
                tH = a.n(tz),
                tU = a(71506),
                tV = a.n(tU),
                tG = a(12360),
                tW = a.n(tG);
            let tF = (0, n.PA)((e) => {
                let { album: t } = e;
                return (0, s.jsx)(ep.M, {
                    album: t,
                    className: (0, o.$)(tV().block, tW().root),
                    coverClassName: tV().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                });
            });
            var t$ = a(27639),
                tY = a(91802),
                tX = a.n(tY);
            let tK = (0, n.PA)((e) => {
                let { artist: t } = e;
                return (0, s.jsx)(t$.c, {
                    artist: t,
                    className: (0, o.$)(tV().block, tX().root),
                    coverClassName: tV().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    pageId: e$.b.SEARCH,
                });
            });
            var tq = a(85463),
                tZ = a(73805),
                tQ = a(56712),
                tJ = a(13946),
                t0 = a(34232),
                t1 = a(39079),
                t8 = a(85587),
                t2 = a(62270),
                t9 = a.n(t2),
                t6 = a(76816),
                t3 = a(91292),
                t4 = a(39267),
                t7 = a(80624),
                t5 = a.n(t7);
            let ae = (0, n.PA)((e) => {
                var t;
                let { track: a } = e,
                    { from: r } = (0, eY.f)(),
                    { formatMessage: i } = (0, c.A)(),
                    n = { contextData: { type: eu.K.Various, meta: { id: a.entityId }, from: r }, queueParams: { index: 0, entityId: a.id }, loadContextMeta: !0 },
                    d = (0, t1.D)({ playContextParams: n, entityId: a.entityId }),
                    u = (0, l.useCallback)(
                        (e) =>
                            (0, s.jsx)(t4.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: (0, o.$)(tV().cover, t5().cover),
                                alt: i({ id: 'entity-names.track-name-by-type' }, { type: (0, t0.y)(a.type), name: a.title }),
                                radius: 'xs',
                                ...e,
                            }),
                        [i, a.coverUri, a.isAvailable, a.isDisliked, a.title, a.type],
                    ),
                    m = (0, tq.O)({ track: a, entityType: t8.n.AUDIOBOOK }),
                    _ = (0, C.L)(() =>
                        a.url && a.isAvailable
                            ? (0, s.jsx)(t3.N, { className: (0, o.$)(t9().text, t9().titleLink), href: a.url, onClick: m, children: a.title })
                            : (0, s.jsx)(Z.HL, { className: (0, o.$)(t9().text, t9().titleText), size: 'm', variant: 'div', type: 'text', children: a.title }),
                    ),
                    h = (0, l.useCallback)(
                        (e, t) => {
                            var r;
                            return (null == (r = a.artists) ? void 0 : r.length)
                                ? (0, s.jsx)(tJ.i, { linkClassName: e, captionClassName: t, artists: a.artists, lineClamp: 1, withLink: a.isAvailable })
                                : null;
                        },
                        [a.artists, a.isAvailable],
                    );
                return (0, s.jsx)(tQ.C, {
                    className: (0, o.$)(tV().block, t5().root, t9().root, { [t9().root_disabled]: !a.isAvailable }),
                    track: a,
                    meta: (0, s.jsx)(t6.r, {
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
                    controls: (0, s.jsx)(tZ.Q, { track: a, utmLink: n.contextData.utmLink, likeIconSize: 'xs' }),
                    ...d,
                });
            });
            var at = a(91289),
                aa = a(38501),
                ar = a(6424),
                ai = a.n(ar);
            let as = (0, n.PA)((e) => {
                    let { clip: t } = e,
                        a = (0, aa.d)(),
                        r = (0, l.useRef)(String((0, e9.A)()));
                    return a
                        ? (0, s.jsx)(at.N, {
                              clip: t,
                              viewUuid: r.current,
                              className: tV().block,
                              coverClassName: ai().cover,
                              playButtonIconSize: 'l',
                              likeIconSize: 'xs',
                              shouldShowTimecode: !0,
                          })
                        : null;
                }),
                ao = (0, n.PA)((e) => {
                    let { id: t, concert: a } = e,
                        r = [],
                        i = (0, s.jsx)(Z.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                    return (
                        (null == a ? void 0 : a.city) && r.push((0, s.jsx)(Z.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: a.city })),
                        (null == a ? void 0 : a.contentRating) &&
                            r.push(i, (0, s.jsx)(Z.HL, { variant: 'span', size: 'm', weight: 'medium', children: a.contentRating })),
                        (0, s.jsxs)('div', {
                            className: e7().root,
                            id: t,
                            children: [
                                (0, s.jsx)(Z.HL, {
                                    variant: 'div',
                                    size: 'm',
                                    weight: 'medium',
                                    className: e7().city,
                                    lineClamp: 1,
                                    children: null == a ? void 0 : a.title,
                                }),
                                (0, s.jsx)('div', { className: e7().info, children: r.map((e, t) => (0, l.cloneElement)(e, { key: t })) }),
                            ],
                        })
                    );
                });
            var an = a(89592),
                al = a.n(an);
            let ac = (0, n.PA)((e) => {
                let { concert: t } = e,
                    a = (0, l.useRef)(String((0, e9.A)())),
                    r = t.isIdentityExperimentEnabled ? e3.M : ao;
                return (0, s.jsx)(e6.V, {
                    artistId: null,
                    viewUuid: a.current,
                    concert: t,
                    radius: 's',
                    className: al().root,
                    meta: (0, s.jsx)(r, { concert: t }),
                    shouldSendAnalyticsOnHide: !0,
                    shouldShowMask: !0,
                });
            });
            var ad = a(50392),
                au = a.n(ad);
            let am = (0, n.PA)((e) => {
                let { album: t } = e;
                return (0, s.jsx)(ep.M, {
                    album: t,
                    className: (0, o.$)(tV().block, au().root),
                    coverClassName: tV().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    shouldShowReleaseYear: !0,
                });
            });
            var a_ = a(32506),
                ah = a(94698),
                ap = a.n(ah);
            let ax = (0, n.PA)((e) => {
                let { data: t } = e,
                    { formatMessage: a } = (0, c.A)();
                return (0, s.jsx)('div', {
                    className: ap().root,
                    children: (0, s.jsx)(a_.F, { textButton: a({ id: 'interface-actions.further' }), meta: t, buttonClassName: (0, o.$)(ap().button, ap().important) }),
                });
            });
            var aS = a(4196),
                ab = a(3448),
                av = a.n(ab);
            let aC = (0, n.PA)((e) => {
                let { playlist: t } = e;
                return (0, s.jsx)(aS.v, {
                    playlist: t,
                    className: (0, o.$)(tV().block, av().root),
                    coverClassName: tV().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                });
            });
            var aj = a(48215),
                aA = a(35786),
                ag = a.n(aA);
            let ay = (0, n.PA)((e) => {
                let { track: t } = e,
                    { from: a } = (0, eY.f)(),
                    { formatMessage: r } = (0, c.A)(),
                    {
                        settings: { isMobile: i },
                    } = (0, T.g)(),
                    n = { contextData: { type: eu.K.Various, meta: { id: t.entityId }, from: a }, queueParams: { index: 0, entityId: t.id }, loadContextMeta: !0 },
                    d = (0, t1.D)({ playContextParams: n, entityId: t.entityId }),
                    u = (0, l.useCallback)(
                        (e) =>
                            (0, s.jsx)(t4.q, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: (0, o.$)(tV().cover, ag().cover),
                                alt: r({ id: 'entity-names.track-name-by-type' }, { type: (0, t0.y)(t.type), name: t.title }),
                                radius: 'xs',
                                ...e,
                            }),
                        [r, t.coverUri, t.isAvailable, t.isDisliked, t.title, t.type],
                    );
                return (0, s.jsx)(tQ.C, {
                    className: (0, o.$)(tV().block, ag().root),
                    track: t,
                    meta: (0, s.jsx)(aj.w, {
                        podcastMetaClassName: (0, o.$)(ag().podcastMeta, ag().important),
                        titleContainerClassName: (0, o.$)(ag().titleContainer, ag().important),
                        textClassName: (0, o.$)(ag().text, ag().important),
                        progressClassName: (0, o.$)(ag().progress, ag().important),
                        track: t,
                        playContextParams: n,
                        withListeningProgress: !0,
                        explicitSize: 'xxxs',
                        titleLineClamp: 2,
                        withAlbumTitleLink: !i,
                    }),
                    playButtonCellRender: u,
                    playButtonIconSize: 'l',
                    controls: (0, s.jsx)(tZ.Q, { track: t, utmLink: n.contextData.utmLink, likeIconSize: 'xs' }),
                    ...d,
                    'data-test-id': p.Kq.track.TRACK_PODCAST,
                });
            });
            var aI = a(61084),
                aT = a.n(aI);
            let af = (0, n.PA)((e) => {
                let { album: t } = e;
                return (0, s.jsx)(ep.M, {
                    album: t,
                    className: (0, o.$)(tV().block, aT().root),
                    coverClassName: tV().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    description: (0, s.jsx)(K.A, { id: 'entity-names.recently-release' }),
                });
            });
            var ak = a(15232),
                aE = a(72936),
                aP = a.n(aE);
            let aN = (0, n.PA)((e) => {
                let { track: t } = e,
                    { from: a } = (0, eY.f)(),
                    {
                        settings: { isMobile: r },
                    } = (0, T.g)(),
                    i = { contextData: { type: eu.K.Various, meta: { id: t.entityId }, from: a }, queueParams: { index: 0, entityId: t.id }, loadContextMeta: !0 },
                    n = (0, t1.D)({ playContextParams: i, entityId: t.entityId }),
                    c = (0, l.useCallback)(
                        (e) =>
                            (0, s.jsx)(t4.q, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: (0, o.$)(tV().cover, aP().cover),
                                radius: 'xs',
                                ...e,
                            }),
                        [t.coverUri, t.isAvailable, t.isDisliked, t.title],
                    );
                return (0, s.jsx)(tQ.C, {
                    className: (0, o.$)(tV().block, aP().root),
                    track: t,
                    meta: (0, s.jsx)(ak.j, { withArtistLink: !r, track: t }),
                    playButtonCellRender: c,
                    playButtonIconSize: 'l',
                    controls: (0, s.jsx)(tZ.Q, { track: t, utmLink: i.contextData.utmLink, likeIconSize: 'xs' }),
                    ...n,
                    'data-test-id': p.Kq.track.SEARCH_TRACK_CARD,
                });
            });
            var aR = a(62414),
                aL = a(25596),
                aB = a(32414),
                aO = a(8990),
                aw = a(49738),
                aD = a(64546),
                aM = a(48864),
                az = a.n(aM);
            let aH = (0, n.PA)((e) => {
                let { upcomingAlbum: t } = e,
                    a = (0, aR.D)(),
                    { user: r } = (0, T.g)(),
                    { formatMessage: i, formatDate: n } = (0, c.A)(),
                    d = (0, aL.P)(t),
                    u = (0, C.L)(() => {
                        let e = i({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: t.title }),
                            a = t.isPresave ? i({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(a);
                    }),
                    m = (0, l.useCallback)(
                        (e, a) => {
                            var r;
                            return (null == (r = t.artists) ? void 0 : r.length)
                                ? (0, s.jsx)(tJ.i, { linkClassName: e, captionClassName: a, artists: t.artists, lineClamp: 1 })
                                : null;
                        },
                        [t.artists],
                    );
                return (0, s.jsxs)(aO.C, {
                    ref: a,
                    className: (0, o.$)(tV().block, t9().root, az().root, az().important),
                    'aria-label': u,
                    children: [
                        (0, s.jsxs)(eB.t, {
                            className: az().cover,
                            radius: 'xs',
                            children: [
                                (0, s.jsx)(ez.B, {
                                    className: az().coverImage,
                                    src: t.coverUri,
                                    size: 100,
                                    alt: i({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: t.title }),
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    fallbackIconSize: 'm',
                                    fallbackIconVariant: 'lock',
                                }),
                                t.coverUri && (0, s.jsx)(et.I, { className: az().lockIcon, variant: 'lock', size: 'xs' }),
                            ],
                        }),
                        (0, s.jsx)(t6.r, {
                            title: (0, s.jsx)(Z.HL, { className: (0, o.$)(t9().text, t9().titleText), size: 'l', variant: 'div', type: 'text', children: t.title }),
                            description: (0, s.jsx)(Z.HL, {
                                className: az().releaseDate,
                                variant: 'div',
                                type: 'entity',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                children: (0, s.jsx)(K.A, { id: 'entity-names.upcoming-album-date', values: { releaseDate: n(t.releaseDate, (0, aB.s)()) } }),
                            }),
                            artistsComponent: m,
                            getDescriptionTexts: t.getDescriptionTexts,
                            explicitMarkVariant: t.explicitDisclaimer,
                        }),
                        (0, s.jsx)(aD.WithOffline, {
                            fallback: (0, s.jsx)(aw.c, {
                                size: 'xs',
                                iconSize: 'xs',
                                className: az().likeButton,
                                isLiked: t.isPresave,
                                onClick: d,
                                disabled: !r.isAuthorized,
                            }),
                        }),
                    ],
                });
            });
            var aU = a(5120),
                aV = a(91198),
                aG = a(67665),
                aW = a(64916),
                aF = a.n(aW);
            let a$ = (0, n.PA)((e) => {
                    var t;
                    let { vibe: a } = e,
                        r = (0, tx._)();
                    return (0, s.jsx)(aG.H, {
                        className: (0, o.$)(aF().root, aF().important),
                        coverClassName: (0, o.$)(aF().coverClassName, aF().important),
                        playButtonIconSize: 'l',
                        vibe: a,
                        controls: r(a),
                        cover: (0, aU.wg)({ uri: a.backgroundImageUrl, color: null == (t = a.colors) ? void 0 : t.average }),
                        description: a.description,
                        agentVariant: aV.h.LARGE,
                    });
                }),
                aY = (0, n.PA)((e) => {
                    let { results: t, isShimmerVisible: a, isShimmerActive: r, blockPosition: i, sendSearchFeedback: n } = e,
                        { formatMessage: d } = (0, c.A)(),
                        m = (0, l.useCallback)(
                            (e, t) => {
                                switch (e.type) {
                                    case tp.r.ALBUM:
                                        return (0, s.jsx)(
                                            ed.B,
                                            {
                                                objectType: u.DomainObjectType.Album,
                                                objectId: String(e.data.id),
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, s.jsx)(eX.N.Provider, {
                                                    value: { sendSearchFeedback: n, id: e.data.id, type: e_.o.ALBUM, blockPosition: i, position: t },
                                                    children: (0, s.jsx)(tF, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case tp.r.PLAYLIST:
                                        return (0, s.jsx)(
                                            ed.B,
                                            {
                                                objectType: u.DomainObjectType.Playlist,
                                                objectId: e.data.id,
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, s.jsx)(eX.N.Provider, {
                                                    value: { sendSearchFeedback: n, id: e.data.id, type: e_.o.PLAYLIST, blockPosition: i, position: t },
                                                    children: (0, s.jsx)(aC, { playlist: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case tp.r.RECENT_RELEASE:
                                        return (0, s.jsx)(
                                            ed.B,
                                            {
                                                objectType: u.DomainObjectType.Album,
                                                objectId: String(e.data.id),
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, s.jsx)(eX.N.Provider, {
                                                    value: { sendSearchFeedback: n, id: e.data.id, type: e_.o.ALBUM, blockPosition: i, position: t },
                                                    children: (0, s.jsx)(af, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case tp.r.WAVE:
                                        return (0, s.jsx)(
                                            ed.B,
                                            {
                                                objectType: u.DomainObjectType.Wave,
                                                objectId: e.data.stationId,
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, s.jsx)(eX.N.Provider, {
                                                    value: { sendSearchFeedback: n, id: e.data.seedsId, type: e_.o.WAVE, blockPosition: i, position: t },
                                                    children: (0, s.jsx)(a$, { vibe: e.data }),
                                                }),
                                            },
                                            e.data.stationId,
                                        );
                                    case tp.r.ARTIST:
                                        return (0, s.jsx)(
                                            ed.B,
                                            {
                                                objectType: u.DomainObjectType.Artist,
                                                objectId: e.data.id,
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, s.jsx)(eX.N.Provider, {
                                                    value: { sendSearchFeedback: n, id: e.data.id, type: e_.o.ARTIST, blockPosition: i, position: t },
                                                    children: (0, s.jsx)(tK, { artist: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case tp.r.UPCOMING:
                                        return (0, s.jsx)(
                                            ed.B,
                                            {
                                                objectType: u.DomainObjectType.UpcomingAlbum,
                                                objectId: String(e.data.id),
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, s.jsx)(aH, { upcomingAlbum: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case tp.r.CONCERT:
                                        return (0, s.jsx)(
                                            ed.B,
                                            {
                                                objectType: u.DomainObjectType.Concert,
                                                objectId: e.data.id,
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, s.jsx)(ac, { concert: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case tp.r.PODCAST:
                                        return (0, s.jsx)(
                                            ed.B,
                                            {
                                                objectType: u.DomainObjectType.Podcast,
                                                objectId: String(e.data.id),
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, s.jsx)(eX.N.Provider, {
                                                    value: { sendSearchFeedback: n, id: e.data.id, type: e_.o.ALBUM, blockPosition: i, position: t },
                                                    children: (0, s.jsx)(am, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case tp.r.NON_MUSIC:
                                        return (0, s.jsx)(
                                            ed.B,
                                            {
                                                objectType: u.DomainObjectType.Audiobook,
                                                objectId: String(e.data.id),
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, s.jsx)(am, { album: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case tp.r.PODCAST_EPISODE:
                                        return (0, s.jsx)(
                                            ed.B,
                                            {
                                                objectType: u.DomainObjectType.PodcastEpisode,
                                                objectId: e.data.id,
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, s.jsx)(ay, { track: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case tp.r.OVERVIEW:
                                        return (0, s.jsx)(ax, { data: e.data }, e.type);
                                    case tp.r.TRACK:
                                        return (0, s.jsx)(
                                            ed.B,
                                            {
                                                objectType: u.DomainObjectType.Track,
                                                objectId: e.data.id,
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, s.jsx)(eX.N.Provider, {
                                                    value: { sendSearchFeedback: n, id: e.data.entityId, type: e_.o.TRACK, blockPosition: i, position: t },
                                                    children: (0, s.jsx)(aN, { track: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case tp.r.CLIP:
                                        return (0, s.jsx)(
                                            ed.B,
                                            {
                                                objectType: u.DomainObjectType.Video,
                                                objectId: String(e.data.clipId),
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, s.jsx)(eX.N.Provider, {
                                                    value: { sendSearchFeedback: n, id: e.data.clipId, type: e_.o.CLIP, blockPosition: i, position: t },
                                                    children: (0, s.jsx)(as, { clip: e.data }),
                                                }),
                                            },
                                            e.data.clipId,
                                        );
                                    case tp.r.BOOK_CHAPTER:
                                        return (0, s.jsx)(
                                            ed.B,
                                            {
                                                objectType: u.DomainObjectType.AudiobookChapter,
                                                objectId: String(e.data.id),
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, s.jsx)(ae, { track: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    default:
                                        return null;
                                }
                            },
                            [i, n],
                        ),
                        h = (0, l.useMemo)(() => t.map((e, t) => m(e, t)).filter((e) => (0, l.isValidElement)(e)), [m, t, t.length]);
                    return a
                        ? (0, s.jsx)(tM, { isShimmerActive: r })
                        : h.length
                          ? (0, s.jsx)(_.F, {
                                blockId: tS.h.SEARCH_BEST_RESULTS,
                                blockType: tS.h.SEARCH_BEST_RESULTS,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: h.length,
                                children: (0, s.jsx)('div', {
                                    className: (0, o.$)(tH().root, { [tH().root_withSingleResult]: 1 === h.length }),
                                    role: 'group',
                                    'aria-label': d({ id: 'search-results.best' }),
                                    'data-test-id': p.e8.search.SEARCH_BEST_RESULTS,
                                    children: h,
                                }),
                            })
                          : null;
                });
            var aX = a(63766),
                aK = a(47934);
            let aq = (0, n.PA)((e) => {
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
                            isShimmerActive: m,
                            isClipBlock: _,
                            ...h
                        } = e,
                        p = (0, tx._)(),
                        { search: x } = (0, T.g)(),
                        b = (0, aa.d)(),
                        v = a.filter((e) => e.type !== S.n.PODCAST_EPISODE);
                    return (x.isResolved && 0 === v.length) || (_ && !b)
                        ? null
                        : (0, s.jsx)(aK.O, {
                              isShimmerVisible: u,
                              isShimmerActive: m,
                              className: c,
                              containerClassName: n,
                              headerClassName: l,
                              showHeaderShimmer: !0,
                              title: r,
                              ref: t,
                              ...(0, ec.OZ)(h),
                              itemClassName: d,
                              children: v.map((e, t) => {
                                  switch (e.type) {
                                      case S.n.ALBUM:
                                          return (0, s.jsx)(
                                              eX.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.id, type: e_.o.ALBUM, blockPosition: o, position: t },
                                                  children: (0, s.jsx)(eh.a, { album: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.id,
                                          );
                                      case S.n.ARTIST:
                                          return (0, s.jsx)(
                                              eX.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.id, type: e_.o.ARTIST, blockPosition: o, position: t },
                                                  children: (0, s.jsx)(ex.a, { artist: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.id,
                                          );
                                      case S.n.PLAYLIST:
                                          return (0, s.jsx)(
                                              eX.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.id, type: e_.o.PLAYLIST, blockPosition: o, position: t },
                                                  children: (0, s.jsx)(eb.B, { playlist: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.key,
                                          );
                                      case S.n.UGC_TRACK:
                                      case S.n.TRACK:
                                          return (0, s.jsx)(
                                              eX.N.Provider,
                                              {
                                                  value: {
                                                      sendSearchFeedback: i,
                                                      id: e.data.albumId ? ''.concat(e.data.id, ':').concat(e.data.albumId) : e.data.id,
                                                      type: e_.o.TRACK,
                                                      blockPosition: o,
                                                      position: t,
                                                  },
                                                  children: (0, s.jsx)(aX.w, { track: e.data, overrideContextType: em.b.Search }),
                                              },
                                              e.data.id,
                                          );
                                      case S.n.CLIP:
                                          return (0, s.jsx)(
                                              eX.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.clipId, type: e_.o.WAVE, blockPosition: o, position: t },
                                                  children: (0, s.jsx)(eS.F, { clip: e.data }),
                                              },
                                              e.data.clipId,
                                          );
                                      case S.n.PODCAST:
                                          return (0, s.jsx)(
                                              eX.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.id, type: e_.o.PODCAST, blockPosition: o, position: t },
                                                  children: (0, s.jsx)(eh.a, { album: e.data, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }),
                                              },
                                              e.data.id,
                                          );
                                      case S.n.WAVE:
                                          return (0, s.jsx)(
                                              eX.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.stationId, type: e_.o.WAVE, blockPosition: 0, position: t },
                                                  children: (0, s.jsx)(aG.H, {
                                                      vibe: e.data,
                                                      controls: p(e.data),
                                                      cover: e.data.cover,
                                                      description: e.data.description,
                                                      agentVariant: aV.h.SMALL,
                                                  }),
                                              },
                                              e.data.stationId,
                                          );
                                  }
                              }),
                          });
                }),
                aZ = (0, l.forwardRef)((e, t) => (0, s.jsx)(aq, { forwardRef: t, ...e }));
            var aQ = a(97893),
                aJ = a.n(aQ);
            let a0 = (0, n.PA)((e) => {
                    let {
                            forwardRef: t,
                            className: a,
                            results: r,
                            bestResults: i,
                            sendSearchFeedback: n,
                            searchCorrectedText: d,
                            isShimmerVisible: u,
                            isShimmerActive: h,
                            q2vResults: b,
                            requestAwakeLumenModal: v,
                            ...j
                        } = e,
                        A = (0, tx._)(),
                        { formatMessage: g } = (0, c.A)(),
                        y = (0, eP.f)(),
                        { isVisible: I, vibe: T } = e2(b, h),
                        f = (0, C.L)(() => {
                            let e = {
                                [S.n.ALL]: { message: g({ id: 'search-results.best' }), type: S.n.ALL, items: [] },
                                [S.n.ARTIST]: { message: g({ id: 'search-results.artist' }), type: S.n.ARTIST, items: [] },
                                [S.n.PODCAST]: { message: g({ id: 'search-results.podcasts-and-books' }), type: S.n.PODCAST, items: [] },
                                [S.n.ALBUM]: { message: g({ id: 'search-results.album' }), type: S.n.ALBUM, items: [] },
                                [S.n.PLAYLIST]: { message: g({ id: 'search-results.playlist' }), type: S.n.PLAYLIST, items: [] },
                                [S.n.CLIP]: { message: g({ id: 'search-results.clip' }), type: S.n.CLIP, items: [] },
                            };
                            r.filter((e) => !!e).forEach((t) => {
                                if (t) {
                                    var a, r;
                                    (null == (a = e[t.type]) || a.items.push(t), null == (r = e[S.n.ALL]) || r.items.push(t));
                                }
                            });
                            let t = {
                                [S.n.ARTIST]: p.e8.search.SEARCH_MIXED_ARTIST,
                                [S.n.PODCAST]: p.e8.search.SEARCH_MIXED_PODCAST,
                                [S.n.ALBUM]: p.e8.search.SEARCH_MIXED_ALBUM,
                                [S.n.PLAYLIST]: p.e8.search.SEARCH_MIXED_PLAYLIST,
                                [S.n.CLIP]: p.e8.search.SEARCH_MIXED_CLIP,
                                [tp.r.PODCAST]: p.e8.search.SEARCH_MIXED_BEST_PODCAST,
                                [tp.r.OVERVIEW]: p.e8.search.SEARCH_MIXED_BEST_OVERVIEW,
                                [tp.r.PODCAST_EPISODE]: p.e8.search.SEARCH_MIXED_BEST_PODCAST_EPISODE,
                                [tp.r.NON_MUSIC]: p.e8.search.SEARCH_MIXED_BEST_NON_MUSIC,
                            };
                            return Object.getOwnPropertyNames(e).map((a, r) => {
                                let o = e[a],
                                    c = o.type === S.n.CLIP;
                                if (o.type === S.n.ALL) {
                                    let e = o.items
                                        .map((e, t) => {
                                            let {
                                                objectPosX: a,
                                                objectPosY: i,
                                                objectsCount: s,
                                            } = (0, tb.$)({ index: t, count: o.items.length, itemsCountPerColumn: 3, showedItemsCountInBlock: 6 });
                                            return (0, tv.G)({
                                                renderVibeControls: A,
                                                item: e,
                                                index: t,
                                                sendSearchFeedback: n,
                                                blockPosition: r,
                                                objectPosX: a,
                                                objectPosY: i,
                                                objectsCount: s,
                                            });
                                        })
                                        .filter((e) => (0, l.isValidElement)(e));
                                    return (0, s.jsxs)(
                                        l.Fragment,
                                        {
                                            children: [
                                                (0, s.jsx)(aY, { results: i, isShimmerVisible: u, isShimmerActive: h, blockPosition: r, sendSearchFeedback: n }),
                                                (0, s.jsx)(_.F, {
                                                    blockId: tS.h.SEARCH_OPEN_BEST_RESULTS,
                                                    blockType: tS.h.SEARCH_OPEN_BEST_RESULTS,
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    objectsCount: e.length,
                                                    children: (0, s.jsx)(tB, {
                                                        containerClassName: aJ().blockMixed,
                                                        className: aJ().block,
                                                        maxColumns: 2,
                                                        itemsPerColumn: 3,
                                                        showControls: !0,
                                                        'aria-label': g({ id: 'search-results.other-results' }),
                                                        isShimmerVisible: u,
                                                        isShimmerActive: h,
                                                        children: e,
                                                    }),
                                                }),
                                            ],
                                        },
                                        r,
                                    );
                                }
                                let d = t[o.type];
                                return (0, s.jsx)(
                                    aZ,
                                    {
                                        className: aJ().block,
                                        headerClassName: aJ().blockHeader,
                                        containerClassName: aJ().blockCarousel,
                                        blockPosition: r,
                                        items: o.items,
                                        title: o.message,
                                        sendSearchFeedback: n,
                                        isShimmerVisible: u,
                                        isShimmerActive: h,
                                        isClipBlock: c,
                                        ...(d ? { 'data-test-id': d } : {}),
                                    },
                                    r,
                                );
                            });
                        });
                    return (0, s.jsxs)(ea.N, {
                        className: (0, o.$)(aJ().root, a),
                        containerClassName: aJ().container,
                        ref: t,
                        ...(0, ec.OZ)(j),
                        children: [
                            (0, s.jsxs)('div', {
                                className: aJ().content,
                                children: [
                                    d && (0, s.jsx)('div', { className: aJ().correctedTextBlock, children: d }),
                                    (0, s.jsxs)(m.h, {
                                        tabId: x.$.TOP,
                                        tabPos: 1,
                                        isTabSelectedByDefault: !0,
                                        children: [
                                            y && I && (0, s.jsx)(td, { requestAwakeLumenModal: v, sendSearchFeedback: n, vibe: T }),
                                            (0, s.jsx)('div', { className: aJ().items, children: f }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsx)(ei.A, { children: (0, s.jsx)(er.w, { className: aJ().footer }) }),
                        ],
                    });
                }),
                a1 = (0, l.forwardRef)((e, t) => (0, s.jsx)(a0, { forwardRef: t, ...e }));
            var a8 = a(20129),
                a2 = a(90233),
                a9 = a(23192),
                a6 = a(64284),
                a3 = a(44230),
                a4 = a(37670),
                a7 = a(4370),
                a5 = a(60628),
                re = a(74773),
                rt = a(34303),
                ra = a(14912),
                rr = a(94058),
                ri = a(87366),
                rs = a(76099);
            let ro = Math.floor(e1.k / 3);
            var rn = a(96966),
                rl = a.n(rn),
                rc = a(25772),
                rd = a(84273),
                ru = a(35962),
                rm = a(62586),
                r_ = a.n(rm);
            let rh = (0, n.PA)((e) => {
                let { isShimmerVisible: t, isShimmerActive: a, mixes: r } = e,
                    { formatMessage: i } = (0, c.A)(),
                    o = (0, l.useMemo)(
                        () =>
                            t
                                ? (0, ru.k)({ isActive: a, withInfo: !1 })
                                : r.map((e) =>
                                      (0, s.jsx)(
                                          rd.N,
                                          { title: e.title, weblink: e.weblink, covers: e.covers, coverSize: 80, imagesLayoutType: e.imagesLayoutType },
                                          e.id,
                                      ),
                                  ),
                        [a, t, r],
                    );
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(tA.T, { className: r_().carouselHeader, title: i({ id: 'entity-names.mixes' }), titleSize: 'xs', viewAllActionLink: a7.Z.mixes.href }),
                        (0, s.jsx)(tj.F, { className: r_().carouselBlock, itemClassName: r_().mixItem, children: o }),
                    ],
                });
            });
            var rp = a(26323);
            let rx = (0, n.PA)((e) => {
                let { className: t } = e,
                    {
                        settings: { isMobile: a },
                        search: r,
                    } = (0, T.g)();
                return (r.mixes.loadingState === re.G.IDLE && (0, l.use)(r.mixes.getMixes(!1)), a)
                    ? (0, s.jsx)(rh, { isShimmerVisible: r.mixes.isLoading || r.mixes.isRejected, isShimmerActive: r.mixes.isLoading, mixes: r.mixes.items })
                    : (0, s.jsx)(rp.n, {
                          isShimmerVisible: r.mixes.isLoading || r.mixes.isRejected,
                          isShimmerActive: r.mixes.isLoading,
                          mixes: r.mixes.items,
                          className: t,
                          withTitle: !0,
                      });
            });
            var rS = a(62297),
                rb = a.n(rS);
            let rv = (0, n.PA)(() => {
                let e = (0, tx._)(),
                    { search: t, user: a } = (0, T.g)(),
                    { formatMessage: r } = (0, c.A)(),
                    i = t.historyPage.items;
                if (
                    ((0, l.useEffect)(
                        () => () => {
                            var e;
                            (null == (e = location) ? void 0 : e.pathname) !== a7.Z.searchHistory.href && t.resetHistoryStateRequest();
                        },
                        [t],
                    ),
                    t.isHistoryReady && a.account.data.uid && (0, l.use)(t.getHistory({ userId: a.account.data.uid })),
                    0 === i.length)
                )
                    return null;
                let o = i.reduce((t, a, r) => {
                    let { objectPosX: s, objectPosY: o } = (0, tb.$)({ index: t.length, count: i.length, itemsCountPerColumn: 4 }),
                        n = (0, tv.G)({ item: a, index: r, pageId: e$.b.SEARCH, objectPosX: s, objectPosY: o, renderVibeControls: e });
                    return ((0, l.isValidElement)(n) && t.push(n), t);
                }, []);
                return (0, s.jsx)('section', {
                    className: rb().root,
                    children: (0, s.jsx)(tB, {
                        headerClassName: rb().header,
                        containerClassName: rb().content,
                        isShimmerVisible: t.isHistoryShimmerVisible,
                        isShimmerActive: t.isHistoryLoading,
                        title: r({ id: 'search.history' }),
                        viewAllAction: a7.Z.searchHistory.href,
                        maxColumns: 2,
                        itemsPerColumn: 4,
                        showControls: !0,
                        children: o,
                    }),
                });
            });
            var rC = a(37717),
                rj = a(33301),
                rA = a.n(rj);
            let rg = (0, n.PA)(() => {
                    let e = (0, tx._)(),
                        { search: t, user: a } = (0, T.g)(),
                        { formatMessage: r } = (0, c.A)(),
                        i = (0, rC.t)(t.resetHistoryItems),
                        o = t.historyPage.items;
                    if (
                        ((0, l.useEffect)(
                            () => () => {
                                var e;
                                (null == (e = location) ? void 0 : e.pathname) !== a7.Z.searchHistory.href && t.resetHistoryStateRequest();
                            },
                            [t],
                        ),
                        t.isHistoryReady && a.account.data.uid && (0, l.use)(t.getHistory({ userId: a.account.data.uid })),
                        0 === o.length)
                    )
                        return null;
                    let n = o.reduce((t, a, r) => {
                        let { objectPosX: i, objectPosY: s } = (0, tb.$)({ index: t.length, count: o.length, itemsCountPerColumn: 3 }),
                            n = (0, tv.G)({ item: a, index: r, pageId: e$.b.SEARCH, objectPosX: i, objectPosY: s, renderVibeControls: e });
                        return ((0, l.isValidElement)(n) && t.push(n), t);
                    }, []);
                    return (0, s.jsxs)('div', {
                        children: [
                            (0, s.jsx)(tB, {
                                headerClassName: rA().header,
                                containerClassName: rA().mixedEntitiesBlock,
                                isShimmerVisible: t.isHistoryShimmerVisible,
                                isShimmerActive: t.isHistoryLoading,
                                title: r({ id: 'search.history' }),
                                viewAllAction: a7.Z.searchHistory.href,
                                titleSize: 'xs',
                                itemsPerColumn: 3,
                                children: n,
                            }),
                            (0, s.jsx)('div', {
                                className: rA().buttonContainer,
                                children: (0, s.jsx)(q.$, {
                                    className: rA().button,
                                    'aria-label': r({ id: 'search.clear-history' }),
                                    disabled: !o.length,
                                    size: 'default',
                                    radius: 'xxxl',
                                    onClick: i,
                                    children: (0, s.jsx)(Z.HL, { variant: 'span', size: 'm', type: 'text', children: (0, s.jsx)(K.A, { id: 'search.clear-history' }) }),
                                }),
                            }),
                        ],
                    });
                }),
                ry = (0, n.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, T.g)();
                    return e ? (0, s.jsx)(rg, {}) : (0, s.jsx)(rv, {});
                });
            var rI = a(32596),
                rT = a(69630),
                rf = a(47149),
                rk = a(63582),
                rE = a(59791),
                rP = a(7695),
                rN = a(89846),
                rR = a(56374);
            let rL = (0, rk.n)({ event: 'Screen.Started', kind: 'hook', requiredScopes: ['screen'] }, (e) => {
                let t = (0, l.useContext)(rE.I),
                    { hash: a } = (0, rN.g)(),
                    { screen: r, tab: i } = (0, eN.j)();
                return (0, rR.c)(() => {
                    t &&
                        r &&
                        void 0 !== a &&
                        (0, rf.BP)(t, {
                            ...e,
                            hash: a,
                            pageId: r.pageId,
                            pageStyle: r.pageStyle,
                            pagePlacement: r.pagePlacement,
                            skeletonId: r.skeletonId,
                            mainObjectType: r.mainObjectType,
                            mainObjectId: r.mainObjectId,
                            ...(i ?? rP.Ve),
                        });
                });
            });
            var rB = a(76168);
            let rO = [rt.K.BEST_PLAY, rt.K.SEEDS];
            var rw = a(93317);
            let rD = (0, n.PA)((e) => {
                    let { autoPlaySearchText: t, searchResults: a, setContentScrollRef: r, contentScrollRef: i, hasSearchText: n } = e,
                        {
                            lumen: c,
                            user: m,
                            search: h,
                            settings: { isMobile: x },
                        } = (0, T.g)(),
                        [S, b] = (0, eA.d)(),
                        v = (0, l.useRef)(t),
                        C = t !== v.current,
                        j = c.isTriedToLoadData && !c.isAwakened;
                    ((e) => {
                        let { isEnabled: t, shouldCancel: a } = e,
                            { sonataState: r, vibe: i } = (0, T.g)(),
                            { screen: s } = (0, eN.j)(),
                            o = null == s ? void 0 : s.pageIdForFrom,
                            n = (0, d.useSearchParams)(),
                            c = (0, rB.z)(),
                            m = rL({
                                entityId: u.EntityTypes.Deeplink,
                                entityType: u.EntityTypes.Deeplink,
                                objectId: u.DomainObjectType.NonApplicable,
                                objectType: u.DomainObjectType.NonApplicable,
                                playbackActionId: '',
                            }),
                            _ = (0, l.useRef)(!1),
                            h = n.get(rt.K.BEST_PLAY),
                            p = n.get(rt.K.SEEDS),
                            x = 'true' === h && p,
                            S = (null !== h || null !== p) && !x,
                            b = (0, l.useRef)(x ? x.split(',') : []).current,
                            v = b.length > 0,
                            { isPlaying: C, togglePlay: j } = (0, eD.B)({ blockIdForFrom: u.EntityTypes.Q2vWave, pageIdForFrom: o, seeds: b });
                        ((0, l.useEffect)(() => {
                            S && c(rO);
                        }, [S, c]),
                            (0, l.useEffect)(() => {
                                let e = !a && !t;
                                !_.current && v && !e && ((_.current = !0), a || C || i.isApplying || (r.setShouldApplyYnisonState(!1), j(), c(rO), m()));
                            }, [v, t, C, c, m, a, r, j, i.isApplying]));
                    })({ isEnabled: c.isAwakened, shouldCancel: C || j });
                    let A = h.landing.hasUpperBlocks,
                        g = x || A,
                        y = !x && A;
                    return n
                        ? a
                        : m.isAuthorized
                          ? (0, s.jsx)(rT.h, {
                                scrollElement: y ? null : i,
                                headerElement: S,
                                children: (0, s.jsxs)(ea.N, {
                                    className: (0, o.$)(rl().scrollableContent, { [rl().scrollableContent_withUpperBlocks]: A }),
                                    containerClassName: rl().main,
                                    ref: r,
                                    'data-test-id': p.Xk.search.SEARCH_PAGE_CONTENT,
                                    children: [
                                        (0, s.jsx)(rc.E, {
                                            containerClassName: (0, o.$)(rl().skeletonContainer, { [rl().skeletonContainer_withUpperBlocks]: A }),
                                            headerClassName: y ? (0, o.$)(rl().skeletonHeaderWithUpperBlocks, rl().important) : void 0,
                                            stickyHeaderClassName: y
                                                ? (0, o.$)(rl().skeletonStickyHeaderWithUpperBlocks, rl().important)
                                                : (0, o.$)(rl().skeletonStickyHeader, rl().important),
                                            stickyHeaderTabIndex: g ? null : 0,
                                            headerConcealerComponent: (0, s.jsx)('div', { ref: b }),
                                            landing: h.landing,
                                            errorComponent: (0, s.jsx)(rI.SomethingWentWrong, { className: rl().error, withBackwardControl: !1 }),
                                            headerVariant: g ? rw.V.COMPOSITE : rw.V.STICKY,
                                        }),
                                        (0, s.jsx)(ei.A, { children: (0, s.jsx)(er.w, { className: rl().footer }) }),
                                    ],
                                }),
                            })
                          : (0, s.jsxs)(ea.N, {
                                className: rl().scrollableContent,
                                containerClassName: rl().main,
                                ref: r,
                                children: [
                                    (0, s.jsx)(l.Suspense, {
                                        children: (0, s.jsx)(_.F, {
                                            blockId: tS.h.SEARCH_HISTORY,
                                            blockType: tS.h.SEARCH_HISTORY,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            blockIdForFrom: tS.h.SEARCH_HISTORY,
                                            objectsCount: h.historyPage.items.length,
                                            children: (0, s.jsx)(ry, {}),
                                        }),
                                    }),
                                    (0, s.jsx)(l.Suspense, { children: (0, s.jsx)(rx, { className: rl().mixes }) }),
                                    (0, s.jsx)(ei.A, { children: (0, s.jsx)(er.w, { className: rl().footer }) }),
                                ],
                            });
                }),
                rM = (0, n.PA)(() => {
                    var e;
                    let t = (0, eP.f)(),
                        { awakeLumenModal: a, requestAwakeLumenModal: r } = (0, a2.z)(),
                        i = (0, A.zb)(0),
                        [n, g] = (0, l.useState)(x.$.TOP),
                        [y, I] = (0, l.useState)(!1),
                        [f, k] = (0, l.useState)(null),
                        { formatMessage: E } = (0, c.A)(),
                        { search: P, experiments: N, location: R, lumen: L, user: B, settings: O } = (0, T.g)(),
                        { isMobile: w } = O,
                        D = N.checkExperiment(eq.z.WebNextQueryToVibeInputAnimation, 'on'),
                        { contentScrollRef: M, setContentScrollRef: z } = (0, a3.g)(),
                        H = ((e) => {
                            let { formatMessage: t } = (0, c.A)(),
                                a = (0, aa.d)(),
                                { experiments: r } = (0, T.g)(),
                                i = !r.checkExperiment(eq.z.WebNextProductWithoutRecommendation, 'on'),
                                s = r.checkExperiment(eq.z.WebNextSearchConcerts, 'on');
                            return e
                                ? [{ id: x.$.TOP, displayName: t({ id: 'search-filters.top' }) }, ...e].filter((e) => {
                                      if ((e.id !== x.$.CLIP || a) && (e.id !== x.$.CONCERT || s) && (e.id !== x.$.WAVES || i)) return e;
                                  })
                                : [{ id: x.$.TOP, displayName: t({ id: 'search-filters.top' }) }];
                        })(P.filters),
                        U = (0, ra.X)(),
                        [V, G] = (0, l.useState)(() => {
                            var e;
                            return decodeURIComponent(null != (e = new URLSearchParams(R.searchParams).get(rt.K.TEXT)) ? e : '');
                        }),
                        W = (0, l.useRef)(V),
                        F = V.length > 0,
                        $ = y && null != (e = P.searchCorrectedText) ? e : V;
                    (N.checkExperiment(eq.z.WebNextDisableSearch, 'on') && (0, d.redirect)(a7.Z.main.href),
                        (0, a4.J)(P.landing.loadingState === re.G.RESOLVE),
                        (0, l.useEffect)(
                            () => () => {
                                (P.reset(), B.isAuthorized && P.landing.reset());
                            },
                            [B.isAuthorized, N, P],
                        ),
                        (0, l.useEffect)(() => {
                            L.isEnabled && L.getData();
                        }, [L]));
                    let Y = (0, v.c)((e, t) => {
                            (P.resetResults(), 0 !== e.length && P.getSearchResults({ text: decodeURIComponent(e), filter: t }));
                        }),
                        K = (0, v.c)(() => {
                            I(!0);
                        }),
                        q = (0, v.c)((e) => {
                            e.trim() && k(e);
                        }),
                        Z = (0, v.c)((e) => {
                            var t, a;
                            if (!i.onTabChange || e === i.value) return;
                            i.onTabChange(e);
                            let r = null != (a = null == (t = H[e]) ? void 0 : t.id) ? a : x.$.TOP;
                            (Object.values(x.$).includes(r) && (g(r), Y(W.current, r)), M && (M.scrollTop = 0));
                        }),
                        Q = (0, v.c)((e) => {
                            let t = e.trim(),
                                a = encodeURIComponent(t);
                            (G(a),
                                (W.current = a),
                                0 !== i.value && Z(0),
                                Y(a, x.$.TOP),
                                P.history.setShouldUpdateHistory(!0),
                                P.resetSearchCorrectedText(),
                                I(!1),
                                k(null));
                            let r = new URL(window.location.href);
                            (r.searchParams.set(rt.K.TEXT, t), U(String(r)));
                        }),
                        J = (0, v.c)((e) => {
                            var t, a;
                            let { id: r, type: i, blockPosition: s, position: o, feedbackType: n } = e;
                            P.sendFeedback({
                                blockType: i,
                                entityId: ''.concat(i, ':').concat(r),
                                timestamp: new Date().toISOString(),
                                searchRequestId: P.searchRequestId,
                                query: W.current,
                                clickType: n,
                                blockPosition: s,
                                position: o,
                                page: null != (a = null == (t = P.pagesLoader.pager) ? void 0 : t.page) ? a : 0,
                            });
                        }),
                        et = ((e) => {
                            let { search: t, searchText: a, searchFilter: r } = e;
                            return (0, l.useCallback)(
                                function (e) {
                                    var i, s;
                                    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                        n = t.pagesLoader.pager;
                                    if (!n) return;
                                    let l = null != (s = null == (i = t.pagesLoader.items) ? void 0 : i.length) ? s : 0,
                                        c = e.endIndex * o;
                                    if (l > 0 && c >= l - ro) {
                                        if (!t.pagesLoader.hasMorePages) return;
                                        let e = Math.ceil(l / n.perPage);
                                        t.pagesLoader.isPageNeedToLoad(e) && t.getSearchResults({ text: decodeURIComponent(a), filter: r, page: e });
                                    }
                                },
                                [t, a, r],
                            );
                        })({ search: P, searchText: W.current, searchFilter: n }),
                        ea = (0, l.useMemo)(
                            () => (P.searchCorrectedText ? (0, s.jsx)(ee, { searchCorrectedText: P.searchCorrectedText, onCorrectText: K }) : null),
                            [K, P.searchCorrectedText],
                        ),
                        er = (0, C.L)(() => {
                            var e, t;
                            if (P.isEmpty) return (0, s.jsx)(el, { searchCorrectedText: ea });
                            let a = null != (e = P.pagesLoader.items) ? e : [],
                                i = {
                                    className: rl().searchResults,
                                    isShimmerVisible: P.isShimmerVisible,
                                    isShimmerActive: P.isLoading,
                                    results: null != (t = P.pagesLoader.items) ? t : [],
                                    requestsCount: P.pagesLoader.requestsCount,
                                    bestResults: P.bestResults,
                                    q2vResults: P.q2vResults,
                                    sendSearchFeedback: J,
                                    searchCorrectedText: ea,
                                    getDataByRange: et,
                                    ref: z,
                                    requestAwakeLumenModal: r,
                                };
                            switch (n) {
                                case x.$.TOP:
                                    return (0, s.jsx)(m.h, {
                                        tabId: n,
                                        tabPos: P.filterPosition(n),
                                        isTabSelectedByDefault: !1,
                                        children: (0, s.jsx)(a1, { ...i, 'data-test-id': p.Xk.search.SEARCH_PAGE_RESULTS_TOP }),
                                    });
                                case x.$.TRACK:
                                    return (0, s.jsx)(m.h, {
                                        tabId: n,
                                        tabPos: P.filterPosition(n),
                                        isTabSelectedByDefault: !1,
                                        children: (0, s.jsx)(_.F, {
                                            blockId: a6.U.SEARCH,
                                            blockType: u.EntityTypes.Tracks,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: a.length,
                                            children: (0, s.jsx)(th, { ...i, filter: n, variant: 'list', 'data-test-id': p.Xk.search.SEARCH_PAGE_RESULTS_TRACK }),
                                        }),
                                    });
                                case x.$.ALBUM:
                                    return (0, s.jsx)(th, { ...i, filter: S.n.ALBUM, 'data-test-id': p.Xk.search.SEARCH_PAGE_RESULTS_ALBUM });
                                case x.$.PLAYLIST:
                                    return (0, s.jsx)(th, { ...i, filter: S.n.PLAYLIST, 'data-test-id': p.Xk.search.SEARCH_PAGE_RESULTS_PLAYLIST });
                                case x.$.ARTIST:
                                    return (0, s.jsx)(th, { ...i, filter: S.n.ARTIST, 'data-test-id': p.Xk.search.SEARCH_PAGE_RESULTS_ARTIST });
                                case x.$.PODCAST:
                                    return (0, s.jsx)(m.h, {
                                        tabId: n,
                                        tabPos: P.filterPosition(n),
                                        isTabSelectedByDefault: !1,
                                        children: (0, s.jsx)(_.F, {
                                            blockId: a6.U.SEARCH,
                                            blockType: u.EntityTypes.Podcasts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: a.length,
                                            children: (0, s.jsx)(th, {
                                                ...i,
                                                filter: S.n.PODCAST,
                                                variant: 'list',
                                                'data-test-id': p.Xk.search.SEARCH_PAGE_RESULTS_PODCAST,
                                            }),
                                        }),
                                    });
                                case x.$.BOOK:
                                    return (0, s.jsx)(m.h, {
                                        tabId: n,
                                        tabPos: P.filterPosition(n),
                                        isTabSelectedByDefault: !1,
                                        children: (0, s.jsx)(_.F, {
                                            blockId: a6.U.SEARCH,
                                            blockType: u.EntityTypes.Podcasts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: a.length,
                                            children: (0, s.jsx)(th, { ...i, filter: S.n.BOOK, variant: 'list', 'data-test-id': p.Xk.search.SEARCH_PAGE_RESULTS_BOOK }),
                                        }),
                                    });
                                case x.$.CLIP:
                                    return (0, s.jsx)(th, { ...i, filter: S.n.CLIP, 'data-test-id': p.Xk.search.SEARCH_PAGE_RESULTS_CLIP });
                                case x.$.WAVES:
                                    return (0, s.jsx)(m.h, {
                                        tabId: n,
                                        tabPos: P.filterPosition(n),
                                        isTabSelectedByDefault: !1,
                                        children: (0, s.jsx)(th, { ...i, filter: S.n.WAVE, 'data-test-id': p.Xk.search.SEARCH_PAGE_RESULTS_WAVES }),
                                    });
                                case x.$.CONCERT:
                                    return (0, s.jsx)(m.h, {
                                        tabId: n,
                                        tabPos: P.filterPosition(n),
                                        isTabSelectedByDefault: !1,
                                        children: (0, s.jsx)(_.F, {
                                            blockId: a6.U.SEARCH,
                                            blockType: u.EntityTypes.Concerts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: a.length,
                                            children: (0, s.jsx)(th, { ...i, filter: S.n.CONCERT, 'data-test-id': p.Xk.search.SEARCH_PAGE_RESULTS_CONCERT }),
                                        }),
                                    });
                                default:
                                    return ea;
                            }
                        }),
                        ei = (0, l.useMemo)(() => {
                            if (F)
                                return (0, s.jsx)(rr.F, {
                                    className: rl().carousel,
                                    carouselElement: (0, s.jsx)(rs.wI, {
                                        className: rl().tabs,
                                        ...i,
                                        onTabChange: Z,
                                        children: H.map((e, t) =>
                                            (0, s.jsx)(
                                                ri.o,
                                                { className: (0, o.$)(rl().tab, { [rl().tab_selected]: t === i.value }), title: e.displayName, value: t },
                                                t,
                                            ),
                                        ),
                                    }),
                                });
                        }, [H, Z, i, F]),
                        es = (0, C.L)(() => {
                            let e = t ? E({ id: 'search.input-placeholder-q2v' }) : E({ id: 'search.input-placeholder' }),
                                a = {
                                    className: rl().input,
                                    autoFocus: !0,
                                    initialValue: W.current,
                                    placeholder: e,
                                    onChange: Q,
                                    resetButtonAriaLabel: E({ id: 'interface-actions.reset-search-input' }),
                                    correctedValue: null != f ? f : y ? P.searchCorrectedText : null,
                                    innerInputProps: { 'data-test-id': p.Xk.search.SEARCH_PAGE_SEARCH_INPUT },
                                    resetButtonProps: { 'data-test-id': p.Xk.search.SEARCH_PAGE_SEARCH_INPUT_RESET_BUTTON },
                                    searchIconProps: { 'data-test-id': p.Xk.search.SEARCH_PAGE_SEARCH_INPUT_ICON },
                                };
                            return D ? (0, s.jsx)(X, { ...a, lumenColor: a9.R }) : (0, s.jsx)(j.D, { ...a });
                        }),
                        eo = (0, v.c)(() => {
                            if (P.landing.isLoaded) return P.landing.getSkeleton({ id: b.p.SEARCH, showWizard: B.settings.showWizard }, { preloadBlocksCount: 2 });
                        });
                    return (
                        P.isNeededToLoad && F && (0, l.use)(P.getSearchResults({ text: decodeURIComponent(V), filter: n })),
                        B.isAuthorized &&
                            P.landing.isNeededToLoad &&
                            !F &&
                            (0, l.use)(P.landing.getSkeleton({ id: b.p.SEARCH, showWizard: B.settings.showWizard }, { preloadBlocksCount: 2 })),
                        (0, s.jsxs)(h.a, {
                            pageId: u.AppScreen.SearchScreen,
                            pageIdForFrom: e$.b.SEARCH,
                            skeletonId: b.p.SEARCH,
                            displayReasonId: P.searchRequestId,
                            children: [
                                a,
                                (0, s.jsx)(a5.m.Provider, {
                                    value: q,
                                    children: (0, s.jsxs)('div', {
                                        className: (0, o.$)(rl().root, { [rl().root_showFilters]: F, [rl().root_mobile]: w }),
                                        'data-test-id': p.Xk.search.SEARCH_PAGE,
                                        children: [
                                            (0, s.jsxs)('div', { className: rl().header, 'data-test-id': p.Xk.search.SEARCH_PAGE_HEADER_CONTAINER, children: [es, ei] }),
                                            (0, s.jsx)('div', {
                                                className: rl().content,
                                                children: (0, s.jsx)(rD, {
                                                    autoPlaySearchText: $,
                                                    hasSearchText: F,
                                                    contentScrollRef: M,
                                                    setContentScrollRef: z,
                                                    searchResults: er,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, s.jsx)(a8.p, { onFinishSuccess: eo }),
                            ],
                        })
                    );
                });
        },
        70662: (e) => {
            e.exports = { mixesTitle: 'MixesGrid_mixesTitle__QawnL', mixesGrid: 'MixesGrid_mixesGrid__uZQtt' };
        },
        71344: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => p });
            var r = a(88800),
                i = a(87999),
                s = a(7833),
                o = a(14661),
                n = a(63765),
                l = a(46811),
                c = a(27639),
                d = a(4196),
                u = a(58378),
                m = a(91198),
                _ = a(67665),
                h = a(91087);
            let p = (e) => {
                let { renderVibeControls: t, item: a, index: p, pageId: x, sendSearchFeedback: S, blockPosition: b = 0, objectPosX: v, objectPosY: C } = e;
                switch (a.type) {
                    case o.n.PODCAST_EPISODE:
                        return (0, r.jsx)(
                            s.B,
                            {
                                objectType: i.DomainObjectType.PodcastEpisode,
                                objectId: a.data.id,
                                objectPosX: v,
                                objectPosY: C,
                                children: (0, r.jsx)(u.c, { pageId: x, track: a.data }),
                            },
                            a.data.id,
                        );
                    case o.n.UGC_TRACK:
                        return (0, r.jsx)(u.c, { pageId: x, track: a.data });
                    case o.n.TRACK:
                        return (0, r.jsx)(
                            s.B,
                            {
                                objectType: i.DomainObjectType.Track,
                                objectId: a.data.id,
                                objectPosX: v,
                                objectPosY: C,
                                children: (0, r.jsx)(h.N.Provider, {
                                    value: { sendSearchFeedback: S, id: a.data.entityId, type: n.o.TRACK, blockPosition: b, position: p },
                                    children: (0, r.jsx)(u.c, { pageId: x, track: a.data }),
                                }),
                            },
                            a.data.id,
                        );
                    case o.n.ARTIST:
                        return (0, r.jsx)(
                            s.B,
                            {
                                objectType: i.DomainObjectType.Artist,
                                objectId: a.data.id,
                                objectPosX: v,
                                objectPosY: C,
                                children: (0, r.jsx)(h.N.Provider, {
                                    value: { sendSearchFeedback: S, id: a.data.id, type: n.o.ARTIST, blockPosition: b, position: p },
                                    children: (0, r.jsx)(c.c, { pageId: x, artist: a.data }),
                                }),
                            },
                            a.data.id,
                        );
                    case o.n.PLAYLIST:
                        return (0, r.jsx)(
                            s.B,
                            {
                                objectType: i.DomainObjectType.Playlist,
                                objectId: a.data.id,
                                objectPosX: v,
                                objectPosY: C,
                                children: (0, r.jsx)(h.N.Provider, {
                                    value: { sendSearchFeedback: S, id: a.data.id, type: n.o.PLAYLIST, blockPosition: b, position: p },
                                    children: (0, r.jsx)(d.v, { pageId: x, playlist: a.data }),
                                }),
                            },
                            a.data.id,
                        );
                    case o.n.PODCAST:
                        return (0, r.jsx)(
                            s.B,
                            {
                                objectType: i.DomainObjectType.Podcast,
                                objectId: String(a.data.id),
                                objectPosX: v,
                                objectPosY: C,
                                children: (0, r.jsx)(
                                    h.N.Provider,
                                    {
                                        value: { sendSearchFeedback: S, id: a.data.id, type: n.o.PODCAST, blockPosition: b, position: p },
                                        children: (0, r.jsx)(l.M, { pageId: x, album: a.data }),
                                    },
                                    a.data.id,
                                ),
                            },
                            a.data.id,
                        );
                    case o.n.ALBUM:
                        return (0, r.jsx)(
                            s.B,
                            {
                                objectType: i.DomainObjectType.Album,
                                objectId: String(a.data.id),
                                objectPosX: v,
                                objectPosY: C,
                                children: (0, r.jsx)(
                                    h.N.Provider,
                                    {
                                        value: { sendSearchFeedback: S, id: a.data.id, type: n.o.ALBUM, blockPosition: b, position: p },
                                        children: (0, r.jsx)(l.M, { pageId: x, album: a.data }),
                                    },
                                    a.data.id,
                                ),
                            },
                            a.data.id,
                        );
                    case o.n.WAVE: {
                        let e = a.data;
                        return (0, r.jsx)(
                            s.B,
                            {
                                objectType: i.DomainObjectType.Wave,
                                objectId: e.stationId,
                                objectPosX: v,
                                objectPosY: C,
                                children: (0, r.jsx)(h.N.Provider, {
                                    value: { sendSearchFeedback: S, id: e.seedsId, type: n.o.WAVE, blockPosition: b, position: p },
                                    children: (0, r.jsx)(_.H, { vibe: e, controls: t(e), cover: e.cover, description: e.description, agentVariant: m.h.SMALL }),
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
        79418: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => x });
            var r = a(88800),
                i = a(65724),
                s = a(61013),
                o = a(53548);
            let n = (e) => {
                    let { style: t, forwardRef: a, context: i, ...s } = e,
                        o = (null == i ? void 0 : i.listAriaLabel) || void 0,
                        n = (null == i ? void 0 : i.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': o, style: { ...t }, ref: a, ...s });
                },
                l = (0, o.forwardRef)((e, t) => (0, r.jsx)(n, { forwardRef: t, ...e }));
            var c = a(16434),
                d = a.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: a, withFooter: s, withHeader: o, withForceScroll: n, ...l } = e;
                    return (0, r.jsx)('div', {
                        className: (0, i.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: o, [d().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: a,
                        ...l,
                        tabIndex: -1,
                    });
                },
                m = (0, o.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var _ = a(55482),
                h = a(75151);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: a,
                            onRangeHandler: i,
                            debounceDurationInMs: s = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: l = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, p] = (0, o.useState)(null),
                        x = (0, o.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == i || i(e), l.length > 0 && p(e), t && a)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            i = Math.floor(e.startIndex / t);
                                        for (let e = i; e < r; e++) a(e);
                                    }
                                }, s),
                            [s, i, t, a, l],
                        );
                    (0, o.useEffect)(() => {
                        l.length > 0 && m && x(m);
                    }, l);
                    let S = (0, o.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, r.jsx)(h.sN, { ref: d, rangeChanged: x, totalCount: n, endReached: S, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: a,
                            onGetDataByPage: n,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: h,
                            overscan: x = 700,
                            pageSize: S = 20,
                            totalCount: b,
                            totalRequests: v,
                            debounceDurationInMs: C,
                            initialItemCount: j,
                            minInitialItemCount: A = 20,
                            handleRef: g,
                            alwaysShowScrollbar: y = !1,
                            testId: I,
                            isMobileLayout: T = !1,
                            shouldTriggerRangeChangedOn: f,
                            ...k
                        } = e,
                        [E, P] = (0, o.useState)(!1),
                        N = (0, o.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    P(e);
                                }, 100),
                            [],
                        ),
                        R = (0, o.useMemo)(() => {
                            var e, t;
                            return T
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == a ? void 0 : a.List) ? e : l,
                                      Item: null == a ? void 0 : a.Item,
                                      ScrollSeekPlaceholder: null == a ? void 0 : a.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == a ? void 0 : a.List) ? t : l,
                                      Item: null == a ? void 0 : a.Item,
                                      Header: null == a ? void 0 : a.Header,
                                      Footer: null == a ? void 0 : a.Footer,
                                      ScrollSeekPlaceholder: null == a ? void 0 : a.ScrollSeekPlaceholder,
                                  };
                        }, [a, v, T]),
                        L = j ? Math.min(j, A) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, i.$)(d().root, { [d().root_scrolling]: E || y, [d().root_notScrolling]: !E && !y }, t),
                        'data-test-id': I,
                        children: [
                            T && (null == a ? void 0 : a.Header) && a.Header(),
                            (0, r.jsx)(p, {
                                overscan: x,
                                components: R,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: N,
                                itemContent: _,
                                scrollerRef: g,
                                totalCount: b,
                                pageSize: S,
                                onPageHandler: n,
                                onRangeHandler: c,
                                debounceDurationInMs: C,
                                initialItemCount: L,
                                shouldTriggerRangeChangedOn: f,
                                ...k,
                            }),
                            T && (null == a ? void 0 : a.Footer) && a.Footer(),
                        ],
                    });
                };
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
        96537: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 68296));
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
            a.d(t, { C8: () => s, UC: () => o, dM: () => n, uV: () => l });
            var r = a(89916),
                i = a(67990);
            let s = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                o = (e) => (e.uid ? 'authorized' : 'no-uid'),
                n = (e) => {
                    if (!(e instanceof r.m5) || !(0, i.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, i.N)(e.cause)) return;
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
                6925, 8655, 7437, 9079, 4814, 1833, 3469, 8194, 1191, 918, 1041, 9232, 3377, 4520, 7627, 3130, 917, 1881, 4716, 4201, 9192, 1639, 4863, 4604, 2951, 1445,
                1138, 893, 6252, 727, 6706, 4771, 1311, 5201, 3075, 8832, 6904, 4495, 2058, 3578, 8628, 4827, 8283, 1800, 5151, 7746, 1223, 1848, 9907, 4732, 9087, 3979,
                6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 818, 7053, 4322, 7934, 1372, 812, 6820, 9473, 1986, 7555, 9719, 763, 2670, 7358,
            ],
            () => e((e.s = 96537)),
        ),
            (_N_E = e.O()));
    },
]);
