(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8390],
    {
        3125: (e) => {
            e.exports = { popover: 'AlbumDonationMenu_popover__Fswfa' };
        },
        5925: (e) => {
            e.exports = {
                root: 'CommonAlbumPage_root__E8c_3',
                content: 'CommonAlbumPage_content__vRSnu',
                scrollContent: 'CommonAlbumPage_scrollContent__0XS83',
                header: 'CommonAlbumPage_header__jS_be',
                text: 'CommonAlbumPage_text__kqBSb',
                footerContainer: 'CommonAlbumPage_footerContainer__JvjKN',
                footer: 'CommonAlbumPage_footer__dBXP4',
                averageColorBackground: 'CommonAlbumPage_averageColorBackground__hs1_3',
                virtualScroll: 'CommonAlbumPage_virtualScroll__Sc_gs',
                virtualItem: 'CommonAlbumPage_virtualItem__yhvPB',
                label: 'CommonAlbumPage_label__TErtx',
                labelLinkContainer: 'CommonAlbumPage_labelLinkContainer__fk6OB',
                labelLink: 'CommonAlbumPage_labelLink__v4EnM',
                important: 'CommonAlbumPage_important__GXaZH',
            };
        },
        6668: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => s });
            var i = a(53548),
                l = a(29993);
            let s = () => {
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
                    (0, l.c)((t, a) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, a), a)))
                );
            };
        },
        8523: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => u });
            var i = a(88800),
                l = a(84961),
                s = a(53548),
                o = a(49784),
                n = a(82212),
                r = a(72714),
                d = a(4465);
            let c = { [n.t.ARTIST_RECOMMENDATIONS_PROMO]: r.v, [n.t.SIMPLE_ARTIST_RECOMMENDATIONS_PROMO]: d.i },
                u = (0, l.PA)((e) => {
                    let {
                            block: t,
                            title: a,
                            impId: l,
                            getArtistRecommendationsPromo: n,
                            className: r,
                            containerClassName: d,
                            headerClassName: u,
                            headingVariant: m = 'h2',
                        } = e,
                        { type: b, meta: p, isLoaded: v, isNeededToLoad: h, isVisible: x, setOutdated: _ } = t;
                    if (((0, o.W)({ enabled: x && v }), void 0 !== l && h && (0, s.use)(n({ impId: l, deduplicateNewReleases: !0 })), !x)) return null;
                    let A = c[b];
                    return (0, i.jsx)(A, {
                        ...t,
                        meta: { ...p, title: a },
                        isLoaded: v,
                        setOutdated: _,
                        className: r,
                        containerClassName: d,
                        headerClassName: u,
                        headingVariant: m,
                    });
                });
        },
        10270: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => d });
            var i = a(56949),
                l = a(53548),
                s = a(29993),
                o = a(44230),
                n = a(72288);
            let r = { width: 400, height: 400 },
                d = (e) => {
                    let { count: t, getEstimateSize: a, gap: d, containerRef: c, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, n.g)(),
                        { contentScrollRef: b } = (0, o.g)(),
                        p = (0, l.useRef)(new Map()),
                        v = (0, l.useRef)(void 0),
                        h = {
                            count: t,
                            gap: d,
                            estimateSize: (e) => {
                                let t = p.current.get(String(e));
                                return null != t ? t : a(e);
                            },
                            overscan: u,
                            initialRect: r,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, a) => {
                                if (!t) return 0;
                                let i = t.getBoundingClientRect().top;
                                return e && 1 ? i + window.scrollY : !e && a ? i + a.scrollTop : 0;
                            })(m, c, b),
                        },
                        x = (0, i.XW)(h),
                        _ = (0, i.Te)({ ...h, getScrollElement: () => b, initialOffset: null == b ? void 0 : b.scrollTop }),
                        A = m ? x : _,
                        j = (0, s.c)(() => {
                            A.measure();
                        });
                    return (
                        (0, l.useEffect)(() => {
                            v.current ||
                                (v.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let a = e.target.getAttribute('data-index');
                                        if (e.target && a) {
                                            let i = e.contentRect.height;
                                            i && i !== p.current.get(a) && (p.current.set(a, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && j());
                                }));
                        }, [j]),
                        { virtualizer: A, resizeObserver: v.current }
                    );
                };
        },
        10325: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => l });
            var i = a(43522);
            let l = (e) => {
                var t, a;
                return null != (a = null == (t = (0, i.j)()) ? void 0 : t.get(e)) ? a : null;
            };
        },
        12533: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            let i = (e, t) => {
                let [a, i] = e.split('?'),
                    l = new URLSearchParams(i || '');
                for (let [e, a] of new URLSearchParams(t).entries()) l.set(e, a);
                let s = l.toString();
                return ''.concat(a).concat(s ? '?'.concat(s) : '');
            };
        },
        14347: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => v });
            var i = a(88800),
                l = a(84961),
                s = a(53548),
                o = a(17392),
                n = a(39079),
                r = a(98644),
                d = a(73805),
                c = a(15232),
                u = a(99479),
                m = a(56712),
                b = a(33133),
                p = a.n(b);
            let v = (0, l.PA)((e) => {
                let { track: t, albumArtists: a, position: l, playContextParams: b, withLightning: v } = e,
                    h = (0, n.D)({ playContextParams: b, entityId: t.entityId }),
                    x = (0, s.useCallback)((e) => (0, i.jsx)(u.G, { track: t, position: l, className: p().playButtonCell, ...e }), [t, l]);
                return (0, i.jsx)(m.C, {
                    track: t,
                    withLightning: v,
                    meta: (0, i.jsx)(c.j, { variant: r.X.ALBUM, albumArtists: a, track: t, withSavingQueryParams: !0 }),
                    playButtonCellRender: x,
                    controls: (0, i.jsx)(d.Q, { withLightning: v, track: t, className: p().controlsBarCell, utmLink: b.contextData.utmLink }),
                    ...h,
                    'data-test-id': o.Kq.track.TRACK_ALBUM,
                });
            });
        },
        14533: (e) => {
            e.exports = {
                controlsContainer: 'CommonPageHeader_controlsContainer__4_h22',
                controls: 'CommonPageHeader_controls__c27E_',
                playControl: 'CommonPageHeader_playControl__gYOuR',
                playControl_withLogin: 'CommonPageHeader_playControl_withLogin__FL_L6',
            };
        },
        14912: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => l });
            var i = a(53548);
            let l = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        20012: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => i });
            var i = (function (e) {
                return ((e.TRACK = 'track'), (e.TEXT = 'text'), e);
            })({});
        },
        22126: (e) => {
            e.exports = {
                menuControl: 'PageHeaderAlbumControls_menuControl__wlqyr',
                likeControl: 'PageHeaderAlbumControls_likeControl__eohAO',
                pinOrDonationControl: 'PageHeaderAlbumControls_pinOrDonationControl__3aFUW',
                trailerControl: 'PageHeaderAlbumControls_trailerControl___HcW0',
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
        27076: (e) => {
            e.exports = {
                root: 'Offline_root__IxjsY',
                container: 'Offline_container__2V5Vo',
                icon: 'Offline_icon__jDmpJ',
                title: 'Offline_title__Y2CtW',
                text: 'Offline_text__Nhult',
                buttons: 'Offline_buttons__ZOFI7',
                button: 'Offline_button__QSA_j',
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
        27395: (e, t, a) => {
            'use strict';
            a.d(t, { Rk: () => n, VN: () => s, nd: () => o, vY: () => l });
            var i = a(70025);
            let l = 10,
                s = 1,
                o = [i.O.ABOUT, i.O.TRACKS],
                n = 5;
        },
        27533: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => i });
            let i = (e) => {
                let t = Math.floor(e / 1e3),
                    a = Math.floor(t / 3600),
                    i = Math.floor((t % 3600) / 60),
                    l = t % 60,
                    s = 'PT';
                return (a > 0 && (s += ''.concat(a, 'H')), i > 0 && (s += ''.concat(i, 'M')), (l > 0 || 'PT' === s) && (s += ''.concat(l, 'S')), s);
            };
        },
        31946: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => l });
            var i = a(67174);
            let l = (e) => (0, i.u)('/label/:labelId', { params: { labelId: e } });
        },
        33133: (e) => {
            e.exports = { playButtonCell: 'TrackAlbum_playButtonCell__pLJte', controlsBarCell: 'TrackAlbum_controlsBarCell__XUUCc' };
        },
        38628: (e) => {
            e.exports = {
                tabCarousel: 'NonMusicContent_tabCarousel__EBHWC',
                tab: 'NonMusicContent_tab__LIh_U',
                contentAbout: 'NonMusicContent_contentAbout__BMIP5',
                infoBlock: 'NonMusicContent_infoBlock__IyjXA',
                infoTitle: 'NonMusicContent_infoTitle__Wf9EC',
                lastEpisodes: 'NonMusicContent_lastEpisodes__Xa8Xp',
                rewindControl: 'NonMusicContent_rewindControl__7tncY',
                label: 'NonMusicContent_label__9GlIS',
            };
        },
        41578: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => c });
            var i = a(53548),
                l = a(58390),
                s = a(8655),
                o = a(69704),
                n = a(12533),
                r = a(34303);
            let d = { [s.S.Light]: 'yandex_music', [s.S.Dark]: 'yandex_music_dark' },
                c = () => {
                    let e = (0, l.useSearchParams)(),
                        { theme: t } = (0, o.W)();
                    return (0, i.useCallback)(
                        (a) => {
                            if (!t) return a;
                            let i = new URLSearchParams(e);
                            i.set('wl', d[t]);
                            let l = e.get(r.K.UTM_CAMPAIGN);
                            return (l && i.set('meta', 'campaignid_'.concat(l)), (0, n.C)(a, i));
                        },
                        [t, e],
                    );
                };
        },
        44440: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => i });
            let i = (e, t) => {
                let a = new URL(window.location.href),
                    i = a.searchParams;
                return (i.set(e, t), (a.search = i.toString()), a.toString());
            };
        },
        46474: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => c });
            var i = a(53548),
                l = a(29993),
                s = a(72288);
            a(97956);
            var o = a(34303),
                n = a(67174),
                r = (a(10325), a(43522)),
                d = (a(44440), a(14912));
            let c = () => {
                let {
                        experiments: e,
                        user: {
                            account: {
                                data: { hasPlus: t },
                            },
                        },
                    } = (0, s.g)(),
                    a = (0, d.X)(),
                    c = (0, i.useCallback)(() => {}, [!1]),
                    u = (0, l.c)((e, t) => {}),
                    m = (0, l.c)(() => {
                        let e = (0, r.j)();
                        if (null === e) return;
                        e.delete(o.K.CLID);
                        let t = new URL(window.location.href);
                        ((t.search = e.toString()), a(t.toString()));
                    }),
                    b = (0, l.c)((e, t) => {
                        if (!e || !t) return;
                        let a = c();
                        if (!a) return;
                        let { parsedClid: i } = a;
                        return t === i.albumId && e.clid === i.cpa.clid && e.artistId === i.cpa.artistId;
                    }),
                    p = (0, l.c)((e) => {
                        let t = c();
                        return (null == t ? void 0 : t.parsedClid.albumId) === e;
                    }),
                    v = (0, l.c)((e, t) => {
                        let a = c();
                        if (!a || a.parsedClid.albumId !== e) return t;
                        let { href: i } = (0, n.u)(t, { query: { [o.K.CLID]: a.queryClid } });
                        return i;
                    });
                return {
                    isCPAEnabled: !1,
                    getClidFromQuery: c,
                    setClidToQuery: u,
                    deleteClidFromQuery: m,
                    checkIsValidClid: b,
                    getAlbumUrlWithSavedClid: v,
                    checkIsCurrentAlbumPage: p,
                };
            };
        },
        52589: (e) => {
            e.exports = {
                meta: 'PageHeaderNonMusic_meta__9DQPy',
                infoNote: 'PageHeaderNonMusic_infoNote__7xbV5',
                infoNoteIcon: 'PageHeaderNonMusic_infoNoteIcon__VDK7_',
                infoNoteText: 'PageHeaderNonMusic_infoNoteText__DCQq8',
                plusPaywallButton: 'PageHeaderNonMusic_plusPaywallButton__O7Tx_',
                controls_withPaywallButton: 'PageHeaderNonMusic_controls_withPaywallButton__Csp5U',
                booksLogo: 'PageHeaderNonMusic_booksLogo__4_TgU',
                controlsBlock: 'PageHeaderNonMusic_controlsBlock__jta99',
                controlsBlock_withPaywallButton: 'PageHeaderNonMusic_controlsBlock_withPaywallButton__vngBY',
            };
        },
        52632: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => d });
            var i = a(88800),
                l = a(65724),
                s = a(19994),
                o = a(90285),
                n = a.n(o);
            let r = (e) => {
                    let { isActive: t } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(n().shimmer, n().donation),
                        children: [
                            (0, i.jsx)(s.W, { isActive: t, radius: 'round', className: n().shimmerCover }),
                            (0, i.jsxs)('div', {
                                className: n().shimmerContainer,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: n().shimmerText,
                                        children: [
                                            (0, i.jsx)(s.W, { isActive: t, radius: 'xxxl', className: n().shimmerArtist }),
                                            (0, i.jsx)(s.W, { isActive: t, radius: 'xxxl', className: n().shimmerGoal }),
                                        ],
                                    }),
                                    (0, i.jsx)(s.W, { isActive: t, radius: 'xxxl', className: n().shimmerButton }),
                                ],
                            }),
                        ],
                    });
                },
                d = (e) => Array.from({ length: 10 }, (t, a) => (0, i.jsx)(r, { isActive: e }, a));
        },
        58933: (e) => {
            e.exports = { root: 'Shimmer_root__NvUMY' };
        },
        59918: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => s });
            var i = a(27169),
                l = a(29201);
            let s = (e) => {
                var t, a, s, o, n;
                return e
                    ? {
                          id: e.id,
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, l.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: i.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, l.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (a = e.counts) ? void 0 : a.albums) || 0,
                              alsoAlbums: (null == (s = e.counts) ? void 0 : s.compilations) || 0,
                              tracks: (null == (o = e.counts) ? void 0 : o.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (n = e.trailer) ? void 0 : n.isAvailable) },
                          hasPromotions: !1,
                          genres: [],
                          links: [],
                          ticketsAvailable: !1,
                          ratings: { week: 0, month: 0, day: 0 },
                          composer: e.isComposer || !1,
                          various: e.various || !1,
                      }
                    : {
                          id: '',
                          name: '',
                          various: !1,
                          composer: !1,
                          decomposed: [],
                          ogImage: '',
                          hasPromotions: !1,
                          genres: [],
                          ticketsAvailable: !1,
                          links: [],
                          ratings: { week: 0, month: 0, day: 0 },
                          counts: { directAlbums: 0, alsoAlbums: 0, tracks: 0, alsoTracks: 0 },
                          available: !1,
                          disclaimers: [],
                      };
            };
        },
        61499: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { K: () => i }),
                (function (e) {
                    ((e.EXPLICIT = 'explicit'), (e.CLEAN = 'clean'));
                })(i || (i = {})));
        },
        69750: (e) => {
            e.exports = {
                carouselBlocks: 'AlbumContent_carouselBlocks__bOsTV',
                carouselBlock: 'AlbumContent_carouselBlock__QhSlm',
                carouselBlockHeader: 'AlbumContent_carouselBlockHeader__Liibv',
                carouselContainer: 'AlbumContent_carouselContainer__Y1M_e',
                label: 'AlbumContent_label__2jz4j',
            };
        },
        70025: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => i });
            let i = { ABOUT: 'about', TRACKS: 'track-list' };
        },
        70278: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => l });
            var i = a(59918);
            let l = (e) => {
                var t;
                if (!e)
                    return {
                        id: 0,
                        title: '',
                        availableForOptions: [],
                        availableForPremiumUsers: !0,
                        artists: [],
                        volumes: [],
                        ogImage: '',
                        availablePartially: !1,
                        trackCount: 0,
                        recent: !1,
                        veryImportant: !1,
                        labels: [],
                        metaType: '',
                        availableForMobile: !0,
                    };
                let a = (null == (t = e.artists) ? void 0 : t.map(i.N)) || [];
                return {
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    coverUri: e.coverUri,
                    year: e.year,
                    version: e.version,
                    availableForOptions: e.availableForOptions || [],
                    availableForPremiumUsers: e.availableForPremiumUsers || !0,
                    artists: a,
                    volumes: [],
                    ogImage: e.coverUri || '',
                    availablePartially: !1,
                    trackCount: e.trackCount || 0,
                    recent: !1,
                    veryImportant: !1,
                    labels: [],
                    metaType: '',
                    availableForMobile: !0,
                };
            };
        },
        72074: (e) => {
            e.exports = { root: 'AlbumDonationMenuItem_root__Ajw_w', cover: 'AlbumDonationMenuItem_cover__Gg8_a', image: 'AlbumDonationMenuItem_image__AI5zU' };
        },
        72086: (e) => {
            e.exports = { root: 'LastEpisodes_root__4JPKj', blockHeader: 'LastEpisodes_blockHeader__se7bd', shimmerItem: 'LastEpisodes_shimmerItem__Iirx5' };
        },
        72503: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => _ });
            var i = a(88800),
                l = a(65724),
                s = a(53548),
                o = a(2058),
                n = a(88969),
                r = a(35412),
                d = a(96817),
                c = a(52300),
                u = a(7555),
                m = a(29504),
                b = a(81877),
                p = a(91292),
                v = a(90285),
                h = a.n(v);
            let x = (e) => {
                    let { artist: t, goal: a, onNavigateToArtist: s, onNavigateToDonation: v, forwardRef: x, ..._ } = e,
                        { formatMessage: A } = (0, o.A)();
                    return (0, i.jsxs)('div', {
                        ref: x,
                        className: (0, l.$)(h().root, h().donation),
                        ...(0, r.OZ)(_),
                        children: [
                            (0, i.jsx)(u.t, {
                                radius: 'round',
                                className: h().cover,
                                children: (0, i.jsx)(p.N, {
                                    href: t.url,
                                    onClick: s,
                                    'aria-label': A({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                                    children: (0, i.jsx)(b.B, {
                                        className: h().image,
                                        src: t.coverUri,
                                        isAvailable: t.isAvailable,
                                        size: 200,
                                        fit: 'cover',
                                        withAvatarReplace: !0,
                                        'aria-hidden': !0,
                                    }),
                                }),
                            }),
                            (0, i.jsxs)('div', {
                                className: h().container,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: h().text,
                                        children: [
                                            (0, i.jsx)(m.DZ, { variant: 'span', size: 'xs', weight: 'bold', lineClamp: 2, className: h().artist, children: t.name }),
                                            (0, i.jsx)(m.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                lineClamp: 2,
                                                className: h().goal,
                                                children: a,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(d.$, {
                                        role: 'link',
                                        size: 's',
                                        color: 'secondary',
                                        onClick: v,
                                        className: h().label,
                                        withRipple: !1,
                                        children: [
                                            (0, i.jsx)(c.I, { variant: 'ruble', size: 'xxxs' }),
                                            (0, i.jsx)(m.HL, {
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                variant: 'span',
                                                children: (0, i.jsx)(n.A, { id: 'donation.support-button' }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                _ = (0, s.forwardRef)((e, t) => (0, i.jsx)(x, { forwardRef: t, ...e }));
        },
        72858: (e) => {
            e.exports = { root: 'PlusPaywallButton_root__ftsxl', title: 'PlusPaywallButton_title__8PpX0', subtitle: 'PlusPaywallButton_subtitle__brC59' };
        },
        74929: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => u });
            var i = a(88800),
                l = a(53548),
                s = a(87999),
                o = a(49784),
                n = a(7833),
                r = a(47934),
                d = a(10079);
            let c = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: l,
                        title: c,
                        description: u,
                        albums: m,
                        className: b,
                        containerClassName: p,
                        headerClassName: v,
                        viewAllActionLink: h,
                        headingRef: x,
                        headingVariant: _,
                        shouldSendAnalyticsOnLoaded: A,
                        ...j
                    } = e;
                    return (
                        (0, o.W)({ enabled: !!A && !a }),
                        (0, i.jsx)(r.O, {
                            isShimmerVisible: a,
                            isShimmerActive: l,
                            className: b,
                            headerClassName: v,
                            containerClassName: p,
                            ref: t,
                            title: c,
                            description: u,
                            viewAllActionLink: h,
                            headingRef: x,
                            headingVariant: _,
                            ...j,
                            children:
                                null == m
                                    ? void 0
                                    : m.map((e, t) =>
                                          (0, i.jsx)(
                                              n.B,
                                              {
                                                  objectType: s.DomainObjectType.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  children: (0, i.jsx)(d.a, {
                                                      album: e,
                                                      contentLinesCount: 3,
                                                      withAddition: !e.isNonMusic,
                                                      withLikesCount: e.isNonMusic,
                                                  }),
                                              },
                                              e.id,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, l.forwardRef)((e, t) => (0, i.jsx)(c, { forwardRef: t, ...e }));
        },
        77560: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => s });
            var i = a(61691),
                l = a(31946);
            let s = (e) => {
                let { labels: t, type: a } = e;
                return {
                    items: null == t ? void 0 : t.map((e) => ({ ...e, link: (0, l.r)(e.id) })),
                    count: null == t ? void 0 : t.length,
                    hasLabels: !!(null == t ? void 0 : t.length),
                    isPublisher: a === i._.PODCAST,
                    names: null == t ? void 0 : t.map((e) => e.name).join(', '),
                };
            };
        },
        77783: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => b });
            var i = a(88800),
                l = a(65724),
                s = a(53548),
                o = a(35412),
                n = a(53323),
                r = a(18486),
                d = a(31764),
                c = a(23717),
                u = a.n(c);
            let m = (e) => {
                    let {
                            className: t,
                            forwardRef: a,
                            headerClassName: c,
                            containerClassName: m,
                            headingVariant: b,
                            title: p,
                            viewAllActionLink: v,
                            description: h,
                            children: x,
                            ..._
                        } = e,
                        A = (0, s.useId)(),
                        j = (0, s.useRef)(null);
                    return (0, i.jsxs)('section', {
                        ref: a,
                        className: (0, l.$)(u().root, t),
                        ...(0, o.OZ)(_),
                        children: [
                            (0, i.jsx)(r.T, {
                                className: c,
                                labeledForId: A,
                                title: p,
                                description: h,
                                viewAllActionLink: v,
                                controls: (0, i.jsx)(d.X, { className: u().controls, carouselRef: j }),
                                headingVariant: b,
                                withDescription: !!h,
                            }),
                            (0, i.jsx)(n.F, { ref: j, itemClassName: (0, l.$)(u().item, u().important), className: m, 'aria-labelledby': A, children: x }),
                        ],
                    });
                },
                b = (0, s.forwardRef)((e, t) => (0, i.jsx)(m, { forwardRef: t, ...e }));
        },
        81828: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => l });
            var i = a(61499);
            let l = (e) => e === i.K.EXPLICIT;
        },
        83357: (e) => {
            e.exports = { root: 'TextVolume_root__wxSaK' };
        },
        85178: (e) => {
            e.exports = { root: 'RelatedContent_root__Dl1Nr', carousel: 'RelatedContent_carousel__pmv5c', header: 'RelatedContent_header__527S3' };
        },
        86854: (e) => {
            e.exports = {
                meta: 'PageHeaderAlbumMeta_meta__zsMI8',
                artistCover: 'PageHeaderAlbumMeta_artistCover__L3jJ0',
                artistLabel: 'PageHeaderAlbumMeta_artistLabel__2WZSM',
                year: 'PageHeaderAlbumMeta_year__2X3NO',
                artists: 'PageHeaderAlbumMeta_artists__Nfdob',
                artistsSpoiler: 'PageHeaderAlbumMeta_artistsSpoiler__VOkfE',
                artistLink: 'PageHeaderAlbumMeta_artistLink__eTSrZ',
                year_dot: 'PageHeaderAlbumMeta_year_dot__TrSFr',
            };
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
        91147: (e) => {
            e.exports = { plusPaywallButton: 'PageHeaderAlbum_plusPaywallButton__yJWCh', booksLogo: 'PageHeaderAlbum_booksLogo__f4gjV' };
        },
        97826: (e, t, a) => {
            'use strict';
            function i(e, t) {
                return e.map((e) => 'https://'.concat(t, '/artist/').concat(e.id));
            }
            a.d(t, { x: () => i });
        },
        98158: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => b });
            var i = a(88800),
                l = a(29993),
                s = a(7123),
                o = a(79546),
                n = a(87528),
                r = a(29595),
                d = a(74965),
                c = a(9630),
                u = a(72288);
            let m = (e) => {
                var t;
                return null == (t = e.data) ? void 0 : t.entityId;
            };
            function b(e, t, a, b) {
                let p = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : m,
                    { notify: v } = (0, d.l)(),
                    { fullscreenPlayer: h } = (0, u.g)(),
                    x = (0, c.e)();
                return (0, l.c)(() => {
                    let l = e.reduce((e, t) => {
                        let a = p(t);
                        return (a && e.push({ type: s.z4.Unloaded, meta: { id: a } }), e);
                    }, []);
                    if (!l.length) return;
                    switch (t) {
                        case o.N.LAST:
                            null == x || x.injectLast({ entitiesData: l, sourceContextData: null != a ? a : void 0 });
                            break;
                        case o.N.NEXT:
                            null == x || x.injectNext({ entitiesData: l, sourceContextData: null != a ? a : void 0 });
                    }
                    let d = h.modal.isOpened ? r.u.FULLSCREEN_INFO : r.u.INFO;
                    v((0, i.jsx)(n.l, { entityVariant: b.entityVariant, variant: t, entityTitle: b.entityTitle, coverUri: b.coverUri }), { containerId: d });
                });
            }
        },
        98390: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => aY });
            var i = a(88800),
                l = a(84961),
                s = a(53548),
                o = a(58390),
                n = a(87999),
                r = a(54721),
                d = a(76903),
                c = a(17392),
                u = a(79070),
                m = a(44236),
                b = a(88969),
                p = a(29993),
                v = a(96817),
                h = a(52300),
                x = a(29504),
                _ = a(4370),
                A = a(78940),
                j = a(72288),
                g = a(27076),
                y = a.n(g);
            let C = (0, l.PA)(() => {
                let { slam: e } = (0, j.g)(),
                    t = (0, A.Z)(_.Z.mymusicDownloadsTracks.href),
                    a = (0, A.Z)(_.Z.settings.href),
                    l = (0, p.c)(() => {
                        window.location.href = _.Z.main.href;
                    }),
                    o = (0, s.useMemo)(
                        () =>
                            e.isOfflineModeEnabled ? (0, i.jsx)(b.A, { id: 'offline.offline-mode-enabled' }) : (0, i.jsx)(b.A, { id: 'offline.no-internet-connection' }),
                        [e.isOfflineModeEnabled],
                    ),
                    n = (0, s.useMemo)(
                        () =>
                            e.isOfflineModeEnabled
                                ? (0, i.jsx)(v.$, {
                                      onClick: a,
                                      className: y().button,
                                      color: 'secondary',
                                      size: 'l',
                                      radius: 'xxxl',
                                      children: (0, i.jsx)(x.HL, {
                                          type: 'controls',
                                          variant: 'span',
                                          size: 'm',
                                          children: (0, i.jsx)(b.A, { id: 'offline.disable-offline-mode' }),
                                      }),
                                  })
                                : (0, i.jsx)(v.$, {
                                      onClick: l,
                                      className: y().button,
                                      color: 'secondary',
                                      size: 'l',
                                      radius: 'xxxl',
                                      children: (0, i.jsx)(x.HL, {
                                          type: 'controls',
                                          variant: 'span',
                                          size: 'm',
                                          children: (0, i.jsx)(b.A, { id: 'page-error.restart-app-button' }),
                                      }),
                                  }),
                        [l, a, e.isOfflineModeEnabled],
                    );
                return (0, i.jsx)('div', {
                    className: y().root,
                    children: (0, i.jsxs)('div', {
                        className: y().container,
                        children: [
                            (0, i.jsx)(h.I, { className: y().icon, variant: 'offline', size: 'xxl' }),
                            (0, i.jsx)(x.DZ, { className: y().title, variant: 'div', size: 'xs', children: o }),
                            (0, i.jsx)(x.HL, {
                                className: y().text,
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'normal',
                                children: (0, i.jsx)(b.A, { id: 'offline.listen-downloaded-content' }),
                            }),
                            (0, i.jsxs)('div', {
                                className: y().buttons,
                                children: [
                                    n,
                                    (0, i.jsx)(v.$, {
                                        color: 'primary',
                                        onClick: t,
                                        role: 'link',
                                        size: 'l',
                                        radius: 'xxxl',
                                        className: y().button,
                                        children: (0, i.jsx)(b.A, { id: 'interface-actions.go-to-collection' }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var k = a(34303),
                f = a(3685),
                T = a(69630),
                P = a(67174),
                N = a(60757),
                L = a(98427),
                I = a(27054),
                S = a(50327),
                E = a(52150);
            let O = (e) => {
                let { pageAlbumId: t, children: a } = e,
                    l = (0, s.useMemo)(() => ({ pageAlbumId: t }), [t]);
                return (0, i.jsx)(E.H.Provider, { value: l, children: a });
            };
            var M = a(46474),
                B = a(44230),
                w = a(37670),
                R = a(19998),
                D = a(93317),
                U = a(70278),
                H = a(30144),
                X = a(20775),
                z = a(324),
                V = a(46511),
                F = a(97826),
                K = a(13012),
                Y = a(57297),
                G = a(2218),
                W = a(77863),
                $ = a(45383),
                q = a(61691),
                Z = a(47580);
            function Q(e) {
                let { type: t, genre: a } = e;
                return [q._.AUDIOBOOK, q._.FAIRY_TALE].includes(null != t ? t : '') || ['audiobooksinenglish', 'fiction'].includes(null != a ? a : '');
            }
            function J(e) {
                return { minutes: Math.floor((e / 60) % 60), hours: Math.floor(e / 60 / 60) };
            }
            var ee = a(19049);
            function et(e) {
                let { albumType: t, messageFormatter: a } = e;
                switch (t) {
                    case q._.SINGLE:
                        return a({ id: 'metadata.single' });
                    case q._.PODCAST:
                        return a({ id: 'metadata.podcast' });
                    case q._.AUDIOBOOK:
                        return a({ id: 'metadata.audiobook' });
                    case q._.FAIRY_TALE:
                        return a({ id: 'metadata.fairy-tale' });
                    default:
                        return a({ id: 'metadata.album' });
                }
            }
            async function ea(e, t) {
                var a, i, l, s;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let o = await (0, V.W)(t.locale),
                    n = (0, K.N)(e.title);
                return {
                    robots: (0, X.x)(!!e.available, e.disclaimers) ? { index: !1, follow: !0 } : void 0,
                    title:
                        null != (a = t.disclaimerTitle)
                            ? a
                            : (function (e) {
                                  let { albumMeta: t, messageFormatter: a } = e,
                                      i = (0, Z.j)(t.artists);
                                  return Q({ type: t.type, genre: t.genre })
                                      ? i
                                          ? a(
                                                { id: 'metadata.audiobook-title-with-artists' },
                                                { albumTitle: t.title, artistsNames: i, artistsNamesCount: t.artists.length },
                                            )
                                          : a({ id: 'metadata.audiobook-title-without-artists' }, { albumTitle: t.title })
                                      : t.type === q._.PODCAST
                                        ? a({ id: 'metadata.podcast-title' }, { albumTitle: t.title })
                                        : i
                                          ? a({ id: 'metadata.album-title-with-artists' }, { albumTitle: t.title, artistsNames: i })
                                          : a({ id: 'metadata.album-title-without-artists' }, { albumTitle: t.title });
                              })({ albumMeta: e, messageFormatter: o }),
                    description: (function (e) {
                        let { albumMeta: t, messageFormatter: a } = e,
                            i = (0, Z.j)(t.artists);
                        return Q({ type: t.type, genre: t.genre })
                            ? i
                                ? a({ id: 'metadata.audiobook-title-with-artists' }, { albumTitle: t.title, artistsNames: i, artistsNamesCount: t.artists.length })
                                : a({ id: 'metadata.audiobook-title-without-artists' }, { albumTitle: t.title })
                            : t.type === q._.PODCAST
                              ? a({ id: 'metadata.podcast-title' }, { albumTitle: t.title })
                              : i
                                ? a({ id: 'metadata.album-title-with-artists' }, { albumTitle: t.title, artistsNames: i })
                                : a({ id: 'metadata.album-title-without-artists' }, { albumTitle: t.title });
                    })({ albumMeta: e, messageFormatter: o }),
                    openGraph: (0, Y.i)({
                        ogTitle: n,
                        ogDescription: (function (e) {
                            var t, a, i;
                            let { albumMeta: l, messageFormatter: s } = e,
                                o = (0, ee.Y)((0, Z.j)(l.artists), 96, !1);
                            if (Q({ type: l.type, genre: l.genre })) {
                                let { hours: e, minutes: a } = J(null != (t = l.durationSec) ? t : 0),
                                    i = s({ id: 'metadata.hours-and-minutes' }, { hours: e, minutes: a });
                                return [o, et({ albumType: l.type, messageFormatter: s }), i].join(' • ');
                            }
                            return l.type === q._.PODCAST
                                ? [
                                      (0, ee.Y)(null != (a = l.description) ? a : '', 96, !1),
                                      et({ albumType: l.type, messageFormatter: s }),
                                      s({ id: 'metadata.subscribers' }, { subscribers: null != (i = l.likesCount) ? i : 0 }),
                                  ].join(' • ')
                                : [o, et({ albumType: l.type, messageFormatter: s }), l.year].join(' • ');
                        })({ albumMeta: e, messageFormatter: o }),
                        fullUrl: null != (i = t.fullUrl) ? i : '',
                        locale: t.locale,
                        ogImage: e.ogImage,
                        siteName: o({ id: 'metadata.yandex-music' }),
                        ogType: 'music.album',
                    }),
                    twitter: (0, G.H)({ cardType: W.W.APP, title: n, url: t.url, appName: o({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, z.X)({
                        additional: { ...t, url: null != (l = t.url) ? l : '', fullUrl: null != (s = t.fullUrl) ? s : '', host: t.host },
                        appName: o({ id: 'metadata.yandex-music' }),
                    }),
                    other: { 'music:musician': (0, F.x)(e.artists, t.host) },
                    alternates: (0, $.S)('/album/:albumId', t.tld, { params: { albumId: e.id } }),
                };
            }
            var ei = a(2058),
                el = a(29595),
                es = a(74965),
                eo = a(66943),
                en = a(94144),
                er = a(35412),
                ed = a(27533),
                ec = a(24586);
            let eu = (0, l.PA)((e) => {
                var t, a, l, s, o, n, r, d, c, u, m, b, p, v;
                let { user: h, album: x } = e;
                return h.isAuthorized
                    ? null
                    : (0, i.jsx)(ec.S, {
                          value: {
                              '@type': 'MusicAlbum',
                              name: null != (u = null == (t = x.meta) ? void 0 : t.title) ? u : void 0,
                              description: null != (m = x.description) ? m : void 0,
                              url: null != (b = null == (a = x.meta) ? void 0 : a.url) ? b : void 0,
                              image: (null == (l = x.meta) ? void 0 : l.coverUri) ? (0, er.lU)(null == (s = x.meta) ? void 0 : s.coverUri, 'orig') : void 0,
                              genre: null != (p = null == (o = x.meta) ? void 0 : o.genre) ? p : void 0,
                              datePublished: null != (v = null == (r = x.meta) || null == (n = r.year) ? void 0 : n.toString()) ? v : void 0,
                              tracks:
                                  null == (d = x.tracks)
                                      ? void 0
                                      : d
                                            .map((e) => e.data)
                                            .filter((e) => !!(null == e ? void 0 : e.url))
                                            .map((e) => {
                                                var t;
                                                return { '@type': 'MusicRecording', name: e.title, duration: (0, ed.F)(null != (t = e.durationMs) ? t : 0), url: e.url };
                                            }),
                              potentialAction: {
                                  '@type': 'ListenAction',
                                  expectsAcceptanceOf: {
                                      '@type': 'Offer',
                                      category: 'free',
                                      target: { '@type': 'EntryPoint', actionPlatform: null == (c = x.meta) ? void 0 : c.url },
                                  },
                              },
                          },
                      });
            });
            var em = a(5925),
                eb = a.n(em),
                ep = a(65724),
                ev = a(37523),
                eh = a(7833),
                ex = a(89009),
                e_ = a(18593),
                eA = a(7123),
                ej = a(8523),
                eg = a(50493),
                ey = a(88894),
                eC = a(49784),
                ek = a(29008),
                ef = a(5407),
                eT = a(64284),
                eP = a(84384),
                eN = a(9618),
                eL = a(4795),
                eI = a(53643),
                eS = a(39079),
                eE = a(16704),
                eO = a(72858),
                eM = a.n(eO);
            let eB = (e) => {
                let { className: t, albumType: a } = e,
                    {
                        settings: { isMobile: l },
                        paywall: o,
                    } = (0, j.g)(),
                    { formatMessage: n } = (0, ei.A)(),
                    r = (0, s.useCallback)(
                        (e) => {
                            (o.openModal(), e.stopPropagation());
                        },
                        [o],
                    ),
                    d = (0, s.useMemo)(() => {
                        switch (a) {
                            case q._.SINGLE:
                                return n({ id: 'payment.single-offer-button-title' });
                            case q._.PODCAST:
                                return n({ id: 'payment.podcast-offer-button-title' });
                            case q._.AUDIOBOOK:
                                return n({ id: 'payment.books-offer-button-title' });
                            case q._.FAIRY_TALE:
                                return n({ id: 'payment.fairy-tale-offer-button-title' });
                            default:
                                return n({ id: 'payment.album-offer-button-title' });
                        }
                    }, [a, n]);
                return l
                    ? (0, i.jsxs)(v.$, {
                          onClick: r,
                          className: (0, ep.$)(eM().root, t),
                          color: 'plus',
                          size: 'l',
                          radius: 'xxxl',
                          children: [
                              (0, i.jsx)(x.HL, { className: eM().title, weight: 'bold', variant: 'div', size: 'l', children: d }),
                              (0, i.jsx)(x.HL, {
                                  className: eM().subtitle,
                                  weight: 'normal',
                                  variant: 'div',
                                  size: 'xs',
                                  children: (0, i.jsx)(b.A, { id: 'payment.yandex-plus-offer-button' }),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(v.$, {
                          onClick: r,
                          className: (0, ep.$)(eM().root, t),
                          color: 'plus',
                          size: 'l',
                          radius: 'xxxl',
                          'data-test-id': c.S7.PLUS_PAYWALL_BUTTON,
                          children: [
                              (0, i.jsx)(x.HL, { className: eM().title, weight: 'bold', variant: 'div', size: 'm', children: d }),
                              (0, i.jsx)(x.HL, {
                                  className: eM().subtitle,
                                  weight: 'normal',
                                  variant: 'div',
                                  size: 'xs',
                                  children: (0, i.jsx)(b.A, { id: 'payment.yandex-plus-offer-button' }),
                              }),
                          ],
                      });
            };
            var ew = a(99409),
                eR = a(41918),
                eD = a(95756),
                eU = a(92966),
                eH = a(56651),
                eX = a(57934),
                ez = a(87762),
                eV = a(49738),
                eF = a(56862),
                eK = a(56446),
                eY = a(19038),
                eG = a(22126),
                eW = a.n(eG);
            let e$ = (0, l.PA)((e) => {
                var t;
                let { album: a, likeButtonAriaLabel: l, withLikeButton: o = !0, donationButton: r, contextMenuChildren: d } = e,
                    {
                        user: m,
                        settings: { isMobile: v },
                        trailer: _,
                        albumCPA: { isPlusCPAEnabled: A, isPlusCPAPlayerBarEnabled: g },
                    } = (0, j.g)(),
                    { shouldShowBuySubscriptionModal: y, showBuySubscriptionModal: C } = (0, eN.q)(),
                    [k, f] = (0, s.useState)(!1),
                    T = (0, eU.K)(a),
                    P = (0, eH.A)(a),
                    { formatNumber: N } = (0, ei.A)(),
                    L = (0, eX.F)(),
                    { utmLink: I } = (0, eP.f)({ contextId: a.id, contextType: e_.K.Album }),
                    S = (0, ef.P)(),
                    { controlSize: E, iconSize: O } = (0, ew.q)(v),
                    { pageAlbumId: M } = (0, ez.T)(),
                    B = A({ pageAlbumId: M, albumId: a.id, isNonMusic: a.isNonMusic }),
                    w = g(a.id, a.isNonMusic),
                    R = !B && !m.isAuthorized,
                    D = (0, p.c)(() => {
                        if (y && !w) return void C();
                        S() || (_.setUtmLink(I), _.openAlbumTrailer(a.id), L(n.DomainObjectType.Album, String(a.id)));
                    }),
                    U = (0, s.useMemo)(() => {
                        var e;
                        return (null == (e = a.trailer) ? void 0 : e.isAvailable) && !v
                            ? (0, i.jsx)(eY.L, {
                                  children: (0, i.jsx)(eK.k, {
                                      size: 's',
                                      radius: 'xxxl',
                                      iconSize: 'xxs',
                                      className: eW().trailerControl,
                                      disabled: !a.isAvailable,
                                      onClick: D,
                                      children: (0, i.jsx)(b.A, { id: 'entity-names.trailer' }),
                                  }),
                              })
                            : null;
                    }, [null == (t = a.trailer) ? void 0 : t.isAvailable, a.isAvailable, D, v]),
                    H = (0, u.L)(() => {
                        if (!v) return (0, s.isValidElement)(r) ? r : (0, i.jsx)(eF.O, { size: E, iconSize: O, onClick: P, isPinned: a.isPinned });
                    }),
                    X = (0, u.L)(() => {
                        if (a.actualLikesCount && 0 !== a.actualLikesCount && !v)
                            return (0, i.jsx)(x.HL, {
                                variant: 'span',
                                type: 'controls',
                                size: 's',
                                weight: 'medium',
                                children: a.actualLikesCount && N(a.actualLikesCount),
                            });
                    }),
                    z = (0, u.L)(() => {
                        if (o)
                            return (0, i.jsx)(eh.B, {
                                objectType: a.mainObjectType,
                                objectId: String(a.id),
                                objectPosX: 1,
                                objectPosY: 1,
                                children: (0, i.jsx)(eV.c, {
                                    className: eW().likeControl,
                                    isLiked: a.isLiked,
                                    onClick: T,
                                    variant: 'default',
                                    size: E,
                                    iconSize: O,
                                    withRipple: !v,
                                    disabled: R,
                                    'aria-label': l,
                                    children: X,
                                }),
                            });
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        U,
                        z,
                        (0, s.isValidElement)(H) && (0, i.jsx)('div', { className: eW().pinOrDonationControl, children: H }),
                        (0, i.jsx)(eD.x, {
                            album: a,
                            open: k,
                            onOpenChange: f,
                            wrapperClassName: eW().menuControl,
                            size: E,
                            icon: (0, i.jsx)(h.I, { size: O, variant: 'more' }),
                            variant: eR.z.PAGE,
                            'data-test-id': c.e8.pageHeader.ALBUM_HEADER_CONTEXT_MENU_BUTTON,
                            children: d,
                        }),
                    ],
                });
            });
            var eq = a(7555),
                eZ = a(13946),
                eQ = a(81877);
            let eJ = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = e.filter((e) => !e.isComposer),
                    a = t.filter((e) => !e.various),
                    i = e.filter((e) => e.isComposer && !e.various),
                    l = [];
                return (a.length > 0 ? (l = a) : t.length > 0 && (l = t), l.concat(i));
            };
            var e0 = a(86854),
                e1 = a.n(e0);
            let e8 = (0, l.PA)((e) => {
                var t, a, l;
                let { album: o, withArtistLink: n = !0 } = e,
                    {
                        settings: { isMobile: r },
                    } = (0, j.g)(),
                    d = (0, s.useMemo)(() => eJ(o.artists), [o.artists]),
                    u = (null == d ? void 0 : d.length) === 1 && !(null == (t = d[0]) ? void 0 : t.decomposed) && !(null == (a = d[0]) ? void 0 : a.various);
                return (0, i.jsx)(eh.B, {
                    objectType: o.mainObjectType,
                    objectId: String(o.id),
                    objectPosX: 1,
                    objectPosY: 1,
                    children: (0, i.jsxs)('div', {
                        className: e1().meta,
                        children: [
                            u &&
                                (0, i.jsx)(eq.t, {
                                    radius: 'round',
                                    className: e1().artistCover,
                                    children: (0, i.jsx)(eQ.B, { src: null == (l = d[0]) ? void 0 : l.coverUri, size: 30, withAvatarReplace: !0 }),
                                }),
                            (0, i.jsx)(eZ.i, {
                                artists: d,
                                lineClamp: r ? 1 : void 0,
                                className: e1().artists,
                                spoilerClassName: e1().artistsSpoiler,
                                visibleArtistsCount: r ? void 0 : 2,
                                linkClassName: e1().artistLink,
                                captionClassName: e1().artistLabel,
                                variant: r ? 'breakAll' : 'breakWord',
                                withLink: n,
                            }),
                            o.year &&
                                (0, i.jsx)(x.HL, {
                                    variant: 'div',
                                    type: 'text',
                                    size: 'm',
                                    weight: 'medium',
                                    className: (0, ep.$)(e1().year, { [e1().year_dot]: d.length > 0 }),
                                    'data-test-id': c.e8.pageHeader.ALBUM_RELEASE_DATE,
                                    children: o.year,
                                }),
                        ],
                    }),
                });
            });
            var e9 = a(61097),
                e2 = a(60902),
                e4 = a(14533),
                e7 = a.n(e4),
                e3 = a(91147),
                e5 = a.n(e3);
            let e6 = (0, l.PA)((e) => {
                    let { album: t, donationButton: a, contextMenuChildren: l, className: o, 'aria-labelledby': r, forwardRef: d, onVersionClick: c } = e,
                        { formatMessage: u } = (0, ei.A)(),
                        { shouldShowBuySubscriptionModal: m, showBuySubscriptionModal: v } = (0, eN.q)();
                    (0, eC.W)();
                    let { from: x, utmLink: _ } = (0, eP.f)({ pageId: L.b.ALBUM, blockId: eT.U.ALBUM, contextType: e_.K.Album, contextId: t.id }),
                        A = (0, ef.P)(),
                        {
                            user: g,
                            settings: { isMobile: y },
                            sonataState: C,
                            track: { isTrackPage: k },
                            modals: { imageSliderModal: f },
                            albumCPA: { isPlusCPAPlayerBarEnabled: T },
                            paywall: { modal: P },
                        } = (0, j.g)(),
                        { iconSize: N, controlSize: I } = (0, ew.q)(y),
                        S = y && !g.isAuthorized && t.isAvailable,
                        E = y && !g.hasPlus && g.isAuthorized && t.isAvailable,
                        O = S || E,
                        M = (0, eL.N)(),
                        B = !g.hasPlus && t.isAvailableOnlyForPlus,
                        w = !!t.coverUri,
                        R = T(t.id, t.isNonMusic),
                        D = (0, ek.r)(t.type),
                        U = (0, eI.j)(),
                        H = (0, s.useMemo)(() => {
                            if (t.shouldShowBooksBadge) return (0, i.jsx)(h.I, { variant: 'yandexBooks'.concat(U), className: e5().booksLogo });
                        }, [t.shouldShowBooksBadge, U]),
                        { isPlaying: X, togglePlay: z } = (0, eS.D)({
                            playContextParams: {
                                contextData: { type: e_.K.Album, meta: { id: t.id }, from: x, utmLink: _ },
                                loadContextMeta: !0,
                                entitiesData: C.unloadedEntitiesDataFromModels,
                            },
                        }),
                        V = (0, p.c)(() => {
                            t.coverUri && f.openImages({ images: [t.coverUri] });
                        }),
                        F = (0, p.c)(() => {
                            if (!A()) {
                                if (m && !R) return void v();
                                if (M && !R) return void P.open();
                                z();
                            }
                        }),
                        K = (0, s.useMemo)(
                            () =>
                                B
                                    ? (0, i.jsx)(eB, { className: e5().plusPaywallButton, albumType: t.type })
                                    : y
                                      ? (0, i.jsx)(eE.D, {
                                            className: (0, ep.$)(e7().playControl, { [e7().playControl_withLogin]: O }),
                                            buttonVariant: 'default',
                                            iconSize: O ? N : 'xxl',
                                            size: O ? I : void 0,
                                            isPlaying: X,
                                            onClick: F,
                                            variant: O ? 'default' : 'filled',
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                        })
                                      : (0, i.jsx)(eE.D, {
                                            className: e7().playControl,
                                            withRipple: !0,
                                            buttonVariant: 'default',
                                            radius: 'xxxl',
                                            size: 's',
                                            color: 'primary',
                                            iconSize: 'xxs',
                                            isPlaying: X,
                                            onClick: F,
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                            children: (0, i.jsx)(b.A, { id: 'player-actions.listen' }),
                                        }),
                            [B, y, X, F, t.isAvailable, t.type, O, N, I],
                        ),
                        Y = (0, s.useMemo)(
                            () =>
                                (0, i.jsx)('div', {
                                    className: e7().controlsContainer,
                                    children: (0, i.jsxs)('div', {
                                        className: e7().controls,
                                        children: [
                                            (0, i.jsx)(eh.B, { objectType: n.DomainObjectType.Album, objectId: String(t.id), objectPosX: 1, objectPosY: 1, children: K }),
                                            (0, i.jsx)(e$, { donationButton: a, album: t, withLikeButton: !B, contextMenuChildren: l }),
                                        ],
                                    }),
                                }),
                            [t, a, K, B, l],
                        );
                    return (0, i.jsx)(e9.k, {
                        ref: d,
                        headingVariant: k ? 'div' : 'h1',
                        className: o,
                        controls: Y,
                        meta: (0, i.jsx)(e8, { album: t }),
                        entityName: D,
                        entityNameIcon: H,
                        title: t.title,
                        cover: (0, i.jsx)(e2.I, {
                            coverVariant: 'square',
                            coverUri: t.coverUri,
                            isAvailable: t.isAvailable,
                            withPlusBadge: t.isAvailableOnlyForPlus,
                            onClick: w ? V : void 0,
                            'aria-label': w ? u({ id: 'slider.view-cover' }) : void 0,
                        }),
                        'aria-labelledby': r,
                        version: t.version,
                        onVersionClick: c,
                        showMobileLoginButton: S,
                        showMobileSubscriptionButton: E,
                    });
                }),
                te = (0, s.forwardRef)((e, t) => (0, i.jsx)(e6, { forwardRef: t, ...e }));
            var tt = a(74929),
                ta = a(41578),
                ti = a(14347),
                tl = a(20012),
                ts = a(6668),
                to = a(97956),
                tn = a(86790),
                tr = a(60266),
                td = a(54667),
                tc = a(74773);
            let tu = (e) => {
                let { album: t } = e;
                return (0, s.useCallback)(
                    (e) => {
                        let a = [];
                        for (let i = e.startIndex; i <= e.endIndex; i++) {
                            let e = t.items[i];
                            (null == e ? void 0 : e.type) === td.S.TRACK && (null == e ? void 0 : e.loadingState) === tc.G.IDLE && a.push(e.id);
                        }
                        a.length && t.getTracks({ trackIds: a });
                    },
                    [t],
                );
            };
            var tm = a(98644),
                tb = a(64310),
                tp = a(93015),
                tv = (function (e) {
                    return ((e.TRACK = 'TRACK'), (e.TEXT = 'TEXT'), e);
                })({}),
                th = a(58933),
                tx = a.n(th);
            let t_ = (e) => {
                let { shimmerVariant: t, trackVariant: a = tm.X.ALBUM } = e;
                switch (t) {
                    case tv.TRACK:
                        return (0, i.jsx)(tp.D, { isActive: !0, className: (0, ep.$)({ [tx().root]: a === tm.X.ALBUM }), variant: a });
                    case tv.TEXT:
                        return (0, i.jsx)(tb.n, { className: tx().root });
                }
            };
            var tA = a(83357),
                tj = a.n(tA);
            let tg = (e) => {
                    let { text: t } = e;
                    return (0, i.jsx)('div', {
                        className: tj().root,
                        children: (0, i.jsx)(x.DZ, { variant: 'h2', className: eb().text, 'data-test-id': c.e8.album.ALBUM_VOLUME_TITLE, children: t }),
                    });
                },
                ty = (e) => !!e && 'object' == typeof e && (('type' in e && e.type === tl.r.TEXT) || ('id' in e && 'positionInContext' in e)),
                tC = (e) => {
                    let { element: t, isNonMusic: a, album: l } = e,
                        { formatMessage: s } = (0, ei.A)();
                    return (e) => {
                        var o;
                        let n = null == l || null == (o = l.items) ? void 0 : o[e],
                            r = ((e, t, a) => {
                                let { hasAlbum: i, isAlbumRejected: l, isNonMusic: s } = e;
                                return a && i && !l
                                    ? a.type === tl.r.TEXT
                                        ? a.data || a.loadingState === tc.G.REJECT
                                            ? s
                                                ? { kind: 'season', number: a.data, text: t({ id: 'entity-names.season-number' }, { number: a.data }) }
                                                : { kind: 'disk', number: a.data, text: t({ id: 'entity-names.disk-number' }, { number: a.data }) }
                                            : null
                                        : a.data
                                          ? { kind: 'track', track: a.data, withLightning: a.isBest && !a.data.isRemoved }
                                          : null
                                    : null;
                            })({ hasAlbum: !!l.meta, isAlbumRejected: l.isRejected, isNonMusic: !!a }, s, ty(n) ? n : void 0);
                        if (n && (null == r ? void 0 : r.kind) === 'track') return t(n, e, r.withLightning);
                        if ((null == r ? void 0 : r.kind) === 'season' || (null == r ? void 0 : r.kind) === 'disk') return (0, i.jsx)(tg, { text: r.text });
                        if (!n || !l.meta || l.isRejected || !ty(n)) return (0, i.jsx)(t_, { shimmerVariant: tv.TRACK, trackVariant: tm.X.ALBUM });
                        if (!n.data && !n.isRejected)
                            switch (n.type) {
                                case tl.r.TEXT:
                                    return (0, i.jsx)(t_, { shimmerVariant: tv.TEXT });
                                case td.S.TRACK:
                                    return (0, i.jsx)(t_, { shimmerVariant: tv.TRACK, trackVariant: tm.X.ALBUM });
                                default:
                                    if (a) return (0, i.jsx)(t_, { shimmerVariant: tv.TRACK, trackVariant: tm.X.PLAYLIST });
                            }
                    };
                };
            var tk = a(62414),
                tf = a(27651),
                tT = a(71227);
            let tP = (0, l.PA)((e) => {
                let { url: t } = e,
                    a = (0, tf.c)(),
                    l = (0, tk.D)(),
                    s = (0, A.Z)(t),
                    o = (0, p.c)((e) => {
                        (a(n.AppScreen.Link, t), s(e));
                    });
                return (0, i.jsx)(tT.v, { onClick: o, ref: l });
            });
            var tN = a(77783),
                tL = a(52632),
                tI = a(72503),
                tS = a(91959);
            let tE = (0, l.PA)((e) => {
                    let { donation: t } = e,
                        a = (0, tf.c)(),
                        l = (0, ta.Q)()(t.url),
                        s = (0, tk.D)(),
                        o = (0, A.Z)(l),
                        r = (0, A.Z)(t.artist.url),
                        d = (0, p.c)((e) => {
                            (a(n.AppScreen.ArtistScreen), r(e));
                        }),
                        c = (0, p.c)(() => {
                            (a(n.AppScreen.Link, l), o());
                        }),
                        u = (0, tS.S)({ artist: t.artist, callback: d });
                    return (0, i.jsx)(tI.X, { ref: s, artist: t.artist, goal: t.goal, onNavigateToArtist: u, onNavigateToDonation: c });
                }),
                tO = (0, l.PA)((e) => {
                    var t, a;
                    let { className: l, headerClassName: o, containerClassName: r, headingVariant: d } = e,
                        { formatMessage: c } = (0, ei.A)(),
                        { album: u } = (0, j.g)(),
                        m = (0, s.useMemo)(() => {
                            var e, t;
                            return (null == (e = u.donations) ? void 0 : e.isLoading) || !(null == (t = u.donations) ? void 0 : t.items)
                                ? (0, tL.k)(!0)
                                : u.donations.items.map((e, t) =>
                                      (0, i.jsx)(
                                          eh.B,
                                          {
                                              objectType: n.DomainObjectType.Donation,
                                              objectId: e.artist.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              children: (0, i.jsx)(tE, { donation: e }, e.artist.id),
                                          },
                                          e.artist.id,
                                      ),
                                  );
                        }, [null == (t = u.donations) ? void 0 : t.isLoading, null == (a = u.donations) ? void 0 : a.items]);
                    return (0, i.jsx)(tN.x, {
                        className: l,
                        headerClassName: o,
                        containerClassName: r,
                        title: c({ id: 'donation.support-text' }),
                        headingVariant: d,
                        children: m,
                    });
                });
            var tM = a(19934),
                tB = a(54020),
                tw = a(47149),
                tR = a(84423),
                tD = a(89846),
                tU = a(64543),
                tH = a(63582);
            let tX = (0, tH.n)({ event: 'Screen.Opened/Closed', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                let { mainObjectId: t, mainObjectType: a } = e,
                    i = (0, tR.s)(),
                    { hash: l } = (0, tD.g)(),
                    { screen: s } = (0, tU.j)(),
                    o = null == s ? void 0 : s.pageId;
                return (0, p.c)((e) => {
                    if (!i || !o) return;
                    let s = e ? String((0, tB.A)()) : void 0;
                    if (void 0 === l || void 0 === t || void 0 === a) return;
                    let r = { pageStyle: n.PageStyles.ContextMenu, pagePlacement: n.PagePlacements.Hover, mainObjectType: a, mainObjectId: t, hash: l, pageId: o };
                    e ? (0, tw.Fn)(i.evgenInstance, { ...r, viewUuid: s }) : (0, tw.Ig)(i.evgenInstance, r);
                });
            });
            var tz = a(3125),
                tV = a.n(tz),
                tF = a(90688),
                tK = a(38982);
            let tY = (0, tH.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, function (e) {
                let { mainObjectId: t, mainObjectType: a } = e,
                    { hash: i } = (0, tD.g)(),
                    l = (0, tR.s)(),
                    { screen: s, block: o, object: r } = (0, tU.j)(),
                    d = null == s ? void 0 : s.pageId,
                    c = null == o ? void 0 : o.blockId,
                    u = null == o ? void 0 : o.blockType,
                    m = null == o ? void 0 : o.blockPosX,
                    b = null == o ? void 0 : o.blockPosY,
                    v = null == o ? void 0 : o.objectsCount,
                    h = null == r ? void 0 : r.objectType,
                    x = null == r ? void 0 : r.objectId,
                    _ = null == r ? void 0 : r.objectPosX,
                    A = null == r ? void 0 : r.objectPosY;
                return (0, p.c)(() => {
                    if (
                        !l ||
                        !d ||
                        void 0 === i ||
                        void 0 === t ||
                        void 0 === a ||
                        void 0 === h ||
                        void 0 === x ||
                        void 0 === _ ||
                        void 0 === A ||
                        void 0 === c ||
                        void 0 === u ||
                        void 0 === m ||
                        void 0 === b ||
                        void 0 === v
                    )
                        return;
                    let e = {
                        userInteractionType: n.UserInteractionType.Tap,
                        hash: i,
                        pageId: d,
                        pageStyle: n.PageStyles.ContextMenu,
                        pagePlacement: n.PagePlacements.Hover,
                        mainObjectType: a,
                        mainObjectId: t,
                        objectType: h,
                        objectId: x,
                        objectPosX: _,
                        objectPosY: A,
                        entityType: u,
                        entityId: c,
                        entityPosX: m,
                        entityPosY: b,
                        objectsCount: v,
                        actionType: n.UserInteractionType.Tap,
                    };
                    (0, tK.l6)(l.evgenInstance, e);
                });
            });
            var tG = a(72074),
                tW = a.n(tG);
            let t$ = (0, l.PA)((e) => {
                    let { albumId: t, donation: a } = e,
                        l = (0, ta.Q)()(a.url),
                        s = (0, A.Z)(l),
                        o = tY({ mainObjectId: t, mainObjectType: n.DomainObjectType.Album }),
                        r = (0, tk.D)(),
                        d = (0, p.c)(() => {
                            (o(), s());
                        });
                    return (0, i.jsxs)(
                        tM.Dr,
                        {
                            ref: r,
                            className: tW().root,
                            isBlock: !0,
                            onClick: d,
                            children: [
                                (0, i.jsx)(eq.t, {
                                    radius: 'round',
                                    className: tW().cover,
                                    children: (0, i.jsx)(tF._V, { withAvatarReplace: !0, src: a.artist.coverUri, size: 100, fit: 'contain', className: tW().image }),
                                }),
                                (0, i.jsx)(x.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: a.artist.name }),
                            ],
                        },
                        l,
                    );
                }),
                tq = (0, l.PA)(() => {
                    var e;
                    let {
                            settings: { isMobile: t },
                            album: { donations: a, meta: l },
                        } = (0, j.g)(),
                        { formatMessage: o } = (0, ei.A)(),
                        r = tX({ mainObjectId: String(null == l ? void 0 : l.id), mainObjectType: n.DomainObjectType.Album }),
                        [d, c] = (0, s.useState)(!1),
                        u = (0, s.useRef)(!1);
                    return (
                        (0, s.useEffect)(() => {
                            d && (u.current = !0);
                        }, [d]),
                        (0, s.useEffect)(() => {
                            u.current && r(d);
                        }, [d, r]),
                        (0, i.jsx)(tM.W1, {
                            ariaLabel: o({ id: 'donation.button-text' }),
                            size: 's',
                            variant: 'default',
                            radius: 'round',
                            color: 'secondary',
                            icon: (0, i.jsx)(h.I, { size: 'xxs', variant: 'ruble' }),
                            onOpenChange: c,
                            open: d,
                            isMobile: t,
                            placement: 'bottom',
                            offsetOptions: 8,
                            listClassName: tV().popover,
                            children:
                                null == a || null == (e = a.items)
                                    ? void 0
                                    : e.map((e, t) =>
                                          (0, i.jsx)(
                                              eh.B,
                                              {
                                                  objectType: n.DomainObjectType.Donation,
                                                  objectId: e.artist.id,
                                                  objectPosX: 1,
                                                  objectPosY: t + 1,
                                                  children: (0, i.jsx)(t$, { donation: e, albumId: String(null == l ? void 0 : l.id) }),
                                              },
                                              e.artist.id,
                                          ),
                                      ),
                        })
                    );
                });
            var tZ = a(50408),
                tQ = a(10270);
            let tJ = (0, l.PA)((e) => {
                    let { item: t, itemContentCallback: a, resizeObserver: l, scrollMargin: o } = e,
                        [n, r] = (0, tZ.d)();
                    (0, s.useEffect)(
                        () => (
                            n && l && l.observe(n),
                            () => {
                                n && l && l.unobserve(n);
                            }
                        ),
                        [n, l],
                    );
                    let d = { transform: 'translate3d(0, '.concat(t.start - o, 'px, 0)') };
                    return (0, i.jsx)('div', { 'data-index': t.index, className: eb().virtualItem, ref: r, style: d, children: a(t.index) }, t.key);
                }),
                t0 = (0, l.PA)((e) => {
                    let { count: t, getDataByRange: a, itemContentCallback: l, role: o = 'region', ariaLabel: n } = e;
                    (0, eC.W)();
                    let [r, d] = (0, tZ.d)(),
                        { virtualizer: u, resizeObserver: m } = (0, tQ.r)({ count: t, getEstimateSize: () => 56, containerRef: r });
                    (0, s.useEffect)(() => {
                        !u.isScrolling && u.range && a(u.range);
                    }, [a, u.isScrolling, u.range]);
                    let b = u.getTotalSize(),
                        p = u.getVirtualItems();
                    return (0, i.jsx)('div', {
                        className: eb().virtualScroll,
                        style: { height: ''.concat(b, 'px') },
                        ref: d,
                        role: o,
                        'aria-label': n,
                        'data-test-id': c.S7.TRACK_LIST,
                        children: p.map((e) => (0, i.jsx)(tJ, { item: e, itemContentCallback: l, resizeObserver: m, scrollMargin: u.options.scrollMargin }, e.key)),
                    });
                });
            var t1 = a(80643);
            let t8 = (e, t) => ({
                title: e.isPublisher ? t({ id: 'page.album-publisher-title' }, { count: e.count }) : t({ id: 'page.album-label-title' }, { count: e.count }),
                items: e.items,
                count: e.count,
            });
            var t9 = a(77560),
                t2 = a(91292);
            let t4 = (e) => {
                    let { url: t, name: a } = e,
                        l = (0, t1.S)(),
                        s = (0, tk.D)(),
                        o = (0, p.c)(() => {
                            l({ to: n.AppScreen.LabelScreen, deepLink: t });
                        });
                    return (0, i.jsx)('span', {
                        ref: s,
                        className: eb().labelLinkContainer,
                        children: (0, i.jsx)(t2.N, {
                            role: 'link',
                            'aria-label': a,
                            href: t,
                            className: (0, ep.$)(eb().labelLink, eb().important),
                            onClick: o,
                            'data-test-id': c.Xk.album.ALBUM_LABEL_LINK,
                            children: (0, i.jsx)(x.HL, { variant: 'span', children: a }),
                        }),
                    });
                },
                t7 = (0, l.PA)((e) => {
                    var t;
                    let { album: a, size: l, weight: s, className: o } = e,
                        { formatMessage: r } = (0, ei.A)();
                    (0, eC.W)();
                    let { items: d, title: c } = t8((0, t9.p)({ labels: a.labels, type: null == (t = a.meta) ? void 0 : t.type }), r);
                    return (0, i.jsxs)('div', {
                        className: (0, ep.$)(eb().label, o),
                        children: [
                            (0, i.jsx)(x.HL, { variant: 'span', size: l, weight: s, children: c }),
                            '\xa0',
                            (0, i.jsx)(x.HL, {
                                variant: 'span',
                                size: l,
                                weight: s,
                                lineClamp: 1,
                                children:
                                    null == d
                                        ? void 0
                                        : d.map((e, t) => {
                                              let { id: a, name: l, link: s } = e;
                                              return (0, i.jsx)(
                                                  eh.B,
                                                  {
                                                      objectType: n.DomainObjectType.Link,
                                                      objectId: s.href,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      children: (0, i.jsx)(t4, { url: s.href, name: l }),
                                                  },
                                                  a,
                                              );
                                          }),
                            }),
                        ],
                    });
                });
            var t3 = a(40700),
                t5 = a(98158),
                t6 = a(79546),
                ae = a(9630),
                at = a(93039),
                aa = a(15077);
            let ai = (0, l.PA)((e) => {
                var t;
                let { albumId: a, albumTitle: l, albumCoverUri: o } = e,
                    {
                        user: n,
                        album: r,
                        sonataState: { entityMeta: d },
                    } = (0, j.g)(),
                    u = (0, ae.e)(),
                    m = (0, t3.S)(null == u ? void 0 : u.state.currentContext.value),
                    v = ((e) =>
                        (0, p.c)((t) =>
                            t.data
                                ? !t.data.isRemoved && t.data.isAvailable
                                    ? t.data.entityId
                                    : void 0
                                : 'number' == typeof e
                                  ? ''.concat(t.id, ':').concat(e)
                                  : void 0,
                        ))(null == (t = r.meta) ? void 0 : t.id),
                    x = (0, s.useMemo)(() => (0, at.t)({ contextType: e_.K.Album, contextId: String(a) }), [a]),
                    _ = (0, t5.m)(r.tracks, t6.N.NEXT, x, { entityVariant: aa.c.ALBUM, entityTitle: l, coverUri: o }, v),
                    A = (0, t5.m)(r.tracks, t6.N.LAST, x, { entityVariant: aa.c.ALBUM, entityTitle: l, coverUri: o }, v);
                return d && !m
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(tM.Dr, {
                                  onClick: _,
                                  icon: (0, i.jsx)(h.I, { variant: 'playNext', size: 'xxs' }),
                                  disabled: !n.isAuthorized,
                                  'data-test-id': c.Kq.album.ALBUM_CONTEXT_MENU_PLAY_NEXT_BUTTON,
                                  children: (0, i.jsx)(b.A, { id: 'play-queue.play-next' }),
                              }),
                              (0, i.jsx)(tM.Dr, {
                                  onClick: A,
                                  icon: (0, i.jsx)(h.I, { variant: 'playLast', size: 'xxs' }),
                                  disabled: !n.isAuthorized,
                                  'data-test-id': c.Kq.album.ALBUM_CONTEXT_MENU_PLAY_LAST_BUTTON,
                                  children: (0, i.jsx)(b.A, { id: 'play-queue.play-last' }),
                              }),
                          ],
                      })
                    : null;
            });
            var al = a(69750),
                as = a.n(al);
            let ao = (0, l.PA)(() => {
                var e, t, a, l, o, r;
                let d = (0, s.useRef)(null),
                    m = (0, s.useRef)(0),
                    b = (0, ts.w)(),
                    { notify: p } = (0, es.l)(),
                    v = (0, ta.Q)(),
                    {
                        album: h,
                        albumCPA: x,
                        experiments: _,
                        sonataState: A,
                        settings: { isMobile: g },
                        track: { isTrackPage: y },
                    } = (0, j.g)(),
                    { from: C, utmLink: k } = (0, eP.f)({ pageId: L.b.ALBUM, blockId: eT.U.ALBUM, contextType: e_.K.Album, contextId: h.id }),
                    { formatMessage: f } = (0, ei.A)(),
                    [T, P] = (0, s.useState)(!1),
                    N = tu({ album: h }),
                    I = y ? 'div' : 'h2',
                    S = h.items.length || 10,
                    { isCPAEnabled: E } = (0, M.I)(),
                    O = !E || (E && !x.cpa),
                    B = _.checkExperiment(to.z.WebNextAlbumDonationButton, 'on') && h.hasDonations,
                    w = B && g,
                    { showBuySubscriptionModal: R } = (0, eN.q)(),
                    D = x.isPlusCPAPlayerBarEnabled(h.id, null == (e = h.meta) ? void 0 : e.isNonMusic) && g;
                ((0, s.useEffect)(
                    () => () => {
                        m.current = 0;
                    },
                    [h],
                ),
                    (0, s.useEffect)(() => {
                        D && A.status === eA.MT.ENDED && R();
                    }, [A.status, R, D]),
                    (0, s.useEffect)(() => {
                        var e, t;
                        if ((null == (e = h.otherArtistAlbums) ? void 0 : e.isRejected) || (null == (t = h.latestGenreAlbums) ? void 0 : t.isRejected)) {
                            if (!m || m.current > 0) return;
                            (p((0, i.jsx)(eo.h, { error: f({ id: 'album-errors.error-during-loading-similar-albums' }) }), { containerId: el.u.ERROR }), m.current++);
                        }
                    }, [null == (t = h.latestGenreAlbums) ? void 0 : t.isRejected, null == (a = h.otherArtistAlbums) ? void 0 : a.isRejected, f, p]),
                    (0, s.useEffect)(() => {
                        h.isResolved && h.hasOtherAlbumVersions && P(!0);
                    }, [h.hasOtherAlbumVersions, h.isResolved]));
                let U = (0, s.useCallback)(() => {
                        let e = d.current;
                        null == e || e.scrollIntoView({ behavior: 'smooth' });
                    }, []),
                    H = (0, u.L)(() => {
                        var e, t, a;
                        if (!B || !(null == (e = h.donations) ? void 0 : e.items)) return;
                        if (Number(null == (a = h.meta) || null == (t = a.artists) ? void 0 : t.length) > 1)
                            return (0, i.jsx)(ev.F, {
                                blockType: n.EntityTypes.Donations,
                                blockId: eT.U.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: h.donations.items.length,
                                children: (0, i.jsx)(tq, {}),
                            });
                        let [l] = h.donations.items;
                        if (l)
                            return (0, i.jsx)(ev.F, {
                                blockType: n.EntityTypes.Donations,
                                blockId: eT.U.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: 1,
                                children: (0, i.jsx)(eh.B, {
                                    objectType: n.DomainObjectType.Donation,
                                    objectId: l.artist.id,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    children: (0, i.jsx)(tP, { url: v(l.url) }),
                                }),
                            });
                    }),
                    X = (0, s.useMemo)(
                        () =>
                            h.isLoading || !h.meta || h.isRejected
                                ? (0, i.jsx)(ey.c, { className: eb().header, isActive: !0 })
                                : (0, i.jsx)(te, {
                                      album: h.meta,
                                      donationButton: H,
                                      className: eb().header,
                                      onVersionClick: T ? U : void 0,
                                      contextMenuChildren: (0, i.jsx)(ai, { albumId: h.meta.id, albumTitle: h.meta.title, albumCoverUri: h.meta.coverUri }),
                                  }),
                        [h.isLoading, h.meta, h.isRejected, H, T, U],
                    ),
                    z = tC({
                        element: (e, t, a) => {
                            var l;
                            if (e.data && e.type !== tl.r.TEXT)
                                return (0, i.jsx)(eh.B, {
                                    objectType: n.DomainObjectType.Track,
                                    objectId: String(e.data.id),
                                    objectPosX: 1,
                                    objectPosY: t + 1,
                                    children: (0, i.jsx)(ti.F, {
                                        withLightning: a,
                                        track: e.data,
                                        position: e.position,
                                        albumArtists: null == h || null == (l = h.meta) ? void 0 : l.artists,
                                        playContextParams: b(t, {
                                            contextData: { type: e_.K.Album, meta: h.contextMeta, from: C, utmLink: k },
                                            queueParams: { index: e.positionInContext, entityId: e.data.id },
                                            loadContextMeta: !0,
                                            entitiesData: A.unloadedEntitiesDataFromModels,
                                        }),
                                    }),
                                });
                        },
                        album: h,
                    }),
                    V = (0, u.L)(() => {
                        var e, t, a, l, s, o, r, u, m, b, p, v;
                        let x = [],
                            _ = 4;
                        return (
                            w &&
                                (null == (e = h.donations) ? void 0 : e.items) &&
                                (x.push(
                                    (0, i.jsx)(
                                        ev.F,
                                        {
                                            blockType: n.EntityTypes.Donations,
                                            blockId: eT.U.DONATY,
                                            blockPosX: 1,
                                            blockPosY: _,
                                            objectsCount: h.donations.items.length,
                                            children: (0, i.jsx)(tO, {
                                                headingVariant: I,
                                                className: as().carouselContainer,
                                                headerClassName: (0, ep.$)(as().carouselBlock, as().carouselBlockHeader),
                                                containerClassName: as().carouselBlock,
                                            }),
                                        },
                                        n.EntityTypes.Donations,
                                    ),
                                ),
                                _++),
                            h.hasSimilarEntities &&
                                (x.push(
                                    (0, i.jsx)(
                                        ev.F,
                                        {
                                            blockType: n.EntityTypes.SimilarEntities,
                                            blockId: n.EntityTypes.SimilarEntities,
                                            blockPosX: 1,
                                            blockPosY: _,
                                            objectsCount: null != (l = null == (a = h.similarEntities.data) ? void 0 : a.items.length) ? l : 0,
                                            children: (0, i.jsx)(eg.Q, {
                                                ...h.similarEntities,
                                                meta: { title: f({ id: 'page.similar-entities-block-title' }) },
                                                headingVariant: I,
                                                className: as().carouselContainer,
                                                headerClassName: (0, ep.$)(as().carouselBlock, as().carouselBlockHeader),
                                                containerClassName: as().carouselBlock,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                setHasSentAnalyticsOnLoaded: h.similarEntities.setHasSentAnalyticsOnLoaded,
                                            }),
                                        },
                                        n.EntityTypes.SimilarEntities,
                                    ),
                                ),
                                _++),
                            h.hasOtherAlbumVersions &&
                                (null == (t = h.otherAlbumVersions) ? void 0 : t.length) &&
                                (x.push(
                                    (0, i.jsx)(
                                        ev.F,
                                        {
                                            blockType: n.EntityTypes.OtherAlbumVersions,
                                            blockId: n.EntityTypes.OtherAlbumVersions,
                                            blockPosX: 1,
                                            blockPosY: _,
                                            objectsCount: null != (o = null == (s = h.otherAlbumVersions) ? void 0 : s.length) ? o : 0,
                                            children: (0, i.jsx)(tt.p, {
                                                isShimmerVisible: h.isLoading,
                                                isShimmerActive: !0,
                                                className: as().carouselContainer,
                                                headerClassName: (0, ep.$)(as().carouselBlock, as().carouselBlockHeader),
                                                containerClassName: as().carouselBlock,
                                                title: f({ id: 'entity-names.other-album-versions' }),
                                                albums: h.otherAlbumVersions,
                                                headingRef: d,
                                                headingVariant: I,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                'data-test-id': c.Xk.album.OTHER_VERSIONS_CAROUSEL,
                                            }),
                                        },
                                        n.EntityTypes.OtherAlbumVersions,
                                    ),
                                ),
                                _++),
                            h.hasLatestGenreAlbums &&
                                O &&
                                (x.push(
                                    (0, i.jsx)(
                                        ev.F,
                                        {
                                            blockType: n.EntityTypes.GenreAlbums,
                                            blockId: n.EntityTypes.GenreAlbums,
                                            blockPosX: 1,
                                            blockPosY: _,
                                            objectsCount: null != (m = null == (r = h.latestGenreAlbums) ? void 0 : r.items.length) ? m : 0,
                                            children: (0, i.jsx)(tt.p, {
                                                isShimmerVisible: h.isLatestGenreAlbumsLoading,
                                                isShimmerActive: !0,
                                                className: as().carouselContainer,
                                                headerClassName: (0, ep.$)(as().carouselBlock, as().carouselBlockHeader),
                                                containerClassName: as().carouselBlock,
                                                title: f({ id: 'entity-names.new-albums-in-genre' }),
                                                albums: null == (u = h.latestGenreAlbums) ? void 0 : u.items,
                                                headingVariant: I,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                'data-test-id': c.Xk.album.GENRE_ALBUMS_CAROUSEL,
                                            }),
                                        },
                                        n.EntityTypes.GenreAlbums,
                                    ),
                                ),
                                _++),
                            h.hasOtherArtistAlbums &&
                                (x.push(
                                    (0, i.jsx)(
                                        ev.F,
                                        {
                                            blockType: n.EntityTypes.OtherAlbums,
                                            blockId: n.EntityTypes.OtherAlbums,
                                            blockPosX: 1,
                                            blockPosY: _,
                                            objectsCount: null != (v = null == (b = h.otherArtistAlbums) ? void 0 : b.items.length) ? v : 0,
                                            children: (0, i.jsx)(tt.p, {
                                                isShimmerVisible: h.isOtherArtistAlbumsLoading,
                                                isShimmerActive: !0,
                                                className: as().carouselContainer,
                                                headerClassName: (0, ep.$)(as().carouselBlock, as().carouselBlockHeader),
                                                containerClassName: as().carouselBlock,
                                                title: f({ id: 'entity-names.other-albums-of-artist' }),
                                                albums: null == (p = h.otherArtistAlbums) ? void 0 : p.items,
                                                headingVariant: I,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                'data-test-id': c.Xk.album.OTHER_ARTIST_ALBUMS_CAROUSEL,
                                            }),
                                        },
                                        n.EntityTypes.OtherAlbums,
                                    ),
                                ),
                                _++),
                            h.isArtistRecommendationsPromoAllowed &&
                                h.artistRecommendationsPromo &&
                                x.push(
                                    (0, i.jsx)(
                                        ev.F,
                                        {
                                            blockId: h.artistRecommendationsPromo.id,
                                            blockType: h.artistRecommendationsPromo.type,
                                            blockPosX: 1,
                                            blockPosY: _,
                                            objectsCount: h.artistRecommendationsPromo.objectsCount,
                                            children: (0, i.jsx)(ej.x, {
                                                block: h.artistRecommendationsPromo,
                                                title: f({ id: 'page.artist-recommendations-promo-more-music-title' }),
                                                impId: h.artistRecommendationsPromoImpId,
                                                getArtistRecommendationsPromo: h.getArtistRecommendationsPromo,
                                                headingVariant: I,
                                                className: as().carouselContainer,
                                                headerClassName: (0, ep.$)(as().carouselBlock, as().carouselBlockHeader),
                                                containerClassName: as().carouselBlock,
                                            }),
                                        },
                                        h.artistRecommendationsPromo.id,
                                    ),
                                ),
                            x
                        );
                    });
                return (
                    h.id && h.isResolved && h.similarEntities.isNeededToLoad && h.isSimilarEntitiesEnabled && (0, s.use)(h.getSimilarEntities({ albumId: h.id })),
                    (0, i.jsxs)(ex.h, {
                        tabId: '',
                        tabPos: 0,
                        isTabSelectedByDefault: !1,
                        children: [
                            (0, i.jsx)(ev.F, {
                                blockType: n.EntityTypes.Header,
                                blockId: n.EntityTypes.Header,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: 1,
                                children: X,
                            }),
                            (0, i.jsx)(ev.F, {
                                blockType: n.EntityTypes.Tracks,
                                blockId: n.EntityTypes.Tracks,
                                blockPosX: 1,
                                blockPosY: 2,
                                objectsCount: S,
                                children: (0, i.jsx)(t0, {
                                    count: S,
                                    itemContentCallback: z,
                                    getDataByRange: N,
                                    ariaLabel: f({ id: 'entity-names.albums-tracks-list' }, { albumName: (null == (l = h.meta) ? void 0 : l.title) || '' }),
                                }),
                            }),
                            h.hasLabel &&
                                (0, i.jsx)(ev.F, {
                                    blockType: n.EntityTypes.Labels,
                                    blockId: n.EntityTypes.Labels,
                                    blockPosX: 1,
                                    blockPosY: 3,
                                    objectsCount: null != (r = null == (o = h.labels) ? void 0 : o.length) ? r : 0,
                                    children: (0, i.jsx)(t7, { album: h, size: 's', weight: 'normal', className: as().label }),
                                }),
                            (0, i.jsxs)('div', {
                                className: eb().footerContainer,
                                children: [
                                    (0, i.jsxs)('div', { className: as().carouselBlocks, children: [V, ' '] }),
                                    (0, i.jsx)(tr.A, { children: (0, i.jsx)(tn.w, { className: eb().footer }) }),
                                ],
                            }),
                        ],
                    })
                );
            });
            var an = a(98225),
                ar = a(27395),
                ad = a(62837),
                ac = a(81828),
                au = a(70025);
            let am = (e) => {
                var t;
                let a = null != (t = ar.nd.find((t) => t === e)) ? t : au.O.ABOUT;
                return { tab: a, index: ar.nd.indexOf(a) };
            };
            var ab = a(73853),
                ap = a(44440),
                av = a(14912),
                ah = a(38628),
                ax = a.n(ah);
            let a_ = (e) => {
                    let { title: t, description: a } = e;
                    return (0, i.jsxs)('div', {
                        className: ax().infoBlock,
                        children: [
                            (0, i.jsx)(x.HL, { variant: 'span', type: 'entity', size: 'm', className: ax().infoTitle, children: t }),
                            (0, i.jsx)(x.HL, { variant: 'span', type: 'entity', size: 'm', children: a }),
                        ],
                    });
                },
                aA = (e) => {
                    let { album: t, content: a } = e;
                    if (!a) return null;
                    switch (a.kind) {
                        case 'labels':
                            return (0, i.jsx)(t7, { album: t, size: 'm', weight: 'medium', className: ax().label });
                        case 'text':
                            return (0, i.jsx)(a_, { title: a.title, description: a.names });
                    }
                },
                aj = (e) => {
                    let { album: t, about: a, tabValue: l, tabElementId: s } = e,
                        { index: o } = am(au.O.ABOUT);
                    return (0, i.jsx)(an.Kp, {
                        name: o,
                        value: l,
                        elementId: s,
                        children: (0, i.jsxs)('div', {
                            className: ax().contentAbout,
                            children: [
                                null !== a.description &&
                                    (0, i.jsx)(x.HL, {
                                        variant: 'div',
                                        type: 'entity',
                                        size: 'm',
                                        className: eb().text,
                                        children: (0, i.jsx)('span', { dangerouslySetInnerHTML: { __html: a.description } }),
                                    }),
                                a.hasInfo &&
                                    (0, i.jsxs)('div', {
                                        className: eb().text,
                                        children: [
                                            a.readers && (0, i.jsx)(a_, { title: a.readersTitle, description: a.readers }),
                                            a.withDuration && (0, i.jsx)(a_, { title: a.durationTitle, description: a.durationText }),
                                            (0, i.jsx)(aA, { album: t, content: a.publisher }),
                                            a.isExplicit && (0, i.jsx)(a_, { title: a.ageLimitTitle, description: a.ageLimit }),
                                        ],
                                    }),
                            ],
                        }),
                    });
                };
            var ag = a(76843),
                ay = a(18486),
                aC = a(72086),
                ak = a.n(aC);
            let af = (0, l.PA)((e) => {
                let { className: t, headingVariant: a = 'h2', title: l, ariaLabel: o } = e;
                (0, eC.W)();
                let { album: r, sonataState: d } = (0, j.g)(),
                    { from: c, utmLink: u } = (0, eP.f)({ pageId: L.b.PODCAST, blockId: eT.U.PODCAST, contextId: r.id, contextType: e_.K.Album }),
                    m = (0, s.useMemo)(
                        () =>
                            r.lastEpisodes.map((e, t) => {
                                let a = ((e, t) => (t && e.data ? e.data : null))(e, r.isResolved);
                                return a
                                    ? (0, i.jsx)(
                                          eh.B,
                                          {
                                              objectType: n.DomainObjectType.PodcastEpisode,
                                              objectId: String(a.id),
                                              objectPosX: 1,
                                              objectPosY: t + 1,
                                              children: (0, i.jsx)(ag.K, {
                                                  track: a,
                                                  playContextParams: {
                                                      contextData: { type: e_.K.Album, meta: r.contextMeta, from: c, utmLink: u },
                                                      queueParams: { index: e.positionInContext, entityId: a.id },
                                                      loadContextMeta: !0,
                                                      entitiesData: d.unloadedEntitiesDataFromModels,
                                                  },
                                              }),
                                          },
                                          a.id,
                                      )
                                    : (0, i.jsx)(tp.D, { isActive: !0, className: ak().shimmerItem, variant: tm.X.ALBUM }, t);
                            }),
                        [r.lastEpisodes, r.isResolved, r.contextMeta, c, u, d.unloadedEntitiesDataFromModels],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, ep.$)(t, ak().root),
                    children: [
                        (0, i.jsx)(ay.T, { headingVariant: a, className: ak().blockHeader, title: l }),
                        (0, i.jsx)('div', { role: 'list', 'aria-label': o, tabIndex: 0, children: m }),
                    ],
                });
            });
            var aT = a(10079),
                aP = a(47934),
                aN = a(85178),
                aL = a.n(aN);
            let aI = {
                    'authors-books': c.e8.album.AUTHORS_BOOKS,
                    'category-albums': c.e8.album.CATEGORY_ALBUMS,
                    'labels-albums': c.e8.album.LABELS_ALBUMS,
                    'similar-albums': c.e8.album.SIMILAR_ALBUMS,
                },
                aS = (0, l.PA)((e) => {
                    var t, a;
                    let { isShimmerVisible: l, isShimmerActive: s, className: o, headingVariant: r = 'h2' } = e,
                        { album: d } = (0, j.g)();
                    return (
                        (0, eC.W)(),
                        (0, i.jsx)('div', {
                            className: (0, ep.$)(o, aL().root),
                            children:
                                null == (a = d.relatedContent) || null == (t = a.items)
                                    ? void 0
                                    : t.map((e, t) => {
                                          let a = aI[e.type] || '';
                                          return (0, i.jsx)(
                                              aP.O,
                                              {
                                                  headingVariant: r,
                                                  title: e.title,
                                                  isShimmerVisible: l,
                                                  isShimmerActive: s,
                                                  className: (0, ep.$)(aL().root, o),
                                                  containerClassName: aL().carousel,
                                                  headerClassName: aL().header,
                                                  'data-test-id': a,
                                                  children: e.albums.map((e, t) =>
                                                      (0, i.jsx)(
                                                          eh.B,
                                                          {
                                                              objectType: n.DomainObjectType.Podcast,
                                                              objectId: String(e.id),
                                                              objectPosX: t + 1,
                                                              objectPosY: 1,
                                                              children: (0, i.jsx)(aT.a, { album: e, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              },
                                              ''.concat(e.type).concat(t),
                                          );
                                      }),
                        })
                    );
                }),
                aE = (0, l.PA)((e) => {
                    var t, a, l;
                    let { content: s } = e,
                        { album: o } = (0, j.g)(),
                        r = s.isAbout && o.relatedContent && o.relatedContent.items && o.relatedContent.items.length > 0;
                    return (0, i.jsxs)('div', {
                        className: eb().footerContainer,
                        children: [
                            s.withLastEpisodes &&
                                (0, i.jsx)(ev.F, {
                                    blockType: n.EntityTypes.LatestEpisodes,
                                    blockId: n.EntityTypes.LatestEpisodes,
                                    blockPosX: 1,
                                    blockPosY: 2,
                                    objectsCount: o.lastEpisodes.length,
                                    children: (0, i.jsx)(af, { className: ax().lastEpisodes, title: s.lastEpisodesTitle, ariaLabel: s.lastEpisodesListLabel }),
                                }),
                            r &&
                                (0, i.jsx)(ev.F, {
                                    blockType: n.EntityTypes.Podcasts,
                                    blockId: n.EntityTypes.Podcasts,
                                    blockPosX: 1,
                                    blockPosY: 3,
                                    objectsCount: null != (l = null == (a = o.relatedContent) || null == (t = a.items) ? void 0 : t.length) ? l : 0,
                                    children: (0, i.jsx)(aS, { isShimmerVisible: o.isRelatedContentLoading, isShimmerActive: !0 }),
                                }),
                            (0, i.jsx)(tr.A, { children: (0, i.jsx)(tn.w, { className: eb().footer }) }),
                        ],
                    });
                });
            var aO = a(31532),
                aM = a(108),
                aB = a(52589),
                aw = a.n(aB);
            let aR = (0, l.PA)((e) => {
                    let { album: t, actionButton: a, contextMenuChildren: l, className: o, 'aria-labelledby': n, forwardRef: r, onVersionClick: d } = e,
                        { formatMessage: u } = (0, ei.A)(),
                        { shouldShowBuySubscriptionModal: m, showBuySubscriptionModal: v } = (0, eN.q)();
                    (0, eC.W)();
                    let { from: x, utmLink: _ } = (0, eP.f)({ pageId: L.b.ALBUM, blockId: eT.U.ALBUM, contextType: e_.K.Album, contextId: t.id }),
                        {
                            user: A,
                            settings: { isMobile: g },
                            sonataState: y,
                            modals: { imageSliderModal: C },
                            paywall: { modal: k },
                        } = (0, j.g)(),
                        f = (0, ef.P)(),
                        { iconSize: T, controlSize: P } = (0, ew.q)(g),
                        N = g && !A.isAuthorized && t.isAvailable,
                        I = g && !A.hasPlus && A.isAuthorized && t.isAvailable,
                        S = N || I,
                        E = (0, eL.N)(),
                        O = (0, aM.$)(t.isLiked, t.type),
                        M = (0, ek.r)(t.type),
                        B = (0, eI.j)(),
                        w = t.isAvailable || t.isAudiobook,
                        R = !!t.coverUri,
                        D = (0, s.useMemo)(() => {
                            if (t.shouldShowBooksBadge) return (0, i.jsx)(h.I, { variant: 'yandexBooks'.concat(B), className: aw().booksLogo });
                        }, [t.shouldShowBooksBadge, B]),
                        U = !A.hasPlus && t.isAvailableOnlyForPlus,
                        H = (0, aO.c)(t.isPodcast ? t : null),
                        { isPlaying: X, togglePlay: z } = (0, eS.D)({
                            playContextParams: {
                                contextData: { type: e_.K.Album, meta: { id: t.id }, from: x, utmLink: _ },
                                loadContextMeta: !0,
                                entitiesData: y.unloadedEntitiesDataFromModels,
                            },
                        }),
                        V = (0, p.c)(() => {
                            t.coverUri && C.openImages({ images: [t.coverUri] });
                        }),
                        F = (0, p.c)(() => {
                            if (!f()) {
                                if (m) return void v();
                                if (E) return void k.open();
                                z();
                            }
                        }),
                        K = (0, s.useMemo)(
                            () =>
                                U
                                    ? (0, i.jsx)(eB, { className: aw().plusPaywallButton, albumType: t.type })
                                    : g
                                      ? (0, i.jsx)(eE.D, {
                                            className: (0, ep.$)(e7().playControl, { [e7().playControl_withLogin]: S }),
                                            buttonVariant: 'default',
                                            iconSize: S ? T : 'xxl',
                                            size: S ? P : void 0,
                                            isPlaying: X,
                                            onClick: F,
                                            variant: S ? 'default' : 'filled',
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                        })
                                      : (0, i.jsx)(eE.D, {
                                            className: e7().playControl,
                                            withRipple: !0,
                                            buttonVariant: 'default',
                                            radius: 'xxxl',
                                            size: 's',
                                            color: 'primary',
                                            iconSize: 'xxs',
                                            isPlaying: X,
                                            onClick: F,
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                            children: (0, i.jsx)(b.A, { id: 'player-actions.listen' }),
                                        }),
                            [U, g, X, F, t.isAvailable, t.type, S, T, P],
                        ),
                        Y = (0, s.useMemo)(
                            () =>
                                (0, i.jsx)('div', {
                                    className: (0, ep.$)(aw().controlsBlock, { [aw().controlsBlock_withPaywallButton]: U }),
                                    children: (0, i.jsxs)('div', {
                                        className: e7().controlsContainer,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: (0, ep.$)(e7().controls, { [aw().controls_withPaywallButton]: U }),
                                                'data-test-id': c.e8.pageHeader.NON_MUSIC_PAGE_HEADER_CONTROLS,
                                                children: [
                                                    (0, i.jsx)(eh.B, { objectType: t.mainObjectType, objectId: String(t.id), objectPosX: 1, objectPosY: 1, children: K }),
                                                    (0, i.jsx)(e$, { album: t, likeButtonAriaLabel: O, withLikeButton: !U, contextMenuChildren: l }),
                                                ],
                                            }),
                                            a && (0, i.jsx)('div', { className: e7().controls, children: a }),
                                        ],
                                    }),
                                }),
                            [K, t, O, U, a, l],
                        ),
                        G = (0, s.useMemo)(() => (0, i.jsx)('div', { className: aw().meta, children: (0, i.jsx)(e8, { album: t }) }), [t]);
                    return (0, i.jsx)(e9.k, {
                        ref: r,
                        headingVariant: 'h1',
                        className: o,
                        controls: Y,
                        meta: G,
                        entityName: M,
                        entityNameIcon: D,
                        title: t.title,
                        cover: (0, i.jsx)(e2.I, {
                            coverVariant: 'square',
                            coverUri: t.coverUri,
                            isAvailable: w,
                            withPlusBadge: t.isAvailableOnlyForPlus,
                            onClick: R ? V : void 0,
                            'aria-label': R ? u({ id: 'slider.view-cover' }) : void 0,
                        }),
                        'aria-labelledby': n,
                        version: t.version,
                        onVersionClick: d,
                        disclaimerLabel: H,
                        showMobileLoginButton: N,
                        showMobileSubscriptionButton: I,
                    });
                }),
                aD = (0, s.forwardRef)((e, t) => (0, i.jsx)(aR, { forwardRef: t, ...e }));
            var aU = a(87366),
                aH = a(76099);
            let aX = (0, l.PA)((e) => {
                let { tabsState: t, tabsTexts: a, onTabChange: l, actionButton: o, children: n } = e,
                    { album: r } = (0, j.g)(),
                    d = (0, s.useRef)(null);
                return r.isLoading || !r.meta || r.isRejected
                    ? (0, i.jsx)(ey.c, { className: eb().header, isActive: !0 })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(aD, {
                                  album: r.meta,
                                  actionButton: o,
                                  className: eb().header,
                                  contextMenuChildren: (0, i.jsx)(ai, { albumId: r.meta.id, albumTitle: r.meta.title, albumCoverUri: r.meta.coverUri }),
                              }),
                              (0, i.jsx)(aH.wI, {
                                  className: ax().tabCarousel,
                                  ...t,
                                  onTabChange: l,
                                  ref: d,
                                  children: ar.nd.map((e, t) => (0, i.jsx)(aU.o, { className: ax().tab, title: a[e], value: t }, e)),
                              }),
                              n,
                          ],
                      });
            });
            var az = a(65912);
            let aV = (0, l.PA)((e) => {
                    var t;
                    let { content: a, from: l, utmLink: s, getStorePlayContextParams: o } = e,
                        { album: r, sonataState: d } = (0, j.g)(),
                        { formatMessage: c } = (0, ei.A)(),
                        u = tu({ album: r }),
                        m = tC({
                            element: (e, t) => {
                                if (e.data && e.type !== tl.r.TEXT)
                                    return (0, i.jsx)(eh.B, {
                                        objectType: n.DomainObjectType.Track,
                                        objectId: String(e.data.id),
                                        objectPosX: 1,
                                        objectPosY: t + 1,
                                        children: (0, i.jsx)(ag.K, {
                                            track: e.data,
                                            viewType: az.D.ALBUM,
                                            position: e.position,
                                            playContextParams: o(t, {
                                                contextData: { type: e_.K.Album, meta: r.contextMeta, from: l, utmLink: s },
                                                queueParams: { index: e.positionInContext, entityId: e.data.id },
                                                loadContextMeta: !0,
                                                entitiesData: d.unloadedEntitiesDataFromModels,
                                            }),
                                        }),
                                    });
                            },
                            isNonMusic: !0,
                            album: r,
                        }),
                        b = a.isAbout ? 0 : r.items.length || 10,
                        p = ((e) => {
                            let { content: t, title: a, formatMessage: i } = e;
                            if (t.withTrackList)
                                return i('audiobook' === t.listType ? { id: 'non-music.audiobook-list' } : { id: 'podcast.episodes-list' }, { albumName: a || '' });
                        })({ content: a, title: null == (t = r.meta) ? void 0 : t.title, formatMessage: c });
                    return a.withTrackList
                        ? (0, i.jsx)(ev.F, {
                              blockType: n.EntityTypes.Episodes,
                              blockId: n.EntityTypes.Episodes,
                              blockPosX: 1,
                              blockPosY: 2,
                              objectsCount: b,
                              children: (0, i.jsx)(t0, { count: b, getDataByRange: u, itemContentCallback: m, role: 'tabpanel', ariaLabel: p }),
                          })
                        : null;
                }),
                aF = (0, l.PA)(() => {
                    var e, t, a, l, r, d, c, u, m, p;
                    let h = (0, s.useRef)(0),
                        _ = (0, ts.w)(),
                        { album: g, experiments: y, slides: C } = (0, j.g)(),
                        f = (null == (e = g.meta) ? void 0 : e.isAudiobook) ? L.b.AUDIOBOOK : L.b.PODCAST,
                        T = (null == (t = g.meta) ? void 0 : t.isAudiobook) ? eT.U.AUDIOBOOK : eT.U.PODCAST,
                        { from: N, utmLink: I } = (0, eP.f)({ pageId: f, blockId: T, contextType: e_.K.Album, contextId: g.id }),
                        { href: S } = (0, P.u)('/slides/podcast/:podcastId', { params: { podcastId: null != (p = g.id) ? p : '' } }),
                        E = (0, A.Z)(S),
                        O = (0, s.useId)(),
                        { formatMessage: M } = (0, ei.A)(),
                        B = (0, o.useSearchParams)(),
                        w = (0, av.X)(),
                        R = y.checkExperiment(to.z.WebNextRewind2024, 'on') && (null == (a = g.meta) ? void 0 : a.isPodcast),
                        D = (0, s.useMemo)(() => {
                            let { index: e } = am(B.get(k.K.ACTIVE_TAB));
                            return e;
                        }, [B]),
                        U = (0, an.zb)(D),
                        [H, X] = (0, s.useState)(ar.nd[U.value]);
                    (0, s.useEffect)(
                        () => () => {
                            ((h.current = 0), C.resetPodcast());
                        },
                        [g, C],
                    );
                    let z = (0, s.useMemo)(() => {
                            var e, t;
                            let a = R && C.podcastSlidesLoadingState === tc.G.RESOLVE && !!(null == (e = C.podcastItems) ? void 0 : e.length),
                                l = { '--action-button-color-background': (0, ab.W)(null == (t = g.meta) ? void 0 : t.averageColor) };
                            return a
                                ? (0, i.jsx)(v.$, {
                                      className: ax().rewindControl,
                                      style: l,
                                      withRipple: !1,
                                      withHover: !1,
                                      radius: 'xxxl',
                                      size: 's',
                                      color: 'primary',
                                      onClick: E,
                                      variant: 'default',
                                      role: 'link',
                                      children: (0, i.jsx)(x.HL, { variant: 'span', lineClamp: 1, children: (0, i.jsx)(b.A, { id: 'rewind.button-title' }) }),
                                  })
                                : null;
                        }, [null == (l = g.meta) ? void 0 : l.averageColor, R, E, null == (r = C.podcastItems) ? void 0 : r.length, C.podcastSlidesLoadingState]),
                        V = (0, s.useMemo)(() => {
                            var e, t;
                            return ((e) => {
                                let { isFairyTale: t, isAudiobook: a, tracksCount: i, formatMessage: l } = e;
                                return t
                                    ? { about: l({ id: 'non-music.fairytale-tab-about' }), 'track-list': l({ id: 'non-music.audiobook-tab-tracks' }) }
                                    : a
                                      ? { about: l({ id: 'non-music.audiobook-tab-about' }), 'track-list': l({ id: 'non-music.audiobook-tab-tracks' }) }
                                      : { about: l({ id: 'podcast.tab-about' }), 'track-list': l({ id: 'podcast.tab-tracks' }, { value: i }) };
                            })({
                                isFairyTale: null == (e = g.meta) ? void 0 : e.isFairyTale,
                                isAudiobook: null == (t = g.meta) ? void 0 : t.isAudiobook,
                                tracksCount: g.tracks.length,
                                formatMessage: M,
                            });
                        }, [null == (d = g.meta) ? void 0 : d.isAudiobook, null == (c = g.meta) ? void 0 : c.isFairyTale, g.tracks.length, M]),
                        F = (0, s.useMemo)(
                            () => (e) => {
                                var t;
                                if (!U.onTabChange || e === U.value) return;
                                U.onTabChange(e);
                                let a = null != (t = ar.nd[e]) ? t : au.O.ABOUT;
                                X(a);
                                let i = (0, ap.b)(k.K.ACTIVE_TAB, a);
                                i && w(i);
                            },
                            [U, w],
                        ),
                        K = ((e) => {
                            let { formatMessage: t } = (0, ei.A)();
                            return ((e, t) => {
                                let { minutes: a, hours: i } = J(e),
                                    l = '';
                                return (
                                    i > 0 && (l += t({ id: 'time.hours' }, { hours: i })),
                                    a > 0 && ((l += l.length > 0 ? ' ' : ''), (l += t({ id: 'time.minutes-left' }, { minutes: a }))),
                                    l
                                );
                            })(e, t);
                        })((null == (u = g.meta) ? void 0 : u.durationSec) || 0),
                        Y = (0, s.useMemo)(() => {
                            let e = ((e, t) => {
                                var a, i, l;
                                let { album: s, description: o, labels: n, contentWarning: r, durationText: d } = e,
                                    c = (0, t9.p)({ labels: n, type: null == s ? void 0 : s.type }),
                                    u = (0, ac.A)(r),
                                    m = !!(null == s ? void 0 : s.durationSec),
                                    b = ''.concat(t(Number(c.count) > 1 ? { id: 'podcast.publishers-title' } : { id: 'podcast.publisher-title' }), ':');
                                return {
                                    description: o ? (0, er.ky)(o) : null,
                                    hasInfo: !!((null == s || null == (a = s.artists) ? void 0 : a.length) || m || (null == n ? void 0 : n.length) || u),
                                    readers: null == s || null == (i = s.artists) ? void 0 : i.map((e) => e.name).join(', '),
                                    withDuration: m,
                                    isExplicit: u,
                                    readersTitle: ''.concat(
                                        t(
                                            Number(null == s || null == (l = s.artists) ? void 0 : l.length) > 1
                                                ? { id: 'non-music.audiobook-artists' }
                                                : { id: 'non-music.audiobook-artist' },
                                        ),
                                        ':',
                                    ),
                                    durationTitle: ''.concat(t({ id: 'time.duration' }), ':'),
                                    ageLimitTitle: ''.concat(t({ id: 'podcast.age-limit' }), ':'),
                                    ageLimit: ad.JU.AGE_18,
                                    durationText: d,
                                    publisher: ((e, t) => {
                                        let { labels: a, title: i } = e;
                                        return a.hasLabels ? { kind: 'labels', labels: t8(a, t) } : a.names ? { kind: 'text', title: i, names: a.names } : null;
                                    })({ labels: c, title: b }, t),
                                };
                            })({ album: g.meta, description: g.description, labels: g.labels, contentWarning: g.contentWarning, durationText: K }, M);
                            return (0, i.jsx)(aj, { album: g, about: e, tabValue: U.value, tabElementId: O });
                        }, [g, M, K, U.value, O]);
                    (0, s.useEffect)(() => {
                        g.isResolved && (g.loadLastEpisodes(), g.getRelatedContent());
                    }, [g, g.isResolved, g.loadLastEpisodes, g.getRelatedContent]);
                    let G = ((e, t) => {
                            let { type: a, activeTab: i, lastEpisodesCount: l } = e,
                                s = i === au.O.ABOUT,
                                o = i === au.O.TRACKS,
                                n = a === q._.AUDIOBOOK ? 'audiobook' : 'podcast';
                            return {
                                isAbout: s,
                                withTrackList: o,
                                withLastEpisodes: s && a === q._.PODCAST && l > 0,
                                listType: o ? n : null,
                                lastEpisodesTitle: t({ id: 'entity-names.podcast-last-episodes' }),
                                lastEpisodesListLabel: t({ id: 'podcast.last-episodes-list' }),
                            };
                        })({ type: null == (m = g.meta) ? void 0 : m.type, activeTab: H, lastEpisodesCount: g.lastEpisodes.length }, M),
                        W = R && C.podcastSlidesLoadingState === tc.G.IDLE;
                    return (
                        'number' == typeof g.id && W && (0, s.use)(C.getPodcastSlides({ podcastId: g.id })),
                        (0, i.jsxs)(ex.h, {
                            tabId: null != H ? H : au.O.ABOUT,
                            tabPos: U.value + 1,
                            isTabSelectedByDefault: !1,
                            children: [
                                (0, i.jsx)(ev.F, {
                                    blockType: n.EntityTypes.Header,
                                    blockId: n.EntityTypes.Header,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    objectsCount: 1,
                                    children: (0, i.jsx)(aX, { tabsState: U, tabsTexts: V, onTabChange: F, actionButton: z, children: Y }),
                                }),
                                (0, i.jsx)(aV, { content: G, from: N, utmLink: I, getStorePlayContextParams: _ }),
                                (0, i.jsx)(aE, { content: G }),
                            ],
                        })
                    );
                }),
                aK = (0, l.PA)((e) => {
                    var t, a, l, n, d, b, p, v, h, x;
                    let { albumId: _, trackId: A, preloadedAlbum: g, preloadedCpa: y, isTrackLegalRejected: L } = e,
                        { contentScrollRef: E, setContentScrollRef: X } = (0, B.g)(),
                        z = (0, o.useSearchParams)(),
                        V = ((e) => {
                            let { searchParams: t = {} } = e;
                            return 'bandlink' === t[k.K.UTM_SOURCE] || !!t[k.K.CLID] || !!t[k.K.REF_ID];
                        })({ searchParams: Object.fromEntries(z.entries()) }),
                        { user: F, album: K, disclaimerModalState: Y, track: G, sonataState: W, albumCPA: $ } = (0, j.g)(),
                        { checkIsValidClid: q, setClidToQuery: Z, deleteClidFromQuery: Q } = (0, M.I)(),
                        J = (0, S.y)(null == (t = K.meta) ? void 0 : t.averageColor),
                        { headerStyle: ee } = (0, f.Q)(J);
                    (0, r.u)();
                    let { deprecationUrl: et, shouldRedirect: er } = ((e) => {
                            let { albumId: t, deprecationTargetAlbumId: a, trackId: i, realId: l, searchParams: s } = e,
                                o = Number(t),
                                n = new URLSearchParams(s);
                            (n.delete('albumId'), n.delete('trackId'));
                            let r = Object.fromEntries(n);
                            if ('number' == typeof a && a !== o) {
                                if (i) {
                                    let { href: e } = (0, P.u)('/album/:albumId/track/:trackId', { params: { albumId: a, trackId: i }, query: r });
                                    return { deprecationUrl: e, shouldRedirect: !0 };
                                }
                                let { href: e } = (0, P.u)('/album/:albumId', { params: { albumId: a }, query: r });
                                return { deprecationUrl: e, shouldRedirect: !0 };
                            }
                            if (i && l && l !== i) {
                                let { href: e } = (0, P.u)('/album/:albumId/track/:trackId', { params: { albumId: t, trackId: l }, query: r });
                                return { deprecationUrl: e, shouldRedirect: !0 };
                            }
                            return { deprecationUrl: '', shouldRedirect: !1 };
                        })({
                            albumId: _,
                            deprecationTargetAlbumId: K.deprecationTargetAlbumId,
                            trackId: A,
                            realId: (null == (a = G.meta) ? void 0 : a.id) === A ? (null == (l = G.meta) ? void 0 : l.realId) : void 0,
                            searchParams: z,
                        }),
                        ed = (0, N.c)({ album: K.meta, shouldHistoryBack: !0 }),
                        ec = !!(null == (n = K.meta) ? void 0 : n.isNonMusic),
                        em = !!(A && L);
                    ((0, I.A)(),
                        ((e) => {
                            var t;
                            let { albumId: a, trackId: i, isNonMusic: l } = e,
                                { setDeeplink: o } = null != (t = (0, en.P)()) ? t : {};
                            (0, s.useEffect)(() => {
                                if (i) {
                                    let e = l ? void 0 : { playTrack: i, openPlayer: !0, lyricsMode: !0 },
                                        { href: t } = (0, P.u)('/album/:albumId/track/:trackId', { params: { albumId: a, trackId: i }, query: e });
                                    null == o || o(t);
                                } else {
                                    let { href: e } = (0, P.u)('/album/:albumId', { params: { albumId: a } });
                                    null == o || o(e);
                                }
                                return () => {
                                    null == o || o(null);
                                };
                            }, [a, l, o, i]);
                        })({ albumId: _, trackId: A, isNonMusic: ec }),
                        (0, s.useEffect)(() => {
                            var e;
                            (null == (e = K.meta) ? void 0 : e.isUnsafeLegal) && ed();
                        }, [null == (d = K.meta) ? void 0 : d.isUnsafeLegal, ed]),
                        (0, s.useLayoutEffect)(
                            () => (
                                A && _ && !em && G.open({ trackId: A, albumId: Number(_) }),
                                () => {
                                    G.reset();
                                }
                            ),
                            [_, em, A, G],
                        ),
                        (0, s.useEffect)(() => {
                            var e;
                            em && (null == (e = G.meta) ? void 0 : e.resolveAllDisclaimers) && G.meta.resolveAllDisclaimers();
                        }, [em, G.meta]),
                        (0, s.useEffect)(() => {
                            q($.cpa, Number(_)) || Q();
                        }, [q, _, $.cpa, Q]),
                        (0, s.useEffect)(
                            () => (
                                K.id && K.id !== Number(_) && (K.reset(W), Q()),
                                () => {
                                    (K.reset(W), Q());
                                }
                            ),
                            [K, _, W, Q, $],
                        ),
                        (0, w.J)(K.isResolved),
                        ((e, t, a, i, l) => {
                            var o, n;
                            let { fullscreenVideoPlayer: r } = (0, j.g)(),
                                d = null == e ? void 0 : e.meta,
                                c = null == e ? void 0 : e.isLoading,
                                u = null == e ? void 0 : e.isRejected,
                                m = null == d ? void 0 : d.isLegalRejected,
                                b = null == i ? void 0 : i.isLegalRejected,
                                p = null == i || null == (o = i.resolvedModalData) ? void 0 : o.title,
                                v = null == d || null == (n = d.resolvedModalData) ? void 0 : n.title,
                                h = (0, s.useCallback)(
                                    (e) => {
                                        if (a && (l || b)) {
                                            if (!p) return;
                                            return { title: p };
                                        }
                                        if (m) {
                                            if (!v) return;
                                            return { title: v };
                                        }
                                        return t ? void 0 : u ? {} : d && !c ? ea((0, U.f)(d), e) : void 0;
                                    },
                                    [d, c, u, m, v, l, a, b, p, t],
                                );
                            (0, H.C)(r.modal.isOpened ? null : h);
                        })(K, G.isOpened, A, G.meta, em));
                    let ep = (0, u.L)(() => (ec ? (0, i.jsx)(aF, {}) : (0, i.jsx)(ao, {}))),
                        ev = [];
                    (_ &&
                        K.isNeededToLoad &&
                        (ev.push(K.getData({ albumId: Number(_), resumeStream: !1, preloadedAlbum: g, sonataState: W }), K.getDonations({ albumId: Number(_) })),
                        (V || y) && ev.push($.getCpa({ albumId: Number(_), preloadedCpa: y }))),
                        ev.length && (0, s.use)(Promise.allSettled(ev)),
                        (0, s.useEffect)(() => {
                            $.cpa && K.id && Z($.cpa, K.id);
                        }, [$.cpa, K.id, Z]),
                        K.isNotFound && (0, o.notFound)(),
                        er && (0, o.redirect)(et),
                        ((e) => {
                            let { album: t } = e,
                                a = (0, s.useRef)(0),
                                { notify: l } = (0, es.l)(),
                                { formatMessage: o } = (0, ei.A)();
                            (0, s.useMemo)(
                                () => () => {
                                    if (!t.isNotFound && (t.isRejected || (!t.meta && !t.isLoading))) {
                                        var e;
                                        if (!a || a.current > 0) return;
                                        let s = (null == (e = t.meta) ? void 0 : e.isPodcast)
                                            ? o({ id: 'podcast-errors.error-during-loading-podcast' })
                                            : o({ id: 'album-errors.error-during-loading-album' });
                                        (l((0, i.jsx)(eo.h, { error: s }), { containerId: el.u.ERROR }), a.current++);
                                    }
                                },
                                [t.isLoading, t.isNotFound, t.isRejected, t.meta, o, l],
                            )();
                        })({ album: K }));
                    let eh = em
                        ? null != (h = null == (b = G.meta) ? void 0 : b.resolvedModalData)
                            ? h
                            : null
                        : null != (x = null == (p = K.meta) ? void 0 : p.resolvedModalData)
                          ? x
                          : null;
                    if (K.isCacheNotFound) return (0, i.jsx)(C, {});
                    if ((null == (v = K.meta) ? void 0 : v.isLegalRejected) || em) return (0, i.jsx)(R.M, { modalState: Y, data: eh });
                    let ex = ec ? c.Xk.album.NON_MUSIC_ALBUM_PAGE : c.Xk.album.ALBUM_PAGE;
                    return (0, i.jsx)(O, {
                        pageAlbumId: Number(_),
                        children: (0, i.jsxs)(T.h, {
                            scrollElement: E,
                            children: [
                                (0, i.jsx)(D.Y, {}),
                                (0, i.jsxs)(m.C, {
                                    scrollableContainerRef: X,
                                    className: eb().root,
                                    containerClassName: eb().content,
                                    scrollContentClassName: eb().scrollContent,
                                    'data-test-id': ex,
                                    children: [(0, i.jsx)('div', { className: eb().averageColorBackground, style: ee }), ep, (0, i.jsx)(eu, { user: F, album: K })],
                                }),
                            ],
                        }),
                    });
                }),
                aY = (0, l.PA)((e) => {
                    var t;
                    let { album: a } = (0, j.g)();
                    return (0, i.jsx)(d.a, {
                        pageId: n.AppScreen.AlbumScreen,
                        pageIdForFrom: L.b.ALBUM,
                        mainObjectId: e.albumId,
                        mainObjectType: (null == (t = a.meta) ? void 0 : t.id) === Number(e.albumId) && a.isResolved ? a.meta.mainObjectType : void 0,
                        children: (0, i.jsx)(aK, { ...e }),
                    });
                });
        },
    },
]);
