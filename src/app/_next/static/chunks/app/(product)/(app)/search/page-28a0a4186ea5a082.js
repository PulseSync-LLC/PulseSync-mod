(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2839, 7307],
    {
        1053: (e, t, s) => {
            'use strict';
            var i;
            s.d(t, { $: () => i }),
                (function (e) {
                    (e.TOP = 'top'),
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
                        (e.CONCERT = 'concert');
                })(i || (i = {}));
        },
        3314: (e) => {
            e.exports = { root: 'SearchBestResultsAlbumBlock_root__j7nJ4' };
        },
        3435: (e, t, s) => {
            'use strict';
            s.d(t, { p: () => U });
            var i = s(32290),
                a = s(63618),
                r = s(96103),
                o = s(55178),
                n = s(60900),
                l = s(39407),
                c = s(21732),
                d = s(54862),
                u = s(63423),
                h = s(84638),
                m = s(15299),
                _ = s(71926),
                p = s(54667),
                x = s(45477),
                b = s(75582),
                C = s(55332),
                v = s(95329),
                S = s(53022),
                g = s(57594),
                j = s(58008),
                A = s(49399),
                y = s(90357),
                E = s(28563),
                f = s(89020),
                I = s(45180),
                T = s(8946),
                P = s(45257),
                k = s(14934),
                R = s(82586),
                N = s(86269),
                L = s(23352),
                M = s(11323);
            let w = { src: '/_next/static/media/artist.c49b2bfa.png' };
            var O = s(22800),
                B = s.n(O);
            let z = (0, r.PA)((e) => {
                let { className: t, artist: s } = e,
                    { ref: r, intersectionPropertyId: n } = (0, L.n)(),
                    {
                        wizard: { likeArtist: l, isArtistLiked: d },
                    } = (0, g.g)(),
                    { id: h, name: m, coverUri: p } = s,
                    x = (0, o.useCallback)(() => {
                        l(h);
                    }, [l, h]),
                    b = d(h),
                    C = (0, o.useMemo)(
                        () =>
                            (0, i.jsx)(N.t, {
                                className: B().cover,
                                radius: 'round',
                                'data-test-id': c.e8.wizard.ARTIST_CARD,
                                children: (0, i.jsxs)(u.$, {
                                    radius: 'round',
                                    className: B().coverBlock,
                                    variant: 'default',
                                    onClick: x,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': b,
                                    'aria-label': m,
                                    'data-test-id': c.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, i.jsx)(M.B, { className: B().image, src: p || w.src, fit: 'cover', alt: m, withAvatarReplace: !!p, 'aria-hidden': !0 }),
                                        (0, i.jsx)('div', {
                                            className: (0, a.$)(B().like),
                                            children: (0, i.jsx)(R.I, { variant: 'likedVariant', size: 's', className: B().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [b, p, m, x],
                    );
                return (0, i.jsx)(k.MN, {
                    ref: r,
                    className: (0, a.$)(B().root, { [B().root_selected]: b }, t),
                    textPosition: 'center',
                    title: (0, i.jsx)(_.HL, {
                        'aria-hidden': !0,
                        className: B().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.e8.wizard.ARTIST_CARD_NAME,
                        children: m,
                    }),
                    'data-intersection-property-id': n,
                    view: C,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                });
            });
            var D = s(6680),
                H = s.n(D);
            let V = { [p.u.Desktop]: { start: 40, end: 40 }, [p.u.Mobile]: { start: 40, end: 40 } },
                U = (0, r.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: s } = (0, n.A)(),
                        {
                            wizard: r,
                            settings: { isMobile: p, isWindowsApplication: k, isLinuxApplication: R },
                            user: N,
                        } = (0, g.g)(),
                        { notify: L } = (0, b.l)(),
                        M = (0, S.z)(),
                        [w, O] = (0, d.d)(),
                        B = (0, m.zb)(0),
                        D = (0, o.useMemo)(
                            () => (e) => {
                                var t;
                                if (!B.onTabChange || e === B.value) return;
                                B.onTabChange(e);
                                let s = null == (t = r.genres[e]) ? void 0 : t.id;
                                r.setFilter(s), null == w || w.scrollTo({ top: 0 });
                            },
                            [r, B, w],
                        ),
                        U = (0, o.useMemo)(() => {
                            switch (r.selectedArtistsCounter) {
                                case 0:
                                    return s({ id: 'wizard.button-tune' });
                                case 1:
                                    return s({ id: 'wizard.button-little-more' });
                                case 2:
                                    return s({ id: 'wizard.button-one-more' });
                                default:
                                    return s({ id: 'wizard.button-done' });
                            }
                        }, [r.selectedArtistsCounter, s]),
                        W = (0, o.useMemo)(
                            () =>
                                (0, i.jsx)(T.wI, {
                                    className: H().tabCarousel,
                                    ...B,
                                    onTabChange: D,
                                    isShimmerVisible: r.loadingState === A.G.PENDING,
                                    shimmer: (0, i.jsx)(T.zr, { isActive: !0, className: H().tabCarousel, shimmerClassName: H().tabShimmer, count: p ? 2 : 3 }),
                                    children: r.genres.map((e, t) =>
                                        (0, i.jsx)(
                                            I.o,
                                            {
                                                className: (0, a.$)(H().filter, { [H().filter_selected]: t === B.value }),
                                                titleClassName: H().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [r.genres, B, D, r.loadingState, p],
                        ),
                        G = (0, o.useCallback)(() => {
                            r.getArtists(60);
                        }, [r]);
                    (0, o.useEffect)(() => {
                        r.filter && G();
                    }, [r.filter, G]);
                    let $ = (0, o.useCallback)(async () => {
                        await r.getGenres(), G();
                    }, [r, G]);
                    (0, o.useEffect)(() => {
                        r.modal.isOpened && $();
                    }, [r, r.modal.isOpened, $]),
                        (0, o.useEffect)(() => {
                            r.loadingState === A.G.REJECT &&
                                (r.modal.close(), L((0, i.jsx)(y.h, { error: s({ id: 'error-messages.error-load-wizard' }) }), { containerId: x.u.ERROR }));
                        }, [r, r.getGenres, r.loadingState, s, L]);
                    let Y = (0, o.useMemo)(
                            () =>
                                (0, i.jsx)(_.DZ, {
                                    className: H().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': c.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, i.jsx)(l.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        X = (0, o.useCallback)(async () => {
                            r.selectedArtistsCounter < 3 ? r.getArtists() : (await r.finish()) === j.F.OK && (await N.getSettings(), await (null == t ? void 0 : t())),
                                r.modal.close();
                        }, [t, N, r]);
                    return (
                        (0, o.useEffect)(
                            () => (
                                null == M ||
                                    M.addShortcutsListener(v.M.MAIN, C.l.CLOSE, () => {
                                        r.modal.isOpened && X();
                                    }),
                                () => {
                                    null == M || M.removeShortcutsListener(v.M.MAIN, C.l.CLOSE);
                                }
                            ),
                            [X, r.modal.isOpened, M],
                        ),
                        (0, i.jsxs)(h.a, {
                            className: (0, a.$)(H().root, { [H().root_withCustomControls]: k || R }),
                            headerClassName: H().modalHeader,
                            contentClassName: H().modalContent,
                            open: r.modal.isOpened,
                            onOpenChange: r.modal.onOpenChange,
                            onClose: X,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: s({ id: 'interface-actions.close' }),
                            closeButtonProps: { 'data-test-id': c.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON },
                            'data-test-id': c.e8.wizard.WIZARD_MODAL,
                            header: p && Y,
                            escapeKey: !1,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: H().wrapper,
                                    children: [
                                        !p && Y,
                                        (0, i.jsx)(_.HL, {
                                            className: H().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, i.jsx)(l.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, i.jsx)(u.$, {
                                            className: H().button,
                                            size: p ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: X,
                                            disabled: r.selectedArtistsCounter < 3,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, i.jsx)(_.HL, { variant: 'div', size: 'm', weight: 'medium', children: U }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)('div', {
                                    className: H().mainContainer,
                                    children: [
                                        (0, i.jsx)(E.F, { className: H().carousel, carouselElement: W, scrollPadding: V }),
                                        (0, i.jsx)(P.$, {
                                            withFooter: !1,
                                            className: (0, a.$)(H().scrollContainer, H().important),
                                            itemContentCallback: (e) => {
                                                let t = r.artistsByGenre[e];
                                                if (!t) {
                                                    let e = s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.artist' }) });
                                                    return (0, i.jsx)(f.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, i.jsx)(z, { artist: t }, t.id);
                                            },
                                            data: r.artistsByGenre,
                                            endReached: G,
                                            listClassName: H().content,
                                            itemClassName: H().item,
                                            pageSize: 60,
                                            handleRef: O,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        3735: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 95698));
        },
        6680: (e) => {
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
        12618: (e) => {
            e.exports = { root: 'SearchBestResultsBookChapterBlock_root__2JjcF', cover: 'SearchBestResultsBookChapterBlock_cover__I2CYO' };
        },
        15597: (e) => {
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
        17330: (e, t, s) => {
            'use strict';
            s.d(t, { y: () => i });
            let i = (e) => (e ? e.replace('-', '_') : null);
        },
        19983: (e) => {
            e.exports = { root: 'SearchBestResults_root__12Tlp', root_withSingleResult: 'SearchBestResults_root_withSingleResult__qAMCB' };
        },
        22800: (e) => {
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
        24798: (e) => {
            e.exports = { root: 'VirtualList_root__kEvf_' };
        },
        28531: (e, t, s) => {
            'use strict';
            s.d(t, { t: () => p });
            var i = s(32290),
                a = s(21916),
                r = s(55178),
                o = s(60900),
                n = s(39407),
                l = s(91027),
                c = s(45477),
                d = s(75582),
                u = s(20472),
                h = s(57594),
                m = s(58534),
                _ = s(90357);
            let p = (e) => {
                let { user: t, search: s } = (0, h.g)(),
                    { formatMessage: p } = (0, o.A)(),
                    { notify: x } = (0, d.l)(),
                    b = (0, a.useRouter)();
                return (
                    (0, r.useEffect)(() => {
                        s.isEmptyHistory && b.push(u.Z.search.href);
                    }, [s.isEmptyHistory, b]),
                    (0, l.c)(() => {
                        try {
                            t.account.data.uid && s.clearHistory({ userId: t.account.data.uid }),
                                x((0, i.jsx)(m.$, { message: (0, i.jsx)(n.A, { id: 'search.cleared-history' }) }), { containerId: c.u.INFO }),
                                e && e(),
                                b.push(u.Z.search.href);
                        } catch (e) {
                            x((0, i.jsx)(_.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: c.u.ERROR });
                        }
                    })
                );
            };
        },
        31286: (e, t, s) => {
            'use strict';
            s.d(t, { w: () => r });
            var i = s(55178),
                a = s(91027);
            let r = () => {
                let e = (0, i.useRef)(new Map());
                return (
                    (0, i.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, a.c)((t, s) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, s), s)))
                );
            };
        },
        34326: (e, t, s) => {
            'use strict';
            s.d(t, { U: () => c });
            var i = s(32290),
                a = s(63618),
                r = s(96103),
                o = s(55178),
                n = s(62366),
                l = s.n(n);
            let c = (0, r.PA)((e) => {
                let { indices: t, virtualItem: s, renderItemByIndex: r, columnClassName: n, className: c, resizeObserver: d, scrollMargin: u } = e,
                    h = (0, o.useRef)(null),
                    m = t[s.index],
                    _ = { '--virtual-grid-row-vertical-offset': ''.concat(s.start - u, 'px') };
                return (
                    (0, o.useEffect)(() => {
                        let e = h.current;
                        if (e)
                            return (
                                null == d || d.observe(e),
                                () => {
                                    null == d || d.unobserve(e);
                                }
                            );
                    }, [d]),
                    (0, i.jsx)('div', {
                        'data-index': s.index,
                        ref: h,
                        style: _,
                        className: (0, a.$)(l().root, c),
                        children: null == m ? void 0 : m.map((e) => (0, i.jsx)('div', { className: n, children: r(e) }, ''.concat(s.key, '_').concat(e))),
                    })
                );
            });
        },
        36427: (e) => {
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
        36466: (e) => {
            e.exports = { root: 'SearchBestResultsPlaylistBlock_root__HLU50' };
        },
        38007: (e) => {
            e.exports = {
                root: 'SearchHistoryBlockDesktop_root__jKICZ',
                controls: 'SearchHistoryBlockDesktop_controls__5JPBt',
                header: 'SearchHistoryBlockDesktop_header__zOALK',
                clearButton: 'SearchHistoryBlockDesktop_clearButton__kN4Nk',
                content: 'SearchHistoryBlockDesktop_content__doQsC',
            };
        },
        41150: (e) => {
            e.exports = { root: 'VirtualGrid_root__nSEzJ', column: 'VirtualGrid_column__P8hJp', row: 'VirtualGrid_row__PL5V_' };
        },
        41267: (e) => {
            e.exports = { root: 'SearchCorrectedText_root__ZM2f2', link: 'SearchCorrectedText_link__eORMG', text: 'SearchCorrectedText_text__HKgvL' };
        },
        42046: (e) => {
            e.exports = { root: 'SearchBestResultsRecentReleaseBlock_root___1Eoa' };
        },
        42399: (e) => {
            e.exports = { root: 'SearchConcert_root__1DJPQ' };
        },
        43355: (e) => {
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
        43762: (e) => {
            e.exports = { root: 'SearchBestResultsTrackBlock_root__Qsh_f', cover: 'SearchBestResultsTrackBlock_cover__aCixO' };
        },
        46019: (e) => {
            e.exports = {
                root: 'MixedEntitiesBlock_root__Zs8l2',
                controls: 'MixedEntitiesBlock_controls__mOhq7',
                item: 'MixedEntitiesBlock_item__uRvxc',
                item_withMultipleColumns: 'MixedEntitiesBlock_item_withMultipleColumns__ziUqI',
                column: 'MixedEntitiesBlock_column__sHpUC',
            };
        },
        47852: (e) => {
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
        51291: (e) => {
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
        53775: (e) => {
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
        55332: (e, t, s) => {
            'use strict';
            s.d(t, { l: () => i });
            var i = (function (e) {
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
        57941: (e, t, s) => {
            'use strict';
            var i;
            s.d(t, { r: () => i }),
                (function (e) {
                    (e.TRACK = 'best_result_track'),
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
                        (e.BOOK_CHAPTER = 'best_result_book_chapter');
                })(i || (i = {}));
        },
        58636: (e) => {
            e.exports = {
                carouselBlock: 'MixesCarousel_carouselBlock__ZpMU2',
                carouselHeader: 'MixesCarousel_carouselHeader__6mMHX',
                mixItem: 'MixesCarousel_mixItem__YNSsB',
            };
        },
        62366: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        66162: (e, t, s) => {
            'use strict';
            s.d(t, { G: () => p });
            var i = s(32290),
                a = s(16172),
                r = s(69319),
                o = s(77223),
                n = s(88446),
                l = s(42383),
                c = s(50476),
                d = s(4664),
                u = s(85015),
                h = s(20183),
                m = s(26042),
                _ = s(75265);
            let p = (e) => {
                let { item: t, index: s, pageId: p, sendSearchFeedback: x, blockPosition: b = 0, objectPosX: C, objectPosY: v, objectsCount: S } = e;
                switch (t.type) {
                    case r.n.PODCAST_EPISODE:
                        return (0, i.jsx)(
                            m.B,
                            {
                                objectType: a.ky.PodcastEpisode,
                                objectId: t.data.id,
                                objectPosX: C,
                                objectPosY: v,
                                objectsCount: S,
                                children: (0, i.jsx)(d.c, { pageId: p, track: t.data }),
                            },
                            t.data.id,
                        );
                    case r.n.UGC_TRACK:
                        return (0, i.jsx)(d.c, { pageId: p, track: t.data });
                    case r.n.TRACK:
                        return (0, i.jsx)(
                            m.B,
                            {
                                objectType: a.ky.Track,
                                objectId: t.data.id,
                                objectPosX: C,
                                objectPosY: v,
                                objectsCount: S,
                                children: (0, i.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: x, id: t.data.entityId, type: o.o.TRACK, blockPosition: b, position: s },
                                    children: (0, i.jsx)(d.c, { pageId: p, track: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case r.n.ARTIST:
                        return (0, i.jsx)(
                            m.B,
                            {
                                objectType: a.ky.Artist,
                                objectId: t.data.id,
                                objectPosX: C,
                                objectPosY: v,
                                objectsCount: S,
                                children: (0, i.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: x, id: t.data.id, type: o.o.ARTIST, blockPosition: b, position: s },
                                    children: (0, i.jsx)(l.c, { pageId: p, artist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case r.n.PLAYLIST:
                        return (0, i.jsx)(
                            m.B,
                            {
                                objectType: a.ky.Playlist,
                                objectId: t.data.id,
                                objectPosX: C,
                                objectPosY: v,
                                objectsCount: S,
                                children: (0, i.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: x, id: t.data.id, type: o.o.PLAYLIST, blockPosition: b, position: s },
                                    children: (0, i.jsx)(c.v, { pageId: p, playlist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case r.n.PODCAST:
                        return (0, i.jsx)(
                            m.B,
                            {
                                objectType: a.ky.Podcast,
                                objectId: String(t.data.id),
                                objectPosX: C,
                                objectPosY: v,
                                objectsCount: S,
                                children: (0, i.jsx)(
                                    _.N.Provider,
                                    {
                                        value: { sendSearchFeedback: x, id: t.data.id, type: o.o.PODCAST, blockPosition: b, position: s },
                                        children: (0, i.jsx)(n.M, { pageId: p, album: t.data }),
                                    },
                                    t.data.id,
                                ),
                            },
                            t.data.id,
                        );
                    case r.n.ALBUM:
                        return (0, i.jsx)(
                            m.B,
                            {
                                objectType: a.ky.Album,
                                objectId: String(t.data.id),
                                objectPosX: C,
                                objectPosY: v,
                                objectsCount: S,
                                children: (0, i.jsx)(
                                    _.N.Provider,
                                    {
                                        value: { sendSearchFeedback: x, id: t.data.id, type: o.o.ALBUM, blockPosition: b, position: s },
                                        children: (0, i.jsx)(n.M, { pageId: p, album: t.data }),
                                    },
                                    t.data.id,
                                ),
                            },
                            t.data.id,
                        );
                    case r.n.WAVE: {
                        let e = t.data;
                        return (0, i.jsx)(
                            m.B,
                            {
                                objectType: a.ky.Wave,
                                objectId: e.stationId,
                                objectPosX: C,
                                objectPosY: v,
                                objectsCount: S,
                                children: (0, i.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: x, id: e.seedsId, type: o.o.WAVE, blockPosition: b, position: s },
                                    children: (0, i.jsx)(h.H, { vibe: e, cover: e.cover, description: e.description, agentVariant: u.h.SMALL }),
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
        66418: (e) => {
            e.exports = {
                root: 'SearchBestResultsUpcomingBlock_root__baVsK',
                important: 'SearchBestResultsUpcomingBlock_important__v_XW8',
                cover: 'SearchBestResultsUpcomingBlock_cover__c45Xf',
                coverImage: 'SearchBestResultsUpcomingBlock_coverImage___mLf5',
                lockIcon: 'SearchBestResultsUpcomingBlock_lockIcon__yaBf_',
                likeButton: 'SearchBestResultsUpcomingBlock_likeButton__Srh_v',
            };
        },
        69150: (e) => {
            e.exports = {
                root: 'SearchBestResultsVibeBlock_root__KmJ3e',
                important: 'SearchBestResultsVibeBlock_important__Zez1s',
                coverClassName: 'SearchBestResultsVibeBlock_coverClassName__jv0_I',
            };
        },
        69319: (e, t, s) => {
            'use strict';
            var i;
            s.d(t, { n: () => i }),
                (function (e) {
                    (e.ALL = 'all'),
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
                        (e.CONCERT = 'concert');
                })(i || (i = {}));
        },
        71435: (e) => {
            e.exports = {
                button: 'SearchHistoryBlockMobile_button__Wh_Q6',
                header: 'SearchHistoryBlockMobile_header__Lx4On',
                mixedEntitiesBlock: 'SearchHistoryBlockMobile_mixedEntitiesBlock__cJ3o_',
                buttonContainer: 'SearchHistoryBlockMobile_buttonContainer__IppED',
            };
        },
        72504: (e) => {
            e.exports = { block: 'SearchBestResultsCommon_block__v11At', cover: 'SearchBestResultsCommon_cover__ZHlYo' };
        },
        73007: (e) => {
            e.exports = { root: 'EntitiesListShimmer_root__Mq_tK' };
        },
        73722: (e) => {
            e.exports = { root: 'SearchBestResultsConcertBlock_root__JDy_y' };
        },
        77307: (e, t, s) => {
            'use strict';
            s.d(t, { Te: () => A, XW: () => y });
            var i = s(55178),
                a = s(51767);
            function r(e, t, s) {
                let i,
                    a = s.initialDeps ?? [];
                function r() {
                    var r, o, n, l;
                    let c, d;
                    s.key && (null == (r = s.debug) ? void 0 : r.call(s)) && (c = Date.now());
                    let u = e();
                    if (!(u.length !== a.length || u.some((e, t) => a[t] !== e))) return i;
                    if (
                        ((a = u),
                        s.key && (null == (o = s.debug) ? void 0 : o.call(s)) && (d = Date.now()),
                        (i = t(...u)),
                        s.key && (null == (n = s.debug) ? void 0 : n.call(s)))
                    ) {
                        let e = Math.round((Date.now() - c) * 100) / 100,
                            t = Math.round((Date.now() - d) * 100) / 100,
                            i = t / 16,
                            a = (e, t) => {
                                for (e = String(e); e.length < t; ) e = ' ' + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${a(t, 5)} /${a(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * i, 120))}deg 100% 31%);`,
                            null == s ? void 0 : s.key,
                        );
                    }
                    return null == (l = null == s ? void 0 : s.onChange) || l.call(s, i), i;
                }
                return (
                    (r.updateDeps = (e) => {
                        a = e;
                    }),
                    r
                );
            }
            function o(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let n = (e, t, s) => {
                    let i;
                    return function (...a) {
                        e.clearTimeout(i), (i = e.setTimeout(() => t.apply(this, a), s));
                    };
                },
                l = (e) => e,
                c = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        s = Math.min(e.endIndex + e.overscan, e.count - 1),
                        i = [];
                    for (let e = t; e <= s; e++) i.push(e);
                    return i;
                },
                d = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let a = (e) => {
                        let { width: s, height: i } = e;
                        t({ width: Math.round(s), height: Math.round(i) });
                    };
                    if ((a(s.getBoundingClientRect()), !i.ResizeObserver)) return () => {};
                    let r = new i.ResizeObserver((t) => {
                        let i = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void a({ width: t.inlineSize, height: t.blockSize });
                            }
                            a(s.getBoundingClientRect());
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
                    });
                    return (
                        r.observe(s, { box: 'border-box' }),
                        () => {
                            r.unobserve(s);
                        }
                    );
                },
                u = { passive: !0 },
                h = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = () => {
                        t({ width: s.innerWidth, height: s.innerHeight });
                    };
                    return (
                        i(),
                        s.addEventListener('resize', i, u),
                        () => {
                            s.removeEventListener('resize', i);
                        }
                    );
                },
                m = 'undefined' == typeof window || 'onscrollend' in window,
                _ = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let a = 0,
                        r =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : n(
                                      i,
                                      () => {
                                          t(a, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        o = (i) => () => {
                            let { horizontal: o, isRtl: n } = e.options;
                            (a = o ? s.scrollLeft * ((n && -1) || 1) : s.scrollTop), r(), t(a, i);
                        },
                        l = o(!0),
                        c = o(!1);
                    c(), s.addEventListener('scroll', l, u);
                    let d = e.options.useScrollendEvent && m;
                    return (
                        d && s.addEventListener('scrollend', c, u),
                        () => {
                            s.removeEventListener('scroll', l), d && s.removeEventListener('scrollend', c);
                        }
                    );
                },
                p = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let a = 0,
                        r =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : n(
                                      i,
                                      () => {
                                          t(a, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        o = (i) => () => {
                            (a = s[e.options.horizontal ? 'scrollX' : 'scrollY']), r(), t(a, i);
                        },
                        l = o(!0),
                        c = o(!1);
                    c(), s.addEventListener('scroll', l, u);
                    let d = e.options.useScrollendEvent && m;
                    return (
                        d && s.addEventListener('scrollend', c, u),
                        () => {
                            s.removeEventListener('scroll', l), d && s.removeEventListener('scrollend', c);
                        }
                    );
                },
                x = (e, t, s) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[s.options.horizontal ? 'inlineSize' : 'blockSize']);
                    }
                    return Math.round(e.getBoundingClientRect()[s.options.horizontal ? 'width' : 'height']);
                },
                b = (e, { adjustments: t = 0, behavior: s }, i) => {
                    var a, r;
                    null == (r = null == (a = i.scrollElement) ? void 0 : a.scrollTo) || r.call(a, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                },
                C = (e, { adjustments: t = 0, behavior: s }, i) => {
                    var a, r;
                    null == (r = null == (a = i.scrollElement) ? void 0 : a.scrollTo) || r.call(a, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                };
            class v {
                constructor(e) {
                    (this.unsubs = []),
                        (this.scrollElement = null),
                        (this.targetWindow = null),
                        (this.isScrolling = !1),
                        (this.scrollToIndexTimeoutId = null),
                        (this.measurementsCache = []),
                        (this.itemSizeCache = new Map()),
                        (this.pendingMeasuredCacheIndexes = []),
                        (this.scrollRect = null),
                        (this.scrollOffset = null),
                        (this.scrollDirection = null),
                        (this.scrollAdjustments = 0),
                        (this.elementsCache = new Map()),
                        (this.observer = (() => {
                            let e = null,
                                t = () =>
                                    e ||
                                    (this.targetWindow && this.targetWindow.ResizeObserver
                                        ? (e = new this.targetWindow.ResizeObserver((e) => {
                                              e.forEach((e) => {
                                                  let t = () => {
                                                      this._measureElement(e.target, e);
                                                  };
                                                  this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t) : t();
                                              });
                                          }))
                                        : null);
                            return {
                                disconnect: () => {
                                    var s;
                                    null == (s = t()) || s.disconnect(), (e = null);
                                },
                                observe: (e) => {
                                    var s;
                                    return null == (s = t()) ? void 0 : s.observe(e, { box: 'border-box' });
                                },
                                unobserve: (e) => {
                                    var s;
                                    return null == (s = t()) ? void 0 : s.unobserve(e);
                                },
                            };
                        })()),
                        (this.range = null),
                        (this.setOptions = (e) => {
                            Object.entries(e).forEach(([t, s]) => {
                                void 0 === s && delete e[t];
                            }),
                                (this.options = {
                                    debug: !1,
                                    initialOffset: 0,
                                    overscan: 1,
                                    paddingStart: 0,
                                    paddingEnd: 0,
                                    scrollPaddingStart: 0,
                                    scrollPaddingEnd: 0,
                                    horizontal: !1,
                                    getItemKey: l,
                                    rangeExtractor: c,
                                    onChange: () => {},
                                    measureElement: x,
                                    initialRect: { width: 0, height: 0 },
                                    scrollMargin: 0,
                                    gap: 0,
                                    indexAttribute: 'data-index',
                                    initialMeasurementsCache: [],
                                    lanes: 1,
                                    isScrollingResetDelay: 150,
                                    enabled: !0,
                                    isRtl: !1,
                                    useScrollendEvent: !1,
                                    useAnimationFrameWithResizeObserver: !1,
                                    ...e,
                                });
                        }),
                        (this.notify = (e) => {
                            var t, s;
                            null == (s = (t = this.options).onChange) || s.call(t, this, e);
                        }),
                        (this.maybeNotify = r(
                            () => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]),
                            (e) => {
                                this.notify(e);
                            },
                            {
                                key: !1,
                                debug: () => this.options.debug,
                                initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null],
                            },
                        )),
                        (this.cleanup = () => {
                            this.unsubs.filter(Boolean).forEach((e) => e()),
                                (this.unsubs = []),
                                this.observer.disconnect(),
                                (this.scrollElement = null),
                                (this.targetWindow = null);
                        }),
                        (this._didMount = () => () => {
                            this.cleanup();
                        }),
                        (this._willUpdate = () => {
                            var e;
                            let t = this.options.enabled ? this.options.getScrollElement() : null;
                            if (this.scrollElement !== t) {
                                if ((this.cleanup(), !t)) return void this.maybeNotify();
                                (this.scrollElement = t),
                                    this.scrollElement && 'ownerDocument' in this.scrollElement
                                        ? (this.targetWindow = this.scrollElement.ownerDocument.defaultView)
                                        : (this.targetWindow = (null == (e = this.scrollElement) ? void 0 : e.window) ?? null),
                                    this.elementsCache.forEach((e) => {
                                        this.observer.observe(e);
                                    }),
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 }),
                                    this.unsubs.push(
                                        this.options.observeElementRect(this, (e) => {
                                            (this.scrollRect = e), this.maybeNotify();
                                        }),
                                    ),
                                    this.unsubs.push(
                                        this.options.observeElementOffset(this, (e, t) => {
                                            (this.scrollAdjustments = 0),
                                                (this.scrollDirection = t ? (this.getScrollOffset() < e ? 'forward' : 'backward') : null),
                                                (this.scrollOffset = e),
                                                (this.isScrolling = t),
                                                this.maybeNotify();
                                        }),
                                    );
                            }
                        }),
                        (this.getSize = () =>
                            this.options.enabled
                                ? ((this.scrollRect = this.scrollRect ?? this.options.initialRect), this.scrollRect[this.options.horizontal ? 'width' : 'height'])
                                : ((this.scrollRect = null), 0)),
                        (this.getScrollOffset = () =>
                            this.options.enabled
                                ? ((this.scrollOffset =
                                      this.scrollOffset ?? ('function' == typeof this.options.initialOffset ? this.options.initialOffset() : this.options.initialOffset)),
                                  this.scrollOffset)
                                : ((this.scrollOffset = null), 0)),
                        (this.getFurthestMeasurement = (e, t) => {
                            let s = new Map(),
                                i = new Map();
                            for (let a = t - 1; a >= 0; a--) {
                                let t = e[a];
                                if (s.has(t.lane)) continue;
                                let r = i.get(t.lane);
                                if ((null == r || t.end > r.end ? i.set(t.lane, t) : t.end < r.end && s.set(t.lane, !0), s.size === this.options.lanes)) break;
                            }
                            return i.size === this.options.lanes
                                ? Array.from(i.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = r(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, s, i, a) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: s, getItemKey: i, enabled: a }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = r(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: s, getItemKey: i, enabled: a }, r) => {
                                if (!a) return (this.measurementsCache = []), this.itemSizeCache.clear(), [];
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let o = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let n = this.measurementsCache.slice(0, o);
                                for (let a = o; a < e; a++) {
                                    let e = i(a),
                                        o = 1 === this.options.lanes ? n[a - 1] : this.getFurthestMeasurement(n, a),
                                        l = o ? o.end + this.options.gap : t + s,
                                        c = r.get(e),
                                        d = 'number' == typeof c ? c : this.options.estimateSize(a),
                                        u = l + d,
                                        h = o ? o.lane : a % this.options.lanes;
                                    n[a] = { index: a, start: l, size: d, end: u, key: e, lane: h };
                                }
                                return (this.measurementsCache = n), n;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = r(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, s, i) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: s, lanes: i }) {
                                              let a = e.length - 1,
                                                  r = S(0, a, (t) => e[t].start, s),
                                                  o = r;
                                              if (1 === i) for (; o < a && e[o].end < s + t; ) o++;
                                              else if (i > 1) {
                                                  let n = Array(i).fill(0);
                                                  for (; o < a && n.some((e) => e < s + t); ) {
                                                      let t = e[o];
                                                      (n[t.lane] = t.end), o++;
                                                  }
                                                  let l = Array(i).fill(s + t);
                                                  for (; r > 0 && l.some((e) => e >= s); ) {
                                                      let t = e[r];
                                                      (l[t.lane] = t.start), r--;
                                                  }
                                                  (r = Math.max(0, r - (r % i))), (o = Math.min(a, o + (i - 1 - (o % i))));
                                              }
                                              return { startIndex: r, endIndex: o };
                                          })({ measurements: e, outerSize: t, scrollOffset: s, lanes: i })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = r(
                            () => {
                                let e = null,
                                    t = null,
                                    s = this.calculateRange();
                                return (
                                    s && ((e = s.startIndex), (t = s.endIndex)),
                                    this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                                    [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
                                );
                            },
                            (e, t, s, i, a) => (null === i || null === a ? [] : e({ startIndex: i, endIndex: a, overscan: t, count: s })),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (e) => {
                            let t = this.options.indexAttribute,
                                s = e.getAttribute(t);
                            return s ? parseInt(s, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
                        }),
                        (this._measureElement = (e, t) => {
                            let s = this.indexFromElement(e),
                                i = this.measurementsCache[s];
                            if (!i) return;
                            let a = i.key,
                                r = this.elementsCache.get(a);
                            r !== e && (r && this.observer.unobserve(r), this.observer.observe(e), this.elementsCache.set(a, e)),
                                e.isConnected && this.resizeItem(s, this.options.measureElement(e, t, this));
                        }),
                        (this.resizeItem = (e, t) => {
                            let s = this.measurementsCache[e];
                            if (!s) return;
                            let i = t - (this.itemSizeCache.get(s.key) ?? s.size);
                            0 !== i &&
                                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(s, i, this)
                                    : s.start < this.getScrollOffset() + this.scrollAdjustments) &&
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: (this.scrollAdjustments += i), behavior: void 0 }),
                                this.pendingMeasuredCacheIndexes.push(s.index),
                                (this.itemSizeCache = new Map(this.itemSizeCache.set(s.key, t))),
                                this.notify(!1));
                        }),
                        (this.measureElement = (e) => {
                            if (!e)
                                return void this.elementsCache.forEach((e, t) => {
                                    e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t));
                                });
                            this._measureElement(e, void 0);
                        }),
                        (this.getVirtualItems = r(
                            () => [this.getVirtualIndexes(), this.getMeasurements()],
                            (e, t) => {
                                let s = [];
                                for (let i = 0, a = e.length; i < a; i++) {
                                    let a = t[e[i]];
                                    s.push(a);
                                }
                                return s;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length) return o(t[S(0, t.length - 1, (e) => o(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, s = 0) => {
                            let i = this.getSize(),
                                a = this.getScrollOffset();
                            'auto' === t && (t = e >= a + i ? 'end' : 'start'), 'center' === t ? (e += (s - i) / 2) : 'end' === t && (e -= i);
                            let r = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[r]
                                            : this.scrollElement[r]
                                        : 0) - i,
                                    e,
                                ),
                                0,
                            );
                        }),
                        (this.getOffsetForIndex = (e, t = 'auto') => {
                            e = Math.max(0, Math.min(e, this.options.count - 1));
                            let s = this.measurementsCache[e];
                            if (!s) return;
                            let i = this.getSize(),
                                a = this.getScrollOffset();
                            if ('auto' === t)
                                if (s.end >= a + i - this.options.scrollPaddingEnd) t = 'end';
                                else {
                                    if (!(s.start <= a + this.options.scrollPaddingStart)) return [a, t];
                                    t = 'start';
                                }
                            let r = 'end' === t ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
                            return [this.getOffsetForAlignment(r, t, s.size), t];
                        }),
                        (this.isDynamicMode = () => this.elementsCache.size > 0),
                        (this.cancelScrollToIndex = () => {
                            null !== this.scrollToIndexTimeoutId &&
                                this.targetWindow &&
                                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), (this.scrollToIndexTimeoutId = null));
                        }),
                        (this.scrollToOffset = (e, { align: t = 'start', behavior: s } = {}) => {
                            this.cancelScrollToIndex(),
                                'smooth' === s && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getOffsetForAlignment(e, t), { adjustments: void 0, behavior: s });
                        }),
                        (this.scrollToIndex = (e, { align: t = 'auto', behavior: s } = {}) => {
                            (e = Math.max(0, Math.min(e, this.options.count - 1))),
                                this.cancelScrollToIndex(),
                                'smooth' === s && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.');
                            let i = this.getOffsetForIndex(e, t);
                            if (!i) return;
                            let [a, r] = i;
                            this._scrollToOffset(a, { adjustments: void 0, behavior: s }),
                                'smooth' !== s &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                                        if (((this.scrollToIndexTimeoutId = null), this.elementsCache.has(this.options.getItemKey(e)))) {
                                            let [t] = o(this.getOffsetForIndex(e, r));
                                            1 > Math.abs(t - this.getScrollOffset()) || this.scrollToIndex(e, { align: r, behavior: s });
                                        } else this.scrollToIndex(e, { align: r, behavior: s });
                                    }));
                        }),
                        (this.scrollBy = (e, { behavior: t } = {}) => {
                            this.cancelScrollToIndex(),
                                'smooth' === t && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getScrollOffset() + e, { adjustments: void 0, behavior: t });
                        }),
                        (this.getTotalSize = () => {
                            var e;
                            let t,
                                s = this.getMeasurements();
                            if (0 === s.length) t = this.options.paddingStart;
                            else if (1 === this.options.lanes) t = (null == (e = s[s.length - 1]) ? void 0 : e.end) ?? 0;
                            else {
                                let e = Array(this.options.lanes).fill(null),
                                    i = s.length - 1;
                                for (; i > 0 && e.some((e) => null === e); ) {
                                    let t = s[i];
                                    null === e[t.lane] && (e[t.lane] = t.end), i--;
                                }
                                t = Math.max(...e.filter((e) => null !== e));
                            }
                            return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
                        }),
                        (this._scrollToOffset = (e, { adjustments: t, behavior: s }) => {
                            this.options.scrollToFn(e, { behavior: s, adjustments: t }, this);
                        }),
                        (this.measure = () => {
                            (this.itemSizeCache = new Map()), this.notify(!1);
                        }),
                        this.setOptions(e);
                }
            }
            let S = (e, t, s, i) => {
                    for (; e <= t; ) {
                        let a = ((e + t) / 2) | 0,
                            r = s(a);
                        if (r < i) e = a + 1;
                        else {
                            if (!(r > i)) return a;
                            t = a - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                g = 'undefined' != typeof document ? i.useLayoutEffect : i.useEffect;
            function j(e) {
                let t = i.useReducer(() => ({}), {})[1],
                    s = {
                        ...e,
                        onChange: (s, i) => {
                            var r;
                            i ? (0, a.flushSync)(t) : t(), null == (r = e.onChange) || r.call(e, s, i);
                        },
                    },
                    [r] = i.useState(() => new v(s));
                return r.setOptions(s), g(() => r._didMount(), []), g(() => r._willUpdate()), r;
            }
            function A(e) {
                return j({ observeElementRect: d, observeElementOffset: _, scrollToFn: C, ...e });
            }
            function y(e) {
                return j({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: h,
                    observeElementOffset: p,
                    scrollToFn: b,
                    initialOffset: () => ('undefined' != typeof document ? window.scrollY : 0),
                    ...e,
                });
            }
        },
        78358: (e) => {
            e.exports = { root: 'VirtualListItem_root__j_Qqv' };
        },
        80434: (e) => {
            e.exports = { cover: 'SearchBestResultsClipBlock_cover___5Wwj' };
        },
        80732: (e) => {
            e.exports = { root: 'SearchBestResultsArtistBlock_root__ZLcy4' };
        },
        80846: (e, t, s) => {
            'use strict';
            s.d(t, { k: () => i });
            let i = 36;
        },
        85184: (e) => {
            e.exports = { mixesTitle: 'MixesGrid_mixesTitle__QawnL', mixesGrid: 'MixesGrid_mixesGrid__uZQtt' };
        },
        87768: (e) => {
            e.exports = {
                header: 'SearchPage_header__T2OUM',
                root: 'SearchPage_root__TtwTi',
                root_showFilters: 'SearchPage_root_showFilters__pb2o1',
                input: 'SearchPage_input__7L7wS',
                root_mobile: 'SearchPage_root_mobile__caKC9',
                content: 'SearchPage_content__Ax9D6',
                scrollableContent: 'SearchPage_scrollableContent__qdrWa',
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
                skeletonContainer: 'SearchPage_skeletonContainer__phbvK',
                mixes: 'SearchPage_mixes__yusZB',
            };
        },
        88406: (e, t, s) => {
            'use strict';
            s.d(t, { Q: () => u });
            var i = s(32290),
                a = s(96103),
                r = s(55178),
                o = s(54862),
                n = s(93954),
                l = s(34326),
                c = s(41150),
                d = s.n(c);
            let u = (0, a.PA)((e) => {
                let {
                        count: t,
                        rowGap: s,
                        columnGap: a,
                        getEstimateRowSize: c,
                        minColumnCount: u = 2,
                        minColumnWidth: h,
                        maxColumnWidth: m,
                        maxColumnCount: _,
                        renderItemByIndex: p,
                        onChangeRange: x,
                    } = e,
                    [b, C] = (0, o.d)(),
                    {
                        virtualizer: v,
                        rowResizeObserver: S,
                        columnCount: g,
                        indices: j,
                    } = (0, n.L)({
                        count: t,
                        rowGap: s,
                        columnGap: a,
                        getEstimateRowSize: c,
                        minColumnCount: u,
                        minColumnWidth: h,
                        maxColumnWidth: m,
                        maxColumnCount: _,
                        containerRef: b,
                    });
                (0, r.useEffect)(() => {
                    !v.isScrolling && v.range && (null == x || x(v.range, g));
                }, [x, v.isScrolling, v.range, g]);
                let A = { '--virtual-grid-height': ''.concat(v.getTotalSize(), 'px'), '--virtual-grid-column-count': g };
                return (0, i.jsx)('div', {
                    ref: C,
                    style: A,
                    className: d().root,
                    children: v.getVirtualItems().map((e) =>
                        (0, i.jsx)(
                            l.U,
                            {
                                className: d().row,
                                columnClassName: d().column,
                                virtualItem: e,
                                resizeObserver: S,
                                indices: j,
                                renderItemByIndex: p,
                                scrollMargin: v.options.scrollMargin,
                            },
                            e.key,
                        ),
                    ),
                });
            });
        },
        90475: (e) => {
            e.exports = { root: 'SearchQueryToVibeResults_root__fsXQh' };
        },
        90540: (e) => {
            e.exports = {
                root: 'SearchBestResultsOverviewBlock_root__m1nKx',
                button: 'SearchBestResultsOverviewBlock_button__F2FaR',
                important: 'SearchBestResultsOverviewBlock_important__oLQCU',
            };
        },
        90829: (e, t, s) => {
            'use strict';
            s.d(t, { Z: () => u });
            var i = s(32290),
                a = s(55178),
                r = s(60900),
                o = s(21732),
                n = s(71926),
                l = s(48027),
                c = s(32562),
                d = s(94218);
            let u = (e) => {
                let { textVariant: t, vibeTextVariant: s, ...u } = e,
                    h = (0, a.useId)(),
                    { formatMessage: m } = (0, r.A)(),
                    _ = (0, a.useMemo)(() => {
                        switch (s) {
                            case l.I.ALBUM:
                                return m({ id: 'onboarding.authorize-to-listen-vibe-by-album' }, { br: '\n', nbsp: ' ' });
                            case l.I.ARTIST:
                                return m({ id: 'onboarding.authorize-to-listen-vibe-by-artist' }, { br: '\n', nbsp: ' ' });
                            case l.I.PLAYLIST:
                                return m({ id: 'onboarding.authorize-to-listen-vibe-by-playlist' }, { br: '\n', nbsp: ' ' });
                            case l.I.TRACK:
                                return m({ id: 'onboarding.authorize-to-listen-vibe-by-track' }, { br: '\n', nbsp: ' ' });
                            case l.I.GENRE:
                            case l.I.MICRO_GENRE:
                                return m({ id: 'onboarding.authorize-to-listen-vibe-by-genre' }, { br: '\n', nbsp: ' ' });
                            case l.I.MOOD:
                                return m({ id: 'onboarding.authorize-to-listen-vibe-by-mood' }, { br: '\n', nbsp: ' ' });
                            case l.I.ACTIVITY:
                                return m({ id: 'onboarding.authorize-to-listen-vibe-by-activity' }, { br: '\n', nbsp: ' ' });
                            default:
                                return m({ id: 'onboarding.authorize-to-listen-vibe' }, { br: '\n', nbsp: ' ' });
                        }
                    }, [s, m]),
                    p = (0, a.useMemo)(() => {
                        switch (t) {
                            case 'fullTracks':
                                return m({ id: 'onboarding.authorize-to-listen-full' }, { br: '\n', nbsp: ' ' });
                            case 'changeQuality':
                                return m({ id: 'onboarding.authorize-to-change-quality' }, { br: '\n', nbsp: ' ' });
                            case 'addToCollection':
                                return m({ id: 'onboarding.authorize-to-add-to-collection' }, { br: '\n', nbsp: ' ' });
                            case 'openQueue':
                                return m({ id: 'onboarding.authorize-to-open-queue' }, { br: '\n', nbsp: ' ' });
                            case 'addToQueue':
                                return m({ id: 'onboarding.authorize-to-add-track-to-queue' }, { br: '\n', nbsp: ' ' });
                            case 'like':
                                return m({ id: 'onboarding.authorize-to-like' }, { br: '\n', nbsp: ' ' });
                            case 'dislike':
                                return m({ id: 'onboarding.authorize-to-dislike' }, { br: '\n', nbsp: ' ' });
                            case 'pin':
                                return m({ id: 'onboarding.authorize-to-pin' }, { br: '\n', nbsp: ' ' });
                            case 'sync-lyrics':
                                return m({ id: 'onboarding.authorize-to-view-sync-lyrics' }, { br: '\n', nbsp: ' ' });
                            case 'vibe':
                                return _;
                            default:
                                return '';
                        }
                    }, [m, t, _]);
                return (0, i.jsx)(c.z, {
                    contentElement: (0, i.jsx)(n.HL, { variant: 'div', size: 'l', weight: 'bold', children: p }),
                    buttons: [(0, i.jsx)(d.H, { size: 'xxs' }, h)],
                    renderChildrenText: p,
                    contentProps: { 'data-test-id': o.S7.LOGIN_POPOVER },
                    ...u,
                });
            };
        },
        91090: (e) => {
            e.exports = { root: 'SearchBestResultsNonMusicBlock_root__YagzT' };
        },
        93750: (e, t, s) => {
            'use strict';
            s.d(t, { n: () => _ });
            var i = s(32290),
                a = s(63618),
                r = s(96103),
                o = s(55178),
                n = s(39407),
                l = s(21732),
                c = s(71926),
                d = s(88467),
                u = s(50308),
                h = s(85184),
                m = s.n(h);
            let _ = (0, r.PA)((e) => {
                let { isShimmerVisible: t, isShimmerActive: s, withTitle: r, mixes: h, shimmerCount: _ = 5, className: p } = e,
                    x = (0, o.useMemo)(
                        () =>
                            t
                                ? (0, i.jsx)(u.e, { isActive: s, round: !1, centered: !1, withInfo: !1, count: _ })
                                : h.map((e) => (0, i.jsx)(d.N, { title: e.title, weblink: e.weblink, covers: e.covers, imagesLayoutType: e.imagesLayoutType }, e.id)),
                        [s, t, h, _],
                    );
                return (0, i.jsxs)('div', {
                    'data-test-id': l.e8.mixes.MIXES_GRID_CONTAINER,
                    children: [
                        r &&
                            (0, i.jsx)(c.DZ, {
                                className: m().mixesTitle,
                                size: 's',
                                weight: 'bold',
                                variant: 'h3',
                                'data-test-id': l.e8.mixes.MIXES_GRID_HEADER,
                                children: (0, i.jsx)(n.A, { id: 'entity-names.mixes' }),
                            }),
                        (0, i.jsx)('div', { className: (0, a.$)(m().mixesGrid, p), children: x }),
                    ],
                });
            });
        },
        93954: (e, t, s) => {
            'use strict';
            s.d(t, { L: () => c });
            var i = s(66988),
                a = s(6752),
                r = s(8055),
                o = s(55178);
            let n = (e) => {
                let { minColumnWidth: t, maxColumnWidth: s, containerWidth: i, totalCount: a, columnGap: r, minColumnCount: o, maxColumnCount: n } = e,
                    l = Math.max(1, Math.floor((i + r) / (t + r))),
                    c = Math.max(o, Math.floor((i + r) / ((s + t) * 0.5 + r)));
                for (let e = o; e <= l; e++) {
                    let a = (i - (e - 1) * r) / e;
                    if (a >= t && a <= s) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(a / (c = n ? Math.min(c, n) : c)), columnCount: c };
            };
            var l = s(79248);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: s,
                        rowGap: c,
                        columnGap: d,
                        minColumnWidth: u,
                        maxColumnWidth: h,
                        minColumnCount: m,
                        maxColumnCount: _,
                        containerRef: p,
                    } = e,
                    { rowCount: x, columnCount: b } = ((e) => {
                        let { containerRef: t, minColumnCount: s, maxColumnWidth: i, minColumnWidth: a, totalCount: l, columnGap: c, maxColumnCount: d } = e,
                            [u, h] = (0, o.useState)({ rowCount: 0, columnCount: 0 }),
                            m = (0, o.useRef)(null),
                            _ = (0, o.useMemo)(
                                () =>
                                    (0, r.A)(
                                        (e) => {
                                            h(
                                                n({
                                                    minColumnWidth: a,
                                                    maxColumnWidth: i,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: l,
                                                    columnGap: c,
                                                    minColumnCount: s,
                                                    maxColumnCount: d,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, d, i, s, a, l],
                            );
                        return (
                            (0, o.useLayoutEffect)(
                                () => (
                                    m.current && m.current.disconnect(),
                                    (m.current = new ResizeObserver((e) => {
                                        e.forEach(_);
                                    })),
                                    t &&
                                        (h(
                                            n({
                                                minColumnWidth: a,
                                                maxColumnWidth: i,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: l,
                                                columnGap: c,
                                                minColumnCount: s,
                                                maxColumnCount: d,
                                            }),
                                        ),
                                        m.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = m.current) || e.disconnect();
                                    }
                                ),
                                [c, t, _, d, i, s, a, l],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: m, maxColumnWidth: h, minColumnWidth: u, maxColumnCount: _, containerRef: p }),
                    { virtualizer: C, resizeObserver: v } = (0, l.r)({ count: x, getEstimateSize: s, gap: c, containerRef: p }),
                    S = (0, i.A)(
                        Array.from({ length: t }, (e, t) => t),
                        b,
                    ),
                    g = (0, a.L)(() => {
                        var e, t;
                        if (!C.range) return null;
                        let s = null == (e = S[C.range.startIndex]) ? void 0 : e.at(0),
                            i = null == (t = S[C.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== s && void 0 !== i ? { startIndex: s, endIndex: i } : null;
                    });
                return { virtualizer: C, rowResizeObserver: v, indices: S, columnCount: b, visibleRange: g };
            };
        },
        94218: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => h });
            var i = s(32290),
                a = s(21916),
                r = s(39407),
                o = s(21732),
                n = s(91027),
                l = s(63423),
                c = s(71926),
                d = s(70204),
                u = s(34186);
            let h = (e) => {
                let { size: t = 'm', variant: s = 'default', withRipple: h = !0, buttonText: m, isBlock: _, key: p, className: x } = e,
                    b = (0, a.useRouter)(),
                    C = (0, u.N)().get(d.QG),
                    v = (0, n.c)(() => {
                        C.authorizationUrl && b.push(C.authorizationUrl);
                    });
                return (0, i.jsx)(
                    l.$,
                    {
                        onClick: v,
                        className: x,
                        isBlock: _,
                        color: 'primary',
                        variant: s,
                        size: t,
                        radius: 'xxxl',
                        withRipple: h,
                        'data-test-id': o.S7.UNAUTHORIZED_BUTTON,
                        children: m || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(r.A, { id: 'authorization.enter-button' }) }),
                    },
                    p,
                );
            };
        },
        95329: (e, t, s) => {
            'use strict';
            s.d(t, { M: () => i });
            var i = (function (e) {
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
        95698: (e, t, s) => {
            'use strict';
            s.d(t, { SearchPage: () => it });
            var i = s(32290),
                a = s(63618),
                r = s(96103),
                o = s(21916),
                n = s(55178),
                l = s(60900),
                c = s(16172),
                d = s(21732),
                u = s(1053),
                h = s(69319),
                m = s(73474),
                _ = s(91027),
                p = s(6752),
                x = s(5771),
                b = s(15299),
                C = s(39407),
                v = s(63423),
                S = s(71926),
                g = s(41267),
                j = s.n(g);
            let A = (e) => {
                let { onCorrectText: t, searchCorrectedText: s } = e,
                    a = (0, n.useMemo)(
                        () => ({
                            text: (0, i.jsx)(v.$, {
                                'aria-label': s,
                                variant: 'text',
                                radius: 'xs',
                                onClick: t,
                                'data-test-id': d.e8.search.SEARCH_CORRECTED_TEXT_BUTTON,
                                children: (0, i.jsx)(S.HL, {
                                    className: j().link,
                                    variant: 'span',
                                    size: 'm',
                                    type: 'text',
                                    'data-test-id': d.e8.search.SEARCH_CORRECTED_TEXT_BUTTON_TEXT,
                                    children: s,
                                }),
                            }),
                        }),
                        [s, t],
                    );
                return (0, i.jsx)('div', {
                    className: j().root,
                    'data-test-id': d.e8.search.SEARCH_CORRECTED_TEXT,
                    children: (0, i.jsx)(S.HL, {
                        className: j().text,
                        variant: 'span',
                        size: 'm',
                        type: 'text',
                        'data-test-id': d.e8.search.SEARCH_CORRECTED_TEXT_TEXT,
                        children: (0, i.jsx)(C.A, { id: 'search.corrected-text', values: a }),
                    }),
                });
            };
            var y = s(82586),
                E = s(46049),
                f = s(58054),
                I = s(32468),
                T = s(96919),
                P = s.n(T);
            let k = (e) => {
                    let { forwardRef: t, className: s, searchCorrectedText: r } = e,
                        { formatMessage: o } = (0, l.A)();
                    return (0, i.jsxs)(E.N, {
                        className: (0, a.$)(P().root, s),
                        containerClassName: P().container,
                        ref: t,
                        children: [
                            (0, i.jsxs)('div', {
                                className: P().content,
                                'data-test-id': d.e8.search.SEARCH_EMPTY_CONTAINER,
                                children: [
                                    r && (0, i.jsx)('div', { className: P().correctedTextBlock, children: r }),
                                    (0, i.jsx)(y.I, { className: P().icon, variant: 'search', size: 'xxl', 'data-test-id': d.e8.search.SEARCH_EMPTY_ICON }),
                                    (0, i.jsx)(S.DZ, {
                                        className: P().title,
                                        size: 's',
                                        weight: 'bold',
                                        variant: 'h3',
                                        'data-test-id': d.e8.search.SEARCH_EMPTY_HEADER,
                                        children: o({ id: 'search-results.not-found-title' }),
                                    }),
                                    (0, i.jsx)(S.HL, {
                                        className: P().subtitle,
                                        variant: 'div',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        'data-test-id': d.e8.search.SEARCH_EMPTY_DESCRIPTION,
                                        children: o({ id: 'search-results.not-found-description' }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(I.A, { children: (0, i.jsx)(f.w, { className: P().footer }) }),
                        ],
                    });
                },
                R = (0, n.forwardRef)((e, t) => (0, i.jsx)(k, { forwardRef: t, ...e }));
            var N = s(80451),
                L = s(71483),
                M = s(44884),
                w = s(77223),
                O = s(24170),
                B = s(88446),
                z = s(7474),
                D = s(12113),
                H = s(83460),
                V = s(4664),
                U = s(88406),
                W = s(54862),
                G = s(79248),
                $ = s(78358),
                Y = s.n($);
            let X = (e) => {
                let { item: t, scrollMargin: s, resizeObserver: a, renderItemByIndex: r } = e,
                    [o, l] = (0, W.d)();
                (0, n.useEffect)(
                    () => (
                        o && a && a.observe(o),
                        () => {
                            o && a && a.unobserve(o);
                        }
                    ),
                    [o, a],
                );
                let c = { transform: 'translate3d(0, '.concat(t.start - s, 'px, 0)') };
                return (0, i.jsx)('div', { 'data-index': t.index, className: Y().root, ref: l, style: c, children: r(t.index) }, t.key);
            };
            var F = s(24798),
                K = s.n(F);
            let q = (e) => {
                let { count: t, getEstimateRowSize: s, renderItemByIndex: a, onChangeRange: r } = e,
                    [o, l] = (0, W.d)(),
                    { virtualizer: c, resizeObserver: d } = (0, G.r)({ count: t, getEstimateSize: s, containerRef: o, overscan: 3 });
                (0, n.useEffect)(() => {
                    !c.isScrolling && c.range && r && r(c.range);
                }, [r, c.isScrolling, c.range]);
                let u = c.getTotalSize(),
                    h = c.getVirtualItems(),
                    m = c.options.scrollMargin;
                return (0, i.jsx)('div', {
                    className: K().root,
                    style: { height: ''.concat(u, 'px') },
                    ref: l,
                    children: h.map((e) => (0, i.jsx)(X, { item: e, scrollMargin: m, resizeObserver: d, renderItemByIndex: a }, e.key)),
                });
            };
            var Q = s(40053),
                Z = s(85305),
                J = s(14934),
                ee = s(86269),
                et = s(71735),
                es = s(2969),
                ei = s(84782),
                ea = s(37240),
                er = s(7697),
                eo = s(28999),
                en = s(43564),
                el = s(57594),
                ec = s(32156),
                ed = s(11323),
                eu = s(90829),
                eh = s(90326),
                em = s(80195),
                e_ = s(15597),
                ep = s.n(e_);
            let ex = (0, r.PA)((e) => {
                let { vibe: t, children: s, className: r } = e,
                    { pageId: o } = (0, ea.$)(),
                    [l, c] = (0, n.useState)(!1),
                    { blockIdForFrom: d } = (0, ei.N)(),
                    {
                        settings: { isMobile: u },
                        user: h,
                    } = (0, el.g)(),
                    { sendPlaySearchFeedback: m } = (0, eo.z)(),
                    p = (0, es.b)(),
                    { withPlusPopoverWeb: x, withFreemiumCloseListening: b } = (0, er.X)(),
                    { isPlaying: C, isPaused: v, togglePlay: g } = (0, en.B)({ seeds: t.seeds, pageIdForFrom: o, blockIdForFrom: d }),
                    j = (0, et.P)(),
                    A = C || v,
                    y = (0, n.useCallback)(() => {
                        u && (l || C || (c(!0), null == m || m()), g());
                    }, [u, C, l, m, g]),
                    E = (0, _.c)(() => {
                        !j() && (x || (l || C || (c(!0), null == m || m()), g(), p(!C)));
                    }),
                    f = (0, n.useCallback)(
                        () =>
                            (0, i.jsx)(
                                eh.D,
                                {
                                    isPlaying: C,
                                    onClick: E,
                                    className: (0, a.$)(ep().playButton, ep().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                },
                                t.getKey('PlayButton'),
                            ),
                        [C, E, t],
                    ),
                    I = (0, n.useMemo)(() => {
                        let e = !h.hasPlus && b;
                        return h.isAuthorized
                            ? (0, i.jsx)(
                                  ec.S,
                                  { isEnabled: e && x, placement: 'bottom', textVariant: 'vibe', vibeTextVariant: t.stationType, renderChildren: f },
                                  t.getKey('BuyPlusPopover'),
                              )
                            : (0, i.jsx)(eu.Z, { isEnabled: e, placement: 'bottom', textVariant: 'vibe', vibeTextVariant: t.stationType, renderChildren: f });
                    }, [h.hasPlus, h.isAuthorized, t, f, x, b]),
                    T = (0, n.useMemo)(
                        () =>
                            (0, i.jsxs)(ee.t, {
                                className: ep().cover,
                                radius: 'round',
                                withShadow: !0,
                                onClick: y,
                                children: [
                                    (0, i.jsx)(ed.B, {
                                        size: 200,
                                        fit: 'cover',
                                        className: ep().image,
                                        style: { backgroundColor: t.backgroundColor },
                                        src: t.imageUrl,
                                        alt: t.title,
                                        withAvatarReplace: !0,
                                    }),
                                    A && (0, i.jsx)(em.P, { stopAnimation: v, className: ep().playingAnimation }),
                                    (0, i.jsx)(J.hg, {
                                        className: (0, a.$)(ep().controls, { [ep().controls_isPlaying]: A }, ep().important),
                                        bottomContainerClassName: ep().playControl,
                                        radius: 'round',
                                        playControl: I,
                                    }),
                                ],
                            }),
                        [y, t.backgroundColor, t.imageUrl, t.title, A, v, I],
                    );
                return (0, i.jsx)(J.MN, {
                    className: (0, a.$)(ep().root, r),
                    textPosition: 'center',
                    title: (0, i.jsx)(S.HL, { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title }, t.getKey('Description')),
                    description: (0, i.jsx)(
                        S.HL,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: t.description },
                        t.getKey('Description'),
                    ),
                    view: T,
                    children: s,
                });
            });
            var eb = s(48922),
                eC = s(26042),
                ev = s(72396),
                eS = s(75265),
                eg = s(31286),
                ej = s(79406),
                eA = s(98350),
                ey = s(37340),
                eE = s(89020),
                ef = s(34223),
                eI = s(80846);
            let eT = {
                    entity: { rowGap: 16, columnGap: 16, estimateRowSize: 275, minColumnWidth: 170, maxColumnWidth: 270, minColumnCount: 2, maxColumnCount: 7 },
                    clip: { rowGap: 16, columnGap: 16, estimateRowSize: 235, minColumnWidth: 200, maxColumnWidth: 400, minColumnCount: 1, maxColumnCount: 6 },
                    concert: { rowGap: 16, columnGap: 16, estimateRowSize: 371, minColumnWidth: 170, maxColumnWidth: 227, minColumnCount: 1, maxColumnCount: 2 },
                },
                eP = (e, t) => {
                    let [s, i] = (0, n.useState)(t || e.length > 0),
                        [a, r] = (0, n.useState)(e.length > 0 ? e[0] : void 0),
                        o = (0, n.useRef)(void 0),
                        l = (0, n.useRef)(t),
                        c = (0, n.useRef)(t ? Date.now() : void 0),
                        d = (0, _.c)((e) => {
                            let t = Math.max(0, 2e3 - (void 0 !== c.current ? Date.now() - c.current : 2e3));
                            0 === t ? e() : (o.current = setTimeout(e, t));
                        });
                    return (
                        (0, n.useEffect)(() => {
                            let s = t && !l.current,
                                a = !t && l.current;
                            return (
                                (l.current = t),
                                s && (clearTimeout(o.current), (c.current = Date.now()), i(!0), r(void 0)),
                                a && (clearTimeout(o.current), e.length > 0 ? d(() => r(e[0])) : d(() => i(!1))),
                                () => clearTimeout(o.current)
                            );
                        }, [t, e, d]),
                        { isVisible: s, vibe: a }
                    );
                };
            var ek = s(27576),
                eR = s(79589),
                eN = s(61744),
                eL = s(10570),
                eM = s.n(eL);
            let ew = (0, r.PA)((e) => {
                let { id: t, concert: s } = e;
                return (0, i.jsxs)('div', {
                    className: eM().root,
                    id: t,
                    children: [
                        (0, i.jsx)(S.HL, { variant: 'div', size: 'm', weight: 'medium', className: eM().city, lineClamp: 1, children: null == s ? void 0 : s.title }),
                        (0, i.jsx)(S.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: null == s ? void 0 : s.city }),
                        (0, i.jsx)(S.HL, { variant: 'span', size: 'm', weight: 'medium', children: null == s ? void 0 : s.contentRating }),
                    ],
                });
            });
            var eO = s(42399),
                eB = s.n(eO);
            let ez = (0, r.PA)((e) => {
                let { concert: t } = e,
                    s = (0, n.useRef)(String((0, ek.A)())),
                    a = t.isIdentityExperimentEnabled ? eN.M : ew;
                return (0, i.jsx)(eR.V, {
                    artistId: null,
                    viewUuid: s.current,
                    concert: t,
                    radius: 's',
                    className: eB().root,
                    meta: (0, i.jsx)(a, { concert: t }),
                    shouldSendAnalyticsOnHide: !0,
                    shouldShowMask: !0,
                });
            });
            var eD = s(14257),
                eH = s(90625);
            let eV = {
                    [eD.S.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_search.lottie',
                    [eD.S.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_search.lottie',
                },
                eU = {
                    loading: { loop: !0, markerId: 'loading' },
                    idle: { markerId: 'success' },
                    playing: { markerId: 'playing' },
                    paused: { markerId: 'playing', mode: 'reverse' },
                },
                eW = (e) => (0, i.jsx)(eH.D, { animationByTheme: eV, animationConfig: eU, ...e });
            var eG = s(95226),
                e$ = s(90475),
                eY = s.n(e$);
            let eX = (0, r.PA)((e) => {
                let { className: t, requestAwakeLumenModal: s, vibe: r } = e,
                    { lumen: o } = (0, el.g)(),
                    n = o.isAwakened ? c.ky.Lumen : c.ky.LumenUnawakened;
                return (0, i.jsx)('div', {
                    className: (0, a.$)(eY().root, t),
                    children: (0, i.jsx)(eG.F, {
                        blockId: c.LA.Q2vWave,
                        blockType: c.LA.Q2vWave,
                        mainObjectId: '',
                        mainObjectType: n,
                        blockPosX: 1,
                        blockPosY: 1,
                        objectsCount: 1,
                        children: (0, i.jsx)(eC.B, {
                            objectPosX: 1,
                            objectPosY: 1,
                            objectsCount: 1,
                            objectType: c.ky.Wave,
                            objectId: null == r ? void 0 : r.stationId,
                            children: (0, i.jsx)(eW, { requestAwakeLumenModal: s, vibe: r }),
                        }),
                    }),
                });
            });
            var eF = s(51291),
                eK = s.n(eF);
            let eq = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            className: s,
                            results: r,
                            filter: o,
                            variant: l = 'grid',
                            sendSearchFeedback: d,
                            searchCorrectedText: u,
                            isShimmerVisible: m,
                            getDataByRange: x,
                            requestsCount: b,
                            q2vResults: C,
                            isShimmerActive: v,
                            requestAwakeLumenModal: S,
                            ...g
                        } = e,
                        { experiments: j } = (0, el.g)(),
                        A = (0, Q.f)(),
                        { isVisible: y, vibe: T } = eP(C, v),
                        P = A && y && o === h.n.WAVE,
                        k = ((e) => (e === h.n.CLIP ? eT.clip : e === h.n.CONCERT ? eT.concert : eT.entity))(o),
                        R = (0, _.c)(() => 56),
                        W = (0, _.c)(() => k.estimateRowSize),
                        G = (0, eg.w)(),
                        $ = (() => {
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
                                (0, _.c)((t, s) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, s), s)))
                            );
                        })(),
                        { from: Y } = (0, ev.f)({ pageId: eb._Q.SEARCH }),
                        X = (0, n.useCallback)(
                            (e) => {
                                let t = r[e];
                                if (!t)
                                    return 'list' === l
                                        ? (0, i.jsx)(ef.D, { variant: eA.X.PLAYLIST, isActive: !0 })
                                        : o === h.n.CONCERT
                                          ? (0, i.jsx)(ey.W, { isShimmerActive: !0, className: eK().concertShimmer })
                                          : o === h.n.ARTIST
                                            ? (0, i.jsx)(eE.V, { linesCount: 2, round: !0, centered: !0, isActive: !0 })
                                            : o === h.n.WAVE
                                              ? j.checkExperiment(ej.z.WebNextWaveAgentExperiment, 'on')
                                                  ? (0, i.jsx)(eE.V, { linesCount: 3, centered: !0, isActive: !0 })
                                                  : (0, i.jsx)(eE.V, { linesCount: 2, round: !0, centered: !0, isActive: !0 })
                                              : o === h.n.PLAYLIST
                                                ? (0, i.jsx)(eE.V, { linesCount: 2, isActive: !0 })
                                                : o === h.n.CLIP
                                                  ? (0, i.jsx)(eE.V, { linesCount: 2, shimmerClassName: eK().video, isActive: !0 })
                                                  : (0, i.jsx)(eE.V, { className: eK().entityCardShimmer, isActive: !0, shimmerClassName: o === h.n.CLIP && eK().video });
                                switch (t.type) {
                                    case h.n.ALBUM:
                                        return (0, i.jsx)(
                                            eS.N.Provider,
                                            {
                                                value: $(t.data.id, { sendSearchFeedback: d, id: t.data.id, type: w.o.ALBUM, blockPosition: 0, position: e }),
                                                children: (0, i.jsx)(O.a, { album: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case h.n.PLAYLIST:
                                        return (0, i.jsx)(
                                            eS.N.Provider,
                                            {
                                                value: $(t.data.id, { sendSearchFeedback: d, id: t.data.id, type: w.o.PLAYLIST, blockPosition: 0, position: e }),
                                                children: (0, i.jsx)(H.B, { playlist: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case h.n.ARTIST:
                                        return (0, i.jsx)(
                                            eS.N.Provider,
                                            {
                                                value: $(t.data.id, { sendSearchFeedback: d, id: t.data.id, type: w.o.ARTIST, blockPosition: 0, position: e }),
                                                children: (0, i.jsx)(z.a, { artist: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case h.n.PODCAST:
                                        return (0, i.jsx)(
                                            eC.B,
                                            {
                                                objectType: c.ky.Podcast,
                                                objectId: String(t.data.id),
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                objectsCount: r.length,
                                                children: (0, i.jsx)(eS.N.Provider, {
                                                    value: $(t.data.id, { sendSearchFeedback: d, id: t.data.id, type: w.o.PODCAST, blockPosition: 0, position: e }),
                                                    children: (0, i.jsx)(B.M, { album: t.data }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                    case h.n.CLIP:
                                        return (0, i.jsx)(
                                            eS.N.Provider,
                                            {
                                                value: $(t.data.clipId, { sendSearchFeedback: d, id: t.data.clipId, type: w.o.CLIP, blockPosition: 0, position: e }),
                                                children: (0, i.jsx)(D.F, { clip: t.data }),
                                            },
                                            t.data.clipId,
                                        );
                                    case h.n.WAVE:
                                        if (!j.checkExperiment(ej.z.WebNextWaveAgentExperiment, 'on'))
                                            return (0, i.jsx)(
                                                eS.N.Provider,
                                                {
                                                    value: $(t.data.stationId, {
                                                        sendSearchFeedback: d,
                                                        id: t.data.stationId,
                                                        type: w.o.WAVE,
                                                        blockPosition: 0,
                                                        position: e,
                                                    }),
                                                    children: (0, i.jsx)(ex, { vibe: t.data }),
                                                },
                                                t.data.stationId,
                                            );
                                        return (0, i.jsx)(
                                            eS.N.Provider,
                                            {
                                                value: $(t.data.stationId, {
                                                    sendSearchFeedback: d,
                                                    id: t.data.stationId,
                                                    type: w.o.WAVE,
                                                    blockPosition: 0,
                                                    position: e,
                                                }),
                                                children: (0, i.jsx)(Z.y, { vibe: t.data }),
                                            },
                                            t.data.stationId,
                                        );
                                    case h.n.CONCERT:
                                        return (0, i.jsx)(
                                            eC.B,
                                            {
                                                objectType: c.ky.Concert,
                                                objectId: t.data.id,
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                objectsCount: r.length,
                                                children: (0, i.jsx)(ez, { concert: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case h.n.TRACK:
                                    case h.n.UGC_TRACK:
                                        return (0, i.jsx)(
                                            eC.B,
                                            {
                                                objectType: c.ky.Track,
                                                objectId: t.data.id,
                                                objectPosX: 1,
                                                objectPosY: e + 1,
                                                objectsCount: r.length,
                                                children: (0, i.jsx)(eS.N.Provider, {
                                                    value: $(t.data.entityId, {
                                                        sendSearchFeedback: d,
                                                        id: t.data.entityId,
                                                        type: w.o.TRACK,
                                                        blockPosition: 0,
                                                        position: e,
                                                    }),
                                                    children: (0, i.jsx)(V.c, {
                                                        track: t.data,
                                                        playContextParams: G(t.data.entityId, {
                                                            contextData: { type: L.K.Various, meta: { id: t.data.entityId }, from: Y, overrideContextType: M.b.Search },
                                                            queueParams: { index: e, entityId: t.data.id },
                                                            loadContextMeta: !0,
                                                        }),
                                                    }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                    case h.n.PODCAST_EPISODE:
                                        return (0, i.jsx)(
                                            eC.B,
                                            {
                                                objectType: c.ky.PodcastEpisode,
                                                objectId: t.data.id,
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                objectsCount: r.length,
                                                children: (0, i.jsx)(V.c, {
                                                    track: t.data,
                                                    playContextParams: G(t.data.entityId, {
                                                        contextData: { type: L.K.Various, meta: { id: t.data.entityId }, from: Y, overrideContextType: M.b.Search },
                                                        queueParams: { index: e, entityId: t.data.id },
                                                        loadContextMeta: !0,
                                                    }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                }
                            },
                            [r, l, o, j, $, d, G, Y, b],
                        ),
                        F = (0, p.L)(() => (m ? r.length + eI.k : r.length)),
                        K = (0, p.L)(() =>
                            'list' === l
                                ? (0, i.jsx)(q, { count: F, getEstimateRowSize: R, renderItemByIndex: X, onChangeRange: x })
                                : (0, i.jsx)(U.Q, {
                                      count: F,
                                      rowGap: k.rowGap,
                                      columnGap: k.columnGap,
                                      getEstimateRowSize: W,
                                      minColumnCount: k.minColumnCount,
                                      minColumnWidth: k.minColumnWidth,
                                      maxColumnWidth: k.maxColumnWidth,
                                      maxColumnCount: k.maxColumnCount,
                                      renderItemByIndex: X,
                                      onChangeRange: x,
                                  }),
                        );
                    return (0, i.jsxs)(E.N, {
                        className: (0, a.$)(eK().root, s),
                        containerClassName: eK().container,
                        ref: t,
                        ...(0, N.getDataAttrFromProps)(g),
                        children: [
                            (0, i.jsxs)('div', {
                                children: [
                                    u && (0, i.jsx)('div', { className: eK().correctedTextBlock, children: u }),
                                    P && (0, i.jsx)(eX, { className: eK().queryToVibe, requestAwakeLumenModal: S, vibe: T }),
                                    K,
                                ],
                            }),
                            (0, i.jsx)(I.A, { children: (0, i.jsx)(f.w, { className: eK().footer }) }),
                        ],
                    });
                }),
                eQ = (0, n.forwardRef)((e, t) => (0, i.jsx)(eq, { forwardRef: t, ...e }));
            var eZ = s(57941),
                eJ = s(2125),
                e0 = s(53937),
                e1 = s(13882),
                e2 = s(66162),
                e3 = s(66988),
                e7 = s(75245),
                e8 = s(19620),
                e6 = s(49522),
                e5 = s(79856),
                e4 = s(36427),
                e9 = s.n(e4);
            let te = (e) => {
                let { className: t, ariaLabel: s, isShimmerActive: r } = e;
                return (0, i.jsxs)('div', {
                    tabIndex: 0,
                    'aria-label': s,
                    'aria-live': 'polite',
                    'aria-busy': !0,
                    className: (0, a.$)(e9().root, t),
                    children: [
                        (0, i.jsxs)('div', {
                            className: e9().infoContainer,
                            children: [
                                (0, i.jsx)(e5.W, { className: e9().cover, radius: 's', isActive: r }),
                                (0, i.jsxs)('div', {
                                    className: e9().textContainer,
                                    children: [
                                        (0, i.jsx)(e5.W, { className: e9().title, radius: 's', isActive: r }),
                                        (0, i.jsx)(e5.W, { className: e9().description, radius: 's', isActive: r }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(e5.W, { className: e9().action, radius: 's', isActive: r }),
                    ],
                });
            };
            var tt = s(73007),
                ts = s.n(tt);
            let ti = (e) => {
                let { shimmersCount: t = 3, isShimmerActive: s = !0 } = e,
                    { formatMessage: a } = (0, l.A)();
                return Array.from({ length: t }, (e, t) =>
                    (0, i.jsx)(
                        te,
                        {
                            className: ts().root,
                            ariaLabel: a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'search.history' }) }),
                            isShimmerActive: s,
                        },
                        t,
                    ),
                );
            };
            var ta = s(46019),
                tr = s.n(ta);
            let to = (e) => {
                    let {
                            forwardRef: t,
                            title: s,
                            description: r,
                            viewAllAction: o,
                            coverUrl: l,
                            children: c,
                            className: u,
                            maxColumns: h = 2,
                            itemsPerColumn: m = 3,
                            containerClassName: _,
                            headerClassName: p,
                            titleSize: x,
                            showControls: b,
                            isShimmerVisible: C,
                            isShimmerActive: v,
                        } = e,
                        S = (0, n.useRef)(null),
                        g = (0, n.useId)(),
                        { items: j, columnLength: A } = (0, n.useMemo)(() => {
                            if (C)
                                return {
                                    columnLength: h,
                                    items: Array.from({ length: h }, (e, t) =>
                                        (0, i.jsx)('div', { className: tr().column, children: (0, i.jsx)(ti, { shimmersCount: 3, isShimmerActive: v }) }, t),
                                    ),
                                };
                            let e = (0, e3.A)(c, m).slice(0, (null == c ? void 0 : c.length) ? Math.ceil(c.length / m) : h);
                            return { items: e.map((e, t) => (0, i.jsx)('div', { className: tr().column, children: e }, t)), columnLength: e.length };
                        }, [c, v, C, m, h]);
                    return (0, i.jsxs)('section', {
                        ref: t,
                        className: (0, a.$)(u, tr().root),
                        'data-test-id': d.e8.search.MIXED_ENTITIES_BLOCK,
                        children: [
                            (0, i.jsx)(e8.T, {
                                className: p,
                                labeledForId: g,
                                title: s,
                                description: r,
                                coverUrl: l,
                                viewAllActionLink: o,
                                titleSize: x,
                                controls: b && (0, i.jsx)(e6.X, { className: tr().controls, carouselRef: S }),
                                withDescription: !!r,
                            }),
                            (0, i.jsx)(e7.F, {
                                className: _,
                                ref: S,
                                itemClassName: (0, a.$)(tr().item, { [tr().item_withMultipleColumns]: A > 1 }),
                                'aria-labelledby': g,
                                role: 'group',
                                children: j,
                            }),
                        ],
                    });
                },
                tn = (0, n.forwardRef)((e, t) => (0, i.jsx)(to, { forwardRef: t, ...e }));
            var tl = s(32496),
                tc = s(53775),
                td = s.n(tc);
            let tu = (e) => {
                let { isShimmerActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: td().root,
                    children: [
                        (0, i.jsxs)('div', {
                            className: td().container,
                            children: [
                                (0, i.jsx)(eE.V, {
                                    className: (0, a.$)(td().entity, td().important),
                                    shimmerClassName: (0, a.$)(td().cover, td().important),
                                    round: !0,
                                    withInfo: !1,
                                    isActive: t,
                                }),
                                (0, i.jsxs)('div', {
                                    className: td().meta,
                                    children: [
                                        (0, i.jsx)(tl.n, { textClassName: (0, a.$)(td().title, td().important), isActive: t }),
                                        (0, i.jsx)(tl.n, { textClassName: (0, a.$)(td().subtitle, td().important), isActive: t }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)('div', {
                            className: td().container,
                            children: [
                                (0, i.jsx)(eE.V, {
                                    className: (0, a.$)(td().entity, td().important),
                                    shimmerClassName: (0, a.$)(td().cover, td().important),
                                    withInfo: !1,
                                    isActive: t,
                                    radius: 'xs',
                                }),
                                (0, i.jsxs)('div', {
                                    className: td().meta,
                                    children: [
                                        (0, i.jsx)(tl.n, { textClassName: (0, a.$)(td().title, td().important), isActive: t }),
                                        (0, i.jsx)(tl.n, { textClassName: (0, a.$)(td().subtitle, td().important), isActive: t }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            };
            var th = s(19983),
                tm = s.n(th),
                t_ = s(72504),
                tp = s.n(t_),
                tx = s(3314),
                tb = s.n(tx);
            let tC = (0, r.PA)((e) => {
                let { album: t } = e;
                return (0, i.jsx)(B.M, { album: t, className: (0, a.$)(tp().block, tb().root), coverClassName: tp().cover, playButtonIconSize: 'l', likeIconSize: 'xs' });
            });
            var tv = s(42383),
                tS = s(80732),
                tg = s.n(tS);
            let tj = (0, r.PA)((e) => {
                let { artist: t } = e;
                return (0, i.jsx)(tv.c, {
                    artist: t,
                    className: (0, a.$)(tp().block, tg().root),
                    coverClassName: tp().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    pageId: eb._Q.SEARCH,
                });
            });
            var tA = s(84141),
                ty = s(8677),
                tE = s(92102),
                tf = s(41677),
                tI = s(17330),
                tT = s(90169),
                tP = s(85017),
                tk = s(5154),
                tR = s(78570),
                tN = s(61258),
                tL = s(40229),
                tM = s(12618),
                tw = s.n(tM);
            let tO = (0, r.PA)((e) => {
                var t;
                let { track: s } = e,
                    { from: r } = (0, ev.f)(),
                    { formatMessage: o } = (0, l.A)(),
                    c = { contextData: { type: L.K.Various, meta: { id: s.entityId }, from: r }, queueParams: { index: 0, entityId: s.id }, loadContextMeta: !0 },
                    d = (0, tT.D)({ playContextParams: c, entityId: s.entityId }),
                    u = (0, n.useCallback)(
                        (e) =>
                            (0, i.jsx)(tL.q, {
                                isAvailable: s.isAvailable,
                                isDisliked: s.isDisliked,
                                coverUri: s.coverUri,
                                title: s.title,
                                className: (0, a.$)(tp().cover, tw().cover),
                                alt: o({ id: 'entity-names.track-name-by-type' }, { type: (0, tI.y)(s.type), name: s.title }),
                                radius: 'xs',
                                ...e,
                            }),
                        [o, s.coverUri, s.isAvailable, s.isDisliked, s.title, s.type],
                    ),
                    h = (0, tA.O)({ track: s, entityType: tP.n.AUDIOBOOK }),
                    m = (0, p.L)(() =>
                        s.url && s.isAvailable
                            ? (0, i.jsx)(tN.N, { className: (0, a.$)(tk.$f.text, tk.$f.titleLink), href: s.url, onClick: h, children: s.title })
                            : (0, i.jsx)(S.HL, { className: (0, a.$)(tk.$f.text, tk.$f.titleText), size: 'm', variant: 'div', type: 'text', children: s.title }),
                    ),
                    _ = (0, n.useCallback)(
                        (e, t) => {
                            var a;
                            return (null == (a = s.artists) ? void 0 : a.length)
                                ? (0, i.jsx)(tf.i, { linkClassName: e, captionClassName: t, artists: s.artists, lineClamp: 1, withLink: s.isAvailable })
                                : null;
                        },
                        [s.artists, s.isAvailable],
                    );
                return (0, i.jsx)(tE.C, {
                    className: (0, a.$)(tp().block, tw().root, tk.$f.root, { [tk.$f.root_disabled]: !s.isAvailable }),
                    track: s,
                    meta: (0, i.jsx)(tR.r, {
                        isDisabled: !s.isAvailable,
                        version: s.version,
                        title: m,
                        artistsComponent: _,
                        getDescriptionTexts: s.getDescriptionTexts,
                        explicitMarkVariant: s.explicitDisclaimer,
                        releaseYear: (null == (t = s.mainAlbum) ? void 0 : t.isNonMusic) ? s.mainAlbum.year : void 0,
                    }),
                    playButtonCellRender: u,
                    playButtonIconSize: 'l',
                    controls: (0, i.jsx)(ty.Q, { track: s, utmLink: c.contextData.utmLink, likeIconSize: 'xs' }),
                    ...d,
                });
            });
            var tB = s(69675),
                tz = s(84427),
                tD = s(80434),
                tH = s.n(tD);
            let tV = (0, r.PA)((e) => {
                    let { clip: t } = e,
                        s = (0, tz.d)(),
                        a = (0, n.useRef)(String((0, ek.A)()));
                    return s
                        ? (0, i.jsx)(tB.N, {
                              clip: t,
                              viewUuid: a.current,
                              className: tp().block,
                              coverClassName: tH().cover,
                              playButtonIconSize: 'l',
                              likeIconSize: 'xs',
                              shouldShowTimecode: !0,
                          })
                        : null;
                }),
                tU = (0, r.PA)((e) => {
                    let { id: t, concert: s } = e,
                        a = [],
                        r = (0, i.jsx)(S.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                    return (
                        (null == s ? void 0 : s.city) && a.push((0, i.jsx)(S.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: s.city })),
                        (null == s ? void 0 : s.contentRating) &&
                            a.push(r, (0, i.jsx)(S.HL, { variant: 'span', size: 'm', weight: 'medium', children: s.contentRating })),
                        (0, i.jsxs)('div', {
                            className: eM().root,
                            id: t,
                            children: [
                                (0, i.jsx)(S.HL, {
                                    variant: 'div',
                                    size: 'm',
                                    weight: 'medium',
                                    className: eM().city,
                                    lineClamp: 1,
                                    children: null == s ? void 0 : s.title,
                                }),
                                (0, i.jsx)('div', { className: eM().info, children: a.map((e, t) => (0, n.cloneElement)(e, { key: t })) }),
                            ],
                        })
                    );
                });
            var tW = s(73722),
                tG = s.n(tW);
            let t$ = (0, r.PA)((e) => {
                let { concert: t } = e,
                    s = (0, n.useRef)(String((0, ek.A)())),
                    a = t.isIdentityExperimentEnabled ? eN.M : tU;
                return (0, i.jsx)(eR.V, {
                    artistId: null,
                    viewUuid: s.current,
                    concert: t,
                    radius: 's',
                    className: tG().root,
                    meta: (0, i.jsx)(a, { concert: t }),
                    shouldSendAnalyticsOnHide: !0,
                    shouldShowMask: !0,
                });
            });
            var tY = s(91090),
                tX = s.n(tY);
            let tF = (0, r.PA)((e) => {
                let { album: t } = e;
                return (0, i.jsx)(B.M, {
                    album: t,
                    className: (0, a.$)(tp().block, tX().root),
                    coverClassName: tp().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    shouldShowReleaseYear: !0,
                });
            });
            var tK = s(29001),
                tq = s(90540),
                tQ = s.n(tq);
            let tZ = (0, r.PA)((e) => {
                let { data: t } = e,
                    { formatMessage: s } = (0, l.A)();
                return (0, i.jsx)('div', {
                    className: tQ().root,
                    children: (0, i.jsx)(tK.F, { textButton: s({ id: 'interface-actions.further' }), meta: t, buttonClassName: (0, a.$)(tQ().button, tQ().important) }),
                });
            });
            var tJ = s(50476),
                t0 = s(36466),
                t1 = s.n(t0);
            let t2 = (0, r.PA)((e) => {
                let { playlist: t } = e;
                return (0, i.jsx)(tJ.v, {
                    playlist: t,
                    className: (0, a.$)(tp().block, t1().root),
                    coverClassName: tp().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                });
            });
            var t3 = s(27616),
                t7 = s(47852),
                t8 = s.n(t7);
            let t6 = (0, r.PA)((e) => {
                let { track: t } = e,
                    { from: s } = (0, ev.f)(),
                    { formatMessage: r } = (0, l.A)(),
                    {
                        settings: { isMobile: o },
                    } = (0, el.g)(),
                    c = { contextData: { type: L.K.Various, meta: { id: t.entityId }, from: s }, queueParams: { index: 0, entityId: t.id }, loadContextMeta: !0 },
                    u = (0, tT.D)({ playContextParams: c, entityId: t.entityId }),
                    h = (0, n.useCallback)(
                        (e) =>
                            (0, i.jsx)(tL.q, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: (0, a.$)(tp().cover, t8().cover),
                                alt: r({ id: 'entity-names.track-name-by-type' }, { type: (0, tI.y)(t.type), name: t.title }),
                                radius: 'xs',
                                ...e,
                            }),
                        [r, t.coverUri, t.isAvailable, t.isDisliked, t.title, t.type],
                    );
                return (0, i.jsx)(tE.C, {
                    className: (0, a.$)(tp().block, t8().root),
                    track: t,
                    meta: (0, i.jsx)(t3.w, {
                        podcastMetaClassName: (0, a.$)(t8().podcastMeta, t8().important),
                        titleContainerClassName: (0, a.$)(t8().titleContainer, t8().important),
                        textClassName: (0, a.$)(t8().text, t8().important),
                        progressClassName: (0, a.$)(t8().progress, t8().important),
                        track: t,
                        playContextParams: c,
                        withListeningProgress: !0,
                        explicitSize: 'xxxs',
                        titleLineClamp: 2,
                        withAlbumTitleLink: !o,
                    }),
                    playButtonCellRender: h,
                    playButtonIconSize: 'l',
                    controls: (0, i.jsx)(ty.Q, { track: t, utmLink: c.contextData.utmLink, likeIconSize: 'xs' }),
                    ...u,
                    'data-test-id': d.Kq.track.TRACK_PODCAST,
                });
            });
            var t5 = s(42046),
                t4 = s.n(t5);
            let t9 = (0, r.PA)((e) => {
                let { album: t } = e;
                return (0, i.jsx)(B.M, {
                    album: t,
                    className: (0, a.$)(tp().block, t4().root),
                    coverClassName: tp().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    description: (0, i.jsx)(C.A, { id: 'entity-names.recently-release' }),
                });
            });
            var se = s(68912),
                st = s(43762),
                ss = s.n(st);
            let si = (0, r.PA)((e) => {
                let { track: t } = e,
                    { from: s } = (0, ev.f)(),
                    {
                        settings: { isMobile: r },
                    } = (0, el.g)(),
                    o = { contextData: { type: L.K.Various, meta: { id: t.entityId }, from: s }, queueParams: { index: 0, entityId: t.id }, loadContextMeta: !0 },
                    l = (0, tT.D)({ playContextParams: o, entityId: t.entityId }),
                    c = (0, n.useCallback)(
                        (e) =>
                            (0, i.jsx)(tL.q, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: (0, a.$)(tp().cover, ss().cover),
                                radius: 'xs',
                                ...e,
                            }),
                        [t.coverUri, t.isAvailable, t.isDisliked, t.title],
                    );
                return (0, i.jsx)(tE.C, {
                    className: (0, a.$)(tp().block, ss().root),
                    track: t,
                    meta: (0, i.jsx)(se.j, { withArtistLink: !r, track: t }),
                    playButtonCellRender: c,
                    playButtonIconSize: 'l',
                    controls: (0, i.jsx)(ty.Q, { track: t, utmLink: o.contextData.utmLink, likeIconSize: 'xs' }),
                    ...l,
                    'data-test-id': d.Kq.track.SEARCH_TRACK_CARD,
                });
            });
            var sa = s(73654),
                sr = s(23352),
                so = s(83560),
                sn = s(1444),
                sl = s(92744),
                sc = s(4008),
                sd = s(66418),
                su = s.n(sd);
            let sh = (0, r.PA)((e) => {
                let { upcomingAlbum: t } = e,
                    { ref: s, intersectionPropertyId: r } = (0, sr.n)(),
                    { user: o } = (0, el.g)(),
                    { formatMessage: c, formatDate: d } = (0, l.A)(),
                    u = (0, sa.P)(t),
                    h = (0, p.L)(() => {
                        let e = c({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: t.title }),
                            s = t.isPresave ? c({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(s);
                    }),
                    m = (0, n.useCallback)(
                        (e, s) => {
                            var a;
                            return (null == (a = t.artists) ? void 0 : a.length)
                                ? (0, i.jsx)(tf.i, { linkClassName: e, captionClassName: s, artists: t.artists, lineClamp: 1 })
                                : null;
                        },
                        [t.artists],
                    );
                return (0, i.jsxs)(sn.C, {
                    ref: s,
                    'data-intersection-property-id': r,
                    className: (0, a.$)(tp().block, tk.$f.root, su().root, su().important),
                    'aria-label': h,
                    children: [
                        (0, i.jsxs)(ee.t, {
                            className: su().cover,
                            radius: 'xs',
                            children: [
                                (0, i.jsx)(ed.B, {
                                    className: su().coverImage,
                                    src: t.coverUri,
                                    size: 100,
                                    alt: c({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: t.title }),
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    fallbackIconSize: 'm',
                                    fallbackIconVariant: 'lock',
                                }),
                                t.coverUri && (0, i.jsx)(y.I, { className: su().lockIcon, variant: 'lock', size: 'xs' }),
                            ],
                        }),
                        (0, i.jsx)(tR.r, {
                            title: (0, i.jsx)(S.HL, { className: (0, a.$)(tk.$f.text, tk.$f.titleText), size: 'l', variant: 'div', type: 'text', children: t.title }),
                            description: (0, i.jsx)(S.HL, {
                                className: su().releaseDate,
                                variant: 'div',
                                type: 'entity',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                children: (0, i.jsx)(C.A, { id: 'entity-names.upcoming-album-date', values: { releaseDate: d(t.releaseDate, (0, so.s)()) } }),
                            }),
                            artistsComponent: m,
                            getDescriptionTexts: t.getDescriptionTexts,
                            explicitMarkVariant: t.explicitDisclaimer,
                        }),
                        (0, i.jsx)(sc.WithOffline, {
                            fallback: (0, i.jsx)(sl.c, {
                                size: 'xs',
                                iconSize: 'xs',
                                className: su().likeButton,
                                isLiked: t.isPresave,
                                onClick: u,
                                disabled: !o.isAuthorized,
                            }),
                        }),
                    ],
                });
            });
            var sm = s(60754),
                s_ = s(85015),
                sp = s(20183),
                sx = s(69150),
                sb = s.n(sx);
            let sC = (0, r.PA)((e) => {
                    var t;
                    let { vibe: s } = e;
                    return (0, i.jsx)(sp.H, {
                        className: (0, a.$)(sb().root, sb().important),
                        coverClassName: (0, a.$)(sb().coverClassName, sb().important),
                        playButtonIconSize: 'l',
                        vibe: s,
                        cover: (0, sm.wg)({ uri: s.backgroundImageUrl, color: null == (t = s.colors) ? void 0 : t.average }),
                        description: s.description,
                        agentVariant: s_.h.LARGE,
                    });
                }),
                sv = (0, r.PA)((e) => {
                    let { results: t, isShimmerVisible: s, isShimmerActive: r, blockPosition: o, sendSearchFeedback: u } = e,
                        { formatMessage: h } = (0, l.A)(),
                        m = (0, n.useCallback)(
                            (e, s) => {
                                switch (e.type) {
                                    case eZ.r.ALBUM:
                                        return (0, i.jsx)(
                                            eC.B,
                                            {
                                                objectType: c.ky.Album,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(eS.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.id, type: w.o.ALBUM, blockPosition: o, position: s },
                                                    children: (0, i.jsx)(tC, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case eZ.r.PLAYLIST:
                                        return (0, i.jsx)(
                                            eC.B,
                                            {
                                                objectType: c.ky.Playlist,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(eS.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.id, type: w.o.PLAYLIST, blockPosition: o, position: s },
                                                    children: (0, i.jsx)(t2, { playlist: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case eZ.r.RECENT_RELEASE:
                                        return (0, i.jsx)(
                                            eC.B,
                                            {
                                                objectType: c.ky.Album,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(eS.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.id, type: w.o.ALBUM, blockPosition: o, position: s },
                                                    children: (0, i.jsx)(t9, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case eZ.r.WAVE:
                                        return (0, i.jsx)(
                                            eC.B,
                                            {
                                                objectType: c.ky.Wave,
                                                objectId: e.data.stationId,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(eS.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.seedsId, type: w.o.WAVE, blockPosition: o, position: s },
                                                    children: (0, i.jsx)(sC, { vibe: e.data }),
                                                }),
                                            },
                                            e.data.stationId,
                                        );
                                    case eZ.r.ARTIST:
                                        return (0, i.jsx)(
                                            eC.B,
                                            {
                                                objectType: c.ky.Artist,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(eS.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.id, type: w.o.ARTIST, blockPosition: o, position: s },
                                                    children: (0, i.jsx)(tj, { artist: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case eZ.r.UPCOMING:
                                        return (0, i.jsx)(
                                            eC.B,
                                            {
                                                objectType: c.ky.UpcomingAlbum,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(sh, { upcomingAlbum: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case eZ.r.CONCERT:
                                        return (0, i.jsx)(
                                            eC.B,
                                            {
                                                objectType: c.ky.Concert,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(t$, { concert: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case eZ.r.PODCAST:
                                        return (0, i.jsx)(
                                            eC.B,
                                            {
                                                objectType: c.ky.Podcast,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(eS.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.id, type: w.o.ALBUM, blockPosition: o, position: s },
                                                    children: (0, i.jsx)(tF, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case eZ.r.NON_MUSIC:
                                        return (0, i.jsx)(
                                            eC.B,
                                            {
                                                objectType: c.ky.Audiobook,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(tF, { album: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case eZ.r.PODCAST_EPISODE:
                                        return (0, i.jsx)(
                                            eC.B,
                                            {
                                                objectType: c.ky.PodcastEpisode,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(t6, { track: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case eZ.r.OVERVIEW:
                                        return (0, i.jsx)(tZ, { data: e.data }, e.type);
                                    case eZ.r.TRACK:
                                        return (0, i.jsx)(
                                            eC.B,
                                            {
                                                objectType: c.ky.Track,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(eS.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.entityId, type: w.o.TRACK, blockPosition: o, position: s },
                                                    children: (0, i.jsx)(si, { track: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case eZ.r.CLIP:
                                        return (0, i.jsx)(
                                            eC.B,
                                            {
                                                objectType: c.ky.Video,
                                                objectId: String(e.data.clipId),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(eS.N.Provider, {
                                                    value: { sendSearchFeedback: u, id: e.data.clipId, type: w.o.CLIP, blockPosition: o, position: s },
                                                    children: (0, i.jsx)(tV, { clip: e.data }),
                                                }),
                                            },
                                            e.data.clipId,
                                        );
                                    case eZ.r.BOOK_CHAPTER:
                                        return (0, i.jsx)(
                                            eC.B,
                                            {
                                                objectType: c.ky.AudiobookChapter,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, i.jsx)(tO, { track: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    default:
                                        return null;
                                }
                            },
                            [o, t.length, u],
                        ),
                        _ = (0, n.useMemo)(() => t.map((e, t) => m(e, t)).filter((e) => (0, n.isValidElement)(e)), [m, t, t.length]);
                    return s
                        ? (0, i.jsx)(tu, { isShimmerActive: r })
                        : _.length
                          ? (0, i.jsx)(eG.F, {
                                blockId: eJ.h.SEARCH_BEST_RESULTS,
                                blockType: eJ.h.SEARCH_BEST_RESULTS,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: _.length,
                                children: (0, i.jsx)('div', {
                                    className: (0, a.$)(tm().root, { [tm().root_withSingleResult]: 1 === _.length }),
                                    role: 'group',
                                    'aria-label': h({ id: 'search-results.best' }),
                                    'data-test-id': d.e8.search.SEARCH_BEST_RESULTS,
                                    children: _,
                                }),
                            })
                          : null;
                });
            var sS = s(61113),
                sg = s(98148);
            let sj = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            items: s = [],
                            title: a,
                            sendSearchFeedback: r,
                            blockPosition: o = 0,
                            containerClassName: n,
                            headerClassName: l,
                            className: c,
                            itemClassName: d,
                            isShimmerVisible: u,
                            isShimmerActive: m,
                            isClipBlock: _,
                            ...p
                        } = e,
                        { search: x } = (0, el.g)(),
                        b = (0, tz.d)(),
                        C = s.filter((e) => e.type !== h.n.PODCAST_EPISODE);
                    return (x.isResolved && 0 === C.length) || (_ && !b)
                        ? null
                        : (0, i.jsx)(sg.O, {
                              isShimmerVisible: u,
                              isShimmerActive: m,
                              className: c,
                              containerClassName: n,
                              headerClassName: l,
                              showHeaderShimmer: !0,
                              title: a,
                              ref: t,
                              ...(0, N.getDataAttrFromProps)(p),
                              itemClassName: d,
                              children: C.map((e, t) => {
                                  switch (e.type) {
                                      case h.n.ALBUM:
                                          return (0, i.jsx)(
                                              eS.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: r, id: e.data.id, type: w.o.ALBUM, blockPosition: o, position: t },
                                                  children: (0, i.jsx)(O.a, { album: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.id,
                                          );
                                      case h.n.ARTIST:
                                          return (0, i.jsx)(
                                              eS.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: r, id: e.data.id, type: w.o.ARTIST, blockPosition: o, position: t },
                                                  children: (0, i.jsx)(z.a, { artist: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.id,
                                          );
                                      case h.n.PLAYLIST:
                                          return (0, i.jsx)(
                                              eS.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: r, id: e.data.id, type: w.o.PLAYLIST, blockPosition: o, position: t },
                                                  children: (0, i.jsx)(H.B, { playlist: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.key,
                                          );
                                      case h.n.UGC_TRACK:
                                      case h.n.TRACK:
                                          return (0, i.jsx)(
                                              eS.N.Provider,
                                              {
                                                  value: {
                                                      sendSearchFeedback: r,
                                                      id: e.data.albumId ? ''.concat(e.data.id, ':').concat(e.data.albumId) : e.data.id,
                                                      type: w.o.TRACK,
                                                      blockPosition: o,
                                                      position: t,
                                                  },
                                                  children: (0, i.jsx)(sS.w, { track: e.data, overrideContextType: M.b.Search }),
                                              },
                                              e.data.id,
                                          );
                                      case h.n.CLIP:
                                          return (0, i.jsx)(
                                              eS.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: r, id: e.data.clipId, type: w.o.WAVE, blockPosition: o, position: t },
                                                  children: (0, i.jsx)(D.F, { clip: e.data }),
                                              },
                                              e.data.clipId,
                                          );
                                      case h.n.PODCAST:
                                          return (0, i.jsx)(
                                              eS.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: r, id: e.data.id, type: w.o.PODCAST, blockPosition: o, position: t },
                                                  children: (0, i.jsx)(O.a, { album: e.data, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }),
                                              },
                                              e.data.id,
                                          );
                                      case h.n.WAVE:
                                          return (0, i.jsx)(
                                              eS.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: r, id: e.data.stationId, type: w.o.WAVE, blockPosition: 0, position: t },
                                                  children: (0, i.jsx)(sp.H, {
                                                      vibe: e.data,
                                                      cover: e.data.cover,
                                                      description: e.data.description,
                                                      agentVariant: s_.h.SMALL,
                                                  }),
                                              },
                                              e.data.stationId,
                                          );
                                  }
                              }),
                          });
                }),
                sA = (0, n.forwardRef)((e, t) => (0, i.jsx)(sj, { forwardRef: t, ...e }));
            var sy = s(43355),
                sE = s.n(sy);
            let sf = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            className: s,
                            results: r,
                            bestResults: o,
                            sendSearchFeedback: c,
                            searchCorrectedText: m,
                            isShimmerVisible: _,
                            isShimmerActive: p,
                            q2vResults: x,
                            requestAwakeLumenModal: b,
                            ...C
                        } = e,
                        { formatMessage: v } = (0, l.A)(),
                        S = (0, Q.f)(),
                        { isVisible: g, vibe: j } = eP(x, p),
                        A = (0, n.useMemo)(() => {
                            let e = {
                                [h.n.ALL]: { message: v({ id: 'search-results.best' }), type: h.n.ALL, items: [] },
                                [h.n.ARTIST]: { message: v({ id: 'search-results.artist' }), type: h.n.ARTIST, items: [] },
                                [h.n.PODCAST]: { message: v({ id: 'search-results.podcasts-and-books' }), type: h.n.PODCAST, items: [] },
                                [h.n.ALBUM]: { message: v({ id: 'search-results.album' }), type: h.n.ALBUM, items: [] },
                                [h.n.PLAYLIST]: { message: v({ id: 'search-results.playlist' }), type: h.n.PLAYLIST, items: [] },
                                [h.n.CLIP]: { message: v({ id: 'search-results.clip' }), type: h.n.CLIP, items: [] },
                            };
                            r.filter((e) => !!e).forEach((t) => {
                                if (t) {
                                    var s, i;
                                    null == (s = e[t.type]) || s.items.push(t), null == (i = e[h.n.ALL]) || i.items.push(t);
                                }
                            });
                            let t = {
                                [h.n.ARTIST]: d.e8.search.SEARCH_MIXED_ARTIST,
                                [h.n.PODCAST]: d.e8.search.SEARCH_MIXED_PODCAST,
                                [h.n.ALBUM]: d.e8.search.SEARCH_MIXED_ALBUM,
                                [h.n.PLAYLIST]: d.e8.search.SEARCH_MIXED_PLAYLIST,
                                [h.n.CLIP]: d.e8.search.SEARCH_MIXED_CLIP,
                                [eZ.r.PODCAST]: d.e8.search.SEARCH_MIXED_BEST_PODCAST,
                                [eZ.r.OVERVIEW]: d.e8.search.SEARCH_MIXED_BEST_OVERVIEW,
                                [eZ.r.PODCAST_EPISODE]: d.e8.search.SEARCH_MIXED_BEST_PODCAST_EPISODE,
                                [eZ.r.NON_MUSIC]: d.e8.search.SEARCH_MIXED_BEST_NON_MUSIC,
                            };
                            return Object.getOwnPropertyNames(e).map((s, a) => {
                                let r = e[s],
                                    l = r.type === h.n.CLIP;
                                if (r.type === h.n.ALL) {
                                    let e = r.items
                                        .map((e, t) => {
                                            let {
                                                objectPosX: s,
                                                objectPosY: i,
                                                objectsCount: o,
                                            } = (0, e0.$)({ index: t, count: r.items.length, itemsCountPerColumn: 3, showedItemsCountInBlock: 6 });
                                            return (0, e2.G)({
                                                item: e,
                                                index: t,
                                                sendSearchFeedback: c,
                                                blockPosition: a,
                                                objectPosX: s,
                                                objectPosY: i,
                                                objectsCount: o,
                                            });
                                        })
                                        .filter((e) => (0, n.isValidElement)(e));
                                    return (0, i.jsxs)(
                                        n.Fragment,
                                        {
                                            children: [
                                                (0, i.jsx)(sv, { results: o, isShimmerVisible: _, isShimmerActive: p, blockPosition: a, sendSearchFeedback: c }),
                                                (0, i.jsx)(eG.F, {
                                                    blockId: eJ.h.SEARCH_OPEN_BEST_RESULTS,
                                                    blockType: eJ.h.SEARCH_OPEN_BEST_RESULTS,
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    objectsCount: e.length,
                                                    children: (0, i.jsx)(tn, {
                                                        containerClassName: sE().blockMixed,
                                                        className: sE().block,
                                                        maxColumns: 2,
                                                        itemsPerColumn: 3,
                                                        showControls: !0,
                                                        'aria-label': v({ id: 'search-results.other-results' }),
                                                        isShimmerVisible: _,
                                                        isShimmerActive: p,
                                                        children: e,
                                                    }),
                                                }),
                                            ],
                                        },
                                        a,
                                    );
                                }
                                let d = t[r.type];
                                return (0, i.jsx)(
                                    sA,
                                    {
                                        className: sE().block,
                                        headerClassName: sE().blockHeader,
                                        containerClassName: sE().blockCarousel,
                                        blockPosition: a,
                                        items: r.items,
                                        title: r.message,
                                        sendSearchFeedback: c,
                                        isShimmerVisible: _,
                                        isShimmerActive: p,
                                        isClipBlock: l,
                                        ...(d ? { 'data-test-id': d } : {}),
                                    },
                                    a,
                                );
                            });
                        }, [v, r, c, _, p, o]);
                    return (0, i.jsxs)(E.N, {
                        className: (0, a.$)(sE().root, s),
                        containerClassName: sE().container,
                        ref: t,
                        ...(0, N.getDataAttrFromProps)(C),
                        children: [
                            (0, i.jsxs)('div', {
                                className: sE().content,
                                children: [
                                    m && (0, i.jsx)('div', { className: sE().correctedTextBlock, children: m }),
                                    (0, i.jsxs)(e1.h, {
                                        tabId: u.$.TOP,
                                        tabPos: 1,
                                        isTabSelectedByDefault: !0,
                                        children: [
                                            S && g && (0, i.jsx)(eX, { requestAwakeLumenModal: b, vibe: j }),
                                            (0, i.jsx)('div', { className: sE().items, children: A }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(I.A, { children: (0, i.jsx)(f.w, { className: sE().footer }) }),
                        ],
                    });
                }),
                sI = (0, n.forwardRef)((e, t) => (0, i.jsx)(sf, { forwardRef: t, ...e }));
            var sT = s(3435),
                sP = s(3107),
                sk = s(37862),
                sR = s(71610),
                sN = s(22714),
                sL = s(83920),
                sM = s(3796),
                sw = s(20472),
                sO = s(49399),
                sB = s(71670),
                sz = s(28563),
                sD = s(45180),
                sH = s(8946);
            let sV = Math.floor(eI.k / 3);
            var sU = s(87768),
                sW = s.n(sU),
                sG = s(40959),
                s$ = s(88467),
                sY = s(30564),
                sX = s(58636),
                sF = s.n(sX);
            let sK = (0, r.PA)((e) => {
                let { isShimmerVisible: t, isShimmerActive: s, mixes: a } = e,
                    { formatMessage: r } = (0, l.A)(),
                    o = (0, n.useMemo)(
                        () =>
                            t
                                ? (0, sY.k)({ isActive: s, withInfo: !1 })
                                : a.map((e) =>
                                      (0, i.jsx)(
                                          s$.N,
                                          { title: e.title, weblink: e.weblink, covers: e.covers, coverSize: 80, imagesLayoutType: e.imagesLayoutType },
                                          e.id,
                                      ),
                                  ),
                        [s, t, a],
                    );
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(e8.T, { className: sF().carouselHeader, title: r({ id: 'entity-names.mixes' }), titleSize: 'xs', viewAllActionLink: sw.Z.mixes.href }),
                        (0, i.jsx)(e7.F, { className: sF().carouselBlock, itemClassName: sF().mixItem, children: o }),
                    ],
                });
            });
            var sq = s(93750);
            let sQ = (0, r.PA)((e) => {
                let { className: t } = e,
                    {
                        settings: { isMobile: s },
                        search: a,
                    } = (0, el.g)();
                return (a.mixes.loadingState === sO.G.IDLE && (0, n.use)(a.mixes.getMixes(!1)), s)
                    ? (0, i.jsx)(sK, { isShimmerVisible: a.mixes.isLoading || a.mixes.isRejected, isShimmerActive: a.mixes.isLoading, mixes: a.mixes.items })
                    : (0, i.jsx)(sq.n, {
                          isShimmerVisible: a.mixes.isLoading || a.mixes.isRejected,
                          isShimmerActive: a.mixes.isLoading,
                          mixes: a.mixes.items,
                          className: t,
                          withTitle: !0,
                      });
            });
            var sZ = s(38007),
                sJ = s.n(sZ);
            let s0 = (0, r.PA)(() => {
                let { search: e, user: t } = (0, el.g)(),
                    { formatMessage: s } = (0, l.A)(),
                    a = e.historyPage.items;
                if (
                    ((0, n.useEffect)(
                        () => () => {
                            var t;
                            (null == (t = location) ? void 0 : t.pathname) !== sw.Z.searchHistory.href && e.resetHistoryStateRequest();
                        },
                        [e],
                    ),
                    e.isHistoryReady && t.account.data.uid && (0, n.use)(e.getHistory({ userId: t.account.data.uid })),
                    0 === a.length)
                )
                    return null;
                let r = a.map((e, t) => (0, e2.G)({ item: e, index: t, pageId: eb._Q.SEARCH })).filter((e) => (0, n.isValidElement)(e));
                return (0, i.jsx)('section', {
                    className: sJ().root,
                    children: (0, i.jsx)(tn, {
                        headerClassName: sJ().header,
                        containerClassName: sJ().content,
                        isShimmerVisible: e.isHistoryShimmerVisible,
                        isShimmerActive: e.isHistoryLoading,
                        title: s({ id: 'search.history' }),
                        viewAllAction: sw.Z.searchHistory.href,
                        maxColumns: 2,
                        itemsPerColumn: 4,
                        showControls: !0,
                        children: r,
                    }),
                });
            });
            var s1 = s(28531),
                s2 = s(71435),
                s3 = s.n(s2);
            let s7 = (0, r.PA)(() => {
                    let { search: e, user: t } = (0, el.g)(),
                        { formatMessage: s } = (0, l.A)(),
                        a = (0, s1.t)(e.resetHistoryItems),
                        r = e.historyPage.items;
                    if (
                        ((0, n.useEffect)(
                            () => () => {
                                var t;
                                (null == (t = location) ? void 0 : t.pathname) !== sw.Z.searchHistory.href && e.resetHistoryStateRequest();
                            },
                            [e],
                        ),
                        e.isHistoryReady && t.account.data.uid && (0, n.use)(e.getHistory({ userId: t.account.data.uid })),
                        0 === r.length)
                    )
                        return null;
                    let o = r.map((e, t) => (0, e2.G)({ item: e, index: t, pageId: eb._Q.SEARCH })).filter((e) => (0, n.isValidElement)(e));
                    return (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(tn, {
                                headerClassName: s3().header,
                                containerClassName: s3().mixedEntitiesBlock,
                                isShimmerVisible: e.isHistoryShimmerVisible,
                                isShimmerActive: e.isHistoryLoading,
                                title: s({ id: 'search.history' }),
                                viewAllAction: sw.Z.searchHistory.href,
                                titleSize: 'xs',
                                children: o,
                            }),
                            (0, i.jsx)('div', {
                                className: s3().buttonContainer,
                                children: (0, i.jsx)(v.$, {
                                    className: s3().button,
                                    'aria-label': s({ id: 'search.clear-history' }),
                                    disabled: !r.length,
                                    size: 'default',
                                    radius: 'xxxl',
                                    onClick: a,
                                    children: (0, i.jsx)(S.HL, { variant: 'span', size: 'm', type: 'text', children: (0, i.jsx)(C.A, { id: 'search.clear-history' }) }),
                                }),
                            }),
                        ],
                    });
                }),
                s8 = (0, r.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, el.g)();
                    return e ? (0, i.jsx)(s7, {}) : (0, i.jsx)(s0, {});
                });
            var s6 = s(64170),
                s5 = s(7999),
                s4 = s(74694);
            let s9 = (0, r.PA)((e) => {
                    let { searchResults: t, setContentScrollRef: s, contentScrollRef: r, hasSearchText: o } = e,
                        {
                            user: l,
                            search: c,
                            settings: { isMobile: u },
                        } = (0, el.g)(),
                        [h, m] = (0, W.d)();
                    return o
                        ? t
                        : l.isAuthorized
                          ? (0, i.jsx)(s5.h, {
                                scrollElement: r,
                                headerElement: h,
                                children: (0, i.jsxs)(E.N, {
                                    className: sW().scrollableContent,
                                    containerClassName: sW().main,
                                    ref: s,
                                    'data-test-id': d.Xk.search.SEARCH_PAGE_CONTENT,
                                    children: [
                                        (0, i.jsx)(sG.E, {
                                            containerClassName: sW().skeletonContainer,
                                            stickyHeaderClassName: (0, a.$)(sW().skeletonStickyHeader, sW().important),
                                            stickyHeaderTabIndex: u ? null : 0,
                                            headerConcealerComponent: (0, i.jsx)('div', { ref: m }),
                                            landing: c.landing,
                                            errorComponent: (0, i.jsx)(s6.SomethingWentWrong, { className: sW().error, withBackwardControl: !1 }),
                                            headerVariant: u ? s4.V.COMPOSITE : s4.V.STICKY,
                                        }),
                                        (0, i.jsx)(I.A, { children: (0, i.jsx)(f.w, { className: sW().footer }) }),
                                    ],
                                }),
                            })
                          : (0, i.jsxs)(E.N, {
                                className: sW().scrollableContent,
                                containerClassName: sW().main,
                                ref: s,
                                children: [
                                    (0, i.jsx)(n.Suspense, {
                                        children: (0, i.jsx)(eG.F, {
                                            blockId: eJ.h.SEARCH_HISTORY,
                                            blockType: eJ.h.SEARCH_HISTORY,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            blockIdForFrom: eJ.h.SEARCH_HISTORY,
                                            objectsCount: c.historyPage.items.length,
                                            children: (0, i.jsx)(s8, {}),
                                        }),
                                    }),
                                    (0, i.jsx)(n.Suspense, { children: (0, i.jsx)(sQ, { className: sW().mixes }) }),
                                    (0, i.jsx)(I.A, { children: (0, i.jsx)(f.w, { className: sW().footer }) }),
                                ],
                            });
                }),
                ie = 'text',
                it = (0, r.PA)(() => {
                    let e = (0, Q.f)(),
                        { awakeLumenModal: t, requestAwakeLumenModal: s } = (0, sP.z)(),
                        r = (0, b.zb)(0),
                        [C, v] = (0, n.useState)(u.$.TOP),
                        [S, g] = (0, n.useState)(!1),
                        { formatMessage: j } = (0, l.A)(),
                        { search: y, experiments: E, location: f, lumen: I, user: T, settings: P } = (0, el.g)(),
                        { isMobile: k } = P,
                        { contentScrollRef: N, setContentScrollRef: L } = (0, sL.g)(),
                        M = ((e) => {
                            let { formatMessage: t } = (0, l.A)(),
                                s = (0, tz.d)(),
                                { experiments: i } = (0, el.g)(),
                                a = i.checkExperiment(ej.z.WebNextSearchConcerts, 'on');
                            return e
                                ? [{ id: u.$.TOP, displayName: t({ id: 'search-filters.top' }) }, ...e].filter((e) => {
                                      if ((e.id !== u.$.CLIP || s) && (e.id !== u.$.CONCERT || a)) return e;
                                  })
                                : [{ id: u.$.TOP, displayName: t({ id: 'search-filters.top' }) }];
                        })(y.filters),
                        w = (0, sB.X)(),
                        [O, B] = (0, n.useState)(() => {
                            var e;
                            return decodeURIComponent(null != (e = new URLSearchParams(f.searchParams).get(ie)) ? e : '');
                        }),
                        z = (0, n.useRef)(O),
                        D = O.length > 0;
                    E.checkExperiment(ej.z.WebNextDisableSearch, 'on') && (0, o.redirect)(sw.Z.main.href),
                        (0, sM.J)(y.landing.loadingState === sO.G.RESOLVE),
                        (0, n.useEffect)(
                            () => () => {
                                y.reset(), T.isAuthorized && y.landing.reset();
                            },
                            [T.isAuthorized, E, y],
                        ),
                        (0, n.useEffect)(() => {
                            I.isEnabled && I.getData();
                        }, [I]);
                    let H = (0, _.c)((e, t) => {
                            y.resetResults(), 0 !== e.length && y.getSearchResults({ text: decodeURIComponent(e), filter: t });
                        }),
                        V = (0, _.c)(() => {
                            g(!0);
                        }),
                        U = (0, _.c)((e) => {
                            var t, s;
                            if (!r.onTabChange || e === r.value) return;
                            r.onTabChange(e);
                            let i = null != (s = null == (t = M[e]) ? void 0 : t.id) ? s : u.$.TOP;
                            Object.values(u.$).includes(i) && (v(i), H(z.current, i)), N && (N.scrollTop = 0);
                        }),
                        W = (0, _.c)((e) => {
                            let t = e.trim(),
                                s = encodeURIComponent(t);
                            B(s), (z.current = s), 0 !== r.value && U(0), H(s, u.$.TOP), y.history.setShouldUpdateHistory(!0), y.resetSearchCorrectedText(), g(!1);
                            let i = new URL(window.location.href);
                            i.searchParams.set(ie, t), w(String(i));
                        }),
                        G = (0, _.c)((e) => {
                            var t, s;
                            let { id: i, type: a, blockPosition: r, position: o, feedbackType: n } = e;
                            y.sendFeedback({
                                blockType: a,
                                entityId: ''.concat(a, ':').concat(i),
                                timestamp: new Date().toISOString(),
                                searchRequestId: y.searchRequestId,
                                query: z.current,
                                clickType: n,
                                blockPosition: r,
                                position: o,
                                page: null != (s = null == (t = y.pagesLoader.pager) ? void 0 : t.page) ? s : 0,
                            });
                        }),
                        $ = ((e) => {
                            let { search: t, searchText: s, searchFilter: i } = e;
                            return (0, n.useCallback)(
                                function (e) {
                                    var a, r;
                                    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                        n = t.pagesLoader.pager;
                                    if (!n) return;
                                    let l = null != (r = null == (a = t.pagesLoader.items) ? void 0 : a.length) ? r : 0,
                                        c = e.endIndex * o;
                                    if (l > 0 && c >= l - sV) {
                                        if (!t.pagesLoader.hasMorePages) return;
                                        let e = Math.ceil(l / n.perPage);
                                        t.pagesLoader.isPageNeedToLoad(e) && t.getSearchResults({ text: decodeURIComponent(s), filter: i, page: e });
                                    }
                                },
                                [t, s, i],
                            );
                        })({ search: y, searchText: z.current, searchFilter: C }),
                        Y = (0, n.useMemo)(
                            () => (y.searchCorrectedText ? (0, i.jsx)(A, { searchCorrectedText: y.searchCorrectedText, onCorrectText: V }) : null),
                            [V, y.searchCorrectedText],
                        ),
                        X = (0, p.L)(() => {
                            var e, t, a, r, o;
                            if (y.isEmpty) return (0, i.jsx)(R, { searchCorrectedText: Y });
                            let n = {
                                className: sW().searchResults,
                                isShimmerVisible: y.isShimmerVisible,
                                isShimmerActive: y.isLoading,
                                results: null != (e = y.pagesLoader.items) ? e : [],
                                requestsCount: y.pagesLoader.requestsCount,
                                bestResults: y.bestResults,
                                q2vResults: y.q2vResults,
                                sendSearchFeedback: G,
                                searchCorrectedText: Y,
                                getDataByRange: $,
                                ref: L,
                                requestAwakeLumenModal: s,
                            };
                            switch (C) {
                                case u.$.TOP:
                                    return (0, i.jsx)(e1.h, {
                                        tabId: C,
                                        tabPos: y.filterPosition(C),
                                        isTabSelectedByDefault: !1,
                                        children: (0, i.jsx)(sI, { ...n, 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_TOP }),
                                    });
                                case u.$.TRACK:
                                    return (0, i.jsx)(e1.h, {
                                        tabId: C,
                                        tabPos: y.filterPosition(C),
                                        isTabSelectedByDefault: !1,
                                        children: (0, i.jsx)(eG.F, {
                                            blockId: sk.U.SEARCH,
                                            blockType: c.LA.Tracks,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (t = y.pagesLoader.items) ? void 0 : t.length,
                                            children: (0, i.jsx)(eQ, { ...n, filter: C, variant: 'list', 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_TRACK }),
                                        }),
                                    });
                                case u.$.ALBUM:
                                    return (0, i.jsx)(eQ, { ...n, filter: h.n.ALBUM, 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_ALBUM });
                                case u.$.PLAYLIST:
                                    return (0, i.jsx)(eQ, { ...n, filter: h.n.PLAYLIST, 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_PLAYLIST });
                                case u.$.ARTIST:
                                    return (0, i.jsx)(eQ, { ...n, filter: h.n.ARTIST, 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_ARTIST });
                                case u.$.PODCAST:
                                    return (0, i.jsx)(e1.h, {
                                        tabId: C,
                                        tabPos: y.filterPosition(C),
                                        isTabSelectedByDefault: !1,
                                        children: (0, i.jsx)(eG.F, {
                                            blockId: sk.U.SEARCH,
                                            blockType: c.LA.Podcasts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (a = y.pagesLoader.items) ? void 0 : a.length,
                                            children: (0, i.jsx)(eQ, {
                                                ...n,
                                                filter: h.n.PODCAST,
                                                variant: 'list',
                                                'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_PODCAST,
                                            }),
                                        }),
                                    });
                                case u.$.BOOK:
                                    return (0, i.jsx)(e1.h, {
                                        tabId: C,
                                        tabPos: y.filterPosition(C),
                                        isTabSelectedByDefault: !1,
                                        children: (0, i.jsx)(eG.F, {
                                            blockId: sk.U.SEARCH,
                                            blockType: c.LA.Podcasts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (r = y.pagesLoader.items) ? void 0 : r.length,
                                            children: (0, i.jsx)(eQ, { ...n, filter: h.n.BOOK, variant: 'list', 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_BOOK }),
                                        }),
                                    });
                                case u.$.CLIP:
                                    return (0, i.jsx)(eQ, { ...n, filter: h.n.CLIP, 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_CLIP });
                                case u.$.WAVES:
                                    return (0, i.jsx)(e1.h, {
                                        tabId: C,
                                        tabPos: y.filterPosition(C),
                                        isTabSelectedByDefault: !1,
                                        children: (0, i.jsx)(eQ, { ...n, filter: h.n.WAVE, 'data-test-id': d.Xk.search.SEARCH_PAGE_RESULTS_WAVES }),
                                    });
                                case u.$.CONCERT:
                                    return (0, i.jsx)(e1.h, {
                                        tabId: C,
                                        tabPos: y.filterPosition(C),
                                        isTabSelectedByDefault: !1,
                                        children: (0, i.jsx)(eG.F, {
                                            blockId: sk.U.SEARCH,
                                            blockType: c.LA.Concerts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (o = y.pagesLoader.items) ? void 0 : o.length,
                                            children: (0, i.jsx)(eQ, { ...n, filter: h.n.CONCERT }),
                                        }),
                                    });
                                default:
                                    return Y;
                            }
                        }),
                        F = (0, n.useMemo)(() => {
                            if (D)
                                return (0, i.jsx)(sz.F, {
                                    className: sW().carousel,
                                    carouselElement: (0, i.jsx)(sH.wI, {
                                        className: sW().tabs,
                                        ...r,
                                        onTabChange: U,
                                        children: M.map((e, t) =>
                                            (0, i.jsx)(
                                                sD.o,
                                                { className: (0, a.$)(sW().tab, { [sW().tab_selected]: t === r.value }), title: e.displayName, value: t },
                                                t,
                                            ),
                                        ),
                                    }),
                                });
                        }, [M, U, r, D]),
                        K = (0, _.c)(() => {
                            if (y.landing.isLoaded) return y.landing.getSkeleton({ id: m.p.SEARCH, showWizard: T.settings.showWizard }, { preloadBlocksCount: 2 });
                        });
                    y.isNeededToLoad && D && (0, n.use)(y.getSearchResults({ text: decodeURIComponent(O), filter: C })),
                        T.isAuthorized &&
                            y.landing.isNeededToLoad &&
                            !D &&
                            (0, n.use)(y.landing.getSkeleton({ id: m.p.SEARCH, showWizard: T.settings.showWizard }, { preloadBlocksCount: 2 }));
                    let q = j(e ? { id: 'search.input-placeholder-q2v' } : { id: 'search.input-placeholder' });
                    return (0, i.jsxs)(sN.n, {
                        pageId: eb._Q.SEARCH,
                        displayReasonId: y.searchRequestId,
                        children: [
                            t,
                            (0, i.jsxs)('div', {
                                className: (0, a.$)(sW().root, { [sW().root_showFilters]: D, [sW().root_mobile]: k }),
                                'data-test-id': d.Xk.search.SEARCH_PAGE,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: sW().header,
                                        'data-test-id': d.Xk.search.SEARCH_PAGE_HEADER_CONTAINER,
                                        children: [
                                            (0, i.jsx)(x.D, {
                                                className: sW().input,
                                                autoFocus: !0,
                                                initialValue: z.current,
                                                placeholder: q,
                                                onChange: W,
                                                resetButtonAriaLabel: j({ id: 'interface-actions.reset-search-input' }),
                                                correctedValue: S ? y.searchCorrectedText : null,
                                                innerInputProps: { 'data-test-id': d.Xk.search.SEARCH_PAGE_SEARCH_INPUT },
                                                resetButtonProps: { 'data-test-id': d.Xk.search.SEARCH_PAGE_SEARCH_INPUT_RESET_BUTTON },
                                                searchIconProps: { 'data-test-id': d.Xk.search.SEARCH_PAGE_SEARCH_INPUT_ICON },
                                            }),
                                            F,
                                        ],
                                    }),
                                    (0, i.jsx)('div', {
                                        className: sW().content,
                                        children: (0, i.jsx)(sR.j, {
                                            children: (0, i.jsx)(s9, { hasSearchText: D, contentScrollRef: N, setContentScrollRef: L, searchResults: X }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(sT.p, { onFinishSuccess: K }),
                        ],
                    });
                });
        },
        96919: (e) => {
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
    },
    (e) => {
        e.O(
            0,
            [
                7848, 6639, 7034, 7231, 5718, 7972, 6347, 3183, 9763, 3931, 7258, 7428, 9511, 5108, 4965, 6723, 488, 3379, 3647, 8497, 7680, 8868, 5583, 5976, 5367, 4413,
                1914, 4761, 992, 6706, 1311, 5201, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1417, 9755, 6477, 7275, 2586, 8347, 4522, 7702, 6874, 861, 782, 4668,
                9740, 1175, 14, 8915, 8816, 2563, 6341, 3759, 4797, 4638, 277, 8160, 1385, 9710, 2143, 4220, 9562, 7358,
            ],
            () => e((e.s = 3735)),
        ),
            (_N_E = e.O());
    },
]);
