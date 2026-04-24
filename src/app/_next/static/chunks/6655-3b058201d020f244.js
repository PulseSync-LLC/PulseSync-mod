(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6655],
    {
        1585: (e) => {
            e.exports = {
                root: 'ExternalStreamingCard_root__7XtH7',
                logo: 'ExternalStreamingCard_logo__NbEj3',
                logoImage: 'ExternalStreamingCard_logoImage__FCbdH',
                name: 'ExternalStreamingCard_name__QWiJe',
            };
        },
        9310: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => b });
            var l = a(62936),
                i = a(19718),
                n = a(44020),
                o = a(8669),
                s = a(56874),
                r = a(99041),
                d = a(42561),
                c = a(47095),
                u = a.n(c);
            let m = (e) => {
                    let { item: t, itemContentCallback: a, resizeObserver: i, scrollMargin: o } = e,
                        [r, d] = (0, s.d)();
                    (0, n.useEffect)(
                        () => (
                            r && i && i.observe(r),
                            () => {
                                r && i && i.unobserve(r);
                            }
                        ),
                        [r, i],
                    );
                    let c = { transform: 'translate3d(0, '.concat(t.start - o, 'px, 0)') };
                    return (0, l.jsx)('div', { 'data-index': t.index, className: u().virtualItem, ref: d, style: c, children: a(t.index) }, t.key);
                },
                b = (0, i.PA)((e) => {
                    let { count: t, getDataByRange: a, itemContentCallback: i, role: c = 'region', ariaLabel: b } = e,
                        p = (0, d.fBs)(),
                        [v, g] = (0, s.d)(),
                        { virtualizer: j, resizeObserver: A } = (0, r.rA)({ count: t, getEstimateSize: () => 56, containerRef: v });
                    (0, n.useEffect)(() => {
                        p();
                    }, [p]),
                        (0, n.useEffect)(() => {
                            !j.isScrolling && j.range && a(j.range);
                        }, [a, j.isScrolling, j.range]);
                    let h = j.getTotalSize(),
                        x = j.getVirtualItems();
                    return (0, l.jsx)('div', {
                        className: u().virtualScroll,
                        style: { height: ''.concat(h, 'px') },
                        ref: g,
                        role: c,
                        'aria-label': b,
                        ...(0, o.Am)(o.S7.TRACK_LIST, !0),
                        children: x.map((e) => (0, l.jsx)(m, { item: e, itemContentCallback: i, resizeObserver: A, scrollMargin: j.options.scrollMargin }, e.key)),
                    });
                });
        },
        10620: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => o });
            var l = a(44020),
                i = a(20073),
                n = a(42561);
            let o = (e) => {
                let { album: t } = e;
                return (0, l.useCallback)(
                    (e) => {
                        let a = [];
                        for (let l = e.startIndex; l <= e.endIndex; l++) {
                            let e = t.items[l];
                            (null == e ? void 0 : e.type) === i.S.TRACK && (null == e ? void 0 : e.loadingState) === n.GuX.IDLE && a.push(e.id);
                        }
                        a.length && t.getTracks({ trackIds: a });
                    },
                    [t],
                );
            };
        },
        12439: (e) => {
            e.exports = { root: 'PromoLandingSocialLinks_root__mybk4', title: 'PromoLandingSocialLinks_title__xLYQv' };
        },
        14462: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => l });
            var l = (function (e) {
                return (e.ABOUT = 'about'), (e.TRACKS = 'track-list'), e;
            })({});
        },
        16460: (e) => {
            e.exports = { root: 'AlbumDonationMenuItem_root__Ajw_w', cover: 'AlbumDonationMenuItem_cover__Gg8_a', image: 'AlbumDonationMenuItem_image__AI5zU' };
        },
        16812: (e) => {
            e.exports = { root: 'RelatedContent_root__Dl1Nr', carousel: 'RelatedContent_carousel__pmv5c', header: 'RelatedContent_header__527S3' };
        },
        22561: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => x });
            var l = a(62936),
                i = a(47480),
                n = a(20073),
                o = a(25270),
                s = a(42561),
                r = a(79950),
                d = a(85906),
                c = (function (e) {
                    return (e.TRACK = 'TRACK'), (e.TEXT = 'TEXT'), e;
                })({}),
                u = a(93507),
                m = a.n(u);
            let b = (e) => {
                let { shimmerVariant: t, trackVariant: a = s.Xjt.ALBUM } = e;
                switch (t) {
                    case c.TRACK:
                        return (0, l.jsx)(d.DS, { isActive: !0, className: (0, r.$)({ [m().root]: a === s.Xjt.ALBUM }), variant: a });
                    case c.TEXT:
                        return (0, l.jsx)(d.nN, { className: m().root });
                }
            };
            var p = a(20418),
                v = a(47095),
                g = a.n(v),
                j = a(81027),
                A = a.n(j);
            let h = (e) => {
                    let { text: t } = e;
                    return (0, l.jsx)('div', { className: A().root, children: (0, l.jsx)(p.Heading, { variant: 'h2', className: g().text, children: t }) });
                },
                x = (e) => {
                    let { element: t, isNonMusic: a, album: r } = e,
                        { formatMessage: d } = (0, i.A)();
                    return (e) => {
                        var i;
                        let u = null == r || null == (i = r.items) ? void 0 : i[e];
                        if (
                            !u ||
                            !r.meta ||
                            r.isRejected ||
                            !((e) => !!e && 'object' == typeof e && (('type' in e && e.type === o.rU.TEXT) || ('id' in e && 'positionInContext' in e)))(u)
                        )
                            return (0, l.jsx)(b, { shimmerVariant: c.TRACK, trackVariant: s.Xjt.ALBUM });
                        if (!u.data && !u.isRejected)
                            switch (u.type) {
                                case o.rU.TEXT:
                                    return (0, l.jsx)(b, { shimmerVariant: c.TEXT });
                                case n.S.TRACK:
                                    return (0, l.jsx)(b, { shimmerVariant: c.TRACK, trackVariant: s.Xjt.ALBUM });
                                default:
                                    if (a) return (0, l.jsx)(b, { shimmerVariant: c.TRACK, trackVariant: s.Xjt.PLAYLIST });
                            }
                        return u.type !== o.rU.TEXT
                            ? t(u, e)
                            : a
                              ? (0, l.jsx)(h, { text: d({ id: 'entity-names.season-number' }, { number: u.data }) })
                              : (0, l.jsx)(h, { text: d({ id: 'entity-names.disk-number' }, { number: u.data }) });
                    };
                };
        },
        23004: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => d, m: () => A });
            var l = a(62936),
                i = a(85742),
                n = a(20418),
                o = a(85906),
                s = a(91378),
                r = a.n(s);
            let d = (e) => {
                let { message: t } = e;
                return (0, l.jsx)(o.$W, {
                    cover: (0, l.jsx)(i.Icon, { variant: 'unavailable', size: 'xs', className: r().icon }),
                    message: (0, l.jsx)(n.Caption, { className: r().message, variant: 'div', type: 'controls', size: 'm', children: t }),
                    coverRadius: 's',
                });
            };
            var c = a(19718),
                u = a(44020),
                m = a(26731),
                b = a(59935),
                p = a(5099),
                v = a(42561),
                g = a(93970),
                j = a.n(g);
            let A = (0, c.PA)(() => {
                let { slam: e } = (0, v.Pjs)(),
                    t = (0, v.ZpR)(v.Zyd.mymusicDownloadsTracks.href),
                    a = (0, v.ZpR)(v.Zyd.settings.href),
                    o = (0, b.c)(() => {
                        window.location.href = v.Zyd.main.href;
                    }),
                    s = (0, u.useMemo)(
                        () =>
                            e.isOfflineModeEnabled ? (0, l.jsx)(m.A, { id: 'offline.offline-mode-enabled' }) : (0, l.jsx)(m.A, { id: 'offline.no-internet-connection' }),
                        [e.isOfflineModeEnabled],
                    ),
                    r = (0, u.useMemo)(
                        () =>
                            e.isOfflineModeEnabled
                                ? (0, l.jsx)(p.$, {
                                      onClick: a,
                                      className: j().button,
                                      color: 'secondary',
                                      size: 'l',
                                      radius: 'xxxl',
                                      children: (0, l.jsx)(n.Caption, {
                                          type: 'controls',
                                          variant: 'span',
                                          size: 'm',
                                          children: (0, l.jsx)(m.A, { id: 'offline.disable-offline-mode' }),
                                      }),
                                  })
                                : (0, l.jsx)(p.$, {
                                      onClick: o,
                                      className: j().button,
                                      color: 'secondary',
                                      size: 'l',
                                      radius: 'xxxl',
                                      children: (0, l.jsx)(n.Caption, {
                                          type: 'controls',
                                          variant: 'span',
                                          size: 'm',
                                          children: (0, l.jsx)(m.A, { id: 'page-error.restart-app-button' }),
                                      }),
                                  }),
                        [o, a, e.isOfflineModeEnabled],
                    );
                return (0, l.jsx)('div', {
                    className: j().root,
                    children: (0, l.jsxs)('div', {
                        className: j().container,
                        children: [
                            (0, l.jsx)(i.Icon, { className: j().icon, variant: 'offline', size: 'xxl' }),
                            (0, l.jsx)(n.Heading, { className: j().title, variant: 'div', size: 'xs', children: s }),
                            (0, l.jsx)(n.Caption, {
                                className: j().text,
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'normal',
                                children: (0, l.jsx)(m.A, { id: 'offline.listen-downloaded-content' }),
                            }),
                            (0, l.jsxs)('div', {
                                className: j().buttons,
                                children: [
                                    r,
                                    (0, l.jsx)(p.$, {
                                        color: 'primary',
                                        onClick: t,
                                        role: 'link',
                                        size: 'l',
                                        radius: 'xxxl',
                                        className: j().button,
                                        children: (0, l.jsx)(m.A, { id: 'interface-actions.go-to-collection' }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
        },
        30295: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => s });
            var l = a(44020),
                i = a(90914),
                n = a(42561),
                o = a(34650);
            let s = (e, t, a, s, r) => {
                var d, c, u, m;
                (0, l.useEffect)(() => {
                    var l, d, c, u;
                    let m = t && a,
                        b = null == s || null == (l = s.resolvedModalData) ? void 0 : l.title,
                        p = null == e || null == (c = e.meta) || null == (d = c.resolvedModalData) ? void 0 : d.title;
                    if (a && (r || (null == s ? void 0 : s.isLegalRejected))) {
                        if (!b) return;
                        (0, n.jxB)({ title: b });
                        return;
                    }
                    if (null == e || null == (u = e.meta) ? void 0 : u.isLegalRejected) {
                        if (!p) return;
                        (0, n.jxB)({ title: p });
                        return;
                    }
                    if (!(null == e ? void 0 : e.meta) || e.isLoading || m) return;
                    let v = (0, i.fO)(e.meta);
                    t ||
                        (0, o.v)(v, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                            (0, n.jxB)(e);
                        });
                }, [
                    null == e ? void 0 : e.meta,
                    null == e ? void 0 : e.isLoading,
                    null == e || null == (d = e.meta) ? void 0 : d.isLegalRejected,
                    null == e || null == (u = e.meta) || null == (c = u.resolvedModalData) ? void 0 : c.title,
                    r,
                    a,
                    null == s ? void 0 : s.isLegalRejected,
                    null == s || null == (m = s.resolvedModalData) ? void 0 : m.title,
                    t,
                ]);
            };
        },
        32608: (e) => {
            e.exports = { root: 'LastEpisodes_root__4JPKj', blockHeader: 'LastEpisodes_blockHeader__se7bd', shimmerItem: 'LastEpisodes_shimmerItem__Iirx5' };
        },
        32909: (e, t, a) => {
            'use strict';
            a.d(t, { AlbumNotFoundPage: () => d });
            var l = a(62936),
                i = a(19718),
                n = a(44020),
                o = a(9939),
                s = a(42561);
            let r = (0, i.PA)(() => {
                    let { album: e, sonataState: t } = (0, s.Pjs)();
                    return (
                        (0, s.ACS)(),
                        (0, n.useEffect)(() => {
                            e.reset(t);
                        }, []),
                        (0, l.jsx)(o.M, {})
                    );
                }),
                d = (0, i.PA)(() => (0, l.jsx)(s.nVz, { pageId: s._Q$.PAGE_NOT_FOUND_SCREEN, children: (0, l.jsx)(r, {}) }));
        },
        33432: (e) => {
            e.exports = {
                carouselBlocks: 'AlbumContent_carouselBlocks__bOsTV',
                carouselBlock: 'AlbumContent_carouselBlock__QhSlm',
                carouselBlockHeader: 'AlbumContent_carouselBlockHeader__Liibv',
                carouselContainer: 'AlbumContent_carouselContainer__Y1M_e',
                label: 'AlbumContent_label__2jz4j',
            };
        },
        34650: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => s });
            var l = a(42561),
                i = a(82265);
            function n(e) {
                let { type: t, genre: a } = e;
                return [i._.AUDIOBOOK, i._.FAIRY_TALE].includes(null != t ? t : '') || ['audiobooksinenglish', 'fiction'].includes(null != a ? a : '');
            }
            function o(e) {
                let { albumType: t, messageFormatter: a } = e;
                switch (t) {
                    case i._.SINGLE:
                        return a({ id: 'metadata.single' });
                    case i._.PODCAST:
                        return a({ id: 'metadata.podcast' });
                    case i._.AUDIOBOOK:
                        return a({ id: 'metadata.audiobook' });
                    case i._.FAIRY_TALE:
                        return a({ id: 'metadata.fairy-tale' });
                    default:
                        return a({ id: 'metadata.album' });
                }
            }
            async function s(e, t) {
                var a, s, r, d;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let c = await (0, l.WGy)(t.locale),
                    u = (0, l.NsT)(e.title);
                return {
                    title:
                        null != (a = t.disclaimerTitle)
                            ? a
                            : (function (e) {
                                  let { albumMeta: t, messageFormatter: a } = e,
                                      o = (0, l.j4K)(t.artists);
                                  return n({ type: t.type, genre: t.genre })
                                      ? o
                                          ? a(
                                                { id: 'metadata.audiobook-title-with-artists' },
                                                { albumTitle: t.title, artistsNames: o, artistsNamesCount: t.artists.length },
                                            )
                                          : a({ id: 'metadata.audiobook-title-without-artists' }, { albumTitle: t.title })
                                      : t.type === i._.PODCAST
                                        ? a({ id: 'metadata.podcast-title' }, { albumTitle: t.title })
                                        : o
                                          ? a({ id: 'metadata.album-title-with-artists' }, { albumTitle: t.title, artistsNames: o })
                                          : a({ id: 'metadata.album-title-without-artists' }, { albumTitle: t.title });
                              })({ albumMeta: e, messageFormatter: c }),
                    description: (function (e) {
                        let { albumMeta: t, messageFormatter: a } = e,
                            o = (0, l.j4K)(t.artists);
                        return n({ type: t.type, genre: t.genre })
                            ? o
                                ? a({ id: 'metadata.audiobook-title-with-artists' }, { albumTitle: t.title, artistsNames: o, artistsNamesCount: t.artists.length })
                                : a({ id: 'metadata.audiobook-title-without-artists' }, { albumTitle: t.title })
                            : t.type === i._.PODCAST
                              ? a({ id: 'metadata.podcast-title' }, { albumTitle: t.title })
                              : o
                                ? a({ id: 'metadata.album-title-with-artists' }, { albumTitle: t.title, artistsNames: o })
                                : a({ id: 'metadata.album-title-without-artists' }, { albumTitle: t.title });
                    })({ albumMeta: e, messageFormatter: c }),
                    openGraph: (0, l.i$E)({
                        ogTitle: u,
                        ogDescription: (function (e) {
                            var t, a, s;
                            let { albumMeta: r, messageFormatter: d } = e,
                                c = (0, l.YFq)((0, l.j4K)(r.artists), 96, !1);
                            if (n({ type: r.type, genre: r.genre })) {
                                let { hours: e, minutes: a } = (0, l.VEg)(null != (t = r.durationSec) ? t : 0),
                                    i = d({ id: 'metadata.hours-and-minutes' }, { hours: e, minutes: a });
                                return [c, o({ albumType: r.type, messageFormatter: d }), i].join(' • ');
                            }
                            return r.type === i._.PODCAST
                                ? [
                                      (0, l.YFq)(null != (a = r.description) ? a : '', 96, !1),
                                      o({ albumType: r.type, messageFormatter: d }),
                                      d({ id: 'metadata.subscribers' }, { subscribers: null != (s = r.likesCount) ? s : 0 }),
                                  ].join(' • ')
                                : [c, o({ albumType: r.type, messageFormatter: d }), r.year].join(' • ');
                        })({ albumMeta: e, messageFormatter: c }),
                        fullUrl: null != (s = t.fullUrl) ? s : '',
                        locale: t.locale,
                        ogImage: e.ogImage,
                        siteName: c({ id: 'metadata.yandex-music' }),
                        ogType: 'music.album',
                    }),
                    twitter: (0, l.HRN)({ cardType: l.WfF.APP, title: u, url: t.url, appName: c({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, l.X5i)({
                        additional: { ...t, url: null != (r = t.url) ? r : '', fullUrl: null != (d = t.fullUrl) ? d : '', host: t.host },
                        appName: c({ id: 'metadata.yandex-music' }),
                    }),
                    other: { 'music:musician': (0, l.xdV)(e.artists, t.host) },
                    alternates: (0, l.SEs)('/album/:albumId', t.tld, { params: { albumId: e.id } }),
                };
            }
        },
        42170: (e) => {
            e.exports = {
                root: 'PromoLandingExternalStreamings_root___QUMo',
                title: 'PromoLandingExternalStreamings_title__v6E19',
                list: 'PromoLandingExternalStreamings_list__zNDey',
            };
        },
        45278: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => r });
            var l = a(62936),
                i = a(44020),
                n = a(47480),
                o = a(42561),
                s = a(85906);
            let r = (e) => {
                let { album: t } = e,
                    a = (0, i.useRef)(0),
                    { notify: r } = (0, o.lkh)(),
                    { formatMessage: d } = (0, n.A)();
                (0, i.useMemo)(
                    () => () => {
                        if (!t.isNotFound && (t.isRejected || (!t.meta && !t.isLoading))) {
                            var e;
                            if (!a || a.current > 0) return;
                            let i = (null == (e = t.meta) ? void 0 : e.isPodcast)
                                ? d({ id: 'podcast-errors.error-during-loading-podcast' })
                                : d({ id: 'album-errors.error-during-loading-album' });
                            r((0, l.jsx)(s.hT, { error: i }), { containerId: o.uQT.ERROR }), a.current++;
                        }
                    },
                    [t.isLoading, t.isNotFound, t.isRejected, t.meta, d, r],
                )();
            };
        },
        47095: (e) => {
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
        53075: (e) => {
            e.exports = { popover: 'AlbumDonationMenu_popover__Fswfa' };
        },
        58271: (e, t, a) => {
            'use strict';
            a.d(t, { RelatedContent: () => v });
            var l = a(62936),
                i = a(79950),
                n = a(19718),
                o = a(44020),
                s = a(23480),
                r = a(8669),
                d = a(90914),
                c = a(42561),
                u = a(85906);
            let m = { AUTHORS_BOOKS: 'authors-books', CATEGORY_ALBUMS: 'category-albums', LABELS_ALBUMS: 'labels-albums', SIMILAR_ALBUMS: 'similar-albums' };
            var b = a(16812),
                p = a.n(b);
            let v = (0, n.PA)((e) => {
                var t, a;
                let { isShimmerVisible: n, isShimmerActive: b, className: v, headingVariant: g = 'h2' } = e,
                    { album: j } = (0, c.Pjs)(),
                    A = (0, c.fBs)();
                return (
                    (0, o.useEffect)(() => {
                        A();
                    }, [A]),
                    (0, l.jsx)('div', {
                        className: (0, i.$)(v, p().root),
                        children:
                            null == (a = j.relatedContent) || null == (t = a.items)
                                ? void 0
                                : t.map((e, t) => {
                                      let a = ((e) => {
                                          let t = Object.keys(m).find((t) => m[t] === e);
                                          return r.e8.album[t] || '';
                                      })(e.type);
                                      return (0, l.jsx)(
                                          u.OY,
                                          {
                                              headingVariant: g,
                                              title: e.title,
                                              isShimmerVisible: n,
                                              isShimmerActive: b,
                                              className: (0, i.$)(p().root, v),
                                              containerClassName: p().carousel,
                                              headerClassName: p().header,
                                              ...(a ? (0, r.Am)(a) : {}),
                                              children: e.albums.map((t, a) =>
                                                  (0, l.jsx)(
                                                      c.Bki,
                                                      {
                                                          objectType: s.ky.Podcast,
                                                          objectId: String(t.id),
                                                          objectPosX: a + 1,
                                                          objectPosY: 1,
                                                          objectsCount: e.albums.length,
                                                          children: (0, l.jsx)(d.aX, { album: t, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }),
                                                      },
                                                      t.id,
                                                  ),
                                              ),
                                          },
                                          ''.concat(e.type).concat(t),
                                      );
                                  }),
                    })
                );
            });
        },
        63426: (e, t, a) => {
            'use strict';
            a.d(t, { AlbumPage: () => ex });
            var l = a(62936),
                i = a(19718),
                n = a(69526),
                o = a(44020),
                s = a(23480),
                r = a(8669),
                d = a(60188),
                c = a(52290),
                u = a(23004),
                m = a(90914),
                b = a(92229),
                p = a(25270),
                v = a(42561),
                g = a(85906),
                j = a(92822),
                A = a(30295),
                h = a(45278),
                x = a(33878);
            let k = (0, i.PA)((e) => {
                var t, a, i, n, o, s, r, d, c, u, m, b, p, j;
                let { user: A, album: h } = e;
                return A.isAuthorized
                    ? null
                    : (0, l.jsx)(g.Sj, {
                          value: {
                              '@type': 'MusicAlbum',
                              name: null != (u = null == (t = h.meta) ? void 0 : t.title) ? u : void 0,
                              description: null != (m = h.description) ? m : void 0,
                              url: null != (b = null == (a = h.meta) ? void 0 : a.url) ? b : void 0,
                              image: (null == (i = h.meta) ? void 0 : i.coverUri) ? (0, x.createAvatarUrl)(null == (n = h.meta) ? void 0 : n.coverUri, 'orig') : void 0,
                              genre: null != (p = null == (o = h.meta) ? void 0 : o.genre) ? p : void 0,
                              datePublished: null != (j = null == (r = h.meta) || null == (s = r.year) ? void 0 : s.toString()) ? j : void 0,
                              tracks:
                                  null == (d = h.tracks)
                                      ? void 0
                                      : d
                                            .map((e) => e.data)
                                            .filter((e) => !!(null == e ? void 0 : e.url))
                                            .map((e) => {
                                                var t;
                                                return { '@type': 'MusicRecording', name: e.title, duration: (0, v.FXG)(null != (t = e.durationMs) ? t : 0), url: e.url };
                                            }),
                              potentialAction: {
                                  '@type': 'ListenAction',
                                  expectsAcceptanceOf: {
                                      '@type': 'Offer',
                                      category: 'free',
                                      target: { '@type': 'EntryPoint', actionPlatform: null == (c = h.meta) ? void 0 : c.url },
                                  },
                              },
                          },
                      });
            });
            var C = a(47095),
                y = a.n(C),
                _ = a(79950),
                f = a(47480),
                T = a(81959),
                I = a(46663),
                P = a(22991),
                L = a(35085),
                N = a(6540),
                O = a(66161),
                S = a(71156),
                E = a(10620),
                B = a(22561),
                M = a(59935);
            let R = (0, i.PA)((e) => {
                let { url: t } = e,
                    a = (0, N.cg)(),
                    i = (0, N.CC)(),
                    { ref: n, intersectionPropertyId: o } = (0, v.nMI)({ callback: i, withViewUuid: !0 }),
                    r = (0, v.ZpR)(t),
                    d = (0, M.c)((e) => {
                        a(s.QT.Link, t), r(e);
                    });
                return (0, l.jsx)(N.vK, { onClick: d, ref: n, 'data-intersection-property-id': o });
            });
            var U = a(81628);
            let D = (0, i.PA)((e) => {
                    let { donation: t } = e,
                        a = (0, N.cg)(),
                        i = (0, N.CC)(),
                        n = (0, N.Q$)()(t.url),
                        { ref: o, intersectionPropertyId: r } = (0, v.nMI)({ callback: i, withViewUuid: !0 }),
                        d = (0, v.ZpR)(n),
                        c = (0, v.ZpR)(t.artist.url),
                        u = (0, M.c)((e) => {
                            a(s.QT.ArtistScreen), c(e);
                        }),
                        m = (0, M.c)(() => {
                            a(s.QT.Link, n), d();
                        }),
                        b = (0, U.SA)({ artist: t.artist, callback: u });
                    return (0, l.jsx)(N.Xx, {
                        ref: o,
                        'data-intersection-property-id': r,
                        artist: t.artist,
                        goal: t.goal,
                        onNavigateToArtist: b,
                        onNavigateToDonation: m,
                    });
                }),
                X = (0, i.PA)((e) => {
                    var t, a, i;
                    let { className: n, headerClassName: r, containerClassName: d, headingVariant: c } = e,
                        { formatMessage: u } = (0, f.A)(),
                        { album: m } = (0, v.Pjs)(),
                        b = (0, o.useMemo)(() => {
                            var e, t;
                            return (null == (e = m.donations) ? void 0 : e.isLoading) || !(null == (t = m.donations) ? void 0 : t.items)
                                ? (0, N.kZ)(!0)
                                : m.donations.items.map((e, t) => {
                                      var a, i, n;
                                      return (0, l.jsx)(
                                          v.Bki,
                                          {
                                              objectType: s.ky.Donation,
                                              objectId: e.artist.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: Number(null == (i = m.donations) || null == (a = i.items) ? void 0 : a.length),
                                              mainObjectId: String(null == (n = m.meta) ? void 0 : n.id),
                                              mainObjectType: s.ky.Album,
                                              children: (0, l.jsx)(D, { donation: e }, e.artist.id),
                                          },
                                          e.artist.id,
                                      );
                                  });
                        }, [null == (t = m.donations) ? void 0 : t.isLoading, null == (a = m.donations) ? void 0 : a.items, null == (i = m.meta) ? void 0 : i.id]);
                    return (0, l.jsx)(N.x0, {
                        className: n,
                        headerClassName: r,
                        containerClassName: d,
                        title: u({ id: 'donation.support-text' }),
                        headingVariant: c,
                        children: b,
                    });
                });
            var K = a(85742),
                w = a(64304),
                F = a(33782),
                H = a(11584),
                Y = a(53075),
                V = a.n(Y),
                z = a(13030),
                Q = a(56721),
                $ = a(20418),
                G = a(16460),
                Z = a.n(G);
            let W = (0, i.PA)((e) => {
                    let { donation: t } = e,
                        a = (0, N.Q$)()(t.url),
                        i = (0, v.ZpR)(a),
                        n = (() => {
                            let { hash: e } = (0, H.gf)(),
                                t = (0, v.UlF)(),
                                a = (0, H.st)(),
                                { pageId: l } = (0, v.$au)(),
                                { blockId: i, blockType: n, blockPosX: o, blockPosY: r } = (0, v.N8n)(),
                                { objectType: d, objectId: c, objectPosX: u, objectPosY: m, objectsCount: b, mainObjectId: p, mainObjectType: g } = (0, v.Jfv)();
                            return (0, M.c)(() => {
                                if (!a || !l) return;
                                let j = v.Wft[l];
                                if (!j) return;
                                let A = {
                                        userInteractionType: s.gi.Tap,
                                        hash: e,
                                        pageId: j,
                                        pageStyle: s.QL.ContextMenu,
                                        pagePlacement: s.c4.Hover,
                                        mainObjectType: g,
                                        mainObjectId: p,
                                        objectType: d,
                                        objectId: c,
                                        objectPosX: u,
                                        objectPosY: m,
                                        entityType: n,
                                        entityId: i,
                                        entityPosX: o,
                                        entityPosY: r,
                                        objectsCount: b,
                                        actionType: s.N6.CLICK,
                                    },
                                    h = (0, s.Fx)({ params: A, logger: t, context: 'useSendEventOnDonationMenuItemActionPerformed' });
                                h && (0, s.l6)(a.evgenInstance, h);
                            });
                        })(),
                        o = (0, N.CC)(),
                        { ref: r, intersectionPropertyId: d } = (0, v.nMI)({ callback: o, withViewUuid: !0 }),
                        c = (0, M.c)(() => {
                            n(), i();
                        });
                    return (0, l.jsxs)(
                        w.Dr,
                        {
                            ref: r,
                            'data-intersection-property-id': d,
                            className: Z().root,
                            isBlock: !0,
                            onClick: c,
                            children: [
                                (0, l.jsx)(Q.Paper, {
                                    radius: 'round',
                                    className: Z().cover,
                                    children: (0, l.jsx)(z.Image, { withAvatarReplace: !0, src: t.artist.coverUri, size: 100, fit: 'contain', className: Z().image }),
                                }),
                                (0, l.jsx)($.Caption, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.artist.name }),
                            ],
                        },
                        a,
                    );
                }),
                q = (0, i.PA)(() => {
                    var e;
                    let {
                            settings: { isMobile: t },
                            album: { donations: a, meta: i },
                        } = (0, v.Pjs)(),
                        { formatMessage: n } = (0, f.A)(),
                        r = (() => {
                            let e = (0, H.st)(),
                                t = (0, v.UlF)(),
                                { hash: a } = (0, H.gf)(),
                                { pageId: l } = (0, v.$au)(),
                                { mainObjectId: i, mainObjectType: n } = (0, v.Jfv)();
                            return (0, M.c)((o) => {
                                if (!e || !l || !v.Wft[l]) return;
                                let r = { pageStyle: s.QL.ContextMenu, pagePlacement: s.c4.Hover, mainObjectType: n, mainObjectId: i, hash: a, pageId: l };
                                o && (r.viewUuid = String((0, F.A)()));
                                let d = (0, s.Fx)({ params: r, logger: t, context: 'useSendEventOnDonationMenuOpenedOrClosed' });
                                d && (o ? (0, s.Fn)(null == e ? void 0 : e.evgenInstance, d) : (0, s.Ig)(null == e ? void 0 : e.evgenInstance, d));
                            });
                        })(),
                        [d, c] = (0, o.useState)(!1),
                        u = (0, o.useRef)(!1);
                    return (
                        (0, o.useEffect)(() => {
                            d && (u.current = !0);
                        }, [d]),
                        (0, o.useEffect)(() => {
                            u.current && r(d);
                        }, [d, r]),
                        (0, l.jsx)(w.W1, {
                            ariaLabel: n({ id: 'donation.button-text' }),
                            size: 's',
                            variant: 'default',
                            radius: 'round',
                            color: 'secondary',
                            icon: (0, l.jsx)(K.Icon, { size: 'xxs', variant: 'ruble' }),
                            onOpenChange: c,
                            open: d,
                            isMobile: t,
                            placement: 'bottom',
                            offsetOptions: 8,
                            listClassName: V().popover,
                            children:
                                null == a || null == (e = a.items)
                                    ? void 0
                                    : e.map((e, t) => {
                                          var n;
                                          return (0, l.jsx)(
                                              v.Bki,
                                              {
                                                  objectType: s.ky.Donation,
                                                  objectId: e.artist.id,
                                                  objectPosX: 1,
                                                  objectPosY: t + 1,
                                                  objectsCount: Number(null == (n = a.items) ? void 0 : n.length),
                                                  mainObjectId: String(null == i ? void 0 : i.id),
                                                  mainObjectType: s.ky.Album,
                                                  children: (0, l.jsx)(W, { donation: e }),
                                              },
                                              e.artist.id,
                                          );
                                      }),
                        })
                    );
                });
            var J = a(9310);
            let ee = (e) => {
                    let { url: t, name: a } = e,
                        i = (0, v.NKK)(),
                        { ref: n, intersectionPropertyId: o } = (0, v.nMI)(),
                        d = (0, M.c)(() => {
                            i({ to: s.QT.LabelScreen, deepLink: t });
                        });
                    return (0, l.jsx)('span', {
                        ref: n,
                        'data-intersection-property-id': o,
                        className: y().labelLinkContainer,
                        children: (0, l.jsx)(g.N_, {
                            role: 'link',
                            'aria-label': a,
                            href: t,
                            className: (0, _.$)(y().labelLink, y().important),
                            onClick: d,
                            ...(0, r.Am)(r.Xk.album.ALBUM_LABEL_LINK),
                            children: (0, l.jsx)($.Caption, { variant: 'span', children: a }),
                        }),
                    });
                },
                et = (0, i.PA)((e) => {
                    var t, a, i;
                    let { album: n, size: r, weight: d, className: c } = e,
                        { formatMessage: u } = (0, f.A)(),
                        m = (0, v.fBs)();
                    (0, o.useEffect)(() => {
                        m();
                    }, [m]);
                    let b = null == (t = n.labels) ? void 0 : t.length,
                        p = u((null == (a = n.meta) ? void 0 : a.isPodcast) ? { id: 'page.album-publisher-title' } : { id: 'page.album-label-title' }, { count: b });
                    return (0, l.jsxs)('div', {
                        className: (0, _.$)(y().label, c),
                        children: [
                            (0, l.jsx)($.Caption, { variant: 'span', size: r, weight: d, children: p }),
                            '\xa0',
                            (0, l.jsx)($.Caption, {
                                variant: 'span',
                                size: r,
                                weight: d,
                                lineClamp: 1,
                                children:
                                    null == (i = n.labels)
                                        ? void 0
                                        : i.map((e, t) => {
                                              var a, i;
                                              let { id: o, name: r } = e;
                                              return (0, l.jsx)(
                                                  v.Bki,
                                                  {
                                                      objectType: s.ky.Link,
                                                      objectId: n.labelUrl(o),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: null == (a = n.labels) ? void 0 : a.length,
                                                      mainObjectType: s.ky.Link,
                                                      mainObjectId: String(null == (i = n.meta) ? void 0 : i.id),
                                                      children: (0, l.jsx)(ee, { url: n.labelUrl(o), name: r }),
                                                  },
                                                  o,
                                              );
                                          }),
                            }),
                        ],
                    });
                });
            var ea = a(26731),
                el = a(50502),
                ei = a(7862),
                en = a(41094),
                eo = a(43026),
                es = a(75006);
            let er = (0, i.PA)((e) => {
                var t;
                let { albumId: a, albumTitle: i, albumCoverUri: n } = e,
                    {
                        user: s,
                        experiments: d,
                        album: c,
                        sonataState: { entityMeta: u },
                    } = (0, v.Pjs)(),
                    m = (0, v.eGp)(),
                    b = d.checkExperiment(v.zal.WebNextInsertAlbumPlaylistIntoContext, 'on'),
                    p = d.checkExperiment(v.zal.WebNextUseWaveQueue, 'on'),
                    j = null == m ? void 0 : m.state.currentContext.value,
                    A = !!(!b || (0, el.S)(j) || ((0, ei.i)(j) && !p)),
                    h = (0, es._)(null == (t = c.meta) ? void 0 : t.id),
                    x = (0, o.useMemo)(() => (0, v.tW0)({ contextType: T.K.Album, contextId: String(a) }), [a]),
                    k = (0, en.m4)(c.tracks, eo.NM.NEXT, x, { entityVariant: g.cp.ALBUM, entityTitle: i, coverUri: n }, h),
                    C = (0, en.m4)(c.tracks, eo.NM.LAST, x, { entityVariant: g.cp.ALBUM, entityTitle: i, coverUri: n }, h);
                return u && !A
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(w.Dr, {
                                  onClick: k,
                                  icon: (0, l.jsx)(K.Icon, { variant: 'playNext', size: 'xxs' }),
                                  disabled: !s.isAuthorized,
                                  ...(0, r.Am)(r.Kq.album.ALBUM_CONTEXT_MENU_PLAY_NEXT_BUTTON),
                                  children: (0, l.jsx)(ea.A, { id: 'play-queue.play-next' }),
                              }),
                              (0, l.jsx)(w.Dr, {
                                  onClick: C,
                                  icon: (0, l.jsx)(K.Icon, { variant: 'playLast', size: 'xxs' }),
                                  disabled: !s.isAuthorized,
                                  ...(0, r.Am)(r.Kq.album.ALBUM_CONTEXT_MENU_PLAY_LAST_BUTTON),
                                  children: (0, l.jsx)(ea.A, { id: 'play-queue.play-last' }),
                              }),
                          ],
                      })
                    : null;
            });
            var ed = a(33432),
                ec = a.n(ed);
            let eu = (0, i.PA)(() => {
                var e, t, a, i, n, c, u, b;
                let j = (0, o.useRef)(null),
                    A = (0, o.useRef)(0),
                    h = (0, v.wZZ)(),
                    { notify: x } = (0, v.lkh)(),
                    k = (0, N.Q$)(),
                    {
                        album: C,
                        albumCPA: M,
                        experiments: U,
                        sonataState: D,
                        settings: { isMobile: K },
                        track: { isTrackPage: w },
                    } = (0, v.Pjs)(),
                    { from: F, utmLink: H } = (0, v.fyy)({ pageId: v._Q$.ALBUM, blockId: v.UfI.ALBUM, contextType: T.K.Album, contextId: C.id }),
                    { formatMessage: Y } = (0, f.A)(),
                    [V, z] = (0, o.useState)(!1),
                    Q = (0, E.c)({ album: C }),
                    $ = w ? 'div' : 'h2',
                    G = C.items.length || S.k,
                    { isCPAEnabled: Z } = (0, v.IQF)(),
                    W = !Z || (Z && !M.cpa),
                    ee = U.checkExperiment(v.zal.WebNextAlbumDonationButton, 'on') && C.hasDonations,
                    ea = ee && K,
                    { showBuySubscriptionModal: el } = (0, v.qBP)(),
                    ei = M.isPlusCPAPlayerBarEnabled(C.id, null == (e = C.meta) ? void 0 : e.isNonMusic) && K;
                (0, o.useEffect)(
                    () => () => {
                        A.current = 0;
                    },
                    [C],
                ),
                    (0, o.useEffect)(() => {
                        ei && D.status === I.MT.ENDED && el();
                    }, [D.status, el, ei]),
                    (0, o.useEffect)(() => {
                        var e, t;
                        if ((null == (e = C.otherArtistAlbums) ? void 0 : e.isRejected) || (null == (t = C.latestGenreAlbums) ? void 0 : t.isRejected)) {
                            if (!A || A.current > 0) return;
                            x((0, l.jsx)(g.hT, { error: Y({ id: 'album-errors.error-during-loading-similar-albums' }) }), { containerId: v.uQT.ERROR }), A.current++;
                        }
                    }, [null == (t = C.latestGenreAlbums) ? void 0 : t.isRejected, null == (a = C.otherArtistAlbums) ? void 0 : a.isRejected, Y, x]),
                    (0, o.useEffect)(() => {
                        C.isResolved && C.hasOtherAlbumVersions && z(!0);
                    }, [C.hasOtherAlbumVersions, C.isResolved]);
                let en = (0, o.useCallback)(() => {
                        let e = j.current;
                        null == e || e.scrollIntoView({ behavior: 'smooth' });
                    }, []),
                    eo = (0, d.L)(() => {
                        var e, t, a, i, n;
                        if (!ee || !(null == (e = C.donations) ? void 0 : e.items)) return;
                        if (Number(null == (a = C.meta) || null == (t = a.artists) ? void 0 : t.length) > 1)
                            return (0, l.jsx)(v.FoH, {
                                blockType: s.LA.Donations,
                                blockId: v.UfI.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                children: (0, l.jsx)(v.Bki, {
                                    mainObjectId: String(null == (n = C.meta) ? void 0 : n.id),
                                    mainObjectType: s.ky.Album,
                                    children: (0, l.jsx)(q, {}),
                                }),
                            });
                        let [o] = C.donations.items;
                        if (o)
                            return (0, l.jsx)(v.FoH, {
                                blockType: s.LA.Donations,
                                blockId: v.UfI.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                children: (0, l.jsx)(v.Bki, {
                                    objectType: s.ky.Donation,
                                    objectId: o.artist.id,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: 1,
                                    mainObjectId: String(null == (i = C.meta) ? void 0 : i.id),
                                    mainObjectType: s.ky.Album,
                                    children: (0, l.jsx)(R, { url: k(o.url) }),
                                }),
                            });
                    }),
                    es = (0, o.useMemo)(
                        () =>
                            C.isLoading || !C.meta || C.isRejected
                                ? (0, l.jsx)(L.c6, { className: y().header, isActive: !0 })
                                : (0, l.jsx)(L.c0, {
                                      album: C.meta,
                                      donationButton: eo,
                                      className: y().header,
                                      onVersionClick: V ? en : void 0,
                                      contextMenuChildren: (0, l.jsx)(er, { albumId: C.meta.id, albumTitle: C.meta.title, albumCoverUri: C.meta.coverUri }),
                                  }),
                        [C.isLoading, C.meta, C.isRejected, eo, V, en],
                    ),
                    ed = (0, B.j)({
                        element: (e, t) => {
                            var a;
                            if (e.data && e.type !== p.rU.TEXT)
                                return (0, l.jsx)(v.Bki, {
                                    objectType: s.ky.Track,
                                    objectId: String(e.data.id),
                                    objectPosX: 1,
                                    objectPosY: t + 1,
                                    objectsCount: G,
                                    children: (0, l.jsx)(O.FR, {
                                        withLightning: e.isBest && !e.data.isRemoved,
                                        track: e.data,
                                        position: e.position,
                                        albumArtists: null == C || null == (a = C.meta) ? void 0 : a.artists,
                                        playContextParams: h(t, {
                                            contextData: { type: T.K.Album, meta: C.contextMeta, from: F, utmLink: H },
                                            queueParams: { index: e.positionInContext, entityId: e.data.id },
                                            loadContextMeta: !0,
                                            entitiesData: D.unloadedEntitiesDataFromModels,
                                        }),
                                    }),
                                });
                        },
                        album: C,
                    }),
                    eu = (0, d.L)(() => {
                        var e, t, a, i, n, o, d, c, u, b, p, g;
                        let A = [],
                            h = 4;
                        return (
                            ea &&
                                (null == (e = C.donations) ? void 0 : e.items) &&
                                (A.push(
                                    (0, l.jsx)(
                                        v.FoH,
                                        {
                                            blockType: s.LA.Donations,
                                            blockId: v.UfI.DONATY,
                                            blockPosX: 1,
                                            blockPosY: h,
                                            children: (0, l.jsx)(X, {
                                                headingVariant: $,
                                                className: ec().carouselContainer,
                                                headerClassName: (0, _.$)(ec().carouselBlock, ec().carouselBlockHeader),
                                                containerClassName: ec().carouselBlock,
                                            }),
                                        },
                                        s.LA.Donations,
                                    ),
                                ),
                                h++),
                            C.hasSimilarEntities &&
                                (A.push(
                                    (0, l.jsx)(
                                        v.FoH,
                                        {
                                            blockType: s.LA.SimilarEntities,
                                            blockId: s.LA.SimilarEntities,
                                            blockPosX: 1,
                                            blockPosY: h,
                                            objectsCount: null == (a = C.similarEntities.data) ? void 0 : a.items.length,
                                            mainObjectId: String(null == (i = C.meta) ? void 0 : i.id),
                                            mainObjectType: s.ky.Album,
                                            children: (0, l.jsx)(P.Qh, {
                                                ...C.similarEntities,
                                                meta: { title: Y({ id: 'page.similar-entities-block-title' }) },
                                                headingVariant: $,
                                                className: ec().carouselContainer,
                                                headerClassName: (0, _.$)(ec().carouselBlock, ec().carouselBlockHeader),
                                                containerClassName: ec().carouselBlock,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                setHasSentAnalyticsOnLoaded: C.similarEntities.setHasSentAnalyticsOnLoaded,
                                            }),
                                        },
                                        s.LA.SimilarEntities,
                                    ),
                                ),
                                h++),
                            C.hasOtherAlbumVersions &&
                                (null == (t = C.otherAlbumVersions) ? void 0 : t.length) &&
                                (A.push(
                                    (0, l.jsx)(
                                        v.FoH,
                                        {
                                            blockType: s.LA.OtherAlbumVersions,
                                            blockId: s.LA.OtherAlbumVersions,
                                            blockPosX: 1,
                                            blockPosY: h,
                                            objectsCount: null == (n = C.otherAlbumVersions) ? void 0 : n.length,
                                            mainObjectId: String(null == (o = C.meta) ? void 0 : o.id),
                                            mainObjectType: s.ky.Album,
                                            children: (0, l.jsx)(m.pZ, {
                                                isShimmerVisible: C.isLoading,
                                                isShimmerActive: !0,
                                                className: ec().carouselContainer,
                                                headerClassName: (0, _.$)(ec().carouselBlock, ec().carouselBlockHeader),
                                                containerClassName: ec().carouselBlock,
                                                title: Y({ id: 'entity-names.other-album-versions' }),
                                                albums: C.otherAlbumVersions,
                                                headingRef: j,
                                                headingVariant: $,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                ...(0, r.Am)(r.Xk.album.OTHER_VERSIONS_CAROUSEL),
                                            }),
                                        },
                                        s.LA.OtherAlbumVersions,
                                    ),
                                ),
                                h++),
                            C.hasLatestGenreAlbums &&
                                W &&
                                (A.push(
                                    (0, l.jsx)(
                                        v.FoH,
                                        {
                                            blockType: s.LA.GenreAlbums,
                                            blockId: s.LA.GenreAlbums,
                                            blockPosX: 1,
                                            blockPosY: h,
                                            objectsCount: null == (d = C.latestGenreAlbums) ? void 0 : d.items.length,
                                            mainObjectId: String(null == (c = C.meta) ? void 0 : c.id),
                                            mainObjectType: s.ky.Album,
                                            children: (0, l.jsx)(m.pZ, {
                                                isShimmerVisible: C.isLatestGenreAlbumsLoading,
                                                isShimmerActive: !0,
                                                className: ec().carouselContainer,
                                                headerClassName: (0, _.$)(ec().carouselBlock, ec().carouselBlockHeader),
                                                containerClassName: ec().carouselBlock,
                                                title: Y({ id: 'entity-names.new-albums-in-genre' }),
                                                albums: null == (u = C.latestGenreAlbums) ? void 0 : u.items,
                                                headingVariant: $,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                ...(0, r.Am)(r.Xk.album.GENRE_ALBUMS_CAROUSEL),
                                            }),
                                        },
                                        s.LA.GenreAlbums,
                                    ),
                                ),
                                h++),
                            C.hasOtherArtistAlbums &&
                                (A.push(
                                    (0, l.jsx)(
                                        v.FoH,
                                        {
                                            blockType: s.LA.OtherAlbums,
                                            blockId: s.LA.OtherAlbums,
                                            blockPosX: 1,
                                            blockPosY: h,
                                            objectsCount: null == (b = C.otherArtistAlbums) ? void 0 : b.items.length,
                                            mainObjectId: String(null == (p = C.meta) ? void 0 : p.id),
                                            mainObjectType: s.ky.Album,
                                            children: (0, l.jsx)(m.pZ, {
                                                isShimmerVisible: C.isOtherArtistAlbumsLoading,
                                                isShimmerActive: !0,
                                                className: ec().carouselContainer,
                                                headerClassName: (0, _.$)(ec().carouselBlock, ec().carouselBlockHeader),
                                                containerClassName: ec().carouselBlock,
                                                title: Y({ id: 'entity-names.other-albums-of-artist' }),
                                                albums: null == (g = C.otherArtistAlbums) ? void 0 : g.items,
                                                headingVariant: $,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                ...(0, r.Am)(r.Xk.album.OTHER_ARTIST_ALBUMS_CAROUSEL),
                                            }),
                                        },
                                        s.LA.OtherAlbums,
                                    ),
                                ),
                                h++),
                            A
                        );
                    });
                return (
                    C.id && C.isResolved && C.similarEntities.isNeededToLoad && C.isSimilarEntitiesEnabled && (0, o.use)(C.getSimilarEntities({ albumId: C.id })),
                    (0, l.jsxs)(v.hjC, {
                        tabId: '',
                        tabPos: 0,
                        isTabSelectedByDefault: !1,
                        children: [
                            (0, l.jsx)(v.FoH, {
                                blockType: s.LA.Header,
                                blockId: s.LA.Header,
                                blockPosX: 1,
                                blockPosY: 1,
                                mainObjectId: String(null == (i = C.meta) ? void 0 : i.id),
                                mainObjectType: s.ky.Album,
                                objectsCount: 1,
                                children: es,
                            }),
                            (0, l.jsx)(v.FoH, {
                                blockType: s.LA.Tracks,
                                blockId: s.LA.Tracks,
                                blockPosX: 1,
                                blockPosY: 2,
                                objectsCount: G,
                                mainObjectId: String(null == (n = C.meta) ? void 0 : n.id),
                                mainObjectType: s.ky.Album,
                                children: (0, l.jsx)(J.F, {
                                    count: G,
                                    itemContentCallback: ed,
                                    getDataByRange: Q,
                                    ariaLabel: Y({ id: 'entity-names.albums-tracks-list' }, { albumName: (null == (c = C.meta) ? void 0 : c.title) || '' }),
                                }),
                            }),
                            (0, l.jsxs)('div', {
                                className: y().footerContainer,
                                children: [
                                    C.hasLabel &&
                                        (0, l.jsx)(v.FoH, {
                                            blockType: s.LA.Labels,
                                            blockId: s.LA.Labels,
                                            blockPosX: 1,
                                            blockPosY: 3,
                                            objectsCount: null == (u = C.labels) ? void 0 : u.length,
                                            mainObjectId: String(null == (b = C.meta) ? void 0 : b.id),
                                            mainObjectType: s.ky.Album,
                                            children: (0, l.jsx)(et, { album: C, size: 's', weight: 'normal', className: ec().label }),
                                        }),
                                    (0, l.jsxs)('div', { className: ec().carouselBlocks, children: [eu, ' '] }),
                                    (0, l.jsx)(g.A, { children: (0, l.jsx)(g.wi, { className: y().footer }) }),
                                ],
                            }),
                        ],
                    })
                );
            });
            var em = a(5099),
                eb = a(85023),
                ep = a(65822),
                ev = a(14462),
                eg = a(96918),
                ej = a.n(eg);
            let eA = (0, i.PA)(() => {
                    var e, t, a, i, r, c, u, m, b, j, A, h, k, C, _, I, P;
                    let N = (0, o.useRef)(0),
                        M = (0, o.useRef)(null),
                        R = (0, v.wZZ)(),
                        { album: U, experiments: D, sonataState: X, slides: K } = (0, v.Pjs)(),
                        w = (null == (e = U.meta) ? void 0 : e.isAudiobook) ? v._Q$.AUDIOBOOK : v._Q$.PODCAST,
                        F = (null == (t = U.meta) ? void 0 : t.isAudiobook) ? v.UfI.AUDIOBOOK : v.UfI.PODCAST,
                        { from: H, utmLink: Y } = (0, v.fyy)({ pageId: w, blockId: F, contextType: T.K.Album, contextId: U.id }),
                        { href: V } = (0, v.uvd)('/slides/podcast/:podcastId', { params: { podcastId: null != (P = U.id) ? P : '' } }),
                        z = (0, v.ZpR)(V),
                        Q = (0, o.useId)(),
                        { formatMessage: G } = (0, f.A)(),
                        Z = (0, n.useSearchParams)(),
                        W = (0, v.XJ9)(),
                        q = D.checkExperiment(v.zal.WebNextRewind2024, 'on') && (null == (a = U.meta) ? void 0 : a.isPodcast),
                        ee = (0, o.useMemo)(() => {
                            let e = Z.get(v.K3F.ACTIVE_TAB),
                                t = S.n.findIndex((t) => t === e);
                            return t >= 0 ? t : 0;
                        }, [Z]),
                        el = (0, eb.useTabsState)(ee),
                        [ei, en] = (0, o.useState)(S.n[el.value]),
                        eo = (0, E.c)({ album: U });
                    (0, o.useEffect)(
                        () => () => {
                            (N.current = 0), K.resetPodcast();
                        },
                        [U, K],
                    );
                    let es = (0, o.useMemo)(() => {
                            var e, t;
                            let a = q && K.podcastSlidesLoadingState === v.GuX.RESOLVE && !!(null == (e = K.podcastItems) ? void 0 : e.length),
                                i = { '--action-button-color-background': (0, L.Wm)(null == (t = U.meta) ? void 0 : t.averageColor) };
                            return a
                                ? (0, l.jsx)(em.$, {
                                      className: ej().rewindControl,
                                      style: i,
                                      withRipple: !1,
                                      withHover: !1,
                                      radius: 'xxxl',
                                      size: 's',
                                      color: 'primary',
                                      onClick: z,
                                      variant: 'default',
                                      role: 'link',
                                      children: (0, l.jsx)($.Caption, { variant: 'span', lineClamp: 1, children: (0, l.jsx)(ea.A, { id: 'rewind.button-title' }) }),
                                  })
                                : null;
                        }, [null == (i = U.meta) ? void 0 : i.averageColor, q, z, null == (r = K.podcastItems) ? void 0 : r.length, K.podcastSlidesLoadingState]),
                        ed = (0, o.useMemo)(() => {
                            var e, t;
                            return (null == (e = U.meta) ? void 0 : e.isFairyTale)
                                ? { about: G({ id: 'non-music.fairytale-tab-about' }), 'track-list': G({ id: 'non-music.audiobook-tab-tracks' }) }
                                : (null == (t = U.meta) ? void 0 : t.isAudiobook)
                                  ? { about: G({ id: 'non-music.audiobook-tab-about' }), 'track-list': G({ id: 'non-music.audiobook-tab-tracks' }) }
                                  : { about: G({ id: 'podcast.tab-about' }), 'track-list': G({ id: 'podcast.tab-tracks' }, { value: U.tracks.length }) };
                        }, [null == (c = U.meta) ? void 0 : c.isAudiobook, null == (u = U.meta) ? void 0 : u.isFairyTale, U.tracks.length, G]),
                        ec = (0, o.useMemo)(
                            () => (e) => {
                                var t;
                                if (!el.onTabChange || e === el.value) return;
                                el.onTabChange(e);
                                let a = null != (t = S.n[e]) ? t : ev.O.ABOUT;
                                en(a);
                                let l = (0, v.bJ)(v.K3F.ACTIVE_TAB, a);
                                l && W(l);
                            },
                            [el, W],
                        ),
                        eu = (e, t) =>
                            (0, l.jsxs)('div', {
                                className: ej().infoBlock,
                                children: [
                                    (0, l.jsx)($.Caption, { variant: 'span', type: 'entity', size: 'm', className: ej().infoTitle, children: e }),
                                    (0, l.jsx)($.Caption, { variant: 'span', type: 'entity', size: 'm', children: t }),
                                ],
                            }),
                        eg = ((e) => {
                            let { formatMessage: t } = (0, f.A)(),
                                { minutes: a, hours: l } = (0, v.VEg)(e),
                                i = '';
                            return (
                                l > 0 && (i += t({ id: 'time.hours' }, { hours: l })),
                                a > 0 && ((i += i.length > 0 ? ' ' : ''), (i += t({ id: 'time.minutes-left' }, { minutes: a }))),
                                i
                            );
                        })((null == (m = U.meta) ? void 0 : m.durationSec) || 0),
                        eA = (0, o.useMemo)(() => {
                            var e, t, a, i, n, o, s, r, d, c, u, m, b, p, v;
                            let g = Number(null == (e = U.labels) ? void 0 : e.length) > 1 ? G({ id: 'podcast.publishers-title' }) : G({ id: 'podcast.publisher-title' }),
                                j = null == (t = U.labels) ? void 0 : t.map((e) => e.name).join(', '),
                                A = G({ id: 'podcast.age-limit' }),
                                h =
                                    Number(null == (i = U.meta) || null == (a = i.artists) ? void 0 : a.length) > 1
                                        ? G({ id: 'non-music.audiobook-artists' })
                                        : G({ id: 'non-music.audiobook-artist' }),
                                k = null == (o = U.meta) || null == (n = o.artists) ? void 0 : n.map((e) => e.name).join(', '),
                                C =
                                    (null == (r = U.meta) || null == (s = r.artists) ? void 0 : s.length) ||
                                    (null == (d = U.meta) ? void 0 : d.durationSec) ||
                                    (null == (c = U.labels) ? void 0 : c.length) ||
                                    U.isExplicit,
                                _ = k && eu(''.concat(h, ':'), String(k)),
                                f = (null == (u = U.meta) ? void 0 : u.durationSec) && eu(''.concat(G({ id: 'time.duration' }), ':'), eg),
                                T = j && eu(''.concat(g, ':'), String(j)),
                                I = eu(''.concat(A, ':'), '18+'),
                                P = U.hasLabel ? (0, l.jsx)(et, { album: U, size: 'm', weight: 'medium', className: ej().label }) : T;
                            return (0, l.jsx)(eb.TabPanel, {
                                name: 0,
                                value: el.value,
                                elementId: Q,
                                children: (0, l.jsxs)('div', {
                                    className: ej().contentAbout,
                                    children: [
                                        U.description &&
                                            !!(null == (m = U.description) ? void 0 : m.length) &&
                                            (0, l.jsx)($.Caption, {
                                                variant: 'div',
                                                type: 'entity',
                                                size: 'm',
                                                className: y().text,
                                                children: (0, l.jsx)('span', { dangerouslySetInnerHTML: { __html: (0, x.sanitizeDOM)(U.description) } }),
                                            }),
                                        C &&
                                            (0, l.jsxs)('div', {
                                                className: y().text,
                                                children: [
                                                    !!(null == (p = U.meta) || null == (b = p.artists) ? void 0 : b.length) && _,
                                                    (null == (v = U.meta) ? void 0 : v.durationSec) && f,
                                                    P,
                                                    U.isExplicit && I,
                                                ],
                                            }),
                                    ],
                                }),
                            });
                        }, [U, G, eg, el.value, Q]),
                        eh = (0, d.L)(() =>
                            U.isLoading || !U.meta || U.isRejected
                                ? (0, l.jsx)(L.c6, { className: y().header, isActive: !0 })
                                : (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(L.hW, {
                                              album: U.meta,
                                              actionButton: es,
                                              className: y().header,
                                              contextMenuChildren: (0, l.jsx)(er, { albumId: U.meta.id, albumTitle: U.meta.title, albumCoverUri: U.meta.coverUri }),
                                          }),
                                          (0, l.jsx)(g.wI, {
                                              className: ej().tabCarousel,
                                              ...el,
                                              onTabChange: ec,
                                              ref: M,
                                              children: S.n.map((e, t) => (0, l.jsx)(g.oz, { className: ej().tab, title: ed[e], value: t }, e)),
                                          }),
                                          eA,
                                      ],
                                  }),
                        );
                    (0, o.useEffect)(() => {
                        U.isResolved && (U.loadLastEpisodes(), U.getRelatedContent());
                    }, [U, U.isResolved, U.loadLastEpisodes, U.getRelatedContent]);
                    let ex = ei === ev.O.ABOUT && (null == (b = U.meta) ? void 0 : b.isPodcast) && U.lastEpisodes.length > 0,
                        ek = ei === ev.O.ABOUT && U.relatedContent && U.relatedContent.items && U.relatedContent.items.length > 0,
                        eC = (0, B.j)({
                            element: (e, t) => {
                                if (e.data && e.type !== p.rU.TEXT)
                                    return (0, l.jsx)(v.Bki, {
                                        objectType: s.ky.Track,
                                        objectId: String(e.data.id),
                                        objectPosX: 1,
                                        objectPosY: t + 1,
                                        objectsCount: U.items.length,
                                        children: (0, l.jsx)(O.Kd, {
                                            track: e.data,
                                            viewType: O.Df.ALBUM,
                                            position: e.position,
                                            playContextParams: R(t, {
                                                contextData: { type: T.K.Album, meta: U.contextMeta, from: H, utmLink: Y },
                                                queueParams: { index: e.positionInContext, entityId: e.data.id },
                                                loadContextMeta: !0,
                                                entitiesData: X.unloadedEntitiesDataFromModels,
                                            }),
                                        }),
                                    });
                            },
                            isNonMusic: !0,
                            album: U,
                        }),
                        ey = ei === ev.O.ABOUT ? 0 : U.items.length || S.k,
                        e_ = (0, d.L)(() => {
                            if (ei === ev.O.TRACKS) {
                                var e, t, a;
                                return (null == (e = U.meta) ? void 0 : e.isAudiobook)
                                    ? G({ id: 'non-music.audiobook-list' }, { albumName: (null == (a = U.meta) ? void 0 : a.title) || '' })
                                    : G({ id: 'podcast.episodes-list' }, { albumName: (null == (t = U.meta) ? void 0 : t.title) || '' });
                            }
                        }),
                        ef = (0, d.L)(() => {
                            var e;
                            return ei !== ev.O.TRACKS
                                ? null
                                : (0, l.jsx)(v.FoH, {
                                      blockType: s.LA.Episodes,
                                      blockId: s.LA.Episodes,
                                      blockPosX: 1,
                                      blockPosY: 2,
                                      objectsCount: ey,
                                      mainObjectId: String(null == (e = U.meta) ? void 0 : e.id),
                                      mainObjectType: s.ky.Album,
                                      children: (0, l.jsx)(J.F, { count: ey, getDataByRange: eo, itemContentCallback: eC, role: 'tabpanel', ariaLabel: e_ }),
                                  });
                        }),
                        eT = q && K.podcastSlidesLoadingState === v.GuX.IDLE;
                    return (
                        'number' == typeof U.id && eT && (0, o.use)(K.getPodcastSlides({ podcastId: U.id })),
                        (0, l.jsxs)(v.hjC, {
                            tabId: null != ei ? ei : ev.O.ABOUT,
                            tabPos: el.value + 1,
                            isTabSelectedByDefault: !1,
                            children: [
                                (0, l.jsx)(v.FoH, {
                                    blockType: s.LA.Header,
                                    blockId: s.LA.Header,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    mainObjectId: String(null == (j = U.meta) ? void 0 : j.id),
                                    mainObjectType: s.ky.Podcast,
                                    objectsCount: 1,
                                    children: eh,
                                }),
                                ef,
                                (0, l.jsxs)('div', {
                                    className: y().footerContainer,
                                    children: [
                                        ex &&
                                            (0, l.jsx)(v.FoH, {
                                                blockType: s.LA.LatestEpisodes,
                                                blockId: s.LA.LatestEpisodes,
                                                blockPosX: 1,
                                                blockPosY: 2,
                                                objectsCount: U.lastEpisodes.length,
                                                mainObjectId: String(null == (A = U.meta) ? void 0 : A.id),
                                                mainObjectType: null == (h = U.meta) ? void 0 : h.mainObjectType,
                                                children: (0, l.jsx)(ep.ro, { className: ej().lastEpisodes }),
                                            }),
                                        ek &&
                                            (0, l.jsx)(v.FoH, {
                                                blockType: s.LA.Podcasts,
                                                blockId: s.LA.Podcasts,
                                                blockPosX: 1,
                                                blockPosY: 3,
                                                objectsCount: null == (C = U.relatedContent) || null == (k = C.items) ? void 0 : k.length,
                                                mainObjectId: String(null == (_ = U.meta) ? void 0 : _.id),
                                                mainObjectType: null == (I = U.meta) ? void 0 : I.mainObjectType,
                                                children: (0, l.jsx)(ep.ZM, { isShimmerVisible: U.isRelatedContentLoading, isShimmerActive: !0 }),
                                            }),
                                        (0, l.jsx)(g.A, { children: (0, l.jsx)(g.wi, { className: y().footer }) }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                eh = (0, i.PA)((e) => {
                    var t, a, i, x, C, _, f, T, I, P, L, N;
                    let { albumId: O, trackId: S, preloadedAlbum: E, preloadedCpa: B, preloadedTrack: M } = e,
                        { contentScrollRef: R, setContentScrollRef: U } = (0, v.gKY)(),
                        D = (0, n.useSearchParams)(),
                        X = (0, m.yb)({ searchParams: Object.fromEntries(D.entries()) }),
                        { user: K, album: w, disclaimerModalState: F, track: H, sonataState: Y, albumCPA: V } = (0, v.Pjs)(),
                        { checkIsValidClid: z, setClidToQuery: Q, deleteClidFromQuery: $ } = (0, v.IQF)(),
                        G = (0, v.ytd)(null == (t = w.meta) ? void 0 : t.averageColor),
                        { headerStyle: Z } = (0, b.QZ)(G),
                        W = (0, v.l$t)({ mainObjectType: null != (P = null == (a = w.meta) ? void 0 : a.mainObjectType) ? P : s.ky.Album }),
                        { deprecationUrl: q, shouldRedirect: J } = (0, j.W)({
                            albumId: O,
                            deprecationTargetAlbumId: w.deprecationTargetAlbumId,
                            trackId: S,
                            realId: (null == (i = H.meta) ? void 0 : i.id) === S ? (null == (x = H.meta) ? void 0 : x.realId) : void 0,
                            searchParams: D,
                        }),
                        ee = (0, p.cp)({ album: w.meta, shouldHistoryBack: !0 }),
                        et = !!(null == (C = w.meta) ? void 0 : C.isNonMusic),
                        ea = !!(S && (0, v.J75)(M));
                    (0, v.ACS)(),
                        ((e) => {
                            var t;
                            let { albumId: a, trackId: l, isNonMusic: i } = e,
                                { setDeeplink: n } = null != (t = (0, v.P7Q)()) ? t : {};
                            (0, o.useEffect)(() => {
                                if (l) {
                                    let e = i ? void 0 : { playTrack: l, openPlayer: !0, lyricsMode: !0 },
                                        { href: t } = (0, v.uvd)('/album/:albumId/track/:trackId', { params: { albumId: a, trackId: l }, query: e });
                                    null == n || n(t);
                                } else {
                                    let { href: e } = (0, v.uvd)('/album/:albumId', { params: { albumId: a } });
                                    null == n || n(e);
                                }
                                return () => {
                                    null == n || n(null);
                                };
                            }, [a, i, n, l]);
                        })({ albumId: O, trackId: S, isNonMusic: et }),
                        (0, o.useEffect)(() => {
                            var e;
                            (null == (e = w.meta) ? void 0 : e.isUnsafeLegal) && ee();
                        }, [null == (_ = w.meta) ? void 0 : _.isUnsafeLegal, ee]),
                        (0, o.useLayoutEffect)(
                            () => (
                                S && O && !(0, v.J75)(M) && H.open({ trackId: S, albumId: Number(O) }),
                                () => {
                                    H.reset();
                                }
                            ),
                            [O, M, S, H],
                        ),
                        (0, o.useEffect)(() => {
                            var e;
                            ea && (null == (e = H.meta) ? void 0 : e.resolveAllDisclaimers) && H.meta.resolveAllDisclaimers();
                        }, [ea, H.meta]),
                        (0, o.useEffect)(() => {
                            z(V.cpa, Number(O)) || $();
                        }, [z, O, V.cpa, $]),
                        (0, o.useEffect)(
                            () => (
                                w.id && w.id !== Number(O) && (w.reset(Y), $()),
                                () => {
                                    w.reset(Y), $();
                                }
                            ),
                            [w, O, Y, $, V],
                        ),
                        (0, v.Jzs)(w.isResolved),
                        (0, A.h)(w, H.isOpened, S, H.meta, ea),
                        (0, o.useEffect)(
                            () => (
                                W(!0),
                                () => {
                                    W(!1);
                                }
                            ),
                            [O, W],
                        );
                    let el = (0, d.L)(() => (et ? (0, l.jsx)(eA, {}) : (0, l.jsx)(eu, {}))),
                        ei = [];
                    O &&
                        w.isNeededToLoad &&
                        (ei.push(w.getData({ albumId: Number(O), resumeStream: !1, preloadedAlbum: E, sonataState: Y }), w.getDonations({ albumId: Number(O) })),
                        (X || B) && ei.push(V.getCpa({ albumId: Number(O), preloadedCpa: B }))),
                        ei.length && (0, o.use)(Promise.allSettled(ei)),
                        (0, o.useEffect)(() => {
                            V.cpa && w.id && Q(V.cpa, w.id);
                        }, [V.cpa, w.id, Q]),
                        w.isNotFound && (0, n.notFound)(),
                        J && (0, n.redirect)(q),
                        (0, h.Y)({ album: w });
                    let en = ea
                        ? null != (L = null == (f = H.meta) ? void 0 : f.resolvedModalData)
                            ? L
                            : null
                        : null != (N = null == (T = w.meta) ? void 0 : T.resolvedModalData)
                          ? N
                          : null;
                    return w.isCacheNotFound
                        ? (0, l.jsx)(u.m, {})
                        : (null == (I = w.meta) ? void 0 : I.isLegalRejected) || ea
                          ? (0, l.jsx)(g.MW, { modalState: F, data: en })
                          : (0, l.jsx)(v.pVJ, {
                                pageAlbumId: Number(O),
                                children: (0, l.jsx)(v.jPc, {
                                    children: (0, l.jsxs)(b.hO, {
                                        scrollElement: R,
                                        children: [
                                            (0, l.jsx)(g.Y9, {}),
                                            (0, l.jsxs)(c.C, {
                                                scrollableContainerRef: U,
                                                className: y().root,
                                                containerClassName: y().content,
                                                scrollContentClassName: y().scrollContent,
                                                ...(0, r.Am)(et ? r.Xk.album.NON_MUSIC_ALBUM_PAGE : r.Xk.album.ALBUM_PAGE),
                                                children: [
                                                    (0, l.jsx)('div', { className: y().averageColorBackground, style: Z }),
                                                    el,
                                                    (0, l.jsx)(k, { user: K, album: w }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            });
                }),
                ex = (0, i.PA)((e) => (0, l.jsx)(v.nVz, { pageId: v._Q$.ALBUM, pageEntityId: e.albumId, children: (0, l.jsx)(eh, { ...e }) }));
        },
        65822: (e, t, a) => {
            'use strict';
            a.d(t, { ro: () => b.LastEpisodes, ZM: () => p.RelatedContent, N3: () => n, PX: () => m });
            var l = a(51606),
                i = a(90914);
            let n = l.gK.model('RelatedContentItem', { id: l.gK.string, type: l.gK.string, title: l.gK.string, albums: l.gK.array(i.JC) });
            var o = a(20073),
                s = a(66161),
                r = a(25270),
                d = a(54690);
            let c = l.gK
                    .compose(
                        l.gK.model('VolumeItemTrack', {
                            type: l.gK.maybe(l.gK.enumeration(Object.values(o.S))),
                            id: l.gK.union(l.gK.string, l.gK.number),
                            data: l.gK.maybeNull(s.vj),
                            position: l.gK.maybe(l.gK.number),
                            positionInContext: l.gK.number,
                            isBest: l.gK.maybe(l.gK.boolean),
                            hasEverFinished: l.gK.maybe(l.gK.boolean),
                        }),
                        d.XT,
                    )
                    .actions((e) => ({
                        updateEverFinished: (t) => {
                            e.hasEverFinished = t;
                        },
                    }))
                    .named('VolumeItemTrack'),
                u = l.gK.compose(l.gK.model('VolumeItemText', { type: l.gK.literal(r.rU.TEXT), data: l.gK.maybeNull(l.gK.number) }), d.XT),
                m = l.gK.union(u, c);
            var b = a(75370),
                p = a(58271);
        },
        67951: (e) => {
            e.exports = { averageColorBackground: 'PromoLandingAlbumPage_averageColorBackground__QcQaQ' };
        },
        71156: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => n, n: () => i });
            var l = a(14462);
            let i = [l.O.ABOUT, l.O.TRACKS],
                n = 10;
        },
        75006: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => i });
            var l = a(59935);
            let i = (e) =>
                (0, l.c)((t) =>
                    t.data ? (!t.data.isRemoved && t.data.isAvailable ? t.data.entityId : void 0) : 'number' == typeof e ? ''.concat(t.id, ':').concat(e) : void 0,
                );
        },
        75370: (e, t, a) => {
            'use strict';
            a.d(t, { LastEpisodes: () => v });
            var l = a(62936),
                i = a(79950),
                n = a(19718),
                o = a(44020),
                s = a(47480),
                r = a(23480),
                d = a(81959),
                c = a(66161),
                u = a(42561),
                m = a(85906),
                b = a(32608),
                p = a.n(b);
            let v = (0, n.PA)((e) => {
                let { className: t, headingVariant: a = 'h2' } = e,
                    n = (0, u.fBs)(),
                    { formatMessage: b } = (0, s.A)(),
                    { album: v, sonataState: g } = (0, u.Pjs)();
                (0, o.useEffect)(() => {
                    n();
                }, [n]);
                let { from: j, utmLink: A } = (0, u.fyy)({ pageId: u._Q$.PODCAST, blockId: u.UfI.PODCAST, contextId: v.id, contextType: d.K.Album }),
                    h = (0, o.useMemo)(
                        () =>
                            v.lastEpisodes.map((e, t) =>
                                v.isResolved && e.data
                                    ? (0, l.jsx)(
                                          u.Bki,
                                          {
                                              objectType: r.ky.PodcastEpisode,
                                              objectId: String(e.data.id),
                                              objectPosX: 1,
                                              objectPosY: t + 1,
                                              objectsCount: v.lastEpisodes.length,
                                              children: (0, l.jsx)(c.Kd, {
                                                  track: e.data,
                                                  playContextParams: {
                                                      contextData: { type: d.K.Album, meta: v.contextMeta, from: j, utmLink: A },
                                                      queueParams: { index: e.positionInContext, entityId: e.data.id },
                                                      loadContextMeta: !0,
                                                      entitiesData: g.unloadedEntitiesDataFromModels,
                                                  },
                                              }),
                                          },
                                          e.data.id,
                                      )
                                    : (0, l.jsx)(m.DS, { isActive: !0, className: p().shimmerItem, variant: u.Xjt.ALBUM }, t),
                            ),
                        [v.lastEpisodes, v.isResolved, v.contextMeta, j, A, g.unloadedEntitiesDataFromModels],
                    );
                return (0, l.jsxs)('div', {
                    className: (0, i.$)(t, p().root),
                    children: [
                        (0, l.jsx)(m.Tw, { headingVariant: a, className: p().blockHeader, title: b({ id: 'entity-names.podcast-last-episodes' }) }),
                        (0, l.jsx)('div', { role: 'list', 'aria-label': b({ id: 'podcast.last-episodes-list' }), tabIndex: 0, children: h }),
                    ],
                });
            });
        },
        75712: (e, t, a) => {
            'use strict';
            a.d(t, { PromoLandingAlbumPage: () => ea });
            var l = a(62936),
                i = a(79950),
                n = a(19718),
                o = a(69526),
                s = a(44020),
                r = a(23480),
                d = a(8669),
                c = a(60188),
                u = a(52290),
                m = a(92229),
                b = a(80876),
                p = a(25270),
                v = a(42561),
                g = a(85906),
                j = a(30295),
                A = a(45278),
                h = a(47095),
                x = a.n(h),
                k = a(67951),
                C = a.n(k),
                y = a(47480),
                _ = a(81959),
                f = a(6540),
                T = a(66161),
                I = a(16616),
                P = a(71156),
                L = a(10620),
                N = a(22561),
                O = a(9310),
                S = a(88112),
                E = a.n(S),
                B = (function (e) {
                    return (e.TOP = 'TOP'), (e.BOTTOM = 'BOTTOM'), e;
                })({}),
                M = a(59935);
            let R = {
                    MOBILE: { TEST: { [B.BOTTOM]: 'R-A-14568769-4', [B.TOP]: 'R-A-14568769-3' }, PROD: { [B.BOTTOM]: 'R-A-14568769-2', [B.TOP]: 'R-A-14568769-1' } },
                    DESKTOP: { TEST: { [B.BOTTOM]: 'R-A-14568770-4', [B.TOP]: 'R-A-14568770-3' }, PROD: { [B.BOTTOM]: 'R-A-14568770-2', [B.TOP]: 'R-A-14568770-1' } },
                },
                U = (0, n.PA)((e) => {
                    let { variant: t, className: a } = e,
                        { formatMessage: i } = (0, y.A)(),
                        n = (0, v.UlF)(),
                        { productionBlockId: o, testBlockId: s } = ((e) => {
                            let {
                                settings: { isMobile: t },
                            } = (0, v.Pjs)();
                            return t
                                ? { productionBlockId: R.MOBILE.PROD[e], testBlockId: R.MOBILE.TEST[e] }
                                : { productionBlockId: R.DESKTOP.PROD[e], testBlockId: R.DESKTOP.TEST[e] };
                        })(t),
                        r = (0, M.c)(() => {
                            n.error('Cannot render promolanding advert banner', { productionBlockId: o, testBlockId: s });
                        });
                    return (0, l.jsx)('div', {
                        'aria-label': i({ id: 'advert.banner' }),
                        role: 'banner',
                        children: (0, l.jsx)(g.fJ, { isAsync: !1, onError: r, productionBlockId: o, testBlockId: s, className: a }),
                    });
                }),
                D = (e) => {
                    let { shouldPlaceAdvertOnBottom: t } = e;
                    return (0, l.jsxs)('div', {
                        className: (0, i.$)(x().footerContainer, x().footer, E().footerContainer),
                        children: [t && (0, l.jsx)(U, { variant: B.BOTTOM, className: E().advert }), (0, l.jsx)(g.Z7, { className: E().footer })],
                    });
                };
            var X = a(35085);
            let K = (0, n.PA)(() => {
                    let { promolanding: e } = (0, v.Pjs)();
                    return e.isLoading || !e.meta || e.isRejected
                        ? (0, l.jsx)(X.c6, { isActive: !0 })
                        : (0, l.jsx)(v.FoH, {
                              blockType: r.LA.Header,
                              blockId: r.LA.Header,
                              blockPosX: 1,
                              blockPosY: 1,
                              mainObjectType: r.ky.Album,
                              mainObjectId: String(e.meta.id),
                              objectsCount: 1,
                              children: (0, l.jsx)(X.e4, { album: e.meta }),
                          });
                }),
                w = (e) => {
                    let { shouldPlaceAdvertOnTop: t } = e;
                    return (0, l.jsxs)('div', {
                        className: (0, i.$)(x().header, E().header),
                        children: [t && (0, l.jsx)(U, { variant: B.TOP, className: E().advert }), (0, l.jsx)(K, {})],
                    });
                };
            var F = a(20418),
                H = a(13030),
                Y = a(1585),
                V = a.n(Y);
            let z = (e) => {
                let { link: t } = e,
                    a = (0, v.NKK)(),
                    { ref: i, intersectionPropertyId: n } = (0, v.nMI)(),
                    o = (0, M.c)(() => {
                        a({ to: r.QT.Link, deepLink: t.url });
                    });
                return (0, l.jsx)('div', {
                    ref: i,
                    'data-intersection-property-id': n,
                    children: (0, l.jsxs)(g.N_, {
                        href: t.url,
                        target: '_blank',
                        className: V().root,
                        'aria-label': t.service.name,
                        onClick: o,
                        children: [
                            (0, l.jsx)('div', {
                                className: V().logo,
                                children: (0, l.jsx)(H.Image, { src: t.service.logoUrl, alt: t.service.name, className: V().logoImage, size: 40 }),
                            }),
                            (0, l.jsx)('div', { className: V().name, children: t.service.name }),
                        ],
                    }),
                });
            };
            var Q = a(42170),
                $ = a.n(Q);
            let G = (e) => {
                let { links: t, albumId: a } = e,
                    { formatMessage: i } = (0, y.A)(),
                    n = (0, v.fBs)();
                return (
                    (0, s.useEffect)(() => {
                        n();
                    }, [n]),
                    (0, l.jsxs)('div', {
                        className: $().root,
                        children: [
                            (0, l.jsx)(F.Heading, {
                                variant: 'h3',
                                size: 'm',
                                weight: 'bold',
                                className: $().title,
                                children: i({ id: 'album.external-streamings-title' }),
                            }),
                            (0, l.jsx)('div', {
                                className: $().list,
                                children: t.map((e, i) =>
                                    (0, l.jsx)(
                                        v.Bki,
                                        {
                                            objectType: r.ky.Link,
                                            objectId: e.url,
                                            objectPosX: i + 1,
                                            objectPosY: 1,
                                            objectsCount: t.length,
                                            mainObjectType: r.ky.Link,
                                            mainObjectId: a,
                                            children: (0, l.jsx)(z, { link: e }),
                                        },
                                        e.url,
                                    ),
                                ),
                            }),
                        ],
                    })
                );
            };
            var Z = a(81628),
                W = a(12439),
                q = a.n(W);
            let J = (e) => {
                    let { links: t, artistName: a, albumId: i, shouldSendAnalyticsOnNavigate: n } = e,
                        { formatMessage: o } = (0, y.A)(),
                        r = (0, v.fBs)();
                    return (
                        (0, s.useEffect)(() => {
                            r();
                        }, [r]),
                        (0, l.jsxs)('div', {
                            className: q().root,
                            children: [
                                (0, l.jsx)(F.Heading, { variant: 'h3', size: 'm', weight: 'bold', className: q().title, children: o({ id: 'artist.official-pages' }) }),
                                (0, l.jsx)(Z.KH, { links: t, artistName: a, albumId: i, shouldSendAnalyticsOnNavigate: n }),
                            ],
                        })
                    );
                },
                ee = (0, n.PA)(() => {
                    var e;
                    let { user: t, promolanding: a, experiments: i, settings: n } = (0, v.Pjs)(),
                        o = i.checkExperiment(v.zal.WebNextConcertsIdentityEventType, 'on'),
                        { isFreemium: d } = (0, v.XCI)(),
                        { formatMessage: u } = (0, y.A)(),
                        { from: m, utmLink: j } = (0, v.fyy)({ pageId: v._Q$.PROMOLANDING_ALBUM, blockId: v.UfI.ALBUM, contextType: _.K.Album, contextId: a.id }),
                        A = (0, L.c)({ album: a }),
                        h = (0, v.wZZ)(),
                        x = (0, f.Q$)(),
                        { contentElements: k } = (0, b.E8)(),
                        C = d || !t.isAuthorized,
                        S = C && i.checkExperiment(v.zal.WebNextPromoLandingAdvert, 'top'),
                        B = C && i.checkExperiment(v.zal.WebNextPromoLandingAdvert, 'bottom'),
                        M = a.items.length || P.k,
                        R = (0, N.j)({
                            element: (e, t) => {
                                var i;
                                if (e.data && e.type !== p.rU.TEXT)
                                    return (0, l.jsx)(v.Bki, {
                                        objectType: r.ky.Track,
                                        objectId: String(e.data.id),
                                        objectPosX: 1,
                                        objectPosY: t + 1,
                                        objectsCount: M,
                                        children: (0, l.jsx)(T.Pt, {
                                            withLightning: e.isBest && !e.data.isRemoved,
                                            track: e.data,
                                            position: e.position,
                                            albumArtists: null == a || null == (i = a.meta) ? void 0 : i.artists,
                                            playContextParams: h(t, {
                                                contextData: { type: _.K.Album, meta: a.contextMeta, from: m, utmLink: j, playDisliked: !0 },
                                                queueParams: { index: e.positionInContext },
                                                loadContextMeta: !0,
                                                entitiesData: a.state.unloadedEntitiesDataFromModels,
                                            }),
                                        }),
                                    });
                            },
                            album: a,
                        }),
                        U = !!((null == k ? void 0 : k.includes(b.Cq.Concerts)) && a.hasConcerts),
                        X = !!((null == k ? void 0 : k.includes(b.Cq.Donation)) && a.hasDonations),
                        K = !!((null == k ? void 0 : k.includes(b.Cq.SocialLinks)) && a.hasSocialLinks),
                        F = !!((null == k ? void 0 : k.includes(b.Cq.ExternalStreamings)) && a.hasExternalStreamings),
                        H = (0, c.L)(() => {
                            var e, t;
                            if (!n.isMobile || !X) return null;
                            let i = null == (t = a.donations) || null == (e = t.items) ? void 0 : e[0];
                            if (!i) return null;
                            let o = x(i.url);
                            return (0, l.jsx)(v.FoH, {
                                blockType: r.LA.Donations,
                                blockId: v.UfI.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                mainObjectType: r.ky.Album,
                                mainObjectId: String(a.id),
                                children: (0, l.jsx)(v.Bki, {
                                    objectType: r.ky.Donation,
                                    objectId: String(i.artist.id),
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    objectsCount: 1,
                                    mainObjectType: r.ky.Donation,
                                    mainObjectId: String(a.id),
                                    children: (0, l.jsx)(g.Tw, {
                                        className: E().donationBanner,
                                        titleClassName: E().donationBannerTitle,
                                        coverUrl: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.68ee8413749d24738fe2013b/%%',
                                        title: u({ id: 'donation.support-artist' }, { count: 1 }),
                                        description: u({ id: 'donation.transfer-any-amount' }),
                                        viewAllActionLink: o,
                                        'aria-label': u({ id: 'donation.support-artist' }, { count: 1 }),
                                        titleSize: 'xs',
                                        shouldSendAnalyticsOnLoaded: !0,
                                    }),
                                }),
                            });
                        }),
                        Y = (0, c.L)(() => {
                            var e, t;
                            if (!U) return null;
                            let i = a.promoCampaign.artistId;
                            if (!i) return null;
                            let n = o ? I.MU : I.ZH;
                            return (0, l.jsx)(v.FoH, {
                                blockType: r.LA.Concerts,
                                blockId: r.LA.Concerts,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: null == (e = a.concerts.items) ? void 0 : e.length,
                                mainObjectType: r.ky.Album,
                                mainObjectId: String(a.id),
                                children: (0, l.jsx)(I.BD, {
                                    artistId: String(i),
                                    title: u({ id: 'entity-names.concerts' }),
                                    className: E().concertsBlock,
                                    headerClassName: E().concertsBlockHeader,
                                    containerClassName: E().concertsBlockContainer,
                                    isLoading: a.concerts.isLoading,
                                    children:
                                        null == (t = a.concerts.items)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  var i, s;
                                                  let {
                                                      objectPosX: d,
                                                      objectPosY: c,
                                                      objectsCount: u,
                                                  } = (0, v.$tp)({
                                                      index: t,
                                                      count: null != (s = null == (i = a.concerts.items) ? void 0 : i.length) ? s : 0,
                                                      itemsCountPerColumn: 2,
                                                  });
                                                  return (0, l.jsx)(
                                                      v.Bki,
                                                      {
                                                          objectType: r.ky.Concert,
                                                          objectId: String(e.id),
                                                          objectPosX: d,
                                                          objectPosY: c,
                                                          objectsCount: u,
                                                          mainObjectType: r.ky.Concert,
                                                          mainObjectId: String(a.id),
                                                          children: (0, l.jsx)(I.VN, {
                                                              artistId: null,
                                                              concert: e,
                                                              meta: (0, l.jsx)(n, { concert: e }),
                                                              forceAfishaWidget: !0,
                                                              shouldSendAnalyticsOnHide: !0,
                                                              shouldShowMask: o,
                                                          }),
                                                      },
                                                      e.id,
                                                  );
                                              }),
                                }),
                            });
                        }),
                        V = (0, c.L)(() => {
                            var e, t, i, n;
                            if (!K || !a.socialLinks.items) return null;
                            let o = null != (n = null == (i = a.meta) || null == (t = i.artists) || null == (e = t[0]) ? void 0 : e.name) ? n : '';
                            return (0, l.jsx)(v.FoH, {
                                blockType: r.LA.OfficialPages,
                                blockId: r.LA.OfficialPages,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: a.socialLinks.items.length,
                                mainObjectType: r.ky.Album,
                                mainObjectId: String(a.id),
                                children: (0, l.jsx)(J, { links: a.socialLinks.items, artistName: o, albumId: String(a.id), shouldSendAnalyticsOnNavigate: !0 }),
                            });
                        }),
                        z = (0, c.L)(() =>
                            F && a.externalStreamings.items
                                ? (0, l.jsx)(v.FoH, {
                                      blockType: r.LA.ReleaseLinks,
                                      blockId: r.LA.ReleaseLinks,
                                      blockPosX: 1,
                                      blockPosY: 1,
                                      objectsCount: a.externalStreamings.items.length,
                                      mainObjectType: r.ky.Album,
                                      mainObjectId: String(a.id),
                                      children: (0, l.jsx)(G, { links: a.externalStreamings.items, albumId: String(a.id) }),
                                  })
                                : null,
                        ),
                        Q = (0, s.useMemo)(() => {
                            if (!k) return [];
                            let e = { [b.Cq.Donation]: H, [b.Cq.Concerts]: Y, [b.Cq.PlusOffer]: null, [b.Cq.ExternalStreamings]: z, [b.Cq.SocialLinks]: V };
                            return k.map((t) => ({ type: t, block: e[t] }));
                        }, [k, H, Y, z, V]);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(w, { shouldPlaceAdvertOnTop: S }),
                            (0, l.jsx)(v.FoH, {
                                blockType: r.LA.Tracks,
                                blockId: r.LA.Tracks,
                                blockPosX: 1,
                                blockPosY: 2,
                                objectsCount: M,
                                mainObjectType: r.ky.Album,
                                mainObjectId: String(a.id),
                                children: (0, l.jsx)(O.F, {
                                    count: M,
                                    itemContentCallback: R,
                                    getDataByRange: A,
                                    ariaLabel: u({ id: 'entity-names.albums-tracks-list' }, { albumName: (null == (e = a.meta) ? void 0 : e.title) || '' }),
                                }),
                            }),
                            Q.length > 0 &&
                                (0, l.jsx)('div', {
                                    className: E().contentBlocks,
                                    children: Q.map((e) => {
                                        let { type: t, block: a } = e;
                                        return (0, l.jsx)(s.Fragment, { children: a }, t);
                                    }),
                                }),
                            (0, l.jsx)(D, { shouldPlaceAdvertOnBottom: B }),
                        ],
                    });
                }),
                et = (0, n.PA)((e) => {
                    var t, a, n;
                    let { albumId: h, preloadedAlbum: k, preloadedCpa: y, isActive: _, artistId: f } = e,
                        { experiments: T, disclaimerModalState: I, promolanding: P, albumCPA: L } = (0, v.Pjs)(),
                        { contentScrollRef: N, setContentScrollRef: O } = (0, v.gKY)(),
                        { setClidToQuery: S, deleteClidFromQuery: E, checkIsValidClid: B } = (0, v.IQF)(),
                        { contentElements: M, headerElements: R } = (0, b.E8)(),
                        U = (0, v.l$t)({ mainObjectType: r.ky.Album }),
                        D = (0, v.qne)(v.K3F.UTM_CAMPAIGN) || void 0,
                        X = (0, c.L)(() => {
                            if (k) {
                                var e, t;
                                return (null == (e = k.deprecation) ? void 0 : e.targetAlbumId) && (null == (t = k.deprecation) ? void 0 : t.targetAlbumId) !== Number(h);
                            }
                            return P.deprecationTargetAlbumId && P.deprecationTargetAlbumId !== Number(h);
                        }),
                        K = (0, c.L)(() => {
                            var e;
                            if (k && (null == (e = k.deprecation) ? void 0 : e.targetAlbumId) && X) {
                                let { href: e } = (0, v.uvd)('/album/:albumId', { params: { albumId: k.deprecation.targetAlbumId } });
                                return e;
                            }
                            if (X && P.deprecationTargetAlbumId) {
                                let { href: e } = (0, v.uvd)('/album/:albumId', { params: { albumId: P.deprecationTargetAlbumId } });
                                return e;
                            }
                            let { href: t } = (0, v.uvd)('/album/:albumId', { params: { albumId: h } });
                            return t;
                        }),
                        w = (0, p.cp)({ album: P.meta, shouldHistoryBack: !0 }),
                        F = (0, v.ytd)(null == (t = P.meta) ? void 0 : t.averageColor),
                        { headerStyle: H } = (0, m.QZ)(F);
                    return ((0, A.Y)({ album: P }),
                    (0, v.Jzs)(P.isResolved),
                    (0, j.h)(P, !1),
                    (0, s.useEffect)(() => {
                        void 0 !== f && P.promoCampaign.setArtistId(f);
                    }, [f, P.promoCampaign]),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == (e = P.meta) ? void 0 : e.isUnsafeLegal) && w();
                    }, [w, null == (a = P.meta) ? void 0 : a.isUnsafeLegal]),
                    (!T.checkExperiment(v.zal.WebNextPromoLanding, 'on') || X || P.promoCampaign.isPromoCampaignInactive) && (0, o.redirect)(K),
                    ((e) => {
                        let { redirectUrl: t } = e,
                            a = (0, o.useSearchParams)();
                        v.M3M.every((e) => {
                            let { queryKey: t } = e;
                            return a.has(t);
                        }) || (0, o.redirect)(t);
                    })({ redirectUrl: K }),
                    (0, s.useEffect)(
                        () => (
                            B(L.cpa, Number(h)) || E(),
                            L.cpa && P.id && S(L.cpa, P.id),
                            () => {
                                E();
                            }
                        ),
                        [h, L.cpa, P.id, S, E, B],
                    ),
                    (0, s.useEffect)(
                        () => (
                            U(!0),
                            () => {
                                U(!1);
                            }
                        ),
                        [h, U],
                    ),
                    h && P.promoCampaign.isNeededToLoad
                        ? (0, s.use)(P.getDataByCampaign({ albumId: Number(h), preloadedAlbum: k, preloadedCpa: y, isActive: _, campaignId: D }))
                        : (P.promoCampaign.artistId &&
                              P.donations.isNeededToLoad &&
                              ((null == M ? void 0 : M.includes(b.Cq.Donation)) || (null == R ? void 0 : R.includes(b._7.Donation))) &&
                              (0, s.use)(P.getArtistDonations({ artistId: P.promoCampaign.artistId })),
                          P.promoCampaign.artistId &&
                              P.concerts.isNeededToLoad &&
                              (null == M ? void 0 : M.includes(b.Cq.Concerts)) &&
                              (0, s.use)(P.getArtistConcerts({ artistId: P.promoCampaign.artistId })),
                          P.promoCampaign.artistId &&
                              P.socialLinks.isNeededToLoad &&
                              (null == M ? void 0 : M.includes(b.Cq.SocialLinks)) &&
                              (0, s.use)(P.getArtistSocialLinks({ artistId: P.promoCampaign.artistId })),
                          P.externalStreamings.isNeededToLoad &&
                              (null == M ? void 0 : M.includes(b.Cq.ExternalStreamings)) &&
                              (0, s.use)(P.getAlbumExternalStreamings({ albumId: Number(h) }))),
                    null == (n = P.meta) ? void 0 : n.isLegalRejected)
                        ? (0, l.jsx)(g.MW, { modalState: I })
                        : (0, l.jsx)(v.pVJ, {
                              pageAlbumId: Number(h),
                              children: (0, l.jsxs)(m.hO, {
                                  scrollElement: N,
                                  children: [
                                      (0, l.jsx)(g.Y9, { variant: g.Vw.PROMO_LANDING }),
                                      (0, l.jsxs)(u.C, {
                                          scrollableContainerRef: O,
                                          className: x().root,
                                          containerClassName: x().content,
                                          scrollContentClassName: x().scrollContent,
                                          ...(0, d.Am)(d.Xk.promolanding.PROMOLANDING_ALBUM_PAGE),
                                          children: [
                                              (0, l.jsx)('div', { className: (0, i.$)(x().averageColorBackground, C().averageColorBackground), style: H }),
                                              (0, l.jsx)(ee, {}),
                                          ],
                                      }),
                                  ],
                              }),
                          });
                }),
                ea = (0, n.PA)((e) =>
                    (0, l.jsx)(v.nVz, {
                        pageId: v._Q$.PROMOLANDING_ALBUM,
                        pageEntityId: e.albumId,
                        displayReasonId: e.campaignId,
                        children: (0, l.jsx)(v.jPc, { children: (0, l.jsx)(et, { ...e }) }),
                    }),
                );
        },
        81027: (e) => {
            e.exports = { root: 'TextVolume_root__wxSaK' };
        },
        88112: (e) => {
            e.exports = {
                header: 'PromoLandingAlbumPageContent_header__olZnY',
                advert: 'PromoLandingAlbumPageContent_advert__V34EQ',
                footerContainer: 'PromoLandingAlbumPageContent_footerContainer__QiHrX',
                footer: 'PromoLandingAlbumPageContent_footer__ICBBF',
                contentBlocks: 'PromoLandingAlbumPageContent_contentBlocks__b18_R',
                donationBanner: 'PromoLandingAlbumPageContent_donationBanner__gvkEC',
                donationBannerTitle: 'PromoLandingAlbumPageContent_donationBannerTitle__FS9IZ',
                concertsBlockHeader: 'PromoLandingAlbumPageContent_concertsBlockHeader__RRhNC',
                concertsBlockContainer: 'PromoLandingAlbumPageContent_concertsBlockContainer__onkAq',
            };
        },
        91378: (e) => {
            e.exports = { icon: 'NotificationDownloadError_icon__r2AWx', message: 'NotificationDownloadError_message__WwjsI' };
        },
        92822: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => i });
            var l = a(42561);
            let i = (e) => {
                let { albumId: t, deprecationTargetAlbumId: a, trackId: i, realId: n, searchParams: o } = e,
                    s = Number(t),
                    r = new URLSearchParams(o);
                r.delete('albumId'), r.delete('trackId');
                let d = Object.fromEntries(r);
                if ('number' == typeof a && a !== s) {
                    if (i) {
                        let { href: e } = (0, l.uvd)('/album/:albumId/track/:trackId', { params: { albumId: a, trackId: i }, query: d });
                        return { deprecationUrl: e, shouldRedirect: !0 };
                    }
                    let { href: e } = (0, l.uvd)('/album/:albumId', { params: { albumId: a }, query: d });
                    return { deprecationUrl: e, shouldRedirect: !0 };
                }
                if (i && n && n !== i) {
                    let { href: e } = (0, l.uvd)('/album/:albumId/track/:trackId', { params: { albumId: t, trackId: n }, query: d });
                    return { deprecationUrl: e, shouldRedirect: !0 };
                }
                return { deprecationUrl: '', shouldRedirect: !1 };
            };
        },
        93507: (e) => {
            e.exports = { root: 'Shimmer_root__NvUMY' };
        },
        93970: (e) => {
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
        96918: (e) => {
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
    },
]);
